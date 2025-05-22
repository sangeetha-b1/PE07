// AddCountry.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

class AddCountry extends React.Component {
  state = { country: '', currency: '' };

  onChangeText = (key, value) => this.setState({ [key]: value });

  submit = () => {
    const { country, currency } = this.state;
    if (!country || !currency) {
      alert('Please complete the form');
      return;
    }
    const newCountry = { id: uuid.v4(), country, currency };
    this.props.addCountry(newCountry);
    this.setState({ country: '', currency: '' }, () => {
      this.props.navigation.navigate('Countries');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add Country</Text>
        <TextInput placeholder="Country Name" value={this.state.country} onChangeText={val => this.onChangeText('country', val)} style={styles.input} />
        <TextInput placeholder="Currency" value={this.state.currency} onChangeText={val => this.onChangeText('currency', val)} style={styles.input} />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}><Text style={styles.buttonText}>Add Country</Text></View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: colors.primary },
  heading: { fontSize: 32, color: 'white', textAlign: 'center', marginBottom: 20 },
  input: { margin: 10, backgroundColor: 'white', paddingHorizontal: 8, height: 50 },
  button: { height: 50, backgroundColor: '#666', justifyContent: 'center', alignItems: 'center', margin: 10 },
  buttonText: { color: 'white', fontSize: 18 },
});
export default AddCountry;
