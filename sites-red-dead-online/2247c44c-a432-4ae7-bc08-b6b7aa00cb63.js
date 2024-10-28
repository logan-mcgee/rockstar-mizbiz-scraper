! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2247c44c-a432-4ae7-bc08-b6b7aa00cb63", e._sentryDebugIdIdentifier = "sentry-dbid-2247c44c-a432-4ae7-bc08-b6b7aa00cb63")
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
  [105], {
    64105: (e, t, r) => {
      r.d(t, {
        $3: () => M,
        $P: () => f,
        AV: () => le,
        BS: () => $,
        BV: () => te,
        C5: () => X,
        Eu: () => le,
        Ew: () => H,
        FE: () => J,
        Ix: () => ee,
        J8: () => q,
        KC: () => C,
        KT: () => ue,
        LG: () => F,
        P1: () => x,
        RQ: () => g,
        Ri: () => h,
        Rq: () => l,
        UX: () => d,
        Ye: () => R,
        Zp: () => y,
        bg: () => ce,
        cq: () => T,
        fS: () => Q,
        g: () => _,
        jD: () => re,
        jb: () => s,
        mP: () => G,
        oI: () => V,
        ph: () => k,
        qh: () => Z,
        r5: () => z,
        sp: () => i,
        sv: () => W,
        vL: () => A,
        wE: () => se,
        wQ: () => v,
        x$: () => O,
        yN: () => c,
        zy: () => m
      });
      var n = r(71403),
        a = r(15261);

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

      function f(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        h() || (0, a.Oi)(!1);
        let {
          basename: o,
          navigator: i
        } = n.useContext(s), {
          hash: l,
          pathname: u,
          search: c
        } = O(e, {
          relative: r
        }), d = u;
        return "/" !== o && (d = "/" === u ? o : (0, a.HS)([o, u])), i.createHref({
          pathname: d,
          search: c,
          hash: l
        })
      }

      function h() {
        return null != n.useContext(c)
      }

      function m() {
        return h() || (0, a.Oi)(!1), n.useContext(c).location
      }

      function v() {
        return n.useContext(c).navigationType
      }

      function g(e) {
        h() || (0, a.Oi)(!1);
        let {
          pathname: t
        } = m();
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
          } = j(w.UseNavigateStable), t = I(L.UseNavigateStable), r = n.useRef(!1);
          return E((() => {
            r.current = !0
          })), n.useCallback((function(n, a) {
            void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, o({
              fromRouteId: t
            }, a)))
          }), [e, t])
        }() : function() {
          h() || (0, a.Oi)(!1);
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
            } = m(),
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

      function x(e) {
        let t = n.useContext(d).outlet;
        return t ? n.createElement(b.Provider, {
          value: e
        }, t) : t
      }

      function _() {
        let {
          matches: e
        } = n.useContext(d), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function O(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: o
        } = n.useContext(d), {
          pathname: i
        } = m(), l = JSON.stringify((0, a.sd)(o).map((e => e.pathnameBase)));
        return n.useMemo((() => (0, a.Gh)(e, JSON.parse(l), i, "path" === r)), [e, l, i, r])
      }

      function R(e, t) {
        return k(e, t)
      }

      function k(e, t, r) {
        h() || (0, a.Oi)(!1);
        let {
          navigator: i
        } = n.useContext(s), {
          matches: l
        } = n.useContext(d), u = l[l.length - 1], p = u ? u.params : {}, f = (u && u.pathname, u ? u.pathnameBase : "/");
        u && u.route;
        let v, g = m();
        if (t) {
          var E;
          let e = "string" == typeof t ? (0, a.Rr)(t) : t;
          "/" === f || (null == (E = e.pathname) ? void 0 : E.startsWith(f)) || (0, a.Oi)(!1), v = e
        } else v = g;
        let y = v.pathname || "/",
          b = "/" === f ? y : y.slice(f.length) || "/",
          C = (0, a.ue)(e, {
            pathname: b
          }),
          x = S(C && C.map((e => Object.assign({}, e, {
            params: Object.assign({}, p, e.params),
            pathname: (0, a.HS)([f, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? f : (0, a.HS)([f, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
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
            navigationType: a.rc.Pop
          }
        }, x) : x
      }

      function B() {
        let e = z(),
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
      const D = n.createElement(B, null);
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

      function P(e) {
        let {
          routeContext: t,
          match: r,
          children: a
        } = e, o = n.useContext(i);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(d.Provider, {
          value: t
        }, a)
      }

      function S(e, t, r) {
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
              return t = i ? s : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(P, {
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
      var w = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(w || {}),
        L = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(L || {});

      function j(e) {
        let t = n.useContext(i);
        return t || (0, a.Oi)(!1), t
      }

      function N(e) {
        let t = n.useContext(l);
        return t || (0, a.Oi)(!1), t
      }

      function I(e) {
        let t = function(e) {
            let t = n.useContext(d);
            return t || (0, a.Oi)(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || (0, a.Oi)(!1), r.route.id
      }

      function M() {
        return I(L.UseRouteId)
      }

      function T() {
        return N(L.UseNavigation).navigation
      }

      function A() {
        let e = j(w.UseRevalidator),
          t = N(L.UseRevalidator);
        return n.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function J() {
        let {
          matches: e,
          loaderData: t
        } = N(L.UseMatches);
        return n.useMemo((() => e.map((e => (0, a.ro)(e, t)))), [e, t])
      }

      function F() {
        let e = N(L.UseLoaderData),
          t = I(L.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function H(e) {
        return N(L.UseRouteLoaderData).loaderData[e]
      }

      function G() {
        let e = N(L.UseActionData);
        return n.useContext(d) || (0, a.Oi)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function z() {
        var e;
        let t = n.useContext(p),
          r = N(L.UseRouteError),
          a = I(L.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[a])
      }

      function q() {
        let e = n.useContext(u);
        return null == e ? void 0 : e._data
      }

      function V() {
        let e = n.useContext(u);
        return null == e ? void 0 : e._error
      }
      let Y = 0;

      function $(e) {
        let {
          router: t,
          basename: r
        } = j(w.UseBlocker), i = N(L.UseBlocker), [l, u] = n.useState(""), s = n.useCallback((t => {
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
          let e = String(++Y);
          return u(e), () => t.deleteBlocker(e)
        }), [t]), n.useEffect((() => {
          "" !== l && t.getBlocker(l, s)
        }), [t, l, s]), l && i.blockers.has(l) ? i.blockers.get(l) : a.G3
      }
      const K = n.startTransition;

      function Q(e) {
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
          f = n.useCallback((e => {
            p && K ? K((() => d(e))) : d(e)
          }), [d, p]);
        return n.useLayoutEffect((() => s.listen(f)), [s, f]), n.createElement(ee, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: s
        })
      }

      function X(e) {
        let {
          to: t,
          replace: r,
          state: o,
          relative: i
        } = e;
        h() || (0, a.Oi)(!1);
        let {
          matches: l
        } = n.useContext(d), {
          pathname: u
        } = m(), s = y(), c = (0, a.Gh)(t, (0, a.sd)(l).map((e => e.pathnameBase)), u, "path" === i), p = JSON.stringify(c);
        return n.useEffect((() => s(JSON.parse(p), {
          replace: r,
          state: o,
          relative: i
        })), [s, p, i, r, o]), null
      }

      function W(e) {
        return x(e.context)
      }

      function Z(e) {
        (0, a.Oi)(!1)
      }

      function ee(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = a.rc.Pop,
          navigator: l,
          static: u = !1
        } = e;
        h() && (0, a.Oi)(!1);
        let d = t.replace(/^\/*/, "/"),
          p = n.useMemo((() => ({
            basename: d,
            navigator: l,
            static: u
          })), [d, l, u]);
        "string" == typeof o && (o = (0, a.Rr)(o));
        let {
          pathname: f = "/",
          search: m = "",
          hash: v = "",
          state: g = null,
          key: E = "default"
        } = o, y = n.useMemo((() => {
          let e = (0, a.pb)(f, d);
          return null == e ? null : {
            location: {
              pathname: e,
              search: m,
              hash: v,
              state: g,
              key: E
            },
            navigationType: i
          }
        }), [d, f, m, v, g, E, i]);
        return null == y ? null : n.createElement(s.Provider, {
          value: p
        }, n.createElement(c.Provider, {
          children: r,
          value: y
        }))
      }

      function te(e) {
        let {
          children: t,
          location: r
        } = e;
        return R(le(t), r)
      }

      function re(e) {
        let {
          children: t,
          errorElement: r,
          resolve: a
        } = e;
        return n.createElement(oe, {
          resolve: a,
          errorElement: r
        }, n.createElement(ie, null, t))
      }
      var ne = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(ne || {});
      const ae = new Promise((() => {}));
      class oe extends n.Component {
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
          } = this.props, o = null, i = ne.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              i = ne.error;
              let e = this.state.error;
              o = Promise.reject().catch((() => {})), Object.defineProperty(o, "_tracked", {
                get: () => !0
              }), Object.defineProperty(o, "_error", {
                get: () => e
              })
            } else r._tracked ? (o = r, i = void 0 !== o._error ? ne.error : void 0 !== o._data ? ne.success : ne.pending) : (i = ne.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), o = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else i = ne.success, o = Promise.resolve(), Object.defineProperty(o, "_tracked", {
            get: () => !0
          }), Object.defineProperty(o, "_data", {
            get: () => r
          });
          if (i === ne.error && o._error instanceof a.tH) throw ae;
          if (i === ne.error && !t) throw o._error;
          if (i === ne.error) return n.createElement(u.Provider, {
            value: o,
            children: t
          });
          if (i === ne.success) return n.createElement(u.Provider, {
            value: o,
            children: e
          });
          throw o
        }
      }

      function ie(e) {
        let {
          children: t
        } = e, r = q(), a = "function" == typeof t ? t(r) : t;
        return n.createElement(n.Fragment, null, a)
      }

      function le(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return n.Children.forEach(e, ((e, o) => {
          if (!n.isValidElement(e)) return;
          let i = [...t, o];
          if (e.type === n.Fragment) return void r.push.apply(r, le(e.props.children, i));
          e.type !== Z && (0, a.Oi)(!1), e.props.index && e.props.children && (0, a.Oi)(!1);
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
          e.props.children && (l.children = le(e.props.children, i)), r.push(l)
        })), r
      }

      function ue(e) {
        return S(e)
      }

      function se(e) {
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
          mapRouteProperties: se
        }).initialize()
      }
    }
  }
]);