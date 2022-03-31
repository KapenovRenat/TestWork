import React from 'react';
import {useSelector} from "react-redux";
import {State} from "../../reducers";

const MainLayout = () => {
    const data = useSelector((state:State) => state.main);

    return (
        <div>
            <p>Project Name: {data.name}</p>
            <span>Version: {data.version}</span>
        </div>
    );
}

export default MainLayout;
