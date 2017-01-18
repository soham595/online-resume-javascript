var bio = {
    "name" : "Soham Das",
    "role" : "Student",
    "contactInfo" : "9954783950",
    "picture" : "images/me.png",
    "welcomeMessage" : "This is my resume",
    "skills" : ["C"," Java"," Javascript"," Web Development"," Android Development"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo);
var formattedbiopic = HTMLbioPic.replace("%data%", bio.picture);
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedMobile);
$("#header").prepend(formattedbiopic);
$("#lets-connect").append(formattedwelcomeMessage);
$("#header").append(formattedSkills);

var work = {};
var education = {};

work.position = "Student";

education["name"] = "RNSIT";
education["years"] = "2015-";
education["city"] = "Bengaluru";

$("#main").append(work["position"]);
$("#main").append(education.name);