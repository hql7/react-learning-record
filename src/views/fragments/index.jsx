import { Component, Fragment } from 'react';

function Fragments() {
  return (
    <Fragment>
      <p>这是第一段话</p>
      <p>这是第二段话</p>
      <p>这是第三段话</p>
    </Fragment>
  );
}

function SimpleFragments() {
  return (
    <>
      <p>这是第四段话</p>
      <p>这是第五段话</p>
    </>
  )
}

function UlFragments(props) {
  const list = props.list || []
  return (
    <div>
      {
        list.map(i => (
          <Fragment key={i.name}>
            <label>{i.label}</label>
            <span>{i.name}</span>
          </Fragment>
        ))
      }
    </div>
  )
}

const list = [{ name: 'lilei', label: 'hei' }, { name: 'hanmeimei', lable: 'hello' }]
class UiRender extends Component {
  render() {
    return (
      <div>
        <Fragments />
        <SimpleFragments />
        <UlFragments list={list} />
      </div>
    )
  }
}

export default UiRender;
