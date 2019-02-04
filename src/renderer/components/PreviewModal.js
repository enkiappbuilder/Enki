import React from 'react'
import { Button, Header, Modal, Image } from 'semantic-ui-react'

const ModalPreview = (props) => (
  <Modal style={{ width: "50%" }} trigger={<Button>Preview App</Button>} size="fullscreen" basic closeIcon>
    <Header textAlign='center' color='green' content='App Preview' />
    <Modal.Content image style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }} >
        {props.images.map(image => {
          return (
            <div>
              <Image src={image} />
            </div>
          )
        })}
      </div>
    </Modal.Content>
  </Modal>
)

export default ModalPreview
