import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
export default class Details extends Component {
  static navigationOptions = {
    title: 'Inserir Itens',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      text1: '',
      text2: '',
      itens: [
        //{key:"",desc:"", done:false},
        //{key:"1",desc:"Item 2", done:false},
      ],
    };
    this.inserirItem = this.inserirItem.bind(this);
  }

  renderItem(obj) {
    <Text style={styles.cell}>{obj.item.desc}</Text>;
  }

  inserirItem() {
    let newItem = {
      //key: this.state.itens.length.toString(),
      desc: 'Produto:' + this.state.text,

      done: false,
    };

    let newItem1 = {
      //key1: this.state.itens.length.toString(),

      desc: 'Quantidade:' + this.state.text1,

      done: false,
    };

    let newItem2 = {
      //key2: this.state.itens.length.toString(),
      desc: 'Preço:' + this.state.text2,
      done: false,
    };

    let itens = this.state.itens;
    itens.push(newItem, newItem1, newItem2);
    this.setState({itens});
    let text = '';
    let text1 = '';
    let text2 = '';
    this.setState({text});
    this.setState({text1});
    this.setState({text2});
    //alert(JSON.stringify(this.state))
    {
    }
    this.props.navigation.navigate('Home', {itens: this.state.itens});
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <FlatList
            style={styles.lista}
            data={this.state.itens}
            renderItem={this.renderItem}
            extraData={this.state}
          />
          <View style={styles.inputView}>
            <Text>Produto:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                this.setState({text});
              }}
              value={this.state.text}
            />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.inputView}>
            <Text>Quantidade:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text1 => {
                this.setState({text1});
              }}
              value={this.state.text1}
            />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.inputView}>
            <Text>Preço:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text2 => {
                this.setState({text2});
              }}
              value={this.state.text2}
            />
          </View>
        </View>
        <Button onPress={this.inserirItem} title="Inserir" />
      </>
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
