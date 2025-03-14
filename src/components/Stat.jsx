import axios from "axios";
import { useEffect, useState } from "react";


const Stat = () => {

    const [stats, setStats] = useState({
        tutorCount: 0,
        reviewCount: 0,
        languageCount: 0,
        userCount: 0
    });

    useEffect(() => {
        axios.get("http://localhost:5000/stats")
            .then(res => setStats(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-orange-300">
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Tutors</div>
                    <div className="stat-value">{stats.tutorCount}</div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Reviews</div>
                    <div className="stat-value">{stats.reviewCount}</div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Languages</div>
                    <div className="stat-value">{stats.languageCount}</div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{stats.userCount}</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;