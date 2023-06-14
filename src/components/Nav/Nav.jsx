import React from 'react';

const Nav = () => {
    return <nav>
        <div className="nav-bar">
            <div className="logo">
                <a mode='logo' href="/">csgo_front</a>
            </div>
            <ul className="header__list">
                <li>
                    <a className='header__link' href="/ProPlayers">Про игроки</a>
                </li>
                <li>
                    <a className='header__link' href="/Teams">Команды</a>
                </li>
                <li>
                    <a className='header__link' href="/Crosshairs">Прицелы</a>
                </li>
                <li>
                    <a className='header__link' href="/Tournaments">Турниры</a>
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