! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "48831e7f-1edd-4275-afdd-93ea642a9ad4", e._sentryDebugIdIdentifier = "sentry-dbid-48831e7f-1edd-4275-afdd-93ea642a9ad4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [8], {
    76008: (e, t, n) => {
      n.r(t), n.d(t, {
        AbortedDeferredError: () => r.tH,
        Await: () => o.jD,
        BrowserRouter: () => x,
        Form: () => N,
        HashRouter: () => k,
        Link: () => U,
        MemoryRouter: () => o.fS,
        NavLink: () => P,
        Navigate: () => o.C5,
        NavigationType: () => r.rc,
        Outlet: () => o.sv,
        Route: () => o.qh,
        Router: () => o.Ix,
        RouterProvider: () => L,
        Routes: () => o.BV,
        ScrollRestoration: () => I,
        UNSAFE_DataRouterContext: () => o.sp,
        UNSAFE_DataRouterStateContext: () => o.Rq,
        UNSAFE_LocationContext: () => o.yN,
        UNSAFE_NavigationContext: () => o.jb,
        UNSAFE_RouteContext: () => o.UX,
        UNSAFE_ViewTransitionContext: () => E,
        UNSAFE_useRouteId: () => o.$3,
        UNSAFE_useScrollRestoration: () => G,
        createBrowserRouter: () => g,
        createHashRouter: () => y,
        createMemoryRouter: () => o.bg,
        createPath: () => r.AO,
        createRoutesFromChildren: () => o.AV,
        createRoutesFromElements: () => o.Eu,
        createSearchParams: () => d,
        defer: () => r.v6,
        generatePath: () => r.tW,
        isRouteErrorResponse: () => r.pX,
        json: () => r.Pq,
        matchPath: () => r.B6,
        matchRoutes: () => r.ue,
        parsePath: () => r.Rr,
        redirect: () => r.V2,
        redirectDocument: () => r.Sk,
        renderMatches: () => o.KT,
        resolvePath: () => r.o1,
        unstable_HistoryRouter: () => A,
        unstable_useBlocker: () => o.BS,
        unstable_usePrompt: () => te,
        unstable_useViewTransitionState: () => ne,
        useActionData: () => o.mP,
        useAsyncError: () => o.oI,
        useAsyncValue: () => o.J8,
        useBeforeUnload: () => ee,
        useFetcher: () => X,
        useFetchers: () => J,
        useFormAction: () => Y,
        useHref: () => o.$P,
        useInRouterContext: () => o.Ri,
        useLinkClickHandler: () => z,
        useLoaderData: () => o.LG,
        useLocation: () => o.zy,
        useMatch: () => o.RQ,
        useMatches: () => o.FE,
        useNavigate: () => o.Zp,
        useNavigation: () => o.cq,
        useNavigationType: () => o.wQ,
        useOutlet: () => o.P1,
        useOutletContext: () => o.KC,
        useParams: () => o.g,
        useResolvedPath: () => o.x$,
        useRevalidator: () => o.vL,
        useRouteError: () => o.r5,
        useRouteLoaderData: () => o.Ew,
        useRoutes: () => o.Ye,
        useSearchParams: () => K,
        useSubmit: () => $
      });
      var a = n(71403),
        o = n(64105),
        r = n(15261);

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
      const l = "get",
        u = "application/x-www-form-urlencoded";

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

      function p(e) {
        return null == e || m.has(e) ? e : null
      }

      function v(e, t) {
        let n, a, o, i, s;
        if (c(d = e) && "form" === d.tagName.toLowerCase()) {
          let s = e.getAttribute("action");
          a = s ? (0, r.pb)(s, t) : null, n = e.getAttribute("method") || l, o = p(e.getAttribute("enctype")) || u, i = new FormData(e)
        } else if (function(e) {
            return c(e) && "button" === e.tagName.toLowerCase()
          }(e) || function(e) {
            return c(e) && "input" === e.tagName.toLowerCase()
          }(e) && ("submit" === e.type || "image" === e.type)) {
          let s = e.form;
          if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let c = e.getAttribute("formaction") || s.getAttribute("action");
          if (a = c ? (0, r.pb)(c, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || l, o = p(e.getAttribute("formenctype")) || p(s.getAttribute("enctype")) || u, i = new FormData(s, e), ! function() {
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
          n = l, a = null, o = u, s = e
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
      const w = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
        h = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
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
          mapRouteProperties: o.wE,
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
          mapRouteProperties: o.wE,
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
      class T {
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
          router: n,
          future: r
        } = e, [i, s] = a.useState(n.state), [l, u] = a.useState(), [c, d] = a.useState({
          isTransitioning: !1
        }), [f, m] = a.useState(), [p, v] = a.useState(), [w, h] = a.useState(), {
          v7_startTransition: b
        } = r || {}, g = a.useCallback((e => {
          b ? function(e) {
            _ ? _(e) : e()
          }(e) : e()
        }), [b]), y = a.useCallback(((e, t) => {
          let {
            unstable_viewTransitionOpts: a
          } = t;
          a && null != n.window && "function" == typeof n.window.document.startViewTransition ? p && f ? (f.resolve(), p.skipTransition(), h({
            state: e,
            currentLocation: a.currentLocation,
            nextLocation: a.nextLocation
          })) : (u(e), d({
            isTransitioning: !0,
            currentLocation: a.currentLocation,
            nextLocation: a.nextLocation
          })) : g((() => s(e)))
        }), [g, p, f, n.window]);
        a.useLayoutEffect((() => n.subscribe(y)), [n, y]), a.useEffect((() => {
          c.isTransitioning && m(new T)
        }), [c.isTransitioning]), a.useEffect((() => {
          if (f && l && n.window) {
            let e = l,
              t = f.promise,
              a = n.window.document.startViewTransition((async () => {
                g((() => s(e))), await t
              }));
            a.finished.finally((() => {
              m(void 0), v(void 0), u(void 0), d({
                isTransitioning: !1
              })
            })), v(a)
          }
        }), [g, l, f, n.window]), a.useEffect((() => {
          f && l && i.location.key === l.location.key && f.resolve()
        }), [f, p, i.location, l]), a.useEffect((() => {
          !c.isTransitioning && w && (u(w.state), d({
            isTransitioning: !0,
            currentLocation: w.currentLocation,
            nextLocation: w.nextLocation
          }), h(void 0))
        }), [c.isTransitioning, w]);
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
          L = a.useMemo((() => ({
            router: n,
            navigator: R,
            static: !1,
            basename: S
          })), [n, R, S]);
        return a.createElement(a.Fragment, null, a.createElement(o.sp.Provider, {
          value: L
        }, a.createElement(o.Rq.Provider, {
          value: i
        }, a.createElement(E.Provider, {
          value: c
        }, a.createElement(o.Ix, {
          basename: S,
          location: i.location,
          navigationType: i.historyAction,
          navigator: R
        }, i.initialized ? a.createElement(C, {
          routes: n.routes,
          state: i
        }) : t)))), null)
      }

      function C(e) {
        let {
          routes: t,
          state: n
        } = e;
        return (0, o.ph)(t, void 0, n)
      }

      function x(e) {
        let {
          basename: t,
          children: n,
          future: i,
          window: s
        } = e, l = a.useRef();
        null == l.current && (l.current = (0, r.zR)({
          window: s,
          v5Compat: !0
        }));
        let u = l.current,
          [c, d] = a.useState({
            action: u.action,
            location: u.location
          }),
          {
            v7_startTransition: f
          } = i || {},
          m = a.useCallback((e => {
            f && _ ? _((() => d(e))) : d(e)
          }), [d, f]);
        return a.useLayoutEffect((() => u.listen(m)), [u, m]), a.createElement(o.Ix, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: u
        })
      }

      function k(e) {
        let {
          basename: t,
          children: n,
          future: i,
          window: s
        } = e, l = a.useRef();
        null == l.current && (l.current = (0, r.TM)({
          window: s,
          v5Compat: !0
        }));
        let u = l.current,
          [c, d] = a.useState({
            action: u.action,
            location: u.location
          }),
          {
            v7_startTransition: f
          } = i || {},
          m = a.useCallback((e => {
            f && _ ? _((() => d(e))) : d(e)
          }), [d, f]);
        return a.useLayoutEffect((() => u.listen(m)), [u, m]), a.createElement(o.Ix, {
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
        } = e, [s, l] = a.useState({
          action: i.action,
          location: i.location
        }), {
          v7_startTransition: u
        } = r || {}, c = a.useCallback((e => {
          u && _ ? _((() => l(e))) : l(e)
        }), [l, u]);
        return a.useLayoutEffect((() => i.listen(c)), [i, c]), a.createElement(o.Ix, {
          basename: t,
          children: n,
          location: s.location,
          navigationType: s.action,
          navigator: i
        })
      }
      const F = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        D = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        U = a.forwardRef((function(e, t) {
          let n, {
              onClick: l,
              relative: u,
              reloadDocument: c,
              replace: d,
              state: f,
              target: m,
              to: p,
              preventScrollReset: v,
              unstable_viewTransition: h
            } = e,
            b = s(e, w),
            {
              basename: g
            } = a.useContext(o.jb),
            y = !1;
          if ("string" == typeof p && D.test(p) && (n = p, F)) try {
            let e = new URL(window.location.href),
              t = p.startsWith("//") ? new URL(e.protocol + p) : new URL(p),
              n = (0, r.pb)(t.pathname, g);
            t.origin === e.origin && null != n ? p = n + t.search + t.hash : y = !0
          } catch (e) {}
          let R = (0, o.$P)(p, {
              relative: u
            }),
            S = z(p, {
              replace: d,
              state: f,
              target: m,
              preventScrollReset: v,
              relative: u,
              unstable_viewTransition: h
            });
          return a.createElement("a", i({}, b, {
            href: n || R,
            onClick: y || c ? l : function(e) {
              l && l(e), e.defaultPrevented || S(e)
            },
            ref: t,
            target: m
          }))
        })),
        P = a.forwardRef((function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: r = !1,
            className: l = "",
            end: u = !1,
            style: c,
            to: d,
            unstable_viewTransition: f,
            children: m
          } = e, p = s(e, h), v = (0, o.x$)(d, {
            relative: p.relative
          }), w = (0, o.zy)(), b = a.useContext(o.Rq), {
            navigator: g
          } = a.useContext(o.jb), y = null != b && ne(v) && !0 === f, R = g.encodeLocation ? g.encodeLocation(v).pathname : v.pathname, S = w.pathname, E = b && b.navigation && b.navigation.location ? b.navigation.location.pathname : null;
          r || (S = S.toLowerCase(), E = E ? E.toLowerCase() : null, R = R.toLowerCase());
          let _, T = S === R || !u && S.startsWith(R) && "/" === S.charAt(R.length),
            L = null != E && (E === R || !u && E.startsWith(R) && "/" === E.charAt(R.length)),
            C = {
              isActive: T,
              isPending: L,
              isTransitioning: y
            },
            x = T ? n : void 0;
          _ = "function" == typeof l ? l(C) : [l, T ? "active" : null, L ? "pending" : null, y ? "transitioning" : null].filter(Boolean).join(" ");
          let k = "function" == typeof c ? c(C) : c;
          return a.createElement(U, i({}, p, {
            "aria-current": x,
            className: _,
            ref: t,
            style: k,
            to: d,
            unstable_viewTransition: f
          }), "function" == typeof m ? m(C) : m)
        })),
        N = a.forwardRef(((e, t) => {
          let n = $();
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
            method: u = l,
            action: c,
            onSubmit: d,
            submit: f,
            relative: m,
            preventScrollReset: p,
            unstable_viewTransition: v
          } = e, w = s(e, b), h = "get" === u.toLowerCase() ? "get" : "post", g = Y(c, {
            relative: m
          });
          return a.createElement("form", i({
            ref: t,
            method: h,
            action: g,
            onSubmit: n ? d : e => {
              if (d && d(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                n = (null == t ? void 0 : t.getAttribute("formmethod")) || u;
              f(t || e.currentTarget, {
                method: n,
                replace: o,
                state: r,
                relative: m,
                preventScrollReset: p,
                unstable_viewTransition: v
              })
            }
          }, w))
        }));

      function I(e) {
        let {
          getKey: t,
          storageKey: n
        } = e;
        return G({
          getKey: t,
          storageKey: n
        }), null
      }
      var M, j;

      function B(e) {
        let t = a.useContext(o.sp);
        return t || (0, r.Oi)(!1), t
      }

      function V(e) {
        let t = a.useContext(o.Rq);
        return t || (0, r.Oi)(!1), t
      }

      function z(e, t) {
        let {
          target: n,
          replace: i,
          state: s,
          preventScrollReset: l,
          relative: u,
          unstable_viewTransition: c
        } = void 0 === t ? {} : t, d = (0, o.Zp)(), f = (0, o.zy)(), m = (0, o.x$)(e, {
          relative: u
        });
        return a.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== i ? i : (0, r.AO)(f) === (0, r.AO)(m);
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

      function K(e) {
        let t = a.useRef(d(e)),
          n = a.useRef(!1),
          r = (0, o.zy)(),
          i = a.useMemo((() => function(e, t) {
            let n = d(e);
            return t && t.forEach(((e, a) => {
              n.has(a) || t.getAll(a).forEach((e => {
                n.append(a, e)
              }))
            })), n
          }(r.search, n.current ? null : t.current)), [r.search]),
          s = (0, o.Zp)(),
          l = a.useCallback(((e, t) => {
            const a = d("function" == typeof e ? e(i) : e);
            n.current = !0, s("?" + a, t)
          }), [s, i]);
        return [i, l]
      }

      function H() {
        if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
      }

      function $() {
        let {
          router: e
        } = B(M.UseSubmit), {
          basename: t
        } = a.useContext(o.jb), n = (0, o.$3)();
        return a.useCallback((function(a, o) {
          void 0 === o && (o = {}), H();
          let {
            action: r,
            method: i,
            encType: s,
            formData: l,
            body: u
          } = v(a, t);
          e.navigate(o.action || r, {
            preventScrollReset: o.preventScrollReset,
            formData: l,
            body: u,
            formMethod: o.method || i,
            formEncType: o.encType || s,
            replace: o.replace,
            state: o.state,
            fromRouteId: n,
            unstable_viewTransition: o.unstable_viewTransition
          })
        }), [e, t, n])
      }

      function q(e, t) {
        let {
          router: n
        } = B(M.UseSubmitFetcher), {
          basename: i
        } = a.useContext(o.jb);
        return a.useCallback((function(a, o) {
          void 0 === o && (o = {}), H();
          let {
            action: s,
            method: l,
            encType: u,
            formData: c,
            body: d
          } = v(a, i);
          null == t && (0, r.Oi)(!1), n.fetch(e, t, o.action || s, {
            preventScrollReset: o.preventScrollReset,
            formData: c,
            body: d,
            formMethod: o.method || l,
            formEncType: o.encType || u
          })
        }), [n, i, e, t])
      }

      function Y(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: s
        } = a.useContext(o.jb), l = a.useContext(o.UX);
        l || (0, r.Oi)(!1);
        let [u] = l.matches.slice(-1), c = i({}, (0, o.x$)(e || ".", {
          relative: n
        })), d = (0, o.zy)();
        if (null == e && (c.search = d.search, u.route.index)) {
          let e = new URLSearchParams(c.search);
          e.delete("index"), c.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !u.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== s && (c.pathname = "/" === c.pathname ? s : (0, r.HS)([s, c.pathname])), (0, r.AO)(c)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(M || (M = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(j || (j = {}));
      let W = 0;

      function X() {
        var e;
        let {
          router: t
        } = B(M.UseFetcher), n = a.useContext(o.UX);
        n || (0, r.Oi)(!1);
        let s = null == (e = n.matches[n.matches.length - 1]) ? void 0 : e.route.id;
        null == s && (0, r.Oi)(!1);
        let [l] = a.useState((() => String(++W))), [u] = a.useState((() => (s || (0, r.Oi)(!1), function(e, t) {
          return a.forwardRef(((n, o) => {
            let r = q(e, t);
            return a.createElement(O, i({}, n, {
              ref: o,
              submit: r
            }))
          }))
        }(l, s)))), [c] = a.useState((() => e => {
          t || (0, r.Oi)(!1), s || (0, r.Oi)(!1), t.fetch(l, s, e)
        })), d = q(l, s), f = t.getFetcher(l), m = a.useMemo((() => i({
          Form: u,
          submit: d,
          load: c
        }, f)), [f, u, d, c]);
        return a.useEffect((() => () => {
          t ? t.deleteFetcher(l) : console.warn("No router available to clean up from useFetcher()")
        }), [t, l]), m
      }

      function J() {
        return [...V(j.UseFetchers).fetchers.values()]
      }
      const Z = "react-router-scroll-positions";
      let Q = {};

      function G(e) {
        let {
          getKey: t,
          storageKey: n
        } = void 0 === e ? {} : e, {
          router: s
        } = B(M.UseScrollRestoration), {
          restoreScrollPosition: l,
          preventScrollReset: u
        } = V(j.UseScrollRestoration), {
          basename: c
        } = a.useContext(o.jb), d = (0, o.zy)(), f = (0, o.FE)(), m = (0, o.cq)();
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
              Q[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(n || Z, JSON.stringify(Q))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }), [n, t, m.state, d, f])), "undefined" != typeof document && (a.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(n || Z);
              e && (Q = JSON.parse(e))
            } catch (e) {}
          }), [n]), a.useLayoutEffect((() => {
            let e = t && "/" !== c ? (e, n) => t(i({}, e, {
                pathname: (0, r.pb)(e.pathname, c) || e.pathname
              }), n) : t,
              n = null == s ? void 0 : s.enableScrollRestoration(Q, (() => window.scrollY), e);
            return () => n && n()
          }), [s, c, t]), a.useLayoutEffect((() => {
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
        } = e, r = (0, o.BS)(t);
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
        } = B(M.useViewTransitionState), s = (0, o.x$)(e, {
          relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let l = (0, r.pb)(n.currentLocation.pathname, i) || n.currentLocation.pathname,
          u = (0, r.pb)(n.nextLocation.pathname, i) || n.nextLocation.pathname;
        return null != (0, r.B6)(s.pathname, u) || null != (0, r.B6)(s.pathname, l)
      }
    }
  }
]);