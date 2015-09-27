/**
 * Created by Administrator on 2015-09-25.
 */
$("#income").on("pageshow",function(e){
    jQuery.validator.addMethod("isFloat", function(value, element) {
        return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);
    }, "只能包含数字、小数点等字符");
    $("#incomeForm").validate({
        rules:{
            startTime:{
                required:true
            },
            imoney:{
                required:true,
                isFloat:true
            },
            imemo:{
                required:true,
                rangelength:[2,50]
            }
        },
        //自定义验证信息
        messages:{
            startTime:{
                required:"请输入日期"
            },
            imoney:{
                required:"请输入金额",
                isFloat:"只能输入数字类型"
            },
            imemo:{
                required:"请填写备注信息",
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