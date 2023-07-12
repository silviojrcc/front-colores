import { Button, Card } from 'react-bootstrap';
import CajaColor from './CajaColor';
import { borrarColor, obtenerColores } from './helpers/queries';
import Swal from 'sweetalert2';

const Color = ({color, setColores}) => {

    const eliminarColor = () => {
        borrarColor(color._id).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            Swal.fire("Color eliminado", `El color ${color.nombreColor} se ha eliminado correctamente`, "success");
            obtenerColores().then((respuesta) => {
              if(respuesta ) {
                setColores(respuesta)
              }
            })
          } else {
            Swal.fire("Error", `La receta ${color.nombreColor} no se ha eliminado correctamente`, "error");
          }
        })
      }

    return (
        <Card className="col-10 col-lg-3 mb-3 mx-1 p-1 bg-dark text-light">
            <Card.Header as="h5">{color.nombreColor}</Card.Header>
            <div className='mx-auto'>
                <CajaColor codigoColor={color.codigoColor}></CajaColor>
            </div>
            <Card.Footer className='d-flex align-items-baseline justify-content-between'>
                <p>{color.codigoColor}</p>
                <Button onClick={() => {eliminarColor(color._id)}} variant='danger'>Borrar</Button>
            </Card.Footer>
        </Card>
    );
};

export default Color;