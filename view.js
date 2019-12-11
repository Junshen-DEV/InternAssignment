$(document).ready(function(){
    var rootRef=firebase.database().ref().child("workshop");

    rootRef.on("child_added", snap => {
        var name = snap.child("ws_name").val();
        var date = snap.child("ws_date").val();
        var duration = snap.child("ws_duration").val();
        var description = snap.child("ws_desp").val();

        $("#table_body").append("<tr><td>"+name+"</td><td>"+date+"</td><td>"+duration+"</td><td>"+description+"</td></tr>");
    })
});