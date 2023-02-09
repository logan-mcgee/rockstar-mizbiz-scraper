/*! For license information please see 29e993dcd236aa149418.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [490], {
    490: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => B,
        Await: () => bt,
        BrowserRouter: () => It,
        Form: () => $t,
        HashRouter: () => Bt,
        Link: () => Kt,
        MemoryRouter: () => pt,
        NavLink: () => Wt,
        Navigate: () => mt,
        NavigationType: () => n,
        Outlet: () => vt,
        Route: () => gt,
        Router: () => yt,
        RouterProvider: () => ft,
        Routes: () => wt,
        ScrollRestoration: () => zt,
        UNSAFE_DataRouterContext: () => Oe,
        UNSAFE_DataRouterStateContext: () => Ue,
        UNSAFE_DataStaticRouterContext: () => Me,
        UNSAFE_LocationContext: () => je,
        UNSAFE_NavigationContext: () => ke,
        UNSAFE_RouteContext: () => _e,
        UNSAFE_enhanceManualRouteObjects: () => xt,
        createBrowserRouter: () => Nt,
        createHashRouter: () => Ft,
        createMemoryRouter: () => Pt,
        createPath: () => f,
        createRoutesFromChildren: () => St,
        createRoutesFromElements: () => St,
        createSearchParams: () => Tt,
        defer: () => W,
        generatePath: () => C,
        isRouteErrorResponse: () => z,
        json: () => I,
        matchPath: () => x,
        matchRoutes: () => w,
        parsePath: () => p,
        redirect: () => $,
        renderMatches: () => Ct,
        resolvePath: () => O,
        unstable_HistoryRouter: () => Ht,
        useActionData: () => ct,
        useAsyncError: () => ht,
        useAsyncValue: () => dt,
        useFetcher: () => nr,
        useFetchers: () => ar,
        useFormAction: () => tr,
        useHref: () => Fe,
        useInRouterContext: () => Ie,
        useLinkClickHandler: () => Xt,
        useLoaderData: () => lt,
        useLocation: () => Be,
        useMatch: () => Ke,
        useMatches: () => it,
        useNavigate: () => We,
        useNavigation: () => at,
        useNavigationType: () => He,
        useOutlet: () => ze,
        useOutletContext: () => Je,
        useParams: () => Ye,
        useResolvedPath: () => qe,
        useRevalidator: () => ot,
        useRouteError: () => ut,
        useRouteLoaderData: () => st,
        useRoutes: () => Ve,
        useSearchParams: () => Qt,
        useSubmit: () => Zt
      });
      var n, a = r(822);

      function o() {
        return o = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, o.apply(this, arguments)
      }! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(n || (n = {}));
      const i = "popstate";

      function l(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: a,
          v5Compat: o = !1
        } = e;
        t = r.map(((e, t) => p(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = c(null == a ? t.length - 1 : a),
          l = n.Pop,
          s = null;

        function c(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function d() {
          return t[i]
        }

        function p(e, r, n) {
          void 0 === r && (r = null);
          let a = h(t ? d().pathname : "/", e, r, n);
          return u("/" === a.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), a
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
          createHref: e => "string" == typeof e ? e : f(e),
          encodeLocation: e => e,
          push(e, r) {
            l = n.Push;
            let a = p(e, r);
            i += 1, t.splice(i, t.length, a), o && s && s({
              action: l,
              location: a
            })
          },
          replace(e, r) {
            l = n.Replace;
            let a = p(e, r);
            t[i] = a, o && s && s({
              action: l,
              location: a
            })
          },
          go(e) {
            l = n.Pop, i = c(i + e), s && s({
              action: l,
              location: d()
            })
          },
          listen: e => (s = e, () => {
            s = null
          })
        }
      }

      function s(e) {
        return void 0 === e && (e = {}), v((function(e, t) {
          let {
            pathname: r,
            search: n,
            hash: a
          } = e.location;
          return h("", {
            pathname: r,
            search: n,
            hash: a
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          return "string" == typeof t ? t : f(t)
        }), null, e)
      }

      function c(e) {
        return void 0 === e && (e = {}), v((function(e, t) {
          let {
            pathname: r = "/",
            search: n = "",
            hash: a = ""
          } = p(e.location.hash.substr(1));
          return h("", {
            pathname: r,
            search: n,
            hash: a
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

      function u(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function d(e) {
        return {
          usr: e.state,
          key: e.key
        }
      }

      function h(e, t, r, n) {
        return void 0 === r && (r = null), o({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? p(t) : t, {
          state: r,
          key: t && t.key || n || Math.random().toString(36).substr(2, 8)
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

      function m(e) {
        let t = "undefined" != typeof window && void 0 !== window.location && "null" !== window.location.origin ? window.location.origin : "unknown://unknown",
          r = "string" == typeof e ? e : f(e);
        return new URL(r, t)
      }

      function v(e, t, r, a) {
        void 0 === a && (a = {});
        let {
          window: l = document.defaultView,
          v5Compat: s = !1
        } = a, c = l.history, u = n.Pop, p = null;

        function v() {
          u = n.Pop, p && p({
            action: u,
            location: g.location
          })
        }
        let g = {
          get action() {
            return u
          },
          get location() {
            return e(l, c)
          },
          listen(e) {
            if (p) throw new Error("A history only accepts one active listener");
            return l.addEventListener(i, v), p = e, () => {
              l.removeEventListener(i, v), p = null
            }
          },
          createHref: e => t(l, e),
          encodeLocation(e) {
            let t = m(f(e));
            return o({}, e, {
              pathname: t.pathname,
              search: t.search,
              hash: t.hash
            })
          },
          push: function(e, t) {
            u = n.Push;
            let a = h(g.location, e, t);
            r && r(a, e);
            let o = d(a),
              i = g.createHref(a);
            try {
              c.pushState(o, "", i)
            } catch (e) {
              l.location.assign(i)
            }
            s && p && p({
              action: u,
              location: g.location
            })
          },
          replace: function(e, t) {
            u = n.Replace;
            let a = h(g.location, e, t);
            r && r(a, e);
            let o = d(a),
              i = g.createHref(a);
            c.replaceState(o, "", i), s && p && p({
              action: u,
              location: g.location
            })
          },
          go: e => c.go(e)
        };
        return g
      }
      var g;

      function y(e, t, r) {
        return void 0 === t && (t = []), void 0 === r && (r = new Set), e.map(((e, n) => {
          let a = [...t, n],
            i = "string" == typeof e.id ? e.id : a.join("-");
          return L(!0 !== e.index || !e.children, "Cannot specify children on an index route"), L(!r.has(i), 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), r.add(i),
            function(e) {
              return !0 === e.index
            }(e) ? o({}, e, {
              id: i
            }) : o({}, e, {
              id: i,
              children: e.children ? y(e.children, a, r) : void 0
            })
        }))
      }

      function w(e, t, r) {
        void 0 === r && (r = "/");
        let n = A(("string" == typeof t ? p(t) : t).pathname || "/", r);
        if (null == n) return null;
        let a = b(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(a);
        let o = null;
        for (let e = 0; null == o && e < a.length; ++e) o = S(a[e], P(n));
        return o
      }

      function b(e, t, r, n) {
        return void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = ""), e.forEach(((e, a) => {
          let o = {
            relativePath: e.path || "",
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e
          };
          o.relativePath.startsWith("/") && (L(o.relativePath.startsWith(n), 'Absolute route path "' + o.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(n.length));
          let i = j([n, o.relativePath]),
            l = r.concat(o);
          e.children && e.children.length > 0 && (L(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), b(e.children, t, l, i)), (null != e.path || e.index) && t.push({
            path: i,
            score: D(i, e.index),
            routesMeta: l
          })
        })), t
      }! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(g || (g = {}));
      const E = /^:\w+$/,
        R = e => "*" === e;

      function D(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(R) && (n += -2), t && (n += 2), r.filter((e => !R(e))).reduce(((e, t) => e + (E.test(t) ? 3 : "" === t ? 1 : 10)), n)
      }

      function S(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, a = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            l = e === r.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = x({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: l
            }, s);
          if (!c) return null;
          Object.assign(n, c.params);
          let u = i.route;
          o.push({
            params: n,
            pathname: j([a, c.pathname]),
            pathnameBase: _(j([a, c.pathnameBase])),
            route: u
          }), "/" !== c.pathnameBase && (a = j([a, c.pathnameBase]))
        }
        return o
      }

      function C(e, t) {
        return void 0 === t && (t = {}), e.replace(/:(\w+)/g, ((e, r) => (L(null != t[r], 'Missing ":' + r + '" param'), t[r]))).replace(/(\/?)\*/, ((e, r, n, a) => null == t["*"] ? "/*" === a ? "/" : "" : "" + r + t["*"]))
      }

      function x(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), M("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let n = [],
            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, ((e, t) => (n.push(t), "([^\\/]+)")));
          return e.endsWith("*") ? (n.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n]
        }(e.path, e.caseSensitive, e.end), a = t.match(r);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: n.reduce(((e, t, r) => {
            if ("*" === t) {
              let e = l[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
              try {
                return decodeURIComponent(e)
              } catch (r) {
                return M(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(l[r] || "", t), e
          }), {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function P(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return M(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function A(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }

      function L(e, t) {
        if (!1 === e || null == e) throw new Error(t)
      }

      function M(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function O(e, t) {
        void 0 === t && (t = "/");
        let {
          pathname: r,
          search: n = "",
          hash: a = ""
        } = "string" == typeof e ? p(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: o,
          search: N(n),
          hash: F(a)
        }
      }

      function U(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function T(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function k(e, t, r, n) {
        let a;
        void 0 === n && (n = !1), "string" == typeof e ? a = p(e) : (a = o({}, e), L(!a.pathname || !a.pathname.includes("?"), U("?", "pathname", "search", a)), L(!a.pathname || !a.pathname.includes("#"), U("#", "pathname", "hash", a)), L(!a.search || !a.search.includes("#"), U("#", "search", "hash", a)));
        let i, l = "" === e || "" === a.pathname,
          s = l ? "/" : a.pathname;
        if (n || null == s) i = r;
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
        let c = O(a, i),
          u = s && "/" !== s && s.endsWith("/"),
          d = (l || "." === s) && r.endsWith("/");
        return c.pathname.endsWith("/") || !u && !d || (c.pathname += "/"), c
      }
      const j = e => e.join("/").replace(/\/\/+/g, "/"),
        _ = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        N = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        F = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        I = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            n = new Headers(r.headers);
          return n.has("Content-Type") || n.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), o({}, r, {
            headers: n
          }))
        };
      class B extends Error {}
      class H {
        constructor(e) {
          let t;
          this.pendingKeys = new Set, this.subscriber = void 0, L(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, r) => t = r)), this.controller = new AbortController;
          let r = () => t(new B("Deferred data aborted"));
          this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", r), this.controller.signal.addEventListener("abort", r), this.data = Object.entries(e).reduce(((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: this.trackPromise(r, n)
            })
          }), {})
        }
        trackPromise(e, t) {
          if (!(t instanceof Promise)) return t;
          this.pendingKeys.add(e);
          let r = Promise.race([t, this.abortPromise]).then((t => this.onSettle(r, e, null, t)), (t => this.onSettle(r, e, t)));
          return r.catch((() => {})), Object.defineProperty(r, "_tracked", {
            get: () => !0
          }), r
        }
        onSettle(e, t, r, n) {
          if (this.controller.signal.aborted && r instanceof B) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
            get: () => r
          }), Promise.reject(r);
          this.pendingKeys.delete(t), this.done && this.unlistenAbortSignal();
          const a = this.subscriber;
          return r ? (Object.defineProperty(e, "_error", {
            get: () => r
          }), a && a(!1), Promise.reject(r)) : (Object.defineProperty(e, "_data", {
            get: () => n
          }), a && a(!1), n)
        }
        subscribe(e) {
          this.subscriber = e
        }
        cancel() {
          this.controller.abort(), this.pendingKeys.forEach(((e, t) => this.pendingKeys.delete(t)));
          let e = this.subscriber;
          e && e(!0)
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
          return 0 === this.pendingKeys.size
        }
        get unwrappedData() {
          return L(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: K(n)
            })
          }), {})
        }
      }

      function K(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }

      function W(e) {
        return new H(e)
      }
      const $ = function(e, t) {
        void 0 === t && (t = 302);
        let r = t;
        "number" == typeof r ? r = {
          status: r
        } : void 0 === r.status && (r.status = 302);
        let n = new Headers(r.headers);
        return n.set("Location", e), new Response(null, o({}, r, {
          headers: n
        }))
      };
      class J {
        constructor(e, t, r) {
          this.status = e, this.statusText = t || "", this.data = r
        }
      }

      function z(e) {
        return e instanceof J
      }
      const Y = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        q = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        V = !("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement);

      function G(e) {
        L(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
        let t = y(e.routes),
          r = null,
          a = new Set,
          i = null,
          l = null,
          s = null,
          c = !1,
          u = w(t, e.history.location, e.basename),
          d = null;
        if (null == u) {
          let {
            matches: e,
            route: r,
            error: n
          } = ce(t);
          u = e, d = {
            [r.id]: n
          }
        }
        let f, p, m = !u.some((e => e.route.loader)) || null != e.hydrationData,
          v = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: u,
            initialized: m,
            navigation: Y,
            restoreScrollPosition: null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || d,
            fetchers: new Map
          },
          g = n.Pop,
          b = !1,
          E = !1,
          R = !1,
          D = [],
          S = [],
          C = new Map,
          x = 0,
          P = -1,
          A = new Map,
          M = new Set,
          O = new Map,
          U = new Map;

        function T(e) {
          v = o({}, v, e), a.forEach((e => e(v)))
        }

        function k(t, r) {
          var a;
          T(o({}, null != v.actionData && null != v.navigation.formMethod && "loading" === v.navigation.state && (null == (a = v.navigation.formAction) ? void 0 : a.split("?")[0]) === t.pathname ? {} : {
            actionData: null
          }, r, r.loaderData ? {
            loaderData: le(v.loaderData, r.loaderData, r.matches || [])
          } : {}, {
            historyAction: g,
            location: t,
            initialized: !0,
            navigation: Y,
            revalidation: "idle",
            restoreScrollPosition: !v.navigation.formData && G(t, r.matches || v.matches),
            preventScrollReset: b
          })), E || g === n.Pop || (g === n.Push ? e.history.push(t, t.state) : g === n.Replace && e.history.replace(t, t.state)), g = n.Pop, b = !1, E = !1, R = !1, D = [], S = []
        }
        async function j(r, a, c) {
          p && p.abort(), p = null, g = r, E = !0 === (c && c.startUninterruptedRevalidation),
            function(e, t) {
              if (i && l && s) {
                let r = t.map((e => we(e, v.loaderData))),
                  n = l(e, r) || e.key;
                i[n] = s()
              }
            }(v.location, v.matches), b = !0 === (c && c.preventScrollReset);
          let u = c && c.overrideNavigation,
            d = w(t, a, e.basename);
          if (!d) {
            let {
              matches: e,
              route: r,
              error: n
            } = ce(t);
            return z(), void k(a, {
              matches: e,
              loaderData: {},
              errors: {
                [r.id]: n
              }
            })
          }
          if (y = a, (m = v.location).pathname === y.pathname && m.search === y.search && m.hash !== y.hash) return void k(a, {
            matches: d
          });
          var m, y;
          p = new AbortController;
          let A, j, _ = ae(a, p.signal, c && c.submission);
          if (c && c.pendingError) j = {
            [se(d).route.id]: c.pendingError
          };
          else if (c && c.submission) {
            let e = await async function(e, t, r, a, i) {
              let l;
              I(), T({
                navigation: o({
                  state: "submitting",
                  location: t
                }, r)
              });
              let s = be(a, t);
              if (s.route.action) {
                if (l = await ne("action", e, s, a, f.basename), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else l = ue(t);
              if (me(l)) {
                let e = o({
                  state: "loading",
                  location: h(v.location, l.location)
                }, r);
                return await N(l, e, i && i.replace), {
                  shortCircuited: !0
                }
              }
              if (pe(l)) {
                let e = se(a, s.route.id);
                return !0 !== (i && i.replace) && (g = n.Push), {
                  pendingActionError: {
                    [e.route.id]: l.error
                  }
                }
              }
              if (fe(l)) throw new Error("defer() is not supported in actions");
              return {
                pendingActionData: {
                  [s.route.id]: l.data
                }
              }
            }(_, a, c.submission, d, {
              replace: c.replace
            });
            if (e.shortCircuited) return;
            A = e.pendingActionData, j = e.pendingActionError, u = o({
              state: "loading",
              location: a
            }, c.submission)
          }
          let {
            shortCircuited: B,
            loaderData: H,
            errors: K
          } = await async function(e, t, r, n, a, i, l, s) {
            let c = n;
            c || (c = {
              state: "loading",
              location: t,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            });
            let [u, d] = ee(v, r, a, t, R, D, S, l, s, O);
            if (z((e => !(r && r.some((t => t.route.id === e))) || u && u.some((t => t.route.id === e)))), 0 === u.length && 0 === d.length) return k(t, {
              matches: r,
              loaderData: le(v.loaderData, {}, r),
              errors: s || null,
              actionData: l || null
            }), {
              shortCircuited: !0
            };
            E || (d.forEach((e => {
              let [t] = e, r = v.fetchers.get(t), n = {
                state: "loading",
                data: r && r.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
              };
              v.fetchers.set(t, n)
            })), T(o({
              navigation: c,
              actionData: l || v.actionData || null
            }, d.length > 0 ? {
              fetchers: new Map(v.fetchers)
            } : {}))), P = ++x, d.forEach((e => {
              let [t] = e;
              return C.set(t, p)
            }));
            let {
              results: h,
              loaderResults: f,
              fetcherResults: m
            } = await F(v.matches, r, u, d, e);
            if (e.signal.aborted) return {
              shortCircuited: !0
            };
            d.forEach((e => {
              let [t] = e;
              return C.delete(t)
            }));
            let g = de(h);
            if (g) {
              let e = Z(v, g);
              return await N(g, e, i), {
                shortCircuited: !0
              }
            }
            let {
              loaderData: y,
              errors: w
            } = ie(v, r, u, f, s, d, m, U);
            return U.forEach(((e, t) => {
                e.subscribe((r => {
                  (r || e.done) && U.delete(t)
                }))
              })),
              function() {
                let e = [];
                for (let t of M) {
                  let r = v.fetchers.get(t);
                  L(r, "Expected fetcher: " + t), "loading" === r.state && (M.delete(t), e.push(t))
                }
                W(e)
              }(), o({
                loaderData: y,
                errors: w
              }, $(P) || d.length > 0 ? {
                fetchers: new Map(v.fetchers)
              } : {})
          }(_, a, d, u, c && c.submission, c && c.replace, A, j);
          B || (p = null, k(a, {
            matches: d,
            loaderData: H,
            errors: K
          }))
        }

        function _(e) {
          return v.fetchers.get(e) || q
        }
        async function N(e, t, r) {
          e.revalidate && (R = !0), L(t.location, "Expected a location on the redirect navigation"), p = null;
          let a = !0 === r ? n.Replace : n.Push;
          await j(a, t.location, {
            overrideNavigation: t
          })
        }
        async function F(e, t, r, n, a) {
          let o = await Promise.all([...r.map((e => ne("loader", a, e, t, f.basename))), ...n.map((e => {
              let [, t, r, n] = e;
              return ne("loader", ae(t, a.signal), r, n, f.basename)
            }))]),
            i = o.slice(0, r.length),
            l = o.slice(r.length);
          return await Promise.all([ve(e, r, i, a.signal, !1, v.loaderData), ve(e, n.map((e => {
            let [, , t] = e;
            return t
          })), l, a.signal, !0)]), {
            results: o,
            loaderResults: i,
            fetcherResults: l
          }
        }

        function I() {
          R = !0, D.push(...z()), O.forEach(((e, t) => {
            C.has(t) && (S.push(t), K(t))
          }))
        }

        function B(e, t, r) {
          let n = se(v.matches, t);
          H(e), T({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(v.fetchers)
          })
        }

        function H(e) {
          C.has(e) && K(e), O.delete(e), A.delete(e), M.delete(e), v.fetchers.delete(e)
        }

        function K(e) {
          let t = C.get(e);
          L(t, "Expected fetch controller: " + e), t.abort(), C.delete(e)
        }

        function W(e) {
          for (let t of e) {
            let e = {
              state: "idle",
              data: _(t).data,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            };
            v.fetchers.set(t, e)
          }
        }

        function $(e) {
          let t = [];
          for (let [r, n] of A)
            if (n < e) {
              let e = v.fetchers.get(r);
              L(e, "Expected fetcher: " + r), "loading" === e.state && (K(r), A.delete(r), t.push(r))
            } return W(t), t.length > 0
        }

        function z(e) {
          let t = [];
          return U.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), U.delete(n))
          })), t
        }

        function G(e, t) {
          if (i && l && s) {
            let r = t.map((e => we(e, v.loaderData))),
              n = l(e, r) || e.key,
              a = i[n];
            if ("number" == typeof a) return a
          }
          return null
        }
        return f = {
          get basename() {
            return e.basename
          },
          get state() {
            return v
          },
          get routes() {
            return t
          },
          initialize: function() {
            return r = e.history.listen((e => {
              let {
                action: t,
                location: r
              } = e;
              return j(t, r)
            })), v.initialized || j(n.Pop, v.location), f
          },
          subscribe: function(e) {
            return a.add(e), () => a.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (i = e, s = t, l = r || (e => e.key), !c && v.navigation === Y) {
              c = !0;
              let e = G(v.location, v.matches);
              null != e && T({
                restoreScrollPosition: e
              })
            }
            return () => {
              i = null, s = null, l = null
            }
          },
          navigate: async function(t, r) {
            if ("number" == typeof t) return void e.history.go(t);
            let {
              path: a,
              submission: o,
              error: i
            } = Q(t, r), l = h(v.location, a, r && r.state);
            l = e.history.encodeLocation(l);
            let s = !0 === (r && r.replace) || null != o ? n.Replace : n.Push,
              c = r && "preventScrollReset" in r ? !0 === r.preventScrollReset : void 0;
            return await j(s, l, {
              submission: o,
              pendingError: i,
              preventScrollReset: c,
              replace: r && r.replace
            })
          },
          fetch: function(r, n, a, i) {
            if (V) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            C.has(r) && K(r);
            let l = w(t, a, e.basename);
            if (!l) return void B(r, n, new J(404, "Not Found", null));
            let {
              path: s,
              submission: c
            } = Q(a, i, !0), u = be(l, s);
            c ? async function(r, n, a, i, l, s) {
              if (I(), O.delete(r), !i.route.action) {
                let {
                  error: e
                } = ue(a);
                return void B(r, n, e)
              }
              let c = v.fetchers.get(r),
                u = o({
                  state: "submitting"
                }, s, {
                  data: c && c.data
                });
              v.fetchers.set(r, u), T({
                fetchers: new Map(v.fetchers)
              });
              let d = new AbortController,
                m = ae(a, d.signal, s);
              C.set(r, d);
              let y = await ne("action", m, i, l, f.basename);
              if (m.signal.aborted) return void(C.get(r) === d && C.delete(r));
              if (me(y)) {
                C.delete(r), M.add(r);
                let e = o({
                  state: "loading"
                }, s, {
                  data: void 0
                });
                v.fetchers.set(r, e), T({
                  fetchers: new Map(v.fetchers)
                });
                let t = o({
                  state: "loading",
                  location: h(v.location, y.location)
                }, s);
                return void await N(y, t)
              }
              if (pe(y)) return void B(r, n, y.error);
              fe(y) && L(!1, "defer() is not supported in actions");
              let b = v.navigation.location || v.location,
                E = ae(b, d.signal),
                j = "idle" !== v.navigation.state ? w(t, v.navigation.location, e.basename) : v.matches;
              L(j, "Didn't find any matches after fetcher action");
              let _ = ++x;
              A.set(r, _);
              let H = o({
                state: "loading",
                data: y.data
              }, s);
              v.fetchers.set(r, H);
              let [K, W] = ee(v, j, s, b, R, D, S, {
                [i.route.id]: y.data
              }, void 0, O);
              W.filter((e => {
                let [t] = e;
                return t !== r
              })).forEach((e => {
                let [t] = e, r = v.fetchers.get(t), n = {
                  state: "loading",
                  data: r && r.data,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0
                };
                v.fetchers.set(t, n), C.set(t, d)
              })), T({
                fetchers: new Map(v.fetchers)
              });
              let {
                results: J,
                loaderResults: z,
                fetcherResults: Y
              } = await F(v.matches, j, K, W, E);
              if (d.signal.aborted) return;
              A.delete(r), C.delete(r), W.forEach((e => {
                let [t] = e;
                return C.delete(t)
              }));
              let q = de(J);
              if (q) {
                let e = Z(v, q);
                return void await N(q, e)
              }
              let {
                loaderData: V,
                errors: G
              } = ie(v, v.matches, K, z, void 0, W, Y, U), X = {
                state: "idle",
                data: y.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
              };
              v.fetchers.set(r, X);
              let Q = $(_);
              "loading" === v.navigation.state && _ > P ? (L(g, "Expected pending action"), p && p.abort(), k(v.navigation.location, {
                matches: j,
                loaderData: V,
                errors: G,
                fetchers: new Map(v.fetchers)
              })) : (T(o({
                errors: G,
                loaderData: le(v.loaderData, V, j)
              }, Q ? {
                fetchers: new Map(v.fetchers)
              } : {})), R = !1)
            }(r, n, s, u, l, c): (O.set(r, [s, u, l]), async function(e, t, r, n, a) {
              let o = v.fetchers.get(e),
                i = {
                  state: "loading",
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  data: o && o.data
                };
              v.fetchers.set(e, i), T({
                fetchers: new Map(v.fetchers)
              });
              let l = new AbortController,
                s = ae(r, l.signal);
              C.set(e, l);
              let c = await ne("loader", s, n, a, f.basename);
              if (fe(c) && (c = await ge(c, s.signal, !0) || c), C.get(e) === l && C.delete(e), s.signal.aborted) return;
              if (me(c)) {
                let e = Z(v, c);
                return void await N(c, e)
              }
              if (pe(c)) {
                let r = se(v.matches, t);
                return v.fetchers.delete(e), void T({
                  fetchers: new Map(v.fetchers),
                  errors: {
                    [r.route.id]: c.error
                  }
                })
              }
              L(!fe(c), "Unhandled fetcher deferred data");
              let u = {
                state: "idle",
                data: c.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
              };
              v.fetchers.set(e, u), T({
                fetchers: new Map(v.fetchers)
              })
            }(r, n, s, u, l))
          },
          revalidate: function() {
            I(), T({
              revalidation: "loading"
            }), "submitting" !== v.navigation.state && ("idle" !== v.navigation.state ? j(g || v.historyAction, v.navigation.location, {
              overrideNavigation: v.navigation
            }) : j(v.historyAction, v.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          getFetcher: _,
          deleteFetcher: H,
          dispose: function() {
            r && r(), a.clear(), p && p.abort(), v.fetchers.forEach(((e, t) => H(t)))
          },
          _internalFetchControllers: C,
          _internalActiveDeferreds: U
        }, f
      }
      const X = new Set(["POST", "PUT", "PATCH", "DELETE"]);

      function Q(e, t, r) {
        void 0 === r && (r = !1);
        let n = "string" == typeof e ? e : f(e);
        if (!t || !("formMethod" in t) && !("formData" in t)) return {
          path: n
        };
        if (null != t.formMethod && "get" !== t.formMethod) return {
          path: n,
          submission: {
            formMethod: t.formMethod,
            formAction: he(n),
            formEncType: t && t.formEncType || "application/x-www-form-urlencoded",
            formData: t.formData
          }
        };
        if (!t.formData) return {
          path: n
        };
        let a = p(n);
        try {
          let e = oe(t.formData);
          r && a.search && ye(a.search) && e.append("index", ""), a.search = "?" + e
        } catch (e) {
          return {
            path: n,
            error: new J(400, "Bad Request", "Cannot submit binary form data using GET")
          }
        }
        return {
          path: f(a)
        }
      }

      function Z(e, t) {
        let {
          formMethod: r,
          formAction: n,
          formEncType: a,
          formData: o
        } = e.navigation;
        return {
          state: "loading",
          location: h(e.location, t.location),
          formMethod: r || void 0,
          formAction: n || void 0,
          formEncType: a || void 0,
          formData: o || void 0
        }
      }

      function ee(e, t, r, n, a, o, i, l, s, c) {
        let u = s ? Object.values(s)[0] : l ? Object.values(l)[0] : null,
          d = function(e, t) {
            let r = e;
            if (t) {
              let n = e.findIndex((e => e.route.id === t));
              n >= 0 && (r = e.slice(0, n))
            }
            return r
          }(t, s ? Object.keys(s)[0] : void 0).filter(((t, i) => null != t.route.loader && (function(e, t, r) {
            let n = !t || r.route.id !== t.route.id,
              a = void 0 === e[r.route.id];
            return n || a
          }(e.loaderData, e.matches[i], t) || o.some((e => e === t.route.id)) || re(e.location, e.matches[i], r, n, t, a, u)))),
          h = [];
        return c && c.forEach(((e, t) => {
          let [n, o, l] = e;
          (i.includes(t) || a && re(n, o, r, n, o, a, u)) && h.push([t, n, o, l])
        })), [d, h]
      }

      function te(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function re(e, t, r, n, a, i, l) {
        let s = m(e),
          c = t.params,
          u = m(n),
          d = a.params,
          h = te(t, a) || s.toString() === u.toString() || s.search !== u.search || i;
        if (a.route.shouldRevalidate) {
          let e = a.route.shouldRevalidate(o({
            currentUrl: s,
            currentParams: c,
            nextUrl: u,
            nextParams: d
          }, r, {
            actionResult: l,
            defaultShouldRevalidate: h
          }));
          if ("boolean" == typeof e) return e
        }
        return h
      }
      async function ne(e, t, r, n, a, o, i) {
        let l, s, c;
        void 0 === o && (o = !1), void 0 === i && (i = !1);
        let u = new Promise(((e, t) => c = t)),
          d = () => c();
        t.signal.addEventListener("abort", d);
        try {
          let n = r.route[e];
          L(n, "Could not find the " + e + ' to run on the "' + r.route.id + '" route'), s = await Promise.race([n({
            request: t,
            params: r.params
          }), u])
        } catch (e) {
          l = g.error, s = e
        } finally {
          t.signal.removeEventListener("abort", d)
        }
        if (s instanceof Response) {
          let e, c = s.status;
          if (c >= 300 && c <= 399) {
            let e = s.headers.get("Location");
            L(e, "Redirects returned/thrown from loaders/actions must have a Location header");
            let i = k(e, T(n.slice(0, n.indexOf(r) + 1)).map((e => e.pathnameBase)), m(t.url).pathname);
            if (L(f(i), "Unable to resolve redirect location: " + s.headers.get("Location")), a) {
              let e = i.pathname;
              i.pathname = "/" === e ? a : j([a, e])
            }
            if (e = f(i), o) throw s.headers.set("Location", e), s;
            return {
              type: g.redirect,
              status: c,
              location: e,
              revalidate: null !== s.headers.get("X-Remix-Revalidate")
            }
          }
          if (i) throw {
            type: l || g.data,
            response: s
          };
          let u = s.headers.get("Content-Type");
          return e = u && u.startsWith("application/json") ? await s.json() : await s.text(), l === g.error ? {
            type: l,
            error: new J(c, s.statusText, e),
            headers: s.headers
          } : {
            type: g.data,
            data: e,
            statusCode: s.status,
            headers: s.headers
          }
        }
        return l === g.error ? {
          type: l,
          error: s
        } : s instanceof H ? {
          type: g.deferred,
          deferredData: s
        } : {
          type: g.data,
          data: s
        }
      }

      function ae(e, t, r) {
        let n = m(he(e)).toString(),
          a = {
            signal: t
          };
        if (r) {
          let {
            formMethod: e,
            formEncType: t,
            formData: n
          } = r;
          a.method = e.toUpperCase(), a.body = "application/x-www-form-urlencoded" === t ? oe(n) : n
        }
        return new Request(n, a)
      }

      function oe(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) L("string" == typeof n, 'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'), t.append(r, n);
        return t
      }

      function ie(e, t, r, n, a, i, l, s) {
        let {
          loaderData: c,
          errors: u
        } = function(e, t, r, n, a) {
          let o, i = {},
            l = null,
            s = !1,
            c = {};
          return r.forEach(((r, u) => {
            let d = t[u].route.id;
            if (L(!me(r), "Cannot handle redirect results in processLoaderData"), pe(r)) {
              let t = se(e, d),
                a = r.error;
              n && (a = Object.values(n)[0], n = void 0), l = Object.assign(l || {}, {
                [t.route.id]: a
              }), s || (s = !0, o = z(r.error) ? r.error.status : 500), r.headers && (c[d] = r.headers)
            } else fe(r) ? (a && a.set(d, r.deferredData), i[d] = r.deferredData.data) : (i[d] = r.data, null == r.statusCode || 200 === r.statusCode || s || (o = r.statusCode), r.headers && (c[d] = r.headers))
          })), n && (l = n), {
            loaderData: i,
            errors: l,
            statusCode: o || 200,
            loaderHeaders: c
          }
        }(t, r, n, a, s);
        for (let t = 0; t < i.length; t++) {
          let [r, , n] = i[t];
          L(void 0 !== l && void 0 !== l[t], "Did not find corresponding fetcher result");
          let a = l[t];
          if (pe(a)) {
            let t = se(e.matches, n.route.id);
            u && u[t.route.id] || (u = o({}, u, {
              [t.route.id]: a.error
            })), e.fetchers.delete(r)
          } else {
            if (me(a)) throw new Error("Unhandled fetcher revalidation redirect");
            if (fe(a)) throw new Error("Unhandled fetcher deferred data"); {
              let t = {
                state: "idle",
                data: a.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
              };
              e.fetchers.set(r, t)
            }
          }
        }
        return {
          loaderData: c,
          errors: u
        }
      }

      function le(e, t, r) {
        let n = o({}, t);
        return r.forEach((r => {
          let a = r.route.id;
          void 0 === t[a] && void 0 !== e[a] && (n[a] = e[a])
        })), n
      }

      function se(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function ce(e) {
        return function(e, t, r) {
          let n = e.find((e => e.index || !e.path || "/" === e.path)) || {
            id: "__shim-" + t + "-route__"
          };
          return {
            matches: [{
              params: {},
              pathname: "",
              pathnameBase: "",
              route: n
            }],
            route: n,
            error: new J(t, r, null)
          }
        }(e, 404, "Not Found")
      }

      function ue(e) {
        let t = "string" == typeof e ? e : f(e);
        return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for [" + t + "]"), {
          type: g.error,
          error: new J(405, "Method Not Allowed", "")
        }
      }

      function de(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (me(r)) return r
        }
      }

      function he(e) {
        return f(o({}, "string" == typeof e ? p(e) : e, {
          hash: ""
        }))
      }

      function fe(e) {
        return e.type === g.deferred
      }

      function pe(e) {
        return e.type === g.error
      }

      function me(e) {
        return (e && e.type) === g.redirect
      }
      async function ve(e, t, r, n, a, o) {
        for (let i = 0; i < r.length; i++) {
          let l = r[i],
            s = t[i],
            c = e.find((e => e.route.id === s.route.id)),
            u = null != c && !te(c, s) && void 0 !== (o && o[s.route.id]);
          fe(l) && (a || u) && await ge(l, n, a).then((e => {
            e && (r[i] = e || r[i])
          }))
        }
      }
      async function ge(e, t, r) {
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

      function ye(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function we(e, t) {
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

      function be(e, t) {
        let r = "string" == typeof t ? p(t).search : t.search;
        if (e[e.length - 1].route.index && ye(r || "")) return e[e.length - 1];
        let n = T(e);
        return n[n.length - 1]
      }

      function Ee() {
        return Ee = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Ee.apply(this, arguments)
      }
      new Set(["GET", "HEAD", ...X]);
      const Re = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        {
          useState: De,
          useEffect: Se,
          useLayoutEffect: Ce,
          useDebugValue: xe
        } = a;

      function Pe(e) {
        const t = e.getSnapshot,
          r = e.value;
        try {
          const e = t();
          return !Re(r, e)
        } catch (e) {
          return !0
        }
      }
      const Ae = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t, r) {
          return t()
        } : function(e, t, r) {
          const n = t(),
            [{
              inst: a
            }, o] = De({
              inst: {
                value: n,
                getSnapshot: t
              }
            });
          return Ce((() => {
            a.value = n, a.getSnapshot = t, Pe(a) && o({
              inst: a
            })
          }), [e, n, t]), Se((() => (Pe(a) && o({
            inst: a
          }), e((() => {
            Pe(a) && o({
              inst: a
            })
          })))), [e]), xe(n), n
        },
        Le = "useSyncExternalStore" in a ? a.useSyncExternalStore : Ae,
        Me = a.createContext(null),
        Oe = a.createContext(null),
        Ue = a.createContext(null),
        Te = a.createContext(null),
        ke = a.createContext(null),
        je = a.createContext(null),
        _e = a.createContext({
          outlet: null,
          matches: []
        }),
        Ne = a.createContext(null);

      function Fe(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        Ie() || L(!1);
        let {
          basename: n,
          navigator: o
        } = a.useContext(ke), {
          hash: i,
          pathname: l,
          search: s
        } = qe(e, {
          relative: r
        }), c = l;
        return "/" !== n && (c = "/" === l ? n : j([n, l])), o.createHref({
          pathname: c,
          search: s,
          hash: i
        })
      }

      function Ie() {
        return null != a.useContext(je)
      }

      function Be() {
        return Ie() || L(!1), a.useContext(je).location
      }

      function He() {
        return a.useContext(je).navigationType
      }

      function Ke(e) {
        Ie() || L(!1);
        let {
          pathname: t
        } = Be();
        return a.useMemo((() => x(e, t)), [t, e])
      }

      function We() {
        Ie() || L(!1);
        let {
          basename: e,
          navigator: t
        } = a.useContext(ke), {
          matches: r
        } = a.useContext(_e), {
          pathname: n
        } = Be(), o = JSON.stringify(T(r).map((e => e.pathnameBase))), i = a.useRef(!1);
        return a.useEffect((() => {
          i.current = !0
        })), a.useCallback((function(r, a) {
          if (void 0 === a && (a = {}), !i.current) return;
          if ("number" == typeof r) return void t.go(r);
          let l = k(r, JSON.parse(o), n, "path" === a.relative);
          "/" !== e && (l.pathname = "/" === l.pathname ? e : j([e, l.pathname])), (a.replace ? t.replace : t.push)(l, a.state, a)
        }), [e, t, o, n])
      }
      const $e = a.createContext(null);

      function Je() {
        return a.useContext($e)
      }

      function ze(e) {
        let t = a.useContext(_e).outlet;
        return t ? a.createElement($e.Provider, {
          value: e
        }, t) : t
      }

      function Ye() {
        let {
          matches: e
        } = a.useContext(_e), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function qe(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: n
        } = a.useContext(_e), {
          pathname: o
        } = Be(), i = JSON.stringify(T(n).map((e => e.pathnameBase)));
        return a.useMemo((() => k(e, JSON.parse(i), o, "path" === r)), [e, i, o, r])
      }

      function Ve(e, t) {
        Ie() || L(!1);
        let r = a.useContext(Ue),
          {
            matches: o
          } = a.useContext(_e),
          i = o[o.length - 1],
          l = i ? i.params : {},
          s = (i && i.pathname, i ? i.pathnameBase : "/");
        i && i.route;
        let c, u = Be();
        if (t) {
          var d;
          let e = "string" == typeof t ? p(t) : t;
          "/" === s || (null == (d = e.pathname) ? void 0 : d.startsWith(s)) || L(!1), c = e
        } else c = u;
        let h = c.pathname || "/",
          f = w(e, {
            pathname: "/" === s ? h : h.slice(s.length) || "/"
          }),
          m = Ze(f && f.map((e => Object.assign({}, e, {
            params: Object.assign({}, l, e.params),
            pathname: j([s, e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? s : j([s, e.pathnameBase])
          }))), o, r || void 0);
        return t && m ? a.createElement(je.Provider, {
          value: {
            location: Ee({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, c),
            navigationType: n.Pop
          }
        }, m) : m
      }

      function Ge() {
        let e = ut(),
          t = z(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          n = "rgba(200,200,200, 0.5)",
          o = {
            padding: "0.5rem",
            backgroundColor: n
          },
          i = {
            padding: "2px 4px",
            backgroundColor: n
          };
        return a.createElement(a.Fragment, null, a.createElement("h2", null, "Unhandled Thrown Error!"), a.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, t), r ? a.createElement("pre", {
          style: o
        }, r) : null, a.createElement("p", null, "💿 Hey developer 👋"), a.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", a.createElement("code", {
          style: i
        }, "errorElement"), " props on ", a.createElement("code", {
          style: i
        }, "<Route>")))
      }
      class Xe extends a.Component {
        constructor(e) {
          super(e), this.state = {
            location: e.location,
            error: e.error
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: e
          }
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ? {
            error: e.error,
            location: e.location
          } : {
            error: e.error || t.error,
            location: t.location
          }
        }
        componentDidCatch(e, t) {
          console.error("React Router caught the following error during render", e, t)
        }
        render() {
          return this.state.error ? a.createElement(Ne.Provider, {
            value: this.state.error,
            children: this.props.component
          }) : this.props.children
        }
      }

      function Qe(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, o = a.useContext(Me);
        return o && r.route.errorElement && (o._deepestRenderedBoundaryId = r.route.id), a.createElement(_e.Provider, {
          value: t
        }, n)
      }

      function Ze(e, t, r) {
        if (void 0 === t && (t = []), null == e) {
          if (null == r || !r.errors) return null;
          e = r.matches
        }
        let n = e,
          o = null == r ? void 0 : r.errors;
        if (null != o) {
          let e = n.findIndex((e => e.route.id && (null == o ? void 0 : o[e.route.id])));
          e >= 0 || L(!1), n = n.slice(0, Math.min(n.length, e + 1))
        }
        return n.reduceRight(((e, i, l) => {
          let s = i.route.id ? null == o ? void 0 : o[i.route.id] : null,
            c = r ? i.route.errorElement || a.createElement(Ge, null) : null,
            u = () => a.createElement(Qe, {
              match: i,
              routeContext: {
                outlet: e,
                matches: t.concat(n.slice(0, l + 1))
              }
            }, s ? c : void 0 !== i.route.element ? i.route.element : e);
          return r && (i.route.errorElement || 0 === l) ? a.createElement(Xe, {
            location: r.location,
            component: c,
            error: s,
            children: u()
          }) : u()
        }), null)
      }
      var et, tt, rt;

      function nt(e) {
        let t = a.useContext(Ue);
        return t || L(!1), t
      }

      function at() {
        return nt(tt.UseNavigation).navigation
      }

      function ot() {
        let e = function(e) {
            let t = a.useContext(Oe);
            return t || L(!1), t
          }(et.UseRevalidator),
          t = nt(tt.UseRevalidator);
        return {
          revalidate: e.router.revalidate,
          state: t.revalidation
        }
      }

      function it() {
        let {
          matches: e,
          loaderData: t
        } = nt(tt.UseMatches);
        return a.useMemo((() => e.map((e => {
          let {
            pathname: r,
            params: n
          } = e;
          return {
            id: e.route.id,
            pathname: r,
            params: n,
            data: t[e.route.id],
            handle: e.route.handle
          }
        }))), [e, t])
      }

      function lt() {
        let e = nt(tt.UseLoaderData),
          t = a.useContext(_e);
        t || L(!1);
        let r = t.matches[t.matches.length - 1];
        return r.route.id || L(!1), e.loaderData[r.route.id]
      }

      function st(e) {
        return nt(tt.UseRouteLoaderData).loaderData[e]
      }

      function ct() {
        let e = nt(tt.UseActionData);
        return a.useContext(_e) || L(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function ut() {
        var e;
        let t = a.useContext(Ne),
          r = nt(tt.UseRouteError),
          n = a.useContext(_e),
          o = n.matches[n.matches.length - 1];
        return t || (n || L(!1), o.route.id || L(!1), null == (e = r.errors) ? void 0 : e[o.route.id])
      }

      function dt() {
        let e = a.useContext(Te);
        return null == e ? void 0 : e._data
      }

      function ht() {
        let e = a.useContext(Te);
        return null == e ? void 0 : e._error
      }

      function ft(e) {
        let {
          fallbackElement: t,
          router: r
        } = e, n = Le(r.subscribe, (() => r.state), (() => r.state)), o = a.useMemo((() => ({
          createHref: r.createHref,
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
        })), [r]), i = r.basename || "/";
        return a.createElement(Oe.Provider, {
          value: {
            router: r,
            navigator: o,
            static: !1,
            basename: i
          }
        }, a.createElement(Ue.Provider, {
          value: n
        }, a.createElement(yt, {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: o
        }, r.state.initialized ? a.createElement(wt, null) : t)))
      }

      function pt(e) {
        let {
          basename: t,
          children: r,
          initialEntries: n,
          initialIndex: o
        } = e, i = a.useRef();
        null == i.current && (i.current = l({
          initialEntries: n,
          initialIndex: o,
          v5Compat: !0
        }));
        let s = i.current,
          [c, u] = a.useState({
            action: s.action,
            location: s.location
          });
        return a.useLayoutEffect((() => s.listen(u)), [s]), a.createElement(yt, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: s
        })
      }

      function mt(e) {
        let {
          to: t,
          replace: r,
          state: n,
          relative: o
        } = e;
        Ie() || L(!1);
        let i = a.useContext(Ue),
          l = We();
        return a.useEffect((() => {
          i && "idle" !== i.navigation.state || l(t, {
            replace: r,
            state: n,
            relative: o
          })
        })), null
      }

      function vt(e) {
        return ze(e.context)
      }

      function gt(e) {
        L(!1)
      }

      function yt(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = n.Pop,
          navigator: l,
          static: s = !1
        } = e;
        Ie() && L(!1);
        let c = t.replace(/^\/*/, "/"),
          u = a.useMemo((() => ({
            basename: c,
            navigator: l,
            static: s
          })), [c, l, s]);
        "string" == typeof o && (o = p(o));
        let {
          pathname: d = "/",
          search: h = "",
          hash: f = "",
          state: m = null,
          key: v = "default"
        } = o, g = a.useMemo((() => {
          let e = A(d, c);
          return null == e ? null : {
            pathname: e,
            search: h,
            hash: f,
            state: m,
            key: v
          }
        }), [c, d, h, f, m, v]);
        return null == g ? null : a.createElement(ke.Provider, {
          value: u
        }, a.createElement(je.Provider, {
          children: r,
          value: {
            location: g,
            navigationType: i
          }
        }))
      }

      function wt(e) {
        let {
          children: t,
          location: r
        } = e, n = a.useContext(Oe);
        return Ve(n && !t ? n.router.routes : St(t), r)
      }

      function bt(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return a.createElement(Rt, {
          resolve: n,
          errorElement: r
        }, a.createElement(Dt, null, t))
      }! function(e) {
        e.UseRevalidator = "useRevalidator"
      }(et || (et = {})),
      function(e) {
        e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
      }(tt || (tt = {})),
      function(e) {
        e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
      }(rt || (rt = {}));
      const Et = new Promise((() => {}));
      class Rt extends a.Component {
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
          } = this.props, n = null, o = rt.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              o = rt.error;
              let e = this.state.error;
              n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, o = void 0 !== n._error ? rt.error : void 0 !== n._data ? rt.success : rt.pending) : (o = rt.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else o = rt.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (o === rt.error && n._error instanceof B) throw Et;
          if (o === rt.error && !t) throw n._error;
          if (o === rt.error) return a.createElement(Te.Provider, {
            value: n,
            children: t
          });
          if (o === rt.success) return a.createElement(Te.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function Dt(e) {
        let {
          children: t
        } = e, r = dt();
        return "function" == typeof t ? t(r) : a.createElement(a.Fragment, null, t)
      }

      function St(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return a.Children.forEach(e, ((e, n) => {
          if (!a.isValidElement(e)) return;
          if (e.type === a.Fragment) return void r.push.apply(r, St(e.props.children, t));
          e.type !== gt && L(!1), e.props.index && e.props.children && L(!1);
          let o = [...t, n],
            i = {
              id: e.props.id || o.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              hasErrorBoundary: null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle
            };
          e.props.children && (i.children = St(e.props.children, o)), r.push(i)
        })), r
      }

      function Ct(e) {
        return Ze(e)
      }

      function xt(e) {
        return e.map((e => {
          let t = Ee({}, e);
          return null == t.hasErrorBoundary && (t.hasErrorBoundary = null != t.errorElement), t.children && (t.children = xt(t.children)), t
        }))
      }

      function Pt(e, t) {
        return G({
          basename: null == t ? void 0 : t.basename,
          history: l({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: xt(e)
        }).initialize()
      }

      function At() {
        return At = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, At.apply(this, arguments)
      }

      function Lt(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }
      const Mt = "get",
        Ot = "application/x-www-form-urlencoded";

      function Ut(e) {
        return null != e && "string" == typeof e.tagName
      }

      function Tt(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
            [r, n]
          ])
        }), []))
      }
      const kt = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
        jt = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
        _t = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative"];

      function Nt(e, t) {
        var r;
        return G({
          basename: null == t ? void 0 : t.basename,
          history: s({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || (null == (r = window) ? void 0 : r.__staticRouterHydrationData),
          routes: xt(e)
        }).initialize()
      }

      function Ft(e, t) {
        var r;
        return G({
          basename: null == t ? void 0 : t.basename,
          history: c({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || (null == (r = window) ? void 0 : r.__staticRouterHydrationData),
          routes: xt(e)
        }).initialize()
      }

      function It(e) {
        let {
          basename: t,
          children: r,
          window: n
        } = e, o = a.useRef();
        null == o.current && (o.current = s({
          window: n,
          v5Compat: !0
        }));
        let i = o.current,
          [l, c] = a.useState({
            action: i.action,
            location: i.location
          });
        return a.useLayoutEffect((() => i.listen(c)), [i]), a.createElement(yt, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: i
        })
      }

      function Bt(e) {
        let {
          basename: t,
          children: r,
          window: n
        } = e, o = a.useRef();
        null == o.current && (o.current = c({
          window: n,
          v5Compat: !0
        }));
        let i = o.current,
          [l, s] = a.useState({
            action: i.action,
            location: i.location
          });
        return a.useLayoutEffect((() => i.listen(s)), [i]), a.createElement(yt, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: i
        })
      }

      function Ht(e) {
        let {
          basename: t,
          children: r,
          history: n
        } = e;
        const [o, i] = a.useState({
          action: n.action,
          location: n.location
        });
        return a.useLayoutEffect((() => n.listen(i)), [n]), a.createElement(yt, {
          basename: t,
          children: r,
          location: o.location,
          navigationType: o.action,
          navigator: n
        })
      }
      const Kt = a.forwardRef((function(e, t) {
          let {
            onClick: r,
            relative: n,
            reloadDocument: o,
            replace: i,
            state: l,
            target: s,
            to: c,
            preventScrollReset: u
          } = e, d = Lt(e, kt), h = Fe(c, {
            relative: n
          }), f = Xt(c, {
            replace: i,
            state: l,
            target: s,
            preventScrollReset: u,
            relative: n
          });
          return a.createElement("a", At({}, d, {
            href: h,
            onClick: o ? r : function(e) {
              r && r(e), e.defaultPrevented || f(e)
            },
            ref: t,
            target: s
          }))
        })),
        Wt = a.forwardRef((function(e, t) {
          let {
            "aria-current": r = "page",
            caseSensitive: n = !1,
            className: o = "",
            end: i = !1,
            style: l,
            to: s,
            children: c
          } = e, u = Lt(e, jt), d = qe(s, {
            relative: u.relative
          }), h = Be(), f = a.useContext(Ue), p = d.pathname, m = h.pathname, v = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
          n || (m = m.toLowerCase(), v = v ? v.toLowerCase() : null, p = p.toLowerCase());
          let g, y = m === p || !i && m.startsWith(p) && "/" === m.charAt(p.length),
            w = null != v && (v === p || !i && v.startsWith(p) && "/" === v.charAt(p.length)),
            b = y ? r : void 0;
          g = "function" == typeof o ? o({
            isActive: y,
            isPending: w
          }) : [o, y ? "active" : null, w ? "pending" : null].filter(Boolean).join(" ");
          let E = "function" == typeof l ? l({
            isActive: y,
            isPending: w
          }) : l;
          return a.createElement(Kt, At({}, u, {
            "aria-current": b,
            className: g,
            ref: t,
            style: E,
            to: s
          }), "function" == typeof c ? c({
            isActive: y,
            isPending: w
          }) : c)
        })),
        $t = a.forwardRef(((e, t) => a.createElement(Jt, At({}, e, {
          ref: t
        })))),
        Jt = a.forwardRef(((e, t) => {
          let {
            reloadDocument: r,
            replace: n,
            method: o = Mt,
            action: i,
            onSubmit: l,
            fetcherKey: s,
            routeId: c,
            relative: u
          } = e, d = Lt(e, _t), h = er(s, c), f = "get" === o.toLowerCase() ? "get" : "post", p = tr(i, {
            relative: u
          });
          return a.createElement("form", At({
            ref: t,
            method: f,
            action: p,
            onSubmit: r ? l : e => {
              if (l && l(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter;
              h(t || e.currentTarget, {
                method: o,
                replace: n,
                relative: u
              })
            }
          }, d))
        }));

      function zt(e) {
        let {
          getKey: t,
          storageKey: r
        } = e;
        return function(e) {
          let {
            getKey: t,
            storageKey: r
          } = void 0 === e ? {} : e, {
            router: n
          } = Vt(Yt.UseScrollRestoration), {
            restoreScrollPosition: o,
            preventScrollReset: i
          } = Gt(qt.UseScrollRestoration), l = Be(), s = it(), c = at();
          var u;
          a.useEffect((() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          })), []), u = a.useCallback((() => {
            if ("idle" === c.state) {
              let e = (t ? t(l, s) : null) || l.key;
              ir[e] = window.scrollY
            }
            sessionStorage.setItem(r || or, JSON.stringify(ir)), window.history.scrollRestoration = "auto"
          }), [r, t, c.state, l, s]), a.useEffect((() => (window.addEventListener("beforeunload", u), () => {
            window.removeEventListener("beforeunload", u)
          })), [u]), a.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(r || or);
              e && (ir = JSON.parse(e))
            } catch (e) {}
          }), [r]), a.useLayoutEffect((() => {
            let e = null == n ? void 0 : n.enableScrollRestoration(ir, (() => window.scrollY), t);
            return () => e && e()
          }), [n, t]), a.useLayoutEffect((() => {
            if (!1 !== o)
              if ("number" != typeof o) {
                if (l.hash) {
                  let e = document.getElementById(l.hash.slice(1));
                  if (e) return void e.scrollIntoView()
                }!0 !== i && window.scrollTo(0, 0)
              } else window.scrollTo(0, o)
          }), [l, o, i])
        }({
          getKey: t,
          storageKey: r
        }), null
      }
      var Yt, qt;

      function Vt(e) {
        let t = a.useContext(Oe);
        return t || L(!1), t
      }

      function Gt(e) {
        let t = a.useContext(Ue);
        return t || L(!1), t
      }

      function Xt(e, t) {
        let {
          target: r,
          replace: n,
          state: o,
          preventScrollReset: i,
          relative: l
        } = void 0 === t ? {} : t, s = We(), c = Be(), u = qe(e, {
          relative: l
        });
        return a.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, r)) {
            t.preventDefault();
            let r = void 0 !== n ? n : f(c) === f(u);
            s(e, {
              replace: r,
              state: o,
              preventScrollReset: i,
              relative: l
            })
          }
        }), [c, s, u, n, o, r, e, i, l])
      }

      function Qt(e) {
        let t = a.useRef(Tt(e)),
          r = Be(),
          n = a.useMemo((() => function(e, t) {
            let r = Tt(e);
            for (let e of t.keys()) r.has(e) || t.getAll(e).forEach((t => {
              r.append(e, t)
            }));
            return r
          }(r.search, t.current)), [r.search]),
          o = We(),
          i = a.useCallback(((e, t) => {
            const r = Tt("function" == typeof e ? e(n) : e);
            o("?" + r, t)
          }), [o, n]);
        return [n, i]
      }

      function Zt() {
        return er()
      }

      function er(e, t) {
        let {
          router: r
        } = Vt(Yt.UseSubmitImpl), n = tr();
        return a.useCallback((function(a, o) {
          if (void 0 === o && (o = {}), "undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
          let {
            method: i,
            encType: l,
            formData: s,
            url: c
          } = function(e, t, r) {
            let n, a, o, i;
            if (Ut(l = e) && "form" === l.tagName.toLowerCase()) {
              let l = r.submissionTrigger;
              n = r.method || e.getAttribute("method") || Mt, a = r.action || e.getAttribute("action") || t, o = r.encType || e.getAttribute("enctype") || Ot, i = new FormData(e), l && l.name && i.append(l.name, l.value)
            } else if (function(e) {
                return Ut(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return Ut(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let l = e.form;
              if (null == l) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              n = r.method || e.getAttribute("formmethod") || l.getAttribute("method") || Mt, a = r.action || e.getAttribute("formaction") || l.getAttribute("action") || t, o = r.encType || e.getAttribute("formenctype") || l.getAttribute("enctype") || Ot, i = new FormData(l), e.name && i.append(e.name, e.value)
            } else {
              if (Ut(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              if (n = r.method || Mt, a = r.action || t, o = r.encType || Ot, e instanceof FormData) i = e;
              else if (i = new FormData, e instanceof URLSearchParams)
                for (let [t, r] of e) i.append(t, r);
              else if (null != e)
                for (let t of Object.keys(e)) i.append(t, e[t])
            }
            var l;
            let {
              protocol: s,
              host: c
            } = window.location;
            return {
              url: new URL(a, s + "//" + c),
              method: n,
              encType: o,
              formData: i
            }
          }(a, n, o), u = c.pathname + c.search, d = {
            replace: o.replace,
            formData: s,
            formMethod: i,
            formEncType: l
          };
          e ? (null == t && L(!1), r.fetch(e, t, u, d)) : r.navigate(u, d)
        }), [n, r, e, t])
      }

      function tr(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: n
        } = a.useContext(ke), o = a.useContext(_e);
        o || L(!1);
        let [i] = o.matches.slice(-1), l = At({}, qe(null != e ? e : ".", {
          relative: r
        })), s = Be();
        if (null == e && (l.search = s.search, l.hash = s.hash, i.route.index)) {
          let e = new URLSearchParams(l.search);
          e.delete("index"), l.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !i.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (l.pathname = "/" === l.pathname ? n : j([n, l.pathname])), f(l)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
      })(Yt || (Yt = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(qt || (qt = {}));
      let rr = 0;

      function nr() {
        var e;
        let {
          router: t
        } = Vt(Yt.UseFetcher), r = a.useContext(_e);
        r || L(!1);
        let n = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
        null == n && L(!1);
        let [o] = a.useState((() => String(++rr))), [i] = a.useState((() => (n || L(!1), function(e, t) {
          return a.forwardRef(((r, n) => a.createElement(Jt, At({}, r, {
            ref: n,
            fetcherKey: e,
            routeId: t
          }))))
        }(o, n)))), [l] = a.useState((() => e => {
          t || L(!1), n || L(!1), t.fetch(o, n, e)
        })), s = er(o, n), c = t.getFetcher(o), u = a.useMemo((() => At({
          Form: i,
          submit: s,
          load: l
        }, c)), [c, i, s, l]);
        return a.useEffect((() => () => {
          t ? t.deleteFetcher(o) : console.warn("No fetcher available to clean up from useFetcher()")
        }), [t, o]), u
      }

      function ar() {
        return [...Gt(qt.UseFetchers).fetchers.values()]
      }
      const or = "react-router-scroll-positions";
      let ir = {}
    }
  }
]);