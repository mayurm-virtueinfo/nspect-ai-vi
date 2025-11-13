import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { Images } from '../theme/Images';

interface CustomBottomTabProps {
  activeIndex?: number;
  onTabPress?: (index: number) => void;
}

interface TabItem {
  activeImage: ImageSourcePropType;
  inactiveImage: ImageSourcePropType;
  name: string;
  width?: number;
  height?: number;
}

const CustomBottomTab: React.FC<CustomBottomTabProps> = ({
  activeIndex = 0,
  onTabPress,
}) => {
  
  const tabItems: TabItem[] = [
    {
      activeImage: Images.ic_home_active,
      inactiveImage: Images.ic_home_inactive,
      name: 'Dashboard',
      width: 20,
      height: 20,
    },
    {
      activeImage: Images.ic_inspection_active,
      inactiveImage: Images.ic_inspection_inactive,
      name: 'Inspections',
      width: 24,
      height: 24,
    },
    {
      activeImage: Images.ic_doc_inactive,
      inactiveImage: Images.ic_doc_inactive,
      name: 'Document',
      width: 19,
      height: 19,
    },
    {
      activeImage: Images.ic_chat_active,
      inactiveImage: Images.ic_chat_inactive,
      name: 'Conversations',
      width: 24,
      height: 24,
    },
  ];

  return (
    <View style={styles.container}>
      {tabItems.map((tab, index) => {
        const imageSource = activeIndex === index ? tab.activeImage : tab.inactiveImage;

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabButton}
            onPress={() => onTabPress?.(index)}
            activeOpacity={0.7}>
            <Image
              source={imageSource}
              style={[
                styles.iconImage,
                { width: tab.width ?? 24, height: tab.height ?? 24 },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width < 360 ? 20 : 30,
    paddingVertical: 15,
    height: 64,
    borderRadius: 1000,
    width: width > 400 ? 316 : width - 60,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
  },
  tabButton: {
    padding: 10,
  },
  iconImage: {
    // width: 24,
    // height: 24,
    // backgroundColor:'red'
  },
});

export default CustomBottomTab;
