! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d78ed47c-8770-4fb2-b765-a8ff2f84af57", e._sentryDebugIdIdentifier = "sentry-dbid-d78ed47c-8770-4fb2-b765-a8ff2f84af57")
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
  [432], {
    84360: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => i
      });
      var n = t(9860);
      var r = t(95240);
      const i = () => (0, r.jsx)("div", {
        className: "rockstargames-modules-core-videoplayerf68e657629a7489819d6ce226b24048f",
        children: (0, r.jsx)(n.LoadingAnimation, {})
      })
    },
    18140: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => i
      });
      const n = {
        wrapper: "rockstargames-modules-core-videoplayerea01ebcc9a6101f2240987f88f9718ed",
        large: "rockstargames-modules-core-videoplayerff1acb524138269c9ac6a9d157461440",
        badge: "rockstargames-modules-core-videoplayereeaca7f12142714863605feee14efaab",
        hero: "rockstargames-modules-core-videoplayera231db4ad9aa5a3078816b8363461ecd",
        stdWrapper: "rockstargames-modules-core-videoplayere1064bb70c3dafe1fc4c7c22f4bde0e8"
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
    87432: (e, a, t) => {
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
        o = t(5960);
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
            className: a ? "rockstargames-modules-core-videoplayere045816522b68dd573a16d81d3da515b" : "rockstargames-modules-core-videoplayerc0e741033c70e2b7afc7c5ffec042a73"
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
            className: "rockstargames-modules-core-videoplayerc94fe6c825fd807d51a5ce4a8dda89b4",
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
          return a && n.related?.results.length ? (0, c.jsx)("div", {
            className: "rockstargames-modules-core-videoplayerf6296ce84eadf57dbafb189996d6969d",
            children: (0, c.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerb2a747a481c983ab647ad02e308260fc",
              children: n.related.results.map((e => {
                return (0, c.jsxs)("div", {
                  onClick: () => t(e.id),
                  onKeyUp: a => {
                    return n = a, r = e.id, void("Enter" === n.code && t(r));
                    var n, r
                  },
                  className: "rockstargames-modules-core-videoplayere6b493944b06bf8e20bac05c86ea159c",
                  tabIndex: 0,
                  role: "button",
                  children: [(0, c.jsx)("div", {
                    className: "rockstargames-modules-core-videoplayerb6d8f0b05b9f3aa644564bbe23c0afb3",
                    style: {
                      background: `url(${a=e.screencap??"",`${a}?im=Resize=400`}) no-repeat center/contain`
                    }
                  }), (0, c.jsx)("div", {
                    className: "rockstargames-modules-core-videoplayerdee4ab6c3df02487b3d4e7b0e57eec36",
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
        g = {
          info: "rockstargames-modules-core-videoplayerad92469bc5278890ece48d4952674c50",
          title: "rockstargames-modules-core-videoplayerfaf85fc094065966521e6cec4934cff3",
          hidden: "rockstargames-modules-core-videoplayerb84bdd41c81dd627d598f98dde6efef4",
          screenUmute: "rockstargames-modules-core-videoplayerca0856bab14c91b057e26d96f4754252",
          brand: "rockstargames-modules-core-videoplayerd2dbfc29c4200994bcbe8c29dbe6c1c7",
          clr: "rockstargames-modules-core-videoplayere3c5615d4e3c272bb5a6485d3b350400",
          rockstar: "rockstargames-modules-core-videoplayera875f2cc6b9ea1fe438324897864bc8f"
        },
        k = () => {
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
              className: [g.brand, g[t]].join(" "),
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
            running: _,
            videoData: S
          } = a, {
            video: w
          } = S;
          return (0, n.useEffect)((() => {
            l(x?.current?.clientHeight), u(m?.current?.clientHeight)
          }), [x?.current, m?.current, r, t]), w ? (0, c.jsxs)("div", {
            className: [g.info, !b || y ? g.hidden : ""].join(" "),
            style: {
              "--effective-player-height": `${i}px`,
              "--effective-title-height": `${s}px`
            },
            children: [(0, c.jsx)("div", {
              className: g.title,
              ref: m,
              children: (0, c.jsx)(k, {})
            }), h && _ && (0, c.jsx)("div", {
              className: g.screenUmute,
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
            className: "rockstargames-modules-core-videoplayerc8fb1377ff81bbc7bcbf4c4312f1989a",
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
      var h = t(84360),
        N = t(18140);
      const x = {
          settings: "rockstargames-modules-core-videoplayercca1821d9d074180be5f2097bdd48d19",
          disabledControlItem: "rockstargames-modules-core-videoplayerc7232eea7e11fde4bc9d010775ecde07",
          menu: "rockstargames-modules-core-videoplayera17915a8612118e43ac835ff3e2ae0f5",
          activeFileButton: "rockstargames-modules-core-videoplayerf66505e169d49415c212731d47df7f17",
          fileMenuOpen: "rockstargames-modules-core-videoplayerbea4dc91e52b7954bc1edec6b7b26198"
        },
        _ = () => {
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
        S = () => {
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
            className: "rockstargames-modules-core-videoplayerfe31b37a8d7811f2a06c5e5de7c58f70",
            tabIndex: 0,
            "aria-label": "Share this video"
          })
        },
        w = (0, v.defineMessages)({
          videoplayer_fullscreen_button_label: {
            id: "videoplayer_fullscreen_button_label",
            defaultMessage: "Toggle video in fullscreen mode"
          },
          videoplayer_fullscreen_hover_label: {
            id: "videoplayer_fullscreen_hover_label",
            defaultMessage: "Fullscreen"
          },
          videoplayer_windowed_hover_label: {
            id: "videoplayer_windowed_hover_label",
            defaultMessage: "Windowed"
          }
        }),
        E = {
          fullscreen: "rockstargames-modules-core-videoplayerfa9e353ea3d1e517d270e10f437e46bd",
          disabledControlItem: "rockstargames-modules-core-videoplayerf296427ac92fd4a4a3a2560f6ea55e75",
          fullscreenOn: "rockstargames-modules-core-videoplayera16bc98d2aa278e554c8b590b985957f",
          fullscreenOff: "rockstargames-modules-core-videoplayerf92e64078be27bb1b950adecfc7d1a01"
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
            className: [E.fullscreen, n ? E.fullscreenOn : E.fullscreenOff, r ? E.disabledControlItem : ""].join(" ")
          })
        },
        C = {
          playPause: "rockstargames-modules-core-videoplayere3b1ce2e7f5506ccd786b7342972c4a2",
          disabledControlItem: "rockstargames-modules-core-videoplayera03adc6a22c82432805b3378316e87e3",
          playPauseReplay: "rockstargames-modules-core-videoplayerd2684e570f66d6648d4aaa93cb6aecfe",
          playPausePlaying: "rockstargames-modules-core-videoplayerfe4ea58bd89e788c54a9221ab47fae4f",
          playPausePaused: "rockstargames-modules-core-videoplayerb405db82ad0160a76a659d4dbf508564"
        },
        F = () => {
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
      var T = t(97860),
        M = t.n(T);
      const I = () => {
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
          } = e, f = (0, n.useRef)(null), p = (0, n.useRef)(null), g = function() {
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
              const e = new(M())(p.current),
                a = e => {
                  !d && u.current.contains(e.srcEvent.target) ? g(e.srcEvent.offsetX, !0) : g()
                },
                t = () => {
                  g()
                };
              return e.on("pan", a), e.on("panend", t), () => {
                e.off("pan", a), e.off("panend", t)
              }
            }), [u, p, d]), d) return null;
          let k = 0;
          return (0, c.jsxs)("div", {
            ref: p,
            role: "button",
            tabIndex: 0,
            "aria-label": "Progress bar",
            onKeyUp: e => {
              k = e.touches[0].clientX
            },
            className: "rockstargames-modules-core-videoplayerd17019c00eaab4c26016c6b6fe2cdf81",
            onTouchStart: () => {},
            onTouchEnd: e => {
              e.changedTouches[0].clientX !== k && (t(2, "Time changed"), g(e.changedTouches[0].clientX - k, !1, !0)), k = 0
            },
            onClick: e => {
              t(2, "Time changed"), g(e.nativeEvent.offsetX, !1, !0)
            },
            children: [(0, c.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerbacf9b2d37d7fded7787394317119419"
            }), (0, c.jsx)("canvas", {
              ref: f
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerd8e4f425c5f6f27b63879b2579160ed8",
              style: {
                "--pct-current": v.current / v.duration
              }
            })]
          })
        },
        V = {
          time: "rockstargames-modules-core-videoplayerd85a20b76923d233544f907a6b0775e9",
          disabledControlItem: "rockstargames-modules-core-videoplayercc0c3db46069c39ee47df321e7e09e0b",
          clr: "rockstargames-modules-core-videoplayerd54310570f10c20338363ab9e5c1c3e8"
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
          volumen: "rockstargames-modules-core-videoplayerbfa409b11e79d904d6d8d7e7aeb80f59",
          disabledControlItem: "rockstargames-modules-core-videoplayerdbcdf0ab09459cbeef0308df9588bc4d",
          volumeMuted: "rockstargames-modules-core-videoplayerc2431b6b7feb9c0f8be4dbea2c5edea3",
          volumeSomeVolume: "rockstargames-modules-core-videoplayereafaa42046ab13384d0f1176cbd33b0d",
          volumeMax: "rockstargames-modules-core-videoplayere1f789bd4fd68600a298fd94f2116791"
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
          controls: "rockstargames-modules-core-videoplayerf4bcd4cd5d4509129b52a0a4f411d4a3",
          controlsInactive: "rockstargames-modules-core-videoplayerc7bdceed515f66e56522506b66961119",
          controlsBottom: "rockstargames-modules-core-videoplayeraeb9681a712a821457e06855428c70cf"
        },
        L = () => {
          const {
            state: e
          } = (0, o.mU)(), {
            controlsActive: a
          } = e;
          return (0, c.jsxs)("div", {
            className: [D.controls, a ? "" : D.controlsInactive].join(" "),
            children: [(0, c.jsx)(I, {}), (0, c.jsxs)("div", {
              className: D.controlsBottom,
              children: [(0, c.jsx)(F, {}), (0, c.jsx)(O, {}), (0, c.jsx)(U, {}), (0, c.jsx)(_, {}), (0, c.jsx)(S, {}), (0, c.jsx)(j, {})]
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
          screenShare: "rockstargames-modules-core-videoplayerb5e017aa765690f8b9f6996ba388feeb",
          shareScreenActive: "rockstargames-modules-core-videoplayere418100787677b789d0d47535c9288a7",
          shareScreenContent: "rockstargames-modules-core-videoplayerb5d8236bf87c338e4a783cf3abb3561e",
          shareClose: "rockstargames-modules-core-videoplayerf91244319d9221e1e976230f69d2a8f0",
          shareSocial: "rockstargames-modules-core-videoplayere944f3bf67f9af6c8d5fdb8f18cddd4f",
          "socialLink-facebook": "rockstargames-modules-core-videoplayere15349785e585f850aed2a70420a5378",
          "socialLink-twitter": "rockstargames-modules-core-videoplayerc588b9f0fc476554b8b5a3d1e85b46af",
          "socialLink-instagram": "rockstargames-modules-core-videoplayerb39d693f3e3fdd2eeae916f812bd9342",
          "socialLink-reddit": "rockstargames-modules-core-videoplayerd543a4e828936db6c1265cc870395a0b",
          "socialLink-linkedin": "rockstargames-modules-core-videoplayercbf9d9f1fe4aa63670ed82eca073f10a",
          shareCopy: "rockstargames-modules-core-videoplayerc70d769dfbf184c1ad1d8ef361987013"
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
            volume: g,
            autoplay: k
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
            className: "rockstargames-modules-core-videoplayerf55dd55df4f58c392d25cfedaaf2daa2",
            src: y,
            muted: 0 === g,
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
          videoplayer: "rockstargames-modules-core-videoplayerb6497cd6ac766d46023d84e7a78bc376",
          videoplayerEnded: "rockstargames-modules-core-videoplayerc2a7f4ac36492e6db3a3b6465647e5ca",
          videoplayerNotRunning: "rockstargames-modules-core-videoplayerd35bf5770bef2682876ad570002f6458",
          controls: "rockstargames-modules-core-videoplayerbe6b455c6dd22bd901b2957460e3af9d"
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
            shareOpen: g,
            videoRef: k,
            volume: y
          } = e, [h, N] = (0, n.useState)(!1), x = (0, n.useRef)(null), _ = (0, n.useRef)(null), S = () => document?.fullscreenEnabled ?? !1, w = () => "string" == typeof document.fullscreenElement?.nodeName ?? !1, E = () => {
            x.current && clearInterval(x?.current)
          }, j = () => {
            E(), a("idle", !1), x.current = setTimeout((() => {
              h || a("idle", !0)
            }), 3e3)
          };
          return (0, n.useEffect)((() => {
            j()
          }), [h]), (0, n.useEffect)((() => {
            N(u || m || p || g)
          }), [u, m, p, g]), (0, n.useEffect)((() => {
            a("playerRef", _)
          }), [_]), (0, n.useEffect)((() => {
            if (!_?.current || !k?.current) return;
            const e = k.current,
              a = _.current,
              {
                webkitDisplayingFullscreen: t,
                webkitSupportsFullscreen: n
              } = e,
              r = () => {
                d ? a.requestFullscreen() : document.exitFullscreen()
              };
            d ? S() && !w() ? r() : n && !t && k.current.webkitEnterFullscreen() : S() && w() ? r() : n && t && k.current.webkitExitFullscreen()
          }), [d, _, k]), (0, n.useEffect)((() => {
            const e = () => {
              j(), a("fullscreen", w()), t(1, w() ? "Fullscreen entered" : "Fullscreen exited")
            };
            return document.addEventListener("fullscreenchange", e), () => {
              document.removeEventListener("fullscreenchange", e)
            }
          }), [v, m, u]), (0, n.useEffect)((() => {
            (async () => {
              if (k?.current && s)
                if (v) try {
                  await k.current.play()
                } catch (e) {
                  a("volume", 0), a("muteMessageNeeded", !0), a("autoplayUnmuteCheck", !0)
                } else k.current.pause()
            })()
          }), [r, s, v, k?.current]), (0, n.useEffect)((() => {
            k?.current && (k.current.volume = y, 0 !== k.current.volume && a("muteMessageNeeded", !1))
          }), [y, k]), (0, n.useEffect)((() => {
            l || a("settingsMenuOpen", !1)
          }), [l]), (0, n.useEffect)((() => {
            g && a("settingsMenuOpen", !1)
          }), [g]), (0, n.useEffect)((() => {
            p && a("shareOpen", !1)
          }), [p]), (0, n.useEffect)((() => {
            m && (a("fullscreen", !1), a("settingsMenuOpen", !1), a("shareOpen", !1), a("controlsActive", !0), a("progressBarState", {}))
          }), [m]), (0, n.useEffect)((() => () => {
            E()
          }), []), (0, c.jsxs)("div", {
            role: "presentation",
            ref: _,
            "data-context": i,
            className: [G.videoplayer, m ? G.videoplayerEnded : "", f ? "" : G.videoplayerNotRunning].join(" "),
            onClick: () => {
              u && a("volume", 1)
            },
            onMouseLeave: j,
            onMouseEnter: j,
            onMouseMove: j,
            onTouchEnd: E,
            onTouchStart: E,
            children: [(0, c.jsx)(K, {}), (0, c.jsx)(b, {}), (0, c.jsx)(B, {}), (0, c.jsx)(L, {})]
          })
        })),
        W = e => {
          let {
            id: a
          } = e;
          return (0, c.jsx)("iframe", {
            className: "rockstargames-modules-core-videoplayera362be532dfc69b17281cceaa447995a",
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
            videoChangeCallback: g,
            onVideoComplete: k,
            locale: b
          } = e;
          const {
            state: x,
            setState: _,
            track: S
          } = (0, o.mU)(), {
            autoplay: w,
            brand: E,
            fileIndex: j,
            playing: C
          } = x, F = (0, o._6)({
            id: d,
            locale: b
          }), {
            loading: T,
            video: M
          } = F, I = (0, s.useGtmTrack)(), V = (0, l.useAgegated)(), $ = (0, r.useNavigate)();
          return (0, n.useEffect)((() => {
            _("onVideoComplete", k)
          }), [k]), (0, n.useEffect)((() => {
            if (!M) return;
            const {
              files: e
            } = M, a = e.findIndex((e => e.resolution === v)), t = e.findIndex((e => e.default));
            _("fileIndex", -1 !== a ? a : -1 !== t ? t : 0)
          }), [v, M]), (0, n.useEffect)((() => {
            if (!M) return;
            let e;
            e = "clr" === E ? "https://circolocorecords.com" : `https://www.rockstargames.com/videos/${M.id}?embed`;
            const a = {
              title: M.title,
              text: M.description,
              url: e,
              embed: `<iframe src="https://www.rockstargames.com/videoplayer/?id=${M.id}&locale=en_us&resolution=${M.files[j]?.resolution}&embed" allowfullscreen style="width:640px; height:360px; border:none;"title="Rockstar Games Video: ${M.title}"></iframe>`
            };
            _("shareData", a)
          }), [E, j, M]), (0, n.useEffect)((() => {
            if (C) {
              if (_("autoplay", !0), _("running", !0), !M) return;
              I.track({
                event: "video_autoplay",
                video_id: d,
                video_title: M.title,
                video_type: M.group_type,
                video_language: b
              })
            }
          }), [C]), (0, n.useEffect)((() => {
            const e = t || w || !1;
            S(1, "Video started"), _("controlsActive", !0), _("currentTime", 0), _("fullscreen", !1), _("idle", !1), _("meta", null), _("playerEnded", !1), _("playing", e), _("progressBarState", {}), _("settingsMenuOpen", !1), _("shareOpen", !1), _("videoId", d), M && (I.track({
              event: "video_started",
              video_id: d,
              video_title: M.title,
              video_type: M.group_type,
              video_language: b
            }), e && S(1, `Autoplay video with id: [${d}]`, `autoplay[videoId: ${d}]`))
          }), [d]), (0, n.useEffect)((() => {
            _("videoChangeCallback", g || (e => {
              $(`../videos/${e}`)
            }))
          }), [g]), (0, n.useEffect)((() => {
            _("currentTime", p)
          }), [p]), (0, n.useEffect)((() => {
            const {
              video: e
            } = F;
            923 === e?.game?.id && _("brand", "clr"), _("videoData", F)
          }), [JSON.stringify(F)]), (0, n.useEffect)((() => {
            _("aspectRatio", a)
          }), [a]), (0, n.useEffect)((() => {
            _("context", i)
          }), [i]), (0, n.useEffect)((() => {
            _("resolution", v)
          }), [v]), !M || T ? (0, c.jsx)(N.c, {
            hero: u,
            wrapper: f,
            children: (0, c.jsx)(h.c, {})
          }) : ["gtaosession", "gtaostream", "community"].includes(M.group_type) || M.youtubeOnly ? M.agegated ? V((0, c.jsx)(W, {
            id: M.youtube_id
          })) : (0, c.jsx)(W, {
            id: M.youtube_id
          }) : w ? M.agegated ? (0, c.jsx)(N.c, {
            hero: u,
            wrapper: f,
            children: V((0, c.jsx)(Y, {}), {
              bgImg: M.screencap
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
    5960: (e, a, t) => {
      "use strict";
      t.d(a, {
        Yv: () => v,
        iY: () => k,
        cJ: () => n.videoplayer,
        _6: () => g,
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
      var p = t(27500);
      const g = e => {
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
        k = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    },
    27500: e => {
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