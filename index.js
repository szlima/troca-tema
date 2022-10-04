const body= document.querySelector('body');
const botaoTema= document.querySelector('#botaoTema');
const componentes= document.querySelectorAll('.componente');

const definirTema= tema => {   
    body.style.background= tema.fundo;
    body.style.color= tema.padrao;

    botaoTema.style.color= tema.destaque;
    botaoTema.classList.add(tema.icone);
    botaoTema.classList.remove(tema.iconeAntigo);  

    for(let i=0; i<componentes.length; i++)
        componentes[i].style.borderColor= tema.destaque;
};
