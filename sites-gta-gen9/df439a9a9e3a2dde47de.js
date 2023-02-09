/*! For license information please see df439a9a9e3a2dde47de.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [246], {
    7246: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => W,
        Await: () => Pt,
        BrowserRouter: () => Yt,
        Form: () => Zt,
        HashRouter: () => Vt,
        Link: () => Gt,
        MemoryRouter: () => Et,
        NavLink: () => Qt,
        Navigate: () => Dt,
        NavigationType: () => n,
        Outlet: () => Rt,
        Route: () => St,
        Router: () => Ct,
        RouterProvider: () => bt,
        Routes: () => xt,
        ScrollRestoration: () => tr,
        UNSAFE_DataRouterContext: () => Fe,
        UNSAFE_DataRouterStateContext: () => Ne,
        UNSAFE_DataStaticRouterContext: () => ke,
        UNSAFE_LocationContext: () => We,
        UNSAFE_NavigationContext: () => Be,
        UNSAFE_RouteContext: () => He,
        UNSAFE_enhanceManualRouteObjects: () => _t,
        UNSAFE_useScrollRestoration: () => vr,
        createBrowserRouter: () => Kt,
        createHashRouter: () => qt,
        createMemoryRouter: () => jt,
        createPath: () => p,
        createRoutesFromChildren: () => Ut,
        createRoutesFromElements: () => Ut,
        createSearchParams: () => Bt,
        defer: () => K,
        generatePath: () => P,
        isRouteErrorResponse: () => J,
        json: () => B,
        matchPath: () => A,
        matchRoutes: () => b,
        parsePath: () => m,
        redirect: () => q,
        renderMatches: () => Ot,
        resolvePath: () => O,
        unstable_HistoryRouter: () => Xt,
        useActionData: () => vt,
        useAsyncError: () => wt,
        useAsyncValue: () => yt,
        useBeforeUnload: () => gr,
        useFetcher: () => hr,
        useFetchers: () => fr,
        useFormAction: () => ur,
        useHref: () => Ke,
        useInRouterContext: () => qe,
        useLinkClickHandler: () => ir,
        useLoaderData: () => pt,
        useLocation: () => ze,
        useMatch: () => Ye,
        useMatches: () => ft,
        useNavigate: () => Ve,
        useNavigation: () => dt,
        useNavigationType: () => Je,
        useOutlet: () => Qe,
        useOutletContext: () => Ge,
        useParams: () => Ze,
        useResolvedPath: () => et,
        useRevalidator: () => ht,
        useRouteError: () => gt,
        useRouteLoaderData: () => mt,
        useRoutes: () => tt,
        useSearchParams: () => lr,
        useSubmit: () => sr
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
          createHref: e => "string" == typeof e ? e : p(e),
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
              location: a
            })
          },
          replace(e, r) {
            l = n.Replace;
            let a = h(e, r);
            t[i] = a, o && s && s({
              action: l,
              location: a
            })
          },
          go(e) {
            l = n.Pop, i = c(i + e), s && s({
              action: l,
              location: u()
            })
          },
          listen: e => (s = e, () => {
            s = null
          })
        }
      }

      function s(e) {
        return void 0 === e && (e = {}), g((function(e, t) {
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
        return void 0 === e && (e = {}), g((function(e, t) {
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

      function h(e) {
        return {
          usr: e.state,
          key: e.key
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

      function v(e) {
        let t = "undefined" != typeof window && void 0 !== window.location && "null" !== window.location.origin ? window.location.origin : window.location.href,
          r = "string" == typeof e ? e : p(e);
        return u(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
      }

      function g(e, t, r, a) {
        void 0 === a && (a = {});
        let {
          window: o = document.defaultView,
          v5Compat: l = !1
        } = a, s = o.history, c = n.Pop, u = null;

        function d() {
          c = n.Pop, u && u({
            action: c,
            location: m.location
          })
        }
        let m = {
          get action() {
            return c
          },
          get location() {
            return e(o, s)
          },
          listen(e) {
            if (u) throw new Error("A history only accepts one active listener");
            return o.addEventListener(i, d), u = e, () => {
              o.removeEventListener(i, d), u = null
            }
          },
          createHref: e => t(o, e),
          encodeLocation(e) {
            let t = v("string" == typeof e ? e : p(e));
            return {
              pathname: t.pathname,
              search: t.search,
              hash: t.hash
            }
          },
          push: function(e, t) {
            c = n.Push;
            let a = f(m.location, e, t);
            r && r(a, e);
            let i = h(a),
              d = m.createHref(a);
            try {
              s.pushState(i, "", d)
            } catch (e) {
              o.location.assign(d)
            }
            l && u && u({
              action: c,
              location: m.location
            })
          },
          replace: function(e, t) {
            c = n.Replace;
            let a = f(m.location, e, t);
            r && r(a, e);
            let o = h(a),
              i = m.createHref(a);
            s.replaceState(o, "", i), l && u && u({
              action: c,
              location: m.location
            })
          },
          go: e => s.go(e)
        };
        return m
      }
      var y;

      function w(e, t, r) {
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
              children: e.children ? w(e.children, a, r) : void 0
            })
        }))
      }

      function b(e, t, r) {
        void 0 === r && (r = "/");
        let n = M(("string" == typeof t ? m(t) : t).pathname || "/", r);
        if (null == n) return null;
        let a = E(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(a);
        let o = null;
        for (let e = 0; null == o && e < a.length; ++e) o = x(a[e], L(n));
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
          let l = k([n, i.relativePath]),
            s = r.concat(i);
          e.children && e.children.length > 0 && (u(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), E(e.children, t, s, l)), (null != e.path || e.index) && t.push({
            path: l,
            score: C(l, e.index),
            routesMeta: s
          })
        };
        return e.forEach(((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of D(e.path)) a(e, t, r);
          else a(e, t)
        })), t
      }

      function D(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === n.length) return a ? [o, ""] : [o];
        let i = D(n.join("/")),
          l = [];
        return l.push(...i.map((e => "" === e ? o : [o, e].join("/")))), a && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(y || (y = {}));
      const R = /^:\w+$/,
        S = e => "*" === e;

      function C(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(S) && (n += -2), t && (n += 2), r.filter((e => !S(e))).reduce(((e, t) => e + (R.test(t) ? 3 : "" === t ? 1 : 10)), n)
      }

      function x(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, a = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            l = e === r.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = A({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: l
            }, s);
          if (!c) return null;
          Object.assign(n, c.params);
          let u = i.route;
          o.push({
            params: n,
            pathname: k([a, c.pathname]),
            pathnameBase: F(k([a, c.pathnameBase])),
            route: u
          }), "/" !== c.pathnameBase && (a = k([a, c.pathnameBase]))
        }
        return o
      }

      function P(e, t) {
        void 0 === t && (t = {});
        let r = e;
        return r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (U(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*")), r.replace(/^:(\w+)/g, ((e, r) => (u(null != t[r], 'Missing ":' + r + '" param'), t[r]))).replace(/\/:(\w+)/g, ((e, r) => (u(null != t[r], 'Missing ":' + r + '" param'), "/" + t[r]))).replace(/(\/?)\*/, ((e, r, n, a) => null == t["*"] ? "/*" === a ? "/" : "" : "" + r + t["*"]))
      }

      function A(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), U("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
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
                return U(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(l[r] || "", t), e
          }), {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function L(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return U(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function M(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }

      function U(e, t) {
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
        } = "string" == typeof e ? m(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: o,
          search: N(n),
          hash: I(a)
        }
      }

      function _(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function j(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function T(e, t, r, n) {
        let a;
        void 0 === n && (n = !1), "string" == typeof e ? a = m(e) : (a = o({}, e), u(!a.pathname || !a.pathname.includes("?"), _("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), _("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), _("#", "search", "hash", a)));
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
          d = s && "/" !== s && s.endsWith("/"),
          h = (l || "." === s) && r.endsWith("/");
        return c.pathname.endsWith("/") || !d && !h || (c.pathname += "/"), c
      }
      const k = e => e.join("/").replace(/\/\/+/g, "/"),
        F = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        N = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        I = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        B = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            n = new Headers(r.headers);
          return n.has("Content-Type") || n.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), o({}, r, {
            headers: n
          }))
        };
      class W extends Error {}
      class H {
        constructor(e) {
          let t;
          this.pendingKeys = new Set, this.subscriber = void 0, u(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, r) => t = r)), this.controller = new AbortController;
          let r = () => t(new W("Deferred data aborted"));
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
          if (this.controller.signal.aborted && r instanceof W) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
          return u(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: $(n)
            })
          }), {})
        }
      }

      function $(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }

      function K(e) {
        return new H(e)
      }
      const q = function(e, t) {
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
      class z {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function J(e) {
        return e instanceof z
      }
      const Y = ["post", "put", "patch", "delete"],
        V = new Set(Y),
        X = ["get", ...Y],
        G = new Set(X),
        Q = new Set([301, 302, 303, 307, 308]),
        Z = new Set([307, 308]),
        ee = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        te = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        re = !("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement);

      function ne(e) {
        u(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
        let t = w(e.routes),
          r = null,
          a = new Set,
          i = null,
          l = null,
          s = null,
          c = null != e.hydrationData,
          d = b(t, e.history.location, e.basename),
          h = null;
        if (null == d) {
          let r = me(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: n,
              route: a
            } = pe(t);
          d = n, h = {
            [a.id]: r
          }
        }
        let p, m, g = !d.some((e => e.route.loader)) || null != e.hydrationData,
          E = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: d,
            initialized: g,
            navigation: ee,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || h,
            fetchers: new Map
          },
          D = n.Pop,
          R = !1,
          S = !1,
          C = !1,
          x = [],
          P = [],
          A = new Map,
          L = 0,
          M = -1,
          U = new Map,
          O = new Set,
          _ = new Map,
          j = new Map;

        function T(e) {
          E = o({}, E, e), a.forEach((e => e(E)))
        }

        function k(t, r) {
          var a;
          let i, l = null != E.actionData && null != E.navigation.formMethod && Ee(E.navigation.formMethod) && "loading" === E.navigation.state && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect);
          i = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : l ? E.actionData : null, T(o({}, r, {
            actionData: i,
            loaderData: r.loaderData ? he(E.loaderData, r.loaderData, r.matches || [], r.errors) : E.loaderData,
            historyAction: D,
            location: t,
            initialized: !0,
            navigation: ee,
            revalidation: "idle",
            restoreScrollPosition: !E.navigation.formData && Y(t, r.matches || E.matches),
            preventScrollReset: R
          })), S || D === n.Pop || (D === n.Push ? e.history.push(t, t.state) : D === n.Replace && e.history.replace(t, t.state)), D = n.Pop, R = !1, S = !1, C = !1, x = [], P = []
        }
        async function F(r, a, c) {
          m && m.abort(), m = null, D = r, S = !0 === (c && c.startUninterruptedRevalidation),
            function(e, t) {
              if (i && l && s) {
                let r = t.map((e => Ce(e, E.loaderData))),
                  n = l(e, r) || e.key;
                i[n] = s()
              }
            }(E.location, E.matches), R = !0 === (c && c.preventScrollReset);
          let d = c && c.overrideNavigation,
            h = b(t, a, e.basename);
          if (!h) {
            let e = me(404, {
                pathname: a.pathname
              }),
              {
                matches: r,
                route: n
              } = pe(t);
            return J(), void k(a, {
              matches: r,
              loaderData: {},
              errors: {
                [n.id]: e
              }
            })
          }
          if (v = a, (f = E.location).pathname === v.pathname && f.search === v.search && f.hash !== v.hash) return void k(a, {
            matches: h
          });
          var f, v;
          m = new AbortController;
          let g, w, U = ce(a, m.signal, c && c.submission);
          if (c && c.pendingError) w = {
            [fe(h).route.id]: c.pendingError
          };
          else if (c && c.submission && Ee(c.submission.formMethod)) {
            let e = await async function(e, t, r, a, i) {
              let l;
              W(), T({
                navigation: o({
                  state: "submitting",
                  location: t
                }, r)
              });
              let s = xe(a, t);
              if (s.route.action) {
                if (l = await se("action", e, s, a, p.basename), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else l = {
                type: y.error,
                error: me(405, {
                  method: e.method,
                  pathname: t.pathname,
                  routeId: s.route.id
                })
              };
              if (be(l)) {
                let e;
                return e = i && null != i.replace ? i.replace : l.location === E.location.pathname + E.location.search, await I(E, l, {
                  submission: r,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (we(l)) {
                let e = fe(a, s.route.id);
                return !0 !== (i && i.replace) && (D = n.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: l.error
                  }
                }
              }
              if (ye(l)) throw new Error("defer() is not supported in actions");
              return {
                pendingActionData: {
                  [s.route.id]: l.data
                }
              }
            }(U, a, c.submission, h, {
              replace: c.replace
            });
            if (e.shortCircuited) return;
            g = e.pendingActionData, w = e.pendingActionError, d = o({
              state: "loading",
              location: a
            }, c.submission), U = new Request(U.url, {
              signal: U.signal
            })
          }
          let {
            shortCircuited: F,
            loaderData: N,
            errors: H
          } = await async function(e, t, r, n, a, i, l, s) {
            let c = n;
            c || (c = o({
              state: "loading",
              location: t,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            }, a));
            let d = a || (c.formMethod && c.formAction && c.formData && c.formEncType ? {
                formMethod: c.formMethod,
                formAction: c.formAction,
                formData: c.formData,
                formEncType: c.formEncType
              } : void 0),
              [h, f] = oe(E, r, d, t, C, x, P, l, s, _);
            if (J((e => !(r && r.some((t => t.route.id === e))) || h && h.some((t => t.route.id === e)))), 0 === h.length && 0 === f.length) return k(t, o({
              matches: r,
              loaderData: {},
              errors: s || null
            }, l ? {
              actionData: l
            } : {})), {
              shortCircuited: !0
            };
            if (!S) {
              f.forEach((e => {
                let [t] = e, r = E.fetchers.get(t), n = {
                  state: "loading",
                  data: r && r.data,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  " _hasFetcherDoneAnything ": !0
                };
                E.fetchers.set(t, n)
              }));
              let e = l || E.actionData;
              T(o({
                navigation: c
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, f.length > 0 ? {
                fetchers: new Map(E.fetchers)
              } : {}))
            }
            M = ++L, f.forEach((e => {
              let [t] = e;
              return A.set(t, m)
            }));
            let {
              results: p,
              loaderResults: v,
              fetcherResults: g
            } = await B(E.matches, r, h, f, e);
            if (e.signal.aborted) return {
              shortCircuited: !0
            };
            f.forEach((e => {
              let [t] = e;
              return A.delete(t)
            }));
            let y = ve(p);
            if (y) return await I(E, y, {
              replace: i
            }), {
              shortCircuited: !0
            };
            let {
              loaderData: w,
              errors: b
            } = de(E, r, h, v, s, f, g, j);
            return j.forEach(((e, t) => {
                e.subscribe((r => {
                  (r || e.done) && j.delete(t)
                }))
              })),
              function() {
                let e = [];
                for (let t of O) {
                  let r = E.fetchers.get(t);
                  u(r, "Expected fetcher: " + t), "loading" === r.state && (O.delete(t), e.push(t))
                }
                q(e)
              }(), o({
                loaderData: w,
                errors: b
              }, z(M) || f.length > 0 ? {
                fetchers: new Map(E.fetchers)
              } : {})
          }(U, a, h, d, c && c.submission, c && c.replace, g, w);
          F || (m = null, k(a, o({
            matches: h
          }, g ? {
            actionData: g
          } : {}, {
            loaderData: N,
            errors: H
          })))
        }

        function N(e) {
          return E.fetchers.get(e) || te
        }
        async function I(e, t, r) {
          var a;
          let {
            submission: i,
            replace: l,
            isFetchActionRedirect: s
          } = void 0 === r ? {} : r;
          t.revalidate && (C = !0);
          let c = f(e.location, t.location, o({
            _isRedirect: !0
          }, s ? {
            _isFetchActionRedirect: !0
          } : {}));
          if (u(c, "Expected a location on the redirect navigation"), void 0 !== (null == (a = window) ? void 0 : a.location)) {
            let e = v(t.location).origin;
            if (window.location.origin !== e) return void(l ? window.location.replace(t.location) : window.location.assign(t.location))
          }
          m = null;
          let d = !0 === l ? n.Replace : n.Push,
            {
              formMethod: h,
              formAction: p,
              formEncType: g,
              formData: y
            } = e.navigation;
          !i && h && p && y && g && (i = {
            formMethod: h,
            formAction: p,
            formEncType: g,
            formData: y
          }), Z.has(t.status) && i && Ee(i.formMethod) ? await F(d, c, {
            submission: o({}, i, {
              formAction: t.location
            })
          }) : await F(d, c, {
            overrideNavigation: {
              state: "loading",
              location: c,
              formMethod: i ? i.formMethod : void 0,
              formAction: i ? i.formAction : void 0,
              formEncType: i ? i.formEncType : void 0,
              formData: i ? i.formData : void 0
            }
          })
        }
        async function B(e, t, r, n, a) {
          let o = await Promise.all([...r.map((e => se("loader", a, e, t, p.basename))), ...n.map((e => {
              let [, t, r, n] = e;
              return se("loader", ce(t, a.signal), r, n, p.basename)
            }))]),
            i = o.slice(0, r.length),
            l = o.slice(r.length);
          return await Promise.all([De(e, r, i, a.signal, !1, E.loaderData), De(e, n.map((e => {
            let [, , t] = e;
            return t
          })), l, a.signal, !0)]), {
            results: o,
            loaderResults: i,
            fetcherResults: l
          }
        }

        function W() {
          C = !0, x.push(...J()), _.forEach(((e, t) => {
            A.has(t) && (P.push(t), K(t))
          }))
        }

        function H(e, t, r) {
          let n = fe(E.matches, t);
          $(e), T({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(E.fetchers)
          })
        }

        function $(e) {
          A.has(e) && K(e), _.delete(e), U.delete(e), O.delete(e), E.fetchers.delete(e)
        }

        function K(e) {
          let t = A.get(e);
          u(t, "Expected fetch controller: " + e), t.abort(), A.delete(e)
        }

        function q(e) {
          for (let t of e) {
            let e = {
              state: "idle",
              data: N(t).data,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              " _hasFetcherDoneAnything ": !0
            };
            E.fetchers.set(t, e)
          }
        }

        function z(e) {
          let t = [];
          for (let [r, n] of U)
            if (n < e) {
              let e = E.fetchers.get(r);
              u(e, "Expected fetcher: " + r), "loading" === e.state && (K(r), U.delete(r), t.push(r))
            } return q(t), t.length > 0
        }

        function J(e) {
          let t = [];
          return j.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), j.delete(n))
          })), t
        }

        function Y(e, t) {
          if (i && l && s) {
            let r = t.map((e => Ce(e, E.loaderData))),
              n = l(e, r) || e.key,
              a = i[n];
            if ("number" == typeof a) return a
          }
          return null
        }
        return p = {
          get basename() {
            return e.basename
          },
          get state() {
            return E
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
              return F(t, r)
            })), E.initialized || F(n.Pop, E.location), p
          },
          subscribe: function(e) {
            return a.add(e), () => a.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (i = e, s = t, l = r || (e => e.key), !c && E.navigation === ee) {
              c = !0;
              let e = Y(E.location, E.matches);
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
              submission: i,
              error: l
            } = ae(t, r), s = f(E.location, a, r && r.state);
            s = o({}, s, e.history.encodeLocation(s));
            let c = r && null != r.replace ? r.replace : void 0,
              u = n.Push;
            !0 === c ? u = n.Replace : !1 === c || null != i && Ee(i.formMethod) && i.formAction === E.location.pathname + E.location.search && (u = n.Replace);
            let d = r && "preventScrollReset" in r ? !0 === r.preventScrollReset : void 0;
            return await F(u, s, {
              submission: i,
              pendingError: l,
              preventScrollReset: d,
              replace: r && r.replace
            })
          },
          fetch: function(r, n, a, i) {
            if (re) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            A.has(r) && K(r);
            let l = b(t, a, e.basename);
            if (!l) return void H(r, n, me(404, {
              pathname: a
            }));
            let {
              path: s,
              submission: c
            } = ae(a, i, !0), d = xe(l, s);
            c && Ee(c.formMethod) ? async function(r, n, a, i, l, s) {
              if (W(), _.delete(r), !i.route.action) {
                let e = me(405, {
                  method: s.formMethod,
                  pathname: a,
                  routeId: n
                });
                return void H(r, n, e)
              }
              let c = E.fetchers.get(r),
                d = o({
                  state: "submitting"
                }, s, {
                  data: c && c.data,
                  " _hasFetcherDoneAnything ": !0
                });
              E.fetchers.set(r, d), T({
                fetchers: new Map(E.fetchers)
              });
              let h = new AbortController,
                f = ce(a, h.signal, s);
              A.set(r, h);
              let v = await se("action", f, i, l, p.basename);
              if (f.signal.aborted) return void(A.get(r) === h && A.delete(r));
              if (be(v)) {
                A.delete(r), O.add(r);
                let e = o({
                  state: "loading"
                }, s, {
                  data: void 0,
                  " _hasFetcherDoneAnything ": !0
                });
                return E.fetchers.set(r, e), T({
                  fetchers: new Map(E.fetchers)
                }), I(E, v, {
                  isFetchActionRedirect: !0
                })
              }
              if (we(v)) return void H(r, n, v.error);
              ye(v) && u(!1, "defer() is not supported in actions");
              let g = E.navigation.location || E.location,
                y = ce(g, h.signal),
                w = "idle" !== E.navigation.state ? b(t, E.navigation.location, e.basename) : E.matches;
              u(w, "Didn't find any matches after fetcher action");
              let R = ++L;
              U.set(r, R);
              let S = o({
                state: "loading",
                data: v.data
              }, s, {
                " _hasFetcherDoneAnything ": !0
              });
              E.fetchers.set(r, S);
              let [F, N] = oe(E, w, s, g, C, x, P, {
                [i.route.id]: v.data
              }, void 0, _);
              N.filter((e => {
                let [t] = e;
                return t !== r
              })).forEach((e => {
                let [t] = e, r = E.fetchers.get(t), n = {
                  state: "loading",
                  data: r && r.data,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  " _hasFetcherDoneAnything ": !0
                };
                E.fetchers.set(t, n), A.set(t, h)
              })), T({
                fetchers: new Map(E.fetchers)
              });
              let {
                results: $,
                loaderResults: K,
                fetcherResults: q
              } = await B(E.matches, w, F, N, y);
              if (h.signal.aborted) return;
              U.delete(r), A.delete(r), N.forEach((e => {
                let [t] = e;
                return A.delete(t)
              }));
              let J = ve($);
              if (J) return I(E, J);
              let {
                loaderData: Y,
                errors: V
              } = de(E, E.matches, F, K, void 0, N, q, j), X = {
                state: "idle",
                data: v.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              E.fetchers.set(r, X);
              let G = z(R);
              "loading" === E.navigation.state && R > M ? (u(D, "Expected pending action"), m && m.abort(), k(E.navigation.location, {
                matches: w,
                loaderData: Y,
                errors: V,
                fetchers: new Map(E.fetchers)
              })) : (T(o({
                errors: V,
                loaderData: he(E.loaderData, Y, w, V)
              }, G ? {
                fetchers: new Map(E.fetchers)
              } : {})), C = !1)
            }(r, n, s, d, l, c): (_.set(r, [s, d, l]), async function(e, t, r, n, a, i) {
              let l = E.fetchers.get(e),
                s = o({
                  state: "loading",
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0
                }, i, {
                  data: l && l.data,
                  " _hasFetcherDoneAnything ": !0
                });
              E.fetchers.set(e, s), T({
                fetchers: new Map(E.fetchers)
              });
              let c = new AbortController,
                d = ce(r, c.signal);
              A.set(e, c);
              let h = await se("loader", d, n, a, p.basename);
              if (ye(h) && (h = await Re(h, d.signal, !0) || h), A.get(e) === c && A.delete(e), d.signal.aborted) return;
              if (be(h)) return void await I(E, h);
              if (we(h)) {
                let r = fe(E.matches, t);
                return E.fetchers.delete(e), void T({
                  fetchers: new Map(E.fetchers),
                  errors: {
                    [r.route.id]: h.error
                  }
                })
              }
              u(!ye(h), "Unhandled fetcher deferred data");
              let f = {
                state: "idle",
                data: h.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              E.fetchers.set(e, f), T({
                fetchers: new Map(E.fetchers)
              })
            }(r, n, s, d, l, c))
          },
          revalidate: function() {
            W(), T({
              revalidation: "loading"
            }), "submitting" !== E.navigation.state && ("idle" !== E.navigation.state ? F(D || E.historyAction, E.navigation.location, {
              overrideNavigation: E.navigation
            }) : F(E.historyAction, E.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: N,
          deleteFetcher: $,
          dispose: function() {
            r && r(), a.clear(), m && m.abort(), E.fetchers.forEach(((e, t) => $(t)))
          },
          _internalFetchControllers: A,
          _internalActiveDeferreds: j
        }, p
      }

      function ae(e, t, r) {
        void 0 === r && (r = !1);
        let n, a = "string" == typeof e ? e : p(e);
        if (!t || ! function(e) {
            return null != e && "formData" in e
          }(t)) return {
          path: a
        };
        if (t.formMethod && (o = t.formMethod, !G.has(o))) return {
          path: a,
          error: me(405, {
            method: t.formMethod
          })
        };
        var o;
        if (t.formData && (n = {
            formMethod: t.formMethod || "get",
            formAction: ge(a),
            formEncType: t && t.formEncType || "application/x-www-form-urlencoded",
            formData: t.formData
          }, Ee(n.formMethod))) return {
          path: a,
          submission: n
        };
        let i = m(a);
        try {
          let e = ue(t.formData);
          r && i.search && Se(i.search) && e.append("index", ""), i.search = "?" + e
        } catch (e) {
          return {
            path: a,
            error: me(400)
          }
        }
        return {
          path: p(i),
          submission: n
        }
      }

      function oe(e, t, r, n, a, o, i, l, s, c) {
        let u = s ? Object.values(s)[0] : l ? Object.values(l)[0] : void 0,
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
          }(e.loaderData, e.matches[i], t) || o.some((e => e === t.route.id)) || le(e.location, e.matches[i], r, n, t, a, u)))),
          h = [];
        return c && c.forEach(((e, t) => {
          let [n, o, l] = e;
          (i.includes(t) || a && le(n, o, r, n, o, a, u)) && h.push([t, n, o, l])
        })), [d, h]
      }

      function ie(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function le(e, t, r, n, a, i, l) {
        let s = v(e),
          c = t.params,
          u = v(n),
          d = a.params,
          h = ie(t, a) || s.toString() === u.toString() || s.search !== u.search || i;
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
      async function se(e, t, r, n, a, o, i, l) {
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
          s = y.error, c = e
        } finally {
          t.signal.removeEventListener("abort", f)
        }
        if (null != (m = c) && "number" == typeof m.status && "string" == typeof m.statusText && "object" == typeof m.headers && void 0 !== m.body) {
          let e, l = c.status;
          if (Q.has(l)) {
            let e = c.headers.get("Location");
            if (u(e, "Redirects returned/thrown from loaders/actions must have a Location header"), !/^[a-z+]+:\/\//i.test(e) && !e.startsWith("//")) {
              let o = T(e, j(n.slice(0, n.indexOf(r) + 1)).map((e => e.pathnameBase)), new URL(t.url).pathname);
              if (u(p(o), "Unable to resolve redirect location: " + e), a) {
                let e = o.pathname;
                o.pathname = "/" === e ? a : k([a, e])
              }
              e = p(o)
            }
            if (o) throw c.headers.set("Location", e), c;
            return {
              type: y.redirect,
              status: l,
              location: e,
              revalidate: null !== c.headers.get("X-Remix-Revalidate")
            }
          }
          if (i) throw {
            type: s || y.data,
            response: c
          };
          let d = c.headers.get("Content-Type");
          return e = d && /\bapplication\/json\b/.test(d) ? await c.json() : await c.text(), s === y.error ? {
            type: s,
            error: new z(l, c.statusText, e),
            headers: c.headers
          } : {
            type: y.data,
            data: e,
            statusCode: c.status,
            headers: c.headers
          }
        }
        var m;
        return s === y.error ? {
          type: s,
          error: c
        } : c instanceof H ? {
          type: y.deferred,
          deferredData: c
        } : {
          type: y.data,
          data: c
        }
      }

      function ce(e, t, r) {
        let n = v(ge(e)).toString(),
          a = {
            signal: t
          };
        if (r && Ee(r.formMethod)) {
          let {
            formMethod: e,
            formEncType: t,
            formData: n
          } = r;
          a.method = e.toUpperCase(), a.body = "application/x-www-form-urlencoded" === t ? ue(n) : n
        }
        return new Request(n, a)
      }

      function ue(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) u("string" == typeof n, 'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'), t.append(r, n);
        return t
      }

      function de(e, t, r, n, a, i, l, s) {
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
            if (u(!be(r), "Cannot handle redirect results in processLoaderData"), we(r)) {
              let t = fe(e, h),
                a = r.error;
              n && (a = Object.values(n)[0], n = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = a), i[h] = void 0, s || (s = !0, o = J(r.error) ? r.error.status : 500), r.headers && (c[h] = r.headers)
            } else ye(r) ? (a && a.set(h, r.deferredData), i[h] = r.deferredData.data) : (i[h] = r.data, null == r.statusCode || 200 === r.statusCode || s || (o = r.statusCode), r.headers && (c[h] = r.headers))
          })), n && (l = n, i[Object.keys(n)[0]] = void 0), {
            loaderData: i,
            errors: l,
            statusCode: o || 200,
            loaderHeaders: c
          }
        }(t, r, n, a, s);
        for (let t = 0; t < i.length; t++) {
          let [r, , n] = i[t];
          u(void 0 !== l && void 0 !== l[t], "Did not find corresponding fetcher result");
          let a = l[t];
          if (we(a)) {
            let t = fe(e.matches, n.route.id);
            d && d[t.route.id] || (d = o({}, d, {
              [t.route.id]: a.error
            })), e.fetchers.delete(r)
          } else {
            if (be(a)) throw new Error("Unhandled fetcher revalidation redirect");
            if (ye(a)) throw new Error("Unhandled fetcher deferred data"); {
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
        }
        return {
          loaderData: c,
          errors: d
        }
      }

      function he(e, t, r, n) {
        let a = o({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && (a[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return a
      }

      function fe(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function pe(e) {
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

      function me(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: a
        } = void 0 === t ? {} : t, o = "Unknown Server Error", i = "Unknown @remix-run/router error";
        return 400 === e ? (o = "Bad Request", i = a && r && n ? "You made a " + a + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "Cannot submit binary form data using GET") : 403 === e ? (o = "Forbidden", i = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (o = "Not Found", i = 'No route matches URL "' + r + '"') : 405 === e && (o = "Method Not Allowed", a && r && n ? i = "You made a " + a.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : a && (i = 'Invalid request method "' + a.toUpperCase() + '"')), new z(e || 500, o, new Error(i), !0)
      }

      function ve(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (be(r)) return r
        }
      }

      function ge(e) {
        return p(o({}, "string" == typeof e ? m(e) : e, {
          hash: ""
        }))
      }

      function ye(e) {
        return e.type === y.deferred
      }

      function we(e) {
        return e.type === y.error
      }

      function be(e) {
        return (e && e.type) === y.redirect
      }

      function Ee(e) {
        return V.has(e)
      }
      async function De(e, t, r, n, a, o) {
        for (let i = 0; i < r.length; i++) {
          let l = r[i],
            s = t[i],
            c = e.find((e => e.route.id === s.route.id)),
            u = null != c && !ie(c, s) && void 0 !== (o && o[s.route.id]);
          ye(l) && (a || u) && await Re(l, n, a).then((e => {
            e && (r[i] = e || r[i])
          }))
        }
      }
      async function Re(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: y.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: y.error,
              error: e
            }
          }
          return {
            type: y.data,
            data: e.deferredData.data
          }
        }
      }

      function Se(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function Ce(e, t) {
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

      function xe(e, t) {
        let r = "string" == typeof t ? m(t).search : t.search;
        if (e[e.length - 1].route.index && Se(r || "")) return e[e.length - 1];
        let n = j(e);
        return n[n.length - 1]
      }

      function Pe() {
        return Pe = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Pe.apply(this, arguments)
      }
      const Ae = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        {
          useState: Le,
          useEffect: Me,
          useLayoutEffect: Ue,
          useDebugValue: Oe
        } = a;

      function _e(e) {
        const t = e.getSnapshot,
          r = e.value;
        try {
          const e = t();
          return !Ae(r, e)
        } catch (e) {
          return !0
        }
      }
      const je = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t, r) {
          return t()
        } : function(e, t, r) {
          const n = t(),
            [{
              inst: a
            }, o] = Le({
              inst: {
                value: n,
                getSnapshot: t
              }
            });
          return Ue((() => {
            a.value = n, a.getSnapshot = t, _e(a) && o({
              inst: a
            })
          }), [e, n, t]), Me((() => (_e(a) && o({
            inst: a
          }), e((() => {
            _e(a) && o({
              inst: a
            })
          })))), [e]), Oe(n), n
        },
        Te = "useSyncExternalStore" in a ? a.useSyncExternalStore : je,
        ke = a.createContext(null),
        Fe = a.createContext(null),
        Ne = a.createContext(null),
        Ie = a.createContext(null),
        Be = a.createContext(null),
        We = a.createContext(null),
        He = a.createContext({
          outlet: null,
          matches: []
        }),
        $e = a.createContext(null);

      function Ke(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        qe() || u(!1);
        let {
          basename: n,
          navigator: o
        } = a.useContext(Be), {
          hash: i,
          pathname: l,
          search: s
        } = et(e, {
          relative: r
        }), c = l;
        return "/" !== n && (c = "/" === l ? n : k([n, l])), o.createHref({
          pathname: c,
          search: s,
          hash: i
        })
      }

      function qe() {
        return null != a.useContext(We)
      }

      function ze() {
        return qe() || u(!1), a.useContext(We).location
      }

      function Je() {
        return a.useContext(We).navigationType
      }

      function Ye(e) {
        qe() || u(!1);
        let {
          pathname: t
        } = ze();
        return a.useMemo((() => A(e, t)), [t, e])
      }

      function Ve() {
        qe() || u(!1);
        let {
          basename: e,
          navigator: t
        } = a.useContext(Be), {
          matches: r
        } = a.useContext(He), {
          pathname: n
        } = ze(), o = JSON.stringify(j(r).map((e => e.pathnameBase))), i = a.useRef(!1);
        return a.useEffect((() => {
          i.current = !0
        })), a.useCallback((function(r, a) {
          if (void 0 === a && (a = {}), !i.current) return;
          if ("number" == typeof r) return void t.go(r);
          let l = T(r, JSON.parse(o), n, "path" === a.relative);
          "/" !== e && (l.pathname = "/" === l.pathname ? e : k([e, l.pathname])), (a.replace ? t.replace : t.push)(l, a.state, a)
        }), [e, t, o, n])
      }
      const Xe = a.createContext(null);

      function Ge() {
        return a.useContext(Xe)
      }

      function Qe(e) {
        let t = a.useContext(He).outlet;
        return t ? a.createElement(Xe.Provider, {
          value: e
        }, t) : t
      }

      function Ze() {
        let {
          matches: e
        } = a.useContext(He), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function et(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: n
        } = a.useContext(He), {
          pathname: o
        } = ze(), i = JSON.stringify(j(n).map((e => e.pathnameBase)));
        return a.useMemo((() => T(e, JSON.parse(i), o, "path" === r)), [e, i, o, r])
      }

      function tt(e, t) {
        qe() || u(!1);
        let {
          navigator: r
        } = a.useContext(Be), o = a.useContext(Ne), {
          matches: i
        } = a.useContext(He), l = i[i.length - 1], s = l ? l.params : {}, c = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let d, h = ze();
        if (t) {
          var f;
          let e = "string" == typeof t ? m(t) : t;
          "/" === c || (null == (f = e.pathname) ? void 0 : f.startsWith(c)) || u(!1), d = e
        } else d = h;
        let p = d.pathname || "/",
          v = b(e, {
            pathname: "/" === c ? p : p.slice(c.length) || "/"
          }),
          g = ot(v && v.map((e => Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: k([c, r.encodeLocation ? r.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? c : k([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), i, o || void 0);
        return t && g ? a.createElement(We.Provider, {
          value: {
            location: Pe({
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

      function rt() {
        let e = gt(),
          t = J(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
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
      class nt extends a.Component {
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
          return this.state.error ? a.createElement(He.Provider, {
            value: this.props.routeContext
          }, a.createElement($e.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function at(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, o = a.useContext(ke);
        return o && r.route.errorElement && (o._deepestRenderedBoundaryId = r.route.id), a.createElement(He.Provider, {
          value: t
        }, n)
      }

      function ot(e, t, r) {
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
            c = r ? i.route.errorElement || a.createElement(rt, null) : null,
            u = t.concat(n.slice(0, l + 1)),
            d = () => a.createElement(at, {
              match: i,
              routeContext: {
                outlet: e,
                matches: u
              }
            }, s ? c : void 0 !== i.route.element ? i.route.element : e);
          return r && (i.route.errorElement || 0 === l) ? a.createElement(nt, {
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
      var it, lt, st;

      function ct(e) {
        let t = a.useContext(Ne);
        return t || u(!1), t
      }

      function ut(e) {
        let t = function(e) {
            let t = a.useContext(He);
            return t || u(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || u(!1), r.route.id
      }

      function dt() {
        return ct(lt.UseNavigation).navigation
      }

      function ht() {
        let e = function(e) {
            let t = a.useContext(Fe);
            return t || u(!1), t
          }(it.UseRevalidator),
          t = ct(lt.UseRevalidator);
        return {
          revalidate: e.router.revalidate,
          state: t.revalidation
        }
      }

      function ft() {
        let {
          matches: e,
          loaderData: t
        } = ct(lt.UseMatches);
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

      function pt() {
        let e = ct(lt.UseLoaderData),
          t = ut(lt.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function mt(e) {
        return ct(lt.UseRouteLoaderData).loaderData[e]
      }

      function vt() {
        let e = ct(lt.UseActionData);
        return a.useContext(He) || u(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function gt() {
        var e;
        let t = a.useContext($e),
          r = ct(lt.UseRouteError),
          n = ut(lt.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[n])
      }

      function yt() {
        let e = a.useContext(Ie);
        return null == e ? void 0 : e._data
      }

      function wt() {
        let e = a.useContext(Ie);
        return null == e ? void 0 : e._error
      }

      function bt(e) {
        let {
          fallbackElement: t,
          router: r
        } = e, n = Te(r.subscribe, (() => r.state), (() => r.state)), o = a.useMemo((() => ({
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
        return a.createElement(Fe.Provider, {
          value: {
            router: r,
            navigator: o,
            static: !1,
            basename: i
          }
        }, a.createElement(Ne.Provider, {
          value: n
        }, a.createElement(Ct, {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: o
        }, r.state.initialized ? a.createElement(xt, null) : t)))
      }

      function Et(e) {
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
        return a.useLayoutEffect((() => s.listen(u)), [s]), a.createElement(Ct, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: s
        })
      }

      function Dt(e) {
        let {
          to: t,
          replace: r,
          state: n,
          relative: o
        } = e;
        qe() || u(!1);
        let i = a.useContext(Ne),
          l = Ve();
        return a.useEffect((() => {
          i && "idle" !== i.navigation.state || l(t, {
            replace: r,
            state: n,
            relative: o
          })
        })), null
      }

      function Rt(e) {
        return Qe(e.context)
      }

      function St(e) {
        u(!1)
      }

      function Ct(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = n.Pop,
          navigator: l,
          static: s = !1
        } = e;
        qe() && u(!1);
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
          let e = M(h, c);
          return null == e ? null : {
            pathname: e,
            search: f,
            hash: p,
            state: v,
            key: g
          }
        }), [c, h, f, p, v, g]);
        return null == y ? null : a.createElement(Be.Provider, {
          value: d
        }, a.createElement(We.Provider, {
          children: r,
          value: {
            location: y,
            navigationType: i
          }
        }))
      }

      function xt(e) {
        let {
          children: t,
          location: r
        } = e, n = a.useContext(Fe);
        return tt(n && !t ? n.router.routes : Ut(t), r)
      }

      function Pt(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return a.createElement(Lt, {
          resolve: n,
          errorElement: r
        }, a.createElement(Mt, null, t))
      }! function(e) {
        e.UseRevalidator = "useRevalidator"
      }(it || (it = {})),
      function(e) {
        e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
      }(lt || (lt = {})),
      function(e) {
        e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
      }(st || (st = {}));
      const At = new Promise((() => {}));
      class Lt extends a.Component {
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
          } = this.props, n = null, o = st.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              o = st.error;
              let e = this.state.error;
              n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, o = void 0 !== n._error ? st.error : void 0 !== n._data ? st.success : st.pending) : (o = st.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else o = st.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (o === st.error && n._error instanceof W) throw At;
          if (o === st.error && !t) throw n._error;
          if (o === st.error) return a.createElement(Ie.Provider, {
            value: n,
            children: t
          });
          if (o === st.success) return a.createElement(Ie.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function Mt(e) {
        let {
          children: t
        } = e, r = yt();
        return "function" == typeof t ? t(r) : a.createElement(a.Fragment, null, t)
      }

      function Ut(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return a.Children.forEach(e, ((e, n) => {
          if (!a.isValidElement(e)) return;
          if (e.type === a.Fragment) return void r.push.apply(r, Ut(e.props.children, t));
          e.type !== St && u(!1), e.props.index && e.props.children && u(!1);
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
          e.props.children && (i.children = Ut(e.props.children, o)), r.push(i)
        })), r
      }

      function Ot(e) {
        return ot(e)
      }

      function _t(e) {
        return e.map((e => {
          let t = Pe({}, e);
          return null == t.hasErrorBoundary && (t.hasErrorBoundary = null != t.errorElement), t.children && (t.children = _t(t.children)), t
        }))
      }

      function jt(e, t) {
        return ne({
          basename: null == t ? void 0 : t.basename,
          history: l({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: _t(e)
        }).initialize()
      }

      function Tt() {
        return Tt = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Tt.apply(this, arguments)
      }

      function kt(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }
      const Ft = "get",
        Nt = "application/x-www-form-urlencoded";

      function It(e) {
        return null != e && "string" == typeof e.tagName
      }

      function Bt(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
            [r, n]
          ])
        }), []))
      }
      const Wt = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
        Ht = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
        $t = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative"];

      function Kt(e, t) {
        return ne({
          basename: null == t ? void 0 : t.basename,
          history: s({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || zt(),
          routes: _t(e)
        }).initialize()
      }

      function qt(e, t) {
        return ne({
          basename: null == t ? void 0 : t.basename,
          history: c({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || zt(),
          routes: _t(e)
        }).initialize()
      }

      function zt() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = Tt({}, t, {
          errors: Jt(t.errors)
        })), t
      }

      function Jt(e) {
        if (!e) return null;
        let t = Object.entries(e),
          r = {};
        for (let [e, n] of t)
          if (n && "RouteErrorResponse" === n.__type) r[e] = new z(n.status, n.statusText, n.data, !0 === n.internal);
          else if (n && "Error" === n.__type) {
          let t = new Error(n.message);
          t.stack = "", r[e] = t
        } else r[e] = n;
        return r
      }

      function Yt(e) {
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
        return a.useLayoutEffect((() => i.listen(c)), [i]), a.createElement(Ct, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: i
        })
      }

      function Vt(e) {
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
        return a.useLayoutEffect((() => i.listen(s)), [i]), a.createElement(Ct, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: i
        })
      }

      function Xt(e) {
        let {
          basename: t,
          children: r,
          history: n
        } = e;
        const [o, i] = a.useState({
          action: n.action,
          location: n.location
        });
        return a.useLayoutEffect((() => n.listen(i)), [n]), a.createElement(Ct, {
          basename: t,
          children: r,
          location: o.location,
          navigationType: o.action,
          navigator: n
        })
      }
      const Gt = a.forwardRef((function(e, t) {
          let {
            onClick: r,
            relative: n,
            reloadDocument: o,
            replace: i,
            state: l,
            target: s,
            to: c,
            preventScrollReset: u
          } = e, d = kt(e, Wt), h = Ke(c, {
            relative: n
          }), f = ir(c, {
            replace: i,
            state: l,
            target: s,
            preventScrollReset: u,
            relative: n
          });
          return a.createElement("a", Tt({}, d, {
            href: h,
            onClick: o ? r : function(e) {
              r && r(e), e.defaultPrevented || f(e)
            },
            ref: t,
            target: s
          }))
        })),
        Qt = a.forwardRef((function(e, t) {
          let {
            "aria-current": r = "page",
            caseSensitive: n = !1,
            className: o = "",
            end: i = !1,
            style: l,
            to: s,
            children: c
          } = e, u = kt(e, Ht), d = et(s, {
            relative: u.relative
          }), h = ze(), f = a.useContext(Ne), {
            navigator: p
          } = a.useContext(Be), m = p.encodeLocation ? p.encodeLocation(d).pathname : d.pathname, v = h.pathname, g = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
          n || (v = v.toLowerCase(), g = g ? g.toLowerCase() : null, m = m.toLowerCase());
          let y, w = v === m || !i && v.startsWith(m) && "/" === v.charAt(m.length),
            b = null != g && (g === m || !i && g.startsWith(m) && "/" === g.charAt(m.length)),
            E = w ? r : void 0;
          y = "function" == typeof o ? o({
            isActive: w,
            isPending: b
          }) : [o, w ? "active" : null, b ? "pending" : null].filter(Boolean).join(" ");
          let D = "function" == typeof l ? l({
            isActive: w,
            isPending: b
          }) : l;
          return a.createElement(Gt, Tt({}, u, {
            "aria-current": E,
            className: y,
            ref: t,
            style: D,
            to: s
          }), "function" == typeof c ? c({
            isActive: w,
            isPending: b
          }) : c)
        })),
        Zt = a.forwardRef(((e, t) => a.createElement(er, Tt({}, e, {
          ref: t
        })))),
        er = a.forwardRef(((e, t) => {
          let {
            reloadDocument: r,
            replace: n,
            method: o = Ft,
            action: i,
            onSubmit: l,
            fetcherKey: s,
            routeId: c,
            relative: u
          } = e, d = kt(e, $t), h = cr(s, c), f = "get" === o.toLowerCase() ? "get" : "post", p = ur(i, {
            relative: u
          });
          return a.createElement("form", Tt({
            ref: t,
            method: f,
            action: p,
            onSubmit: r ? l : e => {
              if (l && l(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                r = (null == t ? void 0 : t.getAttribute("formmethod")) || o;
              h(t || e.currentTarget, {
                method: r,
                replace: n,
                relative: u
              })
            }
          }, d))
        }));

      function tr(e) {
        let {
          getKey: t,
          storageKey: r
        } = e;
        return vr({
          getKey: t,
          storageKey: r
        }), null
      }
      var rr, nr;

      function ar(e) {
        let t = a.useContext(Fe);
        return t || u(!1), t
      }

      function or(e) {
        let t = a.useContext(Ne);
        return t || u(!1), t
      }

      function ir(e, t) {
        let {
          target: r,
          replace: n,
          state: o,
          preventScrollReset: i,
          relative: l
        } = void 0 === t ? {} : t, s = Ve(), c = ze(), u = et(e, {
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

      function lr(e) {
        let t = a.useRef(Bt(e)),
          r = ze(),
          n = a.useMemo((() => function(e, t) {
            let r = Bt(e);
            for (let e of t.keys()) r.has(e) || t.getAll(e).forEach((t => {
              r.append(e, t)
            }));
            return r
          }(r.search, t.current)), [r.search]),
          o = Ve(),
          i = a.useCallback(((e, t) => {
            const r = Bt("function" == typeof e ? e(n) : e);
            o("?" + r, t)
          }), [o, n]);
        return [n, i]
      }

      function sr() {
        return cr()
      }

      function cr(e, t) {
        let {
          router: r
        } = ar(rr.UseSubmitImpl), n = ur();
        return a.useCallback((function(a, o) {
          if (void 0 === o && (o = {}), "undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
          let {
            method: i,
            encType: l,
            formData: s,
            url: c
          } = function(e, t, r) {
            let n, a, o, i;
            if (It(l = e) && "form" === l.tagName.toLowerCase()) {
              let l = r.submissionTrigger;
              n = r.method || e.getAttribute("method") || Ft, a = r.action || e.getAttribute("action") || t, o = r.encType || e.getAttribute("enctype") || Nt, i = new FormData(e), l && l.name && i.append(l.name, l.value)
            } else if (function(e) {
                return It(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return It(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let l = e.form;
              if (null == l) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              n = r.method || e.getAttribute("formmethod") || l.getAttribute("method") || Ft, a = r.action || e.getAttribute("formaction") || l.getAttribute("action") || t, o = r.encType || e.getAttribute("formenctype") || l.getAttribute("enctype") || Nt, i = new FormData(l), e.name && i.append(e.name, e.value)
            } else {
              if (It(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              if (n = r.method || Ft, a = r.action || t, o = r.encType || Nt, e instanceof FormData) i = e;
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
            formData: s,
            formMethod: i,
            formEncType: l
          };
          e ? (null == t && u(!1), r.fetch(e, t, d, h)) : r.navigate(d, h)
        }), [n, r, e, t])
      }

      function ur(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: n
        } = a.useContext(Be), o = a.useContext(He);
        o || u(!1);
        let [i] = o.matches.slice(-1), l = Tt({}, et(e || ".", {
          relative: r
        })), s = ze();
        if (null == e && (l.search = s.search, l.hash = s.hash, i.route.index)) {
          let e = new URLSearchParams(l.search);
          e.delete("index"), l.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !i.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (l.pathname = "/" === l.pathname ? n : k([n, l.pathname])), p(l)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
      })(rr || (rr = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(nr || (nr = {}));
      let dr = 0;

      function hr() {
        var e;
        let {
          router: t
        } = ar(rr.UseFetcher), r = a.useContext(He);
        r || u(!1);
        let n = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
        null == n && u(!1);
        let [o] = a.useState((() => String(++dr))), [i] = a.useState((() => (n || u(!1), function(e, t) {
          return a.forwardRef(((r, n) => a.createElement(er, Tt({}, r, {
            ref: n,
            fetcherKey: e,
            routeId: t
          }))))
        }(o, n)))), [l] = a.useState((() => e => {
          t || u(!1), n || u(!1), t.fetch(o, n, e)
        })), s = cr(o, n), c = t.getFetcher(o), d = a.useMemo((() => Tt({
          Form: i,
          submit: s,
          load: l
        }, c)), [c, i, s, l]);
        return a.useEffect((() => () => {
          t ? t.deleteFetcher(o) : console.warn("No fetcher available to clean up from useFetcher()")
        }), [t, o]), d
      }

      function fr() {
        return [...or(nr.UseFetchers).fetchers.values()]
      }
      const pr = "react-router-scroll-positions";
      let mr = {};

      function vr(e) {
        let {
          getKey: t,
          storageKey: r
        } = void 0 === e ? {} : e, {
          router: n
        } = ar(rr.UseScrollRestoration), {
          restoreScrollPosition: o,
          preventScrollReset: i
        } = or(nr.UseScrollRestoration), l = ze(), s = ft(), c = dt();
        a.useEffect((() => (window.history.scrollRestoration = "manual", () => {
          window.history.scrollRestoration = "auto"
        })), []), gr(a.useCallback((() => {
          if ("idle" === c.state) {
            let e = (t ? t(l, s) : null) || l.key;
            mr[e] = window.scrollY
          }
          sessionStorage.setItem(r || pr, JSON.stringify(mr)), window.history.scrollRestoration = "auto"
        }), [r, t, c.state, l, s])), "undefined" != typeof document && (a.useLayoutEffect((() => {
          try {
            let e = sessionStorage.getItem(r || pr);
            e && (mr = JSON.parse(e))
          } catch (e) {}
        }), [r]), a.useLayoutEffect((() => {
          let e = null == n ? void 0 : n.enableScrollRestoration(mr, (() => window.scrollY), t);
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

      function gr(e) {
        a.useEffect((() => (window.addEventListener("beforeunload", e), () => {
          window.removeEventListener("beforeunload", e)
        })), [e])
      }
    }
  }
]);