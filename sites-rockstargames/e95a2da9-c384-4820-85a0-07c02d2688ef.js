try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e95a2da9-c384-4820-85a0-07c02d2688ef", e._sentryDebugIdIdentifier = "sentry-dbid-e95a2da9-c384-4820-85a0-07c02d2688ef")
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
  [6188], {
    36188(e, t, r) {
      var n;
      r.r(t), r.d(t, {
        AbortedDeferredError: () => o.tH,
        Await: () => le,
        MemoryRouter: () => te,
        Navigate: () => re,
        NavigationType: () => o.rc,
        Outlet: () => ne,
        Route: () => ae,
        Router: () => oe,
        RouterProvider: () => $,
        Routes: () => ie,
        UNSAFE_DataRouterContext: () => l,
        UNSAFE_DataRouterStateContext: () => u,
        UNSAFE_LocationContext: () => d,
        UNSAFE_NavigationContext: () => c,
        UNSAFE_RouteContext: () => p,
        UNSAFE_logV6DeprecationWarnings: () => Q,
        UNSAFE_mapRouteProperties: () => he,
        UNSAFE_useRouteId: () => j,
        UNSAFE_useRoutesImpl: () => O,
        createMemoryRouter: () => ve,
        createPath: () => o.AO,
        createRoutesFromChildren: () => pe,
        createRoutesFromElements: () => pe,
        defer: () => o.v6,
        generatePath: () => o.tW,
        isRouteErrorResponse: () => o.pX,
        json: () => o.Pq,
        matchPath: () => o.B6,
        matchRoutes: () => o.ue,
        parsePath: () => o.Rr,
        redirect: () => o.V2,
        redirectDocument: () => o.Sk,
        renderMatches: () => fe,
        replace: () => o.HC,
        resolvePath: () => o.o1,
        useActionData: () => G,
        useAsyncError: () => X,
        useAsyncValue: () => W,
        useBlocker: () => q,
        useHref: () => h,
        useInRouterContext: () => v,
        useLoaderData: () => z,
        useLocation: () => m,
        useMatch: () => y,
        useMatches: () => I,
        useNavigate: () => b,
        useNavigation: () => T,
        useNavigationType: () => g,
        useOutlet: () => x,
        useOutletContext: () => R,
        useParams: () => _,
        useResolvedPath: () => S,
        useRevalidator: () => H,
        useRouteError: () => V,
        useRouteLoaderData: () => J,
        useRoutes: () => k
      });
      var a = r(93082),
        o = r(8104);

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, i.apply(this, arguments)
      }
      const l = a.createContext(null),
        u = a.createContext(null),
        s = a.createContext(null),
        c = a.createContext(null),
        d = a.createContext(null),
        p = a.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        f = a.createContext(null);

      function h(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        v() || (0, o.Oi)(!1);
        let {
          basename: n,
          navigator: i
        } = a.useContext(c), {
          hash: l,
          pathname: u,
          search: s
        } = S(e, {
          relative: r
        }), d = u;
        return "/" !== n && (d = "/" === u ? n : (0, o.HS)([n, u])), i.createHref({
          pathname: d,
          search: s,
          hash: l
        })
      }

      function v() {
        return null != a.useContext(d)
      }

      function m() {
        return v() || (0, o.Oi)(!1), a.useContext(d).location
      }

      function g() {
        return a.useContext(d).navigationType
      }

      function y(e) {
        v() || (0, o.Oi)(!1);
        let {
          pathname: t
        } = m();
        return a.useMemo(() => (0, o.B6)(e, (0, o.RO)(t)), [t, e])
      }

      function E(e) {
        a.useContext(c).static || a.useLayoutEffect(e)
      }

      function b() {
        let {
          isDataRoute: e
        } = a.useContext(p);
        return e ? function() {
          let {
            router: e
          } = F(L.UseNavigateStable), t = A(w.UseNavigateStable), r = a.useRef(!1);
          return E(() => {
            r.current = !0
          }), a.useCallback(function(n, a) {
            void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, i({
              fromRouteId: t
            }, a)))
          }, [e, t])
        }() : function() {
          v() || (0, o.Oi)(!1);
          let e = a.useContext(l),
            {
              basename: t,
              future: r,
              navigator: n
            } = a.useContext(c),
            {
              matches: i
            } = a.useContext(p),
            {
              pathname: u
            } = m(),
            s = JSON.stringify((0, o.yD)(i, r.v7_relativeSplatPath)),
            d = a.useRef(!1);
          return E(() => {
            d.current = !0
          }), a.useCallback(function(r, a) {
            if (void 0 === a && (a = {}), !d.current) return;
            if ("number" == typeof r) return void n.go(r);
            let i = (0, o.Gh)(r, JSON.parse(s), u, "path" === a.relative);
            null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, o.HS)([t, i.pathname])), (a.replace ? n.replace : n.push)(i, a.state, a)
          }, [t, n, s, u, e])
        }()
      }
      const C = a.createContext(null);

      function R() {
        return a.useContext(C)
      }

      function x(e) {
        let t = a.useContext(p).outlet;
        return t ? a.createElement(C.Provider, {
          value: e
        }, t) : t
      }

      function _() {
        let {
          matches: e
        } = a.useContext(p), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function S(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          future: n
        } = a.useContext(c), {
          matches: i
        } = a.useContext(p), {
          pathname: l
        } = m(), u = JSON.stringify((0, o.yD)(i, n.v7_relativeSplatPath));
        return a.useMemo(() => (0, o.Gh)(e, JSON.parse(u), l, "path" === r), [e, u, l, r])
      }

      function k(e, t) {
        return O(e, t)
      }

      function O(e, t, r, n) {
        v() || (0, o.Oi)(!1);
        let {
          navigator: l
        } = a.useContext(c), {
          matches: u
        } = a.useContext(p), s = u[u.length - 1], f = s ? s.params : {}, h = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let g, y = m();
        if (t) {
          var E;
          let e = "string" == typeof t ? (0, o.Rr)(t) : t;
          "/" === h || (null == (E = e.pathname) ? void 0 : E.startsWith(h)) || (0, o.Oi)(!1), g = e
        } else g = y;
        let b = g.pathname || "/",
          C = b;
        if ("/" !== h) {
          let e = h.replace(/^\//, "").split("/");
          C = "/" + b.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let R = (0, o.ue)(e, {
            pathname: C
          }),
          x = B(R && R.map(e => Object.assign({}, e, {
            params: Object.assign({}, f, e.params),
            pathname: (0, o.HS)([h, l.encodeLocation ? l.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? h : (0, o.HS)([h, l.encodeLocation ? l.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          })), u, r, n);
        return t && x ? a.createElement(d.Provider, {
          value: {
            location: i({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, g),
            navigationType: o.rc.Pop
          }
        }, x) : x
      }

      function P() {
        let e = V(),
          t = (0, o.pX)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          n = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
          };
        return a.createElement(a.Fragment, null, a.createElement("h2", null, "Unexpected Application Error!"), a.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, t), r ? a.createElement("pre", {
          style: n
        }, r) : null, null)
      }
      const D = a.createElement(P, null);
      class U extends a.Component {
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
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
          }
        }
        componentDidCatch(e, t) {
          console.error("React Router caught the following error during render", e, t)
        }
        render() {
          return void 0 !== this.state.error ? a.createElement(p.Provider, {
            value: this.props.routeContext
          }, a.createElement(f.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function N(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, o = a.useContext(l);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), a.createElement(p.Provider, {
          value: t
        }, n)
      }

      function B(e, t, r, n) {
        var i;
        if (void 0 === t && (t = []), void 0 === r && (r = null), void 0 === n && (n = null), null == e) {
          var l;
          if (!r) return null;
          if (r.errors) e = r.matches;
          else {
            if (!(null != (l = n) && l.v7_partialHydration && 0 === t.length && !r.initialized && r.matches.length > 0)) return null;
            e = r.matches
          }
        }
        let u = e,
          s = null == (i = r) ? void 0 : i.errors;
        if (null != s) {
          let e = u.findIndex(e => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id]));
          e >= 0 || (0, o.Oi)(!1), u = u.slice(0, Math.min(u.length, e + 1))
        }
        let c = !1,
          d = -1;
        if (r && n && n.v7_partialHydration)
          for (let e = 0; e < u.length; e++) {
            let t = u[e];
            if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (d = e), t.route.id) {
              let {
                loaderData: e,
                errors: n
              } = r, a = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
              if (t.route.lazy || a) {
                c = !0, u = d >= 0 ? u.slice(0, d + 1) : [u[0]];
                break
              }
            }
          }
        return u.reduceRight((e, n, o) => {
          let i, l = !1,
            p = null,
            f = null;
          var h;
          r && (i = s && n.route.id ? s[n.route.id] : void 0, p = n.route.errorElement || D, c && (d < 0 && 0 === o ? (K[h = "route-fallback"] || (K[h] = !0), l = !0, f = null) : d === o && (l = !0, f = n.route.hydrateFallbackElement || null)));
          let v = t.concat(u.slice(0, o + 1)),
            m = () => {
              let t;
              return t = i ? p : l ? f : n.route.Component ? a.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, a.createElement(N, {
                match: n,
                routeContext: {
                  outlet: e,
                  matches: v,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === o) ? a.createElement(U, {
            location: r.location,
            revalidation: r.revalidation,
            component: p,
            error: i,
            children: m(),
            routeContext: {
              outlet: null,
              matches: v,
              isDataRoute: !0
            }
          }) : m()
        }, null)
      }
      var L = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(L || {}),
        w = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(w || {});

      function F(e) {
        let t = a.useContext(l);
        return t || (0, o.Oi)(!1), t
      }

      function M(e) {
        let t = a.useContext(u);
        return t || (0, o.Oi)(!1), t
      }

      function A(e) {
        let t = function() {
            let e = a.useContext(p);
            return e || (0, o.Oi)(!1), e
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || (0, o.Oi)(!1), r.route.id
      }

      function j() {
        return A(w.UseRouteId)
      }

      function T() {
        return M(w.UseNavigation).navigation
      }

      function H() {
        let e = F(L.UseRevalidator),
          t = M(w.UseRevalidator);
        return a.useMemo(() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        }), [e.router.revalidate, t.revalidation])
      }

      function I() {
        let {
          matches: e,
          loaderData: t
        } = M(w.UseMatches);
        return a.useMemo(() => e.map(e => (0, o.ro)(e, t)), [e, t])
      }

      function z() {
        let e = M(w.UseLoaderData),
          t = A(w.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function J(e) {
        return M(w.UseRouteLoaderData).loaderData[e]
      }

      function G() {
        let e = M(w.UseActionData),
          t = A(w.UseLoaderData);
        return e.actionData ? e.actionData[t] : void 0
      }

      function V() {
        var e;
        let t = a.useContext(f),
          r = M(w.UseRouteError),
          n = A(w.UseRouteError);
        return void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[n]
      }

      function W() {
        let e = a.useContext(s);
        return null == e ? void 0 : e._data
      }

      function X() {
        let e = a.useContext(s);
        return null == e ? void 0 : e._error
      }
      let Y = 0;

      function q(e) {
        let {
          router: t,
          basename: r
        } = F(L.UseBlocker), n = M(w.UseBlocker), [l, u] = a.useState(""), s = a.useCallback(t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: n,
            nextLocation: a,
            historyAction: l
          } = t;
          return e({
            currentLocation: i({}, n, {
              pathname: (0, o.pb)(n.pathname, r) || n.pathname
            }),
            nextLocation: i({}, a, {
              pathname: (0, o.pb)(a.pathname, r) || a.pathname
            }),
            historyAction: l
          })
        }, [r, e]);
        return a.useEffect(() => {
          let e = String(++Y);
          return u(e), () => t.deleteBlocker(e)
        }, [t]), a.useEffect(() => {
          "" !== l && t.getBlocker(l, s)
        }, [t, l, s]), l && n.blockers.has(l) ? n.blockers.get(l) : o.G3
      }
      const K = {};

      function Q(e, t) {
        null == e || e.v7_startTransition, void 0 === (null == e ? void 0 : e.v7_relativeSplatPath) && (!t || t.v7_relativeSplatPath), t && (t.v7_fetcherPersist, t.v7_normalizeFormMethod, t.v7_partialHydration, t.v7_skipActionErrorRevalidation)
      }
      const Z = (n || (n = r.t(a, 2))).startTransition;

      function $(e) {
        let {
          fallbackElement: t,
          router: r,
          future: n
        } = e, [o, i] = a.useState(r.state), {
          v7_startTransition: s
        } = n || {}, c = a.useCallback(e => {
          s && Z ? Z(() => i(e)) : i(e)
        }, [i, s]);
        a.useLayoutEffect(() => r.subscribe(c), [r, c]), a.useEffect(() => {}, []);
        let d = a.useMemo(() => ({
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
          }), [r]),
          p = r.basename || "/",
          f = a.useMemo(() => ({
            router: r,
            navigator: d,
            static: !1,
            basename: p
          }), [r, d, p]);
        return a.useEffect(() => Q(n, r.future), [r, n]), a.createElement(a.Fragment, null, a.createElement(l.Provider, {
          value: f
        }, a.createElement(u.Provider, {
          value: o
        }, a.createElement(oe, {
          basename: p,
          location: o.location,
          navigationType: o.historyAction,
          navigator: d,
          future: {
            v7_relativeSplatPath: r.future.v7_relativeSplatPath
          }
        }, o.initialized || r.future.v7_partialHydration ? a.createElement(ee, {
          routes: r.routes,
          future: r.future,
          state: o
        }) : t))), null)
      }

      function ee(e) {
        let {
          routes: t,
          future: r,
          state: n
        } = e;
        return O(t, void 0, n, r)
      }

      function te(e) {
        let {
          basename: t,
          children: r,
          initialEntries: n,
          initialIndex: i,
          future: l
        } = e, u = a.useRef();
        null == u.current && (u.current = (0, o.sC)({
          initialEntries: n,
          initialIndex: i,
          v5Compat: !0
        }));
        let s = u.current,
          [c, d] = a.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: p
          } = l || {},
          f = a.useCallback(e => {
            p && Z ? Z(() => d(e)) : d(e)
          }, [d, p]);
        return a.useLayoutEffect(() => s.listen(f), [s, f]), a.useEffect(() => Q(l), [l]), a.createElement(oe, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: s,
          future: l
        })
      }

      function re(e) {
        let {
          to: t,
          replace: r,
          state: n,
          relative: i
        } = e;
        v() || (0, o.Oi)(!1);
        let {
          future: l,
          static: u
        } = a.useContext(c), {
          matches: s
        } = a.useContext(p), {
          pathname: d
        } = m(), f = b(), h = (0, o.Gh)(t, (0, o.yD)(s, l.v7_relativeSplatPath), d, "path" === i), g = JSON.stringify(h);
        return a.useEffect(() => f(JSON.parse(g), {
          replace: r,
          state: n,
          relative: i
        }), [f, g, i, r, n]), null
      }

      function ne(e) {
        return x(e.context)
      }

      function ae(e) {
        (0, o.Oi)(!1)
      }

      function oe(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: n,
          navigationType: l = o.rc.Pop,
          navigator: u,
          static: s = !1,
          future: p
        } = e;
        v() && (0, o.Oi)(!1);
        let f = t.replace(/^\/*/, "/"),
          h = a.useMemo(() => ({
            basename: f,
            navigator: u,
            static: s,
            future: i({
              v7_relativeSplatPath: !1
            }, p)
          }), [f, p, u, s]);
        "string" == typeof n && (n = (0, o.Rr)(n));
        let {
          pathname: m = "/",
          search: g = "",
          hash: y = "",
          state: E = null,
          key: b = "default"
        } = n, C = a.useMemo(() => {
          let e = (0, o.pb)(m, f);
          return null == e ? null : {
            location: {
              pathname: e,
              search: g,
              hash: y,
              state: E,
              key: b
            },
            navigationType: l
          }
        }, [f, m, g, y, E, b, l]);
        return null == C ? null : a.createElement(c.Provider, {
          value: h
        }, a.createElement(d.Provider, {
          children: r,
          value: C
        }))
      }

      function ie(e) {
        let {
          children: t,
          location: r
        } = e;
        return k(pe(t), r)
      }

      function le(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return a.createElement(ce, {
          resolve: n,
          errorElement: r
        }, a.createElement(de, null, t))
      }
      var ue = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(ue || {});
      const se = new Promise(() => {});
      class ce extends a.Component {
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
          } = this.props, n = null, i = ue.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              i = ue.error;
              let e = this.state.error;
              n = Promise.reject().catch(() => {}), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, i = "_error" in n ? ue.error : "_data" in n ? ue.success : ue.pending) : (i = ue.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then(e => Object.defineProperty(r, "_data", {
              get: () => e
            }), e => Object.defineProperty(r, "_error", {
              get: () => e
            })));
          else i = ue.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (i === ue.error && n._error instanceof o.tH) throw se;
          if (i === ue.error && !t) throw n._error;
          if (i === ue.error) return a.createElement(s.Provider, {
            value: n,
            children: t
          });
          if (i === ue.success) return a.createElement(s.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function de(e) {
        let {
          children: t
        } = e, r = W(), n = "function" == typeof t ? t(r) : t;
        return a.createElement(a.Fragment, null, n)
      }

      function pe(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return a.Children.forEach(e, (e, n) => {
          if (!a.isValidElement(e)) return;
          let i = [...t, n];
          if (e.type === a.Fragment) return void r.push.apply(r, pe(e.props.children, i));
          e.type !== ae && (0, o.Oi)(!1), e.props.index && e.props.children && (0, o.Oi)(!1);
          let l = {
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
          e.props.children && (l.children = pe(e.props.children, i)), r.push(l)
        }), r
      }

      function fe(e) {
        return B(e)
      }

      function he(e) {
        let t = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
        };
        return e.Component && Object.assign(t, {
          element: a.createElement(e.Component),
          Component: void 0
        }), e.HydrateFallback && Object.assign(t, {
          hydrateFallbackElement: a.createElement(e.HydrateFallback),
          HydrateFallback: void 0
        }), e.ErrorBoundary && Object.assign(t, {
          errorElement: a.createElement(e.ErrorBoundary),
          ErrorBoundary: void 0
        }), t
      }

      function ve(e, t) {
        return (0, o.aE)({
          basename: null == t ? void 0 : t.basename,
          future: i({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, o.sC)({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          mapRouteProperties: he,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation
        }).initialize()
      }
    }
  }
]);