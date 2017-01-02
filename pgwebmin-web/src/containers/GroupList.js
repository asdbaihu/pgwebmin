import { connect } from 'react-redux'
import { addGroup } from '../actions'
import GroupBar from '../components/GroupBar'

const getGroups = (groups) => {
  return groups
}

const mapStateToProps = (state) => ({
  groups: getGroups(state.groups)
})

const mapDispatchToProps =  ({
  onAddGroupClick: addGroup
})

const GroupList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupBar)

export default GroupList
