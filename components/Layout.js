import React, { Fragment } from 'react'
import Header from './Header'

const Layout = props => {
    return (
        <Fragment>
            <Header />
            {props.children}
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                }

                *, *::before, *::after {
                    box-sizing: border-box;
                }

                body {
                    background-color: green;
                }
            `}</style>
        </Fragment>
    )
}

export default Layout
