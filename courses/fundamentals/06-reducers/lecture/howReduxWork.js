const initialState = {
  count: 0,
  user: {}
}

const actions = [
  { type: 'ADD', by: 2 },
  { type: 'MINUS', by: 4 },
  { type: 'SET_USER', user: { name: 'vitor' } },
]

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + action.by }
    case 'MINUS':
      return { ...state, count: state.count - action.by }
    case 'SET_USER':
      return { ...state, user: action.user }
    default:
      break;
  }
}

actions.reduce(reducer, initialState)