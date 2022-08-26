## JavaScript concepts used
1. ### map and forEach function
- input as array
- output a modified array

2. ### setAttribute
- class of tailwind given inside the script

3. ### Take tailwind sections from [MambaUI](https://mambaui.com/components/card)
- Add in script using setAttribute and class

4. ### DOM manipulation

5. ### local storage
####  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
- Because the variable cartData must be initialized with the already existing cart elements

6. ### ES6

7. ### addEventListener("click", function(){})
- no parameters for the function
- Execution happens inside the {}
- You don't need it when you've href to go to another file

8. ### Uncaught ReferenceError: removeBtn is not defined
- The stuff after : is not defined

9. ### splice 
- splice(indexReceived, 1)
- This would remove one object at the index indexReceived

10. ### reduce function
- It has similar functionality  like for loop
- split(" ") function separate the ₹ and 9999
- splice(1) would output the element at the position 1
- return num is one of the parameter for function inside the reduce function
- },0); is initializing the sum = 0

11. ### class, constructor function and objects
- Purpose: To have common properties for all other functions 

12. ### not using event.preventDefault()
- So that we could have empty form after clicking on submit
- Since stored to local storage, there is no need of console
- It could be used to console the values 

13. ### when all the logic is working and no result showing
- check the console

14. ### regex
- /[0-9]/.test(ch)
- returns true if ch is between 0 and 9

15. ### Addition to 7-Ecommerce-1
- address page
- quantity in detail.html
- remove button
- total of the products 
- more quantity of the products could be added

16. ### alert
- Display the alert in the page

17. ### use of tailwind with DOM
- You could copy the class from the tag to the DOM


## Explanation video : [link](https://drive.google.com/file/d/1hLy3NatZIi0DJ2K77h7ZSV156xMGjP68/view?usp=sharing)

## Deployed link : [link](https://7-ecommerce-1-locstr-dom.netlify.app/)

## Common errors
1. ### flex more text and the card going out of bottom line

2. ### a.href = "samepage.html"
- The page gets refreshed and function inside the a tag was not working

3. `PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
isTrusted: true
altKey: false
altitudeAngle: 1.5707963267948966
azimuthAngle: 0
bubbles: true`

4. ### function submit()
- submit only can't be function name

5. ### onclick inside form and when you click anywhere inside the form is registered
- Solution: use it inside the button

6. ### onclick = () =>{} and when you click anywhere is the page the click is run
- Solution: use it for particular div or tag

7. ### ![alt text](https://ibb.co/K2q1qCq)
- Don't panic when you don't see anything
- You have to correct the error
- You should not take length of null


## More to do
1. ### Cart items shows the quantity * number of items


