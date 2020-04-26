import React, { useState, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Tab from './tab'
import RichText from '../richText/richText'

const Tabs = ({ label, tabList }) => {
  const [tabs, setTabs] = useState(
    tabList.map((tab, index) => ({
      ...tab,
      selected: !index,
      focused: !index,
    }))
  )
  const tabBarEl = useRef(null)
  const didMount = useRef(false)
  const PANEL_TIMEOUT = 200

  useLayoutEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }

    const tabsEl = tabBarEl.current.children

    Object.keys(tabsEl).forEach(key => {
      return (
        tabsEl[key].attributes.tabIndex.value === '0' && tabsEl[key].focus()
      )
    })
  }, [tabs])

  const setSelectedTab = selectedTab =>
    setTabs(
      tabs.map((tab, index) => ({
        ...tab,
        selected: selectedTab === index,
        focused: selectedTab === index,
      }))
    )

  const setFocusedTab = focusedTab =>
    setTabs(
      tabs.map((tab, index) => ({
        ...tab,
        focused: focusedTab === index,
      }))
    )

  const handleTabKeyPress = (event, index) => {
    if (event.key === 'ArrowLeft') {
      setFocusedTab(!index ? tabs.length - 1 : index - 1)
    }
    if (event.key === 'ArrowRight') {
      setFocusedTab(index === tabs.length - 1 ? 0 : index + 1)
    }
  }

  return (
    <StyledWrapper aria-label={label}>
      <StyledTabBar role="tablist" ref={tabBarEl}>
        {tabs.map((tab, index) => (
          <Tab
            label={tab.label}
            click={() => setSelectedTab(index)}
            keyDown={e => handleTabKeyPress(e, index)}
            selected={tab.selected}
            focused={tab.focused}
            controls={tab.content.id}
            id={tab.id}
            key={tab.id}
          />
        ))}
      </StyledTabBar>
      {tabs.map(tab => (
        <CSSTransition
          key={tab.content.id}
          in={tab.selected}
          timeout={PANEL_TIMEOUT}
        >
          {state => (
            <StyledTabPanel
              role="tabpanel"
              id={tab.content.id}
              state={state}
              aria-hidden={!tab.selected}
              aria-labelledby={tab.id}
              timeout={PANEL_TIMEOUT}
            >
              <RichText content={tab.content} />
            </StyledTabPanel>
          )}
        </CSSTransition>
      ))}
    </StyledWrapper>
  )
}

const getPanelTransition = state => {
  switch (state) {
    case 'entering':
      return `
        display: block;
        opacity: 0;
        transform: scale(0.97) translateY(5px);
      `

    case 'entered':
    case 'exiting':
      return `
        opacity: 1;
        transform: scale(1) translateY(0);
      `

    default:
      return `
        display: none;
        opacity: 0;
        transform: scale(0.97) translateY(5px);
      `
  }
}
const StyledWrapper = styled.article`
  margin: 1em auto;
`
const StyledTabBar = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
const StyledTabPanel = styled.div`
  transition: opacity 200ms linear, transform 200ms ease-in-out;

  ${({ state }) =>
    css`
      ${getPanelTransition(state)}
    `}
`

Tabs.propTypes = {
  label: PropTypes.string.isRequired,
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      content: PropTypes.shape({
        id: PropTypes.string,
        json: PropTypes.json,
      }),
    })
  ).isRequired,
}

export default Tabs
