import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"
import Title from './Title'

export default class Services extends Component {
state={
    services:[{
        icon:<FaCocktail/>,
        title:"free coctails",
        info:"lorem"

    },
        {
            icon: <FaHiking />,
            title: "free coctails",
            info: "lorem"

        },
        {
            icon: <FaShuttleVan />,
            title: "free coctails",
            info: "lorem"

        },
        {
            icon: <FaBeer />,
            title: "free coctails",
            info: "lorem"

        }

]
}

    render() {
        return (
            <section className="services">
                <Title  title='services' />
               <div  className="services-center">
                    {this.state.services.map((item,index) =>{
                   return (
                      <article key={index} className="service">
                          <span>{item.icon}</span>
                          <h6>{item.title}</h6>
                         <p>{item.info}</p>
                          </article>
                   );
               })}
               </div>
            </section>
        )
    }
}
