# React_Native_Project - Finance management application
This is a simple cross-platform mobile app that uses React Native framework. This will help you manage all your money in wallets, bank accounts, etc. Moreover, this app support manage all transaction by the account and have a favorite transactions list for store peculiar transactions

# Functionality
| Functionality| Example images|
|---|---|
|**Dashboard**: Displays overview of all accounts and transaction histories.|![](https://github.com/anqck/React_Native_Project/blob/ReadmeUpdate/readme/Overviews.gif)|
|**Accounts management**: Manages all account ( wallet, ATM, ect.) information. Can add, remove, edit orview all transactions of each account.|Add new account: ![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/AddAccount.gif)Remove account:![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/RemoveAccount.gif)|
|**Account transactions management**: Manages all expense/income transaction and of each account. You can also transfer the balance from one accounts to another one.|Add new transaction:![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/AddTransition.gif)Remove transaction:![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/RemoveTransaction.gif)Edit transaction:![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/EditTrans.gif)|
|**Favorites list**: Provides list of favorites transaction that added by the user.|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Fav.gif)|
|**Transactions statistics**: Display the statistics of the transactions by period or by category with graph.|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/EditTrans.gif)|
|**Reset all data to default**: Reset all the data in the application to default.|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/ResetData.gif)|

# How to setup
## Set up environment

1. **[NodeJS](https://nodejs.org/en/)** (use latest version)

1. **[Yarn](https://yarnpkg.com/en/) package**.

   You can download and use the installer from their [homepage](https://yarnpkg.com/en/docs/install#windows-stable) or install via npm.

   ```sh
   npm install -g yarn
   ```

   Then add to PATH environment:

   ```
   %USERPROFILE%\AppData\Local\Yarn\bin
   ```

1. **[Expo](https://expo.io/) client**

   ```sh
   yarn global add expo-cli
   ```

1. Clone project

   ```sh
   git clone https://github.com/anqck/React_Native_Project.git
   ```

1. Install package

   ```sh
   git clone https://github.com/anqck/React_Native_Project.git
   cd React-Native-Project
   yarn install
   ```

## Run app in dev mode

1. Connect your android device or turn on Android Emulator
2. Open a terminal and run `npm start`
3. Press 'a' to open on android device

# Screen
|Screen name | Functions | Images|
|---|---|---|
|Overviews|Displays overview of all accounts and transaction|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/Overviews.PNG)|
|Calculator|Choose the amount of money|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/Cal.PNG)|
|TransactionEditor| For create new or edit transaction|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/TransEdit.PNG)|
|TransactionDetail|Detail of the transaction|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/TransDetail.PNG)|
|TransferEditor| For transfer money from the account to another one|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/TransferEdit.PNG)|
|TransferDetail|Detail of the transfer|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/TransferDetail.PNG)|
|Accounts| Display list of all accounts|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/Accounts.PNG)|
|AccountEditor|For create new or edit account|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/AccountEdit.PNG)|
|AccountDetail|Detail of the account|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/AccountDetail.PNG)|
|Categories| Display list of all categories|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/Categories.PNG)|
|CategoryEdit|For create new or edit category|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/CategorieEdit.PNG)|
|Favourites|Display list of all favourites|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/Fav.PNG)|
|Trends| Display the income/expense by time period(this month, 6 month, 12 month, all times)|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/ResetData.gif)|
|TransactionsStatistics| Display statistics of income/expense by categories|![](https://raw.githubusercontent.com/anqck/React_Native_Project/ReadmeUpdate/readme/Screen/Trends.PNG)|
|MoreMenu|A list that link to Favourites screen and Categories screen, reset all data||

# Library
- [React Native](https://facebook.github.io/react-native/) – a JavaScript mobile framework developed by Facebook which allows developers to build Android and iOS mobile apps using JavaScript and reuse code across web and mobile applications.
- [Expo](https://docs.expo.io) – a set of tools, libraries, and services that let you build native iOS and Android apps by writing JavaScript.
- [React Navigation](https://reactnavigation.org) – routing and navigation for your React Native apps
- [React Redux](https://github.com/reduxjs/react-redux) – official React bindings for [Redux](http://redux.js.org).
- [Redux](http://redux.js.org) – predictable state container for JavaScript apps.
- [Redux Persist](https://github.com/rt2zz/redux-persist) – persist and rehydrate a redux store.
- [Reselect](https://github.com/rt2zz/redux-persist) : Simple “selector” library for Redux (and others) inspired by getters in NuclearJS, subscrip-tions in re-frame and this proposal from speedskater.
- [Recompose](https://github.com/rt2zz/redux-persist) a toolkit for creating composable pipelines of higher order components. It allows you toeasily separate logic from the components, creating re-usable building blocks.
- [react-native-material-ui](https://github.com/xotahal/react-native-material-ui) - Highly customizable material design components for React Native
- [React Native Elements](https://github.com/dabit3/React-Native-Elements) - a collection of React Native UI Elements and components.
- [react-native-datepicker](https://github.com/xgfe/react-native-datepicker) - React Native date, datetime and time picker for both Android and IOS
- [react-native-modal-dropdown](https://github.com/sohobloo/react-native-modal-dropdown) - A react-native dropdown/picker/selector component for both Android & iOS.
- [victory-native](https://github.com/sohobloo/react-native-modal-dropdown) : Graph and PieChart library
- [react-native-modal](https://github.com/react-native-community/react-native-modal) - An enhanced, animated and customizable react-native modal
- [react-native-swipeout](https://github.com/dancormier/react-native-swipeout) - iOS-style swipeout buttons behind component
- [react-native-simple-toast](https://github.com/xgfe/react-native-simple-toast) React Native Toast component for both Android and iOS. It just let iOShave the same toast performance with Android. Using scalessec/Toast for iOS;

# Future works
- Store all app data online with personal security
- Set the currency of each account
- User can define the income/expense limit to notify
- Pincode and fingerprint lockscreen for app
- Debt and loan tracking
- Multilanguage support


# Related docs

- Redux ([eng](https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8)/[vie](https://viblo.asia/p/chuong-2-ung-dung-redux-dau-tien-cua-ban-07LKXA8JZV4))
- ReduxPerisst ([eng](https://medium.com/async-la/redux-persist-your-state-7ad346c4dd07)) ([eng](https://github.com/rt2zz/redux-persist))
- React Navigation ([eng](https://medium.com/async-la/a-stately-guide-to-react-navigation-with-redux-1f90c872f96e))
- Recompose ([eng](https://viblo.asia/p/recompose-library-for-react-bWrZn1ovKxw))
- PropTypes ([eng](https://reactjs.org/docs/typechecking-with-proptypes.html)/[vie](https://viblo.asia/p/react-proptypes-khai-bao-kieu-du-lieu-cho-component-naQZR1aPKvx))
- [FlatList](https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6)
- [Expo SDK](https://docs.expo.io/versions/latest/sdk)
- [Common fixes](CommonFix.md)
