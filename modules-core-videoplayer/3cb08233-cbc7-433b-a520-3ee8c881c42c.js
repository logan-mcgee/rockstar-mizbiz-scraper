! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3cb08233-cbc7-433b-a520-3ee8c881c42c", e._sentryDebugIdIdentifier = "sentry-dbid-3cb08233-cbc7-433b-a520-3ee8c881c42c")
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
  [512], {
    53592: (e, a, l) => {
      "use strict";
      l.d(a, {
        U: () => t,
        c: () => r
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        o = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: a
          } = window, l = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = o.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [t, o] = a;
            return o === l && (e = {
              site: t,
              subDomain: o
            }, !0)
          })) >= 0)), r = o[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    27992: (e, a, l) => {
      "use strict";
      l.d(a, {
        c: () => r
      });
      var t = l(9860);
      var o = l(95240);
      const r = () => (0, o.jsx)("div", {
        className: "rockstargames-modules-core-videoplayera8d9b51b7c69ad6420b40d81d95eb32d",
        children: (0, o.jsx)(t.LoadingAnimation, {})
      })
    },
    89216: (e, a, l) => {
      "use strict";
      l.d(a, {
        c: () => r
      });
      const t = {
        wrapper: "rockstargames-modules-core-videoplayerd1084619ca8b218d70a502a3bdcd904f",
        large: "rockstargames-modules-core-videoplayere11f278f1b287e1f681d4162529fc189",
        badge: "rockstargames-modules-core-videoplayerf711eab3b6de6e9331ac9103f55fdba5",
        hero: "rockstargames-modules-core-videoplayere934f77c7c02a32ae3e2b3b13908f8db",
        stdWrapper: "rockstargames-modules-core-videoplayerd73ebc54d1baabe529e71682550022e2"
      };
      var o = l(95240);
      const r = e => {
        let {
          children: a,
          hero: l = !1,
          wrapper: r = !0,
          titleCrop: i
        } = e;
        return (0, o.jsx)("div", {
          className: [t.wrapper, l ? t.hero : "", r ? t.stdWrapper : ""].join(" "),
          ...i ? {
            style: {
              "--videoplayer-info-crop": i
            }
          } : {},
          children: a
        })
      }
    },
    5512: (e, a, l) => {
      "use strict";
      l.d(a, {
        c: () => da
      });
      var t = l(51664),
        o = l(57013),
        r = l(53592),
        i = l(9860),
        n = l(92372),
        s = l(45792),
        d = l(41272),
        c = l(75016),
        u = l(70664),
        _ = l(55120),
        p = l(67356),
        v = l.n(p),
        m = l(43264);
      const b = (0, d.defineMessages)({
        videoplayer_play_button_label: {
          id: "videoplayer_play_button_label",
          defaultMessage: "Play button"
        },
        videoplayer_pause_button_label: {
          id: "videoplayer_pause_button_label",
          defaultMessage: "Pause button"
        }
      });
      var y = l(95240);
      const h = e => {
        let {
          alt: a = "",
          className: l = "",
          clipRule: t = "evenodd",
          fill: o = "white",
          fillRule: r = "evenodd",
          height: i = "20",
          viewBox: n = "0 0 20 20",
          width: s = "20"
        } = e;
        return (0, y.jsxs)("svg", {
          className: l,
          height: i,
          width: s,
          viewBox: n,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, y.jsx)("title", {
            children: a
          }), (0, y.jsx)("path", {
            fillRule: r,
            clipRule: t,
            d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
            fill: o
          }), (0, y.jsx)("path", {
            fillRule: r,
            clipRule: t,
            d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
            fill: o
          })]
        })
      };
      var f = l(84424);
      const g = "rockstargames-modules-core-videoplayerb2e64594a27cf9fd66c7c063bae0cdb0",
        C = () => {
          const {
            state: e,
            setState: a,
            trackGa: l
          } = (0, m.mU)(), {
            accentColor: o,
            playing: r,
            controlsActive: i
          } = e, [n, s] = (0, t.useState)(null), c = (0, t.useRef)(null), {
            formatMessage: u
          } = (0, d.useIntl)();
          return (0, t.useEffect)((() => {
            s((e => {
              if (!e) return null;
              const a = e.replace(/^#/, ""),
                l = parseInt(a, 16),
                t = l >> 16 & 255,
                o = l >> 8 & 255,
                r = 255 & l;
              return Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(r) ? null : {
                r: t,
                g: o,
                b: r
              }
            })(o))
          }), [o]), (0, t.useLayoutEffect)((() => {
            const e = p.gsap.context((() => {
              c?.current && (r && p.gsap.to(c?.current, {
                autoAlpha: 0,
                delay: .8,
                duration: .2
              }), i || p.gsap.to(c?.current, {
                autoAlpha: 0
              }))
            }));
            return () => e.revert()
          }), [c?.current, i]), (0, y.jsx)("button", {
            "aria-label": u(r ? b.videoplayer_pause_button_label : b.videoplayer_play_button_label),
            className: "rockstargames-modules-core-videoplayerdaf1dc5c2779fb0eda20bfe5b27b8684",
            onClick: () => {
              a("showTitle", !1), a("playing", !0), a("running", !0), a("volume", 1), l({
                event: "video_play_manual"
              })
            },
            type: "button",
            children: (0, y.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerba7c2e297804fd7170d34d7900e275ef",
              ref: c,
              style: {
                "--button-background": `rgba(${n?.r}, ${n?.g}, ${n?.b}, 1.0)`
              },
              children: r ? (0, y.jsx)(h, {
                className: g
              }) : (0, y.jsx)(f.c, {
                className: g
              })
            })
          })
        },
        k = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "#CF242B",
            fillRule: r = "evenodd",
            height: i = "32",
            viewBox: n = "0 0 32 32",
            width: s = "32"
          } = e;
          const d = "32" !== i ? i : "32",
            c = "32" !== s ? s : "32",
            u = "0 0 32 32" !== n ? n : `0 0 ${c} ${d}`;
          return (0, y.jsxs)("svg", {
            className: l,
            width: c,
            height: d,
            viewBox: u,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM21.0127 24L19.9246 16.5826L26 12.3328H19.2596L18.0929 5L13.7948 12.2603H7L11.1349 16.6128L7.73751 23.9093L15.161 19.5024L21.0127 24Z",
              fill: o
            })]
          })
        },
        w = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "#FCAF17",
            viewBox: o = "0 0 216 198.83"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            viewBox: o,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fill: "#000",
              d: "M214.55,197.37a4.94,4.94,0,1,1,1.45-3.5A4.75,4.75,0,0,1,214.55,197.37Zm-6.52-6.5a4.27,4.27,0,0,0,0,6,4.25,4.25,0,0,0,6,0,4.26,4.26,0,0,0-6-6Zm2.92.27a4.24,4.24,0,0,1,1.5.2,1.36,1.36,0,0,1,.84,1.38,1.17,1.17,0,0,1-.53,1.08,2.45,2.45,0,0,1-.78.26,1.32,1.32,0,0,1,.93.52,1.57,1.57,0,0,1,.3.84v.39c0,.13,0,.27,0,.41a1.2,1.2,0,0,0,0,.28l0,.07h-.89a.07.07,0,0,0,0,0s0,0,0-.07l0-.17v-.42c0-.63-.17-1.05-.52-1.24a2.45,2.45,0,0,0-1.07-.17H210v2.12h-.95v-5.43Zm1,.89a2.38,2.38,0,0,0-1.16-.2H210v1.94h.87a2.48,2.48,0,0,0,.93-.13A.94.94,0,0,0,212,192Z"
            }), (0, y.jsx)("path", {
              fill: "#000",
              d: "M178.43,0H38.26C17.17,0,0,16.66,0,37.12V161.63c0,20.74,16.65,37,37.91,37H178.08c21.26,0,37.92-16.26,37.92-37V37.12C216,16.31,199.5,0,178.43,0Zm33.31,161.62c0,18.36-14.78,32.75-33.66,32.75H37.91C19,194.37,4.25,180,4.25,161.62V37.11c0-18.43,15-32.86,34-32.86H178.43c18.68,0,33.31,14.43,33.31,32.86Z"
            }), (0, y.jsx)("path", {
              fill: t,
              d: "M178.43,4.25H38.26c-19.06,0-34,14.43-34,32.86V161.62C4.25,180,19,194.37,37.91,194.37H178.08c18.88,0,33.66-14.39,33.66-32.75V37.11C211.74,18.68,197.11,4.25,178.43,4.25Z"
            }), (0, y.jsx)("path", {
              fill: "#000",
              d: "M185.49,118.2H158.43l-4.29-27L138.28,118h-3a23.14,23.14,0,0,1-2.52-10.42c0-4.6.34-9.1.34-15,0-7.76-2.28-11.92-8.37-13.38V79c12.94-1.8,18.81-10.36,18.81-22.42,0-17.12-11.39-20.84-26.32-20.84H77.08l-17,80.4H81.45l6.18-29.25h14.19c7.57,0,10.67,3.7,10.67,10.79,0,5.39-.56,9.66-.56,13.81,0,1.54.35,5.11,1.38,6.49,0,0,15.43,16.29,15.43,16.29l-13.27,28.55L143.86,146,165,162.23l-4-26.93ZM108.2,71.86h-17L95.3,52.48h15.79c5.62,0,11.46,1.46,11.46,8.34C122.55,69.49,115.9,71.86,108.2,71.86Z"
            }), (0, y.jsx)("polygon", {
              fill: "#FFF",
              points: "173.03 122.13 155.08 122.13 151.97 102.6 140.53 121.94 122.42 121.94 133.43 133.54 124.38 152.98 144.16 141.23 159.74 153.21 156.84 133.46 173.03 122.13"
            })]
          })
        },
        x = {
          pillBtn: "rockstargames-modules-core-videoplayerb44b30dce8bef1ffea6dd9496331eb34",
          selected: "rockstargames-modules-core-videoplayerf83d8d18eedd2a5e1e6a9710a10d751e",
          info: "rockstargames-modules-core-videoplayerc47df9d075a2a95353898ada7f123576",
          isPreview: "rockstargames-modules-core-videoplayerae19d3568a33307dee220085af23a55b",
          title: "rockstargames-modules-core-videoplayera6b4361d4fe855cbc66cb0a9aff9ebdf",
          icon: "rockstargames-modules-core-videoplayerb7e61c4fecfcf3a285a46a81b23b8666",
          titleText: "rockstargames-modules-core-videoplayere8d18478946eeed4aa09c9be1cc7453c",
          hidden: "rockstargames-modules-core-videoplayere6a88e9cdf32064b2af25ab4ec2dd50a",
          brand: "rockstargames-modules-core-videoplayerb03560b2b124ed8a8087360149b9e0e6"
        },
        j = () => {
          const {
            state: e,
            trackGa: a
          } = (0, m.mU)(), {
            brand: l,
            shareData: t,
            videoData: o
          } = e, {
            video: i
          } = o, {
            currentSite: n
          } = (0, r.c)(), s = () => a({
            event: "cta_other",
            text: "rockstar"
          });
          let d, c;
          return "clr" === l ? (c = (0, y.jsx)(k, {
            className: [x.brand, x[l]].join(" ")
          }), d = "https://circolocorecords.com") : (c = (0, y.jsx)(w, {
            className: [x.brand, x[l]].join(" ")
          }), d = `https://${n?.subDomain??"www"}.rockstargames.com/`), i?.title ? (0, y.jsxs)("div", {
            role: "paragraph",
            className: x.title,
            children: [(0, y.jsx)("a", {
              href: t?.brandUrl,
              target: "_blank",
              onClick: s,
              onKeyDown: s,
              rel: "noreferrer",
              tabIndex: 0,
              className: x.icon,
              children: c
            }), (0, y.jsx)("a", {
              href: t?.url,
              target: "_blank",
              className: x.titleText,
              children: t?.title
            })]
          }) : null
        },
        N = () => {
          const {
            state: e
          } = (0, m.mU)(), {
            idle: a,
            videoData: l,
            autoplay: t,
            playing: o,
            startTime: r
          } = e, {
            video: i
          } = l, n = !t && !o && !r;
          return i ? (0, y.jsx)("div", {
            className: [x.info, a ? x.hidden : "", n ? x.isPreview : ""].join(" "),
            children: (0, y.jsx)(j, {})
          }) : null
        },
        M = () => {
          const {
            state: e
          } = (0, m.mU)(), {
            videoData: a
          } = e, {
            video: l
          } = a;
          return l ? (0, y.jsx)("div", {
            className: "rockstargames-modules-core-videoplayera83a81fd22e58fc0fc7573d06e05b615",
            style: {
              background: `url(${l.screencap.includes("akamai")?`${l.screencap}?im=Resize=1920`:l.screencap}) center/contain no-repeat`
            }
          }) : null
        },
        L = () => (0, y.jsxs)("div", {
          className: "rockstargames-modules-core-videoplayerc93d231adfbf2368229bb8f0aa9cd79a",
          children: [(0, y.jsx)(N, {}), (0, y.jsx)(M, {}), (0, y.jsx)(C, {})]
        });
      var S = l(27992),
        B = l(89216),
        E = l(1740);
      const R = (0, d.defineMessages)({
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
        V = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "20",
            viewBox: n = "0 0 20 20",
            width: s = "20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            width: s,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M6.66797 1.66663C7.12821 1.66663 7.5013 2.03972 7.5013 2.49996V4.99996C7.5013 5.663 7.23791 6.29889 6.76907 6.76773C6.30023 7.23657 5.66434 7.49996 5.0013 7.49996H2.5013C2.04106 7.49996 1.66797 7.12686 1.66797 6.66663C1.66797 6.20639 2.04106 5.83329 2.5013 5.83329H5.0013C5.22232 5.83329 5.43428 5.7455 5.59056 5.58921C5.74684 5.43293 5.83464 5.22097 5.83464 4.99996V2.49996C5.83464 2.03972 6.20773 1.66663 6.66797 1.66663ZM13.3346 1.66663C13.7949 1.66663 14.168 2.03972 14.168 2.49996V4.99996C14.168 5.22097 14.2558 5.43293 14.412 5.58921C14.5683 5.7455 14.7803 5.83329 15.0013 5.83329H17.5013C17.9615 5.83329 18.3346 6.20639 18.3346 6.66663C18.3346 7.12686 17.9615 7.49996 17.5013 7.49996H15.0013C14.3383 7.49996 13.7024 7.23657 13.2335 6.76773C12.7647 6.29889 12.5013 5.663 12.5013 4.99996V2.49996C12.5013 2.03972 12.8744 1.66663 13.3346 1.66663ZM1.66797 13.3333C1.66797 12.8731 2.04106 12.5 2.5013 12.5H5.0013C5.66434 12.5 6.30023 12.7634 6.76907 13.2322C7.23791 13.701 7.5013 14.3369 7.5013 15V17.5C7.5013 17.9602 7.12821 18.3333 6.66797 18.3333C6.20773 18.3333 5.83464 17.9602 5.83464 17.5V15C5.83464 14.7789 5.74684 14.567 5.59056 14.4107C5.43428 14.2544 5.22232 14.1666 5.0013 14.1666H2.5013C2.04106 14.1666 1.66797 13.7935 1.66797 13.3333ZM15.0013 14.1666C14.7803 14.1666 14.5683 14.2544 14.412 14.4107C14.2558 14.567 14.168 14.7789 14.168 15V17.5C14.168 17.9602 13.7949 18.3333 13.3346 18.3333C12.8744 18.3333 12.5013 17.9602 12.5013 17.5V15C12.5013 14.3369 12.7647 13.701 13.2335 13.2322C13.7024 12.7634 14.3383 12.5 15.0013 12.5H17.5013C17.9615 12.5 18.3346 12.8731 18.3346 13.3333C18.3346 13.7935 17.9615 14.1666 17.5013 14.1666H15.0013Z",
              fill: o
            })]
          })
        },
        A = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "20",
            viewBox: n = "0 0 20 20",
            width: s = "20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            width: s,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M2.4002 2.39886C2.86904 1.93002 3.50493 1.66663 4.16797 1.66663H6.66797C7.12821 1.66663 7.5013 2.03972 7.5013 2.49996C7.5013 2.9602 7.12821 3.33329 6.66797 3.33329H4.16797C3.94695 3.33329 3.73499 3.42109 3.57871 3.57737C3.42243 3.73365 3.33464 3.94561 3.33464 4.16663V6.66663C3.33464 7.12686 2.96154 7.49996 2.5013 7.49996C2.04106 7.49996 1.66797 7.12686 1.66797 6.66663V4.16663C1.66797 3.50358 1.93136 2.8677 2.4002 2.39886ZM12.5013 2.49996C12.5013 2.03972 12.8744 1.66663 13.3346 1.66663H15.8346C16.4977 1.66663 17.1336 1.93002 17.6024 2.39886C18.0712 2.8677 18.3346 3.50358 18.3346 4.16663V6.66663C18.3346 7.12686 17.9615 7.49996 17.5013 7.49996C17.0411 7.49996 16.668 7.12686 16.668 6.66663V4.16663C16.668 3.94561 16.5802 3.73365 16.4239 3.57737C16.2676 3.42109 16.0557 3.33329 15.8346 3.33329H13.3346C12.8744 3.33329 12.5013 2.9602 12.5013 2.49996ZM2.5013 12.5C2.96154 12.5 3.33464 12.8731 3.33464 13.3333V15.8333C3.33464 16.0543 3.42243 16.2663 3.57871 16.4225C3.73499 16.5788 3.94696 16.6666 4.16797 16.6666H6.66797C7.12821 16.6666 7.5013 17.0397 7.5013 17.5C7.5013 17.9602 7.12821 18.3333 6.66797 18.3333H4.16797C3.50493 18.3333 2.86904 18.0699 2.4002 17.6011C1.93136 17.1322 1.66797 16.4963 1.66797 15.8333V13.3333C1.66797 12.8731 2.04106 12.5 2.5013 12.5ZM17.5013 12.5C17.9615 12.5 18.3346 12.8731 18.3346 13.3333V15.8333C18.3346 16.4963 18.0712 17.1322 17.6024 17.6011C17.1336 18.0699 16.4977 18.3333 15.8346 18.3333H13.3346C12.8744 18.3333 12.5013 17.9602 12.5013 17.5C12.5013 17.0397 12.8744 16.6666 13.3346 16.6666H15.8346C16.0556 16.6666 16.2676 16.5788 16.4239 16.4225C16.5802 16.2663 16.668 16.0543 16.668 15.8333V13.3333C16.668 12.8731 17.0411 12.5 17.5013 12.5Z",
              fill: o
            })]
          })
        },
        I = {
          pillBtn: "rockstargames-modules-core-videoplayera66184568246d1494f18bf8703af5f14",
          selected: "rockstargames-modules-core-videoplayere64e9d75adfdb1376badbd45cee1d888",
          controlItemOptionButton: "rockstargames-modules-core-videoplayerb246a37b5023f5a4283b32bba28d26b6",
          hoverIcon: "rockstargames-modules-core-videoplayerb0f4db960fa6480307f34233d839f9f1",
          icon: "rockstargames-modules-core-videoplayerd32462e15310c4990db530786d03a227"
        };
      var H = l(37925);
      const T = {
          pillBtn: "rockstargames-modules-core-videoplayerffd4628d5ed7b2a0b54e12b05cce06c0",
          selected: "rockstargames-modules-core-videoplayeraa7d1bae78b933753eb091e1a77bbdfe",
          controlItemOptionButton: "rockstargames-modules-core-videoplayerbebccd159df76702c939ed0e1a4de533",
          hoverIcon: "rockstargames-modules-core-videoplayerd5097dda18dfbb0cfae4c6d4334b7dd4",
          tooltip: "rockstargames-modules-core-videoplayerbb5df74ceb1437a471d09fdbac44d6ae",
          button: "rockstargames-modules-core-videoplayera265ce6032aff3b29115aca5cfe78b2e"
        },
        O = e => {
          let {
            children: a,
            tooltipLabel: l,
            className: o,
            hideTooltip: r = !1,
            ...i
          } = e;
          const [n, s] = (0, t.useState)(null), [d, c] = (0, t.useState)(null), [u, _] = (0, t.useState)(!1), {
            styles: p,
            attributes: v
          } = (0, H.usePopper)(n, d, {
            modifiers: [{
              name: "flip",
              options: {
                allowedAutoPlacements: ["top"],
                fallbackPlacements: ["bottom"]
              }
            }, {
              name: "offset",
              options: {
                offset: [0, 20]
              }
            }],
            placement: "auto"
          });
          return (0, y.jsxs)("div", {
            children: [l && !r && u && (0, y.jsx)("span", {
              className: T.tooltip,
              ref: c,
              style: p.popper,
              ...v,
              children: l
            }), (0, y.jsx)("button", {
              ...i,
              className: [T.button, o].join(" "),
              onPointerEnter: e => {
                "mouse" === e.pointerType && _(!0)
              },
              onPointerLeave: () => {
                _(!1)
              },
              type: "button",
              ref: s,
              children: a
            })]
          })
        },
        P = () => {
          const {
            formatMessage: e
          } = (0, d.useIntl)(), {
            state: a,
            setState: l
          } = (0, m.mU)(), {
            fullscreen: t
          } = a, o = () => {
            l("fullscreen", !t)
          };
          return (0, y.jsx)(O, {
            tooltipLabel: e(t ? R.videoplayer_windowed_hover_label : R.videoplayer_fullscreen_hover_label),
            "aria-label": e(R.videoplayer_fullscreen_button_label),
            className: I.button,
            onClick: o,
            onKeyDown: e => {
              "Enter" === e.code && (e.preventDefault(), o())
            },
            children: t ? (0, y.jsx)(V, {
              className: I.icon
            }) : (0, y.jsx)(A, {
              className: I.icon
            })
          })
        };
      var D = l(42836);
      const F = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            height: o = "80",
            fill: r = "#fff",
            fillRule: i = "evenodd",
            viewBox: n = "0 0 80 80",
            width: s = "80"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: o,
            role: "img",
            viewBox: n,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: i,
              clipRule: t,
              d: "M39.9868 6.6667L39.9994 6.66666C46.5921 6.66668 53.0367 8.62165 58.5184 12.2844C64 15.9471 68.2724 21.153 70.7953 27.2439C73.3183 33.3348 73.9784 40.037 72.6922 46.503C71.406 52.9691 68.2313 58.9085 63.5696 63.5702C58.9078 68.232 52.9684 71.4067 46.5024 72.6929C40.0363 73.979 33.3341 73.3189 27.2432 70.796C21.1524 68.2731 15.9464 64.0007 12.2837 58.519C8.62098 53.0374 6.66602 46.5927 6.66602 40C6.66602 38.1591 8.1584 36.6667 9.99935 36.6667C11.8403 36.6667 13.3327 38.1591 13.3327 40C13.3327 45.2742 14.8967 50.4299 17.8268 54.8152C20.757 59.2005 24.9218 62.6185 29.7945 64.6368C34.6672 66.6551 40.0289 67.1832 45.2018 66.1543C50.3746 65.1254 55.1261 62.5856 58.8555 58.8562C62.5849 55.1268 65.1247 50.3752 66.1536 45.2024C67.1826 40.0296 66.6545 34.6678 64.6361 29.7951C62.6178 24.9224 59.1999 20.7577 54.8146 17.8275C50.431 14.8985 45.2776 13.3346 40.0056 13.3333C32.4904 13.3632 25.277 16.2928 19.8692 21.5108L12.3564 29.0237C11.0546 30.3254 8.94407 30.3254 7.64233 29.0237C6.34058 27.722 6.34058 25.6114 7.64233 24.3097L15.1757 16.7763L15.2159 16.7368C21.8642 10.3097 30.7398 6.70149 39.9868 6.6667Z",
              fill: r
            }), (0, y.jsx)("path", {
              fillRule: i,
              clipRule: t,
              d: "M9.99935 6.66668C11.8403 6.66668 13.3327 8.15906 13.3327 10V23.3333H26.666C28.507 23.3333 29.9994 24.8257 29.9994 26.6667C29.9994 28.5076 28.507 30 26.666 30H9.99935C8.1584 30 6.66602 28.5076 6.66602 26.6667V10C6.66602 8.15906 8.1584 6.66668 9.99935 6.66668Z",
              fill: r
            })]
          })
        },
        z = (0, d.defineMessages)({
          videoplayer_play_pause_button_label: {
            id: "videoplayer_play_pause_button_label",
            defaultMessage: "Play/Pause Toggle"
          },
          videoplayer_play_hover_label: {
            id: "videoplayer_play_hover_label",
            defaultMessage: "Play"
          },
          videoplayer_pause_hover_label: {
            id: "videoplayer_pause_hover_label",
            defaultMessage: "Pause"
          },
          videoplayer_replay_hover_label: {
            id: "videoplayer_replay_hover_label",
            defaultMessage: "Replay"
          }
        }),
        Z = "rockstargames-modules-core-videoplayerc9b4e4f67525086ccb6787307c534d91",
        q = () => {
          (0, D.useGtmTrack)();
          const {
            formatMessage: e
          } = (0, d.useIntl)(), {
            state: a,
            setState: l,
            replay: t,
            trackGa: o
          } = (0, m.mU)(), {
            playerEnded: r,
            playing: i
          } = a;
          return (0, y.jsx)(O, {
            tooltipLabel: e(r ? z.videoplayer_replay_hover_label : i ? z.videoplayer_pause_hover_label : z.videoplayer_play_hover_label),
            "aria-label": e(z.videoplayer_play_pause_button_label),
            onMouseDown: e => {
              r && "function" == typeof t ? (o({
                event: "video_replay"
              }), t()) : (o({
                event: i ? "video_pause" : "video_play_manual"
              }), l("playing", !i))
            },
            onKeyDown: e => {
              "Enter" === e.code && (e.preventDefault(), l("playing", !i))
            },
            children: r ? (0, y.jsx)(F, {
              className: Z
            }) : i ? (0, y.jsx)(h, {
              className: Z
            }) : (0, y.jsx)(f.c, {
              className: Z
            })
          })
        };
      var U = l(97860),
        $ = l.n(U);
      const G = (0, d.defineMessages)({
          videoplayer_progress_bar_label: {
            id: "videoplayer_progress_bar_label",
            defaultMessage: "Progress Bar"
          }
        }),
        K = {
          controlItemOptionButton: "rockstargames-modules-core-videoplayere5655ad12c5c8dee0074a3996cabd580",
          hoverIcon: "rockstargames-modules-core-videoplayerd23c5f6cee3dcd86d71288f193bc9198",
          progressBar: "rockstargames-modules-core-videoplayerc9741d05477174e03b1e47bf6c032922",
          pillBtn: "rockstargames-modules-core-videoplayerb5850e8cc10a716b4390b6ab559144a4",
          selected: "rockstargames-modules-core-videoplayera57eaff77cba1b1ce445dad61de61b8b",
          timestamp: "rockstargames-modules-core-videoplayerc4ddbbd238bb5d022c21b9b15c18c467",
          isDragging: "rockstargames-modules-core-videoplayercd6ea54a0a629c8ec25a800358868eaa",
          background: "rockstargames-modules-core-videoplayerfeaae2237c34d4c4128f3d14b790d994",
          buffer: "rockstargames-modules-core-videoplayera4682b90161ce46f295d8a5bc3abb4bd",
          time: "rockstargames-modules-core-videoplayerc5980dd8c81b84d9f08500fdc8058bdc"
        },
        W = () => {
          const e = (0, t.useRef)(null),
            a = (0, t.useRef)(null),
            {
              formatMessage: l
            } = (0, d.useIntl)(),
            [o, r] = (0, t.useState)({
              25: !1,
              50: !1,
              75: !1,
              90: !1
            }),
            [i, n] = (0, t.useState)(0),
            [s, c] = (0, t.useState)(0),
            [u, _] = (0, t.useState)(!1),
            [p, v] = (0, t.useState)(null),
            [b, h] = (0, t.useState)(0),
            {
              state: f,
              setState: g,
              trackGaQuartile: C
            } = (0, m.mU)(),
            {
              accentColor: k,
              buffered: w,
              currentTime: x,
              idle: j,
              playerEnded: N,
              playing: M,
              playerRef: L,
              progressBarState: S,
              timing: B,
              videoRef: E
            } = f,
            R = function() {
              let {
                centerX: e = 0
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (!a.current) return;
              let l = null;
              const {
                x: t,
                width: o
              } = a.current.getBoundingClientRect();
              l = (e - t) / o, l = Math.min(1, Math.max(0, l)), g("progressBarState", {
                percent: l
              })
            },
            V = e => {
              if (!a?.current || !E?.current || !B?.duration) return;
              const l = a.current.getBoundingClientRect();
              let t = (e.clientX - l.left) / l.width * B.duration;
              t = Math.min(B.duration, Math.max(0, t)), v(t)
            };
          return (0, t.useEffect)((() => {
            const e = () => {
              v(null)
            };
            return document.addEventListener("mouseleave", e), document.addEventListener("mouseup", e), () => {
              document.removeEventListener("mouseleave", e), document.removeEventListener("mouseup", e)
            }
          }), []), (0, t.useEffect)((() => {
            u && S?.percent ? h(S.percent) : B?.current && B?.duration && h(B.current / B.duration)
          }), [u, S?.percent, B?.current, B?.duration]), (0, t.useEffect)((() => {
            const e = E?.current,
              a = () => {
                if (!e?.currentTime || !e?.duration) return;
                const a = {
                    ...o
                  },
                  l = e.duration,
                  t = e.currentTime,
                  s = Math.floor(t / l * 100),
                  d = Math.floor(l),
                  c = e => C("video_threshold", d, e);
                s > i && (!a[90] && s >= 90 ? (c(90), a[90] = !0) : !a[75] && s >= 75 && s < 90 ? (c(75), a[75] = !0) : !a[50] && s >= 50 && s < 75 ? (c(50), a[50] = !0) : !a[25] && s >= 25 && s < 50 && (c(25), a[25] = !0), r(a), n(s))
              };
            return e?.addEventListener("timeupdate", a), () => {
              e?.removeEventListener("timeupdate", a)
            }
          }), [E, o, i]), (0, t.useEffect)((() => {
            N || S.percent || !M || g("controlsActive", !j)
          }), [j, N, S.percent, M]), (0, t.useEffect)((() => {
            const e = S.percent ? S.percent * B.duration : x;
            g("currentTime", e)
          }), [S.percent, B.duration]), (0, t.useEffect)((() => {
            const a = e?.current;
            if (!a) return;
            const l = a.getContext("2d"),
              t = a.getBoundingClientRect();
            if (a.width = t.width, a.height = t.height, l.clearRect(0, 0, t.width, t.height), l.fillStyle = "rgba(255, 255, 255, 0.5)", !w || !w.length) return;
            const o = t.width / B.duration;
            for (let e = 0; e < w.length; e += 1) {
              const a = w.start(e),
                r = w.end(e),
                i = a * o,
                n = r * o;
              a <= B.current && B.current <= r && l.fillRect(i, 0, n - i, t.height)
            }
          }), [w, e, B.duration, B.current]), (0, t.useEffect)((() => {
            if (!a.current) return;
            const e = new($())(a.current),
              l = e => {
                _(!0), !N && L?.current?.contains(e.srcEvent.target) ? (R({
                  centerX: e.center.x
                }), V(e.srcEvent)) : R()
              },
              t = () => {
                _(!1), R()
              },
              o = e => {
                !N && L?.current?.contains(e.srcEvent.target) ? (R({
                  centerX: e.center.x
                }), V(e.srcEvent)) : R()
              };
            return e.on("pan", l), e.on("panend", t), e.on("tap", o), () => {
              e.off("pan", l), e.off("panend", t), e.off("tap", o)
            }
          }), [L?.current, a?.current, N, B?.duration]), N ? null : (0, y.jsx)("div", {
            ref: a,
            role: "slider",
            "aria-valuenow": S?.percent ?? 0,
            tabIndex: 0,
            "aria-label": l(G.videoplayer_progress_bar_label),
            className: [K.progressBar, u ? K.isDragging : ""].join(" "),
            onMouseLeave: e => u ? null : v(null),
            onMouseMove: e => V(e),
            children: (0, y.jsxs)("div", {
              className: K.background,
              children: [(0, y.jsx)("canvas", {
                className: K.buffer,
                ref: e
              }), (0, y.jsx)("div", {
                className: K.time,
                style: {
                  "--accent-color": k,
                  "--percent-current": b
                }
              }), null !== p && (0, y.jsx)("div", {
                style: {
                  "--left-position": p / (E?.current?.duration ?? 1)
                },
                className: K.timestamp,
                children: function() {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  const a = Math.max(0, Math.floor(e / 60)),
                    l = Math.max(0, Math.floor(e % 60));
                  return `${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`
                }(p)
              })]
            })
          })
        },
        Q = {
          controlItemOptionButton: "rockstargames-modules-core-videoplayere9bdd6466d4adef55a9c45e90fe9aa8c",
          hoverIcon: "rockstargames-modules-core-videoplayera5b0474d317c9dd15f73a7d39b615088",
          time: "rockstargames-modules-core-videoplayerd762f29e503ae14dff736dec8c75a183",
          pillBtn: "rockstargames-modules-core-videoplayerc1d2fa5fe55668e214cd34ac2ded4e5a",
          selected: "rockstargames-modules-core-videoplayerca9fe8ce748018bc257349555345848a",
          clr: "rockstargames-modules-core-videoplayere6f2afca1988b9bdc6f2236093dd9e90"
        },
        Y = e => {
          const a = new Date(1e3 * e),
            l = a.getUTCMinutes(),
            t = a.getSeconds();
          return `${l.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`
        },
        X = () => {
          const {
            state: e
          } = (0, m.mU)(), {
            brand: a,
            timing: l
          } = e, {
            current: t,
            duration: o
          } = l;
          return (0, y.jsx)("div", {
            className: [Q.time, Q[a]].join(" ").trim(),
            children: `${Y(t)} / ${Y(o)}`
          })
        },
        J = e => !!e && ["button", "a", "input", "select", "textarea", "label", "[tabindex]"].some((a => e.matches(a))),
        ee = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "20",
            type: n = "up",
            viewBox: s = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            width: d,
            viewBox: s,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (() => {
              switch (n) {
                case "up":
                default:
                  return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)("path", {
                      d: "M16.4797 3.51919C16.1544 3.19371 15.6267 3.19363 15.3012 3.51901C14.9757 3.8444 14.9757 4.37204 15.3011 4.69752C16.7071 6.10398 17.4969 8.01129 17.4969 10C17.4969 11.9888 16.7071 13.8961 15.3011 15.3025C14.9757 15.628 14.9757 16.1556 15.3012 16.481C15.6267 16.8064 16.1544 16.8063 16.4797 16.4809C18.1982 14.7619 19.1636 12.4307 19.1636 10C19.1636 7.56935 18.1982 5.23819 16.4797 3.51919Z",
                      fill: o
                    }), (0, y.jsx)("path", {
                      d: "M13.5381 6.46086C13.2127 6.13537 12.685 6.13529 12.3596 6.46068C12.0341 6.78607 12.034 7.31371 12.3594 7.63919C12.9843 8.26428 13.3353 9.11198 13.3353 9.99586C13.3353 10.8797 12.9843 11.7274 12.3594 12.3525C12.034 12.678 12.0341 13.2056 12.3596 13.531C12.685 13.8564 13.2127 13.8563 13.5381 13.5309C14.4754 12.5932 15.002 11.3217 15.002 9.99586C15.002 8.67004 14.4754 7.3985 13.5381 6.46086Z",
                      fill: o
                    }), (0, y.jsx)("path", {
                      fillRule: r,
                      clipRule: t,
                      d: "M9.9987 4.16671C9.9987 3.84637 9.81508 3.55439 9.52635 3.41562C9.23763 3.27685 8.89493 3.31587 8.64479 3.51598L4.70638 6.66671H1.66536C1.20513 6.66671 0.832031 7.0398 0.832031 7.50004V12.5C0.832031 12.9603 1.20513 13.3334 1.66536 13.3334H4.70638L8.64479 16.4841C8.89493 16.6842 9.23763 16.7232 9.52635 16.5845C9.81508 16.4457 9.9987 16.1537 9.9987 15.8334V4.16671ZM5.51928 8.15076L8.33203 5.90056V14.0995L5.51928 11.8493C5.37152 11.7311 5.18792 11.6667 4.9987 11.6667H2.4987V8.33337H4.9987C5.18792 8.33337 5.37152 8.26897 5.51928 8.15076Z",
                      fill: o
                    })]
                  });
                case "down":
                  return (0, y.jsx)("path", {
                    fillRule: r,
                    clipRule: t,
                    d: "M9.9987 4.16672C9.9987 3.84638 9.81508 3.5544 9.52636 3.41563C9.23763 3.27686 8.89493 3.31588 8.64479 3.51599L4.70638 6.66672H1.66536C1.20513 6.66672 0.832031 7.03981 0.832031 7.50005V12.5C0.832031 12.9603 1.20513 13.3334 1.66536 13.3334H4.70638L8.64479 16.4841C8.89493 16.6842 9.23763 16.7232 9.52636 16.5845C9.81508 16.4457 9.9987 16.1537 9.9987 15.8334V4.16672ZM5.51928 8.15077L8.33203 5.90057V14.0995L5.51928 11.8493C5.37152 11.7311 5.18792 11.6667 4.9987 11.6667H2.4987V8.33338H4.9987C5.18792 8.33338 5.37152 8.26898 5.51928 8.15077ZM13.5381 6.46089C13.2127 6.13541 12.685 6.13533 12.3596 6.46071C12.0341 6.7861 12.034 7.31374 12.3594 7.63923C12.9843 8.26432 13.3353 9.11201 13.3353 9.99589C13.3353 10.8798 12.9843 11.7275 12.3594 12.3526C12.034 12.678 12.0341 13.2057 12.3596 13.5311C12.685 13.8565 13.2127 13.8564 13.5381 13.5309C14.4754 12.5933 15.002 11.3217 15.002 9.99589C15.002 8.67007 14.4754 7.39853 13.5381 6.46089Z",
                    fill: o
                  });
                case "muted":
                  return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)("path", {
                      fillRule: r,
                      clipRule: t,
                      d: "M9.52635 3.41563C9.81508 3.5544 9.9987 3.84638 9.9987 4.16672V15.8334C9.9987 16.1537 9.81508 16.4457 9.52635 16.5845C9.23763 16.7232 8.89493 16.6842 8.64479 16.4841L4.70638 13.3334H1.66536C1.20513 13.3334 0.832031 12.9603 0.832031 12.5V7.50005C0.832031 7.03981 1.20513 6.66672 1.66536 6.66672H4.70638L8.64479 3.51599C8.89493 3.31588 9.23763 3.27686 9.52635 3.41563ZM8.33203 5.90057L5.51928 8.15077C5.37152 8.26898 5.18792 8.33338 4.9987 8.33338H2.4987V11.6667H4.9987C5.18792 11.6667 5.37152 11.7311 5.51928 11.8493L8.33203 14.0995V5.90057Z",
                      fill: o
                    }), (0, y.jsx)("path", {
                      d: "M19.7546 6.91079C20.0801 7.23622 20.0801 7.76386 19.7546 8.0893L17.8439 10L19.7546 11.9108C20.0801 12.2362 20.0801 12.7639 19.7546 13.0893C19.4292 13.4147 18.9015 13.4147 18.5761 13.0893L16.6654 11.1786L14.7546 13.0893C14.4292 13.4147 13.9015 13.4147 13.5761 13.0893C13.2507 12.7639 13.2507 12.2362 13.5761 11.9108L15.4869 10L13.5761 8.0893C13.2507 7.76386 13.2507 7.23622 13.5761 6.91079C13.9015 6.58535 14.4292 6.58535 14.7546 6.91079L16.6654 8.82153L18.5761 6.91079C18.9015 6.58535 19.4292 6.58535 19.7546 6.91079Z",
                      fill: o
                    })]
                  })
              }
            })()]
          })
        },
        ae = (0, d.defineMessages)({
          videoplayer_volume_toggle_button_label: {
            id: "videoplayer_volume_toggle_button_label",
            defaultMessage: "Mute/Unmute Toggle"
          },
          videoplayer_volume_slider_label: {
            id: "videoplayer_volume_slider_label",
            defaultMessage: "Volume"
          }
        }),
        le = {
          controlItemOptionButton: "rockstargames-modules-core-videoplayerf8b240afe7b7f5681e3b5cbf2aeb3945",
          hoverIcon: "rockstargames-modules-core-videoplayerf365b283f3ff28b90708d68469a2f539",
          volumeControls: "rockstargames-modules-core-videoplayerd937ce5a0cebb6d4be284382dc717e18",
          pillBtn: "rockstargames-modules-core-videoplayerc5a8acc783bd11d1a5cfa8ae2081d509",
          selected: "rockstargames-modules-core-videoplayera618f932bd00aed298a49784fb2d697f",
          volumeBar: "rockstargames-modules-core-videoplayerda22acf93b9e5ab3aee3ae0b06d84289",
          expand: "rockstargames-modules-core-videoplayerdbf51b012acb6adfe3e10d276a507424",
          volumeBarIndicator: "rockstargames-modules-core-videoplayerfe78b56965bf511d5a7a78a240922cdf",
          volumeBarBackground: "rockstargames-modules-core-videoplayereb777006abf49acc6619e6727719cc30",
          icon: "rockstargames-modules-core-videoplayere46e656945dc15595a7024be43107d28"
        },
        te = () => {
          const {
            formatMessage: e
          } = (0, d.useIntl)(), [a, l] = (0, t.useState)(!1), [o, r] = (0, t.useState)(1), [i, n] = (0, t.useState)(1), [s, c] = (0, t.useState)(!1), u = (0, t.useRef)(null), {
            state: _,
            setState: p
          } = (0, m.mU)(), {
            volume: v
          } = _, b = e => {
            if (u?.current) {
              const a = u.current.getBoundingClientRect(),
                l = (e.clientX - a.left) / a.width * 100,
                t = Math.min(1, Math.max(0, 1 * l / 100));
              f(t)
            }
          }, h = e => {
            const a = Math.min(1, Math.max(0, v + e));
            f(a)
          }, f = e => {
            n(e > .01 ? e : 0), p("volume", e > .01 ? e : 0)
          }, g = (0, t.useCallback)((e => {
            e.preventDefault(), e.stopPropagation(), b(e)
          }), []), C = e => {
            c(!1), window.removeEventListener("pointermove", g)
          };
          return (0, t.useEffect)((() => (window.addEventListener("pointerup", C), window.addEventListener("pointercancel", C), () => {
            window.removeEventListener("pointerup", C), window.removeEventListener("pointercancel", C), window.removeEventListener("pointermove", g)
          })), []), (0, y.jsxs)("div", {
            className: le.volumeControls,
            onMouseEnter: () => {
              l(!0)
            },
            onMouseLeave: () => {
              l(!1)
            },
            children: [(0, y.jsx)(O, {
              tooltipLabel: e(ae.videoplayer_volume_slider_label),
              tabIndex: 0,
              onClick: () => {
                v > 0 && r(v);
                const e = v > 0 ? 0 : o;
                f(e), p("volume", e)
              },
              onKeyDown: e => {
                J(e.target) || (e.preventDefault(), v > 0 && r(v), p("volume", v > 0 ? 0 : o))
              },
              "aria-label": e(ae.videoplayer_volume_toggle_button_label),
              className: le.button,
              children: 0 === v ? (0, y.jsx)(ee, {
                type: "muted",
                className: le.icon
              }) : (0, y.jsx)(ee, {
                type: "up",
                className: le.icon
              })
            }), (0, y.jsxs)("div", {
              "aria-label": e(ae.videoplayer_volume_slider_label),
              "aria-valuenow": v,
              "aria-valuemax": 1,
              "aria-valuemin": 0,
              className: [le.volumeBar, a || s ? le.expand : ""].join(" ").trim(),
              tabIndex: 0,
              ref: u,
              role: "slider",
              onMouseDown: e => {
                e.preventDefault(), c(!0), window.addEventListener("pointermove", g), b(e)
              },
              onKeyDown: e => {
                if (!J(e.target)) switch (e.code) {
                  case "ArrowRight":
                  case "ArrowUp":
                    h(.05);
                    break;
                  case "ArrowLeft":
                  case "ArrowDown":
                    h(-.05)
                }
              },
              children: [(0, y.jsx)("div", {
                className: le.volumeBarIndicator,
                style: {
                  "--percent-current": `${i}`
                }
              }), (0, y.jsx)("div", {
                className: le.volumeBarBackground
              })]
            })]
          })
        };
      var oe = l(35212);
      const re = () => (0, y.jsx)("span", {
          className: "rockstargames-modules-core-videoplayerd2c85ed084ada3e8486c4f238f8aa8f9"
        }),
        ie = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "white",
            height: o = "20",
            width: r = "20",
            viewBox: i = "0 0 20 20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            width: r,
            height: o,
            viewBox: i,
            fill: t,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              d: "M10.8346 2.49996C10.8346 2.03972 10.4615 1.66663 10.0013 1.66663C9.54106 1.66663 9.16797 2.03972 9.16797 2.49996V10.4881L6.42389 7.74404C6.09845 7.4186 5.57082 7.4186 5.24538 7.74404C4.91994 8.06947 4.91994 8.59711 5.24538 8.92255L9.41145 13.0886C9.41346 13.0906 9.41548 13.0926 9.41751 13.0946C9.49613 13.1718 9.58626 13.2303 9.68232 13.2701C9.77985 13.3105 9.88672 13.333 9.9988 13.3333L10.0013 13.3333L10.0038 13.3333C10.2302 13.3326 10.4353 13.2417 10.5851 13.0946C10.5871 13.0926 10.5891 13.0906 10.5912 13.0886L14.7572 8.92255C15.0827 8.59711 15.0827 8.06947 14.7572 7.74404C14.4318 7.4186 13.9042 7.4186 13.5787 7.74404L10.8346 10.4881V2.49996Z",
              fill: "white"
            }), (0, y.jsx)("path", {
              d: "M2.5013 11.6666C2.96154 11.6666 3.33464 12.0397 3.33464 12.5V15.8333C3.33464 16.0543 3.42243 16.2663 3.57871 16.4225C3.73499 16.5788 3.94696 16.6666 4.16797 16.6666H15.8346C16.0556 16.6666 16.2676 16.5788 16.4239 16.4225C16.5802 16.2663 16.668 16.0543 16.668 15.8333V12.5C16.668 12.0397 17.0411 11.6666 17.5013 11.6666C17.9615 11.6666 18.3346 12.0397 18.3346 12.5V15.8333C18.3346 16.4963 18.0712 17.1322 17.6024 17.6011C17.1336 18.0699 16.4977 18.3333 15.8346 18.3333H4.16797C3.50493 18.3333 2.86904 18.0699 2.4002 17.6011C1.93136 17.1322 1.66797 16.4963 1.66797 15.8333V12.5C1.66797 12.0397 2.04106 11.6666 2.5013 11.6666Z",
              fill: "white"
            })]
          })
        },
        ne = (0, d.defineMessages)({
          videoplayer_downloads_button_label: {
            id: "videoplayer_downloads_button_label",
            defaultMessage: "Download Options Menu"
          },
          videoplayer_downloads_menu_header: {
            id: "videoplayer_downloads_menu_header",
            defaultMessage: "Download"
          },
          videoplayer_downloads_menu_back_button_label: {
            id: "videoplayer_downloads_menu_back_button_label",
            defaultMessage: "Back"
          }
        }),
        se = {
          pillBtn: "rockstargames-modules-core-videoplayerecc96b3d218fb1a55cc77f9ab1a4bc88",
          selected: "rockstargames-modules-core-videoplayerdf653f0847c9bdff87b6d6ea9307ec15",
          controlItemOptionButton: "rockstargames-modules-core-videoplayera60f5f03b00dd3af3e9d489e8dba3855",
          hoverIcon: "rockstargames-modules-core-videoplayerfdb5ff28a8104917594955010beff588",
          icon: "rockstargames-modules-core-videoplayerbdb556b14a5f218937a7bbf1414329be",
          label: "rockstargames-modules-core-videoplayerb407374b22e05677df900b122530ffd0",
          labelText: "rockstargames-modules-core-videoplayerc2cda817f49e7d64c73489451b0c8c37",
          header: "rockstargames-modules-core-videoplayerc95876652101b4cbdc0f225e996edbd7",
          menuLabel: "rockstargames-modules-core-videoplayera51cefbe7f98a7634a7011aa42ab6dc0",
          backButton: "rockstargames-modules-core-videoplayerc1e150e7dd2a081a78be5e70543ccbdf",
          options: "rockstargames-modules-core-videoplayerd8fe5f0ac47a86d65558e707e8dc8ab0",
          subtext: "rockstargames-modules-core-videoplayerf2f85f688b26472c7a1fc060f9587c23",
          button: "rockstargames-modules-core-videoplayercb80f1bad8472f7b071a866caa4bf36b"
        },
        de = e => {
          const a = parseInt(e, 10);
          let l;
          return a >= 1080 && (l = "HD"), a >= 2160 && (l = "4K"), l
        },
        ce = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const {
            formatMessage: t
          } = (0, d.useIntl)(), {
            trackGa: o,
            menuStates: r
          } = (0, m.mU)();
          return (0, y.jsx)(O, {
            tooltipLabel: t(ne.videoplayer_downloads_menu_header),
            "data-testid": "download-menu-btn",
            "aria-label": t(ne.videoplayer_downloads_button_label),
            onClick: () => {
              o({
                event: "video_download"
              }), l()
            },
            onKeyDown: e => {
              J(e.target) || (o({
                event: "video_download"
              }), l())
            },
            hideTooltip: r.isDownloadMenuOpen,
            children: (0, y.jsxs)("span", {
              className: se.label,
              children: [(0, y.jsx)(ie, {
                className: se.icon
              }), a && (0, y.jsx)("span", {
                className: se.labelText,
                children: t(ne.videoplayer_downloads_menu_header)
              })]
            })
          })
        },
        ue = e => {
          let {
            collapsed: a = !1,
            onBackButtonClick: l,
            onOptionSelect: o
          } = e;
          const [r, i] = (0, t.useState)(0), [n, s] = (0, t.useState)([]), {
            formatMessage: c
          } = (0, d.useIntl)(), {
            state: u,
            setState: _,
            menuStates: p,
            trackGa: v
          } = (0, m.mU)(), {
            fileIndex: b,
            videoData: h,
            videoRef: f
          } = u, {
            video: g
          } = h;
          return (0, t.useEffect)((() => {
            if (!n.length) return;
            const e = n.find((e => e.value === g?.files[b].resolution)),
              a = void 0 === e ? n.length - 1 : n.indexOf(e);
            i(a)
          }), [b, n]), (0, t.useEffect)((() => {
            if (!g?.files) return;
            const e = g.files.map((e => ({
              label: e.resolution,
              subtext: de(e.resolution),
              value: e.resolution
            })));
            s([...e])
          }), [g]), p?.isDownloadMenuOpen ? (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)("header", {
              className: se.header,
              children: (0, y.jsxs)("div", {
                className: se.menuLabel,
                children: [a ? (0, y.jsx)("div", {
                  role: "button",
                  className: se.backButton,
                  "aria-label": c(ne.videoplayer_downloads_menu_back_button_label),
                  onClick: () => {
                    "function" == typeof l && l()
                  },
                  onKeyUp: () => {
                    "function" == typeof l && l()
                  },
                  tabIndex: 0,
                  children: (0, y.jsx)(re, {})
                }) : (0, y.jsx)(ie, {}), c(ne.videoplayer_downloads_menu_header)]
              })
            }), (0, y.jsx)("section", {
              className: se.options,
              children: n && n.map(((e, a) => (0, y.jsxs)("button", {
                type: "button",
                "aria-label": e.label,
                className: [se.button, r === a ? se.selected : ""].join(" ").trim(),
                onClick: () => (async e => {
                  if (!g?.files) return;
                  const a = g.files.find((a => a.resolution === e.value));
                  if (a) {
                    g.files.indexOf(a);
                    try {
                      v({
                        event: "video_download",
                        text: a.resolution
                      });
                      const e = await fetch(a.src),
                        l = await e.blob(),
                        t = window.URL.createObjectURL(l),
                        o = document.createElement("a");
                      o.href = t, o.download = `rockstar-games-${g.game.title?.toLowerCase().replace(/\s+/g,"-")}-${g.title?.toLowerCase().replace(/\s+/g,"-")}-${a.resolution}.mp4`, document.body.appendChild(o), o.click(), document.body.removeChild(o)
                    } catch (e) {
                      console.error("An error occurred fetching video:", e.message)
                    }
                    "function" == typeof o && o()
                  }
                })(e),
                children: [(0, y.jsxs)("span", {
                  className: se.buttonLabel,
                  children: [e.label, e.subtext && (0, y.jsx)("sup", {
                    className: se.subtext,
                    children: e.subtext
                  })]
                }), (0, y.jsx)("div", {
                  className: se.hoverIcon,
                  children: (0, y.jsx)(ie, {
                    className: se.icon
                  })
                })]
              }, e.label)))
            })]
          }) : null
        },
        _e = () => (0, y.jsx)("span", {
          className: "rockstargames-modules-core-videoplayerde42dd9777b421388eddfdc5c8c429e7"
        }),
        pe = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "20",
            viewBox: n = "0 0 20 20",
            width: s = "20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            fill: o,
            height: i,
            role: "img",
            viewBox: n,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10 8.33333C9.07953 8.33333 8.33333 9.07953 8.33333 10C8.33333 10.9205 9.07953 11.6667 10 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07953 10.9205 8.33333 10 8.33333ZM6.66667 10C6.66667 8.15905 8.15905 6.66667 10 6.66667C11.8409 6.66667 13.3333 8.15905 13.3333 10C13.3333 11.8409 11.8409 13.3333 10 13.3333C8.15905 13.3333 6.66667 11.8409 6.66667 10Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10 1.66667C9.77899 1.66667 9.56703 1.75446 9.41074 1.91074C9.25446 2.06703 9.16667 2.27899 9.16667 2.5V2.64499C9.16495 3.07566 9.03733 3.49644 8.79953 3.85551C8.56173 4.21459 8.22413 4.49629 7.82828 4.66595C7.75781 4.69615 7.68368 4.71641 7.60801 4.7263C7.24831 4.85226 6.8611 4.88331 6.48417 4.81497C6.05 4.73624 5.64937 4.52927 5.33395 4.22072L5.32737 4.21429L5.27741 4.16426C5.20002 4.08677 5.10778 4.02498 5.00662 3.98304C4.90545 3.94111 4.79701 3.91952 4.6875 3.91952C4.57799 3.91952 4.46955 3.94111 4.36838 3.98304C4.26722 4.02498 4.17531 4.08645 4.09792 4.16393L4.09726 4.16458C4.01978 4.24198 3.95831 4.33388 3.91638 4.43505C3.87444 4.53621 3.85286 4.64465 3.85286 4.75417C3.85286 4.86368 3.87444 4.97212 3.91638 5.07328C3.95831 5.17445 4.01978 5.26636 4.09726 5.34375L4.15409 5.40058C4.46264 5.71601 4.66958 6.11667 4.7483 6.55083C4.82546 6.97636 4.77594 7.41497 4.60621 7.81231C4.45157 8.21777 4.18081 8.56889 3.82754 8.82157C3.46712 9.07935 3.03748 9.22274 2.59449 9.2331L2.575 9.23333H2.5C2.27899 9.23333 2.06703 9.32113 1.91074 9.47741C1.75446 9.63369 1.66667 9.84565 1.66667 10.0667C1.66667 10.2877 1.75446 10.4996 1.91074 10.6559C2.06703 10.8122 2.27899 10.9 2.5 10.9H2.64499C3.07566 10.9017 3.49644 11.0293 3.85551 11.2671C4.21334 11.5041 4.49433 11.8402 4.66418 12.2343C4.8409 12.6369 4.89342 13.0831 4.81497 13.5158C4.73624 13.95 4.52927 14.3506 4.22072 14.6661L4.21429 14.6726L4.16425 14.7226C4.08677 14.8 4.02498 14.8922 3.98304 14.9934C3.94111 15.0945 3.91952 15.203 3.91952 15.3125C3.91952 15.422 3.94111 15.5305 3.98304 15.6316C4.02498 15.7328 4.08645 15.8247 4.16393 15.9021L4.16458 15.9027C4.24198 15.9802 4.33388 16.0417 4.43505 16.0836C4.53622 16.1256 4.64465 16.1471 4.75417 16.1471C4.86368 16.1471 4.97212 16.1256 5.07328 16.0836C5.17445 16.0417 5.26636 15.9802 5.34375 15.9027L5.40058 15.8459C5.71601 15.5374 6.11667 15.3304 6.55083 15.2517C6.97635 15.1745 7.41497 15.2241 7.81231 15.3938C8.21777 15.5484 8.56889 15.8192 8.82157 16.1725C9.07935 16.5329 9.22274 16.9625 9.2331 17.4055L9.23333 17.425V17.5C9.23333 17.721 9.32113 17.933 9.47741 18.0893C9.63369 18.2455 9.84565 18.3333 10.0667 18.3333C10.2877 18.3333 10.4996 18.2455 10.6559 18.0893C10.8122 17.933 10.9 17.721 10.9 17.5V17.3583L10.9 17.355C10.9017 16.9243 11.0293 16.5036 11.2671 16.1445C11.5041 15.7866 11.8402 15.5056 12.2344 15.3358C12.637 15.1591 13.0832 15.1066 13.5158 15.185C13.95 15.2638 14.3506 15.4707 14.6661 15.7793L14.6726 15.7857L14.7226 15.8357C14.8 15.9132 14.8922 15.975 14.9934 16.017C15.0945 16.0589 15.203 16.0805 15.3125 16.0805C15.422 16.0805 15.5305 16.0589 15.6316 16.017C15.7328 15.975 15.8247 15.9136 15.9021 15.8361L15.9027 15.8354C15.9802 15.758 16.0417 15.6661 16.0836 15.5649C16.1256 15.4638 16.1471 15.3553 16.1471 15.2458C16.1471 15.1363 16.1256 15.0279 16.0836 14.9267C16.0417 14.8255 15.9802 14.7336 15.9027 14.6562L15.8459 14.5994C15.5374 14.284 15.3304 13.8833 15.2517 13.4492C15.1732 13.0165 15.2258 12.5703 15.4024 12.1677C15.5723 11.7736 15.8533 11.4375 16.2112 11.2005C16.5702 10.9627 16.991 10.8351 17.4217 10.8333L17.425 10.8333L17.5 10.8333C17.721 10.8333 17.933 10.7455 18.0893 10.5893C18.2455 10.433 18.3333 10.221 18.3333 10C18.3333 9.77899 18.2455 9.56703 18.0893 9.41074C17.933 9.25446 17.721 9.16667 17.5 9.16667H17.3583L17.355 9.16666C16.9243 9.16494 16.5036 9.03733 16.1445 8.79953C15.7854 8.56173 15.5037 8.22413 15.334 7.82828C15.3038 7.75781 15.2836 7.68368 15.2737 7.60801C15.1477 7.24831 15.1167 6.8611 15.185 6.48417C15.2638 6.05 15.4707 5.64938 15.7793 5.33395L15.7857 5.32738L15.8357 5.27741C15.9132 5.20002 15.975 5.10778 16.017 5.00662C16.0589 4.90545 16.0805 4.79701 16.0805 4.6875C16.0805 4.57799 16.0589 4.46955 16.017 4.36838C15.975 4.26722 15.9136 4.17531 15.8361 4.09792L15.8354 4.09726C15.758 4.01978 15.6661 3.95831 15.5649 3.91638C15.4638 3.87444 15.3553 3.85286 15.2458 3.85286C15.1363 3.85286 15.0279 3.87444 14.9267 3.91638C14.8256 3.95832 14.7336 4.01978 14.6562 4.09726L14.5994 4.15409C14.284 4.46264 13.8833 4.66958 13.4492 4.7483C13.0165 4.82676 12.5702 4.77423 12.1676 4.59751C11.7735 4.42767 11.4374 4.14667 11.2005 3.78885C10.9627 3.42977 10.8351 3.009 10.8333 2.57832L10.8333 2.575V2.5C10.8333 2.27899 10.7455 2.06703 10.5893 1.91074C10.433 1.75446 10.221 1.66667 10 1.66667ZM8.23223 0.732233C8.70107 0.263392 9.33696 0 10 0C10.663 0 11.2989 0.263392 11.7678 0.732233C12.2366 1.20107 12.5 1.83696 12.5 2.5V2.57292C12.5007 2.67812 12.5319 2.78087 12.59 2.8686C12.6484 2.95667 12.7312 3.02577 12.8283 3.06738L12.8365 3.0709C12.9355 3.1146 13.0453 3.12768 13.1518 3.10837C13.2571 3.08928 13.3544 3.0394 13.4314 2.96509L13.4771 2.91941C13.7093 2.68696 13.985 2.50257 14.2885 2.37676C14.592 2.25095 14.9173 2.18619 15.2458 2.18619C15.5744 2.18619 15.8997 2.25095 16.2032 2.37676C16.5067 2.50257 16.7824 2.68697 17.0146 2.91941C17.2467 3.15145 17.4309 3.42694 17.5566 3.73015C17.6824 4.03364 17.7471 4.35896 17.7471 4.6875C17.7471 5.01604 17.6824 5.34136 17.5566 5.64485C17.4308 5.9482 17.2465 6.22381 17.0143 6.45592L16.9683 6.50192C16.8939 6.5789 16.8441 6.67618 16.825 6.78152C16.8056 6.88801 16.8187 6.99785 16.8624 7.09686C16.8859 7.15023 16.9038 7.20577 16.9156 7.26256C16.9551 7.32066 17.0056 7.37082 17.0647 7.40996C17.1525 7.46806 17.2552 7.49934 17.3604 7.5H17.5C18.163 7.5 18.7989 7.76339 19.2678 8.23223C19.7366 8.70107 20 9.33696 20 10C20 10.663 19.7366 11.2989 19.2678 11.7678C18.7989 12.2366 18.163 12.5 17.5 12.5H17.4271C17.3219 12.5007 17.2191 12.5319 17.1314 12.59C17.0433 12.6484 16.9742 12.7312 16.9326 12.8283L16.9291 12.8365C16.8854 12.9355 16.8723 13.0453 16.8916 13.1518C16.9107 13.2571 16.9606 13.3544 17.0349 13.4314L17.0806 13.4771C17.3129 13.7092 17.4975 13.9851 17.6232 14.2885C17.7491 14.592 17.8138 14.9173 17.8138 15.2458C17.8138 15.5744 17.7491 15.8997 17.6232 16.2032C17.4974 16.5067 17.313 16.7824 17.0806 17.0146L16.4917 16.425L17.0813 17.0139C16.8491 17.2464 16.5733 17.4308 16.2699 17.5566C15.9664 17.6824 15.641 17.7471 15.3125 17.7471C14.984 17.7471 14.6586 17.6824 14.3551 17.5566C14.0518 17.4308 13.7762 17.2465 13.5441 17.0143L13.4981 16.9682C13.4211 16.8939 13.3238 16.8441 13.2185 16.825C13.112 16.8056 13.0022 16.8187 12.9031 16.8624L12.895 16.866C12.7979 16.9076 12.715 16.9767 12.6567 17.0647C12.5986 17.1525 12.5673 17.2552 12.5667 17.3604V17.5C12.5667 18.163 12.3033 18.7989 11.8344 19.2678C11.3656 19.7366 10.7297 20 10.0667 20C9.40362 20 8.76774 19.7366 8.2989 19.2678C7.83006 18.7989 7.56667 18.163 7.56667 17.5V17.437C7.56271 17.331 7.52772 17.2284 7.46595 17.142C7.40272 17.0536 7.31436 16.9863 7.21235 16.9488C7.19587 16.9427 7.17959 16.9361 7.16353 16.9291C7.06451 16.8854 6.95468 16.8723 6.84818 16.8916C6.74285 16.9107 6.64556 16.9606 6.56858 17.0349L6.52292 17.0806C6.2908 17.3129 6.01487 17.4975 5.71152 17.6232C5.40802 17.7491 5.08271 17.8138 4.75417 17.8138C4.42563 17.8138 4.10031 17.7491 3.79682 17.6232C3.49361 17.4976 3.21812 17.3134 2.98607 17.0813C2.75363 16.8491 2.56923 16.5733 2.44342 16.2699C2.31761 15.9664 2.25286 15.641 2.25286 15.3125C2.25286 14.984 2.31761 14.6586 2.44342 14.3551C2.56923 14.0517 2.75363 13.7759 2.98607 13.5437L3.03176 13.4981C3.10607 13.4211 3.15594 13.3238 3.17504 13.2185C3.19435 13.112 3.18131 13.0022 3.13761 12.9031L3.13401 12.895C3.09239 12.7979 3.02334 12.715 2.93526 12.6567C2.84753 12.5986 2.74479 12.5673 2.63958 12.5667H2.5C1.83696 12.5667 1.20107 12.3033 0.732233 11.8344C0.263392 11.3656 0 10.7297 0 10.0667C0 9.40363 0.263392 8.76774 0.732233 8.2989C1.20107 7.83006 1.83696 7.56667 2.5 7.56667H2.56303C2.66903 7.56271 2.7716 7.52772 2.85796 7.46595C2.94636 7.40272 3.0137 7.31436 3.05122 7.21235C3.05728 7.19587 3.06386 7.17959 3.07095 7.16353C3.11465 7.06451 3.12768 6.95468 3.10837 6.84818C3.08927 6.74285 3.0394 6.64557 2.96508 6.56859L2.91941 6.52292C2.68696 6.29073 2.50257 6.01501 2.37676 5.71152C2.25095 5.40802 2.18619 5.08271 2.18619 4.75417C2.18619 4.42563 2.25095 4.10031 2.37676 3.79682C2.50251 3.49346 2.68679 3.21786 2.91908 2.98574C3.15119 2.75346 3.4268 2.56917 3.73015 2.44342C4.03364 2.31761 4.35896 2.25286 4.6875 2.25286C5.01604 2.25286 5.34136 2.31761 5.64485 2.44342C5.94835 2.56923 6.22407 2.75363 6.45625 2.98607L6.50192 3.03175C6.5789 3.10607 6.67618 3.15594 6.78152 3.17504C6.88801 3.19435 6.99785 3.18131 7.09686 3.13761C7.15023 3.11406 7.20577 3.09624 7.26256 3.08435C7.32066 3.04491 7.37082 2.99436 7.40996 2.93526C7.46806 2.84753 7.49934 2.74479 7.5 2.63958V2.5C7.5 1.83696 7.76339 1.20107 8.23223 0.732233Z",
              fill: o
            })]
          })
        },
        ve = e => {
          let {
            accentColor: a = "#FCAF17",
            alt: l = "",
            className: t = "",
            height: o = "22",
            label: r,
            viewBox: i = "0 0 30 24",
            width: n = "30"
          } = e;
          return (0, y.jsxs)("svg", {
            className: t,
            height: o,
            role: "img",
            viewBox: i,
            width: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: l
            }), (0, y.jsx)("path", {
              d: "M10 2C10 0.89543 10.8954 0 12 0H26.2857C27.3903 0 28.2857 0.895431 28.2857 2V12C28.2857 13.1046 27.3903 14 26.2857 14H12C10.8954 14 10 13.1046 10 12V2Z",
              fill: a
            }), "4K" === r ? (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)("path", {
                d: "M17.8025 4V7.73315H18.6609V8.73595H17.8025V10H16.6393V8.73595H14V7.44663L16.5511 4H17.8025ZM15.0028 7.73315H16.6393V5.55056H16.6152L15.0028 7.73315Z",
                fill: "#121212"
              }), (0, y.jsx)("path", {
                d: "M24.021 4L21.855 6.41011L24.2857 10H22.8177L21.0207 7.24438L20.4832 7.80056V10H19.2959V4H20.4832V6.31742L21.133 5.56742L22.5048 4H24.021Z",
                fill: "#121212"
              })]
            }) : (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)("path", {
                d: "M17.9966 6.31742V4H19.385V10H17.9966V7.42978H15.3885V10H14V4H15.3885V6.31742H17.9966Z",
                fill: "#121212"
              }), (0, y.jsx)("path", {
                d: "M22.5476 4C25.0525 4 26 5.16292 26 6.95786C26 8.75281 25.0056 10 22.7352 10H20.371V4H22.5476ZM21.7595 8.94663H22.6039C24.0768 8.94663 24.6115 8.30618 24.6115 7C24.6115 5.70225 24.1237 5.01124 22.4162 5.01124H21.7595V8.94663Z",
                fill: "#121212"
              })]
            })]
          })
        },
        me = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "none",
            height: o = "24",
            stroke: r = "white",
            strokeLinecap: i = "round",
            strokeLinejoin: n = "round",
            strokeWidth: s = "2",
            viewBox: d = "0 0 24 24",
            width: c = "24"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            fill: t,
            height: o,
            role: "img",
            viewBox: d,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              d: "M20 6L9 17L4 12",
              stroke: r,
              strokeWidth: s,
              strokeLinecap: i,
              strokeLinejoin: n
            })]
          })
        },
        be = (0, d.defineMessages)({
          videoplayer_quality_settings_button_label: {
            id: "videoplayer_quality_settings_button_label",
            defaultMessage: "Quality Settings Menu"
          }
        }),
        ye = (0, d.defineMessages)({
          videoplayer_quality_settings_menu_header: {
            id: "videoplayer_quality_settings_menu_header",
            defaultMessage: "Settings"
          },
          videoplayer_quality_menu_back_button_label: {
            id: "videoplayer_quality_menu_back_button_label",
            defaultMessage: "Back"
          }
        }),
        he = {
          pillBtn: "rockstargames-modules-core-videoplayerc851ea428466c365b6c897957e4fde37",
          selected: "rockstargames-modules-core-videoplayerf13bc19e3de7f3de303d76218445a982",
          controlItemOptionButton: "rockstargames-modules-core-videoplayerae630d08efc7143fae336c4fe7a9b2c9",
          hoverIcon: "rockstargames-modules-core-videoplayerd1ec8c0ec4e78e4a433495196e0189e0",
          label: "rockstargames-modules-core-videoplayere1ab6b80abca68036bba8aa989677d9b",
          icon: "rockstargames-modules-core-videoplayerb1fbe7957d37093e98772513cafcc47c",
          iconAndLabelContainer: "rockstargames-modules-core-videoplayerb221d2568a64db5cab812e9a35036ac7",
          iconLabel: "rockstargames-modules-core-videoplayerc81c8ea62f68c782dc413a4ddee19c59",
          labelText: "rockstargames-modules-core-videoplayerd70a7fa6db7b5feaebb451e9efefe2cc",
          header: "rockstargames-modules-core-videoplayera24f285dba476981dd0dbf9b09cd2f83",
          menuLabel: "rockstargames-modules-core-videoplayerc6bef8ddf10ac1109c4dc19048269506",
          backButton: "rockstargames-modules-core-videoplayera3e9d0185c1f52365226e933cc9bace8",
          options: "rockstargames-modules-core-videoplayera2c819b26ae5c6e68f57651e13cf598e",
          subtext: "rockstargames-modules-core-videoplayerce2837cf143957234eeef5ce10f20c88",
          button: "rockstargames-modules-core-videoplayerfd8116613484bc9b8bf972faa7af0417",
          checkmark: "rockstargames-modules-core-videoplayere2404a2bba940582b5b986bb9b0273b5",
          selectedValue: "rockstargames-modules-core-videoplayerc6df5cadd319d5cb00b4cdb5221ddae8"
        },
        fe = e => {
          const a = parseInt(e, 10);
          let l;
          return a >= 1080 && (l = "HD"), a >= 2160 && (l = "4K"), l
        },
        ge = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const [o, r] = (0, t.useState)(), {
            formatMessage: i
          } = (0, d.useIntl)(), {
            state: n,
            trackGa: s,
            menuStates: c
          } = (0, m.mU)(), {
            accentColor: u,
            fileIndex: _,
            videoData: p
          } = n, {
            video: v
          } = p;
          return (0, t.useEffect)((() => {
            v && r(fe(v.files[_]?.resolution))
          }), [_, v?.files]), (0, y.jsxs)(O, {
            tooltipLabel: i(ye.videoplayer_quality_settings_menu_header),
            "aria-label": i(be.videoplayer_quality_settings_button_label),
            onClick: () => {
              s({
                event: "video_quality"
              }), l()
            },
            onKeyUp: e => {
              J(e.target) || (e.preventDefault(), s({
                event: "video_quality"
              }), l())
            },
            hideTooltip: c.isQualityMenuOpen,
            children: [(0, y.jsxs)("span", {
              className: he.label,
              children: [(0, y.jsxs)("span", {
                className: he.iconAndLabelContainer,
                children: [(0, y.jsx)(pe, {
                  className: (0, E.classList)(he.icon, o ? he.labeledIcon : ""),
                  label: o
                }), o && (0, y.jsx)(ve, {
                  accentColor: u,
                  className: he.iconLabel,
                  label: o
                })]
              }), a && (0, y.jsx)("span", {
                className: he.labelText,
                children: i(ye.videoplayer_quality_settings_menu_header)
              })]
            }), a && (0, y.jsx)(_e, {})]
          })
        },
        Ce = e => {
          let {
            collapsed: a = !1,
            onBackButtonClick: l,
            onOptionSelect: o
          } = e;
          const [r, i] = (0, t.useState)(0), [n, s] = (0, t.useState)([]), {
            formatMessage: c
          } = (0, d.useIntl)(), {
            state: u,
            setState: _,
            menuStates: p,
            trackGa: v
          } = (0, m.mU)(), {
            fileIndex: b,
            videoData: h,
            videoRef: f
          } = u, {
            video: g
          } = h;
          return (0, t.useEffect)((() => {
            if (!n.length) return;
            const e = n.find((e => e.value === g?.files[b].resolution)),
              a = void 0 === e ? n.length - 1 : n.indexOf(e);
            i(a)
          }), [b, n]), (0, t.useEffect)((() => {
            if (!g?.files) return;
            const e = g.files.map((e => ({
              label: e.resolution,
              subtext: fe(e.resolution),
              value: e.resolution
            })));
            s([...e])
          }), [g]), p?.isQualityMenuOpen ? (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsxs)("header", {
              className: he.header,
              children: [(0, y.jsxs)("div", {
                className: he.menuLabel,
                children: [a ? (0, y.jsx)("div", {
                  role: "button",
                  className: he.backButton,
                  "aria-label": c(ye.videoplayer_quality_menu_back_button_label),
                  onClick: () => {
                    "function" == typeof l && l()
                  },
                  onKeyUp: () => {
                    "function" == typeof l && l()
                  },
                  tabIndex: 0,
                  children: (0, y.jsx)(re, {})
                }) : (0, y.jsx)(pe, {}), c(ye.videoplayer_quality_settings_menu_header)]
              }), Number.isInteger(r) && n?.length && (0, y.jsx)("div", {
                className: he.selectedValue,
                children: n[r]?.label
              })]
            }), (0, y.jsx)("section", {
              className: he.options,
              children: n && n.map(((e, a) => {
                const l = `${e.label}${e.subtext?` ${e.subtext}`:""}`;
                return (0, y.jsxs)("button", {
                  type: "button",
                  "aria-label": l,
                  className: [he.button, r === a ? he.selected : ""].join(" ").trim(),
                  onClick: () => (e => {
                    if (!g?.files) return;
                    const a = g.files.find((a => a.resolution === e.value));
                    if (!a) return;
                    const l = g.files.indexOf(a);
                    v({
                      event: "video_quality",
                      text: a.resolution
                    }), _("savedTime", f?.current?.currentTime), _("fileIndex", l), "function" == typeof o && o()
                  })(e),
                  children: [(0, y.jsxs)("span", {
                    className: he.buttonLabel,
                    children: [e.label, e.subtext && (0, y.jsx)("sup", {
                      className: he.subtext,
                      children: e.subtext
                    })]
                  }), r === a && (0, y.jsx)(me, {
                    className: he.checkmark
                  })]
                }, e.label)
              }))
            })]
          }) : null
        },
        ke = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            isFilled: i = !1,
            height: n = "20",
            width: s = "22",
            viewBox: d = "0 0 22 20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            width: s,
            height: n,
            viewBox: d,
            fill: o,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), i ? (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M19.8581 3C20.2996 3 20.6997 3.15098 21.0033 3.43922H21.0171C21.3206 3.72745 21.5 4.11176 21.5 4.5098V15.4902C21.5 15.8882 21.3206 16.2725 21.0171 16.5608C20.7135 16.849 20.2996 17 19.8719 17H2.12812C1.6866 17 1.28647 16.849 0.982917 16.5608C0.679369 16.2863 0.5 15.8882 0.5 15.4902V4.5098C0.5 4.11176 0.679369 3.72745 0.982917 3.43922C1.30026 3.15098 1.70039 3 2.12812 3H19.8581ZM8.03496 13.5689C7.35888 13.5689 6.69659 13.4042 6.11709 13.0885C5.53759 12.7728 5.04087 12.3199 4.70973 11.7846C4.37859 11.2493 4.19922 10.6179 4.19922 10.0003C4.19922 9.38262 4.37859 8.76497 4.70973 8.21595C5.05467 7.68066 5.53759 7.22772 6.11709 6.91203C6.69659 6.59635 7.35888 6.43164 8.03496 6.43164C8.71105 6.43164 9.37333 6.59635 9.95283 6.91203C10.0494 6.96693 10.146 7.03556 10.215 7.11792C10.2978 7.20027 10.353 7.29635 10.3806 7.40615C10.4082 7.51595 10.422 7.62576 10.4082 7.73556C10.3944 7.84537 10.353 7.95517 10.2978 8.05125C10.2426 8.14733 10.1598 8.22968 10.0632 8.29831C9.96663 8.36693 9.85625 8.40811 9.74587 8.43556C9.63549 8.44929 9.51131 8.46301 9.40093 8.44929C9.29055 8.43556 9.18017 8.39439 9.08358 8.33948C8.76624 8.17478 8.4075 8.0787 8.04876 8.0787C7.67622 8.0787 7.31748 8.17478 7.00014 8.33948C6.68279 8.50419 6.42064 8.75125 6.24127 9.03948C6.0619 9.32772 5.96532 9.65713 5.96532 10.0003C5.96532 10.3434 6.0619 10.6728 6.24127 10.9611C6.42064 11.2493 6.68279 11.4963 7.00014 11.6611C7.63483 12.0042 8.44889 12.0042 9.08358 11.6611C9.29055 11.5512 9.52511 11.5238 9.74587 11.5787C9.98043 11.6336 10.1736 11.7709 10.284 11.963C10.3944 12.1552 10.422 12.3885 10.3668 12.5944C10.2978 12.8003 10.1598 12.9924 9.95283 13.1022H9.93904C9.35954 13.4042 8.71105 13.5689 8.03496 13.5689ZM15.4305 13.5689C14.7544 13.5689 14.0921 13.4042 13.5126 13.0885C12.9331 12.7728 12.4364 12.3199 12.1053 11.7846C11.7741 11.2493 11.5948 10.6179 11.5948 10.0003C11.5948 9.38262 11.7741 8.76497 12.1053 8.21595C12.4502 7.68066 12.9331 7.22772 13.5126 6.91203C14.0921 6.59635 14.7544 6.43164 15.4305 6.43164C16.1066 6.43164 16.7689 6.59635 17.3484 6.91203C17.4449 6.96693 17.5415 7.03556 17.6105 7.11792C17.6933 7.20027 17.7485 7.29635 17.7761 7.40615C17.8037 7.51595 17.8175 7.62576 17.8037 7.73556C17.7899 7.84537 17.7485 7.95517 17.6933 8.05125C17.6243 8.14733 17.5553 8.22968 17.4587 8.29831C17.3622 8.36693 17.2518 8.40811 17.1414 8.43556C17.031 8.44929 16.9068 8.46301 16.7965 8.44929C16.6861 8.43556 16.5757 8.39439 16.4791 8.33948C16.1618 8.17478 15.803 8.0787 15.4443 8.0787C15.0718 8.0787 14.713 8.17478 14.3957 8.33948C14.0783 8.50419 13.8162 8.75125 13.6368 9.03948C13.4574 9.32772 13.3608 9.65713 13.3608 10.0003C13.3608 10.3434 13.4574 10.6728 13.6368 10.9611C13.8162 11.2493 14.0783 11.4963 14.3957 11.6611C15.0304 12.0042 15.8444 12.0042 16.4791 11.6611C16.6861 11.5512 16.9068 11.5238 17.1414 11.5787C17.376 11.6336 17.5553 11.7709 17.6795 11.963C17.7899 12.1552 17.8175 12.3885 17.7623 12.5944C17.6933 12.8003 17.5553 12.9787 17.3484 13.0885C16.7689 13.4042 16.1066 13.5689 15.4305 13.5689Z",
              fill: o
            }) : (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)("path", {
                d: "m6.12943 13.0882c.57951.3157 1.24179.4804 1.91788.4804.67608 0 1.32457-.1647 1.90407-.4666h.0138c.20692-.1098.34492-.302.41392-.5079.0552-.2059.0276-.4392-.0828-.6314-.1104-.1921-.30353-.3294-.53809-.3843-.22076-.0549-.45532-.0274-.66228.0824-.6347.3431-1.44875.3431-2.08345 0-.31734-.1647-.5795-.4118-.75887-.7-.17937-.2883-.27595-.6177-.27595-.9608 0-.34314.09658-.67255.27595-.96078.17937-.28824.44153-.5353.75887-.7.31735-.16471.67609-.26079 1.04862-.26079.35874 0 .71748.09608 1.03483.26079.09658.0549.20696.09607.31734.1098s.23456 0 .34494-.01373c.11038-.02745.22077-.06862.31739-.13725.0965-.06863.1793-.15098.2345-.24706s.0966-.20588.1104-.31569c.0138-.1098 0-.2196-.0276-.32941-.0276-.1098-.0828-.20588-.1656-.28823-.069-.08236-.1655-.15098-.26212-.20589-.5795-.31568-1.24179-.48039-1.91787-.48039-.67609 0-1.33837.16471-1.91788.48039-.5795.31569-1.06241.76863-1.40735 1.30393-.33115.54902-.51052 1.16666-.51052 1.78431 0 .6176.17937 1.249.51052 1.7843.33114.5353.82785.9882 1.40735 1.3039z"
              }), (0, y.jsx)("path", {
                d: "m13.525 13.0882c.5795.3157 1.2418.4804 1.9178.4804.6761 0 1.3384-.1647 1.9179-.4804.207-.1098.345-.2882.4139-.4941.0552-.2059.0276-.4392-.0827-.6314-.1242-.1921-.3036-.3294-.5382-.3843-.2345-.0549-.4553-.0274-.6622.0824-.6347.3431-1.4488.3431-2.0835 0-.3173-.1647-.5795-.4118-.7589-.7-.1793-.2883-.2759-.6177-.2759-.9608 0-.34314.0966-.67255.2759-.96078.1794-.28824.4416-.5353.7589-.7.3174-.16471.6761-.26079 1.0486-.26079.3588 0 .7175.09608 1.0349.26079.0965.0549.2069.09607.3173.1098s.2346 0 .3449-.01373c.1104-.02745.2208-.06862.3174-.13725s.1656-.15098.2346-.24706c.0551-.09608.0965-.20588.1103-.31569.0138-.1098 0-.2196-.0276-.32941-.0276-.1098-.0827-.20588-.1655-.28823-.069-.08236-.1656-.15098-.2622-.20589-.5795-.31568-1.2418-.48039-1.9179-.48039-.676 0-1.3383.16471-1.9178.48039-.5795.31569-1.0625.76863-1.4074 1.30393-.3311.54902-.5105 1.16666-.5105 1.78431 0 .6176.1794 1.249.5105 1.7843.3312.5353.8279.9882 1.4074 1.3039z"
              }), (0, y.jsx)("path", {
                d: "m21.0033 3.43922c-.3036-.28824-.7037-.43922-1.1452-.43922h-17.72998c-.42773 0-.82786.15098-1.145203.43922-.303548.28823-.482917.67254-.482917 1.07058v10.9804c0 .398.179369.7961.482917 1.0706.303553.2882.703683.4392 1.145203.4392h17.74378c.4277 0 .8416-.151 1.1452-.4392.3035-.2883.4829-.6726.4829-1.0706v-10.9804c0-.39804-.1794-.78235-.4829-1.07058zm-1.2832 1.20784v10.70584h-17.454v-10.70584h17.4678z"
              })]
            })]
          })
        },
        we = e => {
          let {
            className: a = "",
            clipRule: l = "evenodd",
            fill: t = "white",
            fillRule: o = "evenodd",
            height: r = "2",
            width: i = "24",
            viewBox: n = "0 0 24 2"
          } = e;
          return (0, y.jsx)("svg", {
            className: a,
            width: i,
            height: r,
            viewBox: n,
            fill: t,
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, y.jsx)("path", {
              fillRule: o,
              clipRule: l,
              d: "M-8.74227e-08 0.999999C-3.91405e-08 0.447715 0.511675 4.4732e-08 1.14286 9.99118e-08L22.8571 1.99824e-06C23.4883 2.05342e-06 24 0.447717 24 1C24 1.55229 23.4883 2 22.8571 2L1.14286 2C0.511674 2 -1.35705e-07 1.55228 -8.74227e-08 0.999999Z",
              fill: t
            })
          })
        },
        xe = (0, d.defineMessages)({
          videoplayer_captions_button_label: {
            id: "videoplayer_captions_button_label",
            defaultMessage: "Captions"
          },
          videoplayer_captions_menu_header: {
            id: "videoplayer_captions_menu_header",
            defaultMessage: "Subtitles / CC"
          },
          videoplayer_captions_menu_back_button_label: {
            id: "videoplayer_captions_menu_back_button_label",
            defaultMessage: "Back"
          },
          videoplayer_captions_menu_subtitles_label: {
            id: "videoplayer_captions_menu_subtitles_label",
            defaultMessage: "(Subtitles)"
          },
          videoplayer_captions_menu_off_label: {
            id: "videoplayer_captions_menu_off_label",
            defaultMessage: "Off"
          }
        }),
        je = {
          pillBtn: "rockstargames-modules-core-videoplayercf1a9f52618a8c2e22e5074e0ad3ef3f",
          selected: "rockstargames-modules-core-videoplayerbdf3a5b65c2314c2249d7450b1bd76b8",
          controlItemOptionButton: "rockstargames-modules-core-videoplayerb3dca7d5a47e98225f17bfd15d406c58",
          hoverIcon: "rockstargames-modules-core-videoplayera1fe5c81cf6f732ac391c6c1d45e7be6",
          icon: "rockstargames-modules-core-videoplayereee2c3177185287b1f9f977f0d0dfb48",
          active: "rockstargames-modules-core-videoplayerc93476abd42eace83b55c985203922d4",
          underline: "rockstargames-modules-core-videoplayere043d5e7500387ef1141b3a6a55d01c6",
          labelText: "rockstargames-modules-core-videoplayerb2875946b4885fef41325b5c9c8f3ce2",
          header: "rockstargames-modules-core-videoplayerf13498cb4e1a2c861a2abd2e20da04b2",
          menuLabel: "rockstargames-modules-core-videoplayera1406cd8b946760d3bf95a7d14cb4c0b",
          backButton: "rockstargames-modules-core-videoplayerfbfec68acc9a0bb519b505a7bc282840",
          options: "rockstargames-modules-core-videoplayerf201485b547abd6604a77c158da7a0c1",
          subtext: "rockstargames-modules-core-videoplayera3431cbb42f388d512dca603b01c6f1c",
          button: "rockstargames-modules-core-videoplayere7f8c163fd8158da83529b6b5674d576",
          checkmark: "rockstargames-modules-core-videoplayerf4cb3acf04a5453644b25ee49da2cec9",
          selectedValue: "rockstargames-modules-core-videoplayerd3d54ba955bf49646b849a4ac6ee5d45"
        },
        Ne = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const {
            formatMessage: t
          } = (0, d.useIntl)(), {
            trackGa: o,
            state: r,
            menuStates: i
          } = (0, m.mU)(), {
            accentColor: n,
            activeCaption: s
          } = r;
          return (0, y.jsxs)(O, {
            tooltipLabel: t(xe.videoplayer_captions_menu_header),
            "aria-label": t(xe.videoplayer_captions_button_label),
            onClick: () => {
              o({
                event: "video_caption"
              }), l()
            },
            onKeyDown: e => {
              J(e.target) || (o({
                event: "video_caption"
              }), l())
            },
            hideTooltip: i.isCaptionsMenuOpen,
            children: [(0, y.jsxs)("span", {
              className: je.label,
              children: [(0, y.jsx)(ke, {
                className: je.icon,
                isFilled: !(!i.isCaptionsMenuOpen && !s)
              }), !!s && (0, y.jsx)(we, {
                className: je.underline,
                fill: n
              }), a && (0, y.jsx)("span", {
                className: je.labelText,
                children: t(xe.videoplayer_captions_menu_header)
              })]
            }), a && (0, y.jsx)(_e, {})]
          })
        },
        Me = e => {
          let {
            collapsed: a = !1,
            onBackButtonClick: l,
            onOptionSelect: o
          } = e;
          const [r, i] = (0, t.useState)([]), {
            formatMessage: n
          } = (0, d.useIntl)(), {
            state: s,
            setState: c,
            menuStates: u
          } = (0, m.mU)(), {
            captions: _,
            activeCaption: p
          } = s;
          return (0, t.useEffect)((() => {
            if (!_) return i([]), void c("activeCaption", 0);
            const e = _.map(((e, a) => {
              const l = e.label?.replace(/\([^)]*\)/g, "").trim(),
                t = "subtitles" === e.kind;
              return {
                defaultSelected: e.isDefault,
                label: `${(0,m.Le)(l)} ${t?n(xe.videoplayer_captions_menu_subtitles_label):""}`.trim(),
                value: a
              }
            }));
            i([...e])
          }), [_]), u?.isCaptionsMenuOpen ? (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)("header", {
              className: je.header,
              children: (0, y.jsxs)("div", {
                className: je.menuLabel,
                children: [a ? (0, y.jsx)("div", {
                  role: "button",
                  className: je.backButton,
                  "aria-label": n(xe.videoplayer_captions_menu_back_button_label),
                  onClick: () => {
                    "function" == typeof l && l()
                  },
                  onKeyUp: () => {
                    "function" == typeof l && l()
                  },
                  tabIndex: 0,
                  children: (0, y.jsx)(re, {})
                }) : (0, y.jsx)(ke, {}), n(xe.videoplayer_captions_menu_header)]
              })
            }), (0, y.jsx)("section", {
              className: je.options,
              children: r && r.map(((e, a) => (0, y.jsxs)("button", {
                type: "button",
                "aria-label": e.label,
                className: [je.button, a === p ? je.selected : ""].join(" ").trim(),
                onClick: () => (e => {
                  const a = e.value;
                  c("showCaptions", !p === a), c("activeCaption", p === a ? 0 : a), "function" == typeof o && o()
                })(e),
                children: [(0, y.jsx)("span", {
                  className: je.buttonLabel,
                  children: e.label
                }), p === e.value && (0, y.jsx)(me, {
                  className: je.checkmark
                })]
              }, e.label)))
            })]
          }) : null
        },
        Le = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "20",
            viewBox: n = "0 0 20 20",
            width: s = "20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            role: "img",
            viewBox: n,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M18.9213 1.07735C19.1477 1.30372 19.2243 1.63974 19.1186 1.9419L13.2853 18.6086C13.1724 18.9311 12.8741 19.152 12.5327 19.1659C12.1913 19.1798 11.876 18.984 11.7372 18.6717L8.53403 11.4646L1.32692 8.26145C1.01469 8.12268 0.8188 7.80737 0.832728 7.46597C0.846656 7.12457 1.06758 6.82627 1.39008 6.71339L18.0567 0.88006C18.3589 0.774305 18.6949 0.850988 18.9213 1.07735ZM3.9246 7.59211L9.50382 10.0718C9.69234 10.1556 9.84309 10.3063 9.92688 10.4948L12.4065 16.074L16.9737 3.02492L3.9246 7.59211Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M18.9213 1.07735C19.2467 1.40279 19.2467 1.93043 18.9213 2.25586L9.75463 11.4225C9.42919 11.748 8.90155 11.748 8.57611 11.4225C8.25068 11.0971 8.25068 10.5695 8.57611 10.244L17.7428 1.07735C18.0682 0.751916 18.5959 0.751916 18.9213 1.07735Z",
              fill: o
            })]
          })
        },
        Se = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "white",
            height: o = "17",
            viewBox: r = "0 0 16 17",
            width: i = "16"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: o,
            role: "img",
            viewBox: r,
            width: i,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              d: "M14.6654 8.54073C14.6654 4.83632 11.6806 1.83331 7.9987 1.83331C4.3168 1.83331 1.33203 4.83632 1.33203 8.54073C1.33203 11.8886 3.76993 14.6635 6.95703 15.1666V10.4796H5.26433V8.54073H6.95703V7.063C6.95703 5.38195 7.95232 4.4534 9.47513 4.4534C10.2045 4.4534 10.9675 4.5844 10.9675 4.5844V6.23505H10.1268C9.29864 6.23505 9.04037 6.75209 9.04037 7.28253V8.54073H10.8893L10.5938 10.4796H9.04036V15.1666C12.2275 14.6635 14.6654 11.8886 14.6654 8.54073Z",
              fill: t
            })]
          })
        },
        Be = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "17",
            viewBox: n = "0 0 16 17",
            width: s = "16"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            role: "img",
            viewBox: n,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M12.1135 7.10253C12.3861 6.82994 12.757 6.6557 13.1786 6.6557C14.7326 6.6557 15.2497 8.73809 13.8474 9.45752C13.9092 9.67953 13.9345 9.92683 13.9345 10.1629C13.9345 12.5179 11.2816 14.426 8.01051 14.426C4.75343 14.426 2.10055 12.5179 2.10055 10.1629C2.10055 9.92683 2.12304 9.69077 2.17362 9.46876C0.743205 8.75214 1.25467 6.6557 2.81717 6.6557C3.23871 6.6557 3.62371 6.82994 3.8963 7.11377C4.90237 6.41964 6.24005 5.97281 7.72667 5.91098L8.58099 2.04408C8.61752 1.90638 8.75241 1.80802 8.89012 1.84455L11.6273 2.45157C11.8128 2.09467 12.1865 1.83331 12.6193 1.83331C13.2404 1.83331 13.735 2.34197 13.735 2.94898C13.735 3.556 13.2376 4.06465 12.6193 4.06465C12.0123 4.06465 11.5177 3.57005 11.5177 2.96303L9.03906 2.4066L8.26062 5.91379C9.75848 5.96157 11.1102 6.4084 12.1135 7.10253ZM5.55724 8.50203C4.93617 8.50203 4.44157 8.99944 4.44157 9.6177C4.44157 10.2247 4.93898 10.7221 5.55724 10.7193C6.16425 10.7193 6.65885 10.2247 6.65885 9.6177C6.65885 8.99663 6.16425 8.50203 5.55724 8.50203ZM10.4639 12.2453C9.441 13.2682 6.55487 13.2682 5.53194 12.2453C5.41953 12.1469 5.41953 11.9727 5.53194 11.8603C5.6303 11.7619 5.80454 11.7619 5.9029 11.8603C6.68415 12.6612 9.27519 12.6752 10.0902 11.8603C10.1885 11.7619 10.3628 11.7619 10.4611 11.8603C10.5763 11.9727 10.5763 12.1469 10.4639 12.2453ZM9.33983 9.62051C9.33983 10.2275 9.83443 10.7221 10.4414 10.7221C11.0597 10.7221 11.5543 10.2247 11.5571 9.62051C11.5571 8.99944 11.0597 8.50484 10.4414 8.50484C9.83443 8.50484 9.33983 9.00225 9.33983 9.62051Z",
              fill: o
            })]
          })
        },
        Ee = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "white",
            height: o = "17",
            viewBox: r = "0 0 16 17",
            width: i = "16"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: o,
            role: "img",
            viewBox: r,
            width: i,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              d: "M9.01608 7.68329L12.987 3.16669H12.046L8.59808 7.08839L5.84422 3.16669H2.66797L6.83234 9.097L2.66797 13.8334H3.609L7.25011 9.6919L10.1584 13.8334H13.3346L9.01585 7.68329H9.01608ZM7.72721 9.14925L7.30528 8.55872L3.94807 3.85985H5.39344L8.10274 7.65199L8.52468 8.24251L12.0465 13.1717H10.6011L7.72721 9.14947V9.14925Z",
              fill: t
            })]
          })
        },
        Re = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "17",
            viewBox: n = "0 0 16 17",
            width: s = "16"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            role: "img",
            viewBox: n,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M5.80604 4.36189C6.06639 4.62224 6.06639 5.04435 5.80604 5.3047L2.27744 8.83329L5.80604 12.3619C6.06639 12.6222 6.06639 13.0443 5.80604 13.3047C5.54569 13.565 5.12358 13.565 4.86323 13.3047L0.863231 9.3047C0.602881 9.04435 0.602881 8.62224 0.863231 8.36189L4.86323 4.36189C5.12358 4.10154 5.54569 4.10154 5.80604 4.36189Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10.1953 4.36189C10.4556 4.10154 10.8777 4.10154 11.1381 4.36189L15.1381 8.36189C15.3984 8.62224 15.3984 9.04435 15.1381 9.3047L11.1381 13.3047C10.8777 13.565 10.4556 13.565 10.1953 13.3047C9.93491 13.0443 9.93491 12.6222 10.1953 12.3619L13.7239 8.83329L10.1953 5.3047C9.93491 5.04435 9.93491 4.62224 10.1953 4.36189Z",
              fill: o
            })]
          })
        },
        Ve = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "none",
            height: o = "24",
            stroke: r = "white",
            strokeLinecap: i = "round",
            strokeLinejoin: n = "round",
            strokeWidth: s = "2",
            viewBox: d = "0 0 24 24",
            width: c = "24"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            fill: t,
            height: o,
            role: "img",
            viewBox: d,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              d: "M20 6L9 17L4 12",
              stroke: r,
              strokeWidth: s,
              strokeLinecap: i,
              strokeLinejoin: n
            })]
          })
        },
        Ae = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "24",
            width: n = "24",
            viewBox: s = "0 0 24 24"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            width: n,
            height: i,
            viewBox: s,
            fill: o,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10 9C9.44772 9 9 9.44772 9 10V20C9 20.5523 9.44772 21 10 21H20C20.5523 21 21 20.5523 21 20V10C21 9.44772 20.5523 9 20 9H10ZM7 10C7 8.34315 8.34315 7 10 7H20C21.6569 7 23 8.34315 23 10V20C23 21.6569 21.6569 23 20 23H10C8.34315 23 7 21.6569 7 20V10Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M4 3C3.45228 3 3 3.45228 3 4V14C3 14.5477 3.45228 15 4 15C4.55228 15 5 15.4477 5 16C5 16.5523 4.55228 17 4 17C2.34772 17 1 15.6523 1 14V4C1 2.34772 2.34772 1 4 1H14C15.6523 1 17 2.34772 17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.45228 14.5477 3 14 3H4Z",
              fill: o
            })]
          })
        },
        Ie = (0, d.defineMessages)({
          videoplayer_share_menu_button_label: {
            id: "videoplayer_share_menu_button_label",
            defaultMessage: "Share Menu"
          },
          videoplayer_share_link_button_label: {
            id: "videoplayer_share_link_button_label",
            defaultMessage: "Share to {name}"
          },
          videoplayer_share_menu_header: {
            id: "videoplayer_share_menu_header",
            defaultMessage: "Share"
          },
          videoplayer_share_title: {
            id: "videoplayer_share_title",
            defaultMessage: "Share"
          },
          videoplayer_share_copy: {
            id: "videoplayer_share_copy",
            defaultMessage: "Copy"
          },
          videoplayer_share_time_copied: {
            id: "videoplayer_share_time_copied",
            defaultMessage: "Copied!"
          },
          videoplayer_share_time_copy: {
            id: "videoplayer_share_time_copy",
            defaultMessage: "Start shared video at"
          },
          videoplayer_share_menu_back_button_label: {
            id: "videoplayer_share_menu_back_button_label",
            defaultMessage: "Back"
          }
        }),
        He = {
          pillBtn: "rockstargames-modules-core-videoplayerbceb13b2ef3797b4e3efc0f79b29f89c",
          selected: "rockstargames-modules-core-videoplayerf309e313c9a95ad3b5052ceab3456687",
          controlItemOptionButton: "rockstargames-modules-core-videoplayerd753d469d6d7448b4ceea512aa7dcf8e",
          hoverIcon: "rockstargames-modules-core-videoplayerde0b22dd03f4ae6bef0bab7bf1a294be",
          label: "rockstargames-modules-core-videoplayerd6e6348c96f60141f3309f61ec5207cc",
          icon: "rockstargames-modules-core-videoplayercf782216324ff406db669755eae6661e",
          labelText: "rockstargames-modules-core-videoplayerfce4f42186417704af8ff7d6715e9e28",
          header: "rockstargames-modules-core-videoplayere99439a0ddc9a9c74bfbcf4064d05f53",
          menuLabel: "rockstargames-modules-core-videoplayerd6a90df280f6a7470076fcef519bbb23",
          backButton: "rockstargames-modules-core-videoplayera717640f869ef432582844936490bb3d",
          content: "rockstargames-modules-core-videoplayere86ee61b6a8ad2275793fa3f074c7a59",
          copyLinkIcon: "rockstargames-modules-core-videoplayere88d7337763671bb2971df671332843c",
          downloadIcon: "rockstargames-modules-core-videoplayeraffbfc61ee9b623a76013933591a8280",
          embedIcon: "rockstargames-modules-core-videoplayere112b80ecb2339d97feaf283913a84e7",
          linkIcon: "rockstargames-modules-core-videoplayere13ab2f6aae0b757592d049f19ba6dd2",
          socialIcons: "rockstargames-modules-core-videoplayerab4aa16757bfa141492ef39697fd1e8d",
          buttonLink: "rockstargames-modules-core-videoplayereca9d09dffaa43b7dc01a6bd41c6ed06",
          facebook: "rockstargames-modules-core-videoplayerd1e0c47f14f563b4f0235f578ec95cd1",
          instagram: "rockstargames-modules-core-videoplayerae9af3f28e0333909a8251a81300e722",
          reddit: "rockstargames-modules-core-videoplayere534caf0948136993f40cbd89b04fb4e",
          twitter: "rockstargames-modules-core-videoplayerf93d7cf17a1a72543bf78a294cfe8b05",
          embed: "rockstargames-modules-core-videoplayerb08a9a4d7f6d6e0adf9c50a5b4a55d35",
          buttonActionIndicator: "rockstargames-modules-core-videoplayerb2225e7b1cc480bb640d464942e17b21",
          showActionIndicator: "rockstargames-modules-core-videoplayerd5e2f511e26ac6fc41a097e6b2c227ab",
          copyLink: "rockstargames-modules-core-videoplayerf48f84c7a93df158c7d5548aabb5bbb6",
          shareLink: "rockstargames-modules-core-videoplayereba89d9f3d0711dd0d8defbf07608e30",
          checkbox: "rockstargames-modules-core-videoplayere34eb9178061c596c1edf47a8814c932",
          checkmark: "rockstargames-modules-core-videoplayerd1a41b4b6bfeb984b3d6b4166e65068b",
          timestamp: "rockstargames-modules-core-videoplayerc8ee036b7e0c49079bbab355a111cd2e"
        };
      v().registerPlugin(oe.useGSAP);
      const Te = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const {
            formatMessage: t
          } = (0, d.useIntl)(), {
            state: o,
            trackGa: r,
            menuStates: i
          } = (0, m.mU)(), {
            shareData: n
          } = o, {
            isMobile: c
          } = (0, s.useWindowResize)();
          return n ? (0, y.jsx)(O, {
            tooltipLabel: t(Ie.videoplayer_share_menu_header),
            "aria-label": t(Ie.videoplayer_share_menu_button_label),
            type: "button",
            onClick: async () => {
              r({
                event: "video_share"
              }), i?.isShareMenuOpen && r({
                event: "video_share",
                text: "closed"
              }), c && navigator?.share ? await (navigator?.share?.(n)) : l()
            },
            hideTooltip: i.isShareMenuOpen,
            children: (0, y.jsxs)("span", {
              className: He.label,
              children: [(0, y.jsx)(Le, {
                className: He.icon
              }), a && (0, y.jsx)("span", {
                className: He.labelText,
                children: t(Ie.videoplayer_share_menu_header)
              })]
            })
          }) : null
        },
        Oe = e => {
          let {
            collapsed: a = !1,
            onBackButtonClick: l
          } = e;
          const [o, r] = (0, t.useState)(!1), [i, n] = (0, t.useState)(!1), s = (0, t.useRef)(null), {
            contextSafe: c
          } = (0, oe.useGSAP)(), {
            formatMessage: u
          } = (0, d.useIntl)(), {
            state: _,
            trackGa: p,
            menuStates: b
          } = (0, m.mU)(), {
            shareData: h,
            timing: f
          } = _;
          if ((0, t.useEffect)((() => {
              n(!1)
            }), [o, h?.embed]), !h) return null;
          const {
            title: g,
            url: C
          } = h, k = [{
            icon: (0, y.jsx)(Se, {}),
            name: "facebook",
            template: "https://www.facebook.com/sharer/sharer.php?u={url}"
          }, {
            icon: (0, y.jsx)(Ee, {
              fill: "black"
            }),
            name: "twitter",
            template: "https://twitter.com/intent/tweet?url={url}&text={title}&via=RockstarGames"
          }, {
            icon: (0, y.jsx)(Be, {}),
            name: "reddit",
            template: "http://www.reddit.com/submit?url={url}&title={title}&r=gaming"
          }], w = [{
            icon: (0, y.jsx)(Re, {
              className: He.embedIcon
            }),
            name: "embed",
            template: h.embed,
            actionText: u(Ie.videoplayer_share_time_copied)
          }], x = () => Math.floor(f.current), j = e => {
            let a = "?";
            return e.includes("?") && (a = "&"), `${e}${o?`${a}start=${x()}`:""}`
          }, N = (0, y.jsxs)(y.Fragment, {
            children: [u(Ie.videoplayer_share_copy), (0, y.jsx)(Ae, {
              className: He.copyLinkIcon,
              fill: "black"
            })]
          }), M = (0, y.jsxs)(y.Fragment, {
            children: [u(Ie.videoplayer_share_time_copied), (0, y.jsx)(Ve, {
              className: He.copyLinkIcon,
              stroke: "black"
            })]
          }), L = c((e => {
            e && v().fromTo(`button[name="${e}"] span`, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              onComplete: () => {
                v().to(`button[name="${e}"] span`, {
                  delay: 2,
                  autoAlpha: 0
                })
              }
            })
          }));
          return b?.isShareMenuOpen ? (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)("header", {
              className: He.header,
              children: (0, y.jsxs)("div", {
                className: He.menuLabel,
                children: [a ? (0, y.jsx)("div", {
                  role: "button",
                  className: He.backButton,
                  "aria-label": u(Ie.videoplayer_share_menu_header),
                  onClick: () => {
                    l?.()
                  },
                  onKeyUp: () => {
                    l?.()
                  },
                  tabIndex: 0,
                  children: (0, y.jsx)(re, {})
                }) : (0, y.jsx)(Le, {}), u(Ie.videoplayer_share_menu_header)]
              })
            }), (0, y.jsxs)("section", {
              className: He.content,
              children: [(0, y.jsxs)("div", {
                className: He.socialIcons,
                children: [k.map((e => {
                  let {
                    name: a,
                    icon: l,
                    template: t
                  } = e;
                  return (0, y.jsx)("a", {
                    "aria-label": u(Ie.videoplayer_share_link_button_label, {
                      name: a
                    }),
                    className: (0, E.classList)(He.buttonLink, He[a]),
                    href: t.replace("{title}", encodeURI(g)).replace("{url}", encodeURI(C)),
                    target: "_blank",
                    onClick: () => {
                      p({
                        event: "video_share",
                        text: a
                      })
                    },
                    onKeyUp: () => {
                      p({
                        event: "video_share",
                        text: a
                      })
                    },
                    rel: "noreferrer",
                    tabIndex: 0,
                    children: l
                  }, a)
                })), (0, y.jsx)("div", {
                  ref: s,
                  children: w.map((e => {
                    let {
                      name: a,
                      icon: l,
                      actionText: t
                    } = e;
                    return (0, y.jsxs)("button", {
                      className: (0, E.classList)(He.buttonLink, He[a]),
                      name: a,
                      onClick: async () => {
                        await navigator.clipboard.writeText(h.embed), L(a)
                      },
                      type: "button",
                      tabIndex: 0,
                      children: [t && (0, y.jsx)("span", {
                        className: (0, E.classList)(He.buttonActionIndicator, a),
                        children: t
                      }), l]
                    }, a)
                  }))
                })]
              }), (0, y.jsxs)("div", {
                className: He.copyLink,
                children: [(0, y.jsx)("input", {
                  value: j(h.url),
                  readOnly: !0
                }), navigator?.clipboard?.writeText && (0, y.jsx)("button", {
                  type: "button",
                  onClick: async () => {
                    await navigator.clipboard.writeText(j(h.url)), p({
                      event: "video_share",
                      text: "Share URL copied"
                    }), n(!0)
                  },
                  children: i ? M : N
                })]
              }), (0, y.jsxs)("div", {
                className: He.shareLink,
                tabIndex: 0,
                role: "checkbox",
                "aria-checked": o,
                onClick: () => r(!o),
                onKeyDown: e => {
                  " " !== e.key && "Enter" !== e.key || r(!o)
                },
                children: [(0, y.jsx)("div", {
                  className: (0, E.classList)(He.checkbox, o ? He.selected : ""),
                  children: o && (0, y.jsx)(Ve, {
                    className: He.checkmark,
                    stroke: "black"
                  })
                }), (0, y.jsxs)("label", {
                  htmlFor: "shareTime",
                  children: [(0, y.jsx)(d.FormattedMessage, {
                    ...Ie.videoplayer_share_time_copy
                  }), (0, y.jsx)("span", {
                    className: [He.timestamp, o ? He.selected : ""].join(" ").trim(),
                    children: (() => {
                      const e = x(),
                        a = e % 60;
                      return `${Math.floor(e/60).toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`
                    })()
                  })]
                })]
              })]
            })]
          }) : null
        },
        Pe = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "20",
            viewBox: n = "0 0 20 20",
            width: s = "20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            width: s,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M3.33218 4.16667C3.11117 4.16667 2.8992 4.25446 2.74292 4.41074C2.58664 4.56702 2.49885 4.77899 2.49885 5V6.66667C2.49885 7.1269 2.12575 7.5 1.66551 7.5C1.20528 7.5 0.83218 7.1269 0.83218 6.66667V5C0.83218 4.33696 1.09557 3.70107 1.56441 3.23223C2.03325 2.76339 2.66914 2.5 3.33218 2.5H16.6655C17.3286 2.5 17.9644 2.76339 18.4333 3.23223C18.9021 3.70107 19.1655 4.33696 19.1655 5V15C19.1655 15.663 18.9021 16.2989 18.4333 16.7678C17.9644 17.2366 17.3286 17.5 16.6655 17.5H11.6655C11.2053 17.5 10.8322 17.1269 10.8322 16.6667C10.8322 16.2064 11.2053 15.8333 11.6655 15.8333H16.6655C16.8865 15.8333 17.0985 15.7455 17.2548 15.5893C17.411 15.433 17.4988 15.221 17.4988 15V5C17.4988 4.77899 17.411 4.56702 17.2548 4.41074C17.0985 4.25446 16.8865 4.16667 16.6655 4.16667H3.33218Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M0.836833 9.91206C0.8854 9.45439 1.29579 9.12275 1.75345 9.17132C3.64917 9.37249 5.41861 10.2176 6.76661 11.5656C8.11462 12.9136 8.95969 14.683 9.16086 16.5787C9.20943 17.0364 8.87779 17.4468 8.42012 17.4953C7.96245 17.5439 7.55207 17.2123 7.5035 16.7546C7.34256 15.238 6.66651 13.8225 5.5881 12.7441C4.5097 11.6657 3.09415 10.9896 1.57757 10.8287C1.11991 10.7801 0.788265 10.3697 0.836833 9.91206Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M0.846267 13.1808C0.930534 12.7283 1.36564 12.4298 1.81809 12.5141C2.81075 12.699 3.72417 13.18 4.43815 13.894C5.15213 14.608 5.63322 15.5214 5.81809 16.5141C5.90236 16.9665 5.60388 17.4016 5.15143 17.4859C4.69897 17.5702 4.26387 17.2717 4.1796 16.8192C4.05635 16.1575 3.73563 15.5485 3.25964 15.0725C2.78365 14.5966 2.1747 14.2758 1.51293 14.1526C1.06048 14.0683 0.762 13.6332 0.846267 13.1808Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M0.83218 16.6667C0.83218 16.2064 1.20528 15.8333 1.66551 15.8333H1.67385C2.13408 15.8333 2.50718 16.2064 2.50718 16.6667C2.50718 17.1269 2.13408 17.5 1.67385 17.5H1.66551C1.20528 17.5 0.83218 17.1269 0.83218 16.6667Z",
              fill: o
            })]
          })
        },
        De = (0, d.defineMessages)({
          videoplayer_airplay_menu_header: {
            id: "videoplayer_airplay_menu_header",
            defaultMessage: "Download"
          },
          videoplayer_airplay_option_label: {
            id: "videoplayer_airplay_option_label",
            defaultMessage: "AirPlay"
          },
          videoplayer_airplay_not_supported_error: {
            id: "videoplayer_airplay_not_supported_error",
            defaultMessage: "AirPlay not supported in this browser."
          },
          videoplayer_airplay_button_label: {
            id: "videoplayer_airplay_button_label",
            defaultMessage: "Screen Share"
          },
          videoplayer_video_not_found_error: {
            defaultMessage: "Video element not found.",
            id: "videoplayer_video_not_found_error"
          }
        }),
        Fe = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const {
            formatMessage: t
          } = (0, d.useIntl)(), {
            state: o,
            menuStates: r
          } = (0, m.mU)(), {
            airplayAvailable: i,
            videoRef: n
          } = o, s = () => {
            if (n?.current) {
              const e = n.current;
              if (e.webkitShowPlaybackTargetPicker) e.webkitShowPlaybackTargetPicker();
              else {
                const a = t(De.videoplayer_airplay_not_supported_error);
                e.textContent = a
              }
            } else {
              if (!n?.current) return;
              const e = t(De.videoplayer_video_not_found_error);
              n.current.textContent = e
            }
            l()
          };
          return i ? (0, y.jsx)(O, {
            tooltipLabel: t(De.videoplayer_airplay_button_label),
            "aria-label": t(De.videoplayer_airplay_button_label),
            onClick: s,
            onKeyUp: s,
            hideTooltip: r.isAirPlayMenuOpen,
            children: (0, y.jsxs)("span", {
              className: "rockstargames-modules-core-videoplayerad3b9e77bd9eaffbd8d6b20d0f165593",
              children: [(0, y.jsx)(Pe, {
                className: "rockstargames-modules-core-videoplayerc97bfbfe3934ade3844f9173a1c17a66"
              }), a && (0, y.jsx)("span", {
                className: "rockstargames-modules-core-videoplayere8393732c85cc4544c7b3fa30e850c5a",
                children: t(De.videoplayer_airplay_button_label)
              })]
            })
          }) : null
        },
        ze = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "20",
            viewBox: n = "0 0 20 20",
            width: s = "20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            role: "img",
            viewBox: n,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M8.33203 10C8.33203 9.07953 9.07822 8.33333 9.9987 8.33333C10.9192 8.33333 11.6654 9.07953 11.6654 10C11.6654 10.9205 10.9192 11.6667 9.9987 11.6667C9.07822 11.6667 8.33203 10.9205 8.33203 10Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M8.33203 4.16667C8.33203 3.24619 9.07822 2.5 9.9987 2.5C10.9192 2.5 11.6654 3.24619 11.6654 4.16667C11.6654 5.08714 10.9192 5.83333 9.9987 5.83333C9.07822 5.83333 8.33203 5.08714 8.33203 4.16667Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M8.33203 15.8333C8.33203 14.9129 9.07822 14.1667 9.9987 14.1667C10.9192 14.1667 11.6654 14.9129 11.6654 15.8333C11.6654 16.7538 10.9192 17.5 9.9987 17.5C9.07822 17.5 8.33203 16.7538 8.33203 15.8333Z",
              fill: o
            })]
          })
        },
        Ze = (0, d.defineMessages)({
          videoplayer_collapsed_menu_label: {
            id: "videoplayer_collapsed_menu_label",
            defaultMessage: "Additional Settings"
          },
          videoplayer_collapsed_menu_header_label: {
            id: "videoplayer_collapsed_menu_header_label",
            defaultMessage: "More"
          }
        }),
        qe = "rockstargames-modules-core-videoplayerba05b6a2548d5b63b45ea0306fb6d180";
      p.gsap.registerPlugin(oe.useGSAP);
      const Ue = e => {
          let {
            onClick: a
          } = e;
          const {
            formatMessage: l
          } = (0, d.useIntl)(), t = () => {
            "function" == typeof a && a()
          };
          return (0, y.jsx)("button", {
            "aria-label": l(Ze.videoplayer_collapsed_menu_label),
            type: "button",
            onClick: t,
            onKeyUp: t,
            tabIndex: 0,
            className: "rockstargames-modules-core-videoplayerb6f353543f69c96fdba77ed6f0f4df5e",
            children: (0, y.jsx)(ze, {
              className: qe
            })
          })
        },
        $e = () => {
          const [e, a] = (0, t.useState)([]), [l, o] = (0, t.useState)([]), [r, i] = (0, t.useState)([]), [n, c] = (0, t.useState)(), u = (0, t.useRef)(null), {
            setBodyIsLocked: _
          } = (0, s.useBodyScrollable)("VideoPlayerMenuHandler"), {
            formatMessage: v
          } = (0, d.useIntl)(), {
            windowWidth: b
          } = (0, s.useWindowResize)(), {
            state: h,
            toggleMenu: f,
            menuStates: g
          } = (0, m.mU)(), {
            airplayAvailable: C,
            captions: k,
            playerRef: w,
            videoData: x,
            videoRef: j
          } = h, {
            video: N
          } = x, {
            contextSafe: M
          } = (0, oe.useGSAP)(), L = j?.current ? .5 * j.current.clientHeight : "200", S = ["downloads", "share", "airplay", "quality", "captions"], B = ["captions", "quality", "downloads", "share", "airplay"], E = M((e => {
            const a = .125,
              l = "none";
            g?.isAnyMenuOpen ? g[e] ? (0, m.iY)() ? p.gsap.timeline({
              overwrite: "auto"
            }).to(u?.current, {
              "--backdrop-opacity": 0,
              bottom: void 0 !== n ? -n : "-100%",
              duration: a,
              ease: l,
              onComplete: () => {
                u?.current?.close(), f(e, !1), _(!1)
              }
            }) : p.gsap.to(u?.current, {
              duration: a,
              ease: l,
              opacity: 1,
              onComplete: () => {
                u?.current?.close(), f(e, !1), _(!1)
              }
            }) : (0, m.iY)() ? p.gsap.timeline({
              onStart: () => {
                f(e, !0)
              },
              duration: a,
              ease: l,
              overwrite: "auto",
              onComplete: () => {
                c(u?.current?.clientHeight)
              }
            }).fromTo(u?.current, {
              height: void 0 !== n ? n : 0
            }, {
              height: "auto"
            }) : p.gsap.to(u?.current, {
              duration: a,
              ease: l,
              opacity: 0,
              onComplete: () => {
                u?.current?.close(), f(e, !0), p.gsap.to(u?.current, {
                  delay: .05,
                  onStart: () => {
                    u?.current?.show()
                  },
                  duration: a,
                  ease: l,
                  opacity: 1
                })
              }
            }) : (u?.current?.open && u?.current?.close(), (0, m.iY)() ? p.gsap.timeline({
              onComplete: () => {
                c(u?.current?.clientHeight)
              },
              overwrite: "auto"
            }).fromTo(u?.current, {
              "--backdrop-opacity": 0,
              bottom: "-100%"
            }, {
              onStart: () => {
                u?.current?.showModal(), f(e, !0), _(!0)
              },
              "--backdrop-opacity": .8,
              bottom: 0,
              duration: a,
              ease: l
            }) : p.gsap.fromTo(u?.current, {
              opacity: 0
            }, {
              duration: a,
              ease: l,
              opacity: 1,
              onStart: () => {
                _(!1), u?.current?.show(), f(e, !0)
              }
            }))
          }));
          return (0, t.useEffect)((() => {
            const e = [...S];
            if (!C) {
              const a = e.indexOf("airplay");
              a > -1 && e.splice(a, 1)
            }
            if (!k?.length) {
              const a = e.indexOf("captions");
              a > -1 && e.splice(a, 1)
            }
            i([...e])
          }), [N?.id, C, k?.length]), (0, t.useEffect)((() => {
            const e = p.gsap.context((() => {
              if (!w?.current) return;
              const e = w?.current?.clientWidth || 0,
                l = Math.floor(e / 2),
                t = Math.floor(l / 60) - 2,
                i = r.length - t,
                n = i > 1 ? i : 0,
                s = r.slice(0, n),
                d = r.slice(n, r.length),
                c = new Map([
                  ["airplay", {
                    button: (0, y.jsx)(Fe, {
                      collapsed: s.some((e => "airplay" === e)),
                      onClick: () => E("isAirplayMenuOpen")
                    }, "airplay_button")
                  }],
                  ["downloads", {
                    button: (0, y.jsx)(ce, {
                      collapsed: s.some((e => "downloads" === e)),
                      onClick: () => E("isDownloadMenuOpen")
                    }, "downloads_button"),
                    content: (0, y.jsx)(ue, {
                      collapsed: s.some((e => "downloads" === e)),
                      onBackButtonClick: () => E("isEllipsisMenuOpen"),
                      onOptionSelect: () => E("isDownloadMenuOpen")
                    }, "downloads_content")
                  }],
                  ["quality", {
                    button: (0, y.jsx)(ge, {
                      collapsed: s.some((e => "quality" === e)),
                      onClick: () => E("isQualityMenuOpen")
                    }, "quality_button"),
                    content: (0, y.jsx)(Ce, {
                      collapsed: s.some((e => "quality" === e)),
                      onBackButtonClick: () => E("isEllipsisMenuOpen"),
                      onOptionSelect: () => E("isQualityMenuOpen")
                    }, "quality_content")
                  }],
                  ["captions", {
                    button: (0, y.jsx)(Ne, {
                      collapsed: s.some((e => "captions" === e)),
                      onClick: () => E("isCaptionsMenuOpen")
                    }, "captions_button"),
                    content: (0, y.jsx)(Me, {
                      collapsed: s.some((e => "captions" === e)),
                      onBackButtonClick: () => E("isEllipsisMenuOpen"),
                      onOptionSelect: () => E("isCaptionsMenuOpen")
                    }, "captions_content")
                  }],
                  ["share", {
                    button: (0, y.jsx)(Te, {
                      collapsed: s.some((e => "share" === e)),
                      onClick: () => E("isShareMenuOpen")
                    }, "share_button"),
                    content: (0, y.jsx)(Oe, {
                      collapsed: s.some((e => "share" === e)),
                      onBackButtonClick: () => E("isEllipsisMenuOpen")
                    }, "share_content")
                  }]
                ]);
              if (d.length) {
                const e = [];
                d.forEach((a => {
                  if (c.has(a) && B.indexOf(a) > -1) {
                    const l = B.indexOf(a);
                    e[l] = c.get(a)
                  }
                })), o(e.filter((e => e)))
              } else o([]);
              !s.length && g?.isEllipsisMenuOpen ? (f("isEllipsisMenuOpen", !1), a([])) : a(s.map((e => c?.get(e)))?.filter((e => e)) || [])
            }));
            return () => e.revert()
          }), [r, b, w?.current, n, g?.isEllipsisMenuOpen, g?.isCaptionsMenuOpen, g?.isQualityMenuOpen, g?.isDownloadMenuOpen, g?.isShareMenuOpen, g?.isAirPlayMenuOpen]), (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsxs)("dialog", {
              "data-testid": "menu-handler-dialog",
              className: "rockstargames-modules-core-videoplayerab72872846a3159dd954410e2a5fe059",
              onClick: e => {
                if (!e.currentTarget) return;
                const a = e.currentTarget.getBoundingClientRect();
                (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && (e.preventDefault(), e.stopPropagation(), E("isAnyMenuOpen"))
              },
              ref: u,
              style: {
                "--options-height": `${L}px`
              },
              children: [l.concat(e).map((e => e.content)), e.length > 0 && g?.isEllipsisMenuOpen && (0, y.jsxs)("div", {
                children: [(0, y.jsx)("header", {
                  className: "rockstargames-modules-core-videoplayerb38b9a189ab76a47717610d6e991e711",
                  children: (0, y.jsxs)("div", {
                    className: "rockstargames-modules-core-videoplayerd0a04be97c8c5a43f7bc45f8e7454993",
                    children: [(0, y.jsx)(ze, {
                      className: qe
                    }), (0, y.jsx)("span", {
                      children: v(Ze.videoplayer_collapsed_menu_header_label)
                    })]
                  })
                }), (0, y.jsx)("div", {
                  className: "rockstargames-modules-core-videoplayerd4892dc998e2b325ccb88c2d45df1c94",
                  children: e.map((e => e.button))
                })]
              })]
            }), e.length > 0 && (0, y.jsx)(Ue, {
              onClick: () => E("isEllipsisMenuOpen")
            }), l.length > 0 && l.map((e => e.button))]
          })
        },
        Ge = () => {
          const {
            state: e
          } = (0, m.mU)(), {
            controlsActive: a,
            idle: l,
            playerEnded: t
          } = e;
          return (0, y.jsxs)("div", {
            className: (0, E.classList)("rockstargames-modules-core-videoplayercd361a90bb334d0fe6bb3dc5d8139759", !a || l ? "rockstargames-modules-core-videoplayerd5a6ff83450d0cfff8420a2eb1905be0" : ""),
            style: {
              "--controls-bg-height": t ? "3.2rem" : "7rem"
            },
            children: [(0, y.jsx)(W, {}), (0, y.jsxs)("div", {
              className: "rockstargames-modules-core-videoplayerb4819e65e459cc3b0f598a58f7fdb509",
              children: [(0, y.jsxs)("div", {
                className: "rockstargames-modules-core-videoplayereee1cdbe4686f48e035b85c870c808f3",
                children: [(0, y.jsx)(q, {}), (0, y.jsx)(te, {}), (0, y.jsx)(X, {})]
              }), (0, y.jsxs)("div", {
                className: "rockstargames-modules-core-videoplayerbb5ef554af76b06f2813a74d59508b61",
                children: [(0, y.jsx)($e, {}), (0, y.jsx)(P, {})]
              })]
            })]
          })
        },
        Ke = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "20",
            viewBox: n = "0 0 20 20",
            width: s = "20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            width: s,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
              fill: o
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
              fill: o
            })]
          })
        },
        We = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: i = "20",
            viewBox: n = "0 0 20 20",
            width: s = "20"
          } = e;
          return (0, y.jsxs)("svg", {
            className: l,
            height: i,
            width: s,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, y.jsx)("title", {
              children: a
            }), (0, y.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
              fill: o
            })]
          })
        },
        Qe = {
          pillBtn: "rockstargames-modules-core-videoplayerc456095cfe9dd2af406e820b27f38fe4",
          selected: "rockstargames-modules-core-videoplayerc0423548eb27a8ef24c807b9be8ca960",
          controlItemOptionButton: "rockstargames-modules-core-videoplayered37b25593f508e1f6d18034d392296b",
          hoverIcon: "rockstargames-modules-core-videoplayerc1bcccb4454d1f4d15114ec82d16acc9",
          playPauseOverlay: "rockstargames-modules-core-videoplayere29f86b399336a4a810c44377920b05e",
          iconWrapper: "rockstargames-modules-core-videoplayerbb5107a9b869730381c9d38f22eb65ef",
          icon: "rockstargames-modules-core-videoplayerad089a921218b6615aa1363c3468e021",
          animated: "rockstargames-modules-core-videoplayerba845cf3592b56089f92cebf79aa2566",
          show: "rockstargames-modules-core-videoplayerf864da4e82dcaa34ba4406ef7598b4e4",
          fadeInOut: "rockstargames-modules-core-videoplayerf1dbc34b9f4d51cad1b87e6b16170cd5"
        },
        Ye = () => {
          const {
            state: e
          } = (0, m.mU)(), {
            playing: a
          } = e;
          return (0, y.jsxs)("div", {
            className: Qe.playPauseOverlay,
            children: [(0, y.jsx)("div", {
              className: [Qe.iconWrapper, Qe.animated, `${a?Qe.show:""}`].join(" "),
              children: (0, y.jsx)(We, {
                className: Qe.icon,
                height: "40",
                width: "40"
              })
            }), (0, y.jsx)("div", {
              className: [Qe.iconWrapper, Qe.animated, `${a?"":Qe.show}`].join(" "),
              children: (0, y.jsx)(Ke, {
                className: Qe.icon,
                height: "40",
                width: "40"
              })
            })]
          })
        },
        Xe = {
          pillBtn: "rockstargames-modules-core-videoplayerdca57a1242d892cce3813240cad0781f",
          selected: "rockstargames-modules-core-videoplayerb9b7dbfbd386c56a95a67eb2e0597394",
          rockstar: "rockstargames-modules-core-videoplayerc82e15e2819aa4ecb85278ced5a207b3",
          customCaptions: "rockstargames-modules-core-videoplayeraacba12e534a8f838820424bc4025941",
          controlsInactive: "rockstargames-modules-core-videoplayerbb5159bb242318a902249d43629e4699"
        },
        Je = () => {
          const {
            state: e,
            setState: a,
            trackGa: l,
            toggleMenu: o
          } = (0, m.mU)(), {
            activeCaption: r,
            airplayAvailable: i,
            captions: n,
            currentTime: s,
            controlsActive: d,
            fileIndex: c,
            onVideoComplete: u,
            playerEnded: _,
            playing: p,
            savedTime: v,
            videoData: b,
            volume: h
          } = e, {
            video: f
          } = b, [g, C] = (0, t.useState)(null), k = (0, t.useRef)(null), w = (0, t.useRef)(null), [x, j] = (0, t.useState)("");
          (0, t.useEffect)((() => {
            const e = f?.files?.[c]?.src ?? null;
            e && C(e)
          }), [c, f]), (0, t.useEffect)((() => {
            a("videoRef", k)
          }), [k]), (0, t.useEffect)((() => {
            s && k.current && (k.current.currentTime = s, a("currentTime", null))
          }), [s, k?.current]), (0, t.useEffect)((() => {
            const e = k?.current;
            if (!e) return;
            const t = e => {
                a("meta", e)
              },
              o = () => {
                0 !== v && a("currentTime", v), a("playerEnded", !1)
              },
              r = () => {
                a("timing", {
                  duration: (Number.isNaN(e.duration) ? 0 : e.duration) ?? 0,
                  current: (Number.isNaN(e.currentTime) ? 0 : e.currentTime) ?? 0
                })
              },
              n = () => {
                a("volume", e.volume)
              },
              s = () => {
                a("playerEnded", !1)
              },
              d = () => {
                l({
                  event: "video_complete"
                }), a("playing", !1), u ? u?.() : a("playerEnded", !0)
              },
              c = () => {
                a("playing", !1), a("fullscreen", !1)
              },
              _ = () => {
                a("buffered", e.buffered)
              },
              p = e => {
                i || ("available" === e.availability ? a("airplayAvailable", !0) : a("airplayAvailable", !1))
              };
            return e.addEventListener("webkitplaybacktargetavailabilitychanged", p), e.addEventListener("loadeddata", o), e.addEventListener("loadedmetadata", t), e.addEventListener("timeupdate", r), e.addEventListener("volumechange", n), e.addEventListener("seeked", s), e.addEventListener("ended", d), e.addEventListener("progress", _), e.addEventListener("webkitendfullscreen", c), () => {
              e.removeEventListener("webkitplaybacktargetavailabilitychanged", p), e.removeEventListener("loadeddata", o), e.removeEventListener("loadedmetadata", t), e.removeEventListener("timeupdate", r), e.removeEventListener("volumechange", n), e.removeEventListener("seeked", s), e.removeEventListener("ended", d), e.removeEventListener("progress", _), e.removeEventListener("webkitendfullscreen", c)
            }
          }), [p, v, k?.current]), (0, t.useEffect)((() => {
            const e = k.current,
              a = w.current;
            if (!e || !a || !n || 0 === n.length) return;
            const l = Array.from(e.textTracks);
            if (0 === l.length) return;
            l.forEach((e => {
              e.mode = "hidden"
            }));
            const t = () => {
                const e = l[r]?.activeCues?.[0],
                  a = e ? e.text : "";
                j(a)
              },
              o = l[r];
            return o && o.addEventListener("cuechange", t), () => {
              o && o.removeEventListener("cuechange", t)
            }
          }), [r, n]);
          const N = () => {
            a("isVideoClicked", !0), o("isAnyMenuOpen", !1), _ || ((0, m.iY)() ? (a("controlsActive", !d), a("playing", !0)) : (a("controlsActive", p), a("playing", !p)))
          };
          return (0, t.useEffect)((() => {
            const e = e => {
              const l = k?.current;
              if (!l) return;
              const t = {
                space: "Space",
                arrowRight: "ArrowRight",
                arrowLeft: "ArrowLeft"
              };
              if (Object.values(t).includes(e.code) && (e.preventDefault(), l && !_)) switch (e.code) {
                case t.space:
                  _ || J(document.activeElement) || a("playing", !p);
                  break;
                case t.arrowRight:
                  l.currentTime += 5;
                  break;
                case t.arrowLeft:
                  l.currentTime -= 5
              }
            };
            return document.addEventListener("keydown", e, !1), () => {
              document.removeEventListener("keydown", e, !1)
            }
          }), [k?.current, p, _]), (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsxs)("video", {
              ref: k,
              autoPlay: !0,
              className: Xe.rockstar,
              src: g,
              muted: 0 === h,
              playsInline: !0,
              "x-webkit-airplay": "allow",
              onPlay: () => {
                a("playing", !0)
              },
              onPause: () => {
                a("playing", !1)
              },
              onTouchEnd: () => {
                N()
              },
              onClick: e => {
                e.preventDefault(), (0, m.iY)() || N()
              },
              crossOrigin: "anonymous",
              children: [(0, y.jsx)("source", {
                src: g ?? void 0,
                type: "video/mp4"
              }), n && n.map((e => {
                let {
                  isDefault: a,
                  label: l,
                  kind: t,
                  src: o,
                  srclang: r
                } = e;
                return (0, y.jsx)("track", {
                  label: l,
                  kind: t,
                  src: o,
                  srcLang: r,
                  default: a
                }, l)
              }))]
            }), !!r && (0, y.jsx)("div", {
              ref: w,
              className: [Xe.customCaptions, d ? "" : Xe.controlsInactive].join(" "),
              children: (0, y.jsx)("div", {
                dangerouslySetInnerHTML: {
                  __html: x
                }
              })
            })]
          })
        },
        ea = {
          videoplayer: "rockstargames-modules-core-videoplayerb54eb5c2c7ea7b81241306b4f3d20920",
          videoplayerEnded: "rockstargames-modules-core-videoplayere2454977317c9dec0d51bc410b1c36a5",
          videoplayerNotRunning: "rockstargames-modules-core-videoplayerf2275b819de42bc9fac209514675be5b",
          controls: "rockstargames-modules-core-videoplayere0bab9ff684f07ed51a3a972b5a1ad40"
        },
        aa = () => {
          const {
            state: e
          } = (0, m.mU)(), {
            playerEnded: a,
            videoChangeCallback: l,
            videoData: t
          } = e, {
            related: o
          } = t;
          return a && o?.results.length ? (0, y.jsx)("div", {
            className: "rockstargames-modules-core-videoplayerb82958baf3335bb5565f23f291ba3089",
            children: (0, y.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerc380f9220ed69f0bd8627a311e8616f9",
              "aria-live": "polite",
              children: o.results.map((e => {
                return (0, y.jsx)("button", {
                  style: {
                    background: `url(${a=e.screencap||"",`${a}?im=Resize=400`}) no-repeat center/contain`
                  },
                  onClick: () => l(e.id),
                  className: "rockstargames-modules-core-videoplayerf4dbf27245debf9a7de5113288a7d9b7",
                  role: "link",
                  tabIndex: 0,
                  onKeyDown: a => ((e, a) => {
                    let {
                      code: t
                    } = e;
                    "Enter" === t && l(a)
                  })(a, e.id),
                  type: "button",
                  children: (0, y.jsx)("div", {
                    className: "rockstargames-modules-core-videoplayeradd675dafa009ae7b924e8729d8cf5ad",
                    children: e.title
                  })
                }, e.id);
                var a
              }))
            })
          }) : null
        },
        la = (0, s.withLocale)((() => {
          const {
            state: e,
            setState: a,
            menuStates: l,
            toggleMenu: o,
            trackGa: r
          } = (0, m.mU)(), {
            autoplayUnmuteCheck: i,
            context: n,
            controlsActive: s,
            currentTime: d,
            fullscreen: c,
            meta: u,
            playerEnded: _,
            playing: p,
            running: v,
            videoRef: b,
            volume: h
          } = e, [f, g] = (0, t.useState)(!1), C = (0, t.useRef)(), k = (0, t.useRef)(), w = () => document?.fullscreenEnabled ?? !1, x = () => "string" == typeof document.fullscreenElement?.nodeName, j = () => {
            C.current && clearInterval(C?.current)
          }, M = () => {
            j(), a("idle", !1), C.current = setTimeout((() => {
              f || a("idle", !0)
            }), 3e3)
          };
          return (0, t.useEffect)((() => {
            M()
          }), [f]), (0, t.useEffect)((() => {
            g(_ || l?.isAnyMenuOpen || !p)
          }), [_, l?.isAnyMenuOpen, p]), (0, t.useEffect)((() => {
            a("playerRef", k)
          }), [k]), (0, t.useEffect)((() => {
            if (!k?.current || !b?.current) return;
            const e = b.current,
              a = k.current,
              {
                webkitDisplayingFullscreen: l,
                webkitSupportsFullscreen: t
              } = e,
              o = () => {
                c ? a.requestFullscreen() : document.exitFullscreen()
              };
            c ? w() && !x() ? o() : t && !l && b.current.webkitEnterFullscreen() : w() && x() ? o() : t && l && b.current.webkitExitFullscreen()
          }), [c, k, b]), (0, t.useEffect)((() => {
            const e = () => {
              M(), a("fullscreen", x()), r({
                event: "video_fullscreen",
                text: x() ? "entered" : "exited"
              })
            };
            return document.addEventListener("fullscreenchange", e), () => {
              document.removeEventListener("fullscreenchange", e)
            }
          }), [p, _]), (0, t.useEffect)((() => {
            (async () => {
              if (b?.current && u)
                if (p) try {
                  await b.current.play()
                } catch (e) {
                  a("volume", 0), a("autoplayUnmuteCheck", !0)
                } else b.current.pause()
            })()
          }), [i, u, p, b?.current]), (0, t.useEffect)((() => {
            d && b?.current && (b.current.currentTime = d)
          }), [d, b?.current]), (0, t.useEffect)((() => {
            b?.current && (b.current.volume = h)
          }), [h, b]), (0, t.useEffect)((() => {
            s || a("isAnyMenuOpen", !1)
          }), [s]), (0, t.useEffect)((() => {
            _ && (a("fullscreen", !1), a("isAnyMenuOpen", !1), a("controlsActive", !0), a("progressBarState", {}))
          }), [_]), (0, t.useEffect)((() => () => {
            j()
          }), []), (0, t.useEffect)((() => {
            const e = e => {
              k.current && !k.current.contains(e.target) && o("isAnyMenuOpen", !1)
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
          }), []), (0, y.jsxs)("div", {
            role: "presentation",
            ref: k,
            "data-context": n,
            className: [ea.videoplayer, _ ? ea.videoplayerEnded : "", v ? "" : ea.videoplayerNotRunning].join(" "),
            onMouseLeave: () => {
              l?.isAnyMenuOpen || a("idle", !0)
            },
            onMouseEnter: M,
            onMouseMove: M,
            onTouchEnd: j,
            onTouchStart: j,
            children: [(0, y.jsx)(Ye, {}), (0, y.jsx)(N, {}), (0, y.jsx)(Je, {}), (0, y.jsx)(Ge, {}), _ && (0, y.jsx)(aa, {})]
          })
        })),
        ta = e => {
          let {
            id: a
          } = e;
          return (0, y.jsx)("iframe", {
            className: "rockstargames-modules-core-videoplayerc26b065b66418ffbed0970ee378fb33c",
            src: `https://www.youtube.com/embed/${a}?autoplay=1`,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            title: "Rockstar Games on YouTube"
          })
        },
        oa = new Map([
          ["en", "English"],
          ["de", "Deutsch"],
          ["fr", "Français"],
          ["it", "Italiano"],
          ["jp", "日本語"],
          ["fr", "Français"],
          ["it", "Italiano"],
          ["jp", "日本語"],
          ["ru", "Pусский"],
          ["es", "Español (España)"],
          ["mx", "Español (México)"],
          ["br", "Português"],
          ["kr", "한국어"],
          ["zh", "中文（简体）"],
          ["tw", "中文（繁體）"],
          ["pl", "Polski"]
        ]),
        ra = {
          ...c.intlMessages,
          ...u
        },
        ia = document.getElementsByTagName("html")[0].lang ?? "en_us",
        na = e => {
          let {
            aspectRatio: a = 16 / 9,
            autoplay: l = !1,
            context: i = "site",
            id: s,
            hero: c = !1,
            resolution: u = "_auto",
            wrapper: p = !0,
            videoChangeCallback: v,
            onVideoComplete: b,
            locale: h = ia,
            titleCrop: f
          } = e;
          const {
            state: g,
            setState: C,
            trackGa: k
          } = (0, m.mU)(), [w] = (0, o.useSearchParams)(), x = (0, m._6)({
            id: s.toString(),
            locale: h
          }), {
            autoplay: j,
            brand: N,
            fileIndex: M,
            running: E,
            videoData: R
          } = g, {
            loading: V,
            video: A
          } = R, I = (0, n.useAgegated)(), H = (0, o.useNavigate)(), {
            formatMessage: T
          } = (0, d.useIntl)(), {
            currentSite: O
          } = (0, r.c)();
          return (0, t.useEffect)((() => {
            C("onVideoComplete", b)
          }), [b]), (0, t.useEffect)((() => {
            if (!A) return;
            const {
              files: e,
              tracks: a
            } = A, l = e.findIndex((e => e.resolution === u)), t = e.findIndex((e => e.default));
            C("fileIndex", -1 !== l ? l : -1 !== t ? t : 0), C("captions", function(e, a) {
              if (!e || !Array.isArray(e) || !e.length) return [];
              const l = [],
                t = e => oa.has(e) ? oa.get(e) : e.toLocaleUpperCase();
              e.forEach((e => {
                let {
                  lang: a,
                  captions: o,
                  subtitles: r
                } = e;
                r && "0" !== r && l.push({
                  isDefault: !1,
                  kind: "subtitles",
                  label: t(a),
                  srclang: a,
                  src: r
                }), o && "0" !== o && l.push({
                  isDefault: !1,
                  kind: "captions",
                  label: t(a),
                  srclang: a,
                  src: o
                })
              }));
              const o = l.sort(((e, a) => e.label?.localeCompare(a.label)));
              return o.unshift({
                isDefault: !0,
                kind: "captions",
                label: a ?? "Off",
                srclang: "",
                src: ""
              }), [...o]
            }(a, T(_.videoplayer.videoplayer_captions_menu_off_label))), C("accentColor", (0, m.kZ)(A?.game?.title_slug ?? ""))
          }), [u, A]), (0, t.useEffect)((() => {
            if (!A) return;
            let e, a, l = h.split("_")[1] ?? "";
            "hans" === l && (l = "zh");
            const t = "en_us" !== h && l ? `${l}/` : "";
            "clr" === N ? (e = "https://circolocorecords.com", a = e) : (a = `https://${O?.subDomain??"www"}.rockstargames.com`, e = `${a}/${t}videos/${A.id}?resolution=${A.files[M]?.resolution}&embed`);
            const o = `${A.game.title}: ${A.title}`,
              r = {
                allow: "autoplay; fullscreen; picture-in-picture; clipboard-read; clipboard-write;",
                src: `https://${O?.subDomain}.rockstargames.com/videoplayer/?id=${A.id}&locale=${h}&resolution=${A.files[M]?.resolution}&embed`,
                style: "aspect-ratio: 16 / 9; width: 100%; border: none;",
                title: `Rockstar Games Video: ${o}`
              };
            let i = "<iframe";
            Object.keys(r).map((e => {
              i += ` ${e}="${r[e]}"`
            })), i += "></iframe>";
            const n = {
              title: o,
              text: A.description,
              url: e,
              embed: i,
              brandUrl: a
            };
            C("shareData", n)
          }), [N, M, A]), (0, t.useEffect)((() => {
            C("videoChangeCallback", v || (e => {
              H(`../videos/${e}`)
            }))
          }), [v]), (0, t.useEffect)((() => {
            const e = w.get("start") ?? 0;
            C("currentTime", Number(e))
          }), [s, w.get("start")]), (0, t.useEffect)((() => {
            E && C("autoplay", !0)
          }), [E]), (0, t.useEffect)((() => {
            const {
              video: e
            } = x;
            923 === e?.game?.id && C("brand", "clr");
            const a = l || j || !1;
            C("controlsActive", !0), C("fullscreen", !1), C("idle", !1), C("meta", null), C("playerEnded", !1), C("playing", a), C("progressBarState", {}), C("isAnyMenuOpen", !1), C("shareOpen", !1), C("videoId", s), a && (C("autoplay", !0), C("running", !0)), C("videoData", x)
          }), [JSON.stringify(x)]), (0, t.useEffect)((() => {
            j && !V && A && A.id === s && k({
              event: "video_play_auto"
            })
          }), [j, V, A, s]), (0, t.useEffect)((() => {
            C("aspectRatio", a)
          }), [a]), (0, t.useEffect)((() => {
            C("context", i)
          }), [i]), (0, t.useEffect)((() => {
            C("resolution", u)
          }), [u]), !A || V ? (0, y.jsx)(B.c, {
            hero: c,
            wrapper: p,
            titleCrop: f,
            children: (0, y.jsx)(S.c, {})
          }) : ["gtaosession", "gtaostream", "community"].includes(A.groupType) || A.youtubeOnly ? A.agegated ? I((0, y.jsx)(ta, {
            id: A.youtubeId
          })) : (0, y.jsx)(ta, {
            id: A.youtubeId
          }) : j || E ? A.agegated ? (0, y.jsx)(B.c, {
            hero: c,
            wrapper: p,
            titleCrop: f,
            children: I((0, y.jsx)(la, {}), {
              bgImg: A.screencap
            })
          }) : (0, y.jsx)(B.c, {
            hero: c,
            wrapper: p,
            titleCrop: f,
            children: (0, y.jsx)(la, {})
          }) : (0, y.jsx)(B.c, {
            hero: c,
            wrapper: p,
            titleCrop: f,
            children: (0, y.jsx)(L, {})
          })
        },
        sa = (0, y.jsx)(d.FormattedMessage, {
          ..._.videoplayer.videoplayer_error
        }),
        da = (0, d.withIntl)((0, s.withGtmTracking)((0, i.withSimpleErrorBoundary)((e => (0, y.jsx)(m.Yv, {
          children: (0, y.jsx)(na, {
            ...e
          })
        })), sa)), ra)
    },
    84424: (e, a, l) => {
      "use strict";
      l.d(a, {
        c: () => o
      });
      var t = l(95240);
      const o = e => {
        let {
          alt: a = "",
          className: l = "",
          clipRule: o = "evenodd",
          fill: r = "white",
          fillRule: i = "evenodd",
          height: n = "20",
          viewBox: s = "0 0 20 20",
          width: d = "20"
        } = e;
        return (0, t.jsxs)("svg", {
          className: l,
          height: n,
          width: d,
          viewBox: s,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, t.jsx)("title", {
            children: a
          }), (0, t.jsx)("path", {
            fillRule: i,
            clipRule: o,
            d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
            fill: r
          })]
        })
      }
    },
    43264: (e, a, l) => {
      "use strict";
      l.d(a, {
        Yv: () => v,
        kZ: () => g,
        Le: () => C,
        iY: () => f,
        cJ: () => t.videoplayer,
        _6: () => h,
        mU: () => m
      });
      var t = l(55120);
      const o = new Map([
        ["aa", "Afar"],
        ["ab", "Abkhazian"],
        ["ae", "Avestan"],
        ["af", "Afrikaans"],
        ["ak", "Akan"],
        ["am", "Amharic"],
        ["an", "Aragonese"],
        ["ar", "Arabic"],
        ["as", "Assamese"],
        ["av", "Avaric"],
        ["ay", "Aymara"],
        ["az", "Azerbaijani"],
        ["ba", "Bashkir"],
        ["be", "Belarusian"],
        ["bg", "Bulgarian"],
        ["bh", "Bihari languages"],
        ["bi", "Bislama"],
        ["bm", "Bambara"],
        ["bn", "Bengali"],
        ["bo", "Tibetan"],
        ["br", "Breton"],
        ["bs", "Bosnian"],
        ["ca", "Catalan; Valencian"],
        ["ce", "Chechen"],
        ["ch", "Chamorro"],
        ["co", "Corsican"],
        ["cr", "Cree"],
        ["cs", "Czech"],
        ["cu", "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic"],
        ["cv", "Chuvash"],
        ["cy", "Welsh"],
        ["da", "Danish"],
        ["de", "German"],
        ["de-de", "German (Germany)"],
        ["de-at", "German (Austria)"],
        ["de-ch", "German (Switzerland)"],
        ["de-li", "German (Liechtenstein)"],
        ["dv", "Divehi; Dhivehi; Maldivian"],
        ["dz", "Dzongkha"],
        ["ee", "Ewe"],
        ["el", "Greek, Modern (1453-)"],
        ["en", "English"],
        ["en-us", "English (United States)"],
        ["en-ca", "English (Canada)"],
        ["en-gb", "English (United Kingdom)"],
        ["en-au", "English (Australia)"],
        ["en-nz", "English (New Zealand)"],
        ["eo", "Esperanto"],
        ["es", "Spanish; Castilian"],
        ["es-es", "Spanish (Spain)"],
        ["es-mx", "Spanish (Mexico)"],
        ["es-ar", "Spanish (Argentina)"],
        ["es-cl", "Spanish (Chile)"],
        ["et", "Estonian"],
        ["eu", "Basque"],
        ["fa", "Persian"],
        ["ff", "Fulah"],
        ["fi", "Finnish"],
        ["fj", "Fijian"],
        ["fo", "Faroese"],
        ["fr", "French"],
        ["fr-fr", "French (France)"],
        ["fr-ca", "French (Canada)"],
        ["fr-ch", "French (Switzerland)"],
        ["fr-be", "French (Belgium)"],
        ["fr-lu", "French (Luxembourg)"],
        ["fr-mc", "French (Monaco)"],
        ["fy", "Western Frisian"],
        ["ga", "Irish"],
        ["gd", "Gaelic; Scottish Gaelic"],
        ["gl", "Galician"],
        ["gn", "Guarani"],
        ["gu", "Gujarati"],
        ["gv", "Manx"],
        ["ha", "Hausa"],
        ["he", "Hebrew"],
        ["hi", "Hindi"],
        ["ho", "Hiri Motu"],
        ["hr", "Croatian"],
        ["ht", "Haitian; Haitian Creole"],
        ["hu", "Hungarian"],
        ["hy", "Armenian"],
        ["hz", "Herero"],
        ["ia", "Interlingua (International Auxiliary Language Association)"],
        ["id", "Indonesian"],
        ["ie", "Interlingue; Occidental"],
        ["ig", "Igbo"],
        ["ii", "Sichuan Yi; Nuosu"],
        ["ik", "Inupiaq"],
        ["io", "Ido"],
        ["is", "Icelandic"],
        ["it", "Italian"],
        ["it-it", "Italian (Italy)"],
        ["it-ch", "Italian (Switzerland)"],
        ["iu", "Inuktitut"],
        ["ja", "Japanese"],
        ["jv", "Javanese"],
        ["ka", "Georgian"],
        ["kg", "Kongo"],
        ["ki", "Kikuyu; Gikuyu"],
        ["kj", "Kuanyama; Kwanyama"],
        ["kk", "Kazakh"],
        ["kl", "Kalaallisut; Greenlandic"],
        ["km", "Central Khmer"],
        ["kn", "Kannada"],
        ["ko", "Korean"],
        ["kr", "Kanuri"],
        ["ks", "Kashmiri"],
        ["ku", "Kurdish"],
        ["kv", "Komi"],
        ["kw", "Cornish"],
        ["ky", "Kirghiz; Kyrgyz"],
        ["la", "Latin"],
        ["lb", "Luxembourgish; Letzeburgesch"],
        ["lg", "Ganda"],
        ["li", "Limburgan; Limburger; Limburgish"],
        ["ln", "Lingala"],
        ["lo", "Lao"],
        ["lt", "Lithuanian"],
        ["lu", "Luba-Katanga"],
        ["lv", "Latvian"],
        ["mg", "Malagasy"],
        ["mh", "Marshallese"],
        ["mi", "Maori"],
        ["mk", "Macedonian"],
        ["ml", "Malayalam"],
        ["mn", "Mongolian"],
        ["mr", "Marathi"],
        ["ms", "Malay"],
        ["mt", "Maltese"],
        ["my", "Burmese"],
        ["na", "Nauru"],
        ["nb", "Bokmål, Norwegian; Norwegian Bokmål"],
        ["nd", "Ndebele, North; North Ndebele"],
        ["ne", "Nepali"],
        ["ng", "Ndonga"],
        ["nl", "Dutch; Flemish"],
        ["nl-nl", "Dutch (Netherlands)"],
        ["nl-be", "Dutch (Belgium)"],
        ["nn", "Norwegian Nynorsk; Nynorsk, Norwegian"],
        ["no", "Norwegian"],
        ["nr", "Ndebele, South; South Ndebele"],
        ["nv", "Navajo; Navaho"],
        ["ny", "Chichewa; Chewa; Nyanja"],
        ["oc", "Occitan (post 1500)"],
        ["oj", "Ojibwa"],
        ["om", "Oromo"],
        ["or", "Oriya"],
        ["os", "Ossetian; Ossetic"],
        ["pa", "Panjabi; Punjabi"],
        ["pi", "Pali"],
        ["pl", "Polish"],
        ["ps", "Pashto; Pushto"],
        ["pt", "Portuguese"],
        ["pt-br", "Portuguese (Brazil)"],
        ["pt-pt", "Portuguese (Portugal)"],
        ["qu", "Quechua"],
        ["rm", "Romansh"],
        ["rn", "Rundi"],
        ["ro", "Romanian; Moldavian; Moldovan"],
        ["ru", "Russian"],
        ["rw", "Kinyarwanda"],
        ["sa", "Sanskrit"],
        ["sc", "Sardinian"],
        ["sd", "Sindhi"],
        ["se", "Northern Sami"],
        ["sg", "Sango"],
        ["si", "Sinhala; Sinhalese"],
        ["sk", "Slovak"],
        ["sl", "Slovenian"],
        ["sm", "Samoan"],
        ["sn", "Shona"],
        ["so", "Somali"],
        ["sq", "Albanian"],
        ["sr", "Serbian"],
        ["ss", "Swati"],
        ["st", "Sotho, Southern"],
        ["su", "Sundanese"],
        ["sv", "Swedish"],
        ["sv-se", "Swedish (Sweden)"],
        ["sv-fi", "Swedish (Finland)"],
        ["sw", "Swahili"],
        ["ta", "Tamil"],
        ["te", "Telugu"],
        ["tg", "Tajik"],
        ["th", "Thai"],
        ["ti", "Tigrinya"],
        ["tk", "Turkmen"],
        ["tl", "Tagalog"],
        ["tn", "Tswana"],
        ["to", "Tonga (Tonga Islands)"],
        ["tr", "Turkish"],
        ["ts", "Tsonga"],
        ["tt", "Tatar"],
        ["tw", "Twi"],
        ["ty", "Tahitian"],
        ["ug", "Uighur; Uyghur"],
        ["uk", "Ukrainian"],
        ["ur", "Urdu"],
        ["uz", "Uzbek"],
        ["ve", "Venda"],
        ["vi", "Vietnamese"],
        ["vo", "Volapük"],
        ["wa", "Walloon"],
        ["wo", "Wolof"],
        ["xh", "Xhosa"],
        ["yi", "Yiddish"],
        ["yo", "Yoruba"],
        ["za", "Zhuang; Chuang"],
        ["zh", "Chinese"],
        ["zh-cn", "Chinese (China)"],
        ["zh-tw", "Chinese (Taiwan)"],
        ["zh-hk", "Chinese (Hong Kong)"],
        ["zh-mo", "Chinese (Macao)"],
        ["zh-sg", "Chinese (Singapore)"],
        ["zh-hans", "Chinese (Simplified)"],
        ["zh-hant", "Chinese (Traditional)"],
        ["zu", "Zulu"]
      ]);
      var r = l(51664),
        i = l(68e3),
        n = l(33052),
        s = l(42836),
        d = l(45792),
        c = l(95240);
      const u = {
          activeCaption: 0,
          airplayAvailable: !1,
          aspectRatio: 16 / 9,
          autoplay: !1,
          autoplayUnmuteCheck: !1,
          brand: "rockstar",
          captions: [],
          context: "",
          controlsActive: !0,
          currentTime: 0,
          fileIndex: 0,
          fullscreen: !1,
          idle: !1,
          playerEnded: !1,
          playing: !1,
          progressBarState: {},
          resolution: "_auto",
          running: !1,
          savedTime: 0,
          showTitle: !0,
          startTime: 0,
          timing: {
            current: 0,
            duration: 0
          },
          videoData: {
            loading: !0
          },
          volume: 1
        },
        _ = {},
        p = (0, r.createContext)({}),
        v = e => {
          let {
            children: a
          } = e;
          const [l] = (0, r.useState)((0, i.v4)()), t = (e => {
            let {
              id: a
            } = e;
            const l = _[a] ?? (_[a] = (0, n.makeVar)(u)),
              t = (e, a) => l({
                ...l(),
                [e]: a
              }),
              o = (0, n.useReactiveVar)(l),
              i = (0, s.useGtmTrack)(),
              c = (0, d.useLocale)(),
              {
                videoData: p
              } = o,
              [v, m] = (0, r.useState)({
                isCaptionsMenuOpen: !1,
                isPlayOnTVMenuOpen: !1,
                isDownloadMenuOpen: !1,
                isQualityMenuOpen: !1,
                isSettingsMenuOpen: !1,
                isShareMenuOpen: !1,
                isEllipsisMenuOpen: !1,
                isAirPlayMenuOpen: !1,
                isAnyMenuOpen: !1
              }),
              b = (0, r.useCallback)((e => {
                const {
                  video: a
                } = p;
                if (!a || !i) return;
                const {
                  id: l,
                  title: t
                } = a;
                i.track({
                  video_id: l,
                  video_title: t,
                  video_type: p?.video?.groupType,
                  video_language: c,
                  element_placement: "video player",
                  ...e
                })
              }), [c, p?.video?.id]);
            return {
              state: o,
              setState: t,
              menuStates: v,
              toggleMenu: (e, a) => {
                const l = {
                  ...v
                };
                for (const e in l) Object.hasOwn(l, e) && (l[e] = !1);
                if (e && Object.hasOwn(l, e)) {
                  const t = void 0 === a ? !v[e] : a;
                  t && (l[e] = t), l.isAnyMenuOpen = t
                }
                m(l)
              },
              replay: () => {
                t("playerEnded", !1), t("playing", !0), t("currentTime", 0), t("timing", {
                  current: 0,
                  duration: 0
                })
              },
              trackGa: b,
              trackGaQuartile: (e, a, l) => {
                const {
                  video: t
                } = p;
                if (!t || !i) return;
                const {
                  id: o,
                  title: r
                } = t;
                i.track({
                  event: e,
                  video_id: o,
                  video_title: r,
                  video_type: p?.video?.groupType,
                  video_language: c,
                  video_length: a,
                  video_percentage: Math.floor(l ?? 0),
                  element_placement: "video player"
                })
              }
            }
          })({
            id: l
          });
          return a ? (0, c.jsx)(p.Provider, {
            value: t,
            children: a
          }) : null
        },
        m = () => (0, r.useContext)(p);
      var b = l(12836);
      const y = "undefined" != typeof VideoDataWithGames2Connection ? VideoDataWithGames2Connection : b.VideoData,
        h = e => {
          let {
            id: a,
            locale: l
          } = e;
          const [t, o] = (0, r.useState)(), [i, s] = (0, r.useState)(), [d, c] = (0, r.useState)(), {
            data: u,
            loading: _
          } = (0, n.useQuery)(y, {
            variables: t,
            skip: !t || !Object.entries(t).length
          });
          return (0, r.useEffect)((() => {
            if (!a) return;
            const e = {
              id: a
            };
            l && (e.locale = l), o(e)
          }), [a, l]), (0, r.useEffect)((() => {
            u?.video && s(u.video), u?.related && c(u.related)
          }), [u]), {
            loading: _,
            related: d,
            video: i
          }
        },
        f = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
        g = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : "#FCAF17",
        C = e => {
          const a = e.toLowerCase(),
            l = a.split("-")[0];
          return o.has(a) ? o.get(a) : o.has(l) ? o.get(l) : e
        }
    },
    12836: e => {
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
                  alias: {
                    kind: "Name",
                    value: "createdFormatted"
                  },
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
                  alias: {
                    kind: "Name",
                    value: "youtubeId"
                  },
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
                      alias: {
                        kind: "Name",
                        value: "createdFormatted"
                      },
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
          end: 1183
        }
      };

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      a.loc.source = {
        body: 'query Video(\n    $id: Int!\n    $locale: String!\n    $withTranslations: Boolean! = false\n    $cache: Boolean = true\n) {\n    video(id: $id, locale: $locale) {\n        id\n        title\n        screencap\n        art_layers {\n            src\n            animation\n        }\n        game {\n            id\n            title\n            title_slug\n        }\n        createdFormatted: created_formatted\n        created\n        description\n        agegated\n        group_type\n        youtubeId: youtube_id\n        youtubeOnly\n        files: files_processed {\n            resolution\n            sprite\n            src\n            default\n        }\n    }\n    related: videos(relatedToId: $id, locale: $locale, limit: 50) {\n        results {\n            id\n            title\n            screencap\n            createdFormatted: created_formatted\n            created\n            art_layers {\n                src\n                animation\n            }\n            game {\n                id\n                title\n                title_slug\n            }\n        }\n    }\n    translations(locale: $locale, config: "default")\n        @include(if: $withTranslations) {\n        key\n        value\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function o(e, a) {
        for (var l = 0; l < e.definitions.length; l++) {
          var t = e.definitions[l];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.Video = function(e, a) {
        var l = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (l.loc = e.loc);
        var r = t[a] || new Set,
          i = new Set,
          n = new Set;
        for (r.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var s = n;
          n = new Set, s.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = o(e, a);
          t && l.definitions.push(t)
        })), l
      }(a, "Video")
    },
    70664: e => {
      "use strict";
      e.exports = JSON.parse('{"us":{"videoplayer_airplay_button_label":"Screen Share","videoplayer_airplay_menu_header":"Download","videoplayer_airplay_not_supported_error":"AirPlay not supported in this browser.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Video element not found.","videoplayer_captions_button_label":"Captions","videoplayer_captions_menu_back_button_label":"Back","videoplayer_captions_menu_header":"Subtitles / CC","videoplayer_captions_menu_off_label":"Off","videoplayer_captions_menu_subtitles_label":"(Subtitles)","videoplayer_downloads_button_label":"Download Options Menu","videoplayer_downloads_menu_back_button_label":"Back","videoplayer_downloads_menu_header":"Download","videoplayer_quality_menu_back_button_label":"Back","videoplayer_quality_settings_menu_header":"Settings","videoplayer_share_link_button_label":"Share to {name}","videoplayer_share_menu_back_button_label":"Back","videoplayer_share_menu_button_label":"Share Menu","videoplayer_share_menu_header":"Share","videoplayer_share_time_copied":"Copied!","videoplayer_share_time_copy":"Start shared video at","videoplayer_pause_button_label":"Pause button","videoplayer_play_button_label":"Play button","videoplayer_fullscreen_button_label":"Toggle video in fullscreen mode","videoplayer_fullscreen_hover_label":"Fullscreen","videoplayer_windowed_hover_label":"Windowed","videoplayer_unmute_click":"Click anywhere to unmute.","videoplayer_unmute_tap":"Tap anywhere to unmute.","videoplayer_pause_hover_label":"Pause","videoplayer_play_hover_label":"Play","videoplayer_play_pause_button_label":"Play/Pause Toggle","videoplayer_replay_hover_label":"Replay","videoplayer_progress_bar_label":"Progress Bar","videoplayer_quality_settings_button_label":"Quality Settings Menu","videoplayer_share_copy":"Copy","videoplayer_share_title":"Share","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Mute/Unmute Toggle"},"de":{"videoplayer_airplay_button_label":"Bildschirm teilen","videoplayer_airplay_menu_header":"Herunterladen","videoplayer_airplay_not_supported_error":"AirPlay wird von diesem Browser nicht unterstützt.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Das Videoelement wurde nicht gefunden.","videoplayer_captions_button_label":"Untertitel","videoplayer_captions_menu_back_button_label":"Zurück","videoplayer_captions_menu_header":"Untertitel/CC","videoplayer_captions_menu_off_label":"Aus","videoplayer_captions_menu_subtitles_label":"(Untertitel)","videoplayer_downloads_button_label":"Download-Optionen","videoplayer_downloads_menu_back_button_label":"Zurück","videoplayer_downloads_menu_header":"Herunterladen","videoplayer_quality_menu_back_button_label":"Zurück","videoplayer_quality_settings_menu_header":"Einstellungen","videoplayer_share_link_button_label":"Mit {name} teilen","videoplayer_share_menu_back_button_label":"Zurück","videoplayer_share_menu_button_label":"Teilenmenü","videoplayer_share_menu_header":"Teilen","videoplayer_share_time_copied":"Kopiert!","videoplayer_share_time_copy":"Beginne geteiltes Video bei","videoplayer_pause_button_label":"Pausetaste","videoplayer_play_button_label":"Play-Taste","videoplayer_fullscreen_button_label":"Video im Vollbildmodus abspielen","videoplayer_fullscreen_hover_label":"Vollbild","videoplayer_windowed_hover_label":"Fenstermodus","videoplayer_unmute_click":"Klicken, um die Stummschaltung aufzuheben.","videoplayer_unmute_tap":"Tippen, um die Stummschaltung aufzuheben.","videoplayer_pause_hover_label":"Pause","videoplayer_play_hover_label":"Abspielen","videoplayer_play_pause_button_label":"Abspielen/Pause","videoplayer_replay_hover_label":"Wiederholen","videoplayer_progress_bar_label":"Fortschrittsanzeige","videoplayer_quality_settings_button_label":"Qualitätseinstellungsmenü","videoplayer_share_copy":"Kopieren","videoplayer_share_title":"Teilen","videoplayer_volume_slider_label":"Lautstärke","videoplayer_volume_toggle_button_label":"Stummschaltung an/aus"},"es":{"videoplayer_airplay_button_label":"Compartir pantalla","videoplayer_airplay_menu_header":"Descargar","videoplayer_airplay_not_supported_error":"Este navegador no es compatible con AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Elemento de vídeo no encontrado.","videoplayer_captions_button_label":"Subtítulos descriptivos","videoplayer_captions_menu_back_button_label":"Volver","videoplayer_captions_menu_header":"Subtítulos/Subtítulos cerrados","videoplayer_captions_menu_off_label":"No","videoplayer_captions_menu_subtitles_label":"(Subtítulos)","videoplayer_downloads_button_label":"Menú Opciones de descarga","videoplayer_downloads_menu_back_button_label":"Volver","videoplayer_downloads_menu_header":"Descargar","videoplayer_quality_menu_back_button_label":"Volver","videoplayer_quality_settings_menu_header":"Ajustes","videoplayer_share_link_button_label":"Compartir con {name}","videoplayer_share_menu_back_button_label":"Volver","videoplayer_share_menu_button_label":"Menú Compartir","videoplayer_share_menu_header":"Compartir","videoplayer_share_time_copied":"¡Copiado!","videoplayer_share_time_copy":"Iniciar vídeo compartido en","videoplayer_pause_button_label":"Botón de pausa","videoplayer_play_button_label":"Botón de reproducción","videoplayer_fullscreen_button_label":"Cambiar el vídeo a pantalla completa.","videoplayer_fullscreen_hover_label":"Pantalla completa","videoplayer_windowed_hover_label":"Modo ventana","videoplayer_unmute_click":"Haz clic en cualquier lugar para activar el audio.","videoplayer_unmute_tap":"Toca en cualquier lugar para activar el audio.","videoplayer_pause_hover_label":"Pausar","videoplayer_play_hover_label":"Reproducir","videoplayer_play_pause_button_label":"Reproducir/Pausar","videoplayer_replay_hover_label":"Volver a ver","videoplayer_progress_bar_label":"Barra de progreso","videoplayer_quality_settings_button_label":"Menú Ajustes de calidad","videoplayer_share_copy":"Copiar","videoplayer_share_title":"Compartir","videoplayer_volume_slider_label":"Volumen","videoplayer_volume_toggle_button_label":"Silenciar/Habilitar audio"},"mx":{"videoplayer_airplay_button_label":"Compartir pantalla","videoplayer_airplay_menu_header":"Descargar","videoplayer_airplay_not_supported_error":"Este navegador no es compatible con AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Elemento de video no encontrado.","videoplayer_captions_button_label":"Configuración de subtítulos","videoplayer_captions_menu_back_button_label":"Atrás","videoplayer_captions_menu_header":"Subtítulos","videoplayer_captions_menu_off_label":"No","videoplayer_captions_menu_subtitles_label":"(Subtítulos)","videoplayer_downloads_button_label":"Opciones de descarga","videoplayer_downloads_menu_back_button_label":"Atrás","videoplayer_downloads_menu_header":"Descargar","videoplayer_quality_menu_back_button_label":"Atrás","videoplayer_quality_settings_menu_header":"Configuración","videoplayer_share_link_button_label":"Compartir con {name}","videoplayer_share_menu_back_button_label":"Atrás","videoplayer_share_menu_button_label":"Compartir","videoplayer_share_menu_header":"Compartir","videoplayer_share_time_copied":"¡Copiado!","videoplayer_share_time_copy":"Iniciar video compartido en","videoplayer_pause_button_label":"Botón de pausa","videoplayer_play_button_label":"Botón de reproducción","videoplayer_fullscreen_button_label":"Cambiar video a pantalla completa","videoplayer_fullscreen_hover_label":"Pantalla completa","videoplayer_windowed_hover_label":"Ventana","videoplayer_unmute_click":"Haz clic en cualquier parte para activar el sonido.","videoplayer_unmute_tap":"Toca en cualquier parte para activar el sonido.","videoplayer_pause_hover_label":"Pausa","videoplayer_play_hover_label":"Reproducir","videoplayer_play_pause_button_label":"Reproducir/Pausar","videoplayer_replay_hover_label":"Repetir","videoplayer_progress_bar_label":"Barra de progreso","videoplayer_quality_settings_button_label":"Configuración de calidad","videoplayer_share_copy":"Copiar","videoplayer_share_title":"Compartir","videoplayer_volume_slider_label":"Volumen","videoplayer_volume_toggle_button_label":"Activar/Desactivar silenciado"},"fr":{"videoplayer_airplay_button_label":"Partage d\'écran","videoplayer_airplay_menu_header":"Téléchargement","videoplayer_airplay_not_supported_error":"AirPlay n\'est pas pris en charge par ce navigateur.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Élément vidéo introuvable.","videoplayer_captions_button_label":"Sous-titres","videoplayer_captions_menu_back_button_label":"Retour","videoplayer_captions_menu_header":"Sous-titres","videoplayer_captions_menu_off_label":"Sans","videoplayer_captions_menu_subtitles_label":"(Sous-titres)","videoplayer_downloads_button_label":"Menu des options de téléchargement","videoplayer_downloads_menu_back_button_label":"Retour","videoplayer_downloads_menu_header":"Téléchargement","videoplayer_quality_menu_back_button_label":"Retour","videoplayer_quality_settings_menu_header":"Paramètres","videoplayer_share_link_button_label":"Partager avec {name}","videoplayer_share_menu_back_button_label":"Retour","videoplayer_share_menu_button_label":"Menu de partage","videoplayer_share_menu_header":"Partager","videoplayer_share_time_copied":"Copié !","videoplayer_share_time_copy":"Commencer la vidéo partagée à","videoplayer_pause_button_label":"Bouton Pause","videoplayer_play_button_label":"Bouton Lecture","videoplayer_fullscreen_button_label":"Plein écran avec/sans","videoplayer_fullscreen_hover_label":"Plein écran","videoplayer_windowed_hover_label":"Mode fenêtré","videoplayer_unmute_click":"Cliquez n\'importe où pour activer le son.","videoplayer_unmute_tap":"Touchez n\'importe où pour activer le son.","videoplayer_pause_hover_label":"Pause","videoplayer_play_hover_label":"Lecture","videoplayer_play_pause_button_label":"Lecture/pause","videoplayer_replay_hover_label":"Relire","videoplayer_progress_bar_label":"Barre de progression","videoplayer_quality_settings_button_label":"Menu des paramètres de qualité","videoplayer_share_copy":"Copier","videoplayer_share_title":"Partager","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Son avec/sans"},"it":{"videoplayer_airplay_button_label":"Condivisione schermo","videoplayer_airplay_menu_header":"Scarica","videoplayer_airplay_not_supported_error":"Questo browser non supporta AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Elemento video non trovato.","videoplayer_captions_button_label":"Audio descrizione","videoplayer_captions_menu_back_button_label":"Indietro","videoplayer_captions_menu_header":"Sottotitoli","videoplayer_captions_menu_off_label":"Disattivati","videoplayer_captions_menu_subtitles_label":"(Sottotitoli)","videoplayer_downloads_button_label":"Menu opzioni download","videoplayer_downloads_menu_back_button_label":"Indietro","videoplayer_downloads_menu_header":"Scarica","videoplayer_quality_menu_back_button_label":"Indietro","videoplayer_quality_settings_menu_header":"Impostazioni","videoplayer_share_link_button_label":"Condividi con {name}","videoplayer_share_menu_back_button_label":"Indietro","videoplayer_share_menu_button_label":"Menu Condivisione","videoplayer_share_menu_header":"Condivisione","videoplayer_share_time_copied":"Elemento copiato!","videoplayer_share_time_copy":"Fai iniziare il video condiviso da qui:","videoplayer_pause_button_label":"Pulsante pausa","videoplayer_play_button_label":"Pulsante riproduzione","videoplayer_fullscreen_button_label":"Attiva/Disattiva la modalità video a schermo intero","videoplayer_fullscreen_hover_label":"Schermo intero","videoplayer_windowed_hover_label":"In finestra","videoplayer_unmute_click":"Clicca in un punto qualsiasi per attivare l\'audio.","videoplayer_unmute_tap":"Tocca un punto qualsiasi per attivare l\'audio.","videoplayer_pause_hover_label":"Pausa","videoplayer_play_hover_label":"Riproduzione","videoplayer_play_pause_button_label":"Attiva/Disattiva la riproduzione o la pausa","videoplayer_replay_hover_label":"Riproduci di nuovo","videoplayer_progress_bar_label":"Barra progresso","videoplayer_quality_settings_button_label":"Menu Impostazioni qualità","videoplayer_share_copy":"Copia","videoplayer_share_title":"Condivisione","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Attiva/Disattiva l’audio"},"jp":{"videoplayer_airplay_button_label":"画面共有","videoplayer_airplay_menu_header":"ダウンロード","videoplayer_airplay_not_supported_error":"このブラウザはAirPlayに対応していません。","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"ビデオ要素が見つかりません。","videoplayer_captions_button_label":"キャプション","videoplayer_captions_menu_back_button_label":"戻る","videoplayer_captions_menu_header":"字幕/クローズドキャプション","videoplayer_captions_menu_off_label":"オフ","videoplayer_captions_menu_subtitles_label":"(字幕)","videoplayer_downloads_button_label":"ダウンロードオプションメニュー","videoplayer_downloads_menu_back_button_label":"戻る","videoplayer_downloads_menu_header":"ダウンロード","videoplayer_quality_menu_back_button_label":"戻る","videoplayer_quality_settings_menu_header":"設定","videoplayer_share_link_button_label":"{name}に共有","videoplayer_share_menu_back_button_label":"戻る","videoplayer_share_menu_button_label":"共有メニュー","videoplayer_share_menu_header":"共有","videoplayer_share_time_copied":"コピー完了！","videoplayer_share_time_copy":"次の時間からビデオを共有：","videoplayer_pause_button_label":"ポーズボタン","videoplayer_play_button_label":"プレイボタン","videoplayer_fullscreen_button_label":"フルスクリーンモードにビデオを切り替え","videoplayer_fullscreen_hover_label":"フルスクリーン","videoplayer_windowed_hover_label":"ウィンドウ表示","videoplayer_unmute_click":"クリックしてミュートを解除。","videoplayer_unmute_tap":"タップしてミュートを解除。","videoplayer_pause_hover_label":"一時停止","videoplayer_play_hover_label":"再生","videoplayer_play_pause_button_label":"再生/一時停止切り替え","videoplayer_replay_hover_label":"リプレイ","videoplayer_progress_bar_label":"進行状況バー","videoplayer_quality_settings_button_label":"品質設定メニュー","videoplayer_share_copy":"コピー","videoplayer_share_title":"共有","videoplayer_volume_slider_label":"音量","videoplayer_volume_toggle_button_label":"ミュート/ミュート解除切り替え"},"kr":{"videoplayer_airplay_button_label":"화면 공유","videoplayer_airplay_menu_header":"다운로드","videoplayer_airplay_not_supported_error":"이 브라우저에서는 AirPlay가 지원되지 않습니다.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"동영상 요소를 찾을 수 없습니다.","videoplayer_captions_button_label":"캡션","videoplayer_captions_menu_back_button_label":"뒤로가기","videoplayer_captions_menu_header":"자막/CC","videoplayer_captions_menu_off_label":"끄기","videoplayer_captions_menu_subtitles_label":"(자막)","videoplayer_downloads_button_label":"다운로드 옵션 메뉴","videoplayer_downloads_menu_back_button_label":"뒤로가기","videoplayer_downloads_menu_header":"다운로드","videoplayer_quality_menu_back_button_label":"뒤로가기","videoplayer_quality_settings_menu_header":"설정","videoplayer_share_link_button_label":"{name}에게 공유","videoplayer_share_menu_back_button_label":"뒤로가기","videoplayer_share_menu_button_label":"공유 메뉴","videoplayer_share_menu_header":"공유","videoplayer_share_time_copied":"복사됨!","videoplayer_share_time_copy":"공유된 동영상 시작","videoplayer_pause_button_label":"일시 정지 버튼","videoplayer_play_button_label":"재생 버튼","videoplayer_fullscreen_button_label":"전체 화면으로 전환","videoplayer_fullscreen_hover_label":"전체 화면","videoplayer_windowed_hover_label":"창모드","videoplayer_unmute_click":"음소거를 해제하려면 아무 데나 클릭하십시오.","videoplayer_unmute_tap":"음소거를 해제하려면 아무 데나 탭하십시오.","videoplayer_pause_hover_label":"일시 정지","videoplayer_play_hover_label":"재생","videoplayer_play_pause_button_label":"재생/일시 정지 전환","videoplayer_replay_hover_label":"다시 재생","videoplayer_progress_bar_label":"진행률 표시줄","videoplayer_quality_settings_button_label":"품질 설정 메뉴","videoplayer_share_copy":"복사","videoplayer_share_title":"공유","videoplayer_volume_slider_label":"볼륨","videoplayer_volume_toggle_button_label":"음소거/소리 전환"},"pl":{"videoplayer_airplay_button_label":"Udostępnianie ekranu","videoplayer_airplay_menu_header":"Pobierz","videoplayer_airplay_not_supported_error":"Ta przeglądarka nie obsługuje funkcji AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Nie znaleziono filmu.","videoplayer_captions_button_label":"Napisy","videoplayer_captions_menu_back_button_label":"Wstecz","videoplayer_captions_menu_header":"Napisy dla niesłyszących","videoplayer_captions_menu_off_label":"Wyłącz","videoplayer_captions_menu_subtitles_label":"(Napisy)","videoplayer_downloads_button_label":"Menu ustawień pobierania","videoplayer_downloads_menu_back_button_label":"Wstecz","videoplayer_downloads_menu_header":"Pobierz","videoplayer_quality_menu_back_button_label":"Wstecz","videoplayer_quality_settings_menu_header":"Ustawienia","videoplayer_share_link_button_label":"Udostępnij: {name}","videoplayer_share_menu_back_button_label":"Wróć","videoplayer_share_menu_button_label":"Menu udostępniania","videoplayer_share_menu_header":"Udostępnij","videoplayer_share_time_copied":"Skopiowano","videoplayer_share_time_copy":"Rozpocznij udostępnianie od","videoplayer_pause_button_label":"Przycisk zatrzymania","videoplayer_play_button_label":"Przycisk odtwarzania","videoplayer_fullscreen_button_label":"Przełącz na tryb pełnoekranowy","videoplayer_fullscreen_hover_label":"Pełny ekran","videoplayer_windowed_hover_label":"Okno","videoplayer_unmute_click":"Kliknij gdziekolwiek, aby wyłączyć wyciszenie.","videoplayer_unmute_tap":"Dotknij ekranu gdziekolwiek, aby wyłączyć wyciszenie.","videoplayer_pause_hover_label":"Zatrzymaj","videoplayer_play_hover_label":"Odtwórz","videoplayer_play_pause_button_label":"Odtwarzaj/zatrzymaj","videoplayer_replay_hover_label":"Obejrzyj ponownie","videoplayer_progress_bar_label":"Pasek postępów","videoplayer_quality_settings_button_label":"Menu ustawień jakości","videoplayer_share_copy":"Kopiuj","videoplayer_share_title":"Udostępnij","videoplayer_volume_slider_label":"Głośność","videoplayer_volume_toggle_button_label":"Wycisz/wyłącz wyciszenie"},"br":{"videoplayer_airplay_button_label":"Compartilhamento de tela","videoplayer_airplay_menu_header":"Baixar","videoplayer_airplay_not_supported_error":"O AirPlay não é compatível com este navegador.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Vídeo não encontrado.","videoplayer_captions_button_label":"Legendas","videoplayer_captions_menu_back_button_label":"Voltar","videoplayer_captions_menu_header":"Legendas / CC","videoplayer_captions_menu_off_label":"Desligado","videoplayer_captions_menu_subtitles_label":"(Legendas)","videoplayer_downloads_button_label":"Menu de opções de download","videoplayer_downloads_menu_back_button_label":"Voltar","videoplayer_downloads_menu_header":"Baixar","videoplayer_quality_menu_back_button_label":"Voltar","videoplayer_quality_settings_menu_header":"Configurações","videoplayer_share_link_button_label":"Compartilhar com {name}","videoplayer_share_menu_back_button_label":"Voltar","videoplayer_share_menu_button_label":"Menu de compartilhamento","videoplayer_share_menu_header":"Compartilhar","videoplayer_share_time_copied":"Copiado!","videoplayer_share_time_copy":"Iniciar vídeo compartilhado em","videoplayer_pause_button_label":"Botão Pausar","videoplayer_play_button_label":"Botão Tocar","videoplayer_fullscreen_button_label":"Alternar para modo tela cheia","videoplayer_fullscreen_hover_label":"Tela cheia","videoplayer_windowed_hover_label":"Modo janela","videoplayer_unmute_click":"Clique em qualquer lugar para ativar o som.","videoplayer_unmute_tap":"Toque em qualquer lugar para ativar o som.","videoplayer_pause_hover_label":"Pausar","videoplayer_play_hover_label":"Tocar","videoplayer_play_pause_button_label":"Tocar/pausar","videoplayer_replay_hover_label":"Replay","videoplayer_progress_bar_label":"Barra de progresso","videoplayer_quality_settings_button_label":"Menu de configurações de qualidade","videoplayer_share_copy":"Copiar","videoplayer_share_title":"Compartilhar","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Ativar/desativar som"},"ru":{"videoplayer_airplay_button_label":"Поделиться","videoplayer_airplay_menu_header":"Загрузить","videoplayer_airplay_not_supported_error":"В данном браузере не поддерживается AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Видеоэлемент не найден.","videoplayer_captions_button_label":"Меню настройки субтитров","videoplayer_captions_menu_back_button_label":"Назад","videoplayer_captions_menu_header":"Субтитры","videoplayer_captions_menu_off_label":"Откл.","videoplayer_captions_menu_subtitles_label":"(субтитры)","videoplayer_downloads_button_label":"Меню загрузки","videoplayer_downloads_menu_back_button_label":"Назад","videoplayer_downloads_menu_header":"Загрузить","videoplayer_quality_menu_back_button_label":"Назад","videoplayer_quality_settings_menu_header":"Настройки","videoplayer_share_link_button_label":"Поделиться с {name}","videoplayer_share_menu_back_button_label":"Назад","videoplayer_share_menu_button_label":"Поделиться","videoplayer_share_menu_header":"Поделиться","videoplayer_share_time_copied":"Скопировано!","videoplayer_share_time_copy":"Воспроизвести видео с","videoplayer_pause_button_label":"Кнопка паузы","videoplayer_play_button_label":"Кнопка воспроизведения","videoplayer_fullscreen_button_label":"Переключить видео в полноэкранный режим","videoplayer_fullscreen_hover_label":"Полноэкранный режим","videoplayer_windowed_hover_label":"Оконный режим","videoplayer_unmute_click":"Щелкните куда-либо, чтобы включить звук.","videoplayer_unmute_tap":"Нажмите куда-либо, чтобы включить звук.","videoplayer_pause_hover_label":"Пауза","videoplayer_play_hover_label":"Воспроизведение","videoplayer_play_pause_button_label":"Пауза/воспроизведение","videoplayer_replay_hover_label":"Повтор","videoplayer_progress_bar_label":"Индикатор прогресса","videoplayer_quality_settings_button_label":"Меню настроек качества","videoplayer_share_copy":"Копировать","videoplayer_share_title":"Поделиться","videoplayer_volume_slider_label":"Громкость","videoplayer_volume_toggle_button_label":"Выключить/включить звук"},"hans":{"videoplayer_airplay_button_label":"屏幕共享","videoplayer_airplay_menu_header":"下载","videoplayer_airplay_not_supported_error":"此浏览器不支持 AirPlay。","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"未找到视频元素。","videoplayer_captions_button_label":"原文字幕","videoplayer_captions_menu_back_button_label":"返回","videoplayer_captions_menu_header":"字幕 / 隐藏字幕","videoplayer_captions_menu_off_label":"关闭","videoplayer_captions_menu_subtitles_label":"（字幕）","videoplayer_downloads_button_label":"下载选项菜单","videoplayer_downloads_menu_back_button_label":"返回","videoplayer_downloads_menu_header":"下载","videoplayer_quality_menu_back_button_label":"返回","videoplayer_quality_settings_menu_header":"设置","videoplayer_share_link_button_label":"分享至 {name}","videoplayer_share_menu_back_button_label":"返回","videoplayer_share_menu_button_label":"分享菜单","videoplayer_share_menu_header":"分享","videoplayer_share_time_copied":"已复制！","videoplayer_share_time_copy":"视频分享开始时间：","videoplayer_pause_button_label":"暂停键","videoplayer_play_button_label":"播放键","videoplayer_fullscreen_button_label":"将视频切换至全屏模式","videoplayer_fullscreen_hover_label":"全屏","videoplayer_windowed_hover_label":"窗口化","videoplayer_unmute_click":"点击任意地方以取消静音。","videoplayer_unmute_tap":"按任意地方以取消静音。","videoplayer_pause_hover_label":"暂停","videoplayer_play_hover_label":"播放","videoplayer_play_pause_button_label":"播放/暂停切换","videoplayer_replay_hover_label":"重新播放","videoplayer_progress_bar_label":"进度条","videoplayer_quality_settings_button_label":"画质设置菜单","videoplayer_share_copy":"复制","videoplayer_share_title":"分享","videoplayer_volume_slider_label":"音量","videoplayer_volume_toggle_button_label":"静音/取消静音切换"},"tw":{"videoplayer_airplay_button_label":"分享畫面","videoplayer_airplay_menu_header":"下載","videoplayer_airplay_not_supported_error":"此瀏覽器不支援 AirPlay。","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"找不到影片元素。","videoplayer_captions_button_label":"字幕","videoplayer_captions_menu_back_button_label":"返回","videoplayer_captions_menu_header":"字幕 / CC","videoplayer_captions_menu_off_label":"關閉","videoplayer_captions_menu_subtitles_label":"（字幕）","videoplayer_downloads_button_label":"下載選項選單","videoplayer_downloads_menu_back_button_label":"返回","videoplayer_downloads_menu_header":"下載","videoplayer_quality_menu_back_button_label":"返回","videoplayer_quality_settings_menu_header":"設定","videoplayer_share_link_button_label":"分享至：{name}","videoplayer_share_menu_back_button_label":"返回","videoplayer_share_menu_button_label":"分享選單","videoplayer_share_menu_header":"分享","videoplayer_share_time_copied":"已複製！","videoplayer_share_time_copy":"分享影片開始時間：","videoplayer_pause_button_label":"暫停按鍵","videoplayer_play_button_label":"播放按鍵","videoplayer_fullscreen_button_label":"切換影片至全螢幕模式","videoplayer_fullscreen_hover_label":"全螢幕","videoplayer_windowed_hover_label":"視窗顯示","videoplayer_unmute_click":"點擊任何地方取消靜音。","videoplayer_unmute_tap":"點按任何地方取消靜音。","videoplayer_pause_hover_label":"暫停","videoplayer_play_hover_label":"播放","videoplayer_play_pause_button_label":"切換播放/暫停","videoplayer_replay_hover_label":"重播","videoplayer_progress_bar_label":"進度條","videoplayer_quality_settings_button_label":"畫質設定選單","videoplayer_share_copy":"複製","videoplayer_share_title":"分享","videoplayer_volume_slider_label":"音量","videoplayer_volume_toggle_button_label":"切換靜音/取消靜音"}}')
    }
  }
]);