import {Game} from "./game";

var game = new Game();

game.startGame();

document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});