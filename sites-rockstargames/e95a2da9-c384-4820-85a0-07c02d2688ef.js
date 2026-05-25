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
      var a;
      r.r(t), r.d(t, {
        AbortedDeferredError: () => o.tH,
        Await: () => le,
        MemoryRouter: () => te,
        Navigate: () => re,
        NavigationType: () => o.rc,
        Outlet: () => ae,
        Route: () => ne,
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
      var n = r(93082),
        o = r(8104);

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
          }
          return e
        }, i.apply(this, arguments)
      }
      const l = n.createContext(null),
        u = n.createContext(null),
        s = n.createContext(null),
        c = n.createContext(null),
        d = n.createContext(null),
        p = n.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        f = n.createContext(null);

      function h(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        v() || (0, o.Oi)(!1);
        let {
          basename: a,
          navigator: i
        } = n.useContext(c), {
          hash: l,
          pathname: u,
          search: s
        } = S(e, {
          relative: r
        }), d = u;
        return "/" !== a && (d = "/" === u ? a : (0, o.HS)([a, u])), i.createHref({
          pathname: d,
          search: s,
          hash: l
        })
      }

      function v() {
        return null != n.useContext(d)
      }

      function m() {
        return v() || (0, o.Oi)(!1), n.useContext(d).location
      }

      function g() {
        return n.useContext(d).navigationType
      }

      function y(e) {
        v() || (0, o.Oi)(!1);
        let {
          pathname: t
        } = m();
        return n.useMemo(() => (0, o.B6)(e, (0, o.RO)(t)), [t, e])
      }

      function E(e) {
        n.useContext(c).static || n.useLayoutEffect(e)
      }

      function b() {
        let {
          isDataRoute: e
        } = n.useContext(p);
        return e ? function() {
          let {
            router: e
          } = F(L.UseNavigateStable), t = A(w.UseNavigateStable), r = n.useRef(!1);
          return E(() => {
            r.current = !0
          }), n.useCallback(function(a, n) {
            void 0 === n && (n = {}), r.current && ("number" == typeof a ? e.navigate(a) : e.navigate(a, i({
              fromRouteId: t
            }, n)))
          }, [e, t])
        }() : function() {
          v() || (0, o.Oi)(!1);
          let e = n.useContext(l),
            {
              basename: t,
              future: r,
              navigator: a
            } = n.useContext(c),
            {
              matches: i
            } = n.useContext(p),
            {
              pathname: u
            } = m(),
            s = JSON.stringify((0, o.yD)(i, r.v7_relativeSplatPath)),
            d = n.useRef(!1);
          return E(() => {
            d.current = !0
          }), n.useCallback(function(r, n) {
            if (void 0 === n && (n = {}), !d.current) return;
            if ("number" == typeof r) return void a.go(r);
            let i = (0, o.Gh)(r, JSON.parse(s), u, "path" === n.relative);
            null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, o.HS)([t, i.pathname])), (n.replace ? a.replace : a.push)(i, n.state, n)
          }, [t, a, s, u, e])
        }()
      }
      const C = n.createContext(null);

      function R() {
        return n.useContext(C)
      }

      function x(e) {
        let t = n.useContext(p).outlet;
        return t ? n.createElement(C.Provider, {
          value: e
        }, t) : t
      }

      function _() {
        let {
          matches: e
        } = n.useContext(p), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function S(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          future: a
        } = n.useContext(c), {
          matches: i
        } = n.useContext(p), {
          pathname: l
        } = m(), u = JSON.stringify((0, o.yD)(i, a.v7_relativeSplatPath));
        return n.useMemo(() => (0, o.Gh)(e, JSON.parse(u), l, "path" === r), [e, u, l, r])
      }

      function k(e, t) {
        return O(e, t)
      }

      function O(e, t, r, a) {
        v() || (0, o.Oi)(!1);
        let {
          navigator: l
        } = n.useContext(c), {
          matches: u
        } = n.useContext(p), s = u[u.length - 1], f = s ? s.params : {}, h = (s && s.pathname, s ? s.pathnameBase : "/");
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
          })), u, r, a);
        return t && x ? n.createElement(d.Provider, {
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
      const D = n.createElement(P, null);
      class U extends n.Component {
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
          return void 0 !== this.state.error ? n.createElement(p.Provider, {
            value: this.props.routeContext
          }, n.createElement(f.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function N(e) {
        let {
          routeContext: t,
          match: r,
          children: a
        } = e, o = n.useContext(l);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(p.Provider, {
          value: t
        }, a)
      }

      function B(e, t, r, a) {
        var i;
        if (void 0 === t && (t = []), void 0 === r && (r = null), void 0 === a && (a = null), null == e) {
          var l;
          if (!r) return null;
          if (r.errors) e = r.matches;
          else {
            if (!(null != (l = a) && l.v7_partialHydration && 0 === t.length && !r.initialized && r.matches.length > 0)) return null;
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
        if (r && a && a.v7_partialHydration)
          for (let e = 0; e < u.length; e++) {
            let t = u[e];
            if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (d = e), t.route.id) {
              let {
                loaderData: e,
                errors: a
              } = r, n = t.route.loader && void 0 === e[t.route.id] && (!a || void 0 === a[t.route.id]);
              if (t.route.lazy || n) {
                c = !0, u = d >= 0 ? u.slice(0, d + 1) : [u[0]];
                break
              }
            }
          }
        return u.reduceRight((e, a, o) => {
          let i, l = !1,
            p = null,
            f = null;
          var h;
          r && (i = s && a.route.id ? s[a.route.id] : void 0, p = a.route.errorElement || D, c && (d < 0 && 0 === o ? (K[h = "route-fallback"] || (K[h] = !0), l = !0, f = null) : d === o && (l = !0, f = a.route.hydrateFallbackElement || null)));
          let v = t.concat(u.slice(0, o + 1)),
            m = () => {
              let t;
              return t = i ? p : l ? f : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(N, {
                match: a,
                routeContext: {
                  outlet: e,
                  matches: v,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o) ? n.createElement(U, {
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
        let t = n.useContext(l);
        return t || (0, o.Oi)(!1), t
      }

      function M(e) {
        let t = n.useContext(u);
        return t || (0, o.Oi)(!1), t
      }

      function A(e) {
        let t = function() {
            let e = n.useContext(p);
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
        return n.useMemo(() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        }), [e.router.revalidate, t.revalidation])
      }

      function I() {
        let {
          matches: e,
          loaderData: t
        } = M(w.UseMatches);
        return n.useMemo(() => e.map(e => (0, o.ro)(e, t)), [e, t])
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
        let t = n.useContext(f),
          r = M(w.UseRouteError),
          a = A(w.UseRouteError);
        return void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[a]
      }

      function W() {
        let e = n.useContext(s);
        return null == e ? void 0 : e._data
      }

      function X() {
        let e = n.useContext(s);
        return null == e ? void 0 : e._error
      }
      let Y = 0;

      function q(e) {
        let {
          router: t,
          basename: r
        } = F(L.UseBlocker), a = M(w.UseBlocker), [l, u] = n.useState(""), s = n.useCallback(t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: a,
            nextLocation: n,
            historyAction: l
          } = t;
          return e({
            currentLocation: i({}, a, {
              pathname: (0, o.pb)(a.pathname, r) || a.pathname
            }),
            nextLocation: i({}, n, {
              pathname: (0, o.pb)(n.pathname, r) || n.pathname
            }),
            historyAction: l
          })
        }, [r, e]);
        return n.useEffect(() => {
          let e = String(++Y);
          return u(e), () => t.deleteBlocker(e)
        }, [t]), n.useEffect(() => {
          "" !== l && t.getBlocker(l, s)
        }, [t, l, s]), l && a.blockers.has(l) ? a.blockers.get(l) : o.G3
      }
      const K = {};

      function Q(e, t) {
        null == e || e.v7_startTransition, void 0 === (null == e ? void 0 : e.v7_relativeSplatPath) && (!t || t.v7_relativeSplatPath), t && (t.v7_fetcherPersist, t.v7_normalizeFormMethod, t.v7_partialHydration, t.v7_skipActionErrorRevalidation)
      }
      const Z = (a || (a = r.t(n, 2))).startTransition;

      function $(e) {
        let {
          fallbackElement: t,
          router: r,
          future: a
        } = e, [o, i] = n.useState(r.state), {
          v7_startTransition: s
        } = a || {}, c = n.useCallback(e => {
          s && Z ? Z(() => i(e)) : i(e)
        }, [i, s]);
        n.useLayoutEffect(() => r.subscribe(c), [r, c]), n.useEffect(() => {}, []);
        let d = n.useMemo(() => ({
            createHref: r.createHref,
            encodeLocation: r.encodeLocation,
            go: e => r.navigate(e),
            push: (e, t, a) => r.navigate(e, {
              state: t,
              preventScrollReset: null == a ? void 0 : a.preventScrollReset
            }),
            replace: (e, t, a) => r.navigate(e, {
              replace: !0,
              state: t,
              preventScrollReset: null == a ? void 0 : a.preventScrollReset
            })
          }), [r]),
          p = r.basename || "/",
          f = n.useMemo(() => ({
            router: r,
            navigator: d,
            static: !1,
            basename: p
          }), [r, d, p]);
        return n.useEffect(() => Q(a, r.future), [r, a]), n.createElement(n.Fragment, null, n.createElement(l.Provider, {
          value: f
        }, n.createElement(u.Provider, {
          value: o
        }, n.createElement(oe, {
          basename: p,
          location: o.location,
          navigationType: o.historyAction,
          navigator: d,
          future: {
            v7_relativeSplatPath: r.future.v7_relativeSplatPath
          }
        }, o.initialized || r.future.v7_partialHydration ? n.createElement(ee, {
          routes: r.routes,
          future: r.future,
          state: o
        }) : t))), null)
      }

      function ee(e) {
        let {
          routes: t,
          future: r,
          state: a
        } = e;
        return O(t, void 0, a, r)
      }

      function te(e) {
        let {
          basename: t,
          children: r,
          initialEntries: a,
          initialIndex: i,
          future: l
        } = e, u = n.useRef();
        null == u.current && (u.current = (0, o.sC)({
          initialEntries: a,
          initialIndex: i,
          v5Compat: !0
        }));
        let s = u.current,
          [c, d] = n.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: p
          } = l || {},
          f = n.useCallback(e => {
            p && Z ? Z(() => d(e)) : d(e)
          }, [d, p]);
        return n.useLayoutEffect(() => s.listen(f), [s, f]), n.useEffect(() => Q(l), [l]), n.createElement(oe, {
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
          state: a,
          relative: i
        } = e;
        v() || (0, o.Oi)(!1);
        let {
          future: l,
          static: u
        } = n.useContext(c), {
          matches: s
        } = n.useContext(p), {
          pathname: d
        } = m(), f = b(), h = (0, o.Gh)(t, (0, o.yD)(s, l.v7_relativeSplatPath), d, "path" === i), g = JSON.stringify(h);
        return n.useEffect(() => f(JSON.parse(g), {
          replace: r,
          state: a,
          relative: i
        }), [f, g, i, r, a]), null
      }

      function ae(e) {
        return x(e.context)
      }

      function ne(e) {
        (0, o.Oi)(!1)
      }

      function oe(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: a,
          navigationType: l = o.rc.Pop,
          navigator: u,
          static: s = !1,
          future: p
        } = e;
        v() && (0, o.Oi)(!1);
        let f = t.replace(/^\/*/, "/"),
          h = n.useMemo(() => ({
            basename: f,
            navigator: u,
            static: s,
            future: i({
              v7_relativeSplatPath: !1
            }, p)
          }), [f, p, u, s]);
        "string" == typeof a && (a = (0, o.Rr)(a));
        let {
          pathname: m = "/",
          search: g = "",
          hash: y = "",
          state: E = null,
          key: b = "default"
        } = a, C = n.useMemo(() => {
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
        return null == C ? null : n.createElement(c.Provider, {
          value: h
        }, n.createElement(d.Provider, {
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
          resolve: a
        } = e;
        return n.createElement(ce, {
          resolve: a,
          errorElement: r
        }, n.createElement(de, null, t))
      }
      var ue = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(ue || {});
      const se = new Promise(() => {});
      class ce extends n.Component {
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
          } = this.props, a = null, i = ue.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              i = ue.error;
              let e = this.state.error;
              a = Promise.reject().catch(() => {}), Object.defineProperty(a, "_tracked", {
                get: () => !0
              }), Object.defineProperty(a, "_error", {
                get: () => e
              })
            } else r._tracked ? (a = r, i = "_error" in a ? ue.error : "_data" in a ? ue.success : ue.pending) : (i = ue.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), a = r.then(e => Object.defineProperty(r, "_data", {
              get: () => e
            }), e => Object.defineProperty(r, "_error", {
              get: () => e
            })));
          else i = ue.success, a = Promise.resolve(), Object.defineProperty(a, "_tracked", {
            get: () => !0
          }), Object.defineProperty(a, "_data", {
            get: () => r
          });
          if (i === ue.error && a._error instanceof o.tH) throw se;
          if (i === ue.error && !t) throw a._error;
          if (i === ue.error) return n.createElement(s.Provider, {
            value: a,
            children: t
          });
          if (i === ue.success) return n.createElement(s.Provider, {
            value: a,
            children: e
          });
          throw a
        }
      }

      function de(e) {
        let {
          children: t
        } = e, r = W(), a = "function" == typeof t ? t(r) : t;
        return n.createElement(n.Fragment, null, a)
      }

      function pe(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return n.Children.forEach(e, (e, a) => {
          if (!n.isValidElement(e)) return;
          let i = [...t, a];
          if (e.type === n.Fragment) return void r.push.apply(r, pe(e.props.children, i));
          e.type !== ne && (0, o.Oi)(!1), e.props.index && e.props.children && (0, o.Oi)(!1);
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
          element: n.createElement(e.Component),
          Component: void 0
        }), e.HydrateFallback && Object.assign(t, {
          hydrateFallbackElement: n.createElement(e.HydrateFallback),
          HydrateFallback: void 0
        }), e.ErrorBoundary && Object.assign(t, {
          errorElement: n.createElement(e.ErrorBoundary),
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