precision mediump float;

// バーテックスシェーダーから受け取る座標
varying vec2 texCoord;

// 変数
uniform sampler2D textureFromJS;
uniform float time;
uniform float redNoise;

// ピクセルの色を決める処理
void main(){
  // 座標の変数
  vec2 uv = texCoord;

  // 座標に波の動きを加える
  uv.x +=  sin(gl_FragCoord.y * 0.05) * 0.01;
  vec4 color = texture2D(textureFromJS, uv);
  color.r += texture2D(textureFromJS, vec2(uv.x+redNoise, uv.y)).r;
  
  color.w = 1.0;
  
  // ピクセルの色を設定
  gl_FragColor = color;
}
