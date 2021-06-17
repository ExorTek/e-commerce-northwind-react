import './App.css';
import Dashboard from "./layouts/Dashboard";
import 'semantic-ui-css/semantic.min.css';
import {Container} from "semantic-ui-react";
import Navi from "./layouts/Navi";
import {useEffect} from "react";
import {baseApiUrl} from "./services/baseApiUrl";
import axios from "axios";

function App() {
    useEffect(() => {
        axios.get(baseApiUrl + 'OK').catch(()=>
            alert("Api Bağlantısı Kurulamadı. ")
        )
    }, [])

    return (
        <div className="App">
            <Navi/>
            <Container className='main'>
                <Dashboard/>
            </Container>
        </div>
    );
}

export default App;
