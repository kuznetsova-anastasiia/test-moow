import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { gStyle } from "../styles/style";
import { Formik } from 'formik';
import { CheckBox, Radio, RadioGroup, Button, Text as EvaText, Datepicker } from '@ui-kitten/components';
import { useEffect, useState } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MaskInput from 'react-native-mask-input';

const GOOGLE_API_KEY = "AIzaSyCSrAJEjtJ86MSO-oeL4jpAdvHNwRgkZBI";

export const MakeOrder = ({ navigation }) => {
  const [loadDate, setLoadDate] = useState();
  const [unloadDate, setUnloadDate] = useState();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [radio, setRadio] = useState();
  const [isButton, setIsButton] = useState(false);

  useEffect(() => {
    if ((check1 || check2) && radio !== undefined && loadDate && unloadDate) {
      setIsButton(true);
    } else {
      setIsButton(false);
    }
  }, [check1, check2, radio, loadDate, unloadDate])


  return (
    <ScrollView style={gStyle.container}>
      <Formik
        initialValues={{
          loadCountry: '',
          loadRegion: '',
          loadCity: '',
          loadAddress: '',
          loadTime: '',
          unloadCountry: '',
          unloadRegion: '',
          unloadCity: '',
          unloadAddress: '',
          unloadTime: '',
          surname: '',
          name: '',
          fatherName: '',
          phoneNumber: '',
          loadersCount: '',
          loadersHours: '',
        }}
        onSubmit={(data) => navigation.navigate('SubmitOrder', {
          loadData: {
            loadCountry: data.loadCountry,
            loadRegion: data.loadRegion,
            loadCity: data.loadCity,
            loadAddress: data.loadAddress,
            loadTime: data.loadTime,
            loadDate
          },
          unloadData: {
            unloadCountry: data.unloadCountry,
            unloadRegion: data.unloadRegion,
            unloadCity: data.unloadCity,
            unloadAddress: data.unloadAddress,
            unloadTime: data.unloadTime,
            unloadDate
          },
          servicesData: {
            forwarder: check1,
            loaders: check2,
            loadersCount: data.loadersCount,
            loadersHours: data.loadersHours
          },
          contacts: {
            surname: data.surname,
            name: data.name,
            fatherName: data.fatherName,
            phone: data.phoneNumber
          },
          payment: {
            type: radio === 0 ? 'Повна оплата' : 'Оплата частинами'
          }
        })}
      >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <View style={{ paddingBottom: 100 }}>
          <View style={styles.loadGroup}>
            <Text style={styles.title}>Загрузка</Text>

            <Text style={styles.subtitle}>Місце</Text>

            <View style={styles.placeContainer}>
              <View>
                <Text style={styles.label}>
                  Країна
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Україна"
                  cursorColor="#665CD1"
                  value={values.loadCountry}
                  onChangeText={handleChange('loadCountry')}
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Область
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Київська"
                  cursorColor="#665CD1"
                  value={values.loadRegion}
                  onChangeText={handleChange('loadRegion')}
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Місто
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Київ"
                  cursorColor="#665CD1"
                  value={values.loadCity}
                  onChangeText={handleChange('loadCity')}
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Вулиця
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Тараса Шевченка, 1"
                  cursorColor="#665CD1"
                  value={values.loadAddress}
                  onChangeText={handleChange('loadAddress')}
                />
              </View>
            </View>
            
            <Text style={styles.subtitle}>Дата і час прибуття</Text>
            
            <View style={styles.dateContainer}>
              <View style={{ flex: 3 }}>
                <Text style={styles.label}>Дата</Text>
                <Datepicker
                  controlStyle={styles.date} 
                  size="small"
                  date={loadDate}
                  onSelect={(date) => setLoadDate(date)}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Час</Text>
                <TextInput
                  style={styles.time}
                  keyboardType="numeric"
                  cursorColor="#665CD1"
                  value={values.loadTime}
                  onChangeText={handleChange('loadTime')}
                  placeholder="hh.mm"
                />
              </View>
            </View>
          </View>

          <View style={styles.loadGroup}>
            <Text style={styles.title}>Вигрузка</Text>

            <Text style={styles.subtitle}>Місце</Text>

            <View style={styles.placeContainer}>
              <View>
                <Text style={styles.label}>
                  Країна
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Україна"
                  cursorColor="#665CD1"
                  value={values.unloadCountry}
                  onChangeText={handleChange('unloadCountry')}
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Область
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Київська"
                  cursorColor="#665CD1"
                  value={values.unloadRegion}
                  onChangeText={handleChange('unloadRegion')}
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Місто
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Київ"
                  cursorColor="#665CD1"
                  value={values.unloadCity}
                  onChangeText={handleChange('unloadCity')}
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Вулиця
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Тараса Шевченка, 1"
                  cursorColor="#665CD1"
                  value={values.unloadAddress}
                  onChangeText={handleChange('unloadAddress')}
                />
              </View>
            </View>
            
            <Text style={styles.subtitle}>Дата і час прибуття</Text>
            
            <View style={styles.dateContainer}>
              <View style={{ flex: 3 }}>
                <Text style={styles.label}>Дата</Text>
                <Datepicker
                  controlStyle={styles.date} 
                  size="small"
                  date={unloadDate}
                  onSelect={(date) => setUnloadDate(date)}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Час</Text>
                <TextInput
                  style={styles.time}
                  keyboardType="numeric"
                  cursorColor="#665CD1"
                  value={values.unloadTime}
                  onChangeText={handleChange('unloadTime')}
                  placeholder="hh.mm"
                />
              </View>
            </View>
          </View>

          <View style={styles.checkboxGroup}>
            <View style={[styles.checkbox, { marginBottom: 25 }]}>
              <CheckBox
                checked={check1}
                onChange={state => setCheck1(state)}
              />
              <Text style={styles.chckboxLabel}>Послуга експедитора</Text>
            </View>

            <View style={styles.checkbox}>
              <CheckBox
                checked={check2}
                onChange={state => setCheck2(state)}
              />
              <Text style={styles.chckboxLabel}>Послуга грузчиків</Text>
            </View>

            {check2 && (
              <View style={{ flexDirection: 'row', gap: 20, marginTop: 12 }}>
                <View>
                  <Text style={styles.label}>Кількість грузчиків</Text>
                  <TextInput
                    style={styles.input}
                    inputMode="numeric"
                    value={values.loadersCount}
                    onChangeText={handleChange('loadersCount')}
                  />
                </View>

                <View>
                  <Text style={styles.label}>Зайнятість</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <TextInput
                      style={styles.input}
                      inputMode="numeric"
                      value={values.loadersHours}
                      onChangeText={handleChange('loadersHours')}
                    />
                    <Text>год</Text>
                  </View>
                </View>
              </View>
            )}
          </View>

          <View style={styles.contactsGroup}>
            <Text style={styles.title}>Контактні дані</Text>

            <View style={styles.placeContainer}>
              <View>
                <Text style={styles.label}>
                  Прізвище
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Валунов"
                  cursorColor="#665CD1"
                  value={values.surname}
                  onChangeText={handleChange('surname')}
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Ім'я
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Валентин"
                  cursorColor="#665CD1"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
              </View>

              <View>
                <Text style={styles.label}>
                  По-батькові
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Валерійович"
                  cursorColor="#665CD1"
                  value={values.fatherName}
                  onChangeText={handleChange('fatherName')}
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Номер телефону
                </Text>
                {/* <TextInput
                  style={styles.input}
                  placeholder="+38 (097) 333 3333"
                  cursorColor="#665CD1"
                  inputMode="tel"
                  value={values.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                /> */}

                <MaskInput
                  style={styles.input}
                  placeholder="+38 (097) 333 3333"
                  cursorColor="#665CD1"
                  inputMode="tel"
                  value={values.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                  mask={['+', /\d/, /\d/, ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                />
              </View>
            </View>
          </View>

          <View style={styles.payment}>
            <Text style={styles.title}>Оплата</Text>

            <RadioGroup selectedIndex={radio} onChange={index => setRadio(index)}>
              <Radio style={styles.radio}>
                Повна
              </Radio>

              <Radio style={styles.radio}>
                Частинами
              </Radio>

              <Radio disabled={true} style={[styles.radio, { backgroundColor: '#EBEBEB', position: 'relative' }]}>
                Через MOOW
              </Radio>
              <Text style={{ fontSize: 14, fontFamily: 'mulish-l', color: '#665CD1', position: 'absolute', bottom: 15, right: 15 }}>
                скоро
              </Text>
            </RadioGroup>
          </View>

          <Button disabled={!isButton} style={isButton ? styles.button : [styles.button, styles.disabledButton]} onPress={handleSubmit}>
            {evaProps => <EvaText {...evaProps} style={{ fontSize: 16, color: '#fff', fontFamily: 'mulish-b' }}>Далі</EvaText>}
          </Button>
        </View>
      )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'mulish-b',
    marginBottom: 10,
    color: "#665CD1"
  },
  loadGroup: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#665CD1',
    borderRadius: 0,
    padding: 0,
    height: 24
  },
  label: {
    fontSize: 14,
    fontFamily: 'mulish-m',
    margin: 0,
    padding: 0
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'mulish-b',
    marginBottom: 10
  },
  placeContainer: {
    display: 'flex',
    gap: 15,
    marginBottom: 20
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 74,
    marginBottom: 20
  },
  date: {
    borderWidth: 0,
    borderBottomColor: '#665CD1',
    borderBottomWidth: 1,
    borderRadius: 0,
    backgroundColor: '#fff',
    padding: 0
  },
  time: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#665CD1',
    borderRadius: 0,
    padding: 1,
  },
  checkbox: {
    flexDirection: 'row',
    gap: 6
  },
  chckboxLabel: {
    fontSize: 20,
    fontFamily: 'mulish-b',
    color: '#665CD1'
  },
  checkboxGroup: {
    paddingBottom: 20,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  radioLabel: {
    fontSize: 16,
    fontFamily: 'mulish-b'
  },
  radio: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#F1F0FF',
    padding: 15,
    borderRadius: 5
  },
  payment: {
    gap: 15,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#171717',
    borderRadius: 34,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '20%',
    alignSelf: "center",
    borderWidth: 0
  },
  disabledButton: {
    backgroundColor: '#EBEBEB',
  }
})