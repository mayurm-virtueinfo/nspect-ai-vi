import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import { Images } from '../theme/Images';
import { AppStrings } from '../theme/AppStrings';
import Fonts from '../theme/Fonts';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppTextInput from '../components/AppTextInput';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryPrimaryButton from '../components/SecondaryPrimaryButton';
import { validatePassword } from '../utility/Helper';
import { useAlertModal } from '../components/AlertModalProvider';

type ResetPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ResetPassword'
>;

const ResetPasswordScreen = () => {
  const { showModal, hideModal } = useAlertModal();

  const navigation = useNavigation<ResetPasswordScreenNavigationProp>();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleGoBack = () => navigation.goBack();

  const handleResetPassword = () => {
    if (password === '') {
      showModal({
        body: AppStrings.please_enter_the_password,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else if (password.length < 8) {
      showModal({
        body: AppStrings.the_password_must_be_at_least,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else if (!validatePassword(password)) {
      showModal({
        body: AppStrings.the_password_must_be_at_least,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else if (confirmPassword === '') {
      showModal({
        body: AppStrings.please_enter_the_cpassword,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else if (confirmPassword !== password) {
      showModal({
        body: AppStrings.the_entered_passwords_do_not_match,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else {
      navigation.replace('Signin');
    }
  };

  return (
    <View style={styles.mainContainer}>
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
                label="Password"
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <AppTextInput
                label="Confirm Password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButton title={AppStrings.send_reset_link} onPress={handleResetPassword} />
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

export default ResetPasswordScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#090e10'
  },
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    height: 480,
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
})