import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  element.innerHTML = 'Bring me home with flex!';

  return element;
}

document.body.appendChild(component());
