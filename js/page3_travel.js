// map funcs
/* 국가 선택 시 색깔변경 */
function func9(e){
    $('.chkbxs').prop('checked', false);
    $('#resultArea').empty();
    const $pathColor = $(e.target).css('fill');
    if($pathColor != 'rgb(182, 208, 226)'){
        $('#europe path').css('fill', '');
        $("#footer span").html($(e.target).attr('name'));
        $(e.target).css('fill', 'rgb(182, 208, 226)');
        func10($(e.target).attr('name'));
    }; 
    if($pathColor == 'rgb(182, 208, 226)') {
        $(e.target).css('fill', '');
        $("#footer span").html("");
    }
}

$('#europe path').on('click', (e) => {
    func9(e);
});

function func10(val) {
    const nation = nationInfo();
    $(nation).each((index, elem) => {
        if(elem.name == val){
            $('#resultArea').append(`<span style="font-size:20px">국가 언어 : ${elem.getLang()}</span><br><br>`);
            $('#resultArea').append(`<span style="font-size:20px">보조 언어 : ${elem.getSubLang()}</span><br><br>`);
            $('#resultArea').append(`<span style="font-size:20px">통용 화폐 : ${elem.getBill()}</span><br><br>`);
            $('#resultArea').append(`<span style="font-size:20px">Euro : ${elem.getEuro()}</span><br><br>`);
            $('#resultArea').append(`<span style="font-size:20px">Eurail : ${elem.getEurail()}</span><br><br>`);
        }
    })
}

//////////////////////////////////////
// 메뉴 여닫기
$('.condMenu').click((e) => {
    $(".lists").each((index, elem) => {
        if(elem.id == $(e.target).next().prop('id')){
            $(e.target).next().toggle(500);
        } else {
            $(elem).hide(500);
        }
    })
});

$('#cdM4').click((e) => {
    $('[type=checkbox]').each((index, elem) => {
        $(elem).prop("checked", false);
        $('path').css("fill", "");
        $("#resultArea").empty();
        $("#footer span").html('');
    })
});

$('body').click((e) => {
    $('#guide1').css("visibility", "hidden");
    $('#guide2').css("visibility", "hidden");
    console.log("숨기기 완료!");
    $(this).off(e);
})

function showNav() {
    $("#nav span").toggle(500);
}

$("#logout").click((e) => {
    localStorage.removeItem("LogIn");
    alert("로그아웃 되었습니다.");
    close();
})

$("#landMain").click((e) => {
    close();
})

// nation class
////////////////////////////////////////////////////////////////////
/* class */
class Nation {
    constructor(name, lang, sublang, bill, euro, eurail){
        this.name = name;
        this.lang = lang;
        this.sublang = sublang;
        this.bill = bill;
        this.euro = euro;
        this.eurail = eurail;
    }
}

Nation.prototype.getName = function(){
    return this.name;
}
Nation.prototype.getLang = function() {
    return this.lang;
}
Nation.prototype.getSubLang = function(){
    return this.sublang;
}
Nation.prototype.getBill = function(){
    return this.bill;
}
Nation.prototype.getEuro = function(){
    return this.euro;
};
Nation.prototype.getEurail = function(){
    return this.eurail;
}



const nationInfo = () => {
    const nations = [
        new Nation("United Kingdom", "english", "english", "pound", "사용불가", "이용불가"),
        new Nation("Estonia", "Eesti", "english", "kroon", "사용불가", "이용불가"),
        new Nation("Sweden", "Swedish", "english", "krona", "사용불가", "이용가능"),
        new Nation("France", "french", "latin", "franc", "사용가능", "이용가능"),
        new Nation("Norway", "norsk", "english", "krone", "사용가능", "이용불가"),
        new Nation("Italy", "italian", "latin", "lila", "사용가능", "이용가능"),
        new Nation("Denmark", "dansk", "english", "krone", "사용가능", "이용불가")

    ];
    return nations;
}

///////////////////////////////////////////////////**
// list append/remove
function addNationInfo(elem, color) {
    $("#resultArea").append(`<span style="color:${color};magin:10px;font-size:20px">${elem}</span>`);
}
function removeNationInfo(elem) {
    $('#resultArea').empty();
}

