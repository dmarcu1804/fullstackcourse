```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server -->> Browser: HTML Document

    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server -->> Browser: CSS File

    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server -->> Browser: JS File

    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server -->> Browser: JSON Content
