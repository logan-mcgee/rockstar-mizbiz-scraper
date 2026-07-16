try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e87ab922-fa50-4842-ac78-608e349be5e1", e._sentryDebugIdIdentifier = "sentry-dbid-e87ab922-fa50-4842-ac78-608e349be5e1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstar-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [860], {
    9860(e, t, r) {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => q,
        Await: () => rr,
        BrowserRouter: () => Fr,
        Form: () => Kr,
        HashRouter: () => Nr,
        Link: () => Hr,
        MemoryRouter: () => Xt,
        NavLink: () => Wr,
        Navigate: () => Gt,
        NavigationType: () => n,
        Outlet: () => Qt,
        Route: () => Zt,
        Router: () => er,
        RouterProvider: () => Ur,
        Routes: () => tr,
        ScrollRestoration: () => $r,
        UNSAFE_DataRouterContext: () => at,
        UNSAFE_DataRouterStateContext: () => ot,
        UNSAFE_ErrorResponseImpl: () => re,
        UNSAFE_FetchersContext: () => kr,
        UNSAFE_LocationContext: () => lt,
        UNSAFE_NavigationContext: () => st,
        UNSAFE_RouteContext: () => ut,
        UNSAFE_ViewTransitionContext: () => Lr,
        UNSAFE_useRouteId: () => jt,
        UNSAFE_useScrollRestoration: () => sn,
        createBrowserRouter: () => Rr,
        createHashRouter: () => xr,
        createMemoryRouter: () => cr,
        createPath: () => y,
        createRoutesFromChildren: () => sr,
        createRoutesFromElements: () => sr,
        createSearchParams: () => vr,
        defer: () => Q,
        generatePath: () => A,
        isRouteErrorResponse: () => ne,
        json: () => Y,
        matchPath: () => M,
        matchRoutes: () => R,
        parsePath: () => g,
        redirect: () => Z,
        redirectDocument: () => ee,
        renderMatches: () => lr,
        replace: () => te,
        resolvePath: () => F,
        unstable_HistoryRouter: () => Ir,
        unstable_usePrompt: () => un,
        useActionData: () => zt,
        useAsyncError: () => Kt,
        useAsyncValue: () => Wt,
        useBeforeUnload: () => ln,
        useBlocker: () => Vt,
        useFetcher: () => rn,
        useFetchers: () => nn,
        useFormAction: () => tn,
        useHref: () => dt,
        useInRouterContext: () => ht,
        useLinkClickHandler: () => Xr,
        useLoaderData: () => It,
        useLocation: () => ft,
        useMatch: () => mt,
        useMatches: () => Nt,
        useNavigate: () => yt,
        useNavigation: () => Ot,
        useNavigationType: () => pt,
        useOutlet: () => wt,
        useOutletContext: () => bt,
        useParams: () => Et,
        useResolvedPath: () => St,
        useRevalidator: () => Ft,
        useRouteError: () => Ht,
        useRouteLoaderData: () => Bt,
        useRoutes: () => Rt,
        useSearchParams: () => Gr,
        useSubmit: () => en,
        useViewTransitionState: () => cn
      });
      var n, a = r(3082),
        o = r.t(a, 2),
        i = r(4017),
        s = r.t(i, 2);

      function l() {
        return l = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, l.apply(null, arguments)
      }! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(n || (n = {}));
      const u = "popstate";

      function c(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: a,
          v5Compat: o = !1
        } = e;
        t = r.map((e, t) => d(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0));
        let i = u(a ?? t.length - 1),
          s = n.Pop,
          l = null;

        function u(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function c() {
          return t[i]
        }

        function d(e, r, n) {
          void 0 === r && (r = null);
          let a = v(t ? c().pathname : "/", e, r, n);
          return p("/" === a.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), a
        }

        function h(e) {
          return "string" == typeof e ? e : y(e)
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
          createHref: h,
          createURL: e => new URL(h(e), "http://localhost"),
          encodeLocation(e) {
            let t = "string" == typeof e ? g(e) : e;
            return {
              pathname: t.pathname || "",
              search: t.search || "",
              hash: t.hash || ""
            }
          },
          push(e, r) {
            s = n.Push;
            let a = d(e, r);
            i += 1, t.splice(i, t.length, a), o && l && l({
              action: s,
              location: a,
              delta: 1
            })
          },
          replace(e, r) {
            s = n.Replace;
            let a = d(e, r);
            t[i] = a, o && l && l({
              action: s,
              location: a,
              delta: 0
            })
          },
          go(e) {
            s = n.Pop;
            let r = u(i + e),
              a = t[r];
            i = r, l && l({
              action: s,
              location: a,
              delta: e
            })
          },
          listen: e => (l = e, () => {
            l = null
          })
        }
      }

      function d(e) {
        return void 0 === e && (e = {}), b(function(e, t) {
          let {
            pathname: r,
            search: n,
            hash: a
          } = e.location;
          return v("", {
            pathname: r,
            search: n,
            hash: a
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }, function(e, t) {
          return "string" == typeof t ? t : y(t)
        }, null, e)
      }

      function h(e) {
        return void 0 === e && (e = {}), b(function(e, t) {
          let {
            pathname: r = "/",
            search: n = "",
            hash: a = ""
          } = g(e.location.hash.substr(1));
          return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), v("", {
            pathname: r,
            search: n,
            hash: a
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }, function(e, t) {
          let r = e.document.querySelector("base"),
            n = "";
          if (r && r.getAttribute("href")) {
            let t = e.location.href,
              r = t.indexOf("#");
            n = -1 === r ? t : t.slice(0, r)
          }
          return n + "#" + ("string" == typeof t ? t : y(t))
        }, function(e, t) {
          p("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
        }, e)
      }

      function f(e, t) {
        if (!1 === e || null == e) throw new Error(t)
      }

      function p(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function m(e, t) {
        return {
          usr: e.state,
          key: e.key,
          idx: t
        }
      }

      function v(e, t, r, n) {
        return void 0 === r && (r = null), l({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? g(t) : t, {
          state: r,
          key: t && t.key || n || Math.random().toString(36).substr(2, 8)
        })
      }

      function y(e) {
        let {
          pathname: t = "/",
          search: r = "",
          hash: n = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n), t
      }

      function g(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let n = e.indexOf("?");
          n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
        }
        return t
      }

      function b(e, t, r, a) {
        void 0 === a && (a = {});
        let {
          window: o = document.defaultView,
          v5Compat: i = !1
        } = a, s = o.history, c = n.Pop, d = null, h = p();

        function p() {
          return (s.state || {
            idx: null
          }).idx
        }

        function g() {
          c = n.Pop;
          let e = p(),
            t = null == e ? null : e - h;
          h = e, d && d({
            action: c,
            location: w.location,
            delta: t
          })
        }

        function b(e) {
          let t = "null" !== o.location.origin ? o.location.origin : o.location.href,
            r = "string" == typeof e ? e : y(e);
          return r = r.replace(/ $/, "%20"), f(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
        }
        null == h && (h = 0, s.replaceState(l({}, s.state, {
          idx: h
        }), ""));
        let w = {
          get action() {
            return c
          },
          get location() {
            return e(o, s)
          },
          listen(e) {
            if (d) throw new Error("A history only accepts one active listener");
            return o.addEventListener(u, g), d = e, () => {
              o.removeEventListener(u, g), d = null
            }
          },
          createHref: e => t(o, e),
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
            c = n.Push;
            let a = v(w.location, e, t);
            r && r(a, e), h = p() + 1;
            let l = m(a, h),
              u = w.createHref(a);
            try {
              s.pushState(l, "", u)
            } catch (e) {
              if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
              o.location.assign(u)
            }
            i && d && d({
              action: c,
              location: w.location,
              delta: 1
            })
          },
          replace: function(e, t) {
            c = n.Replace;
            let a = v(w.location, e, t);
            r && r(a, e), h = p();
            let o = m(a, h),
              l = w.createHref(a);
            s.replaceState(o, "", l), i && d && d({
              action: c,
              location: w.location,
              delta: 0
            })
          },
          go: e => s.go(e)
        };
        return w
      }
      var w;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(w || (w = {}));
      const E = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function S(e, t, r, n) {
        return void 0 === r && (r = []), void 0 === n && (n = {}), e.map((e, a) => {
          let o = [...r, String(a)],
            i = "string" == typeof e.id ? e.id : o.join("-");
          if (f(!0 !== e.index || !e.children, "Cannot specify children on an index route"), f(!n[i], 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = l({}, e, t(e), {
              id: i
            });
            return n[i] = r, r
          } {
            let r = l({}, e, t(e), {
              id: i,
              children: void 0
            });
            return n[i] = r, e.children && (r.children = S(e.children, t, o, n)), r
          }
        })
      }

      function R(e, t, r) {
        return void 0 === r && (r = "/"), x(e, t, r, !1)
      }

      function x(e, t, r, n) {
        let a = j(("string" == typeof t ? g(t) : t).pathname || "/", r);
        if (null == a) return null;
        let o = C(e);
        ! function(e) {
          e.sort((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every((e, r) => e === t[r]) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)))
        }(o);
        let i = null,
          s = U(a);
        for (let e = 0; null == i && e < o.length; ++e) i = _(o[e], s, n);
        return i
      }

      function D(e, t) {
        let {
          route: r,
          pathname: n,
          params: a
        } = e;
        return {
          id: r.id,
          pathname: n,
          params: a,
          data: t[r.id],
          handle: r.handle
        }
      }

      function C(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e
          };
          i.relativePath.startsWith("/") && (f(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
          let s = K([n, i.relativePath]),
            l = r.concat(i);
          e.children && e.children.length > 0 && (f(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), C(e.children, t, l, s)), (null != e.path || e.index) && t.push({
            path: s,
            score: T(s, e.index),
            routesMeta: l
          })
        };
        return e.forEach((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of L(e.path)) a(e, t, r);
          else a(e, t)
        }), t
      }

      function L(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === n.length) return a ? [o, ""] : [o];
        let i = L(n.join("/")),
          s = [];
        return s.push(...i.map(e => "" === e ? o : [o, e].join("/"))), a && s.push(...i), s.map(t => e.startsWith("/") && "" === t ? "/" : t)
      }
      const k = /^:[\w-]+$/,
        P = e => "*" === e;

      function T(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(P) && (n += -2), t && (n += 2), r.filter(e => !P(e)).reduce((e, t) => e + (k.test(t) ? 3 : "" === t ? 1 : 10), n)
      }

      function _(e, t, r) {
        void 0 === r && (r = !1);
        let {
          routesMeta: n
        } = e, a = {}, o = "/", i = [];
        for (let e = 0; e < n.length; ++e) {
          let s = n[e],
            l = e === n.length - 1,
            u = "/" === o ? t : t.slice(o.length) || "/",
            c = M({
              path: s.relativePath,
              caseSensitive: s.caseSensitive,
              end: l
            }, u),
            d = s.route;
          if (!c && l && r && !n[n.length - 1].route.index && (c = M({
              path: s.relativePath,
              caseSensitive: s.caseSensitive,
              end: !1
            }, u)), !c) return null;
          Object.assign(a, c.params), i.push({
            params: a,
            pathname: K([o, c.pathname]),
            pathnameBase: $(K([o, c.pathnameBase])),
            route: d
          }), "/" !== c.pathnameBase && (o = K([o, c.pathnameBase]))
        }
        return i
      }

      function A(e, t) {
        void 0 === t && (t = {});
        let r = e;
        r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (p(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*"));
        const n = r.startsWith("/") ? "/" : "",
          a = e => null == e ? "" : "string" == typeof e ? e : String(e);
        return n + r.split(/\/+/).map((e, r, n) => {
          if (r === n.length - 1 && "*" === e) return a(t["*"]);
          const o = e.match(/^:([\w-]+)(\??)$/);
          if (o) {
            const [, e, r] = o;
            let n = t[e];
            return f("?" === r || null != n, 'Missing ":' + e + '" param'), a(n)
          }
          return e.replace(/\?$/g, "")
        }).filter(e => !!e).join("/")
      }

      function M(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), p("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let n = [],
            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, r) => (n.push({
              paramName: t,
              isOptional: null != r
            }), r ? "/?([^\\/]+)?" : "/([^\\/]+)"));
          return e.endsWith("*") ? (n.push({
            paramName: "*"
          }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n]
        }(e.path, e.caseSensitive, e.end), a = t.match(r);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          s = a.slice(1);
        return {
          params: n.reduce((e, t, r) => {
            let {
              paramName: n,
              isOptional: a
            } = t;
            if ("*" === n) {
              let e = s[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            const l = s[r];
            return e[n] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function U(e) {
        try {
          return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
        } catch (t) {
          return p(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function j(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }
      const O = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

      function F(e, t) {
        void 0 === t && (t = "/");
        let r, {
          pathname: n,
          search: a = "",
          hash: o = ""
        } = "string" == typeof e ? g(e) : e;
        if (n)
          if (i = n, O.test(i)) r = n;
          else {
            if (n.includes("//")) {
              let e = n;
              n = W(n), p(!1, "Pathnames cannot have embedded double slashes - normalizing " + e + " -> " + n)
            }
            r = n.startsWith("/") ? N(n.substring(1), "/") : N(n, t)
          }
        else r = t;
        var i;
        return {
          pathname: r,
          search: V(a),
          hash: J(o)
        }
      }

      function N(e, t) {
        let r = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach(e => {
          ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
        }), r.length > 1 ? r.join("/") : "/"
      }

      function I(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function B(e) {
        return e.filter((e, t) => 0 === t || e.route.path && e.route.path.length > 0)
      }

      function z(e, t) {
        let r = B(e);
        return t ? r.map((e, t) => t === r.length - 1 ? e.pathname : e.pathnameBase) : r.map(e => e.pathnameBase)
      }

      function H(e, t, r, n) {
        let a;
        void 0 === n && (n = !1), "string" == typeof e ? a = g(e) : (a = l({}, e), f(!a.pathname || !a.pathname.includes("?"), I("?", "pathname", "search", a)), f(!a.pathname || !a.pathname.includes("#"), I("#", "pathname", "hash", a)), f(!a.search || !a.search.includes("#"), I("#", "search", "hash", a)));
        let o, i = "" === e || "" === a.pathname,
          s = i ? "/" : a.pathname;
        if (null == s) o = r;
        else {
          let e = t.length - 1;
          if (!n && s.startsWith("..")) {
            let t = s.split("/");
            for (;
              ".." === t[0];) t.shift(), e -= 1;
            a.pathname = t.join("/")
          }
          o = e >= 0 ? t[e] : "/"
        }
        let u = F(a, o),
          c = s && "/" !== s && s.endsWith("/"),
          d = (i || "." === s) && r.endsWith("/");
        return u.pathname.endsWith("/") || !c && !d || (u.pathname += "/"), u
      }
      const W = e => e.replace(/\/\/+/g, "/"),
        K = e => W(e.join("/")),
        $ = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        V = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        J = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        Y = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            n = new Headers(r.headers);
          return n.has("Content-Type") || n.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), l({}, r, {
            headers: n
          }))
        };
      class q extends Error {}
      class X {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], f(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise((e, t) => r = t), this.controller = new AbortController;
          let n = () => r(new q("Deferred data aborted"));
          this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", n), this.controller.signal.addEventListener("abort", n), this.data = Object.entries(e).reduce((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: this.trackPromise(r, n)
            })
          }, {}), this.done && this.unlistenAbortSignal(), this.init = t
        }
        trackPromise(e, t) {
          if (!(t instanceof Promise)) return t;
          this.deferredKeys.push(e), this.pendingKeysSet.add(e);
          let r = Promise.race([t, this.abortPromise]).then(t => this.onSettle(r, e, void 0, t), t => this.onSettle(r, e, t));
          return r.catch(() => {}), Object.defineProperty(r, "_tracked", {
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
          this.subscribers.forEach(r => r(e, t))
        }
        subscribe(e) {
          return this.subscribers.add(e), () => this.subscribers.delete(e)
        }
        cancel() {
          this.controller.abort(), this.pendingKeysSet.forEach((e, t) => this.pendingKeysSet.delete(t)), this.emit(!0)
        }
        async resolveData(e) {
          let t = !1;
          if (!this.done) {
            let r = () => this.cancel();
            e.addEventListener("abort", r), t = await new Promise(t => {
              this.subscribe(n => {
                e.removeEventListener("abort", r), (n || this.done) && t(n)
              })
            })
          }
          return t
        }
        get done() {
          return 0 === this.pendingKeysSet.size
        }
        get unwrappedData() {
          return f(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: G(n)
            })
          }, {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function G(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }
      const Q = function(e, t) {
          return void 0 === t && (t = {}), new X(e, "number" == typeof t ? {
            status: t
          } : t)
        },
        Z = function(e, t) {
          void 0 === t && (t = 302);
          let r = t;
          "number" == typeof r ? r = {
            status: r
          } : void 0 === r.status && (r.status = 302);
          let n = new Headers(r.headers);
          return n.set("Location", e), new Response(null, l({}, r, {
            headers: n
          }))
        },
        ee = (e, t) => {
          let r = Z(e, t);
          return r.headers.set("X-Remix-Reload-Document", "true"), r
        },
        te = (e, t) => {
          let r = Z(e, t);
          return r.headers.set("X-Remix-Replace", "true"), r
        };
      class re {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function ne(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const ae = ["post", "put", "patch", "delete"],
        oe = new Set(ae),
        ie = ["get", ...ae],
        se = new Set(ie),
        le = new Set([301, 302, 303, 307, 308]),
        ue = new Set([307, 308]),
        ce = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        de = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        he = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0
        },
        fe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        pe = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        }),
        me = "remix-router-transitions";

      function ve(e) {
        const t = e.window ? e.window : "undefined" != typeof window ? window : void 0,
          r = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement,
          a = !r;
        let o;
        if (f(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) o = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let t = e.detectErrorBoundary;
          o = e => ({
            hasErrorBoundary: t(e)
          })
        } else o = pe;
        let i, s, u, c = {},
          d = S(e.routes, o, void 0, c),
          h = e.basename || "/",
          m = e.dataStrategy || Ce,
          y = e.patchRoutesOnNavigation,
          g = l({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            v7_skipActionErrorRevalidation: !1
          }, e.future),
          b = null,
          C = new Set,
          L = null,
          k = null,
          P = null,
          T = null != e.hydrationData,
          _ = R(d, e.history.location, h),
          A = !1,
          M = null;
        if (null == _ && !y) {
          let t = Ne(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: n
            } = Fe(d);
          _ = r, M = {
            [n.id]: t
          }
        }
        if (_ && !e.hydrationData && ct(_, d, e.history.location.pathname).active && (_ = null), _)
          if (_.some(e => e.route.lazy)) s = !1;
          else if (_.some(e => e.route.loader))
          if (g.v7_partialHydration) {
            let t = e.hydrationData ? e.hydrationData.loaderData : null,
              r = e.hydrationData ? e.hydrationData.errors : null;
            if (r) {
              let e = _.findIndex(e => void 0 !== r[e.route.id]);
              s = _.slice(0, e + 1).every(e => !Ee(e.route, t, r))
            } else s = _.every(e => !Ee(e.route, t, r))
          } else s = null != e.hydrationData;
        else s = !0;
        else if (s = !1, _ = [], g.v7_partialHydration) {
          let t = ct(null, d, e.history.location.pathname);
          t.active && t.matches && (A = !0, _ = t.matches)
        }
        let U, O, F = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: _,
            initialized: s,
            navigation: ce,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || M,
            fetchers: new Map,
            blockers: new Map
          },
          N = n.Pop,
          I = !1,
          B = !1,
          z = new Map,
          H = null,
          W = !1,
          K = !1,
          $ = [],
          V = new Set,
          J = new Map,
          Y = 0,
          q = -1,
          X = new Map,
          G = new Set,
          Q = new Map,
          Z = new Map,
          ee = new Set,
          te = new Map,
          re = new Map;

        function ae(e, t) {
          void 0 === t && (t = {}), F = l({}, F, e);
          let r = [],
            n = [];
          g.v7_fetcherPersist && F.fetchers.forEach((e, t) => {
            "idle" === e.state && (ee.has(t) ? n.push(t) : r.push(t))
          }), ee.forEach(e => {
            F.fetchers.has(e) || J.has(e) || n.push(e)
          }), [...C].forEach(e => e(F, {
            deletedFetchers: n,
            viewTransitionOpts: t.viewTransitionOpts,
            flushSync: !0 === t.flushSync
          })), g.v7_fetcherPersist ? (r.forEach(e => F.fetchers.delete(e)), n.forEach(e => Ae(e))) : n.forEach(e => ee.delete(e))
        }

        function oe(t, r, a) {
          var o, s;
          let u, {
              flushSync: c
            } = void 0 === a ? {} : a,
            h = null != F.actionData && null != F.navigation.formMethod && Je(F.navigation.formMethod) && "loading" === F.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
          u = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : h ? F.actionData : null;
          let f = r.loaderData ? Ue(F.loaderData, r.loaderData, r.matches || [], r.errors) : F.loaderData,
            p = F.blockers;
          p.size > 0 && (p = new Map(p), p.forEach((e, t) => p.set(t, he)));
          let m, v = !0 === I || null != F.navigation.formMethod && Je(F.navigation.formMethod) && !0 !== (null == (s = t.state) ? void 0 : s._isRedirect);
          if (i && (d = i, i = void 0), W || N === n.Pop || (N === n.Push ? e.history.push(t, t.state) : N === n.Replace && e.history.replace(t, t.state)), N === n.Pop) {
            let e = z.get(F.location.pathname);
            e && e.has(t.pathname) ? m = {
              currentLocation: F.location,
              nextLocation: t
            } : z.has(t.pathname) && (m = {
              currentLocation: t,
              nextLocation: F.location
            })
          } else if (B) {
            let e = z.get(F.location.pathname);
            e ? e.add(t.pathname) : (e = new Set([t.pathname]), z.set(F.location.pathname, e)), m = {
              currentLocation: F.location,
              nextLocation: t
            }
          }
          ae(l({}, r, {
            actionData: u,
            loaderData: f,
            historyAction: N,
            location: t,
            initialized: !0,
            navigation: ce,
            revalidation: "idle",
            restoreScrollPosition: ut(t, r.matches || F.matches),
            preventScrollReset: v,
            blockers: p
          }), {
            viewTransitionOpts: m,
            flushSync: !0 === c
          }), N = n.Pop, I = !1, B = !1, W = !1, K = !1, $ = []
        }
        async function ie(t, r, a) {
          U && U.abort(), U = null, N = t, W = !0 === (a && a.startUninterruptedRevalidation),
            function(e, t) {
              if (L && P) {
                let r = lt(e, t);
                L[r] = P()
              }
            }(F.location, F.matches), I = !0 === (a && a.preventScrollReset), B = !0 === (a && a.enableViewTransition);
          let o = i || d,
            s = a && a.overrideNavigation,
            u = null != a && a.initialHydration && F.matches && F.matches.length > 0 && !A ? F.matches : R(o, r, h),
            c = !0 === (a && a.flushSync);
          if (u && F.initialized && !K && (f = F.location, p = r, f.pathname === p.pathname && f.search === p.search && ("" === f.hash ? "" !== p.hash : f.hash === p.hash || "" !== p.hash)) && !(a && a.submission && Je(a.submission.formMethod))) return void oe(r, {
            matches: u
          }, {
            flushSync: c
          });
          var f, p;
          let m = ct(u, o, r.pathname);
          if (m.active && m.matches && (u = m.matches), !u) {
            let {
              error: e,
              notFoundMatches: t,
              route: n
            } = it(r.pathname);
            return void oe(r, {
              matches: t,
              loaderData: {},
              errors: {
                [n.id]: e
              }
            }, {
              flushSync: c
            })
          }
          U = new AbortController;
          let v, y = Te(e.history, r, U.signal, a && a.submission);
          if (a && a.pendingError) v = [Oe(u).route.id, {
            type: w.error,
            error: a.pendingError
          }];
          else if (a && a.submission && Je(a.submission.formMethod)) {
            let t = await async function(t, r, a, o, i, s) {
              void 0 === s && (s = {}), Se();
              let l, u = function(e, t) {
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
              }(r, a);
              if (ae({
                  navigation: u
                }, {
                  flushSync: !0 === s.flushSync
                }), i) {
                let e = await dt(o, r.pathname, t.signal);
                if ("aborted" === e.type) return {
                  shortCircuited: !0
                };
                if ("error" === e.type) {
                  let t = Oe(e.partialMatches).route.id;
                  return {
                    matches: e.partialMatches,
                    pendingActionResult: [t, {
                      type: w.error,
                      error: e.error
                    }]
                  }
                }
                if (!e.matches) {
                  let {
                    notFoundMatches: e,
                    error: t,
                    route: n
                  } = it(r.pathname);
                  return {
                    matches: e,
                    pendingActionResult: [n.id, {
                      type: w.error,
                      error: t
                    }]
                  }
                }
                o = e.matches
              }
              let c = Qe(o, r);
              if (c.route.action || c.route.lazy) {
                if (l = (await ve("action", F, t, [c], o, null))[c.route.id], t.signal.aborted) return {
                  shortCircuited: !0
                }
              } else l = {
                type: w.error,
                error: Ne(405, {
                  method: t.method,
                  pathname: r.pathname,
                  routeId: c.route.id
                })
              };
              if (Ke(l)) {
                let r;
                return r = s && null != s.replace ? s.replace : Pe(l.response.headers.get("Location"), new URL(t.url), h, e.history) === F.location.pathname + F.location.search, await le(t, l, !0, {
                  submission: a,
                  replace: r
                }), {
                  shortCircuited: !0
                }
              }
              if (He(l)) throw Ne(400, {
                type: "defer-action"
              });
              if (We(l)) {
                let e = Oe(o, c.route.id);
                return !0 !== (s && s.replace) && (N = n.Push), {
                  matches: o,
                  pendingActionResult: [e.route.id, l]
                }
              }
              return {
                matches: o,
                pendingActionResult: [c.route.id, l]
              }
            }(y, r, a.submission, u, m.active, {
              replace: a.replace,
              flushSync: c
            });
            if (t.shortCircuited) return;
            if (t.pendingActionResult) {
              let [e, n] = t.pendingActionResult;
              if (We(n) && ne(n.error) && 404 === n.error.status) return U = null, void oe(r, {
                matches: t.matches,
                loaderData: {},
                errors: {
                  [e]: n.error
                }
              })
            }
            u = t.matches || u, v = t.pendingActionResult, s = et(r, a.submission), c = !1, m.active = !1, y = Te(e.history, y.url, y.signal)
          }
          let {
            shortCircuited: b,
            matches: E,
            loaderData: S,
            errors: x
          } = await async function(t, r, n, a, o, s, u, c, f, p, m) {
            let v = o || et(r, s),
              y = s || u || Ze(v),
              b = !(W || g.v7_partialHydration && f);
            if (a) {
              if (b) {
                let e = se(m);
                ae(l({
                  navigation: v
                }, void 0 !== e ? {
                  actionData: e
                } : {}), {
                  flushSync: p
                })
              }
              let e = await dt(n, r.pathname, t.signal);
              if ("aborted" === e.type) return {
                shortCircuited: !0
              };
              if ("error" === e.type) {
                let t = Oe(e.partialMatches).route.id;
                return {
                  matches: e.partialMatches,
                  loaderData: {},
                  errors: {
                    [t]: e.error
                  }
                }
              }
              if (!e.matches) {
                let {
                  error: e,
                  notFoundMatches: t,
                  route: n
                } = it(r.pathname);
                return {
                  matches: t,
                  loaderData: {},
                  errors: {
                    [n.id]: e
                  }
                }
              }
              n = e.matches
            }
            let w = i || d,
              [E, S] = we(e.history, F, n, y, r, g.v7_partialHydration && !0 === f, g.v7_skipActionErrorRevalidation, K, $, V, ee, Q, G, w, h, m);
            if (st(e => !(n && n.some(t => t.route.id === e)) || E && E.some(t => t.route.id === e)), q = ++Y, 0 === E.length && 0 === S.length) {
              let e = Ve();
              return oe(r, l({
                matches: n,
                loaderData: {},
                errors: m && We(m[1]) ? {
                  [m[0]]: m[1].error
                } : null
              }, je(m), e ? {
                fetchers: new Map(F.fetchers)
              } : {}), {
                flushSync: p
              }), {
                shortCircuited: !0
              }
            }
            if (b) {
              let e = {};
              if (!a) {
                e.navigation = v;
                let t = se(m);
                void 0 !== t && (e.actionData = t)
              }
              S.length > 0 && (e.fetchers = function(e) {
                return e.forEach(e => {
                  let t = F.fetchers.get(e.key),
                    r = tt(void 0, t ? t.data : void 0);
                  F.fetchers.set(e.key, r)
                }), new Map(F.fetchers)
              }(S)), ae(e, {
                flushSync: p
              })
            }
            S.forEach(e => {
              Be(e.key), e.controller && J.set(e.key, e.controller)
            });
            let R = () => S.forEach(e => Be(e.key));
            U && U.signal.addEventListener("abort", R);
            let {
              loaderResults: x,
              fetcherResults: D
            } = await be(F, n, E, S, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            U && U.signal.removeEventListener("abort", R), S.forEach(e => J.delete(e.key));
            let C = Ie(x);
            if (C) return await le(t, C.result, !0, {
              replace: c
            }), {
              shortCircuited: !0
            };
            if (C = Ie(D), C) return G.add(C.key), await le(t, C.result, !0, {
              replace: c
            }), {
              shortCircuited: !0
            };
            let {
              loaderData: L,
              errors: k
            } = Me(F, n, x, m, S, D, te);
            te.forEach((e, t) => {
              e.subscribe(r => {
                (r || e.done) && te.delete(t)
              })
            }), g.v7_partialHydration && f && F.errors && (k = l({}, F.errors, k));
            let P = Ve(),
              T = Ge(q),
              _ = P || T || S.length > 0;
            return l({
              matches: n,
              loaderData: L,
              errors: k
            }, _ ? {
              fetchers: new Map(F.fetchers)
            } : {})
          }(y, r, u, m.active, s, a && a.submission, a && a.fetcherSubmission, a && a.replace, a && !0 === a.initialHydration, c, v);
          b || (U = null, oe(r, l({
            matches: E || u
          }, je(v), {
            loaderData: S,
            errors: x
          })))
        }

        function se(e) {
          return e && !We(e[1]) ? {
            [e[0]]: e[1].data
          } : F.actionData ? 0 === Object.keys(F.actionData).length ? null : F.actionData : void 0
        }
        async function le(a, o, i, s) {
          let {
            submission: u,
            fetcherSubmission: c,
            preventScrollReset: d,
            replace: p
          } = void 0 === s ? {} : s;
          o.response.headers.has("X-Remix-Revalidate") && (K = !0);
          let m = o.response.headers.get("Location");
          f(m, "Expected a Location header on the redirect Response"), m = Pe(m, new URL(a.url), h, e.history);
          let y = v(F.location, m, {
            _isRedirect: !0
          });
          if (r) {
            let r = !1;
            if (o.response.headers.has("X-Remix-Reload-Document")) r = !0;
            else if (fe.test(m)) {
              const n = e.history.createURL(m);
              r = n.origin !== t.location.origin || null == j(n.pathname, h)
            }
            if (r) return void(p ? t.location.replace(m) : t.location.assign(m))
          }
          U = null;
          let g = !0 === p || o.response.headers.has("X-Remix-Replace") ? n.Replace : n.Push,
            {
              formMethod: b,
              formAction: w,
              formEncType: E
            } = F.navigation;
          !u && !c && b && w && E && (u = Ze(F.navigation));
          let S = u || c;
          if (ue.has(o.response.status) && S && Je(S.formMethod)) await ie(g, y, {
            submission: l({}, S, {
              formAction: m
            }),
            preventScrollReset: d || I,
            enableViewTransition: i ? B : void 0
          });
          else {
            let e = et(y, u);
            await ie(g, y, {
              overrideNavigation: e,
              fetcherSubmission: c,
              preventScrollReset: d || I,
              enableViewTransition: i ? B : void 0
            })
          }
        }
        async function ve(e, t, r, n, a, i) {
          let s, u = {};
          try {
            s = await async function(e, t, r, n, a, o, i, s, u, c) {
              let d = o.map(e => e.route.lazy ? async function(e, t, r) {
                  if (!e.lazy) return;
                  let n = await e.lazy();
                  if (!e.lazy) return;
                  let a = r[e.id];
                  f(a, "No route found in manifest");
                  let o = {};
                  for (let e in n) {
                    let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
                    p(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || E.has(e) || (o[e] = n[e])
                  }
                  Object.assign(a, o), Object.assign(a, l({}, t(a), {
                    lazy: void 0
                  }))
                }(e.route, u, s): void 0),
                h = o.map((e, r) => {
                  let o = d[r],
                    i = a.some(t => t.route.id === e.route.id);
                  return l({}, e, {
                    shouldLoad: i,
                    resolve: async r => (r && "GET" === n.method && (e.route.lazy || e.route.loader) && (i = !0), i ? async function(e, t, r, n, a, o) {
                      let i, s, l = n => {
                        let i, l = new Promise((e, t) => i = t);
                        s = () => i(), t.signal.addEventListener("abort", s);
                        let u = a => "function" != typeof n ? Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "' + e + '" [routeId: ' + r.route.id + "]")) : n({
                            request: t,
                            params: r.params,
                            context: o
                          }, ...void 0 !== a ? [a] : []),
                          c = (async () => {
                            try {
                              return {
                                type: "data",
                                result: await (a ? a(e => u(e)) : u())
                              }
                            } catch (e) {
                              return {
                                type: "error",
                                result: e
                              }
                            }
                          })();
                        return Promise.race([c, l])
                      };
                      try {
                        let a = r.route[e];
                        if (n)
                          if (a) {
                            let e, [t] = await Promise.all([l(a).catch(t => {
                              e = t
                            }), n]);
                            if (void 0 !== e) throw e;
                            i = t
                          } else {
                            if (await n, a = r.route[e], !a) {
                              if ("action" === e) {
                                let e = new URL(t.url),
                                  n = e.pathname + e.search;
                                throw Ne(405, {
                                  method: t.method,
                                  pathname: n,
                                  routeId: r.route.id
                                })
                              }
                              return {
                                type: w.data,
                                result: void 0
                              }
                            }
                            i = await l(a)
                          }
                        else {
                          if (!a) {
                            let e = new URL(t.url);
                            throw Ne(404, {
                              pathname: e.pathname + e.search
                            })
                          }
                          i = await l(a)
                        }
                        f(void 0 !== i.result, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
                      } catch (e) {
                        return {
                          type: w.error,
                          result: e
                        }
                      } finally {
                        s && t.signal.removeEventListener("abort", s)
                      }
                      return i
                    }(t, n, e, o, r, c): Promise.resolve({
                      type: w.data,
                      result: void 0
                    }))
                  })
                }),
                m = await e({
                  matches: h,
                  request: n,
                  params: o[0].params,
                  fetcherKey: i,
                  context: c
                });
              try {
                await Promise.all(d)
              } catch (e) {}
              return m
            }(m, e, 0, r, n, a, i, c, o)
          } catch (e) {
            return n.forEach(t => {
              u[t.route.id] = {
                type: w.error,
                error: e
              }
            }), u
          }
          for (let [e, t] of Object.entries(s))
            if (ze(t)) {
              let n = t.result;
              u[e] = {
                type: w.redirect,
                response: ke(n, r, e, a, h, g.v7_relativeSplatPath)
              }
            } else u[e] = await Le(t);
          return u
        }
        async function be(t, r, n, a, o) {
          let i = t.matches,
            s = ve("loader", 0, o, n, r, null),
            l = Promise.all(a.map(async t => {
              if (t.matches && t.match && t.controller) {
                let r = (await ve("loader", 0, Te(e.history, t.path, t.controller.signal), [t.match], t.matches, t.key))[t.match.route.id];
                return {
                  [t.key]: r
                }
              }
              return Promise.resolve({
                [t.key]: {
                  type: w.error,
                  error: Ne(404, {
                    pathname: t.path
                  })
                }
              })
            })),
            u = await s,
            c = (await l).reduce((e, t) => Object.assign(e, t), {});
          return await Promise.all([Ye(r, u, o.signal, i, t.loaderData), qe(r, c, a)]), {
            loaderResults: u,
            fetcherResults: c
          }
        }

        function Se() {
          K = !0, $.push(...st()), Q.forEach((e, t) => {
            J.has(t) && V.add(t), Be(t)
          })
        }

        function Re(e, t, r) {
          void 0 === r && (r = {}), F.fetchers.set(e, t), ae({
            fetchers: new Map(F.fetchers)
          }, {
            flushSync: !0 === (r && r.flushSync)
          })
        }

        function De(e, t, r, n) {
          void 0 === n && (n = {});
          let a = Oe(F.matches, t);
          Ae(e), ae({
            errors: {
              [a.route.id]: r
            },
            fetchers: new Map(F.fetchers)
          }, {
            flushSync: !0 === (n && n.flushSync)
          })
        }

        function _e(e) {
          return Z.set(e, (Z.get(e) || 0) + 1), ee.has(e) && ee.delete(e), F.fetchers.get(e) || de
        }

        function Ae(e) {
          let t = F.fetchers.get(e);
          !J.has(e) || t && "loading" === t.state && X.has(e) || Be(e), Q.delete(e), X.delete(e), G.delete(e), g.v7_fetcherPersist && ee.delete(e), V.delete(e), F.fetchers.delete(e)
        }

        function Be(e) {
          let t = J.get(e);
          t && (t.abort(), J.delete(e))
        }

        function $e(e) {
          for (let t of e) {
            let e = rt(_e(t).data);
            F.fetchers.set(t, e)
          }
        }

        function Ve() {
          let e = [],
            t = !1;
          for (let r of G) {
            let n = F.fetchers.get(r);
            f(n, "Expected fetcher: " + r), "loading" === n.state && (G.delete(r), e.push(r), t = !0)
          }
          return $e(e), t
        }

        function Ge(e) {
          let t = [];
          for (let [r, n] of X)
            if (n < e) {
              let e = F.fetchers.get(r);
              f(e, "Expected fetcher: " + r), "loading" === e.state && (Be(r), X.delete(r), t.push(r))
            } return $e(t), t.length > 0
        }

        function nt(e) {
          F.blockers.delete(e), re.delete(e)
        }

        function at(e, t) {
          let r = F.blockers.get(e) || he;
          f("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
          let n = new Map(F.blockers);
          n.set(e, t), ae({
            blockers: n
          })
        }

        function ot(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === re.size) return;
          re.size > 1 && p(!1, "A router only supports one blocker at a time");
          let a = Array.from(re.entries()),
            [o, i] = a[a.length - 1],
            s = F.blockers.get(o);
          return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? o : void 0
        }

        function it(e) {
          let t = Ne(404, {
              pathname: e
            }),
            r = i || d,
            {
              matches: n,
              route: a
            } = Fe(r);
          return st(), {
            notFoundMatches: n,
            route: a,
            error: t
          }
        }

        function st(e) {
          let t = [];
          return te.forEach((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), te.delete(n))
          }), t
        }

        function lt(e, t) {
          return k && k(e, t.map(e => D(e, F.loaderData))) || e.key
        }

        function ut(e, t) {
          if (L) {
            let r = lt(e, t),
              n = L[r];
            if ("number" == typeof n) return n
          }
          return null
        }

        function ct(e, t, r) {
          if (y) {
            if (!e) return {
              active: !0,
              matches: x(t, r, h, !0) || []
            };
            if (Object.keys(e[0].params).length > 0) return {
              active: !0,
              matches: x(t, r, h, !0)
            }
          }
          return {
            active: !1,
            matches: null
          }
        }
        async function dt(e, t, r, n) {
          if (!y) return {
            type: "success",
            matches: e
          };
          let a = e;
          for (;;) {
            let e = null == i,
              s = i || d,
              l = c;
            try {
              await y({
                signal: r,
                path: t,
                matches: a,
                fetcherKey: n,
                patch: (e, t) => {
                  r.aborted || xe(e, t, s, l, o)
                }
              })
            } catch (e) {
              return {
                type: "error",
                error: e,
                partialMatches: a
              }
            } finally {
              e && !r.aborted && (d = [...d])
            }
            if (r.aborted) return {
              type: "aborted"
            };
            let u = R(s, t, h);
            if (u) return {
              type: "success",
              matches: u
            };
            let f = x(s, t, h, !0);
            if (!f || a.length === f.length && a.every((e, t) => e.route.id === f[t].route.id)) return {
              type: "success",
              matches: null
            };
            a = f
          }
        }
        return u = {
          get basename() {
            return h
          },
          get future() {
            return g
          },
          get state() {
            return F
          },
          get routes() {
            return d
          },
          get window() {
            return t
          },
          initialize: function() {
            if (b = e.history.listen(t => {
                let {
                  action: r,
                  location: n,
                  delta: a
                } = t;
                if (O) return O(), void(O = void 0);
                p(0 === re.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let o = ot({
                  currentLocation: F.location,
                  nextLocation: n,
                  historyAction: r
                });
                if (o && null != a) {
                  let t = new Promise(e => {
                    O = e
                  });
                  return e.history.go(-1 * a), void at(o, {
                    state: "blocked",
                    location: n,
                    proceed() {
                      at(o, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: n
                      }), t.then(() => e.history.go(a))
                    },
                    reset() {
                      let e = new Map(F.blockers);
                      e.set(o, he), ae({
                        blockers: e
                      })
                    }
                  })
                }
                return ie(r, n)
              }), r) {
              ! function(e, t) {
                try {
                  let r = e.sessionStorage.getItem(me);
                  if (r) {
                    let e = JSON.parse(r);
                    for (let [r, n] of Object.entries(e || {})) n && Array.isArray(n) && t.set(r, new Set(n || []))
                  }
                } catch (e) {}
              }(t, z);
              let e = () => function(e, t) {
                if (t.size > 0) {
                  let r = {};
                  for (let [e, n] of t) r[e] = [...n];
                  try {
                    e.sessionStorage.setItem(me, JSON.stringify(r))
                  } catch (e) {
                    p(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                  }
                }
              }(t, z);
              t.addEventListener("pagehide", e), H = () => t.removeEventListener("pagehide", e)
            }
            return F.initialized || ie(n.Pop, F.location, {
              initialHydration: !0
            }), u
          },
          subscribe: function(e) {
            return C.add(e), () => C.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (L = e, P = t, k = r || null, !T && F.navigation === ce) {
              T = !0;
              let e = ut(F.location, F.matches);
              null != e && ae({
                restoreScrollPosition: e
              })
            }
            return () => {
              L = null, P = null, k = null
            }
          },
          navigate: async function t(r, a) {
            if ("number" == typeof r) return void e.history.go(r);
            let o = ye(F.location, F.matches, h, g.v7_prependBasename, r, g.v7_relativeSplatPath, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative),
              {
                path: i,
                submission: s,
                error: u
              } = ge(g.v7_normalizeFormMethod, !1, o, a),
              c = F.location,
              d = v(F.location, i, a && a.state);
            d = l({}, d, e.history.encodeLocation(d));
            let f = a && null != a.replace ? a.replace : void 0,
              p = n.Push;
            !0 === f ? p = n.Replace : !1 === f || null != s && Je(s.formMethod) && s.formAction === F.location.pathname + F.location.search && (p = n.Replace);
            let m = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
              y = !0 === (a && a.flushSync),
              b = ot({
                currentLocation: c,
                nextLocation: d,
                historyAction: p
              });
            if (!b) return await ie(p, d, {
              submission: s,
              pendingError: u,
              preventScrollReset: m,
              replace: a && a.replace,
              enableViewTransition: a && a.viewTransition,
              flushSync: y
            });
            at(b, {
              state: "blocked",
              location: d,
              proceed() {
                at(b, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: d
                }), t(r, a)
              },
              reset() {
                let e = new Map(F.blockers);
                e.set(b, he), ae({
                  blockers: e
                })
              }
            })
          },
          fetch: function(t, r, n, o) {
            if (a) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            Be(t);
            let s = !0 === (o && o.flushSync),
              l = i || d,
              u = ye(F.location, F.matches, h, g.v7_prependBasename, n, g.v7_relativeSplatPath, r, null == o ? void 0 : o.relative),
              c = R(l, u, h),
              p = ct(c, l, u);
            if (p.active && p.matches && (c = p.matches), !c) return void De(t, r, Ne(404, {
              pathname: u
            }), {
              flushSync: s
            });
            let {
              path: m,
              submission: v,
              error: y
            } = ge(g.v7_normalizeFormMethod, !0, u, o);
            if (y) return void De(t, r, y, {
              flushSync: s
            });
            let b = Qe(c, m),
              w = !0 === (o && o.preventScrollReset);
            v && Je(v.formMethod) ? async function(t, r, n, a, o, s, l, u, c) {
              function p(e) {
                if (!e.route.action && !e.route.lazy) {
                  let e = Ne(405, {
                    method: c.formMethod,
                    pathname: n,
                    routeId: r
                  });
                  return De(t, r, e, {
                    flushSync: l
                  }), !0
                }
                return !1
              }
              if (Se(), Q.delete(t), !s && p(a)) return;
              let m = F.fetchers.get(t);
              Re(t, function(e, t) {
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
              }(c, m), {
                flushSync: l
              });
              let v = new AbortController,
                y = Te(e.history, n, v.signal, c);
              if (s) {
                let e = await dt(o, new URL(y.url).pathname, y.signal, t);
                if ("aborted" === e.type) return;
                if ("error" === e.type) return void De(t, r, e.error, {
                  flushSync: l
                });
                if (!e.matches) return void De(t, r, Ne(404, {
                  pathname: n
                }), {
                  flushSync: l
                });
                if (p(a = Qe(o = e.matches, n))) return
              }
              J.set(t, v);
              let b = Y,
                w = (await ve("action", 0, y, [a], o, t))[a.route.id];
              if (y.signal.aborted) return void(J.get(t) === v && J.delete(t));
              if (g.v7_fetcherPersist && ee.has(t)) {
                if (Ke(w) || We(w)) return void Re(t, rt(void 0))
              } else {
                if (Ke(w)) return J.delete(t), q > b ? void Re(t, rt(void 0)) : (G.add(t), Re(t, tt(c)), le(y, w, !1, {
                  fetcherSubmission: c,
                  preventScrollReset: u
                }));
                if (We(w)) return void De(t, r, w.error)
              }
              if (He(w)) throw Ne(400, {
                type: "defer-action"
              });
              let E = F.navigation.location || F.location,
                S = Te(e.history, E, v.signal),
                x = i || d,
                D = "idle" !== F.navigation.state ? R(x, F.navigation.location, h) : F.matches;
              f(D, "Didn't find any matches after fetcher action");
              let C = ++Y;
              X.set(t, C);
              let L = tt(c, w.data);
              F.fetchers.set(t, L);
              let [k, P] = we(e.history, F, D, c, E, !1, g.v7_skipActionErrorRevalidation, K, $, V, ee, Q, G, x, h, [a.route.id, w]);
              P.filter(e => e.key !== t).forEach(e => {
                let t = e.key,
                  r = F.fetchers.get(t),
                  n = tt(void 0, r ? r.data : void 0);
                F.fetchers.set(t, n), Be(t), e.controller && J.set(t, e.controller)
              }), ae({
                fetchers: new Map(F.fetchers)
              });
              let T = () => P.forEach(e => Be(e.key));
              v.signal.addEventListener("abort", T);
              let {
                loaderResults: _,
                fetcherResults: A
              } = await be(F, D, k, P, S);
              if (v.signal.aborted) return;
              v.signal.removeEventListener("abort", T), X.delete(t), J.delete(t), P.forEach(e => J.delete(e.key));
              let M = Ie(_);
              if (M) return le(S, M.result, !1, {
                preventScrollReset: u
              });
              if (M = Ie(A), M) return G.add(M.key), le(S, M.result, !1, {
                preventScrollReset: u
              });
              let {
                loaderData: j,
                errors: O
              } = Me(F, D, _, void 0, P, A, te);
              if (F.fetchers.has(t)) {
                let e = rt(w.data);
                F.fetchers.set(t, e)
              }
              Ge(C), "loading" === F.navigation.state && C > q ? (f(N, "Expected pending action"), U && U.abort(), oe(F.navigation.location, {
                matches: D,
                loaderData: j,
                errors: O,
                fetchers: new Map(F.fetchers)
              })) : (ae({
                errors: O,
                loaderData: Ue(F.loaderData, j, D, O),
                fetchers: new Map(F.fetchers)
              }), K = !1)
            }(t, r, m, b, c, p.active, s, w, v): (Q.set(t, {
              routeId: r,
              path: m
            }), async function(t, r, n, a, o, i, s, l, u) {
              let c = F.fetchers.get(t);
              Re(t, tt(u, c ? c.data : void 0), {
                flushSync: s
              });
              let d = new AbortController,
                h = Te(e.history, n, d.signal);
              if (i) {
                let e = await dt(o, new URL(h.url).pathname, h.signal, t);
                if ("aborted" === e.type) return;
                if ("error" === e.type) return void De(t, r, e.error, {
                  flushSync: s
                });
                if (!e.matches) return void De(t, r, Ne(404, {
                  pathname: n
                }), {
                  flushSync: s
                });
                a = Qe(o = e.matches, n)
              }
              J.set(t, d);
              let p = Y,
                m = (await ve("loader", 0, h, [a], o, t))[a.route.id];
              if (He(m) && (m = await Xe(m, h.signal, !0) || m), J.get(t) === d && J.delete(t), !h.signal.aborted) {
                if (!ee.has(t)) return Ke(m) ? q > p ? void Re(t, rt(void 0)) : (G.add(t), void await le(h, m, !1, {
                  preventScrollReset: l
                })) : void(We(m) ? De(t, r, m.error) : (f(!He(m), "Unhandled fetcher deferred data"), Re(t, rt(m.data))));
                Re(t, rt(void 0))
              }
            }(t, r, m, b, c, p.active, s, w, v))
          },
          revalidate: function() {
            Se(), ae({
              revalidation: "loading"
            }), "submitting" !== F.navigation.state && ("idle" !== F.navigation.state ? ie(N || F.historyAction, F.navigation.location, {
              overrideNavigation: F.navigation,
              enableViewTransition: !0 === B
            }) : ie(F.historyAction, F.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: _e,
          deleteFetcher: function(e) {
            let t = (Z.get(e) || 0) - 1;
            t <= 0 ? (Z.delete(e), ee.add(e), g.v7_fetcherPersist || Ae(e)) : Z.set(e, t), ae({
              fetchers: new Map(F.fetchers)
            })
          },
          dispose: function() {
            b && b(), H && H(), C.clear(), U && U.abort(), F.fetchers.forEach((e, t) => Ae(t)), F.blockers.forEach((e, t) => nt(t))
          },
          getBlocker: function(e, t) {
            let r = F.blockers.get(e) || he;
            return re.get(e) !== t && re.set(e, t), r
          },
          deleteBlocker: nt,
          patchRoutes: function(e, t) {
            let r = null == i;
            xe(e, t, i || d, c, o), r && (d = [...d], ae({}))
          },
          _internalFetchControllers: J,
          _internalActiveDeferreds: te,
          _internalSetRoutes: function(e) {
            c = {}, i = S(e, o, void 0, c)
          }
        }, u
      }

      function ye(e, t, r, n, a, o, i, s) {
        let l, u;
        if (i) {
          l = [];
          for (let e of t)
            if (l.push(e), e.route.id === i) {
              u = e;
              break
            }
        } else l = t, u = t[t.length - 1];
        let c = H(a || ".", z(l, o), j(e.pathname, r) || e.pathname, "path" === s);
        if (null == a && (c.search = e.search, c.hash = e.hash), (null == a || "" === a || "." === a) && u) {
          let e = Ge(c.search);
          if (u.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
          else if (!u.route.index && e) {
            let e = new URLSearchParams(c.search),
              t = e.getAll("index");
            e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
            let r = e.toString();
            c.search = r ? "?" + r : ""
          }
        }
        return n && "/" !== r && (c.pathname = "/" === c.pathname ? r : K([r, c.pathname])), y(c)
      }

      function ge(e, t, r, n) {
        if (!n || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
          }(n)) return {
          path: r
        };
        if (n.formMethod && (a = n.formMethod, !se.has(a.toLowerCase()))) return {
          path: r,
          error: Ne(405, {
            method: n.formMethod
          })
        };
        var a;
        let o, i, s = () => ({
            path: r,
            error: Ne(400, {
              type: "invalid-body"
            })
          }),
          l = n.formMethod || "get",
          u = e ? l.toUpperCase() : l.toLowerCase(),
          c = Be(r);
        if (void 0 !== n.body) {
          if ("text/plain" === n.formEncType) {
            if (!Je(u)) return s();
            let e = "string" == typeof n.body ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce((e, t) => {
              let [r, n] = t;
              return "" + e + r + "=" + n + "\n"
            }, "") : String(n.body);
            return {
              path: r,
              submission: {
                formMethod: u,
                formAction: c,
                formEncType: n.formEncType,
                formData: void 0,
                json: void 0,
                text: e
              }
            }
          }
          if ("application/json" === n.formEncType) {
            if (!Je(u)) return s();
            try {
              let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
              return {
                path: r,
                submission: {
                  formMethod: u,
                  formAction: c,
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
        if (f("function" == typeof FormData, "FormData is not available in this environment"), n.formData) o = _e(n.formData), i = n.formData;
        else if (n.body instanceof FormData) o = _e(n.body), i = n.body;
        else if (n.body instanceof URLSearchParams) o = n.body, i = Ae(o);
        else if (null == n.body) o = new URLSearchParams, i = new FormData;
        else try {
          o = new URLSearchParams(n.body), i = Ae(o)
        } catch (e) {
          return s()
        }
        let d = {
          formMethod: u,
          formAction: c,
          formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0
        };
        if (Je(d.formMethod)) return {
          path: r,
          submission: d
        };
        let h = g(r);
        return t && h.search && Ge(h.search) && o.append("index", ""), h.search = "?" + o, {
          path: y(h),
          submission: d
        }
      }

      function be(e, t, r) {
        void 0 === r && (r = !1);
        let n = e.findIndex(e => e.route.id === t);
        return n >= 0 ? e.slice(0, r ? n + 1 : n) : e
      }

      function we(e, t, r, n, a, o, i, s, u, c, d, h, f, p, m, v) {
        let y = v ? We(v[1]) ? v[1].error : v[1].data : void 0,
          g = e.createURL(t.location),
          b = e.createURL(a),
          w = r;
        o && t.errors ? w = be(r, Object.keys(t.errors)[0], !0) : v && We(v[1]) && (w = be(r, v[0]));
        let E = v ? v[1].statusCode : void 0,
          S = i && E && E >= 400,
          x = w.filter((e, r) => {
            let {
              route: a
            } = e;
            if (a.lazy) return !0;
            if (null == a.loader) return !1;
            if (o) return Ee(a, t.loaderData, t.errors);
            if (function(e, t, r) {
                let n = !t || r.route.id !== t.route.id,
                  a = void 0 === e[r.route.id];
                return n || a
              }(t.loaderData, t.matches[r], e) || u.some(t => t === e.route.id)) return !0;
            let i = t.matches[r],
              c = e;
            return Re(e, l({
              currentUrl: g,
              currentParams: i.params,
              nextUrl: b,
              nextParams: c.params
            }, n, {
              actionResult: y,
              actionStatus: E,
              defaultShouldRevalidate: !S && (s || g.pathname + g.search === b.pathname + b.search || g.search !== b.search || Se(i, c))
            }))
          }),
          D = [];
        return h.forEach((e, a) => {
          if (o || !r.some(t => t.route.id === e.routeId) || d.has(a)) return;
          let i = R(p, e.path, m);
          if (!i) return void D.push({
            key: a,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let u = t.fetchers.get(a),
            h = Qe(i, e.path),
            v = !1;
          f.has(a) ? v = !1 : c.has(a) ? (c.delete(a), v = !0) : v = u && "idle" !== u.state && void 0 === u.data ? s : Re(h, l({
            currentUrl: g,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: b,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: y,
            actionStatus: E,
            defaultShouldRevalidate: !S && s
          })), v && D.push({
            key: a,
            routeId: e.routeId,
            path: e.path,
            matches: i,
            match: h,
            controller: new AbortController
          })
        }), [x, D]
      }

      function Ee(e, t, r) {
        if (e.lazy) return !0;
        if (!e.loader) return !1;
        let n = null != t && void 0 !== t[e.id],
          a = null != r && void 0 !== r[e.id];
        return !(!n && a) && ("function" == typeof e.loader && !0 === e.loader.hydrate || !n && !a)
      }

      function Se(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function Re(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }

      function xe(e, t, r, n, a) {
        var o;
        let i;
        if (e) {
          let t = n[e];
          f(t, "No route found to patch children into: routeId = " + e), t.children || (t.children = []), i = t.children
        } else i = r;
        let s = S(t.filter(e => !i.some(t => De(e, t))), a, [e || "_", "patch", String((null == (o = i) ? void 0 : o.length) || "0")], n);
        i.push(...s)
      }

      function De(e, t) {
        return "id" in e && "id" in t && e.id === t.id || e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive && (!(e.children && 0 !== e.children.length || t.children && 0 !== t.children.length) || e.children.every((e, r) => {
          var n;
          return null == (n = t.children) ? void 0 : n.some(t => De(e, t))
        }))
      }
      async function Ce(e) {
        let {
          matches: t
        } = e, r = t.filter(e => e.shouldLoad);
        return (await Promise.all(r.map(e => e.resolve()))).reduce((e, t, n) => Object.assign(e, {
          [r[n].route.id]: t
        }), {})
      }
      async function Le(e) {
        let {
          result: t,
          type: r
        } = e;
        if (Ve(t)) {
          let e;
          try {
            let r = t.headers.get("Content-Type");
            e = r && /\bapplication\/json\b/.test(r) ? null == t.body ? null : await t.json() : await t.text()
          } catch (e) {
            return {
              type: w.error,
              error: e
            }
          }
          return r === w.error ? {
            type: w.error,
            error: new re(t.status, t.statusText, e),
            statusCode: t.status,
            headers: t.headers
          } : {
            type: w.data,
            data: e,
            statusCode: t.status,
            headers: t.headers
          }
        }
        var n, a, o, i, s, l, u, c;
        return r === w.error ? $e(t) ? t.data instanceof Error ? {
          type: w.error,
          error: t.data,
          statusCode: null == (o = t.init) ? void 0 : o.status,
          headers: null != (i = t.init) && i.headers ? new Headers(t.init.headers) : void 0
        } : {
          type: w.error,
          error: new re((null == (n = t.init) ? void 0 : n.status) || 500, void 0, t.data),
          statusCode: ne(t) ? t.status : void 0,
          headers: null != (a = t.init) && a.headers ? new Headers(t.init.headers) : void 0
        } : {
          type: w.error,
          error: t,
          statusCode: ne(t) ? t.status : void 0
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(t) ? {
          type: w.deferred,
          deferredData: t,
          statusCode: null == (s = t.init) ? void 0 : s.status,
          headers: (null == (l = t.init) ? void 0 : l.headers) && new Headers(t.init.headers)
        } : $e(t) ? {
          type: w.data,
          data: t.data,
          statusCode: null == (u = t.init) ? void 0 : u.status,
          headers: null != (c = t.init) && c.headers ? new Headers(t.init.headers) : void 0
        } : {
          type: w.data,
          data: t
        }
      }

      function ke(e, t, r, n, a, o) {
        let i = e.headers.get("Location");
        if (f(i, "Redirects returned/thrown from loaders/actions must have a Location header"), !fe.test(i)) {
          let s = n.slice(0, n.findIndex(e => e.route.id === r) + 1);
          i = ye(new URL(t.url), s, a, !0, i, o), e.headers.set("Location", i)
        }
        return e
      }

      function Pe(e, t, r, n) {
        let a = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"];
        if (fe.test(e)) {
          let n = e,
            o = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n);
          if (a.includes(o.protocol)) throw new Error("Invalid redirect location");
          let i = null != j(o.pathname, r);
          if (o.origin === t.origin && i) return W(o.pathname) + o.search + o.hash
        }
        try {
          let t = n.createURL(e);
          if (a.includes(t.protocol)) throw new Error("Invalid redirect location")
        } catch (e) {}
        return e
      }

      function Te(e, t, r, n) {
        let a = e.createURL(Be(t)).toString(),
          o = {
            signal: r
          };
        if (n && Je(n.formMethod)) {
          let {
            formMethod: e,
            formEncType: t
          } = n;
          o.method = e.toUpperCase(), "application/json" === t ? (o.headers = new Headers({
            "Content-Type": t
          }), o.body = JSON.stringify(n.json)) : "text/plain" === t ? o.body = n.text : "application/x-www-form-urlencoded" === t && n.formData ? o.body = _e(n.formData) : o.body = n.formData
        }
        return new Request(a, o)
      }

      function _e(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) t.append(r, "string" == typeof n ? n : n.name);
        return t
      }

      function Ae(e) {
        let t = new FormData;
        for (let [r, n] of e.entries()) t.append(r, n);
        return t
      }

      function Me(e, t, r, n, a, o, i) {
        let {
          loaderData: s,
          errors: u
        } = function(e, t, r, n, a) {
          let o, i = {},
            s = null,
            l = !1,
            u = {},
            c = r && We(r[1]) ? r[1].error : void 0;
          return e.forEach(r => {
            if (!(r.route.id in t)) return;
            let d = r.route.id,
              h = t[d];
            if (f(!Ke(h), "Cannot handle redirect results in processLoaderData"), We(h)) {
              let t = h.error;
              if (void 0 !== c && (t = c, c = void 0), s = s || {}, a) s[d] = t;
              else {
                let r = Oe(e, d);
                null == s[r.route.id] && (s[r.route.id] = t)
              }
              i[d] = void 0, l || (l = !0, o = ne(h.error) ? h.error.status : 500), h.headers && (u[d] = h.headers)
            } else He(h) ? (n.set(d, h.deferredData), i[d] = h.deferredData.data, null == h.statusCode || 200 === h.statusCode || l || (o = h.statusCode), h.headers && (u[d] = h.headers)) : (i[d] = h.data, h.statusCode && 200 !== h.statusCode && !l && (o = h.statusCode), h.headers && (u[d] = h.headers))
          }), void 0 !== c && r && (s = {
            [r[0]]: c
          }, i[r[0]] = void 0), {
            loaderData: i,
            errors: s,
            statusCode: o || 200,
            loaderHeaders: u
          }
        }(t, r, n, i, !1);
        return a.forEach(t => {
          let {
            key: r,
            match: n,
            controller: a
          } = t, i = o[r];
          if (f(i, "Did not find corresponding fetcher result"), !a || !a.signal.aborted)
            if (We(i)) {
              let t = Oe(e.matches, null == n ? void 0 : n.route.id);
              u && u[t.route.id] || (u = l({}, u, {
                [t.route.id]: i.error
              })), e.fetchers.delete(r)
            } else if (Ke(i)) f(!1, "Unhandled fetcher revalidation redirect");
          else if (He(i)) f(!1, "Unhandled fetcher deferred data");
          else {
            let t = rt(i.data);
            e.fetchers.set(r, t)
          }
        }), {
          loaderData: s,
          errors: u
        }
      }

      function Ue(e, t, r, n) {
        let a = l({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && o.route.loader && (a[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return a
      }

      function je(e) {
        return e ? We(e[1]) ? {
          actionData: {}
        } : {
          actionData: {
            [e[0]]: e[1].data
          }
        } : {}
      }

      function Oe(e, t) {
        return (t ? e.slice(0, e.findIndex(e => e.route.id === t) + 1) : [...e]).reverse().find(e => !0 === e.route.hasErrorBoundary) || e[0]
      }

      function Fe(e) {
        let t = 1 === e.length ? e[0] : e.find(e => e.index || !e.path || "/" === e.path) || {
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

      function Ne(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: a,
          type: o,
          message: i
        } = void 0 === t ? {} : t, s = "Unknown Server Error", l = "Unknown @remix-run/router error";
        return 400 === e ? (s = "Bad Request", a && r && n ? l = "You made a " + a + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === o ? l = "defer() is not supported in actions" : "invalid-body" === o && (l = "Unable to encode submission body")) : 403 === e ? (s = "Forbidden", l = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (s = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (s = "Method Not Allowed", a && r && n ? l = "You made a " + a.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : a && (l = 'Invalid request method "' + a.toUpperCase() + '"')), new re(e || 500, s, new Error(l), !0)
      }

      function Ie(e) {
        let t = Object.entries(e);
        for (let e = t.length - 1; e >= 0; e--) {
          let [r, n] = t[e];
          if (Ke(n)) return {
            key: r,
            result: n
          }
        }
      }

      function Be(e) {
        return y(l({}, "string" == typeof e ? g(e) : e, {
          hash: ""
        }))
      }

      function ze(e) {
        return Ve(e.result) && le.has(e.result.status)
      }

      function He(e) {
        return e.type === w.deferred
      }

      function We(e) {
        return e.type === w.error
      }

      function Ke(e) {
        return (e && e.type) === w.redirect
      }

      function $e(e) {
        return "object" == typeof e && null != e && "type" in e && "data" in e && "init" in e && "DataWithResponseInit" === e.type
      }

      function Ve(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "object" == typeof e.headers && void 0 !== e.body
      }

      function Je(e) {
        return oe.has(e.toLowerCase())
      }
      async function Ye(e, t, r, n, a) {
        let o = Object.entries(t);
        for (let i = 0; i < o.length; i++) {
          let [s, l] = o[i], u = e.find(e => (null == e ? void 0 : e.route.id) === s);
          if (!u) continue;
          let c = n.find(e => e.route.id === u.route.id),
            d = null != c && !Se(c, u) && void 0 !== (a && a[u.route.id]);
          He(l) && d && await Xe(l, r, !1).then(e => {
            e && (t[s] = e)
          })
        }
      }
      async function qe(e, t, r) {
        for (let n = 0; n < r.length; n++) {
          let {
            key: a,
            routeId: o,
            controller: i
          } = r[n], s = t[a];
          e.find(e => (null == e ? void 0 : e.route.id) === o) && He(s) && (f(i, "Expected an AbortController for revalidating fetcher deferred result"), await Xe(s, i.signal, !0).then(e => {
            e && (t[a] = e)
          }))
        }
      }
      async function Xe(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: w.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: w.error,
              error: e
            }
          }
          return {
            type: w.data,
            data: e.deferredData.data
          }
        }
      }

      function Ge(e) {
        return new URLSearchParams(e).getAll("index").some(e => "" === e)
      }

      function Qe(e, t) {
        let r = "string" == typeof t ? g(t).search : t.search;
        if (e[e.length - 1].route.index && Ge(r || "")) return e[e.length - 1];
        let n = B(e);
        return n[n.length - 1]
      }

      function Ze(e) {
        let {
          formMethod: t,
          formAction: r,
          formEncType: n,
          text: a,
          formData: o,
          json: i
        } = e;
        if (t && r && n) return null != a ? {
          formMethod: t,
          formAction: r,
          formEncType: n,
          formData: void 0,
          json: void 0,
          text: a
        } : null != o ? {
          formMethod: t,
          formAction: r,
          formEncType: n,
          formData: o,
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

      function et(e, t) {
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

      function tt(e, t) {
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

      function rt(e) {
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

      function nt() {
        return nt = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, nt.apply(null, arguments)
      }
      Symbol("deferred");
      const at = a.createContext(null),
        ot = a.createContext(null),
        it = a.createContext(null),
        st = a.createContext(null),
        lt = a.createContext(null),
        ut = a.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        ct = a.createContext(null);

      function dt(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        ht() || f(!1);
        let {
          basename: n,
          navigator: o
        } = a.useContext(st), {
          hash: i,
          pathname: s,
          search: l
        } = St(e, {
          relative: r
        }), u = s;
        return "/" !== n && (u = "/" === s ? n : K([n, s])), o.createHref({
          pathname: u,
          search: l,
          hash: i
        })
      }

      function ht() {
        return null != a.useContext(lt)
      }

      function ft() {
        return ht() || f(!1), a.useContext(lt).location
      }

      function pt() {
        return a.useContext(lt).navigationType
      }

      function mt(e) {
        ht() || f(!1);
        let {
          pathname: t
        } = ft();
        return a.useMemo(() => M(e, U(t)), [t, e])
      }

      function vt(e) {
        a.useContext(st).static || a.useLayoutEffect(e)
      }

      function yt() {
        let {
          isDataRoute: e
        } = a.useContext(ut);
        return e ? function() {
          let {
            router: e
          } = At(Tt.UseNavigateStable), t = Ut(_t.UseNavigateStable), r = a.useRef(!1);
          return vt(() => {
            r.current = !0
          }), a.useCallback(function(n, a) {
            void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, nt({
              fromRouteId: t
            }, a)))
          }, [e, t])
        }() : function() {
          ht() || f(!1);
          let e = a.useContext(at),
            {
              basename: t,
              future: r,
              navigator: n
            } = a.useContext(st),
            {
              matches: o
            } = a.useContext(ut),
            {
              pathname: i
            } = ft(),
            s = JSON.stringify(z(o, r.v7_relativeSplatPath)),
            l = a.useRef(!1);
          return vt(() => {
            l.current = !0
          }), a.useCallback(function(r, a) {
            if (void 0 === a && (a = {}), !l.current) return;
            if ("number" == typeof r) return void n.go(r);
            let o = H(r, JSON.parse(s), i, "path" === a.relative);
            null == e && "/" !== t && (o.pathname = "/" === o.pathname ? t : K([t, o.pathname])), (a.replace ? n.replace : n.push)(o, a.state, a)
          }, [t, n, s, i, e])
        }()
      }
      const gt = a.createContext(null);

      function bt() {
        return a.useContext(gt)
      }

      function wt(e) {
        let t = a.useContext(ut).outlet;
        return t ? a.createElement(gt.Provider, {
          value: e
        }, t) : t
      }

      function Et() {
        let {
          matches: e
        } = a.useContext(ut), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function St(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          future: n
        } = a.useContext(st), {
          matches: o
        } = a.useContext(ut), {
          pathname: i
        } = ft(), s = JSON.stringify(z(o, n.v7_relativeSplatPath));
        return a.useMemo(() => H(e, JSON.parse(s), i, "path" === r), [e, s, i, r])
      }

      function Rt(e, t) {
        return xt(e, t)
      }

      function xt(e, t, r, o) {
        ht() || f(!1);
        let {
          navigator: i
        } = a.useContext(st), {
          matches: s
        } = a.useContext(ut), l = s[s.length - 1], u = l ? l.params : {}, c = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let d, h = ft();
        if (t) {
          var p;
          let e = "string" == typeof t ? g(t) : t;
          "/" === c || (null == (p = e.pathname) ? void 0 : p.startsWith(c)) || f(!1), d = e
        } else d = h;
        let m = d.pathname || "/",
          v = m;
        if ("/" !== c) {
          let e = c.replace(/^\//, "").split("/");
          v = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let y = R(e, {
            pathname: v
          }),
          b = Pt(y && y.map(e => Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: K([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? c : K([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          })), s, r, o);
        return t && b ? a.createElement(lt.Provider, {
          value: {
            location: nt({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, d),
            navigationType: n.Pop
          }
        }, b) : b
      }

      function Dt() {
        let e = Ht(),
          t = ne(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          n = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
          };
        return a.createElement(a.Fragment, null, a.createElement("h2", null, "Unexpected Application Error!"), a.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, t), r ? a.createElement("pre", {
          style: n
        }, r) : null, null)
      }
      const Ct = a.createElement(Dt, null);
      class Lt extends a.Component {
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
          return void 0 !== this.state.error ? a.createElement(ut.Provider, {
            value: this.props.routeContext
          }, a.createElement(ct.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function kt(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, o = a.useContext(at);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), a.createElement(ut.Provider, {
          value: t
        }, n)
      }

      function Pt(e, t, r, n) {
        var o;
        if (void 0 === t && (t = []), void 0 === r && (r = null), void 0 === n && (n = null), null == e) {
          var i;
          if (!r) return null;
          if (r.errors) e = r.matches;
          else {
            if (!(null != (i = n) && i.v7_partialHydration && 0 === t.length && !r.initialized && r.matches.length > 0)) return null;
            e = r.matches
          }
        }
        let s = e,
          l = null == (o = r) ? void 0 : o.errors;
        if (null != l) {
          let e = s.findIndex(e => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id]));
          e >= 0 || f(!1), s = s.slice(0, Math.min(s.length, e + 1))
        }
        let u = !1,
          c = -1;
        if (r && n && n.v7_partialHydration)
          for (let e = 0; e < s.length; e++) {
            let t = s[e];
            if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id) {
              let {
                loaderData: e,
                errors: n
              } = r, a = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
              if (t.route.lazy || a) {
                u = !0, s = c >= 0 ? s.slice(0, c + 1) : [s[0]];
                break
              }
            }
          }
        return s.reduceRight((e, n, o) => {
          let i, d = !1,
            h = null,
            f = null;
          var p;
          r && (i = l && n.route.id ? l[n.route.id] : void 0, h = n.route.errorElement || Ct, u && (c < 0 && 0 === o ? (Jt[p = "route-fallback"] || (Jt[p] = !0), d = !0, f = null) : c === o && (d = !0, f = n.route.hydrateFallbackElement || null)));
          let m = t.concat(s.slice(0, o + 1)),
            v = () => {
              let t;
              return t = i ? h : d ? f : n.route.Component ? a.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, a.createElement(kt, {
                match: n,
                routeContext: {
                  outlet: e,
                  matches: m,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === o) ? a.createElement(Lt, {
            location: r.location,
            revalidation: r.revalidation,
            component: h,
            error: i,
            children: v(),
            routeContext: {
              outlet: null,
              matches: m,
              isDataRoute: !0
            }
          }) : v()
        }, null)
      }
      var Tt = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(Tt || {}),
        _t = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(_t || {});

      function At(e) {
        let t = a.useContext(at);
        return t || f(!1), t
      }

      function Mt(e) {
        let t = a.useContext(ot);
        return t || f(!1), t
      }

      function Ut(e) {
        let t = function() {
            let e = a.useContext(ut);
            return e || f(!1), e
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || f(!1), r.route.id
      }

      function jt() {
        return Ut(_t.UseRouteId)
      }

      function Ot() {
        return Mt(_t.UseNavigation).navigation
      }

      function Ft() {
        let e = At(Tt.UseRevalidator),
          t = Mt(_t.UseRevalidator);
        return a.useMemo(() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        }), [e.router.revalidate, t.revalidation])
      }

      function Nt() {
        let {
          matches: e,
          loaderData: t
        } = Mt(_t.UseMatches);
        return a.useMemo(() => e.map(e => D(e, t)), [e, t])
      }

      function It() {
        let e = Mt(_t.UseLoaderData),
          t = Ut(_t.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function Bt(e) {
        return Mt(_t.UseRouteLoaderData).loaderData[e]
      }

      function zt() {
        let e = Mt(_t.UseActionData),
          t = Ut(_t.UseLoaderData);
        return e.actionData ? e.actionData[t] : void 0
      }

      function Ht() {
        var e;
        let t = a.useContext(ct),
          r = Mt(_t.UseRouteError),
          n = Ut(_t.UseRouteError);
        return void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[n]
      }

      function Wt() {
        let e = a.useContext(it);
        return null == e ? void 0 : e._data
      }

      function Kt() {
        let e = a.useContext(it);
        return null == e ? void 0 : e._error
      }
      let $t = 0;

      function Vt(e) {
        let {
          router: t,
          basename: r
        } = At(Tt.UseBlocker), n = Mt(_t.UseBlocker), [o, i] = a.useState(""), s = a.useCallback(t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: n,
            nextLocation: a,
            historyAction: o
          } = t;
          return e({
            currentLocation: nt({}, n, {
              pathname: j(n.pathname, r) || n.pathname
            }),
            nextLocation: nt({}, a, {
              pathname: j(a.pathname, r) || a.pathname
            }),
            historyAction: o
          })
        }, [r, e]);
        return a.useEffect(() => {
          let e = String(++$t);
          return i(e), () => t.deleteBlocker(e)
        }, [t]), a.useEffect(() => {
          "" !== o && t.getBlocker(o, s)
        }, [t, o, s]), o && n.blockers.has(o) ? n.blockers.get(o) : he
      }
      const Jt = {};

      function Yt(e, t) {
        null == e || e.v7_startTransition, void 0 === (null == e ? void 0 : e.v7_relativeSplatPath) && (!t || t.v7_relativeSplatPath), t && (t.v7_fetcherPersist, t.v7_normalizeFormMethod, t.v7_partialHydration, t.v7_skipActionErrorRevalidation)
      }
      const qt = o.startTransition;

      function Xt(e) {
        let {
          basename: t,
          children: r,
          initialEntries: n,
          initialIndex: o,
          future: i
        } = e, s = a.useRef();
        null == s.current && (s.current = c({
          initialEntries: n,
          initialIndex: o,
          v5Compat: !0
        }));
        let l = s.current,
          [u, d] = a.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: h
          } = i || {},
          f = a.useCallback(e => {
            h && qt ? qt(() => d(e)) : d(e)
          }, [d, h]);
        return a.useLayoutEffect(() => l.listen(f), [l, f]), a.useEffect(() => Yt(i), [i]), a.createElement(er, {
          basename: t,
          children: r,
          location: u.location,
          navigationType: u.action,
          navigator: l,
          future: i
        })
      }

      function Gt(e) {
        let {
          to: t,
          replace: r,
          state: n,
          relative: o
        } = e;
        ht() || f(!1);
        let {
          future: i,
          static: s
        } = a.useContext(st), {
          matches: l
        } = a.useContext(ut), {
          pathname: u
        } = ft(), c = yt(), d = H(t, z(l, i.v7_relativeSplatPath), u, "path" === o), h = JSON.stringify(d);
        return a.useEffect(() => c(JSON.parse(h), {
          replace: r,
          state: n,
          relative: o
        }), [c, h, o, r, n]), null
      }

      function Qt(e) {
        return wt(e.context)
      }

      function Zt(e) {
        f(!1)
      }

      function er(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = n.Pop,
          navigator: s,
          static: l = !1,
          future: u
        } = e;
        ht() && f(!1);
        let c = t.replace(/^\/*/, "/"),
          d = a.useMemo(() => ({
            basename: c,
            navigator: s,
            static: l,
            future: nt({
              v7_relativeSplatPath: !1
            }, u)
          }), [c, u, s, l]);
        "string" == typeof o && (o = g(o));
        let {
          pathname: h = "/",
          search: p = "",
          hash: m = "",
          state: v = null,
          key: y = "default"
        } = o, b = a.useMemo(() => {
          let e = j(h, c);
          return null == e ? null : {
            location: {
              pathname: e,
              search: p,
              hash: m,
              state: v,
              key: y
            },
            navigationType: i
          }
        }, [c, h, p, m, v, y, i]);
        return null == b ? null : a.createElement(st.Provider, {
          value: d
        }, a.createElement(lt.Provider, {
          children: r,
          value: b
        }))
      }

      function tr(e) {
        let {
          children: t,
          location: r
        } = e;
        return Rt(sr(t), r)
      }

      function rr(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return a.createElement(or, {
          resolve: n,
          errorElement: r
        }, a.createElement(ir, null, t))
      }
      var nr = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(nr || {});
      const ar = new Promise(() => {});
      class or extends a.Component {
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
          } = this.props, n = null, o = nr.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              o = nr.error;
              let e = this.state.error;
              n = Promise.reject().catch(() => {}), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, o = "_error" in n ? nr.error : "_data" in n ? nr.success : nr.pending) : (o = nr.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then(e => Object.defineProperty(r, "_data", {
              get: () => e
            }), e => Object.defineProperty(r, "_error", {
              get: () => e
            })));
          else o = nr.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (o === nr.error && n._error instanceof q) throw ar;
          if (o === nr.error && !t) throw n._error;
          if (o === nr.error) return a.createElement(it.Provider, {
            value: n,
            children: t
          });
          if (o === nr.success) return a.createElement(it.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function ir(e) {
        let {
          children: t
        } = e, r = Wt(), n = "function" == typeof t ? t(r) : t;
        return a.createElement(a.Fragment, null, n)
      }

      function sr(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return a.Children.forEach(e, (e, n) => {
          if (!a.isValidElement(e)) return;
          let o = [...t, n];
          if (e.type === a.Fragment) return void r.push.apply(r, sr(e.props.children, o));
          e.type !== Zt && f(!1), e.props.index && e.props.children && f(!1);
          let i = {
            id: e.props.id || o.join("-"),
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
          e.props.children && (i.children = sr(e.props.children, o)), r.push(i)
        }), r
      }

      function lr(e) {
        return Pt(e)
      }

      function ur(e) {
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

      function cr(e, t) {
        return ve({
          basename: null == t ? void 0 : t.basename,
          future: nt({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: c({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          mapRouteProperties: ur,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation
        }).initialize()
      }

      function dr() {
        return dr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, dr.apply(null, arguments)
      }

      function hr(e, t) {
        if (null == e) return {};
        var r = {};
        for (var n in e)
          if ({}.hasOwnProperty.call(e, n)) {
            if (-1 !== t.indexOf(n)) continue;
            r[n] = e[n]
          } return r
      }
      const fr = "get",
        pr = "application/x-www-form-urlencoded";

      function mr(e) {
        return null != e && "string" == typeof e.tagName
      }

      function vr(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map(e => [r, e]) : [
            [r, n]
          ])
        }, []))
      }
      let yr = null;
      const gr = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function br(e) {
        return null == e || gr.has(e) ? e : null
      }
      const wr = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
        Er = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
        Sr = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
      try {
        window.__reactRouterVersion = "6"
      } catch (e) {}

      function Rr(e, t) {
        return ve({
          basename: null == t ? void 0 : t.basename,
          future: dr({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: d({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || Dr(),
          routes: e,
          mapRouteProperties: ur,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function xr(e, t) {
        return ve({
          basename: null == t ? void 0 : t.basename,
          future: dr({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: h({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || Dr(),
          routes: e,
          mapRouteProperties: ur,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function Dr() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = dr({}, t, {
          errors: Cr(t.errors)
        })), t
      }

      function Cr(e) {
        if (!e) return null;
        let t = Object.entries(e),
          r = {};
        for (let [e, n] of t)
          if (n && "RouteErrorResponse" === n.__type) r[e] = new re(n.status, n.statusText, n.data, !0 === n.internal);
          else if (n && "Error" === n.__type) {
          if (n.__subType) {
            let t = window[n.__subType];
            if ("function" == typeof t) try {
              let a = new t(n.message);
              a.stack = "", r[e] = a
            } catch (e) {}
          }
          if (null == r[e]) {
            let t = new Error(n.message);
            t.stack = "", r[e] = t
          }
        } else r[e] = n;
        return r
      }
      const Lr = a.createContext({
          isTransitioning: !1
        }),
        kr = a.createContext(new Map),
        Pr = o.startTransition,
        Tr = s.flushSync,
        _r = o.useId;

      function Ar(e) {
        Tr ? Tr(e) : e()
      }
      class Mr {
        constructor() {
          this.status = "pending", this.promise = new Promise((e, t) => {
            this.resolve = t => {
              "pending" === this.status && (this.status = "resolved", e(t))
            }, this.reject = e => {
              "pending" === this.status && (this.status = "rejected", t(e))
            }
          })
        }
      }

      function Ur(e) {
        let {
          fallbackElement: t,
          router: r,
          future: n
        } = e, [o, i] = a.useState(r.state), [s, l] = a.useState(), [u, c] = a.useState({
          isTransitioning: !1
        }), [d, h] = a.useState(), [f, p] = a.useState(), [m, v] = a.useState(), y = a.useRef(new Map), {
          v7_startTransition: g
        } = n || {}, b = a.useCallback(e => {
          g ? function(e) {
            Pr ? Pr(e) : e()
          }(e) : e()
        }, [g]), w = a.useCallback((e, t) => {
          let {
            deletedFetchers: n,
            flushSync: a,
            viewTransitionOpts: o
          } = t;
          e.fetchers.forEach((e, t) => {
            void 0 !== e.data && y.current.set(t, e.data)
          }), n.forEach(e => y.current.delete(e));
          let s = null == r.window || null == r.window.document || "function" != typeof r.window.document.startViewTransition;
          if (o && !s) {
            if (a) {
              Ar(() => {
                f && (d && d.resolve(), f.skipTransition()), c({
                  isTransitioning: !0,
                  flushSync: !0,
                  currentLocation: o.currentLocation,
                  nextLocation: o.nextLocation
                })
              });
              let t = r.window.document.startViewTransition(() => {
                Ar(() => i(e))
              });
              return t.finished.finally(() => {
                Ar(() => {
                  h(void 0), p(void 0), l(void 0), c({
                    isTransitioning: !1
                  })
                })
              }), void Ar(() => p(t))
            }
            f ? (d && d.resolve(), f.skipTransition(), v({
              state: e,
              currentLocation: o.currentLocation,
              nextLocation: o.nextLocation
            })) : (l(e), c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: o.currentLocation,
              nextLocation: o.nextLocation
            }))
          } else a ? Ar(() => i(e)) : b(() => i(e))
        }, [r.window, f, d, y, b]);
        a.useLayoutEffect(() => r.subscribe(w), [r, w]), a.useEffect(() => {
          u.isTransitioning && !u.flushSync && h(new Mr)
        }, [u]), a.useEffect(() => {
          if (d && s && r.window) {
            let e = s,
              t = d.promise,
              n = r.window.document.startViewTransition(async () => {
                b(() => i(e)), await t
              });
            n.finished.finally(() => {
              h(void 0), p(void 0), l(void 0), c({
                isTransitioning: !1
              })
            }), p(n)
          }
        }, [b, s, d, r.window]), a.useEffect(() => {
          d && s && o.location.key === s.location.key && d.resolve()
        }, [d, f, o.location, s]), a.useEffect(() => {
          !u.isTransitioning && m && (l(m.state), c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: m.currentLocation,
            nextLocation: m.nextLocation
          }), v(void 0))
        }, [u.isTransitioning, m]), a.useEffect(() => {}, []);
        let E = a.useMemo(() => ({
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
          }), [r]),
          S = r.basename || "/",
          R = a.useMemo(() => ({
            router: r,
            navigator: E,
            static: !1,
            basename: S
          }), [r, E, S]),
          x = a.useMemo(() => ({
            v7_relativeSplatPath: r.future.v7_relativeSplatPath
          }), [r.future.v7_relativeSplatPath]);
        return a.useEffect(() => Yt(n, r.future), [n, r.future]), a.createElement(a.Fragment, null, a.createElement(at.Provider, {
          value: R
        }, a.createElement(ot.Provider, {
          value: o
        }, a.createElement(kr.Provider, {
          value: y.current
        }, a.createElement(Lr.Provider, {
          value: u
        }, a.createElement(er, {
          basename: S,
          location: o.location,
          navigationType: o.historyAction,
          navigator: E,
          future: x
        }, o.initialized || r.future.v7_partialHydration ? a.createElement(jr, {
          routes: r.routes,
          future: r.future,
          state: o
        }) : t))))), null)
      }
      const jr = a.memo(Or);

      function Or(e) {
        let {
          routes: t,
          future: r,
          state: n
        } = e;
        return xt(t, void 0, n, r)
      }

      function Fr(e) {
        let {
          basename: t,
          children: r,
          future: n,
          window: o
        } = e, i = a.useRef();
        null == i.current && (i.current = d({
          window: o,
          v5Compat: !0
        }));
        let s = i.current,
          [l, u] = a.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: c
          } = n || {},
          h = a.useCallback(e => {
            c && Pr ? Pr(() => u(e)) : u(e)
          }, [u, c]);
        return a.useLayoutEffect(() => s.listen(h), [s, h]), a.useEffect(() => Yt(n), [n]), a.createElement(er, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: s,
          future: n
        })
      }

      function Nr(e) {
        let {
          basename: t,
          children: r,
          future: n,
          window: o
        } = e, i = a.useRef();
        null == i.current && (i.current = h({
          window: o,
          v5Compat: !0
        }));
        let s = i.current,
          [l, u] = a.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: c
          } = n || {},
          d = a.useCallback(e => {
            c && Pr ? Pr(() => u(e)) : u(e)
          }, [u, c]);
        return a.useLayoutEffect(() => s.listen(d), [s, d]), a.useEffect(() => Yt(n), [n]), a.createElement(er, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: s,
          future: n
        })
      }

      function Ir(e) {
        let {
          basename: t,
          children: r,
          future: n,
          history: o
        } = e, [i, s] = a.useState({
          action: o.action,
          location: o.location
        }), {
          v7_startTransition: l
        } = n || {}, u = a.useCallback(e => {
          l && Pr ? Pr(() => s(e)) : s(e)
        }, [s, l]);
        return a.useLayoutEffect(() => o.listen(u), [o, u]), a.useEffect(() => Yt(n), [n]), a.createElement(er, {
          basename: t,
          children: r,
          location: i.location,
          navigationType: i.action,
          navigator: o,
          future: n
        })
      }
      const Br = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        zr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Hr = a.forwardRef(function(e, t) {
          let r, {
              onClick: n,
              relative: o,
              reloadDocument: i,
              replace: s,
              state: l,
              target: u,
              to: c,
              preventScrollReset: d,
              viewTransition: h
            } = e,
            f = hr(e, wr),
            {
              basename: p
            } = a.useContext(st),
            m = !1;
          if ("string" == typeof c && zr.test(c) && (r = c, Br)) try {
            let e = new URL(window.location.href),
              t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
              r = j(t.pathname, p);
            t.origin === e.origin && null != r ? c = r + t.search + t.hash : m = !0
          } catch (e) {}
          let v = dt(c, {
              relative: o
            }),
            y = Xr(c, {
              replace: s,
              state: l,
              target: u,
              preventScrollReset: d,
              relative: o,
              viewTransition: h
            });
          return a.createElement("a", dr({}, f, {
            href: r || v,
            onClick: m || i ? n : function(e) {
              n && n(e), e.defaultPrevented || y(e)
            },
            ref: t,
            target: u
          }))
        }),
        Wr = a.forwardRef(function(e, t) {
          let {
            "aria-current": r = "page",
            caseSensitive: n = !1,
            className: o = "",
            end: i = !1,
            style: s,
            to: l,
            viewTransition: u,
            children: c
          } = e, d = hr(e, Er), h = St(l, {
            relative: d.relative
          }), f = ft(), p = a.useContext(ot), {
            navigator: m,
            basename: v
          } = a.useContext(st), y = null != p && cn(h) && !0 === u, g = m.encodeLocation ? m.encodeLocation(h).pathname : h.pathname, b = f.pathname, w = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
          n || (b = b.toLowerCase(), w = w ? w.toLowerCase() : null, g = g.toLowerCase()), w && v && (w = j(w, v) || w);
          const E = "/" !== g && g.endsWith("/") ? g.length - 1 : g.length;
          let S, R = b === g || !i && b.startsWith(g) && "/" === b.charAt(E),
            x = null != w && (w === g || !i && w.startsWith(g) && "/" === w.charAt(g.length)),
            D = {
              isActive: R,
              isPending: x,
              isTransitioning: y
            },
            C = R ? r : void 0;
          S = "function" == typeof o ? o(D) : [o, R ? "active" : null, x ? "pending" : null, y ? "transitioning" : null].filter(Boolean).join(" ");
          let L = "function" == typeof s ? s(D) : s;
          return a.createElement(Hr, dr({}, d, {
            "aria-current": C,
            className: S,
            ref: t,
            style: L,
            to: l,
            viewTransition: u
          }), "function" == typeof c ? c(D) : c)
        }),
        Kr = a.forwardRef((e, t) => {
          let {
            fetcherKey: r,
            navigate: n,
            reloadDocument: o,
            replace: i,
            state: s,
            method: l = fr,
            action: u,
            onSubmit: c,
            relative: d,
            preventScrollReset: h,
            viewTransition: f
          } = e, p = hr(e, Sr), m = en(), v = tn(u, {
            relative: d
          }), y = "get" === l.toLowerCase() ? "get" : "post";
          return a.createElement("form", dr({
            ref: t,
            method: y,
            action: v,
            onSubmit: o ? c : e => {
              if (c && c(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                a = (null == t ? void 0 : t.getAttribute("formmethod")) || l;
              m(t || e.currentTarget, {
                fetcherKey: r,
                method: a,
                navigate: n,
                replace: i,
                state: s,
                relative: d,
                preventScrollReset: h,
                viewTransition: f
              })
            }
          }, p))
        });

      function $r(e) {
        let {
          getKey: t,
          storageKey: r
        } = e;
        return sn({
          getKey: t,
          storageKey: r
        }), null
      }
      var Vr, Jr;

      function Yr(e) {
        let t = a.useContext(at);
        return t || f(!1), t
      }

      function qr(e) {
        let t = a.useContext(ot);
        return t || f(!1), t
      }

      function Xr(e, t) {
        let {
          target: r,
          replace: n,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: l
        } = void 0 === t ? {} : t, u = yt(), c = ft(), d = St(e, {
          relative: s
        });
        return a.useCallback(t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, r)) {
            t.preventDefault();
            let r = void 0 !== n ? n : y(c) === y(d);
            u(e, {
              replace: r,
              state: o,
              preventScrollReset: i,
              relative: s,
              viewTransition: l
            })
          }
        }, [c, u, d, n, o, r, e, i, s, l])
      }

      function Gr(e) {
        let t = a.useRef(vr(e)),
          r = a.useRef(!1),
          n = ft(),
          o = a.useMemo(() => function(e, t) {
            let r = vr(e);
            return t && t.forEach((e, n) => {
              r.has(n) || t.getAll(n).forEach(e => {
                r.append(n, e)
              })
            }), r
          }(n.search, r.current ? null : t.current), [n.search]),
          i = yt(),
          s = a.useCallback((e, t) => {
            const n = vr("function" == typeof e ? e(o) : e);
            r.current = !0, i("?" + n, t)
          }, [i, o]);
        return [o, s]
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(Vr || (Vr = {})),
      function(e) {
        e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(Jr || (Jr = {}));
      let Qr = 0,
        Zr = () => "__" + String(++Qr) + "__";

      function en() {
        let {
          router: e
        } = Yr(Vr.UseSubmit), {
          basename: t
        } = a.useContext(st), r = jt();
        return a.useCallback(function(n, a) {
          void 0 === a && (a = {}),
            function() {
              if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
            }();
          let {
            action: o,
            method: i,
            encType: s,
            formData: l,
            body: u
          } = function(e, t) {
            let r, n, a, o, i;
            if (mr(s = e) && "form" === s.tagName.toLowerCase()) {
              let i = e.getAttribute("action");
              n = i ? j(i, t) : null, r = e.getAttribute("method") || fr, a = br(e.getAttribute("enctype")) || pr, o = new FormData(e)
            } else if (function(e) {
                return mr(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return mr(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let i = e.form;
              if (null == i) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              let s = e.getAttribute("formaction") || i.getAttribute("action");
              if (n = s ? j(s, t) : null, r = e.getAttribute("formmethod") || i.getAttribute("method") || fr, a = br(e.getAttribute("formenctype")) || br(i.getAttribute("enctype")) || pr, o = new FormData(i, e), ! function() {
                  if (null === yr) try {
                    new FormData(document.createElement("form"), 0), yr = !1
                  } catch (e) {
                    yr = !0
                  }
                  return yr
                }()) {
                let {
                  name: t,
                  type: r,
                  value: n
                } = e;
                if ("image" === r) {
                  let e = t ? t + "." : "";
                  o.append(e + "x", "0"), o.append(e + "y", "0")
                } else t && o.append(t, n)
              }
            } else {
              if (mr(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              r = fr, n = null, a = pr, i = e
            }
            var s;
            return o && "text/plain" === a && (i = o, o = void 0), {
              action: n,
              method: r.toLowerCase(),
              encType: a,
              formData: o,
              body: i
            }
          }(n, t);
          if (!1 === a.navigate) {
            let t = a.fetcherKey || Zr();
            e.fetch(t, r, a.action || o, {
              preventScrollReset: a.preventScrollReset,
              formData: l,
              body: u,
              formMethod: a.method || i,
              formEncType: a.encType || s,
              flushSync: a.flushSync
            })
          } else e.navigate(a.action || o, {
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || i,
            formEncType: a.encType || s,
            replace: a.replace,
            state: a.state,
            fromRouteId: r,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition
          })
        }, [e, t, r])
      }

      function tn(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: n
        } = a.useContext(st), o = a.useContext(ut);
        o || f(!1);
        let [i] = o.matches.slice(-1), s = dr({}, St(e || ".", {
          relative: r
        })), l = ft();
        if (null == e) {
          s.search = l.search;
          let e = new URLSearchParams(s.search),
            t = e.getAll("index");
          if (t.some(e => "" === e)) {
            e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
            let r = e.toString();
            s.search = r ? "?" + r : ""
          }
        }
        return e && "." !== e || !i.route.index || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (s.pathname = "/" === s.pathname ? n : K([n, s.pathname])), y(s)
      }

      function rn(e) {
        var t;
        let {
          key: r
        } = void 0 === e ? {} : e, {
          router: n
        } = Yr(Vr.UseFetcher), o = qr(Jr.UseFetcher), i = a.useContext(kr), s = a.useContext(ut), l = null == (t = s.matches[s.matches.length - 1]) ? void 0 : t.route.id;
        i || f(!1), s || f(!1), null == l && f(!1);
        let u = _r ? _r() : "",
          [c, d] = a.useState(r || u);
        r && r !== c ? d(r) : c || d(Zr()), a.useEffect(() => (n.getFetcher(c), () => {
          n.deleteFetcher(c)
        }), [n, c]);
        let h = a.useCallback((e, t) => {
            l || f(!1), n.fetch(c, l, e, t)
          }, [c, l, n]),
          p = en(),
          m = a.useCallback((e, t) => {
            p(e, dr({}, t, {
              navigate: !1,
              fetcherKey: c
            }))
          }, [c, p]),
          v = a.useMemo(() => a.forwardRef((e, t) => a.createElement(Kr, dr({}, e, {
            navigate: !1,
            fetcherKey: c,
            ref: t
          }))), [c]),
          y = o.fetchers.get(c) || de,
          g = i.get(c);
        return a.useMemo(() => dr({
          Form: v,
          submit: m,
          load: h
        }, y, {
          data: g
        }), [v, m, h, y, g])
      }

      function nn() {
        let e = qr(Jr.UseFetchers);
        return Array.from(e.fetchers.entries()).map(e => {
          let [t, r] = e;
          return dr({}, r, {
            key: t
          })
        })
      }
      const an = "react-router-scroll-positions";
      let on = {};

      function sn(e) {
        let {
          getKey: t,
          storageKey: r
        } = void 0 === e ? {} : e, {
          router: n
        } = Yr(Vr.UseScrollRestoration), {
          restoreScrollPosition: o,
          preventScrollReset: i
        } = qr(Jr.UseScrollRestoration), {
          basename: s
        } = a.useContext(st), l = ft(), u = Nt(), c = Ot();
        a.useEffect(() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          }), []),
          function(e) {
            let {
              capture: t
            } = {};
            a.useEffect(() => {
              let r = null != t ? {
                capture: t
              } : void 0;
              return window.addEventListener("pagehide", e, r), () => {
                window.removeEventListener("pagehide", e, r)
              }
            }, [e, t])
          }(a.useCallback(() => {
            if ("idle" === c.state) {
              let e = (t ? t(l, u) : null) || l.key;
              on[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(r || an, JSON.stringify(on))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }, [r, t, c.state, l, u])), "undefined" != typeof document && (a.useLayoutEffect(() => {
            try {
              let e = sessionStorage.getItem(r || an);
              e && (on = JSON.parse(e))
            } catch (e) {}
          }, [r]), a.useLayoutEffect(() => {
            let e = t && "/" !== s ? (e, r) => t(dr({}, e, {
                pathname: j(e.pathname, s) || e.pathname
              }), r) : t,
              r = null == n ? void 0 : n.enableScrollRestoration(on, () => window.scrollY, e);
            return () => r && r()
          }, [n, s, t]), a.useLayoutEffect(() => {
            if (!1 !== o)
              if ("number" != typeof o) {
                if (l.hash) {
                  let e = document.getElementById(decodeURIComponent(l.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== i && window.scrollTo(0, 0)
              } else window.scrollTo(0, o)
          }, [l, o, i]))
      }

      function ln(e, t) {
        let {
          capture: r
        } = t || {};
        a.useEffect(() => {
          let t = null != r ? {
            capture: r
          } : void 0;
          return window.addEventListener("beforeunload", e, t), () => {
            window.removeEventListener("beforeunload", e, t)
          }
        }, [e, r])
      }

      function un(e) {
        let {
          when: t,
          message: r
        } = e, n = Vt(t);
        a.useEffect(() => {
          "blocked" === n.state && (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset())
        }, [n, r]), a.useEffect(() => {
          "blocked" !== n.state || t || n.reset()
        }, [n, t])
      }

      function cn(e, t) {
        void 0 === t && (t = {});
        let r = a.useContext(Lr);
        null == r && f(!1);
        let {
          basename: n
        } = Yr(Vr.useViewTransitionState), o = St(e, {
          relative: t.relative
        });
        if (!r.isTransitioning) return !1;
        let i = j(r.currentLocation.pathname, n) || r.currentLocation.pathname,
          s = j(r.nextLocation.pathname, n) || r.nextLocation.pathname;
        return null != M(o.pathname, s) || null != M(o.pathname, i)
      }
    }
  }
]);