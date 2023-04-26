import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Card from 'components/card'

import AngleIcon from 'assets/svg/angle.svg'

import stl from './Slider.module.scss'

const Slider = ({ slideLength = 10, size = 'medium', customClass }) => {
  const { isDark } = useSelector(state => state.appearance)

  const [currentPosition, setCurrentPosition] = useState(0)
  const [slidesPerPage, setSlidesPerPage] = useState(4)
  const [containerWidth, setContainerWidth] = useState(0)

  const slidesCount = slideLength - slidesPerPage
  const currentMargin = -currentPosition * (100 / slidesPerPage)

  const containerRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(containerRef.current.offsetWidth)
      setParams(containerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [containerWidth])

  const setParams = w => {
    if (w < 551) setSlidesPerPage(1)
    else if (w < 901) setSlidesPerPage(2)
    else if (w < 1101) setSlidesPerPage(3)
    else setSlidesPerPage(4)
  }

  const handleSlideRight = () => {
    if (currentPosition !== 0) setCurrentPosition(currentPosition - 1)
  }

  const handleSlideLeft = () => {
    if (currentPosition !== slidesCount) setCurrentPosition(currentPosition + 1)
  }

  return (
    <div
      className={clsx(stl.wrapper, stl[size], isDark && stl.dark, customClass)}
    >
      <h2>Latest Live Actions</h2>

      <div ref={containerRef} className={stl.container}>
        <button className={stl.swipeBtns} onClick={handleSlideRight}>
          <AngleIcon />
        </button>

        <div className={stl.slider} style={{ marginLeft: `${currentMargin}%` }}>
          {Array.from({ length: slideLength }).map((_, i) => (
            <Card key={i} customClass={stl.card} />
          ))}
        </div>

        <button className={stl.swipeBtns} onClick={handleSlideLeft}>
          <AngleIcon />
        </button>
      </div>
    </div>
  )
}

Slider.propTypes = {
  slideLength: PropTypes.number,
  size: PropTypes.oneOf(['medium', 'large']),
  customClass: PropTypes.string,
}

export default Slider
