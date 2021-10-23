import React from 'react';


function Nav() {
    return (
        <div className="navbar flex items-center bg-black justify-between">
            <div className="navbar__left mx-5">
            <a href="https://www.freepnglogos.com/pics/lol-logo"
            title="Image from freepnglogos.com">
            <img src="https://www.freepnglogos.com/uploads/lol-logo-png/league-of-legends-riot-games-logo-5.PNG"
            width="150"
            alt="league of legends riot games logo" /></a>    
            </div>

            <div className="navbar__center">
                <ul className="menu flex text-yellow-400 font-bold">
                    <li className="list mx-4 p-2"><a href="https://lol.garena.ph/">Home</a></li>    
                    <li className="list mx-4 p-2"><a href="#navbar">Champions</a></li>    
                    <li className="list mx-4 p-2"><a href="https://apitongcarl.netlify.app/">About</a></li>      
                </ul>    
            </div> 

            <div className="navbar__right mx-5">
                {/* https://lol.garena.ph/download */}
                <div class="inline-flex rounded-md bg-yellow-400 shadow hover:bg-yellow-600">
                    <a href="https://lol.garena.ph/download" class="text-gray-700 font-bold py-2 px-6">
                         Download
                    </a>
                </div>    
            </div>           
        </div>
    )
}

export default Nav
