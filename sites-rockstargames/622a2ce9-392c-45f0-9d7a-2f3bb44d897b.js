! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "622a2ce9-392c-45f0-9d7a-2f3bb44d897b", e._sentryDebugIdIdentifier = "sentry-dbid-622a2ce9-392c-45f0-9d7a-2f3bb44d897b")
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
  [6612], {
    96612: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => a.tH,
        Await: () => ae,
        MemoryRouter: () => Z,
        Navigate: () => $,
        NavigationType: () => a.rc,
        Outlet: () => ee,
        Route: () => te,
        Router: () => re,
        RouterProvider: () => K,
        Routes: () => ne,
        UNSAFE_DataRouterContext: () => i,
        UNSAFE_DataRouterStateContext: () => l,
        UNSAFE_LocationContext: () => c,
        UNSAFE_NavigationContext: () => s,
        UNSAFE_RouteContext: () => d,
        UNSAFE_mapRouteProperties: () => de,
        UNSAFE_useRouteId: () => I,
        UNSAFE_useRoutesImpl: () => S,
        createMemoryRouter: () => pe,
        createPath: () => a.AO,
        createRoutesFromChildren: () => se,
        createRoutesFromElements: () => se,
        defer: () => a.v6,
        generatePath: () => a.tW,
        isRouteErrorResponse: () => a.pX,
        json: () => a.Pq,
        matchPath: () => a.B6,
        matchRoutes: () => a.ue,
        parsePath: () => a.Rr,
        redirect: () => a.V2,
        redirectDocument: () => a.Sk,
        renderMatches: () => ce,
        resolvePath: () => a.o1,
        unstable_useBlocker: () => Y,
        useActionData: () => z,
        useAsyncError: () => W,
        useAsyncValue: () => V,
        useHref: () => m,
        useInRouterContext: () => f,
        useLoaderData: () => H,
        useLocation: () => h,
        useMatch: () => g,
        useMatches: () => T,
        useNavigate: () => y,
        useNavigation: () => j,
        useNavigationType: () => v,
        useOutlet: () => R,
        useOutletContext: () => C,
        useParams: () => x,
        useResolvedPath: () => _,
        useRevalidator: () => F,
        useRouteError: () => G,
        useRouteLoaderData: () => J,
        useRoutes: () => O
      });
      var n = r(62229),
        a = r(4255);

      function o() {
        return o = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, o.apply(this, arguments)
      }
      const i = n.createContext(null),
        l = n.createContext(null),
        u = n.createContext(null),
        s = n.createContext(null),
        c = n.createContext(null),
        d = n.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        p = n.createContext(null);

      function m(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        f() || (0, a.Oi)(!1);
        let {
          basename: o,
          navigator: i
        } = n.useContext(s), {
          hash: l,
          pathname: u,
          search: c
        } = _(e, {
          relative: r
        }), d = u;
        return "/" !== o && (d = "/" === u ? o : (0, a.HS)([o, u])), i.createHref({
          pathname: d,
          search: c,
          hash: l
        })
      }

      function f() {
        return null != n.useContext(c)
      }

      function h() {
        return f() || (0, a.Oi)(!1), n.useContext(c).location
      }

      function v() {
        return n.useContext(c).navigationType
      }

      function g(e) {
        f() || (0, a.Oi)(!1);
        let {
          pathname: t
        } = h();
        return n.useMemo((() => (0, a.B6)(e, t)), [t, e])
      }

      function E(e) {
        n.useContext(s).static || n.useLayoutEffect(e)
      }

      function y() {
        let {
          isDataRoute: e
        } = n.useContext(d);
        return e ? function() {
          let {
            router: e
          } = w(N.UseNavigateStable), t = M(L.UseNavigateStable), r = n.useRef(!1);
          return E((() => {
            r.current = !0
          })), n.useCallback((function(n, a) {
            void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, o({
              fromRouteId: t
            }, a)))
          }), [e, t])
        }() : function() {
          f() || (0, a.Oi)(!1);
          let e = n.useContext(i),
            {
              basename: t,
              navigator: r
            } = n.useContext(s),
            {
              matches: o
            } = n.useContext(d),
            {
              pathname: l
            } = h(),
            u = JSON.stringify((0, a.sd)(o).map((e => e.pathnameBase))),
            c = n.useRef(!1);
          return E((() => {
            c.current = !0
          })), n.useCallback((function(n, o) {
            if (void 0 === o && (o = {}), !c.current) return;
            if ("number" == typeof n) return void r.go(n);
            let i = (0, a.Gh)(n, JSON.parse(u), l, "path" === o.relative);
            null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, a.HS)([t, i.pathname])), (o.replace ? r.replace : r.push)(i, o.state, o)
          }), [t, r, u, l, e])
        }()
      }
      const b = n.createContext(null);

      function C() {
        return n.useContext(b)
      }

      function R(e) {
        let t = n.useContext(d).outlet;
        return t ? n.createElement(b.Provider, {
          value: e
        }, t) : t
      }

      function x() {
        let {
          matches: e
        } = n.useContext(d), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function _(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: o
        } = n.useContext(d), {
          pathname: i
        } = h(), l = JSON.stringify((0, a.sd)(o).map((e => e.pathnameBase)));
        return n.useMemo((() => (0, a.Gh)(e, JSON.parse(l), i, "path" === r)), [e, l, i, r])
      }

      function O(e, t) {
        return S(e, t)
      }

      function S(e, t, r) {
        f() || (0, a.Oi)(!1);
        let {
          navigator: i
        } = n.useContext(s), {
          matches: l
        } = n.useContext(d), u = l[l.length - 1], p = u ? u.params : {}, m = (u && u.pathname, u ? u.pathnameBase : "/");
        u && u.route;
        let v, g = h();
        if (t) {
          var E;
          let e = "string" == typeof t ? (0, a.Rr)(t) : t;
          "/" === m || (null == (E = e.pathname) ? void 0 : E.startsWith(m)) || (0, a.Oi)(!1), v = e
        } else v = g;
        let y = v.pathname || "/",
          b = "/" === m ? y : y.slice(m.length) || "/",
          C = (0, a.ue)(e, {
            pathname: b
          }),
          R = B(C && C.map((e => Object.assign({}, e, {
            params: Object.assign({}, p, e.params),
            pathname: (0, a.HS)([m, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? m : (0, a.HS)([m, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), l, r);
        return t && R ? n.createElement(c.Provider, {
          value: {
            location: o({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, v),
            navigationType: a.rc.Pop
          }
        }, R) : R
      }

      function k() {
        let e = G(),
          t = (0, a.pX)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
          };
        return n.createElement(n.Fragment, null, n.createElement("h2", null, "Unexpected Application Error!"), n.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, t), r ? n.createElement("pre", {
          style: o
        }, r) : null, null)
      }
      const D = n.createElement(k, null);
      class P extends n.Component {
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
          }, n.createElement(p.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function U(e) {
        let {
          routeContext: t,
          match: r,
          children: a
        } = e, o = n.useContext(i);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(d.Provider, {
          value: t
        }, a)
      }

      function B(e, t, r) {
        var o;
        if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
          var i;
          if (null == (i = r) || !i.errors) return null;
          e = r.matches
        }
        let l = e,
          u = null == (o = r) ? void 0 : o.errors;
        if (null != u) {
          let e = l.findIndex((e => e.route.id && (null == u ? void 0 : u[e.route.id])));
          e >= 0 || (0, a.Oi)(!1), l = l.slice(0, Math.min(l.length, e + 1))
        }
        return l.reduceRight(((e, a, o) => {
          let i = a.route.id ? null == u ? void 0 : u[a.route.id] : null,
            s = null;
          r && (s = a.route.errorElement || D);
          let c = t.concat(l.slice(0, o + 1)),
            d = () => {
              let t;
              return t = i ? s : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(U, {
                match: a,
                routeContext: {
                  outlet: e,
                  matches: c,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o) ? n.createElement(P, {
            location: r.location,
            revalidation: r.revalidation,
            component: s,
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
      var N = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(N || {}),
        L = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(L || {});

      function w(e) {
        let t = n.useContext(i);
        return t || (0, a.Oi)(!1), t
      }

      function A(e) {
        let t = n.useContext(l);
        return t || (0, a.Oi)(!1), t
      }

      function M(e) {
        let t = function(e) {
            let t = n.useContext(d);
            return t || (0, a.Oi)(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || (0, a.Oi)(!1), r.route.id
      }

      function I() {
        return M(L.UseRouteId)
      }

      function j() {
        return A(L.UseNavigation).navigation
      }

      function F() {
        let e = w(N.UseRevalidator),
          t = A(L.UseRevalidator);
        return n.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function T() {
        let {
          matches: e,
          loaderData: t
        } = A(L.UseMatches);
        return n.useMemo((() => e.map((e => (0, a.ro)(e, t)))), [e, t])
      }

      function H() {
        let e = A(L.UseLoaderData),
          t = M(L.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function J(e) {
        return A(L.UseRouteLoaderData).loaderData[e]
      }

      function z() {
        let e = A(L.UseActionData);
        return n.useContext(d) || (0, a.Oi)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function G() {
        var e;
        let t = n.useContext(p),
          r = A(L.UseRouteError),
          a = M(L.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[a])
      }

      function V() {
        let e = n.useContext(u);
        return null == e ? void 0 : e._data
      }

      function W() {
        let e = n.useContext(u);
        return null == e ? void 0 : e._error
      }
      let X = 0;

      function Y(e) {
        let {
          router: t,
          basename: r
        } = w(N.UseBlocker), i = A(L.UseBlocker), [l, u] = n.useState(""), s = n.useCallback((t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: n,
            nextLocation: i,
            historyAction: l
          } = t;
          return e({
            currentLocation: o({}, n, {
              pathname: (0, a.pb)(n.pathname, r) || n.pathname
            }),
            nextLocation: o({}, i, {
              pathname: (0, a.pb)(i.pathname, r) || i.pathname
            }),
            historyAction: l
          })
        }), [r, e]);
        return n.useEffect((() => {
          let e = String(++X);
          return u(e), () => t.deleteBlocker(e)
        }), [t]), n.useEffect((() => {
          "" !== l && t.getBlocker(l, s)
        }), [t, l, s]), l && i.blockers.has(l) ? i.blockers.get(l) : a.G3
      }
      const q = n.startTransition;

      function K(e) {
        let {
          fallbackElement: t,
          router: r,
          future: a
        } = e, [o, u] = n.useState(r.state), {
          v7_startTransition: s
        } = a || {}, c = n.useCallback((e => {
          s && q ? q((() => u(e))) : u(e)
        }), [u, s]);
        n.useLayoutEffect((() => r.subscribe(c)), [r, c]);
        let d = n.useMemo((() => ({
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
          p = r.basename || "/",
          m = n.useMemo((() => ({
            router: r,
            navigator: d,
            static: !1,
            basename: p
          })), [r, d, p]);
        return n.createElement(n.Fragment, null, n.createElement(i.Provider, {
          value: m
        }, n.createElement(l.Provider, {
          value: o
        }, n.createElement(re, {
          basename: p,
          location: o.location,
          navigationType: o.historyAction,
          navigator: d
        }, o.initialized ? n.createElement(Q, {
          routes: r.routes,
          state: o
        }) : t))), null)
      }

      function Q(e) {
        let {
          routes: t,
          state: r
        } = e;
        return S(t, void 0, r)
      }

      function Z(e) {
        let {
          basename: t,
          children: r,
          initialEntries: o,
          initialIndex: i,
          future: l
        } = e, u = n.useRef();
        null == u.current && (u.current = (0, a.sC)({
          initialEntries: o,
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
          m = n.useCallback((e => {
            p && q ? q((() => d(e))) : d(e)
          }), [d, p]);
        return n.useLayoutEffect((() => s.listen(m)), [s, m]), n.createElement(re, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: s
        })
      }

      function $(e) {
        let {
          to: t,
          replace: r,
          state: o,
          relative: i
        } = e;
        f() || (0, a.Oi)(!1);
        let {
          matches: l
        } = n.useContext(d), {
          pathname: u
        } = h(), s = y(), c = (0, a.Gh)(t, (0, a.sd)(l).map((e => e.pathnameBase)), u, "path" === i), p = JSON.stringify(c);
        return n.useEffect((() => s(JSON.parse(p), {
          replace: r,
          state: o,
          relative: i
        })), [s, p, i, r, o]), null
      }

      function ee(e) {
        return R(e.context)
      }

      function te(e) {
        (0, a.Oi)(!1)
      }

      function re(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = a.rc.Pop,
          navigator: l,
          static: u = !1
        } = e;
        f() && (0, a.Oi)(!1);
        let d = t.replace(/^\/*/, "/"),
          p = n.useMemo((() => ({
            basename: d,
            navigator: l,
            static: u
          })), [d, l, u]);
        "string" == typeof o && (o = (0, a.Rr)(o));
        let {
          pathname: m = "/",
          search: h = "",
          hash: v = "",
          state: g = null,
          key: E = "default"
        } = o, y = n.useMemo((() => {
          let e = (0, a.pb)(m, d);
          return null == e ? null : {
            location: {
              pathname: e,
              search: h,
              hash: v,
              state: g,
              key: E
            },
            navigationType: i
          }
        }), [d, m, h, v, g, E, i]);
        return null == y ? null : n.createElement(s.Provider, {
          value: p
        }, n.createElement(c.Provider, {
          children: r,
          value: y
        }))
      }

      function ne(e) {
        let {
          children: t,
          location: r
        } = e;
        return O(se(t), r)
      }

      function ae(e) {
        let {
          children: t,
          errorElement: r,
          resolve: a
        } = e;
        return n.createElement(le, {
          resolve: a,
          errorElement: r
        }, n.createElement(ue, null, t))
      }
      var oe = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(oe || {});
      const ie = new Promise((() => {}));
      class le extends n.Component {
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
          } = this.props, o = null, i = oe.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              i = oe.error;
              let e = this.state.error;
              o = Promise.reject().catch((() => {})), Object.defineProperty(o, "_tracked", {
                get: () => !0
              }), Object.defineProperty(o, "_error", {
                get: () => e
              })
            } else r._tracked ? (o = r, i = void 0 !== o._error ? oe.error : void 0 !== o._data ? oe.success : oe.pending) : (i = oe.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), o = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else i = oe.success, o = Promise.resolve(), Object.defineProperty(o, "_tracked", {
            get: () => !0
          }), Object.defineProperty(o, "_data", {
            get: () => r
          });
          if (i === oe.error && o._error instanceof a.tH) throw ie;
          if (i === oe.error && !t) throw o._error;
          if (i === oe.error) return n.createElement(u.Provider, {
            value: o,
            children: t
          });
          if (i === oe.success) return n.createElement(u.Provider, {
            value: o,
            children: e
          });
          throw o
        }
      }

      function ue(e) {
        let {
          children: t
        } = e, r = V(), a = "function" == typeof t ? t(r) : t;
        return n.createElement(n.Fragment, null, a)
      }

      function se(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return n.Children.forEach(e, ((e, o) => {
          if (!n.isValidElement(e)) return;
          let i = [...t, o];
          if (e.type === n.Fragment) return void r.push.apply(r, se(e.props.children, i));
          e.type !== te && (0, a.Oi)(!1), e.props.index && e.props.children && (0, a.Oi)(!1);
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
          e.props.children && (l.children = se(e.props.children, i)), r.push(l)
        })), r
      }

      function ce(e) {
        return B(e)
      }

      function de(e) {
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

      function pe(e, t) {
        return (0, a.aE)({
          basename: null == t ? void 0 : t.basename,
          future: o({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, a.sC)({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          mapRouteProperties: de
        }).initialize()
      }
    }
  }
]);