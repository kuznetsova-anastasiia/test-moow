import { View, Text, Button, StyleSheet, Image, Pressable } from "react-native"
import { gStyle } from "../styles/style"
import { Navbar } from "../components/Navbar"

export const Home = ({ navigation }) => {
  return (
    <View style={gStyle.container} >
      <Pressable style={styles.button} onPress={() => navigation.navigate('MakeOrder')}>
        <Image style={styles.icon} source={require('../assets/images/car.png')} />
        <Text style={styles.buttonText}>
          Зробити замовлення
        </Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F1F0FF',
  },
  buttonText: {
    fontSize: 20,
    color: '#665CD1',
    fontFamily: 'mulish-b'
  },
  icon: {
    width: '20%'
  }
})