import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const BookedTutors = () => {

    const { user } = useContext(AuthContext);
    const [bookedTutors, setBookedTutors] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/booked-tutors?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookedTutors(data))
    }, [user?.email]);

    const handleReview = (tutorId) => {
        fetch(`http://localhost:5000/tutors/review/${tutorId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Review Added!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="max-w-6xl mx-auto p-5">
            <h2 className="text-3xl font-bold mb-6 text-center">My Booked Tutors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bookedTutors.map((tutor, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-5">
                        <img src={tutor.image} alt="" className="h-auto w-auto rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{tutor.tutorName}</h3>
                        <h3 className="text-xl font-semibold mb-2">{tutor.language} Tutor</h3>
                        <p><strong>Price:</strong> ${tutor.price}</p>
                        <p><strong>Tutor Email:</strong> {tutor.tutorEmail}</p>
                        <button
                            onClick={() => handleReview(tutor.tutorId)}
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition"
                        >
                            Add Review
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookedTutors;