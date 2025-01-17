! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1c01f2fd-0ad7-42bc-9104-f887b8993c66", e._sentryDebugIdIdentifier = "sentry-dbid-1c01f2fd-0ad7-42bc-9104-f887b8993c66")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [1171], {
    31171: (e, t, n) => {
      n.r(t), n.d(t, {
        AbortedDeferredError: () => a.tH,
        Await: () => r.jD,
        BrowserRouter: () => x,
        Form: () => N,
        HashRouter: () => k,
        Link: () => U,
        MemoryRouter: () => r.fS,
        NavLink: () => P,
        Navigate: () => r.C5,
        NavigationType: () => a.rc,
        Outlet: () => r.sv,
        Route: () => r.qh,
        Router: () => r.Ix,
        RouterProvider: () => L,
        Routes: () => r.BV,
        ScrollRestoration: () => I,
        UNSAFE_DataRouterContext: () => r.sp,
        UNSAFE_DataRouterStateContext: () => r.Rq,
        UNSAFE_LocationContext: () => r.yN,
        UNSAFE_NavigationContext: () => r.jb,
        UNSAFE_RouteContext: () => r.UX,
        UNSAFE_ViewTransitionContext: () => E,
        UNSAFE_useRouteId: () => r.$3,
        UNSAFE_useScrollRestoration: () => G,
        createBrowserRouter: () => g,
        createHashRouter: () => y,
        createMemoryRouter: () => r.bg,
        createPath: () => a.AO,
        createRoutesFromChildren: () => r.AV,
        createRoutesFromElements: () => r.Eu,
        createSearchParams: () => d,
        defer: () => a.v6,
        generatePath: () => a.tW,
        isRouteErrorResponse: () => a.pX,
        json: () => a.Pq,
        matchPath: () => a.B6,
        matchRoutes: () => a.ue,
        parsePath: () => a.Rr,
        redirect: () => a.V2,
        redirectDocument: () => a.Sk,
        renderMatches: () => r.KT,
        resolvePath: () => a.o1,
        unstable_HistoryRouter: () => A,
        unstable_useBlocker: () => r.BS,
        unstable_usePrompt: () => te,
        unstable_useViewTransitionState: () => ne,
        useActionData: () => r.mP,
        useAsyncError: () => r.oI,
        useAsyncValue: () => r.J8,
        useBeforeUnload: () => ee,
        useFetcher: () => X,
        useFetchers: () => J,
        useFormAction: () => Y,
        useHref: () => r.$P,
        useInRouterContext: () => r.Ri,
        useLinkClickHandler: () => z,
        useLoaderData: () => r.LG,
        useLocation: () => r.zy,
        useMatch: () => r.RQ,
        useMatches: () => r.FE,
        useNavigate: () => r.Zp,
        useNavigation: () => r.cq,
        useNavigationType: () => r.wQ,
        useOutlet: () => r.P1,
        useOutletContext: () => r.KC,
        useParams: () => r.g,
        useResolvedPath: () => r.x$,
        useRevalidator: () => r.vL,
        useRouteError: () => r.r5,
        useRouteLoaderData: () => r.Ew,
        useRoutes: () => r.Ye,
        useSearchParams: () => K,
        useSubmit: () => $
      });
      var o = n(71403),
        r = n(64105),
        a = n(15261);

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
        var n, o, r = {},
          a = Object.keys(e);
        for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
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
        let n, o, r, i, s;
        if (c(d = e) && "form" === d.tagName.toLowerCase()) {
          let s = e.getAttribute("action");
          o = s ? (0, a.pb)(s, t) : null, n = e.getAttribute("method") || l, r = p(e.getAttribute("enctype")) || u, i = new FormData(e)
        } else if (function(e) {
            return c(e) && "button" === e.tagName.toLowerCase()
          }(e) || function(e) {
            return c(e) && "input" === e.tagName.toLowerCase()
          }(e) && ("submit" === e.type || "image" === e.type)) {
          let s = e.form;
          if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let c = e.getAttribute("formaction") || s.getAttribute("action");
          if (o = c ? (0, a.pb)(c, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || l, r = p(e.getAttribute("formenctype")) || p(s.getAttribute("enctype")) || u, i = new FormData(s, e), ! function() {
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
          n = l, o = null, r = u, s = e
        }
        var d;
        return i && "text/plain" === r && (s = i, i = void 0), {
          action: o,
          method: n.toLowerCase(),
          encType: r,
          formData: i,
          body: s
        }
      }
      const w = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
        h = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
        b = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

      function g(e, t) {
        return (0, a.aE)({
          basename: null == t ? void 0 : t.basename,
          future: i({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, a.zR)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || R(),
          routes: e,
          mapRouteProperties: r.wE,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function y(e, t) {
        return (0, a.aE)({
          basename: null == t ? void 0 : t.basename,
          future: i({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, a.TM)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || R(),
          routes: e,
          mapRouteProperties: r.wE,
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
          if (o && "RouteErrorResponse" === o.__type) n[e] = new a.VV(o.status, o.statusText, o.data, !0 === o.internal);
          else if (o && "Error" === o.__type) {
          if (o.__subType) {
            let t = window[o.__subType];
            if ("function" == typeof t) try {
              let r = new t(o.message);
              r.stack = "", n[e] = r
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

      function L(e) {
        let {
          fallbackElement: t,
          router: n,
          future: a
        } = e, [i, s] = o.useState(n.state), [l, u] = o.useState(), [c, d] = o.useState({
          isTransitioning: !1
        }), [f, m] = o.useState(), [p, v] = o.useState(), [w, h] = o.useState(), {
          v7_startTransition: b
        } = a || {}, g = o.useCallback((e => {
          b ? function(e) {
            T ? T(e) : e()
          }(e) : e()
        }), [b]), y = o.useCallback(((e, t) => {
          let {
            unstable_viewTransitionOpts: o
          } = t;
          o && null != n.window && "function" == typeof n.window.document.startViewTransition ? p && f ? (f.resolve(), p.skipTransition(), h({
            state: e,
            currentLocation: o.currentLocation,
            nextLocation: o.nextLocation
          })) : (u(e), d({
            isTransitioning: !0,
            currentLocation: o.currentLocation,
            nextLocation: o.nextLocation
          })) : g((() => s(e)))
        }), [g, p, f, n.window]);
        o.useLayoutEffect((() => n.subscribe(y)), [n, y]), o.useEffect((() => {
          c.isTransitioning && m(new _)
        }), [c.isTransitioning]), o.useEffect((() => {
          if (f && l && n.window) {
            let e = l,
              t = f.promise,
              o = n.window.document.startViewTransition((async () => {
                g((() => s(e))), await t
              }));
            o.finished.finally((() => {
              m(void 0), v(void 0), u(void 0), d({
                isTransitioning: !1
              })
            })), v(o)
          }
        }), [g, l, f, n.window]), o.useEffect((() => {
          f && l && i.location.key === l.location.key && f.resolve()
        }), [f, p, i.location, l]), o.useEffect((() => {
          !c.isTransitioning && w && (u(w.state), d({
            isTransitioning: !0,
            currentLocation: w.currentLocation,
            nextLocation: w.nextLocation
          }), h(void 0))
        }), [c.isTransitioning, w]);
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
          L = o.useMemo((() => ({
            router: n,
            navigator: R,
            static: !1,
            basename: S
          })), [n, R, S]);
        return o.createElement(o.Fragment, null, o.createElement(r.sp.Provider, {
          value: L
        }, o.createElement(r.Rq.Provider, {
          value: i
        }, o.createElement(E.Provider, {
          value: c
        }, o.createElement(r.Ix, {
          basename: S,
          location: i.location,
          navigationType: i.historyAction,
          navigator: R
        }, i.initialized ? o.createElement(C, {
          routes: n.routes,
          state: i
        }) : t)))), null)
      }

      function C(e) {
        let {
          routes: t,
          state: n
        } = e;
        return (0, r.ph)(t, void 0, n)
      }

      function x(e) {
        let {
          basename: t,
          children: n,
          future: i,
          window: s
        } = e, l = o.useRef();
        null == l.current && (l.current = (0, a.zR)({
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
        return o.useLayoutEffect((() => u.listen(m)), [u, m]), o.createElement(r.Ix, {
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
        } = e, l = o.useRef();
        null == l.current && (l.current = (0, a.TM)({
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
        return o.useLayoutEffect((() => u.listen(m)), [u, m]), o.createElement(r.Ix, {
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
          future: a,
          history: i
        } = e, [s, l] = o.useState({
          action: i.action,
          location: i.location
        }), {
          v7_startTransition: u
        } = a || {}, c = o.useCallback((e => {
          u && T ? T((() => l(e))) : l(e)
        }), [l, u]);
        return o.useLayoutEffect((() => i.listen(c)), [i, c]), o.createElement(r.Ix, {
          basename: t,
          children: n,
          location: s.location,
          navigationType: s.action,
          navigator: i
        })
      }
      const F = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        D = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        U = o.forwardRef((function(e, t) {
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
            } = o.useContext(r.jb),
            y = !1;
          if ("string" == typeof p && D.test(p) && (n = p, F)) try {
            let e = new URL(window.location.href),
              t = p.startsWith("//") ? new URL(e.protocol + p) : new URL(p),
              n = (0, a.pb)(t.pathname, g);
            t.origin === e.origin && null != n ? p = n + t.search + t.hash : y = !0
          } catch (e) {}
          let R = (0, r.$P)(p, {
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
          return o.createElement("a", i({}, b, {
            href: n || R,
            onClick: y || c ? l : function(e) {
              l && l(e), e.defaultPrevented || S(e)
            },
            ref: t,
            target: m
          }))
        })),
        P = o.forwardRef((function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: a = !1,
            className: l = "",
            end: u = !1,
            style: c,
            to: d,
            unstable_viewTransition: f,
            children: m
          } = e, p = s(e, h), v = (0, r.x$)(d, {
            relative: p.relative
          }), w = (0, r.zy)(), b = o.useContext(r.Rq), {
            navigator: g
          } = o.useContext(r.jb), y = null != b && ne(v) && !0 === f, R = g.encodeLocation ? g.encodeLocation(v).pathname : v.pathname, S = w.pathname, E = b && b.navigation && b.navigation.location ? b.navigation.location.pathname : null;
          a || (S = S.toLowerCase(), E = E ? E.toLowerCase() : null, R = R.toLowerCase());
          let T, _ = S === R || !u && S.startsWith(R) && "/" === S.charAt(R.length),
            L = null != E && (E === R || !u && E.startsWith(R) && "/" === E.charAt(R.length)),
            C = {
              isActive: _,
              isPending: L,
              isTransitioning: y
            },
            x = _ ? n : void 0;
          T = "function" == typeof l ? l(C) : [l, _ ? "active" : null, L ? "pending" : null, y ? "transitioning" : null].filter(Boolean).join(" ");
          let k = "function" == typeof c ? c(C) : c;
          return o.createElement(U, i({}, p, {
            "aria-current": x,
            className: T,
            ref: t,
            style: k,
            to: d,
            unstable_viewTransition: f
          }), "function" == typeof m ? m(C) : m)
        })),
        N = o.forwardRef(((e, t) => {
          let n = $();
          return o.createElement(O, i({}, e, {
            submit: n,
            ref: t
          }))
        })),
        O = o.forwardRef(((e, t) => {
          let {
            reloadDocument: n,
            replace: r,
            state: a,
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
          return o.createElement("form", i({
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
                replace: r,
                state: a,
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
        let t = o.useContext(r.sp);
        return t || (0, a.Oi)(!1), t
      }

      function V(e) {
        let t = o.useContext(r.Rq);
        return t || (0, a.Oi)(!1), t
      }

      function z(e, t) {
        let {
          target: n,
          replace: i,
          state: s,
          preventScrollReset: l,
          relative: u,
          unstable_viewTransition: c
        } = void 0 === t ? {} : t, d = (0, r.Zp)(), f = (0, r.zy)(), m = (0, r.x$)(e, {
          relative: u
        });
        return o.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== i ? i : (0, a.AO)(f) === (0, a.AO)(m);
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
        let t = o.useRef(d(e)),
          n = o.useRef(!1),
          a = (0, r.zy)(),
          i = o.useMemo((() => function(e, t) {
            let n = d(e);
            return t && t.forEach(((e, o) => {
              n.has(o) || t.getAll(o).forEach((e => {
                n.append(o, e)
              }))
            })), n
          }(a.search, n.current ? null : t.current)), [a.search]),
          s = (0, r.Zp)(),
          l = o.useCallback(((e, t) => {
            const o = d("function" == typeof e ? e(i) : e);
            n.current = !0, s("?" + o, t)
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
        } = o.useContext(r.jb), n = (0, r.$3)();
        return o.useCallback((function(o, r) {
          void 0 === r && (r = {}), H();
          let {
            action: a,
            method: i,
            encType: s,
            formData: l,
            body: u
          } = v(o, t);
          e.navigate(r.action || a, {
            preventScrollReset: r.preventScrollReset,
            formData: l,
            body: u,
            formMethod: r.method || i,
            formEncType: r.encType || s,
            replace: r.replace,
            state: r.state,
            fromRouteId: n,
            unstable_viewTransition: r.unstable_viewTransition
          })
        }), [e, t, n])
      }

      function q(e, t) {
        let {
          router: n
        } = B(M.UseSubmitFetcher), {
          basename: i
        } = o.useContext(r.jb);
        return o.useCallback((function(o, r) {
          void 0 === r && (r = {}), H();
          let {
            action: s,
            method: l,
            encType: u,
            formData: c,
            body: d
          } = v(o, i);
          null == t && (0, a.Oi)(!1), n.fetch(e, t, r.action || s, {
            preventScrollReset: r.preventScrollReset,
            formData: c,
            body: d,
            formMethod: r.method || l,
            formEncType: r.encType || u
          })
        }), [n, i, e, t])
      }

      function Y(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: s
        } = o.useContext(r.jb), l = o.useContext(r.UX);
        l || (0, a.Oi)(!1);
        let [u] = l.matches.slice(-1), c = i({}, (0, r.x$)(e || ".", {
          relative: n
        })), d = (0, r.zy)();
        if (null == e && (c.search = d.search, u.route.index)) {
          let e = new URLSearchParams(c.search);
          e.delete("index"), c.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !u.route.index || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), "/" !== s && (c.pathname = "/" === c.pathname ? s : (0, a.HS)([s, c.pathname])), (0, a.AO)(c)
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
        } = B(M.UseFetcher), n = o.useContext(r.UX);
        n || (0, a.Oi)(!1);
        let s = null == (e = n.matches[n.matches.length - 1]) ? void 0 : e.route.id;
        null == s && (0, a.Oi)(!1);
        let [l] = o.useState((() => String(++W))), [u] = o.useState((() => (s || (0, a.Oi)(!1), function(e, t) {
          return o.forwardRef(((n, r) => {
            let a = q(e, t);
            return o.createElement(O, i({}, n, {
              ref: r,
              submit: a
            }))
          }))
        }(l, s)))), [c] = o.useState((() => e => {
          t || (0, a.Oi)(!1), s || (0, a.Oi)(!1), t.fetch(l, s, e)
        })), d = q(l, s), f = t.getFetcher(l), m = o.useMemo((() => i({
          Form: u,
          submit: d,
          load: c
        }, f)), [f, u, d, c]);
        return o.useEffect((() => () => {
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
        } = o.useContext(r.jb), d = (0, r.zy)(), f = (0, r.FE)(), m = (0, r.cq)();
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
              Q[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(n || Z, JSON.stringify(Q))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }), [n, t, m.state, d, f])), "undefined" != typeof document && (o.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(n || Z);
              e && (Q = JSON.parse(e))
            } catch (e) {}
          }), [n]), o.useLayoutEffect((() => {
            let e = t && "/" !== c ? (e, n) => t(i({}, e, {
                pathname: (0, a.pb)(e.pathname, c) || e.pathname
              }), n) : t,
              n = null == s ? void 0 : s.enableScrollRestoration(Q, (() => window.scrollY), e);
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
        } = e, a = (0, r.BS)(t);
        o.useEffect((() => {
          "blocked" === a.state && (window.confirm(n) ? setTimeout(a.proceed, 0) : a.reset())
        }), [a, n]), o.useEffect((() => {
          "blocked" !== a.state || t || a.reset()
        }), [a, t])
      }

      function ne(e, t) {
        void 0 === t && (t = {});
        let n = o.useContext(E);
        null == n && (0, a.Oi)(!1);
        let {
          basename: i
        } = B(M.useViewTransitionState), s = (0, r.x$)(e, {
          relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let l = (0, a.pb)(n.currentLocation.pathname, i) || n.currentLocation.pathname,
          u = (0, a.pb)(n.nextLocation.pathname, i) || n.nextLocation.pathname;
        return null != (0, a.B6)(s.pathname, u) || null != (0, a.B6)(s.pathname, l)
      }
    }
  }
]);