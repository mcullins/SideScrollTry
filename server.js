var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);

        //Ball Character
        var Ball = function (x, y) {
            this.x = x;
            this.y = y;
            this.sticks = 0;
        };

        Ball.prototype.draw = function () {
            fill(255, 0, 0);
            ellipse(this.x, this.y, 50, 50);
            this.y = constrain(this.y, 0, height - 50);
        };

        /*        
        //Make Bird Body
        var Body = function (x, y) {
            this.x = x;
            this.y = y;
        };
        //Make Bird Head
        var Head = function (x, y) {
            this.x = x;
            this.y = y;
        };
        //Make Bird Wing
        var Wing = function (x,y,x,y,x,y,x,y) {
            this.x1 = x;
            this.y1 = y;
            this.x2 = x;
            this.y2 = y;
            this.x3 = x;
            this.y3 = y;
            this.x4 = x;
            this.y4 = y;
            this.x5 = x;
            this.y5 = y;
        }; 

        //Draw Bird Body
        Body.prototype.draw = function () {
            fill(0, 102, 255);
            ellipse(this.x, this.y, 102, 39);
        };

        //Draw Bird Head
        Head.prototype.draw = function () {
            fill(128, 179, 255);
            ellipse(297, 110, 44, 40);
        };

        //Draw Bird Wing 
        Wing.prototype.draw = function () {
            fill(0, 102, 255);
            bezier(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
        };

        //Make Bird Wing 1
        var rightWing = new Wing(244, 79, 326, 207, 305, 54, 244, 79);

        // Make Bird Wing 2
        var leftWing = new Wing(385, 79, 326, 207, 305, 54, 385, 79);

        //Make Bird Body
        var body = new Body(309, 133);

        //Make Bird Head
        var head = new Head(297, 110);

        //Whole Bird

        var bird = function () {
            rightWing;
            leftWing;
            body;
            head;
        };
        */

        //Make Ball        
        var ball = new Ball(150, 300);

        //Make Ball Able to Bounce and Fall

        Ball.prototype.bounce = function () {
            this.y -= 10;
        };

        Ball.prototype.fall = function () {
            this.y += 10;
        };

        //Make Trees

        var treeX = [];
        for (var i = 0; i < 5; i++) {
            treeX.push(i * 90);
        }

        yR = random(20, 260);

        /*
        //Make Bird
        var birds = [];
        for (var i = 0; i < 40; i++) {
            birds.push(bird());
        }
        */


        //Make Background

        var sceneX = 0;

        draw = function () {
            background(51, 102, 0);
            fill(153, 102, 0);
            noStroke();
            rect(0, 300, width, 100);

            //Make Trees Move with Leaves
            for (var i = 0; i < treeX.length; i++) {
                fill(51, 33, 0);
                rect(treeX[i], 0, 30, 300);
                fill(0, 153, 51);
                ellipse(treeX[i], 0, 10, 20);
                ellipse(treeX[i] + 20, 10, 20, 20);
                ellipse(treeX[i] + 40, 20, 30, 20);
                ellipse(treeX[i] + 10, 10, 40, 10);
                ellipse(treeX[i] + 10, 0, 50, 30);
                ellipse(treeX[i] + 40, 0, 50, 30);
                treeX[i] -= 1;
                if (treeX[i] <= -70) {
                    treeX[i] = width;
                }
            }
            /*
            //Make Birds Fly
            for (var j = 0; j < birds.length; j++) {
                birds[j].draw();
                birds[j].x -= 5;
            }
            */
            
           
            document.body.onkeypress = function (e) {
                if (e.keyCode == 32) {
                    ball.bounce();
                } else if (e.keyCode == 70 ) {
                    ball.fall();
                }
            }
            

            /*
            //Throw Ball
            if (keyPressed === true) {
                ball.bounce();
            } else {
                ball.fall();
            }
            */

            //Make Ball show up

            ball.draw();
        };







        //Do not code below this line

    }
};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);

