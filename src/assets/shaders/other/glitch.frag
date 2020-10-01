precision mediump float;

uniform float time;
uniform sampler2D textureFromJS;

varying vec2 texCoord;

#define RGBSHIFT
#define OLDSCREENLINES
#define NUMBER_LINES 269.

const float F3 =  0.3333333;
const float G3 =  0.1666667;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i); // Avoid truncation effects in permutation
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return fract(130.0 * dot(m, g))*2. - 1.;
}

float rand(float seed){
    return fract(sin(dot(vec2(seed) ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 random3(vec3 c) {
	float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
	vec3 r;
	r.z = fract(512.0*j);
	j *= .125;
	r.x = fract(512.0*j);
	j *= .125;
	r.y = fract(512.0*j);
	return r-0.5;
}

const mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
const mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
const mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);


float simplex3d(vec3 p) {
	 /* 1. find current tetrahedron T and it's four vertices */
	 /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */
	 /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/

	 /* calculate s and x */
	 vec3 s = floor(p + dot(p, vec3(F3)));
	 vec3 x = p - s + dot(s, vec3(G3));

	 /* calculate i1 and i2 */
	 vec3 e = step(vec3(0.0), x - x.yzx);
	 vec3 i1 = e*(1.0 - e.zxy);
	 vec3 i2 = 1.0 - e.zxy*(1.0 - e);

	 /* x1, x2, x3 */
	 vec3 x1 = x - i1 + G3;
	 vec3 x2 = x - i2 + 2.0*G3;
	 vec3 x3 = x - 1.0 + 3.0*G3;

	 /* 2. find four surflets and store them in d */
	 vec4 w, d;

	 /* calculate surflet weights */
	 w.x = dot(x, x);
	 w.y = dot(x1, x1);
	 w.z = dot(x2, x2);
	 w.w = dot(x3, x3);

	 /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */
	 w = max(0.6 - w, 0.0);

	 /* calculate surflet components */
	 d.x = dot(random3(s), x);
	 d.y = dot(random3(s + i1), x1);
	 d.z = dot(random3(s + i2), x2);
	 d.w = dot(random3(s + 1.0), x3);

	 /* multiply d by w^4 */
	 w *= w;
	 w *= w;
	 d *= w;

	 /* 3. return the sum of the four surflets */
	 return dot(d, vec4(52.0));
}

float simplex3d_fractal(vec3 m) {
    return   0.5333333*simplex3d(m*rot1)
			+0.2666667*simplex3d(2.0*m*rot2)
			+0.1333333*simplex3d(4.0*m*rot3)
			+0.0666667*simplex3d(8.0*m);
}


vec2 displace(vec2 co, float seed, float seed2) {
    vec2 shift = vec2(0);
    if (rand(seed) > 0.5) {
        shift += 0.1 * vec2(2. * (0.5 - rand(seed2)));
    }
    if (rand(seed2) > 0.6) {
        if (co.y > 0.5) {
            shift.x *= rand(seed2 * seed);
        }
    }
    return shift*500.;
}

vec4 interlace(vec3 co, vec4 col) {
    col += simplex3d_fractal(co*8.0+8.0)*0.3;
    //col *= smoothstep(0.0, 0.005, abs(0.6-co.x)); // hello, iq :)

    return col;
}

vec2 scale(vec2 p, float d) {
    return (p - vec2(.5)) * (1. - d) + vec2(.5);
}

void main(void) {
    vec2 uv = texCoord;
    vec2 dir = uv - vec2(0.5);
  dir *= 0.1;
    vec2 rDisplace = vec2(0);
    vec2 gDisplace = vec2(0);
    vec2 bDisplace = vec2(0);
    float rcolor;
    float gcolor;
    float bcolor;

    rDisplace = displace(uv, time * 2., 2. + time);
    gDisplace = displace(uv, time * 3., 3. + time);
    bDisplace = displace(uv, time * 5., 5. + time);

    rDisplace.x += 5. * (0.5 - rand(time * 37. * uv.y));
    gDisplace.x += 7. * (0.5 - rand(time * 47. * uv.y));
    bDisplace.x += 1. * (0.5 - rand(time * 57. * uv.y));

    rDisplace.y += 1. * (0.5 - rand(time * 37. * uv.x));
    gDisplace.y += 1. * (0.5 - rand(time * 47. * uv.x));
    bDisplace.y += 1. * (0.5 - rand(time * 57. * uv.x));

    vec2 p = uv * 3.0 * vec2(1., 2.);
    vec2 id = floor(p);

    // Use the noise function
    id.xy = mod(id.xy, 6.0);
    float n = snoise(id*time*0.0015);
    n = step(0.8, n);

    vec2 _id = floor(p * 600.);
    float y = _id.y + time;
    float a = pow(sin(y), 6.)*sin(y)*pow(sin(y), 3.)*20.;
    vec2 sn = vec2(simplex3d_fractal(vec3(uv, time*0.01)))*0.5;
    if (n == 0.0) {
      if (mod(time, 150.) > 90.) {
        rcolor = texture2D(textureFromJS, uv+sn).r;
        gcolor = texture2D(textureFromJS, uv+sn).g;
        bcolor = texture2D(textureFromJS, uv+sn).b;
      } else {
        rcolor = texture2D(textureFromJS, uv).r;
        gcolor = texture2D(textureFromJS, uv).g;
        bcolor = texture2D(textureFromJS, uv).b;
      }
    } else {
        rcolor = texture2D(textureFromJS, uv.xy  + n*0.1).r;
        gcolor = texture2D(textureFromJS, uv.xy  + n*0.1 + a).g;
        bcolor = texture2D(textureFromJS, uv.xy  + n*0.1).b;
    }

    vec3 co = vec3(uv, time);
    gl_FragColor = interlace(co, vec4(rcolor, gcolor, bcolor, 1.));
  // gl_FragColor = texture2D(textureFromJS, uv.xy);

}
