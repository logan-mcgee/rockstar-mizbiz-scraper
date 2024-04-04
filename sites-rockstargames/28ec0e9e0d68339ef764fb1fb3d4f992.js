/*! For license information please see 28ec0e9e0d68339ef764fb1fb3d4f992.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e407b286-e5b5-4e95-91c8-847978f76b04", e._sentryDebugIdIdentifier = "sentry-dbid-e407b286-e5b5-4e95-91c8-847978f76b04")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [88], {
    79088: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => a.ay,
        Await: () => ae,
        MemoryRouter: () => Z,
        Navigate: () => $,
        NavigationType: () => a.So,
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
        createPath: () => a.Ep,
        createRoutesFromChildren: () => se,
        createRoutesFromElements: () => se,
        defer: () => a.Qv,
        generatePath: () => a.Yz,
        isRouteErrorResponse: () => a.e8,
        json: () => a.qS,
        matchPath: () => a.ot,
        matchRoutes: () => a.Cm,
        parsePath: () => a.O8,
        redirect: () => a.ch,
        redirectDocument: () => a.kt,
        renderMatches: () => ce,
        resolvePath: () => a.MP,
        unstable_useBlocker: () => Q,
        useActionData: () => z,
        useAsyncError: () => Y,
        useAsyncValue: () => W,
        useHref: () => m,
        useInRouterContext: () => h,
        useLoaderData: () => T,
        useLocation: () => f,
        useMatch: () => g,
        useMatches: () => F,
        useNavigate: () => y,
        useNavigation: () => j,
        useNavigationType: () => v,
        useOutlet: () => x,
        useOutletContext: () => C,
        useParams: () => R,
        useResolvedPath: () => _,
        useRevalidator: () => q,
        useRouteError: () => H,
        useRouteLoaderData: () => J,
        useRoutes: () => k
      });
      var n = r(51664),
        a = r(23168);

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
        h() || (0, a.q4)(!1);
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
        return "/" !== o && (d = "/" === u ? o : (0, a.En)([o, u])), i.createHref({
          pathname: d,
          search: c,
          hash: l
        })
      }

      function h() {
        return null != n.useContext(c)
      }

      function f() {
        return h() || (0, a.q4)(!1), n.useContext(c).location
      }

      function v() {
        return n.useContext(c).navigationType
      }

      function g(e) {
        h() || (0, a.q4)(!1);
        let {
          pathname: t
        } = f();
        return n.useMemo((() => (0, a.ot)(e, t)), [t, e])
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
          } = w(O.UseNavigateStable), t = A(L.UseNavigateStable), r = n.useRef(!1);
          return E((() => {
            r.current = !0
          })), n.useCallback((function(n, a) {
            void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, o({
              fromRouteId: t
            }, a)))
          }), [e, t])
        }() : function() {
          h() || (0, a.q4)(!1);
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
            } = f(),
            u = JSON.stringify((0, a.em)(o).map((e => e.pathnameBase))),
            c = n.useRef(!1);
          return E((() => {
            c.current = !0
          })), n.useCallback((function(n, o) {
            if (void 0 === o && (o = {}), !c.current) return;
            if ("number" == typeof n) return void r.go(n);
            let i = (0, a._)(n, JSON.parse(u), l, "path" === o.relative);
            null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, a.En)([t, i.pathname])), (o.replace ? r.replace : r.push)(i, o.state, o)
          }), [t, r, u, l, e])
        }()
      }
      const b = n.createContext(null);

      function C() {
        return n.useContext(b)
      }

      function x(e) {
        let t = n.useContext(d).outlet;
        return t ? n.createElement(b.Provider, {
          value: e
        }, t) : t
      }

      function R() {
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
        } = f(), l = JSON.stringify((0, a.em)(o).map((e => e.pathnameBase)));
        return n.useMemo((() => (0, a._)(e, JSON.parse(l), i, "path" === r)), [e, l, i, r])
      }

      function k(e, t) {
        return S(e, t)
      }

      function S(e, t, r) {
        h() || (0, a.q4)(!1);
        let {
          navigator: i
        } = n.useContext(s), {
          matches: l
        } = n.useContext(d), u = l[l.length - 1], p = u ? u.params : {}, m = (u && u.pathname, u ? u.pathnameBase : "/");
        u && u.route;
        let v, g = f();
        if (t) {
          var E;
          let e = "string" == typeof t ? (0, a.O8)(t) : t;
          "/" === m || (null == (E = e.pathname) ? void 0 : E.startsWith(m)) || (0, a.q4)(!1), v = e
        } else v = g;
        let y = v.pathname || "/",
          b = "/" === m ? y : y.slice(m.length) || "/",
          C = (0, a.Cm)(e, {
            pathname: b
          }),
          x = B(C && C.map((e => Object.assign({}, e, {
            params: Object.assign({}, p, e.params),
            pathname: (0, a.En)([m, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? m : (0, a.En)([m, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), l, r);
        return t && x ? n.createElement(c.Provider, {
          value: {
            location: o({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, v),
            navigationType: a.So.Pop
          }
        }, x) : x
      }

      function D() {
        let e = H(),
          t = (0, a.e8)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
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
      const P = n.createElement(D, null);
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

      function N(e) {
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
          e >= 0 || (0, a.q4)(!1), l = l.slice(0, Math.min(l.length, e + 1))
        }
        return l.reduceRight(((e, a, o) => {
          let i = a.route.id ? null == u ? void 0 : u[a.route.id] : null,
            s = null;
          r && (s = a.route.errorElement || P);
          let c = t.concat(l.slice(0, o + 1)),
            d = () => {
              let t;
              return t = i ? s : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(N, {
                match: a,
                routeContext: {
                  outlet: e,
                  matches: c,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o) ? n.createElement(U, {
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
      var O = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(O || {}),
        L = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(L || {});

      function w(e) {
        let t = n.useContext(i);
        return t || (0, a.q4)(!1), t
      }

      function M(e) {
        let t = n.useContext(l);
        return t || (0, a.q4)(!1), t
      }

      function A(e) {
        let t = function(e) {
            let t = n.useContext(d);
            return t || (0, a.q4)(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || (0, a.q4)(!1), r.route.id
      }

      function I() {
        return A(L.UseRouteId)
      }

      function j() {
        return M(L.UseNavigation).navigation
      }

      function q() {
        let e = w(O.UseRevalidator),
          t = M(L.UseRevalidator);
        return n.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function F() {
        let {
          matches: e,
          loaderData: t
        } = M(L.UseMatches);
        return n.useMemo((() => e.map((e => (0, a.WM)(e, t)))), [e, t])
      }

      function T() {
        let e = M(L.UseLoaderData),
          t = A(L.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function J(e) {
        return M(L.UseRouteLoaderData).loaderData[e]
      }

      function z() {
        let e = M(L.UseActionData);
        return n.useContext(d) || (0, a.q4)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function H() {
        var e;
        let t = n.useContext(p),
          r = M(L.UseRouteError),
          a = A(L.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[a])
      }

      function W() {
        let e = n.useContext(u);
        return null == e ? void 0 : e._data
      }

      function Y() {
        let e = n.useContext(u);
        return null == e ? void 0 : e._error
      }
      let V = 0;

      function Q(e) {
        let {
          router: t,
          basename: r
        } = w(O.UseBlocker), i = M(L.UseBlocker), [l, u] = n.useState(""), s = n.useCallback((t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: n,
            nextLocation: i,
            historyAction: l
          } = t;
          return e({
            currentLocation: o({}, n, {
              pathname: (0, a.mc)(n.pathname, r) || n.pathname
            }),
            nextLocation: o({}, i, {
              pathname: (0, a.mc)(i.pathname, r) || i.pathname
            }),
            historyAction: l
          })
        }), [r, e]);
        return n.useEffect((() => {
          let e = String(++V);
          return u(e), () => t.deleteBlocker(e)
        }), [t]), n.useEffect((() => {
          "" !== l && t.getBlocker(l, s)
        }), [t, l, s]), l && i.blockers.has(l) ? i.blockers.get(l) : a.ie
      }
      const G = n.startTransition;

      function K(e) {
        let {
          fallbackElement: t,
          router: r,
          future: a
        } = e, [o, u] = n.useState(r.state), {
          v7_startTransition: s
        } = a || {}, c = n.useCallback((e => {
          s && G ? G((() => u(e))) : u(e)
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
        }, o.initialized ? n.createElement(X, {
          routes: r.routes,
          state: o
        }) : t))), null)
      }

      function X(e) {
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
        null == u.current && (u.current = (0, a.Wi)({
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
            p && G ? G((() => d(e))) : d(e)
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
        h() || (0, a.q4)(!1);
        let {
          matches: l
        } = n.useContext(d), {
          pathname: u
        } = f(), s = y(), c = (0, a._)(t, (0, a.em)(l).map((e => e.pathnameBase)), u, "path" === i), p = JSON.stringify(c);
        return n.useEffect((() => s(JSON.parse(p), {
          replace: r,
          state: o,
          relative: i
        })), [s, p, i, r, o]), null
      }

      function ee(e) {
        return x(e.context)
      }

      function te(e) {
        (0, a.q4)(!1)
      }

      function re(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = a.So.Pop,
          navigator: l,
          static: u = !1
        } = e;
        h() && (0, a.q4)(!1);
        let d = t.replace(/^\/*/, "/"),
          p = n.useMemo((() => ({
            basename: d,
            navigator: l,
            static: u
          })), [d, l, u]);
        "string" == typeof o && (o = (0, a.O8)(o));
        let {
          pathname: m = "/",
          search: f = "",
          hash: v = "",
          state: g = null,
          key: E = "default"
        } = o, y = n.useMemo((() => {
          let e = (0, a.mc)(m, d);
          return null == e ? null : {
            location: {
              pathname: e,
              search: f,
              hash: v,
              state: g,
              key: E
            },
            navigationType: i
          }
        }), [d, m, f, v, g, E, i]);
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
        return k(se(t), r)
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
          if (i === oe.error && o._error instanceof a.ay) throw ie;
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
        } = e, r = W(), a = "function" == typeof t ? t(r) : t;
        return n.createElement(n.Fragment, null, a)
      }

      function se(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return n.Children.forEach(e, ((e, o) => {
          if (!n.isValidElement(e)) return;
          let i = [...t, o];
          if (e.type === n.Fragment) return void r.push.apply(r, se(e.props.children, i));
          e.type !== te && (0, a.q4)(!1), e.props.index && e.props.children && (0, a.q4)(!1);
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
        return (0, a.gv)({
          basename: null == t ? void 0 : t.basename,
          future: o({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, a.Wi)({
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
//# sourceMappingURL=28ec0e9e0d68339ef764fb1fb3d4f992.js.map