


// $(document).ready(function() {
  //stuff being shared across functions
  console.log('connected');
  var playerTwo = $('#player2');
  var playerOne = $('#player1');
  var p2pos,p2top;
  var p1pos,p2top;
  var attack,hitbox;
  var hp=$('.hpbar2')
  var timer = 45;
    // all this just determines the start point for the 2 fighters & hp bars
  var width = $('body').width()/2;
  var p2width = $('#player2').width()/2;
  var p1width = $('#player1').width()/2;
  var posb = width + p2width;
  var posa = width - p1width - 300;
  playerTwo.css('left', posb);
  playerOne.css('left',posa);
  hp.css('left',posb+100);
  $('.hpbarback2').css('left',posb+102);
  $('.hpbar1').css('left',+60);
  $('.hpbarback1').css('left',+62);

    //cool start game poses, all about that immersion
    function p1start(){
      playerOne.css('width','130px');
      playerOne.css('height','304px');
      playerOne.css('animation','p1start .5s steps(4) infinite')
      playerOne.css('background','url(img/player1/sanjistart.png')
      setTimeout(P1default,1000);
    }
    function p2start(){
      playerTwo.css('width','224px');
      playerTwo.css('height','304px');
      playerTwo.css('animation','p2start .9s steps(6) infinite')
      playerTwo.css('background','url(img/player2/luffystart.png)');
      setTimeout(p2reset,1000);
    }
    // some basic movement for player 2
    function p2Moveleft(){
      playerTwo.css('width','180px');
      playerTwo.css('height','300px');
      playerTwo.css('animation','walkback .8s steps(8) infinite')
      playerTwo.css('background','url(img/player2/luffywalk.png)');
      // playerTwo.addClass('walk')
      p2pos = playerTwo.offset().left;
      playerTwo.css('left',p2pos-20);
    }
    function p2Moveright(){
      playerTwo.css('width','180px');
      playerTwo.css('height','300px');
      playerTwo.css('animation','walkback .8s steps(8) infinite')
      playerTwo.css('background','url(img/player2/luffywalk.png)');
      p2pos = playerTwo.offset().left;
      playerTwo.css('left',p2pos+8);
    }
    //TODO: FIGURE JUMPS OUT! gonna need to have the sprites switch ways too

    // function p2Jump(){
    //   playerTwo.css('width','120px');
    //   playerTwo.css('height','174px');
    //   playerTwo.css('background','url(img/luffy/luffyjump.gif)');
    //   p2top = playerTwo.offset().top;
    //   playerTwo.css('top',p2top-20);
    // }
    function p2crouch(){
      playerTwo.css('width','186px');
      playerTwo.css('height','220px');
      playerTwo.css('animation','crouch');
      playerTwo.css('background','url(img/player2/luffycrouch.gif)');
      playerTwo.css('background-size','100%');
    }
    //basic movement for player 1
    function p1Moveleft(){
      playerOne.css('width','162px');
      playerOne.css('height','300px');
      playerOne.css('animation','pOnewalk .6s steps(8) infinite')
      playerOne.css('background','url(img/player1/sanjiwalk.png')
      p1pos = playerOne.offset().left;
      playerOne.css('left',p1pos-8);
      setTimeout(P1default,1000);
    }
    function p1Moveright(){
      playerOne.css('width','162px');
      playerOne.css('height','300px');
      playerOne.css('animation','pOnewalk .6s steps(8) infinite')
      playerOne.css('background','url(img/player1/sanjiwalk.png')
      p1pos = playerOne.offset().left;
      playerOne.css('left',p1pos+20);
      setTimeout(P1default,1000);
    }
    function p1crouch(){
      playerOne.css('width','124px');
      playerOne.css('height','245px');
      playerOne.css('animation','crouch');
      playerOne.css('background','url(img/player1/sanjicrouchbig.gif');
    }
    // both of player 1's attacks
    function p1attack(){
      playerOne.css('width','306px');
      playerOne.css('height','290px');
      playerOne.css('background','url(img/player1/sanjikick.png');
      playerOne.css('animation','p1attack .6s steps(7) infinite');
      setTimeout(p1hitCheck(306),100);
      setTimeout(P1default,800);
    }
    function p1attack2(){
      playerOne.css('width','300px');
      playerOne.css('height','400px');
      playerOne.css('background','url(img/player1/sanji2ndkick.png');
      playerOne.css('animation','p1attack2 .6s steps(9) infinite');
      setTimeout(p1hitCheck(306),100);
      setTimeout(P1default,800);
    }
    //both of player 2's attacks
    function p2attack(){
      playerTwo.css('width','250px');
      playerTwo.css('height','230px');
      playerTwo.css('animation','p2attack .6s steps(5) infinite');
      playerTwo.css('background','url(img/player2/luffypunch.png');
      setTimeout(p2reset,700)
      p2hitCheck();
    }
    function p2attack2(){
      playerTwo.css('width','480px');
      playerTwo.css('height','220px');
      playerTwo.css('animation','p2attack2 .6s steps(6) infinite');
      playerTwo.css('background','url(img/player2/luffykick.png');
      setTimeout(p2reset,700)
      p2hitCheck();
    }
    // checks if player 1's attack made contact
    function p1hitCheck(w){
      attack = playerOne.offset().left+w;
      hitbox = playerTwo.offset().left;
       if (attack>=hitbox){
        console.log('hit');
        var checkwin = checkp1Win();
        if(checkwin == 'true')p1win();
        else{
        p2hp();
        setTimeout(p2hit,200);
      }
      }
    }
    //triggers the stagger animation on p2 if hit
    function p2hit(){
      playerTwo.css('width','210px');
      playerTwo.css('height','230px');
      playerTwo.css('animation','p2hit .6s steps(3) infinite');
      playerTwo.css('background','url(img/player2/luffyhit.png');
      setTimeout(p2reset,600);
    }
    //subtracts p2's hp. tried to make the bar decreased left to right while pivoted but i failed
    function p2hp(){
      var h = $('.hpbarback2').css('padding-left');
      h = h.slice(0,-2);
      var hppos = $('.hpbarback2').offset().left
      $('.hpbarback2').css('padding-left',(h-20)+'px');
      // $('.hpbarback2').css('left',posb+10);
    }
    //checks if p2 ran out of Hp every attack
    function checkp1Win(){
      var hpleft= $('.hpbarback2').css('padding-left')
      hpleft= (hpleft.slice(0,-2))*1;
      if( hpleft <= 0){
        return 'true';
      }
    }
    /*removes listeners cause the games over you cant just hit someone
    after they lost. cool falldown animation on the loser following even
    cooler win/lose poses*/

    function p1win(){
      $('body').off('keyup');
      $('body').off('keydown');
      //$('.hpbar2').hide();
      $('.hpbarback2').hide();
      playerTwo.css('width','310px');
      playerTwo.css('height','220px');
      playerTwo.css('animation','fall');
      playerTwo.css('background','url(img/player2/luffyfallbig.gif');
      setTimeout(p2reset,1700);
      setTimeout(p2defeat,2000);
    }
    function p2win(){
      $('body').off('keyup');
      $('body').off('keydown');
      //$('.hpbar1').hide();
      $('.hpbarback1').hide();
      playerOne.css('width','238px');
      playerOne.css('height','246px');
      playerOne.css('animation','p1fall');
      playerOne.css('background','url(img/player1/sanjifallbig.gif');
      setTimeout(P1default,2300);
      setTimeout(p1Defeat,2600);

    }
    //next 3 just give the players poses based on either's Win, loss, or draw.
    function p1Defeat(){
      clearInterval(time);
      $('.result').text('PLAYER 2 WINS');
      $('.portraitp1').show();
      //p2 win animation
      playerTwo.css('width','260px');
      playerTwo.css('height','310px');
      playerTwo.css('animation','p2Win .8s steps(4)');
      playerTwo.css('background','url(img/player2/luffywin.png');
      //p1 lose animation
      playerOne.css('width','190px');
      playerOne.css('height','252px');
      playerOne.css('animation','p1Lose .8s steps(4)');
      playerOne.css('background','url(img/player1/sanjilose.png');
    }
    function p2defeat(){
      clearInterval(time);
      $('.result').text('PLAYER 1 WINS');
      $('.portraitp2').show();
      //p2 lose animation
      playerTwo.css('width','200px');
      playerTwo.css('height','206px');
      playerTwo.css('animation','fall');
      playerTwo.css('background','url(img/player2/luffylosebig.gif');
      //p1 win animation
      playerOne.css('width','124px');
      playerOne.css('height','304px');
      playerOne.css('animation','p1VictoryPose .6s steps(6)');
      playerOne.css('background','url(img/player1/sanjiwin.png');
    }
    function draw(){
      clearInterval(time);
      $('.result').text('DRAW');
      //p2 lose animation
      playerTwo.css('width','200px');
      playerTwo.css('height','206px');
      playerTwo.css('animation','fall');
      playerTwo.css('background','url(img/player2/luffylosebig.gif');
      //p1 lose animation
      playerOne.css('width','190px');
      playerOne.css('height','252px');
      playerOne.css('animation','p1Lose .8s steps(4)');
      playerOne.css('background','url(img/player1/sanjilose.png');

    }
    //checks if p2's attack made contact
    function p2hitCheck(){
      attack = playerTwo.offset().left -100;
      hitbox = playerOne.offset().left + playerOne.width();
        if (attack <= hitbox){
          console.log('hit');
          var checkwin = checkp2Win();
            if(checkwin == 'true')p2win();
            else{
              p1hp();
              setTimeout(p1hit,200);

        }
    }
  }
  //checks for p1's hp every hit returns true to the function above
    function checkp2Win(){
      var hpleft= $('.hpbarback1').css('padding-left')
      hpleft= (hpleft.slice(0,-2))*1;
      if( hpleft <= 0){
        return 'true';
      }
    }
    //stagger animation for p1
    function p1hit(){
      playerOne.css('width','198px');
      playerOne.css('height','300px');
      playerOne.css('animation','p1hit .6s steps(4) infinite');
      playerOne.css('background','url(img/player1/sanjihit.png');
      setTimeout(P1default,500);
    }
    //reduces p1's hp upon hit
    function p1hp(){
      var p = $('.hpbarback1').css('padding-left');
      p = p.slice(0,-2);
      var hppos = $('.hpbarback1').offset().left
      $('.hpbarback1').css('padding-left',(p-20)+'px')
    }
    //the game timer!
    function gameTimer(){
      $('.timer').text(timer);
      timer--;
      if (timer == 0){
        timeOut();
      }

    }
    //happens when timer runs out!
    function timeOut(){
      $('body').off('keyup');
      $('body').off('keydown');
      $('.timer').hide();
      var p1Hp = $('.hpbarback1').css('padding-left');
      var p2Hp= $('.hpbarback2').css('padding-left')
      p1Hp = p1Hp.slice(0,-2);
      p2Hp = p2Hp.slice(0,-2);
      if (p1Hp > p2Hp) p2defeat();
      else if (p2Hp > p1Hp) p1Defeat();
      else draw();

    }
    /*checks for all movement inputs, keydown suits this because movement
    can vary based on players will*/
    function moveCheck(e){
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
    }
    //key inputs for attacks static animation times make it keypress friendly
    function attackCheck(e){
      var b = e.keyCode;
      if(b === 90){
        p1attack();
      }
      if(b === 190){
        p2attack();
      }
      if(b===191){
        p2attack2();
      }
      if(b===88){
        p1attack2();
      }
    }
    //after any animation returns p2 to standing neutral
    function p2reset(e){
      playerTwo.css('width','224px');
      playerTwo.css('height','240px');
      playerTwo.css('animation','stand .6s steps(4) infinite')
      playerTwo.css('background','url(img/player2/luffystand.png)');

    }
    //after any animation returns p1 to standing neutral
    function P1default(e){

      playerOne.css('width','112px');
      playerOne.css('height','300px');
      playerOne.css('animation','pOnestand .6s steps(4) infinite')
      playerOne.css('background','url(img/player1/sanjistand.png)');
    }
    //cool fight text. stolen from a real fighting game of course.
    function fight(){
      $('.fight').hide()
    }
    //next 4 lines pretty much start the game with the fight text, timer, and cool poses
    setTimeout(fight,1000);
    var time= setInterval(gameTimer,1300);
    p1start();
    p2start();
    /*hides the knocked out faces which appear on the losers empty HP bar
    until a loser has been determined*/
    $('.portraitp1').hide();
    $('.portraitp2').hide();
    $('body').on('keydown',moveCheck);
    $('body').on('keyup',attackCheck);
   //$('body').keyup(p2reset);
   //$('body').keyup(P1default);

