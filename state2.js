demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff2222';
        addchangeStateEventListeners()
    },
    update: function(){}
};