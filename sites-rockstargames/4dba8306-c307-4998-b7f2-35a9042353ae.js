try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4dba8306-c307-4998-b7f2-35a9042353ae", e._sentryDebugIdIdentifier = "sentry-dbid-4dba8306-c307-4998-b7f2-35a9042353ae")
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
  [8572], {
    18572: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => n.tH,
        Await: () => le,
        MemoryRouter: () => te,
        Navigate: () => re,
        NavigationType: () => n.rc,
        Outlet: () => ae,
        Route: () => ne,
        Router: () => oe,
        RouterProvider: () => $,
        Routes: () => ie,
        UNSAFE_DataRouterContext: () => i,
        UNSAFE_DataRouterStateContext: () => l,
        UNSAFE_LocationContext: () => c,
        UNSAFE_NavigationContext: () => s,
        UNSAFE_RouteContext: () => d,
        UNSAFE_logV6DeprecationWarnings: () => Q,
        UNSAFE_mapRouteProperties: () => he,
        UNSAFE_useRouteId: () => A,
        UNSAFE_useRoutesImpl: () => k,
        createMemoryRouter: () => fe,
        createPath: () => n.AO,
        createRoutesFromChildren: () => pe,
        createRoutesFromElements: () => pe,
        defer: () => n.v6,
        generatePath: () => n.tW,
        isRouteErrorResponse: () => n.pX,
        json: () => n.Pq,
        matchPath: () => n.B6,
        matchRoutes: () => n.ue,
        parsePath: () => n.Rr,
        redirect: () => n.V2,
        redirectDocument: () => n.Sk,
        renderMatches: () => ve,
        replace: () => n.HC,
        resolvePath: () => n.o1,
        useActionData: () => J,
        useAsyncError: () => W,
        useAsyncValue: () => V,
        useBlocker: () => Y,
        useHref: () => v,
        useInRouterContext: () => h,
        useLoaderData: () => I,
        useLocation: () => f,
        useMatch: () => g,
        useMatches: () => H,
        useNavigate: () => E,
        useNavigation: () => T,
        useNavigationType: () => m,
        useOutlet: () => C,
        useOutletContext: () => R,
        useParams: () => _,
        useResolvedPath: () => x,
        useRevalidator: () => j,
        useRouteError: () => G,
        useRouteLoaderData: () => z,
        useRoutes: () => S
      });
      var a = r(62229),
        n = r(17335);

      function o() {
        return o = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
          }
          return e
        }, o.apply(this, arguments)
      }
      const i = a.createContext(null),
        l = a.createContext(null),
        u = a.createContext(null),
        s = a.createContext(null),
        c = a.createContext(null),
        d = a.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        p = a.createContext(null);

      function v(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        h() || (0, n.Oi)(!1);
        let {
          basename: o,
          navigator: i
        } = a.useContext(s), {
          hash: l,
          pathname: u,
          search: c
        } = x(e, {
          relative: r
        }), d = u;
        return "/" !== o && (d = "/" === u ? o : (0, n.HS)([o, u])), i.createHref({
          pathname: d,
          search: c,
          hash: l
        })
      }

      function h() {
        return null != a.useContext(c)
      }

      function f() {
        return h() || (0, n.Oi)(!1), a.useContext(c).location
      }

      function m() {
        return a.useContext(c).navigationType
      }

      function g(e) {
        h() || (0, n.Oi)(!1);
        let {
          pathname: t
        } = f();
        return a.useMemo((() => (0, n.B6)(e, (0, n.RO)(t))), [t, e])
      }

      function y(e) {
        a.useContext(s).static || a.useLayoutEffect(e)
      }

      function E() {
        let {
          isDataRoute: e
        } = a.useContext(d);
        return e ? function() {
          let {
            router: e
          } = M(w.UseNavigateStable), t = L(B.UseNavigateStable), r = a.useRef(!1);
          return y((() => {
            r.current = !0
          })), a.useCallback((function(a, n) {
            void 0 === n && (n = {}), r.current && ("number" == typeof a ? e.navigate(a) : e.navigate(a, o({
              fromRouteId: t
            }, n)))
          }), [e, t])
        }() : function() {
          h() || (0, n.Oi)(!1);
          let e = a.useContext(i),
            {
              basename: t,
              future: r,
              navigator: o
            } = a.useContext(s),
            {
              matches: l
            } = a.useContext(d),
            {
              pathname: u
            } = f(),
            c = JSON.stringify((0, n.yD)(l, r.v7_relativeSplatPath)),
            p = a.useRef(!1);
          return y((() => {
            p.current = !0
          })), a.useCallback((function(r, a) {
            if (void 0 === a && (a = {}), !p.current) return;
            if ("number" == typeof r) return void o.go(r);
            let i = (0, n.Gh)(r, JSON.parse(c), u, "path" === a.relative);
            null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, n.HS)([t, i.pathname])), (a.replace ? o.replace : o.push)(i, a.state, a)
          }), [t, o, c, u, e])
        }()
      }
      const b = a.createContext(null);

      function R() {
        return a.useContext(b)
      }

      function C(e) {
        let t = a.useContext(d).outlet;
        return t ? a.createElement(b.Provider, {
          value: e
        }, t) : t
      }

      function _() {
        let {
          matches: e
        } = a.useContext(d), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function x(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          future: o
        } = a.useContext(s), {
          matches: i
        } = a.useContext(d), {
          pathname: l
        } = f(), u = JSON.stringify((0, n.yD)(i, o.v7_relativeSplatPath));
        return a.useMemo((() => (0, n.Gh)(e, JSON.parse(u), l, "path" === r)), [e, u, l, r])
      }

      function S(e, t) {
        return k(e, t)
      }

      function k(e, t, r, i) {
        h() || (0, n.Oi)(!1);
        let {
          navigator: l,
          static: u
        } = a.useContext(s), {
          matches: p
        } = a.useContext(d), v = p[p.length - 1], m = v ? v.params : {}, g = (v && v.pathname, v ? v.pathnameBase : "/");
        v && v.route;
        let y, E = f();
        if (t) {
          var b;
          let e = "string" == typeof t ? (0, n.Rr)(t) : t;
          "/" === g || (null == (b = e.pathname) ? void 0 : b.startsWith(g)) || (0, n.Oi)(!1), y = e
        } else y = E;
        let R = y.pathname || "/",
          C = R;
        if ("/" !== g) {
          let e = g.replace(/^\//, "").split("/");
          C = "/" + R.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let _ = !u && r && r.matches && r.matches.length > 0 ? r.matches : (0, n.ue)(e, {
            pathname: C
          }),
          x = N(_ && _.map((e => Object.assign({}, e, {
            params: Object.assign({}, m, e.params),
            pathname: (0, n.HS)([g, l.encodeLocation ? l.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? g : (0, n.HS)([g, l.encodeLocation ? l.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), p, r, i);
        return t && x ? a.createElement(c.Provider, {
          value: {
            location: o({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, y),
            navigationType: n.rc.Pop
          }
        }, x) : x
      }

      function P() {
        let e = G(),
          t = (0, n.pX)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
          };
        return a.createElement(a.Fragment, null, a.createElement("h2", null, "Unexpected Application Error!"), a.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, t), r ? a.createElement("pre", {
          style: o
        }, r) : null, null)
      }
      const O = a.createElement(P, null);
      class D extends a.Component {
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
          return void 0 !== this.state.error ? a.createElement(d.Provider, {
            value: this.props.routeContext
          }, a.createElement(p.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function U(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, o = a.useContext(i);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), a.createElement(d.Provider, {
          value: t
        }, n)
      }

      function N(e, t, r, o) {
        var i;
        if (void 0 === t && (t = []), void 0 === r && (r = null), void 0 === o && (o = null), null == e) {
          var l;
          if (!r) return null;
          if (r.errors) e = r.matches;
          else {
            if (!(null != (l = o) && l.v7_partialHydration && 0 === t.length && !r.initialized && r.matches.length > 0)) return null;
            e = r.matches
          }
        }
        let u = e,
          s = null == (i = r) ? void 0 : i.errors;
        if (null != s) {
          let e = u.findIndex((e => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id])));
          e >= 0 || (0, n.Oi)(!1), u = u.slice(0, Math.min(u.length, e + 1))
        }
        let c = !1,
          d = -1;
        if (r && o && o.v7_partialHydration)
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
        return u.reduceRight(((e, n, o) => {
          let i, l = !1,
            p = null,
            v = null;
          var h;
          r && (i = s && n.route.id ? s[n.route.id] : void 0, p = n.route.errorElement || O, c && (d < 0 && 0 === o ? (q[h = "route-fallback"] || (q[h] = !0), l = !0, v = null) : d === o && (l = !0, v = n.route.hydrateFallbackElement || null)));
          let f = t.concat(u.slice(0, o + 1)),
            m = () => {
              let t;
              return t = i ? p : l ? v : n.route.Component ? a.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, a.createElement(U, {
                match: n,
                routeContext: {
                  outlet: e,
                  matches: f,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === o) ? a.createElement(D, {
            location: r.location,
            revalidation: r.revalidation,
            component: p,
            error: i,
            children: m(),
            routeContext: {
              outlet: null,
              matches: f,
              isDataRoute: !0
            }
          }) : m()
        }), null)
      }
      var w = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(w || {}),
        B = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(B || {});

      function M(e) {
        let t = a.useContext(i);
        return t || (0, n.Oi)(!1), t
      }

      function F(e) {
        let t = a.useContext(l);
        return t || (0, n.Oi)(!1), t
      }

      function L(e) {
        let t = function() {
            let e = a.useContext(d);
            return e || (0, n.Oi)(!1), e
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || (0, n.Oi)(!1), r.route.id
      }

      function A() {
        return L(B.UseRouteId)
      }

      function T() {
        return F(B.UseNavigation).navigation
      }

      function j() {
        let e = M(w.UseRevalidator),
          t = F(B.UseRevalidator);
        return a.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function H() {
        let {
          matches: e,
          loaderData: t
        } = F(B.UseMatches);
        return a.useMemo((() => e.map((e => (0, n.ro)(e, t)))), [e, t])
      }

      function I() {
        let e = F(B.UseLoaderData),
          t = L(B.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function z(e) {
        return F(B.UseRouteLoaderData).loaderData[e]
      }

      function J() {
        let e = F(B.UseActionData),
          t = L(B.UseLoaderData);
        return e.actionData ? e.actionData[t] : void 0
      }

      function G() {
        var e;
        let t = a.useContext(p),
          r = F(B.UseRouteError),
          n = L(B.UseRouteError);
        return void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[n]
      }

      function V() {
        let e = a.useContext(u);
        return null == e ? void 0 : e._data
      }

      function W() {
        let e = a.useContext(u);
        return null == e ? void 0 : e._error
      }
      let X = 0;

      function Y(e) {
        let {
          router: t,
          basename: r
        } = M(w.UseBlocker), i = F(B.UseBlocker), [l, u] = a.useState(""), s = a.useCallback((t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: a,
            nextLocation: i,
            historyAction: l
          } = t;
          return e({
            currentLocation: o({}, a, {
              pathname: (0, n.pb)(a.pathname, r) || a.pathname
            }),
            nextLocation: o({}, i, {
              pathname: (0, n.pb)(i.pathname, r) || i.pathname
            }),
            historyAction: l
          })
        }), [r, e]);
        return a.useEffect((() => {
          let e = String(++X);
          return u(e), () => t.deleteBlocker(e)
        }), [t]), a.useEffect((() => {
          "" !== l && t.getBlocker(l, s)
        }), [t, l, s]), l && i.blockers.has(l) ? i.blockers.get(l) : n.G3
      }
      const q = {},
        K = (e, t, r) => {};

      function Q(e, t) {
        void 0 === (null == e ? void 0 : e.v7_startTransition) && K("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), void 0 !== (null == e ? void 0 : e.v7_relativeSplatPath) || t && t.v7_relativeSplatPath || K("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"), t && (void 0 === t.v7_fetcherPersist && K("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"), void 0 === t.v7_normalizeFormMethod && K("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"), void 0 === t.v7_partialHydration && K("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"), void 0 === t.v7_skipActionErrorRevalidation && K("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))
      }
      const Z = a.startTransition;

      function $(e) {
        let {
          fallbackElement: t,
          router: r,
          future: n
        } = e, [o, u] = a.useState(r.state), {
          v7_startTransition: s
        } = n || {}, c = a.useCallback((e => {
          s && Z ? Z((() => u(e))) : u(e)
        }), [u, s]);
        a.useLayoutEffect((() => r.subscribe(c)), [r, c]), a.useEffect((() => {}), []);
        let d = a.useMemo((() => ({
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
          })), [r]),
          p = r.basename || "/",
          v = a.useMemo((() => ({
            router: r,
            navigator: d,
            static: !1,
            basename: p
          })), [r, d, p]);
        return a.useEffect((() => Q(n, r.future)), [r, n]), a.createElement(a.Fragment, null, a.createElement(i.Provider, {
          value: v
        }, a.createElement(l.Provider, {
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
          state: a
        } = e;
        return k(t, void 0, a, r)
      }

      function te(e) {
        let {
          basename: t,
          children: r,
          initialEntries: o,
          initialIndex: i,
          future: l
        } = e, u = a.useRef();
        null == u.current && (u.current = (0, n.sC)({
          initialEntries: o,
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
          v = a.useCallback((e => {
            p && Z ? Z((() => d(e))) : d(e)
          }), [d, p]);
        return a.useLayoutEffect((() => s.listen(v)), [s, v]), a.useEffect((() => Q(l)), [l]), a.createElement(oe, {
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
          state: o,
          relative: i
        } = e;
        h() || (0, n.Oi)(!1);
        let {
          future: l,
          static: u
        } = a.useContext(s), {
          matches: c
        } = a.useContext(d), {
          pathname: p
        } = f(), v = E(), m = (0, n.Gh)(t, (0, n.yD)(c, l.v7_relativeSplatPath), p, "path" === i), g = JSON.stringify(m);
        return a.useEffect((() => v(JSON.parse(g), {
          replace: r,
          state: o,
          relative: i
        })), [v, g, i, r, o]), null
      }

      function ae(e) {
        return C(e.context)
      }

      function ne(e) {
        (0, n.Oi)(!1)
      }

      function oe(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: i,
          navigationType: l = n.rc.Pop,
          navigator: u,
          static: d = !1,
          future: p
        } = e;
        h() && (0, n.Oi)(!1);
        let v = t.replace(/^\/*/, "/"),
          f = a.useMemo((() => ({
            basename: v,
            navigator: u,
            static: d,
            future: o({
              v7_relativeSplatPath: !1
            }, p)
          })), [v, p, u, d]);
        "string" == typeof i && (i = (0, n.Rr)(i));
        let {
          pathname: m = "/",
          search: g = "",
          hash: y = "",
          state: E = null,
          key: b = "default"
        } = i, R = a.useMemo((() => {
          let e = (0, n.pb)(m, v);
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
        }), [v, m, g, y, E, b, l]);
        return null == R ? null : a.createElement(s.Provider, {
          value: f
        }, a.createElement(c.Provider, {
          children: r,
          value: R
        }))
      }

      function ie(e) {
        let {
          children: t,
          location: r
        } = e;
        return S(pe(t), r)
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
      const se = new Promise((() => {}));
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
          } = this.props, o = null, i = ue.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              i = ue.error;
              let e = this.state.error;
              o = Promise.reject().catch((() => {})), Object.defineProperty(o, "_tracked", {
                get: () => !0
              }), Object.defineProperty(o, "_error", {
                get: () => e
              })
            } else r._tracked ? (o = r, i = "_error" in o ? ue.error : "_data" in o ? ue.success : ue.pending) : (i = ue.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), o = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else i = ue.success, o = Promise.resolve(), Object.defineProperty(o, "_tracked", {
            get: () => !0
          }), Object.defineProperty(o, "_data", {
            get: () => r
          });
          if (i === ue.error && o._error instanceof n.tH) throw se;
          if (i === ue.error && !t) throw o._error;
          if (i === ue.error) return a.createElement(u.Provider, {
            value: o,
            children: t
          });
          if (i === ue.success) return a.createElement(u.Provider, {
            value: o,
            children: e
          });
          throw o
        }
      }

      function de(e) {
        let {
          children: t
        } = e, r = V(), n = "function" == typeof t ? t(r) : t;
        return a.createElement(a.Fragment, null, n)
      }

      function pe(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return a.Children.forEach(e, ((e, o) => {
          if (!a.isValidElement(e)) return;
          let i = [...t, o];
          if (e.type === a.Fragment) return void r.push.apply(r, pe(e.props.children, i));
          e.type !== ne && (0, n.Oi)(!1), e.props.index && e.props.children && (0, n.Oi)(!1);
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
        })), r
      }

      function ve(e) {
        return N(e)
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

      function fe(e, t) {
        return (0, n.aE)({
          basename: null == t ? void 0 : t.basename,
          future: o({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, n.sC)({
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