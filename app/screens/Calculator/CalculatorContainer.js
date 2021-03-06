import R from 'ramda';
import { DeviceEventEmitter } from 'react-native';
import { connect } from 'react-redux';
import { compose, hoistStatics, lifecycle, withHandlers, withState } from 'recompose';

import screens from '../../constants/screens';
import { withPaschal, withPickParams } from '../../utils/enhancers';
import CalculatorScreenView from './CalculatorScreenView';

const defaultExpr = '0';

const hasDotInLastNumber = R.pipe(
  R.reject(R.complement(isNaN)),
  R.last,
  R.equals('.'),
);


const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const mapStateToProps = (state, props) => ({
  value: R.pathOr('', ['transactions', 'byId', props.id, 'value'], state),
});

    const Clear= () =>
    {
  updateExpr(defaultExpr);
};

const enhance = compose(
  withPickParams,
  connect(mapStateToProps),
  withState('isIncome', 'setIsIncome', false),

  withState('expr', 'updateExpr', ({ value }) => value || defaultExpr),
  withHandlers({
    onBackspace: ({ expr, updateExpr }) => () => {
      let newExpr = expr.toString();
      console.log(newExpr,R.init(newExpr.toString()) );
      updateExpr(newExpr.length > 1 ? R.init(newExpr) : defaultExpr);
    },
    onClear: ({ updateExpr }) => () => {
      updateExpr(defaultExpr);
    },
    onSwitch:({ expr, navigation, id, isIncome }) => () => {

      navigation.navigate(screens.Calculator, { type: 'income' });
    },
    onPressToken: ({ expr, updateExpr }) => (token) => {
      const lastToken = R.last(expr);
      let newExpr = expr;
      if (newExpr > 999999999999 || newExpr.length > 12 || newExpr > 999999999 && token === '000') return;
      if (token === '.' && !hasDotInLastNumber(expr)) {
        newExpr += token;
      } else if (token === '000' && !isNaN(lastToken)) {
        if (expr !== '0') newExpr += token;
      } else if (!isNaN(token)) {
        if (expr === defaultExpr) {
          newExpr = token;
        } else {
          newExpr += token;
        }
      }

      updateExpr(newExpr);
    },
    onSubmitResult: ({ expr, navigation, id, isIncome }) => () => {
      withPaschal(expr);
      console.log(id);
      if(typeof id !== "undefined") {
        console.log('undefined id');
        navigation.navigate(
          screens.TransactionEditor, { value: isIncome ? +expr : -expr, id, isIncome });
    }
    else
    {

      isIncome?navigation.navigate(
        'AddIncome', { value: isIncome ? +expr : -expr, id, isIncome, refresh: Clear }):
      navigation.navigate(
        'AddExpense', { value: isIncome ? +expr : -expr, id, isIncome });
    }

    },
  }),

  lifecycle({
    componentWillMount() {
      const { setIsIncome, value, updateExpr, type,navigation } = this.props;

      DeviceEventEmitter.addListener('Refresh', (e)=>{updateExpr(0); console.log('Refresh');})
  },
    componentDidMount() {
      // const { setIsIncome, value, updateExpr, type } = this.props;

      const { setIsIncome, value, updateExpr, type,navigation } = this.props;

     

      // this._subscribe = this.props.navigation.addListener('didFocus', () => {
        
      //  })
      // console.log(value);
      // this.props.navigation.addListener ('willFocus', () =>{
      //   updateExpr(0);
      // });

      setIsIncome(type === 'income');
       if (value) updateExpr(Math.abs(value));
    },
  }),
);

export default hoistStatics(enhance)(CalculatorScreenView);
