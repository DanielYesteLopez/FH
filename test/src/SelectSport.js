import { Component } from 'react';
import logo from './images/appLogo.png';
import shoppingCart from './images/shoppingCart.jpg'
/*<img src={shoppingCart} alt="add item" width="30" background-color="white"/> */
import style from "./SelectSport.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button,Card } from 'react-bootstrap';
import { Text,View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navbar, Nav, Form,NavDropdown,Container } from 'react-bootstrap';
import Information from './Information';



const SelectSport =({navigation})=>{
  return(
    <View style={{ flex: 1}}>
    <div className = {style.topHeader}>
        <NeedHelp/>
    </div>
    <LogoImage/>
    <div className = {style.sportsImagesGrid}>
    <LogoImage/>
    <LogoImage/>
    <LogoImage/>
    <LogoImage/>
    <LogoImage/>
    </div>
    </View>
  );
}

const LogoImage = () =>(
    <img src={logo} 
    className= {style.topHeaderImage} 
    alt = "Logo"/>
    );

const NeedHelp = (props) =>(
        <Form.Text className={style.needHelpText} 
        onClick={() => {
          props.nav.navigate('Information')
         }}> 
        ¿Necesitas ayuda?
        </Form.Text>
    );
export default SelectSport;
