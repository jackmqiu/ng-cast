angular.module('video-player')
.service('youTube', function($http) {
  this.get = function(searchTerm, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: YOUTUBE_API_KEY,
        q: searchTerm || 'sunflowers',
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      }
    }).then((response) => {
      callback(response.data.items);
    }, (response) => {
      console.log('error: ' + response);
    });
  };
});