///////
// checkbox로 제어하기
$('[type=checkbox').click((e) => {
    let euroVal = null;
    let langVal = null;
    let railVal = null;

    $("#"+e.target.id).parent().siblings().children().prop('checked', false);

    $('[type=checkbox]').each((index, elem) =>{
        if($(elem).prop("checked")){
            if(elem.id == "bill1"){
                euroVal = "euro";
            }
            if(elem.id == "bill2"){
                euroVal = "euroN";
            }
            if(elem.id == "lang1"){
                langVal = "english";
            }
            if(elem.id == "lang2"){
                langVal = "latin";
            }
            if(elem.id == "rail1"){
                railVal = "true";
            }
            if(elem.id == "rail2"){
                railVal = "false";
            }
        }
    })
    
    //1개 선택
    if(euroVal != null && (langVal == null && railVal == null)){    
        $('path').css('fill', '');
        removeNationInfo();
        $(`path[data-euro=${euroVal}]`).css("fill", "rgb(182, 208, 226)");
        $("#resultArea").append(`<span style="font-size:20px;font-weight:bold;">selected nations</span><br><br>`);
        $(`path[data-euro=${euroVal}]`).each((index, elem) => {
            addNationInfo($(elem).attr("name")+"<br>", "lightblue");
        })
        
    }
    if(euroVal == null && (langVal != null && railVal == null)){
        $('path').css('fill', '');
        removeNationInfo();
        $(`path[data-lang=${langVal}]`).css("fill", "rgb(182, 208, 226)");
        $("#resultArea").append(`<span style="font-size:20px;font-weight:bold;">selected nations</span><br><br>`);
        $(`path[data-lang=${langVal}]`).each((index, elem) => {
            addNationInfo($(elem).attr("name")+"<br>", "lightblue");
        })
    }
    if(euroVal == null && (langVal == null && railVal != null)){
        $('path').css('fill', '');
        removeNationInfo();
        $(`path[data-rail=${railVal}]`).css("fill", "rgb(182, 208, 226)");
        $("#resultArea").append(`<span style="font-size:20px;font-weight:bold;">selected nations</span><br><br>`);
        $(`path[data-rail=${railVal}]`).each((index, elem) => {
            addNationInfo($(elem).attr("name")+"<br>", "lightblue");
        })
    }    
    //2개 선택
    if(euroVal == null && (langVal != null && railVal != null)){
        $('path').css('fill', '');
        removeNationInfo();
        $(`path[data-lang=${langVal}][data-rail=${railVal}]`).css("fill", "rgb(182, 208, 226)");
        $("#resultArea").append(`<span style="font-size:20px;font-weight:bold;">selected nations</span><br><br>`);
        $(`path[data-lang=${langVal}][data-rail=${railVal}]`).each((index, elem) => {
            addNationInfo($(elem).attr("name")+"<br>", "lightblue");
        })
    }
    if(euroVal != null && (langVal == null && railVal != null)){
        $('path').css('fill', '');
        removeNationInfo();
        $(`path[data-euro=${euroVal}][data-rail=${railVal}]`).css("fill", "rgb(182, 208, 226)");
        $("#resultArea").append(`<span style="font-size:20px;font-weight:bold;">selected nations</span><br><br>`);
        $(`path[data-euro=${euroVal}][data-rail=${railVal}]`).each((index, elem) => {
            addNationInfo($(elem).attr("name")+"<br>", "lightblue");
        })
    }
    if(euroVal != null && (langVal != null && railVal == null)){
        $('path').css('fill', '');
        removeNationInfo();
        $(`path[data-euro=${euroVal}][data-lang=${langVal}]`).css("fill", "rgb(182, 208, 226)");
        $("#resultArea").append(`<span style="font-size:20px;font-weight:bold;">selected nations</span><br><br>`);
        $(`path[data-euro=${euroVal}][data-lang=${langVal}]`).each((index, elem) => {
            addNationInfo($(elem).attr("name")+"<br>", "lightblue");
        })
    }
    //3개 선택
    if(euroVal != null && (langVal != null && railVal != null)){
        $('path').css('fill', '');
        removeNationInfo();
        $(`path[data-euro=${euroVal}][data-lang=${langVal}][data-rail=${railVal}]`).css("fill", "yellow"); 
        $("#resultArea").append(`<span style="font-size:20px;font-weight:bold;">selected nations</span><br><br>`);
        $(`path[data-euro=${euroVal}][data-lang=${langVal}][data-rail=${railVal}]`).each((index, elem) => {
            addNationInfo($(elem).attr("name")+"<br>", "yellow");
        })
    }
})