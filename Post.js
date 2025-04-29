import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable, Animated} from 'react-native';


class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.carregaIcone = this.carregaIcone.bind(this);
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.lastTap = null;
        this.handleDoubleTap = this.handleDoubleTap.bind(this);
        this.scaleAnim = new Animated.Value(0);
        this.opacityAnim = new Animated.Value(0);


    }

    carregaIcone(likeada){
        return likeada ? require('./assets/likeada.png') :
            require('./assets/like.png')
    }

    like(){
        let feed = this.state.feed;

        if (feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada:false,
                    likers:feed.likers - 1,
                }
            });
        }else{
            this.setState({
                feed:{
                    ...feed,
                    likeada:true,
                    likers: feed.likers + 1,
                }
            });
        }
    }

    mostraLikes(){
        let feed = this.state.feed;

        if (feed.likers <= 0){
            return;
        }

        return(
            <Text style={styles.like}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        );
    }

    handleDoubleTap() {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;
      
        if (this.lastTap && (now - this.lastTap) < DOUBLE_TAP_DELAY) {
          this.like(); 
          this.startLikeAnimation();
        }
        this.lastTap = now;
      }

      startLikeAnimation() {
        this.scaleAnim.setValue(0);
        this.opacityAnim.setValue(1);
      
        Animated.parallel([
          Animated.timing(this.scaleAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(this.opacityAnim, {
            toValue: 0,
            delay: 500,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      }
      
      
      
    render() {

    return (
      <View style={styles.areaPost}>
        <Text style={styles.usuario}>{this.props.data.usuario}</Text>
        <Pressable onPress={this.handleDoubleTap}>
          <View style={styles.imageContainer}>
            <Image style={styles.imagem} source={{ uri: this.props.data.imagem }} />
          <Animated.Image
          source={require('./assets/likeada.png')}
           style={[
          styles.animatedHeart,
        {
          transform: [{ scale: this.scaleAnim }],
          opacity: this.opacityAnim,
        }
      ]}
    />
       </View>
      </Pressable>


        <Text style={styles.textoPost}>{this.props.data.textoPost}</Text>
        <View style={styles.areaBtn}>
            <TouchableOpacity onPress={this.like}>
                <Image source={this.carregaIcone(this.state.feed.likeada)} style={styles.iconeLike}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSend}>
                <Image source={require('./assets/send.png')} style={styles.iconeLike}></Image>
            </TouchableOpacity>

        </View>
        {this.mostraLikes(this.state.feed.likers)}
        <View style={styles.infoRodape}>
          <Text style={styles.horario}>{this.props.data.horario}</Text>
          <Text style={styles.quanComentarios}>{this.props.data.quanComentarios} comentários</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaPost: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  usuario: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  imagem: {
    height: 300,
    width: '100%',
    borderRadius: 10,
  },
  textoPost: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 10,
  },
  infoRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  horario: {
    color: '#AAA',
    fontSize: 12,
  },
  quanComentarios: {
    color: '#AAA',
    fontSize: 12,
  },
  iconeLike: {
    height: 33,
    width: 33,
    flexDirection: 'row',
  },
  btnSend: {
    paddingLeft: 5,
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  like: {
    color: '#FFF',
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

animatedHeart: {
  position: 'absolute',
  width: 100,
  height: 100,
  tintColor: 'white',
},

});

export default Post;