
function showFin() {
    document.getElementById("fin").style.display = "block";
  }
 
  function genCode(length) {
    var result           = '';
    var characters       = 'ABCDEFvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 function finalProof() {
    alert("Felicidades, has completado la práctica, tu código de comprobación es: " + genCode(10) + ", copialo para mostrarlo luego a tu maestra");
 }

  // Miel
    function Materials(quienSoy) {
        // Materiales
        var miel = document.getElementById('btnMiel').checked;
        var jabon = document.getElementById('btnJabon').checked;
        var agua = document.getElementById('btnAgua').checked;
        var aceite = document.getElementById('btnAceite').checked;
        var alcohol = document.getElementById('btnAlcohol').checked;
        var probeta = document.getElementById('probeta');



        
        switch (quienSoy){
            case 'Agua':
                ml('Agua');
                probeta.style.content = 'url("assets/iconos/Probeta/1.png")';
                break;
            case 'Aceite':
                if (!agua) {
                    tenerCuidado();
                    document.getElementById('btnAceite').checked = false;
                } else {
                    ml('Aceite');
                    probeta.style.content = 'url("assets/iconos/Probeta/2.png")';
                }
                break;
            case 'Alcohol':
                if(!(agua && aceite)){
                    tenerCuidado();
                    document.getElementById('btnAlcohol').checked = false;
                } else {
                    ml('Alcohol');
                    probeta.style.content = 'url("assets/iconos/Probeta/3.png")';
                }
                break;
            case 'Jabon':
                if(!(agua && aceite && alcohol)){
                    tenerCuidado();
                    document.getElementById('btnJabon').checked = false;
                } else {
                    ml('Jabón');
                    probeta.style.content = 'url("assets/iconos/Probeta/4.png")';
                }
                break;
            case 'Miel':
                if(!(agua && aceite && alcohol && jabon)){
                    tenerCuidado();
                    document.getElementById('btnMiel').checked = false;
                } else {
                    ml('Miel');
                    probeta.style.content = 'url("assets/iconos/Probeta/5.png")';
                    showFin();
                }
                break;
        }
    }

    function ml(name){
        let mili = prompt('Cantidad de mililitros a agregar de '+name+': ');
        if (mili != 20){
            alert('Cantidad incorrecta de '+name+', inténtalo de nuevo.');
            ml(name);
        } else {
            return;
        }
    }
    function tenerCuidado() {
        alert('Cuidado, revisa el orden en que debes agregar las sustancias');
    }
    function wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }
    function wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }
//function fin() {
    
  //      $("#fin").removeAttr("display");
    //}
   
  //    $(document).ready(function(){
        // Set div display to none
        
        // Set div display to block
       /* $(".show-btn").click(function(){
            $("#fin").css("display", "block");  
        });
        }); */
   
// if(!(agua && aceite && alcohol && jabon)){

  /*  if(edad===18) {
        console.log("blabla");
    } */