import React from 'react';

function Header(props) {
    console.warn("Header",props);
    return (
        <div>
            <div className='add-to-cart'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKl1Lme9gjl95GJLC8ebee5xgFBbTX9lLxhMqYT5fy3XpyPJR70O822p29CCLAvLlhLs&usqp=CAU' />
            </div>
        </div>
    );
}

export default Header;