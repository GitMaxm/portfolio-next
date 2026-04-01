import ModalForm from "../ModalForm";

const Header = () => {


    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Привет, меня зовут <em>Максим</em></strong>
                    <br />я создаю сайты на заказ по всей России
                </h1>
                <div className="header__text">
                    <p>От идеи до готового сайта с поддержкой после запуска</p>
                </div>

                <ModalForm />

            </div>



        </header>
    );
}

export default Header;
