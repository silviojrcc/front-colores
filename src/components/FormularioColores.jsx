import { useEffect, useState } from 'react';
import { Form, FormControl, FormLabel } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import ListaColores from './ListaColores';
import CajaColor from './CajaColor';
import { crearColor, obtenerColores } from './helpers/queries';
import Swal from 'sweetalert2';


const FormularioColores = () => {

    const [nombreColor, setNombreColor] = useState("");
    const [codigoColor, setCodigoColor] = useState("#000");
    const [colores, setColores] = useState([]);

    useEffect(() => {
        obtenerColores().then((respuesta) => {
            if (respuesta) {
                console.log(respuesta);
                setColores(respuesta);
            } else {
                setColores([]);
            }
        });
    }, [])

    const handleSubmit =  (e) => {
        e.preventDefault();

        const color = { nombreColor, codigoColor };
        crearColor(color).then((respuesta) => {
            if (respuesta && respuesta.status === 201) {
                Swal.fire("Color creado", `El color ${color.nombreColor} se ha creado correctamente`, "success");
                setNombreColor("");
                setColores([...colores, color]);
            } else {
                Swal.fire("Error", `El color ${color.nombrecolor} no se ha creado correctamente`, "error");
            }
        });
    };

    return (
        <div className='container mt-5'>
            <Card className='bg-dark text-light'>
                <Card.Header as="h5">Gestionar colores</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className='d-flex align-items-center justify-content-around'>
                            <CajaColor codigoColor={codigoColor}></CajaColor>
                            <div>
                                <div className='d-flex justify-content-center align-items-center my-3'>
                                    <FormLabel className='mx-3'>Selecciona el color</FormLabel>
                                    <FormControl onChange={(e) => setCodigoColor(e.target.value)} type='color'></FormControl>
                                </div>
                                <FormControl onChange={(e) => setNombreColor(e.target.value)} value={nombreColor} placeholder='Ingresa el nombre del color' type="text" required></FormControl>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Button type='submit' variant="primary">Agregar Color</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <hr className="text-light mt-4" />
            <ListaColores colores={colores} setColores={setColores}></ListaColores>
        </div>
    );
};

export default FormularioColores;