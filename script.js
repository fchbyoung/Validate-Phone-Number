function checkValidatePhoneNumber(number) {
    let regx = /^\([\d]{2}\)\-\(\d+\)$/;
    let result = regx.test(number);

    if(result === true){
        alert(`Phone Number : ${number} hợp lệ.`);
    }else{
        alert(`Phone Number : ${number} không hợp lệ.`);
    }
}

checkValidatePhoneNumber("(84)-(0363015364)");
checkValidatePhoneNumber("(a8)-(2222222222)");