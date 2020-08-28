import React, {useRef, useState, useEffect} from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet,View,Text,Image, TouchableNativeFeedback} from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import ImageZoom from 'react-native-image-pan-zoom';

const { width: screenWidth } = Dimensions.get('window')
const windowHeight = Dimensions.get('window').height;
const ENTRIES1 = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1o9ppSBr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
  ];

export default function MyCarousel(){
    const [showModalImage, setShowModalImage] = useState(false)
    const [zoomImg, setZoomimg] = useState("https://ipet.vn/wp-content/uploads/2019/06/husky.png")

    const _renderItem = ({item, index}, parallaxProps)=>{
      return (
          <TouchableNativeFeedback onPress={ async ()=>{
            await setZoomimg(item.illustration)
            setShowModalImage(!showModalImage)
          }}>
              <View style={styles.item}>
                  <ParallaxImage
                      source={{ uri: item.illustration }}
                      containerStyle={styles.imageContainer}
                      style={styles.image}
                      parallaxFactor={0}
                      {...parallaxProps}
                  />
                  {/* <Text style={styles.title} numberOfLines={2}>
                      { item.title }
                  </Text> */}
              </View>
          </TouchableNativeFeedback>
      );
  }
    return (
        <View>
          <Carousel
              sliderWidth={screenWidth}
              sliderHeight={screenWidth}
              itemWidth={screenWidth - 60}
              data={ENTRIES1}
              renderItem={_renderItem}
              hasParallaxImages={true}
              autoplay={true}
              layout="stack"
          />

          <Modal isVisible={showModalImage} animationIn="fadeInDown" animationOut="fadeOutUp" >
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                        cropHeight={Dimensions.get('window').width}
                        imageWidth={Dimensions.get('window').width}
                        imageHeight={400}>
                  <Image style={{width:"100%", height:"100%"}}
                        source={{uri:zoomImg}}/>
                  
              </ImageZoom>
              <TouchableNativeFeedback onPress={()=>{
                setShowModalImage(!showModalImage)
              }}>
                <View style={{
                  position:"absolute", 
                  bottom:0,
                  backgroundColor:"white", 
                  width:"100%",
                  justifyContent:"center", 
                  alignItems:"center",
                  padding:20}}>
                  <Text style={{color:"blue", fontSize:15}}>Đóng</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            
          </Modal>

        </View>

    );
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 300,
    height: screenWidth - 300,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})