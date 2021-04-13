import './App.css';
import Search from "./components/Search";
import List from './components/List'
import {useState} from "react";
import {getSongs} from "./api";


function App() {

    const [songsList, setSongsList] = useState([])

    const handleSubmit = (e, query) => {
        e.preventDefault();
        const trimmedQuery = query.trim();
        getSongs(trimmedQuery)
            .then(res => {
                // zakomentirano da možemo provjeriti vrstu podataka i način na koji ih kasnije prikazujemo
                //console.log(res)
                setSongsList([...res.results])
            })
    }

    return (
        <div className="App">
            <Search onHandleSubmit={handleSubmit}/>
            <List list={songsList}/>
        </div>
    );
}

export default App;
