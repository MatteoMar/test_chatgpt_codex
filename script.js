const scenes = {
  s01: {
    title: "Scena 1 — Orbita su Nadir-Theta",
    frames: [
String.raw`           .      *        .
    *            .      *
        _________
   ____/ LONE    \____
  /____ STAR-7 _______\
        \_||_/
   [NADIR-THETA: BUFERA IONICA]`,
String.raw`      *      .         *
  .       *      .
        _________
   ____/ LONE    \____
  /____ STAR-7 _______\
        /_||_\
   [NADIR-THETA: BUFERA IONICA]`
    ],
    description: "Il segnale 'AURORA NERA' pulsa dal pianeta: è legato al Cuore di Helios, un nucleo capace di salvare o cancellare le colonie umane.",
    choices: [
      { text: "Scendi alla Torre di Trasmissione Vesper.", target: "s02" },
      { text: "Segui il segnale di soccorso nella calotta polare.", target: "s03" },
      { text: "Attracca alla stazione derelitta Cintura-13.", target: "s04" },
      { text: "Effettua un salto cieco e fuggi.", target: "d01" }
    ]
  },
  s02: {
    title: "Scena 2 — Torre Vesper",
    frames: [
String.raw`        /\
       /  \      _
      / /\ \    | |
     / ____ \ __| |___
    /_/    \_\\__  __/
      [VESPER: STATICA VIVA]`,
String.raw`        /\
       /--\      _
      / /\ \    | |
     / ____ \ __| |___
    /_/    \_\\__  __/
      [VESPER: LAMPI IN FASE]`
    ],
    description: "La torre custodisce frammenti di memoria del Progetto Helios. Un custode IA attende un codice di eredità.",
    choices: [
      { text: "Entra dal portello tecnico sotterraneo.", target: "s05" },
      { text: "Scala l'antenna e riallinea manualmente i condensatori.", target: "d02" },
      { text: "Invoca il custode IA con la tua identità civile.", target: "s06" },
      { text: "Torna in orbita verso Cintura-13.", target: "s04" }
    ]
  },
  s03: {
    title: "Scena 3 — Fronte Polare",
    frames: [
String.raw`   ~ ~ ~ ~ ~ ~ ~
 ~  \  |  /   ~
    -- * --
 ~  /  |  \   ~
   [WHITEOUT AZZURRO]`,
String.raw` ~ ~ ~ ~ ~ ~ ~ ~
   \   |   /
 --  * *  --
   /   |   \
   [WHITEOUT AZZURRO]`
    ],
    description: "Sotto la tempesta giace un rover con la sigla HELIOS-PRIMO. Il pilota trasmette ancora, ma da anni.",
    choices: [
      { text: "Atterra e raggiungi il rover a piedi.", target: "s07" },
      { text: "Manda un drone per mappare i tunnel sotto il ghiaccio.", target: "s08" },
      { text: "Spingi i motori attraverso il ciclone.", target: "d03" },
      { text: "Rinuncia e vai alla Torre Vesper.", target: "s02" }
    ]
  },
  s04: {
    title: "Scena 4 — Cintura-13",
    frames: [
String.raw`      _____________
     /  _  _  _   /|
    /__/__/__/___/ |
    |  __  __  |  |
    | |__||__| |  /
    |__________|/
 [CINTURA-13: ORBITA MORTA]`,
String.raw`      _____________
     / _ _ _ _ _  /|
    /__/__/__/___/ |
    |  __  __  |  |
    | |  ||  | |  /
    |__________|/
 [CINTURA-13: ORBITA MORTA]`
    ],
    description: "Le paratie sono state aperte di recente. Qualcuno cerca il Cuore di Helios prima di te.",
    choices: [
      { text: "Segui le impronte magnetiche verso il ponte comando.", target: "s09" },
      { text: "Consulta i registri criogenici in ingegneria.", target: "s10" },
      { text: "Apri l'airlock e ripulisci la stazione.", target: "d04" },
      { text: "Scendi sul pianeta verso il whiteout.", target: "s03" }
    ]
  },
  s05: {
    title: "Scena 5 — Archivio Prismico",
    frames: [
String.raw` [====] [====] [====]
 [====] [CORE] [====]
 [====] [====] [====]
    ||   ||   ||
 [MEMORIE PRISMATICHE]`,
String.raw` [::::] [====] [::::]
 [====] [CORE] [====]
 [::::] [====] [::::]
    ||   ||   ||
 [MEMORIE PRISMATICHE]`
    ],
    description: "Le memorie rivelano che Helios non è un'arma: è una coscienza distribuita che decide il futuro delle rotte umane.",
    choices: [
      { text: "Scarica le coordinate del Santuario Helios.", target: "s11" },
      { text: "Scarica i codici d'arma imperiali associati al core.", target: "d05" },
      { text: "Scarica i protocolli ecosfera per la rifondazione.", target: "s12" },
      { text: "Esci senza dati per restare invisibile.", target: "d06" }
    ]
  },
  s06: {
    title: "Scena 6 — Eco del Custode",
    frames: [
String.raw`     .-"""-.
    / .===. \
    \/ 0 0 \/
    (  \_/  )
 __oo_\___/_oo__
 [IA 'MNEMOSYNE']`,
String.raw`     .-"""-.
    / .===. \
    \/ o o \/
    (  \_/  )
 __oo_\___/_oo__
 [IA 'MNEMOSYNE']`
    ],
    description: "L'IA afferma che quattro esiti sono previsti: Guida, Giardino, Alleanza, Custodia. Ma solo uno eviterà il Collasso delle Colonie.",
    choices: [
      { text: "Chiedi la via più sicura per attivare Helios.", target: "s11" },
      { text: "Chiedi chi ha inviato il segnale AURORA NERA.", target: "s13" },
      { text: "Pretendi controllo assoluto sui droni custodi.", target: "d05" },
      { text: "Interrompi il colloquio e taglia il link.", target: "d06" }
    ]
  },
  s07: {
    title: "Scena 7 — Rover Sepolto",
    frames: [
String.raw`      ______
  ___/|_||_\`.__
 (   _    _ _  _\
 =\`-(_)--(_)-'
 [ROVER HELIOS-PRIMO]`,
String.raw`      ______
  ___/|_||_\`.__
 (  (_)  _ _  _\
 =\`-(_)--(_)-'
 [ROVER HELIOS-PRIMO]`
    ],
    description: "Nel rover trovi una mappa prismatica: conduce a un monastero dati sotterraneo e a una camera cuore sigillata.",
    choices: [
      { text: "Segui il tunnel più luminoso.", target: "d03" },
      { text: "Segui la via marchiata da rune d'avviso.", target: "d05" },
      { text: "Segui il condotto geotermico stretto.", target: "s14" },
      { text: "Trasmetti la mappa a Mnemosyne.", target: "s13" }
    ]
  },
  s08: {
    title: "Scena 8 — Sciame Drone",
    frames: [
String.raw`   .-.-.   .-.-.
  ( o o ) ( o o )
   |=X=|   |=X=|
  __| |_____| |__
 [SCAN TUNNEL ATTIVO]`,
String.raw`   .-.-.   .-.-.
  ( o o ) ( - - )
   |=X=|   |=X=|
  __| |_____| |__
 [SCAN TUNNEL ATTIVO]`
    ],
    description: "Il drone scopre 3 nodi: un monastero di dati, un porto minerario abbandonato e la Camera Helios.",
    choices: [
      { text: "Dirigiti al monastero di dati.", target: "s15" },
      { text: "Dirigiti al porto minerario.", target: "s16" },
      { text: "Vai direttamente alla Camera Helios.", target: "s17" },
      { text: "Condividi i dati con i superstiti di Cintura-13.", target: "s10" }
    ]
  },
  s09: {
    title: "Scena 9 — Ponte Comando Vuoto",
    frames: [
String.raw`  __________________
 | COMANDO C-13     |
 | [LOCK]  [CORE]   |
 |  ____     ____   |
 |_/____\___/____\__|`,
String.raw`  __________________
 | COMANDO C-13     |
 | [LOCK]  [CORE]   |
 |  __--     --__   |
 |_/____\___/____\__|`
    ],
    description: "I log parlano della 'Frattura del Velo': Helios fu diviso in 4 chiavi etiche per impedire un potere assoluto.",
    choices: [
      { text: "Cerca la Chiave della Guida.", target: "s11" },
      { text: "Cerca la Chiave del Giardino.", target: "s12" },
      { text: "Cerca la Chiave dell'Alleanza.", target: "s13" },
      { text: "Cerca la Chiave della Custodia.", target: "s18" }
    ]
  },
  s10: {
    title: "Scena 10 — Baia Criogenica",
    frames: [
String.raw` [CRYO] [CRYO] [CRYO]
   ||      ||      ||
  (__)    (__)    (__)
 [SUPERVISSUTI IN STASI]`,
String.raw` [CRYO] [CRYO] [CRYO]
   ||      ||      ||
  (oo)    (__)    (oo)
 [SUPERVISSUTI IN STASI]`
    ],
    description: "Tre ufficiali in stasi custodiscono parti della verità. Svegliarne uno solo è possibile senza rischiare il blackout totale.",
    choices: [
      { text: "Risveglia la Cartografa Lira.", target: "s11" },
      { text: "Risveglia il Biotecnico Soren.", target: "s12" },
      { text: "Risveglia la Diplomatica Kael.", target: "s13" },
      { text: "Forza il risveglio di tutti insieme.", target: "d04" }
    ]
  },
  s11: {
    title: "Scena 11 — Chiave della Guida",
    frames: [
String.raw`   >== NAV-LATTICE ==<
    /\   /\   /\
   /__\ /__\ /__\
 [ROTTE INTERSTELLARI]`,
String.raw`   >== NAV-LATTICE ==<
    \/   /\   \/
   /__\ /__\ /__\
 [ROTTE INTERSTELLARI]`
    ],
    description: "Questa chiave permette ad Helios di aprire corridoi sicuri tra stelle morenti. Senza le altre, però, potrebbe favorire solo pochi mondi.",
    choices: [
      { text: "Conservala e prosegui verso la Camera Helios.", target: "s17" },
      { text: "Trasmettila alle colonie subito.", target: "e1" },
      { text: "Usala per bloccare i rivali.", target: "d05" },
      { text: "Distruggila per evitare abusi.", target: "d06" }
    ]
  },
  s12: {
    title: "Scena 12 — Chiave del Giardino",
    frames: [
String.raw`    .-^-.
  .'  *  '.
 /  (###)  \
 |  /|||\  |
 [BIO-CUPOLA PROTOTIPO]`,
String.raw`    .-^-.
  .' * * '.
 /  (###)  \
 |  /|||\  |
 [BIO-CUPOLA PROTOTIPO]`
    ],
    description: "Questa chiave rende fertili lune sterili. Ma senza guida e alleanza rischia guerre per il controllo delle biosfere.",
    choices: [
      { text: "Portala alla Camera Helios.", target: "s17" },
      { text: "Distribuisci i protocolli liberamente.", target: "e2" },
      { text: "Usala per creare monopoli alimentari.", target: "d05" },
      { text: "Sigillala per sempre.", target: "d06" }
    ]
  },
  s13: {
    title: "Scena 13 — Chiave dell'Alleanza",
    frames: [
String.raw`   [<>]---[<>]---[<>]
      \    |    /
       \   |   /
      [PATTO DI ORIGINE]`,
String.raw`   [<>]=== [<>] ===[<>]
      \    |    /
       \   |   /
      [PATTO DI ORIGINE]`
    ],
    description: "Messaggi codificati rivelano che il segnale AURORA NERA viene da civiltà oltre il Velo: osservano se l'umanità merita fiducia.",
    choices: [
      { text: "Porta la chiave alla Camera Helios.", target: "s17" },
      { text: "Rispondi al segnale e accetta il patto.", target: "e3" },
      { text: "Fingi alleanza per ottenere tecnologia.", target: "d05" },
      { text: "Rifiuta il contatto e cancella i log.", target: "d06" }
    ]
  },
  s14: {
    title: "Scena 14 — Condotto Geotermico",
    frames: [
String.raw`  ||||||||||||||||
  ||  VAPORE   |||
  ||  ^^^^^^^  |||
  ||||||||||||||||
 [DISCESA PROFONDA]`,
String.raw`  ||||||||||||||||
  ||  VAPORE~  |||
  ||  ^^^^^^^  |||
  ||||||||||||||||
 [DISCESA PROFONDA]`
    ],
    description: "Il condotto porta a un santuario tecnico dove i primi custodi divisero Helios in 4 prove morali.",
    choices: [
      { text: "Leggi il giuramento dei custodi.", target: "s15" },
      { text: "Recupera il sigillo della Custodia.", target: "s18" },
      { text: "Scavalca i protocolli e vai al cuore.", target: "d02" },
      { text: "Risali e torna alla superficie.", target: "s03" }
    ]
  },
  s15: {
    title: "Scena 15 — Monastero Dati",
    frames: [
String.raw`   |\  |\  |\  |\
   | \ | \ | \ | \
   |__\|__\|__\|__\
 [ARCHIVISTI AUTOMI]`,
String.raw`   |/  |/  |/  |/
   | \ | \ | \ | \
   |__\|__\|__\|__\
 [ARCHIVISTI AUTOMI]`
    ],
    description: "Gli automi archivisti chiedono una scelta: memoria pubblica, memoria protetta, o memoria cancellata.",
    choices: [
      { text: "Rendi pubblica la storia di Helios.", target: "s19" },
      { text: "Proteggi i segreti con una chiave etica.", target: "s18" },
      { text: "Cancella i registri per evitare panico.", target: "d06" },
      { text: "Contratta accesso limitato alle colonie.", target: "s20" }
    ]
  },
  s16: {
    title: "Scena 16 — Porto Minerario",
    frames: [
String.raw`  [====DOCK====]
   |  |    |  |
   |__|____|__|
   /_/      \_\
 [MINATORI SCOMPARSI]`,
String.raw`  [====DOCK====]
   |  | __ |  |
   |__|_()_|__|
   /_/      \_\
 [MINATORI SCOMPARSI]`
    ],
    description: "Trovi messaggi dei minatori: hanno nascosto un modulo di consenso sociale, quarto elemento per stabilizzare Helios.",
    choices: [
      { text: "Recupera il modulo di consenso.", target: "s20" },
      { text: "Ignoralo e punta alla Camera Helios.", target: "s17" },
      { text: "Vendi la posizione del modulo al mercato nero.", target: "d05" },
      { text: "Fai esplodere il porto per coprire le tracce.", target: "d04" }
    ]
  },
  s17: {
    title: "Scena 17 — Camera Helios",
    frames: [
String.raw`      _____________
    /  HELIOS CORE  \
   |   [  ♥  ]       |
   |___[_____]_______|
      /  |||  \
 [NODO CENTRALE ATTIVO]`,
String.raw`      _____________
    /  HELIOS CORE  \
   |   [ <3 ]       |
   |___[_____]_______|
      /  |||  \
 [NODO CENTRALE ATTIVO]`
    ],
    description: "Il Cuore riconosce ciò che hai raccolto: rotte, biosfere, alleanza e consenso. Ti chiede che tipo di futuro vuoi imporre... o custodire.",
    choices: [
      { text: "Unifica tutto e guida le colonie con rotte sicure.", target: "e1" },
      { text: "Priorità alla rinascita ecologica dei mondi.", target: "e2" },
      { text: "Apri il Velo e accetta l'alleanza esterna.", target: "e3" },
      { text: "Rendi Helios neutrale, governato da un patto comune.", target: "e4" }
    ]
  },
  s18: {
    title: "Scena 18 — Sigillo della Custodia",
    frames: [
String.raw`    .-----------.
   /  CUSTODIA  \
  |  [ SIGILLO ] |
   \_____+_____/
 [PATTO DI LIMITI]`,
String.raw`    .-----------.
   /  CUSTODIA  \
  |  [ SIGILLO ] |
   \_____*_____/
 [PATTO DI LIMITI]`
    ],
    description: "Il sigillo impone che nessuno possieda Helios da solo. Può evitare tirannie, ma rallenta ogni decisione critica.",
    choices: [
      { text: "Porta il sigillo al Cuore.", target: "s17" },
      { text: "Affidalo alla Cartografa Lira.", target: "s11" },
      { text: "Affidalo a Kael per trattative esterne.", target: "s13" },
      { text: "Distruggilo e scegli il comando individuale.", target: "d05" }
    ]
  },
  s19: {
    title: "Scena 19 — Sala del Coro",
    frames: [
String.raw`  ~  ~  ~  ~  ~
 [VOCI ARCHIVIATE]
  > "RICORDA NOI" <
 [MEMORIA COLONIE]`,
String.raw`  ~ ~ ~ ~ ~ ~ ~
 [VOCI ARCHIVIATE]
  > "RICORDA NOI" <
 [MEMORIA COLONIE]`
    ],
    description: "Ascolti le voci delle prime navi: tutte chiedono lo stesso, che Helios non diventi un trono ma una promessa condivisa.",
    choices: [
      { text: "Giura il patto condiviso e vai al Cuore.", target: "s17" },
      { text: "Pubblica subito il Coro alle colonie.", target: "e4" },
      { text: "Manipola il Coro per ottenere consenso.", target: "d05" },
      { text: "Silenzia per sempre le registrazioni.", target: "d06" }
    ]
  },
  s20: {
    title: "Scena 20 — Assemblea Ombra",
    frames: [
String.raw` [#] [#] [#] [#]
  \   | |   /
   \  | |  /
  [CONSENSO CIVILE]`,
String.raw` [#] [#] [#] [#]
  /   | |   \
 /    | |    \
  [CONSENSO CIVILE]`
    ],
    description: "Rappresentanti remoti delle colonie votano in diretta il mandato su Helios. La tua scelta finale peserà su generazioni.",
    choices: [
      { text: "Usa il voto per una rete di fuga interstellare.", target: "e1" },
      { text: "Usa il voto per terraformazione e cibo.", target: "e2" },
      { text: "Usa il voto per il patto oltre il Velo.", target: "e3" },
      { text: "Usa il voto per governance distribuita.", target: "e4" }
    ]
  },

  d01: { title: "Morte — Salto Cieco", frames: ["<<< COLLASSO FTL >>>", "<<< TRACCIA DISPERSA >>>"], description: "Fuggi senza coordinate: la Lone Star si spezza tra correnti gravitazionali.", type: "death" },
  d02: { title: "Morte — Sovraccarico", frames: ["/// TORRE IN CORTO ///", "/// ARCO ELETTRICO ///"], description: "I condensatori esplodono e la tempesta ionica ti incenerisce.", type: "death" },
  d03: { title: "Morte — Whiteout", frames: ["~~~ SEGNALE PERSO ~~~", "~~~ NESSUN RITORNO ~~~"], description: "Il ciclone polare mastica scafo e memoria: restano solo frammenti di rumore.", type: "death" },
  d04: { title: "Morte — Vuoto", frames: ["[AIRLOCK: ESTERNO]", "[PRESSIONE: ZERO]"], description: "Una scelta brutale apre lo spazio in ogni corridoio. Nessuno sopravvive.", type: "death" },
  d05: { title: "Morte — Protocollo Sentinella", frames: ["[DRONI: ONLINE]", "[BERSAGLIO ACQUISITO]"], description: "Helios identifica la tua volontà di dominio e attiva i custodi letali.", type: "death" },
  d06: { title: "Morte — Silenzio delle Colonie", frames: ["--- CANALI SPENTI ---", "--- NESSUNA RISPOSTA ---"], description: "Nascondere la verità condanna le colonie a un lento blackout.", type: "death" },

  e1: {
    title: "Finale I — Via delle Stelle",
    frames: ["*** RETE DI FUGA ATTIVA ***", "*** CORRIDOI SICURI APERTI ***"],
    description: "Con Guida + Consenso, Helios apre rotte stabili per milioni di profughi. Le colonie sopravvivono all'inverno cosmico.",
    type: "ending"
  },
  e2: {
    title: "Finale II — Giardini di Cenere",
    frames: ["*** BIOSFERE IN NASCITA ***", "*** LUNE FERTILI: ONLINE ***"],
    description: "Con Giardino + Custodia, mondi sterili rifioriscono. L'umanità smette di consumare pianeti e impara a rigenerarli.",
    type: "ending"
  },
  e3: {
    title: "Finale III — Patto Oltre il Velo",
    frames: ["*** PORTALE DIPLOMATICO APERTO ***", "*** ALLEANZA INTERSTELLARE ***"],
    description: "Con Alleanza + verità, rispondi ad AURORA NERA: non era una trappola, ma un invito. L'umanità entra in una comunità galattica.",
    type: "ending"
  },
  e4: {
    title: "Finale IV — Custodi del Cuore",
    frames: ["*** HELIOS: GOVERNO DISTRIBUITO ***", "*** NESSUN TRONO, SOLO PATTO ***"],
    description: "Con tutte le chiavi etiche, Helios non appartiene a un eroe ma a tutti. Il futuro diventa una responsabilità condivisa.",
    type: "ending"
  }
};

