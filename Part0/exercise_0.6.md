```mermaid
sequenceDiagram
    participant browser
    participant server
    participant user

    User ->> browser: submits form 
    browser ->> server: HTTP POST
    server ->> browser 201 CREATED
    browser ->> browser: update page

```