/*TODO: following is code i plan on my own time after the project has been submitted
and graded. this allows the machine to register multiple keypresses creating a more seamless
experience. the code is pretty big so i chose not to use it for grading.


this part is from http:
yojimbo87.github.io/2012/08/23/repeated-and-multiple-key-press-events-without-stuttering-in-javascript.html
it allows multiple keypresses which is pretty much the biggest bottleneck when
using JS to make any kind of two player game.
function onKeyPress(callback) {
    var keys = {},
        keysCount = 0,
        interval = null,
        trackedKeys = {
            119: true, // W
            87: true, // w
            115: true, // S
            83: true, // s
            97: true, // A
            65: true, // a
            100: true, // D
            68: true, // d
            37: true, // left arrow
            38: true, // up arrow
            39: true, // right arrow
            40: true // down arrow
        };

    $(document).keydown(function (event) {
        var code = event.which;

        if (trackedKeys[code]) {
            if (!keys[code]) {
                keys[code] = true;
                keysCount++;
            }

            if (interval === null) {
                interval = setInterval(function () {
                    var direction = '';

                    // check if north or south
                    if (keys[119] || keys[87] || keys[38]) {
                        direction = 'n';
                    } else if (keys[115] || keys[83] || keys[40]) {
                        direction = 's';
                    }

                    // concat west or east
                    if (keys[97] || keys[65] || keys[37]) {
                        direction += 'w';
                    } else if (keys[100] || keys[68] || keys[39]) {
                        direction += 'e';
                    }

                    callback(direction);
                }, 1000 / 50);
            }
        }
    });

    $(document).keyup(function (event) {
        var code = event.which;

        if (keys[code]) {
            delete keys[code];
            keysCount--;
        }

        // need to check if keyboard movement stopped
        if ((trackedKeys[code]) && (keysCount === 0)) {
            clearInterval(interval);
            interval = null;
            callback('none');
        }
    });
}*/
//});
