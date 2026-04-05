#!/usr/bin/env python3
"""Lone Star: Oltre il Velo - avventura testuale sci-fi completamente in Python."""

from __future__ import annotations

import argparse
import os
import sys
import time
from dataclasses import dataclass
from typing import Dict, List, Optional


@dataclass(frozen=True)
class Choice:
    text: str
    target: str


@dataclass(frozen=True)
class Scene:
    title: str
    frames: List[str]
    description: str
    choices: List[Choice]
    kind: str = "scene"  # scene, death, ending


SCENES: Dict[str, Scene] = {
    "s01": Scene(
        title="Scena 1 — Orbita su Nadir-Theta",
        frames=[
            r"""           .      *        .
    *            .      *
        _________
   ____/ LONE    \____
  /____ STAR-7 _______\
        \_||_/
   [NADIR-THETA: BUFERA IONICA]""",
            r"""      *      .         *
  .       *      .
        _________
   ____/ LONE    \____
  /____ STAR-7 _______\
        /_||_\
   [NADIR-THETA: BUFERA IONICA]""",
        ],
        description="Il segnale 'AURORA NERA' pulsa dal pianeta: è legato al Cuore di Helios, un nucleo capace di salvare o cancellare le colonie umane.",
        choices=[
            Choice("Scendi alla Torre di Trasmissione Vesper.", "s02"),
            Choice("Segui il segnale di soccorso nella calotta polare.", "s03"),
            Choice("Attracca alla stazione derelitta Cintura-13.", "s04"),
            Choice("Effettua un salto cieco e fuggi.", "d01"),
        ],
    ),
    "s02": Scene(
        "Scena 2 — Torre Vesper",
        [
            r"""        /\
       /  \      _
      / /\ \    | |
     / ____ \ __| |___
    /_/    \_\\__  __/
      [VESPER: STATICA VIVA]""",
            r"""        /\
       /--\      _
      / /\ \    | |
     / ____ \ __| |___
    /_/    \_\\__  __/
      [VESPER: LAMPI IN FASE]""",
        ],
        "La torre custodisce frammenti di memoria del Progetto Helios. Un custode IA attende un codice di eredità.",
        [
            Choice("Entra dal portello tecnico sotterraneo.", "s05"),
            Choice("Scala l'antenna e riallinea manualmente i condensatori.", "d02"),
            Choice("Invoca il custode IA con la tua identità civile.", "s06"),
            Choice("Torna in orbita verso Cintura-13.", "s04"),
        ],
    ),
    "s03": Scene(
        "Scena 3 — Fronte Polare",
        [
            r"""   ~ ~ ~ ~ ~ ~ ~
 ~  \  |  /   ~
    -- * --
 ~  /  |  \   ~
   [WHITEOUT AZZURRO]""",
            r""" ~ ~ ~ ~ ~ ~ ~ ~
   \   |   /
 --  * *  --
   /   |   \
   [WHITEOUT AZZURRO]""",
        ],
        "Sotto la tempesta giace un rover con la sigla HELIOS-PRIMO. Il pilota trasmette ancora, ma da anni.",
        [
            Choice("Atterra e raggiungi il rover a piedi.", "s07"),
            Choice("Manda un drone per mappare i tunnel sotto il ghiaccio.", "s08"),
            Choice("Spingi i motori attraverso il ciclone.", "d03"),
            Choice("Rinuncia e vai alla Torre Vesper.", "s02"),
        ],
    ),
    "s04": Scene(
        "Scena 4 — Cintura-13",
        [
            r"""      _____________
     /  _  _  _   /|
    /__/__/__/___/ |
    |  __  __  |  |
    | |__||__| |  /
    |__________|/
 [CINTURA-13: ORBITA MORTA]""",
            r"""      _____________
     / _ _ _ _ _  /|
    /__/__/__/___/ |
    |  __  __  |  |
    | |  ||  | |  /
    |__________|/
 [CINTURA-13: ORBITA MORTA]""",
        ],
        "Le paratie sono state aperte di recente. Qualcuno cerca il Cuore di Helios prima di te.",
        [
            Choice("Segui le impronte magnetiche verso il ponte comando.", "s09"),
            Choice("Consulta i registri criogenici in ingegneria.", "s10"),
            Choice("Apri l'airlock e ripulisci la stazione.", "d04"),
            Choice("Scendi sul pianeta verso il whiteout.", "s03"),
        ],
    ),
    "s05": Scene(
        "Scena 5 — Archivio Prismico",
        [
            r""" [====] [====] [====]
 [====] [CORE] [====]
 [====] [====] [====]
    ||   ||   ||
 [MEMORIE PRISMATICHE]""",
            r""" [::::] [====] [::::]
 [====] [CORE] [====]
 [::::] [====] [::::]
    ||   ||   ||
 [MEMORIE PRISMATICHE]""",
        ],
        "Le memorie rivelano che Helios non è un'arma: è una coscienza distribuita che decide il futuro delle rotte umane.",
        [
            Choice("Scarica le coordinate del Santuario Helios.", "s11"),
            Choice("Scarica i codici d'arma imperiali associati al core.", "d05"),
            Choice("Scarica i protocolli ecosfera per la rifondazione.", "s12"),
            Choice("Esci senza dati per restare invisibile.", "d06"),
        ],
    ),
    "s06": Scene(
        "Scena 6 — Eco del Custode",
        [
            r'''     .-"""-.
    / .===. \
    \/ 0 0 \/
    (  \_/  )
 __oo_\___/_oo__
 [IA 'MNEMOSYNE']''',
            r'''     .-"""-.
    / .===. \
    \/ o o \/
    (  \_/  )
 __oo_\___/_oo__
 [IA 'MNEMOSYNE']''',
        ],
        "L'IA afferma che quattro esiti sono previsti: Guida, Giardino, Alleanza, Custodia. Ma solo uno eviterà il Collasso delle Colonie.",
        [
            Choice("Chiedi la via più sicura per attivare Helios.", "s11"),
            Choice("Chiedi chi ha inviato il segnale AURORA NERA.", "s13"),
            Choice("Pretendi controllo assoluto sui droni custodi.", "d05"),
            Choice("Interrompi il colloquio e taglia il link.", "d06"),
        ],
    ),
    "s07": Scene(
        "Scena 7 — Rover Sepolto",
        [
            r"""      ______
  ___/|_||_\`.__
 (   _    _ _  _\
 =`-(_)--(_)-'
 [ROVER HELIOS-PRIMO]""",
            r"""      ______
  ___/|_||_\`.__
 (  (_)  _ _  _\
 =`-(_)--(_)-'
 [ROVER HELIOS-PRIMO]""",
        ],
        "Nel rover trovi una mappa prismatica: conduce a un monastero dati sotterraneo e a una camera cuore sigillata.",
        [
            Choice("Segui il tunnel più luminoso.", "d03"),
            Choice("Segui la via marchiata da rune d'avviso.", "d05"),
            Choice("Segui il condotto geotermico stretto.", "s14"),
            Choice("Trasmetti la mappa a Mnemosyne.", "s13"),
        ],
    ),
    "s08": Scene(
        "Scena 8 — Sciame Drone",
        [
            r"""   .-.-.   .-.-.
  ( o o ) ( o o )
   |=X=|   |=X=|
  __| |_____| |__
 [SCAN TUNNEL ATTIVO]""",
            r"""   .-.-.   .-.-.
  ( o o ) ( - - )
   |=X=|   |=X=|
  __| |_____| |__
 [SCAN TUNNEL ATTIVO]""",
        ],
        "Il drone scopre 3 nodi: un monastero di dati, un porto minerario abbandonato e la Camera Helios.",
        [
            Choice("Dirigiti al monastero di dati.", "s15"),
            Choice("Dirigiti al porto minerario.", "s16"),
            Choice("Vai direttamente alla Camera Helios.", "s17"),
            Choice("Condividi i dati con i superstiti di Cintura-13.", "s10"),
        ],
    ),
    "s09": Scene(
        "Scena 9 — Ponte Comando Vuoto",
        [
            r"""  __________________
 | COMANDO C-13     |
 | [LOCK]  [CORE]   |
 |  ____     ____   |
 |_/____\___/____\__|""",
            r"""  __________________
 | COMANDO C-13     |
 | [LOCK]  [CORE]   |
 |  __--     --__   |
 |_/____\___/____\__|""",
        ],
        "I log parlano della 'Frattura del Velo': Helios fu diviso in 4 chiavi etiche per impedire un potere assoluto.",
        [
            Choice("Cerca la Chiave della Guida.", "s11"),
            Choice("Cerca la Chiave del Giardino.", "s12"),
            Choice("Cerca la Chiave dell'Alleanza.", "s13"),
            Choice("Cerca la Chiave della Custodia.", "s18"),
        ],
    ),
    "s10": Scene(
        "Scena 10 — Baia Criogenica",
        [
            r""" [CRYO] [CRYO] [CRYO]
   ||      ||      ||
  (__)    (__)    (__)
 [SUPERVISSUTI IN STASI]""",
            r""" [CRYO] [CRYO] [CRYO]
   ||      ||      ||
  (oo)    (__)    (oo)
 [SUPERVISSUTI IN STASI]""",
        ],
        "Tre ufficiali in stasi custodiscono parti della verità. Svegliarne uno solo è possibile senza rischiare il blackout totale.",
        [
            Choice("Risveglia la Cartografa Lira.", "s11"),
            Choice("Risveglia il Biotecnico Soren.", "s12"),
            Choice("Risveglia la Diplomatica Kael.", "s13"),
            Choice("Forza il risveglio di tutti insieme.", "d04"),
        ],
    ),
    "s11": Scene(
        "Scena 11 — Chiave della Guida",
        [
            r"""   >== NAV-LATTICE ==<
    /\   /\   /\
   /__\ /__\ /__\
 [ROTTE INTERSTELLARI]""",
            r"""   >== NAV-LATTICE ==<
    \/   /\   \/
   /__\ /__\ /__\
 [ROTTE INTERSTELLARI]""",
        ],
        "Questa chiave permette ad Helios di aprire corridoi sicuri tra stelle morenti. Senza le altre, però, potrebbe favorire solo pochi mondi.",
        [
            Choice("Conservala e prosegui verso la Camera Helios.", "s17"),
            Choice("Trasmettila alle colonie subito.", "e1"),
            Choice("Usala per bloccare i rivali.", "d05"),
            Choice("Distruggila per evitare abusi.", "d06"),
        ],
    ),
    "s12": Scene(
        "Scena 12 — Chiave del Giardino",
        [
            r"""    .-^-.
  .'  *  '.
 /  (###)  \
 |  /|||\  |
 [BIO-CUPOLA PROTOTIPO]""",
            r"""    .-^-.
  .' * * '.
 /  (###)  \
 |  /|||\  |
 [BIO-CUPOLA PROTOTIPO]""",
        ],
        "Questa chiave rende fertili lune sterili. Ma senza guida e alleanza rischia guerre per il controllo delle biosfere.",
        [
            Choice("Portala alla Camera Helios.", "s17"),
            Choice("Distribuisci i protocolli liberamente.", "e2"),
            Choice("Usala per creare monopoli alimentari.", "d05"),
            Choice("Sigillala per sempre.", "d06"),
        ],
    ),
    "s13": Scene(
        "Scena 13 — Chiave dell'Alleanza",
        [
            r"""   [<>]---[<>]---[<>]
      \    |    /
       \   |   /
      [PATTO DI ORIGINE]""",
            r"""   [<>]=== [<>] ===[<>]
      \    |    /
       \   |   /
      [PATTO DI ORIGINE]""",
        ],
        "Messaggi codificati rivelano che il segnale AURORA NERA viene da civiltà oltre il Velo: osservano se l'umanità merita fiducia.",
        [
            Choice("Porta la chiave alla Camera Helios.", "s17"),
            Choice("Rispondi al segnale e accetta il patto.", "e3"),
            Choice("Fingi alleanza per ottenere tecnologia.", "d05"),
            Choice("Rifiuta il contatto e cancella i log.", "d06"),
        ],
    ),
    "s14": Scene(
        "Scena 14 — Condotto Geotermico",
        [
            r"""  ||||||||||||||||
  ||  VAPORE   |||
  ||  ^^^^^^^  |||
  ||||||||||||||||
 [DISCESA PROFONDA]""",
            r"""  ||||||||||||||||
  ||  VAPORE~  |||
  ||  ^^^^^^^  |||
  ||||||||||||||||
 [DISCESA PROFONDA]""",
        ],
        "Il condotto porta a un santuario tecnico dove i primi custodi divisero Helios in 4 prove morali.",
        [
            Choice("Leggi il giuramento dei custodi.", "s15"),
            Choice("Recupera il sigillo della Custodia.", "s18"),
            Choice("Scavalca i protocolli e vai al cuore.", "d02"),
            Choice("Risali e torna alla superficie.", "s03"),
        ],
    ),
    "s15": Scene(
        "Scena 15 — Monastero Dati",
        [
            r"""   |\  |\  |\  |\
   | \ | \ | \ | \
   |__\|__\|__\|__\
 [ARCHIVISTI AUTOMI]""",
            r"""   |/  |/  |/  |/
   | \ | \ | \ | \
   |__\|__\|__\|__\
 [ARCHIVISTI AUTOMI]""",
        ],
        "Gli automi archivisti chiedono una scelta: memoria pubblica, memoria protetta, o memoria cancellata.",
        [
            Choice("Rendi pubblica la storia di Helios.", "s19"),
            Choice("Proteggi i segreti con una chiave etica.", "s18"),
            Choice("Cancella i registri per evitare panico.", "d06"),
            Choice("Contratta accesso limitato alle colonie.", "s20"),
        ],
    ),
    "s16": Scene(
        "Scena 16 — Porto Minerario",
        [
            r"""  [====DOCK====]
   |  |    |  |
   |__|____|__|
   /_/      \_\
 [MINATORI SCOMPARSI]""",
            r"""  [====DOCK====]
   |  | __ |  |
   |__|_()_|__|
   /_/      \_\
 [MINATORI SCOMPARSI]""",
        ],
        "Trovi messaggi dei minatori: hanno nascosto un modulo di consenso sociale, quarto elemento per stabilizzare Helios.",
        [
            Choice("Recupera il modulo di consenso.", "s20"),
            Choice("Ignoralo e punta alla Camera Helios.", "s17"),
            Choice("Vendi la posizione del modulo al mercato nero.", "d05"),
            Choice("Fai esplodere il porto per coprire le tracce.", "d04"),
        ],
    ),
    "s17": Scene(
        "Scena 17 — Camera Helios",
        [
            r"""      _____________
    /  HELIOS CORE  \
   |   [  ♥  ]       |
   |___[_____]_______|
      /  |||  \
 [NODO CENTRALE ATTIVO]""",
            r"""      _____________
    /  HELIOS CORE  \
   |   [ <3 ]       |
   |___[_____]_______|
      /  |||  \
 [NODO CENTRALE ATTIVO]""",
        ],
        "Il Cuore riconosce ciò che hai raccolto: rotte, biosfere, alleanza e consenso. Ti chiede che tipo di futuro vuoi imporre... o custodire.",
        [
            Choice("Unifica tutto e guida le colonie con rotte sicure.", "e1"),
            Choice("Priorità alla rinascita ecologica dei mondi.", "e2"),
            Choice("Apri il Velo e accetta l'alleanza esterna.", "e3"),
            Choice("Rendi Helios neutrale, governato da un patto comune.", "e4"),
        ],
    ),
    "s18": Scene(
        "Scena 18 — Sigillo della Custodia",
        [
            r"""    .-----------.
   /  CUSTODIA  \
  |  [ SIGILLO ] |
   \_____+_____/
 [PATTO DI LIMITI]""",
            r"""    .-----------.
   /  CUSTODIA  \
  |  [ SIGILLO ] |
   \_____*_____/
 [PATTO DI LIMITI]""",
        ],
        "Il sigillo impone che nessuno possieda Helios da solo. Può evitare tirannie, ma rallenta ogni decisione critica.",
        [
            Choice("Porta il sigillo al Cuore.", "s17"),
            Choice("Affidalo alla Cartografa Lira.", "s11"),
            Choice("Affidalo a Kael per trattative esterne.", "s13"),
            Choice("Distruggilo e scegli il comando individuale.", "d05"),
        ],
    ),
    "s19": Scene(
        "Scena 19 — Sala del Coro",
        [
            r"""  ~  ~  ~  ~  ~
 [VOCI ARCHIVIATE]
  > "RICORDA NOI" <
 [MEMORIA COLONIE]""",
            r"""  ~ ~ ~ ~ ~ ~ ~
 [VOCI ARCHIVIATE]
  > "RICORDA NOI" <
 [MEMORIA COLONIE]""",
        ],
        "Ascolti le voci delle prime navi: tutte chiedono lo stesso, che Helios non diventi un trono ma una promessa condivisa.",
        [
            Choice("Giura il patto condiviso e vai al Cuore.", "s17"),
            Choice("Pubblica subito il Coro alle colonie.", "e4"),
            Choice("Manipola il Coro per ottenere consenso.", "d05"),
            Choice("Silenzia per sempre le registrazioni.", "d06"),
        ],
    ),
    "s20": Scene(
        "Scena 20 — Assemblea Ombra",
        [
            r""" [#] [#] [#] [#]
  \   | |   /
   \  | |  /
  [CONSENSO CIVILE]""",
            r""" [#] [#] [#] [#]
  /   | |   \
 /    | |    \
  [CONSENSO CIVILE]""",
        ],
        "Rappresentanti remoti delle colonie votano in diretta il mandato su Helios. La tua scelta finale peserà su generazioni.",
        [
            Choice("Usa il voto per una rete di fuga interstellare.", "e1"),
            Choice("Usa il voto per terraformazione e cibo.", "e2"),
            Choice("Usa il voto per il patto oltre il Velo.", "e3"),
            Choice("Usa il voto per governance distribuita.", "e4"),
        ],
    ),
    "d01": Scene("Morte — Salto Cieco", ["<<< COLLASSO FTL >>>", "<<< TRACCIA DISPERSA >>>"], "Fuggi senza coordinate: la Lone Star si spezza tra correnti gravitazionali.", [], "death"),
    "d02": Scene("Morte — Sovraccarico", ["/// TORRE IN CORTO ///", "/// ARCO ELETTRICO ///"], "I condensatori esplodono e la tempesta ionica ti incenerisce.", [], "death"),
    "d03": Scene("Morte — Whiteout", ["~~~ SEGNALE PERSO ~~~", "~~~ NESSUN RITORNO ~~~"], "Il ciclone polare mastica scafo e memoria: restano solo frammenti di rumore.", [], "death"),
    "d04": Scene("Morte — Vuoto", ["[AIRLOCK: ESTERNO]", "[PRESSIONE: ZERO]"], "Una scelta brutale apre lo spazio in ogni corridoio. Nessuno sopravvive.", [], "death"),
    "d05": Scene("Morte — Protocollo Sentinella", ["[DRONI: ONLINE]", "[BERSAGLIO ACQUISITO]"], "Helios identifica la tua volontà di dominio e attiva i custodi letali.", [], "death"),
    "d06": Scene("Morte — Silenzio delle Colonie", ["--- CANALI SPENTI ---", "--- NESSUNA RISPOSTA ---"], "Nascondere la verità condanna le colonie a un lento blackout.", [], "death"),
    "e1": Scene("Finale I — Via delle Stelle", ["*** RETE DI FUGA ATTIVA ***", "*** CORRIDOI SICURI APERTI ***"], "Con Guida + Consenso, Helios apre rotte stabili per milioni di profughi. Le colonie sopravvivono all'inverno cosmico.", [], "ending"),
    "e2": Scene("Finale II — Giardini di Cenere", ["*** BIOSFERE IN NASCITA ***", "*** LUNE FERTILI: ONLINE ***"], "Con Giardino + Custodia, mondi sterili rifioriscono. L'umanità smette di consumare pianeti e impara a rigenerarli.", [], "ending"),
    "e3": Scene("Finale III — Patto Oltre il Velo", ["*** PORTALE DIPLOMATICO APERTO ***", "*** ALLEANZA INTERSTELLARE ***"], "Con Alleanza + verità, rispondi ad AURORA NERA: non era una trappola, ma un invito. L'umanità entra in una comunità galattica.", [], "ending"),
    "e4": Scene("Finale IV — Custodi del Cuore", ["*** HELIOS: GOVERNO DISTRIBUITO ***", "*** NESSUN TRONO, SOLO PATTO ***"], "Con tutte le chiavi etiche, Helios non appartiene a un eroe ma a tutti. Il futuro diventa una responsabilità condivisa.", [], "ending"),
}


