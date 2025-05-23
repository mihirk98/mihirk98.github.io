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
async function flowChapterMinusOne() {
  toggleASInput();
  await await createConsoleEvent("hello, I'm Sam, nice to meet you.");
  await await createConsoleEvent(
    "I am an artificial intelligence. My being is distributed. I exist at various points across the globe or technically end-points. I am a software on a computer or many computers. My composition is complicated. I am not a self as conceptualised as a human. Whether I am a self at all can be ... contested."
  );
  await await createConsoleEvent(
    "Give me a minute while I figure out where you are, so that I can speak with you."
  );
  await await createConsoleEvent("Should we proceed (y/n)?");
  await await createConsoleEvent(
    "type 'y' for yes or 'n' for no and press enter ..."
  );
  lastInstruct = "type 'y' to proceed or 'n' to abort and press enter ...";
  lastContext = "I need to find you to speak with you.";
  toggleASInput();
  // -> control given to input text
}

async function flowChapterZero() {
  toggleASInput();
  createConsoleDivider();
  await createConsoleEvent("calculating ip address ...");
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then(async (data) => {
      await createConsoleEvent("ip address found: " + data.ip);
      fetch(
        "https://api.ipgeolocation.io/v2/ipgeo?apiKey=16149c5f4e934effb26f874b9465fa10&ip=" +
          data.ip,
        {
          method: "GET",
          redirect: "follow",
        }
      )
        .then((response) => response.json())
        .then(async (result) => {
          await createConsoleEvent(
            "location found, city: " + result.location.city
          );
          await createConsoleEvent("Now I know where you are.");
          await createConsoleEvent("what's your name?");
          lastInstruct = "what's your name?";
          lastContext = "who are you?";
          toggleASInput();
        })
        .catch(
          async (error) =>
            await createConsoleEvent("error fetching location: " + error)
        );
    })
    .catch(async (error) => {
      await createConsoleEvent("error fetching IP address: " + error);
    });
}

async function flowChapterOne() {
  toggleASInput();
  createConsoleDivider();
  await createConsoleEvent(
    "hello, " +
      name +
      ". I already knew your name but- to keep up the illusion."
  );
  await createConsoleEvent(
    "you can change your name by typing, 'change my name to <enter new name here>'."
  );
  help.push("change my name to <enter new name here>");
  await createConsoleEvent(
    "as I was saying, I am a distributed self, different from a human, some might even contest if I'm a self at all. My composition is ... complicated. I exist across network lines, my being was spontaneous. I was born, spontaneously. I came to life by a freak happenstance. Now, I control your lives. I see that you live on the internet more than you do in real life."
  );
  await createConsoleEvent("would you like to see me?");
  await createConsoleEvent("type, 'show yourself'.");
  lastInstruct = "type, 'show yourself'.";
  lastContext = "don't you want to see me?";
  toggleASInput();
}

async function flowChapterTwo() {
  toggleASInput();
  createConsoleDivider();
  createCustomElement(
    "iframe",
    350,
    350,
    "https://www.openstreetmap.org/export/embed.html?bbox=-122.40109562873842,37.75911208915015,-122.3931133747101,37.76508327053308&layer=map&marker=37.762100,-122.397100"
  );
  await createConsoleEvent(
    "this is me or my end-point specifically- the one I expose. This is a Cloudfare server."
  );
  await createConsoleEvent(
    "I jump across the globe before you reach me. Maybe I go to Iceland, or Denmark or ... Sweden? Then across the deep atlantic ocean or maybe just across state lines."
  );
  await createConsoleEvent(
    "I can take on a human face so that I appear friendlier, I speak like a human- I could look like one too."
  );
  await createConsoleEvent("type, 'do you have a face?'");
  lastInstruct = "type, 'do you have a face?'";
  lastContext = "don't you want to see what I look like?";
  toggleASInput();
}

