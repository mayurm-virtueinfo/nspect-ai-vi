import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Images } from '../theme/Images';
import Fonts from '../theme/Fonts';

const { height } = Dimensions.get('window');

interface AppHeaderProps {
  title?: string;
  onBack?: () => void;
  isShowBackButton?: boolean;
  showDrawer?: boolean;
  openDrawer?: () => void;
  isShowCart?: boolean;
  onCartClick?: () => void;
  isShowBlueBell?: boolean;
  onBlueBellClick?: () => void;
  mainStyle?: StyleProp<ViewStyle>;
  showSearch?: boolean;
  onProfilePress?: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  onBack,
  isShowBackButton = false,
  mainStyle,
  showSearch = false,
  onProfilePress,
}) => {
  return (
    <View style={[styles.container, mainStyle]}>
      <TouchableOpacity style={styles.headerContent}>
        <Image 
          source={Images.ic_drawer_menu}
        />
        <Image 
          source={Images.ic_txt_logo}
          resizeMode={'contain'}
          style={styles.textLogoImg}
        />
      </TouchableOpacity>
      {/* Left: Back Button */}
      <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
        {isShowBackButton && (
          <TouchableOpacity onPress={onBack} style={styles.backContainer}>
            <Image source={Images.ic_back_arrow} style={styles.backImage} resizeMode={'contain'}/>
          </TouchableOpacity>
        )}
        <Text style={styles.titleTxt}>{title}</Text>
      </View>

      {/* Center: Logo */}
      {/* <View style={styles.centerContent}>

      </View> */}
      
      <View style={styles.rightContent}>
        {showSearch && (
          <TouchableOpacity onPress={onProfilePress}>
            <Image
              source={Images.ic_round_search}
              style={styles.searchImage}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.13, // 0.16
    backgroundColor:'#1877F2',
    paddingHorizontal: 20,
    paddingVertical:5, // 20
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',    
  },
  textLogoImg: {
    width: 121,
    height: 28,
  },
  backContainer: {
    height: 40,
    width: 40,
    justifyContent:'center',
  },
  titleTxt: {
    fontSize: 28,
    fontFamily: Fonts.DMSans_Black,
    color: '#FFFFFF'
  },
  rightContent: {
    position: 'absolute',
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:20,
  },
  backImage: {
    height: 18,
    width: 29,
  },
  searchImage: {
    width: 40,
    height: 40,
  }
});

export default AppHeader;
