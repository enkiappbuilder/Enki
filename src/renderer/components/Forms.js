import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { updateText } from '../../functions/rewrite'

const Forms = (props) => {
  const { handleChange, upState, name } = props;
  console.log('upState:', upState);
  let title = name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })



  return (
    <Form>
      <Form.Field>
        <label>{title} </label>
        <Form.Input
          placeholder='change this text'
          name={name}
          value={upState[name]}
          onChange={handleChange} />
      </Form.Field>

    </Form>
  )
}

const save = (details) => {

}

export default Forms
