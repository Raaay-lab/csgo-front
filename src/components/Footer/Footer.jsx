import React from "react";

const Footer = () => {
    return <footer>
        <div className="footer__main">
            <div className="footer__group">
                <div className="footer__logo">
                <a mode='logo' href="/">csgo_front</a>
                </div>
                <div className="footer__info">
                    <h2>Контакты</h2>
                    <div className="footer__link">почта</div>
                    <div className="footer__link">ссыл0чка на вк</div>
                    <div className="footer__link">телега</div>
                </div>
            </div>
        </div>
        <div className="footer__copyright">
            <span>© 5Tipa.team | 2023</span>
        </div>
    </footer>
}

export default Footer;