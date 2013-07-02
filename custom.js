
// Left menu stuff
if ($('form').hasClass('mobile-home'))
{
  var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
  body = document.body;
   
  showLeftPush.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'cbp-spmenu-push-toright' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
  };
}

// Global News Widget Color Matching
if ($("div").is("#Widget944"))  
{
  var NBNews = $("a[href*='/News/Next-Byte']");
  var NBNEWS = $("a[href*='/NEWS/Next-Byte']");;
  var TelcoNews = $("a[href*='/News/Telecoms']");
  var TelcoNEWS = $("a[href*='/NEWS/Telecoms']");
  var BusNews = $("a[href*='/News/Business']");
  var BusNEWS = $("a[href*='/NEWS/Business']");
  var VGNews = $("a[href*='/News/Vita-Group']");
  var VGNEWS = $("a[href*='/NEWS/Vita-Group']");

  NBNews.parent().parent().parent().addClass('nb-article');
  NBNEWS.parent().parent().parent().addClass('nb-article');
  TelcoNews.parent().parent().parent().addClass('ts-article');
  TelcoNEWS.parent().parent().parent().addClass('ts-article');
  BusNews.parent().parent().parent().addClass('bus-article');
  BusNEWS.parent().parent().parent().addClass('bus-article');
  VGNews.parent().parent().parent().addClass('vg-article');
  VGNEWS.parent().parent().parent().addClass('vg-article');

  // The links in the 'WidgetPageLinks' make the above function apply vg-article to the parent div, which breaks things. 
  // Look at refactoring the function
  $("#Widget944").removeClass('vg-article');
  $(".column").removeClass('vg-article');
}

$("#WidgetPageLink944").appendTo($('.container'));

if ($('form').hasClass('vitatube')) {
  $('.mainItem dl dt br, .subItem dl dt br').remove();

}

// Wrap <legend> tags in <h2> as legend tags are hard to style.
if ($('form').hasClass('mobile-forms-view')) {
  $('legend').wrap('<h2>');
}