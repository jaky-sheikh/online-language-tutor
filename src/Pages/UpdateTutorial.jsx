import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { AuthContext } from '../Provider/AuthProvider';

const UpdateTutorial = () => {

    // const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [tutorial, setTutorial] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/tutors/${id}`)
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedTutorial = {
            name: tutorial.name,
            email: tutorial.email,
            // name: user.displayName,
            // email: user.email,
            image: form.image.value,
            language: form.language.value,
            price: form.price.value,
            details: form.details.value,
            review: tutorial.review
        };

        fetch(`http://localhost:5000/tutors/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTutorial)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Updated!', 'Tutorial updated successfully!', 'success');
                    navigate('/my-tutorials');
                }
            });
    };

    return (
        <div className="max-w-xl mx-auto p-5 mt-10 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-5 text-center">Update Tutorial</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input type="text" value={tutorial.name || ''} readOnly className="w-full p-2 border rounded" />
                <input type="email" value={tutorial.email || ''} readOnly className="w-full p-2 border rounded" />
                <input type="text" name="image" defaultValue={tutorial.image} placeholder="Image URL" className="w-full p-2 border rounded" required />
                <input type="text" name="language" defaultValue={tutorial.language} placeholder="Language" className="w-full p-2 border rounded" required />
                <input type="number" name="price" defaultValue={tutorial.price} placeholder="Price" className="w-full p-2 border rounded" required />
                <textarea name="details" defaultValue={tutorial.details} placeholder="Description" className="w-full p-2 border rounded" required></textarea>
                <input type="text" value={tutorial.review || 0} readOnly className="w-full p-2 border rounded" />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Update</button>
            </form>
        </div>
    );
};

export default UpdateTutorial;