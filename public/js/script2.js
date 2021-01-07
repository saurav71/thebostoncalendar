


/* The HTML is using script.min.js version, please change it in the HTML in case
you editing this script.js */

// Open hamburger menu
$('#hamburger-open').click(function(){
    $('#hamburger-menu').addClass('active');
    $('#hamburger-menu-dark-overlay').addClass('active');
});

// Close hamburger nenu
$('#hamburger-close').on('click', function(){
    $('#hamburger-menu').removeClass('active');
    $('#hamburger-menu-dark-overlay').removeClass('active');
});

$('#hamburger-menu-dark-overlay').on('click touchstart', function(){
    $('#hamburger-menu').removeClass('active');
    $('#hamburger-menu-dark-overlay').removeClass('active');
});

// Open and close search input
$('#search-open').click(function(){
    $(this).toggleClass('active');
    $('#title-bar-title').toggle();
    $('#title-bar-search').toggle();
    if($('#title-bar-search').css('display') == 'none')
    {
      $('.search-bar').blur();
    }
    else
    {
     $('.search-bar').focus();
    }
});

// Show the right dropdown overlay on toolbar click
$('.dropdown-toolbar').find('a').click(function(){
    bodyScrollTop = $('body').scrollTop();
    $theButton = $(this);
    $('#dropdown-wrap-home').css('max-height', window.innerHeight - 90);

    if (typeof $theButton.attr('href') !== typeof undefined && $theButton.attr('href') !== false) {
        return 0;
    } else if ($theButton.parent().hasClass('active')) {
        $(window).off('.bodyLockScroll');

        $('body').removeClass('lock-position');
        $theButton.parent().siblings().addBack().removeClass('active');
        
        $('.dropdown-wrap').find('.widget').removeClass('active');
        $('.dropdown-wrap').removeClass('active');
        $('.dropdown-dark-overlay').removeClass('active');
    } else {
        $(window).on('scroll.bodyLockScroll', function() {
            $('body').scrollTop(bodyScrollTop);
        });        
        
        $theButton.parent().siblings().addBack().removeClass('active');
        
        $('.dropdown-wrap').find('.widget').removeClass('active');
        $($theButton.data('widget-selector')).addClass('active');
        
        $theButton.parent().addClass('active');
        $('.dropdown-wrap').addClass('active');
        $('.dropdown-dark-overlay').addClass('active');
    }
    
    if($theButton.data('widget-selector') === '#widget-categories') {
        $('#category-filter-buttons').toggleClass('active');
        $('#category-filter-buttons').css('top', window.innerHeight - 50);
        floatFilterPlacement();
    } else {
        $('#category-filter-buttons').removeClass('active');
    }
});
        
// Close dropdown on dark overlay click
$('#dropdown-dark-overlay').on('click touchstart', function () {
    $(window).off('.bodyLockScroll');
    $('body').removeClass('lock-position');
    $theButton.parent().siblings().addBack().removeClass('active');
    $('.dropdown-wrap').find('.widget').removeClass('active');
    $('.dropdown-wrap').removeClass('active');
    $('.dropdown-dark-overlay').removeClass('active');
    $('#category-filter-buttons').removeClass('active');
});

$('#filter-time').on('click','#filter-time-table-more',function(){
    $(this).toggleClass('active');
    $('#filter-time-table').find('.hidable').toggleClass('active');
});

// Bigger click area on events feed row click


$('.article-row').on('click', function () {
    window.location.href = $(this).find('a').attr('href');
});

// Filter float buttons placement
function floatFilterPlacement() {
    $categoryFilterButtons = $('#category-filter-buttons');
    if((window.innerHeight - 50) < ($('#dropdown-wrap-home').height() + 60)) {
        $categoryFilterButtons.css('top', window.innerHeight - 50);
    } else {
        $categoryFilterButtons.css('top', $('#dropdown-wrap-home').height() + 60);
    }
};

// Fix hamburger menu postion on window resize and some responsiveness
$(window).on('resize', function(){
    bodyMarginLeft = $('body').css('margin-left');
    $('.hamburger-hider').css('width', bodyMarginLeft);
    $('.hamburger-menu').css('left', bodyMarginLeft);
    
    $('#dropdown-wrap-home').css('max-height', window.innerHeight - 90);
    
    $articlePageFigure = $('.article-page').find('.article-figure');
    $articlePageFigure.css('height', parseInt($articlePageFigure.css('width')) * (9/16));
    
 
    
    floatFilterPlacement();
});


$(window).trigger('resize');





function getParameter(theParameter) { 
  var params = window.location.search.substr(1).split('&');
 
  for (var i = 0; i < params.length; i++) {
    var p=params[i].split('=');
	if (p[0] == theParameter) {
	  return decodeURIComponent(p[1]);
	}
  }
  return false;
};

