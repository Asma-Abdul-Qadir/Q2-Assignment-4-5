import React from 'react';
import Image from 'next/image';

const Blog3: React.FC = () => {
    return (
        <div className="bg-[#1C1C1E] pt-20 pb-10 px-5 font-sans">
            <div className="max-w-4xl mx-auto bg-[#2E2F33] rounded-lg shadow-xl overflow-hidden">
                <div className="p-10">
                    <h1 className="text-center text-5xl text-yellow-300 mb-8">
                        Setting Achievable Goals: Your Path to Success
                    </h1>
                    
                    <div className="mb-10">
                        <Image
                            src='/goals1.webp'
                            alt='Setting Achievable Goals'
                            width={1200}
                            height={700}
                            className='w-full h-auto rounded-lg object-cover shadow-md'
                        />
                    </div>

                    <div className="text-lg text-[#D1D1D1] leading-relaxed">
                        <h2 className='capitalize mt-3 text-4xl text-[#FFA500] font-semibold mb-4'>
                            Introduction
                        </h2>
                        <p className="mb-6 text-xl">
                            Setting achievable goals is crucial for personal growth and success. Goals give us direction, motivate us to take action, and provide a sense of accomplishment when we achieve them. However, the key to effective goal-setting lies in ensuring that our goals are realistic and attainable, allowing us to stay focused and committed.
                        </p>

                        <h2 className='capitalize mt-3 text-4xl text-[#FFA500] font-semibold mb-4'>
                            Why Set Goals?
                        </h2>
                        <p className='mb-6 text-xl'>
                            Goals serve several important purposes:
                        </p>
                        <ul className='list-disc list-inside space-y-2 pl-5'>
                            <li className='text-xl'>They provide clarity and direction in our lives.</li>
                            <li className='text-xl'>They help us prioritize our time and efforts.</li>
                            <li className='text-xl'>They boost our confidence and motivation.</li>
                            <li className='text-xl'>They encourage us to push beyond our limits and achieve more.</li>
                        </ul>

                        <h2 className='capitalize mt-8 text-4xl text-[#FFA500] font-semibold mb-4'>
                            Characteristics of Achievable Goals
                        </h2>
                        <p className='mb-6 text-xl'>
                            To ensure your goals are achievable, consider the following characteristics:
                        </p>
                        <ul className='list-disc list-inside space-y-2 pl-5'>
                            <li className='text-xl'><b>Specific:</b> Goals should be clear and well-defined, answering the questions of what you want to achieve.</li>
                            <li className='text-xl'><b>Measurable:</b> You should be able to track your progress and know when you have achieved your goal.</li>
                            <li className='text-xl'><b>Achievable:</b> Goals should be realistic, considering your current resources and constraints.</li>
                            <li className='text-xl'><b>Relevant:</b> Ensure your goals align with your values and long-term objectives.</li>
                            <li className='text-xl'><b>Time-bound:</b> Set a timeline for your goals to create urgency and motivation.</li>
                        </ul>

                        <h2 className='capitalize mt-8 text-4xl text-[#FFA500] font-semibold mb-4'>
                            Strategies for Setting Achievable Goals
                        </h2>
                        <p className='mb-6 text-xl'>
                            Here are some effective strategies to help you set and achieve your goals:
                        </p>
                        <ul className='list-disc list-inside space-y-2 pl-5'>
                            <li className='text-xl'><b>Write Down Your Goals:</b> Documenting your goals makes them more tangible and increases accountability.</li>
                            <li className='text-xl'><b>Break Goals into Smaller Steps:</b> Divide larger goals into manageable tasks to avoid feeling overwhelmed.</li>
                            <li className='text-xl'><b>Review and Adjust:</b> Regularly assess your progress and adjust your goals as necessary to stay on track.</li>
                            <li className='text-xl'><b>Celebrate Achievements:</b> Acknowledge your accomplishments, no matter how small, to stay motivated.</li>
                        </ul>

                        <h2 className='capitalize mt-8 text-4xl text-[#FFA500] font-semibold mb-4'>
                            Conclusion
                        </h2>
                        <p className='text-xl'>
                            Setting achievable goals is a powerful practice that can lead to personal fulfillment and success. By ensuring your goals are specific, measurable, achievable, relevant, and time-bound, you can create a roadmap for your journey. Embrace the process of setting goals, stay committed, and watch as you transform your aspirations into reality!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog3;
