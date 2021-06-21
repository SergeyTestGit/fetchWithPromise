import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Component from './Titles'

import { getTitles, getIsLoaded } from '../../Redux/selectors/table'

const selectors = createStructuredSelector({
  titles: getTitles,
  isLoaded: getIsLoaded,
})

export default connect(selectors, null)(Component)
