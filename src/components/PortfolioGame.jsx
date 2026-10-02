import { useEffect, useRef, useState } from "react";
import {
  FaBolt,
  FaBrain,
  FaBug,
  FaCoffee,
  FaCode,
  FaHeart,
  FaKeyboard,
  FaLock,
  FaPlay,
  FaRedo,
  FaShieldAlt,
  FaTrophy,
} from "react-icons/fa";

const PLAYER_SIZE = 5.5;
const ITEM_SIZE = 4.5;
const BUG_SIZE = 4.5;
const PLAYER_SPEED = 0.32;

const INITIAL_ITEMS = [
  { id: "code", icon: "💻", x: 18, y: 28, label: "CODE" },
  { id: "coffee", icon: "☕", x: 46, y: 20, label: "COFFEE" },
  { id: "brain", icon: "🧠", x: 76, y: 34, label: "AI" },
  { id: "bolt", icon: "⚡", x: 61, y: 72, label: "SKILLS" },
];

const INITIAL_BUGS = [
  { id: 1, x: 35, y: 46, dx: 0.12, dy: 0.08 },
  { id: 2, x: 72, y: 67, dx: -0.1, dy: 0.09 },
  { id: 3, x: 26, y: 76, dx: 0.09, dy: -0.08 },
];

function checkCollision(a, aSize, b, bSize) {
  return (
    a.x < b.x + bSize &&
    a.x + aSize > b.x &&
    a.y < b.y + bSize &&
    a.y + aSize > b.y
  );
}

function ControlButton({ direction, children, onPress, onRelease }) {
  return (
    <button
      type="button"
      aria-label={`Move ${direction}`}
      className="flex h-14 w-14 touch-none select-none items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/90 text-xl text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition active:scale-90 active:bg-cyan-400/20 sm:h-16 sm:w-16"
      onPointerDown={(event) => {
        event.preventDefault();
        onPress(direction);
      }}
      onPointerUp={(event) => {
        event.preventDefault();
        onRelease(direction);
      }}
      onPointerCancel={() => onRelease(direction)}
      onPointerLeave={() => onRelease(direction)}
    >
      {children}
    </button>
  );
}

