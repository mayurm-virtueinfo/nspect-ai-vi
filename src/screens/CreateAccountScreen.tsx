import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
import { useAlertModal } from '../components/AlertModalProvider';
import { validateEmail, validatePassword } from '../utility/Helper';
import PrimaryButton from '../components/PrimaryButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';

type CreateAccountScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateAccount'
>;

const CreateAccountScreen: React.FC = () => {
  const { showModal, hideModal } = useAlertModal();
  const navigation = useNavigation<CreateAccountScreenNavigationProp>();
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState(__DEV__ ? '' : '');
  const [fullName, setFullName] = useState(__DEV__ ? '' : '');
  const [companyName, setCompanyName] = useState(__DEV__ ? '' : '');
  const [contactNumber, setContactNumber] = useState(__DEV__ ? '' : '');
  const [confirmPassword, setConfirmPassword] = useState(__DEV__ ? '' : '');
  const [password, setPassword] = useState(__DEV__ ? '' : '');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [licenseNumberError, setLicenseNumberError] = useState('');
  const [ischeckError, setischeckError] = useState('');

  const handleCreateAccount = () => {
    setEmailError('');
    setFullNameError('');
    setCompanyNameError('');
    setContactNumberError('');
    setConfirmPasswordError('');
    setPasswordError('');
    setischeckError('');
    setLicenseNumberError('');

    if (email === '') {
      setEmailError(AppStrings.the_email_field_is_required);
    } else if (!validateEmail(email)) {
      setEmailError(AppStrings.please_enter_valid_email_address);
    } else if (fullName === '') {
      setFullNameError(AppStrings.the_full_name_field_is_required);
    } else if (companyName === '') {
      setCompanyNameError(AppStrings.the_company_name_field_is_required);
    } else if (licenseNumber === '') {
      setLicenseNumberError(AppStrings.the_license_number_field_is_required);
    } else if (contactNumber === '') {
      setContactNumberError(AppStrings.the_contact_number_field_is_required);
    } else if (contactNumber.length < 10) {
      setContactNumberError(AppStrings.enter_ten_digits);
    } else if (password === '') {
      setPasswordError(AppStrings.the_password_field_is_required);
    } else if (!validatePassword(password)) {
      setPasswordError(AppStrings.password_must_contain_at);
    } else if (confirmPassword === '') {
      setConfirmPasswordError(AppStrings.the_confirm_password_field_is_required);
    } else if (confirmPassword !== password) {
      setConfirmPasswordError(AppStrings.the_entered_passwords_do_not_match);
    } else if (!isChecked) {
      setischeckError(AppStrings.you_need_to_agree_to_our_Terms_of_Service_and_Privacy_Policy_to_create_an_account)
    } else {

    }
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <AppHeader title={AppStrings.create_account} isShowBackButton={true} onBack={handleGoBack} />

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
          <View style={styles.innerContent}>
            <AppTextInput
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError('');
              }}
              label={AppStrings.email_address}
              placeholder={AppStrings.enter_email_address}
              icon={Images.ic_input_user}
              keyboardType={'email-address'}
              error={emailError}
            />
            <AppTextInput
              value={fullName}
              onChangeText={(text) => {
                setFullName(text);
                setFullNameError('');
              }}
              label={AppStrings.full_name}
              placeholder={AppStrings.enter_full_name}
              icon={Images.ic_input_user}
              style={styles.input}
              error={fullNameError}
            />
            <AppTextInput
              value={companyName}
              onChangeText={(text) => {
                setCompanyName(text);
                setCompanyNameError('');
              }}
              label={AppStrings.company_name}
              placeholder={AppStrings.enter_company_name}
              icon={Images.ic_input_user}
              style={styles.input}
              error={companyNameError}
            />
            <AppTextInput
              value={licenseNumber}
              onChangeText={(text) => {
                setLicenseNumber(text);
                setLicenseNumberError('');
              }}
              label={AppStrings.license_number}
              placeholder={AppStrings.license_number}
              icon={Images.ic_input_user}
              style={styles.input}
              error={licenseNumberError}
            />
            <AppTextInput
              value={contactNumber}
              onChangeText={(text) => {
                setContactNumber(text);
                setContactNumberError('');
              }}
              label={AppStrings.contact_number}
              placeholder={AppStrings.enter_contact_number}
              icon={Images.ic_call}
              style={styles.input}
              error={contactNumberError}
              keyboardType={'number-pad'}
              maxLength={10}
            />
            <AppTextInput
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError('');
              }}
              label={AppStrings.password}
              placeholder={AppStrings.enter_password}
              icon={Images.ic_lock}
              style={styles.input}
              secureTextEntry
              error={passwordError}
            />
            <AppTextInput
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setConfirmPasswordError('');
              }}
              label={AppStrings.confirm_password}
              placeholder={AppStrings.enter_confirm_password}
              icon={Images.ic_lock}
              style={styles.input}
              secureTextEntry
              error={confirmPasswordError}
            />
            <View style={styles.termContent}>
              <TouchableOpacity 
                style={styles.checkBox} 
                onPress={() => setIsChecked(!isChecked)}>
                {isChecked ? 
                  <Image
                    source={Images.ic_check_arrow}
                    style={styles.checkIcon}
                  />
                  :
                  null
                }
              </TouchableOpacity>
              <Text style={styles.cmsTxt}>
                {"I confirm that I agree to the"}{' '}
                <Text
                  style={styles.link}
                  onPress={() => {
                    navigation.navigate('Cms', {
                      title: AppStrings.terms_of_service
                    });
                  }}
                >
                  {"Terms of Service"}
                </Text>
                {"\nand "}
                <Text
                  style={styles.link}
                  onPress={() => {
                    navigation.navigate('Cms', {
                      title: AppStrings.privacy_policy
                    });
                  }}
                >
                  {"Privacy Policy"}
                </Text>
                {" for NspectAI."}
              </Text>
            </View>
            {ischeckError ? <Text style={styles.errorText}>{ischeckError}</Text> : null}
            <PrimaryButton
              title={AppStrings.create_account}
              onPress={handleCreateAccount}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1877F2',
  },
  keyboardAvoid: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingBottom: 60,
  },
  innerContent: {
    flex: 1,
    marginTop: 30,
  },
  footerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
  },
  forgotText: {
    color: '#000000',
    fontFamily: Fonts.DMSans_Bold,
  },
  resetText: {
    color: '#1145F5',
    fontFamily: Fonts.DMSans_Bold,
    borderBottomWidth: 1,
    borderColor: '#1145F5',
    marginLeft: 5,
  },
  input: {
    marginTop: 15,
  },
  termContent: {
    flexDirection: 'row',
    marginTop: 15,
  },
  checkBox: {
    width: 32,
    height: 32,
    backgroundColor: '#ECEFF6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkIcon: {
    width: 20,
    height: 15,
    resizeMode: 'contain'
  },
  cmsTxt: {
    fontFamily: Fonts.DMSans_Regular,
    fontSize: 14,
    marginLeft: 10
  },
  link: {
    textDecorationLine: 'underline',
    color: '#1145F5'
  },
  errorText: {
    color: '#F21818',
    fontSize: 14,
    marginTop: 10,
    fontFamily: Fonts.DMSans_Regular,
  },
});
