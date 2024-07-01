### Meli Server

In this directory you will find the BE express server, it works by implementing express as main framework 

## Requirements
- Node JS 18.17.0 or nvm
- NPM (Node Package Manager)
- Github

# Installation
- Copy project by using `git clone -*repository*-`
- With NPM run `npm i` to install dependencies
- Run the project with `npm run dev`
> (Optional) to run tests you can use `npm run test` 

------------
> 
The server was built implementing express generator with typescript, by this generating base files to avoid coding from scratch.

## Routes

### /api/
Also was built by using a layering infrastructure, server file handles petitions comming to the /api/ path validating thro jetvalidator to make sure the correct params or querys are on each of the requests .

### /api/items
For handling items we jump after the jetvalidator to the service in which we get ML's data, after that we validate the items query response and get from a different request the categories for the breadcrumbs, only after all this data is available we format it to a proper response format.

### /api/items/:id
In this case we do need to pass thro the jetvalidator param validation to get to the route handler, after this we send the ID to the ML' api to get the product data, after that we validate and call the api for the breadcrumbs to make sure we have all necessary data.

just like items api data only after all the data is available we format this data so we can provide a proper response in the correct format.

------------


### Testing
Implementing jest and supertests I added tests to validate each of the necessary endpoints response with accurate and wrong data.

*For any further questions please feel free to reach out*