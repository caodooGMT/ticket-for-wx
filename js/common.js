$(document).ready(function(){
    $.get("../conponents/header.html", function(data) {
        $("#header").html(data);
    });
});

$(document).ready(function(){
    $.get("../conponents/footer.html", function(data) {
        $("#footer").html(data);
    });
});