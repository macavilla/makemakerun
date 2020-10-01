precision mediump float;

// バーテックスシェーダーから受け取る座標
varying vec2 texCoord;

// 変数
uniform sampler2D tex;
uniform sampler2D meltTexture;
uniform float time;

// ピクセルの色を決める処理
void main(){
  // 座標の変数
  vec2 uv = texCoord;
    
    vec2 melt = vec2(uv.x, uv.y*0.15+time);
    vec3 meltTex = texture2D(meltTexture,melt).rgb;
    meltTex = meltTex / 10.0;
    uv = uv.xy - meltTex.xy;
    vec4 color = texture2D(tex, uv);
    
    gl_FragColor = color;
}
