// ボタン要素を取得
const btn = document.getElementById('btn');

// 文章を表示している要素を取得
const text = document.getElementById('text');

// ボタンがクリックされたときの処理
btn.addEventListener('click', () => {
  text.textContent = 'ボタンがクリックされました';
});
