# Bookstore

This is a mock bookstore website. A live version can be found at dannygingerich.com/bookstore. It can also be accessed via my portfolio website at dannygingerich.com

This app uses the MERN (MongoDB, Express, React, Node) stack. The frontend is in the Client folder and the backend is in the Server folder. The MongoDB is hosted on MongoDB Atlas.

All the book data is stored on the MongoDB. The Node backend pulls the data from MongoDB via Mongoose. Schemas for the data are located in server/models. Routes for the data are located in server/routes. The controllers located in server/controllers post the data from the models to the proper routes.

The frontend uses React with Redux. The book data is stored in the Redux store and components can access it using the Reducers in src/reducers. The book data is initially pulled from the Node backend using the actions in src/actions, which query the Node backend using Axios in the API folder (src/api).

The components are located in src/components. There are two main pages - Home and Browse, the components of which are located in their respective folder in src/components. Pages for each book are located in src/components/book. 

The separate pages work using react-router. The routes are setup in src/components/Main.js. The Browse page allows for URL arguments that can specify the genre (fiction or nonfiction - not really genres, but I haven't been able to think of what word to use for them over the past month) and subgenre (history, science fiction & fantasy, etc) and will refine the Browse page accordingly. The Book page allows the book Product ID to be specified so it pulls up the correct book.
