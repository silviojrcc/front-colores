import React from 'react';

const CajaColor = ({codigoColor}) => {

    const cajaStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: codigoColor
    }
    
    return (
        <div style={cajaStyle} className='rounded my-3'>
            
        </div>
    );
};

export default CajaColor;