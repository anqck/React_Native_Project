import R from 'ramda';
import { connect } from 'react-redux';
import { compose, hoistStatics } from 'recompose';

import { withPickParams } from '../../utils/enhancers';
import TransferDetailScreenView from './TransferDetailScreenView';

const mapStateToProps = (state, props) => {
  const transfer = R.pathOr({}, ['transfers', 'byId', props.id], state);
  const fromId = R.pathOr('', ['from'], transfer);
  const fromName = state.accounts.byId[fromId].name;
  const toId = R.pathOr('', ['to'], transfer);
  const toName = state.accounts.byId[toId].name;

  return ({ transfer, fromName, toName });
};

const enhance = compose(
  withPickParams,
  connect(mapStateToProps),
);
export default hoistStatics(enhance)(TransferDetailScreenView);
