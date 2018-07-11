// - Import react components
import React, {Component} from 'react'
import {Button, Image, List, Segment, Popup, Menu, Input, Label} from 'semantic-ui-react'
import Faker from 'faker'

// - Import app components
import ManageUsersButtons from 'ManageUsersButtons'


// - Create ManageUsers component class
export default class ManageUsers extends Component {

  // Render DOM
  render() {
    return (
      <Segment.Group>
        <Segment>
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <ManageUsersButtons/>
          </List.Content>
          <Image avatar src={Faker.image.avatar()}/>
          <List.Content>
            Neil Gaiman
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
        <ManageUsersButtons/>
          </List.Content>
          <Image avatar src={Faker.image.avatar()}/>
          <List.Content>
            Ernest Hemingway
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <ManageUsersButtons/>
          </List.Content>
          <Image avatar src={Faker.image.avatar()}/>
          <List.Content>
            Dr. Suess
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <ManageUsersButtons/>
          </List.Content>
          <Image avatar src={Faker.image.avatar()}/>
          <List.Content>
            Edgar Allan Poe
          </List.Content>
        </List.Item>
      </List>
      </Segment>


      </Segment.Group>
    )
  }
}
