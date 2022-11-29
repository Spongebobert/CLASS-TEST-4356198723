var firebaseConfig = {
    apiKey: "AIzaSyDrvA-8RAkofN1mRgIHF-AksfERqq4mRqY",
    authDomain: "class-test-4063c.firebaseapp.com",
    databaseURL: "https://class-test-4063c-default-rtdb.firebaseio.com",
    projectId: "class-test-4063c",
    storageBucket: "class-test-4063c.appspot.com",
    messagingSenderId: "471711674864",
    appId: "1:471711674864:web:82efe2a74af59c4d4c6d35"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD
function add_user() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({        
        purpose:"Vaibhav tapped the approval for the horror of the saving that made him stretch"
}
    )
}