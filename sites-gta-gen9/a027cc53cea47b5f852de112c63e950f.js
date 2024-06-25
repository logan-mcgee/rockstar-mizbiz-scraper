! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "91cd6cc9-864f-4eb9-90f5-e24d52b8d0b1", e._sentryDebugIdIdentifier = "sentry-dbid-91cd6cc9-864f-4eb9-90f5-e24d52b8d0b1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [9088], {
    79088: (e, t, r) => {
      r.d(t, {
        $m: () => W,
        C5: () => H,
        CF: () => le,
        Cu: () => l,
        E5: () => ee,
        EN: () => d,
        ER: () => T,
        GY: () => F,
        IT: () => h,
        Iz: () => m,
        KM: () => v,
        Mh: () => i,
        Mz: () => C,
        SC: () => g,
        W4: () => _,
        WM: () => N,
        YX: () => $,
        Yi: () => I,
        Yj: () => ce,
        Yp: () => z,
        _W: () => c,
        _y: () => le,
        ag: () => x,
        c3: () => Y,
        c5: () => te,
        co: () => f,
        g5: () => re,
        i0: () => se,
        i6: () => E,
        kX: () => Z,
        oT: () => k,
        oj: () => D,
        qG: () => G,
        qW: () => ue,
        wF: () => V,
        wh: () => R,
        y8: () => A,
        yY: () => Q,
        y_: () => J,
        yo: () => s
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

      function f(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        m() || (0, a.q4)(!1);
        let {
          basename: o,
          navigator: i
        } = n.useContext(s), {
          hash: l,
          pathname: u,
          search: c
        } = k(e, {
          relative: r
        }), d = u;
        return "/" !== o && (d = "/" === u ? o : (0, a.En)([o, u])), i.createHref({
          pathname: d,
          search: c,
          hash: l
        })
      }

      function m() {
        return null != n.useContext(c)
      }

      function h() {
        return m() || (0, a.q4)(!1), n.useContext(c).location
      }

      function v() {
        return n.useContext(c).navigationType
      }

      function g(e) {
        m() || (0, a.q4)(!1);
        let {
          pathname: t
        } = h();
        return n.useMemo((() => (0, a.ot)(e, t)), [t, e])
      }

      function y(e) {
        n.useContext(s).static || n.useLayoutEffect(e)
      }

      function E() {
        let {
          isDataRoute: e
        } = n.useContext(d);
        return e ? function() {
          let {
            router: e
          } = j(S.UseNavigateStable), t = L(M.UseNavigateStable), r = n.useRef(!1);
          return y((() => {
            r.current = !0
          })), n.useCallback((function(n, a) {
            void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, o({
              fromRouteId: t
            }, a)))
          }), [e, t])
        }() : function() {
          m() || (0, a.q4)(!1);
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
            u = JSON.stringify((0, a.em)(o).map((e => e.pathnameBase))),
            c = n.useRef(!1);
          return y((() => {
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

      function _() {
        let {
          matches: e
        } = n.useContext(d), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function k(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: o
        } = n.useContext(d), {
          pathname: i
        } = h(), l = JSON.stringify((0, a.em)(o).map((e => e.pathnameBase)));
        return n.useMemo((() => (0, a._)(e, JSON.parse(l), i, "path" === r)), [e, l, i, r])
      }

      function R(e, t) {
        return D(e, t)
      }

      function D(e, t, r) {
        m() || (0, a.q4)(!1);
        let {
          navigator: i
        } = n.useContext(s), {
          matches: l
        } = n.useContext(d), u = l[l.length - 1], p = u ? u.params : {}, f = (u && u.pathname, u ? u.pathnameBase : "/");
        u && u.route;
        let v, g = h();
        if (t) {
          var y;
          let e = "string" == typeof t ? (0, a.O8)(t) : t;
          "/" === f || (null == (y = e.pathname) ? void 0 : y.startsWith(f)) || (0, a.q4)(!1), v = e
        } else v = g;
        let E = v.pathname || "/",
          b = "/" === f ? E : E.slice(f.length) || "/",
          C = (0, a.Cm)(e, {
            pathname: b
          }),
          x = P(C && C.map((e => Object.assign({}, e, {
            params: Object.assign({}, p, e.params),
            pathname: (0, a.En)([f, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? f : (0, a.En)([f, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
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

      function B() {
        let e = J(),
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
      const U = n.createElement(B, null);
      class w extends n.Component {
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

      function O(e) {
        let {
          routeContext: t,
          match: r,
          children: a
        } = e, o = n.useContext(i);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(d.Provider, {
          value: t
        }, a)
      }

      function P(e, t, r) {
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
          r && (s = a.route.errorElement || U);
          let c = t.concat(l.slice(0, o + 1)),
            d = () => {
              let t;
              return t = i ? s : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(O, {
                match: a,
                routeContext: {
                  outlet: e,
                  matches: c,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o) ? n.createElement(w, {
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
      var S = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(S || {}),
        M = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(M || {});

      function j(e) {
        let t = n.useContext(i);
        return t || (0, a.q4)(!1), t
      }

      function q(e) {
        let t = n.useContext(l);
        return t || (0, a.q4)(!1), t
      }

      function L(e) {
        let t = function(e) {
            let t = n.useContext(d);
            return t || (0, a.q4)(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || (0, a.q4)(!1), r.route.id
      }

      function N() {
        return L(M.UseRouteId)
      }

      function I() {
        return q(M.UseNavigation).navigation
      }

      function T() {
        let e = j(S.UseRevalidator),
          t = q(M.UseRevalidator);
        return n.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function A() {
        let {
          matches: e,
          loaderData: t
        } = q(M.UseMatches);
        return n.useMemo((() => e.map((e => (0, a.WM)(e, t)))), [e, t])
      }

      function F() {
        let e = q(M.UseLoaderData),
          t = L(M.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function W(e) {
        return q(M.UseRouteLoaderData).loaderData[e]
      }

      function Y() {
        let e = q(M.UseActionData);
        return n.useContext(d) || (0, a.q4)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function J() {
        var e;
        let t = n.useContext(p),
          r = q(M.UseRouteError),
          a = L(M.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[a])
      }

      function z() {
        let e = n.useContext(u);
        return null == e ? void 0 : e._data
      }

      function G() {
        let e = n.useContext(u);
        return null == e ? void 0 : e._error
      }
      let X = 0;

      function H(e) {
        let {
          router: t,
          basename: r
        } = j(S.UseBlocker), i = q(M.UseBlocker), [l, u] = n.useState(""), s = n.useCallback((t => {
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
          let e = String(++X);
          return u(e), () => t.deleteBlocker(e)
        }), [t]), n.useEffect((() => {
          "" !== l && t.getBlocker(l, s)
        }), [t, l, s]), l && i.blockers.has(l) ? i.blockers.get(l) : a.ie
      }
      const K = n.startTransition;

      function V(e) {
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

      function $(e) {
        let {
          to: t,
          replace: r,
          state: o,
          relative: i
        } = e;
        m() || (0, a.q4)(!1);
        let {
          matches: l
        } = n.useContext(d), {
          pathname: u
        } = h(), s = E(), c = (0, a._)(t, (0, a.em)(l).map((e => e.pathnameBase)), u, "path" === i), p = JSON.stringify(c);
        return n.useEffect((() => s(JSON.parse(p), {
          replace: r,
          state: o,
          relative: i
        })), [s, p, i, r, o]), null
      }

      function Q(e) {
        return x(e.context)
      }

      function Z(e) {
        (0, a.q4)(!1)
      }

      function ee(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = a.So.Pop,
          navigator: l,
          static: u = !1
        } = e;
        m() && (0, a.q4)(!1);
        let d = t.replace(/^\/*/, "/"),
          p = n.useMemo((() => ({
            basename: d,
            navigator: l,
            static: u
          })), [d, l, u]);
        "string" == typeof o && (o = (0, a.O8)(o));
        let {
          pathname: f = "/",
          search: h = "",
          hash: v = "",
          state: g = null,
          key: y = "default"
        } = o, E = n.useMemo((() => {
          let e = (0, a.mc)(f, d);
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
        }), [d, f, h, v, g, y, i]);
        return null == E ? null : n.createElement(s.Provider, {
          value: p
        }, n.createElement(c.Provider, {
          children: r,
          value: E
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
          if (i === ne.error && o._error instanceof a.ay) throw ae;
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
        } = e, r = z(), a = "function" == typeof t ? t(r) : t;
        return n.createElement(n.Fragment, null, a)
      }

      function le(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return n.Children.forEach(e, ((e, o) => {
          if (!n.isValidElement(e)) return;
          let i = [...t, o];
          if (e.type === n.Fragment) return void r.push.apply(r, le(e.props.children, i));
          e.type !== Z && (0, a.q4)(!1), e.props.index && e.props.children && (0, a.q4)(!1);
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
        return P(e)
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
          mapRouteProperties: se
        }).initialize()
      }
    }
  }
]);