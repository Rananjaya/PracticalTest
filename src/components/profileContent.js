import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/colors';
const ProfileContent = ({birthday, gender, Contact, Studies,from,work,work_as}) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.secondWrapper}>
        <View style={{flex: 0.5}}>
          <Icon name="cake-layered" size={30} />
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.middelText}>Birth date</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={[styles.middelText, {color: COLORS.LogoTextColor}]}>
            {birthday}
          </Text>
        </View>
      </View>
      <View style={[styles.secondWrapper,{marginTop :10}]}>
        <View style={{flex: 0.5}}>
            {gender == "male" &&
                <Icon name="gender-male" size={30} />
            }
               {gender == "female" &&
                <Icon name="gender-female" size={30} />
            }
          
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.middelText}>{gender}</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text
            style={[styles.middelText, {color: COLORS.LogoTextColor}]}></Text>
        </View>
      </View>
      <View style={[styles.secondWrapper,{marginTop :10}]}>
        <View style={{flex: 0.5}}>
          <Icon name="home" size={30} />
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.middelText}>Contact</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={[styles.middelText, {color: COLORS.LogoTextColor}]}>
            {Contact}
          </Text>
        </View>
      </View>
      <View style={[styles.secondWrapper,{marginTop :10}]}>
        <View style={{flex: 0.5}}>
          <Icon name="home" size={30} />
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.middelText}>Studies At</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={[styles.middelText, {color: COLORS.LogoTextColor}]}>
            {Studies}
          </Text>
        </View>
      </View>
      <View style={[styles.secondWrapper,{marginTop :10}]}>
        <View style={{flex: 0.5}}>
          <Icon name="home" size={30} />
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.middelText}>From</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={[styles.middelText, {color: COLORS.LogoTextColor}]}>
            {from}
          </Text>
        </View>
      </View>
      <View style={[styles.secondWrapper,{marginTop :10}]}>
        <View style={{flex: 0.5}}>
          <Icon name="home" size={30} />
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.middelText}>Wrok At</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={[styles.middelText, {color: COLORS.LogoTextColor}]}>
            {work}
          </Text>
        </View>
      </View>
      <View style={[styles.secondWrapper,{marginTop :10}]}>
        <View style={{flex: 0.5}}>
          <Icon name="home" size={30} />
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.middelText}>Wrok At</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={[styles.middelText, {color: COLORS.LogoTextColor}]}>
            {work}
          </Text>
        </View>
      </View>
      <View style={[styles.secondWrapper,{marginTop :10}]}>
        <View style={{flex: 0.5}}>
          <Icon name="home" size={30} />
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.middelText}>Wrok as a</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={[styles.middelText, {color: COLORS.LogoTextColor}]}>
            {work_as}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 30,
  },
  secondWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middelText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
