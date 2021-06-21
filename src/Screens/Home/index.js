import { connect } from 'react-redux'

import Component from './Home'

import { setTitles, deleteTitle } from '../../Redux/actions/table'

const actions = {
  onSetTitles: setTitles,
  onDeleteTitle: deleteTitle,
}

export default connect(null, actions)(Component)
