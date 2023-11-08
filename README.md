# React Notes

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Caching - Faster Builds
- File Watching Algorithm
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support old browsers
- Diagnostics
- Error Handling
- Tree Shaking - remove unused code

# Useful Extensions and Dev Tools
- JSON Viewer - chrome extesion to view the API responses
- Allow CORS: Access-Control-Allow-Origin - chrome extension to bypass CORS error


Two types of Export/Import

- Default Export/Import - Only one default export per file

export default Component;
import Component from "path";

- Named Export/Import - If we want to export multiple things from a file

export const Component;
import {Component} from "path";

# React Hooks
(Normal JS Utility Functions)

import {useState, useEffect} from "react"

# useState() 
    - This hook is used to create Superpowerful State Variables
    - Always needs to be declared inside body of the Functional component not outside
    - It is used to create Local State variables for the compoennt
    - Never use useState Hook inside if else conditions, for loops, functions to create STate variables because this will cause some inconsistencies in the code

# useEffect(()=> {}, []) 
    - Takes in two Arguments, Callback function and dependency array. useEffects callback function is called after the initial rendering, basically every time the component renders if there is no dependency array provided.
    - If no dependency array => useEffect is called on every render
    - If dependency array is empty = [] => useEffect is called on initial render (Just Once)
    - If dependency array is eg: [btnReact] => callled every time btnReact is updated

# useContext()
    - props-drilling - passing props from one component to it's nested components
    - By using React Context we can avoid the Props-Drilling basically it's a global state that can be used by deeply nested components
    - import { createContext } from 'react';
    - Eg: const userContext = createContext({'loggedInUser': 'Default User'})
        export default userContext
    - Just import it in the component that we want to use and using "useContext" Hook we can extract it
    - const { loggedInUser } = useContext(userContext)
    - If we want to have this context in Class based component we need to use 
        <UserContext.Consumer> {(data) => console.log(data)}</UserContext.Consumer> 
    - If we want to modify the context then we can use "Context Provider" and wrap the components with that Provider
        <UserContext.Provider value={}> <div><Header/> <Outlet /></div></UserContext.Provider> 
    - For Small and Medium sized applications we can use React Context fro global state management, but as the application grows we can rely on External State Management libraries like REDUX.

# useMemo() - const cachedResult = useMemo(calculatedValue, [dependencies])
    - React Hook that lets you cache the result of a calculation between re-renders
    - this improves performance of a react application
    - on changing state variable react compoenent re-renders every time, and if there is any complex calculation on every re-render that reduces the performance the app, we need to use Memoization to cache and improve the performance
    - const [text, setText] = useState(0)
    - const [isDarkTheme, setDarkTheme] = useState(false) 
    - const prime = useMemo(() => findPrime(text), [text])

# useCallback() - const cachedFn = useMemo(fn, [dependencies])
    - React Hook that lets you cache a function definition between re-renders

# useRef() - const ref = useRef(initialValue)
    - React Hook that lets you reference a value that's not needed for rendering

# useRouteError()
    - This will return the useful Error object for all the errors in Routing

# useParams()
    - Used to extract route params



- Virtual DOM - Object representation of Actual DOM
- Actual DOM
- React Fiber (Reconciliation Algorithm)
- React Efficiently updates the DOM, that is why React is Fast and Popular


# React Router
- npm i react-router-dom
- import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
- createBrowserRouter will have the routing configuration
- RouterProvider component will provide the routing config to our App
- Outlet compoennt used to load the Children Routes
- import { Link } from "react-router-dom"
- Don't use <a> tag to switch between the routes, because it will refresh the entire page which we  don't want
- Use Link component provided by React (<Link to="/about">About</Link>)
# Two types of routing
    - Client Side Routing - Single page applications use this type of routing, which will only fetch one page on intial load and thereafter only the components gets refreshed/rendered based on route
    -Server Side Routing - These are fetched from the server everytime a link is clicked on the page, Network call will be made to fetch that page.
# Dynamic Routing
    - /about/:id - based on the id load the component
    - import { useParams } from "react-router-dom"
    - useParams Hook is used to read the Route Params


# Class Based Components
- React Lifecycle Methods - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- Two types of Lifecycle Phases Render Phase and Commit Phase

- Mounting
    - Render Phase
        - constructor(props)
        - render

    - Commit Phase
        - React updates DOM and Refs
        - componentDidMount()
            - <API Call>
            - this.setState called - State variable is updated

- Update
    - render (API data)
    - React updates DOM
    - componentDidUpdate() is called

- Unmounting
    -componentWillUnmount()


# Optimization
- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On Demand Loading
- Dynamic Import
    - import {lazy, suspense} from "react"
    - lazy(() => import("path_to_component"))
    - <Suspense fallback={<FallbackCOmponent/>}><LazyComponent /></Suspense>


# Tailwind CSS

# Higherorder Components
- HOCs are functions which take component as an input and enhances that component and returns a new component
- Pure Funtions - Higher order components are pure functions, because they don't modify the passed in component they just enhance that component


# UI Layer and Data Layer
- UI Layer is plain JSX code
- Data Layer is all the Props, State, code within the {} in JSX
- State-lifting - sometimes we need to lift the state up to control the child components
    - For example Accordian with auto collapsing
- Controlled and Uncontrolled components
    - If a component is controlled by the parent component i.e.. the state is handled in parent component and passed into child component to handle it's behavior we call it controlled component.

- Changing a State variable of a parent component in a child component
    - we can pass in the useState's callback function and call it in the child component on some action in child component

# REDUX
- Handling the data using Redux, creating store, managing store, retrieving data from store
- Redux offers easy debugging for our applications
- Redux devtools is used for debugging
- A predictable STate Container for JS Apps
- React-Redux, Redux-Toolkit 
- Redux Toolkit package is intended to be that standard way to write Redux logic
- Redux Store is a Big JS Object kept in a global central space and any component can access it
- We cannot directly modify the state.
- Write Data --> dispatch (ACTION) --> Calls a function (REDUCER) --> this function modifies the slice of our redux store
- Read Data --> Use SELECTOR to read the data from Store --> This is basically Subscribing to the Store

# Redux Toolit
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - Slice
    - dispatch(action)
    - Selector

- import { configureStore } from "@reduxjs/toolkit"; --> To create Store
- import { Provider } from "react-redux"; --> To provide Store to our React App
# useSelector Hook
    - To subscribe to store and read from store
    **NOTE: Make sure to subscribe to right/specific/small portion of the store otherwise it will be a performance bottleneck
        const cartItems = useSelector((store) => store.cart.items)
# useDispatch Hook
    - To dispatch an action
        const dispatch = useDispatch()
        const handleAddItem = () => { dispatch(addItem("pizza"))}

- Redux Thunk, Redux Middleware
- RTK Query is the new way of making asynchronous calls and store data in our redux store.
