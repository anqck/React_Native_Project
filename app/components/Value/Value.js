import React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import s from './styles';


const Value = ({
  currency: { sign },
  sign1,
  children,
  containerStyle,
  style,
  value,
  type,
  withoutPlus,
}) => {
  const text =  Math.abs(value).toString().replace(/(.)(?=(\d{3})+$)/g,'$1,')+' ₫' ;
  const incomeText = `${withoutPlus ? '' : '+ '}${text}`;

  return (
    <View style={[s.value, containerStyle]}>
      {{
        other: <Text style={[s.text, s.other, style]}>{text}</Text>,
        income: <Text style={[s.text, s.income, style]}>{incomeText}</Text>,
        expense: <Text style={[s.text, s.expense, style]}>- {text}</Text>,
      }[type]}
      {children}
    </View>
  );
};

Value.propTypes = {
  currency: T.shape({
    name: T.string,
    sign: T.string,
  }),
  sign1: T.string,
  children: T.element,
  containerStyle: ViewPropTypes.style,
  style: Text.propTypes.style,
  type: T.oneOf(['other', 'income', 'expense']),
  value: T.oneOfType([T.string, T.number]),
  withoutPlus: T.bool,
};

export default Value;
