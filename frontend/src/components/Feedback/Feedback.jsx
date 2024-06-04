import React, { useContext, useState } from 'react';
import './Feedback.css';
import { toast } from 'react-toastify';
import { StoreContext } from '../../Context/StoreContext';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const { user } = useContext(StoreContext);

    const handleRatingClick = (star) => {
        setRating(star);
    };

    const handleSubmit = async () => {
        if (submitted) {
            return;
        }

        try {
            if (!user || !user.email) {
                throw new Error('User data is missing or incomplete');
            }

            const response = await fetch('/api/feedback/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    feedback: rating
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                toast.success('Feedback-ul tău a fost trimis cu succes. Mulțumim!');
            } else {
                throw new Error(data.message || 'Unknown error');
            }
        } catch (error) {
            console.error('There was an error!', error);
            toast.error('Feedback-ul nu a putut fi trimis. Te rugăm să încerci din nou mai târziu.');
        }
    };

    return (
        <div className='feedback-container'>
            <div className='feedback' id='feedback'>
                <p>Feedback</p>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map(star => (
                        <span
                            key={star}
                            className={star <= rating ? 'star filled' : 'star'}
                            onClick={() => handleRatingClick(star)}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
                <button  onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Feedback;
