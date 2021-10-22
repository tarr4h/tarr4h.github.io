function createAccount() {
    if(!idCheck()) {
        alert("ID를 다시 입력해주세요.");
        return;
    }
    if(!pwCheck1()){
        alert("비밀번호를 다시 입력해주세요.");
        return;
    };
    if(!pwCheck2()){
        alert("비밀번호 확인을 다시 입력해주세요");
        return;
    };
    if(!ssnCheck()){
        alert("주민등록번호를 다시 입력해주세요");
        return;
    }

    if(!idDupCheck()){
        return;
    }

    if(!ssnDupCheck()){
        return;
    }
    
    const $id = $(id);
    const $password = $(pw1);
    const $email = $(email);
    const $emailDomain = $(emaildomain);
    const $username = $(username);
    const $ssn1 = $(ssn1);
    const $ssn2 = $(ssn2);

    // console.log($id.val(), $password.val(), $email.val(), $username.val(), $ssn.val());

    const newAcc = new Account($id.val(), $password.val(), $email.val(), $emailDomain.val(), $username.val(), $ssn1.val(), $ssn2.val());

    const accountData = JSON.parse(localStorage.getItem("accData")) || [];
    accountData.push(newAcc);
    console.log(accountData);

    localStorage.setItem("accData", JSON.stringify(accountData));
    alert("가입이 완료되었습니다.");
    $('input').val('');
    $('.error').val('');
    window.close();
}

class Account {
    constructor(id, password, email, emailDomain, username, ssn1, ssn2){
        this.id = id;
        this.password = password;
        this.email = email;
        this.emailDomain = emailDomain;
        this.username = username;
        this.ssn1 = ssn1;
        this.ssn2 = ssn2;
    }
}

$("#closee").click((e) => {
    close();
})

$(id).blur((e) => {
    const idCheck = /^[a-z0-9]{6,12}$/;
    if(idCheck.test($(id).val()) == true){
        $(idError).text("").css("color", "powderblue").append("available");
    } else {
        $(idError).text("").css("color", "red").append("ID는 6~12자리의 영문자 숫자 혼용이어야 합니다.");
    }
});
$(pw1).blur((e) => {
    const pwCheck = /^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[\W]).{8,15}$/;
    if(pwCheck.test($(pw1).val()) == true){
        $(pw1Error).text("").css("color", "powderblue").append("available");
    } else {
        $(pw1Error).text("").css("color", "red").append("비밀번호는 영문자 숫자 특수문자를 포함한 8~15자리여야 합니다.");
    }
});
$(pw2).blur((e) => {
    if($(pw2).val() != $(pw1).val()){
        $(pw2Error).text("").css("color", "red").append("비밀번호가 일치하지 않습니다.");
    } else {
        $(pw2Error).text("").css("color", "powderblue").append("일치합니다.");
    }
})

function idCheck() {
    const idCheck = /^[a-z0-9]{6,12}$/;
    if(idCheck.test($(id).val()) == true){
        return true;
    } else {
        return false;
    }
}

function pwCheck1() {
    const pwCheck = /^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[\W]).{8,15}$/;
    if(pwCheck.test($(pw1).val()) == true){
        return true;
    } else {
        return false;
    }
}

function pwCheck2() {
    if($(pw2).val() == $(pw1).val()){
        return true;
    } else {
        return false;
    }
}

function ssnCheck() {
    const ssn1Check = /^\d{2}([0]\d|[1][12])([0][1-9]|[1][0-9]|[2][0-9]|[3][01])$/;
    const ssn2Check = /^[1-4]\d{6}$/;
    if(!(ssn1Check.test($(ssn1).val()) == true) && (ssn2Check.test($(ssn2).val()) == true)){
        return false;
    } else return true;
}



function idDupCheck() {
    const findId = JSON.parse(localStorage.getItem("accData"));
    let num = 0;
    $(findId).each((index, elem) => {
        if($(id).val() == elem.id){
            alert("중복된 ID 입니다.");
            num += 1;
            return false;
        }
    });    
    if(num == 1){
        return false;
    } else return true;
}

function ssnDupCheck() {
    const findSsn = JSON.parse(localStorage.getItem("accData"));
    let num = 0;
    $(findSsn).each((index, elem) => {
        if(($(ssn1).val() == elem.ssn1) && ($(ssn2).val() == elem.ssn2)){
            alert("중복된 주민번호 입니다.");
            num += 1;
            return false;
        }
    });    
    if(num == 1){
        return false;
    } else return true;
}

