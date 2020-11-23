import React from 'react'
import Card from './Card'
import Banner from './Banner'
import './Home.css'

function Home() {
    return (
        <div className="home">
           <Banner/> 
           <div className="home_section">
               <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoxzd-nHyiA3ouYKS6QWiHYEwtmq8woJJSQ&usqp=CAU" 
               title="3 Bedroom flat " description="Unique activities we can do together" />
               <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3XqdcxQiqmlJJkTF74Z3KwMZ3a5zJP3HaQ&usqp=CAU" 
               title="Penthouse in london" description="Spaces are more than just to sleep" />
               <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-njVBULIJTc4W-lHbGyzMzslSDuihWlzmZw&usqp=CAU" 
               title="Entire homes" description="Comfortable for private spaces"/>
               <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2SPHsG8fukvGfen83ovkwMOEjgtfabekjA&usqp=CAU" 
               title="Unique stays" description="Comfortable for private spaces"/>
           </div>
           <div className="home_section">
               <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2SPHsG8fukvGfen83ovkwMOEjgtfabekjA&usqp=CAU" 
               title="Unique stays" description="Comfortable for private spaces"/>
               <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-njVBULIJTc4W-lHbGyzMzslSDuihWlzmZw&usqp=CAU" 
               title="Entire homes" description="Comfortable for private spaces"/>
               <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3XqdcxQiqmlJJkTF74Z3KwMZ3a5zJP3HaQ&usqp=CAU" 
               title="Penthouse in london" description="Spaces are more than just to sleep" />
               <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoxzd-nHyiA3ouYKS6QWiHYEwtmq8woJJSQ&usqp=CAU" 
               title="3 Bedroom flat " description="Unique activities we can do together." />
           </div>
        </div>
    )
}

export default Home
