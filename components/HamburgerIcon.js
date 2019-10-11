//@flow
import React, { Fragment } from 'react'

type IconProps = {
    fill : string
}

const HamburgerIcon = ({ fill } : IconProps) => {
    
    return (
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
            <style jsx>{`
                svg {
                    fill: ${fill};
                    width: 50px;
                    height: 50px;
                }
            `}</style>
        </Fragment>
    )
}

export default HamburgerIcon;