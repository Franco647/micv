//menu lateral

var menu_visible =false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none"
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i = 0; i <= 16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let java = document.getElementById("java");
crearBarra(java);
let cc = document.getElementById("cc");
crearBarra(cc);
let sql = document.getElementById("sql");
crearBarra(sql);
let python = document.getElementById("python");
crearBarra(python);

let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 15, 2, intervalJava);
        },100);
        const intervalCc = setInterval(function(){
            pintarBarra(cc, 15, 3, intervalCc);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 16, 4, intervalSql);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 11, 5, intervalPython);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

// function descargarCV() {
//   const link = document.createElement("a");
//   link.href = "CV_Franco_Thobokholt.pdf";
//   link.download = "CV_Franco_Thobokholt.pdf";
//   link.click();
// }
