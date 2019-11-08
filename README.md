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

# API ENDPOINTS
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

* **Method:**
`GET`
```bash
 http://localhost:3030/pdv/:id
```
* **Success Response:**
* **Code:** 200 <br />
```javascript
    **Content:** `{
    "pdvs": {
        "id": "72117a28-f20e-4d5b-9468-020e9095755b",
        "tradingName": "Company Name",
        "ownerName": "owner name",
        "document": "21.632.581/0001-54",
        "coverageArea": {
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [
                            -46.61026,
                            -23.66622
                        ],
                        [
                            -46.62596,
                            -23.66985
                        ],
                    ]
                ]
            ]
        },
        "address": {
            "type": "Point",
            "coordinates": [
                -46.588654,
                -23.709635
            ]
        },
        "createdAt": "2019-10-25T23:34:10.476Z",
        "updatedAt": "2019-10-25T23:34:10.476Z",
        "deletedAt": null
    }
}`
```

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
    "message": "PDV_INVALID_ID",
    "status": 500
}`



* **Method:**
`GET`
```bash
 http://localhost:3030/pdv/
```

* **EXAMPLE BODY REQUEST:**
 ```javascript
   {
     "lat": -46.588654,
     "long": -23.709635
   }
```   

* **Success Response:**
* **Code:** 200 <br />
```javascript
    **Content:** `{
    "pdvs": {
        "id": "72117a28-f20e-4d5b-9468-020e9095755b",
        "tradingName": "Company Name",
        "ownerName": "owner name",
        "document": "21.632.581/0001-54",
        "coverageArea": {
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [
                            -46.61026,
                            -23.66622
                        ],
                        [
                            -46.62596,
                            -23.66985
                        ],
                    ]
                ]
            ]
        },
        "address": {
            "type": "Point",
            "coordinates": [
                -46.588654,
                -23.709635
            ]
        },
        "createdAt": "2019-10-25T23:34:10.476Z",
        "updatedAt": "2019-10-25T23:34:10.476Z",
        "deletedAt": null
    }
}`
```

* **Error Response:**

  * **Code:** 406 <br />
    **Content:** `{
    "message": "EMPTY_LAT_AND_LONG",
    "status": 406}`
