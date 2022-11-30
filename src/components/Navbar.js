import logo from '../assets/logo.jpeg';


const NavBar = () => {
 
    

  return (
    <div>    
      <nav className="relative bg-black px-4 py-2.5 fixed w-full h-20 z-50 top-0 left-0 flex items-center justify-between">

          <div className="flex items-center">
              <img src = {logo} alt = {''}/>
          </div>
      <div className='flex items-center justify-between'>
        <h1 className="px-2 flex items-center text-xl text-white "><a href="/" >Home</a></h1>
        <h1 className="px-2 flex items-center text-xl text-white "><a href = "/" >Team</a></h1>
        <h1 className="px-2 flex items-center text-xl text-white "><a href="/" >Use Cases</a></h1>
        <h1 className="px-2 flex items-center text-xl text-white "><a href="/" >Roadmap</a></h1>
      </div>


    </nav>

    
</div>      
      

       
  )
}

export default NavBar;