var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

getJSON('https://api.meetup.com/founderscoders/events?sig_id=183914168&sig=ea5496808a9860ea997d74b191fa0bfedbb36733').then(function(data) {
    alert('Your Json result is:  ' + data.result); // debug

    result.innerText = data.result; // display the result in an HTML element
}, function(status) { // error detection....
  alert('Something went wrong.');
});
