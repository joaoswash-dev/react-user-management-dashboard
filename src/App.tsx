import {Sidebar} from './components/Sidebar/Sidebar';
import {Header} from './components/Header/Header';
import {Dashboard} from './pages/Dashboard/Dashboard';

function App() {
    return (
        <div style={{
                display: 'flex',
                height: '100%',
                width: '100%',
            }}>
            <Sidebar/>
            <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <Header/>
                <main style={{
                        flex: 1,
                        padding: '24px',
                        overflow: 'auto',
                        backgroundColor: '#ffffff',
                    }}>
                    <Dashboard/>
                </main>
            </div>
        </div>
    );
}

export default App;
