```mermaid
sequenceDiagram
    participant browser
    participant server
    participant user

    user ->> browser: fills out form
    user ->> browser: clicks submit button

    browser ->> server: HTTP POST /new_note
    server ->> browser: HTTP 302 redirect to /exampleapp/notes
    browser ->> server: HTTP GET /exampleapp/notes
    server ->> browser: 200 OK
    browser ->> user notes page

    "main.css, main.js, data.json" performed
```