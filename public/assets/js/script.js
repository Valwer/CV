class StickyNavigation {
    constructor() {
        this.tabContainerHeight = 70;
        $('.et-hero-tab').click(event => this.onTabClick(event));
        $(window).scroll(() => this.onScroll());
        $(window).resize(() => this.onResize());
    }

    onTabClick(event) {
        event.preventDefault();
        const target = $(event.currentTarget).attr('href');
        const scrollTop = $(target).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop }, 600);
    }

    onScroll() {
        // Vérifiez si l'écran est de taille mobile
        if ($(window).width() <= 768) {
            // Désactivez la navigation collante sur les appareils mobiles
            return;
        }
        
        const offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
        const scrolled = $(window).scrollTop();
        $('.et-hero-tabs-container').toggleClass('et-hero-tabs-container--top', scrolled > offset);
        this.findCurrentTabSelector();
    }

    onResize() {
        this.setSliderCss();
    }

    findCurrentTabSelector() {
        const scrollTop = $(window).scrollTop() + this.tabContainerHeight;
        $('.et-hero-tab').removeClass('current');
        $('.et-hero-tab').each(function () {
            const target = $(this).attr('href');
            const offsetTop = $(target).offset().top;
            const offsetBottom = offsetTop + $(target).height();
            if (scrollTop >= offsetTop && scrollTop <= offsetBottom) {
                $(this).addClass('current');
            }
        });
        this.setSliderCss();
    }

    setSliderCss() {
        const currentTab = $('.et-hero-tab.current');
        if (currentTab.length) {
            const width = currentTab.css('width');
            const left = currentTab.offset().left;
            $('.et-hero-tab-slider').css({ width, left });
        }
    }
}

new StickyNavigation();

// Animation des cards

$(document).ready(function(){
    var animated = false;

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var elementTop = $('#tab-flexbox').offset().top;
        var elementHeight = $('#tab-flexbox').height();
        // Décalage de 200 pixels pour déclencher l'animation plus tôt
        var triggerPoint = elementTop - windowHeight + elementHeight - 200;

        if(scroll > triggerPoint && !animated){
            $('#card1').addClass('animated').css('opacity', 1).css('animation-name', 'slideFromLeft');
            $('#card2').addClass('animated').css('opacity', 1).css('animation-name', 'slideFromRight');
            $('#card3').addClass('animated').css('opacity', 1).css('animation-name', 'slideFromLeft');
            $('#card4').addClass('animated').css('opacity', 1).css('animation-name', 'slideFromRight');
            animated = true;
        }
    });
});

// Fermeture du offcanva au click sur les liens

// Récupérer tous les liens à l'intérieur de l'offcanvas
var offcanvasLinks = document.querySelectorAll('.offcanvas-link');

// Boucle à travers chaque lien
offcanvasLinks.forEach(function(link) {
  // Ajouter un gestionnaire d'événements de clic à chaque lien
  link.addEventListener('click', function() {
    // Fermer l'offcanvas lorsqu'un lien est cliqué
    var offcanvasElement = document.getElementById('offcanvasResponsive');
    var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvasInstance.hide();
  });
});

// TIMELINE 

/**********************Scroll Animation "START"************************************/
$(document).ready(function(){
    var $animation_elements = $('.anim');
    var $window = $(window);
    
    function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
    (element_top_position <= window_bottom_position)) {
    $element.addClass('animated');
    } else {
    $element.removeClass('animated');
    }
    });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    });
    /**********************Scroll Animation "END"************************************/
    
    /**********************Change color of center aligned animated content small Circle  "START"************************************/
    $(document).ready(function(){
        $(" .debits").hover(function(){
            $(" .center-right").css("background-color", "#4997cd");
            }, function(){
            $(" .center-right").css("background-color", "#fff");
        }); 
    });
    $(document).ready(function(){
        $(".credits").hover(function(){
            $(".center-left").css("background-color", "#4997cd");
            }, function(){
            $(".center-left").css("background-color", "#fff");
        }); 
    });
    /**********************Change color of center aligned animated content small Circle  "END"************************************/
