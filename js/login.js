/**
 * Created by Administrator on 2015-09-25.
 */
$("#login").on("pageshow",function(e){
    jQuery.validator.addMethod("mobile", function(value, element) {
        var length = value.length;
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    },"请输入正确的手机号码");
    $("#loginForm").validate({
        rules:{
            mobilephone:{
                required:true,
                mobile:true
            },
            pwd:{
                required:true,
                rangelength:[6,20]
            }
        },
        //自定义验证信息
        messages:{
            mobilephone:{
                required:"手机号码不能为空",
                mobile:"请输入正确的手机号码"
            },
            pwd:{
                required:"密码不能为空",
                rangelength:$.validator.format("密码长度必须在 {0}-{1} 字符")
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
            alert("submitted");
        }

    });

});