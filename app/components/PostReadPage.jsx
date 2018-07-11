// - Impoer react components
import React, {Component} from 'react'
import {Button, Header, Icon, Modal, Card, Menu, Image, Label, Divider  } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


// - Import actions
import * as postReadingActions from 'postReadingActions'
import * as postActions from 'postActions'


/* ------------------------------ */

// - Create PostWritePage component class
export class PostReadPage extends Component {

  // Constructor
  constructor(props){
    super(props);

    // Binding function to `this`
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)


  }


  // Show component
  open = () => this.props.dispatch(postReadingActions.openPostReadPage(true))

  close = () => {

    this.props.closeReading()
  }
  // When component will receive next props
  componentWillReceiveProps= (nextProps) => {

  }

  // Render DOM
  render() {

   
    return (
        <Modal basic size='small' dimmer={'inverted'}
           open={(this.props.postReadStatus)} onClose={this.close}>

            <Card centered fluid>
               <Card.Content>

                <p> This is a short story
                </p>
               </Card.Content>
           </Card>
      </Modal>
    );
  }
}

// - Map state to props
const mapStateToProps = (state) => {
    return {
      postReadStatus: state.postReading.readStatus,
    }
}

// - Map dispatch to the props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      closeReading: () => {
        dispatch(postReadingActions.openPostReadPage(false))
      }
    }
  }

// - Connect component to redux
export default withRouter(connect(
  mapStateToProps, mapDispatchToProps)(PostReadPage))
