import moment from 'moment';
import { connect } from 'react-redux';
import { compose, hoistStatics, withHandlers, withState } from 'recompose';

import { transactionsOperations } from '../../modules/transactions';
import { getTrendsStats } from '../../modules/transactions/selectors';
import { startOfCurrentMonth } from '../../utils/dateHelpers';
import TrendsScreenView from './TrendsScreenView';

const mapStateToProps = (state, props) => ({
  stats: getTrendsStats(state, props),
});

const enhance = compose(
  
  withState(
    'dateForFiltering',
    'setDateForFiltering',
    { from: startOfCurrentMonth, to: moment().endOf('day') }
  ),
  withState('listRef', 'setListRef', null),
  withState('selectedTabIndex', 'setSelectedTabIndex', 0),

  withHandlers({
    onSetDateForFiltering: props => val => {
      setTimeout(() => props.listRef.scrollTo({ x: 0, y: 0, animated: true }));
      props.setDateForFiltering(val);
    },
  }),
  connect(mapStateToProps, transactionsOperations),
  // withProps(props => ({
  //   a: console.log(props.stats),
  // })),
  
);

export default hoistStatics(enhance)(TrendsScreenView);
