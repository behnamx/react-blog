// - Import react components
import React, {Component} from 'react'
import {Icon, Label, Segment, Header} from 'semantic-ui-react'

// - Create Tags component class
export default class Tags extends Component {

  // Render DOM
  render() {
    return (
      <div>
        <Header as='h2' attached='top'>
          Tags
        </Header>
        <Segment attached>
          <Label.Group color='teal'>
            <Label as='a'>
              Romantic
              <Label.Detail>22</Label.Detail>
            </Label>
            <Label as='a'>Historic
              <Label.Detail>3</Label.Detail>
            </Label>
            <Label as='a'>WW2
              <Label.Detail>10</Label.Detail>
            </Label>
            <Label as='a'>California
              <Label.Detail>19</Label.Detail>
            </Label>
          </Label.Group>
        </Segment>
      </div>
    )
  }
}
