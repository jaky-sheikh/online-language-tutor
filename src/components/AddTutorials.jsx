import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTutorials = () => {

    const { user } = useContext(AuthContext);
    const [language, setLanguage] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const tutorialData = {
            name: user.displayName,
            email: user.email,
            image,
            language,
            price,
            description,
            review: 0,
        };
        // console.log(tutorialData);

        fetch("http://localhost:5000/tutors", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tutorialData),
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Tutorial Added Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/find-all-tutors");
                }
            })
    };

    return (
        <div className="max-w-xl mx-auto p-5 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-5 text-center">Add New Tutorial</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={user.displayName}
                    readOnly
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    value={user.email}
                    readOnly
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddTutorials;