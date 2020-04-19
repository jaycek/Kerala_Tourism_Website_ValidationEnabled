function validate(){
   
    let email= document.getElementById("mail");
    let pwd=document.getElementById("pwd");

    console.log(email);
    console.log(pwd);

    if (email.value.trim()=="" && pwd.value.trim() !="") {
        email.placeholder="Please enter email ID"
        email.style.border="2px solid red";
        pwd.style.border= '';
        return false;
    }
    // to check for empty spaces keyed in by user which is not checked by 'required' attribute of HTML 5
    else if (email.value.trim()=="")
    {
        email.value='';
        email.placeholder="Please enter email ID"
        email.style.border="2px solid red";
        
        return false;
    }
    // to check for empty spaces keyed in by user which is not checked by 'required' attribute of HTML 5
    else if (pwd.value.trim()=="")
    {
        email.style.border= '';
        pwd.value='';
        pwd.placeholder="Please enter password"
        pwd.style.border="2px solid red";
        
        return false;
    }
    
    else{
        
        let isValidemail =  validateEmail();
        if (isValidemail){
            return validatePassword();
        }
        else{
            return false;
        }

        
    }
   }

   function validateEmail(){
    
    
    let email= document.getElementById("mail");
    console.log(email.value.trim());
    /*
    Regular expression - explanation
    Valid email ID should have 3 parts and can have 4 parts
    part 1 - can contain alphanumerics,dot,underscore,hyphen and percentage symbols
    part 2 - can contain alphanumeric and hyphen
    part 3 - can contain only lowercase letters of length minimum 2 and maximum 4 
    optional part 4 - can contain only lowercase letters of length minimum 2 and maximum 4 
    */

     let regexp=/^([A-Za-z0-9._%-+]+)@([A-Za-z0-9-]+).([a-z]{2,4})(.[a-z]{2,4})?$/
   
    if(regexp.test(email.value.trim())){
        email.style.border='';
        return true;
    }
    else
    {
        email.value='';
        email.placeholder="Please enter valid email ID"
        email.style.border="2px solid red";
        return false;
    }
    
   }

   function validatePassword(){

    var pwd=document.getElementById("pwd");
    
       /*
    Regular expression - explanation
    (?=.*[0-9]) - should contain atleast one number
    (?=.*[a-z]) - should contain atleast one lowercase alphabet
    (?=.*[A-Z]) -  should contain atleast one uppercase alphabet
    [a-zA-Z0-9!@#$%^&*]+ - can contain alphanumeric (upper and lowercase) and some special characters

    */
        
        let regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+.{8,}$/
        
        console.log(pwd.value.trim());

        if (regexp.test(pwd.value)){
            pwd.style.border='';
            console.log("Passed pwd");
            return true;
        }
        else{
            
            alert("Password should have minimum 8 characters, at least one uppercase and one lower case, must contain at least one number");
            pwd.style.border="2px solid red";
            return false;
        }

   }

   function checkPwdStrength(password){

                // Do not show anything when the length of password is zero.
                if (password.length === 0) {
                    document.getElementById("msg").innerHTML = "";
                    return;
                }
                // Create an array and push all possible values that you want in password
                var matchedCase = new Array();
                matchedCase.push("[!@#$%^&*]"); // Special Charector
                matchedCase.push("[A-Z]");      // Uppercase Alpabates
                matchedCase.push("[0-9]");      // Numbers
                matchedCase.push("[a-z]");     // Lowercase Alphabates

                // Check the conditions
                var ctr = 0;
                for (var i = 0; i < matchedCase.length; i++) {
                    if (new RegExp(matchedCase[i]).test(password)) {
                        ctr++;
                    }
                }
                // Display it
                var color = "";
                var strength = "";
                switch (ctr) {
                    case 0:
                    case 1:
                    case 2:
                        strength = "Strength:Very Weak";
                        color = "red";
                        break;
                    case 3:
                        strength = "Strength:Medium";
                        color = "orange";
                        break;
                    case 4:
                        strength = "Strength:Strong";
                        color = "green";
                        break;
                }
                document.getElementById("msg").innerHTML = strength;
                document.getElementById("msg").style.color = color;
   }
