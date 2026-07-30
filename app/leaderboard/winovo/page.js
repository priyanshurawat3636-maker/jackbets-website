"use client";

import { useEffect, useState } from "react";

export default function WinovoLeaderboard() {
  const [players, setPlayers] = useState([]);
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/leaderboard", {
          cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result?.error ||
            result?.response ||
            "Unable to load WINOVO leaderboard"
          );
        }

        setCreator(result.creator || null);
        setPlayers(Array.isArray(result.data) ? result.data : []);
      } catch (err) {
        console.error("WINOVO leaderboard error:", err);

        setError(
          err instanceof Error
            ? err.message
            : "Leaderboard temporarily unavailable"
        );
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  const formatWager = (amount) => {
    const value = Number(amount || 0);

    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <main className="partnerLeaderboardPage">

      <div className="leaderboardPageGlow" />

      <div className="leaderboardPageContainer">

        {/* BACK */}
        <a href="/" className="leaderboardBack">
          ← BACK TO JACKBETS
        </a>

        {/* HEADER */}
        <div className="leaderboardPageHeader">

          <span>JACKBETS × WINOVO</span>

          <h1>
            WINOVO <strong>LEADERBOARD</strong>
          </h1>

          <p>
            Live wager rankings for JackBets players on WINOVO.
          </p>

        </div>

        {/* STATUS */}
        <div className="leaderboardStatus">

          <div>
            <span>PARTNER</span>
            <strong>WINOVO</strong>
          </div>

          <div>
            <span>CREATOR</span>
            <strong>
              {creator?.name || creator || "JACKBETS"}
            </strong>
          </div>

          <div>
            <span>STATUS</span>

            <strong className="liveStatus">
              <i />
              LIVE
            </strong>
          </div>

        </div>

        {/* TABLE */}
        <div className="leaderboardTableCard">

          <div className="leaderboardTableHead">
            <span>RANK</span>
            <span>PLAYER</span>
            <span>WAGERED</span>
            <span>STATUS</span>
          </div>


          {/* LOADING */}

          {loading && (
            <div className="leaderboardEmpty">
              <strong>Loading Leaderboard</strong>

              <p>
                Fetching live WINOVO wager rankings...
              </p>
            </div>
          )}


          {/* ERROR */}

          {!loading && error && (
            <div className="leaderboardEmpty">

              <strong>Leaderboard Unavailable</strong>

              <p>
                {error}
              </p>

            </div>
          )}


          {/* EMPTY */}

          {!loading && !error && players.length === 0 && (
            <div className="leaderboardEmpty">

              <strong>No Players Yet</strong>

              <p>
                Rankings will appear here once players start wagering.
              </p>

            </div>
          )}


          {/* PLAYERS */}

          {!loading &&
            !error &&
            players.map((player, index) => (

              <div
                className="leaderboardRow"
                key={player.id || player.name || index}
              >

                <span>
                  #{index + 1}
                </span>

                <strong>
                  {player.name || "Anonymous"}
                </strong>

                <span>
                  ${formatWager(player.wagered)}
                </span>

                <span>
                  LIVE
                </span>

              </div>

            ))}

        </div>

      </div>

    </main>
  );
}