import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball', 'Codegueass'];

    const [ categories, setCategories ] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // const newArr = [... categories]; // Copia
    //     // newArr.push(`Bleach ${newArr.length}`);
    //     //setCategories(['HunterXHunter', ...categories, 'Bleach']);
    //     setCategories( cats => [...cats, 'HunterXHunter']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={() => handleAdd() }>Agregar</button> */}
            {/* Lista de categorias */}
            
            <ol>
                { 
                    categories.map( cat => <GifGrid key={cat} category={cat} />)
                }
            </ol>

            
        </>
    )
}

export default GifExpertApp;