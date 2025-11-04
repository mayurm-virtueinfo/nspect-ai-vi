import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../theme/Images';
import Fonts from '../theme/Fonts';
import { AppStrings } from '../theme/AppStrings';
import AppTextInput from '../components/AppTextInput';
import { useAlertModal } from '../components/AlertModalProvider';
import SecondaryPrimaryButton from '../components/SecondaryPrimaryButton';
import { PrimaryButton } from '../components/PrimaryButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { validateEmail } from '../utility/Helper';

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;

const ForgotPasswordScreen: React.FC = () => {
  const { showModal, hideModal } = useAlertModal();

  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();

  const [email, setEmail] = useState(__DEV__ ? 'dev.12@semaphoremobile.net' : '');

  const handleGoBack = () => navigation.goBack();

  const handleSignIn = () => {
    if (email === '') {
      showModal({
        body: AppStrings.please_enter_the_email_address,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else if (!validateEmail(email)) {
      showModal({
        body: AppStrings.please_enter_valid_email_address,
        buttonText: "Close",
        onClose: () => hideModal(),
      })
    } else {
      navigation.navigate('ResetPassword');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headerWrapper}>
        <AppHeader isShowBackButton onBack={handleGoBack} />
      </SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 10}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <ImageBackground source={Images.ic_app_bg} style={styles.background}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{AppStrings.reset_pasword}</Text>
            </View>
          </ImageBackground>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <AppTextInput
                label="Email Address"
                placeholder="Enter Email Address"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButton title={AppStrings.send_reset_link} onPress={handleSignIn} />
              <SecondaryPrimaryButton
                title="Go Back"
                onPress={handleGoBack}
                buttonStyle={styles.goBackButton}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090e10'
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    height: 590,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: Fonts.SF_Pro_Text_Medium,
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'rgba(15, 15, 15, 1)',
    zIndex: 1000
  },
  inputContainer: {
    marginTop: 20,
    gap: 15,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  goBackButton: {
    marginTop: 15,
  },
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent',
  }
});

export default ForgotPasswordScreen;