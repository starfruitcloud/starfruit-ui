import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './button';

const defaultButton = () => {
    return <Button >button</Button>
}
storiesOf('Button 组件',module)
    .add('默认 Button ',defaultButton)