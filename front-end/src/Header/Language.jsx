import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { langContant } from '.'

const Language = () => {
    const [show_one, setShow_one] = useState(false);
    const [show_two, setShow_two] = useState(false);

    window.addEventListener('click', (event) => {
        if (event.target.className !== 'btn-layar_one') {
            setShow_one(false)
        }
        if (event.target.className !== 'btn-layar_two') {
            setShow_two(false)
        }
    })
    const { language, curIndex1, curIndex2, Lang1, Lang2 } = useContext(langContant)

    return (
        <div className="header-com">
            <div className="lang">
                <div className="lang-btn">
                    <div className="ctr-flg">
                        <img src={language[curIndex1].img} alt="" />
                    </div>
                    <div className="ctr-lang">
                        {language[curIndex1].val}
                    </div>
                    <div className="ctr-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
                {/* only for click event fire */}
                <div className="btn-layar_one" onClick={() => setShow_one(true)}></div>
                {/* languge list */}
                <div className={show_one ? "lang-tlayer active" : "lang-tlayer"}>
                    <div className="lang-list">
                        {
                            language.map((curElem) => {
                                return (
                                    <div className="lang-item"
                                        key={curElem.id}
                                        onClick={() => Lang1(curElem.id)}>
                                        <div className="ctr-flg">
                                            <img src={curElem.img} alt="" />
                                        </div>
                                        <div className="ctr-lang1">
                                            {curElem.val}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="lang">
                <div className="lang-btn">
                    <div className="ctr-flg">
                        <img src={language[curIndex2].img} alt="" />
                    </div>
                    <div className="ctr-lang">
                        {language[curIndex2].val}
                    </div>
                    <div className="ctr-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
                {/* only for click event fire */}
                <div className="btn-layar_two" onClick={() => setShow_two(true)}></div>
                {/* languge list */}
                <div className={show_two ? "lang-tlayer active" : "lang-tlayer"}>
                    <div className="lang-list">
                        {
                            language.map((curElem) => {
                                return (
                                    <div className="lang-item"
                                        key={curElem.id}
                                        onClick={() => Lang2(curElem.id)}>
                                        <div className="ctr-flg">
                                            <img src={curElem.img} alt="" />
                                        </div>
                                        <div className="ctr-lang1">
                                            {curElem.val}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language