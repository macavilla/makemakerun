precision mediump float;

// 変数
uniform sampler2D tex;
uniform float time;

// バーテックスシェーダーから受け取る座標
varying vec2 texCoord;

// ピクセルの色を決める処理
void main(){
  // 座標の変数
  vec2 uv = texCoord;
  uv *= 2.0;
  vec2 fractUv = fract(uv);
  vec2 floorUv = floor(uv);
  if (floorUv.x > 0.) {
    fractUv.x = 1. - fractUv.x;
  }
  if (floorUv.y > 0.) {
    fractUv.y = 1. - fractUv.y;
  }
  vec4 color = texture2D(tex, fractUv);
    
  // ピクセルの色を設定
  gl_FragColor = color;
}
