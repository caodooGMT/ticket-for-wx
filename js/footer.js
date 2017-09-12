function changeFooterActive(e, target) {
    e.preventDefault();
    $('.footer-nav-ul li').removeClass('custom-nav-active');
    $(target).closest('li').addClass('custom-nav-active');
}

function openFaqPage(e, target) {
    $('#main-content').empty();
    $('#main-content').load('../components/faq-page-index.html');
    changeFooterActive(e, target);
}

function openMainPage(e, target) {
    $('#main-content').empty();
    $('#main-content').load('../components/main-content.html');
    changeFooterActive(e, target);
}

function openUserPage(e, target) {
    $('#main-content').empty();
    $('#main-content').load('../components/user-main-content.html');
    changeFooterActive(e, target);
}