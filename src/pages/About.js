import Component from '../components/Component.js';

class About extends Component {
  constructor({ $target }) {
    super({
      $target,
      tagName: 'div',
      className: 'about',
    });

    this.render();
  }

  render() {
    this.el.innerHTML = '<h1>About</h1>';
  }
}

export default About;
