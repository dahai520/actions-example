export function render() {
  const div = document.createElement('div');
  div.innerHTML = `
    <div style="color:#888888">
      <h1>Hello World 001</h1>
    </div>
  `;
  document.querySelector('body').appendChild(div);
}
