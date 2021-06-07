var rootRef = firebase.database().ref().child("report");

    rootRef.on("child_added", snap => {
        var name = snap.child("Date").val();
        var email = snap.child("Temperature").val();

        $("#table_body").append("<tr><td>" + date +"</td><td>"+ temperature +"</td></tr>");

    });

