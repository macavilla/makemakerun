// フラグメントシェーダーにわたす座標
varying vec2 texCoord;

// 受け取った座標
attribute vec4 aPosition;
attribute vec2 aTexCoord;

// プログラムの処理
void main() {
  // フラグメントシェーダーに座標をわたす設定
  texCoord = aTexCoord;

  // 座標の位置を調整する
  vec4 position = aPosition - 0.5;

  // 反転した画像を調整する
  position.y *= -1.0;
  
  position *= 2.0;

  // 4つめの座標の値を調整する
  position.w = 1.0;

  // WEBGLに調整した座標をわたす
  gl_Position = position;
}
