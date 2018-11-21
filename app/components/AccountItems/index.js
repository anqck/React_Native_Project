import React from 'react';
import PropTypes from 'prop-types';

const AccountItem = ({
    accountId,
    name,
    style,
    containerStyle,
    color,
    isAddButton,
    onPress,
    balance,
    ...props
  }) => (
    <TouchableItem
      useForeground
      onPress={() => onPress(accountId)}
      style={[s.container, containerStyle]}
      {...props}
    >
      <View
        style={[
          s.accountContainer,
          style,
          !isAddButton && { backgroundColor: color },
        ]}
      >
        {isAddButton ?
          <Image
            style={s.image}
            resizeMode="stretch"
            source={addAccount}
          />
          :
          <View>
            {balance > 9999999 ?
              <Text style={s.toLargeText}>Oops, too large money to display it 😁</Text>
              :
              <Value
                style={[s.value, { fontSize: calcValueSize(Math.round(balance)) }]}
                containerStyle={s.valueContainer}
                value={Math.round(balance)}
                withoutPlus
              />
          }
          </View>
        }
        <View style={s.subtitleContainer}>
          <Text
            style={isAddButton ? s.addButtonSubtitle : [s.subtitle, { fontSize: calSubTitle(name) }]}
          >
            {name}
          </Text>
        </View>
      </View>
  
    </TouchableItem>
  );