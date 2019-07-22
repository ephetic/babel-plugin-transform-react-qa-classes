import React, { Component } from 'react';

class componentName extends Component {
  render() {
    return <div data-qa="component-name">
        <h1>Hello world</h1>
      </div>;
  }
}

class componentWithExistingAttribute extends Component {
  render() {
    return <div data-qa="component-with-existing-attribute" data-qa="hello">
        <h1>Hello world</h1>
      </div>;
  }
}

class componentWithDynamicAttribute extends Component {
  render() {
    const qa = "hello";
    return <div data-qa="component-with-dynamic-attribute" data-qa={qa}>
        <h1>Hello world</h1>
      </div>;
  }
}

export default componentName;
