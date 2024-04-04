/*! For license information please see b5f851f1f2d95861d75c69f44875af43.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2167406b-93eb-4b08-af86-4a8651768294", e._sentryDebugIdIdentifier = "sentry-dbid-2167406b-93eb-4b08-af86-4a8651768294")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [832], {
    84832: (e, t, n) => {
      n.r(t), n.d(t, {
        AbortedDeferredError: () => r.ay,
        Await: () => a.g5,
        BrowserRouter: () => k,
        Form: () => P,
        HashRouter: () => x,
        Link: () => N,
        MemoryRouter: () => a.wF,
        NavLink: () => U,
        Navigate: () => a.YX,
        NavigationType: () => r.So,
        Outlet: () => a.yY,
        Route: () => a.kX,
        Router: () => a.E5,
        RouterProvider: () => C,
        Routes: () => a.c5,
        ScrollRestoration: () => I,
        UNSAFE_DataRouterContext: () => a.Mh,
        UNSAFE_DataRouterStateContext: () => a.Cu,
        UNSAFE_LocationContext: () => a._W,
        UNSAFE_NavigationContext: () => a.yo,
        UNSAFE_RouteContext: () => a.EN,
        UNSAFE_ViewTransitionContext: () => R,
        UNSAFE_useRouteId: () => a.WM,
        UNSAFE_useScrollRestoration: () => $,
        createBrowserRouter: () => y,
        createHashRouter: () => g,
        createMemoryRouter: () => a.Yj,
        createPath: () => r.Ep,
        createRoutesFromChildren: () => a.CF,
        createRoutesFromElements: () => a._y,
        createSearchParams: () => d,
        defer: () => r.Qv,
        generatePath: () => r.Yz,
        isRouteErrorResponse: () => r.e8,
        json: () => r.qS,
        matchPath: () => r.ot,
        matchRoutes: () => r.Cm,
        parsePath: () => r.O8,
        redirect: () => r.ch,
        redirectDocument: () => r.kt,
        renderMatches: () => a.qW,
        resolvePath: () => r.MP,
        unstable_HistoryRouter: () => A,
        unstable_useBlocker: () => a.C5,
        unstable_usePrompt: () => te,
        unstable_useViewTransitionState: () => ne,
        useActionData: () => a.c3,
        useAsyncError: () => a.qG,
        useAsyncValue: () => a.Yp,
        useBeforeUnload: () => ee,
        useFetcher: () => J,
        useFetchers: () => X,
        useFormAction: () => W,
        useHref: () => a.co,
        useInRouterContext: () => a.Iz,
        useLinkClickHandler: () => K,
        useLoaderData: () => a.GY,
        useLocation: () => a.IT,
        useMatch: () => a.SC,
        useMatches: () => a.y8,
        useNavigate: () => a.i6,
        useNavigation: () => a.Yi,
        useNavigationType: () => a.KM,
        useOutlet: () => a.ag,
        useOutletContext: () => a.Mz,
        useParams: () => a.W4,
        useResolvedPath: () => a.oT,
        useRevalidator: () => a.ER,
        useRouteError: () => a.y_,
        useRouteLoaderData: () => a.$m,
        useRoutes: () => a.wh,
        useSearchParams: () => V,
        useSubmit: () => B
      });
      var o = n(51664),
        a = n(79088),
        r = n(23168);

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
        }, i.apply(this, arguments)
      }

      function s(e, t) {
        if (null == e) return {};
        var n, o, a = {},
          r = Object.keys(e);
        for (o = 0; o < r.length; o++) n = r[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }
      const l = "get",
        u = "application/x-www-form-urlencoded";

      function c(e) {
        return null != e && "string" == typeof e.tagName
      }

      function d(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, n) => {
          let o = e[n];
          return t.concat(Array.isArray(o) ? o.map((e => [n, e])) : [
            [n, o]
          ])
        }), []))
      }
      let f = null;
      const m = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function p(e) {
        return null == e || m.has(e) ? e : null
      }

      function v(e, t) {
        let n, o, a, i, s;
        if (c(d = e) && "form" === d.tagName.toLowerCase()) {
          let s = e.getAttribute("action");
          o = s ? (0, r.mc)(s, t) : null, n = e.getAttribute("method") || l, a = p(e.getAttribute("enctype")) || u, i = new FormData(e)
        } else if (function(e) {
            return c(e) && "button" === e.tagName.toLowerCase()
          }(e) || function(e) {
            return c(e) && "input" === e.tagName.toLowerCase()
          }(e) && ("submit" === e.type || "image" === e.type)) {
          let s = e.form;
          if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let c = e.getAttribute("formaction") || s.getAttribute("action");
          if (o = c ? (0, r.mc)(c, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || l, a = p(e.getAttribute("formenctype")) || p(s.getAttribute("enctype")) || u, i = new FormData(s, e), ! function() {
              if (null === f) try {
                new FormData(document.createElement("form"), 0), f = !1
              } catch (e) {
                f = !0
              }
              return f
            }()) {
            let {
              name: t,
              type: n,
              value: o
            } = e;
            if ("image" === n) {
              let e = t ? t + "." : "";
              i.append(e + "x", "0"), i.append(e + "y", "0")
            } else t && i.append(t, o)
          }
        } else {
          if (c(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
          n = l, o = null, a = u, s = e
        }
        var d;
        return i && "text/plain" === a && (s = i, i = void 0), {
          action: o,
          method: n.toLowerCase(),
          encType: a,
          formData: i,
          body: s
        }
      }
      const h = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
        w = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
        b = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

      function y(e, t) {
        return (0, r.gv)({
          basename: null == t ? void 0 : t.basename,
          future: i({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, r.iU)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
          routes: e,
          mapRouteProperties: a.i0,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function g(e, t) {
        return (0, r.gv)({
          basename: null == t ? void 0 : t.basename,
          future: i({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, r.Yf)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
          routes: e,
          mapRouteProperties: a.i0,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function E() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = i({}, t, {
          errors: S(t.errors)
        })), t
      }

      function S(e) {
        if (!e) return null;
        let t = Object.entries(e),
          n = {};
        for (let [e, o] of t)
          if (o && "RouteErrorResponse" === o.__type) n[e] = new r.sZ(o.status, o.statusText, o.data, !0 === o.internal);
          else if (o && "Error" === o.__type) {
          if (o.__subType) {
            let t = window[o.__subType];
            if ("function" == typeof t) try {
              let a = new t(o.message);
              a.stack = "", n[e] = a
            } catch (e) {}
          }
          if (null == n[e]) {
            let t = new Error(o.message);
            t.stack = "", n[e] = t
          }
        } else n[e] = o;
        return n
      }
      const R = o.createContext({
          isTransitioning: !1
        }),
        T = o.startTransition;
      class _ {
        constructor() {
          this.status = "pending", this.promise = new Promise(((e, t) => {
            this.resolve = t => {
              "pending" === this.status && (this.status = "resolved", e(t))
            }, this.reject = e => {
              "pending" === this.status && (this.status = "rejected", t(e))
            }
          }))
        }
      }

      function C(e) {
        let {
          fallbackElement: t,
          router: n,
          future: r
        } = e, [i, s] = o.useState(n.state), [l, u] = o.useState(), [c, d] = o.useState({
          isTransitioning: !1
        }), [f, m] = o.useState(), [p, v] = o.useState(), [h, w] = o.useState(), {
          v7_startTransition: b
        } = r || {}, y = o.useCallback((e => {
          b ? function(e) {
            T ? T(e) : e()
          }(e) : e()
        }), [b]), g = o.useCallback(((e, t) => {
          let {
            unstable_viewTransitionOpts: o
          } = t;
          o && null != n.window && "function" == typeof n.window.document.startViewTransition ? p && f ? (f.resolve(), p.skipTransition(), w({
            state: e,
            currentLocation: o.currentLocation,
            nextLocation: o.nextLocation
          })) : (u(e), d({
            isTransitioning: !0,
            currentLocation: o.currentLocation,
            nextLocation: o.nextLocation
          })) : y((() => s(e)))
        }), [y, p, f, n.window]);
        o.useLayoutEffect((() => n.subscribe(g)), [n, g]), o.useEffect((() => {
          c.isTransitioning && m(new _)
        }), [c.isTransitioning]), o.useEffect((() => {
          if (f && l && n.window) {
            let e = l,
              t = f.promise,
              o = n.window.document.startViewTransition((async () => {
                y((() => s(e))), await t
              }));
            o.finished.finally((() => {
              m(void 0), v(void 0), u(void 0), d({
                isTransitioning: !1
              })
            })), v(o)
          }
        }), [y, l, f, n.window]), o.useEffect((() => {
          f && l && i.location.key === l.location.key && f.resolve()
        }), [f, p, i.location, l]), o.useEffect((() => {
          !c.isTransitioning && h && (u(h.state), d({
            isTransitioning: !0,
            currentLocation: h.currentLocation,
            nextLocation: h.nextLocation
          }), w(void 0))
        }), [c.isTransitioning, h]);
        let E = o.useMemo((() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: e => n.navigate(e),
            push: (e, t, o) => n.navigate(e, {
              state: t,
              preventScrollReset: null == o ? void 0 : o.preventScrollReset
            }),
            replace: (e, t, o) => n.navigate(e, {
              replace: !0,
              state: t,
              preventScrollReset: null == o ? void 0 : o.preventScrollReset
            })
          })), [n]),
          S = n.basename || "/",
          C = o.useMemo((() => ({
            router: n,
            navigator: E,
            static: !1,
            basename: S
          })), [n, E, S]);
        return o.createElement(o.Fragment, null, o.createElement(a.Mh.Provider, {
          value: C
        }, o.createElement(a.Cu.Provider, {
          value: i
        }, o.createElement(R.Provider, {
          value: c
        }, o.createElement(a.E5, {
          basename: S,
          location: i.location,
          navigationType: i.historyAction,
          navigator: E
        }, i.initialized ? o.createElement(L, {
          routes: n.routes,
          state: i
        }) : t)))), null)
      }

      function L(e) {
        let {
          routes: t,
          state: n
        } = e;
        return (0, a.oj)(t, void 0, n)
      }

      function k(e) {
        let {
          basename: t,
          children: n,
          future: i,
          window: s
        } = e, l = o.useRef();
        null == l.current && (l.current = (0, r.iU)({
          window: s,
          v5Compat: !0
        }));
        let u = l.current,
          [c, d] = o.useState({
            action: u.action,
            location: u.location
          }),
          {
            v7_startTransition: f
          } = i || {},
          m = o.useCallback((e => {
            f && T ? T((() => d(e))) : d(e)
          }), [d, f]);
        return o.useLayoutEffect((() => u.listen(m)), [u, m]), o.createElement(a.E5, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: u
        })
      }

      function x(e) {
        let {
          basename: t,
          children: n,
          future: i,
          window: s
        } = e, l = o.useRef();
        null == l.current && (l.current = (0, r.Yf)({
          window: s,
          v5Compat: !0
        }));
        let u = l.current,
          [c, d] = o.useState({
            action: u.action,
            location: u.location
          }),
          {
            v7_startTransition: f
          } = i || {},
          m = o.useCallback((e => {
            f && T ? T((() => d(e))) : d(e)
          }), [d, f]);
        return o.useLayoutEffect((() => u.listen(m)), [u, m]), o.createElement(a.E5, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: u
        })
      }

      function A(e) {
        let {
          basename: t,
          children: n,
          future: r,
          history: i
        } = e, [s, l] = o.useState({
          action: i.action,
          location: i.location
        }), {
          v7_startTransition: u
        } = r || {}, c = o.useCallback((e => {
          u && T ? T((() => l(e))) : l(e)
        }), [l, u]);
        return o.useLayoutEffect((() => i.listen(c)), [i, c]), o.createElement(a.E5, {
          basename: t,
          children: n,
          location: s.location,
          navigationType: s.action,
          navigator: i
        })
      }
      const F = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        D = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        N = o.forwardRef((function(e, t) {
          let n, {
              onClick: l,
              relative: u,
              reloadDocument: c,
              replace: d,
              state: f,
              target: m,
              to: p,
              preventScrollReset: v,
              unstable_viewTransition: w
            } = e,
            b = s(e, h),
            {
              basename: y
            } = o.useContext(a.yo),
            g = !1;
          if ("string" == typeof p && D.test(p) && (n = p, F)) try {
            let e = new URL(window.location.href),
              t = p.startsWith("//") ? new URL(e.protocol + p) : new URL(p),
              n = (0, r.mc)(t.pathname, y);
            t.origin === e.origin && null != n ? p = n + t.search + t.hash : g = !0
          } catch (e) {}
          let E = (0, a.co)(p, {
              relative: u
            }),
            S = K(p, {
              replace: d,
              state: f,
              target: m,
              preventScrollReset: v,
              relative: u,
              unstable_viewTransition: w
            });
          return o.createElement("a", i({}, b, {
            href: n || E,
            onClick: g || c ? l : function(e) {
              l && l(e), e.defaultPrevented || S(e)
            },
            ref: t,
            target: m
          }))
        })),
        U = o.forwardRef((function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: r = !1,
            className: l = "",
            end: u = !1,
            style: c,
            to: d,
            unstable_viewTransition: f,
            children: m
          } = e, p = s(e, w), v = (0, a.oT)(d, {
            relative: p.relative
          }), h = (0, a.IT)(), b = o.useContext(a.Cu), {
            navigator: y
          } = o.useContext(a.yo), g = null != b && ne(v) && !0 === f, E = y.encodeLocation ? y.encodeLocation(v).pathname : v.pathname, S = h.pathname, R = b && b.navigation && b.navigation.location ? b.navigation.location.pathname : null;
          r || (S = S.toLowerCase(), R = R ? R.toLowerCase() : null, E = E.toLowerCase());
          let T, _ = S === E || !u && S.startsWith(E) && "/" === S.charAt(E.length),
            C = null != R && (R === E || !u && R.startsWith(E) && "/" === R.charAt(E.length)),
            L = {
              isActive: _,
              isPending: C,
              isTransitioning: g
            },
            k = _ ? n : void 0;
          T = "function" == typeof l ? l(L) : [l, _ ? "active" : null, C ? "pending" : null, g ? "transitioning" : null].filter(Boolean).join(" ");
          let x = "function" == typeof c ? c(L) : c;
          return o.createElement(N, i({}, p, {
            "aria-current": k,
            className: T,
            ref: t,
            style: x,
            to: d,
            unstable_viewTransition: f
          }), "function" == typeof m ? m(L) : m)
        })),
        P = o.forwardRef(((e, t) => {
          let n = B();
          return o.createElement(M, i({}, e, {
            submit: n,
            ref: t
          }))
        })),
        M = o.forwardRef(((e, t) => {
          let {
            reloadDocument: n,
            replace: a,
            state: r,
            method: u = l,
            action: c,
            onSubmit: d,
            submit: f,
            relative: m,
            preventScrollReset: p,
            unstable_viewTransition: v
          } = e, h = s(e, b), w = "get" === u.toLowerCase() ? "get" : "post", y = W(c, {
            relative: m
          });
          return o.createElement("form", i({
            ref: t,
            method: w,
            action: y,
            onSubmit: n ? d : e => {
              if (d && d(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                n = (null == t ? void 0 : t.getAttribute("formmethod")) || u;
              f(t || e.currentTarget, {
                method: n,
                replace: a,
                state: r,
                relative: m,
                preventScrollReset: p,
                unstable_viewTransition: v
              })
            }
          }, h))
        }));

      function I(e) {
        let {
          getKey: t,
          storageKey: n
        } = e;
        return $({
          getKey: t,
          storageKey: n
        }), null
      }
      var O, Y;

      function q(e) {
        let t = o.useContext(a.Mh);
        return t || (0, r.q4)(!1), t
      }

      function j(e) {
        let t = o.useContext(a.Cu);
        return t || (0, r.q4)(!1), t
      }

      function K(e, t) {
        let {
          target: n,
          replace: i,
          state: s,
          preventScrollReset: l,
          relative: u,
          unstable_viewTransition: c
        } = void 0 === t ? {} : t, d = (0, a.i6)(), f = (0, a.IT)(), m = (0, a.oT)(e, {
          relative: u
        });
        return o.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== i ? i : (0, r.Ep)(f) === (0, r.Ep)(m);
            d(e, {
              replace: n,
              state: s,
              preventScrollReset: l,
              relative: u,
              unstable_viewTransition: c
            })
          }
        }), [f, d, m, i, s, n, e, l, u, c])
      }

      function V(e) {
        let t = o.useRef(d(e)),
          n = o.useRef(!1),
          r = (0, a.IT)(),
          i = o.useMemo((() => function(e, t) {
            let n = d(e);
            return t && t.forEach(((e, o) => {
              n.has(o) || t.getAll(o).forEach((e => {
                n.append(o, e)
              }))
            })), n
          }(r.search, n.current ? null : t.current)), [r.search]),
          s = (0, a.i6)(),
          l = o.useCallback(((e, t) => {
            const o = d("function" == typeof e ? e(i) : e);
            n.current = !0, s("?" + o, t)
          }), [s, i]);
        return [i, l]
      }

      function z() {
        if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
      }

      function B() {
        let {
          router: e
        } = q(O.UseSubmit), {
          basename: t
        } = o.useContext(a.yo), n = (0, a.WM)();
        return o.useCallback((function(o, a) {
          void 0 === a && (a = {}), z();
          let {
            action: r,
            method: i,
            encType: s,
            formData: l,
            body: u
          } = v(o, t);
          e.navigate(a.action || r, {
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || i,
            formEncType: a.encType || s,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            unstable_viewTransition: a.unstable_viewTransition
          })
        }), [e, t, n])
      }

      function H(e, t) {
        let {
          router: n
        } = q(O.UseSubmitFetcher), {
          basename: i
        } = o.useContext(a.yo);
        return o.useCallback((function(o, a) {
          void 0 === a && (a = {}), z();
          let {
            action: s,
            method: l,
            encType: u,
            formData: c,
            body: d
          } = v(o, i);
          null == t && (0, r.q4)(!1), n.fetch(e, t, a.action || s, {
            preventScrollReset: a.preventScrollReset,
            formData: c,
            body: d,
            formMethod: a.method || l,
            formEncType: a.encType || u
          })
        }), [n, i, e, t])
      }

      function W(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: s
        } = o.useContext(a.yo), l = o.useContext(a.EN);
        l || (0, r.q4)(!1);
        let [u] = l.matches.slice(-1), c = i({}, (0, a.oT)(e || ".", {
          relative: n
        })), d = (0, a.IT)();
        if (null == e && (c.search = d.search, u.route.index)) {
          let e = new URLSearchParams(c.search);
          e.delete("index"), c.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !u.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== s && (c.pathname = "/" === c.pathname ? s : (0, r.En)([s, c.pathname])), (0, r.Ep)(c)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(O || (O = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(Y || (Y = {}));
      let G = 0;

      function J() {
        var e;
        let {
          router: t
        } = q(O.UseFetcher), n = o.useContext(a.EN);
        n || (0, r.q4)(!1);
        let s = null == (e = n.matches[n.matches.length - 1]) ? void 0 : e.route.id;
        null == s && (0, r.q4)(!1);
        let [l] = o.useState((() => String(++G))), [u] = o.useState((() => (s || (0, r.q4)(!1), function(e, t) {
          return o.forwardRef(((n, a) => {
            let r = H(e, t);
            return o.createElement(M, i({}, n, {
              ref: a,
              submit: r
            }))
          }))
        }(l, s)))), [c] = o.useState((() => e => {
          t || (0, r.q4)(!1), s || (0, r.q4)(!1), t.fetch(l, s, e)
        })), d = H(l, s), f = t.getFetcher(l), m = o.useMemo((() => i({
          Form: u,
          submit: d,
          load: c
        }, f)), [f, u, d, c]);
        return o.useEffect((() => () => {
          t ? t.deleteFetcher(l) : console.warn("No router available to clean up from useFetcher()")
        }), [t, l]), m
      }

      function X() {
        return [...j(Y.UseFetchers).fetchers.values()]
      }
      const Q = "react-router-scroll-positions";
      let Z = {};

      function $(e) {
        let {
          getKey: t,
          storageKey: n
        } = void 0 === e ? {} : e, {
          router: s
        } = q(O.UseScrollRestoration), {
          restoreScrollPosition: l,
          preventScrollReset: u
        } = j(Y.UseScrollRestoration), {
          basename: c
        } = o.useContext(a.yo), d = (0, a.IT)(), f = (0, a.y8)(), m = (0, a.Yi)();
        o.useEffect((() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          })), []),
          function(e, t) {
            let {
              capture: n
            } = {};
            o.useEffect((() => {
              let t = null != n ? {
                capture: n
              } : void 0;
              return window.addEventListener("pagehide", e, t), () => {
                window.removeEventListener("pagehide", e, t)
              }
            }), [e, n])
          }(o.useCallback((() => {
            if ("idle" === m.state) {
              let e = (t ? t(d, f) : null) || d.key;
              Z[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(n || Q, JSON.stringify(Z))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }), [n, t, m.state, d, f])), "undefined" != typeof document && (o.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(n || Q);
              e && (Z = JSON.parse(e))
            } catch (e) {}
          }), [n]), o.useLayoutEffect((() => {
            let e = t && "/" !== c ? (e, n) => t(i({}, e, {
                pathname: (0, r.mc)(e.pathname, c) || e.pathname
              }), n) : t,
              n = null == s ? void 0 : s.enableScrollRestoration(Z, (() => window.scrollY), e);
            return () => n && n()
          }), [s, c, t]), o.useLayoutEffect((() => {
            if (!1 !== l)
              if ("number" != typeof l) {
                if (d.hash) {
                  let e = document.getElementById(decodeURIComponent(d.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== u && window.scrollTo(0, 0)
              } else window.scrollTo(0, l)
          }), [d, l, u]))
      }

      function ee(e, t) {
        let {
          capture: n
        } = t || {};
        o.useEffect((() => {
          let t = null != n ? {
            capture: n
          } : void 0;
          return window.addEventListener("beforeunload", e, t), () => {
            window.removeEventListener("beforeunload", e, t)
          }
        }), [e, n])
      }

      function te(e) {
        let {
          when: t,
          message: n
        } = e, r = (0, a.C5)(t);
        o.useEffect((() => {
          "blocked" === r.state && (window.confirm(n) ? setTimeout(r.proceed, 0) : r.reset())
        }), [r, n]), o.useEffect((() => {
          "blocked" !== r.state || t || r.reset()
        }), [r, t])
      }

      function ne(e, t) {
        void 0 === t && (t = {});
        let n = o.useContext(R);
        null == n && (0, r.q4)(!1);
        let {
          basename: i
        } = q(O.useViewTransitionState), s = (0, a.oT)(e, {
          relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let l = (0, r.mc)(n.currentLocation.pathname, i) || n.currentLocation.pathname,
          u = (0, r.mc)(n.nextLocation.pathname, i) || n.nextLocation.pathname;
        return null != (0, r.ot)(s.pathname, u) || null != (0, r.ot)(s.pathname, l)
      }
    }
  }
]);
//# sourceMappingURL=b5f851f1f2d95861d75c69f44875af43.js.map