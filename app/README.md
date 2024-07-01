### Meli App

In this directory you will find the FE React application, this application works with react and **react router dom** newest addition **createBrowserRouter** to handle the routing, fetching and handling of incoming server errors

## Requirements
- Node JS 18.17.0 or nvm
- NPM (Node Package Manager)
- Github

# Installation
- Copy project by using `git clone -*repository*-`
- With NPM run `npm i` to install dependencies
- Run the project with `npm run start`
> (Optional) to run tests you can use `npm run test` 

------------

## Infrastructure
### React
The project was built by using create-react-app from the CLI to create an instance of react + typescript, using a modular approach isolating folders with component/styles/tests.

### Routing
Using the latest features from **react-router-dom** I implemented a new solution called [createBrowserRouter](http://https://reactrouter.com/en/main/routers/create-browser-router "createBrowserRouter") to handle the application routing and fetching validations from the loader function, also in this way I was able to handle error cases.

### Styling
Implementing modular scss with an .modular.scss extension allowed me to create components styling that ensures no overlapping of properties and readability from developers.

Apart from that I created global styling to cover the colors and fonts as readability **variables** that can be imported using relative path on any styling that can use @import

### Testing
Implementing testing library I created test cases for validating the component's information and functionalities.

*For any further questions please feel free to reach out*