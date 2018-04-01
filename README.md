# TODO

* Remove tags - DONE
* Fix header - move user info to far right, logout next - DONE
* Make container thinner - DONE
* Upon completion, change progress bar color and add "Completed!" text above reps. - DONE

# Quirk Habit Tracker

Sign in to create a collection of new habits to foster. Track habits with hashtags and receive awards for different accomplishments.

## Project Planning

This project uses [`create-react-app`](https://github.com/facebook/create-react-app) and Firebase.

The user should be able to sign in with Google and then create new habit cards. The habit card consists of a title, number of repetions, a progress bar, and a `+` button. 

## Structure

App

* Habit grid

  * Habit card
  * 'Make new habit' form
    * Title
    * Reps
    * Progress bar

* Header

  * Logo
  * Username/Avatar
  * Sign In/Out button

Google/Firebase must provide:

* User information
  * Username
  * Avatar
  * Habits array

Firebase response should be:

```
fb-id: {
  username: '',
  avatar: '',
  habits: [
    {
      title: '',
      reps: 0
    },
    {
      ...
    }
  ]
}
```

---

## Timeline

### 2017

Dec 24: Set up Firebase.

Dec 26: Store nested data in Firebase DB. Successfully 'signed in' with Google.

Dec 27: Goal: Set up auth routes.

Dec 28: Spun our wheels all day trying to set up auth routes. Got it working without routes.

### 2018

Jan 02: Styled habits; added _delete_ and _update completed_ to individual habits. A little challenge to commune with Firebase (the docs are a bit presumptuous).

Jan 05: Basic functionality complete.

March 26: Begin CSS revamp.