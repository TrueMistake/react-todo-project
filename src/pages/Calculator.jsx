import React, {useState} from 'react';
import {useSelector} from "react-redux";
import MyInput from "../components/MyInput";

const Calculator = () => {
    const services = useSelector(state => state.calculator.services);
    const totalResult = useSelector(state => state.calculator.total);
    const [check, setCheck] = useState(services);
    const [total, setTotal] = useState(totalResult)

    const arrayChecked = (index, checked) => {
        const newCheckbox = [...check];
        newCheckbox[index].checked = checked;
        setCheck(newCheckbox);
        if (checked) {
            setTotal(total + newCheckbox[index].price);
        } else {
            setTotal(total - newCheckbox[index].price);
        }
    }

    const reCalcTotal = (value, price) => {
        console.log('value',value)
        console.log('price',price)
        setTotal(total - price + value);
    }



    return (
        <div className="container">
            <h1>Калькулятор</h1>
            <div className="service-list">
                {services.map((service, index) =>
                    <div className="service-item" key={service.id}>
                        <div className="service-title">{service.title}</div>
                        <div className="service-description">{service.description}</div>
                        <div className="service-credit">Сумма кредита: <span>{service.price}</span> ₽</div>
                        <MyInput
                            className="service-pay"
                            type="text"
                            disabled={!check[index]?.checked}
                            onChange={e => reCalcTotal(e.target.value, service.price)}
                        /> ₽
                        <label className="service-label">
                            <MyInput
                                type="checkbox"
                                className="service-check"
                                onChange={e => arrayChecked(index, e.target.checked)}
                            />
                            <span className="service-span">Оплачу</span>
                        </label>
                    </div>
                )}
            </div>
            <div className="service-total">Сумма к оплате: {total} ₽</div>
            <div className="btn">Оформить</div>
        </div>
    );
};

export default Calculator;