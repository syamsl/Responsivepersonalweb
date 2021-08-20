let namecheck=false
let numcheck=false
let mailcheck=false
let messagecheck=false


$(document).ready(function(){
    $("#valname").keyup(function(){

        var text=this.value;
        var nameRegex = /^[A-Za-z ]+$/;
        if(!text.match(nameRegex)){
            namecheck=false;
            $("#nameerror").text("Enter valid name")
        }else if(text.length<3){
            namecheck=false;
            $("#nameerror").text("Enter name with more than 2 character")
        }else if(text.includes("  ")){
            namecheck=false;
            $("#nameerror").text("Not more than one concecutive space")
        }else if(text.match(nameRegex)){
            namecheck=true;
            $("#nameerror").text("")
        }
    })

    $("#valphone").keyup(function(){
        var num=this.value;
        var numRegex = /^[0-9]+$/;
        if(!num.match(numRegex)){
            numcheck=false;
            $("#numerror").text("Enter valid number")
        }else if(num.length<10){
            numcheck=false;
            $("#numerror").text("Enter 10 digits")
        }else if(num.length>10){
            numcheck=false;
            $("#numerror").text("Enter only 10 digits")
        }else if(num.match(numRegex) && num.length==10){
            numcheck=true;
            $("#numerror").text("")
        }
    })

    $("#valmail").blur(function(){
        var mail=this.value;
        var mailRegex = /^[A-Za-z0-9_]+@[a-z]+.[a-z]+$/;
        if(!mail.match(mailRegex)){
            mailcheck=false;
            $("#mailerror").text("Invalid mail")
        }else if(mail.match(mailRegex)){
            mailcheck=true;
            $("#mailerror").text("")
        }
    })

    $("#valmessage").keyup(function(){
        var message=this.value;
        if(message.length==0){
            messagecheck=false;
            $("#messageerror").text("Enter message")
        }else{
            messagecheck=true;
            $("#messageerror").text("")
        }
    })
})

$("#submit-form").submit((e)=>{
    e.preventDefault()

    if(namecheck==true && numcheck==true && mailcheck==true && messagecheck==true){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxGz9YUSHwppOwaoRyG18aTY94EawT8K_IxVkQkN5CMWRhpPtQP4MfOYpt0jm3j95_8/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    }else{
        $("#senderror").text("Form not filled")
    }
})