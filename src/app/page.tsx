import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const posts = [
  {
    title: 'Embracing Change',
    description: 'Change is the only constant in life. Learn how to adapt and thrive amidst uncertainty.',
    image: '/change.jpeg', 
    link: '/Blog1',
  },
  {
    title: 'Mindfulness and Meditation',
    description: 'Discover the power of mindfulness and meditation to enhance your mental well-being and clarity.',
    image: '/mindfullness.jpg',
    link: '/Blog2',
  },
  {
    title: 'Setting Achievable Goals',
    description: 'Explore strategies for setting realistic and achievable goals that propel you towards success.',
    image: '/goals.jpg',
    link: '/Blog3',
  },
  {
    title: 'Overcoming Fear',
    description: 'Fear can hold us back. Learn techniques to overcome your fears and step into your power.',
    image: '/fear.jpg',
    link: '/Blog4',
  },
  {
    title: 'Building Resilience',
    description: 'Resilience is key to personal development. Find out how to cultivate a resilient mindset.',
    image: '/resilience.jpg',
    link: '/Blog5',
  },
  {
    title: 'The Power of Journaling',
    description: 'Unlock your potential through the practice of journaling. Discover its benefits for self-reflection.',
    image: '/journaling.jpg',
    link: '/Blog6',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Development Blog</title>
        <meta name="description" content="Explore articles on personal growth and development." />
      </Head>
      <div className="w-full min-h-screen overflow-auto bg-gradient-to-b from-gray-800 to-gray-900 p-6">
        <h1 className="text-4xl text-center text-yellow-300 mb-10 font-serif">Personal Development Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className='bg-gray-700 border border-yellow-500 rounded-lg p-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden flex flex-col'>
              <div className="relative w-full h-0 pb-[56.25%] mb-4"> 
                <Image 
                  src={post.image} 
                  alt={`${post.title} - ${post.description}`} 
                  layout="fill"
                  objectFit="cover" 
                  className="rounded-lg transition-transform transform hover:scale-110"
                  priority 
                />
              </div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-2">{post.title}</h2>
              <p className="text-gray-200 flex-grow mb-4 font-bold">{post.description}</p>
              <Link href={post.link} aria-label={`Read more about ${post.title}`}>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-yellow-400 shadow-md">
                  Read More
                </button>
              </Link>
              <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
