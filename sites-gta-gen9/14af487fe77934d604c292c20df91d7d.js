! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a011dced-21d0-41af-a38a-199849851fd4", e._sentryDebugIdIdentifier = "sentry-dbid-a011dced-21d0-41af-a38a-199849851fd4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [8616, 7672], {
    24800: (e, r, t) => {
      t.d(r, {
        c: () => w
      });
      var a = t(51664),
        n = t(48111),
        s = t(57013),
        o = t(41272),
        l = t(1740),
        c = t(42836);
      const i = {
        pillBtn: "rockstargames-sites-gta-gen9db4bf6cb61b2370932e4811235d51afa",
        selected: "rockstargames-sites-gta-gen9b691088f1c9719532c68ca7b97487e5b",
        chipButton: "rockstargames-sites-gta-gen9bfe6fefc1068ed81c8b38519a854285f"
      };
      var d = t(95240);
      const p = e => {
        let {
          title: r,
          onClick: t,
          selected: a
        } = e;
        return (0, d.jsx)("button", {
          type: "button",
          onClick: t,
          tabIndex: 0,
          "aria-label": r,
          className: [i.chipButton, a ? i.selected : ""].join(" "),
          children: (0, d.jsx)("div", {
            children: r
          })
        })
      };
      var u;

      function _() {
        return _ = Object.assign ? Object.assign.bind() : function(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
          }
          return e
        }, _.apply(this, arguments)
      }
      const g = e => a.createElement("svg", _({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), u || (u = a.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var f;

      function b() {
        return b = Object.assign ? Object.assign.bind() : function(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
          }
          return e
        }, b.apply(this, arguments)
      }
      const h = e => a.createElement("svg", b({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), f || (f = a.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        y = {
          pillBtn: "rockstargames-sites-gta-gen9f5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-sites-gta-gen9f05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-sites-gta-gen9ef8ca38f98b731ff5dfe07937b1bbe34"
        },
        v = e => {
          let {
            direction: r,
            className: t,
            ...a
          } = e;
          return (0, d.jsxs)("button", {
            type: "button",
            className: [t, y.navScrollButton].join(" "),
            ...a,
            children: ["left" === r && (0, d.jsx)(g, {}), "right" === r && (0, d.jsx)(h, {})]
          })
        };
      var m = t(21368);
      const k = {
          pillBtn: "rockstargames-sites-gta-gen9c07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-sites-gta-gen9b7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-sites-gta-gen9b12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-sites-gta-gen9fde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-sites-gta-gen9e753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-sites-gta-gen9ce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-sites-gta-gen9ef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-sites-gta-gen9f750c5a49886ae190c14e52aa026a417"
        },
        w = e => {
          let {
            navItems: r,
            category: t,
            setCategory: i,
            chipsContainerClass: u = k.chipsContainer,
            previousChipButtonClass: _ = "",
            nextChipBtnClass: g = ""
          } = e;
          const f = (0, o.useIntl)(),
            {
              track: b
            } = (0, c.useGtmTrack)(),
            {
              pathname: h
            } = (0, s.useLocation)(),
            y = (0, a.useMemo)((() => Math.max(r.findIndex((e => e.name === t)), 0)), [r, h]),
            [w, j] = (0, a.useState)(y),
            [x, O] = (0, a.useState)(!1),
            [S, C] = (0, a.useState)(!1),
            [M, N] = (0, a.useState)(!1),
            E = (0, a.useRef)(null),
            B = (0, a.useRef)(null),
            I = (0, a.useRef)(null),
            A = (0, a.useCallback)(((e, r) => {
              I.current && I.current.slideTo(e), j(e), L(`Career Progress Nav > ${r}`)
            }), [b]),
            L = (e, r) => {
              b({
                event: "component_tab_click",
                event_action: "click",
                event_category: "tab",
                event_label: e,
                text: e.split(">").pop()?.trim() || "",
                link_url: r,
                element_placement: e
              })
            };
          (0, a.useEffect)((() => {
            i(w)
          }), [w]);
          const P = e => {
            e.isEnd ? C(!0) : C(!1), e.isBeginning ? N(!0) : N(!1)
          };
          return (0, a.useEffect)((() => {
            I.current && ((I.current.wrapperEl.clientWidth || 0) > (I.current.el.clientWidth || 0) ? (O(!0), I.current.params.centeredSlides = !0, I.current.params.centeredSlidesBounds = !0) : (O(!1), I.current.params.centeredSlides = !1, I.current.params.centeredSlidesBounds = !1))
          }), [I.current?.wrapperEl.clientWidth, I.current?.el.clientWidth]), (0, d.jsxs)("div", {
            className: u,
            children: [!M && x && (0, d.jsx)("div", {
              ref: B,
              className: (0, l.classList)(k.previousChipNavButton, _),
              children: (0, d.jsx)(v, {
                direction: "left",
                className: k.previousNavIcon,
                onClick: () => {
                  I.current && (I.current?.slidePrev(), I.current.isBeginning ? N(!0) : N(!1), b({
                    event: "carousel_previous",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": f.formatMessage(m.c.pln_scroll_left)
              })
            }), (0, d.jsx)("div", {
              className: k.chips,
              children: (0, d.jsx)(n.wx, {
                onBeforeInit: e => I.current = e,
                onInit: P,
                className: k.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: w,
                onSlideChange: P,
                onResize: P,
                children: r.map(((e, r) => {
                  let {
                    title: t
                  } = e;
                  return (0, d.jsx)(n.Ky, {
                    children: (0, d.jsx)(p, {
                      title: t,
                      onClick: () => A(r, t),
                      selected: w === r
                    })
                  }, t)
                }))
              })
            }), !S && x && (0, d.jsx)("div", {
              ref: E,
              className: (0, l.classList)(k.nextChipNavButton, g),
              children: (0, d.jsx)(v, {
                direction: "right",
                className: k.nextNavIcon,
                onClick: () => {
                  I.current && (I.current?.slideNext(), I.current.isEnd ? C(!0) : C(!1), b({
                    event: "carousel_next",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": f.formatMessage(m.c.pln_scroll_right)
              })
            })]
          })
        }
    },
    21368: (e, r, t) => {
      t.d(r, {
        c: () => a
      });
      const a = (0, t(41272).defineMessages)({
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
        pln_scroll_left: {
          id: "pln_scroll_left",
          defaultMessage: "Scroll Left"
        },
        pln_scroll_right: {
          id: "pln_scroll_right",
          defaultMessage: "Scroll Right"
        }
      })
    },
    87672: (e, r, t) => {
      t.d(r, {
        C3: () => s,
        Mt: () => i,
        ct: () => n,
        gR: () => l,
        o5: () => c,
        sX: () => o
      });
      var a = function(e, r) {
        return a = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, r) {
          e.__proto__ = r
        } || function(e, r) {
          for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }, a(e, r)
      };

      function n(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        a(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t)
      }
      var s = function() {
        return s = Object.assign || function(e) {
          for (var r, t = 1, a = arguments.length; t < a; t++)
            for (var n in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          return e
        }, s.apply(this, arguments)
      };

      function o(e, r) {
        var t = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (t[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) r.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (t[a[n]] = e[a[n]])
        }
        return t
      }

      function l(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
          t = r && e[r],
          a = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && a >= e.length && (e = void 0), {
              value: e && e[a++],
              done: !e
            }
          }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function c(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var a, n, s = t.call(e),
          o = [];
        try {
          for (;
            (void 0 === r || r-- > 0) && !(a = s.next()).done;) o.push(a.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            a && !a.done && (t = s.return) && t.call(s)
          } finally {
            if (n) throw n.error
          }
        }
        return o
      }

      function i(e, r, t) {
        if (t || 2 === arguments.length)
          for (var a, n = 0, s = r.length; n < s; n++) !a && n in r || (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
        return e.concat(a || Array.prototype.slice.call(r))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);