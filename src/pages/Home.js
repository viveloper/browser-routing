import Component from '../components/Component.js';

class Home extends Component {
  constructor({ $target }) {
    super({
      $target,
      tagName: 'div',
      className: 'home',
    });

    this.render();
  }

  render() {
    this.el.innerHTML = '<h1>Home</h1>';
  }
}

export default Home;
