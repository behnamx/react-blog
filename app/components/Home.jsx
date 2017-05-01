// - Import react components
import React, {Component} from 'react'
import {Grid, Image, Segment, Divider} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'

// - Import app components
import Signup from 'Signup'
import Navigation from 'Navigation'
import Blog from 'Blog'
import SlideShow from 'SlideShow'

// - Create Home component class
export default class Home extends Component {

// Render DOM
  render() {
    return (
      <div id="home">
        <Segment>
          <SlideShow/>
          <Divider horizontal>
            Green's Diary
          </Divider>
          <Navigation/>
        </Segment>
        <Segment width={7}>
          <Switch>
            <Route exact={true} patch="/" component={Blog}/>
          </Switch>

        </Segment>
      </div>

    )
  }
}
