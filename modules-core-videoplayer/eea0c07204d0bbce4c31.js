(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [610], {
    5812: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      var n = t(8976);
      var i = t(6160);
      const r = () => (0, i.jsx)("div", {
        className: "adf6a2318b1780ffeb0df59dc5cb7bf90dce",
        children: (0, i.jsx)(n.LoadingAnimation, {})
      })
    },
    6493: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      const n = {
        wrapper: "adf6a2318b1780fffe272cb30137b53bdf00",
        large: "adf6a2318b1780ffe4d3aaa6803560b4dc89",
        badge: "adf6a2318b1780ffc2d669abc0ac0ed138ed",
        hero: "adf6a2318b1780ffc201c9742f2829fd89c6",
        stdWrapper: "adf6a2318b1780ffa325d1936f965cbc1ced"
      };
      var i = t(6160);
      const r = e => {
        let {
          children: a,
          hero: t = !1,
          wrapper: r = !0
        } = e;
        return (0, i.jsx)("div", {
          className: [n.wrapper, t ? n.hero : "", r ? n.stdWrapper : ""].join(" "),
          children: a
        })
      }
    },
    610: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => Z
      });
      var n = t(4932),
        i = t(1424),
        r = t(8976),
        d = t(7194),
        l = t(9929),
        s = t(8590);
      var c = t(6160);
      const o = e => {
          let {
            isClr: a
          } = e;
          const {
            state: t
          } = (0, s.O2)(), {
            running: n
          } = t;
          return n ? null : (0, c.jsx)("div", {
            className: a ? "adf6a2318b1780fffb3ccb39529a72dc1e3b" : "adf6a2318b1780ffea20461230ed7493b641"
          })
        },
        u = () => {
          const {
            state: e
          } = (0, s.O2)(), {
            videoData: a
          } = e, {
            video: t
          } = a;
          return (0, c.jsx)("div", {
            className: "adf6a2318b1780fffc18db9ee8d323e8e064",
            style: {
              background: `url(${t?.screencap}) center/contain no-repeat`
            }
          })
        };
      var f = t(1570);
      const m = () => {
          const {
            state: e
          } = (0, s.O2)(), {
            playerEnded: a,
            videoChangeCallback: t,
            videoData: n
          } = e;
          if (!a) return null;
          const {
            related: i
          } = n;
          return i.results.length ? (0, c.jsx)("div", {
            className: "adf6a2318b1780ffabcb1284b449dd16992f",
            children: (0, c.jsx)("div", {
              className: "adf6a2318b1780ffd36117d3d03c69e4ca24",
              children: i.results.map((e => {
                return (0, c.jsxs)("div", {
                  onClick: () => t(e.id),
                  onKeyUp: a => {
                    t(e.id)
                  },
                  className: "adf6a2318b1780ffbb58c696251a788e82eb",
                  tabIndex: 0,
                  role: "button",
                  children: [(0, c.jsx)("div", {
                    className: "adf6a2318b1780ffdfaaf496dd413131a7a6",
                    style: {
                      background: `url(${a=e.screencap,`${a}?im=Resize=400`}) no-repeat center/contain`
                    }
                  }), (0, c.jsx)("div", {
                    className: "adf6a2318b1780ffe95137e9d16c71ca6e96",
                    children: e.title
                  })]
                }, e.id);
                var a
              }))
            })
          }) : null
        },
        v = {
          info: "adf6a2318b1780ffd6aa7439030114b4e8de",
          title: "adf6a2318b1780fff1964402c785d2f60a54",
          hidden: "adf6a2318b1780ffcd32b8dc4c2edc58cced",
          screenUmute: "adf6a2318b1780ffa9e05293eef9a4adf368",
          brand: "adf6a2318b1780ffefd87836708f2a04a33e",
          clr: "adf6a2318b1780ffc2afdb2cb6245c7ff979",
          rockstar: "adf6a2318b1780ffd22ddde5266d9afa1138"
        },
        p = () => {
          const {
            state: e,
            track: a
          } = (0, s.O2)(), {
            brand: t,
            videoData: n
          } = e, {
            video: i
          } = n, r = () => a(2, "Rockstar click");
          let d, l, o;
          return "clr" === t ? (l = "CircoLoco Records", d = "https://circolocorecords.com", o = d) : (l = "Rockstar Games", d = "https://www.rockstargames.com/", o = `${document.location.origin}/videos/${i.id}`), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("a", {
              className: [v.brand, v[t]].join(" "),
              href: d,
              target: "_blank",
              onClick: r,
              onKeyUp: r,
              rel: "noreferrer",
              tabIndex: 0,
              children: l
            }), (0, c.jsx)("a", {
              target: "_blank",
              href: o,
              onClick: () => {
                a(2, "Video title click")
              },
              rel: "noreferrer",
              children: `${i.game.title}: ${i.title}`
            })]
          })
        },
        b = () => {
          const {
            formatMessage: e
          } = (0, f.useIntl)(), {
            state: a
          } = (0, s.O2)(), {
            windowHeight: t,
            windowWidth: i
          } = (0, l.useWindowResize)(), [r, d] = (0, n.useState)(), [o, u] = (0, n.useState)(), b = (0, n.useRef)(null), {
            controlsActive: k,
            idle: g,
            muteMessageNeeded: h,
            playerEnded: y,
            playerRef: N,
            running: x,
            videoData: S
          } = a, {
            video: E
          } = S;
          return (0, n.useEffect)((() => {
            d(N?.current?.clientHeight), u(b?.current?.clientHeight)
          }), [N?.current, b?.current, i, t]), E ? (0, c.jsxs)("div", {
            className: [v.info, !k || g ? v.hidden : ""].join(" "),
            style: {
              "--effective-player-height": `${r}px`,
              "--effective-title-height": `${o}px`
            },
            children: [(0, c.jsx)("div", {
              className: v.title,
              ref: b,
              children: (0, c.jsx)(p, {})
            }), h && x && (0, c.jsx)("div", {
              className: v.screenUmute,
              children: `${(0,s.b1)()?e(s.sY.videoplayer_unmute_tap):e(s.sY.videoplayer_unmute_click)}`
            }), y && (0, c.jsx)(m, {})]
          }) : null
        },
        k = e => {
          let {
            isClr: a = !1
          } = e;
          const {
            setState: t,
            track: n
          } = (0, s.O2)(), i = () => {
            t("muteMessageNeeded", !1), t("playing", !0), t("volume", 1), n(2, "Screencap clicked to start")
          };
          return (0, c.jsxs)("div", {
            className: "adf6a2318b1780ffcfe1159c77904f2d7bf9",
            role: "button",
            onClick: i,
            onKeyUp: e => {
              i()
            },
            tabIndex: 0,
            children: [(0, c.jsx)(u, {}), (0, c.jsx)(o, {
              isClr: a
            }), (0, c.jsx)(b, {})]
          })
        };
      var g = t(5812),
        h = t(6493);
      const y = {
          fullscreen: "adf6a2318b1780ffa06068f3ff876dfa07bc",
          disabledControlItem: "adf6a2318b1780ffe98746e03d34eec539bf",
          fullscreenOn: "adf6a2318b1780ffabda1d64203debe22e7d",
          fullscreenOff: "adf6a2318b1780ffa58fabca95efe50e8164"
        },
        N = () => {
          const {
            state: e,
            setState: a
          } = (0, s.O2)(), {
            fullscreen: t,
            playerEnded: n
          } = e, i = () => {
            a("fullscreen", !t)
          };
          return (0, c.jsx)("div", {
            role: "button",
            "aria-label": "Fullscreen toggle",
            tabIndex: 0,
            onClick: i,
            onKeyUp: e => {
              i()
            },
            className: [y.fullscreen, t ? y.fullscreenOn : y.fullscreenOff, n ? y.disabledControlItem : ""].join(" ")
          })
        },
        x = {
          playPause: "adf6a2318b1780ffd81a4b30205f7d649215",
          disabledControlItem: "adf6a2318b1780ffd32c19afa09385b0ef81",
          playPauseReplay: "adf6a2318b1780ffc0466813ab5905502908",
          playPausePlaying: "adf6a2318b1780ffb419e1c2c4807d7e894b",
          playPausePaused: "adf6a2318b1780fff2c67752c7b776d2b76f"
        },
        S = () => {
          const {
            state: e,
            setState: a,
            replay: t,
            track: n
          } = (0, s.O2)(), {
            playerEnded: i,
            playing: r
          } = e, d = r ? x.playPausePlaying : x.playPausePaused, l = () => {
            i ? (n(2, "Replay clicked"), t()) : (n(2, "Toggle play/pause clicked"), a("playing", !r))
          };
          return (0, c.jsx)("div", {
            className: [x.playPause, i ? x.playPauseReplay : d].join(" "),
            onClick: l,
            onKeyUp: e => {
              l()
            },
            role: "button",
            tabIndex: 0,
            "aria-label": "Play/pause toggle"
          })
        };
      var E = t(6716),
        w = t.n(E);
      const j = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, s.O2)(), {
            buffered: i,
            idle: r,
            lastPlayingState: d,
            playerEnded: l,
            playing: o,
            playerRef: u,
            progressBarState: f,
            timing: m
          } = e, v = (0, n.useRef)(null), p = (0, n.useRef)(null), b = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = null;
            null !== e && (i = e / p.current.clientWidth, i = Math.min(1, Math.max(0, i))), a("progressBarState", {
              pct: i,
              shouldPause: t,
              lastEvent: n
            })
          };
          if ((0, n.useEffect)((() => {
              l || f.pct || !o || a("controlsActive", !r)
            }), [r, l, f.pct, o]), (0, n.useEffect)((() => {
              a("currentTime", f.pct * m.duration)
            }), [f.pct, m.duration]), (0, n.useEffect)((() => {
              const {
                lastEvent: e,
                pct: t,
                shouldPause: n
              } = f;
              t ? (n && (null === d && a("lastPlayingState", o), a("playing", !1)), e && a("progressBarState", {})) : null !== d && (a("playing", d), a("lastPlayingState", null))
            }), [d, f, m.duration, o]), (0, n.useEffect)((() => {
              const e = v.current;
              if (null === e) return;
              const a = e.getContext("2d"),
                t = e.getBoundingClientRect();
              if (e.width = t.width, e.height = t.height, a.clearRect(0, 0, t.width, t.height), a.fillStyle = "rgba(255, 255, 255, 0.5)", !i || !i.length) return;
              const n = t.width / m.duration;
              for (let e = 0; e < i.length; e += 1) {
                const r = i.start(e),
                  d = i.end(e),
                  l = r * n,
                  s = d * n;
                r <= m.current && m.current <= d && a.fillRect(l, 0, s - l, t.height)
              }
            }), [i, v, m.duration, m.current]), (0, n.useEffect)((() => {
              if (!p.current) return;
              const e = new(w())(p.current),
                a = e => {
                  !l && u.current.contains(e.srcEvent.target) ? b(e.srcEvent.offsetX, !0) : b()
                },
                t = () => {
                  b()
                };
              return e.on("pan", a), e.on("panend", t), () => {
                e.off("pan", a), e.off("panend", t)
              }
            }), [u, p, l]), l) return null;
          let k = 0;
          return (0, c.jsxs)("div", {
            ref: p,
            role: "button",
            tabIndex: 0,
            "aria-label": "Progress bar",
            onKeyUp: e => {
              k = e.touches[0].clientX
            },
            className: "adf6a2318b1780ffa672020aaa1f609ff63d",
            onTouchStart: () => {},
            onTouchEnd: e => {
              e.changedTouches[0].clientX !== k && (t(2, "Time changed"), b(e.changedTouches[0].clientX - k, !1, !0)), k = 0
            },
            onClick: e => {
              t(2, "Time changed"), b(e.nativeEvent.offsetX, !1, !0)
            },
            children: [(0, c.jsx)("div", {
              className: "adf6a2318b1780ffb21601ff656d592093d6"
            }), (0, c.jsx)("canvas", {
              ref: v
            }), (0, c.jsx)("div", {
              className: "adf6a2318b1780ffb2527569d065def372e2",
              style: {
                "--pct-current": m.current / m.duration
              }
            })]
          })
        },
        _ = {
          settings: "adf6a2318b1780ffae8ca19eaf3c385cf4c8",
          disabledControlItem: "adf6a2318b1780ffab0fc6547d723d4322b1",
          menu: "adf6a2318b1780ffbfb574a75027ce10b2c4",
          activeFileButton: "adf6a2318b1780ffef268f4b1d80b25ca878",
          fileMenuOpen: "adf6a2318b1780ffd6310bd6f0cd25eb252a"
        },
        C = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, s.O2)(), {
            fileIndex: n,
            playerEnded: i,
            settingsMenuOpen: r,
            videoData: d,
            videoRef: l
          } = e, {
            video: o
          } = d, u = () => {
            t(2, "Settings clicked"), a("settingsMenuOpen", !r)
          };
          return (0, c.jsx)("div", {
            role: "button",
            onClick: u,
            onKeyUp: u,
            tabIndex: 0,
            className: [_.settings, i ? _.disabledControlItem : ""].join(" "),
            children: (0, c.jsx)("div", {
              className: [_.menu, r ? _.fileMenuOpen : ""].join(" "),
              children: o?.files?.map(((e, i) => (0, c.jsx)("button", {
                className: n === i ? _.activeFileButton : "",
                onClick: n => {
                  t(2, `Resolution changed to ${e.resolution}`), a("savedTime", l?.current?.currentTime), a("fileIndex", i), a("settingsMenuOpen", !1), n.stopPropagation()
                },
                type: "button",
                children: e.resolution
              }, e.src)))
            })
          })
        },
        T = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, s.O2)(), {
            shareData: n,
            shareOpen: i
          } = e, r = async () => {
            t(2, "Share clicked"), navigator?.share ? await (navigator?.share?.(n)) : a("shareOpen", !i)
          };
          return (0, c.jsx)("div", {
            onClick: r,
            onKeyUp: r,
            role: "button",
            className: "adf6a2318b1780ffba9d41749f149de5ccff",
            tabIndex: 0,
            "aria-label": "Share this video"
          })
        },
        F = {
          time: "adf6a2318b1780ffe0fe62466f7a0b13b378",
          disabledControlItem: "adf6a2318b1780ffca50e0fc81343da3169c",
          clr: "adf6a2318b1780ffa1c4952f576f7071bc86"
        },
        O = e => {
          const a = new Date(1e3 * e),
            t = a.getUTCMinutes(),
            n = a.getSeconds();
          return `${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`
        },
        I = () => {
          const {
            state: e
          } = (0, s.O2)(), {
            brand: a,
            timing: t
          } = e, {
            current: n,
            duration: i
          } = t;
          return (0, c.jsx)("div", {
            className: [F.time, F[a]].join(" "),
            children: `${O(n)} / ${O(i)}`
          })
        },
        V = {
          volumen: "adf6a2318b1780fff3bdce796bad450cb8cc",
          disabledControlItem: "adf6a2318b1780ffa819a4708bd3e0eaff88",
          volumeMuted: "adf6a2318b1780ffca10ddf8858db2d1735a",
          volumeSomeVolume: "adf6a2318b1780ffcf4ab0aaf05036d0ecde",
          volumeMax: "adf6a2318b1780fff38d1c00bb124be082f1"
        },
        $ = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, s.O2)(), {
            playerEnded: n,
            volume: i
          } = e, r = () => {
            a("volume", i > 0 ? 0 : 1), t(2, "Volume changed")
          };
          return (0, c.jsx)("div", {
            role: "button",
            tabIndex: 0,
            onClick: r,
            onKeyUp: r,
            "aria-label": "Mute / unmute toggle",
            className: [V.volumen, 0 === i ? V.volumeMuted : V.volumeMax, n ? V.disabledControlItem : ""].join(" ")
          })
        },
        M = {
          controls: "adf6a2318b1780fffaff2f2376054f65bff9",
          controlsInactive: "adf6a2318b1780ffcab551130a7070d39655",
          controlsBottom: "adf6a2318b1780fff0cb45bf69c7da94aed9"
        },
        R = () => {
          const {
            state: e
          } = (0, s.O2)(), {
            controlsActive: a
          } = e;
          return (0, c.jsxs)("div", {
            className: [M.controls, a ? "" : M.controlsInactive].join(" "),
            children: [(0, c.jsx)(j, {}), (0, c.jsxs)("div", {
              className: M.controlsBottom,
              children: [(0, c.jsx)(S, {}), (0, c.jsx)($, {}), (0, c.jsx)(I, {}), (0, c.jsx)(C, {}), (0, c.jsx)(T, {}), (0, c.jsx)(N, {})]
            })]
          })
        },
        L = {
          screenShare: "adf6a2318b1780ffe252bcc1d1ac2f74777e",
          shareScreenActive: "adf6a2318b1780ffc57ffc4c6829b0f12938",
          shareScreenContent: "adf6a2318b1780ffbc00594ea7b04725cc34",
          shareClose: "adf6a2318b1780ffbf25f441fe387c19223e",
          shareSocial: "adf6a2318b1780ffb96269caa362542e8dd6",
          "socialLink-facebook": "adf6a2318b1780fff7d1a5c4fd2882e40b0e",
          "socialLink-twitter": "adf6a2318b1780ffe469662b9e58eca48cb1",
          "socialLink-instagram": "adf6a2318b1780fff98d80e61775bc42a300",
          "socialLink-reddit": "adf6a2318b1780ffab1b430b0806a1a44901",
          "socialLink-linkedin": "adf6a2318b1780fffbef457395b67e6be870",
          shareCopy: "adf6a2318b1780ffdcbf4f849359481e1cb7"
        },
        P = () => {
          const {
            formatMessage: e
          } = (0, f.useIntl)(), {
            state: a,
            setState: t,
            track: n
          } = (0, s.O2)(), {
            shareData: i,
            shareOpen: r
          } = a;
          if (!i) return null;
          const {
            title: d,
            url: l
          } = i, o = () => {
            n(2, "Share screen closed"), t("shareOpen", !1)
          };
          return (0, c.jsx)("div", {
            className: [L.screenShare, r ? L.shareScreenActive : ""].join(" "),
            children: (0, c.jsxs)("div", {
              className: L.shareScreenContent,
              children: [(0, c.jsx)("h3", {
                children: e(s.sY.videoplayer_share_title)
              }), (0, c.jsx)("div", {
                role: "button",
                tabIndex: 0,
                "aria-label": "Close share screen.",
                onClick: o,
                onKeyUp: o,
                className: L.shareClose
              }), (0, c.jsx)("div", {
                className: L.shareSocial,
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
                    href: t.replace("{title}", escape(d)).replace("{url}", escape(l)),
                    className: L[`socialLink-${a}`],
                    rel: "noreferrer",
                    tabIndex: 0,
                    "aria-label": `Share to ${a}`,
                    children: a
                  }, a)
                }))
              }), [{
                type: "url",
                text: i.url
              }, {
                type: "embed",
                text: i.embed
              }].map((a => (0, c.jsxs)("div", {
                className: L.shareCopy,
                children: [(0, c.jsx)("input", {
                  value: a.text,
                  readOnly: !0
                }), navigator?.clipboard?.writeText ? (0, c.jsx)("button", {
                  type: "button",
                  onClick: async () => {
                    await navigator.clipboard.writeText(a.text), n(2, `Share ${a.type} copied`)
                  },
                  children: e(s.sY.videoplayer_share_copy)
                }) : ""]
              }, a.type)))]
            })
          })
        },
        D = () => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, s.O2)(), {
            controlsActive: i,
            currentTime: r,
            fileIndex: d,
            muteMessageNeeded: l,
            onVideoComplete: o,
            playerEnded: u,
            playing: f,
            savedTime: m,
            videoData: v,
            volume: p
          } = e, {
            video: b
          } = v, [k, g] = (0, n.useState)(null), h = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            const e = b?.files?.[d]?.src ?? null;
            e && g(e)
          }), [d, b]), (0, n.useEffect)((() => {
            a("videoRef", h)
          }), [h]), (0, n.useEffect)((() => {
            r && h.current && (h.current.currentTime = r, a("currentTime", null))
          }), [r, h?.current]), (0, n.useEffect)((() => {
            const e = h?.current;
            if (!e) return;
            const n = e => {
                a("meta", e)
              },
              i = () => {
                0 !== m && (a("currentTime", m), a("savedTime", null)), a("playerEnded", !1)
              },
              r = () => {
                a("timing", {
                  duration: (Number.isNaN(e.duration) ? 0 : e.duration) ?? 0,
                  current: (Number.isNaN(e.currentTime) ? 0 : e.currentTime) ?? 0
                })
              },
              d = () => {
                a("volume", e.volume)
              },
              l = () => {
                t(1, "Video completed"), a("playing", !1), o ? o?.() : a("playerEnded", !0)
              },
              s = () => {
                a("playing", !1), a("fullscreen", !1)
              },
              c = () => {
                a("buffered", e.buffered)
              };
            return e.addEventListener("loadeddata", i), e.addEventListener("loadedmetadata", n), e.addEventListener("timeupdate", r), e.addEventListener("volumechange", d), e.addEventListener("ended", l), e.addEventListener("progress", c), e.addEventListener("webkitendfullscreen", s), () => {
              e.removeEventListener("loadeddata", i), e.removeEventListener("loadedmetadata", n), e.removeEventListener("timeupdate", r), e.removeEventListener("volumechange", d), e.removeEventListener("ended", l), e.removeEventListener("progress", c), e.removeEventListener("webkitendfullscreen", s)
            }
          }), [f, m, h?.current]), (0, c.jsx)("video", {
            ref: h,
            autoPlay: !0,
            className: "adf6a2318b1780ffcaded5047c2fa094d46a",
            src: k,
            muted: 0 === p,
            playsInline: !0,
            onTouchEnd: () => {
              t(2, "Video tapped"), u || l || a("controlsActive", !i)
            },
            onClick: () => {
              (0, s.b1)() || (t(2, "Video clicked"), u || l || a("playing", !f))
            }
          })
        },
        A = {
          videoplayer: "adf6a2318b1780ffeae9488d6ef8287c53b2",
          videoplayerEnded: "adf6a2318b1780ffa8887175f0f987bad4e5",
          videoplayerNotRunning: "adf6a2318b1780fff3b610ed684ceab614f7",
          controls: "adf6a2318b1780ffefe011c1ad38a1cecfee"
        },
        B = (0, l.withLocale)((() => {
          const {
            state: e,
            setState: a,
            track: t
          } = (0, s.O2)(), {
            autoplayUnmuteCheck: i,
            context: r,
            controlsActive: d,
            fullscreen: l,
            meta: o,
            muteMessageNeeded: u,
            playerEnded: f,
            playing: m,
            running: v,
            settingsMenuOpen: p,
            shareOpen: k,
            videoRef: g,
            volume: h
          } = e, [y, N] = (0, n.useState)(!1), x = (0, n.useRef)(null), S = (0, n.useRef)(null), E = () => document?.fullscreenEnabled ?? !1, w = () => "string" == typeof document.fullscreenElement?.nodeName ?? !1, j = () => {
            x.current && clearInterval(x?.current)
          }, _ = () => {
            j(), a("idle", !1), x.current = setTimeout((() => {
              y || a("idle", !0)
            }), 3e3)
          };
          return (0, n.useEffect)((() => {
            _()
          }), [y]), (0, n.useEffect)((() => {
            N(u || f || p || k)
          }), [u, f, p, k]), (0, n.useEffect)((() => {
            a("playerRef", S)
          }), [S]), (0, n.useEffect)((() => {
            if (!S?.current || !g?.current) return;
            const e = g.current,
              a = S.current,
              {
                webkitDisplayingFullscreen: t,
                webkitSupportsFullscreen: n
              } = e,
              i = () => {
                l ? a.requestFullscreen() : document.exitFullscreen()
              };
            l ? E() && !w() ? i() : n && !t && g.current.webkitEnterFullscreen() : E() && w() ? i() : n && t && g.current.webkitExitFullscreen()
          }), [l, S, g]), (0, n.useEffect)((() => {
            const e = () => {
                _(), a("fullscreen", w()), t(1, w() ? "Fullscreen entered" : "Fullscreen exited")
              },
              n = e => {
                f || u || 32 !== parseInt(e.code, 10) && "Space" !== e.code || a("playing", !m)
              };
            return document.addEventListener("keypress", n, !1), document.addEventListener("fullscreenchange", e), () => {
              document.removeEventListener("keypress", n, !1), document.removeEventListener("fullscreenchange", e)
            }
          }), [m, f, u]), (0, n.useEffect)((() => {
            (async () => {
              if (g?.current && o)
                if (m) try {
                  await g.current.play()
                } catch (e) {
                  a("volume", 0), a("muteMessageNeeded", !0), a("autoplayUnmuteCheck", !0)
                } else g.current.pause()
            })()
          }), [i, o, m, g?.current]), (0, n.useEffect)((() => {
            g?.current && (g.current.volume = h, 0 !== g.current.volume && a("muteMessageNeeded", !1))
          }), [h, g]), (0, n.useEffect)((() => {
            d || a("settingsMenuOpen", !1)
          }), [d]), (0, n.useEffect)((() => {
            k && a("settingsMenuOpen", !1)
          }), [k]), (0, n.useEffect)((() => {
            p && a("shareOpen", !1)
          }), [p]), (0, n.useEffect)((() => {
            f && (a("fullscreen", !1), a("settingsMenuOpen", !1), a("shareOpen", !1), a("controlsActive", !0), a("progressBarState", {}))
          }), [f]), (0, n.useEffect)((() => () => {
            j()
          }), []), (0, c.jsxs)("div", {
            role: "presentation",
            ref: S,
            "data-context": r,
            className: [A.videoplayer, f ? A.videoplayerEnded : "", v ? "" : A.videoplayerNotRunning].join(" "),
            onClick: () => {
              u && a("volume", 1)
            },
            onMouseLeave: _,
            onMouseEnter: _,
            onMouseMove: _,
            onTouchEnd: j,
            onTouchStart: j,
            children: [(0, c.jsx)(D, {}), (0, c.jsx)(b, {}), (0, c.jsx)(P, {}), (0, c.jsx)(R, {})]
          })
        })),
        U = e => {
          let {
            id: a
          } = e;
          return (0, c.jsx)("iframe", {
            className: "adf6a2318b1780ffeae90eddb5866e3bd40d",
            src: `https://www.youtube.com/embed/${a}?autoplay=1`,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            title: "Rockstar Games on YouTube"
          })
        },
        K = e => {
          let {
            aspectRatio: a = 16 / 9,
            autoplay: t = !1,
            context: r = "site",
            id: l,
            hero: o = !1,
            isClr: u = !1,
            resolution: f = "_auto",
            wrapper: m = !0,
            start: v = 0,
            videoChangeCallback: p,
            onVideoComplete: b,
            locale: y
          } = e;
          const {
            state: N,
            setState: x,
            track: S
          } = (0, s.O2)(), {
            autoplay: E,
            brand: w,
            fileIndex: j,
            playing: _
          } = N, C = (0, s.CP)({
            id: l,
            locale: y
          }), {
            loading: T,
            video: F
          } = C, O = (0, d.useAgegated)(), I = (0, i.useNavigate)();
          return (0, n.useEffect)((() => {
            x("onVideoComplete", b)
          }), [b]), (0, n.useEffect)((() => {
            if (!F) return;
            const {
              files: e
            } = F, a = e.findIndex((e => e.resolution === f)), t = e.findIndex((e => e.default));
            x("fileIndex", -1 !== a ? a : -1 !== t ? t : 0)
          }), [f, F]), (0, n.useEffect)((() => {
            if (!F) return;
            let e;
            e = "clr" === w ? "https://circolocorecords.com" : `https://www.rockstargames.com/videos/${F.id}?embed`;
            const a = {
              title: F.title,
              text: F.description,
              url: e,
              embed: `<iframe src="https://www.rockstargames.com/videoplayer/?id=${F.id}&locale=en_us&resolution=${F.files[j]?.resolution}&embed" allowfullscreen style="width:640px; height:360px; border:none;"title="Rockstar Games Video: ${F.title}"></iframe>`
            };
            x("shareData", a)
          }), [w, j, F]), (0, n.useEffect)((() => {
            _ && (x("autoplay", !0), x("running", !0))
          }), [_]), (0, n.useEffect)((() => {
            S(1, "Video started"), x("controlsActive", !0), x("currentTime", 0), x("fullscreen", !1), x("idle", !1), x("meta", null), x("playerEnded", !1), x("playing", t || E || !1), x("progressBarState", {}), x("settingsMenuOpen", !1), x("shareOpen", !1), x("videoId", l)
          }), [l]), (0, n.useEffect)((() => {
            x("videoChangeCallback", p || (e => {
              I(`../videos/${e}`)
            }))
          }), [p]), (0, n.useEffect)((() => {
            x("currentTime", v)
          }), [v]), (0, n.useEffect)((() => {
            const {
              video: e
            } = C;
            923 === e?.game?.id && x("brand", "clr"), x("videoData", C)
          }), [JSON.stringify(C)]), (0, n.useEffect)((() => {
            x("aspectRatio", a)
          }), [a]), (0, n.useEffect)((() => {
            x("context", r)
          }), [r]), (0, n.useEffect)((() => {
            x("resolution", f)
          }), [f]), !F || T ? (0, c.jsx)(h.Z, {
            hero: o,
            wrapper: m,
            children: (0, c.jsx)(g.Z, {})
          }) : ["gtaosession", "gtaostream", "community"].includes(F.group_type) ? F.agegated ? O((0, c.jsx)(U, {
            id: F.youtube_id
          })) : (0, c.jsx)(U, {
            id: F.youtube_id
          }) : E ? F.agegated ? (0, c.jsx)(h.Z, {
            hero: o,
            wrapper: m,
            children: O((0, c.jsx)(B, {}), {
              bgImg: F.screencap
            })
          }) : (0, c.jsx)(h.Z, {
            hero: o,
            wrapper: m,
            children: (0, c.jsx)(B, {})
          }) : (0, c.jsx)(h.Z, {
            hero: o,
            wrapper: m,
            children: (0, c.jsx)(k, {
              isClr: u
            })
          })
        },
        Z = (0, l.withGtmTracking)((0, r.withSimpleErrorBoundary)((e => (0, c.jsx)(s.tl, {
          children: (0, c.jsx)(K, {
            ...e
          })
        })), "Something went wrong with the video player."))
    },
    8590: (e, a, t) => {
      "use strict";
      t.d(a, {
        tl: () => m,
        b1: () => k,
        sY: () => n,
        CP: () => b,
        O2: () => v
      });
      const n = (0, t(1570).defineMessages)({
        videoplayer_playlist_active_badge: {
          id: "videoplayer_playlist_active_badge",
          description: "Text displayed on active playlist item",
          defaultMessage: "Now Playing"
        },
        videoplayer_unmute_tap: {
          id: "videoplayer_unmute_tap",
          description: "Text displayed on player for unmuting on tap devices",
          defaultMessage: "Tap anywhere to unmute."
        },
        videoplayer_unmute_click: {
          id: "videoplayer_unmute_click",
          description: "Text displayed on player for unmuting on non-tap devices",
          defaultMessage: "Click anywhere to unmute."
        },
        videoplayer_share_title: {
          id: "videoplayer_share_title",
          description: "Text displayed on player when sharing.",
          defaultMessage: "Share"
        },
        videoplayer_share_copy: {
          id: "videoplayer_share_copy",
          description: "Text displayed on player share copy button.",
          defaultMessage: "Copy"
        }
      });
      var i = t(4932),
        r = t(8272),
        d = t(4859),
        l = t(6711),
        s = t(9929);
      const c = {
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
        o = {};
      var u = t(6160);
      const f = (0, i.createContext)(),
        m = e => {
          let {
            children: a
          } = e;
          const [t] = (0, i.useState)((0, r.Z)()), n = (e => {
            let {
              id: a
            } = e;
            const t = o[a] ?? (o[a] = (0, d.makeVar)(c)),
              n = (e, a) => t({
                ...t(),
                [e]: a
              }),
              r = (0, d.useReactiveVar)(t),
              u = (0, l.useGtmTrack)(),
              f = (0, s.useLocale)(),
              {
                videoData: m
              } = r,
              v = (0, i.useCallback)(((e, a, t) => {
                const {
                  video: n
                } = m;
                if (!n || !u) return;
                const {
                  id: i,
                  title: r
                } = n;
                u.track({
                  event: "trackEvent",
                  eventCategory: 1 === e ? "Player Event" : "User Event",
                  eventAction: a,
                  eventLabel: `${i}(${f}) - ${r}`,
                  eventValue: t
                })
              }), [f, m]);
            return {
              state: r,
              setState: n,
              replay: () => {
                n("playerEnded", !1), n("playing", !0), n("currentTime", 0), n("timing", {
                  current: 0,
                  duration: 0
                })
              },
              track: v
            }
          })({
            id: t
          });
          return (0, u.jsx)(f.Provider, {
            value: n,
            children: a
          })
        },
        v = () => (0, i.useContext)(f);
      var p = t(6061);
      const b = e => {
          let {
            id: a,
            locale: t
          } = e;
          const [n, r] = (0, i.useState)({}), [l, s] = (0, i.useState)(null), [c, o] = (0, i.useState)(null), {
            data: u,
            loading: f
          } = (0, d.useQuery)(p.Video, {
            variables: n,
            skip: !Object.entries(n).length
          });
          return (0, i.useEffect)((() => {
            if (!a) return;
            const e = {
              id: Number(a)
            };
            t && (e.locale = t), r(e)
          }), [a, t]), (0, i.useEffect)((() => {
            u?.video && s(u.video), u?.related && o(u.related)
          }), [u]), {
            loading: f,
            related: c,
            video: l
          }
        },
        k = () => "ontouchstart" in window || navigator.maxTouchPoints > 0
    },
    6061: e => {
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          d = new Set,
          l = new Set;
        for (r.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var s = l;
          l = new Set, s.forEach((function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "Video")
    }
  }
]);