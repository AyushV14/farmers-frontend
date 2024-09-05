import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18next, { languageResource } from '../../servies/i18next';
import languageList from '../../servies/LanguageList.json';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient for gradient background

export default function IntroScreen({ navigation }) {

  const [visible, setVisible] = useState(false);
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  const { t } = useTranslation();
  return (
    <LinearGradient
      colors={['#e0f2f1', '#b9fbc0']} // Light green gradient
      style={styles.background}
    >
      <View style={styles.container}>
        <Modal visible={visible} onRequestClose={() => setVisible(false)} transparent={true}>
          <View style={styles.modalBackground}>
            <View style={styles.languageList} >
              <FlatList
                data={Object.keys(languageResource)}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.langButton} onPress={() => changeLanguage(item)}>
                    <Text style={styles.languageName}>{languageList[item].nativeName}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.innerContainer}>
          <Image source={require('../../assets/images/farmlogo.jpg')} style={styles.logo} />
          <Text style={styles.appName}>{t("logo")}</Text>
          <Text style={styles.description}>
            {t("description")}
          </Text>
          
          {/* Choose Language Button */}
          <TouchableOpacity
            style={[styles.langButton, { width: 'auto', paddingHorizontal: 30 }]}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.langButtonText}>{t("lang")}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RoleSelection')}
        >
          <Text style={styles.buttonText}>{t("start")}</Text>
        </TouchableOpacity>
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
  },
  innerContainer: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white overlay
    borderRadius: 10,
    padding: 20,
    marginBottom: 30, // Adjust spacing to push the "Get Started" button further down
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004d40',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#004d40',
    paddingHorizontal: 20,
  },
  langButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    width: 'auto',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  langButtonText: {
    color: '#388e3c',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#388e3c',
    padding: 15,
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
    marginBottom: 70,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the modal
  },
  languageList: {
    width: '80%',
    backgroundColor: '#e0f2f1',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  languageName: {
    fontSize: 18,
    color: '#333',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
