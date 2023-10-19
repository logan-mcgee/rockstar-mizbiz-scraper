/*! For license information please see ec2191b7243bc13271bd.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [893], {
    7893: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => q,
        Await: () => It,
        BrowserRouter: () => fr,
        Form: () => wr,
        HashRouter: () => pr,
        Link: () => gr,
        MemoryRouter: () => Tt,
        NavLink: () => br,
        Navigate: () => Ot,
        NavigationType: () => n,
        Outlet: () => _t,
        Route: () => Bt,
        Router: () => Nt,
        RouterProvider: () => Mt,
        Routes: () => Ft,
        ScrollRestoration: () => Rr,
        UNSAFE_DataRouterContext: () => We,
        UNSAFE_DataRouterStateContext: () => He,
        UNSAFE_LocationContext: () => qe,
        UNSAFE_NavigationContext: () => Ke,
        UNSAFE_RouteContext: () => Je,
        UNSAFE_useRouteId: () => bt,
        UNSAFE_useScrollRestoration: () => Nr,
        createBrowserRouter: () => sr,
        createHashRouter: () => ur,
        createMemoryRouter: () => Yt,
        createPath: () => p,
        createRoutesFromChildren: () => Kt,
        createRoutesFromElements: () => Kt,
        createSearchParams: () => er,
        defer: () => V,
        generatePath: () => j,
        isRouteErrorResponse: () => Z,
        json: () => K,
        matchPath: () => T,
        matchRoutes: () => w,
        parsePath: () => m,
        redirect: () => X,
        redirectDocument: () => G,
        renderMatches: () => qt,
        resolvePath: () => B,
        unstable_HistoryRouter: () => mr,
        unstable_useBlocker: () => At,
        unstable_usePrompt: () => Ir,
        useActionData: () => Dt,
        useAsyncError: () => Pt,
        useAsyncValue: () => kt,
        useBeforeUnload: () => Fr,
        useFetcher: () => Tr,
        useFetchers: () => Or,
        useFormAction: () => Mr,
        useHref: () => Ve,
        useInRouterContext: () => Xe,
        useLinkClickHandler: () => kr,
        useLoaderData: () => xt,
        useLocation: () => Ge,
        useMatch: () => Ze,
        useMatches: () => Rt,
        useNavigate: () => tt,
        useNavigation: () => wt,
        useNavigationType: () => Qe,
        useOutlet: () => ot,
        useOutletContext: () => nt,
        useParams: () => at,
        useResolvedPath: () => it,
        useRevalidator: () => Et,
        useRouteError: () => Ct,
        useRouteLoaderData: () => St,
        useRoutes: () => lt,
        useSearchParams: () => Pr,
        useSubmit: () => Ar
      });
      var n, o = r(927);

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

      function l(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: o,
          v5Compat: a = !1
        } = e;
        t = r.map(((e, t) => h(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = u(null == o ? t.length - 1 : o),
          l = n.Pop,
          s = null;

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
            return l
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
            l = n.Push;
            let o = h(e, r);
            i += 1, t.splice(i, t.length, o), a && s && s({
              action: l,
              location: o,
              delta: 1
            })
          },
          replace(e, r) {
            l = n.Replace;
            let o = h(e, r);
            t[i] = o, a && s && s({
              action: l,
              location: o,
              delta: 0
            })
          },
          go(e) {
            l = n.Pop;
            let r = u(i + e),
              o = t[r];
            i = r, s && s({
              action: l,
              location: o,
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
          window: l = document.defaultView,
          v5Compat: s = !1
        } = o, u = l.history, d = n.Pop, m = null, v = y();

        function y() {
          return (u.state || {
            idx: null
          }).idx
        }

        function g() {
          d = n.Pop;
          let e = y(),
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
            return e(l, u)
          },
          listen(e) {
            if (m) throw new Error("A history only accepts one active listener");
            return l.addEventListener(i, g), m = e, () => {
              l.removeEventListener(i, g), m = null
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
            let o = f(w.location, e, t);
            r && r(o, e), v = y() + 1;
            let a = h(o, v),
              i = w.createHref(o);
            try {
              u.pushState(a, "", i)
            } catch (e) {
              if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
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
            let o = f(w.location, e, t);
            r && r(o, e), v = y();
            let a = h(o, v),
              i = w.createHref(o);
            u.replaceState(a, "", i), s && m && m({
              action: d,
              location: w.location,
              delta: 0
            })
          },
          go: e => u.go(e)
        };
        return w
      }
      var y;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(y || (y = {}));
      const g = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function b(e, t, r, n) {
        return void 0 === r && (r = []), void 0 === n && (n = {}), e.map(((e, o) => {
          let i = [...r, o],
            l = "string" == typeof e.id ? e.id : i.join("-");
          if (c(!0 !== e.index || !e.children, "Cannot specify children on an index route"), c(!n[l], 'Found a route id collision on id "' + l + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = a({}, e, t(e), {
              id: l
            });
            return n[l] = r, r
          } {
            let r = a({}, e, t(e), {
              id: l,
              children: void 0
            });
            return n[l] = r, e.children && (r.children = b(e.children, t, i, n)), r
          }
        }))
      }

      function w(e, t, r) {
        void 0 === r && (r = "/");
        let n = _(("string" == typeof t ? m(t) : t).pathname || "/", r);
        if (null == n) return null;
        let o = R(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(o);
        let a = null;
        for (let e = 0; null == a && e < o.length; ++e) a = M(o[e], O(n));
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
          let l = z([n, i.relativePath]),
            s = r.concat(i);
          e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), R(e.children, t, s, l)), (null != e.path || e.index) && t.push({
            path: l,
            score: U(l, e.index),
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
      const S = /^:\w+$/,
        D = 3,
        C = 2,
        k = 1,
        P = 10,
        L = -2,
        A = e => "*" === e;

      function U(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(A) && (n += L), t && (n += C), r.filter((e => !A(e))).reduce(((e, t) => e + (S.test(t) ? D : "" === t ? k : P)), n)
      }

      function M(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, o = "/", a = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            l = e === r.length - 1,
            s = "/" === o ? t : t.slice(o.length) || "/",
            u = T({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: l
            }, s);
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

      function j(e, t) {
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

      function T(e, t) {
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
                return d(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(l[r] || "", t), e
          }), {}),
          pathname: a,
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

      function _(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }

      function B(e, t) {
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

      function N(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function F(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function I(e, t, r, n) {
        let o;
        void 0 === n && (n = !1), "string" == typeof e ? o = m(e) : (o = a({}, e), c(!o.pathname || !o.pathname.includes("?"), N("?", "pathname", "search", o)), c(!o.pathname || !o.pathname.includes("#"), N("#", "pathname", "hash", o)), c(!o.search || !o.search.includes("#"), N("#", "search", "hash", o)));
        let i, l = "" === e || "" === o.pathname,
          s = l ? "/" : o.pathname;
        if (n || null == s) i = r;
        else {
          let e = t.length - 1;
          if (s.startsWith("..")) {
            let t = s.split("/");
            for (;
              ".." === t[0];) t.shift(), e -= 1;
            o.pathname = t.join("/")
          }
          i = e >= 0 ? t[e] : "/"
        }
        let u = B(o, i),
          d = s && "/" !== s && s.endsWith("/"),
          h = (l || "." === s) && r.endsWith("/");
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
              [r]: Y(n)
            })
          }), {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function Y(e) {
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
        le = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        se = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0
        },
        ue = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ce = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        });

      function de(e) {
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
        let l, s = {},
          u = b(e.routes, i, void 0, s),
          h = e.basename || "/",
          p = a({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
          }, e.future),
          m = null,
          v = new Set,
          g = null,
          R = null,
          x = null,
          S = null != e.hydrationData,
          D = w(u, e.history.location, h),
          C = null;
        if (null == D) {
          let t = Ce(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: n
            } = De(u);
          D = r, C = {
            [n.id]: t
          }
        }
        let k, P, L = !(D.some((e => e.route.lazy)) || D.some((e => e.route.loader)) && null == e.hydrationData),
          A = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: D,
            initialized: L,
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
          U = n.Pop,
          M = !1,
          j = !1,
          T = !1,
          O = [],
          B = [],
          N = new Map,
          F = 0,
          I = -1,
          z = new Map,
          W = new Set,
          H = new Map,
          $ = new Map,
          K = new Map,
          q = !1;

        function J(e) {
          A = a({}, A, e), v.forEach((e => e(A)))
        }

        function Y(t, r) {
          var o, i;
          let s, c = null != A.actionData && null != A.navigation.formMethod && Me(A.navigation.formMethod) && "loading" === A.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
          s = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : c ? A.actionData : null;
          let d = r.loaderData ? xe(A.loaderData, r.loaderData, r.matches || [], r.errors) : A.loaderData,
            h = A.blockers;
          h.size > 0 && (h = new Map(h), h.forEach(((e, t) => h.set(t, se))));
          let f = !0 === M || null != A.navigation.formMethod && Me(A.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
          l && (u = l, l = void 0), j || U === n.Pop || (U === n.Push ? e.history.push(t, t.state) : U === n.Replace && e.history.replace(t, t.state)), J(a({}, r, {
            actionData: s,
            loaderData: d,
            historyAction: U,
            location: t,
            initialized: !0,
            navigation: ie,
            revalidation: "idle",
            restoreScrollPosition: Pe(t, r.matches || A.matches),
            preventScrollReset: f,
            blockers: h
          })), U = n.Pop, M = !1, j = !1, T = !1, O = [], B = []
        }
        async function V(t, r, o) {
          P && P.abort(), P = null, U = t, j = !0 === (o && o.startUninterruptedRevalidation),
            function(e, t) {
              if (g && x) {
                let r = Ee(e, t);
                g[r] = x()
              }
            }(A.location, A.matches), M = !0 === (o && o.preventScrollReset);
          let c = l || u,
            d = o && o.overrideNavigation,
            f = w(c, r, h);
          if (!f) {
            let e = Ce(404, {
                pathname: r.pathname
              }),
              {
                matches: t,
                route: n
              } = De(c);
            return we(), void Y(r, {
              matches: t,
              loaderData: {},
              errors: {
                [n.id]: e
              }
            })
          }
          if (A.initialized && !T && (p = A.location, m = r, p.pathname === m.pathname && p.search === m.search && ("" === p.hash ? "" !== m.hash : p.hash === m.hash || "" !== m.hash)) && !(o && o.submission && Me(o.submission.formMethod))) return void Y(r, {
            matches: f
          });
          var p, m;
          P = new AbortController;
          let v, b, E = be(e.history, r, P.signal, o && o.submission);
          if (o && o.pendingError) b = {
            [Se(f).route.id]: o.pendingError
          };
          else if (o && o.submission && Me(o.submission.formMethod)) {
            let e = await async function(e, t, r, o, a) {
              void 0 === a && (a = {}), Z();
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
              }(t, r);
              J({
                navigation: u
              });
              let c = _e(o, t);
              if (c.route.action || c.route.lazy) {
                if (l = await ge("action", e, c, o, s, i, h), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else l = {
                type: y.error,
                error: Ce(405, {
                  method: e.method,
                  pathname: t.pathname,
                  routeId: c.route.id
                })
              };
              if (Ue(l)) {
                let e;
                return e = a && null != a.replace ? a.replace : l.location === A.location.pathname + A.location.search, await G(A, l, {
                  submission: r,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (Ae(l)) {
                let e = Se(o, c.route.id);
                return !0 !== (a && a.replace) && (U = n.Push), {
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
                  [c.route.id]: l.data
                }
              }
            }(E, r, o.submission, f, {
              replace: o.replace
            });
            if (e.shortCircuited) return;
            v = e.pendingActionData, b = e.pendingActionError, d = Ne(r, o.submission), E = new Request(E.url, {
              signal: E.signal
            })
          }
          let {
            shortCircuited: R,
            loaderData: S,
            errors: D
          } = await async function(t, r, n, o, i, s, c, d, f) {
            let p = o || Ne(r, i),
              m = i || s || Be(p),
              v = l || u,
              [y, g] = pe(e.history, A, n, m, r, T, O, B, H, W, v, h, d, f);
            if (we((e => !(n && n.some((t => t.route.id === e))) || y && y.some((t => t.route.id === e)))), I = ++F, 0 === y.length && 0 === g.length) {
              let e = oe();
              return Y(r, a({
                matches: n,
                loaderData: {},
                errors: f || null
              }, d ? {
                actionData: d
              } : {}, e ? {
                fetchers: new Map(A.fetchers)
              } : {})), {
                shortCircuited: !0
              }
            }
            if (!j) {
              g.forEach((e => {
                let t = A.fetchers.get(e.key),
                  r = Fe(void 0, t ? t.data : void 0);
                A.fetchers.set(e.key, r)
              }));
              let e = d || A.actionData;
              J(a({
                navigation: p
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, g.length > 0 ? {
                fetchers: new Map(A.fetchers)
              } : {}))
            }
            g.forEach((e => {
              N.has(e.key) && re(e.key), e.controller && N.set(e.key, e.controller)
            }));
            let b = () => g.forEach((e => re(e.key)));
            P && P.signal.addEventListener("abort", b);
            let {
              results: w,
              loaderResults: E,
              fetcherResults: R
            } = await Q(A.matches, n, y, g, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            P && P.signal.removeEventListener("abort", b), g.forEach((e => N.delete(e.key)));
            let x = ke(w);
            if (x) {
              if (x.idx >= y.length) {
                let e = g[x.idx - y.length].key;
                W.add(e)
              }
              return await G(A, x.result, {
                replace: c
              }), {
                shortCircuited: !0
              }
            }
            let {
              loaderData: S,
              errors: D
            } = Re(A, n, y, E, f, g, R, $);
            $.forEach(((e, t) => {
              e.subscribe((r => {
                (r || e.done) && $.delete(t)
              }))
            }));
            let C = oe(),
              k = de(I);
            return a({
              loaderData: S,
              errors: D
            }, C || k || g.length > 0 ? {
              fetchers: new Map(A.fetchers)
            } : {})
          }(E, r, f, d, o && o.submission, o && o.fetcherSubmission, o && o.replace, v, b);
          R || (P = null, Y(r, a({
            matches: f
          }, v ? {
            actionData: v
          } : {}, {
            loaderData: S,
            errors: D
          })))
        }

        function X(e) {
          return A.fetchers.get(e) || le
        }
        async function G(o, i, l) {
          let {
            submission: s,
            fetcherSubmission: u,
            replace: d
          } = void 0 === l ? {} : l;
          i.revalidate && (T = !0);
          let p = f(o.location, i.location, {
            _isRedirect: !0
          });
          if (c(p, "Expected a location on the redirect navigation"), r) {
            let r = !1;
            if (i.reloadDocument) r = !0;
            else if (ue.test(i.location)) {
              const n = e.history.createURL(i.location);
              r = n.origin !== t.location.origin || null == _(n.pathname, h)
            }
            if (r) return void(d ? t.location.replace(i.location) : t.location.assign(i.location))
          }
          P = null;
          let m = !0 === d ? n.Replace : n.Push,
            {
              formMethod: v,
              formAction: y,
              formEncType: g
            } = o.navigation;
          !s && !u && v && y && g && (s = Be(o.navigation));
          let b = s || u;
          if (ae.has(i.status) && b && Me(b.formMethod)) await V(m, p, {
            submission: a({}, b, {
              formAction: i.location
            }),
            preventScrollReset: M
          });
          else {
            let e = Ne(p, s);
            await V(m, p, {
              overrideNavigation: e,
              fetcherSubmission: u,
              preventScrollReset: M
            })
          }
        }
        async function Q(t, r, n, o, a) {
          let l = await Promise.all([...n.map((e => ge("loader", a, e, r, s, i, h))), ...o.map((t => t.matches && t.match && t.controller ? ge("loader", be(e.history, t.path, t.controller.signal), t.match, t.matches, s, i, h) : {
              type: y.error,
              error: Ce(404, {
                pathname: t.path
              })
            }))]),
            u = l.slice(0, n.length),
            c = l.slice(n.length);
          return await Promise.all([je(t, n, u, u.map((() => a.signal)), !1, A.loaderData), je(t, o.map((e => e.match)), c, o.map((e => e.controller ? e.controller.signal : null)), !0)]), {
            results: l,
            loaderResults: u,
            fetcherResults: c
          }
        }

        function Z() {
          T = !0, O.push(...we()), H.forEach(((e, t) => {
            N.has(t) && (B.push(t), re(t))
          }))
        }

        function ee(e, t, r) {
          let n = Se(A.matches, t);
          te(e), J({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(A.fetchers)
          })
        }

        function te(e) {
          let t = A.fetchers.get(e);
          !N.has(e) || t && "loading" === t.state && z.has(e) || re(e), H.delete(e), z.delete(e), W.delete(e), A.fetchers.delete(e)
        }

        function re(e) {
          let t = N.get(e);
          c(t, "Expected fetch controller: " + e), t.abort(), N.delete(e)
        }

        function ne(e) {
          for (let t of e) {
            let e = Ie(X(t).data);
            A.fetchers.set(t, e)
          }
        }

        function oe() {
          let e = [],
            t = !1;
          for (let r of W) {
            let n = A.fetchers.get(r);
            c(n, "Expected fetcher: " + r), "loading" === n.state && (W.delete(r), e.push(r), t = !0)
          }
          return ne(e), t
        }

        function de(e) {
          let t = [];
          for (let [r, n] of z)
            if (n < e) {
              let e = A.fetchers.get(r);
              c(e, "Expected fetcher: " + r), "loading" === e.state && (re(r), z.delete(r), t.push(r))
            } return ne(t), t.length > 0
        }

        function me(e) {
          A.blockers.delete(e), K.delete(e)
        }

        function ve(e, t) {
          let r = A.blockers.get(e) || se;
          c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
          let n = new Map(A.blockers);
          n.set(e, t), J({
            blockers: n
          })
        }

        function ye(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === K.size) return;
          K.size > 1 && d(!1, "A router only supports one blocker at a time");
          let o = Array.from(K.entries()),
            [a, i] = o[o.length - 1],
            l = A.blockers.get(a);
          return l && "proceeding" === l.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? a : void 0
        }

        function we(e) {
          let t = [];
          return $.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), $.delete(n))
          })), t
        }

        function Ee(e, t) {
          return R && R(e, t.map((e => E(e, A.loaderData)))) || e.key
        }

        function Pe(e, t) {
          if (g) {
            let r = Ee(e, t),
              n = g[r];
            if ("number" == typeof n) return n
          }
          return null
        }
        return k = {
          get basename() {
            return h
          },
          get state() {
            return A
          },
          get routes() {
            return u
          },
          initialize: function() {
            return m = e.history.listen((t => {
              let {
                action: r,
                location: n,
                delta: o
              } = t;
              if (q) return void(q = !1);
              d(0 === K.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
              let a = ye({
                currentLocation: A.location,
                nextLocation: n,
                historyAction: r
              });
              return a && null != o ? (q = !0, e.history.go(-1 * o), void ve(a, {
                state: "blocked",
                location: n,
                proceed() {
                  ve(a, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: n
                  }), e.history.go(o)
                },
                reset() {
                  let e = new Map(A.blockers);
                  e.set(a, se), J({
                    blockers: e
                  })
                }
              })) : V(r, n)
            })), A.initialized || V(n.Pop, A.location), k
          },
          subscribe: function(e) {
            return v.add(e), () => v.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (g = e, x = t, R = r || null, !S && A.navigation === ie) {
              S = !0;
              let e = Pe(A.location, A.matches);
              null != e && J({
                restoreScrollPosition: e
              })
            }
            return () => {
              g = null, x = null, R = null
            }
          },
          navigate: async function t(r, o) {
            if ("number" == typeof r) return void e.history.go(r);
            let i = he(A.location, A.matches, h, p.v7_prependBasename, r, null == o ? void 0 : o.fromRouteId, null == o ? void 0 : o.relative),
              {
                path: l,
                submission: s,
                error: u
              } = fe(p.v7_normalizeFormMethod, !1, i, o),
              c = A.location,
              d = f(A.location, l, o && o.state);
            d = a({}, d, e.history.encodeLocation(d));
            let m = o && null != o.replace ? o.replace : void 0,
              v = n.Push;
            !0 === m ? v = n.Replace : !1 === m || null != s && Me(s.formMethod) && s.formAction === A.location.pathname + A.location.search && (v = n.Replace);
            let y = o && "preventScrollReset" in o ? !0 === o.preventScrollReset : void 0,
              g = ye({
                currentLocation: c,
                nextLocation: d,
                historyAction: v
              });
            if (!g) return await V(v, d, {
              submission: s,
              pendingError: u,
              preventScrollReset: y,
              replace: o && o.replace
            });
            ve(g, {
              state: "blocked",
              location: d,
              proceed() {
                ve(g, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: d
                }), t(r, o)
              },
              reset() {
                let e = new Map(A.blockers);
                e.set(g, se), J({
                  blockers: e
                })
              }
            })
          },
          fetch: function(t, r, n, d) {
            if (o) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            N.has(t) && re(t);
            let f = l || u,
              m = he(A.location, A.matches, h, p.v7_prependBasename, n, r, null == d ? void 0 : d.relative),
              v = w(f, m, h);
            if (!v) return void ee(t, r, Ce(404, {
              pathname: m
            }));
            let {
              path: y,
              submission: g,
              error: b
            } = fe(p.v7_normalizeFormMethod, !0, m, d);
            if (b) return void ee(t, r, b);
            let E = _e(v, y);
            M = !0 === (d && d.preventScrollReset), g && Me(g.formMethod) ? async function(t, r, n, o, d, f) {
              if (Z(), H.delete(t), !o.route.action && !o.route.lazy) {
                let e = Ce(405, {
                  method: f.formMethod,
                  pathname: n,
                  routeId: r
                });
                return void ee(t, r, e)
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
              }(f, A.fetchers.get(t));
              A.fetchers.set(t, p), J({
                fetchers: new Map(A.fetchers)
              });
              let m = new AbortController,
                v = be(e.history, n, m.signal, f);
              N.set(t, m);
              let y = F,
                g = await ge("action", v, o, d, s, i, h);
              if (v.signal.aborted) return void(N.get(t) === m && N.delete(t));
              if (Ue(g)) {
                if (N.delete(t), I > y) {
                  let e = Ie(void 0);
                  return A.fetchers.set(t, e), void J({
                    fetchers: new Map(A.fetchers)
                  })
                } {
                  W.add(t);
                  let e = Fe(f);
                  return A.fetchers.set(t, e), J({
                    fetchers: new Map(A.fetchers)
                  }), G(A, g, {
                    fetcherSubmission: f
                  })
                }
              }
              if (Ae(g)) return void ee(t, r, g.error);
              if (Le(g)) throw Ce(400, {
                type: "defer-action"
              });
              let b = A.navigation.location || A.location,
                E = be(e.history, b, m.signal),
                R = l || u,
                x = "idle" !== A.navigation.state ? w(R, A.navigation.location, h) : A.matches;
              c(x, "Didn't find any matches after fetcher action");
              let S = ++F;
              z.set(t, S);
              let D = Fe(f, g.data);
              A.fetchers.set(t, D);
              let [C, k] = pe(e.history, A, x, f, b, T, O, B, H, W, R, h, {
                [o.route.id]: g.data
              }, void 0);
              k.filter((e => e.key !== t)).forEach((e => {
                let t = e.key,
                  r = A.fetchers.get(t),
                  n = Fe(void 0, r ? r.data : void 0);
                A.fetchers.set(t, n), N.has(t) && re(t), e.controller && N.set(t, e.controller)
              })), J({
                fetchers: new Map(A.fetchers)
              });
              let L = () => k.forEach((e => re(e.key)));
              m.signal.addEventListener("abort", L);
              let {
                results: M,
                loaderResults: j,
                fetcherResults: _
              } = await Q(A.matches, x, C, k, E);
              if (m.signal.aborted) return;
              m.signal.removeEventListener("abort", L), z.delete(t), N.delete(t), k.forEach((e => N.delete(e.key)));
              let K = ke(M);
              if (K) {
                if (K.idx >= C.length) {
                  let e = k[K.idx - C.length].key;
                  W.add(e)
                }
                return G(A, K.result)
              }
              let {
                loaderData: q,
                errors: V
              } = Re(A, A.matches, C, j, void 0, k, _, $);
              if (A.fetchers.has(t)) {
                let e = Ie(g.data);
                A.fetchers.set(t, e)
              }
              let X = de(S);
              "loading" === A.navigation.state && S > I ? (c(U, "Expected pending action"), P && P.abort(), Y(A.navigation.location, {
                matches: x,
                loaderData: q,
                errors: V,
                fetchers: new Map(A.fetchers)
              })) : (J(a({
                errors: V,
                loaderData: xe(A.loaderData, q, x, V)
              }, X || k.length > 0 ? {
                fetchers: new Map(A.fetchers)
              } : {})), T = !1)
            }(t, r, y, E, v, g): (H.set(t, {
              routeId: r,
              path: y
            }), async function(t, r, n, o, a, l) {
              let u = A.fetchers.get(t),
                d = Fe(l, u ? u.data : void 0);
              A.fetchers.set(t, d), J({
                fetchers: new Map(A.fetchers)
              });
              let f = new AbortController,
                p = be(e.history, n, f.signal);
              N.set(t, f);
              let m = F,
                v = await ge("loader", p, o, a, s, i, h);
              if (Le(v) && (v = await Te(v, p.signal, !0) || v), N.get(t) === f && N.delete(t), p.signal.aborted) return;
              if (Ue(v)) {
                if (I > m) {
                  let e = Ie(void 0);
                  return A.fetchers.set(t, e), void J({
                    fetchers: new Map(A.fetchers)
                  })
                }
                return W.add(t), void await G(A, v)
              }
              if (Ae(v)) {
                let e = Se(A.matches, r);
                return A.fetchers.delete(t), void J({
                  fetchers: new Map(A.fetchers),
                  errors: {
                    [e.route.id]: v.error
                  }
                })
              }
              c(!Le(v), "Unhandled fetcher deferred data");
              let y = Ie(v.data);
              A.fetchers.set(t, y), J({
                fetchers: new Map(A.fetchers)
              })
            }(t, r, y, E, v, g))
          },
          revalidate: function() {
            Z(), J({
              revalidation: "loading"
            }), "submitting" !== A.navigation.state && ("idle" !== A.navigation.state ? V(U || A.historyAction, A.navigation.location, {
              overrideNavigation: A.navigation
            }) : V(A.historyAction, A.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: X,
          deleteFetcher: te,
          dispose: function() {
            m && m(), v.clear(), P && P.abort(), A.fetchers.forEach(((e, t) => te(t))), A.blockers.forEach(((e, t) => me(t)))
          },
          getBlocker: function(e, t) {
            let r = A.blockers.get(e) || se;
            return K.get(e) !== t && K.set(e, t), r
          },
          deleteBlocker: me,
          _internalFetchControllers: N,
          _internalActiveDeferreds: $,
          _internalSetRoutes: function(e) {
            s = {}, l = b(e, i, void 0, s)
          }
        }, k
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
        let u = I(o || ".", F(l).map((e => e.pathnameBase)), _(e.pathname, r) || e.pathname, "path" === i);
        return null == o && (u.search = e.search, u.hash = e.hash), null != o && "" !== o && "." !== o || !s || !s.route.index || Oe(u.search) || (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), n && "/" !== r && (u.pathname = "/" === u.pathname ? r : z([r, u.pathname])), p(u)
      }

      function fe(e, t, r, n) {
        if (!n || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
          }(n)) return {
          path: r
        };
        if (n.formMethod && (o = n.formMethod, !ne.has(o.toLowerCase()))) return {
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
          d = Pe(r);
        if (void 0 !== n.body) {
          if ("text/plain" === n.formEncType) {
            if (!Me(u)) return l();
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
            if (!Me(u)) return l();
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

      function pe(e, t, r, n, o, i, l, s, u, c, d, h, f, p) {
        let m = p ? Object.values(p)[0] : f ? Object.values(f)[0] : void 0,
          v = e.createURL(t.location),
          y = e.createURL(o),
          g = p ? Object.keys(p)[0] : void 0,
          b = function(e, t) {
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
                  o = void 0 === e[r.route.id];
                return n || o
              }(t.loaderData, t.matches[r], e) || l.some((t => t === e.route.id))) return !0;
            let o = t.matches[r],
              s = e;
            return ve(e, a({
              currentUrl: v,
              currentParams: o.params,
              nextUrl: y,
              nextParams: s.params
            }, n, {
              actionResult: m,
              defaultShouldRevalidate: i || v.pathname + v.search === y.pathname + y.search || v.search !== y.search || me(o, s)
            }))
          })),
          E = [];
        return u.forEach(((e, o) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let l = w(d, e.path, h);
          if (!l) return void E.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let u = t.fetchers.get(o),
            f = _e(l, e.path),
            p = !1;
          p = !c.has(o) && (!!s.includes(o) || (u && "idle" !== u.state && void 0 === u.data ? i : ve(f, a({
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: y,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: m,
            defaultShouldRevalidate: i
          })))), p && E.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: l,
            match: f,
            controller: new AbortController
          })
        })), [b, E]
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
      async function ye(e, t, r) {
        if (!e.lazy) return;
        let n = await e.lazy();
        if (!e.lazy) return;
        let o = r[e.id];
        c(o, "No route found in manifest");
        let i = {};
        for (let e in n) {
          let t = void 0 !== o[e] && "hasErrorBoundary" !== e;
          d(!t, 'Route "' + o.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || g.has(e) || (i[e] = n[e])
        }
        Object.assign(o, i), Object.assign(o, a({}, t(o), {
          lazy: void 0
        }))
      }
      async function ge(e, t, r, n, o, a, i, l) {
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
              })), ye(r.route, a, o)]);
              if (e) throw e;
              u = t[0]
            } else {
              if (await ye(r.route, a, o), n = r.route[e], !n) {
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
                  type: y.data,
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
          s = y.error, u = e
        } finally {
          d && t.signal.removeEventListener("abort", d)
        }
        if (null != (f = u) && "number" == typeof f.status && "string" == typeof f.statusText && "object" == typeof f.headers && void 0 !== f.body) {
          let e, o = u.status;
          if (oe.has(o)) {
            let e = u.headers.get("Location");
            if (c(e, "Redirects returned/thrown from loaders/actions must have a Location header"), ue.test(e)) {
              if (!l.isStaticRequest) {
                let r = new URL(t.url),
                  n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  o = null != _(n.pathname, i);
                n.origin === r.origin && o && (e = n.pathname + n.search + n.hash)
              }
            } else e = he(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, e);
            if (l.isStaticRequest) throw u.headers.set("Location", e), u;
            return {
              type: y.redirect,
              status: o,
              location: e,
              revalidate: null !== u.headers.get("X-Remix-Revalidate"),
              reloadDocument: null !== u.headers.get("X-Remix-Reload-Document")
            }
          }
          if (l.isRouteRequest) throw {
            type: s === y.error ? y.error : y.data,
            response: u
          };
          let a = u.headers.get("Content-Type");
          return e = a && /\bapplication\/json\b/.test(a) ? await u.json() : await u.text(), s === y.error ? {
            type: s,
            error: new Q(o, u.statusText, e),
            headers: u.headers
          } : {
            type: y.data,
            data: e,
            statusCode: u.status,
            headers: u.headers
          }
        }
        var f, p, m;
        return s === y.error ? {
          type: s,
          error: u
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(u) ? {
          type: y.deferred,
          deferredData: u,
          statusCode: null == (p = u.init) ? void 0 : p.status,
          headers: (null == (m = u.init) ? void 0 : m.headers) && new Headers(u.init.headers)
        } : {
          type: y.data,
          data: u
        }
      }

      function be(e, t, r, n) {
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

      function Re(e, t, r, n, o, i, l, s) {
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
            if (c(!Ue(r), "Cannot handle redirect results in processLoaderData"), Ae(r)) {
              let t = Se(e, h),
                o = r.error;
              n && (o = Object.values(n)[0], n = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = o), i[h] = void 0, s || (s = !0, a = Z(r.error) ? r.error.status : 500), r.headers && (u[h] = r.headers)
            } else Le(r) ? (o.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || s || (a = r.statusCode), r.headers && (u[h] = r.headers)
          })), n && (l = n, i[Object.keys(n)[0]] = void 0), {
            loaderData: i,
            errors: l,
            statusCode: a || 200,
            loaderHeaders: u
          }
        }(t, r, n, o, s);
        for (let t = 0; t < i.length; t++) {
          let {
            key: r,
            match: n,
            controller: o
          } = i[t];
          c(void 0 !== l && void 0 !== l[t], "Did not find corresponding fetcher result");
          let s = l[t];
          if (!o || !o.signal.aborted)
            if (Ae(s)) {
              let t = Se(e.matches, null == n ? void 0 : n.route.id);
              d && d[t.route.id] || (d = a({}, d, {
                [t.route.id]: s.error
              })), e.fetchers.delete(r)
            } else if (Ue(s)) c(!1, "Unhandled fetcher revalidation redirect");
          else if (Le(s)) c(!1, "Unhandled fetcher deferred data");
          else {
            let t = Ie(s.data);
            e.fetchers.set(r, t)
          }
        }
        return {
          loaderData: u,
          errors: d
        }
      }

      function xe(e, t, r, n) {
        let o = a({}, t);
        for (let a of r) {
          let r = a.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (o[r] = t[r]) : void 0 !== e[r] && a.route.loader && (o[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return o
      }

      function Se(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function De(e) {
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

      function Ce(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: o,
          type: a
        } = void 0 === t ? {} : t, i = "Unknown Server Error", l = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", o && r && n ? l = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === a ? l = "defer() is not supported in actions" : "invalid-body" === a && (l = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", l = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && n ? l = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')), new Q(e || 500, i, new Error(l), !0)
      }

      function ke(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (Ue(r)) return {
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

      function Le(e) {
        return e.type === y.deferred
      }

      function Ae(e) {
        return e.type === y.error
      }

      function Ue(e) {
        return (e && e.type) === y.redirect
      }

      function Me(e) {
        return te.has(e.toLowerCase())
      }
      async function je(e, t, r, n, o, a) {
        for (let i = 0; i < r.length; i++) {
          let l = r[i],
            s = t[i];
          if (!s) continue;
          let u = e.find((e => e.route.id === s.route.id)),
            d = null != u && !me(u, s) && void 0 !== (a && a[s.route.id]);
          if (Le(l) && (o || d)) {
            let e = n[i];
            c(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await Te(l, e, o).then((e => {
              e && (r[i] = e || r[i])
            }))
          }
        }
      }
      async function Te(e, t, r) {
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

      function Oe(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function _e(e, t) {
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

      function Ne(e, t) {
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

      function Fe(e, t) {
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

      function Ie(e) {
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

      function ze() {
        return ze = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, ze.apply(this, arguments)
      }
      Symbol("deferred");
      const We = o.createContext(null),
        He = o.createContext(null),
        $e = o.createContext(null),
        Ke = o.createContext(null),
        qe = o.createContext(null),
        Je = o.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        Ye = o.createContext(null);

      function Ve(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        Xe() || c(!1);
        let {
          basename: n,
          navigator: a
        } = o.useContext(Ke), {
          hash: i,
          pathname: l,
          search: s
        } = it(e, {
          relative: r
        }), u = l;
        return "/" !== n && (u = "/" === l ? n : z([n, l])), a.createHref({
          pathname: u,
          search: s,
          hash: i
        })
      }

      function Xe() {
        return null != o.useContext(qe)
      }

      function Ge() {
        return Xe() || c(!1), o.useContext(qe).location
      }

      function Qe() {
        return o.useContext(qe).navigationType
      }

      function Ze(e) {
        Xe() || c(!1);
        let {
          pathname: t
        } = Ge();
        return o.useMemo((() => T(e, t)), [t, e])
      }

      function et(e) {
        o.useContext(Ke).static || o.useLayoutEffect(e)
      }

      function tt() {
        let {
          isDataRoute: e
        } = o.useContext(Je);
        return e ? function() {
          let {
            router: e
          } = vt(pt.UseNavigateStable), t = gt(mt.UseNavigateStable), r = o.useRef(!1);
          return et((() => {
            r.current = !0
          })), o.useCallback((function(n, o) {
            void 0 === o && (o = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, ze({
              fromRouteId: t
            }, o)))
          }), [e, t])
        }() : function() {
          Xe() || c(!1);
          let e = o.useContext(We),
            {
              basename: t,
              navigator: r
            } = o.useContext(Ke),
            {
              matches: n
            } = o.useContext(Je),
            {
              pathname: a
            } = Ge(),
            i = JSON.stringify(F(n).map((e => e.pathnameBase))),
            l = o.useRef(!1);
          return et((() => {
            l.current = !0
          })), o.useCallback((function(n, o) {
            if (void 0 === o && (o = {}), !l.current) return;
            if ("number" == typeof n) return void r.go(n);
            let s = I(n, JSON.parse(i), a, "path" === o.relative);
            null == e && "/" !== t && (s.pathname = "/" === s.pathname ? t : z([t, s.pathname])), (o.replace ? r.replace : r.push)(s, o.state, o)
          }), [t, r, i, a, e])
        }()
      }
      const rt = o.createContext(null);

      function nt() {
        return o.useContext(rt)
      }

      function ot(e) {
        let t = o.useContext(Je).outlet;
        return t ? o.createElement(rt.Provider, {
          value: e
        }, t) : t
      }

      function at() {
        let {
          matches: e
        } = o.useContext(Je), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function it(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          matches: n
        } = o.useContext(Je), {
          pathname: a
        } = Ge(), i = JSON.stringify(F(n).map((e => e.pathnameBase)));
        return o.useMemo((() => I(e, JSON.parse(i), a, "path" === r)), [e, i, a, r])
      }

      function lt(e, t) {
        return st(e, t)
      }

      function st(e, t, r) {
        Xe() || c(!1);
        let {
          navigator: a
        } = o.useContext(Ke), {
          matches: i
        } = o.useContext(Je), l = i[i.length - 1], s = l ? l.params : {}, u = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let d, h = Ge();
        if (t) {
          var f;
          let e = "string" == typeof t ? m(t) : t;
          "/" === u || (null == (f = e.pathname) ? void 0 : f.startsWith(u)) || c(!1), d = e
        } else d = h;
        let p = d.pathname || "/",
          v = w(e, {
            pathname: "/" === u ? p : p.slice(u.length) || "/"
          }),
          y = ft(v && v.map((e => Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: z([u, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? u : z([u, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), i, r);
        return t && y ? o.createElement(qe.Provider, {
          value: {
            location: ze({
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

      function ut() {
        let e = Ct(),
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
      const ct = o.createElement(ut, null);
      class dt extends o.Component {
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
          return this.state.error ? o.createElement(Je.Provider, {
            value: this.props.routeContext
          }, o.createElement(Ye.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function ht(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, a = o.useContext(We);
        return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), o.createElement(Je.Provider, {
          value: t
        }, n)
      }

      function ft(e, t, r) {
        var n;
        if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
          var a;
          if (null == (a = r) || !a.errors) return null;
          e = r.matches
        }
        let i = e,
          l = null == (n = r) ? void 0 : n.errors;
        if (null != l) {
          let e = i.findIndex((e => e.route.id && (null == l ? void 0 : l[e.route.id])));
          e >= 0 || c(!1), i = i.slice(0, Math.min(i.length, e + 1))
        }
        return i.reduceRight(((e, n, a) => {
          let s = n.route.id ? null == l ? void 0 : l[n.route.id] : null,
            u = null;
          r && (u = n.route.errorElement || ct);
          let c = t.concat(i.slice(0, a + 1)),
            d = () => {
              let t;
              return t = s ? u : n.route.Component ? o.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, o.createElement(ht, {
                match: n,
                routeContext: {
                  outlet: e,
                  matches: c,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === a) ? o.createElement(dt, {
            location: r.location,
            revalidation: r.revalidation,
            component: u,
            error: s,
            children: d(),
            routeContext: {
              outlet: null,
              matches: c,
              isDataRoute: !0
            }
          }) : d()
        }), null)
      }
      var pt = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(pt || {}),
        mt = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(mt || {});

      function vt(e) {
        let t = o.useContext(We);
        return t || c(!1), t
      }

      function yt(e) {
        let t = o.useContext(He);
        return t || c(!1), t
      }

      function gt(e) {
        let t = function(e) {
            let t = o.useContext(Je);
            return t || c(!1), t
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || c(!1), r.route.id
      }

      function bt() {
        return gt(mt.UseRouteId)
      }

      function wt() {
        return yt(mt.UseNavigation).navigation
      }

      function Et() {
        let e = vt(pt.UseRevalidator),
          t = yt(mt.UseRevalidator);
        return o.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function Rt() {
        let {
          matches: e,
          loaderData: t
        } = yt(mt.UseMatches);
        return o.useMemo((() => e.map((e => E(e, t)))), [e, t])
      }

      function xt() {
        let e = yt(mt.UseLoaderData),
          t = gt(mt.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function St(e) {
        return yt(mt.UseRouteLoaderData).loaderData[e]
      }

      function Dt() {
        let e = yt(mt.UseActionData);
        return o.useContext(Je) || c(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
      }

      function Ct() {
        var e;
        let t = o.useContext(Ye),
          r = yt(mt.UseRouteError),
          n = gt(mt.UseRouteError);
        return t || (null == (e = r.errors) ? void 0 : e[n])
      }

      function kt() {
        let e = o.useContext($e);
        return null == e ? void 0 : e._data
      }

      function Pt() {
        let e = o.useContext($e);
        return null == e ? void 0 : e._error
      }
      let Lt = 0;

      function At(e) {
        let {
          router: t,
          basename: r
        } = vt(pt.UseBlocker), n = yt(mt.UseBlocker), [a, i] = o.useState(""), l = o.useCallback((t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: n,
            nextLocation: o,
            historyAction: a
          } = t;
          return e({
            currentLocation: ze({}, n, {
              pathname: _(n.pathname, r) || n.pathname
            }),
            nextLocation: ze({}, o, {
              pathname: _(o.pathname, r) || o.pathname
            }),
            historyAction: a
          })
        }), [r, e]);
        return o.useEffect((() => {
          let e = String(++Lt);
          return i(e), () => t.deleteBlocker(e)
        }), [t]), o.useEffect((() => {
          "" !== a && t.getBlocker(a, l)
        }), [t, a, l]), a && n.blockers.has(a) ? n.blockers.get(a) : se
      }
      const Ut = o.startTransition;

      function Mt(e) {
        let {
          fallbackElement: t,
          router: r,
          future: n
        } = e, [a, i] = o.useState(r.state), {
          v7_startTransition: l
        } = n || {}, s = o.useCallback((e => {
          l && Ut ? Ut((() => i(e))) : i(e)
        }), [i, l]);
        o.useLayoutEffect((() => r.subscribe(s)), [r, s]);
        let u = o.useMemo((() => ({
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
          c = r.basename || "/",
          d = o.useMemo((() => ({
            router: r,
            navigator: u,
            static: !1,
            basename: c
          })), [r, u, c]);
        return o.createElement(o.Fragment, null, o.createElement(We.Provider, {
          value: d
        }, o.createElement(He.Provider, {
          value: a
        }, o.createElement(Nt, {
          basename: c,
          location: a.location,
          navigationType: a.historyAction,
          navigator: u
        }, a.initialized ? o.createElement(jt, {
          routes: r.routes,
          state: a
        }) : t))), null)
      }

      function jt(e) {
        let {
          routes: t,
          state: r
        } = e;
        return st(t, void 0, r)
      }

      function Tt(e) {
        let {
          basename: t,
          children: r,
          initialEntries: n,
          initialIndex: a,
          future: i
        } = e, s = o.useRef();
        null == s.current && (s.current = l({
          initialEntries: n,
          initialIndex: a,
          v5Compat: !0
        }));
        let u = s.current,
          [c, d] = o.useState({
            action: u.action,
            location: u.location
          }),
          {
            v7_startTransition: h
          } = i || {},
          f = o.useCallback((e => {
            h && Ut ? Ut((() => d(e))) : d(e)
          }), [d, h]);
        return o.useLayoutEffect((() => u.listen(f)), [u, f]), o.createElement(Nt, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: u
        })
      }

      function Ot(e) {
        let {
          to: t,
          replace: r,
          state: n,
          relative: a
        } = e;
        Xe() || c(!1);
        let {
          matches: i
        } = o.useContext(Je), {
          pathname: l
        } = Ge(), s = tt(), u = I(t, F(i).map((e => e.pathnameBase)), l, "path" === a), d = JSON.stringify(u);
        return o.useEffect((() => s(JSON.parse(d), {
          replace: r,
          state: n,
          relative: a
        })), [s, d, a, r, n]), null
      }

      function _t(e) {
        return ot(e.context)
      }

      function Bt(e) {
        c(!1)
      }

      function Nt(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: a,
          navigationType: i = n.Pop,
          navigator: l,
          static: s = !1
        } = e;
        Xe() && c(!1);
        let u = t.replace(/^\/*/, "/"),
          d = o.useMemo((() => ({
            basename: u,
            navigator: l,
            static: s
          })), [u, l, s]);
        "string" == typeof a && (a = m(a));
        let {
          pathname: h = "/",
          search: f = "",
          hash: p = "",
          state: v = null,
          key: y = "default"
        } = a, g = o.useMemo((() => {
          let e = _(h, u);
          return null == e ? null : {
            location: {
              pathname: e,
              search: f,
              hash: p,
              state: v,
              key: y
            },
            navigationType: i
          }
        }), [u, h, f, p, v, y, i]);
        return null == g ? null : o.createElement(Ke.Provider, {
          value: d
        }, o.createElement(qe.Provider, {
          children: r,
          value: g
        }))
      }

      function Ft(e) {
        let {
          children: t,
          location: r
        } = e;
        return lt(Kt(t), r)
      }

      function It(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return o.createElement(Ht, {
          resolve: n,
          errorElement: r
        }, o.createElement($t, null, t))
      }
      var zt = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(zt || {});
      const Wt = new Promise((() => {}));
      class Ht extends o.Component {
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
          } = this.props, n = null, a = zt.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              a = zt.error;
              let e = this.state.error;
              n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, a = void 0 !== n._error ? zt.error : void 0 !== n._data ? zt.success : zt.pending) : (a = zt.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else a = zt.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (a === zt.error && n._error instanceof q) throw Wt;
          if (a === zt.error && !t) throw n._error;
          if (a === zt.error) return o.createElement($e.Provider, {
            value: n,
            children: t
          });
          if (a === zt.success) return o.createElement($e.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function $t(e) {
        let {
          children: t
        } = e, r = kt(), n = "function" == typeof t ? t(r) : t;
        return o.createElement(o.Fragment, null, n)
      }

      function Kt(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return o.Children.forEach(e, ((e, n) => {
          if (!o.isValidElement(e)) return;
          let a = [...t, n];
          if (e.type === o.Fragment) return void r.push.apply(r, Kt(e.props.children, a));
          e.type !== Bt && c(!1), e.props.index && e.props.children && c(!1);
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
          e.props.children && (i.children = Kt(e.props.children, a)), r.push(i)
        })), r
      }

      function qt(e) {
        return ft(e)
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

      function Yt(e, t) {
        return de({
          basename: null == t ? void 0 : t.basename,
          future: ze({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: l({
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

      function Xt(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }
      const Gt = "get",
        Qt = "application/x-www-form-urlencoded";

      function Zt(e) {
        return null != e && "string" == typeof e.tagName
      }

      function er(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
            [r, n]
          ])
        }), []))
      }
      let tr = null;
      const rr = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function nr(e) {
        return null == e || rr.has(e) ? e : null
      }

      function or(e, t) {
        let r, n, o, a, i;
        if (Zt(l = e) && "form" === l.tagName.toLowerCase()) {
          let i = e.getAttribute("action");
          n = i ? _(i, t) : null, r = e.getAttribute("method") || Gt, o = nr(e.getAttribute("enctype")) || Qt, a = new FormData(e)
        } else if (function(e) {
            return Zt(e) && "button" === e.tagName.toLowerCase()
          }(e) || function(e) {
            return Zt(e) && "input" === e.tagName.toLowerCase()
          }(e) && ("submit" === e.type || "image" === e.type)) {
          let i = e.form;
          if (null == i) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let l = e.getAttribute("formaction") || i.getAttribute("action");
          if (n = l ? _(l, t) : null, r = e.getAttribute("formmethod") || i.getAttribute("method") || Gt, o = nr(e.getAttribute("formenctype")) || nr(i.getAttribute("enctype")) || Qt, a = new FormData(i, e), ! function() {
              if (null === tr) try {
                new FormData(document.createElement("form"), 0), tr = !1
              } catch (e) {
                tr = !0
              }
              return tr
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
          if (Zt(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
          r = Gt, n = null, o = Qt, i = e
        }
        var l;
        return a && "text/plain" === o && (i = a, a = void 0), {
          action: n,
          method: r.toLowerCase(),
          encType: o,
          formData: a,
          body: i
        }
      }
      const ar = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
        ir = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
        lr = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset"];

      function sr(e, t) {
        return de({
          basename: null == t ? void 0 : t.basename,
          future: Vt({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: s({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || cr(),
          routes: e,
          mapRouteProperties: Jt
        }).initialize()
      }

      function ur(e, t) {
        return de({
          basename: null == t ? void 0 : t.basename,
          future: Vt({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: u({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || cr(),
          routes: e,
          mapRouteProperties: Jt
        }).initialize()
      }

      function cr() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = Vt({}, t, {
          errors: dr(t.errors)
        })), t
      }

      function dr(e) {
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
      const hr = o.startTransition;

      function fr(e) {
        let {
          basename: t,
          children: r,
          future: n,
          window: a
        } = e, i = o.useRef();
        null == i.current && (i.current = s({
          window: a,
          v5Compat: !0
        }));
        let l = i.current,
          [u, c] = o.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: d
          } = n || {},
          h = o.useCallback((e => {
            d && hr ? hr((() => c(e))) : c(e)
          }), [c, d]);
        return o.useLayoutEffect((() => l.listen(h)), [l, h]), o.createElement(Nt, {
          basename: t,
          children: r,
          location: u.location,
          navigationType: u.action,
          navigator: l
        })
      }

      function pr(e) {
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
        let l = i.current,
          [s, c] = o.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: d
          } = n || {},
          h = o.useCallback((e => {
            d && hr ? hr((() => c(e))) : c(e)
          }), [c, d]);
        return o.useLayoutEffect((() => l.listen(h)), [l, h]), o.createElement(Nt, {
          basename: t,
          children: r,
          location: s.location,
          navigationType: s.action,
          navigator: l
        })
      }

      function mr(e) {
        let {
          basename: t,
          children: r,
          future: n,
          history: a
        } = e, [i, l] = o.useState({
          action: a.action,
          location: a.location
        }), {
          v7_startTransition: s
        } = n || {}, u = o.useCallback((e => {
          s && hr ? hr((() => l(e))) : l(e)
        }), [l, s]);
        return o.useLayoutEffect((() => a.listen(u)), [a, u]), o.createElement(Nt, {
          basename: t,
          children: r,
          location: i.location,
          navigationType: i.action,
          navigator: a
        })
      }
      const vr = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        yr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        gr = o.forwardRef((function(e, t) {
          let r, {
              onClick: n,
              relative: a,
              reloadDocument: i,
              replace: l,
              state: s,
              target: u,
              to: c,
              preventScrollReset: d
            } = e,
            h = Xt(e, ar),
            {
              basename: f
            } = o.useContext(Ke),
            p = !1;
          if ("string" == typeof c && yr.test(c) && (r = c, vr)) try {
            let e = new URL(window.location.href),
              t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
              r = _(t.pathname, f);
            t.origin === e.origin && null != r ? c = r + t.search + t.hash : p = !0
          } catch (e) {}
          let m = Ve(c, {
              relative: a
            }),
            v = kr(c, {
              replace: l,
              state: s,
              target: u,
              preventScrollReset: d,
              relative: a
            });
          return o.createElement("a", Vt({}, h, {
            href: r || m,
            onClick: p || i ? n : function(e) {
              n && n(e), e.defaultPrevented || v(e)
            },
            ref: t,
            target: u
          }))
        })),
        br = o.forwardRef((function(e, t) {
          let {
            "aria-current": r = "page",
            caseSensitive: n = !1,
            className: a = "",
            end: i = !1,
            style: l,
            to: s,
            children: u
          } = e, c = Xt(e, ir), d = it(s, {
            relative: c.relative
          }), h = Ge(), f = o.useContext(He), {
            navigator: p
          } = o.useContext(Ke), m = p.encodeLocation ? p.encodeLocation(d).pathname : d.pathname, v = h.pathname, y = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
          n || (v = v.toLowerCase(), y = y ? y.toLowerCase() : null, m = m.toLowerCase());
          let g, b = v === m || !i && v.startsWith(m) && "/" === v.charAt(m.length),
            w = null != y && (y === m || !i && y.startsWith(m) && "/" === y.charAt(m.length)),
            E = b ? r : void 0;
          g = "function" == typeof a ? a({
            isActive: b,
            isPending: w
          }) : [a, b ? "active" : null, w ? "pending" : null].filter(Boolean).join(" ");
          let R = "function" == typeof l ? l({
            isActive: b,
            isPending: w
          }) : l;
          return o.createElement(gr, Vt({}, c, {
            "aria-current": E,
            className: g,
            ref: t,
            style: R,
            to: s
          }), "function" == typeof u ? u({
            isActive: b,
            isPending: w
          }) : u)
        })),
        wr = o.forwardRef(((e, t) => {
          let r = Ar();
          return o.createElement(Er, Vt({}, e, {
            submit: r,
            ref: t
          }))
        })),
        Er = o.forwardRef(((e, t) => {
          let {
            reloadDocument: r,
            replace: n,
            state: a,
            method: i = Gt,
            action: l,
            onSubmit: s,
            submit: u,
            relative: c,
            preventScrollReset: d
          } = e, h = Xt(e, lr), f = "get" === i.toLowerCase() ? "get" : "post", p = Mr(l, {
            relative: c
          });
          return o.createElement("form", Vt({
            ref: t,
            method: f,
            action: p,
            onSubmit: r ? s : e => {
              if (s && s(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                r = (null == t ? void 0 : t.getAttribute("formmethod")) || i;
              u(t || e.currentTarget, {
                method: r,
                replace: n,
                state: a,
                relative: c,
                preventScrollReset: d
              })
            }
          }, h))
        }));

      function Rr(e) {
        let {
          getKey: t,
          storageKey: r
        } = e;
        return Nr({
          getKey: t,
          storageKey: r
        }), null
      }
      var xr, Sr;

      function Dr(e) {
        let t = o.useContext(We);
        return t || c(!1), t
      }

      function Cr(e) {
        let t = o.useContext(He);
        return t || c(!1), t
      }

      function kr(e, t) {
        let {
          target: r,
          replace: n,
          state: a,
          preventScrollReset: i,
          relative: l
        } = void 0 === t ? {} : t, s = tt(), u = Ge(), c = it(e, {
          relative: l
        });
        return o.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, r)) {
            t.preventDefault();
            let r = void 0 !== n ? n : p(u) === p(c);
            s(e, {
              replace: r,
              state: a,
              preventScrollReset: i,
              relative: l
            })
          }
        }), [u, s, c, n, a, r, e, i, l])
      }

      function Pr(e) {
        let t = o.useRef(er(e)),
          r = o.useRef(!1),
          n = Ge(),
          a = o.useMemo((() => function(e, t) {
            let r = er(e);
            return t && t.forEach(((e, n) => {
              r.has(n) || t.getAll(n).forEach((e => {
                r.append(n, e)
              }))
            })), r
          }(n.search, r.current ? null : t.current)), [n.search]),
          i = tt(),
          l = o.useCallback(((e, t) => {
            const n = er("function" == typeof e ? e(a) : e);
            r.current = !0, i("?" + n, t)
          }), [i, a]);
        return [a, l]
      }

      function Lr() {
        if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
      }

      function Ar() {
        let {
          router: e
        } = Dr(xr.UseSubmit), {
          basename: t
        } = o.useContext(Ke), r = bt();
        return o.useCallback((function(n, o) {
          void 0 === o && (o = {}), Lr();
          let {
            action: a,
            method: i,
            encType: l,
            formData: s,
            body: u
          } = or(n, t);
          e.navigate(o.action || a, {
            preventScrollReset: o.preventScrollReset,
            formData: s,
            body: u,
            formMethod: o.method || i,
            formEncType: o.encType || l,
            replace: o.replace,
            state: o.state,
            fromRouteId: r
          })
        }), [e, t, r])
      }

      function Ur(e, t) {
        let {
          router: r
        } = Dr(xr.UseSubmitFetcher), {
          basename: n
        } = o.useContext(Ke);
        return o.useCallback((function(o, a) {
          void 0 === a && (a = {}), Lr();
          let {
            action: i,
            method: l,
            encType: s,
            formData: u,
            body: d
          } = or(o, n);
          null == t && c(!1), r.fetch(e, t, a.action || i, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: d,
            formMethod: a.method || l,
            formEncType: a.encType || s
          })
        }), [r, n, e, t])
      }

      function Mr(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: n
        } = o.useContext(Ke), a = o.useContext(Je);
        a || c(!1);
        let [i] = a.matches.slice(-1), l = Vt({}, it(e || ".", {
          relative: r
        })), s = Ge();
        if (null == e && (l.search = s.search, i.route.index)) {
          let e = new URLSearchParams(l.search);
          e.delete("index"), l.search = e.toString() ? "?" + e.toString() : ""
        }
        return e && "." !== e || !i.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (l.pathname = "/" === l.pathname ? n : z([n, l.pathname])), p(l)
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"
      })(xr || (xr = {})),
      function(e) {
        e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(Sr || (Sr = {}));
      let jr = 0;

      function Tr() {
        var e;
        let {
          router: t
        } = Dr(xr.UseFetcher), r = o.useContext(Je);
        r || c(!1);
        let n = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
        null == n && c(!1);
        let [a] = o.useState((() => String(++jr))), [i] = o.useState((() => (n || c(!1), function(e, t) {
          return o.forwardRef(((r, n) => {
            let a = Ur(e, t);
            return o.createElement(Er, Vt({}, r, {
              ref: n,
              submit: a
            }))
          }))
        }(a, n)))), [l] = o.useState((() => e => {
          t || c(!1), n || c(!1), t.fetch(a, n, e)
        })), s = Ur(a, n), u = t.getFetcher(a), d = o.useMemo((() => Vt({
          Form: i,
          submit: s,
          load: l
        }, u)), [u, i, s, l]);
        return o.useEffect((() => () => {
          t ? t.deleteFetcher(a) : console.warn("No router available to clean up from useFetcher()")
        }), [t, a]), d
      }

      function Or() {
        return [...Cr(Sr.UseFetchers).fetchers.values()]
      }
      const _r = "react-router-scroll-positions";
      let Br = {};

      function Nr(e) {
        let {
          getKey: t,
          storageKey: r
        } = void 0 === e ? {} : e, {
          router: n
        } = Dr(xr.UseScrollRestoration), {
          restoreScrollPosition: a,
          preventScrollReset: i
        } = Cr(Sr.UseScrollRestoration), {
          basename: l
        } = o.useContext(Ke), s = Ge(), u = Rt(), c = wt();
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
              let e = (t ? t(s, u) : null) || s.key;
              Br[e] = window.scrollY
            }
            sessionStorage.setItem(r || _r, JSON.stringify(Br)), window.history.scrollRestoration = "auto"
          }), [r, t, c.state, s, u])), "undefined" != typeof document && (o.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(r || _r);
              e && (Br = JSON.parse(e))
            } catch (e) {}
          }), [r]), o.useLayoutEffect((() => {
            let e = t && "/" !== l ? (e, r) => t(Vt({}, e, {
                pathname: _(e.pathname, l) || e.pathname
              }), r) : t,
              r = null == n ? void 0 : n.enableScrollRestoration(Br, (() => window.scrollY), e);
            return () => r && r()
          }), [n, l, t]), o.useLayoutEffect((() => {
            if (!1 !== a)
              if ("number" != typeof a) {
                if (s.hash) {
                  let e = document.getElementById(decodeURIComponent(s.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== i && window.scrollTo(0, 0)
              } else window.scrollTo(0, a)
          }), [s, a, i]))
      }

      function Fr(e, t) {
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

      function Ir(e) {
        let {
          when: t,
          message: r
        } = e, n = At(t);
        o.useEffect((() => {
          "blocked" === n.state && (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset())
        }), [n, r]), o.useEffect((() => {
          "blocked" !== n.state || t || n.reset()
        }), [n, t])
      }
    }
  }
]);