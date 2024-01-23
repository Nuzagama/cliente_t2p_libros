// Función para traer los datos del JSON a la página principal
function mostrarLibros(){
    let padreSection = document.querySelector('section');

    for(let i = 0; i < library.length; i++){
        let hijoArticle = document.createElement('article');
        hijoArticle.setAttribute("class", "presentacion");
        let titleName = document.createElement('h3');
        let imgBook = document.createElement('img');
        
        for( let atributo in library[i]){

            if(atributo == "title") {
                titleName.textContent = library[i][atributo];

            }else if(atributo == "cover"){
                imgBook.setAttribute('src', library[i][atributo]) ;
            }
        }

        hijoArticle.appendChild(titleName);
        hijoArticle.appendChild(imgBook);
        hijoArticle.addEventListener('click', function(){
            verLibro(library[i]);
            console.log(library[i]);
        })
        padreSection.appendChild(hijoArticle);
    }
}


function verLibro(book){
    sessionStorage.setItem("key", JSON.stringify(book));
    window.location.href = "http://127.0.0.1:5500/mostrar.html";
}

mostrarLibros();