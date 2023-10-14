import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import NormalHeader from '../../components/normalHeader';

import {getAllUsersbyId} from '../../redux/feature/GetAllUserById';
import Avatar from '../../components/avatar';
import ProfileContent from '../../components/profileContent';
import LoginButton from '../../components/LoginButton';
import COLORS from '../../consts/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {data, isSuccess, loading, message} = useSelector(state => state.login);
  const {data: newData} = useSelector(state => state.getuserbyid);

  console.log('allllllllllllll', newData);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (isFocused) {
      if (data !== undefined) {
        console.log('insdie_Proifle');
        dispatch(getAllUsersbyId({id: data.id}));
      }
    }
  }, [isFocused]);

  return (
    <SafeAreaView styles={styles.mainWrapper}>
      <View>
        <NormalHeader headerText={'Profile'} />
      </View>
      <ScrollView>
        <View style={styles.avterWrapper}>
          <Avatar imageUrl={newData.image} />
        </View>
        <View>
          <ProfileContent 
          birthday={newData.birthDate}
          gender={newData.gender}
          Contact={newData.phone}
          Studies={newData.university}
          from={newData?.address?.city}
          work={newData?.company?.name}
          work_as={newData?.company?.title}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <LoginButton ButtonText={"Logout"} onpress={()=>{
              AsyncStorage.clear();
              navigation.navigate("Login");
          }}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  avterWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonWrapper : {
    justifyContent : "center",
    alignItems : "center",
    marginTop : 30
  }
});
