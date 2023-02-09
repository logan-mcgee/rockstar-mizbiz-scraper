(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [727], {
    727: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => R
      });
      var t = a(822),
        i = a(859),
        l = a(929),
        d = a(976),
        r = a(194),
        s = a(33),
        c = a.n(s);
      var o = a(668);
      const u = e => {
          let {
            running: n
          } = e;
          return n ? null : (0, o.jsx)("div", {
            className: "fad379fef4fed9cdc80b"
          })
        },
        m = {
          controlItemAlpha: "c03bf01b233b8b5f4c70",
          disabledControlItem: "d44a958396ef247f6d02",
          fullscreen: "b50398962ecc9cc9f682",
          fullscreenOn: "ed76981908a267ecaab3",
          fullscreenOff: "d4445b33bd1640e1a9a7"
        },
        v = e => {
          let {
            playerEnded: n,
            fullscreen: a,
            meta: t,
            setFullscreen: i,
            track: l
          } = e;
          return t ? (0, o.jsx)("div", {
            onClick: () => {
              i(!a)
            },
            className: [m.fullscreen, a ? m.fullscreenOn : m.fullscreenOff, n ? m.disabledControlItem : ""].join(" ")
          }) : null
        },
        f = {
          controlItemAlpha: "dc394ca4334529e53515",
          disabledControlItem: "f79f022fb8e6027c9b92",
          playPause: "c5fe5dd788b170faec73",
          playPauseReplay: "cc7d3697c67e373ce50b",
          playPausePlaying: "e2b1747a91f2e991cf59",
          playPausePaused: "b30ce14c322c7eb3eb72"
        },
        k = e => {
          let {
            playerEnded: n,
            replay: a,
            setPlaying: t,
            playing: i,
            track: l
          } = e;
          return (0, o.jsx)("div", {
            className: [f.playPause, n ? f.playPauseReplay : i ? f.playPausePlaying : f.playPausePaused].join(" "),
            onClick: () => {
              n ? (l(2, "Replay clicked"), a()) : (l(2, "Toggle play/pause clicked"), t(!i))
            }
          })
        },
        p = {
          controlItemAlpha: "c17267ab4fab18ec88d2",
          disabledControlItem: "ca02e1a3d33d5e6761c7",
          settings: "f26e681298cf2139dbd5",
          menu: "fec13f5369e3b2ff2059",
          activeFileButton: "ef2ef4dc383f1befe3e9",
          fileMenuOpen: "cfafa28f8e030a2c8c2d"
        },
        b = e => {
          let {
            playerEnded: n,
            files: a,
            fileIndex: t,
            setFileIndex: i,
            setSavedTime: l,
            vid: d,
            settingsMenuOpen: r,
            setSettingsMenuOpen: s,
            track: c
          } = e;
          return (0, o.jsx)("div", {
            onClick: () => {
              c(2, "Settings clicked"), s(!r)
            },
            className: [p.settings, n ? p.disabledControlItem : ""].join(" "),
            children: (0, o.jsx)("div", {
              className: [p.menu, r ? p.fileMenuOpen : ""].join(" "),
              children: a.map(((e, n) => (0, o.jsx)("button", {
                className: t === n ? p.activeFileButton : "",
                onClick: a => {
                  c(2, `Resolution changed to ${e.resolution}`), l(d.currentTime), i(n), s(!1), a.stopPropagation()
                },
                children: e.resolution
              }, n)))
            })
          })
        },
        g = e => {
          let {
            shareData: n,
            shareOpen: a,
            setShareOpen: t,
            track: i
          } = e;
          return (0, o.jsx)("div", {
            onClick: () => {
              i(2, "Share clicked"), void 0 !== navigator.share ? (async () => {
                await navigator.share(n)
              })() : t(!a)
            },
            className: "a538728f36f8a70af804"
          })
        },
        h = e => {
          let {
            timing: n
          } = e;
          const a = e => {
            const n = new Date(1e3 * e),
              a = n.getUTCMinutes(),
              t = n.getSeconds();
            return `${a.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`
          };
          return (0, o.jsx)("div", {
            className: "beb5506f1408f28fa824",
            children: n?.duration ? `${a(n.current)} / ${a(n.duration)}` : ""
          })
        },
        y = {
          controlItemAlpha: "a45af78de03893e5cdf2",
          disabledControlItem: "deddaa47e4586ecbbbed",
          volumen: "b65ddb0acdfd081de8c5",
          volumeMuted: "d5b78ef8ee3ad97df584",
          volumeSomeVolume: "c237efd424bb133c5418",
          volumeMax: "dc1ecedd49fb755593c6"
        },
        N = e => {
          let {
            playerEnded: n,
            videoRef: a,
            volume: t,
            setVolume: i,
            track: l
          } = e;
          return (0, o.jsx)("div", {
            onClick: () => {
              i(t > 0 ? 0 : 1), l(2, "Volume changed")
            },
            className: [y.volumen, 0 === t ? y.volumeMuted : t > 0 && t < 1 ? y.volumeSomeVolume : y.volumeMax, n ? y.disabledControlItem : ""].join(" ")
          })
        };
      var S = a(482),
        x = a.n(S);
      const w = e => {
          let {
            buffered: n,
            playerEnded: a,
            playerRef: i,
            timing: l,
            setProgressBarState: d,
            track: r
          } = e;
          const s = (0, t.useRef)(),
            c = (0, t.useRef)(),
            u = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                t = null;
              null !== e && (t = e / c.current.clientWidth, t = t < 0 ? 0 : t > 1 ? 1 : t), d({
                pct: t,
                shouldPause: n,
                lastEvent: a
              })
            };
          if ((0, t.useEffect)((() => {
              const e = s.current;
              if (null === e) return;
              const a = e.getContext("2d"),
                t = e.getBoundingClientRect();
              if (e.width = t.width, e.height = t.height, a.clearRect(0, 0, t.width, t.height), a.fillStyle = "rgba(255, 255, 255, 0.5)", !n || !n.length) return;
              const i = t.width / l.duration;
              for (let e = 0; e < n.length; e++) {
                const d = n.start(e),
                  r = n.end(e),
                  s = d * i,
                  c = r * i;
                d <= l.current && l.current <= r && a.fillRect(s, 0, c - s, t.height)
              }
            }), [n, s, l.duration, l.current]), (0, t.useEffect)((() => {
              if (!c.current) return;
              const e = new(x())(c.current),
                n = e => {
                  if (a || !i.current.contains(e.srcEvent.target)) return u(), null;
                  u(e.srcEvent.offsetX, !0)
                },
                t = e => {
                  u()
                };
              return e.on("pan", n), e.on("panend", t), () => {
                e.off("pan", n), e.off("panend", t)
              }
            }), [c, a]), a) return null;
          let m = 0;
          return (0, o.jsxs)("div", {
            ref: c,
            className: "c01882856ed99c2db8e4",
            onTouchStart: e => {
              m = e.touches[0].clientX
            },
            onTouchEnd: e => {
              e.changedTouches[0].clientX !== m && (r(2, "Time changed"), u(e.changedTouches[0].clientX - m, !1, !0)), m = 0
            },
            onClick: e => {
              r(2, "Time changed"), u(e.nativeEvent.offsetX, !1, !0)
            },
            children: [(0, o.jsx)("div", {
              className: "f1ab6eca54703af6cc93"
            }), (0, o.jsx)("canvas", {
              ref: s
            }), (0, o.jsx)("div", {
              className: "b815d644b9819e032b95",
              style: {
                "--pct-current": l.current / l.duration
              }
            })]
          })
        },
        E = {
          title: "a23a233c6a691302eb0f",
          hidden: "da2b977d6026210749fc"
        },
        j = e => {
          let {
            context: n,
            idle: a = !1,
            playerEnded: t = !1,
            video: i,
            track: l
          } = e;
          return "embed" !== n ? null : (0, o.jsx)("div", {
            className: [E.title, a || t ? E.hidden : ""].join(" "),
            children: (0, o.jsx)("a", {
              target: "_blank",
              href: `${document.location.origin}/videos/${i.id}`,
              onClick: () => {
                l(2, "Video title click")
              },
              rel: "noreferrer",
              children: `${i.game.title}: ${i.title}`
            })
          })
        },
        F = e => {
          let {
            context: n,
            setAutoplay: a,
            video: t,
            track: i
          } = e;
          return (0, o.jsxs)("div", {
            className: "bb7fc836f725dcfb383b",
            onClick: () => {
              a(!0), i(2, "Screencap clicked to start")
            },
            children: [(0, o.jsx)("div", {
              className: "e4061b4f884fd1d4fe32",
              style: {
                background: `url(${t.screencap}) center/contain no-repeat`
              }
            }), (0, o.jsx)(u, {}), (0, o.jsx)(j, {
              context: n,
              video: t,
              track: i
            }), (0, o.jsx)("a", {
              className: "c43e6d7442e3aed6f594",
              href: "https://www.rockstargames.com/",
              target: "_blank",
              onClick: () => i(2, "Rockstar click"),
              rel: "noreferrer"
            })]
          })
        },
        C = e => {
          let {
            linkPrefix: n,
            playerEnded: a,
            videos: t,
            openInNewWindow: i
          } = e;
          return a ? (0, o.jsx)("div", {
            className: "e70fccdcb0cdf27bd31e",
            children: t.length ? (0, o.jsxs)("div", {
              className: "dc7208d173f690085f35",
              children: [(0, o.jsx)("h4", {
                children: "Related Videos"
              }), t.map((e => (0, o.jsx)(d.VideoCard.Link, {
                gameTitleNecessary: !1,
                linkPrefix: `https://www.rockstargames.com${n}`,
                openInNewWindow: i,
                video: e
              }, e.id)))]
            }) : ""
          }) : null
        },
        V = {
          stillframe: "c28d3906113b27ca11e4",
          rockstarLogo: "b6e363b6c9fbf51c5203",
          screenShare: "ce7010274f740492e053",
          shareScreenActive: "e43d06ba0f603a663efb",
          shareScreenContent: "fbb55aaeff0998fe4f97",
          shareClose: "abe91e00560b5de474f3",
          shareSocial: "ce7a8b813fbd3c35bffe",
          "socialLink-facebook": "cbe62b8f04fd4153f34d",
          "socialLink-twitter": "ac62eb2e18f222e7b7ca",
          "socialLink-instagram": "dc87af945a954c43c5f4",
          "socialLink-reddit": "f10baaf70d85f665b407",
          "socialLink-linkedin": "e3b34a2f5f27ac98758a",
          shareCopy: "f8ebc395f3b7c5575bbc"
        },
        T = (0, l.withTranslations)((e => {
          let {
            setShareOpen: n,
            shareOpen: a,
            shareData: t,
            track: i,
            t: l
          } = e;
          return void 0 !== navigator.share ? null : (0, o.jsx)("div", {
            className: [V.screenShare, a ? V.shareScreenActive : ""].join(" "),
            children: (0, o.jsxs)("div", {
              className: V.shareScreenContent,
              children: [(0, o.jsx)("h3", {
                children: l("addthis-share")
              }), (0, o.jsx)("div", {
                onClick: () => {
                  i(2, "Share screen closed"), n(!1)
                },
                className: V.shareClose
              }), (0, o.jsx)("div", {
                className: V.shareSocial,
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
                }].map((e => (0, o.jsx)("a", {
                  target: "_blank",
                  onClick: () => {
                    i(2, `Share - ${e.name} click`)
                  },
                  href: e.template.replace("{title}", escape(t.title)).replace("{url}", escape(t.url)),
                  className: V[`socialLink-${e.name}`],
                  rel: "noreferrer"
                }, e.name)))
              }), [{
                type: "url",
                text: t.url
              }, {
                type: "embed",
                text: t.embed
              }].map((e => (0, o.jsxs)("div", {
                className: V.shareCopy,
                children: [(0, o.jsx)("input", {
                  value: e.text,
                  readOnly: !0
                }), navigator?.clipboard?.writeText ? (0, o.jsx)("button", {
                  onClick: async () => {
                    await navigator.clipboard.writeText(e.text), i(2, "Share ${share.type} copied")
                  },
                  children: l("Copy")
                }) : ""]
              }, e.type)))]
            })
          })
        })),
        L = e => {
          let {
            muteMessageNeeded: n,
            running: a,
            playerEnded: t
          } = e;
          return n && a && !t ? (0, o.jsx)("div", {
            className: "a4f4f68da37cef85e833",
            children: "Tap or click to unmute"
          }) : null
        },
        I = {
          stillframe: "f5852b33a215e9831c6d",
          rockstarLogo: "bd59373ae0a8de2c09a8",
          videoplayer: "a5cda25459ee62b7dd6f",
          shareOpen: "c832be6db82b278b5acc",
          videoplayerEnded: "c492c1dde69b17c1bc78",
          videoplayerNotRunning: "cb5f74ac63f047aef4b9",
          controls: "f9692f99694ef25b03aa",
          controlsInactive: "ced5ea141789ba6f785e",
          controlsBottom: "adb2b084dd8387aebd20"
        },
        $ = (0, l.withLocale)((e => {
          let {
            autoplay: n,
            context: a,
            related: i,
            resolution: l,
            video: r,
            linkPrefix: s,
            track: c,
            endBehavior: m,
            locale: f
          } = e, p = null;
          const y = (0, t.useRef)(),
            S = (0, t.useRef)(),
            [x, E] = (0, t.useState)(0),
            [F, V] = (0, t.useState)(0),
            [$, _] = (0, t.useState)(null),
            [P, R] = (0, t.useState)(!1),
            [O, A] = (0, t.useState)(!1),
            [D, B] = (0, t.useState)(0),
            [M, q] = (0, t.useState)(!1),
            [z, X] = (0, t.useState)(n),
            [W, G] = (0, t.useState)(null),
            [Q, U] = (0, t.useState)(n),
            [Z, H] = (0, t.useState)(0),
            [J, K] = (0, t.useState)({}),
            [Y, ee] = (0, t.useState)(1),
            [ne, ae] = (0, t.useState)({}),
            [te, ie] = (0, t.useState)(null),
            [le, de] = (0, t.useState)(!0),
            [re, se] = (0, t.useState)(!1),
            [ce, oe] = (0, t.useState)(null),
            ue = (0, t.useCallback)((() => {
              A(!1), U(!0), B(0), ae({})
            }), [O, Q, D]),
            me = {
              loadedmetadata: (0, t.useCallback)((e => {
                _(e)
              })),
              loadeddata: (0, t.useCallback)((e => {
                0 !== F && B(F), A(!1)
              }), [F]),
              play: (0, t.useCallback)((() => {})),
              pause: (0, t.useCallback)((() => {})),
              timeupdate: (0, t.useCallback)((() => {
                ae({
                  duration: y.current.duration,
                  current: y.current.currentTime
                })
              })),
              volumechange: (0, t.useCallback)((() => {
                ee(y.current.volume)
              })),
              ended: (0, t.useCallback)((() => {
                c(1, "Video completed"), U(!1), A(!0)
              }), [O]),
              webkitendfullscreen: (0, t.useCallback)((() => {
                U(!1), q(!1)
              }), [Q, M]),
              progress: (0, t.useCallback)((() => {
                E(y.current.buffered)
              }))
            },
            ve = (0, t.useCallback)((() => {
              clearTimeout(p)
            }), [p]),
            fe = (0, t.useCallback)((() => (ve(), R(!1), p = setTimeout((() => {
              R(!0)
            }), 3e3), () => {
              ve()
            })), [p]),
            ke = (0, t.useCallback)((() => r.files[Z] ?? null), [r.id, Z]),
            pe = {
              title: r.title,
              text: r.description,
              url: `https://www.rockstargames.com${s}/videos/${r.id}?embed`,
              embed: `<iframe src="https://www.rockstargames.com/videoplayer/?id=${r.id}&locale=${f}&resolution=${ke().resolution}?embed" allowfullscreen style="width:640px; height:360px; border:none;"></iframe>`
            },
            be = () => document?.fullscreen ?? document?.mozFullScreen ?? document?.webkitIsFullScreen ?? document?.msFullscreenElement ?? !1,
            ge = (0, t.useCallback)((() => {
              ce && ee(1)
            }), [ce]);
          return (0, t.useEffect)((() => {
            D && (y.current.currentTime = D, B(null))
          }), [D]), (0, t.useEffect)((() => {
            c(1, "Video started"), H(-1 !== r.files.findIndex((e => e.resolution === l)) ? r.files.findIndex((e => e.resolution === l)) : -1 !== r.files.findIndex((e => 1 === e.default)) ? r.files.findIndex((e => 1 === e.default)) : r.files.length - 1), ae({}), q(!1), de(!0), se(!1), ie(!1), A(!1), B(0), U(n), X(n), fe(), K({})
          }), [r.id]), (0, t.useEffect)((() => {
            const e = () => {
                fe(), q(be()), c(1, be() ? "Fullscreen entered" : "Fullscreen exited")
              },
              n = e => {
                O || ce || 32 !== parseInt(e.keyCode) || (U(!Q), e.preventDefault())
              };
            return document.addEventListener("keypress", n, !1), document.addEventListener("fullscreenchange", e), () => {
              document.removeEventListener("keypress", n, !1), document.removeEventListener("fullscreenchange", e)
            }
          }), [Q, O, ce]), (0, t.useEffect)((() => {
            const e = y.current,
              n = S.current,
              a = () => document?.fullscreenEnabled ?? document?.webkitFullscreenEnabled ?? document?.mozFullScreenEnabled ?? document?.msFullscreenEnabled ?? !1,
              t = () => {
                M ? n?.requestFullscreen?.() ?? n?.mozRequestFullScreen?.() ?? n?.webkitRequestFullscreen?.() ?? n?.msRequestFullscreen?.() : document?.exitFullscreen?.() ?? document?.webkitExitFullscreen?.() ?? document?.mozCancelFullScreen?.() ?? document?.msExitFullscreen?.()
              };
            M ? a() && !be() ? t() : e.webkitSupportsFullscreen && !e.webkitDisplayingFullscreen && y.current.webkitEnterFullscreen() : a() && be() ? t() : e.webkitSupportsFullscreen && e.webkitDisplayingFullscreen && y.current.webkitExitFullscreen()
          }), [M, y]), (0, t.useEffect)((() => {
            const e = y.current;
            if (e) return e.addEventListener("loadeddata", me.loadeddata), e.addEventListener("loadedmetadata", me.loadedmetadata), e.addEventListener("play", me.play), e.addEventListener("pause", me.pause), e.addEventListener("timeupdate", me.timeupdate), e.addEventListener("volumechange", me.volumechange), e.addEventListener("ended", me.ended), e.addEventListener("progress", me.progress), e.addEventListener("webkitendfullscreen", me.webkitendfullscreen), () => {
              e.removeEventListener("loadeddata", me.loadeddata), e.removeEventListener("loadedmetadata", me.loadedmetadata), e.removeEventListener("play", me.play), e.removeEventListener("pause", me.pause), e.removeEventListener("timeupdate", me.timeupdate), e.removeEventListener("volumechange", me.volumechange), e.removeEventListener("ended", me.ended), e.removeEventListener("progress", me.progress), e.removeEventListener("webkitendfullscreen", me.webkitendfullscreen)
            }
          }), [y, Q, F]), (0, t.useEffect)((() => {
            if (Q) {
              const e = async function() {
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                try {
                  await y.current.play()
                } catch (a) {
                  if (n) return;
                  ee(0), oe(!0), e(!0)
                }
              };
              e(), X(!0), ie(!1)
            } else y.current.pause()
          }), [Q, $]), (0, t.useEffect)((() => {
            y.current.volume = Y, 0 !== y.current.volume && oe(!1)
          }), [Y, ce]), (0, t.useEffect)((() => {
            le || se(!1)
          }), [le]), (0, t.useEffect)((() => {
            O && (se(!1), ie(!1), de(!0), K({}))
          }), [O]), (0, t.useEffect)((() => {
            te ? (se(!1), G(Q), U(!1)) : null !== W && (U(W), G(null))
          }), [te]), (0, t.useEffect)((() => {
            O || J.pct || !Q || de(!P)
          }), [P, O, J.pct, Q]), (0, t.useEffect)((() => {
            Object.keys(J).length && (J.pct ? (J.shouldPause && (null === W && G(Q), U(!1)), B(J.pct * ne.duration), J.lastEvent && K({})) : null !== W && (G(null), U(W)))
          }), [J, ne.duration, Q]), (0, t.useEffect)((() => {
            const e = "video",
              n = n => {
                Q && n?.data?.attentionBlurredElsewhere && (n?.data?.from !== e || "video" === n?.data?.from && n?.data?.fromId !== r.id) && U(!1)
              };
            return Q && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e,
              fromId: r.id
            }), window.addEventListener("message", n, !1), () => window.removeEventListener("message", n, !1)
          }), [Q, r.id]), (0, t.useEffect)((() => () => {
            ve()
          }), []), (0, o.jsxs)("div", {
            ref: S,
            context: a,
            className: [I.videoplayer, te ? I.shareOpen : "", O ? I.videoplayerEnded : "", z ? "" : I.videoplayerNotRunning].join(" "),
            onClick: () => {
              fe(), ce && ge()
            },
            onMouseLeave: () => {
              fe()
            },
            onMouseEnter: () => {
              fe()
            },
            onMouseMove: () => {
              fe()
            },
            onTouchStart: () => {
              ve()
            },
            onTouchEnd: () => {
              fe()
            },
            children: [(0, o.jsx)("video", {
              autoPlay: n,
              src: ke().src,
              ref: y,
              muted: 0 === Y,
              playsInline: !0,
              onTouchEnd: e => {
                c(2, "Video tapped"), O || ce ? ge() : de(!le), e.preventDefault()
              },
              onClick: () => {
                c(2, "Video clicked"), O || ce || U(!Q)
              }
            }), (0, o.jsx)(u, {
              running: z
            }), (0, o.jsx)(j, {
              context: a,
              idle: P,
              playerEnded: !1,
              video: r
            }), (0, o.jsx)(L, {
              muteMessageNeeded: ce,
              running: z,
              playerEnded: O
            }), (0, o.jsx)(T, {
              setShareOpen: ie,
              shareOpen: te,
              shareData: pe,
              track: c
            }), "related" === m ? (0, o.jsx)(C, {
              playerEnded: O,
              linkPrefix: s,
              videos: i,
              video: r,
              track: c,
              aspectRatio: 16 / 9,
              openInNewWindow: "embed" === a
            }) : O ? (0, o.jsx)("div", {
              style: {
                position: "absolute",
                width: "100%"
              },
              children: (0, o.jsx)(d.VideoCard.Art, {
                video: r
              })
            }) : "", (0, o.jsxs)("div", {
              className: [I.controls, P ? I.idle : "", le ? "" : I.controlsInactive].join(" "),
              children: [(0, o.jsx)(w, {
                playerEnded: O,
                playerRef: S,
                timing: ne,
                buffered: x,
                setProgressBarState: K,
                track: c
              }), (0, o.jsxs)("div", {
                className: I.controlsBottom,
                children: [(0, o.jsx)(k, {
                  playerEnded: O,
                  playing: Q,
                  replay: ue,
                  setPlaying: U,
                  track: c
                }), (0, o.jsx)(N, {
                  playerEnded: O,
                  videoRef: y,
                  volume: Y,
                  setVolume: ee,
                  track: c
                }), (0, o.jsx)(h, {
                  timing: ne,
                  track: c
                }), (0, o.jsx)(b, {
                  playerEnded: O,
                  files: r.files,
                  fileIndex: Z,
                  setFileIndex: H,
                  setSavedTime: V,
                  vid: y.current,
                  settingsMenuOpen: re,
                  setSettingsMenuOpen: se,
                  track: c
                }), (0, o.jsx)(g, {
                  shareData: pe,
                  shareOpen: te,
                  setShareOpen: ie,
                  track: c
                }), (0, o.jsx)(v, {
                  playerEnded: O,
                  meta: $,
                  fullscreen: M,
                  setFullscreen: q,
                  track: c
                })]
              })]
            })]
          })
        })),
        _ = e => {
          let {
            src: n
          } = e;
          return (0, o.jsx)("iframe", {
            className: "d2856a327db8567651d1",
            src: n,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0
          })
        },
        P = {
          wrapper: "f4977e1db86a85c40e16",
          hero: "c1669ccf6a1406fb8c46",
          large: "b07dd7904aec141c56f7"
        },
        R = (0, l.withGtmTracking)((0, l.withLocale)((0, d.withSimpleErrorBoundary)((e => {
          let {
            aspectRatio: n = 16 / 9,
            autoplay: a = !1,
            border: l = !1,
            context: d = "site",
            endBehavior: s = "related",
            id: u,
            image: m = "",
            gtmTrack: v,
            hero: f = !1,
            linkPrefix: k = "",
            locale: p,
            resolution: b = "_auto",
            wrapper: g = !0
          } = e;
          const [h, y] = (0, t.useState)(a), [N, S] = (0, t.useState)({}), {
            data: x,
            loading: w
          } = (0, i.useQuery)(c(), {
            variables: N,
            skip: !Object.entries(N).length
          }), E = (0, r.useAgegated)(), j = (e, n, a) => {
            x?.video && v({
              event: "trackEvent",
              eventCategory: 1 === e ? "Player Event" : "User Event",
              eventAction: n,
              eventLabel: `${x.video.id}(${p}) - ${x.video.title}`,
              eventValue: a
            })
          }, C = e => g ? (0, o.jsx)("div", {
            className: [P.wrapper, f ? P.hero : ""].join(" "),
            style: {
              "--aspect-ratio": n,
              "--border-width": (l ? 1 : 0) + "px"
            },
            children: e
          }) : e;
          if ((0, t.useEffect)((() => {
              S({
                id: Number(u)
              })
            }), [u, d]), (0, t.useEffect)((() => {
              a && j(1, "Video autoplayed")
            }), [x, a]), !x || w) return C(null);
          const {
            video: V,
            related: T
          } = x;
          if (["gtaosession", "gtaostream", "community"].includes(V.group_type)) {
            const e = (0, o.jsx)(_, {
              src: `https://www.youtube.com/embed/${V.youtube_id}?autoplay=1`
            });
            return V.agegated ? E(e) : e
          }
          const L = (0, o.jsx)($, {
            autoplay: h,
            context: d,
            video: V,
            related: T.results.slice(0, 3),
            resolution: b,
            linkPrefix: k,
            track: j,
            endBehavior: s,
            aspectRatio: n
          });
          return h ? V.agegated ? C(E(L, {
            bgImg: V.screencap
          })) : C(L) : C((0, o.jsx)(F, {
            context: d,
            track: j,
            video: V,
            setAutoplay: y,
            aspectRatio: n,
            hero: f
          }))
        }), "Something went wrong with the video player.")))
    },
    33: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: 'query Video(\n    $id: Int!\n    $locale: String!\n    $withTranslations: Boolean! = false\n    $cache: Boolean = true\n) {\n    video(id: $id, locale: $locale) {\n        id\n        title\n        screencap\n        art_layers {\n            src\n            animation\n        }\n        game {\n            id\n            title\n            title_slug\n        }\n        created_formatted\n        created\n        description\n        agegated\n        group_type\n        youtube_id\n        files: files_processed {\n            resolution\n            sprite\n            src\n            default\n        }\n    }\n    related: videos(relatedToId: $id, locale: $locale, limit: 50) {\n        results {\n            id\n            title\n            screencap\n            created_formatted\n            created\n            art_layers {\n                src\n                animation\n            }\n            game {\n                id\n                title\n                title_slug\n            }\n        }\n    }\n    translations(locale: $locale, config: "default")\n        @include(if: $withTranslations) {\n        key\n        value\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.Video = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var l = t[n] || new Set,
          d = new Set,
          r = new Set;
        for (l.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            d.has(e) || (d.add(e), (t[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return d.forEach((function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        })), a
      }(n, "Video")
    }
  }
]);