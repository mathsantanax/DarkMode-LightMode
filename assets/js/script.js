let lightMode = 'Light Mode';
let darkMode = 'Dark Mode'

// função para detectar e mudar modo
function changeMode(string){
    if(string == 'Auto')
    {
        if(schemaDarkPreferido.matches == true)
        {
            changeClasses(darkModeClass);
            changeText(darkMode + ' Auto')
        }
        else if(schemaLightPreferido.matches)
        {
            changeClasses(lightModeClass);
            changeText(lightMode + ' Auto')
        }

    }
    else if(string === 'Dark')
    {
        changeClasses(darkModeClass);
        changeText(darkMode + ' Manual')
    }
    else if(string === "Light")
    {
        changeClasses(lightModeClass);
        changeText(lightMode + ' Manual')
    }
    else if (string === 'Default')
    {
        changeClasses(darkModeClass);
        changeText(darkMode)
    }
}

function changeClasses(className){
    // removendo darMode
    h1.classList.remove(darkModeClass);
    body.classList.remove(darkModeClass);
    footer.classList.remove(darkModeClass);

    // removendo lighMode
    h1.classList.remove(lightModeClass);
    body.classList.remove(lightModeClass);
    footer.classList.remove(lightModeClass);

    // adicionando modos na pagina
    h1.classList.add(className);
    body.classList.add(className);
    footer.classList.add(className);
}

//mudando o nome do h1 
function changeText(string){

    h1.innerHTML = string + ' ON'; 
}


// pegando o schema preferido do windows
const schemaDarkPreferido = window.matchMedia('(prefers-color-scheme: dark)');
const schemaLightPreferido = window.matchMedia('(prefers-color-scheme: light)');

// definindo as classe como dark ou light 
const darkModeClass = 'dark-mode';
const lightModeClass = 'light-mode';

// pegando o elemendo da pagina
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


// deixando a pagina no automatico escura
changeMode('Default');

// Mudando automaticamento no loaded da pagina
document.addEventListener('DOMContentLoaded', function(){

    const radios = document.querySelectorAll('input[name="value-radio"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function(){
            changeMode(this.value);
        });
    });
});



