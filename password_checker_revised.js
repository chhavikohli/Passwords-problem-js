/**
 * Checks the strength of password
 * @param password
 * display the status of password rejected or accepted
 */
function checker(password) {
    password = password.replace(/\s/g, '');
    let fCharacter = "";
    if (!password) {
        throw "Please enter password"; //Exception is thrown if input is invalid
    }
    for (let k = 1; k <= (password.length) / 2; k++) {
        fCharacter = password.substr(0, k);

        for (let i = 1; i < password.length; i++) {

            if (password.substr(i * k, k) === fCharacter) {
                return 1;
            }
            else {
                fCharacter = password.substr(i * k, k);

            }
        }

    }

}


try {
    let status = checker("c a m c a m");  //calling function checker
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