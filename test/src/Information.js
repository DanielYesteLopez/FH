import { Component } from 'react';
import logo from './images/appLogo.png';
import style from "./MainPage.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Text,View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navbar, Nav, Form,NavDropdown,Container } from 'react-bootstrap';



const Information =()=>{
  return(
    <View>
    <div >
      <Text>Info</Text>
    </div>
    </View>
  );
}

export default Information;