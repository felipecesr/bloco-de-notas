class Component {
  constructor(data, element) {
    this.data = data;
    this.element = element;
  }

  static render() {
    throw new Error('You would need to write a method that knew how to render the component');
  }
}

export default Component;
