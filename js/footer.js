function changeActive(e, target) {
    e.preventDefault();
    $('.footer-nav-ul li').removeClass('footer-nav-active');
    $(target).closest('li').addClass('footer-nav-active');
}

function openFaqPage(e, target) {
    $('#main-content').empty();
    $('#main-content').load('../components/faq-content.html');
    changeActive(e, target);
}

function openMainPage(e, target) {
    $('#main-content').empty();
    $('#main-content').load('../components/main-content.html');
    changeActive(e, target);
}

function openUserPage(e, target) {
    $('#main-content').empty();
    $('#main-content').load('../components/user-main-content.html');
    changeActive(e, target);
}