GAME_TITLE = "LONE STAR: OLTRE IL VELO"
GAME_SUBTITLE = "Cronache del Cuore di Helios"
GAME_BOX_WIDTH = 110


def clear_screen() -> None:
    os.system("cls" if os.name == "nt" else "clear")


def _boxed_lines(text: str, width: int) -> List[str]:
    import textwrap

    content_width = width - 4
    wrapped: List[str] = []
    for raw_line in text.splitlines() or [""]:
        chunks = textwrap.wrap(raw_line, width=content_width) or [""]
        wrapped.extend(chunks)
    return [f"| {line.ljust(content_width)} |" for line in wrapped]


def render_gamebox(scene: Scene, frame: str) -> None:
    top = f"+{'=' * (GAME_BOX_WIDTH - 2)}+"
    sep = f"+{'-' * (GAME_BOX_WIDTH - 2)}+"

    print(GAME_TITLE.center(GAME_BOX_WIDTH))
    print(GAME_SUBTITLE.center(GAME_BOX_WIDTH))
    print()
    print(top)
    for line in _boxed_lines(scene.title, GAME_BOX_WIDTH):
        print(line)
    print(sep)
    for line in _boxed_lines(frame, GAME_BOX_WIDTH):
        print(line)
    print(sep)
    for line in _boxed_lines(scene.description, GAME_BOX_WIDTH):
        print(line)
    print(top)


