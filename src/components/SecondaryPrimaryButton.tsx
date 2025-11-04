import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
  DimensionValue,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../theme/Fonts';

interface SecondaryPrimaryButtonProps {
  title: string;
  onPress?: () => void;
  iSource?: ImageSourcePropType;
  showIcon?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  buttonWidth?: DimensionValue;
  buttonHeight?: number;
  buttonJustifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  buttonBorderRadius?: number;
  buttonMarginTop?: number;
}

const SecondaryPrimaryButton: React.FC<SecondaryPrimaryButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  buttonWidth = '100%',
  buttonHeight = 54,
  buttonJustifyContent = 'center',
  buttonBorderRadius = 20,
  buttonMarginTop = 8,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          width: buttonWidth,
          height: buttonHeight,
          marginTop: buttonMarginTop,
          borderRadius: buttonBorderRadius,
          justifyContent: buttonJustifyContent,
        },
        buttonStyle,
      ]}
    >
      <View style={[styles.shadowWrapper, { borderRadius: buttonBorderRadius }]}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.08)', 'rgba(0, 0, 0, 0.05)']}
          style={[styles.gradientOverlay, { borderRadius: buttonBorderRadius }]}
        />
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    shadowColor: 'rgba(22, 22, 22, 0.31)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  shadowWrapper: {
    position: 'relative',
    justifyContent: 'center',
    height: 54,
    borderWidth: 1.5,
    borderColor: 'rgba(29,29,29,1)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    overflow: 'hidden',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,
    ...Platform.select({
      ios: { shadowColor: 'rgba(0,0,0,0.5)' },
    }),
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    fontFamily: Fonts.SF_Pro_Text_Medium,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default SecondaryPrimaryButton;
