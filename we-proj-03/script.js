const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const botaoCalcular = document.getElementById('botaoCalcular');
const mediaEl = document.getElementById('media');
const statusEl = document.getElementById('status');

botaoCalcular.addEventListener('click', function() {
    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);

    if (!n1 && n1 !== 0 || !n2 && n2 !== 0 || !n3 && n3 !== 0) {
        mediaEl.textContent = 'Preencha todas as notas!';
        mediaEl.className = 'reprovado';
        statusEl.textContent = '';
        return;
    }

    const media = (n1 + n2 + n3) / 3;
    mediaEl.textContent = `Média: ${media.toFixed(2)}`;

    if (media >= 7) {
        statusEl.textContent = 'Aprovado ✅';
        statusEl.className = 'aprovado';
        mediaEl.className = 'aprovado';
    } else if (media >= 5) {
        statusEl.textContent = 'Recuperação ⚠️';
        statusEl.className = 'recuperacao';
        mediaEl.className = 'recuperacao';
    } else {
        statusEl.textContent = 'Reprovado ❌';
        statusEl.className = 'reprovado';
        mediaEl.className = 'reprovado';
    }
});