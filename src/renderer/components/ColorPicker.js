import React from 'react'
import { Form, Accordion, Icon, Button } from 'semantic-ui-react'
import { CompactPicker } from 'react-color'

class ColorPicker extends React.Component {
  constructor() {
    super()
    this.state = {
      activeIndex: '',
      color: ''
    }
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { upState, name } = this.props
    this.setState({ color: upState[name] })
  }

  handleChangeComplete(color, event) {
    this.setState({ color: color.hex })
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
      <Form style={{ display: 'flex' }}>
        <Form.Field>
          <Accordion>
            <Accordion.Title active={activeIndex === name} index={name} onClick={this.handleClick}>
              {title}
              <Icon bordered name="square full" style={{ color: this.state.color, margin: 5 }} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === name}>
              <CompactPicker
                color={this.state.color}
                onChangeComplete={this.handleChangeComplete} />
            </Accordion.Content>
          </Accordion>
        </Form.Field>

      </Form >
    )
  }

}

export default ColorPicker
