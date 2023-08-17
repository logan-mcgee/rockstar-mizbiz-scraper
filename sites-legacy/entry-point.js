/*! For license information please see remote-entry.js.LICENSE.txt */
var sites_legacy;
(() => {
  "use strict";
  var e, t, r, n, o = {
      4061: (e, t, r) => {
        r.r(t), r.d(t, {
          AbortedDeferredError: () => H,
          Await: () => jt,
          BrowserRouter: () => nr,
          Form: () => cr,
          HashRouter: () => or,
          Link: () => sr,
          MemoryRouter: () => Pt,
          NavLink: () => ur,
          Navigate: () => Lt,
          NavigationType: () => n,
          Outlet: () => At,
          Route: () => Ut,
          Router: () => Mt,
          RouterProvider: () => kt,
          Routes: () => Ot,
          ScrollRestoration: () => fr,
          UNSAFE_DataRouterContext: () => Ne,
          UNSAFE_DataRouterStateContext: () => Be,
          UNSAFE_LocationContext: () => ze,
          UNSAFE_NavigationContext: () => $e,
          UNSAFE_RouteContext: () => qe,
          UNSAFE_useRouteId: () => mt,
          UNSAFE_useScrollRestoration: () => kr,
          createBrowserRouter: () => Zt,
          createHashRouter: () => er,
          createMemoryRouter: () => qt,
          createPath: () => p,
          createRoutesFromChildren: () => It,
          createRoutesFromElements: () => It,
          createSearchParams: () => Yt,
          defer: () => V,
          generatePath: () => U,
          isRouteErrorResponse: () => G,
          json: () => W,
          matchPath: () => M,
          matchRoutes: () => w,
          parsePath: () => m,
          redirect: () => Y,
          renderMatches: () => $t,
          resolvePath: () => T,
          unstable_HistoryRouter: () => ar,
          unstable_useBlocker: () => Ct,
          unstable_usePrompt: () => Pr,
          useActionData: () => Et,
          useAsyncError: () => xt,
          useAsyncValue: () => St,
          useBeforeUnload: () => Dr,
          useFetcher: () => Sr,
          useFetchers: () => xr,
          useFormAction: () => Er,
          useHref: () => He,
          useInRouterContext: () => Ke,
          useLinkClickHandler: () => yr,
          useLoaderData: () => bt,
          useLocation: () => Je,
          useMatch: () => Ye,
          useMatches: () => gt,
          useNavigate: () => Ge,
          useNavigation: () => vt,
          useNavigationType: () => Ve,
          useOutlet: () => et,
          useOutletContext: () => Ze,
          useParams: () => tt,
          useResolvedPath: () => rt,
          useRevalidator: () => yt,
          useRouteError: () => Rt,
          useRouteLoaderData: () => wt,
          useRoutes: () => nt,
          useSearchParams: () => gr,
          useSubmit: () => br
        });
        var n, o = r(289);

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
          t = r.map(((e, t) => f(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
          let i = u(null == o ? t.length - 1 : o),
            l = n.Pop,
            s = null;

          function u(e) {
            return Math.min(Math.max(e, 0), t.length - 1)
          }

          function c() {
            return t[i]
          }

          function f(e, r, n) {
            void 0 === r && (r = null);
            let o = h(t ? c().pathname : "/", e, r, n);
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
              let o = f(e, r);
              i += 1, t.splice(i, t.length, o), a && s && s({
                action: l,
                location: o,
                delta: 1
              })
            },
            replace(e, r) {
              l = n.Replace;
              let o = f(e, r);
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
            return h("", {
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
            return h("", {
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

        function f(e, t) {
          return {
            usr: e.state,
            key: e.key,
            idx: t
          }
        }

        function h(e, t, r, n) {
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
              let o = h(w.location, e, t);
              r && r(o, e), v = y() + 1;
              let a = f(o, v),
                i = w.createHref(o);
              try {
                u.pushState(a, "", i)
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
              let o = h(w.location, e, t);
              r && r(o, e), v = y();
              let a = f(o, v),
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
          let n = j(("string" == typeof t ? m(t) : t).pathname || "/", r);
          if (null == n) return null;
          let o = E(e);
          ! function(e) {
            e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
              return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
            }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
          }(o);
          let a = null;
          for (let e = 0; null == a && e < o.length; ++e) a = A(o[e], O(n));
          return a
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
            let l = I([n, i.relativePath]),
              s = r.concat(i);
            e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), E(e.children, t, s, l)), (null != e.path || e.index) && t.push({
              path: l,
              score: L(l, e.index),
              routesMeta: s
            })
          };
          return e.forEach(((e, t) => {
            var r;
            if ("" !== e.path && null != (r = e.path) && r.includes("?"))
              for (let r of R(e.path)) o(e, t, r);
            else o(e, t)
          })), t
        }

        function R(e) {
          let t = e.split("/");
          if (0 === t.length) return [];
          let [r, ...n] = t, o = r.endsWith("?"), a = r.replace(/\?$/, "");
          if (0 === n.length) return o ? [a, ""] : [a];
          let i = R(n.join("/")),
            l = [];
          return l.push(...i.map((e => "" === e ? a : [a, e].join("/")))), o && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
        }
        const S = /^:\w+$/,
          x = 3,
          _ = 2,
          C = 1,
          k = 10,
          D = -2,
          P = e => "*" === e;

        function L(e, t) {
          let r = e.split("/"),
            n = r.length;
          return r.some(P) && (n += D), t && (n += _), r.filter((e => !P(e))).reduce(((e, t) => e + (S.test(t) ? x : "" === t ? C : k)), n)
        }

        function A(e, t) {
          let {
            routesMeta: r
          } = e, n = {}, o = "/", a = [];
          for (let e = 0; e < r.length; ++e) {
            let i = r[e],
              l = e === r.length - 1,
              s = "/" === o ? t : t.slice(o.length) || "/",
              u = M({
                path: i.relativePath,
                caseSensitive: i.caseSensitive,
                end: l
              }, s);
            if (!u) return null;
            Object.assign(n, u.params);
            let c = i.route;
            a.push({
              params: n,
              pathname: I([o, u.pathname]),
              pathnameBase: $(I([o, u.pathnameBase])),
              route: c
            }), "/" !== u.pathnameBase && (o = I([o, u.pathnameBase]))
          }
          return a
        }

        function U(e, t) {
          void 0 === t && (t = {});
          let r = e;
          return r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (d(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*")), (r.startsWith("/") ? "/" : "") + r.split(/\/+/).map(((e, r, n) => {
            if (r === n.length - 1 && "*" === e) return t["*"];
            const o = e.match(/^:(\w+)(\??)$/);
            if (o) {
              const [, e, r] = o;
              let n = t[e];
              return "?" === r ? null == n ? "" : n : (null == n && c(!1, 'Missing ":' + e + '" param'), n)
            }
            return e.replace(/\?$/g, "")
          })).filter((e => !!e)).join("/")
        }

        function M(e, t) {
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
            hash: o = ""
          } = "string" == typeof e ? m(e) : e, a = r ? r.startsWith("/") ? r : function(e, t) {
            let r = t.replace(/\/+$/, "").split("/");
            return e.split("/").forEach((e => {
              ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
            })), r.length > 1 ? r.join("/") : "/"
          }(r, t) : t;
          return {
            pathname: a,
            search: z(n),
            hash: q(o)
          }
        }

        function F(e, t, r, n) {
          return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }

        function N(e) {
          return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
        }

        function B(e, t, r, n) {
          let o;
          void 0 === n && (n = !1), "string" == typeof e ? o = m(e) : (o = a({}, e), c(!o.pathname || !o.pathname.includes("?"), F("?", "pathname", "search", o)), c(!o.pathname || !o.pathname.includes("#"), F("#", "pathname", "hash", o)), c(!o.search || !o.search.includes("#"), F("#", "search", "hash", o)));
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
          let u = T(o, i),
            d = s && "/" !== s && s.endsWith("/"),
            f = (l || "." === s) && r.endsWith("/");
          return u.pathname.endsWith("/") || !d && !f || (u.pathname += "/"), u
        }
        const I = e => e.join("/").replace(/\/\/+/g, "/"),
          $ = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
          z = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
          q = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
          W = function(e, t) {
            void 0 === t && (t = {});
            let r = "number" == typeof t ? {
                status: t
              } : t,
              n = new Headers(r.headers);
            return n.has("Content-Type") || n.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), a({}, r, {
              headers: n
            }))
          };
        class H extends Error {}
        class K {
          constructor(e, t) {
            let r;
            this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], c(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
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
            return c(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
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
        const V = function(e, t) {
            return void 0 === t && (t = {}), new K(e, "number" == typeof t ? {
              status: t
            } : t)
          },
          Y = function(e, t) {
            void 0 === t && (t = 302);
            let r = t;
            "number" == typeof r ? r = {
              status: r
            } : void 0 === r.status && (r.status = 302);
            let n = new Headers(r.headers);
            return n.set("Location", e), new Response(null, a({}, r, {
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
          oe = {
            state: "idle",
            location: void 0,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0
          },
          ae = {
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
          ue = !se,
          ce = e => ({
            hasErrorBoundary: Boolean(e.hasErrorBoundary)
          });

        function de(e) {
          let t;
          if (c(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) t = e.mapRouteProperties;
          else if (e.detectErrorBoundary) {
            let r = e.detectErrorBoundary;
            t = e => ({
              hasErrorBoundary: r(e)
            })
          } else t = ce;
          let r, o = {},
            i = b(e.routes, t, void 0, o),
            l = e.basename || "/",
            s = a({
              v7_normalizeFormMethod: !1,
              v7_prependBasename: !1
            }, e.future),
            u = null,
            f = new Set,
            p = null,
            m = null,
            v = null,
            g = null != e.hydrationData,
            E = w(i, e.history.location, l),
            R = null;
          if (null == E) {
            let t = _e(404, {
                pathname: e.history.location.pathname
              }),
              {
                matches: r,
                route: n
              } = xe(i);
            E = r, R = {
              [n.id]: t
            }
          }
          let S, x, _ = !(E.some((e => e.route.lazy)) || E.some((e => e.route.loader)) && null == e.hydrationData),
            C = {
              historyAction: e.history.action,
              location: e.history.location,
              matches: E,
              initialized: _,
              navigation: oe,
              restoreScrollPosition: null == e.hydrationData && null,
              preventScrollReset: !1,
              revalidation: "idle",
              loaderData: e.hydrationData && e.hydrationData.loaderData || {},
              actionData: e.hydrationData && e.hydrationData.actionData || null,
              errors: e.hydrationData && e.hydrationData.errors || R,
              fetchers: new Map,
              blockers: new Map
            },
            k = n.Pop,
            D = !1,
            P = !1,
            L = !1,
            A = [],
            U = [],
            M = new Map,
            O = 0,
            T = -1,
            F = new Map,
            N = new Set,
            B = new Map,
            I = new Map,
            $ = new Map,
            z = !1;

          function q(e) {
            C = a({}, C, e), f.forEach((e => e(C)))
          }

          function W(t, o) {
            var l, s;
            let u, c = null != C.actionData && null != C.navigation.formMethod && Ae(C.navigation.formMethod) && "loading" === C.navigation.state && !0 !== (null == (l = t.state) ? void 0 : l._isRedirect);
            u = o.actionData ? Object.keys(o.actionData).length > 0 ? o.actionData : null : c ? C.actionData : null;
            let d = o.loaderData ? Re(C.loaderData, o.loaderData, o.matches || [], o.errors) : C.loaderData;
            for (let [e] of $) re(e);
            let f = !0 === D || null != C.navigation.formMethod && Ae(C.navigation.formMethod) && !0 !== (null == (s = t.state) ? void 0 : s._isRedirect);
            r && (i = r, r = void 0), q(a({}, o, {
              actionData: u,
              loaderData: d,
              historyAction: k,
              location: t,
              initialized: !0,
              navigation: oe,
              revalidation: "idle",
              restoreScrollPosition: ye(t, o.matches || C.matches),
              preventScrollReset: f,
              blockers: new Map(C.blockers)
            })), P || k === n.Pop || (k === n.Push ? e.history.push(t, t.state) : k === n.Replace && e.history.replace(t, t.state)), k = n.Pop, D = !1, P = !1, L = !1, A = [], U = []
          }
          async function H(s, u, c) {
            x && x.abort(), x = null, k = s, P = !0 === (c && c.startUninterruptedRevalidation),
              function(e, t) {
                if (p && m && v) {
                  let r = t.map((e => je(e, C.loaderData))),
                    n = m(e, r) || e.key;
                  p[n] = v()
                }
              }(C.location, C.matches), D = !0 === (c && c.preventScrollReset);
            let d = r || i,
              f = c && c.overrideNavigation,
              h = w(d, u, l);
            if (!h) {
              let e = _e(404, {
                  pathname: u.pathname
                }),
                {
                  matches: t,
                  route: r
                } = xe(d);
              return ve(), void W(u, {
                matches: t,
                loaderData: {},
                errors: {
                  [r.id]: e
                }
              })
            }
            if (C.initialized && (g = C.location, b = u, g.pathname === b.pathname && g.search === b.search && ("" === g.hash ? "" !== b.hash : g.hash === b.hash || "" !== b.hash)) && !(c && c.submission && Ae(c.submission.formMethod))) return void W(u, {
              matches: h
            });
            var g, b;
            x = new AbortController;
            let E, R, S = be(e.history, u, x.signal, c && c.submission);
            if (c && c.pendingError) R = {
              [Se(h).route.id]: c.pendingError
            };
            else if (c && c.submission && Ae(c.submission.formMethod)) {
              let e = await async function(e, r, i, s, u) {
                let c;
                Y(), q({
                  navigation: a({
                    state: "submitting",
                    location: r
                  }, i)
                });
                let d = Te(s, r);
                if (d.route.action || d.route.lazy) {
                  if (c = await ge("action", e, d, s, o, t, l), e.signal.aborted) return {
                    shortCircuited: !0
                  }
                } else c = {
                  type: y.error,
                  error: _e(405, {
                    method: e.method,
                    pathname: r.pathname,
                    routeId: d.route.id
                  })
                };
                if (Le(c)) {
                  let e;
                  return e = u && null != u.replace ? u.replace : c.location === C.location.pathname + C.location.search, await J(C, c, {
                    submission: i,
                    replace: e
                  }), {
                    shortCircuited: !0
                  }
                }
                if (Pe(c)) {
                  let e = Se(s, d.route.id);
                  return !0 !== (u && u.replace) && (k = n.Push), {
                    pendingActionData: {},
                    pendingActionError: {
                      [e.route.id]: c.error
                    }
                  }
                }
                if (De(c)) throw _e(400, {
                  type: "defer-action"
                });
                return {
                  pendingActionData: {
                    [d.route.id]: c.data
                  }
                }
              }(S, u, c.submission, h, {
                replace: c.replace
              });
              if (e.shortCircuited) return;
              E = e.pendingActionData, R = e.pendingActionError, f = a({
                state: "loading",
                location: u
              }, c.submission), S = new Request(S.url, {
                signal: S.signal
              })
            }
            let {
              shortCircuited: _,
              loaderData: j,
              errors: F
            } = await async function(t, n, o, s, u, c, d, f, h) {
              let p = s;
              p || (p = a({
                state: "loading",
                location: n,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
              }, u));
              let m = u || c ? u || c : p.formMethod && p.formAction && p.formData && p.formEncType ? {
                  formMethod: p.formMethod,
                  formAction: p.formAction,
                  formData: p.formData,
                  formEncType: p.formEncType
                } : void 0,
                v = r || i,
                [y, g] = pe(e.history, C, o, m, n, L, A, U, B, v, l, f, h);
              if (ve((e => !(o && o.some((t => t.route.id === e))) || y && y.some((t => t.route.id === e)))), 0 === y.length && 0 === g.length) {
                let e = ee();
                return W(n, a({
                  matches: o,
                  loaderData: {},
                  errors: h || null
                }, f ? {
                  actionData: f
                } : {}, e ? {
                  fetchers: new Map(C.fetchers)
                } : {})), {
                  shortCircuited: !0
                }
              }
              if (!P) {
                g.forEach((e => {
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
                let e = f || C.actionData;
                q(a({
                  navigation: p
                }, e ? 0 === Object.keys(e).length ? {
                  actionData: null
                } : {
                  actionData: e
                } : {}, g.length > 0 ? {
                  fetchers: new Map(C.fetchers)
                } : {}))
              }
              T = ++O, g.forEach((e => {
                e.controller && M.set(e.key, e.controller)
              }));
              let b = () => g.forEach((e => Q(e.key)));
              x && x.signal.addEventListener("abort", b);
              let {
                results: w,
                loaderResults: E,
                fetcherResults: R
              } = await V(C.matches, o, y, g, t);
              if (t.signal.aborted) return {
                shortCircuited: !0
              };
              x && x.signal.removeEventListener("abort", b), g.forEach((e => M.delete(e.key)));
              let S = Ce(w);
              if (S) return await J(C, S, {
                replace: d
              }), {
                shortCircuited: !0
              };
              let {
                loaderData: _,
                errors: k
              } = Ee(C, o, y, E, h, g, R, I);
              I.forEach(((e, t) => {
                e.subscribe((r => {
                  (r || e.done) && I.delete(t)
                }))
              }));
              let D = ee(),
                j = te(T);
              return a({
                loaderData: _,
                errors: k
              }, D || j || g.length > 0 ? {
                fetchers: new Map(C.fetchers)
              } : {})
            }(S, u, h, f, c && c.submission, c && c.fetcherSubmission, c && c.replace, E, R);
            _ || (x = null, W(u, a({
              matches: h
            }, E ? {
              actionData: E
            } : {}, {
              loaderData: j,
              errors: F
            })))
          }

          function K(e) {
            return C.fetchers.get(e) || ae
          }
          async function J(t, r, o) {
            var i;
            let {
              submission: s,
              replace: u,
              isFetchActionRedirect: d
            } = void 0 === o ? {} : o;
            r.revalidate && (L = !0);
            let f = h(t.location, r.location, a({
              _isRedirect: !0
            }, d ? {
              _isFetchActionRedirect: !0
            } : {}));
            if (c(f, "Expected a location on the redirect navigation"), le.test(r.location) && se && void 0 !== (null == (i = window) ? void 0 : i.location)) {
              let t = e.history.createURL(r.location),
                n = null == j(t.pathname, l);
              if (window.location.origin !== t.origin || n) return void(u ? window.location.replace(r.location) : window.location.assign(r.location))
            }
            x = null;
            let p = !0 === u ? n.Replace : n.Push,
              {
                formMethod: m,
                formAction: v,
                formEncType: y,
                formData: g
              } = t.navigation;
            !s && m && v && g && y && (s = {
              formMethod: m,
              formAction: v,
              formEncType: y,
              formData: g
            }), ne.has(r.status) && s && Ae(s.formMethod) ? await H(p, f, {
              submission: a({}, s, {
                formAction: r.location
              }),
              preventScrollReset: D
            }) : d ? await H(p, f, {
              overrideNavigation: {
                state: "loading",
                location: f,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
              },
              fetcherSubmission: s,
              preventScrollReset: D
            }) : await H(p, f, {
              overrideNavigation: {
                state: "loading",
                location: f,
                formMethod: s ? s.formMethod : void 0,
                formAction: s ? s.formAction : void 0,
                formEncType: s ? s.formEncType : void 0,
                formData: s ? s.formData : void 0
              },
              preventScrollReset: D
            })
          }
          async function V(r, n, a, i, s) {
            let u = await Promise.all([...a.map((e => ge("loader", s, e, n, o, t, l))), ...i.map((r => r.matches && r.match && r.controller ? ge("loader", be(e.history, r.path, r.controller.signal), r.match, r.matches, o, t, l) : {
                type: y.error,
                error: _e(404, {
                  pathname: r.path
                })
              }))]),
              c = u.slice(0, a.length),
              d = u.slice(a.length);
            return await Promise.all([Ue(r, a, c, c.map((() => s.signal)), !1, C.loaderData), Ue(r, i.map((e => e.match)), d, i.map((e => e.controller ? e.controller.signal : null)), !0)]), {
              results: u,
              loaderResults: c,
              fetcherResults: d
            }
          }

          function Y() {
            L = !0, A.push(...ve()), B.forEach(((e, t) => {
              M.has(t) && (U.push(t), Q(t))
            }))
          }

          function X(e, t, r) {
            let n = Se(C.matches, t);
            G(e), q({
              errors: {
                [n.route.id]: r
              },
              fetchers: new Map(C.fetchers)
            })
          }

          function G(e) {
            M.has(e) && Q(e), B.delete(e), F.delete(e), N.delete(e), C.fetchers.delete(e)
          }

          function Q(e) {
            let t = M.get(e);
            c(t, "Expected fetch controller: " + e), t.abort(), M.delete(e)
          }

          function Z(e) {
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
              C.fetchers.set(t, e)
            }
          }

          function ee() {
            let e = [],
              t = !1;
            for (let r of N) {
              let n = C.fetchers.get(r);
              c(n, "Expected fetcher: " + r), "loading" === n.state && (N.delete(r), e.push(r), t = !0)
            }
            return Z(e), t
          }

          function te(e) {
            let t = [];
            for (let [r, n] of F)
              if (n < e) {
                let e = C.fetchers.get(r);
                c(e, "Expected fetcher: " + r), "loading" === e.state && (Q(r), F.delete(r), t.push(r))
              } return Z(t), t.length > 0
          }

          function re(e) {
            C.blockers.delete(e), $.delete(e)
          }

          function de(e, t) {
            let r = C.blockers.get(e) || ie;
            c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state), C.blockers.set(e, t), q({
              blockers: new Map(C.blockers)
            })
          }

          function me(e) {
            let {
              currentLocation: t,
              nextLocation: r,
              historyAction: n
            } = e;
            if (0 === $.size) return;
            $.size > 1 && d(!1, "A router only supports one blocker at a time");
            let o = Array.from($.entries()),
              [a, i] = o[o.length - 1],
              l = C.blockers.get(a);
            return l && "proceeding" === l.state ? void 0 : i({
              currentLocation: t,
              nextLocation: r,
              historyAction: n
            }) ? a : void 0
          }

          function ve(e) {
            let t = [];
            return I.forEach(((r, n) => {
              e && !e(n) || (r.cancel(), t.push(n), I.delete(n))
            })), t
          }

          function ye(e, t) {
            if (p && m && v) {
              let r = t.map((e => je(e, C.loaderData))),
                n = m(e, r) || e.key,
                o = p[n];
              if ("number" == typeof o) return o
            }
            return null
          }
          return S = {
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
              return u = e.history.listen((t => {
                let {
                  action: r,
                  location: n,
                  delta: o
                } = t;
                if (z) return void(z = !1);
                d(0 === $.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let a = me({
                  currentLocation: C.location,
                  nextLocation: n,
                  historyAction: r
                });
                return a && null != o ? (z = !0, e.history.go(-1 * o), void de(a, {
                  state: "blocked",
                  location: n,
                  proceed() {
                    de(a, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: n
                    }), e.history.go(o)
                  },
                  reset() {
                    re(a), q({
                      blockers: new Map(S.state.blockers)
                    })
                  }
                })) : H(r, n)
              })), C.initialized || H(n.Pop, C.location), S
            },
            subscribe: function(e) {
              return f.add(e), () => f.delete(e)
            },
            enableScrollRestoration: function(e, t, r) {
              if (p = e, v = t, m = r || (e => e.key), !g && C.navigation === oe) {
                g = !0;
                let e = ye(C.location, C.matches);
                null != e && q({
                  restoreScrollPosition: e
                })
              }
              return () => {
                p = null, v = null, m = null
              }
            },
            navigate: async function t(r, o) {
              if ("number" == typeof r) return void e.history.go(r);
              let i = fe(C.location, C.matches, l, s.v7_prependBasename, r, null == o ? void 0 : o.fromRouteId, null == o ? void 0 : o.relative),
                {
                  path: u,
                  submission: c,
                  error: d
                } = he(s.v7_normalizeFormMethod, !1, i, o),
                f = C.location,
                p = h(C.location, u, o && o.state);
              p = a({}, p, e.history.encodeLocation(p));
              let m = o && null != o.replace ? o.replace : void 0,
                v = n.Push;
              !0 === m ? v = n.Replace : !1 === m || null != c && Ae(c.formMethod) && c.formAction === C.location.pathname + C.location.search && (v = n.Replace);
              let y = o && "preventScrollReset" in o ? !0 === o.preventScrollReset : void 0,
                g = me({
                  currentLocation: f,
                  nextLocation: p,
                  historyAction: v
                });
              if (!g) return await H(v, p, {
                submission: c,
                pendingError: d,
                preventScrollReset: y,
                replace: o && o.replace
              });
              de(g, {
                state: "blocked",
                location: p,
                proceed() {
                  de(g, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: p
                  }), t(r, o)
                },
                reset() {
                  re(g), q({
                    blockers: new Map(C.blockers)
                  })
                }
              })
            },
            fetch: function(n, u, d, f) {
              if (ue) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
              M.has(n) && Q(n);
              let h = r || i,
                p = fe(C.location, C.matches, l, s.v7_prependBasename, d, u, null == f ? void 0 : f.relative),
                m = w(h, p, l);
              if (!m) return void X(n, u, _e(404, {
                pathname: p
              }));
              let {
                path: v,
                submission: y
              } = he(s.v7_normalizeFormMethod, !0, p, f), g = Te(m, v);
              D = !0 === (f && f.preventScrollReset), y && Ae(y.formMethod) ? async function(n, s, u, d, f, h) {
                if (Y(), B.delete(n), !d.route.action && !d.route.lazy) {
                  let e = _e(405, {
                    method: h.formMethod,
                    pathname: u,
                    routeId: s
                  });
                  return void X(n, s, e)
                }
                let p = C.fetchers.get(n),
                  m = a({
                    state: "submitting"
                  }, h, {
                    data: p && p.data,
                    " _hasFetcherDoneAnything ": !0
                  });
                C.fetchers.set(n, m), q({
                  fetchers: new Map(C.fetchers)
                });
                let v = new AbortController,
                  y = be(e.history, u, v.signal, h);
                M.set(n, v);
                let g = await ge("action", y, d, f, o, t, l);
                if (y.signal.aborted) return void(M.get(n) === v && M.delete(n));
                if (Le(g)) {
                  M.delete(n), N.add(n);
                  let e = a({
                    state: "loading"
                  }, h, {
                    data: void 0,
                    " _hasFetcherDoneAnything ": !0
                  });
                  return C.fetchers.set(n, e), q({
                    fetchers: new Map(C.fetchers)
                  }), J(C, g, {
                    submission: h,
                    isFetchActionRedirect: !0
                  })
                }
                if (Pe(g)) return void X(n, s, g.error);
                if (De(g)) throw _e(400, {
                  type: "defer-action"
                });
                let b = C.navigation.location || C.location,
                  E = be(e.history, b, v.signal),
                  R = r || i,
                  S = "idle" !== C.navigation.state ? w(R, C.navigation.location, l) : C.matches;
                c(S, "Didn't find any matches after fetcher action");
                let _ = ++O;
                F.set(n, _);
                let D = a({
                  state: "loading",
                  data: g.data
                }, h, {
                  " _hasFetcherDoneAnything ": !0
                });
                C.fetchers.set(n, D);
                let [P, j] = pe(e.history, C, S, h, b, L, A, U, B, R, l, {
                  [d.route.id]: g.data
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
                  C.fetchers.set(t, n), e.controller && M.set(t, e.controller)
                })), q({
                  fetchers: new Map(C.fetchers)
                });
                let $ = () => j.forEach((e => Q(e.key)));
                v.signal.addEventListener("abort", $);
                let {
                  results: z,
                  loaderResults: H,
                  fetcherResults: K
                } = await V(C.matches, S, P, j, E);
                if (v.signal.aborted) return;
                v.signal.removeEventListener("abort", $), F.delete(n), M.delete(n), j.forEach((e => M.delete(e.key)));
                let G = Ce(z);
                if (G) return J(C, G);
                let {
                  loaderData: Z,
                  errors: ee
                } = Ee(C, C.matches, P, H, void 0, j, K, I), re = {
                  state: "idle",
                  data: g.data,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  " _hasFetcherDoneAnything ": !0
                };
                C.fetchers.set(n, re);
                let ne = te(_);
                "loading" === C.navigation.state && _ > T ? (c(k, "Expected pending action"), x && x.abort(), W(C.navigation.location, {
                  matches: S,
                  loaderData: Z,
                  errors: ee,
                  fetchers: new Map(C.fetchers)
                })) : (q(a({
                  errors: ee,
                  loaderData: Re(C.loaderData, Z, S, ee)
                }, ne ? {
                  fetchers: new Map(C.fetchers)
                } : {})), L = !1)
              }(n, u, v, g, m, y): (B.set(n, {
                routeId: u,
                path: v
              }), async function(r, n, i, s, u, d) {
                let f = C.fetchers.get(r),
                  h = a({
                    state: "loading",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0
                  }, d, {
                    data: f && f.data,
                    " _hasFetcherDoneAnything ": !0
                  });
                C.fetchers.set(r, h), q({
                  fetchers: new Map(C.fetchers)
                });
                let p = new AbortController,
                  m = be(e.history, i, p.signal);
                M.set(r, p);
                let v = await ge("loader", m, s, u, o, t, l);
                if (De(v) && (v = await Me(v, m.signal, !0) || v), M.get(r) === p && M.delete(r), m.signal.aborted) return;
                if (Le(v)) return N.add(r), void await J(C, v);
                if (Pe(v)) {
                  let e = Se(C.matches, n);
                  return C.fetchers.delete(r), void q({
                    fetchers: new Map(C.fetchers),
                    errors: {
                      [e.route.id]: v.error
                    }
                  })
                }
                c(!De(v), "Unhandled fetcher deferred data");
                let y = {
                  state: "idle",
                  data: v.data,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  " _hasFetcherDoneAnything ": !0
                };
                C.fetchers.set(r, y), q({
                  fetchers: new Map(C.fetchers)
                })
              }(n, u, v, g, m, y))
            },
            revalidate: function() {
              Y(), q({
                revalidation: "loading"
              }), "submitting" !== C.navigation.state && ("idle" !== C.navigation.state ? H(k || C.historyAction, C.navigation.location, {
                overrideNavigation: C.navigation
              }) : H(C.historyAction, C.location, {
                startUninterruptedRevalidation: !0
              }))
            },
            createHref: t => e.history.createHref(t),
            encodeLocation: t => e.history.encodeLocation(t),
            getFetcher: K,
            deleteFetcher: G,
            dispose: function() {
              u && u(), f.clear(), x && x.abort(), C.fetchers.forEach(((e, t) => G(t))), C.blockers.forEach(((e, t) => re(t)))
            },
            getBlocker: function(e, t) {
              let r = C.blockers.get(e) || ie;
              return $.get(e) !== t && $.set(e, t), r
            },
            deleteBlocker: re,
            _internalFetchControllers: M,
            _internalActiveDeferreds: I,
            _internalSetRoutes: function(e) {
              o = {}, r = b(e, t, void 0, o)
            }
          }, S
        }

        function fe(e, t, r, n, o, a, i) {
          let l, s;
          if (null != a && "path" !== i) {
            l = [];
            for (let e of t)
              if (l.push(e), e.route.id === a) {
                s = e;
                break
              }
          } else l = t, s = t[t.length - 1];
          let u = B(o || ".", N(l).map((e => e.pathnameBase)), j(e.pathname, r) || e.pathname, "path" === i);
          return null == o && (u.search = e.search, u.hash = e.hash), null != o && "" !== o && "." !== o || !s || !s.route.index || Oe(u.search) || (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), n && "/" !== r && (u.pathname = "/" === u.pathname ? r : I([r, u.pathname])), p(u)
        }

        function he(e, t, r, n) {
          if (!n || ! function(e) {
              return null != e && "formData" in e
            }(n)) return {
            path: r
          };
          if (n.formMethod && (o = n.formMethod, !te.has(o.toLowerCase()))) return {
            path: r,
            error: _e(405, {
              method: n.formMethod
            })
          };
          var o;
          let a;
          if (n.formData) {
            let t = n.formMethod || "get";
            if (a = {
                formMethod: e ? t.toUpperCase() : t.toLowerCase(),
                formAction: ke(r),
                formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
                formData: n.formData
              }, Ae(a.formMethod)) return {
              path: r,
              submission: a
            }
          }
          let i = m(r),
            l = we(n.formData);
          return t && i.search && Oe(i.search) && l.append("index", ""), i.search = "?" + l, {
            path: p(i),
            submission: a
          }
        }

        function pe(e, t, r, n, o, i, l, s, u, c, d, f, h) {
          let p = h ? Object.values(h)[0] : f ? Object.values(f)[0] : void 0,
            m = e.createURL(t.location),
            v = e.createURL(o),
            y = h ? Object.keys(h)[0] : void 0,
            g = function(e, t) {
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
              let o = t.matches[r],
                s = e;
              return ve(e, a({
                currentUrl: m,
                currentParams: o.params,
                nextUrl: v,
                nextParams: s.params
              }, n, {
                actionResult: p,
                defaultShouldRevalidate: i || m.pathname + m.search === v.pathname + v.search || m.search !== v.search || me(o, s)
              }))
            })),
            b = [];
          return u.forEach(((e, o) => {
            if (!r.some((t => t.route.id === e.routeId))) return;
            let l = w(c, e.path, d);
            if (!l) return void b.push({
              key: o,
              routeId: e.routeId,
              path: e.path,
              matches: null,
              match: null,
              controller: null
            });
            let u = Te(l, e.path);
            (s.includes(o) || ve(u, a({
              currentUrl: m,
              currentParams: t.matches[t.matches.length - 1].params,
              nextUrl: v,
              nextParams: r[r.length - 1].params
            }, n, {
              actionResult: p,
              defaultShouldRevalidate: i
            }))) && b.push({
              key: o,
              routeId: e.routeId,
              path: e.path,
              matches: l,
              match: u,
              controller: new AbortController
            })
          })), [g, b]
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
        async function ge(e, t, r, n, o, a, i, l, s, u) {
          let d, f, h;
          void 0 === l && (l = !1), void 0 === s && (s = !1);
          let p = e => {
            let n, o = new Promise(((e, t) => n = t));
            return h = () => n(), t.signal.addEventListener("abort", h), Promise.race([e({
              request: t,
              params: r.params,
              context: u
            }), o])
          };
          try {
            let n = r.route[e];
            if (r.route.lazy)
              if (n) f = (await Promise.all([p(n), ye(r.route, a, o)]))[0];
              else {
                if (await ye(r.route, a, o), n = r.route[e], !n) {
                  if ("action" === e) {
                    let e = new URL(t.url),
                      n = e.pathname + e.search;
                    throw _e(405, {
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
                f = await p(n)
              }
            else {
              if (!n) {
                let e = new URL(t.url);
                throw _e(404, {
                  pathname: e.pathname + e.search
                })
              }
              f = await p(n)
            }
            c(void 0 !== f, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
          } catch (e) {
            d = y.error, f = e
          } finally {
            h && t.signal.removeEventListener("abort", h)
          }
          if (null != (m = f) && "number" == typeof m.status && "string" == typeof m.statusText && "object" == typeof m.headers && void 0 !== m.body) {
            let e, o = f.status;
            if (re.has(o)) {
              let e = f.headers.get("Location");
              if (c(e, "Redirects returned/thrown from loaders/actions must have a Location header"), le.test(e)) {
                if (!l) {
                  let r = new URL(t.url),
                    n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                    o = null != j(n.pathname, i);
                  n.origin === r.origin && o && (e = n.pathname + n.search + n.hash)
                }
              } else e = fe(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, e);
              if (l) throw f.headers.set("Location", e), f;
              return {
                type: y.redirect,
                status: o,
                location: e,
                revalidate: null !== f.headers.get("X-Remix-Revalidate")
              }
            }
            if (s) throw {
              type: d || y.data,
              response: f
            };
            let a = f.headers.get("Content-Type");
            return e = a && /\bapplication\/json\b/.test(a) ? await f.json() : await f.text(), d === y.error ? {
              type: d,
              error: new X(o, f.statusText, e),
              headers: f.headers
            } : {
              type: y.data,
              data: e,
              statusCode: f.status,
              headers: f.headers
            }
          }
          var m, v, g;
          return d === y.error ? {
            type: d,
            error: f
          } : function(e) {
            let t = e;
            return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
          }(f) ? {
            type: y.deferred,
            deferredData: f,
            statusCode: null == (v = f.init) ? void 0 : v.status,
            headers: (null == (g = f.init) ? void 0 : g.headers) && new Headers(f.init.headers)
          } : {
            type: y.data,
            data: f
          }
        }

        function be(e, t, r, n) {
          let o = e.createURL(ke(t)).toString(),
            a = {
              signal: r
            };
          if (n && Ae(n.formMethod)) {
            let {
              formMethod: e,
              formEncType: t,
              formData: r
            } = n;
            a.method = e.toUpperCase(), a.body = "application/x-www-form-urlencoded" === t ? we(r) : r
          }
          return new Request(o, a)
        }

        function we(e) {
          let t = new URLSearchParams;
          for (let [r, n] of e.entries()) t.append(r, n instanceof File ? n.name : n);
          return t
        }

        function Ee(e, t, r, n, o, i, l, s) {
          let {
            loaderData: u,
            errors: d
          } = function(e, t, r, n, o) {
            let a, i = {},
              l = null,
              s = !1,
              u = {};
            return r.forEach(((r, d) => {
              let f = t[d].route.id;
              if (c(!Le(r), "Cannot handle redirect results in processLoaderData"), Pe(r)) {
                let t = Se(e, f),
                  o = r.error;
                n && (o = Object.values(n)[0], n = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = o), i[f] = void 0, s || (s = !0, a = G(r.error) ? r.error.status : 500), r.headers && (u[f] = r.headers)
              } else De(r) ? (o.set(f, r.deferredData), i[f] = r.deferredData.data) : i[f] = r.data, null == r.statusCode || 200 === r.statusCode || s || (a = r.statusCode), r.headers && (u[f] = r.headers)
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
              if (Pe(s)) {
                let t = Se(e.matches, null == n ? void 0 : n.route.id);
                d && d[t.route.id] || (d = a({}, d, {
                  [t.route.id]: s.error
                })), e.fetchers.delete(r)
              } else if (Le(s)) c(!1, "Unhandled fetcher revalidation redirect");
            else if (De(s)) c(!1, "Unhandled fetcher deferred data");
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
            loaderData: u,
            errors: d
          }
        }

        function Re(e, t, r, n) {
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

        function xe(e) {
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

        function _e(e, t) {
          let {
            pathname: r,
            routeId: n,
            method: o,
            type: a
          } = void 0 === t ? {} : t, i = "Unknown Server Error", l = "Unknown @remix-run/router error";
          return 400 === e ? (i = "Bad Request", o && r && n ? l = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === a && (l = "defer() is not supported in actions")) : 403 === e ? (i = "Forbidden", l = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && n ? l = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')), new X(e || 500, i, new Error(l), !0)
        }

        function Ce(e) {
          for (let t = e.length - 1; t >= 0; t--) {
            let r = e[t];
            if (Le(r)) return r
          }
        }

        function ke(e) {
          return p(a({}, "string" == typeof e ? m(e) : e, {
            hash: ""
          }))
        }

        function De(e) {
          return e.type === y.deferred
        }

        function Pe(e) {
          return e.type === y.error
        }

        function Le(e) {
          return (e && e.type) === y.redirect
        }

        function Ae(e) {
          return Z.has(e.toLowerCase())
        }
        async function Ue(e, t, r, n, o, a) {
          for (let i = 0; i < r.length; i++) {
            let l = r[i],
              s = t[i];
            if (!s) continue;
            let u = e.find((e => e.route.id === s.route.id)),
              d = null != u && !me(u, s) && void 0 !== (a && a[s.route.id]);
            if (De(l) && (o || d)) {
              let e = n[i];
              c(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await Me(l, e, o).then((e => {
                e && (r[i] = e || r[i])
              }))
            }
          }
        }
        async function Me(e, t, r) {
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

        function je(e, t) {
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

        function Te(e, t) {
          let r = "string" == typeof t ? m(t).search : t.search;
          if (e[e.length - 1].route.index && Oe(r || "")) return e[e.length - 1];
          let n = N(e);
          return n[n.length - 1]
        }

        function Fe() {
          return Fe = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }, Fe.apply(this, arguments)
        }
        Symbol("deferred");
        const Ne = o.createContext(null),
          Be = o.createContext(null),
          Ie = o.createContext(null),
          $e = o.createContext(null),
          ze = o.createContext(null),
          qe = o.createContext({
            outlet: null,
            matches: [],
            isDataRoute: !1
          }),
          We = o.createContext(null);

        function He(e, t) {
          let {
            relative: r
          } = void 0 === t ? {} : t;
          Ke() || c(!1);
          let {
            basename: n,
            navigator: a
          } = o.useContext($e), {
            hash: i,
            pathname: l,
            search: s
          } = rt(e, {
            relative: r
          }), u = l;
          return "/" !== n && (u = "/" === l ? n : I([n, l])), a.createHref({
            pathname: u,
            search: s,
            hash: i
          })
        }

        function Ke() {
          return null != o.useContext(ze)
        }

        function Je() {
          return Ke() || c(!1), o.useContext(ze).location
        }

        function Ve() {
          return o.useContext(ze).navigationType
        }

        function Ye(e) {
          Ke() || c(!1);
          let {
            pathname: t
          } = Je();
          return o.useMemo((() => M(e, t)), [t, e])
        }

        function Xe(e) {
          o.useContext($e).static || o.useLayoutEffect(e)
        }

        function Ge() {
          let {
            isDataRoute: e
          } = o.useContext(qe);
          return e ? function() {
            let {
              router: e
            } = ft(ct.UseNavigateStable), t = pt(dt.UseNavigateStable), r = o.useRef(!1);
            return Xe((() => {
              r.current = !0
            })), o.useCallback((function(n, o) {
              void 0 === o && (o = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, Fe({
                fromRouteId: t
              }, o)))
            }), [e, t])
          }() : function() {
            Ke() || c(!1);
            let e = o.useContext(Ne),
              {
                basename: t,
                navigator: r
              } = o.useContext($e),
              {
                matches: n
              } = o.useContext(qe),
              {
                pathname: a
              } = Je(),
              i = JSON.stringify(N(n).map((e => e.pathnameBase))),
              l = o.useRef(!1);
            return Xe((() => {
              l.current = !0
            })), o.useCallback((function(n, o) {
              if (void 0 === o && (o = {}), !l.current) return;
              if ("number" == typeof n) return void r.go(n);
              let s = B(n, JSON.parse(i), a, "path" === o.relative);
              null == e && "/" !== t && (s.pathname = "/" === s.pathname ? t : I([t, s.pathname])), (o.replace ? r.replace : r.push)(s, o.state, o)
            }), [t, r, i, a, e])
          }()
        }
        const Qe = o.createContext(null);

        function Ze() {
          return o.useContext(Qe)
        }

        function et(e) {
          let t = o.useContext(qe).outlet;
          return t ? o.createElement(Qe.Provider, {
            value: e
          }, t) : t
        }

        function tt() {
          let {
            matches: e
          } = o.useContext(qe), t = e[e.length - 1];
          return t ? t.params : {}
        }

        function rt(e, t) {
          let {
            relative: r
          } = void 0 === t ? {} : t, {
            matches: n
          } = o.useContext(qe), {
            pathname: a
          } = Je(), i = JSON.stringify(N(n).map((e => e.pathnameBase)));
          return o.useMemo((() => B(e, JSON.parse(i), a, "path" === r)), [e, i, a, r])
        }

        function nt(e, t) {
          return ot(e, t)
        }

        function ot(e, t, r) {
          Ke() || c(!1);
          let {
            navigator: a
          } = o.useContext($e), {
            matches: i
          } = o.useContext(qe), l = i[i.length - 1], s = l ? l.params : {}, u = (l && l.pathname, l ? l.pathnameBase : "/");
          l && l.route;
          let d, f = Je();
          if (t) {
            var h;
            let e = "string" == typeof t ? m(t) : t;
            "/" === u || (null == (h = e.pathname) ? void 0 : h.startsWith(u)) || c(!1), d = e
          } else d = f;
          let p = d.pathname || "/",
            v = w(e, {
              pathname: "/" === u ? p : p.slice(u.length) || "/"
            }),
            y = ut(v && v.map((e => Object.assign({}, e, {
              params: Object.assign({}, s, e.params),
              pathname: I([u, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
              pathnameBase: "/" === e.pathnameBase ? u : I([u, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
            }))), i, r);
          return t && y ? o.createElement(ze.Provider, {
            value: {
              location: Fe({
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

        function at() {
          let e = Rt(),
            t = G(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
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
        const it = o.createElement(at, null);
        class lt extends o.Component {
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
            return this.state.error ? o.createElement(qe.Provider, {
              value: this.props.routeContext
            }, o.createElement(We.Provider, {
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
          } = e, a = o.useContext(Ne);
          return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), o.createElement(qe.Provider, {
            value: t
          }, n)
        }

        function ut(e, t, r) {
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
            r && (u = n.route.errorElement || it);
            let c = t.concat(i.slice(0, a + 1)),
              d = () => {
                let t;
                return t = s ? u : n.route.Component ? o.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, o.createElement(st, {
                  match: n,
                  routeContext: {
                    outlet: e,
                    matches: c,
                    isDataRoute: null != r
                  },
                  children: t
                })
              };
            return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === a) ? o.createElement(lt, {
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
        var ct, dt;

        function ft(e) {
          let t = o.useContext(Ne);
          return t || c(!1), t
        }

        function ht(e) {
          let t = o.useContext(Be);
          return t || c(!1), t
        }

        function pt(e) {
          let t = function(e) {
              let t = o.useContext(qe);
              return t || c(!1), t
            }(),
            r = t.matches[t.matches.length - 1];
          return r.route.id || c(!1), r.route.id
        }

        function mt() {
          return pt(dt.UseRouteId)
        }

        function vt() {
          return ht(dt.UseNavigation).navigation
        }

        function yt() {
          let e = ft(ct.UseRevalidator),
            t = ht(dt.UseRevalidator);
          return {
            revalidate: e.router.revalidate,
            state: t.revalidation
          }
        }

        function gt() {
          let {
            matches: e,
            loaderData: t
          } = ht(dt.UseMatches);
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

        function bt() {
          let e = ht(dt.UseLoaderData),
            t = pt(dt.UseLoaderData);
          if (!e.errors || null == e.errors[t]) return e.loaderData[t];
          console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
        }

        function wt(e) {
          return ht(dt.UseRouteLoaderData).loaderData[e]
        }

        function Et() {
          let e = ht(dt.UseActionData);
          return o.useContext(qe) || c(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
        }

        function Rt() {
          var e;
          let t = o.useContext(We),
            r = ht(dt.UseRouteError),
            n = pt(dt.UseRouteError);
          return t || (null == (e = r.errors) ? void 0 : e[n])
        }

        function St() {
          let e = o.useContext(Ie);
          return null == e ? void 0 : e._data
        }

        function xt() {
          let e = o.useContext(Ie);
          return null == e ? void 0 : e._error
        }! function(e) {
          e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate"
        }(ct || (ct = {})),
        function(e) {
          e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId"
        }(dt || (dt = {}));
        let _t = 0;

        function Ct(e) {
          let {
            router: t
          } = ft(ct.UseBlocker), r = ht(dt.UseBlocker), [n] = o.useState((() => String(++_t))), a = o.useCallback((t => "function" == typeof e ? !!e(t) : !!e), [e]), i = t.getBlocker(n, a);
          return o.useEffect((() => () => t.deleteBlocker(n)), [t, n]), r.blockers.get(n) || i
        }

        function kt(e) {
          let {
            fallbackElement: t,
            router: r
          } = e, [n, a] = o.useState(r.state);
          o.useLayoutEffect((() => r.subscribe(a)), [r, a]);
          let i = o.useMemo((() => ({
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
            s = o.useMemo((() => ({
              router: r,
              navigator: i,
              static: !1,
              basename: l
            })), [r, i, l]);
          return o.createElement(o.Fragment, null, o.createElement(Ne.Provider, {
            value: s
          }, o.createElement(Be.Provider, {
            value: n
          }, o.createElement(Mt, {
            basename: r.basename,
            location: r.state.location,
            navigationType: r.state.historyAction,
            navigator: i
          }, r.state.initialized ? o.createElement(Dt, {
            routes: r.routes,
            state: n
          }) : t))), null)
        }

        function Dt(e) {
          let {
            routes: t,
            state: r
          } = e;
          return ot(t, void 0, r)
        }

        function Pt(e) {
          let {
            basename: t,
            children: r,
            initialEntries: n,
            initialIndex: a
          } = e, i = o.useRef();
          null == i.current && (i.current = l({
            initialEntries: n,
            initialIndex: a,
            v5Compat: !0
          }));
          let s = i.current,
            [u, c] = o.useState({
              action: s.action,
              location: s.location
            });
          return o.useLayoutEffect((() => s.listen(c)), [s]), o.createElement(Mt, {
            basename: t,
            children: r,
            location: u.location,
            navigationType: u.action,
            navigator: s
          })
        }

        function Lt(e) {
          let {
            to: t,
            replace: r,
            state: n,
            relative: a
          } = e;
          Ke() || c(!1);
          let {
            matches: i
          } = o.useContext(qe), {
            pathname: l
          } = Je(), s = Ge(), u = B(t, N(i).map((e => e.pathnameBase)), l, "path" === a), d = JSON.stringify(u);
          return o.useEffect((() => s(JSON.parse(d), {
            replace: r,
            state: n,
            relative: a
          })), [s, d, a, r, n]), null
        }

        function At(e) {
          return et(e.context)
        }

        function Ut(e) {
          c(!1)
        }

        function Mt(e) {
          let {
            basename: t = "/",
            children: r = null,
            location: a,
            navigationType: i = n.Pop,
            navigator: l,
            static: s = !1
          } = e;
          Ke() && c(!1);
          let u = t.replace(/^\/*/, "/"),
            d = o.useMemo((() => ({
              basename: u,
              navigator: l,
              static: s
            })), [u, l, s]);
          "string" == typeof a && (a = m(a));
          let {
            pathname: f = "/",
            search: h = "",
            hash: p = "",
            state: v = null,
            key: y = "default"
          } = a, g = o.useMemo((() => {
            let e = j(f, u);
            return null == e ? null : {
              location: {
                pathname: e,
                search: h,
                hash: p,
                state: v,
                key: y
              },
              navigationType: i
            }
          }), [u, f, h, p, v, y, i]);
          return null == g ? null : o.createElement($e.Provider, {
            value: d
          }, o.createElement(ze.Provider, {
            children: r,
            value: g
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
          return o.createElement(Nt, {
            resolve: n,
            errorElement: r
          }, o.createElement(Bt, null, t))
        }
        var Tt;
        ! function(e) {
          e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
        }(Tt || (Tt = {}));
        const Ft = new Promise((() => {}));
        class Nt extends o.Component {
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
            } = this.props, n = null, a = Tt.pending;
            if (r instanceof Promise)
              if (this.state.error) {
                a = Tt.error;
                let e = this.state.error;
                n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                  get: () => !0
                }), Object.defineProperty(n, "_error", {
                  get: () => e
                })
              } else r._tracked ? (n = r, a = void 0 !== n._error ? Tt.error : void 0 !== n._data ? Tt.success : Tt.pending) : (a = Tt.pending, Object.defineProperty(r, "_tracked", {
                get: () => !0
              }), n = r.then((e => Object.defineProperty(r, "_data", {
                get: () => e
              })), (e => Object.defineProperty(r, "_error", {
                get: () => e
              }))));
            else a = Tt.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
              get: () => !0
            }), Object.defineProperty(n, "_data", {
              get: () => r
            });
            if (a === Tt.error && n._error instanceof H) throw Ft;
            if (a === Tt.error && !t) throw n._error;
            if (a === Tt.error) return o.createElement(Ie.Provider, {
              value: n,
              children: t
            });
            if (a === Tt.success) return o.createElement(Ie.Provider, {
              value: n,
              children: e
            });
            throw n
          }
        }

        function Bt(e) {
          let {
            children: t
          } = e, r = St(), n = "function" == typeof t ? t(r) : t;
          return o.createElement(o.Fragment, null, n)
        }

        function It(e, t) {
          void 0 === t && (t = []);
          let r = [];
          return o.Children.forEach(e, ((e, n) => {
            if (!o.isValidElement(e)) return;
            let a = [...t, n];
            if (e.type === o.Fragment) return void r.push.apply(r, It(e.props.children, a));
            e.type !== Ut && c(!1), e.props.index && e.props.children && c(!1);
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
            e.props.children && (i.children = It(e.props.children, a)), r.push(i)
          })), r
        }

        function $t(e) {
          return ut(e)
        }

        function zt(e) {
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
          return de({
            basename: null == t ? void 0 : t.basename,
            future: Fe({}, null == t ? void 0 : t.future, {
              v7_prependBasename: !0
            }),
            history: l({
              initialEntries: null == t ? void 0 : t.initialEntries,
              initialIndex: null == t ? void 0 : t.initialIndex
            }),
            hydrationData: null == t ? void 0 : t.hydrationData,
            routes: e,
            mapRouteProperties: zt
          }).initialize()
        }

        function Wt() {
          return Wt = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }, Wt.apply(this, arguments)
        }

        function Ht(e, t) {
          if (null == e) return {};
          var r, n, o = {},
            a = Object.keys(e);
          for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o
        }
        const Kt = "get",
          Jt = "application/x-www-form-urlencoded";

        function Vt(e) {
          return null != e && "string" == typeof e.tagName
        }

        function Yt(e) {
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
            future: Wt({}, null == t ? void 0 : t.future, {
              v7_prependBasename: !0
            }),
            history: s({
              window: null == t ? void 0 : t.window
            }),
            hydrationData: (null == t ? void 0 : t.hydrationData) || tr(),
            routes: e,
            mapRouteProperties: zt
          }).initialize()
        }

        function er(e, t) {
          return de({
            basename: null == t ? void 0 : t.basename,
            future: Wt({}, null == t ? void 0 : t.future, {
              v7_prependBasename: !0
            }),
            history: u({
              window: null == t ? void 0 : t.window
            }),
            hydrationData: (null == t ? void 0 : t.hydrationData) || tr(),
            routes: e,
            mapRouteProperties: zt
          }).initialize()
        }

        function tr() {
          var e;
          let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
          return t && t.errors && (t = Wt({}, t, {
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
          } = e, a = o.useRef();
          null == a.current && (a.current = s({
            window: n,
            v5Compat: !0
          }));
          let i = a.current,
            [l, u] = o.useState({
              action: i.action,
              location: i.location
            });
          return o.useLayoutEffect((() => i.listen(u)), [i]), o.createElement(Mt, {
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
            window: n
          } = e, a = o.useRef();
          null == a.current && (a.current = u({
            window: n,
            v5Compat: !0
          }));
          let i = a.current,
            [l, s] = o.useState({
              action: i.action,
              location: i.location
            });
          return o.useLayoutEffect((() => i.listen(s)), [i]), o.createElement(Mt, {
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
        const ir = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
          lr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
          sr = o.forwardRef((function(e, t) {
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
              f = Ht(e, Xt),
              {
                basename: h
              } = o.useContext($e),
              p = !1;
            if ("string" == typeof c && lr.test(c) && (r = c, ir)) try {
              let e = new URL(window.location.href),
                t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
                r = j(t.pathname, h);
              t.origin === e.origin && null != r ? c = r + t.search + t.hash : p = !0
            } catch (e) {}
            let m = He(c, {
                relative: a
              }),
              v = yr(c, {
                replace: l,
                state: s,
                target: u,
                preventScrollReset: d,
                relative: a
              });
            return o.createElement("a", Wt({}, f, {
              href: r || m,
              onClick: p || i ? n : function(e) {
                n && n(e), e.defaultPrevented || v(e)
              },
              ref: t,
              target: u
            }))
          })),
          ur = o.forwardRef((function(e, t) {
            let {
              "aria-current": r = "page",
              caseSensitive: n = !1,
              className: a = "",
              end: i = !1,
              style: l,
              to: s,
              children: u
            } = e, c = Ht(e, Gt), d = rt(s, {
              relative: c.relative
            }), f = Je(), h = o.useContext(Be), {
              navigator: p
            } = o.useContext($e), m = p.encodeLocation ? p.encodeLocation(d).pathname : d.pathname, v = f.pathname, y = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
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
            return o.createElement(sr, Wt({}, c, {
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
          cr = o.forwardRef(((e, t) => o.createElement(dr, Wt({}, e, {
            ref: t
          })))),
          dr = o.forwardRef(((e, t) => {
            let {
              reloadDocument: r,
              replace: n,
              method: a = Kt,
              action: i,
              onSubmit: l,
              fetcherKey: s,
              routeId: u,
              relative: c,
              preventScrollReset: d
            } = e, f = Ht(e, Qt), h = wr(s, u), p = "get" === a.toLowerCase() ? "get" : "post", m = Er(i, {
              relative: c
            });
            return o.createElement("form", Wt({
              ref: t,
              method: p,
              action: m,
              onSubmit: r ? l : e => {
                if (l && l(e), e.defaultPrevented) return;
                e.preventDefault();
                let t = e.nativeEvent.submitter,
                  r = (null == t ? void 0 : t.getAttribute("formmethod")) || a;
                h(t || e.currentTarget, {
                  method: r,
                  replace: n,
                  relative: c,
                  preventScrollReset: d
                })
              }
            }, f))
          }));

        function fr(e) {
          let {
            getKey: t,
            storageKey: r
          } = e;
          return kr({
            getKey: t,
            storageKey: r
          }), null
        }
        var hr, pr;

        function mr(e) {
          let t = o.useContext(Ne);
          return t || c(!1), t
        }

        function vr(e) {
          let t = o.useContext(Be);
          return t || c(!1), t
        }

        function yr(e, t) {
          let {
            target: r,
            replace: n,
            state: a,
            preventScrollReset: i,
            relative: l
          } = void 0 === t ? {} : t, s = Ge(), u = Je(), c = rt(e, {
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

        function gr(e) {
          let t = o.useRef(Yt(e)),
            r = o.useRef(!1),
            n = Je(),
            a = o.useMemo((() => function(e, t) {
              let r = Yt(e);
              if (t)
                for (let e of t.keys()) r.has(e) || t.getAll(e).forEach((t => {
                  r.append(e, t)
                }));
              return r
            }(n.search, r.current ? null : t.current)), [n.search]),
            i = Ge(),
            l = o.useCallback(((e, t) => {
              const n = Yt("function" == typeof e ? e(a) : e);
              r.current = !0, i("?" + n, t)
            }), [i, a]);
          return [a, l]
        }

        function br() {
          return wr()
        }

        function wr(e, t) {
          let {
            router: r
          } = mr(hr.UseSubmitImpl), {
            basename: n
          } = o.useContext($e), a = mt();
          return o.useCallback((function(o, i) {
            if (void 0 === i && (i = {}), "undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
            let {
              action: l,
              method: s,
              encType: u,
              formData: d
            } = function(e, t, r) {
              let n, o, a, i = null;
              if (Vt(l = e) && "form" === l.tagName.toLowerCase()) {
                let l = t.submissionTrigger;
                if (t.action) i = t.action;
                else {
                  let t = e.getAttribute("action");
                  i = t ? j(t, r) : null
                }
                n = t.method || e.getAttribute("method") || Kt, o = t.encType || e.getAttribute("enctype") || Jt, a = new FormData(e), l && l.name && a.append(l.name, l.value)
              } else if (function(e) {
                  return Vt(e) && "button" === e.tagName.toLowerCase()
                }(e) || function(e) {
                  return Vt(e) && "input" === e.tagName.toLowerCase()
                }(e) && ("submit" === e.type || "image" === e.type)) {
                let l = e.form;
                if (null == l) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                if (t.action) i = t.action;
                else {
                  let t = e.getAttribute("formaction") || l.getAttribute("action");
                  i = t ? j(t, r) : null
                }
                n = t.method || e.getAttribute("formmethod") || l.getAttribute("method") || Kt, o = t.encType || e.getAttribute("formenctype") || l.getAttribute("enctype") || Jt, a = new FormData(l), e.name && a.append(e.name, e.value)
              } else {
                if (Vt(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                if (n = t.method || Kt, i = t.action || null, o = t.encType || Jt, e instanceof FormData) a = e;
                else if (a = new FormData, e instanceof URLSearchParams)
                  for (let [t, r] of e) a.append(t, r);
                else if (null != e)
                  for (let t of Object.keys(e)) a.append(t, e[t])
              }
              var l;
              return {
                action: i,
                method: n.toLowerCase(),
                encType: o,
                formData: a
              }
            }(o, i, n), f = {
              preventScrollReset: i.preventScrollReset,
              formData: d,
              formMethod: s,
              formEncType: u
            };
            e ? (null == t && c(!1), r.fetch(e, t, l, f)) : r.navigate(l, Wt({}, f, {
              replace: i.replace,
              fromRouteId: a
            }))
          }), [r, n, e, t, a])
        }

        function Er(e, t) {
          let {
            relative: r
          } = void 0 === t ? {} : t, {
            basename: n
          } = o.useContext($e), a = o.useContext(qe);
          a || c(!1);
          let [i] = a.matches.slice(-1), l = Wt({}, rt(e || ".", {
            relative: r
          })), s = Je();
          if (null == e && (l.search = s.search, l.hash = s.hash, i.route.index)) {
            let e = new URLSearchParams(l.search);
            e.delete("index"), l.search = e.toString() ? "?" + e.toString() : ""
          }
          return e && "." !== e || !i.route.index || (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (l.pathname = "/" === l.pathname ? n : I([n, l.pathname])), p(l)
        }(function(e) {
          e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
        })(hr || (hr = {})),
        function(e) {
          e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
        }(pr || (pr = {}));
        let Rr = 0;

        function Sr() {
          var e;
          let {
            router: t
          } = mr(hr.UseFetcher), r = o.useContext(qe);
          r || c(!1);
          let n = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
          null == n && c(!1);
          let [a] = o.useState((() => String(++Rr))), [i] = o.useState((() => (n || c(!1), function(e, t) {
            return o.forwardRef(((r, n) => o.createElement(dr, Wt({}, r, {
              ref: n,
              fetcherKey: e,
              routeId: t
            }))))
          }(a, n)))), [l] = o.useState((() => e => {
            t || c(!1), n || c(!1), t.fetch(a, n, e)
          })), s = wr(a, n), u = t.getFetcher(a), d = o.useMemo((() => Wt({
            Form: i,
            submit: s,
            load: l
          }, u)), [u, i, s, l]);
          return o.useEffect((() => () => {
            t ? t.deleteFetcher(a) : console.warn("No router available to clean up from useFetcher()")
          }), [t, a]), d
        }

        function xr() {
          return [...vr(pr.UseFetchers).fetchers.values()]
        }
        const _r = "react-router-scroll-positions";
        let Cr = {};

        function kr(e) {
          let {
            getKey: t,
            storageKey: r
          } = void 0 === e ? {} : e, {
            router: n
          } = mr(hr.UseScrollRestoration), {
            restoreScrollPosition: a,
            preventScrollReset: i
          } = vr(pr.UseScrollRestoration), l = Je(), s = gt(), u = vt();
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
              if ("idle" === u.state) {
                let e = (t ? t(l, s) : null) || l.key;
                Cr[e] = window.scrollY
              }
              sessionStorage.setItem(r || _r, JSON.stringify(Cr)), window.history.scrollRestoration = "auto"
            }), [r, t, u.state, l, s])), "undefined" != typeof document && (o.useLayoutEffect((() => {
              try {
                let e = sessionStorage.getItem(r || _r);
                e && (Cr = JSON.parse(e))
              } catch (e) {}
            }), [r]), o.useLayoutEffect((() => {
              let e = null == n ? void 0 : n.enableScrollRestoration(Cr, (() => window.scrollY), t);
              return () => e && e()
            }), [n, t]), o.useLayoutEffect((() => {
              if (!1 !== a)
                if ("number" != typeof a) {
                  if (l.hash) {
                    let e = document.getElementById(l.hash.slice(1));
                    if (e) return void e.scrollIntoView()
                  }!0 !== i && window.scrollTo(0, 0)
                } else window.scrollTo(0, a)
            }), [l, a, i]))
        }

        function Dr(e, t) {
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

        function Pr(e) {
          let {
            when: t,
            message: r
          } = e, n = Ct(t);
          o.useEffect((() => {
            "blocked" !== n.state || t || n.reset()
          }), [n, t]), o.useEffect((() => {
            "blocked" === n.state && (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset())
          }), [n, r])
        }
      },
      8401: (e, t) => {
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator,
          p = {
            isMounted: function() {
              return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
          },
          m = Object.assign,
          v = {};

        function y(e, t, r) {
          this.props = e, this.context = t, this.refs = v, this.updater = r || p
        }

        function g() {}

        function b(e, t, r) {
          this.props = e, this.context = t, this.refs = v, this.updater = r || p
        }
        y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, e, t, "setState")
        }, y.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, g.prototype = y.prototype;
        var w = b.prototype = new g;
        w.constructor = b, m(w, y.prototype), w.isPureReactComponent = !0;
        var E = Array.isArray,
          R = Object.prototype.hasOwnProperty,
          S = {
            current: null
          },
          x = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
          };

        function _(e, t, n) {
          var o, a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) R.call(t, o) && !x.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = n;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u
          }
          if (e && e.defaultProps)
            for (o in s = e.defaultProps) void 0 === a[o] && (a[o] = s[o]);
          return {
            $$typeof: r,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: S.current
          }
        }

        function C(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r
        }
        var k = /\/+/g;

        function D(e, t) {
          return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
              "=": "=0",
              ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, (function(e) {
              return t[e]
            }))
          }("" + e.key) : t.toString(36)
        }

        function P(e, t, o, a, i) {
          var l = typeof e;
          "undefined" !== l && "boolean" !== l || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else switch (l) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case n:
                  s = !0
              }
          }
          if (s) return i = i(s = e), e = "" === a ? "." + D(s, 0) : a, E(i) ? (o = "", null != e && (o = e.replace(k, "$&/") + "/"), P(i, t, o, "", (function(e) {
            return e
          }))) : null != i && (C(i) && (i = function(e, t) {
            return {
              $$typeof: r,
              type: e.type,
              key: t,
              ref: e.ref,
              props: e.props,
              _owner: e._owner
            }
          }(i, o + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(k, "$&/") + "/") + e)), t.push(i)), 1;
          if (s = 0, a = "" === a ? "." : a + ":", E(e))
            for (var u = 0; u < e.length; u++) {
              var c = a + D(l = e[u], u);
              s += P(l, t, o, c, i)
            } else if (c = function(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof(e = h && e[h] || e["@@iterator"]) ? e : null
              }(e), "function" == typeof c)
              for (e = c.call(e), u = 0; !(l = e.next()).done;) s += P(l = l.value, t, o, c = a + D(l, u++), i);
            else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
          return s
        }

        function L(e, t, r) {
          if (null == e) return e;
          var n = [],
            o = 0;
          return P(e, n, "", "", (function(e) {
            return t.call(r, e, o++)
          })), n
        }

        function A(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function(t) {
              0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
            }), (function(t) {
              0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
            })), -1 === e._status && (e._status = 0, e._result = t)
          }
          if (1 === e._status) return e._result.default;
          throw e._result
        }
        var U = {
            current: null
          },
          M = {
            transition: null
          },
          O = {
            ReactCurrentDispatcher: U,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: S
          };
        t.Children = {
          map: L,
          forEach: function(e, t, r) {
            L(e, (function() {
              t.apply(this, arguments)
            }), r)
          },
          count: function(e) {
            var t = 0;
            return L(e, (function() {
              t++
            })), t
          },
          toArray: function(e) {
            return L(e, (function(e) {
              return e
            })) || []
          },
          only: function(e) {
            if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
          }
        }, t.Component = y, t.Fragment = o, t.Profiler = i, t.PureComponent = b, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.cloneElement = function(e, t, n) {
          if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
          var o = m({}, e.props),
            a = e.key,
            i = e.ref,
            l = e._owner;
          if (null != t) {
            if (void 0 !== t.ref && (i = t.ref, l = S.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for (u in t) R.call(t, u) && !x.hasOwnProperty(u) && (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
          }
          var u = arguments.length - 2;
          if (1 === u) o.children = n;
          else if (1 < u) {
            s = Array(u);
            for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s
          }
          return {
            $$typeof: r,
            type: e.type,
            key: a,
            ref: i,
            props: o,
            _owner: l
          }
        }, t.createContext = function(e) {
          return (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
          }).Provider = {
            $$typeof: l,
            _context: e
          }, e.Consumer = e
        }, t.createElement = _, t.createFactory = function(e) {
          var t = _.bind(null, e);
          return t.type = e, t
        }, t.createRef = function() {
          return {
            current: null
          }
        }, t.forwardRef = function(e) {
          return {
            $$typeof: u,
            render: e
          }
        }, t.isValidElement = C, t.lazy = function(e) {
          return {
            $$typeof: f,
            _payload: {
              _status: -1,
              _result: e
            },
            _init: A
          }
        }, t.memo = function(e, t) {
          return {
            $$typeof: d,
            type: e,
            compare: void 0 === t ? null : t
          }
        }, t.startTransition = function(e) {
          var t = M.transition;
          M.transition = {};
          try {
            e()
          } finally {
            M.transition = t
          }
        }, t.unstable_act = function() {
          throw Error("act(...) is not supported in production builds of React.")
        }, t.useCallback = function(e, t) {
          return U.current.useCallback(e, t)
        }, t.useContext = function(e) {
          return U.current.useContext(e)
        }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
          return U.current.useDeferredValue(e)
        }, t.useEffect = function(e, t) {
          return U.current.useEffect(e, t)
        }, t.useId = function() {
          return U.current.useId()
        }, t.useImperativeHandle = function(e, t, r) {
          return U.current.useImperativeHandle(e, t, r)
        }, t.useInsertionEffect = function(e, t) {
          return U.current.useInsertionEffect(e, t)
        }, t.useLayoutEffect = function(e, t) {
          return U.current.useLayoutEffect(e, t)
        }, t.useMemo = function(e, t) {
          return U.current.useMemo(e, t)
        }, t.useReducer = function(e, t, r) {
          return U.current.useReducer(e, t, r)
        }, t.useRef = function(e) {
          return U.current.useRef(e)
        }, t.useState = function(e) {
          return U.current.useState(e)
        }, t.useSyncExternalStore = function(e, t, r) {
          return U.current.useSyncExternalStore(e, t, r)
        }, t.useTransition = function() {
          return U.current.useTransition()
        }, t.version = "18.2.0"
      },
      8252: (e, t, r) => {
        e.exports = r(8401)
      },
      4818: (e, t, r) => {
        var n = {
            "./index": () => Promise.all([r.e(916), r.e(424), r.e(248)]).then((() => () => r(1248))),
            "./bootstrap": () => Promise.all([r.e(916), r.e(424), r.e(8), r.e(831)]).then((() => () => r(5831))),
            "./tina": () => Promise.all([r.e(916), r.e(424), r.e(753), r.e(599)]).then((() => () => r(5599))),
            "./site-routes/RedDeadRedemption": () => Promise.all([r.e(916), r.e(424), r.e(753), r.e(8), r.e(62)]).then((() => () => r(5062)))
          },
          o = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then((() => {
            throw new Error('Module "' + e + '" does not exist in container.')
          })), r.R = void 0, t),
          a = (e, t) => {
            if (r.S) {
              var n = "default",
                o = r.S[n];
              if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return r.S[n] = e, r.I(n, t)
            }
          };
        r.d(t, {
          get: () => o,
          init: () => a
        })
      },
      9525: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof components) return e();
          r.l(window.mfe.path("@rockstargames/components"), (r => {
            if ("undefined" != typeof components) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "components")
        })).then((() => components))
      },
      5171: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof graph_client) return e();
          r.l(window.mfe.path("@rockstargames/graph-client"), (r => {
            if ("undefined" != typeof graph_client) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "graph_client")
        })).then((() => graph_client))
      },
      8413: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof intl) return e();
          r.l(window.mfe.path("@rockstargames/intl"), (r => {
            if ("undefined" != typeof intl) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "intl")
        })).then((() => intl))
      },
      8294: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof modules_core_hero) return e();
          r.l(window.mfe.path("@rockstargames/modules-core-hero"), (r => {
            if ("undefined" != typeof modules_core_hero) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "modules_core_hero")
        })).then((() => modules_core_hero))
      },
      4551: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof modules_core_highlights) return e();
          r.l(window.mfe.path("@rockstargames/modules-core-highlights"), (r => {
            if ("undefined" != typeof modules_core_highlights) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "modules_core_highlights")
        })).then((() => modules_core_highlights))
      },
      7426: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof modules_core_sc_user) return e();
          r.l(window.mfe.path("@rockstargames/modules-core-sc-user"), (r => {
            if ("undefined" != typeof modules_core_sc_user) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "modules_core_sc_user")
        })).then((() => modules_core_sc_user))
      },
      6993: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof modules_core_videoplayer) return e();
          r.l(window.mfe.path("@rockstargames/modules-core-videoplayer"), (r => {
            if ("undefined" != typeof modules_core_videoplayer) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "modules_core_videoplayer")
        })).then((() => modules_core_videoplayer))
      },
      692: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof polyfills) return e();
          r.l(window.mfe.path("@rockstargames/polyfills"), (r => {
            if ("undefined" != typeof polyfills) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "polyfills")
        })).then((() => polyfills))
      },
      1489: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof tina) return e();
          r.l(window.mfe.path("@rockstargames/tina"), (r => {
            if ("undefined" != typeof tina) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "tina")
        })).then((() => tina))
      },
      8810: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof utils) return e();
          r.l(window.mfe.path("@rockstargames/utils"), (r => {
            if ("undefined" != typeof utils) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "utils")
        })).then((() => utils))
      }
    },
    a = {};

  function i(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = a[e] = {
      exports: {}
    };
    return o[e](r, r.exports, i), r.exports
  }
  i.m = o, i.c = a, i.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return i.d(t, {
      a: t
    }), t
  }, i.d = (e, t) => {
    for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
      enumerable: !0,
      get: t[r]
    })
  }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((t, r) => (i.f[r](e, t), t)), [])), i.u = e => "js/" + {
    8: "bfad8148f69f172b9189",
    62: "6b201c982c8155c09fae",
    248: "bcbee34e27f194eaa1f7",
    424: "167bd19f241cd7309bab",
    599: "c82bbd4c1f8e3ff5c67b",
    753: "3f9dddf8487fa879ca20",
    831: "838c36affe7ff83dcdf3",
    916: "501a4a1822567beea56b"
  } [e] + ".js", i.miniCssF = e => "css/" + {
    62: "966d187823108e8e42a3",
    424: "ad8b4060b9599b6b8301",
    831: "799ba9704ba2a540cd1f"
  } [e] + ".css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "@rockstargames/sites-legacy:", i.l = (r, n, o, a) => {
    if (e[r]) e[r].push(n);
    else {
      var l, s;
      if (void 0 !== o)
        for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
          var d = u[c];
          if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + o) {
            l = d;
            break
          }
        }
      l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.setAttribute("data-webpack", t + o), l.src = r), e[r] = [n];
      var f = (t, n) => {
          l.onerror = l.onload = null, clearTimeout(h);
          var o = e[r];
          if (delete e[r], l.parentNode && l.parentNode.removeChild(l), o && o.forEach((e => e(n))), t) return t(n)
        },
        h = setTimeout(f.bind(null, void 0, {
          type: "timeout",
          target: l
        }), 12e4);
      l.onerror = f.bind(null, l.onerror), l.onload = f.bind(null, l.onload), s && document.head.appendChild(l)
    }
  }, i.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, r = {
    8: [8008],
    424: [1570, 2286, 4224, 4859, 6573, 6711, 8976, 9542, 9929],
    753: [2909, 2026, 1719, 559, 3616, 3374],
    831: [1458, 1968, 7842]
  }, n = {
    559: ["default", "./helpers/uploads", 1489],
    1458: ["default", "./providers", 7426],
    1570: ["default", "./index", 8413],
    1719: ["default", "./tina", 6993],
    1968: ["default", "./providers", 8810],
    2026: ["default", "./tina", 4551],
    2286: ["default", "./index", 8294],
    2909: ["default", "./tina", 8294],
    3374: ["default", "./ui", 1489],
    3616: ["default", "./properties", 1489],
    4224: ["default", "./index", 6993],
    4859: ["default", "./index", 5171],
    6573: ["default", "./index", 4551],
    6711: ["default", "./index", 7426],
    7842: ["default", "./browser", 692],
    8008: ["default", "./providers", 9525],
    8976: ["default", "./index", 9525],
    9542: ["default", "./index", 1489],
    9929: ["default", "./index", 8810]
  }, i.f.remotes = (e, t) => {
    i.o(r, e) && r[e].forEach((e => {
      var r = i.R;
      r || (r = []);
      var o = n[e];
      if (!(r.indexOf(o) >= 0)) {
        if (r.push(o), o.p) return t.push(o.p);
        var a = t => {
            t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), i.m[e] = () => {
              throw t
            }, o.p = 0
          },
          l = (e, r, n, i, l, s) => {
            try {
              var u = e(r, n);
              if (!u || !u.then) return l(u, i, s);
              var c = u.then((e => l(e, i)), a);
              if (!s) return c;
              t.push(o.p = c)
            } catch (e) {
              a(e)
            }
          },
          s = (e, t, n) => l(t.get, o[1], r, 0, u, n),
          u = t => {
            o.p = 1, i.m[e] = e => {
              e.exports = t()
            }
          };
        l(i, o[2], 0, 0, ((e, t, r) => e ? l(i.I, o[0], 0, e, s, r) : a()), 1)
      }
    }))
  }, (() => {
    i.S = {};
    var e = {},
      t = {};
    i.I = (r, n) => {
      n || (n = []);
      var o = t[r];
      if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
        if (n.push(o), e[r]) return e[r];
        i.o(i.S, r) || (i.S[r] = {});
        var a = i.S[r],
          l = "@rockstargames/sites-legacy",
          s = (e, t, r, n) => {
            var o = a[e] = a[e] || {},
              i = o[t];
            (!i || !i.loaded && (!n != !i.eager ? n : l > i.from)) && (o[t] = {
              get: r,
              from: l,
              eager: !!n
            })
          },
          u = e => {
            var t = e => {
              return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
              var t
            };
            try {
              var o = i(e);
              if (!o) return;
              var a = e => e && e.init && e.init(i.S[r], n);
              if (o.then) return c.push(o.then(a, t));
              var l = a(o);
              if (l && l.then) return c.push(l.catch(t))
            } catch (e) {
              t(e)
            }
          },
          c = [];
        return "default" === r && (s("react-router-dom", "6.11.2", (() => () => i(4061)), 1), s("react", "18.2.0", (() => () => i(8252)), 1), u(9525), u(5171), u(8413), u(8294), u(4551), u(7426), u(6993), u(1489), u(8810), u(692)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
      }
    }
  })(), (() => {
    var e;
    i.g.importScripts && (e = i.g.location + "");
    var t = i.g.document;
    if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
      var r = t.getElementsByTagName("script");
      if (r.length)
        for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
  })(), (() => {
    var e = e => {
        var t = e => e.split(".").map((e => +e == e ? +e : e)),
          r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
          n = r[1] ? t(r[1]) : [];
        return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
      },
      t = (r, n) => {
        if (0 in r) {
          n = e(n);
          var o = r[0],
            a = o < 0;
          a && (o = -o - 1);
          for (var i = 0, l = 1, s = !0;; l++, i++) {
            var u, c, d = l < r.length ? (typeof r[l])[0] : "";
            if (i >= n.length || "o" == (c = (typeof(u = n[i]))[0])) return !s || ("u" == d ? l > o && !a : "" == d != a);
            if ("u" == c) {
              if (!s || "u" != d) return !1
            } else if (s)
              if (d == c)
                if (l <= o) {
                  if (u != r[l]) return !1
                } else {
                  if (a ? u > r[l] : u < r[l]) return !1;
                  u != r[l] && (s = !1)
                }
            else if ("s" != d && "n" != d) {
              if (a || l <= o) return !1;
              s = !1, l--
            } else {
              if (l <= o || c < d != a) return !1;
              s = !1
            } else "s" != d && "n" != d && (s = !1, l--)
          }
        }
        var f = [],
          h = f.pop.bind(f);
        for (i = 1; i < r.length; i++) {
          var p = r[i];
          f.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? t(p, n) : !h())
        }
        return !!h()
      },
      r = (r, n, o) => {
        var a = r[n];
        return (n = Object.keys(a).reduce(((r, n) => !t(o, n) || r && !((t, r) => {
          t = e(t), r = e(r);
          for (var n = 0;;) {
            if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
            var o = t[n],
              a = (typeof o)[0];
            if (n >= r.length) return "u" == a;
            var i = r[n],
              l = (typeof i)[0];
            if (a != l) return "o" == a && "n" == l || "s" == l || "u" == a;
            if ("o" != a && "u" != a && o != i) return o < i;
            n++
          }
        })(r, n) ? r : n), 0)) && a[n]
      },
      n = (e => function(t, r, n, o) {
        var a = i.I(t);
        return a && a.then ? a.then(e.bind(e, t, i.S[t], r, n, o)) : e(t, i.S[t], r, n, o)
      })(((e, t, n, o, a) => {
        var l = t && i.o(t, n) && r(t, n, o);
        return l ? (e => (e.loaded = 1, e.get()))(l) : a()
      })),
      o = {},
      a = {
        6780: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => () => i(4061))),
        289: () => n("default", "react", [1, 18, 2, 0], (() => () => i(8252)))
      };
    [289].forEach((e => {
      i.m[e] = t => {
        o[e] = 0, delete i.c[e];
        var r = a[e]();
        if ("function" != typeof r) throw new Error("Shared module is not available for eager consumption: " + e);
        t.exports = r()
      }
    }));
    var l = {
      424: [6780]
    };
    i.f.consumes = (e, t) => {
      i.o(l, e) && l[e].forEach((e => {
        if (i.o(o, e)) return t.push(o[e]);
        var r = t => {
            o[e] = 0, i.m[e] = r => {
              delete i.c[e], r.exports = t()
            }
          },
          n = t => {
            delete o[e], i.m[e] = r => {
              throw delete i.c[e], t
            }
          };
        try {
          var l = a[e]();
          l.then ? t.push(o[e] = l.then(r).catch(n)) : r(l)
        } catch (e) {
          n(e)
        }
      }))
    }
  })(), (() => {
    if ("undefined" != typeof document) {
      var e = {
        435: 0
      };
      i.f.miniCss = (t, r) => {
        e[t] ? r.push(e[t]) : 0 !== e[t] && {
          62: 1,
          424: 1,
          831: 1
        } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
          var n = i.miniCssF(e),
            o = i.p + n;
          if (((e, t) => {
              for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                var o = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (o === e || o === t)) return i
              }
              var a = document.getElementsByTagName("style");
              for (n = 0; n < a.length; n++) {
                var i;
                if ((o = (i = a[n]).getAttribute("data-href")) === e || o === t) return i
              }
            })(n, o)) return t();
          ((e, t, r, n, o) => {
            var a = document.createElement("link");
            a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = r => {
              if (a.onerror = a.onload = null, "load" === r.type) n();
              else {
                var i = r && ("load" === r.type ? "missing" : r.type),
                  l = r && r.target && r.target.href || t,
                  s = new Error("Loading CSS chunk " + e + " failed.\n(" + l + ")");
                s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = l, a.parentNode && a.parentNode.removeChild(a), o(s)
              }
            }, a.href = t, document.head.appendChild(a)
          })(e, o, 0, t, r)
        })))(t).then((() => {
          e[t] = 0
        }), (r => {
          throw delete e[t], r
        })))
      }
    }
  })(), (() => {
    var e = {
      435: 0
    };
    i.f.j = (t, r) => {
      var n = i.o(e, t) ? e[t] : void 0;
      if (0 !== n)
        if (n) r.push(n[2]);
        else if (/^(753|8)$/.test(t)) e[t] = 0;
      else {
        var o = new Promise(((r, o) => n = e[t] = [r, o]));
        r.push(n[2] = o);
        var a = i.p + i.u(t),
          l = new Error;
        i.l(a, (r => {
          if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            l.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", l.name = "ChunkLoadError", l.type = o, l.request = a, n[1](l)
          }
        }), "chunk-" + t, t)
      }
    };
    var t = (t, r) => {
        var n, o, a = r[0],
          l = r[1],
          s = r[2],
          u = 0;
        if (a.some((t => 0 !== e[t]))) {
          for (n in l) i.o(l, n) && (i.m[n] = l[n]);
          s && s(i)
        }
        for (t && t(r); u < a.length; u++) o = a[u], i.o(e, o) && e[o] && e[o][0](), e[o] = 0
      },
      r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
  })();
  var l = i(4818);
  sites_legacy = l
})();