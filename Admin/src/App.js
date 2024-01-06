import React, {useState} from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Books from './pages/Books';
import IssuedBooks from './pages/IssuedBooks';
import ReturnedBooks from './pages/ReturnedBooks';
import Students from './pages/Students';

const App = () => {
    const [currentPage, setCurrentPage] = useState(null);

    const handleButtonClick = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Page1':
                return <Dashboard/>;
            case 'Page2':
                return <Books/>;
            case 'Page3':
                return <IssuedBooks/>;
            case 'Page4':
                    return <ReturnedBooks/>;
            case 'Page5':
                        return <Students/>;    
            default:
                return null;
        }
    };

    return (
        <div className="admin-panel">
            <div className={"container_flex_col admin-left-side"}>

                <div className={"admin_left_header"}>
                    <div className={"header_left"}/>
                    <div className={"header_title"}>
                        <p> ADMIN DASHBOARD</p>
                    </div>
                </div>

                <div className={"container_flex_col admin_button_section"}>
                    <button className={currentPage === 'Page1' ? 'selected btn' : ''}
                            onClick={() => handleButtonClick('Page1')}>Dashboard
                    </button>
                    <button className={currentPage === 'Page2' ? 'selected btn' : ''}
                            onClick={() => handleButtonClick('Page2')}>Books
                    </button>
                    <button className={currentPage === 'Page3' ? 'selected btn' : ''}
                            onClick={() => handleButtonClick('Page3')}>Issued Books
                    </button>
                    <button className={currentPage === 'Page4' ? 'selected btn' : ''}
                            onClick={() => handleButtonClick('Page4')}>Returned Books
                    </button>
                    <button className={currentPage === 'Page5' ? 'selected btn' : ''}
                            onClick={() => handleButtonClick('Page5')}>Students
                    </button>
                </div>

                <div className={"admin_bottom"}>
                    <button className={"btn"}>LogOut
                    </button>
                </div>

            </div>

            <div className="page-container">
                {renderPage()}
            </div>
        </div>
    );
};

export default App;
