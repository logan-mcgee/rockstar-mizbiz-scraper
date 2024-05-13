! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7aeaab73-4841-44d3-a279-eae51e47c8c1", e._sentryDebugIdIdentifier = "sentry-dbid-7aeaab73-4841-44d3-a279-eae51e47c8c1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [724], {
    77804: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => i
      });
      var n = t(9860);
      var r = t(95240);
      const i = () => (0, r.jsx)("div", {
        className: "rockstargames-modules-core-videoplayeref5ba014e1e3a01aa5c8e25fa6540276",
        children: (0, r.jsx)(n.LoadingAnimation, {})
      })
    },
    65296: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => i
      });
      const n = {
        wrapper: "rockstargames-modules-core-videoplayerac3995f20f4dee3781d06570d31a5428",
        large: "rockstargames-modules-core-videoplayerb74dc3bbd63da46a6ea045c3e156605f",
        badge: "rockstargames-modules-core-videoplayerce2210d7b8f514c0fc41fd1d765f7009",
        hero: "rockstargames-modules-core-videoplayerdad416e254ac1fa6919886793f1926d2",
        stdWrapper: "rockstargames-modules-core-videoplayere4d2076b827def3ba5eca64f2c8fe197"
      };
      var r = t(95240);
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
    16724: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => q
      });
      var n = t(51664),
        r = t(57013),
        i = t(9860),
        l = t(92372),
        d = t(45792),
        s = t(42836),
        o = t(11436);
      var c = t(95240);
      const u = e => {
          let {
            isClr: a = !1
          } = e;
          const {
            state: t
          } = (0, o.mU)(), {
            running: n
          } = t;
          return n ? null : (0, c.jsx)("div", {
            className: a ? "rockstargames-modules-core-videoplayere810b41a3b7903854096f7b9b6a69796" : "rockstargames-modules-core-videoplayerdb1084cfe44aa5f4b556798868f0a102"
          })
        },
        m = () => {
          const {
            state: e
          } = (0, o.mU)(), {
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
      var v = t(41272);
      const f = () => {
          const {
            state: e
          } = (0, o.mU)(), {
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
                    ((e, a) => {
                      let {
                        code: n
                      } = e;
                      "Enter" === n && t(a)
                    })(a, e.id)
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
        p = (0, v.defineMessages)({
          videoplayer_unmute_tap: {
            id: "videoplayer_unmute_tap",
            defaultMessage: "Tap anywhere to unmute."
          },
          videoplayer_unmute_click: {
            id: "videoplayer_unmute_click",
            defaultMessage: "Click anywhere to unmute."
          }
        }),
        k = {
          info: "rockstargames-modules-core-videoplayerf2532a27e783375ca6ec4df7516cb259",
          title: "rockstargames-modules-core-videoplayerced5a16a281f96e6fd9e265cdc39a74c",
          hidden: "rockstargames-modules-core-videoplayere2b53b1196cdc6f83beccf9fa32285e1",
          screenUmute: "rockstargames-modules-core-videoplayere7c269ca55f452fb03db99a68415f8a7",
          brand: "rockstargames-modules-core-videoplayera6801fd84c9be972cda8d9c829c0234c",
          clr: "rockstargames-modules-core-videoplayera9a731ff7e9197818801b65c03d6d68a",
          rockstar: "rockstargames-modules-core-videoplayere42be20c24119e13fcbb538d82cf6888"
        },
        g = () => {
          const {
            state: e,
            track: a
          } = (0, o.mU)(), {
            brand: t,
            videoData: n
          } = e, {
            video: r
          } = n, i = () => a("User Event", "Rockstar click");
          let l, d, s;
          return "clr" === t ? (d = "CircoLoco Records", l = "https://circolocorecords.com", s = l) : (d = "Rockstar Games", l = "https://www.rockstargames.com/", s = `${document.location.origin}/videos/${r.id}`), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("a", {
              className: [k.brand, k[t]].join(" "),
              href: l,
              target: "_blank",
              onClick: i,
              onKeyUp: i,
              rel: "noreferrer",
              tabIndex: 0,
              children: d
            }), (0, c.jsx)("a", {
              target: "_blank",
              href: s,
              onClick: () => {
                a(2, "Video title click")
              },
              rel: "noreferrer",
              children: `${r.game.title}: ${r.title}`
            })]
          })
        },
        b = () => {
          const {
            formatMessage: e
          } = (0, v.useIntl)(), {
            state: a
          } = (0, o.mU)(), {
            windowHeight: t,
            windowWidth: r
          } = (0, d.useWindowResize)(), [i, l] = (0, n.useState)(), [s, u] = (0, n.useState)(), m = (0, n.useRef)(null), {
            controlsActive: b,
            idle: y,
            muteMessageNeeded: h,
            playerEnded: N,
            playerRef: x,
            running: S,
            videoData: E
          } = a, {
            video: w
          } = E;
          return (0, n.useEffect)((() => {
            l(x?.current?.clientHeight), u(m?.current?.clientHeight)
          }), [x?.current, m?.current, r, t]), w ? (0, c.jsxs)("div", {
            className: [k.info, !b || y ? k.hidden : ""].join(" "),
            style: {
              "--effective-player-height": `${i}px`,
              "--effective-title-height": `${s}px`
            },
            children: [(0, c.jsx)("div", {
              className: k.title,
              ref: m,
              children: (0, c.jsx)(g, {})
            }), h && S && (0, c.jsx)("div", {
              className: k.screenUmute,
              children: `${(0,o.iY)()?e(p.videoplayer_unmute_tap):e(p.videoplayer_unmute_click)}`
            }), N && (0, c.jsx)(f, {})]
          }) : null
        },
        y = e => {
          let {
            isClr: a = !1
          } = e;
          const {
            setState: t,
            track: n
          } = (0, o.mU)(), r = () => {
            t("muteMessageNeeded", !1), t("playing", !0), t("volume", 1), n(2, "Screencap clicked to start")
          };
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-videoplayereaff9706718a1e24475880269eb3552c",
            role: "button",
            onClick: r,
            onKeyUp: e => {
              (e => {
                let {
                  code: a
                } = e;
                "Enter" === a && r()
              })(e)
            },
            tabIndex: 0,
            children: [(0, c.jsx)(m, {}), (0, c.jsx)(u, {
              isClr: a
            }), (0, c.jsx)(b, {})]
          })
        };
      var h = t(77804),
        N = t(65296);
      const x = {
          settings: "rockstargames-modules-core-videoplayera3719b13afdb84ee93e092e444f157e7",
          disabledControlItem: "rockstargames-modules-core-videoplayerbaf04b530c4f9e9669b3ad80fc450ba4",
          menu: "rockstargames-modules-core-videoplayerc485bae32b284a8bd40f8cbbae2eb3c0",
          activeFileButton: "rockstargames-modules-core-videoplayerf89f81d0857da697b6db59eb9623d0e8",
          fileMenuOpen: "rockstargames-modules-core-videoplayere32f5598d88526289145cc090027337a"
        },
        S = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.mU)(), {
            fileIndex: n,
            playerEnded: r,
            settingsMenuOpen: i,
            videoData: l,
            videoRef: d
          } = e, {
            video: s
          } = l, u = () => {
            t(2, "Settings clicked"), a("settingsMenuOpen", !i)
          };
          return (0, c.jsx)("div", {
            role: "button",
            onClick: u,
            onKeyUp: u,
            tabIndex: 0,
            className: [x.settings, r ? x.disabledControlItem : ""].join(" "),
            children: (0, c.jsx)("div", {
              className: [x.menu, i ? x.fileMenuOpen : ""].join(" "),
              children: s?.files?.map(((e, r) => (0, c.jsx)("button", {
                className: n === r ? x.activeFileButton : "",
                onClick: n => {
                  t(2, `Resolution changed to ${e.resolution}`), a("savedTime", d?.current?.currentTime), a("fileIndex", r), a("settingsMenuOpen", !1), n.stopPropagation()
                },
                type: "button",
                children: e.resolution
              }, e.src)))
            })
          })
        },
        E = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.mU)(), {
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
        w = (0, v.defineMessages)({
          videoplayer_fullscreen_button_label: {
            id: "videoplayer_fullscreen_button_label",
            defaultMessage: "Toggle video in fullscreen mode"
          }
        }),
        _ = {
          fullscreen: "rockstargames-modules-core-videoplayerb49c3e5fc957c1ae509b282d4dc45ff5",
          disabledControlItem: "rockstargames-modules-core-videoplayerf8dc03b1d8a6428ba9dd9c533b8f7286",
          fullscreenOn: "rockstargames-modules-core-videoplayerda0a91ce9c33c719a522ec4e13df8089",
          fullscreenOff: "rockstargames-modules-core-videoplayerecac6fe778ba66109fa0d81e385dc651"
        },
        j = () => {
          const {
            state: e,
            setState: a
          } = (0, o.mU)(), {
            formatMessage: t
          } = (0, v.useIntl)(), {
            fullscreen: n,
            playerEnded: r
          } = e, i = () => {
            a("fullscreen", !n)
          };
          return (0, c.jsx)("div", {
            role: "button",
            "aria-label": t(w.videoplayer_fullscreen_button_label),
            tabIndex: 0,
            onClick: i,
            onKeyUp: e => {
              (e => {
                let {
                  code: a
                } = e;
                "Enter" === a && i()
              })(e)
            },
            className: [_.fullscreen, n ? _.fullscreenOn : _.fullscreenOff, r ? _.disabledControlItem : ""].join(" ")
          })
        },
        C = {
          playPause: "rockstargames-modules-core-videoplayere45ad1f6394d38b83eafb3e059c1983f",
          disabledControlItem: "rockstargames-modules-core-videoplayerfd04bac34ebe83f4b7feb70560dd1e46",
          playPauseReplay: "rockstargames-modules-core-videoplayerce15be03efdd596a6892e4507492b96b",
          playPausePlaying: "rockstargames-modules-core-videoplayera5b529f22517b42982ea97fc9ec1f303",
          playPausePaused: "rockstargames-modules-core-videoplayerdc339f324cbf024b7eb275a0a26be7cc"
        },
        T = () => {
          const {
            state: e,
            setState: a,
            replay: t,
            track: n
          } = (0, o.mU)(), {
            playerEnded: r,
            playing: i
          } = e, l = i ? C.playPausePlaying : C.playPausePaused, d = () => {
            r ? (n(2, "Replay clicked"), t()) : (n(2, "Toggle play/pause clicked"), a("playing", !i))
          };
          return (0, c.jsx)("div", {
            className: [C.playPause, r ? C.playPauseReplay : l].join(" "),
            onClick: d,
            onKeyUp: e => {
              (e => {
                let {
                  code: a
                } = e;
                "Enter" === a && d()
              })(e)
            },
            role: "button",
            tabIndex: 0,
            "aria-label": "Play/pause toggle"
          })
        };
      var F = t(97860),
        I = t.n(F);
      const M = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.mU)(), {
            buffered: r,
            idle: i,
            lastPlayingState: l,
            playerEnded: d,
            playing: s,
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
              d || m.pct || !s || a("controlsActive", !i)
            }), [i, d, m.pct, s]), (0, n.useEffect)((() => {
              a("currentTime", m.pct * v.duration)
            }), [m.pct, v.duration]), (0, n.useEffect)((() => {
              const {
                lastEvent: e,
                pct: t,
                shouldPause: n
              } = m;
              t ? (n && (null === l && a("lastPlayingState", s), a("playing", !1)), e && a("progressBarState", {})) : null !== l && (a("playing", l), a("lastPlayingState", null))
            }), [l, m, v.duration, s]), (0, n.useEffect)((() => {
              const e = f.current;
              if (null === e) return;
              const a = e.getContext("2d"),
                t = e.getBoundingClientRect();
              if (e.width = t.width, e.height = t.height, a.clearRect(0, 0, t.width, t.height), a.fillStyle = "rgba(255, 255, 255, 0.5)", !r || !r.length) return;
              const n = t.width / v.duration;
              for (let e = 0; e < r.length; e += 1) {
                const i = r.start(e),
                  l = r.end(e),
                  d = i * n,
                  s = l * n;
                i <= v.current && v.current <= l && a.fillRect(d, 0, s - d, t.height)
              }
            }), [r, f, v.duration, v.current]), (0, n.useEffect)((() => {
              if (!p.current) return;
              const e = new(I())(p.current),
                a = e => {
                  !d && u.current.contains(e.srcEvent.target) ? k(e.srcEvent.offsetX, !0) : k()
                },
                t = () => {
                  k()
                };
              return e.on("pan", a), e.on("panend", t), () => {
                e.off("pan", a), e.off("panend", t)
              }
            }), [u, p, d]), d) return null;
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
        V = {
          time: "rockstargames-modules-core-videoplayerd8208db9e68317cc0e4055c94cf06a62",
          disabledControlItem: "rockstargames-modules-core-videoplayeread56ab78db230296c4841fcdb5e7032",
          clr: "rockstargames-modules-core-videoplayerc30193a8318e8f564adaf8790bd6a606"
        },
        $ = e => {
          const a = new Date(1e3 * e),
            t = a.getUTCMinutes(),
            n = a.getSeconds();
          return `${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`
        },
        U = () => {
          const {
            state: e
          } = (0, o.mU)(), {
            brand: a,
            timing: t
          } = e, {
            current: n,
            duration: r
          } = t;
          return (0, c.jsx)("div", {
            className: [V.time, V[a]].join(" "),
            children: `${$(n)} / ${$(r)}`
          })
        },
        R = {
          volumen: "rockstargames-modules-core-videoplayere5226d97259c2e7fd6fe985d1810a92f",
          disabledControlItem: "rockstargames-modules-core-videoplayercdc26301a887840b92faa3ed5e97742a",
          volumeMuted: "rockstargames-modules-core-videoplayerfd88c7b86a41dd844cc66fc08c567f53",
          volumeSomeVolume: "rockstargames-modules-core-videoplayerf7ff818f67aa6b3e33a104c344406d4b",
          volumeMax: "rockstargames-modules-core-videoplayerc8da8f35df4a4419cb7aee5f76156f4e"
        },
        O = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.mU)(), {
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
            className: [R.volumen, 0 === r ? R.volumeMuted : R.volumeMax, n ? R.disabledControlItem : ""].join(" ")
          })
        },
        D = {
          controls: "rockstargames-modules-core-videoplayera57fc4d51326b02ec4e376b37b292ee0",
          controlsInactive: "rockstargames-modules-core-videoplayerac12e314164c4a1536a62298abd2a61a",
          controlsBottom: "rockstargames-modules-core-videoplayerdf29c8beebb85679a06e63f3b64acf75"
        },
        L = () => {
          const {
            state: e
          } = (0, o.mU)(), {
            controlsActive: a
          } = e;
          return (0, c.jsxs)("div", {
            className: [D.controls, a ? "" : D.controlsInactive].join(" "),
            children: [(0, c.jsx)(M, {}), (0, c.jsxs)("div", {
              className: D.controlsBottom,
              children: [(0, c.jsx)(T, {}), (0, c.jsx)(O, {}), (0, c.jsx)(U, {}), (0, c.jsx)(S, {}), (0, c.jsx)(E, {}), (0, c.jsx)(j, {})]
            })]
          })
        },
        P = (0, v.defineMessages)({
          videoplayer_share_title: {
            id: "videoplayer_share_title",
            defaultMessage: "Share"
          },
          videoplayer_share_copy: {
            id: "videoplayer_share_copy",
            defaultMessage: "Copy"
          }
        }),
        A = {
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
        B = () => {
          const {
            formatMessage: e
          } = (0, v.useIntl)(), {
            state: a,
            setState: t,
            track: n
          } = (0, o.mU)(), {
            shareData: r,
            shareOpen: i
          } = a;
          if (!r) return null;
          const {
            title: l,
            url: d
          } = r, s = () => {
            n(2, "Share screen closed"), t("shareOpen", !1)
          };
          return (0, c.jsx)("div", {
            className: [A.screenShare, i ? A.shareScreenActive : ""].join(" "),
            children: (0, c.jsxs)("div", {
              className: A.shareScreenContent,
              children: [(0, c.jsx)("h3", {
                children: e(P.videoplayer_share_title)
              }), (0, c.jsx)("div", {
                role: "button",
                tabIndex: 0,
                "aria-label": "Close share screen.",
                onClick: s,
                onKeyUp: s,
                className: A.shareClose
              }), (0, c.jsx)("div", {
                className: A.shareSocial,
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
                    href: t.replace("{title}", escape(l)).replace("{url}", escape(d)),
                    className: A[`socialLink-${a}`],
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
                className: A.shareCopy,
                children: [(0, c.jsx)("input", {
                  value: a.text,
                  readOnly: !0
                }), navigator?.clipboard?.writeText ? (0, c.jsx)("button", {
                  type: "button",
                  onClick: async () => {
                    await navigator.clipboard.writeText(a.text), n(2, `Share ${a.type} copied`)
                  },
                  children: e(P.videoplayer_share_copy)
                }) : ""]
              }, a.type)))]
            })
          })
        },
        K = () => {
          const {
            state: e,
            setState: a,
            track: t,
            trackVideo: r
          } = (0, o.mU)(), {
            controlsActive: i,
            currentTime: l,
            fileIndex: d,
            muteMessageNeeded: s,
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
            const e = b?.files?.[d]?.src ?? null;
            e && h(e)
          }), [d, b]), (0, n.useEffect)((() => {
            a("videoRef", N)
          }), [N]), (0, n.useEffect)((() => {
            l && N.current && (N.current.currentTime = l, a("currentTime", null))
          }), [l, N?.current]), (0, n.useEffect)((() => {
            const e = N?.current;
            if (!e) return;
            const t = e => {
                a("meta", e)
              },
              n = () => {
                0 !== f && (a("currentTime", f), a("savedTime", null)), a("playerEnded", !1)
              },
              r = () => {
                a("timing", {
                  duration: (Number.isNaN(e.duration) ? 0 : e.duration) ?? 0,
                  current: (Number.isNaN(e.currentTime) ? 0 : e.currentTime) ?? 0
                })
              },
              i = () => {
                a("volume", e.volume)
              },
              l = () => {
                a("playing", !1), a("fullscreen", !1)
              },
              d = () => {
                a("buffered", e.buffered)
              };
            return e.addEventListener("loadeddata", n), e.addEventListener("loadedmetadata", t), e.addEventListener("timeupdate", r), e.addEventListener("volumechange", i), e.addEventListener("progress", d), e.addEventListener("webkitendfullscreen", l), () => {
              e.removeEventListener("loadeddata", n), e.removeEventListener("loadedmetadata", t), e.removeEventListener("timeupdate", r), e.removeEventListener("volumechange", i), e.removeEventListener("progress", d), e.removeEventListener("webkitendfullscreen", l)
            }
          }), [v, f, N?.current]), (0, c.jsx)("video", {
            ref: N,
            autoPlay: !0,
            className: "rockstargames-modules-core-videoplayerc29b82d22a56d8befe69a08bd4fe031e",
            src: y,
            muted: 0 === k,
            playsInline: !0,
            onTouchEnd: () => {
              t(2, "Video tapped"), m || s || a("controlsActive", !i)
            },
            onClick: () => {
              (0, o.iY)() || (t(2, "Video clicked"), m || s || a("playing", !v))
            },
            onEnded: () => {
              t(1, "Video completed"), a("playing", !1), u ? u?.() : a("playerEnded", !0)
            },
            children: (0, c.jsx)("track", {
              kind: "captions"
            })
          })
        },
        G = {
          videoplayer: "rockstargames-modules-core-videoplayerf5143fc6816cced86d0c38ce84f780b3",
          videoplayerEnded: "rockstargames-modules-core-videoplayerc74495a5db05394ce738c8a00ab5d3eb",
          videoplayerNotRunning: "rockstargames-modules-core-videoplayerc50f5c170e71249e698f93993c7e5077",
          controls: "rockstargames-modules-core-videoplayera92769e57d8a11d308f03b0f0a24fd6b"
        },
        Y = (0, d.withLocale)((() => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, o.mU)(), {
            autoplayUnmuteCheck: r,
            context: i,
            controlsActive: l,
            fullscreen: d,
            meta: s,
            muteMessageNeeded: u,
            playerEnded: m,
            playing: v,
            running: f,
            settingsMenuOpen: p,
            shareOpen: k,
            videoRef: g,
            volume: y
          } = e, [h, N] = (0, n.useState)(!1), x = (0, n.useRef)(null), S = (0, n.useRef)(null), E = () => document?.fullscreenEnabled ?? !1, w = () => "string" == typeof document.fullscreenElement?.nodeName ?? !1, _ = () => {
            x.current && clearInterval(x?.current)
          }, j = () => {
            _(), a("idle", !1), x.current = setTimeout((() => {
              h || a("idle", !0)
            }), 3e3)
          };
          return (0, n.useEffect)((() => {
            j()
          }), [h]), (0, n.useEffect)((() => {
            N(u || m || p || k)
          }), [u, m, p, k]), (0, n.useEffect)((() => {
            a("playerRef", S)
          }), [S]), (0, n.useEffect)((() => {
            if (!S?.current || !g?.current) return;
            const e = g.current,
              a = S.current,
              {
                webkitDisplayingFullscreen: t,
                webkitSupportsFullscreen: n
              } = e,
              r = () => {
                d ? a.requestFullscreen() : document.exitFullscreen()
              };
            d ? E() && !w() ? r() : n && !t && g.current.webkitEnterFullscreen() : E() && w() ? r() : n && t && g.current.webkitExitFullscreen()
          }), [d, S, g]), (0, n.useEffect)((() => {
            const e = () => {
                j(), a("fullscreen", w()), t(1, w() ? "Fullscreen entered" : "Fullscreen exited")
              },
              n = e => {
                m || u || 32 !== parseInt(e.code, 10) && "Space" !== e.code || a("playing", !v)
              };
            return document.addEventListener("keypress", n, !1), document.addEventListener("fullscreenchange", e), () => {
              document.removeEventListener("keypress", n, !1), document.removeEventListener("fullscreenchange", e)
            }
          }), [v, m, u]), (0, n.useEffect)((() => {
            (async () => {
              if (g?.current && s)
                if (v) try {
                  await g.current.play()
                } catch (e) {
                  a("volume", 0), a("muteMessageNeeded", !0), a("autoplayUnmuteCheck", !0)
                } else g.current.pause()
            })()
          }), [r, s, v, g?.current]), (0, n.useEffect)((() => {
            g?.current && (g.current.volume = y, 0 !== g.current.volume && a("muteMessageNeeded", !1))
          }), [y, g]), (0, n.useEffect)((() => {
            l || a("settingsMenuOpen", !1)
          }), [l]), (0, n.useEffect)((() => {
            k && a("settingsMenuOpen", !1)
          }), [k]), (0, n.useEffect)((() => {
            p && a("shareOpen", !1)
          }), [p]), (0, n.useEffect)((() => {
            m && (a("fullscreen", !1), a("settingsMenuOpen", !1), a("shareOpen", !1), a("controlsActive", !0), a("progressBarState", {}))
          }), [m]), (0, n.useEffect)((() => () => {
            _()
          }), []), (0, c.jsxs)("div", {
            role: "presentation",
            ref: S,
            "data-context": i,
            className: [G.videoplayer, m ? G.videoplayerEnded : "", f ? "" : G.videoplayerNotRunning].join(" "),
            onClick: () => {
              u && a("volume", 1)
            },
            onMouseLeave: j,
            onMouseEnter: j,
            onMouseMove: j,
            onTouchEnd: _,
            onTouchStart: _,
            children: [(0, c.jsx)(K, {}), (0, c.jsx)(b, {}), (0, c.jsx)(B, {}), (0, c.jsx)(L, {})]
          })
        })),
        W = e => {
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
        X = e => {
          let {
            aspectRatio: a = 16 / 9,
            autoplay: t = !1,
            context: i = "site",
            id: d,
            hero: u = !1,
            isClr: m = !1,
            resolution: v = "_auto",
            wrapper: f = !0,
            start: p = 0,
            videoChangeCallback: k,
            onVideoComplete: g,
            locale: b
          } = e;
          const {
            state: x,
            setState: S,
            track: E
          } = (0, o.mU)(), {
            autoplay: w,
            brand: _,
            fileIndex: j,
            playing: C
          } = x, T = (0, o._6)({
            id: d,
            locale: b
          }), {
            loading: F,
            video: I
          } = T, M = (0, s.useGtmTrack)(), V = (0, l.useAgegated)(), $ = (0, r.useNavigate)();
          return (0, n.useEffect)((() => {
            S("onVideoComplete", g)
          }), [g]), (0, n.useEffect)((() => {
            if (!I) return;
            const {
              files: e
            } = I, a = e.findIndex((e => e.resolution === v)), t = e.findIndex((e => e.default));
            S("fileIndex", -1 !== a ? a : -1 !== t ? t : 0)
          }), [v, I]), (0, n.useEffect)((() => {
            if (!I) return;
            let e;
            e = "clr" === _ ? "https://circolocorecords.com" : `https://www.rockstargames.com/videos/${I.id}?embed`;
            const a = {
              title: I.title,
              text: I.description,
              url: e,
              embed: `<iframe src="https://www.rockstargames.com/videoplayer/?id=${I.id}&locale=en_us&resolution=${I.files[j]?.resolution}&embed" allowfullscreen style="width:640px; height:360px; border:none;"title="Rockstar Games Video: ${I.title}"></iframe>`
            };
            S("shareData", a)
          }), [_, j, I]), (0, n.useEffect)((() => {
            if (C) {
              if (S("autoplay", !0), S("running", !0), !I) return;
              M.track({
                event: "video_autoplay",
                video_id: d,
                video_title: I.title,
                video_type: I.group_type,
                video_language: b
              })
            }
          }), [C]), (0, n.useEffect)((() => {
            const e = t || w || !1;
            E(1, "Video started"), S("controlsActive", !0), S("currentTime", 0), S("fullscreen", !1), S("idle", !1), S("meta", null), S("playerEnded", !1), S("playing", e), S("progressBarState", {}), S("settingsMenuOpen", !1), S("shareOpen", !1), S("videoId", d), I && (M.track({
              event: "video_started",
              video_id: d,
              video_title: I.title,
              video_type: I.group_type,
              video_language: b
            }), e && E(1, `Autoplay video with id: [${d}]`, `autoplay[videoId: ${d}]`))
          }), [d]), (0, n.useEffect)((() => {
            S("videoChangeCallback", k || (e => {
              $(`../videos/${e}`)
            }))
          }), [k]), (0, n.useEffect)((() => {
            S("currentTime", p)
          }), [p]), (0, n.useEffect)((() => {
            const {
              video: e
            } = T;
            923 === e?.game?.id && S("brand", "clr"), S("videoData", T)
          }), [JSON.stringify(T)]), (0, n.useEffect)((() => {
            S("aspectRatio", a)
          }), [a]), (0, n.useEffect)((() => {
            S("context", i)
          }), [i]), (0, n.useEffect)((() => {
            S("resolution", v)
          }), [v]), !I || F ? (0, c.jsx)(N.c, {
            hero: u,
            wrapper: f,
            children: (0, c.jsx)(h.c, {})
          }) : ["gtaosession", "gtaostream", "community"].includes(I.group_type) || I.youtubeOnly ? I.agegated ? V((0, c.jsx)(W, {
            id: I.youtube_id
          })) : (0, c.jsx)(W, {
            id: I.youtube_id
          }) : w ? I.agegated ? (0, c.jsx)(N.c, {
            hero: u,
            wrapper: f,
            children: V((0, c.jsx)(Y, {}), {
              bgImg: I.screencap
            })
          }) : (0, c.jsx)(N.c, {
            hero: u,
            wrapper: f,
            children: (0, c.jsx)(Y, {})
          }) : (0, c.jsx)(N.c, {
            hero: u,
            wrapper: f,
            children: (0, c.jsx)(y, {
              isClr: m
            })
          })
        },
        q = (0, d.withGtmTracking)((0, i.withSimpleErrorBoundary)((e => (0, c.jsx)(o.Yv, {
          children: (0, c.jsx)(X, {
            ...e
          })
        })), "Something went wrong with the video player."))
    },
    11436: (e, a, t) => {
      "use strict";
      t.d(a, {
        Yv: () => v,
        iY: () => g,
        cJ: () => n.videoplayer,
        _6: () => k,
        mU: () => f
      });
      var n = t(55120),
        r = t(51664),
        i = t(68e3),
        l = t(33052),
        d = t(42836),
        s = t(45792);
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
          playerEnded: !1,
          playerRef: null,
          playing: !1,
          progressBarState: {},
          resolution: "_auto",
          running: !1,
          savedTime: 0,
          isVideoClicked: !1,
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
      var u = t(95240);
      const m = (0, r.createContext)(),
        v = e => {
          let {
            children: a
          } = e;
          const [t] = (0, r.useState)((0, i.v4)()), n = (e => {
            let {
              id: a
            } = e;
            const t = c[a] ?? (c[a] = (0, l.makeVar)(o)),
              n = (e, a) => t({
                ...t(),
                [e]: a
              }),
              r = (0, l.useReactiveVar)(t),
              i = (0, d.useGtmTrack)(),
              u = (0, s.useLocale)(),
              {
                videoData: m
              } = r;
            return {
              state: r,
              setState: n,
              replay: () => {
                n("playerEnded", !1), n("playing", !0), n("currentTime", 0), n("timing", {
                  current: 0,
                  duration: 0
                })
              },
              track: (e, a, t) => {
                const {
                  video: n
                } = m;
                if (!n || !i) return;
                const {
                  id: r,
                  title: l
                } = n;
                i.track({
                  event: "trackEvent",
                  eventCategory: 1 === e ? "Player Event" : "User Event",
                  eventAction: a,
                  eventLabel: `${r}(${u}) - ${l}`,
                  eventValue: t
                })
              }
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
      var p = t(74180);
      const k = e => {
          let {
            id: a,
            locale: t
          } = e;
          const [n, i] = (0, r.useState)({}), [d, s] = (0, r.useState)(null), [o, c] = (0, r.useState)(null), {
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
            u?.video && s(u.video), u?.related && c(u.related)
          }), [u]), {
            loading: m,
            related: o,
            video: d
          }
        },
        g = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    },
    74180: e => {
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
                  name: {
                    kind: "Name",
                    value: "youtubeOnly"
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
          end: 1136
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
        body: 'query Video(\n    $id: Int!\n    $locale: String!\n    $withTranslations: Boolean! = false\n    $cache: Boolean = true\n) {\n    video(id: $id, locale: $locale) {\n        id\n        title\n        screencap\n        art_layers {\n            src\n            animation\n        }\n        game {\n            id\n            title\n            title_slug\n        }\n        created_formatted\n        created\n        description\n        agegated\n        group_type\n        youtube_id\n        youtubeOnly\n        files: files_processed {\n            resolution\n            sprite\n            src\n            default\n        }\n    }\n    related: videos(relatedToId: $id, locale: $locale, limit: 50) {\n        results {\n            id\n            title\n            screencap\n            created_formatted\n            created\n            art_layers {\n                src\n                animation\n            }\n            game {\n                id\n                title\n                title_slug\n            }\n        }\n    }\n    translations(locale: $locale, config: "default")\n        @include(if: $withTranslations) {\n        key\n        value\n    }\n}\n',
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
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var s = d;
          d = new Set, s.forEach((function(e) {
            l.has(e) || (l.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
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