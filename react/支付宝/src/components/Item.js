import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    let { item, type } = this.props
    return (
      <div className="m-list-item">
        <div className={"icon iconfont m-icon icon-" + item.icon}></div>
        <div>{item.name}</div>
        { type === 'delete' && <span className="m-item-delete-btn" onClick={this.props.onDelete.bind(this, item.id)}>×</span> }
        { type === 'add' && <span className="m-item-add-btn" onClick={this.props.onAdd.bind(this, item.id)}>＋</span> }
      </div>
    )
  }
}
