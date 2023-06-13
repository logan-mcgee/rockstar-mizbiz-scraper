/*! For license information please see 9e2489f61b550c76ac5f.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [489], {
    489: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => N,
        Await: () => Pt,
        BrowserRouter: () => ba,
        Form: () => Aa,
        HashRouter: () => wa,
        Link: () => Sa,
        MemoryRouter: () => Dt,
        NavLink: () => xa,
        Navigate: () => St,
        NavigationType: () => a,
        Outlet: () => xt,
        Route: () => At,
        Router: () => kt,
        RouterProvider: () => Et,
        Routes: () => Ct,
        ScrollRestoration: () => Ca,
        UNSAFE_DataRouterContext: () => Ue,
        UNSAFE_DataRouterStateContext: () => _e,
        UNSAFE_LocationContext: () => je,
        UNSAFE_NavigationContext: () => Oe,
        UNSAFE_RouteContext: () => Fe,
        UNSAFE_useRouteId: () => ct,
        UNSAFE_useScrollRestoration: () => $a,
        createBrowserRouter: () => ma,
        createHashRouter: () => va,
        createMemoryRouter: () => Ft,
        createPath: () => d,
        createRoutesFromChildren: () => Tt,
        createRoutesFromElements: () => Tt,
        createSearchParams: () => da,
        defer: () => $,
        generatePath: () => k,
        isRouteErrorResponse: () => q,
        json: () => I,
        matchPath: () => C,
        matchRoutes: () => m,
        parsePath: () => h,
        redirect: () => H,
        renderMatches: () => Ot,
        resolvePath: () => M,
        unstable_HistoryRouter: () => Ea,
        unstable_useBlocker: () => wt,
        unstable_usePrompt: () => Ka,
        useActionData: () => mt,
        useAsyncError: () => yt,
        useAsyncValue: () => gt,
        useBeforeUnload: () => Ha,
        useFetcher: () => Ia,
        useFetchers: () => Na,
        useFormAction: () => Fa,
        useHref: () => Ie,
        useInRouterContext: () => Ne,
        useLinkClickHandler: () => _a,
        useLoaderData: () => ft,
        useLocation: () => ze,
        useMatch: () => $e,
        useMatches: () => ht,
        useNavigate: () => Ke,
        useNavigation: () => ut,
        useNavigationType: () => We,
        useOutlet: () => Je,
        useOutletContext: () => Ye,
        useParams: () => Ve,
        useResolvedPath: () => Xe,
        useRevalidator: () => dt,
        useRouteError: () => vt,
        useRouteLoaderData: () => pt,
        useRoutes: () => Ge,
        useSearchParams: () => Ta,
        useSubmit: () => Oa
      });
      var a, n, o = r(822);

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
          }
          return e
        }, i.apply(this, arguments)
      }

      function l(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: n,
          v5Compat: o = !1
        } = e;
        t = r.map(((e, t) => m(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = f(null == n ? t.length - 1 : n),
          l = a.Pop,
          s = null;

        function f(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function p() {
          return t[i]
        }

        function m(e, r, a) {
          void 0 === r && (r = null);
          let n = u(t ? p().pathname : "/", e, r, a);
          return c("/" === n.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), n
        }

        function v(e) {
          return "string" == typeof e ? e : d(e)
        }
        return {
          get index() {
            return i
          },
          get action() {
            return l
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
            l = a.Push;
            let n = m(e, r);
            i += 1, t.splice(i, t.length, n), o && s && s({
              action: l,
              location: n,
              delta: 1
            })
          },
          replace(e, r) {
            l = a.Replace;
            let n = m(e, r);
            t[i] = n, o && s && s({
              action: l,
              location: n,
              delta: 0
            })
          },
          go(e) {
            l = a.Pop;
            let r = f(i + e),
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

      function s(e, t) {
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

      function u(e, t, r, a) {
        return void 0 === r && (r = null), i({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? h(t) : t, {
          state: r,
          key: t && t.key || a || Math.random().toString(36).substr(2, 8)
        })
      }

      function d(e) {
        let {
          pathname: t = "/",
          search: r = "",
          hash: a = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), a && "#" !== a && (t += "#" === a.charAt(0) ? a : "#" + a), t
      }

      function h(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let a = e.indexOf("?");
          a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e)
        }
        return t
      }! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(a || (a = {})),
      function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(n || (n = {}));
      const f = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function p(e, t, r, a) {
        return void 0 === r && (r = []), void 0 === a && (a = {}), e.map(((e, n) => {
          let o = [...r, n],
            l = "string" == typeof e.id ? e.id : o.join("-");
          if (s(!0 !== e.index || !e.children, "Cannot specify children on an index route"), s(!a[l], 'Found a route id collision on id "' + l + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = i({}, e, t(e), {
              id: l
            });
            return a[l] = r, r
          } {
            let r = i({}, e, t(e), {
              id: l,
              children: void 0
            });
            return a[l] = r, e.children && (r.children = p(e.children, t, o, a)), r
          }
        }))
      }

      function m(e, t, r) {
        void 0 === r && (r = "/");
        let a = L(("string" == typeof t ? h(t) : t).pathname || "/", r);
        if (null == a) return null;
        let n = v(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(n);
        let o = null;
        for (let e = 0; null == o && e < n.length; ++e) o = A(n[e], P(a));
        return o
      }

      function v(e, t, r, a) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === a && (a = "");
        let n = (e, n, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: n,
            route: e
          };
          i.relativePath.startsWith("/") && (s(i.relativePath.startsWith(a), 'Absolute route path "' + i.relativePath + '" nested under path "' + a + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(a.length));
          let l = O([a, i.relativePath]),
            c = r.concat(i);
          e.children && e.children.length > 0 && (s(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), v(e.children, t, c, l)), (null != e.path || e.index) && t.push({
            path: l,
            score: x(l, e.index),
            routesMeta: c
          })
        };
        return e.forEach(((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of g(e.path)) n(e, t, r);
          else n(e, t)
        })), t
      }

      function g(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...a] = t, n = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === a.length) return n ? [o, ""] : [o];
        let i = g(a.join("/")),
          l = [];
        return l.push(...i.map((e => "" === e ? o : [o, e].join("/")))), n && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const y = /^:\w+$/,
        b = 3,
        w = 2,
        E = 1,
        R = 10,
        D = -2,
        S = e => "*" === e;

      function x(e, t) {
        let r = e.split("/"),
          a = r.length;
        return r.some(S) && (a += D), t && (a += w), r.filter((e => !S(e))).reduce(((e, t) => e + (y.test(t) ? b : "" === t ? E : R)), a)
      }

      function A(e, t) {
        let {
          routesMeta: r
        } = e, a = {}, n = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            l = e === r.length - 1,
            s = "/" === n ? t : t.slice(n.length) || "/",
            c = C({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: l
            }, s);
          if (!c) return null;
          Object.assign(a, c.params);
          let u = i.route;
          o.push({
            params: a,
            pathname: O([n, c.pathname]),
            pathnameBase: j(O([n, c.pathnameBase])),
            route: u
          }), "/" !== c.pathnameBase && (n = O([n, c.pathnameBase]))
        }
        return o
      }

      function k(e, t) {
        void 0 === t && (t = {});
        let r = e;
        return r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (c(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*")), (r.startsWith("/") ? "/" : "") + r.split(/\/+/).map(((e, r, a) => {
          if (r === a.length - 1 && "*" === e) return t["*"];
          const n = e.match(/^:(\w+)(\??)$/);
          if (n) {
            const [, e, r] = n;
            let a = t[e];
            return "?" === r ? null == a ? "" : a : (null == a && s(!1, 'Missing ":' + e + '" param'), a)
          }
          return e.replace(/\?$/g, "")
        })).filter((e => !!e)).join("/")
      }

      function C(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, a] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), c("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let a = [],
            n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (a.push(t), "/([^\\/]+)")));
          return e.endsWith("*") ? (a.push("*"), n += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : "" !== e && "/" !== e && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), a]
        }(e.path, e.caseSensitive, e.end), n = t.match(r);
        if (!n) return null;
        let o = n[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = n.slice(1);
        return {
          params: a.reduce(((e, t, r) => {
            if ("*" === t) {
              let e = l[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
              try {
                return decodeURIComponent(e)
              } catch (r) {
                return c(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
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
          return c(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function L(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          a = e.charAt(r);
        return a && "/" !== a ? null : e.slice(r) || "/"
      }

      function M(e, t) {
        void 0 === t && (t = "/");
        let {
          pathname: r,
          search: a = "",
          hash: n = ""
        } = "string" == typeof e ? h(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: o,
          search: F(a),
          hash: B(n)
        }
      }

      function U(e, t, r, a) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function _(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function T(e, t, r, a) {
        let n;
        void 0 === a && (a = !1), "string" == typeof e ? n = h(e) : (n = i({}, e), s(!n.pathname || !n.pathname.includes("?"), U("?", "pathname", "search", n)), s(!n.pathname || !n.pathname.includes("#"), U("#", "pathname", "hash", n)), s(!n.search || !n.search.includes("#"), U("#", "search", "hash", n)));
        let o, l = "" === e || "" === n.pathname,
          c = l ? "/" : n.pathname;
        if (a || null == c) o = r;
        else {
          let e = t.length - 1;
          if (c.startsWith("..")) {
            let t = c.split("/");
            for (;
              ".." === t[0];) t.shift(), e -= 1;
            n.pathname = t.join("/")
          }
          o = e >= 0 ? t[e] : "/"
        }
        let u = M(n, o),
          d = c && "/" !== c && c.endsWith("/"),
          f = (l || "." === c) && r.endsWith("/");
        return u.pathname.endsWith("/") || !d && !f || (u.pathname += "/"), u
      }
      const O = e => e.join("/").replace(/\/\/+/g, "/"),
        j = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        F = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        B = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        I = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            a = new Headers(r.headers);
          return a.has("Content-Type") || a.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), i({}, r, {
            headers: a
          }))
        };
      class N extends Error {}
      class z {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], s(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
          let a = () => r(new N("Deferred data aborted"));
          this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", a), this.controller.signal.addEventListener("abort", a), this.data = Object.entries(e).reduce(((e, t) => {
            let [r, a] = t;
            return Object.assign(e, {
              [r]: this.trackPromise(r, a)
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
        onSettle(e, t, r, a) {
          return this.controller.signal.aborted && r instanceof N ? (this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
            get: () => r
          }), Promise.reject(r)) : (this.pendingKeysSet.delete(t), this.done && this.unlistenAbortSignal(), r ? (Object.defineProperty(e, "_error", {
            get: () => r
          }), this.emit(!1, t), Promise.reject(r)) : (Object.defineProperty(e, "_data", {
            get: () => a
          }), this.emit(!1, t), a))
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
              this.subscribe((a => {
                e.removeEventListener("abort", r), (a || this.done) && t(a)
              }))
            }))
          }
          return t
        }
        get done() {
          return 0 === this.pendingKeysSet.size
        }
        get unwrappedData() {
          return s(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
            let [r, a] = t;
            return Object.assign(e, {
              [r]: W(a)
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
          return void 0 === t && (t = {}), new z(e, "number" == typeof t ? {
            status: t
          } : t)
        },
        H = function(e, t) {
          void 0 === t && (t = 302);
          let r = t;
          "number" == typeof r ? r = {
            status: r
          } : void 0 === r.status && (r.status = 302);
          let a = new Headers(r.headers);
          return a.set("Location", e), new Response(null, i({}, r, {
            headers: a
          }))
        };
      class K {
        constructor(e, t, r, a) {
          void 0 === a && (a = !1), this.status = e, this.statusText = t || "", this.internal = a, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
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
        ae = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        ne = !ae,
        oe = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        });

      function ie(e, t, r, a, n, o, i) {
        let l, s;
        if (null != o && "path" !== i) {
          l = [];
          for (let e of t)
            if (l.push(e), e.route.id === o) {
              s = e;
              break
            }
        } else l = t, s = t[t.length - 1];
        let c = T(n || ".", _(l).map((e => e.pathnameBase)), L(e.pathname, r) || e.pathname, "path" === i);
        return null == n && (c.search = e.search, c.hash = e.hash), null != n && "" !== n && "." !== n || !s || !s.route.index || Ce(c.search) || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), a && "/" !== r && (c.pathname = "/" === c.pathname ? r : O([r, c.pathname])), d(c)
      }

      function le(e, t, r, a) {
        if (!a || ! function(e) {
            return null != e && "formData" in e
          }(a)) return {
          path: r
        };
        if (a.formMethod && (n = a.formMethod, !X.has(n.toLowerCase()))) return {
          path: r,
          error: be(405, {
            method: a.formMethod
          })
        };
        var n;
        let o;
        if (a.formData) {
          let t = a.formMethod || "get";
          if (o = {
              formMethod: e ? t.toUpperCase() : t.toLowerCase(),
              formAction: Ee(r),
              formEncType: a && a.formEncType || "application/x-www-form-urlencoded",
              formData: a.formData
            }, xe(o.formMethod)) return {
            path: r,
            submission: o
          }
        }
        let i = h(r),
          l = pe(a.formData);
        return t && i.search && Ce(i.search) && l.append("index", ""), i.search = "?" + l, {
          path: d(i),
          submission: o
        }
      }

      function se(e, t, r, a, n, o, l, s, c, u, d, h, f) {
        let p = f ? Object.values(f)[0] : h ? Object.values(h)[0] : void 0,
          v = e.createURL(t.location),
          g = e.createURL(n),
          y = f ? Object.keys(f)[0] : void 0,
          b = function(e, t) {
            let r = e;
            if (t) {
              let a = e.findIndex((e => e.route.id === t));
              a >= 0 && (r = e.slice(0, a))
            }
            return r
          }(r, y).filter(((e, r) => {
            if (e.route.lazy) return !0;
            if (null == e.route.loader) return !1;
            if (function(e, t, r) {
                let a = !t || r.route.id !== t.route.id,
                  n = void 0 === e[r.route.id];
                return a || n
              }(t.loaderData, t.matches[r], e) || l.some((t => t === e.route.id))) return !0;
            let n = t.matches[r],
              s = e;
            return ue(e, i({
              currentUrl: v,
              currentParams: n.params,
              nextUrl: g,
              nextParams: s.params
            }, a, {
              actionResult: p,
              defaultShouldRevalidate: o || v.pathname + v.search === g.pathname + g.search || v.search !== g.search || ce(n, s)
            }))
          })),
          w = [];
        return c.forEach(((e, n) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let l = m(u, e.path, d);
          if (!l) return void w.push({
            key: n,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let c = Le(l, e.path);
          (s.includes(n) || ue(c, i({
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: g,
            nextParams: r[r.length - 1].params
          }, a, {
            actionResult: p,
            defaultShouldRevalidate: o
          }))) && w.push({
            key: n,
            routeId: e.routeId,
            path: e.path,
            matches: l,
            match: c,
            controller: new AbortController
          })
        })), [b, w]
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
        let a = await e.lazy();
        if (!e.lazy) return;
        let n = r[e.id];
        s(n, "No route found in manifest");
        let o = {};
        for (let e in a) {
          let t = void 0 !== n[e] && "hasErrorBoundary" !== e;
          c(!t, 'Route "' + n.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || f.has(e) || (o[e] = a[e])
        }
        Object.assign(n, o), Object.assign(n, i({}, t(n), {
          lazy: void 0
        }))
      }
      async function he(e, t, r, a, o, i, l, c, u, d) {
        let h, f, p;
        void 0 === c && (c = !1), void 0 === u && (u = !1);
        let m = e => {
          let a, n = new Promise(((e, t) => a = t));
          return p = () => a(), t.signal.addEventListener("abort", p), Promise.race([e({
            request: t,
            params: r.params,
            context: d
          }), n])
        };
        try {
          let a = r.route[e];
          if (r.route.lazy)
            if (a) f = (await Promise.all([m(a), de(r.route, i, o)]))[0];
            else {
              if (await de(r.route, i, o), a = r.route[e], !a) {
                if ("action" === e) {
                  let e = new URL(t.url),
                    a = e.pathname + e.search;
                  throw be(405, {
                    method: t.method,
                    pathname: a,
                    routeId: r.route.id
                  })
                }
                return {
                  type: n.data,
                  data: void 0
                }
              }
              f = await m(a)
            }
          else {
            if (!a) {
              let e = new URL(t.url);
              throw be(404, {
                pathname: e.pathname + e.search
              })
            }
            f = await m(a)
          }
          s(void 0 !== f, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          h = n.error, f = e
        } finally {
          p && t.signal.removeEventListener("abort", p)
        }
        if (null != (v = f) && "number" == typeof v.status && "string" == typeof v.statusText && "object" == typeof v.headers && void 0 !== v.body) {
          let e, o = f.status;
          if (G.has(o)) {
            let e = f.headers.get("Location");
            if (s(e, "Redirects returned/thrown from loaders/actions must have a Location header"), re.test(e)) {
              if (!c) {
                let r = new URL(t.url),
                  a = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  n = null != L(a.pathname, l);
                a.origin === r.origin && n && (e = a.pathname + a.search + a.hash)
              }
            } else e = ie(new URL(t.url), a.slice(0, a.indexOf(r) + 1), l, !0, e);
            if (c) throw f.headers.set("Location", e), f;
            return {
              type: n.redirect,
              status: o,
              location: e,
              revalidate: null !== f.headers.get("X-Remix-Revalidate")
            }
          }
          if (u) throw {
            type: h || n.data,
            response: f
          };
          let i = f.headers.get("Content-Type");
          return e = i && /\bapplication\/json\b/.test(i) ? await f.json() : await f.text(), h === n.error ? {
            type: h,
            error: new K(o, f.statusText, e),
            headers: f.headers
          } : {
            type: n.data,
            data: e,
            statusCode: f.status,
            headers: f.headers
          }
        }
        var v, g, y;
        return h === n.error ? {
          type: h,
          error: f
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(f) ? {
          type: n.deferred,
          deferredData: f,
          statusCode: null == (g = f.init) ? void 0 : g.status,
          headers: (null == (y = f.init) ? void 0 : y.headers) && new Headers(f.init.headers)
        } : {
          type: n.data,
          data: f
        }
      }

      function fe(e, t, r, a) {
        let n = e.createURL(Ee(t)).toString(),
          o = {
            signal: r
          };
        if (a && xe(a.formMethod)) {
          let {
            formMethod: e,
            formEncType: t,
            formData: r
          } = a;
          o.method = e.toUpperCase(), o.body = "application/x-www-form-urlencoded" === t ? pe(r) : r
        }
        return new Request(n, o)
      }

      function pe(e) {
        let t = new URLSearchParams;
        for (let [r, a] of e.entries()) t.append(r, a instanceof File ? a.name : a);
        return t
      }

      function me(e, t, r, a, n, o, l, c) {
        let {
          loaderData: u,
          errors: d
        } = function(e, t, r, a, n) {
          let o, i = {},
            l = null,
            c = !1,
            u = {};
          return r.forEach(((r, d) => {
            let h = t[d].route.id;
            if (s(!Se(r), "Cannot handle redirect results in processLoaderData"), De(r)) {
              let t = ge(e, h),
                n = r.error;
              a && (n = Object.values(a)[0], a = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = n), i[h] = void 0, c || (c = !0, o = q(r.error) ? r.error.status : 500), r.headers && (u[h] = r.headers)
            } else Re(r) ? (n.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || c || (o = r.statusCode), r.headers && (u[h] = r.headers)
          })), a && (l = a, i[Object.keys(a)[0]] = void 0), {
            loaderData: i,
            errors: l,
            statusCode: o || 200,
            loaderHeaders: u
          }
        }(t, r, a, n, c);
        for (let t = 0; t < o.length; t++) {
          let {
            key: r,
            match: a,
            controller: n
          } = o[t];
          s(void 0 !== l && void 0 !== l[t], "Did not find corresponding fetcher result");
          let c = l[t];
          if (!n || !n.signal.aborted)
            if (De(c)) {
              let t = ge(e.matches, null == a ? void 0 : a.route.id);
              d && d[t.route.id] || (d = i({}, d, {
                [t.route.id]: c.error
              })), e.fetchers.delete(r)
            } else if (Se(c)) s(!1, "Unhandled fetcher revalidation redirect");
          else if (Re(c)) s(!1, "Unhandled fetcher deferred data");
          else {
            let t = {
              state: "idle",
              data: c.data,
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

      function ve(e, t, r, a) {
        let n = i({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (n[r] = t[r]) : void 0 !== e[r] && o.route.loader && (n[r] = e[r]), a && a.hasOwnProperty(r)) break
        }
        return n
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
          routeId: a,
          method: n,
          type: o
        } = void 0 === t ? {} : t, i = "Unknown Server Error", l = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", n && r && a ? l = "You made a " + n + ' request to "' + r + '" but did not provide a `loader` for route "' + a + '", so there is no way to handle the request.' : "defer-action" === o && (l = "defer() is not supported in actions")) : 403 === e ? (i = "Forbidden", l = 'Route "' + a + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", n && r && a ? l = "You made a " + n.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + a + '", so there is no way to handle the request.' : n && (l = 'Invalid request method "' + n.toUpperCase() + '"')), new K(e || 500, i, new Error(l), !0)
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
        return e.type === n.deferred
      }

      function De(e) {
        return e.type === n.error
      }

      function Se(e) {
        return (e && e.type) === n.redirect
      }

      function xe(e) {
        return J.has(e.toLowerCase())
      }
      async function Ae(e, t, r, a, n, o) {
        for (let i = 0; i < r.length; i++) {
          let l = r[i],
            c = t[i];
          if (!c) continue;
          let u = e.find((e => e.route.id === c.route.id)),
            d = null != u && !ce(u, c) && void 0 !== (o && o[c.route.id]);
          if (Re(l) && (n || d)) {
            let e = a[i];
            s(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await ke(l, e, n).then((e => {
              e && (r[i] = e || r[i])
            }))
          }
        }
      }
      async function ke(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: n.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: n.error,
              error: e
            }
          }
          return {
            type: n.data,
            data: e.deferredData.data
          }
        }
      }

      function Ce(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function Pe(e, t) {
        let {
          route: r,
          pathname: a,
          params: n
        } = e;
        return {
          id: r.id,
          pathname: a,
          params: n,
          data: t[r.id],
          handle: r.handle
        }
      }

      function Le(e, t) {
        let r = "string" == typeof t ? h(t).search : t.search;
        if (e[e.length - 1].route.index && Ce(r || "")) return e[e.length - 1];
        let a = _(e);
        return a[a.length - 1]
      }

      function Me() {
        return Me = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
          }
          return e
        }, Me.apply(this, arguments)
      }
      Symbol("deferred");
      const Ue = o.createContext(null),
        _e = o.createContext(null),
        Te = o.createContext(null),
        Oe = o.createContext(null),
        je = o.createContext(null),
        Fe = o.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        Be = o.createContext(null);

      function Ie(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        Ne() || s(!1);
        let {
          basename: a,
          navigator: n
        } = o.useContext(Oe), {
          hash: i,
          pathname: l,
          search: c
        } = Xe(e, {
          relative: r
        }), u = l;
        return "/" !== a && (u = "/" === l ? a : O([a, l])), n.createHref({
          pathname: u,
          search: c,
          hash: i
        })
      }

      function Ne() {
        return null != o.useContext(je)
      }

      function ze() {
        return Ne() || s(!1), o.useContext(je).location
      }

      function We() {
        return o.useContext(je).navigationType
      }

      function $e(e) {
        Ne() || s(!1);
        let {
          pathname: t
        } = ze();
        return o.useMemo((() => C(e, t)), [t, e])
      }

      function He(e) {
        o.useContext(Oe).static || o.useLayoutEffect(e)
      }

      function Ke() {
        let {
          isDataRoute: e
        } = o.useContext(Fe);
        return e ? function() {
          let {
            router: e
          } = it(nt.UseNavigateStable), t = st(ot.UseNavigateStable), r = o.useRef(!1);
          return He((() => {
            r.current = !0
          })), o.useCallback((function(a, n) {
            void 0 === n && (n = {}), r.current && ("number" == typeof a ? e.navigate(a) : e.navigate(a, Me({
              fromRouteId: t
            }, n)))
          }), [e, t])
        }() : function() {
          Ne() || s(!1);
          let e = o.useContext(Ue),
            {
              basename: t,
              navigator: r
            } = o.useContext(Oe),
            {
              matches: a
            } = o.useContext(Fe),
            {
              pathname: n
            } = ze(),
            i = JSON.stringify(_(a).map((e => e.pathnameBase))),
            l = o.useRef(!1);
          return He((() => {
            l.current = !0
          })), o.useCallback((function(a, o) {
            if (void 0 === o && (o = {}), !l.current) return;
            if ("number" == typeof a) return void r.go(a);
            let s = T(a, JSON.parse(i), n, "path" === o.relative);
            null == e && "/" !== t && (s.pathname = "/" === s.pathname ? t : O([t, s.pathname])), (o.replace ? r.replace : r.push)(s, o.state, o)
          }), [t, r, i, n, e])
        }()
      }
      const qe = o.createContext(null);

      function Ye() {
        return o.useContext(qe)
      }

      function Je(e) {
        let t = o.useContext(Fe).outlet;
        return t ? o.createElement(qe.Provider, {
          value: e
        }, t) : t
      }

      function Ve() {
        let {
          matches: e
        } = o.useContext(Fe), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function Xe(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: a
        } = o.useContext(Fe), {
          pathname: n
        } = ze(), i = JSON.stringify(_(a).map((e => e.pathnameBase)));
        return o.useMemo((() => T(e, JSON.parse(i), n, "path" === r)), [e, i, n, r])
      }

      function Ge(e, t) {
        return Qe(e, t)
      }

      function Qe(e, t, r) {
        Ne() || s(!1);
        let {
          navigator: n
        } = o.useContext(Oe), {
          matches: i
        } = o.useContext(Fe), l = i[i.length - 1], c = l ? l.params : {}, u = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let d, f = ze();
        if (t) {
          var p;
          let e = "string" == typeof t ? h(t) : t;
          "/" === u || (null == (p = e.pathname) ? void 0 : p.startsWith(u)) || s(!1), d = e
        } else d = f;
        let v = d.pathname || "/",
          g = m(e, {
            pathname: "/" === u ? v : v.slice(u.length) || "/"
          }),
          y = at(g && g.map((e => Object.assign({}, e, {
            params: Object.assign({}, c, e.params),
            pathname: O([u, n.encodeLocation ? n.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? u : O([u, n.encodeLocation ? n.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), i, r);
        return t && y ? o.createElement(je.Provider, {
          value: {
            location: Me({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, d),
            navigationType: a.Pop
          }
        }, y) : y
      }

      function Ze() {
        let e = vt(),
          t = q(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
          };
        return o.createElement(o.Fragment, null, o.createElement("h2", null, "Unexpected Application Error!"), o.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, t), r ? o.createElement("pre", {
          style: a
        }, r) : null, null)
      }
      const et = o.createElement(Ze, null);
      class tt extends o.Component {
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
          return this.state.error ? o.createElement(Fe.Provider, {
            value: this.props.routeContext
          }, o.createElement(Be.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function rt(e) {
        let {
          routeContext: t,
          match: r,
          children: a
        } = e, n = o.useContext(Ue);
        return n && n.static && n.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = r.route.id), o.createElement(Fe.Provider, {
          value: t
        }, a)
      }

      function at(e, t, r) {
        var a;
        if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
          var n;
          if (null == (n = r) || !n.errors) return null;
          e = r.matches
        }
        let i = e,
          l = null == (a = r) ? void 0 : a.errors;
        if (null != l) {
          let e = i.findIndex((e => e.route.id && (null == l ? void 0 : l[e.route.id])));
          e >= 0 || s(!1), i = i.slice(0, Math.min(i.length, e + 1))
        }
        return i.reduceRight(((e, a, n) => {
          let s = a.route.id ? null == l ? void 0 : l[a.route.id] : null,
            c = null;
          r && (c = a.route.errorElement || et);
          let u = t.concat(i.slice(0, n + 1)),
            d = () => {
              let t;
              return t = s ? c : a.route.Component ? o.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, o.createElement(rt, {
                match: a,
                routeContext: {
                  outlet: e,
                  matches: u,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === n) ? o.createElement(tt, {
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
      var nt, ot;

      function it(e) {
        let t = o.useContext(Ue);
        return t || s(!1), t
      }

      function lt(e) {
        let t = o.useContext(_e);
        return t || s(!1), t
      }

      function st(e) {
        let t = function(e) {
            let t = o.useContext(Fe);
            return t || s(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || s(!1), r.route.id
      }

      function ct() {
        return st(ot.UseRouteId)
      }

      function ut() {
        return lt(ot.UseNavigation).navigation
      }

      function dt() {
        let e = it(nt.UseRevalidator),
          t = lt(ot.UseRevalidator);
        return {
          revalidate: e.router.revalidate,
          state: t.revalidation
        }
      }

      function ht() {
        let {
          matches: e,
          loaderData: t
        } = lt(ot.UseMatches);
        return o.useMemo((() => e.map((e => {
          let {
            pathname: r,
            params: a
          } = e;
          return {
            id: e.route.id,
            pathname: r,
            params: a,
            data: t[e.route.id],
            handle: e.route.handle
          }
        }))), [e, t])
      }

      function ft() {
        let e = lt(ot.UseLoaderData),
          t = st(ot.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function pt(e) {
        return lt(ot.UseRouteLoaderData).loaderData[e]
      }

      function mt() {
        let e = lt(ot.UseActionData);
        return o.useContext(Fe) || s(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function vt() {
        var e;
        let t = o.useContext(Be),
          r = lt(ot.UseRouteError),
          a = st(ot.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[a])
      }

      function gt() {
        let e = o.useContext(Te);
        return null == e ? void 0 : e._data
      }

      function yt() {
        let e = o.useContext(Te);
        return null == e ? void 0 : e._error
      }! function(e) {
        e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate"
      }(nt || (nt = {})),
      function(e) {
        e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId"
      }(ot || (ot = {}));
      let bt = 0;

      function wt(e) {
        let {
          router: t
        } = it(nt.UseBlocker), r = lt(ot.UseBlocker), [a] = o.useState((() => String(++bt))), n = o.useCallback((t => "function" == typeof e ? !!e(t) : !!e), [e]), i = t.getBlocker(a, n);
        return o.useEffect((() => () => t.deleteBlocker(a)), [t, a]), r.blockers.get(a) || i
      }

      function Et(e) {
        let {
          fallbackElement: t,
          router: r
        } = e, [a, n] = o.useState(r.state);
        o.useLayoutEffect((() => r.subscribe(n)), [r, n]);
        let i = o.useMemo((() => ({
            createHref: r.createHref,
            encodeLocation: r.encodeLocation,
            go: e => r.navigate(e),
            push: (e, t, a) => r.navigate(e, {
              state: t,
              preventScrollReset: null == a ? void 0 : a.preventScrollReset
            }),
            replace: (e, t, a) => r.navigate(e, {
              replace: !0,
              state: t,
              preventScrollReset: null == a ? void 0 : a.preventScrollReset
            })
          })), [r]),
          l = r.basename || "/",
          s = o.useMemo((() => ({
            router: r,
            navigator: i,
            static: !1,
            basename: l
          })), [r, i, l]);
        return o.createElement(o.Fragment, null, o.createElement(Ue.Provider, {
          value: s
        }, o.createElement(_e.Provider, {
          value: a
        }, o.createElement(kt, {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: i
        }, r.state.initialized ? o.createElement(Rt, {
          routes: r.routes,
          state: a
        }) : t))), null)
      }

      function Rt(e) {
        let {
          routes: t,
          state: r
        } = e;
        return Qe(t, void 0, r)
      }

      function Dt(e) {
        let {
          basename: t,
          children: r,
          initialEntries: a,
          initialIndex: n
        } = e, i = o.useRef();
        null == i.current && (i.current = l({
          initialEntries: a,
          initialIndex: n,
          v5Compat: !0
        }));
        let s = i.current,
          [c, u] = o.useState({
            action: s.action,
            location: s.location
          });
        return o.useLayoutEffect((() => s.listen(u)), [s]), o.createElement(kt, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: s
        })
      }

      function St(e) {
        let {
          to: t,
          replace: r,
          state: a,
          relative: n
        } = e;
        Ne() || s(!1);
        let {
          matches: i
        } = o.useContext(Fe), {
          pathname: l
        } = ze(), c = Ke(), u = T(t, _(i).map((e => e.pathnameBase)), l, "path" === n), d = JSON.stringify(u);
        return o.useEffect((() => c(JSON.parse(d), {
          replace: r,
          state: a,
          relative: n
        })), [c, d, n, r, a]), null
      }

      function xt(e) {
        return Je(e.context)
      }

      function At(e) {
        s(!1)
      }

      function kt(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: n,
          navigationType: i = a.Pop,
          navigator: l,
          static: c = !1
        } = e;
        Ne() && s(!1);
        let u = t.replace(/^\/*/, "/"),
          d = o.useMemo((() => ({
            basename: u,
            navigator: l,
            static: c
          })), [u, l, c]);
        "string" == typeof n && (n = h(n));
        let {
          pathname: f = "/",
          search: p = "",
          hash: m = "",
          state: v = null,
          key: g = "default"
        } = n, y = o.useMemo((() => {
          let e = L(f, u);
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
        return null == y ? null : o.createElement(Oe.Provider, {
          value: d
        }, o.createElement(je.Provider, {
          children: r,
          value: y
        }))
      }

      function Ct(e) {
        let {
          children: t,
          location: r
        } = e;
        return Ge(Tt(t), r)
      }

      function Pt(e) {
        let {
          children: t,
          errorElement: r,
          resolve: a
        } = e;
        return o.createElement(Ut, {
          resolve: a,
          errorElement: r
        }, o.createElement(_t, null, t))
      }
      var Lt;
      ! function(e) {
        e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
      }(Lt || (Lt = {}));
      const Mt = new Promise((() => {}));
      class Ut extends o.Component {
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
          } = this.props, a = null, n = Lt.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              n = Lt.error;
              let e = this.state.error;
              a = Promise.reject().catch((() => {})), Object.defineProperty(a, "_tracked", {
                get: () => !0
              }), Object.defineProperty(a, "_error", {
                get: () => e
              })
            } else r._tracked ? (a = r, n = void 0 !== a._error ? Lt.error : void 0 !== a._data ? Lt.success : Lt.pending) : (n = Lt.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), a = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else n = Lt.success, a = Promise.resolve(), Object.defineProperty(a, "_tracked", {
            get: () => !0
          }), Object.defineProperty(a, "_data", {
            get: () => r
          });
          if (n === Lt.error && a._error instanceof N) throw Mt;
          if (n === Lt.error && !t) throw a._error;
          if (n === Lt.error) return o.createElement(Te.Provider, {
            value: a,
            children: t
          });
          if (n === Lt.success) return o.createElement(Te.Provider, {
            value: a,
            children: e
          });
          throw a
        }
      }

      function _t(e) {
        let {
          children: t
        } = e, r = gt(), a = "function" == typeof t ? t(r) : t;
        return o.createElement(o.Fragment, null, a)
      }

      function Tt(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return o.Children.forEach(e, ((e, a) => {
          if (!o.isValidElement(e)) return;
          let n = [...t, a];
          if (e.type === o.Fragment) return void r.push.apply(r, Tt(e.props.children, n));
          e.type !== At && s(!1), e.props.index && e.props.children && s(!1);
          let i = {
            id: e.props.id || n.join("-"),
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
          e.props.children && (i.children = Tt(e.props.children, n)), r.push(i)
        })), r
      }

      function Ot(e) {
        return at(e)
      }

      function jt(e) {
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

      function Ft(e, t) {
        return function(e) {
          let t;
          if (s(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) t = e.mapRouteProperties;
          else if (e.detectErrorBoundary) {
            let r = e.detectErrorBoundary;
            t = e => ({
              hasErrorBoundary: r(e)
            })
          } else t = oe;
          let r, o = {},
            l = p(e.routes, t, void 0, o),
            d = e.basename || "/",
            h = i({
              v7_normalizeFormMethod: !1,
              v7_prependBasename: !1
            }, e.future),
            f = null,
            v = new Set,
            g = null,
            y = null,
            b = null,
            w = null != e.hydrationData,
            E = m(l, e.history.location, d),
            R = null;
          if (null == E) {
            let t = be(404, {
                pathname: e.history.location.pathname
              }),
              {
                matches: r,
                route: a
              } = ye(l);
            E = r, R = {
              [a.id]: t
            }
          }
          let D, S, x = !(E.some((e => e.route.lazy)) || E.some((e => e.route.loader)) && null == e.hydrationData),
            A = {
              historyAction: e.history.action,
              location: e.history.location,
              matches: E,
              initialized: x,
              navigation: Z,
              restoreScrollPosition: null == e.hydrationData && null,
              preventScrollReset: !1,
              revalidation: "idle",
              loaderData: e.hydrationData && e.hydrationData.loaderData || {},
              actionData: e.hydrationData && e.hydrationData.actionData || null,
              errors: e.hydrationData && e.hydrationData.errors || R,
              fetchers: new Map,
              blockers: new Map
            },
            k = a.Pop,
            C = !1,
            P = !1,
            M = !1,
            U = [],
            _ = [],
            T = new Map,
            O = 0,
            j = -1,
            F = new Map,
            B = new Set,
            I = new Map,
            N = new Map,
            z = new Map,
            W = !1;

          function $(e) {
            A = i({}, A, e), v.forEach((e => e(A)))
          }

          function H(t, n) {
            var o, s;
            let c, u = null != A.actionData && null != A.navigation.formMethod && xe(A.navigation.formMethod) && "loading" === A.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
            c = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : u ? A.actionData : null;
            let d = n.loaderData ? ve(A.loaderData, n.loaderData, n.matches || [], n.errors) : A.loaderData;
            for (let [e] of z) Ee(e);
            let h = !0 === C || null != A.navigation.formMethod && xe(A.navigation.formMethod) && !0 !== (null == (s = t.state) ? void 0 : s._isRedirect);
            r && (l = r, r = void 0), $(i({}, n, {
              actionData: c,
              loaderData: d,
              historyAction: k,
              location: t,
              initialized: !0,
              navigation: Z,
              revalidation: "idle",
              restoreScrollPosition: _e(t, n.matches || A.matches),
              preventScrollReset: h,
              blockers: new Map(A.blockers)
            })), P || k === a.Pop || (k === a.Push ? e.history.push(t, t.state) : k === a.Replace && e.history.replace(t, t.state)), k = a.Pop, C = !1, P = !1, M = !1, U = [], _ = []
          }
          async function K(s, c, u) {
            S && S.abort(), S = null, k = s, P = !0 === (u && u.startUninterruptedRevalidation),
              function(e, t) {
                if (g && y && b) {
                  let r = t.map((e => Pe(e, A.loaderData))),
                    a = y(e, r) || e.key;
                  g[a] = b()
                }
              }(A.location, A.matches), C = !0 === (u && u.preventScrollReset);
            let h = r || l,
              f = u && u.overrideNavigation,
              p = m(h, c, d);
            if (!p) {
              let e = be(404, {
                  pathname: c.pathname
                }),
                {
                  matches: t,
                  route: r
                } = ye(h);
              return Ue(), void H(c, {
                matches: t,
                loaderData: {},
                errors: {
                  [r.id]: e
                }
              })
            }
            if (A.initialized && (w = c, (v = A.location).pathname === w.pathname && v.search === w.search && ("" === v.hash ? "" !== w.hash : v.hash === w.hash || "" !== w.hash)) && !(u && u.submission && xe(u.submission.formMethod))) return void H(c, {
              matches: p
            });
            var v, w;
            S = new AbortController;
            let E, R, D = fe(e.history, c, S.signal, u && u.submission);
            if (u && u.pendingError) R = {
              [ge(p).route.id]: u.pendingError
            };
            else if (u && u.submission && xe(u.submission.formMethod)) {
              let e = await async function(e, r, l, s, c) {
                let u;
                V(), $({
                  navigation: i({
                    state: "submitting",
                    location: r
                  }, l)
                });
                let h = Le(s, r);
                if (h.route.action || h.route.lazy) {
                  if (u = await he("action", e, h, s, o, t, d), e.signal.aborted) return {
                    shortCircuited: !0
                  }
                } else u = {
                  type: n.error,
                  error: be(405, {
                    method: e.method,
                    pathname: r.pathname,
                    routeId: h.route.id
                  })
                };
                if (Se(u)) {
                  let e;
                  return e = c && null != c.replace ? c.replace : u.location === A.location.pathname + A.location.search, await Y(A, u, {
                    submission: l,
                    replace: e
                  }), {
                    shortCircuited: !0
                  }
                }
                if (De(u)) {
                  let e = ge(s, h.route.id);
                  return !0 !== (c && c.replace) && (k = a.Push), {
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
                    [h.route.id]: u.data
                  }
                }
              }(D, c, u.submission, p, {
                replace: u.replace
              });
              if (e.shortCircuited) return;
              E = e.pendingActionData, R = e.pendingActionError, f = i({
                state: "loading",
                location: c
              }, u.submission), D = new Request(D.url, {
                signal: D.signal
              })
            }
            let {
              shortCircuited: x,
              loaderData: L,
              errors: F
            } = await async function(t, a, n, o, s, c, u, h, f) {
              let p = o;
              p || (p = i({
                state: "loading",
                location: a,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
              }, s));
              let m = s || c ? s || c : p.formMethod && p.formAction && p.formData && p.formEncType ? {
                  formMethod: p.formMethod,
                  formAction: p.formAction,
                  formData: p.formData,
                  formEncType: p.formEncType
                } : void 0,
                v = r || l,
                [g, y] = se(e.history, A, n, m, a, M, U, _, I, v, d, h, f);
              if (Ue((e => !(n && n.some((t => t.route.id === e))) || g && g.some((t => t.route.id === e)))), 0 === g.length && 0 === y.length) {
                let e = de();
                return H(a, i({
                  matches: n,
                  loaderData: {},
                  errors: f || null
                }, h ? {
                  actionData: h
                } : {}, e ? {
                  fetchers: new Map(A.fetchers)
                } : {})), {
                  shortCircuited: !0
                }
              }
              if (!P) {
                y.forEach((e => {
                  let t = A.fetchers.get(e.key),
                    r = {
                      state: "loading",
                      data: t && t.data,
                      formMethod: void 0,
                      formAction: void 0,
                      formEncType: void 0,
                      formData: void 0,
                      " _hasFetcherDoneAnything ": !0
                    };
                  A.fetchers.set(e.key, r)
                }));
                let e = h || A.actionData;
                $(i({
                  navigation: p
                }, e ? 0 === Object.keys(e).length ? {
                  actionData: null
                } : {
                  actionData: e
                } : {}, y.length > 0 ? {
                  fetchers: new Map(A.fetchers)
                } : {}))
              }
              j = ++O, y.forEach((e => {
                e.controller && T.set(e.key, e.controller)
              }));
              let b = () => y.forEach((e => ce(e.key)));
              S && S.signal.addEventListener("abort", b);
              let {
                results: w,
                loaderResults: E,
                fetcherResults: R
              } = await J(A.matches, n, g, y, t);
              if (t.signal.aborted) return {
                shortCircuited: !0
              };
              S && S.signal.removeEventListener("abort", b), y.forEach((e => T.delete(e.key)));
              let D = we(w);
              if (D) return await Y(A, D, {
                replace: u
              }), {
                shortCircuited: !0
              };
              let {
                loaderData: x,
                errors: k
              } = me(A, n, g, E, f, y, R, N);
              N.forEach(((e, t) => {
                e.subscribe((r => {
                  (r || e.done) && N.delete(t)
                }))
              }));
              let C = de(),
                L = pe(j);
              return i({
                loaderData: x,
                errors: k
              }, C || L || y.length > 0 ? {
                fetchers: new Map(A.fetchers)
              } : {})
            }(D, c, p, f, u && u.submission, u && u.fetcherSubmission, u && u.replace, E, R);
            x || (S = null, H(c, i({
              matches: p
            }, E ? {
              actionData: E
            } : {}, {
              loaderData: L,
              errors: F
            })))
          }

          function q(e) {
            return A.fetchers.get(e) || ee
          }
          async function Y(t, r, n) {
            var o;
            let {
              submission: l,
              replace: c,
              isFetchActionRedirect: h
            } = void 0 === n ? {} : n;
            r.revalidate && (M = !0);
            let f = u(t.location, r.location, i({
              _isRedirect: !0
            }, h ? {
              _isFetchActionRedirect: !0
            } : {}));
            if (s(f, "Expected a location on the redirect navigation"), re.test(r.location) && ae && void 0 !== (null == (o = window) ? void 0 : o.location)) {
              let t = e.history.createURL(r.location),
                a = null == L(t.pathname, d);
              if (window.location.origin !== t.origin || a) return void(c ? window.location.replace(r.location) : window.location.assign(r.location))
            }
            S = null;
            let p = !0 === c ? a.Replace : a.Push,
              {
                formMethod: m,
                formAction: v,
                formEncType: g,
                formData: y
              } = t.navigation;
            !l && m && v && y && g && (l = {
              formMethod: m,
              formAction: v,
              formEncType: g,
              formData: y
            }), Q.has(r.status) && l && xe(l.formMethod) ? await K(p, f, {
              submission: i({}, l, {
                formAction: r.location
              }),
              preventScrollReset: C
            }) : h ? await K(p, f, {
              overrideNavigation: {
                state: "loading",
                location: f,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
              },
              fetcherSubmission: l,
              preventScrollReset: C
            }) : await K(p, f, {
              overrideNavigation: {
                state: "loading",
                location: f,
                formMethod: l ? l.formMethod : void 0,
                formAction: l ? l.formAction : void 0,
                formEncType: l ? l.formEncType : void 0,
                formData: l ? l.formData : void 0
              },
              preventScrollReset: C
            })
          }
          async function J(r, a, i, l, s) {
            let c = await Promise.all([...i.map((e => he("loader", s, e, a, o, t, d))), ...l.map((r => r.matches && r.match && r.controller ? he("loader", fe(e.history, r.path, r.controller.signal), r.match, r.matches, o, t, d) : {
                type: n.error,
                error: be(404, {
                  pathname: r.path
                })
              }))]),
              u = c.slice(0, i.length),
              h = c.slice(i.length);
            return await Promise.all([Ae(r, i, u, u.map((() => s.signal)), !1, A.loaderData), Ae(r, l.map((e => e.match)), h, l.map((e => e.controller ? e.controller.signal : null)), !0)]), {
              results: c,
              loaderResults: u,
              fetcherResults: h
            }
          }

          function V() {
            M = !0, U.push(...Ue()), I.forEach(((e, t) => {
              T.has(t) && (_.push(t), ce(t))
            }))
          }

          function X(e, t, r) {
            let a = ge(A.matches, t);
            G(e), $({
              errors: {
                [a.route.id]: r
              },
              fetchers: new Map(A.fetchers)
            })
          }

          function G(e) {
            T.has(e) && ce(e), I.delete(e), F.delete(e), B.delete(e), A.fetchers.delete(e)
          }

          function ce(e) {
            let t = T.get(e);
            s(t, "Expected fetch controller: " + e), t.abort(), T.delete(e)
          }

          function ue(e) {
            for (let t of e) {
              let e = {
                state: "idle",
                data: q(t).data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              A.fetchers.set(t, e)
            }
          }

          function de() {
            let e = [],
              t = !1;
            for (let r of B) {
              let a = A.fetchers.get(r);
              s(a, "Expected fetcher: " + r), "loading" === a.state && (B.delete(r), e.push(r), t = !0)
            }
            return ue(e), t
          }

          function pe(e) {
            let t = [];
            for (let [r, a] of F)
              if (a < e) {
                let e = A.fetchers.get(r);
                s(e, "Expected fetcher: " + r), "loading" === e.state && (ce(r), F.delete(r), t.push(r))
              } return ue(t), t.length > 0
          }

          function Ee(e) {
            A.blockers.delete(e), z.delete(e)
          }

          function Ce(e, t) {
            let r = A.blockers.get(e) || te;
            s("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state), A.blockers.set(e, t), $({
              blockers: new Map(A.blockers)
            })
          }

          function Me(e) {
            let {
              currentLocation: t,
              nextLocation: r,
              historyAction: a
            } = e;
            if (0 === z.size) return;
            z.size > 1 && c(!1, "A router only supports one blocker at a time");
            let n = Array.from(z.entries()),
              [o, i] = n[n.length - 1],
              l = A.blockers.get(o);
            return l && "proceeding" === l.state ? void 0 : i({
              currentLocation: t,
              nextLocation: r,
              historyAction: a
            }) ? o : void 0
          }

          function Ue(e) {
            let t = [];
            return N.forEach(((r, a) => {
              e && !e(a) || (r.cancel(), t.push(a), N.delete(a))
            })), t
          }

          function _e(e, t) {
            if (g && y && b) {
              let r = t.map((e => Pe(e, A.loaderData))),
                a = y(e, r) || e.key,
                n = g[a];
              if ("number" == typeof n) return n
            }
            return null
          }
          return D = {
            get basename() {
              return d
            },
            get state() {
              return A
            },
            get routes() {
              return l
            },
            initialize: function() {
              return f = e.history.listen((t => {
                let {
                  action: r,
                  location: a,
                  delta: n
                } = t;
                if (W) return void(W = !1);
                c(0 === z.size || null != n, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let o = Me({
                  currentLocation: A.location,
                  nextLocation: a,
                  historyAction: r
                });
                return o && null != n ? (W = !0, e.history.go(-1 * n), void Ce(o, {
                  state: "blocked",
                  location: a,
                  proceed() {
                    Ce(o, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: a
                    }), e.history.go(n)
                  },
                  reset() {
                    Ee(o), $({
                      blockers: new Map(D.state.blockers)
                    })
                  }
                })) : K(r, a)
              })), A.initialized || K(a.Pop, A.location), D
            },
            subscribe: function(e) {
              return v.add(e), () => v.delete(e)
            },
            enableScrollRestoration: function(e, t, r) {
              if (g = e, b = t, y = r || (e => e.key), !w && A.navigation === Z) {
                w = !0;
                let e = _e(A.location, A.matches);
                null != e && $({
                  restoreScrollPosition: e
                })
              }
              return () => {
                g = null, b = null, y = null
              }
            },
            navigate: async function t(r, n) {
              if ("number" == typeof r) return void e.history.go(r);
              let o = ie(A.location, A.matches, d, h.v7_prependBasename, r, null == n ? void 0 : n.fromRouteId, null == n ? void 0 : n.relative),
                {
                  path: l,
                  submission: s,
                  error: c
                } = le(h.v7_normalizeFormMethod, !1, o, n),
                f = A.location,
                p = u(A.location, l, n && n.state);
              p = i({}, p, e.history.encodeLocation(p));
              let m = n && null != n.replace ? n.replace : void 0,
                v = a.Push;
              !0 === m ? v = a.Replace : !1 === m || null != s && xe(s.formMethod) && s.formAction === A.location.pathname + A.location.search && (v = a.Replace);
              let g = n && "preventScrollReset" in n ? !0 === n.preventScrollReset : void 0,
                y = Me({
                  currentLocation: f,
                  nextLocation: p,
                  historyAction: v
                });
              if (!y) return await K(v, p, {
                submission: s,
                pendingError: c,
                preventScrollReset: g,
                replace: n && n.replace
              });
              Ce(y, {
                state: "blocked",
                location: p,
                proceed() {
                  Ce(y, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: p
                  }), t(r, n)
                },
                reset() {
                  Ee(y), $({
                    blockers: new Map(A.blockers)
                  })
                }
              })
            },
            fetch: function(a, n, c, u) {
              if (ne) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
              T.has(a) && ce(a);
              let f = r || l,
                p = ie(A.location, A.matches, d, h.v7_prependBasename, c, n, null == u ? void 0 : u.relative),
                v = m(f, p, d);
              if (!v) return void X(a, n, be(404, {
                pathname: p
              }));
              let {
                path: g,
                submission: y
              } = le(h.v7_normalizeFormMethod, !0, p, u), b = Le(v, g);
              C = !0 === (u && u.preventScrollReset), y && xe(y.formMethod) ? async function(a, n, c, u, h, f) {
                if (V(), I.delete(a), !u.route.action && !u.route.lazy) {
                  let e = be(405, {
                    method: f.formMethod,
                    pathname: c,
                    routeId: n
                  });
                  return void X(a, n, e)
                }
                let p = A.fetchers.get(a),
                  v = i({
                    state: "submitting"
                  }, f, {
                    data: p && p.data,
                    " _hasFetcherDoneAnything ": !0
                  });
                A.fetchers.set(a, v), $({
                  fetchers: new Map(A.fetchers)
                });
                let g = new AbortController,
                  y = fe(e.history, c, g.signal, f);
                T.set(a, g);
                let b = await he("action", y, u, h, o, t, d);
                if (y.signal.aborted) return void(T.get(a) === g && T.delete(a));
                if (Se(b)) {
                  T.delete(a), B.add(a);
                  let e = i({
                    state: "loading"
                  }, f, {
                    data: void 0,
                    " _hasFetcherDoneAnything ": !0
                  });
                  return A.fetchers.set(a, e), $({
                    fetchers: new Map(A.fetchers)
                  }), Y(A, b, {
                    submission: f,
                    isFetchActionRedirect: !0
                  })
                }
                if (De(b)) return void X(a, n, b.error);
                if (Re(b)) throw be(400, {
                  type: "defer-action"
                });
                let w = A.navigation.location || A.location,
                  E = fe(e.history, w, g.signal),
                  R = r || l,
                  D = "idle" !== A.navigation.state ? m(R, A.navigation.location, d) : A.matches;
                s(D, "Didn't find any matches after fetcher action");
                let x = ++O;
                F.set(a, x);
                let C = i({
                  state: "loading",
                  data: b.data
                }, f, {
                  " _hasFetcherDoneAnything ": !0
                });
                A.fetchers.set(a, C);
                let [P, L] = se(e.history, A, D, f, w, M, U, _, I, R, d, {
                  [u.route.id]: b.data
                }, void 0);
                L.filter((e => e.key !== a)).forEach((e => {
                  let t = e.key,
                    r = A.fetchers.get(t),
                    a = {
                      state: "loading",
                      data: r && r.data,
                      formMethod: void 0,
                      formAction: void 0,
                      formEncType: void 0,
                      formData: void 0,
                      " _hasFetcherDoneAnything ": !0
                    };
                  A.fetchers.set(t, a), e.controller && T.set(t, e.controller)
                })), $({
                  fetchers: new Map(A.fetchers)
                });
                let z = () => L.forEach((e => ce(e.key)));
                g.signal.addEventListener("abort", z);
                let {
                  results: W,
                  loaderResults: K,
                  fetcherResults: q
                } = await J(A.matches, D, P, L, E);
                if (g.signal.aborted) return;
                g.signal.removeEventListener("abort", z), F.delete(a), T.delete(a), L.forEach((e => T.delete(e.key)));
                let G = we(W);
                if (G) return Y(A, G);
                let {
                  loaderData: Q,
                  errors: Z
                } = me(A, A.matches, P, K, void 0, L, q, N), ee = {
                  state: "idle",
                  data: b.data,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  " _hasFetcherDoneAnything ": !0
                };
                A.fetchers.set(a, ee);
                let te = pe(x);
                "loading" === A.navigation.state && x > j ? (s(k, "Expected pending action"), S && S.abort(), H(A.navigation.location, {
                  matches: D,
                  loaderData: Q,
                  errors: Z,
                  fetchers: new Map(A.fetchers)
                })) : ($(i({
                  errors: Z,
                  loaderData: ve(A.loaderData, Q, D, Z)
                }, te ? {
                  fetchers: new Map(A.fetchers)
                } : {})), M = !1)
              }(a, n, g, b, v, y): (I.set(a, {
                routeId: n,
                path: g
              }), async function(r, a, n, l, c, u) {
                let h = A.fetchers.get(r),
                  f = i({
                    state: "loading",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0
                  }, u, {
                    data: h && h.data,
                    " _hasFetcherDoneAnything ": !0
                  });
                A.fetchers.set(r, f), $({
                  fetchers: new Map(A.fetchers)
                });
                let p = new AbortController,
                  m = fe(e.history, n, p.signal);
                T.set(r, p);
                let v = await he("loader", m, l, c, o, t, d);
                if (Re(v) && (v = await ke(v, m.signal, !0) || v), T.get(r) === p && T.delete(r), m.signal.aborted) return;
                if (Se(v)) return B.add(r), void await Y(A, v);
                if (De(v)) {
                  let e = ge(A.matches, a);
                  return A.fetchers.delete(r), void $({
                    fetchers: new Map(A.fetchers),
                    errors: {
                      [e.route.id]: v.error
                    }
                  })
                }
                s(!Re(v), "Unhandled fetcher deferred data");
                let g = {
                  state: "idle",
                  data: v.data,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  " _hasFetcherDoneAnything ": !0
                };
                A.fetchers.set(r, g), $({
                  fetchers: new Map(A.fetchers)
                })
              }(a, n, g, b, v, y))
            },
            revalidate: function() {
              V(), $({
                revalidation: "loading"
              }), "submitting" !== A.navigation.state && ("idle" !== A.navigation.state ? K(k || A.historyAction, A.navigation.location, {
                overrideNavigation: A.navigation
              }) : K(A.historyAction, A.location, {
                startUninterruptedRevalidation: !0
              }))
            },
            createHref: t => e.history.createHref(t),
            encodeLocation: t => e.history.encodeLocation(t),
            getFetcher: q,
            deleteFetcher: G,
            dispose: function() {
              f && f(), v.clear(), S && S.abort(), A.fetchers.forEach(((e, t) => G(t))), A.blockers.forEach(((e, t) => Ee(t)))
            },
            getBlocker: function(e, t) {
              let r = A.blockers.get(e) || te;
              return z.get(e) !== t && z.set(e, t), r
            },
            deleteBlocker: Ee,
            _internalFetchControllers: T,
            _internalActiveDeferreds: N,
            _internalSetRoutes: function(e) {
              o = {}, r = p(e, t, void 0, o)
            }
          }, D
        }({
          basename: null == t ? void 0 : t.basename,
          future: Me({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: l({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          mapRouteProperties: jt
        }).initialize()
      }

      function Bt() {
        return Bt = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
          }
          return e
        }, Bt.apply(this, arguments)
      }
      var It;
      ! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(It || (It = {}));
      const Nt = "popstate";

      function zt(e) {
        return void 0 === e && (e = {}), Vt((function(e, t) {
          let {
            pathname: r,
            search: a,
            hash: n
          } = e.location;
          return qt("", {
            pathname: r,
            search: a,
            hash: n
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          return "string" == typeof t ? t : Yt(t)
        }), null, e)
      }

      function Wt(e) {
        return void 0 === e && (e = {}), Vt((function(e, t) {
          let {
            pathname: r = "/",
            search: a = "",
            hash: n = ""
          } = Jt(e.location.hash.substr(1));
          return qt("", {
            pathname: r,
            search: a,
            hash: n
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          let r = e.document.querySelector("base"),
            a = "";
          if (r && r.getAttribute("href")) {
            let t = e.location.href,
              r = t.indexOf("#");
            a = -1 === r ? t : t.slice(0, r)
          }
          return a + "#" + ("string" == typeof t ? t : Yt(t))
        }), (function(e, t) {
          Ht("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
        }), e)
      }

      function $t(e, t) {
        if (!1 === e || null == e) throw new Error(t)
      }

      function Ht(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function Kt(e, t) {
        return {
          usr: e.state,
          key: e.key,
          idx: t
        }
      }

      function qt(e, t, r, a) {
        return void 0 === r && (r = null), Bt({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? Jt(t) : t, {
          state: r,
          key: t && t.key || a || Math.random().toString(36).substr(2, 8)
        })
      }

      function Yt(e) {
        let {
          pathname: t = "/",
          search: r = "",
          hash: a = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), a && "#" !== a && (t += "#" === a.charAt(0) ? a : "#" + a), t
      }

      function Jt(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let a = e.indexOf("?");
          a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e)
        }
        return t
      }

      function Vt(e, t, r, a) {
        void 0 === a && (a = {});
        let {
          window: n = document.defaultView,
          v5Compat: o = !1
        } = a, i = n.history, l = It.Pop, s = null, c = u();

        function u() {
          return (i.state || {
            idx: null
          }).idx
        }

        function d() {
          l = It.Pop;
          let e = u(),
            t = null == e ? null : e - c;
          c = e, s && s({
            action: l,
            location: f.location,
            delta: t
          })
        }

        function h(e) {
          let t = "null" !== n.location.origin ? n.location.origin : n.location.href,
            r = "string" == typeof e ? e : Yt(e);
          return $t(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
        }
        null == c && (c = 0, i.replaceState(Bt({}, i.state, {
          idx: c
        }), ""));
        let f = {
          get action() {
            return l
          },
          get location() {
            return e(n, i)
          },
          listen(e) {
            if (s) throw new Error("A history only accepts one active listener");
            return n.addEventListener(Nt, d), s = e, () => {
              n.removeEventListener(Nt, d), s = null
            }
          },
          createHref: e => t(n, e),
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
            l = It.Push;
            let a = qt(f.location, e, t);
            r && r(a, e), c = u() + 1;
            let d = Kt(a, c),
              h = f.createHref(a);
            try {
              i.pushState(d, "", h)
            } catch (e) {
              n.location.assign(h)
            }
            o && s && s({
              action: l,
              location: f.location,
              delta: 1
            })
          },
          replace: function(e, t) {
            l = It.Replace;
            let a = qt(f.location, e, t);
            r && r(a, e), c = u();
            let n = Kt(a, c),
              d = f.createHref(a);
            i.replaceState(n, "", d), o && s && s({
              action: l,
              location: f.location,
              delta: 0
            })
          },
          go: e => i.go(e)
        };
        return f
      }
      var Xt;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(Xt || (Xt = {}));
      const Gt = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function Qt(e, t, r, a) {
        return void 0 === r && (r = []), void 0 === a && (a = {}), e.map(((e, n) => {
          let o = [...r, n],
            i = "string" == typeof e.id ? e.id : o.join("-");
          if ($t(!0 !== e.index || !e.children, "Cannot specify children on an index route"), $t(!a[i], 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = Bt({}, e, t(e), {
              id: i
            });
            return a[i] = r, r
          } {
            let r = Bt({}, e, t(e), {
              id: i,
              children: void 0
            });
            return a[i] = r, e.children && (r.children = Qt(e.children, t, o, a)), r
          }
        }))
      }

      function Zt(e, t, r) {
        void 0 === r && (r = "/");
        let a = fr(("string" == typeof t ? Jt(t) : t).pathname || "/", r);
        if (null == a) return null;
        let n = er(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(n);
        let o = null;
        for (let e = 0; null == o && e < n.length; ++e) o = ur(n[e], hr(a));
        return o
      }

      function er(e, t, r, a) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === a && (a = "");
        let n = (e, n, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: n,
            route: e
          };
          i.relativePath.startsWith("/") && ($t(i.relativePath.startsWith(a), 'Absolute route path "' + i.relativePath + '" nested under path "' + a + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(a.length));
          let l = vr([a, i.relativePath]),
            s = r.concat(i);
          e.children && e.children.length > 0 && ($t(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), er(e.children, t, s, l)), (null != e.path || e.index) && t.push({
            path: l,
            score: cr(l, e.index),
            routesMeta: s
          })
        };
        return e.forEach(((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of tr(e.path)) n(e, t, r);
          else n(e, t)
        })), t
      }

      function tr(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...a] = t, n = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === a.length) return n ? [o, ""] : [o];
        let i = tr(a.join("/")),
          l = [];
        return l.push(...i.map((e => "" === e ? o : [o, e].join("/")))), n && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const rr = /^:\w+$/,
        ar = 3,
        nr = 2,
        or = 1,
        ir = 10,
        lr = -2,
        sr = e => "*" === e;

      function cr(e, t) {
        let r = e.split("/"),
          a = r.length;
        return r.some(sr) && (a += lr), t && (a += nr), r.filter((e => !sr(e))).reduce(((e, t) => e + (rr.test(t) ? ar : "" === t ? or : ir)), a)
      }

      function ur(e, t) {
        let {
          routesMeta: r
        } = e, a = {}, n = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            l = e === r.length - 1,
            s = "/" === n ? t : t.slice(n.length) || "/",
            c = dr({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: l
            }, s);
          if (!c) return null;
          Object.assign(a, c.params);
          let u = i.route;
          o.push({
            params: a,
            pathname: vr([n, c.pathname]),
            pathnameBase: gr(vr([n, c.pathnameBase])),
            route: u
          }), "/" !== c.pathnameBase && (n = vr([n, c.pathnameBase]))
        }
        return o
      }

      function dr(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, a] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), Ht("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let a = [],
            n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (a.push(t), "/([^\\/]+)")));
          return e.endsWith("*") ? (a.push("*"), n += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : "" !== e && "/" !== e && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), a]
        }(e.path, e.caseSensitive, e.end), n = t.match(r);
        if (!n) return null;
        let o = n[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = n.slice(1);
        return {
          params: a.reduce(((e, t, r) => {
            if ("*" === t) {
              let e = l[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
              try {
                return decodeURIComponent(e)
              } catch (r) {
                return Ht(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(l[r] || "", t), e
          }), {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function hr(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return Ht(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function fr(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          a = e.charAt(r);
        return a && "/" !== a ? null : e.slice(r) || "/"
      }

      function pr(e, t, r, a) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function mr(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }
      const vr = e => e.join("/").replace(/\/\/+/g, "/"),
        gr = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        yr = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        br = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
      class wr {
        constructor(e, t, r, a) {
          void 0 === a && (a = !1), this.status = e, this.statusText = t || "", this.internal = a, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }
      const Er = ["post", "put", "patch", "delete"],
        Rr = new Set(Er),
        Dr = ["get", ...Er],
        Sr = new Set(Dr),
        xr = new Set([301, 302, 303, 307, 308]),
        Ar = new Set([307, 308]),
        kr = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        Cr = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        },
        Pr = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0
        },
        Lr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Mr = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        Ur = !Mr,
        _r = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        });

      function Tr(e) {
        let t;
        if ($t(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) t = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let r = e.detectErrorBoundary;
          t = e => ({
            hasErrorBoundary: r(e)
          })
        } else t = _r;
        let r, a = {},
          n = Qt(e.routes, t, void 0, a),
          o = e.basename || "/",
          i = Bt({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
          }, e.future),
          l = null,
          s = new Set,
          c = null,
          u = null,
          d = null,
          h = null != e.hydrationData,
          f = Zt(n, e.history.location, o),
          p = null;
        if (null == f) {
          let t = Jr(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: a
            } = Yr(n);
          f = r, p = {
            [a.id]: t
          }
        }
        let m, v, g = !(f.some((e => e.route.lazy)) || f.some((e => e.route.loader)) && null == e.hydrationData),
          y = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: f,
            initialized: g,
            navigation: kr,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || p,
            fetchers: new Map,
            blockers: new Map
          },
          b = It.Pop,
          w = !1,
          E = !1,
          R = !1,
          D = [],
          S = [],
          x = new Map,
          A = 0,
          k = -1,
          C = new Map,
          P = new Set,
          L = new Map,
          M = new Map,
          U = new Map,
          _ = !1;

        function T(e) {
          y = Bt({}, y, e), s.forEach((e => e(y)))
        }

        function O(t, a) {
          var o, i;
          let l, s = null != y.actionData && null != y.navigation.formMethod && ea(y.navigation.formMethod) && "loading" === y.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
          l = a.actionData ? Object.keys(a.actionData).length > 0 ? a.actionData : null : s ? y.actionData : null;
          let c = a.loaderData ? Kr(y.loaderData, a.loaderData, a.matches || [], a.errors) : y.loaderData;
          for (let [e] of U) Y(e);
          let u = !0 === w || null != y.navigation.formMethod && ea(y.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
          r && (n = r, r = void 0), T(Bt({}, a, {
            actionData: l,
            loaderData: c,
            historyAction: b,
            location: t,
            initialized: !0,
            navigation: kr,
            revalidation: "idle",
            restoreScrollPosition: G(t, a.matches || y.matches),
            preventScrollReset: u,
            blockers: new Map(y.blockers)
          })), E || b === It.Pop || (b === It.Push ? e.history.push(t, t.state) : b === It.Replace && e.history.replace(t, t.state)), b = It.Pop, w = !1, E = !1, R = !1, D = [], S = []
        }
        async function j(i, l, s) {
          v && v.abort(), v = null, b = i, E = !0 === (s && s.startUninterruptedRevalidation),
            function(e, t) {
              if (c && u && d) {
                let r = t.map((e => na(e, y.loaderData))),
                  a = u(e, r) || e.key;
                c[a] = d()
              }
            }(y.location, y.matches), w = !0 === (s && s.preventScrollReset);
          let h = r || n,
            f = s && s.overrideNavigation,
            p = Zt(h, l, o);
          if (!p) {
            let e = Jr(404, {
                pathname: l.pathname
              }),
              {
                matches: t,
                route: r
              } = Yr(h);
            return X(), void O(l, {
              matches: t,
              loaderData: {},
              errors: {
                [r.id]: e
              }
            })
          }
          if (y.initialized && (m = y.location, g = l, m.pathname === g.pathname && m.search === g.search && ("" === m.hash ? "" !== g.hash : m.hash === g.hash || "" !== g.hash)) && !(s && s.submission && ea(s.submission.formMethod))) return void O(l, {
            matches: p
          });
          var m, g;
          v = new AbortController;
          let C, P, U = Wr(e.history, l, v.signal, s && s.submission);
          if (s && s.pendingError) P = {
            [qr(p).route.id]: s.pendingError
          };
          else if (s && s.submission && ea(s.submission.formMethod)) {
            let e = await async function(e, r, n, i, l) {
              let s;
              N(), T({
                navigation: Bt({
                  state: "submitting",
                  location: r
                }, n)
              });
              let c = oa(i, r);
              if (c.route.action || c.route.lazy) {
                if (s = await zr("action", e, c, i, a, t, o), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else s = {
                type: Xt.error,
                error: Jr(405, {
                  method: e.method,
                  pathname: r.pathname,
                  routeId: c.route.id
                })
              };
              if (Zr(s)) {
                let e;
                return e = l && null != l.replace ? l.replace : s.location === y.location.pathname + y.location.search, await B(y, s, {
                  submission: n,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (Qr(s)) {
                let e = qr(i, c.route.id);
                return !0 !== (l && l.replace) && (b = It.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: s.error
                  }
                }
              }
              if (Gr(s)) throw Jr(400, {
                type: "defer-action"
              });
              return {
                pendingActionData: {
                  [c.route.id]: s.data
                }
              }
            }(U, l, s.submission, p, {
              replace: s.replace
            });
            if (e.shortCircuited) return;
            C = e.pendingActionData, P = e.pendingActionError, f = Bt({
              state: "loading",
              location: l
            }, s.submission), U = new Request(U.url, {
              signal: U.signal
            })
          }
          let {
            shortCircuited: _,
            loaderData: j,
            errors: F
          } = await async function(t, a, i, l, s, c, u, d, h) {
            let f = l;
            f || (f = Bt({
              state: "loading",
              location: a,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            }, s));
            let p = s || c ? s || c : f.formMethod && f.formAction && f.formData && f.formEncType ? {
                formMethod: f.formMethod,
                formAction: f.formAction,
                formData: f.formData,
                formEncType: f.formEncType
              } : void 0,
              m = r || n,
              [g, b] = Fr(e.history, y, i, p, a, R, D, S, L, m, o, d, h);
            if (X((e => !(i && i.some((t => t.route.id === e))) || g && g.some((t => t.route.id === e)))), 0 === g.length && 0 === b.length) {
              let e = K();
              return O(a, Bt({
                matches: i,
                loaderData: {},
                errors: h || null
              }, d ? {
                actionData: d
              } : {}, e ? {
                fetchers: new Map(y.fetchers)
              } : {})), {
                shortCircuited: !0
              }
            }
            if (!E) {
              b.forEach((e => {
                let t = y.fetchers.get(e.key),
                  r = {
                    state: "loading",
                    data: t && t.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                y.fetchers.set(e.key, r)
              }));
              let e = d || y.actionData;
              T(Bt({
                navigation: f
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, b.length > 0 ? {
                fetchers: new Map(y.fetchers)
              } : {}))
            }
            k = ++A, b.forEach((e => {
              e.controller && x.set(e.key, e.controller)
            }));
            let w = () => b.forEach((e => $(e.key)));
            v && v.signal.addEventListener("abort", w);
            let {
              results: C,
              loaderResults: P,
              fetcherResults: U
            } = await I(y.matches, i, g, b, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            v && v.signal.removeEventListener("abort", w), b.forEach((e => x.delete(e.key)));
            let _ = Vr(C);
            if (_) return await B(y, _, {
              replace: u
            }), {
              shortCircuited: !0
            };
            let {
              loaderData: j,
              errors: F
            } = Hr(y, i, g, P, h, b, U, M);
            M.forEach(((e, t) => {
              e.subscribe((r => {
                (r || e.done) && M.delete(t)
              }))
            }));
            let N = K(),
              z = q(k);
            return Bt({
              loaderData: j,
              errors: F
            }, N || z || b.length > 0 ? {
              fetchers: new Map(y.fetchers)
            } : {})
          }(U, l, p, f, s && s.submission, s && s.fetcherSubmission, s && s.replace, C, P);
          _ || (v = null, O(l, Bt({
            matches: p
          }, C ? {
            actionData: C
          } : {}, {
            loaderData: j,
            errors: F
          })))
        }

        function F(e) {
          return y.fetchers.get(e) || Cr
        }
        async function B(t, r, a) {
          var n;
          let {
            submission: i,
            replace: l,
            isFetchActionRedirect: s
          } = void 0 === a ? {} : a;
          r.revalidate && (R = !0);
          let c = qt(t.location, r.location, Bt({
            _isRedirect: !0
          }, s ? {
            _isFetchActionRedirect: !0
          } : {}));
          if ($t(c, "Expected a location on the redirect navigation"), Lr.test(r.location) && Mr && void 0 !== (null == (n = window) ? void 0 : n.location)) {
            let t = e.history.createURL(r.location),
              a = null == fr(t.pathname, o);
            if (window.location.origin !== t.origin || a) return void(l ? window.location.replace(r.location) : window.location.assign(r.location))
          }
          v = null;
          let u = !0 === l ? It.Replace : It.Push,
            {
              formMethod: d,
              formAction: h,
              formEncType: f,
              formData: p
            } = t.navigation;
          !i && d && h && p && f && (i = {
            formMethod: d,
            formAction: h,
            formEncType: f,
            formData: p
          }), Ar.has(r.status) && i && ea(i.formMethod) ? await j(u, c, {
            submission: Bt({}, i, {
              formAction: r.location
            }),
            preventScrollReset: w
          }) : s ? await j(u, c, {
            overrideNavigation: {
              state: "loading",
              location: c,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0
            },
            fetcherSubmission: i,
            preventScrollReset: w
          }) : await j(u, c, {
            overrideNavigation: {
              state: "loading",
              location: c,
              formMethod: i ? i.formMethod : void 0,
              formAction: i ? i.formAction : void 0,
              formEncType: i ? i.formEncType : void 0,
              formData: i ? i.formData : void 0
            },
            preventScrollReset: w
          })
        }
        async function I(r, n, i, l, s) {
          let c = await Promise.all([...i.map((e => zr("loader", s, e, n, a, t, o))), ...l.map((r => r.matches && r.match && r.controller ? zr("loader", Wr(e.history, r.path, r.controller.signal), r.match, r.matches, a, t, o) : {
              type: Xt.error,
              error: Jr(404, {
                pathname: r.path
              })
            }))]),
            u = c.slice(0, i.length),
            d = c.slice(i.length);
          return await Promise.all([ta(r, i, u, u.map((() => s.signal)), !1, y.loaderData), ta(r, l.map((e => e.match)), d, l.map((e => e.controller ? e.controller.signal : null)), !0)]), {
            results: c,
            loaderResults: u,
            fetcherResults: d
          }
        }

        function N() {
          R = !0, D.push(...X()), L.forEach(((e, t) => {
            x.has(t) && (S.push(t), $(t))
          }))
        }

        function z(e, t, r) {
          let a = qr(y.matches, t);
          W(e), T({
            errors: {
              [a.route.id]: r
            },
            fetchers: new Map(y.fetchers)
          })
        }

        function W(e) {
          x.has(e) && $(e), L.delete(e), C.delete(e), P.delete(e), y.fetchers.delete(e)
        }

        function $(e) {
          let t = x.get(e);
          $t(t, "Expected fetch controller: " + e), t.abort(), x.delete(e)
        }

        function H(e) {
          for (let t of e) {
            let e = {
              state: "idle",
              data: F(t).data,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              " _hasFetcherDoneAnything ": !0
            };
            y.fetchers.set(t, e)
          }
        }

        function K() {
          let e = [],
            t = !1;
          for (let r of P) {
            let a = y.fetchers.get(r);
            $t(a, "Expected fetcher: " + r), "loading" === a.state && (P.delete(r), e.push(r), t = !0)
          }
          return H(e), t
        }

        function q(e) {
          let t = [];
          for (let [r, a] of C)
            if (a < e) {
              let e = y.fetchers.get(r);
              $t(e, "Expected fetcher: " + r), "loading" === e.state && ($(r), C.delete(r), t.push(r))
            } return H(t), t.length > 0
        }

        function Y(e) {
          y.blockers.delete(e), U.delete(e)
        }

        function J(e, t) {
          let r = y.blockers.get(e) || Pr;
          $t("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state), y.blockers.set(e, t), T({
            blockers: new Map(y.blockers)
          })
        }

        function V(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: a
          } = e;
          if (0 === U.size) return;
          U.size > 1 && Ht(!1, "A router only supports one blocker at a time");
          let n = Array.from(U.entries()),
            [o, i] = n[n.length - 1],
            l = y.blockers.get(o);
          return l && "proceeding" === l.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: a
          }) ? o : void 0
        }

        function X(e) {
          let t = [];
          return M.forEach(((r, a) => {
            e && !e(a) || (r.cancel(), t.push(a), M.delete(a))
          })), t
        }

        function G(e, t) {
          if (c && u && d) {
            let r = t.map((e => na(e, y.loaderData))),
              a = u(e, r) || e.key,
              n = c[a];
            if ("number" == typeof n) return n
          }
          return null
        }
        return m = {
          get basename() {
            return o
          },
          get state() {
            return y
          },
          get routes() {
            return n
          },
          initialize: function() {
            return l = e.history.listen((t => {
              let {
                action: r,
                location: a,
                delta: n
              } = t;
              if (_) return void(_ = !1);
              Ht(0 === U.size || null != n, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
              let o = V({
                currentLocation: y.location,
                nextLocation: a,
                historyAction: r
              });
              return o && null != n ? (_ = !0, e.history.go(-1 * n), void J(o, {
                state: "blocked",
                location: a,
                proceed() {
                  J(o, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: a
                  }), e.history.go(n)
                },
                reset() {
                  Y(o), T({
                    blockers: new Map(m.state.blockers)
                  })
                }
              })) : j(r, a)
            })), y.initialized || j(It.Pop, y.location), m
          },
          subscribe: function(e) {
            return s.add(e), () => s.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (c = e, d = t, u = r || (e => e.key), !h && y.navigation === kr) {
              h = !0;
              let e = G(y.location, y.matches);
              null != e && T({
                restoreScrollPosition: e
              })
            }
            return () => {
              c = null, d = null, u = null
            }
          },
          navigate: async function t(r, a) {
            if ("number" == typeof r) return void e.history.go(r);
            let n = Or(y.location, y.matches, o, i.v7_prependBasename, r, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative),
              {
                path: l,
                submission: s,
                error: c
              } = jr(i.v7_normalizeFormMethod, !1, n, a),
              u = y.location,
              d = qt(y.location, l, a && a.state);
            d = Bt({}, d, e.history.encodeLocation(d));
            let h = a && null != a.replace ? a.replace : void 0,
              f = It.Push;
            !0 === h ? f = It.Replace : !1 === h || null != s && ea(s.formMethod) && s.formAction === y.location.pathname + y.location.search && (f = It.Replace);
            let p = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
              m = V({
                currentLocation: u,
                nextLocation: d,
                historyAction: f
              });
            if (!m) return await j(f, d, {
              submission: s,
              pendingError: c,
              preventScrollReset: p,
              replace: a && a.replace
            });
            J(m, {
              state: "blocked",
              location: d,
              proceed() {
                J(m, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: d
                }), t(r, a)
              },
              reset() {
                Y(m), T({
                  blockers: new Map(y.blockers)
                })
              }
            })
          },
          fetch: function(l, s, c, u) {
            if (Ur) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            x.has(l) && $(l);
            let d = r || n,
              h = Or(y.location, y.matches, o, i.v7_prependBasename, c, s, null == u ? void 0 : u.relative),
              f = Zt(d, h, o);
            if (!f) return void z(l, s, Jr(404, {
              pathname: h
            }));
            let {
              path: p,
              submission: m
            } = jr(i.v7_normalizeFormMethod, !0, h, u), g = oa(f, p);
            w = !0 === (u && u.preventScrollReset), m && ea(m.formMethod) ? async function(i, l, s, c, u, d) {
              if (N(), L.delete(i), !c.route.action && !c.route.lazy) {
                let e = Jr(405, {
                  method: d.formMethod,
                  pathname: s,
                  routeId: l
                });
                return void z(i, l, e)
              }
              let h = y.fetchers.get(i),
                f = Bt({
                  state: "submitting"
                }, d, {
                  data: h && h.data,
                  " _hasFetcherDoneAnything ": !0
                });
              y.fetchers.set(i, f), T({
                fetchers: new Map(y.fetchers)
              });
              let p = new AbortController,
                m = Wr(e.history, s, p.signal, d);
              x.set(i, p);
              let g = await zr("action", m, c, u, a, t, o);
              if (m.signal.aborted) return void(x.get(i) === p && x.delete(i));
              if (Zr(g)) {
                x.delete(i), P.add(i);
                let e = Bt({
                  state: "loading"
                }, d, {
                  data: void 0,
                  " _hasFetcherDoneAnything ": !0
                });
                return y.fetchers.set(i, e), T({
                  fetchers: new Map(y.fetchers)
                }), B(y, g, {
                  submission: d,
                  isFetchActionRedirect: !0
                })
              }
              if (Qr(g)) return void z(i, l, g.error);
              if (Gr(g)) throw Jr(400, {
                type: "defer-action"
              });
              let w = y.navigation.location || y.location,
                E = Wr(e.history, w, p.signal),
                U = r || n,
                _ = "idle" !== y.navigation.state ? Zt(U, y.navigation.location, o) : y.matches;
              $t(_, "Didn't find any matches after fetcher action");
              let j = ++A;
              C.set(i, j);
              let F = Bt({
                state: "loading",
                data: g.data
              }, d, {
                " _hasFetcherDoneAnything ": !0
              });
              y.fetchers.set(i, F);
              let [W, H] = Fr(e.history, y, _, d, w, R, D, S, L, U, o, {
                [c.route.id]: g.data
              }, void 0);
              H.filter((e => e.key !== i)).forEach((e => {
                let t = e.key,
                  r = y.fetchers.get(t),
                  a = {
                    state: "loading",
                    data: r && r.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                  };
                y.fetchers.set(t, a), e.controller && x.set(t, e.controller)
              })), T({
                fetchers: new Map(y.fetchers)
              });
              let K = () => H.forEach((e => $(e.key)));
              p.signal.addEventListener("abort", K);
              let {
                results: Y,
                loaderResults: J,
                fetcherResults: V
              } = await I(y.matches, _, W, H, E);
              if (p.signal.aborted) return;
              p.signal.removeEventListener("abort", K), C.delete(i), x.delete(i), H.forEach((e => x.delete(e.key)));
              let X = Vr(Y);
              if (X) return B(y, X);
              let {
                loaderData: G,
                errors: Q
              } = Hr(y, y.matches, W, J, void 0, H, V, M), Z = {
                state: "idle",
                data: g.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              y.fetchers.set(i, Z);
              let ee = q(j);
              "loading" === y.navigation.state && j > k ? ($t(b, "Expected pending action"), v && v.abort(), O(y.navigation.location, {
                matches: _,
                loaderData: G,
                errors: Q,
                fetchers: new Map(y.fetchers)
              })) : (T(Bt({
                errors: Q,
                loaderData: Kr(y.loaderData, G, _, Q)
              }, ee ? {
                fetchers: new Map(y.fetchers)
              } : {})), R = !1)
            }(l, s, p, g, f, m): (L.set(l, {
              routeId: s,
              path: p
            }), async function(r, n, i, l, s, c) {
              let u = y.fetchers.get(r),
                d = Bt({
                  state: "loading",
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0
                }, c, {
                  data: u && u.data,
                  " _hasFetcherDoneAnything ": !0
                });
              y.fetchers.set(r, d), T({
                fetchers: new Map(y.fetchers)
              });
              let h = new AbortController,
                f = Wr(e.history, i, h.signal);
              x.set(r, h);
              let p = await zr("loader", f, l, s, a, t, o);
              if (Gr(p) && (p = await ra(p, f.signal, !0) || p), x.get(r) === h && x.delete(r), f.signal.aborted) return;
              if (Zr(p)) return P.add(r), void await B(y, p);
              if (Qr(p)) {
                let e = qr(y.matches, n);
                return y.fetchers.delete(r), void T({
                  fetchers: new Map(y.fetchers),
                  errors: {
                    [e.route.id]: p.error
                  }
                })
              }
              $t(!Gr(p), "Unhandled fetcher deferred data");
              let m = {
                state: "idle",
                data: p.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
              };
              y.fetchers.set(r, m), T({
                fetchers: new Map(y.fetchers)
              })
            }(l, s, p, g, f, m))
          },
          revalidate: function() {
            N(), T({
              revalidation: "loading"
            }), "submitting" !== y.navigation.state && ("idle" !== y.navigation.state ? j(b || y.historyAction, y.navigation.location, {
              overrideNavigation: y.navigation
            }) : j(y.historyAction, y.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: F,
          deleteFetcher: W,
          dispose: function() {
            l && l(), s.clear(), v && v.abort(), y.fetchers.forEach(((e, t) => W(t))), y.blockers.forEach(((e, t) => Y(t)))
          },
          getBlocker: function(e, t) {
            let r = y.blockers.get(e) || Pr;
            return U.get(e) !== t && U.set(e, t), r
          },
          deleteBlocker: Y,
          _internalFetchControllers: x,
          _internalActiveDeferreds: M,
          _internalSetRoutes: function(e) {
            a = {}, r = Qt(e, t, void 0, a)
          }
        }, m
      }

      function Or(e, t, r, a, n, o, i) {
        let l, s;
        if (null != o && "path" !== i) {
          l = [];
          for (let e of t)
            if (l.push(e), e.route.id === o) {
              s = e;
              break
            }
        } else l = t, s = t[t.length - 1];
        let c = function(e, t, r, a) {
          let n;
          void 0 === a && (a = !1), "string" == typeof e ? n = Jt(e) : (n = Bt({}, e), $t(!n.pathname || !n.pathname.includes("?"), pr("?", "pathname", "search", n)), $t(!n.pathname || !n.pathname.includes("#"), pr("#", "pathname", "hash", n)), $t(!n.search || !n.search.includes("#"), pr("#", "search", "hash", n)));
          let o, i = "" === e || "" === n.pathname,
            l = i ? "/" : n.pathname;
          if (a || null == l) o = r;
          else {
            let e = t.length - 1;
            if (l.startsWith("..")) {
              let t = l.split("/");
              for (;
                ".." === t[0];) t.shift(), e -= 1;
              n.pathname = t.join("/")
            }
            o = e >= 0 ? t[e] : "/"
          }
          let s = function(e, t) {
              void 0 === t && (t = "/");
              let {
                pathname: r,
                search: a = "",
                hash: n = ""
              } = "string" == typeof e ? Jt(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
                let r = t.replace(/\/+$/, "").split("/");
                return e.split("/").forEach((e => {
                  ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
                })), r.length > 1 ? r.join("/") : "/"
              }(r, t) : t;
              return {
                pathname: o,
                search: yr(a),
                hash: br(n)
              }
            }(n, o),
            c = l && "/" !== l && l.endsWith("/"),
            u = (i || "." === l) && r.endsWith("/");
          return s.pathname.endsWith("/") || !c && !u || (s.pathname += "/"), s
        }(n || ".", mr(l).map((e => e.pathnameBase)), fr(e.pathname, r) || e.pathname, "path" === i);
        return null == n && (c.search = e.search, c.hash = e.hash), null != n && "" !== n && "." !== n || !s || !s.route.index || aa(c.search) || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), a && "/" !== r && (c.pathname = "/" === c.pathname ? r : vr([r, c.pathname])), Yt(c)
      }

      function jr(e, t, r, a) {
        if (!a || ! function(e) {
            return null != e && "formData" in e
          }(a)) return {
          path: r
        };
        if (a.formMethod && (n = a.formMethod, !Sr.has(n.toLowerCase()))) return {
          path: r,
          error: Jr(405, {
            method: a.formMethod
          })
        };
        var n;
        let o;
        if (a.formData) {
          let t = a.formMethod || "get";
          if (o = {
              formMethod: e ? t.toUpperCase() : t.toLowerCase(),
              formAction: Xr(r),
              formEncType: a && a.formEncType || "application/x-www-form-urlencoded",
              formData: a.formData
            }, ea(o.formMethod)) return {
            path: r,
            submission: o
          }
        }
        let i = Jt(r),
          l = $r(a.formData);
        return t && i.search && aa(i.search) && l.append("index", ""), i.search = "?" + l, {
          path: Yt(i),
          submission: o
        }
      }

      function Fr(e, t, r, a, n, o, i, l, s, c, u, d, h) {
        let f = h ? Object.values(h)[0] : d ? Object.values(d)[0] : void 0,
          p = e.createURL(t.location),
          m = e.createURL(n),
          v = h ? Object.keys(h)[0] : void 0,
          g = function(e, t) {
            let r = e;
            if (t) {
              let a = e.findIndex((e => e.route.id === t));
              a >= 0 && (r = e.slice(0, a))
            }
            return r
          }(r, v).filter(((e, r) => {
            if (e.route.lazy) return !0;
            if (null == e.route.loader) return !1;
            if (function(e, t, r) {
                let a = !t || r.route.id !== t.route.id,
                  n = void 0 === e[r.route.id];
                return a || n
              }(t.loaderData, t.matches[r], e) || i.some((t => t === e.route.id))) return !0;
            let n = t.matches[r],
              l = e;
            return Ir(e, Bt({
              currentUrl: p,
              currentParams: n.params,
              nextUrl: m,
              nextParams: l.params
            }, a, {
              actionResult: f,
              defaultShouldRevalidate: o || p.pathname + p.search === m.pathname + m.search || p.search !== m.search || Br(n, l)
            }))
          })),
          y = [];
        return s.forEach(((e, n) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let i = Zt(c, e.path, u);
          if (!i) return void y.push({
            key: n,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let s = oa(i, e.path);
          (l.includes(n) || Ir(s, Bt({
            currentUrl: p,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: m,
            nextParams: r[r.length - 1].params
          }, a, {
            actionResult: f,
            defaultShouldRevalidate: o
          }))) && y.push({
            key: n,
            routeId: e.routeId,
            path: e.path,
            matches: i,
            match: s,
            controller: new AbortController
          })
        })), [g, y]
      }

      function Br(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function Ir(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }
      async function Nr(e, t, r) {
        if (!e.lazy) return;
        let a = await e.lazy();
        if (!e.lazy) return;
        let n = r[e.id];
        $t(n, "No route found in manifest");
        let o = {};
        for (let e in a) {
          let t = void 0 !== n[e] && "hasErrorBoundary" !== e;
          Ht(!t, 'Route "' + n.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || Gt.has(e) || (o[e] = a[e])
        }
        Object.assign(n, o), Object.assign(n, Bt({}, t(n), {
          lazy: void 0
        }))
      }
      async function zr(e, t, r, a, n, o, i, l, s, c) {
        let u, d, h;
        void 0 === l && (l = !1), void 0 === s && (s = !1);
        let f = e => {
          let a, n = new Promise(((e, t) => a = t));
          return h = () => a(), t.signal.addEventListener("abort", h), Promise.race([e({
            request: t,
            params: r.params,
            context: c
          }), n])
        };
        try {
          let a = r.route[e];
          if (r.route.lazy)
            if (a) d = (await Promise.all([f(a), Nr(r.route, o, n)]))[0];
            else {
              if (await Nr(r.route, o, n), a = r.route[e], !a) {
                if ("action" === e) {
                  let e = new URL(t.url),
                    a = e.pathname + e.search;
                  throw Jr(405, {
                    method: t.method,
                    pathname: a,
                    routeId: r.route.id
                  })
                }
                return {
                  type: Xt.data,
                  data: void 0
                }
              }
              d = await f(a)
            }
          else {
            if (!a) {
              let e = new URL(t.url);
              throw Jr(404, {
                pathname: e.pathname + e.search
              })
            }
            d = await f(a)
          }
          $t(void 0 !== d, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          u = Xt.error, d = e
        } finally {
          h && t.signal.removeEventListener("abort", h)
        }
        if (null != (p = d) && "number" == typeof p.status && "string" == typeof p.statusText && "object" == typeof p.headers && void 0 !== p.body) {
          let e, n = d.status;
          if (xr.has(n)) {
            let e = d.headers.get("Location");
            if ($t(e, "Redirects returned/thrown from loaders/actions must have a Location header"), Lr.test(e)) {
              if (!l) {
                let r = new URL(t.url),
                  a = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  n = null != fr(a.pathname, i);
                a.origin === r.origin && n && (e = a.pathname + a.search + a.hash)
              }
            } else e = Or(new URL(t.url), a.slice(0, a.indexOf(r) + 1), i, !0, e);
            if (l) throw d.headers.set("Location", e), d;
            return {
              type: Xt.redirect,
              status: n,
              location: e,
              revalidate: null !== d.headers.get("X-Remix-Revalidate")
            }
          }
          if (s) throw {
            type: u || Xt.data,
            response: d
          };
          let o = d.headers.get("Content-Type");
          return e = o && /\bapplication\/json\b/.test(o) ? await d.json() : await d.text(), u === Xt.error ? {
            type: u,
            error: new wr(n, d.statusText, e),
            headers: d.headers
          } : {
            type: Xt.data,
            data: e,
            statusCode: d.status,
            headers: d.headers
          }
        }
        var p, m, v;
        return u === Xt.error ? {
          type: u,
          error: d
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(d) ? {
          type: Xt.deferred,
          deferredData: d,
          statusCode: null == (m = d.init) ? void 0 : m.status,
          headers: (null == (v = d.init) ? void 0 : v.headers) && new Headers(d.init.headers)
        } : {
          type: Xt.data,
          data: d
        }
      }

      function Wr(e, t, r, a) {
        let n = e.createURL(Xr(t)).toString(),
          o = {
            signal: r
          };
        if (a && ea(a.formMethod)) {
          let {
            formMethod: e,
            formEncType: t,
            formData: r
          } = a;
          o.method = e.toUpperCase(), o.body = "application/x-www-form-urlencoded" === t ? $r(r) : r
        }
        return new Request(n, o)
      }

      function $r(e) {
        let t = new URLSearchParams;
        for (let [r, a] of e.entries()) t.append(r, a instanceof File ? a.name : a);
        return t
      }

      function Hr(e, t, r, a, n, o, i, l) {
        let {
          loaderData: s,
          errors: c
        } = function(e, t, r, a, n) {
          let o, i = {},
            l = null,
            s = !1,
            c = {};
          return r.forEach(((r, u) => {
            let d = t[u].route.id;
            if ($t(!Zr(r), "Cannot handle redirect results in processLoaderData"), Qr(r)) {
              let t = qr(e, d),
                n = r.error;
              a && (n = Object.values(a)[0], a = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = n), i[d] = void 0, s || (s = !0, o = function(e) {
                return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
              }(r.error) ? r.error.status : 500), r.headers && (c[d] = r.headers)
            } else Gr(r) ? (n.set(d, r.deferredData), i[d] = r.deferredData.data) : i[d] = r.data, null == r.statusCode || 200 === r.statusCode || s || (o = r.statusCode), r.headers && (c[d] = r.headers)
          })), a && (l = a, i[Object.keys(a)[0]] = void 0), {
            loaderData: i,
            errors: l,
            statusCode: o || 200,
            loaderHeaders: c
          }
        }(t, r, a, n, l);
        for (let t = 0; t < o.length; t++) {
          let {
            key: r,
            match: a,
            controller: n
          } = o[t];
          $t(void 0 !== i && void 0 !== i[t], "Did not find corresponding fetcher result");
          let l = i[t];
          if (!n || !n.signal.aborted)
            if (Qr(l)) {
              let t = qr(e.matches, null == a ? void 0 : a.route.id);
              c && c[t.route.id] || (c = Bt({}, c, {
                [t.route.id]: l.error
              })), e.fetchers.delete(r)
            } else if (Zr(l)) $t(!1, "Unhandled fetcher revalidation redirect");
          else if (Gr(l)) $t(!1, "Unhandled fetcher deferred data");
          else {
            let t = {
              state: "idle",
              data: l.data,
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
          loaderData: s,
          errors: c
        }
      }

      function Kr(e, t, r, a) {
        let n = Bt({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (n[r] = t[r]) : void 0 !== e[r] && o.route.loader && (n[r] = e[r]), a && a.hasOwnProperty(r)) break
        }
        return n
      }

      function qr(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function Yr(e) {
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

      function Jr(e, t) {
        let {
          pathname: r,
          routeId: a,
          method: n,
          type: o
        } = void 0 === t ? {} : t, i = "Unknown Server Error", l = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", n && r && a ? l = "You made a " + n + ' request to "' + r + '" but did not provide a `loader` for route "' + a + '", so there is no way to handle the request.' : "defer-action" === o && (l = "defer() is not supported in actions")) : 403 === e ? (i = "Forbidden", l = 'Route "' + a + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", n && r && a ? l = "You made a " + n.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + a + '", so there is no way to handle the request.' : n && (l = 'Invalid request method "' + n.toUpperCase() + '"')), new wr(e || 500, i, new Error(l), !0)
      }

      function Vr(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (Zr(r)) return r
        }
      }

      function Xr(e) {
        return Yt(Bt({}, "string" == typeof e ? Jt(e) : e, {
          hash: ""
        }))
      }

      function Gr(e) {
        return e.type === Xt.deferred
      }

      function Qr(e) {
        return e.type === Xt.error
      }

      function Zr(e) {
        return (e && e.type) === Xt.redirect
      }

      function ea(e) {
        return Rr.has(e.toLowerCase())
      }
      async function ta(e, t, r, a, n, o) {
        for (let i = 0; i < r.length; i++) {
          let l = r[i],
            s = t[i];
          if (!s) continue;
          let c = e.find((e => e.route.id === s.route.id)),
            u = null != c && !Br(c, s) && void 0 !== (o && o[s.route.id]);
          if (Gr(l) && (n || u)) {
            let e = a[i];
            $t(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await ra(l, e, n).then((e => {
              e && (r[i] = e || r[i])
            }))
          }
        }
      }
      async function ra(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: Xt.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: Xt.error,
              error: e
            }
          }
          return {
            type: Xt.data,
            data: e.deferredData.data
          }
        }
      }

      function aa(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function na(e, t) {
        let {
          route: r,
          pathname: a,
          params: n
        } = e;
        return {
          id: r.id,
          pathname: a,
          params: n,
          data: t[r.id],
          handle: r.handle
        }
      }

      function oa(e, t) {
        let r = "string" == typeof t ? Jt(t).search : t.search;
        if (e[e.length - 1].route.index && aa(r || "")) return e[e.length - 1];
        let a = mr(e);
        return a[a.length - 1]
      }

      function ia() {
        return ia = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
          }
          return e
        }, ia.apply(this, arguments)
      }

      function la(e, t) {
        if (null == e) return {};
        var r, a, n = {},
          o = Object.keys(e);
        for (a = 0; a < o.length; a++) r = o[a], t.indexOf(r) >= 0 || (n[r] = e[r]);
        return n
      }
      Symbol("deferred");
      const sa = "get",
        ca = "application/x-www-form-urlencoded";

      function ua(e) {
        return null != e && "string" == typeof e.tagName
      }

      function da(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
          let a = e[r];
          return t.concat(Array.isArray(a) ? a.map((e => [r, e])) : [
            [r, a]
          ])
        }), []))
      }
      const ha = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
        fa = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
        pa = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];

      function ma(e, t) {
        return Tr({
          basename: null == t ? void 0 : t.basename,
          future: ia({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: zt({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || ga(),
          routes: e,
          mapRouteProperties: jt
        }).initialize()
      }

      function va(e, t) {
        return Tr({
          basename: null == t ? void 0 : t.basename,
          future: ia({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: Wt({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || ga(),
          routes: e,
          mapRouteProperties: jt
        }).initialize()
      }

      function ga() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = ia({}, t, {
          errors: ya(t.errors)
        })), t
      }

      function ya(e) {
        if (!e) return null;
        let t = Object.entries(e),
          r = {};
        for (let [e, a] of t)
          if (a && "RouteErrorResponse" === a.__type) r[e] = new wr(a.status, a.statusText, a.data, !0 === a.internal);
          else if (a && "Error" === a.__type) {
          let t = new Error(a.message);
          t.stack = "", r[e] = t
        } else r[e] = a;
        return r
      }

      function ba(e) {
        let {
          basename: t,
          children: r,
          window: a
        } = e, n = o.useRef();
        null == n.current && (n.current = zt({
          window: a,
          v5Compat: !0
        }));
        let i = n.current,
          [l, s] = o.useState({
            action: i.action,
            location: i.location
          });
        return o.useLayoutEffect((() => i.listen(s)), [i]), o.createElement(kt, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: i
        })
      }

      function wa(e) {
        let {
          basename: t,
          children: r,
          window: a
        } = e, n = o.useRef();
        null == n.current && (n.current = Wt({
          window: a,
          v5Compat: !0
        }));
        let i = n.current,
          [l, s] = o.useState({
            action: i.action,
            location: i.location
          });
        return o.useLayoutEffect((() => i.listen(s)), [i]), o.createElement(kt, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: i
        })
      }

      function Ea(e) {
        let {
          basename: t,
          children: r,
          history: a
        } = e;
        const [n, i] = o.useState({
          action: a.action,
          location: a.location
        });
        return o.useLayoutEffect((() => a.listen(i)), [a]), o.createElement(kt, {
          basename: t,
          children: r,
          location: n.location,
          navigationType: n.action,
          navigator: a
        })
      }
      const Ra = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        Da = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Sa = o.forwardRef((function(e, t) {
          let r, {
              onClick: a,
              relative: n,
              reloadDocument: i,
              replace: l,
              state: s,
              target: c,
              to: u,
              preventScrollReset: d
            } = e,
            h = la(e, ha),
            {
              basename: f
            } = o.useContext(Oe),
            p = !1;
          if ("string" == typeof u && Da.test(u) && (r = u, Ra)) try {
            let e = new URL(window.location.href),
              t = u.startsWith("//") ? new URL(e.protocol + u) : new URL(u),
              r = fr(t.pathname, f);
            t.origin === e.origin && null != r ? u = r + t.search + t.hash : p = !0
          } catch (e) {}
          let m = Ie(u, {
              relative: n
            }),
            v = _a(u, {
              replace: l,
              state: s,
              target: c,
              preventScrollReset: d,
              relative: n
            });
          return o.createElement("a", ia({}, h, {
            href: r || m,
            onClick: p || i ? a : function(e) {
              a && a(e), e.defaultPrevented || v(e)
            },
            ref: t,
            target: c
          }))
        })),
        xa = o.forwardRef((function(e, t) {
          let {
            "aria-current": r = "page",
            caseSensitive: a = !1,
            className: n = "",
            end: i = !1,
            style: l,
            to: s,
            children: c
          } = e, u = la(e, fa), d = Xe(s, {
            relative: u.relative
          }), h = ze(), f = o.useContext(_e), {
            navigator: p
          } = o.useContext(Oe), m = p.encodeLocation ? p.encodeLocation(d).pathname : d.pathname, v = h.pathname, g = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
          a || (v = v.toLowerCase(), g = g ? g.toLowerCase() : null, m = m.toLowerCase());
          let y, b = v === m || !i && v.startsWith(m) && "/" === v.charAt(m.length),
            w = null != g && (g === m || !i && g.startsWith(m) && "/" === g.charAt(m.length)),
            E = b ? r : void 0;
          y = "function" == typeof n ? n({
            isActive: b,
            isPending: w
          }) : [n, b ? "active" : null, w ? "pending" : null].filter(Boolean).join(" ");
          let R = "function" == typeof l ? l({
            isActive: b,
            isPending: w
          }) : l;
          return o.createElement(Sa, ia({}, u, {
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
        Aa = o.forwardRef(((e, t) => o.createElement(ka, ia({}, e, {
          ref: t
        })))),
        ka = o.forwardRef(((e, t) => {
          let {
            reloadDocument: r,
            replace: a,
            method: n = sa,
            action: i,
            onSubmit: l,
            fetcherKey: s,
            routeId: c,
            relative: u,
            preventScrollReset: d
          } = e, h = la(e, pa), f = ja(s, c), p = "get" === n.toLowerCase() ? "get" : "post", m = Fa(i, {
            relative: u
          });
          return o.createElement("form", ia({
            ref: t,
            method: p,
            action: m,
            onSubmit: r ? l : e => {
              if (l && l(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                r = (null == t ? void 0 : t.getAttribute("formmethod")) || n;
              f(t || e.currentTarget, {
                method: r,
                replace: a,
                relative: u,
                preventScrollReset: d
              })
            }
          }, h))
        }));

      function Ca(e) {
        let {
          getKey: t,
          storageKey: r
        } = e;
        return $a({
          getKey: t,
          storageKey: r
        }), null
      }
      var Pa, La;

      function Ma(e) {
        let t = o.useContext(Ue);
        return t || $t(!1), t
      }

      function Ua(e) {
        let t = o.useContext(_e);
        return t || $t(!1), t
      }

      function _a(e, t) {
        let {
          target: r,
          replace: a,
          state: n,
          preventScrollReset: i,
          relative: l
        } = void 0 === t ? {} : t, s = Ke(), c = ze(), u = Xe(e, {
          relative: l
        });
        return o.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, r)) {
            t.preventDefault();
            let r = void 0 !== a ? a : d(c) === d(u);
            s(e, {
              replace: r,
              state: n,
              preventScrollReset: i,
              relative: l
            })
          }
        }), [c, s, u, a, n, r, e, i, l])
      }

      function Ta(e) {
        let t = o.useRef(da(e)),
          r = o.useRef(!1),
          a = ze(),
          n = o.useMemo((() => function(e, t) {
            let r = da(e);
            if (t)
              for (let e of t.keys()) r.has(e) || t.getAll(e).forEach((t => {
                r.append(e, t)
              }));
            return r
          }(a.search, r.current ? null : t.current)), [a.search]),
          i = Ke(),
          l = o.useCallback(((e, t) => {
            const a = da("function" == typeof e ? e(n) : e);
            r.current = !0, i("?" + a, t)
          }), [i, n]);
        return [n, l]
      }

      function Oa() {
        return ja()
      }

      function ja(e, t) {
        let {
          router: r
        } = Ma(Pa.UseSubmitImpl), {
          basename: a
        } = o.useContext(Oe), n = ct();
        return o.useCallback((function(o, i) {
          if (void 0 === i && (i = {}), "undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
          let {
            action: l,
            method: s,
            encType: c,
            formData: u
          } = function(e, t, r) {
            let a, n, o, i = null;
            if (ua(l = e) && "form" === l.tagName.toLowerCase()) {
              let l = t.submissionTrigger;
              if (t.action) i = t.action;
              else {
                let t = e.getAttribute("action");
                i = t ? fr(t, r) : null
              }
              a = t.method || e.getAttribute("method") || sa, n = t.encType || e.getAttribute("enctype") || ca, o = new FormData(e), l && l.name && o.append(l.name, l.value)
            } else if (function(e) {
                return ua(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return ua(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let l = e.form;
              if (null == l) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              if (t.action) i = t.action;
              else {
                let t = e.getAttribute("formaction") || l.getAttribute("action");
                i = t ? fr(t, r) : null
              }
              a = t.method || e.getAttribute("formmethod") || l.getAttribute("method") || sa, n = t.encType || e.getAttribute("formenctype") || l.getAttribute("enctype") || ca, o = new FormData(l), e.name && o.append(e.name, e.value)
            } else {
              if (ua(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              if (a = t.method || sa, i = t.action || null, n = t.encType || ca, e instanceof FormData) o = e;
              else if (o = new FormData, e instanceof URLSearchParams)
                for (let [t, r] of e) o.append(t, r);
              else if (null != e)
                for (let t of Object.keys(e)) o.append(t, e[t])
            }
            var l;
            return {
              action: i,
              method: a.toLowerCase(),
              encType: n,
              formData: o
            }
          }(o, i, a), d = {
            preventScrollReset: i.preventScrollReset,
            formData: u,
            formMethod: s,
            formEncType: c
          };
          e ? (null == t && $t(!1), r.fetch(e, t, l, d)) : r.navigate(l, ia({}, d, {
            replace: i.replace,
            fromRouteId: n
          }))
        }), [r, a, e, t, n])
      }

      function Fa(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: a
        } = o.useContext(Oe), n = o.useContext(Fe);
        n || $t(!1);
        let [i] = n.matches.slice(-1), l = ia({}, Xe(e || ".", {
          relative: r
        })), s = ze();
        if (null == e && (l.search = s.search, l.hash = s.hash, i.route.index)) {
          let e = new URLSearchParams(l.search);
          e.delete("index"), l.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !i.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== a && (l.pathname = "/" === l.pathname ? a : vr([a, l.pathname])), d(l)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
      })(Pa || (Pa = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(La || (La = {}));
      let Ba = 0;

      function Ia() {
        var e;
        let {
          router: t
        } = Ma(Pa.UseFetcher), r = o.useContext(Fe);
        r || $t(!1);
        let a = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
        null == a && $t(!1);
        let [n] = o.useState((() => String(++Ba))), [i] = o.useState((() => (a || $t(!1), function(e, t) {
          return o.forwardRef(((r, a) => o.createElement(ka, ia({}, r, {
            ref: a,
            fetcherKey: e,
            routeId: t
          }))))
        }(n, a)))), [l] = o.useState((() => e => {
          t || $t(!1), a || $t(!1), t.fetch(n, a, e)
        })), s = ja(n, a), c = t.getFetcher(n), u = o.useMemo((() => ia({
          Form: i,
          submit: s,
          load: l
        }, c)), [c, i, s, l]);
        return o.useEffect((() => () => {
          t ? t.deleteFetcher(n) : console.warn("No router available to clean up from useFetcher()")
        }), [t, n]), u
      }

      function Na() {
        return [...Ua(La.UseFetchers).fetchers.values()]
      }
      const za = "react-router-scroll-positions";
      let Wa = {};

      function $a(e) {
        let {
          getKey: t,
          storageKey: r
        } = void 0 === e ? {} : e, {
          router: a
        } = Ma(Pa.UseScrollRestoration), {
          restoreScrollPosition: n,
          preventScrollReset: i
        } = Ua(La.UseScrollRestoration), l = ze(), s = ht(), c = ut();
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
              let e = (t ? t(l, s) : null) || l.key;
              Wa[e] = window.scrollY
            }
            sessionStorage.setItem(r || za, JSON.stringify(Wa)), window.history.scrollRestoration = "auto"
          }), [r, t, c.state, l, s])), "undefined" != typeof document && (o.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(r || za);
              e && (Wa = JSON.parse(e))
            } catch (e) {}
          }), [r]), o.useLayoutEffect((() => {
            let e = null == a ? void 0 : a.enableScrollRestoration(Wa, (() => window.scrollY), t);
            return () => e && e()
          }), [a, t]), o.useLayoutEffect((() => {
            if (!1 !== n)
              if ("number" != typeof n) {
                if (l.hash) {
                  let e = document.getElementById(l.hash.slice(1));
                  if (e) return void e.scrollIntoView()
                }!0 !== i && window.scrollTo(0, 0)
              } else window.scrollTo(0, n)
          }), [l, n, i]))
      }

      function Ha(e, t) {
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

      function Ka(e) {
        let {
          when: t,
          message: r
        } = e, a = wt(t);
        o.useEffect((() => {
          "blocked" !== a.state || t || a.reset()
        }), [a, t]), o.useEffect((() => {
          "blocked" === a.state && (window.confirm(r) ? setTimeout(a.proceed, 0) : a.reset())
        }), [a, r])
      }
    }
  }
]);