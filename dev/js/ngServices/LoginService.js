// OceansService
app.factory('LoginService', function() {
  var loginService = {
    myUrl: "img/avatar/blank.png",
    myUserName: "123",
    isSignedIn: false,
    getUrl: function () {
      return loginService.myUrl;
    },
    getUserName: function () {
      return loginService.myUserName;
    },
    setUserName: function (input) {
      loginService.myUserName = input;
    },
    changeUrl: function (input) {
      loginService.myUrl = input;
    },
    getSignedIn: function () {
      return loginService.isSignedIn;
    },
    signIn: function () {
      // console.log("You have signed in.");
      loginService.isSignedIn = true;
    },
    signOut: function () {
      loginService.isSignedIn = false;
      // loginService.myUrl = "img/avatar/blank.png";
    }
  };

  return loginService;
});
