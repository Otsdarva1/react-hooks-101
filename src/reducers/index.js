
// action = {
//     type: 'CREATE_EVENT',
//     title: 'hogehoge',
//     body: 'fugafuga'
// }


// # before
// state = []
// # after
// state = [
//     {
//         id: 1,
//         title: 'hogehoge',
//         body: 'fugafuga'
//     }
// ]


// # before
// state = [
//     {id: 1, title: 'タイトル1', body: 'ボディー1'},
//     {id: 2, title: 'タイトル2', body: 'ボディー2'},
//     {id: 3, title: 'タイトル3', body: 'ボディー3'},
// ]

// # after
// state = [
//     {id: 1, title: 'タイトル1', body: 'ボディー1'},
//     {id: 2, title: 'タイトル2', body: 'ボディー2'},
//     {id: 3, title: 'タイトル3', body: 'ボディー3'},
//     {
//         id: 4,
//         title: 'hogehoge',
//         body: 'fugafuga'
//     },
// ]
const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            let id = state.length === 0 ? 1 : state[state.length - 1].id + 1
            const event = { id, title: action.title, body: action.body }
            return [...state, event]
        case 'DELETE_EVENT':
            return state.filter(event => event.id !== action.id)
        case 'DELETE_ALL_EVENT':
            return []
        default:
            return state
    }
}

export default events