
import { When } from 'react-if'
import Image from 'react-bootstrap/Image';


const API_KEY= import.meta.env.VITE_API_KEY;

function Map(props) {
    return (
        <When condition={props.latitude && props.longitude} >
            <Image src= {`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.latitude},${props.longitude}&size=400x300&format=png`} width="500" fluid />;
        </When>
    )
}

export default Map;