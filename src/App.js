import { useEffect } from 'react';
import './App.css';
import Mailchimp from './components/Mailchimp';
import Navbar from './components/Navbar';
import Shrek from './assets/shrek.jpeg';
import Team from './components/Team';



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
      
      <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll'>
      
      {/* SLIDE 1*/}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center ' id='home'>

          <div className=' px-40 flex flex-col items-center justify-center duration-500'>
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
            Add ZK-verifiable AI inference to your stack</h1>
            
            <h2 className='pt-20 text-3xl text-white font-bold mb-10'> 

            <div className='flex divide-x divide-gray-600 text-transparent bg-clip-text bg-gradient-to-r from-mimosa to-latore'>



              <div className=' pl-50 px-5 '>Fast</div>
              <div className=' px-5'>Scalable</div>
              <div className=' px-5'>Intelligent</div>


            </div>

            </h2>
          </div>  

      </div>



      {/* SLIDE 3*/}

      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>

          <div className=' px-40 flex flex-col items-center justify-center duration-500'>
            <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
            Leverages ZK proofs to guarantee execution and accuracy</h1>
            
            <h2 className='text-2xl text-white font-bold mb-10'>Produce AI inference off-chain, verify it on-chain</h2>
          </div>  

      </div>



            {/* SLIDE 4*/}

            <div className='snap-start bg-black md:w-screen md:h-screen flex items-center justify-between' id='usecases'>

              <div className=' px-40 flex flex-col items-center justify-end duration-500'>
                <h1 className='px-20 py-10 text-6xl text-white font-bold mb-2 break-normal text-center'> 
                Connect powerful AI to your smart contracts
                </h1>
                


                <div className='flex flex-col md:flex-row  justify-between'>

                <div className='relative w-6/12'>
                <div className='absolute m-4 inset-0 bg-purple-600 rounded-lg blur'></div>

                  <div className='m-5 p-5 bg-black w-70 h-70 rounded-lg shadow-lg relative'>
                    
                    <h2 className='text-xl text-gray-100 font-bold mb-5 text-center'>
                    Leverage linear regression models to trade smartly on DEXes 
                    </h2>
                  </div>
                  </div>


                  <div className='relative w-6/12'>
                  <div className='absolute m-4 inset-0 bg-purple-600 rounded-lg blur'></div>


                  <div className='m-5 p-5 bg-black w-70 h-70 rounded-lg shadow-lg relative'>

                    <h2 className='text-xl text-gray-100 font-bold mb-5 text-center'>
                    Add decentralized recommendation systems to your DApps
                    </h2>
                    </div>
                  </div>

                  <div className='relative w-6/12'>
                  <div className='absolute m-4 inset-0 bg-purple-600 rounded-lg blur'></div>

                  <div className='m-5 p-5 bg-black w-70 h-70 rounded-lg shadow-lg relative'>
                    
                    <h2 className='text-xl text-gray-100 font-bold mb-5 text-center'>
                    Cutting edge XGBoost assisted credit risk assessment in Lending Protocols
                    </h2>
                    </div>
                  </div>  
                  

                </div>






              </div>  

          </div>


      

      {/* SLIDE 6*/}

      <div className='snap-start bg-black ' id='team'>

        <Team/>
      </div>




      {/* FORM SLIDE */}

      <div className='snap-start bg-black w-screen h-screen items-center'>

      <h1 className='px-60 py-10 text-4xl text-white mb-2 text-center'>Stay tuned for our white paper!</h1>

      <div className='flex items-center justify-center '>
      <div className='relative'>

          <div className='absolute inset-0 bg-purple-600 rounded-lg blur'></div>
            <Mailchimp/>
      </div>
      </div>
      //add a footer that has a copyright symbol and the year
      <footer>
        <div >
          <h1 className='mt-60 text-white text-center text-l'>?? 2022 Graphiti Inc. All rights reserved.</h1>
        </div>
      </footer>



      </div>




      

        




    </div>
    </div>


    
  );
}

export default App;
