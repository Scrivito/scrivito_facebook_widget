# ScrivitoFacebookWidget

A Scrivito widget that inserts a Facebook stream into a page. You can add a Facebook page by its URL, or a video or a single post by its ID.

## Installation

Add this line to your application's Gemfile:

    gem 'scrivito_facebook_widget'

Add this line to your application stylesheet manifest:

    //= require scrivito_facebook_widget

## Facebook App ID

When using this widget, a warning is displayed in the browser console, saying that no app ID is set. This is no problem as long as you are not using private content from Facebook on your web page.

To remove this warning, just set a global JavaScript variable at the top of the page:

```javascript
var fbAppId = yourAppId
```

The App ID can be generated using Facebook's developer tools.
