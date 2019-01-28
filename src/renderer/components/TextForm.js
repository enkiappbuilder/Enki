import React from 'react'
import {Form, StatisticLabel} from 'semantic-ui-react'

const Forms = (props) => {
  const {  handleChange, upState, name } = props;

  let title = name.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
  let state = {...upState}

  return(
    <Form>
      <Form.Field>
        <label>{title} </label>
        <Form.Input 
        placeholder='change this text'
        name={name}
        value={state.appName}
        onChange={handleChange}/>
      </Form.Field>
    </Form>
  )
}

export default Forms