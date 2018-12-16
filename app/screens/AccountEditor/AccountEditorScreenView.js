import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import { getParam } from '../../utils/navHelpers';
import DeleteButton from './DeleteButton';
import {
  Input,
  Button,
  ColorPicker,
  Text,
  KeyboardAvoidingView,
  ScreenWrapper,
  HeaderTitle,
} from '../../components';
import s from './styles';

const AccountEditor = ({
   navigation,
   name,
   onSubmit,
   isValid,
   initialBalance,
   onNameChange,
   onChangeBalance,
   onToggleColorPicker,
   isColorPickerVisible,
   onSelectColor,
   icon,
   color,
}) => (
  <View style={s.root}>
    <ScreenWrapper>
      <ColorPicker
        isVisible={isColorPickerVisible}
        color={color}
        onSelectColor={onSelectColor}
        onBackdropPress={onToggleColorPicker}
      />
      <View style={s.container}>
        <View style={s.secondContainer}>
          <TouchableOpacity
            onPress={onToggleColorPicker}
            style={[s.colorPickerContainer, { backgroundColor: color }]}
          />
          <Text style={s.label}>Chọn màu</Text>
        </View>
        <Input
          isValid
          maxLength={18}
          placeholder="Tên tài khoản"
          value={name}
          onChangeText={onNameChange}
          containerStyle={s.root}
        />
      </View>
      {!getParam('account')(navigation) &&
        <Input
          isValid
          // maxLength={6}
          placeholder="Số dư ban đầu"
          value={initialBalance ? initialBalance.toString() : ''}
          onChangeText={onChangeBalance}
          keyboardType="numeric"
          containerStyle={s.balanceContainer}
          iconRight={icon}
        />

      }
    </ScreenWrapper>
    <KeyboardAvoidingView withHeader>
      {isValid &&
      <Button
        borderless
        title="Lưu"
        onPress={onSubmit}
      />
      }
    </KeyboardAvoidingView>
  </View>
);

AccountEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('account')(navigation) ? 'Chỉnh sửa tài khoản' : 'Tạo tài khoản'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

AccountEditor.propTypes = {
  navigation: T.object,
  name: T.string,
  onSubmit: T.func,
  isValid: T.bool,
  initialBalance: T.number,
  onNameChange: T.func,
  onChangeBalance: T.func,
  onToggleColorPicker: T.func,
  isColorPickerVisible: T.bool,
  onSelectColor: T.func,
  icon: T.object,
  color: T.string,
};

export default AccountEditor;
