import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Initialze the font library
Icon.loadFont();

const App = () => {
  // set state for dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // get star container view
  const getstarContainerView = () => {
    let startContainerView = [];
    for (let i = 0; i < 4; i++) {
      startContainerView.push(
        <View key={Math.random()} style={styles.starContainer}>
          {getstarrView()}
        </View>);
    }
    return startContainerView;
  }

  // get star view
  const getstarrView = () => {
    const startView = [];
    for (let i = 0; i < 4; i++) {
      startView.push(<Icon key={Math.random()} name="star" size={30} color="#fff" />);
    }
    return startView;
  }

  return (
    <>
      {/* chnage the status bar style according to the dark mode */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
        {
          // check the dark mode and according to that show the view
          isDarkMode ?
            <>
              {/* Load the star container view */}
              {getstarContainerView()}
              <View style={styles.btnContainer}>
                <TouchableOpacity style={[styles.btn, styles.light]} onPress={() => { setIsDarkMode(false) }}><Text style={[styles.btnText, styles.light]}>light mode</Text></TouchableOpacity>
                <Image source={require('./images/moon.png')} style={styles.btnImg} />
              </View>
            </> :

            <View style={styles.btnContainer}>
              <TouchableOpacity style={[styles.btn, styles.dark]} onPress={() => { setIsDarkMode(true) }}><Text style={[styles.btnText, styles.dark]}>dark mode</Text></TouchableOpacity>
              <Image source={require('./images/sun.png')} style={styles.btnImg} />
            </View>
        }

      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnContainer: {
    bottom: 100,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dark: {
    backgroundColor: '#000',
    color: '#fff'
  },
  light: {
    backgroundColor: '#fff',
    color: '#000'
  },
  btn: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
    borderRadius: 5,
    marginLeft: 30
  },
  btnText: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  btnImg: {
    height: 30,
    width: 30,
    marginLeft: 10,
    alignSelf: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
});

export default App;
