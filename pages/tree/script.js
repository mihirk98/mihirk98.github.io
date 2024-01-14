const pgns = {
  parent: {
    "e4 c6": {
      title: "Caro-Kann Defense",
      depth: 1,
      parent: true,
      children: {
        "Nc3 d5": {
          depth: 2,
          parent: true,
          children: {
            "d4 dxe4": {
              depth: 3,
              parent: true,
              children: {
                "Nxe4 Nf6": {
                  depth: 4,
                  parent: true,
                  children: {
                    "Qd3 g6": {
                      depth: 5,
                      parent: true,
                      children: {},
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "e4 e5": {
      title: "King's Pawn",
      depth: 1,
      parent: true,
      children: {
        "Nf3 Nc6": {
          title: "King's Knight Variation",
          depth: 2,
          parent: true,
          children: {
            "Bc4 Bc5": {
              title: "Giuoco Piano Game",
              depth: 3,
              parent: true,
              children: {
                "c3 Nf6": {
                  depth: 4,
                  parent: true,
                  children: {
                    "d4 exd4": {
                      depth: 5,
                      parent: true,
                      children: {
                        "B4+ Bd2": {
                          depth: 6,
                          parent: true,
                          children: {
                            "Bxd2+ Nbxd2": {
                              depth: 7,
                              parent: true,
                              children: {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "Nc3 Nf6": {
                  title: "Four Knights Game",
                  depth: 4,
                  parent: true,
                  children: {
                    "d3 h6": {
                      title:
                        "Giuoco Pianissimo, Italian Four Knights Variation",
                      depth: 4,
                      parent: true,
                      children: {},
                    },
                  },
                },
                "d3 h6": {
                  title: "Giuoco Pianissimo Variation",
                  depth: 4,
                  parent: true,
                  children: {
                    "Nc3 Nf6": {
                      depth: 5,
                      parent: true,
                      children: {
                        "Na4 B4+": {
                          depth: 6,
                          parent: true,
                          children: {},
                        }
                      },
                    }
                  },
                }
              },
            },
            "Bb5 Nf6": {
              title: "Ruy López: Berlin Defense",
              depth: 3,
              parent: true,
              children: {
                "d3 d6": {
                  depth: 4,
                  parent: true,
                  children: {
                    "c3 a6": {
                      depth: 5,
                      parent: true,
                      children: {},
                    },
                  },
                },
              },
            },
            "Bb5 a6": {
              title: "Ruy López: Morphy Defense",
              depth: 3,
              parent: true,
              children: {
                "Ba4 Kf6": {
                  title: "Columbus Variation",
                  depth: 4,
                  parent: true,
                },
                "Ba4 Bc5": {
                  title: "Deferred Classical Defense",
                  depth: 4,
                  parent: true,
                  children: {
                    "O-O b5": {
                      depth: 5,
                      parent: true,
                      children: {
                        "Bb3 d6": {
                          depth: 6,
                          parent: true,
                          children: {
                            "Bd5 Kge7": {
                              depth: 7,
                              parent: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            "d4 exd4": {
              title: "Scotch Game",
              depth: 3,
              parent: true,
              children: {
                "Nxd4 Nf6": {
                  depth: 4,
                  parent: true,
                  children: {
                    "Nxc6 bxc6": {
                      depth: 5,
                      parent: true,
                      children: {},
                    },
                  },
                },
              },
            },
            "Bc4 f5": {
              title: "Italian Game: Rousseau Gambit",
              depth: 3,
              parent: true,
              children: {
                "d3 d6": {
                  depth: 4,
                  parent: true,
                  children: {},
                },
              },
            },
            "Bc4 h6": {
              title: "Italian Game: Anti-Fried Liver Defense",
              depth: 3,
              parent: true,
              children: {
                "O-O d6": {
                  depth: 4,
                  parent: true,
                  children: {},
                },
              },
            },
          },
        },
        "Nf3 f6": {
          title: "Damiano Defense",
          depth: 2,
          parent: true,
          children: {
            "Nxe5 Qe7": {
              depth: 3,
              parent: true,
            },
          },
        },
        "Bc4 Nf6": {
          title: "Bishop's Opening",
          depth: 2,
          parent: true,
          children: {
            "Nc3 Nf6": {
              depth: 3,
              parent: true,
              children: {
                "Nf3 Bc5": {
                  depth: 4,
                  parent: true,
                  children: {},
                },
              },
            },
          },
        },
        "Nf3 d6": {
          title: "Philidor Defense",
          depth: 2,
          parent: true,
          children: {
            "d4 exd4": {
              depth: 3,
              parent: true,
              children: {},
            },
          },
        },
      },
    },
    "d4 d5": {
      title: "Queen's Pawn",
      depth: 1,
      parent: true,
      children: {
        "c4 e6": {
          title: "Queen's Gambit Declined",
          depth: 2,
          parent: true,
        },
        "e3 e6": {
          depth: 2,
          parent: true,
        },
        "Bf4 Nc6": {
          title: "London System",
          depth: 2,
          parent: true,
          children: {
            "e3 Nf6": {
              depth: 3,
              parent: true,
              children: {
                "c4 Bf5": {
                  depth: 4,
                  parent: true,
                  children: {},
                },
              },
            },
          },
        },
        "Bd5 c5": {
          title: "Levitsky Attack",
          depth: 2,
          parent: true,
          children: {
            "dxc5 h6": {
              depth: 3,
              parent: true,
              children: {},
            }
          },
        }
      },
    },
  },
  games: [
    "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Bc5 5. O-O b5 6. Bb3 d6 7. Bd5 Bd7 8. d3 h6 9. c4 Nf6 10. cxb5 axb5 11. Bxc6 Bxc6 12. d4 exd4 13. Nxd4 Bd7 14. Nc3 b4 15. Ncb5 Nxe4 16. Re1 f5 17. Qh5+ Kf8 18. Nxf5 Bxf2+ ",
    "1. e4 e5 2. Nf3 f6 3. d4 d6 4. Nc3 Be6 5. Bd2 Nc6 6. Bb5 Ne7 7. d5 Bg4 8. dxc6 bxc6 9. Be2 Ng6 10. h3 Bh5 11. O-O Nf4 12. Bxf4 exf4 13. Nh2 Rb8 14. Bxh5+ g6 15. Be2 Rxb2 16. Rb1 Rxb1 17. Qxb1 f5 18. exf5 gxf5 19. Re1 Rg8 20. Bh5+ Kd7 21. Qb3 Qg5 22. Bf3 a6 23. Qe6+ Kd8 24. Bxc6 f3 25. Qd7# ",
    "1. d4 d5 2. e3 Nc6 3. Bb5 Bd7 4. Bxc6 Bxc6 5. Nf3 f6 6. O-O Qd7 7. b3 e6 8. a4 Bd6 9. g3 b6 10. Nc3 Ne7 11. Ne2 O-O 12. Nf4 Bb7 13. Bd2 a5 14. Re1 Rfe8 15. Ng2 Rad8 16. Ngh4 e5 17. dxe5 fxe5 18. Bc3 Nf5 19. Qd3 e4 20. Qe2 exf3 21. Qxf3 Nxh4 22. gxh4 c5 23. Qh5 Qf7 24. Qg5 Be7 25. Qg3 Rd6 26. Kf1 Rg6 27. Qc7 Bd8 28. Qxf7+ Kxf7 29. Rad1 Bxh4 30. Ke2 Bf6 31. Bxf6 Rxf6 32. Kd2 Rxf2+ 33. Kc1 Rxh2 34. Rd3 g5 35. Rf1+ Kg6 36. Rd2 Rxd2 37. Kxd2 h5 38. Kd3 g4 39. c4 dxc4+ 40. Kxc4 Rxe3 41. Rd1 Re6 ",
    "1. d4 d5 2. Bf4 Nc6 3. e3 Nf6 4. c3 e6 5. Nd2 h6 6. h3 Nh5 7. Bh2 g6 8. Bd3 Bg7 9. Qf3 O-O 10. Ne2 e5 11. dxe5 Bxe5 12. O-O Bxh2+ 13. Kxh2 Ne5 14. Qxh5 gxh5 15. Bc2 Kh8 16. Rad1 c6 17. Nb3 Qh4 18. Kg1 Rg8 19. Ng3 Be6 20. Rd4 Qg5 21. h4 Qf6 22. Nxh5 Nf3+ 23. Kh1 Qe5 24. gxf3 Qxh5 25. Rf4 f5 26. Nd4 Rae8 27. Rg1 Rxg1+ 28. Kxg1 c5 29. Nxf5 Bxf5 30. Bxf5 Rf8 31. Bg4 Qe8 32. Rf5 Rxf5 33. Bxf5 Qg8+ 34. Kf1 Qg7 35. h5 Qg5 36. Bg4 b5 37. Ke2 a5 38. a3 a4 39. Kd3 Qe5 40. Kd2 d4 41. exd4 cxd4 42. cxd4 Qxd4+ 43. Ke2 Qxb2+ 44. Ke3 Qxa3+ 45. Kd4 Qb2+ 46. Kc5 b4 47. Bd7 a3 48. Ba4 Qxf2+ 49. Kxb4 a2 50. Bc6 a1=Q 51. Be4 Qab2+ 52. Kc4 Qfd4# ",
    "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nxd4 5. Qxd4 Qe7 6. Bd3 Qb4+ 7. Nc3 Qxd4 8. O-O Ne7 9. Nb5 Qb6 10. Be3 Qa5 11. Bf4 d6 12. b4 Qb6 13. Be3 Qc6 14. Nd4 Qd7 15. Bb5 c6 16. Ba4 g6 17. b5 Bg7 18. bxc6 Nxc6 19. Rab1 O-O 20. Rfd1 Qc7 21. Nb5 Qe7 22. Nxd6 a6 23. Bg5 Qxg5 ",
    "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 d6 5. Bg5 Bd7 6. O-O Be7 7. Nc3 h6 8. Bxf6 Bxf6 9. Qd2 O-O 10. Rfe1 a6 11. Ba4 b5 12. Bb3 Ne7 13. Rad1 Be6 14. Bxe6 fxe6 15. d4 exd4 16. Nxd4 Qd7 17. Re3 e5 18. Nb3 Bg5 19. h3 Bxe3 20. Qxe3 Qe6 21. Ne2 Ng6 22. Ng3 Nf4 23. Nf5 Qg6 24. Nh4 Qg5 25. g3 Nxh3+ 26. Kh2 Rxf2+ 27. Kxh3 Qxe3 ",
    "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Nc3 d6 5. h3 a6 6. a4 h6 7. d3 Nf6 8. Ne2 Bb4+ 9. c3 Bc5 10. Ng3 Be6 11. Bb3 O-O 12. O-O Qe7 13. Be3 Rae8 14. Bc2 Nh7 15. b4 Bb6 16. a5 Ba7 17. Bxa7 Nxa7 18. d4 Nc6 19. d5 Bxd5 20. exd5 Nd8 21. Bxh7+ Kxh7 22. Re1 f5 23. Qc2 g6 24. Re2 Nf7 25. Rae1 e4 26. Nd4 Qg5 27. Ne6 Rxe6 28. dxe6 Ne5 29. Rd1 h5 30. Qd2 Qf6 31. Qd5 h4 32. Nf1 Qg5 33. Qxb7 f4 34. Rxe4 f3 35. g3 hxg3 36. Nxg3 Qh6 37. Kh2 Ng4+ 38. Rxg4 Kh8 39. Qxc7 g5 40. Qxd6 Re8 41. Qe5+ Kh7 42. Re1 Rxe6 43. Qxe6 Qxe6 44. Rxe6 Kg7 45. Rxa6 Kf7 46. Rxg5 Kf8 47. Rf5+ Kg7 48. Rxf3 Kh7 49. Rf7+ Kg8 50. Rb7 Kf8 51. Ra8# ",
    "1. e4 e5 2. Bc4 Nc6 3. c3 Nf6 4. d3 h6 5. b4 a6 6. a4 d6 7. a5 Be7 8. Qf3 O-O 9. Be3 Be6 10. Nd2 d5 11. exd5 Nxd5 12. Bxd5 Bxd5 13. Qg3 Kh8 14. Ngf3 Bd6 15. c4 e4 16. Qh3 Be6 17. Qh4 exf3 18. Qxd8 Raxd8 19. gxf3 Bxb4 20. Ra4 Bxa5 21. Ke2 Bxd2 22. Kxd2 a5 23. Rg1 b6 24. d4 Nxd4 25. Kc3 Nxf3 26. Rg3 Nxh2 27. Bd4 Rg8 28. Be5 Rd7 29. Ra1 f6 30. Bf4 Ng4 31. Re1 Bf7 32. Rxg4 g5 33. Be3 f5 34. Bd4+ Kh7 35. Rgg1 c5 36. Be3 f4 37. Bd2 Rgd8 38. Rd1 a4 39. Kc2 Bxc4 40. Bc3 Bb3+ 41. Kb2 Rxd1 42. Rxd1 Rxd1 ",
    "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Bd3 Nc6 5. c3 Nf6 6. h3 e6 7. Nf3 Bd6 8. O-O O-O 9. Re1 Bd7 10. Ne5 a6 11. Bf4 b5 12. a3 Na5 13. Nd2 Nh5 14. Qxh5 Rc8 15. Qxh7# ",
    "1. e4 e5 2. Nf3 Nc6 3. Bc4 f5 4. d3 fxe4 5. dxe4 Bc5 6. Ng5 h6 7. Nf7 Qh4 8. O-O Nf6 9. Nxh8 Ng4 10. Qf3 Qxh2# ",
    "1. e4 e5 2. Nf3 d6 3. d4 h6 4. Nc3 exd4 5. Nxd4 Bd7 6. h3 a6 7. a4 Nc6 8. Bc4 Nxd4 9. Qxd4 Qe7 10. Bf4 c5 11. Qd3 Nf6 12. O-O O-O-O 13. Rfe1 Be6 14. Bh2 Bxc4 15. Qxc4 Qd7 16. b4 Qe6 17. Nd5 Nxd5 18. exd5 Qd7 19. bxc5 dxc5 20. Rad1 Bd6 21. Re2 Rhe8 22. Rde1 Rxe2 23. Rxe2 Kb8 24. Rd2 Rc8 25. Qh4 Re8 26. Rd1 Bxh2+ 27. Kxh2 Qd6+ 28. Kg1 g5 29. Qh5 Re7 30. c4 f5 31. Qf3 f4 32. Kf1 Ka7 33. Re1 Rxe1+ 34. Kxe1 Qe5+ 35. Qe2 Qa1+ 36. Qd1 Qc3+ 37. Kf1 Qxc4+ 38. Kg1 Kb8 39. d6 Qd4 40. Qxd4 cxd4 41. Kf1 Kc8 42. Ke2 Kd7 43. Kd3 Kxd6 44. Kxd4 b6 45. Kc4 h5 46. g3 fxg3 47. fxg3 Ke5 48. Kd3 Kd5 49. h4 g4 50. Kc3 Kc5 51. Kb3 b5 52. axb5 axb5 53. Kc3 b4+ 54. Kd3 Kb5 55. Kc2 Ka4 56. Kb2 b3 57. Ka1 Kb4 58. Kb1 Kc3 59. Kc1 Kd3 60. Kb2 Ke3 61. Kxb3 Kf3 ",
    "1. e4 e5 2. Nf3 Nc6 3. Bc4 h6 4. d3 Nf6 5. Nc3 Bd6 6. Nb5 Bc5 7. Be3 Bxe3 8. fxe3 a6 9. Nc3 b5 10. Bb3 Na5 11. h3 Nxb3 12. axb3 d6 13. Nd5 Be6 14. c4 c6 15. Nxf6+ Qxf6 16. O-O Qg6 17. Kh1 Qg3 18. Qc2 b4 19. d4 exd4 20. exd4 O-O 21. d5 cxd5 22. exd5 Bxh3 23. gxh3 Qxh3+ 24. Nh2 Rfe8 25. Rae1 Re3 26. Rxe3 Qxe3 27. Qd1 Re8 28. Nf3 Re4 29. Re1 Qf4 30. Rxe4 Qxe4 31. Qe2 Qxe2 ",
    "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Nc3 a6 5. d3 h6 6. Be3 Nd4 7. Nxe5 ",
    "1. d4 d5 2. Bg5 f6 3. Bh4 Nc6 4. e3 a6 5. Bd3 Be6 6. Ne2 g5 7. Bg3 Nh6 8. O-O Nf5 9. Bxf5 Bxf5 10. b3 Bg7 11. c4 Be6 12. c5 h5 13. h4 Qd7 14. Nbc3 Nd8 15. b4 c6 16. a4 O-O 17. b5 a5 18. b6 Nf7 19. e4 Nh6 20. exd5 Bxd5 21. Nxd5 Qxd5 22. Nc3 Qf7 23. d5 cxd5 24. Nxd5 Rfd8 25. Nxe7+ Qxe7 26. Bd6 Qf7 27. Qf3 g4 28. Qf4 Kh8 29. Rae1 Re8 30. Re3 Rxe3 31. fxe3 Ng8 32. g3 Re8 33. e4 Bh6 34. Qf5 Bg7 35. Re1 Nh6 36. Qf4 Bf8 37. e5 fxe5 38. Qxf7 Nxf7 39. Bxf8 Rxf8 40. Rd1 Rb8 41. Rd7 Kg7 42. Kf2 Kf6 43. Ke3 Ke6 44. Rc7 Nh6 45. Kf2 Nf5 46. Rh7 Kd5 47. Rxh5 Nd4 48. Rg5 Rf8+ 49. Kg1 Ne2+ 50. Kg2 Nc3 51. Rxg4 Rh8 52. Rg7 Nxa4 53. Rxb7 Nxc5 54. Rc7 Re8 55. b7 e4 56. Rc8 ",
    "1. e4 c6 2. Nc3 d5 3. d4 dxe4 4. Nxe4 Nf6 5. Qd3 Qd5 6. f3 Nxe4 7. fxe4 Bf5 8. exf5 Nd7 9. Nf3 Nf6 10. h3 e6 11. fxe6 fxe6 12. Be3 Bd6 13. O-O-O Qxa2 14. Qb3 Qa1+ 15. Kd2 Ne4+ 16. Ke2 Qa6+ 17. Ke1 Qa5+ 18. c3 Kd7 19. Bf2 Rhf8 20. Bd3 Ng3 21. Bxg3 Bxg3+ 22. Ke2 h6 23. Kd2 b5 24. Kc2 Rab8 25. Qb4 Qb6 26. Qc5 Qc7 27. Ne5+ Bxe5 28. dxe5 Rf2+ 29. Kb1 Rxg2 30. Be4+ ",
    "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 h6 5. Nc3 Nf6 6. Na4 Be7 7. Bb5 d6 8. Bxc6+ bxc6 9. Nc3 O-O 10. Be3 Nh7 11. Qd2 f5 12. O-O-O f4 13. Bd4 exd4 14. Nxd4 Bd7 15. g3 fxg3 16. fxg3 c5 17. Nb3 Bg5 "
  ],
};

(function pageFlow() {
  populateJSON();
  createTree();
})();

function populateJSON() {
  let pgn, spaces;

  for (const game of pgns.games) {
    setPgn(game);
    iteratePgnMoves();
  }

  function setPgn(game) {
    pgn = game;
  }

  function iteratePgnMoves() {
    checkSpacesLogic();
    getMoves();

    function checkSpacesLogic() {
      pgnCharAfterFirstDot = pgn.charAt(pgn.indexOf(".") + 1);

      if (pgnCharAfterFirstDot === " ") spaces = 3;
      else spaces = 2;
    }

    function getMoves() {
      let char = "",
        blank = 0,
        depth,
        move,
        anchor = pgns.parent;

      for (const c of pgn) {
        char += c;
        checkIfBlank();

        function checkIfBlank() {
          if (c === " ") {
            ++blank;
            checkIfBlankEqualSpaces();
          }

          function checkIfBlankEqualSpaces() {
            if (blank === spaces) {
              depth = parseInt(char.substring(0, char.indexOf(".")));
              move = char
                .substring(char.indexOf(".") + 1, char.length - 1)
                .trim();
              addOrSkipMoveToParent();

              function addOrSkipMoveToParent() {
                setAnchor();
                resetCharAndBlank();

                function setAnchor() {
                  const moves = Object.keys(anchor);
                  if (moves.includes(move)) anchor = anchor[move].children;
                  else addMove();

                  function addMove() {
                    anchor[move] = {
                      depth: depth,
                      parent: false,
                      children: {},
                    };
                    anchor = anchor[move].children;
                  }
                }

                function resetCharAndBlank() {
                  char = "";
                  blank = 0;
                }
              }
            }
          }
        }
      }
    }
  }
}

function createTree() {
  const flowchart = document.getElementById("flowchart");
  let parent,
    depth = 0,
    divert;

  Object.keys(pgns.parent).forEach((key) => {
    parent = flowchart;
    depth = 0;
    const move = pgns.parent[key];
    createMoveLogic(move, key);

    function createMoveLogic(anchor, text) {
      createMove();

      function createMove() {
        const level = anchor.depth;

        let divEl = document.createElement("div");
        divEl.classList.add("move");

        let textEl;

        if (anchor.hasOwnProperty("title")) {
          let pEl = document.createElement("p");
          pEl.classList.add("opening");
          pEl.innerHTML = anchor.title;

          divEl.append(pEl);
        }

        if (anchor.parent) textEl = document.createElement("h3");
        else textEl = document.createElement("p");

        textEl.innerHTML = level + ". " + text;
        divEl.append(textEl);

        let childrenEl = document.createElement("div");
        childrenEl.classList.add("children");

        divEl.append(childrenEl);

        if (depth < level) parent.append(divEl);
        else divert.append(divEl);

        parent = childrenEl;

        depth = level;

        checkIfChildren(childrenEl);
      }

      function checkIfChildren(element) {
        if (anchor.children) {
          Object.keys(anchor.children).forEach((subKey) => {
            divert = element;
            createMoveLogic(anchor.children[subKey], subKey);
          });
        }
      }
    }
  });
}
