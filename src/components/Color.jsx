import { Button, Card } from 'react-bootstrap';
import CajaColor from './CajaColor';

const Color = ({color, borrarColor}) => {
    return (
        <Card className="col-10 col-lg-3 mb-3 mx-1 p-1 bg-dark text-light">
            <Card.Header as="h5">{color.nombreColor}</Card.Header>
            <div className='mx-auto'>
                <CajaColor codigoColor={color.codigoColor}></CajaColor>
            </div>
            <Card.Footer className='d-flex align-items-baseline justify-content-between'>
                <p>{color.codigoColor}</p>
                <Button onClick={() => {borrarColor(color)}} variant='danger'>Borrar</Button>
            </Card.Footer>
        </Card>
    );
};

export default Color;