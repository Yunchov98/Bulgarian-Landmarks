# Bulgarian-Landmarks
This is a WEB application using React for the front-end - an app for bulgarian landmakrs. Used Softuni Practice server for back-end.
All visitors to the site can view the posts, users profiels and comments. Only registered users can take advantage of the full functionality of the application - create posts, post comments, like posts and so on.

## How to install this project locally:
 1. Clone this repository: https://github.com/Yunchov98/Bulgarian-Landmarks.git
 2. Navigate to client folder (cd ./client)
    2.1 npm install - command to install all packages and dependencies;
    2.2 npm run dev - to start the development server and run the application;
    2.3 click on the link in the console;
 3. Navigate to server folder (cd./server)
    3.1  node .\server.js\ - start the server

## Deployment
  ### Front-End 
  The Front-End part is deployed on <a href="https://firebase.google.com/" target="_blank">Firebase</a>

  You can access the app here: https://bulgarian-landmarks-686b4.web.app
  
 ### Back-End
 The Back-End part is deployed on <a href="https://render.com/" target="_blank">Render</a>

 ## Features

 ### Public part (without authentication)
  <ul>
   <li>
       Home page is available for all users of the application. On it you can read information about Bulgaria.
   </li>
   <li>
       Posts page is available to all users of the app. On it you can see all the posts of the users. Each post contains a description, picture, like button and comments. If you want to like a post or comment below it, 
       you must be logged in
   </li>
   <li>
       Anyone can access the app's user profiles with information about them and their recent posts.
   </li>
   <li>
       Post details is avalable to all users of the app. On it you can see details about the landmark (location, description).    
   </li>
   <li>
       Search page is available for all users of the application. You can make use of the search engine by entering a profile name.
   </li>
   <li>
       Login page is available to all non-logged in users of the application. You can log in using the form.    
   </li>
   <li>
       Register page is available to all non-logged in users of the application. You can use the form to register.    
   </li>
  </ul>

  ### Private part (with authentication)
  <ul>
   <li>
       Crate page is only available for logged in users. You can create posts using the form. 
   </li>
   <li>
       Any logged in user can like and comment on posts.
   </li>
   <li>
       The creator of the post has access to the edit and delete buttons of the post.
   </li>
   <li>
       Edit page is only for the creator of the post. You can use the form to correct the current post.
   </li>
   <li>
       Delete page is only for the creator of the post. After clicking the delete button, a confirmation dialog opens. If you confirm the request the post will be deleted.
   </li>
   <li>
       Comments can also be edited or deleted.
   </li>
   <li>
       Only the author of the comment can edit it. Once you click the edit button, the comment will become a write box with the current comment text already loaded. Once you change it you have the option to save the 
       changes or discard them, if you save them the comment will be displayed with the new data.
   </li>
   <li>
       Only the author of the comment can delete it. Once you press the delete button, a dialog will appear asking you to confirm the deletion. Upon confirmation the comment will be deleted.
   </li>
  </ul>

## Guards
 <ul>
  <li>
      Auth guard -> Prevents unauthenticated users from accessing resources requiring authentication
  </li>
  <li>
      Logged in guard -> Prevents logged in users from accessing the login and register pages
  </li>
  <li>
      Error boundary: catch JavaScript errors anywhre in the child component tree and display error page instead of crashing the whole application.
  </li>
  <li>
      404 page -> handle undefined routes.
  </li>
 </ul>

## Librarires
 <ul>
  <li><a href="https://react.dev/" target="_blank">React</a> - used to create the app</li>
  <li><a href="https://reactrouter.com/en/main" target="_blank">React Router</a> - used for handling the routing of the app</li>
  <li><a href="https://formik.org/" target="_blank">Formik</a> - used for forms in the app</li>
  <li><a href="https://www.npmjs.com/package/yup" target="_blank">Yup</a> - used for forms validation</li>
  <li><a href="https://vitest.dev/" target-"_blank">Vitest</a> - used for writing unit tests</li>
 </ul>

## Project Overview
 ### Home Page
![Screenshot 2023-12-09 131248](https://github.com/Yunchov98/Games-Play-React/assets/107936254/ec8cd685-73f1-4090-a0b3-c7da716a2e7e)
![Screenshot 2023-12-09 131258](https://github.com/Yunchov98/Games-Play-React/assets/107936254/64ad933e-ae6a-42a5-88a1-dc5d3dd20c47)
![Screenshot 2023-12-09 131314](https://github.com/Yunchov98/Games-Play-React/assets/107936254/03606584-5748-4850-81a4-2b924130ea49)
![Screenshot 2023-12-09 131322](https://github.com/Yunchov98/Games-Play-React/assets/107936254/704d2088-0afe-4689-98f7-01fa2b142213)

### Catalog Page with no posts
![Screenshot 2023-12-09 131618](https://github.com/Yunchov98/Games-Play-React/assets/107936254/9d3e964a-a913-4bd8-bf2c-bd3f474a52c7)

### Catalog Page with posts
![Screenshot 2023-12-09 132109](https://github.com/Yunchov98/Games-Play-React/assets/107936254/78c4eb45-a453-4e8c-bccb-d973ebf8787f)

### Details view
![Screenshot 2023-12-09 132201](https://github.com/Yunchov98/Games-Play-React/assets/107936254/b3ab9115-e813-462e-94a4-4fe51d151d16)

### Delete post view
![Screenshot 2023-12-09 132255](https://github.com/Yunchov98/Games-Play-React/assets/107936254/07e1f827-38a8-4f8e-9469-7b56761650d2)

### Edit post view
![Screenshot 2023-12-09 132356](https://github.com/Yunchov98/Games-Play-React/assets/107936254/a3d70bc7-727f-4f08-9622-0bbd8ff681c5)

### Create post view
![Screenshot 2023-12-09 132435](https://github.com/Yunchov98/Games-Play-React/assets/107936254/80030ac1-4254-4e4b-b55c-8395406f68ae)

### Profile view
![Screenshot 2023-12-09 132520](https://github.com/Yunchov98/Games-Play-React/assets/107936254/42db5bf3-287e-4943-b32b-160c7a906e1b)
