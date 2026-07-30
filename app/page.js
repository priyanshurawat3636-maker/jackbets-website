"use client";

import { useState } from "react";

const SITE = {
  kick: "https://kick.com/jackbetss",
  instagram: "https://www.instagram.com/jack_betss/?__pwa=1",
  discord: "https://discord.gg/Ggv9NKJfP",
  telegram: "https://t.me/daryhevan",
  email: "jackkaffiliate@gmail.com",
  register:
    "https://tracker-pm2.fortunejackpartners.com/link?btag=106784053_503805",
  promo: "JACKBETS",
};

const leaderboard = [
  ["01", "J***99", "$12,450", "$250"],
  ["02", "R***07", "$8,920", "$150"],
  ["03", "M***21", "$6,580", "$100"],
  ["04", "A***55", "$4,210", "$50"],
  ["05", "K***88", "$3,760", "$25"],
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyPromo() {
    try {
      await navigator.clipboard.writeText(SITE.promo);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main>
      <div className="noise" />

      {/* NAVBAR */}
      <header className="header">
        <nav className="container navbar">
          <a href="#home" className="logo">
            <img src="/jackbets-logo.png" alt="JackBets" />
            <span>
              JACK<span>BETS</span>
            </span>
          </a>

          <div className="navLinks">
            <a href="#home">HOME</a>
            <a href="#offers">REWARDS</a>
            <a href="#stream">STREAM</a>
            <a href="#leaderboard">LEADERBOARD</a>
            <a href="#community">SOCIALS</a>
          </div>

          <a
            href={SITE.kick}
            target="_blank"
            rel="noreferrer"
            className="liveButton"
          >
            <i />
            LIVE ON KICK
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero container" id="home">
        <div className="heroGrid" />

        <div className="heroContent">
          <div className="heroTag">
            <span>●</span>
            JACKBETS OFFICIAL
          </div>

          <h1>
            YOUR EDGE.
            <br />
            YOUR <span>REWARDS.</span>
          </h1>

          <p>
            Live streams, exclusive partner promotions, community drops and
            leaderboard action — all in one JackBets hub.
          </p>

          <div className="heroButtons">
            <a href="#offers" className="primaryButton">
              CLAIM REWARDS <b>→</b>
            </a>

            <a
              href={SITE.kick}
              target="_blank"
              rel="noreferrer"
              className="secondaryButton"
            >
              WATCH STREAM ↗
            </a>
          </div>

          <div className="heroStats">
            <div>
              <strong>LIVE</strong>
              <span>KICK STREAMS</span>
            </div>

            <div>
              <strong>JACKBETS</strong>
              <span>PROMO CODE</span>
            </div>

            <div>
              <strong>18+</strong>
              <span>RESPONSIBLE PLAY</span>
            </div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="orangeGlow" />
          <div className="ring ringOne" />
          <div className="ring ringTwo" />

          <img
            className="heroLogo"
            src="/jackbets-logo.png"
            alt="JackBets logo"
          />

          <div className="floatingCard cardOne">
            <small>FEATURED</small>
            <strong>FORTUNEJACK</strong>
            <span>UP TO 100 FREE SPINS</span>
          </div>

          <div className="floatingCard cardTwo">
            <small>PROMO CODE</small>
            <strong>JACKBETS</strong>
          </div>
        </div>
      </section>

      {/* MOVING TICKER */}
      <div className="ticker">
        <div>
          ✦ JACKBETS &nbsp;&nbsp; ✦ FORTUNEJACK &nbsp;&nbsp; ✦ LIVE ON KICK
          &nbsp;&nbsp; ✦ EXCLUSIVE REWARDS &nbsp;&nbsp; ✦ COMMUNITY &nbsp;&nbsp;
          ✦ NO-WAGER FREE SPINS &nbsp;&nbsp; ✦ JACKBETS &nbsp;&nbsp; ✦
          FORTUNEJACK &nbsp;&nbsp; ✦ LIVE ON KICK
        </div>
      </div>

      {/* OFFER */}
      <section className="section container" id="offers">
        <SectionHeading
          number="01"
          small="PARTNER REWARDS"
          title="Featured Offer"
        />

        <div className="offerCard">
          <div className="offerGlow" />

          <div className="casinoHeader">
            <div className="casinoLogo">FJ</div>

            <div>
              <small>FEATURED CASINO</small>
              <h3>FORTUNEJACK</h3>
            </div>

            <span className="exclusiveBadge">JACKBETS EXCLUSIVE</span>
          </div>

          <div className="offerMain">
            <div className="offerCopy">
              <span className="orangeLabel">NO-WAGER FREE SPINS</span>

              <h2>
                Deposit more.
                <br />
                <span>Spin more.</span>
              </h2>

              <p>
                Register using the JackBets partner link and use promo code{" "}
                <strong>JACKBETS</strong> to qualify for the current
                FortuneJack promotion.
              </p>
            </div>

            <div className="promoBox">
              <small>YOUR PROMO CODE</small>
              <strong>JACKBETS</strong>

              <button onClick={copyPromo}>
                {copied ? "COPIED ✓" : "COPY CODE"}
              </button>
            </div>
          </div>

          <div className="offerTiers">
            <div className="tier">
              <div>
                <span>DEPOSIT</span>
                <strong>$50</strong>
              </div>

              <div className="spinAmount">
                <b>50</b>
                <span>
                  NO-WAGER
                  <br />
                  FREE SPINS
                </span>
              </div>
            </div>

            <div className="tier">
              <div>
                <span>DEPOSIT</span>
                <strong>$100</strong>
              </div>

              <div className="spinAmount">
                <b>100</b>
                <span>
                  NO-WAGER
                  <br />
                  FREE SPINS
                </span>
              </div>
            </div>
          </div>

          <a
            href={SITE.register}
            target="_blank"
            rel="noreferrer"
            className="claimButton"
          >
            <span>REGISTER & CLAIM OFFER</span>
            <b>↗</b>
          </a>

          <p className="legal">
            18+ only. T&Cs apply. Eligibility and promotion availability may
            vary. Gambling involves financial risk.
          </p>
        </div>
      </section>

      {/* STREAM */}
      <section className="streamSection" id="stream">
        <div className="section container">
          <SectionHeading
            number="02"
            small="JACKBETS LIVE"
            title="Catch The Stream"
          />

          <div className="streamCard">
            <a
              href={SITE.kick}
              target="_blank"
              rel="noreferrer"
              className="streamPreview"
            >
              <div className="scanLine" />

              <img src="/jackbets-logo.png" alt="JackBets stream" />

              <div className="playButton">
                <span>▶</span>
              </div>

              <div className="streamLive">
                <i />
                JACKBETS CHANNEL
              </div>

              <div className="streamBottom">
                <strong>JACKBETS</strong>
                <span>KICK.COM/JACKBETSS</span>
              </div>
            </a>

            <div className="streamContent">
              <span className="orangeLabel">WATCH • CHAT • JOIN</span>

              <h2>
                Be part of
                <br />
                the action.
              </h2>

              <p>
                Watch JackBets on Kick and join the community for stream
                announcements, promotions and updates.
              </p>

              <a href={SITE.kick} target="_blank" rel="noreferrer">
                OPEN KICK CHANNEL <b>↗</b>
              </a>

              <div className="streamStats">
                <div>
                  <strong>LIVE</strong>
                  <span>STREAMS</span>
                </div>

                <div>
                  <strong>4</strong>
                  <span>SOCIALS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="section container" id="leaderboard">
        <SectionHeading
          number="03"
          small="COMMUNITY RANKINGS"
          title="Leaderboard"
        />

        <div className="podium">
          <Podium
            rank="2"
            username="R***07"
            wager="$8,920"
            prize="$150"
          />

          <Podium
            winner
            rank="1"
            username="J***99"
            wager="$12,450"
            prize="$250"
          />

          <Podium
            rank="3"
            username="M***21"
            wager="$6,580"
            prize="$100"
          />
        </div>

        <div className="leaderboard">
          <div className="leaderRow leaderHead">
            <span>RANK</span>
            <span>PLAYER</span>
            <span>WAGERED</span>
            <span>PRIZE</span>
          </div>

          {leaderboard.map((player) => (
            <div className="leaderRow" key={player[0]}>
              <span>{player[0]}</span>
              <span>{player[1]}</span>
              <span>{player[2]}</span>
              <span>{player[3]}</span>
            </div>
          ))}
        </div>

        <p className="legal">
          Demo leaderboard data is shown for design preview only. It does not
          represent verified player results or payouts.
        </p>
      </section>

      {/* SOCIALS */}
      <section className="communitySection" id="community">
        <div className="section container">
          <SectionHeading
            number="04"
            small="JOIN THE NETWORK"
            title="JackBets Everywhere"
          />

          <div className="socialGrid">
            <SocialCard
              icon="K"
              name="KICK"
              text="Watch JackBets live"
              url={SITE.kick}
            />

            <SocialCard
              icon="IG"
              name="INSTAGRAM"
              text="Reels, posts & updates"
              url={SITE.instagram}
            />

            <SocialCard
              icon="D"
              name="DISCORD"
              text="Join the community"
              url={SITE.discord}
            />

            <SocialCard
              icon="TG"
              name="TELEGRAM"
              text="@daryhevan"
              url={SITE.telegram}
            />
          </div>

          <div className="businessCard">
            <div>
              <span>BUSINESS / PARTNERSHIPS</span>
              <h2>Let&apos;s work together.</h2>
            </div>

            <a href={`mailto:${SITE.email}`}>
              {SITE.email} <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      {/* 18+ */}
      <section className="responsible">
        <div className="container responsibleInner">
          <strong>18+</strong>

          <div>
            <span>RESPONSIBLE GAMBLING</span>
            <h2>Keep it entertainment.</h2>
            <p>
              Set limits, never chase losses, and only gamble with money you
              can afford to lose.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer">
          <a href="#home" className="logo">
            <img src="/jackbets-logo.png" alt="JackBets" />
            <span>
              JACK<span>BETS</span>
            </span>
          </a>

          <p>© 2026 JACKBETS • ALL RIGHTS RESERVED</p>

          <a href="#home" className="backTop">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ number, small, title }) {
  return (
    <div className="sectionHeading">
      <div className="sectionNumber">{number}</div>

      <div>
        <span>{small}</span>
        <h2>{title}</h2>
      </div>

      <div className="headingLine" />
    </div>
  );
}

function Podium({ rank, username, wager, prize, winner }) {
  return (
    <div className={`podiumCard ${winner ? "winner" : ""}`}>
      <span className="rank">
        {winner ? "♛ " : "#"}
        {rank}
      </span>

      <strong>{username}</strong>
      <b>{wager}</b>
      <small>{prize} PRIZE</small>
    </div>
  );
}

function SocialCard({ icon, name, text, url }) {
  return (
    <a
      className="socialCard"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="socialIcon">{icon}</div>

      <div>
        <span>{name}</span>
        <strong>{text}</strong>
      </div>

      <i>↗</i>
    </a>
  );
}