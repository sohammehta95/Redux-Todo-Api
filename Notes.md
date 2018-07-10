## Notes

In this API the request cannot be simply sent by POSTMAN in url-encoded. You have to send a raw JSON request with header application/json

This is because we have used a Body Parser of JSON. Also in the main application we have to do this

```
return fetch("https://redux-todo-api-endpoint.herokuapp.com/api/todos", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json" //SEEEEE
      }),
      body: JSON.stringify({ task }) //OOWHOOOO
    })
```
