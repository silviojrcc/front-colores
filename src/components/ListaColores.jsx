import React from 'react';
import Color from './Color';

const ListaColores = ({colores}) => {

    return (
        <div className={`rounded border border-dark p-3 my-5 ${(colores.length > 0) ? " " : "d-none" }`}>
            <h4 className='text-light'>Colores guardados</h4>
            <div className='d-flex row justify-content-around mt-4'>
                {colores.map((color, index) => (
                    <Color key={index} color={color} />
                ))}
            </div>
        </div>
    );
};

export default ListaColores;