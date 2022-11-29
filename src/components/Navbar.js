import logo from '../assets/logo.png';


const NavBar = () => {
 
    

  return (
    <div>    
    <nav className="bg-gray-900 px-4 py-2.5 fixed w-full h-20 z-50 top-0 left-0 flex items-center justify-between">

        <div className="flex items-center">
            <img src = {logo} />
        </div>

    <h1 className="flex items-center text-2xl text-white "><a href="/" >Home</a></h1>
    <h1 className="flex items-center text-2xl text-white "><a href = "/profile" >Profile</a></h1>
    <h1 className="flex items-center text-2xl text-white "><a href="/login" >Login</a></h1>

</nav>

    
</div>      
      

       
  )
}

export default NavBar;