// Categories Filter
$('#filter-categories').find('.item').on('click', function() {
   $(this).toggleClass('active'); 
});

$('#filter-categories-do').on('click', function(){


  //  $('#load_home').show();
  //  $('.section-title').addClass('hide');
  //  $('.article-list').addClass('hide');     
    cats = [];
    $('#filter-categories').find('.item.active').each(function(key, val){
        cats.push($(val).text().trim());
    });
   if (getParameter('day')==false){    
    window.location.href = window.location.origin + window.location.pathname + "?" + $.param({ tags: cats });
    }
    
    
         else if (getParameter('tomorrow')=='1') {
    window.location.href = window.location.origin + window.location.pathname + "?" + $.param({ tags: cats })+"&day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&tomorrow=1";
    } 
     else if (getParameter('weekend')=='1') {
    window.location.href = window.location.origin + window.location.pathname + "?" + $.param({ tags: cats })+"&day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&weekend=1";
    } 
    
    
    
     else if (getParameter('week')=='1') {
    window.location.href = window.location.origin + window.location.pathname + "?" + $.param({ tags: cats })+"&day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&week=1";
    }
     else if (getParameter('this_month')=='1') {
    window.location.href = window.location.origin + window.location.pathname + "?" + $.param({ tags: cats })+"&day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&this_month=1";
    } 
     
     else if (getParameter('three_months')=='1') {
    window.location.href = window.location.origin + window.location.pathname + "?" + $.param({ tags: cats })+"&day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&three_months=1";
    } 
               
        
    else{
    window.location.href = window.location.origin + window.location.pathname + "?" + $.param({ tags: cats })+"&day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year');
    }
    
});



$('#filter-categories-clear').on('click', function(){

 //   $('#load_home').show();
 //   $('.section-title').addClass('hide');
 //   $('.article-list').addClass('hide');      
     cats = [];
    $('#filter-categories').find('.item.active').each(function(key, val){
        cats.push($(val).text().trim());
    });
       if (getParameter('day')==false){ 
    window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"");
     }
     else if (getParameter('weekend')=='1') {
          window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&weekend=1";

     }
     else if (getParameter('week')=='1') {
          window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&week=1";

     } 
     
          else if (getParameter('this_month')=='1') {
          window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&this_month=1";

     } 
          else if (getParameter('three_months')=='1') {
          window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&three_months=1";

     }     
        else{
     window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year');
       
        }

    $('#filter-categories').find('.item').removeClass('active');
   
});


$('.clear-filters').on('click', function(){
  //  $('#load_home').show();
     cats = [];
    $('#filter-categories').find('.item.active').each(function(key, val){
        cats.push($(val).text().trim());
    });
       if (getParameter('day')==false){ 
    window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"");
     }
     else if (getParameter('weekend')=='1') {
          window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&weekend=1";

     }
     else if (getParameter('week')=='1') {
          window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&week=1";

     } 
     
          else if (getParameter('this_month')=='1') {
          window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&this_month=1";

     } 
          else if (getParameter('three_months')=='1') {
          window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year')+"&three_months=1";

     }     
        else{
     window.location.href = (window.location.origin + window.location.pathname).replace($.param({ tags: cats }),"")+"?day="+getParameter('day')+"&month="+getParameter('month')+"&year="+getParameter('year');
       
        }

    $('#filter-categories').find('.item').removeClass('active');
   
});



$('.clear-filters-discount').on('click', function(){
  //  $('#load_home').show();

 
     window.location.href = (window.location.origin);
       
        

   
});


// Recuring weekly toggle and free toggle
$('input[name="weekly"]').change(function() {
    if ($('input[name="untildate"]').attr('disabled')) {
        $('input[name="untildate"]').removeAttr('disabled');
    } else {
        $('input[name="untildate"]').attr('disabled', "");
    }
});

$('input[name="admissionfree"]').change(function() {
    if ($('input[name="admissionfee"]').attr('disabled')) {
        $('input[name="admissionfee"]').removeAttr('disabled');
    } else {
        $('input[name="admissionfee"]').attr('disabled', "");
    }
});


// Standalone Web App, prevent links open in safari
(function (standalone) {

    if (!standalone) {
        return;
    }

    document.addEventListener('click', function (e) {
        var element = e.target,
            href = '';

        while (!/^(a|html)$/i.test(element.nodeName)) {
            element = element.parentNode;
        }

        if (element.getAttribute) {
            href = element.getAttribute('href');
            openSafari = element.getAttribute('data-open-safari');

            if ('1'  !== openSafari && '' !== href && '#' !== href && null !== href && (!element.protocol || element.protocol !== 'tel:')) {
                e.preventDefault();
                                
                window.location = element.href;
    

            }
        }
    }, false);

}(window.navigator.standalone));


