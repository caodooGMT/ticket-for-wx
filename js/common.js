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
    console.log('000');
    $('#main-content-date-picker').datetimepicker({
        format: 'L',
        locale: 'zh-cn'
    });
    console.log('111');
});

