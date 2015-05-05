var dataTmpl = '%data%';

var bio = {
  "name": "Michael Pigott",
  "role": "Senior Software Engineer",
  "contacts": {
    "mobile": "914-555-9863",
    "email":  "rpimike1022@yahoo.com",
    "github": "mikepigott",
    "twitter": "@ironponyexpress",
    "location": "Tuckahoe, New York 10707"
  },
  "welcomeMessage": "Hi, I'm Mike! This is an interactive resume I created for the Udacity Web Developer's Nanodegree.",
  "skills": [
    "C++", "Java", "Scala", "Perl", "Hadoop", "HBase", "ANTLR", "Play Framework"
  ],
  "bioPic": "images/profile.jpg"
}

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace(dataTmpl, bio.role));
    $("#header").prepend(HTMLheaderName.replace(dataTmpl, bio.name));

    $("#topContacts").append(HTMLmobile.replace(dataTmpl, bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace(dataTmpl, bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace(dataTmpl, bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace(dataTmpl, bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace(dataTmpl, bio.contacts.location));

    $("#header").append(HTMLwelcomeMsg.replace(dataTmpl, bio.welcomeMessage));
    $("#header").append(HTMLbioPic.replace(dataTmpl, bio.bioPic));

    if (bio.skills && bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
	    $("#skills").append(HTMLskills.replace(dataTmpl, bio.skills[skill]));
	}
    }

    $("#footerContacts").append(HTMLmobile.replace(dataTmpl, bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace(dataTmpl, bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace(dataTmpl, bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace(dataTmpl, bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace(dataTmpl, bio.contacts.location));
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
		HTMLschoolName.replace(dataTmpl, education.schools[school].name)
	          + HTMLschoolDegree.replace(dataTmpl, education.schools[school].degree);

	    $(".education-entry:last").append(formattedName);
	    $(".education-entry:last").append(HTMLschoolDates.replace(dataTmpl, education.schools[school].dates));
	    $(".education-entry:last").append(HTMLschoolLocation.replace(dataTmpl, education.schools[school].location));
	    $(".education-entry:last").append(HTMLschoolMajor.replace(dataTmpl, education.schools[school].major));
	}
    }

    if (education.onlineCourses && education.onlineCourses.length > 0) {
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
	    $("#education").append(HTMLschoolStart);

	    var formattedName =
		HTMLonlineTitle.replace(dataTmpl, education.onlineCourses[course].title)
	        + HTMLonlineSchool.replace(dataTmpl, education.onlineCourses[course].school);

	    $(".education-entry:last").append(formattedName);
	    $(".education-entry:last").append(HTMLonlineDates.replace(dataTmpl, education.onlineCourses[course].dates));
	    $(".education-entry:last").append(HTMLonlineURL.replace(dataTmpl, education.onlineCourses[course].url));
	}
    }
}

var work = {
  "jobs": [
    {
      "employer": "OnDeck Inc.",
      "title": "Senior Software Engineer",
      "dates": "September 2014 - Present",
      "description": "Updated OnDeck's Loan Servicing Platform (LSP), to better calculate principal & interest paid over the life of a term loan and line of credit.  Worked on a team to redesign and implement a replacement system for the legacy Java application.",
      "accomplishments": [
        "Implemented a P&I calculation more helpful for the finance and accounting teams."
      ],
      "location": "1400 Broadway, New York, NY 10118"
    },
    {
      "employer": "LinkedIn, Inc.",
      "title": "Senior Software Engineer",
      "dates": "April 2013 - May 2014",
      "description": "Worked with a team to develop, enhance, and maintain the GaaP system, a web-based script development environment using Java on the Play! web framework, its administrative tool, and script engine using Scala on the Play! framework. Lead engineer in a team which developed a prototype used to scrape career opportunities from client websites and post them to LinkedIn using the GaaP system. Built a reactive Scala web application on the Play! framework to retrieve the fetched jobs from the GaaP system, perform post-processing with data from internal and external REST services, and post to the LinkedIn Jobs API. Used the Anorm Scala API to read and write to an Oracle database.",
      "location": "350 5th Ave, New York, NY 10118"
    },
    {
       "employer": "FactSet Research Systems, Inc.",
       "title": "Senior Software Engineer",
       "dates": "July 2005 - February 2013",
       "description": "Responsible for designing and prototyping a new data storage format in HBase for performance comparison of financial time-series data against the FactSet custom financial time-series database. Developed a data transfer mechanism from existing FactSet custom databases to HBase using C++, Perl, Java, ANTLR, and Map/Reduce.  Managed a team of six engineers in the Quantitative Applications group to enhance and maintain FactSet's Alpha Testing, Portfolio Simulation, and Screen Iterator products, all written in C++. Worked with three Product Developers over two offices to prioritize both major projects and minor enhancements for those applications. Also initiated a side project to prototype a performance improvement of Alpha Testing via Map/Reduce on Hbase using C++, Thirft, Perl, Java, and Hadoop Map/Reduce.  Designed, developed, launched, and enhanced PA Reconciliation, a C++ application designed to find and report discrepancies in client data. Also maintained and enhanced a C++ parser that collects financial trades directly from the Advent Axys / APX accounting system.",
       "location": "601 Merritt Seven, Norwalk, Connecticut, 06851",
      "accomplishments": [
        "Reduced a 1,100ms fetch time from a custom time-series database to 475ms on HBase with the new storage format.",
	"Recommended further system-wide changes to remove 300ms of fetch time from the remaining 475ms.",
        "Managed a Hadoop internship project demonstrating a 100x performance gain for a subset of Alpha Testing features.",
	"Demonstrated a 100x+ performance gain of the Compustat Point-in-Time Database in moving to HBase.",
	"Led winning team of FactSet's Choice Award in Hack-a-Thon 2012, demonstrating HBase at a 2x performance gain over the FactSet custom time-series database.",
	"Recognized by the Mid-Atlantic Sales Team for exemplary customer service in helping resolve client data and parser problems in 2007."
      ]
    }
  ]
}

work.display = function displayWork() {
  if (work.jobs && work.jobs.length > 0) {
    for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedName =
	    HTMLworkEmployer.replace(dataTmpl, work.jobs[job].employer)
	    + HTMLworkTitle.replace(dataTmpl, work.jobs[job].title);

	$(".work-entry:last").append(formattedName);
	$(".work-entry:last").append(HTMLworkDates.replace(dataTmpl, work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace(dataTmpl, work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDescription.replace(dataTmpl, work.jobs[job].description));
	if (work.jobs[job].accomplishments && work.jobs[job].accomplishments.length > 0) {
	    $(".work-entry:last").append(HTMLworkAccomplishmentsStart);
	    for (accomplishment in work.jobs[job].accomplishments) {
		$(".accomplishments:last").append(HTMLworkAccomplishmentsEntry.replace(dataTmpl, work.jobs[job].accomplishments[accomplishment]));
	    }
	}
    }
  }
}

var projects = {
  "projects": [
      {
        "title": "XML to Avro",
        "dates": "July - September 2014",
        "description": "Tool to generate an Avro schema from an XML Schema, and store any XML documents following that schema in Avro."
      },
      {
	"title": "Virtual Reality eCommerce",
	"dates": "January - May 2005",
	"description": "Designed and developed the server side of a prototype QuickTime VR three-dimensional interface to an online store. Researched different virtual reality environments and settled on QuickTime VR. Coded a web services client for the Amazon Web Services service on the server in Java / JSP."
      }
  ]
}

projects.display = function() {

  if (projects.projects && projects.projects.length > 0) {
    for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(HTMLprojectTitle.replace(dataTmpl, projects.projects[project].title));
	$(".project-entry:last").append(HTMLprojectDates.replace(dataTmpl, projects.projects[project].dates));
	$(".project-entry:last").append(HTMLprojectDescription.replace(dataTmpl, projects.projects[project].description));
	if (projects.projects[project].image) {
	    $(".project-entry:last").append(HTMLprojectImage.replace(dataTmpl, projects.projects[project].image));
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

