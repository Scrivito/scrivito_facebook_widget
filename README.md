# ScrivitoFacebookWidget

A Widget for scrivito to insert a Facebok stream. You can add a page by its url, a video or a single post.

## Installation

Add to your gemfile

    gem 'scrivito_facebook_widget'

Add to your Javascript mainfest

    //= require scrivito_facebook_widget

## Facebook App id

Normaly you will see a warning, that no app id is set. This is no problem as long as you do not want to use private content on you webpage.

Iy you want to remove this warning, you have to set a global variable in javascript at the beginning of you document.

```javascript
var fbAppId = yourAppId
```