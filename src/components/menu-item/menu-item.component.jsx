import React from 'react';
import { useHistory, useRouteMatch } from "react-router-dom";

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    let history = useHistory();
    let match = useRouteMatch();

    return (
        <div 
            className={size ? `${size} menu-item` : 'menu-item'} 
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
};

export default MenuItem;