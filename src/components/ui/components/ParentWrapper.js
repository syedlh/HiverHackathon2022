import React from 'react';
import { LeadershipBoard } from './LeadershipBoard';

export const ParentWrapper = ({props = []}) => {
    const { userObject } = props;
    console.log('props',props);
    return (
        <div className='backgroundColor'>
            <LeadershipBoard user={userObject} />
        </div>
    )
};
