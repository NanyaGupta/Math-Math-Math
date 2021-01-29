// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDBLrvmQYGi8FAiuH5eb-vj3JCexs89aYM",
      authDomain: "testingkwitterpro.firebaseapp.com",
      databaseURL: "https://testingkwitterpro-default-rtdb.firebaseio.com",
      projectId: "testingkwitterpro",
      storageBucket: "testingkwitterpro.appspot.com",
      messagingSenderId: "364107295104",
      appId: "1:364107295104:web:44f8172dc9215c1494f965"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
  userName=localStorage.getItem("userName");
  document.getElementById("userName").innerHTML="Welcome "+ userName+" !";
  
  function addRoom(){
  var roomName=document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({
  purpose: "adding room Name"
  });
  localStorage.setItem("Room Name",roomName);
  window.location="kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          var roomNames = childKey;
        console.log("Room Name - "+ roomNames);
        var row="<div class='room_name' id="+ roomNames +" onclick='redirectToRoomName(this.id)'> #" + roomNames +"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        });
  });
  }
  
  getData();
  
  function redirectToRoomName(room){
  console.log(room);
  localStorage.setItem("Room Name",room);
  window.location="kwitter_page.html";
  }
  
  function logOut(){
        localStorage.removeItem("userName");
        localStorage.removeItem("roomName");
        window.location="index.html";
  }
  
  
  