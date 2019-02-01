import React from 'react'
import { Form, Text } from 'semantic-ui-react'

const ColorPicker = (props) => {
  const { handleChange, upState, name } = props;
  let title = name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })

  return (
    <Form style={{ display: 'flex' }}>
      <Form.Field>
        <label>{title}: placeholder for color picker</label>
      </Form.Field>

    </Form >
  )
}

export default ColorPicker
