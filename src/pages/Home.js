import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  StatusBar,
} from 'react-native';

export default class Home extends Component {
  render() {
    const {navigation} = this.props;
    const itens = navigation.getParam('itens');
    return (
      <>
        <StatusBar barStyle="ligh-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <Text style={styles.titulo}>Lista de compras</Text>
            </View>
            <View style={styles.botaoInserir}>
              <Button
                color="#000000"
                title="Inserir Item"
                onPress={() => {
                  this.props.navigation.navigate('Details');
                }}
              />
            </View>

            <View style={styles.botaoLista}>
              <Button
                color="#000000"
                title="Ver Lista"
                onPress={() => {
                  this.props.navigation.navigate('verLista', {
                    itens,
                  });
                }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {},
  titulo: {
    fontSize: 45,
    textAlign: 'center',
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  botaoInserir: {
    width: 200,
    marginTop: 290,
    marginLeft: 90,
  },
  botaoLista: {
    width: 200,
    marginTop: 29,
    marginLeft: 90,
  },
});
