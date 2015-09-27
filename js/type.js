/**
 * Created by Administrator on 2015-09-25.
 */
$("#type").on("pageshow",function(e){
    $("#typeForm").validate({
        rules:{
            name:{
                required:true,
                rangelength:[2,8]
            },
            imemo:{
                rangelength:[0,30]
            }
        },
        //自定义验证信息
        messages:{
            name:{
                required:"请输入类型名称",
                rangelength:$.validator.format("类型长度必须在{0}-{1} 字符以内")
            },
            imemo:{
                rangelength:$.validator.format("备注必须在{0}-{1} 字符以内")
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