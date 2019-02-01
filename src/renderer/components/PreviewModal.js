import React from 'react'
import { Button, Header, Modal, Image } from 'semantic-ui-react'

const ModalPreview = (props) => (
  <Modal trigger={<Button>Preview App</Button>} basic size='small'>
    <Header textAlign = 'center' color='green' content='App Preview' />
    <Modal.Content image style={{display: 'flex', justifyContent: 'center'}}>
    <div style = {{display: 'flex', justifyContent: 'center'}}>
     <Image verticalAlign='middle' src={props.imagesource}/>
    </div>
    </Modal.Content>
  </Modal>
)

export default ModalPreview
