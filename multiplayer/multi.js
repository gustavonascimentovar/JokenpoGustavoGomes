function jogar() {
    var jg1 = document.getElementById("jogardor1").value
    var jg2 = document.getElementById("jogardor2").value
    var html = '';
    var html2 = '';

    if(jg1 == ""){
            $("#nome").remove()
            
           html+= "<p id='nome'>Nome do Jogador 1</p>"
           
           $("#jogardor1").first().after(html);
           

        }
       else{
            $("#nome").remove()
            
        }

        if(jg2 == ""){
            $("#nome2").remove()
            
           html2+= "<p id='nome2'>Nome do Jogador 2</p>"
           
           $("#jogardor2").first().after(html2);
           

        }
        else{
            $("#nome2").remove()
            window.location.href = "../multijogo/multJogo.html?jg1="+jg1+"&jg2="+jg2

        }

        
}