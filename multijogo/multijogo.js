$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    var jogador1 = document.getElementById("1").innerHTML = urlParams.get("jg1")
    var jogador1 = document.getElementById("2").innerHTML = urlParams.get("jg2")

})

document.querySelector("body").onkeyup = (envet) => {
    var ataque = envet.key
    if (ataque == " ") {
        limpar()
    }

};


function limpar() {

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
        if (ataque != "a" & ataque != "A" & ataque != "S" & ataque != "s" & ataque != "D" & ataque != "d" & ataque != "1" & ataque != "2" & ataque != "3") {
        }
        else {
            var tAtaques = document.getElementById("Sataque").innerHTML += ataque
        }

    }


    var counter = 0;

    const relogio = setInterval(function time() {

        counter++;


        if (counter <= 870) {

            let dateDay = new Date()
            let s = dateDay.getMilliseconds();
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
            console.log("feito");

        }



    }, 1)
}


function ataqueJogador1() {
    var tAtaques = document.getElementById("Sataque").innerHTML
    var segundos = document.getElementById("segundos").innerText = ""

    var numStr = tAtaques.replace(/[^0-9]/g, '');
    var Numero = numStr.toString().substring(0, 1)
    var string = tAtaques.split(/\d+/).toString()
    var at1 = ""
    const urlParams = new URLSearchParams(window.location.search);
    var jogador1 = urlParams.get("jg1")
    var jogador2 = urlParams.get("jg2")

    if (string.substring(0, 1) == ",") {
        at1 = string.substring(1, 2).toLowerCase()

    }
    else {
        at1 = string.substring(0, 1).toLowerCase()
    }

    if (Numero == "" || at1 == "") {
        if (Numero == "") {
            if (at1 == "") {
                alert("jogador " + jogador1 + " e jogador " + jogador2 + " não atacaram")
            }
            else {
                alert("jogador " + jogador2 + " não atacou")
            }
        }
        else {
            alert("jogador " + jogador1 + " não atacou")

        }
    }
    else {
        ganhador(Numero, at1)

    }

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
    if (at1 == "a" & Numero == 1) {
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


    else if (at1 == "a" & Numero == 2) {
        console.log("jogador 2 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>" + jogador2 + " ganhou</p>" +
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


    else if (at1 == "a" & Numero == 3) {
        console.log("jogador 1 gamhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>" + jogador1 + " ganhou</p>" +
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


    else if (at1 == "s" & Numero == 1) {
        console.log("jogador 1 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>" + jogador1 + " ganhou</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../PEDRA D.png" alt=""></div>' +
                '</div>' +
                '</div>';
            document.getElementById("ponto1").innerText = String(p1 + 1)
        }
        $("#segundos").first().after(html);
        console.log(element);
    }


    else if (at1 == "s" & Numero == 2) {
        console.log("empate")
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>empate</p>" +
                '<div id="jogadas" class="jogadas">' +
                '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
                '<p>vs</p>' +
                '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
                '</div>' +
                '</div>';

        }
        $("#segundos").first().after(html);
    }


    else if (at1 == "s" & Numero == 3) {
        console.log("jogador 2 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>" + jogador2 + " ganhou</p>" +
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


    else if (at1 == "d" & Numero == 1) {
        console.log("jogador 2 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>" + jogador2 + " ganhou</p>" +
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


    else if (at1 == "d" & Numero == 2) {
        console.log("jogador 1 ganhou");
        for (var i = 0; i <= 0; i++) {
            html +=
                '<div id="result" class="result">' +
                "<p class='titulo'>" + jogador1 + " ganhou</p>" +
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


    else if (at1 == "d" & Numero == 3) {
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