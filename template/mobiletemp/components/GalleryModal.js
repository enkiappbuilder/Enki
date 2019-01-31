import React, { Component } from 'react';
import { Modal, Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { ActivityIndicator } from 'react-native-elements'
import { Overlay } from 'react-native-maps';

class ModalExample extends Component {
  constructor() {
    super()
    this.state = {
      imageURL: ''
    }
  }

  componentDidMount() {
    this.setState({
      imageURL: this.props.image
    })
  }
  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>
              <View>
                <Image
                  source={{ uri: '../assets/images/sampleImages/sample_art.jpeg' }}
                />
              </View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ModalExample

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100
  }
})
