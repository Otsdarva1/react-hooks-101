import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import {
  DELETE_EVENT,
  ADD_OPERATION_LOG
} from '../actions'
import { timeCurrentIso8601 } from '../utils'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${event.id})を本当に削除しますか？`)
    if (result) {
      dispatch({ type: DELETE_EVENT, id: event.id })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベントを削除しました。(id=${event.id})`,
        operatedAt: timeCurrentIso8601()
      })
    }
  }
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event