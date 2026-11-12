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
        tabContents.forEach(content => content.classList.remove('active'));

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

// --- CONTROLE DO MENU LATERAL ---

const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');
const categoryLinks = document.querySelectorAll('.category-link');

// Função para abrir o menu
function openSideMenu() {
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
}

// Função para fechar o menu
function closeSideMenu() {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
}

// Eventos de clique para abrir e fechar
openMenuBtn.addEventListener('click', openSideMenu);
closeMenuBtn.addEventListener('click', closeSideMenu);
menuOverlay.addEventListener('click', closeSideMenu); // Fecha ao clicar fora do menu

// Quando o cliente clica em uma categoria dentro do menu lateral
categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Fecha o menu lateral
        closeSideMenu();

        // Ativa a aba "Cardápio" na barra inferior e mostra a seção
        navItems.forEach(nav => nav.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        const cardapioNav = document.querySelector('.nav-item[href="#cardapio"]');
        const cardapioSection = document.getElementById('cardapio');
        
        if (cardapioNav) cardapioNav.classList.add('active');
        if (cardapioSection) cardapioSection.classList.add('active');
    });
});