import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Images } from '../theme/Images';
import { AppStrings } from '../theme/AppStrings';
import { PrimaryButton } from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Fonts from '../theme/Fonts';

type LaunchScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LaunchScreen'>;

const LaunchScreen: React.FC = () => {
  const navigation = useNavigation<LaunchScreenNavigationProp>();

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.centerContainer}>
          <Image 
            source={Images.ic_intro2}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.patentText}>{AppStrings.patent_pending}</Text>
          <Text style={styles.welcomeText}>{AppStrings.welcome_lets_get_started}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={AppStrings.sign_in}
            buttonWidth="90%"
            onPress={() => {
              console.log('onPress Sign in : ')
              navigation.navigate('Signin')
            }}
          />
          <PrimaryButton
            title={AppStrings.create_an_account}
            buttonWidth="90%"
            buttonMarginTop={20}
            onPress={() => navigation.navigate('CreateAccount')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FCFCFB',
  },
  scrollView: {
    flex:1,
  },
  scrollContainer: {
    flexGrow: 1
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 270,
    marginTop: 80,
  },
  patentText: {
    fontSize: 14,
    color: '#000',
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: Fonts.DMSans_Bold,
    textAlign: 'center',
    marginTop: 50,
    color: '#000',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40, // Padding from bottom
  },
});
