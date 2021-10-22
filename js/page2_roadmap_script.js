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


$("#html").hover((e) => {
    console.log("mouseHover");
    $('#htmlgauge').css({"background-color":"powderblue"});
}, (e) => {
    $('#htmlgauge').css({"background-color":"", "border":""});
    location.reload();
})

$("#java").hover((e) => {
    console.log("mouseHover");
    $('#javagauge').css({"background-color":"rgba(161, 161, 161, 0.801)"});
}, (e) => {
    $('#javagauge').css({"background-color":"", "border":""});
    location.reload();
})

$("#sql").hover((e) => {
    console.log("mouseHover");
    $('#sqlgauge').css({"background-color":"cadetblue"});
}, (e) => {
    $('#sqlgauge').css({"background-color":"", "border":""});
    location.reload();
})

$("#css").hover((e) => {
    $('#cssgauge').css({"background-color":"rgb(243, 226, 194)"});
}, (e) => {
    $('#cssgauge').css({"background-color":"", "border":""});
    location.reload();
})

$("#javascript").hover((e) => {
    $('#jsgauge').css({"background-color":"rgba(31, 46, 33, 0.692)"});
}, (e) => {
    $('#jsgauge').css({"background-color":"", "border":""});
    location.reload();
})