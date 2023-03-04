//Contador
var counterVal = 0;
var contador = 30;
var opcaoTempo = 30;


$(document).ready(function (Menu) {

    //Menu dificuldade
    $('#buttonEasy').click(function tempook(){
        $('#alvo').css("padding","40px");
            $("#menuDificuldade").hide();
    })

    $('#buttonNormal').click(function tempook(){
        $('#alvo').css("padding","30px");
            $("#menuDificuldade").hide();
    })
    
    $('#buttonHard').click(function tempook(){
        $('#alvo').css("padding","15px");
            $("#menuDificuldade").hide();
    })

//Menu tempo
    $('#btn30').click(function tempook(){
        $('#menuTempo').hide();
        opcaoTempo = 30;
    });

    $('#btn60').click(function tempook(){
        $('#menuTempo').hide();
        opcaoTempo = 60;
    });

    $('#btn90').click(function tempook(){
        $('#menuTempo').hide();
        opcaoTempo = 90;
    });

   //$('#btnJogar').hide();
});

    //Botão start do jogo.
    $('#btnJogar').click(function começo() {
        $('#btnContainer').hide();
        
        $('#contador').show();
        $('#alvo').show();
        contador = opcaoTempo;
        setTimeout(temporizador,1000);
    });

    

    //Posição inicial aletaoria do alvo
    $("#alvo").css(
        {
            marginLeft: Math.min($(window).width(), Math.random() * 1000),
            marginTop: Math.min($(window).height(), Math.random() * 400)
        }
    );

    //Função ao clicar no alvo
    $('#alvo').click(function () {
        updateDisplay(++counterVal);

        //$('#alvo').fadeOut();
        //$('#alvo').fadeIn(30);

    //Configura outra posição aleatoria para o alvo
        $("#alvo").css(
            {
                marginLeft: Math.min($(window).width(), Math.random() * 1000),
                marginTop: Math.min($(window).height(), Math.random() * 400)
            }
        );
    });

    //Back Menu Resetar 
    $(document).ready(function () {
        $("#menu").click(function () {
            location.reload(true);
        });
    });

    // Temporizador 

    function temporizador() {
  if(contador > 0){
    setTimeout(temporizador,1000);
  } else {
   // window.onbeforeunload = null;
   reset();
   resetCounter();
  }
  document.getElementById('tempo').innerHTML = contador;
  contador--;
    }

function reset(){
    $('#btnContainer').show();
}

//Zerar contador acertos
function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

//Atualizar contador
function updateDisplay(val) {
    $("#counter-label").html(val);
}
