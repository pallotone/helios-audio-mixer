function onreadystatechange(e) {
  postMessage({readyState: this.readyState, status: this.status, response: this.response});
}

function loadError() {
  events.trigger('loadError', track);
}

onmessage = function (e) {
  httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', e.data, true);
  httpRequest.responseType = 'arraybuffer';

  httpRequest.addEventListener('readystatechange', onreadystatechange, false);
  httpRequest.addEventListener('error', loadError, false);

  httpRequest.send();
};
