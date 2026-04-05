# Lone Star: Oltre il Velo (Python Edition)

Avventura testuale sci-fi **interamente in Python**, ispirata ai librogame: niente combattimento, solo scelte, conseguenze e finali multipli.

## Caratteristiche
- Implementazione 100% Python (`lone_star.py`).
- Narrativa in italiano.
- 20 scene principali con 4 scelte ciascuna.
- ASCII art animata nel terminale a **20 FPS** (default).
- Gamebox più ampio per migliorare leggibilità.
- Titolo del gioco mostrato **fuori** dal gamebox.
- 4 finali legati al cuore narrativo del **Cuore di Helios**.
- Esiti di morte multipli in base alle decisioni.

## Esecuzione
```bash
python3 lone_star.py
```

## Opzioni utili
```bash
python3 lone_star.py --help
python3 lone_star.py --frame-delay 0.05 --animation-loops 1
python3 lone_star.py --path 1,1,1,2
```

- `--path` permette di simulare un percorso con scelte automatiche (utile per test).
- `--frame-delay 0.05` corrisponde a circa 20 FPS.
