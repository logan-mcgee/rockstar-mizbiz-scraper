/*! For license information please see 1dee49fa58691119f1c6.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [513], {
    513: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => z,
        Await: () => Tt,
        BrowserRouter: () => nr,
        Form: () => ur,
        HashRouter: () => ar,
        Link: () => sr,
        MemoryRouter: () => kt,
        NavLink: () => cr,
        Navigate: () => Lt,
        NavigationType: () => n,
        Outlet: () => Ut,
        Route: () => Mt,
        Router: () => _t,
        RouterProvider: () => Pt,
        Routes: () => Ot,
        ScrollRestoration: () => hr,
        UNSAFE_DataRouterContext: () => He,
        UNSAFE_DataRouterStateContext: () => $e,
        UNSAFE_LocationContext: () => Je,
        UNSAFE_NavigationContext: () => qe,
        UNSAFE_RouteContext: () => Ye,
        UNSAFE_enhanceManualRouteObjects: () => Kt,
        UNSAFE_useScrollRestoration: () => Ar,
        createBrowserRouter: () => Zt,
        createHashRouter: () => er,
        createMemoryRouter: () => Ht,
        createPath: () => p,
        createRoutesFromChildren: () => Bt,
        createRoutesFromElements: () => Bt,
        createSearchParams: () => Vt,
        defer: () => Y,
        generatePath: () => U,
        isRouteErrorResponse: () => G,
        json: () => $,
        matchPath: () => M,
        matchRoutes: () => b,
        parsePath: () => m,
        redirect: () => V,
        renderMatches: () => Wt,
        resolvePath: () => j,
        unstable_HistoryRouter: () => or,
        unstable_useBlocker: () => At,
        unstable_usePrompt: () => kr,
        useActionData: () => Rt,
        useAsyncError: () => xt,
        useAsyncValue: () => Dt,
        useBeforeUnload: () => Pr,
        useFetcher: () => Sr,
        useFetchers: () => Dr,
        useFormAction: () => Er,
        useHref: () => Xe,
        useInRouterContext: () => Ge,
        useLinkClickHandler: () => gr,
        useLoaderData: () => wt,
        useLocation: () => Qe,
        useMatch: () => et,
        useMatches: () => bt,
        useNavigate: () => tt,
        useNavigation: () => gt,
        useNavigationType: () => Ze,
        useOutlet: () => at,
        useOutletContext: () => nt,
        useParams: () => ot,
        useResolvedPath: () => it,
        useRevalidator: () => yt,
        useRouteError: () => St,
        useRouteLoaderData: () => Et,
        useRoutes: () => lt,
        useSearchParams: () => yr,
        useSubmit: () => br
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

      function y(e, t, r) {
        return void 0 === t && (t = []), void 0 === r && (r = new Set), e.map(((e, n) => {
          let a = [...t, n],
            i = "string" == typeof e.id ? e.id : a.join("-");
          return u(!0 !== e.index || !e.children, "Cannot specify children on an index route"), u(!r.has(i), 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), r.add(i),
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

      function b(e, t, r) {
        void 0 === r && (r = "/");
        let n = O(("string" == typeof t ? m(t) : t).pathname || "/", r);
        if (null == n) return null;
        let a = w(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(a);
        let o = null;
        for (let e = 0; null == o && e < a.length; ++e) o = L(a[e], _(n));
        return o
      }

      function w(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e
          };
          i.relativePath.startsWith("/") && (u(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
          let l = B([n, i.relativePath]),
            s = r.concat(i);
          e.children && e.children.length > 0 && (u(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), w(e.children, t, s, l)), (null != e.path || e.index) && t.push({
            path: l,
            score: k(l, e.index),
            routesMeta: s
          })
        };
        return e.forEach(((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of E(e.path)) a(e, t, r);
          else a(e, t)
        })), t
      }

      function E(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === n.length) return a ? [o, ""] : [o];
        let i = E(n.join("/")),
          l = [];
        return l.push(...i.map((e => "" === e ? o : [o, e].join("/")))), a && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(g || (g = {}));
      const R = /^:\w+$/,
        S = 3,
        D = 2,
        x = 1,
        C = 10,
        A = -2,
        P = e => "*" === e;

      function k(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(P) && (n += A), t && (n += D), r.filter((e => !P(e))).reduce(((e, t) => e + (R.test(t) ? S : "" === t ? x : C)), n)
      }

      function L(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, a = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            l = e === r.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = M({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: l
            }, s);
          if (!c) return null;
          Object.assign(n, c.params);
          let u = i.route;
          o.push({
            params: n,
            pathname: B([a, c.pathname]),
            pathnameBase: W(B([a, c.pathnameBase])),
            route: u
          }), "/" !== c.pathnameBase && (a = B([a, c.pathnameBase]))
        }
        return o
      }

      function U(e, t) {
        void 0 === t && (t = {});
        let r = e;
        return r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (T(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*")), r.replace(/^:(\w+)(\??)/g, ((e, r, n) => {
          let a = t[r];
          return "?" === n ? null == a ? "" : a : (null == a && u(!1, 'Missing ":' + r + '" param'), a)
        })).replace(/\/:(\w+)(\??)/g, ((e, r, n) => {
          let a = t[r];
          return "?" === n ? null == a ? "" : "/" + a : (null == a && u(!1, 'Missing ":' + r + '" param'), "/" + a)
        })).replace(/\?/g, "").replace(/(\/?)\*/, ((e, r, n, a) => null == t["*"] ? "/*" === a ? "/" : "" : "" + r + t["*"]))
      }

      function M(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), T("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
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
                return T(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(l[r] || "", t), e
          }), {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function _(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return T(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function O(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }

      function T(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function j(e, t) {
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
          search: K(n),
          hash: H(a)
        }
      }

      function F(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function N(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function I(e, t, r, n) {
        let a;
        void 0 === n && (n = !1), "string" == typeof e ? a = m(e) : (a = o({}, e), u(!a.pathname || !a.pathname.includes("?"), F("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), F("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), F("#", "search", "hash", a)));
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
        let c = j(a, i),
          d = s && "/" !== s && s.endsWith("/"),
          h = (l || "." === s) && r.endsWith("/");
        return c.pathname.endsWith("/") || !d && !h || (c.pathname += "/"), c
      }
      const B = e => e.join("/").replace(/\/\/+/g, "/"),
        W = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        K = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        H = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
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
      class z extends Error {}
      class q {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], u(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
          let n = () => r(new z("Deferred data aborted"));
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
          return this.controller.signal.aborted && r instanceof z ? (this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
              [r]: J(n)
            })
          }), {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function J(e) {
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
        ce = !se;

      function ue(e) {
        u(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
        let t, r = y(e.routes),
          a = null,
          i = new Set,
          l = null,
          s = null,
          c = null,
          d = null != e.hydrationData,
          h = b(r, e.history.location, e.basename),
          p = null;
        if (null == h) {
          let t = Re(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: n,
              route: a
            } = Ee(r);
          h = n, p = {
            [a.id]: t
          }
        }
        let m, v, w = !h.some((e => e.route.loader)) || null != e.hydrationData,
          E = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: h,
            initialized: w,
            navigation: ae,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || p,
            fetchers: new Map,
            blockers: new Map
          },
          R = n.Pop,
          S = !1,
          D = !1,
          x = !1,
          C = [],
          A = [],
          P = new Map,
          k = 0,
          L = -1,
          U = new Map,
          M = new Set,
          _ = new Map,
          j = new Map,
          F = new Map,
          N = !1;

        function I(e) {
          E = o({}, E, e), i.forEach((e => e(E)))
        }

        function B(a, i) {
          var l, s;
          let c, u = null != E.actionData && null != E.navigation.formMethod && Pe(E.navigation.formMethod) && "loading" === E.navigation.state && !0 !== (null == (l = a.state) ? void 0 : l._isRedirect);
          c = i.actionData ? Object.keys(i.actionData).length > 0 ? i.actionData : null : u ? E.actionData : null;
          let d = i.loaderData ? be(E.loaderData, i.loaderData, i.matches || [], i.errors) : E.loaderData;
          for (let [e] of F) G(e);
          let h = !0 === S || null != E.navigation.formMethod && Pe(E.navigation.formMethod) && !0 !== (null == (s = a.state) ? void 0 : s._isRedirect);
          t && (r = t, t = void 0), I(o({}, i, {
            actionData: c,
            loaderData: d,
            historyAction: R,
            location: a,
            initialized: !0,
            navigation: ae,
            revalidation: "idle",
            restoreScrollPosition: te(a, i.matches || E.matches),
            preventScrollReset: h,
            blockers: new Map(E.blockers)
          })), D || R === n.Pop || (R === n.Push ? e.history.push(a, a.state) : R === n.Replace && e.history.replace(a, a.state)), R = n.Pop, S = !1, D = !1, x = !1, C = [], A = []
        }
        async function W(a, i, d) {
          v && v.abort(), v = null, R = a, D = !0 === (d && d.startUninterruptedRevalidation),
            function(e, t) {
              if (l && s && c) {
                let r = t.map((e => Me(e, E.loaderData))),
                  n = s(e, r) || e.key;
                l[n] = c()
              }
            }(E.location, E.matches), S = !0 === (d && d.preventScrollReset);
          let h = t || r,
            f = d && d.overrideNavigation,
            p = b(h, i, e.basename);
          if (!p) {
            let e = Re(404, {
                pathname: i.pathname
              }),
              {
                matches: t,
                route: r
              } = Ee(h);
            return ee(), void B(i, {
              matches: t,
              loaderData: {},
              errors: {
                [r.id]: e
              }
            })
          }
          if (w = i, !((y = E.location).pathname !== w.pathname || y.search !== w.search || y.hash === w.hash || d && d.submission && Pe(d.submission.formMethod))) return void B(i, {
            matches: p
          });
          var y, w;
          v = new AbortController;
          let U, O, T = ve(e.history, i, v.signal, d && d.submission);
          if (d && d.pendingError) O = {
            [we(p).route.id]: d.pendingError
          };
          else if (d && d.submission && Pe(d.submission.formMethod)) {
            let e = await async function(e, t, r, a, i) {
              let l;
              z(), I({
                navigation: o({
                  state: "submitting",
                  location: t
                }, r)
              });
              let s = _e(a, t);
              if (s.route.action) {
                if (l = await me("action", e, s, a, m.basename), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else l = {
                type: g.error,
                error: Re(405, {
                  method: e.method,
                  pathname: t.pathname,
                  routeId: s.route.id
                })
              };
              if (Ae(l)) {
                let e;
                return e = i && null != i.replace ? i.replace : l.location === E.location.pathname + E.location.search, await H(E, l, {
                  submission: r,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (Ce(l)) {
                let e = we(a, s.route.id);
                return !0 !== (i && i.replace) && (R = n.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: l.error
                  }
                }
              }
              if (xe(l)) throw Re(400, {
                type: "defer-action"
              });
              return {
                pendingActionData: {
                  [s.route.id]: l.data
                }
              }
            }(T, i, d.submission, p, {
              replace: d.replace
            });
            if (e.shortCircuited) return;
            U = e.pendingActionData, O = e.pendingActionError, f = o({
              state: "loading",
              location: i
            }, d.submission), T = new Request(T.url, {
              signal: T.signal
            })
          }
          let {
            shortCircuited: F,
            loaderData: N,
            errors: W
          } = await async function(n, a, i, l, s, c, d, h) {
            let f = l;
            f || (f = o({
              state: "loading",
              location: a,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            }, s));
            let p = s || (f.formMethod && f.formAction && f.formData && f.formEncType ? {
                formMethod: f.formMethod,
                formAction: f.formAction,
                formData: f.formData,
                formEncType: f.formEncType
              } : void 0),
              m = t || r,
              [g, y] = he(e.history, E, i, p, a, x, C, A, _, m, e.basename, d, h);
            if (ee((e => !(i && i.some((t => t.route.id === e))) || g && g.some((t => t.route.id === e)))), 0 === g.length && 0 === y.length) return B(a, o({
              matches: i,
              loaderData: {},
              errors: h || null
            }, d ? {
              actionData: d
            } : {})), {
              shortCircuited: !0
            };
            if (!D) {
              y.forEach((e => {
                let t = E.fetchers.get(e.key),
                  r = {
                    state: "loading",
                    data: t && t.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                E.fetchers.set(e.key, r)
              }));
              let e = d || E.actionData;
              I(o({
                navigation: f
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, y.length > 0 ? {
                fetchers: new Map(E.fetchers)
              } : {}))
            }
            L = ++k, y.forEach((e => P.set(e.key, v)));
            let {
              results: b,
              loaderResults: w,
              fetcherResults: R
            } = await $(E.matches, i, g, y, n);
            if (n.signal.aborted) return {
              shortCircuited: !0
            };
            y.forEach((e => P.delete(e.key)));
            let S = Se(b);
            if (S) return await H(E, S, {
              replace: c
            }), {
              shortCircuited: !0
            };
            let {
              loaderData: U,
              errors: O
            } = ye(E, i, g, w, h, y, R, j);
            return j.forEach(((e, t) => {
                e.subscribe((r => {
                  (r || e.done) && j.delete(t)
                }))
              })),
              function() {
                let e = [];
                for (let t of M) {
                  let r = E.fetchers.get(t);
                  u(r, "Expected fetcher: " + t), "loading" === r.state && (M.delete(t), e.push(t))
                }
                V(e)
              }(), o({
                loaderData: U,
                errors: O
              }, X(L) || y.length > 0 ? {
                fetchers: new Map(E.fetchers)
              } : {})
          }(T, i, p, f, d && d.submission, d && d.replace, U, O);
          F || (v = null, B(i, o({
            matches: p
          }, U ? {
            actionData: U
          } : {}, {
            loaderData: N,
            errors: W
          })))
        }

        function K(e) {
          return E.fetchers.get(e) || oe
        }
        async function H(t, r, a) {
          var i;
          let {
            submission: l,
            replace: s,
            isFetchActionRedirect: c
          } = void 0 === a ? {} : a;
          r.revalidate && (x = !0);
          let d = f(t.location, r.location, o({
            _isRedirect: !0
          }, c ? {
            _isFetchActionRedirect: !0
          } : {}));
          if (u(d, "Expected a location on the redirect navigation"), le.test(r.location) && se && void 0 !== (null == (i = window) ? void 0 : i.location)) {
            let t = e.history.createURL(r.location),
              n = null == O(t.pathname, e.basename || "/");
            if (window.location.origin !== t.origin || n) return void(s ? window.location.replace(r.location) : window.location.assign(r.location))
          }
          v = null;
          let h = !0 === s ? n.Replace : n.Push,
            {
              formMethod: p,
              formAction: m,
              formEncType: g,
              formData: y
            } = t.navigation;
          !l && p && m && y && g && (l = {
            formMethod: p,
            formAction: m,
            formEncType: g,
            formData: y
          }), ne.has(r.status) && l && Pe(l.formMethod) ? await W(h, d, {
            submission: o({}, l, {
              formAction: r.location
            }),
            preventScrollReset: S
          }) : await W(h, d, {
            overrideNavigation: {
              state: "loading",
              location: d,
              formMethod: l ? l.formMethod : void 0,
              formAction: l ? l.formAction : void 0,
              formEncType: l ? l.formEncType : void 0,
              formData: l ? l.formData : void 0
            },
            preventScrollReset: S
          })
        }
        async function $(t, r, n, a, o) {
          let i = await Promise.all([...n.map((e => me("loader", o, e, r, m.basename))), ...a.map((t => t.matches && t.match ? me("loader", ve(e.history, t.path, o.signal), t.match, t.matches, m.basename) : {
              type: g.error,
              error: Re(404, {
                pathname: t.path
              })
            }))]),
            l = i.slice(0, n.length),
            s = i.slice(n.length);
          return await Promise.all([ke(t, n, l, o.signal, !1, E.loaderData), ke(t, a.map((e => e.match)), s, o.signal, !0)]), {
            results: i,
            loaderResults: l,
            fetcherResults: s
          }
        }

        function z() {
          x = !0, C.push(...ee()), _.forEach(((e, t) => {
            P.has(t) && (A.push(t), Y(t))
          }))
        }

        function q(e, t, r) {
          let n = we(E.matches, t);
          J(e), I({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(E.fetchers)
          })
        }

        function J(e) {
          P.has(e) && Y(e), _.delete(e), U.delete(e), M.delete(e), E.fetchers.delete(e)
        }

        function Y(e) {
          let t = P.get(e);
          u(t, "Expected fetch controller: " + e), t.abort(), P.delete(e)
        }

        function V(e) {
          for (let t of e) {
            let e = {
              state: "idle",
              data: K(t).data,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              " _hasFetcherDoneAnything ": !0
            };
            E.fetchers.set(t, e)
          }
        }

        function X(e) {
          let t = [];
          for (let [r, n] of U)
            if (n < e) {
              let e = E.fetchers.get(r);
              u(e, "Expected fetcher: " + r), "loading" === e.state && (Y(r), U.delete(r), t.push(r))
            } return V(t), t.length > 0
        }

        function G(e) {
          E.blockers.delete(e), F.delete(e)
        }

        function Q(e, t) {
          let r = E.blockers.get(e) || ie;
          u("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state), E.blockers.set(e, t), I({
            blockers: new Map(E.blockers)
          })
        }

        function Z(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === F.size) return;
          F.size > 1 && T(!1, "A router only supports one blocker at a time");
          let a = Array.from(F.entries()),
            [o, i] = a[a.length - 1],
            l = E.blockers.get(o);
          return l && "proceeding" === l.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? o : void 0
        }

        function ee(e) {
          let t = [];
          return j.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), j.delete(n))
          })), t
        }

        function te(e, t) {
          if (l && s && c) {
            let r = t.map((e => Me(e, E.loaderData))),
              n = s(e, r) || e.key,
              a = l[n];
            if ("number" == typeof a) return a
          }
          return null
        }
        return m = {
          get basename() {
            return e.basename
          },
          get state() {
            return E
          },
          get routes() {
            return r
          },
          initialize: function() {
            return a = e.history.listen((t => {
              let {
                action: r,
                location: n,
                delta: a
              } = t;
              if (N) return void(N = !1);
              T(0 === F.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
              let o = Z({
                currentLocation: E.location,
                nextLocation: n,
                historyAction: r
              });
              return o && null != a ? (N = !0, e.history.go(-1 * a), void Q(o, {
                state: "blocked",
                location: n,
                proceed() {
                  Q(o, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: n
                  }), e.history.go(a)
                },
                reset() {
                  G(o), I({
                    blockers: new Map(m.state.blockers)
                  })
                }
              })) : W(r, n)
            })), E.initialized || W(n.Pop, E.location), m
          },
          subscribe: function(e) {
            return i.add(e), () => i.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (l = e, c = t, s = r || (e => e.key), !d && E.navigation === ae) {
              d = !0;
              let e = te(E.location, E.matches);
              null != e && I({
                restoreScrollPosition: e
              })
            }
            return () => {
              l = null, c = null, s = null
            }
          },
          navigate: async function t(r, a) {
            if ("number" == typeof r) return void e.history.go(r);
            let {
              path: i,
              submission: l,
              error: s
            } = de(r, a), c = E.location, u = f(E.location, i, a && a.state);
            u = o({}, u, e.history.encodeLocation(u));
            let d = a && null != a.replace ? a.replace : void 0,
              h = n.Push;
            !0 === d ? h = n.Replace : !1 === d || null != l && Pe(l.formMethod) && l.formAction === E.location.pathname + E.location.search && (h = n.Replace);
            let p = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
              m = Z({
                currentLocation: c,
                nextLocation: u,
                historyAction: h
              });
            if (!m) return await W(h, u, {
              submission: l,
              pendingError: s,
              preventScrollReset: p,
              replace: a && a.replace
            });
            Q(m, {
              state: "blocked",
              location: u,
              proceed() {
                Q(m, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: u
                }), t(r, a)
              },
              reset() {
                G(m), I({
                  blockers: new Map(E.blockers)
                })
              }
            })
          },
          fetch: function(n, a, i, l) {
            if (ce) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            P.has(n) && Y(n);
            let s = b(t || r, i, e.basename);
            if (!s) return void q(n, a, Re(404, {
              pathname: i
            }));
            let {
              path: c,
              submission: d
            } = de(i, l, !0), h = _e(s, c);
            S = !0 === (l && l.preventScrollReset), d && Pe(d.formMethod) ? async function(n, a, i, l, s, c) {
              if (z(), _.delete(n), !l.route.action) {
                let e = Re(405, {
                  method: c.formMethod,
                  pathname: i,
                  routeId: a
                });
                return void q(n, a, e)
              }
              let d = E.fetchers.get(n),
                h = o({
                  state: "submitting"
                }, c, {
                  data: d && d.data,
                  " _hasFetcherDoneAnything ": !0
                });
              E.fetchers.set(n, h), I({
                fetchers: new Map(E.fetchers)
              });
              let f = new AbortController,
                p = ve(e.history, i, f.signal, c);
              P.set(n, f);
              let g = await me("action", p, l, s, m.basename);
              if (p.signal.aborted) return void(P.get(n) === f && P.delete(n));
              if (Ae(g)) {
                P.delete(n), M.add(n);
                let e = o({
                  state: "loading"
                }, c, {
                  data: void 0,
                  " _hasFetcherDoneAnything ": !0
                });
                return E.fetchers.set(n, e), I({
                  fetchers: new Map(E.fetchers)
                }), H(E, g, {
                  isFetchActionRedirect: !0
                })
              }
              if (Ce(g)) return void q(n, a, g.error);
              if (xe(g)) throw Re(400, {
                type: "defer-action"
              });
              let y = E.navigation.location || E.location,
                w = ve(e.history, y, f.signal),
                S = t || r,
                D = "idle" !== E.navigation.state ? b(S, E.navigation.location, e.basename) : E.matches;
              u(D, "Didn't find any matches after fetcher action");
              let O = ++k;
              U.set(n, O);
              let T = o({
                state: "loading",
                data: g.data
              }, c, {
                " _hasFetcherDoneAnything ": !0
              });
              E.fetchers.set(n, T);
              let [F, N] = he(e.history, E, D, c, y, x, C, A, _, S, e.basename, {
                [l.route.id]: g.data
              }, void 0);
              N.filter((e => e.key !== n)).forEach((e => {
                let t = e.key,
                  r = E.fetchers.get(t),
                  n = {
                    state: "loading",
                    data: r && r.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                E.fetchers.set(t, n), P.set(t, f)
              })), I({
                fetchers: new Map(E.fetchers)
              });
              let {
                results: W,
                loaderResults: K,
                fetcherResults: J
              } = await $(E.matches, D, F, N, w);
              if (f.signal.aborted) return;
              U.delete(n), P.delete(n), N.forEach((e => P.delete(e.key)));
              let Y = Se(W);
              if (Y) return H(E, Y);
              let {
                loaderData: V,
                errors: G
              } = ye(E, E.matches, F, K, void 0, N, J, j), Q = {
                state: "idle",
                data: g.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              E.fetchers.set(n, Q);
              let Z = X(O);
              "loading" === E.navigation.state && O > L ? (u(R, "Expected pending action"), v && v.abort(), B(E.navigation.location, {
                matches: D,
                loaderData: V,
                errors: G,
                fetchers: new Map(E.fetchers)
              })) : (I(o({
                errors: G,
                loaderData: be(E.loaderData, V, D, G)
              }, Z ? {
                fetchers: new Map(E.fetchers)
              } : {})), x = !1)
            }(n, a, c, h, s, d): (_.set(n, {
              routeId: a,
              path: c
            }), async function(t, r, n, a, i, l) {
              let s = E.fetchers.get(t),
                c = o({
                  state: "loading",
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0
                }, l, {
                  data: s && s.data,
                  " _hasFetcherDoneAnything ": !0
                });
              E.fetchers.set(t, c), I({
                fetchers: new Map(E.fetchers)
              });
              let d = new AbortController,
                h = ve(e.history, n, d.signal);
              P.set(t, d);
              let f = await me("loader", h, a, i, m.basename);
              if (xe(f) && (f = await Le(f, h.signal, !0) || f), P.get(t) === d && P.delete(t), h.signal.aborted) return;
              if (Ae(f)) return void await H(E, f);
              if (Ce(f)) {
                let e = we(E.matches, r);
                return E.fetchers.delete(t), void I({
                  fetchers: new Map(E.fetchers),
                  errors: {
                    [e.route.id]: f.error
                  }
                })
              }
              u(!xe(f), "Unhandled fetcher deferred data");
              let p = {
                state: "idle",
                data: f.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              E.fetchers.set(t, p), I({
                fetchers: new Map(E.fetchers)
              })
            }(n, a, c, h, s, d))
          },
          revalidate: function() {
            z(), I({
              revalidation: "loading"
            }), "submitting" !== E.navigation.state && ("idle" !== E.navigation.state ? W(R || E.historyAction, E.navigation.location, {
              overrideNavigation: E.navigation
            }) : W(E.historyAction, E.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: K,
          deleteFetcher: J,
          dispose: function() {
            a && a(), i.clear(), v && v.abort(), E.fetchers.forEach(((e, t) => J(t))), E.blockers.forEach(((e, t) => G(t)))
          },
          getBlocker: function(e, t) {
            let r = E.blockers.get(e) || ie;
            return F.get(e) !== t && F.set(e, t), r
          },
          deleteBlocker: G,
          _internalFetchControllers: P,
          _internalActiveDeferreds: j,
          _internalSetRoutes: function(e) {
            t = e
          }
        }, m
      }

      function de(e, t, r) {
        void 0 === r && (r = !1);
        let n, a = "string" == typeof e ? e : p(e);
        if (!t || ! function(e) {
            return null != e && "formData" in e
          }(t)) return {
          path: a
        };
        if (t.formMethod && (o = t.formMethod, !te.has(o))) return {
          path: a,
          error: Re(405, {
            method: t.formMethod
          })
        };
        var o;
        if (t.formData && (n = {
            formMethod: t.formMethod || "get",
            formAction: De(a),
            formEncType: t && t.formEncType || "application/x-www-form-urlencoded",
            formData: t.formData
          }, Pe(n.formMethod))) return {
          path: a,
          submission: n
        };
        let i = m(a),
          l = ge(t.formData);
        return r && i.search && Ue(i.search) && l.append("index", ""), i.search = "?" + l, {
          path: p(i),
          submission: n
        }
      }

      function he(e, t, r, n, a, i, l, s, c, u, d, h, f) {
        let p = f ? Object.values(f)[0] : h ? Object.values(h)[0] : void 0,
          m = e.createURL(t.location),
          v = e.createURL(a),
          g = i || m.toString() === v.toString() || m.search !== v.search,
          y = f ? Object.keys(f)[0] : void 0,
          w = function(e, t) {
            let r = e;
            if (t) {
              let n = e.findIndex((e => e.route.id === t));
              n >= 0 && (r = e.slice(0, n))
            }
            return r
          }(r, y).filter(((e, r) => {
            if (null == e.route.loader) return !1;
            if (function(e, t, r) {
                let n = !t || r.route.id !== t.route.id,
                  a = void 0 === e[r.route.id];
                return n || a
              }(t.loaderData, t.matches[r], e) || l.some((t => t === e.route.id))) return !0;
            let a = t.matches[r],
              i = e;
            return pe(e, o({
              currentUrl: m,
              currentParams: a.params,
              nextUrl: v,
              nextParams: i.params
            }, n, {
              actionResult: p,
              defaultShouldRevalidate: g || fe(a, i)
            }))
          })),
          E = [];
        return c.forEach(((e, a) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let i = b(u, e.path, d);
          if (!i) return void E.push(o({
            key: a
          }, e, {
            matches: null,
            match: null
          }));
          let l = _e(i, e.path);
          (s.includes(a) || pe(l, o({
            currentUrl: m,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: v,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: p,
            defaultShouldRevalidate: g
          }))) && E.push(o({
            key: a,
            matches: i,
            match: l
          }, e))
        })), [w, E]
      }

      function fe(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function pe(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }
      async function me(e, t, r, n, a, o, i, l) {
        let s, c, d;
        void 0 === a && (a = "/"), void 0 === o && (o = !1), void 0 === i && (i = !1);
        let h = new Promise(((e, t) => d = t)),
          f = () => d();
        t.signal.addEventListener("abort", f);
        try {
          let n = r.route[e];
          u(n, "Could not find the " + e + ' to run on the "' + r.route.id + '" route'), c = await Promise.race([n({
            request: t,
            params: r.params,
            context: l
          }), h]), u(void 0 !== c, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          s = g.error, c = e
        } finally {
          t.signal.removeEventListener("abort", f)
        }
        if (null != (m = c) && "number" == typeof m.status && "string" == typeof m.statusText && "object" == typeof m.headers && void 0 !== m.body) {
          let e, l = c.status;
          if (re.has(l)) {
            let e = c.headers.get("Location");
            if (u(e, "Redirects returned/thrown from loaders/actions must have a Location header"), le.test(e)) {
              if (!o) {
                let r = new URL(t.url),
                  n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  o = null != O(n.pathname, a);
                n.origin === r.origin && o && (e = n.pathname + n.search + n.hash)
              }
            } else {
              let o = I(e, N(n.slice(0, n.indexOf(r) + 1)).map((e => e.pathnameBase)), new URL(t.url).pathname);
              if (u(p(o), "Unable to resolve redirect location: " + e), a) {
                let e = o.pathname;
                o.pathname = "/" === e ? a : B([a, e])
              }
              e = p(o)
            }
            if (o) throw c.headers.set("Location", e), c;
            return {
              type: g.redirect,
              status: l,
              location: e,
              revalidate: null !== c.headers.get("X-Remix-Revalidate")
            }
          }
          if (i) throw {
            type: s || g.data,
            response: c
          };
          let d = c.headers.get("Content-Type");
          return e = d && /\bapplication\/json\b/.test(d) ? await c.json() : await c.text(), s === g.error ? {
            type: s,
            error: new X(l, c.statusText, e),
            headers: c.headers
          } : {
            type: g.data,
            data: e,
            statusCode: c.status,
            headers: c.headers
          }
        }
        var m, v, y;
        return s === g.error ? {
          type: s,
          error: c
        } : c instanceof q ? {
          type: g.deferred,
          deferredData: c,
          statusCode: null == (v = c.init) ? void 0 : v.status,
          headers: (null == (y = c.init) ? void 0 : y.headers) && new Headers(c.init.headers)
        } : {
          type: g.data,
          data: c
        }
      }

      function ve(e, t, r, n) {
        let a = e.createURL(De(t)).toString(),
          o = {
            signal: r
          };
        if (n && Pe(n.formMethod)) {
          let {
            formMethod: e,
            formEncType: t,
            formData: r
          } = n;
          o.method = e.toUpperCase(), o.body = "application/x-www-form-urlencoded" === t ? ge(r) : r
        }
        return new Request(a, o)
      }

      function ge(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) t.append(r, n instanceof File ? n.name : n);
        return t
      }

      function ye(e, t, r, n, a, i, l, s) {
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
            if (u(!Ae(r), "Cannot handle redirect results in processLoaderData"), Ce(r)) {
              let t = we(e, h),
                a = r.error;
              n && (a = Object.values(n)[0], n = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = a), i[h] = void 0, s || (s = !0, o = G(r.error) ? r.error.status : 500), r.headers && (c[h] = r.headers)
            } else xe(r) ? (a.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || s || (o = r.statusCode), r.headers && (c[h] = r.headers)
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
            match: n
          } = i[t];
          u(void 0 !== l && void 0 !== l[t], "Did not find corresponding fetcher result");
          let a = l[t];
          if (Ce(a)) {
            let t = we(e.matches, null == n ? void 0 : n.route.id);
            d && d[t.route.id] || (d = o({}, d, {
              [t.route.id]: a.error
            })), e.fetchers.delete(r)
          } else if (Ae(a)) u(!1, "Unhandled fetcher revalidation redirect");
          else if (xe(a)) u(!1, "Unhandled fetcher deferred data");
          else {
            let t = {
              state: "idle",
              data: a.data,
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

      function be(e, t, r, n) {
        let a = o({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && o.route.loader && (a[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return a
      }

      function we(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function Ee(e) {
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

      function Re(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: a,
          type: o
        } = void 0 === t ? {} : t, i = "Unknown Server Error", l = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", a && r && n ? l = "You made a " + a + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === o && (l = "defer() is not supported in actions")) : 403 === e ? (i = "Forbidden", l = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", a && r && n ? l = "You made a " + a.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : a && (l = 'Invalid request method "' + a.toUpperCase() + '"')), new X(e || 500, i, new Error(l), !0)
      }

      function Se(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (Ae(r)) return r
        }
      }

      function De(e) {
        return p(o({}, "string" == typeof e ? m(e) : e, {
          hash: ""
        }))
      }

      function xe(e) {
        return e.type === g.deferred
      }

      function Ce(e) {
        return e.type === g.error
      }

      function Ae(e) {
        return (e && e.type) === g.redirect
      }

      function Pe(e) {
        return Z.has(e)
      }
      async function ke(e, t, r, n, a, o) {
        for (let i = 0; i < r.length; i++) {
          let l = r[i],
            s = t[i];
          if (!s) continue;
          let c = e.find((e => e.route.id === s.route.id)),
            u = null != c && !fe(c, s) && void 0 !== (o && o[s.route.id]);
          xe(l) && (a || u) && await Le(l, n, a).then((e => {
            e && (r[i] = e || r[i])
          }))
        }
      }
      async function Le(e, t, r) {
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

      function Ue(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function Me(e, t) {
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

      function _e(e, t) {
        let r = "string" == typeof t ? m(t).search : t.search;
        if (e[e.length - 1].route.index && Ue(r || "")) return e[e.length - 1];
        let n = N(e);
        return n[n.length - 1]
      }

      function Oe() {
        return Oe = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Oe.apply(this, arguments)
      }
      Symbol("deferred");
      const Te = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        {
          useState: je,
          useEffect: Fe,
          useLayoutEffect: Ne,
          useDebugValue: Ie
        } = a;

      function Be(e) {
        const t = e.getSnapshot,
          r = e.value;
        try {
          const e = t();
          return !Te(r, e)
        } catch (e) {
          return !0
        }
      }
      const We = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t, r) {
          return t()
        } : function(e, t, r) {
          const n = t(),
            [{
              inst: a
            }, o] = je({
              inst: {
                value: n,
                getSnapshot: t
              }
            });
          return Ne((() => {
            a.value = n, a.getSnapshot = t, Be(a) && o({
              inst: a
            })
          }), [e, n, t]), Fe((() => (Be(a) && o({
            inst: a
          }), e((() => {
            Be(a) && o({
              inst: a
            })
          })))), [e]), Ie(n), n
        },
        Ke = "useSyncExternalStore" in a ? a.useSyncExternalStore : We,
        He = a.createContext(null),
        $e = a.createContext(null),
        ze = a.createContext(null),
        qe = a.createContext(null),
        Je = a.createContext(null),
        Ye = a.createContext({
          outlet: null,
          matches: []
        }),
        Ve = a.createContext(null);

      function Xe(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        Ge() || u(!1);
        let {
          basename: n,
          navigator: o
        } = a.useContext(qe), {
          hash: i,
          pathname: l,
          search: s
        } = it(e, {
          relative: r
        }), c = l;
        return "/" !== n && (c = "/" === l ? n : B([n, l])), o.createHref({
          pathname: c,
          search: s,
          hash: i
        })
      }

      function Ge() {
        return null != a.useContext(Je)
      }

      function Qe() {
        return Ge() || u(!1), a.useContext(Je).location
      }

      function Ze() {
        return a.useContext(Je).navigationType
      }

      function et(e) {
        Ge() || u(!1);
        let {
          pathname: t
        } = Qe();
        return a.useMemo((() => M(e, t)), [t, e])
      }

      function tt() {
        Ge() || u(!1);
        let {
          basename: e,
          navigator: t
        } = a.useContext(qe), {
          matches: r
        } = a.useContext(Ye), {
          pathname: n
        } = Qe(), o = JSON.stringify(N(r).map((e => e.pathnameBase))), i = a.useRef(!1);
        return a.useEffect((() => {
          i.current = !0
        })), a.useCallback((function(r, a) {
          if (void 0 === a && (a = {}), !i.current) return;
          if ("number" == typeof r) return void t.go(r);
          let l = I(r, JSON.parse(o), n, "path" === a.relative);
          "/" !== e && (l.pathname = "/" === l.pathname ? e : B([e, l.pathname])), (a.replace ? t.replace : t.push)(l, a.state, a)
        }), [e, t, o, n])
      }
      const rt = a.createContext(null);

      function nt() {
        return a.useContext(rt)
      }

      function at(e) {
        let t = a.useContext(Ye).outlet;
        return t ? a.createElement(rt.Provider, {
          value: e
        }, t) : t
      }

      function ot() {
        let {
          matches: e
        } = a.useContext(Ye), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function it(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: n
        } = a.useContext(Ye), {
          pathname: o
        } = Qe(), i = JSON.stringify(N(n).map((e => e.pathnameBase)));
        return a.useMemo((() => I(e, JSON.parse(i), o, "path" === r)), [e, i, o, r])
      }

      function lt(e, t) {
        Ge() || u(!1);
        let {
          navigator: r
        } = a.useContext(qe), o = a.useContext($e), {
          matches: i
        } = a.useContext(Ye), l = i[i.length - 1], s = l ? l.params : {}, c = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let d, h = Qe();
        if (t) {
          var f;
          let e = "string" == typeof t ? m(t) : t;
          "/" === c || (null == (f = e.pathname) ? void 0 : f.startsWith(c)) || u(!1), d = e
        } else d = h;
        let p = d.pathname || "/",
          v = b(e, {
            pathname: "/" === c ? p : p.slice(c.length) || "/"
          }),
          g = dt(v && v.map((e => Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: B([c, r.encodeLocation ? r.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? c : B([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), i, o || void 0);
        return t && g ? a.createElement(Je.Provider, {
          value: {
            location: Oe({
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

      function st() {
        let e = St(),
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
      class ct extends a.Component {
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
          return this.state.error ? a.createElement(Ye.Provider, {
            value: this.props.routeContext
          }, a.createElement(Ve.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function ut(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, o = a.useContext(He);
        return o && o.static && o.staticContext && r.route.errorElement && (o.staticContext._deepestRenderedBoundaryId = r.route.id), a.createElement(Ye.Provider, {
          value: t
        }, n)
      }

      function dt(e, t, r) {
        if (void 0 === t && (t = []), null == e) {
          if (null == r || !r.errors) return null;
          e = r.matches
        }
        let n = e,
          o = null == r ? void 0 : r.errors;
        if (null != o) {
          let e = n.findIndex((e => e.route.id && (null == o ? void 0 : o[e.route.id])));
          e >= 0 || u(!1), n = n.slice(0, Math.min(n.length, e + 1))
        }
        return n.reduceRight(((e, i, l) => {
          let s = i.route.id ? null == o ? void 0 : o[i.route.id] : null,
            c = r ? i.route.errorElement || a.createElement(st, null) : null,
            u = t.concat(n.slice(0, l + 1)),
            d = () => a.createElement(ut, {
              match: i,
              routeContext: {
                outlet: e,
                matches: u
              }
            }, s ? c : void 0 !== i.route.element ? i.route.element : e);
          return r && (i.route.errorElement || 0 === l) ? a.createElement(ct, {
            location: r.location,
            component: c,
            error: s,
            children: d(),
            routeContext: {
              outlet: null,
              matches: u
            }
          }) : d()
        }), null)
      }
      var ht, ft;

      function pt(e) {
        let t = a.useContext(He);
        return t || u(!1), t
      }

      function mt(e) {
        let t = a.useContext($e);
        return t || u(!1), t
      }

      function vt(e) {
        let t = function(e) {
            let t = a.useContext(Ye);
            return t || u(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || u(!1), r.route.id
      }

      function gt() {
        return mt(ft.UseNavigation).navigation
      }

      function yt() {
        let e = pt(ht.UseRevalidator),
          t = mt(ft.UseRevalidator);
        return {
          revalidate: e.router.revalidate,
          state: t.revalidation
        }
      }

      function bt() {
        let {
          matches: e,
          loaderData: t
        } = mt(ft.UseMatches);
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

      function wt() {
        let e = mt(ft.UseLoaderData),
          t = vt(ft.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function Et(e) {
        return mt(ft.UseRouteLoaderData).loaderData[e]
      }

      function Rt() {
        let e = mt(ft.UseActionData);
        return a.useContext(Ye) || u(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function St() {
        var e;
        let t = a.useContext(Ve),
          r = mt(ft.UseRouteError),
          n = vt(ft.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[n])
      }

      function Dt() {
        let e = a.useContext(ze);
        return null == e ? void 0 : e._data
      }

      function xt() {
        let e = a.useContext(ze);
        return null == e ? void 0 : e._error
      }! function(e) {
        e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator"
      }(ht || (ht = {})),
      function(e) {
        e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
      }(ft || (ft = {}));
      let Ct = 0;

      function At(e) {
        let {
          router: t
        } = pt(ht.UseBlocker), [r] = a.useState((() => String(++Ct))), n = a.useCallback((t => "function" == typeof e ? !!e(t) : !!e), [e]), o = t.getBlocker(r, n);
        return a.useEffect((() => () => t.deleteBlocker(r)), [t, r]), o
      }

      function Pt(e) {
        let {
          fallbackElement: t,
          router: r
        } = e, n = Ke(r.subscribe, (() => r.state), (() => r.state)), o = a.useMemo((() => ({
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
        })), [r]), i = r.basename || "/";
        return a.createElement(a.Fragment, null, a.createElement(He.Provider, {
          value: {
            router: r,
            navigator: o,
            static: !1,
            basename: i
          }
        }, a.createElement($e.Provider, {
          value: n
        }, a.createElement(_t, {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: o
        }, r.state.initialized ? a.createElement(Ot, null) : t))), null)
      }

      function kt(e) {
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
        Ge() || u(!1);
        let i = a.useContext($e),
          l = tt();
        return a.useEffect((() => {
          i && "idle" !== i.navigation.state || l(t, {
            replace: r,
            state: n,
            relative: o
          })
        })), null
      }

      function Ut(e) {
        return at(e.context)
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
        Ge() && u(!1);
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
          let e = O(h, c);
          return null == e ? null : {
            pathname: e,
            search: f,
            hash: p,
            state: v,
            key: g
          }
        }), [c, h, f, p, v, g]);
        return null == y ? null : a.createElement(qe.Provider, {
          value: d
        }, a.createElement(Je.Provider, {
          children: r,
          value: {
            location: y,
            navigationType: i
          }
        }))
      }

      function Ot(e) {
        let {
          children: t,
          location: r
        } = e, n = a.useContext(He);
        return lt(n && !t ? n.router.routes : Bt(t), r)
      }

      function Tt(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return a.createElement(Nt, {
          resolve: n,
          errorElement: r
        }, a.createElement(It, null, t))
      }
      var jt;
      ! function(e) {
        e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
      }(jt || (jt = {}));
      const Ft = new Promise((() => {}));
      class Nt extends a.Component {
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
          } = this.props, n = null, o = jt.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              o = jt.error;
              let e = this.state.error;
              n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, o = void 0 !== n._error ? jt.error : void 0 !== n._data ? jt.success : jt.pending) : (o = jt.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else o = jt.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (o === jt.error && n._error instanceof z) throw Ft;
          if (o === jt.error && !t) throw n._error;
          if (o === jt.error) return a.createElement(ze.Provider, {
            value: n,
            children: t
          });
          if (o === jt.success) return a.createElement(ze.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function It(e) {
        let {
          children: t
        } = e, r = Dt(), n = "function" == typeof t ? t(r) : t;
        return a.createElement(a.Fragment, null, n)
      }

      function Bt(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return a.Children.forEach(e, ((e, n) => {
          if (!a.isValidElement(e)) return;
          if (e.type === a.Fragment) return void r.push.apply(r, Bt(e.props.children, t));
          e.type !== Mt && u(!1), e.props.index && e.props.children && u(!1);
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
          e.props.children && (i.children = Bt(e.props.children, o)), r.push(i)
        })), r
      }

      function Wt(e) {
        return dt(e)
      }

      function Kt(e) {
        return e.map((e => {
          let t = Oe({}, e);
          return null == t.hasErrorBoundary && (t.hasErrorBoundary = null != t.errorElement), t.children && (t.children = Kt(t.children)), t
        }))
      }

      function Ht(e, t) {
        return ue({
          basename: null == t ? void 0 : t.basename,
          history: l({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: Kt(e)
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

      function zt(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }
      const qt = "get",
        Jt = "application/x-www-form-urlencoded";

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
        return ue({
          basename: null == t ? void 0 : t.basename,
          history: s({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || tr(),
          routes: Kt(e)
        }).initialize()
      }

      function er(e, t) {
        return ue({
          basename: null == t ? void 0 : t.basename,
          history: c({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || tr(),
          routes: Kt(e)
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
            h = zt(e, Xt),
            {
              basename: f
            } = a.useContext(qe),
            p = !1;
          if ("string" == typeof u && lr.test(u) && (r = u, ir)) {
            let e = new URL(window.location.href),
              t = u.startsWith("//") ? new URL(e.protocol + u) : new URL(u),
              r = O(t.pathname, f);
            t.origin === e.origin && null != r ? u = r + t.search + t.hash : p = !0
          }
          let m = Xe(u, {
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
          } = e, u = zt(e, Gt), d = it(s, {
            relative: u.relative
          }), h = Qe(), f = a.useContext($e), {
            navigator: p
          } = a.useContext(qe), m = p.encodeLocation ? p.encodeLocation(d).pathname : d.pathname, v = h.pathname, g = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
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
            method: o = qt,
            action: i,
            onSubmit: l,
            fetcherKey: s,
            routeId: c,
            relative: u,
            preventScrollReset: d
          } = e, h = zt(e, Qt), f = wr(s, c), p = "get" === o.toLowerCase() ? "get" : "post", m = Er(i, {
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
        return Ar({
          getKey: t,
          storageKey: r
        }), null
      }
      var fr, pr;

      function mr(e) {
        let t = a.useContext(He);
        return t || u(!1), t
      }

      function vr(e) {
        let t = a.useContext($e);
        return t || u(!1), t
      }

      function gr(e, t) {
        let {
          target: r,
          replace: n,
          state: o,
          preventScrollReset: i,
          relative: l
        } = void 0 === t ? {} : t, s = tt(), c = Qe(), u = it(e, {
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
          n = Qe(),
          o = a.useMemo((() => function(e, t) {
            let r = Vt(e);
            if (t)
              for (let e of t.keys()) r.has(e) || t.getAll(e).forEach((t => {
                r.append(e, t)
              }));
            return r
          }(n.search, r.current ? null : t.current)), [n.search]),
          i = tt(),
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
        } = mr(fr.UseSubmitImpl), n = Er();
        return a.useCallback((function(a, o) {
          if (void 0 === o && (o = {}), "undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
          let {
            method: i,
            encType: l,
            formData: s,
            url: c
          } = function(e, t, r) {
            let n, a, o, i;
            if (Yt(l = e) && "form" === l.tagName.toLowerCase()) {
              let l = r.submissionTrigger;
              n = r.method || e.getAttribute("method") || qt, a = r.action || e.getAttribute("action") || t, o = r.encType || e.getAttribute("enctype") || Jt, i = new FormData(e), l && l.name && i.append(l.name, l.value)
            } else if (function(e) {
                return Yt(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return Yt(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let l = e.form;
              if (null == l) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              n = r.method || e.getAttribute("formmethod") || l.getAttribute("method") || qt, a = r.action || e.getAttribute("formaction") || l.getAttribute("action") || t, o = r.encType || e.getAttribute("formenctype") || l.getAttribute("enctype") || Jt, i = new FormData(l), e.name && i.append(e.name, e.value)
            } else {
              if (Yt(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              if (n = r.method || qt, a = r.action || t, o = r.encType || Jt, e instanceof FormData) i = e;
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
              method: n.toLowerCase(),
              encType: o,
              formData: i
            }
          }(a, n, o), d = c.pathname + c.search, h = {
            replace: o.replace,
            preventScrollReset: o.preventScrollReset,
            formData: s,
            formMethod: i,
            formEncType: l
          };
          e ? (null == t && u(!1), r.fetch(e, t, d, h)) : r.navigate(d, h)
        }), [n, r, e, t])
      }

      function Er(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: n
        } = a.useContext(qe), o = a.useContext(Ye);
        o || u(!1);
        let [i] = o.matches.slice(-1), l = $t({}, it(e || ".", {
          relative: r
        })), s = Qe();
        if (null == e && (l.search = s.search, l.hash = s.hash, i.route.index)) {
          let e = new URLSearchParams(l.search);
          e.delete("index"), l.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !i.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (l.pathname = "/" === l.pathname ? n : B([n, l.pathname])), p(l)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
      })(fr || (fr = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(pr || (pr = {}));
      let Rr = 0;

      function Sr() {
        var e;
        let {
          router: t
        } = mr(fr.UseFetcher), r = a.useContext(Ye);
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
          t ? t.deleteFetcher(o) : console.warn("No fetcher available to clean up from useFetcher()")
        }), [t, o]), d
      }

      function Dr() {
        return [...vr(pr.UseFetchers).fetchers.values()]
      }
      const xr = "react-router-scroll-positions";
      let Cr = {};

      function Ar(e) {
        let {
          getKey: t,
          storageKey: r
        } = void 0 === e ? {} : e, {
          router: n
        } = mr(fr.UseScrollRestoration), {
          restoreScrollPosition: o,
          preventScrollReset: i
        } = vr(pr.UseScrollRestoration), l = Qe(), s = bt(), c = gt();
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

      function Pr(e, t) {
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

      function kr(e) {
        let {
          when: t,
          message: r
        } = e, n = At(t);
        a.useEffect((() => {
          "blocked" !== n.state || t || n.reset()
        }), [n, t]), a.useEffect((() => {
          "blocked" === n.state && (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset())
        }), [n, r])
      }
    }
  }
]);