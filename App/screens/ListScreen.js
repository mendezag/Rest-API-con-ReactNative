import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { ListStyles } from '@styles/styles'
import { color } from 'react-native-reanimated';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon/',

    }
  }
  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {

        this.setState({
          pokemon: res.results,
          url: res.next,
          loading: false,
        })
      })
  }
  render() {
    return (
      <View style={ListStyles.container}>
        <StatusBar backgroundColor='#EA2027' translucent={true} />
        <ImageBackground
          source={require('@recursos/image/pokedex.png')}
          style={{ width: '105%', height: '102.5%' }}>
          <View >
          </View>
          <View style={ListStyles.flatStyle}>
            <View> 
             <Text  style = {ListStyles.Title}>Lista de pokemones</Text>
            </View>
            <FlatList
              data={this.state.pokemon}
              renderItem={
                ({ item }) =>
                  <TouchableOpacity style={ListStyles.buttonSocialIcon}>
                    <View>
                      <Text style={ListStyles.btntxt}> {item.name} </Text>
                    </View>

                  </TouchableOpacity>
              }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ImageBackground>
      </View>
    )
  }
}