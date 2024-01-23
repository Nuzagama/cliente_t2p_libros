// Rescatamos los datos del SessionStorage

function recuperarSession(){
    let padreSection = document.querySelector('section');
    let table = document.createElement('table');

    let session = JSON.parse(sessionStorage.getItem('key'));
    console.log(session);
    let titleName = document.createElement('h3');

        for ( let atributo in session){
            console.log("Hola");
            if(atributo == "title"){
                titleName.textContext = session[atributo];
                
                console.log(titleName);
            }
        }

    padreSection.appendChild(titleName);

}

recuperarSession();
