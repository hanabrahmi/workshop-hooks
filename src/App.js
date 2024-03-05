import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/NavBars.js';

import Filter from './Components/Filter/Filter.js';

function App() {
  const [ratingChange, setRatingChanged] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [newMovie,setNewMovie] = useState({});
  const [movieData, setMovieData] = useState ( [ {
    id: Math.random(),
    title: "Black Tea",
    posterUrl: "https://www.gaumont.com/sites/com/files/styles/poster_450_610/public/2024-01/24_01_24_1706094643_0_visuel-blacktea.jpg.webp?itok=khryZiGm",
    rating: 3, 
    description: "Aya, a young Ivorian woman in her thirties, says no on her wedding day, to everyone's astonishment. Emigrated to China, she works in a tea export shop with Cai, a 45-year-old Chinese man. Aya and Cai fall in love but will their story survive the tumults of their pasts and the prejudices?"
},
{
    id: Math.random(),
    title: "Cat & Dog",
    posterUrl: "https://www.gaumont.com/sites/com/files/styles/poster_450_610/public/2024-01/24_01_12_1705065952_CHIEN%26CHAT_120x160-BD.jpg.webp?itok=3lMGZVO4",
    rating: 2, 
    description: "Diva, a cat and star of social media, and Chichi, a stray dog, find themselves separated from their owners. A crazy journey unfolds between Montreal and New York for both the humans, who have lost track of their precious animals, and the pets, fending for themselves to reunite with their owners."
} ,
{
    id: Math.random(),
    title: "Come sing-along with Do, Re & Mi",
    posterUrl: "https://www.gaumont.com/sites/com/files/uploads/2021/08/doremi-1024x683.jpg",
    rating: 3, 
    description: "Do, Re & Mi is a preschool series about music, emotion, inspiration, joy, frustration… and three birds whose love of music and adventure makes them best friends!"
} ,
{
    id: Math.random(),
    title: "Lupin",
    posterUrl: "https://www.gaumont.com/sites/com/files/styles/poster_450_610/public/2023-02/22_11_15_1668516174_ressources_2020-12-02_LUPIN_KA_Vertical_RGB_FR.jpg.webp?itok=MZLbSW1V",
    rating: 4, 
    description: "Inspired by the adventures of Arsene Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family."
},
{
    id: Math.random(),
    title: "Brooklyn Nine-Nine",
    posterUrl: "https://fr.web.img6.acsta.net/pictures/20/01/10/10/23/0734068.jpg",
    rating: 5, 
    description: "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct."
},
{
    id: Math.random(),
    title: "Hôtel Transylvanie",
    posterUrl: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/90/37/26/20366411.jpg",
    rating: 3, 
    description: "Hotel Transylvania: Directed by Genndy Tartakovsky. With Adam Sandler, Andy Samberg, Selena Gomez, Kevin James. Dracula, who operates a high-end resort away ..."
}
]);
  const handelSave = () => {
    setMovieData( [
      ...movieData,
      newMovie
    ]);
  }
  return (
   <>
   <Navbar 
   ratingChange={ratingChange}
   setRatingChanged={setRatingChanged}
   setSearchInput={setSearchInput}
   newMovie={newMovie}
   setNewMovie={setNewMovie}
   handelSave={handelSave}
  
   />
   <Filter ratingChange={ratingChange}
   searchInput={searchInput}
   newMovie={newMovie}
   
   movieData={movieData}
  />

   </>
  );
}
export default App;
