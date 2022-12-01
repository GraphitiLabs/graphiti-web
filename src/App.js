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
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
            Add zk-verifiable AI inference to your stack</h1>
            
            <h2 className='text-2xl text-white font-bold mb-10'>The Graphiti Protocol Fast. Scalable. Intelligent</h2>
          </div>  

      </div>


      {/* SLIDE 2*/}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>

          <div className=' px-40 flex flex-col items-center justify-center duration-500'>
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
            Connect powerful machine learning models to your smart contracts</h1>
          </div>  

      </div>


      {/* SLIDE 3*/}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>

          <div className=' px-40 flex flex-col items-center justify-center duration-500'>
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
            Offchain computation, on chain verification</h1>
            
            <h2 className='text-2xl text-white font-bold mb-10'>Leveraging zero knowledge proofs to provide proof of execution and proof of accuracy</h2>
          </div>  

      </div>

            {/* SLIDE 4*/}

            <div className='snap-start bg-black w-screen h-screen flex items-center justify-between'>

              <div className=' px-40 flex flex-col items-center justify-end duration-500'>
                <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
                Use Cases</h1>
                


                <div className='flex flex-row justify-between relative'>

                <div className='absolute inset-0 bg-purple-600 rounded-lg blur'></div>

                  <div className='m-2 p-5 bg-black w-70 h-70 rounded-lg shadow-lg relative'>
                    
                    <h2 className='text-xl text-gray-100 font-bold mb-10 text-center'>
                    Leverage linear regression models to trade on DEXes
                    </h2>
                  </div>


                  <div className='m-2 p-5 bg-black w-70 h-70 rounded-lg shadow-lg relative'>

                    <h2 className='text-xl text-gray-100 font-bold mb-10 text-center'>
                    Use SVM prediction in your DApps
                    </h2>
                    </div>

                  <div className='m-2 p-5 bg-black w-70 h-70 rounded-lg shadow-lg relative'>
                    
                    <h2 className='text-xl text-gray-100 font-bold mb-10 text-center'>
                    Assess credit risk using XGBoost in Lending Protocols
                    </h2>
                    </div>


                </div>






              </div>  

          </div>


      {/* SLIDE 5*/}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>

          <div className=' px-40 flex flex-col items-center justify-center duration-500'>
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
            Roadmap</h1>
          </div>  

      </div>

      {/* SLIDE 6*/}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>

          <div className=' px-40 flex flex-col items-center justify-center duration-500'>
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
            Founders</h1>
            <div className='flex flex-row justify-center'>
              <div className='m-10 bg-white w-96 h-96 rounded-lg shadow-lg flex flex-col items-center justify-center'>
                <h1 className='text-4xl text-black font-bold mb-2 break-normal text-center'>
                  Founder 1
                </h1>
                <h2 className='text-xl text-black font-bold mb-10 text-center'>
                  Founder 1 description
                </h2>
              </div>
              <div className='m-10 bg-white w-96 h-96 rounded-lg shadow-lg flex flex-col items-center justify-center'>
                <h1 className='text-4xl text-black font-bold mb-2 break-normal text-center'>
                  Founder 2
                </h1>
                <h2 className='text-xl text-black font-bold mb-10 text-center'>
                  Founder 2 description
                </h2>
                </div>
                </div>

          </div>  

      </div>


      {/* SLIDE 7*/}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>

          <div className=' px-40 flex flex-col items-center justify-center duration-500'>
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
            Advisors</h1>
          </div>  

      </div>


      {/* FORM SLIDE */}

      <div className='snap-start bg-black w-screen h-screen items-center'>

      <h1 className='px-60 py-10 text-4xl text-white font-bold mb-2 text-center'>Get the latest updates on what we are building! Whitepaper coming soon…stay tuned!</h1>

      <div className='flex items-center justify-center '>
      <div className='relative'>

          <div className='absolute inset-0 bg-purple-600 rounded-lg blur'></div>
            <Mailchimp/>
      </div>
      </div>
      </div>




      

        




    </div>
    </div>


    
  );
}

export default App;
