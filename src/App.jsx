import { Outlet } from 'react-router-dom';

function App () {
    return (
        <div className="App">
            <div className="step">
                <div className="content">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>   
    )
}

export default App;