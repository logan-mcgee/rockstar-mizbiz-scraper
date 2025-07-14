try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e5552a73-8482-4bfd-875a-22f1da51e148", e._sentryDebugIdIdentifier = "sentry-dbid-e5552a73-8482-4bfd-875a-22f1da51e148")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4650], {
    54650: (e, t, n) => {
      n.r(t), n.d(t, {
        AbortedDeferredError: () => r.AbortedDeferredError,
        Await: () => r.Await,
        BrowserRouter: () => k,
        Form: () => K,
        HashRouter: () => D,
        Link: () => V,
        MemoryRouter: () => r.MemoryRouter,
        NavLink: () => I,
        Navigate: () => r.Navigate,
        NavigationType: () => r.NavigationType,
        Outlet: () => r.Outlet,
        Route: () => r.Route,
        Router: () => r.Router,
        RouterProvider: () => x,
        Routes: () => r.Routes,
        ScrollRestoration: () => H,
        UNSAFE_DataRouterContext: () => r.UNSAFE_DataRouterContext,
        UNSAFE_DataRouterStateContext: () => r.UNSAFE_DataRouterStateContext,
        UNSAFE_ErrorResponseImpl: () => i.VV,
        UNSAFE_FetchersContext: () => _,
        UNSAFE_LocationContext: () => r.UNSAFE_LocationContext,
        UNSAFE_NavigationContext: () => r.UNSAFE_NavigationContext,
        UNSAFE_RouteContext: () => r.UNSAFE_RouteContext,
        UNSAFE_ViewTransitionContext: () => E,
        UNSAFE_useRouteId: () => r.UNSAFE_useRouteId,
        UNSAFE_useScrollRestoration: () => ne,
        createBrowserRouter: () => y,
        createHashRouter: () => R,
        createMemoryRouter: () => r.createMemoryRouter,
        createPath: () => r.createPath,
        createRoutesFromChildren: () => r.createRoutesFromChildren,
        createRoutesFromElements: () => r.createRoutesFromElements,
        createSearchParams: () => f,
        defer: () => r.defer,
        generatePath: () => r.generatePath,
        isRouteErrorResponse: () => r.isRouteErrorResponse,
        json: () => r.json,
        matchPath: () => r.matchPath,
        matchRoutes: () => r.matchRoutes,
        parsePath: () => r.parsePath,
        redirect: () => r.redirect,
        redirectDocument: () => r.redirectDocument,
        renderMatches: () => r.renderMatches,
        replace: () => r.replace,
        resolvePath: () => r.resolvePath,
        unstable_HistoryRouter: () => P,
        unstable_usePrompt: () => oe,
        useActionData: () => r.useActionData,
        useAsyncError: () => r.useAsyncError,
        useAsyncValue: () => r.useAsyncValue,
        useBeforeUnload: () => ae,
        useBlocker: () => r.useBlocker,
        useFetcher: () => Z,
        useFetchers: () => $,
        useFormAction: () => X,
        useHref: () => r.useHref,
        useInRouterContext: () => r.useInRouterContext,
        useLinkClickHandler: () => Y,
        useLoaderData: () => r.useLoaderData,
        useLocation: () => r.useLocation,
        useMatch: () => r.useMatch,
        useMatches: () => r.useMatches,
        useNavigate: () => r.useNavigate,
        useNavigation: () => r.useNavigation,
        useNavigationType: () => r.useNavigationType,
        useOutlet: () => r.useOutlet,
        useOutletContext: () => r.useOutletContext,
        useParams: () => r.useParams,
        useResolvedPath: () => r.useResolvedPath,
        useRevalidator: () => r.useRevalidator,
        useRouteError: () => r.useRouteError,
        useRouteLoaderData: () => r.useRouteLoaderData,
        useRoutes: () => r.useRoutes,
        useSearchParams: () => J,
        useSubmit: () => Q,
        useViewTransitionState: () => re
      });
      var a = n(62229),
        o = n(23271),
        r = n(33213),
        i = n(17242);

      function s() {
        return s = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
          }
          return e
        }, s.apply(this, arguments)
      }

      function u(e, t) {
        if (null == e) return {};
        var n, a, o = {},
          r = Object.keys(e);
        for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      const l = "get",
        c = "application/x-www-form-urlencoded";

      function d(e) {
        return null != e && "string" == typeof e.tagName
      }

      function f(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, n) => {
          let a = e[n];
          return t.concat(Array.isArray(a) ? a.map((e => [n, e])) : [
            [n, a]
          ])
        }), []))
      }
      let h = null;
      const m = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function v(e) {
        return null == e || m.has(e) ? e : null
      }
      const p = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
        g = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
        w = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
      try {
        window.__reactRouterVersion = "6"
      } catch (e) {}

      function y(e, t) {
        return (0, i.aE)({
          basename: null == t ? void 0 : t.basename,
          future: s({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, i.zR)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || S(),
          routes: e,
          mapRouteProperties: r.UNSAFE_mapRouteProperties,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function R(e, t) {
        return (0, i.aE)({
          basename: null == t ? void 0 : t.basename,
          future: s({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, i.TM)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || S(),
          routes: e,
          mapRouteProperties: r.UNSAFE_mapRouteProperties,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function S() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = s({}, t, {
          errors: b(t.errors)
        })), t
      }

      function b(e) {
        if (!e) return null;
        let t = Object.entries(e),
          n = {};
        for (let [e, a] of t)
          if (a && "RouteErrorResponse" === a.__type) n[e] = new i.VV(a.status, a.statusText, a.data, !0 === a.internal);
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
        _ = a.createContext(new Map),
        C = a.startTransition,
        N = o.flushSync,
        T = a.useId;

      function A(e) {
        N ? N(e) : e()
      }
      class L {
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

      function x(e) {
        let {
          fallbackElement: t,
          router: n,
          future: o
        } = e, [i, s] = a.useState(n.state), [u, l] = a.useState(), [c, d] = a.useState({
          isTransitioning: !1
        }), [f, h] = a.useState(), [m, v] = a.useState(), [p, g] = a.useState(), w = a.useRef(new Map), {
          v7_startTransition: y
        } = o || {}, R = a.useCallback((e => {
          y ? function(e) {
            C ? C(e) : e()
          }(e) : e()
        }), [y]), S = a.useCallback(((e, t) => {
          let {
            deletedFetchers: a,
            flushSync: o,
            viewTransitionOpts: r
          } = t;
          e.fetchers.forEach(((e, t) => {
            void 0 !== e.data && w.current.set(t, e.data)
          })), a.forEach((e => w.current.delete(e)));
          let i = null == n.window || null == n.window.document || "function" != typeof n.window.document.startViewTransition;
          if (r && !i) {
            if (o) {
              A((() => {
                m && (f && f.resolve(), m.skipTransition()), d({
                  isTransitioning: !0,
                  flushSync: !0,
                  currentLocation: r.currentLocation,
                  nextLocation: r.nextLocation
                })
              }));
              let t = n.window.document.startViewTransition((() => {
                A((() => s(e)))
              }));
              return t.finished.finally((() => {
                A((() => {
                  h(void 0), v(void 0), l(void 0), d({
                    isTransitioning: !1
                  })
                }))
              })), void A((() => v(t)))
            }
            m ? (f && f.resolve(), m.skipTransition(), g({
              state: e,
              currentLocation: r.currentLocation,
              nextLocation: r.nextLocation
            })) : (l(e), d({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: r.currentLocation,
              nextLocation: r.nextLocation
            }))
          } else o ? A((() => s(e))) : R((() => s(e)))
        }), [n.window, m, f, w, R]);
        a.useLayoutEffect((() => n.subscribe(S)), [n, S]), a.useEffect((() => {
          c.isTransitioning && !c.flushSync && h(new L)
        }), [c]), a.useEffect((() => {
          if (f && u && n.window) {
            let e = u,
              t = f.promise,
              a = n.window.document.startViewTransition((async () => {
                R((() => s(e))), await t
              }));
            a.finished.finally((() => {
              h(void 0), v(void 0), l(void 0), d({
                isTransitioning: !1
              })
            })), v(a)
          }
        }), [R, u, f, n.window]), a.useEffect((() => {
          f && u && i.location.key === u.location.key && f.resolve()
        }), [f, m, i.location, u]), a.useEffect((() => {
          !c.isTransitioning && p && (l(p.state), d({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: p.currentLocation,
            nextLocation: p.nextLocation
          }), g(void 0))
        }), [c.isTransitioning, p]), a.useEffect((() => {}), []);
        let b = a.useMemo((() => ({
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
          N = n.basename || "/",
          T = a.useMemo((() => ({
            router: n,
            navigator: b,
            static: !1,
            basename: N
          })), [n, b, N]),
          x = a.useMemo((() => ({
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
          })), [n.future.v7_relativeSplatPath]);
        return a.useEffect((() => (0, r.UNSAFE_logV6DeprecationWarnings)(o, n.future)), [o, n.future]), a.createElement(a.Fragment, null, a.createElement(r.UNSAFE_DataRouterContext.Provider, {
          value: T
        }, a.createElement(r.UNSAFE_DataRouterStateContext.Provider, {
          value: i
        }, a.createElement(_.Provider, {
          value: w.current
        }, a.createElement(E.Provider, {
          value: c
        }, a.createElement(r.Router, {
          basename: N,
          location: i.location,
          navigationType: i.historyAction,
          navigator: b,
          future: x
        }, i.initialized || n.future.v7_partialHydration ? a.createElement(F, {
          routes: n.routes,
          future: n.future,
          state: i
        }) : t))))), null)
      }
      const F = a.memo(U);

      function U(e) {
        let {
          routes: t,
          future: n,
          state: a
        } = e;
        return (0, r.UNSAFE_useRoutesImpl)(t, void 0, a, n)
      }

      function k(e) {
        let {
          basename: t,
          children: n,
          future: o,
          window: s
        } = e, u = a.useRef();
        null == u.current && (u.current = (0, i.zR)({
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
          } = o || {},
          h = a.useCallback((e => {
            f && C ? C((() => d(e))) : d(e)
          }), [d, f]);
        return a.useLayoutEffect((() => l.listen(h)), [l, h]), a.useEffect((() => (0, r.UNSAFE_logV6DeprecationWarnings)(o)), [o]), a.createElement(r.Router, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: l,
          future: o
        })
      }

      function D(e) {
        let {
          basename: t,
          children: n,
          future: o,
          window: s
        } = e, u = a.useRef();
        null == u.current && (u.current = (0, i.TM)({
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
          } = o || {},
          h = a.useCallback((e => {
            f && C ? C((() => d(e))) : d(e)
          }), [d, f]);
        return a.useLayoutEffect((() => l.listen(h)), [l, h]), a.useEffect((() => (0, r.UNSAFE_logV6DeprecationWarnings)(o)), [o]), a.createElement(r.Router, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: l,
          future: o
        })
      }

      function P(e) {
        let {
          basename: t,
          children: n,
          future: o,
          history: i
        } = e, [s, u] = a.useState({
          action: i.action,
          location: i.location
        }), {
          v7_startTransition: l
        } = o || {}, c = a.useCallback((e => {
          l && C ? C((() => u(e))) : u(e)
        }), [u, l]);
        return a.useLayoutEffect((() => i.listen(c)), [i, c]), a.useEffect((() => (0, r.UNSAFE_logV6DeprecationWarnings)(o)), [o]), a.createElement(r.Router, {
          basename: t,
          children: n,
          location: s.location,
          navigationType: s.action,
          navigator: i,
          future: o
        })
      }
      const M = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        O = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        V = a.forwardRef((function(e, t) {
          let n, {
              onClick: o,
              relative: l,
              reloadDocument: c,
              replace: d,
              state: f,
              target: h,
              to: m,
              preventScrollReset: v,
              viewTransition: g
            } = e,
            w = u(e, p),
            {
              basename: y
            } = a.useContext(r.UNSAFE_NavigationContext),
            R = !1;
          if ("string" == typeof m && O.test(m) && (n = m, M)) try {
            let e = new URL(window.location.href),
              t = m.startsWith("//") ? new URL(e.protocol + m) : new URL(m),
              n = (0, i.pb)(t.pathname, y);
            t.origin === e.origin && null != n ? m = n + t.search + t.hash : R = !0
          } catch (e) {}
          let S = (0, r.useHref)(m, {
              relative: l
            }),
            b = Y(m, {
              replace: d,
              state: f,
              target: h,
              preventScrollReset: v,
              relative: l,
              viewTransition: g
            });
          return a.createElement("a", s({}, w, {
            href: n || S,
            onClick: R || c ? o : function(e) {
              o && o(e), e.defaultPrevented || b(e)
            },
            ref: t,
            target: h
          }))
        })),
        I = a.forwardRef((function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: o = !1,
            className: l = "",
            end: c = !1,
            style: d,
            to: f,
            viewTransition: h,
            children: m
          } = e, v = u(e, g), p = (0, r.useResolvedPath)(f, {
            relative: v.relative
          }), w = (0, r.useLocation)(), y = a.useContext(r.UNSAFE_DataRouterStateContext), {
            navigator: R,
            basename: S
          } = a.useContext(r.UNSAFE_NavigationContext), b = null != y && re(p) && !0 === h, E = R.encodeLocation ? R.encodeLocation(p).pathname : p.pathname, _ = w.pathname, C = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
          o || (_ = _.toLowerCase(), C = C ? C.toLowerCase() : null, E = E.toLowerCase()), C && S && (C = (0, i.pb)(C, S) || C);
          const N = "/" !== E && E.endsWith("/") ? E.length - 1 : E.length;
          let T, A = _ === E || !c && _.startsWith(E) && "/" === _.charAt(N),
            L = null != C && (C === E || !c && C.startsWith(E) && "/" === C.charAt(E.length)),
            x = {
              isActive: A,
              isPending: L,
              isTransitioning: b
            },
            F = A ? n : void 0;
          T = "function" == typeof l ? l(x) : [l, A ? "active" : null, L ? "pending" : null, b ? "transitioning" : null].filter(Boolean).join(" ");
          let U = "function" == typeof d ? d(x) : d;
          return a.createElement(V, s({}, v, {
            "aria-current": F,
            className: T,
            ref: t,
            style: U,
            to: f,
            viewTransition: h
          }), "function" == typeof m ? m(x) : m)
        })),
        K = a.forwardRef(((e, t) => {
          let {
            fetcherKey: n,
            navigate: o,
            reloadDocument: r,
            replace: i,
            state: c,
            method: d = l,
            action: f,
            onSubmit: h,
            relative: m,
            preventScrollReset: v,
            viewTransition: p
          } = e, g = u(e, w), y = Q(), R = X(f, {
            relative: m
          }), S = "get" === d.toLowerCase() ? "get" : "post";
          return a.createElement("form", s({
            ref: t,
            method: S,
            action: R,
            onSubmit: r ? h : e => {
              if (h && h(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                a = (null == t ? void 0 : t.getAttribute("formmethod")) || d;
              y(t || e.currentTarget, {
                fetcherKey: n,
                method: a,
                navigate: o,
                replace: i,
                state: c,
                relative: m,
                preventScrollReset: v,
                viewTransition: p
              })
            }
          }, g))
        }));

      function H(e) {
        let {
          getKey: t,
          storageKey: n
        } = e;
        return ne({
          getKey: t,
          storageKey: n
        }), null
      }
      var j, B;

      function W(e) {
        let t = a.useContext(r.UNSAFE_DataRouterContext);
        return t || (0, i.Oi)(!1), t
      }

      function z(e) {
        let t = a.useContext(r.UNSAFE_DataRouterStateContext);
        return t || (0, i.Oi)(!1), t
      }

      function Y(e, t) {
        let {
          target: n,
          replace: o,
          state: i,
          preventScrollReset: s,
          relative: u,
          viewTransition: l
        } = void 0 === t ? {} : t, c = (0, r.useNavigate)(), d = (0, r.useLocation)(), f = (0, r.useResolvedPath)(e, {
          relative: u
        });
        return a.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== o ? o : (0, r.createPath)(d) === (0, r.createPath)(f);
            c(e, {
              replace: n,
              state: i,
              preventScrollReset: s,
              relative: u,
              viewTransition: l
            })
          }
        }), [d, c, f, o, i, n, e, s, u, l])
      }

      function J(e) {
        let t = a.useRef(f(e)),
          n = a.useRef(!1),
          o = (0, r.useLocation)(),
          i = a.useMemo((() => function(e, t) {
            let n = f(e);
            return t && t.forEach(((e, a) => {
              n.has(a) || t.getAll(a).forEach((e => {
                n.append(a, e)
              }))
            })), n
          }(o.search, n.current ? null : t.current)), [o.search]),
          s = (0, r.useNavigate)(),
          u = a.useCallback(((e, t) => {
            const a = f("function" == typeof e ? e(i) : e);
            n.current = !0, s("?" + a, t)
          }), [s, i]);
        return [i, u]
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(j || (j = {})),
      function(e) {
        e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(B || (B = {}));
      let q = 0,
        G = () => "__" + String(++q) + "__";

      function Q() {
        let {
          router: e
        } = W(j.UseSubmit), {
          basename: t
        } = a.useContext(r.UNSAFE_NavigationContext), n = (0, r.UNSAFE_useRouteId)();
        return a.useCallback((function(a, o) {
          void 0 === o && (o = {}),
            function() {
              if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
            }();
          let {
            action: r,
            method: s,
            encType: u,
            formData: f,
            body: m
          } = function(e, t) {
            let n, a, o, r, s;
            if (d(u = e) && "form" === u.tagName.toLowerCase()) {
              let s = e.getAttribute("action");
              a = s ? (0, i.pb)(s, t) : null, n = e.getAttribute("method") || l, o = v(e.getAttribute("enctype")) || c, r = new FormData(e)
            } else if (function(e) {
                return d(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return d(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let s = e.form;
              if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              let u = e.getAttribute("formaction") || s.getAttribute("action");
              if (a = u ? (0, i.pb)(u, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || l, o = v(e.getAttribute("formenctype")) || v(s.getAttribute("enctype")) || c, r = new FormData(s, e), ! function() {
                  if (null === h) try {
                    new FormData(document.createElement("form"), 0), h = !1
                  } catch (e) {
                    h = !0
                  }
                  return h
                }()) {
                let {
                  name: t,
                  type: n,
                  value: a
                } = e;
                if ("image" === n) {
                  let e = t ? t + "." : "";
                  r.append(e + "x", "0"), r.append(e + "y", "0")
                } else t && r.append(t, a)
              }
            } else {
              if (d(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              n = l, a = null, o = c, s = e
            }
            var u;
            return r && "text/plain" === o && (s = r, r = void 0), {
              action: a,
              method: n.toLowerCase(),
              encType: o,
              formData: r,
              body: s
            }
          }(a, t);
          if (!1 === o.navigate) {
            let t = o.fetcherKey || G();
            e.fetch(t, n, o.action || r, {
              preventScrollReset: o.preventScrollReset,
              formData: f,
              body: m,
              formMethod: o.method || s,
              formEncType: o.encType || u,
              flushSync: o.flushSync
            })
          } else e.navigate(o.action || r, {
            preventScrollReset: o.preventScrollReset,
            formData: f,
            body: m,
            formMethod: o.method || s,
            formEncType: o.encType || u,
            replace: o.replace,
            state: o.state,
            fromRouteId: n,
            flushSync: o.flushSync,
            viewTransition: o.viewTransition
          })
        }), [e, t, n])
      }

      function X(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: o
        } = a.useContext(r.UNSAFE_NavigationContext), u = a.useContext(r.UNSAFE_RouteContext);
        u || (0, i.Oi)(!1);
        let [l] = u.matches.slice(-1), c = s({}, (0, r.useResolvedPath)(e || ".", {
          relative: n
        })), d = (0, r.useLocation)();
        if (null == e) {
          c.search = d.search;
          let e = new URLSearchParams(c.search),
            t = e.getAll("index");
          if (t.some((e => "" === e))) {
            e.delete("index"), t.filter((e => e)).forEach((t => e.append("index", t)));
            let n = e.toString();
            c.search = n ? "?" + n : ""
          }
        }
        return e && "." !== e || !l.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== o && (c.pathname = "/" === c.pathname ? o : (0, i.HS)([o, c.pathname])), (0, r.createPath)(c)
      }

      function Z(e) {
        var t;
        let {
          key: n
        } = void 0 === e ? {} : e, {
          router: o
        } = W(j.UseFetcher), u = z(B.UseFetcher), l = a.useContext(_), c = a.useContext(r.UNSAFE_RouteContext), d = null == (t = c.matches[c.matches.length - 1]) ? void 0 : t.route.id;
        l || (0, i.Oi)(!1), c || (0, i.Oi)(!1), null == d && (0, i.Oi)(!1);
        let f = T ? T() : "",
          [h, m] = a.useState(n || f);
        n && n !== h ? m(n) : h || m(G()), a.useEffect((() => (o.getFetcher(h), () => {
          o.deleteFetcher(h)
        })), [o, h]);
        let v = a.useCallback(((e, t) => {
            d || (0, i.Oi)(!1), o.fetch(h, d, e, t)
          }), [h, d, o]),
          p = Q(),
          g = a.useCallback(((e, t) => {
            p(e, s({}, t, {
              navigate: !1,
              fetcherKey: h
            }))
          }), [h, p]),
          w = a.useMemo((() => a.forwardRef(((e, t) => a.createElement(K, s({}, e, {
            navigate: !1,
            fetcherKey: h,
            ref: t
          }))))), [h]),
          y = u.fetchers.get(h) || i.HW,
          R = l.get(h);
        return a.useMemo((() => s({
          Form: w,
          submit: g,
          load: v
        }, y, {
          data: R
        })), [w, g, v, y, R])
      }

      function $() {
        let e = z(B.UseFetchers);
        return Array.from(e.fetchers.entries()).map((e => {
          let [t, n] = e;
          return s({}, n, {
            key: t
          })
        }))
      }
      const ee = "react-router-scroll-positions";
      let te = {};

      function ne(e) {
        let {
          getKey: t,
          storageKey: n
        } = void 0 === e ? {} : e, {
          router: o
        } = W(j.UseScrollRestoration), {
          restoreScrollPosition: u,
          preventScrollReset: l
        } = z(B.UseScrollRestoration), {
          basename: c
        } = a.useContext(r.UNSAFE_NavigationContext), d = (0, r.useLocation)(), f = (0, r.useMatches)(), h = (0, r.useNavigation)();
        a.useEffect((() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          })), []),
          function(e) {
            let {
              capture: t
            } = {};
            a.useEffect((() => {
              let n = null != t ? {
                capture: t
              } : void 0;
              return window.addEventListener("pagehide", e, n), () => {
                window.removeEventListener("pagehide", e, n)
              }
            }), [e, t])
          }(a.useCallback((() => {
            if ("idle" === h.state) {
              let e = (t ? t(d, f) : null) || d.key;
              te[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(n || ee, JSON.stringify(te))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }), [n, t, h.state, d, f])), "undefined" != typeof document && (a.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(n || ee);
              e && (te = JSON.parse(e))
            } catch (e) {}
          }), [n]), a.useLayoutEffect((() => {
            let e = t && "/" !== c ? (e, n) => t(s({}, e, {
                pathname: (0, i.pb)(e.pathname, c) || e.pathname
              }), n) : t,
              n = null == o ? void 0 : o.enableScrollRestoration(te, (() => window.scrollY), e);
            return () => n && n()
          }), [o, c, t]), a.useLayoutEffect((() => {
            if (!1 !== u)
              if ("number" != typeof u) {
                if (d.hash) {
                  let e = document.getElementById(decodeURIComponent(d.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== l && window.scrollTo(0, 0)
              } else window.scrollTo(0, u)
          }), [d, u, l]))
      }

      function ae(e, t) {
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

      function oe(e) {
        let {
          when: t,
          message: n
        } = e, o = (0, r.useBlocker)(t);
        a.useEffect((() => {
          "blocked" === o.state && (window.confirm(n) ? setTimeout(o.proceed, 0) : o.reset())
        }), [o, n]), a.useEffect((() => {
          "blocked" !== o.state || t || o.reset()
        }), [o, t])
      }

      function re(e, t) {
        void 0 === t && (t = {});
        let n = a.useContext(E);
        null == n && (0, i.Oi)(!1);
        let {
          basename: o
        } = W(j.useViewTransitionState), s = (0, r.useResolvedPath)(e, {
          relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let u = (0, i.pb)(n.currentLocation.pathname, o) || n.currentLocation.pathname,
          l = (0, i.pb)(n.nextLocation.pathname, o) || n.nextLocation.pathname;
        return null != (0, i.B6)(s.pathname, l) || null != (0, i.B6)(s.pathname, u)
      }
    }
  }
]);