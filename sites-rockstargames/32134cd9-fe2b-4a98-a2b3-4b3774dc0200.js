try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "32134cd9-fe2b-4a98-a2b3-4b3774dc0200", e._sentryDebugIdIdentifier = "sentry-dbid-32134cd9-fe2b-4a98-a2b3-4b3774dc0200")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5248], {
    25248(e, t, n) {
      var a, o;
      n.r(t), n.d(t, {
        AbortedDeferredError: () => s.AbortedDeferredError,
        Await: () => s.Await,
        BrowserRouter: () => P,
        Form: () => j,
        HashRouter: () => M,
        Link: () => K,
        MemoryRouter: () => s.MemoryRouter,
        NavLink: () => H,
        Navigate: () => s.Navigate,
        NavigationType: () => s.NavigationType,
        Outlet: () => s.Outlet,
        Route: () => s.Route,
        Router: () => s.Router,
        RouterProvider: () => U,
        Routes: () => s.Routes,
        ScrollRestoration: () => B,
        UNSAFE_DataRouterContext: () => s.UNSAFE_DataRouterContext,
        UNSAFE_DataRouterStateContext: () => s.UNSAFE_DataRouterStateContext,
        UNSAFE_ErrorResponseImpl: () => u.VV,
        UNSAFE_FetchersContext: () => N,
        UNSAFE_LocationContext: () => s.UNSAFE_LocationContext,
        UNSAFE_NavigationContext: () => s.UNSAFE_NavigationContext,
        UNSAFE_RouteContext: () => s.UNSAFE_RouteContext,
        UNSAFE_ViewTransitionContext: () => C,
        UNSAFE_useRouteId: () => s.UNSAFE_useRouteId,
        UNSAFE_useScrollRestoration: () => oe,
        createBrowserRouter: () => R,
        createHashRouter: () => S,
        createMemoryRouter: () => s.createMemoryRouter,
        createPath: () => s.createPath,
        createRoutesFromChildren: () => s.createRoutesFromChildren,
        createRoutesFromElements: () => s.createRoutesFromElements,
        createSearchParams: () => m,
        defer: () => s.defer,
        generatePath: () => s.generatePath,
        isRouteErrorResponse: () => s.isRouteErrorResponse,
        json: () => s.json,
        matchPath: () => s.matchPath,
        matchRoutes: () => s.matchRoutes,
        parsePath: () => s.parsePath,
        redirect: () => s.redirect,
        redirectDocument: () => s.redirectDocument,
        renderMatches: () => s.renderMatches,
        replace: () => s.replace,
        resolvePath: () => s.resolvePath,
        unstable_HistoryRouter: () => O,
        unstable_usePrompt: () => ie,
        useActionData: () => s.useActionData,
        useAsyncError: () => s.useAsyncError,
        useAsyncValue: () => s.useAsyncValue,
        useBeforeUnload: () => re,
        useBlocker: () => s.useBlocker,
        useFetcher: () => ee,
        useFetchers: () => te,
        useFormAction: () => $,
        useHref: () => s.useHref,
        useInRouterContext: () => s.useInRouterContext,
        useLinkClickHandler: () => q,
        useLoaderData: () => s.useLoaderData,
        useLocation: () => s.useLocation,
        useMatch: () => s.useMatch,
        useMatches: () => s.useMatches,
        useNavigate: () => s.useNavigate,
        useNavigation: () => s.useNavigation,
        useNavigationType: () => s.useNavigationType,
        useOutlet: () => s.useOutlet,
        useOutletContext: () => s.useOutletContext,
        useParams: () => s.useParams,
        useResolvedPath: () => s.useResolvedPath,
        useRevalidator: () => s.useRevalidator,
        useRouteError: () => s.useRouteError,
        useRouteLoaderData: () => s.useRouteLoaderData,
        useRoutes: () => s.useRoutes,
        useSearchParams: () => G,
        useSubmit: () => Z,
        useViewTransitionState: () => se
      });
      var r = n(93082),
        i = n(84017),
        s = n(98415),
        u = n(8104);

      function l() {
        return l = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
          }
          return e
        }, l.apply(this, arguments)
      }

      function c(e, t) {
        if (null == e) return {};
        var n, a, o = {},
          r = Object.keys(e);
        for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      const d = "get",
        f = "application/x-www-form-urlencoded";

      function h(e) {
        return null != e && "string" == typeof e.tagName
      }

      function m(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
          let a = e[n];
          return t.concat(Array.isArray(a) ? a.map(e => [n, e]) : [
            [n, a]
          ])
        }, []))
      }
      let v = null;
      const p = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function g(e) {
        return null == e || p.has(e) ? e : null
      }
      const w = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
        y = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
        b = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
      try {
        window.__reactRouterVersion = "6"
      } catch (e) {}

      function R(e, t) {
        return (0, u.aE)({
          basename: null == t ? void 0 : t.basename,
          future: l({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, u.zR)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
          routes: e,
          mapRouteProperties: s.UNSAFE_mapRouteProperties,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function S(e, t) {
        return (0, u.aE)({
          basename: null == t ? void 0 : t.basename,
          future: l({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, u.TM)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
          routes: e,
          mapRouteProperties: s.UNSAFE_mapRouteProperties,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function E() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = l({}, t, {
          errors: _(t.errors)
        })), t
      }

      function _(e) {
        if (!e) return null;
        let t = Object.entries(e),
          n = {};
        for (let [e, a] of t)
          if (a && "RouteErrorResponse" === a.__type) n[e] = new u.VV(a.status, a.statusText, a.data, !0 === a.internal);
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
      const C = r.createContext({
          isTransitioning: !1
        }),
        N = r.createContext(new Map),
        T = (a || (a = n.t(r, 2))).startTransition,
        A = (o || (o = n.t(i, 2))).flushSync,
        L = (a || (a = n.t(r, 2))).useId;

      function x(e) {
        A ? A(e) : e()
      }
      class F {
        constructor() {
          this.status = "pending", this.promise = new Promise((e, t) => {
            this.resolve = t => {
              "pending" === this.status && (this.status = "resolved", e(t))
            }, this.reject = e => {
              "pending" === this.status && (this.status = "rejected", t(e))
            }
          })
        }
      }

      function U(e) {
        let {
          fallbackElement: t,
          router: n,
          future: a
        } = e, [o, i] = r.useState(n.state), [u, l] = r.useState(), [c, d] = r.useState({
          isTransitioning: !1
        }), [f, h] = r.useState(), [m, v] = r.useState(), [p, g] = r.useState(), w = r.useRef(new Map), {
          v7_startTransition: y
        } = a || {}, b = r.useCallback(e => {
          y ? function(e) {
            T ? T(e) : e()
          }(e) : e()
        }, [y]), R = r.useCallback((e, t) => {
          let {
            deletedFetchers: a,
            flushSync: o,
            viewTransitionOpts: r
          } = t;
          e.fetchers.forEach((e, t) => {
            void 0 !== e.data && w.current.set(t, e.data)
          }), a.forEach(e => w.current.delete(e));
          let s = null == n.window || null == n.window.document || "function" != typeof n.window.document.startViewTransition;
          if (r && !s) {
            if (o) {
              x(() => {
                m && (f && f.resolve(), m.skipTransition()), d({
                  isTransitioning: !0,
                  flushSync: !0,
                  currentLocation: r.currentLocation,
                  nextLocation: r.nextLocation
                })
              });
              let t = n.window.document.startViewTransition(() => {
                x(() => i(e))
              });
              return t.finished.finally(() => {
                x(() => {
                  h(void 0), v(void 0), l(void 0), d({
                    isTransitioning: !1
                  })
                })
              }), void x(() => v(t))
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
          } else o ? x(() => i(e)) : b(() => i(e))
        }, [n.window, m, f, w, b]);
        r.useLayoutEffect(() => n.subscribe(R), [n, R]), r.useEffect(() => {
          c.isTransitioning && !c.flushSync && h(new F)
        }, [c]), r.useEffect(() => {
          if (f && u && n.window) {
            let e = u,
              t = f.promise,
              a = n.window.document.startViewTransition(async () => {
                b(() => i(e)), await t
              });
            a.finished.finally(() => {
              h(void 0), v(void 0), l(void 0), d({
                isTransitioning: !1
              })
            }), v(a)
          }
        }, [b, u, f, n.window]), r.useEffect(() => {
          f && u && o.location.key === u.location.key && f.resolve()
        }, [f, m, o.location, u]), r.useEffect(() => {
          !c.isTransitioning && p && (l(p.state), d({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: p.currentLocation,
            nextLocation: p.nextLocation
          }), g(void 0))
        }, [c.isTransitioning, p]), r.useEffect(() => {}, []);
        let S = r.useMemo(() => ({
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
          }), [n]),
          E = n.basename || "/",
          _ = r.useMemo(() => ({
            router: n,
            navigator: S,
            static: !1,
            basename: E
          }), [n, S, E]),
          A = r.useMemo(() => ({
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
          }), [n.future.v7_relativeSplatPath]);
        return r.useEffect(() => (0, s.UNSAFE_logV6DeprecationWarnings)(a, n.future), [a, n.future]), r.createElement(r.Fragment, null, r.createElement(s.UNSAFE_DataRouterContext.Provider, {
          value: _
        }, r.createElement(s.UNSAFE_DataRouterStateContext.Provider, {
          value: o
        }, r.createElement(N.Provider, {
          value: w.current
        }, r.createElement(C.Provider, {
          value: c
        }, r.createElement(s.Router, {
          basename: E,
          location: o.location,
          navigationType: o.historyAction,
          navigator: S,
          future: A
        }, o.initialized || n.future.v7_partialHydration ? r.createElement(k, {
          routes: n.routes,
          future: n.future,
          state: o
        }) : t))))), null)
      }
      const k = r.memo(D);

      function D(e) {
        let {
          routes: t,
          future: n,
          state: a
        } = e;
        return (0, s.UNSAFE_useRoutesImpl)(t, void 0, a, n)
      }

      function P(e) {
        let {
          basename: t,
          children: n,
          future: a,
          window: o
        } = e, i = r.useRef();
        null == i.current && (i.current = (0, u.zR)({
          window: o,
          v5Compat: !0
        }));
        let l = i.current,
          [c, d] = r.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: f
          } = a || {},
          h = r.useCallback(e => {
            f && T ? T(() => d(e)) : d(e)
          }, [d, f]);
        return r.useLayoutEffect(() => l.listen(h), [l, h]), r.useEffect(() => (0, s.UNSAFE_logV6DeprecationWarnings)(a), [a]), r.createElement(s.Router, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: l,
          future: a
        })
      }

      function M(e) {
        let {
          basename: t,
          children: n,
          future: a,
          window: o
        } = e, i = r.useRef();
        null == i.current && (i.current = (0, u.TM)({
          window: o,
          v5Compat: !0
        }));
        let l = i.current,
          [c, d] = r.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: f
          } = a || {},
          h = r.useCallback(e => {
            f && T ? T(() => d(e)) : d(e)
          }, [d, f]);
        return r.useLayoutEffect(() => l.listen(h), [l, h]), r.useEffect(() => (0, s.UNSAFE_logV6DeprecationWarnings)(a), [a]), r.createElement(s.Router, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: l,
          future: a
        })
      }

      function O(e) {
        let {
          basename: t,
          children: n,
          future: a,
          history: o
        } = e, [i, u] = r.useState({
          action: o.action,
          location: o.location
        }), {
          v7_startTransition: l
        } = a || {}, c = r.useCallback(e => {
          l && T ? T(() => u(e)) : u(e)
        }, [u, l]);
        return r.useLayoutEffect(() => o.listen(c), [o, c]), r.useEffect(() => (0, s.UNSAFE_logV6DeprecationWarnings)(a), [a]), r.createElement(s.Router, {
          basename: t,
          children: n,
          location: i.location,
          navigationType: i.action,
          navigator: o,
          future: a
        })
      }
      const V = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        I = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        K = r.forwardRef(function(e, t) {
          let n, {
              onClick: a,
              relative: o,
              reloadDocument: i,
              replace: d,
              state: f,
              target: h,
              to: m,
              preventScrollReset: v,
              viewTransition: p
            } = e,
            g = c(e, w),
            {
              basename: y
            } = r.useContext(s.UNSAFE_NavigationContext),
            b = !1;
          if ("string" == typeof m && I.test(m) && (n = m, V)) try {
            let e = new URL(window.location.href),
              t = m.startsWith("//") ? new URL(e.protocol + m) : new URL(m),
              n = (0, u.pb)(t.pathname, y);
            t.origin === e.origin && null != n ? m = n + t.search + t.hash : b = !0
          } catch (e) {}
          let R = (0, s.useHref)(m, {
              relative: o
            }),
            S = q(m, {
              replace: d,
              state: f,
              target: h,
              preventScrollReset: v,
              relative: o,
              viewTransition: p
            });
          return r.createElement("a", l({}, g, {
            href: n || R,
            onClick: b || i ? a : function(e) {
              a && a(e), e.defaultPrevented || S(e)
            },
            ref: t,
            target: h
          }))
        }),
        H = r.forwardRef(function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: a = !1,
            className: o = "",
            end: i = !1,
            style: d,
            to: f,
            viewTransition: h,
            children: m
          } = e, v = c(e, y), p = (0, s.useResolvedPath)(f, {
            relative: v.relative
          }), g = (0, s.useLocation)(), w = r.useContext(s.UNSAFE_DataRouterStateContext), {
            navigator: b,
            basename: R
          } = r.useContext(s.UNSAFE_NavigationContext), S = null != w && se(p) && !0 === h, E = b.encodeLocation ? b.encodeLocation(p).pathname : p.pathname, _ = g.pathname, C = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
          a || (_ = _.toLowerCase(), C = C ? C.toLowerCase() : null, E = E.toLowerCase()), C && R && (C = (0, u.pb)(C, R) || C);
          const N = "/" !== E && E.endsWith("/") ? E.length - 1 : E.length;
          let T, A = _ === E || !i && _.startsWith(E) && "/" === _.charAt(N),
            L = null != C && (C === E || !i && C.startsWith(E) && "/" === C.charAt(E.length)),
            x = {
              isActive: A,
              isPending: L,
              isTransitioning: S
            },
            F = A ? n : void 0;
          T = "function" == typeof o ? o(x) : [o, A ? "active" : null, L ? "pending" : null, S ? "transitioning" : null].filter(Boolean).join(" ");
          let U = "function" == typeof d ? d(x) : d;
          return r.createElement(K, l({}, v, {
            "aria-current": F,
            className: T,
            ref: t,
            style: U,
            to: f,
            viewTransition: h
          }), "function" == typeof m ? m(x) : m)
        }),
        j = r.forwardRef((e, t) => {
          let {
            fetcherKey: n,
            navigate: a,
            reloadDocument: o,
            replace: i,
            state: s,
            method: u = d,
            action: f,
            onSubmit: h,
            relative: m,
            preventScrollReset: v,
            viewTransition: p
          } = e, g = c(e, b), w = Z(), y = $(f, {
            relative: m
          }), R = "get" === u.toLowerCase() ? "get" : "post";
          return r.createElement("form", l({
            ref: t,
            method: R,
            action: y,
            onSubmit: o ? h : e => {
              if (h && h(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                o = (null == t ? void 0 : t.getAttribute("formmethod")) || u;
              w(t || e.currentTarget, {
                fetcherKey: n,
                method: o,
                navigate: a,
                replace: i,
                state: s,
                relative: m,
                preventScrollReset: v,
                viewTransition: p
              })
            }
          }, g))
        });

      function B(e) {
        let {
          getKey: t,
          storageKey: n
        } = e;
        return oe({
          getKey: t,
          storageKey: n
        }), null
      }
      var W, z;

      function Y(e) {
        let t = r.useContext(s.UNSAFE_DataRouterContext);
        return t || (0, u.Oi)(!1), t
      }

      function J(e) {
        let t = r.useContext(s.UNSAFE_DataRouterStateContext);
        return t || (0, u.Oi)(!1), t
      }

      function q(e, t) {
        let {
          target: n,
          replace: a,
          state: o,
          preventScrollReset: i,
          relative: u,
          viewTransition: l
        } = void 0 === t ? {} : t, c = (0, s.useNavigate)(), d = (0, s.useLocation)(), f = (0, s.useResolvedPath)(e, {
          relative: u
        });
        return r.useCallback(t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== a ? a : (0, s.createPath)(d) === (0, s.createPath)(f);
            c(e, {
              replace: n,
              state: o,
              preventScrollReset: i,
              relative: u,
              viewTransition: l
            })
          }
        }, [d, c, f, a, o, n, e, i, u, l])
      }

      function G(e) {
        let t = r.useRef(m(e)),
          n = r.useRef(!1),
          a = (0, s.useLocation)(),
          o = r.useMemo(() => function(e, t) {
            let n = m(e);
            return t && t.forEach((e, a) => {
              n.has(a) || t.getAll(a).forEach(e => {
                n.append(a, e)
              })
            }), n
          }(a.search, n.current ? null : t.current), [a.search]),
          i = (0, s.useNavigate)(),
          u = r.useCallback((e, t) => {
            const a = m("function" == typeof e ? e(o) : e);
            n.current = !0, i("?" + a, t)
          }, [i, o]);
        return [o, u]
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(W || (W = {})),
      function(e) {
        e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(z || (z = {}));
      let Q = 0,
        X = () => "__" + String(++Q) + "__";

      function Z() {
        let {
          router: e
        } = Y(W.UseSubmit), {
          basename: t
        } = r.useContext(s.UNSAFE_NavigationContext), n = (0, s.UNSAFE_useRouteId)();
        return r.useCallback(function(a, o) {
          void 0 === o && (o = {}),
            function() {
              if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
            }();
          let {
            action: r,
            method: i,
            encType: s,
            formData: l,
            body: c
          } = function(e, t) {
            let n, a, o, r, i;
            if (h(s = e) && "form" === s.tagName.toLowerCase()) {
              let i = e.getAttribute("action");
              a = i ? (0, u.pb)(i, t) : null, n = e.getAttribute("method") || d, o = g(e.getAttribute("enctype")) || f, r = new FormData(e)
            } else if (function(e) {
                return h(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return h(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let i = e.form;
              if (null == i) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              let s = e.getAttribute("formaction") || i.getAttribute("action");
              if (a = s ? (0, u.pb)(s, t) : null, n = e.getAttribute("formmethod") || i.getAttribute("method") || d, o = g(e.getAttribute("formenctype")) || g(i.getAttribute("enctype")) || f, r = new FormData(i, e), ! function() {
                  if (null === v) try {
                    new FormData(document.createElement("form"), 0), v = !1
                  } catch (e) {
                    v = !0
                  }
                  return v
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
              if (h(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              n = d, a = null, o = f, i = e
            }
            var s;
            return r && "text/plain" === o && (i = r, r = void 0), {
              action: a,
              method: n.toLowerCase(),
              encType: o,
              formData: r,
              body: i
            }
          }(a, t);
          if (!1 === o.navigate) {
            let t = o.fetcherKey || X();
            e.fetch(t, n, o.action || r, {
              preventScrollReset: o.preventScrollReset,
              formData: l,
              body: c,
              formMethod: o.method || i,
              formEncType: o.encType || s,
              flushSync: o.flushSync
            })
          } else e.navigate(o.action || r, {
            preventScrollReset: o.preventScrollReset,
            formData: l,
            body: c,
            formMethod: o.method || i,
            formEncType: o.encType || s,
            replace: o.replace,
            state: o.state,
            fromRouteId: n,
            flushSync: o.flushSync,
            viewTransition: o.viewTransition
          })
        }, [e, t, n])
      }

      function $(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: a
        } = r.useContext(s.UNSAFE_NavigationContext), o = r.useContext(s.UNSAFE_RouteContext);
        o || (0, u.Oi)(!1);
        let [i] = o.matches.slice(-1), c = l({}, (0, s.useResolvedPath)(e || ".", {
          relative: n
        })), d = (0, s.useLocation)();
        if (null == e) {
          c.search = d.search;
          let e = new URLSearchParams(c.search),
            t = e.getAll("index");
          if (t.some(e => "" === e)) {
            e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
            let n = e.toString();
            c.search = n ? "?" + n : ""
          }
        }
        return e && "." !== e || !i.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== a && (c.pathname = "/" === c.pathname ? a : (0, u.HS)([a, c.pathname])), (0, s.createPath)(c)
      }

      function ee(e) {
        var t;
        let {
          key: n
        } = void 0 === e ? {} : e, {
          router: a
        } = Y(W.UseFetcher), o = J(z.UseFetcher), i = r.useContext(N), c = r.useContext(s.UNSAFE_RouteContext), d = null == (t = c.matches[c.matches.length - 1]) ? void 0 : t.route.id;
        i || (0, u.Oi)(!1), c || (0, u.Oi)(!1), null == d && (0, u.Oi)(!1);
        let f = L ? L() : "",
          [h, m] = r.useState(n || f);
        n && n !== h ? m(n) : h || m(X()), r.useEffect(() => (a.getFetcher(h), () => {
          a.deleteFetcher(h)
        }), [a, h]);
        let v = r.useCallback((e, t) => {
            d || (0, u.Oi)(!1), a.fetch(h, d, e, t)
          }, [h, d, a]),
          p = Z(),
          g = r.useCallback((e, t) => {
            p(e, l({}, t, {
              navigate: !1,
              fetcherKey: h
            }))
          }, [h, p]),
          w = r.useMemo(() => r.forwardRef((e, t) => r.createElement(j, l({}, e, {
            navigate: !1,
            fetcherKey: h,
            ref: t
          }))), [h]),
          y = o.fetchers.get(h) || u.HW,
          b = i.get(h);
        return r.useMemo(() => l({
          Form: w,
          submit: g,
          load: v
        }, y, {
          data: b
        }), [w, g, v, y, b])
      }

      function te() {
        let e = J(z.UseFetchers);
        return Array.from(e.fetchers.entries()).map(e => {
          let [t, n] = e;
          return l({}, n, {
            key: t
          })
        })
      }
      const ne = "react-router-scroll-positions";
      let ae = {};

      function oe(e) {
        let {
          getKey: t,
          storageKey: n
        } = void 0 === e ? {} : e, {
          router: a
        } = Y(W.UseScrollRestoration), {
          restoreScrollPosition: o,
          preventScrollReset: i
        } = J(z.UseScrollRestoration), {
          basename: c
        } = r.useContext(s.UNSAFE_NavigationContext), d = (0, s.useLocation)(), f = (0, s.useMatches)(), h = (0, s.useNavigation)();
        r.useEffect(() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          }), []),
          function(e) {
            let {
              capture: t
            } = {};
            r.useEffect(() => {
              let n = null != t ? {
                capture: t
              } : void 0;
              return window.addEventListener("pagehide", e, n), () => {
                window.removeEventListener("pagehide", e, n)
              }
            }, [e, t])
          }(r.useCallback(() => {
            if ("idle" === h.state) {
              let e = (t ? t(d, f) : null) || d.key;
              ae[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(n || ne, JSON.stringify(ae))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }, [n, t, h.state, d, f])), "undefined" != typeof document && (r.useLayoutEffect(() => {
            try {
              let e = sessionStorage.getItem(n || ne);
              e && (ae = JSON.parse(e))
            } catch (e) {}
          }, [n]), r.useLayoutEffect(() => {
            let e = t && "/" !== c ? (e, n) => t(l({}, e, {
                pathname: (0, u.pb)(e.pathname, c) || e.pathname
              }), n) : t,
              n = null == a ? void 0 : a.enableScrollRestoration(ae, () => window.scrollY, e);
            return () => n && n()
          }, [a, c, t]), r.useLayoutEffect(() => {
            if (!1 !== o)
              if ("number" != typeof o) {
                if (d.hash) {
                  let e = document.getElementById(decodeURIComponent(d.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== i && window.scrollTo(0, 0)
              } else window.scrollTo(0, o)
          }, [d, o, i]))
      }

      function re(e, t) {
        let {
          capture: n
        } = t || {};
        r.useEffect(() => {
          let t = null != n ? {
            capture: n
          } : void 0;
          return window.addEventListener("beforeunload", e, t), () => {
            window.removeEventListener("beforeunload", e, t)
          }
        }, [e, n])
      }

      function ie(e) {
        let {
          when: t,
          message: n
        } = e, a = (0, s.useBlocker)(t);
        r.useEffect(() => {
          "blocked" === a.state && (window.confirm(n) ? setTimeout(a.proceed, 0) : a.reset())
        }, [a, n]), r.useEffect(() => {
          "blocked" !== a.state || t || a.reset()
        }, [a, t])
      }

      function se(e, t) {
        void 0 === t && (t = {});
        let n = r.useContext(C);
        null == n && (0, u.Oi)(!1);
        let {
          basename: a
        } = Y(W.useViewTransitionState), o = (0, s.useResolvedPath)(e, {
          relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let i = (0, u.pb)(n.currentLocation.pathname, a) || n.currentLocation.pathname,
          l = (0, u.pb)(n.nextLocation.pathname, a) || n.nextLocation.pathname;
        return null != (0, u.B6)(o.pathname, l) || null != (0, u.B6)(o.pathname, i)
      }
    }
  }
]);