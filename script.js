const scenes = {
  intro: {
    title: "Prologue: Drifting Over Karthis-9",
    graphic: String.raw`
          .      *        .
   *         .         *      .
       .            ____
   .       *       / __ \    __
                 _/ /  \ \__/ /__
      *        /_  __  _  __  _/
   .            /_/  \/_/  \/_/    *
      [LONE STAR SCOUT SHIP ORBITING KARTHIS-9]
`,
    description:
      "Your scout ship loses all long-range comms. Somewhere below, the vault-world of Karthis-9 hides a beacon that can save a million colonists.",
    choices: [
      { text: "Land near the old imperial relay tower.", target: "relayTower" },
      { text: "Follow an encrypted distress ping in the polar storms.", target: "polarStorm" },
      { text: "Dock with a derelict station in low orbit.", target: "derelictStation" },
      { text: "Attempt an emergency jump and abandon the mission.", target: "deathJump" }
    ]
  },
  relayTower: {
    title: "Scene 2: The Relay Tower",
    graphic: String.raw`
        /\
       /  \      _
      / /\ \    | |
     / ____ \ __| |___
    /_/    \_\\__  __/
                | |
                |_|
      [ANCIENT TOWER HUMS WITH STATIC]
`,
    description:
      "Lightning crawls over a black metal spire. A service hatch blinks green, but the upper dish rotates toward you like an awakened eye.",
    choices: [
      { text: "Enter through the service hatch.", target: "archiveCore" },
      { text: "Climb to the dish and reroute power manually.", target: "deathLightning" },
      { text: "Broadcast your identity to any AI caretaker.", target: "echoAI" },
      { text: "Retreat to your ship and scan from orbit.", target: "derelictStation" }
    ]
  },
  polarStorm: {
    title: "Scene 3: Polar Storm Frontier",
    graphic: String.raw`
      ~ ~ ~ ~ ~ ~ ~ ~ ~
   ~   \  |  /   ~   ~
      --  *  --
   ~   /  |  \   ~   ~
      [ICE CYCLONE FIELD]
`,
    description:
      "The distress signal leads into a wall of blue static and razor-ice winds. A half-buried rover beacon flashes beneath the drift.",
    choices: [
      { text: "Anchor the ship and walk to the beacon.", target: "frozenRover" },
      { text: "Lower a drone to investigate first.", target: "endingTruth" },
      { text: "Push through the storm at full thrust.", target: "deathStorm" },
      { text: "Abort and head to the relay tower instead.", target: "relayTower" }
    ]
  },
  derelictStation: {
    title: "Scene 4: Orbital Graveyard",
    graphic: String.raw`
      _____________
     /  _  _  _   /|
    /__/__/__/___/ |
    |  __  __  |  |
    | |  ||  | |  |
    | |__||__| |  /
    |__________|/
     [DERELICT STATION: NEMESIS RING]
`,
    description:
      "Inside the station, corridors flicker between power and darkness. Someone recently opened the command vault.",
    choices: [
      { text: "Follow fresh footprints to command.", target: "commandVault" },
      { text: "Access the life-support logs in engineering.", target: "endingSurvivor" },
      { text: "Open the airlock to flush hidden threats.", target: "deathVacuum" },
      { text: "Return to the planet and seek the storm beacon.", target: "polarStorm" }
    ]
  },
  archiveCore: {
    title: "Scene 5: Archive Core",
    graphic: String.raw`
      [====] [====] [====]
      [====] [CORE] [====]
      [====] [====] [====]
         ||  ||  ||
      [DATA CHAMBER ACTIVE]
`,
    description:
      "Rows of crystal memory cores hold pre-fall navigation data. The chamber can only export one package before it self-seals.",
    choices: [
      { text: "Download stellar refugee routes.", target: "endingHope" },
      { text: "Download imperial weapon schematics.", target: "deathSentinel" },
      { text: "Download ecological restoration protocols.", target: "endingGardens" },
      { text: "Leave without taking anything.", target: "deathSilence" }
    ]
  },
  echoAI: {
    title: "Scene 6: Echo of the Caretaker",
    graphic: String.raw`
        .-"""-.
       / .===. \
       \/ 6 6 \/
       ( \___/ )
___ooo__\_____/__ooo___
  [HOLOGRAPHIC CARETAKER AVATAR]
`,
    description:
      "An AI appears, speaking with the voice of a long-dead explorer. It offers exactly one answer to one question.",
    choices: [
      { text: "Ask for the safest path off-world.", target: "endingHope" },
      { text: "Ask where the missing crew went.", target: "commandVault" },
      { text: "Ask for unrestricted control codes.", target: "deathSentinel" },
      { text: "Refuse to engage and sever the link.", target: "deathSilence" }
    ]
  },
  frozenRover: {
    title: "Scene 7: Frozen Rover",
    graphic: String.raw`
        ______
    ___/|_||_\`.__
   (   _    _ _  _\
  =\`-(_)--(_)-'  
   [ROVER HALF-BURIED IN ICE]
`,
    description:
      "Inside the rover you find a dead pilot clutching a prism map. The map points to three subterranean routes and one marked with a warning rune.",
    choices: [
      { text: "Take the brightest tunnel route.", target: "deathStorm" },
      { text: "Take the rune-marked route anyway.", target: "deathSentinel" },
      { text: "Take the narrow geothermal route.", target: "endingGardens" },
      { text: "Transmit the map and wait for extraction.", target: "endingTruth" }
    ]
  },
  commandVault: {
    title: "Scene 8: Command Vault",
    graphic: String.raw`
    ____________________
   |  COMMAND VAULT     |
   |  [LOCK] [LOCK]     |
   |______[ CORE ]______|
      ||            ||
`,
    description:
      "A quantum lock protects the station's final command core. You can override it by sacrificing your ship, or leave it sealed forever.",
    choices: [
      { text: "Sacrifice your ship to open the vault.", target: "endingSurvivor" },
      { text: "Leave the vault sealed and depart.", target: "deathSilence" },
      { text: "Rig the vault to explode after opening.", target: "deathVacuum" },
      { text: "Send the vault coordinates to the AI caretaker.", target: "endingTruth" }
    ]
  },
  deathJump: {
    title: "Death: Blind Jump",
    graphic: "<<< FTL WAKE COLLAPSE >>>",
    description:
      "You jump without coordinates. Space folds wrong. The Lone Star vanishes between charts.",
    type: "death"
  },
  deathLightning: {
    title: "Death: Storm-Lashed Tower",
    graphic: "/// ELECTRICAL OVERLOAD ///",
    description:
      "A lightning arc engulfs the dish. Your suit ignites before you can descend.",
    type: "death"
  },
  deathStorm: {
    title: "Death: Whiteout",
    graphic: "~~~ SIGNAL LOST IN STATIC ~~~",
    description:
      "The polar cyclone tears metal apart. Your final log is a burst of frozen noise.",
    type: "death"
  },
  deathVacuum: {
    title: "Death: Open to the Void",
    graphic: "[AIRLOCK CYCLE: EXTERNAL]",
    description:
      "The station vents in seconds. Your last sight is Karthis-9 spinning silently below.",
    type: "death"
  },
  deathSentinel: {
    title: "Death: Sentinel Protocol",
    graphic: "[AUTOMATED DEFENSES ONLINE]",
    description:
      "Ancient guardian drones descend from hidden alcoves and erase all intruders.",
    type: "death"
  },
  deathSilence: {
    title: "Death: Mission Failure",
    graphic: "--- COLONY CHANNELS GO DARK ---",
    description:
      "You leave with no data and no proof. Months later, the colonies go quiet one by one.",
    type: "death"
  },
  endingHope: {
    title: "Ending I — The Starpath",
    graphic: "*** REFUGEE FLEET ROUTES RESTORED ***",
    description:
      "Your recovered routes guide thousands through safe corridors. Your name becomes a promise in every outer colony.",
    type: "ending"
  },
  endingGardens: {
    title: "Ending II — Gardens Under Glass",
    graphic: "*** BIOSPHERE PROTOCOLS UNLOCKED ***",
    description:
      "You seed dead moons with living domes. Children born beneath alien skies call Karthis-9 the world that fed them.",
    type: "ending"
  },
  endingSurvivor: {
    title: "Ending III — Last Crew, First Dawn",
    graphic: "*** CRYO-DECK REVIVAL SUCCESSFUL ***",
    description:
      "You awaken the station's survivors. Together, you rebuild the frontier and turn ruins into ports of light.",
    type: "ending"
  },
  endingTruth: {
    title: "Ending IV — The Signal's Truth",
    graphic: "*** ORIGIN OF DISTRESS SIGNAL REVEALED ***",
    description:
      "The distress call was a test by hidden allies beyond mapped space. They welcome humanity into a greater alliance.",
    type: "ending"
  }
};

