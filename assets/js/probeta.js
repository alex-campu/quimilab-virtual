
    // Miel
    function Materials(quienSoy) {
        // Materiales
        var miel = document.getElementById('btnMiel').checked;
        var jabon = document.getElementById('btnJabon').checked;
        var agua = document.getElementById('btnAgua').checked;
        var aceite = document.getElementById('btnAceite').checked;
        var probeta = document.getElementById('probeta');



        switch (quienSoy) {
            case 'Miel': 1
                ml('Miel');
                probeta.style.content = 'url("assets/iconos/Probeta/1.png")';
                break;
            case 'Jabon':
                if (!miel) {
                    tenerCuidado();
                    document.getElementById('btnJabon').checked = false;
                } else {
                    ml('Jabón');
                    probeta.style.content = 'url("assets/iconos/Probeta/2.png")';
                }
                break;
            case 'Agua':
                if (!(miel && jabon)) {
                    tenerCuidado();
                    document.getElementById('btnAgua').checked = false;
                } else {
                    ml('Agua')
                    probeta.style.content = 'url("assets/iconos/Probeta/3.png")';
                }
                break;
            case 'Aceite':
                if (!(miel && jabon && agua)) {
                    tenerCuidado();
                    document.getElementById('btnAceite').checked = false;
                } else {
                    ml('Aceite')
                    probeta.style.content = 'url("assets/iconos/Probeta/4.png")';
                }
                break;
            case 'Alcohol':
                if (!(miel && jabon && agua && aceite)) {
                    tenerCuidado();
                    document.getElementById('btnAlcohol').checked = false;
                } else {
                    ml('Alcohol');
                    probeta.style.content = 'url("assets/iconos/Probeta/5.png")';
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
