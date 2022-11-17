import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const Component = ({ value }) => {
    return <div>Компонент списка {value}</div>;
};
Component.propTypes = {
    value: PropTypes.string
};
const ListComponent = ({ children }) => {
    return React.Children.map(children, (child) => {
        console.log("children:", children);
        console.log("child:", child);
        const config = {
            ...child.props,
            value: children.indexOf(child) + 1
        };
        console.log("config", config);
        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