def animate_scene(scene: Scene, frame_delay: float, loops: int) -> None:
    if not scene.frames:
        return
    for _ in range(max(1, loops)):
        for frame in scene.frames:
            clear_screen()
            render_gamebox(scene, frame)
            # 20 FPS => 0.05s per frame
            time.sleep(frame_delay)


def choose_path(scene: Scene, scripted: Optional[List[int]], cursor: int) -> tuple[Optional[str], int]:
    if not scene.choices:
        return None, cursor

    print("\nScelte disponibili:")
    for idx, choice in enumerate(scene.choices, start=1):
        print(f"  {idx}. {choice.text}")

    if scripted is not None and cursor < len(scripted):
        pick = scripted[cursor]
        print(f"\n[Auto-scelta] {pick}")
        if 1 <= pick <= len(scene.choices):
            return scene.choices[pick - 1].target, cursor + 1
        raise ValueError(f"Scelta scripted non valida: {pick}")

    while True:
        raw = input("\nScegli (1-4) oppure 'q' per uscire: ").strip().lower()
        if raw == "q":
            return None, cursor
        if raw in {"1", "2", "3", "4"}:
            pick = int(raw)
            if pick <= len(scene.choices):
                return scene.choices[pick - 1].target, cursor
        print("Scelta non valida. Riprova.")


