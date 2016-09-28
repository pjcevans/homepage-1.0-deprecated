var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
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

getJSON('https://cfe-meetup-api.herokuapp.com/find/groups?id=18356664').then(function(data) {
    alert('Your Json result is:  ' + data.result); // debug

    result.innerText = data.result; // display the result in an HTML element
}, function(status) { // error detection....
  alert('Something went wrong.');
});
