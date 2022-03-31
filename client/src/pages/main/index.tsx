import React from 'react';
import MainLayout from "../../layout/main";
import Nav from "../../components/nav";

interface Props {
    path: string;
}

const MainPage = (props: Props) => {
    return (
        <div>
            <Nav />
            <MainLayout />
        </div>
    );
}

export default MainPage;
