$(document).ready(function () {
    $.get("../components/header.html", function (data) {
        $("#header").html(data);
    });
});

$(document).ready(function () {
    $.get("../components/footer.html", function (data) {
        $("#footer").html(data);
    });
});

$(document).ready(function () {
    $.get("../components/main-content.html", function (data) {
        $("#main-content").html(data);
    });
});
