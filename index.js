
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

//Action types
const TEMA_ESCURO= 'TEMA_ESCURO';
const TEMA_CLARO= 'TEMA_CLARO';

//Estado inicial da aplicação
const estadoPadrao= {
    fundo: 'rgb(255, 245, 233)',
    padrao: 'rgb(105, 110, 110)',
    destaque: 'rgb(228, 95, 172)',
    icone: 'fa-moon'
};

//Action creators
function mudarParaClaro(){
    return {
        type: TEMA_CLARO,
        payload: {
            ...estadoPadrao
        }
    };
}

function mudarParaEscuro(){
    return{
        type: TEMA_ESCURO,
        payload: {
            fundo: 'rgb(82, 82, 82)',
            padrao: 'rgb(255, 235, 211)',
            destaque: 'rgb(226, 183, 208)',
            icone: 'fa-sun'
        }        
    };
}


definirTema(estadoPadrao);