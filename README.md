                                    Answer To The Question No 01 

1. Difference between getElementById, getElementsByClassName, querySelector and querySelectorAll

getElementById is used to select one element by its id. Since id is unique, it always gives only one element.

getElementsByClassName is used to select elements by class name. Many elements can have same class, so it gives a collection of elements, not just one.

querySelector can select element using id, class, tag name and more. But it only gives the first matching element.

querySelectorAll is similar to querySelector but it gives all matching elements.

So the main difference is how many elements they return and how flexible they are.




                                 Answer To The Question No 02 
2. How to create and insert a new element into the DOM

First we create a new element using JavaScript. Then we can add text or class to that element. After that, we insert it into the DOM inside a parent element like body or div.

So the steps are simple: create the element, modify it, and then add it to the page.




                                 Answer To The Question No 03 

3. What is Event Bubbling? And how does it work?

Event bubbling means when an event happens on a child element, it does not stop there. It goes up to its parent element, then to grandparent, and continues like that.

For example, if we click a button inside a div, first the button event works, then the div event also works.

So the event moves from inner element to outer element.



                                 Answer To The Question No 04 

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means we add event listener to a parent element instead of adding to every child element.

Because of event bubbling, the parent can know which child was clicked.

It is useful because it saves memory, improves performance, and also works for elements that are added later dynamically.



                                 Answer To The Question No 05 

5. Difference between preventDefault() and stopPropagation()

preventDefault() stops the default action of an element. For example, it can stop a form from submitting or a link from opening.

stopPropagation() stops the event from going to parent elements.

So one stops default behavior, and the other stops the event from moving upward.