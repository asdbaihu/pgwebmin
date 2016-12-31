import Radium from 'radium'
import React from 'react'
import { Row, Col, PanelGroup, Panel } from 'react-bootstrap'
import DatabaseList from './ServerBar/DatabaseList'
import RoleList from './ServerBar/RoleList'
import TablespaceList from './ServerBar/TablespaceList'

var FontAwesome = require('react-fontawesome');

var styles = {
	server: {
		backgroundColor: "rgb(0, 139, 185)", 
		color: "white",

		':hover': {
			backgroundColor: "rgb(51,103,145)"
		}
	},
	serverName: {
		fontSize: "18px"
	},
    serverItems: {
    	color: "black"
    }
}

const ServerBar = React.createClass({
  getInitialState() {
    return {
      activeKey: '1'
    };
  },

  handleSelect(activeKey) {
    this.setState({ activeKey });
  },

  //TODO - figure out this radium stuff
  render() {
  	return (
	  <Col sm={2} md={3} style={styles.server}>
	      <Row>
	        <Col md={10}>
	            <div style={styles.serverName}>Server <FontAwesome name='chevron-down'/></div>
	            <br/>
	            <FontAwesome name='circle'/> Username
	        </Col>
	        <Col md={2}>
	          <Row><FontAwesome name='refresh'/></Row>
	        </Col>
	      </Row>
	      <Row>
	        <Col md={12} style={styles.serverItems}>
	          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
		        <Panel header="Database" eventKey="1"><DatabaseList /></Panel>
		        <Panel header="Login / Group Roles" eventKey="2"><RoleList /></Panel>
		        <Panel header="Tablespaces" eventKey="3"><TablespaceList /></Panel>
		      </PanelGroup>
	        </Col>
	      </Row>
	  </Col>
	)
  }
});

export default Radium(ServerBar)