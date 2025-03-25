import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyTutorial = () => {

    const { user } = useContext(AuthContext);
    const [tutorials, setTutorials] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/tutors?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTutorials(data))
    }, [user?.email]);
    // console.log(user.email);

    // delete function
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tutors/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = tutorials.filter(item => item._id !== id);
                            setTutorials(remaining);
                        }
                    });
            }
        })
    }

    // update function
    const handleUpdate = (id) => {
        navigate(`/update-tutorial/${id}`);
    }

    return (
        <div className="max-w-6xl mx-auto p-5">
            <h2 className="text-3xl font-bold mb-6 text-center">My Tutorials</h2>
            <div className="overflow-x-auto">
                <table className="table w-full border">
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Review</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutorials.map(tutorial => (
                            <tr key={tutorial._id}>
                                <td>{tutorial.name}</td>
                                <td><img src={tutorial.image} alt="" className="w-20 h-16 object-cover" /></td>
                                <td>{tutorial.language}</td>
                                <td>${tutorial.price}</td>
                                <td>{tutorial.details}</td>
                                <td>{tutorial.review}</td>
                                <td>
                                    <button
                                        onClick={() => handleUpdate(tutorial._id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(tutorial._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTutorial;