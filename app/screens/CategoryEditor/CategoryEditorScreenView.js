import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { getParam } from '../../utils/navHelpers';
import DeleteButton from './DeleteButton';
import {
  Input,
  Button,
  Text,
  KeyboardAvoidingView,
  Select,
  ScreenWrapper,
  HeaderTitle,
  IconsPickerModal,
  BigRoundIconButton,
} from '../../components';
import s from './styles';
import { colors, dimensions } from '../../styles';


const CategoryEditor = (props) => {
  const {
    icons,
    isValid,
    onSubmit,
    onChangeIcon,
    setName,
    icon,
    name,
    togglePicker,
    isPickerVisible,
    onSelectCategory,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>
      <IconsPickerModal
          icons={icons}
          onIconPick={onChangeIcon}
          isVisible={isPickerVisible}
          hideModal={togglePicker}
          selectedIconName={icon}
        />
        <View>
          <View style={s.container}>
            <View style={s.secondContainer}>
              <BigRoundIconButton
                onPress={togglePicker}
                name={icon}
                backgroundColor={colors.white}
                tintColor={colors.greyDarker}
                size={dimensions.bigIconSize}
              />
              <Text style={s.label}>Chọn biểu tượng</Text>
            </View>

            <Input
              isValid
              placeholder="Tên danh mục"
              value={name}
              onChangeText={setName}
              containerStyle={s.root}
            />
          </View>

          {!getParam('category')(navigation) &&
            <Select
              options={['Chi', 'Thu']}
              containerStyle={s.selectorContainer}
              style={s.selector}
              defaultValue="Chọn kiểu"
              selectorsWidth={dimensions.containerWidth}
              onSelect={onSelectCategory}
              textStyle={s.selectTextStyle}
              optionHeight={dimensions.verticalIndent * 2.8}
            />
          }

        </View>
       
      </ScreenWrapper>

      <KeyboardAvoidingView withHeader>
        {isValid &&
        <Button
          borderless
          secondaryOpacity
          title="Lưu"
          onPress={onSubmit}
        />
        }
      </KeyboardAvoidingView>

    </View>
  );
};

CategoryEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('category')(navigation) ? 'Sửa hạng mục thu/chi' : 'Thêm hạng mục thu/chi'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

CategoryEditor.propTypes = {
  name: T.string,
  onSubmit: T.func,
  isValid: T.bool,
  icon: T.string,
  icons: T.array,
  onChangeIcon: T.func,
  setName: T.func,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  onSelectCategory: T.func,
  navigation: T.object,
};

export default CategoryEditor;
