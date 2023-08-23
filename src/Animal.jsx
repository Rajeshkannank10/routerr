import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Animal() {
    const { name }= useParams();
    const animalInfo={
        
        dog: "dog" && <img src="../images/doggy.jpg" alt="doggy" style={{ width: '400px', }}/> ,
        cat:"The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family"&& <img src="../images/catty.jpg" alt="doggy" style={{ width: '400px', }}/>,
        rabbit:"Rabbits, also known as bunnies or bunny rabbits, are small mammals in the family Leporidae (which also contains the hares) of the order Lagomorpha (which also contains the pikas). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds of domestic rabbit."&& <img src="../images/rabbit.jpg" alt="doggy" style={{ width: '400px', }}/>
    };
    const Info= animalInfo[name] || "animal is not fount";
  return (
    <div>   
        <h2>{name}</h2>
        <p>{Info}</p>
        </div>
  )
}

export default Animal