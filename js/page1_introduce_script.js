function showNav() {
    $("#nav span").toggle(500);
}

$("#landMain").click((e) => {
    close();
})
$("#logout").click((e) => {
    localStorage.removeItem("LogIn");
    alert("로그아웃 되었습니다.");
    close();
})

// 체크박스 하나만 클릭 가능하게
$("input").click((e) => {
    if($(e.target).parent().siblings().children().prop("disabled")){
        // 체크해제
        $(e.target).parent().siblings().children().prop("disabled", "");
    } else {
        // 체크
        $(e.target).parent().siblings().children().prop("disabled", "false");
    }
})

// 결과보기 submit
$("#resultBtn").click((e) => {
    let cnt = 0;
    $("input").each((index, elem) => {
        if($(elem).prop("checked")){
            cnt++;
        }
    })
    if(cnt != 5) {
        alert("모든 문제를 풀어주세요");
        return;
    }
    $('span').css("display", "none");
    $("input").each((index, elem) => {
        if($(elem).prop("checked")){
            let i = $(elem).prop("id").toUpperCase();
            $("#"+i).show(1000);
        }
    })
})

$("#resetBtn").click((e) => {
    location.reload();
})
