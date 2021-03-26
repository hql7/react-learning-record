// 一个功能示例 2021.03.08 weilan 

import { Component, Fragment } from "react";

// 商品信息
function GoodsItem(props) {
  return (
    <p className="goods-item">
      <label className="goods-name">{props.name}：<span className="goods-price">{props.price}</span></label>
    </p>
  )
}
// 分组名
function GroupTitle(props) {
  return (
    <h4 className="group-title">{props.title}</h4>
  )
}
// 商品列表展示区
function ListArea(props) {
  let group = null;
  let goods = props.goods;
  return (
    <div className="list-area">
      <h3 className="list-area-title">
        <label className="goods-name">Name</label>
        <span className="goods-price">Price</span>
      </h3>
      {
        goods.map(i => {
          if (group === i.category) {
            return (
              <GoodsItem key={i.name} name={i.name} price={i.price} />
            )
          } else {
            group = i.category
            return (
              <div key={i.name}>
                <GroupTitle title={group} />
                <GoodsItem name={i.name} price={i.price} />
              </div>
            )
          }
        })
      }
    </div>
  )
}

// 商品搜索区
class SearchArea extends Component {
  constructor(props) {
    super(props)
    this.handleIptChange = this.handleIptChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }

  handleIptChange(e) {
    this.props.onInputChange(e.target.value)
  }
  handleCheckChange(e) {
    this.props.onCheckChange(e.target.checked)
  }

  render() {
    let value = this.props.value;
    let checked = this.props.checked
    return (
      <Fragment>
        <label >
          搜索框：
          <input type="text" value={value} onChange={this.handleIptChange} />
        </label>
        <label>
          只看在售：
          <input type="checkbox" value={checked} onChange={this.handleCheckChange} />
        </label>
      </Fragment>
    )
  }
}

const data = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
// demo ui
class TheDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iptValue: '',
      stockChecked: false
    }
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleIptChange = this.handleIptChange.bind(this)
  }
  handleCheckChange(value) {
    this.setState({
      stockChecked: value
    })
  }
  handleIptChange(value) {
    this.setState({
      iptValue: value
    })
  }
  render() {
    let { iptValue, stockChecked } = this.state
    let filterData = data.filter(i => {
      if (stockChecked) {
        return i.stocked && i.name.indexOf(iptValue) !== -1
      } else {
        return i.name.indexOf(iptValue) !== -1
      }
    })
    return (
      <div>
        <SearchArea
          value={iptValue}
          checked={stockChecked}
          onInputChange={this.handleIptChange}
          onCheckChange={this.handleCheckChange} />
        <ListArea goods={filterData} />
      </div>
    )
  }
}

export default TheDemo
