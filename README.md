# react-preriodic-table
React Periodic Table is a clone of http://www.rsc.org/periodic-table/. It is a learning project. It is `pure React.js implementation` with webpack from scratch without using any boilerplate or create-react-app. For `CSS - Grid Layout and Flex Layout` is used. I have created separate branch for each release. Ignroe CSS flaws :).


# Demo
https://harpreetkhalsagtbit.github.io/react-preriodic-table/#/

# Change Logs

# Release 2.0
Load table json - any way you like 
- [X] Design UI as per RSC - use CSS Grid and Flex
     - Project Structure - Folder Structure 
- [X] Draw UI dynamically using JSON data - Make react component. Try to implement design pattern or atleast get an idea what kind of pattern we can use for this kind of project quite satisfied with the work till now
     - Draw UI using JSON 
     -  Code refactor using ternary operator and arrow function shortcuts 
     -  Pattern used  for wrapper class  - Layout Component - using Class extends React.Component 
- [X] Make Periodic  Component into Classfull component, we need state now onwards in the component to perform action events 
     -  Need to do code refactor
     -  Remove style loader it is very difficult to add custom classes - instead of concat used es6 tagged literals
- [X] Implement basic filter
- [X] Implement onhover image or data view 
- [X] Cache images - webworker or local cache
- [X] Complete Home Page 
- [X] Sprite implementation 
- [X] Advance Filter 

# Release 1.0
- [X] No CRA 
- [X] Webpack 4, ES6, babel 
- [X] Ignore SSR 
- [X] RouterV4 
- [X] Dynamic Imports - Code splitting using routes method, webpack chunks
- [X] Start with Basic HTML page with links and Routes - Use Dynamic Imports from beginning to avoid later hustles
- [X] Same header footer body for diff pages
By this you would have learned Setting react, RouteV4, babel using webpack
Chunks/Dynamic Imports
Release 1.0 done

**Note: implement - context api, HOC, render props, styled component, statefull, stateless components wherever possible in the above releases or MVPS**

