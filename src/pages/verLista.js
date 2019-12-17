import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

export default class verLista extends Component {
  static navigationOptions = {
    title: 'Ver Lista',
  };

  renderItem(obj) {
    return <Text style={styles.cell}>{obj.item.desc}</Text>;
  }
  render() {
    const {navigation} = this.props;
    const itens = navigation.getParam('itens');
    return (
      <View>
        <FlatList
          style={styles.lista}
          data={itens}
          renderItem={this.renderItem}
          extraData={this.state}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 20,
  },

  lista: {
    marginTop: 1,
  },
  cell: {
    paddingBottom: 2,
    paddingTop: 2,
    backgroundColor: '#E4EBEE',
    fontSize: 18,
    marginBottom: 2,
  },

  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 3,
    margin: 1,
    padding: 2,
    flex: 1,
  },
});
