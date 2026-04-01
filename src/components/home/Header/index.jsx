// import ModalForm from "../ModalForm";

const Header = () => {


    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Привет, меня зовут <em>Максим</em></strong>
                    <br />фронтенд-разработчик
                </h1>

                <div className="header__text">
                    <p>Превращаю макеты в быстрые и интерактивные сайты на React</p>
                </div>

                {/* <ModalForm /> */}

            </div>



        </header>
    );
}

export default Header;
