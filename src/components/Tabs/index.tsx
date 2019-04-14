import React, { FunctionComponent, useCallback, useState } from 'react'
import styled from 'styled-components'

interface ITabs {
  className?: string;
  tabs: Array<{ label: string; key: string; }>;
  children: ({ activeTab }: { activeTab: string }) => any;
}

const Tabs: FunctionComponent<ITabs> = ({ className, tabs, children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key)
  const handleTabChange = useCallback((key: string) => () => setActiveTab(key), [])

  return (
    <div className={className}>
      <TabWrapper>
        {tabs.map((tab) => (
          <Tab key={tab.key} onClick={handleTabChange(tab.key)} isActive={activeTab === tab.key}>
            {tab.label}
          </Tab>
        ))}
      </TabWrapper>
      {children({ activeTab })}
    </div>
  )
}

export default Tabs

const TabWrapper = styled.ul`
  white-space: nowrap;
  padding: 0 10px;
  border-bottom: 2px solid ${props => props.theme.colors.lightGrey};
  box-sizing: border-box;
  list-style: none;
  display: block;
`

const Tab = styled.li<{ isActive: boolean }>`
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${props => props.theme.colors.inputText};
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${props => props.theme.colors.snow};
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.lightGrey};
  padding: 20px 35px;
  outline: none;
  margin-bottom: -2px;
  transition: 0.3s color, border-bottom-color;
  ${({ isActive, theme }) =>
  isActive &&
  `
      color: ${theme.colors.dark};
      border-bottom: 2px solid ${theme.colors.accentNormal};
    `}
`
