import React from 'react'
import { mobiles } from '../../../javascripts/products'
import Card from './Card';
import "./Card.css"

const Cards = () => {
  return (
    <>
      <section className="cards_main_section">
        <h1 className="Group_of_card_top">Latest Mobile Phone</h1>
        <div className="cardmain_div">
          {mobiles.map((items) => {
            return (
              <Card
                title={items.name}
                key={items.id}
                id={items.id}
                productname={items.name}
                image={items.Image}
                price={items.price}
              />
            );
          })}
        </div>
        <h1 className="Group_of_card_top">Vivo Mobiles Phone</h1>
        <div className="cardmain_div">
          {mobiles.map((items) => {
            if (items.name.toLowerCase().includes("vivo"))
              return (
                <Card
                  title={items.name}
                  key={items.id}
                  id={items.id}
                  productname={items.name}
                  image={items.Image}
                  price={items.price}
                />
              );
          })}
        </div>
        <h1 className="Group_of_card_top">Samsung Mobiles Phone</h1>
        <div className="cardmain_div">
          {mobiles.map((items) => {
            if (items.name.toLowerCase().includes("samsung"))
              return (
                <Card
                  title={items.name}
                  key={items.id}
                  id={items.id}
                  productname={items.name}
                  image={items.Image}
                  price={items.price}
                />
              );
          })}
        </div>
      </section>
    </>
  );
};

export default Cards;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiUjCkbkxn9CVulbuTZB9XexP95cAAa3E",
  authDomain: "mobile-website-51800.firebaseapp.com",
  projectId: "mobile-website-51800",
  storageBucket: "mobile-website-51800.appspot.com",
  messagingSenderId: "243522609887",
  appId: "1:243522609887:web:d2a8a092198fc54aa67f6a",
  measurementId: "G-6Z7LBPYFSM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);