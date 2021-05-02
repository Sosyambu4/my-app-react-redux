import React from 'react';
import './App.css';
import {Accordion} from './Components/Accordions/Accordion';
import {Rating} from "./Components/Rating/Rating";

/*function hello() {
    alert('Hello')
}

hello();*/
type PageTitlePropsType ={
    title: string
}


function App() {
    console.log("App rendering")
    return (
        <div>
            <input/>
            <input checked={true} value={"yo"} type={"password"}/>

            <PageTitle title={'This is App component'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'}/>
            <Accordion titleValue={"yo"}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props:PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1> {props.title}</h1>
}


export default App;
