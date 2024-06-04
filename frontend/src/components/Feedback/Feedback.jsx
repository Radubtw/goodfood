import React, { useContext, useState } from 'react';
import './Feedback.css';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import { StoreContext } from '../../Context/StoreContext';

const BASE_URL = 'http://localhost:4000';

const Feedback = () => {
    const { token } = useContext(StoreContext);
    const [showForm, setShowForm] = useState(false);
    const [reservationData, setReservationData] = useState({
        capacity: 0, // Default capacity is set to 0
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: ''
    });

    const handleImageClick = (capacity) => {
        setReservationData(prevState => ({
            ...prevState,
            capacity: capacity // Set the capacity based on the clicked table
        }));
        setShowForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservationData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Reservation data:', reservationData);
        if (!token) {
            toast.error("Pentru a face o rezervare este necesară autentificarea");
            // Redirect the user to the login page if not authenticated
            // Example: navigate('/login');
            return;
        }
        try {
            const response = await fetch(`${BASE_URL}/api/reserve/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservationData)
            });
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // Log the response from the server
                toast.success("Rezervare plasată cu succes");
            } else {
                throw new Error('Failed to add reservation');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("A apărut o eroare. Rezervarea nu a putut fi plasată.");
        }
        
        setShowForm(false);
        setReservationData({
            capacity: 0,
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: ''
        });
    };
    
    return (
        <div className='feedback' id='feedback'>
            <p> Rezervare mese</p>
            <div className="tables">
                <div className="table" onClick={() => handleImageClick(1)}>
                    <img src={assets.table} alt="" />
                    <p>O persoană</p>
                </div>
                
                <div className="table" onClick={() => handleImageClick(2)}>
                    <img src={assets.table} alt="" />
                    <p>Două persoane</p>
                </div>
                <div className="table" onClick={() => handleImageClick(4)}>
                    <img src={assets.table} alt="" />
                    <p>Patru Persoane</p>
                </div>
                
                <div className="table" onClick={() => handleImageClick(8)}>
                    <img src={assets.table} alt="" />
                    <p>Opt Persoane</p>
                </div>
            </div>
            {showForm && (
                <form className="reservation-form" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="year"
                        placeholder="Year"
                        value={reservationData.year}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="month"
                        placeholder="Month"
                        value={reservationData.month}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="day"
                        placeholder="Day"
                        value={reservationData.day}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="hour"
                        placeholder="Hour"
                        value={reservationData.hour}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="minute"
                        placeholder="Minute"
                        value={reservationData.minute}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            )}      
        </div>
    );
};

export default Feedback;
