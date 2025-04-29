import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Image, } from 'react-native';
import Post from './Post'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          usuario: 'KaléoYT45',
          imagem: 'https://yt3.googleusercontent.com/VAav4NiyGMoii1UkrLDnmANKIyk8atp_vNnd7UaL5gehjDF0kAQHOXhVbyvueKh8bDyl4rKwMo4=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
          textoPost: 'Mais um Caçadores de Lendas, vão la ver',
          horario: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          quanComentarios: 10,
          likeada: false,
          likers: 20,
        },
        {
          id: '2',
          usuario: 'Hatsuki_BR',
          imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPua0eU1k3iZAg3ONUc58-q38knq-Vze-kg&s',
          textoPost: 'Minha Foto aí',
          horario: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          quanComentarios: 55,
          likeada: false,
          likers: 45,
        },

        {
        id: '3',
          usuario: 'MuriloFelipe',
          imagem: 'https://terracapixaba.com/wp-content/uploads/2024/01/praia-do-pau-grande-piuma-1.webp',
          textoPost: 'Melhor lugar pra passar o dia com a família e os amigos',
          horario: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          quanComentarios: 11,
          likeada: false,
          likers: 20,
        },
        {
          id: '4',
          usuario: 'Andreas_xd123',
          imagem: 'https://extra.globo.com/incoming/6346113-776-986/w976h550-PROP/mobfog2.jpg',
          textoPost: 'Lançando hoje #mobfog',
          horario: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          quanComentarios: 8,
          likeada: false,
          likers: 55,
        },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'}}></Image>
        </View>
        <FlatList 
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Post data={item}></Post>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },

  logo:{
    height: 50,
    width: 50,
    alignSelf: 'center',
  }
});

export default App;