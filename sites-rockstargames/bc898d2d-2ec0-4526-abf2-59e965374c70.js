! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bc898d2d-2ec0-4526-abf2-59e965374c70", e._sentryDebugIdIdentifier = "sentry-dbid-bc898d2d-2ec0-4526-abf2-59e965374c70")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7120], {
    77120: (e, t, n) => {
      n.r(t), n.d(t, {
        AbortedDeferredError: () => o.AbortedDeferredError,
        Await: () => o.Await,
        BrowserRouter: () => A,
        Form: () => P,
        HashRouter: () => L,
        Link: () => k,
        MemoryRouter: () => o.MemoryRouter,
        NavLink: () => D,
        Navigate: () => o.Navigate,
        NavigationType: () => o.NavigationType,
        Outlet: () => o.Outlet,
        Route: () => o.Route,
        Router: () => o.Router,
        RouterProvider: () => N,
        Routes: () => o.Routes,
        ScrollRestoration: () => M,
        UNSAFE_DataRouterContext: () => o.UNSAFE_DataRouterContext,
        UNSAFE_DataRouterStateContext: () => o.UNSAFE_DataRouterStateContext,
        UNSAFE_LocationContext: () => o.UNSAFE_LocationContext,
        UNSAFE_NavigationContext: () => o.UNSAFE_NavigationContext,
        UNSAFE_RouteContext: () => o.UNSAFE_RouteContext,
        UNSAFE_ViewTransitionContext: () => E,
        UNSAFE_useRouteId: () => o.UNSAFE_useRouteId,
        UNSAFE_useScrollRestoration: () => $,
        createBrowserRouter: () => g,
        createHashRouter: () => y,
        createMemoryRouter: () => o.createMemoryRouter,
        createPath: () => o.createPath,
        createRoutesFromChildren: () => o.createRoutesFromChildren,
        createRoutesFromElements: () => o.createRoutesFromElements,
        createSearchParams: () => d,
        defer: () => o.defer,
        generatePath: () => o.generatePath,
        isRouteErrorResponse: () => o.isRouteErrorResponse,
        json: () => o.json,
        matchPath: () => o.matchPath,
        matchRoutes: () => o.matchRoutes,
        parsePath: () => o.parsePath,
        redirect: () => o.redirect,
        redirectDocument: () => o.redirectDocument,
        renderMatches: () => o.renderMatches,
        resolvePath: () => o.resolvePath,
        unstable_HistoryRouter: () => x,
        unstable_useBlocker: () => o.unstable_useBlocker,
        unstable_usePrompt: () => te,
        unstable_useViewTransitionState: () => ne,
        useActionData: () => o.useActionData,
        useAsyncError: () => o.useAsyncError,
        useAsyncValue: () => o.useAsyncValue,
        useBeforeUnload: () => ee,
        useFetcher: () => G,
        useFetchers: () => Q,
        useFormAction: () => J,
        useHref: () => o.useHref,
        useInRouterContext: () => o.useInRouterContext,
        useLinkClickHandler: () => H,
        useLoaderData: () => o.useLoaderData,
        useLocation: () => o.useLocation,
        useMatch: () => o.useMatch,
        useMatches: () => o.useMatches,
        useNavigate: () => o.useNavigate,
        useNavigation: () => o.useNavigation,
        useNavigationType: () => o.useNavigationType,
        useOutlet: () => o.useOutlet,
        useOutletContext: () => o.useOutletContext,
        useParams: () => o.useParams,
        useResolvedPath: () => o.useResolvedPath,
        useRevalidator: () => o.useRevalidator,
        useRouteError: () => o.useRouteError,
        useRouteLoaderData: () => o.useRouteLoaderData,
        useRoutes: () => o.useRoutes,
        useSearchParams: () => K,
        useSubmit: () => Y
      });
      var a = n(62229),
        o = n(33213),
        r = n(79972);

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
          }
          return e
        }, i.apply(this, arguments)
      }

      function s(e, t) {
        if (null == e) return {};
        var n, a, o = {},
          r = Object.keys(e);
        for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      const u = "get",
        l = "application/x-www-form-urlencoded";

      function c(e) {
        return null != e && "string" == typeof e.tagName
      }

      function d(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, n) => {
          let a = e[n];
          return t.concat(Array.isArray(a) ? a.map((e => [n, e])) : [
            [n, a]
          ])
        }), []))
      }
      let f = null;
      const m = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function v(e) {
        return null == e || m.has(e) ? e : null
      }

      function p(e, t) {
        let n, a, o, i, s;
        if (c(d = e) && "form" === d.tagName.toLowerCase()) {
          let s = e.getAttribute("action");
          a = s ? (0, r.pb)(s, t) : null, n = e.getAttribute("method") || u, o = v(e.getAttribute("enctype")) || l, i = new FormData(e)
        } else if (function(e) {
            return c(e) && "button" === e.tagName.toLowerCase()
          }(e) || function(e) {
            return c(e) && "input" === e.tagName.toLowerCase()
          }(e) && ("submit" === e.type || "image" === e.type)) {
          let s = e.form;
          if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let c = e.getAttribute("formaction") || s.getAttribute("action");
          if (a = c ? (0, r.pb)(c, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || u, o = v(e.getAttribute("formenctype")) || v(s.getAttribute("enctype")) || l, i = new FormData(s, e), ! function() {
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
              value: a
            } = e;
            if ("image" === n) {
              let e = t ? t + "." : "";
              i.append(e + "x", "0"), i.append(e + "y", "0")
            } else t && i.append(t, a)
          }
        } else {
          if (c(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
          n = u, a = null, o = l, s = e
        }
        var d;
        return i && "text/plain" === o && (s = i, i = void 0), {
          action: a,
          method: n.toLowerCase(),
          encType: o,
          formData: i,
          body: s
        }
      }
      const h = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
        w = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
        b = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

      function g(e, t) {
        return (0, r.aE)({
          basename: null == t ? void 0 : t.basename,
          future: i({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, r.zR)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || R(),
          routes: e,
          mapRouteProperties: o.UNSAFE_mapRouteProperties,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function y(e, t) {
        return (0, r.aE)({
          basename: null == t ? void 0 : t.basename,
          future: i({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, r.TM)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || R(),
          routes: e,
          mapRouteProperties: o.UNSAFE_mapRouteProperties,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function R() {
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
        for (let [e, a] of t)
          if (a && "RouteErrorResponse" === a.__type) n[e] = new r.VV(a.status, a.statusText, a.data, !0 === a.internal);
          else if (a && "Error" === a.__type) {
          if (a.__subType) {
            let t = window[a.__subType];
            if ("function" == typeof t) try {
              let o = new t(a.message);
              o.stack = "", n[e] = o
            } catch (e) {}
          }
          if (null == n[e]) {
            let t = new Error(a.message);
            t.stack = "", n[e] = t
          }
        } else n[e] = a;
        return n
      }
      const E = a.createContext({
          isTransitioning: !1
        }),
        _ = a.startTransition;
      class C {
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

      function N(e) {
        let {
          fallbackElement: t,
          router: n,
          future: r
        } = e, [i, s] = a.useState(n.state), [u, l] = a.useState(), [c, d] = a.useState({
          isTransitioning: !1
        }), [f, m] = a.useState(), [v, p] = a.useState(), [h, w] = a.useState(), {
          v7_startTransition: b
        } = r || {}, g = a.useCallback((e => {
          b ? function(e) {
            _ ? _(e) : e()
          }(e) : e()
        }), [b]), y = a.useCallback(((e, t) => {
          let {
            unstable_viewTransitionOpts: a
          } = t;
          a && null != n.window && "function" == typeof n.window.document.startViewTransition ? v && f ? (f.resolve(), v.skipTransition(), w({
            state: e,
            currentLocation: a.currentLocation,
            nextLocation: a.nextLocation
          })) : (l(e), d({
            isTransitioning: !0,
            currentLocation: a.currentLocation,
            nextLocation: a.nextLocation
          })) : g((() => s(e)))
        }), [g, v, f, n.window]);
        a.useLayoutEffect((() => n.subscribe(y)), [n, y]), a.useEffect((() => {
          c.isTransitioning && m(new C)
        }), [c.isTransitioning]), a.useEffect((() => {
          if (f && u && n.window) {
            let e = u,
              t = f.promise,
              a = n.window.document.startViewTransition((async () => {
                g((() => s(e))), await t
              }));
            a.finished.finally((() => {
              m(void 0), p(void 0), l(void 0), d({
                isTransitioning: !1
              })
            })), p(a)
          }
        }), [g, u, f, n.window]), a.useEffect((() => {
          f && u && i.location.key === u.location.key && f.resolve()
        }), [f, v, i.location, u]), a.useEffect((() => {
          !c.isTransitioning && h && (l(h.state), d({
            isTransitioning: !0,
            currentLocation: h.currentLocation,
            nextLocation: h.nextLocation
          }), w(void 0))
        }), [c.isTransitioning, h]);
        let R = a.useMemo((() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: e => n.navigate(e),
            push: (e, t, a) => n.navigate(e, {
              state: t,
              preventScrollReset: null == a ? void 0 : a.preventScrollReset
            }),
            replace: (e, t, a) => n.navigate(e, {
              replace: !0,
              state: t,
              preventScrollReset: null == a ? void 0 : a.preventScrollReset
            })
          })), [n]),
          S = n.basename || "/",
          N = a.useMemo((() => ({
            router: n,
            navigator: R,
            static: !1,
            basename: S
          })), [n, R, S]);
        return a.createElement(a.Fragment, null, a.createElement(o.UNSAFE_DataRouterContext.Provider, {
          value: N
        }, a.createElement(o.UNSAFE_DataRouterStateContext.Provider, {
          value: i
        }, a.createElement(E.Provider, {
          value: c
        }, a.createElement(o.Router, {
          basename: S,
          location: i.location,
          navigationType: i.historyAction,
          navigator: R
        }, i.initialized ? a.createElement(T, {
          routes: n.routes,
          state: i
        }) : t)))), null)
      }

      function T(e) {
        let {
          routes: t,
          state: n
        } = e;
        return (0, o.UNSAFE_useRoutesImpl)(t, void 0, n)
      }

      function A(e) {
        let {
          basename: t,
          children: n,
          future: i,
          window: s
        } = e, u = a.useRef();
        null == u.current && (u.current = (0, r.zR)({
          window: s,
          v5Compat: !0
        }));
        let l = u.current,
          [c, d] = a.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: f
          } = i || {},
          m = a.useCallback((e => {
            f && _ ? _((() => d(e))) : d(e)
          }), [d, f]);
        return a.useLayoutEffect((() => l.listen(m)), [l, m]), a.createElement(o.Router, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: l
        })
      }

      function L(e) {
        let {
          basename: t,
          children: n,
          future: i,
          window: s
        } = e, u = a.useRef();
        null == u.current && (u.current = (0, r.TM)({
          window: s,
          v5Compat: !0
        }));
        let l = u.current,
          [c, d] = a.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: f
          } = i || {},
          m = a.useCallback((e => {
            f && _ ? _((() => d(e))) : d(e)
          }), [d, f]);
        return a.useLayoutEffect((() => l.listen(m)), [l, m]), a.createElement(o.Router, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: l
        })
      }

      function x(e) {
        let {
          basename: t,
          children: n,
          future: r,
          history: i
        } = e, [s, u] = a.useState({
          action: i.action,
          location: i.location
        }), {
          v7_startTransition: l
        } = r || {}, c = a.useCallback((e => {
          l && _ ? _((() => u(e))) : u(e)
        }), [u, l]);
        return a.useLayoutEffect((() => i.listen(c)), [i, c]), a.createElement(o.Router, {
          basename: t,
          children: n,
          location: s.location,
          navigationType: s.action,
          navigator: i
        })
      }
      const F = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        U = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        k = a.forwardRef((function(e, t) {
          let n, {
              onClick: u,
              relative: l,
              reloadDocument: c,
              replace: d,
              state: f,
              target: m,
              to: v,
              preventScrollReset: p,
              unstable_viewTransition: w
            } = e,
            b = s(e, h),
            {
              basename: g
            } = a.useContext(o.UNSAFE_NavigationContext),
            y = !1;
          if ("string" == typeof v && U.test(v) && (n = v, F)) try {
            let e = new URL(window.location.href),
              t = v.startsWith("//") ? new URL(e.protocol + v) : new URL(v),
              n = (0, r.pb)(t.pathname, g);
            t.origin === e.origin && null != n ? v = n + t.search + t.hash : y = !0
          } catch (e) {}
          let R = (0, o.useHref)(v, {
              relative: l
            }),
            S = H(v, {
              replace: d,
              state: f,
              target: m,
              preventScrollReset: p,
              relative: l,
              unstable_viewTransition: w
            });
          return a.createElement("a", i({}, b, {
            href: n || R,
            onClick: y || c ? u : function(e) {
              u && u(e), e.defaultPrevented || S(e)
            },
            ref: t,
            target: m
          }))
        })),
        D = a.forwardRef((function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: r = !1,
            className: u = "",
            end: l = !1,
            style: c,
            to: d,
            unstable_viewTransition: f,
            children: m
          } = e, v = s(e, w), p = (0, o.useResolvedPath)(d, {
            relative: v.relative
          }), h = (0, o.useLocation)(), b = a.useContext(o.UNSAFE_DataRouterStateContext), {
            navigator: g
          } = a.useContext(o.UNSAFE_NavigationContext), y = null != b && ne(p) && !0 === f, R = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname, S = h.pathname, E = b && b.navigation && b.navigation.location ? b.navigation.location.pathname : null;
          r || (S = S.toLowerCase(), E = E ? E.toLowerCase() : null, R = R.toLowerCase());
          let _, C = S === R || !l && S.startsWith(R) && "/" === S.charAt(R.length),
            N = null != E && (E === R || !l && E.startsWith(R) && "/" === E.charAt(R.length)),
            T = {
              isActive: C,
              isPending: N,
              isTransitioning: y
            },
            A = C ? n : void 0;
          _ = "function" == typeof u ? u(T) : [u, C ? "active" : null, N ? "pending" : null, y ? "transitioning" : null].filter(Boolean).join(" ");
          let L = "function" == typeof c ? c(T) : c;
          return a.createElement(k, i({}, v, {
            "aria-current": A,
            className: _,
            ref: t,
            style: L,
            to: d,
            unstable_viewTransition: f
          }), "function" == typeof m ? m(T) : m)
        })),
        P = a.forwardRef(((e, t) => {
          let n = Y();
          return a.createElement(O, i({}, e, {
            submit: n,
            ref: t
          }))
        })),
        O = a.forwardRef(((e, t) => {
          let {
            reloadDocument: n,
            replace: o,
            state: r,
            method: l = u,
            action: c,
            onSubmit: d,
            submit: f,
            relative: m,
            preventScrollReset: v,
            unstable_viewTransition: p
          } = e, h = s(e, b), w = "get" === l.toLowerCase() ? "get" : "post", g = J(c, {
            relative: m
          });
          return a.createElement("form", i({
            ref: t,
            method: w,
            action: g,
            onSubmit: n ? d : e => {
              if (d && d(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                n = (null == t ? void 0 : t.getAttribute("formmethod")) || l;
              f(t || e.currentTarget, {
                method: n,
                replace: o,
                state: r,
                relative: m,
                preventScrollReset: v,
                unstable_viewTransition: p
              })
            }
          }, h))
        }));

      function M(e) {
        let {
          getKey: t,
          storageKey: n
        } = e;
        return $({
          getKey: t,
          storageKey: n
        }), null
      }
      var I, B;

      function V(e) {
        let t = a.useContext(o.UNSAFE_DataRouterContext);
        return t || (0, r.Oi)(!1), t
      }

      function j(e) {
        let t = a.useContext(o.UNSAFE_DataRouterStateContext);
        return t || (0, r.Oi)(!1), t
      }

      function H(e, t) {
        let {
          target: n,
          replace: r,
          state: i,
          preventScrollReset: s,
          relative: u,
          unstable_viewTransition: l
        } = void 0 === t ? {} : t, c = (0, o.useNavigate)(), d = (0, o.useLocation)(), f = (0, o.useResolvedPath)(e, {
          relative: u
        });
        return a.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== r ? r : (0, o.createPath)(d) === (0, o.createPath)(f);
            c(e, {
              replace: n,
              state: i,
              preventScrollReset: s,
              relative: u,
              unstable_viewTransition: l
            })
          }
        }), [d, c, f, r, i, n, e, s, u, l])
      }

      function K(e) {
        let t = a.useRef(d(e)),
          n = a.useRef(!1),
          r = (0, o.useLocation)(),
          i = a.useMemo((() => function(e, t) {
            let n = d(e);
            return t && t.forEach(((e, a) => {
              n.has(a) || t.getAll(a).forEach((e => {
                n.append(a, e)
              }))
            })), n
          }(r.search, n.current ? null : t.current)), [r.search]),
          s = (0, o.useNavigate)(),
          u = a.useCallback(((e, t) => {
            const a = d("function" == typeof e ? e(i) : e);
            n.current = !0, s("?" + a, t)
          }), [s, i]);
        return [i, u]
      }

      function z() {
        if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
      }

      function Y() {
        let {
          router: e
        } = V(I.UseSubmit), {
          basename: t
        } = a.useContext(o.UNSAFE_NavigationContext), n = (0, o.UNSAFE_useRouteId)();
        return a.useCallback((function(a, o) {
          void 0 === o && (o = {}), z();
          let {
            action: r,
            method: i,
            encType: s,
            formData: u,
            body: l
          } = p(a, t);
          e.navigate(o.action || r, {
            preventScrollReset: o.preventScrollReset,
            formData: u,
            body: l,
            formMethod: o.method || i,
            formEncType: o.encType || s,
            replace: o.replace,
            state: o.state,
            fromRouteId: n,
            unstable_viewTransition: o.unstable_viewTransition
          })
        }), [e, t, n])
      }

      function W(e, t) {
        let {
          router: n
        } = V(I.UseSubmitFetcher), {
          basename: i
        } = a.useContext(o.UNSAFE_NavigationContext);
        return a.useCallback((function(a, o) {
          void 0 === o && (o = {}), z();
          let {
            action: s,
            method: u,
            encType: l,
            formData: c,
            body: d
          } = p(a, i);
          null == t && (0, r.Oi)(!1), n.fetch(e, t, o.action || s, {
            preventScrollReset: o.preventScrollReset,
            formData: c,
            body: d,
            formMethod: o.method || u,
            formEncType: o.encType || l
          })
        }), [n, i, e, t])
      }

      function J(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: s
        } = a.useContext(o.UNSAFE_NavigationContext), u = a.useContext(o.UNSAFE_RouteContext);
        u || (0, r.Oi)(!1);
        let [l] = u.matches.slice(-1), c = i({}, (0, o.useResolvedPath)(e || ".", {
          relative: n
        })), d = (0, o.useLocation)();
        if (null == e && (c.search = d.search, l.route.index)) {
          let e = new URLSearchParams(c.search);
          e.delete("index"), c.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !l.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== s && (c.pathname = "/" === c.pathname ? s : (0, r.HS)([s, c.pathname])), (0, o.createPath)(c)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(I || (I = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(B || (B = {}));
      let q = 0;

      function G() {
        var e;
        let {
          router: t
        } = V(I.UseFetcher), n = a.useContext(o.UNSAFE_RouteContext);
        n || (0, r.Oi)(!1);
        let s = null == (e = n.matches[n.matches.length - 1]) ? void 0 : e.route.id;
        null == s && (0, r.Oi)(!1);
        let [u] = a.useState((() => String(++q))), [l] = a.useState((() => (s || (0, r.Oi)(!1), function(e, t) {
          return a.forwardRef(((n, o) => {
            let r = W(e, t);
            return a.createElement(O, i({}, n, {
              ref: o,
              submit: r
            }))
          }))
        }(u, s)))), [c] = a.useState((() => e => {
          t || (0, r.Oi)(!1), s || (0, r.Oi)(!1), t.fetch(u, s, e)
        })), d = W(u, s), f = t.getFetcher(u), m = a.useMemo((() => i({
          Form: l,
          submit: d,
          load: c
        }, f)), [f, l, d, c]);
        return a.useEffect((() => () => {
          t ? t.deleteFetcher(u) : console.warn("No router available to clean up from useFetcher()")
        }), [t, u]), m
      }

      function Q() {
        return [...j(B.UseFetchers).fetchers.values()]
      }
      const X = "react-router-scroll-positions";
      let Z = {};

      function $(e) {
        let {
          getKey: t,
          storageKey: n
        } = void 0 === e ? {} : e, {
          router: s
        } = V(I.UseScrollRestoration), {
          restoreScrollPosition: u,
          preventScrollReset: l
        } = j(B.UseScrollRestoration), {
          basename: c
        } = a.useContext(o.UNSAFE_NavigationContext), d = (0, o.useLocation)(), f = (0, o.useMatches)(), m = (0, o.useNavigation)();
        a.useEffect((() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          })), []),
          function(e, t) {
            let {
              capture: n
            } = {};
            a.useEffect((() => {
              let t = null != n ? {
                capture: n
              } : void 0;
              return window.addEventListener("pagehide", e, t), () => {
                window.removeEventListener("pagehide", e, t)
              }
            }), [e, n])
          }(a.useCallback((() => {
            if ("idle" === m.state) {
              let e = (t ? t(d, f) : null) || d.key;
              Z[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(n || X, JSON.stringify(Z))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }), [n, t, m.state, d, f])), "undefined" != typeof document && (a.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(n || X);
              e && (Z = JSON.parse(e))
            } catch (e) {}
          }), [n]), a.useLayoutEffect((() => {
            let e = t && "/" !== c ? (e, n) => t(i({}, e, {
                pathname: (0, r.pb)(e.pathname, c) || e.pathname
              }), n) : t,
              n = null == s ? void 0 : s.enableScrollRestoration(Z, (() => window.scrollY), e);
            return () => n && n()
          }), [s, c, t]), a.useLayoutEffect((() => {
            if (!1 !== u)
              if ("number" != typeof u) {
                if (d.hash) {
                  let e = document.getElementById(decodeURIComponent(d.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== l && window.scrollTo(0, 0)
              } else window.scrollTo(0, u)
          }), [d, u, l]))
      }

      function ee(e, t) {
        let {
          capture: n
        } = t || {};
        a.useEffect((() => {
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
        } = e, r = (0, o.unstable_useBlocker)(t);
        a.useEffect((() => {
          "blocked" === r.state && (window.confirm(n) ? setTimeout(r.proceed, 0) : r.reset())
        }), [r, n]), a.useEffect((() => {
          "blocked" !== r.state || t || r.reset()
        }), [r, t])
      }

      function ne(e, t) {
        void 0 === t && (t = {});
        let n = a.useContext(E);
        null == n && (0, r.Oi)(!1);
        let {
          basename: i
        } = V(I.useViewTransitionState), s = (0, o.useResolvedPath)(e, {
          relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let u = (0, r.pb)(n.currentLocation.pathname, i) || n.currentLocation.pathname,
          l = (0, r.pb)(n.nextLocation.pathname, i) || n.nextLocation.pathname;
        return null != (0, r.B6)(s.pathname, l) || null != (0, r.B6)(s.pathname, u)
      }
    }
  }
]);