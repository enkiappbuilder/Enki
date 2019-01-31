import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Header,
  FormInput,
  FormLabel,
  FormValidationMessage,
  SocialIcon
} from 'react-native-elements'

import Hamburger from '../components/Hamburger'

export default class Contact extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (

      <View style={styles.container}>
        <Header
          leftComponent={<Hamburger navigationProps={this.props.navigation} />}
          centerComponent={{ text: 'Joe Hu', style: { color: '#132029' } }}
          rightComponent={{ icon: 'home', color: '#132029', onPress: () => this.props.navigation.navigate('Home') }}
          backgroundColor='rgba(250,249,249,0.8)'
        />

        <View>
          <SocialIcon
            title='Some Twitter Message'
            button
            type='twitter'
          />

        </View>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.textComp}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 35 }}>
              Contact Me!
            </Text>
          </View>
          <View style={styles.form}>
            <FormLabel>Name</FormLabel>
            <View style={{ backgroundColor: 'white' }}>
              <FormInput style={{ backgroundColor: 'white' }} />
            </View>
            <FormValidationMessage>{'Please enter your name!'}</FormValidationMessage>
            <FormLabel>Email</FormLabel>
            <View style={{ backgroundColor: 'white' }}>
              <FormInput style={{ backgroundColor: 'white' }} />
            </View>
            <FormValidationMessage>{'Please enter your email!'}</FormValidationMessage>
            <FormLabel>What's up?</FormLabel>
            <View style={{ backgroundColor: 'white' }}>
              <FormInput style={{ backgroundColor: 'white' }} />
            </View>
            <FormValidationMessage>{'What do you want to tell us?'}</FormValidationMessage>
          </View>

        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#fff'
  },
  textComp: {
    backgroundColor: '#000000',
    alignContent: 'center'
  },
  form: {
    margin: 20
  }
});
