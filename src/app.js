import Home from './pages/Home.js';
import Service from './pages/Service.js';
import About from './pages/About.js';

class App {
  constructor($target) {
    this.el = $target;
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
    this.route = this.route.bind(this);

    this.navigation = document.getElementById('navigation');
    this.navigation.addEventListener('click', this.handleNavClick);
    window.addEventListener('popstate', this.handlePopState);

    console.log(location.pathname);
    this.route(location.pathname);
  }

  handleNavClick(e) {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    if (path !== history.state?.path) {
      history.pushState({ path }, '', path);
    }
    this.route(path);
  }

  handlePopState(e) {
    const { path } = e.state;
    this.route(path);
  }

  route(path) {
    switch (path) {
      case '/':
      case '/home':
      case '/home/':
        this.render(Home);
        break;
      case '/service':
      case '/service/':
        this.render(Service);
        break;
      case '/about':
      case '/about/':
        this.render(About);
        break;
      default:
        break;
    }
  }

  render(Component) {
    this.el.innerHTML = '';
    new Component({ $target: this.el });
  }
}
export default App;
