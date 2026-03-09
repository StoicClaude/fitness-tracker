import { useState, useEffect } from "react";

const PRIMARY_LIFTS = ["Squat", "Bench", "Deadlift"];

const INITIAL_PROGRAM = {
  "Day A": {
    focus: "Squat Day",
    primaryLift: "Squat",
    exercises: [
      { id: "a_warmup1", name: "Lying on Foam Roller W to Ys", sets: 2, reps: "10", group: "Warmup", videoUrl: "" },
      { id: "a_warmup2", name: "Open 1/2 Kneel Adductor Mob (w/ ankle mob)", sets: 2, reps: "8ea", group: "Warmup", videoUrl: "https://www.youtube.com/watch?v=RDdflb8wQm0" },
      { id: "a_warmup3", name: "Reverse Nordics", sets: 2, reps: "10", group: "Warmup", videoUrl: "https://www.youtube.com/watch?v=sElYhAo8-yY" },
      { id: "a_warmup4", name: "Banded Shoulder Internal Rotations", sets: 2, reps: "12ea", group: "Warmup", videoUrl: "https://www.youtube.com/watch?v=7bXPgfGzW9k" },
      { id: "a_warmup5", name: "2DB/KB OH Carry", sets: 2, reps: "2L", group: "Warmup", videoUrl: "https://www.youtube.com/shorts/jkMT1lcTC3s" },
      { id: "a_warmup6", name: "Assisted Hip Airplanes", sets: 2, reps: "8ea", group: "Warmup", videoUrl: "https://www.youtube.com/shorts/U5f8h7FDEa0" },
      { id: "a_a1", name: "Box Jump to Depth Landing", sets: 3, reps: "3", group: "A", videoUrl: "" },
      { id: "a_a2", name: "Prone on Bench Hip Extension", sets: 3, reps: "8ea", group: "A", videoUrl: "https://www.youtube.com/watch?v=x1uB3KTgxeQ" },
      { id: "a_b1", name: "Squat with Pause (3s)", sets: 4, reps: "3", group: "B", isPrimary: true, videoUrl: "" },
      { id: "a_b2", name: "TRX High Row to ER to Y", sets: 3, reps: "12", group: "B", videoUrl: "https://www.youtube.com/watch?v=-wMaaaKQCpk" },
      { id: "a_b3", name: "Side Plank Top Leg Raises", sets: 3, reps: "8ea", group: "B", videoUrl: "" },
      { id: "a_c1", name: "RFE Split Squats", sets: 3, reps: "5-6", group: "C", videoUrl: "https://www.youtube.com/watch?v=U3JQwV89uBc" },
      { id: "a_c2", name: "Double Pause Push Ups", sets: 3, reps: "8ea", group: "C", videoUrl: "" },
      { id: "a_c3", name: "High-Low Cable Crossbody Chops", sets: 3, reps: "8", group: "C", videoUrl: "https://www.youtube.com/watch?v=c1vlMlkl9Cc" },
    ],
  },
  "Day B": {
    focus: "Bench Day",
    primaryLift: "Bench",
    exercises: [
      { id: "b_warmup1", name: "Lying on Foam Roller W to Ys", sets: 2, reps: "10", group: "Warmup", videoUrl: "" },
      { id: "b_warmup2", name: "Open 1/2 Kneel Adductor Mob (w/ ankle mob)", sets: 2, reps: "8ea", group: "Warmup", videoUrl: "https://www.youtube.com/watch?v=RDdflb8wQm0" },
      { id: "b_warmup3", name: "Reverse Nordics", sets: 2, reps: "10", group: "Warmup", videoUrl: "https://www.youtube.com/watch?v=sElYhAo8-yY" },
      { id: "b_warmup4", name: "Banded Shoulder Internal Rotations", sets: 2, reps: "12ea", group: "Warmup", videoUrl: "https://www.youtube.com/watch?v=7bXPgfGzW9k" },
      { id: "b_warmup5", name: "2DB/KB OH Carry", sets: 2, reps: "2L", group: "Warmup", videoUrl: "https://www.youtube.com/shorts/jkMT1lcTC3s" },
      { id: "b_warmup6", name: "Assisted Hip Airplanes", sets: 2, reps: "8ea", group: "Warmup", videoUrl: "https://www.youtube.com/shorts/U5f8h7FDEa0" },
      { id: "b_a1", name: "TGU to Hand → Low Sweep", sets: 3, reps: "5-8ea", group: "A", videoUrl: "https://youtu.be/FMnhTGrdXxE" },
      { id: "b_a2", name: "Pec Stretch", sets: 2, reps: "30s ea", group: "A", videoUrl: "" },
      { id: "b_b1", name: "BB Medium Grip Bench with Pause", sets: 4, reps: "3", group: "B", isPrimary: true, videoUrl: "" },
      { id: "b_b2", name: "Single Arm Bench Supported Row", sets: 3, reps: "10ea", group: "B", videoUrl: "https://www.youtube.com/watch?v=CLajHoP3TKc" },
      { id: "b_b3", name: "Deadbugs with Banded Lat Engagement", sets: 3, reps: "6ea", group: "B", videoUrl: "https://www.youtube.com/shorts/fcqCJE9oUeM" },
      { id: "b_c1", name: "Low Incline Alternating DB Press", sets: 3, reps: "6", group: "C", videoUrl: "https://www.youtube.com/watch?v=B59-28F9MY8" },
      { id: "b_c2", name: "Staggered Stiff Legged RDL", sets: 3, reps: "6", group: "C", videoUrl: "https://www.youtube.com/watch?v=RFuCfiMfJ1w" },
      { id: "b_c3", name: "Hanging Knee Raises", sets: 3, reps: "8ea", group: "C", videoUrl: "https://www.youtube.com/watch?v=ACnl_apRkqU" },
    ],
  },
  "Day C": {
    focus: "Deadlift Day",
    primaryLift: "Deadlift",
    exercises: [
      { id: "c_warmup1", name: "Lying on Foam Roller W to Ys", sets: 2, reps: "10", group: "Warmup", videoUrl: "" },
      { id: "c_warmup2", name: "Open 1/2 Kneel Adductor Mob (w/ ankle mob)", sets: 2, reps: "8ea", group: "Warmup", videoUrl: "https://www.youtube.com/watch?v=RDdflb8wQm0" },
      { id: "c_warmup3", name: "Reverse Nordics", sets: 2, reps: "10", group: "Warmup", videoUrl: "https://www.youtube.com/watch?v=sElYhAo8-yY" },
      { id: "c_warmup4", name: "Banded Shoulder Internal Rotations", sets: 2, reps: "12ea", group: "Warmup", videoUrl: "https://www.youtube.com/watch?v=7bXPgfGzW9k" },
      { id: "c_warmup5", name: "2DB/KB OH Carry", sets: 2, reps: "2L", group: "Warmup", videoUrl: "https://www.youtube.com/shorts/jkMT1lcTC3s" },
      { id: "c_warmup6", name: "Assisted Hip Airplanes", sets: 2, reps: "8ea", group: "Warmup", videoUrl: "https://www.youtube.com/shorts/U5f8h7FDEa0" },
      { id: "c_a1", name: "Banded KB Swing", sets: 3, reps: "6", group: "A", videoUrl: "https://www.youtube.com/watch?v=vvr21kgaxSQ" },
      { id: "c_a2", name: "Broad Jumps", sets: 3, reps: "3", group: "A", videoUrl: "https://www.youtube.com/shorts/v0yrBWA3eEs" },
      { id: "c_b1", name: "Deadlift with Concentric Pause", sets: 4, reps: "3", group: "B", isPrimary: true, videoUrl: "https://www.youtube.com/watch?v=nKLA09y-kto" },
      { id: "c_b2", name: "2DB Floor Press - Knees at 90°", sets: 3, reps: "10", group: "B", videoUrl: "https://www.youtube.com/shorts/yGOrsUy9ZLQ" },
      { id: "c_b3", name: "Leg Lowers", sets: 3, reps: "8ea", group: "B", videoUrl: "https://www.youtube.com/watch?v=3t9egVYlPcM" },
      { id: "c_c1", name: "Assisted Pull Ups", sets: 3, reps: "4-5", group: "C", videoUrl: "https://www.youtube.com/shorts/65tcjz-ie8o" },
      { id: "c_c2", name: "Shoulders Elevated Single Leg Hip Lift", sets: 3, reps: "12ea", group: "C", videoUrl: "https://www.youtube.com/watch?v=QniC8Jzka3Q" },
      { id: "c_c3", name: "Wedge Board Medial/Lateral Calf Raises", sets: 3, reps: "10", group: "C", videoUrl: "https://www.youtube.com/shorts/9YUh47b1fdE" },
    ],
  },
};

