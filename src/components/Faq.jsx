import React from 'react';
import { Bounce } from 'react-awesome-reveal';

const Faq = () => {
    return (
        <div className='mb-4'>
            <Bounce><h2 className='text-center text-3xl font-bold'>FAQ(Frequently Asked Questions)</h2></Bounce>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">How does tutorhive work?</div>
                <div className="collapse-content">
                    <p>TutorHive helps you achieve your language learning ambitions. There's no subscription or rigid schedule. Learn when you want, as much as you want.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How many tutorhive lessons a week can I take?</div>
                <div className="collapse-content">
                    <p>We don't want to limit your learning. As long as you and your teacher have the time, you can take as many lessons as you want.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Is tutorhive worth it for learning a language?</div>
                <div className="collapse-content">
                    <p>Yes! tutorhive offers the freedom and flexibility to learn with a teacher you like, at a price you can afford, with a schedule that works for you.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;