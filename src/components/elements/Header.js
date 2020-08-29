import React from 'react'
import {Link} from '@reach/router';
import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from '../styles/StyledHeader'
import RMDLogo from '../images/reactMovie_logo.png'
import TMDBLogo from '../images/tmdb_logo.svg'

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledRMDBLogo src={RMDLogo} alt="rmdb-logo" />
            </Link>
            <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
        </div>
    </StyledHeader>
)

export default Header