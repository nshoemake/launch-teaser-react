import { useState } from 'react'

export const Hero = ({title, children}) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="m-auto">
            {isActive ? (
                <p>
                    WOOOO
                </p>
            ) : (
                <button onClick={() => setIsActive(true)}>
                BRAND SHIT
                </button>
            )}
            
        </div>
    )
}