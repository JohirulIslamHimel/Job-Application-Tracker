1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
-- getElementById: It selects a single element using its unique ID. It is very fast and returns only one element. Example: document.getElementById("total-count")

-- getElementsByClassName: This is used to select all elements that have a specific Class name. It returns a list of elements (called an HTMLCollection).
Example:document.getElementsByClassName("card")

-- querySelector: This is very flexible. It uses CSS selectors (like ".class", "#id", or "tag") to find the first matching element. It returns only one element.
Example:document.querySelector(".status")

-- querySelectorAll: It also uses CSS selectors but finds all matching elements and returns a NodeList, which is easy to use with loops like .forEach() or for of.
Example: document.querySelectorAll(".card").

2. How do you create and insert a new element into the DOM?

Ans:
To create and insert a new element into the DOM, we follow three simple steps:

1.Create the element: Use document.createElement() to create a new tag.

2.Set: Use innerText,innerHTML, or classList to add data to the element.

3.Insert into the DOM: Use .appendChild() to attach the new element to an existing parent element.

3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is a way that events (like clicks) travel through the DOM. When we click an element, the event doesn't just stay there—it "bubbles up" to its parent elements like a bubble rising in water.

#How it works:

-- First, the event triggers on the target element (the child). Then, it automatically moves up to the parent, then the grandparent, and continues all the way to the top (document).

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Delegation is a smart way to handle events. Instead of adding a "click listener" to every single button or item, we add just "one" listener to their Parent element.
Because of "Event Bubbling," when we click a child, the parent also hears it. We can then find out which specific child was clicked by using "event.target".

#Why should we use it:
1.Better Speed: If we have 50 or 100 buttons, adding 100 listeners makes the website slow. One listener is much better for performance.

2.Easy for New Items: If we add a new items using JavaScript, it will work automatically because the parent is already watching. We don't need to add a new listener for the new card.

3.Cleaner Code: It makes our code simple and easy to read.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:
Both methods help us control how events work, but they do different jobs.

1. preventDefault()
   This stops the default behavior of the browser.

--If we click a link, it normally goes to a new page. If we use preventDefault(), the link will stay on the same page, and we can run our own code instead.

--It stops the browser's automatic action.

2. stopPropagation():
   This stops the event from bubbling up to parent elements.

--If we click a button inside a div, the click will also trigger the div's event. If we use stopPropagation(), the click stays only on the button and does not go to the div.

--It stops the event from moving up to the parent.
