import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Api from '../api'

const Detail = (props) => {
  const [ detail, setDetail ] = useState({})

  const handleAdd = (item) => {
    let { myBook } = props
    myBook.push(item)
    props.setState('myBook', myBook)
  }

  useEffect(() => {
    let { id } = props.match.params
    Api.getDetail(`?id=${id}`).then(res => {
      if (res.code === 200) {
        setDetail(res.data)
      }
    })
  }, [])

  return (
    <div>
      <img src={detail.avatar}></img>
      {detail.title}<button onClick={handleAdd.bind(this, detail)}>收藏</button>
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