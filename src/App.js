import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const AppLayout = () => {
    const [sampleVar, setSampleVar] = useState("Hello World")
    useEffect(() => {fetchData();}, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        console.log(json)
    }

    return (
        <Provider store={appStore}>
            <div id="app-container">
        <h1>{sampleVar}</h1>
        <br/>
        <br/>
        {/*  */}
        <button onClick = {() => {
            sampleVar === "Hello World" ? setSampleVar("Hello React") : setSampleVar("Hello World")
        }}>Click Me</button>
        <Header />
        <Body /> 
    </div>
        </Provider> 
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);


// const btn = document.querySelector(".btn")
// const btnPress = document.querySelector(".inc_press")
// const count = document.querySelector(".inc_count")

// var incPress = 0
// var incCount = 0

// const debounceCount = _.debounce(() => {
//     count.innerHTML = ++incCount
// }, 800)

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++incPress;
//     debounceCount()
// })

// const myDebounce = (cb, d) => {
//     let timer;
//     return function(...args) {
//         if(timer) clearTimeout(timer)

//         timer = setTimeout(() => {
//             cb(...args)
//         }, d)
//     }
// }

// const myThrottle = (cb, d) => {
//     let last = 0;

//     return () => {
//         let now = new Date().getTime();
//         if(now-last < d) return;
//         last = now
//         return cb(...args)
//     }
// }