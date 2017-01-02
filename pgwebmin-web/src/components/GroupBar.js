import React, { PropTypes } from 'react'
import { Col, Button } from 'react-bootstrap'

var styles = {
	group: {
		backgroundColor: "rgb(51,103,145)", 
		color: "grey",
	}
}

const GroupBar = ({ groups, onAddGroupClick} ) => (
  <Col sm={1} md={1} style={styles.group}>
    {groups.map(group => 
      <div key={group.id}><Button bsStyle="primary" bsSize="large" block>{group.name}</Button><br/></div>
    )}
      <Button bsSize="large" block>+</Button>
  </Col>
)

GroupBar.propTypes = {
	groups: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onAddGroupClick: PropTypes.func.isRequired
}

export default GroupBar