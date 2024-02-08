import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image, PermissionsAndroid} from 'react-native';
import {Camera, useCameraDevice, useCameraFormat} from 'react-native-vision-camera';
export const Photo = () => {
    const camera = useRef(null);
    const [position, setPosition] = useState('back');
    const devices = useCameraDevice(position);
    const device = devices;
    const format = useCameraFormat(device, [
      { photoHdr: true },
      { videoHdr: true },
    ])
    const [showCamera, setShowCamera] = useState(false);
    const [imageSource, setImageSource] = useState('');
  
    useEffect(() => {
      async function getPermission() {
        const newCameraPermission = await Camera.requestCameraPermission();
        console.log(newCameraPermission);
      }
      getPermission();
    }, []);
    const changeCamera = () => {
      if (position === 'back') setPosition('front');
      else setPosition('back');
    };
    const capturePhoto = async () => {
        if (camera.current !== null) {
          const photo = await camera.current.takePhoto({});
          setImageSource(photo.path);
          setShowCamera(false);
          console.log(photo.path);
        }
      };
    
      if (device == null) {
        return <Text>Camera not available</Text>;
      }
    
  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            format={format}
            isActive={showCamera}
            photo={true}
            video={true}
            videoHdr={format.supportsVideoHdr}
            photoHdr={format.supportsPhotoHdr}
            enableZoomGesture={true}
  audio={true}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => capturePhoto()}
            />

            <TouchableOpacity
              style={styles.changeBtn}
              onPress={() => changeCamera()}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                switch
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          {imageSource !== '' ? (
            <Image
              style={styles.image}
              source={{
                uri: `file://'${imageSource}`,
              }}
            />
          ) : null}

          {/* <View style={styles.backButton}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#fff',
                width: 100,
              }}
              onPress={() => setShowCamera(true)}>
              <Text style={{color: 'white', fontWeight: '500'}}>Back</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: 'green',
                }}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: 'white', fontWeight: '500'}}>Retake</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#77c3ec',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: 'white', fontWeight: '500'}}>
                  Use Photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    changeBtn: {
      position: 'absolute',
      right: 0,
      top: 15,
      height: 60,
      width: 60,
      borderRadius: 40,
      textAlign: 'center',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'yellow',
  
      alignSelf: 'center',
    },
  
    button: {
      backgroundColor: 'gray',
    },
    backButton: {
      backgroundColor: 'rgba(0,0,0,0.0)',
      position: 'absolute',
      justifyContent: 'center',
      width: '100%',
      top: 0,
      padding: 20,
    },
    buttonContainer: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      bottom: 0,
      padding: 20,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    camButton: {
      height: 60,
      width: 60,
      borderRadius: 40,
  
      backgroundColor: 'red',
  
      alignSelf: 'center',
      borderWidth: 4,
      borderColor: 'white',
    },
    image: {
      width: '100%',
      height: '100%',
      aspectRatio: 9 / 16,
    },
  });
  