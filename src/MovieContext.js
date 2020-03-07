import React, {useState, createContext} from 'react';


export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([

        {
            name: 'Harry Poter',
            price: '25$',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '15$',
            id: 23624
        },
        {
            name: 'Gu Gu Picigu',
            price: '18$',
            id: 23524
        }
         
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}

