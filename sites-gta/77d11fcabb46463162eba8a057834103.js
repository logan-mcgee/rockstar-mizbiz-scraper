/*! For license information please see 77d11fcabb46463162eba8a057834103.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [410], {
    6410: (e, t, r) => {
      function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, n.apply(this, arguments)
      }
      var o;
      r.d(t, {
          AV: () => N,
          Ep: () => f,
          Gn: () => T,
          J0: () => c,
          LX: () => U,
          OF: () => Z,
          PP: () => i,
          PQ: () => X,
          RQ: () => $,
          WK: () => Q,
          WS: () => w,
          X3: () => H,
          Zn: () => O,
          Zq: () => I,
          aU: () => o,
          cP: () => p,
          fZ: () => V,
          fp: () => b,
          i3: () => _,
          lX: () => s,
          p7: () => ue,
          pC: () => W,
          q_: () => l,
          qp: () => se,
          uX: () => Y
        }),
        function(e) {
          e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(o || (o = {}));
      const a = "popstate";

      function i(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: n,
          v5Compat: a = !1
        } = e;
        t = r.map(((e, t) => m(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = c(null == n ? t.length - 1 : n),
          s = o.Pop,
          l = null;

        function c(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function u() {
          return t[i]
        }

        function m(e, r, n) {
          void 0 === r && (r = null);
          let o = h(t ? u().pathname : "/", e, r, n);
          return d("/" === o.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), o
        }

        function v(e) {
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
          createHref: v,
          createURL: e => new URL(v(e), "http://localhost"),
          encodeLocation(e) {
            let t = "string" == typeof e ? p(e) : e;
            return {
              pathname: t.pathname || "",
              search: t.search || "",
              hash: t.hash || ""
            }
          },
          push(e, r) {
            s = o.Push;
            let n = m(e, r);
            i += 1, t.splice(i, t.length, n), a && l && l({
              action: s,
              location: n,
              delta: 1
            })
          },
          replace(e, r) {
            s = o.Replace;
            let n = m(e, r);
            t[i] = n, a && l && l({
              action: s,
              location: n,
              delta: 0
            })
          },
          go(e) {
            s = o.Pop;
            let r = c(i + e),
              n = t[r];
            i = r, l && l({
              action: s,
              location: n,
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
            search: n,
            hash: o
          } = e.location;
          return h("", {
            pathname: r,
            search: n,
            hash: o
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          return "string" == typeof t ? t : f(t)
        }), null, e)
      }

      function l(e) {
        return void 0 === e && (e = {}), m((function(e, t) {
          let {
            pathname: r = "/",
            search: n = "",
            hash: o = ""
          } = p(e.location.hash.substr(1));
          return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), h("", {
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
          return n + "#" + ("string" == typeof t ? t : f(t))
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

      function h(e, t, r, o) {
        return void 0 === r && (r = null), n({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? p(t) : t, {
          state: r,
          key: t && t.key || o || Math.random().toString(36).substr(2, 8)
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

      function m(e, t, r, i) {
        void 0 === i && (i = {});
        let {
          window: s = document.defaultView,
          v5Compat: l = !1
        } = i, d = s.history, p = o.Pop, m = null, v = y();

        function y() {
          return (d.state || {
            idx: null
          }).idx
        }

        function g() {
          p = o.Pop;
          let e = y(),
            t = null == e ? null : e - v;
          v = e, m && m({
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
        null == v && (v = 0, d.replaceState(n({}, d.state, {
          idx: v
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
            return s.addEventListener(a, g), m = e, () => {
              s.removeEventListener(a, g), m = null
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
            p = o.Push;
            let n = h(w.location, e, t);
            r && r(n, e), v = y() + 1;
            let a = u(n, v),
              i = w.createHref(n);
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
            p = o.Replace;
            let n = h(w.location, e, t);
            r && r(n, e), v = y();
            let a = u(n, v),
              i = w.createHref(n);
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
      var v;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(v || (v = {}));
      const y = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function g(e, t, r, o) {
        return void 0 === r && (r = []), void 0 === o && (o = {}), e.map(((e, a) => {
          let i = [...r, a],
            s = "string" == typeof e.id ? e.id : i.join("-");
          if (c(!0 !== e.index || !e.children, "Cannot specify children on an index route"), c(!o[s], 'Found a route id collision on id "' + s + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = n({}, e, t(e), {
              id: s
            });
            return o[s] = r, r
          } {
            let r = n({}, e, t(e), {
              id: s,
              children: void 0
            });
            return o[s] = r, e.children && (r.children = g(e.children, t, i, o)), r
          }
        }))
      }

      function b(e, t, r) {
        void 0 === r && (r = "/");
        let n = O(("string" == typeof t ? p(t) : t).pathname || "/", r);
        if (null == n) return null;
        let o = D(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(o);
        let a = null;
        for (let e = 0; null == a && e < o.length; ++e) a = j(o[e], C(n));
        return a
      }

      function w(e, t) {
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

      function D(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
        let o = (e, o, a) => {
          let i = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e
          };
          i.relativePath.startsWith("/") && (c(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
          let s = $([n, i.relativePath]),
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
            for (let r of E(e.path)) o(e, t, r);
          else o(e, t)
        })), t
      }

      function E(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t, o = r.endsWith("?"), a = r.replace(/\?$/, "");
        if (0 === n.length) return o ? [a, ""] : [a];
        let i = E(n.join("/")),
          s = [];
        return s.push(...i.map((e => "" === e ? a : [a, e].join("/")))), o && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const R = /^:\w+$/,
        x = 3,
        S = 2,
        P = 1,
        M = 10,
        k = -2,
        L = e => "*" === e;

      function A(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(L) && (n += k), t && (n += S), r.filter((e => !L(e))).reduce(((e, t) => e + (R.test(t) ? x : "" === t ? P : M)), n)
      }

      function j(e, t) {
        let {
          routesMeta: r
        } = e, n = {}, o = "/", a = [];
        for (let e = 0; e < r.length; ++e) {
          let i = r[e],
            s = e === r.length - 1,
            l = "/" === o ? t : t.slice(o.length) || "/",
            c = U({
              path: i.relativePath,
              caseSensitive: i.caseSensitive,
              end: s
            }, l);
          if (!c) return null;
          Object.assign(n, c.params);
          let d = i.route;
          a.push({
            params: n,
            pathname: $([o, c.pathname]),
            pathnameBase: B($([o, c.pathnameBase])),
            route: d
          }), "/" !== c.pathnameBase && (o = $([o, c.pathnameBase]))
        }
        return a
      }

      function T(e, t) {
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

      function U(e, t) {
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
          s = o.slice(1);
        return {
          params: n.reduce(((e, t, r) => {
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

      function C(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return d(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function O(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/"
      }

      function _(e, t) {
        void 0 === t && (t = "/");
        let {
          pathname: r,
          search: n = "",
          hash: o = ""
        } = "string" == typeof e ? p(e) : e, a = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: a,
          search: q(n),
          hash: F(o)
        }
      }

      function z(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function I(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function W(e, t, r, o) {
        let a;
        void 0 === o && (o = !1), "string" == typeof e ? a = p(e) : (a = n({}, e), c(!a.pathname || !a.pathname.includes("?"), z("?", "pathname", "search", a)), c(!a.pathname || !a.pathname.includes("#"), z("#", "pathname", "hash", a)), c(!a.search || !a.search.includes("#"), z("#", "search", "hash", a)));
        let i, s = "" === e || "" === a.pathname,
          l = s ? "/" : a.pathname;
        if (o || null == l) i = r;
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
        let d = _(a, i),
          u = l && "/" !== l && l.endsWith("/"),
          h = (s || "." === l) && r.endsWith("/");
        return d.pathname.endsWith("/") || !u && !h || (d.pathname += "/"), d
      }
      const $ = e => e.join("/").replace(/\/\/+/g, "/"),
        B = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        q = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        F = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        N = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            o = new Headers(r.headers);
          return o.has("Content-Type") || o.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), n({}, r, {
            headers: o
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
          let r = Promise.race([t, this.abortPromise]).then((t => this.onSettle(r, e, void 0, t)), (t => this.onSettle(r, e, t)));
          return r.catch((() => {})), Object.defineProperty(r, "_tracked", {
            get: () => !0
          }), r
        }
        onSettle(e, t, r, n) {
          if (this.controller.signal.aborted && r instanceof H) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
      const X = function(e, t) {
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
          let o = new Headers(r.headers);
          return o.set("Location", e), new Response(null, n({}, r, {
            headers: o
          }))
        },
        V = (e, t) => {
          let r = Y(e, t);
          return r.headers.set("X-Remix-Reload-Document", "true"), r
        };
      class Z {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function Q(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const G = ["post", "put", "patch", "delete"],
        ee = new Set(G),
        te = ["get", ...G],
        re = new Set(te),
        ne = new Set([301, 302, 303, 307, 308]),
        oe = new Set([307, 308]),
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
          u = g(e.routes, i, void 0, l),
          f = e.basename || "/",
          p = n({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
          }, e.future),
          m = null,
          y = new Set,
          D = null,
          E = null,
          R = null,
          x = null != e.hydrationData,
          S = b(u, e.history.location, f),
          P = null;
        if (null == S) {
          let t = Pe(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: n
            } = Se(u);
          S = r, P = {
            [n.id]: t
          }
        }
        let M, k, L = !(S.some((e => e.route.lazy)) || S.some((e => e.route.loader)) && null == e.hydrationData),
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
            errors: e.hydrationData && e.hydrationData.errors || P,
            fetchers: new Map,
            blockers: new Map
          },
          j = o.Pop,
          T = !1,
          U = !1,
          C = new Map,
          _ = null,
          z = !1,
          I = !1,
          W = [],
          $ = [],
          B = new Map,
          q = 0,
          F = -1,
          N = new Map,
          H = new Set,
          K = new Map,
          J = new Map,
          X = new Map,
          Y = !1;

        function V(e, t) {
          A = n({}, A, e), y.forEach((e => e(A, {
            unstable_viewTransitionOpts: t
          })))
        }

        function Z(t, r) {
          var a, i;
          let l, c = null != A.actionData && null != A.navigation.formMethod && Te(A.navigation.formMethod) && "loading" === A.navigation.state && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect);
          l = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : c ? A.actionData : null;
          let d = r.loaderData ? Re(A.loaderData, r.loaderData, r.matches || [], r.errors) : A.loaderData,
            h = A.blockers;
          h.size > 0 && (h = new Map(h), h.forEach(((e, t) => h.set(t, se))));
          let f, p = !0 === T || null != A.navigation.formMethod && Te(A.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
          if (s && (u = s, s = void 0), z || j === o.Pop || (j === o.Push ? e.history.push(t, t.state) : j === o.Replace && e.history.replace(t, t.state)), j === o.Pop) {
            let e = C.get(A.location.pathname);
            e && e.has(t.pathname) ? f = {
              currentLocation: A.location,
              nextLocation: t
            } : C.has(t.pathname) && (f = {
              currentLocation: t,
              nextLocation: A.location
            })
          } else if (U) {
            let e = C.get(A.location.pathname);
            e ? e.add(t.pathname) : (e = new Set([t.pathname]), C.set(A.location.pathname, e)), f = {
              currentLocation: A.location,
              nextLocation: t
            }
          }
          V(n({}, r, {
            actionData: l,
            loaderData: d,
            historyAction: j,
            location: t,
            initialized: !0,
            navigation: ae,
            revalidation: "idle",
            restoreScrollPosition: Fe(t, r.matches || A.matches),
            preventScrollReset: p,
            blockers: h
          }), f), j = o.Pop, T = !1, U = !1, z = !1, I = !1, W = [], $ = []
        }
        async function Q(t, r, a) {
          k && k.abort(), k = null, j = t, z = !0 === (a && a.startUninterruptedRevalidation),
            function(e, t) {
              if (D && R) {
                let r = qe(e, t);
                D[r] = R()
              }
            }(A.location, A.matches), T = !0 === (a && a.preventScrollReset), U = !0 === (a && a.enableViewTransition);
          let c = s || u,
            d = a && a.overrideNavigation,
            h = b(c, r, f);
          if (!h) {
            let e = Pe(404, {
                pathname: r.pathname
              }),
              {
                matches: t,
                route: n
              } = Se(c);
            return Be(), void Z(r, {
              matches: t,
              loaderData: {},
              errors: {
                [n.id]: e
              }
            })
          }
          if (A.initialized && !I && (p = A.location, m = r, p.pathname === m.pathname && p.search === m.search && ("" === p.hash ? "" !== m.hash : p.hash === m.hash || "" !== m.hash)) && !(a && a.submission && Te(a.submission.formMethod))) return void Z(r, {
            matches: h
          });
          var p, m;
          k = new AbortController;
          let y, g, w = be(e.history, r, k.signal, a && a.submission);
          if (a && a.pendingError) g = {
            [xe(h).route.id]: a.pendingError
          };
          else if (a && a.submission && Te(a.submission.formMethod)) {
            let e = await async function(e, t, r, n, a) {
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
              V({
                navigation: c
              });
              let d = _e(n, t);
              if (d.route.action || d.route.lazy) {
                if (s = await ge("action", e, d, n, l, i, f), e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else s = {
                type: v.error,
                error: Pe(405, {
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
                let e = xe(n, d.route.id);
                return !0 !== (a && a.replace) && (j = o.Push), {
                  pendingActionData: {},
                  pendingActionError: {
                    [e.route.id]: s.error
                  }
                }
              }
              if (Le(s)) throw Pe(400, {
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
            y = e.pendingActionData, g = e.pendingActionError, d = Ie(r, a.submission), w = new Request(w.url, {
              signal: w.signal
            })
          }
          let {
            shortCircuited: E,
            loaderData: x,
            errors: S
          } = await async function(t, r, o, a, i, l, c, d, h) {
            let p = a || Ie(r, i),
              m = i || l || ze(p),
              v = s || u,
              [y, g] = pe(e.history, A, o, m, r, I, W, $, K, H, v, f, d, h);
            if (Be((e => !(o && o.some((t => t.route.id === e))) || y && y.some((t => t.route.id === e)))), F = ++q, 0 === y.length && 0 === g.length) {
              let e = ye();
              return Z(r, n({
                matches: o,
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
              g.forEach((e => {
                let t = A.fetchers.get(e.key),
                  r = We(void 0, t ? t.data : void 0);
                A.fetchers.set(e.key, r)
              }));
              let e = d || A.actionData;
              V(n({
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
              B.has(e.key) && me(e.key), e.controller && B.set(e.key, e.controller)
            }));
            let b = () => g.forEach((e => me(e.key)));
            k && k.signal.addEventListener("abort", b);
            let {
              results: w,
              loaderResults: D,
              fetcherResults: E
            } = await te(A.matches, o, y, g, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            k && k.signal.removeEventListener("abort", b), g.forEach((e => B.delete(e.key)));
            let R = Me(w);
            if (R) {
              if (R.idx >= y.length) {
                let e = g[R.idx - y.length].key;
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
            } = Ee(A, o, y, D, h, g, E, J);
            J.forEach(((e, t) => {
              e.subscribe((r => {
                (r || e.done) && J.delete(t)
              }))
            }));
            let P = ye(),
              M = we(F);
            return n({
              loaderData: x,
              errors: S
            }, P || M || g.length > 0 ? {
              fetchers: new Map(A.fetchers)
            } : {})
          }(w, r, h, d, a && a.submission, a && a.fetcherSubmission, a && a.replace, y, g);
          E || (k = null, Z(r, n({
            matches: h
          }, y ? {
            actionData: y
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
              const n = e.history.createURL(i.location);
              r = n.origin !== t.location.origin || null == O(n.pathname, f)
            }
            if (r) return void(u ? t.location.replace(i.location) : t.location.assign(i.location))
          }
          k = null;
          let m = !0 === u ? o.Replace : o.Push,
            {
              formMethod: v,
              formAction: y,
              formEncType: g
            } = a.navigation;
          !l && !d && v && y && g && (l = ze(a.navigation));
          let b = l || d;
          if (oe.has(i.status) && b && Te(b.formMethod)) await Q(m, p, {
            submission: n({}, b, {
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
        async function te(t, r, n, o, a) {
          let s = await Promise.all([...n.map((e => ge("loader", a, e, r, l, i, f))), ...o.map((t => t.matches && t.match && t.controller ? ge("loader", be(e.history, t.path, t.controller.signal), t.match, t.matches, l, i, f) : {
              type: v.error,
              error: Pe(404, {
                pathname: t.path
              })
            }))]),
            c = s.slice(0, n.length),
            d = s.slice(n.length);
          return await Promise.all([Ue(t, n, c, c.map((() => a.signal)), !1, A.loaderData), Ue(t, o.map((e => e.match)), d, o.map((e => e.controller ? e.controller.signal : null)), !0)]), {
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

        function ne(e, t, r) {
          let n = xe(A.matches, t);
          ue(e), V({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(A.fetchers)
          })
        }

        function ue(e) {
          let t = A.fetchers.get(e);
          !B.has(e) || t && "loading" === t.state && N.has(e) || me(e), K.delete(e), N.delete(e), H.delete(e), A.fetchers.delete(e)
        }

        function me(e) {
          let t = B.get(e);
          c(t, "Expected fetch controller: " + e), t.abort(), B.delete(e)
        }

        function ve(e) {
          for (let t of e) {
            let e = $e(G(t).data);
            A.fetchers.set(t, e)
          }
        }

        function ye() {
          let e = [],
            t = !1;
          for (let r of H) {
            let n = A.fetchers.get(r);
            c(n, "Expected fetcher: " + r), "loading" === n.state && (H.delete(r), e.push(r), t = !0)
          }
          return ve(e), t
        }

        function we(e) {
          let t = [];
          for (let [r, n] of N)
            if (n < e) {
              let e = A.fetchers.get(r);
              c(e, "Expected fetcher: " + r), "loading" === e.state && (me(r), N.delete(r), t.push(r))
            } return ve(t), t.length > 0
        }

        function De(e) {
          A.blockers.delete(e), X.delete(e)
        }

        function ke(e, t) {
          let r = A.blockers.get(e) || se;
          c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
          let n = new Map(A.blockers);
          n.set(e, t), V({
            blockers: n
          })
        }

        function Oe(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === X.size) return;
          X.size > 1 && d(!1, "A router only supports one blocker at a time");
          let o = Array.from(X.entries()),
            [a, i] = o[o.length - 1],
            s = A.blockers.get(a);
          return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? a : void 0
        }

        function Be(e) {
          let t = [];
          return J.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), J.delete(n))
          })), t
        }

        function qe(e, t) {
          return E && E(e, t.map((e => w(e, A.loaderData)))) || e.key
        }

        function Fe(e, t) {
          if (D) {
            let r = qe(e, t),
              n = D[r];
            if ("number" == typeof n) return n
          }
          return null
        }
        return M = {
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
                  location: n,
                  delta: o
                } = t;
                if (Y) return void(Y = !1);
                d(0 === X.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let a = Oe({
                  currentLocation: A.location,
                  nextLocation: n,
                  historyAction: r
                });
                return a && null != o ? (Y = !0, e.history.go(-1 * o), void ke(a, {
                  state: "blocked",
                  location: n,
                  proceed() {
                    ke(a, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: n
                    }), e.history.go(o)
                  },
                  reset() {
                    let e = new Map(A.blockers);
                    e.set(a, se), V({
                      blockers: e
                    })
                  }
                })) : Q(r, n)
              })), r) {
              ! function(e, t) {
                try {
                  let r = e.sessionStorage.getItem(de);
                  if (r) {
                    let e = JSON.parse(r);
                    for (let [r, n] of Object.entries(e || {})) n && Array.isArray(n) && t.set(r, new Set(n || []))
                  }
                } catch (e) {}
              }(t, C);
              let e = () => function(e, t) {
                if (t.size > 0) {
                  let r = {};
                  for (let [e, n] of t) r[e] = [...n];
                  try {
                    e.sessionStorage.setItem(de, JSON.stringify(r))
                  } catch (e) {
                    d(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                  }
                }
              }(t, C);
              t.addEventListener("pagehide", e), _ = () => t.removeEventListener("pagehide", e)
            }
            return A.initialized || Q(o.Pop, A.location), M
          },
          subscribe: function(e) {
            return y.add(e), () => y.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (D = e, R = t, E = r || null, !x && A.navigation === ae) {
              x = !0;
              let e = Fe(A.location, A.matches);
              null != e && V({
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
            u = n({}, u, e.history.encodeLocation(u));
            let m = a && null != a.replace ? a.replace : void 0,
              v = o.Push;
            !0 === m ? v = o.Replace : !1 === m || null != l && Te(l.formMethod) && l.formAction === A.location.pathname + A.location.search && (v = o.Replace);
            let y = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
              g = Oe({
                currentLocation: d,
                nextLocation: u,
                historyAction: v
              });
            if (!g) return await Q(v, u, {
              submission: l,
              pendingError: c,
              preventScrollReset: y,
              replace: a && a.replace,
              enableViewTransition: a && a.unstable_viewTransition
            });
            ke(g, {
              state: "blocked",
              location: u,
              proceed() {
                ke(g, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: u
                }), t(r, a)
              },
              reset() {
                let e = new Map(A.blockers);
                e.set(g, se), V({
                  blockers: e
                })
              }
            })
          },
          fetch: function(t, r, o, d) {
            if (a) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            B.has(t) && me(t);
            let h = s || u,
              m = he(A.location, A.matches, f, p.v7_prependBasename, o, r, null == d ? void 0 : d.relative),
              v = b(h, m, f);
            if (!v) return void ne(t, r, Pe(404, {
              pathname: m
            }));
            let {
              path: y,
              submission: g,
              error: w
            } = fe(p.v7_normalizeFormMethod, !0, m, d);
            if (w) return void ne(t, r, w);
            let D = _e(v, y);
            T = !0 === (d && d.preventScrollReset), g && Te(g.formMethod) ? async function(t, r, o, a, d, h) {
              if (re(), K.delete(t), !a.route.action && !a.route.lazy) {
                let e = Pe(405, {
                  method: h.formMethod,
                  pathname: o,
                  routeId: r
                });
                return void ne(t, r, e)
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
              A.fetchers.set(t, p), V({
                fetchers: new Map(A.fetchers)
              });
              let m = new AbortController,
                v = be(e.history, o, m.signal, h);
              B.set(t, m);
              let y = q,
                g = await ge("action", v, a, d, l, i, f);
              if (v.signal.aborted) return void(B.get(t) === m && B.delete(t));
              if (je(g)) {
                if (B.delete(t), F > y) {
                  let e = $e(void 0);
                  return A.fetchers.set(t, e), void V({
                    fetchers: new Map(A.fetchers)
                  })
                } {
                  H.add(t);
                  let e = We(h);
                  return A.fetchers.set(t, e), V({
                    fetchers: new Map(A.fetchers)
                  }), ee(A, g, {
                    fetcherSubmission: h
                  })
                }
              }
              if (Ae(g)) return void ne(t, r, g.error);
              if (Le(g)) throw Pe(400, {
                type: "defer-action"
              });
              let w = A.navigation.location || A.location,
                D = be(e.history, w, m.signal),
                E = s || u,
                R = "idle" !== A.navigation.state ? b(E, A.navigation.location, f) : A.matches;
              c(R, "Didn't find any matches after fetcher action");
              let x = ++q;
              N.set(t, x);
              let S = We(h, g.data);
              A.fetchers.set(t, S);
              let [P, M] = pe(e.history, A, R, h, w, I, W, $, K, H, E, f, {
                [a.route.id]: g.data
              }, void 0);
              M.filter((e => e.key !== t)).forEach((e => {
                let t = e.key,
                  r = A.fetchers.get(t),
                  n = We(void 0, r ? r.data : void 0);
                A.fetchers.set(t, n), B.has(t) && me(t), e.controller && B.set(t, e.controller)
              })), V({
                fetchers: new Map(A.fetchers)
              });
              let L = () => M.forEach((e => me(e.key)));
              m.signal.addEventListener("abort", L);
              let {
                results: T,
                loaderResults: U,
                fetcherResults: C
              } = await te(A.matches, R, P, M, D);
              if (m.signal.aborted) return;
              m.signal.removeEventListener("abort", L), N.delete(t), B.delete(t), M.forEach((e => B.delete(e.key)));
              let O = Me(T);
              if (O) {
                if (O.idx >= P.length) {
                  let e = M[O.idx - P.length].key;
                  H.add(e)
                }
                return ee(A, O.result)
              }
              let {
                loaderData: _,
                errors: z
              } = Ee(A, A.matches, P, U, void 0, M, C, J);
              if (A.fetchers.has(t)) {
                let e = $e(g.data);
                A.fetchers.set(t, e)
              }
              let X = we(x);
              "loading" === A.navigation.state && x > F ? (c(j, "Expected pending action"), k && k.abort(), Z(A.navigation.location, {
                matches: R,
                loaderData: _,
                errors: z,
                fetchers: new Map(A.fetchers)
              })) : (V(n({
                errors: z,
                loaderData: Re(A.loaderData, _, R, z)
              }, X || M.length > 0 ? {
                fetchers: new Map(A.fetchers)
              } : {})), I = !1)
            }(t, r, y, D, v, g): (K.set(t, {
              routeId: r,
              path: y
            }), async function(t, r, n, o, a, s) {
              let d = A.fetchers.get(t),
                u = We(s, d ? d.data : void 0);
              A.fetchers.set(t, u), V({
                fetchers: new Map(A.fetchers)
              });
              let h = new AbortController,
                p = be(e.history, n, h.signal);
              B.set(t, h);
              let m = q,
                v = await ge("loader", p, o, a, l, i, f);
              if (Le(v) && (v = await Ce(v, p.signal, !0) || v), B.get(t) === h && B.delete(t), p.signal.aborted) return;
              if (je(v)) {
                if (F > m) {
                  let e = $e(void 0);
                  return A.fetchers.set(t, e), void V({
                    fetchers: new Map(A.fetchers)
                  })
                }
                return H.add(t), void await ee(A, v)
              }
              if (Ae(v)) {
                let e = xe(A.matches, r);
                return A.fetchers.delete(t), void V({
                  fetchers: new Map(A.fetchers),
                  errors: {
                    [e.route.id]: v.error
                  }
                })
              }
              c(!Le(v), "Unhandled fetcher deferred data");
              let y = $e(v.data);
              A.fetchers.set(t, y), V({
                fetchers: new Map(A.fetchers)
              })
            }(t, r, y, D, v, g))
          },
          revalidate: function() {
            re(), V({
              revalidation: "loading"
            }), "submitting" !== A.navigation.state && ("idle" !== A.navigation.state ? Q(j || A.historyAction, A.navigation.location, {
              overrideNavigation: A.navigation
            }) : Q(A.historyAction, A.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: G,
          deleteFetcher: ue,
          dispose: function() {
            m && m(), _ && _(), y.clear(), k && k.abort(), A.fetchers.forEach(((e, t) => ue(t))), A.blockers.forEach(((e, t) => De(t)))
          },
          getBlocker: function(e, t) {
            let r = A.blockers.get(e) || se;
            return X.get(e) !== t && X.set(e, t), r
          },
          deleteBlocker: De,
          _internalFetchControllers: B,
          _internalActiveDeferreds: J,
          _internalSetRoutes: function(e) {
            l = {}, s = g(e, i, void 0, l)
          }
        }, M
      }

      function he(e, t, r, n, o, a, i) {
        let s, l;
        if (null != a && "path" !== i) {
          s = [];
          for (let e of t)
            if (s.push(e), e.route.id === a) {
              l = e;
              break
            }
        } else s = t, l = t[t.length - 1];
        let c = W(o || ".", I(s).map((e => e.pathnameBase)), O(e.pathname, r) || e.pathname, "path" === i);
        return null == o && (c.search = e.search, c.hash = e.hash), null != o && "" !== o && "." !== o || !l || !l.route.index || Oe(c.search) || (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), n && "/" !== r && (c.pathname = "/" === c.pathname ? r : $([r, c.pathname])), f(c)
      }

      function fe(e, t, r, n) {
        if (!n || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
          }(n)) return {
          path: r
        };
        if (n.formMethod && (o = n.formMethod, !re.has(o.toLowerCase()))) return {
          path: r,
          error: Pe(405, {
            method: n.formMethod
          })
        };
        var o;
        let a, i, s = () => ({
            path: r,
            error: Pe(400, {
              type: "invalid-body"
            })
          }),
          l = n.formMethod || "get",
          d = e ? l.toUpperCase() : l.toLowerCase(),
          u = ke(r);
        if (void 0 !== n.body) {
          if ("text/plain" === n.formEncType) {
            if (!Te(d)) return s();
            let e = "string" == typeof n.body ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce(((e, t) => {
              let [r, n] = t;
              return "" + e + r + "=" + n + "\n"
            }), "") : String(n.body);
            return {
              path: r,
              submission: {
                formMethod: d,
                formAction: u,
                formEncType: n.formEncType,
                formData: void 0,
                json: void 0,
                text: e
              }
            }
          }
          if ("application/json" === n.formEncType) {
            if (!Te(d)) return s();
            try {
              let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
              return {
                path: r,
                submission: {
                  formMethod: d,
                  formAction: u,
                  formEncType: n.formEncType,
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
        if (c("function" == typeof FormData, "FormData is not available in this environment"), n.formData) a = we(n.formData), i = n.formData;
        else if (n.body instanceof FormData) a = we(n.body), i = n.body;
        else if (n.body instanceof URLSearchParams) a = n.body, i = De(a);
        else if (null == n.body) a = new URLSearchParams, i = new FormData;
        else try {
          a = new URLSearchParams(n.body), i = De(a)
        } catch (e) {
          return s()
        }
        let h = {
          formMethod: d,
          formAction: u,
          formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0
        };
        if (Te(h.formMethod)) return {
          path: r,
          submission: h
        };
        let m = p(r);
        return t && m.search && Oe(m.search) && a.append("index", ""), m.search = "?" + a, {
          path: f(m),
          submission: h
        }
      }

      function pe(e, t, r, o, a, i, s, l, c, d, u, h, f, p) {
        let m = p ? Object.values(p)[0] : f ? Object.values(f)[0] : void 0,
          v = e.createURL(t.location),
          y = e.createURL(a),
          g = p ? Object.keys(p)[0] : void 0,
          w = function(e, t) {
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
              }(t.loaderData, t.matches[r], e) || s.some((t => t === e.route.id))) return !0;
            let a = t.matches[r],
              l = e;
            return ve(e, n({
              currentUrl: v,
              currentParams: a.params,
              nextUrl: y,
              nextParams: l.params
            }, o, {
              actionResult: m,
              defaultShouldRevalidate: i || v.pathname + v.search === y.pathname + y.search || v.search !== y.search || me(a, l)
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
            f = _e(s, e.path),
            p = !1;
          p = !d.has(a) && (!!l.includes(a) || (c && "idle" !== c.state && void 0 === c.data ? i : ve(f, n({
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: y,
            nextParams: r[r.length - 1].params
          }, o, {
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

      function ve(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }
      async function ye(e, t, r) {
        if (!e.lazy) return;
        let o = await e.lazy();
        if (!e.lazy) return;
        let a = r[e.id];
        c(a, "No route found in manifest");
        let i = {};
        for (let e in o) {
          let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
          d(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || y.has(e) || (i[e] = o[e])
        }
        Object.assign(a, i), Object.assign(a, n({}, t(a), {
          lazy: void 0
        }))
      }
      async function ge(e, t, r, n, o, a, i, s) {
        let l, d, u;
        void 0 === s && (s = {});
        let h = e => {
          let n, o = new Promise(((e, t) => n = t));
          return u = () => n(), t.signal.addEventListener("abort", u), Promise.race([e({
            request: t,
            params: r.params,
            context: s.requestContext
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
              d = t[0]
            } else {
              if (await ye(r.route, a, o), n = r.route[e], !n) {
                if ("action" === e) {
                  let e = new URL(t.url),
                    n = e.pathname + e.search;
                  throw Pe(405, {
                    method: t.method,
                    pathname: n,
                    routeId: r.route.id
                  })
                }
                return {
                  type: v.data,
                  data: void 0
                }
              }
              d = await h(n)
            }
          else {
            if (!n) {
              let e = new URL(t.url);
              throw Pe(404, {
                pathname: e.pathname + e.search
              })
            }
            d = await h(n)
          }
          c(void 0 !== d, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
        } catch (e) {
          l = v.error, d = e
        } finally {
          u && t.signal.removeEventListener("abort", u)
        }
        if (null != (f = d) && "number" == typeof f.status && "string" == typeof f.statusText && "object" == typeof f.headers && void 0 !== f.body) {
          let e, o = d.status;
          if (ne.has(o)) {
            let e = d.headers.get("Location");
            if (c(e, "Redirects returned/thrown from loaders/actions must have a Location header"), le.test(e)) {
              if (!s.isStaticRequest) {
                let r = new URL(t.url),
                  n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                  o = null != O(n.pathname, i);
                n.origin === r.origin && o && (e = n.pathname + n.search + n.hash)
              }
            } else e = he(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, e);
            if (s.isStaticRequest) throw d.headers.set("Location", e), d;
            return {
              type: v.redirect,
              status: o,
              location: e,
              revalidate: null !== d.headers.get("X-Remix-Revalidate"),
              reloadDocument: null !== d.headers.get("X-Remix-Reload-Document")
            }
          }
          if (s.isRouteRequest) throw {
            type: l === v.error ? v.error : v.data,
            response: d
          };
          let a = d.headers.get("Content-Type");
          return e = a && /\bapplication\/json\b/.test(a) ? await d.json() : await d.text(), l === v.error ? {
            type: l,
            error: new Z(o, d.statusText, e),
            headers: d.headers
          } : {
            type: v.data,
            data: e,
            statusCode: d.status,
            headers: d.headers
          }
        }
        var f, p, m;
        return l === v.error ? {
          type: l,
          error: d
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(d) ? {
          type: v.deferred,
          deferredData: d,
          statusCode: null == (p = d.init) ? void 0 : p.status,
          headers: (null == (m = d.init) ? void 0 : m.headers) && new Headers(d.init.headers)
        } : {
          type: v.data,
          data: d
        }
      }

      function be(e, t, r, n) {
        let o = e.createURL(ke(t)).toString(),
          a = {
            signal: r
          };
        if (n && Te(n.formMethod)) {
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

      function De(e) {
        let t = new FormData;
        for (let [r, n] of e.entries()) t.append(r, n);
        return t
      }

      function Ee(e, t, r, o, a, i, s, l) {
        let {
          loaderData: d,
          errors: u
        } = function(e, t, r, n, o) {
          let a, i = {},
            s = null,
            l = !1,
            d = {};
          return r.forEach(((r, u) => {
            let h = t[u].route.id;
            if (c(!je(r), "Cannot handle redirect results in processLoaderData"), Ae(r)) {
              let t = xe(e, h),
                o = r.error;
              n && (o = Object.values(n)[0], n = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = o), i[h] = void 0, l || (l = !0, a = Q(r.error) ? r.error.status : 500), r.headers && (d[h] = r.headers)
            } else Le(r) ? (o.set(h, r.deferredData), i[h] = r.deferredData.data) : i[h] = r.data, null == r.statusCode || 200 === r.statusCode || l || (a = r.statusCode), r.headers && (d[h] = r.headers)
          })), n && (s = n, i[Object.keys(n)[0]] = void 0), {
            loaderData: i,
            errors: s,
            statusCode: a || 200,
            loaderHeaders: d
          }
        }(t, r, o, a, l);
        for (let t = 0; t < i.length; t++) {
          let {
            key: r,
            match: o,
            controller: a
          } = i[t];
          c(void 0 !== s && void 0 !== s[t], "Did not find corresponding fetcher result");
          let l = s[t];
          if (!a || !a.signal.aborted)
            if (Ae(l)) {
              let t = xe(e.matches, null == o ? void 0 : o.route.id);
              u && u[t.route.id] || (u = n({}, u, {
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

      function Re(e, t, r, o) {
        let a = n({}, t);
        for (let n of r) {
          let r = n.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && n.route.loader && (a[r] = e[r]), o && o.hasOwnProperty(r)) break
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

      function Pe(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: o,
          type: a
        } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
        return 400 === e ? (i = "Bad Request", o && r && n ? s = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === a ? s = "defer() is not supported in actions" : "invalid-body" === a && (s = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", s = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && n ? s = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')), new Z(e || 500, i, new Error(s), !0)
      }

      function Me(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (je(r)) return {
            result: r,
            idx: t
          }
        }
      }

      function ke(e) {
        return f(n({}, "string" == typeof e ? p(e) : e, {
          hash: ""
        }))
      }

      function Le(e) {
        return e.type === v.deferred
      }

      function Ae(e) {
        return e.type === v.error
      }

      function je(e) {
        return (e && e.type) === v.redirect
      }

      function Te(e) {
        return ee.has(e.toLowerCase())
      }
      async function Ue(e, t, r, n, o, a) {
        for (let i = 0; i < r.length; i++) {
          let s = r[i],
            l = t[i];
          if (!l) continue;
          let d = e.find((e => e.route.id === l.route.id)),
            u = null != d && !me(d, l) && void 0 !== (a && a[l.route.id]);
          if (Le(s) && (o || u)) {
            let e = n[i];
            c(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await Ce(s, e, o).then((e => {
              e && (r[i] = e || r[i])
            }))
          }
        }
      }
      async function Ce(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: v.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: v.error,
              error: e
            }
          }
          return {
            type: v.data,
            data: e.deferredData.data
          }
        }
      }

      function Oe(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function _e(e, t) {
        let r = "string" == typeof t ? p(t).search : t.search;
        if (e[e.length - 1].route.index && Oe(r || "")) return e[e.length - 1];
        let n = I(e);
        return n[n.length - 1]
      }

      function ze(e) {
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