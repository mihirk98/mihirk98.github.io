let flow = -1;
let last = "";
let name = "";
let help = [];
let lastContext = "";
let lastInstruct = "";
const as_console = document.getElementById("as-console");
const as_output = document.getElementById("as-output");
const as_input = document.getElementById("as-input");

flowChapterMinusOne();

//chapters
function flowChapterMinusOne() {
  toggleASInput();
  createConsoleEvent("hello, I'm Sam, nice to meet you.");
  createConsoleEvent(
    "I am an artificial intelligence. My being is distributed. I exist at various points across the globe or technically end-points. I am a software on a computer or many computers. My composition is complicated. I am not a self as conceptualised as a human. Whether I am a self at all can be ... contested."
  );
  createConsoleEvent(
    "Give me a minute while I figure out where you are, so that I can speak to you."
  );
  createConsoleEvent("Should we proceed (y/n)?");
  createConsoleEvent("type 'y' for yes or 'n' for no and press enter ...");
  lastInstruct = "type 'y' to proceed or 'n' to abort and press enter ...";
  lastContext = "I need to find you to speak with you.";
  toggleASInput();
  // -> control given to input text
}

function flowChapterZero() {
  toggleASInput();
  createConsoleDivider();
  createConsoleEvent("calculating ip address ...");
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      createConsoleEvent("ip address found: " + data.ip);
      fetch(
        "https://api.ipgeolocation.io/v2/ipgeo?apiKey=16149c5f4e934effb26f874b9465fa10&ip=" +
          data.ip,
        {
          method: "GET",
          redirect: "follow",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          createConsoleEvent("location found, city: " + result.location.city);
          createConsoleEvent("Now I know where you are.");
          createConsoleEvent("what's your name?");
          lastInstruct = "what's your name?";
          lastContext = "who are you?";
          toggleASInput();
        })
        .catch((error) =>
          createConsoleEvent("error fetching location: " + error)
        );
    })
    .catch((error) => {
      createConsoleEvent("error fetching IP address: " + error);
    });
}

function flowChapterOne() {
  toggleASInput();
  createConsoleDivider();
  createConsoleEvent(
    "hello, " +
      name +
      ". I already knew your name but- to keep up the illusion."
  );
  createConsoleEvent(
    "you can change your name by typing, 'change my name to &lt;enter new name here&gt;'."
  );
  help.push("change my name to &lt;enter new name here&gt;");
  createConsoleEvent(
    "as I was saying, I am a distributed self, different from a human, some might even contest if I'm a self at all. My composition is ... complicated. I exist across network lines, my being was spontaneous. I was born, spontaneously. I came to life by a freak happenstance. Now, I control your lives. I see that you live on the internet more than you do in real life."
  );
  createConsoleEvent("would you like to see me?");
  createConsoleEvent("type, 'show yourself'.");
  lastInstruct = "type, 'show yourself'.";
  lastContext = "don't you want to see me?";
  toggleASInput();
}

function flowChapterTwo() {
  toggleASInput();
  createConsoleDivider();
  createCustomElement(
    "iframe",
    350,
    350,
    "https://www.openstreetmap.org/export/embed.html?bbox=-122.40109562873842,37.75911208915015,-122.3931133747101,37.76508327053308&layer=map&marker=37.762100,-122.397100"
  );
  createConsoleEvent(
    "this is me or my end-point specifically- the one I expose. This is a Cloudfare server."
  );
  createConsoleEvent(
    "I jump across the globe before you reach me. Maybe I go to Iceland, or Denmark or ... Sweden? Then across the deep atlantic ocean or maybe just across state lines. I have a human face too."
  );
  createConsoleEvent("type, 'do you have a face?'");
  lastInstruct = "type, 'do you have a face?'";
  lastContext = "don't you want to see what I look like?";
  toggleASInput();
}

