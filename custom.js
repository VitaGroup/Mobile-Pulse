
// Left menu stuff
var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
body = document.body;
 
showLeftPush.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( body, 'cbp-spmenu-push-toright' );
  classie.toggle( menuLeft, 'cbp-spmenu-open' );
  disableOther( 'showLeftPush' );
};

// Global News Widget Color Matching
if ($("div").is("#Widget944"))  {
  var NBNews = $("a[href*='/News/Next-Byte']");
  var NBNEWS = $("a[href*='/NEWS/Next-Byte']");;
  var TelcoNews = $("a[href*='/News/Telecoms']");
  var TelcoNEWS = $("a[href*='/NEWS/Telecoms']");
  var BusNews = $("a[href*='/News/Business']");
  var BusNEWS = $("a[href*='/NEWS/Business']");
  var VGNews = $("a[href*='/News/Vita-Group']");
  var VGNEWS = $("a[href*='/NEWS/Vita-Group']");

  NBNews.parent().parent().addClass('nb-article');
  NBNews.parent().parent().addClass('nb-article');
  NBNEWS.parent().parent().addClass('nb-article');
  NBNEWS.parent().parent().addClass('nb-article');
  TelcoNews.parent().parent().addClass('ts-article');
  TelcoNews.parent().parent().addClass('ts-article');
  TelcoNEWS.parent().parent().addClass('ts-article');
  TelcoNEWS.parent().parent().addClass('ts-article');
  BusNews.parent().parent().addClass('bus-article');
  BusNews.parent().parent().addClass('bus-article');
  BusNEWS.parent().parent().addClass('bus-article');
  BusNEWS.parent().parent().addClass('bus-article');
  VGNews.parent().parent().addClass('bus-article');
  VGNEWS.parent().parent().addClass('bus-article');
}
