import React, { useState, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import RichText from '../richText/richText'
import { robotoRegular } from '../../styles/fonts'
import { color } from '../../styles/colors'

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
  const INDICATOR_TIMEOUT = 200
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
          <StyledTab
            role="tab"
            id={tab.id}
            onClick={() => setSelectedTab(index)}
            onKeyDown={e => handleTabKeyPress(e, index)}
            selected={tab.selected}
            tabIndex={tab.focused ? 0 : -1}
            aria-selected={tab.selected}
            aria-controls={tab.content.id}
            key={tab.id}
          >
            {tab.label}
            <CSSTransition in={tab.selected} timeout={INDICATOR_TIMEOUT}>
              {state => (
                <StyledTab.Indicator
                  state={state}
                  timeout={INDICATOR_TIMEOUT}
                />
              )}
            </CSSTransition>
          </StyledTab>
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

const getIndicatorTransition = state => {
  switch (state) {
    case 'entering':
    case 'exited':
      return `
        transform: translateY(2px);
      `

    case 'entered':
    default:
      return `
        transform: translateY(0);
      `
  }
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
  ${robotoRegular}
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
const StyledTab = styled.button`
  flex: 1 0 auto;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  text-transform: uppercase;
  background: transparent;
  border-width: 0;
  border-style: none;
  color: #616161;
  overflow: hidden;
  position: relative;

  &:hover {
    background: #f6fafd;
    cursor: pointer;
  }

  &:focus {
    background: #e5effa;
    outline: none;
  }

  ${({ selected }) =>
    selected &&
    css`
      color: #1976d2;
    `}
`
StyledTab.Indicator = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${color.primary};
  transition: transform ${({ timeout }) => timeout}ms ease-in-out;

  ${({ state }) =>
    css`
      ${getIndicatorTransition(state)}
    `}
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
