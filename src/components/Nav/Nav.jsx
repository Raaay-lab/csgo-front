import React from 'react';

const Nav = () => {

    return <nav>
        <div className="nav-bar">
            <div className="logo">
                <span mode='logo'>csgo_front</span>
            </div>
            <ul className="header__list">
                <li>
                    <a className='header__link' href="#">Про игроки</a>
                </li>
                <li>
                    <a className='header__link' href="#">Команды</a>
                </li>
                <li>
                    <a className='header__link' href="#">Прицелы</a>
                </li>
                <li>
                    <a className='header__link' href="#">Турниры</a>
                </li>
            </ul>
            <div className="switches">
                {/* TODO для языка и темы сделать свичи. рус/англ и темная/светлая */}
                <div className="switch-Language">
                    <span>Язык</span>
                </div>
                <div className="switch-Main_theme">
                    <span>Тема</span>
                </div>
            </div>
        </div>

    </nav>
}

export default Nav;