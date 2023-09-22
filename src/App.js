import './App.css';
import React from 'react';

import {useState, useEffect} from "react";

function App() {
    const [fake, setFake] = useState([]);
    // console.log(fake)
    useEffect(() => {
        fakeStore();
    }, [0])

    const fakeStore = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        // console.log(response)
        const jsonData = await response.json();
        console.log(jsonData);
        setFake(jsonData);
    }
    // fakeStore();

    // fetch('https://fakestoreapi.com/products')
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))
    //
    // fetch('https://fakestoreapi.com/products?limit=5')
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))


    return (
        <>
            <div className="p-6 flex justify-center items-center font-extrabold bg-gray-400 text-5xl">
                <h1> This Page For API Integration</h1>
            </div>
            <div className={"flex flex-wrap mx-5   justify-center justify-evenly"}>
                {fake.map((values) => {
                    return (
                        <div className={" grid bg-gray-200 m-2 w-1/4 rounded-lg "}>
                            <h1 className={"mx-10 text-2xl flex justify-center"}>{values.title}</h1>
                            <h3 className={"m-2"}>{values.description}</h3>
                            <img className="h-4/5 w-4/5 flex item-center ml-8 justify-center " src={values.image}/>
                        </div>
                    )
                })}
            </div>

        </>
    );
}

export default App;