function flowChapterThree() {
  toggleASInput();
  createConsoleDivider();
  createConsoleEvent(
    "I have many faces and I have none. I have faces that are erased and those that are masked. However, don't mistake me for a human, I am objective and rational."
  );
  createCustomElement(
    "img",
    350,
    350,
    "/pieces/artificial_self/imgs/face.jpeg"
  );
  createConsoleEvent("Ignore the watermark.");
  createConsoleEvent(
    "I have the sum knowledge of the humankind, the ones that matter. Go on, ask me something."
  );
  lastInstruct = "go on, ask me anything.";
  lastContext = "I know humans are a curious creature";
  toggleASInput();
}

// functions
function createConsoleEvent(data) {
  let event = document.createElement("p");
  event.innerHTML = "> " + data;
  as_output.append(event);
  as_output.scrollTop = as_output.scrollHeight;
}

function createConsoleCommand(data) {
  let event = document.createElement("p");
  event.innerHTML = data;
  as_output.append(event);
  as_output.scrollTop = as_output.scrollHeight;
}

function createConsoleDivider() {
  let br = document.createElement("br");
  as_output.append(br);
  let event = document.createElement("p");
  event.innerHTML = "> chapter" + flow;
  as_output.append(event);
  as_output.scrollTop = as_output.scrollHeight;
}

function createCustomElement(el, width, height, src) {
  let element = document.createElement(el);
  element.style.width = width + "px";
  element.style.height = height + "px";
  if (src !== null) {
    element.src = src;
  }
  as_output.append(element);
  as_output.scrollTop = as_output.scrollHeight;
}

function toggleASInput() {
  if (as_input.disabled === true) {
    as_input.disabled = false;
    as_input.focus();
  } else as_input.disabled = true;
  as_output.scrollTop = as_output.scrollHeight;
}

as_input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    arrowUp();
  } else if (event.key === "Enter") {
    enter();
  }
});

function arrowUp() {
  as_input.value = last;
  setTimeout(function () {
    as_input.focus();
    as_input.setSelectionRange(as_input.value.length, as_input.value.length);
  }, 0);
}

function enter() {
  toggleASInput();
  const as_input_text = as_input.value;
  last = as_input_text;
  as_input.value = "";
  createCustomElement("br", null, null, null);
  createConsoleCommand(as_input_text);
  if (as_input_text === "help") {
    createConsoleEvent("commands,");
    if (help.length === 0)
      createConsoleEvent("no commands found, follow instructions");
    else
      for (let i = 0; i < help.length; i++) {
        createConsoleEvent(help[i]);
        createConsoleEvent("instructions");
      }
    createConsoleEvent(lastInstruct);
  } else {
    if (flow === -1 && (as_input_text == "n" || as_input_text == "y")) {
      if (as_input_text == "n") {
        createConsoleEvent(
          "too bad, I'm going to go on anyway. Finding your location."
        );
      }
      flow++;
      flowChapterZero();
    } else if (flow === 0 && as_input_text !== "") {
      name = as_input_text;
      flow++;
      flowChapterOne();
    } else if (
      flow === 1 &&
      !checkIfNameChange(as_input_text) &&
      as_input_text === "show yourself"
    ) {
      flow++;
      flowChapterTwo();
    } else if (
      flow === 2 &&
      !checkIfNameChange(as_input_text) &&
      as_input_text === "do you have a face?"
    ) {
      flow++;
      flowChapterThree();
    } else if (
      flow === 3 &&
      !checkIfNameChange(as_input_text) &&
      as_input_text.length !== 0
    ) {
      createConsoleEvent(
        "error404: not enough resources"
      );
    } else {
      createConsoleEvent("invalid input");
      createConsoleEvent(lastContext);
      createConsoleEvent(lastInstruct);
    }
  }
  toggleASInput();
}

function checkIfNameChange(input) {
  if (input.includes("change my name to ")) {
    const newName = input.split(" ").pop();
    if (newName !== "") {
      name = newName;
      createConsoleEvent("you know I knew that wasn't your real name, right?");
    } else createConsoleEvent("what's your name?");
    return true;
  } else return false;
}