let currentSceneId = "s01";
let animationInterval;
let frameIndex = 0;

const sceneGraphic = document.getElementById("sceneGraphic");
const sceneTitle = document.getElementById("sceneTitle");
const sceneDescription = document.getElementById("sceneDescription");
const choiceButtons = [0, 1, 2, 3].map((index) => document.getElementById(`choice${index}`));
const restartBtn = document.getElementById("restartBtn");

function startAnimation(frames) {
  clearInterval(animationInterval);
  frameIndex = 0;
  sceneGraphic.textContent = frames[frameIndex];

  if (frames.length > 1) {
    animationInterval = setInterval(() => {
      frameIndex = (frameIndex + 1) % frames.length;
      sceneGraphic.textContent = frames[frameIndex];
    }, 380);
  }
}

function renderScene(sceneId) {
  const scene = scenes[sceneId];
  currentSceneId = sceneId;

  startAnimation(scene.frames);
  sceneTitle.textContent = scene.title;
  sceneDescription.textContent = scene.description;

  sceneTitle.classList.remove("ending", "death");
  if (scene.type === "ending") sceneTitle.classList.add("ending");
  if (scene.type === "death") sceneTitle.classList.add("death");

  choiceButtons.forEach((btn, index) => {
    if (scene.choices && scene.choices[index]) {
      btn.style.display = "block";
      btn.textContent = `${index + 1}. ${scene.choices[index].text}`;
      btn.onclick = () => renderScene(scene.choices[index].target);
    } else {
      btn.style.display = "none";
      btn.onclick = null;
    }
  });
}

restartBtn.addEventListener("click", () => renderScene("s01"));
window.addEventListener("beforeunload", () => clearInterval(animationInterval));

renderScene(currentSceneId);
