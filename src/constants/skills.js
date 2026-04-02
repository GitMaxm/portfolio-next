import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiGit,
    SiTypescript
} from 'react-icons/si';
// Иконка Swiper (используем общую иконку JavaScript или можно найти специализированную)
import { SiJavascript as SiSwiper } from 'react-icons/si';

const skills = [
    {
        name: "HTML5",
        icon: <SiHtml5 size={40} color="#E34F26" />,
        description: "Семантическая структура, SEO-дружественная разметка",
        level: "уверенный"
    },
    {
        name: "CSS3",
        icon: <SiCss3 size={40} color="#1572B6" />,
        description: "Адаптивный дизайн, Flexbox, Grid, анимации",
        level: "уверенный"
    },
    {
        name: "SCSS",
        icon: <SiSass size={40} color="#CC6699" />,
        description: "Переменные, миксины, вложенность, организация кода",
        level: "уверенный"
    },
    {
        name: "JavaScript",
        icon: <SiJavascript size={40} color="#F7DF1E" />,
        description: "ES6+, асинхронное программирование, работа с API",
        level: "уверенный"
    },
    {
        name: "TypeScript",
        icon: <SiTypescript size={40} color="#3178C6" title="TypeScript" />,
        description: "Статическая типизация, дженерики, продвинутые типы",
        level: "уверенный",
    },
    {
        name: "React",
        icon: <SiReact size={40} color="#61DAFB" />,
        description: "Функциональные компоненты, хуки, управление состоянием",
        level: "практический"
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs size={40} color="#000000" />,
        description: "SSR, статическая генерация, маршрутизация",
        level: "практический"
    },
    {
        name: "Swiper",
        icon: <SiSwiper size={40} color="#0080FF" />, 
        description: "Создание адаптивных слайдеров, кастомизация, управление через JS, интеграция с React",
        level: "практический"
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss size={40} color="#06B6D4" />,
        description: "Утилитарные классы, адаптивность, кастомизация через config",
        level: "базовый"
    },
    {
        name: "Git",
        icon: <SiGit size={40} color="#F05032" />,
        description: "Ветвление, работа в команде, базовая CI/CD-логика",
        level: "базовый"
    }
];

export default skills;