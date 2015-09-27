/**
 * Created by Administrator on 2015-09-25.
 */
$("#forgetPwd1").on("pageshow",function(e){
    jQuery.validator.addMethod("mobile", function(value, element) {
        var length = value.length;
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    },"请输入正确的手机号码");
    $.cookie('captcha','123');
    $("#code").val($.cookie("captcha"));
    $("#forgetPwd1Form").validate({
        rules:{
            mobilephone:{
                required:true,
                mobile:true
            },
            validateCode:{
                required:true,
                equalTo:"#code"
}
        },
        //自定义验证信息
        messages:{
            mobilephone:{
                required:"请输入手机号",
                mobile:"请输入正确的手机号码"
            },
            validateCode:{
                required:"请输入验证码",
                equalTo:"验证码错误"
            }
        },
        showErrors: function(errorMap, errorList) {
            this.defaultShowErrors();
            for(var i = 0; i < errorList.length; i++) {
                $(errorList[i].element).one("blur", function() {
                    $("label.error[for='" + (this.id ? this.id : this.name) + "']").remove();
                });
            }
        },
        submitHandler:function(form){
            $.mobile.changePage('forgetPwd2.html',{transition: 'flip'});
        }
    });

});