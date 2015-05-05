var bio = {
  "name": "Michael Pigott",
  "role": "Senior Software Engineer",
  "contacts": {
    "mobile": "203-969-5972",
    "email":  "rpimike1022@yahoo.com",
    "github": "mikepigott",
    "twitter": "@ironponyexpress",
    "location": "Tuckahoe, New York 10707"
  },
  "welcomeMessage": "Hi, I'm Mike!",
  "skills": [
    "C++", "Java", "Scala"
  ],
  "bioPic": "images/profile.jpg"
}

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
    $("#header").prepend(HTMLheaderName.replace('%data%', bio.name));

    $("#topContacts").append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace('%data%', bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace('%data%', bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace('%data%', bio.contacts.location));

    $("#header").append(HTMLbioPic.replace('%data%', bio.bioPic));

    if (bio.skills && bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
	    $("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
	}
    }

    $("#footerContacts").append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace('%data%', bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace('%data%', bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace('%data%', bio.contacts.location));
}

var education = {
  "schools": [
    {
      "name": "Rensselaear Polytechnic Institute",
      "location": "Troy, New York",
      "degree": "Bachelor of Science",
      "major": "Computer Science",
      "dates": "September 2000 - May 2005",
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

education.display = function() {
    if (education.schools && education.schools.length > 0) {
	for (school in education.schools) {
	    $("#education").append(HTMLschoolStart);

	    var formattedName =
		HTMLschoolName.replace('%data%', education.schools[school].name)
	          + HTMLschoolDegree.replace('%data%', education.schools[school].degree);

	    $(".education-entry:last").append(formattedName);
	    $(".education-entry:last").append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
	    $(".education-entry:last").append(HTMLschoolLocation.replace('%data%', education.schools[school].location));
	    $(".education-entry:last").append(HTMLschoolMajor.replace('%data%', education.schools[school].major));
	}
    }
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

work.display = function displayWork() {
  if (work.jobs && work.jobs.length > 0) {
    for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedName =
	    HTMLworkEmployer.replace('%data%', work.jobs[job].employer)
	    + HTMLworkTitle.replace('%data%', work.jobs[job].title);

	$(".work-entry:last").append(formattedName);
	$(".work-entry:last").append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
    }
  }
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

projects.display = function() {

  if (projects.projects && projects.projects.length > 0) {
    for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(HTMLprojectTitle.replace('%data%', projects.projects[project].title));
	$(".project-entry:last").append(HTMLprojectDates.replace('%data%', projects.projects[project].dates));
	$(".project-entry:last").append(HTMLprojectDescription.replace('%data%', projects.projects[project].description));
	if (projects.projects[project].image) {
	    $(".project-entry:last").append(HTMLprojectImage.replace('%data%', projects.projects[project].image));
	}
    }
  }
}

function inName() {
    var nameArray = bio.name.split(' ');
    var outName =
         nameArray[0].substring(0, 1).toUpperCase()  + nameArray[0].substring(1)
           + " " + nameArray[1].toUpperCase();
    return outName;
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

