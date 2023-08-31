/*! For license information please see 8a8e40d55fff6e3981b6.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [528], {
    528: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => H,
        Await: () => jt,
        BrowserRouter: () => nr,
        Form: () => ur,
        HashRouter: () => ar,
        Link: () => sr,
        MemoryRouter: () => At,
        NavLink: () => cr,
        Navigate: () => Lt,
        NavigationType: () => n,
        Outlet: () => Ut,
        Route: () => Mt,
        Router: () => _t,
        RouterProvider: () => Pt,
        Routes: () => Ot,
        ScrollRestoration: () => hr,
        UNSAFE_DataRouterContext: () => Fe,
        UNSAFE_DataRouterStateContext: () => Ne,
        UNSAFE_LocationContext: () => We,
        UNSAFE_NavigationContext: () => ze,
        UNSAFE_RouteContext: () => Ke,
        UNSAFE_useRouteId: () => mt,
        UNSAFE_useScrollRestoration: () => Pr,
        createBrowserRouter: () => Zt,
        createHashRouter: () => er,
        createMemoryRouter: () => Kt,
        createPath: () => p,
        createRoutesFromChildren: () => It,
        createRoutesFromElements: () => It,
        createSearchParams: () => Vt,
        defer: () => Y,
        generatePath: () => M,
        isRouteErrorResponse: () => G,
        json: () => $,
        matchPath: () => _,
        matchRoutes: () => w,
        parsePath: () => m,
        redirect: () => V,
        renderMatches: () => zt,
        resolvePath: () => T,
        unstable_HistoryRouter: () => or,
        unstable_useBlocker: () => Ct,
        unstable_usePrompt: () => Ar,
        useActionData: () => Et,
        useAsyncError: () => St,
        useAsyncValue: () => Dt,
        useBeforeUnload: () => kr,
        useFetcher: () => Dr,
        useFetchers: () => Sr,
        useFormAction: () => Er,
        useHref: () => He,
        useInRouterContext: () => Je,
        useLinkClickHandler: () => gr,
        useLoaderData: () => bt,
        useLocation: () => qe,
        useMatch: () => Ve,
        useMatches: () => yt,
        useNavigate: () => Ge,
        useNavigation: () => vt,
        useNavigationType: () => Ye,
        useOutlet: () => et,
        useOutletContext: () => Ze,
        useParams: () => tt,
        useResolvedPath: () => rt,
        useRevalidator: () => gt,
        useRouteError: () => Rt,
        useRouteLoaderData: () => wt,
        useRoutes: () => nt,
        useSearchParams: () => yr,
        useSubmit: () => br
      });
      var n, a = r(932);

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
        t = r.map(((e, t) => h(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = c(null == a ? t.length - 1 : a),
          l = n.Pop,
          s = null;

        function c(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function u() {
          return t[i]
        }

        function h(e, r, n) {
          void 0 === r && (r = null);
          let a = f(t ? u().pathname : "/", e, r, n);
          return d("/" === a.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), a
        }

        function v(e) {
          return "string" == typeof e ? e : p(e)
        }
        return {
          get index() {
            return i
          },
          get action() {
            return l
          },
          get location() {
            return u()
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
            l = n.Push;
            let a = h(e, r);
            i += 1, t.splice(i, t.length, a), o && s && s({
              action: l,
              location: a,
              delta: 1
            })
          },
          replace(e, r) {
            l = n.Replace;
            let a = h(e, r);
            t[i] = a, o && s && s({
              action: l,
              location: a,
              delta: 0
            })
          },
          go(e) {
            l = n.Pop;
            let r = c(i + e),
              a = t[r];
            i = r, s && s({
              action: l,
              location: a,
              delta: e
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
          return f("", {
            pathname: r,
            search: n,
            hash: a
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          return "string" == typeof t ? t : p(t)
        }), null, e)
      }

      function c(e) {
        return void 0 === e && (e = {}), v((function(e, t) {
          let {
            pathname: r = "/",
            search: n = "",
            hash: a = ""
          } = m(e.location.hash.substr(1));
          return f("", {
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
          return n + "#" + ("string" == typeof t ? t : p(t))
        }), (function(e, t) {
          d("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
        }), e)
      }

      function u(e, t) {
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
        return void 0 === r && (r = null), o({
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

      function v(e, t, r, a) {
        void 0 === a && (a = {});
        let {
          window: l = document.defaultView,
          v5Compat: s = !1
        } = a, c = l.history, d = n.Pop, m = null, v = g();

        function g() {
          return (c.state || {
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
          let t = "null" !== l.location.origin ? l.location.origin : l.location.href,
            r = "string" == typeof e ? e : p(e);
          return u(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
        }
        null == v && (v = 0, c.replaceState(o({}, c.state, {
          idx: v
        }), ""));
        let w = {
          get action() {
            return d
          },
          get location() {
            return e(l, c)
          },
          listen(e) {
            if (m) throw new Error("A history only accepts one active listener");
            return l.addEventListener(i, y), m = e, () => {
              l.removeEventListener(i, y), m = null
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
            d = n.Push;
            let a = f(w.location, e, t);
            r && r(a, e), v = g() + 1;
            let o = h(a, v),
              i = w.createHref(a);
            try {
              c.pushState(o, "", i)
            } catch (e) {
              l.location.assign(i)
            }
            s && m && m({
              action: d,
              location: w.location,
              delta: 1
            })
          },
          replace: function(e, t) {
            d = n.Replace;
            let a = f(w.location, e, t);
            r && r(a, e), v = g();
            let o = h(a, v),
              i = w.createHref(a);
            c.replaceState(o, "", i), s && m && m({
              action: d,
              location: w.location,
              delta: 0
            })
          },
          go: e => c.go(e)
        };
        return w
      }
      var g;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(g || (g = {}));
      const y = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function b(e, t, r, n) {
        return void 0 === r && (r = []), void 0 === n && (n = {}), e.map(((e, a) => {
          let i = [...r, a],
            l = "string" == typeof e.id ? e.id : i.join("-");
          if (u(!0 !== e.index || !e.children, "Cannot specify children on an index route"), u(!n[l], 'Found a route id collision on id "' + l + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = o({}, e, t(e), {
              id: l
            });
            return n[l] = r, r
          } {
            let r = o({}, e, t(e), {
              id: l,
              children: void 0
            });
            return n[l] = r, e.children && (r.children = b(e.children, t, i, n)), r
          }
        }))
      }

      function w(e, t, r) {
        void 0 === r && (r = "/");
        let n = j(("string" == typeof t ? m(t) : t).pathname || "/", r);
        if (null == n) return null;
        let a = E(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(a);
        let o = null;
        for (let e = 0; null == o && e < a.length; ++e) o = U(a[e], O(n));
        return o
      }

      function E(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e
          };
          i.relativePath.startsWith("/") && (u(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
          let l = I([n, i.relativePath]),
            s = r.concat(i);
          e.children && e.children.length > 0 && (u(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), E(e.children, t, s, l)), (null != e.path || e.index) && t.push({
            path: l,
            score: L(l, e.index),
            routesMeta: s
          })
        };
        return e.forEach(((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of R(e.path)) a(e, t, r);
          else a(e, t)
        })), t
      }

      function R(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === n.length) return a ? [o, ""] : [o];
        let i = R(n.join("/")),
          l = [];
        return l.push(...i.map((e => "" === e ? o : [o, e].join("/")))), a && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const D = /^:\w+$/,
        S = 3,
        x = 2,
        C = 1,
        P = 10,
        k = -2,
        A = e => "*" === e;

      function L(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(A) && (n += k), t && (n += x), r.filter((e => !A(e))).reduce(((e, t) => e + (D.test(t) ? S : "" === t ? C : P)), n)
      }

      function U(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, a = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            l = e === r.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = _({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: l
            }, s);
          if (!c) return null;
          Object.assign(n, c.params);
          let u = i.route;
          o.push({
            params: n,
            pathname: I([a, c.pathname]),
            pathnameBase: z(I([a, c.pathnameBase])),
            route: u
          }), "/" !== c.pathnameBase && (a = I([a, c.pathnameBase]))
        }
        return o
      }

      function M(e, t) {
        void 0 === t && (t = {});
        let r = e;
        return r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (d(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*")), (r.startsWith("/") ? "/" : "") + r.split(/\/+/).map(((e, r, n) => {
          if (r === n.length - 1 && "*" === e) return t["*"];
          const a = e.match(/^:(\w+)(\??)$/);
          if (a) {
            const [, e, r] = a;
            let n = t[e];
            return "?" === r ? null == n ? "" : n : (null == n && u(!1, 'Missing ":' + e + '" param'), n)
          }
          return e.replace(/\?$/g, "")
        })).filter((e => !!e)).join("/")
      }

      function _(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), d("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let n = [],
            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (n.push(t), "/([^\\/]+)")));
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
                return d(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(l[r] || "", t), e
          }), {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function O(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return d(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function j(e, t) {
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
          hash: a = ""
        } = "string" == typeof e ? m(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: o,
          search: W(n),
          hash: K(a)
        }
      }

      function B(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function F(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function N(e, t, r, n) {
        let a;
        void 0 === n && (n = !1), "string" == typeof e ? a = m(e) : (a = o({}, e), u(!a.pathname || !a.pathname.includes("?"), B("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), B("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), B("#", "search", "hash", a)));
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
        let c = T(a, i),
          d = s && "/" !== s && s.endsWith("/"),
          h = (l || "." === s) && r.endsWith("/");
        return c.pathname.endsWith("/") || !d && !h || (c.pathname += "/"), c
      }
      const I = e => e.join("/").replace(/\/\/+/g, "/"),
        z = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        W = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        K = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        $ = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            n = new Headers(r.headers);
          return n.has("Content-Type") || n.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), o({}, r, {
            headers: n
          }))
        };
      class H extends Error {}
      class J {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], u(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
          let n = () => r(new H("Deferred data aborted"));
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
          let r = Promise.race([t, this.abortPromise]).then((t => this.onSettle(r, e, null, t)), (t => this.onSettle(r, e, t)));
          return r.catch((() => {})), Object.defineProperty(r, "_tracked", {
            get: () => !0
          }), r
        }
        onSettle(e, t, r, n) {
          return this.controller.signal.aborted && r instanceof H ? (this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
            get: () => r
          }), Promise.reject(r)) : (this.pendingKeysSet.delete(t), this.done && this.unlistenAbortSignal(), r ? (Object.defineProperty(e, "_error", {
            get: () => r
          }), this.emit(!1, t), Promise.reject(r)) : (Object.defineProperty(e, "_data", {
            get: () => n
          }), this.emit(!1, t), n))
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
          return u(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: q(n)
            })
          }), {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function q(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }
      const Y = function(e, t) {
          return void 0 === t && (t = {}), new J(e, "number" == typeof t ? {
            status: t
          } : t)
        },
        V = function(e, t) {
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
      class X {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function G(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const Q = ["post", "put", "patch", "delete"],
        Z = new Set(Q),
        ee = ["get", ...Q],
        te = new Set(ee),
        re = new Set([301, 302, 303, 307, 308]),
        ne = new Set([307, 308]),
        ae = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        oe = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        ie = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0
        },
        le = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        se = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        ce = !se,
        ue = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        });

      function de(e) {
        let t;
        if (u(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) t = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let r = e.detectErrorBoundary;
          t = e => ({
            hasErrorBoundary: r(e)
          })
        } else t = ue;
        let r, a = {},
          i = b(e.routes, t, void 0, a),
          l = e.basename || "/",
          s = o({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
          }, e.future),
          c = null,
          h = new Set,
          p = null,
          m = null,
          v = null,
          y = null != e.hydrationData,
          E = w(i, e.history.location, l),
          R = null;
        if (null == E) {
          let t = xe(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: n
            } = Se(i);
          E = r, R = {
            [n.id]: t
          }
        }
        let D, S, x = !(E.some((e => e.route.lazy)) || E.some((e => e.route.loader)) && null == e.hydrationData),
          C = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: E,
            initialized: x,
            navigation: ae,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || R,
            fetchers: new Map,
            blockers: new Map
          },
          P = n.Pop,
          k = !1,
          A = !1,
          L = !1,
          U = [],
          M = [],
          _ = new Map,
          O = 0,
          T = -1,
          B = new Map,
          F = new Set,
          N = new Map,
          I = new Map,
          z = new Map,
          W = !1;

        function K(e) {
          C = o({}, C, e), h.forEach((e => e(C)))
        }

        function $(t, a) {
          var l, s;
          let c, u = null != C.actionData && null != C.navigation.formMethod && Ue(C.navigation.formMethod) && "loading" === C.navigation.state && !0 !== (null == (l = t.state) ? void 0 : l._isRedirect);
          c = a.actionData ? Object.keys(a.actionData).length > 0 ? a.actionData : null : u ? C.actionData : null;
          let d = a.loaderData ? Re(C.loaderData, a.loaderData, a.matches || [], a.errors) : C.loaderData;
          for (let [e] of z) re(e);
          let h = !0 === k || null != C.navigation.formMethod && Ue(C.navigation.formMethod) && !0 !== (null == (s = t.state) ? void 0 : s._isRedirect);
          r && (i = r, r = void 0), K(o({}, a, {
            actionData: c,
            loaderData: d,
            historyAction: P,
            location: t,
            initialized: !0,
            navigation: ae,
            revalidation: "idle",
            restoreScrollPosition: ge(t, a.matches || C.matches),
            preventScrollReset: h,
            blockers: new Map(C.blockers)
          })), A || P === n.Pop || (P === n.Push ? e.history.push(t, t.state) : P === n.Replace && e.history.replace(t, t.state)), P = n.Pop, k = !1, A = !1, L = !1, U = [], M = []
        }
        async function H(s, c, u) {
          S && S.abort(), S = null, P = s, A = !0 === (u && u.startUninterruptedRevalidation),
            function(e, t) {
              if (p && m && v) {
                let r = t.map((e => je(e, C.loaderData))),
                  n = m(e, r) || e.key;
                p[n] = v()
              }
            }(C.location, C.matches), k = !0 === (u && u.preventScrollReset);
          let d = r || i,
            h = u && u.overrideNavigation,
            f = w(d, c, l);
          if (!f) {
            let e = xe(404, {
                pathname: c.pathname
              }),
              {
                matches: t,
                route: r
              } = Se(d);
            return ve(), void $(c, {
              matches: t,
              loaderData: {},
              errors: {
                [r.id]: e
              }
            })
          }
          if (C.initialized && (y = C.location, b = c, y.pathname === b.pathname && y.search === b.search && ("" === y.hash ? "" !== b.hash : y.hash === b.hash || "" !== b.hash)) && !(u && u.submission && Ue(u.submission.formMethod))) return void $(c, {
            matches: f
          });
          var y, b;
          S = new AbortController;
          let E, R, D = be(e.history, c, S.signal, u && u.submission);
          if (u && u.pendingError) R = {
            [De(f).route.id]: u.pendingError
          };
          else if (u && u.submission && Ue(u.submission.formMethod)) {
            let e = await async function(e, r, i, s, c) {
              let u;
              V(), K({
                navigation: o({
                  state: "submitting",
                  location: r
                }, i)
              });
              let d = Te(s, r);
              if (d.route.action || d.route.lazy) {
                if (u = await ye("action", e, d, s, a, t, l), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else u = {
                type: g.error,
                error: xe(405, {
                  method: e.method,
                  pathname: r.pathname,
                  routeId: d.route.id
                })
              };
              if (Le(u)) {
                let e;
                return e = c && null != c.replace ? c.replace : u.location === C.location.pathname + C.location.search, await q(C, u, {
                  submission: i,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (Ae(u)) {
                let e = De(s, d.route.id);
                return !0 !== (c && c.replace) && (P = n.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: u.error
                  }
                }
              }
              if (ke(u)) throw xe(400, {
                type: "defer-action"
              });
              return {
                pendingActionData: {
                  [d.route.id]: u.data
                }
              }
            }(D, c, u.submission, f, {
              replace: u.replace
            });
            if (e.shortCircuited) return;
            E = e.pendingActionData, R = e.pendingActionError, h = o({
              state: "loading",
              location: c
            }, u.submission), D = new Request(D.url, {
              signal: D.signal
            })
          }
          let {
            shortCircuited: x,
            loaderData: j,
            errors: B
          } = await async function(t, n, a, s, c, u, d, h, f) {
            let p = s;
            p || (p = o({
              state: "loading",
              location: n,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            }, c));
            let m = c || u ? c || u : p.formMethod && p.formAction && p.formData && p.formEncType ? {
                formMethod: p.formMethod,
                formAction: p.formAction,
                formData: p.formData,
                formEncType: p.formEncType
              } : void 0,
              v = r || i,
              [g, y] = pe(e.history, C, a, m, n, L, U, M, N, v, l, h, f);
            if (ve((e => !(a && a.some((t => t.route.id === e))) || g && g.some((t => t.route.id === e)))), 0 === g.length && 0 === y.length) {
              let e = ee();
              return $(n, o({
                matches: a,
                loaderData: {},
                errors: f || null
              }, h ? {
                actionData: h
              } : {}, e ? {
                fetchers: new Map(C.fetchers)
              } : {})), {
                shortCircuited: !0
              }
            }
            if (!A) {
              y.forEach((e => {
                let t = C.fetchers.get(e.key),
                  r = {
                    state: "loading",
                    data: t && t.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                C.fetchers.set(e.key, r)
              }));
              let e = h || C.actionData;
              K(o({
                navigation: p
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, y.length > 0 ? {
                fetchers: new Map(C.fetchers)
              } : {}))
            }
            T = ++O, y.forEach((e => {
              e.controller && _.set(e.key, e.controller)
            }));
            let b = () => y.forEach((e => Q(e.key)));
            S && S.signal.addEventListener("abort", b);
            let {
              results: w,
              loaderResults: E,
              fetcherResults: R
            } = await Y(C.matches, a, g, y, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            S && S.signal.removeEventListener("abort", b), y.forEach((e => _.delete(e.key)));
            let D = Ce(w);
            if (D) return await q(C, D, {
              replace: d
            }), {
              shortCircuited: !0
            };
            let {
              loaderData: x,
              errors: P
            } = Ee(C, a, g, E, f, y, R, I);
            I.forEach(((e, t) => {
              e.subscribe((r => {
                (r || e.done) && I.delete(t)
              }))
            }));
            let k = ee(),
              j = te(T);
            return o({
              loaderData: x,
              errors: P
            }, k || j || y.length > 0 ? {
              fetchers: new Map(C.fetchers)
            } : {})
          }(D, c, f, h, u && u.submission, u && u.fetcherSubmission, u && u.replace, E, R);
          x || (S = null, $(c, o({
            matches: f
          }, E ? {
            actionData: E
          } : {}, {
            loaderData: j,
            errors: B
          })))
        }

        function J(e) {
          return C.fetchers.get(e) || oe
        }
        async function q(t, r, a) {
          var i;
          let {
            submission: s,
            replace: c,
            isFetchActionRedirect: d
          } = void 0 === a ? {} : a;
          r.revalidate && (L = !0);
          let h = f(t.location, r.location, o({
            _isRedirect: !0
          }, d ? {
            _isFetchActionRedirect: !0
          } : {}));
          if (u(h, "Expected a location on the redirect navigation"), le.test(r.location) && se && void 0 !== (null == (i = window) ? void 0 : i.location)) {
            let t = e.history.createURL(r.location),
              n = null == j(t.pathname, l);
            if (window.location.origin !== t.origin || n) return void(c ? window.location.replace(r.location) : window.location.assign(r.location))
          }
          S = null;
          let p = !0 === c ? n.Replace : n.Push,
            {
              formMethod: m,
              formAction: v,
              formEncType: g,
              formData: y
            } = t.navigation;
          !s && m && v && y && g && (s = {
            formMethod: m,
            formAction: v,
            formEncType: g,
            formData: y
          }), ne.has(r.status) && s && Ue(s.formMethod) ? await H(p, h, {
            submission: o({}, s, {
              formAction: r.location
            }),
            preventScrollReset: k
          }) : d ? await H(p, h, {
            overrideNavigation: {
              state: "loading",
              location: h,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            },
            fetcherSubmission: s,
            preventScrollReset: k
          }) : await H(p, h, {
            overrideNavigation: {
              state: "loading",
              location: h,
              formMethod: s ? s.formMethod : void 0,
              formAction: s ? s.formAction : void 0,
              formEncType: s ? s.formEncType : void 0,
              formData: s ? s.formData : void 0
            },
            preventScrollReset: k
          })
        }
        async function Y(r, n, o, i, s) {
          let c = await Promise.all([...o.map((e => ye("loader", s, e, n, a, t, l))), ...i.map((r => r.matches && r.match && r.controller ? ye("loader", be(e.history, r.path, r.controller.signal), r.match, r.matches, a, t, l) : {
              type: g.error,
              error: xe(404, {
                pathname: r.path
              })
            }))]),
            u = c.slice(0, o.length),
            d = c.slice(o.length);
          return await Promise.all([Me(r, o, u, u.map((() => s.signal)), !1, C.loaderData), Me(r, i.map((e => e.match)), d, i.map((e => e.controller ? e.controller.signal : null)), !0)]), {
            results: c,
            loaderResults: u,
            fetcherResults: d
          }
        }

        function V() {
          L = !0, U.push(...ve()), N.forEach(((e, t) => {
            _.has(t) && (M.push(t), Q(t))
          }))
        }

        function X(e, t, r) {
          let n = De(C.matches, t);
          G(e), K({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(C.fetchers)
          })
        }

        function G(e) {
          _.has(e) && Q(e), N.delete(e), B.delete(e), F.delete(e), C.fetchers.delete(e)
        }

        function Q(e) {
          let t = _.get(e);
          u(t, "Expected fetch controller: " + e), t.abort(), _.delete(e)
        }

        function Z(e) {
          for (let t of e) {
            let e = {
              state: "idle",
              data: J(t).data,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              " _hasFetcherDoneAnything ": !0
            };
            C.fetchers.set(t, e)
          }
        }

        function ee() {
          let e = [],
            t = !1;
          for (let r of F) {
            let n = C.fetchers.get(r);
            u(n, "Expected fetcher: " + r), "loading" === n.state && (F.delete(r), e.push(r), t = !0)
          }
          return Z(e), t
        }

        function te(e) {
          let t = [];
          for (let [r, n] of B)
            if (n < e) {
              let e = C.fetchers.get(r);
              u(e, "Expected fetcher: " + r), "loading" === e.state && (Q(r), B.delete(r), t.push(r))
            } return Z(t), t.length > 0
        }

        function re(e) {
          C.blockers.delete(e), z.delete(e)
        }

        function de(e, t) {
          let r = C.blockers.get(e) || ie;
          u("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state), C.blockers.set(e, t), K({
            blockers: new Map(C.blockers)
          })
        }

        function me(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === z.size) return;
          z.size > 1 && d(!1, "A router only supports one blocker at a time");
          let a = Array.from(z.entries()),
            [o, i] = a[a.length - 1],
            l = C.blockers.get(o);
          return l && "proceeding" === l.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? o : void 0
        }

        function ve(e) {
          let t = [];
          return I.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), I.delete(n))
          })), t
        }

        function ge(e, t) {
          if (p && m && v) {
            let r = t.map((e => je(e, C.loaderData))),
              n = m(e, r) || e.key,
              a = p[n];
            if ("number" == typeof a) return a
          }
          return null
        }
        return D = {
          get basename() {
            return l
          },
          get state() {
            return C
          },
          get routes() {
            return i
          },
          initialize: function() {
            return c = e.history.listen((t => {
              let {
                action: r,
                location: n,
                delta: a
              } = t;
              if (W) return void(W = !1);
              d(0 === z.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
              let o = me({
                currentLocation: C.location,
                nextLocation: n,
                historyAction: r
              });
              return o && null != a ? (W = !0, e.history.go(-1 * a), void de(o, {
                state: "blocked",
                location: n,
                proceed() {
                  de(o, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: n
                  }), e.history.go(a)
                },
                reset() {
                  re(o), K({
                    blockers: new Map(D.state.blockers)
                  })
                }
              })) : H(r, n)
            })), C.initialized || H(n.Pop, C.location), D
          },
          subscribe: function(e) {
            return h.add(e), () => h.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (p = e, v = t, m = r || (e => e.key), !y && C.navigation === ae) {
              y = !0;
              let e = ge(C.location, C.matches);
              null != e && K({
                restoreScrollPosition: e
              })
            }
            return () => {
              p = null, v = null, m = null
            }
          },
          navigate: async function t(r, a) {
            if ("number" == typeof r) return void e.history.go(r);
            let i = he(C.location, C.matches, l, s.v7_prependBasename, r, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative),
              {
                path: c,
                submission: u,
                error: d
              } = fe(s.v7_normalizeFormMethod, !1, i, a),
              h = C.location,
              p = f(C.location, c, a && a.state);
            p = o({}, p, e.history.encodeLocation(p));
            let m = a && null != a.replace ? a.replace : void 0,
              v = n.Push;
            !0 === m ? v = n.Replace : !1 === m || null != u && Ue(u.formMethod) && u.formAction === C.location.pathname + C.location.search && (v = n.Replace);
            let g = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
              y = me({
                currentLocation: h,
                nextLocation: p,
                historyAction: v
              });
            if (!y) return await H(v, p, {
              submission: u,
              pendingError: d,
              preventScrollReset: g,
              replace: a && a.replace
            });
            de(y, {
              state: "blocked",
              location: p,
              proceed() {
                de(y, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: p
                }), t(r, a)
              },
              reset() {
                re(y), K({
                  blockers: new Map(C.blockers)
                })
              }
            })
          },
          fetch: function(n, c, d, h) {
            if (ce) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            _.has(n) && Q(n);
            let f = r || i,
              p = he(C.location, C.matches, l, s.v7_prependBasename, d, c, null == h ? void 0 : h.relative),
              m = w(f, p, l);
            if (!m) return void X(n, c, xe(404, {
              pathname: p
            }));
            let {
              path: v,
              submission: g
            } = fe(s.v7_normalizeFormMethod, !0, p, h), y = Te(m, v);
            k = !0 === (h && h.preventScrollReset), g && Ue(g.formMethod) ? async function(n, s, c, d, h, f) {
              if (V(), N.delete(n), !d.route.action && !d.route.lazy) {
                let e = xe(405, {
                  method: f.formMethod,
                  pathname: c,
                  routeId: s
                });
                return void X(n, s, e)
              }
              let p = C.fetchers.get(n),
                m = o({
                  state: "submitting"
                }, f, {
                  data: p && p.data,
                  " _hasFetcherDoneAnything ": !0
                });
              C.fetchers.set(n, m), K({
                fetchers: new Map(C.fetchers)
              });
              let v = new AbortController,
                g = be(e.history, c, v.signal, f);
              _.set(n, v);
              let y = await ye("action", g, d, h, a, t, l);
              if (g.signal.aborted) return void(_.get(n) === v && _.delete(n));
              if (Le(y)) {
                _.delete(n), F.add(n);
                let e = o({
                  state: "loading"
                }, f, {
                  data: void 0,
                  " _hasFetcherDoneAnything ": !0
                });
                return C.fetchers.set(n, e), K({
                  fetchers: new Map(C.fetchers)
                }), q(C, y, {
                  submission: f,
                  isFetchActionRedirect: !0
                })
              }
              if (Ae(y)) return void X(n, s, y.error);
              if (ke(y)) throw xe(400, {
                type: "defer-action"
              });
              let b = C.navigation.location || C.location,
                E = be(e.history, b, v.signal),
                R = r || i,
                D = "idle" !== C.navigation.state ? w(R, C.navigation.location, l) : C.matches;
              u(D, "Didn't find any matches after fetcher action");
              let x = ++O;
              B.set(n, x);
              let k = o({
                state: "loading",
                data: y.data
              }, f, {
                " _hasFetcherDoneAnything ": !0
              });
              C.fetchers.set(n, k);
              let [A, j] = pe(e.history, C, D, f, b, L, U, M, N, R, l, {
                [d.route.id]: y.data
              }, void 0);
              j.filter((e => e.key !== n)).forEach((e => {
                let t = e.key,
                  r = C.fetchers.get(t),
                  n = {
                    state: "loading",
                    data: r && r.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                C.fetchers.set(t, n), e.controller && _.set(t, e.controller)
              })), K({
                fetchers: new Map(C.fetchers)
              });
              let z = () => j.forEach((e => Q(e.key)));
              v.signal.addEventListener("abort", z);
              let {
                results: W,
                loaderResults: H,
                fetcherResults: J
              } = await Y(C.matches, D, A, j, E);
              if (v.signal.aborted) return;
              v.signal.removeEventListener("abort", z), B.delete(n), _.delete(n), j.forEach((e => _.delete(e.key)));
              let G = Ce(W);
              if (G) return q(C, G);
              let {
                loaderData: Z,
                errors: ee
              } = Ee(C, C.matches, A, H, void 0, j, J, I), re = {
                state: "idle",
                data: y.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              C.fetchers.set(n, re);
              let ne = te(x);
              "loading" === C.navigation.state && x > T ? (u(P, "Expected pending action"), S && S.abort(), $(C.navigation.location, {
                matches: D,
                loaderData: Z,
                errors: ee,
                fetchers: new Map(C.fetchers)
              })) : (K(o({
                errors: ee,
                loaderData: Re(C.loaderData, Z, D, ee)
              }, ne ? {
                fetchers: new Map(C.fetchers)
              } : {})), L = !1)
            }(n, c, v, y, m, g): (N.set(n, {
              routeId: c,
              path: v
            }), async function(r, n, i, s, c, d) {
              let h = C.fetchers.get(r),
                f = o({
                  state: "loading",
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0
                }, d, {
                  data: h && h.data,
                  " _hasFetcherDoneAnything ": !0
                });
              C.fetchers.set(r, f), K({
                fetchers: new Map(C.fetchers)
              });
              let p = new AbortController,
                m = be(e.history, i, p.signal);
              _.set(r, p);
              let v = await ye("loader", m, s, c, a, t, l);
              if (ke(v) && (v = await _e(v, m.signal, !0) || v), _.get(r) === p && _.delete(r), m.signal.aborted) return;
              if (Le(v)) return F.add(r), void await q(C, v);
              if (Ae(v)) {
                let e = De(C.matches, n);
                return C.fetchers.delete(r), void K({
                  fetchers: new Map(C.fetchers),
                  errors: {
                    [e.route.id]: v.error
                  }
                })
              }
              u(!ke(v), "Unhandled fetcher deferred data");
              let g = {
                state: "idle",
                data: v.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              C.fetchers.set(r, g), K({
                fetchers: new Map(C.fetchers)
              })
            }(n, c, v, y, m, g))
          },
          revalidate: function() {
            V(), K({
              revalidation: "loading"
            }), "submitting" !== C.navigation.state && ("idle" !== C.navigation.state ? H(P || C.historyAction, C.navigation.location, {
              overrideNavigation: C.navigation
            }) : H(C.historyAction, C.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: J,
          deleteFetcher: G,
          dispose: function() {
            c && c(), h.clear(), S && S.abort(), C.fetchers.forEach(((e, t) => G(t))), C.blockers.forEach(((e, t) => re(t)))
          },
          getBlocker: function(e, t) {
            let r = C.blockers.get(e) || ie;
            return z.get(e) !== t && z.set(e, t), r
          },
          deleteBlocker: re,
          _internalFetchControllers: _,
          _internalActiveDeferreds: I,
          _internalSetRoutes: function(e) {
            a = {}, r = b(e, t, void 0, a)
          }
        }, D
      }

      function he(e, t, r, n, a, o, i) {
        let l, s;
        if (null != o && "path" !== i) {
          l = [];
          for (let e of t)
            if (l.push(e), e.route.id === o) {
              s = e;
              break
            }
        } else l = t, s = t[t.length - 1];
        let c = N(a || ".", F(l).map((e => e.pathnameBase)), j(e.pathname, r) || e.pathname, "path" === i);
        return null == a && (c.search = e.search, c.hash = e.hash), null != a && "" !== a && "." !== a || !s || !s.route.index || Oe(c.search) || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), n && "/" !== r && (c.pathname = "/" === c.pathname ? r : I([r, c.pathname])), p(c)
      }

      function fe(e, t, r, n) {
        if (!n || ! function(e) {
            return null != e && "formData" in e
          }(n)) return {
          path: r
        };
        if (n.formMethod && (a = n.formMethod, !te.has(a.toLowerCase()))) return {
          path: r,
          error: xe(405, {
            method: n.formMethod
          })
        };
        var a;
        let o;
        if (n.formData) {
          let t = n.formMethod || "get";
          if (o = {
              formMethod: e ? t.toUpperCase() : t.toLowerCase(),
              formAction: Pe(r),
              formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
              formData: n.formData
            }, Ue(o.formMethod)) return {
            path: r,
            submission: o
          }
        }
        let i = m(r),
          l = we(n.formData);
        return t && i.search && Oe(i.search) && l.append("index", ""), i.search = "?" + l, {
          path: p(i),
          submission: o
        }
      }

      function pe(e, t, r, n, a, i, l, s, c, u, d, h, f) {
        let p = f ? Object.values(f)[0] : h ? Object.values(h)[0] : void 0,
          m = e.createURL(t.location),
          v = e.createURL(a),
          g = f ? Object.keys(f)[0] : void 0,
          y = function(e, t) {
            let r = e;
            if (t) {
              let n = e.findIndex((e => e.route.id === t));
              n >= 0 && (r = e.slice(0, n))
            }
            return r
          }(r, g).filter(((e, r) => {
            if (e.route.lazy) return !0;
            if (null == e.route.loader) return !1;
            if (function(e, t, r) {
                let n = !t || r.route.id !== t.route.id,
                  a = void 0 === e[r.route.id];
                return n || a
              }(t.loaderData, t.matches[r], e) || l.some((t => t === e.route.id))) return !0;
            let a = t.matches[r],
              s = e;
            return ve(e, o({
              currentUrl: m,
              currentParams: a.params,
              nextUrl: v,
              nextParams: s.params
            }, n, {
              actionResult: p,
              defaultShouldRevalidate: i || m.pathname + m.search === v.pathname + v.search || m.search !== v.search || me(a, s)
            }))
          })),
          b = [];
        return c.forEach(((e, a) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let l = w(u, e.path, d);
          if (!l) return void b.push({
            key: a,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let c = Te(l, e.path);
          (s.includes(a) || ve(c, o({
            currentUrl: m,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: v,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: p,
            defaultShouldRevalidate: i
          }))) && b.push({
            key: a,
            routeId: e.routeId,
            path: e.path,
            matches: l,
            match: c,
            controller: new AbortController
          })
        })), [y, b]
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
        let n = await e.lazy();
        if (!e.lazy) return;
        let a = r[e.id];
        u(a, "No route found in manifest");
        let i = {};
        for (let e in n) {
          let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
          d(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || y.has(e) || (i[e] = n[e])
        }
        Object.assign(a, i), Object.assign(a, o({}, t(a), {
          lazy: void 0
        }))
      }
      async function ye(e, t, r, n, a, o, i, l, s, c) {
        let d, h, f;
        void 0 === l && (l = !1), void 0 === s && (s = !1);
        let p = e => {
          let n, a = new Promise(((e, t) => n = t));
          return f = () => n(), t.signal.addEventListener("abort", f), Promise.race([e({
            request: t,
            params: r.params,
            context: c
          }), a])
        };
        try {
          let n = r.route[e];
          if (r.route.lazy)
            if (n) h = (await Promise.all([p(n), ge(r.route, o, a)]))[0];
            else {
              if (await ge(r.route, o, a), n = r.route[e], !n) {
                if ("action" === e) {
                  let e = new URL(t.url),
                    n = e.pathname + e.search;
                  throw xe(405, {
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
              h = await p(n)
            }
          else {
            if (!n) {
              let e = new URL(t.url);
              throw xe(404, {
                pathname: e.pathname + e.search
              })
            }
            h = await p(n)
          }
          u(void 0 !== h, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          d = g.error, h = e
        } finally {
          f && t.signal.removeEventListener("abort", f)
        }
        if (null != (m = h) && "number" == typeof m.status && "string" == typeof m.statusText && "object" == typeof m.headers && void 0 !== m.body) {
          let e, a = h.status;
          if (re.has(a)) {
            let e = h.headers.get("Location");
            if (u(e, "Redirects returned/thrown from loaders/actions must have a Location header"), le.test(e)) {
              if (!l) {
                let r = new URL(t.url),
                  n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  a = null != j(n.pathname, i);
                n.origin === r.origin && a && (e = n.pathname + n.search + n.hash)
              }
            } else e = he(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, e);
            if (l) throw h.headers.set("Location", e), h;
            return {
              type: g.redirect,
              status: a,
              location: e,
              revalidate: null !== h.headers.get("X-Remix-Revalidate")
            }
          }
          if (s) throw {
            type: d || g.data,
            response: h
          };
          let o = h.headers.get("Content-Type");
          return e = o && /\bapplication\/json\b/.test(o) ? await h.json() : await h.text(), d === g.error ? {
            type: d,
            error: new X(a, h.statusText, e),
            headers: h.headers
          } : {
            type: g.data,
            data: e,
            statusCode: h.status,
            headers: h.headers
          }
        }
        var m, v, y;
        return d === g.error ? {
          type: d,
          error: h
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(h) ? {
          type: g.deferred,
          deferredData: h,
          statusCode: null == (v = h.init) ? void 0 : v.status,
          headers: (null == (y = h.init) ? void 0 : y.headers) && new Headers(h.init.headers)
        } : {
          type: g.data,
          data: h
        }
      }

      function be(e, t, r, n) {
        let a = e.createURL(Pe(t)).toString(),
          o = {
            signal: r
          };
        if (n && Ue(n.formMethod)) {
          let {
            formMethod: e,
            formEncType: t,
            formData: r
          } = n;
          o.method = e.toUpperCase(), o.body = "application/x-www-form-urlencoded" === t ? we(r) : r
        }
        return new Request(a, o)
      }

      function we(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) t.append(r, n instanceof File ? n.name : n);
        return t
      }

      function Ee(e, t, r, n, a, i, l, s) {
        let {
          loaderData: c,
          errors: d
        } = function(e, t, r, n, a) {
          let o, i = {},
            l = null,
            s = !1,
            c = {};
          return r.forEach(((r, d) => {
            let h = t[d].route.id;
            if (u(!Le(r), "Cannot handle redirect results in processLoaderData"), Ae(r)) {
              let t = De(e, h),
                a = r.error;
              n && (a = Object.values(n)[0], n = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = a), i[h] = void 0, s || (s = !0, o = G(r.error) ? r.error.status : 500), r.headers && (c[h] = r.headers)
            } else ke(r) ? (a.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || s || (o = r.statusCode), r.headers && (c[h] = r.headers)
          })), n && (l = n, i[Object.keys(n)[0]] = void 0), {
            loaderData: i,
            errors: l,
            statusCode: o || 200,
            loaderHeaders: c
          }
        }(t, r, n, a, s);
        for (let t = 0; t < i.length; t++) {
          let {
            key: r,
            match: n,
            controller: a
          } = i[t];
          u(void 0 !== l && void 0 !== l[t], "Did not find corresponding fetcher result");
          let s = l[t];
          if (!a || !a.signal.aborted)
            if (Ae(s)) {
              let t = De(e.matches, null == n ? void 0 : n.route.id);
              d && d[t.route.id] || (d = o({}, d, {
                [t.route.id]: s.error
              })), e.fetchers.delete(r)
            } else if (Le(s)) u(!1, "Unhandled fetcher revalidation redirect");
          else if (ke(s)) u(!1, "Unhandled fetcher deferred data");
          else {
            let t = {
              state: "idle",
              data: s.data,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              " _hasFetcherDoneAnything ": !0
            };
            e.fetchers.set(r, t)
          }
        }
        return {
          loaderData: c,
          errors: d
        }
      }

      function Re(e, t, r, n) {
        let a = o({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && o.route.loader && (a[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return a
      }

      function De(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function Se(e) {
        let t = e.find((e => e.index || !e.path || "/" === e.path)) || {
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

      function xe(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: a,
          type: o
        } = void 0 === t ? {} : t, i = "Unknown Server Error", l = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", a && r && n ? l = "You made a " + a + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === o && (l = "defer() is not supported in actions")) : 403 === e ? (i = "Forbidden", l = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", a && r && n ? l = "You made a " + a.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : a && (l = 'Invalid request method "' + a.toUpperCase() + '"')), new X(e || 500, i, new Error(l), !0)
      }

      function Ce(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (Le(r)) return r
        }
      }

      function Pe(e) {
        return p(o({}, "string" == typeof e ? m(e) : e, {
          hash: ""
        }))
      }

      function ke(e) {
        return e.type === g.deferred
      }

      function Ae(e) {
        return e.type === g.error
      }

      function Le(e) {
        return (e && e.type) === g.redirect
      }

      function Ue(e) {
        return Z.has(e.toLowerCase())
      }
      async function Me(e, t, r, n, a, o) {
        for (let i = 0; i < r.length; i++) {
          let l = r[i],
            s = t[i];
          if (!s) continue;
          let c = e.find((e => e.route.id === s.route.id)),
            d = null != c && !me(c, s) && void 0 !== (o && o[s.route.id]);
          if (ke(l) && (a || d)) {
            let e = n[i];
            u(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await _e(l, e, a).then((e => {
              e && (r[i] = e || r[i])
            }))
          }
        }
      }
      async function _e(e, t, r) {
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

      function je(e, t) {
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

      function Te(e, t) {
        let r = "string" == typeof t ? m(t).search : t.search;
        if (e[e.length - 1].route.index && Oe(r || "")) return e[e.length - 1];
        let n = F(e);
        return n[n.length - 1]
      }

      function Be() {
        return Be = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Be.apply(this, arguments)
      }
      Symbol("deferred");
      const Fe = a.createContext(null),
        Ne = a.createContext(null),
        Ie = a.createContext(null),
        ze = a.createContext(null),
        We = a.createContext(null),
        Ke = a.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        $e = a.createContext(null);

      function He(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        Je() || u(!1);
        let {
          basename: n,
          navigator: o
        } = a.useContext(ze), {
          hash: i,
          pathname: l,
          search: s
        } = rt(e, {
          relative: r
        }), c = l;
        return "/" !== n && (c = "/" === l ? n : I([n, l])), o.createHref({
          pathname: c,
          search: s,
          hash: i
        })
      }

      function Je() {
        return null != a.useContext(We)
      }

      function qe() {
        return Je() || u(!1), a.useContext(We).location
      }

      function Ye() {
        return a.useContext(We).navigationType
      }

      function Ve(e) {
        Je() || u(!1);
        let {
          pathname: t
        } = qe();
        return a.useMemo((() => _(e, t)), [t, e])
      }

      function Xe(e) {
        a.useContext(ze).static || a.useLayoutEffect(e)
      }

      function Ge() {
        let {
          isDataRoute: e
        } = a.useContext(Ke);
        return e ? function() {
          let {
            router: e
          } = ht(ut.UseNavigateStable), t = pt(dt.UseNavigateStable), r = a.useRef(!1);
          return Xe((() => {
            r.current = !0
          })), a.useCallback((function(n, a) {
            void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, Be({
              fromRouteId: t
            }, a)))
          }), [e, t])
        }() : function() {
          Je() || u(!1);
          let e = a.useContext(Fe),
            {
              basename: t,
              navigator: r
            } = a.useContext(ze),
            {
              matches: n
            } = a.useContext(Ke),
            {
              pathname: o
            } = qe(),
            i = JSON.stringify(F(n).map((e => e.pathnameBase))),
            l = a.useRef(!1);
          return Xe((() => {
            l.current = !0
          })), a.useCallback((function(n, a) {
            if (void 0 === a && (a = {}), !l.current) return;
            if ("number" == typeof n) return void r.go(n);
            let s = N(n, JSON.parse(i), o, "path" === a.relative);
            null == e && "/" !== t && (s.pathname = "/" === s.pathname ? t : I([t, s.pathname])), (a.replace ? r.replace : r.push)(s, a.state, a)
          }), [t, r, i, o, e])
        }()
      }
      const Qe = a.createContext(null);

      function Ze() {
        return a.useContext(Qe)
      }

      function et(e) {
        let t = a.useContext(Ke).outlet;
        return t ? a.createElement(Qe.Provider, {
          value: e
        }, t) : t
      }

      function tt() {
        let {
          matches: e
        } = a.useContext(Ke), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function rt(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: n
        } = a.useContext(Ke), {
          pathname: o
        } = qe(), i = JSON.stringify(F(n).map((e => e.pathnameBase)));
        return a.useMemo((() => N(e, JSON.parse(i), o, "path" === r)), [e, i, o, r])
      }

      function nt(e, t) {
        return at(e, t)
      }

      function at(e, t, r) {
        Je() || u(!1);
        let {
          navigator: o
        } = a.useContext(ze), {
          matches: i
        } = a.useContext(Ke), l = i[i.length - 1], s = l ? l.params : {}, c = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let d, h = qe();
        if (t) {
          var f;
          let e = "string" == typeof t ? m(t) : t;
          "/" === c || (null == (f = e.pathname) ? void 0 : f.startsWith(c)) || u(!1), d = e
        } else d = h;
        let p = d.pathname || "/",
          v = w(e, {
            pathname: "/" === c ? p : p.slice(c.length) || "/"
          }),
          g = ct(v && v.map((e => Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: I([c, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? c : I([c, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), i, r);
        return t && g ? a.createElement(We.Provider, {
          value: {
            location: Be({
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

      function ot() {
        let e = Rt(),
          t = G(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
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
      const it = a.createElement(ot, null);
      class lt extends a.Component {
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
          return this.state.error ? a.createElement(Ke.Provider, {
            value: this.props.routeContext
          }, a.createElement($e.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function st(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, o = a.useContext(Fe);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), a.createElement(Ke.Provider, {
          value: t
        }, n)
      }

      function ct(e, t, r) {
        var n;
        if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
          var o;
          if (null == (o = r) || !o.errors) return null;
          e = r.matches
        }
        let i = e,
          l = null == (n = r) ? void 0 : n.errors;
        if (null != l) {
          let e = i.findIndex((e => e.route.id && (null == l ? void 0 : l[e.route.id])));
          e >= 0 || u(!1), i = i.slice(0, Math.min(i.length, e + 1))
        }
        return i.reduceRight(((e, n, o) => {
          let s = n.route.id ? null == l ? void 0 : l[n.route.id] : null,
            c = null;
          r && (c = n.route.errorElement || it);
          let u = t.concat(i.slice(0, o + 1)),
            d = () => {
              let t;
              return t = s ? c : n.route.Component ? a.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, a.createElement(st, {
                match: n,
                routeContext: {
                  outlet: e,
                  matches: u,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === o) ? a.createElement(lt, {
            location: r.location,
            revalidation: r.revalidation,
            component: c,
            error: s,
            children: d(),
            routeContext: {
              outlet: null,
              matches: u,
              isDataRoute: !0
            }
          }) : d()
        }), null)
      }
      var ut, dt;

      function ht(e) {
        let t = a.useContext(Fe);
        return t || u(!1), t
      }

      function ft(e) {
        let t = a.useContext(Ne);
        return t || u(!1), t
      }

      function pt(e) {
        let t = function(e) {
            let t = a.useContext(Ke);
            return t || u(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || u(!1), r.route.id
      }

      function mt() {
        return pt(dt.UseRouteId)
      }

      function vt() {
        return ft(dt.UseNavigation).navigation
      }

      function gt() {
        let e = ht(ut.UseRevalidator),
          t = ft(dt.UseRevalidator);
        return {
          revalidate: e.router.revalidate,
          state: t.revalidation
        }
      }

      function yt() {
        let {
          matches: e,
          loaderData: t
        } = ft(dt.UseMatches);
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

      function bt() {
        let e = ft(dt.UseLoaderData),
          t = pt(dt.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function wt(e) {
        return ft(dt.UseRouteLoaderData).loaderData[e]
      }

      function Et() {
        let e = ft(dt.UseActionData);
        return a.useContext(Ke) || u(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function Rt() {
        var e;
        let t = a.useContext($e),
          r = ft(dt.UseRouteError),
          n = pt(dt.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[n])
      }

      function Dt() {
        let e = a.useContext(Ie);
        return null == e ? void 0 : e._data
      }

      function St() {
        let e = a.useContext(Ie);
        return null == e ? void 0 : e._error
      }! function(e) {
        e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate"
      }(ut || (ut = {})),
      function(e) {
        e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId"
      }(dt || (dt = {}));
      let xt = 0;

      function Ct(e) {
        let {
          router: t
        } = ht(ut.UseBlocker), r = ft(dt.UseBlocker), [n] = a.useState((() => String(++xt))), o = a.useCallback((t => "function" == typeof e ? !!e(t) : !!e), [e]), i = t.getBlocker(n, o);
        return a.useEffect((() => () => t.deleteBlocker(n)), [t, n]), r.blockers.get(n) || i
      }

      function Pt(e) {
        let {
          fallbackElement: t,
          router: r
        } = e, [n, o] = a.useState(r.state);
        a.useLayoutEffect((() => r.subscribe(o)), [r, o]);
        let i = a.useMemo((() => ({
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
          l = r.basename || "/",
          s = a.useMemo((() => ({
            router: r,
            navigator: i,
            static: !1,
            basename: l
          })), [r, i, l]);
        return a.createElement(a.Fragment, null, a.createElement(Fe.Provider, {
          value: s
        }, a.createElement(Ne.Provider, {
          value: n
        }, a.createElement(_t, {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: i
        }, r.state.initialized ? a.createElement(kt, {
          routes: r.routes,
          state: n
        }) : t))), null)
      }

      function kt(e) {
        let {
          routes: t,
          state: r
        } = e;
        return at(t, void 0, r)
      }

      function At(e) {
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
        return a.useLayoutEffect((() => s.listen(u)), [s]), a.createElement(_t, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: s
        })
      }

      function Lt(e) {
        let {
          to: t,
          replace: r,
          state: n,
          relative: o
        } = e;
        Je() || u(!1);
        let {
          matches: i
        } = a.useContext(Ke), {
          pathname: l
        } = qe(), s = Ge(), c = N(t, F(i).map((e => e.pathnameBase)), l, "path" === o), d = JSON.stringify(c);
        return a.useEffect((() => s(JSON.parse(d), {
          replace: r,
          state: n,
          relative: o
        })), [s, d, o, r, n]), null
      }

      function Ut(e) {
        return et(e.context)
      }

      function Mt(e) {
        u(!1)
      }

      function _t(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = n.Pop,
          navigator: l,
          static: s = !1
        } = e;
        Je() && u(!1);
        let c = t.replace(/^\/*/, "/"),
          d = a.useMemo((() => ({
            basename: c,
            navigator: l,
            static: s
          })), [c, l, s]);
        "string" == typeof o && (o = m(o));
        let {
          pathname: h = "/",
          search: f = "",
          hash: p = "",
          state: v = null,
          key: g = "default"
        } = o, y = a.useMemo((() => {
          let e = j(h, c);
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
        }), [c, h, f, p, v, g, i]);
        return null == y ? null : a.createElement(ze.Provider, {
          value: d
        }, a.createElement(We.Provider, {
          children: r,
          value: y
        }))
      }

      function Ot(e) {
        let {
          children: t,
          location: r
        } = e;
        return nt(It(t), r)
      }

      function jt(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return a.createElement(Ft, {
          resolve: n,
          errorElement: r
        }, a.createElement(Nt, null, t))
      }
      var Tt;
      ! function(e) {
        e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
      }(Tt || (Tt = {}));
      const Bt = new Promise((() => {}));
      class Ft extends a.Component {
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
          } = this.props, n = null, o = Tt.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              o = Tt.error;
              let e = this.state.error;
              n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, o = void 0 !== n._error ? Tt.error : void 0 !== n._data ? Tt.success : Tt.pending) : (o = Tt.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else o = Tt.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (o === Tt.error && n._error instanceof H) throw Bt;
          if (o === Tt.error && !t) throw n._error;
          if (o === Tt.error) return a.createElement(Ie.Provider, {
            value: n,
            children: t
          });
          if (o === Tt.success) return a.createElement(Ie.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function Nt(e) {
        let {
          children: t
        } = e, r = Dt(), n = "function" == typeof t ? t(r) : t;
        return a.createElement(a.Fragment, null, n)
      }

      function It(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return a.Children.forEach(e, ((e, n) => {
          if (!a.isValidElement(e)) return;
          let o = [...t, n];
          if (e.type === a.Fragment) return void r.push.apply(r, It(e.props.children, o));
          e.type !== Mt && u(!1), e.props.index && e.props.children && u(!1);
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
          e.props.children && (i.children = It(e.props.children, o)), r.push(i)
        })), r
      }

      function zt(e) {
        return ct(e)
      }

      function Wt(e) {
        let t = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
        };
        return e.Component && Object.assign(t, {
          element: a.createElement(e.Component),
          Component: void 0
        }), e.ErrorBoundary && Object.assign(t, {
          errorElement: a.createElement(e.ErrorBoundary),
          ErrorBoundary: void 0
        }), t
      }

      function Kt(e, t) {
        return de({
          basename: null == t ? void 0 : t.basename,
          future: Be({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: l({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          mapRouteProperties: Wt
        }).initialize()
      }

      function $t() {
        return $t = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, $t.apply(this, arguments)
      }

      function Ht(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }
      const Jt = "get",
        qt = "application/x-www-form-urlencoded";

      function Yt(e) {
        return null != e && "string" == typeof e.tagName
      }

      function Vt(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
            [r, n]
          ])
        }), []))
      }
      const Xt = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
        Gt = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
        Qt = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];

      function Zt(e, t) {
        return de({
          basename: null == t ? void 0 : t.basename,
          future: $t({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: s({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || tr(),
          routes: e,
          mapRouteProperties: Wt
        }).initialize()
      }

      function er(e, t) {
        return de({
          basename: null == t ? void 0 : t.basename,
          future: $t({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: c({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || tr(),
          routes: e,
          mapRouteProperties: Wt
        }).initialize()
      }

      function tr() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = $t({}, t, {
          errors: rr(t.errors)
        })), t
      }

      function rr(e) {
        if (!e) return null;
        let t = Object.entries(e),
          r = {};
        for (let [e, n] of t)
          if (n && "RouteErrorResponse" === n.__type) r[e] = new X(n.status, n.statusText, n.data, !0 === n.internal);
          else if (n && "Error" === n.__type) {
          let t = new Error(n.message);
          t.stack = "", r[e] = t
        } else r[e] = n;
        return r
      }

      function nr(e) {
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
        return a.useLayoutEffect((() => i.listen(c)), [i]), a.createElement(_t, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: i
        })
      }

      function ar(e) {
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
        return a.useLayoutEffect((() => i.listen(s)), [i]), a.createElement(_t, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: i
        })
      }

      function or(e) {
        let {
          basename: t,
          children: r,
          history: n
        } = e;
        const [o, i] = a.useState({
          action: n.action,
          location: n.location
        });
        return a.useLayoutEffect((() => n.listen(i)), [n]), a.createElement(_t, {
          basename: t,
          children: r,
          location: o.location,
          navigationType: o.action,
          navigator: n
        })
      }
      const ir = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        lr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        sr = a.forwardRef((function(e, t) {
          let r, {
              onClick: n,
              relative: o,
              reloadDocument: i,
              replace: l,
              state: s,
              target: c,
              to: u,
              preventScrollReset: d
            } = e,
            h = Ht(e, Xt),
            {
              basename: f
            } = a.useContext(ze),
            p = !1;
          if ("string" == typeof u && lr.test(u) && (r = u, ir)) try {
            let e = new URL(window.location.href),
              t = u.startsWith("//") ? new URL(e.protocol + u) : new URL(u),
              r = j(t.pathname, f);
            t.origin === e.origin && null != r ? u = r + t.search + t.hash : p = !0
          } catch (e) {}
          let m = He(u, {
              relative: o
            }),
            v = gr(u, {
              replace: l,
              state: s,
              target: c,
              preventScrollReset: d,
              relative: o
            });
          return a.createElement("a", $t({}, h, {
            href: r || m,
            onClick: p || i ? n : function(e) {
              n && n(e), e.defaultPrevented || v(e)
            },
            ref: t,
            target: c
          }))
        })),
        cr = a.forwardRef((function(e, t) {
          let {
            "aria-current": r = "page",
            caseSensitive: n = !1,
            className: o = "",
            end: i = !1,
            style: l,
            to: s,
            children: c
          } = e, u = Ht(e, Gt), d = rt(s, {
            relative: u.relative
          }), h = qe(), f = a.useContext(Ne), {
            navigator: p
          } = a.useContext(ze), m = p.encodeLocation ? p.encodeLocation(d).pathname : d.pathname, v = h.pathname, g = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
          n || (v = v.toLowerCase(), g = g ? g.toLowerCase() : null, m = m.toLowerCase());
          let y, b = v === m || !i && v.startsWith(m) && "/" === v.charAt(m.length),
            w = null != g && (g === m || !i && g.startsWith(m) && "/" === g.charAt(m.length)),
            E = b ? r : void 0;
          y = "function" == typeof o ? o({
            isActive: b,
            isPending: w
          }) : [o, b ? "active" : null, w ? "pending" : null].filter(Boolean).join(" ");
          let R = "function" == typeof l ? l({
            isActive: b,
            isPending: w
          }) : l;
          return a.createElement(sr, $t({}, u, {
            "aria-current": E,
            className: y,
            ref: t,
            style: R,
            to: s
          }), "function" == typeof c ? c({
            isActive: b,
            isPending: w
          }) : c)
        })),
        ur = a.forwardRef(((e, t) => a.createElement(dr, $t({}, e, {
          ref: t
        })))),
        dr = a.forwardRef(((e, t) => {
          let {
            reloadDocument: r,
            replace: n,
            method: o = Jt,
            action: i,
            onSubmit: l,
            fetcherKey: s,
            routeId: c,
            relative: u,
            preventScrollReset: d
          } = e, h = Ht(e, Qt), f = wr(s, c), p = "get" === o.toLowerCase() ? "get" : "post", m = Er(i, {
            relative: u
          });
          return a.createElement("form", $t({
            ref: t,
            method: p,
            action: m,
            onSubmit: r ? l : e => {
              if (l && l(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                r = (null == t ? void 0 : t.getAttribute("formmethod")) || o;
              f(t || e.currentTarget, {
                method: r,
                replace: n,
                relative: u,
                preventScrollReset: d
              })
            }
          }, h))
        }));

      function hr(e) {
        let {
          getKey: t,
          storageKey: r
        } = e;
        return Pr({
          getKey: t,
          storageKey: r
        }), null
      }
      var fr, pr;

      function mr(e) {
        let t = a.useContext(Fe);
        return t || u(!1), t
      }

      function vr(e) {
        let t = a.useContext(Ne);
        return t || u(!1), t
      }

      function gr(e, t) {
        let {
          target: r,
          replace: n,
          state: o,
          preventScrollReset: i,
          relative: l
        } = void 0 === t ? {} : t, s = Ge(), c = qe(), u = rt(e, {
          relative: l
        });
        return a.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, r)) {
            t.preventDefault();
            let r = void 0 !== n ? n : p(c) === p(u);
            s(e, {
              replace: r,
              state: o,
              preventScrollReset: i,
              relative: l
            })
          }
        }), [c, s, u, n, o, r, e, i, l])
      }

      function yr(e) {
        let t = a.useRef(Vt(e)),
          r = a.useRef(!1),
          n = qe(),
          o = a.useMemo((() => function(e, t) {
            let r = Vt(e);
            if (t)
              for (let e of t.keys()) r.has(e) || t.getAll(e).forEach((t => {
                r.append(e, t)
              }));
            return r
          }(n.search, r.current ? null : t.current)), [n.search]),
          i = Ge(),
          l = a.useCallback(((e, t) => {
            const n = Vt("function" == typeof e ? e(o) : e);
            r.current = !0, i("?" + n, t)
          }), [i, o]);
        return [o, l]
      }

      function br() {
        return wr()
      }

      function wr(e, t) {
        let {
          router: r
        } = mr(fr.UseSubmitImpl), {
          basename: n
        } = a.useContext(ze), o = mt();
        return a.useCallback((function(a, i) {
          if (void 0 === i && (i = {}), "undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
          let {
            action: l,
            method: s,
            encType: c,
            formData: d
          } = function(e, t, r) {
            let n, a, o, i = null;
            if (Yt(l = e) && "form" === l.tagName.toLowerCase()) {
              let l = t.submissionTrigger;
              if (t.action) i = t.action;
              else {
                let t = e.getAttribute("action");
                i = t ? j(t, r) : null
              }
              n = t.method || e.getAttribute("method") || Jt, a = t.encType || e.getAttribute("enctype") || qt, o = new FormData(e), l && l.name && o.append(l.name, l.value)
            } else if (function(e) {
                return Yt(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return Yt(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let l = e.form;
              if (null == l) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              if (t.action) i = t.action;
              else {
                let t = e.getAttribute("formaction") || l.getAttribute("action");
                i = t ? j(t, r) : null
              }
              n = t.method || e.getAttribute("formmethod") || l.getAttribute("method") || Jt, a = t.encType || e.getAttribute("formenctype") || l.getAttribute("enctype") || qt, o = new FormData(l), e.name && o.append(e.name, e.value)
            } else {
              if (Yt(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              if (n = t.method || Jt, i = t.action || null, a = t.encType || qt, e instanceof FormData) o = e;
              else if (o = new FormData, e instanceof URLSearchParams)
                for (let [t, r] of e) o.append(t, r);
              else if (null != e)
                for (let t of Object.keys(e)) o.append(t, e[t])
            }
            var l;
            return {
              action: i,
              method: n.toLowerCase(),
              encType: a,
              formData: o
            }
          }(a, i, n), h = {
            preventScrollReset: i.preventScrollReset,
            formData: d,
            formMethod: s,
            formEncType: c
          };
          e ? (null == t && u(!1), r.fetch(e, t, l, h)) : r.navigate(l, $t({}, h, {
            replace: i.replace,
            fromRouteId: o
          }))
        }), [r, n, e, t, o])
      }

      function Er(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: n
        } = a.useContext(ze), o = a.useContext(Ke);
        o || u(!1);
        let [i] = o.matches.slice(-1), l = $t({}, rt(e || ".", {
          relative: r
        })), s = qe();
        if (null == e && (l.search = s.search, l.hash = s.hash, i.route.index)) {
          let e = new URLSearchParams(l.search);
          e.delete("index"), l.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !i.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (l.pathname = "/" === l.pathname ? n : I([n, l.pathname])), p(l)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
      })(fr || (fr = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(pr || (pr = {}));
      let Rr = 0;

      function Dr() {
        var e;
        let {
          router: t
        } = mr(fr.UseFetcher), r = a.useContext(Ke);
        r || u(!1);
        let n = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
        null == n && u(!1);
        let [o] = a.useState((() => String(++Rr))), [i] = a.useState((() => (n || u(!1), function(e, t) {
          return a.forwardRef(((r, n) => a.createElement(dr, $t({}, r, {
            ref: n,
            fetcherKey: e,
            routeId: t
          }))))
        }(o, n)))), [l] = a.useState((() => e => {
          t || u(!1), n || u(!1), t.fetch(o, n, e)
        })), s = wr(o, n), c = t.getFetcher(o), d = a.useMemo((() => $t({
          Form: i,
          submit: s,
          load: l
        }, c)), [c, i, s, l]);
        return a.useEffect((() => () => {
          t ? t.deleteFetcher(o) : console.warn("No router available to clean up from useFetcher()")
        }), [t, o]), d
      }

      function Sr() {
        return [...vr(pr.UseFetchers).fetchers.values()]
      }
      const xr = "react-router-scroll-positions";
      let Cr = {};

      function Pr(e) {
        let {
          getKey: t,
          storageKey: r
        } = void 0 === e ? {} : e, {
          router: n
        } = mr(fr.UseScrollRestoration), {
          restoreScrollPosition: o,
          preventScrollReset: i
        } = vr(pr.UseScrollRestoration), l = qe(), s = yt(), c = vt();
        a.useEffect((() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          })), []),
          function(e, t) {
            let {
              capture: r
            } = {};
            a.useEffect((() => {
              let t = null != r ? {
                capture: r
              } : void 0;
              return window.addEventListener("pagehide", e, t), () => {
                window.removeEventListener("pagehide", e, t)
              }
            }), [e, r])
          }(a.useCallback((() => {
            if ("idle" === c.state) {
              let e = (t ? t(l, s) : null) || l.key;
              Cr[e] = window.scrollY
            }
            sessionStorage.setItem(r || xr, JSON.stringify(Cr)), window.history.scrollRestoration = "auto"
          }), [r, t, c.state, l, s])), "undefined" != typeof document && (a.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(r || xr);
              e && (Cr = JSON.parse(e))
            } catch (e) {}
          }), [r]), a.useLayoutEffect((() => {
            let e = null == n ? void 0 : n.enableScrollRestoration(Cr, (() => window.scrollY), t);
            return () => e && e()
          }), [n, t]), a.useLayoutEffect((() => {
            if (!1 !== o)
              if ("number" != typeof o) {
                if (l.hash) {
                  let e = document.getElementById(l.hash.slice(1));
                  if (e) return void e.scrollIntoView()
                }!0 !== i && window.scrollTo(0, 0)
              } else window.scrollTo(0, o)
          }), [l, o, i]))
      }

      function kr(e, t) {
        let {
          capture: r
        } = t || {};
        a.useEffect((() => {
          let t = null != r ? {
            capture: r
          } : void 0;
          return window.addEventListener("beforeunload", e, t), () => {
            window.removeEventListener("beforeunload", e, t)
          }
        }), [e, r])
      }

      function Ar(e) {
        let {
          when: t,
          message: r
        } = e, n = Ct(t);
        a.useEffect((() => {
          "blocked" !== n.state || t || n.reset()
        }), [n, t]), a.useEffect((() => {
          "blocked" === n.state && (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset())
        }), [n, r])
      }
    }
  }
]);