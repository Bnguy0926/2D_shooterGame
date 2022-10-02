alert("success")
window.addEventListener('load', function(){
    // canvas setup
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;


    //classes can't be used before it is written (it can be found, but not used) so it needs to be in a sepcific order 
    class InputHandler { //keeps track of user input like arrows keys
        constructor(game){
            this.game = game;
            window.addEventListener('keydown', function(e){
                console.log(e.key);
            });
        }
    }
    class Projectile { // handles the player's lazers

    }
    class Particle { // deals with falling objects that come from damaged enemies

    }
    class Player { // handles main character and animates the player's sprite
        constructor(game){
            this.game = game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedY = 0.2;
        }
        update(){
            this.y += this.speedY;
        }
        draw(context){
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    class Ememy { // handles the different types of enemies

    }
    class Layer { // handles different background layers

    }
    class Background { // puts all the layers together to animate the game world

    }
    class UI { // displays timer, score, and other info for the user

    }
    class Game { //brain of the project where everything comes together
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this); //'this' argument refers to the class Game
            this.input = new InputHandler(this);
        }
        update(){
            this.player.update();
        }
        draw(context){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    // animation loop
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        this.requestAnimationFrame(animate);    
    }
    
})