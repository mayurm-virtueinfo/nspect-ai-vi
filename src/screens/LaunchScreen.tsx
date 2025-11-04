import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Images } from '../theme/Images';
import { AppHeader } from '../components/AppHeader';
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
      <ImageBackground 
        source={Images.ic_app_bg}
        style={styles.background}
      >
        <AppHeader />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeTxt}>
            {AppStrings.welcome_to_bikeLink}
          </Text>
          <Text style={styles.descTxt}>
            {AppStrings.turn_lights_that_turn_heads}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={AppStrings.sign_in}
            buttonWidth="90%"
            onPress={() => navigation.navigate('Signin')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50,
    paddingBottom: 30,
    alignItems: 'center',
  },
  welcomeTxt: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: Fonts.SF_Pro_Text_Medium,
  },
  descTxt: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
    fontFamily: Fonts.SF_Pro_Text_Medium,
    fontWeight: '600',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: -80,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});