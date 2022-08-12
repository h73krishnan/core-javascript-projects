## New ideas
1. ### Random number generator in javascript
Every time when the event is called new number is generated
2. ### form type submit
3. ### Display 0 before local storage
### Time taken : 6 hours
### Deployed link : [Addition-website](https://2-add-formsubmit-locstr-js-tailwind.netlify.app/)


## Common Errors
1. ### form
- There should be form and then onclick submit() 
- This refreshes the page when the submit function is executed 
2. ### event.preventDefault()
- The form sends the request to the browser and browser refresh as default
- we need to prevent that
3. ### why event was crossed in event.preventDefault()
- Because the event was not used
- Because event is not send as parameter inside the onsubmit function
4. ### why ...|| '0'
- When the first website loads the local storage is empty
- Solution: So, to have initial display 0 instead of null we've  `0`
- Code snippet below
```
count = JSON.parse(localStorage.getItem("count")) || '0';
```
5. ### hyperlink in .md file
- AlT+D to copy with https://

6. ### css form bg not surrounding the input and button
- Solution: use px instead of w-1/6


