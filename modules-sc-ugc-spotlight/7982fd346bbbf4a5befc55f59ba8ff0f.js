/*! For license information please see 7982fd346bbbf4a5befc55f59ba8ff0f.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5f6b37b8-5a89-42c7-82b1-25f556f6f550", e._sentryDebugIdIdentifier = "sentry-dbid-5f6b37b8-5a89-42c7-82b1-25f556f6f550")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-sc-ugc-spotlight",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [168], {
    23168: (e, t, r) => {
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
          }
          return e
        }, o.apply(this, arguments)
      }
      var n;
      r.d(t, {
          Cm: () => b,
          En: () => $,
          Ep: () => f,
          MP: () => O,
          O8: () => p,
          Qv: () => J,
          So: () => n,
          WM: () => w,
          Wi: () => i,
          Yf: () => l,
          Yz: () => _,
          _: () => W,
          ay: () => H,
          ch: () => V,
          e8: () => Z,
          em: () => I,
          gv: () => ue,
          iU: () => s,
          ie: () => se,
          kt: () => X,
          mc: () => C,
          ot: () => T,
          q4: () => c,
          qS: () => F,
          sZ: () => Q
        }),
        function(e) {
          e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(n || (n = {}));
      const a = "popstate";

      function i(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: o,
          v5Compat: a = !1
        } = e;
        t = r.map(((e, t) => m(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = c(null == o ? t.length - 1 : o),
          s = n.Pop,
          l = null;

        function c(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function u() {
          return t[i]
        }

        function m(e, r, o) {
          void 0 === r && (r = null);
          let n = h(t ? u().pathname : "/", e, r, o);
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
            let o = m(e, r);
            i += 1, t.splice(i, t.length, o), a && l && l({
              action: s,
              location: o,
              delta: 1
            })
          },
          replace(e, r) {
            s = n.Replace;
            let o = m(e, r);
            t[i] = o, a && l && l({
              action: s,
              location: o,
              delta: 0
            })
          },
          go(e) {
            s = n.Pop;
            let r = c(i + e),
              o = t[r];
            i = r, l && l({
              action: s,
              location: o,
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
            search: o,
            hash: n
          } = e.location;
          return h("", {
            pathname: r,
            search: o,
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
            search: o = "",
            hash: n = ""
          } = p(e.location.hash.substr(1));
          return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), h("", {
            pathname: r,
            search: o,
            hash: n
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          let r = e.document.querySelector("base"),
            o = "";
          if (r && r.getAttribute("href")) {
            let t = e.location.href,
              r = t.indexOf("#");
            o = -1 === r ? t : t.slice(0, r)
          }
          return o + "#" + ("string" == typeof t ? t : f(t))
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
          hash: o = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), o && "#" !== o && (t += "#" === o.charAt(0) ? o : "#" + o), t
      }

      function p(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let o = e.indexOf("?");
          o >= 0 && (t.search = e.substr(o), e = e.substr(0, o)), e && (t.pathname = e)
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
        null == y && (y = 0, d.replaceState(o({}, d.state, {
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
            return s.addEventListener(a, v), m = e, () => {
              s.removeEventListener(a, v), m = null
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
            let o = h(w.location, e, t);
            r && r(o, e), y = g() + 1;
            let a = u(o, y),
              i = w.createHref(o);
            try {
              d.pushState(a, "", i)
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
            let o = h(w.location, e, t);
            r && r(o, e), y = g();
            let a = u(o, y),
              i = w.createHref(o);
            d.replaceState(a, "", i), l && m && m({
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
        return void 0 === r && (r = []), void 0 === n && (n = {}), e.map(((e, a) => {
          let i = [...r, a],
            s = "string" == typeof e.id ? e.id : i.join("-");
          if (c(!0 !== e.index || !e.children, "Cannot specify children on an index route"), c(!n[s], 'Found a route id collision on id "' + s + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = o({}, e, t(e), {
              id: s
            });
            return n[s] = r, r
          } {
            let r = o({}, e, t(e), {
              id: s,
              children: void 0
            });
            return n[s] = r, e.children && (r.children = v(e.children, t, i, n)), r
          }
        }))
      }

      function b(e, t, r) {
        void 0 === r && (r = "/");
        let o = C(("string" == typeof t ? p(t) : t).pathname || "/", r);
        if (null == o) return null;
        let n = D(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(n);
        let a = null;
        for (let e = 0; null == a && e < n.length; ++e) a = j(n[e], U(o));
        return a
      }

      function w(e, t) {
        let {
          route: r,
          pathname: o,
          params: n
        } = e;
        return {
          id: r.id,
          pathname: o,
          params: n,
          data: t[r.id],
          handle: r.handle
        }
      }

      function D(e, t, r, o) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === o && (o = "");
        let n = (e, n, a) => {
          let i = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: n,
            route: e
          };
          i.relativePath.startsWith("/") && (c(i.relativePath.startsWith(o), 'Absolute route path "' + i.relativePath + '" nested under path "' + o + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(o.length));
          let s = $([o, i.relativePath]),
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
        let [r, ...o] = t, n = r.endsWith("?"), a = r.replace(/\?$/, "");
        if (0 === o.length) return n ? [a, ""] : [a];
        let i = E(o.join("/")),
          s = [];
        return s.push(...i.map((e => "" === e ? a : [a, e].join("/")))), n && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
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
          o = r.length;
        return r.some(L) && (o += P), t && (o += S), r.filter((e => !L(e))).reduce(((e, t) => e + (R.test(t) ? x : "" === t ? M : k)), o)
      }

      function j(e, t) {
        let {
          routesMeta: r
        } = e, o = {}, n = "/", a = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            s = e === r.length - 1,
            l = "/" === n ? t : t.slice(n.length) || "/",
            c = T({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: s
            }, l);
          if (!c) return null;
          Object.assign(o, c.params);
          let d = i.route;
          a.push({
            params: o,
            pathname: $([n, c.pathname]),
            pathnameBase: B($([n, c.pathnameBase])),
            route: d
          }), "/" !== c.pathnameBase && (n = $([n, c.pathnameBase]))
        }
        return a
      }

      function _(e, t) {
        void 0 === t && (t = {});
        let r = e;
        r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (d(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*"));
        const o = r.startsWith("/") ? "/" : "",
          n = e => null == e ? "" : "string" == typeof e ? e : String(e);
        return o + r.split(/\/+/).map(((e, r, o) => {
          if (r === o.length - 1 && "*" === e) return n(t["*"]);
          const a = e.match(/^:(\w+)(\??)$/);
          if (a) {
            const [, e, r] = a;
            let o = t[e];
            return c("?" === r || null != o, 'Missing ":' + e + '" param'), n(o)
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
        let [r, o] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), d("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let o = [],
            n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (o.push(t), "/([^\\/]+)")));
          return e.endsWith("*") ? (o.push("*"), n += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : "" !== e && "/" !== e && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), o]
        }(e.path, e.caseSensitive, e.end), n = t.match(r);
        if (!n) return null;
        let a = n[0],
          i = a.replace(/(.)\/+$/, "$1"),
          s = n.slice(1);
        return {
          params: o.reduce(((e, t, r) => {
            if ("*" === t) {
              let e = s[r] || "";
              i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
              try {
                return decodeURIComponent(e)
              } catch (r) {
                return d(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + r + ")."), e
              }
            }(s[r] || "", t), e
          }), {}),
          pathname: a,
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
          o = e.charAt(r);
        return o && "/" !== o ? null : e.slice(r) || "/"
      }

      function O(e, t) {
        void 0 === t && (t = "/");
        let {
          pathname: r,
          search: o = "",
          hash: n = ""
        } = "string" == typeof e ? p(e) : e, a = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: a,
          search: N(o),
          hash: q(n)
        }
      }

      function z(e, t, r, o) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(o) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function I(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function W(e, t, r, n) {
        let a;
        void 0 === n && (n = !1), "string" == typeof e ? a = p(e) : (a = o({}, e), c(!a.pathname || !a.pathname.includes("?"), z("?", "pathname", "search", a)), c(!a.pathname || !a.pathname.includes("#"), z("#", "pathname", "hash", a)), c(!a.search || !a.search.includes("#"), z("#", "search", "hash", a)));
        let i, s = "" === e || "" === a.pathname,
          l = s ? "/" : a.pathname;
        if (n || null == l) i = r;
        else {
          let e = t.length - 1;
          if (l.startsWith("..")) {
            let t = l.split("/");
            for (;
              ".." === t[0];) t.shift(), e -= 1;
            a.pathname = t.join("/")
          }
          i = e >= 0 ? t[e] : "/"
        }
        let d = O(a, i),
          u = l && "/" !== l && l.endsWith("/"),
          h = (s || "." === l) && r.endsWith("/");
        return d.pathname.endsWith("/") || !u && !h || (d.pathname += "/"), d
      }
      const $ = e => e.join("/").replace(/\/\/+/g, "/"),
        B = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        N = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        q = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        F = function(e, t) {
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
      class K {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], c(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
          let o = () => r(new H("Deferred data aborted"));
          this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", o), this.controller.signal.addEventListener("abort", o), this.data = Object.entries(e).reduce(((e, t) => {
            let [r, o] = t;
            return Object.assign(e, {
              [r]: this.trackPromise(r, o)
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
        onSettle(e, t, r, o) {
          if (this.controller.signal.aborted && r instanceof H) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
            get: () => r
          }), Promise.reject(r);
          if (this.pendingKeysSet.delete(t), this.done && this.unlistenAbortSignal(), void 0 === r && void 0 === o) {
            let r = new Error('Deferred data for key "' + t + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
            return Object.defineProperty(e, "_error", {
              get: () => r
            }), this.emit(!1, t), Promise.reject(r)
          }
          return void 0 === o ? (Object.defineProperty(e, "_error", {
            get: () => r
          }), this.emit(!1, t), Promise.reject(r)) : (Object.defineProperty(e, "_data", {
            get: () => o
          }), this.emit(!1, t), o)
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
              this.subscribe((o => {
                e.removeEventListener("abort", r), (o || this.done) && t(o)
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
            let [r, o] = t;
            return Object.assign(e, {
              [r]: Y(o)
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
      const J = function(e, t) {
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
          return n.set("Location", e), new Response(null, o({}, r, {
            headers: n
          }))
        },
        X = (e, t) => {
          let r = V(e, t);
          return r.headers.set("X-Remix-Reload-Document", "true"), r
        };
      class Q {
        constructor(e, t, r, o) {
          void 0 === o && (o = !1), this.status = e, this.statusText = t || "", this.internal = o, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function Z(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const G = ["post", "put", "patch", "delete"],
        ee = new Set(G),
        te = ["get", ...G],
        re = new Set(te),
        oe = new Set([301, 302, 303, 307, 308]),
        ne = new Set([307, 308]),
        ae = {
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
          a = !r;
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
          p = o({
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
              route: o
            } = Se(u);
          S = r, M = {
            [o.id]: t
          }
        }
        let k, P, L = !(S.some((e => e.route.lazy)) || S.some((e => e.route.loader)) && null == e.hydrationData),
          A = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: S,
            initialized: L,
            navigation: ae,
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
          _ = !1,
          T = !1,
          U = new Map,
          O = null,
          z = !1,
          I = !1,
          W = [],
          $ = [],
          B = new Map,
          N = 0,
          q = -1,
          F = new Map,
          H = new Set,
          K = new Map,
          Y = new Map,
          J = new Map,
          V = !1;

        function X(e, t) {
          A = o({}, A, e), g.forEach((e => e(A, {
            unstable_viewTransitionOpts: t
          })))
        }

        function Q(t, r) {
          var a, i;
          let l, c = null != A.actionData && null != A.navigation.formMethod && _e(A.navigation.formMethod) && "loading" === A.navigation.state && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect);
          l = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : c ? A.actionData : null;
          let d = r.loaderData ? Re(A.loaderData, r.loaderData, r.matches || [], r.errors) : A.loaderData,
            h = A.blockers;
          h.size > 0 && (h = new Map(h), h.forEach(((e, t) => h.set(t, se))));
          let f, p = !0 === _ || null != A.navigation.formMethod && _e(A.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
          if (s && (u = s, s = void 0), z || j === n.Pop || (j === n.Push ? e.history.push(t, t.state) : j === n.Replace && e.history.replace(t, t.state)), j === n.Pop) {
            let e = U.get(A.location.pathname);
            e && e.has(t.pathname) ? f = {
              currentLocation: A.location,
              nextLocation: t
            } : U.has(t.pathname) && (f = {
              currentLocation: t,
              nextLocation: A.location
            })
          } else if (T) {
            let e = U.get(A.location.pathname);
            e ? e.add(t.pathname) : (e = new Set([t.pathname]), U.set(A.location.pathname, e)), f = {
              currentLocation: A.location,
              nextLocation: t
            }
          }
          X(o({}, r, {
            actionData: l,
            loaderData: d,
            historyAction: j,
            location: t,
            initialized: !0,
            navigation: ae,
            revalidation: "idle",
            restoreScrollPosition: qe(t, r.matches || A.matches),
            preventScrollReset: p,
            blockers: h
          }), f), j = n.Pop, _ = !1, T = !1, z = !1, I = !1, W = [], $ = []
        }
        async function Z(t, r, a) {
          P && P.abort(), P = null, j = t, z = !0 === (a && a.startUninterruptedRevalidation),
            function(e, t) {
              if (D && R) {
                let r = Ne(e, t);
                D[r] = R()
              }
            }(A.location, A.matches), _ = !0 === (a && a.preventScrollReset), T = !0 === (a && a.enableViewTransition);
          let c = s || u,
            d = a && a.overrideNavigation,
            h = b(c, r, f);
          if (!h) {
            let e = Me(404, {
                pathname: r.pathname
              }),
              {
                matches: t,
                route: o
              } = Se(c);
            return Be(), void Q(r, {
              matches: t,
              loaderData: {},
              errors: {
                [o.id]: e
              }
            })
          }
          if (A.initialized && !I && (p = A.location, m = r, p.pathname === m.pathname && p.search === m.search && ("" === p.hash ? "" !== m.hash : p.hash === m.hash || "" !== m.hash)) && !(a && a.submission && _e(a.submission.formMethod))) return void Q(r, {
            matches: h
          });
          var p, m;
          P = new AbortController;
          let g, v, w = be(e.history, r, P.signal, a && a.submission);
          if (a && a.pendingError) v = {
            [xe(h).route.id]: a.pendingError
          };
          else if (a && a.submission && _e(a.submission.formMethod)) {
            let e = await async function(e, t, r, o, a) {
              void 0 === a && (a = {}), re();
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
              let d = Oe(o, t);
              if (d.route.action || d.route.lazy) {
                if (s = await ve("action", e, d, o, l, i, f), e.signal.aborted) return {
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
                return e = a && null != a.replace ? a.replace : s.location === A.location.pathname + A.location.search, await ee(A, s, {
                  submission: r,
                  replace: e
                }), {
                  shortCircuited: !0
                }
              }
              if (Ae(s)) {
                let e = xe(o, d.route.id);
                return !0 !== (a && a.replace) && (j = n.Push), {
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
            }(w, r, a.submission, h, {
              replace: a.replace
            });
            if (e.shortCircuited) return;
            g = e.pendingActionData, v = e.pendingActionError, d = Ie(r, a.submission), w = new Request(w.url, {
              signal: w.signal
            })
          }
          let {
            shortCircuited: E,
            loaderData: x,
            errors: S
          } = await async function(t, r, n, a, i, l, c, d, h) {
            let p = a || Ie(r, i),
              m = i || l || ze(p),
              y = s || u,
              [g, v] = pe(e.history, A, n, m, r, I, W, $, K, H, y, f, d, h);
            if (Be((e => !(n && n.some((t => t.route.id === e))) || g && g.some((t => t.route.id === e)))), q = ++N, 0 === g.length && 0 === v.length) {
              let e = ge();
              return Q(r, o({
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
              X(o({
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
              B.has(e.key) && me(e.key), e.controller && B.set(e.key, e.controller)
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
            P && P.signal.removeEventListener("abort", b), v.forEach((e => B.delete(e.key)));
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
            } = Ee(A, n, g, D, h, v, E, Y);
            Y.forEach(((e, t) => {
              e.subscribe((r => {
                (r || e.done) && Y.delete(t)
              }))
            }));
            let M = ge(),
              k = we(q);
            return o({
              loaderData: x,
              errors: S
            }, M || k || v.length > 0 ? {
              fetchers: new Map(A.fetchers)
            } : {})
          }(w, r, h, d, a && a.submission, a && a.fetcherSubmission, a && a.replace, g, v);
          E || (P = null, Q(r, o({
            matches: h
          }, g ? {
            actionData: g
          } : {}, {
            loaderData: x,
            errors: S
          })))
        }

        function G(e) {
          return A.fetchers.get(e) || ie
        }
        async function ee(a, i, s) {
          let {
            submission: l,
            fetcherSubmission: d,
            replace: u
          } = void 0 === s ? {} : s;
          i.revalidate && (I = !0);
          let p = h(a.location, i.location, {
            _isRedirect: !0
          });
          if (c(p, "Expected a location on the redirect navigation"), r) {
            let r = !1;
            if (i.reloadDocument) r = !0;
            else if (le.test(i.location)) {
              const o = e.history.createURL(i.location);
              r = o.origin !== t.location.origin || null == C(o.pathname, f)
            }
            if (r) return void(u ? t.location.replace(i.location) : t.location.assign(i.location))
          }
          P = null;
          let m = !0 === u ? n.Replace : n.Push,
            {
              formMethod: y,
              formAction: g,
              formEncType: v
            } = a.navigation;
          !l && !d && y && g && v && (l = ze(a.navigation));
          let b = l || d;
          if (ne.has(i.status) && b && _e(b.formMethod)) await Z(m, p, {
            submission: o({}, b, {
              formAction: i.location
            }),
            preventScrollReset: _
          });
          else {
            let e = Ie(p, l);
            await Z(m, p, {
              overrideNavigation: e,
              fetcherSubmission: d,
              preventScrollReset: _
            })
          }
        }
        async function te(t, r, o, n, a) {
          let s = await Promise.all([...o.map((e => ve("loader", a, e, r, l, i, f))), ...n.map((t => t.matches && t.match && t.controller ? ve("loader", be(e.history, t.path, t.controller.signal), t.match, t.matches, l, i, f) : {
              type: y.error,
              error: Me(404, {
                pathname: t.path
              })
            }))]),
            c = s.slice(0, o.length),
            d = s.slice(o.length);
          return await Promise.all([Te(t, o, c, c.map((() => a.signal)), !1, A.loaderData), Te(t, n.map((e => e.match)), d, n.map((e => e.controller ? e.controller.signal : null)), !0)]), {
            results: s,
            loaderResults: c,
            fetcherResults: d
          }
        }

        function re() {
          I = !0, W.push(...Be()), K.forEach(((e, t) => {
            B.has(t) && ($.push(t), me(t))
          }))
        }

        function oe(e, t, r) {
          let o = xe(A.matches, t);
          ue(e), X({
            errors: {
              [o.route.id]: r
            },
            fetchers: new Map(A.fetchers)
          })
        }

        function ue(e) {
          let t = A.fetchers.get(e);
          !B.has(e) || t && "loading" === t.state && F.has(e) || me(e), K.delete(e), F.delete(e), H.delete(e), A.fetchers.delete(e)
        }

        function me(e) {
          let t = B.get(e);
          c(t, "Expected fetch controller: " + e), t.abort(), B.delete(e)
        }

        function ye(e) {
          for (let t of e) {
            let e = $e(G(t).data);
            A.fetchers.set(t, e)
          }
        }

        function ge() {
          let e = [],
            t = !1;
          for (let r of H) {
            let o = A.fetchers.get(r);
            c(o, "Expected fetcher: " + r), "loading" === o.state && (H.delete(r), e.push(r), t = !0)
          }
          return ye(e), t
        }

        function we(e) {
          let t = [];
          for (let [r, o] of F)
            if (o < e) {
              let e = A.fetchers.get(r);
              c(e, "Expected fetcher: " + r), "loading" === e.state && (me(r), F.delete(r), t.push(r))
            } return ye(t), t.length > 0
        }

        function De(e) {
          A.blockers.delete(e), J.delete(e)
        }

        function Pe(e, t) {
          let r = A.blockers.get(e) || se;
          c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
          let o = new Map(A.blockers);
          o.set(e, t), X({
            blockers: o
          })
        }

        function Ce(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: o
          } = e;
          if (0 === J.size) return;
          J.size > 1 && d(!1, "A router only supports one blocker at a time");
          let n = Array.from(J.entries()),
            [a, i] = n[n.length - 1],
            s = A.blockers.get(a);
          return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: o
          }) ? a : void 0
        }

        function Be(e) {
          let t = [];
          return Y.forEach(((r, o) => {
            e && !e(o) || (r.cancel(), t.push(o), Y.delete(o))
          })), t
        }

        function Ne(e, t) {
          return E && E(e, t.map((e => w(e, A.loaderData)))) || e.key
        }

        function qe(e, t) {
          if (D) {
            let r = Ne(e, t),
              o = D[r];
            if ("number" == typeof o) return o
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
                  location: o,
                  delta: n
                } = t;
                if (V) return void(V = !1);
                d(0 === J.size || null != n, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let a = Ce({
                  currentLocation: A.location,
                  nextLocation: o,
                  historyAction: r
                });
                return a && null != n ? (V = !0, e.history.go(-1 * n), void Pe(a, {
                  state: "blocked",
                  location: o,
                  proceed() {
                    Pe(a, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: o
                    }), e.history.go(n)
                  },
                  reset() {
                    let e = new Map(A.blockers);
                    e.set(a, se), X({
                      blockers: e
                    })
                  }
                })) : Z(r, o)
              })), r) {
              ! function(e, t) {
                try {
                  let r = e.sessionStorage.getItem(de);
                  if (r) {
                    let e = JSON.parse(r);
                    for (let [r, o] of Object.entries(e || {})) o && Array.isArray(o) && t.set(r, new Set(o || []))
                  }
                } catch (e) {}
              }(t, U);
              let e = () => function(e, t) {
                if (t.size > 0) {
                  let r = {};
                  for (let [e, o] of t) r[e] = [...o];
                  try {
                    e.sessionStorage.setItem(de, JSON.stringify(r))
                  } catch (e) {
                    d(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                  }
                }
              }(t, U);
              t.addEventListener("pagehide", e), O = () => t.removeEventListener("pagehide", e)
            }
            return A.initialized || Z(n.Pop, A.location), k
          },
          subscribe: function(e) {
            return g.add(e), () => g.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (D = e, R = t, E = r || null, !x && A.navigation === ae) {
              x = !0;
              let e = qe(A.location, A.matches);
              null != e && X({
                restoreScrollPosition: e
              })
            }
            return () => {
              D = null, R = null, E = null
            }
          },
          navigate: async function t(r, a) {
            if ("number" == typeof r) return void e.history.go(r);
            let i = he(A.location, A.matches, f, p.v7_prependBasename, r, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative),
              {
                path: s,
                submission: l,
                error: c
              } = fe(p.v7_normalizeFormMethod, !1, i, a),
              d = A.location,
              u = h(A.location, s, a && a.state);
            u = o({}, u, e.history.encodeLocation(u));
            let m = a && null != a.replace ? a.replace : void 0,
              y = n.Push;
            !0 === m ? y = n.Replace : !1 === m || null != l && _e(l.formMethod) && l.formAction === A.location.pathname + A.location.search && (y = n.Replace);
            let g = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
              v = Ce({
                currentLocation: d,
                nextLocation: u,
                historyAction: y
              });
            if (!v) return await Z(y, u, {
              submission: l,
              pendingError: c,
              preventScrollReset: g,
              replace: a && a.replace,
              enableViewTransition: a && a.unstable_viewTransition
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
                }), t(r, a)
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
            if (a) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            B.has(t) && me(t);
            let h = s || u,
              m = he(A.location, A.matches, f, p.v7_prependBasename, n, r, null == d ? void 0 : d.relative),
              y = b(h, m, f);
            if (!y) return void oe(t, r, Me(404, {
              pathname: m
            }));
            let {
              path: g,
              submission: v,
              error: w
            } = fe(p.v7_normalizeFormMethod, !0, m, d);
            if (w) return void oe(t, r, w);
            let D = Oe(y, g);
            _ = !0 === (d && d.preventScrollReset), v && _e(v.formMethod) ? async function(t, r, n, a, d, h) {
              if (re(), K.delete(t), !a.route.action && !a.route.lazy) {
                let e = Me(405, {
                  method: h.formMethod,
                  pathname: n,
                  routeId: r
                });
                return void oe(t, r, e)
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
              B.set(t, m);
              let g = N,
                v = await ve("action", y, a, d, l, i, f);
              if (y.signal.aborted) return void(B.get(t) === m && B.delete(t));
              if (je(v)) {
                if (B.delete(t), q > g) {
                  let e = $e(void 0);
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
              if (Ae(v)) return void oe(t, r, v.error);
              if (Le(v)) throw Me(400, {
                type: "defer-action"
              });
              let w = A.navigation.location || A.location,
                D = be(e.history, w, m.signal),
                E = s || u,
                R = "idle" !== A.navigation.state ? b(E, A.navigation.location, f) : A.matches;
              c(R, "Didn't find any matches after fetcher action");
              let x = ++N;
              F.set(t, x);
              let S = We(h, v.data);
              A.fetchers.set(t, S);
              let [M, k] = pe(e.history, A, R, h, w, I, W, $, K, H, E, f, {
                [a.route.id]: v.data
              }, void 0);
              k.filter((e => e.key !== t)).forEach((e => {
                let t = e.key,
                  r = A.fetchers.get(t),
                  o = We(void 0, r ? r.data : void 0);
                A.fetchers.set(t, o), B.has(t) && me(t), e.controller && B.set(t, e.controller)
              })), X({
                fetchers: new Map(A.fetchers)
              });
              let L = () => k.forEach((e => me(e.key)));
              m.signal.addEventListener("abort", L);
              let {
                results: _,
                loaderResults: T,
                fetcherResults: U
              } = await te(A.matches, R, M, k, D);
              if (m.signal.aborted) return;
              m.signal.removeEventListener("abort", L), F.delete(t), B.delete(t), k.forEach((e => B.delete(e.key)));
              let C = ke(_);
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
              } = Ee(A, A.matches, M, T, void 0, k, U, Y);
              if (A.fetchers.has(t)) {
                let e = $e(v.data);
                A.fetchers.set(t, e)
              }
              let J = we(x);
              "loading" === A.navigation.state && x > q ? (c(j, "Expected pending action"), P && P.abort(), Q(A.navigation.location, {
                matches: R,
                loaderData: O,
                errors: z,
                fetchers: new Map(A.fetchers)
              })) : (X(o({
                errors: z,
                loaderData: Re(A.loaderData, O, R, z)
              }, J || k.length > 0 ? {
                fetchers: new Map(A.fetchers)
              } : {})), I = !1)
            }(t, r, g, D, y, v): (K.set(t, {
              routeId: r,
              path: g
            }), async function(t, r, o, n, a, s) {
              let d = A.fetchers.get(t),
                u = We(s, d ? d.data : void 0);
              A.fetchers.set(t, u), X({
                fetchers: new Map(A.fetchers)
              });
              let h = new AbortController,
                p = be(e.history, o, h.signal);
              B.set(t, h);
              let m = N,
                y = await ve("loader", p, n, a, l, i, f);
              if (Le(y) && (y = await Ue(y, p.signal, !0) || y), B.get(t) === h && B.delete(t), p.signal.aborted) return;
              if (je(y)) {
                if (q > m) {
                  let e = $e(void 0);
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
              let g = $e(y.data);
              A.fetchers.set(t, g), X({
                fetchers: new Map(A.fetchers)
              })
            }(t, r, g, D, y, v))
          },
          revalidate: function() {
            re(), X({
              revalidation: "loading"
            }), "submitting" !== A.navigation.state && ("idle" !== A.navigation.state ? Z(j || A.historyAction, A.navigation.location, {
              overrideNavigation: A.navigation
            }) : Z(A.historyAction, A.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: G,
          deleteFetcher: ue,
          dispose: function() {
            m && m(), O && O(), g.clear(), P && P.abort(), A.fetchers.forEach(((e, t) => ue(t))), A.blockers.forEach(((e, t) => De(t)))
          },
          getBlocker: function(e, t) {
            let r = A.blockers.get(e) || se;
            return J.get(e) !== t && J.set(e, t), r
          },
          deleteBlocker: De,
          _internalFetchControllers: B,
          _internalActiveDeferreds: Y,
          _internalSetRoutes: function(e) {
            l = {}, s = v(e, i, void 0, l)
          }
        }, k
      }

      function he(e, t, r, o, n, a, i) {
        let s, l;
        if (null != a && "path" !== i) {
          s = [];
          for (let e of t)
            if (s.push(e), e.route.id === a) {
              l = e;
              break
            }
        } else s = t, l = t[t.length - 1];
        let c = W(n || ".", I(s).map((e => e.pathnameBase)), C(e.pathname, r) || e.pathname, "path" === i);
        return null == n && (c.search = e.search, c.hash = e.hash), null != n && "" !== n && "." !== n || !l || !l.route.index || Ce(c.search) || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), o && "/" !== r && (c.pathname = "/" === c.pathname ? r : $([r, c.pathname])), f(c)
      }

      function fe(e, t, r, o) {
        if (!o || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
          }(o)) return {
          path: r
        };
        if (o.formMethod && (n = o.formMethod, !re.has(n.toLowerCase()))) return {
          path: r,
          error: Me(405, {
            method: o.formMethod
          })
        };
        var n;
        let a, i, s = () => ({
            path: r,
            error: Me(400, {
              type: "invalid-body"
            })
          }),
          l = o.formMethod || "get",
          d = e ? l.toUpperCase() : l.toLowerCase(),
          u = Pe(r);
        if (void 0 !== o.body) {
          if ("text/plain" === o.formEncType) {
            if (!_e(d)) return s();
            let e = "string" == typeof o.body ? o.body : o.body instanceof FormData || o.body instanceof URLSearchParams ? Array.from(o.body.entries()).reduce(((e, t) => {
              let [r, o] = t;
              return "" + e + r + "=" + o + "\n"
            }), "") : String(o.body);
            return {
              path: r,
              submission: {
                formMethod: d,
                formAction: u,
                formEncType: o.formEncType,
                formData: void 0,
                json: void 0,
                text: e
              }
            }
          }
          if ("application/json" === o.formEncType) {
            if (!_e(d)) return s();
            try {
              let e = "string" == typeof o.body ? JSON.parse(o.body) : o.body;
              return {
                path: r,
                submission: {
                  formMethod: d,
                  formAction: u,
                  formEncType: o.formEncType,
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
        if (c("function" == typeof FormData, "FormData is not available in this environment"), o.formData) a = we(o.formData), i = o.formData;
        else if (o.body instanceof FormData) a = we(o.body), i = o.body;
        else if (o.body instanceof URLSearchParams) a = o.body, i = De(a);
        else if (null == o.body) a = new URLSearchParams, i = new FormData;
        else try {
          a = new URLSearchParams(o.body), i = De(a)
        } catch (e) {
          return s()
        }
        let h = {
          formMethod: d,
          formAction: u,
          formEncType: o && o.formEncType || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0
        };
        if (_e(h.formMethod)) return {
          path: r,
          submission: h
        };
        let m = p(r);
        return t && m.search && Ce(m.search) && a.append("index", ""), m.search = "?" + a, {
          path: f(m),
          submission: h
        }
      }

      function pe(e, t, r, n, a, i, s, l, c, d, u, h, f, p) {
        let m = p ? Object.values(p)[0] : f ? Object.values(f)[0] : void 0,
          y = e.createURL(t.location),
          g = e.createURL(a),
          v = p ? Object.keys(p)[0] : void 0,
          w = function(e, t) {
            let r = e;
            if (t) {
              let o = e.findIndex((e => e.route.id === t));
              o >= 0 && (r = e.slice(0, o))
            }
            return r
          }(r, v).filter(((e, r) => {
            if (e.route.lazy) return !0;
            if (null == e.route.loader) return !1;
            if (function(e, t, r) {
                let o = !t || r.route.id !== t.route.id,
                  n = void 0 === e[r.route.id];
                return o || n
              }(t.loaderData, t.matches[r], e) || s.some((t => t === e.route.id))) return !0;
            let a = t.matches[r],
              l = e;
            return ye(e, o({
              currentUrl: y,
              currentParams: a.params,
              nextUrl: g,
              nextParams: l.params
            }, n, {
              actionResult: m,
              defaultShouldRevalidate: i || y.pathname + y.search === g.pathname + g.search || y.search !== g.search || me(a, l)
            }))
          })),
          D = [];
        return c.forEach(((e, a) => {
          if (!r.some((t => t.route.id === e.routeId))) return;
          let s = b(u, e.path, h);
          if (!s) return void D.push({
            key: a,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let c = t.fetchers.get(a),
            f = Oe(s, e.path),
            p = !1;
          p = !d.has(a) && (!!l.includes(a) || (c && "idle" !== c.state && void 0 === c.data ? i : ye(f, o({
            currentUrl: y,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: g,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: m,
            defaultShouldRevalidate: i
          })))), p && D.push({
            key: a,
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
        let a = r[e.id];
        c(a, "No route found in manifest");
        let i = {};
        for (let e in n) {
          let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
          d(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || g.has(e) || (i[e] = n[e])
        }
        Object.assign(a, i), Object.assign(a, o({}, t(a), {
          lazy: void 0
        }))
      }
      async function ve(e, t, r, o, n, a, i, s) {
        let l, d, u;
        void 0 === s && (s = {});
        let h = e => {
          let o, n = new Promise(((e, t) => o = t));
          return u = () => o(), t.signal.addEventListener("abort", u), Promise.race([e({
            request: t,
            params: r.params,
            context: s.requestContext
          }), n])
        };
        try {
          let o = r.route[e];
          if (r.route.lazy)
            if (o) {
              let e, t = await Promise.all([h(o).catch((t => {
                e = t
              })), ge(r.route, a, n)]);
              if (e) throw e;
              d = t[0]
            } else {
              if (await ge(r.route, a, n), o = r.route[e], !o) {
                if ("action" === e) {
                  let e = new URL(t.url),
                    o = e.pathname + e.search;
                  throw Me(405, {
                    method: t.method,
                    pathname: o,
                    routeId: r.route.id
                  })
                }
                return {
                  type: y.data,
                  data: void 0
                }
              }
              d = await h(o)
            }
          else {
            if (!o) {
              let e = new URL(t.url);
              throw Me(404, {
                pathname: e.pathname + e.search
              })
            }
            d = await h(o)
          }
          c(void 0 !== d, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          l = y.error, d = e
        } finally {
          u && t.signal.removeEventListener("abort", u)
        }
        if (null != (f = d) && "number" == typeof f.status && "string" == typeof f.statusText && "object" == typeof f.headers && void 0 !== f.body) {
          let e, n = d.status;
          if (oe.has(n)) {
            let e = d.headers.get("Location");
            if (c(e, "Redirects returned/thrown from loaders/actions must have a Location header"), le.test(e)) {
              if (!s.isStaticRequest) {
                let r = new URL(t.url),
                  o = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  n = null != C(o.pathname, i);
                o.origin === r.origin && n && (e = o.pathname + o.search + o.hash)
              }
            } else e = he(new URL(t.url), o.slice(0, o.indexOf(r) + 1), i, !0, e);
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
          let a = d.headers.get("Content-Type");
          return e = a && /\bapplication\/json\b/.test(a) ? await d.json() : await d.text(), l === y.error ? {
            type: l,
            error: new Q(n, d.statusText, e),
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

      function be(e, t, r, o) {
        let n = e.createURL(Pe(t)).toString(),
          a = {
            signal: r
          };
        if (o && _e(o.formMethod)) {
          let {
            formMethod: e,
            formEncType: t
          } = o;
          a.method = e.toUpperCase(), "application/json" === t ? (a.headers = new Headers({
            "Content-Type": t
          }), a.body = JSON.stringify(o.json)) : "text/plain" === t ? a.body = o.text : "application/x-www-form-urlencoded" === t && o.formData ? a.body = we(o.formData) : a.body = o.formData
        }
        return new Request(n, a)
      }

      function we(e) {
        let t = new URLSearchParams;
        for (let [r, o] of e.entries()) t.append(r, "string" == typeof o ? o : o.name);
        return t
      }

      function De(e) {
        let t = new FormData;
        for (let [r, o] of e.entries()) t.append(r, o);
        return t
      }

      function Ee(e, t, r, n, a, i, s, l) {
        let {
          loaderData: d,
          errors: u
        } = function(e, t, r, o, n) {
          let a, i = {},
            s = null,
            l = !1,
            d = {};
          return r.forEach(((r, u) => {
            let h = t[u].route.id;
            if (c(!je(r), "Cannot handle redirect results in processLoaderData"), Ae(r)) {
              let t = xe(e, h),
                n = r.error;
              o && (n = Object.values(o)[0], o = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = n), i[h] = void 0, l || (l = !0, a = Z(r.error) ? r.error.status : 500), r.headers && (d[h] = r.headers)
            } else Le(r) ? (n.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || l || (a = r.statusCode), r.headers && (d[h] = r.headers)
          })), o && (s = o, i[Object.keys(o)[0]] = void 0), {
            loaderData: i,
            errors: s,
            statusCode: a || 200,
            loaderHeaders: d
          }
        }(t, r, n, a, l);
        for (let t = 0; t < i.length; t++) {
          let {
            key: r,
            match: n,
            controller: a
          } = i[t];
          c(void 0 !== s && void 0 !== s[t], "Did not find corresponding fetcher result");
          let l = s[t];
          if (!a || !a.signal.aborted)
            if (Ae(l)) {
              let t = xe(e.matches, null == n ? void 0 : n.route.id);
              u && u[t.route.id] || (u = o({}, u, {
                [t.route.id]: l.error
              })), e.fetchers.delete(r)
            } else if (je(l)) c(!1, "Unhandled fetcher revalidation redirect");
          else if (Le(l)) c(!1, "Unhandled fetcher deferred data");
          else {
            let t = $e(l.data);
            e.fetchers.set(r, t)
          }
        }
        return {
          loaderData: d,
          errors: u
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
          routeId: o,
          method: n,
          type: a
        } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", n && r && o ? s = "You made a " + n + ' request to "' + r + '" but did not provide a `loader` for route "' + o + '", so there is no way to handle the request.' : "defer-action" === a ? s = "defer() is not supported in actions" : "invalid-body" === a && (s = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", s = 'Route "' + o + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", n && r && o ? s = "You made a " + n.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + o + '", so there is no way to handle the request.' : n && (s = 'Invalid request method "' + n.toUpperCase() + '"')), new Q(e || 500, i, new Error(s), !0)
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
        return f(o({}, "string" == typeof e ? p(e) : e, {
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

      function _e(e) {
        return ee.has(e.toLowerCase())
      }
      async function Te(e, t, r, o, n, a) {
        for (let i = 0; i < r.length; i++) {
          let s = r[i],
            l = t[i];
          if (!l) continue;
          let d = e.find((e => e.route.id === l.route.id)),
            u = null != d && !me(d, l) && void 0 !== (a && a[l.route.id]);
          if (Le(s) && (n || u)) {
            let e = o[i];
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
        let o = I(e);
        return o[o.length - 1]
      }

      function ze(e) {
        let {
          formMethod: t,
          formAction: r,
          formEncType: o,
          text: n,
          formData: a,
          json: i
        } = e;
        if (t && r && o) return null != n ? {
          formMethod: t,
          formAction: r,
          formEncType: o,
          formData: void 0,
          json: void 0,
          text: n
        } : null != a ? {
          formMethod: t,
          formAction: r,
          formEncType: o,
          formData: a,
          json: void 0,
          text: void 0
        } : void 0 !== i ? {
          formMethod: t,
          formAction: r,
          formEncType: o,
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

      function $e(e) {
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
//# sourceMappingURL=7982fd346bbbf4a5befc55f59ba8ff0f.js.map