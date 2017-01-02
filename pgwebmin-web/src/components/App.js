import React from 'react'
import ServerBar from './ServerBar'
import WorkPane from './WorkPane'
import GroupList from '../containers/GroupList'
import { Grid, Row } from 'react-bootstrap'

const App = () => (
  <Grid fluid={true}>
    <Row>
      <GroupList />
      <ServerBar />
      <WorkPane />
    </Row>
  </Grid>
)

export default App