export const data = [
    {
      id : 1,
      question: "What is React?",
      answer : `React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. 
                It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. 
                React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.`
    },
    {
      id : 2,
      question : "What are the major features of React?",
      answer : `The major features of React are:
                  -> It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
                  -> Supports server-side rendering.
                  -> Follows Unidirectional data flow or data binding.
                  -> Uses reusable/composable UI components to develop the view.`
    },
    {
      id : 3,
      question : "What is JSX?",
      answer : `JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). 
                Basically it just provides syntactic sugar for the React.createElement() function, 
                giving us expressiveness of JavaScript along with HTML like template syntax.`
    },
    {
      id : 4,
      question : "What is the difference between Element and Component?",
      answer : `An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. 
                Elements can contain other Elements in their props. 
                Creating a React element is cheap. Once an element is created, it is never mutated.
                
                a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. 
                In either case, it takes props as an input, and returns a JSX tree as the output`
    },
    {
      id : 5,
      question : "When to use a Class Component over a Function Component?",
      answer : `If the component needs state or lifecycle methods then use class component otherwise use function component. 
                However, from React 16.8 with the addition of Hooks, you could use state , 
                lifecycle methods and other features that were only available in class component right in your function component.`
    },
    {
      id : 6,
      question : "What are Pure Components?",
      answer : `React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. 
                When props or state changes, PureComponent will do a shallow comparison on both props and state. 
                Component on the other hand won't compare current props and state to next out of the box. 
                Thus, the component will re-render by default whenever shouldComponentUpdate is called.`
    },
    {
      id : 7,
      question : "What is state in React?",
      answer : `State of a component is an object that holds some information that may change over the lifetime of the component. 
                We should always try to make our state as simple as possible and minimize the number of stateful components.`
    },
    {
      id : 8,
      question: "What are props in React?",
      answer : `Props are inputs to components. They are single values or objects containing a set of values that are passed to 
                components on creation using a naming convention similar to HTML-tag attributes. 
                They are data passed down from a parent component to a child component.`
    },
    {
      id : 9,
      question : "What is the difference between state and props?",
      answer : `Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, 
                they are different in their functionality with respect to component. Props get passed to the component similar to function parameters 
                whereas state is managed within the component similar to variables declared within a function.`
    }
  ]