import React from 'react';
import Image from 'next/image';

const Blog1: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-5">
            <div className="max-w-4xl mx-auto p-10 bg-gray-900 rounded-lg shadow-xl mt-16">
                <h1 className="text-center text-5xl text-yellow-300 mb-8">Embracing Change: A Path to Growth</h1>
                <div className="mb-6">
                    <Image 
                        src="/change1.png" 
                        alt="Embracing Change" 
                        width={500} 
                        height={300} 
                        className="rounded-lg w-full h-auto" 
                    />
                </div>

                <h2 className="text-4xl text-orange-400 mt-6">Introduction</h2>
                <p className="text-xl text-gray-300 mt-2">
                    Change is an inevitable part of life, often bringing uncertainty and discomfort. However, it also presents unique opportunities for personal growth and self-discovery. Learning to embrace change can transform our perspective, allowing us to navigate life’s challenges with resilience and optimism.
                </p>

                <h2 className="text-4xl text-orange-400 mt-6">The Nature of Change</h2>
                {[{
                    title: 'Understanding Change',
                    description: 'Change can be external, such as a new job or moving to a different city, or internal, like changes in our beliefs and values. Acknowledging that change is a natural process can help us cope with its challenges.'
                }, {
                    title: 'The Fear of Change',
                    description: 'It’s common to fear the unknown that comes with change. This fear can manifest as anxiety or resistance, often stemming from our desire for comfort and stability. Recognizing these feelings is the first step toward overcoming them.'
                }, {
                    title: 'Benefits of Embracing Change',
                    description: 'Embracing change can lead to new opportunities, personal growth, and a broader perspective on life. It encourages adaptability and resilience, essential skills in today’s fast-paced world.'
                }, {
                    title: 'Strategies to Embrace Change',
                    description: 'To effectively embrace change, consider adopting a growth mindset, staying open to new experiences, and seeking support from friends or mentors. Practicing mindfulness can also help you stay grounded during transitions.'
                }, {
                    title: 'Finding Positivity in Change',
                    description: 'Change often brings unexpected positives. It can lead to new friendships, career advancements, or self-discovery. Keeping a journal to reflect on these changes can help highlight their benefits.'
                }].map(section => (
                    <div key={section.title} className="mt-4">
                        <h3 className="text-3xl text-yellow-300">{section.title}</h3>
                        <p className="text-lg text-gray-300 mt-1">{section.description}</p>
                    </div>
                ))}

                <h2 className="text-4xl text-orange-400 mt-6">Unique Perspectives</h2>
                <ul className="list-disc list-inside text-lg text-gray-300 mt-2">
                    <li className="mt-2"><b><u>Seek Support:</u></b> Surround yourself with supportive people who encourage you to embrace change and provide guidance during transitions.</li>
                    <li className="mt-2"><b><u>Practice Self-Compassion:</u></b> Be kind to yourself during difficult changes. Acknowledge that it's okay to feel uncertain and give yourself time to adjust.</li>
                    <li className="mt-2"><b><u>Stay Curious:</u></b> Approach change with curiosity rather than fear. Explore new opportunities and experiences that come your way.</li>
                </ul>
                
                <h2 className="text-4xl text-orange-400 mt-6">Conclusion</h2>
                <p className="text-xl text-gray-300 mt-2">
                    Embracing change is not always easy, but it is essential for personal growth and development. By shifting our mindset and viewing change as an opportunity rather than a threat, we can navigate life's uncertainties with confidence. Remember, every change brings the potential for new beginnings, so welcome it with open arms!
                </p>
            </div>
        </div>
    );
}

export default Blog1;
