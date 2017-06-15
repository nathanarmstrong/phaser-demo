demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#f2f2f2';
        addchangeStateEventListeners()
    },
    update: function(){}
};