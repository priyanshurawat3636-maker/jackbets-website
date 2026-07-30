"use client";

import { useEffect, useState } from "react";

export default function FortuneJackLeaderboard() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        // FortuneJack live API baad mein yahan connect karenge.
        setPlayers([]);
      } catch (error) {
        console.error("FortuneJack leaderboard error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  return (
    <main className="partnerLeaderboardPage">
      <div className="leaderboardPageGlow" />

      <div className="leaderboardPageContainer">

        {/* BACK BUTTON */}
        <a href="/" className="leaderboardBack">
          ← BACK TO JACKBETS
        </a>

        {/* HEADER */}
        <div className="leaderboardPageHeader">
          <span>JACKBETS × FORTUNEJACK</span>

          <h1>
            FORTUNEJACK <strong>LEADERBOARD</strong>
          </h1>

          <p>
            Live competition rankings and rewards for JackBets players.
          </p>
        </div>

        {/* INFO */}
        <div className="leaderboardStatus">

          <div>
            <span>PARTNER</span>
            <strong>FortuneJack</strong>
          </div>

          <div>
            <span>PROMO CODE</span>
            <strong>JACKBETS</strong>
          </div>

          <div>
            <span>STATUS</span>

            <strong className="liveStatus">
              <i />
              LIVE
            </strong>
          </div>

        </div>

        {/* LEADERBOARD */}
        <div className="leaderboardTableCard">

          <div className="leaderboardTableHead">
            <span>RANK</span>
            <span>PLAYER</span>
            <span>WAGERED</span>
            <span>PRIZE</span>
          </div>

          {loading ? (
            <div className="leaderboardEmpty">
              Loading leaderboard...
            </div>
          ) : players.length === 0 ? (
            <div className="leaderboardEmpty">

              <strong>Leaderboard Ready</strong>

              <p>
                FortuneJack live data will appear here once the API is connected.
              </p>

            </div>
          ) : (
            players.map((player, index) => (
              <div
                className="leaderboardRow"
                key={player.id || index}
              >
                <span>#{index + 1}</span>

                <strong>
                  {player.name}
                </strong>

                <span>
                  ${player.wagered}
                </span>

                <span>
                  {player.prize || "—"}
                </span>
              </div>
            ))
          )}

        </div>

      </div>
    </main>
  );
}