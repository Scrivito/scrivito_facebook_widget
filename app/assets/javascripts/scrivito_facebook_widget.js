$(function() {
  $('body').prepend("<div id='fb-root'></div>");
  window.fbAsyncInit = function() {
    FB.init({
      appId      : ("fbAppId" in window) ? window.fbAppId : '',
      xfbml      : true,
      version    : 'v2.5'
    });

    scrivito.on('content', function() {
      FB.XFBML.parse();
    });
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});