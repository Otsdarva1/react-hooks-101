import {
    CREATE_EVENT,
    DELETE_EVENT,
    DELETE_ALL_EVENTS
  } from '../actions'

const events = (state = [], action) => {
    switch(action.type) {
        case CREATE_EVENT:
            let id = state.length === 0 ? 1 : state[state.length - 1].id + 1
            const event = { id, title: action.title, body: action.body }
            return [...state, event]
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id)
        case DELETE_ALL_EVENTS:
            return []
        default:
            return state
    }
}

export default events