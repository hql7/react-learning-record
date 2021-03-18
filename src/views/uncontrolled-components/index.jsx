import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    console.log(this.input.current.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input type="text" defaultValue="lilei" ref={this.input} />
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.fileInput.current.files);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

class UiRender extends React.Component {
  render() {
    return (
      <div>
        <NameForm />
        <div>
          <FileInput />
        </div>
      </div>
    )
  }
}

export default UiRender;
