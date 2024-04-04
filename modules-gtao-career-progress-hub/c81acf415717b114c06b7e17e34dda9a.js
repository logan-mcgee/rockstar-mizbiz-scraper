! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f41a76d4-17b5-411e-8b73-d7dc7e5de10c", e._sentryDebugIdIdentifier = "sentry-dbid-f41a76d4-17b5-411e-8b73-d7dc7e5de10c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-career-progress-hub",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [718], {
    45718: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => J,
        Await: () => Ft,
        BrowserRouter: () => vr,
        Form: () => xr,
        HashRouter: () => gr,
        Link: () => Er,
        MemoryRouter: () => Mt,
        NavLink: () => Rr,
        Navigate: () => Ut,
        NavigationType: () => n,
        Outlet: () => jt,
        Route: () => Ot,
        Router: () => Nt,
        RouterProvider: () => pr,
        Routes: () => Bt,
        ScrollRestoration: () => Dr,
        UNSAFE_DataRouterContext: () => He,
        UNSAFE_DataRouterStateContext: () => $e,
        UNSAFE_LocationContext: () => qe,
        UNSAFE_NavigationContext: () => Je,
        UNSAFE_RouteContext: () => Ve,
        UNSAFE_ViewTransitionContext: () => dr,
        UNSAFE_useRouteId: () => wt,
        UNSAFE_useScrollRestoration: () => zr,
        createBrowserRouter: () => sr,
        createHashRouter: () => lr,
        createMemoryRouter: () => qt,
        createPath: () => p,
        createRoutesFromChildren: () => $t,
        createRoutesFromElements: () => $t,
        createSearchParams: () => Zt,
        defer: () => Y,
        generatePath: () => M,
        isRouteErrorResponse: () => Z,
        json: () => K,
        matchPath: () => U,
        matchRoutes: () => w,
        parsePath: () => m,
        redirect: () => X,
        redirectDocument: () => G,
        renderMatches: () => Kt,
        resolvePath: () => N,
        unstable_HistoryRouter: () => yr,
        unstable_useBlocker: () => _t,
        unstable_usePrompt: () => Hr,
        unstable_useViewTransitionState: () => $r,
        useActionData: () => Ct,
        useAsyncError: () => Pt,
        useAsyncValue: () => kt,
        useBeforeUnload: () => Wr,
        useFetcher: () => Nr,
        useFetchers: () => Br,
        useFormAction: () => jr,
        useHref: () => Xe,
        useInRouterContext: () => Ge,
        useLinkClickHandler: () => Tr,
        useLoaderData: () => St,
        useLocation: () => Qe,
        useMatch: () => et,
        useMatches: () => xt,
        useNavigate: () => rt,
        useNavigation: () => Et,
        useNavigationType: () => Ze,
        useOutlet: () => at,
        useOutletContext: () => ot,
        useParams: () => it,
        useResolvedPath: () => st,
        useRevalidator: () => Rt,
        useRouteError: () => Lt,
        useRouteLoaderData: () => Dt,
        useRoutes: () => lt,
        useSearchParams: () => _r,
        useSubmit: () => Mr
      });
      var n, o = r(51664);

      function a() {
        return a = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, a.apply(this, arguments)
      }! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(n || (n = {}));
      const i = "popstate";

      function s(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: o,
          v5Compat: a = !1
        } = e;
        t = r.map(((e, t) => h(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = u(null == o ? t.length - 1 : o),
          s = n.Pop,
          l = null;

        function u(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function c() {
          return t[i]
        }

        function h(e, r, n) {
          void 0 === r && (r = null);
          let o = f(t ? c().pathname : "/", e, r, n);
          return d("/" === o.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), o
        }

        function v(e) {
          return "string" == typeof e ? e : p(e)
        }
        return {
          get index() {
            return i
          },
          get action() {
            return s
          },
          get location() {
            return c()
          },
          createHref: v,
          createURL: e => new URL(v(e), "http://localhost"),
          encodeLocation(e) {
            let t = "string" == typeof e ? m(e) : e;
            return {
              pathname: t.pathname || "",
              search: t.search || "",
              hash: t.hash || ""
            }
          },
          push(e, r) {
            s = n.Push;
            let o = h(e, r);
            i += 1, t.splice(i, t.length, o), a && l && l({
              action: s,
              location: o,
              delta: 1
            })
          },
          replace(e, r) {
            s = n.Replace;
            let o = h(e, r);
            t[i] = o, a && l && l({
              action: s,
              location: o,
              delta: 0
            })
          },
          go(e) {
            s = n.Pop;
            let r = u(i + e),
              o = t[r];
            i = r, l && l({
              action: s,
              location: o,
              delta: e
            })
          },
          listen: e => (l = e, () => {
            l = null
          })
        }
      }

      function l(e) {
        return void 0 === e && (e = {}), v((function(e, t) {
          let {
            pathname: r,
            search: n,
            hash: o
          } = e.location;
          return f("", {
            pathname: r,
            search: n,
            hash: o
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          return "string" == typeof t ? t : p(t)
        }), null, e)
      }

      function u(e) {
        return void 0 === e && (e = {}), v((function(e, t) {
          let {
            pathname: r = "/",
            search: n = "",
            hash: o = ""
          } = m(e.location.hash.substr(1));
          return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), f("", {
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
          return n + "#" + ("string" == typeof t ? t : p(t))
        }), (function(e, t) {
          d("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
        }), e)
      }

      function c(e, t) {
        if (!1 === e || null == e) throw new Error(t)
      }

      function d(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function h(e, t) {
        return {
          usr: e.state,
          key: e.key,
          idx: t
        }
      }

      function f(e, t, r, n) {
        return void 0 === r && (r = null), a({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? m(t) : t, {
          state: r,
          key: t && t.key || n || Math.random().toString(36).substr(2, 8)
        })
      }

      function p(e) {
        let {
          pathname: t = "/",
          search: r = "",
          hash: n = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n), t
      }

      function m(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let n = e.indexOf("?");
          n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
        }
        return t
      }

      function v(e, t, r, o) {
        void 0 === o && (o = {});
        let {
          window: s = document.defaultView,
          v5Compat: l = !1
        } = o, u = s.history, d = n.Pop, m = null, v = g();

        function g() {
          return (u.state || {
            idx: null
          }).idx
        }

        function y() {
          d = n.Pop;
          let e = g(),
            t = null == e ? null : e - v;
          v = e, m && m({
            action: d,
            location: w.location,
            delta: t
          })
        }

        function b(e) {
          let t = "null" !== s.location.origin ? s.location.origin : s.location.href,
            r = "string" == typeof e ? e : p(e);
          return c(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
        }
        null == v && (v = 0, u.replaceState(a({}, u.state, {
          idx: v
        }), ""));
        let w = {
          get action() {
            return d
          },
          get location() {
            return e(s, u)
          },
          listen(e) {
            if (m) throw new Error("A history only accepts one active listener");
            return s.addEventListener(i, y), m = e, () => {
              s.removeEventListener(i, y), m = null
            }
          },
          createHref: e => t(s, e),
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
            d = n.Push;
            let o = f(w.location, e, t);
            r && r(o, e), v = g() + 1;
            let a = h(o, v),
              i = w.createHref(o);
            try {
              u.pushState(a, "", i)
            } catch (e) {
              if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
              s.location.assign(i)
            }
            l && m && m({
              action: d,
              location: w.location,
              delta: 1
            })
          },
          replace: function(e, t) {
            d = n.Replace;
            let o = f(w.location, e, t);
            r && r(o, e), v = g();
            let a = h(o, v),
              i = w.createHref(o);
            u.replaceState(a, "", i), l && m && m({
              action: d,
              location: w.location,
              delta: 0
            })
          },
          go: e => u.go(e)
        };
        return w
      }
      var g;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(g || (g = {}));
      const y = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function b(e, t, r, n) {
        return void 0 === r && (r = []), void 0 === n && (n = {}), e.map(((e, o) => {
          let i = [...r, o],
            s = "string" == typeof e.id ? e.id : i.join("-");
          if (c(!0 !== e.index || !e.children, "Cannot specify children on an index route"), c(!n[s], 'Found a route id collision on id "' + s + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = a({}, e, t(e), {
              id: s
            });
            return n[s] = r, r
          } {
            let r = a({}, e, t(e), {
              id: s,
              children: void 0
            });
            return n[s] = r, e.children && (r.children = b(e.children, t, i, n)), r
          }
        }))
      }

      function w(e, t, r) {
        void 0 === r && (r = "/");
        let n = O(("string" == typeof t ? m(t) : t).pathname || "/", r);
        if (null == n) return null;
        let o = R(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(o);
        let a = null;
        for (let e = 0; null == a && e < o.length; ++e) a = A(o[e], j(n));
        return a
      }

      function E(e, t) {
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

      function R(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
        let o = (e, o, a) => {
          let i = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e
          };
          i.relativePath.startsWith("/") && (c(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
          let s = z([n, i.relativePath]),
            l = r.concat(i);
          e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), R(e.children, t, l, s)), (null != e.path || e.index) && t.push({
            path: s,
            score: _(s, e.index),
            routesMeta: l
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
          s = [];
        return s.push(...i.map((e => "" === e ? a : [a, e].join("/")))), o && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const S = /^:\w+$/,
        D = 3,
        C = 2,
        L = 1,
        k = 10,
        P = -2,
        T = e => "*" === e;

      function _(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(T) && (n += P), t && (n += C), r.filter((e => !T(e))).reduce(((e, t) => e + (S.test(t) ? D : "" === t ? L : k)), n)
      }

      function A(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, o = "/", a = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            s = e === r.length - 1,
            l = "/" === o ? t : t.slice(o.length) || "/",
            u = U({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: s
            }, l);
          if (!u) return null;
          Object.assign(n, u.params);
          let c = i.route;
          a.push({
            params: n,
            pathname: z([o, u.pathname]),
            pathnameBase: W(z([o, u.pathnameBase])),
            route: c
          }), "/" !== u.pathnameBase && (o = z([o, u.pathnameBase]))
        }
        return a
      }

      function M(e, t) {
        void 0 === t && (t = {});
        let r = e;
        r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (d(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*"));
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

      function U(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), d("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let n = [],
            o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (n.push(t), "/([^\\/]+)")));
          return e.endsWith("*") ? (n.push("*"), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), n]
        }(e.path, e.caseSensitive, e.end), o = t.match(r);
        if (!o) return null;
        let a = o[0],
          i = a.replace(/(.)\/+$/, "$1"),
          s = o.slice(1);
        return {
          params: n.reduce(((e, t, r) => {
            if ("*" === t) {
              let e = s[r] || "";
              i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
              try {
                return decodeURIComponent(e)
              } catch (r) {
                return d(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(s[r] || "", t), e
          }), {}),
          pathname: a,
          pathnameBase: i,
          pattern: e
        }
      }

      function j(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return d(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function O(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }

      function N(e, t) {
        void 0 === t && (t = "/");
        let {
          pathname: r,
          search: n = "",
          hash: o = ""
        } = "string" == typeof e ? m(e) : e, a = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: a,
          search: H(n),
          hash: $(o)
        }
      }

      function B(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function F(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function I(e, t, r, n) {
        let o;
        void 0 === n && (n = !1), "string" == typeof e ? o = m(e) : (o = a({}, e), c(!o.pathname || !o.pathname.includes("?"), B("?", "pathname", "search", o)), c(!o.pathname || !o.pathname.includes("#"), B("#", "pathname", "hash", o)), c(!o.search || !o.search.includes("#"), B("#", "search", "hash", o)));
        let i, s = "" === e || "" === o.pathname,
          l = s ? "/" : o.pathname;
        if (n || null == l) i = r;
        else {
          let e = t.length - 1;
          if (l.startsWith("..")) {
            let t = l.split("/");
            for (;
              ".." === t[0];) t.shift(), e -= 1;
            o.pathname = t.join("/")
          }
          i = e >= 0 ? t[e] : "/"
        }
        let u = N(o, i),
          d = l && "/" !== l && l.endsWith("/"),
          h = (s || "." === l) && r.endsWith("/");
        return u.pathname.endsWith("/") || !d && !h || (u.pathname += "/"), u
      }
      const z = e => e.join("/").replace(/\/\/+/g, "/"),
        W = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        H = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        $ = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        K = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            n = new Headers(r.headers);
          return n.has("Content-Type") || n.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), a({}, r, {
            headers: n
          }))
        };
      class J extends Error {}
      class q {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], c(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
          let n = () => r(new J("Deferred data aborted"));
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
          if (this.controller.signal.aborted && r instanceof J) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
              [r]: V(n)
            })
          }), {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function V(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }
      const Y = function(e, t) {
          return void 0 === t && (t = {}), new q(e, "number" == typeof t ? {
            status: t
          } : t)
        },
        X = function(e, t) {
          void 0 === t && (t = 302);
          let r = t;
          "number" == typeof r ? r = {
            status: r
          } : void 0 === r.status && (r.status = 302);
          let n = new Headers(r.headers);
          return n.set("Location", e), new Response(null, a({}, r, {
            headers: n
          }))
        },
        G = (e, t) => {
          let r = X(e, t);
          return r.headers.set("X-Remix-Reload-Document", "true"), r
        };
      class Q {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function Z(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const ee = ["post", "put", "patch", "delete"],
        te = new Set(ee),
        re = ["get", ...ee],
        ne = new Set(re),
        oe = new Set([301, 302, 303, 307, 308]),
        ae = new Set([307, 308]),
        ie = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        se = {
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
        ue = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ce = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        }),
        de = "remix-router-transitions";

      function he(e) {
        const t = e.window ? e.window : "undefined" != typeof window ? window : void 0,
          r = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement,
          o = !r;
        let i;
        if (c(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) i = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let t = e.detectErrorBoundary;
          i = e => ({
            hasErrorBoundary: t(e)
          })
        } else i = ce;
        let s, l = {},
          u = b(e.routes, i, void 0, l),
          h = e.basename || "/",
          p = a({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
          }, e.future),
          m = null,
          v = new Set,
          y = null,
          R = null,
          x = null,
          S = null != e.hydrationData,
          D = w(u, e.history.location, h),
          C = null;
        if (null == D) {
          let t = Le(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: n
            } = Ce(u);
          D = r, C = {
            [n.id]: t
          }
        }
        let L, k, P = !(D.some((e => e.route.lazy)) || D.some((e => e.route.loader)) && null == e.hydrationData),
          T = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: D,
            initialized: P,
            navigation: ie,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || C,
            fetchers: new Map,
            blockers: new Map
          },
          _ = n.Pop,
          A = !1,
          M = !1,
          U = new Map,
          j = null,
          N = !1,
          B = !1,
          F = [],
          I = [],
          z = new Map,
          W = 0,
          H = -1,
          $ = new Map,
          K = new Set,
          J = new Map,
          q = new Map,
          V = new Map,
          Y = !1;

        function X(e, t) {
          T = a({}, T, e), v.forEach((e => e(T, {
            unstable_viewTransitionOpts: t
          })))
        }

        function G(t, r) {
          var o, i;
          let l, c = null != T.actionData && null != T.navigation.formMethod && Me(T.navigation.formMethod) && "loading" === T.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
          l = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : c ? T.actionData : null;
          let d = r.loaderData ? Se(T.loaderData, r.loaderData, r.matches || [], r.errors) : T.loaderData,
            h = T.blockers;
          h.size > 0 && (h = new Map(h), h.forEach(((e, t) => h.set(t, le))));
          let f, p = !0 === A || null != T.navigation.formMethod && Me(T.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
          if (s && (u = s, s = void 0), N || _ === n.Pop || (_ === n.Push ? e.history.push(t, t.state) : _ === n.Replace && e.history.replace(t, t.state)), _ === n.Pop) {
            let e = U.get(T.location.pathname);
            e && e.has(t.pathname) ? f = {
              currentLocation: T.location,
              nextLocation: t
            } : U.has(t.pathname) && (f = {
              currentLocation: t,
              nextLocation: T.location
            })
          } else if (M) {
            let e = U.get(T.location.pathname);
            e ? e.add(t.pathname) : (e = new Set([t.pathname]), U.set(T.location.pathname, e)), f = {
              currentLocation: T.location,
              nextLocation: t
            }
          }
          X(a({}, r, {
            actionData: l,
            loaderData: d,
            historyAction: _,
            location: t,
            initialized: !0,
            navigation: ie,
            revalidation: "idle",
            restoreScrollPosition: He(t, r.matches || T.matches),
            preventScrollReset: p,
            blockers: h
          }), f), _ = n.Pop, A = !1, M = !1, N = !1, B = !1, F = [], I = []
        }
        async function Q(t, r, o) {
          k && k.abort(), k = null, _ = t, N = !0 === (o && o.startUninterruptedRevalidation),
            function(e, t) {
              if (y && x) {
                let r = We(e, t);
                y[r] = x()
              }
            }(T.location, T.matches), A = !0 === (o && o.preventScrollReset), M = !0 === (o && o.enableViewTransition);
          let c = s || u,
            d = o && o.overrideNavigation,
            f = w(c, r, h);
          if (!f) {
            let e = Le(404, {
                pathname: r.pathname
              }),
              {
                matches: t,
                route: n
              } = Ce(c);
            return Oe(), void G(r, {
              matches: t,
              loaderData: {},
              errors: {
                [n.id]: e
              }
            })
          }
          if (T.initialized && !B && (p = T.location, m = r, p.pathname === m.pathname && p.search === m.search && ("" === p.hash ? "" !== m.hash : p.hash === m.hash || "" !== m.hash)) && !(o && o.submission && Me(o.submission.formMethod))) return void G(r, {
            matches: f
          });
          var p, m;
          k = new AbortController;
          let v, b, E = we(e.history, r, k.signal, o && o.submission);
          if (o && o.pendingError) b = {
            [De(f).route.id]: o.pendingError
          };
          else if (o && o.submission && Me(o.submission.formMethod)) {
            let e = await async function(e, t, r, o, a) {
              void 0 === a && (a = {}), re();
              let s, u = function(e, t) {
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
              X({
                navigation: u
              });
              let c = Ne(o, t);
              if (c.route.action || c.route.lazy) {
                if (s = await be("action", e, c, o, l, i, h), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else s = {
                type: g.error,
                error: Le(405, {
                  method: e.method,
                  pathname: t.pathname,
                  routeId: c.route.id
                })
              };
              if (Ae(s)) {
                let e;
                return e = a && null != a.replace ? a.replace : s.location === T.location.pathname + T.location.search, await ee(T, s, {
                  submission: r,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (_e(s)) {
                let e = De(o, c.route.id);
                return !0 !== (a && a.replace) && (_ = n.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: s.error
                  }
                }
              }
              if (Te(s)) throw Le(400, {
                type: "defer-action"
              });
              return {
                pendingActionData: {
                  [c.route.id]: s.data
                }
              }
            }(E, r, o.submission, f, {
              replace: o.replace
            });
            if (e.shortCircuited) return;
            v = e.pendingActionData, b = e.pendingActionError, d = Fe(r, o.submission), E = new Request(E.url, {
              signal: E.signal
            })
          }
          let {
            shortCircuited: R,
            loaderData: S,
            errors: D
          } = await async function(t, r, n, o, i, l, c, d, f) {
            let p = o || Fe(r, i),
              m = i || l || Be(p),
              v = s || u,
              [g, y] = me(e.history, T, n, m, r, B, F, I, J, K, v, h, d, f);
            if (Oe((e => !(n && n.some((t => t.route.id === e))) || g && g.some((t => t.route.id === e)))), H = ++W, 0 === g.length && 0 === y.length) {
              let e = ge();
              return G(r, a({
                matches: n,
                loaderData: {},
                errors: f || null
              }, d ? {
                actionData: d
              } : {}, e ? {
                fetchers: new Map(T.fetchers)
              } : {})), {
                shortCircuited: !0
              }
            }
            if (!N) {
              y.forEach((e => {
                let t = T.fetchers.get(e.key),
                  r = Ie(void 0, t ? t.data : void 0);
                T.fetchers.set(e.key, r)
              }));
              let e = d || T.actionData;
              X(a({
                navigation: p
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, y.length > 0 ? {
                fetchers: new Map(T.fetchers)
              } : {}))
            }
            y.forEach((e => {
              z.has(e.key) && he(e.key), e.controller && z.set(e.key, e.controller)
            }));
            let b = () => y.forEach((e => he(e.key)));
            k && k.signal.addEventListener("abort", b);
            let {
              results: w,
              loaderResults: E,
              fetcherResults: R
            } = await te(T.matches, n, g, y, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            k && k.signal.removeEventListener("abort", b), y.forEach((e => z.delete(e.key)));
            let x = ke(w);
            if (x) {
              if (x.idx >= g.length) {
                let e = y[x.idx - g.length].key;
                K.add(e)
              }
              return await ee(T, x.result, {
                replace: c
              }), {
                shortCircuited: !0
              }
            }
            let {
              loaderData: S,
              errors: D
            } = xe(T, n, g, E, f, y, R, q);
            q.forEach(((e, t) => {
              e.subscribe((r => {
                (r || e.done) && q.delete(t)
              }))
            }));
            let C = ge(),
              L = ye(H);
            return a({
              loaderData: S,
              errors: D
            }, C || L || y.length > 0 ? {
              fetchers: new Map(T.fetchers)
            } : {})
          }(E, r, f, d, o && o.submission, o && o.fetcherSubmission, o && o.replace, v, b);
          R || (k = null, G(r, a({
            matches: f
          }, v ? {
            actionData: v
          } : {}, {
            loaderData: S,
            errors: D
          })))
        }

        function Z(e) {
          return T.fetchers.get(e) || se
        }
        async function ee(o, i, s) {
          let {
            submission: l,
            fetcherSubmission: u,
            replace: d
          } = void 0 === s ? {} : s;
          i.revalidate && (B = !0);
          let p = f(o.location, i.location, {
            _isRedirect: !0
          });
          if (c(p, "Expected a location on the redirect navigation"), r) {
            let r = !1;
            if (i.reloadDocument) r = !0;
            else if (ue.test(i.location)) {
              const n = e.history.createURL(i.location);
              r = n.origin !== t.location.origin || null == O(n.pathname, h)
            }
            if (r) return void(d ? t.location.replace(i.location) : t.location.assign(i.location))
          }
          k = null;
          let m = !0 === d ? n.Replace : n.Push,
            {
              formMethod: v,
              formAction: g,
              formEncType: y
            } = o.navigation;
          !l && !u && v && g && y && (l = Be(o.navigation));
          let b = l || u;
          if (ae.has(i.status) && b && Me(b.formMethod)) await Q(m, p, {
            submission: a({}, b, {
              formAction: i.location
            }),
            preventScrollReset: A
          });
          else {
            let e = Fe(p, l);
            await Q(m, p, {
              overrideNavigation: e,
              fetcherSubmission: u,
              preventScrollReset: A
            })
          }
        }
        async function te(t, r, n, o, a) {
          let s = await Promise.all([...n.map((e => be("loader", a, e, r, l, i, h))), ...o.map((t => t.matches && t.match && t.controller ? be("loader", we(e.history, t.path, t.controller.signal), t.match, t.matches, l, i, h) : {
              type: g.error,
              error: Le(404, {
                pathname: t.path
              })
            }))]),
            u = s.slice(0, n.length),
            c = s.slice(n.length);
          return await Promise.all([Ue(t, n, u, u.map((() => a.signal)), !1, T.loaderData), Ue(t, o.map((e => e.match)), c, o.map((e => e.controller ? e.controller.signal : null)), !0)]), {
            results: s,
            loaderResults: u,
            fetcherResults: c
          }
        }

        function re() {
          B = !0, F.push(...Oe()), J.forEach(((e, t) => {
            z.has(t) && (I.push(t), he(t))
          }))
        }

        function ne(e, t, r) {
          let n = De(T.matches, t);
          oe(e), X({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(T.fetchers)
          })
        }

        function oe(e) {
          let t = T.fetchers.get(e);
          !z.has(e) || t && "loading" === t.state && $.has(e) || he(e), J.delete(e), $.delete(e), K.delete(e), T.fetchers.delete(e)
        }

        function he(e) {
          let t = z.get(e);
          c(t, "Expected fetch controller: " + e), t.abort(), z.delete(e)
        }

        function ve(e) {
          for (let t of e) {
            let e = ze(Z(t).data);
            T.fetchers.set(t, e)
          }
        }

        function ge() {
          let e = [],
            t = !1;
          for (let r of K) {
            let n = T.fetchers.get(r);
            c(n, "Expected fetcher: " + r), "loading" === n.state && (K.delete(r), e.push(r), t = !0)
          }
          return ve(e), t
        }

        function ye(e) {
          let t = [];
          for (let [r, n] of $)
            if (n < e) {
              let e = T.fetchers.get(r);
              c(e, "Expected fetcher: " + r), "loading" === e.state && (he(r), $.delete(r), t.push(r))
            } return ve(t), t.length > 0
        }

        function Ee(e) {
          T.blockers.delete(e), V.delete(e)
        }

        function Re(e, t) {
          let r = T.blockers.get(e) || le;
          c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
          let n = new Map(T.blockers);
          n.set(e, t), X({
            blockers: n
          })
        }

        function Pe(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === V.size) return;
          V.size > 1 && d(!1, "A router only supports one blocker at a time");
          let o = Array.from(V.entries()),
            [a, i] = o[o.length - 1],
            s = T.blockers.get(a);
          return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? a : void 0
        }

        function Oe(e) {
          let t = [];
          return q.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), q.delete(n))
          })), t
        }

        function We(e, t) {
          return R && R(e, t.map((e => E(e, T.loaderData)))) || e.key
        }

        function He(e, t) {
          if (y) {
            let r = We(e, t),
              n = y[r];
            if ("number" == typeof n) return n
          }
          return null
        }
        return L = {
          get basename() {
            return h
          },
          get state() {
            return T
          },
          get routes() {
            return u
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
                d(0 === V.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let a = Pe({
                  currentLocation: T.location,
                  nextLocation: n,
                  historyAction: r
                });
                return a && null != o ? (Y = !0, e.history.go(-1 * o), void Re(a, {
                  state: "blocked",
                  location: n,
                  proceed() {
                    Re(a, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: n
                    }), e.history.go(o)
                  },
                  reset() {
                    let e = new Map(T.blockers);
                    e.set(a, le), X({
                      blockers: e
                    })
                  }
                })) : Q(r, n)
              })), r) {
              ! function(e, t) {
                try {
                  let r = e.sessionStorage.getItem(de);
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
                    e.sessionStorage.setItem(de, JSON.stringify(r))
                  } catch (e) {
                    d(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                  }
                }
              }(t, U);
              t.addEventListener("pagehide", e), j = () => t.removeEventListener("pagehide", e)
            }
            return T.initialized || Q(n.Pop, T.location), L
          },
          subscribe: function(e) {
            return v.add(e), () => v.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (y = e, x = t, R = r || null, !S && T.navigation === ie) {
              S = !0;
              let e = He(T.location, T.matches);
              null != e && X({
                restoreScrollPosition: e
              })
            }
            return () => {
              y = null, x = null, R = null
            }
          },
          navigate: async function t(r, o) {
            if ("number" == typeof r) return void e.history.go(r);
            let i = fe(T.location, T.matches, h, p.v7_prependBasename, r, null == o ? void 0 : o.fromRouteId, null == o ? void 0 : o.relative),
              {
                path: s,
                submission: l,
                error: u
              } = pe(p.v7_normalizeFormMethod, !1, i, o),
              c = T.location,
              d = f(T.location, s, o && o.state);
            d = a({}, d, e.history.encodeLocation(d));
            let m = o && null != o.replace ? o.replace : void 0,
              v = n.Push;
            !0 === m ? v = n.Replace : !1 === m || null != l && Me(l.formMethod) && l.formAction === T.location.pathname + T.location.search && (v = n.Replace);
            let g = o && "preventScrollReset" in o ? !0 === o.preventScrollReset : void 0,
              y = Pe({
                currentLocation: c,
                nextLocation: d,
                historyAction: v
              });
            if (!y) return await Q(v, d, {
              submission: l,
              pendingError: u,
              preventScrollReset: g,
              replace: o && o.replace,
              enableViewTransition: o && o.unstable_viewTransition
            });
            Re(y, {
              state: "blocked",
              location: d,
              proceed() {
                Re(y, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: d
                }), t(r, o)
              },
              reset() {
                let e = new Map(T.blockers);
                e.set(y, le), X({
                  blockers: e
                })
              }
            })
          },
          fetch: function(t, r, n, d) {
            if (o) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            z.has(t) && he(t);
            let f = s || u,
              m = fe(T.location, T.matches, h, p.v7_prependBasename, n, r, null == d ? void 0 : d.relative),
              v = w(f, m, h);
            if (!v) return void ne(t, r, Le(404, {
              pathname: m
            }));
            let {
              path: g,
              submission: y,
              error: b
            } = pe(p.v7_normalizeFormMethod, !0, m, d);
            if (b) return void ne(t, r, b);
            let E = Ne(v, g);
            A = !0 === (d && d.preventScrollReset), y && Me(y.formMethod) ? async function(t, r, n, o, d, f) {
              if (re(), J.delete(t), !o.route.action && !o.route.lazy) {
                let e = Le(405, {
                  method: f.formMethod,
                  pathname: n,
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
              }(f, T.fetchers.get(t));
              T.fetchers.set(t, p), X({
                fetchers: new Map(T.fetchers)
              });
              let m = new AbortController,
                v = we(e.history, n, m.signal, f);
              z.set(t, m);
              let g = W,
                y = await be("action", v, o, d, l, i, h);
              if (v.signal.aborted) return void(z.get(t) === m && z.delete(t));
              if (Ae(y)) {
                if (z.delete(t), H > g) {
                  let e = ze(void 0);
                  return T.fetchers.set(t, e), void X({
                    fetchers: new Map(T.fetchers)
                  })
                } {
                  K.add(t);
                  let e = Ie(f);
                  return T.fetchers.set(t, e), X({
                    fetchers: new Map(T.fetchers)
                  }), ee(T, y, {
                    fetcherSubmission: f
                  })
                }
              }
              if (_e(y)) return void ne(t, r, y.error);
              if (Te(y)) throw Le(400, {
                type: "defer-action"
              });
              let b = T.navigation.location || T.location,
                E = we(e.history, b, m.signal),
                R = s || u,
                x = "idle" !== T.navigation.state ? w(R, T.navigation.location, h) : T.matches;
              c(x, "Didn't find any matches after fetcher action");
              let S = ++W;
              $.set(t, S);
              let D = Ie(f, y.data);
              T.fetchers.set(t, D);
              let [C, L] = me(e.history, T, x, f, b, B, F, I, J, K, R, h, {
                [o.route.id]: y.data
              }, void 0);
              L.filter((e => e.key !== t)).forEach((e => {
                let t = e.key,
                  r = T.fetchers.get(t),
                  n = Ie(void 0, r ? r.data : void 0);
                T.fetchers.set(t, n), z.has(t) && he(t), e.controller && z.set(t, e.controller)
              })), X({
                fetchers: new Map(T.fetchers)
              });
              let P = () => L.forEach((e => he(e.key)));
              m.signal.addEventListener("abort", P);
              let {
                results: A,
                loaderResults: M,
                fetcherResults: U
              } = await te(T.matches, x, C, L, E);
              if (m.signal.aborted) return;
              m.signal.removeEventListener("abort", P), $.delete(t), z.delete(t), L.forEach((e => z.delete(e.key)));
              let j = ke(A);
              if (j) {
                if (j.idx >= C.length) {
                  let e = L[j.idx - C.length].key;
                  K.add(e)
                }
                return ee(T, j.result)
              }
              let {
                loaderData: O,
                errors: N
              } = xe(T, T.matches, C, M, void 0, L, U, q);
              if (T.fetchers.has(t)) {
                let e = ze(y.data);
                T.fetchers.set(t, e)
              }
              let V = ye(S);
              "loading" === T.navigation.state && S > H ? (c(_, "Expected pending action"), k && k.abort(), G(T.navigation.location, {
                matches: x,
                loaderData: O,
                errors: N,
                fetchers: new Map(T.fetchers)
              })) : (X(a({
                errors: N,
                loaderData: Se(T.loaderData, O, x, N)
              }, V || L.length > 0 ? {
                fetchers: new Map(T.fetchers)
              } : {})), B = !1)
            }(t, r, g, E, v, y): (J.set(t, {
              routeId: r,
              path: g
            }), async function(t, r, n, o, a, s) {
              let u = T.fetchers.get(t),
                d = Ie(s, u ? u.data : void 0);
              T.fetchers.set(t, d), X({
                fetchers: new Map(T.fetchers)
              });
              let f = new AbortController,
                p = we(e.history, n, f.signal);
              z.set(t, f);
              let m = W,
                v = await be("loader", p, o, a, l, i, h);
              if (Te(v) && (v = await je(v, p.signal, !0) || v), z.get(t) === f && z.delete(t), p.signal.aborted) return;
              if (Ae(v)) {
                if (H > m) {
                  let e = ze(void 0);
                  return T.fetchers.set(t, e), void X({
                    fetchers: new Map(T.fetchers)
                  })
                }
                return K.add(t), void await ee(T, v)
              }
              if (_e(v)) {
                let e = De(T.matches, r);
                return T.fetchers.delete(t), void X({
                  fetchers: new Map(T.fetchers),
                  errors: {
                    [e.route.id]: v.error
                  }
                })
              }
              c(!Te(v), "Unhandled fetcher deferred data");
              let g = ze(v.data);
              T.fetchers.set(t, g), X({
                fetchers: new Map(T.fetchers)
              })
            }(t, r, g, E, v, y))
          },
          revalidate: function() {
            re(), X({
              revalidation: "loading"
            }), "submitting" !== T.navigation.state && ("idle" !== T.navigation.state ? Q(_ || T.historyAction, T.navigation.location, {
              overrideNavigation: T.navigation
            }) : Q(T.historyAction, T.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: Z,
          deleteFetcher: oe,
          dispose: function() {
            m && m(), j && j(), v.clear(), k && k.abort(), T.fetchers.forEach(((e, t) => oe(t))), T.blockers.forEach(((e, t) => Ee(t)))
          },
          getBlocker: function(e, t) {
            let r = T.blockers.get(e) || le;
            return V.get(e) !== t && V.set(e, t), r
          },
          deleteBlocker: Ee,
          _internalFetchControllers: z,
          _internalActiveDeferreds: q,
          _internalSetRoutes: function(e) {
            l = {}, s = b(e, i, void 0, l)
          }
        }, L
      }

      function fe(e, t, r, n, o, a, i) {
        let s, l;
        if (null != a && "path" !== i) {
          s = [];
          for (let e of t)
            if (s.push(e), e.route.id === a) {
              l = e;
              break
            }
        } else s = t, l = t[t.length - 1];
        let u = I(o || ".", F(s).map((e => e.pathnameBase)), O(e.pathname, r) || e.pathname, "path" === i);
        return null == o && (u.search = e.search, u.hash = e.hash), null != o && "" !== o && "." !== o || !l || !l.route.index || Oe(u.search) || (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), n && "/" !== r && (u.pathname = "/" === u.pathname ? r : z([r, u.pathname])), p(u)
      }

      function pe(e, t, r, n) {
        if (!n || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
          }(n)) return {
          path: r
        };
        if (n.formMethod && (o = n.formMethod, !ne.has(o.toLowerCase()))) return {
          path: r,
          error: Le(405, {
            method: n.formMethod
          })
        };
        var o;
        let a, i, s = () => ({
            path: r,
            error: Le(400, {
              type: "invalid-body"
            })
          }),
          l = n.formMethod || "get",
          u = e ? l.toUpperCase() : l.toLowerCase(),
          d = Pe(r);
        if (void 0 !== n.body) {
          if ("text/plain" === n.formEncType) {
            if (!Me(u)) return s();
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
            if (!Me(u)) return s();
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
              return s()
            }
          }
        }
        if (c("function" == typeof FormData, "FormData is not available in this environment"), n.formData) a = Ee(n.formData), i = n.formData;
        else if (n.body instanceof FormData) a = Ee(n.body), i = n.body;
        else if (n.body instanceof URLSearchParams) a = n.body, i = Re(a);
        else if (null == n.body) a = new URLSearchParams, i = new FormData;
        else try {
          a = new URLSearchParams(n.body), i = Re(a)
        } catch (e) {
          return s()
        }
        let h = {
          formMethod: u,
          formAction: d,
          formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0
        };
        if (Me(h.formMethod)) return {
          path: r,
          submission: h
        };
        let f = m(r);
        return t && f.search && Oe(f.search) && a.append("index", ""), f.search = "?" + a, {
          path: p(f),
          submission: h
        }
      }

      function me(e, t, r, n, o, i, s, l, u, c, d, h, f, p) {
        let m = p ? Object.values(p)[0] : f ? Object.values(f)[0] : void 0,
          v = e.createURL(t.location),
          g = e.createURL(o),
          y = p ? Object.keys(p)[0] : void 0,
          b = function(e, t) {
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
              }(t.loaderData, t.matches[r], e) || s.some((t => t === e.route.id))) return !0;
            let o = t.matches[r],
              l = e;
            return ge(e, a({
              currentUrl: v,
              currentParams: o.params,
              nextUrl: g,
              nextParams: l.params
            }, n, {
              actionResult: m,
              defaultShouldRevalidate: i || v.pathname + v.search === g.pathname + g.search || v.search !== g.search || ve(o, l)
            }))
          })),
          E = [];
        return u.forEach(((e, o) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let s = w(d, e.path, h);
          if (!s) return void E.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let u = t.fetchers.get(o),
            f = Ne(s, e.path),
            p = !1;
          p = !c.has(o) && (!!l.includes(o) || (u && "idle" !== u.state && void 0 === u.data ? i : ge(f, a({
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: g,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: m,
            defaultShouldRevalidate: i
          })))), p && E.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: s,
            match: f,
            controller: new AbortController
          })
        })), [b, E]
      }

      function ve(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function ge(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }
      async function ye(e, t, r) {
        if (!e.lazy) return;
        let n = await e.lazy();
        if (!e.lazy) return;
        let o = r[e.id];
        c(o, "No route found in manifest");
        let i = {};
        for (let e in n) {
          let t = void 0 !== o[e] && "hasErrorBoundary" !== e;
          d(!t, 'Route "' + o.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || y.has(e) || (i[e] = n[e])
        }
        Object.assign(o, i), Object.assign(o, a({}, t(o), {
          lazy: void 0
        }))
      }
      async function be(e, t, r, n, o, a, i, s) {
        let l, u, d;
        void 0 === s && (s = {});
        let h = e => {
          let n, o = new Promise(((e, t) => n = t));
          return d = () => n(), t.signal.addEventListener("abort", d), Promise.race([e({
            request: t,
            params: r.params,
            context: s.requestContext
          }), o])
        };
        try {
          let n = r.route[e];
          if (r.route.lazy)
            if (n) {
              let e, t = await Promise.all([h(n).catch((t => {
                e = t
              })), ye(r.route, a, o)]);
              if (e) throw e;
              u = t[0]
            } else {
              if (await ye(r.route, a, o), n = r.route[e], !n) {
                if ("action" === e) {
                  let e = new URL(t.url),
                    n = e.pathname + e.search;
                  throw Le(405, {
                    method: t.method,
                    pathname: n,
                    routeId: r.route.id
                  })
                }
                return {
                  type: g.data,
                  data: void 0
                }
              }
              u = await h(n)
            }
          else {
            if (!n) {
              let e = new URL(t.url);
              throw Le(404, {
                pathname: e.pathname + e.search
              })
            }
            u = await h(n)
          }
          c(void 0 !== u, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          l = g.error, u = e
        } finally {
          d && t.signal.removeEventListener("abort", d)
        }
        if (null != (f = u) && "number" == typeof f.status && "string" == typeof f.statusText && "object" == typeof f.headers && void 0 !== f.body) {
          let e, o = u.status;
          if (oe.has(o)) {
            let e = u.headers.get("Location");
            if (c(e, "Redirects returned/thrown from loaders/actions must have a Location header"), ue.test(e)) {
              if (!s.isStaticRequest) {
                let r = new URL(t.url),
                  n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  o = null != O(n.pathname, i);
                n.origin === r.origin && o && (e = n.pathname + n.search + n.hash)
              }
            } else e = fe(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, e);
            if (s.isStaticRequest) throw u.headers.set("Location", e), u;
            return {
              type: g.redirect,
              status: o,
              location: e,
              revalidate: null !== u.headers.get("X-Remix-Revalidate"),
              reloadDocument: null !== u.headers.get("X-Remix-Reload-Document")
            }
          }
          if (s.isRouteRequest) throw {
            type: l === g.error ? g.error : g.data,
            response: u
          };
          let a = u.headers.get("Content-Type");
          return e = a && /\bapplication\/json\b/.test(a) ? await u.json() : await u.text(), l === g.error ? {
            type: l,
            error: new Q(o, u.statusText, e),
            headers: u.headers
          } : {
            type: g.data,
            data: e,
            statusCode: u.status,
            headers: u.headers
          }
        }
        var f, p, m;
        return l === g.error ? {
          type: l,
          error: u
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(u) ? {
          type: g.deferred,
          deferredData: u,
          statusCode: null == (p = u.init) ? void 0 : p.status,
          headers: (null == (m = u.init) ? void 0 : m.headers) && new Headers(u.init.headers)
        } : {
          type: g.data,
          data: u
        }
      }

      function we(e, t, r, n) {
        let o = e.createURL(Pe(t)).toString(),
          a = {
            signal: r
          };
        if (n && Me(n.formMethod)) {
          let {
            formMethod: e,
            formEncType: t
          } = n;
          a.method = e.toUpperCase(), "application/json" === t ? (a.headers = new Headers({
            "Content-Type": t
          }), a.body = JSON.stringify(n.json)) : "text/plain" === t ? a.body = n.text : "application/x-www-form-urlencoded" === t && n.formData ? a.body = Ee(n.formData) : a.body = n.formData
        }
        return new Request(o, a)
      }

      function Ee(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) t.append(r, "string" == typeof n ? n : n.name);
        return t
      }

      function Re(e) {
        let t = new FormData;
        for (let [r, n] of e.entries()) t.append(r, n);
        return t
      }

      function xe(e, t, r, n, o, i, s, l) {
        let {
          loaderData: u,
          errors: d
        } = function(e, t, r, n, o) {
          let a, i = {},
            s = null,
            l = !1,
            u = {};
          return r.forEach(((r, d) => {
            let h = t[d].route.id;
            if (c(!Ae(r), "Cannot handle redirect results in processLoaderData"), _e(r)) {
              let t = De(e, h),
                o = r.error;
              n && (o = Object.values(n)[0], n = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = o), i[h] = void 0, l || (l = !0, a = Z(r.error) ? r.error.status : 500), r.headers && (u[h] = r.headers)
            } else Te(r) ? (o.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || l || (a = r.statusCode), r.headers && (u[h] = r.headers)
          })), n && (s = n, i[Object.keys(n)[0]] = void 0), {
            loaderData: i,
            errors: s,
            statusCode: a || 200,
            loaderHeaders: u
          }
        }(t, r, n, o, l);
        for (let t = 0; t < i.length; t++) {
          let {
            key: r,
            match: n,
            controller: o
          } = i[t];
          c(void 0 !== s && void 0 !== s[t], "Did not find corresponding fetcher result");
          let l = s[t];
          if (!o || !o.signal.aborted)
            if (_e(l)) {
              let t = De(e.matches, null == n ? void 0 : n.route.id);
              d && d[t.route.id] || (d = a({}, d, {
                [t.route.id]: l.error
              })), e.fetchers.delete(r)
            } else if (Ae(l)) c(!1, "Unhandled fetcher revalidation redirect");
          else if (Te(l)) c(!1, "Unhandled fetcher deferred data");
          else {
            let t = ze(l.data);
            e.fetchers.set(r, t)
          }
        }
        return {
          loaderData: u,
          errors: d
        }
      }

      function Se(e, t, r, n) {
        let o = a({}, t);
        for (let a of r) {
          let r = a.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (o[r] = t[r]) : void 0 !== e[r] && a.route.loader && (o[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return o
      }

      function De(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function Ce(e) {
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

      function Le(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: o,
          type: a
        } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", o && r && n ? s = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === a ? s = "defer() is not supported in actions" : "invalid-body" === a && (s = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", s = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && n ? s = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')), new Q(e || 500, i, new Error(s), !0)
      }

      function ke(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (Ae(r)) return {
            result: r,
            idx: t
          }
        }
      }

      function Pe(e) {
        return p(a({}, "string" == typeof e ? m(e) : e, {
          hash: ""
        }))
      }

      function Te(e) {
        return e.type === g.deferred
      }

      function _e(e) {
        return e.type === g.error
      }

      function Ae(e) {
        return (e && e.type) === g.redirect
      }

      function Me(e) {
        return te.has(e.toLowerCase())
      }
      async function Ue(e, t, r, n, o, a) {
        for (let i = 0; i < r.length; i++) {
          let s = r[i],
            l = t[i];
          if (!l) continue;
          let u = e.find((e => e.route.id === l.route.id)),
            d = null != u && !ve(u, l) && void 0 !== (a && a[l.route.id]);
          if (Te(s) && (o || d)) {
            let e = n[i];
            c(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await je(s, e, o).then((e => {
              e && (r[i] = e || r[i])
            }))
          }
        }
      }
      async function je(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: g.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: g.error,
              error: e
            }
          }
          return {
            type: g.data,
            data: e.deferredData.data
          }
        }
      }

      function Oe(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function Ne(e, t) {
        let r = "string" == typeof t ? m(t).search : t.search;
        if (e[e.length - 1].route.index && Oe(r || "")) return e[e.length - 1];
        let n = F(e);
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

      function Fe(e, t) {
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

      function Ie(e, t) {
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

      function We() {
        return We = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, We.apply(this, arguments)
      }
      Symbol("deferred");
      const He = o.createContext(null),
        $e = o.createContext(null),
        Ke = o.createContext(null),
        Je = o.createContext(null),
        qe = o.createContext(null),
        Ve = o.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        Ye = o.createContext(null);

      function Xe(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        Ge() || c(!1);
        let {
          basename: n,
          navigator: a
        } = o.useContext(Je), {
          hash: i,
          pathname: s,
          search: l
        } = st(e, {
          relative: r
        }), u = s;
        return "/" !== n && (u = "/" === s ? n : z([n, s])), a.createHref({
          pathname: u,
          search: l,
          hash: i
        })
      }

      function Ge() {
        return null != o.useContext(qe)
      }

      function Qe() {
        return Ge() || c(!1), o.useContext(qe).location
      }

      function Ze() {
        return o.useContext(qe).navigationType
      }

      function et(e) {
        Ge() || c(!1);
        let {
          pathname: t
        } = Qe();
        return o.useMemo((() => U(e, t)), [t, e])
      }

      function tt(e) {
        o.useContext(Je).static || o.useLayoutEffect(e)
      }

      function rt() {
        let {
          isDataRoute: e
        } = o.useContext(Ve);
        return e ? function() {
          let {
            router: e
          } = gt(mt.UseNavigateStable), t = bt(vt.UseNavigateStable), r = o.useRef(!1);
          return tt((() => {
            r.current = !0
          })), o.useCallback((function(n, o) {
            void 0 === o && (o = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, We({
              fromRouteId: t
            }, o)))
          }), [e, t])
        }() : function() {
          Ge() || c(!1);
          let e = o.useContext(He),
            {
              basename: t,
              navigator: r
            } = o.useContext(Je),
            {
              matches: n
            } = o.useContext(Ve),
            {
              pathname: a
            } = Qe(),
            i = JSON.stringify(F(n).map((e => e.pathnameBase))),
            s = o.useRef(!1);
          return tt((() => {
            s.current = !0
          })), o.useCallback((function(n, o) {
            if (void 0 === o && (o = {}), !s.current) return;
            if ("number" == typeof n) return void r.go(n);
            let l = I(n, JSON.parse(i), a, "path" === o.relative);
            null == e && "/" !== t && (l.pathname = "/" === l.pathname ? t : z([t, l.pathname])), (o.replace ? r.replace : r.push)(l, o.state, o)
          }), [t, r, i, a, e])
        }()
      }
      const nt = o.createContext(null);

      function ot() {
        return o.useContext(nt)
      }

      function at(e) {
        let t = o.useContext(Ve).outlet;
        return t ? o.createElement(nt.Provider, {
          value: e
        }, t) : t
      }

      function it() {
        let {
          matches: e
        } = o.useContext(Ve), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function st(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: n
        } = o.useContext(Ve), {
          pathname: a
        } = Qe(), i = JSON.stringify(F(n).map((e => e.pathnameBase)));
        return o.useMemo((() => I(e, JSON.parse(i), a, "path" === r)), [e, i, a, r])
      }

      function lt(e, t) {
        return ut(e, t)
      }

      function ut(e, t, r) {
        Ge() || c(!1);
        let {
          navigator: a
        } = o.useContext(Je), {
          matches: i
        } = o.useContext(Ve), s = i[i.length - 1], l = s ? s.params : {}, u = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let d, h = Qe();
        if (t) {
          var f;
          let e = "string" == typeof t ? m(t) : t;
          "/" === u || (null == (f = e.pathname) ? void 0 : f.startsWith(u)) || c(!1), d = e
        } else d = h;
        let p = d.pathname || "/",
          v = w(e, {
            pathname: "/" === u ? p : p.slice(u.length) || "/"
          }),
          g = pt(v && v.map((e => Object.assign({}, e, {
            params: Object.assign({}, l, e.params),
            pathname: z([u, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? u : z([u, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), i, r);
        return t && g ? o.createElement(qe.Provider, {
          value: {
            location: We({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, d),
            navigationType: n.Pop
          }
        }, g) : g
      }

      function ct() {
        let e = Lt(),
          t = Z(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          n = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
          };
        return o.createElement(o.Fragment, null, o.createElement("h2", null, "Unexpected Application Error!"), o.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, t), r ? o.createElement("pre", {
          style: n
        }, r) : null, null)
      }
      const dt = o.createElement(ct, null);
      class ht extends o.Component {
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
          return this.state.error ? o.createElement(Ve.Provider, {
            value: this.props.routeContext
          }, o.createElement(Ye.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function ft(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, a = o.useContext(He);
        return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), o.createElement(Ve.Provider, {
          value: t
        }, n)
      }

      function pt(e, t, r) {
        var n;
        if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
          var a;
          if (null == (a = r) || !a.errors) return null;
          e = r.matches
        }
        let i = e,
          s = null == (n = r) ? void 0 : n.errors;
        if (null != s) {
          let e = i.findIndex((e => e.route.id && (null == s ? void 0 : s[e.route.id])));
          e >= 0 || c(!1), i = i.slice(0, Math.min(i.length, e + 1))
        }
        return i.reduceRight(((e, n, a) => {
          let l = n.route.id ? null == s ? void 0 : s[n.route.id] : null,
            u = null;
          r && (u = n.route.errorElement || dt);
          let c = t.concat(i.slice(0, a + 1)),
            d = () => {
              let t;
              return t = l ? u : n.route.Component ? o.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, o.createElement(ft, {
                match: n,
                routeContext: {
                  outlet: e,
                  matches: c,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === a) ? o.createElement(ht, {
            location: r.location,
            revalidation: r.revalidation,
            component: u,
            error: l,
            children: d(),
            routeContext: {
              outlet: null,
              matches: c,
              isDataRoute: !0
            }
          }) : d()
        }), null)
      }
      var mt = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(mt || {}),
        vt = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(vt || {});

      function gt(e) {
        let t = o.useContext(He);
        return t || c(!1), t
      }

      function yt(e) {
        let t = o.useContext($e);
        return t || c(!1), t
      }

      function bt(e) {
        let t = function(e) {
            let t = o.useContext(Ve);
            return t || c(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || c(!1), r.route.id
      }

      function wt() {
        return bt(vt.UseRouteId)
      }

      function Et() {
        return yt(vt.UseNavigation).navigation
      }

      function Rt() {
        let e = gt(mt.UseRevalidator),
          t = yt(vt.UseRevalidator);
        return o.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function xt() {
        let {
          matches: e,
          loaderData: t
        } = yt(vt.UseMatches);
        return o.useMemo((() => e.map((e => E(e, t)))), [e, t])
      }

      function St() {
        let e = yt(vt.UseLoaderData),
          t = bt(vt.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function Dt(e) {
        return yt(vt.UseRouteLoaderData).loaderData[e]
      }

      function Ct() {
        let e = yt(vt.UseActionData);
        return o.useContext(Ve) || c(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function Lt() {
        var e;
        let t = o.useContext(Ye),
          r = yt(vt.UseRouteError),
          n = bt(vt.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[n])
      }

      function kt() {
        let e = o.useContext(Ke);
        return null == e ? void 0 : e._data
      }

      function Pt() {
        let e = o.useContext(Ke);
        return null == e ? void 0 : e._error
      }
      let Tt = 0;

      function _t(e) {
        let {
          router: t,
          basename: r
        } = gt(mt.UseBlocker), n = yt(vt.UseBlocker), [a, i] = o.useState(""), s = o.useCallback((t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: n,
            nextLocation: o,
            historyAction: a
          } = t;
          return e({
            currentLocation: We({}, n, {
              pathname: O(n.pathname, r) || n.pathname
            }),
            nextLocation: We({}, o, {
              pathname: O(o.pathname, r) || o.pathname
            }),
            historyAction: a
          })
        }), [r, e]);
        return o.useEffect((() => {
          let e = String(++Tt);
          return i(e), () => t.deleteBlocker(e)
        }), [t]), o.useEffect((() => {
          "" !== a && t.getBlocker(a, s)
        }), [t, a, s]), a && n.blockers.has(a) ? n.blockers.get(a) : le
      }
      const At = o.startTransition;

      function Mt(e) {
        let {
          basename: t,
          children: r,
          initialEntries: n,
          initialIndex: a,
          future: i
        } = e, l = o.useRef();
        null == l.current && (l.current = s({
          initialEntries: n,
          initialIndex: a,
          v5Compat: !0
        }));
        let u = l.current,
          [c, d] = o.useState({
            action: u.action,
            location: u.location
          }),
          {
            v7_startTransition: h
          } = i || {},
          f = o.useCallback((e => {
            h && At ? At((() => d(e))) : d(e)
          }), [d, h]);
        return o.useLayoutEffect((() => u.listen(f)), [u, f]), o.createElement(Nt, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: u
        })
      }

      function Ut(e) {
        let {
          to: t,
          replace: r,
          state: n,
          relative: a
        } = e;
        Ge() || c(!1);
        let {
          matches: i
        } = o.useContext(Ve), {
          pathname: s
        } = Qe(), l = rt(), u = I(t, F(i).map((e => e.pathnameBase)), s, "path" === a), d = JSON.stringify(u);
        return o.useEffect((() => l(JSON.parse(d), {
          replace: r,
          state: n,
          relative: a
        })), [l, d, a, r, n]), null
      }

      function jt(e) {
        return at(e.context)
      }

      function Ot(e) {
        c(!1)
      }

      function Nt(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: a,
          navigationType: i = n.Pop,
          navigator: s,
          static: l = !1
        } = e;
        Ge() && c(!1);
        let u = t.replace(/^\/*/, "/"),
          d = o.useMemo((() => ({
            basename: u,
            navigator: s,
            static: l
          })), [u, s, l]);
        "string" == typeof a && (a = m(a));
        let {
          pathname: h = "/",
          search: f = "",
          hash: p = "",
          state: v = null,
          key: g = "default"
        } = a, y = o.useMemo((() => {
          let e = O(h, u);
          return null == e ? null : {
            location: {
              pathname: e,
              search: f,
              hash: p,
              state: v,
              key: g
            },
            navigationType: i
          }
        }), [u, h, f, p, v, g, i]);
        return null == y ? null : o.createElement(Je.Provider, {
          value: d
        }, o.createElement(qe.Provider, {
          children: r,
          value: y
        }))
      }

      function Bt(e) {
        let {
          children: t,
          location: r
        } = e;
        return lt($t(t), r)
      }

      function Ft(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return o.createElement(Wt, {
          resolve: n,
          errorElement: r
        }, o.createElement(Ht, null, t))
      }
      var It = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(It || {});
      const zt = new Promise((() => {}));
      class Wt extends o.Component {
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
          } = this.props, n = null, a = It.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              a = It.error;
              let e = this.state.error;
              n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, a = void 0 !== n._error ? It.error : void 0 !== n._data ? It.success : It.pending) : (a = It.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else a = It.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (a === It.error && n._error instanceof J) throw zt;
          if (a === It.error && !t) throw n._error;
          if (a === It.error) return o.createElement(Ke.Provider, {
            value: n,
            children: t
          });
          if (a === It.success) return o.createElement(Ke.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function Ht(e) {
        let {
          children: t
        } = e, r = kt(), n = "function" == typeof t ? t(r) : t;
        return o.createElement(o.Fragment, null, n)
      }

      function $t(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return o.Children.forEach(e, ((e, n) => {
          if (!o.isValidElement(e)) return;
          let a = [...t, n];
          if (e.type === o.Fragment) return void r.push.apply(r, $t(e.props.children, a));
          e.type !== Ot && c(!1), e.props.index && e.props.children && c(!1);
          let i = {
            id: e.props.id || a.join("-"),
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
          e.props.children && (i.children = $t(e.props.children, a)), r.push(i)
        })), r
      }

      function Kt(e) {
        return pt(e)
      }

      function Jt(e) {
        let t = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
        };
        return e.Component && Object.assign(t, {
          element: o.createElement(e.Component),
          Component: void 0
        }), e.ErrorBoundary && Object.assign(t, {
          errorElement: o.createElement(e.ErrorBoundary),
          ErrorBoundary: void 0
        }), t
      }

      function qt(e, t) {
        return he({
          basename: null == t ? void 0 : t.basename,
          future: We({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: s({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          mapRouteProperties: Jt
        }).initialize()
      }

      function Vt() {
        return Vt = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Vt.apply(this, arguments)
      }

      function Yt(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }
      const Xt = "get",
        Gt = "application/x-www-form-urlencoded";

      function Qt(e) {
        return null != e && "string" == typeof e.tagName
      }

      function Zt(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
            [r, n]
          ])
        }), []))
      }
      let er = null;
      const tr = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function rr(e) {
        return null == e || tr.has(e) ? e : null
      }

      function nr(e, t) {
        let r, n, o, a, i;
        if (Qt(s = e) && "form" === s.tagName.toLowerCase()) {
          let i = e.getAttribute("action");
          n = i ? O(i, t) : null, r = e.getAttribute("method") || Xt, o = rr(e.getAttribute("enctype")) || Gt, a = new FormData(e)
        } else if (function(e) {
            return Qt(e) && "button" === e.tagName.toLowerCase()
          }(e) || function(e) {
            return Qt(e) && "input" === e.tagName.toLowerCase()
          }(e) && ("submit" === e.type || "image" === e.type)) {
          let i = e.form;
          if (null == i) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let s = e.getAttribute("formaction") || i.getAttribute("action");
          if (n = s ? O(s, t) : null, r = e.getAttribute("formmethod") || i.getAttribute("method") || Xt, o = rr(e.getAttribute("formenctype")) || rr(i.getAttribute("enctype")) || Gt, a = new FormData(i, e), ! function() {
              if (null === er) try {
                new FormData(document.createElement("form"), 0), er = !1
              } catch (e) {
                er = !0
              }
              return er
            }()) {
            let {
              name: t,
              type: r,
              value: n
            } = e;
            if ("image" === r) {
              let e = t ? t + "." : "";
              a.append(e + "x", "0"), a.append(e + "y", "0")
            } else t && a.append(t, n)
          }
        } else {
          if (Qt(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
          r = Xt, n = null, o = Gt, i = e
        }
        var s;
        return a && "text/plain" === o && (i = a, a = void 0), {
          action: n,
          method: r.toLowerCase(),
          encType: o,
          formData: a,
          body: i
        }
      }
      const or = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
        ar = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
        ir = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

      function sr(e, t) {
        return he({
          basename: null == t ? void 0 : t.basename,
          future: Vt({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: l({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || ur(),
          routes: e,
          mapRouteProperties: Jt,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function lr(e, t) {
        return he({
          basename: null == t ? void 0 : t.basename,
          future: Vt({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: u({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || ur(),
          routes: e,
          mapRouteProperties: Jt,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function ur() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = Vt({}, t, {
          errors: cr(t.errors)
        })), t
      }

      function cr(e) {
        if (!e) return null;
        let t = Object.entries(e),
          r = {};
        for (let [e, n] of t)
          if (n && "RouteErrorResponse" === n.__type) r[e] = new Q(n.status, n.statusText, n.data, !0 === n.internal);
          else if (n && "Error" === n.__type) {
          if (n.__subType) {
            let t = window[n.__subType];
            if ("function" == typeof t) try {
              let o = new t(n.message);
              o.stack = "", r[e] = o
            } catch (e) {}
          }
          if (null == r[e]) {
            let t = new Error(n.message);
            t.stack = "", r[e] = t
          }
        } else r[e] = n;
        return r
      }
      const dr = o.createContext({
          isTransitioning: !1
        }),
        hr = o.startTransition;
      class fr {
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

      function pr(e) {
        let {
          fallbackElement: t,
          router: r,
          future: n
        } = e, [a, i] = o.useState(r.state), [s, l] = o.useState(), [u, c] = o.useState({
          isTransitioning: !1
        }), [d, h] = o.useState(), [f, p] = o.useState(), [m, v] = o.useState(), {
          v7_startTransition: g
        } = n || {}, y = o.useCallback((e => {
          g ? function(e) {
            hr ? hr(e) : e()
          }(e) : e()
        }), [g]), b = o.useCallback(((e, t) => {
          let {
            unstable_viewTransitionOpts: n
          } = t;
          n && null != r.window && "function" == typeof r.window.document.startViewTransition ? f && d ? (d.resolve(), f.skipTransition(), v({
            state: e,
            currentLocation: n.currentLocation,
            nextLocation: n.nextLocation
          })) : (l(e), c({
            isTransitioning: !0,
            currentLocation: n.currentLocation,
            nextLocation: n.nextLocation
          })) : y((() => i(e)))
        }), [y, f, d, r.window]);
        o.useLayoutEffect((() => r.subscribe(b)), [r, b]), o.useEffect((() => {
          u.isTransitioning && h(new fr)
        }), [u.isTransitioning]), o.useEffect((() => {
          if (d && s && r.window) {
            let e = s,
              t = d.promise,
              n = r.window.document.startViewTransition((async () => {
                y((() => i(e))), await t
              }));
            n.finished.finally((() => {
              h(void 0), p(void 0), l(void 0), c({
                isTransitioning: !1
              })
            })), p(n)
          }
        }), [y, s, d, r.window]), o.useEffect((() => {
          d && s && a.location.key === s.location.key && d.resolve()
        }), [d, f, a.location, s]), o.useEffect((() => {
          !u.isTransitioning && m && (l(m.state), c({
            isTransitioning: !0,
            currentLocation: m.currentLocation,
            nextLocation: m.nextLocation
          }), v(void 0))
        }), [u.isTransitioning, m]);
        let w = o.useMemo((() => ({
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
          E = r.basename || "/",
          R = o.useMemo((() => ({
            router: r,
            navigator: w,
            static: !1,
            basename: E
          })), [r, w, E]);
        return o.createElement(o.Fragment, null, o.createElement(He.Provider, {
          value: R
        }, o.createElement($e.Provider, {
          value: a
        }, o.createElement(dr.Provider, {
          value: u
        }, o.createElement(Nt, {
          basename: E,
          location: a.location,
          navigationType: a.historyAction,
          navigator: w
        }, a.initialized ? o.createElement(mr, {
          routes: r.routes,
          state: a
        }) : t)))), null)
      }

      function mr(e) {
        let {
          routes: t,
          state: r
        } = e;
        return ut(t, void 0, r)
      }

      function vr(e) {
        let {
          basename: t,
          children: r,
          future: n,
          window: a
        } = e, i = o.useRef();
        null == i.current && (i.current = l({
          window: a,
          v5Compat: !0
        }));
        let s = i.current,
          [u, c] = o.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: d
          } = n || {},
          h = o.useCallback((e => {
            d && hr ? hr((() => c(e))) : c(e)
          }), [c, d]);
        return o.useLayoutEffect((() => s.listen(h)), [s, h]), o.createElement(Nt, {
          basename: t,
          children: r,
          location: u.location,
          navigationType: u.action,
          navigator: s
        })
      }

      function gr(e) {
        let {
          basename: t,
          children: r,
          future: n,
          window: a
        } = e, i = o.useRef();
        null == i.current && (i.current = u({
          window: a,
          v5Compat: !0
        }));
        let s = i.current,
          [l, c] = o.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: d
          } = n || {},
          h = o.useCallback((e => {
            d && hr ? hr((() => c(e))) : c(e)
          }), [c, d]);
        return o.useLayoutEffect((() => s.listen(h)), [s, h]), o.createElement(Nt, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: s
        })
      }

      function yr(e) {
        let {
          basename: t,
          children: r,
          future: n,
          history: a
        } = e, [i, s] = o.useState({
          action: a.action,
          location: a.location
        }), {
          v7_startTransition: l
        } = n || {}, u = o.useCallback((e => {
          l && hr ? hr((() => s(e))) : s(e)
        }), [s, l]);
        return o.useLayoutEffect((() => a.listen(u)), [a, u]), o.createElement(Nt, {
          basename: t,
          children: r,
          location: i.location,
          navigationType: i.action,
          navigator: a
        })
      }
      const br = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        wr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Er = o.forwardRef((function(e, t) {
          let r, {
              onClick: n,
              relative: a,
              reloadDocument: i,
              replace: s,
              state: l,
              target: u,
              to: c,
              preventScrollReset: d,
              unstable_viewTransition: h
            } = e,
            f = Yt(e, or),
            {
              basename: p
            } = o.useContext(Je),
            m = !1;
          if ("string" == typeof c && wr.test(c) && (r = c, br)) try {
            let e = new URL(window.location.href),
              t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
              r = O(t.pathname, p);
            t.origin === e.origin && null != r ? c = r + t.search + t.hash : m = !0
          } catch (e) {}
          let v = Xe(c, {
              relative: a
            }),
            g = Tr(c, {
              replace: s,
              state: l,
              target: u,
              preventScrollReset: d,
              relative: a,
              unstable_viewTransition: h
            });
          return o.createElement("a", Vt({}, f, {
            href: r || v,
            onClick: m || i ? n : function(e) {
              n && n(e), e.defaultPrevented || g(e)
            },
            ref: t,
            target: u
          }))
        })),
        Rr = o.forwardRef((function(e, t) {
          let {
            "aria-current": r = "page",
            caseSensitive: n = !1,
            className: a = "",
            end: i = !1,
            style: s,
            to: l,
            unstable_viewTransition: u,
            children: c
          } = e, d = Yt(e, ar), h = st(l, {
            relative: d.relative
          }), f = Qe(), p = o.useContext($e), {
            navigator: m
          } = o.useContext(Je), v = null != p && $r(h) && !0 === u, g = m.encodeLocation ? m.encodeLocation(h).pathname : h.pathname, y = f.pathname, b = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
          n || (y = y.toLowerCase(), b = b ? b.toLowerCase() : null, g = g.toLowerCase());
          let w, E = y === g || !i && y.startsWith(g) && "/" === y.charAt(g.length),
            R = null != b && (b === g || !i && b.startsWith(g) && "/" === b.charAt(g.length)),
            x = {
              isActive: E,
              isPending: R,
              isTransitioning: v
            },
            S = E ? r : void 0;
          w = "function" == typeof a ? a(x) : [a, E ? "active" : null, R ? "pending" : null, v ? "transitioning" : null].filter(Boolean).join(" ");
          let D = "function" == typeof s ? s(x) : s;
          return o.createElement(Er, Vt({}, d, {
            "aria-current": S,
            className: w,
            ref: t,
            style: D,
            to: l,
            unstable_viewTransition: u
          }), "function" == typeof c ? c(x) : c)
        })),
        xr = o.forwardRef(((e, t) => {
          let r = Mr();
          return o.createElement(Sr, Vt({}, e, {
            submit: r,
            ref: t
          }))
        })),
        Sr = o.forwardRef(((e, t) => {
          let {
            reloadDocument: r,
            replace: n,
            state: a,
            method: i = Xt,
            action: s,
            onSubmit: l,
            submit: u,
            relative: c,
            preventScrollReset: d,
            unstable_viewTransition: h
          } = e, f = Yt(e, ir), p = "get" === i.toLowerCase() ? "get" : "post", m = jr(s, {
            relative: c
          });
          return o.createElement("form", Vt({
            ref: t,
            method: p,
            action: m,
            onSubmit: r ? l : e => {
              if (l && l(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                r = (null == t ? void 0 : t.getAttribute("formmethod")) || i;
              u(t || e.currentTarget, {
                method: r,
                replace: n,
                state: a,
                relative: c,
                preventScrollReset: d,
                unstable_viewTransition: h
              })
            }
          }, f))
        }));

      function Dr(e) {
        let {
          getKey: t,
          storageKey: r
        } = e;
        return zr({
          getKey: t,
          storageKey: r
        }), null
      }
      var Cr, Lr;

      function kr(e) {
        let t = o.useContext(He);
        return t || c(!1), t
      }

      function Pr(e) {
        let t = o.useContext($e);
        return t || c(!1), t
      }

      function Tr(e, t) {
        let {
          target: r,
          replace: n,
          state: a,
          preventScrollReset: i,
          relative: s,
          unstable_viewTransition: l
        } = void 0 === t ? {} : t, u = rt(), c = Qe(), d = st(e, {
          relative: s
        });
        return o.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, r)) {
            t.preventDefault();
            let r = void 0 !== n ? n : p(c) === p(d);
            u(e, {
              replace: r,
              state: a,
              preventScrollReset: i,
              relative: s,
              unstable_viewTransition: l
            })
          }
        }), [c, u, d, n, a, r, e, i, s, l])
      }

      function _r(e) {
        let t = o.useRef(Zt(e)),
          r = o.useRef(!1),
          n = Qe(),
          a = o.useMemo((() => function(e, t) {
            let r = Zt(e);
            return t && t.forEach(((e, n) => {
              r.has(n) || t.getAll(n).forEach((e => {
                r.append(n, e)
              }))
            })), r
          }(n.search, r.current ? null : t.current)), [n.search]),
          i = rt(),
          s = o.useCallback(((e, t) => {
            const n = Zt("function" == typeof e ? e(a) : e);
            r.current = !0, i("?" + n, t)
          }), [i, a]);
        return [a, s]
      }

      function Ar() {
        if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
      }

      function Mr() {
        let {
          router: e
        } = kr(Cr.UseSubmit), {
          basename: t
        } = o.useContext(Je), r = wt();
        return o.useCallback((function(n, o) {
          void 0 === o && (o = {}), Ar();
          let {
            action: a,
            method: i,
            encType: s,
            formData: l,
            body: u
          } = nr(n, t);
          e.navigate(o.action || a, {
            preventScrollReset: o.preventScrollReset,
            formData: l,
            body: u,
            formMethod: o.method || i,
            formEncType: o.encType || s,
            replace: o.replace,
            state: o.state,
            fromRouteId: r,
            unstable_viewTransition: o.unstable_viewTransition
          })
        }), [e, t, r])
      }

      function Ur(e, t) {
        let {
          router: r
        } = kr(Cr.UseSubmitFetcher), {
          basename: n
        } = o.useContext(Je);
        return o.useCallback((function(o, a) {
          void 0 === a && (a = {}), Ar();
          let {
            action: i,
            method: s,
            encType: l,
            formData: u,
            body: d
          } = nr(o, n);
          null == t && c(!1), r.fetch(e, t, a.action || i, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: d,
            formMethod: a.method || s,
            formEncType: a.encType || l
          })
        }), [r, n, e, t])
      }

      function jr(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: n
        } = o.useContext(Je), a = o.useContext(Ve);
        a || c(!1);
        let [i] = a.matches.slice(-1), s = Vt({}, st(e || ".", {
          relative: r
        })), l = Qe();
        if (null == e && (s.search = l.search, i.route.index)) {
          let e = new URLSearchParams(s.search);
          e.delete("index"), s.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !i.route.index || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (s.pathname = "/" === s.pathname ? n : z([n, s.pathname])), p(s)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(Cr || (Cr = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(Lr || (Lr = {}));
      let Or = 0;

      function Nr() {
        var e;
        let {
          router: t
        } = kr(Cr.UseFetcher), r = o.useContext(Ve);
        r || c(!1);
        let n = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
        null == n && c(!1);
        let [a] = o.useState((() => String(++Or))), [i] = o.useState((() => (n || c(!1), function(e, t) {
          return o.forwardRef(((r, n) => {
            let a = Ur(e, t);
            return o.createElement(Sr, Vt({}, r, {
              ref: n,
              submit: a
            }))
          }))
        }(a, n)))), [s] = o.useState((() => e => {
          t || c(!1), n || c(!1), t.fetch(a, n, e)
        })), l = Ur(a, n), u = t.getFetcher(a), d = o.useMemo((() => Vt({
          Form: i,
          submit: l,
          load: s
        }, u)), [u, i, l, s]);
        return o.useEffect((() => () => {
          t ? t.deleteFetcher(a) : console.warn("No router available to clean up from useFetcher()")
        }), [t, a]), d
      }

      function Br() {
        return [...Pr(Lr.UseFetchers).fetchers.values()]
      }
      const Fr = "react-router-scroll-positions";
      let Ir = {};

      function zr(e) {
        let {
          getKey: t,
          storageKey: r
        } = void 0 === e ? {} : e, {
          router: n
        } = kr(Cr.UseScrollRestoration), {
          restoreScrollPosition: a,
          preventScrollReset: i
        } = Pr(Lr.UseScrollRestoration), {
          basename: s
        } = o.useContext(Je), l = Qe(), u = xt(), c = Et();
        o.useEffect((() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          })), []),
          function(e, t) {
            let {
              capture: r
            } = {};
            o.useEffect((() => {
              let t = null != r ? {
                capture: r
              } : void 0;
              return window.addEventListener("pagehide", e, t), () => {
                window.removeEventListener("pagehide", e, t)
              }
            }), [e, r])
          }(o.useCallback((() => {
            if ("idle" === c.state) {
              let e = (t ? t(l, u) : null) || l.key;
              Ir[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(r || Fr, JSON.stringify(Ir))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }), [r, t, c.state, l, u])), "undefined" != typeof document && (o.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(r || Fr);
              e && (Ir = JSON.parse(e))
            } catch (e) {}
          }), [r]), o.useLayoutEffect((() => {
            let e = t && "/" !== s ? (e, r) => t(Vt({}, e, {
                pathname: O(e.pathname, s) || e.pathname
              }), r) : t,
              r = null == n ? void 0 : n.enableScrollRestoration(Ir, (() => window.scrollY), e);
            return () => r && r()
          }), [n, s, t]), o.useLayoutEffect((() => {
            if (!1 !== a)
              if ("number" != typeof a) {
                if (l.hash) {
                  let e = document.getElementById(decodeURIComponent(l.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== i && window.scrollTo(0, 0)
              } else window.scrollTo(0, a)
          }), [l, a, i]))
      }

      function Wr(e, t) {
        let {
          capture: r
        } = t || {};
        o.useEffect((() => {
          let t = null != r ? {
            capture: r
          } : void 0;
          return window.addEventListener("beforeunload", e, t), () => {
            window.removeEventListener("beforeunload", e, t)
          }
        }), [e, r])
      }

      function Hr(e) {
        let {
          when: t,
          message: r
        } = e, n = _t(t);
        o.useEffect((() => {
          "blocked" === n.state && (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset())
        }), [n, r]), o.useEffect((() => {
          "blocked" !== n.state || t || n.reset()
        }), [n, t])
      }

      function $r(e, t) {
        void 0 === t && (t = {});
        let r = o.useContext(dr);
        null == r && c(!1);
        let {
          basename: n
        } = kr(Cr.useViewTransitionState), a = st(e, {
          relative: t.relative
        });
        if (!r.isTransitioning) return !1;
        let i = O(r.currentLocation.pathname, n) || r.currentLocation.pathname,
          s = O(r.nextLocation.pathname, n) || r.nextLocation.pathname;
        return null != U(a.pathname, s) || null != U(a.pathname, i)
      }
    }
  }
]);