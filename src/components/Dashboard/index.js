import React from 'react';
import CreateCanvas from "./components/CreateCanvas";

function Dashboard(props) {
    return (
        <nav className="dashboard">
            <CreateCanvas  />
        </nav>
    );
}

export default Dashboard;