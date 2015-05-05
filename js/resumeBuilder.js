var bio = {
  "name": "Michael Pigott",
  "role": "Senior Software Engineer",
  "contacts": {
    "mobile": "203-969-5972",
    "email":  "rpimike1022@yahoo.com",
    "github": "mikepigott",
    "twitter": "@ironponyexpress",
    "location": "New York, New York"
  },
  "welcomeMessage": "Hi, I'm Mike!",
  "skills": [
    "C++", "Java", "Scala"
  ],
  "bioPic": null
}

var education = {
  "schools": [
    {
      "name": "Rensselaear Polytechnic Institute",
      "city": "Troy, New York",
      "degree": "Bachelor of Science",
      "majors": [
        "Computer Science"
      ],
      "dates": 2005,
      "url": "http://www.rpi.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Udacity Web Development Nanodegree",
      "school": "Udacity",
      "dates": 2015,
      "url": "http://www.udacity.com/"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "OnDeck Inc.",
      "title": "Senior Software Engineer",
      "dates": "September 2014 - Present",
      "description": "None.",
      "location": "1400 Broadway, New York, NY 10118"
    },
    {
      "employer": "LinkedIn, Inc.",
      "title": "Senior Software Engineer",
      "dates": "April 2013 - May 2014",
      "description": "None.",
      "location": "350 5th Ave, New York, NY 10118"
    },
    {
       "employer": "FactSet Research Systems, Inc.",
       "title": "Senior Software Engineer",
       "dates": "July 2005 - February 2013",
       "description": "Lots of stuff.",
       "location": "601 Merritt Seven, Norwalk, Connecticut, 06851"
    }
  ]
}

var projects = {
  "projects": [
      {
        "title": "XML to Avro",
        "dates": "July - September 2014",
        "description": "Tool to generate an Avro schema from an XML Schema, and store any XML documents following that schema in Avro."
      }
  ]
}

function displayWork() {
    for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(HTMLworkEmployer.replace('%data%', work.jobs[job].employer));
	$(".work-entry:last").append(HTMLworkTitle.replace('%data%', work.jobs[job].title));
	$(".work-entry:last").append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
    }
}

function inName() {
    var nameArray = bio.name.split(' ');
    var outName =
         nameArray[0].substring(0, 1).toUpperCase()  + nameArray[0].substring(1)
           + " " + nameArray[1].toUpperCase();
    return outName;
}

$("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
$("#header").prepend(HTMLheaderName.replace('%data%', bio.name));
$("#topContacts").append(HTMLmobile.replace('%data%', bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace('%data%', bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace('%data%', bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace('%data%', bio.contacts.location));

if (bio.skills && bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
	$("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
    }
}

if (work.jobs && work.jobs.length > 0) {
    displayWork();
}

$(document).click(function(loc) {
    console.log("Click: [" + loc.pageX + ", " + loc.pageY + "]");
});

$("#main").append(internationalizeButton);
