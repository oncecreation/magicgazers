# stargazers
An Unofficial API for GitHub Repo Stars Count

## Endpoints

### GET Number Of Start
 - URL : `https://stargazers-count.herokuapp.com/data`
 - Body: {
              "repo": "harikanani/PortfolioV2" 
         } 
         

### API Call using CURL
  ```
  curl -X POST https://stargazers-count.herokuapp.com/data 
   -H "Content-Type: application/json"
   -d '{"repo": "harikanani/PortfolioV2"}'
  ```

### Response 
```
{
    "stars": number
}
```

EX:  
```
{
    "stars": 79
}
````
