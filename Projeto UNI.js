const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('conteudo')
const backgroud = document.querySelector('backgroud')

botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    backgroud.classList.toggle('ativo')
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
})

backgroud.addEventListener('click', () => {
    menuLateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    backgroud.classList.remove('ativo')
    document.body.style.backgroundColor = '#ecf0f1'


})