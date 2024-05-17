import React, { useState } from 'react';
import './ReserveTable.css';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
const ReserveTable = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: ''
    });

    const handleImageClick = () => {
        setShowForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission
        // For now, let's just log the form data
        console.log('Form submitted:', formData);
        // Show toast notification
        
        // After submission, clear the form data
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: ''
        });
        // After submission, hide the form
        setShowForm(false);
        toast.success("Rezervare plasată cu succes");
    };
    

    return (
        <div className='reserve-table' id='reserve-table'>
            <p> Rezervare mese</p>
            <div className="tables">
                <div className="table">
                    <img src={assets.table} alt="" onClick={handleImageClick} />
                    <p>O persoană</p>
                </div>
                <div className="table">
                    <img src={assets.table} alt="" onClick={handleImageClick} />
                    <p>Două persoane</p>
                </div>
                <div className="table">
                    <img src={assets.table} alt="" onClick={handleImageClick} />
                    <p>Patru persoane</p>
                </div>
                <div className="table">
                    <img src={assets.table} alt="" onClick={handleImageClick} />
                    <p>Șase persoane</p>
                </div>
                <div className="table">
                    <img src={assets.table} alt="" onClick={handleImageClick} />
                    <p>Opt persoane</p>
                </div>
            </div>
            {showForm && (
                <form className="reservation-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            )}      
        </div>
    );
};


export default ReserveTable;
