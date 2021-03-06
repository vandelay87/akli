import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null
    if (rippleCount > 0) {
      clearTimeout(bounce)

      bounce = setTimeout(() => {
        cleanUpFunction()
        clearTimeout(bounce)
      }, duration * 4)
    }

    return () => clearTimeout(bounce)
  }, [rippleCount, duration, cleanUpFunction])
}

const Ripple = ({ duration, color }) => {
  const [rippleArray, setRippleArray] = useState([])

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([])
  })

  const addRipple = event => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height
    const x = event.pageX - (rippleContainer.x + window.pageXOffset) - size / 2
    const y = event.pageY - (rippleContainer.y + window.pageYOffset) - size / 2
    const newRipple = {
      x,
      y,
      size,
    }

    setRippleArray([...rippleArray, newRipple])
  }

  return (
    <RippleContainer
      duration={duration}
      color={color}
      onMouseDown={addRipple}
      aria-hidden="true"
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={`span${index}`}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
              aria-hidden="true"
            />
          )
        })}
    </RippleContainer>
  )
}

const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${({ color }) => color};
    animation-name: ripple;
    animation-duration: ${({ duration }) => duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`

Ripple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string,
}
Ripple.defaultProps = {
  duration: 850,
  color: '#fff',
}

export default Ripple
