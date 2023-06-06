import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../../models';
import {useAuthContext} from '../../contexts/AuthContext';
import { useNavigation } from "@react-navigation/native";

const Profile = () => {

  const { dbUser } = useAuthContext();

  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat + "" || "0");
  const [lng, setLng] = useState(dbUser?.lng + "" || "0");


  const { sub, setDbUser } = useAuthContext();

  const navigation = useNavigation();

  const onSave = async () => {

    if (dbUser) {
      await updatUser();
    }else{
      await createUser();
    }
    navigation.goBack();
  };

    const updatUser = async () => {
      const user = await DataStore.save(
        User.copyOf(dbUser, (updated) => {
          updated.name = name;
          updated.address = address;
          updated.lat = parseFloat(lat);
          updated.lng = parseFloat(lng);

        })
      );
        setDbUser(user);
    };

    const createUser = async () => {
      try{
        const user = await DataStore.save(new User({name, address, lat: parseFloat(lat), lng: parseFloat(lng), sub })
        );
        console.log(user);
        setDbUser(user);
  
      }catch (e) { Alert.alert("Error", e.message); }
    }

   


  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />

    <TouchableOpacity onPress={onSave} style={styles.button}>
      <Text style={styles.primeText}>Save</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Auth.signOut()} style={styles.secondaryButton}>
      <Text style={styles.secondaryButtonText}>Sign Out</Text>
   </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FFE030',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    margin: 15,
  },
  primeText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  secondaryButtonText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },

});

export default Profile;