let currentSceneId = "intro";

const sceneGraphic = document.getElementById("sceneGraphic");
const sceneTitle = document.getElementById("sceneTitle");
const sceneDescription = document.getElementById("sceneDescription");
const choiceButtons = [0, 1, 2, 3].map((index) => document.getElementById(`choice${index}`));
const restartBtn = document.getElementById("restartBtn");

function renderScene(sceneId) {
  const scene = scenes[sceneId];
  currentSceneId = sceneId;

  sceneGraphic.textContent = scene.graphic;
  sceneTitle.textContent = scene.title;
  sceneDescription.textContent = scene.description;

  sceneTitle.classList.remove("ending", "death");
  if (scene.type === "ending") {
    sceneTitle.classList.add("ending");
  }
  if (scene.type === "death") {
    sceneTitle.classList.add("death");
  }

  choiceButtons.forEach((btn, index) => {
    if (scene.choices && scene.choices[index]) {
      btn.style.display = "block";
      btn.disabled = false;
      btn.textContent = `${index + 1}. ${scene.choices[index].text}`;
      btn.onclick = () => renderScene(scene.choices[index].target);
    } else {
      btn.style.display = "none";
      btn.onclick = null;
    }
  });
}

restartBtn.addEventListener("click", () => renderScene("intro"));

renderScene(currentSceneId);
