import { useEffect } from 'react';
import './App.css';
import Mailchimp from './components/Mailchimp';
import Navbar from './components/Navbar';





//black, purple, white, gray
function App() {
  //make an empty useEffect
useEffect(() => {


}, []);

  return (

    <div >

      <div className='relative'>
      <div className='absolute inset-0 bg-purple-600 rounded-lg blur'></div>
        <Navbar />
      </div>
      
      <div className='snap-y h-screen w-screen overflow-scroll'>
      
      {/* SLIDE 1*/}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>

          <div className=' px-40 flex flex-col items-center justify-center duration-500'>
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal'> 
            Add zk-verifiable AI inference to your stack</h1>
            
            <p2 className='text-xl text-white font-bold mb-10'>The Graphiti Protocol Fast. Scalable. Intelligent</p2>
          </div>  

      </div>


      {/* SLIDE 1*/}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>

          <div className=' px-40 flex flex-col items-center justify-center duration-500'>
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal'> 
            Add zk-verifiable AI inference to your stack</h1>
            
            <p2 className='text-xl text-white font-bold mb-10'>The Graphiti Protocol Fast. Scalable. Intelligent</p2>
          </div>  

      </div>


      {/* FORM SLIDE */}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>
      <div className='relative'>
          <div className='absolute inset-0 bg-purple-600 rounded-lg blur'></div>
            <Mailchimp/>
      </div>
      </div>




      

        




    </div>
    </div>


    
  );
}

export default App;
