import { View, Image, StyleSheet } from "react-native";


export const Navbar = () => {
  return (
    <View style={[styles.navbar, styles.shadow]}>
      <Image source={require('../assets/images/home.png')} />
      <Image source={require('../assets/images/heart.png')} />
      <Image source={require('../assets/images/dashboard.png')} />
      <Image source={require('../assets/images/message.png')} />
      <Image source={require('../assets/images/more.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    zIndex: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 34,
    width: '100%',
    paddingBottom: 24,
    paddingTop: 20,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: '#fff'
  },
  shadow: {
    shadowColor: '#000',
    elevation: 21
  }
})