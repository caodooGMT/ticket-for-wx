$(document).ready(function () {
    $.get('../components/footer.html', function (data) {
        $('#footer').html(data);
    });
    $.get('../components/main-content.html', function (data) {
        $('#main-content').html(data);
    });
    $.get('../components/header.html', function (data) {
        $('#header').html(data);
    });
    $.get('../components/driver-information-table.html', function (data) {
        $('#driver-information-table').html(data);
    });
});

function backToPrevious() {
    window.history.go(-1);
    return false;
}

function openFaqDetail(e) {
    var targetId = e.target.id;
    var targetText = e.target.innerHTML;
    // console.log(targetText);
    var myLink = "../statics/views/" + targetId + ".html";
    $('#faq-detail-page-header-title').html(targetText);
    $('#faq-detail-page-header').show();
    $('#original-header').hide();
    $('#main-content').empty();
    $('#main-content').load(myLink);
}

function backToFaqMain() {
    $('.footer-nav-ul li').removeClass('custom-nav-active');
    $('#footer-nav-li-to-faq').addClass('custom-nav-active');
    $('#faq-detail-page-header').hide();
    $('#original-header').show();
    $('#main-content').empty();
    $('#main-content').load('../components/faq-page-index.html');
}

function openNoLogOrderCheck() {
    $('#main-content').empty();
    $('#main-content').load('../components/order-search-without-log-in.html')
}

function showDriverInformation() {
    
}
