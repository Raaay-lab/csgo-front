import React from "react";

const PlayerCard = () => {
    return <div className="player">

        <div className="player__card">
            <div className="player__photo">
                {/* тут импорт фотки */}
                <img src="../playerPhoto/24273428.png" alt="фото педрильника" />
            </div>
            <div className="player__name">
                {/* тут импорт имя+ник+фамилия */}
                <span>Casper cadiaN Møller</span>
            </div>
            <div className="player__country">
                {/* в alt вставить название страны */}
                <span></span>
                <img src="../country/Dk_hd.png" alt="&#127465;&#127472;" />
            </div>
            <div className="player__team">
                {/* добавить ссылку на команду */}
                {/* поменять шрифт страны */}
                <div className="player__team-img">
                    <img src="../team/57px-Heroic_2023_allmode.png" alt="Heroic" />
                </div>
                <span>Heroic</span>
                {/* вставить команду */}
            </div>
        </div>




        <div className="player__card">
            <div className="player__photo">
                <img src="../playerPhoto/Kepa.jpg" alt="фото педрильника" />
            </div>
            <div className="player__name"></div>
            <div className="player__team"></div>
        </div>
        <div className="player__card">
            <div className="player__photo">
                <img src="../playerPhoto/Kepa.jpg" alt="фото педрильника" />
            </div>
            <div className="player__name"></div>
            <div className="player__team"></div>
        </div>
        <div className="player__card">
            <div className="player__photo">
                <img src="../playerPhoto/Kepa.jpg" alt="фото педрильника" />
            </div>
            <div className="player__name"></div>
            <div className="player__team"></div>
        </div>
        <div className="player__card">
            <div className="player__photo">
                <img src="../playerPhoto/Kepa.jpg" alt="фото педрильника" />
            </div>
            <div className="player__name"></div>
            <div className="player__team"></div>
        </div>
        <div className="player__card">
            <div className="player__photo">
                <img src="../playerPhoto/Kepa.jpg" alt="фото педрильника" />
            </div>
            <div className="player__name"></div>
            <div className="player__team"></div>
        </div>
        <div className="player__card">
            <div className="player__photo">
                <img src="../playerPhoto/Kepa.jpg" alt="фото педрильника" />
            </div>
            <div className="player__name"></div>
            <div className="player__team"></div>
        </div>
    </div>

}

export default PlayerCard;