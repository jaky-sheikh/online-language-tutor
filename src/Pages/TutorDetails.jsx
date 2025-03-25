import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const TutorDetails = () => {

    const { id } = useParams();
    const [tutor, setTutor] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/tutor/${id}`)
            .then(res => res.json())
            .then(data => setTutor(data));
    }, [id]);

    const handleBookTutor = () => {
        const bookedInfo = {
            tutorId: tutor._id,
            tutorName: tutor.name,
            image: tutor.image,
            language: tutor.language,
            price: tutor.price,
            tutorEmail: tutor.email,
            email: user?.email
        };

        fetch("http://localhost:5000/booked-tutors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookedInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Booked Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };


    return (
        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-8 mt-10 text-center">
            <img src={tutor.image} alt={tutor.name} className="w-auto mx-auto h-auto rounded-xl" />
            <h2 className="text-2xl font-bold mt-5">{tutor.name}</h2>
            <p className="mt-3"><strong>Email:</strong> {tutor.email}</p>
            <p><strong>Language:</strong> {tutor.language}</p>
            <p><strong>Price:</strong> ${tutor.price}</p>
            <p><strong>Review:</strong> {tutor.review || 0}</p>
            <p className="mt-3 text-gray-600">{tutor.description}</p>

            <button
                onClick={handleBookTutor}
                className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
                Book
            </button>
        </div>
    );
};

export default TutorDetails;