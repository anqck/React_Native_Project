import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import screens from '../../constants/screens';

import { View, FlatList, TouchableOpacity } from 'react-native';
import {
  ScreenWrapper,
  Subtitle,
  CategoriesList,
  SegmentedControl,
  TabContainer,
  Icon,
} from '../../components';
import { getParam } from '../../utils/navHelpers';
import { categoriesTypes as types } from '../../constants/categories';
import s from './styles';
import { colors } from '../../styles';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const goEditCategory = navigation => (category) => {
  navigation.navigate(screens.CategoryEditor, {
    title: 'Edit category',
    category,
  });
};

const goAddCategory = navigation => () => {
  navigation.navigate(screens.CategoryEditor, {
    title: 'New category',
  });
};

const tabs = [types.income, types.expense];

const Categories = ({
  navigation,
  incomeCategories,
  expenseCategories,
  selectedTabIndex,
  setSelectedTabIndex,
}) => {
  const onSelectCategory = getParam('onSelectCategory')(navigation) || goEditCategory(navigation);

  return (
    <ScreenWrapper style={s.container}>
      <Subtitle leftText="Categories" withLittlePadding />
      <SegmentedControl
        values={tabs}
        selectedIndex={selectedTabIndex}
        onTabPress={setSelectedTabIndex}
      />

      <TabContainer
        selectedTabIndex={selectedTabIndex}
        tabIndex={0}
        topOffset={90}
      >
        <CategoriesList
          categories={incomeCategories}
          onSelect={onSelectCategory}
        />
      </TabContainer>
      <TabContainer
        selectedTabIndex={selectedTabIndex}
        tabIndex={1} // eslint-disable-line
        topOffset={90}
      >
        <CategoriesList
          categories={expenseCategories}
          onSelect={onSelectCategory}
        />
      </TabContainer>

 

    </ScreenWrapper>
  );
};

Categories.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity
      onPress={onNavigate(navigation, screens.AccountEditor, { title: 'Thêm tài khoản' })}
    >
      <Icon
        name="plus"
        color={colors.green}
        width={60}
        height={24}
      />
    </TouchableOpacity>
  ),
});


Categories.propTypes = {
  navigation: T.object,
  incomeCategories: T.array,
  expenseCategories: T.array,
  selectedTabIndex: T.number,
  setSelectedTabIndex: T.func,
};

export default Categories;
