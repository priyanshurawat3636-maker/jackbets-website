"use client";

import { useState } from "react";

const SITE = {
  kick: "https://kick.com/jackbetss",
  instagram: "https://www.instagram.com/jack_betss/?__pwa=1",
  discord: "https://discord.gg/Ggv9NKJfP",
  telegram: "https://t.me/daryhevan",
  email: "jackkaffiliate@gmail.com",
};

const OFFER = {
  casino: "FORTUNEJACK",
  casinoShort: "FJ",
  promoCode: "JACKBETS",

  registerUrl:
    "https://tracker-pm2.fortunejackpartners.com/link?btag=106784053_503805",

  tiers: [
    {
      deposit: 50,
      spins: 50,
    },
    {
      deposit: 100,
      spins: 100,
    },
  ],
};

const leaderboard = [
  {
    username: "J***99",
    wagered: 12450,
    prize: 250,
  },
  {
    username: "R***07",
    wagered: 8920,
    prize: 150,
  },
  {
    username: "M***21",
    wagered: 6580,
    prize: 100,
  },
  {
    username: "A***55",
    wagered: 4210,
    prize: 50,
  },
  {
    username: "K***88",
    wagered: 3760,
    prize: 25,
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const sortedLeaderboard = [...leaderboard].sort(
    (a, b) => b.wagered - a.wagered
  );

  const money = (amount) => `$${amount.toLocaleString("en-US")}`;

  async function copyPromo() {
    try {
      await navigator.clipboard.writeText(OFFER.promoCode);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main>
      <div className="noise" />

      {/* ================= NAVBAR ================= */}

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

      {/* ================= HERO ================= */}

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
              <strong>{OFFER.promoCode}</strong>
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

            <strong>{OFFER.casino}</strong>

            <span>UP TO 100 FREE SPINS</span>
          </div>

          <div className="floatingCard cardTwo">
            <small>PROMO CODE</small>

            <strong>{OFFER.promoCode}</strong>
          </div>
        </div>
      </section>

      {/* ================= TICKER ================= */}

      <div className="ticker">
        <div>
          ✦ JACKBETS &nbsp;&nbsp; ✦ {OFFER.casino} &nbsp;&nbsp; ✦ LIVE ON KICK
          &nbsp;&nbsp; ✦ EXCLUSIVE REWARDS &nbsp;&nbsp; ✦ COMMUNITY
          &nbsp;&nbsp; ✦ NO-WAGER FREE SPINS &nbsp;&nbsp; ✦ JACKBETS
          &nbsp;&nbsp; ✦ {OFFER.casino} &nbsp;&nbsp; ✦ LIVE ON KICK
        </div>
      </div>

      {/* ================= OFFER ================= */}

      <section className="section container" id="offers">
        <SectionHeading
          number="01"
          small="PARTNER REWARDS"
          title="Featured Offer"
        />

        <div className="offerCard">
          <div className="offerGlow" />

          <div className="casinoHeader">
            <div className="casinoLogo">{OFFER.casinoShort}</div>

            <div>
              <small>FEATURED CASINO</small>
              <h3>{OFFER.casino}</h3>
            </div>

            <span className="exclusiveBadge">
              JACKBETS EXCLUSIVE
            </span>
          </div>

          <div className="offerMain">
            <div className="offerCopy">
              <span className="orangeLabel">
                NO-WAGER FREE SPINS
              </span>

              <h2>
                Deposit more.
                <br />
                <span>Spin more.</span>
              </h2>

              <p>
                Register using the JackBets partner link and use promo code{" "}
                <strong>{OFFER.promoCode}</strong> to qualify for the current{" "}
                {OFFER.casino} promotion.
              </p>
            </div>

            <div className="promoBox">
              <small>YOUR PROMO CODE</small>

              <strong>{OFFER.promoCode}</strong>

              <button onClick={copyPromo}>
                {copied ? "COPIED ✓" : "COPY CODE"}
              </button>
            </div>
          </div>

          {/* OFFER TIERS */}

          <div className="offerTiers">
            {OFFER.tiers.map((tier) => (
              <div className="tier" key={tier.deposit}>
                <div>
                  <span>DEPOSIT</span>
                  <strong>${tier.deposit}</strong>
                </div>

                <div className="spinAmount">
                  <b>{tier.spins}</b>

                  <span>
                    NO-WAGER
                    <br />
                    FREE SPINS
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a
            href={OFFER.registerUrl}
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

      {/* ================= HOW TO CLAIM ================= */}

<section className="claimStepsSection">
  <div className="section container">

    <SectionHeading
      number="02"
      small="HOW IT WORKS"
      title="Claim Your Reward"
    />

    <div className="claimSteps">

      <div className="claimStep">
        <span>01</span>

        <div className="stepIcon">↗</div>

        <h3>REGISTER</h3>

        <p>
          Create your FortuneJack account using the official
          JackBets registration link.
        </p>

        <a
          href={OFFER.registerUrl}
          target="_blank"
          rel="noreferrer"
        >
          REGISTER NOW →
        </a>
      </div>


      <div className="claimStep featuredStep">
        <span>02</span>

        <div className="stepIcon">$</div>

        <h3>DEPOSIT</h3>

        <p>
          Use promo code <strong>{OFFER.promoCode}</strong> and
          deposit $50 or $100 according to the promotion terms.
        </p>

        <div className="miniPromo">
          {OFFER.promoCode}
        </div>
      </div>


      <div className="claimStep">
        <span>03</span>

        <div className="stepIcon">★</div>

        <h3>CLAIM</h3>

        <p>
          If eligible, claim the applicable no-wager free spins
          associated with your qualifying deposit.
        </p>

        <strong className="rewardText">
          UP TO 100 FREE SPINS
        </strong>
      </div>

    </div>

  </div>
</section>

      {/* ================= STREAM ================= */}

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

              <img
                src="/jackbets-logo.png"
                alt="JackBets stream"
              />

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
              <span className="orangeLabel">
                WATCH • CHAT • JOIN
              </span>

              <h2>
                Be part of
                <br />
                the action.
              </h2>

              <p>
                Watch JackBets on Kick and join the community for stream
                announcements, promotions and updates.
              </p>

              <a
                href={SITE.kick}
                target="_blank"
                rel="noreferrer"
              >
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

      {/* ================= LEADERBOARD ================= */}

      <section
        className="section container"
        id="leaderboard"
      >
        <SectionHeading
          number="03"
          small="COMMUNITY RANKINGS"
          title="Leaderboard"
        />

        {/* TOP 3 */}

        <div className="podium">
          {sortedLeaderboard[1] && (
            <Podium
              rank="2"
              username={sortedLeaderboard[1].username}
              wager={money(sortedLeaderboard[1].wagered)}
              prize={money(sortedLeaderboard[1].prize)}
            />
          )}

          {sortedLeaderboard[0] && (
            <Podium
              winner
              rank="1"
              username={sortedLeaderboard[0].username}
              wager={money(sortedLeaderboard[0].wagered)}
              prize={money(sortedLeaderboard[0].prize)}
            />
          )}

          {sortedLeaderboard[2] && (
            <Podium
              rank="3"
              username={sortedLeaderboard[2].username}
              wager={money(sortedLeaderboard[2].wagered)}
              prize={money(sortedLeaderboard[2].prize)}
            />
          )}
        </div>

        {/* FULL LEADERBOARD */}

        <div className="leaderboard">
          <div className="leaderRow leaderHead">
            <span>RANK</span>
            <span>PLAYER</span>
            <span>WAGERED</span>
            <span>PRIZE</span>
          </div>

          {sortedLeaderboard.map((player, index) => (
            <div
              className="leaderRow"
              key={player.username}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{player.username}</span>

              <span>
                {money(player.wagered)}
              </span>

              <span>
                {money(player.prize)}
              </span>
            </div>
          ))}
        </div>

        <p className="legal">
          Demo leaderboard data is shown for design preview only. It does not
          represent verified player results or payouts.
        </p>
      </section>

      {/* ================= SOCIALS ================= */}

      <section
        className="communitySection"
        id="community"
      >
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
              <span>
                BUSINESS / PARTNERSHIPS
              </span>

              <h2>
                Let&apos;s work together.
              </h2>
            </div>

            <a href={`mailto:${SITE.email}`}>
              {SITE.email} <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      {/* ================= RESPONSIBLE GAMBLING ================= */}

      <section className="responsible">
        <div className="container responsibleInner">
          <strong>18+</strong>

          <div>
            <span>
              RESPONSIBLE GAMBLING
            </span>

            <h2>
              Keep it entertainment.
            </h2>

            <p>
              Set limits, never chase losses, and only gamble with money you
              can afford to lose.
            </p>
          </div>
        </div>
      </section>
            {/* RESPONSIBLE GAMBLING ka section yahan end hoga */}


      {/* ================= PARTNER LEADERBOARDS ================= */}

      <section id="leaderboards" className="partnerSection">
        <div className="container">

          <div className="partnerHeading">
            <span>JACKBETS REWARDS</span>

            <h2>
              PARTNER <strong>LEADERBOARDS</strong>
            </h2>

            <p>
              Choose a partner to view its live leaderboard and rewards.
            </p>
          </div>

          <div className="partnerGrid">

            {/* FORTUNEJACK */}
            <div className="partnerCard">
              <div className="partnerTop">
                <div className="partnerIcon">FJ</div>

                <div>
                  <span>PARTNER</span>
                  <h3>FortuneJack</h3>
                </div>
              </div>

              <div className="partnerInfo">
                <span>PROMO CODE</span>
                <strong>JACKBETS</strong>
              </div>

              <a
                href="/leaderboard/fortunejack"
                className="leaderboardButton"
              >
                VIEW LEADERBOARD →
              </a>
            </div>


            {/* WINOVO */}
            <div className="partnerCard featuredPartner">
              <div className="partnerTop">
                <div className="partnerIcon">W</div>

                <div>
                  <span>PARTNER</span>
                  <h3>WINOVO</h3>
                </div>
              </div>

              <div className="partnerInfo">
                <span>LEADERBOARD</span>
                <strong>LIVE WAGER RANKINGS</strong>
              </div>

              <a
                href="/leaderboard/winovo"
                className="leaderboardButton"
              >
                VIEW LEADERBOARD →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="container footer">
          <a href="#home" className="logo">
            <img
              src="/jackbets-logo.png"
              alt="JackBets"
            />

            <span>
              JACK<span>BETS</span>
            </span>
          </a>

          <p>
            © 2026 JACKBETS • ALL RIGHTS RESERVED
          </p>

          <a href="#home" className="backTop">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>

    </main>
  );
}