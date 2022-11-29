
import './App.css';
import Mailchimp from './components/Mailchimp';
import Navbar from './components/Navbar';


//black, purple, white, gray
function App() {
  return (

    <div >
      <Navbar />
      <div className='snap-y h-screen w-screen overflow-scroll'>
      
      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>



        <body className='px-8 py-16  '>


          <div className='px-40 flex flex-col items-center justify-center'>
            <h1 className='text-6xl text-white font-bold mb-2'>Osaka is a better way of living your life</h1>
            <p2 className='text-xl text-white font-bold mb-10'>Meet the new standard of life... eco friendly, sustainable, affordable, and socially acceptable</p2>
          </div>  
  

          <div className='grid gap-8 items-start justify-center'>
            <div className='relative'>
              <div className='absolute inset-0 bg-purple-600 rounded-lg blur'></div>

              <button className='relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600'>
                <span className='pr-6 text-gray-100'>Labs Release 2021</span>
                <span className='pl-6 text-gray-100'>See what's new &rarr;</span>
              </button>

            </div>
          </div>
        </body>



      </div>
      <div className='snap-start bg-black w-screen h-screen flex items-center justify-center '>
      <div className='relative'>
          <div className='absolute inset-0 bg-purple-600 rounded-lg blur'></div>
            <Mailchimp/>
      </div>
      </div>



      <div className='snap-start bg-gradient-to-r from-white to-purple-400 w-screen h-screen flex items-center justify-center text-8xl'>3</div>
      <div className='snap-start bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl'>4</div>

      

        




    </div>
    </div>


    
  );
}

export default App;
