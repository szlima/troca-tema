
const definirTema= tema => {   
    const body= document.querySelector('body');
    const botaoTema= document.querySelector('#botaoTema');
    const componentes= document.querySelectorAll('.componente');

    body.style.background= tema.fundo;
    body.style.color= tema.padrao;

    botaoTema.style.color= tema.destaque;
    botaoTema.classList.add(tema.icone);
    botaoTema.classList.remove(tema.iconeAntigo);  

    for(let i=0; i<componentes.length; i++)
        componentes[i].style.borderColor= tema.destaque;
};

//Estado inicial da aplicação
const estadoPadrao= {
    fundo: 'rgb(255, 245, 233)',
    padrao: 'rgb(105, 110, 110)',
    destaque: 'rgb(228, 95, 172)',
    icone: 'fa-moon'
};

definirTema(estadoPadrao);