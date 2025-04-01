! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "a6385d14-3a38-4a55-ada8-e6b5fe945492", n._sentryDebugIdIdentifier = "sentry-dbid-a6385d14-3a38-4a55-ada8-e6b5fe945492")
  } catch (n) {}
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
  [2319], {
    30062: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => t,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        t = () => {
          let n;
          const {
            location: e
          } = window, a = e.hostname.substring(0, e.hostname.indexOf(".rockstargames.com")), o = r.findIndex((e => Object.entries(e.sites).findIndex((e => {
            let [o, r] = e;
            return r === a && (n = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), t = r[o >= 0 ? o : 0];
          return n || (n = {
            site: "www",
            subDomain: "local"
          }), {
            ...t,
            currentSite: n
          }
        }
    },
    53821: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => _
      });
      var o = a(28786),
        r = a.n(o);
      const t = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        i = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}');
      var d = a(73855);
      const l = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        s = n => {
          let e, {
            type: a = l.SPINNING
          } = n;
          switch (a) {
            case l.THREE_DOTS:
              e = i;
              break;
            case l.SPINNING:
            default:
              e = t
          }
          return (0, d.jsx)(r(), {
            loop: !0,
            autoplay: !0,
            animationData: e,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        };
      var c = a(53178),
        m = a.n(c),
        g = a(27835),
        p = a.n(g),
        f = a(17529),
        h = a.n(f),
        A = a(72162),
        v = a.n(A),
        u = a(82510),
        b = a.n(u),
        y = a(90675),
        C = a.n(y),
        w = a(76374),
        x = {};
      x.styleTagTransform = C(), x.setAttributes = v(), x.insert = h().bind(null, "head"), x.domAPI = p(), x.insertStyleElement = b(), m()(w.A, x);
      const k = w.A && w.A.locals ? w.A.locals : void 0,
        _ = () => (0, d.jsx)("div", {
          className: k.loading,
          children: (0, d.jsx)(s, {})
        })
    },
    2239: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => b
      });
      var o = a(53178),
        r = a.n(o),
        t = a(27835),
        i = a.n(t),
        d = a(17529),
        l = a.n(d),
        s = a(72162),
        c = a.n(s),
        m = a(82510),
        g = a.n(m),
        p = a(90675),
        f = a.n(p),
        h = a(84694),
        A = {};
      A.styleTagTransform = f(), A.setAttributes = c(), A.insert = l().bind(null, "head"), A.domAPI = i(), A.insertStyleElement = g(), r()(h.A, A);
      const v = h.A && h.A.locals ? h.A.locals : void 0;
      var u = a(73855);
      const b = n => {
        let {
          children: e,
          hero: a = !1,
          wrapper: o = !0,
          titleCrop: r
        } = n;
        return (0, u.jsx)("div", {
          className: [v.wrapper, a ? v.hero : "", o ? v.stdWrapper : ""].join(" "),
          ...r ? {
            style: {
              "--videoplayer-info-crop": r
            }
          } : {},
          children: e
        })
      }
    },
    84700: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => xa
      });
      var o = a(62229),
        r = a(9623),
        t = a(30062),
        i = a(53178),
        d = a.n(i),
        l = a(27835),
        s = a.n(l),
        c = a(17529),
        m = a.n(c),
        g = a(72162),
        p = a.n(g),
        f = a(82510),
        h = a.n(f),
        A = a(90675),
        v = a.n(A),
        u = a(39460),
        b = {};
      b.styleTagTransform = v(), b.setAttributes = p(), b.insert = m().bind(null, "head"), b.domAPI = s(), b.insertStyleElement = h(), d()(u.A, b);
      const y = u.A && u.A.locals ? u.A.locals : void 0;
      var C = a(73855);
      class w extends o.Component {
        constructor(n) {
          super(n), this.state = {
            header: n.header ?? null,
            hidden: n.hidden ?? !1
          }
        }
        static getDerivedStateFromError(n) {
          return {
            error: {
              message: n.message ?? n.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, C.jsxs)("div", {
            className: y.errorMsg,
            children: [(0, C.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, C.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var x = a(47224),
        k = a(95966),
        _ = a(81788),
        B = a(13581),
        z = a.n(B),
        I = a(21620);
      const E = (0, _.defineMessages)({
          videoplayer_play_button_label: {
            id: "videoplayer_play_button_label",
            defaultMessage: "Play button"
          },
          videoplayer_pause_button_label: {
            id: "videoplayer_pause_button_label",
            defaultMessage: "Pause button"
          }
        }),
        D = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            viewBox: d = "0 0 20 20",
            width: l = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            width: l,
            viewBox: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
              fill: r
            })]
          })
        };
      var S = a(41497),
        F = a(79129),
        N = {};
      N.styleTagTransform = v(), N.setAttributes = p(), N.insert = m().bind(null, "head"), N.domAPI = s(), N.insertStyleElement = h(), d()(F.A, N);
      const R = F.A && F.A.locals ? F.A.locals : void 0,
        M = () => {
          const {
            state: n,
            setState: e,
            trackGa: a
          } = (0, I.Tc)(), {
            accentColor: r,
            playing: t,
            controlsActive: i
          } = n, [d, l] = (0, o.useState)(null), s = (0, o.useRef)(null), {
            formatMessage: c
          } = (0, _.useIntl)();
          return (0, o.useEffect)((() => {
            l((n => {
              if (!n) return null;
              const e = n.replace(/^#/, ""),
                a = parseInt(e, 16),
                o = a >> 16 & 255,
                r = a >> 8 & 255,
                t = 255 & a;
              return Number.isNaN(o) || Number.isNaN(t) || Number.isNaN(t) ? null : {
                r: o,
                g: r,
                b: t
              }
            })(r))
          }), [r]), (0, o.useLayoutEffect)((() => {
            const n = B.gsap.context((() => {
              s?.current && (t && B.gsap.to(s?.current, {
                autoAlpha: 0,
                delay: .8,
                duration: .2
              }), i || B.gsap.to(s?.current, {
                autoAlpha: 0
              }))
            }));
            return () => n.revert()
          }), [s?.current, i]), (0, C.jsx)("button", {
            "aria-label": c(t ? E.videoplayer_pause_button_label : E.videoplayer_play_button_label),
            className: R.controlBigPlayButton,
            onClick: () => {
              e("showTitle", !1), e("playing", !0), e("running", !0), e("volume", 1), a({
                event: "video_play_manual"
              })
            },
            type: "button",
            children: (0, C.jsx)("div", {
              className: R.controlBigPlayIcon,
              ref: s,
              style: {
                "--button-background": `rgba(${d?.r}, ${d?.g}, ${d?.b}, 1.0)`
              },
              children: t ? (0, C.jsx)(D, {
                className: R.icon
              }) : (0, C.jsx)(S.A, {
                className: R.icon
              })
            })
          })
        },
        j = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "#CF242B",
            fillRule: t = "evenodd",
            height: i = "32",
            viewBox: d = "0 0 32 32",
            width: l = "32"
          } = n;
          const s = "32" !== i ? i : "32",
            c = "32" !== l ? l : "32",
            m = "0 0 32 32" !== d ? d : `0 0 ${c} ${s}`;
          return (0, C.jsxs)("svg", {
            className: a,
            width: c,
            height: s,
            viewBox: m,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM21.0127 24L19.9246 16.5826L26 12.3328H19.2596L18.0929 5L13.7948 12.2603H7L11.1349 16.6128L7.73751 23.9093L15.161 19.5024L21.0127 24Z",
              fill: r
            })]
          })
        },
        T = n => {
          let {
            alt: e = "",
            className: a = "",
            fill: o = "#FCAF17",
            viewBox: r = "0 0 216 198.83"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            viewBox: r,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fill: "#000",
              d: "M214.55,197.37a4.94,4.94,0,1,1,1.45-3.5A4.75,4.75,0,0,1,214.55,197.37Zm-6.52-6.5a4.27,4.27,0,0,0,0,6,4.25,4.25,0,0,0,6,0,4.26,4.26,0,0,0-6-6Zm2.92.27a4.24,4.24,0,0,1,1.5.2,1.36,1.36,0,0,1,.84,1.38,1.17,1.17,0,0,1-.53,1.08,2.45,2.45,0,0,1-.78.26,1.32,1.32,0,0,1,.93.52,1.57,1.57,0,0,1,.3.84v.39c0,.13,0,.27,0,.41a1.2,1.2,0,0,0,0,.28l0,.07h-.89a.07.07,0,0,0,0,0s0,0,0-.07l0-.17v-.42c0-.63-.17-1.05-.52-1.24a2.45,2.45,0,0,0-1.07-.17H210v2.12h-.95v-5.43Zm1,.89a2.38,2.38,0,0,0-1.16-.2H210v1.94h.87a2.48,2.48,0,0,0,.93-.13A.94.94,0,0,0,212,192Z"
            }), (0, C.jsx)("path", {
              fill: "#000",
              d: "M178.43,0H38.26C17.17,0,0,16.66,0,37.12V161.63c0,20.74,16.65,37,37.91,37H178.08c21.26,0,37.92-16.26,37.92-37V37.12C216,16.31,199.5,0,178.43,0Zm33.31,161.62c0,18.36-14.78,32.75-33.66,32.75H37.91C19,194.37,4.25,180,4.25,161.62V37.11c0-18.43,15-32.86,34-32.86H178.43c18.68,0,33.31,14.43,33.31,32.86Z"
            }), (0, C.jsx)("path", {
              fill: o,
              d: "M178.43,4.25H38.26c-19.06,0-34,14.43-34,32.86V161.62C4.25,180,19,194.37,37.91,194.37H178.08c18.88,0,33.66-14.39,33.66-32.75V37.11C211.74,18.68,197.11,4.25,178.43,4.25Z"
            }), (0, C.jsx)("path", {
              fill: "#000",
              d: "M185.49,118.2H158.43l-4.29-27L138.28,118h-3a23.14,23.14,0,0,1-2.52-10.42c0-4.6.34-9.1.34-15,0-7.76-2.28-11.92-8.37-13.38V79c12.94-1.8,18.81-10.36,18.81-22.42,0-17.12-11.39-20.84-26.32-20.84H77.08l-17,80.4H81.45l6.18-29.25h14.19c7.57,0,10.67,3.7,10.67,10.79,0,5.39-.56,9.66-.56,13.81,0,1.54.35,5.11,1.38,6.49,0,0,15.43,16.29,15.43,16.29l-13.27,28.55L143.86,146,165,162.23l-4-26.93ZM108.2,71.86h-17L95.3,52.48h15.79c5.62,0,11.46,1.46,11.46,8.34C122.55,69.49,115.9,71.86,108.2,71.86Z"
            }), (0, C.jsx)("polygon", {
              fill: "#FFF",
              points: "173.03 122.13 155.08 122.13 151.97 102.6 140.53 121.94 122.42 121.94 133.43 133.54 124.38 152.98 144.16 141.23 159.74 153.21 156.84 133.46 173.03 122.13"
            })]
          })
        };
      var H = a(3022),
        P = {};
      P.styleTagTransform = v(), P.setAttributes = p(), P.insert = m().bind(null, "head"), P.domAPI = s(), P.insertStyleElement = h(), d()(H.A, P);
      const L = H.A && H.A.locals ? H.A.locals : void 0,
        G = () => {
          const {
            state: n,
            trackGa: e
          } = (0, I.Tc)(), {
            brand: a,
            shareData: o,
            videoData: r
          } = n, {
            video: i
          } = r, {
            currentSite: d
          } = (0, t.A)(), l = () => e({
            event: "cta_other",
            text: "rockstar"
          });
          let s, c;
          return "clr" === a ? (c = (0, C.jsx)(j, {
            className: [L.brand, L[a]].join(" ")
          }), s = "https://circolocorecords.com") : (c = (0, C.jsx)(T, {
            className: [L.brand, L[a]].join(" ")
          }), s = `https://${d?.subDomain??"www"}.rockstargames.com/`), i?.title ? (0, C.jsxs)("div", {
            role: "paragraph",
            className: L.title,
            children: [(0, C.jsx)("a", {
              href: o?.brandUrl,
              target: "_blank",
              onClick: l,
              onKeyDown: l,
              rel: "noreferrer",
              tabIndex: 0,
              className: L.icon,
              children: c
            }), (0, C.jsx)("a", {
              href: o?.url,
              target: "_blank",
              className: L.titleText,
              children: o?.title
            })]
          }) : null
        },
        W = () => {
          const {
            state: n
          } = (0, I.Tc)(), {
            idle: e,
            videoData: a,
            autoplay: o,
            playing: r,
            startTime: t
          } = n, {
            video: i
          } = a, d = !o && !r && !t;
          return i ? (0, C.jsx)("div", {
            className: [L.info, e ? L.hidden : "", d ? L.isPreview : ""].join(" "),
            children: (0, C.jsx)(G, {})
          }) : null
        };
      var J = a(91253),
        O = {};
      O.styleTagTransform = v(), O.setAttributes = p(), O.insert = m().bind(null, "head"), O.domAPI = s(), O.insertStyleElement = h(), d()(J.A, O);
      const Q = J.A && J.A.locals ? J.A.locals : void 0,
        V = () => {
          const {
            state: n
          } = (0, I.Tc)(), {
            videoData: e
          } = n, {
            video: a
          } = e;
          return a ? (0, C.jsx)("div", {
            className: Q.stillframe,
            style: {
              background: `url(${a.screencap.includes("akamai")?`${a.screencap}?im=Resize=1920`:a.screencap}) center/contain no-repeat`
            }
          }) : null
        };
      var U = a(58116),
        q = {};
      q.styleTagTransform = v(), q.setAttributes = p(), q.insert = m().bind(null, "head"), q.domAPI = s(), q.insertStyleElement = h(), d()(U.A, q);
      const Y = U.A && U.A.locals ? U.A.locals : void 0,
        K = () => (0, C.jsxs)("div", {
          className: Y.embeddedPlayer,
          children: [(0, C.jsx)(W, {}), (0, C.jsx)(V, {}), (0, C.jsx)(M, {})]
        });
      var Z = a(53821),
        $ = a(2239);
      const X = (0, _.defineMessages)({
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
        nn = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            viewBox: d = "0 0 20 20",
            width: l = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            width: l,
            viewBox: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M6.66797 1.66663C7.12821 1.66663 7.5013 2.03972 7.5013 2.49996V4.99996C7.5013 5.663 7.23791 6.29889 6.76907 6.76773C6.30023 7.23657 5.66434 7.49996 5.0013 7.49996H2.5013C2.04106 7.49996 1.66797 7.12686 1.66797 6.66663C1.66797 6.20639 2.04106 5.83329 2.5013 5.83329H5.0013C5.22232 5.83329 5.43428 5.7455 5.59056 5.58921C5.74684 5.43293 5.83464 5.22097 5.83464 4.99996V2.49996C5.83464 2.03972 6.20773 1.66663 6.66797 1.66663ZM13.3346 1.66663C13.7949 1.66663 14.168 2.03972 14.168 2.49996V4.99996C14.168 5.22097 14.2558 5.43293 14.412 5.58921C14.5683 5.7455 14.7803 5.83329 15.0013 5.83329H17.5013C17.9615 5.83329 18.3346 6.20639 18.3346 6.66663C18.3346 7.12686 17.9615 7.49996 17.5013 7.49996H15.0013C14.3383 7.49996 13.7024 7.23657 13.2335 6.76773C12.7647 6.29889 12.5013 5.663 12.5013 4.99996V2.49996C12.5013 2.03972 12.8744 1.66663 13.3346 1.66663ZM1.66797 13.3333C1.66797 12.8731 2.04106 12.5 2.5013 12.5H5.0013C5.66434 12.5 6.30023 12.7634 6.76907 13.2322C7.23791 13.701 7.5013 14.3369 7.5013 15V17.5C7.5013 17.9602 7.12821 18.3333 6.66797 18.3333C6.20773 18.3333 5.83464 17.9602 5.83464 17.5V15C5.83464 14.7789 5.74684 14.567 5.59056 14.4107C5.43428 14.2544 5.22232 14.1666 5.0013 14.1666H2.5013C2.04106 14.1666 1.66797 13.7935 1.66797 13.3333ZM15.0013 14.1666C14.7803 14.1666 14.5683 14.2544 14.412 14.4107C14.2558 14.567 14.168 14.7789 14.168 15V17.5C14.168 17.9602 13.7949 18.3333 13.3346 18.3333C12.8744 18.3333 12.5013 17.9602 12.5013 17.5V15C12.5013 14.3369 12.7647 13.701 13.2335 13.2322C13.7024 12.7634 14.3383 12.5 15.0013 12.5H17.5013C17.9615 12.5 18.3346 12.8731 18.3346 13.3333C18.3346 13.7935 17.9615 14.1666 17.5013 14.1666H15.0013Z",
              fill: r
            })]
          })
        },
        en = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            viewBox: d = "0 0 20 20",
            width: l = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            width: l,
            viewBox: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M2.4002 2.39886C2.86904 1.93002 3.50493 1.66663 4.16797 1.66663H6.66797C7.12821 1.66663 7.5013 2.03972 7.5013 2.49996C7.5013 2.9602 7.12821 3.33329 6.66797 3.33329H4.16797C3.94695 3.33329 3.73499 3.42109 3.57871 3.57737C3.42243 3.73365 3.33464 3.94561 3.33464 4.16663V6.66663C3.33464 7.12686 2.96154 7.49996 2.5013 7.49996C2.04106 7.49996 1.66797 7.12686 1.66797 6.66663V4.16663C1.66797 3.50358 1.93136 2.8677 2.4002 2.39886ZM12.5013 2.49996C12.5013 2.03972 12.8744 1.66663 13.3346 1.66663H15.8346C16.4977 1.66663 17.1336 1.93002 17.6024 2.39886C18.0712 2.8677 18.3346 3.50358 18.3346 4.16663V6.66663C18.3346 7.12686 17.9615 7.49996 17.5013 7.49996C17.0411 7.49996 16.668 7.12686 16.668 6.66663V4.16663C16.668 3.94561 16.5802 3.73365 16.4239 3.57737C16.2676 3.42109 16.0557 3.33329 15.8346 3.33329H13.3346C12.8744 3.33329 12.5013 2.9602 12.5013 2.49996ZM2.5013 12.5C2.96154 12.5 3.33464 12.8731 3.33464 13.3333V15.8333C3.33464 16.0543 3.42243 16.2663 3.57871 16.4225C3.73499 16.5788 3.94696 16.6666 4.16797 16.6666H6.66797C7.12821 16.6666 7.5013 17.0397 7.5013 17.5C7.5013 17.9602 7.12821 18.3333 6.66797 18.3333H4.16797C3.50493 18.3333 2.86904 18.0699 2.4002 17.6011C1.93136 17.1322 1.66797 16.4963 1.66797 15.8333V13.3333C1.66797 12.8731 2.04106 12.5 2.5013 12.5ZM17.5013 12.5C17.9615 12.5 18.3346 12.8731 18.3346 13.3333V15.8333C18.3346 16.4963 18.0712 17.1322 17.6024 17.6011C17.1336 18.0699 16.4977 18.3333 15.8346 18.3333H13.3346C12.8744 18.3333 12.5013 17.9602 12.5013 17.5C12.5013 17.0397 12.8744 16.6666 13.3346 16.6666H15.8346C16.0556 16.6666 16.2676 16.5788 16.4239 16.4225C16.5802 16.2663 16.668 16.0543 16.668 15.8333V13.3333C16.668 12.8731 17.0411 12.5 17.5013 12.5Z",
              fill: r
            })]
          })
        };
      var an = a(67930),
        on = {};
      on.styleTagTransform = v(), on.setAttributes = p(), on.insert = m().bind(null, "head"), on.domAPI = s(), on.insertStyleElement = h(), d()(an.A, on);
      const rn = an.A && an.A.locals ? an.A.locals : void 0;
      var tn = a(75971),
        dn = a(60046),
        ln = {};
      ln.styleTagTransform = v(), ln.setAttributes = p(), ln.insert = m().bind(null, "head"), ln.domAPI = s(), ln.insertStyleElement = h(), d()(dn.A, ln);
      const sn = dn.A && dn.A.locals ? dn.A.locals : void 0,
        cn = n => {
          let {
            children: e,
            tooltipLabel: a,
            className: r,
            hideTooltip: t = !1,
            ...i
          } = n;
          const [d, l] = (0, o.useState)(null), [s, c] = (0, o.useState)(null), [m, g] = (0, o.useState)(!1), {
            styles: p,
            attributes: f
          } = (0, tn.usePopper)(d, s, {
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
          return (0, C.jsxs)("div", {
            children: [a && !t && m && (0, C.jsx)("span", {
              className: sn.tooltip,
              ref: c,
              style: p.popper,
              ...f,
              children: a
            }), (0, C.jsx)("button", {
              ...i,
              className: [sn.button, r].join(" "),
              onPointerEnter: n => {
                "mouse" === n.pointerType && g(!0)
              },
              onPointerLeave: () => {
                g(!1)
              },
              type: "button",
              ref: l,
              children: e
            })]
          })
        },
        mn = () => {
          const {
            formatMessage: n
          } = (0, _.useIntl)(), {
            state: e,
            setState: a
          } = (0, I.Tc)(), {
            fullscreen: o
          } = e, r = () => {
            a("fullscreen", !o)
          };
          return (0, C.jsx)(cn, {
            tooltipLabel: n(o ? X.videoplayer_windowed_hover_label : X.videoplayer_fullscreen_hover_label),
            "aria-label": n(X.videoplayer_fullscreen_button_label),
            className: rn.button,
            onClick: r,
            onKeyDown: n => {
              "Enter" === n.code && (n.preventDefault(), r())
            },
            children: o ? (0, C.jsx)(nn, {
              className: rn.icon
            }) : (0, C.jsx)(en, {
              className: rn.icon
            })
          })
        };
      var gn = a(2918);
      const pn = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            height: r = "80",
            fill: t = "#fff",
            fillRule: i = "evenodd",
            viewBox: d = "0 0 80 80",
            width: l = "80"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: r,
            role: "img",
            viewBox: d,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: i,
              clipRule: o,
              d: "M39.9868 6.6667L39.9994 6.66666C46.5921 6.66668 53.0367 8.62165 58.5184 12.2844C64 15.9471 68.2724 21.153 70.7953 27.2439C73.3183 33.3348 73.9784 40.037 72.6922 46.503C71.406 52.9691 68.2313 58.9085 63.5696 63.5702C58.9078 68.232 52.9684 71.4067 46.5024 72.6929C40.0363 73.979 33.3341 73.3189 27.2432 70.796C21.1524 68.2731 15.9464 64.0007 12.2837 58.519C8.62098 53.0374 6.66602 46.5927 6.66602 40C6.66602 38.1591 8.1584 36.6667 9.99935 36.6667C11.8403 36.6667 13.3327 38.1591 13.3327 40C13.3327 45.2742 14.8967 50.4299 17.8268 54.8152C20.757 59.2005 24.9218 62.6185 29.7945 64.6368C34.6672 66.6551 40.0289 67.1832 45.2018 66.1543C50.3746 65.1254 55.1261 62.5856 58.8555 58.8562C62.5849 55.1268 65.1247 50.3752 66.1536 45.2024C67.1826 40.0296 66.6545 34.6678 64.6361 29.7951C62.6178 24.9224 59.1999 20.7577 54.8146 17.8275C50.431 14.8985 45.2776 13.3346 40.0056 13.3333C32.4904 13.3632 25.277 16.2928 19.8692 21.5108L12.3564 29.0237C11.0546 30.3254 8.94407 30.3254 7.64233 29.0237C6.34058 27.722 6.34058 25.6114 7.64233 24.3097L15.1757 16.7763L15.2159 16.7368C21.8642 10.3097 30.7398 6.70149 39.9868 6.6667Z",
              fill: t
            }), (0, C.jsx)("path", {
              fillRule: i,
              clipRule: o,
              d: "M9.99935 6.66668C11.8403 6.66668 13.3327 8.15906 13.3327 10V23.3333H26.666C28.507 23.3333 29.9994 24.8257 29.9994 26.6667C29.9994 28.5076 28.507 30 26.666 30H9.99935C8.1584 30 6.66602 28.5076 6.66602 26.6667V10C6.66602 8.15906 8.1584 6.66668 9.99935 6.66668Z",
              fill: t
            })]
          })
        },
        fn = (0, _.defineMessages)({
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
        });
      var hn = a(55501),
        An = {};
      An.styleTagTransform = v(), An.setAttributes = p(), An.insert = m().bind(null, "head"), An.domAPI = s(), An.insertStyleElement = h(), d()(hn.A, An);
      const vn = hn.A && hn.A.locals ? hn.A.locals : void 0,
        un = () => {
          (0, gn.useGtmTrack)();
          const {
            formatMessage: n
          } = (0, _.useIntl)(), {
            state: e,
            setState: a,
            replay: o,
            trackGa: r
          } = (0, I.Tc)(), {
            playerEnded: t,
            playing: i
          } = e;
          return (0, C.jsx)(cn, {
            tooltipLabel: n(t ? fn.videoplayer_replay_hover_label : i ? fn.videoplayer_pause_hover_label : fn.videoplayer_play_hover_label),
            "aria-label": n(fn.videoplayer_play_pause_button_label),
            onMouseDown: n => {
              t && "function" == typeof o ? (r({
                event: "video_replay"
              }), o()) : (r({
                event: i ? "video_pause" : "video_play_manual"
              }), a("playing", !i))
            },
            onKeyDown: n => {
              "Enter" === n.code && (n.preventDefault(), a("playing", !i))
            },
            children: t ? (0, C.jsx)(pn, {
              className: vn.icon
            }) : i ? (0, C.jsx)(D, {
              className: vn.icon
            }) : (0, C.jsx)(S.A, {
              className: vn.icon
            })
          })
        };
      var bn = a(4848),
        yn = a.n(bn);
      const Cn = (0, _.defineMessages)({
        videoplayer_progress_bar_label: {
          id: "videoplayer_progress_bar_label",
          defaultMessage: "Progress Bar"
        }
      });
      var wn = a(38004),
        xn = {};
      xn.styleTagTransform = v(), xn.setAttributes = p(), xn.insert = m().bind(null, "head"), xn.domAPI = s(), xn.insertStyleElement = h(), d()(wn.A, xn);
      const kn = wn.A && wn.A.locals ? wn.A.locals : void 0,
        _n = () => {
          const n = (0, o.useRef)(null),
            e = (0, o.useRef)(null),
            {
              formatMessage: a
            } = (0, _.useIntl)(),
            [r, t] = (0, o.useState)({
              25: !1,
              50: !1,
              75: !1,
              90: !1
            }),
            [i, d] = (0, o.useState)(0),
            [l, s] = (0, o.useState)(!1),
            [c, m] = (0, o.useState)(null),
            [g, p] = (0, o.useState)(0),
            {
              state: f,
              setState: h,
              trackGaQuartile: A
            } = (0, I.Tc)(),
            {
              accentColor: v,
              buffered: u,
              currentTime: b,
              idle: y,
              playerEnded: w,
              playing: x,
              playerRef: k,
              progressBarState: B,
              timing: z,
              videoRef: E
            } = f,
            D = function() {
              let {
                centerX: n = 0
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (!e.current) return;
              let a = null;
              const {
                x: o,
                width: r
              } = e.current.getBoundingClientRect();
              a = (n - o) / r, a = Math.min(1, Math.max(0, a)), h("progressBarState", {
                percent: a
              })
            },
            S = n => {
              if (!e?.current || !E?.current || !z?.duration) return;
              const a = e.current.getBoundingClientRect();
              let o = (n.clientX - a.left) / a.width * z.duration;
              o = Math.min(z.duration, Math.max(0, o)), m(o)
            };
          return (0, o.useEffect)((() => {
            const n = () => {
              m(null)
            };
            return document.addEventListener("mouseleave", n), document.addEventListener("mouseup", n), () => {
              document.removeEventListener("mouseleave", n), document.removeEventListener("mouseup", n)
            }
          }), []), (0, o.useEffect)((() => {
            l && B?.percent ? p(B.percent) : z?.current && z?.duration && p(z.current / z.duration)
          }), [l, B?.percent, z?.current, z?.duration]), (0, o.useEffect)((() => {
            const n = E?.current,
              e = () => {
                if (!n?.currentTime || !n?.duration) return;
                const e = {
                    ...r
                  },
                  a = n.duration,
                  o = n.currentTime,
                  l = Math.floor(o / a * 100),
                  s = Math.floor(a),
                  c = n => A("video_threshold", s, n);
                l > i && (!e[90] && l >= 90 ? (c(90), e[90] = !0) : !e[75] && l >= 75 && l < 90 ? (c(75), e[75] = !0) : !e[50] && l >= 50 && l < 75 ? (c(50), e[50] = !0) : !e[25] && l >= 25 && l < 50 && (c(25), e[25] = !0), t(e), d(l))
              };
            return n?.addEventListener("timeupdate", e), () => {
              n?.removeEventListener("timeupdate", e)
            }
          }), [E, r, i]), (0, o.useEffect)((() => {
            w || B.percent || !x || h("controlsActive", !y)
          }), [y, w, B.percent, x]), (0, o.useEffect)((() => {
            const n = B.percent ? B.percent * z.duration : b;
            h("currentTime", n)
          }), [B.percent, z.duration]), (0, o.useEffect)((() => {
            const e = n?.current;
            if (!e) return;
            const a = e.getContext("2d"),
              o = e.getBoundingClientRect();
            if (e.width = o.width, e.height = o.height, a.clearRect(0, 0, o.width, o.height), a.fillStyle = "rgba(255, 255, 255, 0.5)", !u || !u.length) return;
            const r = o.width / z.duration;
            for (let n = 0; n < u.length; n += 1) {
              const e = u.start(n),
                t = u.end(n),
                i = e * r,
                d = t * r;
              e <= z.current && z.current <= t && a.fillRect(i, 0, d - i, o.height)
            }
          }), [u, n, z.duration, z.current]), (0, o.useEffect)((() => {
            if (!e.current) return;
            const n = new(yn())(e.current),
              a = n => {
                s(!0), !w && k?.current?.contains(n.srcEvent.target) ? (D({
                  centerX: n.center.x
                }), S(n.srcEvent)) : D()
              },
              o = () => {
                s(!1), D()
              },
              r = n => {
                !w && k?.current?.contains(n.srcEvent.target) ? (D({
                  centerX: n.center.x
                }), S(n.srcEvent)) : D()
              };
            return n.on("pan", a), n.on("panend", o), n.on("tap", r), () => {
              n.off("pan", a), n.off("panend", o), n.off("tap", r)
            }
          }), [k?.current, e?.current, w, z?.duration]), w ? null : (0, C.jsx)("div", {
            ref: e,
            role: "slider",
            "aria-valuenow": B?.percent ?? 0,
            tabIndex: 0,
            "aria-label": a(Cn.videoplayer_progress_bar_label),
            className: [kn.progressBar, l ? kn.isDragging : ""].join(" "),
            onMouseLeave: n => l ? null : m(null),
            onMouseMove: n => S(n),
            children: (0, C.jsxs)("div", {
              className: kn.background,
              children: [(0, C.jsx)("canvas", {
                className: kn.buffer,
                ref: n
              }), (0, C.jsx)("div", {
                className: kn.time,
                style: {
                  "--accent-color": v,
                  "--percent-current": g
                }
              }), null !== c && (0, C.jsx)("div", {
                style: {
                  "--left-position": c / (E?.current?.duration ?? 1)
                },
                className: kn.timestamp,
                children: function() {
                  let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  const e = Math.max(0, Math.floor(n / 60)),
                    a = Math.max(0, Math.floor(n % 60));
                  return `${String(e).padStart(2,"0")}:${String(a).padStart(2,"0")}`
                }(c)
              })]
            })
          })
        };
      var Bn = a(15470),
        zn = {};
      zn.styleTagTransform = v(), zn.setAttributes = p(), zn.insert = m().bind(null, "head"), zn.domAPI = s(), zn.insertStyleElement = h(), d()(Bn.A, zn);
      const In = Bn.A && Bn.A.locals ? Bn.A.locals : void 0,
        En = n => {
          const e = new Date(1e3 * n),
            a = e.getUTCMinutes(),
            o = e.getSeconds();
          return `${a.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`
        },
        Dn = () => {
          const {
            state: n
          } = (0, I.Tc)(), {
            brand: e,
            timing: a
          } = n, {
            current: o,
            duration: r
          } = a;
          return (0, C.jsx)("div", {
            className: [In.time, In[e]].join(" ").trim(),
            children: `${En(o)} / ${En(r)}`
          })
        },
        Sn = n => !!n && ["button", "a", "input", "select", "textarea", "label", "[tabindex]"].some((e => n.matches(e))),
        Fn = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            type: d = "up",
            viewBox: l = "0 0 20 20",
            width: s = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            width: s,
            viewBox: l,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (() => {
              switch (d) {
                case "up":
                default:
                  return (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)("path", {
                      d: "M16.4797 3.51919C16.1544 3.19371 15.6267 3.19363 15.3012 3.51901C14.9757 3.8444 14.9757 4.37204 15.3011 4.69752C16.7071 6.10398 17.4969 8.01129 17.4969 10C17.4969 11.9888 16.7071 13.8961 15.3011 15.3025C14.9757 15.628 14.9757 16.1556 15.3012 16.481C15.6267 16.8064 16.1544 16.8063 16.4797 16.4809C18.1982 14.7619 19.1636 12.4307 19.1636 10C19.1636 7.56935 18.1982 5.23819 16.4797 3.51919Z",
                      fill: r
                    }), (0, C.jsx)("path", {
                      d: "M13.5381 6.46086C13.2127 6.13537 12.685 6.13529 12.3596 6.46068C12.0341 6.78607 12.034 7.31371 12.3594 7.63919C12.9843 8.26428 13.3353 9.11198 13.3353 9.99586C13.3353 10.8797 12.9843 11.7274 12.3594 12.3525C12.034 12.678 12.0341 13.2056 12.3596 13.531C12.685 13.8564 13.2127 13.8563 13.5381 13.5309C14.4754 12.5932 15.002 11.3217 15.002 9.99586C15.002 8.67004 14.4754 7.3985 13.5381 6.46086Z",
                      fill: r
                    }), (0, C.jsx)("path", {
                      fillRule: t,
                      clipRule: o,
                      d: "M9.9987 4.16671C9.9987 3.84637 9.81508 3.55439 9.52635 3.41562C9.23763 3.27685 8.89493 3.31587 8.64479 3.51598L4.70638 6.66671H1.66536C1.20513 6.66671 0.832031 7.0398 0.832031 7.50004V12.5C0.832031 12.9603 1.20513 13.3334 1.66536 13.3334H4.70638L8.64479 16.4841C8.89493 16.6842 9.23763 16.7232 9.52635 16.5845C9.81508 16.4457 9.9987 16.1537 9.9987 15.8334V4.16671ZM5.51928 8.15076L8.33203 5.90056V14.0995L5.51928 11.8493C5.37152 11.7311 5.18792 11.6667 4.9987 11.6667H2.4987V8.33337H4.9987C5.18792 8.33337 5.37152 8.26897 5.51928 8.15076Z",
                      fill: r
                    })]
                  });
                case "down":
                  return (0, C.jsx)("path", {
                    fillRule: t,
                    clipRule: o,
                    d: "M9.9987 4.16672C9.9987 3.84638 9.81508 3.5544 9.52636 3.41563C9.23763 3.27686 8.89493 3.31588 8.64479 3.51599L4.70638 6.66672H1.66536C1.20513 6.66672 0.832031 7.03981 0.832031 7.50005V12.5C0.832031 12.9603 1.20513 13.3334 1.66536 13.3334H4.70638L8.64479 16.4841C8.89493 16.6842 9.23763 16.7232 9.52636 16.5845C9.81508 16.4457 9.9987 16.1537 9.9987 15.8334V4.16672ZM5.51928 8.15077L8.33203 5.90057V14.0995L5.51928 11.8493C5.37152 11.7311 5.18792 11.6667 4.9987 11.6667H2.4987V8.33338H4.9987C5.18792 8.33338 5.37152 8.26898 5.51928 8.15077ZM13.5381 6.46089C13.2127 6.13541 12.685 6.13533 12.3596 6.46071C12.0341 6.7861 12.034 7.31374 12.3594 7.63923C12.9843 8.26432 13.3353 9.11201 13.3353 9.99589C13.3353 10.8798 12.9843 11.7275 12.3594 12.3526C12.034 12.678 12.0341 13.2057 12.3596 13.5311C12.685 13.8565 13.2127 13.8564 13.5381 13.5309C14.4754 12.5933 15.002 11.3217 15.002 9.99589C15.002 8.67007 14.4754 7.39853 13.5381 6.46089Z",
                    fill: r
                  });
                case "muted":
                  return (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)("path", {
                      fillRule: t,
                      clipRule: o,
                      d: "M9.52635 3.41563C9.81508 3.5544 9.9987 3.84638 9.9987 4.16672V15.8334C9.9987 16.1537 9.81508 16.4457 9.52635 16.5845C9.23763 16.7232 8.89493 16.6842 8.64479 16.4841L4.70638 13.3334H1.66536C1.20513 13.3334 0.832031 12.9603 0.832031 12.5V7.50005C0.832031 7.03981 1.20513 6.66672 1.66536 6.66672H4.70638L8.64479 3.51599C8.89493 3.31588 9.23763 3.27686 9.52635 3.41563ZM8.33203 5.90057L5.51928 8.15077C5.37152 8.26898 5.18792 8.33338 4.9987 8.33338H2.4987V11.6667H4.9987C5.18792 11.6667 5.37152 11.7311 5.51928 11.8493L8.33203 14.0995V5.90057Z",
                      fill: r
                    }), (0, C.jsx)("path", {
                      d: "M19.7546 6.91079C20.0801 7.23622 20.0801 7.76386 19.7546 8.0893L17.8439 10L19.7546 11.9108C20.0801 12.2362 20.0801 12.7639 19.7546 13.0893C19.4292 13.4147 18.9015 13.4147 18.5761 13.0893L16.6654 11.1786L14.7546 13.0893C14.4292 13.4147 13.9015 13.4147 13.5761 13.0893C13.2507 12.7639 13.2507 12.2362 13.5761 11.9108L15.4869 10L13.5761 8.0893C13.2507 7.76386 13.2507 7.23622 13.5761 6.91079C13.9015 6.58535 14.4292 6.58535 14.7546 6.91079L16.6654 8.82153L18.5761 6.91079C18.9015 6.58535 19.4292 6.58535 19.7546 6.91079Z",
                      fill: r
                    })]
                  })
              }
            })()]
          })
        },
        Nn = (0, _.defineMessages)({
          videoplayer_volume_toggle_button_label: {
            id: "videoplayer_volume_toggle_button_label",
            defaultMessage: "Mute/Unmute Toggle"
          },
          videoplayer_volume_slider_label: {
            id: "videoplayer_volume_slider_label",
            defaultMessage: "Volume"
          }
        });
      var Rn = a(47653),
        Mn = {};
      Mn.styleTagTransform = v(), Mn.setAttributes = p(), Mn.insert = m().bind(null, "head"), Mn.domAPI = s(), Mn.insertStyleElement = h(), d()(Rn.A, Mn);
      const jn = Rn.A && Rn.A.locals ? Rn.A.locals : void 0,
        Tn = () => {
          const {
            formatMessage: n
          } = (0, _.useIntl)(), [e, a] = (0, o.useState)(!1), [r, t] = (0, o.useState)(1), [i, d] = (0, o.useState)(1), [l, s] = (0, o.useState)(!1), c = (0, o.useRef)(null), {
            state: m,
            setState: g
          } = (0, I.Tc)(), {
            volume: p
          } = m, f = n => {
            if (c?.current) {
              const e = c.current.getBoundingClientRect(),
                a = (n.clientX - e.left) / e.width * 100,
                o = Math.min(1, Math.max(0, 1 * a / 100));
              A(o)
            }
          }, h = n => {
            const e = Math.min(1, Math.max(0, p + n));
            A(e)
          }, A = n => {
            d(n > .01 ? n : 0), g("volume", n > .01 ? n : 0)
          }, v = (0, o.useCallback)((n => {
            n.preventDefault(), n.stopPropagation(), f(n)
          }), []), u = n => {
            s(!1), window.removeEventListener("pointermove", v)
          };
          return (0, o.useEffect)((() => (window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u), () => {
            window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), window.removeEventListener("pointermove", v)
          })), []), (0, C.jsxs)("div", {
            className: jn.volumeControls,
            onMouseEnter: () => {
              a(!0)
            },
            onMouseLeave: () => {
              a(!1)
            },
            children: [(0, C.jsx)(cn, {
              tooltipLabel: n(Nn.videoplayer_volume_slider_label),
              tabIndex: 0,
              onClick: () => {
                p > 0 && t(p);
                const n = p > 0 ? 0 : r;
                A(n), g("volume", n)
              },
              onKeyDown: n => {
                Sn(n.target) || (n.preventDefault(), p > 0 && t(p), g("volume", p > 0 ? 0 : r))
              },
              "aria-label": n(Nn.videoplayer_volume_toggle_button_label),
              className: jn.button,
              children: 0 === p ? (0, C.jsx)(Fn, {
                type: "muted",
                className: jn.icon
              }) : (0, C.jsx)(Fn, {
                type: "up",
                className: jn.icon
              })
            }), (0, C.jsxs)("div", {
              "aria-label": n(Nn.videoplayer_volume_slider_label),
              "aria-valuenow": p,
              "aria-valuemax": 1,
              "aria-valuemin": 0,
              className: [jn.volumeBar, e || l ? jn.expand : ""].join(" ").trim(),
              tabIndex: 0,
              ref: c,
              role: "slider",
              onMouseDown: n => {
                n.preventDefault(), s(!0), window.addEventListener("pointermove", v), f(n)
              },
              onKeyDown: n => {
                if (!Sn(n.target)) switch (n.code) {
                  case "ArrowRight":
                  case "ArrowUp":
                    h(.05);
                    break;
                  case "ArrowLeft":
                  case "ArrowDown":
                    h(-.05)
                }
              },
              children: [(0, C.jsx)("div", {
                className: jn.volumeBarIndicator,
                style: {
                  "--percent-current": `${i}`
                }
              }), (0, C.jsx)("div", {
                className: jn.volumeBarBackground
              })]
            })]
          })
        };
      var Hn = a(27654),
        Pn = a(25273),
        Ln = {};
      Ln.styleTagTransform = v(), Ln.setAttributes = p(), Ln.insert = m().bind(null, "head"), Ln.domAPI = s(), Ln.insertStyleElement = h(), d()(Pn.A, Ln);
      const Gn = Pn.A && Pn.A.locals ? Pn.A.locals : void 0,
        Wn = () => (0, C.jsx)("span", {
          className: Gn.arrow
        }),
        Jn = n => {
          let {
            alt: e = "",
            className: a = "",
            fill: o = "white",
            height: r = "20",
            width: t = "20",
            viewBox: i = "0 0 20 20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            width: t,
            height: r,
            viewBox: i,
            fill: o,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              d: "M10.8346 2.49996C10.8346 2.03972 10.4615 1.66663 10.0013 1.66663C9.54106 1.66663 9.16797 2.03972 9.16797 2.49996V10.4881L6.42389 7.74404C6.09845 7.4186 5.57082 7.4186 5.24538 7.74404C4.91994 8.06947 4.91994 8.59711 5.24538 8.92255L9.41145 13.0886C9.41346 13.0906 9.41548 13.0926 9.41751 13.0946C9.49613 13.1718 9.58626 13.2303 9.68232 13.2701C9.77985 13.3105 9.88672 13.333 9.9988 13.3333L10.0013 13.3333L10.0038 13.3333C10.2302 13.3326 10.4353 13.2417 10.5851 13.0946C10.5871 13.0926 10.5891 13.0906 10.5912 13.0886L14.7572 8.92255C15.0827 8.59711 15.0827 8.06947 14.7572 7.74404C14.4318 7.4186 13.9042 7.4186 13.5787 7.74404L10.8346 10.4881V2.49996Z",
              fill: "white"
            }), (0, C.jsx)("path", {
              d: "M2.5013 11.6666C2.96154 11.6666 3.33464 12.0397 3.33464 12.5V15.8333C3.33464 16.0543 3.42243 16.2663 3.57871 16.4225C3.73499 16.5788 3.94696 16.6666 4.16797 16.6666H15.8346C16.0556 16.6666 16.2676 16.5788 16.4239 16.4225C16.5802 16.2663 16.668 16.0543 16.668 15.8333V12.5C16.668 12.0397 17.0411 11.6666 17.5013 11.6666C17.9615 11.6666 18.3346 12.0397 18.3346 12.5V15.8333C18.3346 16.4963 18.0712 17.1322 17.6024 17.6011C17.1336 18.0699 16.4977 18.3333 15.8346 18.3333H4.16797C3.50493 18.3333 2.86904 18.0699 2.4002 17.6011C1.93136 17.1322 1.66797 16.4963 1.66797 15.8333V12.5C1.66797 12.0397 2.04106 11.6666 2.5013 11.6666Z",
              fill: "white"
            })]
          })
        },
        On = (0, _.defineMessages)({
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
        });
      var Qn = a(87958),
        Vn = {};
      Vn.styleTagTransform = v(), Vn.setAttributes = p(), Vn.insert = m().bind(null, "head"), Vn.domAPI = s(), Vn.insertStyleElement = h(), d()(Qn.A, Vn);
      const Un = Qn.A && Qn.A.locals ? Qn.A.locals : void 0,
        qn = n => {
          const e = parseInt(n, 10);
          let a;
          return e >= 1080 && (a = "HD"), e >= 2160 && (a = "4K"), a
        },
        Yn = n => {
          let {
            collapsed: e = !1,
            onClick: a
          } = n;
          const {
            formatMessage: o
          } = (0, _.useIntl)(), {
            trackGa: r,
            menuStates: t
          } = (0, I.Tc)();
          return (0, C.jsx)(cn, {
            tooltipLabel: o(On.videoplayer_downloads_menu_header),
            "data-testid": "download-menu-btn",
            "aria-label": o(On.videoplayer_downloads_button_label),
            onClick: () => {
              r({
                event: "video_download"
              }), a()
            },
            onKeyDown: n => {
              Sn(n.target) || (r({
                event: "video_download"
              }), a())
            },
            hideTooltip: t.isDownloadMenuOpen,
            children: (0, C.jsxs)("span", {
              className: Un.label,
              children: [(0, C.jsx)(Jn, {
                className: Un.icon
              }), e && (0, C.jsx)("span", {
                className: Un.labelText,
                children: o(On.videoplayer_downloads_menu_header)
              })]
            })
          })
        },
        Kn = n => {
          let {
            collapsed: e = !1,
            onBackButtonClick: a,
            onOptionSelect: r
          } = n;
          const [t, i] = (0, o.useState)(0), [d, l] = (0, o.useState)([]), {
            formatMessage: s
          } = (0, _.useIntl)(), {
            state: c,
            setState: m,
            menuStates: g,
            trackGa: p
          } = (0, I.Tc)(), {
            fileIndex: f,
            videoData: h,
            videoRef: A
          } = c, {
            video: v
          } = h;
          return (0, o.useEffect)((() => {
            if (!d.length) return;
            const n = d.find((n => n.value === v?.files[f].resolution)),
              e = void 0 === n ? d.length - 1 : d.indexOf(n);
            i(e)
          }), [f, d]), (0, o.useEffect)((() => {
            if (!v?.files) return;
            const n = v.files.map((n => ({
              label: n.resolution,
              subtext: qn(n.resolution),
              value: n.resolution
            })));
            l([...n])
          }), [v]), g?.isDownloadMenuOpen ? (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)("header", {
              className: Un.header,
              children: (0, C.jsxs)("div", {
                className: Un.menuLabel,
                children: [e ? (0, C.jsx)("div", {
                  role: "button",
                  className: Un.backButton,
                  "aria-label": s(On.videoplayer_downloads_menu_back_button_label),
                  onClick: () => {
                    "function" == typeof a && a()
                  },
                  onKeyUp: () => {
                    "function" == typeof a && a()
                  },
                  tabIndex: 0,
                  children: (0, C.jsx)(Wn, {})
                }) : (0, C.jsx)(Jn, {}), s(On.videoplayer_downloads_menu_header)]
              })
            }), (0, C.jsx)("section", {
              className: Un.options,
              children: d && d.map(((n, e) => (0, C.jsxs)("button", {
                type: "button",
                "aria-label": n.label,
                className: [Un.button, t === e ? Un.selected : ""].join(" ").trim(),
                onClick: () => (async n => {
                  if (!v?.files) return;
                  const e = v.files.find((e => e.resolution === n.value));
                  if (e) {
                    v.files.indexOf(e);
                    try {
                      p({
                        event: "video_download",
                        text: e.resolution
                      });
                      const n = await fetch(e.src),
                        a = await n.blob(),
                        o = window.URL.createObjectURL(a),
                        r = document.createElement("a");
                      r.href = o, r.download = `rockstar-games-${v.game.title?.toLowerCase().replace(/\s+/g,"-")}-${v.title?.toLowerCase().replace(/\s+/g,"-")}-${e.resolution}.mp4`, document.body.appendChild(r), r.click(), document.body.removeChild(r)
                    } catch (n) {
                      console.error("An error occurred fetching video:", n.message)
                    }
                    "function" == typeof r && r()
                  }
                })(n),
                children: [(0, C.jsxs)("span", {
                  className: Un.buttonLabel,
                  children: [n.label, n.subtext && (0, C.jsx)("sup", {
                    className: Un.subtext,
                    children: n.subtext
                  })]
                }), (0, C.jsx)("div", {
                  className: Un.hoverIcon,
                  children: (0, C.jsx)(Jn, {
                    className: Un.icon
                  })
                })]
              }, n.label)))
            })]
          }) : null
        };
      var Zn = a(67010),
        $n = {};
      $n.styleTagTransform = v(), $n.setAttributes = p(), $n.insert = m().bind(null, "head"), $n.domAPI = s(), $n.insertStyleElement = h(), d()(Zn.A, $n);
      const Xn = Zn.A && Zn.A.locals ? Zn.A.locals : void 0,
        ne = () => (0, C.jsx)("span", {
          className: Xn.arrow
        }),
        ee = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            viewBox: d = "0 0 20 20",
            width: l = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            fill: r,
            height: i,
            role: "img",
            viewBox: d,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M10 8.33333C9.07953 8.33333 8.33333 9.07953 8.33333 10C8.33333 10.9205 9.07953 11.6667 10 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07953 10.9205 8.33333 10 8.33333ZM6.66667 10C6.66667 8.15905 8.15905 6.66667 10 6.66667C11.8409 6.66667 13.3333 8.15905 13.3333 10C13.3333 11.8409 11.8409 13.3333 10 13.3333C8.15905 13.3333 6.66667 11.8409 6.66667 10Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M10 1.66667C9.77899 1.66667 9.56703 1.75446 9.41074 1.91074C9.25446 2.06703 9.16667 2.27899 9.16667 2.5V2.64499C9.16495 3.07566 9.03733 3.49644 8.79953 3.85551C8.56173 4.21459 8.22413 4.49629 7.82828 4.66595C7.75781 4.69615 7.68368 4.71641 7.60801 4.7263C7.24831 4.85226 6.8611 4.88331 6.48417 4.81497C6.05 4.73624 5.64937 4.52927 5.33395 4.22072L5.32737 4.21429L5.27741 4.16426C5.20002 4.08677 5.10778 4.02498 5.00662 3.98304C4.90545 3.94111 4.79701 3.91952 4.6875 3.91952C4.57799 3.91952 4.46955 3.94111 4.36838 3.98304C4.26722 4.02498 4.17531 4.08645 4.09792 4.16393L4.09726 4.16458C4.01978 4.24198 3.95831 4.33388 3.91638 4.43505C3.87444 4.53621 3.85286 4.64465 3.85286 4.75417C3.85286 4.86368 3.87444 4.97212 3.91638 5.07328C3.95831 5.17445 4.01978 5.26636 4.09726 5.34375L4.15409 5.40058C4.46264 5.71601 4.66958 6.11667 4.7483 6.55083C4.82546 6.97636 4.77594 7.41497 4.60621 7.81231C4.45157 8.21777 4.18081 8.56889 3.82754 8.82157C3.46712 9.07935 3.03748 9.22274 2.59449 9.2331L2.575 9.23333H2.5C2.27899 9.23333 2.06703 9.32113 1.91074 9.47741C1.75446 9.63369 1.66667 9.84565 1.66667 10.0667C1.66667 10.2877 1.75446 10.4996 1.91074 10.6559C2.06703 10.8122 2.27899 10.9 2.5 10.9H2.64499C3.07566 10.9017 3.49644 11.0293 3.85551 11.2671C4.21334 11.5041 4.49433 11.8402 4.66418 12.2343C4.8409 12.6369 4.89342 13.0831 4.81497 13.5158C4.73624 13.95 4.52927 14.3506 4.22072 14.6661L4.21429 14.6726L4.16425 14.7226C4.08677 14.8 4.02498 14.8922 3.98304 14.9934C3.94111 15.0945 3.91952 15.203 3.91952 15.3125C3.91952 15.422 3.94111 15.5305 3.98304 15.6316C4.02498 15.7328 4.08645 15.8247 4.16393 15.9021L4.16458 15.9027C4.24198 15.9802 4.33388 16.0417 4.43505 16.0836C4.53622 16.1256 4.64465 16.1471 4.75417 16.1471C4.86368 16.1471 4.97212 16.1256 5.07328 16.0836C5.17445 16.0417 5.26636 15.9802 5.34375 15.9027L5.40058 15.8459C5.71601 15.5374 6.11667 15.3304 6.55083 15.2517C6.97635 15.1745 7.41497 15.2241 7.81231 15.3938C8.21777 15.5484 8.56889 15.8192 8.82157 16.1725C9.07935 16.5329 9.22274 16.9625 9.2331 17.4055L9.23333 17.425V17.5C9.23333 17.721 9.32113 17.933 9.47741 18.0893C9.63369 18.2455 9.84565 18.3333 10.0667 18.3333C10.2877 18.3333 10.4996 18.2455 10.6559 18.0893C10.8122 17.933 10.9 17.721 10.9 17.5V17.3583L10.9 17.355C10.9017 16.9243 11.0293 16.5036 11.2671 16.1445C11.5041 15.7866 11.8402 15.5056 12.2344 15.3358C12.637 15.1591 13.0832 15.1066 13.5158 15.185C13.95 15.2638 14.3506 15.4707 14.6661 15.7793L14.6726 15.7857L14.7226 15.8357C14.8 15.9132 14.8922 15.975 14.9934 16.017C15.0945 16.0589 15.203 16.0805 15.3125 16.0805C15.422 16.0805 15.5305 16.0589 15.6316 16.017C15.7328 15.975 15.8247 15.9136 15.9021 15.8361L15.9027 15.8354C15.9802 15.758 16.0417 15.6661 16.0836 15.5649C16.1256 15.4638 16.1471 15.3553 16.1471 15.2458C16.1471 15.1363 16.1256 15.0279 16.0836 14.9267C16.0417 14.8255 15.9802 14.7336 15.9027 14.6562L15.8459 14.5994C15.5374 14.284 15.3304 13.8833 15.2517 13.4492C15.1732 13.0165 15.2258 12.5703 15.4024 12.1677C15.5723 11.7736 15.8533 11.4375 16.2112 11.2005C16.5702 10.9627 16.991 10.8351 17.4217 10.8333L17.425 10.8333L17.5 10.8333C17.721 10.8333 17.933 10.7455 18.0893 10.5893C18.2455 10.433 18.3333 10.221 18.3333 10C18.3333 9.77899 18.2455 9.56703 18.0893 9.41074C17.933 9.25446 17.721 9.16667 17.5 9.16667H17.3583L17.355 9.16666C16.9243 9.16494 16.5036 9.03733 16.1445 8.79953C15.7854 8.56173 15.5037 8.22413 15.334 7.82828C15.3038 7.75781 15.2836 7.68368 15.2737 7.60801C15.1477 7.24831 15.1167 6.8611 15.185 6.48417C15.2638 6.05 15.4707 5.64938 15.7793 5.33395L15.7857 5.32738L15.8357 5.27741C15.9132 5.20002 15.975 5.10778 16.017 5.00662C16.0589 4.90545 16.0805 4.79701 16.0805 4.6875C16.0805 4.57799 16.0589 4.46955 16.017 4.36838C15.975 4.26722 15.9136 4.17531 15.8361 4.09792L15.8354 4.09726C15.758 4.01978 15.6661 3.95831 15.5649 3.91638C15.4638 3.87444 15.3553 3.85286 15.2458 3.85286C15.1363 3.85286 15.0279 3.87444 14.9267 3.91638C14.8256 3.95832 14.7336 4.01978 14.6562 4.09726L14.5994 4.15409C14.284 4.46264 13.8833 4.66958 13.4492 4.7483C13.0165 4.82676 12.5702 4.77423 12.1676 4.59751C11.7735 4.42767 11.4374 4.14667 11.2005 3.78885C10.9627 3.42977 10.8351 3.009 10.8333 2.57832L10.8333 2.575V2.5C10.8333 2.27899 10.7455 2.06703 10.5893 1.91074C10.433 1.75446 10.221 1.66667 10 1.66667ZM8.23223 0.732233C8.70107 0.263392 9.33696 0 10 0C10.663 0 11.2989 0.263392 11.7678 0.732233C12.2366 1.20107 12.5 1.83696 12.5 2.5V2.57292C12.5007 2.67812 12.5319 2.78087 12.59 2.8686C12.6484 2.95667 12.7312 3.02577 12.8283 3.06738L12.8365 3.0709C12.9355 3.1146 13.0453 3.12768 13.1518 3.10837C13.2571 3.08928 13.3544 3.0394 13.4314 2.96509L13.4771 2.91941C13.7093 2.68696 13.985 2.50257 14.2885 2.37676C14.592 2.25095 14.9173 2.18619 15.2458 2.18619C15.5744 2.18619 15.8997 2.25095 16.2032 2.37676C16.5067 2.50257 16.7824 2.68697 17.0146 2.91941C17.2467 3.15145 17.4309 3.42694 17.5566 3.73015C17.6824 4.03364 17.7471 4.35896 17.7471 4.6875C17.7471 5.01604 17.6824 5.34136 17.5566 5.64485C17.4308 5.9482 17.2465 6.22381 17.0143 6.45592L16.9683 6.50192C16.8939 6.5789 16.8441 6.67618 16.825 6.78152C16.8056 6.88801 16.8187 6.99785 16.8624 7.09686C16.8859 7.15023 16.9038 7.20577 16.9156 7.26256C16.9551 7.32066 17.0056 7.37082 17.0647 7.40996C17.1525 7.46806 17.2552 7.49934 17.3604 7.5H17.5C18.163 7.5 18.7989 7.76339 19.2678 8.23223C19.7366 8.70107 20 9.33696 20 10C20 10.663 19.7366 11.2989 19.2678 11.7678C18.7989 12.2366 18.163 12.5 17.5 12.5H17.4271C17.3219 12.5007 17.2191 12.5319 17.1314 12.59C17.0433 12.6484 16.9742 12.7312 16.9326 12.8283L16.9291 12.8365C16.8854 12.9355 16.8723 13.0453 16.8916 13.1518C16.9107 13.2571 16.9606 13.3544 17.0349 13.4314L17.0806 13.4771C17.3129 13.7092 17.4975 13.9851 17.6232 14.2885C17.7491 14.592 17.8138 14.9173 17.8138 15.2458C17.8138 15.5744 17.7491 15.8997 17.6232 16.2032C17.4974 16.5067 17.313 16.7824 17.0806 17.0146L16.4917 16.425L17.0813 17.0139C16.8491 17.2464 16.5733 17.4308 16.2699 17.5566C15.9664 17.6824 15.641 17.7471 15.3125 17.7471C14.984 17.7471 14.6586 17.6824 14.3551 17.5566C14.0518 17.4308 13.7762 17.2465 13.5441 17.0143L13.4981 16.9682C13.4211 16.8939 13.3238 16.8441 13.2185 16.825C13.112 16.8056 13.0022 16.8187 12.9031 16.8624L12.895 16.866C12.7979 16.9076 12.715 16.9767 12.6567 17.0647C12.5986 17.1525 12.5673 17.2552 12.5667 17.3604V17.5C12.5667 18.163 12.3033 18.7989 11.8344 19.2678C11.3656 19.7366 10.7297 20 10.0667 20C9.40362 20 8.76774 19.7366 8.2989 19.2678C7.83006 18.7989 7.56667 18.163 7.56667 17.5V17.437C7.56271 17.331 7.52772 17.2284 7.46595 17.142C7.40272 17.0536 7.31436 16.9863 7.21235 16.9488C7.19587 16.9427 7.17959 16.9361 7.16353 16.9291C7.06451 16.8854 6.95468 16.8723 6.84818 16.8916C6.74285 16.9107 6.64556 16.9606 6.56858 17.0349L6.52292 17.0806C6.2908 17.3129 6.01487 17.4975 5.71152 17.6232C5.40802 17.7491 5.08271 17.8138 4.75417 17.8138C4.42563 17.8138 4.10031 17.7491 3.79682 17.6232C3.49361 17.4976 3.21812 17.3134 2.98607 17.0813C2.75363 16.8491 2.56923 16.5733 2.44342 16.2699C2.31761 15.9664 2.25286 15.641 2.25286 15.3125C2.25286 14.984 2.31761 14.6586 2.44342 14.3551C2.56923 14.0517 2.75363 13.7759 2.98607 13.5437L3.03176 13.4981C3.10607 13.4211 3.15594 13.3238 3.17504 13.2185C3.19435 13.112 3.18131 13.0022 3.13761 12.9031L3.13401 12.895C3.09239 12.7979 3.02334 12.715 2.93526 12.6567C2.84753 12.5986 2.74479 12.5673 2.63958 12.5667H2.5C1.83696 12.5667 1.20107 12.3033 0.732233 11.8344C0.263392 11.3656 0 10.7297 0 10.0667C0 9.40363 0.263392 8.76774 0.732233 8.2989C1.20107 7.83006 1.83696 7.56667 2.5 7.56667H2.56303C2.66903 7.56271 2.7716 7.52772 2.85796 7.46595C2.94636 7.40272 3.0137 7.31436 3.05122 7.21235C3.05728 7.19587 3.06386 7.17959 3.07095 7.16353C3.11465 7.06451 3.12768 6.95468 3.10837 6.84818C3.08927 6.74285 3.0394 6.64557 2.96508 6.56859L2.91941 6.52292C2.68696 6.29073 2.50257 6.01501 2.37676 5.71152C2.25095 5.40802 2.18619 5.08271 2.18619 4.75417C2.18619 4.42563 2.25095 4.10031 2.37676 3.79682C2.50251 3.49346 2.68679 3.21786 2.91908 2.98574C3.15119 2.75346 3.4268 2.56917 3.73015 2.44342C4.03364 2.31761 4.35896 2.25286 4.6875 2.25286C5.01604 2.25286 5.34136 2.31761 5.64485 2.44342C5.94835 2.56923 6.22407 2.75363 6.45625 2.98607L6.50192 3.03175C6.5789 3.10607 6.67618 3.15594 6.78152 3.17504C6.88801 3.19435 6.99785 3.18131 7.09686 3.13761C7.15023 3.11406 7.20577 3.09624 7.26256 3.08435C7.32066 3.04491 7.37082 2.99436 7.40996 2.93526C7.46806 2.84753 7.49934 2.74479 7.5 2.63958V2.5C7.5 1.83696 7.76339 1.20107 8.23223 0.732233Z",
              fill: r
            })]
          })
        },
        ae = n => {
          let {
            accentColor: e = "#FCAF17",
            alt: a = "",
            className: o = "",
            height: r = "22",
            label: t,
            viewBox: i = "0 0 30 24",
            width: d = "30"
          } = n;
          return (0, C.jsxs)("svg", {
            className: o,
            height: r,
            role: "img",
            viewBox: i,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: a
            }), (0, C.jsx)("path", {
              d: "M10 2C10 0.89543 10.8954 0 12 0H26.2857C27.3903 0 28.2857 0.895431 28.2857 2V12C28.2857 13.1046 27.3903 14 26.2857 14H12C10.8954 14 10 13.1046 10 12V2Z",
              fill: e
            }), "4K" === t ? (0, C.jsxs)(C.Fragment, {
              children: [(0, C.jsx)("path", {
                d: "M17.8025 4V7.73315H18.6609V8.73595H17.8025V10H16.6393V8.73595H14V7.44663L16.5511 4H17.8025ZM15.0028 7.73315H16.6393V5.55056H16.6152L15.0028 7.73315Z",
                fill: "#121212"
              }), (0, C.jsx)("path", {
                d: "M24.021 4L21.855 6.41011L24.2857 10H22.8177L21.0207 7.24438L20.4832 7.80056V10H19.2959V4H20.4832V6.31742L21.133 5.56742L22.5048 4H24.021Z",
                fill: "#121212"
              })]
            }) : (0, C.jsxs)(C.Fragment, {
              children: [(0, C.jsx)("path", {
                d: "M17.9966 6.31742V4H19.385V10H17.9966V7.42978H15.3885V10H14V4H15.3885V6.31742H17.9966Z",
                fill: "#121212"
              }), (0, C.jsx)("path", {
                d: "M22.5476 4C25.0525 4 26 5.16292 26 6.95786C26 8.75281 25.0056 10 22.7352 10H20.371V4H22.5476ZM21.7595 8.94663H22.6039C24.0768 8.94663 24.6115 8.30618 24.6115 7C24.6115 5.70225 24.1237 5.01124 22.4162 5.01124H21.7595V8.94663Z",
                fill: "#121212"
              })]
            })]
          })
        },
        oe = n => {
          let {
            alt: e = "",
            className: a = "",
            fill: o = "none",
            height: r = "24",
            stroke: t = "white",
            strokeLinecap: i = "round",
            strokeLinejoin: d = "round",
            strokeWidth: l = "2",
            viewBox: s = "0 0 24 24",
            width: c = "24"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            fill: o,
            height: r,
            role: "img",
            viewBox: s,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              d: "M20 6L9 17L4 12",
              stroke: t,
              strokeWidth: l,
              strokeLinecap: i,
              strokeLinejoin: d
            })]
          })
        },
        re = (0, _.defineMessages)({
          videoplayer_quality_settings_button_label: {
            id: "videoplayer_quality_settings_button_label",
            defaultMessage: "Quality Settings Menu"
          }
        }),
        te = (0, _.defineMessages)({
          videoplayer_quality_settings_menu_header: {
            id: "videoplayer_quality_settings_menu_header",
            defaultMessage: "Settings"
          },
          videoplayer_quality_menu_back_button_label: {
            id: "videoplayer_quality_menu_back_button_label",
            defaultMessage: "Back"
          }
        });
      var ie = a(94083),
        de = {};
      de.styleTagTransform = v(), de.setAttributes = p(), de.insert = m().bind(null, "head"), de.domAPI = s(), de.insertStyleElement = h(), d()(ie.A, de);
      const le = ie.A && ie.A.locals ? ie.A.locals : void 0,
        se = n => {
          const e = parseInt(n, 10);
          let a;
          return e >= 1080 && (a = "HD"), e >= 2160 && (a = "4K"), a
        },
        ce = n => {
          let {
            collapsed: e = !1,
            onClick: a
          } = n;
          const [r, t] = (0, o.useState)(), {
            formatMessage: i
          } = (0, _.useIntl)(), {
            state: d,
            trackGa: l,
            menuStates: s
          } = (0, I.Tc)(), {
            accentColor: c,
            fileIndex: m,
            videoData: g
          } = d, {
            video: p
          } = g;
          return (0, o.useEffect)((() => {
            p && t(se(p.files[m]?.resolution))
          }), [m, p?.files]), (0, C.jsxs)(cn, {
            tooltipLabel: i(te.videoplayer_quality_settings_menu_header),
            "aria-label": i(re.videoplayer_quality_settings_button_label),
            onClick: () => {
              l({
                event: "video_quality"
              }), a()
            },
            onKeyUp: n => {
              Sn(n.target) || (n.preventDefault(), l({
                event: "video_quality"
              }), a())
            },
            hideTooltip: s.isQualityMenuOpen,
            children: [(0, C.jsxs)("span", {
              className: le.label,
              children: [(0, C.jsxs)("span", {
                className: le.iconAndLabelContainer,
                children: [(0, C.jsx)(ee, {
                  className: (0, k.classList)(le.icon, r ? le.labeledIcon : ""),
                  label: r
                }), r && (0, C.jsx)(ae, {
                  accentColor: c,
                  className: le.iconLabel,
                  label: r
                })]
              }), e && (0, C.jsx)("span", {
                className: le.labelText,
                children: i(te.videoplayer_quality_settings_menu_header)
              })]
            }), e && (0, C.jsx)(ne, {})]
          })
        },
        me = n => {
          let {
            collapsed: e = !1,
            onBackButtonClick: a,
            onOptionSelect: r
          } = n;
          const [t, i] = (0, o.useState)(0), [d, l] = (0, o.useState)([]), {
            formatMessage: s
          } = (0, _.useIntl)(), {
            state: c,
            setState: m,
            menuStates: g,
            trackGa: p
          } = (0, I.Tc)(), {
            fileIndex: f,
            videoData: h,
            videoRef: A
          } = c, {
            video: v
          } = h;
          return (0, o.useEffect)((() => {
            if (!d.length) return;
            const n = d.find((n => n.value === v?.files[f].resolution)),
              e = void 0 === n ? d.length - 1 : d.indexOf(n);
            i(e)
          }), [f, d]), (0, o.useEffect)((() => {
            if (!v?.files) return;
            const n = v.files.map((n => ({
              label: n.resolution,
              subtext: se(n.resolution),
              value: n.resolution
            })));
            l([...n])
          }), [v]), g?.isQualityMenuOpen ? (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsxs)("header", {
              className: le.header,
              children: [(0, C.jsxs)("div", {
                className: le.menuLabel,
                children: [e ? (0, C.jsx)("div", {
                  role: "button",
                  className: le.backButton,
                  "aria-label": s(te.videoplayer_quality_menu_back_button_label),
                  onClick: () => {
                    "function" == typeof a && a()
                  },
                  onKeyUp: () => {
                    "function" == typeof a && a()
                  },
                  tabIndex: 0,
                  children: (0, C.jsx)(Wn, {})
                }) : (0, C.jsx)(ee, {}), s(te.videoplayer_quality_settings_menu_header)]
              }), Number.isInteger(t) && d?.length && (0, C.jsx)("div", {
                className: le.selectedValue,
                children: d[t]?.label
              })]
            }), (0, C.jsx)("section", {
              className: le.options,
              children: d && d.map(((n, e) => {
                const a = `${n.label}${n.subtext?` ${n.subtext}`:""}`;
                return (0, C.jsxs)("button", {
                  type: "button",
                  "aria-label": a,
                  className: [le.button, t === e ? le.selected : ""].join(" ").trim(),
                  onClick: () => (n => {
                    if (!v?.files) return;
                    const e = v.files.find((e => e.resolution === n.value));
                    if (!e) return;
                    const a = v.files.indexOf(e);
                    p({
                      event: "video_quality",
                      text: e.resolution
                    }), m("savedTime", A?.current?.currentTime), m("fileIndex", a), "function" == typeof r && r()
                  })(n),
                  children: [(0, C.jsxs)("span", {
                    className: le.buttonLabel,
                    children: [n.label, n.subtext && (0, C.jsx)("sup", {
                      className: le.subtext,
                      children: n.subtext
                    })]
                  }), t === e && (0, C.jsx)(oe, {
                    className: le.checkmark
                  })]
                }, n.label)
              }))
            })]
          }) : null
        },
        ge = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            isFilled: i = !1,
            height: d = "20",
            width: l = "22",
            viewBox: s = "0 0 22 20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            width: l,
            height: d,
            viewBox: s,
            fill: r,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), i ? (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M19.8581 3C20.2996 3 20.6997 3.15098 21.0033 3.43922H21.0171C21.3206 3.72745 21.5 4.11176 21.5 4.5098V15.4902C21.5 15.8882 21.3206 16.2725 21.0171 16.5608C20.7135 16.849 20.2996 17 19.8719 17H2.12812C1.6866 17 1.28647 16.849 0.982917 16.5608C0.679369 16.2863 0.5 15.8882 0.5 15.4902V4.5098C0.5 4.11176 0.679369 3.72745 0.982917 3.43922C1.30026 3.15098 1.70039 3 2.12812 3H19.8581ZM8.03496 13.5689C7.35888 13.5689 6.69659 13.4042 6.11709 13.0885C5.53759 12.7728 5.04087 12.3199 4.70973 11.7846C4.37859 11.2493 4.19922 10.6179 4.19922 10.0003C4.19922 9.38262 4.37859 8.76497 4.70973 8.21595C5.05467 7.68066 5.53759 7.22772 6.11709 6.91203C6.69659 6.59635 7.35888 6.43164 8.03496 6.43164C8.71105 6.43164 9.37333 6.59635 9.95283 6.91203C10.0494 6.96693 10.146 7.03556 10.215 7.11792C10.2978 7.20027 10.353 7.29635 10.3806 7.40615C10.4082 7.51595 10.422 7.62576 10.4082 7.73556C10.3944 7.84537 10.353 7.95517 10.2978 8.05125C10.2426 8.14733 10.1598 8.22968 10.0632 8.29831C9.96663 8.36693 9.85625 8.40811 9.74587 8.43556C9.63549 8.44929 9.51131 8.46301 9.40093 8.44929C9.29055 8.43556 9.18017 8.39439 9.08358 8.33948C8.76624 8.17478 8.4075 8.0787 8.04876 8.0787C7.67622 8.0787 7.31748 8.17478 7.00014 8.33948C6.68279 8.50419 6.42064 8.75125 6.24127 9.03948C6.0619 9.32772 5.96532 9.65713 5.96532 10.0003C5.96532 10.3434 6.0619 10.6728 6.24127 10.9611C6.42064 11.2493 6.68279 11.4963 7.00014 11.6611C7.63483 12.0042 8.44889 12.0042 9.08358 11.6611C9.29055 11.5512 9.52511 11.5238 9.74587 11.5787C9.98043 11.6336 10.1736 11.7709 10.284 11.963C10.3944 12.1552 10.422 12.3885 10.3668 12.5944C10.2978 12.8003 10.1598 12.9924 9.95283 13.1022H9.93904C9.35954 13.4042 8.71105 13.5689 8.03496 13.5689ZM15.4305 13.5689C14.7544 13.5689 14.0921 13.4042 13.5126 13.0885C12.9331 12.7728 12.4364 12.3199 12.1053 11.7846C11.7741 11.2493 11.5948 10.6179 11.5948 10.0003C11.5948 9.38262 11.7741 8.76497 12.1053 8.21595C12.4502 7.68066 12.9331 7.22772 13.5126 6.91203C14.0921 6.59635 14.7544 6.43164 15.4305 6.43164C16.1066 6.43164 16.7689 6.59635 17.3484 6.91203C17.4449 6.96693 17.5415 7.03556 17.6105 7.11792C17.6933 7.20027 17.7485 7.29635 17.7761 7.40615C17.8037 7.51595 17.8175 7.62576 17.8037 7.73556C17.7899 7.84537 17.7485 7.95517 17.6933 8.05125C17.6243 8.14733 17.5553 8.22968 17.4587 8.29831C17.3622 8.36693 17.2518 8.40811 17.1414 8.43556C17.031 8.44929 16.9068 8.46301 16.7965 8.44929C16.6861 8.43556 16.5757 8.39439 16.4791 8.33948C16.1618 8.17478 15.803 8.0787 15.4443 8.0787C15.0718 8.0787 14.713 8.17478 14.3957 8.33948C14.0783 8.50419 13.8162 8.75125 13.6368 9.03948C13.4574 9.32772 13.3608 9.65713 13.3608 10.0003C13.3608 10.3434 13.4574 10.6728 13.6368 10.9611C13.8162 11.2493 14.0783 11.4963 14.3957 11.6611C15.0304 12.0042 15.8444 12.0042 16.4791 11.6611C16.6861 11.5512 16.9068 11.5238 17.1414 11.5787C17.376 11.6336 17.5553 11.7709 17.6795 11.963C17.7899 12.1552 17.8175 12.3885 17.7623 12.5944C17.6933 12.8003 17.5553 12.9787 17.3484 13.0885C16.7689 13.4042 16.1066 13.5689 15.4305 13.5689Z",
              fill: r
            }) : (0, C.jsxs)(C.Fragment, {
              children: [(0, C.jsx)("path", {
                d: "m6.12943 13.0882c.57951.3157 1.24179.4804 1.91788.4804.67608 0 1.32457-.1647 1.90407-.4666h.0138c.20692-.1098.34492-.302.41392-.5079.0552-.2059.0276-.4392-.0828-.6314-.1104-.1921-.30353-.3294-.53809-.3843-.22076-.0549-.45532-.0274-.66228.0824-.6347.3431-1.44875.3431-2.08345 0-.31734-.1647-.5795-.4118-.75887-.7-.17937-.2883-.27595-.6177-.27595-.9608 0-.34314.09658-.67255.27595-.96078.17937-.28824.44153-.5353.75887-.7.31735-.16471.67609-.26079 1.04862-.26079.35874 0 .71748.09608 1.03483.26079.09658.0549.20696.09607.31734.1098s.23456 0 .34494-.01373c.11038-.02745.22077-.06862.31739-.13725.0965-.06863.1793-.15098.2345-.24706s.0966-.20588.1104-.31569c.0138-.1098 0-.2196-.0276-.32941-.0276-.1098-.0828-.20588-.1656-.28823-.069-.08236-.1655-.15098-.26212-.20589-.5795-.31568-1.24179-.48039-1.91787-.48039-.67609 0-1.33837.16471-1.91788.48039-.5795.31569-1.06241.76863-1.40735 1.30393-.33115.54902-.51052 1.16666-.51052 1.78431 0 .6176.17937 1.249.51052 1.7843.33114.5353.82785.9882 1.40735 1.3039z"
              }), (0, C.jsx)("path", {
                d: "m13.525 13.0882c.5795.3157 1.2418.4804 1.9178.4804.6761 0 1.3384-.1647 1.9179-.4804.207-.1098.345-.2882.4139-.4941.0552-.2059.0276-.4392-.0827-.6314-.1242-.1921-.3036-.3294-.5382-.3843-.2345-.0549-.4553-.0274-.6622.0824-.6347.3431-1.4488.3431-2.0835 0-.3173-.1647-.5795-.4118-.7589-.7-.1793-.2883-.2759-.6177-.2759-.9608 0-.34314.0966-.67255.2759-.96078.1794-.28824.4416-.5353.7589-.7.3174-.16471.6761-.26079 1.0486-.26079.3588 0 .7175.09608 1.0349.26079.0965.0549.2069.09607.3173.1098s.2346 0 .3449-.01373c.1104-.02745.2208-.06862.3174-.13725s.1656-.15098.2346-.24706c.0551-.09608.0965-.20588.1103-.31569.0138-.1098 0-.2196-.0276-.32941-.0276-.1098-.0827-.20588-.1655-.28823-.069-.08236-.1656-.15098-.2622-.20589-.5795-.31568-1.2418-.48039-1.9179-.48039-.676 0-1.3383.16471-1.9178.48039-.5795.31569-1.0625.76863-1.4074 1.30393-.3311.54902-.5105 1.16666-.5105 1.78431 0 .6176.1794 1.249.5105 1.7843.3312.5353.8279.9882 1.4074 1.3039z"
              }), (0, C.jsx)("path", {
                d: "m21.0033 3.43922c-.3036-.28824-.7037-.43922-1.1452-.43922h-17.72998c-.42773 0-.82786.15098-1.145203.43922-.303548.28823-.482917.67254-.482917 1.07058v10.9804c0 .398.179369.7961.482917 1.0706.303553.2882.703683.4392 1.145203.4392h17.74378c.4277 0 .8416-.151 1.1452-.4392.3035-.2883.4829-.6726.4829-1.0706v-10.9804c0-.39804-.1794-.78235-.4829-1.07058zm-1.2832 1.20784v10.70584h-17.454v-10.70584h17.4678z"
              })]
            })]
          })
        },
        pe = n => {
          let {
            className: e = "",
            clipRule: a = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: t = "2",
            width: i = "24",
            viewBox: d = "0 0 24 2"
          } = n;
          return (0, C.jsx)("svg", {
            className: e,
            width: i,
            height: t,
            viewBox: d,
            fill: o,
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, C.jsx)("path", {
              fillRule: r,
              clipRule: a,
              d: "M-8.74227e-08 0.999999C-3.91405e-08 0.447715 0.511675 4.4732e-08 1.14286 9.99118e-08L22.8571 1.99824e-06C23.4883 2.05342e-06 24 0.447717 24 1C24 1.55229 23.4883 2 22.8571 2L1.14286 2C0.511674 2 -1.35705e-07 1.55228 -8.74227e-08 0.999999Z",
              fill: o
            })
          })
        },
        fe = (0, _.defineMessages)({
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
        });
      var he = a(75436),
        Ae = {};
      Ae.styleTagTransform = v(), Ae.setAttributes = p(), Ae.insert = m().bind(null, "head"), Ae.domAPI = s(), Ae.insertStyleElement = h(), d()(he.A, Ae);
      const ve = he.A && he.A.locals ? he.A.locals : void 0,
        ue = n => {
          let {
            collapsed: e = !1,
            onClick: a
          } = n;
          const {
            formatMessage: o
          } = (0, _.useIntl)(), {
            trackGa: r,
            state: t,
            menuStates: i
          } = (0, I.Tc)(), {
            accentColor: d,
            activeCaption: l
          } = t;
          return (0, C.jsxs)(cn, {
            tooltipLabel: o(fe.videoplayer_captions_menu_header),
            "aria-label": o(fe.videoplayer_captions_button_label),
            onClick: () => {
              r({
                event: "video_caption"
              }), a()
            },
            onKeyDown: n => {
              Sn(n.target) || (r({
                event: "video_caption"
              }), a())
            },
            hideTooltip: i.isCaptionsMenuOpen,
            children: [(0, C.jsxs)("span", {
              className: ve.label,
              children: [(0, C.jsx)(ge, {
                className: ve.icon,
                isFilled: !(!i.isCaptionsMenuOpen && !l)
              }), !!l && (0, C.jsx)(pe, {
                className: ve.underline,
                fill: d
              }), e && (0, C.jsx)("span", {
                className: ve.labelText,
                children: o(fe.videoplayer_captions_menu_header)
              })]
            }), e && (0, C.jsx)(ne, {})]
          })
        },
        be = n => {
          let {
            collapsed: e = !1,
            onBackButtonClick: a,
            onOptionSelect: r
          } = n;
          const [t, i] = (0, o.useState)([]), {
            formatMessage: d
          } = (0, _.useIntl)(), {
            state: l,
            setState: s,
            menuStates: c
          } = (0, I.Tc)(), {
            captions: m,
            activeCaption: g
          } = l;
          return (0, o.useEffect)((() => {
            if (!m) return i([]), void s("activeCaption", 0);
            const n = m.map(((n, e) => {
              const a = n.label?.replace(/\([^)]*\)/g, "").trim(),
                o = "subtitles" === n.kind;
              return {
                defaultSelected: n.isDefault,
                label: `${(0,k.getLanguageLabel)(a)} ${o?d(fe.videoplayer_captions_menu_subtitles_label):""}`.trim(),
                value: e
              }
            }));
            i([...n])
          }), [m]), c?.isCaptionsMenuOpen ? (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)("header", {
              className: ve.header,
              children: (0, C.jsxs)("div", {
                className: ve.menuLabel,
                children: [e ? (0, C.jsx)("div", {
                  role: "button",
                  className: ve.backButton,
                  "aria-label": d(fe.videoplayer_captions_menu_back_button_label),
                  onClick: () => {
                    "function" == typeof a && a()
                  },
                  onKeyUp: () => {
                    "function" == typeof a && a()
                  },
                  tabIndex: 0,
                  children: (0, C.jsx)(Wn, {})
                }) : (0, C.jsx)(ge, {}), d(fe.videoplayer_captions_menu_header)]
              })
            }), (0, C.jsx)("section", {
              className: ve.options,
              children: t && t.map(((n, e) => (0, C.jsxs)("button", {
                type: "button",
                "aria-label": n.label,
                className: [ve.button, e === g ? ve.selected : ""].join(" ").trim(),
                onClick: () => (n => {
                  const e = n.value;
                  s("showCaptions", !g === e), s("activeCaption", g === e ? 0 : e), "function" == typeof r && r()
                })(n),
                children: [(0, C.jsx)("span", {
                  className: ve.buttonLabel,
                  children: n.label
                }), g === n.value && (0, C.jsx)(oe, {
                  className: ve.checkmark
                })]
              }, n.label)))
            })]
          }) : null
        },
        ye = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            viewBox: d = "0 0 20 20",
            width: l = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            role: "img",
            viewBox: d,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M18.9213 1.07735C19.1477 1.30372 19.2243 1.63974 19.1186 1.9419L13.2853 18.6086C13.1724 18.9311 12.8741 19.152 12.5327 19.1659C12.1913 19.1798 11.876 18.984 11.7372 18.6717L8.53403 11.4646L1.32692 8.26145C1.01469 8.12268 0.8188 7.80737 0.832728 7.46597C0.846656 7.12457 1.06758 6.82627 1.39008 6.71339L18.0567 0.88006C18.3589 0.774305 18.6949 0.850988 18.9213 1.07735ZM3.9246 7.59211L9.50382 10.0718C9.69234 10.1556 9.84309 10.3063 9.92688 10.4948L12.4065 16.074L16.9737 3.02492L3.9246 7.59211Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M18.9213 1.07735C19.2467 1.40279 19.2467 1.93043 18.9213 2.25586L9.75463 11.4225C9.42919 11.748 8.90155 11.748 8.57611 11.4225C8.25068 11.0971 8.25068 10.5695 8.57611 10.244L17.7428 1.07735C18.0682 0.751916 18.5959 0.751916 18.9213 1.07735Z",
              fill: r
            })]
          })
        },
        Ce = n => {
          let {
            alt: e = "",
            className: a = "",
            fill: o = "white",
            height: r = "17",
            viewBox: t = "0 0 16 17",
            width: i = "16"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: r,
            role: "img",
            viewBox: t,
            width: i,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              d: "M14.6654 8.54073C14.6654 4.83632 11.6806 1.83331 7.9987 1.83331C4.3168 1.83331 1.33203 4.83632 1.33203 8.54073C1.33203 11.8886 3.76993 14.6635 6.95703 15.1666V10.4796H5.26433V8.54073H6.95703V7.063C6.95703 5.38195 7.95232 4.4534 9.47513 4.4534C10.2045 4.4534 10.9675 4.5844 10.9675 4.5844V6.23505H10.1268C9.29864 6.23505 9.04037 6.75209 9.04037 7.28253V8.54073H10.8893L10.5938 10.4796H9.04036V15.1666C12.2275 14.6635 14.6654 11.8886 14.6654 8.54073Z",
              fill: o
            })]
          })
        },
        we = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "17",
            viewBox: d = "0 0 16 17",
            width: l = "16"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            role: "img",
            viewBox: d,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M12.1135 7.10253C12.3861 6.82994 12.757 6.6557 13.1786 6.6557C14.7326 6.6557 15.2497 8.73809 13.8474 9.45752C13.9092 9.67953 13.9345 9.92683 13.9345 10.1629C13.9345 12.5179 11.2816 14.426 8.01051 14.426C4.75343 14.426 2.10055 12.5179 2.10055 10.1629C2.10055 9.92683 2.12304 9.69077 2.17362 9.46876C0.743205 8.75214 1.25467 6.6557 2.81717 6.6557C3.23871 6.6557 3.62371 6.82994 3.8963 7.11377C4.90237 6.41964 6.24005 5.97281 7.72667 5.91098L8.58099 2.04408C8.61752 1.90638 8.75241 1.80802 8.89012 1.84455L11.6273 2.45157C11.8128 2.09467 12.1865 1.83331 12.6193 1.83331C13.2404 1.83331 13.735 2.34197 13.735 2.94898C13.735 3.556 13.2376 4.06465 12.6193 4.06465C12.0123 4.06465 11.5177 3.57005 11.5177 2.96303L9.03906 2.4066L8.26062 5.91379C9.75848 5.96157 11.1102 6.4084 12.1135 7.10253ZM5.55724 8.50203C4.93617 8.50203 4.44157 8.99944 4.44157 9.6177C4.44157 10.2247 4.93898 10.7221 5.55724 10.7193C6.16425 10.7193 6.65885 10.2247 6.65885 9.6177C6.65885 8.99663 6.16425 8.50203 5.55724 8.50203ZM10.4639 12.2453C9.441 13.2682 6.55487 13.2682 5.53194 12.2453C5.41953 12.1469 5.41953 11.9727 5.53194 11.8603C5.6303 11.7619 5.80454 11.7619 5.9029 11.8603C6.68415 12.6612 9.27519 12.6752 10.0902 11.8603C10.1885 11.7619 10.3628 11.7619 10.4611 11.8603C10.5763 11.9727 10.5763 12.1469 10.4639 12.2453ZM9.33983 9.62051C9.33983 10.2275 9.83443 10.7221 10.4414 10.7221C11.0597 10.7221 11.5543 10.2247 11.5571 9.62051C11.5571 8.99944 11.0597 8.50484 10.4414 8.50484C9.83443 8.50484 9.33983 9.00225 9.33983 9.62051Z",
              fill: r
            })]
          })
        },
        xe = n => {
          let {
            alt: e = "",
            className: a = "",
            fill: o = "white",
            height: r = "17",
            viewBox: t = "0 0 16 17",
            width: i = "16"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: r,
            role: "img",
            viewBox: t,
            width: i,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              d: "M9.01608 7.68329L12.987 3.16669H12.046L8.59808 7.08839L5.84422 3.16669H2.66797L6.83234 9.097L2.66797 13.8334H3.609L7.25011 9.6919L10.1584 13.8334H13.3346L9.01585 7.68329H9.01608ZM7.72721 9.14925L7.30528 8.55872L3.94807 3.85985H5.39344L8.10274 7.65199L8.52468 8.24251L12.0465 13.1717H10.6011L7.72721 9.14947V9.14925Z",
              fill: o
            })]
          })
        },
        ke = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "17",
            viewBox: d = "0 0 16 17",
            width: l = "16"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            role: "img",
            viewBox: d,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M5.80604 4.36189C6.06639 4.62224 6.06639 5.04435 5.80604 5.3047L2.27744 8.83329L5.80604 12.3619C6.06639 12.6222 6.06639 13.0443 5.80604 13.3047C5.54569 13.565 5.12358 13.565 4.86323 13.3047L0.863231 9.3047C0.602881 9.04435 0.602881 8.62224 0.863231 8.36189L4.86323 4.36189C5.12358 4.10154 5.54569 4.10154 5.80604 4.36189Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M10.1953 4.36189C10.4556 4.10154 10.8777 4.10154 11.1381 4.36189L15.1381 8.36189C15.3984 8.62224 15.3984 9.04435 15.1381 9.3047L11.1381 13.3047C10.8777 13.565 10.4556 13.565 10.1953 13.3047C9.93491 13.0443 9.93491 12.6222 10.1953 12.3619L13.7239 8.83329L10.1953 5.3047C9.93491 5.04435 9.93491 4.62224 10.1953 4.36189Z",
              fill: r
            })]
          })
        },
        _e = n => {
          let {
            alt: e = "",
            className: a = "",
            fill: o = "none",
            height: r = "24",
            stroke: t = "white",
            strokeLinecap: i = "round",
            strokeLinejoin: d = "round",
            strokeWidth: l = "2",
            viewBox: s = "0 0 24 24",
            width: c = "24"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            fill: o,
            height: r,
            role: "img",
            viewBox: s,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              d: "M20 6L9 17L4 12",
              stroke: t,
              strokeWidth: l,
              strokeLinecap: i,
              strokeLinejoin: d
            })]
          })
        },
        Be = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "24",
            width: d = "24",
            viewBox: l = "0 0 24 24"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            width: d,
            height: i,
            viewBox: l,
            fill: r,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M10 9C9.44772 9 9 9.44772 9 10V20C9 20.5523 9.44772 21 10 21H20C20.5523 21 21 20.5523 21 20V10C21 9.44772 20.5523 9 20 9H10ZM7 10C7 8.34315 8.34315 7 10 7H20C21.6569 7 23 8.34315 23 10V20C23 21.6569 21.6569 23 20 23H10C8.34315 23 7 21.6569 7 20V10Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M4 3C3.45228 3 3 3.45228 3 4V14C3 14.5477 3.45228 15 4 15C4.55228 15 5 15.4477 5 16C5 16.5523 4.55228 17 4 17C2.34772 17 1 15.6523 1 14V4C1 2.34772 2.34772 1 4 1H14C15.6523 1 17 2.34772 17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.45228 14.5477 3 14 3H4Z",
              fill: r
            })]
          })
        },
        ze = (0, _.defineMessages)({
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
        });
      var Ie = a(35849),
        Ee = {};
      Ee.styleTagTransform = v(), Ee.setAttributes = p(), Ee.insert = m().bind(null, "head"), Ee.domAPI = s(), Ee.insertStyleElement = h(), d()(Ie.A, Ee);
      const De = Ie.A && Ie.A.locals ? Ie.A.locals : void 0;
      z().registerPlugin(Hn.useGSAP);
      const Se = n => {
          let {
            collapsed: e = !1,
            onClick: a
          } = n;
          const {
            formatMessage: o
          } = (0, _.useIntl)(), {
            state: r,
            trackGa: t,
            menuStates: i
          } = (0, I.Tc)(), {
            shareData: d
          } = r, {
            isMobile: l
          } = (0, k.useWindowResize)();
          return d ? (0, C.jsx)(cn, {
            tooltipLabel: o(ze.videoplayer_share_menu_header),
            "aria-label": o(ze.videoplayer_share_menu_button_label),
            type: "button",
            onClick: async () => {
              t({
                event: "video_share"
              }), i?.isShareMenuOpen && t({
                event: "video_share",
                text: "closed"
              }), l && navigator?.share ? await (navigator?.share?.(d)) : a()
            },
            hideTooltip: i.isShareMenuOpen,
            children: (0, C.jsxs)("span", {
              className: De.label,
              children: [(0, C.jsx)(ye, {
                className: De.icon
              }), e && (0, C.jsx)("span", {
                className: De.labelText,
                children: o(ze.videoplayer_share_menu_header)
              })]
            })
          }) : null
        },
        Fe = n => {
          let {
            collapsed: e = !1,
            onBackButtonClick: a
          } = n;
          const [r, t] = (0, o.useState)(!1), [i, d] = (0, o.useState)(!1), l = (0, o.useRef)(null), {
            contextSafe: s
          } = (0, Hn.useGSAP)(), {
            formatMessage: c
          } = (0, _.useIntl)(), {
            state: m,
            trackGa: g,
            menuStates: p
          } = (0, I.Tc)(), {
            shareData: f,
            timing: h
          } = m;
          if ((0, o.useEffect)((() => {
              d(!1)
            }), [r, f?.embed]), !f) return null;
          const {
            title: A,
            url: v
          } = f, u = [{
            icon: (0, C.jsx)(Ce, {}),
            name: "facebook",
            template: "https://www.facebook.com/sharer/sharer.php?u={url}"
          }, {
            icon: (0, C.jsx)(xe, {
              fill: "black"
            }),
            name: "twitter",
            template: "https://twitter.com/intent/tweet?url={url}&text={title}&via=RockstarGames"
          }, {
            icon: (0, C.jsx)(we, {}),
            name: "reddit",
            template: "http://www.reddit.com/submit?url={url}&title={title}&r=gaming"
          }], b = [{
            icon: (0, C.jsx)(ke, {
              className: De.embedIcon
            }),
            name: "embed",
            template: f.embed,
            actionText: c(ze.videoplayer_share_time_copied)
          }], y = () => Math.floor(h.current), w = n => {
            let e = "?";
            return n.includes("?") && (e = "&"), `${n}${r?`${e}start=${y()}`:""}`
          }, x = (0, C.jsxs)(C.Fragment, {
            children: [c(ze.videoplayer_share_copy), (0, C.jsx)(Be, {
              className: De.copyLinkIcon,
              fill: "black"
            })]
          }), B = (0, C.jsxs)(C.Fragment, {
            children: [c(ze.videoplayer_share_time_copied), (0, C.jsx)(_e, {
              className: De.copyLinkIcon,
              stroke: "black"
            })]
          }), E = s((n => {
            n && z().fromTo(`button[name="${n}"] span`, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              onComplete: () => {
                z().to(`button[name="${n}"] span`, {
                  delay: 2,
                  autoAlpha: 0
                })
              }
            })
          }));
          return p?.isShareMenuOpen ? (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)("header", {
              className: De.header,
              children: (0, C.jsxs)("div", {
                className: De.menuLabel,
                children: [e ? (0, C.jsx)("div", {
                  role: "button",
                  className: De.backButton,
                  "aria-label": c(ze.videoplayer_share_menu_header),
                  onClick: () => {
                    a?.()
                  },
                  onKeyUp: () => {
                    a?.()
                  },
                  tabIndex: 0,
                  children: (0, C.jsx)(Wn, {})
                }) : (0, C.jsx)(ye, {}), c(ze.videoplayer_share_menu_header)]
              })
            }), (0, C.jsxs)("section", {
              className: De.content,
              children: [(0, C.jsxs)("div", {
                className: De.socialIcons,
                children: [u.map((n => {
                  let {
                    name: e,
                    icon: a,
                    template: o
                  } = n;
                  return (0, C.jsx)("a", {
                    "aria-label": c(ze.videoplayer_share_link_button_label, {
                      name: e
                    }),
                    className: (0, k.classList)(De.buttonLink, De[e]),
                    href: o.replace("{title}", encodeURI(A)).replace("{url}", encodeURI(v)),
                    target: "_blank",
                    onClick: () => {
                      g({
                        event: "video_share",
                        text: e
                      })
                    },
                    onKeyUp: () => {
                      g({
                        event: "video_share",
                        text: e
                      })
                    },
                    rel: "noreferrer",
                    tabIndex: 0,
                    children: a
                  }, e)
                })), (0, C.jsx)("div", {
                  ref: l,
                  children: b.map((n => {
                    let {
                      name: e,
                      icon: a,
                      actionText: o
                    } = n;
                    return (0, C.jsxs)("button", {
                      className: (0, k.classList)(De.buttonLink, De[e]),
                      name: e,
                      onClick: async () => {
                        await navigator.clipboard.writeText(f.embed), E(e)
                      },
                      type: "button",
                      tabIndex: 0,
                      children: [o && (0, C.jsx)("span", {
                        className: (0, k.classList)(De.buttonActionIndicator, e),
                        children: o
                      }), a]
                    }, e)
                  }))
                })]
              }), (0, C.jsxs)("div", {
                className: De.copyLink,
                children: [(0, C.jsx)("input", {
                  value: w(f.url),
                  readOnly: !0
                }), navigator?.clipboard?.writeText && (0, C.jsx)("button", {
                  type: "button",
                  onClick: async () => {
                    await navigator.clipboard.writeText(w(f.url)), g({
                      event: "video_share",
                      text: "Share URL copied"
                    }), d(!0)
                  },
                  children: i ? B : x
                })]
              }), (0, C.jsxs)("div", {
                className: De.shareLink,
                tabIndex: 0,
                role: "checkbox",
                "aria-checked": r,
                onClick: () => t(!r),
                onKeyDown: n => {
                  " " !== n.key && "Enter" !== n.key || t(!r)
                },
                children: [(0, C.jsx)("div", {
                  className: (0, k.classList)(De.checkbox, r ? De.selected : ""),
                  children: r && (0, C.jsx)(_e, {
                    className: De.checkmark,
                    stroke: "black"
                  })
                }), (0, C.jsxs)("label", {
                  htmlFor: "shareTime",
                  children: [(0, C.jsx)(_.FormattedMessage, {
                    ...ze.videoplayer_share_time_copy
                  }), (0, C.jsx)("span", {
                    className: [De.timestamp, r ? De.selected : ""].join(" ").trim(),
                    children: (() => {
                      const n = y(),
                        e = n % 60;
                      return `${Math.floor(n/60).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`
                    })()
                  })]
                })]
              })]
            })]
          }) : null
        },
        Ne = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            viewBox: d = "0 0 20 20",
            width: l = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            width: l,
            viewBox: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M3.33218 4.16667C3.11117 4.16667 2.8992 4.25446 2.74292 4.41074C2.58664 4.56702 2.49885 4.77899 2.49885 5V6.66667C2.49885 7.1269 2.12575 7.5 1.66551 7.5C1.20528 7.5 0.83218 7.1269 0.83218 6.66667V5C0.83218 4.33696 1.09557 3.70107 1.56441 3.23223C2.03325 2.76339 2.66914 2.5 3.33218 2.5H16.6655C17.3286 2.5 17.9644 2.76339 18.4333 3.23223C18.9021 3.70107 19.1655 4.33696 19.1655 5V15C19.1655 15.663 18.9021 16.2989 18.4333 16.7678C17.9644 17.2366 17.3286 17.5 16.6655 17.5H11.6655C11.2053 17.5 10.8322 17.1269 10.8322 16.6667C10.8322 16.2064 11.2053 15.8333 11.6655 15.8333H16.6655C16.8865 15.8333 17.0985 15.7455 17.2548 15.5893C17.411 15.433 17.4988 15.221 17.4988 15V5C17.4988 4.77899 17.411 4.56702 17.2548 4.41074C17.0985 4.25446 16.8865 4.16667 16.6655 4.16667H3.33218Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M0.836833 9.91206C0.8854 9.45439 1.29579 9.12275 1.75345 9.17132C3.64917 9.37249 5.41861 10.2176 6.76661 11.5656C8.11462 12.9136 8.95969 14.683 9.16086 16.5787C9.20943 17.0364 8.87779 17.4468 8.42012 17.4953C7.96245 17.5439 7.55207 17.2123 7.5035 16.7546C7.34256 15.238 6.66651 13.8225 5.5881 12.7441C4.5097 11.6657 3.09415 10.9896 1.57757 10.8287C1.11991 10.7801 0.788265 10.3697 0.836833 9.91206Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M0.846267 13.1808C0.930534 12.7283 1.36564 12.4298 1.81809 12.5141C2.81075 12.699 3.72417 13.18 4.43815 13.894C5.15213 14.608 5.63322 15.5214 5.81809 16.5141C5.90236 16.9665 5.60388 17.4016 5.15143 17.4859C4.69897 17.5702 4.26387 17.2717 4.1796 16.8192C4.05635 16.1575 3.73563 15.5485 3.25964 15.0725C2.78365 14.5966 2.1747 14.2758 1.51293 14.1526C1.06048 14.0683 0.762 13.6332 0.846267 13.1808Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M0.83218 16.6667C0.83218 16.2064 1.20528 15.8333 1.66551 15.8333H1.67385C2.13408 15.8333 2.50718 16.2064 2.50718 16.6667C2.50718 17.1269 2.13408 17.5 1.67385 17.5H1.66551C1.20528 17.5 0.83218 17.1269 0.83218 16.6667Z",
              fill: r
            })]
          })
        },
        Re = (0, _.defineMessages)({
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
        });
      var Me = a(1648),
        je = {};
      je.styleTagTransform = v(), je.setAttributes = p(), je.insert = m().bind(null, "head"), je.domAPI = s(), je.insertStyleElement = h(), d()(Me.A, je);
      const Te = Me.A && Me.A.locals ? Me.A.locals : void 0,
        He = n => {
          let {
            collapsed: e = !1,
            onClick: a
          } = n;
          const {
            formatMessage: o
          } = (0, _.useIntl)(), {
            state: r,
            menuStates: t
          } = (0, I.Tc)(), {
            airplayAvailable: i,
            videoRef: d
          } = r, l = () => {
            if (d?.current) {
              const n = d.current;
              if (n.webkitShowPlaybackTargetPicker) n.webkitShowPlaybackTargetPicker();
              else {
                const e = o(Re.videoplayer_airplay_not_supported_error);
                n.textContent = e
              }
            } else {
              if (!d?.current) return;
              const n = o(Re.videoplayer_video_not_found_error);
              d.current.textContent = n
            }
            a()
          };
          return i ? (0, C.jsx)(cn, {
            tooltipLabel: o(Re.videoplayer_airplay_button_label),
            "aria-label": o(Re.videoplayer_airplay_button_label),
            onClick: l,
            onKeyUp: l,
            hideTooltip: t.isAirPlayMenuOpen,
            children: (0, C.jsxs)("span", {
              className: Te.label,
              children: [(0, C.jsx)(Ne, {
                className: Te.icon
              }), e && (0, C.jsx)("span", {
                className: Te.labelText,
                children: o(Re.videoplayer_airplay_button_label)
              })]
            })
          }) : null
        },
        Pe = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            viewBox: d = "0 0 20 20",
            width: l = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            role: "img",
            viewBox: d,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M8.33203 10C8.33203 9.07953 9.07822 8.33333 9.9987 8.33333C10.9192 8.33333 11.6654 9.07953 11.6654 10C11.6654 10.9205 10.9192 11.6667 9.9987 11.6667C9.07822 11.6667 8.33203 10.9205 8.33203 10Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M8.33203 4.16667C8.33203 3.24619 9.07822 2.5 9.9987 2.5C10.9192 2.5 11.6654 3.24619 11.6654 4.16667C11.6654 5.08714 10.9192 5.83333 9.9987 5.83333C9.07822 5.83333 8.33203 5.08714 8.33203 4.16667Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M8.33203 15.8333C8.33203 14.9129 9.07822 14.1667 9.9987 14.1667C10.9192 14.1667 11.6654 14.9129 11.6654 15.8333C11.6654 16.7538 10.9192 17.5 9.9987 17.5C9.07822 17.5 8.33203 16.7538 8.33203 15.8333Z",
              fill: r
            })]
          })
        },
        Le = (0, _.defineMessages)({
          videoplayer_collapsed_menu_label: {
            id: "videoplayer_collapsed_menu_label",
            defaultMessage: "Additional Settings"
          },
          videoplayer_collapsed_menu_header_label: {
            id: "videoplayer_collapsed_menu_header_label",
            defaultMessage: "More"
          }
        });
      var Ge = a(8168),
        We = {};
      We.styleTagTransform = v(), We.setAttributes = p(), We.insert = m().bind(null, "head"), We.domAPI = s(), We.insertStyleElement = h(), d()(Ge.A, We);
      const Je = Ge.A && Ge.A.locals ? Ge.A.locals : void 0;
      B.gsap.registerPlugin(Hn.useGSAP);
      const Oe = n => {
          let {
            onClick: e
          } = n;
          const {
            formatMessage: a
          } = (0, _.useIntl)(), o = () => {
            "function" == typeof e && e()
          };
          return (0, C.jsx)("button", {
            "aria-label": a(Le.videoplayer_collapsed_menu_label),
            type: "button",
            onClick: o,
            onKeyUp: o,
            tabIndex: 0,
            className: Je.button,
            children: (0, C.jsx)(Pe, {
              className: Je.icon
            })
          })
        },
        Qe = () => {
          const [n, e] = (0, o.useState)([]), [a, r] = (0, o.useState)([]), [t, i] = (0, o.useState)([]), [d, l] = (0, o.useState)(), s = (0, o.useRef)(null), {
            formatMessage: c
          } = (0, _.useIntl)(), {
            windowWidth: m
          } = (0, k.useWindowResize)(), {
            state: g,
            toggleMenu: p,
            menuStates: f
          } = (0, I.Tc)(), {
            airplayAvailable: h,
            captions: A,
            playerRef: v,
            videoData: u,
            videoRef: b
          } = g, {
            video: y
          } = u, {
            contextSafe: w
          } = (0, Hn.useGSAP)(), x = b?.current ? .5 * b.current.clientHeight : "200", z = ["downloads", "share", "airplay", "quality", "captions"], E = ["captions", "quality", "downloads", "share", "airplay"], D = w((n => {
            const e = .125,
              a = "none";
            f?.isAnyMenuOpen ? f[n] ? (0, I.CN)() ? B.gsap.timeline({
              overwrite: "auto"
            }).to(s?.current, {
              "--backdrop-opacity": 0,
              bottom: void 0 !== d ? -d : "-100%",
              duration: e,
              ease: a,
              onComplete: () => {
                s?.current?.close(), p(n, !1)
              }
            }) : B.gsap.to(s?.current, {
              duration: e,
              ease: a,
              opacity: 1,
              onComplete: () => {
                s?.current?.close(), p(n, !1)
              }
            }) : (0, I.CN)() ? B.gsap.timeline({
              onStart: () => {
                p(n, !0)
              },
              duration: e,
              ease: a,
              overwrite: "auto",
              onComplete: () => {
                l(s?.current?.clientHeight)
              }
            }).fromTo(s?.current, {
              height: void 0 !== d ? d : 0
            }, {
              height: "auto"
            }) : B.gsap.to(s?.current, {
              duration: e,
              ease: a,
              opacity: 0,
              onComplete: () => {
                s?.current?.close(), p(n, !0), B.gsap.to(s?.current, {
                  delay: .05,
                  onStart: () => {
                    s?.current?.show()
                  },
                  duration: e,
                  ease: a,
                  opacity: 1
                })
              }
            }) : (s?.current?.open && s?.current?.close(), (0, I.CN)() ? B.gsap.timeline({
              onComplete: () => {
                l(s?.current?.clientHeight)
              },
              overwrite: "auto"
            }).fromTo(s?.current, {
              "--backdrop-opacity": 0,
              bottom: "-100%"
            }, {
              onStart: () => {
                s?.current?.showModal(), p(n, !0)
              },
              "--backdrop-opacity": .8,
              bottom: 0,
              duration: e,
              ease: a
            }) : B.gsap.fromTo(s?.current, {
              opacity: 0
            }, {
              duration: e,
              ease: a,
              opacity: 1,
              onStart: () => {
                s?.current?.show(), p(n, !0)
              }
            }))
          }));
          return (0, o.useEffect)((() => {
            const n = [...z];
            if (!h) {
              const e = n.indexOf("airplay");
              e > -1 && n.splice(e, 1)
            }
            if (!A?.length) {
              const e = n.indexOf("captions");
              e > -1 && n.splice(e, 1)
            }
            i([...n])
          }), [y?.id, h, A?.length]), (0, o.useEffect)((() => {
            const n = B.gsap.context((() => {
              if (!v?.current) return;
              const n = v?.current?.clientWidth || 0,
                a = Math.floor(n / 2),
                o = Math.floor(a / 60) - 2,
                i = t.length - o,
                d = i > 1 ? i : 0,
                l = t.slice(0, d),
                s = t.slice(d, t.length),
                c = new Map([
                  ["airplay", {
                    button: (0, C.jsx)(He, {
                      collapsed: l.some((n => "airplay" === n)),
                      onClick: () => D("isAirplayMenuOpen")
                    }, "airplay_button")
                  }],
                  ["downloads", {
                    button: (0, C.jsx)(Yn, {
                      collapsed: l.some((n => "downloads" === n)),
                      onClick: () => D("isDownloadMenuOpen")
                    }, "downloads_button"),
                    content: (0, C.jsx)(Kn, {
                      collapsed: l.some((n => "downloads" === n)),
                      onBackButtonClick: () => D("isEllipsisMenuOpen"),
                      onOptionSelect: () => D("isDownloadMenuOpen")
                    }, "downloads_content")
                  }],
                  ["quality", {
                    button: (0, C.jsx)(ce, {
                      collapsed: l.some((n => "quality" === n)),
                      onClick: () => D("isQualityMenuOpen")
                    }, "quality_button"),
                    content: (0, C.jsx)(me, {
                      collapsed: l.some((n => "quality" === n)),
                      onBackButtonClick: () => D("isEllipsisMenuOpen"),
                      onOptionSelect: () => D("isQualityMenuOpen")
                    }, "quality_content")
                  }],
                  ["captions", {
                    button: (0, C.jsx)(ue, {
                      collapsed: l.some((n => "captions" === n)),
                      onClick: () => D("isCaptionsMenuOpen")
                    }, "captions_button"),
                    content: (0, C.jsx)(be, {
                      collapsed: l.some((n => "captions" === n)),
                      onBackButtonClick: () => D("isEllipsisMenuOpen"),
                      onOptionSelect: () => D("isCaptionsMenuOpen")
                    }, "captions_content")
                  }],
                  ["share", {
                    button: (0, C.jsx)(Se, {
                      collapsed: l.some((n => "share" === n)),
                      onClick: () => D("isShareMenuOpen")
                    }, "share_button"),
                    content: (0, C.jsx)(Fe, {
                      collapsed: l.some((n => "share" === n)),
                      onBackButtonClick: () => D("isEllipsisMenuOpen")
                    }, "share_content")
                  }]
                ]);
              if (s.length) {
                const n = [];
                s.forEach((e => {
                  if (c.has(e) && E.indexOf(e) > -1) {
                    const a = E.indexOf(e);
                    n[a] = c.get(e)
                  }
                })), r(n.filter((n => n)))
              } else r([]);
              !l.length && f?.isEllipsisMenuOpen ? (p("isEllipsisMenuOpen", !1), e([])) : e(l.map((n => c?.get(n)))?.filter((n => n)) || [])
            }));
            return () => n.revert()
          }), [t, m, v?.current, d, f?.isEllipsisMenuOpen, f?.isCaptionsMenuOpen, f?.isQualityMenuOpen, f?.isDownloadMenuOpen, f?.isShareMenuOpen, f?.isAirPlayMenuOpen]), (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsxs)("dialog", {
              "data-testid": "menu-handler-dialog",
              className: Je.menu,
              onClick: n => {
                if (!n.currentTarget) return;
                const e = n.currentTarget.getBoundingClientRect();
                (e.left > n.clientX || e.right < n.clientX || e.top > n.clientY || e.bottom < n.clientY) && (n.preventDefault(), n.stopPropagation(), D("isAnyMenuOpen"))
              },
              ref: s,
              style: {
                "--options-height": `${x}px`
              },
              children: [a.concat(n).map((n => n.content)), n.length > 0 && f?.isEllipsisMenuOpen && (0, C.jsxs)("div", {
                children: [(0, C.jsx)("header", {
                  className: Je.header,
                  children: (0, C.jsxs)("div", {
                    className: Je.menuLabel,
                    children: [(0, C.jsx)(Pe, {
                      className: Je.icon
                    }), (0, C.jsx)("span", {
                      children: c(Le.videoplayer_collapsed_menu_header_label)
                    })]
                  })
                }), (0, C.jsx)("div", {
                  className: Je.options,
                  children: n.map((n => n.button))
                })]
              })]
            }), n.length > 0 && (0, C.jsx)(Oe, {
              onClick: () => D("isEllipsisMenuOpen")
            }), a.length > 0 && a.map((n => n.button))]
          })
        };
      var Ve = a(52501),
        Ue = {};
      Ue.styleTagTransform = v(), Ue.setAttributes = p(), Ue.insert = m().bind(null, "head"), Ue.domAPI = s(), Ue.insertStyleElement = h(), d()(Ve.A, Ue);
      const qe = Ve.A && Ve.A.locals ? Ve.A.locals : void 0,
        Ye = () => {
          const n = (0, o.useRef)(null),
            {
              state: e,
              setState: a
            } = (0, I.Tc)(),
            {
              controlsActive: r,
              idle: t,
              playerEnded: i
            } = e,
            d = () => {
              if (n?.current) {
                const e = document.activeElement,
                  o = n?.current.querySelector(":focus") || n?.current.contains(e);
                a("controlsActive", !!o)
              }
            };
          return (0, o.useEffect)((() => (document.addEventListener("focusin", d), document.addEventListener("focusout", d), () => {
            document.removeEventListener("focusin", d), document.removeEventListener("focusout", d)
          })), []), (0, C.jsxs)("div", {
            className: (0, k.classList)(qe.controls, !r && t ? qe.controlsInactive : ""),
            style: {
              "--controls-bg-height": i ? "3.2rem" : "7rem"
            },
            ref: n,
            children: [(0, C.jsx)(_n, {}), (0, C.jsxs)("div", {
              className: qe.controlsIcons,
              children: [(0, C.jsxs)("div", {
                className: qe.left,
                children: [(0, C.jsx)(un, {}), (0, C.jsx)(Tn, {}), (0, C.jsx)(Dn, {})]
              }), (0, C.jsxs)("div", {
                className: qe.right,
                children: [(0, C.jsx)(Qe, {}), (0, C.jsx)(mn, {})]
              })]
            })]
          })
        },
        Ke = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            viewBox: d = "0 0 20 20",
            width: l = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            width: l,
            viewBox: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
              fill: r
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
              fill: r
            })]
          })
        },
        Ze = n => {
          let {
            alt: e = "",
            className: a = "",
            clipRule: o = "evenodd",
            fill: r = "white",
            fillRule: t = "evenodd",
            height: i = "20",
            viewBox: d = "0 0 20 20",
            width: l = "20"
          } = n;
          return (0, C.jsxs)("svg", {
            className: a,
            height: i,
            width: l,
            viewBox: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, C.jsx)("title", {
              children: e
            }), (0, C.jsx)("path", {
              fillRule: t,
              clipRule: o,
              d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
              fill: r
            })]
          })
        };
      var $e = a(96935),
        Xe = {};
      Xe.styleTagTransform = v(), Xe.setAttributes = p(), Xe.insert = m().bind(null, "head"), Xe.domAPI = s(), Xe.insertStyleElement = h(), d()($e.A, Xe);
      const na = $e.A && $e.A.locals ? $e.A.locals : void 0,
        ea = () => {
          const {
            state: n
          } = (0, I.Tc)(), {
            playing: e
          } = n;
          return (0, C.jsxs)("div", {
            className: na.playPauseOverlay,
            children: [(0, C.jsx)("div", {
              className: [na.iconWrapper, na.animated, `${e?na.show:""}`].join(" "),
              children: (0, C.jsx)(Ze, {
                className: na.icon,
                height: "40",
                width: "40"
              })
            }), (0, C.jsx)("div", {
              className: [na.iconWrapper, na.animated, `${e?"":na.show}`].join(" "),
              children: (0, C.jsx)(Ke, {
                className: na.icon,
                height: "40",
                width: "40"
              })
            })]
          })
        };
      var aa = a(90837),
        oa = {};
      oa.styleTagTransform = v(), oa.setAttributes = p(), oa.insert = m().bind(null, "head"), oa.domAPI = s(), oa.insertStyleElement = h(), d()(aa.A, oa);
      const ra = aa.A && aa.A.locals ? aa.A.locals : void 0,
        ta = () => {
          const {
            state: n,
            setState: e,
            trackGa: a,
            toggleMenu: r
          } = (0, I.Tc)(), {
            activeCaption: t,
            airplayAvailable: i,
            captions: d,
            currentTime: l,
            controlsActive: s,
            fileIndex: c,
            onVideoComplete: m,
            playerEnded: g,
            playing: p,
            savedTime: f,
            videoData: h,
            volume: A
          } = n, {
            video: v
          } = h, [u, b] = (0, o.useState)(null), y = (0, o.useRef)(null), w = (0, o.useRef)(null), [x, k] = (0, o.useState)("");
          (0, o.useEffect)((() => {
            const n = v?.files?.[c]?.src ?? null;
            n && b(n)
          }), [c, v]), (0, o.useEffect)((() => {
            e("videoRef", y)
          }), [y]), (0, o.useEffect)((() => {
            l && y.current && (y.current.currentTime = l, e("currentTime", null))
          }), [l, y?.current]), (0, o.useEffect)((() => {
            const n = y?.current;
            if (!n) return;
            const o = n => {
                e("meta", n)
              },
              r = () => {
                0 !== f && e("currentTime", f), e("playerEnded", !1)
              },
              t = () => {
                e("timing", {
                  duration: (Number.isNaN(n.duration) ? 0 : n.duration) ?? 0,
                  current: (Number.isNaN(n.currentTime) ? 0 : n.currentTime) ?? 0
                })
              },
              d = () => {
                e("volume", n.volume)
              },
              l = () => {
                e("playerEnded", !1)
              },
              s = () => {
                a({
                  event: "video_complete"
                }), e("playing", !1), m ? m?.() : e("playerEnded", !0)
              },
              c = () => {
                e("playing", !1), e("fullscreen", !1)
              },
              g = () => {
                e("buffered", n.buffered)
              },
              p = n => {
                i || ("available" === n.availability ? e("airplayAvailable", !0) : e("airplayAvailable", !1))
              };
            return n.addEventListener("webkitplaybacktargetavailabilitychanged", p), n.addEventListener("loadeddata", r), n.addEventListener("loadedmetadata", o), n.addEventListener("timeupdate", t), n.addEventListener("volumechange", d), n.addEventListener("seeked", l), n.addEventListener("ended", s), n.addEventListener("progress", g), n.addEventListener("webkitendfullscreen", c), () => {
              n.removeEventListener("webkitplaybacktargetavailabilitychanged", p), n.removeEventListener("loadeddata", r), n.removeEventListener("loadedmetadata", o), n.removeEventListener("timeupdate", t), n.removeEventListener("volumechange", d), n.removeEventListener("seeked", l), n.removeEventListener("ended", s), n.removeEventListener("progress", g), n.removeEventListener("webkitendfullscreen", c)
            }
          }), [p, f, y?.current]), (0, o.useEffect)((() => {
            const n = y.current,
              e = w.current;
            if (!n || !e && t || !d || 0 === d.length) return;
            const a = Array.from(n.textTracks);
            if (0 === a.length) return;
            a.forEach((n => {
              n.mode = "hidden"
            }));
            const o = () => {
                const n = a[t]?.activeCues?.[0],
                  e = n ? n.text : "";
                k(e)
              },
              r = a[t];
            return r && r.addEventListener("cuechange", o), () => {
              r && r.removeEventListener("cuechange", o)
            }
          }), [t, d]);
          const _ = () => {
            e("isVideoClicked", !0), r("isAnyMenuOpen", !1), g || ((0, I.CN)() ? (e("controlsActive", !s), e("playing", !0)) : (e("controlsActive", p), e("playing", !p)))
          };
          return (0, o.useEffect)((() => {
            const n = n => {
              const a = y?.current;
              if (!a) return;
              const o = {
                space: "Space",
                arrowRight: "ArrowRight",
                arrowLeft: "ArrowLeft"
              };
              if (Object.values(o).includes(n.code) && (n.preventDefault(), a && !g)) switch (n.code) {
                case o.space:
                  g || Sn(document.activeElement) || e("playing", !p);
                  break;
                case o.arrowRight:
                  a.currentTime += 5;
                  break;
                case o.arrowLeft:
                  a.currentTime -= 5
              }
            };
            return document.addEventListener("keydown", n, !1), () => {
              document.removeEventListener("keydown", n, !1)
            }
          }), [y?.current, p, g]), (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsxs)("video", {
              ref: y,
              autoPlay: !0,
              className: ra.rockstarVideoElement,
              src: u,
              muted: 0 === A,
              playsInline: !0,
              "x-webkit-airplay": "allow",
              onPlay: () => {
                e("playing", !0)
              },
              onPause: () => {
                e("playing", !1)
              },
              onTouchEnd: () => {
                _()
              },
              onClick: n => {
                n.preventDefault(), (0, I.CN)() || _()
              },
              crossOrigin: "anonymous",
              children: [(0, C.jsx)("source", {
                src: u ?? void 0,
                type: "video/mp4"
              }), d && d.map((n => {
                let {
                  isDefault: e,
                  label: a,
                  kind: o,
                  src: r,
                  srclang: t
                } = n;
                return (0, C.jsx)("track", {
                  label: a,
                  kind: o,
                  src: r,
                  srcLang: t,
                  default: e
                }, a)
              }))]
            }), !!t && (0, C.jsx)("div", {
              ref: w,
              className: [ra.customCaptions, s ? "" : ra.controlsInactive].join(" "),
              children: (0, C.jsx)("div", {
                dangerouslySetInnerHTML: {
                  __html: x
                }
              })
            })]
          })
        };
      var ia = a(61520),
        da = {};
      da.styleTagTransform = v(), da.setAttributes = p(), da.insert = m().bind(null, "head"), da.domAPI = s(), da.insertStyleElement = h(), d()(ia.A, da);
      const la = ia.A && ia.A.locals ? ia.A.locals : void 0;
      var sa = a(569),
        ca = {};
      ca.styleTagTransform = v(), ca.setAttributes = p(), ca.insert = m().bind(null, "head"), ca.domAPI = s(), ca.insertStyleElement = h(), d()(sa.A, ca);
      const ma = sa.A && sa.A.locals ? sa.A.locals : void 0,
        ga = () => {
          const {
            state: n
          } = (0, I.Tc)(), {
            playerEnded: e,
            videoChangeCallback: a,
            videoData: o
          } = n, {
            related: r
          } = o;
          return e && r?.results.length ? (0, C.jsx)("div", {
            className: ma.relatedVideoListWrapper,
            children: (0, C.jsx)("div", {
              className: ma.relatedVideoList,
              "aria-live": "polite",
              children: r.results.map((n => {
                return (0, C.jsx)("button", {
                  style: {
                    background: `url(${e=n.screencap||"",`${e}?im=Resize=400`}) no-repeat center/contain`
                  },
                  onClick: () => a(n.id),
                  className: ma.thumb,
                  role: "link",
                  tabIndex: 0,
                  onKeyDown: e => ((n, e) => {
                    let {
                      code: o
                    } = n;
                    "Enter" === o && a(e)
                  })(e, n.id),
                  type: "button",
                  children: (0, C.jsx)("div", {
                    className: ma.thumbVideoTitle,
                    children: n.title
                  })
                }, n.id);
                var e
              }))
            })
          }) : null
        },
        pa = () => {
          const {
            state: n,
            setState: e,
            menuStates: a,
            toggleMenu: r,
            trackGa: t
          } = (0, I.Tc)(), {
            autoplayUnmuteCheck: i,
            context: d,
            controlsActive: l,
            currentTime: s,
            fullscreen: c,
            meta: m,
            playerEnded: g,
            playing: p,
            running: f,
            videoRef: h,
            volume: A
          } = n, [v, u] = (0, o.useState)(!1), b = (0, o.useRef)(), y = (0, o.useRef)(), w = () => document?.fullscreenEnabled ?? !1, x = () => "string" == typeof document.fullscreenElement?.nodeName, k = () => {
            b.current && clearInterval(b?.current)
          }, _ = () => {
            k(), e("idle", !1), b.current = setTimeout((() => {
              v || e("idle", !0)
            }), 3e3)
          };
          return (0, o.useEffect)((() => {
            _()
          }), [v]), (0, o.useEffect)((() => {
            u(g || a?.isAnyMenuOpen || !p)
          }), [g, a?.isAnyMenuOpen, p]), (0, o.useEffect)((() => {
            e("playerRef", y)
          }), [y]), (0, o.useEffect)((() => {
            if (!y?.current || !h?.current) return;
            const n = h.current,
              e = y.current,
              {
                webkitDisplayingFullscreen: a,
                webkitSupportsFullscreen: o
              } = n,
              r = () => {
                c ? e.requestFullscreen() : document.exitFullscreen()
              };
            c ? w() && !x() ? r() : o && !a && h.current.webkitEnterFullscreen() : w() && x() ? r() : o && a && h.current.webkitExitFullscreen()
          }), [c, y, h]), (0, o.useEffect)((() => {
            const n = () => {
              _(), e("fullscreen", x()), t({
                event: "video_fullscreen",
                text: x() ? "entered" : "exited"
              })
            };
            return document.addEventListener("fullscreenchange", n), () => {
              document.removeEventListener("fullscreenchange", n)
            }
          }), [p, g]), (0, o.useEffect)((() => {
            (async () => {
              if (h?.current && m)
                if (p) try {
                  await h.current.play()
                } catch (n) {
                  e("volume", 0), e("autoplayUnmuteCheck", !0)
                } else h.current.pause()
            })()
          }), [i, m, p, h?.current]), (0, o.useEffect)((() => {
            s && h?.current && (h.current.currentTime = s)
          }), [s, h?.current]), (0, o.useEffect)((() => {
            h?.current && (h.current.volume = A)
          }), [A, h]), (0, o.useEffect)((() => {
            l || e("isAnyMenuOpen", !1)
          }), [l]), (0, o.useEffect)((() => {
            g && (e("fullscreen", !1), e("isAnyMenuOpen", !1), e("controlsActive", !0), e("progressBarState", {}))
          }), [g]), (0, o.useEffect)((() => () => {
            k()
          }), []), (0, o.useEffect)((() => {
            const n = n => {
              y.current && !y.current.contains(n.target) && r("isAnyMenuOpen", !1)
            };
            return document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n)
          }), []), (0, C.jsxs)("div", {
            role: "presentation",
            ref: y,
            "data-context": d,
            className: [la.videoplayer, g ? la.videoplayerEnded : "", f ? "" : la.videoplayerNotRunning].join(" "),
            onMouseLeave: () => {
              a?.isAnyMenuOpen || e("idle", !0)
            },
            onMouseEnter: _,
            onMouseMove: _,
            onTouchEnd: k,
            onTouchStart: k,
            children: [(0, C.jsx)(ea, {}), (0, C.jsx)(W, {}), (0, C.jsx)(ta, {}), (0, C.jsx)(Ye, {}), g && (0, C.jsx)(ga, {})]
          })
        };
      var fa = a(61299),
        ha = {};
      ha.styleTagTransform = v(), ha.setAttributes = p(), ha.insert = m().bind(null, "head"), ha.domAPI = s(), ha.insertStyleElement = h(), d()(fa.A, ha);
      const Aa = fa.A && fa.A.locals ? fa.A.locals : void 0,
        va = n => {
          let {
            id: e
          } = n;
          return (0, C.jsx)("iframe", {
            className: Aa.youtubeEmbed,
            src: `https://www.youtube.com/embed/${e}?autoplay=1`,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            title: "Rockstar Games on YouTube"
          })
        };
      var ua = a(68621),
        ba = a(52542);
      const ya = document.getElementsByTagName("html")[0].lang ?? "en_us",
        Ca = n => {
          let {
            aspectRatio: e = 16 / 9,
            autoplay: a = !1,
            context: i = "site",
            id: d,
            hero: l = !1,
            resolution: s = "_auto",
            wrapper: c = !0,
            videoChangeCallback: m,
            onVideoComplete: g,
            locale: p = ya,
            titleCrop: f
          } = n;
          const {
            state: h,
            setState: A,
            trackGa: v
          } = (0, I.Tc)(), [u] = (0, r.useSearchParams)(), b = (0, I.zY)({
            id: d.toString(),
            locale: p
          }), {
            autoplay: y,
            brand: w,
            fileIndex: k,
            running: B,
            videoData: z
          } = h, {
            loading: E,
            video: D
          } = z, S = (0, r.useNavigate)(), {
            formatMessage: F
          } = (0, _.useIntl)(), {
            currentSite: N
          } = (0, t.A)();
          return (0, o.useEffect)((() => {
            A("onVideoComplete", g)
          }), [g]), (0, o.useEffect)((() => {
            if (!D) return;
            const {
              files: n,
              tracks: e
            } = D, a = n.findIndex((n => n.resolution === s)), o = n.findIndex((n => n.default));
            A("fileIndex", -1 !== a ? a : -1 !== o ? o : 0), A("captions", function(n, e) {
              if (!n || !Array.isArray(n) || !n.length) return [];
              const a = [];
              n.forEach((n => {
                let {
                  lang: e,
                  captions: o,
                  subtitles: r
                } = n;
                r && "0" !== r && a.push({
                  isDefault: !1,
                  kind: "subtitles",
                  label: e,
                  srclang: e,
                  src: r
                }), o && "0" !== o && a.push({
                  isDefault: !1,
                  kind: "captions",
                  label: e,
                  srclang: e,
                  src: o
                })
              }));
              const o = a.sort(((n, e) => n.label?.localeCompare(e.label)));
              return o.unshift({
                isDefault: !0,
                kind: "captions",
                label: e,
                srclang: "",
                src: ""
              }), [...o]
            }(e, F(fe.videoplayer_captions_menu_off_label))), A("accentColor", (0, I.q8)(D?.game?.title_slug ?? ""))
          }), [s, D]), (0, o.useEffect)((() => {
            if (!D) return;
            let n, e, a = p.split("_")[1] ?? "";
            "hans" === a && (a = "zh");
            const o = "en_us" !== p && a ? `${a}/` : "";
            "clr" === w ? (n = "https://circolocorecords.com", e = n) : (e = `https://${N?.subDomain??"www"}.rockstargames.com`, n = `${e}/${o}videos/${D.id}?resolution=${D.files[k]?.resolution}&embed`);
            const r = `${D.game.title}: ${D.title}`,
              t = {
                allow: "autoplay; fullscreen; picture-in-picture; clipboard-read; clipboard-write;",
                src: `https://${N?.subDomain}.rockstargames.com/videoplayer/?id=${D.id}&locale=${p}&resolution=${D.files[k]?.resolution}&embed`,
                style: "aspect-ratio: 16 / 9; width: 100%; border: none;",
                title: `Rockstar Games Video: ${r}`
              };
            let i = "<iframe";
            Object.keys(t).map((n => {
              i += ` ${n}="${t[n]}"`
            })), i += "></iframe>";
            const d = {
              title: r,
              text: D.description,
              url: n,
              embed: i,
              brandUrl: e
            };
            A("shareData", d)
          }), [w, k, D]), (0, o.useEffect)((() => {
            A("videoChangeCallback", m || (n => {
              S(`../videos/${n}`)
            }))
          }), [m]), (0, o.useEffect)((() => {
            const n = u.get("start") ?? 0;
            A("currentTime", Number(n))
          }), [d, u.get("start")]), (0, o.useEffect)((() => {
            B && A("autoplay", !0)
          }), [B]), (0, o.useEffect)((() => {
            const {
              video: n
            } = b;
            923 === n?.game?.id && A("brand", "clr");
            const e = a || y || !1;
            A("controlsActive", !0), A("fullscreen", !1), A("idle", !1), A("meta", null), A("playerEnded", !1), A("playing", e), A("progressBarState", {}), A("isAnyMenuOpen", !1), A("shareOpen", !1), A("videoId", d), e && (A("autoplay", !0), A("running", !0)), A("videoData", b)
          }), [JSON.stringify(b)]), (0, o.useEffect)((() => {
            y && !E && D && D.id === d && v({
              event: "video_play_auto"
            })
          }), [y, E, D, d]), (0, o.useEffect)((() => {
            A("aspectRatio", e)
          }), [e]), (0, o.useEffect)((() => {
            A("context", i)
          }), [i]), (0, o.useEffect)((() => {
            A("resolution", s)
          }), [s]), !D || E ? (0, C.jsx)($.A, {
            hero: l,
            wrapper: c,
            titleCrop: f,
            children: (0, C.jsx)(Z.A, {})
          }) : ["gtaosession", "gtaostream", "community"].includes(D.groupType) || D.youtubeOnly ? D.agegated ? (0, C.jsx)(x.AgeGate, {
            children: (0, C.jsx)(va, {
              id: D.youtubeId
            })
          }) : (0, C.jsx)(va, {
            id: D.youtubeId
          }) : y || B ? D.agegated ? (0, C.jsx)($.A, {
            hero: l,
            wrapper: c,
            titleCrop: f,
            children: (0, C.jsx)(x.AgeGate, {
              options: {
                bgImg: D.screencap
              },
              ga: {
                element_placement: "video player"
              },
              children: (0, C.jsx)(pa, {})
            })
          }) : (0, C.jsx)($.A, {
            hero: l,
            wrapper: c,
            titleCrop: f,
            children: (0, C.jsx)(pa, {})
          }) : (0, C.jsx)($.A, {
            hero: l,
            wrapper: c,
            titleCrop: f,
            children: (0, C.jsx)(K, {})
          })
        },
        wa = (0, C.jsx)(_.FormattedMessage, {
          ...ua.A.videoplayer_error
        }),
        xa = (0, _.withIntl)((0, k.withGtmTracking)(function(n) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(o) {
            return (0, C.jsx)(w, {
              header: e,
              hidden: a,
              children: (0, C.jsx)(n, {
                ...o
              })
            })
          }
        }((n => (0, C.jsx)(I.M8, {
          children: (0, C.jsx)(Ca, {
            ...n
          })
        })), wa)), ba)
    },
    68621: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => o
      });
      const o = (0, a(81788).defineMessages)({
        videoplayer_unmute_tap: {
          id: "videoplayer_unmute_tap",
          defaultMessage: "Tap anywhere to unmute."
        },
        videoplayer_unmute_click: {
          id: "videoplayer_unmute_click",
          defaultMessage: "Click anywhere to unmute."
        },
        videoplayer_error: {
          id: "videoplayer_error",
          defaultMessage: "Something went wrong with the video player."
        },
        videoplayer_playlist_active_badge: {
          id: "videoplayer_playlist_active_badge",
          defaultMessage: "Now Playing"
        }
      })
    },
    41497: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => r
      });
      var o = a(73855);
      const r = n => {
        let {
          alt: e = "",
          className: a = "",
          clipRule: r = "evenodd",
          fill: t = "white",
          fillRule: i = "evenodd",
          height: d = "20",
          viewBox: l = "0 0 20 20",
          width: s = "20"
        } = n;
        return (0, o.jsxs)("svg", {
          className: a,
          height: d,
          width: s,
          viewBox: l,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, o.jsx)("title", {
            children: e
          }), (0, o.jsx)("path", {
            fillRule: i,
            clipRule: r,
            d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
            fill: t
          })]
        })
      }
    },
    21620: (n, e, a) => {
      "use strict";
      a.d(e, {
        M8: () => m,
        q8: () => A,
        CN: () => h,
        zY: () => f,
        Tc: () => g
      });
      var o = a(62229),
        r = a(81569),
        t = a(95966),
        i = a(2918),
        d = a(73855);
      const l = {
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
        s = {},
        c = (0, t.setContextItem)({
          context: (0, o.createContext)({}),
          key: "videoplayer"
        }),
        m = n => {
          let {
            children: e
          } = n;
          const [a] = (0, o.useState)((0, r.v4)()), m = (n => {
            let {
              id: e
            } = n;
            const a = s[e] ?? (s[e] = (0, t.makeVar)(l)),
              r = (n, e) => a({
                ...a(),
                [n]: e
              }),
              d = (0, t.useReactiveVar)(a),
              c = (0, i.useGtmTrack)(),
              m = (0, t.useLocale)(),
              {
                videoData: g
              } = d,
              [p, f] = (0, o.useState)({
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
              h = (0, o.useCallback)((n => {
                const {
                  video: e
                } = g;
                if (!e || !c) return;
                const {
                  id: a,
                  title: o
                } = e;
                c.track({
                  video_id: a,
                  video_title: o,
                  video_type: g?.video?.groupType,
                  video_language: m,
                  element_placement: "video player",
                  ...n
                })
              }), [m, g?.video?.id]);
            return {
              state: d,
              setState: r,
              menuStates: p,
              toggleMenu: (n, e) => {
                const a = {
                  ...p
                };
                for (const n in a) Object.hasOwn(a, n) && (a[n] = !1);
                if (n && Object.hasOwn(a, n)) {
                  const o = void 0 === e ? !p[n] : e;
                  o && (a[n] = o), a.isAnyMenuOpen = o
                }
                f(a)
              },
              replay: () => {
                r("playerEnded", !1), r("playing", !0), r("currentTime", 0), r("timing", {
                  current: 0,
                  duration: 0
                })
              },
              trackGa: h,
              trackGaQuartile: (n, e, a) => {
                const {
                  video: o
                } = g;
                if (!o || !c) return;
                const {
                  id: r,
                  title: t
                } = o;
                c.track({
                  event: n,
                  video_id: r,
                  video_title: t,
                  video_type: g?.video?.groupType,
                  video_language: m,
                  video_length: e,
                  video_percentage: Math.floor(a ?? 0),
                  element_placement: "video player"
                })
              }
            }
          })({
            id: a
          });
          return e ? (0, d.jsx)(c.Provider, {
            value: m,
            children: e
          }) : null
        },
        g = () => (0, o.useContext)(c);
      var p = a(4633);
      const f = n => {
          let {
            id: e,
            locale: a
          } = n;
          const [r, i] = (0, o.useState)(), [d, l] = (0, o.useState)(), [s, c] = (0, o.useState)(), {
            data: m,
            loading: g
          } = (0, t.useQuery)(p.VideoData, {
            variables: r,
            skip: !r || !Object.entries(r).length
          });
          return (0, o.useEffect)((() => {
            if (!e) return;
            const n = {
              id: e
            };
            a && (n.locale = a), i(n)
          }), [e, a]), (0, o.useEffect)((() => {
            m?.video && l(m.video), m?.related && c(m.related)
          }), [m]), {
            loading: g,
            related: s,
            video: d
          }
        },
        h = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
        A = n => n.includes("reddead") || n.includes("rdr") ? "#CC0000" : "#FCAF17"
    },
    39460: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerd5c408a8b618087ef4bb452f96526b2b{grid-gap:1rem;align-content:center;background:#000;display:grid;grid-auto-rows:max-content;height:100%;justify-items:center;padding:.5rem}.rockstargames-modules-core-videoplayerd5c408a8b618087ef4bb452f96526b2b,.rockstargames-modules-core-videoplayerd5c408a8b618087ef4bb452f96526b2b h1{color:#fff}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/error/ErrorBoundarySimple/index.less"],
        names: [],
        mappings: "AAAA,wEAQI,aAAA,CAFA,oBAAA,CAHA,eAAA,CAEA,YAAA,CAIA,0BAAA,CARA,WAAA,CAMA,oBAAA,CALA,aAQJ,CAVA,mJAII,UASJ",
        sourcesContent: [".errorMsg {\n    height: 100%;\n    padding: 0.5rem;\n    background: black;\n    color: white;\n    display: grid;\n    align-content: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    grid-auto-rows: max-content;\n    h1 {\n        color: white;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        errorMsg: "rockstargames-modules-core-videoplayerd5c408a8b618087ef4bb452f96526b2b"
      };
      const d = i
    },
    79129: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => A
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t),
        d = a(79908),
        l = a.n(d),
        s = new URL(a(40382), a.b),
        c = new URL(a(88700), a.b),
        m = new URL(a(50693), a.b),
        g = i()(r()),
        p = l()(s),
        f = l()(c),
        h = l()(m);
      g.push([n.id, `.rockstargames-modules-core-videoplayera44dd36dc6f88833dd0e6b34e04d0339{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayera44dd36dc6f88833dd0e6b34e04d0339 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayera44dd36dc6f88833dd0e6b34e04d0339:focus,.rockstargames-modules-core-videoplayera44dd36dc6f88833dd0e6b34e04d0339:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayera44dd36dc6f88833dd0e6b34e04d0339.rockstargames-modules-core-videoplayerf01cd854c3b3c9d60475431939d339fa{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayera44dd36dc6f88833dd0e6b34e04d0339.rockstargames-modules-core-videoplayerf01cd854c3b3c9d60475431939d339fa img{filter:invert()}.rockstargames-modules-core-videoplayerf5797419bd63cef5e61c3e4908183d85{align-items:center;background:transparent;border:none;cursor:pointer;display:flex;height:100%;justify-content:center;left:0;outline-offset:-2px;padding:0;position:absolute;top:0;transition:all .3s ease-in-out;width:100%}.rockstargames-modules-core-videoplayerf5797419bd63cef5e61c3e4908183d85:hover .rockstargames-modules-core-videoplayera16206bf2139e9fceb1780abffe3450c{background:rgba(0,0,0,.8)}.rockstargames-modules-core-videoplayerf5797419bd63cef5e61c3e4908183d85:hover .rockstargames-modules-core-videoplayerd8d9ad003eb5b094a636f36119a162cf{opacity:1}.rockstargames-modules-core-videoplayera16206bf2139e9fceb1780abffe3450c{align-items:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(0,0,0,.5);border:none;border-radius:var(--border-radius-lg,16px);display:flex;height:4rem;justify-content:center;position:relative;transform:scale(1);transition:all .3s ease-in-out;width:4rem;z-index:1}@media (min-width:1024px){.rockstargames-modules-core-videoplayera16206bf2139e9fceb1780abffe3450c{height:8rem;width:8rem}}.rockstargames-modules-core-videoplayerd8d9ad003eb5b094a636f36119a162cf{height:45%;opacity:.8;transform:translateX(5%);transition:all .3s ease-in-out;width:45%}.rockstargames-modules-core-videoplayerbcddafc62b22367f3f80d384b608b66c,.rockstargames-modules-core-videoplayerf7486bdb41159931158f4f4eb0bafaaf{background-position:50%;background-repeat:no-repeat;left:50%;max-width:8rem;position:absolute;top:50%;transform:translate(-50%,-50%);transition:background-size .2s;width:12vw;z-index:1}.rockstargames-modules-core-videoplayerf7486bdb41159931158f4f4eb0bafaaf{background-image:url(${p}),url(${f});background-size:var(--player-bigplay-active-size,0),var(--player-bigplay-inactive-size,100%)}.rockstargames-modules-core-videoplayerf7486bdb41159931158f4f4eb0bafaaf:after{content:"";display:block;padding-top:90.90909091%}.rockstargames-modules-core-videoplayerbcddafc62b22367f3f80d384b608b66c{background-image:url(${h}),url(${f});background-size:var(--player-bigplay-active-size,0),var(--player-bigplay-inactive-size,100%)}.rockstargames-modules-core-videoplayerbcddafc62b22367f3f80d384b608b66c:after{content:"";display:block;padding-top:90.90909091%}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/ControlBigPlay/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CAhEA,wEAGI,kBAAA,CACA,sBAAA,CACA,WAAA,CAGA,cAAA,CAPA,YAAA,CASA,WAAA,CARA,sBAAA,CAWA,MAAA,CANA,mBAAA,CADA,SAAA,CAKA,iBAAA,CACA,KAAA,CAEA,8BAAA,CALA,UAuEJ,CAhEI,sJAEQ,yBAiEZ,CAnEI,sJAMQ,SAgEZ,CA3DA,wEAGI,kBAAA,CACA,kCAAA,CAAA,0BAAA,CACA,yBAAA,CACA,WAAA,CACA,0CAAA,CANA,YAAA,CAYA,WAAA,CAXA,sBAAA,CAMA,iBAAA,CAEA,kBAAA,CACA,8BAAA,CACA,UAAA,CAHA,SAiEJ,CC9BI,0BAAA,wED3BI,WAAA,CADA,UA+DN,CACF,CA3DA,wEAEI,UAAA,CACA,UAAA,CACA,wBAAA,CACA,8BAAA,CAJA,SAiEJ,CA1DA,gJAKI,uBAAA,CACA,2BAAA,CAGA,QAAA,CADA,cAAA,CANA,iBAAA,CAQA,OAAA,CACA,8BAAA,CAPA,8BAAA,CAGA,UAAA,CAJA,SAoEJ,CAzDA,wEAGI,gGAAA,CACA,4FAyDJ,CAvDI,8EACI,UAAA,CACA,aAAA,CACA,wBAyDR,CArDA,wEAGI,gGAAA,CACA,4FAqDJ,CAnDI,8EACI,UAAA,CACA,aAAA,CACA,wBAqDR",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlBigPlayButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: transparent;\n    border: none;\n    padding: 0;\n    outline-offset: -2px;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s all ease-in-out;\n\n    &:hover {\n        .controlBigPlayIcon {\n            background: rgba(0, 0, 0, 0.8);\n        }\n\n        .icon {\n            opacity: 1;\n        }\n    }\n}\n\n.controlBigPlayIcon {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: blur(10px);\n    background: rgba(0, 0, 0, 0.5);\n    border: none;\n    border-radius: var(--border-radius-lg, 16px);\n    position: relative;\n    z-index: 1;\n    transform: scale(1);\n    transition: 0.3s all ease-in-out;\n    width: 4rem;\n    height: 4rem;\n\n    .lgMin({\n        width: 8rem;\n        height: 8rem;\n    });\n}\n\n.icon {\n    width: 45%;\n    height: 45%;\n    opacity: 0.8;\n    transform: translateX(5%);\n    transition: 0.3s all ease-in-out;\n}\n\n.controlBigPlay,\n.clrBigPlay {\n    position: absolute;\n    z-index: 1;\n    transition: background-size 200ms;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 12vw;\n    max-width: 8rem;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.controlBigPlay {\n    @src: './img/playicon-0.svg';\n    @srcActive: './img/playicon-1.svg';\n    background-image: data-uri(@srcActive), data-uri(@src);\n    background-size: var(--player-bigplay-active-size, 0%),\n        var(--player-bigplay-inactive-size, 100%);\n    &:after {\n        content: '';\n        display: block;\n        padding-top: (image-height(@src) / image-width(@src) * 100%);\n    }\n}\n\n.clrBigPlay {\n    @src: './img/playicon-0.svg';\n    @srcActive: './img/playicon-2.svg';\n    background-image: data-uri(@srcActive), data-uri(@src);\n    background-size: var(--player-bigplay-active-size, 0%),\n        var(--player-bigplay-inactive-size, 100%);\n    &:after {\n        content: '';\n        display: block;\n        padding-top: (image-height(@src) / image-width(@src) * 100%);\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), g.locals = {
        pillBtn: "rockstargames-modules-core-videoplayera44dd36dc6f88833dd0e6b34e04d0339",
        selected: "rockstargames-modules-core-videoplayerf01cd854c3b3c9d60475431939d339fa",
        controlBigPlayButton: "rockstargames-modules-core-videoplayerf5797419bd63cef5e61c3e4908183d85",
        controlBigPlayIcon: "rockstargames-modules-core-videoplayera16206bf2139e9fceb1780abffe3450c",
        icon: "rockstargames-modules-core-videoplayerd8d9ad003eb5b094a636f36119a162cf",
        clrBigPlay: "rockstargames-modules-core-videoplayerbcddafc62b22367f3f80d384b608b66c",
        controlBigPlay: "rockstargames-modules-core-videoplayerf7486bdb41159931158f4f4eb0bafaaf"
      };
      const A = g
    },
    58116: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerbd453eb9633925a3cf21d24f220cb103{--padding-sides:1rem;--padding-top-bottom:1rem;align-items:flex-start;cursor:pointer;display:flex;height:100%;justify-content:flex-start;width:100%}.rockstargames-modules-core-videoplayerbd453eb9633925a3cf21d24f220cb103:active,.rockstargames-modules-core-videoplayerbd453eb9633925a3cf21d24f220cb103:focus{--player-bigplay-active-size:100%;--player-bigplay-inactive-size:1%}@media (hover:hover){.rockstargames-modules-core-videoplayerbd453eb9633925a3cf21d24f220cb103:hover{--player-bigplay-active-size:100%;--player-bigplay-inactive-size:1%}}", "", {
        version: 3,
        sources: ["webpack://./src/components/EmbedState/index.less"],
        names: [],
        mappings: "AAAA,wEACI,oBAAA,CACA,yBAAA,CAIA,sBAAA,CAEA,cAAA,CAJA,YAAA,CAOA,WAAA,CANA,0BAAA,CAKA,UADJ,CAII,6JAEI,iCAAA,CACA,iCAFR,CAII,qBACI,8EACI,iCAAA,CACA,iCAFV,CACF",
        sourcesContent: [".embeddedPlayer {\n    --padding-sides: 1rem;\n    --padding-top-bottom: 1rem;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n\n    cursor: pointer;\n\n    width: 100%;\n    height: 100%;\n\n    &:active,\n    &:focus {\n        --player-bigplay-active-size: 100%;\n        --player-bigplay-inactive-size: 1%;\n    }\n    @media (hover: hover) {\n        &:hover {\n            --player-bigplay-active-size: 100%;\n            --player-bigplay-inactive-size: 1%;\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        embeddedPlayer: "rockstargames-modules-core-videoplayerbd453eb9633925a3cf21d24f220cb103"
      };
      const d = i
    },
    3022: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerf07343afbfb17e068081239e0feb7ce6{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerf07343afbfb17e068081239e0feb7ce6 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerf07343afbfb17e068081239e0feb7ce6:focus,.rockstargames-modules-core-videoplayerf07343afbfb17e068081239e0feb7ce6:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerf07343afbfb17e068081239e0feb7ce6.rockstargames-modules-core-videoplayerdf5739b361e5ac853630003f0c264462{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerf07343afbfb17e068081239e0feb7ce6.rockstargames-modules-core-videoplayerdf5739b361e5ac853630003f0c264462 img{filter:invert()}.rockstargames-modules-core-videoplayere6292f37e9e73118d04aef857cfa00f6{background:linear-gradient(180deg,hsla(0,0%,7%,.9),hsla(0,0%,7%,.5) 40.12%,hsla(0,0%,7%,.24) 57.9%,hsla(0,0%,7%,.13) 68.35%,hsla(0,0%,7%,.01) 86.65%,hsla(0,0%,7%,0));color:var(--white-100,#fff);font-family:HelveticaNowText;font-size:.75rem;font-style:normal;font-weight:400;height:auto;line-height:1.2;padding:var(--padding-sm,16px) var(--padding-sm,16px);position:relative;transform:translateY(0);transition:transform .3s;width:100%;z-index:1}@media (min-width:768px){.rockstargames-modules-core-videoplayere6292f37e9e73118d04aef857cfa00f6{font-size:1rem}}[data-context=newswire-article] .rockstargames-modules-core-videoplayere6292f37e9e73118d04aef857cfa00f6{display:none}.rockstargames-modules-core-videoplayerad77b653301cafe0158055c023939c9f{align-items:center;display:flex;flex-direction:row;gap:1rem;width:100%;width:calc(100% - var(--videoplayer-info-crop));z-index:1}.rockstargames-modules-core-videoplayerad77b653301cafe0158055c023939c9f a.rockstargames-modules-core-videoplayere6648f376b683a2bef66da3220c7aabe{display:flex;margin:0!important;pointer-events:all}.rockstargames-modules-core-videoplayerf15eb598ba4a434302b080a9b42b5aea{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden}.rockstargames-modules-core-videoplayere657a665ecf4c2992cd1779a9621f64b{transform:translateY(-100%)}.rockstargames-modules-core-videoplayere642e0e1cd810bfc5336dd55e5cef5e7{height:2rem;overflow:hidden}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/Info/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CAhEA,wEACI,qKAAA,CASA,2BAAA,CACA,4BAAA,CAIA,gBAAA,CAHA,iBAAA,CACA,eAAA,CASA,WAAA,CARA,eAAA,CAEA,qDAAA,CAEA,iBAAA,CAMA,uBAAA,CACA,wBAAA,CAJA,UAAA,CAFA,SA6DJ,CC3BI,yBAAA,wEDzBI,cAwDN,CACF,CAtDI,wGACI,YAwDR,CApDA,wEAGI,kBAAA,CAFA,YAAA,CACA,kBAAA,CAEA,QAAA,CAIA,UAAA,CACA,+CAAA,CAHA,SAuDJ,CAjDA,iJACI,YAAA,CAKA,kBAAA,CACA,kBA+CJ,CA5CA,wEAEI,2BAAA,CACA,oBAAA,CAFA,mBAAA,CAGA,eA8CJ,CA3CA,wEACI,2BA6CJ,CA1CA,wEAGI,WAAA,CAFA,eA6CJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.info {\n    background: linear-gradient(\n        180deg,\n        rgba(18, 18, 18, 0.9) 0%,\n        rgba(18, 18, 18, 0.5) 40.12%,\n        rgba(18, 18, 18, 0.24) 57.9%,\n        rgba(18, 18, 18, 0.13) 68.35%,\n        rgba(18, 18, 18, 0.01) 86.65%,\n        rgba(18, 18, 18, 0) 100%\n    );\n    color: var(--white-100, #fff);\n    font-family: HelveticaNowText;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.2;\n    font-size: 0.75rem;\n    padding: var(--padding-sm, 16px) var(--padding-sm, 16px);\n\n    position: relative;\n    z-index: 1;\n\n    width: 100%;\n    height: auto;\n\n    transform: translateY(0);\n    transition: transform 0.3s;\n\n    .md({\n        font-size: 1rem;\n    });\n\n    [data-context='newswire-article'] & {\n        display: none;\n    }\n}\n\n.title {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 1rem;\n\n    z-index: 1;\n\n    width: 100%;\n    width: calc(100% - var(--videoplayer-info-crop));\n}\n\n.title a.icon {\n    display: flex;\n\n    // !important needed here because of\n    // of a rule targetting <a>'s with a higher prio\n    // on some newswire pages fudging everything\n    margin: 0 !important;\n    pointer-events: all;\n}\n\n.titleText {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n}\n\n.hidden {\n    transform: translateY(-100%);\n}\n\n.brand {\n    overflow: hidden;\n\n    height: 2rem;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerf07343afbfb17e068081239e0feb7ce6",
        selected: "rockstargames-modules-core-videoplayerdf5739b361e5ac853630003f0c264462",
        info: "rockstargames-modules-core-videoplayere6292f37e9e73118d04aef857cfa00f6",
        title: "rockstargames-modules-core-videoplayerad77b653301cafe0158055c023939c9f",
        icon: "rockstargames-modules-core-videoplayere6648f376b683a2bef66da3220c7aabe",
        titleText: "rockstargames-modules-core-videoplayerf15eb598ba4a434302b080a9b42b5aea",
        hidden: "rockstargames-modules-core-videoplayere657a665ecf4c2992cd1779a9621f64b",
        brand: "rockstargames-modules-core-videoplayere642e0e1cd810bfc5336dd55e5cef5e7"
      };
      const d = i
    },
    76374: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerb93df9086c68643b2659f4db7a32cea3{align-items:center;display:flex;justify-content:center}", "", {
        version: 3,
        sources: ["webpack://./src/components/Loading/index.less"],
        names: [],
        mappings: "AAAA,wEAGI,kBAAA,CAFA,YAAA,CACA,sBAEJ",
        sourcesContent: [".loading {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        loading: "rockstargames-modules-core-videoplayerb93df9086c68643b2659f4db7a32cea3"
      };
      const d = i
    },
    84694: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => Pe
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t),
        d = a(79908),
        l = a.n(d),
        s = new URL(a(66894), a.b),
        c = new URL(a(97439), a.b),
        m = new URL(a(24921), a.b),
        g = new URL(a(52086), a.b),
        p = new URL(a(98230), a.b),
        f = new URL(a(26207), a.b),
        h = new URL(a(6903), a.b),
        A = new URL(a(22154), a.b),
        v = new URL(a(49200), a.b),
        u = new URL(a(20928), a.b),
        b = new URL(a(90768), a.b),
        y = new URL(a(29951), a.b),
        C = new URL(a(28255), a.b),
        w = new URL(a(47594), a.b),
        x = new URL(a(54414), a.b),
        k = new URL(a(5676), a.b),
        _ = new URL(a(28326), a.b),
        B = new URL(a(50225), a.b),
        z = new URL(a(32791), a.b),
        I = new URL(a(92973), a.b),
        E = new URL(a(25293), a.b),
        D = new URL(a(46962), a.b),
        S = new URL(a(66312), a.b),
        F = new URL(a(44934), a.b),
        N = new URL(a(66562), a.b),
        R = new URL(a(81117), a.b),
        M = new URL(a(62051), a.b),
        j = new URL(a(68577), a.b),
        T = new URL(a(9133), a.b),
        H = new URL(a(93458), a.b),
        P = new URL(a(77032), a.b),
        L = new URL(a(44486), a.b),
        G = new URL(a(89307), a.b),
        W = new URL(a(58853), a.b),
        J = new URL(a(46010), a.b),
        O = new URL(a(26739), a.b),
        Q = new URL(a(68145), a.b),
        V = new URL(a(59792), a.b),
        U = new URL(a(79122), a.b),
        q = new URL(a(50228), a.b),
        Y = new URL(a(304), a.b),
        K = new URL(a(79539), a.b),
        Z = new URL(a(61494), a.b),
        $ = new URL(a(313), a.b),
        X = new URL(a(94904), a.b),
        nn = new URL(a(49027), a.b),
        en = new URL(a(83493), a.b),
        an = new URL(a(53037), a.b),
        on = new URL(a(93803), a.b),
        rn = new URL(a(69400), a.b),
        tn = new URL(a(44840), a.b),
        dn = new URL(a(28168), a.b),
        ln = new URL(a(40792), a.b),
        sn = new URL(a(31431), a.b),
        cn = new URL(a(51594), a.b),
        mn = new URL(a(21130), a.b),
        gn = new URL(a(57390), a.b),
        pn = new URL(a(36606), a.b),
        fn = new URL(a(36334), a.b),
        hn = new URL(a(89457), a.b),
        An = new URL(a(79215), a.b),
        vn = new URL(a(34298), a.b),
        un = new URL(a(20629), a.b),
        bn = new URL(a(55490), a.b),
        yn = new URL(a(44001), a.b),
        Cn = new URL(a(11917), a.b),
        wn = new URL(a(88622), a.b),
        xn = new URL(a(93262), a.b),
        kn = i()(r()),
        _n = l()(s),
        Bn = l()(c),
        zn = l()(m),
        In = l()(g),
        En = l()(p),
        Dn = l()(f),
        Sn = l()(h),
        Fn = l()(A),
        Nn = l()(v),
        Rn = l()(u),
        Mn = l()(b),
        jn = l()(y),
        Tn = l()(C),
        Hn = l()(w),
        Pn = l()(x),
        Ln = l()(k),
        Gn = l()(_),
        Wn = l()(B),
        Jn = l()(z),
        On = l()(I),
        Qn = l()(E),
        Vn = l()(D),
        Un = l()(S),
        qn = l()(F),
        Yn = l()(N),
        Kn = l()(R),
        Zn = l()(M),
        $n = l()(j),
        Xn = l()(T),
        ne = l()(H),
        ee = l()(P),
        ae = l()(L),
        oe = l()(G),
        re = l()(W),
        te = l()(J),
        ie = l()(O),
        de = l()(Q),
        le = l()(V),
        se = l()(U),
        ce = l()(q),
        me = l()(Y),
        ge = l()(K),
        pe = l()(Z),
        fe = l()($),
        he = l()(X),
        Ae = l()(nn),
        ve = l()(en),
        ue = l()(an),
        be = l()(on),
        ye = l()(rn),
        Ce = l()(tn),
        we = l()(dn),
        xe = l()(ln),
        ke = l()(sn),
        _e = l()(cn),
        Be = l()(mn),
        ze = l()(gn),
        Ie = l()(pn),
        Ee = l()(fn),
        De = l()(hn),
        Se = l()(An),
        Fe = l()(vn),
        Ne = l()(un),
        Re = l()(bn),
        Me = l()(yn),
        je = l()(Cn),
        Te = l()(wn),
        He = l()(xn);
      kn.push([n.id, `.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022{--font-family-std:var(--rsg-font-family-std);--font-family-h:var(--rsg-font-family-h);--font-family-h-halloween:nightmar;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--text-light:#e8e8e8;--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;--text-section-max-width:640px;--base-pixel-size:12px;--base-rem-size:0.75rem;--half-rem-size:calc(var(--base-rem-size) / 2);--twice-rem-size:calc(var(--base-rem-size) * 2);--section-margin-bottom:calc(var(--base-rem-size) * 4);--header-height:80px;--breadcrumbs-height:calc(var(--base-pixel-size) * 3.5);--max-width:1920px;--standard-color:#fcaf17;--body-color:#e8e8e8;--background-color:#0b0b0b;--card-background-color:#000;--border-color:#282828;--privacy-banner-height:0px;--game-header-height:50px;--standard-grid-gap:calc(var(--base-rem-size) * 2);--image-margin-bottom:inherit;--image-rounding:0px;--image-rounding-static:16px;--image-rounding-static-sm:8px;--image-rounding-static-xs:4px;--grid-gap-static-xs:0.5rem;--grid-gap-static-sm:1rem;--grid-gap-static-md:2rem;--grid-gap-static-lg:4rem;--grid-gap-static-xl:8rem;--max-width-static:640px;--max-width-static-md:1088px;--max-width-static-lg:1920px;--max-width-static-xl:2560px;--margin-static:0 0 2rem;--h2-margin:2rem 0 0 0;--padding-sides:var(--grid-gap-static-lg);--padding-top-bottom:var(--padding-sides);--padding-static:var(--padding-sides);--background-color:#000;--color-h:#fff;--color-h-dynamic:#fff;--videoplayer-info-crop:0;background-color:var(--background-color,transparent);border:var(--border-width,1) solid hsla(0,0%,100%,.1);color:#fff;display:grid;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);height:100%;letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6);overflow:hidden;position:relative}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:400;src:url(${_n}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:italic;font-weight:400;src:url(${Bn}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:700;src:url(${zn}) format("woff")}@font-face{font-family:HelveticaNowDisplayBold;font-style:normal;font-weight:700;src:url(${In}) format("woff")}@font-face{font-family:HelveticaNowDisplayMedium;font-style:normal;font-weight:400;src:url(${En}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:normal;font-weight:400;src:url(${Dn}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:italic;font-weight:400;src:url(${Sn}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:400;src:url(${Fn}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:400;src:url(${Nn}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:700;src:url(${Rn}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:700;src:url(${Mn}) format("woff")}@font-face{font-family:HelveticaNeueLTW07-85Heavy;font-style:normal;font-weight:700;src:url(${jn}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:normal;font-weight:400;src:url(${Tn}) format("woff")}@font-face{font-family:SackersGothicW01-Square;font-style:normal;font-weight:400;src:url(${Hn}) format("woff")}@font-face{font-family:Cabrito-Nordem;font-style:normal;font-weight:400;src:url(${Pn}) format("woff")}@font-face{font-family:Droid-Serif-Pro;font-style:normal;font-weight:400;src:url(${Ln}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:400;src:url(${Gn}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:500;src:url(${Wn}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:700;src:url(${Jn}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:900;src:url(${On}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:400;src:url(${Qn}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:500;src:url(${Vn}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:700;src:url(${Un}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:900;src:url(${qn}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:400;src:url(${Yn}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:500;src:url(${Kn}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:700;src:url(${Zn}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:900;src:url(${$n}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:400;src:url(${Xn}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:500;src:url(${ne}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:700;src:url(${ee}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:900;src:url(${ae}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:700;src:url(${oe}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:900;src:url(${re}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:700;src:url(${te}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:900;src:url(${te}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:700;src:url(${ie}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:900;src:url(${de}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:700;src:url(${le}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:900;src:url(${se}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:400;src:url(${ce}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:700;src:url(${me}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:400;src:url(${ge}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:700;src:url(${pe}) format("woff")}@font-face{font-family:Pricedown;font-style:normal;font-weight:700;src:url(${fe}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:400;src:url(${he}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:700;src:url(${Ae}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:900;src:url(${ve}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:400;src:url(${ue}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:400;src:url(${be}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:700;src:url(${ye}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:700;src:url(${Ce}) format("woff")}@font-face{font-family:CorporateW05;font-style:normal;font-weight:400;src:url(${we}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:400;src:url(${xe}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:700;src:url(${ke}) format("woff")}@font-face{font-family:EurostileNextW05;font-style:normal;font-weight:700;src:url(${_e}) format("woff")}@font-face{font-family:Diploma;font-style:normal;font-weight:400;src:url(${Be}) format("woff")}@font-face{font-family:BrushScriptMT;font-style:normal;font-weight:400;src:url(${ze}) format("woff")}@font-face{font-family:BankGothicBT;font-style:normal;font-weight:400;src:url(${Ie}) format("woff")}@font-face{font-family:MeltdownRegular;font-style:normal;font-weight:400;src:url(${Ee}) format("woff")}@font-face{font-family:SharkSnackRegular;font-style:normal;font-weight:400;src:url(${De}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:400;src:url(${Se}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:500;src:url(${Fe}) format("woff")}@font-face{font-family:RDRLino-Regular;font-style:normal;font-weight:400;src:url(${Ne}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:400;src:url(${Re}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:700;src:url(${Me}) format("woff")}@font-face{font-family:nightmar;font-style:normal;font-weight:100;src:url(${je}) format("woff")}@font-face{font-family:RDRCatalogueBold;font-style:normal;font-weight:700;src:url(${Te}) format("woff")}@font-face{font-family:RDRUltraHeadline;font-style:normal;font-weight:400;src:url(${He}) format("woff")}@media (min-width:0px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022{--root-font-size:16}}@media (min-width:768px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022{--root-font-size:18}}@media (min-width:1024px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022{--root-font-size:20}}@media (min-width:1920px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022{--root-font-size:22}}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 *{box-sizing:border-box}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 a{color:inherit;text-decoration:none}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 figure,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h2,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h3,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h5,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h6,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 p{margin:0}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 caption,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 figcaption{--padding-dynamic:var(--padding-sides);--padding-dynamic-tb:initial;color:var(--body-color);display:block;font-family:var(--font-family-std);font-size:var(--font-size-2);font-style:italic;margin:var(--grid-gap-static-sm) auto 0;padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0);text-align:center}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 caption p,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 figcaption p{display:block}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ru_ru){--font-family-h-halloween:RDRLino-Regular}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ko_kr){word-break:keep-all}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h2,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h3,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h2,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h3{line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h3,[data-game^=rdr] .rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h5,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]{--font-family-std:var(--gta-font-family-std);--font-family-h:var(--gta-font-family-h);--letter-spacing-h:0;--line-height-h1:1;--font-weight-newswire-subtitle:400;--letter-spacing-std:0;--color-h:#fff;--body-color:#e8e8e8;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]{--header-numerator:20.8}}@media (min-width:768px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]{--header-numerator:23.4}}@media (min-width:1024px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]{--header-numerator:26}}@media (min-width:1920px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]{--header-numerator:29.25}}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h2,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h3,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h3,[data-game^=rdr] .rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h5,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h5,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=gta] .rockstargames-modules-core-videoplayerc4ed39bbd2766eb49440c0dd7422bc88{font-family:var(--gta-font-family-badge)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(pl_pl) [data-game^=gta]{--font-family-h:ChaletComprime,NeueHelveticaW05;--font-family-newswire-subtitle:ChaletComprime,NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(pl_pl) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaPaneuropean}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ru_ru) [data-game^=gta]{--font-family-h:NeueHelveticaW05;--font-family-newswire-subtitle:NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ru_ru) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaW05}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(zh_hans) [data-game^=gta]{--font-family-h:NotoSansSC;--font-family-newswire-subtitle:NotoSansSC;--font-family-std:NotoSansSC;--badge-font:Pricedown,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(zh_hant) [data-game^=gta]{--font-family-h:NotoSansTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--badge-font:Pricedown,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ja_jp) [data-game^=gta]{--font-family-h:NotoSansJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--badge-font:Pricedown,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ja_jp) [data-context=newswire-article] h1{--font-family-h:NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ko_kr) [data-game^=gta]{--font-family-h:NotoSansKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--badge-font:Pricedown,NotoSansKR}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]{--font-family-std:var(--rdr-font-family-std);--font-family-h:var(--rdr-font-family-h);--font-family-newswire-subtitle:var(--rdr-font-family-newswire-subtitle);--area-font:var(--rdr-area-font);--font-weight-h:400;--font-weight-h1:400;--font-weight-h3:400;--font-weight-newswire-subtitle:700;--h3-numerator-override-newswire-subtitle:1;--letter-spacing-h:0;--line-height-h:1.2;--letter-spacing-std:0;--text-transform-newswire-subtitle:initial;--color-h:#c00;--color-h3:#fff;--color-h4:#fff;--body-color:#e8e8e8;--text-transform-h:uppercase;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]{--header-numerator:15}}@media (min-width:768px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]{--header-numerator:16.88}}@media (min-width:1024px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]{--header-numerator:18.75}}@media (min-width:1920px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]{--header-numerator:21.09}}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h2,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h3,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h2,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h3,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h2,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h3,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h3[data-context=newswire-subtitle],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h3,[data-game=rdo] .rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h3,[data-game^=rdr] .rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h3,[data-game^=rdr] .rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h5,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h6,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h5,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h2,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h3,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h3[data-context=newswire-subtitle],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h5,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] h6,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h5,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] [template=community],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] [template=community] main,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game=rdo] [template=community] p,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [data-game^=rdr] [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(pl_pl) [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(pl_pl) [data-game^=rdr]{--font-family-h:RDRLino-Regular;--font-family-newswire-subtitle:HapnaSlabSerif;--font-family-std:HapnaSlabSerif;--badge-font:RDRLino-Regular}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(zh_hans) [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(zh_hans) [data-game^=rdr]{--font-family-h:NotoSerifSC;--font-family-newswire-subtitle:NotoSansSC,;--font-family-std:NotoSansSC;--area-font:NotoSansSC;--badge-font:RDRLino-Regular,NotoSerifSC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(zh_hant) [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(zh_hant) [data-game^=rdr]{--font-family-h:NotoSerifTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--area-font:NotoSansTC;--badge-font:RDRLino-Regular,NotoSerifTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ja_jp) [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ja_jp) [data-game^=rdr]{--font-family-h:NotoSerifJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--area-font:NotoSansJP;--badge-font:RDRLino-Regular,NotoSerifTC}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ko_kr) [data-game=rdo],.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 :lang(ko_kr) [data-game^=rdr]{--font-family-h:NotoSerifKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--area-font:NotoSansKR;--badge-font:RDRLino-Regular,NotoSerifKR}@media (min-width:2560px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022{--spacing-lg:2rem;--spacing-xl:4rem;--grid-gap-static-lg:2rem;--grid-gap-static-xl:4rem}}@media (min-width:2560px){.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022{--max-width-static-md:1440px}}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h1,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h1.rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h4,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h5,.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022 [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022.rockstargames-modules-core-videoplayera2683dc04cb861acee168e8f9655c73e{justify-self:center;max-height:70vh;min-height:30vw}.rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6{--aspect-ratio:16/9;--aspect-ratio-default:1;aspect-ratio:16/9;margin:0 auto;position:relative;width:100%}@media (min-width:1024px){.rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6{--aspect-ratio-default:16/9}}.rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6:before{content:"";display:block;height:0;padding-bottom:calc(100% / calc(var(--aspect-ratio, var(--aspect-ratio-default))));width:100%}.rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6>*{height:100%;left:0;position:absolute;top:0;width:100%}[data-context=clr-about] .rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6,[data-context=clr-article] .rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6{aspect-ratio:auto;min-height:35vw}@media (max-width:1023px){[data-context=clr-about] .rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6,[data-context=clr-article] .rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6{--aspect-ratio:16/9;aspect-ratio:16/9}}`, "", {
        version: 3,
        sources: ["webpack://./src/components/PlayerWrapper/index.less", "webpack://./../../buildtime/legacy-design-system/less/typography.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less"],
        names: [],
        mappings: "AAEA,wECgIA,4CAAA,CACA,wCAAA,CACA,kCAAA,CChBI,sCAAA,CAAA,2CAAA,CAAA,4BAAA,CAAA,kCAAA,CAAA,iCAAA,CAAA,oCAAA,CAAA,mCAAA,CAAA,kDAAA,CAAA,gCAAA,CAyBA,wFAAA,CAOA,kCAAA,CCnJJ,2BAAA,CACA,gCAAA,CAGA,yBAAA,CACA,sBAAA,CAGA,uBAAA,CACA,oBAAA,CAGA,kBAAA,CACA,oBAAA,CACA,oBAAA,CAGA,gBAAA,CACA,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CAEA,gBAAA,CACA,8BAAA,CACA,6BAAA,CACA,8BAAA,CACA,oBAAA,CAEA,qBAAA,CACA,aAAA,CACA,uBAAA,CACA,uBAAA,CACA,0BAAA,CACA,yBAAA,CACA,mBAAA,CAEA,qBAAA,CAGA,0BAAA,CACA,8BAAA,CAEA,qBAAA,CACA,oBAAA,CAGA,4BAAA,CACA,gCAAA,CAGA,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAIA,iCAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CAGA,gCAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CAGA,+BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CAGA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,uBAAA,CAGA,sGAAA,CAMA,2EAAA,CAOA,4BAAA,CD8II,8BAAA,CACA,sBAAA,CACA,uBAAA,CACA,8CAAA,CACA,+CAAA,CACA,sDAAA,CACA,oBAAA,CACA,uDAAA,CACA,kBAAA,CACA,wBAAA,CAEA,oBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,2BAAA,CACA,yBAAA,CACA,kDAAA,CACA,6BAAA,CACA,oBAAA,CACA,4BAAA,CACA,8BAAA,CACA,8BAAA,CAEA,2BAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CAGA,wBAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CAGA,wBAAA,CACA,sBAAA,CAEA,yCAAA,CACA,yCAAA,CACA,qCAAA,CFjSA,uBAAA,CACA,cAAA,CACA,sBAAA,CACA,yBAAA,CEmOA,oDAAA,CF9NA,qDAAA,CAHA,UAAA,CACA,YAAA,CEiIA,mDAAA,CAIA,2CAAA,CAHA,sCAAA,CF/HA,WAAA,CEgIA,gDAAA,CACA,sCAAA,CFnIA,eAAA,CAGA,iBA6JJ,CE4TI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF1TR,CEsTI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFpTR,CEgTI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF9SR,CE0SI,WACI,mCAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFxSR,CEoSI,WACI,qCAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFlSR,CE8RI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF5RR,CEwRI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFtRR,CEkRI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFhRR,CE4QI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF1QR,CEsQI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFpQR,CEgQI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF9PR,CE0PI,WACI,sCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFxPR,CEoPI,WACI,oCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFlPR,CE8OI,WACI,mCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF5OR,CEwOI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFtOR,CEkOI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFhOR,CE4NI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF1NR,CEsNI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFpNR,CEgNI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF9MR,CE0MI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFxMR,CEoMI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFlMR,CE8LI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF5LR,CEwLI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFtLR,CEkLI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFhLR,CE4KI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF1KR,CEsKI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFpKR,CEgKI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF9JR,CE0JI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFxJR,CEoJI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFlJR,CE8II,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF5IR,CEwII,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFtIR,CEkII,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFhIR,CE4HI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF1HR,CEsHI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFpHR,CEgHI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF9GR,CE0GI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFxGR,CEoGI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFlGR,CE8FI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF5FR,CEwFI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFtFR,CEkFI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFhFR,CE4EI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF1ER,CEsEI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFpER,CEgEI,WACI,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF9DR,CE0DI,WACI,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFxDR,CEoDI,WACI,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFlDR,CE8CI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF5CR,CEwCI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFtCR,CEkCI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFhCR,CE4BI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF1BR,CEsBI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFpBR,CEgBI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFdR,CEUI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFRR,CEII,WACI,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFFR,CEFI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFIR,CERI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFUR,CEdI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFgBR,CEpBI,WACI,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFsBR,CE1BI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF4BR,CEhCI,WACI,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFkCR,CEtCI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFwCR,CE5CI,WACI,6BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF8CR,CElDI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFoDR,CExDI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF0DR,CE9DI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFgER,CEpEI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFsER,CE1EI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF4ER,CEhFI,WACI,oBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFkFR,CEtFI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DFwFR,CE5FI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DF8FR,CEviBI,uBAAA,wEAi4BK,mBFtVP,CACF,CE1hBI,yBAAA,wEAg3BK,mBFlVP,CACF,CE7gBI,0BAAA,wEA+1BK,mBF9UP,CACF,CEhgBI,0BAAA,wEA80BK,mBF1UP,CACF,CA/lBA,0EC2FI,qBDugBJ,CAlmBA,0EC8FI,aAAA,CACA,oBDugBJ,CAtmBA,2lBC4GI,QDsgBJ,CAlnBA,mKE+dI,sCAAA,CACA,4BAAA,CDxWA,uBAAA,CAPA,aAAA,CAGA,kCAAA,CACA,4BAAA,CAEA,iBAAA,CALA,uCAAA,CCgXA,mJAAA,CD5WA,iBDygBJ,CA/nBA,uKC2HQ,aDwgBR,CAnoBA,qFCsII,yCDggBJ,CAtoBA,qFC2II,mBD8fJ,CErhBI,oFACI,iDFuhBR,CErhBI,sFACI,iDFuhBR,CErhBI,oFACI,iDFuhBR,CE9hBI,oFACI,sDFgiBR,CE9hBI,sFACI,sDFgiBR,CE9hBI,oFACI,sDFgiBR,CEviBI,oFACI,uCFyiBR,CEviBI,sFACI,uCFyiBR,CEviBI,oFACI,uCFyiBR,CEhjBI,oFACI,6CFkjBR,CEhjBI,sFACI,6CFkjBR,CEhjBI,oFACI,6CFkjBR,CEzjBI,oFACI,4CF2jBR,CEzjBI,sFACI,4CF2jBR,CEzjBI,oFACI,4CF2jBR,CElkBI,oFACI,+CFokBR,CElkBI,sFACI,+CFokBR,CElkBI,oFACI,+CFokBR,CE3kBI,oFACI,8CF6kBR,CE3kBI,sFACI,8CF6kBR,CE3kBI,oFACI,8CF6kBR,CEplBI,oFACI,6DFslBR,CEplBI,sFACI,6DFslBR,CEplBI,oFACI,6DFslBR,CE7lBI,oFACI,2CF+lBR,CE7lBI,sFACI,2CF+lBR,CE7lBI,oFACI,2CF+lBR,CA1tBA,8bEyJQ,wDAAA,CACA,8CFwkBR,CAluBA,6NE8JQ,0DAAA,CAEA,0DAAA,CADA,oEFykBR,CAxuBA,kJEoKQ,6DFukBR,CA3uBA,2EEuKQ,6DFukBR,CA9uBA,2EE0KQ,6DAAA,CACA,0DAAA,CACA,oEFwkBR,CApvBA,sJE6KQ,oCF6kBR,CA1vBA,2EEgLQ,6DAAA,CACA,0DAAA,CACA,oEFwkBR,CErkBQ,2GAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDF2jBZ,CE7OI,uLA1UQ,0DF2jBZ,CApwBA,iOEgNQ,6DAAA,CACA,oCFyjBR,CA1wBA,yFCmJI,4CAAA,CACA,wCAAA,CACA,oBAAA,CACA,kBAAA,CACA,mCAAA,CACA,sBAAA,CACA,cAAA,CACA,oBAAA,CCibA,mBAAA,CAzdA,sCAAA,CAAA,2CAAA,CAAA,4BAAA,CAAA,kCAAA,CAAA,iCAAA,CAAA,oCAAA,CAAA,mCAAA,CAAA,kDAAA,CAAA,gCAAA,CAyBA,wFAAA,CAOA,kCAAA,CA0FA,oDAAA,CA8VA,aAAA,CA7bA,mDAAA,CAIA,2CAAA,CAHA,sCAAA,CACA,gDAAA,CACA,sCForBJ,CEhyBI,uBAAA,yFD0HK,uBD0qBP,CACF,CEnxBI,yBAAA,yFDyGK,uBD8qBP,CACF,CEtwBI,0BAAA,yFDwFK,qBDkrBP,CACF,CEzvBI,0BAAA,yFDuEK,wBDsrBP,CACF,CEpuBI,qGACI,iDFsuBR,CEpuBI,uGACI,iDFsuBR,CEpuBI,qGACI,iDFsuBR,CE7uBI,qGACI,sDF+uBR,CE7uBI,uGACI,sDF+uBR,CE7uBI,qGACI,sDF+uBR,CEtvBI,qGACI,uCFwvBR,CEtvBI,uGACI,uCFwvBR,CEtvBI,qGACI,uCFwvBR,CE/vBI,qGACI,6CFiwBR,CE/vBI,uGACI,6CFiwBR,CE/vBI,qGACI,6CFiwBR,CExwBI,qGACI,4CF0wBR,CExwBI,uGACI,4CF0wBR,CExwBI,qGACI,4CF0wBR,CEjxBI,qGACI,+CFmxBR,CEjxBI,uGACI,+CFmxBR,CEjxBI,qGACI,+CFmxBR,CE1xBI,qGACI,8CF4xBR,CE1xBI,uGACI,8CF4xBR,CE1xBI,qGACI,8CF4xBR,CEnyBI,qGACI,6DFqyBR,CEnyBI,uGACI,6DFqyBR,CEnyBI,qGACI,6DFqyBR,CE5yBI,qGACI,2CF8yBR,CE5yBI,uGACI,2CF8yBR,CE5yBI,qGACI,2CF8yBR,CAz6BA,mhBEyJQ,wDAAA,CACA,8CFuxBR,CAj7BA,+PE8JQ,0DAAA,CAEA,0DAAA,CADA,oEFwxBR,CAv7BA,mKEoKQ,6DFsxBR,CA17BA,4FEuKQ,6DFsxBR,CA77BA,4FE0KQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oEFuxBR,CAn8BA,4FEgLQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oEFuxBR,CEpxBQ,4HAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDF0wBZ,CE5bI,yNA1UQ,0DF0wBZ,CAn9BA,oREgNQ,6DAAA,CACA,oCFwwBR,CAz9BA,+PEwNQ,mEFqwBR,CA79BA,4FE2NQ,mEFqwBR,CAh+BA,4FE8NQ,mEFqwBR,CEnwBQ,4HACI,iGFqwBZ,CAt+BA,oRE0OQ,mDFiwBR,CA3+BA,8GE+OQ,sCAAA,CACA,8CF+vBR,CA/+BA,mHEmPY,4BF+vBZ,CAl/BA,gHEsPY,+BF+vBZ,CAr/BA,iKCuKQ,wCDi1BR,CAx/BA,sGC8KM,+CAAA,CACA,+DAAA,CACA,uCD60BN,CA7/BA,wHCmLQ,wCD60BR,CAhgCA,sGC0LM,gCAAA,CACA,gDAAA,CACA,uCDy0BN,CArgCA,wHC+LQ,gCDy0BR,CAxgCA,wGCsMM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCDq0BN,CA9gCA,wGCgNM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCDi0BN,CAphCA,sGC0NM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCD6zBN,CA1hCA,wHCgOQ,0BD6zBR,CA7hCA,sGCuOM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCDyzBN,CAniCA,iLCgPI,4CAAA,CACA,wCAAA,CACA,wEAAA,CACA,gCAAA,CACA,mBAAA,CACA,oBAAA,CACA,oBAAA,CACA,mCAAA,CACA,2CAAA,CACA,oBAAA,CACA,mBAAA,CACA,sBAAA,CACA,0CAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CACA,oBAAA,CACA,4BAAA,CC0UA,mBAAA,CAzdA,sCAAA,CAAA,2CAAA,CAAA,4BAAA,CAAA,kCAAA,CAAA,iCAAA,CAAA,oCAAA,CAAA,mCAAA,CAAA,kDAAA,CAAA,gCAAA,CAyBA,wFAAA,CAOA,kCAAA,CA0FA,oDAAA,CA8VA,aAAA,CA7bA,mDAAA,CAIA,2CAAA,CAHA,sCAAA,CACA,gDAAA,CACA,sCF47BJ,CExiCI,uBAAA,iLDiOK,qBD40BP,CACF,CE5hCI,yBAAA,iLDgNK,wBDi1BP,CACF,CEhhCI,0BAAA,iLD+LK,wBDs1BP,CACF,CEpgCI,0BAAA,iLD8KK,wBD21BP,CACF,CEh/BI,yMACI,iDFm/BR,CEj/BI,6MACI,iDFo/BR,CEl/BI,yMACI,iDFq/BR,CE5/BI,yMACI,sDF+/BR,CE7/BI,6MACI,sDFggCR,CE9/BI,yMACI,sDFigCR,CExgCI,yMACI,uCF2gCR,CEzgCI,6MACI,uCF4gCR,CE1gCI,yMACI,uCF6gCR,CEphCI,yMACI,6CFuhCR,CErhCI,6MACI,6CFwhCR,CEthCI,yMACI,6CFyhCR,CEhiCI,yMACI,4CFmiCR,CEjiCI,6MACI,4CFoiCR,CEliCI,yMACI,4CFqiCR,CE5iCI,yMACI,+CF+iCR,CE7iCI,6MACI,+CFgjCR,CE9iCI,yMACI,+CFijCR,CExjCI,yMACI,8CF2jCR,CEzjCI,6MACI,8CF4jCR,CE1jCI,yMACI,8CF6jCR,CEpkCI,yMACI,6DFukCR,CErkCI,6MACI,6DFwkCR,CEtkCI,yMACI,6DFykCR,CEhlCI,yMACI,2CFmlCR,CEjlCI,6MACI,2CFolCR,CEllCI,yMACI,2CFqlCR,CAhtCA,iiCEyJQ,wDAAA,CACA,8CFmkCR,CA7tCA,4fE8JQ,0DAAA,CAEA,0DAAA,CADA,oEFskCR,CAruCA,qUEoKQ,6DFqkCR,CAzuCA,uLEuKQ,6DFskCR,CA7uCA,uLE0KQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oEFwkCR,CApvCA,uLEgLQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oEFykCR,CEtkCQ,uPAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDF6jCZ,CE/uBI,gbA1UQ,0DF+jCZ,CAxwCA,qiBEgNQ,6DAAA,CACA,oCFgkCR,CAjxCA,4fEwNQ,mEF+jCR,CAvxCA,uLE2NQ,mEFgkCR,CA3xCA,uLE8NQ,mEFikCR,CE/jCQ,uPACI,iGFkkCZ,CAnyCA,qiBE0OQ,mDFikCR,CA3yCA,2NE+OQ,sCAAA,CACA,8CFgkCR,CAhzCA,qOEmPY,4BFikCZ,CApzCA,+NEsPY,+BFkkCZ,CAxzCA,2MCiRM,+BAAA,CACA,8CAAA,CACA,gCAAA,CACA,4BD2iCN,CA/zCA,+MC2RM,2BAAA,CACA,2CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCDwiCN,CAv0CA,+MCsSM,2BAAA,CACA,0CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCDqiCN,CA/0CA,2MCiTM,2BAAA,CACA,0CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCDkiCN,CAv1CA,2MC4TM,2BAAA,CACA,0CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCD+hCN,CEnvCI,0BAAA,wECpDE,qBH2yCJ,CACF,CE3zCI,yBAAA,wECwBI,iBAAA,CAAoB,iBAAA,CDyNhB,yBAAA,CAA4B,yBF+kCtC,CACF,CE9vCI,0BAAA,wEAoLS,4BFolCX,CACF,CAr3CA,6NEwNQ,mEFiqCR,CAz3CA,2EE2NQ,mEFiqCR,CA53CA,2EE8NQ,mEFiqCR,CE/pCQ,2GACI,iGFiqCZ,CAl4CA,iOE0OQ,mDF6pCR,CAv4CA,6FE+OQ,sCAAA,CACA,8CF2pCR,CA34CA,kGEmPY,4BF2pCZ,CA94CA,+FEsPY,+BF2pCZ,CA93CI,+IAGI,mBAAA,CAFA,eAAA,CACA,eAi4CR,CA53CA,wEAEI,mBAAA,CE8YA,wBAAA,CF/YA,iBAAA,CAIA,aAAA,CEgZA,iBAAA,CFjZA,UAg4CJ,CEt1CI,0BAAA,wEAoWI,2BFs/BN,CACF,CEn/BI,+EACI,UAAA,CAGA,aAAA,CAFA,QAAA,CAGA,kFAAA,CAFA,UFu/BR,CAh5CA,0EEoaQ,WAAA,CAFA,MAAA,CAFA,iBAAA,CACA,KAAA,CAEA,UFo/BR,CA/4CC,oMAGO,iBAAA,CACA,eAg5CR,CE33CI,0BAAA,oMFlBQ,mBAAA,CADA,iBAo5CV,CACF",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.wrapper {\n    @import '@rsgweb/legacy-design-system/less/typography.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n\n    .resetVariables;\n\n    --background-color: black;\n    --color-h: white;\n    --color-h-dynamic: white;\n    --videoplayer-info-crop: 0;\n\n    color: white;\n    display: grid;\n    overflow: hidden;\n    border: var(--border-width, 1) solid rgba(255, 255, 255, 0.1);\n    height: 100%;\n    position: relative;\n    .handleColors;\n\n    &.hero {\n        max-height: 70vh;\n        min-height: 30vw;\n        justify-self: center;\n    }\n}\n\n.stdWrapper {\n    aspect-ratio: 16/9;\n    --aspect-ratio: 16/9; // for consumption by mixin/children\n    .handleAspectRatio;\n    width: 100%;\n    margin: 0 auto;\n}\n\n&[data-context='clr-article'],\n&[data-context='clr-about'] {\n    .stdWrapper {\n        aspect-ratio: auto;\n        min-height: 35vw;\n        .mdMax({\n            aspect-ratio: 16/9;\n            --aspect-ratio: 16/9; // for consumption by mixin/children\n        });\n    }\n}\n", "/*\nThis CSS resource incorporates links to web font and font software which is the valuable copyrighted property of House Industries and/or its suppliers. You expressly agree to not copy, install, redistribute, convert, modify, or reverse engineer this font software or the fonts rendered thereby. Please contact House Industries with any questions regarding Web Fonts: http://www.houseind.com\n*/\n\n@import './mixins.less';\n\n// RSG Fonts\n.loadFont(HelveticaNowText, 400, normal, HelveticaNowText);\n.loadFont(HelveticaNowText, 400, italic, HelveticaNowTextIt);\n.loadFont(HelveticaNowText, 700, normal, HelveticaNowTextBold);\n.loadFont(HelveticaNowDisplayBold, 700);\n.loadFont(HelveticaNowDisplayMedium);\n.loadFont(HelveticaNeueLTW05, 400, normal, HelveticaNeueLTW05-65Medium);\n.loadFont(HelveticaNeueLTW05, 400, italic, HelveticaNeueLTW05-66MediumIt);\n.loadFont(HelveticaNeueLTW07, 400, normal, HelveticaNeueLTW07-55Roman);\n.loadFont(HelveticaNeueLTW07, 400, italic, HelveticaNeueLTW07-56Italic);\n.loadFont(HelveticaNeueLTW07, 700, normal, HelveticaNeueLTW07-75Bold);\n.loadFont(HelveticaNeueLTW07, 700, italic, HelveticaNeueLTW07-76BoldIt);\n.loadFont(HelveticaNeueLTW07-85Heavy, 700, normal);\n.loadFont(NeueHelveticaPaneuropean, 400, normal, HelveticaPanEuro-Md);\n.loadFont(SackersGothicW01-Square);\n.loadFont(Cabrito-Nordem);\n.loadFont(Droid-Serif-Pro);\n\n.loadFont(NotoSansSC, 400, normal, Noto-Sans-SC-400);\n.loadFont(NotoSansSC, 500, normal, Noto-Sans-SC-500);\n.loadFont(NotoSansSC, 700, normal, Noto-Sans-SC-700);\n.loadFont(NotoSansSC, 900, normal, Noto-Sans-SC-900);\n\n.loadFont(NotoSansTC, 400, normal, Noto-Sans-TC-400);\n.loadFont(NotoSansTC, 500, normal, Noto-Sans-TC-500);\n.loadFont(NotoSansTC, 700, normal, Noto-Sans-TC-700);\n.loadFont(NotoSansTC, 900, normal, Noto-Sans-TC-900);\n\n.loadFont(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n// .loadFontWoff2(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n.loadFont(NotoSansJP, 500, normal, Noto-Sans-JP-500);\n.loadFont(NotoSansJP, 700, normal, Noto-Sans-JP-700);\n.loadFont(NotoSansJP, 900, normal, Noto-Sans-JP-900);\n\n.loadFont(NotoSansKR, 400, normal, Noto-Sans-KR-400);\n.loadFont(NotoSansKR, 500, normal, Noto-Sans-KR-500);\n.loadFont(NotoSansKR, 700, normal, Noto-Sans-KR-700);\n.loadFont(NotoSansKR, 900, normal, Noto-Sans-KR-900);\n\n.loadFont(NotoSerifJP, 700, normal, NotoSerifJP-Black);\n.loadFont(NotoSerifJP, 900, normal, Noto-Serif-JP-900);\n\n.loadFont(NotoSerifKR, 700, normal, Noto-Serif-KR-900);\n.loadFont(NotoSerifKR, 900, normal, Noto-Serif-KR-900);\n\n.loadFont(NotoSerifSC, 700, normal, NotoSerifSC-Black);\n.loadFont(NotoSerifSC, 900, normal, Noto-Serif-SC-900);\n\n.loadFont(NotoSerifTC, 700, normal, NotoSerifTC-Black);\n.loadFont(NotoSerifTC, 900, normal, Noto-Serif-TC-900);\n\n// GTA fonts\n.loadFont(ChaletComprime, 400, normal, CHALETCOMPRIME-COLOGNESIXTYSC);\n.loadFont(ChaletComprime, 700, normal, ChaletComprime-HongKongSixty);\n.loadFont(Chalet, 400, normal, Chalet-LondonSixty);\n.loadFont(Chalet, 700, normal, Chalet-NewYorkSixty);\n.loadFont(Pricedown, 700, normal, Pricedown);\n.loadFont(NeueHelveticaW05, 400, normal, NeueHelveticaW05-Condensed);\n.loadFont(NeueHelveticaW05, 700, normal, NeueHelveticaW05-CondensedBold);\n.loadFont(NeueHelveticaW05, 900, normal, NeueHelveticaW05-CondensedExtraBlack);\n.loadFont(FrizQuadrataW05, 400, normal, FrizQuadrataW05-Regular);\n.loadFont(FrizQuadrataW05, 400, italic, FrizQuadrataW05-Italic);\n.loadFont(FrizQuadrataW05, 700, normal, FrizQuadrataW05-Bold);\n.loadFont(FrizQuadrataW05, 700, italic, FrizQuadrataW05-BoldItalic);\n.loadFont(CorporateW05, 400, normal, CorporateURWRegW05-Regular);\n.loadFont(NimbusSansW05, 400, normal, NimbusSansW05-Regular);\n.loadFont(NimbusSansW05, 700, normal, NimbusSansW05-Bold);\n.loadFont(EurostileNextW05, 700, normal, EurostileNextW05-ExtBold);\n.loadFont(Diploma, 400, normal, Diploma);\n.loadFont(BrushScriptMT, 400, normal, BrushScriptMT);\n.loadFont(BankGothicBT, 400, normal, BankGothicBT-Medium);\n.loadFont(MeltdownRegular, 400, normal, MeltdownRegular-Normal);\n.loadFont(SharkSnackRegular, 400, normal, SharkSnackRegular-Normal);\n.loadFont(GTAArtDeco, 400, normal, GTAArtDeco-Regular);\n.loadFont(GTAArtDeco, 500, normal, GTAArtDeco-Medium);\n\n// RDR Fonts\n.loadFont(RDRLino-Regular);\n.loadFont(HapnaSlabSerif, 400, normal, HapnaSlabSerif-DemiBold);\n.loadFont(HapnaSlabSerif, 700, normal, HapnaSlabSerif-ExtraBold);\n.loadFont(nightmar, 100, normal);\n.loadFont(RDRCatalogueBold, 700, normal, RDRCatalogueBold-Bold);\n.loadFont(RDRUltraHeadline, 400, normal, RDRUltraHeadline);\n\n.setRootFontSizing();\n\n* {\n    box-sizing: border-box;\n}\na {\n    color: inherit;\n    text-decoration: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    margin: 0;\n}\n\nfigure {\n    margin: 0;\n}\n\ncaption,\nfigcaption {\n    display: block;\n    margin: var(--grid-gap-static-sm) auto 0;\n    .handlePadding(var(--padding-sides), initial);\n    font-family: var(--font-family-std);\n    font-size: var(--font-size-2);\n    text-align: center;\n    font-style: italic;\n    color: var(--body-color);\n\n    p {\n        display: block;\n    }\n}\n\n// RSG Typography (default)\n--font-family-std: var(--rsg-font-family-std);\n--font-family-h: var(--rsg-font-family-h);\n--font-family-h-halloween: nightmar;\n\n// Russian\n:lang(ru_ru) {\n    --font-family-h-halloween: RDRLino-Regular;\n}\n\n// Korean\n:lang(ko_kr) {\n    word-break: keep-all;\n}\n\n.handleFontDeclarations;\n.handleColors;\n\n// GTA Type Scale\n.gta({\n    --font-family-std: var(--gta-font-family-std);\n    --font-family-h: var(--gta-font-family-h);\n    --letter-spacing-h: 0;\n    --line-height-h1: 1;\n    --font-weight-newswire-subtitle: 400;\n    --letter-spacing-std: 0;\n    --color-h: #fff;\n    --body-color: #e8e8e8;\n\n    .themeDark;\n\n    .sm({--header-numerator: 20.8;});\n    .md({--header-numerator: 23.4;});\n    .lg({--header-numerator: 26;});\n    .xl({--header-numerator: 29.25;});\n\n    .handleFontDeclarations;\n    .handleColors;\n\n    .badge {\n        font-family: var(--gta-font-family-badge);\n    }\n});\n\n// Polish\n:lang(pl_pl) {\n    .gta({\n      --font-family-h: ChaletComprime, NeueHelveticaW05;\n      --font-family-newswire-subtitle: ChaletComprime, NeueHelveticaW05;\n      --badge-font: Pricedown, NeueHelveticaW05;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NeueHelveticaPaneuropean;\n    }\n}\n\n// Russian\n:lang(ru_ru) {\n    .gta({\n      --font-family-h: NeueHelveticaW05;\n      --font-family-newswire-subtitle: NeueHelveticaW05;\n      --badge-font: Pricedown, NeueHelveticaW05;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NeueHelveticaW05;\n    }\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    .gta({\n      --font-family-h: NotoSansSC;\n      --font-family-newswire-subtitle: NotoSansSC;\n      --font-family-std: NotoSansSC;\n      --badge-font: Pricedown, NotoSansSC;\n   });\n}\n\n// Chinese (Traditional)\n:lang(zh_hant) {\n    .gta({\n      --font-family-h: NotoSansTC;\n      --font-family-newswire-subtitle: NotoSansTC;\n      --font-family-std: NotoSansTC;\n      --badge-font: Pricedown, NotoSansTC;\n   });\n}\n\n// Japanese\n:lang(ja_jp) {\n    .gta({\n      --font-family-h: NotoSansJP;\n      --font-family-newswire-subtitle: NotoSansJP;\n      --font-family-std: NotoSansJP;\n      --badge-font: Pricedown, NotoSansJP;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NotoSansJP;\n    }\n}\n\n// Korean\n:lang(ko_kr) {\n    .gta({\n      --font-family-h: NotoSansKR;\n      --font-family-newswire-subtitle: NotoSansKR;\n      --font-family-std: NotoSansKR;\n      --badge-font: Pricedown, NotoSansKR;\n   });\n}\n\n// RDR Type Scale\n.rdr({\n    --font-family-std: var(--rdr-font-family-std);\n    --font-family-h: var(--rdr-font-family-h);\n    --font-family-newswire-subtitle: var(--rdr-font-family-newswire-subtitle);\n    --area-font: var(--rdr-area-font);\n    --font-weight-h: 400;\n    --font-weight-h1: 400;\n    --font-weight-h3: 400;\n    --font-weight-newswire-subtitle: 700;\n    --h3-numerator-override-newswire-subtitle: 1;\n    --letter-spacing-h: 0;\n    --line-height-h: 1.2;\n    --letter-spacing-std: 0;\n    --text-transform-newswire-subtitle: initial;\n    --color-h: #cc0000;\n    --color-h3: white;\n    --color-h4: white;\n    --body-color: #e8e8e8;\n    --text-transform-h: uppercase;\n\n    .themeDark;\n\n    .sm({--header-numerator: 15;});\n    .md({--header-numerator: 16.88;});\n    .lg({--header-numerator: 18.75;});\n    .xl({--header-numerator: 21.09;});\n\n    .handleFontDeclarations;\n    .handleColors;\n});\n\n// Polish\n:lang(pl_pl) {\n    .rdr({\n      --font-family-h: RDRLino-Regular;\n      --font-family-newswire-subtitle: HapnaSlabSerif;\n      --font-family-std: HapnaSlabSerif;\n      --badge-font: RDRLino-Regular;\n   });\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    .rdr({\n      --font-family-h: NotoSerifSC;\n      --font-family-newswire-subtitle: NotoSansSC, ;\n      --font-family-std: NotoSansSC;\n      --area-font: NotoSansSC;\n      --badge-font: RDRLino-Regular, NotoSerifSC;\n   });\n}\n\n// Chinese (Traditional)\n:lang(zh_hant) {\n    .rdr({\n      --font-family-h: NotoSerifTC;\n      --font-family-newswire-subtitle: NotoSansTC;\n      --font-family-std: NotoSansTC;\n      --area-font: NotoSansTC;\n      --badge-font: RDRLino-Regular, NotoSerifTC;\n   });\n}\n\n// Japanese\n:lang(ja_jp) {\n    .rdr({\n      --font-family-h: NotoSerifJP;\n      --font-family-newswire-subtitle: NotoSansJP;\n      --font-family-std: NotoSansJP;\n      --area-font: NotoSansJP;\n      --badge-font: RDRLino-Regular, NotoSerifTC;\n   });\n}\n\n// Korean\n:lang(ko_kr) {\n    .rdr({\n      --font-family-h: NotoSerifKR;\n      --font-family-newswire-subtitle: NotoSansKR;\n      --font-family-std: NotoSansKR;\n      --area-font: NotoSansKR;\n      --badge-font: RDRLino-Regular, NotoSerifKR;\n   });\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n"],
        sourceRoot: ""
      }]), kn.locals = {
        wrapper: "rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022",
        large: "rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92",
        badge: "rockstargames-modules-core-videoplayerc4ed39bbd2766eb49440c0dd7422bc88",
        hero: "rockstargames-modules-core-videoplayera2683dc04cb861acee168e8f9655c73e",
        stdWrapper: "rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6"
      };
      const Pe = kn
    },
    569: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerda6584ae033fc058493a7ee3ca5eb91f{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerda6584ae033fc058493a7ee3ca5eb91f img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerda6584ae033fc058493a7ee3ca5eb91f:focus,.rockstargames-modules-core-videoplayerda6584ae033fc058493a7ee3ca5eb91f:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerda6584ae033fc058493a7ee3ca5eb91f.rockstargames-modules-core-videoplayerbb9e9ec3610b6655b00b068c6d91c1ea{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerda6584ae033fc058493a7ee3ca5eb91f.rockstargames-modules-core-videoplayerbb9e9ec3610b6655b00b068c6d91c1ea img{filter:invert()}.rockstargames-modules-core-videoplayere4daaf67c357bca509c4ec256a811300{background:rgba(0,0,0,.75);height:calc(100% - 3.2rem);left:0;position:absolute;top:0;width:100%;z-index:0}.rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13{--video-card-display:none;align-items:flex-start;aspect-ratio:16/9;cursor:default;display:grid;gap:1rem;grid-template-columns:repeat(3,1fr);height:100%;justify-content:center;overflow-y:auto;padding:3.2rem .5rem 0;pointer-events:all;scrollbar-color:var(--scroll-thumb-color) var(--scroll-track-color);scrollbar-width:auto;width:calc(100% - var(--padding-sides))}.rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13::-webkit-scrollbar{width:8px}.rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13::-webkit-scrollbar-track{background:transparent}.rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb-color);border:none;border-radius:10px}[data-context=newswire-article] .rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13{padding:.25rem .5rem 0}@media (min-width:768px){.rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13{--video-card-display:block}}@media (min-width:1024px){.rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13{grid-template-columns:repeat(4,1fr)}}@media (min-width:1920px){.rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13{grid-template-columns:repeat(5,1fr)}}.rockstargames-modules-core-videoplayere6e0e93c0c23ef391fa8c4eaa4546173{align-items:flex-end;aspect-ratio:16/9;border:none;cursor:pointer;display:flex;justify-content:flex-end;padding:0;position:relative;width:100%}.rockstargames-modules-core-videoplayere6e0e93c0c23ef391fa8c4eaa4546173:focus .rockstargames-modules-core-videoplayerb9597be789a90bcb47f0c44ccdbeb89d,.rockstargames-modules-core-videoplayere6e0e93c0c23ef391fa8c4eaa4546173:hover .rockstargames-modules-core-videoplayerb9597be789a90bcb47f0c44ccdbeb89d{opacity:1}.rockstargames-modules-core-videoplayerb9597be789a90bcb47f0c44ccdbeb89d{-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);background:rgba(0,0,0,.8);color:#fff;font-size:var(--font-size-2);line-height:1.1;opacity:0;padding:var(--padding-xs);position:absolute;text-align:left;transition:opacity .2s ease-in-out;width:100%}.rockstargames-modules-core-videoplayera30cee5cb34c89161199ddcec02c637c{padding-top:56.25%;width:100%}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/ScreenRelated/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CAhEA,wEACI,0BAAA,CAOA,0BAAA,CAHA,MAAA,CAFA,iBAAA,CACA,KAAA,CAGA,UAAA,CADA,SAmEJ,CA9DA,wEAEI,yBAAA,CAMA,sBAAA,CALA,iBAAA,CAQA,cAAA,CANA,YAAA,CAIA,QAAA,CAHA,mCAAA,CAWA,WAAA,CAVA,sBAAA,CAOA,eAAA,CAFA,sBAAA,CACA,kBAAA,CDyTA,mEAAA,CADA,oBAAA,CCrTA,uCAiEJ,CDwPI,2FACI,SCtPR,CDwPI,iGACI,sBCtPR,CDwPI,iGACI,0CAAA,CAEA,WAAA,CADA,kBCrPR,CAzEI,wGACI,sBA2ER,CCrDI,yBAAA,wEDlBI,0BA2EN,CACF,CCxCI,0BAAA,wEDhCI,mCA4EN,CACF,CC3BI,0BAAA,wED9CI,mCA6EN,CACF,CA1EA,wEAGI,oBAAA,CAEA,iBAAA,CACA,WAAA,CACA,cAAA,CANA,YAAA,CACA,wBAAA,CAMA,SAAA,CAEA,iBAAA,CAEA,UAyEJ,CAvEI,4SAGQ,SAwEZ,CAnEA,wEACI,kCAAA,CAAA,0BAAA,CACA,yBAAA,CACA,UAAA,CAEA,4BAAA,CADA,eAAA,CAEA,SAAA,CACA,yBAAA,CAGA,iBAAA,CAFA,eAAA,CAMA,kCAAA,CAFA,UAoEJ,CA/DA,wEACI,kBAAA,CACA,UAiEJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.relatedVideoListWrapper {\n    background: rgba(0, 0, 0, 0.75);\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n    width: 100%;\n    height: calc(100% - 3.2rem);\n}\n\n.relatedVideoList {\n    .scrollbar();\n    --video-card-display: none;\n    aspect-ratio: 16/9;\n\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    align-items: flex-start;\n    gap: 1rem;\n\n    cursor: default;\n    padding: 3.2rem 0.5rem 0;\n    pointer-events: all;\n    overflow-y: auto;\n\n    width: calc(100% - var(--padding-sides));\n    height: 100%;\n\n    [data-context='newswire-article'] & {\n        padding: 0.25rem 0.5rem 0;\n    }\n\n    .md({\n        --video-card-display: block;\n    });\n\n    .lg({\n        grid-template-columns: repeat(4, 1fr);\n    });\n\n    .xl({\n        grid-template-columns: repeat(5, 1fr);\n    });\n}\n\n.thumb {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n\n    aspect-ratio: 16/9;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n\n    position: relative;\n\n    width: 100%;\n\n    &:hover,\n    &:focus {\n        .thumbVideoTitle {\n            opacity: 1;\n        }\n    }\n}\n\n.thumbVideoTitle {\n    backdrop-filter: blur(50px);\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n    line-height: 1.1;\n    font-size: var(--font-size-2);\n    opacity: 0;\n    padding: var(--padding-xs);\n    text-align: left;\n\n    position: absolute;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n}\n\n.thumbImg {\n    padding-top: (9/16 * 100%);\n    width: 100%;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerda6584ae033fc058493a7ee3ca5eb91f",
        selected: "rockstargames-modules-core-videoplayerbb9e9ec3610b6655b00b068c6d91c1ea",
        relatedVideoListWrapper: "rockstargames-modules-core-videoplayere4daaf67c357bca509c4ec256a811300",
        relatedVideoList: "rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13",
        thumb: "rockstargames-modules-core-videoplayere6e0e93c0c23ef391fa8c4eaa4546173",
        thumbVideoTitle: "rockstargames-modules-core-videoplayerb9597be789a90bcb47f0c44ccdbeb89d",
        thumbImg: "rockstargames-modules-core-videoplayera30cee5cb34c89161199ddcec02c637c"
      };
      const d = i
    },
    91253: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayercf77c18623958812f40cdab83aa6d574{filter:blur(var(--blur-because-in-bg,0));height:100%;left:0;position:absolute;top:0;transition:filter .8s;width:100%}.rockstargames-modules-core-videoplayercf77c18623958812f40cdab83aa6d574>*{position:absolute;top:50%;transform:translateY(-50%)}", "", {
        version: 3,
        sources: ["webpack://./src/components/Stillframe/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,wEC6lBI,wCAAA,CDxlBA,WAAA,CAFA,MAAA,CAFA,iBAAA,CACA,KAAA,CC0lBA,qBAAA,CDxlBA,UAiCJ,CArCA,0EAQQ,iBAAA,CACA,OAAA,CAFA,0BAmCR",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.stillframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    > * {\n        transform: translateY(-50%);\n        position: absolute;\n        top: 50%;\n    }\n    .blurryBg;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        stillframe: "rockstargames-modules-core-videoplayercf77c18623958812f40cdab83aa6d574"
      };
      const d = i
    },
    90837: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerdd5fd415de695ac20cd798a968a9eeec{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerdd5fd415de695ac20cd798a968a9eeec img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerdd5fd415de695ac20cd798a968a9eeec:focus,.rockstargames-modules-core-videoplayerdd5fd415de695ac20cd798a968a9eeec:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerdd5fd415de695ac20cd798a968a9eeec.rockstargames-modules-core-videoplayere7d44293eee90473c58ab438469c21e9{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerdd5fd415de695ac20cd798a968a9eeec.rockstargames-modules-core-videoplayere7d44293eee90473c58ab438469c21e9 img{filter:invert()}.rockstargames-modules-core-videoplayera95870af9b1a5c6a626d23c71b698248{background:#000;cursor:pointer;filter:blur(var(--blur-because-in-bg,0));height:100%;left:0;object-fit:contain;position:absolute;top:0;transition:filter .8s;width:100%}.rockstargames-modules-core-videoplayerbb74a1519b1d297e7ab97d8f8ae88f71{bottom:3rem;color:#fff;display:flex;font-size:var(--font-size-3);left:50%;max-width:80%;position:absolute;text-align:center;transform:translateX(-50%);z-index:2}@media (min-width:768px){.rockstargames-modules-core-videoplayerbb74a1519b1d297e7ab97d8f8ae88f71{bottom:6rem;font-size:var(--font-size-4)}}.rockstargames-modules-core-videoplayerbb74a1519b1d297e7ab97d8f8ae88f71>div{background-color:rgba(0,0,0,.5);box-decoration-break:slice;-webkit-box-decoration-break:slice;display:inline;padding:0 var(--padding-xs)}.rockstargames-modules-core-videoplayere21ec5f5b2c235c1505db33747c6435e{bottom:1rem}@media (min-width:768px){.rockstargames-modules-core-videoplayere21ec5f5b2c235c1505db33747c6435e{bottom:2rem}}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/Video/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CAhEA,wEAQI,eAAA,CADA,cAAA,CCqlBA,wCAAA,CDvlBA,WAAA,CAFA,MAAA,CAGA,kBAAA,CALA,iBAAA,CACA,KAAA,CCylBA,qBAAA,CDvlBA,UAwEJ,CAhEA,wEACI,WAAA,CACA,UAAA,CACA,YAAA,CACA,4BAAA,CACA,QAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,0BAAA,CACA,SAkEJ,CCnCI,yBAAA,wED5BI,WAAA,CACA,4BAmEN,CACF,CAjEI,4EAEI,+BAAA,CAEA,0BAAA,CACA,kCAAA,CAJA,cAAA,CAEA,2BAqER,CA/DA,wEACI,WAiEJ,CCnDI,yBAAA,wEDXI,WAkEN,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.rockstarVideoElement {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    cursor: pointer;\n    background: black;\n    .blurryBg;\n}\n\n.customCaptions {\n    bottom: 3rem;\n    color: white;\n    display: flex;\n    font-size: var(--font-size-3);\n    left: 50%;\n    max-width: 80%;\n    position: absolute;\n    text-align: center;\n    transform: translateX(-50%);\n    z-index: 2;\n\n    .md({\n        bottom: 6rem;\n        font-size: var(--font-size-4);\n    });\n\n    & > div {\n        display: inline;\n        background-color: rgba(0, 0, 0, 0.5);\n        padding: 0 var(--padding-xs);\n        box-decoration-break: slice;\n        -webkit-box-decoration-break: slice;\n    }\n}\n\n.controlsInactive {\n    bottom: 1rem;\n\n    .md({\n        bottom: 2rem;\n    });\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerdd5fd415de695ac20cd798a968a9eeec",
        selected: "rockstargames-modules-core-videoplayere7d44293eee90473c58ab438469c21e9",
        rockstarVideoElement: "rockstargames-modules-core-videoplayera95870af9b1a5c6a626d23c71b698248",
        customCaptions: "rockstargames-modules-core-videoplayerbb74a1519b1d297e7ab97d8f8ae88f71",
        controlsInactive: "rockstargames-modules-core-videoplayere21ec5f5b2c235c1505db33747c6435e"
      };
      const d = i
    },
    61299: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerc659acb30b226b50d0dfe51736cb1472{border:none;height:100%;width:100%}", "", {
        version: 3,
        sources: ["webpack://./src/components/YouTubeIframe/index.less"],
        names: [],
        mappings: "AAAA,wEAGI,WAAA,CADA,WAAA,CADA,UAGJ",
        sourcesContent: [".youtubeEmbed {\n    width: 100%;\n    height: 100%;\n    border: none;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        youtubeEmbed: "rockstargames-modules-core-videoplayerc659acb30b226b50d0dfe51736cb1472"
      };
      const d = i
    },
    67930: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerc3acdd763406af22f9aeebb0de208882{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerc3acdd763406af22f9aeebb0de208882 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerc3acdd763406af22f9aeebb0de208882:focus,.rockstargames-modules-core-videoplayerc3acdd763406af22f9aeebb0de208882:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerc3acdd763406af22f9aeebb0de208882.rockstargames-modules-core-videoplayerdb4cd43ec804bdb05b1572501a73db54{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerc3acdd763406af22f9aeebb0de208882.rockstargames-modules-core-videoplayerdb4cd43ec804bdb05b1572501a73db54 img{filter:invert()}.rockstargames-modules-core-videoplayerd2198af42455a28a34075e66f1d8e2bc{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerd2198af42455a28a34075e66f1d8e2bc .rockstargames-modules-core-videoplayera9ab87567cba360260376bdb1d85a3fd{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerd2198af42455a28a34075e66f1d8e2bc{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayerd2198af42455a28a34075e66f1d8e2bc:hover{background-color:#242424}.rockstargames-modules-core-videoplayerd2198af42455a28a34075e66f1d8e2bc:hover .rockstargames-modules-core-videoplayera9ab87567cba360260376bdb1d85a3fd{display:inline-block}}.rockstargames-modules-core-videoplayerc6c27af76d4f0eb4bebd4a3eeb2a8c15{align-items:center;display:flex;height:1.25rem;width:1.25rem}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/Fullscreen/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA7FA,wEC2BI,kBAAA,CADA,YAAA,CAIA,cAAA,CADA,aDsEJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../ui/mixins.less';\n\n.icon {\n    .controlItemIcon();\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerc3acdd763406af22f9aeebb0de208882",
        selected: "rockstargames-modules-core-videoplayerdb4cd43ec804bdb05b1572501a73db54",
        controlItemOptionButton: "rockstargames-modules-core-videoplayerd2198af42455a28a34075e66f1d8e2bc",
        hoverIcon: "rockstargames-modules-core-videoplayera9ab87567cba360260376bdb1d85a3fd",
        icon: "rockstargames-modules-core-videoplayerc6c27af76d4f0eb4bebd4a3eeb2a8c15"
      };
      const d = i
    },
    1648: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayere11192e97d2a27ba228691b61124b5d8{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayere11192e97d2a27ba228691b61124b5d8 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayere11192e97d2a27ba228691b61124b5d8:focus,.rockstargames-modules-core-videoplayere11192e97d2a27ba228691b61124b5d8:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayere11192e97d2a27ba228691b61124b5d8.rockstargames-modules-core-videoplayerc5aef3863ce6af13461074f14e0c28aa{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayere11192e97d2a27ba228691b61124b5d8.rockstargames-modules-core-videoplayerc5aef3863ce6af13461074f14e0c28aa img{filter:invert()}.rockstargames-modules-core-videoplayerebea046139e6c48d68b342d705b29539{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerebea046139e6c48d68b342d705b29539 .rockstargames-modules-core-videoplayerd7878a9788e0e1a47718bb88ca40883c{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerebea046139e6c48d68b342d705b29539{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayerebea046139e6c48d68b342d705b29539:hover{background-color:#242424}.rockstargames-modules-core-videoplayerebea046139e6c48d68b342d705b29539:hover .rockstargames-modules-core-videoplayerd7878a9788e0e1a47718bb88ca40883c{display:inline-block}}.rockstargames-modules-core-videoplayere2995a41e1c230ade4641eb7454a0256{flex-direction:row;gap:var(--grid-gap-xs);pointer-events:none}.rockstargames-modules-core-videoplayerea5d369ad6b480b69c6dc65a82844444,.rockstargames-modules-core-videoplayere2995a41e1c230ade4641eb7454a0256{align-items:center;display:flex}.rockstargames-modules-core-videoplayerea5d369ad6b480b69c6dc65a82844444{height:1.25rem;width:1.25rem}.rockstargames-modules-core-videoplayerdc5ef32629c87c7d0381855d06b27434{color:var(--white-text,#e8e8e8);display:inline-block}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/MenuHandler/components/AirPlay/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA5FA,wEC4JI,kBAAA,CAEA,sBAAA,CAEA,mBD5DJ,CAhGA,gJCyJI,kBAAA,CAFA,YDjDJ,CAtGA,wECyBI,cAAA,CADA,aD8EJ,CAlGA,wECsMI,+BAAA,CAFA,oBD9FJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../../../ui/mixins.less';\n\n/* BUTTON */\n.label {\n    .controlItemButtonLabel();\n}\n\n.icon {\n    .controlItemIcon();\n}\n\n.labelText {\n    .controlItemButtonLabelText();\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayere11192e97d2a27ba228691b61124b5d8",
        selected: "rockstargames-modules-core-videoplayerc5aef3863ce6af13461074f14e0c28aa",
        controlItemOptionButton: "rockstargames-modules-core-videoplayerebea046139e6c48d68b342d705b29539",
        hoverIcon: "rockstargames-modules-core-videoplayerd7878a9788e0e1a47718bb88ca40883c",
        label: "rockstargames-modules-core-videoplayere2995a41e1c230ade4641eb7454a0256",
        icon: "rockstargames-modules-core-videoplayerea5d369ad6b480b69c6dc65a82844444",
        labelText: "rockstargames-modules-core-videoplayerdc5ef32629c87c7d0381855d06b27434"
      };
      const d = i
    },
    75436: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerd448f9e2002ebcefc51286e0afb0399b{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerd448f9e2002ebcefc51286e0afb0399b img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerd448f9e2002ebcefc51286e0afb0399b:focus,.rockstargames-modules-core-videoplayerd448f9e2002ebcefc51286e0afb0399b:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerd448f9e2002ebcefc51286e0afb0399b.rockstargames-modules-core-videoplayerd295c635fc3175bdba53fc003004beef{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerd448f9e2002ebcefc51286e0afb0399b.rockstargames-modules-core-videoplayerd295c635fc3175bdba53fc003004beef img{filter:invert()}.rockstargames-modules-core-videoplayeracaa16ab8f01cb793eec45d372402fd1{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayeracaa16ab8f01cb793eec45d372402fd1 .rockstargames-modules-core-videoplayeredd39fcfb2647270f4303bb5e61e4dc4{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayeracaa16ab8f01cb793eec45d372402fd1{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayeracaa16ab8f01cb793eec45d372402fd1:hover{background-color:#242424}.rockstargames-modules-core-videoplayeracaa16ab8f01cb793eec45d372402fd1:hover .rockstargames-modules-core-videoplayeredd39fcfb2647270f4303bb5e61e4dc4{display:inline-block}}.rockstargames-modules-core-videoplayerf6fffc9ba50d5c569e661962b7686f8b{height:1.25rem;width:1.25rem}.rockstargames-modules-core-videoplayerad6aa8a2077a829a2e713609bd73a3ec,.rockstargames-modules-core-videoplayerf6fffc9ba50d5c569e661962b7686f8b{align-items:center;display:flex}.rockstargames-modules-core-videoplayerad6aa8a2077a829a2e713609bd73a3ec{flex-direction:column;justify-content:center}.rockstargames-modules-core-videoplayereab038eb02473816480fe34d07970ed1{bottom:0;display:unset;position:absolute;width:100%}.rockstargames-modules-core-videoplayercfd96d9f356e720a044c6d9852f5bc53{color:var(--white-text,#e8e8e8);display:inline-block}.rockstargames-modules-core-videoplayercbf98171c3f78cf312c67d1dc52a1441{align-items:center;background-color:hsla(0,0%,7%,.95);border-bottom:1px solid var(--border-color,#282828);color:var(--color-body);display:flex;flex-direction:row;font-family:var(--font-family-body);font-family:HelveticaNowText;font-size:var(--font-size-2);font-size:var(--font-size-3,1rem);font-style:normal;font-weight:var(--font-weight-regular);font-weight:var(--font-weight-bold);font-weight:700;gap:var(--padding-sm);justify-content:space-between;letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);line-height:160%;padding:var(--padding-sm) var(--grid-gap-sm);width:100%}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayercbf98171c3f78cf312c67d1dc52a1441{background-color:rgba(0,0,0,.25);font-size:var(--font-size-2,.75rem)}}.rockstargames-modules-core-videoplayerf49da5773f56cf63ad93459d352136dc{align-items:center;color:var(--white-text,#e8e8e8);display:flex;flex-direction:row;gap:var(--spacing-sm);white-space:nowrap}.rockstargames-modules-core-videoplayerf49da5773f56cf63ad93459d352136dc svg{height:1rem;width:1rem}.rockstargames-modules-core-videoplayerad2b3a54cff72bee78ed53f1325b4d72{align-items:center;display:flex;justify-content:center}.rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96{display:flex;flex-direction:column;max-height:60vh;overflow-y:auto}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96{max-height:var(--options-height,80%)}}.rockstargames-modules-core-videoplayerdccd2413833b410b886462d23f69ee61{color:var(--white-65,hsla(0,0%,100%,.65));pointer-events:none}.rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96 .rockstargames-modules-core-videoplayerbbe121fc34a6b3f0fe59ce773a7c6429{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96 .rockstargames-modules-core-videoplayerbbe121fc34a6b3f0fe59ce773a7c6429 .rockstargames-modules-core-videoplayeredd39fcfb2647270f4303bb5e61e4dc4{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96 .rockstargames-modules-core-videoplayerbbe121fc34a6b3f0fe59ce773a7c6429{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96 .rockstargames-modules-core-videoplayerbbe121fc34a6b3f0fe59ce773a7c6429:hover{background-color:#242424}.rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96 .rockstargames-modules-core-videoplayerbbe121fc34a6b3f0fe59ce773a7c6429:hover .rockstargames-modules-core-videoplayeredd39fcfb2647270f4303bb5e61e4dc4{display:inline-block}}@supports (-moz-appearance:none){.rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96 .rockstargames-modules-core-videoplayerbbe121fc34a6b3f0fe59ce773a7c6429:focus-visible{border-radius:6px;outline:2px solid var(--white-100);outline-offset:-2px}}.rockstargames-modules-core-videoplayerb6f06c079efc144cd470552623bce583{display:inline-block;height:1rem;min-height:1rem;min-width:1rem;pointer-events:none;width:1rem}.rockstargames-modules-core-videoplayerd0ee091e19bdeda1f765dc581de3776e{color:var(--white-65,#fff);font-weight:400}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/MenuHandler/components/Caption/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA5FA,wEC6BI,cAAA,CADA,aDuEJ,CA/FA,gJCsBI,kBAAA,CADA,YDgFJ,CArGA,wEAEI,qBAAA,CACA,sBAkGJ,CA9FA,wEAGI,QAAA,CAFA,aAAA,CACA,iBAAA,CAEA,UAgGJ,CA7FA,wEC4LI,+BAAA,CAFA,oBDzFJ,CA5FA,wECeI,kBAAA,CAGA,kCAAA,CACA,mDAAA,CFuDA,uBAAA,CE9DA,YAAA,CACA,kBAAA,CFmDA,mCAAA,CE3CA,4BAAA,CF0CA,4BAAA,CEzCA,iCAAA,CACA,iBAAA,CF2CA,sCAAA,CAOA,mCAAA,CEjDA,eAAA,CARA,qBAAA,CAFA,6BAAA,CFqDA,yCAAA,CAFA,iCAAA,CExCA,gBAAA,CACA,4CAAA,CAEA,UDwFJ,CCtFI,wCAAA,wEACI,gCAAA,CACA,mCDyFN,CACF,CAtHA,wECmCI,kBAAA,CAGA,+BAAA,CALA,YAAA,CACA,kBAAA,CAEA,qBAAA,CAIA,kBDsFJ,CA9HA,4EC4CQ,WAAA,CADA,UDuFR,CA9HA,wECwKI,kBAAA,CADA,YAAA,CAEA,sBDtCJ,CA/HA,wEC4DI,YAAA,CACA,qBAAA,CAIA,eAAA,CAFA,eDsEJ,CClEI,wCAAA,wEACI,oCDqEN,CACF,CAtIA,wEC6HI,yCAAA,CAEA,mBDWJ,CAtIA,gJCoEI,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CDuEJ,CApJA,wNCiFQ,YDsER,CCnEI,wCAAA,gJACI,mCDsEN,CCpEM,sJACI,wBDsEV,CCvEM,8NAIQ,oBDsEd,CACF,CA/JI,iCCoKA,8JACI,iBAAA,CACA,kCAAA,CACA,mBDFN,CACF,CAjKA,wECuHI,oBAAA,CAKA,WAAA,CAEA,eAAA,CADA,cAAA,CAJA,mBAAA,CAEA,UD8CJ,CArKA,wECsBI,0BAAA,CADA,eDoJJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../../../ui/mixins.less';\n\n/* BUTTON */\n.icon {\n    .controlItemIcon();\n}\n\n.active {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.underline {\n    display: unset;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n\n.labelText {\n    .controlItemButtonLabelText();\n}\n\n/* MENU CONTENT */\n.header {\n    .controlItemMenuHeader();\n}\n\n.menuLabel {\n    .controlItemMenuHeaderLabel();\n}\n\n.backButton {\n    .controlItemMenuHeaderBackButton();\n}\n\n.options {\n    .controlItemMenuOptions();\n}\n\n.subtext {\n    .controlItemButtonSubtext();\n}\n\n.options .button {\n    .controlItemOptionButton();\n\n    @supports (-moz-appearance: none) {\n        .focusState();\n    }\n}\n\n.checkmark {\n    .controlItemButtonSelectedIcon();\n}\n\n.selectedValue {\n    .controlItemMenuHeaderSelectedValue();\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerd448f9e2002ebcefc51286e0afb0399b",
        selected: "rockstargames-modules-core-videoplayerd295c635fc3175bdba53fc003004beef",
        controlItemOptionButton: "rockstargames-modules-core-videoplayeracaa16ab8f01cb793eec45d372402fd1",
        hoverIcon: "rockstargames-modules-core-videoplayeredd39fcfb2647270f4303bb5e61e4dc4",
        icon: "rockstargames-modules-core-videoplayerf6fffc9ba50d5c569e661962b7686f8b",
        active: "rockstargames-modules-core-videoplayerad6aa8a2077a829a2e713609bd73a3ec",
        underline: "rockstargames-modules-core-videoplayereab038eb02473816480fe34d07970ed1",
        labelText: "rockstargames-modules-core-videoplayercfd96d9f356e720a044c6d9852f5bc53",
        header: "rockstargames-modules-core-videoplayercbf98171c3f78cf312c67d1dc52a1441",
        menuLabel: "rockstargames-modules-core-videoplayerf49da5773f56cf63ad93459d352136dc",
        backButton: "rockstargames-modules-core-videoplayerad2b3a54cff72bee78ed53f1325b4d72",
        options: "rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96",
        subtext: "rockstargames-modules-core-videoplayerdccd2413833b410b886462d23f69ee61",
        button: "rockstargames-modules-core-videoplayerbbe121fc34a6b3f0fe59ce773a7c6429",
        checkmark: "rockstargames-modules-core-videoplayerb6f06c079efc144cd470552623bce583",
        selectedValue: "rockstargames-modules-core-videoplayerd0ee091e19bdeda1f765dc581de3776e"
      };
      const d = i
    },
    87958: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayera12f7e0424e52363ec9923d33a93d2e6{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayera12f7e0424e52363ec9923d33a93d2e6 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayera12f7e0424e52363ec9923d33a93d2e6:focus,.rockstargames-modules-core-videoplayera12f7e0424e52363ec9923d33a93d2e6:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayera12f7e0424e52363ec9923d33a93d2e6.rockstargames-modules-core-videoplayerd122fb39a7afc2f1cb7013f3c5fd6e68{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayera12f7e0424e52363ec9923d33a93d2e6.rockstargames-modules-core-videoplayerd122fb39a7afc2f1cb7013f3c5fd6e68 img{filter:invert()}.rockstargames-modules-core-videoplayeraffa436aebf2d19163987ad9a195d63f{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayeraffa436aebf2d19163987ad9a195d63f .rockstargames-modules-core-videoplayercff2539fd7bce7510795610988736d32{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayeraffa436aebf2d19163987ad9a195d63f{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayeraffa436aebf2d19163987ad9a195d63f:hover{background-color:#242424}.rockstargames-modules-core-videoplayeraffa436aebf2d19163987ad9a195d63f:hover .rockstargames-modules-core-videoplayercff2539fd7bce7510795610988736d32{display:inline-block}}.rockstargames-modules-core-videoplayerb0dc743bc7b8c0a36fbcbd42931f280f{align-items:center;display:flex;height:1.25rem;width:1.25rem}.rockstargames-modules-core-videoplayerfb58826eca4adca01b9a4876233ffbf8{display:flex;flex-direction:row;gap:var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerb46e44807793f4183c09817f7ae53eeb{color:var(--white-text,#e8e8e8);display:inline-block}.rockstargames-modules-core-videoplayerfdf535c1fb32ccd28085e718f6885f51{align-items:center;background-color:hsla(0,0%,7%,.95);border-bottom:1px solid var(--border-color,#282828);color:var(--color-body);display:flex;flex-direction:row;font-family:var(--font-family-body);font-family:HelveticaNowText;font-size:var(--font-size-2);font-size:var(--font-size-3,1rem);font-style:normal;font-weight:var(--font-weight-regular);font-weight:var(--font-weight-bold);font-weight:700;gap:var(--padding-sm);justify-content:space-between;letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);line-height:160%;padding:var(--padding-sm) var(--grid-gap-sm);width:100%}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerfdf535c1fb32ccd28085e718f6885f51{background-color:rgba(0,0,0,.25);font-size:var(--font-size-2,.75rem)}}.rockstargames-modules-core-videoplayera49aba86ab8febc1b38ec3e202680d22{align-items:center;color:var(--white-text,#e8e8e8);display:flex;flex-direction:row;gap:var(--spacing-sm);white-space:nowrap}.rockstargames-modules-core-videoplayera49aba86ab8febc1b38ec3e202680d22 svg{height:1rem;width:1rem}.rockstargames-modules-core-videoplayerfaade9f30bc6c05278b4c05fcd848a6c{align-items:center;display:flex;justify-content:center}.rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39{display:flex;flex-direction:column;max-height:60vh;overflow-y:auto}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39{max-height:var(--options-height,80%)}}.rockstargames-modules-core-videoplayercfbcf9fc7c83555f5b2b69a3b97506d7{color:var(--white-65,hsla(0,0%,100%,.65));pointer-events:none}.rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39 .rockstargames-modules-core-videoplayera1912cca564ecf1f1c7454b3032d0c4b{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39 .rockstargames-modules-core-videoplayera1912cca564ecf1f1c7454b3032d0c4b .rockstargames-modules-core-videoplayercff2539fd7bce7510795610988736d32{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39 .rockstargames-modules-core-videoplayera1912cca564ecf1f1c7454b3032d0c4b{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39 .rockstargames-modules-core-videoplayera1912cca564ecf1f1c7454b3032d0c4b:hover{background-color:#242424}.rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39 .rockstargames-modules-core-videoplayera1912cca564ecf1f1c7454b3032d0c4b:hover .rockstargames-modules-core-videoplayercff2539fd7bce7510795610988736d32{display:inline-block}}@supports (-moz-appearance:none){.rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39 .rockstargames-modules-core-videoplayera1912cca564ecf1f1c7454b3032d0c4b:focus-visible{border-radius:6px;outline:2px solid var(--white-100);outline-offset:-2px}}.rockstargames-modules-core-videoplayercff2539fd7bce7510795610988736d32{display:none;position:absolute;right:var(--padding-sm)}@media (hover:hover) and (pointer:fine){:hover .rockstargames-modules-core-videoplayercff2539fd7bce7510795610988736d32{display:inline-block}:hover .rockstargames-modules-core-videoplayercff2539fd7bce7510795610988736d32 svg{height:1rem;min-height:1rem;min-width:1rem;width:1rem}}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/MenuHandler/components/Download/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA5FA,wEC0BI,kBAAA,CADA,YAAA,CAIA,cAAA,CADA,aDuEJ,CA/FA,wEACI,YAAA,CACA,kBAAA,CACA,sBAiGJ,CA9FA,wECoMI,+BAAA,CAFA,oBDhGJ,CA7FA,wECuBI,kBAAA,CAGA,kCAAA,CACA,mDAAA,CFuDA,uBAAA,CE9DA,YAAA,CACA,kBAAA,CFmDA,mCAAA,CE3CA,4BAAA,CF0CA,4BAAA,CEzCA,iCAAA,CACA,iBAAA,CF2CA,sCAAA,CAOA,mCAAA,CEjDA,eAAA,CARA,qBAAA,CAFA,6BAAA,CFqDA,yCAAA,CAFA,iCAAA,CExCA,gBAAA,CACA,4CAAA,CAEA,UDiFJ,CC/EI,wCAAA,wEACI,gCAAA,CACA,mCDkFN,CACF,CAvHA,wEC2CI,kBAAA,CAGA,+BAAA,CALA,YAAA,CACA,kBAAA,CAEA,qBAAA,CAIA,kBD+EJ,CA/HA,4ECoDQ,WAAA,CADA,UDgFR,CA/HA,wECgLI,kBAAA,CADA,YAAA,CAEA,sBD7CJ,CAhIA,wECoEI,YAAA,CACA,qBAAA,CAIA,eAAA,CAFA,eD+DJ,CC3DI,wCAAA,wEACI,oCD8DN,CACF,CAvIA,wECqII,yCAAA,CAEA,mBDIJ,CAvIA,gJC4EI,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CDgEJ,CArJA,wNCyFQ,YD+DR,CC5DI,wCAAA,gJACI,mCD+DN,CC7DM,sJACI,wBD+DV,CChEM,8NAIQ,oBD+Dd,CACF,CAhKI,iCC4KA,8JACI,iBAAA,CACA,kCAAA,CACA,mBDTN,CACF,CAlKA,wEC0II,YAAA,CDvIA,iBAAA,CACA,uBAmKJ,CC3BI,wCACI,+EACI,oBD6BV,CC9BM,mFAKQ,WAAA,CAEA,eAAA,CADA,cAAA,CAFA,UDgCd,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../../../ui/mixins.less';\n\n/* BUTTON */\n.icon {\n    .controlItemIcon();\n}\n\n.label {\n    display: flex;\n    flex-direction: row;\n    gap: var(--grid-gap-sm);\n}\n\n.labelText {\n    .controlItemButtonLabelText();\n}\n\n/* MENU CONTENT */\n.header {\n    .controlItemMenuHeader();\n}\n\n.menuLabel {\n    .controlItemMenuHeaderLabel();\n}\n\n.backButton {\n    .controlItemMenuHeaderBackButton();\n}\n\n.options {\n    .controlItemMenuOptions();\n}\n\n.subtext {\n    .controlItemButtonSubtext();\n}\n\n.options .button {\n    .controlItemOptionButton();\n\n    @supports (-moz-appearance: none) {\n        .focusState();\n    }\n}\n\n.hoverIcon {\n    .controlItemButtonHoverIcon();\n\n    position: absolute;\n    right: var(--padding-sm);\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayera12f7e0424e52363ec9923d33a93d2e6",
        selected: "rockstargames-modules-core-videoplayerd122fb39a7afc2f1cb7013f3c5fd6e68",
        controlItemOptionButton: "rockstargames-modules-core-videoplayeraffa436aebf2d19163987ad9a195d63f",
        hoverIcon: "rockstargames-modules-core-videoplayercff2539fd7bce7510795610988736d32",
        icon: "rockstargames-modules-core-videoplayerb0dc743bc7b8c0a36fbcbd42931f280f",
        label: "rockstargames-modules-core-videoplayerfb58826eca4adca01b9a4876233ffbf8",
        labelText: "rockstargames-modules-core-videoplayerb46e44807793f4183c09817f7ae53eeb",
        header: "rockstargames-modules-core-videoplayerfdf535c1fb32ccd28085e718f6885f51",
        menuLabel: "rockstargames-modules-core-videoplayera49aba86ab8febc1b38ec3e202680d22",
        backButton: "rockstargames-modules-core-videoplayerfaade9f30bc6c05278b4c05fcd848a6c",
        options: "rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39",
        subtext: "rockstargames-modules-core-videoplayercfbcf9fc7c83555f5b2b69a3b97506d7",
        button: "rockstargames-modules-core-videoplayera1912cca564ecf1f1c7454b3032d0c4b"
      };
      const d = i
    },
    94083: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerffff951e5973ce0bc461e1411ad5544d{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerffff951e5973ce0bc461e1411ad5544d img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerffff951e5973ce0bc461e1411ad5544d:focus,.rockstargames-modules-core-videoplayerffff951e5973ce0bc461e1411ad5544d:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerffff951e5973ce0bc461e1411ad5544d.rockstargames-modules-core-videoplayerb3851bdd059e4224115e9aa4df3a5af7{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerffff951e5973ce0bc461e1411ad5544d.rockstargames-modules-core-videoplayerb3851bdd059e4224115e9aa4df3a5af7 img{filter:invert()}.rockstargames-modules-core-videoplayera08db4abb40b87969ac716513f4773b5{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayera08db4abb40b87969ac716513f4773b5 .rockstargames-modules-core-videoplayerb179906ad4f91e0553ffea89b6099ca7{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayera08db4abb40b87969ac716513f4773b5{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayera08db4abb40b87969ac716513f4773b5:hover{background-color:#242424}.rockstargames-modules-core-videoplayera08db4abb40b87969ac716513f4773b5:hover .rockstargames-modules-core-videoplayerb179906ad4f91e0553ffea89b6099ca7{display:inline-block}}.rockstargames-modules-core-videoplayerbb043777fac9db5fc99a1f929a9d3a11{flex-direction:row;gap:var(--grid-gap-xs);pointer-events:none}.rockstargames-modules-core-videoplayerd93ba7789de7d6015c34cffea4122d7e,.rockstargames-modules-core-videoplayerbb043777fac9db5fc99a1f929a9d3a11{align-items:center;display:flex}.rockstargames-modules-core-videoplayerd93ba7789de7d6015c34cffea4122d7e{height:1.25rem;width:1.25rem}.rockstargames-modules-core-videoplayerc2b75d4c9212edb10fbf060b701475e8{position:relative}.rockstargames-modules-core-videoplayerf0c80dac1fc7711ae8a0522b035974c4{position:absolute;right:-.5rem;top:-.15rem;z-index:1}.rockstargames-modules-core-videoplayeraa491006f5962540d770a658a135e4a7{color:var(--white-text,#e8e8e8);display:inline-block}.rockstargames-modules-core-videoplayerd496864a51d200a3f42c9ae33924ade9{align-items:center;background-color:hsla(0,0%,7%,.95);border-bottom:1px solid var(--border-color,#282828);color:var(--color-body);display:flex;flex-direction:row;font-family:var(--font-family-body);font-family:HelveticaNowText;font-size:var(--font-size-2);font-size:var(--font-size-3,1rem);font-style:normal;font-weight:var(--font-weight-regular);font-weight:var(--font-weight-bold);font-weight:700;gap:var(--padding-sm);justify-content:space-between;letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);line-height:160%;padding:var(--padding-sm) var(--grid-gap-sm);width:100%}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerd496864a51d200a3f42c9ae33924ade9{background-color:rgba(0,0,0,.25);font-size:var(--font-size-2,.75rem)}}.rockstargames-modules-core-videoplayerf5bbeae0cc261779d5892926c364956d{align-items:center;color:var(--white-text,#e8e8e8);display:flex;flex-direction:row;gap:var(--spacing-sm);white-space:nowrap}.rockstargames-modules-core-videoplayerf5bbeae0cc261779d5892926c364956d svg{height:1rem;width:1rem}.rockstargames-modules-core-videoplayerac946d5fb2752122d5122005288623d2{align-items:center;display:flex;justify-content:center}.rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4{display:flex;flex-direction:column;max-height:60vh;overflow-y:auto}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4{max-height:var(--options-height,80%)}}.rockstargames-modules-core-videoplayerb31488b2213ac80c231638fcb2345803{color:var(--white-65,hsla(0,0%,100%,.65));pointer-events:none;pointer-events:all}.rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4 .rockstargames-modules-core-videoplayera6245cc347de7e8fb01377f8167e4949{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4 .rockstargames-modules-core-videoplayera6245cc347de7e8fb01377f8167e4949 .rockstargames-modules-core-videoplayerb179906ad4f91e0553ffea89b6099ca7{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4 .rockstargames-modules-core-videoplayera6245cc347de7e8fb01377f8167e4949{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4 .rockstargames-modules-core-videoplayera6245cc347de7e8fb01377f8167e4949:hover{background-color:#242424}.rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4 .rockstargames-modules-core-videoplayera6245cc347de7e8fb01377f8167e4949:hover .rockstargames-modules-core-videoplayerb179906ad4f91e0553ffea89b6099ca7{display:inline-block}}@supports (-moz-appearance:none){.rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4 .rockstargames-modules-core-videoplayera6245cc347de7e8fb01377f8167e4949:focus-visible{border-radius:6px;outline:2px solid var(--white-100);outline-offset:-2px}}.rockstargames-modules-core-videoplayerbcbf6f3dc9a8c1ce5ba36fe828f0721e{display:inline-block;height:1rem;min-height:1rem;min-width:1rem;pointer-events:none;width:1rem}.rockstargames-modules-core-videoplayerd27f58ca4744c1aff29fe7f665604c9f{color:var(--white-65,#fff);font-weight:400}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/MenuHandler/components/Quality/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA5FA,wEC4JI,kBAAA,CAEA,sBAAA,CAEA,mBD5DJ,CAhGA,gJCyJI,kBAAA,CAFA,YDjDJ,CAtGA,wECyBI,cAAA,CADA,aD8EJ,CAlGA,wEACI,iBAoGJ,CAjGA,wEACI,iBAAA,CAEA,YAAA,CADA,WAAA,CAEA,SAmGJ,CAhGA,wEC2LI,+BAAA,CAFA,oBDrFJ,CA/FA,wECcI,kBAAA,CAGA,kCAAA,CACA,mDAAA,CFuDA,uBAAA,CE9DA,YAAA,CACA,kBAAA,CFmDA,mCAAA,CE3CA,4BAAA,CF0CA,4BAAA,CEzCA,iCAAA,CACA,iBAAA,CF2CA,sCAAA,CAOA,mCAAA,CEjDA,eAAA,CARA,qBAAA,CAFA,6BAAA,CFqDA,yCAAA,CAFA,iCAAA,CExCA,gBAAA,CACA,4CAAA,CAEA,UD4FJ,CC1FI,wCAAA,wEACI,gCAAA,CACA,mCD6FN,CACF,CAzHA,wECkCI,kBAAA,CAGA,+BAAA,CALA,YAAA,CACA,kBAAA,CAEA,qBAAA,CAIA,kBD0FJ,CAjIA,4EC2CQ,WAAA,CADA,UD2FR,CAjIA,wECuKI,kBAAA,CADA,YAAA,CAEA,sBDlCJ,CAlIA,wEC2DI,YAAA,CACA,qBAAA,CAIA,eAAA,CAFA,eD0EJ,CCtEI,wCAAA,wEACI,oCDyEN,CACF,CAzIA,wEC4HI,yCAAA,CAEA,mBAAA,CD5HA,kBA4IJ,CAzIA,gJCkEI,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD4EJ,CAvJA,wNC+EQ,YD2ER,CCxEI,wCAAA,gJACI,mCD2EN,CCzEM,sJACI,wBD2EV,CC5EM,8NAIQ,oBD2Ed,CACF,CAlKI,iCCkKA,8JACI,iBAAA,CACA,kCAAA,CACA,mBDGN,CACF,CApKA,wECqHI,oBAAA,CAKA,WAAA,CAEA,eAAA,CADA,cAAA,CAJA,mBAAA,CAEA,UDmDJ,CAxKA,wECoBI,0BAAA,CADA,eDyJJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../../../ui/mixins.less';\n\n/* BUTTON */\n.label {\n    .controlItemButtonLabel();\n}\n\n.icon {\n    .controlItemIcon();\n}\n\n.iconAndLabelContainer {\n    position: relative;\n}\n\n.iconLabel {\n    position: absolute;\n    top: -0.15rem;\n    right: -0.5rem;\n    z-index: 1;\n}\n\n.labelText {\n    .controlItemButtonLabelText();\n}\n\n/* MENU CONTENT */\n.header {\n    .controlItemMenuHeader();\n}\n\n.menuLabel {\n    .controlItemMenuHeaderLabel();\n}\n\n.backButton {\n    .controlItemMenuHeaderBackButton();\n}\n\n.options {\n    .controlItemMenuOptions();\n}\n\n.subtext {\n    .controlItemButtonSubtext();\n    pointer-events: all;\n}\n\n.options .button {\n    .controlItemOptionButton();\n\n    @supports (-moz-appearance: none) {\n        .focusState();\n    }\n}\n\n.checkmark {\n    .controlItemButtonSelectedIcon();\n}\n\n.selectedValue {\n    .controlItemMenuHeaderSelectedValue();\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerffff951e5973ce0bc461e1411ad5544d",
        selected: "rockstargames-modules-core-videoplayerb3851bdd059e4224115e9aa4df3a5af7",
        controlItemOptionButton: "rockstargames-modules-core-videoplayera08db4abb40b87969ac716513f4773b5",
        hoverIcon: "rockstargames-modules-core-videoplayerb179906ad4f91e0553ffea89b6099ca7",
        label: "rockstargames-modules-core-videoplayerbb043777fac9db5fc99a1f929a9d3a11",
        icon: "rockstargames-modules-core-videoplayerd93ba7789de7d6015c34cffea4122d7e",
        iconAndLabelContainer: "rockstargames-modules-core-videoplayerc2b75d4c9212edb10fbf060b701475e8",
        iconLabel: "rockstargames-modules-core-videoplayerf0c80dac1fc7711ae8a0522b035974c4",
        labelText: "rockstargames-modules-core-videoplayeraa491006f5962540d770a658a135e4a7",
        header: "rockstargames-modules-core-videoplayerd496864a51d200a3f42c9ae33924ade9",
        menuLabel: "rockstargames-modules-core-videoplayerf5bbeae0cc261779d5892926c364956d",
        backButton: "rockstargames-modules-core-videoplayerac946d5fb2752122d5122005288623d2",
        options: "rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4",
        subtext: "rockstargames-modules-core-videoplayerb31488b2213ac80c231638fcb2345803",
        button: "rockstargames-modules-core-videoplayera6245cc347de7e8fb01377f8167e4949",
        checkmark: "rockstargames-modules-core-videoplayerbcbf6f3dc9a8c1ce5ba36fe828f0721e",
        selectedValue: "rockstargames-modules-core-videoplayerd27f58ca4744c1aff29fe7f665604c9f"
      };
      const d = i
    },
    35849: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerb2ee867461f243775c94c92f03bebb07{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerb2ee867461f243775c94c92f03bebb07 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerb2ee867461f243775c94c92f03bebb07:focus,.rockstargames-modules-core-videoplayerb2ee867461f243775c94c92f03bebb07:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerb2ee867461f243775c94c92f03bebb07.rockstargames-modules-core-videoplayera4f7da3a04e3bf51ce976b38463d6e76{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerb2ee867461f243775c94c92f03bebb07.rockstargames-modules-core-videoplayera4f7da3a04e3bf51ce976b38463d6e76 img{filter:invert()}.rockstargames-modules-core-videoplayera58dd8da25850608cc293aca827b5425{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayera58dd8da25850608cc293aca827b5425 .rockstargames-modules-core-videoplayerd64a78e1874a8ae8e723a9331ad28842{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayera58dd8da25850608cc293aca827b5425{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayera58dd8da25850608cc293aca827b5425:hover{background-color:#242424}.rockstargames-modules-core-videoplayera58dd8da25850608cc293aca827b5425:hover .rockstargames-modules-core-videoplayerd64a78e1874a8ae8e723a9331ad28842{display:inline-block}}.rockstargames-modules-core-videoplayerad04cd3af46a2098552828e125ba5cc9{flex-direction:row;gap:var(--grid-gap-xs);gap:var(--grid-gap-sm);pointer-events:none}.rockstargames-modules-core-videoplayeracf2ccafeee880e90d1d5135c4b0f183,.rockstargames-modules-core-videoplayerad04cd3af46a2098552828e125ba5cc9{align-items:center;display:flex}.rockstargames-modules-core-videoplayeracf2ccafeee880e90d1d5135c4b0f183{height:1.25rem;width:1.25rem}.rockstargames-modules-core-videoplayerd74cb9a7c360f79cb1592f508c2f479e{color:var(--white-text,#e8e8e8);display:inline-block}.rockstargames-modules-core-videoplayerd55dffdc995d61aa68662c0c059c1de0{align-items:center;background-color:hsla(0,0%,7%,.95);border-bottom:1px solid var(--border-color,#282828);color:var(--color-body);display:flex;flex-direction:row;font-family:var(--font-family-body);font-family:HelveticaNowText;font-size:var(--font-size-2);font-size:var(--font-size-3,1rem);font-style:normal;font-weight:var(--font-weight-regular);font-weight:var(--font-weight-bold);font-weight:700;gap:var(--padding-sm);justify-content:space-between;letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);line-height:160%;padding:var(--padding-sm) var(--grid-gap-sm);width:100%}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerd55dffdc995d61aa68662c0c059c1de0{background-color:rgba(0,0,0,.25);font-size:var(--font-size-2,.75rem)}}.rockstargames-modules-core-videoplayerc22389392e517fdd67ee90cfc40084f7{align-items:center;color:var(--white-text,#e8e8e8);display:flex;flex-direction:row;gap:var(--spacing-sm);white-space:nowrap}.rockstargames-modules-core-videoplayerc22389392e517fdd67ee90cfc40084f7 svg{height:1rem;width:1rem}.rockstargames-modules-core-videoplayera59d9b8eedfacc0e881094fd97580f60{align-items:center;display:flex;justify-content:center}.rockstargames-modules-core-videoplayereaec75f5013a2740f6afaf67f54630fa{background-color:hsla(0,0%,7%,.95);display:flex;flex-direction:column;gap:var(--grid-gap-sm);padding:var(--padding-sm)}.rockstargames-modules-core-videoplayerc146553c0d0ed5e815e6d43a4a1cc5db{height:.75rem;width:.75rem}.rockstargames-modules-core-videoplayerba7be2a003dcf26c38c7a12083fee5e1,.rockstargames-modules-core-videoplayere35d5cdf5dafb59929c40e759f7bba4a,.rockstargames-modules-core-videoplayerbdf5272bac190d9cad28b8e3810f25e3{height:calc(2rem / 2);width:calc(2rem / 2)}.rockstargames-modules-core-videoplayerb29c33ba9d6bc61f4b34ae59fafa0ab0{-ms-overflow-style:none;align-items:center;display:flex;flex-direction:row;gap:var(--grid-gap-xs);position:relative;scrollbar-width:none}.rockstargames-modules-core-videoplayerb29c33ba9d6bc61f4b34ae59fafa0ab0::-webkit-scrollbar{height:0;width:0}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd{align-items:center;background-color:var(--black-200,#000);border:none;border-radius:100%;cursor:pointer;display:flex;justify-content:center;min-height:2rem;min-width:2rem;padding:0;position:relative;transition:all .1s ease-in-out}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd svg{height:calc(2rem / 2);width:calc(2rem / 2)}@supports (-moz-appearance:none){.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd:focus-visible{border-radius:6px;outline:2px solid var(--white-100);outline-offset:-2px}}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd:hover{background-color:var(--white-100,#fff);transition:all .1s ease-in-out}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd:hover .rockstargames-modules-core-videoplayerba7be2a003dcf26c38c7a12083fee5e1 path,.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd:hover .rockstargames-modules-core-videoplayere35d5cdf5dafb59929c40e759f7bba4a path,.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd:hover .rockstargames-modules-core-videoplayerbdf5272bac190d9cad28b8e3810f25e3 path{fill:#000;transition:all .1s ease-in-out}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd.rockstargames-modules-core-videoplayerf0c9d2597e358c0fccef11363999bca3{background-color:#1877f2}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd.rockstargames-modules-core-videoplayerf0c9d2597e358c0fccef11363999bca3:hover{background-color:#0b66dd}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd.rockstargames-modules-core-videoplayereab9d4c9e231234977cc6f065d6680b2{background-color:#ff0069}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd.rockstargames-modules-core-videoplayereab9d4c9e231234977cc6f065d6680b2:hover{background-color:#b90041}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd.rockstargames-modules-core-videoplayerbefc80914acc62b68a4a446b28d33659{background-color:#ff5700}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd.rockstargames-modules-core-videoplayerbefc80914acc62b68a4a446b28d33659:hover{background-color:#df4200}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd.rockstargames-modules-core-videoplayerec689763b7e76c19eeca91da59cd102e{background-color:var(--white-100,#fff)}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd.rockstargames-modules-core-videoplayerec689763b7e76c19eeca91da59cd102e:hover{background-color:#cdcdcd}.rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd.rockstargames-modules-core-videoplayerd15832c87a32356315b91dbc10d73129{border:1px solid var(--border-color)}.rockstargames-modules-core-videoplayerbecaf2a718a3a5f52ca61d6cf30c6079{align-items:center;background-color:#121212;border-radius:var(--border-radius-sm,4px);color:var(--white-100,#fff);justify-content:center;padding:var(--padding-xxs,5px) var(--padding-xs,10px);position:absolute;top:calc(2rem * -1);visibility:hidden}.rockstargames-modules-core-videoplayerbecaf2a718a3a5f52ca61d6cf30c6079.rockstargames-modules-core-videoplayerc3de5cd6c311051e41c01d53802a73f5,.rockstargames-modules-core-videoplayercd63edb36e275b801cd92392e8a581f1{display:flex}.rockstargames-modules-core-videoplayercd63edb36e275b801cd92392e8a581f1{border:1px solid var(--black-15,hsla(0,0%,7%,.15));border-radius:var(--border-radius-sm,4px);flex-direction:row;flex-wrap:nowrap}.rockstargames-modules-core-videoplayercd63edb36e275b801cd92392e8a581f1 input{background:var(--white-15,hsla(0,0%,100%,.15));border:none;border-radius:var(--border-radius-sm,4px) 0 0 var(--border-radius-sm,4px);color:var(--white-65);display:inline-block;padding:var(--padding-xs,10px);width:100%}.rockstargames-modules-core-videoplayercd63edb36e275b801cd92392e8a581f1 button{text-wrap:nowrap;align-items:center;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:var(--white-100,#fff);border:none;border-radius:0 var(--border-radius-sm,4px) var(--border-radius-sm,4px) 0;color:var(--black-200,#000);cursor:pointer;display:flex;gap:var(--grid-gap-xxs);justify-content:center;padding:var(--padding-xs,10px) var(--padding-xs,10px) var(--padding-xs,0) var(--padding-xs,0);width:-moz-fit-content;width:fit-content}@supports (-moz-appearance:none){.rockstargames-modules-core-videoplayercd63edb36e275b801cd92392e8a581f1 button:focus-visible{border-radius:6px;outline:2px solid var(--white-100);outline-offset:-2px}}.rockstargames-modules-core-videoplayerfb159b9c329eabb5e7ef85a181d3b673{align-items:center;color:var(--white-65,hsla(0,0%,100%,.65));cursor:pointer;font-size:.75rem;font-style:normal;font-weight:400;letter-spacing:-.4px;line-height:1.6}.rockstargames-modules-core-videoplayerfb159b9c329eabb5e7ef85a181d3b673,.rockstargames-modules-core-videoplayerfb159b9c329eabb5e7ef85a181d3b673 label{display:flex;flex-direction:row;gap:var(--grid-gap-xxs)}.rockstargames-modules-core-videoplayerdf33f5089ecfc18d94f8b256f8f0a9b2{border:2px solid var(--white-100,#fff);border-radius:2px;cursor:pointer;height:.75rem;width:.75rem}.rockstargames-modules-core-videoplayerdf33f5089ecfc18d94f8b256f8f0a9b2.rockstargames-modules-core-videoplayera4f7da3a04e3bf51ce976b38463d6e76{background-color:var(--white-100,#fff)}.rockstargames-modules-core-videoplayerdf33f5089ecfc18d94f8b256f8f0a9b2.rockstargames-modules-core-videoplayera4f7da3a04e3bf51ce976b38463d6e76 .rockstargames-modules-core-videoplayerfbc5dcf4ef3e46db7117f2b4f8bb6306{display:block;height:100%;width:100%}@supports (-moz-appearance:none){.rockstargames-modules-core-videoplayerdf33f5089ecfc18d94f8b256f8f0a9b2:focus-visible{border-radius:6px;outline:2px solid var(--white-100);outline-offset:-2px}}.rockstargames-modules-core-videoplayerf867ad9d942ae00d9b65bd01f73fb9d0{pointer-events:none;text-decoration:underline}.rockstargames-modules-core-videoplayerf867ad9d942ae00d9b65bd01f73fb9d0.rockstargames-modules-core-videoplayera4f7da3a04e3bf51ce976b38463d6e76{color:var(--white-100,#fff)}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/MenuHandler/components/Share/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA1FA,wEC0JI,kBAAA,CAEA,sBAAA,CD1JA,sBAAA,CC4JA,mBD3DJ,CA9FA,gJCsJI,kBAAA,CAFA,YDhDJ,CApGA,wECsBI,cAAA,CADA,aD+EJ,CAhGA,wECmMI,+BAAA,CAFA,oBD7FJ,CA/FA,wECsBI,kBAAA,CAGA,kCAAA,CACA,mDAAA,CFuDA,uBAAA,CE9DA,YAAA,CACA,kBAAA,CFmDA,mCAAA,CE3CA,4BAAA,CF0CA,4BAAA,CEzCA,iCAAA,CACA,iBAAA,CF2CA,sCAAA,CAOA,mCAAA,CEjDA,eAAA,CARA,qBAAA,CAFA,6BAAA,CFqDA,yCAAA,CAFA,iCAAA,CExCA,gBAAA,CACA,4CAAA,CAEA,UDoFJ,CClFI,wCAAA,wEACI,gCAAA,CACA,mCDqFN,CACF,CAzHA,wEC0CI,kBAAA,CAGA,+BAAA,CALA,YAAA,CACA,kBAAA,CAEA,qBAAA,CAIA,kBDkFJ,CAjIA,4ECmDQ,WAAA,CADA,UDmFR,CAjIA,wEC+KI,kBAAA,CADA,YAAA,CAEA,sBD1CJ,CAlIA,wEAKI,kCAAA,CAJA,YAAA,CACA,qBAAA,CACA,sBAAA,CAGA,yBAmIJ,CAhIA,wEAEI,aAAA,CADA,YAmIJ,CA/HA,wNAII,qBAAA,CADA,oBAkIJ,CA9HA,wEAWI,uBAAA,CAPA,kBAAA,CAHA,YAAA,CAEA,kBAAA,CAEA,sBAAA,CAHA,iBAAA,CAQA,oBAgIJ,CA9HI,2FAGI,QAAA,CADA,OAiIR,CA5HA,wEAGI,kBAAA,CAEA,sCAAA,CACA,WAAA,CACA,kBAAA,CACA,cAAA,CAPA,YAAA,CACA,sBAAA,CAYA,eAAA,CADA,cAAA,CAJA,SAAA,CAEA,iBAAA,CAKA,8BA0HJ,CA1IA,4EAoBQ,qBAAA,CADA,oBA2HR,CAvHI,iCCuHA,sFACI,iBAAA,CACA,kCAAA,CACA,mBDGN,CACF,CA1HI,8EACI,sCAAA,CAEA,8BA2HR,CA9HI,idASY,SAAA,CAEA,8BAyHhB,CApHI,+IACI,wBAsHR,CApHQ,qJACI,wBAsHZ,CAlHI,+IACI,wBAoHR,CAlHQ,qJACI,wBAoHZ,CAhHI,+IACI,wBAkHR,CAhHQ,qJACI,wBAkHZ,CA9GI,+IACI,sCAgHR,CA9GQ,qJACI,wBAgHZ,CA5GI,+IACI,oCA8GR,CA1GA,wEAEI,kBAAA,CAGA,wBAAA,CACA,yCAAA,CACA,2BAAA,CAJA,sBAAA,CAFA,qDAAA,CASA,iBAAA,CACA,mBAAA,CAHA,iBA6GJ,CAnGA,uNAJQ,YAiHR,CA7GA,wEAKI,kDAAA,CACA,yCAAA,CAJA,kBAAA,CACA,gBA0GJ,CA7GA,8EAWQ,8CAAA,CACA,WAAA,CACA,yEAAA,CAEA,qBAAA,CANA,oBAAA,CAOA,8BAAA,CAEA,UAoGR,CAtHA,+EAoCQ,gBAAA,CAZA,kBAAA,CAOA,kCAAA,CAAA,0BAAA,CADA,gCAAA,CADA,WAAA,CAFA,yEAAA,CAKA,2BAAA,CACA,cAAA,CAXA,YAAA,CAGA,uBAAA,CAFA,sBAAA,CAWA,6FAAA,CAIA,sBAAA,CAAA,iBA+FR,CA7FQ,iCCIJ,6FACI,iBAAA,CACA,kCAAA,CACA,mBD4FN,CACF,CA9FA,wEAGI,kBAAA,CAGA,yCAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA,CAEA,oBAAA,CADA,eAgGJ,CA3GA,sJACI,YAAA,CACA,kBAAA,CAEA,uBA4GJ,CA3FA,wEAKI,sCAAA,CADA,iBAAA,CAEA,cAAA,CAJA,aAAA,CADA,YAiGJ,CA1FI,+IACI,sCA4FR,CA7FI,uNAIQ,aAAA,CAGA,WAAA,CADA,UA4FZ,CAvFI,iCC1CA,sFACI,iBAAA,CACA,kCAAA,CACA,mBDoIN,CACF,CAzFA,wEACI,mBAAA,CACA,yBA2FJ,CAzFI,+IACI,2BA2FR",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../../../ui/mixins.less';\n\n@icon-size: 2rem;\n\n/* BUTTON */\n.label {\n    .controlItemButtonLabel();\n    gap: var(--grid-gap-sm);\n}\n\n.icon {\n    .controlItemIcon();\n}\n\n.labelText {\n    .controlItemButtonLabelText();\n}\n\n/* MENU CONTENT */\n.header {\n    .controlItemMenuHeader();\n}\n\n.menuLabel {\n    .controlItemMenuHeaderLabel();\n}\n\n.backButton {\n    .controlItemMenuHeaderBackButton();\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--grid-gap-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    padding: var(--padding-sm);\n}\n\n.copyLinkIcon {\n    width: 0.75rem;\n    height: 0.75rem;\n}\n\n.downloadIcon,\n.embedIcon,\n.linkIcon {\n    width: calc(@icon-size / 2);\n    height: calc(@icon-size / 2);\n}\n\n.socialIcons {\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    // overflow-x: auto;\n\n    /* hide scrollbar */\n    scrollbar-width: none; /* Firefox */\n    -ms-overflow-style: none; /* Internet Explorer 10+ */\n    &::-webkit-scrollbar {\n        /* Chrome */\n        width: 0;\n        height: 0;\n    }\n}\n\n.buttonLink {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--black-200, #000);\n    border: none;\n    border-radius: 100%;\n    cursor: pointer;\n    padding: 0;\n\n    position: relative;\n\n    min-width: @icon-size;\n    min-height: @icon-size;\n\n    transition: all 0.1s ease-in-out;\n\n    svg {\n        width: calc(@icon-size / 2);\n        height: calc(@icon-size / 2);\n    }\n\n    @supports (-moz-appearance: none) {\n        .focusState();\n    }\n\n    &:hover {\n        background-color: var(--white-100, #fff);\n\n        transition: all 0.1s ease-in-out;\n\n        .downloadIcon,\n        .embedIcon,\n        .linkIcon {\n            path {\n                fill: #000;\n\n                transition: all 0.1s ease-in-out;\n            }\n        }\n    }\n\n    &.facebook {\n        background-color: #1877f2;\n\n        &:hover {\n            background-color: #0b66dd;\n        }\n    }\n\n    &.instagram {\n        background-color: #ff0069;\n\n        &:hover {\n            background-color: #b90041;\n        }\n    }\n\n    &.reddit {\n        background-color: #ff5700;\n\n        &:hover {\n            background-color: #df4200;\n        }\n    }\n\n    &.twitter {\n        background-color: var(--white-100, #fff);\n\n        &:hover {\n            background-color: #cdcdcd;\n        }\n    }\n\n    &.embed {\n        border: 1px solid var(--border-color);\n    }\n}\n\n.buttonActionIndicator {\n    padding: var(--padding-xxs, 5px) var(--padding-xs, 10px);\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(18, 18, 18, 1);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--white-100, #fff);\n    visibility: hidden;\n\n    position: absolute;\n    top: calc(@icon-size * -1);\n\n    &.showActionIndicator {\n        display: flex;\n    }\n}\n\n.copyLink {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n\n    border: 1px solid var(--black-15, rgba(18, 18, 18, 0.15));\n    border-radius: var(--border-radius-sm, 4px);\n\n    input {\n        display: inline-block;\n\n        background: var(--white-15, rgba(255, 255, 255, 0.15));\n        border: none;\n        border-radius: var(--border-radius-sm, 4px) 0px 0px\n            var(--border-radius-sm, 4px);\n        color: var(--white-65);\n        padding: var(--padding-xs, 10px);\n\n        width: 100%;\n    }\n\n    button {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: var(--grid-gap-xxs);\n\n        border-radius: 0px var(--border-radius-sm, 4px)\n            var(--border-radius-sm, 4px) 0px;\n        border: none;\n        background: var(--white-100, #fff);\n        backdrop-filter: blur(25px);\n        color: var(--black-200, #000);\n        cursor: pointer;\n        padding: var(--padding-xs, 10px) var(--padding-xs, 10px)\n            var(--padding-xs, 0px) var(--padding-xs, 0px);\n        text-wrap: nowrap;\n\n        width: fit-content;\n\n        @supports (-moz-appearance: none) {\n            .focusState();\n        }\n    }\n}\n\n.shareLink {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xxs);\n\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n    cursor: pointer;\n    font-size: 0.75rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.6;\n    letter-spacing: -0.4px;\n\n    label {\n        display: flex;\n        flex-direction: row;\n        gap: var(--grid-gap-xxs);\n    }\n}\n\n.checkbox {\n    width: 0.75rem;\n    height: 0.75rem;\n\n    border-radius: 2px;\n    border: 2px solid var(--white-100, #fff);\n    cursor: pointer;\n\n    &.selected {\n        background-color: var(--white-100, #fff);\n\n        .checkmark {\n            display: block;\n\n            width: 100%;\n            height: 100%;\n        }\n    }\n\n    @supports (-moz-appearance: none) {\n        .focusState();\n    }\n}\n\n.timestamp {\n    pointer-events: none;\n    text-decoration: underline;\n\n    &.selected {\n        color: var(--white-100, #fff);\n    }\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerb2ee867461f243775c94c92f03bebb07",
        selected: "rockstargames-modules-core-videoplayera4f7da3a04e3bf51ce976b38463d6e76",
        controlItemOptionButton: "rockstargames-modules-core-videoplayera58dd8da25850608cc293aca827b5425",
        hoverIcon: "rockstargames-modules-core-videoplayerd64a78e1874a8ae8e723a9331ad28842",
        label: "rockstargames-modules-core-videoplayerad04cd3af46a2098552828e125ba5cc9",
        icon: "rockstargames-modules-core-videoplayeracf2ccafeee880e90d1d5135c4b0f183",
        labelText: "rockstargames-modules-core-videoplayerd74cb9a7c360f79cb1592f508c2f479e",
        header: "rockstargames-modules-core-videoplayerd55dffdc995d61aa68662c0c059c1de0",
        menuLabel: "rockstargames-modules-core-videoplayerc22389392e517fdd67ee90cfc40084f7",
        backButton: "rockstargames-modules-core-videoplayera59d9b8eedfacc0e881094fd97580f60",
        content: "rockstargames-modules-core-videoplayereaec75f5013a2740f6afaf67f54630fa",
        copyLinkIcon: "rockstargames-modules-core-videoplayerc146553c0d0ed5e815e6d43a4a1cc5db",
        downloadIcon: "rockstargames-modules-core-videoplayerba7be2a003dcf26c38c7a12083fee5e1",
        embedIcon: "rockstargames-modules-core-videoplayere35d5cdf5dafb59929c40e759f7bba4a",
        linkIcon: "rockstargames-modules-core-videoplayerbdf5272bac190d9cad28b8e3810f25e3",
        socialIcons: "rockstargames-modules-core-videoplayerb29c33ba9d6bc61f4b34ae59fafa0ab0",
        buttonLink: "rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd",
        facebook: "rockstargames-modules-core-videoplayerf0c9d2597e358c0fccef11363999bca3",
        instagram: "rockstargames-modules-core-videoplayereab9d4c9e231234977cc6f065d6680b2",
        reddit: "rockstargames-modules-core-videoplayerbefc80914acc62b68a4a446b28d33659",
        twitter: "rockstargames-modules-core-videoplayerec689763b7e76c19eeca91da59cd102e",
        embed: "rockstargames-modules-core-videoplayerd15832c87a32356315b91dbc10d73129",
        buttonActionIndicator: "rockstargames-modules-core-videoplayerbecaf2a718a3a5f52ca61d6cf30c6079",
        showActionIndicator: "rockstargames-modules-core-videoplayerc3de5cd6c311051e41c01d53802a73f5",
        copyLink: "rockstargames-modules-core-videoplayercd63edb36e275b801cd92392e8a581f1",
        shareLink: "rockstargames-modules-core-videoplayerfb159b9c329eabb5e7ef85a181d3b673",
        checkbox: "rockstargames-modules-core-videoplayerdf33f5089ecfc18d94f8b256f8f0a9b2",
        checkmark: "rockstargames-modules-core-videoplayerfbc5dcf4ef3e46db7117f2b4f8bb6306",
        timestamp: "rockstargames-modules-core-videoplayerf867ad9d942ae00d9b65bd01f73fb9d0"
      };
      const d = i
    },
    8168: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerdee794dde9f5ecdb6af6032a5b833096{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerdee794dde9f5ecdb6af6032a5b833096 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerdee794dde9f5ecdb6af6032a5b833096:focus,.rockstargames-modules-core-videoplayerdee794dde9f5ecdb6af6032a5b833096:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerdee794dde9f5ecdb6af6032a5b833096.rockstargames-modules-core-videoplayera90e18d38346363446705eee85c61be9{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerdee794dde9f5ecdb6af6032a5b833096.rockstargames-modules-core-videoplayera90e18d38346363446705eee85c61be9 img{filter:invert()}.rockstargames-modules-core-videoplayerf6fb06bf1eb960308829c1a31367d2b8{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerf6fb06bf1eb960308829c1a31367d2b8 .rockstargames-modules-core-videoplayerc24e575c02330ad78dc27f333cdf42f5{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerf6fb06bf1eb960308829c1a31367d2b8{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayerf6fb06bf1eb960308829c1a31367d2b8:hover{background-color:#242424}.rockstargames-modules-core-videoplayerf6fb06bf1eb960308829c1a31367d2b8:hover .rockstargames-modules-core-videoplayerc24e575c02330ad78dc27f333cdf42f5{display:inline-block}}.rockstargames-modules-core-videoplayere553b94795a0b079d20d0d77beaee659{height:1.25rem;width:1.25rem}.rockstargames-modules-core-videoplayerc1e2a883d91ed4410e6d2c24b64c586b,.rockstargames-modules-core-videoplayere553b94795a0b079d20d0d77beaee659{align-items:center;display:flex}.rockstargames-modules-core-videoplayerc1e2a883d91ed4410e6d2c24b64c586b{background-color:initial;background-color:none;border:none;cursor:pointer;gap:var(--grid-gap-sm);justify-content:center;opacity:.85;padding:.75rem;text-transform:capitalize;width:100%}.rockstargames-modules-core-videoplayerc1e2a883d91ed4410e6d2c24b64c586b,.rockstargames-modules-core-videoplayerc1e2a883d91ed4410e6d2c24b64c586b:hover{transition:opacity .2s ease-in-out}.rockstargames-modules-core-videoplayerc1e2a883d91ed4410e6d2c24b64c586b:hover{opacity:1}.rockstargames-modules-core-videoplayeraa248530d71bb9ad7c3a60badcc5c8f5{align-items:center;background-color:hsla(0,0%,7%,.95);border-bottom:1px solid var(--border-color,#282828);color:var(--color-body);display:flex;flex-direction:row;font-family:var(--font-family-body);font-family:HelveticaNowText;font-size:var(--font-size-2);font-size:var(--font-size-3,1rem);font-style:normal;font-weight:var(--font-weight-regular);font-weight:var(--font-weight-bold);font-weight:700;gap:var(--padding-sm);justify-content:space-between;letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);line-height:160%;padding:var(--padding-sm) var(--grid-gap-sm);width:100%}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayeraa248530d71bb9ad7c3a60badcc5c8f5{background-color:rgba(0,0,0,.25);font-size:var(--font-size-2,.75rem)}}.rockstargames-modules-core-videoplayerf3f60b73622da5aa98cd8e0aefd8f3eb{align-items:center;color:var(--white-text,#e8e8e8);display:flex;flex-direction:row;gap:var(--spacing-sm);white-space:nowrap}.rockstargames-modules-core-videoplayerf3f60b73622da5aa98cd8e0aefd8f3eb svg{height:1rem;width:1rem}.rockstargames-modules-core-videoplayerb20cd372c678def2a7b1257e8812955b{display:flex;flex-direction:column;max-height:60vh;overflow-y:auto}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerb20cd372c678def2a7b1257e8812955b{max-height:var(--options-height,80%)}}.rockstargames-modules-core-videoplayerb20cd372c678def2a7b1257e8812955b button{align-items:center;background-color:#141414;border:none;color:var(--color-body);color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-family-body);font-family:HelveticaNowText;font-size:var(--font-size-2);font-size:var(--font-size-3,1rem);font-weight:var(--font-weight-regular);justify-content:space-between;letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);padding:var(--padding-sm) var(--grid-gap-sm)}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerb20cd372c678def2a7b1257e8812955b button{background-color:hsla(0,0%,7%,.95);font-size:var(--font-size-2,.75rem)}}.rockstargames-modules-core-videoplayerd5e74e0ede826b8de9962b746a1b02ef[open]{-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);background-color:#141414;border:none;border-radius:16px 16px 0 0;bottom:0;cursor:auto;height:auto;margin:0 auto;max-height:80vh;max-width:450px;overflow:hidden;padding:0;pointer-events:all!important;top:unset;width:100%}.rockstargames-modules-core-videoplayerd5e74e0ede826b8de9962b746a1b02ef[open]::backdrop{background-color:var(--black-200,#121212);cursor:pointer;opacity:var(--backdrop-opacity,.8)}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerd5e74e0ede826b8de9962b746a1b02ef[open]{background-color:hsla(0,0%,7%,.9);border-radius:8px;bottom:3.5rem;left:auto;margin:initial;max-width:350px;min-width:250px;right:2rem;width:auto}}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/MenuHandler/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA5FA,wEC6BI,cAAA,CADA,aDsEJ,CA9FA,gJCsBI,kBAAA,CADA,YDwFJ,CA7GA,wEC6II,wBAAA,CD1IA,qBAAA,CC2IA,WAAA,CACA,cAAA,CA/IA,sBAAA,CA2IA,sBAAA,CArIA,WAAA,CA2IA,cAAA,CA5IA,yBAAA,CA8IA,UDtCJ,CChGI,sJAFA,kCDsGJ,CCpGI,8EACI,SDmGR,CA3GA,wEC4BI,kBAAA,CAGA,kCAAA,CACA,mDAAA,CFuDA,uBAAA,CE9DA,YAAA,CACA,kBAAA,CFmDA,mCAAA,CE3CA,4BAAA,CF0CA,4BAAA,CEzCA,iCAAA,CACA,iBAAA,CF2CA,sCAAA,CAOA,mCAAA,CEjDA,eAAA,CARA,qBAAA,CAFA,6BAAA,CFqDA,yCAAA,CAFA,iCAAA,CExCA,gBAAA,CACA,4CAAA,CAEA,UDyFJ,CCvFI,wCAAA,wEACI,gCAAA,CACA,mCD0FN,CACF,CApIA,wECgDI,kBAAA,CAGA,+BAAA,CALA,YAAA,CACA,kBAAA,CAEA,qBAAA,CAIA,kBDuFJ,CA5IA,4ECyDQ,WAAA,CADA,UDwFR,CA5IA,wEC6EI,YAAA,CACA,qBAAA,CAIA,eAAA,CAFA,eDkEJ,CC9DI,wCAAA,wEACI,oCDiEN,CACF,CAnJA,+EAMI,kBAAA,CAEA,wBAAA,CACA,WAAA,CD4DA,uBAAA,CC3DA,+BAAA,CACA,cAAA,CARA,YAAA,CACA,kBAAA,CD6DA,mCAAA,CCrDA,4BAAA,CDoDA,4BAAA,CCnDA,iCAAA,CDsDA,sCAAA,CC9DA,6BAAA,CD+DA,yCAAA,CAFA,iCAAA,CCpDA,4CAwJJ,CAtJI,wCAAA,+EACI,kCAAA,CACA,mCAyJN,CACF,CAtJA,8EAII,kCAAA,CACA,0BAAA,CAJA,wBAAA,CACA,WAAA,CACA,2BAAA,CAUA,QAAA,CAPA,WAAA,CAYA,WAAA,CAXA,aAAA,CAUA,eAAA,CAFA,eAAA,CAPA,eAAA,CACA,SAAA,CACA,4BAAA,CAEA,SAAA,CAIA,UAwJJ,CApJI,wFACI,yCAAA,CACA,cAAA,CACA,kCAsJR,CAlJI,wCAAA,8EACI,iCAAA,CACA,iBAAA,CAKA,aAAA,CACA,SAAA,CALA,cAAA,CAQA,eAAA,CADA,eAAA,CALA,UAAA,CAOA,UAkJN,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '../../ui/mixins.less';\n\n.icon {\n    .controlItemIcon();\n}\n\n.button {\n    .controlItemButton();\n\n    background-color: none;\n}\n\n.header {\n    .controlItemMenuHeader();\n}\n\n.menuLabel {\n    .controlItemMenuHeaderLabel();\n}\n\n.options {\n    .controlItemMenuOptions();\n}\n\n.options button {\n    .body-sm();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: #141414;\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    cursor: pointer;\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: rgba(18, 18, 18, 0.95);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.menu[open] {\n    background-color: #141414;\n    border: none;\n    border-radius: 16px 16px 0 0;\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    cursor: auto;\n    margin: 0 auto;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: all !important;\n\n    top: unset;\n    bottom: 0;\n\n    max-width: 450px;\n    width: 100%;\n    max-height: 80vh;\n    height: auto;\n\n    &::backdrop {\n        background-color: var(--black-200, rgba(18, 18, 18));\n        cursor: pointer;\n        opacity: var(--backdrop-opacity, 0.8);\n    }\n\n    // not touchscreen device\n    @media (hover: hover) and (pointer: fine) {\n        background-color: rgba(18, 18, 18, 0.9);\n        border-radius: 8px;\n        margin: initial;\n\n        right: 2rem;\n        // TODO: should be set to a variable of the controls height\n        bottom: 3.5rem;\n        left: auto;\n\n        min-width: 250px;\n        max-width: 350px;\n        width: auto;\n    }\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerdee794dde9f5ecdb6af6032a5b833096",
        selected: "rockstargames-modules-core-videoplayera90e18d38346363446705eee85c61be9",
        controlItemOptionButton: "rockstargames-modules-core-videoplayerf6fb06bf1eb960308829c1a31367d2b8",
        hoverIcon: "rockstargames-modules-core-videoplayerc24e575c02330ad78dc27f333cdf42f5",
        icon: "rockstargames-modules-core-videoplayere553b94795a0b079d20d0d77beaee659",
        button: "rockstargames-modules-core-videoplayerc1e2a883d91ed4410e6d2c24b64c586b",
        header: "rockstargames-modules-core-videoplayeraa248530d71bb9ad7c3a60badcc5c8f5",
        menuLabel: "rockstargames-modules-core-videoplayerf3f60b73622da5aa98cd8e0aefd8f3eb",
        options: "rockstargames-modules-core-videoplayerb20cd372c678def2a7b1257e8812955b",
        menu: "rockstargames-modules-core-videoplayerd5e74e0ede826b8de9962b746a1b02ef"
      };
      const d = i
    },
    55501: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerd4228c5d204bebd5d0c9cb6b725207a8{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerd4228c5d204bebd5d0c9cb6b725207a8 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerd4228c5d204bebd5d0c9cb6b725207a8:focus,.rockstargames-modules-core-videoplayerd4228c5d204bebd5d0c9cb6b725207a8:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerd4228c5d204bebd5d0c9cb6b725207a8.rockstargames-modules-core-videoplayercf15744cc35c543b2dc56713d74ad1ca{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerd4228c5d204bebd5d0c9cb6b725207a8.rockstargames-modules-core-videoplayercf15744cc35c543b2dc56713d74ad1ca img{filter:invert()}.rockstargames-modules-core-videoplayerf48e8e6cd5d755f16cba5c91c058c07f{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerf48e8e6cd5d755f16cba5c91c058c07f .rockstargames-modules-core-videoplayerb776b19a3559e7475d2a6903d6fc14f3{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerf48e8e6cd5d755f16cba5c91c058c07f{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayerf48e8e6cd5d755f16cba5c91c058c07f:hover{background-color:#242424}.rockstargames-modules-core-videoplayerf48e8e6cd5d755f16cba5c91c058c07f:hover .rockstargames-modules-core-videoplayerb776b19a3559e7475d2a6903d6fc14f3{display:inline-block}}.rockstargames-modules-core-videoplayere2bb62f7d1ed11e190e89b6d7f17eb02{align-items:center;display:flex;height:1.25rem;width:1.25rem}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/PlayPause/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA7FA,wEC2BI,kBAAA,CADA,YAAA,CAIA,cAAA,CADA,aDsEJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../ui/mixins.less';\n\n.icon {\n    .controlItemIcon();\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerd4228c5d204bebd5d0c9cb6b725207a8",
        selected: "rockstargames-modules-core-videoplayercf15744cc35c543b2dc56713d74ad1ca",
        controlItemOptionButton: "rockstargames-modules-core-videoplayerf48e8e6cd5d755f16cba5c91c058c07f",
        hoverIcon: "rockstargames-modules-core-videoplayerb776b19a3559e7475d2a6903d6fc14f3",
        icon: "rockstargames-modules-core-videoplayere2bb62f7d1ed11e190e89b6d7f17eb02"
      };
      const d = i
    },
    96935: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerfb8dfc0358d1adfa8315cf38b00aa635{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerfb8dfc0358d1adfa8315cf38b00aa635 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerfb8dfc0358d1adfa8315cf38b00aa635:focus,.rockstargames-modules-core-videoplayerfb8dfc0358d1adfa8315cf38b00aa635:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerfb8dfc0358d1adfa8315cf38b00aa635.rockstargames-modules-core-videoplayere63edadbe1e97de16002e611193cd1d6{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerfb8dfc0358d1adfa8315cf38b00aa635.rockstargames-modules-core-videoplayere63edadbe1e97de16002e611193cd1d6 img{filter:invert()}.rockstargames-modules-core-videoplayerd5b690e5a142266ad83908884f79b118{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerd5b690e5a142266ad83908884f79b118 .rockstargames-modules-core-videoplayera64f91574b03ae29e99b13bc775c875c{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerd5b690e5a142266ad83908884f79b118{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayerd5b690e5a142266ad83908884f79b118:hover{background-color:#242424}.rockstargames-modules-core-videoplayerd5b690e5a142266ad83908884f79b118:hover .rockstargames-modules-core-videoplayera64f91574b03ae29e99b13bc775c875c{display:inline-block}}.rockstargames-modules-core-videoplayerbaa0d120e1c6c5e5f102e52dc48ee7c3{display:flex;left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:1}.rockstargames-modules-core-videoplayerd1ff550825c51ddc3f33b7eb17f4f6b1{background:rgba(0,0,0,.5);border-radius:100%;height:4rem;justify-content:center;width:4rem}.rockstargames-modules-core-videoplayerc97ed234a08181a46e5823765e6f876b,.rockstargames-modules-core-videoplayerd1ff550825c51ddc3f33b7eb17f4f6b1{align-items:center;display:flex}.rockstargames-modules-core-videoplayerc97ed234a08181a46e5823765e6f876b{height:1.25rem;width:1.25rem}.rockstargames-modules-core-videoplayera36215709a57936e69196a6830d8b663{display:none}.rockstargames-modules-core-videoplayerdb7048e3e0d6f9b1493efa28a42aaf17{animation:rockstargames-modules-core-videoplayerba69a5b69d08ba43eb3a102180f361f3 .6s ease-in-out;display:flex;opacity:0}@keyframes rockstargames-modules-core-videoplayerba69a5b69d08ba43eb3a102180f361f3{0%{opacity:0;transform:scale(.5)}60%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.25)}}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/PlayPauseOverlay/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA7FA,wEACI,YAAA,CAMA,QAAA,CAJA,mBAAA,CAEA,iBAAA,CACA,OAAA,CAIA,8BAAA,CAFA,SA8FJ,CAzFA,wEAKI,yBAAA,CACA,kBAAA,CAGA,WAAA,CANA,sBAAA,CAKA,UA0FJ,CAtFA,gJAVI,kBAAA,CADA,YAuGJ,CA5FA,wECKI,cAAA,CADA,aDwFJ,CAxFA,wEACI,YA0FJ,CAvFA,wEAGI,gGAAA,CADA,YAAA,CADA,SA2FJ,CArFA,kFACI,GACI,SAAA,CACA,mBAwFN,CAtFE,IACI,SAAA,CACA,kBAwFN,CAtFE,GACI,SAAA,CACA,qBAwFN,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../ui/mixins.less';\n\n.playPauseOverlay {\n    display: flex;\n\n    pointer-events: none;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 1;\n\n    transform: translate(-50%, -50%);\n}\n\n.iconWrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background: rgba(0, 0, 0, 0.5);\n    border-radius: 100%;\n\n    width: 4rem;\n    height: 4rem;\n}\n\n.icon {\n    .controlItemIcon();\n}\n\n.animated {\n    display: none;\n}\n\n.show {\n    opacity: 0;\n    display: flex;\n    animation: fadeInOut 0.6s ease-in-out;\n}\n\n/* The animation code */\n@keyframes fadeInOut {\n    0% {\n        opacity: 0;\n        transform: scale(0.5);\n    }\n    60% {\n        opacity: 1;\n        transform: scale(1);\n    }\n    100% {\n        opacity: 0;\n        transform: scale(1.25);\n    }\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerfb8dfc0358d1adfa8315cf38b00aa635",
        selected: "rockstargames-modules-core-videoplayere63edadbe1e97de16002e611193cd1d6",
        controlItemOptionButton: "rockstargames-modules-core-videoplayerd5b690e5a142266ad83908884f79b118",
        hoverIcon: "rockstargames-modules-core-videoplayera64f91574b03ae29e99b13bc775c875c",
        playPauseOverlay: "rockstargames-modules-core-videoplayerbaa0d120e1c6c5e5f102e52dc48ee7c3",
        iconWrapper: "rockstargames-modules-core-videoplayerd1ff550825c51ddc3f33b7eb17f4f6b1",
        icon: "rockstargames-modules-core-videoplayerc97ed234a08181a46e5823765e6f876b",
        animated: "rockstargames-modules-core-videoplayera36215709a57936e69196a6830d8b663",
        show: "rockstargames-modules-core-videoplayerdb7048e3e0d6f9b1493efa28a42aaf17",
        fadeInOut: "rockstargames-modules-core-videoplayerba69a5b69d08ba43eb3a102180f361f3"
      };
      const d = i
    },
    38004: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, '.rockstargames-modules-core-videoplayercf23064a5fe658ada98e9417e16b77f7{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayercf23064a5fe658ada98e9417e16b77f7 .rockstargames-modules-core-videoplayercf4d7db26140a8681567c777a34b06ba{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayercf23064a5fe658ada98e9417e16b77f7{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayercf23064a5fe658ada98e9417e16b77f7:hover{background-color:#242424}.rockstargames-modules-core-videoplayercf23064a5fe658ada98e9417e16b77f7:hover .rockstargames-modules-core-videoplayercf4d7db26140a8681567c777a34b06ba{display:inline-block}}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f{padding:var(--padding-xs) 0 0;position:relative}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerd8c8045d382169c910b9aabaac555155{align-items:center;cursor:pointer;display:flex;justify-content:center}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerd8c8045d382169c910b9aabaac555155{background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerd8c8045d382169c910b9aabaac555155 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerd8c8045d382169c910b9aabaac555155:focus,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerd8c8045d382169c910b9aabaac555155:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerd8c8045d382169c910b9aabaac555155.rockstargames-modules-core-videoplayereb017049de6b16a7493764ef74a27cbb{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerd8c8045d382169c910b9aabaac555155.rockstargames-modules-core-videoplayereb017049de6b16a7493764ef74a27cbb img{filter:invert()}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerb8c342271a08654d347b68bfa9ae87f6{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f{padding:2rem 0 0}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f.rockstargames-modules-core-videoplayerdfa731c4aecb6afa364bb59f2db70714 .rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f.rockstargames-modules-core-videoplayerdfa731c4aecb6afa364bb59f2db70714 .rockstargames-modules-core-videoplayerf059cf2ee72159a3fcd74a5f6cab0023,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f.rockstargames-modules-core-videoplayerdfa731c4aecb6afa364bb59f2db70714 .rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f:hover .rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f:hover .rockstargames-modules-core-videoplayerf059cf2ee72159a3fcd74a5f6cab0023,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f:hover .rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e{height:.5rem}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f.rockstargames-modules-core-videoplayerdfa731c4aecb6afa364bb59f2db70714 .rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e:after,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f:hover .rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e:after{height:.75rem;opacity:1;transform:translate(50%,-50%) scale(1.5);transition:transform .3s ease-in-out;width:.75rem}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerf059cf2ee72159a3fcd74a5f6cab0023,.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e{border-radius:var(--border-radius-md);transition:height .2s ease-in-out,padding .2s ease-in-out}.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f .rockstargames-modules-core-videoplayerb8c342271a08654d347b68bfa9ae87f6{background-color:rgba(0,0,0,.25);border-radius:5px;bottom:1.2rem;color:var(--color-body);color:#fff;display:unset;font-family:var(--font-family-body);font-size:var(--font-size-1);font-size:.65rem;font-weight:var(--font-weight-regular);left:calc(var(--left-position) * 100%);letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);padding:0 8px;position:absolute;transform:translateX(-50%)}}@media (hover:hover) and (pointer:fine) and (min-width:1024px){.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f{padding:var(--padding-sm) 0 0}}@supports (-moz-appearance:none){.rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f:focus-visible{border-radius:6px;outline:2px solid var(--white-100);outline-offset:-2px}}.rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1{align-items:center;background:hsla(0,0%,100%,.25);display:flex;justify-content:center;overflow:hidden}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1{border-radius:var(--border-radius-md)}}.rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e{background:var(--accent-color,--videoplayer-time-bg,#fcaf17);position:absolute;width:calc(var(--percent-current, 0) * 100%)}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e:after{background:var(--accent-color,--videoplayer-time-bg,#fcaf17);border-radius:100%;content:"";height:.2rem;opacity:0;position:absolute;right:0;top:50%;transform:translate(50%,-50%) scale(.25);transition:transform .3s ease-in-out;width:.2rem}}.rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1,.rockstargames-modules-core-videoplayerf059cf2ee72159a3fcd74a5f6cab0023{width:100%}.rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1,.rockstargames-modules-core-videoplayerf059cf2ee72159a3fcd74a5f6cab0023,.rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e{height:.5rem;left:0;transition:height .3s,bottom .3s}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1,.rockstargames-modules-core-videoplayerf059cf2ee72159a3fcd74a5f6cab0023,.rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e{height:.25rem;transition:height .2s ease-in-out,padding .2s ease-in-out}}', "", {
        version: 3,
        sources: ["webpack://./src/modules/Controls/ui/mixins.less", "webpack://./src/modules/Controls/components/Progress/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA8GA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CC9GJ,CDiGA,gJAiBQ,YC/GR,CDkHI,wCAAA,wEACI,mCC/GN,CDiHM,8EACI,wBC/GV,CD8GM,sJAIQ,oBC/Gd,CACF,CA1BA,wEASI,6BAAA,CALA,iBA6DJ,CAjEA,wNAKI,kBAAA,CAGA,cAAA,CALA,YAAA,CAGA,sBA8EJ,CApFA,gJCkRI,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAEA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CD1MJ,CApFA,oJCkSQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BDzMR,CC6MI,4SAEI,gCAAA,CACA,YD3MR,CC8MI,uNAEI,2BAAA,CADA,sBD3MR,CC0MI,2NAKQ,eD5MZ,CAtGA,gJAWQ,YA8FR,CA3FI,wCAAA,wEACI,gBA8FN,CA5FM,ukCAKQ,YA+Fd,CApGM,yXAUQ,aAAA,CACA,SAAA,CAEA,wCAAA,CACA,oCAAA,CALA,YAmGd,CA/GE,gbAwBQ,qCAAA,CAEA,yDA2FV,CArHE,gJAoCQ,gCAAA,CACA,iBAAA,CAOA,aAAA,CCoBR,uBAAA,CD1BQ,UAAA,CAJA,aAAA,CC0BR,mCAAA,CADA,4BAAA,CDpBQ,gBAAA,CCuBR,sCAAA,CDnBQ,sCAAA,CCoBR,yCAAA,CAFA,iCAAA,CDrBQ,aAAA,CAEA,iBAAA,CAIA,0BAyFV,CACF,CE7EI,+DAAA,wEFTQ,6BA0FV,CACF,CAvFI,iCDgJA,sFACI,iBAAA,CACA,kCAAA,CACA,mBCtDN,CACF,CAzFA,wEAEI,kBAAA,CAGA,8BAAA,CAJA,YAAA,CAEA,sBAAA,CAIA,eAyFJ,CAvFI,wCAAA,wEACI,qCA0FN,CACF,CAvFA,wEACI,4DAAA,CAEA,iBAAA,CAEA,4CAuFJ,CArFI,wCACI,8EAII,4DAAA,CADA,kBAAA,CAFA,UAAA,CAWA,YAAA,CAPA,SAAA,CAEA,iBAAA,CAEA,OAAA,CADA,OAAA,CAMA,wCAAA,CACA,oCAAA,CAJA,WAuFV,CACF,CA/EA,gJAEI,UAiFJ,CA9EA,wNAII,YAAA,CADA,MAAA,CAGA,gCA+EJ,CA3EI,wCAAA,wNACI,aAAA,CAEA,yDA+EN,CACF",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n", "@import '../../ui/mixins.less';\n.progressBar {\n    @import '@rsgweb/legacy-design-system/less/mixins.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n\n    cursor: pointer;\n    padding: var(--padding-xs) 0 0;\n    .timestamp {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        padding: 2rem 0 0;\n\n        &:hover,\n        &.isDragging {\n            .buffer,\n            .time,\n            .background {\n                height: 0.5rem;\n            }\n\n            .time::after {\n                width: 0.75rem;\n                height: 0.75rem;\n                opacity: 1;\n\n                transform: translate(50%, -50%) scale(1.5);\n                transition: transform 0.3s ease-in-out;\n            }\n        }\n\n        .buffer,\n        .time,\n        .background {\n            border-radius: var(--border-radius-md);\n\n            transition:\n                height 0.2s ease-in-out,\n                padding 0.2s ease-in-out;\n        }\n\n        .timestamp {\n            .body-xs();\n\n            display: unset;\n\n            background-color: rgba(0, 0, 0, 0.25);\n            border-radius: 5px;\n            color: #fff;\n            font-size: 0.65rem;\n            padding: 0 8px;\n\n            position: absolute;\n            left: calc(var(--left-position) * 100%);\n            bottom: 1.2rem;\n\n            transform: translateX(-50%);\n        }\n\n        .lg({\n            padding: var(--padding-sm) 0 0;\n        });\n    }\n\n    @supports (-moz-appearance: none) {\n        .focusState();\n    }\n}\n\n.background {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background: fade(white, 25);\n\n    overflow: hidden;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: var(--border-radius-md);\n    }\n}\n\n.time {\n    background: var(--accent-color, --videoplayer-time-bg, #fcaf17);\n\n    position: absolute;\n\n    width: calc(var(--percent-current, 0) * 100%);\n\n    @media (hover: hover) and (pointer: fine) {\n        &::after {\n            content: '';\n\n            border-radius: 100%;\n            background: var(--accent-color, --videoplayer-time-bg, #fcaf17);\n            opacity: 0;\n\n            position: absolute;\n            top: 50%;\n            right: 0;\n\n            width: 0.2rem;\n            height: 0.2rem;\n\n            transform: translate(50%, -50%) scale(0.25);\n            transition: transform 0.3s ease-in-out;\n        }\n    }\n}\n\n.buffer,\n.background {\n    width: 100%;\n}\n\n.buffer,\n.time,\n.background {\n    left: 0;\n    height: 0.5rem;\n\n    transition:\n        height 0.3s,\n        bottom 0.3s;\n\n    @media (hover: hover) and (pointer: fine) {\n        height: 0.25rem;\n\n        transition:\n            height 0.2s ease-in-out,\n            padding 0.2s ease-in-out;\n    }\n}\n", "@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        controlItemOptionButton: "rockstargames-modules-core-videoplayercf23064a5fe658ada98e9417e16b77f7",
        hoverIcon: "rockstargames-modules-core-videoplayercf4d7db26140a8681567c777a34b06ba",
        progressBar: "rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f",
        pillBtn: "rockstargames-modules-core-videoplayerd8c8045d382169c910b9aabaac555155",
        selected: "rockstargames-modules-core-videoplayereb017049de6b16a7493764ef74a27cbb",
        timestamp: "rockstargames-modules-core-videoplayerb8c342271a08654d347b68bfa9ae87f6",
        isDragging: "rockstargames-modules-core-videoplayerdfa731c4aecb6afa364bb59f2db70714",
        background: "rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1",
        buffer: "rockstargames-modules-core-videoplayerf059cf2ee72159a3fcd74a5f6cab0023",
        time: "rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e"
      };
      const d = i
    },
    15470: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayere102015be44628245993fd21432916e3{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayere102015be44628245993fd21432916e3 .rockstargames-modules-core-videoplayerc3394809f27f421d5875404b621400c7{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayere102015be44628245993fd21432916e3{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayere102015be44628245993fd21432916e3:hover{background-color:#242424}.rockstargames-modules-core-videoplayere102015be44628245993fd21432916e3:hover .rockstargames-modules-core-videoplayerc3394809f27f421d5875404b621400c7{display:inline-block}}.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb{color:var(--white-65,hsla(0,0%,100%,.65));color:var(--color-body);font-family:var(--font-family-body);font-family:HelveticaNowText;font-size:var(--font-size-2);font-size:.65rem;font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-body);letter-spacing:-.32px;line-height:var(--line-height-lg);min-width:-moz-fit-content;min-width:fit-content}.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb,.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb .rockstargames-modules-core-videoplayerc60925a281613846f8dcedfdd38dcfa3{align-items:center;display:flex;justify-content:center}.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb .rockstargames-modules-core-videoplayerc60925a281613846f8dcedfdd38dcfa3{background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb .rockstargames-modules-core-videoplayerc60925a281613846f8dcedfdd38dcfa3 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb .rockstargames-modules-core-videoplayerc60925a281613846f8dcedfdd38dcfa3:focus,.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb .rockstargames-modules-core-videoplayerc60925a281613846f8dcedfdd38dcfa3:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb .rockstargames-modules-core-videoplayerc60925a281613846f8dcedfdd38dcfa3.rockstargames-modules-core-videoplayerdd2be89472702b0830e1d58f13c9ec7d{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb .rockstargames-modules-core-videoplayerc60925a281613846f8dcedfdd38dcfa3.rockstargames-modules-core-videoplayerdd2be89472702b0830e1d58f13c9ec7d img{filter:invert()}@media (max-width:400px){.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb{display:none}}.rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb.rockstargames-modules-core-videoplayerfc0b6f5b1966f8660e8ecad13d074db1{color:#fff}", "", {
        version: 3,
        sources: ["webpack://./src/modules/Controls/ui/mixins.less", "webpack://./src/modules/Controls/components/Time/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less"],
        names: [],
        mappings: "AA8GA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CC9GJ,CDiGA,gJAiBQ,YC/GR,CDkHI,wCAAA,wEACI,mCC/GN,CDiHM,8EACI,wBC/GV,CD8GM,sJAIQ,oBC/Gd,CACF,CAzBA,wEAQI,yCAAA,CCoFA,uBAAA,CAJA,mCAAA,CD7EA,4BAAA,CC4EA,4BAAA,CD3EA,gBAAA,CC8EA,sCAAA,CACA,yCAAA,CD9EA,qBAAA,CC4EA,iCAAA,CD1EA,0BAAA,CAAA,qBAyDJ,CAxEA,wNAKI,kBAAA,CADA,YAAA,CAEA,sBAqFJ,CA3FA,gJCiRI,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CANA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CDlMJ,CA3FA,oJCiSQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BDjMR,CCqMI,4SAEI,gCAAA,CACA,YDnMR,CCsMI,uNAEI,2BAAA,CADA,sBDnMR,CCkMI,2NAKQ,eDpMZ,CA5FI,yBAAA,wEACI,YA+FN,CACF,CA7FI,+IACI,UA+FR",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n", "@import '../../ui/mixins.less';\n\n.time {\n    @import '@rsgweb/legacy-design-system/less/mixins.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    .body-sm();\n    font-family: HelveticaNowText;\n    font-size: 0.65rem;\n    letter-spacing: -0.32px;\n\n    min-width: fit-content;\n\n    @media (max-width: 400px) {\n        display: none;\n    }\n\n    &.clr {\n        color: white;\n    }\n}\n", "@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        controlItemOptionButton: "rockstargames-modules-core-videoplayere102015be44628245993fd21432916e3",
        hoverIcon: "rockstargames-modules-core-videoplayerc3394809f27f421d5875404b621400c7",
        time: "rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb",
        pillBtn: "rockstargames-modules-core-videoplayerc60925a281613846f8dcedfdd38dcfa3",
        selected: "rockstargames-modules-core-videoplayerdd2be89472702b0830e1d58f13c9ec7d",
        clr: "rockstargames-modules-core-videoplayerfc0b6f5b1966f8660e8ecad13d074db1"
      };
      const d = i
    },
    60046: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerdf46157663084d4223c50dda9c96dcd4{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerdf46157663084d4223c50dda9c96dcd4 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerdf46157663084d4223c50dda9c96dcd4:focus,.rockstargames-modules-core-videoplayerdf46157663084d4223c50dda9c96dcd4:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerdf46157663084d4223c50dda9c96dcd4.rockstargames-modules-core-videoplayere653297e212b56ef11131ec24e48b470{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerdf46157663084d4223c50dda9c96dcd4.rockstargames-modules-core-videoplayere653297e212b56ef11131ec24e48b470 img{filter:invert()}.rockstargames-modules-core-videoplayere34f1c72565bfc5deb5bee9001bab763{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayere34f1c72565bfc5deb5bee9001bab763 .rockstargames-modules-core-videoplayerbbd8db9707199cbc6c825f98e475c41c{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayere34f1c72565bfc5deb5bee9001bab763{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayere34f1c72565bfc5deb5bee9001bab763:hover{background-color:#242424}.rockstargames-modules-core-videoplayere34f1c72565bfc5deb5bee9001bab763:hover .rockstargames-modules-core-videoplayerbbd8db9707199cbc6c825f98e475c41c{display:inline-block}}.rockstargames-modules-core-videoplayera1c409dbf6086110b6291957dac06fd6{background:hsla(0,0%,7%,.9);border-radius:var(--border-radius-sm,4px);color:var(--white-100,#e8e8e8);display:block;font-weight:700;height:auto;padding:var(--padding-xxs,4px) var(--padding-xs,8px)}.rockstargames-modules-core-videoplayerea5b581015e7f2a7149e17ffede61f2b{align-items:center;background-color:initial;border:none;cursor:pointer;display:flex;gap:var(--grid-gap-sm);justify-content:center;opacity:.85;padding:.75rem;text-transform:capitalize;width:100%}.rockstargames-modules-core-videoplayerea5b581015e7f2a7149e17ffede61f2b,.rockstargames-modules-core-videoplayerea5b581015e7f2a7149e17ffede61f2b:hover{transition:opacity .2s ease-in-out}.rockstargames-modules-core-videoplayerea5b581015e7f2a7149e17ffede61f2b:hover{opacity:1}@supports (-moz-appearance:none){.rockstargames-modules-core-videoplayerea5b581015e7f2a7149e17ffede61f2b:focus-visible{border-radius:6px;outline:2px solid var(--white-100);outline-offset:-2px}}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/modules/Controls/components/TooltipButton/index.less", "webpack://./src/modules/Controls/ui/mixins.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CC2CA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CD1CJ,CC6BA,gJAiBQ,YD3CR,CC8CI,wCAAA,wEACI,mCD3CN,CC6CM,8EACI,wBD3CV,CC0CM,sJAIQ,oBD3Cd,CACF,CA5FA,wEAEI,2BAAA,CACA,yCAAA,CACA,8BAAA,CAHA,aAAA,CAIA,eAAA,CAGA,WAAA,CAFA,oDAgGJ,CA3FA,wECmII,kBAAA,CAGA,wBAAA,CACA,WAAA,CACA,cAAA,CANA,YAAA,CAzIA,sBAAA,CA2IA,sBAAA,CArIA,WAAA,CA2IA,cAAA,CA5IA,yBAAA,CA8IA,UDnCJ,CCnGI,sJAFA,kCDyGJ,CCvGI,8EACI,SDsGR,CAzGI,iCCmMA,sFACI,iBAAA,CACA,kCAAA,CACA,mBDvFN,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../ui/mixins.less';\n\n/* BUTTON */\n.tooltip {\n    display: block;\n    background: rgba(18, 18, 18, 0.9);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--white-100, #e8e8e8);\n    font-weight: bold;\n    padding: var(--padding-xxs, 4px) var(--padding-xs, 8px);\n\n    height: auto;\n}\n\n.button {\n    .controlItemButton();\n\n\n    @supports (-moz-appearance: none) {\n        .focusState();\n    }\n}", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerdf46157663084d4223c50dda9c96dcd4",
        selected: "rockstargames-modules-core-videoplayere653297e212b56ef11131ec24e48b470",
        controlItemOptionButton: "rockstargames-modules-core-videoplayere34f1c72565bfc5deb5bee9001bab763",
        hoverIcon: "rockstargames-modules-core-videoplayerbbd8db9707199cbc6c825f98e475c41c",
        tooltip: "rockstargames-modules-core-videoplayera1c409dbf6086110b6291957dac06fd6",
        button: "rockstargames-modules-core-videoplayerea5b581015e7f2a7149e17ffede61f2b"
      };
      const d = i
    },
    47653: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, '.rockstargames-modules-core-videoplayerbd832ea62bed27299da3508d8af7176b{align-items:center;background-color:initial;border:none;color:var(--white-text,#e8e8e8);cursor:pointer;display:flex;flex-direction:row;font-family:HelveticaNowText;font-size:var(--font-size-3,1rem);justify-content:space-between;opacity:1;padding:var(--padding-sm) var(--grid-gap-sm)}.rockstargames-modules-core-videoplayerbd832ea62bed27299da3508d8af7176b .rockstargames-modules-core-videoplayerac056ad4b9cfef43c9e0497356d889f1{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerbd832ea62bed27299da3508d8af7176b{font-size:var(--font-size-2,.75rem)}.rockstargames-modules-core-videoplayerbd832ea62bed27299da3508d8af7176b:hover{background-color:#242424}.rockstargames-modules-core-videoplayerbd832ea62bed27299da3508d8af7176b:hover .rockstargames-modules-core-videoplayerac056ad4b9cfef43c9e0497356d889f1{display:inline-block}}.rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8{display:flex}.rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8 .rockstargames-modules-core-videoplayerdd89bd309a367c738cb0f7c67aec4362{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8 .rockstargames-modules-core-videoplayerdd89bd309a367c738cb0f7c67aec4362 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8 .rockstargames-modules-core-videoplayerdd89bd309a367c738cb0f7c67aec4362:focus,.rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8 .rockstargames-modules-core-videoplayerdd89bd309a367c738cb0f7c67aec4362:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8 .rockstargames-modules-core-videoplayerdd89bd309a367c738cb0f7c67aec4362.rockstargames-modules-core-videoplayere7a637dbad29f2d2da992c9bda2eab72{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8 .rockstargames-modules-core-videoplayerdd89bd309a367c738cb0f7c67aec4362.rockstargames-modules-core-videoplayere7a637dbad29f2d2da992c9bda2eab72 img{filter:invert()}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8{align-items:center;flex-direction:row;gap:.2rem;justify-content:center}}.rockstargames-modules-core-videoplayerc53e9a8ef1eb17e73a9b14345aea667d{display:none}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerc53e9a8ef1eb17e73a9b14345aea667d{border-radius:var(--border-radius-md);cursor:pointer;display:flex;flex-direction:column;height:.25rem;justify-content:center;margin:0 .75rem 0 0;padding:1rem 0;position:relative;transition:width .3s ease-in-out;width:0}.rockstargames-modules-core-videoplayerc53e9a8ef1eb17e73a9b14345aea667d.rockstargames-modules-core-videoplayerb7ee87503e6abcf7ca9015848cbd75e9,.rockstargames-modules-core-videoplayerc53e9a8ef1eb17e73a9b14345aea667d:focus-visible{width:125px}.rockstargames-modules-core-videoplayerc53e9a8ef1eb17e73a9b14345aea667d:focus-visible .rockstargames-modules-core-videoplayera6810e881da9742354ccbeb8457a07e8:after,.rockstargames-modules-core-videoplayerc53e9a8ef1eb17e73a9b14345aea667d:hover .rockstargames-modules-core-videoplayera6810e881da9742354ccbeb8457a07e8:after{height:.5rem;opacity:1;transform:translate(50%,-50%) scale(1.5);transition:transform .3s ease-in-out;width:.5rem}@supports (-moz-appearance:none){.rockstargames-modules-core-videoplayerc53e9a8ef1eb17e73a9b14345aea667d:focus-visible{border-radius:6px;outline:2px solid var(--white-100);outline-offset:-2px}}}.rockstargames-modules-core-videoplayera6810e881da9742354ccbeb8457a07e8{background:#fff;border-radius:var(--border-radius-md);height:.25rem;pointer-events:none;position:absolute;transition:transform .3s ease-in-out;width:calc(var(--percent-current, 0) * 100%);z-index:1}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayera6810e881da9742354ccbeb8457a07e8:after{background:#fff;border-radius:100%;content:"";height:.2rem;opacity:0;position:absolute;right:0;top:50%;transform:translate(50%,-50%) scale(.25);transition:transform .3s ease-in-out;width:.2rem}}.rockstargames-modules-core-videoplayeracfcf6e26a55c7f25a2ce148f01942b7{background:hsla(0,0%,100%,.25);border-radius:var(--border-radius-md);height:.25rem;position:absolute;width:100%;z-index:0}.rockstargames-modules-core-videoplayerb6e3dcbfe85be96b62c183be72291268{align-items:center;display:flex;height:1.25rem;width:1.25rem}', "", {
        version: 3,
        sources: ["webpack://./src/modules/Controls/ui/mixins.less", "webpack://./src/modules/Controls/components/Volumen/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less"],
        names: [],
        mappings: "AA8GA,wEAII,kBAAA,CAIA,wBAAA,CAFA,WAAA,CACA,+BAAA,CAEA,cAAA,CARA,YAAA,CACA,kBAAA,CAUA,4BAAA,CAEA,iCAAA,CAXA,6BAAA,CAOA,SAAA,CAGA,4CC9GJ,CDiGA,gJAiBQ,YC/GR,CDkHI,wCAAA,wEACI,mCC/GN,CDiHM,8EACI,wBC/GV,CD8GM,sJAIQ,oBC/Gd,CACF,CAzBA,wEAII,YAuDJ,CA3DA,gJC8QI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CD/MJ,CA9EA,oJCiSQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BD9MR,CCkNI,4SAEI,gCAAA,CACA,YDhNR,CCmNI,uNAEI,2BAAA,CADA,sBDhNR,CC+MI,2NAKQ,eDjNZ,CA1FI,wCAAA,wEAEI,kBAAA,CADA,kBAAA,CAGA,SAAA,CADA,sBA8FN,CACF,CA1FA,wEACI,YA4FJ,CA1FI,wCAAA,wEAKI,qCAAA,CACA,cAAA,CALA,YAAA,CACA,qBAAA,CAYA,aAAA,CAXA,sBAAA,CAKA,mBAAA,CACA,cAAA,CAEA,iBAAA,CAKA,gCAAA,CAHA,OA2FN,CAtFM,qOAEI,WAwFV,CArFM,gUAMQ,YAAA,CAHA,SAAA,CAKA,wCAAA,CACA,oCAAA,CAJA,WAwFd,CAjFM,iCD+JJ,sFACI,iBAAA,CACA,kCAAA,CACA,mBC3EJ,CACF,CACF,CAnFA,wEACI,eAAA,CACA,qCAAA,CAOA,aAAA,CANA,mBAAA,CAEA,iBAAA,CAMA,oCAAA,CAHA,4CAAA,CAFA,SAuFJ,CAhFI,wCACI,8EAGI,eAAA,CACA,kBAAA,CAHA,UAAA,CAWA,YAAA,CAPA,SAAA,CAEA,iBAAA,CAEA,OAAA,CADA,OAAA,CAMA,wCAAA,CACA,oCAAA,CAJA,WAkFV,CACF,CA1EA,wEACI,8BAAA,CACA,qCAAA,CAKA,aAAA,CAHA,iBAAA,CAIA,UAAA,CAHA,SA6EJ,CAvEA,wED5EI,kBAAA,CADA,YAAA,CAIA,cAAA,CADA,aCuJJ",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-sm);\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n    opacity: 0.85;\n    padding: 0.75rem;\n\n    width: 100%;\n\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        opacity: 1;\n\n        transition: opacity 0.2s ease-in-out;\n    }\n}\n\n.controlItemIcon() {\n    display: flex;\n    align-items: center;\n\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.controlItemMenuHeader() {\n    .body-sm-bold();\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-sm);\n\n    background-color: rgba(18, 18, 18, 0.95);\n    border-bottom: 1px solid var(--border-color, #282828);\n\n    font-family: HelveticaNowText;\n    font-size: var(--font-size-3, 1rem);\n    font-style: normal;\n    font-weight: 700;\n    line-height: 160%;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n\n    width: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        background-color: hsla(0, 0%, 0%, 0.25);\n        font-size: var(--font-size-2, 0.75rem);\n    }\n}\n\n.controlItemMenuHeaderLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n\n    color: var(--white-text, #e8e8e8);\n\n    white-space: nowrap;\n\n    svg {\n        width: 1rem;\n        height: 1rem;\n    }\n}\n\n.controlItemMenuHeaderSelectedValue() {\n    font-weight: 400;\n    color: var(--white-65, #fff);\n}\n\n.controlItemMenu() {\n    border-radius: 8px 8px 0 0;\n    border: 1px solid var(--border-color, #282828);\n    cursor: auto;\n    pointer-events: all !important;\n\n    width: 100%;\n    height: 100%;\n\n    @media (hover: hover) and (pointer: fine) {\n        border-radius: 8px;\n    }\n}\n\n.controlItemMenuOptions() {\n    display: flex;\n    flex-direction: column;\n\n    overflow-y: auto;\n\n    max-height: 60vh;\n\n    @media (hover: hover) and (pointer: fine) {\n        max-height: var(--options-height, 80%);\n    }\n}\n\n.controlItemOptionButton {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    border: none;\n    color: var(--white-text, #e8e8e8);\n    background-color: initial;\n    cursor: pointer;\n    opacity: 1;\n\n    font-family: HelveticaNowText;\n    padding: var(--padding-sm) var(--grid-gap-sm);\n    font-size: var(--font-size-3, 1rem);\n\n    .hoverIcon {\n        display: none;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        font-size: var(--font-size-2, 0.75rem);\n\n        &:hover {\n            background-color: #242424;\n\n            .hoverIcon {\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.controlItemButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n\n    padding: 0.75rem;\n\n    width: 100%;\n}\n\n.controlItemButtonLabel() {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    pointer-events: none;\n}\n\n.controlItemButtonSubtext() {\n    color: var(--white-65, rgba(255, 255, 255, 0.65));\n\n    pointer-events: none;\n}\n\n.controlItemButtonSelectedIcon() {\n    display: inline-block;\n\n    pointer-events: none;\n\n    width: 1rem;\n    height: 1rem;\n    min-width: 1rem;\n    min-height: 1rem;\n}\n\n.controlItemButtonHoverIcon() {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        :hover & {\n            display: inline-block;\n\n            svg {\n                width: 1rem;\n                height: 1rem;\n                min-width: 1rem;\n                min-height: 1rem;\n            }\n        }\n    }\n}\n\n.controlItemMenuHeaderBackButton() {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.controlItemButtonLabelText() {\n    display: inline-block;\n\n    color: var(--white-text, #e8e8e8);\n}\n\n.focusState() {\n    &:focus-visible {\n        border-radius: 6px;\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n", "@import '../../ui/mixins.less';\n\n.volumeControls {\n    @import '@rsgweb/legacy-design-system/less/mixins.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n    display: flex;\n\n    @media (hover: hover) and (pointer: fine) {\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        gap: 0.2rem;\n    }\n}\n\n.volumeBar {\n    display: none;\n\n    @media (hover: hover) and (pointer: fine) {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        border-radius: var(--border-radius-md);\n        cursor: pointer;\n        padding: 1rem 0;\n        margin: 0 0.75rem 0 0;\n        padding: 1rem 0;\n\n        position: relative;\n\n        width: 0px;\n        height: 0.25rem;\n\n        transition: width 0.3s ease-in-out;\n\n        &.expand,\n        &:focus-visible {\n            width: 125px;\n        }\n\n        &:hover,\n        &:focus-visible {\n            .volumeBarIndicator::after {\n                opacity: 1;\n\n                width: 0.5rem;\n                height: 0.5rem;\n\n                transform: translate(50%, -50%) scale(1.5);\n                transition: transform 0.3s ease-in-out;\n            }\n        }\n        @supports (-moz-appearance: none) {\n            .focusState();\n        }\n    }\n}\n\n.volumeBarIndicator {\n    background: white;\n    border-radius: var(--border-radius-md);\n    pointer-events: none;\n\n    position: absolute;\n    z-index: 1;\n\n    width: calc(var(--percent-current, 0) * 100%);\n    height: 0.25rem;\n\n    transition: transform 0.3s ease-in-out;\n\n    @media (hover: hover) and (pointer: fine) {\n        &::after {\n            content: '';\n\n            background: white;\n            border-radius: 100%;\n            opacity: 0;\n\n            position: absolute;\n            top: 50%;\n            right: 0;\n\n            width: 0.2rem;\n            height: 0.2rem;\n\n            transform: translate(50%, -50%) scale(0.25);\n            transition: transform 0.3s ease-in-out;\n        }\n    }\n}\n\n.volumeBarBackground {\n    background: fade(white, 25);\n    border-radius: var(--border-radius-md);\n\n    position: absolute;\n    z-index: 0;\n\n    height: 0.25rem;\n    width: 100%;\n}\n\n.icon {\n    .controlItemIcon();\n}\n", "@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        controlItemOptionButton: "rockstargames-modules-core-videoplayerbd832ea62bed27299da3508d8af7176b",
        hoverIcon: "rockstargames-modules-core-videoplayerac056ad4b9cfef43c9e0497356d889f1",
        volumeControls: "rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8",
        pillBtn: "rockstargames-modules-core-videoplayerdd89bd309a367c738cb0f7c67aec4362",
        selected: "rockstargames-modules-core-videoplayere7a637dbad29f2d2da992c9bda2eab72",
        volumeBar: "rockstargames-modules-core-videoplayerc53e9a8ef1eb17e73a9b14345aea667d",
        expand: "rockstargames-modules-core-videoplayerb7ee87503e6abcf7ca9015848cbd75e9",
        volumeBarIndicator: "rockstargames-modules-core-videoplayera6810e881da9742354ccbeb8457a07e8",
        volumeBarBackground: "rockstargames-modules-core-videoplayeracfcf6e26a55c7f25a2ce148f01942b7",
        icon: "rockstargames-modules-core-videoplayerb6e3dcbfe85be96b62c183be72291268"
      };
      const d = i
    },
    52501: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15{background:linear-gradient(180deg,hsla(0,0%,7%,0) 2.63%,hsla(0,0%,7%,.03) 8.01%,hsla(0,0%,7%,.44) 42.39%,hsla(0,0%,7%,.65) 63.58%,hsla(0,0%,7%,.79) 81.41%,hsla(0,0%,7%,.9));bottom:0;display:flex;flex-direction:column-reverse;font-size:.75rem;height:4rem;justify-content:flex-start;left:0;padding:0 1rem;position:absolute;transition:transform .3s ease-in-out;width:100%;z-index:1}.rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15 .rockstargames-modules-core-videoplayera6163e1533a1776596a815b76b3dfb0c{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15 .rockstargames-modules-core-videoplayera6163e1533a1776596a815b76b3dfb0c img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15 .rockstargames-modules-core-videoplayera6163e1533a1776596a815b76b3dfb0c:focus,.rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15 .rockstargames-modules-core-videoplayera6163e1533a1776596a815b76b3dfb0c:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15 .rockstargames-modules-core-videoplayera6163e1533a1776596a815b76b3dfb0c.rockstargames-modules-core-videoplayerf98587b86d83fbf0a1d68debb686acbf{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15 .rockstargames-modules-core-videoplayera6163e1533a1776596a815b76b3dfb0c.rockstargames-modules-core-videoplayerf98587b86d83fbf0a1d68debb686acbf img{filter:invert()}@media (min-width:768px){.rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15{height:var(--controls-bg-height,7rem)}}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15{flex-direction:column;justify-content:flex-end}}.rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15.rockstargames-modules-core-videoplayera523729bef294342658080805393357c{transform:translateY(100%)}.rockstargames-modules-core-videoplayere896a32de026619c95d99f5a6ef8f2e3,.rockstargames-modules-core-videoplayera86db04eebbc57b7bf7c8edad75b5a11,.rockstargames-modules-core-videoplayerc3610319e2e13e380acbfc8281cdb296{display:flex;flex-direction:row}.rockstargames-modules-core-videoplayere896a32de026619c95d99f5a6ef8f2e3{align-items:center;justify-content:space-between;padding:var(--padding-xs) 0 0}@media (hover:hover) and (pointer:fine){.rockstargames-modules-core-videoplayere896a32de026619c95d99f5a6ef8f2e3{padding:0}}", "", {
        version: 3,
        sources: ["webpack://./src/modules/Controls/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAAA,wEAQI,4KAAA,CAYA,QAAA,CAhBA,YAAA,CACA,6BAAA,CAYA,gBAAA,CAQA,WAAA,CAnBA,0BAAA,CAeA,MAAA,CAqBA,cAAA,CAvBA,iBAAA,CAQA,oCAAA,CAHA,UAAA,CAFA,SAuBJ,CA7CA,gJCgRI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CD/NJ,CAhEA,oJCmSQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BD9NR,CCkOI,4SAEI,gCAAA,CACA,YDhOR,CCmOI,uNAEI,2BAAA,CADA,sBDhOR,CC+NI,2NAKQ,eDjOZ,CE1BI,yBAAA,wEF1BI,qCAwDN,CACF,CAtDI,wCAAA,wEACI,qBAAA,CACA,wBAyDN,CACF,CAvDI,+IACI,0BAyDR,CAzCA,wNAJI,YAAA,CACA,kBA2DJ,CAxDA,wEAGI,kBAAA,CACA,6BAAA,CAEA,6BAkDJ,CAhDI,wCAAA,wEACI,SAmDN,CACF",
        sourcesContent: [".controls {\n    @import '@rsgweb/legacy-design-system/less/mixins.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: flex-start;\n\n    background: linear-gradient(\n        180deg,\n        rgba(18, 18, 18, 0) 2.63%,\n        rgba(18, 18, 18, 0.03) 8.01%,\n        rgba(18, 18, 18, 0.44) 42.39%,\n        rgba(18, 18, 18, 0.65) 63.58%,\n        rgba(18, 18, 18, 0.79) 81.41%,\n        rgba(18, 18, 18, 0.9) 100%\n    );\n    font-size: 0.75rem;\n\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n\n    width: 100%;\n    height: 4rem;\n\n    transition: transform 0.3s ease-in-out;\n\n    .md({\n        height: var(--controls-bg-height, 7rem);\n    });\n\n    @media (hover: hover) and (pointer: fine) {\n        flex-direction: column;\n        justify-content: flex-end;\n    }\n\n    &.controlsInactive {\n        transform: translateY(100%);\n    }\n\n    padding: 0 1rem;\n}\n\n.left {\n    display: flex;\n    flex-direction: row;\n}\n\n.right {\n    display: flex;\n    flex-direction: row;\n}\n\n.controlsIcons {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n\n    padding: var(--padding-xs) 0 0;\n\n    @media (hover: hover) and (pointer: fine) {\n        padding: 0;\n    }\n}\n", "@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        controls: "rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15",
        pillBtn: "rockstargames-modules-core-videoplayera6163e1533a1776596a815b76b3dfb0c",
        selected: "rockstargames-modules-core-videoplayerf98587b86d83fbf0a1d68debb686acbf",
        controlsInactive: "rockstargames-modules-core-videoplayera523729bef294342658080805393357c",
        controlsIcons: "rockstargames-modules-core-videoplayere896a32de026619c95d99f5a6ef8f2e3",
        left: "rockstargames-modules-core-videoplayera86db04eebbc57b7bf7c8edad75b5a11",
        right: "rockstargames-modules-core-videoplayerc3610319e2e13e380acbfc8281cdb296"
      };
      const d = i
    },
    61520: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => d
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t)()(r());
      i.push([n.id, ".rockstargames-modules-core-videoplayerf409d08f813837374524ace53aca71a0{--padding-sides:1rem;--padding-top-bottom:1rem;--icon-size:2.5rem;height:100%;z-index:1}.rockstargames-modules-core-videoplayerf409d08f813837374524ace53aca71a0.rockstargames-modules-core-videoplayerd0483907db218cee6789cc8fd2e9561a{--blur-because-in-bg:10px}.rockstargames-modules-core-videoplayerf409d08f813837374524ace53aca71a0.rockstargames-modules-core-videoplayerd579486eeae792526c1de9adeea2dcde{cursor:pointer}.rockstargames-modules-core-videoplayerf409d08f813837374524ace53aca71a0.rockstargames-modules-core-videoplayerd579486eeae792526c1de9adeea2dcde .rockstargames-modules-core-videoplayerf70e0fbb25401cd9aa7d034577424784{display:none}", "", {
        version: 3,
        sources: ["webpack://./src/modules/ThePlayerItself/index.less"],
        names: [],
        mappings: "AAEA,wEACI,oBAAA,CACA,yBAAA,CACA,kBAAA,CAEA,WAAA,CAEA,SA4BJ,CA1BI,+IACI,yBA4BR,CAzBI,+IACI,cA2BR,CA5BI,uNAGQ,YA4BZ",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.videoplayer {\n    --padding-sides: 1rem;\n    --padding-top-bottom: 1rem;\n    --icon-size: 2.5rem;\n\n    height: 100%;\n\n    z-index: 1;\n\n    &.videoplayerEnded {\n        --blur-because-in-bg: 10px;\n    }\n\n    &.videoplayerNotRunning {\n        cursor: pointer;\n        .controls {\n            display: none;\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        videoplayer: "rockstargames-modules-core-videoplayerf409d08f813837374524ace53aca71a0",
        videoplayerEnded: "rockstargames-modules-core-videoplayerd0483907db218cee6789cc8fd2e9561a",
        videoplayerNotRunning: "rockstargames-modules-core-videoplayerd579486eeae792526c1de9adeea2dcde",
        controls: "rockstargames-modules-core-videoplayerf70e0fbb25401cd9aa7d034577424784"
      };
      const d = i
    },
    25273: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => g
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t),
        d = a(79908),
        l = a.n(d),
        s = new URL(a(16465), a.b),
        c = i()(r()),
        m = l()(s);
      c.push([n.id, `.rockstargames-modules-core-videoplayereee9468883403896b80d5bc44dcfbef9{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayereee9468883403896b80d5bc44dcfbef9 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayereee9468883403896b80d5bc44dcfbef9:focus,.rockstargames-modules-core-videoplayereee9468883403896b80d5bc44dcfbef9:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayereee9468883403896b80d5bc44dcfbef9.rockstargames-modules-core-videoplayerab48cc10aa47f0116ea521c80590bbf8{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayereee9468883403896b80d5bc44dcfbef9.rockstargames-modules-core-videoplayerab48cc10aa47f0116ea521c80590bbf8 img{filter:invert()}.rockstargames-modules-core-videoplayerd9ebc60a4ffee00fe85b248250d44ce8{cursor:pointer;display:inline-block;height:2rem;height:var(--rem-125-rem,25px);padding:0;position:relative;width:2rem;width:var(--rem-125-rem,25px)}.rockstargames-modules-core-videoplayerd9ebc60a4ffee00fe85b248250d44ce8:after{background:url(${m}) no-repeat 50%/1.5rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}[data-type=collapsed] .rockstargames-modules-core-videoplayerd9ebc60a4ffee00fe85b248250d44ce8{display:inline-block;height:1rem;width:1rem}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/ui/icons/ArrowLeft/index.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CAhEA,wED8OI,cAAA,CC5OA,oBAAA,CD0OA,WAAA,CCzOA,8BAAA,CD4OA,SAAA,CAFA,iBAAA,CAFA,UAAA,CCvOA,6BAsEJ,CDuKI,8EASI,uEAAA,CARA,UAAA,CACA,aAAA,CACA,WAAA,CAGA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,0BAAA,CAJA,UChKR,CA9EA,8FAEQ,oBAAA,CAEA,WAAA,CADA,UAgFR",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.arrow {\n    .iconBtnPlain('chevron-left');\n    display: inline-block;\n    height: var(--rem-125-rem, 25px);\n    width: var(--rem-125-rem, 25px);\n}\n\n[data-type='collapsed']& {\n    .arrow {\n        display: inline-block;\n        width: 1rem;\n        height: 1rem;\n    }\n}\n"],
        sourceRoot: ""
      }]), c.locals = {
        pillBtn: "rockstargames-modules-core-videoplayereee9468883403896b80d5bc44dcfbef9",
        selected: "rockstargames-modules-core-videoplayerab48cc10aa47f0116ea521c80590bbf8",
        arrow: "rockstargames-modules-core-videoplayerd9ebc60a4ffee00fe85b248250d44ce8"
      };
      const g = c
    },
    67010: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => g
      });
      var o = a(42587),
        r = a.n(o),
        t = a(15081),
        i = a.n(t),
        d = a(79908),
        l = a.n(d),
        s = new URL(a(69308), a.b),
        c = i()(r()),
        m = l()(s);
      c.push([n.id, `.rockstargames-modules-core-videoplayerd3e5f310dc80d647da77d90bae29c1fc{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-videoplayerd3e5f310dc80d647da77d90bae29c1fc img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-videoplayerd3e5f310dc80d647da77d90bae29c1fc:focus,.rockstargames-modules-core-videoplayerd3e5f310dc80d647da77d90bae29c1fc:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-videoplayerd3e5f310dc80d647da77d90bae29c1fc.rockstargames-modules-core-videoplayerd35d00ed5dad4efb8be10ec29edf8363{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-videoplayerd3e5f310dc80d647da77d90bae29c1fc.rockstargames-modules-core-videoplayerd35d00ed5dad4efb8be10ec29edf8363 img{filter:invert()}.rockstargames-modules-core-videoplayerb6e8ef849317cb16d1ee5eeb0847644e{cursor:pointer;display:inline-block;height:2rem;height:1rem;padding:0;position:relative;width:2rem;width:1rem}.rockstargames-modules-core-videoplayerb6e8ef849317cb16d1ee5eeb0847644e:after{background:url(${m}) no-repeat 50%/1.5rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}[data-type=collapsed] .rockstargames-modules-core-videoplayerb6e8ef849317cb16d1ee5eeb0847644e{display:inline-block}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/ui/icons/ArrowRight/index.less"],
        names: [],
        mappings: "AA2QA,wEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4EAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4JAEI,gCAAA,CACA,YC/OR,CDkPI,+IAEI,2BAAA,CADA,sBC/OR,CD8OI,mJAKQ,eChPZ,CAhEA,wED8OI,cAAA,CC5OA,oBAAA,CD0OA,WAAA,CCxOA,WAAA,CD2OA,SAAA,CAFA,iBAAA,CAFA,UAAA,CCxOA,UAuEJ,CDuKI,8EASI,uEAAA,CARA,UAAA,CACA,aAAA,CACA,WAAA,CAGA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,0BAAA,CAJA,UChKR,CA9EA,8FAEQ,oBA+ER",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.arrow {\n    .iconBtnPlain('chevron-right');\n    display: inline-block;\n    width: 1rem;\n    height: 1rem;\n}\n\n[data-type='collapsed']& {\n    .arrow {\n        display: inline-block;\n    }\n}\n"],
        sourceRoot: ""
      }]), c.locals = {
        pillBtn: "rockstargames-modules-core-videoplayerd3e5f310dc80d647da77d90bae29c1fc",
        selected: "rockstargames-modules-core-videoplayerd35d00ed5dad4efb8be10ec29edf8363",
        arrow: "rockstargames-modules-core-videoplayerb6e8ef849317cb16d1ee5eeb0847644e"
      };
      const g = c
    },
    4633: n => {
      var e = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "VideoData"
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
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "createdFormatted"
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
                    value: "groupType"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "youtubeId"
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
                  name: {
                    kind: "Name",
                    value: "tracks"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "captions"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "lang"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "files"
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
                        value: "createdFormatted"
                      },
                      arguments: [],
                      directives: []
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
                            value: "titleSlug"
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
          end: 976
        }
      };

      function a(n, e) {
        if ("FragmentSpread" === n.kind) e.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var o = n.type;
          "NamedType" === o.kind && e.add(o.name.value)
        }
        n.selectionSet && n.selectionSet.selections.forEach((function(n) {
          a(n, e)
        })), n.variableDefinitions && n.variableDefinitions.forEach((function(n) {
          a(n, e)
        })), n.definitions && n.definitions.forEach((function(n) {
          a(n, e)
        }))
      }
      e.loc.source = {
        body: 'query VideoData(\n    $id: String!\n    $locale: String!\n    $withTranslations: Boolean! = false\n    $cache: Boolean = true\n) {\n    video(id: $id, locale: $locale) {\n        id\n        title\n        screencap\n        game {\n            id\n            title\n            titleSlug\n        }\n        createdFormatted\n        description\n        agegated\n        groupType\n        youtubeId\n        youtubeOnly\n        tracks {\n            captions\n            lang\n        }\n        files {\n            resolution\n            src\n            default\n        }\n    }\n    related: videos(relatedToId: $id, locale: $locale, limit: 50) {\n        results {\n            id\n            title\n            screencap\n            createdFormatted\n            game {\n                id\n                title\n                titleSlug\n            }\n        }\n    }\n    translations(locale: $locale, config: "default")\n        @include(if: $withTranslations) {\n        key\n        value\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var o = {};

      function r(n, e) {
        for (var a = 0; a < n.definitions.length; a++) {
          var o = n.definitions[a];
          if (o.name && o.name.value == e) return o
        }
      }
      e.definitions.forEach((function(n) {
        if (n.name) {
          var e = new Set;
          a(n, e), o[n.name.value] = e
        }
      })), n.exports = e, n.exports.VideoData = function(n, e) {
        var a = {
          kind: n.kind,
          definitions: [r(n, e)]
        };
        n.hasOwnProperty("loc") && (a.loc = n.loc);
        var t = o[e] || new Set,
          i = new Set,
          d = new Set;
        for (t.forEach((function(n) {
            d.add(n)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(n) {
            i.has(n) || (i.add(n), (o[n] || new Set).forEach((function(n) {
              d.add(n)
            })))
          }))
        }
        return i.forEach((function(e) {
          var o = r(n, e);
          o && a.definitions.push(o)
        })), a
      }(e, "VideoData")
    },
    50693: n => {
      "use strict";
      n.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 110 100%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Crect width=%27110%27 height=%27100%27 fill=%27%23eb1818%27 rx=%2720%27/%3E%3Cpath fill=%27%23000%27 d=%27m42 70 34.641-20L42 30z%27/%3E%3C/g%3E%3C/svg%3E"
    },
    40382: n => {
      "use strict";
      n.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27110%27 height=%27100%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Crect width=%27110%27 height=%27100%27 fill=%27%23FCAF17%27 rx=%2720%27/%3E%3Cpath fill=%27%23000%27 d=%27m42 70 34.641-20L42 30z%27/%3E%3C/g%3E%3C/svg%3E"
    },
    88700: n => {
      "use strict";
      n.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 style=%27enable-background:new 0 0 110 100%27 viewBox=%270 0 110 100%27%3E%3Cpath d=%27M20 0h70c11.046 0 20 8.954 20 20v60c0 11.046-8.954 20-20 20H20C8.954 100 0 91.046 0 80V20C0 8.954 8.954 0 20 0z%27 style=%27opacity:.75%27/%3E%3Cpath d=%27m42 70 34.641-20L42 30z%27 style=%27fill:%23fff%27/%3E%3C/svg%3E"
    },
    36606: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/59de0d7e9b43e1cc0cab80a770e9efe6.woff"
    },
    57390: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ab64825965d1d9e6e8721c549ca9b65a.woff"
    },
    50228: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/95ca59e1c2cf140daa8b024c6a139e4c.woff"
    },
    54414: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/63c1db80114374c24625111e06557170.woff"
    },
    79539: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ee9fe642d516bd426445b83dfe08cd39.woff"
    },
    61494: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ef44f43ca79bb1aee29fbc2d457e7dee.woff"
    },
    304: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/aa2a7321d65db9f2de3cafabeb37e354.woff"
    },
    28168: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a8da93d3b93aa6f5b995c8fca0a49d56.woff"
    },
    21130: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/bc4df074e2a0a7a841c564dba3e08fe8.woff"
    },
    5676: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/6e2e46bc0a11279c325310a4ef9ce77c.woff"
    },
    51594: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/63234fb79c05a628350bb714e8b70f1d.woff"
    },
    69400: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/202c95f3c4658c54223b0f4166bd3825.woff"
    },
    44840: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a5e4e77906b6b4b3cbf21f4c26271861.woff"
    },
    93803: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/db765ccb047ec8429212c1a913914694.woff"
    },
    53037: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/e4be9aed1e8beccc21ffb995f0a89da0.woff"
    },
    34298: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/62b84dbfc20341e064c88ec93455ccac.woff"
    },
    79215: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/20f419b63a6f61085c182ec2f1cd8fa0.woff"
    },
    55490: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/327335f15d6b7bebd592eb24947cf560.woff"
    },
    44001: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/4ab575ea1a8eca627680b2b7ef138d0d.woff"
    },
    26207: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/6f2bacca1d507ccd5eb7b82f9224a74f.woff"
    },
    6903: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/96a3e88142b1180d6a8f0c79b2f1683a.woff"
    },
    22154: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/2b00d9b63daf42f3a42cdbd63cf047ea.woff"
    },
    49200: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/774ad5166eb5921aca5e0c86b90e5acc.woff"
    },
    20928: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/97774bba32302ec2b24cfff140f0622b.woff"
    },
    90768: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/6cd147a8d9ee1f0d4c56a4613962581c.woff"
    },
    29951: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/85e45820f22a3efb16f495d218f310b2.woff"
    },
    52086: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/2182248632b4e44ebf3764bc8ac7aba2.woff"
    },
    98230: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/55aff5d02363927e69c11c450746bfd8.woff"
    },
    66894: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/63cfc284c204bd1597bc68464e18042b.woff"
    },
    24921: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/064abecda5d2f269d95fa7fd0f340e87.woff"
    },
    97439: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ddff8a927395b3bbeb442818124b332e.woff"
    },
    28255: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/bf1c99f9a5316689221de8a3540abf38.woff"
    },
    36334: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/d063646155b907d60f49ada779b60713.woff"
    },
    94904: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a531a5aaeac0ada2930fd697606d7e9e.woff"
    },
    49027: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/0c60fa85dfc771ab4d15d175246263b5.woff"
    },
    83493: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/acbb38cbe0ae2cdfc5f72a96cd32fe86.woff"
    },
    31431: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c70a0570c2d0687a208d5612623a9fdc.woff"
    },
    40792: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/f09f2d938e708e14f4211b5c41b1ae2c.woff"
    },
    66562: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/0cd5b1e38f54ef83942d288ce01980e6.woff"
    },
    81117: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/e2838b19e760e3e6f50866c533aeb282.woff"
    },
    62051: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/010014d365bcd4b2fedd44df3f0e9728.woff"
    },
    68577: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/7935b57c9db57ab14bd5a876dbfb87f4.woff"
    },
    9133: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c31221106dc90ced1c3479d73a5fe115.woff"
    },
    93458: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/e34f12fc5033d9cdc9f062f80c447b8f.woff"
    },
    77032: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/76a3f4e73b6671642a161e05923a968b.woff"
    },
    44486: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a7d5ee48f5e8cb1f732d7206c9869112.woff"
    },
    28326: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/8517df1baaad4b49346c1293b195088a.woff"
    },
    50225: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/6ffa7afc52831edad562d5a1c17dc41e.woff"
    },
    32791: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/0782dca93011dc6ab08f338b6c31e1d6.woff"
    },
    92973: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/dd749523aef22373be9db64ea01d64bc.woff"
    },
    25293: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/90ef908f0a56e2fa2b7d9b2056d81bcc.woff"
    },
    46962: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/94d584a6e397820977db9932febb4b92.woff"
    },
    66312: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/f3472849022d6ce77ee5fc572d732db8.woff"
    },
    44934: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/4d21d448eea7cddea2f20b68968226c1.woff"
    },
    58853: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/86d40c5569b20fa82ce1ed87dea47810.woff"
    },
    46010: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/688eae524f5ac689bcae1c3cbc4549c0.woff"
    },
    68145: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c5771270ac701867f740f52e82d886af.woff"
    },
    79122: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c5dfa9c826b62645cced60df6042f7ef.woff"
    },
    89307: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/58a759aebd79ce94dbe18b5a67013eca.woff"
    },
    26739: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/b66ddc09c267984e4d637e9745c7fbf8.woff"
    },
    59792: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/6d335c7bdc0dedb8593d2740f9e9b8e0.woff"
    },
    313: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/099c158b47220bfa6b52c3aaf2ff3753.woff"
    },
    88622: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c44079bdc60b7e381d435bec0216767f.woff"
    },
    20629: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a0a8cf635f2f27fc761850d82537fd01.woff"
    },
    93262: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/16612f150b055e9108648a89c5f4a8d7.woff"
    },
    47594: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/decd41a7166cfa68918f81e92db8e1c1.woff"
    },
    89457: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/976c864a7229fe453650a438f00e0d3e.woff"
    },
    11917: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/91d1b5e1fa862640813fc7aa5db77d08.woff"
    },
    16465: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05f9a77c98ced3942631978d7672ad20.svg"
    },
    69308: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23bdc67ffcc24a66b8fe01ae5c40a7ed.svg"
    },
    52542: n => {
      "use strict";
      n.exports = JSON.parse('{"de-DE":{"videoplayer_airplay_button_label":"Bildschirm teilen","videoplayer_airplay_menu_header":"Herunterladen","videoplayer_airplay_not_supported_error":"AirPlay wird von diesem Browser nicht unterstützt.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"Untertitel","videoplayer_captions_menu_back_button_label":"Zurück","videoplayer_captions_menu_header":"Untertitel/CC","videoplayer_captions_menu_off_label":"Aus","videoplayer_captions_menu_subtitles_label":"(Untertitel)","videoplayer_collapsed_menu_header_label":"Mehr","videoplayer_collapsed_menu_label":"Zusätzliche Einstellungen","videoplayer_downloads_button_label":"Download-Optionen","videoplayer_downloads_menu_back_button_label":"Zurück","videoplayer_downloads_menu_header":"Herunterladen","videoplayer_error":"Beim Videoplayer ist etwas schiefgelaufen.","videoplayer_fullscreen_button_label":"Video im Vollbildmodus abspielen","videoplayer_fullscreen_hover_label":"Vollbild","videoplayer_pause_button_label":"Pausetaste","videoplayer_pause_hover_label":"Pause","videoplayer_play_button_label":"Play-Taste","videoplayer_play_hover_label":"Abspielen","videoplayer_play_pause_button_label":"Abspielen/Pause","videoplayer_playlist_active_badge":"Spielt gerade","videoplayer_progress_bar_label":"Fortschrittsanzeige","videoplayer_quality_menu_back_button_label":"Zurück","videoplayer_quality_settings_button_label":"Qualitätseinstellungsmenü","videoplayer_quality_settings_menu_header":"Einstellungen","videoplayer_replay_hover_label":"Wiederholen","videoplayer_share_copy":"Kopieren","videoplayer_share_link_button_label":"Mit {name} teilen","videoplayer_share_menu_back_button_label":"Zurück","videoplayer_share_menu_button_label":"Teilenmenü","videoplayer_share_menu_header":"Teilen","videoplayer_share_time_copied":"Kopiert!","videoplayer_share_time_copy":"Beginne geteiltes Video bei","videoplayer_share_title":"Teilen","videoplayer_unmute_click":"Klicken, um die Stummschaltung aufzuheben.","videoplayer_unmute_tap":"Tippen, um die Stummschaltung aufzuheben.","videoplayer_video_not_found_error":"Das Videoelement wurde nicht gefunden.","videoplayer_volume_slider_label":"Lautstärke","videoplayer_volume_toggle_button_label":"Stummschaltung an/aus","videoplayer_windowed_hover_label":"Fenstermodus"},"en-US":{"videoplayer_airplay_button_label":"Screen Share","videoplayer_airplay_menu_header":"Download","videoplayer_airplay_not_supported_error":"AirPlay not supported in this browser.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"Captions","videoplayer_captions_menu_back_button_label":"Back","videoplayer_captions_menu_header":"Subtitles / CC","videoplayer_captions_menu_off_label":"Off","videoplayer_captions_menu_subtitles_label":"(Subtitles)","videoplayer_collapsed_menu_header_label":"More","videoplayer_collapsed_menu_label":"Additional Settings","videoplayer_downloads_button_label":"Download Options Menu","videoplayer_downloads_menu_back_button_label":"Back","videoplayer_downloads_menu_header":"Download","videoplayer_error":"Something went wrong with the video player.","videoplayer_fullscreen_button_label":"Toggle video in fullscreen mode","videoplayer_fullscreen_hover_label":"Fullscreen","videoplayer_pause_button_label":"Pause button","videoplayer_pause_hover_label":"Pause","videoplayer_play_button_label":"Play button","videoplayer_play_hover_label":"Play","videoplayer_play_pause_button_label":"Play/Pause Toggle","videoplayer_playlist_active_badge":"Now Playing","videoplayer_progress_bar_label":"Progress Bar","videoplayer_quality_menu_back_button_label":"Back","videoplayer_quality_settings_button_label":"Quality Settings Menu","videoplayer_quality_settings_menu_header":"Settings","videoplayer_replay_hover_label":"Replay","videoplayer_share_copy":"Copy","videoplayer_share_link_button_label":"Share to {name}","videoplayer_share_menu_back_button_label":"Back","videoplayer_share_menu_button_label":"Share Menu","videoplayer_share_menu_header":"Share","videoplayer_share_time_copied":"Copied!","videoplayer_share_time_copy":"Start shared video at","videoplayer_share_title":"Share","videoplayer_unmute_click":"Click anywhere to unmute.","videoplayer_unmute_tap":"Tap anywhere to unmute.","videoplayer_video_not_found_error":"Video element not found.","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Mute/Unmute Toggle","videoplayer_windowed_hover_label":"Windowed"},"es-ES":{"videoplayer_airplay_button_label":"Compartir pantalla","videoplayer_airplay_menu_header":"Descargar","videoplayer_airplay_not_supported_error":"Este navegador no es compatible con AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"Subtítulos descriptivos","videoplayer_captions_menu_back_button_label":"Volver","videoplayer_captions_menu_header":"Subtítulos/Subtítulos cerrados","videoplayer_captions_menu_off_label":"No","videoplayer_captions_menu_subtitles_label":"(Subtítulos)","videoplayer_collapsed_menu_header_label":"Más","videoplayer_collapsed_menu_label":"Ajustes adicionales","videoplayer_downloads_button_label":"Menú Opciones de descarga","videoplayer_downloads_menu_back_button_label":"Volver","videoplayer_downloads_menu_header":"Descargar","videoplayer_error":"Se ha producido un problema con el reproductor de vídeo.","videoplayer_fullscreen_button_label":"Cambiar el vídeo a pantalla completa.","videoplayer_fullscreen_hover_label":"Pantalla completa","videoplayer_pause_button_label":"Botón de pausa","videoplayer_pause_hover_label":"Pausar","videoplayer_play_button_label":"Botón de reproducción","videoplayer_play_hover_label":"Reproducir","videoplayer_play_pause_button_label":"Reproducir/Pausar","videoplayer_playlist_active_badge":"Reproduciendo","videoplayer_progress_bar_label":"Barra de progreso","videoplayer_quality_menu_back_button_label":"Volver","videoplayer_quality_settings_button_label":"Menú Ajustes de calidad","videoplayer_quality_settings_menu_header":"Ajustes","videoplayer_replay_hover_label":"Volver a ver","videoplayer_share_copy":"Copiar","videoplayer_share_link_button_label":"Compartir con {name}","videoplayer_share_menu_back_button_label":"Volver","videoplayer_share_menu_button_label":"Menú Compartir","videoplayer_share_menu_header":"Compartir","videoplayer_share_time_copied":"¡Copiado!","videoplayer_share_time_copy":"Iniciar vídeo compartido en el minuto","videoplayer_share_title":"Compartir","videoplayer_unmute_click":"Haz clic en cualquier lugar para activar el audio.","videoplayer_unmute_tap":"Toca en cualquier lugar para activar el audio.","videoplayer_video_not_found_error":"Elemento de vídeo no encontrado.","videoplayer_volume_slider_label":"Volumen","videoplayer_volume_toggle_button_label":"Silenciar/Habilitar audio","videoplayer_windowed_hover_label":"Modo ventana"},"es-MX":{"videoplayer_airplay_button_label":"Compartir pantalla","videoplayer_airplay_menu_header":"Descargar","videoplayer_airplay_not_supported_error":"Este navegador no es compatible con AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"Configuración de subtítulos","videoplayer_captions_menu_back_button_label":"Atrás","videoplayer_captions_menu_header":"Subtítulos","videoplayer_captions_menu_off_label":"No","videoplayer_captions_menu_subtitles_label":"(Subtítulos)","videoplayer_collapsed_menu_header_label":"Más","videoplayer_collapsed_menu_label":"Configuración adicional","videoplayer_downloads_button_label":"Opciones de descarga","videoplayer_downloads_menu_back_button_label":"Atrás","videoplayer_downloads_menu_header":"Descargar","videoplayer_error":"Se produjo un problema con el reproductor de video.","videoplayer_fullscreen_button_label":"Cambiar video a pantalla completa","videoplayer_fullscreen_hover_label":"Pantalla completa","videoplayer_pause_button_label":"Botón de pausa","videoplayer_pause_hover_label":"Pausar","videoplayer_play_button_label":"Botón de reproducción","videoplayer_play_hover_label":"Reproducir","videoplayer_play_pause_button_label":"Reproducir/Pausar","videoplayer_playlist_active_badge":"Reproduciendo","videoplayer_progress_bar_label":"Barra de progreso","videoplayer_quality_menu_back_button_label":"Atrás","videoplayer_quality_settings_button_label":"Configuración de calidad","videoplayer_quality_settings_menu_header":"Configuración","videoplayer_replay_hover_label":"Repetir","videoplayer_share_copy":"Copiar","videoplayer_share_link_button_label":"Compartir con {name}","videoplayer_share_menu_back_button_label":"Atrás","videoplayer_share_menu_button_label":"Compartir","videoplayer_share_menu_header":"Compartir","videoplayer_share_time_copied":"¡Copiado!","videoplayer_share_time_copy":"Iniciar video compartido en","videoplayer_share_title":"Compartir","videoplayer_unmute_click":"Haz clic en cualquier parte para activar el sonido.","videoplayer_unmute_tap":"Toca en cualquier parte para activar el sonido.","videoplayer_video_not_found_error":"Elemento de video no encontrado.","videoplayer_volume_slider_label":"Volumen","videoplayer_volume_toggle_button_label":"Activar/Desactivar silenciado","videoplayer_windowed_hover_label":"Ventana"},"fr-FR":{"videoplayer_airplay_button_label":"Partage d\'écran","videoplayer_airplay_menu_header":"Téléchargement","videoplayer_airplay_not_supported_error":"AirPlay n\'est pas pris en charge par ce navigateur.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"Sous-titres","videoplayer_captions_menu_back_button_label":"Retour","videoplayer_captions_menu_header":"Sous-titres","videoplayer_captions_menu_off_label":"Sans","videoplayer_captions_menu_subtitles_label":"(Sous-titres)","videoplayer_collapsed_menu_header_label":"Plus","videoplayer_collapsed_menu_label":"Paramètres supplémentaires","videoplayer_downloads_button_label":"Menu des options de téléchargement","videoplayer_downloads_menu_back_button_label":"Retour","videoplayer_downloads_menu_header":"Téléchargement","videoplayer_error":"Une erreur s\'est produite avec le lecteur vidéo.","videoplayer_fullscreen_button_label":"Bouton pour activer/désactiver le plein écran","videoplayer_fullscreen_hover_label":"Plein écran","videoplayer_pause_button_label":"Bouton Pause","videoplayer_pause_hover_label":"Pause","videoplayer_play_button_label":"Bouton Lecture","videoplayer_play_hover_label":"Lecture","videoplayer_play_pause_button_label":"Bouton Lecture/Pause","videoplayer_playlist_active_badge":"Lecture en cours","videoplayer_progress_bar_label":"Barre de progression","videoplayer_quality_menu_back_button_label":"Retour","videoplayer_quality_settings_button_label":"Menu des paramètres de qualité","videoplayer_quality_settings_menu_header":"Paramètres","videoplayer_replay_hover_label":"Relire","videoplayer_share_copy":"Copier","videoplayer_share_link_button_label":"Partager avec {name}","videoplayer_share_menu_back_button_label":"Retour","videoplayer_share_menu_button_label":"Menu de partage","videoplayer_share_menu_header":"Partage","videoplayer_share_time_copied":"Copié !","videoplayer_share_time_copy":"Démarrer la vidéo partagée à","videoplayer_share_title":"Partager","videoplayer_unmute_click":"Cliquez n\'importe où pour activer le son.","videoplayer_unmute_tap":"Touchez n\'importe où pour activer le son.","videoplayer_video_not_found_error":"Élément vidéo introuvable.","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Bouton pour activer/désactiver le son","videoplayer_windowed_hover_label":"Mode fenêtré"},"it-IT":{"videoplayer_airplay_button_label":"Condivisione schermo","videoplayer_airplay_menu_header":"Scarica","videoplayer_airplay_not_supported_error":"Questo browser non supporta AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"Audio descrizione","videoplayer_captions_menu_back_button_label":"Indietro","videoplayer_captions_menu_header":"Sottotitoli","videoplayer_captions_menu_off_label":"Disattivati","videoplayer_captions_menu_subtitles_label":"(Sottotitoli)","videoplayer_collapsed_menu_header_label":"Altro","videoplayer_collapsed_menu_label":"Opzioni aggiuntive","videoplayer_downloads_button_label":"Menu opzioni download","videoplayer_downloads_menu_back_button_label":"Indietro","videoplayer_downloads_menu_header":"Scarica","videoplayer_error":"Qualcosa è andato storto con il lettore video.","videoplayer_fullscreen_button_label":"Attiva/Disattiva la modalità video a schermo intero","videoplayer_fullscreen_hover_label":"Schermo intero","videoplayer_pause_button_label":"Pulsante pausa","videoplayer_pause_hover_label":"Pausa","videoplayer_play_button_label":"Pulsante riproduzione","videoplayer_play_hover_label":"Riproduci","videoplayer_play_pause_button_label":"Attiva/Disattiva la riproduzione o la pausa","videoplayer_playlist_active_badge":"In riproduzione","videoplayer_progress_bar_label":"Barra progresso","videoplayer_quality_menu_back_button_label":"Indietro","videoplayer_quality_settings_button_label":"Menu impostazioni qualità","videoplayer_quality_settings_menu_header":"Impostazioni","videoplayer_replay_hover_label":"Riproduci di nuovo","videoplayer_share_copy":"Copia","videoplayer_share_link_button_label":"Condividi con {name}","videoplayer_share_menu_back_button_label":"Indietro","videoplayer_share_menu_button_label":"Menu opzioni condivisione","videoplayer_share_menu_header":"Condividi","videoplayer_share_time_copied":"Elemento copiato!","videoplayer_share_time_copy":"Fai iniziare il video condiviso da qui:","videoplayer_share_title":"Condividi","videoplayer_unmute_click":"Clicca in un punto qualsiasi per attivare l\'audio.","videoplayer_unmute_tap":"Tocca un punto qualsiasi per attivare l\'audio.","videoplayer_video_not_found_error":"Elemento video non trovato.","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Attiva/Disattiva l’audio","videoplayer_windowed_hover_label":"In finestra"},"ja-JP":{"videoplayer_airplay_button_label":"画面共有","videoplayer_airplay_menu_header":"ダウンロード","videoplayer_airplay_not_supported_error":"このブラウザはAirPlayに対応していません。","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"キャプション","videoplayer_captions_menu_back_button_label":"戻る","videoplayer_captions_menu_header":"字幕/クローズドキャプション","videoplayer_captions_menu_off_label":"オフ","videoplayer_captions_menu_subtitles_label":"(字幕)","videoplayer_collapsed_menu_header_label":"もっと見る","videoplayer_collapsed_menu_label":"追加設定","videoplayer_downloads_button_label":"ダウンロードオプションメニュー","videoplayer_downloads_menu_back_button_label":"戻る","videoplayer_downloads_menu_header":"ダウンロード","videoplayer_error":"ビデオプレイヤーで不具合が発生しました。","videoplayer_fullscreen_button_label":"フルスクリーンモードにビデオを切り替え","videoplayer_fullscreen_hover_label":"フルスクリーン","videoplayer_pause_button_label":"一時停止ボタン","videoplayer_pause_hover_label":"一時停止","videoplayer_play_button_label":"再生ボタン","videoplayer_play_hover_label":"再生","videoplayer_play_pause_button_label":"再生/一時停止切り替え","videoplayer_playlist_active_badge":"現在プレイ中","videoplayer_progress_bar_label":"進行状況バー","videoplayer_quality_menu_back_button_label":"戻る","videoplayer_quality_settings_button_label":"品質設定メニュー","videoplayer_quality_settings_menu_header":"設定","videoplayer_replay_hover_label":"もう一回見る","videoplayer_share_copy":"コピー","videoplayer_share_link_button_label":"{Name}に共有","videoplayer_share_menu_back_button_label":"戻る","videoplayer_share_menu_button_label":"共有メニュー","videoplayer_share_menu_header":"共有","videoplayer_share_time_copied":"コピー完了！","videoplayer_share_time_copy":"共有するビデオの開始位置：","videoplayer_share_title":"共有","videoplayer_unmute_click":"クリックしてミュートを解除。","videoplayer_unmute_tap":"タップしてミュートを解除。","videoplayer_video_not_found_error":"ビデオ要素が見つかりません。","videoplayer_volume_slider_label":"音量","videoplayer_volume_toggle_button_label":"ミュート/ミュート解除切り替え","videoplayer_windowed_hover_label":"ウィンドウ表示"},"ko-KR":{"videoplayer_airplay_button_label":"화면 공유","videoplayer_airplay_menu_header":"다운로드","videoplayer_airplay_not_supported_error":"이 브라우저에서는 AirPlay가 지원되지 않습니다.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"캡션","videoplayer_captions_menu_back_button_label":"뒤로가기","videoplayer_captions_menu_header":"자막/CC","videoplayer_captions_menu_off_label":"끄기","videoplayer_captions_menu_subtitles_label":"(자막)","videoplayer_collapsed_menu_header_label":"더 보기","videoplayer_collapsed_menu_label":"추가 설정","videoplayer_downloads_button_label":"다운로드 옵션 메뉴","videoplayer_downloads_menu_back_button_label":"뒤로가기","videoplayer_downloads_menu_header":"다운로드","videoplayer_error":"동영상 플레이어에 문제가 발생했습니다.","videoplayer_fullscreen_button_label":"전체 화면으로 전환","videoplayer_fullscreen_hover_label":"전체 화면","videoplayer_pause_button_label":"일시 정지 버튼","videoplayer_pause_hover_label":"일시 정지","videoplayer_play_button_label":"재생 버튼","videoplayer_play_hover_label":"재생","videoplayer_play_pause_button_label":"재생/일시 정지 전환","videoplayer_playlist_active_badge":"재생 중","videoplayer_progress_bar_label":"진행률 표시줄","videoplayer_quality_menu_back_button_label":"뒤로가기","videoplayer_quality_settings_button_label":"품질 설정 메뉴","videoplayer_quality_settings_menu_header":"설정","videoplayer_replay_hover_label":"다시 재생","videoplayer_share_copy":"복사","videoplayer_share_link_button_label":"{Name}에게 공유","videoplayer_share_menu_back_button_label":"뒤로가기","videoplayer_share_menu_button_label":"공유 메뉴","videoplayer_share_menu_header":"공유","videoplayer_share_time_copied":"복사됨!","videoplayer_share_time_copy":"공유된 동영상 시작","videoplayer_share_title":"공유","videoplayer_unmute_click":"음소거를 해제하려면 아무 데나 클릭하십시오.","videoplayer_unmute_tap":"음소거를 해제하려면 아무 데나 탭하십시오.","videoplayer_video_not_found_error":"동영상 요소를 찾을 수 없습니다.","videoplayer_volume_slider_label":"볼륨","videoplayer_volume_toggle_button_label":"음소거/소리 전환","videoplayer_windowed_hover_label":"창모드"},"pl-PL":{"videoplayer_airplay_button_label":"Udostępnianie ekranu","videoplayer_airplay_menu_header":"Pobierz","videoplayer_airplay_not_supported_error":"Ta przeglądarka nie obsługuje funkcji AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"Napisy","videoplayer_captions_menu_back_button_label":"Wstecz","videoplayer_captions_menu_header":"Napisy dla niesłyszących","videoplayer_captions_menu_off_label":"Wyłącz","videoplayer_captions_menu_subtitles_label":"(Napisy)","videoplayer_collapsed_menu_header_label":"Więcej","videoplayer_collapsed_menu_label":"Dodatkowe ustawienia","videoplayer_downloads_button_label":"Menu ustawień pobierania","videoplayer_downloads_menu_back_button_label":"Wstecz","videoplayer_downloads_menu_header":"Pobierz","videoplayer_error":"Wystąpił błąd podczas odtwarzania filmu.","videoplayer_fullscreen_button_label":"Przełącz na tryb pełnoekranowy","videoplayer_fullscreen_hover_label":"Pełny ekran","videoplayer_pause_button_label":"Przycisk pauzy","videoplayer_pause_hover_label":"Pauza","videoplayer_play_button_label":"Przycisk odtwarzania","videoplayer_play_hover_label":"Odtwórz","videoplayer_play_pause_button_label":"Odtwarzaj/pauza","videoplayer_playlist_active_badge":"Teraz odtwarzane","videoplayer_progress_bar_label":"Pasek postępów","videoplayer_quality_menu_back_button_label":"Wstecz","videoplayer_quality_settings_button_label":"Menu ustawień jakości","videoplayer_quality_settings_menu_header":"Ustawienia","videoplayer_replay_hover_label":"Odtwórz ponownie","videoplayer_share_copy":"Kopiuj","videoplayer_share_link_button_label":"Udostępnij: {name}","videoplayer_share_menu_back_button_label":"Wstecz","videoplayer_share_menu_button_label":"Menu udostępniania","videoplayer_share_menu_header":"Udostępnij","videoplayer_share_time_copied":"Skopiowano","videoplayer_share_time_copy":"Rozpocznij udostępnianie od","videoplayer_share_title":"Udostępnij","videoplayer_unmute_click":"Kliknij gdziekolwiek, aby wyłączyć wyciszenie.","videoplayer_unmute_tap":"Dotknij ekranu gdziekolwiek, aby wyłączyć wyciszenie.","videoplayer_video_not_found_error":"Nie znaleziono filmu.","videoplayer_volume_slider_label":"Głośność","videoplayer_volume_toggle_button_label":"Wycisz/wyłącz wyciszenie","videoplayer_windowed_hover_label":"Okno"},"pt-BR":{"videoplayer_airplay_button_label":"Compartilhamento de tela","videoplayer_airplay_menu_header":"Baixar","videoplayer_airplay_not_supported_error":"O AirPlay não é compatível com este navegador.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"Legendas","videoplayer_captions_menu_back_button_label":"Voltar","videoplayer_captions_menu_header":"Legendas / CC","videoplayer_captions_menu_off_label":"Desligado","videoplayer_captions_menu_subtitles_label":"(Legendas)","videoplayer_collapsed_menu_header_label":"Mais","videoplayer_collapsed_menu_label":"Configurações adicionais","videoplayer_downloads_button_label":"Menu de opções de download","videoplayer_downloads_menu_back_button_label":"Voltar","videoplayer_downloads_menu_header":"Baixar","videoplayer_error":"Algo deu errado com o reprodutor de vídeo.","videoplayer_fullscreen_button_label":"Alternar para modo tela cheia","videoplayer_fullscreen_hover_label":"Tela cheia","videoplayer_pause_button_label":"Botão Pausar","videoplayer_pause_hover_label":"Pausar","videoplayer_play_button_label":"Botão Tocar","videoplayer_play_hover_label":"Tocar","videoplayer_play_pause_button_label":"Reproduzir/pausar","videoplayer_playlist_active_badge":"Reproduzindo","videoplayer_progress_bar_label":"Barra de progresso","videoplayer_quality_menu_back_button_label":"Voltar","videoplayer_quality_settings_button_label":"Menu de configurações de qualidade","videoplayer_quality_settings_menu_header":"Configurações","videoplayer_replay_hover_label":"Replay","videoplayer_share_copy":"Copiar","videoplayer_share_link_button_label":"Compartilhar com {name}","videoplayer_share_menu_back_button_label":"Voltar","videoplayer_share_menu_button_label":"Menu de compartilhamento","videoplayer_share_menu_header":"Compartilhar","videoplayer_share_time_copied":"Copiado!","videoplayer_share_time_copy":"Iniciar vídeo compartilhado em","videoplayer_share_title":"Compartilhar","videoplayer_unmute_click":"Clique em qualquer lugar para ativar o som.","videoplayer_unmute_tap":"Toque em qualquer lugar para ativar o som.","videoplayer_video_not_found_error":"Vídeo não encontrado.","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Ativar/desativar som","videoplayer_windowed_hover_label":"Modo janela"},"ru-RU":{"videoplayer_airplay_button_label":"Демонстрация экрана","videoplayer_airplay_menu_header":"Загрузить","videoplayer_airplay_not_supported_error":"В данном браузере не поддерживается AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"Меню субтитров","videoplayer_captions_menu_back_button_label":"Назад","videoplayer_captions_menu_header":"Субтитры","videoplayer_captions_menu_off_label":"Откл.","videoplayer_captions_menu_subtitles_label":"(Субтитры)","videoplayer_collapsed_menu_header_label":"Дополнительно","videoplayer_collapsed_menu_label":"Дополнительные настройки","videoplayer_downloads_button_label":"Меню загрузки","videoplayer_downloads_menu_back_button_label":"Назад","videoplayer_downloads_menu_header":"Загрузить","videoplayer_error":"Произошла ошибка с проигрывателем видео.","videoplayer_fullscreen_button_label":"Переключение полноэкранного режима видео","videoplayer_fullscreen_hover_label":"Полноэкранный режим","videoplayer_pause_button_label":"Кнопка паузы","videoplayer_pause_hover_label":"Пауза","videoplayer_play_button_label":"Кнопка воспроизведения","videoplayer_play_hover_label":"Воспроизведение","videoplayer_play_pause_button_label":"Пауза/воспроизведение","videoplayer_playlist_active_badge":"Воспроизводится","videoplayer_progress_bar_label":"Полоса перемотки","videoplayer_quality_menu_back_button_label":"Назад","videoplayer_quality_settings_button_label":"Меню настроек качества","videoplayer_quality_settings_menu_header":"Настройки","videoplayer_replay_hover_label":"Повтор","videoplayer_share_copy":"Копировать","videoplayer_share_link_button_label":"Поделиться с {name}","videoplayer_share_menu_back_button_label":"Назад","videoplayer_share_menu_button_label":"Меню «Поделиться»","videoplayer_share_menu_header":"Поделиться","videoplayer_share_time_copied":"Скопировано!","videoplayer_share_time_copy":"Воспроизводить видео с","videoplayer_share_title":"Поделиться","videoplayer_unmute_click":"Щелкните куда-либо, чтобы включить звук.","videoplayer_unmute_tap":"Нажмите куда-либо, чтобы включить звук.","videoplayer_video_not_found_error":"Видеоэлемент не найден.","videoplayer_volume_slider_label":"Громкость","videoplayer_volume_toggle_button_label":"Выключить/включить звук","videoplayer_windowed_hover_label":"Оконный режим"},"zh-CN":{"videoplayer_airplay_button_label":"屏幕共享","videoplayer_airplay_menu_header":"下载","videoplayer_airplay_not_supported_error":"此浏览器不支持 AirPlay。","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"原文字幕","videoplayer_captions_menu_back_button_label":"返回","videoplayer_captions_menu_header":"字幕 / 隐藏字幕","videoplayer_captions_menu_off_label":"关闭","videoplayer_captions_menu_subtitles_label":"（字幕）","videoplayer_collapsed_menu_header_label":"更多","videoplayer_collapsed_menu_label":"其他设置","videoplayer_downloads_button_label":"下载选项菜单","videoplayer_downloads_menu_back_button_label":"返回","videoplayer_downloads_menu_header":"下载","videoplayer_error":"视频播放器出现问题。","videoplayer_fullscreen_button_label":"将视频切换至全屏模式","videoplayer_fullscreen_hover_label":"全屏","videoplayer_pause_button_label":"暂停键","videoplayer_pause_hover_label":"暂停","videoplayer_play_button_label":"播放键","videoplayer_play_hover_label":"播放","videoplayer_play_pause_button_label":"播放/暂停切换","videoplayer_playlist_active_badge":"正在播放","videoplayer_progress_bar_label":"进度条","videoplayer_quality_menu_back_button_label":"返回","videoplayer_quality_settings_button_label":"画质设置菜单","videoplayer_quality_settings_menu_header":"设置","videoplayer_replay_hover_label":"重新播放","videoplayer_share_copy":"复制","videoplayer_share_link_button_label":"分享至 {name}","videoplayer_share_menu_back_button_label":"返回","videoplayer_share_menu_button_label":"分享菜单","videoplayer_share_menu_header":"分享","videoplayer_share_time_copied":"已复制！","videoplayer_share_time_copy":"视频分享开始时间：","videoplayer_share_title":"分享","videoplayer_unmute_click":"点击任意地方以取消静音。","videoplayer_unmute_tap":"点按任意地方以取消静音。","videoplayer_video_not_found_error":"未找到视频元素。","videoplayer_volume_slider_label":"音量","videoplayer_volume_toggle_button_label":"静音/取消静音切换","videoplayer_windowed_hover_label":"窗口化"},"zh-TW":{"videoplayer_airplay_button_label":"分享畫面","videoplayer_airplay_menu_header":"下載","videoplayer_airplay_not_supported_error":"此瀏覽器不支援 AirPlay。","videoplayer_airplay_option_label":"AirPlay","videoplayer_captions_button_label":"字幕","videoplayer_captions_menu_back_button_label":"返回","videoplayer_captions_menu_header":"字幕 / CC","videoplayer_captions_menu_off_label":"關閉","videoplayer_captions_menu_subtitles_label":"（字幕）","videoplayer_collapsed_menu_header_label":"更多","videoplayer_collapsed_menu_label":"額外設定","videoplayer_downloads_button_label":"下載選項選單","videoplayer_downloads_menu_back_button_label":"返回","videoplayer_downloads_menu_header":"下載","videoplayer_error":"影片播放器發生問題。","videoplayer_fullscreen_button_label":"切換影片至全螢幕模式","videoplayer_fullscreen_hover_label":"全螢幕","videoplayer_pause_button_label":"暫停按鍵","videoplayer_pause_hover_label":"暫停","videoplayer_play_button_label":"播放按鍵","videoplayer_play_hover_label":"播放","videoplayer_play_pause_button_label":"切換播放/暫停","videoplayer_playlist_active_badge":"正在播放","videoplayer_progress_bar_label":"進度條","videoplayer_quality_menu_back_button_label":"返回","videoplayer_quality_settings_button_label":"畫質設定選單","videoplayer_quality_settings_menu_header":"設定","videoplayer_replay_hover_label":"重播","videoplayer_share_copy":"複製","videoplayer_share_link_button_label":"分享至：{name}","videoplayer_share_menu_back_button_label":"返回","videoplayer_share_menu_button_label":"分享選單","videoplayer_share_menu_header":"分享","videoplayer_share_time_copied":"已複製！","videoplayer_share_time_copy":"分享影片開始時間：","videoplayer_share_title":"分享","videoplayer_unmute_click":"點擊任何地方取消靜音。","videoplayer_unmute_tap":"點按任何地方取消靜音。","videoplayer_video_not_found_error":"找不到影片元素。","videoplayer_volume_slider_label":"音量","videoplayer_volume_toggle_button_label":"切換靜音/取消靜音","videoplayer_windowed_hover_label":"視窗顯示"}}')
    }
  }
]);