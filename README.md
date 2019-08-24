This Web app has almost the same UI and functionalities as [Garbage-Lookup](https://github.com/rezaandwenhao/Garbage-Lookup). The difference is that this app is writen using **React and Redux**.

The main point of this project for me is to review the React knowledge. Thus, I intentionally over-engineered to implement some features. There are a few bad designs that I am aware of.
For example:
1. Using state in the components could make the code easier. There is also no need to use redux.
2. I could have made a reusable component - Item (which could be shared both by ResultItem.js and Footer.js), instead of stacking all the code in the ResultItem.js file. My bad design leads to that I had to write repetitive code in the Footer.js.

On the otherhand, I really got to review the knowledge regarding reducer, action, React life-cycle methods ([good article about life-cycle methods](https://programmingwithmosh.com/javascript/react-lifecycle-methods/)). 

I also used localStorage to save the favorite items marked, so the user can still fetch the favorite list saved after refreshing/relaunching the app.

Hosted on heroku: https://hidden-plateau-61052.herokuapp.com/


----------------------------------------------------------------------------------------------------



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

