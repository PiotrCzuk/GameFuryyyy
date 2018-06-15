import {Coin} from "./coin";
import {Furry} from './furry';


function Game() {
    var self = this;
    var gameOn = false;

    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.index = function(x, y) {
        return x + (y * 10);
    };
    this.score = parseInt(document.querySelector('#score div strong').innerText);


    this.showFurry = function() {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };

    this.moveFurry = function () {
        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }
    };

    this.turnFurry = function () {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    };

    this.hideVisibleFurry = function () {
        document.querySelector('.furry').classList.remove('furry');
    };

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin')
    };

    this.checkCoinColision = function () {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            document.querySelector('.coin').classList.remove('coin');
            this.score += 1;
            document.querySelector('#score div strong').innerHTML = this.score.toString();
            this.coin = new Coin();
            this.showCoin();
        }
    };

    this.gameOver = function () {
        if (this.furry.x < 0 || this.furry.y < 0 || this.furry.x > 9 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            if(this.score>20) {
                alert("Game Over, zdobyles: " + this.score + " punkty. Calkiem niezle!")
            }else {
                alert("Game Over, zdobyles: " + this.score + " punkty. Sprobuj ponownie!")
            };
            gameOn = false;
        }
    };

    this.startGame = function () {
        gameOn = true;
        this.showCoin();
        this.showFurry();
        this.idSetInterval = setInterval(function () {
            self.hideVisibleFurry();
            self.moveFurry();
            self.gameOver();
            if (gameOn) {
                self.showFurry();
                self.checkCoinColision();
            }
        }, 250)
    };
};

export {Game};