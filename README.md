# Mobile Flashcards

Mobile Flashcards is a React Native app for iOS and Android that allows users to create decks, add cards and quiz themselves.

# Installation

```bach
npm install
```

# Usage

The project can be run with npm or yarn

```
npm start
```

or

```
npm run android
```

This will open Expo Developer Tools in the browser. You can then do one of the following

- Use your device to test
  Scan the QR Code using the Expo Client app [Expo Client for Android & iOS](https://expo.io/tools#client) from an Android or iOS device.

  - [Expo Snack](https://snack.expo.io/@elsayed57/flashcard) for the project

- Use an Android Emulator or iOS Simulator to run the app

# Testing

This project has been tested on the following platforms:

- [Expo Snack](https://snack.expo.io/@elsayed57/flashcard)
- Android 9+. `there is a bug in notification on Android Emulator`

# Notes

- I didn't test the app on ios cuz i don't have mac
- there is a warrning in notification

```
Possible Unhandled Promise Rejection (id: 0)
TypeError: null is not an object (evaluating '_ExponentNotifications.default.cancelAllScheduledNotificationsAsync')
cancelAllScheduledNotificationsAsync@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:112359:44
tryCallOne@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:27914:16
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:28015:27
_callTimer@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:31454:17
_callImmediatesPass@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:31493:17
callImmediates@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:31710:33
__callImmediates@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:3628:35
http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:3414:34
__guard@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:3611:15
flushedQueue@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:3413:21
flushedQueue@[native code]
invokeCallbackAndReturnFlushedQueue@[native code]
```

and there is breaking changes in expo SDK: 40.0.0

- [Expo Snacks](https://snack.expo.io/@elsayed57/flashcard)
  i try snack and connect my device there is no error. I don't know where is the problem.
