var word_list = ["goldfish", "frog", "snake", "cat"]
var game = {
        valid_input : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
        current_word : word_list[Math.floor(Math.random() * word_list.length)],
        start: function reset_word() {
            document.getElementById("word-blanks").innerHTML= this.current_word.split("").fill("_").join(" ")
            document.getElementById("guesses-left").innerHTML= "9";
          
        }
               
    }


function validate_input(params) {
    var user_input = event.key  
        for (var i = 0; i <game.valid_input.length; i++){
            if (game.valid_input[i] == user_input){
                console.log(game.valid_input)
                console.log(user_input )
        }}}














function start_game(params) {
    game.start()
}
document.addEventListener("keyup", function (event) {
    console.log(event)
    event.key
    validate_input()
    });