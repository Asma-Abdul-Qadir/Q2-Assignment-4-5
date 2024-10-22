import React from 'react';
import Image from 'next/image';

const Blog6 = () => {
    return (
        <div className="bg-[#1F1F1F] pt-24 p-5"> {/* Added padding-top for gap with navbar */}
            <div className="max-w-7xl mx-auto p-10 bg-[#2B2C28] rounded-lg shadow-lg"> {/* Increased max width */}
                <h1 className='text-center text-6xl text-[#FFFFFF] font-bold mb-8'>The Power of Journaling: Unlocking Your Potential</h1>
                <div className="mb-6">
                    <Image src='/journal1.jpg' alt='The Power of Journaling' width={600} height={400} className='w-full h-auto rounded-lg' />
                </div>
                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>Introduction</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold mt-2'>
                    Journaling is more than just putting pen to paper; it's a powerful tool for self-discovery and personal growth. By regularly writing down your thoughts, feelings, and experiences, you can unlock insights about yourself, improve your mental well-being, and enhance your creativity. This blog explores the transformative power of journaling and offers practical tips for getting started.
                </p>
                
                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>Benefits of Journaling</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold'>
                    The benefits of journaling are numerous and impactful:
                </p>
                <ul className='mt-3 list-disc list-inside'>
                    <li className='text-2xl text-[#EAEAEA] mt-2'>Improves emotional clarity and mental health.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'>Enhances self-discipline and accountability.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'>Stimulates creativity and problem-solving skills.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'>Provides a safe space for self-reflection and healing.</li>
                </ul>

                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>Types of Journaling</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold'>
                    There are various styles of journaling to suit different needs and preferences:
                </p>
                <ul className='mt-3 list-disc list-inside'>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Reflective Journaling:</b> Focus on daily experiences and emotions, allowing for deeper self-reflection.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Gratitude Journaling:</b> Write down things you are grateful for, promoting positivity and appreciation.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Bullet Journaling:</b> Use a system of bullet points to organize tasks, goals, and notes efficiently.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Creative Journaling:</b> Combine writing with art, doodles, or collages to express your creativity.</li>
                </ul>

                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>Tips for Effective Journaling</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold'>
                    Here are some tips to make your journaling practice more effective:
                </p>
                <ul className='mt-3 list-disc list-inside'>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Set a Regular Schedule:</b> Choose a specific time each day or week to write, creating a habit.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Write Freely:</b> Allow your thoughts to flow without judgment. Don’t worry about grammar or structure.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Use Prompts:</b> If you’re unsure what to write about, use prompts to spark inspiration.</li>
                    <li className='text-2xl text-[#EAEAEA] mt-2'><b>Keep It Private:</b> Make your journal a safe space where you can express yourself freely.</li>
                </ul>

                <h2 className='capitalize mt-3 text-4xl text-[#FFFFFF]'>Conclusion</h2>
                <p className='text-2xl text-[#EAEAEA] font-bold'>
                    The power of journaling lies in its ability to foster self-awareness, creativity, and emotional health. By dedicating time to reflect on your thoughts and experiences, you can unlock your potential and navigate life's challenges with greater clarity and resilience. So grab a notebook, start writing, and embark on your journey of self-discovery through the art of journaling!
                </p>
            </div>
        </div>
    );
}

export default Blog6;
