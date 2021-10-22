/* 회전 멈추기 */
function stopLoc(){
    $("#btStop").addClass('disappearBt');
    $("#og").css({"animation-name":"move","transform-style":"unset","animation-duration":"1s","animation-iteration-count":"unset"});
    $(".cube_face").css("border", "2px solid black");
    $("#back").addClass("moveBack");
    $("#right").addClass("moveRight");
    $("#left").addClass("moveLeft");
};

$(".cube_face").click((e) => {
    const width = 600;
    const height = 600;
    const left = (screen.availWidth - width)/2 + screen.availLeft;
    const top = (screen.availHeight - height)/2 + screen.availTop;

    let spec = `width=${width}, height=${height}, left=${left}, top=${top}`;
    const checkLogin = localStorage.getItem("LogIn");
    if(checkLogin){
        if(e.target.id == "front") open("page1_introduce.html");
        if(e.target.id == "right") open("page2_roadmap.html");
        if(e.target.id == "back") open("page3_travel.html");
        if(e.target.id == "left") alert("이미 회원입니다.");
    } else {
        if(e.target.id == "left") {
            open("page4_join.html");
            return;
        }    
        open("login.html", "childrenFrm", spec);
    }
})

$("#logout").click((e) => {
    localStorage.removeItem("LogIn");
    alert("로그아웃 되었습니다.");
    $("#logout").text("");
    location.reload();
})

$('document').ready(function(){
    const checkLogin = localStorage.getItem("LogIn");
    if(checkLogin){
        $("#logout").text("logout");
    }
});

setInterval(function() {
    console.log("실행");
    const checkLogin = localStorage.getItem("LogIn");
    if(checkLogin){
        $("#logout").text("logout");
    } else $("#logout").text("");
}, 2000);
