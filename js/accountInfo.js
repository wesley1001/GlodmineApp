/**
 * Created by Administrator on 2015-09-25.
 */
$("#accountInfo").on("pageshow",function(e){
    $("#accountInfoForm").validate({
        rules:{
            niceName:{
                required:true,
                rangelength:[0,10]
            },
            realName:{
                rangelength:[0,8]
            }
        },
        //自定义验证信息
        messages:{
            niceName:{
                required:"请输入昵称",
                rangelength:$.validator.format("昵称必须在{0}-{1} 字符以内")
            },
            realName:{
                rangelength:$.validator.format("真实姓名必须在{0}-{1} 字符以内")
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