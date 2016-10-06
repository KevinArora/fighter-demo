


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
    playerTwo.css('animation','walkback .8s steps(8) infinite')
    playerTwo.css('background','url(img/player2/luffywalk.png)');
    // playerTwo.addClass('walk')
    p2pos = playerTwo.offset().left;
    playerTwo.css('left',p2pos-10);
  }
  function p2Moveright(){
    playerTwo.css('width','180px');
    playerTwo.css('height','300px');
    playerTwo.css('animation','walkback .8s steps(8) infinite')
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
   playerTwo.css('animation','crouch');
   playerTwo.css('background','url(img/player2/luffycrouch.gif)');
   playerTwo.css('background-size','100%');
}
function p1Moveleft(){
    playerOne.css('width','162px');
    playerOne.css('height','300px');
    playerOne.css('animation','pOnewalk .6s steps(8) infinite')
    playerOne.css('background','url(img/player1/sanjiwalk.png')
    p1pos = playerOne.offset().left;
    playerOne.css('left',p1pos-8);

}
function p1Moveright(){
    playerOne.css('width','162px');
    playerOne.css('height','300px');
    playerOne.css('animation','pOnewalk .6s steps(8) infinite')
    playerOne.css('background','url(img/player1/sanjiwalk.png')
    p1pos = playerOne.offset().left;
    playerOne.css('left',p1pos+10);

}
function p1crouch(){
    playerOne.css('width','124px');
    playerOne.css('height','245px');
    playerOne.css('animation','pOnewalk .6s steps(3) forward');
    playerOne.css('background','url(img/player1/sanjicrouch.png');
}
function p1attack(){
  playerOne.css('width','306px');
  playerOne.css('height','290px');
  playerOne.css('background','url(img/player1/sanjikick.png');
  playerOne.css('animation','p1attack .6s steps(7) infinite');
}
function p2attack(){
  playerTwo.css('width','250px');
  playerTwo.css('height','230px');
  playerTwo.css('animation','p2attack .6s steps(5) infinite');
  playerTwo.css('background','url(img/player2/luffypunch.png');
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
      if(i=== 68){
        p1Moveright();
      }
      if(i === 83){
        p1crouch();
      }
      if(i === 90){
        p1attack();
      }
      if(i === 190){
        p2attack();
      }
  }
    function p2reset(e){
      playerTwo.css('width','224px');
      playerTwo.css('height','240px');
      playerTwo.css('animation','stand .6s steps(4) infinite')
      playerTwo.css('background','url(img/player2/luffystand.png)');

    }
    function P1default(e){
      playerOne.css('width','112px');
      playerOne.css('height','300px');
      playerOne.css('animation','pOnestand .6s steps(4) infinite')
      playerOne.css('background','url(img/player1/sanjistand.png)');
    }


  $('body').keydown(p2check);
  $('body').keyup(p2reset);
  $('body').keyup(P1default);

});
