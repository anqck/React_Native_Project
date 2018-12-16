import { Alert } from 'react-native';

const bang = (val) => {
  const text = {
    2014: 'Khánh An',
  }[val];

  if (text) Alert.alert(`${val}!`, text, [{ text: '💋' }]);
};

export default bang;
