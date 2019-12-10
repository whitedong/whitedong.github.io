document.write('<script type="text/javascript" src="./js/character.js"></script>');


window.onload=function(){
    var character = new Character()
    console.log(character)
    character.init()
}