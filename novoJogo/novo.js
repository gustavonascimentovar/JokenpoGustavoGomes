function limpar() {
    document.getElementById("pedra").style.border = "0px "
    document.getElementById("papel").style.border = "0px "
    document.getElementById("tesoura").style.border = "0px "
    var ataques = document.getElementById("Sataque").innerText = ""
    var node = document.getElementById("result")
    if ($(".result").length) {
        if (node.parentNode) {
            node.parentNode.removeChild(node)
            time()
        }
    }
    else {
        time()
    }

}

function time() {


    document.querySelector("body").onkeyup = (envet) => {
        var ataque = envet.key
        var boder = "4px solid #fb9433"
        if (ataque != "a" & ataque != "A" & ataque != "S" & ataque != "s" & ataque != "D" & ataque != "d") {
        }
        else {
            var tAtaques = document.getElementById("Sataque").innerHTML += ataque
        }
        if (ataque === "a") {
                document.getElementById("pedra").style.border = boder
                
            }
            if (ataque === "s") {
                document.getElementById("papel").style.border = boder
                
            }
            if (ataque === "d") {
                document.getElementById("tesoura").style.border = boder

            }
    }

    var counter = 0;

    const relogio = setInterval(function time() {

        counter++;
        


        if (counter <= 870) {

            let dateDay = new Date()
            let s = dateDay.getMilliseconds();
            console.log(s)
            var segundos = document.getElementById("segundos").innerText
            var seg = parseInt(segundos)

            if (s >= 996 & s <= 999) {

                document.getElementById("segundos").innerText = 1
                if (seg <= 2) {

                    document.getElementById("segundos").innerText = String(seg + 1)
                }
                else {

                    document.getElementById("segundos").innerText = String(1)
                }
            }
        }
        else {
            clearInterval(relogio)

           
            ataqueJogador1()


        }
    }, 1)
}
function ataqueJogador1() {
    var tAtaques = document.getElementById("Sataque").innerHTML
    var segundos = document.getElementById("segundos").innerText = ""

    var string = tAtaques.split(/\d+/).toString()
    var at1 = ""

    if (string.substring(0, 1) == ",") {
        at1 = string.substring(1, 2).toLowerCase()

    }
    else {
        at1 = string.substring(0, 1).toLowerCase()
    }

    if (at1 == "") {
        alert("você não atacou")
    }
    else {
        sorteio(at1)

    }
}

function sorteio(at1) {
    var Numero = Math.floor(Math.random() * 3)
    switch (Numero) {
        case 0: break
        case 1: break
        case 2: break
    }
    ganhador(Numero, at1)
    console.log(Numero);
}

function ganhador(Numero, at1) {
    console.log("Ganhador");
    console.log(at1 + Numero);
    const urlParams = new URLSearchParams(window.location.search);
    var jogador1 = urlParams.get("jg1")
    var jogador2 = urlParams.get("jg2")
    var ponto1 = document.getElementById("ponto1").innerText
    var ponto2 = document.getElementById("ponto2").innerText
    var p1 = parseInt(ponto1)
    var p2 = parseInt(ponto2)



    var html ="";

    if (at1 == "a" & Numero == 0) {
        console.log("empate"); {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>empate</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../PEDRA D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../PEDRA D.png" alt=""></div>' +
                '</div>' +
                '</div>';


            $("#jokenpo").first().after(html);
            

        }



    }


    else if (at1 == "a" & Numero == 1) {
        console.log("jogador 2 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'> Você perdeu</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../PEDRA D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
                '</div>' +
                '</div>';
            document.getElementById("ponto2").innerText = String(p2 + 1)
        }
        $("#segundos").first().after(html);

    }


    else if (at1 == "a" & Numero == 2) {
        console.log("jogador 1 gamhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>Você ganhou</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../PEDRA D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../TESOURA D.png" alt=""></div>' +
                '</div>' +
                '</div>';
            document.getElementById("ponto1").innerText = String(p1 + 1)
        }
        $("#segundos").first().after(html);
    }


    else if (at1 == "s" & Numero == 0) {
        console.log("jogador 1 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>Você ganhou</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../PEDRA D.png" alt=""></div>' +
                '</div>' +
                '</div>';
            document.getElementById("ponto1").innerText = String(p1 + 1)
        }
        $("#segundos").first().after(html);

    }


    else if (at1 == "s" & Numero == 1) {
        console.log("empate")
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                '<p class="titulo">empate</p>' +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
                '</div>' +
                '</div>';

        }
        $("#segundos").first().after(html);
    }


    else if (at1 == "s" & Numero == 2) {
        console.log("jogador 2 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>Você perdeu</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../TESOURA D.png" alt=""></div>' +
                '</div>' +
                '</div>';
            document.getElementById("ponto2").innerText = String(p2 + 1)

        }
        $("#segundos").first().after(html);
    }


    else if (at1 == "d" & Numero == 0) {
        console.log("jogador 2 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'> Você perdeu</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../TESOURA D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../PEDRA D.png" alt=""></div>' +
                '</div>' +
                '</div>';
            document.getElementById("ponto2").innerText = String(p2 + 1)

        }
        $("#segundos").first().after(html);
    }


    else if (at1 == "d" & Numero == 1) {
        console.log("jogador 1 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>Você ganhou</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../TESOURA D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
                '</div>' +
                '</div>';
            document.getElementById("ponto1").innerText = String(p1 + 1)

        }
        $("#segundos").first().after(html);
    }


    else if (at1 == "d" & Numero == 2) {
        console.log("empate");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>empate</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../TESOURA D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../TESOURA D.png" alt=""></div>' +
                '</div>' +
                '</div>';

        }
        $("#segundos").first().after(html);
    }
}

