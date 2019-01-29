import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {updateText} from '../../functions/rewrite'

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
      <Button onClick={save(state)}> save to mobile App </Button>
    </Form>
  )
}

const save = (details) => {

}

export default Forms