import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';

export default function RoleSelection({ navigation }) {
  const { t } = useTranslation();

  return (
    <LinearGradient
      colors={['#e0f2f1', '#b9fbc0']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require('../../assets/images/farmlogo.jpg')} style={styles.logo} />
        <Text style={styles.title}>{t("roleSelection.title")}</Text>
        <Text style={styles.description}>
          {t("roleSelection.description")}
        </Text>
        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('FarmerLogin')}
          >
            <Image source={require('../../assets/images/farmer.jpg')} style={styles.image} />
            <Text style={styles.boxText}>{t("roleSelection.farmer")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('ConsumerLogin')}
          >
            <Image source={require('../../assets/images/consumer.jpg')} style={styles.image} />
            <Text style={styles.boxText}>{t("roleSelection.consumer")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop:-80,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004d40',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#004d40',
    paddingHorizontal: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    flex: 1,
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 18,
    color: '#00796b',
    fontWeight: '600',
  },
});
