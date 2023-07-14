import MyButton from "./Components/Button";
import Avatar from "./Components/Avatar";


const user = {

  name: 'Christopher Robin',
  // eslint-disable-next-line
  imageUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2011%2F07%2F13%2Fchristopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5.jpg\&tbnid=nS1rvO2HUn5IaM\&vet=12ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ..i\&imgrefurl=https%3A%2F%2Fwww.npr.org%2F2011%2F07%2F13%2F137816699%2Fwill-christopher-robin-ever-grow-up\&docid=0KPOynmmJAlCxM\&w=765\&h=573\&q=christopher%20robin\&ved=2ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ",

  imageSize: 90,

};

export default function CodeTalk(){
  return(
    <div>
      {/* code for problem 1 */}
      <h1>Welcome to Codetalks</h1>
      <MyButton title="Add to cart"/>
      <MyButton title="Find out more"/>

      {/* code for problem 2 */}
      <Avatar name={user.name} imageUrl={user.imageUrl} imageSize={user.imageSize}/>
    </div>
  );
};

// PROBLEM 1

// Code Explanation:
// I created a mybutton component that takes in 'title' prop
// this title prop will be the text for the button
// In app.js I import the Mybuttom and render it twice with the desired titles

// Describe how props work:
// Props allow data to be passed into a component. This allows for more dynamic content
// by allowing us to be able to reuse components by just inputing different prop values as we need

// What is the difference between props and state?:
// state is data that is internal to the component and which causes the component to re-render when 
// it changes. Props are external data that is passed in.


// PROBLEM 2

// Code Explanation:
// First I created Avatar component that takes the props name, imageurl, and imagesize
// Inside Avatar component I render a img with that takes in the props for the src, alt, and width
// I also created a header tag that takes in the name prop
// then in my app.js I intialize the user variable that holds the data
// Then I render the Avatar component using the user data as the props

// Describe how curly braces are useful to display data:
// The curly braces are crucial to displaying data because it allows us to inject whatever data 
// we want to display into the components as props


// Problem 3
// Visit the https://react.dev/learn website
// explain the diagram and writeup in the Using Hooks example in detail:
// The diagram on the react.dev website gives a visual to how we can share state between components
// by using the useContext hook and context providers

// Why are hooks beneficial?  
// Some benefits of hooks are:
  // to share stateful logic between components
  // Avoid duplication of logic
  // split components into smaller functions

// Can Hooks be used in class components?  
// Hooks can only be used in functional components.

// What other hooks are available other than useState and useEffect? 
// Some examples of other hooks are:
  // useReducer: for state management
  // useCallback: returns memoized callback
  // useMemo: returns memoized value
