import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import { button, drawer } from '../utility/component-elements';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      writingGuide: false,
      scansionGuide: false
    }
    this.toggleWritingGuide = this.toggleWritingGuide.bind(this);
    this.toggleScansionGuide = this.toggleScansionGuide.bind(this);
  }

  toggleWritingGuide() {
    this.setState({writingGuide: !this.state.writingGuide})
  }

  toggleScansionGuide() {
    this.setState({scansionGuide: !this.state.scansionGuide})
  }

  render() {

    return (
      <div>
        <div>
          <ul>
            {button('Save Session')}
            {button('Build Syllables')}
            {button('Scan Lines')}
            {button('Writing Guide', this.toggleWritingGuide)}
            {button('Scansion Guide', this.toggleScansionGuide)}
          </ul>
        </div>
        <div>
          <Drawer width='40%' open={this.state.writingGuide}>
            {button('Close', this.toggleWritingGuide)}
            <p>sample text</p>
            }
          </Drawer>
        </div>
        <div>
          <Drawer width='40%'open={this.state.scansionGuide}>
            {button('Close', this.toggleScansionGuide)}
            <p>different sample text</p>
          </Drawer>
        </div>
      </div>
    )
  }

}