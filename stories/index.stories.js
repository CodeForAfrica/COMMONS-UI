import { storiesOf } from '@storybook/react';
import React from 'react';
import Core from '../packages/core/src';

storiesOf('COMMONS UI|Core', module)
    .add('Default', () => (
        <Core/>
    ));
