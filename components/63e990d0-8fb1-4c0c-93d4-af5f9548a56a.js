! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "63e990d0-8fb1-4c0c-93d4-af5f9548a56a", e._sentryDebugIdIdentifier = "sentry-dbid-63e990d0-8fb1-4c0c-93d4-af5f9548a56a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/components",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [360], {
    1996: (e, a, t) => {
      var n = t(8200),
        o = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function r(e, a, t) {
        var n, s = {},
          r = null,
          c = null;
        for (n in void 0 !== t && (r = "" + t), void 0 !== a.key && (r = "" + a.key), void 0 !== a.ref && (c = a.ref), a) l.call(a, n) && !i.hasOwnProperty(n) && (s[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === s[n] && (s[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: r,
          ref: c,
          props: s,
          _owner: d.current
        }
      }
      a.Fragment = s, a.jsx = r, a.jsxs = r
    },
    3480: (e, a, t) => {
      e.exports = t(1996)
    },
    1360: (e, a, t) => {
      t.r(a), t.d(a, {
        ModalProvider: () => m,
        useModal: () => f
      });
      var n = t(8200),
        o = t(244),
        s = t(1740),
        l = t(2836),
        d = t(3557);
      var i = t(3480);
      const r = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: r,
            height: c,
            onClose: f,
            rect: m = {
              left: 0,
              top: 0
            },
            contentStyle: u = {},
            contentClassName: b = "",
            width: p,
            fadeIn: g = !0,
            cardIds: y,
            theme: v,
            title: _,
            gtm: h = {},
            aspectRatio: k = "default",
            cardDimensions: w
          } = a, {
            left: x,
            top: E
          } = m, [N, j] = (0, n.useState)(null), {
            track: S
          } = (0, l.useGtmTrack)(), C = null !== y && (y?.length || 0) > 1 && ("flag_bg" === v || "fob" === w?.size), [I, M] = (0, d.useSearchParams)(), [R, L] = (0, n.useState)(!1), [O, P] = (0, n.useState)(!1), D = () => {
            const e = N - 1;
            j(e), P(e <= 0), L(e >= (y?.length || 0) - 1), S({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: N
            })
          }, T = () => {
            const e = N + 1;
            j(e), P(e <= 0), L(e >= (y?.length || 0) - 1), S({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: N
            })
          };
          (0, n.useEffect)((() => {
            null !== N && null !== y && N < y?.length && N > -1 && M({
              info: y[N]
            })
          }), [N, y]), (0, n.useEffect)((() => {
            if (null !== y && null === N && y?.length > 0) {
              const e = I.get("info");
              y?.forEach(((a, t) => {
                a === e && (j(t), P(t <= 0), L(t >= (y?.length || 0) - 1))
              }))
            }
          }), [y, N]);
          const [A] = (0, n.useState)({
            y: E,
            x,
            top: 0,
            left: 0,
            width: p,
            height: c,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: C ? "0" : null
          }), F = {
            opacity: 1
          }, U = (0, n.useRef)(null), Y = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, $ = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [z] = (0, n.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: C ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : null,
            transition: {
              x: Y,
              y: Y,
              top: Y,
              left: Y,
              width: Y,
              height: Y,
              border: Y,
              background: {
                delay: .3
              }
            }
          }), [B, G] = (0, n.useState)({
            initial: A,
            shown: z
          });
          (0, n.useEffect)((() => {
            G({
              initial: A,
              shown: z
            })
          }), [A, z]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof f && 27 === e.keyCode && (f(), S({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: _ ?? void 0,
                ...h
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const H = () => {
              "function" == typeof f && (f(), S({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: _ ?? void 0,
                ...h
              }))
            },
            W = g ? 0 : 1,
            q = (0, i.jsx)(o.motion.button, {
              className: "rockstargames-componentscdbb5ba9912cec6e57ad413e8649903a",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: $,
              onClick: () => {
                H()
              }
            });
          return (0, n.useMemo)((() => (0, i.jsxs)("div", {
            className: "rockstargames-componentsd1eb1ee15b16b69427f2206ad52db2e0",
            "data-show-nav": C,
            "data-aspect-ratio": k,
            children: [(0, i.jsx)(o.motion.div, {
              className: "rockstargames-componentsfadbe8613b3b01c5dfe67211c2510fd6",
              initial: {
                opacity: 0
              },
              animate: F,
              transition: Y,
              onClick: () => H()
            }), C && (0, i.jsxs)("div", {
              className: "rockstargames-componentsc7e2e5fab184469470c19ead4d58e9f0",
              children: [(0, i.jsxs)(o.motion.div, {
                className: "rockstargames-componentsa5baaf5ee72808c76966af66b22de9c2",
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                transition: $,
                children: [(0, i.jsx)("button", {
                  type: "button",
                  "aria-label": "Previous",
                  onClick: D,
                  disabled: O
                }), (0, i.jsxs)("div", {
                  className: "rockstargames-componentsceeda042a320c28631e133edac1eca44",
                  children: [" ", N + 1, (0, i.jsx)("div", {
                    className: "rockstargames-componentsd6503a366c2358692d800bd8af52b30e"
                  }), y?.length, " "]
                }), (0, i.jsx)("button", {
                  type: "button",
                  "aria-label": "Next",
                  onClick: T,
                  disabled: R
                })]
              }), q]
            }), (0, i.jsx)(o.motion.div, {
              className: "rockstargames-componentsa8fb761c17b0f1dddba26fed96c9e3fc",
              ref: U,
              initial: "initial",
              animate: "shown",
              variants: B,
              transition: Y,
              style: u,
              children: (0, i.jsxs)(o.motion.div, {
                className: (0, s.classList)("rockstargames-componentsd7a436a855094ae8e1d4ad77ea75c91a", r),
                children: [!C && q, (0, i.jsx)(o.motion.div, {
                  className: (0, s.classList)("rockstargames-componentseec04b856e27e31d149554e1e59c23a0", b),
                  initial: {
                    opacity: W
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: $,
                  children: t
                }), (0, i.jsx)("button", {
                  className: "rockstargames-componentsf30af84c4539ec7a3c95e7e36068bcd3",
                  type: "button",
                  "aria-label": "End of modal"
                })]
              })
            })]
          })), [t, N, u])
        },
        c = (0, n.createContext)(null),
        f = () => (0, n.useContext)(c),
        m = e => {
          let {
            children: a
          } = e;
          const [t, o] = (0, n.useState)(null), s = (0, n.useMemo)((() => t?.content ? (0, i.jsx)(r, {
            modal: t
          }) : null), [t]);
          return (0, i.jsx)(c.Provider, {
            value: [s, o],
            children: a
          })
        }
    }
  }
]);