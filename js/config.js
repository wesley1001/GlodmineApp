/**
 * Created by Administrator on 2015-09-25.
 */
Config={};
Config.domain="http://localhost:8080";
Config.ctx="GlodmineSever";
Config.root=Config.domain+"/"+Config.ctx+"/";
Config.login="login.html";
Config.ifLogin=function(){
    var flg=false;
    $.ajax({
        type: 'GET',
        url:Config.root+ "chklogin" ,
        dataType: "json",
        async:false,
        crossDomain: true,
        success:function(data){
            if(data=="true"){
                flg= true;
            }
            alert(flg);
        }
    });
    return flg;
};
Config.ifLogin();
Config.COOKIE_VALID_CODE ="valid_code"
$(document).bind("mobileinit", function() {
    $.mobile.ajaxEnabled=false;
});