
import {BsTwitter, BsDiscord, BsTelegram} from "react-icons/bs";



const NavBar = () => {
 
    

  return (
    <div>    
      <nav className="relative bg-black px-4 py-2.5 fixed w-full h-20 z-50 top-0 left-0 flex items-center justify-between">


        <div className="flex justify-around">
         <div>
          <h1 className="font-extrabold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400">GRAPHITI</h1>
         </div>
          {
            /*
          <div className="flex items-center">
              <h1 className='text-purple-400 text-8xl text-mono text-bold'>G</h1>
          </div>
          */
          }
      <div className='flex items-center justify-between font-sans'>
        <h1 className="px-6 flex items-center text-xl text-white "><a href="/" >Home</a></h1>
        <h1 className="px-6 flex items-center text-xl text-white "><a href="#usecases" >Use Cases</a></h1>
        <h1 className="px-6 flex items-center text-xl text-white "><a href = "#team" >Team</a></h1>
      </div>



      </div>

      <div className="flex items-center justify-between">
          <div className="px-6 text-white text-4xl"><a href="https://twitter.com/graphitiAI"><BsTwitter/></a></div>
          <div className="px-6 text-white text-4xl"><a href="https://telegram.org/"><BsTelegram/></a></div>
          <div className="px-6 text-white text-4xl"><a href="https://discord.gg/brgpVG9q"><BsDiscord/></a></div>


      </div>

    
      


    </nav>

    
</div>      
      

       
  )
}

export default NavBar;