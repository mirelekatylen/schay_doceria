// 1. SELECIONAMOS TODOS OS LINKS DA BARRA INFERIOR
const navItems = document.querySelectorAll('.nav-item');

// 2. SELECIONAMOS TODAS AS SEÇÕES DE CONTEÚDO
const tabContents = document.querySelectorAll('.tab-content');

// 3. ADICIONAMOS UM EVENTO DE CLIQUE PARA CADA ITEM DA NAVEGAÇÃO
navItems.forEach(item => { 
    item.addEventListener('click', function(event) {
        //IMPREDE QUE O LINK TENTE RECARREGAR A PÁGINA OU MUDAR A URL
        event.preventDefault();

        //REMOVE A CLASSE 'ACTIVE' DE TODOS OS BOTÕES PARA DESMARCÁ-LOS
        navItems.forEach(nav => nav.classList.remove('active'));

        //ESCONDE TODAS AS SEÇÕES DE CONTEÚDO
        tabContents.forEach(content => content.classList,remove('active'));

        //ADICIONA A CLASSE 'ACTIVE' APENAS NO BOTÃO QUE FOI CLICADO
        this.classList.add('active');

        //PEGA O ID DA SEÇÃO A PARTIR DO ATRIBUTO 'HREF' DO LINK (EX.: "CARDDPIO" VIRA CARDAPIO)
        const targetID = this.getAttribute('href').substring(1);

        //ENCONTRA A SEÇÃO CORRESPONDENTE E MOSTRA NA TELA ADICIONANDO A CLASSE 'ACTIVE'
        const targetSection = document.getElementById(targetID);
        if(targetSection) {
            targetSection.classList.add('active');
        }
    });
});