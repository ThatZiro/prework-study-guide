var topics = ["HTML", "CSS", "Git", "JavaScript"];
var topic = topics[Math.floor(Math.random() * topics.length)];
listTopics();
selectTopic();

function listTopics() {
  console.log("What should we study?");
  for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
  console.log("========================");
}

function selectTopic() {
  if (topic === "HTML") {
    console.log("Let's Study HTML!");
  } else if (topic === "CSS") {
    console.log("Let's Study CSS!");
  } else if (topic === "Git") {
    console.log("Let's Study Git!");
  } else if (topic === "JavaScript") {
    console.log("Let's Study JavaScript!");
  } else {
    console.log("Invalid Topic");
  }
}
