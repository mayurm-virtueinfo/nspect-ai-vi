import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Images } from '../theme/Images';
import { AppStrings } from '../theme/AppStrings';
import Fonts from '../theme/Fonts';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import SecondaryPrimaryButton from '../components/SecondaryPrimaryButton';
import { useAlertModal } from '../components/AlertModalProvider';
import { validateEmail } from '../utility/Helper';
import { SafeAreaView } from 'react-native-safe-area-context';

type SigninScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Signin'
>;

const SigninScreen: React.FC = () => {
  const { showModal, hideModal } = useAlertModal();
  
  const navigation = useNavigation<SigninScreenNavigationProp>();

  const [email, setEmail] = useState(__DEV__ ? 'test@gmail.com' : '');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email === '' && password === '') {
      showModal({
        body: AppStrings.please_enter_the_email_and_password,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else if (email === '') {
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
      });
    } else if (password === '') {
      showModal({
        body: AppStrings.please_enter_the_password,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else {
      
    }
  };

  const handleGoBack = () => navigation.goBack();

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
              <Text style={styles.title}>{AppStrings.sign_in}</Text>
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
              <AppTextInput
                label="Password"
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <View style={styles.buttonContainer}>
              <SecondaryPrimaryButton title={AppStrings.sign_in} onPress={handleSignIn} />
              <SecondaryPrimaryButton
                title="Go Back"
                onPress={handleGoBack}
                buttonStyle={styles.goBackButton}
              />
              <View style={styles.footerContainer}>
                <Text style={styles.forgotText}>{AppStrings.forgot_your_password}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.resetText}>{AppStrings.reset_pasword}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>          
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#090e10'
  },
  background: {
    height: 450,
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
    fontWeight: '600',
    fontFamily: Fonts.SF_Pro_Text_Medium,
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'rgba(15, 15, 15, 1)',
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
  footerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  forgotText: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontFamily: Fonts.SF_Pro_Text_Medium,
    fontWeight: '500',
  },
  resetText: {
    color: '#1145F5',
    textAlign: 'center',
    fontFamily: Fonts.SF_Pro_Text_Medium,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderColor: '#1145F5',
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
});
