var firebaseConfig = {
    apiKey: "AIzaSyCVm_BLcvEBXVzPeb3HWPPJ_DbpH0DLGG4",
    authDomain: "iflix-2cdcd.firebaseapp.com",
    projectId: "iflix-2cdcd",
    storageBucket: "iflix-2cdcd.appspot.com",
    messagingSenderId: "1028946678244",
    appId: "1:1028946678244:web:2068c1d27fca14af07b7f1",
    measurementId: "G-XSQJ49CX9G"
};

var uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: function (authResult) {
            if (authResult.user) {
                handleSignedInUser(authResult.user);
            }
            return false;
        },
        signInFailure: function (error) {

        }
    },

    autoUpgradeAnonymousUsers: true
};

var ui
$(function () {
    firebase.initializeApp(firebaseConfig);
    ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    firebase.auth().onAuthStateChanged(function (user) {
        user ? handleSignedInUser(user) : handleSignedOutUser();
        $("#login-spinner").addClass("d-none")
    });
});



function handleSignedInUser(user) {
    $(".user").removeClass("d-none")
    $(".guest").addClass("d-none")

    $("#name").text(user.displayName);
    $("#email").text(user.email);
    $("#phone").text(user.phoneNumber);

    if (user.photoURL) {
        $(".avatar").attr("src",user.photoURL);
    } else {
        $(".avatar").attr("src","/images/user.svg");
    }
    $('#modal-login').modal('hide');
}
function handleSignedOutUser() {
    ui.start("#firebaseui-auth-container", uiConfig);
    $(".user").addClass("d-none")
    $(".guest").removeClass("d-none")
}
