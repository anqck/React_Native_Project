import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Text,Dimensions,Platform } from 'react-native';
import Modal from 'react-native-modal';
import s from './styles';
import IconsPickerList from '../iconsList';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Platform.OS === "ios" 
  ? Dimensions.get("window").height
  : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");
const IconsPickerModal = ({
  isVisible, onIconPick, hideModal, icons, selectedIconName,
}) => (
 
  <TouchableWithoutFeedback onPress={hideModal}z>
    <Modal
      isVisible={isVisible}
      onBackButtonPress={hideModal}
      onBackdropPress={hideModal}
      style={s.modalStyle}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
    >
      <Text style={s.title}>Chọn biểu tượng</Text>
      <IconsPickerList
        style={s.listStyle}
        icons={icons}
        onIconPick={onIconPick}
        selectedIconName={selectedIconName}
        enableEmptySections
      />
    </Modal>
  </TouchableWithoutFeedback>
);

IconsPickerModal.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
  isVisible: PropTypes.bool,
  onIconPick: PropTypes.func,
  selectedIconName: PropTypes.string,
  hideModal: PropTypes.func,
};

export default IconsPickerModal;
