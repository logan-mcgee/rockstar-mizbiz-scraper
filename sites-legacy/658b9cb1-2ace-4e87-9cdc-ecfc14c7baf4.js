! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "658b9cb1-2ace-4e87-9cdc-ecfc14c7baf4", e._sentryDebugIdIdentifier = "sentry-dbid-658b9cb1-2ace-4e87-9cdc-ecfc14c7baf4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [3666], {
    61651: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(71403),
        i = t(40207);
      const r = (0, s.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: r,
          children: n,
          requireUser: c
        } = e, {
          track: o
        } = (0, i.useGtmTrack)(c), [l, d] = (0, s.useState)(a?.current);
        return (0, s.useEffect)((() => {
          a?.current && d(a.current)
        }), [a]), ((e, a, t) => {
          const [i, r] = (0, s.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: n,
            scrollY: c
          } = i;
          (0, s.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, s.useEffect)((() => {
            r({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const o = (0, s.useCallback)((() => {
            const e = document.documentElement,
              s = document.body,
              c = t?.scrollTop || e.scrollTop || s.scrollTop,
              l = t?.scrollHeight || e.scrollHeight || s.scrollHeight,
              {
                clientHeight: d
              } = e,
              m = c / (l - d) * 100;
            if (n) {
              const e = Math.min(...n, l);
              if (m >= e) {
                const s = n.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", o), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: s
                }), r({
                  scrollY: e,
                  scrollDepths: s
                })
              }
            } else r({
              ...i,
              scrollY: m
            })
          }), [n, t, a]);
          (0, s.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
          }), [o])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          o({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof r && r(a)
        }), l), n
      }));
      r.displayName = "ScrollTracker";
      const n = r
    },
    58209: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(71403);
      var i = t(46632);
      const r = e => {
        let {
          children: a,
          style: t,
          theme: r
        } = e;
        const [n, c] = (0, s.useState)(r);
        return (0, s.useEffect)((() => {
          r && c(r)
        }), [r]), (0, i.jsx)("div", {
          className: "rockstargames-sites-legacya3cc68ab0d512c3d8835ee9abb7a51c4",
          style: t,
          "data-theme": n,
          children: a
        })
      }
    },
    60207: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(55140),
        i = t(73379);
      const r = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, s.NameField)(e), (0, s.translatedField)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, s.StyleField)(e)],
          defaultItem: () => (0, s.defaultItemUnique)({
            content: ""
          }),
          itemProps: e => (0, s.itemPropsWithKey)(e, {
            label: (0, i.stripHTML)(`${e?.name??e?.[s.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    93665: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => h,
        h: () => p
      });
      var s = t(71403),
        i = t(42756),
        r = t(64205),
        n = t(80791),
        c = t(74401),
        o = t(40207),
        l = t(89779);
      var d = t(46632);
      const m = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: i,
            height: m,
            onClose: g,
            rect: u = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: p = "",
            width: h,
            fadeIn: b = !0,
            cardIds: k,
            activeId: v,
            theme: _,
            title: y,
            gtm: x = {},
            aspectRatio: N = "default",
            cardDimensions: j
          } = a, {
            left: w,
            top: S
          } = u, C = k?.indexOf(v), [T, I] = (0, s.useState)(k?.length || 0), {
            track: L
          } = (0, o.useGtmTrack)(), M = null !== k && (k?.length || 0) > 1 && ("flag_bg" === _ || "fob" === j?.size), [E, P] = (0, l.useSearchParams)(), [z, B] = (0, s.useState)(!1), [O, A] = (0, s.useState)(!1), [D, V] = (0, s.useState)(), $ = e => {
            "number" == typeof e && k && e < k.length && e > -1 && (console.log("navigating to: ", e), P({
              info: k[e].toString()
            }))
          }, F = () => {
            const e = C > -1 ? C - 1 : 0;
            $(e), L({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: y,
              position: C
            })
          }, R = () => {
            const e = C > -1 ? C + 1 : 0;
            $(e), L({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: y,
              position: C
            })
          };
          (0, s.useEffect)((() => {
            I(k?.length || 0)
          }), [k?.length]), (0, s.useEffect)((() => {
            null !== C && null !== k && $(C)
          }), [C, k]), (0, s.useEffect)((() => {
            const e = k?.findIndex((e => e === v));
            "number" == typeof e && (A(e <= 0), B(e >= T - 1))
          }), [k, v]);
          const [G] = (0, s.useState)({
            y: S,
            x: w,
            top: 0,
            left: 0,
            width: h,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: M ? "0" : ""
          }), H = {
            opacity: 1
          }, U = (0, s.useRef)(null), W = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, q = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [X] = (0, s.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: M ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: W,
              y: W,
              top: W,
              left: W,
              width: W,
              height: W,
              border: W,
              background: {
                delay: .3
              }
            }
          }), [Y, Q] = (0, s.useState)({
            initial: G,
            shown: X
          });
          (0, s.useEffect)((() => {
            Q({
              initial: G,
              shown: X
            })
          }), [G, X]), (0, s.useEffect)((() => {
            const e = e => {
              "function" == typeof g && "Escape" === e.key && (g(), L({
                event: "modal_close",
                element_placement: y,
                ...x
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const K = () => {
              "function" == typeof g && (g(), L({
                event: "modal_close",
                element_placement: y,
                ...x
              }))
            },
            Z = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const i = Z(s, a - 1);
                if (i) return i
              }
              return null
            },
            J = e => {
              if (ae?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return D?.queried ? a = D.element : (a = Z(e, 2), V({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = b ? 0 : 1,
            ae = (0, s.useRef)(null),
            te = (0, d.jsx)(n.motion.button, {
              className: "rockstargames-sites-legacyb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: q,
              onClick: () => {
                K()
              },
              onKeyDown: J,
              onKeyUp: J
            });
          let se = null;
          return se = r.Ay, (0, s.useMemo)((() => (0, d.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": M,
            "data-aspect-ratio": N,
            children: (0, d.jsx)(se, {
              children: (0, d.jsxs)("div", {
                children: [(0, d.jsx)(n.motion.div, {
                  className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                  initial: {
                    opacity: 0
                  },
                  animate: H,
                  transition: W,
                  onClick: () => K()
                }), M && (0, d.jsxs)("div", {
                  className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                  children: [(0, d.jsxs)(n.motion.div, {
                    className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: q,
                    children: [(0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: F,
                      disabled: O,
                      onKeyDown: J,
                      onKeyUp: J
                    }), (0, d.jsxs)("div", {
                      className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                      "data-theme": _,
                      children: [" ", C + 1, (0, d.jsx)("div", {
                        className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                      }), k?.length, " "]
                    }), (0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: R,
                      disabled: z,
                      onKeyDown: J,
                      onKeyUp: J,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, d.jsx)(n.motion.div, {
                  className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                  ref: U,
                  initial: "initial",
                  animate: "shown",
                  variants: Y,
                  transition: W,
                  style: f,
                  children: (0, d.jsxs)(n.motion.div, {
                    className: (0, c.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", i),
                    children: [!M && te, (0, d.jsx)(n.motion.div, {
                      className: (0, c.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", p),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: q,
                      ref: ae,
                      children: t
                    }), (0, d.jsx)("button", {
                      className: "rockstargames-sites-legacyf1ecf74036b2b7fdfda3613619af40cf",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [t, C, f])
        },
        g = "modal-context",
        u = [null, () => null],
        f = window?.[g] ?? (window[g] = (0, s.createContext)(u)),
        p = () => (0, s.useContext)(f),
        h = e => {
          let {
            children: a
          } = e;
          const [t, r] = (0, s.useState)(u), {
            setBodyIsLocked: n
          } = (0, i.useBodyScrollable)("ModalProvider"), c = (0, s.useMemo)((() => t?.content ? (0, d.jsx)(m, {
            modal: t
          }) : null), [t]), o = () => n(!1);
          return (0, s.useEffect)((() => (window.addEventListener("popstate", o), () => {
            window.removeEventListener("popstate", o)
          })), []), (0, s.useEffect)((() => {
            n(!!c)
          }), [c]), (0, d.jsx)(f.Provider, {
            value: [c, r],
            children: a
          })
        }
    },
    53149: (e, a, t) => {
      "use strict";
      t.d(a, {
        ys: () => jt,
        Ay: () => ni,
        os: () => ni
      });
      let s, i, r, n, c, o, l, d, m, g, u, f = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        p = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        h = 1e8,
        b = 1e-8,
        k = 2 * Math.PI,
        v = k / 4,
        _ = 0,
        y = Math.sqrt,
        x = Math.cos,
        N = Math.sin,
        j = e => "string" == typeof e,
        w = e => "function" == typeof e,
        S = e => "number" == typeof e,
        C = e => void 0 === e,
        T = e => "object" == typeof e,
        I = e => !1 !== e,
        L = () => "undefined" != typeof window,
        M = e => w(e) || j(e),
        E = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        P = Array.isArray,
        z = /(?:-?\.?\d|\.)+/gi,
        B = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        O = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        A = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        D = /[+-]=-?[.\d]+/,
        V = /[^,'"\[\]\s]+/gi,
        $ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        F = {},
        R = {},
        G = e => (R = ke(e, F)) && yt,
        H = (e, a) => console.warn("Invalid property", e, "set to", a, "Missing plugin? gsap.registerPlugin()"),
        U = (e, a) => !a && console.warn(e),
        W = (e, a) => e && (F[e] = a) && R && (R[e] = a) || F,
        q = () => 0,
        X = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        Y = {
          suppressEvents: !0,
          kill: !1
        },
        Q = {
          suppressEvents: !0
        },
        K = {},
        Z = [],
        J = {},
        ee = {},
        ae = {},
        te = 30,
        se = [],
        ie = "",
        re = e => {
          let a, t, s = e[0];
          if (T(s) || w(s) || (e = [e]), !(a = (s._gsap || {}).harness)) {
            for (t = se.length; t-- && !se[t].targetTest(s););
            a = se[t]
          }
          for (t = e.length; t--;) e[t] && (e[t]._gsap || (e[t]._gsap = new Ba(e[t], a))) || e.splice(t, 1);
          return e
        },
        ne = e => e._gsap || re(Ye(e))[0]._gsap,
        ce = (e, a, t) => (t = e[a]) && w(t) ? e[a]() : C(t) && e.getAttribute && e.getAttribute(a) || t,
        oe = (e, a) => (e = e.split(",")).forEach(a) || e,
        le = e => Math.round(1e5 * e) / 1e5 || 0,
        de = e => Math.round(1e7 * e) / 1e7 || 0,
        me = (e, a) => {
          let t = a.charAt(0),
            s = parseFloat(a.substr(2));
          return e = parseFloat(e), "+" === t ? e + s : "-" === t ? e - s : "*" === t ? e * s : e / s
        },
        ge = (e, a) => {
          let t = a.length,
            s = 0;
          for (; e.indexOf(a[s]) < 0 && ++s < t;);
          return s < t
        },
        ue = () => {
          let e, a, t = Z.length,
            s = Z.slice(0);
          for (J = {}, Z.length = 0, e = 0; e < t; e++) a = s[e], a && a._lazy && (a.render(a._lazy[0], a._lazy[1], !0)._lazy = 0)
        },
        fe = (e, a, t, s) => {
          Z.length && !i && ue(), e.render(a, t, s || i && a < 0 && (e._initted || e._startAt)), Z.length && !i && ue()
        },
        pe = e => {
          let a = parseFloat(e);
          return (a || 0 === a) && (e + "").match(V).length < 2 ? a : j(e) ? e.trim() : e
        },
        he = e => e,
        be = (e, a) => {
          for (let t in a) t in e || (e[t] = a[t]);
          return e
        },
        ke = (e, a) => {
          for (let t in a) e[t] = a[t];
          return e
        },
        ve = (e, a) => {
          for (let t in a) "__proto__" !== t && "constructor" !== t && "prototype" !== t && (e[t] = T(a[t]) ? ve(e[t] || (e[t] = {}), a[t]) : a[t]);
          return e
        },
        _e = (e, a) => {
          let t, s = {};
          for (t in e) t in a || (s[t] = e[t]);
          return s
        },
        ye = e => {
          let a = e.parent || n,
            t = e.keyframes ? (s = P(e.keyframes), (e, a) => {
              for (let t in a) t in e || "duration" === t && s || "ease" === t || (e[t] = a[t])
            }) : be;
          var s;
          if (I(e.inherit))
            for (; a;) t(e, a.vars.defaults), a = a.parent || a._dp;
          return e
        },
        xe = function(e, a) {
          let t, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            r = arguments.length > 4 ? arguments[4] : void 0,
            n = e[i];
          if (r)
            for (t = a[r]; n && n[r] > t;) n = n._prev;
          return n ? (a._next = n._next, n._next = a) : (a._next = e[s], e[s] = a), a._next ? a._next._prev = a : e[i] = a, a._prev = n, a.parent = a._dp = e, a
        },
        Ne = function(e, a) {
          let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            i = a._prev,
            r = a._next;
          i ? i._next = r : e[t] === a && (e[t] = r), r ? r._prev = i : e[s] === a && (e[s] = i), a._next = a._prev = a.parent = null
        },
        je = (e, a) => {
          e.parent && (!a || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        we = (e, a) => {
          if (e && (!a || a._end > e._dur || a._start < 0)) {
            let a = e;
            for (; a;) a._dirty = 1, a = a.parent
          }
          return e
        },
        Se = (e, a, t, s) => e._startAt && (i ? e._startAt.revert(Y) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(a, !0, s)),
        Ce = e => !e || e._ts && Ce(e.parent),
        Te = e => e._repeat ? Ie(e._tTime, e = e.duration() + e._rDelay) * e : 0,
        Ie = (e, a) => {
          let t = Math.floor(e /= a);
          return e && t === e ? t - 1 : t
        },
        Le = (e, a) => (e - a._start) * a._ts + (a._ts >= 0 ? 0 : a._dirty ? a.totalDuration() : a._tDur),
        Me = e => e._end = de(e._start + (e._tDur / Math.abs(e._ts || e._rts || b) || 0)),
        Ee = (e, a) => {
          let t = e._dp;
          return t && t.smoothChildTiming && e._ts && (e._start = de(t._time - (e._ts > 0 ? a / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - a) / -e._ts)), Me(e), t._dirty || we(t, e)), e
        },
        Pe = (e, a) => {
          let t;
          if ((a._time || !a._dur && a._initted || a._start < e._time && (a._dur || !a.add)) && (t = Le(e.rawTime(), a), (!a._dur || Ue(0, a.totalDuration(), t) - a._tTime > b) && a.render(t, !0)), we(e, a)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (t = e; t._dp;) t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
            e._zTime = -1e-8
          }
        },
        ze = (e, a, t, s) => (a.parent && je(a), a._start = de((S(t) ? t : t || e !== n ? Re(e, t, a) : e._time) + a._delay), a._end = de(a._start + (a.totalDuration() / Math.abs(a.timeScale()) || 0)), xe(e, a, "_first", "_last", e._sort ? "_start" : 0), De(a) || (e._recent = a), s || Pe(e, a), e._ts < 0 && Ee(e, e._tTime), e),
        Be = (e, a) => (F.ScrollTrigger || H("scrollTrigger", a)) && F.ScrollTrigger.create(a, e),
        Oe = (e, a, t, s, r) => (Ga(e, a, r), e._initted ? !t && e._pt && !i && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && m !== xa.frame ? (Z.push(e), e._lazy = [r, s], 1) : void 0 : 1),
        Ae = e => {
          let {
            parent: a
          } = e;
          return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || Ae(a))
        },
        De = e => {
          let {
            data: a
          } = e;
          return "isFromStart" === a || "isStart" === a
        },
        Ve = (e, a, t, s) => {
          let i = e._repeat,
            r = de(a) || 0,
            n = e._tTime / e._tDur;
          return n && !s && (e._time *= r / e._dur), e._dur = r, e._tDur = i ? i < 0 ? 1e10 : de(r * (i + 1) + e._rDelay * i) : r, n > 0 && !s && Ee(e, e._tTime = e._tDur * n), e.parent && Me(e), t || we(e.parent, e), e
        },
        $e = e => e instanceof Aa ? we(e) : Ve(e, e._dur),
        Fe = {
          _start: 0,
          endTime: q,
          totalDuration: q
        },
        Re = (e, a, t) => {
          let s, i, r, n = e.labels,
            c = e._recent || Fe,
            o = e.duration() >= h ? c.endTime(!1) : e._dur;
          return j(a) && (isNaN(a) || a in n) ? (i = a.charAt(0), r = "%" === a.substr(-1), s = a.indexOf("="), "<" === i || ">" === i ? (s >= 0 && (a = a.replace(/=/, "")), ("<" === i ? c._start : c.endTime(c._repeat >= 0)) + (parseFloat(a.substr(1)) || 0) * (r ? (s < 0 ? c : t).totalDuration() / 100 : 1)) : s < 0 ? (a in n || (n[a] = o), n[a]) : (i = parseFloat(a.charAt(s - 1) + a.substr(s + 1)), r && t && (i = i / 100 * (P(t) ? t[0] : t).totalDuration()), s > 1 ? Re(e, a.substr(0, s - 1), t) + i : o + i)) : null == a ? o : +a
        },
        Ge = (e, a, t) => {
          let s, i, r = S(a[1]),
            n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            c = a[n];
          if (r && (c.duration = a[1]), c.parent = t, e) {
            for (s = c, i = t; i && !("immediateRender" in s);) s = i.vars.defaults || {}, i = I(i.vars.inherit) && i.parent;
            c.immediateRender = I(s.immediateRender), e < 2 ? c.runBackwards = 1 : c.startAt = a[n - 1]
          }
          return new Xa(a[0], c, a[n + 1])
        },
        He = (e, a) => e || 0 === e ? a(e) : a,
        Ue = (e, a, t) => t < e ? e : t > a ? a : t,
        We = (e, a) => j(e) && (a = $.exec(e)) ? a[1] : "",
        qe = [].slice,
        Xe = (e, a) => e && T(e) && "length" in e && (!a && !e.length || e.length - 1 in e && T(e[0])) && !e.nodeType && e !== c,
        Ye = (e, a, t) => r && !a && r.selector ? r.selector(e) : !j(e) || t || !o && Na() ? P(e) ? function(e, a) {
          let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return e.forEach((e => j(e) && !a || Xe(e, 1) ? t.push(...Ye(e)) : t.push(e))) || t
        }(e, t) : Xe(e) ? qe.call(e, 0) : e ? [e] : [] : qe.call((a || l).querySelectorAll(e), 0),
        Qe = e => (e = Ye(e)[0] || U("Invalid scope") || {}, a => {
          let t = e.current || e.nativeElement || e;
          return Ye(a, t.querySelectorAll ? t : t === e ? U("Invalid scope") || l.createElement("div") : e)
        }),
        Ke = e => e.sort((() => .5 - Math.random())),
        Ze = e => {
          if (w(e)) return e;
          let a = T(e) ? e : {
              each: e
            },
            t = La(a.ease),
            s = a.from || 0,
            i = parseFloat(a.base) || 0,
            r = {},
            n = s > 0 && s < 1,
            c = isNaN(s) || n,
            o = a.axis,
            l = s,
            d = s;
          return j(s) ? l = d = {
            center: .5,
            edges: .5,
            end: 1
          } [s] || 0 : !n && c && (l = s[0], d = s[1]), (e, n, m) => {
            let g, u, f, p, b, k, v, _, x, N = (m || a).length,
              j = r[N];
            if (!j) {
              if (x = "auto" === a.grid ? 0 : (a.grid || [1, h])[1], !x) {
                for (v = -h; v < (v = m[x++].getBoundingClientRect().left) && x < N;);
                x--
              }
              for (j = r[N] = [], g = c ? Math.min(x, N) * l - .5 : s % x, u = x === h ? 0 : c ? N * d / x - .5 : s / x | 0, v = 0, _ = h, k = 0; k < N; k++) f = k % x - g, p = u - (k / x | 0), j[k] = b = o ? Math.abs("y" === o ? p : f) : y(f * f + p * p), b > v && (v = b), b < _ && (_ = b);
              "random" === s && Ke(j), j.max = v - _, j.min = _, j.v = N = (parseFloat(a.amount) || parseFloat(a.each) * (x > N ? N - 1 : o ? "y" === o ? N / x : x : Math.max(x, N / x)) || 0) * ("edges" === s ? -1 : 1), j.b = N < 0 ? i - N : i, j.u = We(a.amount || a.each) || 0, t = t && N < 0 ? Ta(t) : t
            }
            return N = (j[e] - j.min) / j.max || 0, de(j.b + (t ? t(N) : N) * j.v) + j.u
          }
        },
        Je = e => {
          let a = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return t => {
            let s = de(Math.round(parseFloat(t) / e) * e * a);
            return (s - s % 1) / a + (S(t) ? 0 : We(t))
          }
        },
        ea = (e, a) => {
          let t, s, i = P(e);
          return !i && T(e) && (t = i = e.radius || h, e.values ? (e = Ye(e.values), (s = !S(e[0])) && (t *= t)) : e = Je(e.increment)), He(a, i ? w(e) ? a => (s = e(a), Math.abs(s - a) <= t ? s : a) : a => {
            let i, r, n = parseFloat(s ? a.x : a),
              c = parseFloat(s ? a.y : 0),
              o = h,
              l = 0,
              d = e.length;
            for (; d--;) s ? (i = e[d].x - n, r = e[d].y - c, i = i * i + r * r) : i = Math.abs(e[d] - n), i < o && (o = i, l = d);
            return l = !t || o <= t ? e[l] : a, s || l === a || S(a) ? l : l + We(a)
          } : Je(e))
        },
        aa = (e, a, t, s) => He(P(e) ? !a : !0 === t ? !!(t = 0) : !s, (() => P(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (s = t < 1 ? 10 ** ((t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (a - e + .99 * t)) / t) * t * s) / s)),
        ta = (e, a, t) => He(t, (t => e[~~a(t)])),
        sa = function(e, a, t) {
          let s = a - e;
          return P(e) ? ta(e, sa(0, e.length), a) : He(t, (a => (s + (a - e) % s) % s + e))
        },
        ia = (e, a, t) => {
          let s = a - e,
            i = 2 * s;
          return P(e) ? ta(e, ia(0, e.length - 1), a) : He(t, (a => e + ((a = (i + (a - e) % i) % i || 0) > s ? i - a : a)))
        },
        ra = e => {
          let a, t, s, i, r = 0,
            n = "";
          for (; ~(a = e.indexOf("random(", r));) s = e.indexOf(")", a), i = "[" === e.charAt(a + 7), t = e.substr(a + 7, s - a - 7).match(i ? V : z), n += e.substr(r, a - r) + aa(i ? t : +t[0], i ? 0 : +t[1], +t[2] || 1e-5), r = s + 1;
          return n + e.substr(r, e.length - r)
        },
        na = (e, a, t, s, i) => {
          let r = a - e,
            n = s - t;
          return He(i, (a => t + ((a - e) / r * n || 0)))
        },
        ca = (e, a, t, s) => {
          let i = isNaN(e + a) ? 0 : t => (1 - t) * e + t * a;
          if (!i) {
            let r, n, c, o, l, d = j(e),
              m = {};
            if (!0 === t && (s = 1) && (t = null), d) e = {
              p: e
            }, a = {
              p: a
            };
            else if (P(e) && !P(a)) {
              for (c = [], o = e.length, l = o - 2, n = 1; n < o; n++) c.push(ca(e[n - 1], e[n]));
              o--, i = e => {
                e *= o;
                let a = Math.min(l, ~~e);
                return c[a](e - a)
              }, t = a
            } else s || (e = ke(P(e) ? [] : {}, e));
            if (!c) {
              for (r in a) Fa.call(m, e, r, "get", a[r]);
              i = a => st(a, m) || (d ? e.p : e)
            }
          }
          return He(t, i)
        },
        oa = (e, a, t) => {
          let s, i, r, n = e.labels,
            c = h;
          for (s in n) i = n[s] - a, i < 0 == !!t && i && c > (i = Math.abs(i)) && (r = s, c = i);
          return r
        },
        la = (e, a, t) => {
          let s, i, n, c = e.vars,
            o = c[a],
            l = r,
            d = e._ctx;
          if (o) return s = c[a + "Params"], i = c.callbackScope || e, t && Z.length && ue(), d && (r = d), n = s ? o.apply(i, s) : o.call(i), r = l, n
        },
        da = e => (je(e), e.scrollTrigger && e.scrollTrigger.kill(!!i), e.progress() < 1 && la(e, "onInterrupt"), e),
        ma = [],
        ga = e => {
          if (L() && e) {
            let a = (e = !e.name && e.default || e).name,
              t = w(e),
              s = a && !t && e.init ? function() {
                this._props = []
              } : e,
              i = {
                init: q,
                render: st,
                add: Fa,
                kill: rt,
                modifier: it,
                rawVars: 0
              },
              r = {
                targetTest: 0,
                get: 0,
                getSetter: Ja,
                aliases: {},
                register: 0
              };
            if (Na(), e !== s) {
              if (ee[a]) return;
              be(s, be(_e(e, i), r)), ke(s.prototype, ke(i, _e(e, r))), ee[s.prop = a] = s, e.targetTest && (se.push(s), K[a] = 1), a = ("css" === a ? "CSS" : a.charAt(0).toUpperCase() + a.substr(1)) + "Plugin"
            }
            W(a, s), e.register && e.register(yt, s, ot)
          } else e && ma.push(e)
        },
        ua = 255,
        fa = {
          aqua: [0, ua, ua],
          lime: [0, ua, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ua],
          navy: [0, 0, 128],
          white: [ua, ua, ua],
          olive: [128, 128, 0],
          yellow: [ua, ua, 0],
          orange: [ua, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ua, 0, 0],
          pink: [ua, 192, 203],
          cyan: [0, ua, ua],
          transparent: [ua, ua, ua, 0]
        },
        pa = (e, a, t) => (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? a + (t - a) * e * 6 : e < .5 ? t : 3 * e < 2 ? a + (t - a) * (2 / 3 - e) * 6 : a) * ua + .5 | 0,
        ha = (e, a, t) => {
          let s, i, r, n, c, o, l, d, m, g, u = e ? S(e) ? [e >> 16, e >> 8 & ua, e & ua] : 0 : fa.black;
          if (!u) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), fa[e]) u = fa[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), i = e.charAt(2), r = e.charAt(3), e = "#" + s + s + i + i + r + r + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return u = parseInt(e.substr(1, 6), 16), [u >> 16, u >> 8 & ua, u & ua, parseInt(e.substr(7), 16) / 255];
              u = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ua, e & ua]
            } else if ("hsl" === e.substr(0, 3))
              if (u = g = e.match(z), a) {
                if (~e.indexOf("=")) return u = e.match(B), t && u.length < 4 && (u[3] = 1), u
              } else n = +u[0] % 360 / 360, c = +u[1] / 100, o = +u[2] / 100, i = o <= .5 ? o * (c + 1) : o + c - o * c, s = 2 * o - i, u.length > 3 && (u[3] *= 1), u[0] = pa(n + 1 / 3, s, i), u[1] = pa(n, s, i), u[2] = pa(n - 1 / 3, s, i);
            else u = e.match(z) || fa.transparent;
            u = u.map(Number)
          }
          return a && !g && (s = u[0] / ua, i = u[1] / ua, r = u[2] / ua, l = Math.max(s, i, r), d = Math.min(s, i, r), o = (l + d) / 2, l === d ? n = c = 0 : (m = l - d, c = o > .5 ? m / (2 - l - d) : m / (l + d), n = l === s ? (i - r) / m + (i < r ? 6 : 0) : l === i ? (r - s) / m + 2 : (s - i) / m + 4, n *= 60), u[0] = ~~(n + .5), u[1] = ~~(100 * c + .5), u[2] = ~~(100 * o + .5)), t && u.length < 4 && (u[3] = 1), u
        },
        ba = e => {
          let a = [],
            t = [],
            s = -1;
          return e.split(va).forEach((e => {
            let i = e.match(O) || [];
            a.push(...i), t.push(s += i.length + 1)
          })), a.c = t, a
        },
        ka = (e, a, t) => {
          let s, i, r, n, c = "",
            o = (e + c).match(va),
            l = a ? "hsla(" : "rgba(",
            d = 0;
          if (!o) return e;
          if (o = o.map((e => (e = ha(e, a, 1)) && l + (a ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), t && (r = ba(e), s = t.c, s.join(c) !== r.c.join(c)))
            for (i = e.replace(va, "1").split(O), n = i.length - 1; d < n; d++) c += i[d] + (~s.indexOf(d) ? o.shift() || l + "0,0,0,0)" : (r.length ? r : o.length ? o : t).shift());
          if (!i)
            for (i = e.split(va), n = i.length - 1; d < n; d++) c += i[d] + o[d];
          return c + i[n]
        },
        va = function() {
          let e, a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in fa) a += "|" + e + "\\b";
          return new RegExp(a + ")", "gi")
        }(),
        _a = /hsl[a]?\(/,
        ya = e => {
          let a, t = e.join(" ");
          if (va.lastIndex = 0, va.test(t)) return a = _a.test(t), e[1] = ka(e[1], a), e[0] = ka(e[0], a, ba(e[1])), !0
        },
        xa = function() {
          let e, a, t, s, i, r, n = Date.now,
            m = 500,
            g = 33,
            f = n(),
            p = f,
            h = 1e3 / 240,
            b = h,
            k = [],
            v = t => {
              let c, o, l, d, u = n() - p,
                _ = !0 === t;
              if (u > m && (f += u - g), p += u, l = p - f, c = l - b, (c > 0 || _) && (d = ++s.frame, i = l - 1e3 * s.time, s.time = l /= 1e3, b += c + (c >= h ? 4 : h - c), o = 1), _ || (e = a(v)), o)
                for (r = 0; r < k.length; r++) k[r](l, i, d, t)
            };
          return s = {
            time: 0,
            frame: 0,
            tick() {
              v(!0)
            },
            deltaRatio: e => i / (1e3 / (e || 60)),
            wake() {
              d && (!o && L() && (c = o = window, l = c.document || {}, F.gsap = yt, (c.gsapVersions || (c.gsapVersions = [])).push(yt.version), G(R || c.GreenSockGlobals || !c.gsap && c || {}), t = c.requestAnimationFrame, ma.forEach(ga)), e && s.sleep(), a = t || (e => setTimeout(e, b - 1e3 * s.time + 1 | 0)), u = 1, v(2))
            },
            sleep() {
              (t ? c.cancelAnimationFrame : clearTimeout)(e), u = 0, a = q
            },
            lagSmoothing(e, a) {
              m = e || 1 / 0, g = Math.min(a || 33, m)
            },
            fps(e) {
              h = 1e3 / (e || 240), b = 1e3 * s.time + h
            },
            add(e, a, t) {
              let i = a ? (a, t, r, n) => {
                e(a, t, r, n), s.remove(i)
              } : e;
              return s.remove(e), k[t ? "unshift" : "push"](i), Na(), i
            },
            remove(e, a) {
              ~(a = k.indexOf(e)) && k.splice(a, 1) && r >= a && r--
            },
            _listeners: k
          }, s
        }(),
        Na = () => !u && xa.wake(),
        ja = {},
        wa = /^[\d.\-M][\d.\-,\s]/,
        Sa = /["']/g,
        Ca = e => {
          let a, t, s, i = {},
            r = e.substr(1, e.length - 3).split(":"),
            n = r[0],
            c = 1,
            o = r.length;
          for (; c < o; c++) t = r[c], a = c !== o - 1 ? t.lastIndexOf(",") : t.length, s = t.substr(0, a), i[n] = isNaN(s) ? s.replace(Sa, "").trim() : +s, n = t.substr(a + 1).trim();
          return i
        },
        Ta = e => a => 1 - e(1 - a),
        Ia = (e, a) => {
          let t, s = e._first;
          for (; s;) s instanceof Aa ? Ia(s, a) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === a || (s.timeline ? Ia(s.timeline, a) : (t = s._ease, s._ease = s._yEase, s._yEase = t, s._yoyo = a)), s = s._next
        },
        La = (e, a) => e && (w(e) ? e : ja[e] || (e => {
          let a = (e + "").split("("),
            t = ja[a[0]];
          return t && a.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [Ca(a[1])] : (e => {
            let a = e.indexOf("(") + 1,
              t = e.indexOf(")"),
              s = e.indexOf("(", a);
            return e.substring(a, ~s && s < t ? e.indexOf(")", t + 1) : t)
          })(e).split(",").map(pe)) : ja._CE && wa.test(e) ? ja._CE("", e) : t
        })(e)) || a,
        Ma = function(e, a) {
          let t, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => 1 - a(1 - e),
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e < .5 ? a(2 * e) / 2 : 1 - a(2 * (1 - e)) / 2,
            r = {
              easeIn: a,
              easeOut: s,
              easeInOut: i
            };
          return oe(e, (e => {
            ja[e] = F[e] = r, ja[t = e.toLowerCase()] = s;
            for (let a in r) ja[t + ("easeIn" === a ? ".in" : "easeOut" === a ? ".out" : ".inOut")] = ja[e + "." + a] = r[a]
          })), r
        },
        Ea = e => a => a < .5 ? (1 - e(1 - 2 * a)) / 2 : .5 + e(2 * (a - .5)) / 2,
        Pa = (e, a, t) => {
          let s = a >= 1 ? a : 1,
            i = (t || (e ? .3 : .45)) / (a < 1 ? a : 1),
            r = i / k * (Math.asin(1 / s) || 0),
            n = e => 1 === e ? 1 : s * 2 ** (-10 * e) * N((e - r) * i) + 1,
            c = "out" === e ? n : "in" === e ? e => 1 - n(1 - e) : Ea(n);
          return i = k / i, c.config = (a, t) => Pa(e, a, t), c
        },
        za = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            t = e => e ? --e * e * ((a + 1) * e + a) + 1 : 0,
            s = "out" === e ? t : "in" === e ? e => 1 - t(1 - e) : Ea(t);
          return s.config = a => za(e, a), s
        };
      oe("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, a) => {
        let t = a < 5 ? a + 1 : a;
        Ma(e + ",Power" + (t - 1), a ? e => e ** t : e => e, (e => 1 - (1 - e) ** t), (e => e < .5 ? (2 * e) ** t / 2 : 1 - (2 * (1 - e)) ** t / 2))
      })), ja.Linear.easeNone = ja.none = ja.Linear.easeIn, Ma("Elastic", Pa("in"), Pa("out"), Pa()), ((e, a) => {
        let t = t => t < .36363636363636365 ? e * t * t : t < .7272727272727273 ? e * (t - 1.5 / a) ** 2 + .75 : t < .9090909090909092 ? e * (t -= 2.25 / a) * t + .9375 : e * (t - 2.625 / a) ** 2 + .984375;
        Ma("Bounce", (e => 1 - t(1 - e)), t)
      })(7.5625, 2.75), Ma("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Ma("Circ", (e => -(y(1 - e * e) - 1))), Ma("Sine", (e => 1 === e ? 1 : 1 - x(e * v))), Ma("Back", za("in"), za("out"), za()), ja.SteppedEase = ja.steps = F.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            a = arguments.length > 1 ? arguments[1] : void 0,
            t = 1 / e,
            s = e + (a ? 0 : 1),
            i = a ? 1 : 0;
          return e => ((s * Ue(0, .99999999, e) | 0) + i) * t
        }
      }, p.ease = ja["quad.out"], oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => ie += e + "," + e + "Params,"));
      class Ba {
        constructor(e, a) {
          this.id = _++, e._gsap = this, this.target = e, this.harness = a, this.get = a ? a.get : ce, this.set = a ? a.getSetter : Ja
        }
      }
      class Oa {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ve(this, +e.duration, 1, 1), this.data = e.data, r && (this._ctx = r, r.data.push(this)), u || xa.wake()
        }
        delay(e) {
          return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
        }
        duration(e) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }
        totalDuration(e) {
          return arguments.length ? (this._dirty = 0, Ve(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        totalTime(e, a) {
          if (Na(), !arguments.length) return this._tTime;
          let t = this._dp;
          if (t && t.smoothChildTiming && this._ts) {
            for (Ee(this, e), !t._dp || t.parent || Pe(t, this); t && t.parent;) t.parent._time !== t._start + (t._ts >= 0 ? t._tTime / t._ts : (t.totalDuration() - t._tTime) / -t._ts) && t.totalTime(t._tTime, !0), t = t.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && ze(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== e || !this._dur && !a || this._initted && Math.abs(this._zTime) === b || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), fe(this, e, a)), this
        }
        time(e, a) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Te(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), a) : this._time
        }
        totalProgress(e, a) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, a) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        progress(e, a) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Te(this), a) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        iteration(e, a) {
          let t = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (e - 1) * t, a) : this._repeat ? Ie(this._tTime, t) + 1 : 1
        }
        timeScale(e) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === e) return this;
          let a = this.parent && this._ts ? Le(this.parent._time, this) : this._tTime;
          return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Ue(-Math.abs(this._delay), this._tDur, a), !0), Me(this), (e => {
            let a = e.parent;
            for (; a && a.parent;) a._dirty = 1, a.totalDuration(), a = a.parent;
            return e
          })(this)
        }
        paused(e) {
          return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Na(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== b && (this._tTime -= b)))), this) : this._ps
        }
        startTime(e) {
          if (arguments.length) {
            this._start = e;
            let a = this.parent || this._dp;
            return a && (a._sort || !this.parent) && ze(a, this, e - this._delay), this
          }
          return this._start
        }
        endTime(e) {
          return this._start + (I(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        rawTime(e) {
          let a = this.parent || this._dp;
          return a ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Le(a.rawTime(e), this) : this._tTime : this._tTime
        }
        revert() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
            a = i;
          return i = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), i = a, this
        }
        globalTime(e) {
          let a = this,
            t = arguments.length ? e : a.rawTime();
          for (; a;) t = a._start + t / (a._ts || 1), a = a._dp;
          return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(e) : t
        }
        repeat(e) {
          return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, $e(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        repeatDelay(e) {
          if (arguments.length) {
            let a = this._time;
            return this._rDelay = e, $e(this), a ? this.time(a) : this
          }
          return this._rDelay
        }
        yoyo(e) {
          return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }
        seek(e, a) {
          return this.totalTime(Re(this, e), I(a))
        }
        restart(e, a) {
          return this.play().totalTime(e ? -this._delay : 0, I(a))
        }
        play(e, a) {
          return null != e && this.seek(e, a), this.reversed(!1).paused(!1)
        }
        reverse(e, a) {
          return null != e && this.seek(e || this.totalDuration(), a), this.reversed(!0).paused(!1)
        }
        pause(e, a) {
          return null != e && this.seek(e, a), this.paused(!0)
        }
        resume() {
          return this.paused(!1)
        }
        reversed(e) {
          return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
        }
        invalidate() {
          return this._initted = this._act = 0, this._zTime = -1e-8, this
        }
        isActive() {
          let e, a = this.parent || this._dp,
            t = this._start;
          return !(a && !(this._ts && this._initted && a.isActive() && (e = a.rawTime(!0)) >= t && e < this.endTime(!0) - b))
        }
        eventCallback(e, a, t) {
          let s = this.vars;
          return arguments.length > 1 ? (a ? (s[e] = a, t && (s[e + "Params"] = t), "onUpdate" === e && (this._onUpdate = a)) : delete s[e], this) : s[e]
        }
        then(e) {
          let a = this;
          return new Promise((t => {
            let s = w(e) ? e : he,
              i = () => {
                let e = a.then;
                a.then = null, w(s) && (s = s(a)) && (s.then || s === a) && (a.then = e), t(s), a.then = e
              };
            a._initted && 1 === a.totalProgress() && a._ts >= 0 || !a._tTime && a._ts < 0 ? i() : a._prom = i
          }))
        }
        kill() {
          da(this)
        }
      }
      be(Oa.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      });
      class Aa extends Oa {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments.length > 1 ? arguments[1] : void 0;
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = I(e.sortChildren), n && ze(e.parent || n, this, a), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && Be(this, e.scrollTrigger)
        }
        to(e, a, t) {
          return Ge(0, arguments, this), this
        }
        from(e, a, t) {
          return Ge(1, arguments, this), this
        }
        fromTo(e, a, t, s) {
          return Ge(2, arguments, this), this
        }
        set(e, a, t) {
          return a.duration = 0, a.parent = this, ye(a).repeatDelay || (a.repeat = 0), a.immediateRender = !!a.immediateRender, new Xa(e, a, Re(this, t), 1), this
        }
        call(e, a, t) {
          return ze(this, Xa.delayedCall(0, e, a), t)
        }
        staggerTo(e, a, t, s, i, r, n) {
          return t.duration = a, t.stagger = t.stagger || s, t.onComplete = r, t.onCompleteParams = n, t.parent = this, new Xa(e, t, Re(this, i)), this
        }
        staggerFrom(e, a, t, s, i, r, n) {
          return t.runBackwards = 1, ye(t).immediateRender = I(t.immediateRender), this.staggerTo(e, a, t, s, i, r, n)
        }
        staggerFromTo(e, a, t, s, i, r, n, c) {
          return s.startAt = t, ye(s).immediateRender = I(s.immediateRender), this.staggerTo(e, a, s, i, r, n, c)
        }
        render(e, a, t) {
          let s, r, c, o, l, d, m, g, u, f, p, h, k = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            _ = this._dur,
            y = e <= 0 ? 0 : de(e),
            x = this._zTime < 0 != e < 0 && (this._initted || !_);
          if (this !== n && y > v && e >= 0 && (y = v), y !== this._tTime || t || x) {
            if (k !== this._time && _ && (y += this._time - k, e += this._time - k), s = y, u = this._start, g = this._ts, d = !g, x && (_ || (k = this._zTime), (e || !a) && (this._zTime = e)), this._repeat) {
              if (p = this._yoyo, l = _ + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, a, t);
              if (s = de(y % l), y === v ? (o = this._repeat, s = _) : (o = ~~(y / l), o && o === y / l && (s = _, o--), s > _ && (s = _)), f = Ie(this._tTime, l), !k && this._tTime && f !== o && this._tTime - f * l - this._dur <= 0 && (f = o), p && 1 & o && (s = _ - s, h = 1), o !== f && !this._lock) {
                let e = p && 1 & f,
                  t = e === (p && 1 & o);
                if (o < f && (e = !e), k = e ? 0 : y % _ ? _ : y, this._lock = 1, this.render(k || (h ? 0 : de(o * l)), a, !_)._lock = 0, this._tTime = y, !a && this.parent && la(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), k && k !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (_ = this._dur, v = this._tDur, t && (this._lock = 2, k = e ? _ : -1e-4, this.render(k, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
                Ia(this, h)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (m = ((e, a, t) => {
                let s;
                if (t > a)
                  for (s = e._first; s && s._start <= t;) {
                    if ("isPause" === s.data && s._start > a) return s;
                    s = s._next
                  } else
                    for (s = e._last; s && s._start >= t;) {
                      if ("isPause" === s.data && s._start < a) return s;
                      s = s._prev
                    }
              })(this, de(k), de(s)), m && (y -= s - (s = m._start))), this._tTime = y, this._time = s, this._act = !g, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, k = 0), !k && s && !a && !o && (la(this, "onStart"), this._tTime !== y)) return this;
            if (s >= k && e >= 0)
              for (r = this._first; r;) {
                if (c = r._next, (r._act || s >= r._start) && r._ts && m !== r) {
                  if (r.parent !== this) return this.render(e, a, t);
                  if (r.render(r._ts > 0 ? (s - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (s - r._start) * r._ts, a, t), s !== this._time || !this._ts && !d) {
                    m = 0, c && (y += this._zTime = -1e-8);
                    break
                  }
                }
                r = c
              } else {
                r = this._last;
                let n = e < 0 ? e : s;
                for (; r;) {
                  if (c = r._prev, (r._act || n <= r._end) && r._ts && m !== r) {
                    if (r.parent !== this) return this.render(e, a, t);
                    if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, a, t || i && (r._initted || r._startAt)), s !== this._time || !this._ts && !d) {
                      m = 0, c && (y += this._zTime = n ? -1e-8 : b);
                      break
                    }
                  }
                  r = c
                }
              }
            if (m && !a && (this.pause(), m.render(s >= k ? 0 : -1e-8)._zTime = s >= k ? 1 : -1, this._ts)) return this._start = u, Me(this), this.render(e, a, t);
            this._onUpdate && !a && la(this, "onUpdate", !0), (y === v && this._tTime >= this.totalDuration() || !y && k) && (u !== this._start && Math.abs(g) === Math.abs(this._ts) || this._lock || ((e || !_) && (y === v && this._ts > 0 || !y && this._ts < 0) && je(this, 1), a || e < 0 && !k || !y && !k && v || (la(this, y === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(e, a) {
          if (S(a) || (a = Re(this, a, e)), !(e instanceof Oa)) {
            if (P(e)) return e.forEach((e => this.add(e, a))), this;
            if (j(e)) return this.addLabel(e, a);
            if (!w(e)) return this;
            e = Xa.delayedCall(0, e)
          }
          return this !== e ? ze(this, e, a) : this
        }
        getChildren() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -h,
            i = [],
            r = this._first;
          for (; r;) r._start >= s && (r instanceof Xa ? a && i.push(r) : (t && i.push(r), e && i.push(...r.getChildren(!0, a, t)))), r = r._next;
          return i
        }
        getById(e) {
          let a = this.getChildren(1, 1, 1),
            t = a.length;
          for (; t--;)
            if (a[t].vars.id === e) return a[t]
        }
        remove(e) {
          return j(e) ? this.removeLabel(e) : w(e) ? this.killTweensOf(e) : (Ne(this, e), e === this._recent && (this._recent = this._last), we(this))
        }
        totalTime(e, a) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = de(xa.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), super.totalTime(e, a), this._forcing = 0, this) : this._tTime
        }
        addLabel(e, a) {
          return this.labels[e] = Re(this, a), this
        }
        removeLabel(e) {
          return delete this.labels[e], this
        }
        addPause(e, a, t) {
          let s = Xa.delayedCall(0, a || q, t);
          return s.data = "isPause", this._hasPause = 1, ze(this, s, Re(this, e))
        }
        removePause(e) {
          let a = this._first;
          for (e = Re(this, e); a;) a._start === e && "isPause" === a.data && je(a), a = a._next
        }
        killTweensOf(e, a, t) {
          let s = this.getTweensOf(e, t),
            i = s.length;
          for (; i--;) Da !== s[i] && s[i].kill(e, a);
          return this
        }
        getTweensOf(e, a) {
          let t, s = [],
            i = Ye(e),
            r = this._first,
            n = S(a);
          for (; r;) r instanceof Xa ? ge(r._targets, i) && (n ? (!Da || r._initted && r._ts) && r.globalTime(0) <= a && r.globalTime(r.totalDuration()) > a : !a || r.isActive()) && s.push(r) : (t = r.getTweensOf(i, a)).length && s.push(...t), r = r._next;
          return s
        }
        tweenTo(e, a) {
          a = a || {};
          let t, s = this,
            i = Re(s, e),
            {
              startAt: r,
              onStart: n,
              onStartParams: c,
              immediateRender: o
            } = a,
            l = Xa.to(s, be({
              ease: a.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: i,
              overwrite: "auto",
              duration: a.duration || Math.abs((i - (r && "time" in r ? r.time : s._time)) / s.timeScale()) || b,
              onStart: () => {
                if (s.pause(), !t) {
                  let e = a.duration || Math.abs((i - (r && "time" in r ? r.time : s._time)) / s.timeScale());
                  l._dur !== e && Ve(l, e, 0, 1).render(l._time, !0, !0), t = 1
                }
                n && n.apply(l, c || [])
              }
            }, a));
          return o ? l.render(0) : l
        }
        tweenFromTo(e, a, t) {
          return this.tweenTo(a, be({
            startAt: {
              time: Re(this, e)
            }
          }, t))
        }
        recent() {
          return this._recent
        }
        nextLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return oa(this, Re(this, e))
        }
        previousLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return oa(this, Re(this, e), 1)
        }
        currentLabel(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + b)
        }
        shiftChildren(e, a) {
          let t, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = this._first,
            r = this.labels;
          for (; i;) i._start >= s && (i._start += e, i._end += e), i = i._next;
          if (a)
            for (t in r) r[t] >= s && (r[t] += e);
          return we(this)
        }
        invalidate(e) {
          let a = this._first;
          for (this._lock = 0; a;) a.invalidate(e), a = a._next;
          return super.invalidate(e)
        }
        clear() {
          let e, a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = this._first;
          for (; t;) e = t._next, this.remove(t), t = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), a && (this.labels = {}), we(this)
        }
        totalDuration(e) {
          let a, t, s, i = 0,
            r = this,
            c = r._last,
            o = h;
          if (arguments.length) return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -e : e));
          if (r._dirty) {
            for (s = r.parent; c;) a = c._prev, c._dirty && c.totalDuration(), t = c._start, t > o && r._sort && c._ts && !r._lock ? (r._lock = 1, ze(r, c, t - c._delay, 1)._lock = 0) : o = t, t < 0 && c._ts && (i -= t, (!s && !r._dp || s && s.smoothChildTiming) && (r._start += t / r._ts, r._time -= t, r._tTime -= t), r.shiftChildren(-t, !1, -Infinity), o = 0), c._end > i && c._ts && (i = c._end), c = a;
            Ve(r, r === n && r._time > i ? r._time : i, 1, 1), r._dirty = 0
          }
          return r._tDur
        }
        static updateRoot(e) {
          if (n._ts && (fe(n, Le(e, n)), m = xa.frame), xa.frame >= te) {
            te += f.autoSleep || 120;
            let e = n._first;
            if ((!e || !e._ts) && f.autoSleep && xa._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || xa.sleep()
            }
          }
        }
      }
      be(Aa.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Da, Va, $a = function(e, a, t, s, i, r, n) {
          let c, o, l, d, m, g, u, f, p = new ot(this._pt, e, a, 0, 1, tt, null, i),
            h = 0,
            b = 0;
          for (p.b = t, p.e = s, t += "", (u = ~(s += "").indexOf("random(")) && (s = ra(s)), r && (f = [t, s], r(f, e, a), t = f[0], s = f[1]), o = t.match(A) || []; c = A.exec(s);) d = c[0], m = s.substring(h, c.index), l ? l = (l + 1) % 5 : "rgba(" === m.substr(-5) && (l = 1), d !== o[b++] && (g = parseFloat(o[b - 1]) || 0, p._pt = {
            _next: p._pt,
            p: m || 1 === b ? m : ",",
            s: g,
            c: "=" === d.charAt(1) ? me(g, d) - g : parseFloat(d) - g,
            m: l && l < 4 ? Math.round : 0
          }, h = A.lastIndex);
          return p.c = h < s.length ? s.substring(h, s.length) : "", p.fp = n, (D.test(s) || u) && (p.e = 0), this._pt = p, p
        },
        Fa = function(e, a, t, s, i, r, n, c, o, l) {
          w(s) && (s = s(i || 0, e, r));
          let d, m = e[a],
            g = "get" !== t ? t : w(m) ? o ? e[a.indexOf("set") || !w(e["get" + a.substr(3)]) ? a : "get" + a.substr(3)](o) : e[a]() : m,
            u = w(m) ? o ? Ka : Qa : Ya;
          if (j(s) && (~s.indexOf("random(") && (s = ra(s)), "=" === s.charAt(1) && (d = me(g, s) + (We(g) || 0), (d || 0 === d) && (s = d))), !l || g !== s || Va) return isNaN(g * s) || "" === s ? (!m && !(a in e) && H(a, s), $a.call(this, e, a, g, s, u, c || f.stringFilter, o)) : (d = new ot(this._pt, e, a, +g || 0, s - (g || 0), "boolean" == typeof m ? at : et, 0, u), o && (d.fp = o), n && d.modifier(n, this, e), this._pt = d)
        },
        Ra = (e, a, t, s, i, r) => {
          let n, c, o, l;
          if (ee[e] && !1 !== (n = new ee[e]).init(i, n.rawVars ? a[e] : ((e, a, t, s, i) => {
              if (w(e) && (e = Ua(e, i, a, t, s)), !T(e) || e.style && e.nodeType || P(e) || E(e)) return j(e) ? Ua(e, i, a, t, s) : e;
              let r, n = {};
              for (r in e) n[r] = Ua(e[r], i, a, t, s);
              return n
            })(a[e], s, i, r, t), t, s, r) && (t._pt = c = new ot(t._pt, i, e, 0, 1, n.render, n, 0, n.priority), t !== g))
            for (o = t._ptLookup[t._targets.indexOf(i)], l = n._props.length; l--;) o[n._props[l]] = c;
          return n
        },
        Ga = (e, a, t) => {
          let r, c, o, l, d, m, g, u, f, k, v, _, y, x = e.vars,
            {
              ease: N,
              startAt: j,
              immediateRender: w,
              lazy: S,
              onUpdate: C,
              onUpdateParams: T,
              callbackScope: L,
              runBackwards: M,
              yoyoEase: E,
              keyframes: P,
              autoRevert: z
            } = x,
            B = e._dur,
            O = e._startAt,
            A = e._targets,
            D = e.parent,
            V = D && "nested" === D.data ? D.vars.targets : A,
            $ = "auto" === e._overwrite && !s,
            F = e.timeline;
          if (F && (!P || !N) && (N = "none"), e._ease = La(N, p.ease), e._yEase = E ? Ta(La(!0 === E ? N : E, p.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !F && !!x.runBackwards, !F || P && !x.stagger) {
            if (u = A[0] ? ne(A[0]).harness : 0, _ = u && x[u.prop], r = _e(x, K), O && (O._zTime < 0 && O.progress(1), a < 0 && M && w && !z ? O.render(-1, !0) : O.revert(M && B ? Y : X), O._lazy = 0), j) {
              if (je(e._startAt = Xa.set(A, be({
                  data: "isStart",
                  overwrite: !1,
                  parent: D,
                  immediateRender: !0,
                  lazy: !O && I(S),
                  startAt: null,
                  delay: 0,
                  onUpdate: C,
                  onUpdateParams: T,
                  callbackScope: L,
                  stagger: 0
                }, j))), e._startAt._dp = 0, e._startAt._sat = e, a < 0 && (i || !w && !z) && e._startAt.revert(Y), w && B && a <= 0 && t <= 0) return void(a && (e._zTime = a))
            } else if (M && B && !O)
              if (a && (w = !1), o = be({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: w && !O && I(S),
                  immediateRender: w,
                  stagger: 0,
                  parent: D
                }, r), _ && (o[u.prop] = _), je(e._startAt = Xa.set(A, o)), e._startAt._dp = 0, e._startAt._sat = e, a < 0 && (i ? e._startAt.revert(Y) : e._startAt.render(-1, !0)), e._zTime = a, w) {
                if (!a) return
              } else Ga(e._startAt, b, b);
            for (e._pt = e._ptCache = 0, S = B && I(S) || S && !B, c = 0; c < A.length; c++) {
              if (d = A[c], g = d._gsap || re(A)[c]._gsap, e._ptLookup[c] = k = {}, J[g.id] && Z.length && ue(), v = V === A ? c : V.indexOf(d), u && !1 !== (f = new u).init(d, _ || r, e, v, V) && (e._pt = l = new ot(e._pt, d, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((e => {
                  k[e] = l
                })), f.priority && (m = 1)), !u || _)
                for (o in r) ee[o] && (f = Ra(o, r, e, v, d, V)) ? f.priority && (m = 1) : k[o] = l = Fa.call(e, d, o, "get", r[o], v, V, 0, x.stringFilter);
              e._op && e._op[c] && e.kill(d, e._op[c]), $ && e._pt && (Da = e, n.killTweensOf(d, k, e.globalTime(a)), y = !e.parent, Da = 0), e._pt && S && (J[g.id] = 1)
            }
            m && ct(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = C, e._initted = (!e._op || e._pt) && !y, P && a <= 0 && F.render(h, !0, !0)
        },
        Ha = (e, a, t, s) => {
          let i, r, n = a.ease || s || "power1.inOut";
          if (P(a)) r = t[e] || (t[e] = []), a.forEach(((e, t) => r.push({
            t: t / (a.length - 1) * 100,
            v: e,
            e: n
          })));
          else
            for (i in a) r = t[i] || (t[i] = []), "ease" === i || r.push({
              t: parseFloat(e),
              v: a[i],
              e: n
            })
        },
        Ua = (e, a, t, s, i) => w(e) ? e.call(a, t, s, i) : j(e) && ~e.indexOf("random(") ? ra(e) : e,
        Wa = ie + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        qa = {};
      oe(Wa + ",id,stagger,delay,duration,paused,scrollTrigger", (e => qa[e] = 1));
      class Xa extends Oa {
        constructor(e, a, t, i) {
          "number" == typeof a && (t.duration = a, a = t, t = null), super(i ? a : ye(a));
          let r, c, o, l, d, m, g, u, {
              duration: p,
              delay: h,
              immediateRender: b,
              stagger: k,
              overwrite: v,
              keyframes: _,
              defaults: y,
              scrollTrigger: x,
              yoyoEase: N
            } = this.vars,
            j = a.parent || n,
            w = (P(e) || E(e) ? S(e[0]) : "length" in a) ? [e] : Ye(e);
          if (this._targets = w.length ? re(w) : U("GSAP target " + e + " not found. https://greensock.com", !f.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = v, _ || k || M(p) || M(h)) {
            if (a = this.vars, r = this.timeline = new Aa({
                data: "nested",
                defaults: y || {},
                targets: j && "nested" === j.data ? j.vars.targets : w
              }), r.kill(), r.parent = r._dp = this, r._start = 0, k || M(p) || M(h)) {
              if (l = w.length, g = k && Ze(k), T(k))
                for (d in k) ~Wa.indexOf(d) && (u || (u = {}), u[d] = k[d]);
              for (c = 0; c < l; c++) o = _e(a, qa), o.stagger = 0, N && (o.yoyoEase = N), u && ke(o, u), m = w[c], o.duration = +Ua(p, this, c, m, w), o.delay = (+Ua(h, this, c, m, w) || 0) - this._delay, !k && 1 === l && o.delay && (this._delay = h = o.delay, this._start += h, o.delay = 0), r.to(m, o, g ? g(c, m, w) : 0), r._ease = ja.none;
              r.duration() ? p = h = 0 : this.timeline = 0
            } else if (_) {
              ye(be(r.vars.defaults, {
                ease: "none"
              })), r._ease = La(_.ease || a.ease || "none");
              let e, t, s, i = 0;
              if (P(_)) _.forEach((e => r.to(w, e, ">"))), r.duration();
              else {
                for (d in o = {}, _) "ease" === d || "easeEach" === d || Ha(d, _[d], o, _.easeEach);
                for (d in o)
                  for (e = o[d].sort(((e, a) => e.t - a.t)), i = 0, c = 0; c < e.length; c++) t = e[c], s = {
                    ease: t.e,
                    duration: (t.t - (c ? e[c - 1].t : 0)) / 100 * p
                  }, s[d] = t.v, r.to(w, s, i), i += s.duration;
                r.duration() < p && r.to({}, {
                  duration: p - r.duration()
                })
              }
            }
            p || this.duration(p = r.duration())
          } else this.timeline = 0;
          !0 !== v || s || (Da = this, n.killTweensOf(w), Da = 0), ze(j, this, t), a.reversed && this.reverse(), a.paused && this.paused(!0), (b || !p && !_ && this._start === de(j._time) && I(b) && Ce(this) && "nested" !== j.data) && (this._tTime = -1e-8, this.render(Math.max(0, -h) || 0)), x && Be(this, x)
        }
        render(e, a, t) {
          let s, r, n, c, o, l, d, m, g, u = this._time,
            f = this._tDur,
            p = this._dur,
            h = e < 0,
            k = e > f - b && !h ? f : e < b ? 0 : e;
          if (p) {
            if (k !== this._tTime || !e || t || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
              if (s = k, m = this.timeline, this._repeat) {
                if (c = p + this._rDelay, this._repeat < -1 && h) return this.totalTime(100 * c + e, a, t);
                if (s = de(k % c), k === f ? (n = this._repeat, s = p) : (n = ~~(k / c), n && n === k / c && (s = p, n--), s > p && (s = p)), l = this._yoyo && 1 & n, l && (g = this._yEase, s = p - s), o = Ie(this._tTime, c), s === u && !t && this._initted) return this._tTime = k, this;
                n !== o && (m && this._yEase && Ia(m, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = t = 1, this.render(de(c * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Oe(this, h ? e : s, t, a, k)) return this._tTime = 0, this;
                if (u !== this._time) return this;
                if (p !== this._dur) return this.render(e, a, t)
              }
              if (this._tTime = k, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (g || this._ease)(s / p), this._from && (this.ratio = d = 1 - d), s && !u && !a && !n && (la(this, "onStart"), this._tTime !== k)) return this;
              for (r = this._pt; r;) r.r(d, r.d), r = r._next;
              m && m.render(e < 0 ? e : !s && l ? -1e-8 : m._dur * m._ease(s / this._dur), a, t) || this._startAt && (this._zTime = e), this._onUpdate && !a && (h && Se(this, e, 0, t), la(this, "onUpdate")), this._repeat && n !== o && this.vars.onRepeat && !a && this.parent && la(this, "onRepeat"), k !== this._tDur && k || this._tTime !== k || (h && !this._onUpdate && Se(this, e, 0, !0), (e || !p) && (k === this._tDur && this._ts > 0 || !k && this._ts < 0) && je(this, 1), a || h && !u || !(k || u || l) || (la(this, k === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(k < f && this.timeScale() > 0) && this._prom()))
            }
          } else((e, a, t, s) => {
            let r, n, c, o = e.ratio,
              l = a < 0 || !a && (!e._start && Ae(e) && (e._initted || !De(e)) || (e._ts < 0 || e._dp._ts < 0) && !De(e)) ? 0 : 1,
              d = e._rDelay,
              m = 0;
            if (d && e._repeat && (m = Ue(0, e._tDur, a), n = Ie(m, d), e._yoyo && 1 & n && (l = 1 - l), n !== Ie(e._tTime, d) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || i || s || e._zTime === b || !a && e._zTime) {
              if (!e._initted && Oe(e, a, s, t, m)) return;
              for (c = e._zTime, e._zTime = a || (t ? b : 0), t || (t = a && !c), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = m, r = e._pt; r;) r.r(l, r.d), r = r._next;
              a < 0 && Se(e, a, 0, !0), e._onUpdate && !t && la(e, "onUpdate"), m && e._repeat && !t && e.parent && la(e, "onRepeat"), (a >= e._tDur || a < 0) && e.ratio === l && (l && je(e, 1), t || i || (la(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = a)
          })(this, e, a, t);
          return this
        }
        targets() {
          return this._targets
        }
        invalidate(e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), super.invalidate(e)
        }
        resetTo(e, a, t, s) {
          u || xa.wake(), this._ts || this.play();
          let i, r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Ga(this, r), i = this._ease(r / this._dur), ((e, a, t, s, i, r, n) => {
            let c, o, l, d, m = (e._pt && e._ptCache || (e._ptCache = {}))[a];
            if (!m)
              for (m = e._ptCache[a] = [], l = e._ptLookup, d = e._targets.length; d--;) {
                if (c = l[d][a], c && c.d && c.d._pt)
                  for (c = c.d._pt; c && c.p !== a && c.fp !== a;) c = c._next;
                if (!c) return Va = 1, e.vars[a] = "+=0", Ga(e, n), Va = 0, 1;
                m.push(c)
              }
            for (d = m.length; d--;) o = m[d], c = o._pt || o, c.s = !s && 0 !== s || i ? c.s + (s || 0) + r * c.c : s, c.c = t - c.s, o.e && (o.e = le(t) + We(o.e)), o.b && (o.b = c.s + We(o.b))
          })(this, e, a, t, s, i, r) ? this.resetTo(e, a, t, s) : (Ee(this, 0), this.parent || xe(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(e || a && "all" !== a)) return this._lazy = this._pt = 0, this.parent ? da(this) : this;
          if (this.timeline) {
            let t = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, a, Da && !0 !== Da.vars.overwrite)._first || da(this), this.parent && t !== this.timeline.totalDuration() && Ve(this, this._dur * this.timeline._tDur / t, 0, 1), this
          }
          let t, s, i, r, n, c, o, l = this._targets,
            d = e ? Ye(e) : l,
            m = this._ptLookup,
            g = this._pt;
          if ((!a || "all" === a) && ((e, a) => {
              let t = e.length,
                s = t === a.length;
              for (; s && t-- && e[t] === a[t];);
              return t < 0
            })(l, d)) return "all" === a && (this._pt = 0), da(this);
          for ((t = this._op = this._op || [], "all" !== a && (j(a) && (n = {}, oe(a, (e => n[e] = 1)), a = n), a = ((e, a) => {
              let t, s, i, r, n = e[0] ? ne(e[0]).harness : 0,
                c = n && n.aliases;
              if (!c) return a;
              for (s in t = ke({}, a), c)
                if (s in t)
                  for (r = c[s].split(","), i = r.length; i--;) t[r[i]] = t[s];
              return t
            })(l, a)), o = l.length); o--;)
            if (~d.indexOf(l[o]))
              for (n in s = m[o], "all" === a ? (t[o] = a, r = s, i = {}) : (i = t[o] = t[o] || {}, r = a), r) c = s && s[n], c && ("kill" in c.d && !0 !== c.d.kill(n) || Ne(this, c, "_pt"), delete s[n]), "all" !== i && (i[n] = 1);
          return this._initted && !this._pt && g && da(this), this
        }
        static to(e, a) {
          return new Xa(e, a, arguments[2])
        }
        static from(e, a) {
          return Ge(1, arguments)
        }
        static delayedCall(e, a, t, s) {
          return new Xa(a, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: a,
            onReverseComplete: a,
            onCompleteParams: t,
            onReverseCompleteParams: t,
            callbackScope: s
          })
        }
        static fromTo(e, a, t) {
          return Ge(2, arguments)
        }
        static set(e, a) {
          return a.duration = 0, a.repeatDelay || (a.repeat = 0), new Xa(e, a)
        }
        static killTweensOf(e, a, t) {
          return n.killTweensOf(e, a, t)
        }
      }
      be(Xa.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), oe("staggerTo,staggerFrom,staggerFromTo", (e => {
        Xa[e] = function() {
          let a = new Aa,
            t = qe.call(arguments, 0);
          return t.splice("staggerFromTo" === e ? 5 : 4, 0, 0), a[e].apply(a, t)
        }
      }));
      let Ya = (e, a, t) => e[a] = t,
        Qa = (e, a, t) => e[a](t),
        Ka = (e, a, t, s) => e[a](s.fp, t),
        Za = (e, a, t) => e.setAttribute(a, t),
        Ja = (e, a) => w(e[a]) ? Qa : C(e[a]) && e.setAttribute ? Za : Ya,
        et = (e, a) => a.set(a.t, a.p, Math.round(1e6 * (a.s + a.c * e)) / 1e6, a),
        at = (e, a) => a.set(a.t, a.p, !!(a.s + a.c * e), a),
        tt = function(e, a) {
          let t = a._pt,
            s = "";
          if (!e && a.b) s = a.b;
          else if (1 === e && a.e) s = a.e;
          else {
            for (; t;) s = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round(1e4 * (t.s + t.c * e)) / 1e4) + s, t = t._next;
            s += a.c
          }
          a.set(a.t, a.p, s, a)
        },
        st = function(e, a) {
          let t = a._pt;
          for (; t;) t.r(e, t.d), t = t._next
        },
        it = function(e, a, t, s) {
          let i, r = this._pt;
          for (; r;) i = r._next, r.p === s && r.modifier(e, a, t), r = i
        },
        rt = function(e) {
          let a, t, s = this._pt;
          for (; s;) t = s._next, s.p === e && !s.op || s.op === e ? Ne(this, s, "_pt") : s.dep || (a = 1), s = t;
          return !a
        },
        nt = (e, a, t, s) => {
          s.mSet(e, a, s.m.call(s.tween, t, s.mt), s)
        },
        ct = e => {
          let a, t, s, i, r = e._pt;
          for (; r;) {
            for (a = r._next, t = s; t && t.pr > r.pr;) t = t._next;
            (r._prev = t ? t._prev : i) ? r._prev._next = r: s = r, (r._next = t) ? t._prev = r : i = r, r = a
          }
          e._pt = s
        };
      class ot {
        constructor(e, a, t, s, i, r, n, c, o) {
          this.t = a, this.s = s, this.c = i, this.p = t, this.r = r || et, this.d = n || this, this.set = c || Ya, this.pr = o || 0, this._next = e, e && (e._prev = this)
        }
        modifier(e, a, t) {
          this.mSet = this.mSet || this.set, this.set = nt, this.m = e, this.mt = t, this.tween = a
        }
      }
      oe(ie + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => K[e] = 1)), F.TweenMax = F.TweenLite = Xa, F.TimelineLite = F.TimelineMax = Aa, n = new Aa({
        sortChildren: !1,
        defaults: p,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), f.stringFilter = ya;
      let lt = [],
        dt = {},
        mt = [],
        gt = 0,
        ut = 0,
        ft = e => (dt[e] || mt).map((e => e())),
        pt = () => {
          let e = Date.now(),
            a = [];
          e - gt > 2 && (ft("matchMediaInit"), lt.forEach((e => {
            let t, s, i, r, n = e.queries,
              o = e.conditions;
            for (s in n) t = c.matchMedia(n[s]).matches, t && (i = 1), t !== o[s] && (o[s] = t, r = 1);
            r && (e.revert(), i && a.push(e))
          })), ft("matchMediaRevert"), a.forEach((e => e.onMatch(e))), gt = e, ft("matchMedia"))
        };
      class ht {
        constructor(e, a) {
          this.selector = a && Qe(a), this.data = [], this._r = [], this.isReverted = !1, this.id = ut++, e && this.add(e)
        }
        add(e, a, t) {
          w(e) && (t = a, a = e, e = w);
          let s = this,
            i = function() {
              let e, i = r,
                n = s.selector;
              return i && i !== s && i.data.push(s), t && (s.selector = Qe(t)), r = s, e = a.apply(s, arguments), w(e) && s._r.push(e), r = i, s.selector = n, s.isReverted = !1, e
            };
          return s.last = i, e === w ? i(s) : e ? s[e] = i : i
        }
        ignore(e) {
          let a = r;
          r = null, e(this), r = a
        }
        getTweens() {
          let e = [];
          return this.data.forEach((a => a instanceof ht ? e.push(...a.getTweens()) : a instanceof Xa && !(a.parent && "nested" === a.parent.data) && e.push(a))), e
        }
        clear() {
          this._r.length = this.data.length = 0
        }
        kill(e, a) {
          if (e) {
            let a = this.getTweens();
            this.data.forEach((e => {
              "isFlip" === e.data && (e.revert(), e.getChildren(!0, !0, !1).forEach((e => a.splice(a.indexOf(e), 1))))
            })), a.map((e => ({
              g: e.globalTime(0),
              t: e
            }))).sort(((e, a) => a.g - e.g || -1 / 0)).forEach((a => a.t.revert(e))), this.data.forEach((a => !(a instanceof Xa) && a.revert && a.revert(e))), this._r.forEach((a => a(e, this))), this.isReverted = !0
          } else this.data.forEach((e => e.kill && e.kill()));
          if (this.clear(), a) {
            let e = lt.length;
            for (; e--;) lt[e].id === this.id && lt.splice(e, 1)
          }
        }
        revert(e) {
          this.kill(e || {})
        }
      }
      class bt {
        constructor(e) {
          this.contexts = [], this.scope = e
        }
        add(e, a, t) {
          T(e) || (e = {
            matches: e
          });
          let s, i, n, o = new ht(0, t || this.scope),
            l = o.conditions = {};
          for (i in r && !o.selector && (o.selector = r.selector), this.contexts.push(o), a = o.add("onMatch", a), o.queries = e, e) "all" === i ? n = 1 : (s = c.matchMedia(e[i]), s && (lt.indexOf(o) < 0 && lt.push(o), (l[i] = s.matches) && (n = 1), s.addListener ? s.addListener(pt) : s.addEventListener("change", pt)));
          return n && a(o), this
        }
        revert(e) {
          this.kill(e || {})
        }
        kill(e) {
          this.contexts.forEach((a => a.kill(e, !0)))
        }
      }
      const kt = {
        registerPlugin() {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
          a.forEach((e => ga(e)))
        },
        timeline: e => new Aa(e),
        getTweensOf: (e, a) => n.getTweensOf(e, a),
        getProperty(e, a, t, s) {
          j(e) && (e = Ye(e)[0]);
          let i = ne(e || {}).get,
            r = t ? he : pe;
          return "native" === t && (t = ""), e ? a ? r((ee[a] && ee[a].get || i)(e, a, t, s)) : (a, t, s) => r((ee[a] && ee[a].get || i)(e, a, t, s)) : e
        },
        quickSetter(e, a, t) {
          if ((e = Ye(e)).length > 1) {
            let s = e.map((e => yt.quickSetter(e, a, t))),
              i = s.length;
            return e => {
              let a = i;
              for (; a--;) s[a](e)
            }
          }
          e = e[0] || {};
          let s = ee[a],
            i = ne(e),
            r = i.harness && (i.harness.aliases || {})[a] || a,
            n = s ? a => {
              let i = new s;
              g._pt = 0, i.init(e, t ? a + t : a, g, 0, [e]), i.render(1, i), g._pt && st(1, g)
            } : i.set(e, r);
          return s ? n : a => n(e, r, t ? a + t : a, i, 1)
        },
        quickTo(e, a, t) {
          let s = yt.to(e, ke({
              [a]: "+=0.1",
              paused: !0
            }, t || {})),
            i = (e, t, i) => s.resetTo(a, e, t, i);
          return i.tween = s, i
        },
        isTweening: e => n.getTweensOf(e, !0).length > 0,
        defaults: e => (e && e.ease && (e.ease = La(e.ease, p.ease)), ve(p, e || {})),
        config: e => ve(f, e || {}),
        registerEffect(e) {
          let {
            name: a,
            effect: t,
            plugins: s,
            defaults: i,
            extendTimeline: r
          } = e;
          (s || "").split(",").forEach((e => e && !ee[e] && !F[e] && U(a + " effect requires " + e + " plugin."))), ae[a] = (e, a, s) => t(Ye(e), be(a || {}, i), s), r && (Aa.prototype[a] = function(e, t, s) {
            return this.add(ae[a](e, T(t) ? t : (s = t) && {}, this), s)
          })
        },
        registerEase(e, a) {
          ja[e] = La(a)
        },
        parseEase(e, a) {
          return arguments.length ? La(e, a) : ja
        },
        getById: e => n.getById(e),
        exportRoot() {
          let e, a, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = arguments.length > 1 ? arguments[1] : void 0,
            i = new Aa(t);
          for (i.smoothChildTiming = I(t.smoothChildTiming), n.remove(i), i._dp = 0, i._time = i._tTime = n._time, e = n._first; e;) a = e._next, !s && !e._dur && e instanceof Xa && e.vars.onComplete === e._targets[0] || ze(i, e, e._start - e._delay), e = a;
          return ze(n, i, 0), i
        },
        context: (e, a) => e ? new ht(e, a) : r,
        matchMedia: e => new bt(e),
        matchMediaRefresh: () => lt.forEach((e => {
          let a, t, s = e.conditions;
          for (t in s) s[t] && (s[t] = !1, a = 1);
          a && e.revert()
        })) || pt(),
        addEventListener(e, a) {
          let t = dt[e] || (dt[e] = []);
          ~t.indexOf(a) || t.push(a)
        },
        removeEventListener(e, a) {
          let t = dt[e],
            s = t && t.indexOf(a);
          s >= 0 && t.splice(s, 1)
        },
        utils: {
          wrap: sa,
          wrapYoyo: ia,
          distribute: Ze,
          random: aa,
          snap: ea,
          normalize: (e, a, t) => na(e, a, 0, 1, t),
          getUnit: We,
          clamp: (e, a, t) => He(t, (t => Ue(e, a, t))),
          splitColor: ha,
          toArray: Ye,
          selector: Qe,
          mapRange: na,
          pipe: function() {
            for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
            return e => a.reduce(((e, a) => a(e)), e)
          },
          unitize: (e, a) => t => e(parseFloat(t)) + (a || We(t)),
          interpolate: ca,
          shuffle: Ke
        },
        install: G,
        effects: ae,
        ticker: xa,
        updateRoot: Aa.updateRoot,
        plugins: ee,
        globalTimeline: n,
        core: {
          PropTween: ot,
          globals: W,
          Tween: Xa,
          Timeline: Aa,
          Animation: Oa,
          getCache: ne,
          _removeLinkedListItem: Ne,
          reverting: () => i,
          context: e => (e && r && (r.data.push(e), e._ctx = r), r),
          suppressOverwrites: e => s = e
        }
      };
      oe("to,from,fromTo,delayedCall,set,killTweensOf", (e => kt[e] = Xa[e])), xa.add(Aa.updateRoot), g = kt.to({}, {
        duration: 0
      });
      let vt = (e, a) => {
          let t = e._pt;
          for (; t && t.p !== a && t.op !== a && t.fp !== a;) t = t._next;
          return t
        },
        _t = (e, a) => ({
          name: e,
          rawVars: 1,
          init(e, t, s) {
            s._onInit = e => {
              let s, i;
              if (j(t) && (s = {}, oe(t, (e => s[e] = 1)), t = s), a) {
                for (i in s = {}, t) s[i] = a(t[i]);
                t = s
              }((e, a) => {
                let t, s, i, r = e._targets;
                for (t in a)
                  for (s = r.length; s--;) i = e._ptLookup[s][t], i && (i = i.d) && (i._pt && (i = vt(i, t)), i && i.modifier && i.modifier(a[t], e, r[s], t))
              })(e, t)
            }
          }
        });
      const yt = kt.registerPlugin({
        name: "attr",
        init(e, a, t, s, i) {
          let r, n, c;
          for (r in this.tween = t, a) c = e.getAttribute(r) || "", n = this.add(e, "setAttribute", (c || 0) + "", a[r], s, i, 0, 0, r), n.op = r, n.b = c, this._props.push(r)
        },
        render(e, a) {
          let t = a._pt;
          for (; t;) i ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), t = t._next
        }
      }, {
        name: "endArray",
        init(e, a) {
          let t = a.length;
          for (; t--;) this.add(e, t, e[t] || 0, a[t], 0, 0, 0, 0, 0, 1)
        }
      }, _t("roundProps", Je), _t("modifiers"), _t("snap", ea)) || kt;
      Xa.version = Aa.version = yt.version = "3.12.2", d = 1, L() && Na();
      const {
        Power0: xt,
        Power1: Nt,
        Power2: jt,
        Power3: wt,
        Power4: St,
        Linear: Ct,
        Quad: Tt,
        Cubic: It,
        Quart: Lt,
        Quint: Mt,
        Strong: Et,
        Elastic: Pt,
        Back: zt,
        SteppedEase: Bt,
        Bounce: Ot,
        Sine: At,
        Expo: Dt,
        Circ: Vt
      } = ja;
      let $t, Ft, Rt, Gt, Ht, Ut, Wt, qt, Xt, Yt = {},
        Qt = 180 / Math.PI,
        Kt = Math.PI / 180,
        Zt = Math.atan2,
        Jt = /([A-Z])/g,
        es = /(left|right|width|margin|padding|x)/i,
        as = /[\s,\(]\S/,
        ts = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        ss = (e, a) => a.set(a.t, a.p, Math.round(1e4 * (a.s + a.c * e)) / 1e4 + a.u, a),
        is = (e, a) => a.set(a.t, a.p, 1 === e ? a.e : Math.round(1e4 * (a.s + a.c * e)) / 1e4 + a.u, a),
        rs = (e, a) => a.set(a.t, a.p, e ? Math.round(1e4 * (a.s + a.c * e)) / 1e4 + a.u : a.b, a),
        ns = (e, a) => {
          let t = a.s + a.c * e;
          a.set(a.t, a.p, ~~(t + (t < 0 ? -.5 : .5)) + a.u, a)
        },
        cs = (e, a) => a.set(a.t, a.p, e ? a.e : a.b, a),
        os = (e, a) => a.set(a.t, a.p, 1 !== e ? a.b : a.e, a),
        ls = (e, a, t) => e.style[a] = t,
        ds = (e, a, t) => e.style.setProperty(a, t),
        ms = (e, a, t) => e._gsap[a] = t,
        gs = (e, a, t) => e._gsap.scaleX = e._gsap.scaleY = t,
        us = (e, a, t, s, i) => {
          let r = e._gsap;
          r.scaleX = r.scaleY = t, r.renderTransform(i, r)
        },
        fs = (e, a, t, s, i) => {
          let r = e._gsap;
          r[a] = t, r.renderTransform(i, r)
        },
        ps = "transform",
        hs = ps + "Origin",
        bs = function(e, a) {
          let t = this.target,
            s = t.style;
          if (e in Yt && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return ts.transform.split(",").forEach((e => bs.call(this, e, a)));
            if (~(e = ts[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = Bs(t, e))) : this.tfm[e] = t._gsap.x ? t._gsap[e] : Bs(t, e), this.props.indexOf(ps) >= 0) return;
            t._gsap.svg && (this.svgo = t.getAttribute("data-svg-origin"), this.props.push(hs, a, "")), e = ps
          }(s || a) && this.props.push(e, a, s[e])
        },
        ks = e => {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        vs = function() {
          let e, a, t = this.props,
            s = this.target,
            i = s.style,
            r = s._gsap;
          for (e = 0; e < t.length; e += 3) t[e + 1] ? s[t[e]] = t[e + 2] : t[e + 2] ? i[t[e]] = t[e + 2] : i.removeProperty("--" === t[e].substr(0, 2) ? t[e] : t[e].replace(Jt, "-$1").toLowerCase());
          if (this.tfm) {
            for (a in this.tfm) r[a] = this.tfm[a];
            r.svg && (r.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = qt(), e && e.isStart || i[ps] || (ks(i), r.uncache = 1)
          }
        },
        _s = (e, a) => {
          let t = {
            target: e,
            props: [],
            revert: vs,
            save: bs
          };
          return e._gsap || yt.core.getCache(e), a && a.split(",").forEach((e => t.save(e))), t
        },
        ys = (e, a) => {
          let t = Ft.createElementNS ? Ft.createElementNS((a || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ft.createElement(e);
          return t.style ? t : Ft.createElement(e)
        },
        xs = (e, a, t) => {
          let s = getComputedStyle(e);
          return s[a] || s.getPropertyValue(a.replace(Jt, "-$1").toLowerCase()) || s.getPropertyValue(a) || !t && xs(e, js(a) || a, 1) || ""
        },
        Ns = "O,Moz,ms,Ms,Webkit".split(","),
        js = (e, a, t) => {
          let s = (a || Ht).style,
            i = 5;
          if (e in s && !t) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Ns[i] + e in s););
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Ns[i] : "") + e
        },
        ws = () => {
          "undefined" != typeof window && window.document && ($t = window, Ft = $t.document, Rt = Ft.documentElement, Ht = ys("div") || {
            style: {}
          }, Ut = ys("div"), ps = js(ps), hs = ps + "Origin", Ht.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xt = !!js("perspective"), qt = yt.core.reverting, Gt = 1)
        },
        Ss = function(e) {
          let a, t = ys("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = this.parentNode,
            i = this.nextSibling,
            r = this.style.cssText;
          if (Rt.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
            a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Ss
          } catch (e) {} else this._gsapBBox && (a = this._gsapBBox());
          return s && (i ? s.insertBefore(this, i) : s.appendChild(this)), Rt.removeChild(t), this.style.cssText = r, a
        },
        Cs = (e, a) => {
          let t = a.length;
          for (; t--;)
            if (e.hasAttribute(a[t])) return e.getAttribute(a[t])
        },
        Ts = e => {
          let a;
          try {
            a = e.getBBox()
          } catch (t) {
            a = Ss.call(e, !0)
          }
          return a && (a.width || a.height) || e.getBBox === Ss || (a = Ss.call(e, !0)), !a || a.width || a.x || a.y ? a : {
            x: +Cs(e, ["x", "cx", "x1"]) || 0,
            y: +Cs(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Is = e => !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Ts(e)),
        Ls = (e, a) => {
          if (a) {
            let t = e.style;
            a in Yt && a !== hs && (a = ps), t.removeProperty ? ("ms" !== a.substr(0, 2) && "webkit" !== a.substr(0, 6) || (a = "-" + a), t.removeProperty(a.replace(Jt, "-$1").toLowerCase())) : t.removeAttribute(a)
          }
        },
        Ms = (e, a, t, s, i, r) => {
          let n = new ot(e._pt, a, t, 0, 1, r ? os : cs);
          return e._pt = n, n.b = s, n.e = i, e._props.push(t), n
        },
        Es = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Ps = {
          grid: 1,
          flex: 1
        },
        zs = (e, a, t, s) => {
          let i, r, n, c, o = parseFloat(t) || 0,
            l = (t + "").trim().substr((o + "").length) || "px",
            d = Ht.style,
            m = es.test(a),
            g = "svg" === e.tagName.toLowerCase(),
            u = (g ? "client" : "offset") + (m ? "Width" : "Height"),
            f = 100,
            p = "px" === s,
            h = "%" === s;
          return s === l || !o || Es[s] || Es[l] ? o : ("px" !== l && !p && (o = zs(e, a, t, "px")), c = e.getCTM && Is(e), !h && "%" !== l || !Yt[a] && !~a.indexOf("adius") ? (d[m ? "width" : "height"] = f + (p ? l : s), r = ~a.indexOf("adius") || "em" === s && e.appendChild && !g ? e : e.parentNode, c && (r = (e.ownerSVGElement || {}).parentNode), r && r !== Ft && r.appendChild || (r = Ft.body), n = r._gsap, n && h && n.width && m && n.time === xa.time && !n.uncache ? le(o / n.width * f) : ((h || "%" === l) && !Ps[xs(r, "display")] && (d.position = xs(e, "position")), r === e && (d.position = "static"), r.appendChild(Ht), i = Ht[u], r.removeChild(Ht), d.position = "absolute", m && h && (n = ne(r), n.time = xa.time, n.width = r[u]), le(p ? i * o / f : i && o ? f / i * o : 0))) : (i = c ? e.getBBox()[m ? "width" : "height"] : e[u], le(h ? o / i * f : o / 100 * i)))
        },
        Bs = (e, a, t, s) => {
          let i;
          return Gt || ws(), a in ts && "transform" !== a && ~(a = ts[a]).indexOf(",") && (a = a.split(",")[0]), Yt[a] && "transform" !== a ? (i = qs(e, s), i = "transformOrigin" !== a ? i[a] : i.svg ? i.origin : Xs(xs(e, hs)) + " " + i.zOrigin + "px") : (i = e.style[a], (!i || "auto" === i || s || ~(i + "").indexOf("calc(")) && (i = $s[a] && $s[a](e, a, t) || xs(e, a) || ce(e, a) || ("opacity" === a ? 1 : 0))), t && !~(i + "").trim().indexOf(" ") ? zs(e, a, i, t) + t : i
        },
        Os = function(e, a, t, s) {
          if (!t || "none" === t) {
            let s = js(a, e, 1),
              i = s && xs(e, s, 1);
            i && i !== t ? (a = s, t = i) : "borderColor" === a && (t = xs(e, "borderTopColor"))
          }
          let i, r, n, c, o, l, d, m, g, u, p, h, b = new ot(this._pt, e.style, a, 0, 1, tt),
            k = 0,
            v = 0;
          if (b.b = t, b.e = s, t += "", "auto" == (s += "") && (e.style[a] = s, s = xs(e, a) || s, e.style[a] = t), i = [t, s], ya(i), s = i[1], n = (t = i[0]).match(O) || [], h = s.match(O) || [], h.length) {
            for (; r = O.exec(s);) d = r[0], g = s.substring(k, r.index), o ? o = (o + 1) % 5 : "rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5) || (o = 1), d !== (l = n[v++] || "") && (c = parseFloat(l) || 0, p = l.substr((c + "").length), "=" === d.charAt(1) && (d = me(c, d) + p), m = parseFloat(d), u = d.substr((m + "").length), k = O.lastIndex - u.length, u || (u = u || f.units[a] || p, k === s.length && (s += u, b.e += u)), p !== u && (c = zs(e, a, l, u) || 0), b._pt = {
              _next: b._pt,
              p: g || 1 === v ? g : ",",
              s: c,
              c: m - c,
              m: o && o < 4 || "zIndex" === a ? Math.round : 0
            });
            b.c = k < s.length ? s.substring(k, s.length) : ""
          } else b.r = "display" === a && "none" === s ? os : cs;
          return D.test(s) && (b.e = 0), this._pt = b, b
        },
        As = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Ds = e => {
          let a = e.split(" "),
            t = a[0],
            s = a[1] || "50%";
          return "top" !== t && "bottom" !== t && "left" !== s && "right" !== s || (e = t, t = s, s = e), a[0] = As[t] || t, a[1] = As[s] || s, a.join(" ")
        },
        Vs = (e, a) => {
          if (a.tween && a.tween._time === a.tween._dur) {
            let e, t, s, i = a.t,
              r = i.style,
              n = a.u,
              c = i._gsap;
            if ("all" === n || !0 === n) r.cssText = "", t = 1;
            else
              for (n = n.split(","), s = n.length; --s > -1;) e = n[s], Yt[e] && (t = 1, e = "transformOrigin" === e ? hs : ps), Ls(i, e);
            t && (Ls(i, ps), c && (c.svg && i.removeAttribute("transform"), qs(i, 1), c.uncache = 1, ks(r)))
          }
        },
        $s = {
          clearProps(e, a, t, s, i) {
            if ("isFromStart" !== i.data) {
              let r = e._pt = new ot(e._pt, a, t, 0, 0, Vs);
              return r.u = s, r.pr = -10, r.tween = i, e._props.push(t), 1
            }
          }
        },
        Fs = [1, 0, 0, 1, 0, 0],
        Rs = {},
        Gs = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        Hs = e => {
          let a = xs(e, ps);
          return Gs(a) ? Fs : a.substr(7).match(B).map(le)
        },
        Us = (e, a) => {
          let t, s, i, r, n = e._gsap || ne(e),
            c = e.style,
            o = Hs(e);
          return n.svg && e.getAttribute("transform") ? (i = e.transform.baseVal.consolidate().matrix, o = [i.a, i.b, i.c, i.d, i.e, i.f], "1,0,0,1,0,0" === o.join(",") ? Fs : o) : (o !== Fs || e.offsetParent || e === Rt || n.svg || (i = c.display, c.display = "block", t = e.parentNode, t && e.offsetParent || (r = 1, s = e.nextElementSibling, Rt.appendChild(e)), o = Hs(e), i ? c.display = i : Ls(e, "display"), r && (s ? t.insertBefore(e, s) : t ? t.appendChild(e) : Rt.removeChild(e))), a && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
        },
        Ws = (e, a, t, s, i, r) => {
          let n, c, o, l, d = e._gsap,
            m = i || Us(e, !0),
            g = d.xOrigin || 0,
            u = d.yOrigin || 0,
            f = d.xOffset || 0,
            p = d.yOffset || 0,
            h = m[0],
            b = m[1],
            k = m[2],
            v = m[3],
            _ = m[4],
            y = m[5],
            x = a.split(" "),
            N = parseFloat(x[0]) || 0,
            j = parseFloat(x[1]) || 0;
          t ? m !== Fs && (c = h * v - b * k) && (o = N * (v / c) + j * (-k / c) + (k * y - v * _) / c, l = N * (-b / c) + j * (h / c) - (h * y - b * _) / c, N = o, j = l) : (n = Ts(e), N = n.x + (~x[0].indexOf("%") ? N / 100 * n.width : N), j = n.y + (~(x[1] || x[0]).indexOf("%") ? j / 100 * n.height : j)), s || !1 !== s && d.smooth ? (_ = N - g, y = j - u, d.xOffset = f + (_ * h + y * k) - _, d.yOffset = p + (_ * b + y * v) - y) : d.xOffset = d.yOffset = 0, d.xOrigin = N, d.yOrigin = j, d.smooth = !!s, d.origin = a, d.originIsAbsolute = !!t, e.style[hs] = "0px 0px", r && (Ms(r, d, "xOrigin", g, N), Ms(r, d, "yOrigin", u, j), Ms(r, d, "xOffset", f, d.xOffset), Ms(r, d, "yOffset", p, d.yOffset)), e.setAttribute("data-svg-origin", N + " " + j)
        },
        qs = (e, a) => {
          let t = e._gsap || new Ba(e);
          if ("x" in t && !a && !t.uncache) return t;
          let s, i, r, n, c, o, l, d, m, g, u, p, h, b, k, v, _, y, x, N, j, w, S, C, T, I, L, M, E, P, z, B, O = e.style,
            A = t.scaleX < 0,
            D = "px",
            V = "deg",
            $ = getComputedStyle(e),
            F = xs(e, hs) || "0";
          return s = i = r = o = l = d = m = g = u = 0, n = c = 1, t.svg = !(!e.getCTM || !Is(e)), $.translate && ("none" === $.translate && "none" === $.scale && "none" === $.rotate || (O[ps] = ("none" !== $.translate ? "translate3d(" + ($.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== $.rotate ? "rotate(" + $.rotate + ") " : "") + ("none" !== $.scale ? "scale(" + $.scale.split(" ").join(",") + ") " : "") + ("none" !== $[ps] ? $[ps] : "")), O.scale = O.rotate = O.translate = "none"), b = Us(e, t.svg), t.svg && (t.uncache ? (T = e.getBBox(), F = t.xOrigin - T.x + "px " + (t.yOrigin - T.y) + "px", C = "") : C = !a && e.getAttribute("data-svg-origin"), Ws(e, C || F, !!C || t.originIsAbsolute, !1 !== t.smooth, b)), p = t.xOrigin || 0, h = t.yOrigin || 0, b !== Fs && (y = b[0], x = b[1], N = b[2], j = b[3], s = w = b[4], i = S = b[5], 6 === b.length ? (n = Math.sqrt(y * y + x * x), c = Math.sqrt(j * j + N * N), o = y || x ? Zt(x, y) * Qt : 0, m = N || j ? Zt(N, j) * Qt + o : 0, m && (c *= Math.abs(Math.cos(m * Kt))), t.svg && (s -= p - (p * y + h * N), i -= h - (p * x + h * j))) : (B = b[6], P = b[7], L = b[8], M = b[9], E = b[10], z = b[11], s = b[12], i = b[13], r = b[14], k = Zt(B, E), l = k * Qt, k && (v = Math.cos(-k), _ = Math.sin(-k), C = w * v + L * _, T = S * v + M * _, I = B * v + E * _, L = w * -_ + L * v, M = S * -_ + M * v, E = B * -_ + E * v, z = P * -_ + z * v, w = C, S = T, B = I), k = Zt(-N, E), d = k * Qt, k && (v = Math.cos(-k), _ = Math.sin(-k), C = y * v - L * _, T = x * v - M * _, I = N * v - E * _, z = j * _ + z * v, y = C, x = T, N = I), k = Zt(x, y), o = k * Qt, k && (v = Math.cos(k), _ = Math.sin(k), C = y * v + x * _, T = w * v + S * _, x = x * v - y * _, S = S * v - w * _, y = C, w = T), l && Math.abs(l) + Math.abs(o) > 359.9 && (l = o = 0, d = 180 - d), n = le(Math.sqrt(y * y + x * x + N * N)), c = le(Math.sqrt(S * S + B * B)), k = Zt(w, S), m = Math.abs(k) > 2e-4 ? k * Qt : 0, u = z ? 1 / (z < 0 ? -z : z) : 0), t.svg && (C = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !Gs(xs(e, ps)), C && e.setAttribute("transform", C))), Math.abs(m) > 90 && Math.abs(m) < 270 && (A ? (n *= -1, m += o <= 0 ? 180 : -180, o += o <= 0 ? 180 : -180) : (c *= -1, m += m <= 0 ? 180 : -180)), a = a || t.uncache, t.x = s - ((t.xPercent = s && (!a && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + D, t.y = i - ((t.yPercent = i && (!a && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + D, t.z = r + D, t.scaleX = le(n), t.scaleY = le(c), t.rotation = le(o) + V, t.rotationX = le(l) + V, t.rotationY = le(d) + V, t.skewX = m + V, t.skewY = g + V, t.transformPerspective = u + D, (t.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (O[hs] = Xs(F)), t.xOffset = t.yOffset = 0, t.force3D = f.force3D, t.renderTransform = t.svg ? ai : Xt ? ei : Qs, t.uncache = 0, t
        },
        Xs = e => (e = e.split(" "))[0] + " " + e[1],
        Ys = (e, a, t) => {
          let s = We(a);
          return le(parseFloat(a) + parseFloat(zs(e, "x", t + "px", s))) + s
        },
        Qs = (e, a) => {
          a.z = "0px", a.rotationY = a.rotationX = "0deg", a.force3D = 0, ei(e, a)
        },
        Ks = "0deg",
        Zs = "0px",
        Js = ") ",
        ei = function(e, a) {
          let {
            xPercent: t,
            yPercent: s,
            x: i,
            y: r,
            z: n,
            rotation: c,
            rotationY: o,
            rotationX: l,
            skewX: d,
            skewY: m,
            scaleX: g,
            scaleY: u,
            transformPerspective: f,
            force3D: p,
            target: h,
            zOrigin: b
          } = a || this, k = "", v = "auto" === p && e && 1 !== e || !0 === p;
          if (b && (l !== Ks || o !== Ks)) {
            let e, a = parseFloat(o) * Kt,
              t = Math.sin(a),
              s = Math.cos(a);
            a = parseFloat(l) * Kt, e = Math.cos(a), i = Ys(h, i, t * e * -b), r = Ys(h, r, -Math.sin(a) * -b), n = Ys(h, n, s * e * -b + b)
          }
          f !== Zs && (k += "perspective(" + f + Js), (t || s) && (k += "translate(" + t + "%, " + s + "%) "), (v || i !== Zs || r !== Zs || n !== Zs) && (k += n !== Zs || v ? "translate3d(" + i + ", " + r + ", " + n + ") " : "translate(" + i + ", " + r + Js), c !== Ks && (k += "rotate(" + c + Js), o !== Ks && (k += "rotateY(" + o + Js), l !== Ks && (k += "rotateX(" + l + Js), d === Ks && m === Ks || (k += "skew(" + d + ", " + m + Js), 1 === g && 1 === u || (k += "scale(" + g + ", " + u + Js), h.style[ps] = k || "translate(0, 0)"
        },
        ai = function(e, a) {
          let t, s, i, r, n, {
              xPercent: c,
              yPercent: o,
              x: l,
              y: d,
              rotation: m,
              skewX: g,
              skewY: u,
              scaleX: f,
              scaleY: p,
              target: h,
              xOrigin: b,
              yOrigin: k,
              xOffset: v,
              yOffset: _,
              forceCSS: y
            } = a || this,
            x = parseFloat(l),
            N = parseFloat(d);
          m = parseFloat(m), g = parseFloat(g), u = parseFloat(u), u && (u = parseFloat(u), g += u, m += u), m || g ? (m *= Kt, g *= Kt, t = Math.cos(m) * f, s = Math.sin(m) * f, i = Math.sin(m - g) * -p, r = Math.cos(m - g) * p, g && (u *= Kt, n = Math.tan(g - u), n = Math.sqrt(1 + n * n), i *= n, r *= n, u && (n = Math.tan(u), n = Math.sqrt(1 + n * n), t *= n, s *= n)), t = le(t), s = le(s), i = le(i), r = le(r)) : (t = f, r = p, s = i = 0), (x && !~(l + "").indexOf("px") || N && !~(d + "").indexOf("px")) && (x = zs(h, "x", l, "px"), N = zs(h, "y", d, "px")), (b || k || v || _) && (x = le(x + b - (b * t + k * i) + v), N = le(N + k - (b * s + k * r) + _)), (c || o) && (n = h.getBBox(), x = le(x + c / 100 * n.width), N = le(N + o / 100 * n.height)), n = "matrix(" + t + "," + s + "," + i + "," + r + "," + x + "," + N + ")", h.setAttribute("transform", n), y && (h.style[ps] = n)
        },
        ti = function(e, a, t, s, i) {
          let r, n, c = 360,
            o = j(i),
            l = parseFloat(i) * (o && ~i.indexOf("rad") ? Qt : 1) - s,
            d = s + l + "deg";
          return o && (r = i.split("_")[1], "short" === r && (l %= c, l !== l % 180 && (l += l < 0 ? c : -360)), "cw" === r && l < 0 ? l = (l + 36e9) % c - ~~(l / c) * c : "ccw" === r && l > 0 && (l = (l - 36e9) % c - ~~(l / c) * c)), e._pt = n = new ot(e._pt, a, t, s, l, is), n.e = d, n.u = "deg", e._props.push(t), n
        },
        si = (e, a) => {
          for (let t in a) e[t] = a[t];
          return e
        },
        ii = (e, a, t) => {
          let s, i, r, n, c, o, l, d, m = si({}, t._gsap),
            g = t.style;
          for (i in m.svg ? (r = t.getAttribute("transform"), t.setAttribute("transform", ""), g[ps] = a, s = qs(t, 1), Ls(t, ps), t.setAttribute("transform", r)) : (r = getComputedStyle(t)[ps], g[ps] = a, s = qs(t, 1), g[ps] = r), Yt) r = m[i], n = s[i], r !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (l = We(r), d = We(n), c = l !== d ? zs(t, i, r, d) : parseFloat(r), o = parseFloat(n), e._pt = new ot(e._pt, s, i, c, o - c, ss), e._pt.u = d || 0, e._props.push(i));
          si(s, m)
        };
      oe("padding,margin,Width,Radius", ((e, a) => {
        let t = "Top",
          s = "Right",
          i = "Bottom",
          r = "Left",
          n = (a < 3 ? [t, s, i, r] : [t + r, t + s, i + s, i + r]).map((t => a < 2 ? e + t : "border" + t + e));
        $s[a > 1 ? "border" + e : e] = function(e, a, t, s, i) {
          let r, c;
          if (arguments.length < 4) return r = n.map((a => Bs(e, a, t))), c = r.join(" "), 5 === c.split(r[0]).length ? r[0] : c;
          r = (s + "").split(" "), c = {}, n.forEach(((e, a) => c[e] = r[a] = r[a] || r[(a - 1) / 2 | 0])), e.init(a, c, i)
        }
      }));
      const ri = {
        name: "css",
        register: ws,
        targetTest: e => e.style && e.nodeType,
        init(e, a, t, s, i) {
          let r, n, c, o, l, d, m, g, u, p, h, b, k, v, _, y, x = this._props,
            N = e.style,
            w = t.vars.startAt;
          for (m in Gt || ws(), this.styles = this.styles || _s(e), y = this.styles.props, this.tween = t, a)
            if ("autoRound" !== m && (n = a[m], !ee[m] || !Ra(m, a, t, s, e, i)))
              if (l = typeof n, d = $s[m], "function" === l && (n = n.call(t, s, e, i), l = typeof n), "string" === l && ~n.indexOf("random(") && (n = ra(n)), d) d(this, e, m, n, t) && (_ = 1);
              else if ("--" === m.substr(0, 2)) r = (getComputedStyle(e).getPropertyValue(m) + "").trim(), n += "", va.lastIndex = 0, va.test(r) || (g = We(r), u = We(n)), u ? g !== u && (r = zs(e, m, r, u) + u) : g && (n += g), this.add(N, "setProperty", r, n, s, i, 0, 0, m), x.push(m), y.push(m, 0, N[m]);
          else if ("undefined" !== l) {
            if (w && m in w ? (r = "function" == typeof w[m] ? w[m].call(t, s, e, i) : w[m], j(r) && ~r.indexOf("random(") && (r = ra(r)), We(r + "") || (r += f.units[m] || We(Bs(e, m)) || ""), "=" === (r + "").charAt(1) && (r = Bs(e, m))) : r = Bs(e, m), o = parseFloat(r), p = "string" === l && "=" === n.charAt(1) && n.substr(0, 2), p && (n = n.substr(2)), c = parseFloat(n), m in ts && ("autoAlpha" === m && (1 === o && "hidden" === Bs(e, "visibility") && c && (o = 0), y.push("visibility", 0, N.visibility), Ms(this, N, "visibility", o ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), "scale" !== m && "transform" !== m && (m = ts[m], ~m.indexOf(",") && (m = m.split(",")[0]))), h = m in Yt, h)
              if (this.styles.save(m), b || (k = e._gsap, k.renderTransform && !a.parseTransform || qs(e, a.parseTransform), v = !1 !== a.smoothOrigin && k.smooth, b = this._pt = new ot(this._pt, N, ps, 0, 1, k.renderTransform, k, 0, -1), b.dep = 1), "scale" === m) this._pt = new ot(this._pt, k, "scaleY", k.scaleY, (p ? me(k.scaleY, p + c) : c) - k.scaleY || 0, ss), this._pt.u = 0, x.push("scaleY", m), m += "X";
              else {
                if ("transformOrigin" === m) {
                  y.push(hs, 0, N[hs]), n = Ds(n), k.svg ? Ws(e, n, 0, v, 0, this) : (u = parseFloat(n.split(" ")[2]) || 0, u !== k.zOrigin && Ms(this, k, "zOrigin", k.zOrigin, u), Ms(this, N, m, Xs(r), Xs(n)));
                  continue
                }
                if ("svgOrigin" === m) {
                  Ws(e, n, 1, v, 0, this);
                  continue
                }
                if (m in Rs) {
                  ti(this, k, m, o, p ? me(o, p + n) : n);
                  continue
                }
                if ("smoothOrigin" === m) {
                  Ms(this, k, "smooth", k.smooth, n);
                  continue
                }
                if ("force3D" === m) {
                  k[m] = n;
                  continue
                }
                if ("transform" === m) {
                  ii(this, n, e);
                  continue
                }
              }
            else m in N || (m = js(m) || m);
            if (h || (c || 0 === c) && (o || 0 === o) && !as.test(n) && m in N) g = (r + "").substr((o + "").length), c || (c = 0), u = We(n) || (m in f.units ? f.units[m] : g), g !== u && (o = zs(e, m, r, u)), this._pt = new ot(this._pt, h ? k : N, m, o, (p ? me(o, p + c) : c) - o, h || "px" !== u && "zIndex" !== m || !1 === a.autoRound ? ss : ns), this._pt.u = u || 0, g !== u && "%" !== u && (this._pt.b = r, this._pt.r = rs);
            else if (m in N) Os.call(this, e, m, r, p ? p + n : n);
            else if (m in e) this.add(e, m, r || e[m], p ? p + n : n, s, i);
            else if ("parseTransform" !== m) {
              H(m, n);
              continue
            }
            h || (m in N ? y.push(m, 0, N[m]) : y.push(m, 1, r || e[m])), x.push(m)
          }
          _ && ct(this)
        },
        render(e, a) {
          if (a.tween._time || !qt()) {
            let t = a._pt;
            for (; t;) t.r(e, t.d), t = t._next
          } else a.styles.revert()
        },
        get: Bs,
        aliases: ts,
        getSetter(e, a, t) {
          let s = ts[a];
          return s && s.indexOf(",") < 0 && (a = s), a in Yt && a !== hs && (e._gsap.x || Bs(e, "x")) ? t && Wt === t ? "scale" === a ? gs : ms : (Wt = t || {}) && ("scale" === a ? us : fs) : e.style && !C(e.style[a]) ? ls : ~a.indexOf("-") ? ds : Ja(e, a)
        },
        core: {
          _removeProperty: Ls,
          _getMatrix: Us
        }
      };
      yt.utils.checkPrefix = js, yt.core.getStyleSaver = _s,
        function(e, a, t, s) {
          let i = oe(e + "," + a + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            Yt[e] = 1
          }));
          oe(a, (e => {
            f.units[e] = "deg", Rs[e] = 1
          })), ts[i[13]] = e + "," + a, oe("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let a = e.split(":");
            ts[a[1]] = i[a[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          f.units[e] = "px"
        })), yt.registerPlugin(ri);
      const ni = yt.registerPlugin(ri) || yt;
      ni.core.Tween
    },
    26177: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(26855),
        i = t.n(s);
      const r = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        n = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}');
      var c = t(46632);
      const o = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        l = e => {
          let a, {
            type: t = o.SPINNING
          } = e;
          switch (t) {
            case o.THREE_DOTS:
              a = n;
              break;
            case o.SPINNING:
            default:
              a = r
          }
          return (0, c.jsx)(i(), {
            loop: !0,
            autoplay: !0,
            animationData: a,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    37017: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(71403),
        i = t(89779),
        r = t(58407),
        n = t(42756);
      var c = t(46632);
      const o = (0, n.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, s.useState)(""), n = (0, i.useNavigate)(), o = (0, r.useMutateState)();
        return (0, c.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-legacyb82052ce07e004075e77261c373bfc50",
          onSubmit: e => {
            e.preventDefault(), o({
              navOpen: !1
            }), document.activeElement?.blur(), n(`/search?q=${e.target.q.value}`)
          },
          role: "search",
          children: [(0, c.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, c.jsx)("input", {
            autoComplete: "off",
            defaultValue: t,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    22941: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(71403),
        i = t(72956),
        r = t.n(i),
        n = t(74401),
        c = t(42756);
      const o = {
        pillBtn: "rockstargames-sites-legacyf87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-sites-legacya8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-sites-legacya57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-sites-legacydaec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-sites-legacybd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-sites-legacya6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-sites-legacye88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-sites-legacyab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-sites-legacyc20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-sites-legacyb16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-sites-legacyd0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-sites-legacyd1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-sites-legacyd6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-sites-legacyf3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-sites-legacya6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-sites-legacyeade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-sites-legacya82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-sites-legacyd394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-sites-legacyf1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-sites-legacycdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-sites-legacyba4bd16bff2fbc40616457007b4a7442"
      };
      var l = t(46632);
      const {
        sanitize: d
      } = r(), m = e => {
        let {
          list: a,
          string: t,
          starColor: i,
          style: r,
          className: m,
          game: g,
          noImg: u,
          columns: f,
          mobileColumns: p
        } = e;
        const [h, b] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          b(a)
        }), [a]), t || a ? f && h ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--ordered-list-grid-column": f,
            "--ordered-list-grid-column-mobile": p ?? f
          },
          children: (0, l.jsx)("ol", {
            style: (0, c.safeStyles)(r),
            className: (0, n.classList)(o.itemList, o.noImg, o[i], o[g]),
            children: h.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ol", {
          style: (0, c.safeStyles)(r),
          className: (0, n.classList)(o.itemList, o.custom, u ? o.noImg : "", i ? o[i] : "", g ? o[g] : "", m ?? ""),
          children: a.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    63672: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(71403),
        i = t(72956),
        r = t.n(i),
        n = t(74401),
        c = t(42756);
      const o = {
        pillBtn: "rockstargames-sites-legacya89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-sites-legacybcce8ac50552b225f30d185d876a3e14",
        grid: "rockstargames-sites-legacyac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-sites-legacycaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-sites-legacyb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-sites-legacyd146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-sites-legacyba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-sites-legacyb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-sites-legacyaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-sites-legacyd244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-sites-legacyd90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-sites-legacyc3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-sites-legacyfe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-sites-legacyf5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-sites-legacyf4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-sites-legacyf6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-sites-legacyab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-sites-legacydc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-sites-legacyb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-sites-legacye4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-sites-legacyd4581a495de14e6762bb15debe5bb810"
      };
      var l = t(46632);
      const {
        sanitize: d
      } = r(), m = e => {
        let {
          list: a,
          string: t,
          starColor: i,
          style: r,
          className: m,
          game: g,
          noImg: u,
          columns: f,
          mobileColumns: p
        } = e;
        const [h, b] = (0, s.useState)(null), k = t ? t.split("_#_") : a;
        return (0, s.useEffect)((() => {
          b(a)
        }), [a]), t || a ? f && h ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": p ?? f
          },
          children: (0, l.jsx)("ul", {
            style: (0, c.safeStyles)(r),
            className: (0, n.classList)(o.itemList, o.noImg, o[i], o[g]),
            children: h.map(((e, a) => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, a)))
          })
        }) : (0, l.jsx)("ul", {
          style: (0, c.safeStyles)(r),
          className: (0, n.classList)(o.itemList, o.custom, u ? o.noImg : "", i ? o[i] : "", g ? o[g] : "", m ?? ""),
          children: k.map(((e, a) => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    99718: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(71403),
        i = t(88038),
        r = t(46632);
      class n extends s.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e?.message ? e.toString() : "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        render() {
          return null !== this.state.error.code ? (0, r.jsx)(i.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, r.jsx)(n, {
            header: a,
            children: (0, r.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    88038: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(71403),
        i = t(42756),
        r = t(60285),
        n = t(37017);
      var c = t(46632);
      const o = (0, i.withTranslations)((e => {
        let {
          error: a,
          t,
          domain: i = ""
        } = e;
        console.error({
          error: a
        });
        let o = a?.message ?? t("error-404-new");
        o = t("error-404-new");
        const l = a?.code ?? 398,
          d = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          d && d?.current && d.current.focus()
        }), [d]), (0, c.jsxs)("div", {
          className: "rockstargames-sites-legacyd988ce20c420c26fc5e455279bf94cb9",
          children: [(0, c.jsx)("h3", {
            tabIndex: -1,
            ref: d,
            children: `${o} (${l})`
          }), (0, c.jsx)(r.A, {
            to: "/",
            children: t("Home")
          }), "clr" !== i && (0, c.jsx)(n.A, {})]
        })
      }))
    },
    13963: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        i = [{
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
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = i.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, i] = a;
            return i === t && (e = {
              site: s,
              subDomain: i
            }, !0)
          })) >= 0)), r = i[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    47325: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => Gn
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => Y,
        transitions: () => q,
        variants: () => X
      });
      var i = {};
      t.r(i), t.d(i, {
        Animations: () => s,
        LiteMotion: () => D,
        withFadeIn: () => R,
        withFadeUp: () => W
      });
      var r = {};
      t.r(r), t.d(r, {
        CharacterCard: () => ar,
        Menu: () => Fr,
        MenuButton: () => Hr
      });
      var n = {};
      t.r(n), t.d(n, {
        Art: () => kn,
        Link: () => vn
      });
      var c = {};
      t.r(c), t.d(c, {
        A: () => f.A,
        AlertDialog: () => ni,
        AudioPlayer: () => ns,
        Badge: () => wa,
        Brands: () => cs.A,
        Button: () => Ct,
        ButtonGroup: () => gs,
        CalloutSection: () => Pt,
        Carousel: () => ma,
        ConditionalBlock: () => hs,
        CookieAB: () => ys,
        CountryInputField: () => _s,
        Cta: () => xt,
        DescriptionArea: () => oa,
        DiscountsBadge: () => Ze,
        DotLoader: () => Ns,
        Dropdown: () => Ss,
        Embed: () => Ts,
        ExpandingPlatformButton: () => Ps,
        FadeInContent: () => Bs,
        GameSiteHeader: () => As,
        Gen9Button: () => ms,
        Gen9CoreCarousel: () => Vs,
        Grid: () => jt,
        HTMLElement: () => qe,
        Hero: () => qs,
        HookStore: () => us,
        ImageWithBadge: () => ea,
        InViewTracker: () => ka,
        LanguageSelector: () => Ks,
        LayeredImage: () => ei,
        Lightbox: () => ti,
        LoadingAnimation: () => En.A,
        MultiSourceImage: () => B,
        NewswireBlocks: () => bi,
        NewswireCard: () => di,
        NewswireList: () => ui,
        NewswireRelated: () => pi,
        NewswireTag: () => oi,
        OrderedList: () => ki.A,
        PackList: () => Ei,
        PackListMenu: () => $i,
        Paging: () => Gi,
        ParallaxCacheBuster: () => Ui,
        ParallaxInnerLayer: () => Xi,
        ParallaxOuterLayer: () => Qi,
        ParallaxWrapper: () => qi,
        ProfileSwitcher: () => r,
        PromoModule: () => Wr,
        Rating: () => N,
        ResponsiveFlexBox: () => Xr,
        ResponsiveFlexItem: () => Qr,
        ResponsiveGridBox: () => Zr,
        ResponsiveGridItem: () => en,
        ResponsiveImg: () => tn,
        ResponsiveSection: () => rn,
        RockstarLogo: () => nn,
        SafeHtml: () => on,
        ScrollSection: () => ln,
        ScrollToTop: () => dn,
        ScrollTracker: () => ja.A,
        SearchBox: () => mn.A,
        Separator: () => ra,
        Skeleton: () => Fe,
        SrcsetImage: () => Ne,
        StorybookWrapper: () => gn,
        TextFit: () => Ye,
        ThumbsGallery: () => qt,
        TinaModuleFetchNRender: () => He,
        TinaWrapper: () => un.A,
        TrackList: () => At,
        UnorderedList: () => sa.A,
        UserVote: () => hn,
        VideoCard: () => n,
        VideoCarousel: () => yn,
        VideoList: () => Tn,
        VisuallyHidden: () => In,
        Wasted: () => Ln.A,
        framer: () => i,
        useTinaModuleFetchByIds: () => Ge,
        withInViewTracker: () => ha,
        withSearchbarErrorBoundary: () => Mn.A,
        withSimpleErrorBoundary: () => b
      });
      var o = t(71403),
        l = t(58407),
        d = t(96717),
        m = t(42756),
        g = t(49948),
        u = t(40207),
        f = t(60285);
      var p = t(46632);
      class h extends o.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacyf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, p.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, p.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const b = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function(s) {
          return (0, p.jsx)(h, {
            header: a,
            hidden: t,
            children: (0, p.jsx)(e, {
              ...s
            })
          })
        }
      };
      var k = t(20066);
      const v = {
          rating: "rockstargames-sites-legacya1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-legacycba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-legacyff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-legacyd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        _ = (0, d.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var y = t(85913);
      const x = void 0 !== y.GameData ? y.GameData : GameDataDefault;
      (0, m.importAll)(t(4905));
      const N = b((0, d.withIntl)((e => {
        let {
          descriptors: a = null,
          footer: s = null,
          href: i,
          img: r = null,
          titleSlug: n = null,
          style: c = {},
          className: h
        } = e;
        const [b, k] = (0, o.useState)(!1), {
          inView: y
        } = (0, g.useInView)({
          threshold: .6
        }), [N, j] = (0, o.useState)({
          ratingDescriptors: a,
          ratingFooter: s,
          ratingImg: r,
          ratingUrl: i
        }), {
          track: w
        } = (0, u.useGtmTrack)(), S = (0, d.useIntl)(), {
          data: C
        } = (0, l.useQuery)(x, {
          variables: {
            titleSlug: n
          },
          skip: !n
        });
        if ((0, o.useEffect)((() => {
            C && j(C?.game)
          }), [C]), (0, o.useEffect)((() => {
            y && !b && N.img_rating && (w({
              event: "page_section_impression",
              element_placement: "rating"
            }), k(!0))
          }), [y]), !N.ratingImg) return null;
        const T = !!N.ratingDescriptors;
        return (0, p.jsxs)("div", {
          className: [v.rating, T ? v.withDescriptors : v.withOutDescriptors, h || ""].join(" "),
          style: (0, m.safeStyles)(c),
          children: [(0, p.jsx)(f.A, {
            to: N.ratingUrl,
            target: "_blank",
            children: (0, p.jsx)("img", {
              alt: S.formatMessage(_.components_ratings_link_alt, {
                rating: (I = N.ratingImg, I.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(73983)(`./${N.ratingImg}`)
            })
          }), T && (0, p.jsxs)("div", {
            className: v.text,
            children: [(0, p.jsx)("p", {
              className: v.descriptors,
              dangerouslySetInnerHTML: {
                __html: N?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), N.ratingFooter && (0, p.jsx)("hr", {}), N.ratingFooter && (0, p.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: N.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var I
      }), k));
      var j = t(66335),
        w = t.n(j),
        S = t(17891);
      const C = (0, o.createContext)(void 0),
        T = e => {
          let {
            children: a
          } = e;
          const [t, s] = (0, o.useState)([]), i = e => {
            s(e)
          }, r = (0, o.useMemo)((() => ({
            collections: t,
            updateGalleryCollections: i
          })), [t]);
          return (0, p.jsx)(C.Provider, {
            value: r,
            children: a
          })
        };
      var I = t(74401),
        L = t(31879),
        M = t.n(L),
        E = t(28089);
      const P = "rockstargames-sites-legacyeb64520e04e486931cd65dc5b3fa61e8",
        z = e => {
          let {
            alt: a,
            className: s,
            src: i,
            style: r
          } = e;
          const [n, c] = (0, m.usePreloadImg)(i);
          let o = i;
          !1 === n && ("rockstargames-sites-legacyee609f31f3685766122c2c6fc0ef0710" === s && (o = t(14572)), o = t(8820));
          const {
            width: l,
            height: d
          } = c, g = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...r
          };
          return (0, p.jsx)("img", {
            src: o,
            className: s ?? "",
            alt: a,
            style: g
          })
        },
        B = e => {
          let {
            className: a,
            style: s = {},
            image: i = {},
            imageStyle: r = {}
          } = e, {
            alt: n,
            src: c
          } = (0, E.useImageParser)(i);
          const {
            isMobile: o
          } = (0, m.useWindowResize)();
          c.desktop || c.mobile || (n = "", c = {
            mobile: t(14572),
            desktop: t(8820)
          });
          let l = i.frame ? `${i.frame} ${P}` : P;
          return (0, p.jsx)("div", {
            className: l,
            style: s,
            children: (0, p.jsx)(z, {
              style: {
                ...r,
                ...i?.style
              },
              src: o ? c.mobile || c.desktop : c?.desktop || c?.mobile,
              alt: n,
              className: a
            })
          })
        };
      var O = t(80791);
      const A = (0, o.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, i = O.m[s];
        return (0, p.jsx)(O.LazyMotion, {
          features: O.domAnimation,
          children: (0, p.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      A.displayName = "LiteMotion";
      const D = A,
        V = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        $ = {
          ease: "easeIn",
          duration: .4
        },
        F = e => {
          let {
            children: a
          } = e;
          return (0, p.jsx)(O.motion.div, Object.assign({
            className: "rockstargames-sites-legacyf0ee4e641f1ac92151be887c9ebb8392",
            variants: V,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: $
          }, {
            children: a
          }))
        },
        R = e => a => (0, p.jsx)(F, {
          children: (0, p.jsx)(e, Object.assign({}, a))
        }),
        G = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        H = {
          ease: "easeIn",
          duration: .75
        },
        U = e => {
          let {
            children: a
          } = e;
          return (0, p.jsx)(O.motion.div, {
            className: "rockstargames-sites-legacya479a10c5475b17a0564b60fecf98c8b",
            variants: G,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: H,
            children: a
          })
        },
        W = e => a => (0, p.jsx)(U, {
          children: (0, p.jsx)(e, {
            ...a
          })
        }),
        q = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        X = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        Y = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return X[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Q = t(70834);
      const K = {
          pillBtn: "rockstargames-sites-legacyb141beea308c3749c34ab64661bd85c1",
          selected: "rockstargames-sites-legacya6585d2a1bd4d314b6fdfc23a672f56f",
          container: "rockstargames-sites-legacydf5ea4a5af035a8163d804a8cdf68ebe",
          flipped: "rockstargames-sites-legacya5e6219f9e94da0ddc32db6157955b27",
          singleColumn: "rockstargames-sites-legacyec7889c9a1756bd738ed2c60980235de",
          large: "rockstargames-sites-legacyb00fed1ab4a38ee72bdd090fc8ccf579",
          imgVideo: "rockstargames-sites-legacyd287a65530a0979438e4faf8de287dca",
          content: "rockstargames-sites-legacyf41068d33b7b452cbb738957b5013622",
          title: "rockstargames-sites-legacyb46a2f962ed1e4678b99b8acfb86205e",
          headerLogo: "rockstargames-sites-legacye2b0e633ecf083151d9e2d5f9fdcf0bd",
          blurb: "rockstargames-sites-legacyb9744fcecb5ed02c5413d6ab530cfb1e",
          text: "rockstargames-sites-legacya1b4b206bf37247459ee82dee4121562",
          footnote: "rockstargames-sites-legacye3ade690d81b31192fb1f29b38d31211",
          rdrUltra: "rockstargames-sites-legacya1c4a1ca44e89c5ab32ef4e4a1cc06a6",
          universalCyrillic: "rockstargames-sites-legacyebc2801def19a848a9aa6f01927d6053"
        },
        Z = R((e => {
          let {
            title: a = "",
            headerLogo: t,
            body: s,
            footnote: i,
            image: r,
            videoId: n,
            customHeaderFont: c,
            setVideoAsDefault: l,
            large: d = !1,
            image_on_right: m = !1,
            style: g = {},
            className: f = "",
            ...h
          } = e;
          const {
            track: b
          } = (0, u.useGtmTrack)(), {
            ref: k,
            inView: v
          } = (0, Q.useInView)({
            threshold: .6
          }), [_, y] = (0, o.useState)(!1), [x, N] = (0, o.useState)(!1), j = c ? K[c] : "", w = t?._memoq?.maxHeight || "auto", S = t?._memoq?.maxWidth || "auto";
          return (0, o.useEffect)((() => {
            N(t?.setLogoAsDefault || !1)
          }), []), (0, o.useEffect)((() => {
            v && !_ && (b({
              event: "page_section_impression",
              element_placement: h?._memoq?.title?.toLowerCase()
            }), y(!0))
          }), [v]), (0, p.jsxs)("div", {
            className: (0, I.classList)(K.container, d ? K.large : "", m ? K.flipped : "", r ? "" : K.singleColumn, f),
            style: g,
            ref: k,
            "data-testid": "imageVideoGroupContainer",
            children: [l && n ? (0, p.jsx)(M(), {
              className: K.imgVideo,
              autoplay: !1,
              id: n
            }) : r ? (r.alt = r?.alt ?? r?._memoq?.alt ?? "", (0, p.jsx)(B, {
              className: K.imgVideo,
              image: r
            })) : null, (0, p.jsx)("div", {
              className: K.content,
              children: (0, p.jsxs)("div", {
                className: K.text,
                children: [(() => {
                  const e = t?.image,
                    s = t?.image?.alt ?? t?.image?._memoq?.alt,
                    i = a.replace(/\s+/g, "-").toLowerCase();
                  return t && (t.image.alt = s), x && e ? (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsx)(B, {
                      className: K.headerLogo,
                      image: e,
                      imageStyle: {
                        maxHeight: w,
                        maxWidth: S,
                        margin: 0
                      }
                    }), (0, p.jsx)("h2", {
                      id: `${i}-section`,
                      style: {
                        display: "none"
                      },
                      children: a
                    })]
                  }) : a && (0, p.jsx)("h2", {
                    className: [K.title, j].join(" "),
                    children: a
                  })
                })(), s ? (0, p.jsxs)(p.Fragment, {
                  children: [(0, p.jsx)("div", {
                    className: K.blurb,
                    dangerouslySetInnerHTML: {
                      __html: (C = s, C ? C.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), i && (0, p.jsx)("small", {
                    className: K.footnote,
                    dangerouslySetInnerHTML: {
                      __html: i
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var C
        })),
        J = {
          pillBtn: "rockstargames-sites-legacyf911d1a5e313009fd5aa802356519700",
          selected: "rockstargames-sites-legacyc298fc2a48eb605ace08e9ef5e8a466d",
          featureBlock: "rockstargames-sites-legacyd1c356d016267549c7e470423b24da6b",
          featuresContainer: "rockstargames-sites-legacyfb23cb40e1cae664d75b9489276d29e2"
        },
        ee = e => {
          let {
            className: a,
            id: t,
            features: s,
            backgroundImageGroup: i
          } = e;
          const r = (0, I.useGetCdnSource)(i?.desktop?.image),
            n = (0, I.useGetCdnSource)(i?.topMask?.mask),
            c = (0, I.useGetCdnSource)(i?.bottomMask?.mask),
            o = !!c,
            l = {
              "--fb-bg-image": `url(${r})`,
              "--fb-top-mask": `url(${n})`,
              "--fb-bottom-mask": `url(${c})`
            };
          return s.length ? (0, p.jsx)("section", {
            style: l,
            className: [J.featureBlock, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            "data-has-mask": o,
            children: (0, p.jsx)("div", {
              className: J.featuresContainer,
              children: s.map((e => (0, p.jsx)(Z, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var ae = t(25076);

      function te(e) {
        return e ? {
          "--gradient-start-color": ie(se(e?.startColor), e?.startOpacity),
          "--gradient-end-color": ie(se(e?.endColor), e?.endOpacity)
        } : {}
      }

      function se(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function ie(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function re(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const ne = {
          pillBtn: "rockstargames-sites-legacyb89c30e242bdf89d0e7259dd9dd945d6",
          selected: "rockstargames-sites-legacya17a1cbd00f6cdd8146dc110d1a50de0",
          button: "rockstargames-sites-legacye5b4ce409c50969f5b68ea7ef1b93839",
          imageBackground: "rockstargames-sites-legacycceeca79d01852e2a15b9195b5dcfeca",
          cardArtworkIcon: "rockstargames-sites-legacycfd487a9f20a7a29eff544a2a31905bc",
          cardDownloadIcon: "rockstargames-sites-legacya7f13d96c9c6451e1a6cba5b26134632",
          cardIcon: "rockstargames-sites-legacyea1f56154989c823c96d3bcfe3b12b6c",
          cardPlayIcon: "rockstargames-sites-legacye61b6f6fd72977c289fc2f7843a93102",
          cardShopIcon: "rockstargames-sites-legacyc716598a9353b12f9078a38244075153",
          textContainer: "rockstargames-sites-legacybc51f5de54c905471ea9b3dac3c3d995",
          heading: "rockstargames-sites-legacya1656771fa6019e4e1469faf9a7893a8"
        },
        ce = e => {
          let {
            title: a,
            subtitle: t,
            cardType: s,
            textColor: i,
            link: r,
            images: n,
            justifyContentHorizontally: c,
            justifyContentVertically: o,
            gradient: l
          } = e;
          const {
            track: d
          } = (0, u.useGtmTrack)(), m = (0, I.useGetCdnSource)(n?.mobile?.image?.full_src ?? n?.mobile?.image), g = (0, I.useGetCdnSource)(n?.desktop?.image?.full_src ?? m), f = {
            "--aspect-ratio-mobile": n?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": n?.desktop?.aspectRatio ?? "",
            justifyContent: c ?? ""
          }, h = {
            justifyContent: o ?? ""
          }, b = {
            color: i ?? "",
            fontWeight: 700
          }, k = {
            ...te(l),
            "--gradient-end-percentage": `${re(l?.endPercentage)}%`,
            "--gradient-angle": `${re(l?.angle)}deg`
          }, v = {
            mobile: m,
            desktop: g,
            alt: a
          };
          return (0, p.jsxs)(ae.NavLink, {
            to: r ?? "",
            className: ne.button,
            style: {
              ...f,
              ...k
            },
            onClick: () => {
              d({
                event: "card_click",
                element_placement: a?.toLowerCase()
              })
            },
            children: [("audio" === s || "video" === s) && (0, p.jsx)("div", {
              className: ne.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, p.jsx)("div", {
                    role: "button",
                    className: ne.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, p.jsx)("div", {
                    role: "button",
                    className: ne.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, p.jsx)("div", {
                    role: "button",
                    className: ne.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, p.jsx)("div", {
                    role: "button",
                    className: ne.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, p.jsx)("div", {
                    role: "button",
                    className: ne.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(s), (0, p.jsx)(B, {
              className: ne.imageBackground,
              image: v
            }), (0, p.jsxs)("div", {
              className: ne.textContainer,
              style: h,
              children: [(0, p.jsx)("p", {
                className: ne.text,
                style: b,
                children: (0, p.jsx)("span", {
                  children: t
                })
              }), (0, p.jsx)("h3", {
                className: ne.heading,
                style: b,
                children: (0, p.jsx)("span", {
                  children: a
                })
              })]
            })]
          })
        },
        oe = {
          pillBtn: "rockstargames-sites-legacyd5a9c8c0159690a7a024fd9724875b73",
          selected: "rockstargames-sites-legacydcafd64d75b4d6df79702aae18dbae55",
          relatedLinksContainer: "rockstargames-sites-legacyad16a3fe9284f5e246d328f0a123c897",
          buttonContainer: "rockstargames-sites-legacyd4851614d71a6c5efd31350dacf3d2d2"
        },
        le = e => {
          let {
            title: a,
            id: t,
            buttons: s = [],
            className: i,
            ...r
          } = e;
          const {
            track: n
          } = (0, u.useGtmTrack)(), {
            ref: c,
            inView: l
          } = (0, Q.useInView)({
            threshold: .6
          }), [d, m] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            l && !d && (n({
              event: "page_section_impression",
              element_placement: `related links group - ${r?._memoq?.title}`.toLowerCase()
            }), m(!0))
          }), [l]), s?.length ? (0, p.jsxs)("section", {
            className: [oe.relatedLinksContainer, i ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            ref: c,
            children: [(0, p.jsx)("h2", {
              children: a
            }), (0, p.jsx)("div", {
              className: oe.buttonContainer,
              children: s.map((e => (0, p.jsx)(ce, {
                title: e?.title,
                subtitle: e?.subtitle,
                cardType: e?.cardType,
                textColor: e?.textColor,
                link: e?.link,
                images: e?.images,
                justifyContentHorizontally: e?.justifyContentHorizontally,
                justifyContentVertically: e?.justifyContentVertically,
                gradient: e?.gradient
              }, e.key)))
            })]
          }) : null
        };
      var de, me = t(13953),
        ge = t(81902),
        ue = t(7471);

      function fe() {
        return fe = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, fe.apply(this, arguments)
      }
      const pe = e => o.createElement("svg", fe({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), de || (de = o.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var he;

      function be() {
        return be = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, be.apply(this, arguments)
      }
      const ke = e => o.createElement("svg", be({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), he || (he = o.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        ve = {
          pillBtn: "rockstargames-sites-legacyb5ec5d76744acc1d2d32bb583fccfb38",
          selected: "rockstargames-sites-legacybab7278693f954cdaefdb24b9de107fd",
          tabControlContainer: "rockstargames-sites-legacyb8f0bb480a94d4cbb36e9758142de89c",
          tabControl: "rockstargames-sites-legacyeb06325d5873f8e5eb585c5b806fdc26",
          withScroll: "rockstargames-sites-legacybc05233bdd50d635a7025ba0c38579c6",
          pills: "rockstargames-sites-legacyda2b54ef7d5516af64b1d82e7b27d65f",
          tabButton: "rockstargames-sites-legacybf5fd237d0ec1de987eb5364e09e4029",
          tabIconWrapper: "rockstargames-sites-legacydc7833948789552f2e834f72eec8f176",
          tabIcon: "rockstargames-sites-legacyce0f951e0b1e4e70466b4019c9205c8e",
          tabIconActive: "rockstargames-sites-legacyb4b50583d9aec12f0f6e5e9c88365083",
          tabLabel: "rockstargames-sites-legacyc553e6681beb4e5abd2a02594bf1b0da",
          tabBackground: "rockstargames-sites-legacyd5e306caea049e695f1f393e0122d9f4",
          tabLabelActive: "rockstargames-sites-legacyfafecd01cd09ee517d155cf5230e7527",
          pillButton: "rockstargames-sites-legacyba13339225e3a6b2d51ce5917333b282",
          nextPillButton: "rockstargames-sites-legacyc46ad6f90589c4eff59418ab5e53f345",
          previousPillButton: "rockstargames-sites-legacya2fef546cdf430ae233885dcb0bd7a1a",
          nextPillIcon: "rockstargames-sites-legacya4fe7c63715b8270d31ddcdf52c9d4cd",
          previousPillIcon: "rockstargames-sites-legacyefb8b83ba5b892c891163983cfbcda37"
        },
        _e = e => {
          let {
            data: a,
            onClick: t,
            activeTab: s
          } = e;
          const {
            track: i
          } = (0, u.useGtmTrack)(), r = (0, o.useRef)(null), [n, c] = (0, o.useState)(!1), [l, d] = (0, o.useState)(!1), [m, g] = (0, o.useState)(!1), f = e => () => {
            i({
              event: "component_tab_click",
              text: a[e]?._memoq?.name?.toLowerCase() ?? void 0,
              element_placement: "image gallery"
            }), r.current && r.current.slideTo(e), t && t(e)
          }, h = e => {
            e.isEnd ? c(!0) : c(!1), e.isBeginning ? d(!0) : d(!1)
          };
          return (0, o.useEffect)((() => {
            const e = () => {
              r.current && ((r.current.wrapperEl.clientWidth || 0) > (r.current.el.clientWidth || 0) ? (g(!0), r.current.params.centeredSlides = !0, r.current.params.centeredSlidesBounds = !0) : (g(!1), r.current.params.centeredSlides = !1, r.current.params.centeredSlidesBounds = !1), h(r.current))
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, p.jsxs)("div", {
            className: ve.tabControlContainer,
            children: [!l && m && (0, p.jsx)("div", {
              className: ve.previousPillButton,
              children: (0, p.jsx)("button", {
                type: "button",
                className: [ve.previousPillIcon, ve.pillButton].join(" "),
                onClick: () => {
                  r.current && (r.current?.slidePrev(), r.current.isBeginning ? d(!0) : d(!1), i({
                    event: "carousel_previous",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, p.jsx)(pe, {})
              })
            }), (0, p.jsx)("div", {
              className: [ve.tabControl, m ? ve.withScroll : ""].join(" "),
              children: (0, p.jsx)(ge.RC, {
                onBeforeInit: e => r.current = e,
                onInit: h,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                onSlideChange: h,
                onResize: h,
                className: ve.pills,
                children: a?.filter((e => {
                  let {
                    isHidden: a
                  } = e;
                  return 1 !== a
                }))?.map(((e, a) => (0, p.jsx)(ge.qr, {
                  children: (0, p.jsxs)(me.motion.button, {
                    type: "button",
                    className: [ve.tabButton, m ? ve.withScroll : ""].join(" "),
                    onClick: f(a),
                    "aria-label": e?.name,
                    "data-testid": "pill-button",
                    children: [e?.platform ? (0, p.jsx)("span", {
                      className: ve.tabIconWrapper,
                      children: (0, p.jsx)("img", {
                        className: [ve.tabIcon, a === s ? ve.tabIconActive : ""].join(" "),
                        src: (0, ue.A)(e?.platform?.toLowerCase()) || "",
                        alt: e?.platform
                      })
                    }) : (0, p.jsx)("span", {
                      className: [ve.tabLabel, a === s ? ve.tabLabelActive : ""].join(" "),
                      children: e?.name?.toUpperCase()
                    }), a === s ? (0, p.jsx)(me.motion.div, {
                      className: ve.tabBackground,
                      layoutId: "tabBackground"
                    }) : null]
                  }, `pill-tab-${e?.name}-${e?.key}`)
                }, `pill-tab-${e?.name}-${e?.key}`)))
              })
            }), !n && m && (0, p.jsx)("div", {
              className: ve.nextPillButton,
              children: (0, p.jsx)("button", {
                type: "button",
                className: [ve.nextPillIcon, ve.pillButton].join(" "),
                onClick: () => {
                  r.current && (r.current?.slideNext(), r.current.isEnd ? c(!0) : c(!1), i({
                    event: "carousel_next",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, p.jsx)(ke, {})
              })
            })]
          })
        };
      var ye = t(79493);
      const xe = {
          pillBtn: "rockstargames-sites-legacyeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-legacyd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-legacydc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-legacyee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-legacyfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-legacyf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ne = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: i,
            lazy: r = !1,
            decoding: n = "auto",
            sizes: c = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, o.useState)(!1);
          return (0, p.jsxs)("div", {
            className: xe.multiSourceContainer,
            children: [!l && (0, p.jsx)("img", {
              className: [t, xe.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, p.jsx)("img", {
              className: [xe.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, c.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: i,
              onLoad: () => {
                d(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: n
            })]
          });
          var m
        };
      var je = t(7117),
        we = t.n(je);
      const Se = {
          pillBtn: "rockstargames-sites-legacycddfe17e502302696a2a18d38b9ea12f",
          selected: "rockstargames-sites-legacyaa44fea12f7cccaac28adcb6dccc8b2c",
          overlay: "rockstargames-sites-legacye00a5d3afa546f2988ea1e3f0feeff6f",
          masonryDialog: "rockstargames-sites-legacycf35b902a7b176b8f441a26cec541385",
          masonryDialogWrapper: "rockstargames-sites-legacye27cfa77c71ac022c368727cfb5939bf",
          modalSection: "rockstargames-sites-legacye150ff000957f1abdedd2f778a289252",
          modalContainer: "rockstargames-sites-legacyf9a84d1aa4a82466ed8c097268d0f17c",
          modal: "rockstargames-sites-legacyf0220f0ae8f7dbe70be0588b094ff2db",
          modalMultisourceImage: "rockstargames-sites-legacyde964ef7e9b0ee8b126c8e062f721c24",
          galleryImage: "rockstargames-sites-legacyb03a3422c768396560fed11ce8bbdfa2",
          modalItem: "rockstargames-sites-legacya2e590af7b85d8de35783152ecba70d3",
          controlsWrapper: "rockstargames-sites-legacyf0435986d9016c518358866d8c687f86",
          modalControls: "rockstargames-sites-legacya031b4a8e7e0bca9385fd9d72abe31d7",
          modalNext: "rockstargames-sites-legacyefacba3d9c9f56f20a4f1e6199300482",
          modalPrevious: "rockstargames-sites-legacya8eae0863b916b8c7fffade41630732e",
          closeBtn: "rockstargames-sites-legacya8828f6be03d0d658e9981173985dd09"
        },
        Ce = e => {
          let {
            navigatePrevious: a,
            navigateNext: t,
            prevDisabled: s,
            nextDisabled: i
          } = e;
          return (0, p.jsxs)("div", {
            className: Se.modalControls,
            children: [(0, p.jsx)("button", {
              type: "button",
              "aria-label": "Previous",
              className: Se.modalPrevious,
              onClick: a,
              disabled: s
            }), (0, p.jsx)("button", {
              type: "button",
              "aria-label": "Next",
              className: Se.modalNext,
              onClick: t,
              disabled: i
            })]
          })
        },
        Te = e => {
          let {
            images: a,
            selectedImage: t,
            onClose: s
          } = e;
          const [i, r] = (0, o.useState)(a.findIndex((e => e?.image?.sources === t?.image?.sources))), [n, c] = (0, o.useState)(0 === i), [l, d] = (0, o.useState)(i + 1 >= a?.length), {
            track: m
          } = (0, u.useGtmTrack)(), g = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, f = (0, o.useCallback)((() => {
            const e = (i + 1) % a.length;
            e !== i && i !== a.length - 1 && (r(e), c(!1)), d(e === a.length - 1), m({
              event: "modal_next",
              element_placement: "image gallery modal",
              card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[i]?.key,
              position: i,
              view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [i, a.length]), h = (0, o.useCallback)((() => {
            const e = (i - 1 + a.length) % a.length;
            e !== i && 0 !== i && (r(e), d(!1)), c(0 === e), m({
              event: "modal_previous",
              element_placement: "image gallery modal",
              card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[i]?.key,
              position: i,
              view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [i, a.length]), b = a[i];
          return (0, o.useEffect)((() => {
            m({
              event: "trackPageview",
              view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [i]), (0, o.useEffect)((() => {
            const e = e => {
              "ArrowLeft" === e.key ? h() : "ArrowRight" === e.key ? f() : "Escape" === e.key && (m({
                event: "modal_close",
                element_placement: "image gallery modal",
                card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
                card_id: a[i]?.key,
                position: i,
                view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
              }), s())
            };
            return window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e)
            }
          }), [i, h, f, s]), (0, p.jsx)(me.AnimatePresence, {
            children: (0, p.jsx)(me.motion.div, {
              role: "presentation",
              className: Se.overlay,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: g,
              children: (0, p.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: Se.masonryDialog,
                onClick: e => (e => {
                  if (!e.currentTarget) return;
                  const t = e.currentTarget.getBoundingClientRect();
                  (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (m({
                    event: "modal_close",
                    element_placement: "image gallery modal",
                    card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
                    card_id: a[i]?.key,
                    position: i,
                    view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
                  }), s()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                })(e),
                children: (0, p.jsx)(we(), {
                  active: !0,
                  focusTrapOptions: {
                    allowOutsideClick: !0
                  },
                  children: (0, p.jsxs)("div", {
                    className: Se.masonryDialogWrapper,
                    children: [(0, p.jsxs)(me.motion.div, {
                      className: Se.controlsWrapper,
                      initial: {
                        opacity: 0
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: {
                        ease: "easeIn",
                        duration: .3,
                        delay: .5
                      },
                      "aria-controls": "legacyImageGallery-liveRegion",
                      children: [(0, p.jsx)(Ce, {
                        navigatePrevious: h,
                        navigateNext: f,
                        prevDisabled: n,
                        nextDisabled: l
                      }), (0, p.jsx)("button", {
                        type: "button",
                        id: "close",
                        "aria-label": "close",
                        className: Se.closeBtn,
                        onClick: () => {
                          m({
                            event: "modal_close",
                            element_placement: "image gallery modal",
                            card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
                            card_id: a[i]?.key,
                            position: i,
                            view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
                          }), s()
                        }
                      })]
                    }), (0, p.jsx)(me.motion.div, {
                      className: Se.modal,
                      initial: {
                        opacity: 0,
                        scale: .5
                      },
                      animate: {
                        opacity: 1,
                        scale: 1
                      },
                      transition: g,
                      id: "legacyImageGallery-liveRegion",
                      "aria-live": "polite",
                      role: "region",
                      children: (0, p.jsx)(B, {
                        className: [Se.modalMultisourceImage, Se.galleryImage].join(" "),
                        style: {
                          width: "100%",
                          height: "100%",
                          margin: 0
                        },
                        image: {
                          alt: b?.image?._memoq?.alt || "",
                          ...b?.image
                        }
                      })
                    })]
                  })
                })
              })
            })
          })
        },
        Ie = e => {
          let {
            image: a,
            item: t,
            handleImageClick: s
          } = e;
          const i = (0, I.useImageParser)(a?.image),
            r = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, p.jsx)(me.motion.button, {
            className: "rockstargames-sites-legacydc288c973cc46eff0b18afdc7c1a2d55",
            onClick: () => s(a),
            variants: t,
            children: (0, p.jsx)(Ne, {
              imageUrl: i?.src?.desktop,
              className: "rockstargames-sites-legacyfdb0ce7aa95e4780c4004cb01285dbc4",
              alt: r,
              sizes: [320, 480, 768, 1024, 1440],
              style: {
                width: "100%",
                height: "auto"
              }
            })
          }, `grid-item-${a?.key}`)
        },
        Le = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, i] = (0, o.useState)(null), {
            track: r
          } = (0, u.useGtmTrack)(), n = t.flat(2), {
            setBodyIsLocked: c
          } = (0, m.useBodyScrollable)("LegacyScreensModule"), l = e => {
            r({
              event: "card_click",
              element_placement: e?.image?.name ? e?.image?.name.toLowerCase() : void 0
            }), i(e), c(!0)
          }, d = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1
            }
          };
          return (0, p.jsx)("div", {
            className: "rockstargames-sites-legacyfe7788190b9cb04e85c4a1783a030749",
            children: (0, p.jsxs)(me.motion.div, {
              id: "rockstargames-sites-legacyc2800714e59f673ab1feb6dc33856d2f",
              className: "rockstargames-sites-legacyc68ed56cd26004d04a76ba9616bd7b7d",
              variants: {
                hidden: {
                  opacity: 0
                },
                show: {
                  opacity: 1,
                  transition: {
                    duration: .75
                  }
                }
              },
              initial: "hidden",
              animate: "show",
              children: [a?.map((e => (0, p.jsx)(Ie, {
                image: e,
                item: d,
                handleImageClick: l
              }, e?.key))), s && (0, ye.createPortal)((0, p.jsx)(Te, {
                images: n,
                selectedImage: s,
                onClose: () => {
                  i(null), c(!1)
                }
              }), document.body)]
            }, `gridItemContainer_${a?.key}`)
          })
        },
        Me = e => {
          let {
            image: a,
            item: t,
            handleImageClick: s
          } = e;
          const i = (0, I.useImageParser)(a?.image),
            r = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, p.jsx)(me.motion.button, {
            className: "rockstargames-sites-legacyf07fcde2e2f6109fbbfdd6f62df8ed44",
            onClick: () => s(a),
            variants: t,
            initial: "hidden",
            animate: "show",
            children: (0, p.jsx)(Ne, {
              imageUrl: i?.src?.desktop,
              className: "rockstargames-sites-legacya4625e54bd7c2b8ed599d8ecd45e957f",
              alt: r,
              sizes: [320, 480, 768, 1024, 1440]
            })
          }, `single-item-${a.key}`)
        },
        Ee = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, i] = (0, o.useState)(null), {
            track: r
          } = (0, u.useGtmTrack)(), n = t.flat(2), {
            setBodyIsLocked: c
          } = (0, m.useBodyScrollable)("LegacyScreensModule"), l = e => {
            r({
              event: "card_click",
              card_name: s?.image?.name.toLowerCase() ? s?.image?.name.toLowerCase() : void 0,
              card_id: e.key,
              link_url: void 0,
              element_placement: "image gallery"
            }), i(e), c(!0)
          }, d = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1,
              transition: {
                duration: .75
              }
            }
          };
          return (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacyf9e3f02888b417f6e3e2a85df60951ca",
            children: [a?.map((e => (0, p.jsx)(Me, {
              image: e,
              item: d,
              handleImageClick: l
            }, e?.key))), s && (0, ye.createPortal)((0, p.jsx)(Te, {
              images: n,
              selectedImage: s,
              onClose: () => {
                i(null), c(!1)
              }
            }), document.body)]
          })
        },
        Pe = "rockstargames-sites-legacyc6be48a89acd92cde0f692a4636e2018",
        ze = e => {
          let {
            sectionsPerPage: a,
            totalSections: t,
            currentPage: s,
            previousPage: i,
            nextPage: r,
            paginationPosition: n
          } = e;
          const c = [],
            o = Math.ceil(t / a),
            l = {
              "--pagination-position": `${n}`
            };
          for (let e = 1; e <= Math.ceil(t / a); e++) c.push(e);
          return o > 1 && (0, p.jsx)("div", {
            className: "rockstargames-sites-legacyb82c76457191f53e54104dd37926e61f",
            style: l,
            children: (0, p.jsxs)("div", {
              className: "rockstargames-sites-legacya028d7866aabd64309d2f16595a41dfc",
              style: {
                padding: 0
              },
              children: [(0, p.jsx)("div", {
                className: Pe,
                children: (0, p.jsx)("div", {
                  role: "button",
                  onClick: i,
                  className: "rockstargames-sites-legacyc1baf088087f1f7c909440c44829c4bc",
                  "aria-label": "Previous Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              }), (0, p.jsxs)("div", {
                className: "rockstargames-sites-legacye59a35dbb51f4d4a13b02996dd7cd97e",
                children: [(0, p.jsx)("span", {
                  children: s
                }), (0, p.jsx)("span", {
                  className: "rockstargames-sites-legacyc222ed80e6253558dcf221b008b009aa"
                }), (0, p.jsx)("span", {
                  children: o
                })]
              }), (0, p.jsx)("div", {
                className: Pe,
                children: (0, p.jsx)("div", {
                  role: "button",
                  onClick: r,
                  className: "rockstargames-sites-legacya18fb737f34833b701f04bc55d3b9100",
                  "aria-label": "Next Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              })]
            })
          })
        },
        Be = {
          pillBtn: "rockstargames-sites-legacye7b4fc51f52229f777f0e1e73bbdf272",
          selected: "rockstargames-sites-legacyf502c4a06616ae1d2c3fcd246546b117",
          tabControl: "rockstargames-sites-legacyed96eb2736423f33df991a2b0f1a4a44",
          galleryWrapper: "rockstargames-sites-legacyb2206cf025f10d7a479c5d1ec974b176",
          gridItemWrapper: "rockstargames-sites-legacya4dc6f6c719ebc2a3a653d41e531f6cc",
          noImagesContainer: "rockstargames-sites-legacyf8d203979ec2fae95f7d520e87a32937",
          noImages: "rockstargames-sites-legacye4465927e1fa74e8af9a3845de529b99",
          unsupportedSection: "rockstargames-sites-legacyf55fcb75f5431e8dcc27f6d447e0b720",
          heading: "rockstargames-sites-legacycd67d15f0f4fdf0894c1de7368e1d109"
        },
        Oe = () => (0, p.jsx)("div", {
          className: Be.noImagesContainer,
          children: (0, p.jsx)("div", {
            className: Be.noImages,
            children: (0, p.jsx)("div", {
              className: Be.heading,
              children: (0, p.jsxs)("span", {
                className: Be.text,
                children: [(0, p.jsx)("h3", {
                  children: "Unsupported Section Type"
                }), (0, p.jsx)("p", {
                  children: "This section type is not supported."
                })]
              })
            })
          })
        }),
        Ae = e => {
          let {
            sections: a = [],
            paginationSettings: t
          } = e;
          const s = [],
            [i] = (0, o.useState)(t?.sectionsPerPage || 4),
            [r, n] = (0, o.useState)(1),
            c = r * i,
            l = c - i,
            d = a.slice(l, c);
          return 0 === a?.length ? (0, p.jsx)("div", {
            className: Be.gallerWrapper,
            children: (0, p.jsx)("div", {
              className: Be.noImages,
              children: (0, p.jsx)("div", {
                className: Be.heading,
                children: (0, p.jsx)("span", {
                  className: Be.text,
                  children: "No images available"
                })
              })
            })
          }) : (a?.map((e => s.push(e?.images))), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(me.motion.div, {
              className: Be.galleryWrapper,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                ease: "easeIn",
                duration: .5
              },
              style: {
                "--sections-per-page": i
              },
              children: d?.map(((e, a) => {
                let t;
                if ("1x1" === e?.type) t = Le;
                else {
                  if ("2x2" !== e?.type) return (0, p.jsx)(Oe, {}, `unsupported-section-${a}`);
                  t = Ee
                }
                return (0, p.jsx)(t, {
                  images: e?.images,
                  gallery: s
                }, `grid-section-${e?.type}-${a})}`)
              }))
            }), t?.paginationEnabled && (0, p.jsx)(ze, {
              sectionsPerPage: i,
              totalSections: a.length,
              currentPage: r,
              previousPage: () => {
                n(1 !== r ? r - 1 : Math.ceil(a.length / i))
              },
              nextPage: () => {
                r !== Math.ceil(a.length / i) ? n(r + 1) : n(1)
              },
              paginationPosition: t?.paginationPosition || "center"
            })]
          }))
        },
        De = {
          pillBtn: "rockstargames-sites-legacyed98e22563d8490eb0533160017b708c",
          selected: "rockstargames-sites-legacye85dd947b9804d525afd5cb324d773b0",
          sectionWrapper: "rockstargames-sites-legacyc4864c694e697cf6670fb02180eafb8b",
          sectionContent: "rockstargames-sites-legacye13073a5530131ed33650976b5cb2476",
          actionBar: "rockstargames-sites-legacyed6df74e4f0bd8f6dbd2f731e812031c",
          heading: "rockstargames-sites-legacyc64d30742a1f34b9c2d2b1db3ce95b08",
          tabControl: "rockstargames-sites-legacye2ea622bd1616255f4c27c3370c39eec",
          tabButton: "rockstargames-sites-legacya40c645ea4157d9849a8be796acaf1a9",
          activeTabButton: "rockstargames-sites-legacyb4b04984b191b5aaa71f03a398136d41",
          tabLabel: "rockstargames-sites-legacyd6f74ab203d3584f4b8bdca3d6ce59cb",
          tabBackground: "rockstargames-sites-legacyc7f65be92a1883a15d2c588cb7042042",
          rdrUltra: "rockstargames-sites-legacye746470dfd3e3c070a41bb4846b44a58",
          universalCyrillic: "rockstargames-sites-legacyf39368204eb24134b55790e846806916",
          helveticaNow: "rockstargames-sites-legacyc8b5986c219588bac8b87dbb162c3fda"
        },
        Ve = R((e => {
          let {
            imageGallery: a
          } = e;
          const {
            track: t
          } = (0, u.useGtmTrack)(), {
            ref: s,
            inView: i
          } = (0, Q.useInView)({
            threshold: .6
          }), [r, n] = (0, o.useState)(!1), [c, l] = (0, o.useState)(0), d = a?.customHeaderFont ? De[a?.customHeaderFont] : "", {
            collections: m,
            updateGalleryCollections: g
          } = (() => {
            const e = (0, o.useContext)(C);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          (0, o.useEffect)((() => {
            g(a?.collections)
          }), [a]), (0, o.useEffect)((() => {
            i && !r && (t({
              event: "page_section_impression",
              element_placement: `image gallery - ${m[c]?._memoq?.name}`.toLowerCase()
            }), n(!0))
          }), [i]);
          const f = m?.length > 0 && m.some((e => e?.name || e?.platform));
          return (0, p.jsx)("section", {
            className: De.sectionWrapper,
            ref: s,
            children: (0, p.jsxs)("div", {
              className: De.sectionContent,
              children: [(0, p.jsxs)("div", {
                className: De.actionBar,
                children: [(0, p.jsx)("h2", {
                  className: [De.heading, d].join(" "),
                  children: a?.title
                }), f && (0, p.jsx)(_e, {
                  data: m,
                  onClick: e => {
                    l(e)
                  },
                  activeTab: c
                })]
              }), m[c]?.sections && (0, p.jsx)(Ae, {
                sections: m[c]?.sections,
                paginationSettings: a?.paginationSettings
              }, m[c]?.name)]
            })
          })
        })),
        $e = {
          skeleton: "rockstargames-sites-legacyf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-sites-legacye00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-sites-legacydb0b80177710d337d93bddb97b8a7dea"
        },
        Fe = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, p.jsx)("div", {
            className: [$e.skeleton, $e[a]].join(" ")
          }) : null
        };
      var Re = t(50048);
      const Ge = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const r = t ?? [a],
            {
              data: n
            } = (0, l.useQuery)(Re.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: i
              },
              setTitleDataPath: s,
              skip: !r.length
            });
          return n?.tinaModulesInfo ?? null
        },
        He = b((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: i
          } = e;
          const r = Ge({
            id: t,
            ids: s
          });
          if (!r) return (0, p.jsx)(Fe, {
            skeleton: i
          });
          const n = r?.[0]?.tina;
          return n ? (0, p.jsx)(p.Fragment, {
            children: r.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, p.jsx)(I.TinaParser, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: r
                }
              }, t)
            }))
          }) : null
        }));
      var Ue = t(79429),
        We = t.n(Ue);
      const qe = e => {
        let {
          attributes: a = {},
          children: t,
          className: s = "",
          id: i = "",
          style: r = {}
        } = e;
        return (0, p.jsx)("span", {
          className: (0, I.classList)(s, a?.className, "rockstargames-sites-legacya7f106a8036d74ed9282a741476c6b5a"),
          id: i,
          style: (0, m.safeStyles)(r ?? a?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: We().unescape(t)
          }
        })
      };
      var Xe = t(64544);
      const Ye = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, i] = (0, o.useState)(!1);
          return (0, p.jsx)(Xe.zb, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: a
          })
        },
        Qe = {
          badge: "rockstargames-sites-legacye279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-sites-legacyd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-sites-legacyd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-sites-legacye1bba3cd4554abbb48a030af24bbada5"
        },
        Ke = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: i
          } = e;
          return i || s ? a(t) : t
        },
        Ze = e => {
          let {
            badge: a,
            badgeType: s,
            role: i,
            splitter: r
          } = e;
          const n = [];
          r ? a.split(r).map(((e, a) => n.push(e))) : n.push(a);
          let c = 100;
          return 2 == n.length && n[1].length < 4 && "off" !== n[1].toLowerCase() && 45, (0, p.jsxs)(Ke, {
            splitter: r,
            role: i,
            wrapper: e => (0, p.jsx)("div", {
              className: `${Qe.badge} ${s?Qe[s]:""} `,
              children: e
            }),
            children: [(0, p.jsx)(p.Fragment, {
              children: i && (0, p.jsx)(B, {
                image: {
                  alt: i,
                  desktop: t(45628)(`./${i}.png`)
                }
              })
            }), (0, p.jsx)(Ye, {
              className: `${r||i?"":Qe.badge} ${s?Qe[s]:""}`,
              min: 8,
              max: 1e3,
              mode: r || i ? "single" : "multi",
              children: n[0]
            }), (0, p.jsx)(p.Fragment, {
              children: n.shift() && r && n.length >= 1 && (0, p.jsx)(Ye, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Je = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, p.jsx)("div", {
            className: "rockstargames-sites-legacyefc561ad30f5dfe75c79d939737650dc",
            children: t
          }) : t
        },
        ea = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: s,
            splitter: i,
            image: r,
            style: n,
            className: c = "",
            attributes: o = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, p.jsx)(Je, {
            hero: d,
            children: (0, p.jsx)("figure", {
              children: (0, p.jsxs)("div", {
                className: (0, I.classList)("rockstargames-sites-legacycab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-sites-legacycefd6d8859aeec1057caed28caa160c3" : "", o?.hiddenMobile ? "hiddenMobile" : "", o?.hiddenLarge ? "hiddenLarge" : "", o?.className, c),
                style: (0, m.safeStyles)({
                  ...n,
                  ...o?.style
                }),
                ...o,
                children: [(0, p.jsx)(B, {
                  image: r,
                  className: c
                }), (r?.badge || r?.discountTxt || a || s) && (0, p.jsx)(Ze, {
                  badge: r?.discountTxt ?? r?.badge ?? a ?? s,
                  badgeType: t,
                  splitter: r?.splitter ?? i,
                  role: r?.role ?? l
                }), r?.caption && (0, p.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: r.caption
                  }
                })]
              })
            })
          })
        };
      var aa = t(41136);
      const ta = {
        deprecatedCarousel: "rockstargames-sites-legacyeb5df7b3d51dffc4d993ca7abce4e944",
        "swiper-scrollbar-disabled": "rockstargames-sites-legacyeb2dda6769a7c20a31e7996ff62e41f8",
        "swiper-horizontal": "rockstargames-sites-legacyb11093de3cb4f18ea2d59b8d4d1db44c",
        "swiper-vertical": "rockstargames-sites-legacyfa3209fdf995734a1aeeac2cc72cc1ea",
        renderedWithChildren: "rockstargames-sites-legacyc9f15e74b3166cd0db40501fcc70e868",
        panorama: "rockstargames-sites-legacyf2a7e77af5dff445e978fd575a567508",
        img: "rockstargames-sites-legacyf1d3d54c266a20fa0cbe9c342b0d98da",
        hideMobile: "rockstargames-sites-legacye70d5eaa273e4a0a40ee62a308491810",
        hideLarge: "rockstargames-sites-legacybace2af6c822ba7b36b53923629cba0f",
        imageAreaBg: "rockstargames-sites-legacyf4bb071e6dad07c75b78ea21269ca662",
        infinite_false: "rockstargames-sites-legacyd6c3d175b843462bf23a1a1f3af6b095",
        track: "rockstargames-sites-legacyb5ff781c4a96bf031e8e7f5e0c9af395",
        perico: "rockstargames-sites-legacybb97d296d17b7e801c6c0719a79463dd",
        dotsSlide: "rockstargames-sites-legacydd55a6f93254ed13542089c6f36e0048",
        siblings: "rockstargames-sites-legacya59cf4385528c371a13be9962b67131b",
        active: "rockstargames-sites-legacyaa5e195e0c7c6336929553314d52a896",
        "swiper-preloader-spin": "rockstargames-sites-legacyc05cc0faa8239c85cdc7d53c7e120e8e"
      };
      var sa = t(63672);
      const ia = {
          hr: "rockstargames-sites-legacyf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-sites-legacyf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-sites-legacyc442f7264db862a7cca6d9a56dacc205"
        },
        ra = e => {
          let {
            style: a,
            className: t = "",
            type: s
          } = e;
          return (0, p.jsx)("div", {
            style: a,
            className: [ia.hr, ia[s], t].join(" ")
          })
        },
        na = "rockstargames-sites-legacyfa6885b15a718acb24f48949c52e31f1",
        ca = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, p.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        oa = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, p.jsxs)("div", {
            className: (0, I.classList)("rockstargames-sites-legacyef9e6981551ac5ce250ebff8b18d7a29", t),
            children: [a.title && (0, p.jsx)(ca, {
              to: a?.href ?? a?.to,
              children: (0, p.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, p.jsx)(sa.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, p.jsx)(B, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, p.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, p.jsx)(ra, {})
            }, a) : (0, p.jsx)("p", {
              children: (0, p.jsx)("span", {
                className: na,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, p.jsx)("span", {
              className: na,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        },
        la = e => {
          let {
            item: a
          } = e;
          return (0, p.jsxs)("div", {
            children: [(0, p.jsx)(ea, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, I.classList)(ta.img, a?.className)
            }), (a?.title || a?.description) && (0, p.jsx)(oa, {
              item: a
            })]
          })
        },
        da = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, p.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, p.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        ma = e => {
          let {
            children: a,
            items: t = [],
            style: s = {},
            noInfiniteScroll: i = !1,
            className: r = "",
            renderTemplate: n = "standard",
            text: c,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [g, u] = (0, o.useState)(0), f = (0, o.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, aa.A)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const h = {
            0: {
              spaceBetween: l ?? 16
            },
            1024: {
              spaceBetween: l ?? 18
            },
            1920: {
              spaceBetween: l ?? 20
            },
            2560: {
              spaceBetween: l ?? 22
            }
          };
          return (0, p.jsxs)("div", {
            className: (0, I.classList)(ta.deprecatedCarousel, ta[n], ta[`infinite_${!i}`], a ? ta.renderedWithChildren : "", r),
            style: s,
            children: [(0, p.jsxs)(ge.RC, {
              loop: !i,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: h,
              onUpdate: () => u(0),
              onActiveIndexChange: e => u(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, p.jsx)("div", {
                className: ta.trackWrapper,
                children: (0, p.jsxs)("div", {
                  className: ta.track,
                  children: [t?.map((e => (0, p.jsx)(ge.qr, {
                    children: (0, p.jsx)(la, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, p.jsx)(ge.qr, {
                    children: e
                  }, f && f[a])))]
                })
              }), (0, p.jsx)(da, {
                current: g,
                total: a ? a.length : t.length
              })]
            }), (c?.title || c?.description) && (0, p.jsx)(oa, {
              item: c
            })]
          })
        },
        ga = {
          padding: "rockstargames-sites-legacyf7c6c7f374a964c878d2d276e933ee0b",
          carouselWrapper: "rockstargames-sites-legacyea6dc08aea9d51a8db44ed608c891705",
          carouselTitle: "rockstargames-sites-legacyeeecd14725803dea4b8848410b644b27"
        },
        ua = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, p.jsx)("a", {
            href: a,
            target: "_blank",
            children: t
          }) : t
        },
        fa = e => {
          let {
            items: a = [],
            text: t = {},
            style: s,
            className: i = "",
            id: r = null
          } = e;
          return a?.length ? (0, p.jsxs)("div", {
            id: r,
            "data-testid": `carousel${i&&`-${i}`}-group-of-items`,
            children: [(0, p.jsx)(ma, {
              style: s,
              className: [i, ga.carouselWrapper].join(" "),
              children: a.map((e => (0, p.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, p.jsx)(ea, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [ga.img, e?.className].join(" ")
                }), e.title && (0, p.jsx)(ua, {
                  to: e?.to,
                  children: (0, p.jsx)("h4", {
                    className: ga.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, p.jsx)("span", {
                  className: ga.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), t?.title || t?.description ? (0, p.jsx)("div", {
              className: ga.padding,
              style: t?.style ?? {},
              children: (0, p.jsx)(oa, {
                item: t
              })
            }) : ""]
          }) : null
        },
        pa = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: s
          } = e;
          return a?.shouldTrack ? (0, p.jsx)(ka, {
            threshold: a?.threshold,
            gtm: t,
            children: s
          }) : s
        },
        ha = (e, a) => t => ((e, a, t) => (0, p.jsx)(pa, {
          impressionTracking: t?.impressionTracking,
          gtm: t?.gtm,
          children: (0, p.jsx)(e, {
            ...a
          })
        }))(e, t, a),
        ba = {
          event: "page_section_impression",
          element_placement: null
        },
        ka = e => {
          let {
            threshold: a = .6,
            children: t,
            gtm: s = {}
          } = e;
          const {
            track: i
          } = (0, u.useGtmTrack)(), {
            ref: r,
            scrollTracked: n
          } = (0, m.useScrollTracking)(a);
          return (0, o.useEffect)((() => {
            n && i({
              ...ba,
              ...s
            })
          }), [n]), (0, p.jsx)("section", {
            ref: r,
            children: t
          })
        },
        va = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: s
          } = e;
          return a?.shouldTrack ? (0, p.jsx)(ka, {
            threshold: a?.threshold,
            gtm: t,
            children: s
          }) : s
        },
        _a = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, p.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        ya = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, p.jsx)(M(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, p.jsx)(ea, {
            image: a?.image,
            badge: a?.badge ?? a?.image?.badge,
            badgeType: "badge3",
            role: a?.role ?? a?.image?.role,
            splitter: a?.splitter ?? a?.image?.splitter,
            ariaLabel: a?.image?.ariaLabel,
            style: a?.style,
            className: a?.className
          })
        },
        xa = e => {
          let {
            items: a,
            style: t = {},
            className: s = "",
            id: i = null
          } = e;
          return (0, p.jsx)("div", {
            style: t,
            className: (0, I.classList)("rockstargames-sites-legacyc84f82c9ba8b58c3cfcc3834228a96d7", s),
            id: i,
            "data-testid": "standard-group-of-items",
            children: a.map((e => (0, p.jsx)(va, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, p.jsx)(_a, {
                to: e?.to,
                children: (0, p.jsxs)("div", {
                  className: (0, I.classList)("rockstargames-sites-legacyea3df4f9076c3f017962a018b926c3e0", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, p.jsx)(ya, {
                    item: e
                  }) : "", e.title || e.description ? (0, p.jsx)(oa, {
                    item: e,
                    className: "rockstargames-sites-legacye9ece151c1b5c70da591c9192e29ef50"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        Na = e => {
          let {
            children: a = null,
            text: t = {},
            items: s = [],
            renderTemplate: i = "",
            style: r = {},
            id: n = null,
            ...c
          } = e;
          if (!s.length) return null;
          switch (i) {
            case "carousel":
              return (0, p.jsx)(fa, {
                text: t,
                items: s,
                style: r,
                id: n,
                children: a
              });
            case "carousel-panorama":
              return (0, p.jsx)(fa, {
                text: t,
                items: s,
                style: r,
                className: "panorama",
                id: n,
                children: a
              });
            default:
              return (0, p.jsx)(xa, {
                items: s,
                style: r,
                id: n,
                ...c,
                children: a
              })
          }
        };
      var ja = t(61651);
      const wa = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, p.jsx)("div", {
            className: "rockstargames-sites-legacyb61bd7f274fd6d93c4bf33a9284b6b67",
            style: t,
            children: a
          })
        },
        Sa = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: i = []
          } = e;
          return a && t ? (0, p.jsx)("div", {
            className: "rockstargames-sites-legacybc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": s,
            children: t
          }) : a && i && i?.length > 0 ? (0, p.jsx)("div", {
            className: "rockstargames-sites-legacyd4a1a1e4fc4c16138d3c879bc1864227",
            children: i.map((e => (0, p.jsx)(wa, {
              ...e
            }, e?.text)))
          }) : null
        },
        Ca = {
          textOverlay: "rockstargames-sites-legacya9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-sites-legacyd35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: Ta,
          Animations: Ia
        } = i,
        {
          variants: La,
          transitions: Ma
        } = Ia,
        Ea = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: i,
            description: r,
            fadesOut: n = !1,
            badges: c
          } = e;
          return (0, p.jsx)(Ta, {
            initial: La.fade.out.initial,
            animate: {
              opacity: n ? 0 : 1
            },
            transition: Ma.fade,
            className: Ca.textOverlay,
            children: (0, p.jsxs)("div", {
              className: Ca.content,
              children: [(0, p.jsx)(Sa, {
                hasTag: t,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, p.jsx)("h3", {
                children: a
              }), i && r && (0, p.jsx)("div", {
                className: Ca.description,
                children: r
              })]
            })
          })
        },
        Pa = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            tag: i,
            tagStyle: r,
            discountPrice: n,
            originalPrice: c,
            setPricingContainerHeight: l = null
          } = e;
          const d = (0, o.createRef)();
          return (0, o.useEffect)((() => {
            const e = () => {
              d.current && null !== l && l(d.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [d]), (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacyf721d7192d3e29e64567a729fd8d5985",
            ref: d,
            "data-show-background": s,
            children: [t && (0, p.jsx)("span", {
              className: "rockstargames-sites-legacyf390fe2c9338785ce412483a1bac624c",
              children: a
            }), (0, p.jsxs)("div", {
              className: "rockstargames-sites-legacyfc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, p.jsx)("span", {
                className: "rockstargames-sites-legacyb7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": r || "free",
                children: i
              }), (0, p.jsx)("span", {
                className: "rockstargames-sites-legacyd8c7408e6335e53326bc70a1a065f81b",
                children: n
              }), (0, p.jsx)("span", {
                className: "rockstargames-sites-legacya3632910b63514f6b49539fe45bcccb6",
                children: c
              })]
            })]
          })
        };
      var za = t(90837),
        Ba = t(82275),
        Oa = t(44338),
        Aa = t(67245),
        Da = t(47483),
        Va = t(19169),
        $a = t(96165),
        Fa = t(55837),
        Ra = t(43365),
        Ga = t(73870);
      const Ha = {
          ps5: Oa,
          ps4: Ba,
          ps: za,
          xboxone: Da,
          xbox: Va,
          xboxseriesxs: Aa,
          nintendoswitch: Ga,
          pc: $a,
          googleplay: Ra,
          applestore: Fa
        },
        Ua = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            platformOptions: i,
            setPricingContainerHeight: r = (() => {}),
            expandedView: n
          } = e;
          const c = (0, o.createRef)();
          return (0, o.useEffect)((() => {
            const e = () => {
              c.current && null !== r && r(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacye754e3afc303a114f9e28e09c5519a30",
            ref: c,
            "data-show-background": s,
            "data-show-platforms": !n,
            children: [t && (0, p.jsx)("span", {
              className: "rockstargames-sites-legacyfd98e3d7af2a583d4338d802666901a5",
              children: a
            }), i?.platformsAndLinks && (0, p.jsxs)("div", {
              className: "rockstargames-sites-legacycbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, p.jsx)(Sa, {
                hasTag: i?._memoq?.platformTag,
                tag: i?._memoq?.platformTag,
                tagStyle: i?._memoq?.platformTagStyle
              }), (0, p.jsx)("div", {
                className: "rockstargames-sites-legacyb7de0e1798d1a020191fbe44b67f34d2",
                children: i.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, p.jsx)("img", {
                    className: "rockstargames-sites-legacyaa5f852c8932dcf689a97496d437f13b",
                    alt: t,
                    src: Ha[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        Wa = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: s,
            expandedView: i = !1,
            children: r,
            pricingOptions: n,
            setPricingContainerHeight: c,
            isCoverCard: l = !1,
            platformOptions: d
          } = e;
          const [m] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: s,
              description: i,
              collapsedHasDescription: r,
              size: n,
              title: c,
              expandedView: l,
              badges: d
            } = e;
            const [m, g] = (0, o.useState)(null), u = (0, o.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== n && r;
              return (0, p.jsx)(Ea, {
                title: c,
                hasTag: s,
                tag: t,
                hasDescription: e,
                description: i,
                fadesOut: l,
                badges: d
              })
            }), [a, t, s, i, r, n, c, l, d]);
            return (0, o.useEffect)((() => {
              g(u)
            }), [u]), [m, g]
          })({
            ...a,
            size: s,
            title: t,
            expandedView: i
          }), g = void 0 !== n?.hasPricingOptions || null !== d;
          return (0, p.jsxs)("header", {
            className: "rockstargames-sites-legacyc525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": l,
            "data-expanded-view": i,
            children: [o.Children.map(r, (e => (0, o.cloneElement)(e, {
              title: t,
              size: s,
              expandedView: i
            }))), m, g && (0, p.jsxs)(p.Fragment, {
              children: [!0 === d?.hasPlatformOptions && (0, p.jsx)(Ua, {
                title: t,
                platformOptions: d,
                pricingOptions: n,
                setPricingContainerHeight: c,
                expandedView: i
              }), !0 === n?.hasPricingOptions && (0, p.jsx)(Pa, {
                title: t,
                tag: n?._memoq?.tag,
                tagStyle: n?._memoq?.tagStyle || "free",
                discountPrice: n?._memoq?.discountPrice,
                originalPrice: n?._memoq?.originalPrice,
                setPricingContainerHeight: c
              })]
            })]
          })
        },
        {
          LiteMotion: qa,
          Animations: Xa
        } = i,
        {
          transitions: Ya
        } = Xa,
        Qa = e => {
          let {
            components: a,
            payload: t,
            prod: s,
            size: i,
            title: r,
            initial: n = "initial",
            animate: c = "animate",
            variants: l,
            type: d = null,
            context: g = null,
            textOverlayProps: u,
            className: f,
            children: h,
            theme: b = "none",
            id: k,
            pricingOptions: v,
            pricingContainerHeight: _,
            isCoverCard: y,
            platformOptions: x,
            isProductCard: N = !1
          } = e;
          const j = (0, o.useRef)(),
            w = (0, o.useRef)(),
            {
              tag: S,
              expandedHasTag: C,
              badges: T
            } = u;
          We().set(t, "meta.prod", s);
          const L = h?.props?.images.length > 0;
          let M = (0, p.jsx)("h1", {
            children: r
          });
          return y && (M = null), (0, o.useEffect)((() => {
            const e = () => {
              j.current && j.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (j.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, p.jsx)(m.DataLayerProvider, {
            card_id: k,
            card_name: r?.toLowerCase(),
            children: (0, p.jsx)(ja.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === d ? j : w,
              children: (0, p.jsxs)(qa, {
                ref: j,
                initial: n,
                animate: c,
                variants: l.expanded,
                transition: Ya.cardOpen,
                className: (0, I.classList)("rockstargames-sites-legacydcb84dcfd34616fb0089133acf0c4669", f),
                "data-type": d,
                "data-size": i,
                "data-product": N,
                "data-covercard": y || !1,
                "data-context": g,
                style: {
                  "--product-card-pricing-info-height": `${_||0}px`
                },
                children: [L && (0, p.jsx)(Wa, {
                  size: i,
                  title: r,
                  textOverlayProps: u,
                  expandedView: !0,
                  pricingOptions: v,
                  platformOptions: x,
                  isCoverCard: y,
                  children: h
                }), (0, p.jsxs)(qa, {
                  ref: w,
                  className: "rockstargames-sites-legacyeaf357a8d0bae1199142949cbf24e7b9",
                  variants: l.expandedContents,
                  transition: Ya.afterCardOpen,
                  "data-theme": b,
                  children: [(0, p.jsxs)("div", {
                    className: "rockstargames-sites-legacyfc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, p.jsx)(Sa, {
                      hasTag: C,
                      tag: S,
                      badges: T
                    }), M, N && (0, p.jsxs)(p.Fragment, {
                      children: [!0 === x?.hasPlatformOptions && (0, p.jsx)("div", {
                        className: "rockstargames-sites-legacyb630c7c1f59f91f2ac304af525b6d081",
                        children: (0, p.jsx)(Sa, {
                          hasTag: x?.hasPlatformOptions,
                          tag: x?._memoq?.platformTag,
                          tagStyle: x?._memoq?.platformTagStyle
                        })
                      }), !0 === v?.hasPricingOptions && (0, p.jsx)(Pa, {
                        title: r,
                        showTitle: !1,
                        showBackground: !1,
                        tag: v?._memoq?.tag,
                        tagStyle: v?.tagStyle || "free",
                        discountPrice: v?._memoq?.discountPrice,
                        originalPrice: v?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, p.jsx)(I.TinaParser, {
                    components: a,
                    tina: {
                      payload: t
                    }
                  })]
                })]
              })
            })
          })
        };
      var Ka = t(89779),
        Za = t(93665);
      const Ja = JSON.parse('{"us":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}"},"de":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}"},"es":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"mx":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}"},"fr":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}"},"it":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}"},"jp":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}"},"kr":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}"},"pl":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}"},"br":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"ru":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})"},"hans":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"},"tw":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"}}'),
        et = (0, d.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            defaultMessage: "{tag} {title} on {platformList}"
          }
        }),
        at = (0, d.withIntl)((e => {
          let {
            id: a,
            position: t,
            title: s,
            size: i = "md",
            sectionTitle: r = "",
            expandedType: n = null,
            modalProps: c = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: l,
            children: m,
            isProductCard: g,
            cardIds: f = null,
            theme: h = "none",
            isCoverCard: b,
            platformOptions: k
          } = e;
          const {
            formatMessage: v,
            formatList: _
          } = (0, d.useIntl)(), [y, x] = (0, Ka.useSearchParams)(), N = (0, o.useRef)(null), [, j] = (0, Za.h)(), {
            track: w
          } = (0, u.useGtmTrack)(), [S, C] = (0, o.useState)(!1), T = () => {
            C(!1), j(null), x({}), w({
              event: "trackPageview"
            })
          }, I = () => {
            if (!c?.content || !N.current || !n || "linkout" === n) return;
            const e = N.current,
              r = window.getComputedStyle(e),
              o = parseInt(r.getPropertyValue("width"), 10),
              l = parseInt(r.getPropertyValue("height"), 10),
              d = e.getBoundingClientRect(),
              {
                content: m,
                className: g,
                contentClassName: u
              } = c,
              p = "fob" === i ? "fob" : "default";
            j({
              content: m,
              onClose: T,
              rect: d,
              width: o,
              height: l,
              className: g,
              contentClassName: u,
              fadeIn: !1,
              cardIds: f,
              theme: h,
              activeId: a,
              gtm: {
                card_id: a,
                card_name: s?.toLowerCase(),
                position: t
              },
              aspectRatio: p,
              cardDimensions: {
                size: i,
                type: n
              }
            }), w({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: s?.toLowerCase(),
              position: t
            })
          };
          (0, o.useEffect)((() => {
            S && I()
          }), [S]), (0, o.useEffect)((() => {
            C(y.get("info") === a)
          }), [y.get("info"), a]);
          const L = (0, o.useMemo)((() => {
            const e = k?._memoq?.platformTag || "";
            if (k?.platformsAndLinks?.length > 0) {
              const a = k?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: a
                  } = e;
                  return a
                })),
                t = _(a, {
                  type: "conjunction"
                });
              return e ? v(et.card_label_platforms_tag, {
                tag: e,
                title: s,
                platformList: t
              }) : v(et.card_label_platforms, {
                title: s,
                platformList: t
              })
            }
            return e ? v(et.card_label_tag, {
              tag: e,
              title: s
            }) : s
          }), [k, s]);
          return b || "linkout" === n ? (0, p.jsx)("div", {
            ref: N,
            className: l,
            "data-size": i,
            "data-type": n,
            "data-product": g,
            role: "button",
            "aria-label": L,
            children: m
          }) : (0, p.jsx)("button", {
            ref: N,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), a ? x({
                info: a
              }) : I(), w({
                event: "card_click",
                element_placement: r?.toLowerCase(),
                position: t,
                card_id: a,
                card_name: s?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: l,
            "data-size": i,
            "data-type": n,
            "data-product": g,
            tabIndex: "linkout" !== n ? 0 : -1,
            "aria-label": L,
            type: "button",
            children: m
          })
        }), Ja),
        tt = {
          pillBtn: "rockstargames-sites-legacyebdcdd73cdde7ce5626490066de01474",
          selected: "rockstargames-sites-legacyd058244e6f29505e3c05558039370b54",
          card: "rockstargames-sites-legacyc2685d1ff8cc088bfef4c336b1a9f8ae",
          content: "rockstargames-sites-legacye268650dd5a86c01be62eeb552b4e54b",
          expandedContent: "rockstargames-sites-legacyd19c433e20935d6b1eebff53baa04bb1",
          text: "rockstargames-sites-legacybeee7d7b941675acb2b6b9bf5caf4f33",
          imageHolder: "rockstargames-sites-legacyc823ac57eab14be16dd87e168e610d4f",
          coverCardWrapper: "rockstargames-sites-legacyef72671ab95bb9290b80637cb3073d29"
        },
        st = e => {
          let {
            payload: a,
            prod: t,
            images: s,
            size: i,
            title: r,
            initial: n,
            animate: c,
            variants: l,
            id: d,
            position: m,
            sectionTitle: g,
            expandedType: u,
            context: f,
            children: h,
            expandedCardContents: b,
            textOverlayProps: k = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: v = {},
            modalProps: _ = [],
            theme: y,
            cardIds: x,
            pricingOptions: N,
            platformOptions: j = null,
            pricingContainerHeight: w,
            isCoverCard: S = !1,
            isProductCard: C = !1
          } = e;
          const T = (0, I.useTinaComponents)(),
            L = (0, o.useMemo)((() => ({
              ...T,
              HTMLElement: qe,
              ImageWithBadge: ea,
              Carousel: ma,
              GroupOfItems: Na
            })), [T]),
            M = (0, o.useMemo)((() => (0, p.jsx)(Qa, {
              type: u,
              components: L,
              payload: a,
              prod: t,
              images: s,
              size: i,
              title: r,
              context: f,
              textOverlayProps: k,
              initial: n,
              animate: c,
              variants: l,
              theme: y,
              cardIds: x,
              pricingOptions: N,
              id: d,
              pricingContainerHeight: w,
              isCoverCard: S,
              platformOptions: j,
              isProductCard: C,
              children: b
            })), [u, s, t, i, r, k, b, n, c, l, L, a, C]),
            E = [tt.card, S ? tt.coverCardWrapper : ""].join(" ");
          return (0, p.jsx)(at, {
            id: d,
            position: m,
            sectionTitle: g,
            title: r,
            size: i,
            expandedType: u,
            images: s,
            deckProps: v,
            modalProps: {
              content: M,
              ..._
            },
            className: E,
            isProductCard: C,
            cardIds: x,
            theme: y,
            isCoverCard: S,
            platformOptions: j,
            children: h
          })
        },
        it = {
          layeredImageFrame: "rockstargames-sites-legacyf4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-sites-legacyf48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-sites-legacyb52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-sites-legacyf55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-sites-legacyfa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-sites-legacyb496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: rt,
          Animations: nt
        } = i,
        {
          getVariant: ct,
          variants: ot,
          transitions: lt
        } = nt,
        dt = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: i,
            src: r
          } = (0, E.useImageParser)({
            ...a,
            prod: s
          });
          return (0, p.jsx)("img", {
            src: r.mobile,
            alt: i ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        mt = e => {
          let {
            images: a = [],
            className: t = "",
            prod: s = !1,
            expandedView: i = !1,
            style: r = {}
          } = e;
          const [n, c] = (0, o.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, o.useEffect)((() => {
            function e() {
              c({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [n]);
          const l = (0, o.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, p.jsx)(rt, {
            className: (0, I.classList)(it[e?.specialClass] ?? it.imageMask, it[e?.sizeClass], e?.className),
            variants: ct(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: lt.cardOpen,
            children: (0, p.jsx)(dt, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [a, n, i, s]);
          return (0, p.jsx)(rt, {
            className: (0, I.classList)(it.layeredImageFrame, a.length > 1 ? it.layered : it.flat, t),
            style: r,
            initial: ot.fade.in.initial,
            animate: ot.fade.in.animate,
            transition: lt.instantFade,
            "data-expanded-view": i,
            children: l
          })
        },
        gt = e => {
          let {
            expandedType: a,
            to: t,
            children: s,
            style: i,
            sectionTitle: r = "",
            id: n,
            cardTitle: c,
            position: l
          } = e;
          const {
            track: d
          } = (0, u.useGtmTrack)(), m = (0, o.useCallback)((() => {
            d({
              event: "card_click",
              link_url: t,
              card_id: n,
              card_name: c,
              element_placement: r.toLowerCase(),
              position: l
            })
          }), [r, t, n, c, r, l]);
          return "linkout" === a && t ? (0, p.jsx)(f.A, {
            to: t,
            style: i,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: m,
            children: s
          }) : s
        },
        ut = {
          pillBtn: "rockstargames-sites-legacyc484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-sites-legacyd65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-sites-legacyc0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-sites-legacycebbc72d1229514723b9d664281b472f"
        },
        {
          variants: ft
        } = s,
        pt = e => {
          let {
            id: a,
            title: t,
            content: s,
            size: i = "md",
            expandedType: r = "short",
            textOverlayProps: n = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: c = [],
            deckProps: l = {},
            to: d = null,
            tina: m = {},
            position: g = 0,
            sectionTitle: u = "",
            theme: f,
            pricingOptions: h,
            cardIds: b,
            platformOptions: k = null
          } = e;
          const v = (0, I.useTinaPayload)(),
            _ = m?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [y, x] = (0, o.useState)(l?.size ?? i),
            [N, j] = (0, o.useState)(0),
            w = void 0 !== h?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, o.useEffect)((() => {
            x(l?.size ?? i)
          }), [l?.size, i]), (0, p.jsx)(st, {
            id: a,
            title: t,
            size: y,
            expandedType: r,
            images: c,
            deckProps: l,
            prod: _,
            payload: {
              content: s,
              meta: {}
            },
            variants: ft.plainCard,
            textOverlayProps: n,
            modalProps: {
              className: ut.customModal,
              contentClassName: ut.customModalContent
            },
            expandedCardContents: (0, p.jsx)(mt, {
              images: c,
              prod: _,
              expandedView: !0
            }),
            position: g,
            sectionTitle: u,
            theme: f,
            cardIds: b,
            pricingOptions: h,
            platformOptions: k,
            pricingContainerHeight: N,
            isProductCard: w,
            children: (0, p.jsx)(gt, {
              expandedType: r,
              to: d,
              sectionTitle: u,
              id: a,
              cardTitle: t,
              position: g,
              children: (0, p.jsx)("div", {
                className: ut.content,
                "data-product": w,
                children: (0, p.jsx)(Wa, {
                  title: t,
                  size: y,
                  textOverlayProps: n,
                  pricingOptions: h,
                  platformOptions: k,
                  setPricingContainerHeight: j,
                  children: (0, p.jsx)(mt, {
                    images: c,
                    prod: _
                  })
                })
              })
            })
          })
        },
        ht = {
          ps: za,
          ps3: t(7644),
          ps4: Ba,
          ps5: Oa,
          nintendoswitch: Ga,
          xbox: Va,
          xboxone: Da,
          xboxseriesxs: Aa,
          xbox360: t(6754),
          pc: $a,
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: t(38375),
          default: ""
        },
        bt = e => ht[e] || null,
        kt = {
          pillBtn: "rockstargames-sites-legacybf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-legacye07887131c72b6346c408895888f4fa7",
          "clr-button": "rockstargames-sites-legacyeb57c2501d6b6fff19ea12014712acae",
          lgMax: "rockstargames-sites-legacye8361180f27f9c36731c815805c69094",
          smMax: "rockstargames-sites-legacyc392730b2e06f70a3a1bd646684859e8",
          cta: "rockstargames-sites-legacybc76de01fdd1260e254c482984d2a924",
          label: "rockstargames-sites-legacyb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-legacydbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-legacyf5e832587747dc414e10ab8e0bd843a9",
          btnIcon: "rockstargames-sites-legacycb0ad8d8dd93218dc12091b883767967",
          border: "rockstargames-sites-legacycd3e884f94660ff9d55194c397a548a2",
          xbox: "rockstargames-sites-legacyf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-sites-legacye5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-sites-legacye52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-sites-legacyc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-sites-legacyf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-sites-legacyb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-sites-legacyc7ee0cfc54be00a8b152c47997ce76ac",
          nintendoswitch: "rockstargames-sites-legacyc021d5ee5ee378576089611d038c5520",
          googleplay: "rockstargames-sites-legacya4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-sites-legacyc4ab0a89b65025cfe63b851116fb3a32",
          lgMin: "rockstargames-sites-legacyc4a99972e5e512395e6fca5beaec1904",
          applestore: "rockstargames-sites-legacya13111cbe8acbd75f62da1c53de2c3df",
          borderless: "rockstargames-sites-legacye8f4333859f53dc59092e8b3340842e2",
          icon: "rockstargames-sites-legacyc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-legacybd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-legacyc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-legacyd87326174de12b895401f738a23b177a"
        };
      var vt = t(72862),
        _t = t.n(vt);
      const yt = e => {
          let {
            platform: a = "",
            altText: t
          } = e;
          const s = a ? bt(a) : null,
            i = s ? (0, p.jsx)("img", {
              className: kt.platformIcon,
              src: s,
              alt: t
            }) : null;
          return (0, p.jsx)("span", {
            className: [kt.btnContent, kt.platformButton].join(" "),
            children: i
          })
        },
        xt = e => {
          let {
            children: a,
            href: t,
            style: s,
            content: i,
            variant: r = null,
            size: n = "medium",
            icon: c,
            iconPosition: l = "none",
            iconStyle: d,
            badge: g,
            badgeStyle: f,
            platformItem: h,
            platformStyle: b = "border",
            gtm: k = {},
            disabled: v,
            reloadDocument: _ = !1,
            className: y
          } = e;
          const {
            track: x
          } = (0, u.useGtmTrack)(), N = (0, m.useDataLayer)(), j = i ?? a, w = (0, m.findPlatform)(h)?.friendlyName, S = (0, o.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), C = (0, o.useCallback)((() => {
            v || x({
              event: "cta_other",
              text: j ?? void 0,
              ...N,
              ...k,
              link_url: t ?? void 0
            })
          }), [k, t, N]), T = () => c ? (0, p.jsx)("span", {
            className: [kt.icon, `icon-${l}`].join(" "),
            style: d,
            children: (0, p.jsx)("img", {
              className: kt.btnIcon,
              src: bt(c) || "",
              alt: `${c} icon`
            })
          }) : null;
          return (0, p.jsx)(Ka.Link, {
            to: t,
            target: S ? "_self" : "_blank",
            className: _t()(kt.cta, "platform" === r && h ? kt[h] : "", b && kt[b], v ? kt.disabled : "", y),
            style: s,
            "data-variant": r,
            "data-size": n,
            onClick: C,
            "aria-label": j,
            reloadDocument: _,
            children: "platform" === r && h ? (0, p.jsx)(yt, {
              platform: h,
              altText: w || j
            }) : (0, p.jsxs)("div", {
              className: kt.btnContent,
              children: ["left" === l && T(), (0, p.jsx)("span", {
                className: kt.label,
                children: j
              }), "right" === l && T(), g ? (0, p.jsx)("span", {
                className: kt.badge,
                style: f,
                children: g
              }) : null]
            })
          })
        };
      var Nt = t(26398);
      const jt = e => {
        let {
          children: a,
          context: t = null,
          game: s,
          image: i = {},
          style: r = {},
          template: n = null,
          theme: c = null,
          reversedOnMobile: o = !1,
          className: l = "",
          id: d = null
        } = e;
        const g = (0, E.useImageParser)(i ?? {}),
          u = {
            ...r
          };
        if (g?.src?.desktop) {
          const e = (i?.style && i?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (i?.style && i?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (u.background = `url(${g?.src?.desktop}) ${a} ${t}`, i?.style && i?.style["--linear-gradient"]) u.background = `linear-gradient(${i?.style["--linear-gradient"]}), url(${g?.src?.desktop}) ${a} ${t}`;
          else if (i?.style && i?.style["--gradient-height"]) {
            const e = i?.style["--gradient-height"] || "3",
              s = i?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              r = i?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            u.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${g?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, p.jsx)("div", {
          id: d,
          className: (0, Nt.classList)("rockstargames-sites-legacyf42b4606ed4a5b16b7647ad7b7eb229d", o ? "rockstargames-sites-legacyb00444166ce6346d7ca364a75a335ecc" : "", l),
          "data-game": "community" === n ? null : s,
          style: (0, m.safeStyles)(u),
          "data-context": t,
          "data-template": n,
          "data-theme": c,
          children: a
        })
      };
      var wt = t(59781);
      const St = {
          button: "rockstargames-sites-legacye056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-sites-legacyd340cf27f380a4347994e59544432eb3"
        },
        Ct = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: i,
            onClick: r,
            target: n = "_self",
            ...c
          } = e;
          const o = [St.button, St[s], a].join(" ");
          return i ? (0, p.jsx)(f.A, {
            ...c,
            to: i,
            className: o,
            onClick: r,
            target: n,
            children: t
          }) : (0, p.jsx)("button", {
            ...c,
            type: "button",
            className: o,
            onClick: r,
            children: t
          })
        },
        Tt = e => {
          let {
            className: a
          } = e;
          return (0, p.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, p.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, p.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        It = {
          pillBtn: "rockstargames-sites-legacye3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-sites-legacya9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-sites-legacye6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-sites-legacyb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-sites-legacyc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-sites-legacyb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-sites-legacyb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-sites-legacyac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-sites-legacybee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-sites-legacyb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-sites-legacyb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-sites-legacyf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-sites-legacyd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-sites-legacyb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-sites-legacyaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-sites-legacya74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-sites-legacycc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-sites-legacydb26fed58ce50f4affc114670885721a"
        },
        Lt = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, u.useGtmTrack)(), {
            refetch: i
          } = (0, l.useQuery)(wt.UserGetVote, {
            skip: !0
          }), [r] = (0, l.useMutation)(wt.UserCastVote), [n, c] = (0, o.useState)(null), d = (0, o.useCallback)((e => {
            (async () => {
              if (e === n && null !== n) c(null);
              else {
                c(e), s({
                  event: "cta_" + (e ? "like" : "dislike"),
                  text: `${t} ${a}`
                });
                const i = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await r({
                  variables: i
                })
              }
            })()
          }), [a, t, n]);
          return (0, o.useEffect)((() => {
            a && t && (async () => {
              const e = await i({
                foreignId: a,
                foreignType: t
              });
              c(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, p.jsxs)("div", {
            className: It.calloutVoteForm,
            children: [(0, p.jsx)("button", {
              "aria-label": "upvote",
              className: [It.upvote, It.voteButton, n ? It.active : ""].join(" "),
              name: "upvote",
              onClick: () => d(!0),
              type: "button"
            }), (0, p.jsx)("button", {
              "aria-label": "downvote",
              className: [It.downvote, It.voteButton, !1 === n ? It.active : ""].join(" "),
              name: "downvote",
              onClick: () => d(!1),
              type: "button"
            })]
          })
        },
        Mt = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: i
          } = (0, u.useGtmTrack)();
          return (0, p.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, p.jsxs)("button", {
              className: It.calloutLink,
              type: "button",
              onClick: s ? () => i({
                ...s
              }) : () => {},
              children: [a, (0, p.jsx)(Tt, {
                className: It.calloutLinkIcon
              })]
            })
          })
        },
        Et = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: i
          } = e;
          const {
            track: r
          } = (0, u.useGtmTrack)();
          return (0, p.jsxs)("div", {
            className: It.actionFooter,
            children: [a, t && " ", t && (0, p.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...i
              }),
              children: t
            })]
          })
        },
        Pt = (0, m.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: s,
            action_text: i,
            link: r,
            foreign_id: n = document.location.pathname,
            foreign_type: c = "url",
            className: l = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: f,
            trackingData: h = {},
            actionFooterLinkTrackingData: b = {},
            t: k,
            ...v
          } = e;
          const {
            loggedIn: _
          } = (0, u.useRockstarUser)(), {
            track: y
          } = (0, u.useGtmTrack)(), x = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: N,
            inView: j
          } = (0, g.useInView)({
            threshold: .6
          }), [w, S] = (0, o.useState)(!1);
          let C;
          if ((0, o.useEffect)((() => {
              j && !w && (y({
                event: "page_section_impression",
                element_placement: `callout section - ${v?.sectionName??v?._memoq?.header}`
              }), S(!0))
            }), [j]), !a && !t) return null;
          switch (s) {
            case "vote":
              if (!_) {
                C = (0, p.jsx)(Ct, {
                  to: x,
                  className: It.calloutButton,
                  onClick: h ? () => y({
                    ...h
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              C = (0, p.jsx)(Lt, {
                foreign_id: n,
                foreign_type: c
              });
              break;
            case "button":
              i && r && (C = (0, p.jsx)(Ct, {
                to: r,
                className: It.calloutButton,
                onClick: h ? () => y({
                  ...h
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && r && (C = (0, p.jsx)(Mt, {
                action_text: i,
                link: r,
                trackingData: h
              }));
              break;
            default:
              C = null
          }
          return (0, p.jsx)("div", {
            className: `${It.calloutContainer} ${l||""}`,
            ref: N,
            children: (0, p.jsxs)("div", {
              className: It.calloutSection,
              children: [(0, p.jsxs)("div", {
                className: [It.calloutHeaders, C ? It.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, p.jsx)("h2", {
                  className: It.calloutHeader,
                  children: k(a)
                }), t && (0, p.jsx)("h3", {
                  className: It.calloutSubheader,
                  children: k(t)
                })]
              }), (0, p.jsxs)("div", {
                className: It.actionBlock,
                children: [C, d && (0, p.jsx)(Et, {
                  helperText: d,
                  linkText: m,
                  link: f,
                  trackingData: b
                })]
              })]
            })
          })
        })),
        zt = (0, d.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Bt = {
          bodySmall: "rockstargames-sites-legacyc048aacaedc7fb642f38c7f163c193e3"
        },
        Ot = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, p.jsxs)("div", {
            className: Bt.track,
            children: [(0, p.jsx)("p", {
              children: a
            }), (0, p.jsx)("p", {
              className: Bt.bodySmall,
              children: t
            })]
          })
        },
        At = (0, d.withIntl)((e => {
          let {
            content: a = []
          } = e;
          return (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacye6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, p.jsx)("h4", {
              className: "rockstargames-sites-legacycd3895fbae93ba04f1401487f6e6eddf",
              children: (0, p.jsx)(d.FormattedMessage, {
                ...zt.components_track_list_title
              })
            }), (0, p.jsx)("div", {
              className: "rockstargames-sites-legacyef0cde8b15ded961605237d0e8328a9b",
              children: (0, p.jsx)("div", {
                className: "rockstargames-sites-legacybdd54186db17d27b3daebc4b9d58e09a",
                children: a?.map((e => (0, p.jsx)(Ot, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), k),
        {
          variants: Dt
        } = s;
      t(72752);
      var Vt = t(94566);
      const $t = {
          pillBtn: "rockstargames-sites-legacya50fca350d7dbc4340ad3c68f1da1960",
          selected: "rockstargames-sites-legacye6487295119cf4eafefadf26f76ed1f8",
          customModalContent: "rockstargames-sites-legacyf17bd90d5d11d511cc583e09ef7ea01e",
          content: "rockstargames-sites-legacyf11fa0818c5163565a0058b6a7aa2505",
          secondary: "rockstargames-sites-legacye8fd74f0c0a6e9b8855e4bd971e7bba8",
          logo: "rockstargames-sites-legacyc1524e116e11607f62a2d93b0b2e32bc"
        },
        {
          variants: Ft
        } = s,
        Rt = e => {
          let {
            id: a,
            logoImage: t = null,
            logoImageHeight: s = "auto",
            name: i = null,
            title: r,
            titleSizeClass: n = null,
            content: c,
            ctaText: l,
            ctaURL: m,
            size: g = "md",
            expandedType: u = "short",
            textOverlayProps: f = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: h = [],
            deckProps: b = {},
            to: k = null,
            tina: v = {},
            cardIds: _,
            theme: y
          } = e;
          const x = (0, d.useIntl)(),
            N = (0, I.useTranslations)({
              payload: v?.payload,
              variables: v?.variables ?? {}
            }),
            [j, w] = (0, o.useState)(b?.size ?? g),
            S = (0, I.useGetCdnSource)(t ?? null),
            C = N?.content?.[0],
            T = C?.body ?? C?._memoq?.body;
          return (0, o.useEffect)((() => {
            w(b?.size ?? g)
          }), [b?.size, g]), (0, p.jsx)(st, {
            id: a,
            title: r,
            sectionTitle: i || r,
            size: j,
            expandedType: u,
            images: h,
            deckProps: b,
            payload: {
              content: c,
              meta: {}
            },
            variants: Ft.plainCard,
            textOverlayProps: f,
            modalProps: {
              className: $t.customModal,
              contentClassName: $t.customModalContent
            },
            expandedCardContents: (0, p.jsx)(mt, {
              images: h,
              expandedView: !0
            }),
            theme: y,
            cardIds: _,
            isCoverCard: !0,
            children: (0, p.jsx)(gt, {
              expandedType: u,
              to: k,
              sectionTitle: i || r,
              children: (0, p.jsxs)("div", {
                className: $t.content,
                children: [t && (0, p.jsx)("img", {
                  className: $t.logo,
                  alt: "logo",
                  src: S,
                  style: {
                    height: `${s}`
                  }
                }), (0, p.jsx)("h2", {
                  className: n,
                  children: r
                }), T && (0, p.jsx)("p", {
                  children: T
                }), (0, p.jsx)(Ct, {
                  target: "newtab" === u ? "_blank" : "_self",
                  to: m || void 0,
                  children: l || x.formatMessage(Vt.card.card_learn_more)
                })]
              })
            })
          })
        };
      var Gt = t(89269);
      const Ht = "rockstargames-sites-legacyeca98eb0b5b84a0c9a2e6d952545a2d5",
        Ut = "rockstargames-sites-legacyd3d0b4ecd3bddba96c73f49fcca34ed8",
        Wt = {
          0: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 18
          },
          1920: {
            spaceBetween: 20
          },
          2560: {
            spaceBetween: 22
          }
        },
        qt = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: i = !1,
            slideChildren: r = [],
            variants: n = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: c = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, u.useGtmTrack)(), [d, m] = (0, o.useState)([Gt.U1, Gt.WO, Gt.dK]), [g, f] = (0, o.useState)(null), [h, b] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            const e = [Gt.U1, Gt.WO, Gt.dK];
            i && e.push(Gt.Vx), m(e)
          }), [i]), (0, o.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, a) => (0, p.jsx)(ge.qr, {
              children: e
            }, Symbol(a).toString())));
            b(e)
          }), [r]), h ? (0, p.jsxs)(O.motion.div, {
            className: "rockstargames-sites-legacyd4f245838b94234f21463a08a8112910",
            variants: n.parent,
            transition: c.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, p.jsx)(O.motion.div, {
              className: Ht,
              variants: n.main,
              transition: c.main,
              initial: "initial",
              animate: "animate",
              children: (0, p.jsx)(ge.RC, {
                loop: s,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: Wt,
                className: Ht,
                onSlideNextTransitionEnd: () => {
                  l({
                    event: "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  l({
                    event: "carousel_previous",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  l({
                    event: "carousel_swipe",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                children: h
              })
            }), (0, p.jsx)(O.motion.div, {
              className: Ut,
              variants: n.thumbs,
              transition: c.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, p.jsx)(ge.RC, {
                threshold: 50,
                onSwiper: f,
                loop: s,
                breakpoints: Wt,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Ut,
                children: h
              })
            })]
          }) : null
        },
        Xt = e => {
          let {
            images: a,
            title: t,
            expandedView: s,
            variants: i,
            transition: r
          } = e;
          const n = (0, o.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, p.jsx)(ea, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [a]);
          return !n?.length || n?.length < 1 ? null : 1 === n.length ? n : (0, p.jsx)(qt, {
            slideChildren: n,
            title: t,
            navigation: s,
            thumbsVisible: s,
            spaceBetween: 0,
            variants: i,
            transition: r
          })
        },
        Yt = {
          pillBtn: "rockstargames-sites-legacyd13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-sites-legacybcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-sites-legacyceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: Qt,
          variants: Kt
        } = s;
      var Zt = t(60207);
      var Jt = t(59028),
        es = t.n(Jt),
        as = t(83178);
      const ts = {
          player: "rockstargames-sites-legacybb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-sites-legacye1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-sites-legacye8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-sites-legacyea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-sites-legacyb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-sites-legacyc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-sites-legacyac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-sites-legacyaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-sites-legacyb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-sites-legacyff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-sites-legacya81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-sites-legacyc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-sites-legacyc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-sites-legacye4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-sites-legacyba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-sites-legacyfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-sites-legacyc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-sites-legacyb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-sites-legacyd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-sites-legacyd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-sites-legacyf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-sites-legacyefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-sites-legacyf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-sites-legacya56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-sites-legacyb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        ss = e => {
          let {
            src: a
          } = e;
          return (0, p.jsx)("div", {
            className: ts.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        is = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: s,
            setPlaying: i,
            tracksOpen: r,
            setTracksOpen: n,
            trackData: c,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            f = (0, o.useRef)(null),
            [h, b] = (0, o.useState)(null),
            [k, v] = (0, o.useState)(!1),
            _ = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, o.useEffect)((() => {
            if (!u.current || !f.current) return;
            const e = () => {
              f.current && u.current && b(f.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [f, u, a]), (0, o.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const t = new(es())(g.current),
              i = e => {
                if (g.current) {
                  const t = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const i = Math.max(0, e.srcEvent.offsetX),
                    r = Number(i / t * a.duration);
                  s.currentTime = r
                }
              },
              r = () => {
                e ? s.pause() : s.play()
              },
              n = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", n), t.on("panleft", i), t.on("panright", i), t.on("panend", r), t.on("tap", i), () => {
              t.off("panstart", n), t.off("panleft", i), t.off("panright", i), t.off("panend", r), t.off("tap", i)
            }
          }), [g.current, a.duration]), (0, o.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && v(!0)
          }), [t, s?.currentTime]), (0, p.jsxs)("div", {
            className: ts.controls,
            style: {
              "--track-color": c.color,
              "--track-mix-blend-mode": c.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, p.jsx)("div", {
              className: [ts.controlsCurrentBg, k ? ts.controlsCurrentBgVisible : ""].join(" ")
            }), (0, p.jsx)("div", {
              className: ts.controlsTrack,
              ref: u,
              children: (0, p.jsx)("span", {
                className: [ts.controlsTrackTitle, h ? ts.controlsTrackAnimating : ""].join(" "),
                ref: f,
                children: c.title
              })
            }), (0, p.jsxs)("div", {
              className: ts.controlsButtons,
              children: [(0, p.jsx)("div", {
                className: ts.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), i(!0))
                }
              }), (0, p.jsx)("div", {
                className: [ts.controlsPlayPause, t ? ts.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!t)
                }
              }), (0, p.jsx)("div", {
                className: ts.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), i(!0))
                }
              })]
            }), (0, p.jsx)("div", {
              active: r ? "" : null,
              className: ts.controlsTrackBurger,
              children: (0, p.jsx)("div", {
                className: ts.iconBurger,
                onClick: () => {
                  n(!r)
                }
              })
            }), (0, p.jsxs)("div", {
              className: ts.controlsScrub,
              children: [(0, p.jsx)("span", {
                children: _(a.current)
              }), (0, p.jsx)("div", {
                className: ts.controlsScrubTrack,
                ref: g
              }), (0, p.jsx)("span", {
                children: _(a.duration)
              })]
            })]
          })
        },
        rs = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: i,
            setTracksOpen: r,
            setPlaying: n,
            setAutoNext: c
          } = e;
          return (0, p.jsxs)("div", {
            className: ts.tracks,
            children: [(0, p.jsx)("h4", {
              children: "Tracks"
            }), (0, p.jsx)("div", {
              className: ts.trackBurger,
              onClick: () => {
                r(!i)
              }
            }), (0, p.jsx)("div", {
              className: ts.trackList,
              children: a.map(((e, a) => (0, p.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? ts.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), c(!0)
                },
                children: [(0, p.jsx)("span", {
                  className: ts.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, p.jsx)("span", {
                  className: ts.trackTitle,
                  children: e.title
                }), (0, p.jsx)("span", {
                  className: ts.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        ns = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, l.useQuery)(as.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, r] = (0, o.useState)(), [n, c] = (0, o.useState)(), [d, m] = (0, o.useState)(), [g, u] = (0, o.useState)(!1), [f, h] = (0, o.useState)(!1), [b, k] = (0, o.useState)(new HTMLAudioElement), [v, _] = (0, o.useState)({
            current: 0,
            duration: 0
          }), [y, x] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (c(a.data.rockstarAudioPlayerPlayTrackId), x(!1), h(!0)), f && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && h(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [f]), (0, o.useEffect)((() => {
            if (!b) return;
            const e = () => {
                isNaN(b.duration) || _({
                  duration: b?.duration ?? 0,
                  current: b?.currentTime ?? 0
                })
              },
              a = () => {
                y && i && c(i[1])
              };
            return b.addEventListener("loadedmetadata", e), b.addEventListener("timeupdate", e), b.addEventListener("ended", a), () => {
              b.removeEventListener("loadedmetadata", e), b.removeEventListener("timeupdate", e), b.removeEventListener("ended", a)
            }
          }), [b, i, y]), (0, o.useEffect)((() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [f]), (0, o.useEffect)((() => {
            b && (f ? b.play() : b.pause(), u(!1))
          }), [f, b, d?.id]), (0, o.useEffect)((() => {
            if (!n) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === n));
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), m(e[a])
          }), [n]), (0, o.useEffect)((() => {
            s && c(s.audioAlbum.tracks[0].id)
          }), [s]), d ? (0, p.jsxs)("div", {
            className: [ts.player, ts[t], g ? ts.tracksOpen : ""].join(" "),
            children: [(0, p.jsx)("audio", {
              ref: e => {
                k(e)
              },
              src: d.mp3_src
            }), (0, p.jsx)(rs, {
              tracks: s.audioAlbum.tracks,
              setTrackId: c,
              trackId: n,
              tracksOpen: g,
              setTracksOpen: u,
              setPlaying: h,
              setAutoNext: x
            }), (0, p.jsx)(ss, {
              src: d.cover_src
            }), (0, p.jsx)(is, {
              setTrackId: c,
              trackBounds: i,
              tracksOpen: g,
              setTracksOpen: u,
              playing: f,
              setPlaying: h,
              timing: v,
              trackData: d,
              audioRef: b,
              setAutoNext: x
            })]
          }) : null
        };
      var cs = t(34634);
      const os = {
          pillBtn: "rockstargames-sites-legacyb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-sites-legacyf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-sites-legacycffaf489342637258d28f9b3b718836a",
          small: "rockstargames-sites-legacyb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-sites-legacye6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-sites-legacycef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-sites-legacyb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-sites-legacycb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-sites-legacyd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-sites-legacyac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-sites-legacyc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-sites-legacya7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-sites-legacya693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-sites-legacya029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-sites-legacye25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-sites-legacye03d92653f19a7ae3c4b3d5137bc9909"
        },
        ls = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i,
            ariaLabel: r
          } = e;
          return (0, p.jsx)("button", {
            className: t,
            onClick: s,
            style: i,
            type: "button",
            "aria-label": r,
            children: a
          })
        },
        ds = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i,
            to: r,
            ariaLabel: n
          } = e;
          return (0, p.jsx)(Ka.NavLink, {
            className: t,
            onClick: s,
            style: i,
            to: r,
            "aria-label": n,
            children: a
          })
        },
        ms = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: i = "",
            img: r,
            labelColor: n = "#000",
            onClick: c,
            secondText: o,
            size: l,
            text: d,
            to: m,
            type: g = "",
            ariaLabel: u
          } = e;
          const f = [os.plusButton, os[g] ?? "", os[l] ?? "", os[s] ?? "", t].join(" "),
            h = {
              "--hvr-color": a ?? n,
              "--hvr-bg-color": n ?? a,
              "--hvr-border-color": a ?? n
            },
            b = (0, p.jsxs)(p.Fragment, {
              children: [r ? (0, p.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, p.jsxs)("div", {
                className: os.btnText,
                icon: i,
                children: [d, o ? (0, p.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, p.jsx)("span", {
                onClick: c,
                onKeyDown: c,
                className: f,
                role: "button",
                "aria-label": u,
                tabIndex: 0,
                children: (0, p.jsx)("a", {
                  href: m,
                  target: e,
                  children: b
                })
              })
            }
            return (0, p.jsx)(ds, {
              className: f,
              onClick: c,
              style: {
                ...h
              },
              to: m,
              ariaLabel: u,
              children: b
            })
          }
          return (0, p.jsx)(ls, {
            className: f,
            onClick: c,
            style: {
              ...h
            },
            ariaLabel: u,
            children: b
          })
        },
        gs = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, p.jsx)("div", {
            className: (0, I.classList)("rockstargames-sites-legacyb411a36e7fd12ab75861fe560b31b206", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: i
              } = e;
              return s ? (0, p.jsx)(ms, {
                icon: t,
                text: s,
                to: i
              }, a) : ""
            }))
          }) : null
        },
        us = (0, t(86975).FF)(),
        fs = e => e.some((e => !e)),
        ps = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, i] = (0, o.useState)(!1), r = (e => {
            const [a] = (0, Ka.useSearchParams)(), [t, s] = (0, o.useState)(null), i = (0, u.useRockstarUser)(), {
              loggedIn: r
            } = i, {
              currentCharId: n
            } = (0, u.useRockstarUserState)(), c = (0, u.useIsUserGtaPlus)(i?.data, n);
            return (0, o.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              us.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (fs(i)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    i.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    i.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    i.push(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    i.push(!1 === c);
                    break;
                  default:
                    i.push(!1)
                }
                return null
              })), s(!fs(i)), () => {}
            }), [a, e, c, i, r]), t
          })(a);
          return (0, o.useEffect)((() => {
            i(r)
          }), [r]), (0, o.useMemo)((() => s ? t : null), [s])
        },
        hs = (0, m.withTranslations)((e => {
          let {
            children: a
          } = e;
          return o.Children.map(o.Children.toArray(a), (e => (0, p.jsx)(ps, {
            ...e?.props
          })))
        }));
      var bs = t(46825),
        ks = t(86634),
        vs = t.n(ks);
      const _s = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: i
          } = e;
          const [r, n] = (0, o.useState)(""), c = (0, o.useMemo)((() => vs()().getData()), []);
          return (0, p.jsx)(bs.Ay, {
            unstyled: !0,
            value: r,
            isMulti: a,
            allowSelectAll: t,
            options: c,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void n(a);
              var a
            },
            classNamePrefix: "country-select",
            ...i
          })
        },
        ys = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: i
          } = e;
          const r = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            n = new URLSearchParams(window.location.search).get(a);
          return n && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, n), r === t || n === t ? s : i
        },
        xs = "rockstargames-sites-legacyc63cfb461217f059c8c25eec09602b30",
        Ns = e => {
          let {
            color: a
          } = e;
          return (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacya481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, p.jsx)("div", {
              className: xs
            }), (0, p.jsx)("div", {
              className: xs
            }), (0, p.jsx)("div", {
              className: xs
            })]
          })
        };
      var js = t(64205);
      const ws = {
          dropdownWrapper: "rockstargames-sites-legacyb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-legacyb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-legacyf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-legacyecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-legacyb64c3515fcd91f6b84410bd14640da81"
        },
        Ss = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [i, r] = (0, o.useState)(!1);
          let n = null;
          return n = js.Ay, (0, p.jsx)(n, {
            disabled: !i,
            children: (0, p.jsxs)("div", {
              className: [ws.dropdownWrapper, i ? ws.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, p.jsx)("button", {
                className: ws.opener,
                onClick: () => r(!i),
                children: s
              }), i && (0, p.jsx)("div", {
                className: ws.items,
                onClick: () => r(!1),
                children: a
              })]
            })
          })
        },
        Cs = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, p.jsxs)("figure", {
            ...s,
            children: [t, (0, p.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        Ts = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, p.jsx)("div", {
            className: "rockstargames-sites-legacyd393ab6eb68d416b116b6281abdb5e14",
            type: t,
            children: (0, p.jsxs)(jt, {
              children: [a && (0, p.jsx)("h3", {
                children: a
              }), (0, p.jsx)(jt, {
                className: "rockstargames-sites-legacyed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, p.jsx)(Cs, {
                    caption: e?.caption,
                    children: (0, p.jsx)("div", {
                      className: "rockstargames-sites-legacydcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, p.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var t
                }))
              })]
            })
          }) : null
        },
        Is = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: .9,
              delay: .3
            }
          }
        },
        Ls = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            gridGap: 0,
            transition: {
              type: "spring",
              stiffness: 650,
              damping: 45
            },
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        Ms = {
          pillBtn: "rockstargames-sites-legacyba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-legacyc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-legacybfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-legacya1cf623c9dd51dd05772a395d8311dac",
          expandedButton: "rockstargames-sites-legacyf692df3414cf4d587df1739702e52732",
          unexpandedButton: "rockstargames-sites-legacyba4683b82274b0f8ca98f97fd2b0a1c9",
          buttonText: "rockstargames-sites-legacyc2fb2fb5ec39a5c3b3c14ee6c0505b53",
          expandedArea: "rockstargames-sites-legacydd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-legacyc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-legacyd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-legacyb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-legacyfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-legacyb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-legacye23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-legacye0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-legacydcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-legacye047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-legacydaa32798c37b9055cd280b838972e63e",
          applestore: "rockstargames-sites-legacydc4069c520d30eda3239cc1de09917ad",
          googleplay: "rockstargames-sites-legacye36f6e05f08b4bd9edef1950618493ca",
          switch: "rockstargames-sites-legacyae7bc564778d8af6cf5f8a0491ef7dc8"
        },
        Es = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: i = "",
            target: r = null,
            onClick: n,
            tabIndex: c
          } = e;
          const o = r ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [Ms.platformButton, Ms[i]].join(" "),
            d = i ? t(52917)(`./${i}.svg`) : null,
            m = (0, p.jsxs)(p.Fragment, {
              children: [d ? (0, p.jsx)("img", {
                src: d,
                alt: a
              }) : "", !d && (0, p.jsx)("div", {
                className: Ms.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, p.jsx)("a", {
            href: s,
            className: l,
            target: o,
            onClick: n,
            "aria-label": a,
            tabIndex: c,
            children: m
          }) : (0, p.jsx)(Ka.NavLink, {
            className: l,
            onClick: n,
            to: s,
            "aria-label": a,
            children: m
          })
        },
        Ps = e => {
          let {
            variant: a,
            buttonText: s = "Subscribe",
            buttonClassName: i,
            className: r,
            children: n,
            platformsAndLinks: c = [],
            trackingType: l = "buy",
            trackingParent: d,
            target: g = null,
            trackingOId: f = null
          } = e;
          const [h, b] = (0, o.useState)(!1), [k, v] = (0, o.useState)(!1), [_, y] = (0, o.useState)(200), {
            track: x
          } = (0, u.useGtmTrack)(), N = (0, o.useRef)(null), j = (0, o.useRef)(h), w = (0, o.useRef)(null);
          (0, o.useEffect)((() => {
            j.current = h
          }), [h]), (0, o.useEffect)((() => {
            const e = e => {
              j && !N?.current?.contains(e.target) && b(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []), (0, o.useEffect)((() => {
            const e = () => {
              h && (v(!0), b(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [h]), (0, o.useEffect)((() => {
            if (N?.current) {
              const e = 1e3 * Number(getComputedStyle(N.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              y(isNaN(e) ? 200 : e)
            }
          }), []), (0, o.useEffect)((() => {
            k && setTimeout((() => {
              v(!1)
            }), _)
          }), [k]);
          const S = e => {
            let {
              href: a,
              platform: t
            } = e;
            return () => {
              x({
                element_placement: d,
                event: "cta_store_link",
                link_url: a,
                text: t
              })
            }
          };
          return (0, p.jsxs)("div", {
            className: (0, I.classList)(Ms.container, r),
            children: [(0, p.jsx)(O.motion.div, {
              className: Ms.content,
              animate: h ? "open" : "close",
              variants: Is,
              "aria-hidden": !!h,
              children: n
            }), (0, p.jsxs)(O.motion.div, {
              "data-variant": a,
              "data-animating": k,
              className: _t()(h ? Ms.expandedButton : Ms.unexpandedButton),
              animate: h ? "open" : "closed",
              variants: Ls,
              initial: !1,
              ref: N,
              children: [(0, p.jsx)(O.motion.button, {
                className: _t()(Ms.buttonText, i),
                "aria-expanded": h,
                onClick: () => {
                  if (v(!0), b(!h), !h) switch (l) {
                    case "select_platform":
                      x({
                        element_placement: d,
                        event: "select_platform",
                        text: s?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      x({
                        element_placement: d,
                        event: "cta_link_account",
                        o_id: f,
                        text: s?.toLowerCase()
                      });
                      break;
                    case "buy":
                      x({
                        element_placement: d,
                        event: "cta_buy",
                        text: s?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      x({
                        element_placement: d,
                        event: "cta_store_link",
                        text: s?.toLowerCase()
                      });
                      break;
                    case "other":
                      x({
                        element_placement: d,
                        event: "cta_other",
                        text: s?.toLowerCase()
                      })
                  }
                },
                tabIndex: h ? -1 : 0,
                children: "string" == typeof s ? s : "Subscribe"
              }), (0, p.jsx)("div", {
                className: Ms.expandedArea,
                ref: w,
                "data-animate": h ? "open" : "closed",
                "aria-hidden": !h,
                style: {
                  height: h ? w?.current?.scrollHeight : 0
                },
                children: (0, p.jsxs)("div", {
                  children: [(0, p.jsx)("button", {
                    className: Ms.closeButton,
                    onClick: () => {
                      b(!1), v(!0), x({
                        element_placement: d,
                        event: "cta_other",
                        text: "close expanding platform button"
                      })
                    },
                    "aria-label": "Close",
                    tabIndex: h ? 0 : -1,
                    children: (0, p.jsx)("img", {
                      src: t(45537),
                      alt: "Close"
                    })
                  }), (0, p.jsx)("div", {
                    className: Ms.platformButtons,
                    children: c.length ? c.map((e => (0, p.jsx)(Es, {
                      buttonText: e.buttonText ?? (0, m.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: S(e),
                      target: g,
                      tabIndex: h ? 0 : -1
                    }, `${e.key}-${e.href}-${e.platform}`))) : ""
                  })]
                })
              })]
            })]
          })
        },
        zs = {
          animateBox: "rockstargames-sites-legacye9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-legacya63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-legacyd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-legacyb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-legacya4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-legacyf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        Bs = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([zs.visible])
              }))
            })).observe(s?.current)
          }), []), (0, p.jsx)("div", {
            style: t,
            className: [zs.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        Os = {
          gameSiteHeader: "rockstargames-sites-legacycb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-legacyaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-legacyac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-legacye5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-legacyb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-legacye666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-legacycfc6fd456ca2f3e9db06f780f412660f"
        },
        As = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: i = "",
            game: r
          } = e;
          const [n, c] = (0, o.useState)(!1), d = (0, l.useMutateState)(), {
            navHidden: m
          } = (0, l.useState)();
          return (0, o.useEffect)((() => {
            d({
              gameSiteNavOpen: n
            })
          }), [n]), (0, o.useEffect)((() => {
            const e = () => {
              c(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, p.jsxs)("header", {
            "data-game": r,
            className: [Os.gameSiteHeader, n ? Os.headerNavOpen : "", m ? Os.navHidden : "", t.gameSiteHeader, n ? t.headerNavOpen : ""].join(" "),
            children: [(0, p.jsx)("button", {
              className: [Os.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                c(!n), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, p.jsx)("div", {
              className: Os.bg
            }), (0, p.jsx)("nav", {
              children: (0, p.jsx)("div", {
                className: Os.navContent,
                children: s
              })
            }), i]
          })
        },
        Ds = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: i,
            onNextKeyDown: r
          } = e;
          return (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacyd98f432655f19a842390597c4434db06",
            children: [(0, p.jsx)("button", {
              className: "rockstargames-sites-legacyc06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: i,
              "aria-label": "Previous",
              role: "button"
            }), (0, p.jsx)("button", {
              className: "rockstargames-sites-legacya4f98606cdef508fbd2e69c5564a92d8",
              ref: t,
              onClick: s,
              onKeyDown: r,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        Vs = b((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: i,
            name: r,
            customSlidesPerView: n = null,
            customSpaceBetween: c = null,
            slideClass: l,
            style: d,
            className: m,
            cardSizeBreakpoints: f,
            customAspectRatio: h,
            titleBadge: b,
            theme: k
          } = e;
          const {
            track: v
          } = (0, u.useGtmTrack)(), _ = (0, o.useRef)(null), y = (0, o.useRef)(null), x = (0, o.useRef)(null), [N, j] = (0, o.useState)(null), [w, S] = (0, o.useState)(!1), [C, T] = (0, o.useState)(null), [L, M] = (0, o.useState)(), [E, P] = (0, o.useState)(), {
            ref: z,
            inView: B
          } = (0, g.useInView)({
            threshold: .6
          }), [O, A] = (0, o.useState)(!1), [D, V] = (0, o.useState)(null), [$, F] = (0, o.useState)(!1), [R, G] = (0, o.useState)(0), [H, U] = (0, o.useState)(0);
          (0, o.useEffect)((() => {
            const e = () => {
              F(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.useEffect)((() => {
            const e = () => {
              L && !(0, Ue.isEmpty)(L) && L?.height > 0 && L?.height !== R && G(L?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [L]);
          const W = {
            0: {
              spaceBetween: c ?? 16
            },
            1024: {
              spaceBetween: c ?? 18
            },
            1920: {
              spaceBetween: c ?? 20
            },
            2560: {
              spaceBetween: c ?? 22
            }
          };
          (0, o.useEffect)((() => {
            if (!_.current) return;
            const e = () => {
              if (_.current) {
                const e = n || Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view")),
                  a = n ? 1 : Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view-multiplier"));
                T(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [_, n]), (0, o.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, V(a))
            })), A(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && $ ? null : (0, p.jsx)(ge.qr, {
              className: "rockstargames-sites-legacyf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => Y(a),
              children: e
            }, Symbol(a).toString())));
            j(a)
          }), [t, $]), (0, o.useEffect)((() => {
            P({
              nextEl: x.current,
              prevEl: y.current
            })
          }), [x, y]), (0, o.useEffect)((() => {
            B && !w && t && (v({
              event: "page_section_impression",
              element_placement: (r || i).toLowerCase()
            }), S(!0))
          }), [B, t]);
          let q = "custom" === s ? {
            "--custom-aspect-ratio": h,
            ...d
          } : {
            ...d
          };
          const X = 0 !== R ? `${R}px` : "100%";
          q = {
            ...q,
            "--carousel-cards-height": X,
            "--carousel-nav-opacity": H
          };
          const Y = e => {
            L?.slideTo(e)
          };
          return (0, p.jsxs)("div", {
            className: (0, I.classList)("rockstargames-sites-legacyd0c3d91603036c852633939015a6cb48", m),
            "data-size": s,
            "data-sm": f?.sm ? f?.sm : s,
            "data-md": f?.md ? f?.md : s,
            "data-lg": f?.lg ? f?.lg : s,
            "data-xl": f?.xl ? f?.xl : s,
            "data-xxl": f?.xxl ? f?.xxl : s,
            "data-has-covercard": O,
            "data-new-carousel-nav": !0,
            "data-theme": k,
            ref: _,
            style: q,
            children: [(0, p.jsx)("div", {
              className: "rockstargames-sites-legacyddeb75a59ed783554b94e8298897a1fa",
              ref: z
            }), O && $ && (0, p.jsx)("div", {
              className: "rockstargames-sites-legacyd5f00d41fdd2c864a0eb9e069cf08db0",
              children: D
            }), (0, p.jsx)("div", {
              className: "rockstargames-sites-legacycdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, p.jsxs)("div", {
                className: "rockstargames-sites-legacyfb8e207418c783fc2f53b44c19faedca",
                children: [(0, p.jsxs)("div", {
                  className: "rockstargames-sites-legacyb779ba2045a88302079083935c90f7b3",
                  children: [!O && i && (0, p.jsxs)("div", {
                    className: "rockstargames-sites-legacyedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, p.jsx)("h2", {
                      children: i
                    }), b && (0, p.jsx)("span", {
                      className: "rockstargames-sites-legacyd7a4aaeb70d68fdee39312192efb990b",
                      children: b
                    })]
                  }), (0, p.jsx)(Ds, {
                    prevRef: y,
                    nextRef: x,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = L?.slides[L?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    theme: k
                  })]
                }), a && (0, p.jsx)("div", {
                  className: "rockstargames-sites-legacya1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), C ? (0, p.jsx)(ge.RC, {
              slidesPerView: C,
              onInit: e => {
                M(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (G(t), U(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: E,
              modules: [Gt.Vx],
              breakpoints: W,
              slideClass: (0, I.classList)("swiper-slide", l),
              onSlideNextTransitionEnd: () => {
                v({
                  event: "carousel_next",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                v({
                  event: "carousel_previous",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                v({
                  event: "carousel_swipe",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              children: N
            }) : ""]
          })
        }), null),
        $s = {
          pillBtn: "rockstargames-sites-legacyd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-legacybe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-legacyd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-legacyc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-legacya271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-legacyae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-legacyf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-legacyf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-legacyd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-legacyfb373367ffd03ba01edaf671175244ab",
          ctaBlock: "rockstargames-sites-legacyd4e5e627f7968400413c3b578b1b3143",
          verticalCtaBlock: "rockstargames-sites-legacya92d2eedbf7a04ac945877a52970eb9c",
          primaryBtn: "rockstargames-sites-legacyff921058c7bbf6660b52da746e719577",
          secondaryBtn: "rockstargames-sites-legacya0c587b1487e33b081dc394dfd017fab",
          btnText: "rockstargames-sites-legacybe305ab9e2c27b1458d3e7bb6a9f12e0",
          legalText: "rockstargames-sites-legacyf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-legacye999b9cecfe233bcee8cab8682fb96bf"
        },
        Fs = {
          visible: {
            opacity: 1,
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75,
              when: "beforeChildren",
              delayChildren: .25,
              staggerChildren: .1
            }
          },
          hidden: {
            opacity: 0
          }
        },
        Rs = {
          visible: {
            opacity: 1,
            y: 0,
            height: "100%",
            overflow: "hidden",
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75
            }
          },
          hidden: {
            opacity: 0,
            y: 100,
            height: "0%",
            overflow: "hidden"
          }
        },
        Gs = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const i = (0, I.useGetCdnSource)(t ?? null),
            r = (0, I.useGetCdnSource)(s ?? i);
          return (0, p.jsx)("div", {
            className: $s.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, p.jsx)("h5", {
              children: a
            })
          })
        },
        Hs = e => {
          let {
            title: a = "Membership Rewards",
            name: t = "Membership Rewards",
            shards: s
          } = e;
          const [i, r] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            s && r(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: i,
                desktop: r
              } = s;
              return e.push((0, p.jsx)(Gs, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [s]), i ? (0, p.jsx)("div", {
            className: $s.shardsCarousel,
            children: (0, p.jsx)(Vs, {
              title: a,
              name: t,
              slideChildren: i,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Us = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [i, r] = (0, o.useState)([]), [n, c] = (0, o.useState)([]);
          return (0, o.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: a
            } = t.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }) : e.plainButtonsArray.push({
              icon: a.platform ?? "",
              title: a.buttonText,
              to: a.href
            }), e)), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            r(e), c(a)
          }), [t]), i.length ? (0, p.jsx)(O.motion.div, {
            variants: a ? Rs : void 0,
            children: (0, p.jsx)(Ps, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: i,
              children: !!n.length && (0, p.jsx)(O.motion.div, {
                variants: Rs,
                children: (0, p.jsx)(gs, {
                  buttons: n,
                  className: $s.buttonGroup
                })
              })
            })
          }) : (0, p.jsx)(p.Fragment, {
            children: !!n.length && (0, p.jsx)(O.motion.div, {
              variants: Rs,
              children: (0, p.jsx)(gs, {
                buttons: n,
                className: $s.buttonGroup
              })
            })
          })
        },
        Ws = e => {
          let {
            animated: a = !1,
            brands: t = [],
            cta: s = [],
            ctas: i = [],
            description: r = "",
            expandingButtonLabel: n = "Subscribe",
            legalText: c,
            stackButtons: o,
            title: l = ""
          } = e;
          return (0, p.jsxs)(O.motion.div, {
            className: $s.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? Fs : void 0,
            children: [(0, p.jsx)(O.motion.div, {
              variants: a ? Rs : void 0,
              children: (0, p.jsx)(cs.A, {
                brands: t
              })
            }), (l || r) && (0, p.jsxs)(O.motion.div, {
              className: $s.descriptions,
              variants: a ? Rs : void 0,
              children: [l && (0, p.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: l
                }
              }), r && (0, p.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              })]
            }), !!s.length && (0, p.jsx)("div", {
              className: o ? $s.verticalCtaBlock : $s.ctaBlock,
              children: (0, p.jsx)(I.TinaParser, {
                components: {
                  Cta: xt,
                  ExpandingPlatformButton: Ps
                },
                tina: {
                  payload: {
                    content: s
                  }
                }
              })
            }), !!i.length && (0, p.jsx)("div", {
              className: $s.ctaBlock,
              children: (0, p.jsx)(Us, {
                animated: a,
                ctas: i,
                expandingButtonLabel: n
              })
            }), c && (0, p.jsx)(O.motion.div, {
              className: $s.legalText,
              variants: a ? Rs : void 0,
              children: (0, p.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              })
            })]
          })
        },
        qs = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: i,
            ctas: r = [],
            cta: n,
            description: c = "",
            expandingButtonLabel: l = "Subscribe",
            layeredImage: d,
            layeredImageSettings: g,
            legalText: u,
            shardsSection: f = {},
            stackButtons: h = !1,
            theme: b = "gen9",
            title: k = ""
          } = e;
          const {
            breakpoints: v,
            windowWidth: _
          } = (0, m.useWindowResize)(), y = v.xxl.min, x = (e => {
            if (!e) return null;
            const a = {},
              t = new Map([
                ["xsmall", "xs"],
                ["small", "sm"],
                ["medium", "md"],
                ["large", "lg"],
                ["xlarge", "xl"],
                ["horizontal", "--layered-horizontal-offset-"],
                ["vertical", "--layered-vertical-offset-"],
                ["imageWidth", "--layered-image-width-"]
              ]);
            return Object.entries(e).forEach((e => {
              const [s, i] = e;
              if (t.has(s)) {
                const e = t.get(s);
                Object.entries(i).forEach((i => {
                  const [r, n] = i;
                  if (t.has(s) && t.has(r)) {
                    const s = `${t.get(r)}${e}`;
                    a[s] = "imageWidth" !== r ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                  }
                }))
              }
            })), a
          })(g), N = (0, I.useGetCdnSource)(t?.mobile?.full_src ?? null), j = (0, I.useGetCdnSource)(t?.desktop?.full_src ?? N), w = (0, I.useGetCdnSource)(d?.mobile?.full_src ?? null), S = (0, I.useGetCdnSource)(d?.desktop?.full_src ?? w), C = (0, o.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: a,
              style: s
            } = t ?? {};
            return {
              ...s,
              ..._ >= y ? a : e
            }
          }), [_, t?.style, t?.mobileStyle, t?.desktopStyle]);
          return (0, p.jsxs)(O.motion.div, {
            className: (0, I.classList)($s.hero, i),
            style: {
              "--background-image-desktop": `url(${j})`,
              "--background-image-mobile": `url(${N})`,
              "--layered-image-desktop": `url(${S})`,
              "--layered-image-mobile": `url(${w})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? Fs : void 0,
            "data-type": "hero",
            theme: b,
            children: [(0, p.jsxs)("div", {
              className: $s.images,
              children: [j && N ? (0, p.jsx)("div", {
                className: $s.background,
                style: C ?? {}
              }) : "", w && S ? (0, p.jsx)("div", {
                className: $s.layered,
                style: g ? x : {}
              }) : "", (0, p.jsx)("div", {
                className: $s.gradient
              })]
            }), (0, p.jsx)(Ws, {
              animated: a,
              brands: s,
              cta: n,
              ctas: r,
              description: c,
              expandingButtonLabel: l,
              legalText: u,
              stackButtons: h,
              title: k
            }), f?.shards && (0, p.jsx)(Hs, {
              ...f
            })]
          })
        };
      var Xs = t(13963);
      const Ys = (0, d.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        Qs = {
          pillBtn: "rockstargames-sites-legacycb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-sites-legacyc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-sites-legacyfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-sites-legacyb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-sites-legacyedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-sites-legacyc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-sites-legacyc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-sites-legacye3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-sites-legacyc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-sites-legacybcccd1077d13d7fe1585655e5c5f8363"
        },
        Ks = (0, d.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s,
            location: i,
            parent: r = "footer"
          } = e;
          const {
            track: n
          } = (0, u.useGtmTrack)(), c = (0, d.useIntl)(), [l, m] = (0, d.getLocale)(), [g, h] = (0, o.useState)(!1), b = (0, o.useMemo)((() => (0, Xs.A)()), []), k = (0, o.useCallback)((e => {
            let a = i.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return d.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), b.currentSite?.site === Xs.C.www ? "en" === e ? `${window.location.origin}/${a}${i.search}` : `${window.location.origin}/${e}/${a}${i.search}` : `${window.location.origin}/${a}${i.search}`
          }), [i]), v = (0, o.useRef)(null), [_, y] = (0, o.useState)(0), x = matchMedia("(hover: none) and (pointer: coarse)").matches, N = e => {
            if (s && s(!1), l.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = d.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = k(e);
              n({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: r
              }), m(a.iso), window.location.href = t
            }
          };
          return (0, o.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === g && h(!1)
          }), [t]), (0, o.useEffect)((() => {
            v.current && y(v.current.scrollHeight)
          }), [v]), (0, p.jsxs)("div", {
            className: [Qs.languageSelector, g ? Qs.open : ""].join(" "),
            "data-theme": a,
            children: [x && "sc-menu" === a && (0, p.jsx)("div", {
              className: Qs.selectBoxWrapper,
              children: (0, p.jsxs)("select", {
                className: Qs.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  N(a)
                },
                "aria-label": c.formatMessage(Ys.language_selector_default),
                children: [(0, p.jsx)("option", {
                  className: Qs.selectBoxOption,
                  value: "none",
                  children: (0, p.jsx)(d.FormattedMessage, {
                    ...Ys.language_selector_default
                  })
                }), d.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, p.jsx)("option", {
                    className: Qs.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!x || "sc-menu" !== a) && (0, p.jsxs)(p.Fragment, {
              children: [(0, p.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!g), h(!g)
                },
                type: "button",
                "aria-label": c.formatMessage(Ys.language_selector_default),
                children: [(0, p.jsx)("i", {}), (0, p.jsx)("span", {
                  children: (0, p.jsx)(d.FormattedMessage, {
                    ...Ys.language_selector_default
                  })
                })]
              }), (0, p.jsx)("div", {
                className: Qs.linkWrapper,
                ref: v,
                style: {
                  "--ls-linkWrapper-opened-height": `${_}px`
                },
                children: (0, p.jsx)("div", {
                  className: Qs.links,
                  children: d.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, p.jsx)(f.A, {
                      to: k(a),
                      onClick: (s = a, () => {
                        N(s)
                      }),
                      tabIndex: g ? 0 : -1,
                      children: t
                    }, `desktop-${a}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), k),
        Zs = {
          layeredImage: "rockstargames-sites-legacya29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-legacyaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-legacyca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-legacyf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-legacye03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-legacyc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-legacyb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-legacye9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-legacye45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-legacyed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-legacyfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-legacyb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-legacyba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-legacyec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-legacya6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-legacyd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-legacyca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-legacybd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-legacyfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-legacybde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-legacyb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-legacyac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-legacyd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-legacyd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-legacya8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-legacydcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-legacyb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-legacyadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-legacyc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-legacye650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-legacyb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-legacye41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-legacydb575e1d021e69ebb4265a29484e2888"
        },
        Js = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            i = a["--border-image-source"],
            r = (0, I.useGetCdnSource)(i || null);
          return i && (s["--border-image-source"] = `url(${r})`), (0, p.jsx)("div", {
            className: (0, I.classList)(Zs.border, t),
            style: {
              ...s
            }
          })
        },
        ei = e => e?.images ? (0, p.jsx)("div", {
          className: (0, I.classList)(Zs.layeredImage, Zs[e?.variantClass], Zs[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, p.jsxs)("div", {
            className: Zs.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: i,
                objectFitClass: r,
                positionClassX: n,
                positionClassY: c,
                zIndex: o,
                className: l,
                style: d,
                alt: m,
                displayClass: g
              } = e;
              return (0, p.jsx)(B, {
                image: t,
                style: {
                  zIndex: o ?? a + 1
                },
                imageStyle: d,
                className: (0, I.classList)(l, g, Zs.imageLayer, Zs[s], Zs[i], Zs[r], Zs[n], Zs[c]),
                alt: m
              }, o ?? a + 1)
            })), e?.borderImage && (0, p.jsx)(Js, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var ai = t(14992);
      const ti = e => {
          const {
            src: a,
            thumbnail: t,
            style: s
          } = e, i = (0, E.useGetCdnSource)(a), r = (0, E.useGetCdnSource)(t?.thumbnail ?? ""), n = {
            ...t,
            ...e,
            src: i,
            thumbnail: r
          };
          return (0, p.jsx)("div", {
            style: s,
            className: "rockstargames-sites-legacyba57806be35d331458382a4c3554ae11",
            children: (0, p.jsx)(ai.Yf, {
              ...n
            })
          })
        },
        si = {
          pillBtn: "rockstargames-sites-legacyc9f730df1672c23262c63f94855e2c1f",
          selected: "rockstargames-sites-legacybd235351695ea49ca8a40a734be762f3",
          dialogButton: "rockstargames-sites-legacye3f58ed639bd7c31165cb9e56fb67a3b",
          primary: "rockstargames-sites-legacyff6f35f6658334275d17af3aadc230e9",
          secondary: "rockstargames-sites-legacya6e0c90773658027b6dfc0f5be87b91f"
        },
        ii = e => {
          let {
            button: a,
            closeDialog: t,
            style: s = "primary"
          } = e;
          const {
            buttonIcon: i,
            buttonText: r,
            extraClasses: n,
            isDisabled: c,
            isLink: o,
            link: l,
            onClick: d,
            testId: m
          } = a;
          return o ? r && (0, p.jsx)("a", {
            className: [si.dialogButton, si.link, si[s], n].join(" "),
            href: l,
            ...m && {
              "data-testid": m
            },
            children: r
          }) : (0, p.jsx)("button", {
            className: [si.dialogButton, si[s], n].join(" "),
            disabled: c,
            onClick: e => (e => {
              d && d(), t && t(), e.stopPropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": r,
            ...m && {
              "data-testid": m
            },
            children: (0, p.jsxs)("span", {
              children: [r, i && (0, p.jsx)("div", {
                className: si.ctaIcon
              })]
            })
          })
        },
        ri = {
          pillBtn: "rockstargames-sites-legacya6596047538a8c7840c9b519e55d4b4c",
          selected: "rockstargames-sites-legacyc23a38d9820d9c6f6ffc8cf494cca67b",
          dialog: "rockstargames-sites-legacya0524e2689bf1ac5eb313d6f39b15e49",
          "slide-up": "rockstargames-sites-legacyfaf82701babd6fd15f45b869930ce6d5",
          "fade-in": "rockstargames-sites-legacya203c39ccc49f119b1904803946daeb5",
          heading: "rockstargames-sites-legacyea50c6a81d2a6c75a340cf9a5034f325",
          message: "rockstargames-sites-legacyf6957cb9bdbc99eedd86a736458efee1",
          icon: "rockstargames-sites-legacyc3cc73e6852a0d0dd82680cfd5bb93bf",
          check: "rockstargames-sites-legacyebed32283c454e37e020357dd0abb7f3",
          error: "rockstargames-sites-legacyc8e61f39248404819185359c324e35c8",
          mail: "rockstargames-sites-legacye670856605362c02bdd8110f5b382ff8",
          content: "rockstargames-sites-legacycd8f41fce68356058aaff9164d1b6665",
          actions: "rockstargames-sites-legacyd46819e82811cd9791bb9ecb9790acc7"
        },
        ni = e => {
          let {
            icon: a,
            title: t,
            secondaryText: s,
            buttons: i,
            showDialog: r,
            onClose: n = (() => {}),
            closeOnOutsideClick: c = !0,
            extraClasses: l
          } = e;
          const d = (0, o.useRef)(null),
            {
              setBodyIsLocked: g
            } = (0, m.useBodyScrollable)("AlertDialog");
          (0, o.useEffect)((() => {
            r && d?.current && (d.current?.showModal?.(), g(!0))
          }), [r]);
          const u = () => {
            g(!1), n(), d.current?.close?.()
          };
          if (r) return (0, p.jsxs)("dialog", {
            ref: d,
            className: ri.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && c && (g(!1), n(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [a && (0, p.jsx)("i", {
              className: [ri.icon, ri[a]].join(" ")
            }), (0, p.jsxs)("div", {
              className: [ri.content, l?.content].join(" "),
              children: [(0, p.jsx)("h3", {
                className: [ri.heading, l?.heading].join(" "),
                children: t
              }), s && (0, p.jsx)("div", {
                className: [ri.message, l?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), i && (0, p.jsx)("div", {
              className: ri.actions,
              children: i.slice(0, 2).map(((e, a) => (0, p.jsx)(ii, {
                style: 0 === a ? "primary" : "secondary",
                button: e,
                closeDialog: u
              }, e.buttonText)))
            })]
          })
        },
        ci = {
          tag: "rockstargames-sites-legacyed77774d2704bc0ebc0ac156542ae053"
        },
        oi = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: i
          } = e;
          const r = (0, p.jsxs)("div", {
            style: i,
            className: [ci.tag, a].join(" "),
            children: [(0, p.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, p.jsx)(f.A, {
            to: t,
            children: r
          }) : r
        },
        li = {
          newswireBlock: "rockstargames-sites-legacya793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-legacyd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-legacycc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-legacyffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-legacybbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-legacyf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-legacyfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-legacye380e8c67066df6f33fc018341ea96e5"
        },
        di = e => {
          let {
            section: a = "",
            index: t,
            post: s,
            noSpecialOrder: i = !1,
            focused: r
          } = e;
          const {
            track: n
          } = (0, u.useGtmTrack)(), [c] = (0, Ka.useSearchParams)(), l = s.preview_images_parsed.newswire_block, d = {
            default: 0 !== t || i ? l.square || l.d16x9 || l._fallback : l.d16x9 || l.square || l._fallback,
            mobile: l.square || l._fallback
          }, [g, h] = (0, m.usePreloadImg)(d.default), b = {
            default: {
              backgroundImage: `url(${d.default})`
            },
            mobile: {
              backgroundImage: `url(${d.mobile})`
            }
          }, k = (0, o.useCallback)((() => {
            n({
              event: "card_click",
              card_id: s.id,
              card_name: s.name_slug.replace(/-/g, " "),
              link_url: s.url,
              position: t,
              element_placement: a
            })
          }), [s]);
          return (0, p.jsx)(f.A, {
            to: s.url,
            className: [li.newswireBlock, i ? li.newswireBlockNoSpecialOrder : "", null !== g ? li.startAnimation : ""].join(" "),
            focused: r,
            onClick: k,
            children: (0, p.jsxs)(p.Fragment, {
              children: [0 !== t || c.get("tag_id") ? (0, p.jsx)("div", {
                className: li.preview,
                style: b.default
              }) : (0, p.jsxs)(p.Fragment, {
                children: [(0, p.jsx)("div", {
                  className: li.previewMobile,
                  style: b.mobile
                }), (0, p.jsx)("div", {
                  className: li.preview,
                  style: b.default
                })]
              }), (0, p.jsxs)("div", {
                className: li.info,
                children: [(0, p.jsxs)("div", {
                  className: li.top,
                  children: [s.primary_tags.length ? (0, p.jsx)(oi, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, p.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, p.jsx)("h5", {
                  className: li.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var mi = t(31955),
        gi = t.n(mi);
      const ui = (0, m.withTranslations)((e => {
          let {
            section: a = "",
            relativeTo: t = "",
            tagId: s = null,
            metaUrl: i = "/newswire",
            t: r
          } = e;
          const {
            track: n
          } = (0, u.useGtmTrack)(), [c, d] = (0, Ka.useSearchParams)(), {
            tagId: m = null
          } = (0, Ka.useParams)(), [g, f] = (0, o.useState)(m ?? s ?? c.get("tag_id")), [h, b] = (0, o.useState)(1), [k, v] = (0, o.useState)(20), [_, y] = (0, o.useState)([]), [x, N] = (0, o.useState)(null), [j, {
            loading: w,
            data: S
          }] = (0, l.useLazyQuery)(gi(), {
            variables: {
              tagId: Number(g),
              page: h,
              metaUrl: i,
              limit: k,
              locale: "en_us"
            }
          });
          return (0, o.useEffect)((() => {
            b(1), y([]), v(20), f(m ?? s ?? c.get("tag_id")), j()
          }), [c.get("tag_id"), m, s]), (0, o.useEffect)((() => {
            const e = _;
            S?.posts?.paging && N(S?.posts?.paging), S?.posts?.results && y(e.concat(S?.posts?.results))
          }), [S]), (0, o.useEffect)((() => {
            (() => {
              const e = c.get("page"),
                a = Number(e ?? 1);
              v(20 * a), j()
            })()
          }), []), _.length ? (0, p.jsxs)("div", {
            "data-testid": "newswire-list",
            children: [(0, p.jsx)(bi, {
              section: a,
              posts: _,
              relativeTo: t,
              noSpecialOrder: null !== g
            }), null !== x && x.nextPage ? (0, p.jsx)(Ct, {
              "data-testid": "more-stories",
              onClick: e => {
                const a = c.get("page"),
                  t = Number(a ?? h) + 1;
                b(t), 20 !== k && v(20), j(), d({
                  page: String(t)
                }, {
                  replace: !0
                }), n({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: w,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        fi = {
          pillBtn: "rockstargames-sites-legacyafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-legacybcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-legacya748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-legacyc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-legacyb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        pi = (0, m.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, p.jsxs)("section", {
            className: fi.related,
            children: [(0, p.jsx)("h2", {
              children: t("Related Stories")
            }), (0, p.jsx)("div", {
              className: [fi.posts, 1 === a.length ? fi.just1post : ""].join(" "),
              children: a.map((e => (0, p.jsx)(di, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        hi = {
          newswireBlocks: "rockstargames-sites-legacyc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-legacyc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        bi = (0, m.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: s,
            gtmTrack: i,
            relativeTo: r
          } = e;
          const [n, c] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((t, s) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: a
              })
            })), i(e), c(s.length)
          }), [s.length]), (0, p.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [hi.newswireBlocks, t ? hi.noSpecialOrder : "", hi.contextHome].join(" "),
            children: s.map(((e, s) => (0, p.jsx)(di, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === n
            }, e.id)))
          })
        }));
      var ki = t(22941),
        vi = t(53149),
        _i = t(83277);
      const yi = (e, a) => {
          const t = e.tiers && e.tiers.every((e => e.isComplete)),
            s = a.tiers && a.tiers.every((e => e.isComplete));
          return t && !s ? 1 : !t && s ? -1 : 0
        },
        xi = (0, d.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        Ni = {
          pillBtn: "rockstargames-sites-legacye6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-legacye5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-legacyeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-legacybf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-legacycfa711252c08391d3a0f1ecd8728a61a"
        },
        ji = "TierIndicator:checkList",
        wi = e => {
          let {
            tiers: a
          } = e;
          return (0, p.jsx)("div", {
            className: Ni.packCardTierIndicator,
            "data-testid": ji,
            children: a?.map(((e, a) => (0, p.jsx)("div", {
              className: [Ni.tierIndicator, e.isComplete ? Ni.active : ""].join(" ")
            }, a)))
          })
        },
        Si = {
          pillBtn: "rockstargames-sites-legacye2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-legacyff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-legacyd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-legacyeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-legacyfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-legacya124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-legacyd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-legacycbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-legacyd4649f3812d37e7407503d49dcaaba04"
        },
        Ci = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        Ti = "PackCard:backgroundImage",
        Ii = "PackCard:completeTag",
        Li = e => {
          let {
            title: a,
            url: t,
            images: s,
            className: i,
            tiers: r,
            onClick: n,
            imageSize: c = 420,
            imageLoaded: l
          } = e;
          const {
            isMobile: g
          } = (0, m.useWindowResize)(), {
            loggedIn: f
          } = (0, u.useRockstarUser)(), {
            selectedCharacterTuple: h
          } = (0, u.useRockstarUserState)(), [b, k] = (0, o.useState)(!1), [v, _] = (0, o.useState)(!1), y = (0, d.useIntl)(), x = !!r?.length;
          (0, o.useEffect)((() => {
            if (Array.isArray(h)) {
              const e = h?.[0];
              _((0, m.getGen9Consoles)().includes(e))
            }
          }), [String(h)]), (0, o.useEffect)((() => {
            if (r && r.length > 0) {
              const e = r.some((e => !e.isComplete));
              k(!e)
            } else k(!1)
          }), [r]);
          const N = `${g?s?.mobile:s?.desktop}?im=Resize,height=${c}`;
          return (0, m.usePreloadImg)(N), (0, p.jsx)(Ka.NavLink, {
            className: [Si.packCard, i, b ? Si.packCompleted : ""].join(" "),
            to: t,
            onClick: n,
            children: (0, p.jsxs)("div", {
              className: [Si.packCardImageBox, l ? Si.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${N})`
              },
              "data-testid": Ti,
              children: [b && (0, p.jsxs)("div", {
                className: Si.badge,
                "data-testid": Ii,
                children: [(0, p.jsx)("div", {
                  className: Si.icon
                }), (0, p.jsx)("div", {
                  className: Si.label,
                  children: y.formatMessage(xi.pl_card_badge_content_complete)
                })]
              }), (0, p.jsxs)("div", {
                className: Si.packCardTextBox,
                children: [(0, p.jsx)("h4", {
                  children: a
                }), f && !b && v && (0, p.jsx)(wi, {
                  tiers: x ? r : Ci
                })]
              })]
            })
          })
        },
        Mi = {
          pillBtn: "rockstargames-sites-legacyc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-legacyff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-legacyffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-legacyf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-legacya53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-legacyb85775dc95fb3881171ee42e49076cbf"
        };
      vi.os.registerPlugin(_i.L);
      const Ei = e => {
          let {
            isHeaderVisible: a,
            packListItems: t,
            packCardClassName: s = Mi.packCard,
            packListClassName: i = Mi.packList,
            packGridClassName: r = Mi.packGrid,
            selectPackCard: n,
            sortFunction: c = yi
          } = e;
          const l = (0, o.useRef)(null),
            d = [...t].sort(c),
            [m, g] = (0, o.useState)(),
            [u, f] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            if (!0 === u) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              f(!0)
            }), 1e3);
            g(e)
          }), []), (0, _i.L)((() => {
            if (!1 !== u && l?.current) {
              const e = l.current.children;
              vi.os.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: vi.ys.easeInOut
              })
            }
          }), {
            dependencies: [u, t],
            scope: l,
            revertOnUpdate: !0
          }), (0, p.jsx)("div", {
            className: [i, a ? Mi.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, p.jsx)("div", {
              ref: l,
              className: r,
              "data-testid": "pack-grid",
              children: d.map(((e, a) => {
                let {
                  id: t,
                  name: i,
                  title: r,
                  url: c,
                  images: o,
                  tiers: l
                } = e;
                return (0, p.jsx)(Li, {
                  title: r,
                  url: c,
                  className: s,
                  images: o,
                  tiers: l,
                  onClick: () => ((e, a, t, s, i) => {
                    n(e, a, t, s, i)
                  })(i, r, c, t, a)
                }, r)
              }))
            })
          })
        },
        Pi = {
          pillBtn: "rockstargames-sites-legacydb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-sites-legacyb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-sites-legacybfe6fefc1068ed81c8b38519a854285f"
        },
        zi = e => {
          let {
            title: a,
            onClick: t,
            selected: s
          } = e;
          return (0, p.jsx)("button", {
            type: "button",
            onClick: t,
            tabIndex: 0,
            "aria-label": a,
            className: [Pi.chipButton, s ? Pi.selected : ""].join(" "),
            children: (0, p.jsx)("div", {
              children: a
            })
          })
        },
        Bi = {
          pillBtn: "rockstargames-sites-legacyf5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-sites-legacyf05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-sites-legacyef8ca38f98b731ff5dfe07937b1bbe34"
        },
        Oi = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, p.jsxs)("button", {
            type: "button",
            className: [t, Bi.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, p.jsx)(pe, {}), "right" === a && (0, p.jsx)(ke, {})]
          })
        },
        Ai = (0, d.defineMessages)({
          pln_career_progress_unavailable: {
            id: "pln_career_progress_unavailable",
            defaultMessage: "Sorry, career progress pack cards are currently unavailable."
          },
          pln_career_progress_all_chip_title: {
            id: "pln_career_progress_all_chip_title",
            defaultMessage: "All"
          },
          pln_career_progress_header_signin_label: {
            id: "pln_career_progress_header_signin_label",
            defaultMessage: "Sign In"
          },
          pln_career_progress_header_signup_label: {
            id: "pln_career_progress_header_signup_label",
            defaultMessage: "Create An Account"
          },
          pln_career_progress_header_signup_account: {
            id: "pln_career_progress_header_signup_account",
            defaultMessage: "Don't have an account?"
          },
          pln_career_progress_link_console_account: {
            id: "pln_career_progress_link_console_account",
            defaultMessage: "Link A Game Account"
          },
          pln_career_progress_link_console_account_title: {
            id: "pln_career_progress_link_console_account_title",
            defaultMessage: "Link a GTA Online Character"
          },
          pln_career_progress_link_console_account_description: {
            id: "pln_career_progress_link_console_account_description",
            defaultMessage: "We couldn't find a GTA Online character linked to your Rockstar Games account. Link one or switch to a different Rockstar Games account."
          },
          pln_career_progress_header_tooltip_aria_label: {
            id: "pln_career_progress_header_tooltip_aria_label",
            defaultMessage: "Tiers Info tooltip"
          },
          pln_career_progress_header_title: {
            id: "pln_career_progress_header_title",
            defaultMessage: "Career Progress"
          },
          pln_career_progress_header_body: {
            id: "pln_career_progress_header_body",
            defaultMessage: "Learn more about a huge range of Grand Theft Auto Online updates, and discover special challenges and rewards only available on PS5 and Xbox Series X|S."
          },
          pln_career_progress_header_body_gen9: {
            id: "pln_career_progress_header_body_gen9",
            defaultMessage: "See all the challenges you've completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
          },
          pln_career_progress_percentage_chart_title: {
            id: "pln_career_progress_percentage_chart_title",
            defaultMessage: "Complete"
          },
          pln_career_progress_percentage_chart_title_full: {
            id: "pln_career_progress_percentage_chart_title_full",
            defaultMessage: "Your career progress is {percentage}% completed."
          },
          pln_scroll_left: {
            id: "pln_scroll_left",
            defaultMessage: "Scroll Left"
          },
          pln_scroll_right: {
            id: "pln_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        Di = {
          pillBtn: "rockstargames-sites-legacyc07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-sites-legacyb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-sites-legacyb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-sites-legacyfde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-sites-legacye753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-sites-legacyce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-sites-legacyef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-sites-legacyf750c5a49886ae190c14e52aa026a417"
        },
        Vi = e => {
          let {
            navItems: a,
            category: t,
            setCategory: s,
            chipsContainerClass: i = Di.chipsContainer,
            previousChipButtonClass: r = "",
            nextChipBtnClass: n = ""
          } = e;
          const c = (0, d.useIntl)(),
            {
              track: l
            } = (0, u.useGtmTrack)(),
            {
              pathname: m
            } = (0, Ka.useLocation)(),
            g = (0, o.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, m]),
            [f, h] = (0, o.useState)(g),
            [b, k] = (0, o.useState)(!1),
            [v, _] = (0, o.useState)(!1),
            [y, x] = (0, o.useState)(!1),
            N = (0, o.useRef)(null),
            j = (0, o.useRef)(null),
            w = (0, o.useRef)(null),
            S = (0, o.useCallback)(((e, a) => {
              w.current && w.current.slideTo(e), h(e), C(`Career Progress Nav > ${a}`)
            }), [l]),
            C = (e, a) => {
              l({
                event: "component_tab_click",
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            };
          (0, o.useEffect)((() => {
            s(f)
          }), [f]);
          const T = e => {
            e.isEnd ? _(!0) : _(!1), e.isBeginning ? x(!0) : x(!1)
          };
          return (0, o.useEffect)((() => {
            w.current && ((w.current.wrapperEl.clientWidth || 0) > (w.current.el.clientWidth || 0) ? (k(!0), w.current.params.centeredSlides = !0, w.current.params.centeredSlidesBounds = !0) : (k(!1), w.current.params.centeredSlides = !1, w.current.params.centeredSlidesBounds = !1))
          }), [w.current?.wrapperEl?.clientWidth, w.current?.el?.clientWidth]), (0, p.jsxs)("div", {
            className: i,
            children: [!y && b && (0, p.jsx)("div", {
              ref: j,
              className: (0, I.classList)(Di.previousChipNavButton, r),
              children: (0, p.jsx)(Oi, {
                direction: "left",
                className: Di.previousNavIcon,
                onClick: () => {
                  w.current && (w.current?.slidePrev(), w.current.isBeginning ? x(!0) : x(!1), l({
                    event: "carousel_previous",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": c.formatMessage(Ai.pln_scroll_left)
              })
            }), (0, p.jsx)("div", {
              className: Di.chips,
              children: (0, p.jsx)(ge.RC, {
                onBeforeInit: e => w.current = e,
                onInit: T,
                className: Di.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: f,
                onSlideChange: T,
                onResize: T,
                children: a.map(((e, a) => {
                  let {
                    title: t
                  } = e;
                  return (0, p.jsx)(ge.qr, {
                    children: (0, p.jsx)(zi, {
                      title: t,
                      onClick: () => S(a, t),
                      selected: f === a
                    })
                  }, t)
                }))
              })
            }), !v && b && (0, p.jsx)("div", {
              ref: N,
              className: (0, I.classList)(Di.nextChipNavButton, n),
              children: (0, p.jsx)(Oi, {
                direction: "right",
                className: Di.nextNavIcon,
                onClick: () => {
                  w.current && (w.current?.slideNext(), w.current.isEnd ? _(!0) : _(!1), l({
                    event: "carousel_next",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": c.formatMessage(Ai.pln_scroll_right)
              })
            })]
          })
        },
        $i = e => {
          let {
            navItems: a,
            onNavItemClick: t,
            isOpen: s,
            isHeaderVisible: i
          } = e;
          const {
            track: r
          } = (0, u.useGtmTrack)(), [n, c] = (0, o.useState)(0), l = (0, o.useCallback)(((e, s) => {
            d(`Secondary Nav > ${a[n].title} > ${e}`, s), t()
          }), [a, t, n, r]), d = (e, a) => {
            r({
              event: "nav_click",
              text: e.split(">").pop()?.trim() || "",
              link_url: a,
              element_placement: e
            })
          };
          return (0, p.jsx)(O.motion.div, {
            className: "rockstargames-sites-legacyaa2ce15f29ac99fe06895664698bb6cc",
            initial: {
              height: 0
            },
            animate: {
              height: s ? "100dvh" : 0
            },
            transition: {
              ease: "easeInOut",
              duration: .4
            },
            children: (0, p.jsxs)("div", {
              className: "rockstargames-sites-legacyf2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, p.jsx)("div", {
                className: "rockstargames-sites-legacyc5288c05172905ec86e3fb56c010d6d3",
                children: (0, p.jsx)(Vi, {
                  navItems: a,
                  category: a[n]?.name,
                  setCategory: c,
                  nextChipBtnClass: "rockstargames-sites-legacyc8a45e31d035c8e867358deea365ceac",
                  previousChipButtonClass: "rockstargames-sites-legacye9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, p.jsx)("div", {
                className: "rockstargames-sites-legacyf1adea94eb32de966a0e622247370f4e",
                children: (0, p.jsx)(Ei, {
                  isHeaderVisible: i,
                  packListItems: a[n]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        Fi = "rockstargames-sites-legacyc54c374409e11d1429ce99457cbf7441",
        Ri = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: i,
            className: r
          } = e;
          return (0, p.jsx)("a", {
            href: "#",
            className: i === t.page ? `rockstargames-sites-legacyc0eebf4f915ff9f5cc362e22d6d7d976 ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(i)
            },
            children: a
          })
        },
        Gi = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const i = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, p.jsxs)("div", {
            className: `rockstargames-sites-legacya626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [a.pageCount > 8 ? (0, p.jsxs)(p.Fragment, {
              children: [(0, p.jsx)(Ri, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, p.jsx)("div", {
                className: Fi,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, p.jsx)(Ri, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, p.jsxs)(p.Fragment, {
              children: [i.slice(-1)[0] + 1 < a.pageCount ? (0, p.jsx)("div", {
                className: Fi,
                children: "..."
              }) : "", (0, p.jsx)(Ri, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var Hi = t(31805);
      const Ui = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, Hi.as)();
          return (0, o.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        Wi = {
          parallaxWrapper: "rockstargames-sites-legacydb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-legacyd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-legacyf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-legacycb5937d1a102ac4a66c4e373e6253946"
        },
        qi = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: i
          } = e;
          return (0, p.jsx)(Hi.zE, {
            scrollAxis: a,
            children: (0, p.jsx)(Ui, {
              children: (0, p.jsx)("div", {
                className: (0, I.classList)(Wi.parallaxWrapper, Wi[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, t) => (0, o.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, p.jsx)("div", {})
              })
            })
          })
        },
        Xi = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const i = (0, I.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const r = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: i(e?.image ?? null)
          })));
          return (0, p.jsx)(Hi.y, {
            className: (0, I.classList)("rockstargames-sites-legacyb8c85703a3c76902e49a61a6afcb81bc", t),
            layers: r,
            style: s
          })
        },
        Yi = "rockstargames-sites-legacyc4aa8e5d29b433c400796d0c493a9a4d",
        Qi = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: i = "",
            style: r = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, p.jsx)(Hi.kQ, {
            x: [a, t],
            className: (0, I.classList)(Yi, i),
            styleOuter: r,
            children: n
          }) : (0, p.jsx)(Hi.kQ, {
            y: [a, t],
            className: (0, I.classList)(Yi, i),
            styleOuter: r,
            children: n
          })
        },
        Ki = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(89544),
                alt: "PC"
              } : {
                src: t(45710),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(65636),
                alt: "PS4"
              } : {
                src: t(8318),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(20357),
                alt: "PS5"
              } : {
                src: t(52047),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(17976),
                alt: "Xbox One"
              } : {
                src: t(60350),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(84923),
                alt: "Xbox Series X|S"
              } : {
                src: t(89825),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        Zi = e => t(e < 100 ? 36399 : e > 99 && e < 500 ? 92627 : e > 499 && e < 750 ? 43864 : 76425),
        Ji = (0, d.defineMessages)({
          sc_link_activity_feed: {
            id: "sc_link_activity_feed",
            defaultMessage: "Activity Feed"
          },
          sc_link_account: {
            id: "sc_link_account",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            defaultMessage: "View My Profile"
          },
          sc_link_messages: {
            id: "sc_link_messages",
            defaultMessage: "Messages"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            defaultMessage: "Do Not Sell My Information"
          },
          sc_link_log_out: {
            id: "sc_link_log_out",
            defaultMessage: "Log Out"
          },
          sc_link_sign_in: {
            id: "sc_link_sign_in",
            defaultMessage: "Sign In"
          },
          sc_link_join_social_club: {
            id: "sc_link_join_social_club",
            defaultMessage: "Sign Up"
          },
          profile_selector_switch_character: {
            id: "profile_selector_switch_character",
            defaultMessage: "Switch Character"
          },
          profile_selector_profile_card: {
            id: "profile_selector_profile_card",
            defaultMessage: "Profile Card"
          },
          profile_selector_mugshot: {
            id: "profile_selector_mugshot",
            defaultMessage: "{userName} mugshot"
          },
          profile_selector_rp_icon: {
            id: "profile_selector_rp_icon",
            defaultMessage: "RP Category"
          },
          sc_menu_drag_handle: {
            id: "sc_menu_drag_handle",
            defaultMessage: "Drag Menu Handle"
          },
          sc_menu_open: {
            id: "sc_menu_open",
            defaultMessage: "Open player menu"
          },
          sc_menu_close: {
            id: "sc_menu_close",
            defaultMessage: "Close player menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          },
          nofications_new: {
            id: "nofications_new",
            defaultMessage: "New notifications"
          }
        }),
        er = {
          pillBtn: "rockstargames-sites-legacye4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-sites-legacyeb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-sites-legacydf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-sites-legacyc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-sites-legacye79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-sites-legacyc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-sites-legacyeabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-sites-legacyb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-sites-legacyf1e0bcba6214698c490b8201bbd850b7"
        },
        ar = (0, d.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const s = (0, d.useIntl)(),
            {
              platform: i,
              platformUsername: r,
              mugshotUrl: n,
              stats: c
            } = a,
            [l, m] = (0, o.useState)(n),
            g = Ki(i, "large");
          return (0, p.jsxs)("div", {
            className: er.scCharacterCard,
            children: [(0, p.jsx)("div", {
              className: er.scAvatar,
              "data-size": "small",
              children: (0, p.jsx)("img", {
                src: l,
                alt: s.formatMessage(Ji.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  m(t(58989))
                }
              })
            }), (0, p.jsx)("div", {
              className: er.scCharacterStats,
              children: (0, p.jsxs)("div", {
                className: er.scCharNames,
                children: [(0, p.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, p.jsx)("div", {
                  className: er.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, p.jsx)("div", {
                  className: er.scRp,
                  children: (0, p.jsxs)("div", {
                    className: er.scRpLevel,
                    children: [(0, p.jsx)("img", {
                      className: er.scRpIcon,
                      src: Zi(c.overview.rank.value),
                      alt: s.formatMessage(Ji.profile_selector_rp_icon)
                    }), (0, p.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), k);
      var tr = t(90250);
      const sr = (0, l.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        ir = sr("languageSelectorOpenedReactive", !1),
        rr = e => ir(e),
        nr = sr("activeSubNavIdReactive", -1),
        cr = e => nr(e),
        or = sr("subNavExtraHeightReactive", -1),
        lr = e => or(e),
        dr = sr("scNavOpenedReactive", !0),
        mr = e => dr(e),
        gr = sr("charListHiddenReactive", !0),
        ur = e => gr(e),
        fr = () => {
          const e = (0, l.useReactiveVar)(ir),
            a = (0, l.useReactiveVar)(nr),
            t = (0, l.useReactiveVar)(or),
            s = (0, l.useReactiveVar)(dr),
            i = (0, l.useReactiveVar)(gr);
          return (0, o.useEffect)((() => {
            i || (e && rr(!1), s && (mr(!1), cr(-1)))
          }), [i]), (0, o.useEffect)((() => {
            !e && i && (s || mr(!0))
          }), [e, i]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: rr,
            activeSubNavId: a,
            setActiveSubNavId: cr,
            subNavExtraHeight: t,
            setSubNavExtraHeight: lr,
            scNavOpened: s,
            setScNavOpened: mr,
            charListHidden: i,
            setCharListHidden: ur
          })), [e, a, t, s, i])
        };
      var pr = t(14963),
        hr = t.n(pr);
      const br = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        kr = e => ({
          text: e.formatMessage(Ji.sc_link_help),
          target: "_self",
          ga: {
            ...br,
            text: Ji.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Ji.sc_link_support),
            location: {
              domain: Xs.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...br,
              text: Ji.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Ji.sc_link_legal),
            location: {
              domain: Xs.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...br,
              text: Ji.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Ji.sc_link_privacy_policy),
            location: {
              domain: Xs.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...br,
              text: Ji.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Ji.sc_link_cookies_policy),
            location: {
              domain: Xs.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...br,
              text: Ji.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Ji.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...br,
              text: Ji.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Ji.sc_link_do_not_sell_my_information),
            location: {
              domain: Xs.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...br,
              text: Ji.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        vr = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: i,
            onClick: r,
            reloadDocument: n,
            children: c,
            ...o
          } = e;
          const l = a?.startsWith("http");
          return (0, p.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              r?.(e), l || n || (i ? (e.preventDefault(), i(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...o,
            children: c
          })
        },
        _r = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: i,
            ga: r,
            dataTestId: n,
            isSubLink: c,
            hasNotifications: o = !1,
            onClickCallback: l = (() => {}),
            tabIndex: m,
            reloadDocument: g = !1,
            onNavigate: f
          } = e;
          const {
            track: h
          } = (0, u.useGtmTrack)(), b = (0, Xs.A)(), k = (0, d.useIntl)();
          let v = s;
          i && (v = i.domain === b.currentSite?.site ? i.path : `https://${b.sites[i.domain]}.rockstargames.com${i.path}`);
          const _ = {
            ...r,
            link_url: v
          };
          return (0, p.jsxs)(vr, {
            className: c ? "rockstargames-sites-legacyfdaa918acc06706cbe191dedd40974af" : "rockstargames-sites-legacycbc80932118c48d8ec14448d8913d068",
            "data-testid": n || "menuLink",
            title: a,
            to: v,
            target: t,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: m,
            onClick: e => {
              h(_), l(e)
            },
            onNavigate: f,
            children: [a, o && (0, p.jsx)("div", {
              className: "rockstargames-sites-legacya2d268c9fb03a7271b47de447d663da9",
              children: (0, p.jsx)("span", {
                className: "rockstargames-sites-legacycf5a6b05c52c6c4faf3236055d4670c3",
                children: k.formatMessage(Ji.nofications_new)
              })
            })]
          })
        },
        yr = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: c = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: g,
            setActiveSubNavId: f,
            setSubNavExtraHeight: h,
            reloadDocument: b = !1,
            onClickCallback: k = (() => {}),
            onNavigate: v
          } = e;
          const {
            windowWidth: _,
            windowHeight: y
          } = (0, m.useWindowResize)(), {
            track: x
          } = (0, u.useGtmTrack)(), {
            navOpen: N
          } = (0, u.useRockstarUserState)(), j = (0, o.useRef)(null), [w, S] = (0, o.useState)(0), [C, T] = (0, o.useState)(0), [I, L] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            g !== a && !1 === I && L(!0), g === a && L(!1)
          }), [g]), (0, o.useEffect)((() => {
            if (!j.current) return;
            S(j?.current?.scrollHeight);
            const e = window.getComputedStyle(j.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), T(a)
            }
          }), [j, _, y]), d.length > 0 ? (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsxs)("button", {
              className: "rockstargames-sites-legacyaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: N ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), x(n), g === a ? (f(-1), h(0)) : (f(a), h(w + C + C))
              },
              children: [(0, p.jsx)("span", {
                className: "rockstargames-sites-legacyfd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, p.jsx)("span", {
                className: "rockstargames-sites-legacybe674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, p.jsx)("nav", {
              className: "rockstargames-sites-legacyff1911053a3515534dd825554a85909e",
              ref: j,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${w}px`
              },
              children: d.map((e => (0, o.createElement)(_r, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !N ? -1 : 0,
                onNavigate: v
              })))
            })]
          }) : (0, p.jsx)(_r, {
            text: t,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: c,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: k,
            tabIndex: N ? 0 : -1,
            reloadDocument: b,
            onNavigate: v
          })
        },
        xr = e => {
          let {
            sc: a,
            location: t,
            onNavigate: s
          } = e;
          const {
            windowWidth: i,
            windowHeight: r
          } = (0, m.useWindowResize)(), n = (0, d.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: l,
            activeSubNavId: g,
            setActiveSubNavId: f,
            subNavExtraHeight: h,
            setSubNavExtraHeight: b
          } = fr(), {
            setSelectedCharacterTuple: k,
            navOpen: v
          } = (0, u.useRockstarUserState)(), _ = (0, m.useLocale)(), y = (0, m.toScLocaleString)(_), [x, N] = (0, o.useState)(""), j = `${a.login}?returnUrl=${x}&lang=${y}`, w = `${a.signup}&returnUrl=${x}&lang=${y}`, S = (0, o.useMemo)((() => (0, Xs.A)()), []), C = (0, o.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(Ji.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: Ji.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Ji.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: Ji.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, kr(e)])(n, j, w);
            return e
          }), [n, j, w, S]), [T, I] = (0, o.useState)(0), L = (0, o.createRef)(), M = () => {
            if (L.current) {
              const {
                current: e
              } = L, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), I(a + e)
              } else I(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            N(e)
          }), [JSON.stringify(t)]), (0, o.useEffect)((() => {
            k(!1)
          }), []), (0, o.useEffect)((() => {
            M(), hr()((() => {
              setTimeout(M, 0)
            }), 300)
          }), [i, r]), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)("nav", {
              className: "rockstargames-sites-legacyb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, p.jsx)("div", {
                className: "rockstargames-sites-legacyc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: L,
                style: {
                  "--scNavWrap-max-height": `${h+T}px`
                },
                children: C.map((e => (0, o.createElement)(yr, {
                  ...e,
                  activeSubNavId: g,
                  setActiveSubNavId: f,
                  setSubNavExtraHeight: b,
                  onNavigate: s,
                  key: e.text
                })))
              })
            }), (0, p.jsx)("div", {
              className: "rockstargames-sites-legacya6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: v ? null : "hidden"
              },
              children: (0, p.jsx)(Ks, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: c,
                setLanguageSelectorOpened: e => {
                  f(-1), l(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        },
        Nr = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        jr = "CharacterButton:characterName",
        wr = "CharacterButton:platform",
        Sr = "CharacterButton:avatar",
        Cr = "CharacterButton:rankValue",
        Tr = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: i
          } = e;
          const r = (0, d.useIntl)(),
            {
              currentCharId: n,
              setCurrentCharId: c
            } = (0, u.useRockstarUserState)(),
            {
              track: l
            } = (0, u.useGtmTrack)(),
            m = (0, o.createRef)(),
            {
              platform: g,
              platformUsername: f,
              mugshotUrl: h,
              stats: b
            } = a,
            [k, v] = (0, o.useState)(h),
            [_] = (0, o.useState)(a.index),
            y = Ki(g, "large"),
            x = n === a.index;
          return (0, o.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, p.jsxs)("button", {
            className: "rockstargames-sites-legacyd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), c(_), l({
                event: "character_selector_select",
                text: Nr[g] ?? "",
                position: _
              })
            },
            ref: m,
            tabIndex: i,
            children: [(0, p.jsx)("div", {
              className: "rockstargames-sites-legacybbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, p.jsx)("img", {
                src: k,
                alt: r.formatMessage(Ji.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  v(t(58989))
                },
                "data-testid": Sr
              })
            }), (0, p.jsxs)("div", {
              className: "rockstargames-sites-legacyc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, p.jsxs)("div", {
                className: "rockstargames-sites-legacye9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, p.jsx)("img", {
                  src: y.src,
                  alt: y.alt,
                  "data-testid": wr
                }), (0, p.jsx)("div", {
                  className: "rockstargames-sites-legacyb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  "data-testid": jr,
                  children: f
                })]
              }), (0, p.jsx)("div", {
                className: "rockstargames-sites-legacya5e3df42966a50f3dd88bbcb57536617",
                children: (0, p.jsxs)("div", {
                  className: "rockstargames-sites-legacya6776312350028898320ba59145a39be",
                  children: [(0, p.jsx)("img", {
                    className: "rockstargames-sites-legacyb266652910ad34c0e8e097b212a958f0",
                    src: Zi(parseInt(b.overview.rank.value)),
                    alt: r.formatMessage(Ji.profile_selector_rp_icon)
                  }), (0, p.jsx)("span", {
                    "data-testid": Cr,
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Ir = {
          pillBtn: "rockstargames-sites-legacyd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-legacybc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-legacyb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-legacyc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-legacya8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-legacyc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-legacyda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-legacyd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-legacyd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-legacyb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-legacya581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-legacybdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-legacydc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-legacyb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-legacyf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-legacyf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-legacyb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-legacyec696aafed90a7a4c69dc53da0a5bb36"
        },
        Lr = "ProfileCard:characterName",
        Mr = "ProfileCard:avatar",
        Er = "ProfileCard:bankValue",
        Pr = "ProfileCard:cashValue",
        zr = "ProfileCard:rankValue",
        Br = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: i
          } = (0, u.useRockstarUser)(), {
            track: r
          } = (0, u.useGtmTrack)(), n = (0, d.useIntl)(), [c, l] = (0, o.useState)([]), [m, g] = (0, o.useState)(null), [f, h] = (0, o.useState)(null), [b, k] = (0, o.useState)(!1), [v, _] = (0, o.useState)(-1), [y, x] = (0, o.useState)([]), [N, j] = (0, o.useState)(0), w = t(58989), [S, C] = (0, o.useState)("0"), [T, I] = (0, o.useState)("0"), L = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            P((0, p.jsx)("img", {
              src: w,
              alt: n.formatMessage(Ji.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [E, P] = (0, o.useState)((0, p.jsx)("img", {
            className: Ir.scAvatarImg,
            src: a.mugshotUrl,
            alt: n.formatMessage(Ji.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: M,
            "data-testid": Mr
          }));
          (0, o.useEffect)((() => {
            l(i.crews ?? [])
          }), [i.crews]), (0, o.useEffect)((() => {
            P((0, p.jsx)("img", {
              src: a.mugshotUrl,
              alt: i.nickname,
              onError: M,
              "data-testid": Mr
            })), C(L(a.stats.overview.bank.value)), I(L(a.stats.overview.cash.value)), j(parseInt(a.stats.overview.rank.value))
          }), [a, i.nickname]), (0, o.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), h(e.crewColour), _(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [c]), (0, o.useEffect)((() => {
            const e = [];
            if (!b && v > -1)
              for (let a = 5; a > v; a -= 1) e.push((0, p.jsx)("div", {
                className: Ir.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [v, b, f]);
          const z = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, p.jsxs)("div", {
            className: Ir.scProfileDetails,
            onClick: z,
            onKeyUp: z,
            role: "button",
            tabIndex: -1,
            children: [(0, p.jsxs)("div", {
              className: Ir.scAvatar,
              children: [E, (0, p.jsx)("div", {
                className: Ir.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, p.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, p.jsxs)("div", {
              className: Ir.scProfileStats,
              children: [(0, p.jsx)("div", {
                className: Ir.scNames,
                children: (0, p.jsxs)("div", {
                  className: Ir.scTagsNames,
                  children: [(0, p.jsx)("span", {
                    className: Ir.scUserName,
                    "data-testid": Lr,
                    children: a.platformUsername
                  }), m && (0, p.jsxs)("span", {
                    className: Ir.scCrewName,
                    "data-arrow-tag": b,
                    children: [m, !b && (0, p.jsx)("div", {
                      className: Ir.scCrewRankBar,
                      children: y
                    })]
                  })]
                })
              }), (0, p.jsxs)("div", {
                className: Ir.scProgress,
                children: [(0, p.jsxs)("div", {
                  className: Ir.scRpLevel,
                  children: [(0, p.jsx)("img", {
                    className: Ir.scRpIcon,
                    src: Zi(N),
                    alt: n.formatMessage(Ji.profile_selector_rp_icon)
                  }), (0, p.jsx)("span", {
                    "data-testid": zr,
                    children: a.stats.overview.rank.value
                  })]
                }), (0, p.jsxs)("div", {
                  className: Ir.scMoney,
                  children: [(0, p.jsxs)("span", {
                    className: Ir.scCash,
                    "data-testid": Pr,
                    children: ["$", T]
                  }), (0, p.jsxs)("span", {
                    className: Ir.scBank,
                    "data-testid": Er,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        Or = (e, a) => {
          const [t, s] = (0, o.useState)(0);
          return (0, o.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, i = t.getBoundingClientRect(), {
                width: r
              } = i;
              let n = r;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(n)
            }
          }), [e]), t
        },
        Ar = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: i = null,
            slideClickCallback: r = null,
            children: n = [],
            disablePager: c = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, o.createRef)(),
            m = Or(d, !1),
            [g, u] = (0, o.useState)(!1),
            [f, h] = (0, o.useState)(0),
            [b, k] = (0, o.useState)(0),
            [v, _] = (0, o.useState)([s]),
            [y, x] = (0, o.useState)(v[0]),
            [N, j] = (0, o.useState)(252),
            [w, S] = (0, o.useState)(0),
            [C, T] = (0, o.useState)([]),
            [I, L] = (0, o.useState)([]),
            [M, E] = (0, o.useState)(!1),
            P = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(a)
            },
            z = e => {
              if (!0 === g || 0 === b || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > b ? 1 : -1,
                r = Math.abs(b - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                u(!0);
                const e = f - 1 < 0 ? 0 : f - 1;
                h(e), x(v[e]), i && i(e)
              })() : (() => {
                if (!0 === g) return;
                u(!0);
                let e = f + 1 >= v.length ? v.length - 1 : f + 1;
                e < 0 && (e = 0), h(e), x(v[e]), i && i(e)
              })(), k(0)) : x(v[f] + r * s)
            },
            B = () => {
              !0 !== g && !0 !== l && (u(!0), !0 !== g && (x(v[f]), k(0)))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, o.createRef)())
            })), T(e)
          }), [n]), (0, o.useEffect)((() => {
            if (C.length < 1) return;
            j(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(t + a)
          }), [C]), (0, o.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              u(!1)
            }), t)
          }), [g, t]), (0, o.useEffect)((() => {
            _(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * m - .5 * N - 2 * s + w : (0 === e && (a = s - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (m - (s - w))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * m - .5 * N + .5 * w)), a)
            })(a)))), 1 === n.length ? E(!0) : E(!1)
          }), [d.current, n, m]), (0, o.useEffect)((() => {
            const e = (a = f, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            L(e)
          }), [n, f]), (0, o.useEffect)((() => {
            !0 !== c && !0 !== l || x(v[0])
          }), [l, c, v]), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)("div", {
              className: "rockstargames-sites-legacyab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: P,
              onTouchMove: z,
              onTouchEnd: B,
              onMouseDown: P,
              onMouseMove: z,
              onMouseUp: B,
              onClick: () => {
                null !== r && r(f)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, p.jsx)("div", {
                className: "rockstargames-sites-legacya93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": M,
                style: {
                  transform: M ? null : `translateX(${y}px)`
                },
                children: n.map(((e, a) => (0, p.jsx)("div", {
                  className: "rockstargames-sites-legacyc013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === c && (0, p.jsx)("div", {
              className: "rockstargames-sites-legacyda8cfef07bf44e9a44839e2723ec61bb",
              children: I.map((e => (0, p.jsx)("div", {
                className: "rockstargames-sites-legacyfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Dr = {
          pillBtn: "rockstargames-sites-legacyaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-legacyd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-legacydde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-legacyc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-legacya4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-legacyb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-legacya1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-legacya326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-legacyd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-legacybb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-legacya7f1e2d78519eaf099bd43c6ad07abc9"
        },
        Vr = (0, m.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: i,
            menuPadding: r,
            longCharList: n,
            setLongCharList: c,
            isMobileMode: g,
            setIsMobileMode: f,
            location: h,
            onNavigate: b
          } = e;
          const {
            windowWidth: k,
            windowHeight: v
          } = (0, m.useWindowResize)(), _ = (0, d.useIntl)(), {
            languageSelectorOpened: y,
            setLanguageSelectorOpened: x,
            activeSubNavId: N,
            setActiveSubNavId: j,
            subNavExtraHeight: w,
            setSubNavExtraHeight: S,
            scNavOpened: C,
            setScNavOpened: T
          } = fr(), [I, L] = (0, o.useState)(""), {
            lsSettings: M
          } = (0, m.useRockstarWebLSSettings)(), {
            track: E
          } = (0, u.useGtmTrack)(), P = (0, l.useRockstarTokenPing)(), {
            data: z,
            loggedIn: B
          } = (0, u.useRockstarUser)(), {
            charactersNeeded: O,
            currentCharId: A,
            hasNotifications: D,
            navOpen: V,
            setCurrentCharId: $,
            setHasNotifications: F,
            setSelectedCharacterTuple: R,
            setUserData: G
          } = (0, u.useRockstarUserState)(), [H, U] = (0, o.useState)(null), [W, q] = (0, o.useState)(null), [X, Y] = (0, o.useState)(!1), [Q, K] = (0, o.useState)(!1), [Z, J] = (0, o.useState)(0), ee = (0, o.createRef)(), ae = Or(ee, !1), te = (0, o.createRef)(), [se, ie] = (0, o.useState)(0), [re, ne] = (0, o.useState)([]), [ce, oe] = (0, o.useState)(244), le = (0, o.useRef)(null), de = (0, o.useMemo)((() => (0, Xs.A)()), []), me = (0, o.useMemo)((() => ((e, a, t, s, i) => [{
            text: e.formatMessage(Ji.sc_link_activity_feed),
            location: {
              domain: Xs.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...br,
              text: Ji.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Ji.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Ji.sc_link_settings),
              location: {
                domain: Xs.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...br,
                text: Ji.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(Ji.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...br,
                text: Ji.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Ji.sc_link_messages),
              location: {
                domain: Xs.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...br,
                text: Ji.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Ji.sc_link_game_activation),
              location: {
                domain: Xs.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...br,
                text: Ji.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Ji.sc_link_notifications),
            location: {
              domain: Xs.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...br,
              text: Ji.sc_link_notifications.defaultMessage,
              location: {
                domain: Xs.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Ji.sc_link_crews),
            location: {
              domain: Xs.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...br,
              text: Ji.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Ji.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Ji.sc_link_my_friends),
              location: {
                domain: Xs.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...br,
                text: Ji.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Ji.sc_link_import_friends),
              location: {
                domain: Xs.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...br,
                text: Ji.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Ji.sc_link_find_friends),
              location: {
                domain: Xs.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...br,
                text: Ji.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, kr(e), {
            text: e.formatMessage(Ji.sc_link_log_out),
            href: `${a.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...br,
              text: Ji.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(_, a, z, D, I, window)), [_, a, z, D, I, de]), ge = () => {
            K(r + ce * Z < ae)
          }, ue = () => {
            if (te.current) {
              const {
                current: e
              } = te, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ie(a + e)
              } else ie(a)
            }
          };
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            de.currentSite?.site === Xs.C.socialClub && (e = encodeURIComponent("/")), L(e)
          }), [h]), (0, o.useEffect)((() => {
            ne(z.characters[O] ?? [])
          }), [z, O]), (0, o.useEffect)((() => {
            z && G(z)
          }), [z]), (0, o.useEffect)((() => {
            const e = z?.characters.gtao;
            if (null !== B && !e.length) return void R(!1);
            if (null == A || !e.length) return;
            const a = e?.[A] ?? e?.[0] ?? null;
            R(!!a?.platform && [a.platform, a.characterSlot])
          }), [A, z, B]), (0, o.useEffect)((() => {
            (async () => {
              if (!z?.id) return;
              const {
                count: e
              } = await (0, m.coreScApiFetch)("notification/count", {
                pingBearer: P
              });
              F(e > 0)
            })()
          }), [z]), (0, o.useEffect)((() => {
            ge()
          }), [ce]), (0, o.useEffect)((() => {
            s(!0), f(k < 768), f(k < 768 || v < 649)
          }), [k, v]), (0, o.useEffect)((() => {
            let e = re.length - 1;
            e < 0 && (e = 0), J(e);
            const a = re.length > 0 ? re[A] ?? re[0] : null;
            if (!a) return;
            const t = null !== a ? Ki(a.platform, "large") : null;
            q(t), U(a), re.length > 1 ? Y(!0) : Y(!1), c(re.length - 1 > 3)
          }), [A, re]), (0, o.useEffect)((() => {
            ge()
          }), [Z, g, k, re]), (0, o.useEffect)((() => {
            ue(), hr()((() => {
              setTimeout(ue, 0)
            }), 300)
          }), [k, v]), (0, o.useEffect)((() => {
            const e = M?.currentCharId ?? 0;
            e !== A && $(Math.max(0, Math.min(e, re.length - 1)))
          }), [re, M]), (0, p.jsxs)(p.Fragment, {
            children: [null !== H && "gtao" === O && (0, p.jsxs)("div", {
              className: Dr.scProfile,
              ref: le,
              tabIndex: -1,
              "aria-label": _.formatMessage(Ji.profile_selector_profile_card),
              children: [(0, p.jsx)(Br, {
                s: Dr,
                character: H,
                platformTag: W
              }), !0 === X && (0, p.jsxs)("div", {
                className: Dr.scCharacterSelector,
                children: [(0, p.jsx)("button", {
                  className: Dr.scCharacterSelectBtn,
                  "aria-hidden": !V,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), E({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, p.jsx)("span", {
                    children: (0, p.jsx)(d.FormattedMessage, {
                      ...Ji.profile_selector_switch_character
                    })
                  })
                }), !1 === g && (0, p.jsx)("div", {
                  className: Dr.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": t,
                  ref: i,
                  children: re.map((e => (0, p.jsx)(Tr, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: oe
                  }, e.mugshotUrl)))
                }), !0 === g && (0, p.jsx)("div", {
                  className: Dr.scCharacterList,
                  "data-single-item": 2 === re.length,
                  "data-swiper-disabled": Q,
                  "aria-hidden": t,
                  ref: ee,
                  children: (0, p.jsx)(Ar, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      E({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: Q,
                    disableSwiper: Q,
                    children: re.filter(((e, a) => a !== A)).map((e => (0, o.createElement)(Tr, {
                      characterData: e,
                      setMobileCardWidth: oe,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, p.jsxs)("nav", {
              className: Dr.scNav,
              "aria-hidden": !V,
              children: [(0, p.jsx)("button", {
                className: Dr.scNavHeader,
                type: "button",
                "data-opened": C,
                "data-nav-opened": V,
                tabIndex: C ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), C || T(!0)
                },
                "data-testid": "playerButton",
                children: (0, p.jsx)("span", {
                  children: z.nickname
                })
              }), (0, p.jsx)("div", {
                className: Dr.scNavWrap,
                "data-opened": C,
                "data-logged-in": "true",
                ref: te,
                style: {
                  "--scNavWrap-max-height": `${se+w}px`
                },
                children: me.map(((e, a) => (0, o.createElement)(yr, {
                  ...e,
                  id: a,
                  activeSubNavId: N,
                  setActiveSubNavId: j,
                  setSubNavExtraHeight: S,
                  onNavigate: b,
                  key: e.text
                })))
              })]
            }), (0, p.jsx)("div", {
              className: Dr.scLanguageSelector,
              style: {
                visibility: V ? null : "hidden"
              },
              children: (0, p.jsx)(Ks, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: y,
                setLanguageSelectorOpened: x,
                location: h
              })
            })]
          })
        })),
        $r = {
          scMenu: "rockstargames-sites-legacyebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-legacyf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-legacye3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-legacyff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-legacyba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-legacyd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-legacyd8e443f5d0d9171449f5f1042f80aa17"
        },
        Fr = (0, d.withIntl)((e => {
          let {
            location: a,
            onNavigate: s
          } = e;
          const {
            windowHeight: i
          } = (0, m.useWindowResize)(), r = (0, d.useIntl)(), {
            languageSelectorOpened: n,
            setLanguageSelectorOpened: c,
            setActiveSubNavId: g,
            scNavOpened: f,
            setScNavOpened: h,
            charListHidden: b,
            setCharListHidden: k
          } = fr(), [v, _] = (0, o.useState)(!1), {
            navHidden: y = !1
          } = (0, l.useState)(), {
            loggedIn: x
          } = (0, u.useRockstarUser)(), {
            currentCharId: N,
            navOpen: j,
            setNavOpen: w,
            userData: S
          } = (0, u.useRockstarUserState)(), {
            track: C
          } = (0, u.useGtmTrack)(), [T, I] = (0, o.useState)(!1), L = (0, l.useReactiveVar)(u.scConfig), M = (0, o.useRef)(), [E, P] = (0, o.useState)(0), z = (0, o.createRef)(), [B, O] = (0, o.useState)(!1), [A, D] = (0, o.useState)(0), [V, $] = (0, o.useState)(!1), {
            mutateLSSettings: F,
            lsSettings: R
          } = (0, m.useRockstarWebLSSettings)(), G = (0, o.useCallback)((e => {
            k(e), M.current && !0 === e && (M.current.scrollTop = 0)
          }), [M]);
          return (0, o.useEffect)((() => {
            null !== N && R.currentCharId !== N && F({
              key: "currentCharId",
              value: N
            }), !1 === x ? F({
              key: "currentCharId",
              value: null
            }) : x && !S && C({
              event: "account_synced"
            })
          }), [N, x]), (0, o.useEffect)((() => {
            M.current && (!1 === b && !1 === T && (M.current.style.height = `${M.current.scrollHeight}px`), !0 === b && (M.current.style.height = null))
          }), [b, M, T]), (0, o.useEffect)((() => {
            const e = () => {
                w(!1), G(!0)
              },
              a = a => {
                const t = z?.current && a?.composedPath().includes(z.current);
                j && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [z]), (0, o.useEffect)((() => {
            w(!1), G(!0)
          }), [y]), (0, o.useEffect)((() => {
            if (z.current) {
              const {
                current: e
              } = z, a = window.getComputedStyle(e);
              P(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [z]), (0, o.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            z.current && _(z?.current?.scrollHeight >= i)
          }), [z, i]), (0, o.useEffect)((() => {
            j || (g(-1), c(!1))
          }), [j]), (0, o.useEffect)((() => {
            n && (b || G(!0), f && (h(!1), g(-1)))
          }), [n]), (0, o.useEffect)((() => {
            f && (n && c(!1), b || G(!0))
          }), [f]), null === x ? null : (0, p.jsxs)(tr.A, {
            enabled: !!j,
            removeScrollBar: !1,
            children: [(0, p.jsxs)("div", {
              className: [$r.scMenu, j ? $r.navOpen : ""].join(" "),
              "data-logged-in": x,
              "data-mac-browser": V,
              "data-scroll-mode": v,
              ref: z,
              "aria-hidden": !j,
              children: [(0, p.jsx)("button", {
                className: $r.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  D(a)
                },
                onTouchMove: e => {
                  if (0 === A) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(A - a) > 1 && (D(0), w(!1))
                },
                children: (0, p.jsx)("img", {
                  className: $r.dragHandle,
                  src: t(68128),
                  alt: r.formatMessage(Ji.sc_menu_drag_handle)
                })
              }), x ? (0, p.jsx)(Vr, {
                sc: L,
                charListHidden: b,
                hideCharacterList: G,
                refCharacterListDesktop: M,
                menuPadding: E,
                longCharList: T,
                setLongCharList: I,
                isMobileMode: B,
                setIsMobileMode: O,
                location: a,
                onNavigate: s
              }) : (0, p.jsx)(xr, {
                sc: L,
                navOpen: j,
                location: a,
                onNavigate: s
              })]
            }), (0, p.jsx)("div", {
              className: [$r.scOverlay, j ? $r.navOpen : ""].join(" "),
              "data-logged-in": x
            })]
          })
        }), k),
        Rr = t(58989),
        Gr = t(81764),
        Hr = (0, d.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, d.useIntl)(),
            {
              data: s
            } = (0, u.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: r,
              navOpen: n,
              setNavOpen: c
            } = (0, u.useRockstarUserState)(),
            {
              track: l
            } = (0, u.useGtmTrack)(),
            [m, g] = (0, o.useState)(null),
            [f, h] = (0, o.useState)(!1),
            [b, k] = (0, o.useState)(null),
            [v, _] = (0, o.useState)(!1),
            [y, x] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            x(s.characters[i] ?? [])
          }), [s, i]);
          const N = (0, o.useCallback)((e => {
            e.stopPropagation(), c(!n), 1 == !n && a(null), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, o.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (y?.[r]?.mugshotUrl ?? s?.avatar) || Rr : Gr,
              t = Ki(y?.[r]?.platform, "small") ?? null;
            k(t), g(a), h(e), _(!!y?.[r]?.mugshotUrl)
          }), [s, y, r, Rr, Gr]), (0, p.jsxs)("button", {
            className: "rockstargames-sites-legacydc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": v,
            "aria-label": t.formatMessage(n ? Ji.sc_menu_close : Ji.sc_menu_open),
            "aria-expanded": n,
            type: "button",
            onClick: N,
            "data-testid": "avaterMenuButton",
            "data-logged-in": Boolean(f),
            children: [(0, p.jsx)("img", {
              className: "rockstargames-sites-legacyce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                g(Rr)
              },
              alt: s?.nickname || ""
            }), f && null !== b && (0, p.jsx)("img", {
              className: "rockstargames-sites-legacyaaf21e74a659089f743bb160bdf95046",
              src: b.src,
              alt: b.alt
            }), f && (0, p.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-legacycf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": y?.[r]?.platform ?? null
            })]
          })
        }), k),
        Ur = {
          pillBtn: "rockstargames-sites-legacyb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-sites-legacyfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-sites-legacya586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-sites-legacyccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-sites-legacye4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-sites-legacyd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-sites-legacye56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-sites-legacyc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-sites-legacybf34746d222495ab8e30cede8de42d71",
          promoModuleWrapper: "rockstargames-sites-legacyf6d46a24b050aad98fc3aae387b75586"
        },
        Wr = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: i,
            ctaLink: r = "https://rockstargames.com",
            gradient: n = !0,
            image: c,
            imageOrientation: l = "right",
            title: d = "",
            name: m = ""
          } = e;
          const [f, h] = (0, o.useState)(!1), {
            ref: b,
            inView: k
          } = (0, g.useInView)({
            threshold: .6
          }), {
            track: v
          } = (0, u.useGtmTrack)(), _ = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,I.useGetCdnSource)(c)??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, o.useEffect)((() => {
            k && !f && (v({
              event: "page_section_impression",
              element_placement: m
            }), h(!0))
          }), [k]), (0, p.jsx)(p.Fragment, {
            children: (0, p.jsx)("div", {
              className: Ur.promoModuleWrapper,
              children: (0, p.jsxs)(O.motion.div, {
                className: Ur.promoModule,
                style: {
                  ..._
                },
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  ease: "easeIn",
                  duration: .4
                },
                ref: b,
                children: [(0, p.jsx)("div", {
                  className: [Ur.promoModuleImage, n ? Ur.gradient : "", "left" === l ? Ur.left : Ur.right].join(" ")
                }), (0, p.jsxs)("div", {
                  className: Ur.promoModuleContentContainer,
                  children: [(0, p.jsx)(cs.A, {
                    brands: t,
                    className: Ur.promoModuleBrands
                  }), (0, p.jsxs)("div", {
                    className: Ur.promoModuleTextContent,
                    children: [d && (0, p.jsx)("h3", {
                      children: d
                    }), s && (0, p.jsx)("p", {
                      children: s
                    })]
                  }), i && (0, p.jsx)(ms, {
                    to: r,
                    text: i,
                    onClick: () => {
                      v({
                        event: "cta_other",
                        element_placement: "promo module",
                        link_url: r,
                        text: i
                      })
                    }
                  })]
                })]
              })
            })
          })
        },
        qr = {
          responsiveFlexBox: "rockstargames-sites-legacycef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-legacya8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-legacybee8268780b292e5bc0da0b497e2c28f"
        },
        Xr = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, p.jsx)("div", {
            className: [qr.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Yr = {
          responsiveFlexItem: "rockstargames-sites-legacyae579f6183cf73c897e68c8aae5c9d9d"
        },
        Qr = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, p.jsx)("div", {
            className: [Yr.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Kr = {
          responsiveGridBox: "rockstargames-sites-legacya28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-legacybeddf36313a28976090b5a8b04d2594a"
        },
        Zr = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: i,
            style: r
          } = e;
          const n = r ? {
            ...r
          } : {};
          return void 0 !== t && (n.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== i && (n.gridTemplateRows = `repeat(${i}, 1fr)`), (0, p.jsx)("div", {
            className: [Kr.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: a
          })
        },
        Jr = {
          responsiveGridBox: "rockstargames-sites-legacya39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-legacybe7a0966e2f0457c1172ac9da99020c6"
        },
        en = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, p.jsx)("div", {
            className: [Jr.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        an = {
          responsiveImage: "rockstargames-sites-legacye31b43dce2e720669fb90bf539d22197"
        },
        tn = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: i,
            style: r = {}
          } = e;
          const [n, c] = (0, m.usePreloadImg)(a);
          return n ? (r.backgroundImage = `url(${a})`, (0, p.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [an.responsiveImage, s ? an.animateBox : "", t].join(" "),
            style: {
              ...r,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        sn = {
          responsiveSection: "rockstargames-sites-legacyfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-legacybdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        rn = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: i
          } = e;
          return (0, p.jsx)("section", {
            className: [sn.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: i ? (0, p.jsx)("div", {
              className: sn.maxWidth,
              children: a
            }) : a
          })
        },
        nn = e => {
          let {
            disableLink: a,
            className: t
          } = e;
          const s = a ? "span" : f.A;
          return (0, p.jsx)(s, {
            className: [a ? "rockstargames-sites-legacyba0c20f78999975dfb8d9cff0de44b34" : "rockstargames-sites-legacye5e749488d1daa3beceb8931e09f14e5", t || ""].join(" "),
            alt: "Rockstar Games Home",
            ...!a && {
              to: "/"
            }
          })
        };
      var cn = t(55636);
      const on = e => {
          let {
            html: a
          } = e;
          return (0, p.jsx)("div", {
            children: (0, cn.Ay)(a)
          })
        },
        ln = e => {
          let {
            thresholds: a,
            onThresholdReached: t,
            children: s
          } = e;
          const [i, r] = (0, o.useState)([]), [n, c] = (0, o.useState)(new Set);
          return (0, o.useEffect)((() => {
            const e = Array.from(new Set(a));
            e.sort(((e, a) => e - a)), r(e)
          }), [a]), (0, p.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [i.map((e => (0, p.jsx)(g.InView, {
              threshold: e,
              onChange: a => ((e, a) => {
                e && !n.has(a) && c((e => {
                  const s = new Set(e);
                  return i.forEach((e => {
                    e <= a && !s.has(e) && (s.add(e), t(e))
                  })), s
                }))
              })(a, e),
              triggerOnce: !0,
              children: a => {
                let {
                  ref: t
                } = a;
                return (0, p.jsx)("div", {
                  ref: t,
                  style: {
                    height: "1px",
                    position: "absolute",
                    top: 100 * e + "%"
                  }
                })
              }
            }, e))), s]
          })
        },
        dn = () => {
          const {
            pathname: e
          } = (0, Ka.useLocation)();
          return (0, o.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var mn = t(37017);
      const gn = e => {
        let {
          children: a
        } = e;
        return (0, p.jsx)("div", {
          className: "rockstargames-sites-legacyecd6dfa85759d767ab1c7c18f4cfbda7",
          children: (0, p.jsx)("div", {
            className: "rockstargames-sites-legacyfffab0d3ace375c65ad804002a45f219",
            children: a
          })
        })
      };
      var un = t(58209),
        fn = t(94869);
      const pn = {
          pillBtn: "rockstargames-sites-legacyae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-sites-legacyd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-sites-legacyfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-sites-legacydd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-sites-legacyeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-sites-legacyd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-sites-legacyfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-sites-legacyabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-sites-legacyea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-sites-legacyc31731d09d8118c6a82fe6edb193dc50"
        },
        hn = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: i
          } = e;
          const {
            track: r
          } = (0, u.useGtmTrack)(), {
            loggedIn: n
          } = (0, u.useRockstarUser)(), {
            refetch: c
          } = (0, l.useQuery)(fn.UserGetVote, {
            skip: !0
          }), [d] = (0, l.useMutation)(fn.UserCastVote), [m, g] = (0, o.useState)(null), f = (0, o.useCallback)((async e => {
            r({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${s} ${t}`
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              i = await d({
                variables: a
              });
            g(i?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, o.useEffect)((() => {
            (async () => {
              if (!n || !t || !s) return;
              const e = await c({
                foreign_id: t,
                foreign_type: s
              });
              g(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, n]), (0, p.jsx)("div", {
            className: pn.userVote,
            children: (0, p.jsxs)("div", {
              className: pn.voteContent,
              children: [(0, p.jsxs)("div", {
                className: pn.info,
                children: [(0, p.jsx)("h3", {
                  children: i
                }), (0, p.jsx)("p", {
                  children: a
                })]
              }), (0, p.jsxs)("div", {
                className: [pn.voteButtons, n ? "" : pn.loggedOutButtons].join(" "),
                children: [(0, p.jsx)("button", {
                  onClick: () => f(!0),
                  className: [pn.upVote, m ? pn.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, p.jsx)("button", {
                  className: [pn.downVote, !1 === m ? pn.voteButtonActive : ""].join(" "),
                  onClick: () => f(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        bn = {
          videoPreview: "rockstargames-sites-legacyc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-legacyec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-legacyab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-legacye84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-legacya322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-legacyf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-legacydebff452a4923aded7de826c081bab5d"
        },
        kn = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [i] = (0, m.usePreloadImg)(s());
          return (0, p.jsx)("div", {
            className: [bn.screencap, i ? bn.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        vn = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: i,
            toExplicit: r
          } = e;
          const n = r ?? `/videos/${s.id}`,
            c = {
              className: bn.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            o = (0, p.jsxs)("div", {
              className: bn.card,
              children: [(0, p.jsx)(kn, {
                video: s,
                size: i
              }), (0, p.jsxs)("div", {
                className: bn.info,
                children: [a ? (0, p.jsx)("div", {
                  className: bn.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, p.jsx)("h5", {
                  className: bn.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, p.jsx)("a", {
            href: n,
            target: "_blank",
            ...c,
            children: o
          }) : (0, p.jsx)(f.A, {
            to: n,
            ...c,
            children: o
          })
        },
        _n = {
          carousel: "rockstargames-sites-legacyd8e71d378f6d4a968e8ac7d621e5f32a",
          slidesContent: "rockstargames-sites-legacyfb10242b3a108773d6775a7f2a0d9846",
          text: "rockstargames-sites-legacya3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-sites-legacyf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-sites-legacyd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-sites-legacya879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-sites-legacyb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-sites-legacyc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-sites-legacye25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-sites-legacydd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-sites-legacyb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-sites-legacydddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-sites-legacya7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-sites-legacye1d7433489996eb9fa890d452ebcb042"
        },
        yn = (0, m.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            track: i
          } = (0, u.useGtmTrack)(), {
            setBodyIsLocked: r
          } = (0, m.useBodyScrollable)("VideoCarousel"), [n, c] = (0, o.useState)(0), [l, d] = (0, o.useState)(0), g = (0, o.useRef)(null), h = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            if (!g.current || !h.current) return;
            const e = new(es())(g.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                c(n - 1 < 0 ? 0 : n - 1), d(0)
              },
              i = () => {
                const e = n + 1 >= s.length - 1 ? s.length - 1 : n + 1;
                c(e), d(0)
              },
              o = e => {
                d(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !h.current?.classList.contains(_n.dragging) || a() && r(!0)
              },
              l = () => {
                a() && r(!1), d(0)
              },
              m = e => {
                "press" === e.type && g.current?.classList.add(`${_n.disableClick}`), "tap" === e.type && (g.current?.classList.remove(`${_n.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                a() && r(!1), g.current && g.current.classList.remove(`${_n.disableClick}`)
              },
              f = () => {
                a() && r(!1)
              };
            return h.current.addEventListener("transitionend", f), e.on("swiperight", t), e.on("swipeleft", i), e.on("pan", o), e.on("panend", l), e.on("press tap", m), e.on("pressup", u), () => {
              e.off("swiperight", t), e.off("swipeleft", i), e.off("pan", o), e.off("panend", l), e.off("press tap", m), e.off("pressup", u), h.current && h.current.removeEventListener("transitionend", f), d(0)
            }
          }), [g.current, n]), (0, p.jsxs)("section", {
            className: _n.carousel,
            children: [(0, p.jsx)("div", {
              className: _n.track,
              ref: g,
              children: (0, p.jsx)("div", {
                className: `${_n.items} ${0!==l?_n.dragging:""}`,
                ref: h,
                style: {
                  transform: `translateX(calc(-${100*n}% + ${l}px))`
                },
                children: s.map(((e, a) => (0, p.jsx)(f.A, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: n === a ? _n.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: n === a ? 0 : -1,
                  children: (0, p.jsx)(kn, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, p.jsxs)("div", {
              className: _n.slidesContent,
              children: [(0, p.jsx)("div", {
                className: _n.text,
                children: s.map(((e, s) => {
                  return (0, p.jsxs)(f.A, {
                    className: [_n.info, s === n ? _n.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: n === s ? 0 : -1,
                    children: [(0, p.jsxs)("div", {
                      className: _n.title,
                      children: [(0, p.jsxs)("div", {
                        className: _n.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, p.jsx)("h2", {
                        className: _n.videoTitle,
                        children: e.title
                      })]
                    }), (0, p.jsx)(Ct, {
                      className: _n.cta,
                      onClick: (r = `/videos/${e.id}`, () => {
                        i({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: r,
                          element_placement: "video carousel"
                        })
                      }),
                      children: t("Watch Now")
                    })]
                  }, e.id);
                  var r
                }))
              }), (0, p.jsx)("section", {
                className: _n.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: s.map(((e, a) => (0, p.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => c(a),
                  className: n === a ? _n.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        xn = (0, d.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        Nn = {
          img: "rockstargames-sites-legacye3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-sites-legacyc3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, m.importAll)(t(43202));
      const jn = e => {
          let {
            isWideCard: a = !1,
            size: s = 640,
            title: i,
            titleSlug: r
          } = e;
          const {
            isMobile: n
          } = (0, m.useWindowResize)(), c = (0, o.useMemo)((() => {
            let e = "";
            return a && (e = n ? t(17426)(`./${r}/mobile.png`) : t(65392)(`./${r}/desktop.png`)), e || (e = t(32781)(`./${r}.jpg`), e += `?im=Resize=${s}`), e
          }), [n, r]), [l] = (0, m.usePreloadImg)(c);
          return (0, p.jsx)("div", {
            role: "img",
            "aria-label": i,
            className: [Nn.img, l ? Nn.startAnimation : "", a ? Nn.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${c})`
            }
          })
        },
        wn = {
          fobLink: "rockstargames-sites-legacyfded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-sites-legacya9b41f96042bda8a8c77b7b7b10f84d5"
        },
        Sn = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            titleSlug: s,
            urlOfficial: i = ""
          } = a, r = ["VI"].includes(s);
          return (0, p.jsx)(f.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: t ?? i,
            target: "_self",
            className: [wn.fobLink, r ? wn.wide : ""].join(" "),
            reloadDocument: r,
            children: (0, p.jsx)(jn, {
              title: a.title,
              titleSlug: s,
              isWideCard: r
            })
          })
        },
        Cn = {
          videoList: "rockstargames-sites-legacya77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-legacyed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-legacyffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-legacyffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-legacycbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-sites-legacyb33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-sites-legacyf3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-sites-legacyc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-legacyf30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-legacyd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-legacyc806076a1e3e23c77528ee12e32771a3"
        },
        Tn = (0, d.withIntl)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: i
          } = e;
          const r = (0, d.useIntl)(),
            {
              track: n
            } = (0, u.useGtmTrack)(),
            c = void 0 !== t ? "games" : "videos",
            [l, m] = (0, o.useState)(),
            [g, f] = (0, o.useState)(),
            [h, b] = (0, o.useState)(0),
            k = (0, o.useRef)(null),
            v = (0, o.useRef)(null);
          (0, o.useEffect)((() => {
            f({
              nextEl: v.current,
              prevEl: k.current
            })
          }), [v, k]), (0, o.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), b(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [h]);
          const _ = e => {
            l?.slideTo(e)
          };
          let y;
          return y = "games" === c ? (0, p.jsx)(p.Fragment, {
            children: t.results.map(((e, a) => "775700as" !== e.id && (0, p.jsx)(ge.qr, {
              className: Cn.slide,
              onFocus: () => _(a),
              children: (0, p.jsx)(Sn, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, p.jsx)(p.Fragment, {
            children: a.map(((e, a) => (0, p.jsx)(ge.qr, {
              className: Cn.slide,
              onFocus: () => _(a),
              children: (0, p.jsx)(vn, {
                video: e,
                gameTitleNecessary: i
              })
            }, e.id)))
          }), (0, p.jsxs)("section", {
            className: Cn.videoList,
            children: [(0, p.jsxs)("h3", {
              className: Cn.sectionHeader,
              children: [s, (0, p.jsxs)("div", {
                className: Cn.arrowNav,
                children: [(0, p.jsx)("button", {
                  className: [Cn.arrow, Cn.previous].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": r.formatMessage(xn.previous_button_label)
                }), (0, p.jsx)("button", {
                  className: [Cn.arrow, Cn.next].join(" "),
                  type: "button",
                  ref: v,
                  "aria-label": r.formatMessage(xn.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = l?.slides[l?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, p.jsx)("div", {
              className: [Cn.items, h % 1 != 0 ? Cn.partial : ""].join(" "),
              children: (0, p.jsx)("div", {
                className: Cn.trackWrapper,
                children: h && (0, p.jsx)(ge.RC, {
                  className: Cn.track,
                  slidesPerView: h,
                  spaceBetween: 24,
                  onInit: e => {
                    m(e)
                  },
                  grabCursor: !0,
                  navigation: g,
                  modules: [Gt.Vx],
                  slideClass: (0, I.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    n({
                      event: "carousel_next",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    n({
                      event: "carousel_previous",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    n({
                      event: "carousel_swipe",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: y
                })
              })
            })]
          })
        }), k),
        In = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, p.jsx)("span", {
            ...t,
            className: "rockstargames-sites-legacyf7f61ab4bc6dd2a49f80662ead7d8a51",
            children: a
          })
        };
      var Ln = t(88038),
        Mn = t(99718),
        En = t(26177);
      const {
        Gen9CoreCarousel: Pn,
        framer: zn,
        useTinaModuleFetchByIds: Bn,
        withSimpleErrorBoundary: On
      } = c, An = {
        Card: pt,
        CardWithImageGallery: e => {
          let {
            id: a,
            title: t,
            content: s,
            size: i = "md",
            expandedType: r = "gallery",
            textOverlayProps: n = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: c = [],
            deckProps: l = {},
            tina: d = {},
            payload: m,
            position: g = 0,
            sectionTitle: u = "",
            cardIds: f
          } = e;
          const h = (0, I.useTinaPayload)(),
            b = m ?? h,
            k = d?.payload?.meta?.cdn ?? b?.meta?.prod ?? !1,
            v = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(c, k),
            [_, y] = (0, o.useState)(l?.size ?? i),
            {
              parent: x,
              main: N,
              thumbs: j
            } = Kt?.cardWithImageGallery?.gallery ?? {};
          return (0, o.useEffect)((() => {
            y(l?.size ?? i)
          }), [l?.size, i]), (0, p.jsx)(st, {
            id: a,
            position: g,
            sectionTitle: u,
            payload: {
              content: s,
              meta: {},
              payload: b
            },
            title: t,
            size: _,
            expandedType: r,
            images: v,
            deckProps: l,
            prod: k,
            variants: Kt.cardWithImageGallery,
            textOverlayProps: n,
            modalProps: {
              className: Yt.customModal,
              contentClassName: Yt.customModalContent
            },
            expandedCardContents: (0, p.jsx)(Xt, {
              images: v,
              title: t,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: x,
                main: N,
                thumbs: j
              },
              transition: {
                parent: Qt.cardOpen,
                main: Qt.cardOpen,
                thumbs: Qt.cardOpen
              }
            }),
            cardIds: f,
            children: (0, p.jsx)("div", {
              className: Yt.content,
              children: (0, p.jsx)(Wa, {
                title: t,
                size: _,
                textOverlayProps: n,
                children: (0, p.jsx)(Xt, {
                  images: v,
                  title: t,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        },
        TextCard: e => {
          let {
            title: a,
            content: t,
            size: s = "md",
            badgeText: i
          } = e;
          const r = {
            ...(0, I.useTinaComponents)(),
            HTMLElement: qe,
            UnorderedList: sa.A,
            ListItem: Zt.A
          };
          return (0, p.jsx)("div", {
            className: "rockstargames-sites-legacyd392587df58204b0910e721ef1f3c35c",
            "data-size": s,
            children: (0, p.jsxs)("div", {
              className: "rockstargames-sites-legacya002b98d034f1897c7e1f31327ff08dc",
              children: [i && (0, p.jsx)("div", {
                className: "rockstargames-sites-legacyd9901d1bb91e1fbc1e857964083fe496",
                children: i
              }), (0, p.jsxs)("div", {
                className: "rockstargames-sites-legacybea322f6e3afa31355668ad164496730",
                children: [a && (0, p.jsx)("h3", {
                  children: a
                }), (0, p.jsx)(I.TinaParser, {
                  components: r,
                  tina: {
                    payload: {
                      content: t
                    }
                  }
                })]
              })]
            })
          })
        },
        ...c
      };
      var Dn = function(e) {
        return e.extraSmall = "xs", e.small = "sm", e.medium = "md", e.large = "lg", e.extraLarge = "xl", e.frontOfBox = "fob", e.custom = "custom", e
      }(Dn || {});
      const Vn = zn.withFadeIn(On((e => {
          let {
            cards: a = [],
            size: t,
            name: s,
            title: i,
            description: r,
            disclaimer: n,
            customSlidesPerView: c = null,
            theme: l = "none",
            cardSizeBreakpoints: d = {},
            customAspectRatio: m = "3/1",
            titleBadge: g = null,
            id: u = ""
          } = e;
          const f = (0, o.useRef)(null),
            h = We().map(a, "id"),
            b = Bn({
              ids: h
            }),
            [k, v] = (0, o.useState)(c),
            [_] = (0, Ka.useSearchParams)(),
            [y, x] = (0, o.useState)(!1);
          (0, o.useEffect)((() => {
            let e;
            if (e = Dn.frontOfBox, t === e) {
              const e = _.get("section");
              if (e && "games" === e && !y && (x(!0), f.current)) {
                const e = 100;
                window.scrollTo(0, f.current.offsetTop - e)
              }
            }
          }), []), (0, o.useEffect)((() => {
            if (!f.current) return;
            const e = () => {
              const e = c || window.getComputedStyle(f.current).getPropertyValue("--slides-per-view");
              v(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const N = (0, o.useMemo)((() => {
            let e = 0;
            if (!b) return null;
            let a = "blank",
              s = !1;
            return b.forEach((e => {
              "cover-card" === e?.tina?.payload?.meta?.type && (a = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
            })), b.reduce(((r, n) => {
              if (n) {
                const {
                  id: c,
                  tina: o
                } = n, d = We().clone(o);
                We().set(d, "payload.meta.id", c);
                let m = h;
                m = h.filter((e => e !== a || e === a && !s)), r.push((0, p.jsx)(I.TinaParser, {
                  components: An,
                  tina: d,
                  componentProps: {
                    deckProps: {
                      size: t
                    },
                    tina: d,
                    id: c,
                    position: e,
                    sectionTitle: i,
                    theme: l,
                    cardIds: m
                  }
                }, c)), e += 1
              }
              return r
            }), [])
          }), [b, t]);
          return (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacycaf46db6464a84ad4990aed75ef74ff1",
            "data-theme": l,
            ref: f,
            id: u,
            children: [(0, p.jsx)(Pn, {
              description: r,
              size: t,
              cardSizeBreakpoints: d,
              slideChildren: N,
              title: i,
              name: s,
              customSlidesPerView: k,
              customAspectRatio: m,
              titleBadge: g,
              theme: l
            }), n && (0, p.jsx)("div", {
              className: "rockstargames-sites-legacye90de79e6e215bde4beeb973696fcc11",
              children: (0, p.jsx)("span", {
                className: "rockstargames-sites-legacyceba411e9462491a4758858884a7a601",
                children: (0, p.jsx)(on, {
                  html: n
                })
              })
            })]
          })
        }))),
        $n = e => {
          let {
            buttonStyle: a = "borderless",
            platformsAndLinks: t = [],
            label: s = ""
          } = e;
          return (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacycf5fcc013c9ffa0381124b2553c03057",
            children: [s && (0, p.jsx)("div", {
              className: "rockstargames-sites-legacyc9d644fbe00ad211fa490d7469a86264",
              children: s
            }), (0, p.jsx)("div", {
              className: "rockstargames-sites-legacybc8c02a5c2f20d0b4d1d6e974ed41ea8",
              children: t?.length ? t.map((e => (0, p.jsx)(xt, {
                platformItem: e.platform,
                href: e.href,
                variant: "platform",
                platformStyle: a,
                gtm: e.gtm
              }, `${e.key}-${e.href}-${e.platform}`))) : ""
            })]
          })
        },
        Fn = e => {
          let {
            id: a,
            title: t,
            body: s,
            backgroundImageAndMask: i,
            expandingButton: r,
            image: n,
            buttonCollections: c,
            ...l
          } = e;
          const [d] = (0, ae.useSearchParams)(), {
            key: g
          } = (0, ae.useLocation)(), f = (0, m.useLocale)(), h = n?.sources?.[f] ?? n?.sources?.en_us, b = h?.mobile ?? h?.desktop, {
            track: k
          } = (0, u.useGtmTrack)(), {
            ref: v,
            inView: _,
            entry: y
          } = (0, Q.useInView)({
            threshold: .6
          }), [x, N] = (0, o.useState)(!1), j = (0, I.useGetCdnSource)(b ?? null), w = (0, I.useGetCdnSource)(i?.backgroundImage?.mobile), S = (0, I.useGetCdnSource)(i?.backgroundImage?.desktop ?? w), C = (0, I.useGetCdnSource)(i?.backgroundImageMask?.mobile), T = (0, I.useGetCdnSource)(i?.backgroundImageMask?.desktop ?? C), L = !(!T && !C), M = {
            "--background-image-desktop": `url(${S})`,
            "--background-image-mobile": `url(${w})`,
            "--image-mask-desktop": `url(${T})`,
            "--image-mask-mobile": `url(${C})`,
            "--background-attachment": i?.backgroundImage?._memoq?.backgroundAttachment || "",
            "--background-clip": i?.backgroundImage?._memoq?.backgroundClip || "",
            "--background-color": i?.backgroundImage?._memoq?.backgroundColor || "",
            "--background-origin": i?.backgroundImage?._memoq?.backgroundOrigin || "",
            "--background-position": i?.backgroundImage?._memoq?.backgroundPosition || "",
            "--background-repeat": i?.backgroundImage?._memoq?.backgroundRepeat || "",
            "--background-size": i?.backgroundImage?._memoq?.backgroundSize || ""
          };
          (0, o.useEffect)((() => {
            y?.target && d.get("section") && (0, m.detectIfWeShouldAnchorSomewhere)()
          }), [g, y?.target]), (0, o.useEffect)((() => {
            _ && !x && (k({
              event: "page_section_impression",
              element_placement: l?._memoq?.title?.toLowerCase()
            }), N(!0))
          }), [_]);
          let E = (0, p.jsx)(p.Fragment, {});
          return L || (M.background = `url(${S}) center / cover no-repeat`), E = (0, p.jsxs)("div", {
            className: "rockstargames-sites-legacyd74d69781b4fbd2ffa839385f7bf20ae",
            id: a ?? "",
            ref: v,
            children: [(0, p.jsxs)("div", {
              className: "rockstargames-sites-legacydcc4e9836cd849a1ee258158d8995e3b",
              children: [(0, p.jsxs)("div", {
                className: "rockstargames-sites-legacyd7b994429a569942c25fcbb342247620",
                children: [(0, p.jsx)("h2", {
                  className: "rockstargames-sites-legacydedc85eea080a94bf975505c44befc9f",
                  children: t
                }), s && (0, p.jsx)("div", {
                  className: "rockstargames-sites-legacyc2f636812f6059e8b19b077ac4ea7879",
                  dangerouslySetInnerHTML: {
                    __html: (P = s, P ? P.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                  }
                })]
              }), c?.length && c.map((e => (0, p.jsx)($n, {
                ...e
              }, `${e.key}-${e.label}`)))]
            }), (0, p.jsx)("div", {
              className: "rockstargames-sites-legacye8251051f777c393af4877aa0e2d9dac",
              children: j && (0, p.jsx)("img", {
                src: j,
                alt: "Red Dead Redemption"
              })
            })]
          }), (0, p.jsx)(me.motion.div, {
            className: "rockstargames-sites-legacya101ab31612092a6651ccb28a7984370",
            initial: "hidden",
            animate: "visible",
            variants: {
              visible: {
                opacity: 1,
                width: "100%",
                transition: {
                  ease: [.5, 0, 0, 1],
                  duration: .75,
                  when: "beforeChildren",
                  delayChildren: .25,
                  staggerChildren: .1
                }
              },
              hidden: {
                opacity: 0
              }
            },
            style: M,
            "data-has-mask": L,
            children: E
          });
          var P
        },
        Rn = {
          pillBtn: "rockstargames-sites-legacyb5b173fdb18cf37bc4ce4dfa8a745f0b",
          selected: "rockstargames-sites-legacyec4282990ac91c940e8d6755eb454433",
          legacyPageTemplate: "rockstargames-sites-legacya13c0ce8a7efd4e4f37648f77daaa790",
          maxWidthContainer: "rockstargames-sites-legacyae8a92f14868d9bcc568f46fccc6a7ef",
          contentWrapper: "rockstargames-sites-legacya846c409f797ecc1ab63fd5d7844a2c0",
          videosContainer: "rockstargames-sites-legacya38fb305b5045f5e7057c52637d633b0",
          videoPlayerContainer: "rockstargames-sites-legacye274fed7e274fcc975ab65ad290a0027",
          rdrUltra: "rockstargames-sites-legacye1b013c991b3fbbcf38770fd2e66a703",
          universalCyrillic: "rockstargames-sites-legacydcf410ae5672a94d3068188bd39afe56"
        },
        Gn = e => {
          let {
            headerFont: a,
            hero: t,
            featureBlockBackgroundImageGroup: s,
            features: i,
            fob: r,
            highlightCollection: n,
            imageGallery: c,
            relatedLinks: o,
            titleSlug: l,
            backgroundFields: d,
            tinaModuleId: g,
            videoProps: u
          } = e;
          const f = a ? Rn[a] : "",
            h = {},
            b = {
              Deck: Vn,
              CoverCard: Rt,
              Card: pt
            },
            k = u?.id || "",
            v = (0, m.useLocale)(),
            _ = d?.style["--legacy-custom-background"] || d?.style["--legacy-background-color"] || "#161616";
          return h["--playlist-background-color"] = u?.["--playlist-background-color"], h["--template-bg-color"] = _, (0, p.jsx)(T, {
            children: (0, p.jsxs)("div", {
              className: [Rn.legacyPageTemplate, f].join(" "),
              "data-brand": l,
              style: h,
              children: [t && (0, p.jsx)(w(), {
                animated: t.animated,
                content: t.content,
                id: "hero",
                images: t.images,
                shardsSection: t.shardsSection,
                subHero: t.subHero,
                type: t.type
              }), i?.length && (0, p.jsx)(ee, {
                id: "features",
                features: i,
                backgroundImageGroup: s
              }), (0, p.jsxs)("div", {
                className: Rn.maxWidthContainer,
                children: [c?.collections?.length && (0, p.jsx)(Ve, {
                  id: "imageGallery",
                  imageGallery: c
                }), n?.highlights && (0, p.jsx)("div", {
                  className: Rn.contentWrapper,
                  children: (0, p.jsx)(S.Highlights, {
                    highlights: n?.highlights,
                    subtitle: n?.subtitle ?? n?._memoq?.subtitle
                  })
                }), (0, p.jsx)(p.Fragment, {
                  children: u && k && (0, p.jsxs)("div", {
                    className: Rn.videosContainer,
                    children: [(0, p.jsx)("h2", {
                      children: u.sectionLabel
                    }), (0, p.jsx)("div", {
                      className: Rn.videoPlayerContainer,
                      children: (0, p.jsx)(L.VideoWithPlaylist, {
                        tagIds: [Number(u.videoTag ?? 0)],
                        className: Rn.legacyVideoStyles,
                        autoplay: !1,
                        locale: v,
                        playlistTitle: u.playlistTitle,
                        currentVideoId: k
                      })
                    })]
                  })
                }), r && (0, p.jsx)(Fn, {
                  id: "order",
                  ...r
                }), o && (0, p.jsx)(le, {
                  id: "relatedLinks",
                  title: o?.title,
                  buttons: o?.buttons
                })]
              }), (0, p.jsx)("div", {
                className: Rn.tinaModuleContainer,
                children: (0, p.jsx)(He, {
                  components: b,
                  id: g
                })
              }), (0, p.jsx)("div", {
                className: Rn.maxWidthContainer,
                children: l && (0, p.jsx)(N, {
                  id: "rating",
                  titleSlug: l
                })
              })]
            })
          })
        }
    },
    7471: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var s = t(96165),
        i = t(90837),
        r = t(7644),
        n = t(82275),
        c = t(19169),
        o = t(47483),
        l = t(73870),
        d = t(6754),
        m = t(43365),
        g = t(55837),
        u = t(38375),
        f = t(44338);
      const p = {
          pc: s,
          ps: i,
          ps3: r,
          ps4: n,
          xbox: c,
          xboxone: o,
          switch: l,
          xbox360: d,
          googleplay: m,
          applestore: g,
          questionMark: u,
          default: "",
          xboxseriesxs: t(67245),
          ps5: f
        },
        h = e => p[e] || null
    },
    83178: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GetAudioAlbum"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "audioAlbum"
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
                    value: "title"
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
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "cover_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mp3_src"
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
                        value: "color"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mix_blend_mode"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "duration"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "artist"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "name"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 340
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GetAudioAlbum")
    },
    59781: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "vote"
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
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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
          end: 386
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    85913: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
                value: "withMetaTitle"
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
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
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
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
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
                      value: "withMetaTitle"
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
                    value: "title"
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
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
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
          end: 394
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
    },
    50048: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "types"
              }
            },
            type: {
              kind: "ListType",
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
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
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
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
                        value: "type"
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
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
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
                value: "sync"
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
              value: !1
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
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
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
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
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
                                  value: "sync"
                                }
                              }
                            }]
                          }]
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
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
                                  value: "sync"
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
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1002
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
    },
    94869: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
                value: "vote"
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
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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
          end: 394
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    31955: (e, a, t) => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
          },
          variableDefinitions: [{
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
                value: "page"
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
                value: "limit"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
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
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
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
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 568
        }
      };
      s.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function r(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !i[a] && (i[a] = !0, !0)
        }))
      }

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      s.definitions = s.definitions.concat(r(t(90588).definitions)), s.definitions = s.definitions.concat(r(t(78417).definitions));
      var c = {};

      function o(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), c[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = c[a] || new Set,
          i = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var n = r;
          r = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (c[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = o(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    72752: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderBy"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderDirection"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
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
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    52917: (e, a, t) => {
      var s = {
        "./applestore.svg": 4756,
        "./googleplay.svg": 12708,
        "./left.svg": 60900,
        "./pc.svg": 40648,
        "./ps.svg": 88504,
        "./ps3.svg": 38379,
        "./ps4.svg": 50052,
        "./ps5.svg": 1221,
        "./right.svg": 97195,
        "./switch.svg": 37551,
        "./x.svg": 45537,
        "./xbox.svg": 84484,
        "./xboxone.svg": 20920,
        "./xboxseriesxs.svg": 11128
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 52917
    },
    4905: (e, a, t) => {
      var s = {
        "./cero_a.png": 81229,
        "./cero_b.svg": 67073,
        "./cero_c.svg": 31536,
        "./cero_d.svg": 81071,
        "./cero_rp.png": 92628,
        "./cero_z.svg": 40393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 53953,
        "./djctq_14.svg": 56623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 79835,
        "./djctq_er.svg": 47173,
        "./djctq_l.svg": 11524,
        "./esrb_ao.svg": 57902,
        "./esrb_e.svg": 18287,
        "./esrb_e10plus.svg": 33396,
        "./esrb_m.svg": 40871,
        "./esrb_m_ao.svg": 16938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 58473,
        "./esrb_t.svg": 31470,
        "./fpb_13.svg": 40908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 13175,
        "./fpb_pg.svg": 95219,
        "./grac_12.svg": 61482,
        "./grac_15.svg": 68341,
        "./grac_18.svg": 71824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 45120,
        "./gsrr_12.svg": 24465,
        "./gsrr_15.svg": 42638,
        "./gsrr_18.svg": 32875,
        "./gsrr_6.svg": 82574,
        "./nmc_12.svg": 93911,
        "./nmc_16.svg": 37675,
        "./nmc_18.svg": 58157,
        "./nmc_21.svg": 78525,
        "./nmc_3.svg": 59109,
        "./nmc_7.svg": 62569,
        "./oflc_g.svg": 49809,
        "./oflc_m.svg": 58219,
        "./oflc_ma15.svg": 28718,
        "./oflc_pg.svg": 94509,
        "./oflc_r18.svg": 90615,
        "./pegi_12.svg": 37620,
        "./pegi_16.svg": 87880,
        "./pegi_18.svg": 83454,
        "./pegi_3.svg": 93672,
        "./pegi_4.svg": 96071,
        "./pegi_6.svg": 69493,
        "./pegi_7.svg": 47860,
        "./pegi_rp.png": 97852,
        "./rars_0.svg": 32628,
        "./rars_12.svg": 25757,
        "./rars_16.svg": 80513,
        "./rars_18.svg": 69959,
        "./rars_6.svg": 41514,
        "./usk_0.svg": 20507,
        "./usk_12.svg": 86196,
        "./usk_16.svg": 32008,
        "./usk_18.svg": 27582,
        "./usk_6.svg": 33813,
        "./usk_rp.svg": 77579,
        "./vaci_rp.png": 92674
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 4905
    },
    73983: (e, a, t) => {
      var s = {
        "./cero_a.png": 81229,
        "./cero_b.svg": 67073,
        "./cero_c.svg": 31536,
        "./cero_d.svg": 81071,
        "./cero_rp.png": 92628,
        "./cero_z.svg": 40393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 53953,
        "./djctq_14.svg": 56623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 79835,
        "./djctq_er.svg": 47173,
        "./djctq_l.svg": 11524,
        "./esrb_ao.svg": 57902,
        "./esrb_e.svg": 18287,
        "./esrb_e10plus.svg": 33396,
        "./esrb_m.svg": 40871,
        "./esrb_m_ao.svg": 16938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 58473,
        "./esrb_t.svg": 31470,
        "./fpb_13.svg": 40908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 13175,
        "./fpb_pg.svg": 95219,
        "./grac_12.svg": 61482,
        "./grac_15.svg": 68341,
        "./grac_18.svg": 71824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 45120,
        "./gsrr_12.svg": 24465,
        "./gsrr_15.svg": 42638,
        "./gsrr_18.svg": 32875,
        "./gsrr_6.svg": 82574,
        "./nmc_12.svg": 93911,
        "./nmc_16.svg": 37675,
        "./nmc_18.svg": 58157,
        "./nmc_21.svg": 78525,
        "./nmc_3.svg": 59109,
        "./nmc_7.svg": 62569,
        "./oflc_g.svg": 49809,
        "./oflc_m.svg": 58219,
        "./oflc_ma15.svg": 28718,
        "./oflc_pg.svg": 94509,
        "./oflc_r18.svg": 90615,
        "./pegi_12.svg": 37620,
        "./pegi_16.svg": 87880,
        "./pegi_18.svg": 83454,
        "./pegi_3.svg": 93672,
        "./pegi_4.svg": 96071,
        "./pegi_6.svg": 69493,
        "./pegi_7.svg": 47860,
        "./pegi_rp.png": 97852,
        "./rars_0.svg": 32628,
        "./rars_12.svg": 25757,
        "./rars_16.svg": 80513,
        "./rars_18.svg": 69959,
        "./rars_6.svg": 41514,
        "./usk_0.svg": 20507,
        "./usk_12.svg": 86196,
        "./usk_16.svg": 32008,
        "./usk_18.svg": 27582,
        "./usk_6.svg": 33813,
        "./usk_rp.svg": 77579,
        "./vaci_rp.png": 92674
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 73983
    },
    45628: (e, a, t) => {
      var s = {
        "./bounty.png": 89177,
        "./collector.png": 3787,
        "./moonshiner.png": 14022,
        "./naturalist.png": 34629,
        "./trader.png": 22864
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 45628
    },
    43202: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./VI/desktop.png": 94699,
        "./VI/mobile.png": 17821,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 43202
    },
    32781: (e, a, t) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 32781
    },
    65392: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 94699
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 65392
    },
    17426: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 17821
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 17426
    },
    4756: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    12708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    60900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    40648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    88504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    38379: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    50052: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    1221: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    97195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    37551: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    45537: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    84484: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    20920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    11128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    68128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    81764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    58989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    89544: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    65636: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    20357: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    17976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    84923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    45710: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    8318: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    52047: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    60350: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    89825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    36399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    92627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    76425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    43864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    81229: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    67073: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    31536: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    81071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    92628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    40393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    5251: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    53953: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    56623: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    6141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    79835: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    47173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    11524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    57902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    18287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    33396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    40871: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    16938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    6960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    58473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    31470: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    40908: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    497: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    13175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    95219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    61482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    68341: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    71824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    7361: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    5560: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    45120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    24465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    42638: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    32875: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    82574: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    93911: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    37675: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    58157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    78525: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    59109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    62569: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    49809: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    58219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    28718: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    94509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    90615: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    37620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    87880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    83454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    93672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    96071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    69493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    47860: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    97852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    32628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    25757: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    80513: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    69959: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    41514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    20507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    86196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    32008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    27582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    33813: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    77579: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    92674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    89177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    3787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    14022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    34629: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    22864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    10046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    58679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    60104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    15007: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    94699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    65682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    45024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    38910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    58205: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    48057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    97955: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    99826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    23686: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    34747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    44342: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    32217: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    63201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    27976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    57743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    61451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    67680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    76766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    61490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    85010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    85006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    77126: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    15651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    57741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    85171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    22006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    89550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    56204: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    94417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    56647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    31271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    51789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    7891: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    73195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    61748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    40499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    7737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    39528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    55582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    20724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14786: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    74540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    80173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    81919: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    31527: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    43048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    51652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    8820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    14572: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    55837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    43365: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    96165: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    90837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    44338: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    67245: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    }
  }
]);