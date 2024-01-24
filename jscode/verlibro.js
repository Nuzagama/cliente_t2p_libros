// Rescatamos los datos del SessionStorage

function recuperarSession(){
    let datos = JSON.parse(sessionStorage.getItem("key"));
    console.log(datos);

    // Rescatamos el section
    let section = document.querySelector("section");

    // Creamos la tabla
    let tabla = document.createElement("table");
    // Creamos el titulo
    let titulo = document.createElement("h1");
    titulo.textContent = datos.title;
    // Creamos la imagen de portada
    let imgCover = document.createElement("img");
    imgCover.src = datos.cover;


 // Recorremos el objeto con un for in
 for (let clave in datos) {
    // Si la clave es cover o author lo ignoramos
    if (clave !== "cover" && clave !== "title") {
        // Creamos los elementos de la tabla
        let tr = document.createElement("tr");
        let tdClave = document.createElement("td");
        let tdValor = document.createElement("td");
    
        // Primer tr (izq)
        tdClave.textContent = clave;
        // Segundo tr (der)
        let valor = datos[clave];

        // Si valor se trata de un objeto le hacemos un JSON.stringify
        if (typeof valor == "object") {
            if(clave == "author"){
                valor = valor.name;
            }
        }

        tdValor.textContent = valor;

        tr.appendChild(tdClave);
        tr.appendChild(tdValor);
        tabla.appendChild(tr);


    }
}

section.appendChild(titulo);
section.appendChild(tabla);
section.appendChild(imgCover);

let botonVolver = document.getElementsByTagName("a")[0];
botonVolver.addEventListener('click', function(){
    limpiarSession();
})
}

// Cuando se pulse el boton volver se limpia el SessionStorage con la clave Key
function limpiarSession(){
    sessionStorage.removeItem("key");
    window.location.href = "http://127.0.0.1:5500/inicio.html"
}

recuperarSession();
