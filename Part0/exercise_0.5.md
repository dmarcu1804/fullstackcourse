```mermaid
sequenceDiagram
    participant browser
    participant server

    browser ->> server GET https://studies.cs.helsinki.fi/exampleapp/spa
    server ->> browser HTML Doc

    browser ->> server GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server ->> browser css file

    browser ->> server GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server ->> browser js file

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server ->> browser json content

```
