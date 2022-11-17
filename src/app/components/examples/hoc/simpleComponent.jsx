import React from "react";

import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = (props) => {
    const { onLogin, onLogout, isAuth } = props;
    return (
        <>
            <Subtitle>
                {!isAuth ? (
                    <button onClick={onLogin} className="btn btn-primary">
                        Войти
                    </button>
                ) : (
                    <button onClick={onLogout} className="btn btn-secondary">
                        Выйти из системы
                    </button>
                )}
            </Subtitle>
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
