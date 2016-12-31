import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const DatabaseList = React.createClass({

  render() {
  	return (
      <ListGroup>
	    <ListGroupItem>Item 1</ListGroupItem>
	    <ListGroupItem>Item 2</ListGroupItem>
	    <ListGroupItem>&hellip;</ListGroupItem>
	  </ListGroup>
	)
  }
});

export default DatabaseList