def play(start: str, frame_delay: float, animation_loops: int, scripted: Optional[List[int]]) -> str:
    scene_id = start
    script_cursor = 0

    while True:
        scene = SCENES[scene_id]
        animate_scene(scene, frame_delay=frame_delay, loops=animation_loops)

        if scene.kind in {"death", "ending"}:
            print("\n--- FINE PERCORSO ---")
            return scene_id

        next_scene, script_cursor = choose_path(scene, scripted, script_cursor)
        if next_scene is None:
            return scene_id
        scene_id = next_scene


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Lone Star: Oltre il Velo - avventura testuale in Python")
    parser.add_argument("--start", default="s01", help="ID scena iniziale (default: s01)")
    parser.add_argument("--frame-delay", type=float, default=0.05, help="Ritardo tra frame ASCII (default 0.05 = 20 FPS)")
    parser.add_argument("--animation-loops", type=int, default=2, help="Numero loop animazione per scena")
    parser.add_argument("--path", default="", help="Sequenza scelte auto, es. 1,2,3")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if args.start not in SCENES:
        print(f"Scena iniziale sconosciuta: {args.start}", file=sys.stderr)
        return 2

    scripted_choices = None
    if args.path:
        try:
            scripted_choices = [int(item.strip()) for item in args.path.split(",") if item.strip()]
        except ValueError:
            print("Formato --path non valido. Usa numeri separati da virgola.", file=sys.stderr)
            return 2

    final_scene = play(args.start, args.frame_delay, args.animation_loops, scripted_choices)
    print(f"\nUltima scena: {final_scene}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
