import Member1 from '../assets/ketanjog.jpeg';
import Member2 from '../assets/andrew.png';
import Member3 from '../assets/marinminamiya.jpeg';

import {BsTwitter, BsLinkedin} from "react-icons/bs";


const Team = () => {
    return (
        <div className=' px-20 flex flex-col '>




        <h1 className='  text-6xl text-white font-bold  break-normal text-center'> 
        Our Team</h1>


        <div className='flex flex-col md:flex-row  justify-center'>



        <div className='w-full relative'>
            <div className='absolute m-8 inset-0 bg-purple-600 rounded-lg blur'></div>

            <div className='relative m-10 bg-black rounded-lg shadow-lg flex flex-col items-center justify-center'>

                <div className='w-6/12 sm:w-6/12 px-4 mt-7'>
                    <img src={Member1} alt = "ketan" className='shadow  max-w-full h-auto align-middle border-none"'/>
                </div>

                <h1 className='text-4xl text-gray-100  m-5 break-normal text-center'>
                    Ketan Jog
                </h1>
                <h2 className='px-5 text-l text-gray-100 mb-2 text-center pb-3'>
                    Ketan co-founded his first AI startup while in college that successfully raised in 2022. With a Science Research Fellowship at Columbia University, Ketan has a B.A in Math and Statistics and a B.S in Computer Science. A builder at heart, his most recent crypto project aims to make cloud computing a Web3 native resource. Ketan has a diverse research experience working with cutting edge faculty in unsupervised and reinforcement learning, applied math and neuroscience. 
                
                    <div className='flex justify-end'>
                        <span className='text-white text-xl px-2 py-2'><a href='https://www.linkedin.com/in/ketanjog'><BsLinkedin/></a></span>
                        <span className='text-white text-xl px-2 py-2'><a href='https://twitter.com/ketan_jog'><BsTwitter/></a></span>
                    </div>

                </h2>
          </div>

        </div>



          <div className='w-full relative'>
          <div className='absolute m-8 inset-0 bg-purple-600 rounded-lg blur'></div>

          <div className='relative m-10 bg-black   rounded-lg shadow-lg flex flex-col items-center justify-center'>

          <div className='w-5/12 sm:w-5/12 px-4 mt-4'>
          <img src={Member2} alt = "andrew" className='shadow  max-w-full h-auto align-middle border-none"'/>
          </div>

            <h1 className='text-4xl text-gray-100 m-5 break-normal text-center'>
              Andrew Magid
            </h1>
            <h2 className='px-5 text-l text-gray-100 pb-5 text-center'>
            Andrew received a degree from Columbia University in Math and Computer Science with a research focus in Systems and Security. His first exposure to crypto came while researching mining vulnerabilities on proof of work protocols. He further worked on supply chain security and sandboxing during his time at the software systems lab. Andrew later worked as a Quant Dev in the market making arm of the global markets division at Goldman Sachs.
           
            <div className='flex justify-end'>
                <span className='text-white text-xl px-2 py-2'><a href='https://www.linkedin.com/in/andrewmagid'><BsLinkedin/></a></span>
                
              </div>
            </h2>
          </div>
          </div>


          <div className='w-full relative '>
          <div className='absolute m-8 inset-0 bg-purple-600 rounded-lg blur'></div>


          <div className='relative m-10 bg-black rounded-lg shadow-lg flex flex-col items-center justify-center'>

          <div className='w-6/12 sm:w-6/12 px-4 mt-5'>
          <img src={Member3} alt = "marin" className='shadow max-w-full h-auto align-middle border-none"'/>
          </div>

            <h1 className='text-4xl text-gray-100 m-5 break-normal text-center'>
              Maryn Minamiya
            </h1>
            <h2 className='px-5 text-l text-gray-100 pb-3 text-center '>
            Marin Minamiya is a Computer Science student at Columbia University in the City of New York. She has been keen on Blockchain since her first encounter in 2011. Marin has experience working with the advertisement industry and she has raised &gt;US$500K for her personal challenge - to complete The Explorer’s Grand Slam (Seven summits + North & South Pole). In April 2017, she became the youngest person in the world to complete this feat.
            <div className='flex justify-end'>
                <span className='text-white text-xl px-2 py-2'><a href='https://www.linkedin.com/in/marin-minamiya/'><BsLinkedin/></a></span>
                <span className='text-white text-xl px-2 py-2'><a href='https://twitter.com/MarinMinamiya'><BsTwitter/></a></span>
              </div>
            </h2>
          </div>
          </div>
          
        </div>

      </div>  
    )
}

export default Team;