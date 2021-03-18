# Technologies

This document provides key references and associated notes on the key technologies I have used in the creation of my Tracker App, project 4.

## ExpressJS
1. [Documentation](https://expressjs.com/en/4x/api.html)
1. [Returning sorted results from a db query](https://stackoverflow.com/questions/36259532/sequelize-findall-sort-order-in-nodejs)

## React
1. [Intro](https://git.generalassemb.ly/john-deere-sei-7/react-intro})
1. [State and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
1. [React Router](https://git.generalassemb.ly/john-deere-sei-7/react-router#we-do-react-router-setup-10-min--040)
1. [Lab](https://git.generalassemb.ly/john-deere-sei-7/react-router-lab/tree/leo-complete-solution/src)

Additional information provided by teh react app can be found here: [Link](React.md)

## Axios

1. [Axios Installation](https://github.com/axios/axios/commit/7d3b626a595e5b911c59dfb28a8080e56d840602)


## Sequelize

1. [Intro](https://git.generalassemb.ly/john-deere-sei-7/sequelize-intro)
1. [Creating a Postgres dB](https://git.generalassemb.ly/john-deere-sei-7/databases/tree/master/sql-intro-lesson)
1. [Databases](https://git.generalassemb.ly/john-deere-sei-7/databases/tree/master/sql-relational-mapping-lesson)
1. [ACID](https://git.generalassemb.ly/john-deere-sei-7/ACID-database)

## API BackEnd

1. [Express API backend lesson](https://git.generalassemb.ly/john-deere-sei-7/muse-express-api-backend-lesson)

## Bootstrap
This technology was used for my Header, Footer and page buttons.  It is an excellent technology to make your web pages look highley professional straight out of the box.

---

## Heroku Deployments

I suggest performing the back end deployment first then front end.

### Front End Deployment
I had a challenge with my Front end App deployment where it would fail at the end to deply correctly.  The following information was helpful to overcome this issue.

1. BASE_URL will need to be updated from yoru ```LocalHost:3000``` URL to the deployed URL that Heroku assigns to you.  I suggest doing the back end deployment first and confirming the back end is there, prior to undertaking the front end deployment.

1. [Front End React App Heroku Deployment Instructions](https://git.generalassemb.ly/john-deere-sei-7/react-heroku-deployment)

1. Error:  NODE version not specified in Package.json 
```
remote:        - Node version not specified in package.json
...
remote:
To https://git.heroku.com/tracker-app-front-end.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/tracker-app-front-end.git'
```

    1. Update of package.json to include a "engines" reference. [Specify NODE.js Version in package.json](https://stackoverflow.com/questions/29349684/how-can-i-specify-the-required-node-js-version-in-package-json)  This code worked well for me.
``` js
"engines": {
    "node": ">=10.0.0",
    "npm": ">=6.0.0"
  },
```

2. Redploy to Heroku from an empty commit
``` t
    git commit --allow-empty -m "Trigger Heroku deploy after enabling collectstatic"
    git push heroku master
```
NOTE:  Git is transitioning to main from master so keep that in mind for future.  Check your ``` git branch ``` for details.

3. Adding API keys to Heroku
As I have stated elsewhere I have secret API KEY issued to me for google maps.  This stackoverflow describes how to add one into the deployment which is simple enough to do, through the web browser Heroku project settings under "Change System Variables"
[API KEYS in Heroku](https://stackoverflow.com/questions/35735663/how-to-add-api-keys-to-heroku/35776938#35776938)

### Heroku Back End Deployment

Back end deployment is fairly straight forward.  

1. PORT configuration
    1. One thing to watch, however, is if your have hardcoded your "Listener" function to PORT 3000.  If that is the case change that to use a ``` process.env(PORT) ``` variable look up and add ```PORT=3000```, for example, into your dotenv file.  This way, Heroku can redirect the PORT assignment when it performs it deployment activities.

1. [Heroku Back End App deployment](https://git.generalassemb.ly/john-deere-sei-7/node-express-heroku-deployment)
NOTE:  It is normal for a back end app to NOT have a homepage or spalsh screen when veiwing on the browser.  One simple way to verify it is there and working is to pass in a URL route and observe the JSON data that is return, or the HTTP, if not.  The former is much more delightful!

---

## Other Technologies

### CORS - Copy to Back End Readme
This has been a challenging topic for me, and I still am not quite sure why.  Other cohort team members don't see to get as many CORS errors as I do.  And, fixes on their machines don't always work on mine.  Strange sounding, I know, but that is how my Friday, March 13th was spent trouble shooting CORS issues.
In the end we added the following to my compoents that overcame the issue to my Back end code.  
    
1. [CORS on ExpressJS](https://enable-cors.org/server_expressjs.html)
1. [CORS Header "Access Control Allow Origin missing MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin)

### Markdown
1. [Syntax](https://www.markdownguide.org/extended-syntax/)

### Additional refereces
1. [Group Project 3](https://github.com/PJTeel/unit3-birdapp/blob/master/src/App.js)
1. [SEI Calendar](https://docs.google.com/spreadsheets/d/1HgN0kh5VfhBy-iwlsA1O3u-sIQMTalBdrj89-dp5B9k/edit#gid=780921503)