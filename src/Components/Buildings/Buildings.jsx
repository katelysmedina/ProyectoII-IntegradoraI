import React from "react";
import '../Buildings/Buildings.css';
import Cards from "../Cards/Cards";

export default function Buildings(){

    let images = [
        {
            source: "img3.jpg",
            description:"Espacios más amplios"
        },
        {
            source: "img4.jpg",
            description:"Vive con seguridad"
        },
        {
            source: "img5.jpg",
            description:"Vive en armonia con la naturaleza"
        },
        {
            source: "img7.jpg",
            description:"Vive con lujo"
        }
    ]

    return (
        <div className="container-buildings">
            <div className="row-buildings">
                <div className="bannerTitle">
                    <h2>Nuestro desarrollo</h2>
                </div>
            </div>
            <div className="row-buildings">
                    <div className="cards">
                    {
                        images.map((image, index) => (<Cards key={index} source={image.source} description={image.description}/>))
                    }
                    </div>
            </div>
        </div>
    );
}
