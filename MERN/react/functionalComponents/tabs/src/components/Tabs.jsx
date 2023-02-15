import React from "react";
import { useState } from "react";

const Tabs = props => {
    const {tabs, setTabs} = props;
    const [currentTab, setCurrentTab] = useState(tabs[0]);

    const changeTab = (incommingTab, e) => {
        e.preventDefault();
        if( "callback" in incommingTab){
            incommingTab.callback();
        }
        const newTabs = tabs.map((tab) => {
            tab.id === incommingTab.id ? tab.isSelected = true : tab.isSelected = false;
            return tab;
        })
        setTabs(newTabs)
        setCurrentTab(incommingTab);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "10px" }}>
                {
                    tabs.map((tab, i) => {
                        return (
                            <div className={tab.isSelected ? "sm-box-clicked" : "sm-box"} key={i} onClick={(e) => changeTab(tab, e)}>Tab {tab.id}</div>
                        )
                    })
                }
            </div>
            <div className="dark-border">
                {currentTab?.content}
            </div>
        </>
    )
}

export default Tabs;