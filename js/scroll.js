$(window).on("load",function(){
    $('.abi-main-section-container').each(function(){
        const identy = $(this).attr('id');
        // console.warn(identy, 'identy');
        new Waypoint({
            element: document.getElementById(identy),
            handler: function() {
                // console.info('aqui estamos', identy);
                $(".abi-main-section-menu-nav ul li").removeClass('slick-active');
                
                $(".abi-main-section-menu-nav ul li a").each(function(){
                    if ($(this).attr('href') == '#'+identy) {
                        $(this).parent().addClass('slick-active');
                    }
                });
            },
            offset: identy === 'cause' ? -100 : 200,
            context: document.getElementById('abi-main--wrapper-sections')
        })
    });
});