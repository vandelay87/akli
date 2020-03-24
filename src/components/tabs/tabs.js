import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import RichText from '../richText/richText'
import { robotoRegular } from '../../styles/fonts'
import { color } from '../../styles/colors'

const Tabs = ({ label, tabList }) => {
  const [tabs, setTabs] = useState(
    tabList.map((tab, index) => ({
      ...tab,
      selected: index ? false : true,
      focused: index ? false : true,
    }))
  )
  const tabBarEl = useRef(null)
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      didMount.current = false
      return
    }

    const tabsEl = tabBarEl.current.children
    Object.keys(tabsEl).forEach(key => {
      tabsEl[key].attributes.tabIndex.value === '0' && tabsEl[key].focus()
    })
  }, [tabs])
  
  const setSelectedTab = selectedTab => (
    setTabs(tabs.map((tab, index) => ({
      ...tab,
      selected: selectedTab === index,
      focused: selectedTab === index,
    })))
  )

  const setFocusedTab = focusedTab => (
    setTabs(tabs.map((tab, index) => ({
      ...tab,
      focused: focusedTab === index,
    })))
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
            tabIndex={tab.focused ? 0 : -1}
            aria-selected={tab.selected}
            aria-controls={tab.content.id}
            key={tab.id}
          >
            {tab.label}
            <StyledTab.Indicator modifiers={tab.selected && 'selected'} />
          </StyledTab>
        ))}
      </StyledTabBar>
      {tabs.map(tab => (
        <StyledTabPanel
          role="tabpanel"
          id={tab.content.id}
          modifiers={tab.selected && 'selected'}
          aria-hidden={!tab.selected}
          aria-labelledby={tab.id}
          key={tab.content.id}
        >
          <RichText article={tab.content} />
        </StyledTabPanel>
      ))}
    </StyledWrapper>
  )
}

const TABBAR_CONFIG = {
  selected: () => `
    background: ${color.primary};
  `,
}
const TABPANEL_CONFIG = {
  selected: () => `
    display: block;
  `,
}
const StyledWrapper = styled.div`
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
  transition: all 0.3s ease-out;

  &:hover {
    background: #f6fafd;
    color: #1976d2;
    cursor: pointer;
  }

  &:focus {
    background: #e5effa;
    outline: none;
  }
`
StyledTab.Indicator = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: transparent;

  ${applyStyleModifiers(TABBAR_CONFIG)};
`
const StyledTabPanel = styled.div`
  display: none;

  ${applyStyleModifiers(TABPANEL_CONFIG)};
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
