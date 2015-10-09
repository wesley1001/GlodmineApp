/**
 * Created by Administrator on 2015-09-25.
 */
Config={};
Config.domain="http://localhost:8080/";
Config.ctx="/GlodmineSever";
Config.root=Config.domain+"/"+Config.ctx+"/";
Config.login="login.html";
Config.ifLogin=false;
$(document).bind("mobileinit", function() {
    $.mobile.ajaxEnabled=false;
});