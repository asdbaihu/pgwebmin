import React from 'react'
import GroupBar from './GroupBar'
import ServerBar from './ServerBar'
import WorkPane from './WorkPane'
// import VisibleTodoList from '../containers/VisibleTodoList'
import { Grid, Row } from 'react-bootstrap'

const App = () => (
  <Grid fluid={true}>
    <Row>
      <GroupBar />
      <ServerBar />
      <WorkPane />
    </Row>
  </Grid>
)

export default App