const INITIAL_LIFT_HISTORY = {
  "Squat": [{ week: "W1", weight: 155 }, { week: "W2", weight: 160 }, { week: "W3", weight: 165 }],
  "Bench": [{ week: "W1", weight: 115 }, { week: "W2", weight: 120 }, { week: "W3", weight: 120 }],
  "Deadlift": [{ week: "W1", weight: 185 }, { week: "W2", weight: 195 }, { week: "W3", weight: 200 }],
};

function getYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^&?/\s]{11})/);
  return m ? m[1] : null;
}

function MiniChart({ data, color }) {
  if (!data || data.length < 2) return null;
  const weights = data.map(d => d.weight);
  const min = Math.min(...weights) - 10;
  const max = Math.max(...weights) + 10;
  const w = 120, h = 40;
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((d.weight - min) / (max - min)) * h;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={w} height={h} style={{ display: "block" }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {data.map((d, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = h - ((d.weight - min) / (max - min)) * h;
        return <circle key={i} cx={x} cy={y} r="3.5" fill={color} />;
      })}
    </svg>
  );
}

function VideoModal({ url, onClose }) {
  const vid = getYouTubeId(url);
  if (!vid) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div onClick={e => e.stopPropagation()} style={{ position: "relative", width: "min(90vw,800px)", aspectRatio: "16/9" }}>
        <iframe
          title="Exercise video"
          src={`https://www.youtube.com/embed/${vid}?autoplay=1&origin=https://fitness-tracker-chi-two.vercel.app`}
          style={{ width: "100%", height: "100%", border: "none", borderRadius: 8 }}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        <button onClick={onClose} style={{
          position: "absolute", top: -14, right: -14, background: "#e63946",
          border: "none", borderRadius: "50%", width: 30, height: 30, color: "#fff",
          fontWeight: "bold", cursor: "pointer", fontSize: 16, lineHeight: "30px"
        }}>×</button>
      </div>
    </div>
  );
}

