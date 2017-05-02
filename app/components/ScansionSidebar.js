import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import { toggle } from '../utility/component-elements';
import { buildSyllables } from '../utility/parsers';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      writingGuide: false,
      scansionGuide: false
    }

    this.transliterated = this.props.currentTransliterated;
    this.setSyllables = this.props.setSyllables;
    this.showSyllables = this.props.showSyllables;
    this.showScansion = this.props.showScansion;
    this.setLengths = this.props.setLengths;
    this.setText = this.props.setText;
    this.sample = this.props.sample;

    this.toggleWritingGuide = this.toggleWritingGuide.bind(this);
    this.toggleScansionGuide = this.toggleScansionGuide.bind(this);
    this.toggleSyllables = this.toggleSyllables.bind(this);
    this.toggleLengths = this.toggleLengths.bind(this);
    this.setSampleText = this.setSampleText.bind(this);
  }

  toggleWritingGuide() {
    this.setState({writingGuide: !this.state.writingGuide})
  }

  toggleScansionGuide() {
    this.setState({scansionGuide: !this.state.scansionGuide})
  }

  toggleSyllables() {
    this.showSyllables();
    this.setSyllables();
  }

  toggleLengths() {
    this.showScansion();
    this.setLengths();
  }

  setSampleText() {
    console.log(this.sample);
    this.setText(this.sample);
  }

  render() {

    const button = (label, toggleFunction) => {
      return (
        <li>
          <span><FlatButton
            fullWidth={true}
            onTouchTap={toggleFunction}
            label={label}
            labelStyle={{ fontSize: '20px', height: '35px'}}
            /></span>
        </li>
      )
    }

    return (
      <div>
        <div>
          <ul>
            {button('Sample', this.setSampleText)}
            {button('Writing Guide', this.toggleWritingGuide)}
            {button('Scansion Guide', this.toggleScansionGuide)}
            {button('Show Syllables', this.toggleSyllables)}
            {button('Show Lengths', this.toggleLengths)}
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
          <Drawer width='40%'position='bottom' open={this.state.scansionGuide}>
            {button('Close', this.toggleScansionGuide)}
            <p>different sample text</p>
          </Drawer>
        </div>
      </div>
    )
  }

}