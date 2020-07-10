
document.forms["feedback"]["full-name"].focus();
var data = new Array();

function ValidateEmail() 
{
    var fullName = document.forms["feedback"]["full-name"].value;
    var email = document.forms["feedback"]["email"].value;
    var model = document.forms["feedback"]["model"].value;
    var msg = document.forms["feedback"]["message"].value;
    var rate = document.forms["feedback"]["service"].value;

     addToArray.name = fullName;
     addToArray.email = email;
     addToArray.model = model;
     addToArray.msg = msg;
     addToArray.rate = rate;

     data.push(addToArray.toArray);
     





    if (isString(fullName)){
        alert("You have entered an invalid Name !");
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat))
    {
        alert("You have entered an invalid email address!");
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

// call back function

var arr = [5];
var addToArray = {
    name:"",
    email:"xxx@dddd.com",
    model:"",
    msg:"",
    rate:"",
    toArray: function(){
        arr[0] = this.name;
        arr[1] = this.email;
        arr[2] = this.model;
        arr[3] = this.msg;
        arr[4] = this.rate;

        return arr;
    }
}
