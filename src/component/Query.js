import React from 'react'

function Query() {
    return (
        <div className="query flex justify-center">
            <form>
                <input type="text" placeholder="Champion Search"></input>       
            </form>
            <div className="champion__search">
                <ul className="champion__menu flex font-bold text-yellow-600 ">
                    <li className="mx-5 hover:bg-black px-2">All</li>                
                    <li className="mx-5 hover:bg-black px-2">Marksman</li>                
                    <li className="mx-5 hover:bg-black px-2">Fighter</li>                
                    <li className="mx-5 hover:bg-black px-2">Tank</li>                
                    <li className="mx-5 hover:bg-black px-2">Assassin</li>                
                    <li className="mx-5 hover:bg-black px-2">Support</li>                
                    <li className="mx-5 hover:bg-black px-2">Mage</li>                
                </ul>    
            </div> 
        </div>
    )
}

export default Query
