import { createStore } from "redux"
const reducer = (state, action) => {
  return state + 1
}
const store = createStore(reducer)

const action = {
  type: 'Add_ITEM',
  payload: '<li>text</li>'
}

store.dispatch(action)

