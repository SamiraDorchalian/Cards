const htmlEl = document.getElementById("html");
const cssEl = document.getElementById("css");
const javascriptEl = document.getElementById("javascript");
const reactEl = document.getElementById("react");

htmlEl.innerHTML = `
    <h2>HTML</h2>
    <p>
        The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
    </p>
    <p>
        Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.
    </p>
`;

const hTwo = document.createElement("h2");
hTwo.innerText = "CSS";
const pEl = document.createElement("p");
pEl.innerText =
  "CSS stands for Cascading Style Sheets, and it's used to add style to a web page by dictating how a site is displayed on a browser. CSS is unique in that it doesn't create any new elements, like HTML or JavaScript. Instead, it's a language used to style HTML elements.";

hTwo.appendChild(pEl);
cssEl.appendChild(hTwo);

javascriptEl.innerHTML = `
    <h2>JavaScript</h2>
    <p>
        JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.
    </p>
`;

const hTwo2 = document.createElement("h2");
hTwo2.innerText = "REACT";
const pTagEl = document.createElement("p");
pTagEl.innerText =
  "React.js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.";
hTwo2.appendChild(pTagEl);
reactEl.appendChild(hTwo2);
