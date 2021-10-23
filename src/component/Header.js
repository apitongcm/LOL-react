import React from 'react'

function Header() {
    return (
        <header className="header bg-cover bg-center py-20  "
        style={{
            backgroundImage:`url(
                https://preview.redd.it/in73r6sbixz31.png?width=4096&format=png&auto=webp&s=810fa4aef8f17b2ccf3ca4c18601eb731904d37e
            )`,
        }}>
            <div class=" ring-4 ring-black ring-opacity-50 max-w-screen-lg bg-cover shadow-2xl rounded-lg mx-auto text-center py-19">
        <h2 class="text-3xl leading-9 font-bold tracking-tight text-black sm:text-4xl sm:leading-10 pt-2">
            Visit Official Website of Riot Games
        </h2>
        <div class="mt-8 flex justify-center pb-4">
            <div class="inline-flex rounded-md bg-black shadow">
                <a href="https://www.riotgames.com/en" class="text-yellow-400 font-bold py-2 px-6">
                    Visit Page
                </a>
            </div>
        </div>
    </div>

        </header>
    )
}

export default Header
