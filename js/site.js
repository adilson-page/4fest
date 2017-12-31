//scroll lento

$('nav a').click(function (e) {
    //previne a mudança no url
    e.preventDefault();
    //attr pega o atributo
    var id = $(this).attr('href'),
        //offset retorna o top e left do elemento
        targetOfSet = $(id).offset().top;
    $('html,body').animate({
        scrollTop: targetOfSet - 50
    }, 900);
});



//elementos animados
//iife
(function () {
    var $target = $('.anime'),
        animationClass = 'anime-start',
        offSet = $(window).height * 3 / 4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function () {
            var itenTop = $(this).offset().top;

            if (documentTop > itenTop - 500) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass)
            }
        })
    }
    animeScroll();
    $(document).scroll(function () {
        animeScroll();
          console.log('teste');
    })
}());
