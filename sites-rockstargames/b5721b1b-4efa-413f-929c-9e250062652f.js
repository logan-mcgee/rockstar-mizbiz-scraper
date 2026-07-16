try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b5721b1b-4efa-413f-929c-9e250062652f", e._sentryDebugIdIdentifier = "sentry-dbid-b5721b1b-4efa-413f-929c-9e250062652f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [229], {
    90229(e, t, r) {
      function a() {
        return a = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)({}).hasOwnProperty.call(r, a) && (e[a] = r[a])
          }
          return e
        }, a.apply(null, arguments)
      }
      var n;
      r.d(t, {
          AO: () => f,
          B6: () => L,
          Gh: () => z,
          Oi: () => c,
          RO: () => A,
          Rr: () => p,
          TM: () => l,
          VV: () => J,
          aE: () => le,
          o1: () => _,
          pX: () => Y,
          pb: () => j,
          rc: () => n,
          ro: () => S,
          sC: () => i,
          tH: () => $,
          tW: () => M,
          ue: () => b,
          yD: () => I,
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
        t = r.map((e, t) => m(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0));
        let i = c(a ?? t.length - 1),
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
        return void 0 === e && (e = {}), m(function(e, t) {
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
        }, function(e, t) {
          return "string" == typeof t ? t : f(t)
        }, null, e)
      }

      function l(e) {
        return void 0 === e && (e = {}), m(function(e, t) {
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
        }, function(e, t) {
          let r = e.document.querySelector("base"),
            a = "";
          if (r && r.getAttribute("href")) {
            let t = e.location.href,
              r = t.indexOf("#");
            a = -1 === r ? t : t.slice(0, r)
          }
          return a + "#" + ("string" == typeof t ? t : f(t))
        }, function(e, t) {
          d("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
        }, e)
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
        } = i, d = s.history, p = n.Pop, m = null, y = v();

        function v() {
          return (d.state || {
            idx: null
          }).idx
        }

        function g() {
          p = n.Pop;
          let e = v(),
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
          return r = r.replace(/ $/, "%20"), c(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
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
            return s.addEventListener(o, g), m = e, () => {
              s.removeEventListener(o, g), m = null
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
            r && r(a, e), y = v() + 1;
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
            r && r(a, e), y = v();
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
      const v = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function g(e, t, r, n) {
        return void 0 === r && (r = []), void 0 === n && (n = {}), e.map((e, o) => {
          let i = [...r, String(o)],
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
            return n[s] = r, e.children && (r.children = g(e.children, t, i, n)), r
          }
        })
      }

      function b(e, t, r) {
        return void 0 === r && (r = "/"), w(e, t, r, !1)
      }

      function w(e, t, r, a) {
        let n = j(("string" == typeof t ? p(t) : t).pathname || "/", r);
        if (null == n) return null;
        let o = R(e);
        ! function(e) {
          e.sort((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every((e, r) => e === t[r]) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)))
        }(o);
        let i = null,
          s = A(n);
        for (let e = 0; null == i && e < o.length; ++e) i = k(o[e], s, a);
        return i
      }

      function S(e, t) {
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

      function R(e, t, r, a) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === a && (a = "");
        let n = (e, n, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: n,
            route: e
          };
          i.relativePath.startsWith("/") && (c(i.relativePath.startsWith(a), 'Absolute route path "' + i.relativePath + '" nested under path "' + a + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(a.length));
          let s = W([a, i.relativePath]),
            l = r.concat(i);
          e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), R(e.children, t, l, s)), (null != e.path || e.index) && t.push({
            path: s,
            score: P(s, e.index),
            routesMeta: l
          })
        };
        return e.forEach((e, t) => {
          var r;
          if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let r of D(e.path)) n(e, t, r);
          else n(e, t)
        }), t
      }

      function D(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...a] = t, n = r.endsWith("?"), o = r.replace(/\?$/, "");
        if (0 === a.length) return n ? [o, ""] : [o];
        let i = D(a.join("/")),
          s = [];
        return s.push(...i.map(e => "" === e ? o : [o, e].join("/"))), n && s.push(...i), s.map(t => e.startsWith("/") && "" === t ? "/" : t)
      }
      const E = /^:[\w-]+$/,
        x = e => "*" === e;

      function P(e, t) {
        let r = e.split("/"),
          a = r.length;
        return r.some(x) && (a += -2), t && (a += 2), r.filter(e => !x(e)).reduce((e, t) => e + (E.test(t) ? 3 : "" === t ? 1 : 10), a)
      }

      function k(e, t, r) {
        void 0 === r && (r = !1);
        let {
          routesMeta: a
        } = e, n = {}, o = "/", i = [];
        for (let e = 0; e < a.length; ++e) {
          let s = a[e],
            l = e === a.length - 1,
            c = "/" === o ? t : t.slice(o.length) || "/",
            d = L({
              path: s.relativePath,
              caseSensitive: s.caseSensitive,
              end: l
            }, c),
            u = s.route;
          if (!d && l && r && !a[a.length - 1].route.index && (d = L({
              path: s.relativePath,
              caseSensitive: s.caseSensitive,
              end: !1
            }, c)), !d) return null;
          Object.assign(n, d.params), i.push({
            params: n,
            pathname: W([o, d.pathname]),
            pathnameBase: F(W([o, d.pathnameBase])),
            route: u
          }), "/" !== d.pathnameBase && (o = W([o, d.pathnameBase]))
        }
        return i
      }

      function M(e, t) {
        void 0 === t && (t = {});
        let r = e;
        r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (d(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*"));
        const a = r.startsWith("/") ? "/" : "",
          n = e => null == e ? "" : "string" == typeof e ? e : String(e);
        return a + r.split(/\/+/).map((e, r, a) => {
          if (r === a.length - 1 && "*" === e) return n(t["*"]);
          const o = e.match(/^:([\w-]+)(\??)$/);
          if (o) {
            const [, e, r] = o;
            let a = t[e];
            return c("?" === r || null != a, 'Missing ":' + e + '" param'), n(a)
          }
          return e.replace(/\?$/g, "")
        }).filter(e => !!e).join("/")
      }

      function L(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, a] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), d("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let a = [],
            n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, r) => (a.push({
              paramName: t,
              isOptional: null != r
            }), r ? "/?([^\\/]+)?" : "/([^\\/]+)"));
          return e.endsWith("*") ? (a.push({
            paramName: "*"
          }), n += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : "" !== e && "/" !== e && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), a]
        }(e.path, e.caseSensitive, e.end), n = t.match(r);
        if (!n) return null;
        let o = n[0],
          i = o.replace(/(.)\/+$/, "$1"),
          s = n.slice(1);
        return {
          params: a.reduce((e, t, r) => {
            let {
              paramName: a,
              isOptional: n
            } = t;
            if ("*" === a) {
              let e = s[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            const l = s[r];
            return e[a] = n && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function A(e) {
        try {
          return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
        } catch (t) {
          return d(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function j(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          a = e.charAt(r);
        return a && "/" !== a ? null : e.slice(r) || "/"
      }
      const T = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

      function _(e, t) {
        void 0 === t && (t = "/");
        let r, {
          pathname: a,
          search: n = "",
          hash: o = ""
        } = "string" == typeof e ? p(e) : e;
        if (a)
          if (i = a, T.test(i)) r = a;
          else {
            if (a.includes("//")) {
              let e = a;
              a = H(a), d(!1, "Pathnames cannot have embedded double slashes - normalizing " + e + " -> " + a)
            }
            r = a.startsWith("/") ? C(a.substring(1), "/") : C(a, t)
          }
        else r = t;
        var i;
        return {
          pathname: r,
          search: B(n),
          hash: N(o)
        }
      }

      function C(e, t) {
        let r = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach(e => {
          ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
        }), r.length > 1 ? r.join("/") : "/"
      }

      function O(e, t, r, a) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function U(e) {
        return e.filter((e, t) => 0 === t || e.route.path && e.route.path.length > 0)
      }

      function I(e, t) {
        let r = U(e);
        return t ? r.map((e, t) => t === r.length - 1 ? e.pathname : e.pathnameBase) : r.map(e => e.pathnameBase)
      }

      function z(e, t, r, n) {
        let o;
        void 0 === n && (n = !1), "string" == typeof e ? o = p(e) : (o = a({}, e), c(!o.pathname || !o.pathname.includes("?"), O("?", "pathname", "search", o)), c(!o.pathname || !o.pathname.includes("#"), O("#", "pathname", "hash", o)), c(!o.search || !o.search.includes("#"), O("#", "search", "hash", o)));
        let i, s = "" === e || "" === o.pathname,
          l = s ? "/" : o.pathname;
        if (null == l) i = r;
        else {
          let e = t.length - 1;
          if (!n && l.startsWith("..")) {
            let t = l.split("/");
            for (;
              ".." === t[0];) t.shift(), e -= 1;
            o.pathname = t.join("/")
          }
          i = e >= 0 ? t[e] : "/"
        }
        let d = _(o, i),
          u = l && "/" !== l && l.endsWith("/"),
          h = (s || "." === l) && r.endsWith("/");
        return d.pathname.endsWith("/") || !u && !h || (d.pathname += "/"), d
      }
      const H = e => e.replace(/\/\/+/g, "/"),
        W = e => H(e.join("/")),
        F = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        B = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        N = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
      class $ extends Error {}
      class q {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], c(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise((e, t) => r = t), this.controller = new AbortController;
          let a = () => r(new $("Deferred data aborted"));
          this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", a), this.controller.signal.addEventListener("abort", a), this.data = Object.entries(e).reduce((e, t) => {
            let [r, a] = t;
            return Object.assign(e, {
              [r]: this.trackPromise(r, a)
            })
          }, {}), this.done && this.unlistenAbortSignal(), this.init = t
        }
        trackPromise(e, t) {
          if (!(t instanceof Promise)) return t;
          this.deferredKeys.push(e), this.pendingKeysSet.add(e);
          let r = Promise.race([t, this.abortPromise]).then(t => this.onSettle(r, e, void 0, t), t => this.onSettle(r, e, t));
          return r.catch(() => {}), Object.defineProperty(r, "_tracked", {
            get: () => !0
          }), r
        }
        onSettle(e, t, r, a) {
          if (this.controller.signal.aborted && r instanceof $) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
          this.subscribers.forEach(r => r(e, t))
        }
        subscribe(e) {
          return this.subscribers.add(e), () => this.subscribers.delete(e)
        }
        cancel() {
          this.controller.abort(), this.pendingKeysSet.forEach((e, t) => this.pendingKeysSet.delete(t)), this.emit(!0)
        }
        async resolveData(e) {
          let t = !1;
          if (!this.done) {
            let r = () => this.cancel();
            e.addEventListener("abort", r), t = await new Promise(t => {
              this.subscribe(a => {
                e.removeEventListener("abort", r), (a || this.done) && t(a)
              })
            })
          }
          return t
        }
        get done() {
          return 0 === this.pendingKeysSet.size
        }
        get unwrappedData() {
          return c(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce((e, t) => {
            let [r, a] = t;
            return Object.assign(e, {
              [r]: K(a)
            })
          }, {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function K(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }
      const V = function(e, t) {
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
      class J {
        constructor(e, t, r, a) {
          void 0 === a && (a = !1), this.status = e, this.statusText = t || "", this.internal = a, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function Y(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const X = ["post", "put", "patch", "delete"],
        G = new Set(X),
        Q = ["get", ...X],
        Z = new Set(Q),
        ee = new Set([301, 302, 303, 307, 308]),
        te = new Set([307, 308]),
        re = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        ae = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        ne = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0
        },
        oe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ie = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        }),
        se = "remix-router-transitions";

      function le(e) {
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
        } else i = ie;
        let s, l, u, f = {},
          p = g(e.routes, i, void 0, f),
          m = e.basename || "/",
          R = e.dataStrategy || ge,
          D = e.patchRoutesOnNavigation,
          E = a({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            v7_skipActionErrorRevalidation: !1
          }, e.future),
          x = null,
          P = new Set,
          k = null,
          M = null,
          L = null,
          A = null != e.hydrationData,
          T = b(p, e.history.location, m),
          _ = !1,
          C = null;
        if (null == T && !D) {
          let t = Ae(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: a
            } = Le(p);
          T = r, C = {
            [a.id]: t
          }
        }
        if (T && !e.hydrationData && dt(T, p, e.history.location.pathname).active && (T = null), T)
          if (T.some(e => e.route.lazy)) l = !1;
          else if (T.some(e => e.route.loader))
          if (E.v7_partialHydration) {
            let t = e.hydrationData ? e.hydrationData.loaderData : null,
              r = e.hydrationData ? e.hydrationData.errors : null;
            if (r) {
              let e = T.findIndex(e => void 0 !== r[e.route.id]);
              l = T.slice(0, e + 1).every(e => !fe(e.route, t, r))
            } else l = T.every(e => !fe(e.route, t, r))
          } else l = null != e.hydrationData;
        else l = !0;
        else if (l = !1, T = [], E.v7_partialHydration) {
          let t = dt(null, p, e.history.location.pathname);
          t.active && t.matches && (_ = !0, T = t.matches)
        }
        let O, U, I = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: T,
            initialized: l,
            navigation: re,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || C,
            fetchers: new Map,
            blockers: new Map
          },
          z = n.Pop,
          H = !1,
          W = !1,
          F = new Map,
          B = null,
          N = !1,
          $ = !1,
          q = [],
          K = new Set,
          V = new Map,
          J = 0,
          X = -1,
          G = new Map,
          Q = new Set,
          Z = new Map,
          ee = new Map,
          le = new Set,
          ue = new Map,
          pe = new Map;

        function me(e, t) {
          void 0 === t && (t = {}), I = a({}, I, e);
          let r = [],
            n = [];
          E.v7_fetcherPersist && I.fetchers.forEach((e, t) => {
            "idle" === e.state && (le.has(t) ? n.push(t) : r.push(t))
          }), le.forEach(e => {
            I.fetchers.has(e) || V.has(e) || n.push(e)
          }), [...P].forEach(e => e(I, {
            deletedFetchers: n,
            viewTransitionOpts: t.viewTransitionOpts,
            flushSync: !0 === t.flushSync
          })), E.v7_fetcherPersist ? (r.forEach(e => I.fetchers.delete(e)), n.forEach(e => Qe(e))) : n.forEach(e => le.delete(e))
        }

        function ve(t, r, o) {
          var i, l;
          let c, {
              flushSync: d
            } = void 0 === o ? {} : o,
            u = null != I.actionData && null != I.navigation.formMethod && He(I.navigation.formMethod) && "loading" === I.navigation.state && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
          c = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : u ? I.actionData : null;
          let h = r.loaderData ? Pe(I.loaderData, r.loaderData, r.matches || [], r.errors) : I.loaderData,
            f = I.blockers;
          f.size > 0 && (f = new Map(f), f.forEach((e, t) => f.set(t, ne)));
          let m, y = !0 === H || null != I.navigation.formMethod && He(I.navigation.formMethod) && !0 !== (null == (l = t.state) ? void 0 : l._isRedirect);
          if (s && (p = s, s = void 0), N || z === n.Pop || (z === n.Push ? e.history.push(t, t.state) : z === n.Replace && e.history.replace(t, t.state)), z === n.Pop) {
            let e = F.get(I.location.pathname);
            e && e.has(t.pathname) ? m = {
              currentLocation: I.location,
              nextLocation: t
            } : F.has(t.pathname) && (m = {
              currentLocation: t,
              nextLocation: I.location
            })
          } else if (W) {
            let e = F.get(I.location.pathname);
            e ? e.add(t.pathname) : (e = new Set([t.pathname]), F.set(I.location.pathname, e)), m = {
              currentLocation: I.location,
              nextLocation: t
            }
          }
          me(a({}, r, {
            actionData: c,
            loaderData: h,
            historyAction: z,
            location: t,
            initialized: !0,
            navigation: re,
            revalidation: "idle",
            restoreScrollPosition: ct(t, r.matches || I.matches),
            preventScrollReset: y,
            blockers: f
          }), {
            viewTransitionOpts: m,
            flushSync: !0 === d
          }), z = n.Pop, H = !1, W = !1, N = !1, $ = !1, q = []
        }
        async function De(t, r, o) {
          O && O.abort(), O = null, z = t, N = !0 === (o && o.startUninterruptedRevalidation),
            function(e, t) {
              if (k && L) {
                let r = lt(e, t);
                k[r] = L()
              }
            }(I.location, I.matches), H = !0 === (o && o.preventScrollReset), W = !0 === (o && o.enableViewTransition);
          let i = s || p,
            l = o && o.overrideNavigation,
            c = null != o && o.initialHydration && I.matches && I.matches.length > 0 && !_ ? I.matches : b(i, r, m),
            d = !0 === (o && o.flushSync);
          if (c && I.initialized && !$ && (u = I.location, h = r, u.pathname === h.pathname && u.search === h.search && ("" === u.hash ? "" !== h.hash : u.hash === h.hash || "" !== h.hash)) && !(o && o.submission && He(o.submission.formMethod))) return void ve(r, {
            matches: c
          }, {
            flushSync: d
          });
          var u, h;
          let f = dt(c, i, r.pathname);
          if (f.active && f.matches && (c = f.matches), !c) {
            let {
              error: e,
              notFoundMatches: t,
              route: a
            } = it(r.pathname);
            return void ve(r, {
              matches: t,
              loaderData: {},
              errors: {
                [a.id]: e
              }
            }, {
              flushSync: d
            })
          }
          O = new AbortController;
          let v, g = Re(e.history, r, O.signal, o && o.submission);
          if (o && o.pendingError) v = [Me(c).route.id, {
            type: y.error,
            error: o.pendingError
          }];
          else if (o && o.submission && He(o.submission.formMethod)) {
            let t = await async function(t, r, a, o, i, s) {
              void 0 === s && (s = {}), Ne();
              let l, c = function(e, t) {
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
              }(r, a);
              if (me({
                  navigation: c
                }, {
                  flushSync: !0 === s.flushSync
                }), i) {
                let e = await ut(o, r.pathname, t.signal);
                if ("aborted" === e.type) return {
                  shortCircuited: !0
                };
                if ("error" === e.type) {
                  let t = Me(e.partialMatches).route.id;
                  return {
                    matches: e.partialMatches,
                    pendingActionResult: [t, {
                      type: y.error,
                      error: e.error
                    }]
                  }
                }
                if (!e.matches) {
                  let {
                    notFoundMatches: e,
                    error: t,
                    route: a
                  } = it(r.pathname);
                  return {
                    matches: e,
                    pendingActionResult: [a.id, {
                      type: y.error,
                      error: t
                    }]
                  }
                }
                o = e.matches
              }
              let d = $e(o, r);
              if (d.route.action || d.route.lazy) {
                if (l = (await Ie("action", I, t, [d], o, null))[d.route.id], t.signal.aborted) return {
                  shortCircuited: !0
                }
              } else l = {
                type: y.error,
                error: Ae(405, {
                  method: t.method,
                  pathname: r.pathname,
                  routeId: d.route.id
                })
              };
              if (Ue(l)) {
                let r;
                return r = s && null != s.replace ? s.replace : Se(l.response.headers.get("Location"), new URL(t.url), m, e.history) === I.location.pathname + I.location.search, await Te(t, l, !0, {
                  submission: a,
                  replace: r
                }), {
                  shortCircuited: !0
                }
              }
              if (Ce(l)) throw Ae(400, {
                type: "defer-action"
              });
              if (Oe(l)) {
                let e = Me(o, d.route.id);
                return !0 !== (s && s.replace) && (z = n.Push), {
                  matches: o,
                  pendingActionResult: [e.route.id, l]
                }
              }
              return {
                matches: o,
                pendingActionResult: [d.route.id, l]
              }
            }(g, r, o.submission, c, f.active, {
              replace: o.replace,
              flushSync: d
            });
            if (t.shortCircuited) return;
            if (t.pendingActionResult) {
              let [e, a] = t.pendingActionResult;
              if (Oe(a) && Y(a.error) && 404 === a.error.status) return O = null, void ve(r, {
                matches: t.matches,
                loaderData: {},
                errors: {
                  [e]: a.error
                }
              })
            }
            c = t.matches || c, v = t.pendingActionResult, l = Ke(r, o.submission), d = !1, f.active = !1, g = Re(e.history, g.url, g.signal)
          }
          let {
            shortCircuited: w,
            matches: S,
            loaderData: R,
            errors: D
          } = await async function(t, r, n, o, i, l, c, d, u, h, f) {
            let y = i || Ke(r, l),
              v = l || c || qe(y),
              g = !(N || E.v7_partialHydration && u);
            if (o) {
              if (g) {
                let e = Ee(f);
                me(a({
                  navigation: y
                }, void 0 !== e ? {
                  actionData: e
                } : {}), {
                  flushSync: h
                })
              }
              let e = await ut(n, r.pathname, t.signal);
              if ("aborted" === e.type) return {
                shortCircuited: !0
              };
              if ("error" === e.type) {
                let t = Me(e.partialMatches).route.id;
                return {
                  matches: e.partialMatches,
                  loaderData: {},
                  errors: {
                    [t]: e.error
                  }
                }
              }
              if (!e.matches) {
                let {
                  error: e,
                  notFoundMatches: t,
                  route: a
                } = it(r.pathname);
                return {
                  matches: t,
                  loaderData: {},
                  errors: {
                    [a.id]: e
                  }
                }
              }
              n = e.matches
            }
            let b = s || p,
              [w, S] = he(e.history, I, n, v, r, E.v7_partialHydration && !0 === u, E.v7_skipActionErrorRevalidation, $, q, K, le, Z, Q, b, m, f);
            if (st(e => !(n && n.some(t => t.route.id === e)) || w && w.some(t => t.route.id === e)), X = ++J, 0 === w.length && 0 === S.length) {
              let e = tt();
              return ve(r, a({
                matches: n,
                loaderData: {},
                errors: f && Oe(f[1]) ? {
                  [f[0]]: f[1].error
                } : null
              }, ke(f), e ? {
                fetchers: new Map(I.fetchers)
              } : {}), {
                flushSync: h
              }), {
                shortCircuited: !0
              }
            }
            if (g) {
              let e = {};
              if (!o) {
                e.navigation = y;
                let t = Ee(f);
                void 0 !== t && (e.actionData = t)
              }
              S.length > 0 && (e.fetchers = function(e) {
                return e.forEach(e => {
                  let t = I.fetchers.get(e.key),
                    r = Ve(void 0, t ? t.data : void 0);
                  I.fetchers.set(e.key, r)
                }), new Map(I.fetchers)
              }(S)), me(e, {
                flushSync: h
              })
            }
            S.forEach(e => {
              Ze(e.key), e.controller && V.set(e.key, e.controller)
            });
            let R = () => S.forEach(e => Ze(e.key));
            O && O.signal.addEventListener("abort", R);
            let {
              loaderResults: D,
              fetcherResults: x
            } = await ze(I, n, w, S, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            O && O.signal.removeEventListener("abort", R), S.forEach(e => V.delete(e.key));
            let P = je(D);
            if (P) return await Te(t, P.result, !0, {
              replace: d
            }), {
              shortCircuited: !0
            };
            if (P = je(x), P) return Q.add(P.key), await Te(t, P.result, !0, {
              replace: d
            }), {
              shortCircuited: !0
            };
            let {
              loaderData: k,
              errors: M
            } = xe(I, n, D, f, S, x, ue);
            ue.forEach((e, t) => {
              e.subscribe(r => {
                (r || e.done) && ue.delete(t)
              })
            }), E.v7_partialHydration && u && I.errors && (M = a({}, I.errors, M));
            let L = tt(),
              A = rt(X),
              j = L || A || S.length > 0;
            return a({
              matches: n,
              loaderData: k,
              errors: M
            }, j ? {
              fetchers: new Map(I.fetchers)
            } : {})
          }(g, r, c, f.active, l, o && o.submission, o && o.fetcherSubmission, o && o.replace, o && !0 === o.initialHydration, d, v);
          w || (O = null, ve(r, a({
            matches: S || c
          }, ke(v), {
            loaderData: R,
            errors: D
          })))
        }

        function Ee(e) {
          return e && !Oe(e[1]) ? {
            [e[0]]: e[1].data
          } : I.actionData ? 0 === Object.keys(I.actionData).length ? null : I.actionData : void 0
        }
        async function Te(o, i, s, l) {
          let {
            submission: d,
            fetcherSubmission: u,
            preventScrollReset: f,
            replace: p
          } = void 0 === l ? {} : l;
          i.response.headers.has("X-Remix-Revalidate") && ($ = !0);
          let y = i.response.headers.get("Location");
          c(y, "Expected a Location header on the redirect Response"), y = Se(y, new URL(o.url), m, e.history);
          let v = h(I.location, y, {
            _isRedirect: !0
          });
          if (r) {
            let r = !1;
            if (i.response.headers.has("X-Remix-Reload-Document")) r = !0;
            else if (oe.test(y)) {
              const a = e.history.createURL(y);
              r = a.origin !== t.location.origin || null == j(a.pathname, m)
            }
            if (r) return void(p ? t.location.replace(y) : t.location.assign(y))
          }
          O = null;
          let g = !0 === p || i.response.headers.has("X-Remix-Replace") ? n.Replace : n.Push,
            {
              formMethod: b,
              formAction: w,
              formEncType: S
            } = I.navigation;
          !d && !u && b && w && S && (d = qe(I.navigation));
          let R = d || u;
          if (te.has(i.response.status) && R && He(R.formMethod)) await De(g, v, {
            submission: a({}, R, {
              formAction: y
            }),
            preventScrollReset: f || H,
            enableViewTransition: s ? W : void 0
          });
          else {
            let e = Ke(v, d);
            await De(g, v, {
              overrideNavigation: e,
              fetcherSubmission: u,
              preventScrollReset: f || H,
              enableViewTransition: s ? W : void 0
            })
          }
        }
        async function Ie(e, t, r, n, o, s) {
          let l, u = {};
          try {
            l = await async function(e, t, r, n, o, i, s, l, u, h) {
              let f = i.map(e => e.route.lazy ? async function(e, t, r) {
                  if (!e.lazy) return;
                  let n = await e.lazy();
                  if (!e.lazy) return;
                  let o = r[e.id];
                  c(o, "No route found in manifest");
                  let i = {};
                  for (let e in n) {
                    let t = void 0 !== o[e] && "hasErrorBoundary" !== e;
                    d(!t, 'Route "' + o.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || v.has(e) || (i[e] = n[e])
                  }
                  Object.assign(o, i), Object.assign(o, a({}, t(o), {
                    lazy: void 0
                  }))
                }(e.route, u, l): void 0),
                p = i.map((e, r) => {
                  let i = f[r],
                    s = o.some(t => t.route.id === e.route.id);
                  return a({}, e, {
                    shouldLoad: s,
                    resolve: async r => (r && "GET" === n.method && (e.route.lazy || e.route.loader) && (s = !0), s ? async function(e, t, r, a, n, o) {
                      let i, s, l = a => {
                        let i, l = new Promise((e, t) => i = t);
                        s = () => i(), t.signal.addEventListener("abort", s);
                        let c = n => "function" != typeof a ? Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "' + e + '" [routeId: ' + r.route.id + "]")) : a({
                            request: t,
                            params: r.params,
                            context: o
                          }, ...void 0 !== n ? [n] : []),
                          d = (async () => {
                            try {
                              return {
                                type: "data",
                                result: await (n ? n(e => c(e)) : c())
                              }
                            } catch (e) {
                              return {
                                type: "error",
                                result: e
                              }
                            }
                          })();
                        return Promise.race([d, l])
                      };
                      try {
                        let n = r.route[e];
                        if (a)
                          if (n) {
                            let e, [t] = await Promise.all([l(n).catch(t => {
                              e = t
                            }), a]);
                            if (void 0 !== e) throw e;
                            i = t
                          } else {
                            if (await a, n = r.route[e], !n) {
                              if ("action" === e) {
                                let e = new URL(t.url),
                                  a = e.pathname + e.search;
                                throw Ae(405, {
                                  method: t.method,
                                  pathname: a,
                                  routeId: r.route.id
                                })
                              }
                              return {
                                type: y.data,
                                result: void 0
                              }
                            }
                            i = await l(n)
                          }
                        else {
                          if (!n) {
                            let e = new URL(t.url);
                            throw Ae(404, {
                              pathname: e.pathname + e.search
                            })
                          }
                          i = await l(n)
                        }
                        c(void 0 !== i.result, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
                      } catch (e) {
                        return {
                          type: y.error,
                          result: e
                        }
                      } finally {
                        s && t.signal.removeEventListener("abort", s)
                      }
                      return i
                    }(t, n, e, i, r, h): Promise.resolve({
                      type: y.data,
                      result: void 0
                    }))
                  })
                }),
                m = await e({
                  matches: p,
                  request: n,
                  params: i[0].params,
                  fetcherKey: s,
                  context: h
                });
              try {
                await Promise.all(f)
              } catch (e) {}
              return m
            }(R, e, 0, r, n, o, s, f, i)
          } catch (e) {
            return n.forEach(t => {
              u[t.route.id] = {
                type: y.error,
                error: e
              }
            }), u
          }
          for (let [e, t] of Object.entries(l))
            if (_e(t)) {
              let a = t.result;
              u[e] = {
                type: y.redirect,
                response: we(a, r, e, o, m, E.v7_relativeSplatPath)
              }
            } else u[e] = await be(t);
          return u
        }
        async function ze(t, r, a, n, o) {
          let i = t.matches,
            s = Ie("loader", 0, o, a, r, null),
            l = Promise.all(n.map(async t => {
              if (t.matches && t.match && t.controller) {
                let r = (await Ie("loader", 0, Re(e.history, t.path, t.controller.signal), [t.match], t.matches, t.key))[t.match.route.id];
                return {
                  [t.key]: r
                }
              }
              return Promise.resolve({
                [t.key]: {
                  type: y.error,
                  error: Ae(404, {
                    pathname: t.path
                  })
                }
              })
            })),
            c = await s,
            d = (await l).reduce((e, t) => Object.assign(e, t), {});
          return await Promise.all([We(r, c, o.signal, i, t.loaderData), Fe(r, d, n)]), {
            loaderResults: c,
            fetcherResults: d
          }
        }

        function Ne() {
          $ = !0, q.push(...st()), Z.forEach((e, t) => {
            V.has(t) && K.add(t), Ze(t)
          })
        }

        function Ye(e, t, r) {
          void 0 === r && (r = {}), I.fetchers.set(e, t), me({
            fetchers: new Map(I.fetchers)
          }, {
            flushSync: !0 === (r && r.flushSync)
          })
        }

        function Xe(e, t, r, a) {
          void 0 === a && (a = {});
          let n = Me(I.matches, t);
          Qe(e), me({
            errors: {
              [n.route.id]: r
            },
            fetchers: new Map(I.fetchers)
          }, {
            flushSync: !0 === (a && a.flushSync)
          })
        }

        function Ge(e) {
          return ee.set(e, (ee.get(e) || 0) + 1), le.has(e) && le.delete(e), I.fetchers.get(e) || ae
        }

        function Qe(e) {
          let t = I.fetchers.get(e);
          !V.has(e) || t && "loading" === t.state && G.has(e) || Ze(e), Z.delete(e), G.delete(e), Q.delete(e), E.v7_fetcherPersist && le.delete(e), K.delete(e), I.fetchers.delete(e)
        }

        function Ze(e) {
          let t = V.get(e);
          t && (t.abort(), V.delete(e))
        }

        function et(e) {
          for (let t of e) {
            let e = Je(Ge(t).data);
            I.fetchers.set(t, e)
          }
        }

        function tt() {
          let e = [],
            t = !1;
          for (let r of Q) {
            let a = I.fetchers.get(r);
            c(a, "Expected fetcher: " + r), "loading" === a.state && (Q.delete(r), e.push(r), t = !0)
          }
          return et(e), t
        }

        function rt(e) {
          let t = [];
          for (let [r, a] of G)
            if (a < e) {
              let e = I.fetchers.get(r);
              c(e, "Expected fetcher: " + r), "loading" === e.state && (Ze(r), G.delete(r), t.push(r))
            } return et(t), t.length > 0
        }

        function at(e) {
          I.blockers.delete(e), pe.delete(e)
        }

        function nt(e, t) {
          let r = I.blockers.get(e) || ne;
          c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
          let a = new Map(I.blockers);
          a.set(e, t), me({
            blockers: a
          })
        }

        function ot(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: a
          } = e;
          if (0 === pe.size) return;
          pe.size > 1 && d(!1, "A router only supports one blocker at a time");
          let n = Array.from(pe.entries()),
            [o, i] = n[n.length - 1],
            s = I.blockers.get(o);
          return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: a
          }) ? o : void 0
        }

        function it(e) {
          let t = Ae(404, {
              pathname: e
            }),
            r = s || p,
            {
              matches: a,
              route: n
            } = Le(r);
          return st(), {
            notFoundMatches: a,
            route: n,
            error: t
          }
        }

        function st(e) {
          let t = [];
          return ue.forEach((r, a) => {
            e && !e(a) || (r.cancel(), t.push(a), ue.delete(a))
          }), t
        }

        function lt(e, t) {
          return M && M(e, t.map(e => S(e, I.loaderData))) || e.key
        }

        function ct(e, t) {
          if (k) {
            let r = lt(e, t),
              a = k[r];
            if ("number" == typeof a) return a
          }
          return null
        }

        function dt(e, t, r) {
          if (D) {
            if (!e) return {
              active: !0,
              matches: w(t, r, m, !0) || []
            };
            if (Object.keys(e[0].params).length > 0) return {
              active: !0,
              matches: w(t, r, m, !0)
            }
          }
          return {
            active: !1,
            matches: null
          }
        }
        async function ut(e, t, r, a) {
          if (!D) return {
            type: "success",
            matches: e
          };
          let n = e;
          for (;;) {
            let e = null == s,
              o = s || p,
              l = f;
            try {
              await D({
                signal: r,
                path: t,
                matches: n,
                fetcherKey: a,
                patch: (e, t) => {
                  r.aborted || ye(e, t, o, l, i)
                }
              })
            } catch (e) {
              return {
                type: "error",
                error: e,
                partialMatches: n
              }
            } finally {
              e && !r.aborted && (p = [...p])
            }
            if (r.aborted) return {
              type: "aborted"
            };
            let c = b(o, t, m);
            if (c) return {
              type: "success",
              matches: c
            };
            let d = w(o, t, m, !0);
            if (!d || n.length === d.length && n.every((e, t) => e.route.id === d[t].route.id)) return {
              type: "success",
              matches: null
            };
            n = d
          }
        }
        return u = {
          get basename() {
            return m
          },
          get future() {
            return E
          },
          get state() {
            return I
          },
          get routes() {
            return p
          },
          get window() {
            return t
          },
          initialize: function() {
            if (x = e.history.listen(t => {
                let {
                  action: r,
                  location: a,
                  delta: n
                } = t;
                if (U) return U(), void(U = void 0);
                d(0 === pe.size || null != n, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let o = ot({
                  currentLocation: I.location,
                  nextLocation: a,
                  historyAction: r
                });
                if (o && null != n) {
                  let t = new Promise(e => {
                    U = e
                  });
                  return e.history.go(-1 * n), void nt(o, {
                    state: "blocked",
                    location: a,
                    proceed() {
                      nt(o, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: a
                      }), t.then(() => e.history.go(n))
                    },
                    reset() {
                      let e = new Map(I.blockers);
                      e.set(o, ne), me({
                        blockers: e
                      })
                    }
                  })
                }
                return De(r, a)
              }), r) {
              ! function(e, t) {
                try {
                  let r = e.sessionStorage.getItem(se);
                  if (r) {
                    let e = JSON.parse(r);
                    for (let [r, a] of Object.entries(e || {})) a && Array.isArray(a) && t.set(r, new Set(a || []))
                  }
                } catch (e) {}
              }(t, F);
              let e = () => function(e, t) {
                if (t.size > 0) {
                  let r = {};
                  for (let [e, a] of t) r[e] = [...a];
                  try {
                    e.sessionStorage.setItem(se, JSON.stringify(r))
                  } catch (e) {
                    d(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                  }
                }
              }(t, F);
              t.addEventListener("pagehide", e), B = () => t.removeEventListener("pagehide", e)
            }
            return I.initialized || De(n.Pop, I.location, {
              initialHydration: !0
            }), u
          },
          subscribe: function(e) {
            return P.add(e), () => P.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (k = e, L = t, M = r || null, !A && I.navigation === re) {
              A = !0;
              let e = ct(I.location, I.matches);
              null != e && me({
                restoreScrollPosition: e
              })
            }
            return () => {
              k = null, L = null, M = null
            }
          },
          navigate: async function t(r, o) {
            if ("number" == typeof r) return void e.history.go(r);
            let i = ce(I.location, I.matches, m, E.v7_prependBasename, r, E.v7_relativeSplatPath, null == o ? void 0 : o.fromRouteId, null == o ? void 0 : o.relative),
              {
                path: s,
                submission: l,
                error: c
              } = de(E.v7_normalizeFormMethod, !1, i, o),
              d = I.location,
              u = h(I.location, s, o && o.state);
            u = a({}, u, e.history.encodeLocation(u));
            let f = o && null != o.replace ? o.replace : void 0,
              p = n.Push;
            !0 === f ? p = n.Replace : !1 === f || null != l && He(l.formMethod) && l.formAction === I.location.pathname + I.location.search && (p = n.Replace);
            let y = o && "preventScrollReset" in o ? !0 === o.preventScrollReset : void 0,
              v = !0 === (o && o.flushSync),
              g = ot({
                currentLocation: d,
                nextLocation: u,
                historyAction: p
              });
            if (!g) return await De(p, u, {
              submission: l,
              pendingError: c,
              preventScrollReset: y,
              replace: o && o.replace,
              enableViewTransition: o && o.viewTransition,
              flushSync: v
            });
            nt(g, {
              state: "blocked",
              location: u,
              proceed() {
                nt(g, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: u
                }), t(r, o)
              },
              reset() {
                let e = new Map(I.blockers);
                e.set(g, ne), me({
                  blockers: e
                })
              }
            })
          },
          fetch: function(t, r, a, n) {
            if (o) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            Ze(t);
            let i = !0 === (n && n.flushSync),
              l = s || p,
              d = ce(I.location, I.matches, m, E.v7_prependBasename, a, E.v7_relativeSplatPath, r, null == n ? void 0 : n.relative),
              u = b(l, d, m),
              h = dt(u, l, d);
            if (h.active && h.matches && (u = h.matches), !u) return void Xe(t, r, Ae(404, {
              pathname: d
            }), {
              flushSync: i
            });
            let {
              path: f,
              submission: y,
              error: v
            } = de(E.v7_normalizeFormMethod, !0, d, n);
            if (v) return void Xe(t, r, v, {
              flushSync: i
            });
            let g = $e(u, f),
              w = !0 === (n && n.preventScrollReset);
            y && He(y.formMethod) ? async function(t, r, a, n, o, i, l, d, u) {
              function h(e) {
                if (!e.route.action && !e.route.lazy) {
                  let e = Ae(405, {
                    method: u.formMethod,
                    pathname: a,
                    routeId: r
                  });
                  return Xe(t, r, e, {
                    flushSync: l
                  }), !0
                }
                return !1
              }
              if (Ne(), Z.delete(t), !i && h(n)) return;
              let f = I.fetchers.get(t);
              Ye(t, function(e, t) {
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
              }(u, f), {
                flushSync: l
              });
              let y = new AbortController,
                v = Re(e.history, a, y.signal, u);
              if (i) {
                let e = await ut(o, new URL(v.url).pathname, v.signal, t);
                if ("aborted" === e.type) return;
                if ("error" === e.type) return void Xe(t, r, e.error, {
                  flushSync: l
                });
                if (!e.matches) return void Xe(t, r, Ae(404, {
                  pathname: a
                }), {
                  flushSync: l
                });
                if (h(n = $e(o = e.matches, a))) return
              }
              V.set(t, y);
              let g = J,
                w = (await Ie("action", 0, v, [n], o, t))[n.route.id];
              if (v.signal.aborted) return void(V.get(t) === y && V.delete(t));
              if (E.v7_fetcherPersist && le.has(t)) {
                if (Ue(w) || Oe(w)) return void Ye(t, Je(void 0))
              } else {
                if (Ue(w)) return V.delete(t), X > g ? void Ye(t, Je(void 0)) : (Q.add(t), Ye(t, Ve(u)), Te(v, w, !1, {
                  fetcherSubmission: u,
                  preventScrollReset: d
                }));
                if (Oe(w)) return void Xe(t, r, w.error)
              }
              if (Ce(w)) throw Ae(400, {
                type: "defer-action"
              });
              let S = I.navigation.location || I.location,
                R = Re(e.history, S, y.signal),
                D = s || p,
                x = "idle" !== I.navigation.state ? b(D, I.navigation.location, m) : I.matches;
              c(x, "Didn't find any matches after fetcher action");
              let P = ++J;
              G.set(t, P);
              let k = Ve(u, w.data);
              I.fetchers.set(t, k);
              let [M, L] = he(e.history, I, x, u, S, !1, E.v7_skipActionErrorRevalidation, $, q, K, le, Z, Q, D, m, [n.route.id, w]);
              L.filter(e => e.key !== t).forEach(e => {
                let t = e.key,
                  r = I.fetchers.get(t),
                  a = Ve(void 0, r ? r.data : void 0);
                I.fetchers.set(t, a), Ze(t), e.controller && V.set(t, e.controller)
              }), me({
                fetchers: new Map(I.fetchers)
              });
              let A = () => L.forEach(e => Ze(e.key));
              y.signal.addEventListener("abort", A);
              let {
                loaderResults: j,
                fetcherResults: T
              } = await ze(I, x, M, L, R);
              if (y.signal.aborted) return;
              y.signal.removeEventListener("abort", A), G.delete(t), V.delete(t), L.forEach(e => V.delete(e.key));
              let _ = je(j);
              if (_) return Te(R, _.result, !1, {
                preventScrollReset: d
              });
              if (_ = je(T), _) return Q.add(_.key), Te(R, _.result, !1, {
                preventScrollReset: d
              });
              let {
                loaderData: C,
                errors: U
              } = xe(I, x, j, void 0, L, T, ue);
              if (I.fetchers.has(t)) {
                let e = Je(w.data);
                I.fetchers.set(t, e)
              }
              rt(P), "loading" === I.navigation.state && P > X ? (c(z, "Expected pending action"), O && O.abort(), ve(I.navigation.location, {
                matches: x,
                loaderData: C,
                errors: U,
                fetchers: new Map(I.fetchers)
              })) : (me({
                errors: U,
                loaderData: Pe(I.loaderData, C, x, U),
                fetchers: new Map(I.fetchers)
              }), $ = !1)
            }(t, r, f, g, u, h.active, i, w, y): (Z.set(t, {
              routeId: r,
              path: f
            }), async function(t, r, a, n, o, i, s, l, d) {
              let u = I.fetchers.get(t);
              Ye(t, Ve(d, u ? u.data : void 0), {
                flushSync: s
              });
              let h = new AbortController,
                f = Re(e.history, a, h.signal);
              if (i) {
                let e = await ut(o, new URL(f.url).pathname, f.signal, t);
                if ("aborted" === e.type) return;
                if ("error" === e.type) return void Xe(t, r, e.error, {
                  flushSync: s
                });
                if (!e.matches) return void Xe(t, r, Ae(404, {
                  pathname: a
                }), {
                  flushSync: s
                });
                n = $e(o = e.matches, a)
              }
              V.set(t, h);
              let p = J,
                m = (await Ie("loader", 0, f, [n], o, t))[n.route.id];
              if (Ce(m) && (m = await Be(m, f.signal, !0) || m), V.get(t) === h && V.delete(t), !f.signal.aborted) {
                if (!le.has(t)) return Ue(m) ? X > p ? void Ye(t, Je(void 0)) : (Q.add(t), void await Te(f, m, !1, {
                  preventScrollReset: l
                })) : void(Oe(m) ? Xe(t, r, m.error) : (c(!Ce(m), "Unhandled fetcher deferred data"), Ye(t, Je(m.data))));
                Ye(t, Je(void 0))
              }
            }(t, r, f, g, u, h.active, i, w, y))
          },
          revalidate: function() {
            Ne(), me({
              revalidation: "loading"
            }), "submitting" !== I.navigation.state && ("idle" !== I.navigation.state ? De(z || I.historyAction, I.navigation.location, {
              overrideNavigation: I.navigation,
              enableViewTransition: !0 === W
            }) : De(I.historyAction, I.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: Ge,
          deleteFetcher: function(e) {
            let t = (ee.get(e) || 0) - 1;
            t <= 0 ? (ee.delete(e), le.add(e), E.v7_fetcherPersist || Qe(e)) : ee.set(e, t), me({
              fetchers: new Map(I.fetchers)
            })
          },
          dispose: function() {
            x && x(), B && B(), P.clear(), O && O.abort(), I.fetchers.forEach((e, t) => Qe(t)), I.blockers.forEach((e, t) => at(t))
          },
          getBlocker: function(e, t) {
            let r = I.blockers.get(e) || ne;
            return pe.get(e) !== t && pe.set(e, t), r
          },
          deleteBlocker: at,
          patchRoutes: function(e, t) {
            let r = null == s;
            ye(e, t, s || p, f, i), r && (p = [...p], me({}))
          },
          _internalFetchControllers: V,
          _internalActiveDeferreds: ue,
          _internalSetRoutes: function(e) {
            f = {}, s = g(e, i, void 0, f)
          }
        }, u
      }

      function ce(e, t, r, a, n, o, i, s) {
        let l, c;
        if (i) {
          l = [];
          for (let e of t)
            if (l.push(e), e.route.id === i) {
              c = e;
              break
            }
        } else l = t, c = t[t.length - 1];
        let d = z(n || ".", I(l, o), j(e.pathname, r) || e.pathname, "path" === s);
        if (null == n && (d.search = e.search, d.hash = e.hash), (null == n || "" === n || "." === n) && c) {
          let e = Ne(d.search);
          if (c.route.index && !e) d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index";
          else if (!c.route.index && e) {
            let e = new URLSearchParams(d.search),
              t = e.getAll("index");
            e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
            let r = e.toString();
            d.search = r ? "?" + r : ""
          }
        }
        return a && "/" !== r && (d.pathname = "/" === d.pathname ? r : W([r, d.pathname])), f(d)
      }

      function de(e, t, r, a) {
        if (!a || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
          }(a)) return {
          path: r
        };
        if (a.formMethod && (n = a.formMethod, !Z.has(n.toLowerCase()))) return {
          path: r,
          error: Ae(405, {
            method: a.formMethod
          })
        };
        var n;
        let o, i, s = () => ({
            path: r,
            error: Ae(400, {
              type: "invalid-body"
            })
          }),
          l = a.formMethod || "get",
          d = e ? l.toUpperCase() : l.toLowerCase(),
          u = Te(r);
        if (void 0 !== a.body) {
          if ("text/plain" === a.formEncType) {
            if (!He(d)) return s();
            let e = "string" == typeof a.body ? a.body : a.body instanceof FormData || a.body instanceof URLSearchParams ? Array.from(a.body.entries()).reduce((e, t) => {
              let [r, a] = t;
              return "" + e + r + "=" + a + "\n"
            }, "") : String(a.body);
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
            if (!He(d)) return s();
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
        if (c("function" == typeof FormData, "FormData is not available in this environment"), a.formData) o = De(a.formData), i = a.formData;
        else if (a.body instanceof FormData) o = De(a.body), i = a.body;
        else if (a.body instanceof URLSearchParams) o = a.body, i = Ee(o);
        else if (null == a.body) o = new URLSearchParams, i = new FormData;
        else try {
          o = new URLSearchParams(a.body), i = Ee(o)
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
        if (He(h.formMethod)) return {
          path: r,
          submission: h
        };
        let m = p(r);
        return t && m.search && Ne(m.search) && o.append("index", ""), m.search = "?" + o, {
          path: f(m),
          submission: h
        }
      }

      function ue(e, t, r) {
        void 0 === r && (r = !1);
        let a = e.findIndex(e => e.route.id === t);
        return a >= 0 ? e.slice(0, r ? a + 1 : a) : e
      }

      function he(e, t, r, n, o, i, s, l, c, d, u, h, f, p, m, y) {
        let v = y ? Oe(y[1]) ? y[1].error : y[1].data : void 0,
          g = e.createURL(t.location),
          w = e.createURL(o),
          S = r;
        i && t.errors ? S = ue(r, Object.keys(t.errors)[0], !0) : y && Oe(y[1]) && (S = ue(r, y[0]));
        let R = y ? y[1].statusCode : void 0,
          D = s && R && R >= 400,
          E = S.filter((e, r) => {
            let {
              route: o
            } = e;
            if (o.lazy) return !0;
            if (null == o.loader) return !1;
            if (i) return fe(o, t.loaderData, t.errors);
            if (function(e, t, r) {
                let a = !t || r.route.id !== t.route.id,
                  n = void 0 === e[r.route.id];
                return a || n
              }(t.loaderData, t.matches[r], e) || c.some(t => t === e.route.id)) return !0;
            let s = t.matches[r],
              d = e;
            return me(e, a({
              currentUrl: g,
              currentParams: s.params,
              nextUrl: w,
              nextParams: d.params
            }, n, {
              actionResult: v,
              actionStatus: R,
              defaultShouldRevalidate: !D && (l || g.pathname + g.search === w.pathname + w.search || g.search !== w.search || pe(s, d))
            }))
          }),
          x = [];
        return h.forEach((e, o) => {
          if (i || !r.some(t => t.route.id === e.routeId) || u.has(o)) return;
          let s = b(p, e.path, m);
          if (!s) return void x.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let c = t.fetchers.get(o),
            h = $e(s, e.path),
            y = !1;
          f.has(o) ? y = !1 : d.has(o) ? (d.delete(o), y = !0) : y = c && "idle" !== c.state && void 0 === c.data ? l : me(h, a({
            currentUrl: g,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: w,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: v,
            actionStatus: R,
            defaultShouldRevalidate: !D && l
          })), y && x.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: s,
            match: h,
            controller: new AbortController
          })
        }), [E, x]
      }

      function fe(e, t, r) {
        if (e.lazy) return !0;
        if (!e.loader) return !1;
        let a = null != t && void 0 !== t[e.id],
          n = null != r && void 0 !== r[e.id];
        return !(!a && n) && ("function" == typeof e.loader && !0 === e.loader.hydrate || !a && !n)
      }

      function pe(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function me(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }

      function ye(e, t, r, a, n) {
        var o;
        let i;
        if (e) {
          let t = a[e];
          c(t, "No route found to patch children into: routeId = " + e), t.children || (t.children = []), i = t.children
        } else i = r;
        let s = g(t.filter(e => !i.some(t => ve(e, t))), n, [e || "_", "patch", String((null == (o = i) ? void 0 : o.length) || "0")], a);
        i.push(...s)
      }

      function ve(e, t) {
        return "id" in e && "id" in t && e.id === t.id || e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive && (!(e.children && 0 !== e.children.length || t.children && 0 !== t.children.length) || e.children.every((e, r) => {
          var a;
          return null == (a = t.children) ? void 0 : a.some(t => ve(e, t))
        }))
      }
      async function ge(e) {
        let {
          matches: t
        } = e, r = t.filter(e => e.shouldLoad);
        return (await Promise.all(r.map(e => e.resolve()))).reduce((e, t, a) => Object.assign(e, {
          [r[a].route.id]: t
        }), {})
      }
      async function be(e) {
        let {
          result: t,
          type: r
        } = e;
        if (ze(t)) {
          let e;
          try {
            let r = t.headers.get("Content-Type");
            e = r && /\bapplication\/json\b/.test(r) ? null == t.body ? null : await t.json() : await t.text()
          } catch (e) {
            return {
              type: y.error,
              error: e
            }
          }
          return r === y.error ? {
            type: y.error,
            error: new J(t.status, t.statusText, e),
            statusCode: t.status,
            headers: t.headers
          } : {
            type: y.data,
            data: e,
            statusCode: t.status,
            headers: t.headers
          }
        }
        var a, n, o, i, s, l, c, d;
        return r === y.error ? Ie(t) ? t.data instanceof Error ? {
          type: y.error,
          error: t.data,
          statusCode: null == (o = t.init) ? void 0 : o.status,
          headers: null != (i = t.init) && i.headers ? new Headers(t.init.headers) : void 0
        } : {
          type: y.error,
          error: new J((null == (a = t.init) ? void 0 : a.status) || 500, void 0, t.data),
          statusCode: Y(t) ? t.status : void 0,
          headers: null != (n = t.init) && n.headers ? new Headers(t.init.headers) : void 0
        } : {
          type: y.error,
          error: t,
          statusCode: Y(t) ? t.status : void 0
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(t) ? {
          type: y.deferred,
          deferredData: t,
          statusCode: null == (s = t.init) ? void 0 : s.status,
          headers: (null == (l = t.init) ? void 0 : l.headers) && new Headers(t.init.headers)
        } : Ie(t) ? {
          type: y.data,
          data: t.data,
          statusCode: null == (c = t.init) ? void 0 : c.status,
          headers: null != (d = t.init) && d.headers ? new Headers(t.init.headers) : void 0
        } : {
          type: y.data,
          data: t
        }
      }

      function we(e, t, r, a, n, o) {
        let i = e.headers.get("Location");
        if (c(i, "Redirects returned/thrown from loaders/actions must have a Location header"), !oe.test(i)) {
          let s = a.slice(0, a.findIndex(e => e.route.id === r) + 1);
          i = ce(new URL(t.url), s, n, !0, i, o), e.headers.set("Location", i)
        }
        return e
      }

      function Se(e, t, r, a) {
        let n = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"];
        if (oe.test(e)) {
          let a = e,
            o = a.startsWith("//") ? new URL(t.protocol + a) : new URL(a);
          if (n.includes(o.protocol)) throw new Error("Invalid redirect location");
          let i = null != j(o.pathname, r);
          if (o.origin === t.origin && i) return H(o.pathname) + o.search + o.hash
        }
        try {
          let t = a.createURL(e);
          if (n.includes(t.protocol)) throw new Error("Invalid redirect location")
        } catch (e) {}
        return e
      }

      function Re(e, t, r, a) {
        let n = e.createURL(Te(t)).toString(),
          o = {
            signal: r
          };
        if (a && He(a.formMethod)) {
          let {
            formMethod: e,
            formEncType: t
          } = a;
          o.method = e.toUpperCase(), "application/json" === t ? (o.headers = new Headers({
            "Content-Type": t
          }), o.body = JSON.stringify(a.json)) : "text/plain" === t ? o.body = a.text : "application/x-www-form-urlencoded" === t && a.formData ? o.body = De(a.formData) : o.body = a.formData
        }
        return new Request(n, o)
      }

      function De(e) {
        let t = new URLSearchParams;
        for (let [r, a] of e.entries()) t.append(r, "string" == typeof a ? a : a.name);
        return t
      }

      function Ee(e) {
        let t = new FormData;
        for (let [r, a] of e.entries()) t.append(r, a);
        return t
      }

      function xe(e, t, r, n, o, i, s) {
        let {
          loaderData: l,
          errors: d
        } = function(e, t, r, a, n) {
          let o, i = {},
            s = null,
            l = !1,
            d = {},
            u = r && Oe(r[1]) ? r[1].error : void 0;
          return e.forEach(r => {
            if (!(r.route.id in t)) return;
            let h = r.route.id,
              f = t[h];
            if (c(!Ue(f), "Cannot handle redirect results in processLoaderData"), Oe(f)) {
              let t = f.error;
              if (void 0 !== u && (t = u, u = void 0), s = s || {}, n) s[h] = t;
              else {
                let r = Me(e, h);
                null == s[r.route.id] && (s[r.route.id] = t)
              }
              i[h] = void 0, l || (l = !0, o = Y(f.error) ? f.error.status : 500), f.headers && (d[h] = f.headers)
            } else Ce(f) ? (a.set(h, f.deferredData), i[h] = f.deferredData.data, null == f.statusCode || 200 === f.statusCode || l || (o = f.statusCode), f.headers && (d[h] = f.headers)) : (i[h] = f.data, f.statusCode && 200 !== f.statusCode && !l && (o = f.statusCode), f.headers && (d[h] = f.headers))
          }), void 0 !== u && r && (s = {
            [r[0]]: u
          }, i[r[0]] = void 0), {
            loaderData: i,
            errors: s,
            statusCode: o || 200,
            loaderHeaders: d
          }
        }(t, r, n, s, !1);
        return o.forEach(t => {
          let {
            key: r,
            match: n,
            controller: o
          } = t, s = i[r];
          if (c(s, "Did not find corresponding fetcher result"), !o || !o.signal.aborted)
            if (Oe(s)) {
              let t = Me(e.matches, null == n ? void 0 : n.route.id);
              d && d[t.route.id] || (d = a({}, d, {
                [t.route.id]: s.error
              })), e.fetchers.delete(r)
            } else if (Ue(s)) c(!1, "Unhandled fetcher revalidation redirect");
          else if (Ce(s)) c(!1, "Unhandled fetcher deferred data");
          else {
            let t = Je(s.data);
            e.fetchers.set(r, t)
          }
        }), {
          loaderData: l,
          errors: d
        }
      }

      function Pe(e, t, r, n) {
        let o = a({}, t);
        for (let a of r) {
          let r = a.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (o[r] = t[r]) : void 0 !== e[r] && a.route.loader && (o[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return o
      }

      function ke(e) {
        return e ? Oe(e[1]) ? {
          actionData: {}
        } : {
          actionData: {
            [e[0]]: e[1].data
          }
        } : {}
      }

      function Me(e, t) {
        return (t ? e.slice(0, e.findIndex(e => e.route.id === t) + 1) : [...e]).reverse().find(e => !0 === e.route.hasErrorBoundary) || e[0]
      }

      function Le(e) {
        let t = 1 === e.length ? e[0] : e.find(e => e.index || !e.path || "/" === e.path) || {
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

      function Ae(e, t) {
        let {
          pathname: r,
          routeId: a,
          method: n,
          type: o,
          message: i
        } = void 0 === t ? {} : t, s = "Unknown Server Error", l = "Unknown @remix-run/router error";
        return 400 === e ? (s = "Bad Request", n && r && a ? l = "You made a " + n + ' request to "' + r + '" but did not provide a `loader` for route "' + a + '", so there is no way to handle the request.' : "defer-action" === o ? l = "defer() is not supported in actions" : "invalid-body" === o && (l = "Unable to encode submission body")) : 403 === e ? (s = "Forbidden", l = 'Route "' + a + '" does not match URL "' + r + '"') : 404 === e ? (s = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (s = "Method Not Allowed", n && r && a ? l = "You made a " + n.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + a + '", so there is no way to handle the request.' : n && (l = 'Invalid request method "' + n.toUpperCase() + '"')), new J(e || 500, s, new Error(l), !0)
      }

      function je(e) {
        let t = Object.entries(e);
        for (let e = t.length - 1; e >= 0; e--) {
          let [r, a] = t[e];
          if (Ue(a)) return {
            key: r,
            result: a
          }
        }
      }

      function Te(e) {
        return f(a({}, "string" == typeof e ? p(e) : e, {
          hash: ""
        }))
      }

      function _e(e) {
        return ze(e.result) && ee.has(e.result.status)
      }

      function Ce(e) {
        return e.type === y.deferred
      }

      function Oe(e) {
        return e.type === y.error
      }

      function Ue(e) {
        return (e && e.type) === y.redirect
      }

      function Ie(e) {
        return "object" == typeof e && null != e && "type" in e && "data" in e && "init" in e && "DataWithResponseInit" === e.type
      }

      function ze(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "object" == typeof e.headers && void 0 !== e.body
      }

      function He(e) {
        return G.has(e.toLowerCase())
      }
      async function We(e, t, r, a, n) {
        let o = Object.entries(t);
        for (let i = 0; i < o.length; i++) {
          let [s, l] = o[i], c = e.find(e => (null == e ? void 0 : e.route.id) === s);
          if (!c) continue;
          let d = a.find(e => e.route.id === c.route.id),
            u = null != d && !pe(d, c) && void 0 !== (n && n[c.route.id]);
          Ce(l) && u && await Be(l, r, !1).then(e => {
            e && (t[s] = e)
          })
        }
      }
      async function Fe(e, t, r) {
        for (let a = 0; a < r.length; a++) {
          let {
            key: n,
            routeId: o,
            controller: i
          } = r[a], s = t[n];
          e.find(e => (null == e ? void 0 : e.route.id) === o) && Ce(s) && (c(i, "Expected an AbortController for revalidating fetcher deferred result"), await Be(s, i.signal, !0).then(e => {
            e && (t[n] = e)
          }))
        }
      }
      async function Be(e, t, r) {
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

      function Ne(e) {
        return new URLSearchParams(e).getAll("index").some(e => "" === e)
      }

      function $e(e, t) {
        let r = "string" == typeof t ? p(t).search : t.search;
        if (e[e.length - 1].route.index && Ne(r || "")) return e[e.length - 1];
        let a = U(e);
        return a[a.length - 1]
      }

      function qe(e) {
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

      function Ke(e, t) {
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

      function Ve(e, t) {
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

      function Je(e) {
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
      Symbol("deferred"), r.d(t, ["G3", 0, ne, "HC", 0, (e, t) => {
        let r = V(e, t);
        return r.headers.set("X-Remix-Replace", "true"), r
      }, "HS", 0, W, "HW", 0, ae, "Pq", 0, function(e, t) {
        void 0 === t && (t = {});
        let r = "number" == typeof t ? {
            status: t
          } : t,
          n = new Headers(r.headers);
        return n.has("Content-Type") || n.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), a({}, r, {
          headers: n
        }))
      }, "Sk", 0, (e, t) => {
        let r = V(e, t);
        return r.headers.set("X-Remix-Reload-Document", "true"), r
      }, "V2", 0, V, "v6", 0, function(e, t) {
        return void 0 === t && (t = {}), new q(e, "number" == typeof t ? {
          status: t
        } : t)
      }])
    }
  }
]);