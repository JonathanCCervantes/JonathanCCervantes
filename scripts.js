jQuery(document).ready(function($) {
    function changeTab(tabNumber) {
        $('.leaf-tab').removeClass('active');
        $('.leaf-tab:nth-child(' + tabNumber + ')').addClass('active');

        $('.tab-section').hide();
        $('#tab' + tabNumber + '-content').show();
    }

    function updateImages() {
        $('.leaf-tab').each(function() {
            var $tab = $(this);
            var $img = $tab.find('img');
            var activeImg = $tab.data('active-img');
            var inactiveImg = $tab.data('inactive-img');
            if ($tab.hasClass('active')) {
                $img.attr('src', activeImg);
            } else {
                $img.attr('src', inactiveImg);
            }
        });
    }

    changeTab(1);
    updateImages();

    $('.leaf-tab').click(function() {
        var tabIndex = $(this).index() + 1;
        changeTab(tabIndex);
        updateImages();
    });
});