import React from 'react'
import { Col, Button } from 'react-bootstrap'

var styles = {
	group: {
		backgroundColor: "rgb(51,103,145)", 
		color: "grey",
	}
}

const GroupBar = React.createClass({
  render() {
  	return (
	  <Col sm={1} md={1} style={styles.group}>
	      <Button bsStyle="primary" bsSize="large" block>G1</Button><br/>
	      <Button bsSize="large" block>G2</Button>
	      <Button bsSize="large" block>+</Button>
	  </Col>
	)
  }
});

export default GroupBar