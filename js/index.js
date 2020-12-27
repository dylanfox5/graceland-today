// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDx3evSmF8MKAHAEAQloJfvT5ZeYtoKrEk",
    authDomain: "graceland-today.firebaseapp.com",
    databaseURL: "https://graceland-today.firebaseio.com",
    projectId: "graceland-today",
    storageBucket: "graceland-today.appspot.com",
    messagingSenderId: "860706059903",
    appId: "1:860706059903:web:9d70219ed57b1b2ef5f14a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function getData(org, id) {
    return firebase.database().ref(org).once('value').then(function(snapshot) {
      var data = snapshot.val()["announcements"];
      for (let i=1; i < data.length; i++) {
          if (data[i] == "") {
              break;
          }
          else {
            $("#" + id).append("<li class='ann my-lg-2' style='margin-top:1vh;'>" + data[i] + "</li>");
          }
      }
    });
  }

getData("Academic Student Council", "ascann");
getData("Council of House Chaplains", "chcann");
getData("COSA", "cosaann");
getData("IDEA", "ideaann");
getData("Intramurals", "imsann");
getData("Senate", "senann");

function getTodayEvents(day, id) {
    return firebase.database().ref(day).once('value').then(function(snapshot) {
        var data = snapshot.val();
        for (item in data) {
            var event = data[item]["event"];
            var loc = data[item]["loc"];
            var time = data[item]["time"];
            $("#" + id).append("<li class='ml-lg-n3'>" + 
                                    "<span class='ml-lg-n4'>" + 
                                        event +
                                        "<p class='ml-lg-n4'> @ " + loc + "</p>" + 
                                "</span></li>");
        }
    });
}

function getWeekEvents(day, id) {
    return firebase.database().ref(day).once('value').then(function(snapshot) {
        var data = snapshot.val();
        for (item in data) {
            var event = data[item]["event"];
            var loc = data[item]["loc"];
            var time = data[item]["time"];

            $("#" + id).append("<div class='card week-cards-ann event-style' data-toggle='popover' title='Title' data-content='Content'>" + 
                                    "<div class='card-body my-lg-n3 mx-auto-n'>" + 
                                        "<div class='card-text my-lg-n1 float-left ml-lg-n3 week-cards-ann-text'>" +
                                            "<p>" + event.substring(0,10) + "...</p>" +
                                        "</div>" + 
                                    "</div>" +
                                "</div>");
        }
        // $(function () {
        //     $('[data-toggle="popover"]').popover({
        //         placement: 'left',
        //         html: true,
        //         viewport: { selector: '.scrollbar-week', padding: 100 }
        //     });
        // });
    });
}

function getMonthEvents(day, id) {
    return firebase.database().ref(day).once('value').then(function(snapshot) {
        var data = snapshot.val();
        for (item in data) {
            var event = data[item]["event"];
            var loc = data[item]["loc"];
            var time = data[item]["time"];
            $("#" + id).append("<div class='card month-cards-ann event-style ml-lg-n2 hide' data-toggle='popover' title='Title' data-content='Content'>" + 
                                    "<div class='card-body my-lg-n1'>" + 
                                        "<div class='card-text my-lg-n3 float-left ml-lg-n3'>" + 
                                            "<p>" + event.substring(0,7) + "...</p>" +
                                        "</div>" + 
                                    "</div>" +
                                "</div>");
        }
        // $(function () {
        //     $('[data-toggle="popover"]').popover()
        // });
    });
}


function setDates() {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;

    var date = mm + "-" + dd + "-" + yyyy;

    var d = today.getDay();
    var days = { "Sunday" : "sun", "Monday" : "mon", "Tuesday" : "tues", "Wednesday" : "wednes", "Thursday" : "thurs", "Friday" : "fri", "Saturday" : "satur"};
    var day = Object.keys(days)[d];

    var m = today.getMonth();
    var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    var month = months[m];

    document.getElementById("datenum").innerHTML = dd;
    document.getElementById("daymonth").innerHTML = day + ", " +  month.substring(0,3);
    document.getElementById("monthyear").innerHTML = month + " " + yyyy;
    getTodayEvents(date, "today-scroll");

    startday = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    numofdays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    numofdaysprev = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

    for(let i = 0; i < 7; i++) {
        var first = dd - d + i;
        id = days[Object.keys(days)[i]];
        if (first > numofdays) { first = first - numofdays; }
        else if (first < 1) { first = numofdaysprev - Math.abs(first); }
        if (first < 10) { first = "0"+first; }
        document.getElementById(id).innerHTML = first;

        if (dd-d+i < 1) { fulldate = m + "-" + first + "-" + yyyy; }
        else { fulldate = m+1 + "-" + first + "-" + yyyy; }
        console.log(fulldate);

        getWeekEvents(fulldate, id+"day")
    }

    for(let i = 1; i <= numofdays; i++) {
        var num = i+startday;
        document.getElementById(num).innerHTML = i;
        
        if (num < 10) { num = "0"+i; }
        fulldate = m+1 + "-" + num + "-" + yyyy;
        getMonthEvents(fulldate, i+startday+"-scroll");
    }
}

setDates();
