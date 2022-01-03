import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );
    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            {/* { loading ? <p>Cargando...</p> : (
                <div className='card-grid'>               
                    {
                        data.map(img => {
                            return <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        })
                    }
                </div>
            )} */}
            { loading && <p className="animate__animated animate__flash">Cargando ...</p>}
            <div className="card-grid">
                {
                    images.map(img => ( // Para evitar el return
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;
