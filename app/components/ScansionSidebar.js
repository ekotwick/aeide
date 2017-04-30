import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import { button, drawer } from '../utility/component-elements';
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
    this.toggleScanner = this.props.toggleScanner;

    this.toggleWritingGuide = this.toggleWritingGuide.bind(this);
    this.toggleScansionGuide = this.toggleScansionGuide.bind(this);
    this.toggleSyllables = this.toggleSyllables.bind(this);

    this.showProps = this.showProps.bind(this);
  }

  toggleWritingGuide() {
    this.setState({writingGuide: !this.state.writingGuide})
  }

  toggleScansionGuide() {
    this.setState({scansionGuide: !this.state.scansionGuide})
  }

  toggleSyllables() {
    this.toggleScanner();
    // const builtSyllables = buildSyllables(this.transliterated);
    // this.setSyllables(builtSyllables)
    this.setSyllables();
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
            {button('Build Syllables', this.toggleSyllables)}
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