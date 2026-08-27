try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "558c892f-c1c3-4ab8-b56b-5a7464079d8c", e._sentryDebugIdIdentifier = "sentry-dbid-558c892f-c1c3-4ab8-b56b-5a7464079d8c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9107], {
    63163(e, a, s) {
      s.r(a), s.d(a, {
        default: () => u
      });
      var t = s(39793),
        r = s(93082),
        d = s(20155);
      (0, r.forwardRef)((e, a) => {
        const {
          children: s,
          tag: r = "div"
        } = e, o = d.m[r];
        return (0, t.jsx)(d.LazyMotion, {
          features: d.domAnimation,
          children: (0, t.jsx)(o, {
            ref: a,
            ...e,
            children: s
          })
        })
      }).displayName = "LiteMotion";
      const o = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        i = {
          ease: "easeIn",
          duration: .4
        },
        c = ({
          children: e
        }) => (0, t.jsx)(d.motion.div, Object.assign({
          className: "rockstargames-sites-rockstargamesf38982805188b64825a72d2c5fac938c",
          variants: o,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: i
        }, {
          children: e
        }));
      var n = s(17301),
        l = s(13331),
        m = s(81270);
      const g = ({
        children: e,
        context: a = null,
        game: s,
        image: r = {},
        style: d = {},
        template: o = null,
        theme: i = null,
        reversedOnMobile: c = !1,
        className: g = "",
        id: b = null
      }) => {
        const f = (0, n.useImageParser)(r ?? {}),
          p = {
            ...d
          };
        if (f?.src?.desktop) {
          const e = (r?.style && r?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (r?.style && r?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            s = `var(--grid-background-position, center)/${e??"cover"}`;
          if (p.background = `url(${f?.src?.desktop}) ${a} ${s}`, r?.style && r?.style["--linear-gradient"]) p.background = `linear-gradient(${r?.style["--linear-gradient"]}), url(${f?.src?.desktop}) ${a} ${s}`;
          else if (r?.style && r?.style["--gradient-height"]) {
            const e = r?.style["--gradient-height"] || "3",
              t = r?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              d = r?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            p.background = `linear-gradient(180deg, ${t}, transparent ${e}%, transparent ${100-e}%, ${d}), url(${f?.src?.desktop}) ${a} ${s}`
          }
        }
        return (0, t.jsx)("div", {
          id: b,
          className: (0, m.default)("rockstargames-sites-rockstargamesda87ead760b989fbe90a0b89c60b0653", c ? "rockstargames-sites-rockstargamesdfbda195073626bc6a7690dc73fba873" : "", g),
          "data-game": "community" === o ? null : s,
          style: (0, l.safeStyles)(p),
          "data-context": a,
          "data-template": o,
          "data-theme": i,
          children: e
        })
      };
      var b = s(3854);
      const f = ({
          alt: e,
          className: a,
          src: r,
          role: d,
          style: o
        }) => {
          const [i, c] = (0, l.usePreloadImg)(r);
          let n = r;
          !1 === i && (n = s(9333));
          const {
            width: m,
            height: g
          } = c, b = {
            "--aspect-ratio": Number.isNaN(m / g) ? "" : m / g,
            ...o
          };
          return (0, t.jsx)("img", {
            src: n,
            className: a ?? "",
            alt: e,
            style: b,
            role: d
          })
        },
        p = "rockstargames-sites-rockstargamesc8dc03880ce2e12f3fdea5b5b587f27f",
        k = ({
          className: e,
          style: a = {},
          image: r = {},
          imageStyle: d = {},
          role: o = "img"
        }) => {
          let {
            alt: i,
            src: c
          } = (0, n.useImageParser)(r);
          const {
            isMobile: m
          } = (0, l.useWindowResize)(), g = m ? c.imageMobileStyle : c.imageDesktopStyle;
          c.desktop || c.mobile || (i = "", c = {
            mobile: s(28839),
            desktop: s(9333)
          });
          let b = r.frame ? `${r.frame} ${p}` : p;
          return (0, t.jsx)("div", {
            className: b,
            style: a,
            children: (0, t.jsx)(f, {
              style: {
                ...d,
                ...r?.style,
                ...g
              },
              src: m ? c.mobile || c.desktop : c?.desktop || c?.mobile,
              alt: i,
              role: o,
              className: e
            })
          })
        },
        h = {
          body: "rockstargames-sites-rockstargamesd6571f3c513cb7926df8940a17fe82a9",
          bodyPadding: "rockstargames-sites-rockstargamese86794fbd2c629ecdc5cfe79e36e8a20",
          disclaimer: "rockstargames-sites-rockstargamese3d1b26e1b9c5d5204ecaa20ff62abcc",
          headline_2: "rockstargames-sites-rockstargamesd208f114e7bbcf73734a8971494445f9",
          headline_3: "rockstargames-sites-rockstargamesdd203ba094cb4638fb07da8f328d6495",
          jpwrapper: "rockstargames-sites-rockstargamesb395b520b33f1a7d6532fd66000fd1cb",
          link: "rockstargames-sites-rockstargamescde5a6432fe77cd30e39fb39a713e18b",
          responsiveImage: "rockstargames-sites-rockstargamese661a856095375f44e305b2e551ab5cc"
        },
        u = (y = () => (0, t.jsxs)("div", {
          className: h.jpwrapper,
          children: [(0, t.jsx)(k, {
            className: h.responsiveImage,
            image: {
              desktop: s(43305)
            }
          }), (0, t.jsxs)(g, {
            className: [h.body, h.inner, h.gap_sm].join(" "),
            children: [(0, t.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, t.jsxs)("p", {
              children: [(0, t.jsx)("a", {
                className: h.link,
                href: "https://www.rockstargames.com/jp/newswire/article/175k8294o31ooo/gta-online-san-andreas-mercenaries-now-available",
                children: "「GTAオンライン：サンアンドレアスの傭兵」"
              }), "のリリースを記念して、日本のプレイヤーだけが参加できる初めてのコミュニティチャレンジを開催します。"]
            }), (0, t.jsx)("p", {
              children: "今から9月7日までに密輸貨物の売却ミッションに参加して密輸貨物をさばき、合計GTAマネー3億ドルを売り上げ、GTAマネー50万ドルを解除しましょう。"
            }), (0, t.jsx)("p", {
              children: "密輸貨物を入手すると、格納庫内のパソコンからフリートレード運送のサイトを使って売却ミッションを開始できるようになります。"
            }), (0, t.jsx)(k, {
              image: {
                desktop: s(2036)
              }
            }), (0, t.jsx)("h1", {
              children: "お気に入りのクリエイターを応援しよう"
            }), (0, t.jsx)("p", {
              children: "YouTubeとTwitchで活躍する日本のトップクリエイターたちが、8月31日から9月3日まで4日間のライブストリーミングイベントに参加します。 クリエイターには毎日チャレンジが課せられ、成功すれば日本のプレイヤー全員に追加でGTAマネー200万ドルが贈られます。"
            }), (0, t.jsx)(k, {
              className: h.bodyPadding,
              image: {
                desktop: s(61301)
              }
            }), (0, t.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, t.jsx)(k, {
              className: h.bodyPadding,
              image: {
                desktop: s(7023)
              }
            }), (0, t.jsxs)("p", {
              children: ["さらなる詳細は、", (0, t.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: h.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, t.jsx)("p", {
              className: h.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, t.jsx)(b.A, {
              condensed: !0,
              titleSlug: "gta-online"
            })]
          })]
        }), e => (0, t.jsx)(c, {
          children: (0, t.jsx)(y, Object.assign({}, e))
        }));
      var y
    },
    9333(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    28839(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    2036(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1ed2a51b04e0bb000bcf1496dcd3f784.png"
    },
    43305(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca34dd285d3d7a6cf9a329c73a274599.jpg"
    },
    61301(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/442e7c26891ff37ae957573626516d06.png"
    },
    7023(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8ae4db5a481080ebfd341e18dbfb2277.png"
    }
  }
]);