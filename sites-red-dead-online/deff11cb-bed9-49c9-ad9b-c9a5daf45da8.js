! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "deff11cb-bed9-49c9-ad9b-c9a5daf45da8", e._sentryDebugIdIdentifier = "sentry-dbid-deff11cb-bed9-49c9-ad9b-c9a5daf45da8")
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
  [180], {
    22180: (e, t, n) => {
      n.r(t), n.d(t, {
        AbortedDeferredError: () => a.tH,
        Await: () => ne,
        BrowserRouter: () => Pe,
        Form: () => Ie,
        HashRouter: () => Ae,
        Link: () => Me,
        MemoryRouter: () => q,
        NavLink: () => je,
        Navigate: () => Q,
        NavigationType: () => a.rc,
        Outlet: () => Z,
        Route: () => $,
        Router: () => ee,
        RouterProvider: () => Ue,
        Routes: () => te,
        ScrollRestoration: () => Ve,
        UNSAFE_DataRouterContext: () => i,
        UNSAFE_DataRouterStateContext: () => l,
        UNSAFE_LocationContext: () => c,
        UNSAFE_NavigationContext: () => u,
        UNSAFE_RouteContext: () => d,
        UNSAFE_ViewTransitionContext: () => Te,
        UNSAFE_useRouteId: () => F,
        UNSAFE_useScrollRestoration: () => at,
        createBrowserRouter: () => Se,
        createHashRouter: () => xe,
        createMemoryRouter: () => ce,
        createPath: () => a.AO,
        createRoutesFromChildren: () => le,
        createRoutesFromElements: () => le,
        createSearchParams: () => ve,
        defer: () => a.v6,
        generatePath: () => a.tW,
        isRouteErrorResponse: () => a.pX,
        json: () => a.Pq,
        matchPath: () => a.B6,
        matchRoutes: () => a.ue,
        parsePath: () => a.Rr,
        redirect: () => a.V2,
        redirectDocument: () => a.Sk,
        renderMatches: () => se,
        resolvePath: () => a.o1,
        unstable_HistoryRouter: () => Ne,
        unstable_useBlocker: () => G,
        unstable_usePrompt: () => it,
        unstable_useViewTransitionState: () => lt,
        useActionData: () => z,
        useAsyncError: () => W,
        useAsyncValue: () => J,
        useBeforeUnload: () => ot,
        useFetcher: () => et,
        useFetchers: () => tt,
        useFormAction: () => Ze,
        useHref: () => p,
        useInRouterContext: () => m,
        useLinkClickHandler: () => Ye,
        useLoaderData: () => H,
        useLocation: () => h,
        useMatch: () => g,
        useMatches: () => I,
        useNavigate: () => y,
        useNavigation: () => M,
        useNavigationType: () => v,
        useOutlet: () => R,
        useOutletContext: () => E,
        useParams: () => C,
        useResolvedPath: () => S,
        useRevalidator: () => j,
        useRouteError: () => K,
        useRouteLoaderData: () => V,
        useRoutes: () => x,
        useSearchParams: () => Ge,
        useSubmit: () => qe
      });
      var r = n(71403),
        a = n(15261);

      function o() {
        return o = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, o.apply(this, arguments)
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

      function p(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t;
        m() || (0, a.Oi)(!1);
        let {
          basename: o,
          navigator: i
        } = r.useContext(u), {
          hash: l,
          pathname: s,
          search: c
        } = S(e, {
          relative: n
        }), d = s;
        return "/" !== o && (d = "/" === s ? o : (0, a.HS)([o, s])), i.createHref({
          pathname: d,
          search: c,
          hash: l
        })
      }

      function m() {
        return null != r.useContext(c)
      }

      function h() {
        return m() || (0, a.Oi)(!1), r.useContext(c).location
      }

      function v() {
        return r.useContext(c).navigationType
      }

      function g(e) {
        m() || (0, a.Oi)(!1);
        let {
          pathname: t
        } = h();
        return r.useMemo((() => (0, a.B6)(e, t)), [t, e])
      }

      function b(e) {
        r.useContext(u).static || r.useLayoutEffect(e)
      }

      function y() {
        let {
          isDataRoute: e
        } = r.useContext(d);
        return e ? function() {
          let {
            router: e
          } = A(D.UseNavigateStable), t = B(P.UseNavigateStable), n = r.useRef(!1);
          return b((() => {
            n.current = !0
          })), r.useCallback((function(r, a) {
            void 0 === a && (a = {}), n.current && ("number" == typeof r ? e.navigate(r) : e.navigate(r, o({
              fromRouteId: t
            }, a)))
          }), [e, t])
        }() : function() {
          m() || (0, a.Oi)(!1);
          let e = r.useContext(i),
            {
              basename: t,
              navigator: n
            } = r.useContext(u),
            {
              matches: o
            } = r.useContext(d),
            {
              pathname: l
            } = h(),
            s = JSON.stringify((0, a.sd)(o).map((e => e.pathnameBase))),
            c = r.useRef(!1);
          return b((() => {
            c.current = !0
          })), r.useCallback((function(r, o) {
            if (void 0 === o && (o = {}), !c.current) return;
            if ("number" == typeof r) return void n.go(r);
            let i = (0, a.Gh)(r, JSON.parse(s), l, "path" === o.relative);
            null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, a.HS)([t, i.pathname])), (o.replace ? n.replace : n.push)(i, o.state, o)
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
          matches: o
        } = r.useContext(d), {
          pathname: i
        } = h(), l = JSON.stringify((0, a.sd)(o).map((e => e.pathnameBase)));
        return r.useMemo((() => (0, a.Gh)(e, JSON.parse(l), i, "path" === n)), [e, l, i, n])
      }

      function x(e, t) {
        return _(e, t)
      }

      function _(e, t, n) {
        m() || (0, a.Oi)(!1);
        let {
          navigator: i
        } = r.useContext(u), {
          matches: l
        } = r.useContext(d), s = l[l.length - 1], f = s ? s.params : {}, p = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let v, g = h();
        if (t) {
          var b;
          let e = "string" == typeof t ? (0, a.Rr)(t) : t;
          "/" === p || (null == (b = e.pathname) ? void 0 : b.startsWith(p)) || (0, a.Oi)(!1), v = e
        } else v = g;
        let y = v.pathname || "/",
          w = "/" === p ? y : y.slice(p.length) || "/",
          E = (0, a.ue)(e, {
            pathname: w
          }),
          R = U(E && E.map((e => Object.assign({}, e, {
            params: Object.assign({}, f, e.params),
            pathname: (0, a.HS)([p, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? p : (0, a.HS)([p, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), l, n);
        return t && R ? r.createElement(c.Provider, {
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

      function L() {
        let e = K(),
          t = (0, a.pX)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
          };
        return r.createElement(r.Fragment, null, r.createElement("h2", null, "Unexpected Application Error!"), r.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, t), n ? r.createElement("pre", {
          style: o
        }, n) : null, null)
      }
      const T = r.createElement(L, null);
      class O extends r.Component {
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

      function k(e) {
        let {
          routeContext: t,
          match: n,
          children: a
        } = e, o = r.useContext(i);
        return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), r.createElement(d.Provider, {
          value: t
        }, a)
      }

      function U(e, t, n) {
        var o;
        if (void 0 === t && (t = []), void 0 === n && (n = null), null == e) {
          var i;
          if (null == (i = n) || !i.errors) return null;
          e = n.matches
        }
        let l = e,
          s = null == (o = n) ? void 0 : o.errors;
        if (null != s) {
          let e = l.findIndex((e => e.route.id && (null == s ? void 0 : s[e.route.id])));
          e >= 0 || (0, a.Oi)(!1), l = l.slice(0, Math.min(l.length, e + 1))
        }
        return l.reduceRight(((e, a, o) => {
          let i = a.route.id ? null == s ? void 0 : s[a.route.id] : null,
            u = null;
          n && (u = a.route.errorElement || T);
          let c = t.concat(l.slice(0, o + 1)),
            d = () => {
              let t;
              return t = i ? u : a.route.Component ? r.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, r.createElement(k, {
                match: a,
                routeContext: {
                  outlet: e,
                  matches: c,
                  isDataRoute: null != n
                },
                children: t
              })
            };
          return n && (a.route.ErrorBoundary || a.route.errorElement || 0 === o) ? r.createElement(O, {
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
      var D = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(D || {}),
        P = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(P || {});

      function A(e) {
        let t = r.useContext(i);
        return t || (0, a.Oi)(!1), t
      }

      function N(e) {
        let t = r.useContext(l);
        return t || (0, a.Oi)(!1), t
      }

      function B(e) {
        let t = function(e) {
            let t = r.useContext(d);
            return t || (0, a.Oi)(!1), t
          }(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || (0, a.Oi)(!1), n.route.id
      }

      function F() {
        return B(P.UseRouteId)
      }

      function M() {
        return N(P.UseNavigation).navigation
      }

      function j() {
        let e = A(D.UseRevalidator),
          t = N(P.UseRevalidator);
        return r.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function I() {
        let {
          matches: e,
          loaderData: t
        } = N(P.UseMatches);
        return r.useMemo((() => e.map((e => (0, a.ro)(e, t)))), [e, t])
      }

      function H() {
        let e = N(P.UseLoaderData),
          t = B(P.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function V(e) {
        return N(P.UseRouteLoaderData).loaderData[e]
      }

      function z() {
        let e = N(P.UseActionData);
        return r.useContext(d) || (0, a.Oi)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function K() {
        var e;
        let t = r.useContext(f),
          n = N(P.UseRouteError),
          a = B(P.UseRouteError);
        return t || (null == (e = n.errors) ? void 0 : e[a])
      }

      function J() {
        let e = r.useContext(s);
        return null == e ? void 0 : e._data
      }

      function W() {
        let e = r.useContext(s);
        return null == e ? void 0 : e._error
      }
      let Y = 0;

      function G(e) {
        let {
          router: t,
          basename: n
        } = A(D.UseBlocker), i = N(P.UseBlocker), [l, s] = r.useState(""), u = r.useCallback((t => {
          if ("function" != typeof e) return !!e;
          if ("/" === n) return e(t);
          let {
            currentLocation: r,
            nextLocation: i,
            historyAction: l
          } = t;
          return e({
            currentLocation: o({}, r, {
              pathname: (0, a.pb)(r.pathname, n) || r.pathname
            }),
            nextLocation: o({}, i, {
              pathname: (0, a.pb)(i.pathname, n) || i.pathname
            }),
            historyAction: l
          })
        }), [n, e]);
        return r.useEffect((() => {
          let e = String(++Y);
          return s(e), () => t.deleteBlocker(e)
        }), [t]), r.useEffect((() => {
          "" !== l && t.getBlocker(l, u)
        }), [t, l, u]), l && i.blockers.has(l) ? i.blockers.get(l) : a.G3
      }
      const X = r.startTransition;

      function q(e) {
        let {
          basename: t,
          children: n,
          initialEntries: o,
          initialIndex: i,
          future: l
        } = e, s = r.useRef();
        null == s.current && (s.current = (0, a.sC)({
          initialEntries: o,
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
          p = r.useCallback((e => {
            f && X ? X((() => d(e))) : d(e)
          }), [d, f]);
        return r.useLayoutEffect((() => u.listen(p)), [u, p]), r.createElement(ee, {
          basename: t,
          children: n,
          location: c.location,
          navigationType: c.action,
          navigator: u
        })
      }

      function Q(e) {
        let {
          to: t,
          replace: n,
          state: o,
          relative: i
        } = e;
        m() || (0, a.Oi)(!1);
        let {
          matches: l
        } = r.useContext(d), {
          pathname: s
        } = h(), u = y(), c = (0, a.Gh)(t, (0, a.sd)(l).map((e => e.pathnameBase)), s, "path" === i), f = JSON.stringify(c);
        return r.useEffect((() => u(JSON.parse(f), {
          replace: n,
          state: o,
          relative: i
        })), [u, f, i, n, o]), null
      }

      function Z(e) {
        return R(e.context)
      }

      function $(e) {
        (0, a.Oi)(!1)
      }

      function ee(e) {
        let {
          basename: t = "/",
          children: n = null,
          location: o,
          navigationType: i = a.rc.Pop,
          navigator: l,
          static: s = !1
        } = e;
        m() && (0, a.Oi)(!1);
        let d = t.replace(/^\/*/, "/"),
          f = r.useMemo((() => ({
            basename: d,
            navigator: l,
            static: s
          })), [d, l, s]);
        "string" == typeof o && (o = (0, a.Rr)(o));
        let {
          pathname: p = "/",
          search: h = "",
          hash: v = "",
          state: g = null,
          key: b = "default"
        } = o, y = r.useMemo((() => {
          let e = (0, a.pb)(p, d);
          return null == e ? null : {
            location: {
              pathname: e,
              search: h,
              hash: v,
              state: g,
              key: b
            },
            navigationType: i
          }
        }), [d, p, h, v, g, b, i]);
        return null == y ? null : r.createElement(u.Provider, {
          value: f
        }, r.createElement(c.Provider, {
          children: n,
          value: y
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
          resolve: a
        } = e;
        return r.createElement(oe, {
          resolve: a,
          errorElement: n
        }, r.createElement(ie, null, t))
      }
      var re = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(re || {});
      const ae = new Promise((() => {}));
      class oe extends r.Component {
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
          } = this.props, o = null, i = re.pending;
          if (n instanceof Promise)
            if (this.state.error) {
              i = re.error;
              let e = this.state.error;
              o = Promise.reject().catch((() => {})), Object.defineProperty(o, "_tracked", {
                get: () => !0
              }), Object.defineProperty(o, "_error", {
                get: () => e
              })
            } else n._tracked ? (o = n, i = void 0 !== o._error ? re.error : void 0 !== o._data ? re.success : re.pending) : (i = re.pending, Object.defineProperty(n, "_tracked", {
              get: () => !0
            }), o = n.then((e => Object.defineProperty(n, "_data", {
              get: () => e
            })), (e => Object.defineProperty(n, "_error", {
              get: () => e
            }))));
          else i = re.success, o = Promise.resolve(), Object.defineProperty(o, "_tracked", {
            get: () => !0
          }), Object.defineProperty(o, "_data", {
            get: () => n
          });
          if (i === re.error && o._error instanceof a.tH) throw ae;
          if (i === re.error && !t) throw o._error;
          if (i === re.error) return r.createElement(s.Provider, {
            value: o,
            children: t
          });
          if (i === re.success) return r.createElement(s.Provider, {
            value: o,
            children: e
          });
          throw o
        }
      }

      function ie(e) {
        let {
          children: t
        } = e, n = J(), a = "function" == typeof t ? t(n) : t;
        return r.createElement(r.Fragment, null, a)
      }

      function le(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return r.Children.forEach(e, ((e, o) => {
          if (!r.isValidElement(e)) return;
          let i = [...t, o];
          if (e.type === r.Fragment) return void n.push.apply(n, le(e.props.children, i));
          e.type !== $ && (0, a.Oi)(!1), e.props.index && e.props.children && (0, a.Oi)(!1);
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
        return U(e)
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
        var n, r, a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }
      const pe = "get",
        me = "application/x-www-form-urlencoded";

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
      const be = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function ye(e) {
        return null == e || be.has(e) ? e : null
      }

      function we(e, t) {
        let n, r, o, i, l;
        if (he(s = e) && "form" === s.tagName.toLowerCase()) {
          let l = e.getAttribute("action");
          r = l ? (0, a.pb)(l, t) : null, n = e.getAttribute("method") || pe, o = ye(e.getAttribute("enctype")) || me, i = new FormData(e)
        } else if (function(e) {
            return he(e) && "button" === e.tagName.toLowerCase()
          }(e) || function(e) {
            return he(e) && "input" === e.tagName.toLowerCase()
          }(e) && ("submit" === e.type || "image" === e.type)) {
          let l = e.form;
          if (null == l) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let s = e.getAttribute("formaction") || l.getAttribute("action");
          if (r = s ? (0, a.pb)(s, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || pe, o = ye(e.getAttribute("formenctype")) || ye(l.getAttribute("enctype")) || me, i = new FormData(l, e), ! function() {
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
          n = pe, r = null, o = me, l = e
        }
        var s;
        return i && "text/plain" === o && (l = i, i = void 0), {
          action: r,
          method: n.toLowerCase(),
          encType: o,
          formData: i,
          body: l
        }
      }
      const Ee = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
        Re = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
        Ce = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

      function Se(e, t) {
        return (0, a.aE)({
          basename: null == t ? void 0 : t.basename,
          future: de({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, a.zR)({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || _e(),
          routes: e,
          mapRouteProperties: ue,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function xe(e, t) {
        return (0, a.aE)({
          basename: null == t ? void 0 : t.basename,
          future: de({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, a.TM)({
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
          if (r && "RouteErrorResponse" === r.__type) n[e] = new a.VV(r.status, r.statusText, r.data, !0 === r.internal);
          else if (r && "Error" === r.__type) {
          if (r.__subType) {
            let t = window[r.__subType];
            if ("function" == typeof t) try {
              let a = new t(r.message);
              a.stack = "", n[e] = a
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
        Oe = r.startTransition;
      class ke {
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

      function Ue(e) {
        let {
          fallbackElement: t,
          router: n,
          future: a
        } = e, [o, s] = r.useState(n.state), [u, c] = r.useState(), [d, f] = r.useState({
          isTransitioning: !1
        }), [p, m] = r.useState(), [h, v] = r.useState(), [g, b] = r.useState(), {
          v7_startTransition: y
        } = a || {}, w = r.useCallback((e => {
          y ? function(e) {
            Oe ? Oe(e) : e()
          }(e) : e()
        }), [y]), E = r.useCallback(((e, t) => {
          let {
            unstable_viewTransitionOpts: r
          } = t;
          r && null != n.window && "function" == typeof n.window.document.startViewTransition ? h && p ? (p.resolve(), h.skipTransition(), b({
            state: e,
            currentLocation: r.currentLocation,
            nextLocation: r.nextLocation
          })) : (c(e), f({
            isTransitioning: !0,
            currentLocation: r.currentLocation,
            nextLocation: r.nextLocation
          })) : w((() => s(e)))
        }), [w, h, p, n.window]);
        r.useLayoutEffect((() => n.subscribe(E)), [n, E]), r.useEffect((() => {
          d.isTransitioning && m(new ke)
        }), [d.isTransitioning]), r.useEffect((() => {
          if (p && u && n.window) {
            let e = u,
              t = p.promise,
              r = n.window.document.startViewTransition((async () => {
                w((() => s(e))), await t
              }));
            r.finished.finally((() => {
              m(void 0), v(void 0), c(void 0), f({
                isTransitioning: !1
              })
            })), v(r)
          }
        }), [w, u, p, n.window]), r.useEffect((() => {
          p && u && o.location.key === u.location.key && p.resolve()
        }), [p, h, o.location, u]), r.useEffect((() => {
          !d.isTransitioning && g && (c(g.state), f({
            isTransitioning: !0,
            currentLocation: g.currentLocation,
            nextLocation: g.nextLocation
          }), b(void 0))
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
          value: o
        }, r.createElement(Te.Provider, {
          value: d
        }, r.createElement(ee, {
          basename: C,
          location: o.location,
          navigationType: o.historyAction,
          navigator: R
        }, o.initialized ? r.createElement(De, {
          routes: n.routes,
          state: o
        }) : t)))), null)
      }

      function De(e) {
        let {
          routes: t,
          state: n
        } = e;
        return _(t, void 0, n)
      }

      function Pe(e) {
        let {
          basename: t,
          children: n,
          future: o,
          window: i
        } = e, l = r.useRef();
        null == l.current && (l.current = (0, a.zR)({
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
          } = o || {},
          f = r.useCallback((e => {
            d && Oe ? Oe((() => c(e))) : c(e)
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
          future: o,
          window: i
        } = e, l = r.useRef();
        null == l.current && (l.current = (0, a.TM)({
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
          } = o || {},
          f = r.useCallback((e => {
            d && Oe ? Oe((() => c(e))) : c(e)
          }), [c, d]);
        return r.useLayoutEffect((() => s.listen(f)), [s, f]), r.createElement(ee, {
          basename: t,
          children: n,
          location: u.location,
          navigationType: u.action,
          navigator: s
        })
      }

      function Ne(e) {
        let {
          basename: t,
          children: n,
          future: a,
          history: o
        } = e, [i, l] = r.useState({
          action: o.action,
          location: o.location
        }), {
          v7_startTransition: s
        } = a || {}, u = r.useCallback((e => {
          s && Oe ? Oe((() => l(e))) : l(e)
        }), [l, s]);
        return r.useLayoutEffect((() => o.listen(u)), [o, u]), r.createElement(ee, {
          basename: t,
          children: n,
          location: i.location,
          navigationType: i.action,
          navigator: o
        })
      }
      const Be = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        Fe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Me = r.forwardRef((function(e, t) {
          let n, {
              onClick: o,
              relative: i,
              reloadDocument: l,
              replace: s,
              state: c,
              target: d,
              to: f,
              preventScrollReset: m,
              unstable_viewTransition: h
            } = e,
            v = fe(e, Ee),
            {
              basename: g
            } = r.useContext(u),
            b = !1;
          if ("string" == typeof f && Fe.test(f) && (n = f, Be)) try {
            let e = new URL(window.location.href),
              t = f.startsWith("//") ? new URL(e.protocol + f) : new URL(f),
              n = (0, a.pb)(t.pathname, g);
            t.origin === e.origin && null != n ? f = n + t.search + t.hash : b = !0
          } catch (e) {}
          let y = p(f, {
              relative: i
            }),
            w = Ye(f, {
              replace: s,
              state: c,
              target: d,
              preventScrollReset: m,
              relative: i,
              unstable_viewTransition: h
            });
          return r.createElement("a", de({}, v, {
            href: n || y,
            onClick: b || l ? o : function(e) {
              o && o(e), e.defaultPrevented || w(e)
            },
            ref: t,
            target: d
          }))
        })),
        je = r.forwardRef((function(e, t) {
          let {
            "aria-current": n = "page",
            caseSensitive: a = !1,
            className: o = "",
            end: i = !1,
            style: s,
            to: c,
            unstable_viewTransition: d,
            children: f
          } = e, p = fe(e, Re), m = S(c, {
            relative: p.relative
          }), v = h(), g = r.useContext(l), {
            navigator: b
          } = r.useContext(u), y = null != g && lt(m) && !0 === d, w = b.encodeLocation ? b.encodeLocation(m).pathname : m.pathname, E = v.pathname, R = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
          a || (E = E.toLowerCase(), R = R ? R.toLowerCase() : null, w = w.toLowerCase());
          let C, x = E === w || !i && E.startsWith(w) && "/" === E.charAt(w.length),
            _ = null != R && (R === w || !i && R.startsWith(w) && "/" === R.charAt(w.length)),
            L = {
              isActive: x,
              isPending: _,
              isTransitioning: y
            },
            T = x ? n : void 0;
          C = "function" == typeof o ? o(L) : [o, x ? "active" : null, _ ? "pending" : null, y ? "transitioning" : null].filter(Boolean).join(" ");
          let O = "function" == typeof s ? s(L) : s;
          return r.createElement(Me, de({}, p, {
            "aria-current": T,
            className: C,
            ref: t,
            style: O,
            to: c,
            unstable_viewTransition: d
          }), "function" == typeof f ? f(L) : f)
        })),
        Ie = r.forwardRef(((e, t) => {
          let n = qe();
          return r.createElement(He, de({}, e, {
            submit: n,
            ref: t
          }))
        })),
        He = r.forwardRef(((e, t) => {
          let {
            reloadDocument: n,
            replace: a,
            state: o,
            method: i = pe,
            action: l,
            onSubmit: s,
            submit: u,
            relative: c,
            preventScrollReset: d,
            unstable_viewTransition: f
          } = e, p = fe(e, Ce), m = "get" === i.toLowerCase() ? "get" : "post", h = Ze(l, {
            relative: c
          });
          return r.createElement("form", de({
            ref: t,
            method: m,
            action: h,
            onSubmit: n ? s : e => {
              if (s && s(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                n = (null == t ? void 0 : t.getAttribute("formmethod")) || i;
              u(t || e.currentTarget, {
                method: n,
                replace: a,
                state: o,
                relative: c,
                preventScrollReset: d,
                unstable_viewTransition: f
              })
            }
          }, p))
        }));

      function Ve(e) {
        let {
          getKey: t,
          storageKey: n
        } = e;
        return at({
          getKey: t,
          storageKey: n
        }), null
      }
      var ze, Ke;

      function Je(e) {
        let t = r.useContext(i);
        return t || (0, a.Oi)(!1), t
      }

      function We(e) {
        let t = r.useContext(l);
        return t || (0, a.Oi)(!1), t
      }

      function Ye(e, t) {
        let {
          target: n,
          replace: o,
          state: i,
          preventScrollReset: l,
          relative: s,
          unstable_viewTransition: u
        } = void 0 === t ? {} : t, c = y(), d = h(), f = S(e, {
          relative: s
        });
        return r.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, n)) {
            t.preventDefault();
            let n = void 0 !== o ? o : (0, a.AO)(d) === (0, a.AO)(f);
            c(e, {
              replace: n,
              state: i,
              preventScrollReset: l,
              relative: s,
              unstable_viewTransition: u
            })
          }
        }), [d, c, f, o, i, n, e, l, s, u])
      }

      function Ge(e) {
        let t = r.useRef(ve(e)),
          n = r.useRef(!1),
          a = h(),
          o = r.useMemo((() => function(e, t) {
            let n = ve(e);
            return t && t.forEach(((e, r) => {
              n.has(r) || t.getAll(r).forEach((e => {
                n.append(r, e)
              }))
            })), n
          }(a.search, n.current ? null : t.current)), [a.search]),
          i = y(),
          l = r.useCallback(((e, t) => {
            const r = ve("function" == typeof e ? e(o) : e);
            n.current = !0, i("?" + r, t)
          }), [i, o]);
        return [o, l]
      }

      function Xe() {
        if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
      }

      function qe() {
        let {
          router: e
        } = Je(ze.UseSubmit), {
          basename: t
        } = r.useContext(u), n = F();
        return r.useCallback((function(r, a) {
          void 0 === a && (a = {}), Xe();
          let {
            action: o,
            method: i,
            encType: l,
            formData: s,
            body: u
          } = we(r, t);
          e.navigate(a.action || o, {
            preventScrollReset: a.preventScrollReset,
            formData: s,
            body: u,
            formMethod: a.method || i,
            formEncType: a.encType || l,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            unstable_viewTransition: a.unstable_viewTransition
          })
        }), [e, t, n])
      }

      function Qe(e, t) {
        let {
          router: n
        } = Je(ze.UseSubmitFetcher), {
          basename: o
        } = r.useContext(u);
        return r.useCallback((function(r, i) {
          void 0 === i && (i = {}), Xe();
          let {
            action: l,
            method: s,
            encType: u,
            formData: c,
            body: d
          } = we(r, o);
          null == t && (0, a.Oi)(!1), n.fetch(e, t, i.action || l, {
            preventScrollReset: i.preventScrollReset,
            formData: c,
            body: d,
            formMethod: i.method || s,
            formEncType: i.encType || u
          })
        }), [n, o, e, t])
      }

      function Ze(e, t) {
        let {
          relative: n
        } = void 0 === t ? {} : t, {
          basename: o
        } = r.useContext(u), i = r.useContext(d);
        i || (0, a.Oi)(!1);
        let [l] = i.matches.slice(-1), s = de({}, S(e || ".", {
          relative: n
        })), c = h();
        if (null == e && (s.search = c.search, l.route.index)) {
          let e = new URLSearchParams(s.search);
          e.delete("index"), s.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !l.route.index || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), "/" !== o && (s.pathname = "/" === s.pathname ? o : (0, a.HS)([o, s.pathname])), (0, a.AO)(s)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(ze || (ze = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(Ke || (Ke = {}));
      let $e = 0;

      function et() {
        var e;
        let {
          router: t
        } = Je(ze.UseFetcher), n = r.useContext(d);
        n || (0, a.Oi)(!1);
        let o = null == (e = n.matches[n.matches.length - 1]) ? void 0 : e.route.id;
        null == o && (0, a.Oi)(!1);
        let [i] = r.useState((() => String(++$e))), [l] = r.useState((() => (o || (0, a.Oi)(!1), function(e, t) {
          return r.forwardRef(((n, a) => {
            let o = Qe(e, t);
            return r.createElement(He, de({}, n, {
              ref: a,
              submit: o
            }))
          }))
        }(i, o)))), [s] = r.useState((() => e => {
          t || (0, a.Oi)(!1), o || (0, a.Oi)(!1), t.fetch(i, o, e)
        })), u = Qe(i, o), c = t.getFetcher(i), f = r.useMemo((() => de({
          Form: l,
          submit: u,
          load: s
        }, c)), [c, l, u, s]);
        return r.useEffect((() => () => {
          t ? t.deleteFetcher(i) : console.warn("No router available to clean up from useFetcher()")
        }), [t, i]), f
      }

      function tt() {
        return [...We(Ke.UseFetchers).fetchers.values()]
      }
      const nt = "react-router-scroll-positions";
      let rt = {};

      function at(e) {
        let {
          getKey: t,
          storageKey: n
        } = void 0 === e ? {} : e, {
          router: o
        } = Je(ze.UseScrollRestoration), {
          restoreScrollPosition: i,
          preventScrollReset: l
        } = We(Ke.UseScrollRestoration), {
          basename: s
        } = r.useContext(u), c = h(), d = I(), f = M();
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
                pathname: (0, a.pb)(e.pathname, s) || e.pathname
              }), n) : t,
              n = null == o ? void 0 : o.enableScrollRestoration(rt, (() => window.scrollY), e);
            return () => n && n()
          }), [o, s, t]), r.useLayoutEffect((() => {
            if (!1 !== i)
              if ("number" != typeof i) {
                if (c.hash) {
                  let e = document.getElementById(decodeURIComponent(c.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== l && window.scrollTo(0, 0)
              } else window.scrollTo(0, i)
          }), [c, i, l]))
      }

      function ot(e, t) {
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
        } = e, a = G(t);
        r.useEffect((() => {
          "blocked" === a.state && (window.confirm(n) ? setTimeout(a.proceed, 0) : a.reset())
        }), [a, n]), r.useEffect((() => {
          "blocked" !== a.state || t || a.reset()
        }), [a, t])
      }

      function lt(e, t) {
        void 0 === t && (t = {});
        let n = r.useContext(Te);
        null == n && (0, a.Oi)(!1);
        let {
          basename: o
        } = Je(ze.useViewTransitionState), i = S(e, {
          relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let l = (0, a.pb)(n.currentLocation.pathname, o) || n.currentLocation.pathname,
          s = (0, a.pb)(n.nextLocation.pathname, o) || n.nextLocation.pathname;
        return null != (0, a.B6)(i.pathname, s) || null != (0, a.B6)(i.pathname, l)
      }
    }
  }
]);