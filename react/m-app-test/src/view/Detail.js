import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Api from '../api'

const Detail = (props) => {
  const [detail, setDetail] = useState({})

  const handleAdd = (item) => {
    let { myBook } = props
    item.count = 1
    item.checked = true
    myBook.push(item)
    props.setState('myBook', myBook)
    //显示loading
    Api.add({ book: item }).then(res => {
      if (res.code === 200) {
        //取消loading
        item.is_in_my_book = true
        let itemClone = JSON.parse(JSON.stringify(item))
        setDetail(itemClone)
      }
    })
  }

  useEffect(() => {
    let { id } = props.match.params
    props.setState('loading', true)
    Api.getDetail(`?id=${id}`).then(res => {
      if (res.code === 200) {
        setDetail(res.data)
        props.setState('loading', false)
      }
    })
  }, [])

  return (
    <div>
      <img src={detail.avatar}></img>
      {detail.title}
      {
        detail.is_in_my_book ?
          <button>已收藏</button>
          :
          <button onClick={handleAdd.bind(this, detail)}>收藏</button>
      }

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myBook: state.myBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)