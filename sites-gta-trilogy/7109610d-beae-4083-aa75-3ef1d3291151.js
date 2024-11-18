! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7109610d-beae-4083-aa75-3ef1d3291151", e._sentryDebugIdIdentifier = "sentry-dbid-7109610d-beae-4083-aa75-3ef1d3291151")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [261], {
    5261: (e, t, r) => {
      function a() {
        return a = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
          }
          return e
        }, a.apply(this, arguments)
      }
      var n;
      r.d(t, {
          AO: () => f,
          B6: () => _,
          G3: () => se,
          Gh: () => W,
          HS: () => B,
          Oi: () => c,
          Pq: () => q,
          Rr: () => p,
          Sk: () => X,
          TM: () => l,
          V2: () => V,
          VV: () => G,
          aE: () => ue,
          o1: () => O,
          pX: () => Q,
          pb: () => C,
          rc: () => n,
          ro: () => w,
          sC: () => i,
          sd: () => I,
          tH: () => H,
          tW: () => T,
          ue: () => b,
          v6: () => Y,
          zR: () => s
        }),
        function(e) {
          e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(n || (n = {}));
      const o = "popstate";

      function i(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: a,
          v5Compat: o = !1
        } = e;
        t = r.map(((e, t) => m(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = c(null == a ? t.length - 1 : a),
          s = n.Pop,
          l = null;

        function c(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function u() {
          return t[i]
        }

        function m(e, r, a) {
          void 0 === r && (r = null);
          let n = h(t ? u().pathname : "/", e, r, a);
          return d("/" === n.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), n
        }

        function y(e) {
          return "string" == typeof e ? e : f(e)
        }
        return {
          get index() {
            return i
          },
          get action() {
            return s
          },
          get location() {
            return u()
          },
          createHref: y,
          createURL: e => new URL(y(e), "http://localhost"),
          encodeLocation(e) {
            let t = "string" == typeof e ? p(e) : e;
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
            let r = c(i + e),
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

      function s(e) {
        return void 0 === e && (e = {}), m((function(e, t) {
          let {
            pathname: r,
            search: a,
            hash: n
          } = e.location;
          return h("", {
            pathname: r,
            search: a,
            hash: n
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          return "string" == typeof t ? t : f(t)
        }), null, e)
      }

      function l(e) {
        return void 0 === e && (e = {}), m((function(e, t) {
          let {
            pathname: r = "/",
            search: a = "",
            hash: n = ""
          } = p(e.location.hash.substr(1));
          return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), h("", {
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
          return a + "#" + ("string" == typeof t ? t : f(t))
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

      function u(e, t) {
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
        }, "string" == typeof t ? p(t) : t, {
          state: r,
          key: t && t.key || n || Math.random().toString(36).substr(2, 8)
        })
      }

      function f(e) {
        let {
          pathname: t = "/",
          search: r = "",
          hash: a = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), a && "#" !== a && (t += "#" === a.charAt(0) ? a : "#" + a), t
      }

      function p(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let a = e.indexOf("?");
          a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e)
        }
        return t
      }

      function m(e, t, r, i) {
        void 0 === i && (i = {});
        let {
          window: s = document.defaultView,
          v5Compat: l = !1
        } = i, d = s.history, p = n.Pop, m = null, y = g();

        function g() {
          return (d.state || {
            idx: null
          }).idx
        }

        function v() {
          p = n.Pop;
          let e = g(),
            t = null == e ? null : e - y;
          y = e, m && m({
            action: p,
            location: w.location,
            delta: t
          })
        }

        function b(e) {
          let t = "null" !== s.location.origin ? s.location.origin : s.location.href,
            r = "string" == typeof e ? e : f(e);
          return c(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
        }
        null == y && (y = 0, d.replaceState(a({}, d.state, {
          idx: y
        }), ""));
        let w = {
          get action() {
            return p
          },
          get location() {
            return e(s, d)
          },
          listen(e) {
            if (m) throw new Error("A history only accepts one active listener");
            return s.addEventListener(o, v), m = e, () => {
              s.removeEventListener(o, v), m = null
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
            p = n.Push;
            let a = h(w.location, e, t);
            r && r(a, e), y = g() + 1;
            let o = u(a, y),
              i = w.createHref(a);
            try {
              d.pushState(o, "", i)
            } catch (e) {
              if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
              s.location.assign(i)
            }
            l && m && m({
              action: p,
              location: w.location,
              delta: 1
            })
          },
          replace: function(e, t) {
            p = n.Replace;
            let a = h(w.location, e, t);
            r && r(a, e), y = g();
            let o = u(a, y),
              i = w.createHref(a);
            d.replaceState(o, "", i), l && m && m({
              action: p,
              location: w.location,
              delta: 0
            })
          },
          go: e => d.go(e)
        };
        return w
      }
      var y;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(y || (y = {}));
      const g = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function v(e, t, r, n) {
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
            return n[s] = r, e.children && (r.children = v(e.children, t, i, n)), r
          }
        }))
      }

      function b(e, t, r) {
        void 0 === r && (r = "/");
        let a = C(("string" == typeof t ? p(t) : t).pathname || "/", r);
        if (null == a) return null;
        let n = D(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(n);
        let o = null;
        for (let e = 0; null == o && e < n.length; ++e) o = j(n[e], U(a));
        return o
      }

      function w(e, t) {
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

      function D(e, t, r, a) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === a && (a = "");
        let n = (e, n, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: n,
            route: e
          };
          i.relativePath.startsWith("/") && (c(i.relativePath.startsWith(a), 'Absolute route path "' + i.relativePath + '" nested under path "' + a + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(a.length));
          let s = B([a, i.relativePath]),
            l = r.concat(i);
          e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), D(e.children, t, l, s)), (null != e.path || e.index) && t.push({
            path: s,
            score: A(s, e.index),
            routesMeta: l
          })
        };
        return e.forEach(((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of E(e.path)) n(e, t, r);
          else n(e, t)
        })), t
      }

      function E(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...a] = t, n = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === a.length) return n ? [o, ""] : [o];
        let i = E(a.join("/")),
          s = [];
        return s.push(...i.map((e => "" === e ? o : [o, e].join("/")))), n && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const R = /^:\w+$/,
        x = 3,
        S = 2,
        M = 1,
        k = 10,
        P = -2,
        L = e => "*" === e;

      function A(e, t) {
        let r = e.split("/"),
          a = r.length;
        return r.some(L) && (a += P), t && (a += S), r.filter((e => !L(e))).reduce(((e, t) => e + (R.test(t) ? x : "" === t ? M : k)), a)
      }

      function j(e, t) {
        let {
          routesMeta: r
        } = e, a = {}, n = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            s = e === r.length - 1,
            l = "/" === n ? t : t.slice(n.length) || "/",
            c = _({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: s
            }, l);
          if (!c) return null;
          Object.assign(a, c.params);
          let d = i.route;
          o.push({
            params: a,
            pathname: B([n, c.pathname]),
            pathnameBase: $(B([n, c.pathnameBase])),
            route: d
          }), "/" !== c.pathnameBase && (n = B([n, c.pathnameBase]))
        }
        return o
      }

      function T(e, t) {
        void 0 === t && (t = {});
        let r = e;
        r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (d(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*"));
        const a = r.startsWith("/") ? "/" : "",
          n = e => null == e ? "" : "string" == typeof e ? e : String(e);
        return a + r.split(/\/+/).map(((e, r, a) => {
          if (r === a.length - 1 && "*" === e) return n(t["*"]);
          const o = e.match(/^:(\w+)(\??)$/);
          if (o) {
            const [, e, r] = o;
            let a = t[e];
            return c("?" === r || null != a, 'Missing ":' + e + '" param'), n(a)
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
        let [r, a] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), d("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let a = [],
            n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (a.push(t), "/([^\\/]+)")));
          return e.endsWith("*") ? (a.push("*"), n += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : "" !== e && "/" !== e && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), a]
        }(e.path, e.caseSensitive, e.end), n = t.match(r);
        if (!n) return null;
        let o = n[0],
          i = o.replace(/(.)\/+$/, "$1"),
          s = n.slice(1);
        return {
          params: a.reduce(((e, t, r) => {
            if ("*" === t) {
              let e = s[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
              try {
                return decodeURIComponent(e)
              } catch (r) {
                return d(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(s[r] || "", t), e
          }), {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function U(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return d(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function C(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          a = e.charAt(r);
        return a && "/" !== a ? null : e.slice(r) || "/"
      }

      function O(e, t) {
        void 0 === t && (t = "/");
        let {
          pathname: r,
          search: a = "",
          hash: n = ""
        } = "string" == typeof e ? p(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: o,
          search: N(a),
          hash: F(n)
        }
      }

      function z(e, t, r, a) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function I(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function W(e, t, r, n) {
        let o;
        void 0 === n && (n = !1), "string" == typeof e ? o = p(e) : (o = a({}, e), c(!o.pathname || !o.pathname.includes("?"), z("?", "pathname", "search", o)), c(!o.pathname || !o.pathname.includes("#"), z("#", "pathname", "hash", o)), c(!o.search || !o.search.includes("#"), z("#", "search", "hash", o)));
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
        let d = O(o, i),
          u = l && "/" !== l && l.endsWith("/"),
          h = (s || "." === l) && r.endsWith("/");
        return d.pathname.endsWith("/") || !u && !h || (d.pathname += "/"), d
      }
      const B = e => e.join("/").replace(/\/\/+/g, "/"),
        $ = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        N = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        F = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        q = function(e, t) {
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
          let a = () => r(new H("Deferred data aborted"));
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
          let r = Promise.race([t, this.abortPromise]).then((t => this.onSettle(r, e, void 0, t)), (t => this.onSettle(r, e, t)));
          return r.catch((() => {})), Object.defineProperty(r, "_tracked", {
            get: () => !0
          }), r
        }
        onSettle(e, t, r, a) {
          if (this.controller.signal.aborted && r instanceof H) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
            get: () => r
          }), Promise.reject(r);
          if (this.pendingKeysSet.delete(t), this.done && this.unlistenAbortSignal(), void 0 === r && void 0 === a) {
            let r = new Error('Deferred data for key "' + t + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
            return Object.defineProperty(e, "_error", {
              get: () => r
            }), this.emit(!1, t), Promise.reject(r)
          }
          return void 0 === a ? (Object.defineProperty(e, "_error", {
            get: () => r
          }), this.emit(!1, t), Promise.reject(r)) : (Object.defineProperty(e, "_data", {
            get: () => a
          }), this.emit(!1, t), a)
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
          return c(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
            let [r, a] = t;
            return Object.assign(e, {
              [r]: J(a)
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
          return void 0 === t && (t = {}), new K(e, "number" == typeof t ? {
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
          return n.set("Location", e), new Response(null, a({}, r, {
            headers: n
          }))
        },
        X = (e, t) => {
          let r = V(e, t);
          return r.headers.set("X-Remix-Reload-Document", "true"), r
        };
      class G {
        constructor(e, t, r, a) {
          void 0 === a && (a = !1), this.status = e, this.statusText = t || "", this.internal = a, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function Q(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const Z = ["post", "put", "patch", "delete"],
        ee = new Set(Z),
        te = ["get", ...Z],
        re = new Set(te),
        ae = new Set([301, 302, 303, 307, 308]),
        ne = new Set([307, 308]),
        oe = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        ie = {
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
        le = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ce = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        }),
        de = "remix-router-transitions";

      function ue(e) {
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
          u = v(e.routes, i, void 0, l),
          f = e.basename || "/",
          p = a({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
          }, e.future),
          m = null,
          g = new Set,
          D = null,
          E = null,
          R = null,
          x = null != e.hydrationData,
          S = b(u, e.history.location, f),
          M = null;
        if (null == S) {
          let t = Me(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: a
            } = Se(u);
          S = r, M = {
            [a.id]: t
          }
        }
        let k, P, L = !(S.some((e => e.route.lazy)) || S.some((e => e.route.loader)) && null == e.hydrationData),
          A = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: S,
            initialized: L,
            navigation: oe,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || M,
            fetchers: new Map,
            blockers: new Map
          },
          j = n.Pop,
          T = !1,
          _ = !1,
          U = new Map,
          O = null,
          z = !1,
          I = !1,
          W = [],
          B = [],
          $ = new Map,
          N = 0,
          F = -1,
          q = new Map,
          H = new Set,
          K = new Map,
          J = new Map,
          Y = new Map,
          V = !1;

        function X(e, t) {
          A = a({}, A, e), g.forEach((e => e(A, {
            unstable_viewTransitionOpts: t
          })))
        }

        function G(t, r) {
          var o, i;
          let l, c = null != A.actionData && null != A.navigation.formMethod && Te(A.navigation.formMethod) && "loading" === A.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
          l = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : c ? A.actionData : null;
          let d = r.loaderData ? Re(A.loaderData, r.loaderData, r.matches || [], r.errors) : A.loaderData,
            h = A.blockers;
          h.size > 0 && (h = new Map(h), h.forEach(((e, t) => h.set(t, se))));
          let f, p = !0 === T || null != A.navigation.formMethod && Te(A.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
          if (s && (u = s, s = void 0), z || j === n.Pop || (j === n.Push ? e.history.push(t, t.state) : j === n.Replace && e.history.replace(t, t.state)), j === n.Pop) {
            let e = U.get(A.location.pathname);
            e && e.has(t.pathname) ? f = {
              currentLocation: A.location,
              nextLocation: t
            } : U.has(t.pathname) && (f = {
              currentLocation: t,
              nextLocation: A.location
            })
          } else if (_) {
            let e = U.get(A.location.pathname);
            e ? e.add(t.pathname) : (e = new Set([t.pathname]), U.set(A.location.pathname, e)), f = {
              currentLocation: A.location,
              nextLocation: t
            }
          }
          X(a({}, r, {
            actionData: l,
            loaderData: d,
            historyAction: j,
            location: t,
            initialized: !0,
            navigation: oe,
            revalidation: "idle",
            restoreScrollPosition: Fe(t, r.matches || A.matches),
            preventScrollReset: p,
            blockers: h
          }), f), j = n.Pop, T = !1, _ = !1, z = !1, I = !1, W = [], B = []
        }
        async function Q(t, r, o) {
          P && P.abort(), P = null, j = t, z = !0 === (o && o.startUninterruptedRevalidation),
            function(e, t) {
              if (D && R) {
                let r = Ne(e, t);
                D[r] = R()
              }
            }(A.location, A.matches), T = !0 === (o && o.preventScrollReset), _ = !0 === (o && o.enableViewTransition);
          let c = s || u,
            d = o && o.overrideNavigation,
            h = b(c, r, f);
          if (!h) {
            let e = Me(404, {
                pathname: r.pathname
              }),
              {
                matches: t,
                route: a
              } = Se(c);
            return $e(), void G(r, {
              matches: t,
              loaderData: {},
              errors: {
                [a.id]: e
              }
            })
          }
          if (A.initialized && !I && (p = A.location, m = r, p.pathname === m.pathname && p.search === m.search && ("" === p.hash ? "" !== m.hash : p.hash === m.hash || "" !== m.hash)) && !(o && o.submission && Te(o.submission.formMethod))) return void G(r, {
            matches: h
          });
          var p, m;
          P = new AbortController;
          let g, v, w = be(e.history, r, P.signal, o && o.submission);
          if (o && o.pendingError) v = {
            [xe(h).route.id]: o.pendingError
          };
          else if (o && o.submission && Te(o.submission.formMethod)) {
            let e = await async function(e, t, r, a, o) {
              void 0 === o && (o = {}), re();
              let s, c = function(e, t) {
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
                navigation: c
              });
              let d = Oe(a, t);
              if (d.route.action || d.route.lazy) {
                if (s = await ve("action", e, d, a, l, i, f), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else s = {
                type: y.error,
                error: Me(405, {
                  method: e.method,
                  pathname: t.pathname,
                  routeId: d.route.id
                })
              };
              if (je(s)) {
                let e;
                return e = o && null != o.replace ? o.replace : s.location === A.location.pathname + A.location.search, await ee(A, s, {
                  submission: r,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (Ae(s)) {
                let e = xe(a, d.route.id);
                return !0 !== (o && o.replace) && (j = n.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: s.error
                  }
                }
              }
              if (Le(s)) throw Me(400, {
                type: "defer-action"
              });
              return {
                pendingActionData: {
                  [d.route.id]: s.data
                }
              }
            }(w, r, o.submission, h, {
              replace: o.replace
            });
            if (e.shortCircuited) return;
            g = e.pendingActionData, v = e.pendingActionError, d = Ie(r, o.submission), w = new Request(w.url, {
              signal: w.signal
            })
          }
          let {
            shortCircuited: E,
            loaderData: x,
            errors: S
          } = await async function(t, r, n, o, i, l, c, d, h) {
            let p = o || Ie(r, i),
              m = i || l || ze(p),
              y = s || u,
              [g, v] = pe(e.history, A, n, m, r, I, W, B, K, H, y, f, d, h);
            if ($e((e => !(n && n.some((t => t.route.id === e))) || g && g.some((t => t.route.id === e)))), F = ++N, 0 === g.length && 0 === v.length) {
              let e = ge();
              return G(r, a({
                matches: n,
                loaderData: {},
                errors: h || null
              }, d ? {
                actionData: d
              } : {}, e ? {
                fetchers: new Map(A.fetchers)
              } : {})), {
                shortCircuited: !0
              }
            }
            if (!z) {
              v.forEach((e => {
                let t = A.fetchers.get(e.key),
                  r = We(void 0, t ? t.data : void 0);
                A.fetchers.set(e.key, r)
              }));
              let e = d || A.actionData;
              X(a({
                navigation: p
              }, e ? 0 === Object.keys(e).length ? {
                actionData: null
              } : {
                actionData: e
              } : {}, v.length > 0 ? {
                fetchers: new Map(A.fetchers)
              } : {}))
            }
            v.forEach((e => {
              $.has(e.key) && me(e.key), e.controller && $.set(e.key, e.controller)
            }));
            let b = () => v.forEach((e => me(e.key)));
            P && P.signal.addEventListener("abort", b);
            let {
              results: w,
              loaderResults: D,
              fetcherResults: E
            } = await te(A.matches, n, g, v, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            P && P.signal.removeEventListener("abort", b), v.forEach((e => $.delete(e.key)));
            let R = ke(w);
            if (R) {
              if (R.idx >= g.length) {
                let e = v[R.idx - g.length].key;
                H.add(e)
              }
              return await ee(A, R.result, {
                replace: c
              }), {
                shortCircuited: !0
              }
            }
            let {
              loaderData: x,
              errors: S
            } = Ee(A, n, g, D, h, v, E, J);
            J.forEach(((e, t) => {
              e.subscribe((r => {
                (r || e.done) && J.delete(t)
              }))
            }));
            let M = ge(),
              k = we(F);
            return a({
              loaderData: x,
              errors: S
            }, M || k || v.length > 0 ? {
              fetchers: new Map(A.fetchers)
            } : {})
          }(w, r, h, d, o && o.submission, o && o.fetcherSubmission, o && o.replace, g, v);
          E || (P = null, G(r, a({
            matches: h
          }, g ? {
            actionData: g
          } : {}, {
            loaderData: x,
            errors: S
          })))
        }

        function Z(e) {
          return A.fetchers.get(e) || ie
        }
        async function ee(o, i, s) {
          let {
            submission: l,
            fetcherSubmission: d,
            replace: u
          } = void 0 === s ? {} : s;
          i.revalidate && (I = !0);
          let p = h(o.location, i.location, {
            _isRedirect: !0
          });
          if (c(p, "Expected a location on the redirect navigation"), r) {
            let r = !1;
            if (i.reloadDocument) r = !0;
            else if (le.test(i.location)) {
              const a = e.history.createURL(i.location);
              r = a.origin !== t.location.origin || null == C(a.pathname, f)
            }
            if (r) return void(u ? t.location.replace(i.location) : t.location.assign(i.location))
          }
          P = null;
          let m = !0 === u ? n.Replace : n.Push,
            {
              formMethod: y,
              formAction: g,
              formEncType: v
            } = o.navigation;
          !l && !d && y && g && v && (l = ze(o.navigation));
          let b = l || d;
          if (ne.has(i.status) && b && Te(b.formMethod)) await Q(m, p, {
            submission: a({}, b, {
              formAction: i.location
            }),
            preventScrollReset: T
          });
          else {
            let e = Ie(p, l);
            await Q(m, p, {
              overrideNavigation: e,
              fetcherSubmission: d,
              preventScrollReset: T
            })
          }
        }
        async function te(t, r, a, n, o) {
          let s = await Promise.all([...a.map((e => ve("loader", o, e, r, l, i, f))), ...n.map((t => t.matches && t.match && t.controller ? ve("loader", be(e.history, t.path, t.controller.signal), t.match, t.matches, l, i, f) : {
              type: y.error,
              error: Me(404, {
                pathname: t.path
              })
            }))]),
            c = s.slice(0, a.length),
            d = s.slice(a.length);
          return await Promise.all([_e(t, a, c, c.map((() => o.signal)), !1, A.loaderData), _e(t, n.map((e => e.match)), d, n.map((e => e.controller ? e.controller.signal : null)), !0)]), {
            results: s,
            loaderResults: c,
            fetcherResults: d
          }
        }

        function re() {
          I = !0, W.push(...$e()), K.forEach(((e, t) => {
            $.has(t) && (B.push(t), me(t))
          }))
        }

        function ae(e, t, r) {
          let a = xe(A.matches, t);
          ue(e), X({
            errors: {
              [a.route.id]: r
            },
            fetchers: new Map(A.fetchers)
          })
        }

        function ue(e) {
          let t = A.fetchers.get(e);
          !$.has(e) || t && "loading" === t.state && q.has(e) || me(e), K.delete(e), q.delete(e), H.delete(e), A.fetchers.delete(e)
        }

        function me(e) {
          let t = $.get(e);
          c(t, "Expected fetch controller: " + e), t.abort(), $.delete(e)
        }

        function ye(e) {
          for (let t of e) {
            let e = Be(Z(t).data);
            A.fetchers.set(t, e)
          }
        }

        function ge() {
          let e = [],
            t = !1;
          for (let r of H) {
            let a = A.fetchers.get(r);
            c(a, "Expected fetcher: " + r), "loading" === a.state && (H.delete(r), e.push(r), t = !0)
          }
          return ye(e), t
        }

        function we(e) {
          let t = [];
          for (let [r, a] of q)
            if (a < e) {
              let e = A.fetchers.get(r);
              c(e, "Expected fetcher: " + r), "loading" === e.state && (me(r), q.delete(r), t.push(r))
            } return ye(t), t.length > 0
        }

        function De(e) {
          A.blockers.delete(e), Y.delete(e)
        }

        function Pe(e, t) {
          let r = A.blockers.get(e) || se;
          c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
          let a = new Map(A.blockers);
          a.set(e, t), X({
            blockers: a
          })
        }

        function Ce(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: a
          } = e;
          if (0 === Y.size) return;
          Y.size > 1 && d(!1, "A router only supports one blocker at a time");
          let n = Array.from(Y.entries()),
            [o, i] = n[n.length - 1],
            s = A.blockers.get(o);
          return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: a
          }) ? o : void 0
        }

        function $e(e) {
          let t = [];
          return J.forEach(((r, a) => {
            e && !e(a) || (r.cancel(), t.push(a), J.delete(a))
          })), t
        }

        function Ne(e, t) {
          return E && E(e, t.map((e => w(e, A.loaderData)))) || e.key
        }

        function Fe(e, t) {
          if (D) {
            let r = Ne(e, t),
              a = D[r];
            if ("number" == typeof a) return a
          }
          return null
        }
        return k = {
          get basename() {
            return f
          },
          get state() {
            return A
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
                  location: a,
                  delta: n
                } = t;
                if (V) return void(V = !1);
                d(0 === Y.size || null != n, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let o = Ce({
                  currentLocation: A.location,
                  nextLocation: a,
                  historyAction: r
                });
                return o && null != n ? (V = !0, e.history.go(-1 * n), void Pe(o, {
                  state: "blocked",
                  location: a,
                  proceed() {
                    Pe(o, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: a
                    }), e.history.go(n)
                  },
                  reset() {
                    let e = new Map(A.blockers);
                    e.set(o, se), X({
                      blockers: e
                    })
                  }
                })) : Q(r, a)
              })), r) {
              ! function(e, t) {
                try {
                  let r = e.sessionStorage.getItem(de);
                  if (r) {
                    let e = JSON.parse(r);
                    for (let [r, a] of Object.entries(e || {})) a && Array.isArray(a) && t.set(r, new Set(a || []))
                  }
                } catch (e) {}
              }(t, U);
              let e = () => function(e, t) {
                if (t.size > 0) {
                  let r = {};
                  for (let [e, a] of t) r[e] = [...a];
                  try {
                    e.sessionStorage.setItem(de, JSON.stringify(r))
                  } catch (e) {
                    d(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                  }
                }
              }(t, U);
              t.addEventListener("pagehide", e), O = () => t.removeEventListener("pagehide", e)
            }
            return A.initialized || Q(n.Pop, A.location), k
          },
          subscribe: function(e) {
            return g.add(e), () => g.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (D = e, R = t, E = r || null, !x && A.navigation === oe) {
              x = !0;
              let e = Fe(A.location, A.matches);
              null != e && X({
                restoreScrollPosition: e
              })
            }
            return () => {
              D = null, R = null, E = null
            }
          },
          navigate: async function t(r, o) {
            if ("number" == typeof r) return void e.history.go(r);
            let i = he(A.location, A.matches, f, p.v7_prependBasename, r, null == o ? void 0 : o.fromRouteId, null == o ? void 0 : o.relative),
              {
                path: s,
                submission: l,
                error: c
              } = fe(p.v7_normalizeFormMethod, !1, i, o),
              d = A.location,
              u = h(A.location, s, o && o.state);
            u = a({}, u, e.history.encodeLocation(u));
            let m = o && null != o.replace ? o.replace : void 0,
              y = n.Push;
            !0 === m ? y = n.Replace : !1 === m || null != l && Te(l.formMethod) && l.formAction === A.location.pathname + A.location.search && (y = n.Replace);
            let g = o && "preventScrollReset" in o ? !0 === o.preventScrollReset : void 0,
              v = Ce({
                currentLocation: d,
                nextLocation: u,
                historyAction: y
              });
            if (!v) return await Q(y, u, {
              submission: l,
              pendingError: c,
              preventScrollReset: g,
              replace: o && o.replace,
              enableViewTransition: o && o.unstable_viewTransition
            });
            Pe(v, {
              state: "blocked",
              location: u,
              proceed() {
                Pe(v, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: u
                }), t(r, o)
              },
              reset() {
                let e = new Map(A.blockers);
                e.set(v, se), X({
                  blockers: e
                })
              }
            })
          },
          fetch: function(t, r, n, d) {
            if (o) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            $.has(t) && me(t);
            let h = s || u,
              m = he(A.location, A.matches, f, p.v7_prependBasename, n, r, null == d ? void 0 : d.relative),
              y = b(h, m, f);
            if (!y) return void ae(t, r, Me(404, {
              pathname: m
            }));
            let {
              path: g,
              submission: v,
              error: w
            } = fe(p.v7_normalizeFormMethod, !0, m, d);
            if (w) return void ae(t, r, w);
            let D = Oe(y, g);
            T = !0 === (d && d.preventScrollReset), v && Te(v.formMethod) ? async function(t, r, n, o, d, h) {
              if (re(), K.delete(t), !o.route.action && !o.route.lazy) {
                let e = Me(405, {
                  method: h.formMethod,
                  pathname: n,
                  routeId: r
                });
                return void ae(t, r, e)
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
              }(h, A.fetchers.get(t));
              A.fetchers.set(t, p), X({
                fetchers: new Map(A.fetchers)
              });
              let m = new AbortController,
                y = be(e.history, n, m.signal, h);
              $.set(t, m);
              let g = N,
                v = await ve("action", y, o, d, l, i, f);
              if (y.signal.aborted) return void($.get(t) === m && $.delete(t));
              if (je(v)) {
                if ($.delete(t), F > g) {
                  let e = Be(void 0);
                  return A.fetchers.set(t, e), void X({
                    fetchers: new Map(A.fetchers)
                  })
                } {
                  H.add(t);
                  let e = We(h);
                  return A.fetchers.set(t, e), X({
                    fetchers: new Map(A.fetchers)
                  }), ee(A, v, {
                    fetcherSubmission: h
                  })
                }
              }
              if (Ae(v)) return void ae(t, r, v.error);
              if (Le(v)) throw Me(400, {
                type: "defer-action"
              });
              let w = A.navigation.location || A.location,
                D = be(e.history, w, m.signal),
                E = s || u,
                R = "idle" !== A.navigation.state ? b(E, A.navigation.location, f) : A.matches;
              c(R, "Didn't find any matches after fetcher action");
              let x = ++N;
              q.set(t, x);
              let S = We(h, v.data);
              A.fetchers.set(t, S);
              let [M, k] = pe(e.history, A, R, h, w, I, W, B, K, H, E, f, {
                [o.route.id]: v.data
              }, void 0);
              k.filter((e => e.key !== t)).forEach((e => {
                let t = e.key,
                  r = A.fetchers.get(t),
                  a = We(void 0, r ? r.data : void 0);
                A.fetchers.set(t, a), $.has(t) && me(t), e.controller && $.set(t, e.controller)
              })), X({
                fetchers: new Map(A.fetchers)
              });
              let L = () => k.forEach((e => me(e.key)));
              m.signal.addEventListener("abort", L);
              let {
                results: T,
                loaderResults: _,
                fetcherResults: U
              } = await te(A.matches, R, M, k, D);
              if (m.signal.aborted) return;
              m.signal.removeEventListener("abort", L), q.delete(t), $.delete(t), k.forEach((e => $.delete(e.key)));
              let C = ke(T);
              if (C) {
                if (C.idx >= M.length) {
                  let e = k[C.idx - M.length].key;
                  H.add(e)
                }
                return ee(A, C.result)
              }
              let {
                loaderData: O,
                errors: z
              } = Ee(A, A.matches, M, _, void 0, k, U, J);
              if (A.fetchers.has(t)) {
                let e = Be(v.data);
                A.fetchers.set(t, e)
              }
              let Y = we(x);
              "loading" === A.navigation.state && x > F ? (c(j, "Expected pending action"), P && P.abort(), G(A.navigation.location, {
                matches: R,
                loaderData: O,
                errors: z,
                fetchers: new Map(A.fetchers)
              })) : (X(a({
                errors: z,
                loaderData: Re(A.loaderData, O, R, z)
              }, Y || k.length > 0 ? {
                fetchers: new Map(A.fetchers)
              } : {})), I = !1)
            }(t, r, g, D, y, v): (K.set(t, {
              routeId: r,
              path: g
            }), async function(t, r, a, n, o, s) {
              let d = A.fetchers.get(t),
                u = We(s, d ? d.data : void 0);
              A.fetchers.set(t, u), X({
                fetchers: new Map(A.fetchers)
              });
              let h = new AbortController,
                p = be(e.history, a, h.signal);
              $.set(t, h);
              let m = N,
                y = await ve("loader", p, n, o, l, i, f);
              if (Le(y) && (y = await Ue(y, p.signal, !0) || y), $.get(t) === h && $.delete(t), p.signal.aborted) return;
              if (je(y)) {
                if (F > m) {
                  let e = Be(void 0);
                  return A.fetchers.set(t, e), void X({
                    fetchers: new Map(A.fetchers)
                  })
                }
                return H.add(t), void await ee(A, y)
              }
              if (Ae(y)) {
                let e = xe(A.matches, r);
                return A.fetchers.delete(t), void X({
                  fetchers: new Map(A.fetchers),
                  errors: {
                    [e.route.id]: y.error
                  }
                })
              }
              c(!Le(y), "Unhandled fetcher deferred data");
              let g = Be(y.data);
              A.fetchers.set(t, g), X({
                fetchers: new Map(A.fetchers)
              })
            }(t, r, g, D, y, v))
          },
          revalidate: function() {
            re(), X({
              revalidation: "loading"
            }), "submitting" !== A.navigation.state && ("idle" !== A.navigation.state ? Q(j || A.historyAction, A.navigation.location, {
              overrideNavigation: A.navigation
            }) : Q(A.historyAction, A.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: Z,
          deleteFetcher: ue,
          dispose: function() {
            m && m(), O && O(), g.clear(), P && P.abort(), A.fetchers.forEach(((e, t) => ue(t))), A.blockers.forEach(((e, t) => De(t)))
          },
          getBlocker: function(e, t) {
            let r = A.blockers.get(e) || se;
            return Y.get(e) !== t && Y.set(e, t), r
          },
          deleteBlocker: De,
          _internalFetchControllers: $,
          _internalActiveDeferreds: J,
          _internalSetRoutes: function(e) {
            l = {}, s = v(e, i, void 0, l)
          }
        }, k
      }

      function he(e, t, r, a, n, o, i) {
        let s, l;
        if (null != o && "path" !== i) {
          s = [];
          for (let e of t)
            if (s.push(e), e.route.id === o) {
              l = e;
              break
            }
        } else s = t, l = t[t.length - 1];
        let c = W(n || ".", I(s).map((e => e.pathnameBase)), C(e.pathname, r) || e.pathname, "path" === i);
        return null == n && (c.search = e.search, c.hash = e.hash), null != n && "" !== n && "." !== n || !l || !l.route.index || Ce(c.search) || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), a && "/" !== r && (c.pathname = "/" === c.pathname ? r : B([r, c.pathname])), f(c)
      }

      function fe(e, t, r, a) {
        if (!a || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
          }(a)) return {
          path: r
        };
        if (a.formMethod && (n = a.formMethod, !re.has(n.toLowerCase()))) return {
          path: r,
          error: Me(405, {
            method: a.formMethod
          })
        };
        var n;
        let o, i, s = () => ({
            path: r,
            error: Me(400, {
              type: "invalid-body"
            })
          }),
          l = a.formMethod || "get",
          d = e ? l.toUpperCase() : l.toLowerCase(),
          u = Pe(r);
        if (void 0 !== a.body) {
          if ("text/plain" === a.formEncType) {
            if (!Te(d)) return s();
            let e = "string" == typeof a.body ? a.body : a.body instanceof FormData || a.body instanceof URLSearchParams ? Array.from(a.body.entries()).reduce(((e, t) => {
              let [r, a] = t;
              return "" + e + r + "=" + a + "\n"
            }), "") : String(a.body);
            return {
              path: r,
              submission: {
                formMethod: d,
                formAction: u,
                formEncType: a.formEncType,
                formData: void 0,
                json: void 0,
                text: e
              }
            }
          }
          if ("application/json" === a.formEncType) {
            if (!Te(d)) return s();
            try {
              let e = "string" == typeof a.body ? JSON.parse(a.body) : a.body;
              return {
                path: r,
                submission: {
                  formMethod: d,
                  formAction: u,
                  formEncType: a.formEncType,
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
        if (c("function" == typeof FormData, "FormData is not available in this environment"), a.formData) o = we(a.formData), i = a.formData;
        else if (a.body instanceof FormData) o = we(a.body), i = a.body;
        else if (a.body instanceof URLSearchParams) o = a.body, i = De(o);
        else if (null == a.body) o = new URLSearchParams, i = new FormData;
        else try {
          o = new URLSearchParams(a.body), i = De(o)
        } catch (e) {
          return s()
        }
        let h = {
          formMethod: d,
          formAction: u,
          formEncType: a && a.formEncType || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0
        };
        if (Te(h.formMethod)) return {
          path: r,
          submission: h
        };
        let m = p(r);
        return t && m.search && Ce(m.search) && o.append("index", ""), m.search = "?" + o, {
          path: f(m),
          submission: h
        }
      }

      function pe(e, t, r, n, o, i, s, l, c, d, u, h, f, p) {
        let m = p ? Object.values(p)[0] : f ? Object.values(f)[0] : void 0,
          y = e.createURL(t.location),
          g = e.createURL(o),
          v = p ? Object.keys(p)[0] : void 0,
          w = function(e, t) {
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
              }(t.loaderData, t.matches[r], e) || s.some((t => t === e.route.id))) return !0;
            let o = t.matches[r],
              l = e;
            return ye(e, a({
              currentUrl: y,
              currentParams: o.params,
              nextUrl: g,
              nextParams: l.params
            }, n, {
              actionResult: m,
              defaultShouldRevalidate: i || y.pathname + y.search === g.pathname + g.search || y.search !== g.search || me(o, l)
            }))
          })),
          D = [];
        return c.forEach(((e, o) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let s = b(u, e.path, h);
          if (!s) return void D.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let c = t.fetchers.get(o),
            f = Oe(s, e.path),
            p = !1;
          p = !d.has(o) && (!!l.includes(o) || (c && "idle" !== c.state && void 0 === c.data ? i : ye(f, a({
            currentUrl: y,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: g,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: m,
            defaultShouldRevalidate: i
          })))), p && D.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: s,
            match: f,
            controller: new AbortController
          })
        })), [w, D]
      }

      function me(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function ye(e, t) {
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
      async function ve(e, t, r, a, n, o, i, s) {
        let l, d, u;
        void 0 === s && (s = {});
        let h = e => {
          let a, n = new Promise(((e, t) => a = t));
          return u = () => a(), t.signal.addEventListener("abort", u), Promise.race([e({
            request: t,
            params: r.params,
            context: s.requestContext
          }), n])
        };
        try {
          let a = r.route[e];
          if (r.route.lazy)
            if (a) {
              let e, t = await Promise.all([h(a).catch((t => {
                e = t
              })), ge(r.route, o, n)]);
              if (e) throw e;
              d = t[0]
            } else {
              if (await ge(r.route, o, n), a = r.route[e], !a) {
                if ("action" === e) {
                  let e = new URL(t.url),
                    a = e.pathname + e.search;
                  throw Me(405, {
                    method: t.method,
                    pathname: a,
                    routeId: r.route.id
                  })
                }
                return {
                  type: y.data,
                  data: void 0
                }
              }
              d = await h(a)
            }
          else {
            if (!a) {
              let e = new URL(t.url);
              throw Me(404, {
                pathname: e.pathname + e.search
              })
            }
            d = await h(a)
          }
          c(void 0 !== d, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          l = y.error, d = e
        } finally {
          u && t.signal.removeEventListener("abort", u)
        }
        if (null != (f = d) && "number" == typeof f.status && "string" == typeof f.statusText && "object" == typeof f.headers && void 0 !== f.body) {
          let e, n = d.status;
          if (ae.has(n)) {
            let e = d.headers.get("Location");
            if (c(e, "Redirects returned/thrown from loaders/actions must have a Location header"), le.test(e)) {
              if (!s.isStaticRequest) {
                let r = new URL(t.url),
                  a = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  n = null != C(a.pathname, i);
                a.origin === r.origin && n && (e = a.pathname + a.search + a.hash)
              }
            } else e = he(new URL(t.url), a.slice(0, a.indexOf(r) + 1), i, !0, e);
            if (s.isStaticRequest) throw d.headers.set("Location", e), d;
            return {
              type: y.redirect,
              status: n,
              location: e,
              revalidate: null !== d.headers.get("X-Remix-Revalidate"),
              reloadDocument: null !== d.headers.get("X-Remix-Reload-Document")
            }
          }
          if (s.isRouteRequest) throw {
            type: l === y.error ? y.error : y.data,
            response: d
          };
          let o = d.headers.get("Content-Type");
          return e = o && /\bapplication\/json\b/.test(o) ? await d.json() : await d.text(), l === y.error ? {
            type: l,
            error: new G(n, d.statusText, e),
            headers: d.headers
          } : {
            type: y.data,
            data: e,
            statusCode: d.status,
            headers: d.headers
          }
        }
        var f, p, m;
        return l === y.error ? {
          type: l,
          error: d
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(d) ? {
          type: y.deferred,
          deferredData: d,
          statusCode: null == (p = d.init) ? void 0 : p.status,
          headers: (null == (m = d.init) ? void 0 : m.headers) && new Headers(d.init.headers)
        } : {
          type: y.data,
          data: d
        }
      }

      function be(e, t, r, a) {
        let n = e.createURL(Pe(t)).toString(),
          o = {
            signal: r
          };
        if (a && Te(a.formMethod)) {
          let {
            formMethod: e,
            formEncType: t
          } = a;
          o.method = e.toUpperCase(), "application/json" === t ? (o.headers = new Headers({
            "Content-Type": t
          }), o.body = JSON.stringify(a.json)) : "text/plain" === t ? o.body = a.text : "application/x-www-form-urlencoded" === t && a.formData ? o.body = we(a.formData) : o.body = a.formData
        }
        return new Request(n, o)
      }

      function we(e) {
        let t = new URLSearchParams;
        for (let [r, a] of e.entries()) t.append(r, "string" == typeof a ? a : a.name);
        return t
      }

      function De(e) {
        let t = new FormData;
        for (let [r, a] of e.entries()) t.append(r, a);
        return t
      }

      function Ee(e, t, r, n, o, i, s, l) {
        let {
          loaderData: d,
          errors: u
        } = function(e, t, r, a, n) {
          let o, i = {},
            s = null,
            l = !1,
            d = {};
          return r.forEach(((r, u) => {
            let h = t[u].route.id;
            if (c(!je(r), "Cannot handle redirect results in processLoaderData"), Ae(r)) {
              let t = xe(e, h),
                n = r.error;
              a && (n = Object.values(a)[0], a = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = n), i[h] = void 0, l || (l = !0, o = Q(r.error) ? r.error.status : 500), r.headers && (d[h] = r.headers)
            } else Le(r) ? (n.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || l || (o = r.statusCode), r.headers && (d[h] = r.headers)
          })), a && (s = a, i[Object.keys(a)[0]] = void 0), {
            loaderData: i,
            errors: s,
            statusCode: o || 200,
            loaderHeaders: d
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
            if (Ae(l)) {
              let t = xe(e.matches, null == n ? void 0 : n.route.id);
              u && u[t.route.id] || (u = a({}, u, {
                [t.route.id]: l.error
              })), e.fetchers.delete(r)
            } else if (je(l)) c(!1, "Unhandled fetcher revalidation redirect");
          else if (Le(l)) c(!1, "Unhandled fetcher deferred data");
          else {
            let t = Be(l.data);
            e.fetchers.set(r, t)
          }
        }
        return {
          loaderData: d,
          errors: u
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

      function xe(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function Se(e) {
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

      function Me(e, t) {
        let {
          pathname: r,
          routeId: a,
          method: n,
          type: o
        } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", n && r && a ? s = "You made a " + n + ' request to "' + r + '" but did not provide a `loader` for route "' + a + '", so there is no way to handle the request.' : "defer-action" === o ? s = "defer() is not supported in actions" : "invalid-body" === o && (s = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", s = 'Route "' + a + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", n && r && a ? s = "You made a " + n.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + a + '", so there is no way to handle the request.' : n && (s = 'Invalid request method "' + n.toUpperCase() + '"')), new G(e || 500, i, new Error(s), !0)
      }

      function ke(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (je(r)) return {
            result: r,
            idx: t
          }
        }
      }

      function Pe(e) {
        return f(a({}, "string" == typeof e ? p(e) : e, {
          hash: ""
        }))
      }

      function Le(e) {
        return e.type === y.deferred
      }

      function Ae(e) {
        return e.type === y.error
      }

      function je(e) {
        return (e && e.type) === y.redirect
      }

      function Te(e) {
        return ee.has(e.toLowerCase())
      }
      async function _e(e, t, r, a, n, o) {
        for (let i = 0; i < r.length; i++) {
          let s = r[i],
            l = t[i];
          if (!l) continue;
          let d = e.find((e => e.route.id === l.route.id)),
            u = null != d && !me(d, l) && void 0 !== (o && o[l.route.id]);
          if (Le(s) && (n || u)) {
            let e = a[i];
            c(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await Ue(s, e, n).then((e => {
              e && (r[i] = e || r[i])
            }))
          }
        }
      }
      async function Ue(e, t, r) {
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

      function Ce(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function Oe(e, t) {
        let r = "string" == typeof t ? p(t).search : t.search;
        if (e[e.length - 1].route.index && Ce(r || "")) return e[e.length - 1];
        let a = I(e);
        return a[a.length - 1]
      }

      function ze(e) {
        let {
          formMethod: t,
          formAction: r,
          formEncType: a,
          text: n,
          formData: o,
          json: i
        } = e;
        if (t && r && a) return null != n ? {
          formMethod: t,
          formAction: r,
          formEncType: a,
          formData: void 0,
          json: void 0,
          text: n
        } : null != o ? {
          formMethod: t,
          formAction: r,
          formEncType: a,
          formData: o,
          json: void 0,
          text: void 0
        } : void 0 !== i ? {
          formMethod: t,
          formAction: r,
          formEncType: a,
          formData: void 0,
          json: i,
          text: void 0
        } : void 0
      }

      function Ie(e, t) {
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

      function We(e, t) {
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

      function Be(e) {
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
      Symbol("deferred")
    }
  }
]);