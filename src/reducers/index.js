import { navigate } from '../utils/constants'
import dates from '../utils/dates'

const initialState = {
  date: new Date(),
}

const week = (state = initialState, action) => {
  switch (action.type) {
    case navigate.PREVIOUS:
      return Object.assign({}, state, {
        date: dates.add(action.date, -1, 'week'),
      })
    case navigate.NEXT:
      return Object.assign({}, state, {
        date: dates.add(action.date, 1, 'week'),
      })

    case navigate.TODAY:
      return Object.assign({}, state, {
        date: new Date(),
      })
    default:
      return state
  }
}

export default week
