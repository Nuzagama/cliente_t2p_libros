// Función para traer los datos del JSON a la página principal
function mostrarLibros(){
    let padreSection = document.querySelector('section');

    // Recorremos el array de objetos (JSON)
    for(let i = 0; i < library.length; i++){
        let hijoArticle = document.createElement('article');
        hijoArticle.setAttribute("class", "presentacion");
        let titleName = document.createElement('h3');
        let imgBook = document.createElement('img');
        
        // Recorremos el objeto con un for in
        for( let atributo in library[i]){

            if(atributo == "title") {
                titleName.textContent = library[i][atributo];

            }else if(atributo == "cover"){
                imgBook.setAttribute('src', library[i][atributo]) ;
            }
        }


        hijoArticle.appendChild(titleName);
        hijoArticle.appendChild(imgBook);
        // Añadimos el evento click a cada artículo de la página principal
        hijoArticle.addEventListener('click', function(){
            verLibro(library[i]);
            console.log(library[i]);
        })
        padreSection.appendChild(hijoArticle);
    }
}

// Función para guardar los datos del libro en el sessionStorage y movernos a la página mostrar.html
function verLibro(book){
    sessionStorage.setItem("key", JSON.stringify(book));
    window.location.href = "http://127.0.0.1:5500/mostrar.html";
}



// Cargamos nuevos libros guardados en la SessionStorage key => nuevoLibro
function cargarNuevoLibro(){
    let nuevoLibro = JSON.parse(sessionStorage.getItem("nuevoLibro"));
    if(nuevoLibro){
        // Añadimos el nuevo libro al array original
        library.push(nuevoLibro);    
    }
}


cargarNuevoLibro();
mostrarLibros();