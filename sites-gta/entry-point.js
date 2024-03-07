/*! For license information please see remote-entry.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cd4756a8-6ea4-41b9-bb99-9a520bde61b8", e._sentryDebugIdIdentifier = "sentry-dbid-cd4756a8-6ea4-41b9-bb99-9a520bde61b8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "43971e0f99ea7c6c89ef0007f1e57d35945eb542",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "43971e0f99ea7c6c89ef0007f1e57d35945eb542"
}, System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/sites-rockstargames", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    o = {},
    a = {},
    i = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        i[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, l, u, c = {
            3668: (e, t, r) => {
              "use strict";
              r.r(t), r.d(t, {
                AbortedDeferredError: () => o.ay,
                Await: () => re,
                BrowserRouter: () => Ae,
                Form: () => Ie,
                HashRouter: () => je,
                Link: () => Be,
                MemoryRouter: () => Q,
                NavLink: () => Fe,
                Navigate: () => X,
                NavigationType: () => o.So,
                Outlet: () => Z,
                Route: () => G,
                Router: () => ee,
                RouterProvider: () => Te,
                Routes: () => te,
                ScrollRestoration: () => ze,
                UNSAFE_DataRouterContext: () => i,
                UNSAFE_DataRouterStateContext: () => s,
                UNSAFE_LocationContext: () => c,
                UNSAFE_NavigationContext: () => u,
                UNSAFE_RouteContext: () => d,
                UNSAFE_ViewTransitionContext: () => Le,
                UNSAFE_useRouteId: () => N,
                UNSAFE_useScrollRestoration: () => ot,
                createBrowserRouter: () => xe,
                createHashRouter: () => Ce,
                createMemoryRouter: () => ce,
                createPath: () => o.Ep,
                createRoutesFromChildren: () => se,
                createRoutesFromElements: () => se,
                createSearchParams: () => ve,
                defer: () => o.Qv,
                generatePath: () => o.Yz,
                isRouteErrorResponse: () => o.e8,
                json: () => o.qS,
                matchPath: () => o.ot,
                matchRoutes: () => o.Cm,
                parsePath: () => o.O8,
                redirect: () => o.ch,
                redirectDocument: () => o.kt,
                renderMatches: () => le,
                resolvePath: () => o.MP,
                unstable_HistoryRouter: () => Oe,
                unstable_useBlocker: () => J,
                unstable_usePrompt: () => it,
                unstable_useViewTransitionState: () => st,
                useActionData: () => $,
                useAsyncError: () => K,
                useAsyncValue: () => H,
                useBeforeUnload: () => at,
                useFetcher: () => et,
                useFetchers: () => tt,
                useFormAction: () => Ze,
                useHref: () => h,
                useInRouterContext: () => p,
                useLinkClickHandler: () => Ve,
                useLoaderData: () => q,
                useLocation: () => m,
                useMatch: () => y,
                useMatches: () => I,
                useNavigate: () => b,
                useNavigation: () => B,
                useNavigationType: () => v,
                useOutlet: () => S,
                useOutletContext: () => E,
                useParams: () => R,
                useResolvedPath: () => x,
                useRevalidator: () => F,
                useRouteError: () => W,
                useRouteLoaderData: () => z,
                useRoutes: () => C,
                useSearchParams: () => Je,
                useSubmit: () => Qe
              });
              var n = r(8200),
                o = r(6680);

              function a() {
                return a = Object.assign ? Object.assign.bind() : function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                  }
                  return e
                }, a.apply(this, arguments)
              }
              const i = n.createContext(null),
                s = n.createContext(null),
                l = n.createContext(null),
                u = n.createContext(null),
                c = n.createContext(null),
                d = n.createContext({
                  outlet: null,
                  matches: [],
                  isDataRoute: !1
                }),
                f = n.createContext(null);

              function h(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t;
                p() || (0, o.q4)(!1);
                let {
                  basename: a,
                  navigator: i
                } = n.useContext(u), {
                  hash: s,
                  pathname: l,
                  search: c
                } = x(e, {
                  relative: r
                }), d = l;
                return "/" !== a && (d = "/" === l ? a : (0, o.En)([a, l])), i.createHref({
                  pathname: d,
                  search: c,
                  hash: s
                })
              }

              function p() {
                return null != n.useContext(c)
              }

              function m() {
                return p() || (0, o.q4)(!1), n.useContext(c).location
              }

              function v() {
                return n.useContext(c).navigationType
              }

              function y(e) {
                p() || (0, o.q4)(!1);
                let {
                  pathname: t
                } = m();
                return n.useMemo((() => (0, o.ot)(e, t)), [t, e])
              }

              function g(e) {
                n.useContext(u).static || n.useLayoutEffect(e)
              }

              function b() {
                let {
                  isDataRoute: e
                } = n.useContext(d);
                return e ? function() {
                  let {
                    router: e
                  } = j(U.UseNavigateStable), t = M(A.UseNavigateStable), r = n.useRef(!1);
                  return g((() => {
                    r.current = !0
                  })), n.useCallback((function(n, o) {
                    void 0 === o && (o = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, a({
                      fromRouteId: t
                    }, o)))
                  }), [e, t])
                }() : function() {
                  p() || (0, o.q4)(!1);
                  let e = n.useContext(i),
                    {
                      basename: t,
                      navigator: r
                    } = n.useContext(u),
                    {
                      matches: a
                    } = n.useContext(d),
                    {
                      pathname: s
                    } = m(),
                    l = JSON.stringify((0, o.em)(a).map((e => e.pathnameBase))),
                    c = n.useRef(!1);
                  return g((() => {
                    c.current = !0
                  })), n.useCallback((function(n, a) {
                    if (void 0 === a && (a = {}), !c.current) return;
                    if ("number" == typeof n) return void r.go(n);
                    let i = (0, o._)(n, JSON.parse(l), s, "path" === a.relative);
                    null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, o.En)([t, i.pathname])), (a.replace ? r.replace : r.push)(i, a.state, a)
                  }), [t, r, l, s, e])
                }()
              }
              const w = n.createContext(null);

              function E() {
                return n.useContext(w)
              }

              function S(e) {
                let t = n.useContext(d).outlet;
                return t ? n.createElement(w.Provider, {
                  value: e
                }, t) : t
              }

              function R() {
                let {
                  matches: e
                } = n.useContext(d), t = e[e.length - 1];
                return t ? t.params : {}
              }

              function x(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t, {
                  matches: a
                } = n.useContext(d), {
                  pathname: i
                } = m(), s = JSON.stringify((0, o.em)(a).map((e => e.pathnameBase)));
                return n.useMemo((() => (0, o._)(e, JSON.parse(s), i, "path" === r)), [e, s, i, r])
              }

              function C(e, t) {
                return k(e, t)
              }

              function k(e, t, r) {
                p() || (0, o.q4)(!1);
                let {
                  navigator: i
                } = n.useContext(u), {
                  matches: s
                } = n.useContext(d), l = s[s.length - 1], f = l ? l.params : {}, h = (l && l.pathname, l ? l.pathnameBase : "/");
                l && l.route;
                let v, y = m();
                if (t) {
                  var g;
                  let e = "string" == typeof t ? (0, o.O8)(t) : t;
                  "/" === h || (null == (g = e.pathname) ? void 0 : g.startsWith(h)) || (0, o.q4)(!1), v = e
                } else v = y;
                let b = v.pathname || "/",
                  w = "/" === h ? b : b.slice(h.length) || "/",
                  E = (0, o.Cm)(e, {
                    pathname: w
                  }),
                  S = T(E && E.map((e => Object.assign({}, e, {
                    params: Object.assign({}, f, e.params),
                    pathname: (0, o.En)([h, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
                    pathnameBase: "/" === e.pathnameBase ? h : (0, o.En)([h, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                  }))), s, r);
                return t && S ? n.createElement(c.Provider, {
                  value: {
                    location: a({
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default"
                    }, v),
                    navigationType: o.So.Pop
                  }
                }, S) : S
              }

              function _() {
                let e = W(),
                  t = (0, o.e8)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                  r = e instanceof Error ? e.stack : null,
                  a = {
                    padding: "0.5rem",
                    backgroundColor: "rgba(200,200,200, 0.5)"
                  };
                return n.createElement(n.Fragment, null, n.createElement("h2", null, "Unexpected Application Error!"), n.createElement("h3", {
                  style: {
                    fontStyle: "italic"
                  }
                }, t), r ? n.createElement("pre", {
                  style: a
                }, r) : null, null)
              }
              const L = n.createElement(_, null);
              class D extends n.Component {
                constructor(e) {
                  super(e), this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error
                  }
                }
                static getDerivedStateFromError(e) {
                  return {
                    error: e
                  }
                }
                static getDerivedStateFromProps(e, t) {
                  return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                    error: e.error,
                    location: e.location,
                    revalidation: e.revalidation
                  } : {
                    error: e.error || t.error,
                    location: t.location,
                    revalidation: e.revalidation || t.revalidation
                  }
                }
                componentDidCatch(e, t) {
                  console.error("React Router caught the following error during render", e, t)
                }
                render() {
                  return this.state.error ? n.createElement(d.Provider, {
                    value: this.props.routeContext
                  }, n.createElement(f.Provider, {
                    value: this.state.error,
                    children: this.props.component
                  })) : this.props.children
                }
              }

              function P(e) {
                let {
                  routeContext: t,
                  match: r,
                  children: o
                } = e, a = n.useContext(i);
                return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(d.Provider, {
                  value: t
                }, o)
              }

              function T(e, t, r) {
                var a;
                if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
                  var i;
                  if (null == (i = r) || !i.errors) return null;
                  e = r.matches
                }
                let s = e,
                  l = null == (a = r) ? void 0 : a.errors;
                if (null != l) {
                  let e = s.findIndex((e => e.route.id && (null == l ? void 0 : l[e.route.id])));
                  e >= 0 || (0, o.q4)(!1), s = s.slice(0, Math.min(s.length, e + 1))
                }
                return s.reduceRight(((e, o, a) => {
                  let i = o.route.id ? null == l ? void 0 : l[o.route.id] : null,
                    u = null;
                  r && (u = o.route.errorElement || L);
                  let c = t.concat(s.slice(0, a + 1)),
                    d = () => {
                      let t;
                      return t = i ? u : o.route.Component ? n.createElement(o.route.Component, null) : o.route.element ? o.route.element : e, n.createElement(P, {
                        match: o,
                        routeContext: {
                          outlet: e,
                          matches: c,
                          isDataRoute: null != r
                        },
                        children: t
                      })
                    };
                  return r && (o.route.ErrorBoundary || o.route.errorElement || 0 === a) ? n.createElement(D, {
                    location: r.location,
                    revalidation: r.revalidation,
                    component: u,
                    error: i,
                    children: d(),
                    routeContext: {
                      outlet: null,
                      matches: c,
                      isDataRoute: !0
                    }
                  }) : d()
                }), null)
              }
              var U = function(e) {
                  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
                }(U || {}),
                A = function(e) {
                  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
                }(A || {});

              function j(e) {
                let t = n.useContext(i);
                return t || (0, o.q4)(!1), t
              }

              function O(e) {
                let t = n.useContext(s);
                return t || (0, o.q4)(!1), t
              }

              function M(e) {
                let t = function(e) {
                    let t = n.useContext(d);
                    return t || (0, o.q4)(!1), t
                  }(),
                  r = t.matches[t.matches.length - 1];
                return r.route.id || (0, o.q4)(!1), r.route.id
              }

              function N() {
                return M(A.UseRouteId)
              }

              function B() {
                return O(A.UseNavigation).navigation
              }

              function F() {
                let e = j(U.UseRevalidator),
                  t = O(A.UseRevalidator);
                return n.useMemo((() => ({
                  revalidate: e.router.revalidate,
                  state: t.revalidation
                })), [e.router.revalidate, t.revalidation])
              }

              function I() {
                let {
                  matches: e,
                  loaderData: t
                } = O(A.UseMatches);
                return n.useMemo((() => e.map((e => (0, o.WM)(e, t)))), [e, t])
              }

              function q() {
                let e = O(A.UseLoaderData),
                  t = M(A.UseLoaderData);
                if (!e.errors || null == e.errors[t]) return e.loaderData[t];
                console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
              }

              function z(e) {
                return O(A.UseRouteLoaderData).loaderData[e]
              }

              function $() {
                let e = O(A.UseActionData);
                return n.useContext(d) || (0, o.q4)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
              }

              function W() {
                var e;
                let t = n.useContext(f),
                  r = O(A.UseRouteError),
                  o = M(A.UseRouteError);
                return t || (null == (e = r.errors) ? void 0 : e[o])
              }

              function H() {
                let e = n.useContext(l);
                return null == e ? void 0 : e._data
              }

              function K() {
                let e = n.useContext(l);
                return null == e ? void 0 : e._error
              }
              let V = 0;

              function J(e) {
                let {
                  router: t,
                  basename: r
                } = j(U.UseBlocker), i = O(A.UseBlocker), [s, l] = n.useState(""), u = n.useCallback((t => {
                  if ("function" != typeof e) return !!e;
                  if ("/" === r) return e(t);
                  let {
                    currentLocation: n,
                    nextLocation: i,
                    historyAction: s
                  } = t;
                  return e({
                    currentLocation: a({}, n, {
                      pathname: (0, o.mc)(n.pathname, r) || n.pathname
                    }),
                    nextLocation: a({}, i, {
                      pathname: (0, o.mc)(i.pathname, r) || i.pathname
                    }),
                    historyAction: s
                  })
                }), [r, e]);
                return n.useEffect((() => {
                  let e = String(++V);
                  return l(e), () => t.deleteBlocker(e)
                }), [t]), n.useEffect((() => {
                  "" !== s && t.getBlocker(s, u)
                }), [t, s, u]), s && i.blockers.has(s) ? i.blockers.get(s) : o.ie
              }
              const Y = n.startTransition;

              function Q(e) {
                let {
                  basename: t,
                  children: r,
                  initialEntries: a,
                  initialIndex: i,
                  future: s
                } = e, l = n.useRef();
                null == l.current && (l.current = (0, o.Wi)({
                  initialEntries: a,
                  initialIndex: i,
                  v5Compat: !0
                }));
                let u = l.current,
                  [c, d] = n.useState({
                    action: u.action,
                    location: u.location
                  }),
                  {
                    v7_startTransition: f
                  } = s || {},
                  h = n.useCallback((e => {
                    f && Y ? Y((() => d(e))) : d(e)
                  }), [d, f]);
                return n.useLayoutEffect((() => u.listen(h)), [u, h]), n.createElement(ee, {
                  basename: t,
                  children: r,
                  location: c.location,
                  navigationType: c.action,
                  navigator: u
                })
              }

              function X(e) {
                let {
                  to: t,
                  replace: r,
                  state: a,
                  relative: i
                } = e;
                p() || (0, o.q4)(!1);
                let {
                  matches: s
                } = n.useContext(d), {
                  pathname: l
                } = m(), u = b(), c = (0, o._)(t, (0, o.em)(s).map((e => e.pathnameBase)), l, "path" === i), f = JSON.stringify(c);
                return n.useEffect((() => u(JSON.parse(f), {
                  replace: r,
                  state: a,
                  relative: i
                })), [u, f, i, r, a]), null
              }

              function Z(e) {
                return S(e.context)
              }

              function G(e) {
                (0, o.q4)(!1)
              }

              function ee(e) {
                let {
                  basename: t = "/",
                  children: r = null,
                  location: a,
                  navigationType: i = o.So.Pop,
                  navigator: s,
                  static: l = !1
                } = e;
                p() && (0, o.q4)(!1);
                let d = t.replace(/^\/*/, "/"),
                  f = n.useMemo((() => ({
                    basename: d,
                    navigator: s,
                    static: l
                  })), [d, s, l]);
                "string" == typeof a && (a = (0, o.O8)(a));
                let {
                  pathname: h = "/",
                  search: m = "",
                  hash: v = "",
                  state: y = null,
                  key: g = "default"
                } = a, b = n.useMemo((() => {
                  let e = (0, o.mc)(h, d);
                  return null == e ? null : {
                    location: {
                      pathname: e,
                      search: m,
                      hash: v,
                      state: y,
                      key: g
                    },
                    navigationType: i
                  }
                }), [d, h, m, v, y, g, i]);
                return null == b ? null : n.createElement(u.Provider, {
                  value: f
                }, n.createElement(c.Provider, {
                  children: r,
                  value: b
                }))
              }

              function te(e) {
                let {
                  children: t,
                  location: r
                } = e;
                return C(se(t), r)
              }

              function re(e) {
                let {
                  children: t,
                  errorElement: r,
                  resolve: o
                } = e;
                return n.createElement(ae, {
                  resolve: o,
                  errorElement: r
                }, n.createElement(ie, null, t))
              }
              var ne = function(e) {
                return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
              }(ne || {});
              const oe = new Promise((() => {}));
              class ae extends n.Component {
                constructor(e) {
                  super(e), this.state = {
                    error: null
                  }
                }
                static getDerivedStateFromError(e) {
                  return {
                    error: e
                  }
                }
                componentDidCatch(e, t) {
                  console.error("<Await> caught the following error during render", e, t)
                }
                render() {
                  let {
                    children: e,
                    errorElement: t,
                    resolve: r
                  } = this.props, a = null, i = ne.pending;
                  if (r instanceof Promise)
                    if (this.state.error) {
                      i = ne.error;
                      let e = this.state.error;
                      a = Promise.reject().catch((() => {})), Object.defineProperty(a, "_tracked", {
                        get: () => !0
                      }), Object.defineProperty(a, "_error", {
                        get: () => e
                      })
                    } else r._tracked ? (a = r, i = void 0 !== a._error ? ne.error : void 0 !== a._data ? ne.success : ne.pending) : (i = ne.pending, Object.defineProperty(r, "_tracked", {
                      get: () => !0
                    }), a = r.then((e => Object.defineProperty(r, "_data", {
                      get: () => e
                    })), (e => Object.defineProperty(r, "_error", {
                      get: () => e
                    }))));
                  else i = ne.success, a = Promise.resolve(), Object.defineProperty(a, "_tracked", {
                    get: () => !0
                  }), Object.defineProperty(a, "_data", {
                    get: () => r
                  });
                  if (i === ne.error && a._error instanceof o.ay) throw oe;
                  if (i === ne.error && !t) throw a._error;
                  if (i === ne.error) return n.createElement(l.Provider, {
                    value: a,
                    children: t
                  });
                  if (i === ne.success) return n.createElement(l.Provider, {
                    value: a,
                    children: e
                  });
                  throw a
                }
              }

              function ie(e) {
                let {
                  children: t
                } = e, r = H(), o = "function" == typeof t ? t(r) : t;
                return n.createElement(n.Fragment, null, o)
              }

              function se(e, t) {
                void 0 === t && (t = []);
                let r = [];
                return n.Children.forEach(e, ((e, a) => {
                  if (!n.isValidElement(e)) return;
                  let i = [...t, a];
                  if (e.type === n.Fragment) return void r.push.apply(r, se(e.props.children, i));
                  e.type !== G && (0, o.q4)(!1), e.props.index && e.props.children && (0, o.q4)(!1);
                  let s = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    Component: e.props.Component,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    ErrorBoundary: e.props.ErrorBoundary,
                    hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                    lazy: e.props.lazy
                  };
                  e.props.children && (s.children = se(e.props.children, i)), r.push(s)
                })), r
              }

              function le(e) {
                return T(e)
              }

              function ue(e) {
                let t = {
                  hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
                };
                return e.Component && Object.assign(t, {
                  element: n.createElement(e.Component),
                  Component: void 0
                }), e.ErrorBoundary && Object.assign(t, {
                  errorElement: n.createElement(e.ErrorBoundary),
                  ErrorBoundary: void 0
                }), t
              }

              function ce(e, t) {
                return (0, o.gv)({
                  basename: null == t ? void 0 : t.basename,
                  future: a({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, o.Wi)({
                    initialEntries: null == t ? void 0 : t.initialEntries,
                    initialIndex: null == t ? void 0 : t.initialIndex
                  }),
                  hydrationData: null == t ? void 0 : t.hydrationData,
                  routes: e,
                  mapRouteProperties: ue
                }).initialize()
              }

              function de() {
                return de = Object.assign ? Object.assign.bind() : function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                  }
                  return e
                }, de.apply(this, arguments)
              }

              function fe(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
              }
              const he = "get",
                pe = "application/x-www-form-urlencoded";

              function me(e) {
                return null != e && "string" == typeof e.tagName
              }

              function ve(e) {
                return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
                  let n = e[r];
                  return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
                    [r, n]
                  ])
                }), []))
              }
              let ye = null;
              const ge = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

              function be(e) {
                return null == e || ge.has(e) ? e : null
              }

              function we(e, t) {
                let r, n, a, i, s;
                if (me(l = e) && "form" === l.tagName.toLowerCase()) {
                  let s = e.getAttribute("action");
                  n = s ? (0, o.mc)(s, t) : null, r = e.getAttribute("method") || he, a = be(e.getAttribute("enctype")) || pe, i = new FormData(e)
                } else if (function(e) {
                    return me(e) && "button" === e.tagName.toLowerCase()
                  }(e) || function(e) {
                    return me(e) && "input" === e.tagName.toLowerCase()
                  }(e) && ("submit" === e.type || "image" === e.type)) {
                  let s = e.form;
                  if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                  let l = e.getAttribute("formaction") || s.getAttribute("action");
                  if (n = l ? (0, o.mc)(l, t) : null, r = e.getAttribute("formmethod") || s.getAttribute("method") || he, a = be(e.getAttribute("formenctype")) || be(s.getAttribute("enctype")) || pe, i = new FormData(s, e), ! function() {
                      if (null === ye) try {
                        new FormData(document.createElement("form"), 0), ye = !1
                      } catch (e) {
                        ye = !0
                      }
                      return ye
                    }()) {
                    let {
                      name: t,
                      type: r,
                      value: n
                    } = e;
                    if ("image" === r) {
                      let e = t ? t + "." : "";
                      i.append(e + "x", "0"), i.append(e + "y", "0")
                    } else t && i.append(t, n)
                  }
                } else {
                  if (me(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                  r = he, n = null, a = pe, s = e
                }
                var l;
                return i && "text/plain" === a && (s = i, i = void 0), {
                  action: n,
                  method: r.toLowerCase(),
                  encType: a,
                  formData: i,
                  body: s
                }
              }
              const Ee = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
                Se = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
                Re = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

              function xe(e, t) {
                return (0, o.gv)({
                  basename: null == t ? void 0 : t.basename,
                  future: de({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, o.iU)({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || ke(),
                  routes: e,
                  mapRouteProperties: ue,
                  window: null == t ? void 0 : t.window
                }).initialize()
              }

              function Ce(e, t) {
                return (0, o.gv)({
                  basename: null == t ? void 0 : t.basename,
                  future: de({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, o.Yf)({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || ke(),
                  routes: e,
                  mapRouteProperties: ue,
                  window: null == t ? void 0 : t.window
                }).initialize()
              }

              function ke() {
                var e;
                let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
                return t && t.errors && (t = de({}, t, {
                  errors: _e(t.errors)
                })), t
              }

              function _e(e) {
                if (!e) return null;
                let t = Object.entries(e),
                  r = {};
                for (let [e, n] of t)
                  if (n && "RouteErrorResponse" === n.__type) r[e] = new o.sZ(n.status, n.statusText, n.data, !0 === n.internal);
                  else if (n && "Error" === n.__type) {
                  if (n.__subType) {
                    let t = window[n.__subType];
                    if ("function" == typeof t) try {
                      let o = new t(n.message);
                      o.stack = "", r[e] = o
                    } catch (e) {}
                  }
                  if (null == r[e]) {
                    let t = new Error(n.message);
                    t.stack = "", r[e] = t
                  }
                } else r[e] = n;
                return r
              }
              const Le = n.createContext({
                  isTransitioning: !1
                }),
                De = n.startTransition;
              class Pe {
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

              function Te(e) {
                let {
                  fallbackElement: t,
                  router: r,
                  future: o
                } = e, [a, l] = n.useState(r.state), [u, c] = n.useState(), [d, f] = n.useState({
                  isTransitioning: !1
                }), [h, p] = n.useState(), [m, v] = n.useState(), [y, g] = n.useState(), {
                  v7_startTransition: b
                } = o || {}, w = n.useCallback((e => {
                  b ? function(e) {
                    De ? De(e) : e()
                  }(e) : e()
                }), [b]), E = n.useCallback(((e, t) => {
                  let {
                    unstable_viewTransitionOpts: n
                  } = t;
                  n && null != r.window && "function" == typeof r.window.document.startViewTransition ? m && h ? (h.resolve(), m.skipTransition(), g({
                    state: e,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : (c(e), f({
                    isTransitioning: !0,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : w((() => l(e)))
                }), [w, m, h, r.window]);
                n.useLayoutEffect((() => r.subscribe(E)), [r, E]), n.useEffect((() => {
                  d.isTransitioning && p(new Pe)
                }), [d.isTransitioning]), n.useEffect((() => {
                  if (h && u && r.window) {
                    let e = u,
                      t = h.promise,
                      n = r.window.document.startViewTransition((async () => {
                        w((() => l(e))), await t
                      }));
                    n.finished.finally((() => {
                      p(void 0), v(void 0), c(void 0), f({
                        isTransitioning: !1
                      })
                    })), v(n)
                  }
                }), [w, u, h, r.window]), n.useEffect((() => {
                  h && u && a.location.key === u.location.key && h.resolve()
                }), [h, m, a.location, u]), n.useEffect((() => {
                  !d.isTransitioning && y && (c(y.state), f({
                    isTransitioning: !0,
                    currentLocation: y.currentLocation,
                    nextLocation: y.nextLocation
                  }), g(void 0))
                }), [d.isTransitioning, y]);
                let S = n.useMemo((() => ({
                    createHref: r.createHref,
                    encodeLocation: r.encodeLocation,
                    go: e => r.navigate(e),
                    push: (e, t, n) => r.navigate(e, {
                      state: t,
                      preventScrollReset: null == n ? void 0 : n.preventScrollReset
                    }),
                    replace: (e, t, n) => r.navigate(e, {
                      replace: !0,
                      state: t,
                      preventScrollReset: null == n ? void 0 : n.preventScrollReset
                    })
                  })), [r]),
                  R = r.basename || "/",
                  x = n.useMemo((() => ({
                    router: r,
                    navigator: S,
                    static: !1,
                    basename: R
                  })), [r, S, R]);
                return n.createElement(n.Fragment, null, n.createElement(i.Provider, {
                  value: x
                }, n.createElement(s.Provider, {
                  value: a
                }, n.createElement(Le.Provider, {
                  value: d
                }, n.createElement(ee, {
                  basename: R,
                  location: a.location,
                  navigationType: a.historyAction,
                  navigator: S
                }, a.initialized ? n.createElement(Ue, {
                  routes: r.routes,
                  state: a
                }) : t)))), null)
              }

              function Ue(e) {
                let {
                  routes: t,
                  state: r
                } = e;
                return k(t, void 0, r)
              }

              function Ae(e) {
                let {
                  basename: t,
                  children: r,
                  future: a,
                  window: i
                } = e, s = n.useRef();
                null == s.current && (s.current = (0, o.iU)({
                  window: i,
                  v5Compat: !0
                }));
                let l = s.current,
                  [u, c] = n.useState({
                    action: l.action,
                    location: l.location
                  }),
                  {
                    v7_startTransition: d
                  } = a || {},
                  f = n.useCallback((e => {
                    d && De ? De((() => c(e))) : c(e)
                  }), [c, d]);
                return n.useLayoutEffect((() => l.listen(f)), [l, f]), n.createElement(ee, {
                  basename: t,
                  children: r,
                  location: u.location,
                  navigationType: u.action,
                  navigator: l
                })
              }

              function je(e) {
                let {
                  basename: t,
                  children: r,
                  future: a,
                  window: i
                } = e, s = n.useRef();
                null == s.current && (s.current = (0, o.Yf)({
                  window: i,
                  v5Compat: !0
                }));
                let l = s.current,
                  [u, c] = n.useState({
                    action: l.action,
                    location: l.location
                  }),
                  {
                    v7_startTransition: d
                  } = a || {},
                  f = n.useCallback((e => {
                    d && De ? De((() => c(e))) : c(e)
                  }), [c, d]);
                return n.useLayoutEffect((() => l.listen(f)), [l, f]), n.createElement(ee, {
                  basename: t,
                  children: r,
                  location: u.location,
                  navigationType: u.action,
                  navigator: l
                })
              }

              function Oe(e) {
                let {
                  basename: t,
                  children: r,
                  future: o,
                  history: a
                } = e, [i, s] = n.useState({
                  action: a.action,
                  location: a.location
                }), {
                  v7_startTransition: l
                } = o || {}, u = n.useCallback((e => {
                  l && De ? De((() => s(e))) : s(e)
                }), [s, l]);
                return n.useLayoutEffect((() => a.listen(u)), [a, u]), n.createElement(ee, {
                  basename: t,
                  children: r,
                  location: i.location,
                  navigationType: i.action,
                  navigator: a
                })
              }
              const Me = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                Ne = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                Be = n.forwardRef((function(e, t) {
                  let r, {
                      onClick: a,
                      relative: i,
                      reloadDocument: s,
                      replace: l,
                      state: c,
                      target: d,
                      to: f,
                      preventScrollReset: p,
                      unstable_viewTransition: m
                    } = e,
                    v = fe(e, Ee),
                    {
                      basename: y
                    } = n.useContext(u),
                    g = !1;
                  if ("string" == typeof f && Ne.test(f) && (r = f, Me)) try {
                    let e = new URL(window.location.href),
                      t = f.startsWith("//") ? new URL(e.protocol + f) : new URL(f),
                      r = (0, o.mc)(t.pathname, y);
                    t.origin === e.origin && null != r ? f = r + t.search + t.hash : g = !0
                  } catch (e) {}
                  let b = h(f, {
                      relative: i
                    }),
                    w = Ve(f, {
                      replace: l,
                      state: c,
                      target: d,
                      preventScrollReset: p,
                      relative: i,
                      unstable_viewTransition: m
                    });
                  return n.createElement("a", de({}, v, {
                    href: r || b,
                    onClick: g || s ? a : function(e) {
                      a && a(e), e.defaultPrevented || w(e)
                    },
                    ref: t,
                    target: d
                  }))
                })),
                Fe = n.forwardRef((function(e, t) {
                  let {
                    "aria-current": r = "page",
                    caseSensitive: o = !1,
                    className: a = "",
                    end: i = !1,
                    style: l,
                    to: c,
                    unstable_viewTransition: d,
                    children: f
                  } = e, h = fe(e, Se), p = x(c, {
                    relative: h.relative
                  }), v = m(), y = n.useContext(s), {
                    navigator: g
                  } = n.useContext(u), b = null != y && st(p) && !0 === d, w = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname, E = v.pathname, S = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
                  o || (E = E.toLowerCase(), S = S ? S.toLowerCase() : null, w = w.toLowerCase());
                  let R, C = E === w || !i && E.startsWith(w) && "/" === E.charAt(w.length),
                    k = null != S && (S === w || !i && S.startsWith(w) && "/" === S.charAt(w.length)),
                    _ = {
                      isActive: C,
                      isPending: k,
                      isTransitioning: b
                    },
                    L = C ? r : void 0;
                  R = "function" == typeof a ? a(_) : [a, C ? "active" : null, k ? "pending" : null, b ? "transitioning" : null].filter(Boolean).join(" ");
                  let D = "function" == typeof l ? l(_) : l;
                  return n.createElement(Be, de({}, h, {
                    "aria-current": L,
                    className: R,
                    ref: t,
                    style: D,
                    to: c,
                    unstable_viewTransition: d
                  }), "function" == typeof f ? f(_) : f)
                })),
                Ie = n.forwardRef(((e, t) => {
                  let r = Qe();
                  return n.createElement(qe, de({}, e, {
                    submit: r,
                    ref: t
                  }))
                })),
                qe = n.forwardRef(((e, t) => {
                  let {
                    reloadDocument: r,
                    replace: o,
                    state: a,
                    method: i = he,
                    action: s,
                    onSubmit: l,
                    submit: u,
                    relative: c,
                    preventScrollReset: d,
                    unstable_viewTransition: f
                  } = e, h = fe(e, Re), p = "get" === i.toLowerCase() ? "get" : "post", m = Ze(s, {
                    relative: c
                  });
                  return n.createElement("form", de({
                    ref: t,
                    method: p,
                    action: m,
                    onSubmit: r ? l : e => {
                      if (l && l(e), e.defaultPrevented) return;
                      e.preventDefault();
                      let t = e.nativeEvent.submitter,
                        r = (null == t ? void 0 : t.getAttribute("formmethod")) || i;
                      u(t || e.currentTarget, {
                        method: r,
                        replace: o,
                        state: a,
                        relative: c,
                        preventScrollReset: d,
                        unstable_viewTransition: f
                      })
                    }
                  }, h))
                }));

              function ze(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = e;
                return ot({
                  getKey: t,
                  storageKey: r
                }), null
              }
              var $e, We;

              function He(e) {
                let t = n.useContext(i);
                return t || (0, o.q4)(!1), t
              }

              function Ke(e) {
                let t = n.useContext(s);
                return t || (0, o.q4)(!1), t
              }

              function Ve(e, t) {
                let {
                  target: r,
                  replace: a,
                  state: i,
                  preventScrollReset: s,
                  relative: l,
                  unstable_viewTransition: u
                } = void 0 === t ? {} : t, c = b(), d = m(), f = x(e, {
                  relative: l
                });
                return n.useCallback((t => {
                  if (function(e, t) {
                      return !(0 !== e.button || t && "_self" !== t || function(e) {
                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                      }(e))
                    }(t, r)) {
                    t.preventDefault();
                    let r = void 0 !== a ? a : (0, o.Ep)(d) === (0, o.Ep)(f);
                    c(e, {
                      replace: r,
                      state: i,
                      preventScrollReset: s,
                      relative: l,
                      unstable_viewTransition: u
                    })
                  }
                }), [d, c, f, a, i, r, e, s, l, u])
              }

              function Je(e) {
                let t = n.useRef(ve(e)),
                  r = n.useRef(!1),
                  o = m(),
                  a = n.useMemo((() => function(e, t) {
                    let r = ve(e);
                    return t && t.forEach(((e, n) => {
                      r.has(n) || t.getAll(n).forEach((e => {
                        r.append(n, e)
                      }))
                    })), r
                  }(o.search, r.current ? null : t.current)), [o.search]),
                  i = b(),
                  s = n.useCallback(((e, t) => {
                    const n = ve("function" == typeof e ? e(a) : e);
                    r.current = !0, i("?" + n, t)
                  }), [i, a]);
                return [a, s]
              }

              function Ye() {
                if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
              }

              function Qe() {
                let {
                  router: e
                } = He($e.UseSubmit), {
                  basename: t
                } = n.useContext(u), r = N();
                return n.useCallback((function(n, o) {
                  void 0 === o && (o = {}), Ye();
                  let {
                    action: a,
                    method: i,
                    encType: s,
                    formData: l,
                    body: u
                  } = we(n, t);
                  e.navigate(o.action || a, {
                    preventScrollReset: o.preventScrollReset,
                    formData: l,
                    body: u,
                    formMethod: o.method || i,
                    formEncType: o.encType || s,
                    replace: o.replace,
                    state: o.state,
                    fromRouteId: r,
                    unstable_viewTransition: o.unstable_viewTransition
                  })
                }), [e, t, r])
              }

              function Xe(e, t) {
                let {
                  router: r
                } = He($e.UseSubmitFetcher), {
                  basename: a
                } = n.useContext(u);
                return n.useCallback((function(n, i) {
                  void 0 === i && (i = {}), Ye();
                  let {
                    action: s,
                    method: l,
                    encType: u,
                    formData: c,
                    body: d
                  } = we(n, a);
                  null == t && (0, o.q4)(!1), r.fetch(e, t, i.action || s, {
                    preventScrollReset: i.preventScrollReset,
                    formData: c,
                    body: d,
                    formMethod: i.method || l,
                    formEncType: i.encType || u
                  })
                }), [r, a, e, t])
              }

              function Ze(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t, {
                  basename: a
                } = n.useContext(u), i = n.useContext(d);
                i || (0, o.q4)(!1);
                let [s] = i.matches.slice(-1), l = de({}, x(e || ".", {
                  relative: r
                })), c = m();
                if (null == e && (l.search = c.search, s.route.index)) {
                  let e = new URLSearchParams(l.search);
                  e.delete("index"), l.search = e.toString() ? "?" + e.toString() : ""
                }
                return e && "." !== e || !s.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== a && (l.pathname = "/" === l.pathname ? a : (0, o.En)([a, l.pathname])), (0, o.Ep)(l)
              }(function(e) {
                e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
              })($e || ($e = {})),
              function(e) {
                e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
              }(We || (We = {}));
              let Ge = 0;

              function et() {
                var e;
                let {
                  router: t
                } = He($e.UseFetcher), r = n.useContext(d);
                r || (0, o.q4)(!1);
                let a = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
                null == a && (0, o.q4)(!1);
                let [i] = n.useState((() => String(++Ge))), [s] = n.useState((() => (a || (0, o.q4)(!1), function(e, t) {
                  return n.forwardRef(((r, o) => {
                    let a = Xe(e, t);
                    return n.createElement(qe, de({}, r, {
                      ref: o,
                      submit: a
                    }))
                  }))
                }(i, a)))), [l] = n.useState((() => e => {
                  t || (0, o.q4)(!1), a || (0, o.q4)(!1), t.fetch(i, a, e)
                })), u = Xe(i, a), c = t.getFetcher(i), f = n.useMemo((() => de({
                  Form: s,
                  submit: u,
                  load: l
                }, c)), [c, s, u, l]);
                return n.useEffect((() => () => {
                  t ? t.deleteFetcher(i) : console.warn("No router available to clean up from useFetcher()")
                }), [t, i]), f
              }

              function tt() {
                return [...Ke(We.UseFetchers).fetchers.values()]
              }
              const rt = "react-router-scroll-positions";
              let nt = {};

              function ot(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = void 0 === e ? {} : e, {
                  router: a
                } = He($e.UseScrollRestoration), {
                  restoreScrollPosition: i,
                  preventScrollReset: s
                } = Ke(We.UseScrollRestoration), {
                  basename: l
                } = n.useContext(u), c = m(), d = I(), f = B();
                n.useEffect((() => (window.history.scrollRestoration = "manual", () => {
                    window.history.scrollRestoration = "auto"
                  })), []),
                  function(e, t) {
                    let {
                      capture: r
                    } = {};
                    n.useEffect((() => {
                      let t = null != r ? {
                        capture: r
                      } : void 0;
                      return window.addEventListener("pagehide", e, t), () => {
                        window.removeEventListener("pagehide", e, t)
                      }
                    }), [e, r])
                  }(n.useCallback((() => {
                    if ("idle" === f.state) {
                      let e = (t ? t(c, d) : null) || c.key;
                      nt[e] = window.scrollY
                    }
                    try {
                      sessionStorage.setItem(r || rt, JSON.stringify(nt))
                    } catch (e) {}
                    window.history.scrollRestoration = "auto"
                  }), [r, t, f.state, c, d])), "undefined" != typeof document && (n.useLayoutEffect((() => {
                    try {
                      let e = sessionStorage.getItem(r || rt);
                      e && (nt = JSON.parse(e))
                    } catch (e) {}
                  }), [r]), n.useLayoutEffect((() => {
                    let e = t && "/" !== l ? (e, r) => t(de({}, e, {
                        pathname: (0, o.mc)(e.pathname, l) || e.pathname
                      }), r) : t,
                      r = null == a ? void 0 : a.enableScrollRestoration(nt, (() => window.scrollY), e);
                    return () => r && r()
                  }), [a, l, t]), n.useLayoutEffect((() => {
                    if (!1 !== i)
                      if ("number" != typeof i) {
                        if (c.hash) {
                          let e = document.getElementById(decodeURIComponent(c.hash.slice(1)));
                          if (e) return void e.scrollIntoView()
                        }!0 !== s && window.scrollTo(0, 0)
                      } else window.scrollTo(0, i)
                  }), [c, i, s]))
              }

              function at(e, t) {
                let {
                  capture: r
                } = t || {};
                n.useEffect((() => {
                  let t = null != r ? {
                    capture: r
                  } : void 0;
                  return window.addEventListener("beforeunload", e, t), () => {
                    window.removeEventListener("beforeunload", e, t)
                  }
                }), [e, r])
              }

              function it(e) {
                let {
                  when: t,
                  message: r
                } = e, o = J(t);
                n.useEffect((() => {
                  "blocked" === o.state && (window.confirm(r) ? setTimeout(o.proceed, 0) : o.reset())
                }), [o, r]), n.useEffect((() => {
                  "blocked" !== o.state || t || o.reset()
                }), [o, t])
              }

              function st(e, t) {
                void 0 === t && (t = {});
                let r = n.useContext(Le);
                null == r && (0, o.q4)(!1);
                let {
                  basename: a
                } = He($e.useViewTransitionState), i = x(e, {
                  relative: t.relative
                });
                if (!r.isTransitioning) return !1;
                let s = (0, o.mc)(r.currentLocation.pathname, a) || r.currentLocation.pathname,
                  l = (0, o.mc)(r.nextLocation.pathname, a) || r.nextLocation.pathname;
                return null != (0, o.ot)(i.pathname, l) || null != (0, o.ot)(i.pathname, s)
              }
            },
            2096: (e, t, r) => {
              "use strict";
              r.r(t), r.d(t, {
                AbortedDeferredError: () => o.ay,
                Await: () => re,
                BrowserRouter: () => Ae,
                Form: () => Ie,
                HashRouter: () => je,
                Link: () => Be,
                MemoryRouter: () => Q,
                NavLink: () => Fe,
                Navigate: () => X,
                NavigationType: () => o.So,
                Outlet: () => Z,
                Route: () => G,
                Router: () => ee,
                RouterProvider: () => Te,
                Routes: () => te,
                ScrollRestoration: () => ze,
                UNSAFE_DataRouterContext: () => i,
                UNSAFE_DataRouterStateContext: () => s,
                UNSAFE_LocationContext: () => c,
                UNSAFE_NavigationContext: () => u,
                UNSAFE_RouteContext: () => d,
                UNSAFE_ViewTransitionContext: () => Le,
                UNSAFE_useRouteId: () => N,
                UNSAFE_useScrollRestoration: () => ot,
                createBrowserRouter: () => xe,
                createHashRouter: () => Ce,
                createMemoryRouter: () => ce,
                createPath: () => o.Ep,
                createRoutesFromChildren: () => se,
                createRoutesFromElements: () => se,
                createSearchParams: () => ve,
                defer: () => o.Qv,
                generatePath: () => o.Yz,
                isRouteErrorResponse: () => o.e8,
                json: () => o.qS,
                matchPath: () => o.ot,
                matchRoutes: () => o.Cm,
                parsePath: () => o.O8,
                redirect: () => o.ch,
                redirectDocument: () => o.kt,
                renderMatches: () => le,
                resolvePath: () => o.MP,
                unstable_HistoryRouter: () => Oe,
                unstable_useBlocker: () => J,
                unstable_usePrompt: () => it,
                unstable_useViewTransitionState: () => st,
                useActionData: () => $,
                useAsyncError: () => K,
                useAsyncValue: () => H,
                useBeforeUnload: () => at,
                useFetcher: () => et,
                useFetchers: () => tt,
                useFormAction: () => Ze,
                useHref: () => h,
                useInRouterContext: () => p,
                useLinkClickHandler: () => Ve,
                useLoaderData: () => q,
                useLocation: () => m,
                useMatch: () => y,
                useMatches: () => I,
                useNavigate: () => b,
                useNavigation: () => B,
                useNavigationType: () => v,
                useOutlet: () => S,
                useOutletContext: () => E,
                useParams: () => R,
                useResolvedPath: () => x,
                useRevalidator: () => F,
                useRouteError: () => W,
                useRouteLoaderData: () => z,
                useRoutes: () => C,
                useSearchParams: () => Je,
                useSubmit: () => Qe
              });
              var n = r(8200),
                o = r(6680);

              function a() {
                return a = Object.assign ? Object.assign.bind() : function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                  }
                  return e
                }, a.apply(this, arguments)
              }
              const i = n.createContext(null),
                s = n.createContext(null),
                l = n.createContext(null),
                u = n.createContext(null),
                c = n.createContext(null),
                d = n.createContext({
                  outlet: null,
                  matches: [],
                  isDataRoute: !1
                }),
                f = n.createContext(null);

              function h(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t;
                p() || (0, o.q4)(!1);
                let {
                  basename: a,
                  navigator: i
                } = n.useContext(u), {
                  hash: s,
                  pathname: l,
                  search: c
                } = x(e, {
                  relative: r
                }), d = l;
                return "/" !== a && (d = "/" === l ? a : (0, o.En)([a, l])), i.createHref({
                  pathname: d,
                  search: c,
                  hash: s
                })
              }

              function p() {
                return null != n.useContext(c)
              }

              function m() {
                return p() || (0, o.q4)(!1), n.useContext(c).location
              }

              function v() {
                return n.useContext(c).navigationType
              }

              function y(e) {
                p() || (0, o.q4)(!1);
                let {
                  pathname: t
                } = m();
                return n.useMemo((() => (0, o.ot)(e, t)), [t, e])
              }

              function g(e) {
                n.useContext(u).static || n.useLayoutEffect(e)
              }

              function b() {
                let {
                  isDataRoute: e
                } = n.useContext(d);
                return e ? function() {
                  let {
                    router: e
                  } = j(U.UseNavigateStable), t = M(A.UseNavigateStable), r = n.useRef(!1);
                  return g((() => {
                    r.current = !0
                  })), n.useCallback((function(n, o) {
                    void 0 === o && (o = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, a({
                      fromRouteId: t
                    }, o)))
                  }), [e, t])
                }() : function() {
                  p() || (0, o.q4)(!1);
                  let e = n.useContext(i),
                    {
                      basename: t,
                      navigator: r
                    } = n.useContext(u),
                    {
                      matches: a
                    } = n.useContext(d),
                    {
                      pathname: s
                    } = m(),
                    l = JSON.stringify((0, o.em)(a).map((e => e.pathnameBase))),
                    c = n.useRef(!1);
                  return g((() => {
                    c.current = !0
                  })), n.useCallback((function(n, a) {
                    if (void 0 === a && (a = {}), !c.current) return;
                    if ("number" == typeof n) return void r.go(n);
                    let i = (0, o._)(n, JSON.parse(l), s, "path" === a.relative);
                    null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, o.En)([t, i.pathname])), (a.replace ? r.replace : r.push)(i, a.state, a)
                  }), [t, r, l, s, e])
                }()
              }
              const w = n.createContext(null);

              function E() {
                return n.useContext(w)
              }

              function S(e) {
                let t = n.useContext(d).outlet;
                return t ? n.createElement(w.Provider, {
                  value: e
                }, t) : t
              }

              function R() {
                let {
                  matches: e
                } = n.useContext(d), t = e[e.length - 1];
                return t ? t.params : {}
              }

              function x(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t, {
                  matches: a
                } = n.useContext(d), {
                  pathname: i
                } = m(), s = JSON.stringify((0, o.em)(a).map((e => e.pathnameBase)));
                return n.useMemo((() => (0, o._)(e, JSON.parse(s), i, "path" === r)), [e, s, i, r])
              }

              function C(e, t) {
                return k(e, t)
              }

              function k(e, t, r) {
                p() || (0, o.q4)(!1);
                let {
                  navigator: i
                } = n.useContext(u), {
                  matches: s
                } = n.useContext(d), l = s[s.length - 1], f = l ? l.params : {}, h = (l && l.pathname, l ? l.pathnameBase : "/");
                l && l.route;
                let v, y = m();
                if (t) {
                  var g;
                  let e = "string" == typeof t ? (0, o.O8)(t) : t;
                  "/" === h || (null == (g = e.pathname) ? void 0 : g.startsWith(h)) || (0, o.q4)(!1), v = e
                } else v = y;
                let b = v.pathname || "/",
                  w = "/" === h ? b : b.slice(h.length) || "/",
                  E = (0, o.Cm)(e, {
                    pathname: w
                  }),
                  S = T(E && E.map((e => Object.assign({}, e, {
                    params: Object.assign({}, f, e.params),
                    pathname: (0, o.En)([h, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
                    pathnameBase: "/" === e.pathnameBase ? h : (0, o.En)([h, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                  }))), s, r);
                return t && S ? n.createElement(c.Provider, {
                  value: {
                    location: a({
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default"
                    }, v),
                    navigationType: o.So.Pop
                  }
                }, S) : S
              }

              function _() {
                let e = W(),
                  t = (0, o.e8)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                  r = e instanceof Error ? e.stack : null,
                  a = {
                    padding: "0.5rem",
                    backgroundColor: "rgba(200,200,200, 0.5)"
                  };
                return n.createElement(n.Fragment, null, n.createElement("h2", null, "Unexpected Application Error!"), n.createElement("h3", {
                  style: {
                    fontStyle: "italic"
                  }
                }, t), r ? n.createElement("pre", {
                  style: a
                }, r) : null, null)
              }
              const L = n.createElement(_, null);
              class D extends n.Component {
                constructor(e) {
                  super(e), this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error
                  }
                }
                static getDerivedStateFromError(e) {
                  return {
                    error: e
                  }
                }
                static getDerivedStateFromProps(e, t) {
                  return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                    error: e.error,
                    location: e.location,
                    revalidation: e.revalidation
                  } : {
                    error: e.error || t.error,
                    location: t.location,
                    revalidation: e.revalidation || t.revalidation
                  }
                }
                componentDidCatch(e, t) {
                  console.error("React Router caught the following error during render", e, t)
                }
                render() {
                  return this.state.error ? n.createElement(d.Provider, {
                    value: this.props.routeContext
                  }, n.createElement(f.Provider, {
                    value: this.state.error,
                    children: this.props.component
                  })) : this.props.children
                }
              }

              function P(e) {
                let {
                  routeContext: t,
                  match: r,
                  children: o
                } = e, a = n.useContext(i);
                return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(d.Provider, {
                  value: t
                }, o)
              }

              function T(e, t, r) {
                var a;
                if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
                  var i;
                  if (null == (i = r) || !i.errors) return null;
                  e = r.matches
                }
                let s = e,
                  l = null == (a = r) ? void 0 : a.errors;
                if (null != l) {
                  let e = s.findIndex((e => e.route.id && (null == l ? void 0 : l[e.route.id])));
                  e >= 0 || (0, o.q4)(!1), s = s.slice(0, Math.min(s.length, e + 1))
                }
                return s.reduceRight(((e, o, a) => {
                  let i = o.route.id ? null == l ? void 0 : l[o.route.id] : null,
                    u = null;
                  r && (u = o.route.errorElement || L);
                  let c = t.concat(s.slice(0, a + 1)),
                    d = () => {
                      let t;
                      return t = i ? u : o.route.Component ? n.createElement(o.route.Component, null) : o.route.element ? o.route.element : e, n.createElement(P, {
                        match: o,
                        routeContext: {
                          outlet: e,
                          matches: c,
                          isDataRoute: null != r
                        },
                        children: t
                      })
                    };
                  return r && (o.route.ErrorBoundary || o.route.errorElement || 0 === a) ? n.createElement(D, {
                    location: r.location,
                    revalidation: r.revalidation,
                    component: u,
                    error: i,
                    children: d(),
                    routeContext: {
                      outlet: null,
                      matches: c,
                      isDataRoute: !0
                    }
                  }) : d()
                }), null)
              }
              var U = function(e) {
                  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
                }(U || {}),
                A = function(e) {
                  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
                }(A || {});

              function j(e) {
                let t = n.useContext(i);
                return t || (0, o.q4)(!1), t
              }

              function O(e) {
                let t = n.useContext(s);
                return t || (0, o.q4)(!1), t
              }

              function M(e) {
                let t = function(e) {
                    let t = n.useContext(d);
                    return t || (0, o.q4)(!1), t
                  }(),
                  r = t.matches[t.matches.length - 1];
                return r.route.id || (0, o.q4)(!1), r.route.id
              }

              function N() {
                return M(A.UseRouteId)
              }

              function B() {
                return O(A.UseNavigation).navigation
              }

              function F() {
                let e = j(U.UseRevalidator),
                  t = O(A.UseRevalidator);
                return n.useMemo((() => ({
                  revalidate: e.router.revalidate,
                  state: t.revalidation
                })), [e.router.revalidate, t.revalidation])
              }

              function I() {
                let {
                  matches: e,
                  loaderData: t
                } = O(A.UseMatches);
                return n.useMemo((() => e.map((e => (0, o.WM)(e, t)))), [e, t])
              }

              function q() {
                let e = O(A.UseLoaderData),
                  t = M(A.UseLoaderData);
                if (!e.errors || null == e.errors[t]) return e.loaderData[t];
                console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
              }

              function z(e) {
                return O(A.UseRouteLoaderData).loaderData[e]
              }

              function $() {
                let e = O(A.UseActionData);
                return n.useContext(d) || (0, o.q4)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
              }

              function W() {
                var e;
                let t = n.useContext(f),
                  r = O(A.UseRouteError),
                  o = M(A.UseRouteError);
                return t || (null == (e = r.errors) ? void 0 : e[o])
              }

              function H() {
                let e = n.useContext(l);
                return null == e ? void 0 : e._data
              }

              function K() {
                let e = n.useContext(l);
                return null == e ? void 0 : e._error
              }
              let V = 0;

              function J(e) {
                let {
                  router: t,
                  basename: r
                } = j(U.UseBlocker), i = O(A.UseBlocker), [s, l] = n.useState(""), u = n.useCallback((t => {
                  if ("function" != typeof e) return !!e;
                  if ("/" === r) return e(t);
                  let {
                    currentLocation: n,
                    nextLocation: i,
                    historyAction: s
                  } = t;
                  return e({
                    currentLocation: a({}, n, {
                      pathname: (0, o.mc)(n.pathname, r) || n.pathname
                    }),
                    nextLocation: a({}, i, {
                      pathname: (0, o.mc)(i.pathname, r) || i.pathname
                    }),
                    historyAction: s
                  })
                }), [r, e]);
                return n.useEffect((() => {
                  let e = String(++V);
                  return l(e), () => t.deleteBlocker(e)
                }), [t]), n.useEffect((() => {
                  "" !== s && t.getBlocker(s, u)
                }), [t, s, u]), s && i.blockers.has(s) ? i.blockers.get(s) : o.ie
              }
              const Y = n.startTransition;

              function Q(e) {
                let {
                  basename: t,
                  children: r,
                  initialEntries: a,
                  initialIndex: i,
                  future: s
                } = e, l = n.useRef();
                null == l.current && (l.current = (0, o.Wi)({
                  initialEntries: a,
                  initialIndex: i,
                  v5Compat: !0
                }));
                let u = l.current,
                  [c, d] = n.useState({
                    action: u.action,
                    location: u.location
                  }),
                  {
                    v7_startTransition: f
                  } = s || {},
                  h = n.useCallback((e => {
                    f && Y ? Y((() => d(e))) : d(e)
                  }), [d, f]);
                return n.useLayoutEffect((() => u.listen(h)), [u, h]), n.createElement(ee, {
                  basename: t,
                  children: r,
                  location: c.location,
                  navigationType: c.action,
                  navigator: u
                })
              }

              function X(e) {
                let {
                  to: t,
                  replace: r,
                  state: a,
                  relative: i
                } = e;
                p() || (0, o.q4)(!1);
                let {
                  matches: s
                } = n.useContext(d), {
                  pathname: l
                } = m(), u = b(), c = (0, o._)(t, (0, o.em)(s).map((e => e.pathnameBase)), l, "path" === i), f = JSON.stringify(c);
                return n.useEffect((() => u(JSON.parse(f), {
                  replace: r,
                  state: a,
                  relative: i
                })), [u, f, i, r, a]), null
              }

              function Z(e) {
                return S(e.context)
              }

              function G(e) {
                (0, o.q4)(!1)
              }

              function ee(e) {
                let {
                  basename: t = "/",
                  children: r = null,
                  location: a,
                  navigationType: i = o.So.Pop,
                  navigator: s,
                  static: l = !1
                } = e;
                p() && (0, o.q4)(!1);
                let d = t.replace(/^\/*/, "/"),
                  f = n.useMemo((() => ({
                    basename: d,
                    navigator: s,
                    static: l
                  })), [d, s, l]);
                "string" == typeof a && (a = (0, o.O8)(a));
                let {
                  pathname: h = "/",
                  search: m = "",
                  hash: v = "",
                  state: y = null,
                  key: g = "default"
                } = a, b = n.useMemo((() => {
                  let e = (0, o.mc)(h, d);
                  return null == e ? null : {
                    location: {
                      pathname: e,
                      search: m,
                      hash: v,
                      state: y,
                      key: g
                    },
                    navigationType: i
                  }
                }), [d, h, m, v, y, g, i]);
                return null == b ? null : n.createElement(u.Provider, {
                  value: f
                }, n.createElement(c.Provider, {
                  children: r,
                  value: b
                }))
              }

              function te(e) {
                let {
                  children: t,
                  location: r
                } = e;
                return C(se(t), r)
              }

              function re(e) {
                let {
                  children: t,
                  errorElement: r,
                  resolve: o
                } = e;
                return n.createElement(ae, {
                  resolve: o,
                  errorElement: r
                }, n.createElement(ie, null, t))
              }
              var ne = function(e) {
                return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
              }(ne || {});
              const oe = new Promise((() => {}));
              class ae extends n.Component {
                constructor(e) {
                  super(e), this.state = {
                    error: null
                  }
                }
                static getDerivedStateFromError(e) {
                  return {
                    error: e
                  }
                }
                componentDidCatch(e, t) {
                  console.error("<Await> caught the following error during render", e, t)
                }
                render() {
                  let {
                    children: e,
                    errorElement: t,
                    resolve: r
                  } = this.props, a = null, i = ne.pending;
                  if (r instanceof Promise)
                    if (this.state.error) {
                      i = ne.error;
                      let e = this.state.error;
                      a = Promise.reject().catch((() => {})), Object.defineProperty(a, "_tracked", {
                        get: () => !0
                      }), Object.defineProperty(a, "_error", {
                        get: () => e
                      })
                    } else r._tracked ? (a = r, i = void 0 !== a._error ? ne.error : void 0 !== a._data ? ne.success : ne.pending) : (i = ne.pending, Object.defineProperty(r, "_tracked", {
                      get: () => !0
                    }), a = r.then((e => Object.defineProperty(r, "_data", {
                      get: () => e
                    })), (e => Object.defineProperty(r, "_error", {
                      get: () => e
                    }))));
                  else i = ne.success, a = Promise.resolve(), Object.defineProperty(a, "_tracked", {
                    get: () => !0
                  }), Object.defineProperty(a, "_data", {
                    get: () => r
                  });
                  if (i === ne.error && a._error instanceof o.ay) throw oe;
                  if (i === ne.error && !t) throw a._error;
                  if (i === ne.error) return n.createElement(l.Provider, {
                    value: a,
                    children: t
                  });
                  if (i === ne.success) return n.createElement(l.Provider, {
                    value: a,
                    children: e
                  });
                  throw a
                }
              }

              function ie(e) {
                let {
                  children: t
                } = e, r = H(), o = "function" == typeof t ? t(r) : t;
                return n.createElement(n.Fragment, null, o)
              }

              function se(e, t) {
                void 0 === t && (t = []);
                let r = [];
                return n.Children.forEach(e, ((e, a) => {
                  if (!n.isValidElement(e)) return;
                  let i = [...t, a];
                  if (e.type === n.Fragment) return void r.push.apply(r, se(e.props.children, i));
                  e.type !== G && (0, o.q4)(!1), e.props.index && e.props.children && (0, o.q4)(!1);
                  let s = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    Component: e.props.Component,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    ErrorBoundary: e.props.ErrorBoundary,
                    hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                    lazy: e.props.lazy
                  };
                  e.props.children && (s.children = se(e.props.children, i)), r.push(s)
                })), r
              }

              function le(e) {
                return T(e)
              }

              function ue(e) {
                let t = {
                  hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
                };
                return e.Component && Object.assign(t, {
                  element: n.createElement(e.Component),
                  Component: void 0
                }), e.ErrorBoundary && Object.assign(t, {
                  errorElement: n.createElement(e.ErrorBoundary),
                  ErrorBoundary: void 0
                }), t
              }

              function ce(e, t) {
                return (0, o.gv)({
                  basename: null == t ? void 0 : t.basename,
                  future: a({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, o.Wi)({
                    initialEntries: null == t ? void 0 : t.initialEntries,
                    initialIndex: null == t ? void 0 : t.initialIndex
                  }),
                  hydrationData: null == t ? void 0 : t.hydrationData,
                  routes: e,
                  mapRouteProperties: ue
                }).initialize()
              }

              function de() {
                return de = Object.assign ? Object.assign.bind() : function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                  }
                  return e
                }, de.apply(this, arguments)
              }

              function fe(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
              }
              const he = "get",
                pe = "application/x-www-form-urlencoded";

              function me(e) {
                return null != e && "string" == typeof e.tagName
              }

              function ve(e) {
                return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
                  let n = e[r];
                  return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
                    [r, n]
                  ])
                }), []))
              }
              let ye = null;
              const ge = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

              function be(e) {
                return null == e || ge.has(e) ? e : null
              }

              function we(e, t) {
                let r, n, a, i, s;
                if (me(l = e) && "form" === l.tagName.toLowerCase()) {
                  let s = e.getAttribute("action");
                  n = s ? (0, o.mc)(s, t) : null, r = e.getAttribute("method") || he, a = be(e.getAttribute("enctype")) || pe, i = new FormData(e)
                } else if (function(e) {
                    return me(e) && "button" === e.tagName.toLowerCase()
                  }(e) || function(e) {
                    return me(e) && "input" === e.tagName.toLowerCase()
                  }(e) && ("submit" === e.type || "image" === e.type)) {
                  let s = e.form;
                  if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                  let l = e.getAttribute("formaction") || s.getAttribute("action");
                  if (n = l ? (0, o.mc)(l, t) : null, r = e.getAttribute("formmethod") || s.getAttribute("method") || he, a = be(e.getAttribute("formenctype")) || be(s.getAttribute("enctype")) || pe, i = new FormData(s, e), ! function() {
                      if (null === ye) try {
                        new FormData(document.createElement("form"), 0), ye = !1
                      } catch (e) {
                        ye = !0
                      }
                      return ye
                    }()) {
                    let {
                      name: t,
                      type: r,
                      value: n
                    } = e;
                    if ("image" === r) {
                      let e = t ? t + "." : "";
                      i.append(e + "x", "0"), i.append(e + "y", "0")
                    } else t && i.append(t, n)
                  }
                } else {
                  if (me(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                  r = he, n = null, a = pe, s = e
                }
                var l;
                return i && "text/plain" === a && (s = i, i = void 0), {
                  action: n,
                  method: r.toLowerCase(),
                  encType: a,
                  formData: i,
                  body: s
                }
              }
              const Ee = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
                Se = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
                Re = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

              function xe(e, t) {
                return (0, o.gv)({
                  basename: null == t ? void 0 : t.basename,
                  future: de({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, o.iU)({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || ke(),
                  routes: e,
                  mapRouteProperties: ue,
                  window: null == t ? void 0 : t.window
                }).initialize()
              }

              function Ce(e, t) {
                return (0, o.gv)({
                  basename: null == t ? void 0 : t.basename,
                  future: de({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, o.Yf)({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || ke(),
                  routes: e,
                  mapRouteProperties: ue,
                  window: null == t ? void 0 : t.window
                }).initialize()
              }

              function ke() {
                var e;
                let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
                return t && t.errors && (t = de({}, t, {
                  errors: _e(t.errors)
                })), t
              }

              function _e(e) {
                if (!e) return null;
                let t = Object.entries(e),
                  r = {};
                for (let [e, n] of t)
                  if (n && "RouteErrorResponse" === n.__type) r[e] = new o.sZ(n.status, n.statusText, n.data, !0 === n.internal);
                  else if (n && "Error" === n.__type) {
                  if (n.__subType) {
                    let t = window[n.__subType];
                    if ("function" == typeof t) try {
                      let o = new t(n.message);
                      o.stack = "", r[e] = o
                    } catch (e) {}
                  }
                  if (null == r[e]) {
                    let t = new Error(n.message);
                    t.stack = "", r[e] = t
                  }
                } else r[e] = n;
                return r
              }
              const Le = n.createContext({
                  isTransitioning: !1
                }),
                De = n.startTransition;
              class Pe {
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

              function Te(e) {
                let {
                  fallbackElement: t,
                  router: r,
                  future: o
                } = e, [a, l] = n.useState(r.state), [u, c] = n.useState(), [d, f] = n.useState({
                  isTransitioning: !1
                }), [h, p] = n.useState(), [m, v] = n.useState(), [y, g] = n.useState(), {
                  v7_startTransition: b
                } = o || {}, w = n.useCallback((e => {
                  b ? function(e) {
                    De ? De(e) : e()
                  }(e) : e()
                }), [b]), E = n.useCallback(((e, t) => {
                  let {
                    unstable_viewTransitionOpts: n
                  } = t;
                  n && null != r.window && "function" == typeof r.window.document.startViewTransition ? m && h ? (h.resolve(), m.skipTransition(), g({
                    state: e,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : (c(e), f({
                    isTransitioning: !0,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : w((() => l(e)))
                }), [w, m, h, r.window]);
                n.useLayoutEffect((() => r.subscribe(E)), [r, E]), n.useEffect((() => {
                  d.isTransitioning && p(new Pe)
                }), [d.isTransitioning]), n.useEffect((() => {
                  if (h && u && r.window) {
                    let e = u,
                      t = h.promise,
                      n = r.window.document.startViewTransition((async () => {
                        w((() => l(e))), await t
                      }));
                    n.finished.finally((() => {
                      p(void 0), v(void 0), c(void 0), f({
                        isTransitioning: !1
                      })
                    })), v(n)
                  }
                }), [w, u, h, r.window]), n.useEffect((() => {
                  h && u && a.location.key === u.location.key && h.resolve()
                }), [h, m, a.location, u]), n.useEffect((() => {
                  !d.isTransitioning && y && (c(y.state), f({
                    isTransitioning: !0,
                    currentLocation: y.currentLocation,
                    nextLocation: y.nextLocation
                  }), g(void 0))
                }), [d.isTransitioning, y]);
                let S = n.useMemo((() => ({
                    createHref: r.createHref,
                    encodeLocation: r.encodeLocation,
                    go: e => r.navigate(e),
                    push: (e, t, n) => r.navigate(e, {
                      state: t,
                      preventScrollReset: null == n ? void 0 : n.preventScrollReset
                    }),
                    replace: (e, t, n) => r.navigate(e, {
                      replace: !0,
                      state: t,
                      preventScrollReset: null == n ? void 0 : n.preventScrollReset
                    })
                  })), [r]),
                  R = r.basename || "/",
                  x = n.useMemo((() => ({
                    router: r,
                    navigator: S,
                    static: !1,
                    basename: R
                  })), [r, S, R]);
                return n.createElement(n.Fragment, null, n.createElement(i.Provider, {
                  value: x
                }, n.createElement(s.Provider, {
                  value: a
                }, n.createElement(Le.Provider, {
                  value: d
                }, n.createElement(ee, {
                  basename: R,
                  location: a.location,
                  navigationType: a.historyAction,
                  navigator: S
                }, a.initialized ? n.createElement(Ue, {
                  routes: r.routes,
                  state: a
                }) : t)))), null)
              }

              function Ue(e) {
                let {
                  routes: t,
                  state: r
                } = e;
                return k(t, void 0, r)
              }

              function Ae(e) {
                let {
                  basename: t,
                  children: r,
                  future: a,
                  window: i
                } = e, s = n.useRef();
                null == s.current && (s.current = (0, o.iU)({
                  window: i,
                  v5Compat: !0
                }));
                let l = s.current,
                  [u, c] = n.useState({
                    action: l.action,
                    location: l.location
                  }),
                  {
                    v7_startTransition: d
                  } = a || {},
                  f = n.useCallback((e => {
                    d && De ? De((() => c(e))) : c(e)
                  }), [c, d]);
                return n.useLayoutEffect((() => l.listen(f)), [l, f]), n.createElement(ee, {
                  basename: t,
                  children: r,
                  location: u.location,
                  navigationType: u.action,
                  navigator: l
                })
              }

              function je(e) {
                let {
                  basename: t,
                  children: r,
                  future: a,
                  window: i
                } = e, s = n.useRef();
                null == s.current && (s.current = (0, o.Yf)({
                  window: i,
                  v5Compat: !0
                }));
                let l = s.current,
                  [u, c] = n.useState({
                    action: l.action,
                    location: l.location
                  }),
                  {
                    v7_startTransition: d
                  } = a || {},
                  f = n.useCallback((e => {
                    d && De ? De((() => c(e))) : c(e)
                  }), [c, d]);
                return n.useLayoutEffect((() => l.listen(f)), [l, f]), n.createElement(ee, {
                  basename: t,
                  children: r,
                  location: u.location,
                  navigationType: u.action,
                  navigator: l
                })
              }

              function Oe(e) {
                let {
                  basename: t,
                  children: r,
                  future: o,
                  history: a
                } = e, [i, s] = n.useState({
                  action: a.action,
                  location: a.location
                }), {
                  v7_startTransition: l
                } = o || {}, u = n.useCallback((e => {
                  l && De ? De((() => s(e))) : s(e)
                }), [s, l]);
                return n.useLayoutEffect((() => a.listen(u)), [a, u]), n.createElement(ee, {
                  basename: t,
                  children: r,
                  location: i.location,
                  navigationType: i.action,
                  navigator: a
                })
              }
              const Me = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                Ne = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                Be = n.forwardRef((function(e, t) {
                  let r, {
                      onClick: a,
                      relative: i,
                      reloadDocument: s,
                      replace: l,
                      state: c,
                      target: d,
                      to: f,
                      preventScrollReset: p,
                      unstable_viewTransition: m
                    } = e,
                    v = fe(e, Ee),
                    {
                      basename: y
                    } = n.useContext(u),
                    g = !1;
                  if ("string" == typeof f && Ne.test(f) && (r = f, Me)) try {
                    let e = new URL(window.location.href),
                      t = f.startsWith("//") ? new URL(e.protocol + f) : new URL(f),
                      r = (0, o.mc)(t.pathname, y);
                    t.origin === e.origin && null != r ? f = r + t.search + t.hash : g = !0
                  } catch (e) {}
                  let b = h(f, {
                      relative: i
                    }),
                    w = Ve(f, {
                      replace: l,
                      state: c,
                      target: d,
                      preventScrollReset: p,
                      relative: i,
                      unstable_viewTransition: m
                    });
                  return n.createElement("a", de({}, v, {
                    href: r || b,
                    onClick: g || s ? a : function(e) {
                      a && a(e), e.defaultPrevented || w(e)
                    },
                    ref: t,
                    target: d
                  }))
                })),
                Fe = n.forwardRef((function(e, t) {
                  let {
                    "aria-current": r = "page",
                    caseSensitive: o = !1,
                    className: a = "",
                    end: i = !1,
                    style: l,
                    to: c,
                    unstable_viewTransition: d,
                    children: f
                  } = e, h = fe(e, Se), p = x(c, {
                    relative: h.relative
                  }), v = m(), y = n.useContext(s), {
                    navigator: g
                  } = n.useContext(u), b = null != y && st(p) && !0 === d, w = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname, E = v.pathname, S = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
                  o || (E = E.toLowerCase(), S = S ? S.toLowerCase() : null, w = w.toLowerCase());
                  let R, C = E === w || !i && E.startsWith(w) && "/" === E.charAt(w.length),
                    k = null != S && (S === w || !i && S.startsWith(w) && "/" === S.charAt(w.length)),
                    _ = {
                      isActive: C,
                      isPending: k,
                      isTransitioning: b
                    },
                    L = C ? r : void 0;
                  R = "function" == typeof a ? a(_) : [a, C ? "active" : null, k ? "pending" : null, b ? "transitioning" : null].filter(Boolean).join(" ");
                  let D = "function" == typeof l ? l(_) : l;
                  return n.createElement(Be, de({}, h, {
                    "aria-current": L,
                    className: R,
                    ref: t,
                    style: D,
                    to: c,
                    unstable_viewTransition: d
                  }), "function" == typeof f ? f(_) : f)
                })),
                Ie = n.forwardRef(((e, t) => {
                  let r = Qe();
                  return n.createElement(qe, de({}, e, {
                    submit: r,
                    ref: t
                  }))
                })),
                qe = n.forwardRef(((e, t) => {
                  let {
                    reloadDocument: r,
                    replace: o,
                    state: a,
                    method: i = he,
                    action: s,
                    onSubmit: l,
                    submit: u,
                    relative: c,
                    preventScrollReset: d,
                    unstable_viewTransition: f
                  } = e, h = fe(e, Re), p = "get" === i.toLowerCase() ? "get" : "post", m = Ze(s, {
                    relative: c
                  });
                  return n.createElement("form", de({
                    ref: t,
                    method: p,
                    action: m,
                    onSubmit: r ? l : e => {
                      if (l && l(e), e.defaultPrevented) return;
                      e.preventDefault();
                      let t = e.nativeEvent.submitter,
                        r = (null == t ? void 0 : t.getAttribute("formmethod")) || i;
                      u(t || e.currentTarget, {
                        method: r,
                        replace: o,
                        state: a,
                        relative: c,
                        preventScrollReset: d,
                        unstable_viewTransition: f
                      })
                    }
                  }, h))
                }));

              function ze(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = e;
                return ot({
                  getKey: t,
                  storageKey: r
                }), null
              }
              var $e, We;

              function He(e) {
                let t = n.useContext(i);
                return t || (0, o.q4)(!1), t
              }

              function Ke(e) {
                let t = n.useContext(s);
                return t || (0, o.q4)(!1), t
              }

              function Ve(e, t) {
                let {
                  target: r,
                  replace: a,
                  state: i,
                  preventScrollReset: s,
                  relative: l,
                  unstable_viewTransition: u
                } = void 0 === t ? {} : t, c = b(), d = m(), f = x(e, {
                  relative: l
                });
                return n.useCallback((t => {
                  if (function(e, t) {
                      return !(0 !== e.button || t && "_self" !== t || function(e) {
                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                      }(e))
                    }(t, r)) {
                    t.preventDefault();
                    let r = void 0 !== a ? a : (0, o.Ep)(d) === (0, o.Ep)(f);
                    c(e, {
                      replace: r,
                      state: i,
                      preventScrollReset: s,
                      relative: l,
                      unstable_viewTransition: u
                    })
                  }
                }), [d, c, f, a, i, r, e, s, l, u])
              }

              function Je(e) {
                let t = n.useRef(ve(e)),
                  r = n.useRef(!1),
                  o = m(),
                  a = n.useMemo((() => function(e, t) {
                    let r = ve(e);
                    return t && t.forEach(((e, n) => {
                      r.has(n) || t.getAll(n).forEach((e => {
                        r.append(n, e)
                      }))
                    })), r
                  }(o.search, r.current ? null : t.current)), [o.search]),
                  i = b(),
                  s = n.useCallback(((e, t) => {
                    const n = ve("function" == typeof e ? e(a) : e);
                    r.current = !0, i("?" + n, t)
                  }), [i, a]);
                return [a, s]
              }

              function Ye() {
                if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
              }

              function Qe() {
                let {
                  router: e
                } = He($e.UseSubmit), {
                  basename: t
                } = n.useContext(u), r = N();
                return n.useCallback((function(n, o) {
                  void 0 === o && (o = {}), Ye();
                  let {
                    action: a,
                    method: i,
                    encType: s,
                    formData: l,
                    body: u
                  } = we(n, t);
                  e.navigate(o.action || a, {
                    preventScrollReset: o.preventScrollReset,
                    formData: l,
                    body: u,
                    formMethod: o.method || i,
                    formEncType: o.encType || s,
                    replace: o.replace,
                    state: o.state,
                    fromRouteId: r,
                    unstable_viewTransition: o.unstable_viewTransition
                  })
                }), [e, t, r])
              }

              function Xe(e, t) {
                let {
                  router: r
                } = He($e.UseSubmitFetcher), {
                  basename: a
                } = n.useContext(u);
                return n.useCallback((function(n, i) {
                  void 0 === i && (i = {}), Ye();
                  let {
                    action: s,
                    method: l,
                    encType: u,
                    formData: c,
                    body: d
                  } = we(n, a);
                  null == t && (0, o.q4)(!1), r.fetch(e, t, i.action || s, {
                    preventScrollReset: i.preventScrollReset,
                    formData: c,
                    body: d,
                    formMethod: i.method || l,
                    formEncType: i.encType || u
                  })
                }), [r, a, e, t])
              }

              function Ze(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t, {
                  basename: a
                } = n.useContext(u), i = n.useContext(d);
                i || (0, o.q4)(!1);
                let [s] = i.matches.slice(-1), l = de({}, x(e || ".", {
                  relative: r
                })), c = m();
                if (null == e && (l.search = c.search, s.route.index)) {
                  let e = new URLSearchParams(l.search);
                  e.delete("index"), l.search = e.toString() ? "?" + e.toString() : ""
                }
                return e && "." !== e || !s.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== a && (l.pathname = "/" === l.pathname ? a : (0, o.En)([a, l.pathname])), (0, o.Ep)(l)
              }(function(e) {
                e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
              })($e || ($e = {})),
              function(e) {
                e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
              }(We || (We = {}));
              let Ge = 0;

              function et() {
                var e;
                let {
                  router: t
                } = He($e.UseFetcher), r = n.useContext(d);
                r || (0, o.q4)(!1);
                let a = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
                null == a && (0, o.q4)(!1);
                let [i] = n.useState((() => String(++Ge))), [s] = n.useState((() => (a || (0, o.q4)(!1), function(e, t) {
                  return n.forwardRef(((r, o) => {
                    let a = Xe(e, t);
                    return n.createElement(qe, de({}, r, {
                      ref: o,
                      submit: a
                    }))
                  }))
                }(i, a)))), [l] = n.useState((() => e => {
                  t || (0, o.q4)(!1), a || (0, o.q4)(!1), t.fetch(i, a, e)
                })), u = Xe(i, a), c = t.getFetcher(i), f = n.useMemo((() => de({
                  Form: s,
                  submit: u,
                  load: l
                }, c)), [c, s, u, l]);
                return n.useEffect((() => () => {
                  t ? t.deleteFetcher(i) : console.warn("No router available to clean up from useFetcher()")
                }), [t, i]), f
              }

              function tt() {
                return [...Ke(We.UseFetchers).fetchers.values()]
              }
              const rt = "react-router-scroll-positions";
              let nt = {};

              function ot(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = void 0 === e ? {} : e, {
                  router: a
                } = He($e.UseScrollRestoration), {
                  restoreScrollPosition: i,
                  preventScrollReset: s
                } = Ke(We.UseScrollRestoration), {
                  basename: l
                } = n.useContext(u), c = m(), d = I(), f = B();
                n.useEffect((() => (window.history.scrollRestoration = "manual", () => {
                    window.history.scrollRestoration = "auto"
                  })), []),
                  function(e, t) {
                    let {
                      capture: r
                    } = {};
                    n.useEffect((() => {
                      let t = null != r ? {
                        capture: r
                      } : void 0;
                      return window.addEventListener("pagehide", e, t), () => {
                        window.removeEventListener("pagehide", e, t)
                      }
                    }), [e, r])
                  }(n.useCallback((() => {
                    if ("idle" === f.state) {
                      let e = (t ? t(c, d) : null) || c.key;
                      nt[e] = window.scrollY
                    }
                    try {
                      sessionStorage.setItem(r || rt, JSON.stringify(nt))
                    } catch (e) {}
                    window.history.scrollRestoration = "auto"
                  }), [r, t, f.state, c, d])), "undefined" != typeof document && (n.useLayoutEffect((() => {
                    try {
                      let e = sessionStorage.getItem(r || rt);
                      e && (nt = JSON.parse(e))
                    } catch (e) {}
                  }), [r]), n.useLayoutEffect((() => {
                    let e = t && "/" !== l ? (e, r) => t(de({}, e, {
                        pathname: (0, o.mc)(e.pathname, l) || e.pathname
                      }), r) : t,
                      r = null == a ? void 0 : a.enableScrollRestoration(nt, (() => window.scrollY), e);
                    return () => r && r()
                  }), [a, l, t]), n.useLayoutEffect((() => {
                    if (!1 !== i)
                      if ("number" != typeof i) {
                        if (c.hash) {
                          let e = document.getElementById(decodeURIComponent(c.hash.slice(1)));
                          if (e) return void e.scrollIntoView()
                        }!0 !== s && window.scrollTo(0, 0)
                      } else window.scrollTo(0, i)
                  }), [c, i, s]))
              }

              function at(e, t) {
                let {
                  capture: r
                } = t || {};
                n.useEffect((() => {
                  let t = null != r ? {
                    capture: r
                  } : void 0;
                  return window.addEventListener("beforeunload", e, t), () => {
                    window.removeEventListener("beforeunload", e, t)
                  }
                }), [e, r])
              }

              function it(e) {
                let {
                  when: t,
                  message: r
                } = e, o = J(t);
                n.useEffect((() => {
                  "blocked" === o.state && (window.confirm(r) ? setTimeout(o.proceed, 0) : o.reset())
                }), [o, r]), n.useEffect((() => {
                  "blocked" !== o.state || t || o.reset()
                }), [o, t])
              }

              function st(e, t) {
                void 0 === t && (t = {});
                let r = n.useContext(Le);
                null == r && (0, o.q4)(!1);
                let {
                  basename: a
                } = He($e.useViewTransitionState), i = x(e, {
                  relative: t.relative
                });
                if (!r.isTransitioning) return !1;
                let s = (0, o.mc)(r.currentLocation.pathname, a) || r.currentLocation.pathname,
                  l = (0, o.mc)(r.nextLocation.pathname, a) || r.nextLocation.pathname;
                return null != (0, o.ot)(i.pathname, l) || null != (0, o.ot)(i.pathname, s)
              }
            },
            3032: (e, t, r) => {
              (0, r(8752).G)(1)
            },
            8752: (e, t, r) => {
              const n = r(2184).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            9296: (e, t, r) => {
              r(3032)
            },
            2184: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, a = n.length; o !== t && a >= 0;) "/" === n[--a] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            6680: (e, t, r) => {
              "use strict";

              function n() {
                return n = Object.assign ? Object.assign.bind() : function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                  }
                  return e
                }, n.apply(this, arguments)
              }
              var o;
              r.d(t, {
                  Cm: () => b,
                  En: () => I,
                  Ep: () => h,
                  MP: () => M,
                  O8: () => p,
                  Qv: () => J,
                  So: () => o,
                  WM: () => w,
                  Wi: () => i,
                  Yf: () => l,
                  Yz: () => U,
                  _: () => F,
                  ay: () => H,
                  ch: () => Y,
                  e8: () => Z,
                  em: () => B,
                  gv: () => de,
                  iU: () => s,
                  ie: () => se,
                  kt: () => Q,
                  mc: () => O,
                  ot: () => A,
                  q4: () => u,
                  qS: () => W,
                  sZ: () => X
                }),
                function(e) {
                  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
                }(o || (o = {}));
              const a = "popstate";

              function i(e) {
                void 0 === e && (e = {});
                let t, {
                  initialEntries: r = ["/"],
                  initialIndex: n,
                  v5Compat: a = !1
                } = e;
                t = r.map(((e, t) => m(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
                let i = u(null == n ? t.length - 1 : n),
                  s = o.Pop,
                  l = null;

                function u(e) {
                  return Math.min(Math.max(e, 0), t.length - 1)
                }

                function d() {
                  return t[i]
                }

                function m(e, r, n) {
                  void 0 === r && (r = null);
                  let o = f(t ? d().pathname : "/", e, r, n);
                  return c("/" === o.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), o
                }

                function v(e) {
                  return "string" == typeof e ? e : h(e)
                }
                return {
                  get index() {
                    return i
                  },
                  get action() {
                    return s
                  },
                  get location() {
                    return d()
                  },
                  createHref: v,
                  createURL: e => new URL(v(e), "http://localhost"),
                  encodeLocation(e) {
                    let t = "string" == typeof e ? p(e) : e;
                    return {
                      pathname: t.pathname || "",
                      search: t.search || "",
                      hash: t.hash || ""
                    }
                  },
                  push(e, r) {
                    s = o.Push;
                    let n = m(e, r);
                    i += 1, t.splice(i, t.length, n), a && l && l({
                      action: s,
                      location: n,
                      delta: 1
                    })
                  },
                  replace(e, r) {
                    s = o.Replace;
                    let n = m(e, r);
                    t[i] = n, a && l && l({
                      action: s,
                      location: n,
                      delta: 0
                    })
                  },
                  go(e) {
                    s = o.Pop;
                    let r = u(i + e),
                      n = t[r];
                    i = r, l && l({
                      action: s,
                      location: n,
                      delta: e
                    })
                  },
                  listen: e => (l = e, () => {
                    l = null
                  })
                }
              }

              function s(e) {
                return void 0 === e && (e = {}), m((function(e, t) {
                  let {
                    pathname: r,
                    search: n,
                    hash: o
                  } = e.location;
                  return f("", {
                    pathname: r,
                    search: n,
                    hash: o
                  }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                }), (function(e, t) {
                  return "string" == typeof t ? t : h(t)
                }), null, e)
              }

              function l(e) {
                return void 0 === e && (e = {}), m((function(e, t) {
                  let {
                    pathname: r = "/",
                    search: n = "",
                    hash: o = ""
                  } = p(e.location.hash.substr(1));
                  return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), f("", {
                    pathname: r,
                    search: n,
                    hash: o
                  }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                }), (function(e, t) {
                  let r = e.document.querySelector("base"),
                    n = "";
                  if (r && r.getAttribute("href")) {
                    let t = e.location.href,
                      r = t.indexOf("#");
                    n = -1 === r ? t : t.slice(0, r)
                  }
                  return n + "#" + ("string" == typeof t ? t : h(t))
                }), (function(e, t) {
                  c("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
                }), e)
              }

              function u(e, t) {
                if (!1 === e || null == e) throw new Error(t)
              }

              function c(e, t) {
                if (!e) {
                  "undefined" != typeof console && console.warn(t);
                  try {
                    throw new Error(t)
                  } catch (e) {}
                }
              }

              function d(e, t) {
                return {
                  usr: e.state,
                  key: e.key,
                  idx: t
                }
              }

              function f(e, t, r, o) {
                return void 0 === r && (r = null), n({
                  pathname: "string" == typeof e ? e : e.pathname,
                  search: "",
                  hash: ""
                }, "string" == typeof t ? p(t) : t, {
                  state: r,
                  key: t && t.key || o || Math.random().toString(36).substr(2, 8)
                })
              }

              function h(e) {
                let {
                  pathname: t = "/",
                  search: r = "",
                  hash: n = ""
                } = e;
                return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n), t
              }

              function p(e) {
                let t = {};
                if (e) {
                  let r = e.indexOf("#");
                  r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
                  let n = e.indexOf("?");
                  n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
                }
                return t
              }

              function m(e, t, r, i) {
                void 0 === i && (i = {});
                let {
                  window: s = document.defaultView,
                  v5Compat: l = !1
                } = i, c = s.history, p = o.Pop, m = null, v = y();

                function y() {
                  return (c.state || {
                    idx: null
                  }).idx
                }

                function g() {
                  p = o.Pop;
                  let e = y(),
                    t = null == e ? null : e - v;
                  v = e, m && m({
                    action: p,
                    location: w.location,
                    delta: t
                  })
                }

                function b(e) {
                  let t = "null" !== s.location.origin ? s.location.origin : s.location.href,
                    r = "string" == typeof e ? e : h(e);
                  return u(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
                }
                null == v && (v = 0, c.replaceState(n({}, c.state, {
                  idx: v
                }), ""));
                let w = {
                  get action() {
                    return p
                  },
                  get location() {
                    return e(s, c)
                  },
                  listen(e) {
                    if (m) throw new Error("A history only accepts one active listener");
                    return s.addEventListener(a, g), m = e, () => {
                      s.removeEventListener(a, g), m = null
                    }
                  },
                  createHref: e => t(s, e),
                  createURL: b,
                  encodeLocation(e) {
                    let t = b(e);
                    return {
                      pathname: t.pathname,
                      search: t.search,
                      hash: t.hash
                    }
                  },
                  push: function(e, t) {
                    p = o.Push;
                    let n = f(w.location, e, t);
                    r && r(n, e), v = y() + 1;
                    let a = d(n, v),
                      i = w.createHref(n);
                    try {
                      c.pushState(a, "", i)
                    } catch (e) {
                      if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
                      s.location.assign(i)
                    }
                    l && m && m({
                      action: p,
                      location: w.location,
                      delta: 1
                    })
                  },
                  replace: function(e, t) {
                    p = o.Replace;
                    let n = f(w.location, e, t);
                    r && r(n, e), v = y();
                    let a = d(n, v),
                      i = w.createHref(n);
                    c.replaceState(a, "", i), l && m && m({
                      action: p,
                      location: w.location,
                      delta: 0
                    })
                  },
                  go: e => c.go(e)
                };
                return w
              }
              var v;
              ! function(e) {
                e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
              }(v || (v = {}));
              const y = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

              function g(e, t, r, o) {
                return void 0 === r && (r = []), void 0 === o && (o = {}), e.map(((e, a) => {
                  let i = [...r, a],
                    s = "string" == typeof e.id ? e.id : i.join("-");
                  if (u(!0 !== e.index || !e.children, "Cannot specify children on an index route"), u(!o[s], 'Found a route id collision on id "' + s + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
                      return !0 === e.index
                    }(e)) {
                    let r = n({}, e, t(e), {
                      id: s
                    });
                    return o[s] = r, r
                  } {
                    let r = n({}, e, t(e), {
                      id: s,
                      children: void 0
                    });
                    return o[s] = r, e.children && (r.children = g(e.children, t, i, o)), r
                  }
                }))
              }

              function b(e, t, r) {
                void 0 === r && (r = "/");
                let n = O(("string" == typeof t ? p(t) : t).pathname || "/", r);
                if (null == n) return null;
                let o = E(e);
                ! function(e) {
                  e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                    return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
                  }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
                }(o);
                let a = null;
                for (let e = 0; null == a && e < o.length; ++e) a = T(o[e], j(n));
                return a
              }

              function w(e, t) {
                let {
                  route: r,
                  pathname: n,
                  params: o
                } = e;
                return {
                  id: r.id,
                  pathname: n,
                  params: o,
                  data: t[r.id],
                  handle: r.handle
                }
              }

              function E(e, t, r, n) {
                void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
                let o = (e, o, a) => {
                  let i = {
                    relativePath: void 0 === a ? e.path || "" : a,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: o,
                    route: e
                  };
                  i.relativePath.startsWith("/") && (u(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
                  let s = I([n, i.relativePath]),
                    l = r.concat(i);
                  e.children && e.children.length > 0 && (u(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), E(e.children, t, l, s)), (null != e.path || e.index) && t.push({
                    path: s,
                    score: P(s, e.index),
                    routesMeta: l
                  })
                };
                return e.forEach(((e, t) => {
                  var r;
                  if ("" !== e.path && null != (r = e.path) && r.includes("?"))
                    for (let r of S(e.path)) o(e, t, r);
                  else o(e, t)
                })), t
              }

              function S(e) {
                let t = e.split("/");
                if (0 === t.length) return [];
                let [r, ...n] = t, o = r.endsWith("?"), a = r.replace(/\?$/, "");
                if (0 === n.length) return o ? [a, ""] : [a];
                let i = S(n.join("/")),
                  s = [];
                return s.push(...i.map((e => "" === e ? a : [a, e].join("/")))), o && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
              }
              const R = /^:\w+$/,
                x = 3,
                C = 2,
                k = 1,
                _ = 10,
                L = -2,
                D = e => "*" === e;

              function P(e, t) {
                let r = e.split("/"),
                  n = r.length;
                return r.some(D) && (n += L), t && (n += C), r.filter((e => !D(e))).reduce(((e, t) => e + (R.test(t) ? x : "" === t ? k : _)), n)
              }

              function T(e, t) {
                let {
                  routesMeta: r
                } = e, n = {}, o = "/", a = [];
                for (let e = 0; e < r.length; ++e) {
                  let i = r[e],
                    s = e === r.length - 1,
                    l = "/" === o ? t : t.slice(o.length) || "/",
                    u = A({
                      path: i.relativePath,
                      caseSensitive: i.caseSensitive,
                      end: s
                    }, l);
                  if (!u) return null;
                  Object.assign(n, u.params);
                  let c = i.route;
                  a.push({
                    params: n,
                    pathname: I([o, u.pathname]),
                    pathnameBase: q(I([o, u.pathnameBase])),
                    route: c
                  }), "/" !== u.pathnameBase && (o = I([o, u.pathnameBase]))
                }
                return a
              }

              function U(e, t) {
                void 0 === t && (t = {});
                let r = e;
                r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (c(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*"));
                const n = r.startsWith("/") ? "/" : "",
                  o = e => null == e ? "" : "string" == typeof e ? e : String(e);
                return n + r.split(/\/+/).map(((e, r, n) => {
                  if (r === n.length - 1 && "*" === e) return o(t["*"]);
                  const a = e.match(/^:(\w+)(\??)$/);
                  if (a) {
                    const [, e, r] = a;
                    let n = t[e];
                    return u("?" === r || null != n, 'Missing ":' + e + '" param'), o(n)
                  }
                  return e.replace(/\?$/g, "")
                })).filter((e => !!e)).join("/")
              }

              function A(e, t) {
                "string" == typeof e && (e = {
                  path: e,
                  caseSensitive: !1,
                  end: !0
                });
                let [r, n] = function(e, t, r) {
                  void 0 === t && (t = !1), void 0 === r && (r = !0), c("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                  let n = [],
                    o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (n.push(t), "/([^\\/]+)")));
                  return e.endsWith("*") ? (n.push("*"), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), n]
                }(e.path, e.caseSensitive, e.end), o = t.match(r);
                if (!o) return null;
                let a = o[0],
                  i = a.replace(/(.)\/+$/, "$1"),
                  s = o.slice(1);
                return {
                  params: n.reduce(((e, t, r) => {
                    if ("*" === t) {
                      let e = s[r] || "";
                      i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1")
                    }
                    return e[t] = function(e, t) {
                      try {
                        return decodeURIComponent(e)
                      } catch (r) {
                        return c(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
                      }
                    }(s[r] || "", t), e
                  }), {}),
                  pathname: a,
                  pathnameBase: i,
                  pattern: e
                }
              }

              function j(e) {
                try {
                  return decodeURI(e)
                } catch (t) {
                  return c(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
                }
              }

              function O(e, t) {
                if ("/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                let r = t.endsWith("/") ? t.length - 1 : t.length,
                  n = e.charAt(r);
                return n && "/" !== n ? null : e.slice(r) || "/"
              }

              function M(e, t) {
                void 0 === t && (t = "/");
                let {
                  pathname: r,
                  search: n = "",
                  hash: o = ""
                } = "string" == typeof e ? p(e) : e, a = r ? r.startsWith("/") ? r : function(e, t) {
                  let r = t.replace(/\/+$/, "").split("/");
                  return e.split("/").forEach((e => {
                    ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
                  })), r.length > 1 ? r.join("/") : "/"
                }(r, t) : t;
                return {
                  pathname: a,
                  search: z(n),
                  hash: $(o)
                }
              }

              function N(e, t, r, n) {
                return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
              }

              function B(e) {
                return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
              }

              function F(e, t, r, o) {
                let a;
                void 0 === o && (o = !1), "string" == typeof e ? a = p(e) : (a = n({}, e), u(!a.pathname || !a.pathname.includes("?"), N("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), N("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), N("#", "search", "hash", a)));
                let i, s = "" === e || "" === a.pathname,
                  l = s ? "/" : a.pathname;
                if (o || null == l) i = r;
                else {
                  let e = t.length - 1;
                  if (l.startsWith("..")) {
                    let t = l.split("/");
                    for (;
                      ".." === t[0];) t.shift(), e -= 1;
                    a.pathname = t.join("/")
                  }
                  i = e >= 0 ? t[e] : "/"
                }
                let c = M(a, i),
                  d = l && "/" !== l && l.endsWith("/"),
                  f = (s || "." === l) && r.endsWith("/");
                return c.pathname.endsWith("/") || !d && !f || (c.pathname += "/"), c
              }
              const I = e => e.join("/").replace(/\/\/+/g, "/"),
                q = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                z = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
                $ = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
                W = function(e, t) {
                  void 0 === t && (t = {});
                  let r = "number" == typeof t ? {
                      status: t
                    } : t,
                    o = new Headers(r.headers);
                  return o.has("Content-Type") || o.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), n({}, r, {
                    headers: o
                  }))
                };
              class H extends Error {}
              class K {
                constructor(e, t) {
                  let r;
                  this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], u(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
                  let n = () => r(new H("Deferred data aborted"));
                  this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", n), this.controller.signal.addEventListener("abort", n), this.data = Object.entries(e).reduce(((e, t) => {
                    let [r, n] = t;
                    return Object.assign(e, {
                      [r]: this.trackPromise(r, n)
                    })
                  }), {}), this.done && this.unlistenAbortSignal(), this.init = t
                }
                trackPromise(e, t) {
                  if (!(t instanceof Promise)) return t;
                  this.deferredKeys.push(e), this.pendingKeysSet.add(e);
                  let r = Promise.race([t, this.abortPromise]).then((t => this.onSettle(r, e, void 0, t)), (t => this.onSettle(r, e, t)));
                  return r.catch((() => {})), Object.defineProperty(r, "_tracked", {
                    get: () => !0
                  }), r
                }
                onSettle(e, t, r, n) {
                  if (this.controller.signal.aborted && r instanceof H) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
                    get: () => r
                  }), Promise.reject(r);
                  if (this.pendingKeysSet.delete(t), this.done && this.unlistenAbortSignal(), void 0 === r && void 0 === n) {
                    let r = new Error('Deferred data for key "' + t + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
                    return Object.defineProperty(e, "_error", {
                      get: () => r
                    }), this.emit(!1, t), Promise.reject(r)
                  }
                  return void 0 === n ? (Object.defineProperty(e, "_error", {
                    get: () => r
                  }), this.emit(!1, t), Promise.reject(r)) : (Object.defineProperty(e, "_data", {
                    get: () => n
                  }), this.emit(!1, t), n)
                }
                emit(e, t) {
                  this.subscribers.forEach((r => r(e, t)))
                }
                subscribe(e) {
                  return this.subscribers.add(e), () => this.subscribers.delete(e)
                }
                cancel() {
                  this.controller.abort(), this.pendingKeysSet.forEach(((e, t) => this.pendingKeysSet.delete(t))), this.emit(!0)
                }
                async resolveData(e) {
                  let t = !1;
                  if (!this.done) {
                    let r = () => this.cancel();
                    e.addEventListener("abort", r), t = await new Promise((t => {
                      this.subscribe((n => {
                        e.removeEventListener("abort", r), (n || this.done) && t(n)
                      }))
                    }))
                  }
                  return t
                }
                get done() {
                  return 0 === this.pendingKeysSet.size
                }
                get unwrappedData() {
                  return u(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
                    let [r, n] = t;
                    return Object.assign(e, {
                      [r]: V(n)
                    })
                  }), {})
                }
                get pendingKeys() {
                  return Array.from(this.pendingKeysSet)
                }
              }

              function V(e) {
                if (! function(e) {
                    return e instanceof Promise && !0 === e._tracked
                  }(e)) return e;
                if (e._error) throw e._error;
                return e._data
              }
              const J = function(e, t) {
                  return void 0 === t && (t = {}), new K(e, "number" == typeof t ? {
                    status: t
                  } : t)
                },
                Y = function(e, t) {
                  void 0 === t && (t = 302);
                  let r = t;
                  "number" == typeof r ? r = {
                    status: r
                  } : void 0 === r.status && (r.status = 302);
                  let o = new Headers(r.headers);
                  return o.set("Location", e), new Response(null, n({}, r, {
                    headers: o
                  }))
                },
                Q = (e, t) => {
                  let r = Y(e, t);
                  return r.headers.set("X-Remix-Reload-Document", "true"), r
                };
              class X {
                constructor(e, t, r, n) {
                  void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
                }
              }

              function Z(e) {
                return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
              }
              const G = ["post", "put", "patch", "delete"],
                ee = new Set(G),
                te = ["get", ...G],
                re = new Set(te),
                ne = new Set([301, 302, 303, 307, 308]),
                oe = new Set([307, 308]),
                ae = {
                  state: "idle",
                  location: void 0,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  json: void 0,
                  text: void 0
                },
                ie = {
                  state: "idle",
                  data: void 0,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  json: void 0,
                  text: void 0
                },
                se = {
                  state: "unblocked",
                  proceed: void 0,
                  reset: void 0,
                  location: void 0
                },
                le = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                ue = e => ({
                  hasErrorBoundary: Boolean(e.hasErrorBoundary)
                }),
                ce = "remix-router-transitions";

              function de(e) {
                const t = e.window ? e.window : "undefined" != typeof window ? window : void 0,
                  r = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement,
                  a = !r;
                let i;
                if (u(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) i = e.mapRouteProperties;
                else if (e.detectErrorBoundary) {
                  let t = e.detectErrorBoundary;
                  i = e => ({
                    hasErrorBoundary: t(e)
                  })
                } else i = ue;
                let s, l = {},
                  d = g(e.routes, i, void 0, l),
                  h = e.basename || "/",
                  p = n({
                    v7_normalizeFormMethod: !1,
                    v7_prependBasename: !1
                  }, e.future),
                  m = null,
                  y = new Set,
                  E = null,
                  S = null,
                  R = null,
                  x = null != e.hydrationData,
                  C = b(d, e.history.location, h),
                  k = null;
                if (null == C) {
                  let t = ke(404, {
                      pathname: e.history.location.pathname
                    }),
                    {
                      matches: r,
                      route: n
                    } = Ce(d);
                  C = r, k = {
                    [n.id]: t
                  }
                }
                let _, L, D = !(C.some((e => e.route.lazy)) || C.some((e => e.route.loader)) && null == e.hydrationData),
                  P = {
                    historyAction: e.history.action,
                    location: e.history.location,
                    matches: C,
                    initialized: D,
                    navigation: ae,
                    restoreScrollPosition: null == e.hydrationData && null,
                    preventScrollReset: !1,
                    revalidation: "idle",
                    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
                    actionData: e.hydrationData && e.hydrationData.actionData || null,
                    errors: e.hydrationData && e.hydrationData.errors || k,
                    fetchers: new Map,
                    blockers: new Map
                  },
                  T = o.Pop,
                  U = !1,
                  A = !1,
                  j = new Map,
                  M = null,
                  N = !1,
                  B = !1,
                  F = [],
                  I = [],
                  q = new Map,
                  z = 0,
                  $ = -1,
                  W = new Map,
                  H = new Set,
                  K = new Map,
                  V = new Map,
                  J = new Map,
                  Y = !1;

                function Q(e, t) {
                  P = n({}, P, e), y.forEach((e => e(P, {
                    unstable_viewTransitionOpts: t
                  })))
                }

                function X(t, r) {
                  var a, i;
                  let l, u = null != P.actionData && null != P.navigation.formMethod && Ue(P.navigation.formMethod) && "loading" === P.navigation.state && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect);
                  l = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : u ? P.actionData : null;
                  let c = r.loaderData ? Re(P.loaderData, r.loaderData, r.matches || [], r.errors) : P.loaderData,
                    f = P.blockers;
                  f.size > 0 && (f = new Map(f), f.forEach(((e, t) => f.set(t, se))));
                  let h, p = !0 === U || null != P.navigation.formMethod && Ue(P.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
                  if (s && (d = s, s = void 0), N || T === o.Pop || (T === o.Push ? e.history.push(t, t.state) : T === o.Replace && e.history.replace(t, t.state)), T === o.Pop) {
                    let e = j.get(P.location.pathname);
                    e && e.has(t.pathname) ? h = {
                      currentLocation: P.location,
                      nextLocation: t
                    } : j.has(t.pathname) && (h = {
                      currentLocation: t,
                      nextLocation: P.location
                    })
                  } else if (A) {
                    let e = j.get(P.location.pathname);
                    e ? e.add(t.pathname) : (e = new Set([t.pathname]), j.set(P.location.pathname, e)), h = {
                      currentLocation: P.location,
                      nextLocation: t
                    }
                  }
                  Q(n({}, r, {
                    actionData: l,
                    loaderData: c,
                    historyAction: T,
                    location: t,
                    initialized: !0,
                    navigation: ae,
                    revalidation: "idle",
                    restoreScrollPosition: $e(t, r.matches || P.matches),
                    preventScrollReset: p,
                    blockers: f
                  }), h), T = o.Pop, U = !1, A = !1, N = !1, B = !1, F = [], I = []
                }
                async function Z(t, r, a) {
                  L && L.abort(), L = null, T = t, N = !0 === (a && a.startUninterruptedRevalidation),
                    function(e, t) {
                      if (E && R) {
                        let r = ze(e, t);
                        E[r] = R()
                      }
                    }(P.location, P.matches), U = !0 === (a && a.preventScrollReset), A = !0 === (a && a.enableViewTransition);
                  let u = s || d,
                    c = a && a.overrideNavigation,
                    f = b(u, r, h);
                  if (!f) {
                    let e = ke(404, {
                        pathname: r.pathname
                      }),
                      {
                        matches: t,
                        route: n
                      } = Ce(u);
                    return qe(), void X(r, {
                      matches: t,
                      loaderData: {},
                      errors: {
                        [n.id]: e
                      }
                    })
                  }
                  if (P.initialized && !B && (p = P.location, m = r, p.pathname === m.pathname && p.search === m.search && ("" === p.hash ? "" !== m.hash : p.hash === m.hash || "" !== m.hash)) && !(a && a.submission && Ue(a.submission.formMethod))) return void X(r, {
                    matches: f
                  });
                  var p, m;
                  L = new AbortController;
                  let y, g, w = be(e.history, r, L.signal, a && a.submission);
                  if (a && a.pendingError) g = {
                    [xe(f).route.id]: a.pendingError
                  };
                  else if (a && a.submission && Ue(a.submission.formMethod)) {
                    let e = await async function(e, t, r, n, a) {
                      void 0 === a && (a = {}), re();
                      let s, u = function(e, t) {
                        return {
                          state: "submitting",
                          location: e,
                          formMethod: t.formMethod,
                          formAction: t.formAction,
                          formEncType: t.formEncType,
                          formData: t.formData,
                          json: t.json,
                          text: t.text
                        }
                      }(t, r);
                      Q({
                        navigation: u
                      });
                      let c = Me(n, t);
                      if (c.route.action || c.route.lazy) {
                        if (s = await ge("action", e, c, n, l, i, h), e.signal.aborted) return {
                          shortCircuited: !0
                        }
                      } else s = {
                        type: v.error,
                        error: ke(405, {
                          method: e.method,
                          pathname: t.pathname,
                          routeId: c.route.id
                        })
                      };
                      if (Te(s)) {
                        let e;
                        return e = a && null != a.replace ? a.replace : s.location === P.location.pathname + P.location.search, await ee(P, s, {
                          submission: r,
                          replace: e
                        }), {
                          shortCircuited: !0
                        }
                      }
                      if (Pe(s)) {
                        let e = xe(n, c.route.id);
                        return !0 !== (a && a.replace) && (T = o.Push), {
                          pendingActionData: {},
                          pendingActionError: {
                            [e.route.id]: s.error
                          }
                        }
                      }
                      if (De(s)) throw ke(400, {
                        type: "defer-action"
                      });
                      return {
                        pendingActionData: {
                          [c.route.id]: s.data
                        }
                      }
                    }(w, r, a.submission, f, {
                      replace: a.replace
                    });
                    if (e.shortCircuited) return;
                    y = e.pendingActionData, g = e.pendingActionError, c = Be(r, a.submission), w = new Request(w.url, {
                      signal: w.signal
                    })
                  }
                  let {
                    shortCircuited: S,
                    loaderData: x,
                    errors: C
                  } = await async function(t, r, o, a, i, l, u, c, f) {
                    let p = a || Be(r, i),
                      m = i || l || Ne(p),
                      v = s || d,
                      [y, g] = pe(e.history, P, o, m, r, B, F, I, K, H, v, h, c, f);
                    if (qe((e => !(o && o.some((t => t.route.id === e))) || y && y.some((t => t.route.id === e)))), $ = ++z, 0 === y.length && 0 === g.length) {
                      let e = ye();
                      return X(r, n({
                        matches: o,
                        loaderData: {},
                        errors: f || null
                      }, c ? {
                        actionData: c
                      } : {}, e ? {
                        fetchers: new Map(P.fetchers)
                      } : {})), {
                        shortCircuited: !0
                      }
                    }
                    if (!N) {
                      g.forEach((e => {
                        let t = P.fetchers.get(e.key),
                          r = Fe(void 0, t ? t.data : void 0);
                        P.fetchers.set(e.key, r)
                      }));
                      let e = c || P.actionData;
                      Q(n({
                        navigation: p
                      }, e ? 0 === Object.keys(e).length ? {
                        actionData: null
                      } : {
                        actionData: e
                      } : {}, g.length > 0 ? {
                        fetchers: new Map(P.fetchers)
                      } : {}))
                    }
                    g.forEach((e => {
                      q.has(e.key) && me(e.key), e.controller && q.set(e.key, e.controller)
                    }));
                    let b = () => g.forEach((e => me(e.key)));
                    L && L.signal.addEventListener("abort", b);
                    let {
                      results: w,
                      loaderResults: E,
                      fetcherResults: S
                    } = await te(P.matches, o, y, g, t);
                    if (t.signal.aborted) return {
                      shortCircuited: !0
                    };
                    L && L.signal.removeEventListener("abort", b), g.forEach((e => q.delete(e.key)));
                    let R = _e(w);
                    if (R) {
                      if (R.idx >= y.length) {
                        let e = g[R.idx - y.length].key;
                        H.add(e)
                      }
                      return await ee(P, R.result, {
                        replace: u
                      }), {
                        shortCircuited: !0
                      }
                    }
                    let {
                      loaderData: x,
                      errors: C
                    } = Se(P, o, y, E, f, g, S, V);
                    V.forEach(((e, t) => {
                      e.subscribe((r => {
                        (r || e.done) && V.delete(t)
                      }))
                    }));
                    let k = ye(),
                      _ = we($);
                    return n({
                      loaderData: x,
                      errors: C
                    }, k || _ || g.length > 0 ? {
                      fetchers: new Map(P.fetchers)
                    } : {})
                  }(w, r, f, c, a && a.submission, a && a.fetcherSubmission, a && a.replace, y, g);
                  S || (L = null, X(r, n({
                    matches: f
                  }, y ? {
                    actionData: y
                  } : {}, {
                    loaderData: x,
                    errors: C
                  })))
                }

                function G(e) {
                  return P.fetchers.get(e) || ie
                }
                async function ee(a, i, s) {
                  let {
                    submission: l,
                    fetcherSubmission: c,
                    replace: d
                  } = void 0 === s ? {} : s;
                  i.revalidate && (B = !0);
                  let p = f(a.location, i.location, {
                    _isRedirect: !0
                  });
                  if (u(p, "Expected a location on the redirect navigation"), r) {
                    let r = !1;
                    if (i.reloadDocument) r = !0;
                    else if (le.test(i.location)) {
                      const n = e.history.createURL(i.location);
                      r = n.origin !== t.location.origin || null == O(n.pathname, h)
                    }
                    if (r) return void(d ? t.location.replace(i.location) : t.location.assign(i.location))
                  }
                  L = null;
                  let m = !0 === d ? o.Replace : o.Push,
                    {
                      formMethod: v,
                      formAction: y,
                      formEncType: g
                    } = a.navigation;
                  !l && !c && v && y && g && (l = Ne(a.navigation));
                  let b = l || c;
                  if (oe.has(i.status) && b && Ue(b.formMethod)) await Z(m, p, {
                    submission: n({}, b, {
                      formAction: i.location
                    }),
                    preventScrollReset: U
                  });
                  else {
                    let e = Be(p, l);
                    await Z(m, p, {
                      overrideNavigation: e,
                      fetcherSubmission: c,
                      preventScrollReset: U
                    })
                  }
                }
                async function te(t, r, n, o, a) {
                  let s = await Promise.all([...n.map((e => ge("loader", a, e, r, l, i, h))), ...o.map((t => t.matches && t.match && t.controller ? ge("loader", be(e.history, t.path, t.controller.signal), t.match, t.matches, l, i, h) : {
                      type: v.error,
                      error: ke(404, {
                        pathname: t.path
                      })
                    }))]),
                    u = s.slice(0, n.length),
                    c = s.slice(n.length);
                  return await Promise.all([Ae(t, n, u, u.map((() => a.signal)), !1, P.loaderData), Ae(t, o.map((e => e.match)), c, o.map((e => e.controller ? e.controller.signal : null)), !0)]), {
                    results: s,
                    loaderResults: u,
                    fetcherResults: c
                  }
                }

                function re() {
                  B = !0, F.push(...qe()), K.forEach(((e, t) => {
                    q.has(t) && (I.push(t), me(t))
                  }))
                }

                function ne(e, t, r) {
                  let n = xe(P.matches, t);
                  de(e), Q({
                    errors: {
                      [n.route.id]: r
                    },
                    fetchers: new Map(P.fetchers)
                  })
                }

                function de(e) {
                  let t = P.fetchers.get(e);
                  !q.has(e) || t && "loading" === t.state && W.has(e) || me(e), K.delete(e), W.delete(e), H.delete(e), P.fetchers.delete(e)
                }

                function me(e) {
                  let t = q.get(e);
                  u(t, "Expected fetch controller: " + e), t.abort(), q.delete(e)
                }

                function ve(e) {
                  for (let t of e) {
                    let e = Ie(G(t).data);
                    P.fetchers.set(t, e)
                  }
                }

                function ye() {
                  let e = [],
                    t = !1;
                  for (let r of H) {
                    let n = P.fetchers.get(r);
                    u(n, "Expected fetcher: " + r), "loading" === n.state && (H.delete(r), e.push(r), t = !0)
                  }
                  return ve(e), t
                }

                function we(e) {
                  let t = [];
                  for (let [r, n] of W)
                    if (n < e) {
                      let e = P.fetchers.get(r);
                      u(e, "Expected fetcher: " + r), "loading" === e.state && (me(r), W.delete(r), t.push(r))
                    } return ve(t), t.length > 0
                }

                function Ee(e) {
                  P.blockers.delete(e), J.delete(e)
                }

                function Le(e, t) {
                  let r = P.blockers.get(e) || se;
                  u("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
                  let n = new Map(P.blockers);
                  n.set(e, t), Q({
                    blockers: n
                  })
                }

                function Oe(e) {
                  let {
                    currentLocation: t,
                    nextLocation: r,
                    historyAction: n
                  } = e;
                  if (0 === J.size) return;
                  J.size > 1 && c(!1, "A router only supports one blocker at a time");
                  let o = Array.from(J.entries()),
                    [a, i] = o[o.length - 1],
                    s = P.blockers.get(a);
                  return s && "proceeding" === s.state ? void 0 : i({
                    currentLocation: t,
                    nextLocation: r,
                    historyAction: n
                  }) ? a : void 0
                }

                function qe(e) {
                  let t = [];
                  return V.forEach(((r, n) => {
                    e && !e(n) || (r.cancel(), t.push(n), V.delete(n))
                  })), t
                }

                function ze(e, t) {
                  return S && S(e, t.map((e => w(e, P.loaderData)))) || e.key
                }

                function $e(e, t) {
                  if (E) {
                    let r = ze(e, t),
                      n = E[r];
                    if ("number" == typeof n) return n
                  }
                  return null
                }
                return _ = {
                  get basename() {
                    return h
                  },
                  get state() {
                    return P
                  },
                  get routes() {
                    return d
                  },
                  get window() {
                    return t
                  },
                  initialize: function() {
                    if (m = e.history.listen((t => {
                        let {
                          action: r,
                          location: n,
                          delta: o
                        } = t;
                        if (Y) return void(Y = !1);
                        c(0 === J.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                        let a = Oe({
                          currentLocation: P.location,
                          nextLocation: n,
                          historyAction: r
                        });
                        return a && null != o ? (Y = !0, e.history.go(-1 * o), void Le(a, {
                          state: "blocked",
                          location: n,
                          proceed() {
                            Le(a, {
                              state: "proceeding",
                              proceed: void 0,
                              reset: void 0,
                              location: n
                            }), e.history.go(o)
                          },
                          reset() {
                            let e = new Map(P.blockers);
                            e.set(a, se), Q({
                              blockers: e
                            })
                          }
                        })) : Z(r, n)
                      })), r) {
                      ! function(e, t) {
                        try {
                          let r = e.sessionStorage.getItem(ce);
                          if (r) {
                            let e = JSON.parse(r);
                            for (let [r, n] of Object.entries(e || {})) n && Array.isArray(n) && t.set(r, new Set(n || []))
                          }
                        } catch (e) {}
                      }(t, j);
                      let e = () => function(e, t) {
                        if (t.size > 0) {
                          let r = {};
                          for (let [e, n] of t) r[e] = [...n];
                          try {
                            e.sessionStorage.setItem(ce, JSON.stringify(r))
                          } catch (e) {
                            c(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                          }
                        }
                      }(t, j);
                      t.addEventListener("pagehide", e), M = () => t.removeEventListener("pagehide", e)
                    }
                    return P.initialized || Z(o.Pop, P.location), _
                  },
                  subscribe: function(e) {
                    return y.add(e), () => y.delete(e)
                  },
                  enableScrollRestoration: function(e, t, r) {
                    if (E = e, R = t, S = r || null, !x && P.navigation === ae) {
                      x = !0;
                      let e = $e(P.location, P.matches);
                      null != e && Q({
                        restoreScrollPosition: e
                      })
                    }
                    return () => {
                      E = null, R = null, S = null
                    }
                  },
                  navigate: async function t(r, a) {
                    if ("number" == typeof r) return void e.history.go(r);
                    let i = fe(P.location, P.matches, h, p.v7_prependBasename, r, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative),
                      {
                        path: s,
                        submission: l,
                        error: u
                      } = he(p.v7_normalizeFormMethod, !1, i, a),
                      c = P.location,
                      d = f(P.location, s, a && a.state);
                    d = n({}, d, e.history.encodeLocation(d));
                    let m = a && null != a.replace ? a.replace : void 0,
                      v = o.Push;
                    !0 === m ? v = o.Replace : !1 === m || null != l && Ue(l.formMethod) && l.formAction === P.location.pathname + P.location.search && (v = o.Replace);
                    let y = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
                      g = Oe({
                        currentLocation: c,
                        nextLocation: d,
                        historyAction: v
                      });
                    if (!g) return await Z(v, d, {
                      submission: l,
                      pendingError: u,
                      preventScrollReset: y,
                      replace: a && a.replace,
                      enableViewTransition: a && a.unstable_viewTransition
                    });
                    Le(g, {
                      state: "blocked",
                      location: d,
                      proceed() {
                        Le(g, {
                          state: "proceeding",
                          proceed: void 0,
                          reset: void 0,
                          location: d
                        }), t(r, a)
                      },
                      reset() {
                        let e = new Map(P.blockers);
                        e.set(g, se), Q({
                          blockers: e
                        })
                      }
                    })
                  },
                  fetch: function(t, r, o, c) {
                    if (a) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
                    q.has(t) && me(t);
                    let f = s || d,
                      m = fe(P.location, P.matches, h, p.v7_prependBasename, o, r, null == c ? void 0 : c.relative),
                      v = b(f, m, h);
                    if (!v) return void ne(t, r, ke(404, {
                      pathname: m
                    }));
                    let {
                      path: y,
                      submission: g,
                      error: w
                    } = he(p.v7_normalizeFormMethod, !0, m, c);
                    if (w) return void ne(t, r, w);
                    let E = Me(v, y);
                    U = !0 === (c && c.preventScrollReset), g && Ue(g.formMethod) ? async function(t, r, o, a, c, f) {
                      if (re(), K.delete(t), !a.route.action && !a.route.lazy) {
                        let e = ke(405, {
                          method: f.formMethod,
                          pathname: o,
                          routeId: r
                        });
                        return void ne(t, r, e)
                      }
                      let p = function(e, t) {
                        return {
                          state: "submitting",
                          formMethod: e.formMethod,
                          formAction: e.formAction,
                          formEncType: e.formEncType,
                          formData: e.formData,
                          json: e.json,
                          text: e.text,
                          data: t ? t.data : void 0
                        }
                      }(f, P.fetchers.get(t));
                      P.fetchers.set(t, p), Q({
                        fetchers: new Map(P.fetchers)
                      });
                      let m = new AbortController,
                        v = be(e.history, o, m.signal, f);
                      q.set(t, m);
                      let y = z,
                        g = await ge("action", v, a, c, l, i, h);
                      if (v.signal.aborted) return void(q.get(t) === m && q.delete(t));
                      if (Te(g)) {
                        if (q.delete(t), $ > y) {
                          let e = Ie(void 0);
                          return P.fetchers.set(t, e), void Q({
                            fetchers: new Map(P.fetchers)
                          })
                        } {
                          H.add(t);
                          let e = Fe(f);
                          return P.fetchers.set(t, e), Q({
                            fetchers: new Map(P.fetchers)
                          }), ee(P, g, {
                            fetcherSubmission: f
                          })
                        }
                      }
                      if (Pe(g)) return void ne(t, r, g.error);
                      if (De(g)) throw ke(400, {
                        type: "defer-action"
                      });
                      let w = P.navigation.location || P.location,
                        E = be(e.history, w, m.signal),
                        S = s || d,
                        R = "idle" !== P.navigation.state ? b(S, P.navigation.location, h) : P.matches;
                      u(R, "Didn't find any matches after fetcher action");
                      let x = ++z;
                      W.set(t, x);
                      let C = Fe(f, g.data);
                      P.fetchers.set(t, C);
                      let [k, _] = pe(e.history, P, R, f, w, B, F, I, K, H, S, h, {
                        [a.route.id]: g.data
                      }, void 0);
                      _.filter((e => e.key !== t)).forEach((e => {
                        let t = e.key,
                          r = P.fetchers.get(t),
                          n = Fe(void 0, r ? r.data : void 0);
                        P.fetchers.set(t, n), q.has(t) && me(t), e.controller && q.set(t, e.controller)
                      })), Q({
                        fetchers: new Map(P.fetchers)
                      });
                      let D = () => _.forEach((e => me(e.key)));
                      m.signal.addEventListener("abort", D);
                      let {
                        results: U,
                        loaderResults: A,
                        fetcherResults: j
                      } = await te(P.matches, R, k, _, E);
                      if (m.signal.aborted) return;
                      m.signal.removeEventListener("abort", D), W.delete(t), q.delete(t), _.forEach((e => q.delete(e.key)));
                      let O = _e(U);
                      if (O) {
                        if (O.idx >= k.length) {
                          let e = _[O.idx - k.length].key;
                          H.add(e)
                        }
                        return ee(P, O.result)
                      }
                      let {
                        loaderData: M,
                        errors: N
                      } = Se(P, P.matches, k, A, void 0, _, j, V);
                      if (P.fetchers.has(t)) {
                        let e = Ie(g.data);
                        P.fetchers.set(t, e)
                      }
                      let J = we(x);
                      "loading" === P.navigation.state && x > $ ? (u(T, "Expected pending action"), L && L.abort(), X(P.navigation.location, {
                        matches: R,
                        loaderData: M,
                        errors: N,
                        fetchers: new Map(P.fetchers)
                      })) : (Q(n({
                        errors: N,
                        loaderData: Re(P.loaderData, M, R, N)
                      }, J || _.length > 0 ? {
                        fetchers: new Map(P.fetchers)
                      } : {})), B = !1)
                    }(t, r, y, E, v, g): (K.set(t, {
                      routeId: r,
                      path: y
                    }), async function(t, r, n, o, a, s) {
                      let c = P.fetchers.get(t),
                        d = Fe(s, c ? c.data : void 0);
                      P.fetchers.set(t, d), Q({
                        fetchers: new Map(P.fetchers)
                      });
                      let f = new AbortController,
                        p = be(e.history, n, f.signal);
                      q.set(t, f);
                      let m = z,
                        v = await ge("loader", p, o, a, l, i, h);
                      if (De(v) && (v = await je(v, p.signal, !0) || v), q.get(t) === f && q.delete(t), p.signal.aborted) return;
                      if (Te(v)) {
                        if ($ > m) {
                          let e = Ie(void 0);
                          return P.fetchers.set(t, e), void Q({
                            fetchers: new Map(P.fetchers)
                          })
                        }
                        return H.add(t), void await ee(P, v)
                      }
                      if (Pe(v)) {
                        let e = xe(P.matches, r);
                        return P.fetchers.delete(t), void Q({
                          fetchers: new Map(P.fetchers),
                          errors: {
                            [e.route.id]: v.error
                          }
                        })
                      }
                      u(!De(v), "Unhandled fetcher deferred data");
                      let y = Ie(v.data);
                      P.fetchers.set(t, y), Q({
                        fetchers: new Map(P.fetchers)
                      })
                    }(t, r, y, E, v, g))
                  },
                  revalidate: function() {
                    re(), Q({
                      revalidation: "loading"
                    }), "submitting" !== P.navigation.state && ("idle" !== P.navigation.state ? Z(T || P.historyAction, P.navigation.location, {
                      overrideNavigation: P.navigation
                    }) : Z(P.historyAction, P.location, {
                      startUninterruptedRevalidation: !0
                    }))
                  },
                  createHref: t => e.history.createHref(t),
                  encodeLocation: t => e.history.encodeLocation(t),
                  getFetcher: G,
                  deleteFetcher: de,
                  dispose: function() {
                    m && m(), M && M(), y.clear(), L && L.abort(), P.fetchers.forEach(((e, t) => de(t))), P.blockers.forEach(((e, t) => Ee(t)))
                  },
                  getBlocker: function(e, t) {
                    let r = P.blockers.get(e) || se;
                    return J.get(e) !== t && J.set(e, t), r
                  },
                  deleteBlocker: Ee,
                  _internalFetchControllers: q,
                  _internalActiveDeferreds: V,
                  _internalSetRoutes: function(e) {
                    l = {}, s = g(e, i, void 0, l)
                  }
                }, _
              }

              function fe(e, t, r, n, o, a, i) {
                let s, l;
                if (null != a && "path" !== i) {
                  s = [];
                  for (let e of t)
                    if (s.push(e), e.route.id === a) {
                      l = e;
                      break
                    }
                } else s = t, l = t[t.length - 1];
                let u = F(o || ".", B(s).map((e => e.pathnameBase)), O(e.pathname, r) || e.pathname, "path" === i);
                return null == o && (u.search = e.search, u.hash = e.hash), null != o && "" !== o && "." !== o || !l || !l.route.index || Oe(u.search) || (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), n && "/" !== r && (u.pathname = "/" === u.pathname ? r : I([r, u.pathname])), h(u)
              }

              function he(e, t, r, n) {
                if (!n || ! function(e) {
                    return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
                  }(n)) return {
                  path: r
                };
                if (n.formMethod && (o = n.formMethod, !re.has(o.toLowerCase()))) return {
                  path: r,
                  error: ke(405, {
                    method: n.formMethod
                  })
                };
                var o;
                let a, i, s = () => ({
                    path: r,
                    error: ke(400, {
                      type: "invalid-body"
                    })
                  }),
                  l = n.formMethod || "get",
                  c = e ? l.toUpperCase() : l.toLowerCase(),
                  d = Le(r);
                if (void 0 !== n.body) {
                  if ("text/plain" === n.formEncType) {
                    if (!Ue(c)) return s();
                    let e = "string" == typeof n.body ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce(((e, t) => {
                      let [r, n] = t;
                      return "" + e + r + "=" + n + "\n"
                    }), "") : String(n.body);
                    return {
                      path: r,
                      submission: {
                        formMethod: c,
                        formAction: d,
                        formEncType: n.formEncType,
                        formData: void 0,
                        json: void 0,
                        text: e
                      }
                    }
                  }
                  if ("application/json" === n.formEncType) {
                    if (!Ue(c)) return s();
                    try {
                      let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
                      return {
                        path: r,
                        submission: {
                          formMethod: c,
                          formAction: d,
                          formEncType: n.formEncType,
                          formData: void 0,
                          json: e,
                          text: void 0
                        }
                      }
                    } catch (e) {
                      return s()
                    }
                  }
                }
                if (u("function" == typeof FormData, "FormData is not available in this environment"), n.formData) a = we(n.formData), i = n.formData;
                else if (n.body instanceof FormData) a = we(n.body), i = n.body;
                else if (n.body instanceof URLSearchParams) a = n.body, i = Ee(a);
                else if (null == n.body) a = new URLSearchParams, i = new FormData;
                else try {
                  a = new URLSearchParams(n.body), i = Ee(a)
                } catch (e) {
                  return s()
                }
                let f = {
                  formMethod: c,
                  formAction: d,
                  formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
                  formData: i,
                  json: void 0,
                  text: void 0
                };
                if (Ue(f.formMethod)) return {
                  path: r,
                  submission: f
                };
                let m = p(r);
                return t && m.search && Oe(m.search) && a.append("index", ""), m.search = "?" + a, {
                  path: h(m),
                  submission: f
                }
              }

              function pe(e, t, r, o, a, i, s, l, u, c, d, f, h, p) {
                let m = p ? Object.values(p)[0] : h ? Object.values(h)[0] : void 0,
                  v = e.createURL(t.location),
                  y = e.createURL(a),
                  g = p ? Object.keys(p)[0] : void 0,
                  w = function(e, t) {
                    let r = e;
                    if (t) {
                      let n = e.findIndex((e => e.route.id === t));
                      n >= 0 && (r = e.slice(0, n))
                    }
                    return r
                  }(r, g).filter(((e, r) => {
                    if (e.route.lazy) return !0;
                    if (null == e.route.loader) return !1;
                    if (function(e, t, r) {
                        let n = !t || r.route.id !== t.route.id,
                          o = void 0 === e[r.route.id];
                        return n || o
                      }(t.loaderData, t.matches[r], e) || s.some((t => t === e.route.id))) return !0;
                    let a = t.matches[r],
                      l = e;
                    return ve(e, n({
                      currentUrl: v,
                      currentParams: a.params,
                      nextUrl: y,
                      nextParams: l.params
                    }, o, {
                      actionResult: m,
                      defaultShouldRevalidate: i || v.pathname + v.search === y.pathname + y.search || v.search !== y.search || me(a, l)
                    }))
                  })),
                  E = [];
                return u.forEach(((e, a) => {
                  if (!r.some((t => t.route.id === e.routeId))) return;
                  let s = b(d, e.path, f);
                  if (!s) return void E.push({
                    key: a,
                    routeId: e.routeId,
                    path: e.path,
                    matches: null,
                    match: null,
                    controller: null
                  });
                  let u = t.fetchers.get(a),
                    h = Me(s, e.path),
                    p = !1;
                  p = !c.has(a) && (!!l.includes(a) || (u && "idle" !== u.state && void 0 === u.data ? i : ve(h, n({
                    currentUrl: v,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: y,
                    nextParams: r[r.length - 1].params
                  }, o, {
                    actionResult: m,
                    defaultShouldRevalidate: i
                  })))), p && E.push({
                    key: a,
                    routeId: e.routeId,
                    path: e.path,
                    matches: s,
                    match: h,
                    controller: new AbortController
                  })
                })), [w, E]
              }

              function me(e, t) {
                let r = e.route.path;
                return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
              }

              function ve(e, t) {
                if (e.route.shouldRevalidate) {
                  let r = e.route.shouldRevalidate(t);
                  if ("boolean" == typeof r) return r
                }
                return t.defaultShouldRevalidate
              }
              async function ye(e, t, r) {
                if (!e.lazy) return;
                let o = await e.lazy();
                if (!e.lazy) return;
                let a = r[e.id];
                u(a, "No route found in manifest");
                let i = {};
                for (let e in o) {
                  let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
                  c(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || y.has(e) || (i[e] = o[e])
                }
                Object.assign(a, i), Object.assign(a, n({}, t(a), {
                  lazy: void 0
                }))
              }
              async function ge(e, t, r, n, o, a, i, s) {
                let l, c, d;
                void 0 === s && (s = {});
                let f = e => {
                  let n, o = new Promise(((e, t) => n = t));
                  return d = () => n(), t.signal.addEventListener("abort", d), Promise.race([e({
                    request: t,
                    params: r.params,
                    context: s.requestContext
                  }), o])
                };
                try {
                  let n = r.route[e];
                  if (r.route.lazy)
                    if (n) {
                      let e, t = await Promise.all([f(n).catch((t => {
                        e = t
                      })), ye(r.route, a, o)]);
                      if (e) throw e;
                      c = t[0]
                    } else {
                      if (await ye(r.route, a, o), n = r.route[e], !n) {
                        if ("action" === e) {
                          let e = new URL(t.url),
                            n = e.pathname + e.search;
                          throw ke(405, {
                            method: t.method,
                            pathname: n,
                            routeId: r.route.id
                          })
                        }
                        return {
                          type: v.data,
                          data: void 0
                        }
                      }
                      c = await f(n)
                    }
                  else {
                    if (!n) {
                      let e = new URL(t.url);
                      throw ke(404, {
                        pathname: e.pathname + e.search
                      })
                    }
                    c = await f(n)
                  }
                  u(void 0 !== c, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
                } catch (e) {
                  l = v.error, c = e
                } finally {
                  d && t.signal.removeEventListener("abort", d)
                }
                if (null != (h = c) && "number" == typeof h.status && "string" == typeof h.statusText && "object" == typeof h.headers && void 0 !== h.body) {
                  let e, o = c.status;
                  if (ne.has(o)) {
                    let e = c.headers.get("Location");
                    if (u(e, "Redirects returned/thrown from loaders/actions must have a Location header"), le.test(e)) {
                      if (!s.isStaticRequest) {
                        let r = new URL(t.url),
                          n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                          o = null != O(n.pathname, i);
                        n.origin === r.origin && o && (e = n.pathname + n.search + n.hash)
                      }
                    } else e = fe(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, e);
                    if (s.isStaticRequest) throw c.headers.set("Location", e), c;
                    return {
                      type: v.redirect,
                      status: o,
                      location: e,
                      revalidate: null !== c.headers.get("X-Remix-Revalidate"),
                      reloadDocument: null !== c.headers.get("X-Remix-Reload-Document")
                    }
                  }
                  if (s.isRouteRequest) throw {
                    type: l === v.error ? v.error : v.data,
                    response: c
                  };
                  let a = c.headers.get("Content-Type");
                  return e = a && /\bapplication\/json\b/.test(a) ? await c.json() : await c.text(), l === v.error ? {
                    type: l,
                    error: new X(o, c.statusText, e),
                    headers: c.headers
                  } : {
                    type: v.data,
                    data: e,
                    statusCode: c.status,
                    headers: c.headers
                  }
                }
                var h, p, m;
                return l === v.error ? {
                  type: l,
                  error: c
                } : function(e) {
                  let t = e;
                  return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
                }(c) ? {
                  type: v.deferred,
                  deferredData: c,
                  statusCode: null == (p = c.init) ? void 0 : p.status,
                  headers: (null == (m = c.init) ? void 0 : m.headers) && new Headers(c.init.headers)
                } : {
                  type: v.data,
                  data: c
                }
              }

              function be(e, t, r, n) {
                let o = e.createURL(Le(t)).toString(),
                  a = {
                    signal: r
                  };
                if (n && Ue(n.formMethod)) {
                  let {
                    formMethod: e,
                    formEncType: t
                  } = n;
                  a.method = e.toUpperCase(), "application/json" === t ? (a.headers = new Headers({
                    "Content-Type": t
                  }), a.body = JSON.stringify(n.json)) : "text/plain" === t ? a.body = n.text : "application/x-www-form-urlencoded" === t && n.formData ? a.body = we(n.formData) : a.body = n.formData
                }
                return new Request(o, a)
              }

              function we(e) {
                let t = new URLSearchParams;
                for (let [r, n] of e.entries()) t.append(r, "string" == typeof n ? n : n.name);
                return t
              }

              function Ee(e) {
                let t = new FormData;
                for (let [r, n] of e.entries()) t.append(r, n);
                return t
              }

              function Se(e, t, r, o, a, i, s, l) {
                let {
                  loaderData: c,
                  errors: d
                } = function(e, t, r, n, o) {
                  let a, i = {},
                    s = null,
                    l = !1,
                    c = {};
                  return r.forEach(((r, d) => {
                    let f = t[d].route.id;
                    if (u(!Te(r), "Cannot handle redirect results in processLoaderData"), Pe(r)) {
                      let t = xe(e, f),
                        o = r.error;
                      n && (o = Object.values(n)[0], n = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = o), i[f] = void 0, l || (l = !0, a = Z(r.error) ? r.error.status : 500), r.headers && (c[f] = r.headers)
                    } else De(r) ? (o.set(f, r.deferredData), i[f] = r.deferredData.data) : i[f] = r.data, null == r.statusCode || 200 === r.statusCode || l || (a = r.statusCode), r.headers && (c[f] = r.headers)
                  })), n && (s = n, i[Object.keys(n)[0]] = void 0), {
                    loaderData: i,
                    errors: s,
                    statusCode: a || 200,
                    loaderHeaders: c
                  }
                }(t, r, o, a, l);
                for (let t = 0; t < i.length; t++) {
                  let {
                    key: r,
                    match: o,
                    controller: a
                  } = i[t];
                  u(void 0 !== s && void 0 !== s[t], "Did not find corresponding fetcher result");
                  let l = s[t];
                  if (!a || !a.signal.aborted)
                    if (Pe(l)) {
                      let t = xe(e.matches, null == o ? void 0 : o.route.id);
                      d && d[t.route.id] || (d = n({}, d, {
                        [t.route.id]: l.error
                      })), e.fetchers.delete(r)
                    } else if (Te(l)) u(!1, "Unhandled fetcher revalidation redirect");
                  else if (De(l)) u(!1, "Unhandled fetcher deferred data");
                  else {
                    let t = Ie(l.data);
                    e.fetchers.set(r, t)
                  }
                }
                return {
                  loaderData: c,
                  errors: d
                }
              }

              function Re(e, t, r, o) {
                let a = n({}, t);
                for (let n of r) {
                  let r = n.route.id;
                  if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && n.route.loader && (a[r] = e[r]), o && o.hasOwnProperty(r)) break
                }
                return a
              }

              function xe(e, t) {
                return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
              }

              function Ce(e) {
                let t = 1 === e.length ? e[0] : e.find((e => e.index || !e.path || "/" === e.path)) || {
                  id: "__shim-error-route__"
                };
                return {
                  matches: [{
                    params: {},
                    pathname: "",
                    pathnameBase: "",
                    route: t
                  }],
                  route: t
                }
              }

              function ke(e, t) {
                let {
                  pathname: r,
                  routeId: n,
                  method: o,
                  type: a
                } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
                return 400 === e ? (i = "Bad Request", o && r && n ? s = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === a ? s = "defer() is not supported in actions" : "invalid-body" === a && (s = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", s = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && n ? s = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')), new X(e || 500, i, new Error(s), !0)
              }

              function _e(e) {
                for (let t = e.length - 1; t >= 0; t--) {
                  let r = e[t];
                  if (Te(r)) return {
                    result: r,
                    idx: t
                  }
                }
              }

              function Le(e) {
                return h(n({}, "string" == typeof e ? p(e) : e, {
                  hash: ""
                }))
              }

              function De(e) {
                return e.type === v.deferred
              }

              function Pe(e) {
                return e.type === v.error
              }

              function Te(e) {
                return (e && e.type) === v.redirect
              }

              function Ue(e) {
                return ee.has(e.toLowerCase())
              }
              async function Ae(e, t, r, n, o, a) {
                for (let i = 0; i < r.length; i++) {
                  let s = r[i],
                    l = t[i];
                  if (!l) continue;
                  let c = e.find((e => e.route.id === l.route.id)),
                    d = null != c && !me(c, l) && void 0 !== (a && a[l.route.id]);
                  if (De(s) && (o || d)) {
                    let e = n[i];
                    u(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await je(s, e, o).then((e => {
                      e && (r[i] = e || r[i])
                    }))
                  }
                }
              }
              async function je(e, t, r) {
                if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
                  if (r) try {
                    return {
                      type: v.data,
                      data: e.deferredData.unwrappedData
                    }
                  } catch (e) {
                    return {
                      type: v.error,
                      error: e
                    }
                  }
                  return {
                    type: v.data,
                    data: e.deferredData.data
                  }
                }
              }

              function Oe(e) {
                return new URLSearchParams(e).getAll("index").some((e => "" === e))
              }

              function Me(e, t) {
                let r = "string" == typeof t ? p(t).search : t.search;
                if (e[e.length - 1].route.index && Oe(r || "")) return e[e.length - 1];
                let n = B(e);
                return n[n.length - 1]
              }

              function Ne(e) {
                let {
                  formMethod: t,
                  formAction: r,
                  formEncType: n,
                  text: o,
                  formData: a,
                  json: i
                } = e;
                if (t && r && n) return null != o ? {
                  formMethod: t,
                  formAction: r,
                  formEncType: n,
                  formData: void 0,
                  json: void 0,
                  text: o
                } : null != a ? {
                  formMethod: t,
                  formAction: r,
                  formEncType: n,
                  formData: a,
                  json: void 0,
                  text: void 0
                } : void 0 !== i ? {
                  formMethod: t,
                  formAction: r,
                  formEncType: n,
                  formData: void 0,
                  json: i,
                  text: void 0
                } : void 0
              }

              function Be(e, t) {
                return t ? {
                  state: "loading",
                  location: e,
                  formMethod: t.formMethod,
                  formAction: t.formAction,
                  formEncType: t.formEncType,
                  formData: t.formData,
                  json: t.json,
                  text: t.text
                } : {
                  state: "loading",
                  location: e,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  json: void 0,
                  text: void 0
                }
              }

              function Fe(e, t) {
                return e ? {
                  state: "loading",
                  formMethod: e.formMethod,
                  formAction: e.formAction,
                  formEncType: e.formEncType,
                  formData: e.formData,
                  json: e.json,
                  text: e.text,
                  data: t
                } : {
                  state: "loading",
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  json: void 0,
                  text: void 0,
                  data: t
                }
              }

              function Ie(e) {
                return {
                  state: "idle",
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  json: void 0,
                  text: void 0,
                  data: e
                }
              }
              Symbol("deferred")
            },
            2224: (e, t) => {
              "use strict";
              var r = Symbol.for("react.element"),
                n = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"),
                i = Symbol.for("react.profiler"),
                s = Symbol.for("react.provider"),
                l = Symbol.for("react.context"),
                u = Symbol.for("react.forward_ref"),
                c = Symbol.for("react.suspense"),
                d = Symbol.for("react.memo"),
                f = Symbol.for("react.lazy"),
                h = Symbol.iterator,
                p = {
                  isMounted: function() {
                    return !1
                  },
                  enqueueForceUpdate: function() {},
                  enqueueReplaceState: function() {},
                  enqueueSetState: function() {}
                },
                m = Object.assign,
                v = {};

              function y(e, t, r) {
                this.props = e, this.context = t, this.refs = v, this.updater = r || p
              }

              function g() {}

              function b(e, t, r) {
                this.props = e, this.context = t, this.refs = v, this.updater = r || p
              }
              y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
              }, y.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
              }, g.prototype = y.prototype;
              var w = b.prototype = new g;
              w.constructor = b, m(w, y.prototype), w.isPureReactComponent = !0;
              var E = Array.isArray,
                S = Object.prototype.hasOwnProperty,
                R = {
                  current: null
                },
                x = {
                  key: !0,
                  ref: !0,
                  __self: !0,
                  __source: !0
                };

              function C(e, t, n) {
                var o, a = {},
                  i = null,
                  s = null;
                if (null != t)
                  for (o in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = "" + t.key), t) S.call(t, o) && !x.hasOwnProperty(o) && (a[o] = t[o]);
                var l = arguments.length - 2;
                if (1 === l) a.children = n;
                else if (1 < l) {
                  for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                  a.children = u
                }
                if (e && e.defaultProps)
                  for (o in l = e.defaultProps) void 0 === a[o] && (a[o] = l[o]);
                return {
                  $$typeof: r,
                  type: e,
                  key: i,
                  ref: s,
                  props: a,
                  _owner: R.current
                }
              }

              function k(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
              }
              var _ = /\/+/g;

              function L(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                  var t = {
                    "=": "=0",
                    ":": "=2"
                  };
                  return "$" + e.replace(/[=:]/g, (function(e) {
                    return t[e]
                  }))
                }("" + e.key) : t.toString(36)
              }

              function D(e, t, o, a, i) {
                var s = typeof e;
                "undefined" !== s && "boolean" !== s || (e = null);
                var l = !1;
                if (null === e) l = !0;
                else switch (s) {
                  case "string":
                  case "number":
                    l = !0;
                    break;
                  case "object":
                    switch (e.$$typeof) {
                      case r:
                      case n:
                        l = !0
                    }
                }
                if (l) return i = i(l = e), e = "" === a ? "." + L(l, 0) : a, E(i) ? (o = "", null != e && (o = e.replace(_, "$&/") + "/"), D(i, t, o, "", (function(e) {
                  return e
                }))) : null != i && (k(i) && (i = function(e, t) {
                  return {
                    $$typeof: r,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                  }
                }(i, o + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(_, "$&/") + "/") + e)), t.push(i)), 1;
                if (l = 0, a = "" === a ? "." : a + ":", E(e))
                  for (var u = 0; u < e.length; u++) {
                    var c = a + L(s = e[u], u);
                    l += D(s, t, o, c, i)
                  } else if (c = function(e) {
                      return null === e || "object" != typeof e ? null : "function" == typeof(e = h && e[h] || e["@@iterator"]) ? e : null
                    }(e), "function" == typeof c)
                    for (e = c.call(e), u = 0; !(s = e.next()).done;) l += D(s = s.value, t, o, c = a + L(s, u++), i);
                  else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
              }

              function P(e, t, r) {
                if (null == e) return e;
                var n = [],
                  o = 0;
                return D(e, n, "", "", (function(e) {
                  return t.call(r, e, o++)
                })), n
              }

              function T(e) {
                if (-1 === e._status) {
                  var t = e._result;
                  (t = t()).then((function(t) {
                    0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                  }), (function(t) {
                    0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                  })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
              }
              var U = {
                  current: null
                },
                A = {
                  transition: null
                },
                j = {
                  ReactCurrentDispatcher: U,
                  ReactCurrentBatchConfig: A,
                  ReactCurrentOwner: R
                };
              t.Children = {
                map: P,
                forEach: function(e, t, r) {
                  P(e, (function() {
                    t.apply(this, arguments)
                  }), r)
                },
                count: function(e) {
                  var t = 0;
                  return P(e, (function() {
                    t++
                  })), t
                },
                toArray: function(e) {
                  return P(e, (function(e) {
                    return e
                  })) || []
                },
                only: function(e) {
                  if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
                  return e
                }
              }, t.Component = y, t.Fragment = o, t.Profiler = i, t.PureComponent = b, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = m({}, e.props),
                  a = e.key,
                  i = e.ref,
                  s = e._owner;
                if (null != t) {
                  if (void 0 !== t.ref && (i = t.ref, s = R.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                  for (u in t) S.call(t, u) && !x.hasOwnProperty(u) && (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u) o.children = n;
                else if (1 < u) {
                  l = Array(u);
                  for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
                  o.children = l
                }
                return {
                  $$typeof: r,
                  type: e.type,
                  key: a,
                  ref: i,
                  props: o,
                  _owner: s
                }
              }, t.createContext = function(e) {
                return (e = {
                  $$typeof: l,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                  _defaultValue: null,
                  _globalName: null
                }).Provider = {
                  $$typeof: s,
                  _context: e
                }, e.Consumer = e
              }, t.createElement = C, t.createFactory = function(e) {
                var t = C.bind(null, e);
                return t.type = e, t
              }, t.createRef = function() {
                return {
                  current: null
                }
              }, t.forwardRef = function(e) {
                return {
                  $$typeof: u,
                  render: e
                }
              }, t.isValidElement = k, t.lazy = function(e) {
                return {
                  $$typeof: f,
                  _payload: {
                    _status: -1,
                    _result: e
                  },
                  _init: T
                }
              }, t.memo = function(e, t) {
                return {
                  $$typeof: d,
                  type: e,
                  compare: void 0 === t ? null : t
                }
              }, t.startTransition = function(e) {
                var t = A.transition;
                A.transition = {};
                try {
                  e()
                } finally {
                  A.transition = t
                }
              }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
              }, t.useCallback = function(e, t) {
                return U.current.useCallback(e, t)
              }, t.useContext = function(e) {
                return U.current.useContext(e)
              }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return U.current.useDeferredValue(e)
              }, t.useEffect = function(e, t) {
                return U.current.useEffect(e, t)
              }, t.useId = function() {
                return U.current.useId()
              }, t.useImperativeHandle = function(e, t, r) {
                return U.current.useImperativeHandle(e, t, r)
              }, t.useInsertionEffect = function(e, t) {
                return U.current.useInsertionEffect(e, t)
              }, t.useLayoutEffect = function(e, t) {
                return U.current.useLayoutEffect(e, t)
              }, t.useMemo = function(e, t) {
                return U.current.useMemo(e, t)
              }, t.useReducer = function(e, t, r) {
                return U.current.useReducer(e, t, r)
              }, t.useRef = function(e) {
                return U.current.useRef(e)
              }, t.useState = function(e) {
                return U.current.useState(e)
              }, t.useSyncExternalStore = function(e, t, r) {
                return U.current.useSyncExternalStore(e, t, r)
              }, t.useTransition = function() {
                return U.current.useTransition()
              }, t.version = "18.2.0"
            },
            8188: (e, t, r) => {
              "use strict";
              e.exports = r(2224)
            },
            2218: (e, t, r) => {
              "use strict";
              var n = {
                  "./destination": () => Promise.all([r.e(172), r.e(92)]).then((() => () => r(5832))),
                  "./index": () => Promise.all([r.e(648), r.e(172), r.e(16)]).then((() => () => r(8818)))
                },
                o = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                a = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      o = r.S[n];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => a
              })
            },
            8856: e => {
              "use strict";
              e.exports = r
            },
            3864: e => {
              "use strict";
              e.exports = n
            },
            1128: e => {
              "use strict";
              e.exports = o
            },
            5190: e => {
              "use strict";
              e.exports = a
            },
            9344: e => {
              "use strict";
              e.exports = i
            }
          },
          d = {};

        function f(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            exports: {}
          };
          return c[e](r, r.exports, f), r.exports
        }
        return f.m = c, f.c = d, f.y = t, f.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return f.d(t, {
            a: t
          }), t
        }, f.d = (e, t) => {
          for (var r in t) f.o(t, r) && !f.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((t, r) => (f.f[r](e, t), t)), [])), f.u = e => "js/" + {
          16: "392ea22f2a7b7b086d99b513f5a63eb8",
          61: "03b4d0d4efce44951a9bba6a965449d9",
          72: "f8508142d9aaf10fbe563a90eba3758e",
          92: "2c57bcbaeff8bd2f134da65f068d5e84",
          108: "5bbe2b26fb0582983ce01215b289903b",
          136: "b2aa169ac03539917044ae9f5b861d36",
          172: "8207d090e6d0c2b34ce698f23a9dabd5",
          272: "cfb220308c23f49a006a92f89dcb40bd",
          280: "a6d594086aa55ea36183191a144a21fd",
          320: "f413b69c0973979a5fd8c267dff8805a",
          532: "2efab6da18f3fb8223a3c796125ba856",
          648: "9bc4aabe57543f145346d858b492197c",
          660: "b8edb7ae4f431fab8e75ddc5bc2ac635",
          907: "954cee7d539e69dc13940372bca20e8a",
          912: "08d6e0c19072d31554355d3d774c62eb"
        } [e] + ".js", f.miniCssF = e => "css/" + {
          16: "3d6ccc9df193a95b2805568a21ba7be3",
          92: "a2a7ef9efbf3f8f1be6ace28ac8e3b46"
        } [e] + ".css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/sites-gta:", f.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var a, i;
            if (void 0 !== n)
              for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                var c = l[u];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == s + n) {
                  a = c;
                  break
                }
              }
            a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, f.nc && a.setAttribute("nonce", f.nc), a.setAttribute("data-webpack", s + n), a.src = t), e[t] = [r];
            var d = (r, n) => {
                a.onerror = a.onload = null, clearTimeout(h);
                var o = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), r) return r(n)
              },
              h = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), i && document.head.appendChild(a)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l = {
          61: [3061],
          92: [1668, 7036],
          172: [2836, 3052, 5792]
        }, u = {
          1668: ["default", "./index", 8856],
          2836: ["default", "./index", 1128],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          5792: ["default", "./index", 9344],
          7036: ["default", "./components", 5190]
        }, f.f.remotes = (e, t) => {
          f.o(l, e) && l[e].forEach((e => {
            var r = f.R;
            r || (r = []);
            var n = u[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), f.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                a = (e, r, a, i, s, l) => {
                  try {
                    var u = e(r, a);
                    if (!u || !u.then) return s(u, i, l);
                    var c = u.then((e => s(e, i)), o);
                    if (!l) return c;
                    t.push(n.p = c)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, t, o) => a(t.get, n[1], r, 0, s, o),
                s = t => {
                  n.p = 1, f.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(f, n[2], 0, 0, ((e, t, r) => e ? a(f.I, n[0], 0, e, i, r) : o()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            t = {};
          f.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              f.o(f.S, r) || (f.S[r] = {});
              var a = f.S[r],
                i = "@rockstargames/sites-gta",
                s = (e, t, r, n) => {
                  var o = a[e] = a[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (o[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                l = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = f(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(f.S[r], n);
                    if (o.then) return u.push(o.then(a, t));
                    var i = a(o);
                    if (i && i.then) return u.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                u = [];
              return "default" === r && (s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([f.e(907), f.e(61), f.e(660)]).then((() => () => f(4660))))), s("@rockstargames/router", "1.0.0", (() => Promise.all([f.e(320), f.e(912)]).then((() => () => f(2912))))), s("gsap", "0.0.0", (() => f.e(72).then((() => () => f(4072))))), s("react-focus-lock", "2.9.6", (() => Promise.all([f.e(108), f.e(136)]).then((() => () => f(4136))))), s("react-remove-scroll", "2.5.7", (() => Promise.all([f.e(108), f.e(272)]).then((() => () => f(2272))))), s("react-router-dom", "6.17.0", (() => () => f(3668)), 1), s("react-router-dom", "6.17.0", (() => () => f(2096)), 1), s("react", "18.2.0", (() => () => f(8188)), 1), l(3864), l(1128), l(9344), l(8856), l(5190)), u.length ? e[r] = Promise.all(u).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var t = f.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = (r, n) => {
              if (0 in r) {
                n = e(n);
                var o = r[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var i = 0, s = 1, l = !0;; s++, i++) {
                  var u, c, d = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= n.length || "o" == (c = (typeof(u = n[i]))[0])) return !l || ("u" == d ? s > o && !a : "" == d != a);
                  if ("u" == c) {
                    if (!l || "u" != d) return !1
                  } else if (l)
                    if (d == c)
                      if (s <= o) {
                        if (u != r[s]) return !1
                      } else {
                        if (a ? u > r[s] : u < r[s]) return !1;
                        u != r[s] && (l = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (a || s <= o) return !1;
                    l = !1, s--
                  } else {
                    if (s <= o || c < d != a) return !1;
                    l = !1
                  } else "s" != d && "n" != d && (l = !1, s--)
                }
              }
              var f = [],
                h = f.pop.bind(f);
              for (i = 1; i < r.length; i++) {
                var p = r[i];
                f.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? t(p, n) : !h())
              }
              return !!h()
            },
            r = (r, n, o) => {
              var a = r[n];
              return (n = Object.keys(a).reduce(((r, n) => !t(o, n) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var o = t[n],
                    a = (typeof o)[0];
                  if (n >= r.length) return "u" == a;
                  var i = r[n],
                    s = (typeof i)[0];
                  if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
                  if ("o" != a && "u" != a && o != i) return o < i;
                  n++
                }
              })(r, n) ? r : n), 0)) && a[n]
            },
            n = (e => function(t, r, n, o) {
              var a = f.I(t);
              return a && a.then ? a.then(e.bind(e, t, f.S[t], r, n, o)) : e(t, f.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var i = t && f.o(t, n) && r(t, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              696: () => n("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([f.e(907), f.e(61), f.e(280)]).then((() => () => f(4660))))),
              4936: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => () => f(2096))),
              6372: () => n("default", "gsap", [1, "workspace:*"], (() => f.e(72).then((() => () => f(4072))))),
              7328: () => n("default", "react-remove-scroll", [1, 2, 5, 7], (() => Promise.all([f.e(108), f.e(272)]).then((() => () => f(2272))))),
              8712: () => n("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([f.e(108), f.e(136)]).then((() => () => f(4136))))),
              8860: () => n("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([f.e(320), f.e(532)]).then((() => () => f(2912))))),
              1320: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => () => f(3668))),
              8200: () => n("default", "react", [1, 18, 2, 0], (() => () => f(8188)))
            };
          [8200].forEach((e => {
            f.m[e] = t => {
              o[e] = 0, delete f.c[e];
              var r = a[e]();
              if ("function" != typeof r) throw new Error("Shared module is not available for eager consumption: " + e);
              t.exports = r()
            }
          }));
          var i = {
              16: [8860],
              172: [696, 4936, 6372, 7328, 8712],
              320: [1320]
            },
            s = {};
          f.f.consumes = (e, t) => {
            f.o(i, e) && i[e].forEach((e => {
              if (f.o(o, e)) return t.push(o[e]);
              if (!s[e]) {
                var r = t => {
                  o[e] = 0, f.m[e] = r => {
                    delete f.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var n = t => {
                  delete o[e], f.m[e] = r => {
                    throw delete f.c[e], t
                  }
                };
                try {
                  var i = a[e]();
                  i.then ? t.push(o[e] = i.then(r).catch(n)) : r(i)
                } catch (e) {
                  n(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              1: 0
            };
            f.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                16: 1,
                92: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = f.miniCssF(e),
                  o = f.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var o = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (o === e || o === t)) return i
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var i;
                      if ((o = (i = a[n]).getAttribute("data-href")) === e || o === t) return i
                    }
                  })(n, o)) return t();
                ((e, t, r, n, o) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = r => {
                    if (a.onerror = a.onload = null, "load" === r.type) n();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        l = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = s, a.parentNode && a.parentNode.removeChild(a), o(l)
                    }
                  }, a.href = t, document.head.appendChild(a)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            1: 0
          };
          f.f.j = (t, r) => {
            var n = f.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(320|61)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => n = e[t] = [r, o]));
              r.push(n[2] = o);
              var a = f.p + f.u(t),
                i = new Error;
              f.l(a, (r => {
                if (f.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, o, a = r[0],
                i = r[1],
                s = r[2],
                l = 0;
              if (a.some((t => 0 !== e[t]))) {
                for (n in i) f.o(i, n) && (f.m[n] = i[n]);
                s && s(f)
              }
              for (t && t(r); l < a.length; l++) o = a[l], f.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), f.nc = void 0, f(9296), f(2218)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map