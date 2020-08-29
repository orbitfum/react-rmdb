import React, {useRef, useState}from 'react'
import PropTypes from "prop-types";
import {StyledLoadMoreBtn} from '../styles/StyledLoadMoreBtn'
import Spinner from './Spinner'

const LoadMoreBtn = ({callBack, totalPages, currentPage, loading, text}) => {
    const timeOut = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const loadMore = () => {
        if(!isLoading) {
            callBack();
            setIsLoading(true);
            timeOut.current = setInterval( ()=> {
                if(!loading) {
                    clearInterval(timeOut.current)
                    setIsLoading(loading); 
                }
            }, 500)
        }else {
            return false;
        }
        
    }
    return (
        <StyledLoadMoreBtn onClick={loadMore} 
        className=
        {`${(totalPages > currentPage ? 'visiable': '')} 
            ${(isLoading ? 'loading' : 'loaded')}`
        }>
            {isLoading ? <Spinner button/> : text}
        </StyledLoadMoreBtn>
    )
}

LoadMoreBtn.propTypes = {
    callBack: PropTypes.func,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    loading: PropTypes.bool, 
    text: PropTypes.string
}

export default LoadMoreBtn;