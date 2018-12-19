************ROUTING*************
react-router: comprises of the core routing components.
react-router-dom: comprises of the routing API required for browsers.
react-router-native: comprises of routing API for mobile applications.

<Switch> It will look through all the routes beneath it. It will match only the first one that applies. Which is where the 'exact' keyword comes into play </Switch>

index.js -- i wrapped <App /> with <Router> which is defined on line 6 because it allows the rest of my app to be compatible with routing. I can also change the import statement to be -- import {HashRouter as Router,....} which makes it so that i dont need to use <HashRouter></HashRouter>

escaping {routes} jsx only matters depending if i need state to keep track of the routes