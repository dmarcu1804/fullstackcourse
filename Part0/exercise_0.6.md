```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User ->> Browser: Submits form
    Browser ->> Server: HTTP POST /submit_form
    Server -->> Browser: 201 Created
    Browser ->> Browser: Update page

```