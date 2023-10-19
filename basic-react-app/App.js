const heading1 = React.createElement("h1", {id: "heading1", className:"header"}, "Hello World from React");
/* 

createElement returns a Javascript Object not a HTML tag
It accepts 3 arguments tag, Object with attributes, Children
If we want to have a nested child Elements or add siblings use array of children (see below)
root.render() replaces the HTML content if we have any in our HTML with the content that we render
As a library React can be inititate in parts of the Existing Application by simply creating a Root, that part of the application can be React. For this purpose React is
called  as a library instead of Framework
*/
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading1);


const heading2 = React.createElement("h2", {id: "heading2"}, "Hello World Heading2");
const container = React.createElement("div", {className: "container"}, [heading1, heading2])
const headerRoot = ReactDOM.createRoot(document.getElementById("root2"))
headerRoot.render(container)

