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
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { validateEmail } from '../utility/Helper';

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;

const ForgotPasswordScreen: React.FC = () => {
  const { showModal, hideModal } = useAlertModal();
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();

  const [email, setEmail] = useState(__DEV__ ? '' : '');
  const [emailError, setEmailError] = useState('');

  const handleGoBack = () => navigation.goBack();

  const handleSignIn = () => {
    setEmailError('');
    if (email === '') {
      setEmailError(AppStrings.please_enter_the_email_address);
    } else if (!validateEmail(email)) {
      setEmailError(AppStrings.please_enter_valid_email_address);      
    } else {
      
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <AppHeader isShowBackButton onBack={handleGoBack} title={AppStrings.forgot_password} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>{AppStrings.enter_your_email_address_to_receive_a_reset_link}</Text>
            <View style={styles.inputContainer}>
              <AppTextInput
                label={AppStrings.email_address}
                placeholder={AppStrings.enter_email_address}
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError('');
                }}
                icon={Images.ic_input_user}
                error={emailError}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton title={AppStrings.send_reset_link} onPress={handleSignIn} />              
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
    backgroundColor: '#1877F2',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.DMSans_Bold,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  inputContainer: {
    marginTop: 20,
    gap: 15,
    paddingHorizontal: 25,
  },
  buttonContainer: {
    paddingHorizontal: 25,
    // marginTop: 10,
  },
});

export default ForgotPasswordScreen;