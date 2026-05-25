var questions = [
  {
    q: "What does CSS stand for?",
    opts: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    ans: 0
  },
  {
    q: "Which HTML tag creates the largest heading?",
    opts: ["<h6>", "<head>", "<h1>", "<heading>"],
    ans: 2
  },
  {
    q: "Which JavaScript method adds an item to the end of an array?",
    opts: ["pop()", "shift()", "push()", "append()"],
    ans: 2
  },
  {
    q: "What does API stand for?",
    opts: [
      "Applied Program Integration",
      "Application Programming Interface",
      "Automated Process Input",
      "Application Process Interface"
    ],
    ans: 1
  },
  {
    q: "Which CSS value makes a flexible container?",
    opts: [
      "display: block",
      "display: flex",
      "display: inline",
      "display: grid"
    ],
    ans: 1
  }
];

var curr = 0;
var score = 0;
var done = false;

function loadQ() {
  done = false;

  var q = questions[curr];

  document.getElementById("qnum").textContent =
    "Question " + (curr + 1) + " of " + questions.length;

  document.getElementById("qtxt").textContent = q.q;
  document.getElementById("qmsg").textContent = "";
  document.getElementById("nbtn").style.display = "none";

  var div = document.getElementById("opts");
  div.innerHTML = "";

  q.opts.forEach(function(opt, i) {
    var btn = document.createElement("button");
    btn.textContent = opt;

    btn.onclick = function() {
      checkAns(i, btn);
    };

    div.appendChild(btn);
  });
}

function checkAns(i, btn) {
  if (done) return;

  done = true;

  var all =
    document.getElementById("opts")
      .querySelectorAll("button");

  all.forEach(function(b) {
    b.onclick = null;
  });

  if (i === questions[curr].ans) {
    btn.classList.add("correct");
    document.getElementById("qmsg").style.color = "#1a7a40";
    document.getElementById("qmsg").textContent =
      "✓ Correct!";
    score++;
  } else {
    btn.classList.add("wrong");
    all[questions[curr].ans]
      .classList.add("correct");

    document.getElementById("qmsg").style.color =
      "#b91c1c";

    document.getElementById("qmsg").textContent =
      "✗ Wrong answer.";
  }

  document.getElementById("nbtn").style.display =
    "inline-block";
}

function nextQ() {
  curr++;

  if (curr < questions.length) {
    loadQ();
  } else {
    showEnd();
  }
}

function showEnd() {
  document.getElementById("qbox").style.display =
    "none";

  document.getElementById("result").style.display =
    "block";

  document.getElementById("score").textContent =
    score + " / " + questions.length;

  var remarks = [
    "Keep practicing!",
    "Not bad!",
    "Good effort!",
    "Great job!",
    "Perfect score!"
  ];

  document.getElementById("remark").textContent =
    remarks[score];
}

function restart() {
  curr = 0;
  score = 0;
  done = false;

  document.getElementById("result").style.display =
    "none";

  document.getElementById("qbox").style.display =
    "block";

  loadQ();
}

function toggleMenu() {
  document
    .getElementById("menu")
    .classList.toggle("open");
}

function fetchJoke() {

  var joke =
    document.getElementById("joketxt");

  var load =
    document.getElementById("jloading");

  joke.textContent = "Loading...";
  load.textContent = "Fetching joke...";

  fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=single"
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {

      if (data.joke) {
        joke.textContent =
          "😄 " + data.joke;

        load.textContent =
          "Fetched successfully!";
      } else {
        joke.textContent =
          "No joke found.";
        load.textContent = "";
      }
    })
    .catch(function() {
      joke.textContent =
        "Could not load joke. Check internet.";

      load.textContent = "";
    });
}

loadQ();