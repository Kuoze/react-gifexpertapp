import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        //effect - Función a llamar
        getGifs( category ).then( setImages );

        // Retornamos algo -  opcional
        return () => {
            // cleanup
        }
    }, [ category ]); // Arreglo de dependencias. Si el objeto que hay dentro cambia, se ejecuta de nuevo
    // Si no cambia o no hay nada, no se volverá a ejecutar
 

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {/* <ol>
                {
                    images.map( img => {
                        //return <li key={id}>{title}</li>;
                        //return <img src={img.url} key={img.id} alt={img.title}/>;
                        return <GifGridItem key={img.id} img={img} />
                    })    
                }
            </ol> */}
                {
                    images.map(img => {
                        return <GifGridItem
                            key={img.id}
                            // img={img} 
                            {...img}
                        />
                    })
                }

            </div>
        </>

    )
}

export default GifGrid;
