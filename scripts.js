jQuery(document).ready(function($) {
    // Function to handle highlighting the active card
    function setActiveCard(index) {
        const cards = document.querySelectorAll('.card-1');
        cards.forEach((card, i) => {
            card.classList.remove('active-card');
            if (i === index) {
                card.classList.add('active-card');
            }
        });
    }

    // Initialize the first card as active
    let activeCardIndex = 0;
    setActiveCard(activeCardIndex);

    // Event listeners for the buttons
    document.getElementById('btn-left').addEventListener('click', () => {
        if (activeCardIndex > 0) {
            activeCardIndex--;
            setActiveCard(activeCardIndex);
        }
    });

    document.getElementById('btn-right').addEventListener('click', () => {
        const cards = document.querySelectorAll('.card-1');
        if (activeCardIndex < cards.length - 1) {
            activeCardIndex++;
            setActiveCard(activeCardIndex);
        }
    });

    // Function to change tabs
    function changeTab(tabNumber) {
        $('.leaf-tab').removeClass('active');
        $('.leaf-tab:nth-child(' + tabNumber + ')').addClass('active');

        $('.tab-section').hide();
        $('#tab' + tabNumber + '-content').show();
    }

    // Function to update images
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

    // Initialize the first tab as active
    changeTab(1);
    updateImages();

    // Event listener for tab clicks
    $('.leaf-tab').click(function() {
        var tabIndex = $(this).index() + 1;
        changeTab(tabIndex);
        updateImages();
    });
});
