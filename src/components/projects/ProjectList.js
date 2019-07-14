import React, { useState } from 'react';

const ProjectList = ({ title, items, numToDisplay = 3 } = {}) => {
    const [ showBtn ] = useState(items.length > 3);
    const [btnTitle, setBtnTitle] = useState('Show more');
    const [changeBtn, setChangeBtn] = useState(false);
    const [ellispe, setEllipse] = useState('...');

    const onClick = () => {
        if (changeBtn) {
            setEllipse('...');
            setBtnTitle('Show more');
            setChangeBtn(false);
        } else {
            setEllipse('');
            setBtnTitle('Show less');
            setChangeBtn(true);
        }
    }
    return (
        <div className="project__list">
            <h3 className="project__list-title">{title}</h3>
            <ul className="project__list-ul">
                {items.map((item, i) => i < numToDisplay ? (
                    <li key={i} >{item}</li>
                ) : (
                    <li key={i} className={changeBtn ? "" : "project__list-item-hide"}>{item}</li>
                ))}
            </ul>
            {showBtn && (
                <div className="hide-items__box">
                    <p className="hide-items__ellipse">{ellispe}</p>
                    <div className="hide-items__btn-box">
                        <button onClick={onClick} className="hide-items__btn">{btnTitle}</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectList;