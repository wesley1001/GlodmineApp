/**
 * Created by Administrator on 2015-09-25.
 */
$("#register").on("pageshow",function(e){
    $("#password").focus(function(){
        $(".js-confirmPwd").show();
    });
    $(".ui-block-b img").attr("src",Config.root+"/validcode.do?"+Math.random());
    $(".ui-block-b img").click(function(){
        $(".ui-block-b img").attr("src",Config.root+"/validcode.do?"+Math.random());
    });
    jQuery.validator.addMethod("mobile", function(value, element) {
        var length = value.length;
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    },"请输入正确的手机号码");
    $("#registerForm").validate({
        rules:{
            mobilePhone:{
                required:true,
                mobile:true,
                remote:{                                          //验证用户名是否存在
                    type:"GET",
                    url:Config.root+"ifhasmob",
                    dataType: "json",
                    crossDomain: true,//servlet
                    data:{
                       mobilePhone:function(){return $("#mobilePhone").val();}
                    }
                }
            },
            imail:{
                required:true,
                rangelength:[1,50],
                email:true,
                remote:{                                          //验证用户名是否存在
                    type:"GET",
                    url:Config.root+"ifhasemail",
                    dataType: "json",
                    crossDomain: true,//servlet
                    data:{
                        imail:function(){return $("#imail").val();}
                    }
                }
            },
            password:{
                required:true,
                rangelength:[6,20]
            },
            confirmPwd:{
                equalTo:"#password"
            }
        },
        //自定义验证信息
        messages:{
            mobilePhone:{
                required:"手机号码不能为空",
                mobile:"请输入正确的手机号码",
                remote:"手机号已存在"
            },
            imail:{
                required:"邮箱不能为空",
                rangelength:$.validator.format("输入的范围在 {0}-{1} 之间的字符."),
                email:"邮箱格式不正确",
                remote:"邮箱已存在"
            },
            password:{
                required:"密码不能为空",
                rangelength:$.validator.format("密码长度必须在 {0}-{1} 字符.")
            },
            confirmPwd:{
                equalTo:"两次输入密码必须一致"
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
            $.mobile.loading('show', {
                text: '注册中...', //加载器中显示的文字
                textVisible: true, //是否显示文字
                theme: 'b',        //加载器主题样式a-e
                textonly: false,   //是否只显示文字
                html: ""           //要显示的html内容，如图片等
            });
            $.ajax({
                type: 'GET',
                url:Config.root+ "register" ,
                data:$("#registerForm").serialize(),
                dataType: "json",
                crossDomain: true,
                success:function(data){
                    $.mobile.loading('show', {
                        text: data.msg, //加载器中显示的文字
                        textVisible: true, //是否显示文字
                        theme: 'b',        //加载器主题样式a-e
                        textonly: true,   //是否只显示文字
                        html: ""           //要显示的html内容，如图片等
                    });
                    setTimeout(function(){$.mobile.loading('hide')}, 1500);
                    $("#registerForm")[0].reset();
                    $.mobile.changePage(Config.login,{transition: 'flip'});
                }
            });
        }
    });

});