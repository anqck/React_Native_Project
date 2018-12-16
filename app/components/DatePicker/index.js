import {
  compose,
  withState,
  withHandlers,
  defaultProps,
} from 'recompose';
import moment from 'moment';
import DatePicker from './DatePicker';
import { dimensions } from '../../styles';


const enhance = compose(
  defaultProps({
    mode: 'datetime',
    androidMode: 'default',
    format: 'DD/MM/YYYY HH:mm',
    confirmBtnText: 'Confirm',
    cancelBtnText: 'Decline',
    icon: {
      name: 'calendar',
      size: dimensions.iconSize,
    },
  }),

  withState('displayedDate', 'setDisplayedDate', null),

  withHandlers({
    onSelectDate: props => (date) => {
      props.onSelectDate && props.onSelectDate(moment(date, 'DD/MM/YYYY HH:mm'), date); // eslint-disable-line
      props.setDisplayedDate(date);
    },
  }),
);

export default enhance(DatePicker);
