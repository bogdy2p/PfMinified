var mygame = {
    start: function () {
        cc.game.onStart = function () {
            if (!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
                document.body.removeChild(document.getElementById("cocosLoading"));
            cc.view.enableRetina(false);
            cc.view.adjustViewPort(true);
            cc.view.setDesignResolutionSize(1100, 650, cc.ResolutionPolicy.SHOW_ALL);
            cc.view.resizeWithBrowserSize(true);
            cc.LoaderScene.preload(g_resources, function () {
                cc.director.runScene(new PlayScene());
            }, this);
        };
        cc.game.run();
    },
    spawnPlayer: function (playerdata) {
        var event = new cc.EventCustom("spawn_player_event");
        event.setUserData(playerdata);
        cc.eventManager.dispatchEvent(event);
    },
    removePlayerFromTable: function (playerdata) {
        var event = new cc.EventCustom("remove_player_event");
        event.setUserData(playerdata);
        cc.eventManager.dispatchEvent(event);
    },
    updatePlayerData: function (playerdata) {
        var event = new cc.EventCustom("event_set_player_data");
        event.setUserData(playerdata);
        cc.eventManager.dispatchEvent(event);
    },
    animatePlayerWin: function (data) {
        var event = new cc.EventCustom("event_player_winning");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    animatePlayerLose: function (data) {
        var event = new cc.EventCustom("event_animate_player_lose");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    animatePlayerWait: function (data) {
        var event = new cc.EventCustom("event_player_waiting_random");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    animateBet: function (data) {
        var event = new cc.EventCustom("event_animate_betting");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    animateGetThePot: function (data) {
        var event = new cc.EventCustom("event_animate_player_receiving_bets");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    animateActivatePlayer: function (data) {
        var event = new cc.EventCustom("event_activate_player");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    deActivatePlayers: function (data) {
        var event = new cc.EventCustom("event_deactivate_all_players");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    spawnAndUpdateThePotFlag: function (data) {
        var event = new cc.EventCustom("event_spawn_and_update_the_pot_flag");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    removeThePotFlag: function (data) {
        var event = new cc.EventCustom("event_remove_the_pot_flag");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    playWinningAnimation: function (data) {
        var event = new cc.EventCustom("event_big_winning_animation");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    },
    playGenericAnimation: function (data) {
        var event = new cc.EventCustom("event_generic_animation_referee");
        event.setUserData(data);
        cc.eventManager.dispatchEvent(event);
    }
};
var players = [];
for (i = 0; i < 10; i++) {
    var thename = "player" + i;
    players[i] = {
        playerNumber: i,
        playerModel: (i % 5 + 1),
        animationLength: 2,
        name: thename,
        amount: "0"
    };
}
mygame.start();