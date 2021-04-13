import React from 'react'

const Header = () => {
    return (
        <header className="h-12 bg-blue-400">
            <div className="md:container md:mx-auto grid grid-cols-3 gap-4">
                <div className="col-span-10" >
                    LOGO   
                </div>
                
                <ul className="flex flex-row col-span-1">
                    <li className="ml-4">
                        1
                    </li>
                    <li className="ml-4">
                        2
                    </li>
                </ul>    
                            
            </div>
        </header>
    )
}

export default Header
