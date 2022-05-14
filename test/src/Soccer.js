import { Component } from 'react';
import logo from './images/appLogo.png';
import boots from './images/botas.jpg'
/*<img src={shoppingCart} alt="add item" width="30" background-color="white"/> */
import style from "./Soccer.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button,Card,ButtonGroup} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Text,View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navbar, Nav, Form,NavDropdown,Container } from 'react-bootstrap';
import Information from './Information';
import ListGroup from 'react-bootstrap/ListGroup'


const Soccer =({navigation})=>{
    return(
      <View style={{ flex: 1}}>
      <div className = {style.topHeader}>
          <LogoImage/>
        <BackMain nav={navigation}/>
        <OtherSport nav={navigation} />
      </div>
    <div className = {style.soccerBuy}>
        <Filter/>
        <SoccerItemSelector/>
        <BootsImage/>

    </div>
      </View>
    );
  }

const BackMain = (props) =>(
    <Form.Text className={style.backMain} 
    onClick={() => {
      props.nav.navigate('MainPage')
     }}> 
    Inicio
    </Form.Text>
);

const OtherSport = (props) =>(
    <Form.Text className={style.backsport} 
    onClick={() => {
      props.nav.navigate('SelectSport')
     }}> 
    Selecciona otro deporte
    </Form.Text>
    );
const LogoImage = () =>(
        <img src={logo} 
        className= {style.headerPanelImage} 
        alt = "Logo"/>
        );
const BootsImage = () =>(
    <img src={boots} 
    className= {style.bootsImage} 
    alt = "Botas"/>
    );
const Filter = () =>(
    <Dropdown style={{left:'5%'}}>
<DropdownButton
as={ButtonGroup}
align={{ lg: 'end' }}
variant="white"
title="Ordenar por..."
id="dropdown-menu-align-responsive-1"
>
<Dropdown.Item eventKey="1">Talla</Dropdown.Item>
<Dropdown.Item eventKey="2">Color</Dropdown.Item>
</DropdownButton>
</Dropdown>
    );

const SoccerItemSelector = () =>(
    <Card style={{ width: '20%',height:'fit-content' ,left:'60%'}}>
    <ListGroup variant="flush" active>
    <ListGroup.Item>Calzado</ListGroup.Item>
    <ListGroup.Item>Ropa</ListGroup.Item>
    <ListGroup.Item>Complementos</ListGroup.Item>
  </ListGroup>
  </Card>
);

export default Soccer;