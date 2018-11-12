// Use the CDN or host the script yourself
// https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js
// https://matthewelsom.com/assets/js/libs/instafeed.min.js

var userFeed = new Instafeed({
  get: 'user',
  userId: '623597756',
  clientId: '02b47e1b98ce4f04adc271ffbd26611d',
  accessToken: '623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72',
  resolution: 'standard_resolution',
  template:  '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}"/></a>',

  sortBy: 'most-recent',
  limit: 12,
  links: false
});
userFeed.run();

// document.addEventListener("DOMContentLoaded", function() {
  
//   var tutorialFeed = new Instafeed ({
//   get: 'user',
//   userId: '623597756',
//   clientId: '02b47e1b98ce4f04adc271ffbd26611d',
//   target: 'tutorial-instafeed',
//   accessToken: '623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72',
//   resolution: 'standard_resolution',
//   sortBy: 'most-recent',
//   limit: 9,
//   template: '<div class="image-item insta-page">' +
//   '<a class="image insta-image" href="{{image}}>' +
//   '<img alt="{{user.full_name}}" src="{{image}}>' +
//   '<div class="img-backdrop-tutorial">' +
//   '<div class="insta-caption">' +
//   '<p>{{caption}}</p>' +
//   '</div>' +
//   '</div>' +
//   '<div class="captions">' +
//   '<a></a>' +
//   '</div>' +
//   '</a>' +
//   '</div>'

//    });
    
//    tutorialFeed.run();
   
// });