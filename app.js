


$(document).ready(function() {

  console.log('connected');
   var playerTwo = $('#player2');
   //var $luffy= $('#luffy');
    var p2pos,p2top;

    var width = $('body').width()/2;
    var p2width = $('#player2').width()/2;
    var pos = width + p2width;
    playerTwo.css('left', pos);

  function p2Moveleft(){
    playerTwo.css('width','100px');
   playerTwo.css('height','147px');
    playerTwo.css('background','url(img/luffy/luffywalk.gif)');
     p2pos = playerTwo.offset().left;

    playerTwo.css('left',p2pos-8);
  }
  function p2Moveright(){
     playerTwo.css('width','100px');
   playerTwo.css('height','147px');
 playerTwo.css('bottom','5px')
   playerTwo.css('background','url(img/luffy/luffywalk.gif)');
    p2pos = playerTwo.offset().left;
    playerTwo.css('left',p2pos+8);
  }
function p2Jump(){
   playerTwo.css('width','120px');
   playerTwo.css('height','174px');
   playerTwo.css('background','url(img/luffy/luffyjump.gif)');
    p2top = playerTwo.offset().top;
    playerTwo.css('top',p2top-20);

}
function p2crouch(){
   playerTwo.css('width','93px');
   playerTwo.css('height','111px');
   playerTwo.css('background','url(img/luffy/luffycrouch.gif)');
}



  function p2check(e){
      var i = e.keyCode;
      if(i === 37){

      p2Moveleft();
      }
      if(i === 39){

        p2Moveright();
      }
      if(i === 38){
        p2Jump();
      }
      if(i=== 40){
        p2crouch();
      }
  }
    function p2reset(e){
      playerTwo.css('width','112px');
      playerTwo.css('height','118px');

      playerTwo.css('background','url(img/luffy/luffystand.gif)');

    }


  $('body').keydown(p2check);
  $('body').keyup(p2reset);


});
