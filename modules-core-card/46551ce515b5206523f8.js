/*! For license information please see 46551ce515b5206523f8.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [893], {
    8893: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => I,
        Await: () => Ut,
        BrowserRouter: () => An,
        Form: () => Un,
        HashRouter: () => Pn,
        Link: () => Mn,
        MemoryRouter: () => Pt,
        NavLink: () => Ln,
        Navigate: () => xt,
        NavigationType: () => n,
        Outlet: () => kt,
        Route: () => Ct,
        Router: () => Mt,
        RouterProvider: () => At,
        Routes: () => Lt,
        ScrollRestoration: () => Tn,
        UNSAFE_DataRouterContext: () => ze,
        UNSAFE_DataRouterStateContext: () => Ie,
        UNSAFE_LocationContext: () => $e,
        UNSAFE_NavigationContext: () => We,
        UNSAFE_RouteContext: () => Ke,
        UNSAFE_useScrollRestoration: () => Vn,
        createBrowserRouter: () => En,
        createHashRouter: () => Rn,
        createMemoryRouter: () => It,
        createPath: () => d,
        createRoutesFromChildren: () => Ft,
        createRoutesFromElements: () => Ft,
        createSearchParams: () => gn,
        defer: () => $,
        generatePath: () => x,
        isRouteErrorResponse: () => q,
        json: () => z,
        matchPath: () => k,
        matchRoutes: () => m,
        parsePath: () => h,
        redirect: () => K,
        renderMatches: () => Bt,
        resolvePath: () => L,
        unstable_HistoryRouter: () => xn,
        unstable_useBlocker: () => St,
        unstable_usePrompt: () => Gn,
        useActionData: () => bt,
        useAsyncError: () => Rt,
        useAsyncValue: () => Et,
        useBeforeUnload: () => Xn,
        useFetcher: () => Hn,
        useFetchers: () => qn,
        useFormAction: () => $n,
        useHref: () => Ye,
        useInRouterContext: () => Je,
        useLinkClickHandler: () => zn,
        useLoaderData: () => gt,
        useLocation: () => Ve,
        useMatch: () => Ge,
        useMatches: () => vt,
        useNavigate: () => Qe,
        useNavigation: () => pt,
        useNavigationType: () => Xe,
        useOutlet: () => tt,
        useOutletContext: () => et,
        useParams: () => rt,
        useResolvedPath: () => nt,
        useRevalidator: () => mt,
        useRouteError: () => wt,
        useRouteLoaderData: () => yt,
        useRoutes: () => at,
        useSearchParams: () => In,
        useSubmit: () => Nn
      });
      var n, a, o = r(822);

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, i.apply(this, arguments)
      }

      function s(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: a,
          v5Compat: o = !1
        } = e;
        t = r.map(((e, t) => m(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = f(null == a ? t.length - 1 : a),
          s = n.Pop,
          l = null;

        function f(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function p() {
          return t[i]
        }

        function m(e, r, n) {
          void 0 === r && (r = null);
          let a = u(t ? p().pathname : "/", e, r, n);
          return c("/" === a.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), a
        }

        function v(e) {
          return "string" == typeof e ? e : d(e)
        }
        return {
          get index() {
            return i
          },
          get action() {
            return s
          },
          get location() {
            return p()
          },
          createHref: v,
          createURL: e => new URL(v(e), "http://localhost"),
          encodeLocation(e) {
            let t = "string" == typeof e ? h(e) : e;
            return {
              pathname: t.pathname || "",
              search: t.search || "",
              hash: t.hash || ""
            }
          },
          push(e, r) {
            s = n.Push;
            let a = m(e, r);
            i += 1, t.splice(i, t.length, a), o && l && l({
              action: s,
              location: a,
              delta: 1
            })
          },
          replace(e, r) {
            s = n.Replace;
            let a = m(e, r);
            t[i] = a, o && l && l({
              action: s,
              location: a,
              delta: 0
            })
          },
          go(e) {
            s = n.Pop;
            let r = f(i + e),
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

      function l(e, t) {
        if (!1 === e || null == e) throw new Error(t)
      }

      function c(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function u(e, t, r, n) {
        return void 0 === r && (r = null), i({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? h(t) : t, {
          state: r,
          key: t && t.key || n || Math.random().toString(36).substr(2, 8)
        })
      }

      function d(e) {
        let {
          pathname: t = "/",
          search: r = "",
          hash: n = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n), t
      }

      function h(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let n = e.indexOf("?");
          n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
        }
        return t
      }! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(n || (n = {})),
      function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(a || (a = {}));
      const f = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function p(e, t, r, n) {
        return void 0 === r && (r = []), void 0 === n && (n = {}), e.map(((e, a) => {
          let o = [...r, a],
            s = "string" == typeof e.id ? e.id : o.join("-");
          if (l(!0 !== e.index || !e.children, "Cannot specify children on an index route"), l(!n[s], 'Found a route id collision on id "' + s + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = i({}, e, {
              hasErrorBoundary: t(e),
              id: s
            });
            return n[s] = r, r
          } {
            let r = i({}, e, {
              id: s,
              hasErrorBoundary: t(e),
              children: void 0
            });
            return n[s] = r, e.children && (r.children = p(e.children, t, o, n)), r
          }
        }))
      }

      function m(e, t, r) {
        void 0 === r && (r = "/");
        let n = M(("string" == typeof t ? h(t) : t).pathname || "/", r);
        if (null == n) return null;
        let a = v(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(a);
        let o = null;
        for (let e = 0; null == o && e < a.length; ++e) o = P(a[e], C(n));
        return o
      }

      function v(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e
          };
          i.relativePath.startsWith("/") && (l(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
          let s = _([n, i.relativePath]),
            c = r.concat(i);
          e.children && e.children.length > 0 && (l(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), v(e.children, t, c, s)), (null != e.path || e.index) && t.push({
            path: s,
            score: A(s, e.index),
            routesMeta: c
          })
        };
        return e.forEach(((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of g(e.path)) a(e, t, r);
          else a(e, t)
        })), t
      }

      function g(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === n.length) return a ? [o, ""] : [o];
        let i = g(n.join("/")),
          s = [];
        return s.push(...i.map((e => "" === e ? o : [o, e].join("/")))), a && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const y = /^:\w+$/,
        b = 3,
        w = 2,
        E = 1,
        R = 10,
        D = -2,
        S = e => "*" === e;

      function A(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(S) && (n += D), t && (n += w), r.filter((e => !S(e))).reduce(((e, t) => e + (y.test(t) ? b : "" === t ? E : R)), n)
      }

      function P(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, a = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            s = e === r.length - 1,
            l = "/" === a ? t : t.slice(a.length) || "/",
            c = k({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: s
            }, l);
          if (!c) return null;
          Object.assign(n, c.params);
          let u = i.route;
          o.push({
            params: n,
            pathname: _([a, c.pathname]),
            pathnameBase: j(_([a, c.pathnameBase])),
            route: u
          }), "/" !== c.pathnameBase && (a = _([a, c.pathnameBase]))
        }
        return o
      }

      function x(e, t) {
        void 0 === t && (t = {});
        let r = e;
        return r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (c(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*")), (r.startsWith("/") ? "/" : "") + r.split(/\/+/).map(((e, r, n) => {
          if (r === n.length - 1 && "*" === e) return t["*"];
          const a = e.match(/^:(\w+)(\??)$/);
          if (a) {
            const [, e, r] = a;
            let n = t[e];
            return "?" === r ? null == n ? "" : n : (null == n && l(!1, 'Missing ":' + e + '" param'), n)
          }
          return e.replace(/\?$/g, "")
        })).filter((e => !!e)).join("/")
      }

      function k(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), c("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let n = [],
            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (n.push(t), "/([^\\/]+)")));
          return e.endsWith("*") ? (n.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n]
        }(e.path, e.caseSensitive, e.end), a = t.match(r);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          s = a.slice(1);
        return {
          params: n.reduce(((e, t, r) => {
            if ("*" === t) {
              let e = s[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
              try {
                return decodeURIComponent(e)
              } catch (r) {
                return c(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(s[r] || "", t), e
          }), {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function C(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return c(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function M(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }

      function L(e, t) {
        void 0 === t && (t = "/");
        let {
          pathname: r,
          search: n = "",
          hash: a = ""
        } = "string" == typeof e ? h(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: o,
          search: F(n),
          hash: B(a)
        }
      }

      function U(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function O(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function T(e, t, r, n) {
        let a;
        void 0 === n && (n = !1), "string" == typeof e ? a = h(e) : (a = i({}, e), l(!a.pathname || !a.pathname.includes("?"), U("?", "pathname", "search", a)), l(!a.pathname || !a.pathname.includes("#"), U("#", "pathname", "hash", a)), l(!a.search || !a.search.includes("#"), U("#", "search", "hash", a)));
        let o, s = "" === e || "" === a.pathname,
          c = s ? "/" : a.pathname;
        if (n || null == c) o = r;
        else {
          let e = t.length - 1;
          if (c.startsWith("..")) {
            let t = c.split("/");
            for (;
              ".." === t[0];) t.shift(), e -= 1;
            a.pathname = t.join("/")
          }
          o = e >= 0 ? t[e] : "/"
        }
        let u = L(a, o),
          d = c && "/" !== c && c.endsWith("/"),
          f = (s || "." === c) && r.endsWith("/");
        return u.pathname.endsWith("/") || !d && !f || (u.pathname += "/"), u
      }
      const _ = e => e.join("/").replace(/\/\/+/g, "/"),
        j = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        F = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        B = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        z = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            n = new Headers(r.headers);
          return n.has("Content-Type") || n.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), i({}, r, {
            headers: n
          }))
        };
      class I extends Error {}
      class N {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], l(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
          let n = () => r(new I("Deferred data aborted"));
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
          return this.controller.signal.aborted && r instanceof I ? (this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
          return l(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: W(n)
            })
          }), {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function W(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }
      const $ = function(e, t) {
          return void 0 === t && (t = {}), new N(e, "number" == typeof t ? {
            status: t
          } : t)
        },
        K = function(e, t) {
          void 0 === t && (t = 302);
          let r = t;
          "number" == typeof r ? r = {
            status: r
          } : void 0 === r.status && (r.status = 302);
          let n = new Headers(r.headers);
          return n.set("Location", e), new Response(null, i({}, r, {
            headers: n
          }))
        };
      class H {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function q(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const Y = ["post", "put", "patch", "delete"],
        J = new Set(Y),
        V = ["get", ...Y],
        X = new Set(V),
        G = new Set([301, 302, 303, 307, 308]),
        Q = new Set([307, 308]),
        Z = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        ee = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        te = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0
        },
        re = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ne = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        ae = !ne,
        oe = e => Boolean(e.hasErrorBoundary);

      function ie(e) {
        l(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
        let t, r = e.detectErrorBoundary || oe,
          o = {},
          s = p(e.routes, r, void 0, o),
          d = null,
          h = new Set,
          f = null,
          v = null,
          g = null,
          y = null != e.hydrationData,
          b = m(s, e.history.location, e.basename),
          w = null;
        if (null == b) {
          let t = be(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: n
            } = ye(s);
          b = r, w = {
            [n.id]: t
          }
        }
        let E, R, D = !(b.some((e => e.route.lazy)) || b.some((e => e.route.loader)) && null == e.hydrationData),
          S = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: b,
            initialized: D,
            navigation: Z,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || w,
            fetchers: new Map,
            blockers: new Map
          },
          A = n.Pop,
          P = !1,
          x = !1,
          k = !1,
          C = [],
          L = [],
          U = new Map,
          O = 0,
          T = -1,
          _ = new Map,
          j = new Set,
          F = new Map,
          B = new Map,
          z = new Map,
          I = !1;

        function N(e) {
          S = i({}, S, e), h.forEach((e => e(S)))
        }

        function W(r, a) {
          var o, l;
          let c, u = null != S.actionData && null != S.navigation.formMethod && Ae(S.navigation.formMethod) && "loading" === S.navigation.state && !0 !== (null == (o = r.state) ? void 0 : o._isRedirect);
          c = a.actionData ? Object.keys(a.actionData).length > 0 ? a.actionData : null : u ? S.actionData : null;
          let d = a.loaderData ? ve(S.loaderData, a.loaderData, a.matches || [], a.errors) : S.loaderData;
          for (let [e] of z) ce(e);
          let h = !0 === P || null != S.navigation.formMethod && Ae(S.navigation.formMethod) && !0 !== (null == (l = r.state) ? void 0 : l._isRedirect);
          t && (s = t, t = void 0), N(i({}, a, {
            actionData: c,
            loaderData: d,
            historyAction: A,
            location: r,
            initialized: !0,
            navigation: Z,
            revalidation: "idle",
            restoreScrollPosition: ke(r, a.matches || S.matches),
            preventScrollReset: h,
            blockers: new Map(S.blockers)
          })), x || A === n.Pop || (A === n.Push ? e.history.push(r, r.state) : A === n.Replace && e.history.replace(r, r.state)), A = n.Pop, P = !1, x = !1, k = !1, C = [], L = []
        }
        async function $(c, u, d) {
          R && R.abort(), R = null, A = c, x = !0 === (d && d.startUninterruptedRevalidation),
            function(e, t) {
              if (f && v && g) {
                let r = t.map((e => Ce(e, S.loaderData))),
                  n = v(e, r) || e.key;
                f[n] = g()
              }
            }(S.location, S.matches), P = !0 === (d && d.preventScrollReset);
          let h = t || s,
            p = d && d.overrideNavigation,
            y = m(h, u, e.basename);
          if (!y) {
            let e = be(404, {
                pathname: u.pathname
              }),
              {
                matches: t,
                route: r
              } = ye(h);
            return Ee(), void W(u, {
              matches: t,
              loaderData: {},
              errors: {
                [r.id]: e
              }
            })
          }
          if (w = u, !((b = S.location).pathname !== w.pathname || b.search !== w.search || b.hash === w.hash || d && d.submission && Ae(d.submission.formMethod))) return void W(u, {
            matches: y
          });
          var b, w;
          R = new AbortController;
          let D, M, _ = fe(e.history, u, R.signal, d && d.submission);
          if (d && d.pendingError) M = {
            [ge(y).route.id]: d.pendingError
          };
          else if (d && d.submission && Ae(d.submission.formMethod)) {
            let e = await async function(e, t, s, l, c) {
              let u;
              Y(), N({
                navigation: i({
                  state: "submitting",
                  location: t
                }, s)
              });
              let d = Me(l, t);
              if (d.route.action || d.route.lazy) {
                if (u = await he("action", e, d, l, o, r, E.basename), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else u = {
                type: a.error,
                error: be(405, {
                  method: e.method,
                  pathname: t.pathname,
                  routeId: d.route.id
                })
              };
              if (Se(u)) {
                let e;
                return e = c && null != c.replace ? c.replace : u.location === S.location.pathname + S.location.search, await H(S, u, {
                  submission: s,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (De(u)) {
                let e = ge(l, d.route.id);
                return !0 !== (c && c.replace) && (A = n.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: u.error
                  }
                }
              }
              if (Re(u)) throw be(400, {
                type: "defer-action"
              });
              return {
                pendingActionData: {
                  [d.route.id]: u.data
                }
              }
            }(_, u, d.submission, y, {
              replace: d.replace
            });
            if (e.shortCircuited) return;
            D = e.pendingActionData, M = e.pendingActionError, p = i({
              state: "loading",
              location: u
            }, d.submission), _ = new Request(_.url, {
              signal: _.signal
            })
          }
          let {
            shortCircuited: z,
            loaderData: I,
            errors: $
          } = await async function(r, n, a, o, c, u, d, h) {
            let f = o;
            f || (f = i({
              state: "loading",
              location: n,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            }, c));
            let p = c || (f.formMethod && f.formAction && f.formData && f.formEncType ? {
                formMethod: f.formMethod,
                formAction: f.formAction,
                formData: f.formData,
                formEncType: f.formEncType
              } : void 0),
              m = t || s,
              [v, g] = le(e.history, S, a, p, n, k, C, L, F, m, e.basename, d, h);
            if (Ee((e => !(a && a.some((t => t.route.id === e))) || v && v.some((t => t.route.id === e)))), 0 === v.length && 0 === g.length) return W(n, i({
              matches: a,
              loaderData: {},
              errors: h || null
            }, d ? {
              actionData: d
            } : {})), {
              shortCircuited: !0
            };
            if (!x) {
              g.forEach((e => {
                let t = S.fetchers.get(e.key),
                  r = {
                    state: "loading",
                    data: t && t.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                S.fetchers.set(e.key, r)
              }));
              let e = d || S.actionData;
              N(i({
                navigation: f
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, g.length > 0 ? {
                fetchers: new Map(S.fetchers)
              } : {}))
            }
            T = ++O, g.forEach((e => U.set(e.key, R)));
            let {
              results: y,
              loaderResults: b,
              fetcherResults: w
            } = await q(S.matches, a, v, g, r);
            if (r.signal.aborted) return {
              shortCircuited: !0
            };
            g.forEach((e => U.delete(e.key)));
            let E = we(y);
            if (E) return await H(S, E, {
              replace: u
            }), {
              shortCircuited: !0
            };
            let {
              loaderData: D,
              errors: A
            } = me(S, a, v, b, h, g, w, B);
            return B.forEach(((e, t) => {
                e.subscribe((r => {
                  (r || e.done) && B.delete(t)
                }))
              })),
              function() {
                let e = [];
                for (let t of j) {
                  let r = S.fetchers.get(t);
                  l(r, "Expected fetcher: " + t), "loading" === r.state && (j.delete(t), e.push(t))
                }
                G(e)
              }(), i({
                loaderData: D,
                errors: A
              }, ie(T) || g.length > 0 ? {
                fetchers: new Map(S.fetchers)
              } : {})
          }(_, u, y, p, d && d.submission, d && d.replace, D, M);
          z || (R = null, W(u, i({
            matches: y
          }, D ? {
            actionData: D
          } : {}, {
            loaderData: I,
            errors: $
          })))
        }

        function K(e) {
          return S.fetchers.get(e) || ee
        }
        async function H(t, r, a) {
          var o;
          let {
            submission: s,
            replace: c,
            isFetchActionRedirect: d
          } = void 0 === a ? {} : a;
          r.revalidate && (k = !0);
          let h = u(t.location, r.location, i({
            _isRedirect: !0
          }, d ? {
            _isFetchActionRedirect: !0
          } : {}));
          if (l(h, "Expected a location on the redirect navigation"), re.test(r.location) && ne && void 0 !== (null == (o = window) ? void 0 : o.location)) {
            let t = e.history.createURL(r.location),
              n = null == M(t.pathname, e.basename || "/");
            if (window.location.origin !== t.origin || n) return void(c ? window.location.replace(r.location) : window.location.assign(r.location))
          }
          R = null;
          let f = !0 === c ? n.Replace : n.Push,
            {
              formMethod: p,
              formAction: m,
              formEncType: v,
              formData: g
            } = t.navigation;
          !s && p && m && g && v && (s = {
            formMethod: p,
            formAction: m,
            formEncType: v,
            formData: g
          }), Q.has(r.status) && s && Ae(s.formMethod) ? await $(f, h, {
            submission: i({}, s, {
              formAction: r.location
            }),
            preventScrollReset: P
          }) : await $(f, h, {
            overrideNavigation: {
              state: "loading",
              location: h,
              formMethod: s ? s.formMethod : void 0,
              formAction: s ? s.formAction : void 0,
              formEncType: s ? s.formEncType : void 0,
              formData: s ? s.formData : void 0
            },
            preventScrollReset: P
          })
        }
        async function q(t, n, i, s, l) {
          let c = await Promise.all([...i.map((e => he("loader", l, e, n, o, r, E.basename))), ...s.map((t => t.matches && t.match ? he("loader", fe(e.history, t.path, l.signal), t.match, t.matches, o, r, E.basename) : {
              type: a.error,
              error: be(404, {
                pathname: t.path
              })
            }))]),
            u = c.slice(0, i.length),
            d = c.slice(i.length);
          return await Promise.all([Pe(t, i, u, l.signal, !1, S.loaderData), Pe(t, s.map((e => e.match)), d, l.signal, !0)]), {
            results: c,
            loaderResults: u,
            fetcherResults: d
          }
        }

        function Y() {
          k = !0, C.push(...Ee()), F.forEach(((e, t) => {
            U.has(t) && (L.push(t), X(t))
          }))
        }

        function J(e, t, r) {
          let n = ge(S.matches, t);
          V(e), N({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(S.fetchers)
          })
        }

        function V(e) {
          U.has(e) && X(e), F.delete(e), _.delete(e), j.delete(e), S.fetchers.delete(e)
        }

        function X(e) {
          let t = U.get(e);
          l(t, "Expected fetch controller: " + e), t.abort(), U.delete(e)
        }

        function G(e) {
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
            S.fetchers.set(t, e)
          }
        }

        function ie(e) {
          let t = [];
          for (let [r, n] of _)
            if (n < e) {
              let e = S.fetchers.get(r);
              l(e, "Expected fetcher: " + r), "loading" === e.state && (X(r), _.delete(r), t.push(r))
            } return G(t), t.length > 0
        }

        function ce(e) {
          S.blockers.delete(e), z.delete(e)
        }

        function ue(e, t) {
          let r = S.blockers.get(e) || te;
          l("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state), S.blockers.set(e, t), N({
            blockers: new Map(S.blockers)
          })
        }

        function pe(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === z.size) return;
          z.size > 1 && c(!1, "A router only supports one blocker at a time");
          let a = Array.from(z.entries()),
            [o, i] = a[a.length - 1],
            s = S.blockers.get(o);
          return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? o : void 0
        }

        function Ee(e) {
          let t = [];
          return B.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), B.delete(n))
          })), t
        }

        function ke(e, t) {
          if (f && v && g) {
            let r = t.map((e => Ce(e, S.loaderData))),
              n = v(e, r) || e.key,
              a = f[n];
            if ("number" == typeof a) return a
          }
          return null
        }
        return E = {
          get basename() {
            return e.basename
          },
          get state() {
            return S
          },
          get routes() {
            return s
          },
          initialize: function() {
            if (d = e.history.listen((t => {
                let {
                  action: r,
                  location: n,
                  delta: a
                } = t;
                if (I) return void(I = !1);
                c(0 === z.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let o = pe({
                  currentLocation: S.location,
                  nextLocation: n,
                  historyAction: r
                });
                return o && null != a ? (I = !0, e.history.go(-1 * a), void ue(o, {
                  state: "blocked",
                  location: n,
                  proceed() {
                    ue(o, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: n
                    }), e.history.go(a)
                  },
                  reset() {
                    ce(o), N({
                      blockers: new Map(E.state.blockers)
                    })
                  }
                })) : $(r, n)
              })), S.initialized) return E;
            let t = S.matches.filter((e => e.route.lazy));
            if (0 === t.length) return $(n.Pop, S.location), E;
            let a = t.map((e => de(e.route, r, o)));
            return Promise.all(a).then((() => {
              S.matches.some((e => e.route.loader)) && null == e.hydrationData ? $(n.Pop, S.location) : N({
                initialized: !0
              })
            })), E
          },
          subscribe: function(e) {
            return h.add(e), () => h.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (f = e, g = t, v = r || (e => e.key), !y && S.navigation === Z) {
              y = !0;
              let e = ke(S.location, S.matches);
              null != e && N({
                restoreScrollPosition: e
              })
            }
            return () => {
              f = null, g = null, v = null
            }
          },
          navigate: async function t(r, a) {
            if ("number" == typeof r) return void e.history.go(r);
            let {
              path: o,
              submission: s,
              error: l
            } = se(r, a), c = S.location, d = u(S.location, o, a && a.state);
            d = i({}, d, e.history.encodeLocation(d));
            let h = a && null != a.replace ? a.replace : void 0,
              f = n.Push;
            !0 === h ? f = n.Replace : !1 === h || null != s && Ae(s.formMethod) && s.formAction === S.location.pathname + S.location.search && (f = n.Replace);
            let p = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
              m = pe({
                currentLocation: c,
                nextLocation: d,
                historyAction: f
              });
            if (!m) return await $(f, d, {
              submission: s,
              pendingError: l,
              preventScrollReset: p,
              replace: a && a.replace
            });
            ue(m, {
              state: "blocked",
              location: d,
              proceed() {
                ue(m, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: d
                }), t(r, a)
              },
              reset() {
                ce(m), N({
                  blockers: new Map(S.blockers)
                })
              }
            })
          },
          fetch: function(n, a, c, u) {
            if (ae) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            U.has(n) && X(n);
            let d = m(t || s, c, e.basename);
            if (!d) return void J(n, a, be(404, {
              pathname: c
            }));
            let {
              path: h,
              submission: f
            } = se(c, u, !0), p = Me(d, h);
            P = !0 === (u && u.preventScrollReset), f && Ae(f.formMethod) ? async function(n, a, c, u, d, h) {
              if (Y(), F.delete(n), !u.route.action && !u.route.lazy) {
                let e = be(405, {
                  method: h.formMethod,
                  pathname: c,
                  routeId: a
                });
                return void J(n, a, e)
              }
              let f = S.fetchers.get(n),
                p = i({
                  state: "submitting"
                }, h, {
                  data: f && f.data,
                  " _hasFetcherDoneAnything ": !0
                });
              S.fetchers.set(n, p), N({
                fetchers: new Map(S.fetchers)
              });
              let v = new AbortController,
                g = fe(e.history, c, v.signal, h);
              U.set(n, v);
              let y = await he("action", g, u, d, o, r, E.basename);
              if (g.signal.aborted) return void(U.get(n) === v && U.delete(n));
              if (Se(y)) {
                U.delete(n), j.add(n);
                let e = i({
                  state: "loading"
                }, h, {
                  data: void 0,
                  " _hasFetcherDoneAnything ": !0
                });
                return S.fetchers.set(n, e), N({
                  fetchers: new Map(S.fetchers)
                }), H(S, y, {
                  isFetchActionRedirect: !0
                })
              }
              if (De(y)) return void J(n, a, y.error);
              if (Re(y)) throw be(400, {
                type: "defer-action"
              });
              let b = S.navigation.location || S.location,
                w = fe(e.history, b, v.signal),
                D = t || s,
                P = "idle" !== S.navigation.state ? m(D, S.navigation.location, e.basename) : S.matches;
              l(P, "Didn't find any matches after fetcher action");
              let x = ++O;
              _.set(n, x);
              let M = i({
                state: "loading",
                data: y.data
              }, h, {
                " _hasFetcherDoneAnything ": !0
              });
              S.fetchers.set(n, M);
              let [z, I] = le(e.history, S, P, h, b, k, C, L, F, D, e.basename, {
                [u.route.id]: y.data
              }, void 0);
              I.filter((e => e.key !== n)).forEach((e => {
                let t = e.key,
                  r = S.fetchers.get(t),
                  n = {
                    state: "loading",
                    data: r && r.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                S.fetchers.set(t, n), U.set(t, v)
              })), N({
                fetchers: new Map(S.fetchers)
              });
              let {
                results: $,
                loaderResults: K,
                fetcherResults: V
              } = await q(S.matches, P, z, I, w);
              if (v.signal.aborted) return;
              _.delete(n), U.delete(n), I.forEach((e => U.delete(e.key)));
              let X = we($);
              if (X) return H(S, X);
              let {
                loaderData: G,
                errors: Q
              } = me(S, S.matches, z, K, void 0, I, V, B), Z = {
                state: "idle",
                data: y.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              S.fetchers.set(n, Z);
              let ee = ie(x);
              "loading" === S.navigation.state && x > T ? (l(A, "Expected pending action"), R && R.abort(), W(S.navigation.location, {
                matches: P,
                loaderData: G,
                errors: Q,
                fetchers: new Map(S.fetchers)
              })) : (N(i({
                errors: Q,
                loaderData: ve(S.loaderData, G, P, Q)
              }, ee ? {
                fetchers: new Map(S.fetchers)
              } : {})), k = !1)
            }(n, a, h, p, d, f): (F.set(n, {
              routeId: a,
              path: h
            }), async function(t, n, a, s, c, u) {
              let d = S.fetchers.get(t),
                h = i({
                  state: "loading",
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0
                }, u, {
                  data: d && d.data,
                  " _hasFetcherDoneAnything ": !0
                });
              S.fetchers.set(t, h), N({
                fetchers: new Map(S.fetchers)
              });
              let f = new AbortController,
                p = fe(e.history, a, f.signal);
              U.set(t, f);
              let m = await he("loader", p, s, c, o, r, E.basename);
              if (Re(m) && (m = await xe(m, p.signal, !0) || m), U.get(t) === f && U.delete(t), p.signal.aborted) return;
              if (Se(m)) return void await H(S, m);
              if (De(m)) {
                let e = ge(S.matches, n);
                return S.fetchers.delete(t), void N({
                  fetchers: new Map(S.fetchers),
                  errors: {
                    [e.route.id]: m.error
                  }
                })
              }
              l(!Re(m), "Unhandled fetcher deferred data");
              let v = {
                state: "idle",
                data: m.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              S.fetchers.set(t, v), N({
                fetchers: new Map(S.fetchers)
              })
            }(n, a, h, p, d, f))
          },
          revalidate: function() {
            Y(), N({
              revalidation: "loading"
            }), "submitting" !== S.navigation.state && ("idle" !== S.navigation.state ? $(A || S.historyAction, S.navigation.location, {
              overrideNavigation: S.navigation
            }) : $(S.historyAction, S.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: K,
          deleteFetcher: V,
          dispose: function() {
            d && d(), h.clear(), R && R.abort(), S.fetchers.forEach(((e, t) => V(t))), S.blockers.forEach(((e, t) => ce(t)))
          },
          getBlocker: function(e, t) {
            let r = S.blockers.get(e) || te;
            return z.get(e) !== t && z.set(e, t), r
          },
          deleteBlocker: ce,
          _internalFetchControllers: U,
          _internalActiveDeferreds: B,
          _internalSetRoutes: function(e) {
            t = e
          }
        }, E
      }

      function se(e, t, r) {
        void 0 === r && (r = !1);
        let n, a = "string" == typeof e ? e : d(e);
        if (!t || ! function(e) {
            return null != e && "formData" in e
          }(t)) return {
          path: a
        };
        if (t.formMethod && (o = t.formMethod, !X.has(o))) return {
          path: a,
          error: be(405, {
            method: t.formMethod
          })
        };
        var o;
        if (t.formData && (n = {
            formMethod: t.formMethod || "get",
            formAction: Ee(a),
            formEncType: t && t.formEncType || "application/x-www-form-urlencoded",
            formData: t.formData
          }, Ae(n.formMethod))) return {
          path: a,
          submission: n
        };
        let i = h(a),
          s = pe(t.formData);
        return r && i.search && ke(i.search) && s.append("index", ""), i.search = "?" + s, {
          path: d(i),
          submission: n
        }
      }

      function le(e, t, r, n, a, o, s, l, c, u, d, h, f) {
        let p = f ? Object.values(f)[0] : h ? Object.values(h)[0] : void 0,
          v = e.createURL(t.location),
          g = e.createURL(a),
          y = o || v.toString() === g.toString() || v.search !== g.search,
          b = f ? Object.keys(f)[0] : void 0,
          w = function(e, t) {
            let r = e;
            if (t) {
              let n = e.findIndex((e => e.route.id === t));
              n >= 0 && (r = e.slice(0, n))
            }
            return r
          }(r, b).filter(((e, r) => {
            if (e.route.lazy) return !0;
            if (null == e.route.loader) return !1;
            if (function(e, t, r) {
                let n = !t || r.route.id !== t.route.id,
                  a = void 0 === e[r.route.id];
                return n || a
              }(t.loaderData, t.matches[r], e) || s.some((t => t === e.route.id))) return !0;
            let a = t.matches[r],
              o = e;
            return ue(e, i({
              currentUrl: v,
              currentParams: a.params,
              nextUrl: g,
              nextParams: o.params
            }, n, {
              actionResult: p,
              defaultShouldRevalidate: y || ce(a, o)
            }))
          })),
          E = [];
        return c.forEach(((e, a) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let o = m(u, e.path, d);
          if (!o) return void E.push(i({
            key: a
          }, e, {
            matches: null,
            match: null
          }));
          let s = Me(o, e.path);
          (l.includes(a) || ue(s, i({
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: g,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: p,
            defaultShouldRevalidate: y
          }))) && E.push(i({
            key: a,
            matches: o,
            match: s
          }, e))
        })), [w, E]
      }

      function ce(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function ue(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }
      async function de(e, t, r) {
        if (!e.lazy) return;
        let n = await e.lazy();
        if (!e.lazy) return;
        let a = r[e.id];
        l(a, "No route found in manifest");
        let o = {};
        for (let e in n) {
          let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
          c(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || f.has(e) || (o[e] = n[e])
        }
        Object.assign(a, o), Object.assign(a, {
          hasErrorBoundary: t(i({}, a)),
          lazy: void 0
        })
      }
      async function he(e, t, r, n, o, i, s, c, u, h) {
        let f, p, m;
        void 0 === s && (s = "/"), void 0 === c && (c = !1), void 0 === u && (u = !1);
        let v = e => {
          let n, a = new Promise(((e, t) => n = t));
          return m = () => n(), t.signal.addEventListener("abort", m), Promise.race([e({
            request: t,
            params: r.params,
            context: h
          }), a])
        };
        try {
          let n = r.route[e];
          if (r.route.lazy)
            if (n) p = (await Promise.all([v(n), de(r.route, i, o)]))[0];
            else {
              if (await de(r.route, i, o), n = r.route[e], !n) {
                if ("action" === e) throw be(405, {
                  method: t.method,
                  pathname: new URL(t.url).pathname,
                  routeId: r.route.id
                });
                return {
                  type: a.data,
                  data: void 0
                }
              }
              p = await v(n)
            }
          else l(n, "Could not find the " + e + ' to run on the "' + r.route.id + '" route'), p = await v(n);
          l(void 0 !== p, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          f = a.error, p = e
        } finally {
          m && t.signal.removeEventListener("abort", m)
        }
        if (null != (g = p) && "number" == typeof g.status && "string" == typeof g.statusText && "object" == typeof g.headers && void 0 !== g.body) {
          let e, o = p.status;
          if (G.has(o)) {
            let e = p.headers.get("Location");
            if (l(e, "Redirects returned/thrown from loaders/actions must have a Location header"), re.test(e)) {
              if (!c) {
                let r = new URL(t.url),
                  n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  a = null != M(n.pathname, s);
                n.origin === r.origin && a && (e = n.pathname + n.search + n.hash)
              }
            } else {
              let a = T(e, O(n.slice(0, n.indexOf(r) + 1)).map((e => e.pathnameBase)), new URL(t.url).pathname);
              if (l(d(a), "Unable to resolve redirect location: " + e), s) {
                let e = a.pathname;
                a.pathname = "/" === e ? s : _([s, e])
              }
              e = d(a)
            }
            if (c) throw p.headers.set("Location", e), p;
            return {
              type: a.redirect,
              status: o,
              location: e,
              revalidate: null !== p.headers.get("X-Remix-Revalidate")
            }
          }
          if (u) throw {
            type: f || a.data,
            response: p
          };
          let i = p.headers.get("Content-Type");
          return e = i && /\bapplication\/json\b/.test(i) ? await p.json() : await p.text(), f === a.error ? {
            type: f,
            error: new H(o, p.statusText, e),
            headers: p.headers
          } : {
            type: a.data,
            data: e,
            statusCode: p.status,
            headers: p.headers
          }
        }
        var g, y, b;
        return f === a.error ? {
          type: f,
          error: p
        } : p instanceof N ? {
          type: a.deferred,
          deferredData: p,
          statusCode: null == (y = p.init) ? void 0 : y.status,
          headers: (null == (b = p.init) ? void 0 : b.headers) && new Headers(p.init.headers)
        } : {
          type: a.data,
          data: p
        }
      }

      function fe(e, t, r, n) {
        let a = e.createURL(Ee(t)).toString(),
          o = {
            signal: r
          };
        if (n && Ae(n.formMethod)) {
          let {
            formMethod: e,
            formEncType: t,
            formData: r
          } = n;
          o.method = e.toUpperCase(), o.body = "application/x-www-form-urlencoded" === t ? pe(r) : r
        }
        return new Request(a, o)
      }

      function pe(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) t.append(r, n instanceof File ? n.name : n);
        return t
      }

      function me(e, t, r, n, a, o, s, c) {
        let {
          loaderData: u,
          errors: d
        } = function(e, t, r, n, a) {
          let o, i = {},
            s = null,
            c = !1,
            u = {};
          return r.forEach(((r, d) => {
            let h = t[d].route.id;
            if (l(!Se(r), "Cannot handle redirect results in processLoaderData"), De(r)) {
              let t = ge(e, h),
                a = r.error;
              n && (a = Object.values(n)[0], n = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = a), i[h] = void 0, c || (c = !0, o = q(r.error) ? r.error.status : 500), r.headers && (u[h] = r.headers)
            } else Re(r) ? (a.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || c || (o = r.statusCode), r.headers && (u[h] = r.headers)
          })), n && (s = n, i[Object.keys(n)[0]] = void 0), {
            loaderData: i,
            errors: s,
            statusCode: o || 200,
            loaderHeaders: u
          }
        }(t, r, n, a, c);
        for (let t = 0; t < o.length; t++) {
          let {
            key: r,
            match: n
          } = o[t];
          l(void 0 !== s && void 0 !== s[t], "Did not find corresponding fetcher result");
          let a = s[t];
          if (De(a)) {
            let t = ge(e.matches, null == n ? void 0 : n.route.id);
            d && d[t.route.id] || (d = i({}, d, {
              [t.route.id]: a.error
            })), e.fetchers.delete(r)
          } else if (Se(a)) l(!1, "Unhandled fetcher revalidation redirect");
          else if (Re(a)) l(!1, "Unhandled fetcher deferred data");
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
          loaderData: u,
          errors: d
        }
      }

      function ve(e, t, r, n) {
        let a = i({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && o.route.loader && (a[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return a
      }

      function ge(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function ye(e) {
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

      function be(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: a,
          type: o
        } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", a && r && n ? s = "You made a " + a + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === o && (s = "defer() is not supported in actions")) : 403 === e ? (i = "Forbidden", s = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", a && r && n ? s = "You made a " + a.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : a && (s = 'Invalid request method "' + a.toUpperCase() + '"')), new H(e || 500, i, new Error(s), !0)
      }

      function we(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (Se(r)) return r
        }
      }

      function Ee(e) {
        return d(i({}, "string" == typeof e ? h(e) : e, {
          hash: ""
        }))
      }

      function Re(e) {
        return e.type === a.deferred
      }

      function De(e) {
        return e.type === a.error
      }

      function Se(e) {
        return (e && e.type) === a.redirect
      }

      function Ae(e) {
        return J.has(e)
      }
      async function Pe(e, t, r, n, a, o) {
        for (let i = 0; i < r.length; i++) {
          let s = r[i],
            l = t[i];
          if (!l) continue;
          let c = e.find((e => e.route.id === l.route.id)),
            u = null != c && !ce(c, l) && void 0 !== (o && o[l.route.id]);
          Re(s) && (a || u) && await xe(s, n, a).then((e => {
            e && (r[i] = e || r[i])
          }))
        }
      }
      async function xe(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: a.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: a.error,
              error: e
            }
          }
          return {
            type: a.data,
            data: e.deferredData.data
          }
        }
      }

      function ke(e) {
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

      function Me(e, t) {
        let r = "string" == typeof t ? h(t).search : t.search;
        if (e[e.length - 1].route.index && ke(r || "")) return e[e.length - 1];
        let n = O(e);
        return n[n.length - 1]
      }
      Symbol("deferred");
      const Le = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        {
          useState: Ue,
          useEffect: Oe,
          useLayoutEffect: Te,
          useDebugValue: _e
        } = o;

      function je(e) {
        const t = e.getSnapshot,
          r = e.value;
        try {
          const e = t();
          return !Le(r, e)
        } catch (e) {
          return !0
        }
      }
      const Fe = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t, r) {
          return t()
        } : function(e, t, r) {
          const n = t(),
            [{
              inst: a
            }, o] = Ue({
              inst: {
                value: n,
                getSnapshot: t
              }
            });
          return Te((() => {
            a.value = n, a.getSnapshot = t, je(a) && o({
              inst: a
            })
          }), [e, n, t]), Oe((() => (je(a) && o({
            inst: a
          }), e((() => {
            je(a) && o({
              inst: a
            })
          })))), [e]), _e(n), n
        },
        Be = "useSyncExternalStore" in o ? o.useSyncExternalStore : Fe,
        ze = o.createContext(null),
        Ie = o.createContext(null),
        Ne = o.createContext(null),
        We = o.createContext(null),
        $e = o.createContext(null),
        Ke = o.createContext({
          outlet: null,
          matches: []
        }),
        He = o.createContext(null);

      function qe() {
        return qe = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, qe.apply(this, arguments)
      }

      function Ye(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        Je() || l(!1);
        let {
          basename: n,
          navigator: a
        } = o.useContext(We), {
          hash: i,
          pathname: s,
          search: c
        } = nt(e, {
          relative: r
        }), u = s;
        return "/" !== n && (u = "/" === s ? n : _([n, s])), a.createHref({
          pathname: u,
          search: c,
          hash: i
        })
      }

      function Je() {
        return null != o.useContext($e)
      }

      function Ve() {
        return Je() || l(!1), o.useContext($e).location
      }

      function Xe() {
        return o.useContext($e).navigationType
      }

      function Ge(e) {
        Je() || l(!1);
        let {
          pathname: t
        } = Ve();
        return o.useMemo((() => k(e, t)), [t, e])
      }

      function Qe() {
        Je() || l(!1);
        let {
          basename: e,
          navigator: t
        } = o.useContext(We), {
          matches: r
        } = o.useContext(Ke), {
          pathname: n
        } = Ve(), a = JSON.stringify(O(r).map((e => e.pathnameBase))), i = o.useRef(!1);
        return o.useEffect((() => {
          i.current = !0
        })), o.useCallback((function(r, o) {
          if (void 0 === o && (o = {}), !i.current) return;
          if ("number" == typeof r) return void t.go(r);
          let s = T(r, JSON.parse(a), n, "path" === o.relative);
          "/" !== e && (s.pathname = "/" === s.pathname ? e : _([e, s.pathname])), (o.replace ? t.replace : t.push)(s, o.state, o)
        }), [e, t, a, n])
      }
      const Ze = o.createContext(null);

      function et() {
        return o.useContext(Ze)
      }

      function tt(e) {
        let t = o.useContext(Ke).outlet;
        return t ? o.createElement(Ze.Provider, {
          value: e
        }, t) : t
      }

      function rt() {
        let {
          matches: e
        } = o.useContext(Ke), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function nt(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: n
        } = o.useContext(Ke), {
          pathname: a
        } = Ve(), i = JSON.stringify(O(n).map((e => e.pathnameBase)));
        return o.useMemo((() => T(e, JSON.parse(i), a, "path" === r)), [e, i, a, r])
      }

      function at(e, t) {
        Je() || l(!1);
        let {
          navigator: r
        } = o.useContext(We), a = o.useContext(Ie), {
          matches: i
        } = o.useContext(Ke), s = i[i.length - 1], c = s ? s.params : {}, u = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let d, f = Ve();
        if (t) {
          var p;
          let e = "string" == typeof t ? h(t) : t;
          "/" === u || (null == (p = e.pathname) ? void 0 : p.startsWith(u)) || l(!1), d = e
        } else d = f;
        let v = d.pathname || "/",
          g = m(e, {
            pathname: "/" === u ? v : v.slice(u.length) || "/"
          }),
          y = lt(g && g.map((e => Object.assign({}, e, {
            params: Object.assign({}, c, e.params),
            pathname: _([u, r.encodeLocation ? r.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? u : _([u, r.encodeLocation ? r.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), i, a || void 0);
        return t && y ? o.createElement($e.Provider, {
          value: {
            location: qe({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, d),
            navigationType: n.Pop
          }
        }, y) : y
      }

      function ot() {
        let e = wt(),
          t = q(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
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
      class it extends o.Component {
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
          return this.state.error ? o.createElement(Ke.Provider, {
            value: this.props.routeContext
          }, o.createElement(He.Provider, {
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
        } = e, a = o.useContext(ze);
        return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), o.createElement(Ke.Provider, {
          value: t
        }, n)
      }

      function lt(e, t, r) {
        if (void 0 === t && (t = []), null == e) {
          if (null == r || !r.errors) return null;
          e = r.matches
        }
        let n = e,
          a = null == r ? void 0 : r.errors;
        if (null != a) {
          let e = n.findIndex((e => e.route.id && (null == a ? void 0 : a[e.route.id])));
          e >= 0 || l(!1), n = n.slice(0, Math.min(n.length, e + 1))
        }
        return n.reduceRight(((e, i, s) => {
          let l = i.route.id ? null == a ? void 0 : a[i.route.id] : null,
            c = null;
          r && (c = i.route.ErrorBoundary ? o.createElement(i.route.ErrorBoundary, null) : i.route.errorElement ? i.route.errorElement : o.createElement(ot, null));
          let u = t.concat(n.slice(0, s + 1)),
            d = () => {
              let t = e;
              return l ? t = c : i.route.Component ? t = o.createElement(i.route.Component, null) : i.route.element && (t = i.route.element), o.createElement(st, {
                match: i,
                routeContext: {
                  outlet: e,
                  matches: u
                },
                children: t
              })
            };
          return r && (i.route.ErrorBoundary || i.route.errorElement || 0 === s) ? o.createElement(it, {
            location: r.location,
            component: c,
            error: l,
            children: d(),
            routeContext: {
              outlet: null,
              matches: u
            }
          }) : d()
        }), null)
      }
      var ct, ut;

      function dt(e) {
        let t = o.useContext(ze);
        return t || l(!1), t
      }

      function ht(e) {
        let t = o.useContext(Ie);
        return t || l(!1), t
      }

      function ft(e) {
        let t = function(e) {
            let t = o.useContext(Ke);
            return t || l(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || l(!1), r.route.id
      }

      function pt() {
        return ht(ut.UseNavigation).navigation
      }

      function mt() {
        let e = dt(ct.UseRevalidator),
          t = ht(ut.UseRevalidator);
        return {
          revalidate: e.router.revalidate,
          state: t.revalidation
        }
      }

      function vt() {
        let {
          matches: e,
          loaderData: t
        } = ht(ut.UseMatches);
        return o.useMemo((() => e.map((e => {
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

      function gt() {
        let e = ht(ut.UseLoaderData),
          t = ft(ut.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function yt(e) {
        return ht(ut.UseRouteLoaderData).loaderData[e]
      }

      function bt() {
        let e = ht(ut.UseActionData);
        return o.useContext(Ke) || l(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function wt() {
        var e;
        let t = o.useContext(He),
          r = ht(ut.UseRouteError),
          n = ft(ut.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[n])
      }

      function Et() {
        let e = o.useContext(Ne);
        return null == e ? void 0 : e._data
      }

      function Rt() {
        let e = o.useContext(Ne);
        return null == e ? void 0 : e._error
      }! function(e) {
        e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator"
      }(ct || (ct = {})),
      function(e) {
        e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
      }(ut || (ut = {}));
      let Dt = 0;

      function St(e) {
        let {
          router: t
        } = dt(ct.UseBlocker), r = ht(ut.UseBlocker), [n] = o.useState((() => String(++Dt))), a = o.useCallback((t => "function" == typeof e ? !!e(t) : !!e), [e]), i = t.getBlocker(n, a);
        return o.useEffect((() => () => t.deleteBlocker(n)), [t, n]), r.blockers.get(n) || i
      }

      function At(e) {
        let {
          fallbackElement: t,
          router: r
        } = e, n = o.useCallback((() => r.state), [r]), a = Be(r.subscribe, n, n), i = o.useMemo((() => ({
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
        })), [r]), s = r.basename || "/", l = o.useMemo((() => ({
          router: r,
          navigator: i,
          static: !1,
          basename: s
        })), [r, i, s]);
        return o.createElement(o.Fragment, null, o.createElement(ze.Provider, {
          value: l
        }, o.createElement(Ie.Provider, {
          value: a
        }, o.createElement(Mt, {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: i
        }, r.state.initialized ? o.createElement(Lt, null) : t))), null)
      }

      function Pt(e) {
        let {
          basename: t,
          children: r,
          initialEntries: n,
          initialIndex: a
        } = e, i = o.useRef();
        null == i.current && (i.current = s({
          initialEntries: n,
          initialIndex: a,
          v5Compat: !0
        }));
        let l = i.current,
          [c, u] = o.useState({
            action: l.action,
            location: l.location
          });
        return o.useLayoutEffect((() => l.listen(u)), [l]), o.createElement(Mt, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: l
        })
      }

      function xt(e) {
        let {
          to: t,
          replace: r,
          state: n,
          relative: a
        } = e;
        Je() || l(!1);
        let i = o.useContext(Ie),
          s = Qe();
        return o.useEffect((() => {
          i && "idle" !== i.navigation.state || s(t, {
            replace: r,
            state: n,
            relative: a
          })
        })), null
      }

      function kt(e) {
        return tt(e.context)
      }

      function Ct(e) {
        l(!1)
      }

      function Mt(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: a,
          navigationType: i = n.Pop,
          navigator: s,
          static: c = !1
        } = e;
        Je() && l(!1);
        let u = t.replace(/^\/*/, "/"),
          d = o.useMemo((() => ({
            basename: u,
            navigator: s,
            static: c
          })), [u, s, c]);
        "string" == typeof a && (a = h(a));
        let {
          pathname: f = "/",
          search: p = "",
          hash: m = "",
          state: v = null,
          key: g = "default"
        } = a, y = o.useMemo((() => {
          let e = M(f, u);
          return null == e ? null : {
            location: {
              pathname: e,
              search: p,
              hash: m,
              state: v,
              key: g
            },
            navigationType: i
          }
        }), [u, f, p, m, v, g, i]);
        return null == y ? null : o.createElement(We.Provider, {
          value: d
        }, o.createElement($e.Provider, {
          children: r,
          value: y
        }))
      }

      function Lt(e) {
        let {
          children: t,
          location: r
        } = e, n = o.useContext(ze);
        return at(n && !t ? n.router.routes : Ft(t), r)
      }

      function Ut(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return o.createElement(_t, {
          resolve: n,
          errorElement: r
        }, o.createElement(jt, null, t))
      }
      var Ot;
      ! function(e) {
        e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
      }(Ot || (Ot = {}));
      const Tt = new Promise((() => {}));
      class _t extends o.Component {
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
          } = this.props, n = null, a = Ot.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              a = Ot.error;
              let e = this.state.error;
              n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, a = void 0 !== n._error ? Ot.error : void 0 !== n._data ? Ot.success : Ot.pending) : (a = Ot.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else a = Ot.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (a === Ot.error && n._error instanceof I) throw Tt;
          if (a === Ot.error && !t) throw n._error;
          if (a === Ot.error) return o.createElement(Ne.Provider, {
            value: n,
            children: t
          });
          if (a === Ot.success) return o.createElement(Ne.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function jt(e) {
        let {
          children: t
        } = e, r = Et(), n = "function" == typeof t ? t(r) : t;
        return o.createElement(o.Fragment, null, n)
      }

      function Ft(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return o.Children.forEach(e, ((e, n) => {
          if (!o.isValidElement(e)) return;
          if (e.type === o.Fragment) return void r.push.apply(r, Ft(e.props.children, t));
          e.type !== Ct && l(!1), e.props.index && e.props.children && l(!1);
          let a = [...t, n],
            i = {
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
          e.props.children && (i.children = Ft(e.props.children, a)), r.push(i)
        })), r
      }

      function Bt(e) {
        return lt(e)
      }

      function zt(e) {
        return Boolean(e.ErrorBoundary) || Boolean(e.errorElement)
      }

      function It(e, t) {
        return ie({
          basename: null == t ? void 0 : t.basename,
          history: s({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          detectErrorBoundary: zt
        }).initialize()
      }

      function Nt() {
        return Nt = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Nt.apply(this, arguments)
      }
      var Wt;
      ! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(Wt || (Wt = {}));
      const $t = "popstate";

      function Kt(e) {
        return void 0 === e && (e = {}), Qt((function(e, t) {
          let {
            pathname: r,
            search: n,
            hash: a
          } = e.location;
          return Vt("", {
            pathname: r,
            search: n,
            hash: a
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          return "string" == typeof t ? t : Xt(t)
        }), null, e)
      }

      function Ht(e) {
        return void 0 === e && (e = {}), Qt((function(e, t) {
          let {
            pathname: r = "/",
            search: n = "",
            hash: a = ""
          } = Gt(e.location.hash.substr(1));
          return Vt("", {
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
          return n + "#" + ("string" == typeof t ? t : Xt(t))
        }), (function(e, t) {
          Yt("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
        }), e)
      }

      function qt(e, t) {
        if (!1 === e || null == e) throw new Error(t)
      }

      function Yt(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function Jt(e, t) {
        return {
          usr: e.state,
          key: e.key,
          idx: t
        }
      }

      function Vt(e, t, r, n) {
        return void 0 === r && (r = null), Nt({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? Gt(t) : t, {
          state: r,
          key: t && t.key || n || Math.random().toString(36).substr(2, 8)
        })
      }

      function Xt(e) {
        let {
          pathname: t = "/",
          search: r = "",
          hash: n = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n), t
      }

      function Gt(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let n = e.indexOf("?");
          n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
        }
        return t
      }

      function Qt(e, t, r, n) {
        void 0 === n && (n = {});
        let {
          window: a = document.defaultView,
          v5Compat: o = !1
        } = n, i = a.history, s = Wt.Pop, l = null, c = u();

        function u() {
          return (i.state || {
            idx: null
          }).idx
        }

        function d() {
          s = Wt.Pop;
          let e = u(),
            t = null == e ? null : e - c;
          c = e, l && l({
            action: s,
            location: f.location,
            delta: t
          })
        }

        function h(e) {
          let t = "null" !== a.location.origin ? a.location.origin : a.location.href,
            r = "string" == typeof e ? e : Xt(e);
          return qt(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
        }
        null == c && (c = 0, i.replaceState(Nt({}, i.state, {
          idx: c
        }), ""));
        let f = {
          get action() {
            return s
          },
          get location() {
            return e(a, i)
          },
          listen(e) {
            if (l) throw new Error("A history only accepts one active listener");
            return a.addEventListener($t, d), l = e, () => {
              a.removeEventListener($t, d), l = null
            }
          },
          createHref: e => t(a, e),
          createURL: h,
          encodeLocation(e) {
            let t = h(e);
            return {
              pathname: t.pathname,
              search: t.search,
              hash: t.hash
            }
          },
          push: function(e, t) {
            s = Wt.Push;
            let n = Vt(f.location, e, t);
            r && r(n, e), c = u() + 1;
            let d = Jt(n, c),
              h = f.createHref(n);
            try {
              i.pushState(d, "", h)
            } catch (e) {
              a.location.assign(h)
            }
            o && l && l({
              action: s,
              location: f.location,
              delta: 1
            })
          },
          replace: function(e, t) {
            s = Wt.Replace;
            let n = Vt(f.location, e, t);
            r && r(n, e), c = u();
            let a = Jt(n, c),
              d = f.createHref(n);
            i.replaceState(a, "", d), o && l && l({
              action: s,
              location: f.location,
              delta: 0
            })
          },
          go: e => i.go(e)
        };
        return f
      }
      var Zt;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(Zt || (Zt = {}));
      const er = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function tr(e, t, r, n) {
        return void 0 === r && (r = []), void 0 === n && (n = {}), e.map(((e, a) => {
          let o = [...r, a],
            i = "string" == typeof e.id ? e.id : o.join("-");
          if (qt(!0 !== e.index || !e.children, "Cannot specify children on an index route"), qt(!n[i], 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = Nt({}, e, {
              hasErrorBoundary: t(e),
              id: i
            });
            return n[i] = r, r
          } {
            let r = Nt({}, e, {
              id: i,
              hasErrorBoundary: t(e),
              children: void 0
            });
            return n[i] = r, e.children && (r.children = tr(e.children, t, o, n)), r
          }
        }))
      }

      function rr(e, t, r) {
        void 0 === r && (r = "/");
        let n = vr(("string" == typeof t ? Gt(t) : t).pathname || "/", r);
        if (null == n) return null;
        let a = nr(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(a);
        let o = null;
        for (let e = 0; null == o && e < a.length; ++e) o = fr(a[e], mr(n));
        return o
      }

      function nr(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e
          };
          i.relativePath.startsWith("/") && (qt(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
          let s = br([n, i.relativePath]),
            l = r.concat(i);
          e.children && e.children.length > 0 && (qt(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), nr(e.children, t, l, s)), (null != e.path || e.index) && t.push({
            path: s,
            score: hr(s, e.index),
            routesMeta: l
          })
        };
        return e.forEach(((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of ar(e.path)) a(e, t, r);
          else a(e, t)
        })), t
      }

      function ar(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === n.length) return a ? [o, ""] : [o];
        let i = ar(n.join("/")),
          s = [];
        return s.push(...i.map((e => "" === e ? o : [o, e].join("/")))), a && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const or = /^:\w+$/,
        ir = 3,
        sr = 2,
        lr = 1,
        cr = 10,
        ur = -2,
        dr = e => "*" === e;

      function hr(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(dr) && (n += ur), t && (n += sr), r.filter((e => !dr(e))).reduce(((e, t) => e + (or.test(t) ? ir : "" === t ? lr : cr)), n)
      }

      function fr(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, a = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            s = e === r.length - 1,
            l = "/" === a ? t : t.slice(a.length) || "/",
            c = pr({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: s
            }, l);
          if (!c) return null;
          Object.assign(n, c.params);
          let u = i.route;
          o.push({
            params: n,
            pathname: br([a, c.pathname]),
            pathnameBase: wr(br([a, c.pathnameBase])),
            route: u
          }), "/" !== c.pathnameBase && (a = br([a, c.pathnameBase]))
        }
        return o
      }

      function pr(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), Yt("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let n = [],
            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (n.push(t), "/([^\\/]+)")));
          return e.endsWith("*") ? (n.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n]
        }(e.path, e.caseSensitive, e.end), a = t.match(r);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          s = a.slice(1);
        return {
          params: n.reduce(((e, t, r) => {
            if ("*" === t) {
              let e = s[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
              try {
                return decodeURIComponent(e)
              } catch (r) {
                return Yt(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(s[r] || "", t), e
          }), {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function mr(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return Yt(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function vr(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }

      function gr(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function yr(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }
      const br = e => e.join("/").replace(/\/\/+/g, "/"),
        wr = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        Er = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        Rr = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
      class Dr extends Error {}
      class Sr {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], qt(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
          let n = () => r(new Dr("Deferred data aborted"));
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
          return this.controller.signal.aborted && r instanceof Dr ? (this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
          return qt(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: Ar(n)
            })
          }), {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function Ar(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }
      class Pr {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }
      const xr = ["post", "put", "patch", "delete"],
        kr = new Set(xr),
        Cr = ["get", ...xr],
        Mr = new Set(Cr),
        Lr = new Set([301, 302, 303, 307, 308]),
        Ur = new Set([307, 308]),
        Or = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        Tr = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        _r = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0
        },
        jr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Fr = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        Br = !Fr,
        zr = e => Boolean(e.hasErrorBoundary);

      function Ir(e) {
        qt(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
        let t, r = e.detectErrorBoundary || zr,
          n = {},
          a = tr(e.routes, r, void 0, n),
          o = null,
          i = new Set,
          s = null,
          l = null,
          c = null,
          u = null != e.hydrationData,
          d = rr(a, e.history.location, e.basename),
          h = null;
        if (null == d) {
          let t = Zr(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: n
            } = Qr(a);
          d = r, h = {
            [n.id]: t
          }
        }
        let f, p, m = !(d.some((e => e.route.lazy)) || d.some((e => e.route.loader)) && null == e.hydrationData),
          v = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: d,
            initialized: m,
            navigation: Or,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || h,
            fetchers: new Map,
            blockers: new Map
          },
          g = Wt.Pop,
          y = !1,
          b = !1,
          w = !1,
          E = [],
          R = [],
          D = new Map,
          S = 0,
          A = -1,
          P = new Map,
          x = new Set,
          k = new Map,
          C = new Map,
          M = new Map,
          L = !1;

        function U(e) {
          v = Nt({}, v, e), i.forEach((e => e(v)))
        }

        function O(r, n) {
          var o, i;
          let s, l = null != v.actionData && null != v.navigation.formMethod && on(v.navigation.formMethod) && "loading" === v.navigation.state && !0 !== (null == (o = r.state) ? void 0 : o._isRedirect);
          s = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : l ? v.actionData : null;
          let c = n.loaderData ? Xr(v.loaderData, n.loaderData, n.matches || [], n.errors) : v.loaderData;
          for (let [e] of M) K(e);
          let u = !0 === y || null != v.navigation.formMethod && on(v.navigation.formMethod) && !0 !== (null == (i = r.state) ? void 0 : i._isRedirect);
          t && (a = t, t = void 0), U(Nt({}, n, {
            actionData: s,
            loaderData: c,
            historyAction: g,
            location: r,
            initialized: !0,
            navigation: Or,
            revalidation: "idle",
            restoreScrollPosition: J(r, n.matches || v.matches),
            preventScrollReset: u,
            blockers: new Map(v.blockers)
          })), b || g === Wt.Pop || (g === Wt.Push ? e.history.push(r, r.state) : g === Wt.Replace && e.history.replace(r, r.state)), g = Wt.Pop, y = !1, b = !1, w = !1, E = [], R = []
        }
        async function T(o, i, u) {
          p && p.abort(), p = null, g = o, b = !0 === (u && u.startUninterruptedRevalidation),
            function(e, t) {
              if (s && l && c) {
                let r = t.map((e => un(e, v.loaderData))),
                  n = l(e, r) || e.key;
                s[n] = c()
              }
            }(v.location, v.matches), y = !0 === (u && u.preventScrollReset);
          let d = t || a,
            h = u && u.overrideNavigation,
            m = rr(d, i, e.basename);
          if (!m) {
            let e = Zr(404, {
                pathname: i.pathname
              }),
              {
                matches: t,
                route: r
              } = Qr(d);
            return Y(), void O(i, {
              matches: t,
              loaderData: {},
              errors: {
                [r.id]: e
              }
            })
          }
          if (M = i, !((P = v.location).pathname !== M.pathname || P.search !== M.search || P.hash === M.hash || u && u.submission && on(u.submission.formMethod))) return void O(i, {
            matches: m
          });
          var P, M;
          p = new AbortController;
          let L, T, _ = Yr(e.history, i, p.signal, u && u.submission);
          if (u && u.pendingError) T = {
            [Gr(m).route.id]: u.pendingError
          };
          else if (u && u.submission && on(u.submission.formMethod)) {
            let e = await async function(e, t, a, o, i) {
              let s;
              B(), U({
                navigation: Nt({
                  state: "submitting",
                  location: t
                }, a)
              });
              let l = dn(o, t);
              if (l.route.action || l.route.lazy) {
                if (s = await qr("action", e, l, o, n, r, f.basename), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else s = {
                type: Zt.error,
                error: Zr(405, {
                  method: e.method,
                  pathname: t.pathname,
                  routeId: l.route.id
                })
              };
              if (an(s)) {
                let e;
                return e = i && null != i.replace ? i.replace : s.location === v.location.pathname + v.location.search, await j(v, s, {
                  submission: a,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (nn(s)) {
                let e = Gr(o, l.route.id);
                return !0 !== (i && i.replace) && (g = Wt.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: s.error
                  }
                }
              }
              if (rn(s)) throw Zr(400, {
                type: "defer-action"
              });
              return {
                pendingActionData: {
                  [l.route.id]: s.data
                }
              }
            }(_, i, u.submission, m, {
              replace: u.replace
            });
            if (e.shortCircuited) return;
            L = e.pendingActionData, T = e.pendingActionError, h = Nt({
              state: "loading",
              location: i
            }, u.submission), _ = new Request(_.url, {
              signal: _.signal
            })
          }
          let {
            shortCircuited: z,
            loaderData: I,
            errors: N
          } = await async function(r, n, o, i, s, l, c, u) {
            let d = i;
            d || (d = Nt({
              state: "loading",
              location: n,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            }, s));
            let h = s || (d.formMethod && d.formAction && d.formData && d.formEncType ? {
                formMethod: d.formMethod,
                formAction: d.formAction,
                formData: d.formData,
                formEncType: d.formEncType
              } : void 0),
              f = t || a,
              [m, g] = Wr(e.history, v, o, h, n, w, E, R, k, f, e.basename, c, u);
            if (Y((e => !(o && o.some((t => t.route.id === e))) || m && m.some((t => t.route.id === e)))), 0 === m.length && 0 === g.length) return O(n, Nt({
              matches: o,
              loaderData: {},
              errors: u || null
            }, c ? {
              actionData: c
            } : {})), {
              shortCircuited: !0
            };
            if (!b) {
              g.forEach((e => {
                let t = v.fetchers.get(e.key),
                  r = {
                    state: "loading",
                    data: t && t.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                v.fetchers.set(e.key, r)
              }));
              let e = c || v.actionData;
              U(Nt({
                navigation: d
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, g.length > 0 ? {
                fetchers: new Map(v.fetchers)
              } : {}))
            }
            A = ++S, g.forEach((e => D.set(e.key, p)));
            let {
              results: y,
              loaderResults: P,
              fetcherResults: M
            } = await F(v.matches, o, m, g, r);
            if (r.signal.aborted) return {
              shortCircuited: !0
            };
            g.forEach((e => D.delete(e.key)));
            let L = en(y);
            if (L) return await j(v, L, {
              replace: l
            }), {
              shortCircuited: !0
            };
            let {
              loaderData: T,
              errors: _
            } = Vr(v, o, m, P, u, g, M, C);
            return C.forEach(((e, t) => {
                e.subscribe((r => {
                  (r || e.done) && C.delete(t)
                }))
              })),
              function() {
                let e = [];
                for (let t of x) {
                  let r = v.fetchers.get(t);
                  qt(r, "Expected fetcher: " + t), "loading" === r.state && (x.delete(t), e.push(t))
                }
                W(e)
              }(), Nt({
                loaderData: T,
                errors: _
              }, $(A) || g.length > 0 ? {
                fetchers: new Map(v.fetchers)
              } : {})
          }(_, i, m, h, u && u.submission, u && u.replace, L, T);
          z || (p = null, O(i, Nt({
            matches: m
          }, L ? {
            actionData: L
          } : {}, {
            loaderData: I,
            errors: N
          })))
        }

        function _(e) {
          return v.fetchers.get(e) || Tr
        }
        async function j(t, r, n) {
          var a;
          let {
            submission: o,
            replace: i,
            isFetchActionRedirect: s
          } = void 0 === n ? {} : n;
          r.revalidate && (w = !0);
          let l = Vt(t.location, r.location, Nt({
            _isRedirect: !0
          }, s ? {
            _isFetchActionRedirect: !0
          } : {}));
          if (qt(l, "Expected a location on the redirect navigation"), jr.test(r.location) && Fr && void 0 !== (null == (a = window) ? void 0 : a.location)) {
            let t = e.history.createURL(r.location),
              n = null == vr(t.pathname, e.basename || "/");
            if (window.location.origin !== t.origin || n) return void(i ? window.location.replace(r.location) : window.location.assign(r.location))
          }
          p = null;
          let c = !0 === i ? Wt.Replace : Wt.Push,
            {
              formMethod: u,
              formAction: d,
              formEncType: h,
              formData: f
            } = t.navigation;
          !o && u && d && f && h && (o = {
            formMethod: u,
            formAction: d,
            formEncType: h,
            formData: f
          }), Ur.has(r.status) && o && on(o.formMethod) ? await T(c, l, {
            submission: Nt({}, o, {
              formAction: r.location
            }),
            preventScrollReset: y
          }) : await T(c, l, {
            overrideNavigation: {
              state: "loading",
              location: l,
              formMethod: o ? o.formMethod : void 0,
              formAction: o ? o.formAction : void 0,
              formEncType: o ? o.formEncType : void 0,
              formData: o ? o.formData : void 0
            },
            preventScrollReset: y
          })
        }
        async function F(t, a, o, i, s) {
          let l = await Promise.all([...o.map((e => qr("loader", s, e, a, n, r, f.basename))), ...i.map((t => t.matches && t.match ? qr("loader", Yr(e.history, t.path, s.signal), t.match, t.matches, n, r, f.basename) : {
              type: Zt.error,
              error: Zr(404, {
                pathname: t.path
              })
            }))]),
            c = l.slice(0, o.length),
            u = l.slice(o.length);
          return await Promise.all([sn(t, o, c, s.signal, !1, v.loaderData), sn(t, i.map((e => e.match)), u, s.signal, !0)]), {
            results: l,
            loaderResults: c,
            fetcherResults: u
          }
        }

        function B() {
          w = !0, E.push(...Y()), k.forEach(((e, t) => {
            D.has(t) && (R.push(t), N(t))
          }))
        }

        function z(e, t, r) {
          let n = Gr(v.matches, t);
          I(e), U({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(v.fetchers)
          })
        }

        function I(e) {
          D.has(e) && N(e), k.delete(e), P.delete(e), x.delete(e), v.fetchers.delete(e)
        }

        function N(e) {
          let t = D.get(e);
          qt(t, "Expected fetch controller: " + e), t.abort(), D.delete(e)
        }

        function W(e) {
          for (let t of e) {
            let e = {
              state: "idle",
              data: _(t).data,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              " _hasFetcherDoneAnything ": !0
            };
            v.fetchers.set(t, e)
          }
        }

        function $(e) {
          let t = [];
          for (let [r, n] of P)
            if (n < e) {
              let e = v.fetchers.get(r);
              qt(e, "Expected fetcher: " + r), "loading" === e.state && (N(r), P.delete(r), t.push(r))
            } return W(t), t.length > 0
        }

        function K(e) {
          v.blockers.delete(e), M.delete(e)
        }

        function H(e, t) {
          let r = v.blockers.get(e) || _r;
          qt("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state), v.blockers.set(e, t), U({
            blockers: new Map(v.blockers)
          })
        }

        function q(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === M.size) return;
          M.size > 1 && Yt(!1, "A router only supports one blocker at a time");
          let a = Array.from(M.entries()),
            [o, i] = a[a.length - 1],
            s = v.blockers.get(o);
          return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? o : void 0
        }

        function Y(e) {
          let t = [];
          return C.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), C.delete(n))
          })), t
        }

        function J(e, t) {
          if (s && l && c) {
            let r = t.map((e => un(e, v.loaderData))),
              n = l(e, r) || e.key,
              a = s[n];
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
            return a
          },
          initialize: function() {
            if (o = e.history.listen((t => {
                let {
                  action: r,
                  location: n,
                  delta: a
                } = t;
                if (L) return void(L = !1);
                Yt(0 === M.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let o = q({
                  currentLocation: v.location,
                  nextLocation: n,
                  historyAction: r
                });
                return o && null != a ? (L = !0, e.history.go(-1 * a), void H(o, {
                  state: "blocked",
                  location: n,
                  proceed() {
                    H(o, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: n
                    }), e.history.go(a)
                  },
                  reset() {
                    K(o), U({
                      blockers: new Map(f.state.blockers)
                    })
                  }
                })) : T(r, n)
              })), v.initialized) return f;
            let t = v.matches.filter((e => e.route.lazy));
            if (0 === t.length) return T(Wt.Pop, v.location), f;
            let a = t.map((e => Hr(e.route, r, n)));
            return Promise.all(a).then((() => {
              v.matches.some((e => e.route.loader)) && null == e.hydrationData ? T(Wt.Pop, v.location) : U({
                initialized: !0
              })
            })), f
          },
          subscribe: function(e) {
            return i.add(e), () => i.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (s = e, c = t, l = r || (e => e.key), !u && v.navigation === Or) {
              u = !0;
              let e = J(v.location, v.matches);
              null != e && U({
                restoreScrollPosition: e
              })
            }
            return () => {
              s = null, c = null, l = null
            }
          },
          navigate: async function t(r, n) {
            if ("number" == typeof r) return void e.history.go(r);
            let {
              path: a,
              submission: o,
              error: i
            } = Nr(r, n), s = v.location, l = Vt(v.location, a, n && n.state);
            l = Nt({}, l, e.history.encodeLocation(l));
            let c = n && null != n.replace ? n.replace : void 0,
              u = Wt.Push;
            !0 === c ? u = Wt.Replace : !1 === c || null != o && on(o.formMethod) && o.formAction === v.location.pathname + v.location.search && (u = Wt.Replace);
            let d = n && "preventScrollReset" in n ? !0 === n.preventScrollReset : void 0,
              h = q({
                currentLocation: s,
                nextLocation: l,
                historyAction: u
              });
            if (!h) return await T(u, l, {
              submission: o,
              pendingError: i,
              preventScrollReset: d,
              replace: n && n.replace
            });
            H(h, {
              state: "blocked",
              location: l,
              proceed() {
                H(h, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: l
                }), t(r, n)
              },
              reset() {
                K(h), U({
                  blockers: new Map(v.blockers)
                })
              }
            })
          },
          fetch: function(o, i, s, l) {
            if (Br) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            D.has(o) && N(o);
            let c = rr(t || a, s, e.basename);
            if (!c) return void z(o, i, Zr(404, {
              pathname: s
            }));
            let {
              path: u,
              submission: d
            } = Nr(s, l, !0), h = dn(c, u);
            y = !0 === (l && l.preventScrollReset), d && on(d.formMethod) ? async function(o, i, s, l, c, u) {
              if (B(), k.delete(o), !l.route.action && !l.route.lazy) {
                let e = Zr(405, {
                  method: u.formMethod,
                  pathname: s,
                  routeId: i
                });
                return void z(o, i, e)
              }
              let d = v.fetchers.get(o),
                h = Nt({
                  state: "submitting"
                }, u, {
                  data: d && d.data,
                  " _hasFetcherDoneAnything ": !0
                });
              v.fetchers.set(o, h), U({
                fetchers: new Map(v.fetchers)
              });
              let m = new AbortController,
                y = Yr(e.history, s, m.signal, u);
              D.set(o, m);
              let b = await qr("action", y, l, c, n, r, f.basename);
              if (y.signal.aborted) return void(D.get(o) === m && D.delete(o));
              if (an(b)) {
                D.delete(o), x.add(o);
                let e = Nt({
                  state: "loading"
                }, u, {
                  data: void 0,
                  " _hasFetcherDoneAnything ": !0
                });
                return v.fetchers.set(o, e), U({
                  fetchers: new Map(v.fetchers)
                }), j(v, b, {
                  isFetchActionRedirect: !0
                })
              }
              if (nn(b)) return void z(o, i, b.error);
              if (rn(b)) throw Zr(400, {
                type: "defer-action"
              });
              let M = v.navigation.location || v.location,
                L = Yr(e.history, M, m.signal),
                T = t || a,
                _ = "idle" !== v.navigation.state ? rr(T, v.navigation.location, e.basename) : v.matches;
              qt(_, "Didn't find any matches after fetcher action");
              let I = ++S;
              P.set(o, I);
              let N = Nt({
                state: "loading",
                data: b.data
              }, u, {
                " _hasFetcherDoneAnything ": !0
              });
              v.fetchers.set(o, N);
              let [W, K] = Wr(e.history, v, _, u, M, w, E, R, k, T, e.basename, {
                [l.route.id]: b.data
              }, void 0);
              K.filter((e => e.key !== o)).forEach((e => {
                let t = e.key,
                  r = v.fetchers.get(t),
                  n = {
                    state: "loading",
                    data: r && r.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                v.fetchers.set(t, n), D.set(t, m)
              })), U({
                fetchers: new Map(v.fetchers)
              });
              let {
                results: H,
                loaderResults: q,
                fetcherResults: Y
              } = await F(v.matches, _, W, K, L);
              if (m.signal.aborted) return;
              P.delete(o), D.delete(o), K.forEach((e => D.delete(e.key)));
              let J = en(H);
              if (J) return j(v, J);
              let {
                loaderData: V,
                errors: X
              } = Vr(v, v.matches, W, q, void 0, K, Y, C), G = {
                state: "idle",
                data: b.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              v.fetchers.set(o, G);
              let Q = $(I);
              "loading" === v.navigation.state && I > A ? (qt(g, "Expected pending action"), p && p.abort(), O(v.navigation.location, {
                matches: _,
                loaderData: V,
                errors: X,
                fetchers: new Map(v.fetchers)
              })) : (U(Nt({
                errors: X,
                loaderData: Xr(v.loaderData, V, _, X)
              }, Q ? {
                fetchers: new Map(v.fetchers)
              } : {})), w = !1)
            }(o, i, u, h, c, d): (k.set(o, {
              routeId: i,
              path: u
            }), async function(t, a, o, i, s, l) {
              let c = v.fetchers.get(t),
                u = Nt({
                  state: "loading",
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0
                }, l, {
                  data: c && c.data,
                  " _hasFetcherDoneAnything ": !0
                });
              v.fetchers.set(t, u), U({
                fetchers: new Map(v.fetchers)
              });
              let d = new AbortController,
                h = Yr(e.history, o, d.signal);
              D.set(t, d);
              let p = await qr("loader", h, i, s, n, r, f.basename);
              if (rn(p) && (p = await ln(p, h.signal, !0) || p), D.get(t) === d && D.delete(t), h.signal.aborted) return;
              if (an(p)) return void await j(v, p);
              if (nn(p)) {
                let e = Gr(v.matches, a);
                return v.fetchers.delete(t), void U({
                  fetchers: new Map(v.fetchers),
                  errors: {
                    [e.route.id]: p.error
                  }
                })
              }
              qt(!rn(p), "Unhandled fetcher deferred data");
              let m = {
                state: "idle",
                data: p.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              v.fetchers.set(t, m), U({
                fetchers: new Map(v.fetchers)
              })
            }(o, i, u, h, c, d))
          },
          revalidate: function() {
            B(), U({
              revalidation: "loading"
            }), "submitting" !== v.navigation.state && ("idle" !== v.navigation.state ? T(g || v.historyAction, v.navigation.location, {
              overrideNavigation: v.navigation
            }) : T(v.historyAction, v.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: _,
          deleteFetcher: I,
          dispose: function() {
            o && o(), i.clear(), p && p.abort(), v.fetchers.forEach(((e, t) => I(t))), v.blockers.forEach(((e, t) => K(t)))
          },
          getBlocker: function(e, t) {
            let r = v.blockers.get(e) || _r;
            return M.get(e) !== t && M.set(e, t), r
          },
          deleteBlocker: K,
          _internalFetchControllers: D,
          _internalActiveDeferreds: C,
          _internalSetRoutes: function(e) {
            t = e
          }
        }, f
      }

      function Nr(e, t, r) {
        void 0 === r && (r = !1);
        let n, a = "string" == typeof e ? e : Xt(e);
        if (!t || ! function(e) {
            return null != e && "formData" in e
          }(t)) return {
          path: a
        };
        if (t.formMethod && (o = t.formMethod, !Mr.has(o))) return {
          path: a,
          error: Zr(405, {
            method: t.formMethod
          })
        };
        var o;
        if (t.formData && (n = {
            formMethod: t.formMethod || "get",
            formAction: tn(a),
            formEncType: t && t.formEncType || "application/x-www-form-urlencoded",
            formData: t.formData
          }, on(n.formMethod))) return {
          path: a,
          submission: n
        };
        let i = Gt(a),
          s = Jr(t.formData);
        return r && i.search && cn(i.search) && s.append("index", ""), i.search = "?" + s, {
          path: Xt(i),
          submission: n
        }
      }

      function Wr(e, t, r, n, a, o, i, s, l, c, u, d, h) {
        let f = h ? Object.values(h)[0] : d ? Object.values(d)[0] : void 0,
          p = e.createURL(t.location),
          m = e.createURL(a),
          v = o || p.toString() === m.toString() || p.search !== m.search,
          g = h ? Object.keys(h)[0] : void 0,
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
              }(t.loaderData, t.matches[r], e) || i.some((t => t === e.route.id))) return !0;
            let a = t.matches[r],
              o = e;
            return Kr(e, Nt({
              currentUrl: p,
              currentParams: a.params,
              nextUrl: m,
              nextParams: o.params
            }, n, {
              actionResult: f,
              defaultShouldRevalidate: v || $r(a, o)
            }))
          })),
          b = [];
        return l.forEach(((e, a) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let o = rr(c, e.path, u);
          if (!o) return void b.push(Nt({
            key: a
          }, e, {
            matches: null,
            match: null
          }));
          let i = dn(o, e.path);
          (s.includes(a) || Kr(i, Nt({
            currentUrl: p,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: m,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: f,
            defaultShouldRevalidate: v
          }))) && b.push(Nt({
            key: a,
            matches: o,
            match: i
          }, e))
        })), [y, b]
      }

      function $r(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function Kr(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }
      async function Hr(e, t, r) {
        if (!e.lazy) return;
        let n = await e.lazy();
        if (!e.lazy) return;
        let a = r[e.id];
        qt(a, "No route found in manifest");
        let o = {};
        for (let e in n) {
          let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
          Yt(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || er.has(e) || (o[e] = n[e])
        }
        Object.assign(a, o), Object.assign(a, {
          hasErrorBoundary: t(Nt({}, a)),
          lazy: void 0
        })
      }
      async function qr(e, t, r, n, a, o, i, s, l, c) {
        let u, d, h;
        void 0 === i && (i = "/"), void 0 === s && (s = !1), void 0 === l && (l = !1);
        let f = e => {
          let n, a = new Promise(((e, t) => n = t));
          return h = () => n(), t.signal.addEventListener("abort", h), Promise.race([e({
            request: t,
            params: r.params,
            context: c
          }), a])
        };
        try {
          let n = r.route[e];
          if (r.route.lazy)
            if (n) d = (await Promise.all([f(n), Hr(r.route, o, a)]))[0];
            else {
              if (await Hr(r.route, o, a), n = r.route[e], !n) {
                if ("action" === e) throw Zr(405, {
                  method: t.method,
                  pathname: new URL(t.url).pathname,
                  routeId: r.route.id
                });
                return {
                  type: Zt.data,
                  data: void 0
                }
              }
              d = await f(n)
            }
          else qt(n, "Could not find the " + e + ' to run on the "' + r.route.id + '" route'), d = await f(n);
          qt(void 0 !== d, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          u = Zt.error, d = e
        } finally {
          h && t.signal.removeEventListener("abort", h)
        }
        if (null != (p = d) && "number" == typeof p.status && "string" == typeof p.statusText && "object" == typeof p.headers && void 0 !== p.body) {
          let e, a = d.status;
          if (Lr.has(a)) {
            let e = d.headers.get("Location");
            if (qt(e, "Redirects returned/thrown from loaders/actions must have a Location header"), jr.test(e)) {
              if (!s) {
                let r = new URL(t.url),
                  n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  a = null != vr(n.pathname, i);
                n.origin === r.origin && a && (e = n.pathname + n.search + n.hash)
              }
            } else {
              let a = function(e, t, r, n) {
                let a;
                void 0 === n && (n = !1), "string" == typeof e ? a = Gt(e) : (a = Nt({}, e), qt(!a.pathname || !a.pathname.includes("?"), gr("?", "pathname", "search", a)), qt(!a.pathname || !a.pathname.includes("#"), gr("#", "pathname", "hash", a)), qt(!a.search || !a.search.includes("#"), gr("#", "search", "hash", a)));
                let o, i = "" === e || "" === a.pathname,
                  s = i ? "/" : a.pathname;
                if (n || null == s) o = r;
                else {
                  let e = t.length - 1;
                  if (s.startsWith("..")) {
                    let t = s.split("/");
                    for (;
                      ".." === t[0];) t.shift(), e -= 1;
                    a.pathname = t.join("/")
                  }
                  o = e >= 0 ? t[e] : "/"
                }
                let l = function(e, t) {
                    void 0 === t && (t = "/");
                    let {
                      pathname: r,
                      search: n = "",
                      hash: a = ""
                    } = "string" == typeof e ? Gt(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
                      let r = t.replace(/\/+$/, "").split("/");
                      return e.split("/").forEach((e => {
                        ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
                      })), r.length > 1 ? r.join("/") : "/"
                    }(r, t) : t;
                    return {
                      pathname: o,
                      search: Er(n),
                      hash: Rr(a)
                    }
                  }(a, o),
                  c = s && "/" !== s && s.endsWith("/"),
                  u = (i || "." === s) && r.endsWith("/");
                return l.pathname.endsWith("/") || !c && !u || (l.pathname += "/"), l
              }(e, yr(n.slice(0, n.indexOf(r) + 1)).map((e => e.pathnameBase)), new URL(t.url).pathname);
              if (qt(Xt(a), "Unable to resolve redirect location: " + e), i) {
                let e = a.pathname;
                a.pathname = "/" === e ? i : br([i, e])
              }
              e = Xt(a)
            }
            if (s) throw d.headers.set("Location", e), d;
            return {
              type: Zt.redirect,
              status: a,
              location: e,
              revalidate: null !== d.headers.get("X-Remix-Revalidate")
            }
          }
          if (l) throw {
            type: u || Zt.data,
            response: d
          };
          let o = d.headers.get("Content-Type");
          return e = o && /\bapplication\/json\b/.test(o) ? await d.json() : await d.text(), u === Zt.error ? {
            type: u,
            error: new Pr(a, d.statusText, e),
            headers: d.headers
          } : {
            type: Zt.data,
            data: e,
            statusCode: d.status,
            headers: d.headers
          }
        }
        var p, m, v;
        return u === Zt.error ? {
          type: u,
          error: d
        } : d instanceof Sr ? {
          type: Zt.deferred,
          deferredData: d,
          statusCode: null == (m = d.init) ? void 0 : m.status,
          headers: (null == (v = d.init) ? void 0 : v.headers) && new Headers(d.init.headers)
        } : {
          type: Zt.data,
          data: d
        }
      }

      function Yr(e, t, r, n) {
        let a = e.createURL(tn(t)).toString(),
          o = {
            signal: r
          };
        if (n && on(n.formMethod)) {
          let {
            formMethod: e,
            formEncType: t,
            formData: r
          } = n;
          o.method = e.toUpperCase(), o.body = "application/x-www-form-urlencoded" === t ? Jr(r) : r
        }
        return new Request(a, o)
      }

      function Jr(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) t.append(r, n instanceof File ? n.name : n);
        return t
      }

      function Vr(e, t, r, n, a, o, i, s) {
        let {
          loaderData: l,
          errors: c
        } = function(e, t, r, n, a) {
          let o, i = {},
            s = null,
            l = !1,
            c = {};
          return r.forEach(((r, u) => {
            let d = t[u].route.id;
            if (qt(!an(r), "Cannot handle redirect results in processLoaderData"), nn(r)) {
              let t = Gr(e, d),
                a = r.error;
              n && (a = Object.values(n)[0], n = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = a), i[d] = void 0, l || (l = !0, o = function(e) {
                return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
              }(r.error) ? r.error.status : 500), r.headers && (c[d] = r.headers)
            } else rn(r) ? (a.set(d, r.deferredData), i[d] = r.deferredData.data) : i[d] = r.data, null == r.statusCode || 200 === r.statusCode || l || (o = r.statusCode), r.headers && (c[d] = r.headers)
          })), n && (s = n, i[Object.keys(n)[0]] = void 0), {
            loaderData: i,
            errors: s,
            statusCode: o || 200,
            loaderHeaders: c
          }
        }(t, r, n, a, s);
        for (let t = 0; t < o.length; t++) {
          let {
            key: r,
            match: n
          } = o[t];
          qt(void 0 !== i && void 0 !== i[t], "Did not find corresponding fetcher result");
          let a = i[t];
          if (nn(a)) {
            let t = Gr(e.matches, null == n ? void 0 : n.route.id);
            c && c[t.route.id] || (c = Nt({}, c, {
              [t.route.id]: a.error
            })), e.fetchers.delete(r)
          } else if (an(a)) qt(!1, "Unhandled fetcher revalidation redirect");
          else if (rn(a)) qt(!1, "Unhandled fetcher deferred data");
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
          loaderData: l,
          errors: c
        }
      }

      function Xr(e, t, r, n) {
        let a = Nt({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && o.route.loader && (a[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return a
      }

      function Gr(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function Qr(e) {
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

      function Zr(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: a,
          type: o
        } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", a && r && n ? s = "You made a " + a + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === o && (s = "defer() is not supported in actions")) : 403 === e ? (i = "Forbidden", s = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", a && r && n ? s = "You made a " + a.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : a && (s = 'Invalid request method "' + a.toUpperCase() + '"')), new Pr(e || 500, i, new Error(s), !0)
      }

      function en(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (an(r)) return r
        }
      }

      function tn(e) {
        return Xt(Nt({}, "string" == typeof e ? Gt(e) : e, {
          hash: ""
        }))
      }

      function rn(e) {
        return e.type === Zt.deferred
      }

      function nn(e) {
        return e.type === Zt.error
      }

      function an(e) {
        return (e && e.type) === Zt.redirect
      }

      function on(e) {
        return kr.has(e)
      }
      async function sn(e, t, r, n, a, o) {
        for (let i = 0; i < r.length; i++) {
          let s = r[i],
            l = t[i];
          if (!l) continue;
          let c = e.find((e => e.route.id === l.route.id)),
            u = null != c && !$r(c, l) && void 0 !== (o && o[l.route.id]);
          rn(s) && (a || u) && await ln(s, n, a).then((e => {
            e && (r[i] = e || r[i])
          }))
        }
      }
      async function ln(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: Zt.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: Zt.error,
              error: e
            }
          }
          return {
            type: Zt.data,
            data: e.deferredData.data
          }
        }
      }

      function cn(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function un(e, t) {
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

      function dn(e, t) {
        let r = "string" == typeof t ? Gt(t).search : t.search;
        if (e[e.length - 1].route.index && cn(r || "")) return e[e.length - 1];
        let n = yr(e);
        return n[n.length - 1]
      }

      function hn() {
        return hn = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, hn.apply(this, arguments)
      }

      function fn(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }
      Symbol("deferred");
      const pn = "get",
        mn = "application/x-www-form-urlencoded";

      function vn(e) {
        return null != e && "string" == typeof e.tagName
      }

      function gn(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
            [r, n]
          ])
        }), []))
      }
      const yn = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
        bn = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
        wn = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];

      function En(e, t) {
        return Ir({
          basename: null == t ? void 0 : t.basename,
          history: Kt({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || Dn(),
          routes: e,
          detectErrorBoundary: zt
        }).initialize()
      }

      function Rn(e, t) {
        return Ir({
          basename: null == t ? void 0 : t.basename,
          history: Ht({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || Dn(),
          routes: e,
          detectErrorBoundary: zt
        }).initialize()
      }

      function Dn() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = hn({}, t, {
          errors: Sn(t.errors)
        })), t
      }

      function Sn(e) {
        if (!e) return null;
        let t = Object.entries(e),
          r = {};
        for (let [e, n] of t)
          if (n && "RouteErrorResponse" === n.__type) r[e] = new Pr(n.status, n.statusText, n.data, !0 === n.internal);
          else if (n && "Error" === n.__type) {
          let t = new Error(n.message);
          t.stack = "", r[e] = t
        } else r[e] = n;
        return r
      }

      function An(e) {
        let {
          basename: t,
          children: r,
          window: n
        } = e, a = o.useRef();
        null == a.current && (a.current = Kt({
          window: n,
          v5Compat: !0
        }));
        let i = a.current,
          [s, l] = o.useState({
            action: i.action,
            location: i.location
          });
        return o.useLayoutEffect((() => i.listen(l)), [i]), o.createElement(Mt, {
          basename: t,
          children: r,
          location: s.location,
          navigationType: s.action,
          navigator: i
        })
      }

      function Pn(e) {
        let {
          basename: t,
          children: r,
          window: n
        } = e, a = o.useRef();
        null == a.current && (a.current = Ht({
          window: n,
          v5Compat: !0
        }));
        let i = a.current,
          [s, l] = o.useState({
            action: i.action,
            location: i.location
          });
        return o.useLayoutEffect((() => i.listen(l)), [i]), o.createElement(Mt, {
          basename: t,
          children: r,
          location: s.location,
          navigationType: s.action,
          navigator: i
        })
      }

      function xn(e) {
        let {
          basename: t,
          children: r,
          history: n
        } = e;
        const [a, i] = o.useState({
          action: n.action,
          location: n.location
        });
        return o.useLayoutEffect((() => n.listen(i)), [n]), o.createElement(Mt, {
          basename: t,
          children: r,
          location: a.location,
          navigationType: a.action,
          navigator: n
        })
      }
      const kn = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        Cn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Mn = o.forwardRef((function(e, t) {
          let r, {
              onClick: n,
              relative: a,
              reloadDocument: i,
              replace: s,
              state: l,
              target: c,
              to: u,
              preventScrollReset: d
            } = e,
            h = fn(e, yn),
            {
              basename: f
            } = o.useContext(We),
            p = !1;
          if ("string" == typeof u && Cn.test(u) && (r = u, kn)) {
            let e = new URL(window.location.href),
              t = u.startsWith("//") ? new URL(e.protocol + u) : new URL(u),
              r = vr(t.pathname, f);
            t.origin === e.origin && null != r ? u = r + t.search + t.hash : p = !0
          }
          let m = Ye(u, {
              relative: a
            }),
            v = zn(u, {
              replace: s,
              state: l,
              target: c,
              preventScrollReset: d,
              relative: a
            });
          return o.createElement("a", hn({}, h, {
            href: r || m,
            onClick: p || i ? n : function(e) {
              n && n(e), e.defaultPrevented || v(e)
            },
            ref: t,
            target: c
          }))
        })),
        Ln = o.forwardRef((function(e, t) {
          let {
            "aria-current": r = "page",
            caseSensitive: n = !1,
            className: a = "",
            end: i = !1,
            style: s,
            to: l,
            children: c
          } = e, u = fn(e, bn), d = nt(l, {
            relative: u.relative
          }), h = Ve(), f = o.useContext(Ie), {
            navigator: p
          } = o.useContext(We), m = p.encodeLocation ? p.encodeLocation(d).pathname : d.pathname, v = h.pathname, g = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
          n || (v = v.toLowerCase(), g = g ? g.toLowerCase() : null, m = m.toLowerCase());
          let y, b = v === m || !i && v.startsWith(m) && "/" === v.charAt(m.length),
            w = null != g && (g === m || !i && g.startsWith(m) && "/" === g.charAt(m.length)),
            E = b ? r : void 0;
          y = "function" == typeof a ? a({
            isActive: b,
            isPending: w
          }) : [a, b ? "active" : null, w ? "pending" : null].filter(Boolean).join(" ");
          let R = "function" == typeof s ? s({
            isActive: b,
            isPending: w
          }) : s;
          return o.createElement(Mn, hn({}, u, {
            "aria-current": E,
            className: y,
            ref: t,
            style: R,
            to: l
          }), "function" == typeof c ? c({
            isActive: b,
            isPending: w
          }) : c)
        })),
        Un = o.forwardRef(((e, t) => o.createElement(On, hn({}, e, {
          ref: t
        })))),
        On = o.forwardRef(((e, t) => {
          let {
            reloadDocument: r,
            replace: n,
            method: a = pn,
            action: i,
            onSubmit: s,
            fetcherKey: l,
            routeId: c,
            relative: u,
            preventScrollReset: d
          } = e, h = fn(e, wn), f = Wn(l, c), p = "get" === a.toLowerCase() ? "get" : "post", m = $n(i, {
            relative: u
          });
          return o.createElement("form", hn({
            ref: t,
            method: p,
            action: m,
            onSubmit: r ? s : e => {
              if (s && s(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                r = (null == t ? void 0 : t.getAttribute("formmethod")) || a;
              f(t || e.currentTarget, {
                method: r,
                replace: n,
                relative: u,
                preventScrollReset: d
              })
            }
          }, h))
        }));

      function Tn(e) {
        let {
          getKey: t,
          storageKey: r
        } = e;
        return Vn({
          getKey: t,
          storageKey: r
        }), null
      }
      var _n, jn;

      function Fn(e) {
        let t = o.useContext(ze);
        return t || qt(!1), t
      }

      function Bn(e) {
        let t = o.useContext(Ie);
        return t || qt(!1), t
      }

      function zn(e, t) {
        let {
          target: r,
          replace: n,
          state: a,
          preventScrollReset: i,
          relative: s
        } = void 0 === t ? {} : t, l = Qe(), c = Ve(), u = nt(e, {
          relative: s
        });
        return o.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, r)) {
            t.preventDefault();
            let r = void 0 !== n ? n : d(c) === d(u);
            l(e, {
              replace: r,
              state: a,
              preventScrollReset: i,
              relative: s
            })
          }
        }), [c, l, u, n, a, r, e, i, s])
      }

      function In(e) {
        let t = o.useRef(gn(e)),
          r = o.useRef(!1),
          n = Ve(),
          a = o.useMemo((() => function(e, t) {
            let r = gn(e);
            if (t)
              for (let e of t.keys()) r.has(e) || t.getAll(e).forEach((t => {
                r.append(e, t)
              }));
            return r
          }(n.search, r.current ? null : t.current)), [n.search]),
          i = Qe(),
          s = o.useCallback(((e, t) => {
            const n = gn("function" == typeof e ? e(a) : e);
            r.current = !0, i("?" + n, t)
          }), [i, a]);
        return [a, s]
      }

      function Nn() {
        return Wn()
      }

      function Wn(e, t) {
        let {
          router: r
        } = Fn(_n.UseSubmitImpl), n = $n();
        return o.useCallback((function(a, o) {
          if (void 0 === o && (o = {}), "undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
          let {
            method: i,
            encType: s,
            formData: l,
            url: c
          } = function(e, t, r) {
            let n, a, o, i;
            if (vn(s = e) && "form" === s.tagName.toLowerCase()) {
              let s = r.submissionTrigger;
              n = r.method || e.getAttribute("method") || pn, a = r.action || e.getAttribute("action") || t, o = r.encType || e.getAttribute("enctype") || mn, i = new FormData(e), s && s.name && i.append(s.name, s.value)
            } else if (function(e) {
                return vn(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return vn(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let s = e.form;
              if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              n = r.method || e.getAttribute("formmethod") || s.getAttribute("method") || pn, a = r.action || e.getAttribute("formaction") || s.getAttribute("action") || t, o = r.encType || e.getAttribute("formenctype") || s.getAttribute("enctype") || mn, i = new FormData(s), e.name && i.append(e.name, e.value)
            } else {
              if (vn(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              if (n = r.method || pn, a = r.action || t, o = r.encType || mn, e instanceof FormData) i = e;
              else if (i = new FormData, e instanceof URLSearchParams)
                for (let [t, r] of e) i.append(t, r);
              else if (null != e)
                for (let t of Object.keys(e)) i.append(t, e[t])
            }
            var s;
            let {
              protocol: l,
              host: c
            } = window.location;
            return {
              url: new URL(a, l + "//" + c),
              method: n.toLowerCase(),
              encType: o,
              formData: i
            }
          }(a, n, o), u = c.pathname + c.search, d = {
            replace: o.replace,
            preventScrollReset: o.preventScrollReset,
            formData: l,
            formMethod: i,
            formEncType: s
          };
          e ? (null == t && qt(!1), r.fetch(e, t, u, d)) : r.navigate(u, d)
        }), [n, r, e, t])
      }

      function $n(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: n
        } = o.useContext(We), a = o.useContext(Ke);
        a || qt(!1);
        let [i] = a.matches.slice(-1), s = hn({}, nt(e || ".", {
          relative: r
        })), l = Ve();
        if (null == e && (s.search = l.search, s.hash = l.hash, i.route.index)) {
          let e = new URLSearchParams(s.search);
          e.delete("index"), s.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !i.route.index || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (s.pathname = "/" === s.pathname ? n : br([n, s.pathname])), d(s)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
      })(_n || (_n = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(jn || (jn = {}));
      let Kn = 0;

      function Hn() {
        var e;
        let {
          router: t
        } = Fn(_n.UseFetcher), r = o.useContext(Ke);
        r || qt(!1);
        let n = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
        null == n && qt(!1);
        let [a] = o.useState((() => String(++Kn))), [i] = o.useState((() => (n || qt(!1), function(e, t) {
          return o.forwardRef(((r, n) => o.createElement(On, hn({}, r, {
            ref: n,
            fetcherKey: e,
            routeId: t
          }))))
        }(a, n)))), [s] = o.useState((() => e => {
          t || qt(!1), n || qt(!1), t.fetch(a, n, e)
        })), l = Wn(a, n), c = t.getFetcher(a), u = o.useMemo((() => hn({
          Form: i,
          submit: l,
          load: s
        }, c)), [c, i, l, s]);
        return o.useEffect((() => () => {
          t ? t.deleteFetcher(a) : console.warn("No fetcher available to clean up from useFetcher()")
        }), [t, a]), u
      }

      function qn() {
        return [...Bn(jn.UseFetchers).fetchers.values()]
      }
      const Yn = "react-router-scroll-positions";
      let Jn = {};

      function Vn(e) {
        let {
          getKey: t,
          storageKey: r
        } = void 0 === e ? {} : e, {
          router: n
        } = Fn(_n.UseScrollRestoration), {
          restoreScrollPosition: a,
          preventScrollReset: i
        } = Bn(jn.UseScrollRestoration), s = Ve(), l = vt(), c = pt();
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
              let e = (t ? t(s, l) : null) || s.key;
              Jn[e] = window.scrollY
            }
            sessionStorage.setItem(r || Yn, JSON.stringify(Jn)), window.history.scrollRestoration = "auto"
          }), [r, t, c.state, s, l])), "undefined" != typeof document && (o.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(r || Yn);
              e && (Jn = JSON.parse(e))
            } catch (e) {}
          }), [r]), o.useLayoutEffect((() => {
            let e = null == n ? void 0 : n.enableScrollRestoration(Jn, (() => window.scrollY), t);
            return () => e && e()
          }), [n, t]), o.useLayoutEffect((() => {
            if (!1 !== a)
              if ("number" != typeof a) {
                if (s.hash) {
                  let e = document.getElementById(s.hash.slice(1));
                  if (e) return void e.scrollIntoView()
                }!0 !== i && window.scrollTo(0, 0)
              } else window.scrollTo(0, a)
          }), [s, a, i]))
      }

      function Xn(e, t) {
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

      function Gn(e) {
        let {
          when: t,
          message: r
        } = e, n = St(t);
        o.useEffect((() => {
          "blocked" !== n.state || t || n.reset()
        }), [n, t]), o.useEffect((() => {
          "blocked" === n.state && (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset())
        }), [n, r])
      }
    }
  }
]);