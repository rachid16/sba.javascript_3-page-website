

function ValidateEmail() 
{
    var fullName = document.forms["feedback"]["full-name"].value;
    var email = document.forms["feedback"]["email"].value;
    var model = document.forms["feedback"]["model"].value;
    var msg = document.forms["feedback"]["message"].value;
    var rate = document.forms["feedback"]["service"].value;



    if (isString(fullName)){
        alert("You have entered an invalid Name !");
    }else
    
    {
        alert("You  Name !");
    }


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat))
    {
        alert("You have entered an invalid email address!");
        document.feedback-form.email.focus();
        return false;
    }
   
    

    

}


function isString(str){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    str = str.toLowerCase();    
    let result = true;
    let toCheckArray = str.split('');
    for (let x of toCheckArray) {
        if (!(x in alphabet)) {
            result = false;
            break;
        }
    }
    return result;
}
/**/