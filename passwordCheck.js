/**
 * Checks the strength of password
 * @param password
 * display the status of password rejected or accepted
 */
function checker(password) {
    password= password.replace(/\s/g,'');
    let flag = 0;
    if (!password) {
        throw "Please enter password"; //Exception is thrown if input is invalid
    }
    let str = password[0];

    for (let i = 1; i < password.length; i++) {

        if (password[i - 1] === password[i]) { //condition checking for single sequence
            return flag = 1;
        }
        else {


            let k = 0;
            let size = str.length;
            let copyPassword;
            while (k < str.length) {           //condition checking for pair sequence
                let str2 = str.substr(k,);
                if (str[k] === password[i]) {
                    copyPassword = password.substr(i, size);
                    if (copyPassword === str2) {
                        return flag = 1;
                    }


                }

                k++;
                size = size - 1;
            }

            str += password[i];
        }


    }
}


try {
    let status = checker("a p l e");  //calling function checker
    if (status === 1) {
        console.log(" Password Rejected");
    }
    else {
        console.log("Password Accepted");
    }
}
catch (e) {
    console.log(e);

}