import {useState} from 'react'
import './App.css'
import Nav from "./pages/partials/Nav.tsx";
import Footer from "./pages/partials/Footer.tsx";
import Board from "./component/Board.tsx";

function App() {
    return (
        <>
            <Nav/>
            <main className={'h-64 m-12'}>
                <Board/>
            </main>
            <Footer/>
        </>
    )
}

export default App;
