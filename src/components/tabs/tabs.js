import React, { useState, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tab from './tab'
import TabPanel from './tabPanel'

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
        <TabPanel
          content={tab.content}
          selected={tab.selected}
          labelledBy={tab.id}
          id={tab.content.id}
          key={tab.content.id}
        />
      ))}
    </StyledWrapper>
  )
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

Tabs.propTypes = {
  label: PropTypes.string.isRequired,
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      content: PropTypes.shape({
        id: PropTypes.string,
        json: PropTypes.shape({}),
      }),
    })
  ).isRequired,
}

export default Tabs