export default function PortfolioGame({ onComplete }) {
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [player, setPlayer] = useState({
    x: 5,
    y: 45,
  });

  const [items, setItems] = useState(INITIAL_ITEMS);
  const [bugs, setBugs] = useState(INITIAL_BUGS);

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [collectEffect, setCollectEffect] = useState(null);

  const playerRef = useRef(player);
  const itemsRef = useRef(INITIAL_ITEMS);
  const bugsRef = useRef(INITIAL_BUGS);

  const scoreRef = useRef(0);
  const livesRef = useRef(3);

  const keysRef = useRef({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const hitCooldownRef = useRef(0);

  const updateDirection = (key, pressed) => {
    const normalized = key.toLowerCase();

    if (normalized === "arrowup" || normalized === "w") {
      keysRef.current.up = pressed;
    }

    if (normalized === "arrowdown" || normalized === "s") {
      keysRef.current.down = pressed;
    }

    if (normalized === "arrowleft" || normalized === "a") {
      keysRef.current.left = pressed;
    }

    if (normalized === "arrowright" || normalized === "d") {
      keysRef.current.right = pressed;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      updateDirection(event.key, true);
    };

    const handleKeyUp = (event) => {
      updateDirection(event.key, false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const resetGame = () => {
    const freshPlayer = {
      x: 5,
      y: 45,
    };

    const freshItems = INITIAL_ITEMS.map((item) => ({ ...item }));
    const freshBugs = INITIAL_BUGS.map((bug) => ({ ...bug }));

    playerRef.current = freshPlayer;
    itemsRef.current = freshItems;
    bugsRef.current = freshBugs;

    scoreRef.current = 0;
    livesRef.current = 3;

    keysRef.current = {
      up: false,
      down: false,
      left: false,
      right: false,
    };

    setPlayer(freshPlayer);
    setItems(freshItems);
    setBugs(freshBugs);

    setScore(0);
    setLives(3);
    setGameOver(false);
    setCompleted(false);
    setCollectEffect(null);

    lastTimeRef.current = 0;
    hitCooldownRef.current = 0;
  };

  const startGame = () => {
    resetGame();
    setStarted(true);
  };

  useEffect(() => {
    if (!started || gameOver || completed) return;

    const gameLoop = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta = Math.min(time - lastTimeRef.current, 40);
      lastTimeRef.current = time;

      const movementMultiplier = delta / 16.67;

      const currentPlayer = {
        ...playerRef.current,
      };

      const directions = keysRef.current;

      if (directions.up) {
        currentPlayer.y -= PLAYER_SPEED * movementMultiplier;
      }

      if (directions.down) {
        currentPlayer.y += PLAYER_SPEED * movementMultiplier;
      }

      if (directions.left) {
        currentPlayer.x -= PLAYER_SPEED * movementMultiplier;
      }

      if (directions.right) {
        currentPlayer.x += PLAYER_SPEED * movementMultiplier;
      }

      currentPlayer.x = Math.max(
        1,
        Math.min(94, currentPlayer.x)
      );

      currentPlayer.y = Math.max(
        3,
        Math.min(92, currentPlayer.y)
      );

      playerRef.current = currentPlayer;
      setPlayer(currentPlayer);

      // --------------------------------------------------
      // COLLECTIBLE COLLISION
      // --------------------------------------------------

      const remainingItems = [];
      let collectedItem = null;

      for (const item of itemsRef.current) {
        if (
          checkCollision(
            currentPlayer,
            PLAYER_SIZE,
            item,
            ITEM_SIZE
          )
        ) {
          collectedItem = item;
          continue;
        }

        remainingItems.push(item);
      }

      if (collectedItem) {
        itemsRef.current = remainingItems;
        setItems(remainingItems);

        scoreRef.current += 1;
        setScore(scoreRef.current);

        setCollectEffect({
          id: Date.now(),
          label: collectedItem.label,
        });

        setTimeout(() => {
          setCollectEffect(null);
        }, 650);

        if (scoreRef.current >= INITIAL_ITEMS.length) {
          setCompleted(true);

          setTimeout(() => {
            onComplete();
          }, 1800);

          return;
        }
      }

      // --------------------------------------------------
      // BUG MOVEMENT
      // --------------------------------------------------

      const updatedBugs = bugsRef.current.map((bug) => {
        let nextX =
          bug.x + bug.dx * movementMultiplier;

        let nextY =
          bug.y + bug.dy * movementMultiplier;

        let nextDx = bug.dx;
        let nextDy = bug.dy;

        if (nextX <= 2 || nextX >= 93) {
          nextDx *= -1;
          nextX = Math.max(2, Math.min(93, nextX));
        }

        if (nextY <= 3 || nextY >= 91) {
          nextDy *= -1;
          nextY = Math.max(3, Math.min(91, nextY));
        }

        return {
          ...bug,
          x: nextX,
          y: nextY,
          dx: nextDx,
          dy: nextDy,
        };
      });

      bugsRef.current = updatedBugs;
      setBugs(updatedBugs);

      // --------------------------------------------------
      // BUG COLLISION
      // --------------------------------------------------

      if (hitCooldownRef.current > 0) {
        hitCooldownRef.current -= delta;
      }

      if (hitCooldownRef.current <= 0) {
        const hitBug = updatedBugs.some((bug) =>
          checkCollision(
            currentPlayer,
            PLAYER_SIZE,
            bug,
            BUG_SIZE
          )
        );

        if (hitBug) {
          hitCooldownRef.current = 1200;

          livesRef.current -= 1;
          setLives(livesRef.current);

          const resetPosition = {
            x: 5,
            y: 45,
          };

          playerRef.current = resetPosition;
          setPlayer(resetPosition);

          if (livesRef.current <= 0) {
            setGameOver(true);
            return;
          }
        }
      }

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [started, gameOver, completed, onComplete]);

  // --------------------------------------------------
  // START SCREEN
  // --------------------------------------------------

  if (!started) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center overflow-y-auto bg-[#030611] px-4 py-6 text-white sm:px-6">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/95 p-5 shadow-[0_0_80px_rgba(34,211,238,0.12)] sm:p-8 lg:p-10">

          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative">

            <div className="mb-5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.3em] text-cyan-300 sm:mb-6">
              <FaLock />
              PORTFOLIO ACCESS SYSTEM
            </div>

            <div className="text-center">

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-3xl shadow-[0_0_30px_rgba(34,211,238,0.15)] sm:h-20 sm:w-20 sm:text-4xl">
                🎮
              </div>

              <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
                Hack the{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Complete the access challenge to unlock the portfolio.
                Collect all four power-ups and avoid the bugs.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">

              <div className="rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-4 text-center">
                <div className="text-3xl">💻</div>
                <p className="mt-2 text-xs font-bold text-slate-300">
                  CODE
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-4 text-center">
                <div className="text-3xl">☕</div>
                <p className="mt-2 text-xs font-bold text-slate-300">
                  COFFEE
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-4 text-center">
                <div className="text-3xl">🧠</div>
                <p className="mt-2 text-xs font-bold text-slate-300">
                  AI
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-4 text-center">
                <div className="text-3xl">⚡</div>
                <p className="mt-2 text-xs font-bold text-slate-300">
                  SKILLS
                </p>
              </div>

            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:mt-7">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="mt-0.5 shrink-0 text-cyan-400" />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Mission objective
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                    Collect all four items while avoiding the moving
                    bugs. You have three lives.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={startGame}
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 px-6 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] active:scale-[0.98] sm:mt-7 sm:py-5 sm:text-base"
            >
              <FaPlay className="text-cyan-300 transition group-hover:scale-110" />
              START MISSION
            </button>

            <div className="mt-4 flex flex-col items-center justify-center gap-2 text-center text-[11px] text-slate-600 sm:flex-row sm:gap-4">
              <span className="flex items-center gap-1.5">
                <FaKeyboard />
                Desktop: WASD / Arrow Keys
              </span>

              <span className="hidden sm:block">•</span>

              <span>Mobile: Touch Controls</span>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // GAME OVER
  // --------------------------------------------------

  if (gameOver) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-[#030611] px-4 py-6 text-white">
        <div className="w-full max-w-md rounded-3xl border border-red-400/20 bg-slate-950 p-7 text-center shadow-[0_0_70px_rgba(239,68,68,0.12)] sm:p-10">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-red-400/30 bg-red-500/10 text-4xl">
            🐛
          </div>

          <h2 className="mt-6 text-3xl font-black">
            SYSTEM LOCKED
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Too many bugs got you. Restart the mission and try again.
          </p>

          <div className="mt-5 text-sm font-bold text-slate-300">
            Progress:{" "}
            <span className="text-cyan-300">
              {score}/4
            </span>
          </div>

          <button
            type="button"
            onClick={startGame}
            className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500/10 px-6 py-4 font-bold text-cyan-300 transition hover:bg-cyan-500/20 active:scale-[0.98]"
          >
            <FaRedo />
            TRY AGAIN
          </button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // VICTORY SCREEN
  // --------------------------------------------------

  if (completed) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-[#030611] px-4 py-6 text-white">
        <div className="w-full max-w-lg rounded-3xl border border-emerald-400/20 bg-slate-950 p-8 text-center shadow-[0_0_100px_rgba(16,185,129,0.15)] sm:p-12">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-5xl shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            🏆
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.3em] text-emerald-300">
            ACCESS GRANTED
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            SYSTEM UNLOCKED
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            All portfolio access keys collected successfully.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-emerald-300">
            <FaHeart />
            Welcome to Pranay's Portfolio
          </div>

          <div className="mt-7 text-xs text-slate-600">
            Loading portfolio...
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // MAIN GAME
  // --------------------------------------------------

  return (
    <div className="min-h-[100svh] overflow-x-hidden bg-[#030611] text-white">

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-15%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-3 py-4 sm:px-5 sm:py-6 lg:px-8">

        {/* HEADER */}
        <header className="shrink-0">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-cyan-300 sm:text-xs">
                <FaLock />
                PORTFOLIO ACCESS SYSTEM
              </div>

              <h1 className="mt-1 text-xl font-black sm:text-2xl lg:text-3xl">
                Hack the Portfolio
              </h1>
            </div>

            {/* SCORE / LIVES */}
            <div className="flex gap-2 sm:gap-3">

              <div className="min-w-[100px] rounded-xl border border-cyan-400/20 bg-slate-950/80 px-3 py-2 sm:min-w-[120px] sm:px-4">
                <p className="text-[9px] font-bold tracking-widest text-slate-500">
                  ACCESS
                </p>

                <p className="mt-0.5 text-base font-black text-cyan-300 sm:text-lg">
                  {score}/4
                </p>
              </div>

              <div className="min-w-[100px] rounded-xl border border-red-400/20 bg-slate-950/80 px-3 py-2 sm:min-w-[120px] sm:px-4">
                <p className="text-[9px] font-bold tracking-widest text-slate-500">
                  LIVES
                </p>

                <p className="mt-0.5 text-base font-black text-red-300 sm:text-lg">
                  {"❤️".repeat(lives)}
                </p>
              </div>

            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500 sm:mt-4 sm:text-xs">
            <FaKeyboard className="text-cyan-400" />
            <span className="hidden sm:inline">
              Use WASD or Arrow Keys to move
            </span>
            <span className="sm:hidden">
              Use the controls below to move
            </span>
          </div>

        </header>

        {/* GAME AREA */}
        <main className="mt-4 flex flex-1 flex-col sm:mt-5">

          {/* GAME BOARD */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#050b18] shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:rounded-3xl">

            {/* Responsive board */}
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)
                  `,
                  backgroundSize: "35px 35px",
                }}
              />

              {/* Scanline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan-300/30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

              {/* COLLECT EFFECT */}
              {collectEffect && (
                <div
                  key={collectEffect.id}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 animate-pulse"
                >
                  <div className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-5 py-2 text-xs font-black tracking-widest text-emerald-300 shadow-[0_0_35px_rgba(16,185,129,0.3)] sm:text-sm">
                    + ACCESS KEY: {collectEffect.label}
                  </div>
                </div>
              )}

              {/* COLLECTIBLES */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="absolute z-10 flex items-center justify-center"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    width: `${ITEM_SIZE}%`,
                    height: `${ITEM_SIZE}%`,
                  }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-[clamp(18px,3vw,32px)] shadow-[0_0_25px_rgba(34,211,238,0.3)] animate-pulse">
                    {item.icon}
                  </div>
                </div>
              ))}

              {/* BUGS */}
              {bugs.map((bug) => (
                <div
                  key={bug.id}
                  className="absolute z-10 flex items-center justify-center"
                  style={{
                    left: `${bug.x}%`,
                    top: `${bug.y}%`,
                    width: `${BUG_SIZE}%`,
                    height: `${BUG_SIZE}%`,
                  }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-red-400/40 bg-red-500/10 text-[clamp(16px,2.7vw,28px)] shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                    🐛
                  </div>
                </div>
              ))}

              {/* PLAYER */}
              <div
                className="absolute z-20 flex items-center justify-center"
                style={{
                  left: `${player.x}%`,
                  top: `${player.y}%`,
                  width: `${PLAYER_SIZE}%`,
                  height: `${PLAYER_SIZE}%`,
                }}
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-xl border border-indigo-300/50 bg-indigo-500/20 text-[clamp(18px,3vw,32px)] shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                  🧑‍💻

                  <div className="absolute -inset-1 -z-10 rounded-xl border border-indigo-400/20 animate-pulse" />
                </div>
              </div>

              {/* Board labels */}
              <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-[8px] font-bold tracking-widest text-slate-600 sm:bottom-4 sm:left-4 sm:text-[9px]">
                ACCESS_NODE_01
              </div>

              <div className="pointer-events-none absolute bottom-3 right-3 rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-[8px] font-bold tracking-widest text-slate-600 sm:bottom-4 sm:right-4 sm:text-[9px]">
                SECURE_ZONE
              </div>

            </div>
          </div>

          {/* MOBILE CONTROLS — OUTSIDE GAME BOARD */}
          <div className="mt-4 flex flex-col items-center sm:hidden">

            <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-slate-600">
              TOUCH CONTROLS
            </p>

            <div className="grid grid-cols-3 gap-2">

              <div />

              <ControlButton
                direction="up"
                onPress={(direction) => {
                  keysRef.current[direction] = true;
                }}
                onRelease={(direction) => {
                  keysRef.current[direction] = false;
                }}
              >
                ↑
              </ControlButton>

              <div />

              <ControlButton
                direction="left"
                onPress={(direction) => {
                  keysRef.current[direction] = true;
                }}
                onRelease={(direction) => {
                  keysRef.current[direction] = false;
                }}
              >
                ←
              </ControlButton>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-xs text-slate-700 sm:h-16 sm:w-16">
                <FaCode />
              </div>

              <ControlButton
                direction="right"
                onPress={(direction) => {
                  keysRef.current[direction] = true;
                }}
                onRelease={(direction) => {
                  keysRef.current[direction] = false;
                }}
              >
                →
              </ControlButton>

              <div />

              <ControlButton
                direction="down"
                onPress={(direction) => {
                  keysRef.current[direction] = true;
                }}
                onRelease={(direction) => {
                  keysRef.current[direction] = false;
                }}
              >
                ↓
              </ControlButton>

              <div />

            </div>

          </div>

          {/* DESKTOP INFO */}
          <div className="mt-4 hidden items-center justify-center gap-4 text-[10px] text-slate-600 sm:flex">
            <span className="flex items-center gap-1.5">
              <FaCode className="text-cyan-500/60" />
              Collect 4 access keys
            </span>

            <span>•</span>

            <span className="flex items-center gap-1.5">
              <FaBug className="text-red-500/60" />
              Avoid bugs
            </span>

            <span>•</span>

            <span className="flex items-center gap-1.5">
              <FaTrophy className="text-yellow-500/60" />
              Unlock portfolio
            </span>
          </div>

        </main>

        {/* FOOTER */}
        <footer className="mt-5 shrink-0 border-t border-white/5 pt-4 text-center sm:mt-6 sm:pt-5">

          <div className="flex flex-col items-center justify-center gap-2 text-[10px] text-slate-600 sm:flex-row sm:gap-4">

            <span className="flex items-center gap-1.5">
              <FaShieldAlt />
              Secure portfolio gateway
            </span>

            <span className="hidden sm:block">•</span>

            <span>Pranay Kumar Gouru</span>

          </div>

        </footer>

      </div>
    </div>
  );
}