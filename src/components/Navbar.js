
import {BsTwitter, BsDiscord, BsTelegram} from "react-icons/bs";
import RxDiscordLogo from "react-icons/rx";
import TbBrandTelegram from "react-icons/tb";


const NavBar = () => {
 
    

  return (
    <div>    
      <nav className="relative bg-black px-4 py-2.5 fixed w-full h-20 z-50 top-0 left-0 flex items-center justify-between">


        <div className="flex justify-left">
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
      <div className='pl-40 flex items-center justify-between font-mono'>
        <h1 className="px-6 flex items-center text-xl text-white "><a href="/" >HOME</a></h1>
        <h1 className="px-6 flex items-center text-xl text-white "><a href="#usecases" >USE CASES</a></h1>
        <h1 className="px-6 flex items-center text-xl text-white "><a href = "#team" >TEAM</a></h1>
      </div>
      </div>

      <div className="flex items-center justify-between">
          <div className="px-6 text-white text-4xl"><a href="https://twitter.com/home"><BsTwitter/></a></div>
          <div className="px-6 text-white text-4xl"><a href="https://twitter.com/home"><BsTelegram/></a></div>
          <div className="px-6 text-white text-4xl"><a href="https://twitter.com/home"><BsDiscord/></a></div>


      </div>
      


    </nav>

    
</div>      
      

       
  )
}

export default NavBar;