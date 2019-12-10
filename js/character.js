var Character = function(){
    var hero =  document.getElementById('hero');
    var speed = 10;
    var x = 0;
    var y = 100;
    var initStatus = '';
    var UP_WALK_QUEUE = ['hero-walk_up_step1','hero-walk_up_step2'];
    var DOWN_WALK_QUEUE = ['hero-walk_down_step1','hero-walk_down_step2'];
    var RIGHT_WALK_QUEUE = ['hero-walk_right_step1','hero-walk_right_step2'];
    var LEFT_WALK_QUEUE = ['hero-walk_left_step1','hero-walk_left_step2'];
    var status = [];

    var walkIndex = 0;
    
    var rightMove = function (){
        initStatus = ['hero-model'];
        initStatus.push(RIGHT_WALK_QUEUE[walkIndex]);
        walkIndex==0?walkIndex=1:walkIndex=0;
        x+=speed;
        hero.style.left = x+'px';
        hero.className = initStatus .join(' ');
    }
    var leftMove =function (){
        initStatus = ['hero-model'];
        initStatus.push(LEFT_WALK_QUEUE[walkIndex]);
        walkIndex==0?walkIndex=1:walkIndex=0;
        x-=speed;
        hero.style.left = x+'px';
        hero.className = initStatus .join(' ');
    }
    var UpMove = function (){
        initStatus = ['hero-model'];
        initStatus.push(UP_WALK_QUEUE[walkIndex]);
        walkIndex==0?walkIndex=1:walkIndex=0;
        y+=speed;
        hero.style.bottom = y+'px';
        hero.className = initStatus .join(' ');
    }
     var downMove = function (){
        initStatus = ['hero-model'];
        initStatus.push(DOWN_WALK_QUEUE[walkIndex]);
        walkIndex==0?walkIndex=1:walkIndex=0;
        y-=speed;
        hero.style.bottom = y+'px';
        hero.className = initStatus .join(' ');
    }

    var timeMachine = setInterval(function(){
        if(status == 'walk'){
            hero.className = 'hero-model hero-stand_down';
        }
    },500);
    var eventHandler = function() {
        var keyCodes = [];
        setInterval(function(){
            document.onkeydown = function(e) {
                var keyCode = e.keyCode;
                console.log(keyCode)
                // if(!keyCodes[keyCode]){
                //     keyCodes[keyCode] = keyCode;
                // }
                keyCodes.push[keyCode];
                console.log(keyCodes);
                // if(Object.keys(keyCodes).length > 0) {
                //     Object.keys(keyCodes).forEach(function(key){
                //         switch (key) {
                //             case 38:  // 向上移动
                //                 UpMove();
                //                 // delete keyCodes[key];
                //                 break;
                //             case 40: // 向下移动
                //                 downMove();
                //                 break;
                //             case 37: // 向左移动
                //                 leftMove();
                //                 break;
                //             case 39: // 向右移动
                //                 rightMove();
                //                 break;
                //             default:
                //                 break;
                //         }
                //     })
                // }
            }
        },500);
    }
    var init = function() {
        hero.style.left = x;
        hero.style.bottom = y +'px';
        eventHandler();
    }
    this.init = init;
}


