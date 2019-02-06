import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { updateText } from '../../functions/rewrite'
import ColorPicker from './ColorPicker'

const Forms = (props) => {
  const { handleChange, upState, name } = props;
  let title = name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })

  return (
    <div>
      <Form style={{ padding: 5 }}>
        <Form.Field>
          <label>{title}</label>
          <Form.Input
            placeholder='change this text'
            name={name}
            value={upState[name]}
            onChange={handleChange} />
        </Form.Field>
      </Form>
    </div>
  )
}

const save = (details) => {

}

export default Forms
