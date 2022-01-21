import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterCards, promiseAllCards} from "../store/actions/mtg";

const Mtg = () => {
    const dispatch = useDispatch();
    const {cards, types, subtypes, loading, error} = useSelector(state => state.mtg);
    const [color, setColor] = useState(['Зелёный','Синий','Красный','Чёрный','Белый']);
    const [filter, setFilter] = useState({types: '', subtypes: '', colors: '', name: ''})

    useEffect(() => {
        dispatch(promiseAllCards())
    }, []);


    const searchCard = async (e) => {
        e.preventDefault();
        dispatch(filterCards(filter))
    }

    const clearFilter = e => {
        e.preventDefault();
        setFilter({types: '', subtypes: '', colors: '', name: ''})
    }

    if (loading) {
        return <h1>Загрузка...</h1>
    }
    if (error) {
        return <h1>Ошибка загрузки...</h1>
    }

    return (
        <div className="container">
            <h1>MTG</h1>
            <div className="magic-top">
                {error ? <p>{error}</p> : null}
                <div className="magic-filter">
                    <div className="magic-block">
                        <div className="magic-block__title">Тип карты</div>
                        <select name="" className="magic-block__select" onChange={e => setFilter({...filter, types: e.target.value})}>
                                <option disabled value="">Пусто</option>
                                {types.map(el =>
                                    <option value={el} key={el}>{el}</option>
                                )}
                            </select>
                    </div>
                    <div className="magic-block">
                        <div className="magic-block__title">Тип существа</div>
                        <select name="" className="magic-block__select" onChange={e => setFilter({...filter, subtypes: e.target.value})}>
                            <option disabled value="">Пусто</option>
                            {subtypes.map(el =>
                                <option value={el} key={el}>{el}</option>
                            )}
                        </select>
                    </div>
                    <div className="magic-block">
                        <div className="magic-block__title">Цвет существа</div>
                        <select name="" className="magic-block__select" onChange={e => setFilter({...filter, color: e.target.value})}>
                            <option disabled value="">Пусто</option>
                            {color.map(el =>
                                <option value={el} key={el}>{el}</option>
                            )}
                        </select>
                    </div>
                    <div className="magic-block">
                        <div className="magic-block__title">Поиск по имени</div>
                        <input className="magic-block__input" type="text" placeholder="Введите имя карты" onChange={e => setFilter({...filter, name: e.target.value})} />
                    </div>
                </div>
                <div className="magic-top__submit">
                    <a href="#" className="magic-top__submit-link" onClick={searchCard}>ПОИСК</a>
                    <a href="#" className="magic-top__submit-link" onClick={clearFilter}>ОЧИСТИТЬ</a>
                </div>
                <div className="magic-list">
                    {cards.map(card =>
                        <div className="magic-item" key={card.id}>
                            <div className="magic-item__anim">
                                <img src={card?.imageUrl ? card?.imageUrl : 'https://sun1-87.userapi.com/c624616/v624616696/24996/AxoLBHx55yY.jpg'} alt="" className="magic-item__img" />
                            </div>
                            <div className="magic-item__body">
                                <div className="magic-item__text magic-item__name">Имя: <span>{card?.name}</span></div>
                                <div className="magic-item__text magic-item__color">Цвет: <span>{card.colors}</span></div>
                                <div className="magic-item__text magic-item__mana">Мана стоимость: <span>{card?.cmc}</span></div>
                                <div className="magic-item__text magic-item__mana">Количество маны: <span>{card?.manaCost}</span></div>
                                <div className="magic-item__text magic-item__type">Тип: <span>{card?.type}</span></div>
                                <div className="magic-item__text magic-item__type">Редкость: <span>{card?.rarity}</span></div>
                                <div className="magic-item__text magic-item__subtypes">Сила: <span>{card?.power}</span></div>
                                <div className="magic-item__text magic-item__set">Набор: <span>{card?.setName}</span></div>
                                <div className="magic-item__text magic-item__text">Описание: <span>{card?.originalText}</span></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Mtg;