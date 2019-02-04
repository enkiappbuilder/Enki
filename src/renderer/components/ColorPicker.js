import React from 'react'
import { Form, Accordion, Icon } from 'semantic-ui-react'
import { CompactPicker } from 'react-color'

class ColorPicker extends React.Component {
  constructor() {
    super()
    this.state = {
      activeIndex: ''
    }
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChangeComplete(color, event) {
    this.props.handleColorChange(this.props.name, color.hex)
  }

  handleClick(e, titleProps) {
    const { index } = titleProps
    const newIndex = this.state.activeIndex === index ? '' : index;

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { name } = this.props;
    const { activeIndex } = this.state

    let title = name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })
    return (
      // <Form style={{ display: 'flex' }}>
      //   <Form.Field>
      <Accordion>
        <Accordion.Title active={activeIndex === name} index={name} onClick={this.handleClick}>
          {title}
          <Icon name='dropdown' />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === name}>
          <CompactPicker onChangeComplete={this.handleChangeComplete} />
        </Accordion.Content>
      </Accordion>


      // </Form.Field>

      // </Form >
    )
  }

}

export default ColorPicker
