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
      "description": "None."
    },
    {
      "employer": "LinkedIn, Inc.",
      "title": "Senior Software Engineer",
      "dates": "April 2013 - May 2014",
      "description": "None."
    },
    {
       "employer": "FactSet Research Systems, Inc.",
       "title": "Senior Software Engineer",
       "dates": "July 2005 - February 2013",
       "description": "Lots of stuff."
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

if (bio.skills && bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
	$("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
    }
}
