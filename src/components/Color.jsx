import { Card } from 'react-bootstrap';
import CajaColor from './CajaColor';

const Color = ({color}) => {
    return (
        <Card className="col-10 col-lg-3 mb-3 mx-1 p-1">
            <Card.Header as="h5">{color.nombreColor}</Card.Header>
            <div className='mx-auto'>
                <CajaColor codigoColor={color.codigoColor}></CajaColor>
                {/* <div className='colorBox rounded my-3'></div> */}
                <p>{color.codigoColor}</p>
            </div>
        </Card>
    );
};

export default Color;