export default function FitnessTracker() {
  const [tab, setTab] = useState("log");
  const [activeDay, setActiveDay] = useState("Day A");
  const [program, setProgram] = useState(() => {
    try { const s = localStorage.getItem("ft_program"); return s ? JSON.parse(s) : INITIAL_PROGRAM; } catch { return INITIAL_PROGRAM; }
  });
  const [liftHistory, setLiftHistory] = useState(() => {
    try { const s = localStorage.getItem("ft_liftHistory"); return s ? JSON.parse(s) : INITIAL_LIFT_HISTORY; } catch { return INITIAL_LIFT_HISTORY; }
  });
  const [workoutLog, setWorkoutLog] = useState(() => {
    try { const s = localStorage.getItem("ft_workoutLog"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });
  const [videoModal, setVideoModal] = useState(null);
  const [editingVideo, setEditingVideo] = useState(null);
  const [videoInput, setVideoInput] = useState("");
  const [newLiftEntry, setNewLiftEntry] = useState({ lift: "Squat", weight: "", week: "" });
  const [completedSets, setCompletedSets] = useState(() => {
    try { const s = localStorage.getItem("ft_completedSets"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });
  const [notes, setNotes] = useState(() => {
    try { const s = localStorage.getItem("ft_notes"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });
  const [currentWeek, setCurrentWeek] = useState(() => {
    try { const s = localStorage.getItem("ft_currentWeek"); return s ? JSON.parse(s) : 4; } catch { return 4; }
  });
  const [manualDayDone, setManualDayDone] = useState(() => {
    try { const s = localStorage.getItem("ft_manualDayDone"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });
  const [collapsedGroups, setCollapsedGroups] = useState({});
  const [expandedWeight, setExpandedWeight] = useState({});
  const [expandedExNote, setExpandedExNote] = useState({});
  const [weekPickerOpen, setWeekPickerOpen] = useState(false);

  // Persist all key state to localStorage whenever it changes
  useEffect(() => { try { localStorage.setItem("ft_program", JSON.stringify(program)); } catch {} }, [program]);
  useEffect(() => { try { localStorage.setItem("ft_liftHistory", JSON.stringify(liftHistory)); } catch {} }, [liftHistory]);
  useEffect(() => { try { localStorage.setItem("ft_workoutLog", JSON.stringify(workoutLog)); } catch {} }, [workoutLog]);
  useEffect(() => { try { localStorage.setItem("ft_completedSets", JSON.stringify(completedSets)); } catch {} }, [completedSets]);
  useEffect(() => { try { localStorage.setItem("ft_notes", JSON.stringify(notes)); } catch {} }, [notes]);
  useEffect(() => { try { localStorage.setItem("ft_currentWeek", JSON.stringify(currentWeek)); } catch {} }, [currentWeek]);
  useEffect(() => { try { localStorage.setItem("ft_manualDayDone", JSON.stringify(manualDayDone)); } catch {} }, [manualDayDone]);

  const day = program[activeDay];

  const logWeight = (exId, weight) => {
    setWorkoutLog(prev => ({
      ...prev,
      [`W${currentWeek}-${activeDay}-${exId}`]: weight
    }));
  };

  const saveVideoUrl = (exId) => {
    setProgram(prev => {
      const updated = { ...prev };
      updated[activeDay] = {
        ...updated[activeDay],
        exercises: updated[activeDay].exercises.map(ex =>
          ex.id === exId ? { ...ex, videoUrl: videoInput } : ex
        )
      };
      return updated;
    });
    setEditingVideo(null);
    setVideoInput("");
  };

  const addLiftEntry = () => {
    if (!newLiftEntry.weight || !newLiftEntry.week) return;
    setLiftHistory(prev => ({
      ...prev,
      [newLiftEntry.lift]: [...(prev[newLiftEntry.lift] || []), {
        week: newLiftEntry.week,
        weight: parseFloat(newLiftEntry.weight)
      }]
    }));
    setNewLiftEntry(n => ({ ...n, weight: "", week: "" }));
  };

  const liftColors = {
    "Squat": "#6e9e5e",
    "Bench": "#6e9e5e",
    "Deadlift": "#6e9e5e",
  };

  const primaryLiftWeights = {
    "Day A": { lift: "Squat", weight: 150 },
    "Day B": { lift: "Bench", weight: 150 },
    "Day C": { lift: "Deadlift", weight: 150 },
  };

  // Progress calculations (exercise level, week-scoped)
  const getDayProgress = (dayKey) => {
    const exercises = program[dayKey].exercises;
    const total = exercises.length;
    const done = exercises.filter(ex => completedSets[`W${currentWeek}-${dayKey}-${ex.id}`]).length;
    const allDone = done === total;
    const isDone = manualDayDone[`W${currentWeek}-${dayKey}`] || allDone;
    return { total, done, allDone, isDone };
  };

  const weekDaysComplete = Object.keys(program).filter(d => getDayProgress(d).isDone).length;
  const weekTotal = Object.keys(program).reduce((sum, d) => sum + getDayProgress(d).total, 0);
  const weekDone = Object.keys(program).reduce((sum, d) => sum + getDayProgress(d).done, 0);

  const groupOrder = ["Warmup", "A", "B", "C"];
  const grouped = groupOrder.reduce((acc, g) => {
    const exs = day.exercises.filter(e => e.group === g);
    if (exs.length) acc[g] = exs;
    return acc;
  }, {});

  const groupLabels = { Warmup: "Movement Prep", A: "Block A", B: "Block B", C: "Block C" };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#141210",
      color: "#e2d9c8",
      fontFamily: "'Instrument Sans', sans-serif",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Instrument+Sans:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #141210; }
        ::-webkit-scrollbar-thumb { background: #2a2520; border-radius: 2px; }
        .day-btn:hover { opacity: 0.85 !important; }
        .ex-row:hover { background: rgba(180,158,110,0.04) !important; }
        .tab-btn { transition: all 0.2s; }
        .set-dot { transition: all 0.15s; cursor: pointer; }
        .set-dot:hover { transform: scale(1.15); }
        input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; }
      `}</style>

      {/* Status bar cover for iOS safe area */}
      <div style={{ background: "#6e9e5e", height: "env(safe-area-inset-top)" }} />

      {/* Header */}
      <div style={{
        background: "#1a1612",
        borderBottom: "1px solid #2a2520",
        padding: "0",
      }}>
        {/* Empower brand bar */}
        <div style={{
          background: "#6e9e5e",
          padding: "6px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 4, color: "#141210" }}>
            EMPOWER PT & PERFORMANCE
          </div>
          <div style={{ fontSize: 9, letterSpacing: 3, color: "#141210", opacity: 0.6 }}>WAKEFIELD, MA</div>
        </div>
        {/* Client + nav row */}
        <div style={{ padding: "16px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#e2d9c8", lineHeight: 1 }}>
              Kent Sands
            </div>
            <div style={{ fontSize: 10, color: "#5a5040", letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>
              Phase 3 · Isometric Control
            </div>
          </div>
          <div style={{ display: "flex", gap: 4, background: "#231f1a", borderRadius: 8, padding: 4 }}>
            {[["log", "Workout"], ["progress", "Progress"]].map(([t, label]) => (
              <button key={t} className="tab-btn" onClick={() => setTab(t)} style={{
                background: tab === t ? "#6e9e5e" : "transparent",
                color: tab === t ? "#141210" : "#5a5040",
                border: "none",
                borderRadius: 6,
                padding: "8px 18px",
                fontFamily: "inherit",
                fontSize: 11,
                letterSpacing: 1,
                fontWeight: tab === t ? 600 : 400,
                cursor: "pointer",
              }}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      {tab === "log" && (
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 20px" }}>

          {/* Week header */}
          <div style={{
            background: "#1a1612", border: "1px solid #2a2520",
            borderRadius: 8, marginBottom: 20,
          }}>
            <div style={{ padding: "16px 20px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {/* Left: WEEK X tap-to-change */}
              <div style={{ position: "relative" }}>
                <div onClick={() => setWeekPickerOpen(p => !p)} style={{ cursor: "pointer", userSelect: "none" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 48, fontWeight: 700, lineHeight: 1, letterSpacing: 1 }}>
                    <span style={{ color: "#d4e4c8" }}>WEEK </span>
                    <span style={{ color: "#6e9e5e" }}>{currentWeek}</span>
                  </div>
                  <div style={{ fontSize: 9, letterSpacing: 4, color: "#3a4a3a", textTransform: "uppercase", marginTop: 3 }}>
                    ISOMETRIC CONTROL
                  </div>
                </div>
                {weekPickerOpen && (
                  <div style={{
                    position: "absolute", bottom: "100%", left: 0, marginBottom: 8,
                    background: "#231f1a", border: "1px solid #2a2520", borderRadius: 6,
                    padding: "8px", display: "flex", gap: 4, zIndex: 100,
                  }}>
                    {[1,2,3,4,5].map(w => (
                      <button key={w} onClick={() => { setCurrentWeek(w); setWeekPickerOpen(false); }} style={{
                        width: 32, height: 32, borderRadius: 4,
                        background: currentWeek === w ? "#e8e8e2" : "transparent",
                        color: currentWeek === w ? "#0d0d0f" : "#666",
                        border: `1px solid ${currentWeek === w ? "#e8e8e2" : "#3a3520"}`,
                        fontFamily: "inherit", fontSize: 13, cursor: "pointer", fontWeight: 600,
                      }}>{w}</button>
                    ))}
                  </div>
                )}
              </div>
              {/* Right: A/B/C day dots + count */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {Object.keys(program).map(d => {
                  const { isDone } = getDayProgress(d);
                  const letter = d.replace("Day ", "");
                  return (
                    <div key={d} style={{
                      width: 32, height: 32, borderRadius: 4,
                      background: isDone ? "#6e9e5e" : "#1a2a1a",
                      border: `1px solid ${isDone ? "#6e9e5e" : "#2a3a2a"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, fontWeight: 600,
                      color: isDone ? "#141210" : "#4a6a4a",
                    }}>
                      {isDone ? "✓" : letter}
                    </div>
                  );
                })}
                <span style={{ fontSize: 14, color: "#6e9e5e", fontWeight: 600, marginLeft: 2 }}>
                  {weekDaysComplete}/3
                </span>
              </div>
            </div>
            {/* Full-width progress bar */}
            <div style={{ height: 3, background: "#231f1a", borderRadius: "0 0 8px 8px", overflow: "hidden" }}>
              <div style={{
                height: "100%",
                width: `${weekTotal > 0 ? (weekDone / weekTotal) * 100 : 0}%`,
                background: "#6e9e5e",
                transition: "width 0.3s ease",
              }} />
            </div>
          </div>

          {/* Day Selector */}
          <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
            {Object.entries(program).map(([d, info]) => {
              const { total, done, isDone } = getDayProgress(d);
              const pct = total > 0 ? (done / total) * 100 : 0;
              const color = liftColors[info.primaryLift];
              return (
                <button key={d} className="day-btn" onClick={() => setActiveDay(d)} style={{
                  flex: 1,
                  background: activeDay === d ? "#1e1c17" : "transparent",
                  border: activeDay === d ? `2px solid ${color}` : `1px solid ${isDone ? color : "#2a2520"}`,
                  borderRadius: 6,
                  padding: activeDay === d ? "13px 11px" : "14px 12px",
                  color: activeDay === d ? "#e8e8e2" : "#888",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "center",
                  position: "relative",
                }}>
                  {isDone && (
                    <div style={{
                      position: "absolute", top: 6, right: 8,
                      fontSize: 10, color, opacity: 0.8
                    }}>✓</div>
                  )}
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 26, letterSpacing: 2,
                    color: activeDay === d ? color : isDone ? color : "#666"
                  }}>{d}</div>
                  <div style={{ fontSize: 10, letterSpacing: 1, marginTop: 2, marginBottom: 8, textTransform: "uppercase", color: activeDay === d ? "#8a8070" : "#555" }}>
                    {info.focus}
                  </div>
                  {/* Primary lift weight */}
                  {primaryLiftWeights[d] && (
                    <div style={{ marginBottom: 8 }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: activeDay === d ? color : "#3a3020", lineHeight: 1 }}>
                        {primaryLiftWeights[d].weight}
                      </span>
                      <span style={{ fontSize: 9, color: "#4a3a28", marginLeft: 3 }}>lbs</span>
                    </div>
                  )}
                  {/* Per-day progress bar */}
                  <div style={{ height: 3, background: "#231f1a", borderRadius: 2, overflow: "hidden", marginBottom: 6 }}>
                    <div style={{
                      height: "100%", borderRadius: 2,
                      width: `${pct}%`, background: color,
                      transition: "width 0.3s ease",
                    }} />
                  </div>
                  <div style={{ fontSize: 9, color: "#8a8070", letterSpacing: 1 }}>
                    {done}/{total} exercises
                  </div>
                </button>
              );
            })}
          </div>

          {/* Exercise Blocks */}
          {Object.entries(grouped).map(([group, exercises]) => {
            const collapseKey = `${activeDay}-${group}`;
            const isCollapsed = collapsedGroups[collapseKey];
            const doneInGroup = exercises.filter(ex => completedSets[`W${currentWeek}-${activeDay}-${ex.id}`]).length;
            return (
            <div key={group} style={{ marginBottom: 20 }}>
              <div
                onClick={() => setCollapsedGroups(prev => ({ ...prev, [collapseKey]: !prev[collapseKey] }))}
                style={{
                  fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
                  color: "#9a9080", marginBottom: isCollapsed ? 0 : 10,
                  paddingBottom: 8, borderBottom: "1px solid #2a2520",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  cursor: "pointer", userSelect: "none",
                }}
              >
                <span>{groupLabels[group]}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 9, color: doneInGroup === exercises.length ? "#57cc99" : "#333" }}>
                    {doneInGroup}/{exercises.length}
                  </span>
                  <span style={{ fontSize: 14, color: "#4a3a28", transform: isCollapsed ? "rotate(-90deg)" : "rotate(0deg)", display: "inline-block", transition: "transform 0.2s" }}>
                    ▾
                  </span>
                </div>
              </div>

              {!isCollapsed && exercises.map(ex => {
                const logKey = `W${currentWeek}-${activeDay}-${ex.id}`;
                const vid = getYouTubeId(ex.videoUrl);
                const isPrimary = ex.isPrimary;
                const isChecked = completedSets[`W${currentWeek}-${activeDay}-${ex.id}`];
                const weightExpanded = expandedWeight[`${activeDay}-${ex.id}`];
                const color = liftColors[day.primaryLift];
                return (
                  <div key={ex.id} style={{ marginBottom: 6 }}>
                    <div className="ex-row" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 10px",
                      borderRadius: 6,
                      borderLeft: isPrimary ? `3px solid ${color}` : "3px solid transparent",
                    }}>
                      {/* Checkbox */}
                      <div
                        className="set-dot"
                        onClick={() => {
                          const key = `W${currentWeek}-${activeDay}-${ex.id}`;
                          setCompletedSets(prev => ({ ...prev, [key]: !prev[key] }));
                        }}
                        style={{
                          flexShrink: 0,
                          width: 22, height: 22, borderRadius: "50%",
                          background: isChecked ? color : "transparent",
                          border: `1.5px solid ${isChecked ? color : "#333"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 12, color: "#141210", fontWeight: "bold",
                        }}
                      >
                        {isChecked ? "✓" : ""}
                      </div>

                      {/* Name + meta */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: 13, fontWeight: 500,
                          color: isPrimary ? color : isChecked ? "#555" : "#e8e8e2",
                          display: "flex", alignItems: "center", gap: 6,
                          textDecoration: isChecked ? "line-through" : "none",
                        }}>
                          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ex.name}</span>
                          {isPrimary && (
                            <span style={{
                              flexShrink: 0, fontSize: 9, letterSpacing: 2, color,
                              border: `1px solid ${color}`, padding: "1px 5px", borderRadius: 2, opacity: 0.7
                            }}>PRIMARY</span>
                          )}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 3, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 11, color: "#8a8070" }}>{ex.sets} sets · {ex.reps}</span>
                          <button
                            onClick={() => setExpandedWeight(prev => ({ ...prev, [`${activeDay}-${ex.id}`]: !prev[`${activeDay}-${ex.id}`] }))}
                            style={{
                              background: "transparent", border: "none", padding: 0,
                              color: workoutLog[logKey] ? color : "#333",
                              fontFamily: "inherit", fontSize: 11, cursor: "pointer",
                            }}
                          >
                            {workoutLog[logKey] ? `${workoutLog[logKey]} lbs` : "+ weight"}
                          </button>
                        </div>
                        {weightExpanded && (
                          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}>
                            <input
                              type="number"
                              placeholder="lbs"
                              autoFocus
                              value={workoutLog[logKey] || ""}
                              onChange={e => logWeight(ex.id, e.target.value)}
                              style={{
                                width: 70, background: "#231f1a",
                                border: `1px solid ${color}`, borderRadius: 4,
                                color: "#e2d9c8", fontFamily: "inherit",
                                fontSize: 13, padding: "5px 8px", outline: "none", textAlign: "center",
                              }}
                            />
                            <span style={{ fontSize: 11, color: "#8a8070" }}>lbs</span>
                            <button onClick={() => setExpandedWeight(prev => ({ ...prev, [`${activeDay}-${ex.id}`]: false }))} style={{
                              background: "transparent", border: "none", color: "#8a8070",
                              fontFamily: "inherit", fontSize: 11, cursor: "pointer", padding: "0 4px"
                            }}>done</button>
                          </div>
                        )}
                        {/* Per-exercise note */}
                        {(() => {
                          const noteKey = `W${currentWeek}-${activeDay}-${ex.id}-note`;
                          const noteVal = notes[noteKey] || "";
                          const noteExpanded = expandedExNote[`${activeDay}-${ex.id}`];
                          if (noteExpanded) {
                            return (
                              <input
                                type="text"
                                autoFocus
                                placeholder="Add a note..."
                                value={noteVal}
                                onChange={e => setNotes(prev => ({ ...prev, [noteKey]: e.target.value }))}
                                onBlur={() => setExpandedExNote(prev => ({ ...prev, [`${activeDay}-${ex.id}`]: false }))}
                                style={{
                                  display: "block", width: "100%", marginTop: 5,
                                  background: "#1a1612", border: "1px solid #2a2520",
                                  borderRadius: 4, color: "#c8c8c0", fontFamily: "inherit",
                                  fontSize: 11, padding: "4px 8px", outline: "none",
                                }}
                              />
                            );
                          }
                          if (noteVal) {
                            return (
                              <div
                                onClick={() => setExpandedExNote(prev => ({ ...prev, [`${activeDay}-${ex.id}`]: true }))}
                                style={{ fontSize: 10, color: "#8a8070", marginTop: 5, cursor: "pointer" }}
                              >{noteVal}</div>
                            );
                          }
                          return (
                            <div
                              onClick={() => setExpandedExNote(prev => ({ ...prev, [`${activeDay}-${ex.id}`]: true }))}
                              style={{ fontSize: 10, color: "#6e6050", marginTop: 5, cursor: "pointer" }}
                            >+ note</div>
                          );
                        })()}
                      </div>

                      {/* Play button */}
                      <button
                        onClick={() => {
                          if (vid) setVideoModal(ex.videoUrl);
                          else { setEditingVideo(ex.id); setVideoInput(ex.videoUrl || ""); }
                        }}
                        style={{
                          flexShrink: 0,
                          width: 38, height: 38, borderRadius: "50%",
                          background: vid ? color : "#231f1a",
                          border: `1px solid ${vid ? color : "#2a2520"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          cursor: "pointer", fontSize: vid ? 14 : 16,
                          color: vid ? "#0d0d0f" : "#333",
                          transition: "all 0.15s",
                        }}
                      >
                        {vid ? "▶" : "+"}
                      </button>
                    </div>

                    {/* Video URL edit row */}
                    {editingVideo === ex.id && (
                      <div style={{ display: "flex", gap: 6, padding: "6px 10px 10px 42px", flexWrap: "wrap" }}>
                        <input
                          type="text"
                          placeholder="Paste YouTube URL..."
                          value={videoInput}
                          onChange={e => setVideoInput(e.target.value)}
                          style={{
                            flex: 1, minWidth: 180, background: "#1a1612",
                            border: "1px solid #333", borderRadius: 4,
                            color: "#e2d9c8", fontFamily: "inherit",
                            fontSize: 11, padding: "6px 10px", outline: "none"
                          }}
                        />
                        <button onClick={() => saveVideoUrl(ex.id)} style={{
                          background: color, color: "#141210", border: "none",
                          borderRadius: 4, padding: "6px 12px", fontFamily: "inherit",
                          fontSize: 11, cursor: "pointer", fontWeight: 600
                        }}>Save</button>
                        <button onClick={() => setEditingVideo(null)} style={{
                          background: "transparent", color: "#5a5040", border: "1px solid #2a2a2f",
                          borderRadius: 4, padding: "6px 10px", fontFamily: "inherit",
                          fontSize: 11, cursor: "pointer"
                        }}>✕</button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            );
          })}

          {/* Mark Day Complete */}
          <div style={{ marginTop: 20, marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            {(() => {
              const { isDone, allDone } = getDayProgress(activeDay);
              const color = liftColors[day.primaryLift];
              return (
                <button onClick={() => setManualDayDone(prev => ({ ...prev, [`W${currentWeek}-${activeDay}`]: !prev[`W${currentWeek}-${activeDay}`] }))} style={{
                  background: isDone ? color : "transparent",
                  color: isDone ? "#0d0d0f" : "#555",
                  border: `1px solid ${isDone ? color : "#3a3020"}`,
                  borderRadius: 4, padding: "8px 18px",
                  fontFamily: "inherit", fontSize: 11,
                  letterSpacing: 2, textTransform: "uppercase",
                  cursor: "pointer", fontWeight: isDone ? 600 : 400,
                }}>
                  {isDone ? "✓ Day Complete" : allDone ? "✓ Mark Complete" : "Mark Day Complete"}
                </button>
              );
            })()}
          </div>

          {/* Notes */}
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#8a8070", marginBottom: 8, textTransform: "uppercase" }}>
              Session Notes
            </div>
            <textarea
              placeholder="How'd it feel today..."
              value={notes[`W${currentWeek}-${activeDay}`] || ""}
              onChange={e => setNotes(prev => ({ ...prev, [`W${currentWeek}-${activeDay}`]: e.target.value }))}
              style={{
                width: "100%", minHeight: 80,
                background: "#1a1612", border: "1px solid #2a2520",
                borderRadius: 6, color: "#888", fontFamily: "inherit",
                fontSize: 12, padding: "12px 14px", resize: "vertical",
                outline: "none"
              }}
            />
          </div>
        </div>
      )}

      {tab === "progress" && (
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 20px" }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#8a8070", marginBottom: 20, textTransform: "uppercase" }}>
              Primary Lift Progress
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {Object.entries(liftHistory).map(([lift, history]) => {
                const latest = history[history.length - 1]?.weight;
                const prev = history[history.length - 2]?.weight;
                const delta = latest && prev ? latest - prev : null;
                const color = liftColors[lift] || "#6e9e5e";
                return (
                  <div key={lift} style={{
                    background: "#1a1612",
                    border: "1px solid #2a2520",
                    borderRadius: 8,
                    padding: "20px",
                    borderTop: `3px solid ${color}`
                  }}>
                    <div style={{ fontSize: 11, color: "#5a5040", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>
                      {lift}
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 14 }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color, lineHeight: 1 }}>
                        {latest}
                      </span>
                      <span style={{ fontSize: 12, color: "#8a8070" }}>lbs</span>
                      {delta !== null && (
                        <span style={{
                          fontSize: 12,
                          color: delta > 0 ? "#57cc99" : delta < 0 ? "#e63946" : "#555"
                        }}>
                          {delta > 0 ? `+${delta}` : delta} this wk
                        </span>
                      )}
                    </div>
                    <MiniChart data={history} color={color} />
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                      {history.map((h, i) => (
                        <div key={i} style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 9, color: "#4a3a28", letterSpacing: 1 }}>{h.week}</div>
                          <div style={{ fontSize: 11, color: "#666" }}>{h.weight}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Log New Weight */}
          <div style={{
            background: "#1a1612",
            border: "1px solid #2a2520",
            borderRadius: 8,
            padding: "20px"
          }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#8a8070", marginBottom: 16, textTransform: "uppercase" }}>
              Log New Entry
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <select
                value={newLiftEntry.lift}
                onChange={e => setNewLiftEntry(n => ({ ...n, lift: e.target.value }))}
                style={{
                  background: "#141210", border: "1px solid #252528",
                  borderRadius: 4, color: "#e2d9c8", fontFamily: "inherit",
                  fontSize: 12, padding: "8px 12px", outline: "none"
                }}
              >
                {PRIMARY_LIFTS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              <input
                type="text"
                placeholder="Week (e.g. W4)"
                value={newLiftEntry.week}
                onChange={e => setNewLiftEntry(n => ({ ...n, week: e.target.value }))}
                style={{
                  width: 120, background: "#141210",
                  border: "1px solid #252528", borderRadius: 4,
                  color: "#e2d9c8", fontFamily: "inherit",
                  fontSize: 12, padding: "8px 12px", outline: "none"
                }}
              />
              <input
                type="number"
                placeholder="Weight (lbs)"
                value={newLiftEntry.weight}
                onChange={e => setNewLiftEntry(n => ({ ...n, weight: e.target.value }))}
                style={{
                  width: 130, background: "#141210",
                  border: "1px solid #252528", borderRadius: 4,
                  color: "#e2d9c8", fontFamily: "inherit",
                  fontSize: 12, padding: "8px 12px", outline: "none"
                }}
              />
              <button onClick={addLiftEntry} style={{
                background: "#6e9e5e", color: "#141210",
                border: "none", borderRadius: 4,
                padding: "8px 20px", fontFamily: "inherit",
                fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
                cursor: "pointer", fontWeight: 500
              }}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {videoModal && <VideoModal url={videoModal} onClose={() => setVideoModal(null)} />}
    </div>
  );
}
