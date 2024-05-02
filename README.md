# YanchWare Trips

YankcWare Trips is a simple app that enables YanchWare employes to chosse their next visit while working remotely.

## Dependencies and Execution

### Install the dependencies

To install the dependencies go to the root of the project and run `npm install`.

### Run the app
To run the app you need to be at the root of the project.

Run `npx json-server -w .\data\db.json -p 3500` to start the BE mock server.

After the process started in a new terminal run `npm run start` to serve to FE application. After that your browser will open to the homepage of the app.


## App Architecture

The app is divided in folders/modules. Each module has one single duty.

- `src/app` has the components that have an app scope
- `src/components` has the React components that can be reused in more than one place in the application
  - `.../app` has the  React components that accomplish a feature strictly related to the application. For example the list of cites, the list of coworking spaces ecc...
  - `.../ui` has the React components that accomplish a UI/UX duty, for example an icon button, a card ecc...
- `src/hooks` has the custom hooks that handles repeatable operations in the redux store
- `src/models` has the models of the app.
- `src/pages` has the React components that represent a single page in the application
- `src/sevices` has the function that interact with the BE server. Each file here should contain all the endpoints related with a single model or functionality
- `src/store` has the definition of the Redux store and different slices
  - `.../slices` contains the different sections of the store. Each one of those slices should handle only one tipe of model
- `src/utils` includes helper functions

## Design choises

### UX 
The application at this stage is super simple because the requirements were super brief and because simplicity means that the user could hardly make some wrong choises.
The app has a main page that loads the list of the cities that are available in our sistem and displays them in a readable and simple way.
If the user selects one city he moves to the detail of this one where he can see in higher detail this one and better understand if it makes sense for him.

The app could have had only one page with a two column style UI. This was not used to show my ability to handle routing and app navigation. If in the future this app would be getting newer features than we could integrate those together.

### UI
The UI is inspired by YanchWare main site and by Material Design principles. The main color is the blue in the header and the sections are defined by the use of cards this headers and content.

## Functionality

The app accomplishes only the requirements defined in the task because I think that the time was not enough to add other stuff that could be easily added in the future with other tasks. My main focus was to define a scalable project that could easily be handled to someone else and be able to work ASAP.

Some functionality that could be easily added are:
- search for the cities list
- the possibility to click on the address of a coworking spot and be sent to google maps to check it out
- the possibility to click on the coworking name and be sent to the site of this one
- add a date filter to the project to enanche the UX of the user
  - if a user selects a date range he could see where his colleages are going to stay during that period
- add the possibility to give an evaluation to a coworking spaces
- add a section where you can see you past and future Trips
  - if in one of those trips there is one coworker going there you could click on the icon and could start chatting with him (teams/slack or email)
