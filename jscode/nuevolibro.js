document.getElementById("formu").addEventListener("submit", function (e) {
    e.preventDefault();

    // Capturamos los datos del formulario
    let nuevoLibro = {
        title : document.getElementsByName('titulo')[0].value,
        author : document.getElementsByName('autor')[0].value,
        genre : document.getElementsByName('genero')[0].value,
        cover : document.getElementsByName('cover')[0].value,
        synopsis : document.getElementsByName('resumen')[0].value,
        ISBN : document.getElementsByName('isbn')[0].value,
        pages : document.getElementsByName('numpaginas')[0].value,
        year : document.getElementsByName('anio')[0].value
    };

    // Guardamos el nuevo libro en la SessionStorage
    sessionStorage.setItem("nuevoLibro", JSON.stringify(nuevoLibro));

    window.location.href = "http://127.0.0.1:5500/inicio.html";
    


    });





