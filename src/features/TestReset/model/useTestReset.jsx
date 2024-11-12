import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useTestReset = () => {
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false)

    const handleReset = () => {
        localStorage.removeItem('quizResults')
        navigate('/test-page')
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 430)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
  return{
    isMobile,
    handleReset
  }
}

export default useTestReset
