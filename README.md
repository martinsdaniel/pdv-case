# pdv-case
The code style is based in [Airbnb JS style guide](https://github.com/airbnb/javascript) as is.

## How to Run
You'll need the `.env` file: just copy the `.env.example` available in `src` directory

- Use [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/);

```bash
make build
```
```bash
make dev
```

## Others commands
```bash
make test # Run all tests
make test/watch # Watch all tests in every change
```

# SEARCH API ENDPOINTS
* **Method:**
`POST`
```bash
 http://localhost:3030/pdv
```
* **EXAMPLE BODY REQUEST:**
```javascript
    {
      "tradingName": "Company Name",
      "ownerName": "owner name",
      "document": "21.632.581/0001-54",
      "coverageArea": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -46.71746,
                -23.50814
              ],
              [
                -46.72013,
                -23.50895
              ]
            ]
          ]
        ]
      },
      "address": {
        "type": "Point",
        "coordinates": [
          -46.689537,
          -23.560505
        ]
      }
    }
```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message : PDV was successfully created" }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
    "message": "INVALID_DOCUMENT",
    "status": 500"
}`
