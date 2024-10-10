! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c8a30ec2-cc8a-4168-9caf-da9012fdeebc", e._sentryDebugIdIdentifier = "sentry-dbid-c8a30ec2-cc8a-4168-9caf-da9012fdeebc")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2036], {
    40004: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(71403),
        r = s(53181),
        d = s(46632);
      (0, t.forwardRef)(((e, a) => {
        const {
          children: s,
          tag: t = "div"
        } = e, c = r.m[t];
        return (0, d.jsx)(r.LazyMotion, {
          features: r.domAnimation,
          children: (0, d.jsx)(c, {
            ref: a,
            ...e,
            children: s
          })
        })
      })).displayName = "LiteMotion";
      const c = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        o = {
          ease: "easeIn",
          duration: .4
        },
        i = e => {
          let {
            children: a
          } = e;
          return (0, d.jsx)(r.motion.div, Object.assign({
            className: "rockstargames-sites-rockstargamesf0ee4e641f1ac92151be887c9ebb8392",
            variants: c,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: o
          }, {
            children: a
          }))
        };
      var n = s(26398),
        l = s(28089),
        m = s(42756);
      const g = e => {
        let {
          children: a,
          context: s = null,
          game: t,
          image: r = {},
          style: c = {},
          template: o = null,
          theme: i = null,
          reversedOnMobile: g = !1,
          className: b = "",
          id: f = null
        } = e;
        const p = (0, l.useImageParser)(r ?? {}),
          k = {
            ...c
          };
        if (p?.src?.desktop) {
          const e = (r?.style && r?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (r?.style && r?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            s = `var(--grid-background-position, center)/${e??"cover"}`;
          if (k.background = `url(${p?.src?.desktop}) ${a} ${s}`, r?.style && r?.style["--linear-gradient"]) k.background = `linear-gradient(${r?.style["--linear-gradient"]}), url(${p?.src?.desktop}) ${a} ${s}`;
          else if (r?.style && r?.style["--gradient-height"]) {
            const e = r?.style["--gradient-height"] || "3",
              t = r?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              d = r?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            k.background = `linear-gradient(180deg, ${t}, transparent ${e}%, transparent ${100-e}%, ${d}), url(${p?.src?.desktop}) ${a} ${s}`
          }
        }
        return (0, d.jsx)("div", {
          id: f,
          className: (0, n.classList)("rockstargames-sites-rockstargamesf42b4606ed4a5b16b7647ad7b7eb229d", g ? "rockstargames-sites-rockstargamesb00444166ce6346d7ca364a75a335ecc" : "", b),
          "data-game": "community" === o ? null : t,
          style: (0, m.safeStyles)(k),
          "data-context": s,
          "data-template": o,
          "data-theme": i,
          children: a
        })
      };
      var b = s(35856);
      const f = "rockstargames-sites-rockstargameseb64520e04e486931cd65dc5b3fa61e8",
        p = e => {
          let {
            alt: a,
            className: t,
            src: r,
            style: c
          } = e;
          const [o, i] = (0, m.usePreloadImg)(r);
          let n = r;
          !1 === o && ("rockstargames-sites-rockstargamesee609f31f3685766122c2c6fc0ef0710" === t && (n = s(14572)), n = s(8820));
          const {
            width: l,
            height: g
          } = i, b = {
            "--aspect-ratio": Number.isNaN(l / g) ? "" : l / g,
            ...c
          };
          return (0, d.jsx)("img", {
            src: n,
            className: t ?? "",
            alt: a,
            style: b
          })
        },
        k = e => {
          let {
            className: a,
            style: t = {},
            image: r = {},
            imageStyle: c = {}
          } = e, {
            alt: o,
            src: i
          } = (0, l.useImageParser)(r);
          const {
            isMobile: n
          } = (0, m.useWindowResize)();
          return i.desktop || i.mobile || (o = "", i = {
            mobile: s(14572),
            desktop: s(8820)
          }), (0, d.jsx)("div", {
            className: r.frame ? `${r.frame} ${f}` : f,
            style: t,
            children: (0, d.jsx)(p, {
              style: {
                ...c,
                ...r?.style
              },
              src: n ? i.mobile || i.desktop : i?.desktop || i?.mobile,
              alt: o,
              className: a
            })
          })
        },
        u = {
          jpwrapper: "rockstargames-sites-rockstargamesba6d4394dc71688a882bb545fc08beb4",
          body: "rockstargames-sites-rockstargamesdd0895660ec10bf279836cd110070640",
          responsiveImage: "rockstargames-sites-rockstargamesfb8048b514e49776135df91d47ef29db",
          link: "rockstargames-sites-rockstargamesac320620a02a8d3897d310cf288855ab",
          bodyPadding: "rockstargames-sites-rockstargamesd13a76b87f08d8fdbc47d45cd7450dd1",
          headline_3: "rockstargames-sites-rockstargamesa12bcaa8e0eec396547de0cae798278a",
          headline_2: "rockstargames-sites-rockstargamese2c90393cdf11f29befc2038de073e48",
          disclaimer: "rockstargames-sites-rockstargamesa88581f8d3bc749026f10eb47ec6aeb2"
        },
        h = (y = () => (0, d.jsxs)("div", {
          className: u.jpwrapper,
          children: [(0, d.jsx)(k, {
            className: u.responsiveImage,
            image: {
              desktop: s(29422)
            }
          }), (0, d.jsxs)(g, {
            className: [u.body, u.inner, u.gap_sm].join(" "),
            children: [(0, d.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, d.jsxs)("p", {
              children: [(0, d.jsx)("a", {
                className: u.link,
                href: "https://www.rockstargames.com/jp/newswire/article/175k8294o31ooo/gta-online-san-andreas-mercenaries-now-available",
                children: "「GTAオンライン：サンアンドレアスの傭兵」"
              }), "のリリースを記念して、日本のプレイヤーだけが参加できる初めてのコミュニティチャレンジを開催します。"]
            }), (0, d.jsx)("p", {
              children: "今から9月7日までに密輸貨物の売却ミッションに参加して密輸貨物をさばき、合計GTAマネー3億ドルを売り上げ、GTAマネー50万ドルを解除しましょう。"
            }), (0, d.jsx)("p", {
              children: "密輸貨物を入手すると、格納庫内のパソコンからフリートレード運送のサイトを使って売却ミッションを開始できるようになります。"
            }), (0, d.jsx)(k, {
              image: {
                desktop: s(68167)
              }
            }), (0, d.jsx)("h1", {
              children: "お気に入りのクリエイターを応援しよう"
            }), (0, d.jsx)("p", {
              children: "YouTubeとTwitchで活躍する日本のトップクリエイターたちが、8月31日から9月3日まで4日間のライブストリーミングイベントに参加します。 クリエイターには毎日チャレンジが課せられ、成功すれば日本のプレイヤー全員に追加でGTAマネー200万ドルが贈られます。"
            }), (0, d.jsx)(k, {
              className: u.bodyPadding,
              image: {
                desktop: s(8178)
              }
            }), (0, d.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, d.jsx)(k, {
              className: u.bodyPadding,
              image: {
                desktop: s(1834)
              }
            }), (0, d.jsxs)("p", {
              children: ["さらなる詳細は、", (0, d.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: u.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, d.jsx)("p", {
              className: u.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, d.jsx)(b.A, {
              condensed: !0,
              titleSlug: "gta-online"
            })]
          })]
        }), e => (0, d.jsx)(i, {
          children: (0, d.jsx)(y, Object.assign({}, e))
        }));
      var y
    },
    8820: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    14572: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    68167: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1ed2a51b04e0bb000bcf1496dcd3f784.png"
    },
    29422: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca34dd285d3d7a6cf9a329c73a274599.jpg"
    },
    8178: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/442e7c26891ff37ae957573626516d06.png"
    },
    1834: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8ae4db5a481080ebfd341e18dbfb2277.png"
    }
  }
]);