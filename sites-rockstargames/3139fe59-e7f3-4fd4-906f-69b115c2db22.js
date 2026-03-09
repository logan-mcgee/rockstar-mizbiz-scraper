try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3139fe59-e7f3-4fd4-906f-69b115c2db22", e._sentryDebugIdIdentifier = "sentry-dbid-3139fe59-e7f3-4fd4-906f-69b115c2db22")
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
  [6527], {
    46527: (e, t, n) => {
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
        createSearchParams: () => d,
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
        unstable_usePrompt: () => ae,
        useActionData: () => r.useActionData,
        useAsyncError: () => r.useAsyncError,
        useAsyncValue: () => r.useAsyncValue,
        useBeforeUnload: () => oe,
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
      var o = n(62229),
        a = n(18429),
        r = n(33213),
        i = n(17335);

      function s() {
        return s = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
        }, s.apply(this, arguments)
      }

      function u(e, t) {
        if (null == e) return {};
        var n, o, a = {},
          r = Object.keys(e);
        for (o = 0; o < r.length; o++) n = r[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }
      const l = "get",
        c = "application/x-www-form-urlencoded";

      function f(e) {
        return null != e && "string" == typeof e.tagName
      }

      function d(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
          let o = e[n];
          return t.concat(Array.isArray(o) ? o.map(e => [n, e]) : [
            [n, o]
          ])
        }, []))
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
        for (let [e, o] of t)
          if (o && "RouteErrorResponse" === o.__type) n[e] = new i.VV(o.status, o.statusText, o.data, !0 === o.internal);
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
      const E = o.createContext({
          isTransitioning: !1
        }),
        _ = o.createContext(new Map),
        C = o.startTransition,
        N = a.flushSync,
        T = o.useId;

      function A(e) {
        N ? N(e) : e()
      }
      class L {
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

      function x(e) {
        let {
          fallbackElement: t,
          router: n,
          future: a
        } = e, [i, s] = o.useState(n.state), [u, l] = o.useState(), [c, f] = o.useState({
          isTransitioning: !1
        }), [d, h] = o.useState(), [m, v] = o.useState(), [p, g] = o.useState(), w = o.useRef(new Map), {
          v7_startTransition: y
        } = a || {}, R = o.useCallback(e => {
          y ? function(e) {
            C ? C(e) : e()
          }(e) : e()
        }, [y]), S = o.useCallback((e, t) => {
          let {
            deletedFetchers: o,
            flushSync: a,
            viewTransitionOpts: r
          } = t;
          e.fetchers.forEach((e, t) => {
            void 0 !== e.data && w.current.set(t, e.data)
          }), o.forEach(e => w.current.delete(e));
          let i = null == n.window || null == n.window.document || "function" != typeof n.window.document.startViewTransition;
          if (r && !i) {
            if (a) {
              A(() => {
                m && (d && d.resolve(), m.skipTransition()), f({
                  isTransitioning: !0,
                  flushSync: !0,
                  currentLocation: r.currentLocation,
                  nextLocation: r.nextLocation
                })
              });
              let t = n.window.document.startViewTransition(() => {
                A(() => s(e))
              });
              return t.finished.finally(() => {
                A(() => {
                  h(void 0), v(void 0), l(void 0), f({
                    isTransitioning: !1
                  })
                })
              }), void A(() => v(t))
            }
            m ? (d && d.resolve(), m.skipTransition(), g({
              state: e,
              currentLocation: r.currentLocation,
              nextLocation: r.nextLocation
            })) : (l(e), f({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: r.currentLocation,
              nextLocation: r.nextLocation
            }))
          } else a ? A(() => s(e)) : R(() => s(e))
        }, [n.window, m, d, w, R]);
        o.useLayoutEffect(() => n.subscribe(S), [n, S]), o.useEffect(() => {
          c.isTransitioning && !c.flushSync && h(new L)
        }, [c]), o.useEffect(() => {
          if (d && u && n.window) {
            let e = u,
              t = d.promise,
              o = n.window.document.startViewTransition(async () => {
                R(() => s(e)), await t
              });
            o.finished.finally(() => {
              h(void 0), v(void 0), l(void 0), f({
                isTransitioning: !1
              })
            }), v(o)
          }
        }, [R, u, d, n.window]), o.useEffect(() => {
          d && u && i.location.key === u.location.key && d.resolve()
        }, [d, m, i.location, u]), o.useEffect(() => {
          !c.isTransitioning && p && (l(p.state), f({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: p.currentLocation,
            nextLocation: p.nextLocation
          }), g(void 0))
        }, [c.isTransitioning, p]), o.useEffect(() => {}, []);
        let b = o.useMemo(() => ({
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
          }), [n]),
          N = n.basename || "/",
          T = o.useMemo(() => ({
            router: n,
            navigator: b,
            static: !1,
            basename: N
          }), [n, b, N]),
          x = o.useMemo(() => ({
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
          }), [n.future.v7_relativeSplatPath]);
        return o.useEffect(() => (0, r.UNSAFE_logV6DeprecationWarnings)(a, n.future), [a, n.future]), o.createElement(o.Fragment, null, o.createElement(r.UNSAFE_DataRouterContext.Provider, {
          value: T
        }, o.createElement(r.UNSAFE_DataRouterStateContext.Provider, {
          value: i
        }, o.createElement(_.Provider, {
          value: w.current
        }, o.createElement(E.Provider, {
          value: c
        }, o.createElement(r.Router, {
          basename: N,
          location: i.location,
          navigationType: i.historyAction,
          navigator: b,
          future: x
        }, i.initialized || n.future.v7_partialHydration ? o.createElement(F, {
          routes: n.routes,
          future: n.future,
          state: i
        }) : t))))), null)
      }
      const F = o.memo(U);

      function U(e) {
        let {
          routes: t,
          future: n,
          state: o
        } = e;
        return (0, r.UNSAFE_useRoutesImpl)(t, void 0, o, n)
      }

      function k(e) {
        let {
          basename: t,
          children: n,
          future: a,
          window: s
        } = e, u = o.useRef();
        null == u.current && (u.current = (0, i.zR)({
          window: s,
          v5Compat: !0
        }));
        let l = u.current,
          [c, f] = o.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: d
          } = a || {},
          h = o.useCallback(e => {
            d && C ? C(() => f(e)) : f(e)
          }, [f, d]);
        return o.useLayoutEffect(() => l.listen(h), [l, h]), o.useEffect(() => (0, r.UNSAFE_logV6DeprecationWarnings)(a), [a]), o.createElement(r.Router, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: l,
          future: a
        })
      }

      function D(e) {
        let {
          basename: t,
          children: n,
          future: a,
          window: s
        } = e, u = o.useRef();
        null == u.current && (u.current = (0, i.TM)({
          window: s,
          v5Compat: !0
        }));
        let l = u.current,
          [c, f] = o.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: d
          } = a || {},
          h = o.useCallback(e => {
            d && C ? C(() => f(e)) : f(e)
          }, [f, d]);
        return o.useLayoutEffect(() => l.listen(h), [l, h]), o.useEffect(() => (0, r.UNSAFE_logV6DeprecationWarnings)(a), [a]), o.createElement(r.Router, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: l,
          future: a
        })
      }

      function P(e) {
        let {
          basename: t,
          children: n,
          future: a,
          history: i
        } = e, [s, u] = o.useState({
          action: i.action,
          location: i.location
        }), {
          v7_startTransition: l
        } = a || {}, c = o.useCallback(e => {
          l && C ? C(() => u(e)) : u(e)
        }, [u, l]);
        return o.useLayoutEffect(() => i.listen(c), [i, c]), o.useEffect(() => (0, r.UNSAFE_logV6DeprecationWarnings)(a), [a]), o.createElement(r.Router, {
          basename: t,
          children: n,
          location: s.location,
          navigationType: s.action,
          navigator: i,
          future: a
        })
      }
      const M = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        O = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        V = o.forwardRef(function(e, t) {
          let n, {
              onClick: a,
              relative: l,
              reloadDocument: c,
              replace: f,
              state: d,
              target: h,
              to: m,
              preventScrollReset: v,
              viewTransition: g
            } = e,
            w = u(e, p),
            {
              basename: y
            } = o.useContext(r.UNSAFE_NavigationContext),
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
              replace: f,
              state: d,
              target: h,
              preventScrollReset: v,
              relative: l,
              viewTransition: g
            });
          return o.createElement("a", s({}, w, {
            href: n || S,
            onClick: R || c ? a : function(e) {
              a && a(e), e.defaultPrevented || b(e)
            },
            ref: t,
            target: h
          }))
        }),
        I = o.forwardRef(function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: a = !1,
            className: l = "",
            end: c = !1,
            style: f,
            to: d,
            viewTransition: h,
            children: m
          } = e, v = u(e, g), p = (0, r.useResolvedPath)(d, {
            relative: v.relative
          }), w = (0, r.useLocation)(), y = o.useContext(r.UNSAFE_DataRouterStateContext), {
            navigator: R,
            basename: S
          } = o.useContext(r.UNSAFE_NavigationContext), b = null != y && re(p) && !0 === h, E = R.encodeLocation ? R.encodeLocation(p).pathname : p.pathname, _ = w.pathname, C = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
          a || (_ = _.toLowerCase(), C = C ? C.toLowerCase() : null, E = E.toLowerCase()), C && S && (C = (0, i.pb)(C, S) || C);
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
          let U = "function" == typeof f ? f(x) : f;
          return o.createElement(V, s({}, v, {
            "aria-current": F,
            className: T,
            ref: t,
            style: U,
            to: d,
            viewTransition: h
          }), "function" == typeof m ? m(x) : m)
        }),
        K = o.forwardRef((e, t) => {
          let {
            fetcherKey: n,
            navigate: a,
            reloadDocument: r,
            replace: i,
            state: c,
            method: f = l,
            action: d,
            onSubmit: h,
            relative: m,
            preventScrollReset: v,
            viewTransition: p
          } = e, g = u(e, w), y = Q(), R = X(d, {
            relative: m
          }), S = "get" === f.toLowerCase() ? "get" : "post";
          return o.createElement("form", s({
            ref: t,
            method: S,
            action: R,
            onSubmit: r ? h : e => {
              if (h && h(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                o = (null == t ? void 0 : t.getAttribute("formmethod")) || f;
              y(t || e.currentTarget, {
                fetcherKey: n,
                method: o,
                navigate: a,
                replace: i,
                state: c,
                relative: m,
                preventScrollReset: v,
                viewTransition: p
              })
            }
          }, g))
        });

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
        let t = o.useContext(r.UNSAFE_DataRouterContext);
        return t || (0, i.Oi)(!1), t
      }

      function z(e) {
        let t = o.useContext(r.UNSAFE_DataRouterStateContext);
        return t || (0, i.Oi)(!1), t
      }

      function Y(e, t) {
        let {
          target: n,
          replace: a,
          state: i,
          preventScrollReset: s,
          relative: u,
          viewTransition: l
        } = void 0 === t ? {} : t, c = (0, r.useNavigate)(), f = (0, r.useLocation)(), d = (0, r.useResolvedPath)(e, {
          relative: u
        });
        return o.useCallback(t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== a ? a : (0, r.createPath)(f) === (0, r.createPath)(d);
            c(e, {
              replace: n,
              state: i,
              preventScrollReset: s,
              relative: u,
              viewTransition: l
            })
          }
        }, [f, c, d, a, i, n, e, s, u, l])
      }

      function J(e) {
        let t = o.useRef(d(e)),
          n = o.useRef(!1),
          a = (0, r.useLocation)(),
          i = o.useMemo(() => function(e, t) {
            let n = d(e);
            return t && t.forEach((e, o) => {
              n.has(o) || t.getAll(o).forEach(e => {
                n.append(o, e)
              })
            }), n
          }(a.search, n.current ? null : t.current), [a.search]),
          s = (0, r.useNavigate)(),
          u = o.useCallback((e, t) => {
            const o = d("function" == typeof e ? e(i) : e);
            n.current = !0, s("?" + o, t)
          }, [s, i]);
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
        } = o.useContext(r.UNSAFE_NavigationContext), n = (0, r.UNSAFE_useRouteId)();
        return o.useCallback(function(o, a) {
          void 0 === a && (a = {}),
            function() {
              if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
            }();
          let {
            action: r,
            method: s,
            encType: u,
            formData: d,
            body: m
          } = function(e, t) {
            let n, o, a, r, s;
            if (f(u = e) && "form" === u.tagName.toLowerCase()) {
              let s = e.getAttribute("action");
              o = s ? (0, i.pb)(s, t) : null, n = e.getAttribute("method") || l, a = v(e.getAttribute("enctype")) || c, r = new FormData(e)
            } else if (function(e) {
                return f(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return f(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let s = e.form;
              if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              let u = e.getAttribute("formaction") || s.getAttribute("action");
              if (o = u ? (0, i.pb)(u, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || l, a = v(e.getAttribute("formenctype")) || v(s.getAttribute("enctype")) || c, r = new FormData(s, e), ! function() {
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
                  value: o
                } = e;
                if ("image" === n) {
                  let e = t ? t + "." : "";
                  r.append(e + "x", "0"), r.append(e + "y", "0")
                } else t && r.append(t, o)
              }
            } else {
              if (f(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              n = l, o = null, a = c, s = e
            }
            var u;
            return r && "text/plain" === a && (s = r, r = void 0), {
              action: o,
              method: n.toLowerCase(),
              encType: a,
              formData: r,
              body: s
            }
          }(o, t);
          if (!1 === a.navigate) {
            let t = a.fetcherKey || G();
            e.fetch(t, n, a.action || r, {
              preventScrollReset: a.preventScrollReset,
              formData: d,
              body: m,
              formMethod: a.method || s,
              formEncType: a.encType || u,
              flushSync: a.flushSync
            })
          } else e.navigate(a.action || r, {
            preventScrollReset: a.preventScrollReset,
            formData: d,
            body: m,
            formMethod: a.method || s,
            formEncType: a.encType || u,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition
          })
        }, [e, t, n])
      }

      function X(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: a
        } = o.useContext(r.UNSAFE_NavigationContext), u = o.useContext(r.UNSAFE_RouteContext);
        u || (0, i.Oi)(!1);
        let [l] = u.matches.slice(-1), c = s({}, (0, r.useResolvedPath)(e || ".", {
          relative: n
        })), f = (0, r.useLocation)();
        if (null == e) {
          c.search = f.search;
          let e = new URLSearchParams(c.search),
            t = e.getAll("index");
          if (t.some(e => "" === e)) {
            e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
            let n = e.toString();
            c.search = n ? "?" + n : ""
          }
        }
        return e && "." !== e || !l.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== a && (c.pathname = "/" === c.pathname ? a : (0, i.HS)([a, c.pathname])), (0, r.createPath)(c)
      }

      function Z(e) {
        var t;
        let {
          key: n
        } = void 0 === e ? {} : e, {
          router: a
        } = W(j.UseFetcher), u = z(B.UseFetcher), l = o.useContext(_), c = o.useContext(r.UNSAFE_RouteContext), f = null == (t = c.matches[c.matches.length - 1]) ? void 0 : t.route.id;
        l || (0, i.Oi)(!1), c || (0, i.Oi)(!1), null == f && (0, i.Oi)(!1);
        let d = T ? T() : "",
          [h, m] = o.useState(n || d);
        n && n !== h ? m(n) : h || m(G()), o.useEffect(() => (a.getFetcher(h), () => {
          a.deleteFetcher(h)
        }), [a, h]);
        let v = o.useCallback((e, t) => {
            f || (0, i.Oi)(!1), a.fetch(h, f, e, t)
          }, [h, f, a]),
          p = Q(),
          g = o.useCallback((e, t) => {
            p(e, s({}, t, {
              navigate: !1,
              fetcherKey: h
            }))
          }, [h, p]),
          w = o.useMemo(() => o.forwardRef((e, t) => o.createElement(K, s({}, e, {
            navigate: !1,
            fetcherKey: h,
            ref: t
          }))), [h]),
          y = u.fetchers.get(h) || i.HW,
          R = l.get(h);
        return o.useMemo(() => s({
          Form: w,
          submit: g,
          load: v
        }, y, {
          data: R
        }), [w, g, v, y, R])
      }

      function $() {
        let e = z(B.UseFetchers);
        return Array.from(e.fetchers.entries()).map(e => {
          let [t, n] = e;
          return s({}, n, {
            key: t
          })
        })
      }
      const ee = "react-router-scroll-positions";
      let te = {};

      function ne(e) {
        let {
          getKey: t,
          storageKey: n
        } = void 0 === e ? {} : e, {
          router: a
        } = W(j.UseScrollRestoration), {
          restoreScrollPosition: u,
          preventScrollReset: l
        } = z(B.UseScrollRestoration), {
          basename: c
        } = o.useContext(r.UNSAFE_NavigationContext), f = (0, r.useLocation)(), d = (0, r.useMatches)(), h = (0, r.useNavigation)();
        o.useEffect(() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          }), []),
          function(e) {
            let {
              capture: t
            } = {};
            o.useEffect(() => {
              let n = null != t ? {
                capture: t
              } : void 0;
              return window.addEventListener("pagehide", e, n), () => {
                window.removeEventListener("pagehide", e, n)
              }
            }, [e, t])
          }(o.useCallback(() => {
            if ("idle" === h.state) {
              let e = (t ? t(f, d) : null) || f.key;
              te[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(n || ee, JSON.stringify(te))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }, [n, t, h.state, f, d])), "undefined" != typeof document && (o.useLayoutEffect(() => {
            try {
              let e = sessionStorage.getItem(n || ee);
              e && (te = JSON.parse(e))
            } catch (e) {}
          }, [n]), o.useLayoutEffect(() => {
            let e = t && "/" !== c ? (e, n) => t(s({}, e, {
                pathname: (0, i.pb)(e.pathname, c) || e.pathname
              }), n) : t,
              n = null == a ? void 0 : a.enableScrollRestoration(te, () => window.scrollY, e);
            return () => n && n()
          }, [a, c, t]), o.useLayoutEffect(() => {
            if (!1 !== u)
              if ("number" != typeof u) {
                if (f.hash) {
                  let e = document.getElementById(decodeURIComponent(f.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== l && window.scrollTo(0, 0)
              } else window.scrollTo(0, u)
          }, [f, u, l]))
      }

      function oe(e, t) {
        let {
          capture: n
        } = t || {};
        o.useEffect(() => {
          let t = null != n ? {
            capture: n
          } : void 0;
          return window.addEventListener("beforeunload", e, t), () => {
            window.removeEventListener("beforeunload", e, t)
          }
        }, [e, n])
      }

      function ae(e) {
        let {
          when: t,
          message: n
        } = e, a = (0, r.useBlocker)(t);
        o.useEffect(() => {
          "blocked" === a.state && (window.confirm(n) ? setTimeout(a.proceed, 0) : a.reset())
        }, [a, n]), o.useEffect(() => {
          "blocked" !== a.state || t || a.reset()
        }, [a, t])
      }

      function re(e, t) {
        void 0 === t && (t = {});
        let n = o.useContext(E);
        null == n && (0, i.Oi)(!1);
        let {
          basename: a
        } = W(j.useViewTransitionState), s = (0, r.useResolvedPath)(e, {
          relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let u = (0, i.pb)(n.currentLocation.pathname, a) || n.currentLocation.pathname,
          l = (0, i.pb)(n.nextLocation.pathname, a) || n.nextLocation.pathname;
        return null != (0, i.B6)(s.pathname, l) || null != (0, i.B6)(s.pathname, u)
      }
    }
  }
]);