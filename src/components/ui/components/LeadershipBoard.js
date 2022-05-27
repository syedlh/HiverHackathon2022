import React from 'react';


export const LeadershipBoard = ({ user = [] }) => {
    user = user.sort(function (a, b) {
        if (a.point > b.point) return -1;
        if (a.point < b.point) return 1;
        return 0;
    });
    return (
        <div className='wrapper'>
            <div className='heading'>Leadership Board</div>
            <div className='bodyContent'>
                <ul className='ulClass'>
                    {user && user.map((item, idx) => {
                        const pointPerentage = `calc(${(item.point * 100) / user[0].point}% - 10px)`;
                        return (
                            <li className='liClass' key={`${item.name}${idx}`}>
                                <img src={item.img} className='profileimage' />
                                <div className='centercontent'>
                                    <div className='FlexBoxWrapper'>
                                        <span className='spanClass'>{idx + 1}.</span>
                                        <div className='itemName'>{item.name}</div>
                                    </div>
                                    <div className='percentage' style={{ width: pointPerentage }} />
                                </div>
                                <div className='pointsValue'>
                                    {Number(item.point)} points
                                </div>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
        </div>
    )
};
