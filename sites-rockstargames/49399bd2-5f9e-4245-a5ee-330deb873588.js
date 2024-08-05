! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "49399bd2-5f9e-4245-a5ee-330deb873588", e._sentryDebugIdIdentifier = "sentry-dbid-49399bd2-5f9e-4245-a5ee-330deb873588")
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
  [5033], {
    75033: (e, t, n) => {
      n.r(t), n.d(t, {
        AbortedDeferredError: () => a.AbortedDeferredError,
        Await: () => a.Await,
        BrowserRouter: () => A,
        Form: () => P,
        HashRouter: () => L,
        Link: () => k,
        MemoryRouter: () => a.MemoryRouter,
        NavLink: () => D,
        Navigate: () => a.Navigate,
        NavigationType: () => a.NavigationType,
        Outlet: () => a.Outlet,
        Route: () => a.Route,
        Router: () => a.Router,
        RouterProvider: () => N,
        Routes: () => a.Routes,
        ScrollRestoration: () => M,
        UNSAFE_DataRouterContext: () => a.UNSAFE_DataRouterContext,
        UNSAFE_DataRouterStateContext: () => a.UNSAFE_DataRouterStateContext,
        UNSAFE_LocationContext: () => a.UNSAFE_LocationContext,
        UNSAFE_NavigationContext: () => a.UNSAFE_NavigationContext,
        UNSAFE_RouteContext: () => a.UNSAFE_RouteContext,
        UNSAFE_ViewTransitionContext: () => E,
        UNSAFE_useRouteId: () => a.UNSAFE_useRouteId,
        UNSAFE_useScrollRestoration: () => $,
        createBrowserRouter: () => b,
        createHashRouter: () => y,
        createMemoryRouter: () => a.createMemoryRouter,
        createPath: () => a.createPath,
        createRoutesFromChildren: () => a.createRoutesFromChildren,
        createRoutesFromElements: () => a.createRoutesFromElements,
        createSearchParams: () => d,
        defer: () => a.defer,
        generatePath: () => a.generatePath,
        isRouteErrorResponse: () => a.isRouteErrorResponse,
        json: () => a.json,
        matchPath: () => a.matchPath,
        matchRoutes: () => a.matchRoutes,
        parsePath: () => a.parsePath,
        redirect: () => a.redirect,
        redirectDocument: () => a.redirectDocument,
        renderMatches: () => a.renderMatches,
        resolvePath: () => a.resolvePath,
        unstable_HistoryRouter: () => x,
        unstable_useBlocker: () => a.unstable_useBlocker,
        unstable_usePrompt: () => te,
        unstable_useViewTransitionState: () => ne,
        useActionData: () => a.useActionData,
        useAsyncError: () => a.useAsyncError,
        useAsyncValue: () => a.useAsyncValue,
        useBeforeUnload: () => ee,
        useFetcher: () => G,
        useFetchers: () => Q,
        useFormAction: () => J,
        useHref: () => a.useHref,
        useInRouterContext: () => a.useInRouterContext,
        useLinkClickHandler: () => H,
        useLoaderData: () => a.useLoaderData,
        useLocation: () => a.useLocation,
        useMatch: () => a.useMatch,
        useMatches: () => a.useMatches,
        useNavigate: () => a.useNavigate,
        useNavigation: () => a.useNavigation,
        useNavigationType: () => a.useNavigationType,
        useOutlet: () => a.useOutlet,
        useOutletContext: () => a.useOutletContext,
        useParams: () => a.useParams,
        useResolvedPath: () => a.useResolvedPath,
        useRevalidator: () => a.useRevalidator,
        useRouteError: () => a.useRouteError,
        useRouteLoaderData: () => a.useRouteLoaderData,
        useRoutes: () => a.useRoutes,
        useSearchParams: () => K,
        useSubmit: () => Y
      });
      var o = n(71403),
        a = n(80665),
        r = n(15261);

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
      const u = "get",
        l = "application/x-www-form-urlencoded";

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

      function v(e) {
        return null == e || m.has(e) ? e : null
      }

      function p(e, t) {
        let n, o, a, i, s;
        if (c(d = e) && "form" === d.tagName.toLowerCase()) {
          let s = e.getAttribute("action");
          o = s ? (0, r.pb)(s, t) : null, n = e.getAttribute("method") || u, a = v(e.getAttribute("enctype")) || l, i = new FormData(e)
        } else if (function(e) {
            return c(e) && "button" === e.tagName.toLowerCase()
          }(e) || function(e) {
            return c(e) && "input" === e.tagName.toLowerCase()
          }(e) && ("submit" === e.type || "image" === e.type)) {
          let s = e.form;
          if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let c = e.getAttribute("formaction") || s.getAttribute("action");
          if (o = c ? (0, r.pb)(c, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || u, a = v(e.getAttribute("formenctype")) || v(s.getAttribute("enctype")) || l, i = new FormData(s, e), ! function() {
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
          n = u, o = null, a = l, s = e
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
        g = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

      function b(e, t) {
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
          mapRouteProperties: a.UNSAFE_mapRouteProperties,
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
          mapRouteProperties: a.UNSAFE_mapRouteProperties,
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
        for (let [e, o] of t)
          if (o && "RouteErrorResponse" === o.__type) n[e] = new r.VV(o.status, o.statusText, o.data, !0 === o.internal);
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
        _ = o.startTransition;
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
        } = e, [i, s] = o.useState(n.state), [u, l] = o.useState(), [c, d] = o.useState({
          isTransitioning: !1
        }), [f, m] = o.useState(), [v, p] = o.useState(), [h, w] = o.useState(), {
          v7_startTransition: g
        } = r || {}, b = o.useCallback((e => {
          g ? function(e) {
            _ ? _(e) : e()
          }(e) : e()
        }), [g]), y = o.useCallback(((e, t) => {
          let {
            unstable_viewTransitionOpts: o
          } = t;
          o && null != n.window && "function" == typeof n.window.document.startViewTransition ? v && f ? (f.resolve(), v.skipTransition(), w({
            state: e,
            currentLocation: o.currentLocation,
            nextLocation: o.nextLocation
          })) : (l(e), d({
            isTransitioning: !0,
            currentLocation: o.currentLocation,
            nextLocation: o.nextLocation
          })) : b((() => s(e)))
        }), [b, v, f, n.window]);
        o.useLayoutEffect((() => n.subscribe(y)), [n, y]), o.useEffect((() => {
          c.isTransitioning && m(new C)
        }), [c.isTransitioning]), o.useEffect((() => {
          if (f && u && n.window) {
            let e = u,
              t = f.promise,
              o = n.window.document.startViewTransition((async () => {
                b((() => s(e))), await t
              }));
            o.finished.finally((() => {
              m(void 0), p(void 0), l(void 0), d({
                isTransitioning: !1
              })
            })), p(o)
          }
        }), [b, u, f, n.window]), o.useEffect((() => {
          f && u && i.location.key === u.location.key && f.resolve()
        }), [f, v, i.location, u]), o.useEffect((() => {
          !c.isTransitioning && h && (l(h.state), d({
            isTransitioning: !0,
            currentLocation: h.currentLocation,
            nextLocation: h.nextLocation
          }), w(void 0))
        }), [c.isTransitioning, h]);
        let R = o.useMemo((() => ({
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
          N = o.useMemo((() => ({
            router: n,
            navigator: R,
            static: !1,
            basename: S
          })), [n, R, S]);
        return o.createElement(o.Fragment, null, o.createElement(a.UNSAFE_DataRouterContext.Provider, {
          value: N
        }, o.createElement(a.UNSAFE_DataRouterStateContext.Provider, {
          value: i
        }, o.createElement(E.Provider, {
          value: c
        }, o.createElement(a.Router, {
          basename: S,
          location: i.location,
          navigationType: i.historyAction,
          navigator: R
        }, i.initialized ? o.createElement(T, {
          routes: n.routes,
          state: i
        }) : t)))), null)
      }

      function T(e) {
        let {
          routes: t,
          state: n
        } = e;
        return (0, a.UNSAFE_useRoutesImpl)(t, void 0, n)
      }

      function A(e) {
        let {
          basename: t,
          children: n,
          future: i,
          window: s
        } = e, u = o.useRef();
        null == u.current && (u.current = (0, r.zR)({
          window: s,
          v5Compat: !0
        }));
        let l = u.current,
          [c, d] = o.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: f
          } = i || {},
          m = o.useCallback((e => {
            f && _ ? _((() => d(e))) : d(e)
          }), [d, f]);
        return o.useLayoutEffect((() => l.listen(m)), [l, m]), o.createElement(a.Router, {
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
        } = e, u = o.useRef();
        null == u.current && (u.current = (0, r.TM)({
          window: s,
          v5Compat: !0
        }));
        let l = u.current,
          [c, d] = o.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: f
          } = i || {},
          m = o.useCallback((e => {
            f && _ ? _((() => d(e))) : d(e)
          }), [d, f]);
        return o.useLayoutEffect((() => l.listen(m)), [l, m]), o.createElement(a.Router, {
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
        } = e, [s, u] = o.useState({
          action: i.action,
          location: i.location
        }), {
          v7_startTransition: l
        } = r || {}, c = o.useCallback((e => {
          l && _ ? _((() => u(e))) : u(e)
        }), [u, l]);
        return o.useLayoutEffect((() => i.listen(c)), [i, c]), o.createElement(a.Router, {
          basename: t,
          children: n,
          location: s.location,
          navigationType: s.action,
          navigator: i
        })
      }
      const F = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        U = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        k = o.forwardRef((function(e, t) {
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
            g = s(e, h),
            {
              basename: b
            } = o.useContext(a.UNSAFE_NavigationContext),
            y = !1;
          if ("string" == typeof v && U.test(v) && (n = v, F)) try {
            let e = new URL(window.location.href),
              t = v.startsWith("//") ? new URL(e.protocol + v) : new URL(v),
              n = (0, r.pb)(t.pathname, b);
            t.origin === e.origin && null != n ? v = n + t.search + t.hash : y = !0
          } catch (e) {}
          let R = (0, a.useHref)(v, {
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
          return o.createElement("a", i({}, g, {
            href: n || R,
            onClick: y || c ? u : function(e) {
              u && u(e), e.defaultPrevented || S(e)
            },
            ref: t,
            target: m
          }))
        })),
        D = o.forwardRef((function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: r = !1,
            className: u = "",
            end: l = !1,
            style: c,
            to: d,
            unstable_viewTransition: f,
            children: m
          } = e, v = s(e, w), p = (0, a.useResolvedPath)(d, {
            relative: v.relative
          }), h = (0, a.useLocation)(), g = o.useContext(a.UNSAFE_DataRouterStateContext), {
            navigator: b
          } = o.useContext(a.UNSAFE_NavigationContext), y = null != g && ne(p) && !0 === f, R = b.encodeLocation ? b.encodeLocation(p).pathname : p.pathname, S = h.pathname, E = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
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
          return o.createElement(k, i({}, v, {
            "aria-current": A,
            className: _,
            ref: t,
            style: L,
            to: d,
            unstable_viewTransition: f
          }), "function" == typeof m ? m(T) : m)
        })),
        P = o.forwardRef(((e, t) => {
          let n = Y();
          return o.createElement(O, i({}, e, {
            submit: n,
            ref: t
          }))
        })),
        O = o.forwardRef(((e, t) => {
          let {
            reloadDocument: n,
            replace: a,
            state: r,
            method: l = u,
            action: c,
            onSubmit: d,
            submit: f,
            relative: m,
            preventScrollReset: v,
            unstable_viewTransition: p
          } = e, h = s(e, g), w = "get" === l.toLowerCase() ? "get" : "post", b = J(c, {
            relative: m
          });
          return o.createElement("form", i({
            ref: t,
            method: w,
            action: b,
            onSubmit: n ? d : e => {
              if (d && d(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                n = (null == t ? void 0 : t.getAttribute("formmethod")) || l;
              f(t || e.currentTarget, {
                method: n,
                replace: a,
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
        let t = o.useContext(a.UNSAFE_DataRouterContext);
        return t || (0, r.Oi)(!1), t
      }

      function j(e) {
        let t = o.useContext(a.UNSAFE_DataRouterStateContext);
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
        } = void 0 === t ? {} : t, c = (0, a.useNavigate)(), d = (0, a.useLocation)(), f = (0, a.useResolvedPath)(e, {
          relative: u
        });
        return o.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== r ? r : (0, a.createPath)(d) === (0, a.createPath)(f);
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
        let t = o.useRef(d(e)),
          n = o.useRef(!1),
          r = (0, a.useLocation)(),
          i = o.useMemo((() => function(e, t) {
            let n = d(e);
            return t && t.forEach(((e, o) => {
              n.has(o) || t.getAll(o).forEach((e => {
                n.append(o, e)
              }))
            })), n
          }(r.search, n.current ? null : t.current)), [r.search]),
          s = (0, a.useNavigate)(),
          u = o.useCallback(((e, t) => {
            const o = d("function" == typeof e ? e(i) : e);
            n.current = !0, s("?" + o, t)
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
        } = o.useContext(a.UNSAFE_NavigationContext), n = (0, a.UNSAFE_useRouteId)();
        return o.useCallback((function(o, a) {
          void 0 === a && (a = {}), z();
          let {
            action: r,
            method: i,
            encType: s,
            formData: u,
            body: l
          } = p(o, t);
          e.navigate(a.action || r, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: l,
            formMethod: a.method || i,
            formEncType: a.encType || s,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            unstable_viewTransition: a.unstable_viewTransition
          })
        }), [e, t, n])
      }

      function W(e, t) {
        let {
          router: n
        } = V(I.UseSubmitFetcher), {
          basename: i
        } = o.useContext(a.UNSAFE_NavigationContext);
        return o.useCallback((function(o, a) {
          void 0 === a && (a = {}), z();
          let {
            action: s,
            method: u,
            encType: l,
            formData: c,
            body: d
          } = p(o, i);
          null == t && (0, r.Oi)(!1), n.fetch(e, t, a.action || s, {
            preventScrollReset: a.preventScrollReset,
            formData: c,
            body: d,
            formMethod: a.method || u,
            formEncType: a.encType || l
          })
        }), [n, i, e, t])
      }

      function J(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: s
        } = o.useContext(a.UNSAFE_NavigationContext), u = o.useContext(a.UNSAFE_RouteContext);
        u || (0, r.Oi)(!1);
        let [l] = u.matches.slice(-1), c = i({}, (0, a.useResolvedPath)(e || ".", {
          relative: n
        })), d = (0, a.useLocation)();
        if (null == e && (c.search = d.search, l.route.index)) {
          let e = new URLSearchParams(c.search);
          e.delete("index"), c.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !l.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== s && (c.pathname = "/" === c.pathname ? s : (0, r.HS)([s, c.pathname])), (0, a.createPath)(c)
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
        } = V(I.UseFetcher), n = o.useContext(a.UNSAFE_RouteContext);
        n || (0, r.Oi)(!1);
        let s = null == (e = n.matches[n.matches.length - 1]) ? void 0 : e.route.id;
        null == s && (0, r.Oi)(!1);
        let [u] = o.useState((() => String(++q))), [l] = o.useState((() => (s || (0, r.Oi)(!1), function(e, t) {
          return o.forwardRef(((n, a) => {
            let r = W(e, t);
            return o.createElement(O, i({}, n, {
              ref: a,
              submit: r
            }))
          }))
        }(u, s)))), [c] = o.useState((() => e => {
          t || (0, r.Oi)(!1), s || (0, r.Oi)(!1), t.fetch(u, s, e)
        })), d = W(u, s), f = t.getFetcher(u), m = o.useMemo((() => i({
          Form: l,
          submit: d,
          load: c
        }, f)), [f, l, d, c]);
        return o.useEffect((() => () => {
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
        } = o.useContext(a.UNSAFE_NavigationContext), d = (0, a.useLocation)(), f = (0, a.useMatches)(), m = (0, a.useNavigation)();
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
              sessionStorage.setItem(n || X, JSON.stringify(Z))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }), [n, t, m.state, d, f])), "undefined" != typeof document && (o.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(n || X);
              e && (Z = JSON.parse(e))
            } catch (e) {}
          }), [n]), o.useLayoutEffect((() => {
            let e = t && "/" !== c ? (e, n) => t(i({}, e, {
                pathname: (0, r.pb)(e.pathname, c) || e.pathname
              }), n) : t,
              n = null == s ? void 0 : s.enableScrollRestoration(Z, (() => window.scrollY), e);
            return () => n && n()
          }), [s, c, t]), o.useLayoutEffect((() => {
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
        } = e, r = (0, a.unstable_useBlocker)(t);
        o.useEffect((() => {
          "blocked" === r.state && (window.confirm(n) ? setTimeout(r.proceed, 0) : r.reset())
        }), [r, n]), o.useEffect((() => {
          "blocked" !== r.state || t || r.reset()
        }), [r, t])
      }

      function ne(e, t) {
        void 0 === t && (t = {});
        let n = o.useContext(E);
        null == n && (0, r.Oi)(!1);
        let {
          basename: i
        } = V(I.useViewTransitionState), s = (0, a.useResolvedPath)(e, {
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