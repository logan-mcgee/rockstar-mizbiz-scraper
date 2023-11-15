(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [110], {
    8601: (e, a, t) => {
      "use strict";
      t.d(a, {
        IntlProvider: () => s,
        useIntl: () => n.Z
      });
      var n = t(2596),
        r = t(927),
        i = t(9894),
        l = t(3705);
      const s = e => {
        let {
          locales: a,
          lang: t,
          children: n
        } = e;
        const s = (0, r.useMemo)((() => function(e) {
            const a = e.split(/[-_]/);
            return a[a.length - 1] = a[a.length - 1].toLowerCase(), a
          }(t)), [t]),
          d = (0, r.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, s[1])), [t, a]);
        return (0, l.jsx)(i.Z, {
          messages: d,
          locale: s[0],
          defaultLocale: "en",
          children: n
        }, s[0])
      };
      t(3657)
    },
    251: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => i
      });
      var n = t(8976);
      var r = t(3705);
      const i = () => (0, r.jsx)("div", {
        className: "rockstargames-modules-core-videoplayeref5ba014e1e3a01aa5c8e25fa6540276",
        children: (0, r.jsx)(n.LoadingAnimation, {})
      })
    },
    9612: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => i
      });
      const n = {
        wrapper: "rockstargames-modules-core-videoplayerac3995f20f4dee3781d06570d31a5428",
        large: "rockstargames-modules-core-videoplayerb74dc3bbd63da46a6ea045c3e156605f",
        badge: "rockstargames-modules-core-videoplayerce2210d7b8f514c0fc41fd1d765f7009",
        hero: "rockstargames-modules-core-videoplayerdad416e254ac1fa6919886793f1926d2",
        stdWrapper: "rockstargames-modules-core-videoplayere4d2076b827def3ba5eca64f2c8fe197"
      };
      var r = t(3705);
      const i = e => {
        let {
          children: a,
          hero: t = !1,
          wrapper: i = !0
        } = e;
        return (0, r.jsx)("div", {
          className: [n.wrapper, t ? n.hero : "", i ? n.stdWrapper : ""].join(" "),
          children: a
        })
      }
    },
    9110: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => G
      });
      var n = t(927),
        r = t(4175),
        i = t(8976),
        l = t(7194),
        s = t(9929),
        d = t(6711),
        o = t(906);
      var c = t(3705);
      const u = e => {
          let {
            isClr: a
          } = e;
          const {
            state: t
          } = (0, o.O2)(), {
            running: n
          } = t;
          return n ? null : (0, c.jsx)("div", {
            className: a ? "rockstargames-modules-core-videoplayere810b41a3b7903854096f7b9b6a69796" : "rockstargames-modules-core-videoplayerdb1084cfe44aa5f4b556798868f0a102"
          })
        },
        m = () => {
          const {
            state: e
          } = (0, o.O2)(), {
            videoData: a
          } = e, {
            video: t
          } = a;
          return (0, c.jsx)("div", {
            className: "rockstargames-modules-core-videoplayerd1a38b82b1e152f9573cae444887d068",
            style: {
              background: `url(${t?.screencap}) center/contain no-repeat`
            }
          })
        };
      var v = t(8601);
      const f = () => {
          const {
            state: e
          } = (0, o.O2)(), {
            playerEnded: a,
            videoChangeCallback: t,
            videoData: n
          } = e;
          if (!a) return null;
          const {
            related: r
          } = n;
          return r.results.length ? (0, c.jsx)("div", {
            className: "rockstargames-modules-core-videoplayerc63b78296b87d5ca7c8de75a1e124a4f",
            children: (0, c.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerdb4dd4db396bd2f75fcadc4ffb1c5527",
              children: r.results.map((e => {
                return (0, c.jsxs)("div", {
                  onClick: () => t(e.id),
                  onKeyUp: a => {
                    t(e.id)
                  },
                  className: "rockstargames-modules-core-videoplayerc446e13b5eea47944f3ae894b3ce1e0c",
                  tabIndex: 0,
                  role: "button",
                  children: [(0, c.jsx)("div", {
                    className: "rockstargames-modules-core-videoplayera6b639d56dbb1317f639711cd8d264f5",
                    style: {
                      background: `url(${a=e.screencap,`${a}?im=Resize=400`}) no-repeat center/contain`
                    }
                  }), (0, c.jsx)("div", {
                    className: "rockstargames-modules-core-videoplayerde3309e32d8e2e4556a08a0edd500e32",
                    children: e.title
                  })]
                }, e.id);
                var a
              }))
            })
          }) : null
        },
        p = {
          info: "rockstargames-modules-core-videoplayerf2532a27e783375ca6ec4df7516cb259",
          title: "rockstargames-modules-core-videoplayerced5a16a281f96e6fd9e265cdc39a74c",
          hidden: "rockstargames-modules-core-videoplayere2b53b1196cdc6f83beccf9fa32285e1",
          screenUmute: "rockstargames-modules-core-videoplayere7c269ca55f452fb03db99a68415f8a7",
          brand: "rockstargames-modules-core-videoplayera6801fd84c9be972cda8d9c829c0234c",
          clr: "rockstargames-modules-core-videoplayera9a731ff7e9197818801b65c03d6d68a",
          rockstar: "rockstargames-modules-core-videoplayere42be20c24119e13fcbb538d82cf6888"
        },
        k = () => {
          const {
            state: e,
            track: a
          } = (0, o.O2)(), {
            brand: t,
            videoData: n
          } = e, {
            video: r
          } = n, i = () => a("User Event", "Rockstar click");
          let l, s, d;
          return "clr" === t ? (s = "CircoLoco Records", l = "https://circolocorecords.com", d = l) : (s = "Rockstar Games", l = "https://www.rockstargames.com/", d = `${document.location.origin}/videos/${r.id}`), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("a", {
              className: [p.brand, p[t]].join(" "),
              href: l,
              target: "_blank",
              onClick: i,
              onKeyUp: i,
              rel: "noreferrer",
              tabIndex: 0,
              children: s
            }), (0, c.jsx)("a", {
              target: "_blank",
              href: d,
              onClick: () => {
                a(2, "Video title click")
              },
              rel: "noreferrer",
              children: `${r.game.title}: ${r.title}`
            })]
          })
        },
        g = () => {
          const {
            formatMessage: e
          } = (0, v.useIntl)(), {
            state: a
          } = (0, o.O2)(), {
            windowHeight: t,
            windowWidth: r
          } = (0, s.useWindowResize)(), [i, l] = (0, n.useState)(), [d, u] = (0, n.useState)(), m = (0, n.useRef)(null), {
            controlsActive: g,
            idle: b,
            muteMessageNeeded: y,
            playerEnded: h,
            playerRef: N,
            running: x,
            videoData: S
          } = a, {
            video: E
          } = S;
          return (0, n.useEffect)((() => {
            l(N?.current?.clientHeight), u(m?.current?.clientHeight)
          }), [N?.current, m?.current, r, t]), E ? (0, c.jsxs)("div", {
            className: [p.info, !g || b ? p.hidden : ""].join(" "),
            style: {
              "--effective-player-height": `${i}px`,
              "--effective-title-height": `${d}px`
            },
            children: [(0, c.jsx)("div", {
              className: p.title,
              ref: m,
              children: (0, c.jsx)(k, {})
            }), y && x && (0, c.jsx)("div", {
              className: p.screenUmute,
              children: `${(0,o.b1)()?e(o.sY.videoplayer_unmute_tap):e(o.sY.videoplayer_unmute_click)}`
            }), h && (0, c.jsx)(f, {})]
          }) : null
        },
        b = e => {
          let {
            isClr: a = !1
          } = e;
          const {
            setState: t,
            track: n
          } = (0, o.O2)(), r = () => {
            t("muteMessageNeeded", !1), t("playing", !0), t("volume", 1), n(2, "Screencap clicked to start")
          };
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-videoplayereaff9706718a1e24475880269eb3552c",
            role: "button",
            onClick: r,
            onKeyUp: e => {
              r()
            },
            tabIndex: 0,
            children: [(0, c.jsx)(m, {}), (0, c.jsx)(u, {
              isClr: a
            }), (0, c.jsx)(g, {})]
          })
        };
      var y = t(251),
        h = t(9612);
      const N = {
          settings: "rockstargames-modules-core-videoplayera3719b13afdb84ee93e092e444f157e7",
          disabledControlItem: "rockstargames-modules-core-videoplayerbaf04b530c4f9e9669b3ad80fc450ba4",
          menu: "rockstargames-modules-core-videoplayerc485bae32b284a8bd40f8cbbae2eb3c0",
          activeFileButton: "rockstargames-modules-core-videoplayerf89f81d0857da697b6db59eb9623d0e8",
          fileMenuOpen: "rockstargames-modules-core-videoplayere32f5598d88526289145cc090027337a"
        },
        x = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.O2)(), {
            fileIndex: n,
            playerEnded: r,
            settingsMenuOpen: i,
            videoData: l,
            videoRef: s
          } = e, {
            video: d
          } = l, u = () => {
            t(2, "Settings clicked"), a("settingsMenuOpen", !i)
          };
          return (0, c.jsx)("div", {
            role: "button",
            onClick: u,
            onKeyUp: u,
            tabIndex: 0,
            className: [N.settings, r ? N.disabledControlItem : ""].join(" "),
            children: (0, c.jsx)("div", {
              className: [N.menu, i ? N.fileMenuOpen : ""].join(" "),
              children: d?.files?.map(((e, r) => (0, c.jsx)("button", {
                className: n === r ? N.activeFileButton : "",
                onClick: n => {
                  t(2, `Resolution changed to ${e.resolution}`), a("savedTime", s?.current?.currentTime), a("fileIndex", r), a("settingsMenuOpen", !1), n.stopPropagation()
                },
                type: "button",
                children: e.resolution
              }, e.src)))
            })
          })
        },
        S = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.O2)(), {
            shareData: n,
            shareOpen: r
          } = e, i = async () => {
            t(2, "Share clicked"), navigator?.share ? await (navigator?.share?.(n)) : a("shareOpen", !r)
          };
          return (0, c.jsx)("div", {
            onClick: i,
            onKeyUp: i,
            role: "button",
            className: "rockstargames-modules-core-videoplayerac8082e6dc15524c5a750fb80408bf0d",
            tabIndex: 0,
            "aria-label": "Share this video"
          })
        },
        E = {
          fullscreen: "rockstargames-modules-core-videoplayerb49c3e5fc957c1ae509b282d4dc45ff5",
          disabledControlItem: "rockstargames-modules-core-videoplayerf8dc03b1d8a6428ba9dd9c533b8f7286",
          fullscreenOn: "rockstargames-modules-core-videoplayerda0a91ce9c33c719a522ec4e13df8089",
          fullscreenOff: "rockstargames-modules-core-videoplayerecac6fe778ba66109fa0d81e385dc651"
        },
        j = () => {
          const {
            state: e,
            setState: a
          } = (0, o.O2)(), {
            fullscreen: t,
            playerEnded: n
          } = e, r = () => {
            a("fullscreen", !t)
          };
          return (0, c.jsx)("div", {
            role: "button",
            "aria-label": "Fullscreen toggle",
            tabIndex: 0,
            onClick: r,
            onKeyUp: e => {
              r()
            },
            className: [E.fullscreen, t ? E.fullscreenOn : E.fullscreenOff, n ? E.disabledControlItem : ""].join(" ")
          })
        },
        w = {
          playPause: "rockstargames-modules-core-videoplayere45ad1f6394d38b83eafb3e059c1983f",
          disabledControlItem: "rockstargames-modules-core-videoplayerfd04bac34ebe83f4b7feb70560dd1e46",
          playPauseReplay: "rockstargames-modules-core-videoplayerce15be03efdd596a6892e4507492b96b",
          playPausePlaying: "rockstargames-modules-core-videoplayera5b529f22517b42982ea97fc9ec1f303",
          playPausePaused: "rockstargames-modules-core-videoplayerdc339f324cbf024b7eb275a0a26be7cc"
        },
        C = () => {
          const {
            state: e,
            setState: a,
            replay: t,
            track: n
          } = (0, o.O2)(), {
            playerEnded: r,
            playing: i
          } = e, l = i ? w.playPausePlaying : w.playPausePaused, s = () => {
            r ? (n(2, "Replay clicked"), t()) : (n(2, "Toggle play/pause clicked"), a("playing", !i))
          };
          return (0, c.jsx)("div", {
            className: [w.playPause, r ? w.playPauseReplay : l].join(" "),
            onClick: s,
            onKeyUp: e => {
              s()
            },
            role: "button",
            tabIndex: 0,
            "aria-label": "Play/pause toggle"
          })
        };
      var _ = t(6588),
        F = t.n(_);
      const T = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.O2)(), {
            buffered: r,
            idle: i,
            lastPlayingState: l,
            playerEnded: s,
            playing: d,
            playerRef: u,
            progressBarState: m,
            timing: v
          } = e, f = (0, n.useRef)(null), p = (0, n.useRef)(null), k = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = null;
            null !== e && (r = e / p.current.clientWidth, r = Math.min(1, Math.max(0, r))), a("progressBarState", {
              pct: r,
              shouldPause: t,
              lastEvent: n
            })
          };
          if ((0, n.useEffect)((() => {
              s || m.pct || !d || a("controlsActive", !i)
            }), [i, s, m.pct, d]), (0, n.useEffect)((() => {
              a("currentTime", m.pct * v.duration)
            }), [m.pct, v.duration]), (0, n.useEffect)((() => {
              const {
                lastEvent: e,
                pct: t,
                shouldPause: n
              } = m;
              t ? (n && (null === l && a("lastPlayingState", d), a("playing", !1)), e && a("progressBarState", {})) : null !== l && (a("playing", l), a("lastPlayingState", null))
            }), [l, m, v.duration, d]), (0, n.useEffect)((() => {
              const e = f.current;
              if (null === e) return;
              const a = e.getContext("2d"),
                t = e.getBoundingClientRect();
              if (e.width = t.width, e.height = t.height, a.clearRect(0, 0, t.width, t.height), a.fillStyle = "rgba(255, 255, 255, 0.5)", !r || !r.length) return;
              const n = t.width / v.duration;
              for (let e = 0; e < r.length; e += 1) {
                const i = r.start(e),
                  l = r.end(e),
                  s = i * n,
                  d = l * n;
                i <= v.current && v.current <= l && a.fillRect(s, 0, d - s, t.height)
              }
            }), [r, f, v.duration, v.current]), (0, n.useEffect)((() => {
              if (!p.current) return;
              const e = new(F())(p.current),
                a = e => {
                  !s && u.current.contains(e.srcEvent.target) ? k(e.srcEvent.offsetX, !0) : k()
                },
                t = () => {
                  k()
                };
              return e.on("pan", a), e.on("panend", t), () => {
                e.off("pan", a), e.off("panend", t)
              }
            }), [u, p, s]), s) return null;
          let g = 0;
          return (0, c.jsxs)("div", {
            ref: p,
            role: "button",
            tabIndex: 0,
            "aria-label": "Progress bar",
            onKeyUp: e => {
              g = e.touches[0].clientX
            },
            className: "rockstargames-modules-core-videoplayerbb31368180b9a6a167d1edf401d1bf18",
            onTouchStart: () => {},
            onTouchEnd: e => {
              e.changedTouches[0].clientX !== g && (t(2, "Time changed"), k(e.changedTouches[0].clientX - g, !1, !0)), g = 0
            },
            onClick: e => {
              t(2, "Time changed"), k(e.nativeEvent.offsetX, !1, !0)
            },
            children: [(0, c.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerfab8ca2dc18607a75c7aa655a424a29e"
            }), (0, c.jsx)("canvas", {
              ref: f
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerb814a8ed52eecb27a5132cf427836b25",
              style: {
                "--pct-current": v.current / v.duration
              }
            })]
          })
        },
        O = {
          time: "rockstargames-modules-core-videoplayerd8208db9e68317cc0e4055c94cf06a62",
          disabledControlItem: "rockstargames-modules-core-videoplayeread56ab78db230296c4841fcdb5e7032",
          clr: "rockstargames-modules-core-videoplayerc30193a8318e8f564adaf8790bd6a606"
        },
        I = e => {
          const a = new Date(1e3 * e),
            t = a.getUTCMinutes(),
            n = a.getSeconds();
          return `${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`
        },
        V = () => {
          const {
            state: e
          } = (0, o.O2)(), {
            brand: a,
            timing: t
          } = e, {
            current: n,
            duration: r
          } = t;
          return (0, c.jsx)("div", {
            className: [O.time, O[a]].join(" "),
            children: `${I(n)} / ${I(r)}`
          })
        },
        $ = {
          volumen: "rockstargames-modules-core-videoplayere5226d97259c2e7fd6fe985d1810a92f",
          disabledControlItem: "rockstargames-modules-core-videoplayercdc26301a887840b92faa3ed5e97742a",
          volumeMuted: "rockstargames-modules-core-videoplayerfd88c7b86a41dd844cc66fc08c567f53",
          volumeSomeVolume: "rockstargames-modules-core-videoplayerf7ff818f67aa6b3e33a104c344406d4b",
          volumeMax: "rockstargames-modules-core-videoplayerc8da8f35df4a4419cb7aee5f76156f4e"
        },
        R = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.O2)(), {
            playerEnded: n,
            volume: r
          } = e, i = () => {
            a("volume", r > 0 ? 0 : 1), t(2, "Volume changed")
          };
          return (0, c.jsx)("div", {
            role: "button",
            tabIndex: 0,
            onClick: i,
            onKeyUp: i,
            "aria-label": "Mute / unmute toggle",
            className: [$.volumen, 0 === r ? $.volumeMuted : $.volumeMax, n ? $.disabledControlItem : ""].join(" ")
          })
        },
        M = {
          controls: "rockstargames-modules-core-videoplayera57fc4d51326b02ec4e376b37b292ee0",
          controlsInactive: "rockstargames-modules-core-videoplayerac12e314164c4a1536a62298abd2a61a",
          controlsBottom: "rockstargames-modules-core-videoplayerdf29c8beebb85679a06e63f3b64acf75"
        },
        L = () => {
          const {
            state: e
          } = (0, o.O2)(), {
            controlsActive: a
          } = e;
          return (0, c.jsxs)("div", {
            className: [M.controls, a ? "" : M.controlsInactive].join(" "),
            children: [(0, c.jsx)(T, {}), (0, c.jsxs)("div", {
              className: M.controlsBottom,
              children: [(0, c.jsx)(C, {}), (0, c.jsx)(R, {}), (0, c.jsx)(V, {}), (0, c.jsx)(x, {}), (0, c.jsx)(S, {}), (0, c.jsx)(j, {})]
            })]
          })
        },
        P = {
          screenShare: "rockstargames-modules-core-videoplayerd06d2f79be96f17959e71796a2540398",
          shareScreenActive: "rockstargames-modules-core-videoplayercd90c974e2560ddadb0b82aca1a8bbcc",
          shareScreenContent: "rockstargames-modules-core-videoplayerbad8b98e42322bec76240d4b75a6d055",
          shareClose: "rockstargames-modules-core-videoplayera68411ee5bbc2760905ab89bc40dd634",
          shareSocial: "rockstargames-modules-core-videoplayerb3359b8c32c2eea634ddd2767eb6454e",
          "socialLink-facebook": "rockstargames-modules-core-videoplayere5977ab86be94298818e222c8d44411e",
          "socialLink-twitter": "rockstargames-modules-core-videoplayera19e6e6daa8d2d749fcb0828f7aa33d7",
          "socialLink-instagram": "rockstargames-modules-core-videoplayerba1bb3cd5e524942f1696801ef17f530",
          "socialLink-reddit": "rockstargames-modules-core-videoplayere07f242f4d77c0cee3b8d6c1cec08862",
          "socialLink-linkedin": "rockstargames-modules-core-videoplayere2ed30e6a553d8f28413dd4afb1a9af8",
          shareCopy: "rockstargames-modules-core-videoplayera0856ff8afbf61ad42faee798799b392"
        },
        D = () => {
          const {
            formatMessage: e
          } = (0, v.useIntl)(), {
            state: a,
            setState: t,
            track: n
          } = (0, o.O2)(), {
            shareData: r,
            shareOpen: i
          } = a;
          if (!r) return null;
          const {
            title: l,
            url: s
          } = r, d = () => {
            n(2, "Share screen closed"), t("shareOpen", !1)
          };
          return (0, c.jsx)("div", {
            className: [P.screenShare, i ? P.shareScreenActive : ""].join(" "),
            children: (0, c.jsxs)("div", {
              className: P.shareScreenContent,
              children: [(0, c.jsx)("h3", {
                children: e(o.sY.videoplayer_share_title)
              }), (0, c.jsx)("div", {
                role: "button",
                tabIndex: 0,
                "aria-label": "Close share screen.",
                onClick: d,
                onKeyUp: d,
                className: P.shareClose
              }), (0, c.jsx)("div", {
                className: P.shareSocial,
                children: [{
                  name: "facebook",
                  template: "https://www.facebook.com/sharer/sharer.php?u={url}"
                }, {
                  name: "twitter",
                  template: "https://twitter.com/intent/tweet?url={url}&text={title}&via=RockstarGames"
                }, {
                  name: "reddit",
                  template: "http://www.reddit.com/submit?url={url}&title={title}&r=gaming"
                }, {
                  name: "linkedin",
                  template: "https://www.linkedin.com/shareNewswireArticle?url={url}&title={title}"
                }].map((e => {
                  let {
                    name: a,
                    template: t
                  } = e;
                  return (0, c.jsx)("a", {
                    target: "_blank",
                    onClick: () => {
                      n(2, `Share - ${a} click`)
                    },
                    onKeyUp: () => {
                      n(2, `Share - ${a} click`)
                    },
                    href: t.replace("{title}", escape(l)).replace("{url}", escape(s)),
                    className: P[`socialLink-${a}`],
                    rel: "noreferrer",
                    tabIndex: 0,
                    "aria-label": `Share to ${a}`,
                    children: a
                  }, a)
                }))
              }), [{
                type: "url",
                text: r.url
              }, {
                type: "embed",
                text: r.embed
              }].map((a => (0, c.jsxs)("div", {
                className: P.shareCopy,
                children: [(0, c.jsx)("input", {
                  value: a.text,
                  readOnly: !0
                }), navigator?.clipboard?.writeText ? (0, c.jsx)("button", {
                  type: "button",
                  onClick: async () => {
                    await navigator.clipboard.writeText(a.text), n(2, `Share ${a.type} copied`)
                  },
                  children: e(o.sY.videoplayer_share_copy)
                }) : ""]
              }, a.type)))]
            })
          })
        },
        A = () => {
          const {
            state: e,
            setState: a,
            track: t,
            trackVideo: r
          } = (0, o.O2)(), {
            controlsActive: i,
            currentTime: l,
            fileIndex: s,
            muteMessageNeeded: d,
            onVideoComplete: u,
            playerEnded: m,
            playing: v,
            savedTime: f,
            videoData: p,
            volume: k,
            autoplay: g
          } = e, {
            video: b
          } = p, [y, h] = (0, n.useState)(null), N = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            const e = b?.files?.[s]?.src ?? null;
            e && h(e)
          }), [s, b]), (0, n.useEffect)((() => {
            a("videoRef", N)
          }), [N]), (0, n.useEffect)((() => {
            l && N.current && (N.current.currentTime = l, a("currentTime", null))
          }), [l, N?.current]), (0, n.useEffect)((() => {
            const e = N?.current;
            if (!e) return;
            const n = e => {
                a("meta", e)
              },
              r = () => {
                0 !== f && (a("currentTime", f), a("savedTime", null)), a("playerEnded", !1)
              },
              i = () => {
                a("timing", {
                  duration: (Number.isNaN(e.duration) ? 0 : e.duration) ?? 0,
                  current: (Number.isNaN(e.currentTime) ? 0 : e.currentTime) ?? 0
                })
              },
              l = () => {
                a("volume", e.volume)
              },
              s = () => {
                t(1, "Video completed"), a("playing", !1), u ? u?.() : a("playerEnded", !0)
              },
              d = () => {
                a("playing", !1), a("fullscreen", !1)
              },
              o = () => {
                a("buffered", e.buffered)
              };
            return e.addEventListener("loadeddata", r), e.addEventListener("loadedmetadata", n), e.addEventListener("timeupdate", i), e.addEventListener("volumechange", l), e.addEventListener("ended", s), e.addEventListener("progress", o), e.addEventListener("webkitendfullscreen", d), () => {
              e.removeEventListener("loadeddata", r), e.removeEventListener("loadedmetadata", n), e.removeEventListener("timeupdate", i), e.removeEventListener("volumechange", l), e.removeEventListener("ended", s), e.removeEventListener("progress", o), e.removeEventListener("webkitendfullscreen", d)
            }
          }), [v, f, N?.current]), (0, c.jsx)("video", {
            ref: N,
            autoPlay: !0,
            className: "rockstargames-modules-core-videoplayerc29b82d22a56d8befe69a08bd4fe031e",
            src: y,
            muted: 0 === k,
            playsInline: !0,
            onTouchEnd: () => {
              t(2, "Video tapped"), m || d || a("controlsActive", !i)
            },
            onClick: () => {
              (0, o.b1)() || (t(2, "Video clicked"), m || d || a("playing", !v))
            }
          })
        },
        U = {
          videoplayer: "rockstargames-modules-core-videoplayerf5143fc6816cced86d0c38ce84f780b3",
          videoplayerEnded: "rockstargames-modules-core-videoplayerc74495a5db05394ce738c8a00ab5d3eb",
          videoplayerNotRunning: "rockstargames-modules-core-videoplayerc50f5c170e71249e698f93993c7e5077",
          controls: "rockstargames-modules-core-videoplayera92769e57d8a11d308f03b0f0a24fd6b"
        },
        B = (0, s.withLocale)((() => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.O2)(), {
            autoplayUnmuteCheck: r,
            context: i,
            controlsActive: l,
            fullscreen: s,
            meta: d,
            muteMessageNeeded: u,
            playerEnded: m,
            playing: v,
            running: f,
            settingsMenuOpen: p,
            shareOpen: k,
            videoRef: b,
            volume: y
          } = e, [h, N] = (0, n.useState)(!1), x = (0, n.useRef)(null), S = (0, n.useRef)(null), E = () => document?.fullscreenEnabled ?? !1, j = () => "string" == typeof document.fullscreenElement?.nodeName ?? !1, w = () => {
            x.current && clearInterval(x?.current)
          }, C = () => {
            w(), a("idle", !1), x.current = setTimeout((() => {
              h || a("idle", !0)
            }), 3e3)
          };
          return (0, n.useEffect)((() => {
            C()
          }), [h]), (0, n.useEffect)((() => {
            N(u || m || p || k)
          }), [u, m, p, k]), (0, n.useEffect)((() => {
            a("playerRef", S)
          }), [S]), (0, n.useEffect)((() => {
            if (!S?.current || !b?.current) return;
            const e = b.current,
              a = S.current,
              {
                webkitDisplayingFullscreen: t,
                webkitSupportsFullscreen: n
              } = e,
              r = () => {
                s ? a.requestFullscreen() : document.exitFullscreen()
              };
            s ? E() && !j() ? r() : n && !t && b.current.webkitEnterFullscreen() : E() && j() ? r() : n && t && b.current.webkitExitFullscreen()
          }), [s, S, b]), (0, n.useEffect)((() => {
            const e = () => {
                C(), a("fullscreen", j()), t(1, j() ? "Fullscreen entered" : "Fullscreen exited")
              },
              n = e => {
                m || u || 32 !== parseInt(e.code, 10) && "Space" !== e.code || a("playing", !v)
              };
            return document.addEventListener("keypress", n, !1), document.addEventListener("fullscreenchange", e), () => {
              document.removeEventListener("keypress", n, !1), document.removeEventListener("fullscreenchange", e)
            }
          }), [v, m, u]), (0, n.useEffect)((() => {
            (async () => {
              if (b?.current && d)
                if (v) try {
                  await b.current.play()
                } catch (e) {
                  a("volume", 0), a("muteMessageNeeded", !0), a("autoplayUnmuteCheck", !0)
                } else b.current.pause()
            })()
          }), [r, d, v, b?.current]), (0, n.useEffect)((() => {
            b?.current && (b.current.volume = y, 0 !== b.current.volume && a("muteMessageNeeded", !1))
          }), [y, b]), (0, n.useEffect)((() => {
            l || a("settingsMenuOpen", !1)
          }), [l]), (0, n.useEffect)((() => {
            k && a("settingsMenuOpen", !1)
          }), [k]), (0, n.useEffect)((() => {
            p && a("shareOpen", !1)
          }), [p]), (0, n.useEffect)((() => {
            m && (a("fullscreen", !1), a("settingsMenuOpen", !1), a("shareOpen", !1), a("controlsActive", !0), a("progressBarState", {}))
          }), [m]), (0, n.useEffect)((() => () => {
            w()
          }), []), (0, c.jsxs)("div", {
            role: "presentation",
            ref: S,
            "data-context": i,
            className: [U.videoplayer, m ? U.videoplayerEnded : "", f ? "" : U.videoplayerNotRunning].join(" "),
            onClick: () => {
              u && a("volume", 1)
            },
            onMouseLeave: C,
            onMouseEnter: C,
            onMouseMove: C,
            onTouchEnd: w,
            onTouchStart: w,
            children: [(0, c.jsx)(A, {}), (0, c.jsx)(g, {}), (0, c.jsx)(D, {}), (0, c.jsx)(L, {})]
          })
        })),
        K = e => {
          let {
            id: a
          } = e;
          return (0, c.jsx)("iframe", {
            className: "rockstargames-modules-core-videoplayere46df15c22bf87cf14b24f9e7c415e24",
            src: `https://www.youtube.com/embed/${a}?autoplay=1`,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            title: "Rockstar Games on YouTube"
          })
        },
        Z = e => {
          let {
            aspectRatio: a = 16 / 9,
            autoplay: t = !1,
            context: i = "site",
            id: s,
            hero: u = !1,
            isClr: m = !1,
            resolution: v = "_auto",
            wrapper: f = !0,
            start: p = 0,
            videoChangeCallback: k,
            onVideoComplete: g,
            locale: N
          } = e;
          const {
            state: x,
            setState: S,
            track: E
          } = (0, o.O2)(), {
            autoplay: j,
            brand: w,
            fileIndex: C,
            playing: _
          } = x, F = (0, o.CP)({
            id: s,
            locale: N
          }), {
            loading: T,
            video: O
          } = F, I = (0, d.useGtmTrack)(), V = (0, l.useAgegated)(), $ = (0, r.useNavigate)();
          return (0, n.useEffect)((() => {
            S("onVideoComplete", g)
          }), [g]), (0, n.useEffect)((() => {
            if (!O) return;
            const {
              files: e
            } = O, a = e.findIndex((e => e.resolution === v)), t = e.findIndex((e => e.default));
            S("fileIndex", -1 !== a ? a : -1 !== t ? t : 0)
          }), [v, O]), (0, n.useEffect)((() => {
            if (!O) return;
            let e;
            e = "clr" === w ? "https://circolocorecords.com" : `https://www.rockstargames.com/videos/${O.id}?embed`;
            const a = {
              title: O.title,
              text: O.description,
              url: e,
              embed: `<iframe src="https://www.rockstargames.com/videoplayer/?id=${O.id}&locale=en_us&resolution=${O.files[C]?.resolution}&embed" allowfullscreen style="width:640px; height:360px; border:none;"title="Rockstar Games Video: ${O.title}"></iframe>`
            };
            S("shareData", a)
          }), [w, C, O]), (0, n.useEffect)((() => {
            if (_) {
              if (S("autoplay", !0), S("running", !0), !O) return;
              I.track({
                event: "video_autoplay",
                video_id: s,
                video_title: O.title,
                video_type: O.group_type,
                video_language: N
              })
            }
          }), [_]), (0, n.useEffect)((() => {
            const e = t || j || !1;
            E(1, "Video started"), S("controlsActive", !0), S("currentTime", 0), S("fullscreen", !1), S("idle", !1), S("meta", null), S("playerEnded", !1), S("playing", e), S("progressBarState", {}), S("settingsMenuOpen", !1), S("shareOpen", !1), S("videoId", s), O && (I.track({
              event: "video_started",
              video_id: s,
              video_title: O.title,
              video_type: O.group_type,
              video_language: N
            }), e && E(1, `Autoplay video with id: [${s}]`, `autoplay[videoId: ${s}]`))
          }), [s]), (0, n.useEffect)((() => {
            S("videoChangeCallback", k || (e => {
              $(`../videos/${e}`)
            }))
          }), [k]), (0, n.useEffect)((() => {
            S("currentTime", p)
          }), [p]), (0, n.useEffect)((() => {
            const {
              video: e
            } = F;
            923 === e?.game?.id && S("brand", "clr"), S("videoData", F)
          }), [JSON.stringify(F)]), (0, n.useEffect)((() => {
            S("aspectRatio", a)
          }), [a]), (0, n.useEffect)((() => {
            S("context", i)
          }), [i]), (0, n.useEffect)((() => {
            S("resolution", v)
          }), [v]), !O || T ? (0, c.jsx)(h.Z, {
            hero: u,
            wrapper: f,
            children: (0, c.jsx)(y.Z, {})
          }) : ["gtaosession", "gtaostream", "community"].includes(O.group_type) ? O.agegated ? V((0, c.jsx)(K, {
            id: O.youtube_id
          })) : (0, c.jsx)(K, {
            id: O.youtube_id
          }) : j ? O.agegated ? (0, c.jsx)(h.Z, {
            hero: u,
            wrapper: f,
            children: V((0, c.jsx)(B, {}), {
              bgImg: O.screencap
            })
          }) : (0, c.jsx)(h.Z, {
            hero: u,
            wrapper: f,
            children: (0, c.jsx)(B, {})
          }) : (0, c.jsx)(h.Z, {
            hero: u,
            wrapper: f,
            children: (0, c.jsx)(b, {
              isClr: m
            })
          })
        },
        G = (0, s.withGtmTracking)((0, i.withSimpleErrorBoundary)((e => (0, c.jsx)(o.tl, {
          children: (0, c.jsx)(Z, {
            ...e
          })
        })), "Something went wrong with the video player."))
    },
    906: (e, a, t) => {
      "use strict";
      t.d(a, {
        tl: () => v,
        b1: () => g,
        sY: () => n.videoplayer,
        CP: () => k,
        O2: () => f
      });
      var n = t(3111),
        r = t(927),
        i = t(8061),
        l = t(4859),
        s = t(6711),
        d = t(9929);
      const o = {
          aspectRatio: 16 / 9,
          autoplay: !1,
          autoplayUnmuteCheck: !1,
          brand: "rockstar",
          buffered: 0,
          context: "",
          controlsActive: !0,
          currentTime: 0,
          fileIndex: 0,
          fullscreen: !1,
          idle: !1,
          lastPlayingState: null,
          meta: null,
          muteMessageNeeded: null,
          playerEnded: !1,
          playerRef: null,
          playing: !1,
          progressBarState: {},
          resolution: "_auto",
          running: !1,
          savedTime: 0,
          settingsMenuOpen: !1,
          shareData: null,
          shareOpen: !1,
          startTime: 0,
          timing: {
            current: 0,
            duration: 0
          },
          track: () => null,
          videoId: null,
          videoChangeCallback: null,
          videoData: {
            loading: !0,
            video: null,
            related: null
          },
          videoRef: null,
          volume: 1
        },
        c = {};
      var u = t(3705);
      const m = (0, r.createContext)(),
        v = e => {
          let {
            children: a
          } = e;
          const [t] = (0, r.useState)((0, i.Z)()), n = (e => {
            let {
              id: a
            } = e;
            const t = c[a] ?? (c[a] = (0, l.makeVar)(o)),
              n = (e, a) => t({
                ...t(),
                [e]: a
              }),
              i = (0, l.useReactiveVar)(t),
              u = (0, s.useGtmTrack)(),
              m = (0, d.useLocale)(),
              {
                videoData: v
              } = i,
              f = (0, r.useCallback)(((e, a, t) => {
                const {
                  video: n
                } = v;
                if (!n || !u) return;
                const {
                  id: r,
                  title: i
                } = n;
                u.track({
                  event: "trackEvent",
                  eventCategory: 1 === e ? "Player Event" : "User Event",
                  eventAction: a,
                  eventLabel: `${r}(${m}) - ${i}`,
                  eventValue: t
                })
              }), [m, v]);
            return {
              state: i,
              setState: n,
              replay: () => {
                n("playerEnded", !1), n("playing", !0), n("currentTime", 0), n("timing", {
                  current: 0,
                  duration: 0
                })
              },
              track: f
            }
          })({
            id: t
          });
          return (0, u.jsx)(m.Provider, {
            value: n,
            children: a
          })
        },
        f = () => (0, r.useContext)(m);
      var p = t(2520);
      const k = e => {
          let {
            id: a,
            locale: t
          } = e;
          const [n, i] = (0, r.useState)({}), [s, d] = (0, r.useState)(null), [o, c] = (0, r.useState)(null), {
            data: u,
            loading: m
          } = (0, l.useQuery)(p.Video, {
            variables: n,
            skip: !Object.entries(n).length
          });
          return (0, r.useEffect)((() => {
            if (!a) return;
            const e = {
              id: Number(a)
            };
            t && (e.locale = t), i(e)
          }), [a, t]), (0, r.useEffect)((() => {
            u?.video && d(u.video), u?.related && c(u.related)
          }), [u]), {
            loading: m,
            related: o,
            video: s
          }
        },
        g = () => "ontouchstart" in window || navigator.maxTouchPoints > 0
    },
    2520: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Video"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withTranslations"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "video"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "screencap"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "art_layers"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "animation"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "game"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created_formatted"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "agegated"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "group_type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "youtube_id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "files"
                  },
                  name: {
                    kind: "Name",
                    value: "files_processed"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "resolution"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "sprite"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "default"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "related"
              },
              name: {
                kind: "Name",
                value: "videos"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "relatedToId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "50"
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "screencap"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "created_formatted"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "created"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "art_layers"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "src"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "animation"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title_slug"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "translations"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "config"
                },
                value: {
                  kind: "StringValue",
                  value: "default",
                  block: !1
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withTranslations"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1116
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query Video(\n    $id: Int!\n    $locale: String!\n    $withTranslations: Boolean! = false\n    $cache: Boolean = true\n) {\n    video(id: $id, locale: $locale) {\n        id\n        title\n        screencap\n        art_layers {\n            src\n            animation\n        }\n        game {\n            id\n            title\n            title_slug\n        }\n        created_formatted\n        created\n        description\n        agegated\n        group_type\n        youtube_id\n        files: files_processed {\n            resolution\n            sprite\n            src\n            default\n        }\n    }\n    related: videos(relatedToId: $id, locale: $locale, limit: 50) {\n        results {\n            id\n            title\n            screencap\n            created_formatted\n            created\n            art_layers {\n                src\n                animation\n            }\n            game {\n                id\n                title\n                title_slug\n            }\n        }\n    }\n    translations(locale: $locale, config: "default")\n        @include(if: $withTranslations) {\n        key\n        value\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.Video = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = n[a] || new Set,
          l = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            l.has(e) || (l.add(e), (n[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var n = r(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "Video")
    }
  }
]);