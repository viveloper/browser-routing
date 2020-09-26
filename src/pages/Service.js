import Component from '../components/Component.js';

class Service extends Component {
  constructor({ $target }) {
    super({
      $target,
      tagName: 'div',
      className: 'service',
    });

    this.render();
  }

  render() {
    this.el.innerHTML = '<h1>Service</h1>';
  }
}

export default Service;
