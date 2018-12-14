import { connect } from 'react-redux';
import { compose, hoistStatics, withState } from 'recompose';

import { getExpenseCategory, getIncomeCategory } from '../../modules/categories/selectors';
import { transactionsOperations } from '../../modules/transactions';
import CategoriesScreenView from './CategoriesScreenView';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const mapStateToProps = state => ({
  expenseCategories: getExpenseCategory(state.categories),
  incomeCategories: getIncomeCategory(state.categories),
});

const enhance = compose(
  connect(mapStateToProps, transactionsOperations),
  withState('selectedTabIndex', 'setSelectedTabIndex', 0),
);


export default hoistStatics(enhance)(CategoriesScreenView);
