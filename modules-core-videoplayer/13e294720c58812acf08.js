(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [610], {
    5812: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => r
      });
      var a = n(8976);
      var i = n(6160);
      const r = () => (0, i.jsx)("div", {
        className: "bbd695bb0414167beb0df59dc5cb7bf90dce",
        children: (0, i.jsx)(a.LoadingAnimation, {})
      })
    },
    6493: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => r
      });
      const a = {
        wrapper: "bbd695bb0414167bfe272cb30137b53bdf00",
        large: "bbd695bb0414167be4d3aaa6803560b4dc89",
        badge: "bbd695bb0414167bc2d669abc0ac0ed138ed",
        hero: "bbd695bb0414167bc201c9742f2829fd89c6",
        stdWrapper: "bbd695bb0414167ba325d1936f965cbc1ced"
      };
      var i = n(6160);
      const r = e => {
        let {
          children: t,
          hero: n = !1,
          wrapper: r = !0
        } = e;
        return (0, i.jsx)("div", {
          className: [a.wrapper, n ? a.hero : "", r ? a.stdWrapper : ""].join(" "),
          children: t
        })
      }
    },
    610: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => K
      });
      var a = n(4932),
        i = n(1424),
        r = n(8976),
        d = n(7194),
        l = n(9929),
        s = n(8590);
      var c = n(6160);
      const o = e => {
          let {
            isClr: t
          } = e;
          const {
            state: n
          } = (0, s.O2)(), {
            running: a
          } = n;
          return a ? null : (0, c.jsx)("div", {
            className: t ? "bbd695bb0414167bfb3ccb39529a72dc1e3b" : "bbd695bb0414167bea20461230ed7493b641"
          })
        },
        u = () => {
          const {
            state: e
          } = (0, s.O2)(), {
            videoData: t
          } = e, {
            video: n
          } = t;
          return (0, c.jsx)("div", {
            className: "bbd695bb0414167bfc18db9ee8d323e8e064",
            style: {
              background: `url(${n?.screencap}) center/contain no-repeat`
            }
          })
        };
      var b = n(1570);
      const m = () => {
          const {
            state: e
          } = (0, s.O2)(), {
            playerEnded: t,
            videoChangeCallback: n,
            videoData: a
          } = e;
          if (!t) return null;
          const {
            related: i
          } = a;
          return i.results.length ? (0, c.jsx)("div", {
            className: "bbd695bb0414167babcb1284b449dd16992f",
            children: (0, c.jsx)("div", {
              className: "bbd695bb0414167bd36117d3d03c69e4ca24",
              children: i.results.map((e => {
                return (0, c.jsxs)("div", {
                  onClick: () => n(e.id),
                  onKeyUp: t => {
                    n(e.id)
                  },
                  className: "bbd695bb0414167bbb58c696251a788e82eb",
                  tabIndex: 0,
                  role: "button",
                  children: [(0, c.jsx)("div", {
                    className: "bbd695bb0414167bdfaaf496dd413131a7a6",
                    style: {
                      background: `url(${t=e.screencap,`${t}?im=Resize=400`}) no-repeat center/contain`
                    }
                  }), (0, c.jsx)("div", {
                    className: "bbd695bb0414167be95137e9d16c71ca6e96",
                    children: e.title
                  })]
                }, e.id);
                var t
              }))
            })
          }) : null
        },
        v = {
          info: "bbd695bb0414167bd6aa7439030114b4e8de",
          title: "bbd695bb0414167bf1964402c785d2f60a54",
          hidden: "bbd695bb0414167bcd32b8dc4c2edc58cced",
          screenUmute: "bbd695bb0414167ba9e05293eef9a4adf368",
          brand: "bbd695bb0414167befd87836708f2a04a33e",
          clr: "bbd695bb0414167bc2afdb2cb6245c7ff979",
          rockstar: "bbd695bb0414167bd22ddde5266d9afa1138"
        },
        f = () => {
          const {
            state: e,
            track: t
          } = (0, s.O2)(), {
            brand: n,
            videoData: a
          } = e, {
            video: i
          } = a, r = () => t(2, "Rockstar click");
          let d, l, o;
          return "clr" === n ? (l = "CircoLoco Records", d = "https://circolocorecords.com", o = d) : (l = "Rockstar Games", d = "https://www.rockstargames.com/", o = `${document.location.origin}/videos/${i.id}`), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("a", {
              className: [v.brand, v[n]].join(" "),
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
                t(2, "Video title click")
              },
              rel: "noreferrer",
              children: `${i.game.title}: ${i.title}`
            })]
          })
        },
        p = () => {
          const {
            formatMessage: e
          } = (0, b.useIntl)(), {
            state: t
          } = (0, s.O2)(), {
            windowHeight: n,
            windowWidth: i
          } = (0, l.useWindowResize)(), [r, d] = (0, a.useState)(), [o, u] = (0, a.useState)(), p = (0, a.useRef)(null), {
            controlsActive: k,
            idle: g,
            muteMessageNeeded: h,
            playerEnded: y,
            playerRef: N,
            running: x,
            videoData: S
          } = t, {
            video: E
          } = S;
          return (0, a.useEffect)((() => {
            d(N?.current?.clientHeight), u(p?.current?.clientHeight)
          }), [N?.current, p?.current, i, n]), E ? (0, c.jsxs)("div", {
            className: [v.info, !k || g ? v.hidden : ""].join(" "),
            style: {
              "--effective-player-height": `${r}px`,
              "--effective-title-height": `${o}px`
            },
            children: [(0, c.jsx)("div", {
              className: v.title,
              ref: p,
              children: (0, c.jsx)(f, {})
            }), h && x && (0, c.jsx)("div", {
              className: v.screenUmute,
              children: `${(0,s.b1)()?e(s.sY.videoplayer_unmute_tap):e(s.sY.videoplayer_unmute_click)}`
            }), y && (0, c.jsx)(m, {})]
          }) : null
        },
        k = e => {
          let {
            isClr: t = !1
          } = e;
          const {
            setState: n,
            track: a
          } = (0, s.O2)(), i = () => {
            n("muteMessageNeeded", !1), n("playing", !0), n("volume", 1), a(2, "Screencap clicked to start")
          };
          return (0, c.jsxs)("div", {
            className: "bbd695bb0414167bcfe1159c77904f2d7bf9",
            role: "button",
            onClick: i,
            onKeyUp: e => {
              i()
            },
            tabIndex: 0,
            children: [(0, c.jsx)(u, {}), (0, c.jsx)(o, {
              isClr: t
            }), (0, c.jsx)(p, {})]
          })
        };
      var g = n(5812),
        h = n(6493);
      const y = {
          fullscreen: "bbd695bb0414167ba06068f3ff876dfa07bc",
          disabledControlItem: "bbd695bb0414167be98746e03d34eec539bf",
          fullscreenOn: "bbd695bb0414167babda1d64203debe22e7d",
          fullscreenOff: "bbd695bb0414167ba58fabca95efe50e8164"
        },
        N = () => {
          const {
            state: e,
            setState: t
          } = (0, s.O2)(), {
            fullscreen: n,
            playerEnded: a
          } = e, i = () => {
            t("fullscreen", !n)
          };
          return (0, c.jsx)("div", {
            role: "button",
            "aria-label": "Fullscreen toggle",
            tabIndex: 0,
            onClick: i,
            onKeyUp: e => {
              i()
            },
            className: [y.fullscreen, n ? y.fullscreenOn : y.fullscreenOff, a ? y.disabledControlItem : ""].join(" ")
          })
        },
        x = {
          playPause: "bbd695bb0414167bd81a4b30205f7d649215",
          disabledControlItem: "bbd695bb0414167bd32c19afa09385b0ef81",
          playPauseReplay: "bbd695bb0414167bc0466813ab5905502908",
          playPausePlaying: "bbd695bb0414167bb419e1c2c4807d7e894b",
          playPausePaused: "bbd695bb0414167bf2c67752c7b776d2b76f"
        },
        S = () => {
          const {
            state: e,
            setState: t,
            replay: n,
            track: a
          } = (0, s.O2)(), {
            playerEnded: i,
            playing: r
          } = e, d = r ? x.playPausePlaying : x.playPausePaused, l = () => {
            i ? (a(2, "Replay clicked"), n()) : (a(2, "Toggle play/pause clicked"), t("playing", !r))
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
      var E = n(6716),
        w = n.n(E);
      const j = () => {
          const {
            state: e,
            setState: t,
            track: n
          } = (0, s.O2)(), {
            buffered: i,
            idle: r,
            lastPlayingState: d,
            playerEnded: l,
            playing: o,
            playerRef: u,
            progressBarState: b,
            timing: m
          } = e, v = (0, a.useRef)(null), f = (0, a.useRef)(null), p = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = null;
            null !== e && (i = e / f.current.clientWidth, i = Math.min(1, Math.max(0, i))), t("progressBarState", {
              pct: i,
              shouldPause: n,
              lastEvent: a
            })
          };
          if ((0, a.useEffect)((() => {
              l || b.pct || !o || t("controlsActive", !r)
            }), [r, l, b.pct, o]), (0, a.useEffect)((() => {
              t("currentTime", b.pct * m.duration)
            }), [b.pct, m.duration]), (0, a.useEffect)((() => {
              const {
                lastEvent: e,
                pct: n,
                shouldPause: a
              } = b;
              n ? (a && (null === d && t("lastPlayingState", o), t("playing", !1)), e && t("progressBarState", {})) : null !== d && (t("playing", d), t("lastPlayingState", null))
            }), [d, b, m.duration, o]), (0, a.useEffect)((() => {
              const e = v.current;
              if (null === e) return;
              const t = e.getContext("2d"),
                n = e.getBoundingClientRect();
              if (e.width = n.width, e.height = n.height, t.clearRect(0, 0, n.width, n.height), t.fillStyle = "rgba(255, 255, 255, 0.5)", !i || !i.length) return;
              const a = n.width / m.duration;
              for (let e = 0; e < i.length; e += 1) {
                const r = i.start(e),
                  d = i.end(e),
                  l = r * a,
                  s = d * a;
                r <= m.current && m.current <= d && t.fillRect(l, 0, s - l, n.height)
              }
            }), [i, v, m.duration, m.current]), (0, a.useEffect)((() => {
              if (!f.current) return;
              const e = new(w())(f.current),
                t = e => {
                  !l && u.current.contains(e.srcEvent.target) ? p(e.srcEvent.offsetX, !0) : p()
                },
                n = () => {
                  p()
                };
              return e.on("pan", t), e.on("panend", n), () => {
                e.off("pan", t), e.off("panend", n)
              }
            }), [u, f, l]), l) return null;
          let k = 0;
          return (0, c.jsxs)("div", {
            ref: f,
            role: "button",
            tabIndex: 0,
            "aria-label": "Progress bar",
            onKeyUp: e => {
              k = e.touches[0].clientX
            },
            className: "bbd695bb0414167ba672020aaa1f609ff63d",
            onTouchStart: () => {},
            onTouchEnd: e => {
              e.changedTouches[0].clientX !== k && (n(2, "Time changed"), p(e.changedTouches[0].clientX - k, !1, !0)), k = 0
            },
            onClick: e => {
              n(2, "Time changed"), p(e.nativeEvent.offsetX, !1, !0)
            },
            children: [(0, c.jsx)("div", {
              className: "bbd695bb0414167bb21601ff656d592093d6"
            }), (0, c.jsx)("canvas", {
              ref: v
            }), (0, c.jsx)("div", {
              className: "bbd695bb0414167bb2527569d065def372e2",
              style: {
                "--pct-current": m.current / m.duration
              }
            })]
          })
        },
        _ = {
          settings: "bbd695bb0414167bae8ca19eaf3c385cf4c8",
          disabledControlItem: "bbd695bb0414167bab0fc6547d723d4322b1",
          menu: "bbd695bb0414167bbfb574a75027ce10b2c4",
          activeFileButton: "bbd695bb0414167bef268f4b1d80b25ca878",
          fileMenuOpen: "bbd695bb0414167bd6310bd6f0cd25eb252a"
        },
        C = () => {
          const {
            state: e,
            setState: t,
            track: n
          } = (0, s.O2)(), {
            fileIndex: a,
            playerEnded: i,
            settingsMenuOpen: r,
            videoData: d,
            videoRef: l
          } = e, {
            video: o
          } = d, u = () => {
            n(2, "Settings clicked"), t("settingsMenuOpen", !r)
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
                className: a === i ? _.activeFileButton : "",
                onClick: a => {
                  n(2, `Resolution changed to ${e.resolution}`), t("savedTime", l?.current?.currentTime), t("fileIndex", i), t("settingsMenuOpen", !1), a.stopPropagation()
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
            setState: t,
            track: n
          } = (0, s.O2)(), {
            shareData: a,
            shareOpen: i
          } = e, r = async () => {
            n(2, "Share clicked"), navigator?.share ? await (navigator?.share?.(a)) : t("shareOpen", !i)
          };
          return (0, c.jsx)("div", {
            onClick: r,
            onKeyUp: r,
            role: "button",
            className: "bbd695bb0414167bba9d41749f149de5ccff",
            tabIndex: 0,
            "aria-label": "Share this video"
          })
        },
        F = {
          time: "bbd695bb0414167be0fe62466f7a0b13b378",
          disabledControlItem: "bbd695bb0414167bca50e0fc81343da3169c",
          clr: "bbd695bb0414167ba1c4952f576f7071bc86"
        },
        O = e => {
          const t = new Date(1e3 * e),
            n = t.getUTCMinutes(),
            a = t.getSeconds();
          return `${n.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`
        },
        I = () => {
          const {
            state: e
          } = (0, s.O2)(), {
            brand: t,
            timing: n
          } = e, {
            current: a,
            duration: i
          } = n;
          return (0, c.jsx)("div", {
            className: [F.time, F[t]].join(" "),
            children: `${O(a)} / ${O(i)}`
          })
        },
        V = {
          volumen: "bbd695bb0414167bf3bdce796bad450cb8cc",
          disabledControlItem: "bbd695bb0414167ba819a4708bd3e0eaff88",
          volumeMuted: "bbd695bb0414167bca10ddf8858db2d1735a",
          volumeSomeVolume: "bbd695bb0414167bcf4ab0aaf05036d0ecde",
          volumeMax: "bbd695bb0414167bf38d1c00bb124be082f1"
        },
        $ = () => {
          const {
            state: e,
            setState: t,
            track: n
          } = (0, s.O2)(), {
            playerEnded: a,
            volume: i
          } = e, r = () => {
            t("volume", i > 0 ? 0 : 1), n(2, "Volume changed")
          };
          return (0, c.jsx)("div", {
            role: "button",
            tabIndex: 0,
            onClick: r,
            onKeyUp: r,
            "aria-label": "Mute / unmute toggle",
            className: [V.volumen, 0 === i ? V.volumeMuted : V.volumeMax, a ? V.disabledControlItem : ""].join(" ")
          })
        },
        M = {
          controls: "bbd695bb0414167bfaff2f2376054f65bff9",
          controlsInactive: "bbd695bb0414167bcab551130a7070d39655",
          controlsBottom: "bbd695bb0414167bf0cb45bf69c7da94aed9"
        },
        R = () => {
          const {
            state: e
          } = (0, s.O2)(), {
            controlsActive: t
          } = e;
          return (0, c.jsxs)("div", {
            className: [M.controls, t ? "" : M.controlsInactive].join(" "),
            children: [(0, c.jsx)(j, {}), (0, c.jsxs)("div", {
              className: M.controlsBottom,
              children: [(0, c.jsx)(S, {}), (0, c.jsx)($, {}), (0, c.jsx)(I, {}), (0, c.jsx)(C, {}), (0, c.jsx)(T, {}), (0, c.jsx)(N, {})]
            })]
          })
        },
        L = {
          screenShare: "bbd695bb0414167be252bcc1d1ac2f74777e",
          shareScreenActive: "bbd695bb0414167bc57ffc4c6829b0f12938",
          shareScreenContent: "bbd695bb0414167bbc00594ea7b04725cc34",
          shareClose: "bbd695bb0414167bbf25f441fe387c19223e",
          shareSocial: "bbd695bb0414167bb96269caa362542e8dd6",
          "socialLink-facebook": "bbd695bb0414167bf7d1a5c4fd2882e40b0e",
          "socialLink-twitter": "bbd695bb0414167be469662b9e58eca48cb1",
          "socialLink-instagram": "bbd695bb0414167bf98d80e61775bc42a300",
          "socialLink-reddit": "bbd695bb0414167bab1b430b0806a1a44901",
          "socialLink-linkedin": "bbd695bb0414167bfbef457395b67e6be870",
          shareCopy: "bbd695bb0414167bdcbf4f849359481e1cb7"
        },
        P = () => {
          const {
            formatMessage: e
          } = (0, b.useIntl)(), {
            state: t,
            setState: n,
            track: a
          } = (0, s.O2)(), {
            shareData: i,
            shareOpen: r
          } = t;
          if (!i) return null;
          const {
            title: d,
            url: l
          } = i, o = () => {
            a(2, "Share screen closed"), n("shareOpen", !1)
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
                    name: t,
                    template: n
                  } = e;
                  return (0, c.jsx)("a", {
                    target: "_blank",
                    onClick: () => {
                      a(2, `Share - ${t} click`)
                    },
                    onKeyUp: () => {
                      a(2, `Share - ${t} click`)
                    },
                    href: n.replace("{title}", escape(d)).replace("{url}", escape(l)),
                    className: L[`socialLink-${t}`],
                    rel: "noreferrer",
                    tabIndex: 0,
                    "aria-label": `Share to ${t}`,
                    children: t
                  }, t)
                }))
              }), [{
                type: "url",
                text: i.url
              }, {
                type: "embed",
                text: i.embed
              }].map((t => (0, c.jsxs)("div", {
                className: L.shareCopy,
                children: [(0, c.jsx)("input", {
                  value: t.text,
                  readOnly: !0
                }), navigator?.clipboard?.writeText ? (0, c.jsx)("button", {
                  type: "button",
                  onClick: async () => {
                    await navigator.clipboard.writeText(t.text), a(2, `Share ${t.type} copied`)
                  },
                  children: e(s.sY.videoplayer_share_copy)
                }) : ""]
              }, t.type)))]
            })
          })
        },
        D = () => {
          const {
            state: e,
            setState: t,
            track: n
          } = (0, s.O2)(), {
            controlsActive: i,
            currentTime: r,
            fileIndex: d,
            muteMessageNeeded: l,
            onVideoComplete: o,
            playerEnded: u,
            playing: b,
            savedTime: m,
            videoData: v,
            volume: f
          } = e, {
            video: p
          } = v, [k, g] = (0, a.useState)(null), h = (0, a.useRef)(null);
          return (0, a.useEffect)((() => {
            const e = p?.files?.[d]?.src ?? null;
            e && g(e)
          }), [d, p]), (0, a.useEffect)((() => {
            t("videoRef", h)
          }), [h]), (0, a.useEffect)((() => {
            r && h.current && (h.current.currentTime = r, t("currentTime", null))
          }), [r, h?.current]), (0, a.useEffect)((() => {
            const e = h?.current;
            if (!e) return;
            const a = e => {
                t("meta", e)
              },
              i = () => {
                0 !== m && (t("currentTime", m), t("savedTime", null)), t("playerEnded", !1)
              },
              r = () => {
                t("timing", {
                  duration: (Number.isNaN(e.duration) ? 0 : e.duration) ?? 0,
                  current: (Number.isNaN(e.currentTime) ? 0 : e.currentTime) ?? 0
                })
              },
              d = () => {
                t("volume", e.volume)
              },
              l = () => {
                n(1, "Video completed"), t("playing", !1), o ? o?.() : t("playerEnded", !0)
              },
              s = () => {
                t("playing", !1), t("fullscreen", !1)
              },
              c = () => {
                t("buffered", e.buffered)
              };
            return e.addEventListener("loadeddata", i), e.addEventListener("loadedmetadata", a), e.addEventListener("timeupdate", r), e.addEventListener("volumechange", d), e.addEventListener("ended", l), e.addEventListener("progress", c), e.addEventListener("webkitendfullscreen", s), () => {
              e.removeEventListener("loadeddata", i), e.removeEventListener("loadedmetadata", a), e.removeEventListener("timeupdate", r), e.removeEventListener("volumechange", d), e.removeEventListener("ended", l), e.removeEventListener("progress", c), e.removeEventListener("webkitendfullscreen", s)
            }
          }), [b, m, h?.current]), (0, c.jsx)("video", {
            ref: h,
            autoPlay: !0,
            className: "bbd695bb0414167bcaded5047c2fa094d46a",
            src: k,
            muted: 0 === f,
            playsInline: !0,
            onTouchEnd: () => {
              n(2, "Video tapped"), u || l || t("controlsActive", !i)
            },
            onClick: () => {
              (0, s.b1)() || (n(2, "Video clicked"), u || l || t("playing", !b))
            }
          })
        },
        A = {
          videoplayer: "bbd695bb0414167beae9488d6ef8287c53b2",
          videoplayerEnded: "bbd695bb0414167ba8887175f0f987bad4e5",
          videoplayerNotRunning: "bbd695bb0414167bf3b610ed684ceab614f7",
          controls: "bbd695bb0414167befe011c1ad38a1cecfee"
        },
        B = (0, l.withLocale)((() => {
          const {
            state: e,
            setState: t,
            track: n
          } = (0, s.O2)(), {
            autoplayUnmuteCheck: i,
            context: r,
            controlsActive: d,
            fullscreen: l,
            meta: o,
            muteMessageNeeded: u,
            playerEnded: b,
            playing: m,
            running: v,
            settingsMenuOpen: f,
            shareOpen: k,
            videoRef: g,
            volume: h
          } = e, [y, N] = (0, a.useState)(!1), x = (0, a.useRef)(null), S = (0, a.useRef)(null), E = () => document?.fullscreenEnabled ?? !1, w = () => "string" == typeof document.fullscreenElement?.nodeName ?? !1, j = () => {
            x.current && clearInterval(x?.current)
          }, _ = () => {
            j(), t("idle", !1), x.current = setTimeout((() => {
              y || t("idle", !0)
            }), 3e3)
          };
          return (0, a.useEffect)((() => {
            _()
          }), [y]), (0, a.useEffect)((() => {
            N(u || b || f || k)
          }), [u, b, f, k]), (0, a.useEffect)((() => {
            t("playerRef", S)
          }), [S]), (0, a.useEffect)((() => {
            if (!S?.current || !g?.current) return;
            const e = g.current,
              t = S.current,
              {
                webkitDisplayingFullscreen: n,
                webkitSupportsFullscreen: a
              } = e,
              i = () => {
                l ? t.requestFullscreen() : document.exitFullscreen()
              };
            l ? E() && !w() ? i() : a && !n && g.current.webkitEnterFullscreen() : E() && w() ? i() : a && n && g.current.webkitExitFullscreen()
          }), [l, S, g]), (0, a.useEffect)((() => {
            const e = () => {
                _(), t("fullscreen", w()), n(1, w() ? "Fullscreen entered" : "Fullscreen exited")
              },
              a = e => {
                b || u || 32 !== parseInt(e.code, 10) && "Space" !== e.code || t("playing", !m)
              };
            return document.addEventListener("keypress", a, !1), document.addEventListener("fullscreenchange", e), () => {
              document.removeEventListener("keypress", a, !1), document.removeEventListener("fullscreenchange", e)
            }
          }), [m, b, u]), (0, a.useEffect)((() => {
            (async () => {
              if (g?.current && o)
                if (m) try {
                  await g.current.play()
                } catch (e) {
                  t("volume", 0), t("muteMessageNeeded", !0), t("autoplayUnmuteCheck", !0)
                } else g.current.pause()
            })()
          }), [i, o, m, g?.current]), (0, a.useEffect)((() => {
            g?.current && (g.current.volume = h, 0 !== g.current.volume && t("muteMessageNeeded", !1))
          }), [h, g]), (0, a.useEffect)((() => {
            d || t("settingsMenuOpen", !1)
          }), [d]), (0, a.useEffect)((() => {
            k && t("settingsMenuOpen", !1)
          }), [k]), (0, a.useEffect)((() => {
            f && t("shareOpen", !1)
          }), [f]), (0, a.useEffect)((() => {
            b && (t("fullscreen", !1), t("settingsMenuOpen", !1), t("shareOpen", !1), t("controlsActive", !0), t("progressBarState", {}))
          }), [b]), (0, a.useEffect)((() => () => {
            j()
          }), []), (0, c.jsxs)("div", {
            role: "presentation",
            ref: S,
            "data-context": r,
            className: [A.videoplayer, b ? A.videoplayerEnded : "", v ? "" : A.videoplayerNotRunning].join(" "),
            onClick: () => {
              u && t("volume", 1)
            },
            onMouseLeave: _,
            onMouseEnter: _,
            onMouseMove: _,
            onTouchEnd: j,
            onTouchStart: j,
            children: [(0, c.jsx)(D, {}), (0, c.jsx)(p, {}), (0, c.jsx)(P, {}), (0, c.jsx)(R, {})]
          })
        })),
        U = e => {
          let {
            id: t
          } = e;
          return (0, c.jsx)("iframe", {
            className: "bbd695bb0414167beae90eddb5866e3bd40d",
            src: `https://www.youtube.com/embed/${t}?autoplay=1`,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            title: "Rockstar Games on YouTube"
          })
        },
        G = e => {
          let {
            aspectRatio: t = 16 / 9,
            autoplay: n = !1,
            context: r = "site",
            explicitGraphEnv: l,
            id: o,
            hero: u = !1,
            isClr: b = !1,
            resolution: m = "_auto",
            wrapper: v = !0,
            start: f = 0,
            videoChangeCallback: p,
            onVideoComplete: y,
            locale: N
          } = e;
          const {
            state: x,
            setState: S,
            track: E
          } = (0, s.O2)(), {
            autoplay: w,
            brand: j,
            fileIndex: _,
            playing: C
          } = x, T = (0, s.CP)({
            explicitGraphEnv: l,
            id: o,
            locale: N
          }), {
            loading: F,
            video: O
          } = T, I = (0, d.useAgegated)(), V = (0, i.useNavigate)();
          return (0, a.useEffect)((() => {
            S("onVideoComplete", y)
          }), [y]), (0, a.useEffect)((() => {
            if (!O) return;
            const {
              files: e
            } = O, t = e.findIndex((e => e.resolution === m)), n = e.findIndex((e => e.default));
            S("fileIndex", -1 !== t ? t : -1 !== n ? n : 0)
          }), [m, O]), (0, a.useEffect)((() => {
            if (!O) return;
            let e;
            e = "clr" === j ? "https://circolocorecords.com" : `https://www.rockstargames.com/videos/${O.id}?embed`;
            const t = {
              title: O.title,
              text: O.description,
              url: e,
              embed: `<iframe src="https://www.rockstargames.com/videoplayer/?id=${O.id}&locale=en_us&resolution=${O.files[_]?.resolution}&embed" allowfullscreen style="width:640px; height:360px; border:none;"title="Rockstar Games Video: ${O.title}"></iframe>`
            };
            S("shareData", t)
          }), [j, _, O]), (0, a.useEffect)((() => {
            C && (S("autoplay", !0), S("running", !0))
          }), [C]), (0, a.useEffect)((() => {
            E(1, "Video started"), S("controlsActive", !0), S("currentTime", 0), S("fullscreen", !1), S("idle", !1), S("meta", null), S("playerEnded", !1), S("playing", n || w || !1), S("progressBarState", {}), S("settingsMenuOpen", !1), S("shareOpen", !1), S("videoId", o)
          }), [o]), (0, a.useEffect)((() => {
            S("videoChangeCallback", p || (e => {
              V(`../videos/${e}`)
            }))
          }), [p]), (0, a.useEffect)((() => {
            S("currentTime", f)
          }), [f]), (0, a.useEffect)((() => {
            const {
              video: e
            } = T;
            923 === e?.game?.id && S("brand", "clr"), S("videoData", T)
          }), [JSON.stringify(T)]), (0, a.useEffect)((() => {
            S("aspectRatio", t)
          }), [t]), (0, a.useEffect)((() => {
            S("context", r)
          }), [r]), (0, a.useEffect)((() => {
            S("resolution", m)
          }), [m]), !O || F ? (0, c.jsx)(h.Z, {
            hero: u,
            wrapper: v,
            children: (0, c.jsx)(g.Z, {})
          }) : ["gtaosession", "gtaostream", "community"].includes(O.group_type) ? O.agegated ? I((0, c.jsx)(U, {
            id: O.youtube_id
          })) : (0, c.jsx)(U, {
            id: O.youtube_id
          }) : w ? O.agegated ? (0, c.jsx)(h.Z, {
            hero: u,
            wrapper: v,
            children: I((0, c.jsx)(B, {}), {
              bgImg: O.screencap
            })
          }) : (0, c.jsx)(h.Z, {
            hero: u,
            wrapper: v,
            children: (0, c.jsx)(B, {})
          }) : (0, c.jsx)(h.Z, {
            hero: u,
            wrapper: v,
            children: (0, c.jsx)(k, {
              isClr: b
            })
          })
        },
        K = (0, l.withGtmTracking)((0, r.withSimpleErrorBoundary)((e => (0, c.jsx)(s.tl, {
          children: (0, c.jsx)(G, {
            ...e
          })
        })), "Something went wrong with the video player."))
    },
    8590: (e, t, n) => {
      "use strict";
      n.d(t, {
        tl: () => m,
        b1: () => k,
        sY: () => a,
        CP: () => p,
        O2: () => v
      });
      const a = (0, n(1570).defineMessages)({
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
      var i = n(4932),
        r = n(8272),
        d = n(4859),
        l = n(6711),
        s = n(9929);
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
      var u = n(6160);
      const b = (0, i.createContext)(),
        m = e => {
          let {
            children: t
          } = e;
          const [n] = (0, i.useState)((0, r.Z)()), a = (e => {
            let {
              id: t
            } = e;
            const n = o[t] ?? (o[t] = (0, d.makeVar)(c)),
              a = (e, t) => n({
                ...n(),
                [e]: t
              }),
              r = (0, d.useReactiveVar)(n),
              u = (0, l.useGtmTrack)(),
              b = (0, s.useLocale)(),
              {
                videoData: m
              } = r,
              v = (0, i.useCallback)(((e, t, n) => {
                const {
                  video: a
                } = m;
                if (!a || !u) return;
                const {
                  id: i,
                  title: r
                } = a;
                u.track({
                  event: "trackEvent",
                  eventCategory: 1 === e ? "Player Event" : "User Event",
                  eventAction: t,
                  eventLabel: `${i}(${b}) - ${r}`,
                  eventValue: n
                })
              }), [b, m]);
            return {
              state: r,
              setState: a,
              replay: () => {
                a("playerEnded", !1), a("playing", !0), a("currentTime", 0), a("timing", {
                  current: 0,
                  duration: 0
                })
              },
              track: v
            }
          })({
            id: n
          });
          return (0, u.jsx)(b.Provider, {
            value: a,
            children: t
          })
        },
        v = () => (0, i.useContext)(b);
      var f = n(6061);
      const p = e => {
          let {
            id: t,
            explicitGraphEnv: n,
            locale: a
          } = e;
          const r = (0, d.uriForGraphEnv)(n ?? window.env.graphEnv),
            [l, s] = (0, i.useState)({}),
            [c, o] = (0, i.useState)(null),
            [u, b] = (0, i.useState)(null),
            {
              data: m,
              loading: v
            } = (0, d.useQuery)(f.Video, {
              variables: l,
              skip: !Object.entries(l).length,
              context: {
                uri: r
              }
            });
          return (0, i.useEffect)((() => {
            if (!t) return;
            const e = {
              id: Number(t)
            };
            a && (e.locale = a), s(e)
          }), [t, a]), (0, i.useEffect)((() => {
            m?.video && o(m.video), m?.related && b(m.related)
          }), [m]), {
            loading: v,
            related: u,
            video: c
          }
        },
        k = () => "ontouchstart" in window || navigator.maxTouchPoints > 0
    },
    6061: e => {
      var t = {
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

      function n(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && t.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, t)
        }))
      }
      t.loc.source = {
        body: 'query Video(\n    $id: Int!\n    $locale: String!\n    $withTranslations: Boolean! = false\n    $cache: Boolean = true\n) {\n    video(id: $id, locale: $locale) {\n        id\n        title\n        screencap\n        art_layers {\n            src\n            animation\n        }\n        game {\n            id\n            title\n            title_slug\n        }\n        created_formatted\n        created\n        description\n        agegated\n        group_type\n        youtube_id\n        files: files_processed {\n            resolution\n            sprite\n            src\n            default\n        }\n    }\n    related: videos(relatedToId: $id, locale: $locale, limit: 50) {\n        results {\n            id\n            title\n            screencap\n            created_formatted\n            created\n            art_layers {\n                src\n                animation\n            }\n            game {\n                id\n                title\n                title_slug\n            }\n        }\n    }\n    translations(locale: $locale, config: "default")\n        @include(if: $withTranslations) {\n        key\n        value\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function i(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == t) return a
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          n(e, t), a[e.name.value] = t
        }
      })), e.exports = t, e.exports.Video = function(e, t) {
        var n = {
          kind: e.kind,
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var r = a[t] || new Set,
          d = new Set,
          l = new Set;
        for (r.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var s = l;
          l = new Set, s.forEach((function(e) {
            d.has(e) || (d.add(e), (a[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return d.forEach((function(t) {
          var a = i(e, t);
          a && n.definitions.push(a)
        })), n
      }(t, "Video")
    }
  }
]);