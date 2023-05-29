import { Image } from "react-native";
import { gStyle } from "../styles/style";
import { Text, View, ScrollView } from "react-native"
import { StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import { Button, Text as EvaText } from '@ui-kitten/components';

export const SubmitOrder = ({ route, navigation }) => {
  const { loadData, unloadData, contacts, payment, servicesData } = route.params;
  
  return (
    <ScrollView style={gStyle.container}>
      <View style={{ paddingBottom: 100 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image source={require('../assets/images/orderImg.png')} />

            <View>
              <Text style={{ fontSize: 14, fontFamily: 'mulish-m' }}>
                Грузовоз
              </Text>

              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 16, fontFamily: 'mulish-m', color: '#665CD1' }}>
                  300 грн/кв.м.
                </Text>
                <Text style={{ fontSize: 12, fontFamily: 'mulish-l', color: '#FC7D72', textDecorationLine: 'line-through' }}>
                  200
                </Text>
              </View>

              <Text style={{ fontSize: 12, fontFamily: 'mulish-l', color: '#5A5A5A' }}>
                min 200 грн/кг
              </Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 11, fontFamily: 'mulish-l', color: '#5A5A5A' }}>
              {loadData.loadDate.toLocaleDateString().split('/').join('.')}
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assets/images/star.png')} />
              <Text style={{ fontSize: 14, fontFamily: 'mulish-m', color: '#5A5A5A' }}>
                4.8
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/images/eye.png')} />
              <Text style={{ fontSize: 12, fontFamily: 'mulish-l', color: '#5A5A5A' }}>
                12 тис.
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <View style={{ gap: 10 }}>
            <View>
              <Text style={styles.contactsLabel}>
                Прізвище
              </Text>

              <Text style={styles.contactsData}>
                {contacts.surname}
              </Text>
            </View>

            <View>
              <Text style={styles.contactsLabel}>
                Ім'я
              </Text>

              <Text style={styles.contactsData}>
                {contacts.name}
              </Text>
            </View>
          </View>

          <View style={{ gap: 10 }}>
            <View>
              <Text style={styles.contactsLabel}>
                По-батькові
              </Text>

              <Text style={styles.contactsData}>
                {contacts.fatherName}
              </Text>
            </View>

            <View>
              <Text style={styles.contactsLabel}>
                Номер телефону
              </Text>

              <Text style={styles.contactsData}>
                {contacts.phone}
              </Text>
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 20, fontFamily: 'mulish-b', color: '#171717', paddingVertical: 18, backgroundColor: '#F1F0FF', borderRadius: 5, textAlign: 'center', marginBottom: 15 }}>
          {payment.type}
        </Text>

        {/* <View style={{ backgroundColor: '#5A5A5A', height: 350, width: '100%', borderRadius: 5, marginBottom: 15, }} /> */}
        <View style={{ height: 350, width: '100%', marginBottom: 15, padding: 10, backgroundColor: '#F1F0FF', borderRadius: 12 }}>
          <MapView style={{ height: '100%' }} />
        </View>


        <View>
          <View style={styles.receiptItem}>
            <Text style={styles.receiptItemName}>
              Подача транспорту
            </Text>

            <Text style={styles.receiptItemCost}>
              2000 грн
            </Text>
          </View>

          <View style={styles.receiptItem}>
            <Text style={styles.receiptItemName}>
              Маршрут загрузка - вигрузка
            </Text>

            <Text style={styles.receiptItemCost}>
              2000 грн
            </Text>
          </View>

          {servicesData.forwarder && (
            <View style={styles.receiptItem}>
              <Text style={styles.receiptItemName}>
                Послуги експедитора
              </Text>

              <Text style={styles.receiptItemCost}>
                2000 грн
              </Text>
            </View>
          )}

          {servicesData.loaders && (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <Text style={styles.receiptItemName}>
                  Послуги грузчиків
                </Text>

                <Text style={styles.receiptItemCost}>
                  {`${servicesData.loadersCount * 100 * servicesData.loadersHours} грн`}
                </Text>
              </View>

              <View style={{ paddingLeft: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                  <Text style={styles.receiptItemName}>
                    {`${servicesData.loadersCount} грузчиків`}
                  </Text>

                  <Text style={styles.receiptItemCost}>
                    {`${servicesData.loadersCount * 100} грн/год`}
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                  <Text style={styles.receiptItemName}>
                    Зайнятість
                  </Text>

                  <Text style={styles.receiptItemCost}>
                    {`${servicesData.loadersHours} години`}
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontFamily: 'mulish-b', color: '#171717' }}>
            Повна ціна
          </Text>

          <Text style={{ fontSize: 20, fontFamily: 'mulish-b', color: '#665CD1' }}>
            {`${2000 + 2000 + servicesData.loadersCount * 100 * servicesData.loadersHours + (servicesData.forwarder ? 2000 : 0)}`}
          </Text>
        </View>

        <Button style={styles.button} onPress={() => navigation.navigate('Home')}>
            {evaProps => <EvaText {...evaProps} style={{ fontSize: 16, color: '#fff', fontFamily: 'mulish-b' }}>Оформити</EvaText>}
          </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contactsLabel: {
    fontSize: 14,
    fontFamily: 'mulish-m',
    color: '#262626'
  },
  contactsData: {
    fontSize: 16,
    fontFamily: 'mulish-l',
    color: '#5A5A5A'
  },
  receiptItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10
  },
  receiptItemName: {
    fontSize: 16,
    fontFamily: 'mulish-l',
    color: '#262626'
  },
  receiptItemCost: {
    fontSize: 16,
    fontFamily: 'mulish-m',
    color: '#262626'
  },
  button: {
    backgroundColor: '#171717',
    borderRadius: 34,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '35%',
    alignSelf: "center",
    borderWidth: 0
  }
})