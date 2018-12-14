import { connect } from 'react-redux';
import { compose, hoistStatics, withProps, withState } from 'recompose';

import { transactionsOperations } from '../../modules/transactions';
import { getAccountsStats, getCategoriesStats } from '../../modules/transactions/selectors';
import { formatDateForPie, startOfDay } from '../../utils/dateHelpers';
import TransactionsStatisticsScreenView from './TransactionsStatisticsScreenView';

const mapStateToProps = (state, props) => ({
  dataForChart: getAccountsStats(state, props),
  dataForList: getCategoriesStats(state, props),
});

const ChartColor = [];
const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  withState('selectedTabIndex', 'setSelectedTabIndex', 0),
  connect(mapStateToProps, transactionsOperations),

  withProps(props => ({
    totalValue: props.dataForChart.reduce((accum, current) => accum + current.y, 0),
    date: formatDateForPie(props.dateForFiltering),
    colorForChart: props.dataForChart.map(d => d.fill),
  })),
);

export default hoistStatics(enhance)(TransactionsStatisticsScreenView);
