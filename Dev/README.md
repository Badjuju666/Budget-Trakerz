## User Story

```md
GIVEN a Budget Tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```

### Offline Functionality

- IndexedDB to add offline functionality: add Offline Persistence with IndexedDB as a refresher on how to add this to your application.

- service-worker.js to your application

> **Important:** You should add both of the files to handle this functionality to the `public/js/` directory of your application.

Once you’ve updated the existing budget tracker, it should provide the following functionality:

* The ability to enter deposits offline.

* The ability to enter expenses offline.

* Offline entries should be added to the tracker when the application is brought back online.

### Web Manifest

Because this will be a mobile-first application, you’ll also need to add a web manifest to your application with the app’s metadata to let users’ devices know what they’re installing and how the app should look on the home screen.

This `manifest.json` file for this project will contain the following properties:

* `name`

* `short_name`

* `icons`

* `theme_color`

* `background_color`

* `start_url`

* `display`

Create `manifest.json` file in `public/` directory of your application. 

### Deployment to Heroku Using MongoDB Atlas

Finally, the budget tracker has a server and uses MongoDB as its database, so you’ll need to deploy this application to Heroku using MongoDB Atlas.