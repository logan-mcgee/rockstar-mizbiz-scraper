! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3da5f477-669c-43cc-88c5-9d1756155b13", e._sentryDebugIdIdentifier = "sentry-dbid-3da5f477-669c-43cc-88c5-9d1756155b13")
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
  [4105], {
    64105: (e, t, r) => {
      r.d(t, {
        $3: () => B,
        $P: () => f,
        AV: () => le,
        BS: () => V,
        BV: () => te,
        C5: () => X,
        Eu: () => le,
        Ew: () => $,
        FE: () => z,
        Ix: () => ee,
        J8: () => q,
        KC: () => E,
        KT: () => se,
        LG: () => W,
        P1: () => x,
        RQ: () => g,
        Ri: () => p,
        Rq: () => l,
        UX: () => d,
        Ye: () => S,
        Zp: () => b,
        bg: () => ue,
        cq: () => I,
        fS: () => G,
        g: () => D,
        jD: () => re,
        jb: () => c,
        mP: () => F,
        oI: () => J,
        ph: () => C,
        qh: () => Z,
        r5: () => H,
        sp: () => i,
        sv: () => Q,
        vL: () => N,
        wE: () => ce,
        wQ: () => v,
        x$: () => R,
        yN: () => u,
        zy: () => m
      });
      var n = r(71403),
        o = r(15261);

      function a() {
        return a = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, a.apply(this, arguments)
      }
      const i = n.createContext(null),
        l = n.createContext(null),
        s = n.createContext(null),
        c = n.createContext(null),
        u = n.createContext(null),
        d = n.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        h = n.createContext(null);

      function f(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        p() || (0, o.Oi)(!1);
        let {
          basename: a,
          navigator: i
        } = n.useContext(c), {
          hash: l,
          pathname: s,
          search: u
        } = R(e, {
          relative: r
        }), d = s;
        return "/" !== a && (d = "/" === s ? a : (0, o.HS)([a, s])), i.createHref({
          pathname: d,
          search: u,
          hash: l
        })
      }

      function p() {
        return null != n.useContext(u)
      }

      function m() {
        return p() || (0, o.Oi)(!1), n.useContext(u).location
      }

      function v() {
        return n.useContext(u).navigationType
      }

      function g(e) {
        p() || (0, o.Oi)(!1);
        let {
          pathname: t
        } = m();
        return n.useMemo((() => (0, o.B6)(e, t)), [t, e])
      }

      function y(e) {
        n.useContext(c).static || n.useLayoutEffect(e)
      }

      function b() {
        let {
          isDataRoute: e
        } = n.useContext(d);
        return e ? function() {
          let {
            router: e
          } = U(O.UseNavigateStable), t = T(A.UseNavigateStable), r = n.useRef(!1);
          return y((() => {
            r.current = !0
          })), n.useCallback((function(n, o) {
            void 0 === o && (o = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, a({
              fromRouteId: t
            }, o)))
          }), [e, t])
        }() : function() {
          p() || (0, o.Oi)(!1);
          let e = n.useContext(i),
            {
              basename: t,
              navigator: r
            } = n.useContext(c),
            {
              matches: a
            } = n.useContext(d),
            {
              pathname: l
            } = m(),
            s = JSON.stringify((0, o.sd)(a).map((e => e.pathnameBase))),
            u = n.useRef(!1);
          return y((() => {
            u.current = !0
          })), n.useCallback((function(n, a) {
            if (void 0 === a && (a = {}), !u.current) return;
            if ("number" == typeof n) return void r.go(n);
            let i = (0, o.Gh)(n, JSON.parse(s), l, "path" === a.relative);
            null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : (0, o.HS)([t, i.pathname])), (a.replace ? r.replace : r.push)(i, a.state, a)
          }), [t, r, s, l, e])
        }()
      }
      const w = n.createContext(null);

      function E() {
        return n.useContext(w)
      }

      function x(e) {
        let t = n.useContext(d).outlet;
        return t ? n.createElement(w.Provider, {
          value: e
        }, t) : t
      }

      function D() {
        let {
          matches: e
        } = n.useContext(d), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function R(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: a
        } = n.useContext(d), {
          pathname: i
        } = m(), l = JSON.stringify((0, o.sd)(a).map((e => e.pathnameBase)));
        return n.useMemo((() => (0, o.Gh)(e, JSON.parse(l), i, "path" === r)), [e, l, i, r])
      }

      function S(e, t) {
        return C(e, t)
      }

      function C(e, t, r) {
        p() || (0, o.Oi)(!1);
        let {
          navigator: i
        } = n.useContext(c), {
          matches: l
        } = n.useContext(d), s = l[l.length - 1], h = s ? s.params : {}, f = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let v, g = m();
        if (t) {
          var y;
          let e = "string" == typeof t ? (0, o.Rr)(t) : t;
          "/" === f || (null == (y = e.pathname) ? void 0 : y.startsWith(f)) || (0, o.Oi)(!1), v = e
        } else v = g;
        let b = v.pathname || "/",
          w = "/" === f ? b : b.slice(f.length) || "/",
          E = (0, o.ue)(e, {
            pathname: w
          }),
          x = j(E && E.map((e => Object.assign({}, e, {
            params: Object.assign({}, h, e.params),
            pathname: (0, o.HS)([f, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? f : (0, o.HS)([f, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), l, r);
        return t && x ? n.createElement(u.Provider, {
          value: {
            location: a({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, v),
            navigationType: o.rc.Pop
          }
        }, x) : x
      }

      function P() {
        let e = H(),
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
      const k = n.createElement(P, null);
      class L extends n.Component {
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
          }, n.createElement(h.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function M(e) {
        let {
          routeContext: t,
          match: r,
          children: o
        } = e, a = n.useContext(i);
        return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(d.Provider, {
          value: t
        }, o)
      }

      function j(e, t, r) {
        var a;
        if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
          var i;
          if (null == (i = r) || !i.errors) return null;
          e = r.matches
        }
        let l = e,
          s = null == (a = r) ? void 0 : a.errors;
        if (null != s) {
          let e = l.findIndex((e => e.route.id && (null == s ? void 0 : s[e.route.id])));
          e >= 0 || (0, o.Oi)(!1), l = l.slice(0, Math.min(l.length, e + 1))
        }
        return l.reduceRight(((e, o, a) => {
          let i = o.route.id ? null == s ? void 0 : s[o.route.id] : null,
            c = null;
          r && (c = o.route.errorElement || k);
          let u = t.concat(l.slice(0, a + 1)),
            d = () => {
              let t;
              return t = i ? c : o.route.Component ? n.createElement(o.route.Component, null) : o.route.element ? o.route.element : e, n.createElement(M, {
                match: o,
                routeContext: {
                  outlet: e,
                  matches: u,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (o.route.ErrorBoundary || o.route.errorElement || 0 === a) ? n.createElement(L, {
            location: r.location,
            revalidation: r.revalidation,
            component: c,
            error: i,
            children: d(),
            routeContext: {
              outlet: null,
              matches: u,
              isDataRoute: !0
            }
          }) : d()
        }), null)
      }
      var O = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(O || {}),
        A = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(A || {});

      function U(e) {
        let t = n.useContext(i);
        return t || (0, o.Oi)(!1), t
      }

      function _(e) {
        let t = n.useContext(l);
        return t || (0, o.Oi)(!1), t
      }

      function T(e) {
        let t = function(e) {
            let t = n.useContext(d);
            return t || (0, o.Oi)(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || (0, o.Oi)(!1), r.route.id
      }

      function B() {
        return T(A.UseRouteId)
      }

      function I() {
        return _(A.UseNavigation).navigation
      }

      function N() {
        let e = U(O.UseRevalidator),
          t = _(A.UseRevalidator);
        return n.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function z() {
        let {
          matches: e,
          loaderData: t
        } = _(A.UseMatches);
        return n.useMemo((() => e.map((e => (0, o.ro)(e, t)))), [e, t])
      }

      function W() {
        let e = _(A.UseLoaderData),
          t = T(A.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function $(e) {
        return _(A.UseRouteLoaderData).loaderData[e]
      }

      function F() {
        let e = _(A.UseActionData);
        return n.useContext(d) || (0, o.Oi)(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function H() {
        var e;
        let t = n.useContext(h),
          r = _(A.UseRouteError),
          o = T(A.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[o])
      }

      function q() {
        let e = n.useContext(s);
        return null == e ? void 0 : e._data
      }

      function J() {
        let e = n.useContext(s);
        return null == e ? void 0 : e._error
      }
      let K = 0;

      function V(e) {
        let {
          router: t,
          basename: r
        } = U(O.UseBlocker), i = _(A.UseBlocker), [l, s] = n.useState(""), c = n.useCallback((t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: n,
            nextLocation: i,
            historyAction: l
          } = t;
          return e({
            currentLocation: a({}, n, {
              pathname: (0, o.pb)(n.pathname, r) || n.pathname
            }),
            nextLocation: a({}, i, {
              pathname: (0, o.pb)(i.pathname, r) || i.pathname
            }),
            historyAction: l
          })
        }), [r, e]);
        return n.useEffect((() => {
          let e = String(++K);
          return s(e), () => t.deleteBlocker(e)
        }), [t]), n.useEffect((() => {
          "" !== l && t.getBlocker(l, c)
        }), [t, l, c]), l && i.blockers.has(l) ? i.blockers.get(l) : o.G3
      }
      const Y = n.startTransition;

      function G(e) {
        let {
          basename: t,
          children: r,
          initialEntries: a,
          initialIndex: i,
          future: l
        } = e, s = n.useRef();
        null == s.current && (s.current = (0, o.sC)({
          initialEntries: a,
          initialIndex: i,
          v5Compat: !0
        }));
        let c = s.current,
          [u, d] = n.useState({
            action: c.action,
            location: c.location
          }),
          {
            v7_startTransition: h
          } = l || {},
          f = n.useCallback((e => {
            h && Y ? Y((() => d(e))) : d(e)
          }), [d, h]);
        return n.useLayoutEffect((() => c.listen(f)), [c, f]), n.createElement(ee, {
          basename: t,
          children: r,
          location: u.location,
          navigationType: u.action,
          navigator: c
        })
      }

      function X(e) {
        let {
          to: t,
          replace: r,
          state: a,
          relative: i
        } = e;
        p() || (0, o.Oi)(!1);
        let {
          matches: l
        } = n.useContext(d), {
          pathname: s
        } = m(), c = b(), u = (0, o.Gh)(t, (0, o.sd)(l).map((e => e.pathnameBase)), s, "path" === i), h = JSON.stringify(u);
        return n.useEffect((() => c(JSON.parse(h), {
          replace: r,
          state: a,
          relative: i
        })), [c, h, i, r, a]), null
      }

      function Q(e) {
        return x(e.context)
      }

      function Z(e) {
        (0, o.Oi)(!1)
      }

      function ee(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: a,
          navigationType: i = o.rc.Pop,
          navigator: l,
          static: s = !1
        } = e;
        p() && (0, o.Oi)(!1);
        let d = t.replace(/^\/*/, "/"),
          h = n.useMemo((() => ({
            basename: d,
            navigator: l,
            static: s
          })), [d, l, s]);
        "string" == typeof a && (a = (0, o.Rr)(a));
        let {
          pathname: f = "/",
          search: m = "",
          hash: v = "",
          state: g = null,
          key: y = "default"
        } = a, b = n.useMemo((() => {
          let e = (0, o.pb)(f, d);
          return null == e ? null : {
            location: {
              pathname: e,
              search: m,
              hash: v,
              state: g,
              key: y
            },
            navigationType: i
          }
        }), [d, f, m, v, g, y, i]);
        return null == b ? null : n.createElement(c.Provider, {
          value: h
        }, n.createElement(u.Provider, {
          children: r,
          value: b
        }))
      }

      function te(e) {
        let {
          children: t,
          location: r
        } = e;
        return S(le(t), r)
      }

      function re(e) {
        let {
          children: t,
          errorElement: r,
          resolve: o
        } = e;
        return n.createElement(ae, {
          resolve: o,
          errorElement: r
        }, n.createElement(ie, null, t))
      }
      var ne = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(ne || {});
      const oe = new Promise((() => {}));
      class ae extends n.Component {
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
          } = this.props, a = null, i = ne.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              i = ne.error;
              let e = this.state.error;
              a = Promise.reject().catch((() => {})), Object.defineProperty(a, "_tracked", {
                get: () => !0
              }), Object.defineProperty(a, "_error", {
                get: () => e
              })
            } else r._tracked ? (a = r, i = void 0 !== a._error ? ne.error : void 0 !== a._data ? ne.success : ne.pending) : (i = ne.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), a = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else i = ne.success, a = Promise.resolve(), Object.defineProperty(a, "_tracked", {
            get: () => !0
          }), Object.defineProperty(a, "_data", {
            get: () => r
          });
          if (i === ne.error && a._error instanceof o.tH) throw oe;
          if (i === ne.error && !t) throw a._error;
          if (i === ne.error) return n.createElement(s.Provider, {
            value: a,
            children: t
          });
          if (i === ne.success) return n.createElement(s.Provider, {
            value: a,
            children: e
          });
          throw a
        }
      }

      function ie(e) {
        let {
          children: t
        } = e, r = q(), o = "function" == typeof t ? t(r) : t;
        return n.createElement(n.Fragment, null, o)
      }

      function le(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return n.Children.forEach(e, ((e, a) => {
          if (!n.isValidElement(e)) return;
          let i = [...t, a];
          if (e.type === n.Fragment) return void r.push.apply(r, le(e.props.children, i));
          e.type !== Z && (0, o.Oi)(!1), e.props.index && e.props.children && (0, o.Oi)(!1);
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

      function se(e) {
        return j(e)
      }

      function ce(e) {
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

      function ue(e, t) {
        return (0, o.aE)({
          basename: null == t ? void 0 : t.basename,
          future: a({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: (0, o.sC)({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          mapRouteProperties: ce
        }).initialize()
      }
    },
    15261: (e, t, r) => {
      function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, n.apply(this, arguments)
      }
      var o;
      r.d(t, {
          AO: () => f,
          B6: () => A,
          G3: () => le,
          Gh: () => N,
          HS: () => z,
          Oi: () => c,
          Pq: () => H,
          Rr: () => p,
          Sk: () => G,
          TM: () => s,
          V2: () => Y,
          VV: () => X,
          aE: () => de,
          o1: () => T,
          pX: () => Q,
          pb: () => _,
          rc: () => o,
          ro: () => w,
          sC: () => i,
          sd: () => I,
          tH: () => q,
          tW: () => O,
          ue: () => b,
          v6: () => V,
          zR: () => l
        }),
        function(e) {
          e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(o || (o = {}));
      const a = "popstate";

      function i(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: n,
          v5Compat: a = !1
        } = e;
        t = r.map(((e, t) => m(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = c(null == n ? t.length - 1 : n),
          l = o.Pop,
          s = null;

        function c(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function d() {
          return t[i]
        }

        function m(e, r, n) {
          void 0 === r && (r = null);
          let o = h(t ? d().pathname : "/", e, r, n);
          return u("/" === o.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), o
        }

        function v(e) {
          return "string" == typeof e ? e : f(e)
        }
        return {
          get index() {
            return i
          },
          get action() {
            return l
          },
          get location() {
            return d()
          },
          createHref: v,
          createURL: e => new URL(v(e), "http://localhost"),
          encodeLocation(e) {
            let t = "string" == typeof e ? p(e) : e;
            return {
              pathname: t.pathname || "",
              search: t.search || "",
              hash: t.hash || ""
            }
          },
          push(e, r) {
            l = o.Push;
            let n = m(e, r);
            i += 1, t.splice(i, t.length, n), a && s && s({
              action: l,
              location: n,
              delta: 1
            })
          },
          replace(e, r) {
            l = o.Replace;
            let n = m(e, r);
            t[i] = n, a && s && s({
              action: l,
              location: n,
              delta: 0
            })
          },
          go(e) {
            l = o.Pop;
            let r = c(i + e),
              n = t[r];
            i = r, s && s({
              action: l,
              location: n,
              delta: e
            })
          },
          listen: e => (s = e, () => {
            s = null
          })
        }
      }

      function l(e) {
        return void 0 === e && (e = {}), m((function(e, t) {
          let {
            pathname: r,
            search: n,
            hash: o
          } = e.location;
          return h("", {
            pathname: r,
            search: n,
            hash: o
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          return "string" == typeof t ? t : f(t)
        }), null, e)
      }

      function s(e) {
        return void 0 === e && (e = {}), m((function(e, t) {
          let {
            pathname: r = "/",
            search: n = "",
            hash: o = ""
          } = p(e.location.hash.substr(1));
          return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), h("", {
            pathname: r,
            search: n,
            hash: o
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          let r = e.document.querySelector("base"),
            n = "";
          if (r && r.getAttribute("href")) {
            let t = e.location.href,
              r = t.indexOf("#");
            n = -1 === r ? t : t.slice(0, r)
          }
          return n + "#" + ("string" == typeof t ? t : f(t))
        }), (function(e, t) {
          u("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
        }), e)
      }

      function c(e, t) {
        if (!1 === e || null == e) throw new Error(t)
      }

      function u(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function d(e, t) {
        return {
          usr: e.state,
          key: e.key,
          idx: t
        }
      }

      function h(e, t, r, o) {
        return void 0 === r && (r = null), n({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? p(t) : t, {
          state: r,
          key: t && t.key || o || Math.random().toString(36).substr(2, 8)
        })
      }

      function f(e) {
        let {
          pathname: t = "/",
          search: r = "",
          hash: n = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n), t
      }

      function p(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let n = e.indexOf("?");
          n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
        }
        return t
      }

      function m(e, t, r, i) {
        void 0 === i && (i = {});
        let {
          window: l = document.defaultView,
          v5Compat: s = !1
        } = i, u = l.history, p = o.Pop, m = null, v = g();

        function g() {
          return (u.state || {
            idx: null
          }).idx
        }

        function y() {
          p = o.Pop;
          let e = g(),
            t = null == e ? null : e - v;
          v = e, m && m({
            action: p,
            location: w.location,
            delta: t
          })
        }

        function b(e) {
          let t = "null" !== l.location.origin ? l.location.origin : l.location.href,
            r = "string" == typeof e ? e : f(e);
          return c(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
        }
        null == v && (v = 0, u.replaceState(n({}, u.state, {
          idx: v
        }), ""));
        let w = {
          get action() {
            return p
          },
          get location() {
            return e(l, u)
          },
          listen(e) {
            if (m) throw new Error("A history only accepts one active listener");
            return l.addEventListener(a, y), m = e, () => {
              l.removeEventListener(a, y), m = null
            }
          },
          createHref: e => t(l, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return {
              pathname: t.pathname,
              search: t.search,
              hash: t.hash
            }
          },
          push: function(e, t) {
            p = o.Push;
            let n = h(w.location, e, t);
            r && r(n, e), v = g() + 1;
            let a = d(n, v),
              i = w.createHref(n);
            try {
              u.pushState(a, "", i)
            } catch (e) {
              if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
              l.location.assign(i)
            }
            s && m && m({
              action: p,
              location: w.location,
              delta: 1
            })
          },
          replace: function(e, t) {
            p = o.Replace;
            let n = h(w.location, e, t);
            r && r(n, e), v = g();
            let a = d(n, v),
              i = w.createHref(n);
            u.replaceState(a, "", i), s && m && m({
              action: p,
              location: w.location,
              delta: 0
            })
          },
          go: e => u.go(e)
        };
        return w
      }
      var v;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(v || (v = {}));
      const g = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function y(e, t, r, o) {
        return void 0 === r && (r = []), void 0 === o && (o = {}), e.map(((e, a) => {
          let i = [...r, a],
            l = "string" == typeof e.id ? e.id : i.join("-");
          if (c(!0 !== e.index || !e.children, "Cannot specify children on an index route"), c(!o[l], 'Found a route id collision on id "' + l + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = n({}, e, t(e), {
              id: l
            });
            return o[l] = r, r
          } {
            let r = n({}, e, t(e), {
              id: l,
              children: void 0
            });
            return o[l] = r, e.children && (r.children = y(e.children, t, i, o)), r
          }
        }))
      }

      function b(e, t, r) {
        void 0 === r && (r = "/");
        let n = _(("string" == typeof t ? p(t) : t).pathname || "/", r);
        if (null == n) return null;
        let o = E(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(o);
        let a = null;
        for (let e = 0; null == a && e < o.length; ++e) a = j(o[e], U(n));
        return a
      }

      function w(e, t) {
        let {
          route: r,
          pathname: n,
          params: o
        } = e;
        return {
          id: r.id,
          pathname: n,
          params: o,
          data: t[r.id],
          handle: r.handle
        }
      }

      function E(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
        let o = (e, o, a) => {
          let i = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e
          };
          i.relativePath.startsWith("/") && (c(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
          let l = z([n, i.relativePath]),
            s = r.concat(i);
          e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), E(e.children, t, s, l)), (null != e.path || e.index) && t.push({
            path: l,
            score: M(l, e.index),
            routesMeta: s
          })
        };
        return e.forEach(((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of x(e.path)) o(e, t, r);
          else o(e, t)
        })), t
      }

      function x(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t, o = r.endsWith("?"), a = r.replace(/\?$/, "");
        if (0 === n.length) return o ? [a, ""] : [a];
        let i = x(n.join("/")),
          l = [];
        return l.push(...i.map((e => "" === e ? a : [a, e].join("/")))), o && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const D = /^:\w+$/,
        R = 3,
        S = 2,
        C = 1,
        P = 10,
        k = -2,
        L = e => "*" === e;

      function M(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(L) && (n += k), t && (n += S), r.filter((e => !L(e))).reduce(((e, t) => e + (D.test(t) ? R : "" === t ? C : P)), n)
      }

      function j(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, o = "/", a = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            l = e === r.length - 1,
            s = "/" === o ? t : t.slice(o.length) || "/",
            c = A({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: l
            }, s);
          if (!c) return null;
          Object.assign(n, c.params);
          let u = i.route;
          a.push({
            params: n,
            pathname: z([o, c.pathname]),
            pathnameBase: W(z([o, c.pathnameBase])),
            route: u
          }), "/" !== c.pathnameBase && (o = z([o, c.pathnameBase]))
        }
        return a
      }

      function O(e, t) {
        void 0 === t && (t = {});
        let r = e;
        r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (u(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*"));
        const n = r.startsWith("/") ? "/" : "",
          o = e => null == e ? "" : "string" == typeof e ? e : String(e);
        return n + r.split(/\/+/).map(((e, r, n) => {
          if (r === n.length - 1 && "*" === e) return o(t["*"]);
          const a = e.match(/^:(\w+)(\??)$/);
          if (a) {
            const [, e, r] = a;
            let n = t[e];
            return c("?" === r || null != n, 'Missing ":' + e + '" param'), o(n)
          }
          return e.replace(/\?$/g, "")
        })).filter((e => !!e)).join("/")
      }

      function A(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), u("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let n = [],
            o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (n.push(t), "/([^\\/]+)")));
          return e.endsWith("*") ? (n.push("*"), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), n]
        }(e.path, e.caseSensitive, e.end), o = t.match(r);
        if (!o) return null;
        let a = o[0],
          i = a.replace(/(.)\/+$/, "$1"),
          l = o.slice(1);
        return {
          params: n.reduce(((e, t, r) => {
            if ("*" === t) {
              let e = l[r] || "";
              i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
              try {
                return decodeURIComponent(e)
              } catch (r) {
                return u(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(l[r] || "", t), e
          }), {}),
          pathname: a,
          pathnameBase: i,
          pattern: e
        }
      }

      function U(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return u(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function _(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }

      function T(e, t) {
        void 0 === t && (t = "/");
        let {
          pathname: r,
          search: n = "",
          hash: o = ""
        } = "string" == typeof e ? p(e) : e, a = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: a,
          search: $(n),
          hash: F(o)
        }
      }

      function B(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function I(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function N(e, t, r, o) {
        let a;
        void 0 === o && (o = !1), "string" == typeof e ? a = p(e) : (a = n({}, e), c(!a.pathname || !a.pathname.includes("?"), B("?", "pathname", "search", a)), c(!a.pathname || !a.pathname.includes("#"), B("#", "pathname", "hash", a)), c(!a.search || !a.search.includes("#"), B("#", "search", "hash", a)));
        let i, l = "" === e || "" === a.pathname,
          s = l ? "/" : a.pathname;
        if (o || null == s) i = r;
        else {
          let e = t.length - 1;
          if (s.startsWith("..")) {
            let t = s.split("/");
            for (;
              ".." === t[0];) t.shift(), e -= 1;
            a.pathname = t.join("/")
          }
          i = e >= 0 ? t[e] : "/"
        }
        let u = T(a, i),
          d = s && "/" !== s && s.endsWith("/"),
          h = (l || "." === s) && r.endsWith("/");
        return u.pathname.endsWith("/") || !d && !h || (u.pathname += "/"), u
      }
      const z = e => e.join("/").replace(/\/\/+/g, "/"),
        W = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        $ = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        F = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        H = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            o = new Headers(r.headers);
          return o.has("Content-Type") || o.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), n({}, r, {
            headers: o
          }))
        };
      class q extends Error {}
      class J {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], c(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
          let n = () => r(new q("Deferred data aborted"));
          this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", n), this.controller.signal.addEventListener("abort", n), this.data = Object.entries(e).reduce(((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: this.trackPromise(r, n)
            })
          }), {}), this.done && this.unlistenAbortSignal(), this.init = t
        }
        trackPromise(e, t) {
          if (!(t instanceof Promise)) return t;
          this.deferredKeys.push(e), this.pendingKeysSet.add(e);
          let r = Promise.race([t, this.abortPromise]).then((t => this.onSettle(r, e, void 0, t)), (t => this.onSettle(r, e, t)));
          return r.catch((() => {})), Object.defineProperty(r, "_tracked", {
            get: () => !0
          }), r
        }
        onSettle(e, t, r, n) {
          if (this.controller.signal.aborted && r instanceof q) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
            get: () => r
          }), Promise.reject(r);
          if (this.pendingKeysSet.delete(t), this.done && this.unlistenAbortSignal(), void 0 === r && void 0 === n) {
            let r = new Error('Deferred data for key "' + t + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
            return Object.defineProperty(e, "_error", {
              get: () => r
            }), this.emit(!1, t), Promise.reject(r)
          }
          return void 0 === n ? (Object.defineProperty(e, "_error", {
            get: () => r
          }), this.emit(!1, t), Promise.reject(r)) : (Object.defineProperty(e, "_data", {
            get: () => n
          }), this.emit(!1, t), n)
        }
        emit(e, t) {
          this.subscribers.forEach((r => r(e, t)))
        }
        subscribe(e) {
          return this.subscribers.add(e), () => this.subscribers.delete(e)
        }
        cancel() {
          this.controller.abort(), this.pendingKeysSet.forEach(((e, t) => this.pendingKeysSet.delete(t))), this.emit(!0)
        }
        async resolveData(e) {
          let t = !1;
          if (!this.done) {
            let r = () => this.cancel();
            e.addEventListener("abort", r), t = await new Promise((t => {
              this.subscribe((n => {
                e.removeEventListener("abort", r), (n || this.done) && t(n)
              }))
            }))
          }
          return t
        }
        get done() {
          return 0 === this.pendingKeysSet.size
        }
        get unwrappedData() {
          return c(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: K(n)
            })
          }), {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function K(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }
      const V = function(e, t) {
          return void 0 === t && (t = {}), new J(e, "number" == typeof t ? {
            status: t
          } : t)
        },
        Y = function(e, t) {
          void 0 === t && (t = 302);
          let r = t;
          "number" == typeof r ? r = {
            status: r
          } : void 0 === r.status && (r.status = 302);
          let o = new Headers(r.headers);
          return o.set("Location", e), new Response(null, n({}, r, {
            headers: o
          }))
        },
        G = (e, t) => {
          let r = Y(e, t);
          return r.headers.set("X-Remix-Reload-Document", "true"), r
        };
      class X {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function Q(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const Z = ["post", "put", "patch", "delete"],
        ee = new Set(Z),
        te = ["get", ...Z],
        re = new Set(te),
        ne = new Set([301, 302, 303, 307, 308]),
        oe = new Set([307, 308]),
        ae = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        ie = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        le = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0
        },
        se = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ce = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        }),
        ue = "remix-router-transitions";

      function de(e) {
        const t = e.window ? e.window : "undefined" != typeof window ? window : void 0,
          r = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement,
          a = !r;
        let i;
        if (c(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) i = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let t = e.detectErrorBoundary;
          i = e => ({
            hasErrorBoundary: t(e)
          })
        } else i = ce;
        let l, s = {},
          d = y(e.routes, i, void 0, s),
          f = e.basename || "/",
          p = n({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
          }, e.future),
          m = null,
          g = new Set,
          E = null,
          x = null,
          D = null,
          R = null != e.hydrationData,
          S = b(d, e.history.location, f),
          C = null;
        if (null == S) {
          let t = Ce(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: n
            } = Se(d);
          S = r, C = {
            [n.id]: t
          }
        }
        let P, k, L = !(S.some((e => e.route.lazy)) || S.some((e => e.route.loader)) && null == e.hydrationData),
          M = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: S,
            initialized: L,
            navigation: ae,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || C,
            fetchers: new Map,
            blockers: new Map
          },
          j = o.Pop,
          O = !1,
          A = !1,
          U = new Map,
          T = null,
          B = !1,
          I = !1,
          N = [],
          z = [],
          W = new Map,
          $ = 0,
          F = -1,
          H = new Map,
          q = new Set,
          J = new Map,
          K = new Map,
          V = new Map,
          Y = !1;

        function G(e, t) {
          M = n({}, M, e), g.forEach((e => e(M, {
            unstable_viewTransitionOpts: t
          })))
        }

        function X(t, r) {
          var a, i;
          let s, c = null != M.actionData && null != M.navigation.formMethod && Oe(M.navigation.formMethod) && "loading" === M.navigation.state && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect);
          s = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : c ? M.actionData : null;
          let u = r.loaderData ? De(M.loaderData, r.loaderData, r.matches || [], r.errors) : M.loaderData,
            h = M.blockers;
          h.size > 0 && (h = new Map(h), h.forEach(((e, t) => h.set(t, le))));
          let f, p = !0 === O || null != M.navigation.formMethod && Oe(M.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
          if (l && (d = l, l = void 0), B || j === o.Pop || (j === o.Push ? e.history.push(t, t.state) : j === o.Replace && e.history.replace(t, t.state)), j === o.Pop) {
            let e = U.get(M.location.pathname);
            e && e.has(t.pathname) ? f = {
              currentLocation: M.location,
              nextLocation: t
            } : U.has(t.pathname) && (f = {
              currentLocation: t,
              nextLocation: M.location
            })
          } else if (A) {
            let e = U.get(M.location.pathname);
            e ? e.add(t.pathname) : (e = new Set([t.pathname]), U.set(M.location.pathname, e)), f = {
              currentLocation: M.location,
              nextLocation: t
            }
          }
          G(n({}, r, {
            actionData: s,
            loaderData: u,
            historyAction: j,
            location: t,
            initialized: !0,
            navigation: ae,
            revalidation: "idle",
            restoreScrollPosition: Fe(t, r.matches || M.matches),
            preventScrollReset: p,
            blockers: h
          }), f), j = o.Pop, O = !1, A = !1, B = !1, I = !1, N = [], z = []
        }
        async function Q(t, r, a) {
          k && k.abort(), k = null, j = t, B = !0 === (a && a.startUninterruptedRevalidation),
            function(e, t) {
              if (E && D) {
                let r = $e(e, t);
                E[r] = D()
              }
            }(M.location, M.matches), O = !0 === (a && a.preventScrollReset), A = !0 === (a && a.enableViewTransition);
          let c = l || d,
            u = a && a.overrideNavigation,
            h = b(c, r, f);
          if (!h) {
            let e = Ce(404, {
                pathname: r.pathname
              }),
              {
                matches: t,
                route: n
              } = Se(c);
            return We(), void X(r, {
              matches: t,
              loaderData: {},
              errors: {
                [n.id]: e
              }
            })
          }
          if (M.initialized && !I && (p = M.location, m = r, p.pathname === m.pathname && p.search === m.search && ("" === p.hash ? "" !== m.hash : p.hash === m.hash || "" !== m.hash)) && !(a && a.submission && Oe(a.submission.formMethod))) return void X(r, {
            matches: h
          });
          var p, m;
          k = new AbortController;
          let g, y, w = be(e.history, r, k.signal, a && a.submission);
          if (a && a.pendingError) y = {
            [Re(h).route.id]: a.pendingError
          };
          else if (a && a.submission && Oe(a.submission.formMethod)) {
            let e = await async function(e, t, r, n, a) {
              void 0 === a && (a = {}), re();
              let l, c = function(e, t) {
                return {
                  state: "submitting",
                  location: e,
                  formMethod: t.formMethod,
                  formAction: t.formAction,
                  formEncType: t.formEncType,
                  formData: t.formData,
                  json: t.json,
                  text: t.text
                }
              }(t, r);
              G({
                navigation: c
              });
              let u = Te(n, t);
              if (u.route.action || u.route.lazy) {
                if (l = await ye("action", e, u, n, s, i, f), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else l = {
                type: v.error,
                error: Ce(405, {
                  method: e.method,
                  pathname: t.pathname,
                  routeId: u.route.id
                })
              };
              if (je(l)) {
                let e;
                return e = a && null != a.replace ? a.replace : l.location === M.location.pathname + M.location.search, await ee(M, l, {
                  submission: r,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (Me(l)) {
                let e = Re(n, u.route.id);
                return !0 !== (a && a.replace) && (j = o.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: l.error
                  }
                }
              }
              if (Le(l)) throw Ce(400, {
                type: "defer-action"
              });
              return {
                pendingActionData: {
                  [u.route.id]: l.data
                }
              }
            }(w, r, a.submission, h, {
              replace: a.replace
            });
            if (e.shortCircuited) return;
            g = e.pendingActionData, y = e.pendingActionError, u = Ie(r, a.submission), w = new Request(w.url, {
              signal: w.signal
            })
          }
          let {
            shortCircuited: x,
            loaderData: R,
            errors: S
          } = await async function(t, r, o, a, i, s, c, u, h) {
            let p = a || Ie(r, i),
              m = i || s || Be(p),
              v = l || d,
              [g, y] = pe(e.history, M, o, m, r, I, N, z, J, q, v, f, u, h);
            if (We((e => !(o && o.some((t => t.route.id === e))) || g && g.some((t => t.route.id === e)))), F = ++$, 0 === g.length && 0 === y.length) {
              let e = ge();
              return X(r, n({
                matches: o,
                loaderData: {},
                errors: h || null
              }, u ? {
                actionData: u
              } : {}, e ? {
                fetchers: new Map(M.fetchers)
              } : {})), {
                shortCircuited: !0
              }
            }
            if (!B) {
              y.forEach((e => {
                let t = M.fetchers.get(e.key),
                  r = Ne(void 0, t ? t.data : void 0);
                M.fetchers.set(e.key, r)
              }));
              let e = u || M.actionData;
              G(n({
                navigation: p
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, y.length > 0 ? {
                fetchers: new Map(M.fetchers)
              } : {}))
            }
            y.forEach((e => {
              W.has(e.key) && me(e.key), e.controller && W.set(e.key, e.controller)
            }));
            let b = () => y.forEach((e => me(e.key)));
            k && k.signal.addEventListener("abort", b);
            let {
              results: w,
              loaderResults: E,
              fetcherResults: x
            } = await te(M.matches, o, g, y, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            k && k.signal.removeEventListener("abort", b), y.forEach((e => W.delete(e.key)));
            let D = Pe(w);
            if (D) {
              if (D.idx >= g.length) {
                let e = y[D.idx - g.length].key;
                q.add(e)
              }
              return await ee(M, D.result, {
                replace: c
              }), {
                shortCircuited: !0
              }
            }
            let {
              loaderData: R,
              errors: S
            } = xe(M, o, g, E, h, y, x, K);
            K.forEach(((e, t) => {
              e.subscribe((r => {
                (r || e.done) && K.delete(t)
              }))
            }));
            let C = ge(),
              P = we(F);
            return n({
              loaderData: R,
              errors: S
            }, C || P || y.length > 0 ? {
              fetchers: new Map(M.fetchers)
            } : {})
          }(w, r, h, u, a && a.submission, a && a.fetcherSubmission, a && a.replace, g, y);
          x || (k = null, X(r, n({
            matches: h
          }, g ? {
            actionData: g
          } : {}, {
            loaderData: R,
            errors: S
          })))
        }

        function Z(e) {
          return M.fetchers.get(e) || ie
        }
        async function ee(a, i, l) {
          let {
            submission: s,
            fetcherSubmission: u,
            replace: d
          } = void 0 === l ? {} : l;
          i.revalidate && (I = !0);
          let p = h(a.location, i.location, {
            _isRedirect: !0
          });
          if (c(p, "Expected a location on the redirect navigation"), r) {
            let r = !1;
            if (i.reloadDocument) r = !0;
            else if (se.test(i.location)) {
              const n = e.history.createURL(i.location);
              r = n.origin !== t.location.origin || null == _(n.pathname, f)
            }
            if (r) return void(d ? t.location.replace(i.location) : t.location.assign(i.location))
          }
          k = null;
          let m = !0 === d ? o.Replace : o.Push,
            {
              formMethod: v,
              formAction: g,
              formEncType: y
            } = a.navigation;
          !s && !u && v && g && y && (s = Be(a.navigation));
          let b = s || u;
          if (oe.has(i.status) && b && Oe(b.formMethod)) await Q(m, p, {
            submission: n({}, b, {
              formAction: i.location
            }),
            preventScrollReset: O
          });
          else {
            let e = Ie(p, s);
            await Q(m, p, {
              overrideNavigation: e,
              fetcherSubmission: u,
              preventScrollReset: O
            })
          }
        }
        async function te(t, r, n, o, a) {
          let l = await Promise.all([...n.map((e => ye("loader", a, e, r, s, i, f))), ...o.map((t => t.matches && t.match && t.controller ? ye("loader", be(e.history, t.path, t.controller.signal), t.match, t.matches, s, i, f) : {
              type: v.error,
              error: Ce(404, {
                pathname: t.path
              })
            }))]),
            c = l.slice(0, n.length),
            u = l.slice(n.length);
          return await Promise.all([Ae(t, n, c, c.map((() => a.signal)), !1, M.loaderData), Ae(t, o.map((e => e.match)), u, o.map((e => e.controller ? e.controller.signal : null)), !0)]), {
            results: l,
            loaderResults: c,
            fetcherResults: u
          }
        }

        function re() {
          I = !0, N.push(...We()), J.forEach(((e, t) => {
            W.has(t) && (z.push(t), me(t))
          }))
        }

        function ne(e, t, r) {
          let n = Re(M.matches, t);
          de(e), G({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(M.fetchers)
          })
        }

        function de(e) {
          let t = M.fetchers.get(e);
          !W.has(e) || t && "loading" === t.state && H.has(e) || me(e), J.delete(e), H.delete(e), q.delete(e), M.fetchers.delete(e)
        }

        function me(e) {
          let t = W.get(e);
          c(t, "Expected fetch controller: " + e), t.abort(), W.delete(e)
        }

        function ve(e) {
          for (let t of e) {
            let e = ze(Z(t).data);
            M.fetchers.set(t, e)
          }
        }

        function ge() {
          let e = [],
            t = !1;
          for (let r of q) {
            let n = M.fetchers.get(r);
            c(n, "Expected fetcher: " + r), "loading" === n.state && (q.delete(r), e.push(r), t = !0)
          }
          return ve(e), t
        }

        function we(e) {
          let t = [];
          for (let [r, n] of H)
            if (n < e) {
              let e = M.fetchers.get(r);
              c(e, "Expected fetcher: " + r), "loading" === e.state && (me(r), H.delete(r), t.push(r))
            } return ve(t), t.length > 0
        }

        function Ee(e) {
          M.blockers.delete(e), V.delete(e)
        }

        function ke(e, t) {
          let r = M.blockers.get(e) || le;
          c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
          let n = new Map(M.blockers);
          n.set(e, t), G({
            blockers: n
          })
        }

        function _e(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === V.size) return;
          V.size > 1 && u(!1, "A router only supports one blocker at a time");
          let o = Array.from(V.entries()),
            [a, i] = o[o.length - 1],
            l = M.blockers.get(a);
          return l && "proceeding" === l.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? a : void 0
        }

        function We(e) {
          let t = [];
          return K.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), K.delete(n))
          })), t
        }

        function $e(e, t) {
          return x && x(e, t.map((e => w(e, M.loaderData)))) || e.key
        }

        function Fe(e, t) {
          if (E) {
            let r = $e(e, t),
              n = E[r];
            if ("number" == typeof n) return n
          }
          return null
        }
        return P = {
          get basename() {
            return f
          },
          get state() {
            return M
          },
          get routes() {
            return d
          },
          get window() {
            return t
          },
          initialize: function() {
            if (m = e.history.listen((t => {
                let {
                  action: r,
                  location: n,
                  delta: o
                } = t;
                if (Y) return void(Y = !1);
                u(0 === V.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let a = _e({
                  currentLocation: M.location,
                  nextLocation: n,
                  historyAction: r
                });
                return a && null != o ? (Y = !0, e.history.go(-1 * o), void ke(a, {
                  state: "blocked",
                  location: n,
                  proceed() {
                    ke(a, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: n
                    }), e.history.go(o)
                  },
                  reset() {
                    let e = new Map(M.blockers);
                    e.set(a, le), G({
                      blockers: e
                    })
                  }
                })) : Q(r, n)
              })), r) {
              ! function(e, t) {
                try {
                  let r = e.sessionStorage.getItem(ue);
                  if (r) {
                    let e = JSON.parse(r);
                    for (let [r, n] of Object.entries(e || {})) n && Array.isArray(n) && t.set(r, new Set(n || []))
                  }
                } catch (e) {}
              }(t, U);
              let e = () => function(e, t) {
                if (t.size > 0) {
                  let r = {};
                  for (let [e, n] of t) r[e] = [...n];
                  try {
                    e.sessionStorage.setItem(ue, JSON.stringify(r))
                  } catch (e) {
                    u(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                  }
                }
              }(t, U);
              t.addEventListener("pagehide", e), T = () => t.removeEventListener("pagehide", e)
            }
            return M.initialized || Q(o.Pop, M.location), P
          },
          subscribe: function(e) {
            return g.add(e), () => g.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (E = e, D = t, x = r || null, !R && M.navigation === ae) {
              R = !0;
              let e = Fe(M.location, M.matches);
              null != e && G({
                restoreScrollPosition: e
              })
            }
            return () => {
              E = null, D = null, x = null
            }
          },
          navigate: async function t(r, a) {
            if ("number" == typeof r) return void e.history.go(r);
            let i = he(M.location, M.matches, f, p.v7_prependBasename, r, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative),
              {
                path: l,
                submission: s,
                error: c
              } = fe(p.v7_normalizeFormMethod, !1, i, a),
              u = M.location,
              d = h(M.location, l, a && a.state);
            d = n({}, d, e.history.encodeLocation(d));
            let m = a && null != a.replace ? a.replace : void 0,
              v = o.Push;
            !0 === m ? v = o.Replace : !1 === m || null != s && Oe(s.formMethod) && s.formAction === M.location.pathname + M.location.search && (v = o.Replace);
            let g = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
              y = _e({
                currentLocation: u,
                nextLocation: d,
                historyAction: v
              });
            if (!y) return await Q(v, d, {
              submission: s,
              pendingError: c,
              preventScrollReset: g,
              replace: a && a.replace,
              enableViewTransition: a && a.unstable_viewTransition
            });
            ke(y, {
              state: "blocked",
              location: d,
              proceed() {
                ke(y, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: d
                }), t(r, a)
              },
              reset() {
                let e = new Map(M.blockers);
                e.set(y, le), G({
                  blockers: e
                })
              }
            })
          },
          fetch: function(t, r, o, u) {
            if (a) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            W.has(t) && me(t);
            let h = l || d,
              m = he(M.location, M.matches, f, p.v7_prependBasename, o, r, null == u ? void 0 : u.relative),
              v = b(h, m, f);
            if (!v) return void ne(t, r, Ce(404, {
              pathname: m
            }));
            let {
              path: g,
              submission: y,
              error: w
            } = fe(p.v7_normalizeFormMethod, !0, m, u);
            if (w) return void ne(t, r, w);
            let E = Te(v, g);
            O = !0 === (u && u.preventScrollReset), y && Oe(y.formMethod) ? async function(t, r, o, a, u, h) {
              if (re(), J.delete(t), !a.route.action && !a.route.lazy) {
                let e = Ce(405, {
                  method: h.formMethod,
                  pathname: o,
                  routeId: r
                });
                return void ne(t, r, e)
              }
              let p = function(e, t) {
                return {
                  state: "submitting",
                  formMethod: e.formMethod,
                  formAction: e.formAction,
                  formEncType: e.formEncType,
                  formData: e.formData,
                  json: e.json,
                  text: e.text,
                  data: t ? t.data : void 0
                }
              }(h, M.fetchers.get(t));
              M.fetchers.set(t, p), G({
                fetchers: new Map(M.fetchers)
              });
              let m = new AbortController,
                v = be(e.history, o, m.signal, h);
              W.set(t, m);
              let g = $,
                y = await ye("action", v, a, u, s, i, f);
              if (v.signal.aborted) return void(W.get(t) === m && W.delete(t));
              if (je(y)) {
                if (W.delete(t), F > g) {
                  let e = ze(void 0);
                  return M.fetchers.set(t, e), void G({
                    fetchers: new Map(M.fetchers)
                  })
                } {
                  q.add(t);
                  let e = Ne(h);
                  return M.fetchers.set(t, e), G({
                    fetchers: new Map(M.fetchers)
                  }), ee(M, y, {
                    fetcherSubmission: h
                  })
                }
              }
              if (Me(y)) return void ne(t, r, y.error);
              if (Le(y)) throw Ce(400, {
                type: "defer-action"
              });
              let w = M.navigation.location || M.location,
                E = be(e.history, w, m.signal),
                x = l || d,
                D = "idle" !== M.navigation.state ? b(x, M.navigation.location, f) : M.matches;
              c(D, "Didn't find any matches after fetcher action");
              let R = ++$;
              H.set(t, R);
              let S = Ne(h, y.data);
              M.fetchers.set(t, S);
              let [C, P] = pe(e.history, M, D, h, w, I, N, z, J, q, x, f, {
                [a.route.id]: y.data
              }, void 0);
              P.filter((e => e.key !== t)).forEach((e => {
                let t = e.key,
                  r = M.fetchers.get(t),
                  n = Ne(void 0, r ? r.data : void 0);
                M.fetchers.set(t, n), W.has(t) && me(t), e.controller && W.set(t, e.controller)
              })), G({
                fetchers: new Map(M.fetchers)
              });
              let L = () => P.forEach((e => me(e.key)));
              m.signal.addEventListener("abort", L);
              let {
                results: O,
                loaderResults: A,
                fetcherResults: U
              } = await te(M.matches, D, C, P, E);
              if (m.signal.aborted) return;
              m.signal.removeEventListener("abort", L), H.delete(t), W.delete(t), P.forEach((e => W.delete(e.key)));
              let _ = Pe(O);
              if (_) {
                if (_.idx >= C.length) {
                  let e = P[_.idx - C.length].key;
                  q.add(e)
                }
                return ee(M, _.result)
              }
              let {
                loaderData: T,
                errors: B
              } = xe(M, M.matches, C, A, void 0, P, U, K);
              if (M.fetchers.has(t)) {
                let e = ze(y.data);
                M.fetchers.set(t, e)
              }
              let V = we(R);
              "loading" === M.navigation.state && R > F ? (c(j, "Expected pending action"), k && k.abort(), X(M.navigation.location, {
                matches: D,
                loaderData: T,
                errors: B,
                fetchers: new Map(M.fetchers)
              })) : (G(n({
                errors: B,
                loaderData: De(M.loaderData, T, D, B)
              }, V || P.length > 0 ? {
                fetchers: new Map(M.fetchers)
              } : {})), I = !1)
            }(t, r, g, E, v, y): (J.set(t, {
              routeId: r,
              path: g
            }), async function(t, r, n, o, a, l) {
              let u = M.fetchers.get(t),
                d = Ne(l, u ? u.data : void 0);
              M.fetchers.set(t, d), G({
                fetchers: new Map(M.fetchers)
              });
              let h = new AbortController,
                p = be(e.history, n, h.signal);
              W.set(t, h);
              let m = $,
                v = await ye("loader", p, o, a, s, i, f);
              if (Le(v) && (v = await Ue(v, p.signal, !0) || v), W.get(t) === h && W.delete(t), p.signal.aborted) return;
              if (je(v)) {
                if (F > m) {
                  let e = ze(void 0);
                  return M.fetchers.set(t, e), void G({
                    fetchers: new Map(M.fetchers)
                  })
                }
                return q.add(t), void await ee(M, v)
              }
              if (Me(v)) {
                let e = Re(M.matches, r);
                return M.fetchers.delete(t), void G({
                  fetchers: new Map(M.fetchers),
                  errors: {
                    [e.route.id]: v.error
                  }
                })
              }
              c(!Le(v), "Unhandled fetcher deferred data");
              let g = ze(v.data);
              M.fetchers.set(t, g), G({
                fetchers: new Map(M.fetchers)
              })
            }(t, r, g, E, v, y))
          },
          revalidate: function() {
            re(), G({
              revalidation: "loading"
            }), "submitting" !== M.navigation.state && ("idle" !== M.navigation.state ? Q(j || M.historyAction, M.navigation.location, {
              overrideNavigation: M.navigation
            }) : Q(M.historyAction, M.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: Z,
          deleteFetcher: de,
          dispose: function() {
            m && m(), T && T(), g.clear(), k && k.abort(), M.fetchers.forEach(((e, t) => de(t))), M.blockers.forEach(((e, t) => Ee(t)))
          },
          getBlocker: function(e, t) {
            let r = M.blockers.get(e) || le;
            return V.get(e) !== t && V.set(e, t), r
          },
          deleteBlocker: Ee,
          _internalFetchControllers: W,
          _internalActiveDeferreds: K,
          _internalSetRoutes: function(e) {
            s = {}, l = y(e, i, void 0, s)
          }
        }, P
      }

      function he(e, t, r, n, o, a, i) {
        let l, s;
        if (null != a && "path" !== i) {
          l = [];
          for (let e of t)
            if (l.push(e), e.route.id === a) {
              s = e;
              break
            }
        } else l = t, s = t[t.length - 1];
        let c = N(o || ".", I(l).map((e => e.pathnameBase)), _(e.pathname, r) || e.pathname, "path" === i);
        return null == o && (c.search = e.search, c.hash = e.hash), null != o && "" !== o && "." !== o || !s || !s.route.index || _e(c.search) || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), n && "/" !== r && (c.pathname = "/" === c.pathname ? r : z([r, c.pathname])), f(c)
      }

      function fe(e, t, r, n) {
        if (!n || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
          }(n)) return {
          path: r
        };
        if (n.formMethod && (o = n.formMethod, !re.has(o.toLowerCase()))) return {
          path: r,
          error: Ce(405, {
            method: n.formMethod
          })
        };
        var o;
        let a, i, l = () => ({
            path: r,
            error: Ce(400, {
              type: "invalid-body"
            })
          }),
          s = n.formMethod || "get",
          u = e ? s.toUpperCase() : s.toLowerCase(),
          d = ke(r);
        if (void 0 !== n.body) {
          if ("text/plain" === n.formEncType) {
            if (!Oe(u)) return l();
            let e = "string" == typeof n.body ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce(((e, t) => {
              let [r, n] = t;
              return "" + e + r + "=" + n + "\n"
            }), "") : String(n.body);
            return {
              path: r,
              submission: {
                formMethod: u,
                formAction: d,
                formEncType: n.formEncType,
                formData: void 0,
                json: void 0,
                text: e
              }
            }
          }
          if ("application/json" === n.formEncType) {
            if (!Oe(u)) return l();
            try {
              let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
              return {
                path: r,
                submission: {
                  formMethod: u,
                  formAction: d,
                  formEncType: n.formEncType,
                  formData: void 0,
                  json: e,
                  text: void 0
                }
              }
            } catch (e) {
              return l()
            }
          }
        }
        if (c("function" == typeof FormData, "FormData is not available in this environment"), n.formData) a = we(n.formData), i = n.formData;
        else if (n.body instanceof FormData) a = we(n.body), i = n.body;
        else if (n.body instanceof URLSearchParams) a = n.body, i = Ee(a);
        else if (null == n.body) a = new URLSearchParams, i = new FormData;
        else try {
          a = new URLSearchParams(n.body), i = Ee(a)
        } catch (e) {
          return l()
        }
        let h = {
          formMethod: u,
          formAction: d,
          formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0
        };
        if (Oe(h.formMethod)) return {
          path: r,
          submission: h
        };
        let m = p(r);
        return t && m.search && _e(m.search) && a.append("index", ""), m.search = "?" + a, {
          path: f(m),
          submission: h
        }
      }

      function pe(e, t, r, o, a, i, l, s, c, u, d, h, f, p) {
        let m = p ? Object.values(p)[0] : f ? Object.values(f)[0] : void 0,
          v = e.createURL(t.location),
          g = e.createURL(a),
          y = p ? Object.keys(p)[0] : void 0,
          w = function(e, t) {
            let r = e;
            if (t) {
              let n = e.findIndex((e => e.route.id === t));
              n >= 0 && (r = e.slice(0, n))
            }
            return r
          }(r, y).filter(((e, r) => {
            if (e.route.lazy) return !0;
            if (null == e.route.loader) return !1;
            if (function(e, t, r) {
                let n = !t || r.route.id !== t.route.id,
                  o = void 0 === e[r.route.id];
                return n || o
              }(t.loaderData, t.matches[r], e) || l.some((t => t === e.route.id))) return !0;
            let a = t.matches[r],
              s = e;
            return ve(e, n({
              currentUrl: v,
              currentParams: a.params,
              nextUrl: g,
              nextParams: s.params
            }, o, {
              actionResult: m,
              defaultShouldRevalidate: i || v.pathname + v.search === g.pathname + g.search || v.search !== g.search || me(a, s)
            }))
          })),
          E = [];
        return c.forEach(((e, a) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let l = b(d, e.path, h);
          if (!l) return void E.push({
            key: a,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let c = t.fetchers.get(a),
            f = Te(l, e.path),
            p = !1;
          p = !u.has(a) && (!!s.includes(a) || (c && "idle" !== c.state && void 0 === c.data ? i : ve(f, n({
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: g,
            nextParams: r[r.length - 1].params
          }, o, {
            actionResult: m,
            defaultShouldRevalidate: i
          })))), p && E.push({
            key: a,
            routeId: e.routeId,
            path: e.path,
            matches: l,
            match: f,
            controller: new AbortController
          })
        })), [w, E]
      }

      function me(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function ve(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }
      async function ge(e, t, r) {
        if (!e.lazy) return;
        let o = await e.lazy();
        if (!e.lazy) return;
        let a = r[e.id];
        c(a, "No route found in manifest");
        let i = {};
        for (let e in o) {
          let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
          u(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || g.has(e) || (i[e] = o[e])
        }
        Object.assign(a, i), Object.assign(a, n({}, t(a), {
          lazy: void 0
        }))
      }
      async function ye(e, t, r, n, o, a, i, l) {
        let s, u, d;
        void 0 === l && (l = {});
        let h = e => {
          let n, o = new Promise(((e, t) => n = t));
          return d = () => n(), t.signal.addEventListener("abort", d), Promise.race([e({
            request: t,
            params: r.params,
            context: l.requestContext
          }), o])
        };
        try {
          let n = r.route[e];
          if (r.route.lazy)
            if (n) {
              let e, t = await Promise.all([h(n).catch((t => {
                e = t
              })), ge(r.route, a, o)]);
              if (e) throw e;
              u = t[0]
            } else {
              if (await ge(r.route, a, o), n = r.route[e], !n) {
                if ("action" === e) {
                  let e = new URL(t.url),
                    n = e.pathname + e.search;
                  throw Ce(405, {
                    method: t.method,
                    pathname: n,
                    routeId: r.route.id
                  })
                }
                return {
                  type: v.data,
                  data: void 0
                }
              }
              u = await h(n)
            }
          else {
            if (!n) {
              let e = new URL(t.url);
              throw Ce(404, {
                pathname: e.pathname + e.search
              })
            }
            u = await h(n)
          }
          c(void 0 !== u, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          s = v.error, u = e
        } finally {
          d && t.signal.removeEventListener("abort", d)
        }
        if (null != (f = u) && "number" == typeof f.status && "string" == typeof f.statusText && "object" == typeof f.headers && void 0 !== f.body) {
          let e, o = u.status;
          if (ne.has(o)) {
            let e = u.headers.get("Location");
            if (c(e, "Redirects returned/thrown from loaders/actions must have a Location header"), se.test(e)) {
              if (!l.isStaticRequest) {
                let r = new URL(t.url),
                  n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  o = null != _(n.pathname, i);
                n.origin === r.origin && o && (e = n.pathname + n.search + n.hash)
              }
            } else e = he(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, e);
            if (l.isStaticRequest) throw u.headers.set("Location", e), u;
            return {
              type: v.redirect,
              status: o,
              location: e,
              revalidate: null !== u.headers.get("X-Remix-Revalidate"),
              reloadDocument: null !== u.headers.get("X-Remix-Reload-Document")
            }
          }
          if (l.isRouteRequest) throw {
            type: s === v.error ? v.error : v.data,
            response: u
          };
          let a = u.headers.get("Content-Type");
          return e = a && /\bapplication\/json\b/.test(a) ? await u.json() : await u.text(), s === v.error ? {
            type: s,
            error: new X(o, u.statusText, e),
            headers: u.headers
          } : {
            type: v.data,
            data: e,
            statusCode: u.status,
            headers: u.headers
          }
        }
        var f, p, m;
        return s === v.error ? {
          type: s,
          error: u
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(u) ? {
          type: v.deferred,
          deferredData: u,
          statusCode: null == (p = u.init) ? void 0 : p.status,
          headers: (null == (m = u.init) ? void 0 : m.headers) && new Headers(u.init.headers)
        } : {
          type: v.data,
          data: u
        }
      }

      function be(e, t, r, n) {
        let o = e.createURL(ke(t)).toString(),
          a = {
            signal: r
          };
        if (n && Oe(n.formMethod)) {
          let {
            formMethod: e,
            formEncType: t
          } = n;
          a.method = e.toUpperCase(), "application/json" === t ? (a.headers = new Headers({
            "Content-Type": t
          }), a.body = JSON.stringify(n.json)) : "text/plain" === t ? a.body = n.text : "application/x-www-form-urlencoded" === t && n.formData ? a.body = we(n.formData) : a.body = n.formData
        }
        return new Request(o, a)
      }

      function we(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) t.append(r, "string" == typeof n ? n : n.name);
        return t
      }

      function Ee(e) {
        let t = new FormData;
        for (let [r, n] of e.entries()) t.append(r, n);
        return t
      }

      function xe(e, t, r, o, a, i, l, s) {
        let {
          loaderData: u,
          errors: d
        } = function(e, t, r, n, o) {
          let a, i = {},
            l = null,
            s = !1,
            u = {};
          return r.forEach(((r, d) => {
            let h = t[d].route.id;
            if (c(!je(r), "Cannot handle redirect results in processLoaderData"), Me(r)) {
              let t = Re(e, h),
                o = r.error;
              n && (o = Object.values(n)[0], n = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = o), i[h] = void 0, s || (s = !0, a = Q(r.error) ? r.error.status : 500), r.headers && (u[h] = r.headers)
            } else Le(r) ? (o.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || s || (a = r.statusCode), r.headers && (u[h] = r.headers)
          })), n && (l = n, i[Object.keys(n)[0]] = void 0), {
            loaderData: i,
            errors: l,
            statusCode: a || 200,
            loaderHeaders: u
          }
        }(t, r, o, a, s);
        for (let t = 0; t < i.length; t++) {
          let {
            key: r,
            match: o,
            controller: a
          } = i[t];
          c(void 0 !== l && void 0 !== l[t], "Did not find corresponding fetcher result");
          let s = l[t];
          if (!a || !a.signal.aborted)
            if (Me(s)) {
              let t = Re(e.matches, null == o ? void 0 : o.route.id);
              d && d[t.route.id] || (d = n({}, d, {
                [t.route.id]: s.error
              })), e.fetchers.delete(r)
            } else if (je(s)) c(!1, "Unhandled fetcher revalidation redirect");
          else if (Le(s)) c(!1, "Unhandled fetcher deferred data");
          else {
            let t = ze(s.data);
            e.fetchers.set(r, t)
          }
        }
        return {
          loaderData: u,
          errors: d
        }
      }

      function De(e, t, r, o) {
        let a = n({}, t);
        for (let n of r) {
          let r = n.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && n.route.loader && (a[r] = e[r]), o && o.hasOwnProperty(r)) break
        }
        return a
      }

      function Re(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function Se(e) {
        let t = 1 === e.length ? e[0] : e.find((e => e.index || !e.path || "/" === e.path)) || {
          id: "__shim-error-route__"
        };
        return {
          matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
          }],
          route: t
        }
      }

      function Ce(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: o,
          type: a
        } = void 0 === t ? {} : t, i = "Unknown Server Error", l = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", o && r && n ? l = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === a ? l = "defer() is not supported in actions" : "invalid-body" === a && (l = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", l = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && n ? l = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')), new X(e || 500, i, new Error(l), !0)
      }

      function Pe(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (je(r)) return {
            result: r,
            idx: t
          }
        }
      }

      function ke(e) {
        return f(n({}, "string" == typeof e ? p(e) : e, {
          hash: ""
        }))
      }

      function Le(e) {
        return e.type === v.deferred
      }

      function Me(e) {
        return e.type === v.error
      }

      function je(e) {
        return (e && e.type) === v.redirect
      }

      function Oe(e) {
        return ee.has(e.toLowerCase())
      }
      async function Ae(e, t, r, n, o, a) {
        for (let i = 0; i < r.length; i++) {
          let l = r[i],
            s = t[i];
          if (!s) continue;
          let u = e.find((e => e.route.id === s.route.id)),
            d = null != u && !me(u, s) && void 0 !== (a && a[s.route.id]);
          if (Le(l) && (o || d)) {
            let e = n[i];
            c(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await Ue(l, e, o).then((e => {
              e && (r[i] = e || r[i])
            }))
          }
        }
      }
      async function Ue(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: v.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: v.error,
              error: e
            }
          }
          return {
            type: v.data,
            data: e.deferredData.data
          }
        }
      }

      function _e(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function Te(e, t) {
        let r = "string" == typeof t ? p(t).search : t.search;
        if (e[e.length - 1].route.index && _e(r || "")) return e[e.length - 1];
        let n = I(e);
        return n[n.length - 1]
      }

      function Be(e) {
        let {
          formMethod: t,
          formAction: r,
          formEncType: n,
          text: o,
          formData: a,
          json: i
        } = e;
        if (t && r && n) return null != o ? {
          formMethod: t,
          formAction: r,
          formEncType: n,
          formData: void 0,
          json: void 0,
          text: o
        } : null != a ? {
          formMethod: t,
          formAction: r,
          formEncType: n,
          formData: a,
          json: void 0,
          text: void 0
        } : void 0 !== i ? {
          formMethod: t,
          formAction: r,
          formEncType: n,
          formData: void 0,
          json: i,
          text: void 0
        } : void 0
      }

      function Ie(e, t) {
        return t ? {
          state: "loading",
          location: e,
          formMethod: t.formMethod,
          formAction: t.formAction,
          formEncType: t.formEncType,
          formData: t.formData,
          json: t.json,
          text: t.text
        } : {
          state: "loading",
          location: e,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        }
      }

      function Ne(e, t) {
        return e ? {
          state: "loading",
          formMethod: e.formMethod,
          formAction: e.formAction,
          formEncType: e.formEncType,
          formData: e.formData,
          json: e.json,
          text: e.text,
          data: t
        } : {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: t
        }
      }

      function ze(e) {
        return {
          state: "idle",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: e
        }
      }
      Symbol("deferred")
    }
  }
]);