$(function() {
  $('body').prepend('<div id="fb-root"></div>');

  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: ("fbAppId" in window) ? window.fbAppId : '',
      version: 'v2.3'
    });

    scrivito.on('content', function() {
      FB.XFBML.parse();
    });
  });
});
