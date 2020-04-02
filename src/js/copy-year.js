const yearNode = document.querySelector('#js-copy-year');
const text = yearNode.textContent;

yearNode.innerHTML = `${text} - ${new Date().getFullYear()}`;
