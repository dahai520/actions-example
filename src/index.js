export function render() {
  const div = document.createElement('div');
  div.innerHTML = `
    <div style="color:#888888">
      <h1>Hello World</h1>
    </div>
  `;
  document.querySelector('body').appendChild(div);
}
