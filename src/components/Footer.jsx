import React from 'react'

const footer = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '13px',
    h3: {
        fontWeight: 'lighter',
    },
    a: {
        color: '#A09FB1',
    }
}

export const Footer = () => {
    return (
        <footer style={footer}  className="footer">
            <h3 style={footer.h3}>created by <a style={footer.a} href="https://github.com/oyham" target="_blank" rel="noopener noreferrer">Oyham</a> - <a href="https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv" target="_blank" rel="noopener noreferrer" style={{color:'#A09FB1'}}>devChallenges.io</a></h3>
        </footer>
    )
}
