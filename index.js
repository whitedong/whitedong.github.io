var note = 'Welcome';
var hero =  document.getElementById('hero');
var speed = 10;
var x = 0;
var y = 100;
var initStatus = ['hero-model'];
var defaultStatus = 'hero-stand_downs';
var UP_WALK_QUEUE = ['hero-walk_up_step1','hero-walk_up_step2'];
var DOWN_WALK_QUEUE = ['hero-walk_down_step1','hero-walk_down_step2'];
var RIGHT_WALK_QUEUE = ['hero-walk_right_step1','hero-walk_right_step2'];
var LEFT_WALK_QUEUE = ['hero-walk_left_step1','hero-walk_left_step2'];
var status = '';

document.getElementById('box').innerHTML = note;

document.body.onkeydown = function(e) {
    var keyCode = e.keyCode;
    console.log(keyCode)
    switch (keyCode) {
        // 向上移动
        case 38:
            status = 'walk';
            UpMove();
            break;
        // 向下移动
        case 40:
            status = 'walk';
            downMove();
            break;
        // 向左移动
        case 37:
            status = 'walk';
            leftMove();
            break;
        // 向右移动
        case 39:
            status = 'walk';
            rightMove();
            break;
        default:
            break;
    }
}
var walkIndex = 0;
function rightMove(){
    var  initStatus = ['hero-model'];
    initStatus.push(RIGHT_WALK_QUEUE[walkIndex]);
    walkIndex==0?walkIndex=1:walkIndex=0;
    x+=speed;
    hero.style.left = x+'px';
    hero.className = initStatus .join(' ');
}
function UpMove(){
    var  initStatus = ['hero-model'];
    initStatus.push(UP_WALK_QUEUE[walkIndex]);
    walkIndex==0?walkIndex=1:walkIndex=0;
    y+=speed;
    hero.style.bottom = y+'px';
    hero.className = initStatus .join(' ');
}
function downMove(){
    var  initStatus = ['hero-model'];
    initStatus.push(DOWN_WALK_QUEUE[walkIndex]);
    walkIndex==0?walkIndex=1:walkIndex=0;
    y-=speed;
    hero.style.bottom = y+'px';
    hero.className = initStatus .join(' ');
}
function leftMove(){
    var  initStatus = ['hero-model'];
    initStatus.push(LEFT_WALK_QUEUE[walkIndex]);
    walkIndex==0?walkIndex=1:walkIndex=0;
    x-=speed;
    hero.style.left = x+'px';
    hero.className = initStatus .join(' ');
}

var timeMachine = setInterval(function(){
    if(status == 'walk'&&hero.className.indexOf('hero-walk_down')>-1){
        hero.className = 'hero-model hero-stand_down';
    }
},500);