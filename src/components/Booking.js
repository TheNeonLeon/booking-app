import './Booking.css';
import { Icon } from '@iconify/react';
const booking = () => {

    return(
        <div>
            <div className="booking-container">
                <h1>Book ticket</h1>
            <div className="city-container">
                <h2>STOCKHOLM</h2> 
                <Icon className="icon" icon="akar-icons:arrow-right" />
                <h2>GOTHENBURG</h2>
            </div>
            </div>
        </div>
    );
}
export default booking;