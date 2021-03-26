import React from 'react';

class UiRender extends React.Component {
  render() {
    return (
      <div>
        <p>
          高阶组件自身不是React APi的一部分，而是一种基于React的组合特征而形成的设计模式
        </p>
        <p>特征：高阶组件是参数为组件，返回值为新组件的函数</p>
      </div>
    )
  }
}

class DataSourceClass {
  constructor() {
    this.list = [];
  }
  getComments() {
    return this.list
  }
  addChangeListener(ctx) {
    return function (...args) {
      ctx.apply(this, args)
    }
  }
}

const DataSource = new DataSourceClass()

class CommentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: DataSource.getComments()
    }
  }
  handleChange() {
    this.setState({
      comments: DataSource.getComments()
    })
  }
  render() {
    let comments = this.state.comments || []
    return (
      <div>
        {
          comments.map(item => (
            <Comment comment={item} key={item.id} />
          ))
        }
      </div>
    )
  }
}

function Comment(props) {
  return (
    <p>{props.name} like {props.like}</p>
  )
}

export default UiRender;
