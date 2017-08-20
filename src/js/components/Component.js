class Component {
  constructor(element, data) {
    this.element = element;
    this.data = data;
  }

  static render() {
    throw new Error('You would need to write a method that knew how to render the component');
  }
}

export default Component;
