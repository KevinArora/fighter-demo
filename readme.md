

How I made my Fighting Game:
    In the start, i knew that even if the game would look impresive,
    the logic would be simpler then most of the projects my peers were
   doing. The meat of my code would be collision detection and I planned
   on DOM manipulating GIF images into my container DIVs to simulate 
   motion.

   After my meeting with Rafa he showed me something small he worked on 
   using keyframes so off i went to learn this secret art. keyframes,
   while a heart ache at first became a super efficient way soon. i was
   banging out new animations and moves in a matter of minutes which as 
   a result i added one more move to each character and gave player 2
   a super good slide motion during his kick(he got short arms bro he couldnt win)
    
    i used div hp bars(1 extra behind  to simulate red for damage).
    a timer (just setinterval,1000 with a timer--).
    show/hide the fight and label(which's text is changed to whoever wins or draw
    )
    a minor photoshop work(none of this effects or is involved with functionality 
        in any way, just some aeshetics)
unsolved problems:
   input system- the current keyup,keypress and keydown system is super limited
   in the sense that the window can only take one at a time. i found neat 
   code in a few places which would store the buttons in objects and create a much
   more smoot play experience but since the snippets of code were quite sizable,
   I was never given permission to use anything like that.


   the jump- god knows how i would make this efficient because keypress 
   and keydown would interrupt them

   media query- alright this is just a nightmare for the game itself
   i dont think by design it would ever be playable by a tablet (who am i kidding)
   and most of the placements are dynamic resuting in the right placement.
   the BG however falls to pieces.

    the methoid of using jqeury to change css instead of storing them in
    classes and changing them. the result had a disgustingly long css file
    so i elected to do the hardwork in the js file where its way earier to read
    with the fancier colors.
