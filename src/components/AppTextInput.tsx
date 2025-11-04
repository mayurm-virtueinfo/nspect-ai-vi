import React from 'react';
import { StyleSheet, TextInput, View, Text, TextInputProps, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../theme/Fonts';

interface AppTextInputProps extends TextInputProps {
  label?: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.shadowWrapper}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.08)', 'rgba(0, 0, 0, 0.05)']}
          style={styles.gradientOverlay}
        />
        <TextInput
          placeholderTextColor="rgba(255,255,255,0.4)"
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 353,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 4,
    fontWeight: '500',
    fontFamily: Fonts.SF_Pro_Text_Medium,
    
  },
  shadowWrapper: {
    position: 'relative',
    // width: 353,
    height: 61,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(29,29,29,1)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    // overflow: 'hidden',

    // Simulated soft blur shadow (outer glow)
     shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,

    // iOS-only blur feel
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.5)',
      },
    }),
  },
  focusedShadow: {
    borderColor: 'rgba(255,165,0,0.8)',
    shadowColor: 'rgba(255,165,0,0.8)',
    shadowOpacity: 0.9,
    shadowRadius: 12,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFill,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    paddingTop: 21,
    paddingRight: 30,
    paddingBottom: 20,
    paddingLeft: 30,
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.SF_Pro_Text_Medium,
    fontWeight: '400',
  },
});

export default AppTextInput;
