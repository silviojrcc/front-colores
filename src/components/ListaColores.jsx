import React from 'react';
import Color from './Color';

const ListaColores = ({colores}) => {
    return (
        <div className='rounded border p-3'>
            <h4>Colores guardados</h4>
            <div className='d-flex row justify-content-around mt-4'>
                {colores.map((color, index) => (
                    <Color key={index} color={color} />
                ))}
            </div>
        </div>
    );
};

export default ListaColores;