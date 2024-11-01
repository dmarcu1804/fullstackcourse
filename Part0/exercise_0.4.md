```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User ->> Browser: Fills out form
    User ->> Browser: Clicks submit button

    Browser ->> Server: HTTP POST /new_note
    Server -->> Browser: HTTP 302 Redirect to /exampleapp/notes
    Browser ->> Server: HTTP GET /exampleapp/notes
    Server -->> Browser: 200 OK (response with notes data)
    Browser -->> User: Show notes page

