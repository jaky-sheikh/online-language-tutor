import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FindTutors = () => {

    const { category } = useParams();
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tutors/${category}`)
            .then(res => res.json())
            .then(data => setTutors(data));
    }, [category]);

    console.log(tutors);
    console.log(category);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-5">All {category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tutors.map(tutor => (
                    <div key={tutor._id} className="border p-4 mb-2 rounded-lg shadow">
                        <img src={tutor.image} alt={tutor.name} className="w-auto h-auto object-cover rounded" />
                        <h3 className="text-xl mt-3">{tutor.name}</h3>
                        <p>Language: {tutor.language}</p>
                        <p>Price: ${tutor.price} / hour</p>
                        <p>Review: {tutor.review} ⭐</p>
                        <p>{tutor.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindTutors;