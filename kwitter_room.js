function addRoom() {
    var roomName = document.getElementById("roomName").value;
    document.getElementById("roomName").value = '';

    //firebase.database().ref("/").child(roomName).update({
    //    ojetivo: "adicionando sala"
    //});

    localStorage.setItem("roomName", roomName);

    var row = "<div class='roomName' id='" +roomName + "' onclick='redirectToRoomName(this.id)'>#"+ roomName+ "</div><hr>";

    document.getElementById('output').innerHTML = 
        document.getElementById('output').innerHTML + row;

    //window.location="kwitterPage.html";
}

function setUserName() {
    var userName=localStorage.getItem("userName");
    document.getElementById("userName").innerHTML="bem vindo(a) "+ userName;
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach
            (function (childSnapshot) {
                childKey =
                childSnapshot.key;
                roomNames = childKey;
                //inicio do codigo
                //fim do codigo
            });
    });
}

getData();