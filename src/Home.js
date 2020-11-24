import React from 'react'
import Card from './Card'
import Banner from './Banner'
import './Home.css'

function Home() {
    return (
        <div className="home">
           <Banner/> 
           <div className="home_section">
               <Card src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320" 
               title="Entire Homes"/>
               <Card src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320" 
               title="Cabins and cottages" />
               <Card src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320" 
               title="Uniques Stays" />
               <Card src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320" 
               title="Pets welcome" />
           </div>
        </div>
    )
}

export default Home