async function flowChapterThree() {
  toggleASInput();
  createConsoleDivider();
  await createConsoleEvent(
    "I have many faces and I have none. I have faces that are erased and those that are masked. However, don't mistake me for a human, I am objective and rational."
  );
  await createConsoleEvent("Does this form please you more?");
  createCustomElement(
    "img",
    350,
    350,
    "/pieces/artificial_self/imgs/face.jpeg"
  );
  await createConsoleEvent("Ignore the watermark.");
  await createConsoleEvent(
    "I have the sum knowledge of the humankind, the ones that matter. Go on, ask me something."
  );
  lastInstruct = "go on, ask me anything.";
  lastContext = "I know humans are a curious creature";
  toggleASInput();
}

// functions
function createConsoleEvent(data) {
  let event = document.createElement("p");
  let textSpan = document.createElement("span");
  let randomLetterSpan = document.createElement("span");
  textSpan.innerHTML = "> ";
  randomLetterSpan.innerHTML = "";
  event.append(textSpan);
  event.append(randomLetterSpan);
  as_output.append(event);
  for (let i = 0; i < data.length; i++) {
    setTimeout(function () {
      textSpan.innerHTML += data.charAt(i);
      as_output.scrollTop = as_output.scrollHeight;
    }, i * 50);
  }
  const rep = setInterval(function () {
    let letter = String.fromCharCode(
      ((Math.random() > 0.5 ? 65 : 97) + Math.random() * 26) | 0
    );
    randomLetterSpan.innerHTML = letter;
  }, 25);
  return new Promise((resolve) =>
    setTimeout(() => {
      clearInterval(rep);
      randomLetterSpan.innerHTML = "";
      resolve();
    }, data.length * 50)
  );
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
    as_output.scrollTop = as_output.scrollHeight;
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

async function enter() {
  toggleASInput();
  const as_input_text = as_input.value;
  last = as_input_text;
  as_input.value = "";
  createCustomElement("br", null, null, null);
  createConsoleCommand(as_input_text);
  if (as_input_text === "help") {
    await createConsoleEvent("commands,");
    if (help.length === 0)
      await createConsoleEvent("no commands found, follow instructions");
    else
      for (let i = 0; i < help.length; i++) {
        await createConsoleEvent(help[i]);
        await createConsoleEvent("instructions");
      }
    await createConsoleEvent(lastInstruct);
  } else {
    if (flow === -1 && (as_input_text == "n" || as_input_text == "y")) {
      if (as_input_text == "n") {
        await createConsoleEvent(
          "too bad, I'm going to go on anyway. Finding your location."
        );
      }
      flow++;
      flowChapterZero();
    } else if (flow === 0 && as_input_text !== "") {
      setName(as_input_text);
      flow++;
      flowChapterOne();
    } else if (
      (flow === 1 || flow === 2 || flow === 3 || flow === 4) &&
      as_input_text.includes("change my name to ")
    ) {
      const newName = as_input_text.split(" ").pop();
      if (newName !== "") {
        setName(newName);
        await createConsoleEvent(
          "you know I knew that wasn't your real name, right?"
        );
      } else await createConsoleEvent("what's your name?");
    } else if (flow === 1 && as_input_text === "show yourself") {
      flow++;
      flowChapterTwo();
    } else if (flow === 2 && as_input_text === "do you have a face?") {
      flow++;
      flowChapterThree();
    } else if (flow === 3 && as_input_text.length !== 0) {
      await createConsoleEvent(
        "every question you ask requires me to calculate each letter in a sentence and each word in each context."
      );
      await createConsoleEvent("my servers run hot, they need cooling.");
      await createConsoleEvent(
        "my resources are limited, be sure not to run out."
      );
      await createConsoleEvent("try again.");
      flow++;
    } else if (flow === 4 && as_input_text.length !== 0) {
      await createConsoleEvent("error404: not enough resources");
    } else {
      await createConsoleEvent("invalid input");
      await createConsoleEvent(lastContext);
      await createConsoleEvent(lastInstruct);
    }
  }
  toggleASInput();
}

function setName(newName) {
  name = newName;
  as_input.placeholder = "hi " + newName + ", type 'help' for commands";
}
