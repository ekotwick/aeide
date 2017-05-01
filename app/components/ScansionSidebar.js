import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import { button, toggle } from '../utility/component-elements';
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
    this.showLengths = this.props.showLengths;
    this.setLengths = this.props.setLengths;

    this.toggleWritingGuide = this.toggleWritingGuide.bind(this);
    this.toggleScansionGuide = this.toggleScansionGuide.bind(this);
    this.toggleSyllables = this.toggleSyllables.bind(this);
    this.toggleLengths = this.toggleLengths.bind(this);

    this.showProps = this.showProps.bind(this);
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
    this.showLengths();
    this.setLengths();
  }

  showProps() {
    console.log(this.props)
    console.log(this.props.syllables)
  }

  render() {

    return (
      <div>
        <div>
          <ul>
            {button('Save Session', this.showProps)}
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