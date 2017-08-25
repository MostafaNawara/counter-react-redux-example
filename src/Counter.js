import React from 'react'
import {connect} from 'react-redux'

export const Counter = (props) => {
  return(
    <div>
      <h1>
        Count : {props.count}
      </h1>

      <button onClick={props.remove}>Remove</button>
      <button onClick={props.add}>Add</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: () => {
      dispatch({type: 'add'})
    },
    remove: () => {
      dispatch({type: 'remove'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)