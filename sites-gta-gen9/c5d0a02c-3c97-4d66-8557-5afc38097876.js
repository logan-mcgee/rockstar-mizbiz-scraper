try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c5d0a02c-3c97-4d66-8557-5afc38097876", e._sentryDebugIdIdentifier = "sentry-dbid-c5d0a02c-3c97-4d66-8557-5afc38097876")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6935], {
    76597(e) {
      var a = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var a = Object.prototype.toString.call(e);
            return "[object RegExp]" === a || "[object Date]" === a || function(e) {
              return e.$$typeof === n
            }(e)
          }(e)
        },
        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function t(e, a) {
        return !1 !== a.clone && a.isMergeableObject(e) ? l((n = e, Array.isArray(n) ? [] : {}), e, a) : e;
        var n
      }

      function s(e, a, n) {
        return e.concat(a).map(function(e) {
          return t(e, n)
        })
      }

      function i(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(a) {
            return Object.propertyIsEnumerable.call(e, a)
          }) : []
        }(e))
      }

      function r(e, a) {
        try {
          return a in e
        } catch (e) {
          return !1
        }
      }

      function l(e, n, o) {
        (o = o || {}).arrayMerge = o.arrayMerge || s, o.isMergeableObject = o.isMergeableObject || a, o.cloneUnlessOtherwiseSpecified = t;
        var c = Array.isArray(n);
        return c === Array.isArray(e) ? c ? o.arrayMerge(e, n, o) : function(e, a, n) {
          var s = {};
          return n.isMergeableObject(e) && i(e).forEach(function(a) {
            s[a] = t(e[a], n)
          }), i(a).forEach(function(i) {
            (function(e, a) {
              return r(e, a) && !(Object.hasOwnProperty.call(e, a) && Object.propertyIsEnumerable.call(e, a))
            })(e, i) || (r(e, i) && n.isMergeableObject(a[i]) ? s[i] = function(e, a) {
              if (!a.customMerge) return l;
              var n = a.customMerge(e);
              return "function" == typeof n ? n : l
            }(i, n)(e[i], a[i], n) : s[i] = t(a[i], n))
          }), s
        }(e, n, o) : t(n, o)
      }
      l.all = function(e, a) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, n) {
          return l(e, n, a)
        }, {})
      };
      var o = l;
      e.exports = o
    },
    62579(e, a, n) {
      n.d(a, {
        A: () => g
      });
      var t = n(39793),
        s = n(99225),
        i = n(11400),
        r = n(42909);
      const l = (0, r.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        o = {
          blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
          btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
          btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
          iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
          link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
          pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844",
          pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
          plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
          ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
          ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
          selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
          small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
          transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
          whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
          xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
          xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999"
        },
        c = ({
          children: e,
          className: a,
          onClick: n,
          style: s,
          ariaLabel: i
        }) => (0, t.jsx)("button", {
          className: a,
          onClick: n,
          style: s,
          type: "button",
          "aria-label": i,
          children: e
        }),
        d = ({
          children: e,
          className: a,
          onClick: n,
          style: i,
          to: r,
          ariaLabel: l
        }) => (0, t.jsx)(s.NavLink, {
          className: a,
          onClick: n,
          style: i,
          to: r,
          "aria-label": l,
          children: e
        }),
        g = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: n,
          icon: s = "",
          img: g,
          labelColor: b = "#000",
          onClick: f,
          secondText: u,
          size: p,
          text: m,
          to: v,
          type: y = "",
          ariaLabel: h
        }) => {
          const {
            formatMessage: k
          } = (0, r.useIntl)(), w = [o.plusButton, o[y] ?? "", o[p] ?? "", o[n] ?? "", a].join(" "), E = {
            "--hvr-color": e ?? b,
            "--hvr-bg-color": b ?? e,
            "--hvr-border-color": e ?? b
          }, x = (0, t.jsxs)(t.Fragment, {
            children: [g ? (0, t.jsx)("img", {
              src: g,
              alt: ""
            }) : "", (0, t.jsxs)("div", {
              className: o.btnText,
              icon: s,
              children: [m, u ? (0, t.jsx)("span", {
                children: u
              }) : ""]
            })]
          });
          if (v) {
            if (v.startsWith("http")) {
              const e = v.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, t.jsxs)("a", {
                href: v,
                target: e,
                onClick: f,
                onKeyDown: f,
                className: w,
                "aria-label": h,
                tabIndex: 0,
                children: [x, "_blank" === e && (0, t.jsx)(i.ExternalLink, {
                  label: k(l.aria_label_open_new_window)
                })]
              })
            }
            return (0, t.jsx)(d, {
              className: w,
              onClick: f,
              style: {
                ...E
              },
              to: v,
              ariaLabel: h,
              children: x
            })
          }
          return (0, t.jsx)(c, {
            className: w,
            onClick: f,
            style: {
              ...E
            },
            ariaLabel: h,
            children: x
          })
        }
    },
    281(e, a, n) {
      n.d(a, {
        A: () => i
      });
      var t = n(61122),
        s = n(20212);

      function i(e) {
        let {
          swiper: a,
          extendParams: n,
          on: i,
          emit: r
        } = e;

        function l(e) {
          let n;
          return e && "string" == typeof e && a.isElement && (n = a.el.querySelector(e) || a.hostEl.querySelector(e), n) ? n : (e && ("string" == typeof e && (n = [...document.querySelectorAll(e)]), a.params.uniqueNavElements && "string" == typeof e && n && n.length > 1 && 1 === a.el.querySelectorAll(e).length ? n = a.el.querySelector(e) : n && 1 === n.length && (n = n[0])), e && !n ? e : n)
        }

        function o(e, n) {
          const t = a.params.navigation;
          (e = (0, s.m)(e)).forEach(e => {
            e && (e.classList[n ? "add" : "remove"](...t.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = n), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](t.lockClass))
          })
        }

        function c() {
          const {
            nextEl: e,
            prevEl: n
          } = a.navigation;
          if (a.params.loop) return o(n, !1), void o(e, !1);
          o(n, a.isBeginning && !a.params.rewind), o(e, a.isEnd && !a.params.rewind)
        }

        function d(e) {
          e.preventDefault(), (!a.isBeginning || a.params.loop || a.params.rewind) && (a.slidePrev(), r("navigationPrev"))
        }

        function g(e) {
          e.preventDefault(), (!a.isEnd || a.params.loop || a.params.rewind) && (a.slideNext(), r("navigationNext"))
        }

        function b() {
          const e = a.params.navigation;
          if (a.params.navigation = (0, t.c)(a, a.originalParams.navigation, a.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let n = l(e.nextEl),
            i = l(e.prevEl);
          Object.assign(a.navigation, {
            nextEl: n,
            prevEl: i
          }), n = (0, s.m)(n), i = (0, s.m)(i);
          const r = (n, t) => {
            n && n.addEventListener("click", "next" === t ? g : d), !a.enabled && n && n.classList.add(...e.lockClass.split(" "))
          };
          n.forEach(e => r(e, "next")), i.forEach(e => r(e, "prev"))
        }

        function f() {
          let {
            nextEl: e,
            prevEl: n
          } = a.navigation;
          e = (0, s.m)(e), n = (0, s.m)(n);
          const t = (e, n) => {
            e.removeEventListener("click", "next" === n ? g : d), e.classList.remove(...a.params.navigation.disabledClass.split(" "))
          };
          e.forEach(e => t(e, "next")), n.forEach(e => t(e, "prev"))
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), a.navigation = {
          nextEl: null,
          prevEl: null
        }, i("init", () => {
          !1 === a.params.navigation.enabled ? u() : (b(), c())
        }), i("toEdge fromEdge lock unlock", () => {
          c()
        }), i("destroy", () => {
          f()
        }), i("enable disable", () => {
          let {
            nextEl: e,
            prevEl: n
          } = a.navigation;
          e = (0, s.m)(e), n = (0, s.m)(n), a.enabled ? c() : [...e, ...n].filter(e => !!e).forEach(e => e.classList.add(a.params.navigation.lockClass))
        }), i("click", (e, n) => {
          let {
            nextEl: t,
            prevEl: i
          } = a.navigation;
          t = (0, s.m)(t), i = (0, s.m)(i);
          const l = n.target;
          let o = i.includes(l) || t.includes(l);
          if (a.isElement && !o) {
            const e = n.path || n.composedPath && n.composedPath();
            e && (o = e.find(e => t.includes(e) || i.includes(e)))
          }
          if (a.params.navigation.hideOnClick && !o) {
            if (a.pagination && a.params.pagination && a.params.pagination.clickable && (a.pagination.el === l || a.pagination.el.contains(l))) return;
            let e;
            t.length ? e = t[0].classList.contains(a.params.navigation.hiddenClass) : i.length && (e = i[0].classList.contains(a.params.navigation.hiddenClass)), r(!0 === e ? "navigationShow" : "navigationHide"), [...t, ...i].filter(e => !!e).forEach(e => e.classList.toggle(a.params.navigation.hiddenClass))
          }
        });
        const u = () => {
          a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")), f()
        };
        Object.assign(a.navigation, {
          enable: () => {
            a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")), b(), c()
          },
          disable: u,
          update: c,
          init: b,
          destroy: f
        })
      }
    }
  }
]);