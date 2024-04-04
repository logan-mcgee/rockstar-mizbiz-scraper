/*! For license information please see 721d309faf42c6f465fb14766f879cda.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d44efe1a-5adf-4204-8ff6-5ce60f66c67a", e._sentryDebugIdIdentifier = "sentry-dbid-d44efe1a-5adf-4204-8ff6-5ce60f66c67a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [818], {
    64818: (e, t, n) => {
      n.r(t), n.d(t, {
        AbortedDeferredError: () => o.ay,
        Await: () => ne,
        BrowserRouter: () => Ne,
        Form: () => je,
        HashRouter: () => Ae,
        Link: () => Me,
        MemoryRouter: () => Z,
        NavLink: () => qe,
        Navigate: () => G,
        NavigationType: () => o.So,
        Outlet: () => X,
        Route: () => $,
        Router: () => ee,
        RouterProvider: () => De,
        Routes: () => te,
        ScrollRestoration: () => Ke,
        UNSAFE_DataRouterContext: () => i,
        UNSAFE_DataRouterStateContext: () => l,
        UNSAFE_LocationContext: () => c,
        UNSAFE_NavigationContext: () => u,
        UNSAFE_RouteContext: () => d,
        UNSAFE_ViewTransitionContext: () => Te,
        UNSAFE_useRouteId: () => F,
        UNSAFE_useScrollRestoration: () => ot,
        createBrowserRouter: () => Se,
        createHashRouter: () => xe,
        createMemoryRouter: () => ce,
        createPath: () => o.Ep,
        createRoutesFromChildren: () => le,
        createRoutesFromElements: () => le,
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
        renderMatches: () => se,
        resolvePath: () => o.MP,
        unstable_HistoryRouter: () => Oe,
        unstable_useBlocker: () => W,
        unstable_usePrompt: () => it,
        unstable_useViewTransitionState: () => lt,
        useActionData: () => V,
        useAsyncError: () => J,
        useAsyncValue: () => H,
        useBeforeUnload: () => at,
        useFetcher: () => et,
        useFetchers: () => tt,
        useFormAction: () => Xe,
        useHref: () => m,
        useInRouterContext: () => p,
        useLinkClickHandler: () => Ye,
        useLoaderData: () => I,
        useLocation: () => h,
        useMatch: () => g,
        useMatches: () => j,
        useNavigate: () => b,
        useNavigation: () => M,
        useNavigationType: () => v,
        useOutlet: () => R,
        useOutletContext: () => E,
        useParams: () => C,
        useResolvedPath: () => S,
        useRevalidator: () => q,
        useRouteError: () => z,
        useRouteLoaderData: () => K,
        useRoutes: () => x,
        useSearchParams: () => We,
        useSubmit: () => Ze
      });
      var r = n(51664),
        o = n(23168);

      function a() {
        return a = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, a.apply(this, arguments)
      }
      const i = r.createContext(null),
        l = r.createContext(null),
        s = r.createContext(null),
        u = r.createContext(null),
        c = r.createContext(null),
        d = r.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        f = r.createContext(null);

      function m(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t;
        p() || (0, o.q4)(!1);
        let {
          basename: a,
          navigator: i
        } = r.useContext(u), {
          hash: l,
          pathname: s,
          search: c
        } = S(e, {
          relative: n
        }), d = s;
        return "/" !== a && (d = "/" === s ? a : (0, o.En)([a, s])), i.createHref({
          pathname: d,
          search: c,
          hash: l
        })
      }

      function p() {
        return null != r.useContext(c)
      }

      function h() {
        return p() || (0, o.q4)(!1), r.useContext(c).location
      }

      function v() {
        return r.useContext(c).navigationType
      }

      function g(e) {
        p() || (0, o.q4)(!1);
        let {
          pathname: t
        } = h();
        return r.useMemo((() => (0, o.ot)(e, t)), [t, e])
      }

      function y(e) {
        r.useContext(u).static || r.useLayoutEffect(e)
      }

      function b() {
        let {
          isDataRoute: e
        } = r.useContext(d);
        return e ? function() {
          let {
            router: e
          } = A(P.UseNavigateStable), t = B(N.UseNavigateStable), n = r.useRef(!1);
          return y((() => {
            n.current = !0
          })), r.useCallback((function(r, o) {
            void 0 === o && (o = {}), n.current && ("number" == typeof r ? e.navigate(r) : e.navigate(r, a({
              fromRouteId: t
            }, o)))
          }), [e, t])
        }() : function() {
          p() || (0, o.q4)(!1);
          let e = r.useContext(i),
            {
              basename: t,
              navigator: n
            } = r.useContext(u),
            {
              matches: a
            } = r.useContext(d),
            {
              pathname: l
            } = h(),
            s = JSON.stringify((0, o.em)(a).map((e => e.pathnameBase))),
            c = r.useRef(!1);
          return y((() => {
            c.current = !0
          })), r.useCallback((function(r, a) {
            if (void 0 === a && (a = {}), !c.current) return;
            if ("number" == typeof r) return void n.go(r);
            let i = (0, o._)(r, JSON.parse(s), l, "path" === a.relative);
            null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, o.En)([t, i.pathname])), (a.replace ? n.replace : n.push)(i, a.state, a)
          }), [t, n, s, l, e])
        }()
      }
      const w = r.createContext(null);

      function E() {
        return r.useContext(w)
      }

      function R(e) {
        let t = r.useContext(d).outlet;
        return t ? r.createElement(w.Provider, {
          value: e
        }, t) : t
      }

      function C() {
        let {
          matches: e
        } = r.useContext(d), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function S(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          matches: a
        } = r.useContext(d), {
          pathname: i
        } = h(), l = JSON.stringify((0, o.em)(a).map((e => e.pathnameBase)));
        return r.useMemo((() => (0, o._)(e, JSON.parse(l), i, "path" === n)), [e, l, i, n])
      }

      function x(e, t) {
        return _(e, t)
      }

      function _(e, t, n) {
        p() || (0, o.q4)(!1);
        let {
          navigator: i
        } = r.useContext(u), {
          matches: l
        } = r.useContext(d), s = l[l.length - 1], f = s ? s.params : {}, m = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let v, g = h();
        if (t) {
          var y;
          let e = "string" == typeof t ? (0, o.O8)(t) : t;
          "/" === m || (null == (y = e.pathname) ? void 0 : y.startsWith(m)) || (0, o.q4)(!1), v = e
        } else v = g;
        let b = v.pathname || "/",
          w = "/" === m ? b : b.slice(m.length) || "/",
          E = (0, o.Cm)(e, {
            pathname: w
          }),
          R = D(E && E.map((e => Object.assign({}, e, {
            params: Object.assign({}, f, e.params),
            pathname: (0, o.En)([m, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? m : (0, o.En)([m, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), l, n);
        return t && R ? r.createElement(c.Provider, {
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
        }, R) : R
      }

      function L() {
        let e = z(),
          t = (0, o.e8)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          a = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
          };
        return r.createElement(r.Fragment, null, r.createElement("h2", null, "Unexpected Application Error!"), r.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, t), n ? r.createElement("pre", {
          style: a
        }, n) : null, null)
      }
      const T = r.createElement(L, null);
      class k extends r.Component {
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
          return this.state.error ? r.createElement(d.Provider, {
            value: this.props.routeContext
          }, r.createElement(f.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function U(e) {
        let {
          routeContext: t,
          match: n,
          children: o
        } = e, a = r.useContext(i);
        return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), r.createElement(d.Provider, {
          value: t
        }, o)
      }

      function D(e, t, n) {
        var a;
        if (void 0 === t && (t = []), void 0 === n && (n = null), null == e) {
          var i;
          if (null == (i = n) || !i.errors) return null;
          e = n.matches
        }
        let l = e,
          s = null == (a = n) ? void 0 : a.errors;
        if (null != s) {
          let e = l.findIndex((e => e.route.id && (null == s ? void 0 : s[e.route.id])));
          e >= 0 || (0, o.q4)(!1), l = l.slice(0, Math.min(l.length, e + 1))
        }
        return l.reduceRight(((e, o, a) => {
          let i = o.route.id ? null == s ? void 0 : s[o.route.id] : null,
            u = null;
          n && (u = o.route.errorElement || T);
          let c = t.concat(l.slice(0, a + 1)),
            d = () => {
              let t;
              return t = i ? u : o.route.Component ? r.createElement(o.route.Component, null) : o.route.element ? o.route.element : e, r.createElement(U, {
                match: o,
                routeContext: {
                  outlet: e,
                  matches: c,
                  isDataRoute: null != n
                },
                children: t
              })
            };
          return n && (o.route.ErrorBoundary || o.route.errorElement || 0 === a) ? r.createElement(k, {
            location: n.location,
            revalidation: n.revalidation,
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
      var P = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(P || {}),
        N = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(N || {});

      function A(e) {
        let t = r.useContext(i);
        return t || (0, o.q4)(!1), t
      }

      function O(e) {
        let t = r.useContext(l);
        return t || (0, o.q4)(!1), t
      }

      function B(e) {
        let t = function(e) {
            let t = r.useContext(d);
            return t || (0, o.q4)(!1), t
          }(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || (0, o.q4)(!1), n.route.id
      }

      function F() {
        return B(N.UseRouteId)
      }

      function M() {
        return O(N.UseNavigation).navigation
      }

      function q() {
        let e = A(P.UseRevalidator),
          t = O(N.UseRevalidator);
        return r.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function j() {
        let {
          matches: e,
          loaderData: t
        } = O(N.UseMatches);
        return r.useMemo((() => e.map((e => (0, o.WM)(e, t)))), [e, t])
      }

      function I() {
        let e = O(N.UseLoaderData),
          t = B(N.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function K(e) {
        return O(N.UseRouteLoaderData).loaderData[e]
      }

      function V() {
        let e = O(N.UseActionData);
        return r.useContext(d) || (0, o.q4)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function z() {
        var e;
        let t = r.useContext(f),
          n = O(N.UseRouteError),
          o = B(N.UseRouteError);
        return t || (null == (e = n.errors) ? void 0 : e[o])
      }

      function H() {
        let e = r.useContext(s);
        return null == e ? void 0 : e._data
      }

      function J() {
        let e = r.useContext(s);
        return null == e ? void 0 : e._error
      }
      let Y = 0;

      function W(e) {
        let {
          router: t,
          basename: n
        } = A(P.UseBlocker), i = O(N.UseBlocker), [l, s] = r.useState(""), u = r.useCallback((t => {
          if ("function" != typeof e) return !!e;
          if ("/" === n) return e(t);
          let {
            currentLocation: r,
            nextLocation: i,
            historyAction: l
          } = t;
          return e({
            currentLocation: a({}, r, {
              pathname: (0, o.mc)(r.pathname, n) || r.pathname
            }),
            nextLocation: a({}, i, {
              pathname: (0, o.mc)(i.pathname, n) || i.pathname
            }),
            historyAction: l
          })
        }), [n, e]);
        return r.useEffect((() => {
          let e = String(++Y);
          return s(e), () => t.deleteBlocker(e)
        }), [t]), r.useEffect((() => {
          "" !== l && t.getBlocker(l, u)
        }), [t, l, u]), l && i.blockers.has(l) ? i.blockers.get(l) : o.ie
      }
      const Q = r.startTransition;

      function Z(e) {
        let {
          basename: t,
          children: n,
          initialEntries: a,
          initialIndex: i,
          future: l
        } = e, s = r.useRef();
        null == s.current && (s.current = (0, o.Wi)({
          initialEntries: a,
          initialIndex: i,
          v5Compat: !0
        }));
        let u = s.current,
          [c, d] = r.useState({
            action: u.action,
            location: u.location
          }),
          {
            v7_startTransition: f
          } = l || {},
          m = r.useCallback((e => {
            f && Q ? Q((() => d(e))) : d(e)
          }), [d, f]);
        return r.useLayoutEffect((() => u.listen(m)), [u, m]), r.createElement(ee, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: u
        })
      }

      function G(e) {
        let {
          to: t,
          replace: n,
          state: a,
          relative: i
        } = e;
        p() || (0, o.q4)(!1);
        let {
          matches: l
        } = r.useContext(d), {
          pathname: s
        } = h(), u = b(), c = (0, o._)(t, (0, o.em)(l).map((e => e.pathnameBase)), s, "path" === i), f = JSON.stringify(c);
        return r.useEffect((() => u(JSON.parse(f), {
          replace: n,
          state: a,
          relative: i
        })), [u, f, i, n, a]), null
      }

      function X(e) {
        return R(e.context)
      }

      function $(e) {
        (0, o.q4)(!1)
      }

      function ee(e) {
        let {
          basename: t = "/",
          children: n = null,
          location: a,
          navigationType: i = o.So.Pop,
          navigator: l,
          static: s = !1
        } = e;
        p() && (0, o.q4)(!1);
        let d = t.replace(/^\/*/, "/"),
          f = r.useMemo((() => ({
            basename: d,
            navigator: l,
            static: s
          })), [d, l, s]);
        "string" == typeof a && (a = (0, o.O8)(a));
        let {
          pathname: m = "/",
          search: h = "",
          hash: v = "",
          state: g = null,
          key: y = "default"
        } = a, b = r.useMemo((() => {
          let e = (0, o.mc)(m, d);
          return null == e ? null : {
            location: {
              pathname: e,
              search: h,
              hash: v,
              state: g,
              key: y
            },
            navigationType: i
          }
        }), [d, m, h, v, g, y, i]);
        return null == b ? null : r.createElement(u.Provider, {
          value: f
        }, r.createElement(c.Provider, {
          children: n,
          value: b
        }))
      }

      function te(e) {
        let {
          children: t,
          location: n
        } = e;
        return x(le(t), n)
      }

      function ne(e) {
        let {
          children: t,
          errorElement: n,
          resolve: o
        } = e;
        return r.createElement(ae, {
          resolve: o,
          errorElement: n
        }, r.createElement(ie, null, t))
      }
      var re = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(re || {});
      const oe = new Promise((() => {}));
      class ae extends r.Component {
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
            resolve: n
          } = this.props, a = null, i = re.pending;
          if (n instanceof Promise)
            if (this.state.error) {
              i = re.error;
              let e = this.state.error;
              a = Promise.reject().catch((() => {})), Object.defineProperty(a, "_tracked", {
                get: () => !0
              }), Object.defineProperty(a, "_error", {
                get: () => e
              })
            } else n._tracked ? (a = n, i = void 0 !== a._error ? re.error : void 0 !== a._data ? re.success : re.pending) : (i = re.pending, Object.defineProperty(n, "_tracked", {
              get: () => !0
            }), a = n.then((e => Object.defineProperty(n, "_data", {
              get: () => e
            })), (e => Object.defineProperty(n, "_error", {
              get: () => e
            }))));
          else i = re.success, a = Promise.resolve(), Object.defineProperty(a, "_tracked", {
            get: () => !0
          }), Object.defineProperty(a, "_data", {
            get: () => n
          });
          if (i === re.error && a._error instanceof o.ay) throw oe;
          if (i === re.error && !t) throw a._error;
          if (i === re.error) return r.createElement(s.Provider, {
            value: a,
            children: t
          });
          if (i === re.success) return r.createElement(s.Provider, {
            value: a,
            children: e
          });
          throw a
        }
      }

      function ie(e) {
        let {
          children: t
        } = e, n = H(), o = "function" == typeof t ? t(n) : t;
        return r.createElement(r.Fragment, null, o)
      }

      function le(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return r.Children.forEach(e, ((e, a) => {
          if (!r.isValidElement(e)) return;
          let i = [...t, a];
          if (e.type === r.Fragment) return void n.push.apply(n, le(e.props.children, i));
          e.type !== $ && (0, o.q4)(!1), e.props.index && e.props.children && (0, o.q4)(!1);
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
          e.props.children && (l.children = le(e.props.children, i)), n.push(l)
        })), n
      }

      function se(e) {
        return D(e)
      }

      function ue(e) {
        let t = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
        };
        return e.Component && Object.assign(t, {
          element: r.createElement(e.Component),
          Component: void 0
        }), e.ErrorBoundary && Object.assign(t, {
          errorElement: r.createElement(e.ErrorBoundary),
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
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, de.apply(this, arguments)
      }

      function fe(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      const me = "get",
        pe = "application/x-www-form-urlencoded";

      function he(e) {
        return null != e && "string" == typeof e.tagName
      }

      function ve(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, n) => {
          let r = e[n];
          return t.concat(Array.isArray(r) ? r.map((e => [n, e])) : [
            [n, r]
          ])
        }), []))
      }
      let ge = null;
      const ye = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function be(e) {
        return null == e || ye.has(e) ? e : null
      }

      function we(e, t) {
        let n, r, a, i, l;
        if (he(s = e) && "form" === s.tagName.toLowerCase()) {
          let l = e.getAttribute("action");
          r = l ? (0, o.mc)(l, t) : null, n = e.getAttribute("method") || me, a = be(e.getAttribute("enctype")) || pe, i = new FormData(e)
        } else if (function(e) {
            return he(e) && "button" === e.tagName.toLowerCase()
          }(e) || function(e) {
            return he(e) && "input" === e.tagName.toLowerCase()
          }(e) && ("submit" === e.type || "image" === e.type)) {
          let l = e.form;
          if (null == l) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let s = e.getAttribute("formaction") || l.getAttribute("action");
          if (r = s ? (0, o.mc)(s, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || me, a = be(e.getAttribute("formenctype")) || be(l.getAttribute("enctype")) || pe, i = new FormData(l, e), ! function() {
              if (null === ge) try {
                new FormData(document.createElement("form"), 0), ge = !1
              } catch (e) {
                ge = !0
              }
              return ge
            }()) {
            let {
              name: t,
              type: n,
              value: r
            } = e;
            if ("image" === n) {
              let e = t ? t + "." : "";
              i.append(e + "x", "0"), i.append(e + "y", "0")
            } else t && i.append(t, r)
          }
        } else {
          if (he(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
          n = me, r = null, a = pe, l = e
        }
        var s;
        return i && "text/plain" === a && (l = i, i = void 0), {
          action: r,
          method: n.toLowerCase(),
          encType: a,
          formData: i,
          body: l
        }
      }
      const Ee = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
        Re = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
        Ce = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

      function Se(e, t) {
        return (0, o.gv)({
          basename: null == t ? void 0 : t.basename,
          future: de({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, o.iU)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || _e(),
          routes: e,
          mapRouteProperties: ue,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function xe(e, t) {
        return (0, o.gv)({
          basename: null == t ? void 0 : t.basename,
          future: de({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, o.Yf)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || _e(),
          routes: e,
          mapRouteProperties: ue,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function _e() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = de({}, t, {
          errors: Le(t.errors)
        })), t
      }

      function Le(e) {
        if (!e) return null;
        let t = Object.entries(e),
          n = {};
        for (let [e, r] of t)
          if (r && "RouteErrorResponse" === r.__type) n[e] = new o.sZ(r.status, r.statusText, r.data, !0 === r.internal);
          else if (r && "Error" === r.__type) {
          if (r.__subType) {
            let t = window[r.__subType];
            if ("function" == typeof t) try {
              let o = new t(r.message);
              o.stack = "", n[e] = o
            } catch (e) {}
          }
          if (null == n[e]) {
            let t = new Error(r.message);
            t.stack = "", n[e] = t
          }
        } else n[e] = r;
        return n
      }
      const Te = r.createContext({
          isTransitioning: !1
        }),
        ke = r.startTransition;
      class Ue {
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

      function De(e) {
        let {
          fallbackElement: t,
          router: n,
          future: o
        } = e, [a, s] = r.useState(n.state), [u, c] = r.useState(), [d, f] = r.useState({
          isTransitioning: !1
        }), [m, p] = r.useState(), [h, v] = r.useState(), [g, y] = r.useState(), {
          v7_startTransition: b
        } = o || {}, w = r.useCallback((e => {
          b ? function(e) {
            ke ? ke(e) : e()
          }(e) : e()
        }), [b]), E = r.useCallback(((e, t) => {
          let {
            unstable_viewTransitionOpts: r
          } = t;
          r && null != n.window && "function" == typeof n.window.document.startViewTransition ? h && m ? (m.resolve(), h.skipTransition(), y({
            state: e,
            currentLocation: r.currentLocation,
            nextLocation: r.nextLocation
          })) : (c(e), f({
            isTransitioning: !0,
            currentLocation: r.currentLocation,
            nextLocation: r.nextLocation
          })) : w((() => s(e)))
        }), [w, h, m, n.window]);
        r.useLayoutEffect((() => n.subscribe(E)), [n, E]), r.useEffect((() => {
          d.isTransitioning && p(new Ue)
        }), [d.isTransitioning]), r.useEffect((() => {
          if (m && u && n.window) {
            let e = u,
              t = m.promise,
              r = n.window.document.startViewTransition((async () => {
                w((() => s(e))), await t
              }));
            r.finished.finally((() => {
              p(void 0), v(void 0), c(void 0), f({
                isTransitioning: !1
              })
            })), v(r)
          }
        }), [w, u, m, n.window]), r.useEffect((() => {
          m && u && a.location.key === u.location.key && m.resolve()
        }), [m, h, a.location, u]), r.useEffect((() => {
          !d.isTransitioning && g && (c(g.state), f({
            isTransitioning: !0,
            currentLocation: g.currentLocation,
            nextLocation: g.nextLocation
          }), y(void 0))
        }), [d.isTransitioning, g]);
        let R = r.useMemo((() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: e => n.navigate(e),
            push: (e, t, r) => n.navigate(e, {
              state: t,
              preventScrollReset: null == r ? void 0 : r.preventScrollReset
            }),
            replace: (e, t, r) => n.navigate(e, {
              replace: !0,
              state: t,
              preventScrollReset: null == r ? void 0 : r.preventScrollReset
            })
          })), [n]),
          C = n.basename || "/",
          S = r.useMemo((() => ({
            router: n,
            navigator: R,
            static: !1,
            basename: C
          })), [n, R, C]);
        return r.createElement(r.Fragment, null, r.createElement(i.Provider, {
          value: S
        }, r.createElement(l.Provider, {
          value: a
        }, r.createElement(Te.Provider, {
          value: d
        }, r.createElement(ee, {
          basename: C,
          location: a.location,
          navigationType: a.historyAction,
          navigator: R
        }, a.initialized ? r.createElement(Pe, {
          routes: n.routes,
          state: a
        }) : t)))), null)
      }

      function Pe(e) {
        let {
          routes: t,
          state: n
        } = e;
        return _(t, void 0, n)
      }

      function Ne(e) {
        let {
          basename: t,
          children: n,
          future: a,
          window: i
        } = e, l = r.useRef();
        null == l.current && (l.current = (0, o.iU)({
          window: i,
          v5Compat: !0
        }));
        let s = l.current,
          [u, c] = r.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: d
          } = a || {},
          f = r.useCallback((e => {
            d && ke ? ke((() => c(e))) : c(e)
          }), [c, d]);
        return r.useLayoutEffect((() => s.listen(f)), [s, f]), r.createElement(ee, {
          basename: t,
          children: n,
          location: u.location,
          navigationType: u.action,
          navigator: s
        })
      }

      function Ae(e) {
        let {
          basename: t,
          children: n,
          future: a,
          window: i
        } = e, l = r.useRef();
        null == l.current && (l.current = (0, o.Yf)({
          window: i,
          v5Compat: !0
        }));
        let s = l.current,
          [u, c] = r.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: d
          } = a || {},
          f = r.useCallback((e => {
            d && ke ? ke((() => c(e))) : c(e)
          }), [c, d]);
        return r.useLayoutEffect((() => s.listen(f)), [s, f]), r.createElement(ee, {
          basename: t,
          children: n,
          location: u.location,
          navigationType: u.action,
          navigator: s
        })
      }

      function Oe(e) {
        let {
          basename: t,
          children: n,
          future: o,
          history: a
        } = e, [i, l] = r.useState({
          action: a.action,
          location: a.location
        }), {
          v7_startTransition: s
        } = o || {}, u = r.useCallback((e => {
          s && ke ? ke((() => l(e))) : l(e)
        }), [l, s]);
        return r.useLayoutEffect((() => a.listen(u)), [a, u]), r.createElement(ee, {
          basename: t,
          children: n,
          location: i.location,
          navigationType: i.action,
          navigator: a
        })
      }
      const Be = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        Fe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Me = r.forwardRef((function(e, t) {
          let n, {
              onClick: a,
              relative: i,
              reloadDocument: l,
              replace: s,
              state: c,
              target: d,
              to: f,
              preventScrollReset: p,
              unstable_viewTransition: h
            } = e,
            v = fe(e, Ee),
            {
              basename: g
            } = r.useContext(u),
            y = !1;
          if ("string" == typeof f && Fe.test(f) && (n = f, Be)) try {
            let e = new URL(window.location.href),
              t = f.startsWith("//") ? new URL(e.protocol + f) : new URL(f),
              n = (0, o.mc)(t.pathname, g);
            t.origin === e.origin && null != n ? f = n + t.search + t.hash : y = !0
          } catch (e) {}
          let b = m(f, {
              relative: i
            }),
            w = Ye(f, {
              replace: s,
              state: c,
              target: d,
              preventScrollReset: p,
              relative: i,
              unstable_viewTransition: h
            });
          return r.createElement("a", de({}, v, {
            href: n || b,
            onClick: y || l ? a : function(e) {
              a && a(e), e.defaultPrevented || w(e)
            },
            ref: t,
            target: d
          }))
        })),
        qe = r.forwardRef((function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: o = !1,
            className: a = "",
            end: i = !1,
            style: s,
            to: c,
            unstable_viewTransition: d,
            children: f
          } = e, m = fe(e, Re), p = S(c, {
            relative: m.relative
          }), v = h(), g = r.useContext(l), {
            navigator: y
          } = r.useContext(u), b = null != g && lt(p) && !0 === d, w = y.encodeLocation ? y.encodeLocation(p).pathname : p.pathname, E = v.pathname, R = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
          o || (E = E.toLowerCase(), R = R ? R.toLowerCase() : null, w = w.toLowerCase());
          let C, x = E === w || !i && E.startsWith(w) && "/" === E.charAt(w.length),
            _ = null != R && (R === w || !i && R.startsWith(w) && "/" === R.charAt(w.length)),
            L = {
              isActive: x,
              isPending: _,
              isTransitioning: b
            },
            T = x ? n : void 0;
          C = "function" == typeof a ? a(L) : [a, x ? "active" : null, _ ? "pending" : null, b ? "transitioning" : null].filter(Boolean).join(" ");
          let k = "function" == typeof s ? s(L) : s;
          return r.createElement(Me, de({}, m, {
            "aria-current": T,
            className: C,
            ref: t,
            style: k,
            to: c,
            unstable_viewTransition: d
          }), "function" == typeof f ? f(L) : f)
        })),
        je = r.forwardRef(((e, t) => {
          let n = Ze();
          return r.createElement(Ie, de({}, e, {
            submit: n,
            ref: t
          }))
        })),
        Ie = r.forwardRef(((e, t) => {
          let {
            reloadDocument: n,
            replace: o,
            state: a,
            method: i = me,
            action: l,
            onSubmit: s,
            submit: u,
            relative: c,
            preventScrollReset: d,
            unstable_viewTransition: f
          } = e, m = fe(e, Ce), p = "get" === i.toLowerCase() ? "get" : "post", h = Xe(l, {
            relative: c
          });
          return r.createElement("form", de({
            ref: t,
            method: p,
            action: h,
            onSubmit: n ? s : e => {
              if (s && s(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                n = (null == t ? void 0 : t.getAttribute("formmethod")) || i;
              u(t || e.currentTarget, {
                method: n,
                replace: o,
                state: a,
                relative: c,
                preventScrollReset: d,
                unstable_viewTransition: f
              })
            }
          }, m))
        }));

      function Ke(e) {
        let {
          getKey: t,
          storageKey: n
        } = e;
        return ot({
          getKey: t,
          storageKey: n
        }), null
      }
      var Ve, ze;

      function He(e) {
        let t = r.useContext(i);
        return t || (0, o.q4)(!1), t
      }

      function Je(e) {
        let t = r.useContext(l);
        return t || (0, o.q4)(!1), t
      }

      function Ye(e, t) {
        let {
          target: n,
          replace: a,
          state: i,
          preventScrollReset: l,
          relative: s,
          unstable_viewTransition: u
        } = void 0 === t ? {} : t, c = b(), d = h(), f = S(e, {
          relative: s
        });
        return r.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== a ? a : (0, o.Ep)(d) === (0, o.Ep)(f);
            c(e, {
              replace: n,
              state: i,
              preventScrollReset: l,
              relative: s,
              unstable_viewTransition: u
            })
          }
        }), [d, c, f, a, i, n, e, l, s, u])
      }

      function We(e) {
        let t = r.useRef(ve(e)),
          n = r.useRef(!1),
          o = h(),
          a = r.useMemo((() => function(e, t) {
            let n = ve(e);
            return t && t.forEach(((e, r) => {
              n.has(r) || t.getAll(r).forEach((e => {
                n.append(r, e)
              }))
            })), n
          }(o.search, n.current ? null : t.current)), [o.search]),
          i = b(),
          l = r.useCallback(((e, t) => {
            const r = ve("function" == typeof e ? e(a) : e);
            n.current = !0, i("?" + r, t)
          }), [i, a]);
        return [a, l]
      }

      function Qe() {
        if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
      }

      function Ze() {
        let {
          router: e
        } = He(Ve.UseSubmit), {
          basename: t
        } = r.useContext(u), n = F();
        return r.useCallback((function(r, o) {
          void 0 === o && (o = {}), Qe();
          let {
            action: a,
            method: i,
            encType: l,
            formData: s,
            body: u
          } = we(r, t);
          e.navigate(o.action || a, {
            preventScrollReset: o.preventScrollReset,
            formData: s,
            body: u,
            formMethod: o.method || i,
            formEncType: o.encType || l,
            replace: o.replace,
            state: o.state,
            fromRouteId: n,
            unstable_viewTransition: o.unstable_viewTransition
          })
        }), [e, t, n])
      }

      function Ge(e, t) {
        let {
          router: n
        } = He(Ve.UseSubmitFetcher), {
          basename: a
        } = r.useContext(u);
        return r.useCallback((function(r, i) {
          void 0 === i && (i = {}), Qe();
          let {
            action: l,
            method: s,
            encType: u,
            formData: c,
            body: d
          } = we(r, a);
          null == t && (0, o.q4)(!1), n.fetch(e, t, i.action || l, {
            preventScrollReset: i.preventScrollReset,
            formData: c,
            body: d,
            formMethod: i.method || s,
            formEncType: i.encType || u
          })
        }), [n, a, e, t])
      }

      function Xe(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: a
        } = r.useContext(u), i = r.useContext(d);
        i || (0, o.q4)(!1);
        let [l] = i.matches.slice(-1), s = de({}, S(e || ".", {
          relative: n
        })), c = h();
        if (null == e && (s.search = c.search, l.route.index)) {
          let e = new URLSearchParams(s.search);
          e.delete("index"), s.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !l.route.index || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), "/" !== a && (s.pathname = "/" === s.pathname ? a : (0, o.En)([a, s.pathname])), (0, o.Ep)(s)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(Ve || (Ve = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(ze || (ze = {}));
      let $e = 0;

      function et() {
        var e;
        let {
          router: t
        } = He(Ve.UseFetcher), n = r.useContext(d);
        n || (0, o.q4)(!1);
        let a = null == (e = n.matches[n.matches.length - 1]) ? void 0 : e.route.id;
        null == a && (0, o.q4)(!1);
        let [i] = r.useState((() => String(++$e))), [l] = r.useState((() => (a || (0, o.q4)(!1), function(e, t) {
          return r.forwardRef(((n, o) => {
            let a = Ge(e, t);
            return r.createElement(Ie, de({}, n, {
              ref: o,
              submit: a
            }))
          }))
        }(i, a)))), [s] = r.useState((() => e => {
          t || (0, o.q4)(!1), a || (0, o.q4)(!1), t.fetch(i, a, e)
        })), u = Ge(i, a), c = t.getFetcher(i), f = r.useMemo((() => de({
          Form: l,
          submit: u,
          load: s
        }, c)), [c, l, u, s]);
        return r.useEffect((() => () => {
          t ? t.deleteFetcher(i) : console.warn("No router available to clean up from useFetcher()")
        }), [t, i]), f
      }

      function tt() {
        return [...Je(ze.UseFetchers).fetchers.values()]
      }
      const nt = "react-router-scroll-positions";
      let rt = {};

      function ot(e) {
        let {
          getKey: t,
          storageKey: n
        } = void 0 === e ? {} : e, {
          router: a
        } = He(Ve.UseScrollRestoration), {
          restoreScrollPosition: i,
          preventScrollReset: l
        } = Je(ze.UseScrollRestoration), {
          basename: s
        } = r.useContext(u), c = h(), d = j(), f = M();
        r.useEffect((() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          })), []),
          function(e, t) {
            let {
              capture: n
            } = {};
            r.useEffect((() => {
              let t = null != n ? {
                capture: n
              } : void 0;
              return window.addEventListener("pagehide", e, t), () => {
                window.removeEventListener("pagehide", e, t)
              }
            }), [e, n])
          }(r.useCallback((() => {
            if ("idle" === f.state) {
              let e = (t ? t(c, d) : null) || c.key;
              rt[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(n || nt, JSON.stringify(rt))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }), [n, t, f.state, c, d])), "undefined" != typeof document && (r.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(n || nt);
              e && (rt = JSON.parse(e))
            } catch (e) {}
          }), [n]), r.useLayoutEffect((() => {
            let e = t && "/" !== s ? (e, n) => t(de({}, e, {
                pathname: (0, o.mc)(e.pathname, s) || e.pathname
              }), n) : t,
              n = null == a ? void 0 : a.enableScrollRestoration(rt, (() => window.scrollY), e);
            return () => n && n()
          }), [a, s, t]), r.useLayoutEffect((() => {
            if (!1 !== i)
              if ("number" != typeof i) {
                if (c.hash) {
                  let e = document.getElementById(decodeURIComponent(c.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== l && window.scrollTo(0, 0)
              } else window.scrollTo(0, i)
          }), [c, i, l]))
      }

      function at(e, t) {
        let {
          capture: n
        } = t || {};
        r.useEffect((() => {
          let t = null != n ? {
            capture: n
          } : void 0;
          return window.addEventListener("beforeunload", e, t), () => {
            window.removeEventListener("beforeunload", e, t)
          }
        }), [e, n])
      }

      function it(e) {
        let {
          when: t,
          message: n
        } = e, o = W(t);
        r.useEffect((() => {
          "blocked" === o.state && (window.confirm(n) ? setTimeout(o.proceed, 0) : o.reset())
        }), [o, n]), r.useEffect((() => {
          "blocked" !== o.state || t || o.reset()
        }), [o, t])
      }

      function lt(e, t) {
        void 0 === t && (t = {});
        let n = r.useContext(Te);
        null == n && (0, o.q4)(!1);
        let {
          basename: a
        } = He(Ve.useViewTransitionState), i = S(e, {
          relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let l = (0, o.mc)(n.currentLocation.pathname, a) || n.currentLocation.pathname,
          s = (0, o.mc)(n.nextLocation.pathname, a) || n.nextLocation.pathname;
        return null != (0, o.ot)(i.pathname, s) || null != (0, o.ot)(i.pathname, l)
      }
    }
  }
]);
//# sourceMappingURL=721d309faf42c6f465fb14766f879cda.js.map