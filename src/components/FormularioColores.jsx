import { useEffect, useState } from 'react';
import { Form, FormControl, FormLabel } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';


const FormularioColores = () => {

    const [nombreColor, setNombreColor] = useState("");
    const [codigoColor, setCodigoColor] = useState("#000");
    const [colores, setcolores] = useState([]);

    useEffect(() => {
        const colorBox = document.querySelector('.colorBox');
        if (colorBox) {
          colorBox.style.backgroundColor = codigoColor;
        }
    }, [codigoColor]);

    const handleSubmit =  (e) => {
        e.preventDefault();

        const color = { nombreColor, codigoColor };
        setcolores([...colores, color]);
    }

    return (
        <div className='container'>
            <Card>
                <Card.Header as="h5">Gestionar colores</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className='d-flex align-items-center justify-content-around'>
                            <div className='colorBox rounded'></div>
                            <div>
                                <div className='d-flex justify-content-center align-items-center my-3'>
                                    <FormLabel className='mx-3'>Selecciona el color</FormLabel>
                                    <FormControl onChange={(e) => setCodigoColor(e.target.value)} type='color'></FormControl>
                                </div>
                                <FormControl onChange={(e) => setNombreColor(e.target.value)} placeholder='Ingresa el nombre del color' type="text"></FormControl>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Button type='submit' variant="primary">Agregar Color</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FormularioColores;