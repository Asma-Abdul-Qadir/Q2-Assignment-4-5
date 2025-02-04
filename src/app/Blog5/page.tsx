import React from 'react';
import Image from 'next/image';

const Blog5: React.FC = () => {
    return (
        <div className="bg-[#1F1F1F] pt-24 p-5"> {/* Adjusted padding-top for gap with navbar */}
            <div className="max-w-7xl mx-auto p-10 bg-[#2B2C28] rounded-lg shadow-lg">
                <h1 className='text-center text-6xl text-[#FFFFFF] font-bold mb-8'>Building Resilience: Strengthening Your Inner Core</h1>
                <div className="mb-6">
                    <Image src='/resilience1.jpg' alt='Building Resilience' width={600} height={400} className='w-full h-auto rounded-lg' />
                </div>
                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>Introduction</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold mt-2'>
                    Resilience is the ability to bounce back from adversity, adapt to challenges, and keep moving forward. In today&apos;s fast-paced and often unpredictable world, building resilience is essential for personal growth and emotional well-being. It enables us to navigate life&apos;s ups and downs with strength and confidence.
                </p>
                
                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>The Importance of Resilience</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold'>
                    Resilience offers numerous benefits, including:
                </p>
                <ul className='mt-3 list-disc list-inside'>
                    <li className='text-2xl text-[#EAEAEA] mt-2'>Improved emotional regulation and stress management.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'>Enhanced problem-solving skills and adaptability.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'>Increased confidence and self-efficacy.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'>Better relationships and social support networks.</li>
                </ul>

                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>Characteristics of Resilient Individuals</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold'>
                    Resilient people often share common traits, such as:
                </p>
                <ul className='mt-3 list-disc list-inside'>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Optimism:</b> A positive outlook on life helps them see challenges as opportunities for growth.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Flexibility:</b> They adapt to new circumstances and are open to change.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Strong problem-solving skills:</b> Resilient individuals tackle obstacles head-on and seek solutions.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Self-awareness:</b> They understand their emotions and how they respond to stress.</li>
                </ul>

                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>Strategies for Building Resilience</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold'>
                    Here are some effective strategies to help you cultivate resilience:
                </p>
                <ul className='mt-3 list-disc list-inside'>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Practice Self-Care:</b> Prioritize your physical, emotional, and mental well-being through regular exercise, healthy eating, and adequate rest.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Build Strong Relationships:</b> Foster connections with supportive friends and family who can provide encouragement during tough times.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Develop a Growth Mindset:</b> Embrace challenges and view setbacks as opportunities to learn and grow.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Practice Mindfulness:</b> Engage in mindfulness techniques such as meditation or deep breathing to help manage stress and improve emotional regulation.</li>
                </ul>

                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>Conclusion</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold'>
                    Building resilience is an ongoing journey that empowers you to face life&apos;s challenges with strength and grace. By cultivating resilience, you not only enhance your ability to cope with adversity but also improve your overall quality of life. Embrace the process, and remember that each challenge you overcome strengthens your inner core!
                </p>
            </div>
        </div>
    );
}

export default Blog5;
