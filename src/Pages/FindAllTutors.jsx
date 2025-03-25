import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindAllTutors = () => {

    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        fetch(`http://localhost:5000/tutors?search=${search}`)
            .then(res => res.json())
            .then(data => setTutors(data));
    }

    useEffect(() => {
        fetch("http://localhost:5000/tutors")
            .then(res => res.json())
            .then(data => setTutors(data));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Find All Tutors</h2>

            <div className="flex justify-center gap-2 mb-8">
                <input
                    type="text"
                    placeholder="Search by language..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded w-64"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {tutors.map(tutor => (
                    <div key={tutor._id} className="bg-white shadow-lg rounded-xl p-5">
                        <img src={tutor.image} alt={tutor.name} className="w-auto h-auto rounded" />
                        <h2 className="text-xl font-bold mt-3">{tutor.name}</h2>
                        <p><span className="font-semibold">Language:</span> {tutor.language}</p>
                        <p><span className="font-semibold">Review:</span> {tutor.review || 0}</p>
                        <button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                            onClick={() => navigate(`/tutor/${tutor._id}`)}
                        >
                            Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindAllTutors;