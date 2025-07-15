import React, { useState } from "react";

const Tabs = () => {
    const [tab, setTab] = useState(0);

    let tabContent;
    switch (tab) {
        case 0:
            tabContent = <div>First Tab</div>;
            break;
        case 1:
            tabContent = <div>Second Tab</div>;
            break;
        default:
            tabContent = null; // or any default content
            break;
    }

    return (
        <div>
            <ul>
                <li onClick={() => setTab(0)}>Tab1</li>
                <li onClick={() => setTab(1)}>Tab2</li>
            </ul>
            <div>{tabContent}</div>
        </div>
    );
};

export default Tabs;
