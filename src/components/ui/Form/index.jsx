'use client';

import './style.css'

import { useState } from "react";
import SocialLinks from '../ui/SocialLinks';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isPolicyChecked, setIsPolicyChecked] = useState(false); // Состояние для политики
    const [error, setError] = useState(''); // Для отображения ошибок



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePolicyChange = (e) => {
        setIsPolicyChecked(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isPolicyChecked) {
            setError('Пожалуйста, согласитесь с политикой конфиденциальности');
            return;
        }

        const url = "sendmessage.php";
        const formToSend = new FormData();

        formToSend.append('name', formData.name);
        formToSend.append('email', formData.email);
        formToSend.append('message', formData.message);

        try {
            const response = await fetch(url, {
                method: "POST",
                body: formToSend
            });

            if (response.ok) {
                alert("Форма отправлена");
                setFormData({ name: '', email: '', message: '' });
                setIsPolicyChecked(false); // Сбросить чекбокс после отправки
                setError(''); // Очистить ошибку
            } else {
                alert('Ошибка!');
            }
        } catch (error) {
            alert('Произошла ошибка при отправке формы');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2 className="form-title">Связаться со мной</h2>

            <input
                required
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleInputChange}
                className="form__input"
            />
            <input
                required
                type="email"
                name="email"
                placeholder="Почта"
                value={formData.email}
                onChange={handleInputChange}
                className="form__input"
            />
            <textarea
                required
                name="message"
                placeholder="Сообщение"
                value={formData.message}
                onChange={handleInputChange}
                className="form__input"
            />

            <label className="policy-checked">
                <input
                    type="checkbox"
                    checked={isPolicyChecked}
                    onChange={handlePolicyChange}
                />
                <p>Я согласен с <a href="privacy-policy.html" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a></p>
            </label>

            {error && <p className="policy-checked" style={{ color: 'red' }}>{error}</p>}

            <button className="form__button" type="submit">Отправить</button>

            <div className="social-links">
                <SocialLinks />
            </div>
        </form>
    );
}

export default Form;
