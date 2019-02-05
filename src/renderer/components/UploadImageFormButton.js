import React from 'react'
import { Form, Button } from 'semantic-ui-react'
// import { styles } from 'ansi-colors';

const UploadImage = (props) => {
  const { handleChange, upState, name } = props;
  let title = name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })

  return (
    <Form style = {styles.imageUpload}>
      <Form.Field >
        <span>
          <label style={{ margin: 10, fontWeight: 'bold' }}>{title}   </label>
          <Button
          color = 'blue'
            onClick={() => props.handleUpload(props.name)}
          >
            Upload image
        </Button>
        </span>
      </Form.Field>

    </Form >
  )
}

export default UploadImage

const styles = {
  imageUpload: {
    display: 'flex',
  }
}
