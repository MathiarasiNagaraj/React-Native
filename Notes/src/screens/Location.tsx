import React, {useState} from 'react';
import {
  Dimensions,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
export const Location = () => {
    const [location, setLocation] = useState(false);
    const [latitude, setLatitude] = useState(37.78825);
    const [longitude, setLongitude] = useState(80.2455033);
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
       
                setLocation(position);
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude)
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };
    console.log(latitude,longitude)
  return (
    <ScrollView>
      <View style={styles.container}>
        <MapView
          // remove if not using Google Maps
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          rotateEnabled
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.095,
            longitudeDelta: 0.0921,
          }}></MapView>
      </View>

      <TouchableOpacity onPress={getLocation} style={styles.btn}>
        <Text style={styles.txt}>Click Me</Text>
          </TouchableOpacity>
          <View style={styles.innerWrapper}>
      <Text style={styles.text}>Latitude: {location ? location.coords.latitude : null}</Text>
              <Text style={styles.text}>Longitude: {location ? location.coords.longitude : null}</Text>
              </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 500,
    },
    text: {
        fontSize: 23,
        color:'black'
    },
    innerWrapper: {
        padding:30,
        backgroundColor: 'white',
        height: 200,
        justifyContent: 'space-evenly',
        alignItems:'flex-start'
        
    },
  btn: {
position:'relative',
    backgroundColor: 'lightblue',
    height: 50,
 width: 200,
      borderRadius: 30,
    textAlign:'center'
  },
    txt: {
        position: 'absolute',
        top: '13%',
        left:'30%',
        color: 'blue',
        fontSize: 20,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
  },
});
