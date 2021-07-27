import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
    return (
        <div className="global-container">
            <h1 className="home-title">
                Bienvenue au <span>Shop</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam consequatur voluptatum voluptate impedit obcaecati sint eveniet sapiente, eligendi voluptatem facere? Distinctio autem illo numquam nesciunt optio nemo consequatur cupiditate?</p>
            <img src={imgHomeShop} alt="accueil shop" />
        </div>
    )
}
