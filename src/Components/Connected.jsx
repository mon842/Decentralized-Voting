import React, { useState } from "react";
import Lottie from "lottie-react";
import clock from '../clock.json';

// const Connected = (props) => {
//     const account = props.account%10000;

//     return (
//         <div classNameName="connected-container">


//             {props.showButton ? (
//                 <p classNameName="connected-account">You have already voted</p>
//             ) : (
//                 <div>
//                     <input type="number" placeholder="Entern Candidate Index" value={props.number} onChange={props.handleNumberChange}></input>
//                     <br />
//                     <button classNameName="login-button" onClick={props.voteFunction}>Vote</button>

//                 </div>
//             )}

//             <table id="myTable" classNameName="candidates-table">
//                 <thead>
//                     <tr>
//                         <th>Index</th>
//                         <th>Candidate name</th>
//                         <th>Candidate votes</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.candidates.map((candidate, index) => (
//                         <tr key={index}>
//                             <td>{candidate.index}</td>
//                             <td>{candidate.name}</td>
//                             <td>{candidate.voteCount}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//         </div>
//     )
// }







const Connected = (props) => {

    // const acc = props.account.substring(0, 4)
    // const acc2 = props.account.substring(props.account.length-5 ,props.account.length-1)


    const dp = 'https://im.indiatimes.in/content/2022/Jul/tere-naam_62d938217e409.jpg'
    return (
        <div className=" h-screen relative text-white px-10 py-6">

            <div ca>
                <p className="py-2">Remaining Time: {props.remainingTime}</p>
                <Lottie className="h-24 w-24 bg-purple-900 rounded-3xl" animationData={clock}/>
            </div>

            <div className="bg-gradient-to-r from-purple-800 via-purple-900 to-[#141420] rounded-3xl p-3 flex items-center space-x-4 absolute right-10 top-5">
                <img className="w-10 h-10 rounded-full" src={dp} alt="" />
                <div className="font-medium dark:text-white">
                    <div className="text-sm text-gray-300 dark:text-gray-400">0x9a.....0cbb</div>
                </div>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Index
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                VoteCount
                            </th>
                        </tr>
                    </thead>
                    <tbody>


                        {props.candidates.map((candidate) => (

                            <tr key={candidate._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        {candidate.index}
                                    </div>
                                </td>

                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Bharatiya_Janata_Party_logo.svg" alt="Jese image" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">{candidate.name}</div>
                                    </div>
                                </th>


                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{candidate.voteCount}</a>
                                </td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>




        </div>
    )
}

export default Connected;