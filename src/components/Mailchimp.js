import { useState } from "react";
//u = a0b472e19aa099399014e000b
//id = 9eac0985af
//url = https://gmail.us21.list-manage.com/subscribe/post

const Mailchimp = () => {

    const [emailValue, setEmailValue] = useState('');
    const [fNameValue, setFNameValue] = useState('');


    return (
        <div className="relative flex  justify-center items-center py-12 px-6  bg-black py-8 px-6 rounded-lg sm:px-10">
                <form className="mb-0 space-y-6" action="https://gmail.us21.list-manage.com/subscribe/post" method="POST" noValidate>
                  <input type="hidden" name="u" value="a0b472e19aa099399014e000b"/>
                <input type="hidden" name="id" value="9eac0985af"/>

                <label className="block text-xl text-gray-100 m-20" htmlFor='MERGE0'>
                    Email Address
                    <div className="mt-1 text-lg rounded-lg text-black">
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={emailValue} 
                        onChange={ (e)=>{ setEmailValue(e.target.value) } }
                        autoCapitalize="off" 
                        autoCorrect="off"
                     /> 
                     </div>
                </label>


                <label className="block text-xl font-medium text-gray-100 m-20" htmlFor='MERGE1'>
                    Name
                    <div className="mt-1 text-lg rounded-lg text-black">
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        value={fNameValue} 
                        onChange={(e)=>{setFNameValue(e.target.value);}}
                    />
                    </div>
                </label>
               
                <div className="mt-36 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
               
              </form>
              </div>
        )
}

export default Mailchimp;


