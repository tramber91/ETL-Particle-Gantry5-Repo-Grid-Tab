jQuery(document).ready(function () {
    jQuery('[data-etl-repogridtab-id]').each(function (index) {
        var mainContainer = jQuery(this);
        var navContainer = jQuery('.etl-repogridtab-nav', mainContainer);

        mainContainer.imagesLoaded(function () {
            var Shuffle = window.Shuffle;
            var element = document.querySelector('.etl-repogridtab-grid', mainContainer);
            var sizer = element.querySelector('.etl-repogridtab-grid-sizer', mainContainer);
            var shuffleInstance = new Shuffle(jQuery('.etl-repogridtab-grid', mainContainer), {
                itemSelector: '.etl-repogridtab-grid-item',
                sizer: sizer,
                randomize: true,
                group: jQuery('.selected', navContainer).attr('data-group'),
            });
            jQuery('.etl-repogridtab-nav-container', navContainer).on('click', function () {
                jQuery('.etl-repogridtab-nav-item', navContainer).toggleClass('clicked');
            });

            jQuery('.etl-repogridtab-nav-item', navContainer).click(function () {
                jQuery('.etl-repogridtab-nav-item', navContainer).removeClass('selected');
                jQuery(this).addClass('selected');
                shuffleInstance.filter(jQuery(this).attr('data-group'));
            });
            mainContainer.addClass('visible');
        });

    });
});
