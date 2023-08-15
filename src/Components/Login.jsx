import React from "react";
import Header from "./Header/Header";
import logo from './logo.png'

const Login = (props) => {
    return (
        <div className=" bg-[#141420] h-full grid justify-items-center ">
            <Header />
            <div className="pt-32   grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
                
                <div className="px-16">
                    <h1 className="welcome-message text-white font-bold">Welcome to decentralized <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600  via-[#c905ff] to-purple-500">voting</span> application</h1>

                    <p className="my-6 text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis nostrum corporis mollitia quaerat! Modi ab enim error odio in sequi doloremque. Odio pariatur deleniti reprehenderit dolore. Aliquam, nam sed!</p>


                    <div class="relative group w-52">
                        <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <button className="transition duration-200 ease-in transform   hover:scale-105  px-10 py-4 rounded-3xl font-bold text-white bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]" onClick={props.connectWallet}>Login Metamask</button>
                    </div>
                </div>
                <img className="lg:ml-16 mt-12  md:mt-0 px-16" src={logo} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Login;