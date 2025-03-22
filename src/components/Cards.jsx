import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiArrowRightWideLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Cards = () => {

    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/lanCard")
            .then(res => setCards(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='container mx-auto px-2 my-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
                {
                    cards.map((card, index) => (
                        <div key={index}
                            className='flex items-center justify-between bg-white shadow-md p-5 rounded-lg cursor-pointer hover:shadow-lg transition'
                            onClick={() => navigate(`/find-tutors/${card.title}`)}
                        >
                            <div className='flex items-center gap-4'>
                                <img src={`${card.logo}`} className='w-12 h-12' alt={card.title} />
                                <div>
                                    <h3 className="text-lg font-semibold">{card.title}</h3>
                                    <p className="text-gray-500">{card.teachers} teachers</p>
                                </div>
                            </div>
                            <span><RiArrowRightWideLine></RiArrowRightWideLine></span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;