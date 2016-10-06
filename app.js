


$(document).ready(function() {

  console.log('connected');
   var playerTwo = $('#player2');
   var playerOne = $('#player1');
    var p2pos,p2top;
    var p1pos,p2top;
    // all this just determines the start point for the 2 fighters
    var width = $('body').width()/2;
    var p2width = $('#player2').width()/2;
    var p1width = $('#player1').width()/2;
    var posb = width + p2width;
    var posa = width - p1width - 300;
    playerTwo.css('left', posb);
    playerOne.css('left',posa);

  function p2Moveleft(){
    playerTwo.css('width','180px');
    playerTwo.css('height','300px');
    playerTwo.css('@-webkit-animation','walkback .8s steps(8) infinite')
    playerTwo.css('background','url(img/player2/luffywalk.png)');
    // playerTwo.addClass('walk')
    p2pos = playerTwo.offset().left;
    playerTwo.css('left',p2pos-8);
  }
  function p2Moveright(){
    playerTwo.css('width','180px');
    playerTwo.css('height','300px');
    playerTwo.css('@-webkit-animation','walkback .8s steps(8) infinite')
    playerTwo.css('background','url(img/player2/luffywalk.png)');
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
   playerTwo.css('width','186px');
   playerTwo.css('height','220px');
   playerTwo.css('@-webkit-animation','crouch .8s steps(3)')
   playerTwo.css('background','url(img/player2/luffycrouch.png)');
}
function p1Moveleft(){
    playerOne.css('width','162px');
    playerOne.css('height','300px');
    playerOne.css('@-webkit-animation','pOnewalk .6s steps(8) infinite')
    playerOne.css('background','url(img/player1/sanjiwalk.png')


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
      if(i === 65){
        p1Moveleft();
      }
  }
    function p2reset(e){
      playerTwo.css('width','224px');
      playerTwo.css('height','240px');
      playerTwo.css('@-webkit-animation','stand .6s steps(4) infinite')
      playerTwo.css('background','url(img/player2/luffystand.png)');

    }
    function P1default(e){
      playerOne.css('width','112px');
      playerOne.css('height','300px');
      playerOne.css('@-webkit-animation','pOnestand .6s steps(8) infinite')
      playerOne.css('background','url(img/player1/sanjistand.png)');
    }


  $('body').keydown(p2check);
  $('body').keyup(p2reset);
  $('body').keyup(P1default);

});
