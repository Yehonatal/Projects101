import { useState } from "react";
import Tag from "./Tag";
import "../style/card.css";

const Card = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className="card">
                <div
                    className="card_picture"
                    onMouseEnter={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                >
                    <img src="./images/image-equilibrium.jpg" alt="" />

                    {isVisible && (
                        <div className="card_picture_cover">
                            <img src="./images/icon-view.svg" alt="eye icon" />
                        </div>
                    )}
                </div>
                <div className="card_content">
                    <h1 className="card_content_title">
                        {" "}
                        Equilibrium
                        <span className="accent"> #3429</span>
                    </h1>
                    <p className="card_content_paragraph">
                        Our Equilibrium collection promotes balance and calm.
                    </p>

                    <div className="card_balance flx">
                        <div className="balance_amount flx accent">
                            <span className="balance_amount_icon">
                                <img
                                    src="./images/icon-ethereum.svg"
                                    alt="ethereum icon"
                                />
                            </span>
                            0.041 ETH
                        </div>
                        <div className="balance_time flx">
                            <span className="balance_time_icon">
                                <img
                                    src="./images/icon-clock.svg"
                                    alt="balance days left to expire"
                                />
                            </span>
                            3 days left
                        </div>
                    </div>
                </div>
                <div className="card_owner flx">
                    <div className="card_owner_img">
                        <img
                            src="./images/image-avatar.png"
                            alt="card owners image"
                        />
                    </div>
                    <p className="card_owner_detail">
                        Creation of
                        <span className="card_owner_name"> Jules Wyvern</span>
                    </p>
                </div>
            </div>
            <Tag />
        </>
    );
};

export default Card;
