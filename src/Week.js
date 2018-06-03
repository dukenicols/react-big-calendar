import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import dates from './utils/dates'
import localizer from './localizer'
import { navigate } from './utils/constants'
import TimeGrid from './TimeGrid'

import { navigatePrevious, navigateNext, navigateDefault } from './actions'
import { store } from '../examples/App'

class Week extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    _date: PropTypes.instanceOf(Date).isRequired,
  }

  static defaultProps = TimeGrid.defaultProps

  render() {
    let { _date, ...props } = this.props
    let range = Week.range(_date, this.props)
    return <TimeGrid {...props} range={range} eventOffset={15} />
  }
}

Week.navigate = (date, action) => {
  switch (action) {
    case navigate.PREVIOUS:
      store.dispatch(navigatePrevious(date))
      break
    case navigate.NEXT:
      store.dispatch(navigateNext(date))
      break
    default:
      return store.dispatch(navigateDefault(date))
  }
}

Week.range = (date, { culture }) => {
  let firstOfWeek = localizer.startOfWeek(culture)
  let start = dates.startOf(date, 'week', firstOfWeek)
  let end = dates.endOf(date, 'week', firstOfWeek)

  return dates.range(start, end)
}

Week.title = (date, { formats, culture }) => {
  let [start, ...rest] = Week.range(date, { culture })
  return localizer.format(
    { start, end: rest.pop() },
    formats.dayRangeHeaderFormat,
    culture
  )
}

const mapStateToProps = state => ({
  _date: state.date,
})

export default connect(mapStateToProps)(Week)
