/*! For license information please see remote-entry.js.LICENSE.txt */
System.register([], (function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e, r, n, o, a = {
            6934: (e, t, r) => {
              "use strict";
              r.r(t), r.d(t, {
                AbortedDeferredError: () => a.X3,
                Await: () => o.KP,
                BrowserRouter: () => T,
                Form: () => O,
                HashRouter: () => k,
                Link: () => A,
                MemoryRouter: () => o.VA,
                NavLink: () => j,
                Navigate: () => o.Fg,
                NavigationType: () => a.aU,
                Outlet: () => o.j3,
                Route: () => o.AW,
                Router: () => o.F0,
                RouterProvider: () => L,
                Routes: () => o.Z5,
                ScrollRestoration: () => M,
                UNSAFE_DataRouterContext: () => o.w3,
                UNSAFE_DataRouterStateContext: () => o.FR,
                UNSAFE_LocationContext: () => o.gd,
                UNSAFE_NavigationContext: () => o.Us,
                UNSAFE_RouteContext: () => o.pW,
                UNSAFE_ViewTransitionContext: () => R,
                UNSAFE_useRouteId: () => o.Yi,
                UNSAFE_useScrollRestoration: () => G,
                createBrowserRouter: () => b,
                createHashRouter: () => w,
                createMemoryRouter: () => o.bi,
                createPath: () => a.Ep,
                createRoutesFromChildren: () => o.is,
                createRoutesFromElements: () => o.i7,
                createSearchParams: () => d,
                defer: () => a.PQ,
                generatePath: () => a.Gn,
                isRouteErrorResponse: () => a.WK,
                json: () => a.AV,
                matchPath: () => a.LX,
                matchRoutes: () => a.fp,
                parsePath: () => a.cP,
                redirect: () => a.uX,
                redirectDocument: () => a.fZ,
                renderMatches: () => o.Oe,
                resolvePath: () => a.i3,
                unstable_HistoryRouter: () => D,
                unstable_useBlocker: () => o.aQ,
                unstable_usePrompt: () => te,
                unstable_useViewTransitionState: () => re,
                useActionData: () => o.nA,
                useAsyncError: () => o.iG,
                useAsyncValue: () => o.qv,
                useBeforeUnload: () => ee,
                useFetcher: () => Z,
                useFetchers: () => X,
                useFormAction: () => K,
                useHref: () => o.oQ,
                useInRouterContext: () => o.GV,
                useLinkClickHandler: () => W,
                useLoaderData: () => o.f_,
                useLocation: () => o.TH,
                useMatch: () => o.bS,
                useMatches: () => o.SN,
                useNavigate: () => o.s0,
                useNavigation: () => o.HJ,
                useNavigationType: () => o.ur,
                useOutlet: () => o.pC,
                useOutletContext: () => o.bx,
                useParams: () => o.UO,
                useResolvedPath: () => o.WU,
                useRevalidator: () => o.xW,
                useRouteError: () => o.lk,
                useRouteLoaderData: () => o.V4,
                useRoutes: () => o.V$,
                useSearchParams: () => $,
                useSubmit: () => z
              });
              var n = r(279),
                o = r(9234),
                a = r(6410);

              function i() {
                return i = Object.assign ? Object.assign.bind() : function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                  }
                  return e
                }, i.apply(this, arguments)
              }

              function s(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
              }
              const l = "get",
                u = "application/x-www-form-urlencoded";

              function c(e) {
                return null != e && "string" == typeof e.tagName
              }

              function d(e) {
                return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
                  let n = e[r];
                  return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
                    [r, n]
                  ])
                }), []))
              }
              let f = null;
              const h = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

              function p(e) {
                return null == e || h.has(e) ? e : null
              }

              function m(e, t) {
                let r, n, o, i, s;
                if (c(d = e) && "form" === d.tagName.toLowerCase()) {
                  let s = e.getAttribute("action");
                  n = s ? (0, a.Zn)(s, t) : null, r = e.getAttribute("method") || l, o = p(e.getAttribute("enctype")) || u, i = new FormData(e)
                } else if (function(e) {
                    return c(e) && "button" === e.tagName.toLowerCase()
                  }(e) || function(e) {
                    return c(e) && "input" === e.tagName.toLowerCase()
                  }(e) && ("submit" === e.type || "image" === e.type)) {
                  let s = e.form;
                  if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                  let c = e.getAttribute("formaction") || s.getAttribute("action");
                  if (n = c ? (0, a.Zn)(c, t) : null, r = e.getAttribute("formmethod") || s.getAttribute("method") || l, o = p(e.getAttribute("formenctype")) || p(s.getAttribute("enctype")) || u, i = new FormData(s, e), ! function() {
                      if (null === f) try {
                        new FormData(document.createElement("form"), 0), f = !1
                      } catch (e) {
                        f = !0
                      }
                      return f
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
                  if (c(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                  r = l, n = null, o = u, s = e
                }
                var d;
                return i && "text/plain" === o && (s = i, i = void 0), {
                  action: n,
                  method: r.toLowerCase(),
                  encType: o,
                  formData: i,
                  body: s
                }
              }
              const v = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
                y = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
                g = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

              function b(e, t) {
                return (0, a.p7)({
                  basename: null == t ? void 0 : t.basename,
                  future: i({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, a.lX)({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
                  routes: e,
                  mapRouteProperties: o.us,
                  window: null == t ? void 0 : t.window
                }).initialize()
              }

              function w(e, t) {
                return (0, a.p7)({
                  basename: null == t ? void 0 : t.basename,
                  future: i({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, a.q_)({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
                  routes: e,
                  mapRouteProperties: o.us,
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
                  r = {};
                for (let [e, n] of t)
                  if (n && "RouteErrorResponse" === n.__type) r[e] = new a.OF(n.status, n.statusText, n.data, !0 === n.internal);
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
              const R = n.createContext({
                  isTransitioning: !1
                }),
                x = n.startTransition;
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

              function L(e) {
                let {
                  fallbackElement: t,
                  router: r,
                  future: a
                } = e, [i, s] = n.useState(r.state), [l, u] = n.useState(), [c, d] = n.useState({
                  isTransitioning: !1
                }), [f, h] = n.useState(), [p, m] = n.useState(), [v, y] = n.useState(), {
                  v7_startTransition: g
                } = a || {}, b = n.useCallback((e => {
                  g ? function(e) {
                    x ? x(e) : e()
                  }(e) : e()
                }), [g]), w = n.useCallback(((e, t) => {
                  let {
                    unstable_viewTransitionOpts: n
                  } = t;
                  n && null != r.window && "function" == typeof r.window.document.startViewTransition ? p && f ? (f.resolve(), p.skipTransition(), y({
                    state: e,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : (u(e), d({
                    isTransitioning: !0,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : b((() => s(e)))
                }), [b, p, f, r.window]);
                n.useLayoutEffect((() => r.subscribe(w)), [r, w]), n.useEffect((() => {
                  c.isTransitioning && h(new C)
                }), [c.isTransitioning]), n.useEffect((() => {
                  if (f && l && r.window) {
                    let e = l,
                      t = f.promise,
                      n = r.window.document.startViewTransition((async () => {
                        b((() => s(e))), await t
                      }));
                    n.finished.finally((() => {
                      h(void 0), m(void 0), u(void 0), d({
                        isTransitioning: !1
                      })
                    })), m(n)
                  }
                }), [b, l, f, r.window]), n.useEffect((() => {
                  f && l && i.location.key === l.location.key && f.resolve()
                }), [f, p, i.location, l]), n.useEffect((() => {
                  !c.isTransitioning && v && (u(v.state), d({
                    isTransitioning: !0,
                    currentLocation: v.currentLocation,
                    nextLocation: v.nextLocation
                  }), y(void 0))
                }), [c.isTransitioning, v]);
                let E = n.useMemo((() => ({
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
                  S = r.basename || "/",
                  L = n.useMemo((() => ({
                    router: r,
                    navigator: E,
                    static: !1,
                    basename: S
                  })), [r, E, S]);
                return n.createElement(n.Fragment, null, n.createElement(o.w3.Provider, {
                  value: L
                }, n.createElement(o.FR.Provider, {
                  value: i
                }, n.createElement(R.Provider, {
                  value: c
                }, n.createElement(o.F0, {
                  basename: S,
                  location: i.location,
                  navigationType: i.historyAction,
                  navigator: E
                }, i.initialized ? n.createElement(_, {
                  routes: r.routes,
                  state: i
                }) : t)))), null)
              }

              function _(e) {
                let {
                  routes: t,
                  state: r
                } = e;
                return (0, o.DY)(t, void 0, r)
              }

              function T(e) {
                let {
                  basename: t,
                  children: r,
                  future: i,
                  window: s
                } = e, l = n.useRef();
                null == l.current && (l.current = (0, a.lX)({
                  window: s,
                  v5Compat: !0
                }));
                let u = l.current,
                  [c, d] = n.useState({
                    action: u.action,
                    location: u.location
                  }),
                  {
                    v7_startTransition: f
                  } = i || {},
                  h = n.useCallback((e => {
                    f && x ? x((() => d(e))) : d(e)
                  }), [d, f]);
                return n.useLayoutEffect((() => u.listen(h)), [u, h]), n.createElement(o.F0, {
                  basename: t,
                  children: r,
                  location: c.location,
                  navigationType: c.action,
                  navigator: u
                })
              }

              function k(e) {
                let {
                  basename: t,
                  children: r,
                  future: i,
                  window: s
                } = e, l = n.useRef();
                null == l.current && (l.current = (0, a.q_)({
                  window: s,
                  v5Compat: !0
                }));
                let u = l.current,
                  [c, d] = n.useState({
                    action: u.action,
                    location: u.location
                  }),
                  {
                    v7_startTransition: f
                  } = i || {},
                  h = n.useCallback((e => {
                    f && x ? x((() => d(e))) : d(e)
                  }), [d, f]);
                return n.useLayoutEffect((() => u.listen(h)), [u, h]), n.createElement(o.F0, {
                  basename: t,
                  children: r,
                  location: c.location,
                  navigationType: c.action,
                  navigator: u
                })
              }

              function D(e) {
                let {
                  basename: t,
                  children: r,
                  future: a,
                  history: i
                } = e, [s, l] = n.useState({
                  action: i.action,
                  location: i.location
                }), {
                  v7_startTransition: u
                } = a || {}, c = n.useCallback((e => {
                  u && x ? x((() => l(e))) : l(e)
                }), [l, u]);
                return n.useLayoutEffect((() => i.listen(c)), [i, c]), n.createElement(o.F0, {
                  basename: t,
                  children: r,
                  location: s.location,
                  navigationType: s.action,
                  navigator: i
                })
              }
              const P = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                U = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                A = n.forwardRef((function(e, t) {
                  let r, {
                      onClick: l,
                      relative: u,
                      reloadDocument: c,
                      replace: d,
                      state: f,
                      target: h,
                      to: p,
                      preventScrollReset: m,
                      unstable_viewTransition: y
                    } = e,
                    g = s(e, v),
                    {
                      basename: b
                    } = n.useContext(o.Us),
                    w = !1;
                  if ("string" == typeof p && U.test(p) && (r = p, P)) try {
                    let e = new URL(window.location.href),
                      t = p.startsWith("//") ? new URL(e.protocol + p) : new URL(p),
                      r = (0, a.Zn)(t.pathname, b);
                    t.origin === e.origin && null != r ? p = r + t.search + t.hash : w = !0
                  } catch (e) {}
                  let E = (0, o.oQ)(p, {
                      relative: u
                    }),
                    S = W(p, {
                      replace: d,
                      state: f,
                      target: h,
                      preventScrollReset: m,
                      relative: u,
                      unstable_viewTransition: y
                    });
                  return n.createElement("a", i({}, g, {
                    href: r || E,
                    onClick: w || c ? l : function(e) {
                      l && l(e), e.defaultPrevented || S(e)
                    },
                    ref: t,
                    target: h
                  }))
                })),
                j = n.forwardRef((function(e, t) {
                  let {
                    "aria-current": r = "page",
                    caseSensitive: a = !1,
                    className: l = "",
                    end: u = !1,
                    style: c,
                    to: d,
                    unstable_viewTransition: f,
                    children: h
                  } = e, p = s(e, y), m = (0, o.WU)(d, {
                    relative: p.relative
                  }), v = (0, o.TH)(), g = n.useContext(o.FR), {
                    navigator: b
                  } = n.useContext(o.Us), w = null != g && re(m) && !0 === f, E = b.encodeLocation ? b.encodeLocation(m).pathname : m.pathname, S = v.pathname, R = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
                  a || (S = S.toLowerCase(), R = R ? R.toLowerCase() : null, E = E.toLowerCase());
                  let x, C = S === E || !u && S.startsWith(E) && "/" === S.charAt(E.length),
                    L = null != R && (R === E || !u && R.startsWith(E) && "/" === R.charAt(E.length)),
                    _ = {
                      isActive: C,
                      isPending: L,
                      isTransitioning: w
                    },
                    T = C ? r : void 0;
                  x = "function" == typeof l ? l(_) : [l, C ? "active" : null, L ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
                  let k = "function" == typeof c ? c(_) : c;
                  return n.createElement(A, i({}, p, {
                    "aria-current": T,
                    className: x,
                    ref: t,
                    style: k,
                    to: d,
                    unstable_viewTransition: f
                  }), "function" == typeof h ? h(_) : h)
                })),
                O = n.forwardRef(((e, t) => {
                  let r = z();
                  return n.createElement(F, i({}, e, {
                    submit: r,
                    ref: t
                  }))
                })),
                F = n.forwardRef(((e, t) => {
                  let {
                    reloadDocument: r,
                    replace: o,
                    state: a,
                    method: u = l,
                    action: c,
                    onSubmit: d,
                    submit: f,
                    relative: h,
                    preventScrollReset: p,
                    unstable_viewTransition: m
                  } = e, v = s(e, g), y = "get" === u.toLowerCase() ? "get" : "post", b = K(c, {
                    relative: h
                  });
                  return n.createElement("form", i({
                    ref: t,
                    method: y,
                    action: b,
                    onSubmit: r ? d : e => {
                      if (d && d(e), e.defaultPrevented) return;
                      e.preventDefault();
                      let t = e.nativeEvent.submitter,
                        r = (null == t ? void 0 : t.getAttribute("formmethod")) || u;
                      f(t || e.currentTarget, {
                        method: r,
                        replace: o,
                        state: a,
                        relative: h,
                        preventScrollReset: p,
                        unstable_viewTransition: m
                      })
                    }
                  }, v))
                }));

              function M(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = e;
                return G({
                  getKey: t,
                  storageKey: r
                }), null
              }
              var N, B;

              function I(e) {
                let t = n.useContext(o.w3);
                return t || (0, a.J0)(!1), t
              }

              function J(e) {
                let t = n.useContext(o.FR);
                return t || (0, a.J0)(!1), t
              }

              function W(e, t) {
                let {
                  target: r,
                  replace: i,
                  state: s,
                  preventScrollReset: l,
                  relative: u,
                  unstable_viewTransition: c
                } = void 0 === t ? {} : t, d = (0, o.s0)(), f = (0, o.TH)(), h = (0, o.WU)(e, {
                  relative: u
                });
                return n.useCallback((t => {
                  if (function(e, t) {
                      return !(0 !== e.button || t && "_self" !== t || function(e) {
                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                      }(e))
                    }(t, r)) {
                    t.preventDefault();
                    let r = void 0 !== i ? i : (0, a.Ep)(f) === (0, a.Ep)(h);
                    d(e, {
                      replace: r,
                      state: s,
                      preventScrollReset: l,
                      relative: u,
                      unstable_viewTransition: c
                    })
                  }
                }), [f, d, h, i, s, r, e, l, u, c])
              }

              function $(e) {
                let t = n.useRef(d(e)),
                  r = n.useRef(!1),
                  a = (0, o.TH)(),
                  i = n.useMemo((() => function(e, t) {
                    let r = d(e);
                    return t && t.forEach(((e, n) => {
                      r.has(n) || t.getAll(n).forEach((e => {
                        r.append(n, e)
                      }))
                    })), r
                  }(a.search, r.current ? null : t.current)), [a.search]),
                  s = (0, o.s0)(),
                  l = n.useCallback(((e, t) => {
                    const n = d("function" == typeof e ? e(i) : e);
                    r.current = !0, s("?" + n, t)
                  }), [s, i]);
                return [i, l]
              }

              function H() {
                if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
              }

              function z() {
                let {
                  router: e
                } = I(N.UseSubmit), {
                  basename: t
                } = n.useContext(o.Us), r = (0, o.Yi)();
                return n.useCallback((function(n, o) {
                  void 0 === o && (o = {}), H();
                  let {
                    action: a,
                    method: i,
                    encType: s,
                    formData: l,
                    body: u
                  } = m(n, t);
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

              function V(e, t) {
                let {
                  router: r
                } = I(N.UseSubmitFetcher), {
                  basename: i
                } = n.useContext(o.Us);
                return n.useCallback((function(n, o) {
                  void 0 === o && (o = {}), H();
                  let {
                    action: s,
                    method: l,
                    encType: u,
                    formData: c,
                    body: d
                  } = m(n, i);
                  null == t && (0, a.J0)(!1), r.fetch(e, t, o.action || s, {
                    preventScrollReset: o.preventScrollReset,
                    formData: c,
                    body: d,
                    formMethod: o.method || l,
                    formEncType: o.encType || u
                  })
                }), [r, i, e, t])
              }

              function K(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t, {
                  basename: s
                } = n.useContext(o.Us), l = n.useContext(o.pW);
                l || (0, a.J0)(!1);
                let [u] = l.matches.slice(-1), c = i({}, (0, o.WU)(e || ".", {
                  relative: r
                })), d = (0, o.TH)();
                if (null == e && (c.search = d.search, u.route.index)) {
                  let e = new URLSearchParams(c.search);
                  e.delete("index"), c.search = e.toString() ? "?" + e.toString() : ""
                }
                return e && "." !== e || !u.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== s && (c.pathname = "/" === c.pathname ? s : (0, a.RQ)([s, c.pathname])), (0, a.Ep)(c)
              }(function(e) {
                e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
              })(N || (N = {})),
              function(e) {
                e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
              }(B || (B = {}));
              let q = 0;

              function Z() {
                var e;
                let {
                  router: t
                } = I(N.UseFetcher), r = n.useContext(o.pW);
                r || (0, a.J0)(!1);
                let s = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
                null == s && (0, a.J0)(!1);
                let [l] = n.useState((() => String(++q))), [u] = n.useState((() => (s || (0, a.J0)(!1), function(e, t) {
                  return n.forwardRef(((r, o) => {
                    let a = V(e, t);
                    return n.createElement(F, i({}, r, {
                      ref: o,
                      submit: a
                    }))
                  }))
                }(l, s)))), [c] = n.useState((() => e => {
                  t || (0, a.J0)(!1), s || (0, a.J0)(!1), t.fetch(l, s, e)
                })), d = V(l, s), f = t.getFetcher(l), h = n.useMemo((() => i({
                  Form: u,
                  submit: d,
                  load: c
                }, f)), [f, u, d, c]);
                return n.useEffect((() => () => {
                  t ? t.deleteFetcher(l) : console.warn("No router available to clean up from useFetcher()")
                }), [t, l]), h
              }

              function X() {
                return [...J(B.UseFetchers).fetchers.values()]
              }
              const Y = "react-router-scroll-positions";
              let Q = {};

              function G(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = void 0 === e ? {} : e, {
                  router: s
                } = I(N.UseScrollRestoration), {
                  restoreScrollPosition: l,
                  preventScrollReset: u
                } = J(B.UseScrollRestoration), {
                  basename: c
                } = n.useContext(o.Us), d = (0, o.TH)(), f = (0, o.SN)(), h = (0, o.HJ)();
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
                    if ("idle" === h.state) {
                      let e = (t ? t(d, f) : null) || d.key;
                      Q[e] = window.scrollY
                    }
                    try {
                      sessionStorage.setItem(r || Y, JSON.stringify(Q))
                    } catch (e) {}
                    window.history.scrollRestoration = "auto"
                  }), [r, t, h.state, d, f])), "undefined" != typeof document && (n.useLayoutEffect((() => {
                    try {
                      let e = sessionStorage.getItem(r || Y);
                      e && (Q = JSON.parse(e))
                    } catch (e) {}
                  }), [r]), n.useLayoutEffect((() => {
                    let e = t && "/" !== c ? (e, r) => t(i({}, e, {
                        pathname: (0, a.Zn)(e.pathname, c) || e.pathname
                      }), r) : t,
                      r = null == s ? void 0 : s.enableScrollRestoration(Q, (() => window.scrollY), e);
                    return () => r && r()
                  }), [s, c, t]), n.useLayoutEffect((() => {
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

              function te(e) {
                let {
                  when: t,
                  message: r
                } = e, a = (0, o.aQ)(t);
                n.useEffect((() => {
                  "blocked" === a.state && (window.confirm(r) ? setTimeout(a.proceed, 0) : a.reset())
                }), [a, r]), n.useEffect((() => {
                  "blocked" !== a.state || t || a.reset()
                }), [a, t])
              }

              function re(e, t) {
                void 0 === t && (t = {});
                let r = n.useContext(R);
                null == r && (0, a.J0)(!1);
                let {
                  basename: i
                } = I(N.useViewTransitionState), s = (0, o.WU)(e, {
                  relative: t.relative
                });
                if (!r.isTransitioning) return !1;
                let l = (0, a.Zn)(r.currentLocation.pathname, i) || r.currentLocation.pathname,
                  u = (0, a.Zn)(r.nextLocation.pathname, i) || r.nextLocation.pathname;
                return null != (0, a.LX)(s.pathname, u) || null != (0, a.LX)(s.pathname, l)
              }
            },
            3420: (e, t, r) => {
              "use strict";
              r.r(t), r.d(t, {
                AbortedDeferredError: () => a.X3,
                Await: () => o.KP,
                BrowserRouter: () => T,
                Form: () => O,
                HashRouter: () => k,
                Link: () => A,
                MemoryRouter: () => o.VA,
                NavLink: () => j,
                Navigate: () => o.Fg,
                NavigationType: () => a.aU,
                Outlet: () => o.j3,
                Route: () => o.AW,
                Router: () => o.F0,
                RouterProvider: () => L,
                Routes: () => o.Z5,
                ScrollRestoration: () => M,
                UNSAFE_DataRouterContext: () => o.w3,
                UNSAFE_DataRouterStateContext: () => o.FR,
                UNSAFE_LocationContext: () => o.gd,
                UNSAFE_NavigationContext: () => o.Us,
                UNSAFE_RouteContext: () => o.pW,
                UNSAFE_ViewTransitionContext: () => R,
                UNSAFE_useRouteId: () => o.Yi,
                UNSAFE_useScrollRestoration: () => G,
                createBrowserRouter: () => b,
                createHashRouter: () => w,
                createMemoryRouter: () => o.bi,
                createPath: () => a.Ep,
                createRoutesFromChildren: () => o.is,
                createRoutesFromElements: () => o.i7,
                createSearchParams: () => d,
                defer: () => a.PQ,
                generatePath: () => a.Gn,
                isRouteErrorResponse: () => a.WK,
                json: () => a.AV,
                matchPath: () => a.LX,
                matchRoutes: () => a.fp,
                parsePath: () => a.cP,
                redirect: () => a.uX,
                redirectDocument: () => a.fZ,
                renderMatches: () => o.Oe,
                resolvePath: () => a.i3,
                unstable_HistoryRouter: () => D,
                unstable_useBlocker: () => o.aQ,
                unstable_usePrompt: () => te,
                unstable_useViewTransitionState: () => re,
                useActionData: () => o.nA,
                useAsyncError: () => o.iG,
                useAsyncValue: () => o.qv,
                useBeforeUnload: () => ee,
                useFetcher: () => Z,
                useFetchers: () => X,
                useFormAction: () => K,
                useHref: () => o.oQ,
                useInRouterContext: () => o.GV,
                useLinkClickHandler: () => W,
                useLoaderData: () => o.f_,
                useLocation: () => o.TH,
                useMatch: () => o.bS,
                useMatches: () => o.SN,
                useNavigate: () => o.s0,
                useNavigation: () => o.HJ,
                useNavigationType: () => o.ur,
                useOutlet: () => o.pC,
                useOutletContext: () => o.bx,
                useParams: () => o.UO,
                useResolvedPath: () => o.WU,
                useRevalidator: () => o.xW,
                useRouteError: () => o.lk,
                useRouteLoaderData: () => o.V4,
                useRoutes: () => o.V$,
                useSearchParams: () => $,
                useSubmit: () => z
              });
              var n = r(279),
                o = r(9234),
                a = r(6410);

              function i() {
                return i = Object.assign ? Object.assign.bind() : function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                  }
                  return e
                }, i.apply(this, arguments)
              }

              function s(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
              }
              const l = "get",
                u = "application/x-www-form-urlencoded";

              function c(e) {
                return null != e && "string" == typeof e.tagName
              }

              function d(e) {
                return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
                  let n = e[r];
                  return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
                    [r, n]
                  ])
                }), []))
              }
              let f = null;
              const h = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

              function p(e) {
                return null == e || h.has(e) ? e : null
              }

              function m(e, t) {
                let r, n, o, i, s;
                if (c(d = e) && "form" === d.tagName.toLowerCase()) {
                  let s = e.getAttribute("action");
                  n = s ? (0, a.Zn)(s, t) : null, r = e.getAttribute("method") || l, o = p(e.getAttribute("enctype")) || u, i = new FormData(e)
                } else if (function(e) {
                    return c(e) && "button" === e.tagName.toLowerCase()
                  }(e) || function(e) {
                    return c(e) && "input" === e.tagName.toLowerCase()
                  }(e) && ("submit" === e.type || "image" === e.type)) {
                  let s = e.form;
                  if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                  let c = e.getAttribute("formaction") || s.getAttribute("action");
                  if (n = c ? (0, a.Zn)(c, t) : null, r = e.getAttribute("formmethod") || s.getAttribute("method") || l, o = p(e.getAttribute("formenctype")) || p(s.getAttribute("enctype")) || u, i = new FormData(s, e), ! function() {
                      if (null === f) try {
                        new FormData(document.createElement("form"), 0), f = !1
                      } catch (e) {
                        f = !0
                      }
                      return f
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
                  if (c(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                  r = l, n = null, o = u, s = e
                }
                var d;
                return i && "text/plain" === o && (s = i, i = void 0), {
                  action: n,
                  method: r.toLowerCase(),
                  encType: o,
                  formData: i,
                  body: s
                }
              }
              const v = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
                y = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
                g = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

              function b(e, t) {
                return (0, a.p7)({
                  basename: null == t ? void 0 : t.basename,
                  future: i({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, a.lX)({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
                  routes: e,
                  mapRouteProperties: o.us,
                  window: null == t ? void 0 : t.window
                }).initialize()
              }

              function w(e, t) {
                return (0, a.p7)({
                  basename: null == t ? void 0 : t.basename,
                  future: i({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, a.q_)({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
                  routes: e,
                  mapRouteProperties: o.us,
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
                  r = {};
                for (let [e, n] of t)
                  if (n && "RouteErrorResponse" === n.__type) r[e] = new a.OF(n.status, n.statusText, n.data, !0 === n.internal);
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
              const R = n.createContext({
                  isTransitioning: !1
                }),
                x = n.startTransition;
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

              function L(e) {
                let {
                  fallbackElement: t,
                  router: r,
                  future: a
                } = e, [i, s] = n.useState(r.state), [l, u] = n.useState(), [c, d] = n.useState({
                  isTransitioning: !1
                }), [f, h] = n.useState(), [p, m] = n.useState(), [v, y] = n.useState(), {
                  v7_startTransition: g
                } = a || {}, b = n.useCallback((e => {
                  g ? function(e) {
                    x ? x(e) : e()
                  }(e) : e()
                }), [g]), w = n.useCallback(((e, t) => {
                  let {
                    unstable_viewTransitionOpts: n
                  } = t;
                  n && null != r.window && "function" == typeof r.window.document.startViewTransition ? p && f ? (f.resolve(), p.skipTransition(), y({
                    state: e,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : (u(e), d({
                    isTransitioning: !0,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : b((() => s(e)))
                }), [b, p, f, r.window]);
                n.useLayoutEffect((() => r.subscribe(w)), [r, w]), n.useEffect((() => {
                  c.isTransitioning && h(new C)
                }), [c.isTransitioning]), n.useEffect((() => {
                  if (f && l && r.window) {
                    let e = l,
                      t = f.promise,
                      n = r.window.document.startViewTransition((async () => {
                        b((() => s(e))), await t
                      }));
                    n.finished.finally((() => {
                      h(void 0), m(void 0), u(void 0), d({
                        isTransitioning: !1
                      })
                    })), m(n)
                  }
                }), [b, l, f, r.window]), n.useEffect((() => {
                  f && l && i.location.key === l.location.key && f.resolve()
                }), [f, p, i.location, l]), n.useEffect((() => {
                  !c.isTransitioning && v && (u(v.state), d({
                    isTransitioning: !0,
                    currentLocation: v.currentLocation,
                    nextLocation: v.nextLocation
                  }), y(void 0))
                }), [c.isTransitioning, v]);
                let E = n.useMemo((() => ({
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
                  S = r.basename || "/",
                  L = n.useMemo((() => ({
                    router: r,
                    navigator: E,
                    static: !1,
                    basename: S
                  })), [r, E, S]);
                return n.createElement(n.Fragment, null, n.createElement(o.w3.Provider, {
                  value: L
                }, n.createElement(o.FR.Provider, {
                  value: i
                }, n.createElement(R.Provider, {
                  value: c
                }, n.createElement(o.F0, {
                  basename: S,
                  location: i.location,
                  navigationType: i.historyAction,
                  navigator: E
                }, i.initialized ? n.createElement(_, {
                  routes: r.routes,
                  state: i
                }) : t)))), null)
              }

              function _(e) {
                let {
                  routes: t,
                  state: r
                } = e;
                return (0, o.DY)(t, void 0, r)
              }

              function T(e) {
                let {
                  basename: t,
                  children: r,
                  future: i,
                  window: s
                } = e, l = n.useRef();
                null == l.current && (l.current = (0, a.lX)({
                  window: s,
                  v5Compat: !0
                }));
                let u = l.current,
                  [c, d] = n.useState({
                    action: u.action,
                    location: u.location
                  }),
                  {
                    v7_startTransition: f
                  } = i || {},
                  h = n.useCallback((e => {
                    f && x ? x((() => d(e))) : d(e)
                  }), [d, f]);
                return n.useLayoutEffect((() => u.listen(h)), [u, h]), n.createElement(o.F0, {
                  basename: t,
                  children: r,
                  location: c.location,
                  navigationType: c.action,
                  navigator: u
                })
              }

              function k(e) {
                let {
                  basename: t,
                  children: r,
                  future: i,
                  window: s
                } = e, l = n.useRef();
                null == l.current && (l.current = (0, a.q_)({
                  window: s,
                  v5Compat: !0
                }));
                let u = l.current,
                  [c, d] = n.useState({
                    action: u.action,
                    location: u.location
                  }),
                  {
                    v7_startTransition: f
                  } = i || {},
                  h = n.useCallback((e => {
                    f && x ? x((() => d(e))) : d(e)
                  }), [d, f]);
                return n.useLayoutEffect((() => u.listen(h)), [u, h]), n.createElement(o.F0, {
                  basename: t,
                  children: r,
                  location: c.location,
                  navigationType: c.action,
                  navigator: u
                })
              }

              function D(e) {
                let {
                  basename: t,
                  children: r,
                  future: a,
                  history: i
                } = e, [s, l] = n.useState({
                  action: i.action,
                  location: i.location
                }), {
                  v7_startTransition: u
                } = a || {}, c = n.useCallback((e => {
                  u && x ? x((() => l(e))) : l(e)
                }), [l, u]);
                return n.useLayoutEffect((() => i.listen(c)), [i, c]), n.createElement(o.F0, {
                  basename: t,
                  children: r,
                  location: s.location,
                  navigationType: s.action,
                  navigator: i
                })
              }
              const P = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                U = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                A = n.forwardRef((function(e, t) {
                  let r, {
                      onClick: l,
                      relative: u,
                      reloadDocument: c,
                      replace: d,
                      state: f,
                      target: h,
                      to: p,
                      preventScrollReset: m,
                      unstable_viewTransition: y
                    } = e,
                    g = s(e, v),
                    {
                      basename: b
                    } = n.useContext(o.Us),
                    w = !1;
                  if ("string" == typeof p && U.test(p) && (r = p, P)) try {
                    let e = new URL(window.location.href),
                      t = p.startsWith("//") ? new URL(e.protocol + p) : new URL(p),
                      r = (0, a.Zn)(t.pathname, b);
                    t.origin === e.origin && null != r ? p = r + t.search + t.hash : w = !0
                  } catch (e) {}
                  let E = (0, o.oQ)(p, {
                      relative: u
                    }),
                    S = W(p, {
                      replace: d,
                      state: f,
                      target: h,
                      preventScrollReset: m,
                      relative: u,
                      unstable_viewTransition: y
                    });
                  return n.createElement("a", i({}, g, {
                    href: r || E,
                    onClick: w || c ? l : function(e) {
                      l && l(e), e.defaultPrevented || S(e)
                    },
                    ref: t,
                    target: h
                  }))
                })),
                j = n.forwardRef((function(e, t) {
                  let {
                    "aria-current": r = "page",
                    caseSensitive: a = !1,
                    className: l = "",
                    end: u = !1,
                    style: c,
                    to: d,
                    unstable_viewTransition: f,
                    children: h
                  } = e, p = s(e, y), m = (0, o.WU)(d, {
                    relative: p.relative
                  }), v = (0, o.TH)(), g = n.useContext(o.FR), {
                    navigator: b
                  } = n.useContext(o.Us), w = null != g && re(m) && !0 === f, E = b.encodeLocation ? b.encodeLocation(m).pathname : m.pathname, S = v.pathname, R = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
                  a || (S = S.toLowerCase(), R = R ? R.toLowerCase() : null, E = E.toLowerCase());
                  let x, C = S === E || !u && S.startsWith(E) && "/" === S.charAt(E.length),
                    L = null != R && (R === E || !u && R.startsWith(E) && "/" === R.charAt(E.length)),
                    _ = {
                      isActive: C,
                      isPending: L,
                      isTransitioning: w
                    },
                    T = C ? r : void 0;
                  x = "function" == typeof l ? l(_) : [l, C ? "active" : null, L ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
                  let k = "function" == typeof c ? c(_) : c;
                  return n.createElement(A, i({}, p, {
                    "aria-current": T,
                    className: x,
                    ref: t,
                    style: k,
                    to: d,
                    unstable_viewTransition: f
                  }), "function" == typeof h ? h(_) : h)
                })),
                O = n.forwardRef(((e, t) => {
                  let r = z();
                  return n.createElement(F, i({}, e, {
                    submit: r,
                    ref: t
                  }))
                })),
                F = n.forwardRef(((e, t) => {
                  let {
                    reloadDocument: r,
                    replace: o,
                    state: a,
                    method: u = l,
                    action: c,
                    onSubmit: d,
                    submit: f,
                    relative: h,
                    preventScrollReset: p,
                    unstable_viewTransition: m
                  } = e, v = s(e, g), y = "get" === u.toLowerCase() ? "get" : "post", b = K(c, {
                    relative: h
                  });
                  return n.createElement("form", i({
                    ref: t,
                    method: y,
                    action: b,
                    onSubmit: r ? d : e => {
                      if (d && d(e), e.defaultPrevented) return;
                      e.preventDefault();
                      let t = e.nativeEvent.submitter,
                        r = (null == t ? void 0 : t.getAttribute("formmethod")) || u;
                      f(t || e.currentTarget, {
                        method: r,
                        replace: o,
                        state: a,
                        relative: h,
                        preventScrollReset: p,
                        unstable_viewTransition: m
                      })
                    }
                  }, v))
                }));

              function M(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = e;
                return G({
                  getKey: t,
                  storageKey: r
                }), null
              }
              var N, B;

              function I(e) {
                let t = n.useContext(o.w3);
                return t || (0, a.J0)(!1), t
              }

              function J(e) {
                let t = n.useContext(o.FR);
                return t || (0, a.J0)(!1), t
              }

              function W(e, t) {
                let {
                  target: r,
                  replace: i,
                  state: s,
                  preventScrollReset: l,
                  relative: u,
                  unstable_viewTransition: c
                } = void 0 === t ? {} : t, d = (0, o.s0)(), f = (0, o.TH)(), h = (0, o.WU)(e, {
                  relative: u
                });
                return n.useCallback((t => {
                  if (function(e, t) {
                      return !(0 !== e.button || t && "_self" !== t || function(e) {
                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                      }(e))
                    }(t, r)) {
                    t.preventDefault();
                    let r = void 0 !== i ? i : (0, a.Ep)(f) === (0, a.Ep)(h);
                    d(e, {
                      replace: r,
                      state: s,
                      preventScrollReset: l,
                      relative: u,
                      unstable_viewTransition: c
                    })
                  }
                }), [f, d, h, i, s, r, e, l, u, c])
              }

              function $(e) {
                let t = n.useRef(d(e)),
                  r = n.useRef(!1),
                  a = (0, o.TH)(),
                  i = n.useMemo((() => function(e, t) {
                    let r = d(e);
                    return t && t.forEach(((e, n) => {
                      r.has(n) || t.getAll(n).forEach((e => {
                        r.append(n, e)
                      }))
                    })), r
                  }(a.search, r.current ? null : t.current)), [a.search]),
                  s = (0, o.s0)(),
                  l = n.useCallback(((e, t) => {
                    const n = d("function" == typeof e ? e(i) : e);
                    r.current = !0, s("?" + n, t)
                  }), [s, i]);
                return [i, l]
              }

              function H() {
                if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
              }

              function z() {
                let {
                  router: e
                } = I(N.UseSubmit), {
                  basename: t
                } = n.useContext(o.Us), r = (0, o.Yi)();
                return n.useCallback((function(n, o) {
                  void 0 === o && (o = {}), H();
                  let {
                    action: a,
                    method: i,
                    encType: s,
                    formData: l,
                    body: u
                  } = m(n, t);
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

              function V(e, t) {
                let {
                  router: r
                } = I(N.UseSubmitFetcher), {
                  basename: i
                } = n.useContext(o.Us);
                return n.useCallback((function(n, o) {
                  void 0 === o && (o = {}), H();
                  let {
                    action: s,
                    method: l,
                    encType: u,
                    formData: c,
                    body: d
                  } = m(n, i);
                  null == t && (0, a.J0)(!1), r.fetch(e, t, o.action || s, {
                    preventScrollReset: o.preventScrollReset,
                    formData: c,
                    body: d,
                    formMethod: o.method || l,
                    formEncType: o.encType || u
                  })
                }), [r, i, e, t])
              }

              function K(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t, {
                  basename: s
                } = n.useContext(o.Us), l = n.useContext(o.pW);
                l || (0, a.J0)(!1);
                let [u] = l.matches.slice(-1), c = i({}, (0, o.WU)(e || ".", {
                  relative: r
                })), d = (0, o.TH)();
                if (null == e && (c.search = d.search, u.route.index)) {
                  let e = new URLSearchParams(c.search);
                  e.delete("index"), c.search = e.toString() ? "?" + e.toString() : ""
                }
                return e && "." !== e || !u.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== s && (c.pathname = "/" === c.pathname ? s : (0, a.RQ)([s, c.pathname])), (0, a.Ep)(c)
              }(function(e) {
                e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
              })(N || (N = {})),
              function(e) {
                e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
              }(B || (B = {}));
              let q = 0;

              function Z() {
                var e;
                let {
                  router: t
                } = I(N.UseFetcher), r = n.useContext(o.pW);
                r || (0, a.J0)(!1);
                let s = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
                null == s && (0, a.J0)(!1);
                let [l] = n.useState((() => String(++q))), [u] = n.useState((() => (s || (0, a.J0)(!1), function(e, t) {
                  return n.forwardRef(((r, o) => {
                    let a = V(e, t);
                    return n.createElement(F, i({}, r, {
                      ref: o,
                      submit: a
                    }))
                  }))
                }(l, s)))), [c] = n.useState((() => e => {
                  t || (0, a.J0)(!1), s || (0, a.J0)(!1), t.fetch(l, s, e)
                })), d = V(l, s), f = t.getFetcher(l), h = n.useMemo((() => i({
                  Form: u,
                  submit: d,
                  load: c
                }, f)), [f, u, d, c]);
                return n.useEffect((() => () => {
                  t ? t.deleteFetcher(l) : console.warn("No router available to clean up from useFetcher()")
                }), [t, l]), h
              }

              function X() {
                return [...J(B.UseFetchers).fetchers.values()]
              }
              const Y = "react-router-scroll-positions";
              let Q = {};

              function G(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = void 0 === e ? {} : e, {
                  router: s
                } = I(N.UseScrollRestoration), {
                  restoreScrollPosition: l,
                  preventScrollReset: u
                } = J(B.UseScrollRestoration), {
                  basename: c
                } = n.useContext(o.Us), d = (0, o.TH)(), f = (0, o.SN)(), h = (0, o.HJ)();
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
                    if ("idle" === h.state) {
                      let e = (t ? t(d, f) : null) || d.key;
                      Q[e] = window.scrollY
                    }
                    try {
                      sessionStorage.setItem(r || Y, JSON.stringify(Q))
                    } catch (e) {}
                    window.history.scrollRestoration = "auto"
                  }), [r, t, h.state, d, f])), "undefined" != typeof document && (n.useLayoutEffect((() => {
                    try {
                      let e = sessionStorage.getItem(r || Y);
                      e && (Q = JSON.parse(e))
                    } catch (e) {}
                  }), [r]), n.useLayoutEffect((() => {
                    let e = t && "/" !== c ? (e, r) => t(i({}, e, {
                        pathname: (0, a.Zn)(e.pathname, c) || e.pathname
                      }), r) : t,
                      r = null == s ? void 0 : s.enableScrollRestoration(Q, (() => window.scrollY), e);
                    return () => r && r()
                  }), [s, c, t]), n.useLayoutEffect((() => {
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

              function te(e) {
                let {
                  when: t,
                  message: r
                } = e, a = (0, o.aQ)(t);
                n.useEffect((() => {
                  "blocked" === a.state && (window.confirm(r) ? setTimeout(a.proceed, 0) : a.reset())
                }), [a, r]), n.useEffect((() => {
                  "blocked" !== a.state || t || a.reset()
                }), [a, t])
              }

              function re(e, t) {
                void 0 === t && (t = {});
                let r = n.useContext(R);
                null == r && (0, a.J0)(!1);
                let {
                  basename: i
                } = I(N.useViewTransitionState), s = (0, o.WU)(e, {
                  relative: t.relative
                });
                if (!r.isTransitioning) return !1;
                let l = (0, a.Zn)(r.currentLocation.pathname, i) || r.currentLocation.pathname,
                  u = (0, a.Zn)(r.nextLocation.pathname, i) || r.nextLocation.pathname;
                return null != (0, a.LX)(s.pathname, u) || null != (0, a.LX)(s.pathname, l)
              }
            },
            9234: (e, t, r) => {
              "use strict";
              r.d(t, {
                AW: () => G,
                DY: () => L,
                F0: () => ee,
                FR: () => s,
                Fg: () => Y,
                GV: () => p,
                HJ: () => N,
                KP: () => re,
                Oe: () => le,
                SN: () => I,
                TH: () => m,
                UO: () => R,
                Us: () => u,
                V$: () => C,
                V4: () => W,
                VA: () => X,
                WU: () => x,
                Yi: () => M,
                Z5: () => te,
                aQ: () => q,
                bS: () => y,
                bi: () => ce,
                bx: () => E,
                f_: () => J,
                gd: () => c,
                i7: () => se,
                iG: () => V,
                is: () => se,
                j3: () => Q,
                lk: () => H,
                nA: () => $,
                oQ: () => h,
                pC: () => S,
                pW: () => d,
                qv: () => z,
                s0: () => b,
                ur: () => v,
                us: () => ue,
                w3: () => i,
                xW: () => B
              });
              var n = r(279),
                o = r(6410);

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
                p() || (0, o.J0)(!1);
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
                return "/" !== a && (d = "/" === l ? a : (0, o.RQ)([a, l])), i.createHref({
                  pathname: d,
                  search: c,
                  hash: s
                })
              }

              function p() {
                return null != n.useContext(c)
              }

              function m() {
                return p() || (0, o.J0)(!1), n.useContext(c).location
              }

              function v() {
                return n.useContext(c).navigationType
              }

              function y(e) {
                p() || (0, o.J0)(!1);
                let {
                  pathname: t
                } = m();
                return n.useMemo((() => (0, o.LX)(e, t)), [t, e])
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
                  } = j(U.UseNavigateStable), t = F(A.UseNavigateStable), r = n.useRef(!1);
                  return g((() => {
                    r.current = !0
                  })), n.useCallback((function(n, o) {
                    void 0 === o && (o = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, a({
                      fromRouteId: t
                    }, o)))
                  }), [e, t])
                }() : function() {
                  p() || (0, o.J0)(!1);
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
                    l = JSON.stringify((0, o.Zq)(a).map((e => e.pathnameBase))),
                    c = n.useRef(!1);
                  return g((() => {
                    c.current = !0
                  })), n.useCallback((function(n, a) {
                    if (void 0 === a && (a = {}), !c.current) return;
                    if ("number" == typeof n) return void r.go(n);
                    let i = (0, o.pC)(n, JSON.parse(l), s, "path" === a.relative);
                    null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, o.RQ)([t, i.pathname])), (a.replace ? r.replace : r.push)(i, a.state, a)
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
                } = m(), s = JSON.stringify((0, o.Zq)(a).map((e => e.pathnameBase)));
                return n.useMemo((() => (0, o.pC)(e, JSON.parse(s), i, "path" === r)), [e, s, i, r])
              }

              function C(e, t) {
                return L(e, t)
              }

              function L(e, t, r) {
                p() || (0, o.J0)(!1);
                let {
                  navigator: i
                } = n.useContext(u), {
                  matches: s
                } = n.useContext(d), l = s[s.length - 1], f = l ? l.params : {}, h = (l && l.pathname, l ? l.pathnameBase : "/");
                l && l.route;
                let v, y = m();
                if (t) {
                  var g;
                  let e = "string" == typeof t ? (0, o.cP)(t) : t;
                  "/" === h || (null == (g = e.pathname) ? void 0 : g.startsWith(h)) || (0, o.J0)(!1), v = e
                } else v = y;
                let b = v.pathname || "/",
                  w = "/" === h ? b : b.slice(h.length) || "/",
                  E = (0, o.fp)(e, {
                    pathname: w
                  }),
                  S = P(E && E.map((e => Object.assign({}, e, {
                    params: Object.assign({}, f, e.params),
                    pathname: (0, o.RQ)([h, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
                    pathnameBase: "/" === e.pathnameBase ? h : (0, o.RQ)([h, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
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
                    navigationType: o.aU.Pop
                  }
                }, S) : S
              }

              function _() {
                let e = H(),
                  t = (0, o.WK)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
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
              const T = n.createElement(_, null);
              class k extends n.Component {
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

              function D(e) {
                let {
                  routeContext: t,
                  match: r,
                  children: o
                } = e, a = n.useContext(i);
                return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(d.Provider, {
                  value: t
                }, o)
              }

              function P(e, t, r) {
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
                  e >= 0 || (0, o.J0)(!1), s = s.slice(0, Math.min(s.length, e + 1))
                }
                return s.reduceRight(((e, o, a) => {
                  let i = o.route.id ? null == l ? void 0 : l[o.route.id] : null,
                    u = null;
                  r && (u = o.route.errorElement || T);
                  let c = t.concat(s.slice(0, a + 1)),
                    d = () => {
                      let t;
                      return t = i ? u : o.route.Component ? n.createElement(o.route.Component, null) : o.route.element ? o.route.element : e, n.createElement(D, {
                        match: o,
                        routeContext: {
                          outlet: e,
                          matches: c,
                          isDataRoute: null != r
                        },
                        children: t
                      })
                    };
                  return r && (o.route.ErrorBoundary || o.route.errorElement || 0 === a) ? n.createElement(k, {
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
                return t || (0, o.J0)(!1), t
              }

              function O(e) {
                let t = n.useContext(s);
                return t || (0, o.J0)(!1), t
              }

              function F(e) {
                let t = function(e) {
                    let t = n.useContext(d);
                    return t || (0, o.J0)(!1), t
                  }(),
                  r = t.matches[t.matches.length - 1];
                return r.route.id || (0, o.J0)(!1), r.route.id
              }

              function M() {
                return F(A.UseRouteId)
              }

              function N() {
                return O(A.UseNavigation).navigation
              }

              function B() {
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
                return n.useMemo((() => e.map((e => (0, o.WS)(e, t)))), [e, t])
              }

              function J() {
                let e = O(A.UseLoaderData),
                  t = F(A.UseLoaderData);
                if (!e.errors || null == e.errors[t]) return e.loaderData[t];
                console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
              }

              function W(e) {
                return O(A.UseRouteLoaderData).loaderData[e]
              }

              function $() {
                let e = O(A.UseActionData);
                return n.useContext(d) || (0, o.J0)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
              }

              function H() {
                var e;
                let t = n.useContext(f),
                  r = O(A.UseRouteError),
                  o = F(A.UseRouteError);
                return t || (null == (e = r.errors) ? void 0 : e[o])
              }

              function z() {
                let e = n.useContext(l);
                return null == e ? void 0 : e._data
              }

              function V() {
                let e = n.useContext(l);
                return null == e ? void 0 : e._error
              }
              let K = 0;

              function q(e) {
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
                      pathname: (0, o.Zn)(n.pathname, r) || n.pathname
                    }),
                    nextLocation: a({}, i, {
                      pathname: (0, o.Zn)(i.pathname, r) || i.pathname
                    }),
                    historyAction: s
                  })
                }), [r, e]);
                return n.useEffect((() => {
                  let e = String(++K);
                  return l(e), () => t.deleteBlocker(e)
                }), [t]), n.useEffect((() => {
                  "" !== s && t.getBlocker(s, u)
                }), [t, s, u]), s && i.blockers.has(s) ? i.blockers.get(s) : o.qp
              }
              const Z = n.startTransition;

              function X(e) {
                let {
                  basename: t,
                  children: r,
                  initialEntries: a,
                  initialIndex: i,
                  future: s
                } = e, l = n.useRef();
                null == l.current && (l.current = (0, o.PP)({
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
                    f && Z ? Z((() => d(e))) : d(e)
                  }), [d, f]);
                return n.useLayoutEffect((() => u.listen(h)), [u, h]), n.createElement(ee, {
                  basename: t,
                  children: r,
                  location: c.location,
                  navigationType: c.action,
                  navigator: u
                })
              }

              function Y(e) {
                let {
                  to: t,
                  replace: r,
                  state: a,
                  relative: i
                } = e;
                p() || (0, o.J0)(!1);
                let {
                  matches: s
                } = n.useContext(d), {
                  pathname: l
                } = m(), u = b(), c = (0, o.pC)(t, (0, o.Zq)(s).map((e => e.pathnameBase)), l, "path" === i), f = JSON.stringify(c);
                return n.useEffect((() => u(JSON.parse(f), {
                  replace: r,
                  state: a,
                  relative: i
                })), [u, f, i, r, a]), null
              }

              function Q(e) {
                return S(e.context)
              }

              function G(e) {
                (0, o.J0)(!1)
              }

              function ee(e) {
                let {
                  basename: t = "/",
                  children: r = null,
                  location: a,
                  navigationType: i = o.aU.Pop,
                  navigator: s,
                  static: l = !1
                } = e;
                p() && (0, o.J0)(!1);
                let d = t.replace(/^\/*/, "/"),
                  f = n.useMemo((() => ({
                    basename: d,
                    navigator: s,
                    static: l
                  })), [d, s, l]);
                "string" == typeof a && (a = (0, o.cP)(a));
                let {
                  pathname: h = "/",
                  search: m = "",
                  hash: v = "",
                  state: y = null,
                  key: g = "default"
                } = a, b = n.useMemo((() => {
                  let e = (0, o.Zn)(h, d);
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
                  if (i === ne.error && a._error instanceof o.X3) throw oe;
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
                } = e, r = z(), o = "function" == typeof t ? t(r) : t;
                return n.createElement(n.Fragment, null, o)
              }

              function se(e, t) {
                void 0 === t && (t = []);
                let r = [];
                return n.Children.forEach(e, ((e, a) => {
                  if (!n.isValidElement(e)) return;
                  let i = [...t, a];
                  if (e.type === n.Fragment) return void r.push.apply(r, se(e.props.children, i));
                  e.type !== G && (0, o.J0)(!1), e.props.index && e.props.children && (0, o.J0)(!1);
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
                return P(e)
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
                return (0, o.p7)({
                  basename: null == t ? void 0 : t.basename,
                  future: a({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: (0, o.PP)({
                    initialEntries: null == t ? void 0 : t.initialEntries,
                    initialIndex: null == t ? void 0 : t.initialIndex
                  }),
                  hydrationData: null == t ? void 0 : t.hydrationData,
                  routes: e,
                  mapRouteProperties: ue
                }).initialize()
              }
            },
            6100: (e, t, r) => {
              (0, r(487).s)(1)
            },
            487: (e, t, r) => {
              const n = r(6175).R;
              t.s = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            9473: (e, t, r) => {
              r(6100)
            },
            6175: (e, t, r) => {
              t.R = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, a = n.length; o !== t && a >= 0;) "/" === n[--a] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            6410: (e, t, r) => {
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
                  AV: () => H,
                  Ep: () => h,
                  Gn: () => U,
                  J0: () => u,
                  LX: () => A,
                  OF: () => Y,
                  PP: () => i,
                  PQ: () => q,
                  RQ: () => I,
                  WK: () => Q,
                  WS: () => w,
                  X3: () => z,
                  Zn: () => O,
                  Zq: () => N,
                  aU: () => o,
                  cP: () => p,
                  fZ: () => X,
                  fp: () => b,
                  i3: () => F,
                  lX: () => s,
                  p7: () => de,
                  pC: () => B,
                  q_: () => l,
                  qp: () => se,
                  uX: () => Z
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
                for (let e = 0; null == a && e < o.length; ++e) a = P(o[e], j(n));
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
                    score: D(s, e.index),
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
                L = 1,
                _ = 10,
                T = -2,
                k = e => "*" === e;

              function D(e, t) {
                let r = e.split("/"),
                  n = r.length;
                return r.some(k) && (n += T), t && (n += C), r.filter((e => !k(e))).reduce(((e, t) => e + (R.test(t) ? x : "" === t ? L : _)), n)
              }

              function P(e, t) {
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
                    pathnameBase: J(I([o, u.pathnameBase])),
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

              function F(e, t) {
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
                  search: W(n),
                  hash: $(o)
                }
              }

              function M(e, t, r, n) {
                return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
              }

              function N(e) {
                return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
              }

              function B(e, t, r, o) {
                let a;
                void 0 === o && (o = !1), "string" == typeof e ? a = p(e) : (a = n({}, e), u(!a.pathname || !a.pathname.includes("?"), M("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), M("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), M("#", "search", "hash", a)));
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
                let c = F(a, i),
                  d = l && "/" !== l && l.endsWith("/"),
                  f = (s || "." === l) && r.endsWith("/");
                return c.pathname.endsWith("/") || !d && !f || (c.pathname += "/"), c
              }
              const I = e => e.join("/").replace(/\/\/+/g, "/"),
                J = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                W = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
                $ = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
                H = function(e, t) {
                  void 0 === t && (t = {});
                  let r = "number" == typeof t ? {
                      status: t
                    } : t,
                    o = new Headers(r.headers);
                  return o.has("Content-Type") || o.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), n({}, r, {
                    headers: o
                  }))
                };
              class z extends Error {}
              class V {
                constructor(e, t) {
                  let r;
                  this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], u(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
                  let n = () => r(new z("Deferred data aborted"));
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
                  if (this.controller.signal.aborted && r instanceof z) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
                      [r]: K(n)
                    })
                  }), {})
                }
                get pendingKeys() {
                  return Array.from(this.pendingKeysSet)
                }
              }

              function K(e) {
                if (! function(e) {
                    return e instanceof Promise && !0 === e._tracked
                  }(e)) return e;
                if (e._error) throw e._error;
                return e._data
              }
              const q = function(e, t) {
                  return void 0 === t && (t = {}), new V(e, "number" == typeof t ? {
                    status: t
                  } : t)
                },
                Z = function(e, t) {
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
                X = (e, t) => {
                  let r = Z(e, t);
                  return r.headers.set("X-Remix-Reload-Document", "true"), r
                };
              class Y {
                constructor(e, t, r, n) {
                  void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
                }
              }

              function Q(e) {
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
                  L = null;
                if (null == C) {
                  let t = Le(404, {
                      pathname: e.history.location.pathname
                    }),
                    {
                      matches: r,
                      route: n
                    } = Ce(d);
                  C = r, L = {
                    [n.id]: t
                  }
                }
                let _, T, k = !(C.some((e => e.route.lazy)) || C.some((e => e.route.loader)) && null == e.hydrationData),
                  D = {
                    historyAction: e.history.action,
                    location: e.history.location,
                    matches: C,
                    initialized: k,
                    navigation: ae,
                    restoreScrollPosition: null == e.hydrationData && null,
                    preventScrollReset: !1,
                    revalidation: "idle",
                    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
                    actionData: e.hydrationData && e.hydrationData.actionData || null,
                    errors: e.hydrationData && e.hydrationData.errors || L,
                    fetchers: new Map,
                    blockers: new Map
                  },
                  P = o.Pop,
                  U = !1,
                  A = !1,
                  j = new Map,
                  F = null,
                  M = !1,
                  N = !1,
                  B = [],
                  I = [],
                  J = new Map,
                  W = 0,
                  $ = -1,
                  H = new Map,
                  z = new Set,
                  V = new Map,
                  K = new Map,
                  q = new Map,
                  Z = !1;

                function X(e, t) {
                  D = n({}, D, e), y.forEach((e => e(D, {
                    unstable_viewTransitionOpts: t
                  })))
                }

                function Y(t, r) {
                  var a, i;
                  let l, u = null != D.actionData && null != D.navigation.formMethod && Ue(D.navigation.formMethod) && "loading" === D.navigation.state && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect);
                  l = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : u ? D.actionData : null;
                  let c = r.loaderData ? Re(D.loaderData, r.loaderData, r.matches || [], r.errors) : D.loaderData,
                    f = D.blockers;
                  f.size > 0 && (f = new Map(f), f.forEach(((e, t) => f.set(t, se))));
                  let h, p = !0 === U || null != D.navigation.formMethod && Ue(D.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
                  if (s && (d = s, s = void 0), M || P === o.Pop || (P === o.Push ? e.history.push(t, t.state) : P === o.Replace && e.history.replace(t, t.state)), P === o.Pop) {
                    let e = j.get(D.location.pathname);
                    e && e.has(t.pathname) ? h = {
                      currentLocation: D.location,
                      nextLocation: t
                    } : j.has(t.pathname) && (h = {
                      currentLocation: t,
                      nextLocation: D.location
                    })
                  } else if (A) {
                    let e = j.get(D.location.pathname);
                    e ? e.add(t.pathname) : (e = new Set([t.pathname]), j.set(D.location.pathname, e)), h = {
                      currentLocation: D.location,
                      nextLocation: t
                    }
                  }
                  X(n({}, r, {
                    actionData: l,
                    loaderData: c,
                    historyAction: P,
                    location: t,
                    initialized: !0,
                    navigation: ae,
                    revalidation: "idle",
                    restoreScrollPosition: $e(t, r.matches || D.matches),
                    preventScrollReset: p,
                    blockers: f
                  }), h), P = o.Pop, U = !1, A = !1, M = !1, N = !1, B = [], I = []
                }
                async function Q(t, r, a) {
                  T && T.abort(), T = null, P = t, M = !0 === (a && a.startUninterruptedRevalidation),
                    function(e, t) {
                      if (E && R) {
                        let r = We(e, t);
                        E[r] = R()
                      }
                    }(D.location, D.matches), U = !0 === (a && a.preventScrollReset), A = !0 === (a && a.enableViewTransition);
                  let u = s || d,
                    c = a && a.overrideNavigation,
                    f = b(u, r, h);
                  if (!f) {
                    let e = Le(404, {
                        pathname: r.pathname
                      }),
                      {
                        matches: t,
                        route: n
                      } = Ce(u);
                    return Je(), void Y(r, {
                      matches: t,
                      loaderData: {},
                      errors: {
                        [n.id]: e
                      }
                    })
                  }
                  if (D.initialized && !N && (p = D.location, m = r, p.pathname === m.pathname && p.search === m.search && ("" === p.hash ? "" !== m.hash : p.hash === m.hash || "" !== m.hash)) && !(a && a.submission && Ue(a.submission.formMethod))) return void Y(r, {
                    matches: f
                  });
                  var p, m;
                  T = new AbortController;
                  let y, g, w = be(e.history, r, T.signal, a && a.submission);
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
                      X({
                        navigation: u
                      });
                      let c = Fe(n, t);
                      if (c.route.action || c.route.lazy) {
                        if (s = await ge("action", e, c, n, l, i, h), e.signal.aborted) return {
                          shortCircuited: !0
                        }
                      } else s = {
                        type: v.error,
                        error: Le(405, {
                          method: e.method,
                          pathname: t.pathname,
                          routeId: c.route.id
                        })
                      };
                      if (Pe(s)) {
                        let e;
                        return e = a && null != a.replace ? a.replace : s.location === D.location.pathname + D.location.search, await ee(D, s, {
                          submission: r,
                          replace: e
                        }), {
                          shortCircuited: !0
                        }
                      }
                      if (De(s)) {
                        let e = xe(n, c.route.id);
                        return !0 !== (a && a.replace) && (P = o.Push), {
                          pendingActionData: {},
                          pendingActionError: {
                            [e.route.id]: s.error
                          }
                        }
                      }
                      if (ke(s)) throw Le(400, {
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
                    y = e.pendingActionData, g = e.pendingActionError, c = Ne(r, a.submission), w = new Request(w.url, {
                      signal: w.signal
                    })
                  }
                  let {
                    shortCircuited: S,
                    loaderData: x,
                    errors: C
                  } = await async function(t, r, o, a, i, l, u, c, f) {
                    let p = a || Ne(r, i),
                      m = i || l || Me(p),
                      v = s || d,
                      [y, g] = pe(e.history, D, o, m, r, N, B, I, V, z, v, h, c, f);
                    if (Je((e => !(o && o.some((t => t.route.id === e))) || y && y.some((t => t.route.id === e)))), $ = ++W, 0 === y.length && 0 === g.length) {
                      let e = ye();
                      return Y(r, n({
                        matches: o,
                        loaderData: {},
                        errors: f || null
                      }, c ? {
                        actionData: c
                      } : {}, e ? {
                        fetchers: new Map(D.fetchers)
                      } : {})), {
                        shortCircuited: !0
                      }
                    }
                    if (!M) {
                      g.forEach((e => {
                        let t = D.fetchers.get(e.key),
                          r = Be(void 0, t ? t.data : void 0);
                        D.fetchers.set(e.key, r)
                      }));
                      let e = c || D.actionData;
                      X(n({
                        navigation: p
                      }, e ? 0 === Object.keys(e).length ? {
                        actionData: null
                      } : {
                        actionData: e
                      } : {}, g.length > 0 ? {
                        fetchers: new Map(D.fetchers)
                      } : {}))
                    }
                    g.forEach((e => {
                      J.has(e.key) && me(e.key), e.controller && J.set(e.key, e.controller)
                    }));
                    let b = () => g.forEach((e => me(e.key)));
                    T && T.signal.addEventListener("abort", b);
                    let {
                      results: w,
                      loaderResults: E,
                      fetcherResults: S
                    } = await te(D.matches, o, y, g, t);
                    if (t.signal.aborted) return {
                      shortCircuited: !0
                    };
                    T && T.signal.removeEventListener("abort", b), g.forEach((e => J.delete(e.key)));
                    let R = _e(w);
                    if (R) {
                      if (R.idx >= y.length) {
                        let e = g[R.idx - y.length].key;
                        z.add(e)
                      }
                      return await ee(D, R.result, {
                        replace: u
                      }), {
                        shortCircuited: !0
                      }
                    }
                    let {
                      loaderData: x,
                      errors: C
                    } = Se(D, o, y, E, f, g, S, K);
                    K.forEach(((e, t) => {
                      e.subscribe((r => {
                        (r || e.done) && K.delete(t)
                      }))
                    }));
                    let L = ye(),
                      _ = we($);
                    return n({
                      loaderData: x,
                      errors: C
                    }, L || _ || g.length > 0 ? {
                      fetchers: new Map(D.fetchers)
                    } : {})
                  }(w, r, f, c, a && a.submission, a && a.fetcherSubmission, a && a.replace, y, g);
                  S || (T = null, Y(r, n({
                    matches: f
                  }, y ? {
                    actionData: y
                  } : {}, {
                    loaderData: x,
                    errors: C
                  })))
                }

                function G(e) {
                  return D.fetchers.get(e) || ie
                }
                async function ee(a, i, s) {
                  let {
                    submission: l,
                    fetcherSubmission: c,
                    replace: d
                  } = void 0 === s ? {} : s;
                  i.revalidate && (N = !0);
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
                  T = null;
                  let m = !0 === d ? o.Replace : o.Push,
                    {
                      formMethod: v,
                      formAction: y,
                      formEncType: g
                    } = a.navigation;
                  !l && !c && v && y && g && (l = Me(a.navigation));
                  let b = l || c;
                  if (oe.has(i.status) && b && Ue(b.formMethod)) await Q(m, p, {
                    submission: n({}, b, {
                      formAction: i.location
                    }),
                    preventScrollReset: U
                  });
                  else {
                    let e = Ne(p, l);
                    await Q(m, p, {
                      overrideNavigation: e,
                      fetcherSubmission: c,
                      preventScrollReset: U
                    })
                  }
                }
                async function te(t, r, n, o, a) {
                  let s = await Promise.all([...n.map((e => ge("loader", a, e, r, l, i, h))), ...o.map((t => t.matches && t.match && t.controller ? ge("loader", be(e.history, t.path, t.controller.signal), t.match, t.matches, l, i, h) : {
                      type: v.error,
                      error: Le(404, {
                        pathname: t.path
                      })
                    }))]),
                    u = s.slice(0, n.length),
                    c = s.slice(n.length);
                  return await Promise.all([Ae(t, n, u, u.map((() => a.signal)), !1, D.loaderData), Ae(t, o.map((e => e.match)), c, o.map((e => e.controller ? e.controller.signal : null)), !0)]), {
                    results: s,
                    loaderResults: u,
                    fetcherResults: c
                  }
                }

                function re() {
                  N = !0, B.push(...Je()), V.forEach(((e, t) => {
                    J.has(t) && (I.push(t), me(t))
                  }))
                }

                function ne(e, t, r) {
                  let n = xe(D.matches, t);
                  de(e), X({
                    errors: {
                      [n.route.id]: r
                    },
                    fetchers: new Map(D.fetchers)
                  })
                }

                function de(e) {
                  let t = D.fetchers.get(e);
                  !J.has(e) || t && "loading" === t.state && H.has(e) || me(e), V.delete(e), H.delete(e), z.delete(e), D.fetchers.delete(e)
                }

                function me(e) {
                  let t = J.get(e);
                  u(t, "Expected fetch controller: " + e), t.abort(), J.delete(e)
                }

                function ve(e) {
                  for (let t of e) {
                    let e = Ie(G(t).data);
                    D.fetchers.set(t, e)
                  }
                }

                function ye() {
                  let e = [],
                    t = !1;
                  for (let r of z) {
                    let n = D.fetchers.get(r);
                    u(n, "Expected fetcher: " + r), "loading" === n.state && (z.delete(r), e.push(r), t = !0)
                  }
                  return ve(e), t
                }

                function we(e) {
                  let t = [];
                  for (let [r, n] of H)
                    if (n < e) {
                      let e = D.fetchers.get(r);
                      u(e, "Expected fetcher: " + r), "loading" === e.state && (me(r), H.delete(r), t.push(r))
                    } return ve(t), t.length > 0
                }

                function Ee(e) {
                  D.blockers.delete(e), q.delete(e)
                }

                function Te(e, t) {
                  let r = D.blockers.get(e) || se;
                  u("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
                  let n = new Map(D.blockers);
                  n.set(e, t), X({
                    blockers: n
                  })
                }

                function Oe(e) {
                  let {
                    currentLocation: t,
                    nextLocation: r,
                    historyAction: n
                  } = e;
                  if (0 === q.size) return;
                  q.size > 1 && c(!1, "A router only supports one blocker at a time");
                  let o = Array.from(q.entries()),
                    [a, i] = o[o.length - 1],
                    s = D.blockers.get(a);
                  return s && "proceeding" === s.state ? void 0 : i({
                    currentLocation: t,
                    nextLocation: r,
                    historyAction: n
                  }) ? a : void 0
                }

                function Je(e) {
                  let t = [];
                  return K.forEach(((r, n) => {
                    e && !e(n) || (r.cancel(), t.push(n), K.delete(n))
                  })), t
                }

                function We(e, t) {
                  return S && S(e, t.map((e => w(e, D.loaderData)))) || e.key
                }

                function $e(e, t) {
                  if (E) {
                    let r = We(e, t),
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
                    return D
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
                        if (Z) return void(Z = !1);
                        c(0 === q.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                        let a = Oe({
                          currentLocation: D.location,
                          nextLocation: n,
                          historyAction: r
                        });
                        return a && null != o ? (Z = !0, e.history.go(-1 * o), void Te(a, {
                          state: "blocked",
                          location: n,
                          proceed() {
                            Te(a, {
                              state: "proceeding",
                              proceed: void 0,
                              reset: void 0,
                              location: n
                            }), e.history.go(o)
                          },
                          reset() {
                            let e = new Map(D.blockers);
                            e.set(a, se), X({
                              blockers: e
                            })
                          }
                        })) : Q(r, n)
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
                      t.addEventListener("pagehide", e), F = () => t.removeEventListener("pagehide", e)
                    }
                    return D.initialized || Q(o.Pop, D.location), _
                  },
                  subscribe: function(e) {
                    return y.add(e), () => y.delete(e)
                  },
                  enableScrollRestoration: function(e, t, r) {
                    if (E = e, R = t, S = r || null, !x && D.navigation === ae) {
                      x = !0;
                      let e = $e(D.location, D.matches);
                      null != e && X({
                        restoreScrollPosition: e
                      })
                    }
                    return () => {
                      E = null, R = null, S = null
                    }
                  },
                  navigate: async function t(r, a) {
                    if ("number" == typeof r) return void e.history.go(r);
                    let i = fe(D.location, D.matches, h, p.v7_prependBasename, r, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative),
                      {
                        path: s,
                        submission: l,
                        error: u
                      } = he(p.v7_normalizeFormMethod, !1, i, a),
                      c = D.location,
                      d = f(D.location, s, a && a.state);
                    d = n({}, d, e.history.encodeLocation(d));
                    let m = a && null != a.replace ? a.replace : void 0,
                      v = o.Push;
                    !0 === m ? v = o.Replace : !1 === m || null != l && Ue(l.formMethod) && l.formAction === D.location.pathname + D.location.search && (v = o.Replace);
                    let y = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
                      g = Oe({
                        currentLocation: c,
                        nextLocation: d,
                        historyAction: v
                      });
                    if (!g) return await Q(v, d, {
                      submission: l,
                      pendingError: u,
                      preventScrollReset: y,
                      replace: a && a.replace,
                      enableViewTransition: a && a.unstable_viewTransition
                    });
                    Te(g, {
                      state: "blocked",
                      location: d,
                      proceed() {
                        Te(g, {
                          state: "proceeding",
                          proceed: void 0,
                          reset: void 0,
                          location: d
                        }), t(r, a)
                      },
                      reset() {
                        let e = new Map(D.blockers);
                        e.set(g, se), X({
                          blockers: e
                        })
                      }
                    })
                  },
                  fetch: function(t, r, o, c) {
                    if (a) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
                    J.has(t) && me(t);
                    let f = s || d,
                      m = fe(D.location, D.matches, h, p.v7_prependBasename, o, r, null == c ? void 0 : c.relative),
                      v = b(f, m, h);
                    if (!v) return void ne(t, r, Le(404, {
                      pathname: m
                    }));
                    let {
                      path: y,
                      submission: g,
                      error: w
                    } = he(p.v7_normalizeFormMethod, !0, m, c);
                    if (w) return void ne(t, r, w);
                    let E = Fe(v, y);
                    U = !0 === (c && c.preventScrollReset), g && Ue(g.formMethod) ? async function(t, r, o, a, c, f) {
                      if (re(), V.delete(t), !a.route.action && !a.route.lazy) {
                        let e = Le(405, {
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
                      }(f, D.fetchers.get(t));
                      D.fetchers.set(t, p), X({
                        fetchers: new Map(D.fetchers)
                      });
                      let m = new AbortController,
                        v = be(e.history, o, m.signal, f);
                      J.set(t, m);
                      let y = W,
                        g = await ge("action", v, a, c, l, i, h);
                      if (v.signal.aborted) return void(J.get(t) === m && J.delete(t));
                      if (Pe(g)) {
                        if (J.delete(t), $ > y) {
                          let e = Ie(void 0);
                          return D.fetchers.set(t, e), void X({
                            fetchers: new Map(D.fetchers)
                          })
                        } {
                          z.add(t);
                          let e = Be(f);
                          return D.fetchers.set(t, e), X({
                            fetchers: new Map(D.fetchers)
                          }), ee(D, g, {
                            fetcherSubmission: f
                          })
                        }
                      }
                      if (De(g)) return void ne(t, r, g.error);
                      if (ke(g)) throw Le(400, {
                        type: "defer-action"
                      });
                      let w = D.navigation.location || D.location,
                        E = be(e.history, w, m.signal),
                        S = s || d,
                        R = "idle" !== D.navigation.state ? b(S, D.navigation.location, h) : D.matches;
                      u(R, "Didn't find any matches after fetcher action");
                      let x = ++W;
                      H.set(t, x);
                      let C = Be(f, g.data);
                      D.fetchers.set(t, C);
                      let [L, _] = pe(e.history, D, R, f, w, N, B, I, V, z, S, h, {
                        [a.route.id]: g.data
                      }, void 0);
                      _.filter((e => e.key !== t)).forEach((e => {
                        let t = e.key,
                          r = D.fetchers.get(t),
                          n = Be(void 0, r ? r.data : void 0);
                        D.fetchers.set(t, n), J.has(t) && me(t), e.controller && J.set(t, e.controller)
                      })), X({
                        fetchers: new Map(D.fetchers)
                      });
                      let k = () => _.forEach((e => me(e.key)));
                      m.signal.addEventListener("abort", k);
                      let {
                        results: U,
                        loaderResults: A,
                        fetcherResults: j
                      } = await te(D.matches, R, L, _, E);
                      if (m.signal.aborted) return;
                      m.signal.removeEventListener("abort", k), H.delete(t), J.delete(t), _.forEach((e => J.delete(e.key)));
                      let O = _e(U);
                      if (O) {
                        if (O.idx >= L.length) {
                          let e = _[O.idx - L.length].key;
                          z.add(e)
                        }
                        return ee(D, O.result)
                      }
                      let {
                        loaderData: F,
                        errors: M
                      } = Se(D, D.matches, L, A, void 0, _, j, K);
                      if (D.fetchers.has(t)) {
                        let e = Ie(g.data);
                        D.fetchers.set(t, e)
                      }
                      let q = we(x);
                      "loading" === D.navigation.state && x > $ ? (u(P, "Expected pending action"), T && T.abort(), Y(D.navigation.location, {
                        matches: R,
                        loaderData: F,
                        errors: M,
                        fetchers: new Map(D.fetchers)
                      })) : (X(n({
                        errors: M,
                        loaderData: Re(D.loaderData, F, R, M)
                      }, q || _.length > 0 ? {
                        fetchers: new Map(D.fetchers)
                      } : {})), N = !1)
                    }(t, r, y, E, v, g): (V.set(t, {
                      routeId: r,
                      path: y
                    }), async function(t, r, n, o, a, s) {
                      let c = D.fetchers.get(t),
                        d = Be(s, c ? c.data : void 0);
                      D.fetchers.set(t, d), X({
                        fetchers: new Map(D.fetchers)
                      });
                      let f = new AbortController,
                        p = be(e.history, n, f.signal);
                      J.set(t, f);
                      let m = W,
                        v = await ge("loader", p, o, a, l, i, h);
                      if (ke(v) && (v = await je(v, p.signal, !0) || v), J.get(t) === f && J.delete(t), p.signal.aborted) return;
                      if (Pe(v)) {
                        if ($ > m) {
                          let e = Ie(void 0);
                          return D.fetchers.set(t, e), void X({
                            fetchers: new Map(D.fetchers)
                          })
                        }
                        return z.add(t), void await ee(D, v)
                      }
                      if (De(v)) {
                        let e = xe(D.matches, r);
                        return D.fetchers.delete(t), void X({
                          fetchers: new Map(D.fetchers),
                          errors: {
                            [e.route.id]: v.error
                          }
                        })
                      }
                      u(!ke(v), "Unhandled fetcher deferred data");
                      let y = Ie(v.data);
                      D.fetchers.set(t, y), X({
                        fetchers: new Map(D.fetchers)
                      })
                    }(t, r, y, E, v, g))
                  },
                  revalidate: function() {
                    re(), X({
                      revalidation: "loading"
                    }), "submitting" !== D.navigation.state && ("idle" !== D.navigation.state ? Q(P || D.historyAction, D.navigation.location, {
                      overrideNavigation: D.navigation
                    }) : Q(D.historyAction, D.location, {
                      startUninterruptedRevalidation: !0
                    }))
                  },
                  createHref: t => e.history.createHref(t),
                  encodeLocation: t => e.history.encodeLocation(t),
                  getFetcher: G,
                  deleteFetcher: de,
                  dispose: function() {
                    m && m(), F && F(), y.clear(), T && T.abort(), D.fetchers.forEach(((e, t) => de(t))), D.blockers.forEach(((e, t) => Ee(t)))
                  },
                  getBlocker: function(e, t) {
                    let r = D.blockers.get(e) || se;
                    return q.get(e) !== t && q.set(e, t), r
                  },
                  deleteBlocker: Ee,
                  _internalFetchControllers: J,
                  _internalActiveDeferreds: K,
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
                let u = B(o || ".", N(s).map((e => e.pathnameBase)), O(e.pathname, r) || e.pathname, "path" === i);
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
                  error: Le(405, {
                    method: n.formMethod
                  })
                };
                var o;
                let a, i, s = () => ({
                    path: r,
                    error: Le(400, {
                      type: "invalid-body"
                    })
                  }),
                  l = n.formMethod || "get",
                  c = e ? l.toUpperCase() : l.toLowerCase(),
                  d = Te(r);
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
                    h = Fe(s, e.path),
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
                          throw Le(405, {
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
                      throw Le(404, {
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
                    error: new Y(o, c.statusText, e),
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
                let o = e.createURL(Te(t)).toString(),
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
                    if (u(!Pe(r), "Cannot handle redirect results in processLoaderData"), De(r)) {
                      let t = xe(e, f),
                        o = r.error;
                      n && (o = Object.values(n)[0], n = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = o), i[f] = void 0, l || (l = !0, a = Q(r.error) ? r.error.status : 500), r.headers && (c[f] = r.headers)
                    } else ke(r) ? (o.set(f, r.deferredData), i[f] = r.deferredData.data) : i[f] = r.data, null == r.statusCode || 200 === r.statusCode || l || (a = r.statusCode), r.headers && (c[f] = r.headers)
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
                    if (De(l)) {
                      let t = xe(e.matches, null == o ? void 0 : o.route.id);
                      d && d[t.route.id] || (d = n({}, d, {
                        [t.route.id]: l.error
                      })), e.fetchers.delete(r)
                    } else if (Pe(l)) u(!1, "Unhandled fetcher revalidation redirect");
                  else if (ke(l)) u(!1, "Unhandled fetcher deferred data");
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

              function Le(e, t) {
                let {
                  pathname: r,
                  routeId: n,
                  method: o,
                  type: a
                } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
                return 400 === e ? (i = "Bad Request", o && r && n ? s = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === a ? s = "defer() is not supported in actions" : "invalid-body" === a && (s = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", s = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && n ? s = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')), new Y(e || 500, i, new Error(s), !0)
              }

              function _e(e) {
                for (let t = e.length - 1; t >= 0; t--) {
                  let r = e[t];
                  if (Pe(r)) return {
                    result: r,
                    idx: t
                  }
                }
              }

              function Te(e) {
                return h(n({}, "string" == typeof e ? p(e) : e, {
                  hash: ""
                }))
              }

              function ke(e) {
                return e.type === v.deferred
              }

              function De(e) {
                return e.type === v.error
              }

              function Pe(e) {
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
                  if (ke(s) && (o || d)) {
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

              function Fe(e, t) {
                let r = "string" == typeof t ? p(t).search : t.search;
                if (e[e.length - 1].route.index && Oe(r || "")) return e[e.length - 1];
                let n = N(e);
                return n[n.length - 1]
              }

              function Me(e) {
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

              function Ne(e, t) {
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

              function Be(e, t) {
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
            8755: (e, t) => {
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

              function L(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
              }
              var _ = /\/+/g;

              function T(e, t) {
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

              function k(e, t, o, a, i) {
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
                if (l) return i = i(l = e), e = "" === a ? "." + T(l, 0) : a, E(i) ? (o = "", null != e && (o = e.replace(_, "$&/") + "/"), k(i, t, o, "", (function(e) {
                  return e
                }))) : null != i && (L(i) && (i = function(e, t) {
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
                    var c = a + T(s = e[u], u);
                    l += k(s, t, o, c, i)
                  } else if (c = function(e) {
                      return null === e || "object" != typeof e ? null : "function" == typeof(e = h && e[h] || e["@@iterator"]) ? e : null
                    }(e), "function" == typeof c)
                    for (e = c.call(e), u = 0; !(s = e.next()).done;) l += k(s = s.value, t, o, c = a + T(s, u++), i);
                  else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
              }

              function D(e, t, r) {
                if (null == e) return e;
                var n = [],
                  o = 0;
                return k(e, n, "", "", (function(e) {
                  return t.call(r, e, o++)
                })), n
              }

              function P(e) {
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
                map: D,
                forEach: function(e, t, r) {
                  D(e, (function() {
                    t.apply(this, arguments)
                  }), r)
                },
                count: function(e) {
                  var t = 0;
                  return D(e, (function() {
                    t++
                  })), t
                },
                toArray: function(e) {
                  return D(e, (function(e) {
                    return e
                  })) || []
                },
                only: function(e) {
                  if (!L(e)) throw Error("React.Children.only expected to receive a single React element child.");
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
              }, t.isValidElement = L, t.lazy = function(e) {
                return {
                  $$typeof: f,
                  _payload: {
                    _status: -1,
                    _result: e
                  },
                  _init: P
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
            5377: (e, t, r) => {
              "use strict";
              e.exports = r(8755)
            },
            1154: (e, t, r) => {
              "use strict";
              var n = {
                  "./bootstrap": () => Promise.all([r.e(387), r.e(229), r.e(823)]).then((() => () => r(823))),
                  "./index": () => Promise.all([r.e(387), r.e(229), r.e(357)]).then((() => () => r(8357)))
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
            }
          },
          i = {};

        function s(e) {
          var t = i[e];
          if (void 0 !== t) return t.exports;
          var r = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return a[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = a, s.c = i, s.y = t, s.amdO = {}, s.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return s.d(t, {
            a: t
          }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(t, n) {
          if (1 & n && (t = this(t)), 8 & n) return t;
          if ("object" == typeof t && t) {
            if (4 & n && t.__esModule) return t;
            if (16 & n && "function" == typeof t.then) return t
          }
          var o = Object.create(null);
          s.r(o);
          var a = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var i = 2 & n && t;
            "object" == typeof i && !~e.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach((e => a[e] = () => t[e]));
          return a.default = () => t, s.d(o, a), o
        }, s.d = (e, t) => {
          for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, r) => (s.f[r](e, t), t)), [])), s.u = e => "js/" + {
          229: "c5f1bd07848b0a09c0487eefdfe7eec1",
          357: "bde89e96733065c88a57f51a974ccc00",
          387: "d32eae19ebf63035b9941f397770ce1d",
          823: "c2eca64880606f64c08d38c8f97e63f7"
        } [e] + ".js", s.miniCssF = e => "css/d2bf5900cdbf07d260ecf999d9bea44f.css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, o = "@rockstargames/modules-core-header:", s.l = (e, t, r, a) => {
          if (n[e]) n[e].push(t);
          else {
            var i, l;
            if (void 0 !== r)
              for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                var d = u[c];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == o + r) {
                  i = d;
                  break
                }
              }
            i || (l = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", o + r), i.src = e), n[e] = [t];
            var f = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var o = n[e];
                if (delete n[e], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(r))), t) return t(r)
              },
              h = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), l && document.head.appendChild(i)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          s.S = {};
          var e = {},
            t = {};
          s.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              s.o(s.S, r) || (s.S[r] = {});
              var a = s.S[r],
                i = "@rockstargames/modules-core-header",
                l = (e, t, r, n) => {
                  var o = a[e] = a[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (o[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                u = [];
              return "default" === r && (l("react-router-dom", "6.17.0", (() => () => s(6934)), 1), l("react-router-dom", "6.17.0", (() => () => s(3420)), 1), l("react", "18.2.0", (() => () => s(5377)), 1)), e[r] = u.length ? Promise.all(u).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var t = s.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
              var a = s.I(t);
              return a && a.then ? a.then(e.bind(e, t, s.S[t], r, n, o)) : e(t, s.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var i = t && s.o(t, n) && r(t, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              398: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => () => s(3420))),
              3747: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => () => s(6934))),
              279: () => n("default", "react", [1, 18, 2, 0], (() => () => s(5377)))
            };
          [279].forEach((e => {
            s.m[e] = t => {
              o[e] = 0, delete s.c[e];
              var r = a[e]();
              if ("function" != typeof r) throw new Error("Shared module is not available for eager consumption: " + e);
              t.exports = r()
            }
          }));
          var i = {
            229: [398, 3747]
          };
          s.f.consumes = (e, t) => {
            s.o(i, e) && i[e].forEach((e => {
              if (s.o(o, e)) return t.push(o[e]);
              var r = t => {
                  o[e] = 0, s.m[e] = r => {
                    delete s.c[e], r.exports = t()
                  }
                },
                n = t => {
                  delete o[e], s.m[e] = r => {
                    throw delete s.c[e], t
                  }
                };
              try {
                var i = a[e]();
                i.then ? t.push(o[e] = i.then(r).catch(n)) : r(i)
              } catch (e) {
                n(e)
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              414: 0
            };
            s.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                229: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = s.miniCssF(e),
                  o = s.p + n;
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
            414: 0
          };
          s.f.j = (t, r) => {
            var n = s.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else {
                var o = new Promise(((r, o) => n = e[t] = [r, o]));
                r.push(n[2] = o);
                var a = s.p + s.u(t),
                  i = new Error;
                s.l(a, (r => {
                  if (s.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
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
                l = r[2],
                u = 0;
              if (a.some((t => 0 !== e[t]))) {
                for (n in i) s.o(i, n) && (s.m[n] = i[n]);
                l && l(s)
              }
              for (t && t(r); u < a.length; u++) o = a[u], s.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), s(9473), s(1154)
      })())
    }
  }
}));