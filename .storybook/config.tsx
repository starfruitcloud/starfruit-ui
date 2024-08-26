import React from 'react';
import { configure,addDecorator,addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import "../src/styles/index.scss";


const wrapperStyle:React.CSSProperties = {
    padding:'20px'
}


const storyWrapper = (storyFn:any) =>(
    <div style={wrapperStyle}>
        {storyFn()}
    </div>
);

addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({info:{inline:true,}})

const req = require.context('../src/components',true,/\.story\.tsx$/) 
function loadStories() {
    req.keys().map(fileName=>req(fileName))
    // 可以是任意目录，根据自己需要写路径
}

configure(loadStories, module);