/*navgation open*/
$(".bars").on("click", () => {
    $(".menu").addClass("show");
    $(".blocker").css("display", "block");
    $("html").css("overflowY", "hidden");
});

$(".close, .blocker").on("click", () => {
    $(".menu").removeClass("show");
    $(".blocker").css("display", "none");
    $("html").css("overflowY", "scroll");
});

// $(".blocker").on("click", () => {
//     $(".menu").removeClass("show");
// })
/*navgation closed*/

/* join start*/
$("#blocker2").on("click", () => {
    $("#id02").css("display", "none");
})

/* join end*/
