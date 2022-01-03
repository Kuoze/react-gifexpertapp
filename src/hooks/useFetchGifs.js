import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

/* Un hook no es más que una función y pueden tener estado */
export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {        
        getGifs( category ).then( imgs => {

            // setTimeout( () => {
                
            // }, 3000);
            setState({
                data: [...imgs],
                loading: false
            });
           
        });
    }, [ category ]); 

    // setTimeout( () => {
    //     setState({
    //         data: [1, 4,5,3123, 12, 2],
    //         loading: false
    //     });
    // }, 3000);

    return state; // { data:[], loading: true}
};