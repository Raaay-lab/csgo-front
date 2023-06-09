import React from "react";

const Footer = () => {
    return <footer>
        <div className="footer__group">
            <div className="footer__logo">
                <span>
                    csgo_front
                </span>
            </div>
            <div className="footer__info">
                <h2>Контакты</h2>
                <div className="footer__link">почта</div>
                <div className="footer__link">ссыл0чка на вк</div>
                <div className="footer__link">еще мб что-то</div>
            </div>
        </div>
        {/* lДобавить полосу после первого блока футера */}
        <div className="footer__copyright">
            <span>2023</span>
        </div>
    </footer>
}

export default Footer;