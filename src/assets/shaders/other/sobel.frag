precision mediump float;

uniform sampler2D textureFromJS;
uniform float     time;
uniform float     hCoef[9];
uniform float     vCoef[9];
varying vec2      texCoord;

const float redScale   = 0.298912;
const float greenScale = 0.586611;
const float blueScale  = 0.114478;
const vec3  monochromeScale = vec3(redScale, greenScale, blueScale);

void main(void){
    vec2 offset[9];
    offset[0] = vec2(-1.0, -1.0)/(720.*4.);
    offset[1] = vec2( 0.0, -1.0)/(720.*4.);
    offset[2] = vec2( 1.0, -1.0)/(720.*4.);
    offset[3] = vec2(-1.0,  0.0)/(720.*4.);
    offset[4] = vec2( 0.0,  0.0)/(720.*4.);
    offset[5] = vec2( 1.0,  0.0)/(720.*4.);
    offset[6] = vec2(-1.0,  1.0)/(720.*4.);
    offset[7] = vec2( 0.0,  1.0)/(720.*4.);
    offset[8] = vec2( 1.0,  1.0)/(720.*4.);
    float tFrag = 1.0 / (720.*4.);
    vec3  horizonColor = vec3(0.0);
    vec3  verticalColor = vec3(0.0);
    vec4  destColor = vec4(0.0);

    horizonColor  += texture2D(textureFromJS, (texCoord + offset[0])).rgb * hCoef[0];
    horizonColor  += texture2D(textureFromJS, (texCoord + offset[1])).rgb * hCoef[1];
    horizonColor  += texture2D(textureFromJS, (texCoord + offset[2])).rgb * hCoef[2];
    horizonColor  += texture2D(textureFromJS, (texCoord + offset[3])).rgb * hCoef[3];
    horizonColor  += texture2D(textureFromJS, (texCoord + offset[4])).rgb * hCoef[4];
    horizonColor  += texture2D(textureFromJS, (texCoord + offset[5])).rgb * hCoef[5];
    horizonColor  += texture2D(textureFromJS, (texCoord + offset[6])).rgb * hCoef[6];
    horizonColor  += texture2D(textureFromJS, (texCoord + offset[7])).rgb * hCoef[7];
    horizonColor  += texture2D(textureFromJS, (texCoord + offset[8])).rgb * hCoef[8];

    verticalColor += texture2D(textureFromJS, (texCoord + offset[0])).rgb * vCoef[0];
    verticalColor += texture2D(textureFromJS, (texCoord + offset[1])).rgb * vCoef[1];
    verticalColor += texture2D(textureFromJS, (texCoord + offset[2])).rgb * vCoef[2];
    verticalColor += texture2D(textureFromJS, (texCoord + offset[3])).rgb * vCoef[3];
    verticalColor += texture2D(textureFromJS, (texCoord + offset[4])).rgb * vCoef[4];
    verticalColor += texture2D(textureFromJS, (texCoord + offset[5])).rgb * vCoef[5];
    verticalColor += texture2D(textureFromJS, (texCoord + offset[6])).rgb * vCoef[6];
    verticalColor += texture2D(textureFromJS, (texCoord + offset[7])).rgb * vCoef[7];
    verticalColor += texture2D(textureFromJS, (texCoord + offset[8])).rgb * vCoef[8];

    if(mod(time, 2.0) < 1.2){
        destColor = vec4(vec3(sqrt(horizonColor * horizonColor + verticalColor * verticalColor)), 1.0);
    }else{
        destColor = texture2D(textureFromJS, texCoord);
    }
    if (mod(time, 5.0) > 2.5) {
        destColor.rgb = vec3(1.0) - destColor.rgb;
    }

    gl_FragColor = destColor;
}
