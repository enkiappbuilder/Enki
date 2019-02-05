import React from 'react'
import { Button, Header, Modal, Image } from 'semantic-ui-react'

class ModalPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.close = this.close.bind(this)
  }

  closeModal(closeOnEscape) {
    this.setState({ closeOnEscape, open: true })
  }

  close() {
    this.setState({ open: false })
  }
  render() {
    const { open, closeOnEscape } = this.state
    return (

      <Modal
        open={open}
        style={{ width: "50%" }}
        trigger={<Button onClick={() => this.closeModal(false)}>Preview App</Button>} size="fullscreen"
        basic
        closeOnEscape={closeOnEscape}
        onClose={this.close}>
        <Header textAlign='center' color='green' content='App Preview' />
        <Modal.Content image style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            {this.props.images.map(image => {
              return (
                <div>
                  <Image src={image} />
                </div>
              )
            })}
          </div>
          <Modal.Actions>

            <Button
              color='red'
              onClick={this.close}
              content='Back to Templates'
            ></Button>
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    )
  }
}


export default ModalPreview
