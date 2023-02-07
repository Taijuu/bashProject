// CRIADO POR SrKitty :v //

$(document).ready(function(){
    const btnMobile = $('#btn-mobile');
    
    function toggleMenu(event) {
    event.preventDefault();
    const nav = $('#nav');
    nav.toggleClass('active');
    const active = nav.hasClass('active');
    btnMobile.attr('aria-expanded', active);
    if (active) btnMobile.attr('aria-label', 'Fechar Menu');
    }
    
    $("#menu").css("overflow", "hidden");
    
    btnMobile.click(toggleMenu);
    btnMobile.on('touchstart', toggleMenu);
    });
  

/*<form id="formmmm"  action="">
<textarea
name="ask"
id="ask"
placeholder="Escreva Sua Mensagem"></textarea>
</form>*/

/*<main>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <h1 class="textoPiscando">Testo Testando kkkk</h1>
  </main>*/

  


