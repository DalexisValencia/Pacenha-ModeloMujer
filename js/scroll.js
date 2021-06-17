$(window).on("load", function() {
    $('.abi-main-section-container').each(function() {
        const identy = $(this).attr('id');
        // console.warn(identy, 'identy');
        new Waypoint({
            element: document.getElementById(identy),
            handler: function() {
                // console.info('aqui estamos', identy);
                $(".abi-main-section-menu-nav ul li").removeClass('slick-active');

                $(".abi-main-section-menu-nav ul li a").each(function() {
                    if ($(this).attr('href') == '#' + identy) {
                        $(this).parent().addClass('slick-active');
                        resetVideos();
                    }
                });
            },
            offset: identy === 'cause' ? -100 : 200,
            context: document.getElementById('abi-main--wrapper-sections')
        })
    });
    $(".abi-main-section-menu-nav ul li a").on("click", function() {
        const windowWidth = $(document).width();
        const identy = $(this).attr("href");
        if (windowWidth <= 900) {
            $('.abi-main--wrapper-sections .abi-main-section-container').removeClass('active');
            console.error('.abi-main--wrapper-sections .abi-main-section-container' + identy)
            $('.abi-main--wrapper-sections .abi-main-section-container' + identy).addClass('active')
        }
        resetVideos();
    });

    function resetVideos() {
        $('.abi-interactive-video iframe').each(function() {
            const beforeLink = $(this).attr("src");
            $(this).attr("src", beforeLink)
                // console.error($(this).attr("src"));
        });
    }
});