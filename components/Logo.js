//@flow
import React, { Fragment } from 'react'

type LogoProps = {
    fill : string
}

const Logo = ({ fill } : LogoProps) => (
        <Fragment>
            <svg data-test="svg-logo" height="50" width="200">
                <text id="logo" x="0" y="35">OlivijaOwl</text>
            </svg>
            <style jsx>{`
                svg text {
                    fill: ${fill};
                    font-size: 2rem;
                }
            `}</style>
    </Fragment>
);

export default Logo;