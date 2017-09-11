$(document).ready(function () {
    $.get("../components/footer.html", function (data) {
        $("#footer").html(data);
    });
    $.get("../components/main-content.html", function (data) {
        $("#main-content").html(data);
    });
    $.get("../components/header.html", function (data) {
        $("#header").html(data);
    });
});

function backToPrevious() {
    window.history.go(-1);
    return false;
}

function openFaqDetail(e) {
    var targetId = e.target.id;
    var myLink = "../components/" + targetId + ".html";
    $('#main-content').empty();
    $('#main-content').load(myLink);
}