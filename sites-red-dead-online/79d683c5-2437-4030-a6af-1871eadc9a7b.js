try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "79d683c5-2437-4030-a6af-1871eadc9a7b", e._sentryDebugIdIdentifier = "sentry-dbid-79d683c5-2437-4030-a6af-1871eadc9a7b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [4105], {
    29609: (e, t, r) => {
      var n = r(62229);

      function a(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          t += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }

      function o() {}
      var i = {
          d: {
            f: o,
            r: function() {
              throw Error(a(522))
            },
            D: o,
            C: o,
            L: o,
            m: o,
            X: o,
            S: o,
            M: o
          },
          p: 0,
          findDOMNode: null
        },
        s = Symbol.for("react.portal"),
        l = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

      function u(e, t) {
        return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
      }
      t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, t.createPortal = function(e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(a(299));
        return function(e, t, r) {
          var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: s,
            key: null == n ? null : "" + n,
            children: e,
            containerInfo: t,
            implementation: r
          }
        }(e, t, null, r)
      }, t.flushSync = function(e) {
        var t = l.T,
          r = i.p;
        try {
          if (l.T = null, i.p = 2, e) return e()
        } finally {
          l.T = t, i.p = r, i.d.f()
        }
      }, t.preconnect = function(e, t) {
        "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, i.d.C(e, t))
      }, t.prefetchDNS = function(e) {
        "string" == typeof e && i.d.D(e)
      }, t.preinit = function(e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
          var r = t.as,
            n = u(r, t.crossOrigin),
            a = "string" == typeof t.integrity ? t.integrity : void 0,
            o = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
          "style" === r ? i.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
            crossOrigin: n,
            integrity: a,
            fetchPriority: o
          }) : "script" === r && i.d.X(e, {
            crossOrigin: n,
            integrity: a,
            fetchPriority: o,
            nonce: "string" == typeof t.nonce ? t.nonce : void 0
          })
        }
      }, t.preinitModule = function(e, t) {
        if ("string" == typeof e)
          if ("object" == typeof t && null !== t) {
            if (null == t.as || "script" === t.as) {
              var r = u(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: r,
                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0
              })
            }
          } else null == t && i.d.M(e)
      }, t.preload = function(e, t) {
        if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
          var r = t.as,
            n = u(r, t.crossOrigin);
          i.d.L(e, r, {
            crossOrigin: n,
            integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            nonce: "string" == typeof t.nonce ? t.nonce : void 0,
            type: "string" == typeof t.type ? t.type : void 0,
            fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
            referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
            imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
            imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
            media: "string" == typeof t.media ? t.media : void 0
          })
        }
      }, t.preloadModule = function(e, t) {
        if ("string" == typeof e)
          if (t) {
            var r = u(t.as, t.crossOrigin);
            i.d.m(e, {
              as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
              crossOrigin: r,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0
            })
          } else i.d.m(e)
      }, t.requestFormReset = function(e) {
        i.d.r(e)
      }, t.unstable_batchedUpdates = function(e, t) {
        return e(t)
      }, t.useFormState = function(e, t, r) {
        return l.H.useFormState(e, t, r)
      }, t.useFormStatus = function() {
        return l.H.useHostTransitionStatus()
      }, t.version = "19.1.0"
    },
    90621: (e, t, r) => {
      ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
          console.error(e)
        }
      }(), e.exports = r(29609)
    },
    94105: (e, t, r) => {
      r.r(t), r.d(t, {
        AbortedDeferredError: () => X,
        Await: () => ar,
        BrowserRouter: () => Ir,
        Form: () => Vr,
        HashRouter: () => Br,
        Link: () => Wr,
        MemoryRouter: () => Qt,
        NavLink: () => $r,
        Navigate: () => Zt,
        NavigationType: () => n,
        Outlet: () => er,
        Route: () => tr,
        Router: () => rr,
        RouterProvider: () => jr,
        Routes: () => nr,
        ScrollRestoration: () => Jr,
        UNSAFE_DataRouterContext: () => ot,
        UNSAFE_DataRouterStateContext: () => it,
        UNSAFE_ErrorResponseImpl: () => ne,
        UNSAFE_FetchersContext: () => kr,
        UNSAFE_LocationContext: () => ut,
        UNSAFE_NavigationContext: () => lt,
        UNSAFE_RouteContext: () => ct,
        UNSAFE_ViewTransitionContext: () => Pr,
        UNSAFE_useRouteId: () => jt,
        UNSAFE_useScrollRestoration: () => un,
        createBrowserRouter: () => _r,
        createHashRouter: () => Dr,
        createMemoryRouter: () => hr,
        createPath: () => v,
        createRoutesFromChildren: () => ur,
        createRoutesFromElements: () => ur,
        createSearchParams: () => gr,
        defer: () => Z,
        generatePath: () => j,
        isRouteErrorResponse: () => ae,
        json: () => q,
        matchPath: () => N,
        matchRoutes: () => E,
        parsePath: () => y,
        redirect: () => ee,
        redirectDocument: () => te,
        renderMatches: () => cr,
        replace: () => re,
        resolvePath: () => B,
        unstable_HistoryRouter: () => Hr,
        unstable_usePrompt: () => dn,
        useActionData: () => zt,
        useAsyncError: () => $t,
        useAsyncValue: () => Wt,
        useBeforeUnload: () => cn,
        useBlocker: () => Jt,
        useFetcher: () => an,
        useFetchers: () => on,
        useFormAction: () => nn,
        useHref: () => ht,
        useInRouterContext: () => ft,
        useLinkClickHandler: () => Qr,
        useLoaderData: () => Bt,
        useLocation: () => pt,
        useMatch: () => vt,
        useMatches: () => It,
        useNavigate: () => gt,
        useNavigation: () => Nt,
        useNavigationType: () => mt,
        useOutlet: () => St,
        useOutletContext: () => wt,
        useParams: () => Et,
        useResolvedPath: () => Rt,
        useRevalidator: () => Ft,
        useRouteError: () => Kt,
        useRouteLoaderData: () => Ht,
        useRoutes: () => xt,
        useSearchParams: () => Zr,
        useSubmit: () => rn,
        useViewTransitionState: () => hn
      });
      var n, a = r(62229),
        o = r(90621),
        i = r.t(o, 2);

      function s() {
        return s = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, s.apply(this, arguments)
      }! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(n || (n = {}));
      const l = "popstate";

      function u(e) {
        void 0 === e && (e = {});
        let t, {
          initialEntries: r = ["/"],
          initialIndex: a,
          v5Compat: o = !1
        } = e;
        t = r.map(((e, t) => d(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
        let i = u(null == a ? t.length - 1 : a),
          s = n.Pop,
          l = null;

        function u(e) {
          return Math.min(Math.max(e, 0), t.length - 1)
        }

        function c() {
          return t[i]
        }

        function d(e, r, n) {
          void 0 === r && (r = null);
          let a = m(t ? c().pathname : "/", e, r, n);
          return f("/" === a.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), a
        }

        function h(e) {
          return "string" == typeof e ? e : v(e)
        }
        return {
          get index() {
            return i
          },
          get action() {
            return s
          },
          get location() {
            return c()
          },
          createHref: h,
          createURL: e => new URL(h(e), "http://localhost"),
          encodeLocation(e) {
            let t = "string" == typeof e ? y(e) : e;
            return {
              pathname: t.pathname || "",
              search: t.search || "",
              hash: t.hash || ""
            }
          },
          push(e, r) {
            s = n.Push;
            let a = d(e, r);
            i += 1, t.splice(i, t.length, a), o && l && l({
              action: s,
              location: a,
              delta: 1
            })
          },
          replace(e, r) {
            s = n.Replace;
            let a = d(e, r);
            t[i] = a, o && l && l({
              action: s,
              location: a,
              delta: 0
            })
          },
          go(e) {
            s = n.Pop;
            let r = u(i + e),
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

      function c(e) {
        return void 0 === e && (e = {}), g((function(e, t) {
          let {
            pathname: r,
            search: n,
            hash: a
          } = e.location;
          return m("", {
            pathname: r,
            search: n,
            hash: a
          }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
          return "string" == typeof t ? t : v(t)
        }), null, e)
      }

      function d(e) {
        return void 0 === e && (e = {}), g((function(e, t) {
          let {
            pathname: r = "/",
            search: n = "",
            hash: a = ""
          } = y(e.location.hash.substr(1));
          return r.startsWith("/") || r.startsWith(".") || (r = "/" + r), m("", {
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
          return n + "#" + ("string" == typeof t ? t : v(t))
        }), (function(e, t) {
          f("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
        }), e)
      }

      function h(e, t) {
        if (!1 === e || null == e) throw new Error(t)
      }

      function f(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t)
          } catch (e) {}
        }
      }

      function p(e, t) {
        return {
          usr: e.state,
          key: e.key,
          idx: t
        }
      }

      function m(e, t, r, n) {
        return void 0 === r && (r = null), s({
          pathname: "string" == typeof e ? e : e.pathname,
          search: "",
          hash: ""
        }, "string" == typeof t ? y(t) : t, {
          state: r,
          key: t && t.key || n || Math.random().toString(36).substr(2, 8)
        })
      }

      function v(e) {
        let {
          pathname: t = "/",
          search: r = "",
          hash: n = ""
        } = e;
        return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n), t
      }

      function y(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
          let n = e.indexOf("?");
          n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
        }
        return t
      }

      function g(e, t, r, a) {
        void 0 === a && (a = {});
        let {
          window: o = document.defaultView,
          v5Compat: i = !1
        } = a, u = o.history, c = n.Pop, d = null, f = y();

        function y() {
          return (u.state || {
            idx: null
          }).idx
        }

        function g() {
          c = n.Pop;
          let e = y(),
            t = null == e ? null : e - f;
          f = e, d && d({
            action: c,
            location: w.location,
            delta: t
          })
        }

        function b(e) {
          let t = "null" !== o.location.origin ? o.location.origin : o.location.href,
            r = "string" == typeof e ? e : v(e);
          return r = r.replace(/ $/, "%20"), h(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
        }
        null == f && (f = 0, u.replaceState(s({}, u.state, {
          idx: f
        }), ""));
        let w = {
          get action() {
            return c
          },
          get location() {
            return e(o, u)
          },
          listen(e) {
            if (d) throw new Error("A history only accepts one active listener");
            return o.addEventListener(l, g), d = e, () => {
              o.removeEventListener(l, g), d = null
            }
          },
          createHref: e => t(o, e),
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
            c = n.Push;
            let a = m(w.location, e, t);
            r && r(a, e), f = y() + 1;
            let s = p(a, f),
              l = w.createHref(a);
            try {
              u.pushState(s, "", l)
            } catch (e) {
              if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
              o.location.assign(l)
            }
            i && d && d({
              action: c,
              location: w.location,
              delta: 1
            })
          },
          replace: function(e, t) {
            c = n.Replace;
            let a = m(w.location, e, t);
            r && r(a, e), f = y();
            let o = p(a, f),
              s = w.createHref(a);
            u.replaceState(o, "", s), i && d && d({
              action: c,
              location: w.location,
              delta: 0
            })
          },
          go: e => u.go(e)
        };
        return w
      }
      var b;
      ! function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(b || (b = {}));
      const w = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

      function S(e, t, r, n) {
        return void 0 === r && (r = []), void 0 === n && (n = {}), e.map(((e, a) => {
          let o = [...r, String(a)],
            i = "string" == typeof e.id ? e.id : o.join("-");
          if (h(!0 !== e.index || !e.children, "Cannot specify children on an index route"), h(!n[i], 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
              return !0 === e.index
            }(e)) {
            let r = s({}, e, t(e), {
              id: i
            });
            return n[i] = r, r
          } {
            let r = s({}, e, t(e), {
              id: i,
              children: void 0
            });
            return n[i] = r, e.children && (r.children = S(e.children, t, o, n)), r
          }
        }))
      }

      function E(e, t, r) {
        return void 0 === r && (r = "/"), R(e, t, r, !1)
      }

      function R(e, t, r, n) {
        let a = I(("string" == typeof t ? y(t) : t).pathname || "/", r);
        if (null == a) return null;
        let o = _(e);
        ! function(e) {
          e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
          }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(o);
        let i = null;
        for (let e = 0; null == i && e < o.length; ++e) {
          let t = F(a);
          i = U(o[e], t, n)
        }
        return i
      }

      function x(e, t) {
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

      function _(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e
          };
          i.relativePath.startsWith("/") && (h(i.relativePath.startsWith(n), 'Absolute route path "' + i.relativePath + '" nested under path "' + n + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(n.length));
          let s = $([n, i.relativePath]),
            l = r.concat(i);
          e.children && e.children.length > 0 && (h(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), _(e.children, t, l, s)), (null != e.path || e.index) && t.push({
            path: s,
            score: M(s, e.index),
            routesMeta: l
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
          s = [];
        return s.push(...i.map((e => "" === e ? o : [o, e].join("/")))), a && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
      }
      const C = /^:[\w-]+$/,
        L = 3,
        P = 2,
        k = 1,
        T = 10,
        A = -2,
        O = e => "*" === e;

      function M(e, t) {
        let r = e.split("/"),
          n = r.length;
        return r.some(O) && (n += A), t && (n += P), r.filter((e => !O(e))).reduce(((e, t) => e + (C.test(t) ? L : "" === t ? k : T)), n)
      }

      function U(e, t, r) {
        void 0 === r && (r = !1);
        let {
          routesMeta: n
        } = e, a = {}, o = "/", i = [];
        for (let e = 0; e < n.length; ++e) {
          let s = n[e],
            l = e === n.length - 1,
            u = "/" === o ? t : t.slice(o.length) || "/",
            c = N({
              path: s.relativePath,
              caseSensitive: s.caseSensitive,
              end: l
            }, u),
            d = s.route;
          if (!c && l && r && !n[n.length - 1].route.index && (c = N({
              path: s.relativePath,
              caseSensitive: s.caseSensitive,
              end: !1
            }, u)), !c) return null;
          Object.assign(a, c.params), i.push({
            params: a,
            pathname: $([o, c.pathname]),
            pathnameBase: V($([o, c.pathnameBase])),
            route: d
          }), "/" !== c.pathnameBase && (o = $([o, c.pathnameBase]))
        }
        return i
      }

      function j(e, t) {
        void 0 === t && (t = {});
        let r = e;
        r.endsWith("*") && "*" !== r && !r.endsWith("/*") && (f(!1, 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), r = r.replace(/\*$/, "/*"));
        const n = r.startsWith("/") ? "/" : "",
          a = e => null == e ? "" : "string" == typeof e ? e : String(e);
        return n + r.split(/\/+/).map(((e, r, n) => {
          if (r === n.length - 1 && "*" === e) return a(t["*"]);
          const o = e.match(/^:([\w-]+)(\??)$/);
          if (o) {
            const [, e, r] = o;
            let n = t[e];
            return h("?" === r || null != n, 'Missing ":' + e + '" param'), a(n)
          }
          return e.replace(/\?$/g, "")
        })).filter((e => !!e)).join("/")
      }

      function N(e, t) {
        "string" == typeof e && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
        });
        let [r, n] = function(e, t, r) {
          void 0 === t && (t = !1), void 0 === r && (r = !0), f("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
          let n = [],
            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((e, t, r) => (n.push({
              paramName: t,
              isOptional: null != r
            }), r ? "/?([^\\/]+)?" : "/([^\\/]+)")));
          return e.endsWith("*") ? (n.push({
            paramName: "*"
          }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n]
        }(e.path, e.caseSensitive, e.end), a = t.match(r);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          s = a.slice(1);
        return {
          params: n.reduce(((e, t, r) => {
            let {
              paramName: n,
              isOptional: a
            } = t;
            if ("*" === n) {
              let e = s[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            const l = s[r];
            return e[n] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e
          }), {}),
          pathname: o,
          pathnameBase: i,
          pattern: e
        }
      }

      function F(e) {
        try {
          return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/")
        } catch (t) {
          return f(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
        }
      }

      function I(e, t) {
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
          hash: a = ""
        } = "string" == typeof e ? y(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
          let r = t.replace(/\/+$/, "").split("/");
          return e.split("/").forEach((e => {
            ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
          })), r.length > 1 ? r.join("/") : "/"
        }(r, t) : t;
        return {
          pathname: o,
          search: J(n),
          hash: Y(a)
        }
      }

      function H(e, t, r, n) {
        return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      }

      function z(e) {
        return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
      }

      function K(e, t) {
        let r = z(e);
        return t ? r.map(((e, t) => t === r.length - 1 ? e.pathname : e.pathnameBase)) : r.map((e => e.pathnameBase))
      }

      function W(e, t, r, n) {
        let a;
        void 0 === n && (n = !1), "string" == typeof e ? a = y(e) : (a = s({}, e), h(!a.pathname || !a.pathname.includes("?"), H("?", "pathname", "search", a)), h(!a.pathname || !a.pathname.includes("#"), H("#", "pathname", "hash", a)), h(!a.search || !a.search.includes("#"), H("#", "search", "hash", a)));
        let o, i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (null == l) o = r;
        else {
          let e = t.length - 1;
          if (!n && l.startsWith("..")) {
            let t = l.split("/");
            for (;
              ".." === t[0];) t.shift(), e -= 1;
            a.pathname = t.join("/")
          }
          o = e >= 0 ? t[e] : "/"
        }
        let u = B(a, o),
          c = l && "/" !== l && l.endsWith("/"),
          d = (i || "." === l) && r.endsWith("/");
        return u.pathname.endsWith("/") || !c && !d || (u.pathname += "/"), u
      }
      const $ = e => e.join("/").replace(/\/\/+/g, "/"),
        V = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        J = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        Y = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
        q = function(e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? {
              status: t
            } : t,
            n = new Headers(r.headers);
          return n.has("Content-Type") || n.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), s({}, r, {
            headers: n
          }))
        };
      class X extends Error {}
      class G {
        constructor(e, t) {
          let r;
          this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], h(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
          let n = () => r(new X("Deferred data aborted"));
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
          if (this.controller.signal.aborted && r instanceof X) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
          return h(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce(((e, t) => {
            let [r, n] = t;
            return Object.assign(e, {
              [r]: Q(n)
            })
          }), {})
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet)
        }
      }

      function Q(e) {
        if (! function(e) {
            return e instanceof Promise && !0 === e._tracked
          }(e)) return e;
        if (e._error) throw e._error;
        return e._data
      }
      const Z = function(e, t) {
          return void 0 === t && (t = {}), new G(e, "number" == typeof t ? {
            status: t
          } : t)
        },
        ee = function(e, t) {
          void 0 === t && (t = 302);
          let r = t;
          "number" == typeof r ? r = {
            status: r
          } : void 0 === r.status && (r.status = 302);
          let n = new Headers(r.headers);
          return n.set("Location", e), new Response(null, s({}, r, {
            headers: n
          }))
        },
        te = (e, t) => {
          let r = ee(e, t);
          return r.headers.set("X-Remix-Reload-Document", "true"), r
        },
        re = (e, t) => {
          let r = ee(e, t);
          return r.headers.set("X-Remix-Replace", "true"), r
        };
      class ne {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
        }
      }

      function ae(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
      }
      const oe = ["post", "put", "patch", "delete"],
        ie = new Set(oe),
        se = ["get", ...oe],
        le = new Set(se),
        ue = new Set([301, 302, 303, 307, 308]),
        ce = new Set([307, 308]),
        de = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        he = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        },
        fe = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0
        },
        pe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        me = e => ({
          hasErrorBoundary: Boolean(e.hasErrorBoundary)
        }),
        ve = "remix-router-transitions";

      function ye(e) {
        const t = e.window ? e.window : "undefined" != typeof window ? window : void 0,
          r = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement,
          a = !r;
        let o;
        if (h(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) o = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let t = e.detectErrorBoundary;
          o = e => ({
            hasErrorBoundary: t(e)
          })
        } else o = me;
        let i, l, u, c = {},
          d = S(e.routes, o, void 0, c),
          p = e.basename || "/",
          v = e.dataStrategy || Ce,
          y = e.patchRoutesOnNavigation,
          g = s({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            v7_skipActionErrorRevalidation: !1
          }, e.future),
          _ = null,
          D = new Set,
          C = null,
          L = null,
          P = null,
          k = null != e.hydrationData,
          T = E(d, e.history.location, p),
          A = !1,
          O = null;
        if (null == T && !y) {
          let t = Ie(404, {
              pathname: e.history.location.pathname
            }),
            {
              matches: r,
              route: n
            } = Fe(d);
          T = r, O = {
            [n.id]: t
          }
        }
        if (T && !e.hydrationData && ct(T, d, e.history.location.pathname).active && (T = null), T)
          if (T.some((e => e.route.lazy))) l = !1;
          else if (T.some((e => e.route.loader)))
          if (g.v7_partialHydration) {
            let t = e.hydrationData ? e.hydrationData.loaderData : null,
              r = e.hydrationData ? e.hydrationData.errors : null;
            if (r) {
              let e = T.findIndex((e => void 0 !== r[e.route.id]));
              l = T.slice(0, e + 1).every((e => !Ee(e.route, t, r)))
            } else l = T.every((e => !Ee(e.route, t, r)))
          } else l = null != e.hydrationData;
        else l = !0;
        else if (l = !1, T = [], g.v7_partialHydration) {
          let t = ct(null, d, e.history.location.pathname);
          t.active && t.matches && (A = !0, T = t.matches)
        }
        let M, U, j = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: T,
            initialized: l,
            navigation: de,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || O,
            fetchers: new Map,
            blockers: new Map
          },
          N = n.Pop,
          F = !1,
          B = !1,
          H = new Map,
          z = null,
          K = !1,
          W = !1,
          $ = [],
          V = new Set,
          J = new Map,
          Y = 0,
          q = -1,
          X = new Map,
          G = new Set,
          Q = new Map,
          Z = new Map,
          ee = new Set,
          te = new Map,
          re = new Map;

        function ne(e, t) {
          void 0 === t && (t = {}), j = s({}, j, e);
          let r = [],
            n = [];
          g.v7_fetcherPersist && j.fetchers.forEach(((e, t) => {
            "idle" === e.state && (ee.has(t) ? n.push(t) : r.push(t))
          })), ee.forEach((e => {
            j.fetchers.has(e) || J.has(e) || n.push(e)
          })), [...D].forEach((e => e(j, {
            deletedFetchers: n,
            viewTransitionOpts: t.viewTransitionOpts,
            flushSync: !0 === t.flushSync
          }))), g.v7_fetcherPersist ? (r.forEach((e => j.fetchers.delete(e))), n.forEach((e => Ae(e)))) : n.forEach((e => ee.delete(e)))
        }

        function oe(t, r, a) {
          var o, l;
          let u, {
              flushSync: c
            } = void 0 === a ? {} : a,
            h = null != j.actionData && null != j.navigation.formMethod && Ye(j.navigation.formMethod) && "loading" === j.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
          u = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : h ? j.actionData : null;
          let f = r.loaderData ? Ue(j.loaderData, r.loaderData, r.matches || [], r.errors) : j.loaderData,
            p = j.blockers;
          p.size > 0 && (p = new Map(p), p.forEach(((e, t) => p.set(t, fe))));
          let m, v = !0 === F || null != j.navigation.formMethod && Ye(j.navigation.formMethod) && !0 !== (null == (l = t.state) ? void 0 : l._isRedirect);
          if (i && (d = i, i = void 0), K || N === n.Pop || (N === n.Push ? e.history.push(t, t.state) : N === n.Replace && e.history.replace(t, t.state)), N === n.Pop) {
            let e = H.get(j.location.pathname);
            e && e.has(t.pathname) ? m = {
              currentLocation: j.location,
              nextLocation: t
            } : H.has(t.pathname) && (m = {
              currentLocation: t,
              nextLocation: j.location
            })
          } else if (B) {
            let e = H.get(j.location.pathname);
            e ? e.add(t.pathname) : (e = new Set([t.pathname]), H.set(j.location.pathname, e)), m = {
              currentLocation: j.location,
              nextLocation: t
            }
          }
          ne(s({}, r, {
            actionData: u,
            loaderData: f,
            historyAction: N,
            location: t,
            initialized: !0,
            navigation: de,
            revalidation: "idle",
            restoreScrollPosition: ut(t, r.matches || j.matches),
            preventScrollReset: v,
            blockers: p
          }), {
            viewTransitionOpts: m,
            flushSync: !0 === c
          }), N = n.Pop, F = !1, B = !1, K = !1, W = !1, $ = []
        }
        async function ie(t, r, a) {
          M && M.abort(), M = null, N = t, K = !0 === (a && a.startUninterruptedRevalidation),
            function(e, t) {
              if (C && P) {
                let r = lt(e, t);
                C[r] = P()
              }
            }(j.location, j.matches), F = !0 === (a && a.preventScrollReset), B = !0 === (a && a.enableViewTransition);
          let o = i || d,
            l = a && a.overrideNavigation,
            u = null != a && a.initialHydration && j.matches && j.matches.length > 0 && !A ? j.matches : E(o, r, p),
            c = !0 === (a && a.flushSync);
          if (u && j.initialized && !W && (h = j.location, f = r, h.pathname === f.pathname && h.search === f.search && ("" === h.hash ? "" !== f.hash : h.hash === f.hash || "" !== f.hash)) && !(a && a.submission && Ye(a.submission.formMethod))) return void oe(r, {
            matches: u
          }, {
            flushSync: c
          });
          var h, f;
          let m = ct(u, o, r.pathname);
          if (m.active && m.matches && (u = m.matches), !u) {
            let {
              error: e,
              notFoundMatches: t,
              route: n
            } = it(r.pathname);
            return void oe(r, {
              matches: t,
              loaderData: {},
              errors: {
                [n.id]: e
              }
            }, {
              flushSync: c
            })
          }
          M = new AbortController;
          let v, y = Te(e.history, r, M.signal, a && a.submission);
          if (a && a.pendingError) v = [Ne(u).route.id, {
            type: b.error,
            error: a.pendingError
          }];
          else if (a && a.submission && Ye(a.submission.formMethod)) {
            let t = await async function(e, t, r, a, o, i) {
              void 0 === i && (i = {}), we();
              let s, l = function(e, t) {
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
              if (ne({
                  navigation: l
                }, {
                  flushSync: !0 === i.flushSync
                }), o) {
                let r = await dt(a, t.pathname, e.signal);
                if ("aborted" === r.type) return {
                  shortCircuited: !0
                };
                if ("error" === r.type) {
                  let e = Ne(r.partialMatches).route.id;
                  return {
                    matches: r.partialMatches,
                    pendingActionResult: [e, {
                      type: b.error,
                      error: r.error
                    }]
                  }
                }
                if (!r.matches) {
                  let {
                    notFoundMatches: e,
                    error: r,
                    route: n
                  } = it(t.pathname);
                  return {
                    matches: e,
                    pendingActionResult: [n.id, {
                      type: b.error,
                      error: r
                    }]
                  }
                }
                a = r.matches
              }
              let u = Ze(a, t);
              if (u.route.action || u.route.lazy) {
                if (s = (await ue("action", j, e, [u], a, null))[u.route.id], e.signal.aborted) return {
                  shortCircuited: !0
                }
              } else s = {
                type: b.error,
                error: Ie(405, {
                  method: e.method,
                  pathname: t.pathname,
                  routeId: u.route.id
                })
              };
              if ($e(s)) {
                let t;
                return t = i && null != i.replace ? i.replace : ke(s.response.headers.get("Location"), new URL(e.url), p) === j.location.pathname + j.location.search, await le(e, s, !0, {
                  submission: r,
                  replace: t
                }), {
                  shortCircuited: !0
                }
              }
              if (Ke(s)) throw Ie(400, {
                type: "defer-action"
              });
              if (We(s)) {
                let e = Ne(a, u.route.id);
                return !0 !== (i && i.replace) && (N = n.Push), {
                  matches: a,
                  pendingActionResult: [e.route.id, s]
                }
              }
              return {
                matches: a,
                pendingActionResult: [u.route.id, s]
              }
            }(y, r, a.submission, u, m.active, {
              replace: a.replace,
              flushSync: c
            });
            if (t.shortCircuited) return;
            if (t.pendingActionResult) {
              let [e, n] = t.pendingActionResult;
              if (We(n) && ae(n.error) && 404 === n.error.status) return M = null, void oe(r, {
                matches: t.matches,
                loaderData: {},
                errors: {
                  [e]: n.error
                }
              })
            }
            u = t.matches || u, v = t.pendingActionResult, l = tt(r, a.submission), c = !1, m.active = !1, y = Te(e.history, y.url, y.signal)
          }
          let {
            shortCircuited: w,
            matches: S,
            loaderData: R,
            errors: x
          } = await async function(t, r, n, a, o, l, u, c, h, f, m) {
            let v = o || tt(r, l),
              y = l || u || et(v),
              b = !(K || g.v7_partialHydration && h);
            if (a) {
              if (b) {
                let e = se(m);
                ne(s({
                  navigation: v
                }, void 0 !== e ? {
                  actionData: e
                } : {}), {
                  flushSync: f
                })
              }
              let e = await dt(n, r.pathname, t.signal);
              if ("aborted" === e.type) return {
                shortCircuited: !0
              };
              if ("error" === e.type) {
                let t = Ne(e.partialMatches).route.id;
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
                  route: n
                } = it(r.pathname);
                return {
                  matches: t,
                  loaderData: {},
                  errors: {
                    [n.id]: e
                  }
                }
              }
              n = e.matches
            }
            let w = i || d,
              [S, E] = Se(e.history, j, n, y, r, g.v7_partialHydration && !0 === h, g.v7_skipActionErrorRevalidation, W, $, V, ee, Q, G, w, p, m);
            if (st((e => !(n && n.some((t => t.route.id === e))) || S && S.some((t => t.route.id === e)))), q = ++Y, 0 === S.length && 0 === E.length) {
              let e = Ve();
              return oe(r, s({
                matches: n,
                loaderData: {},
                errors: m && We(m[1]) ? {
                  [m[0]]: m[1].error
                } : null
              }, je(m), e ? {
                fetchers: new Map(j.fetchers)
              } : {}), {
                flushSync: f
              }), {
                shortCircuited: !0
              }
            }
            if (b) {
              let e = {};
              if (!a) {
                e.navigation = v;
                let t = se(m);
                void 0 !== t && (e.actionData = t)
              }
              E.length > 0 && (e.fetchers = function(e) {
                return e.forEach((e => {
                  let t = j.fetchers.get(e.key),
                    r = rt(void 0, t ? t.data : void 0);
                  j.fetchers.set(e.key, r)
                })), new Map(j.fetchers)
              }(E)), ne(e, {
                flushSync: f
              })
            }
            E.forEach((e => {
              Oe(e.key), e.controller && J.set(e.key, e.controller)
            }));
            let R = () => E.forEach((e => Oe(e.key)));
            M && M.signal.addEventListener("abort", R);
            let {
              loaderResults: x,
              fetcherResults: _
            } = await ye(j, n, S, E, t);
            if (t.signal.aborted) return {
              shortCircuited: !0
            };
            M && M.signal.removeEventListener("abort", R), E.forEach((e => J.delete(e.key)));
            let D = Be(x);
            if (D) return await le(t, D.result, !0, {
              replace: c
            }), {
              shortCircuited: !0
            };
            if (D = Be(_), D) return G.add(D.key), await le(t, D.result, !0, {
              replace: c
            }), {
              shortCircuited: !0
            };
            let {
              loaderData: C,
              errors: L
            } = Me(j, n, x, m, E, _, te);
            te.forEach(((e, t) => {
              e.subscribe((r => {
                (r || e.done) && te.delete(t)
              }))
            })), g.v7_partialHydration && h && j.errors && (L = s({}, j.errors, L));
            let P = Ve(),
              k = Je(q),
              T = P || k || E.length > 0;
            return s({
              matches: n,
              loaderData: C,
              errors: L
            }, T ? {
              fetchers: new Map(j.fetchers)
            } : {})
          }(y, r, u, m.active, l, a && a.submission, a && a.fetcherSubmission, a && a.replace, a && !0 === a.initialHydration, c, v);
          w || (M = null, oe(r, s({
            matches: S || u
          }, je(v), {
            loaderData: R,
            errors: x
          })))
        }

        function se(e) {
          return e && !We(e[1]) ? {
            [e[0]]: e[1].data
          } : j.actionData ? 0 === Object.keys(j.actionData).length ? null : j.actionData : void 0
        }
        async function le(a, o, i, l) {
          let {
            submission: u,
            fetcherSubmission: c,
            preventScrollReset: d,
            replace: f
          } = void 0 === l ? {} : l;
          o.response.headers.has("X-Remix-Revalidate") && (W = !0);
          let v = o.response.headers.get("Location");
          h(v, "Expected a Location header on the redirect Response"), v = ke(v, new URL(a.url), p);
          let y = m(j.location, v, {
            _isRedirect: !0
          });
          if (r) {
            let r = !1;
            if (o.response.headers.has("X-Remix-Reload-Document")) r = !0;
            else if (pe.test(v)) {
              const n = e.history.createURL(v);
              r = n.origin !== t.location.origin || null == I(n.pathname, p)
            }
            if (r) return void(f ? t.location.replace(v) : t.location.assign(v))
          }
          M = null;
          let g = !0 === f || o.response.headers.has("X-Remix-Replace") ? n.Replace : n.Push,
            {
              formMethod: b,
              formAction: w,
              formEncType: S
            } = j.navigation;
          !u && !c && b && w && S && (u = et(j.navigation));
          let E = u || c;
          if (ce.has(o.response.status) && E && Ye(E.formMethod)) await ie(g, y, {
            submission: s({}, E, {
              formAction: v
            }),
            preventScrollReset: d || F,
            enableViewTransition: i ? B : void 0
          });
          else {
            let e = tt(y, u);
            await ie(g, y, {
              overrideNavigation: e,
              fetcherSubmission: c,
              preventScrollReset: d || F,
              enableViewTransition: i ? B : void 0
            })
          }
        }
        async function ue(e, t, r, n, a, i) {
          let l, u = {};
          try {
            l = await async function(e, t, r, n, a, o, i, l, u, c) {
              let d = o.map((e => e.route.lazy ? async function(e, t, r) {
                  if (!e.lazy) return;
                  let n = await e.lazy();
                  if (!e.lazy) return;
                  let a = r[e.id];
                  h(a, "No route found in manifest");
                  let o = {};
                  for (let e in n) {
                    let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
                    f(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || w.has(e) || (o[e] = n[e])
                  }
                  Object.assign(a, o), Object.assign(a, s({}, t(a), {
                    lazy: void 0
                  }))
                }(e.route, u, l): void 0)),
                p = o.map(((e, r) => {
                  let o = d[r],
                    i = a.some((t => t.route.id === e.route.id));
                  return s({}, e, {
                    shouldLoad: i,
                    resolve: async r => (r && "GET" === n.method && (e.route.lazy || e.route.loader) && (i = !0), i ? async function(e, t, r, n, a, o) {
                      let i, s, l = n => {
                        let i, l = new Promise(((e, t) => i = t));
                        s = () => i(), t.signal.addEventListener("abort", s);
                        let u = a => "function" != typeof n ? Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "' + e + '" [routeId: ' + r.route.id + "]")) : n({
                            request: t,
                            params: r.params,
                            context: o
                          }, ...void 0 !== a ? [a] : []),
                          c = (async () => {
                            try {
                              return {
                                type: "data",
                                result: await (a ? a((e => u(e))) : u())
                              }
                            } catch (e) {
                              return {
                                type: "error",
                                result: e
                              }
                            }
                          })();
                        return Promise.race([c, l])
                      };
                      try {
                        let a = r.route[e];
                        if (n)
                          if (a) {
                            let e, [t] = await Promise.all([l(a).catch((t => {
                              e = t
                            })), n]);
                            if (void 0 !== e) throw e;
                            i = t
                          } else {
                            if (await n, a = r.route[e], !a) {
                              if ("action" === e) {
                                let e = new URL(t.url),
                                  n = e.pathname + e.search;
                                throw Ie(405, {
                                  method: t.method,
                                  pathname: n,
                                  routeId: r.route.id
                                })
                              }
                              return {
                                type: b.data,
                                result: void 0
                              }
                            }
                            i = await l(a)
                          }
                        else {
                          if (!a) {
                            let e = new URL(t.url);
                            throw Ie(404, {
                              pathname: e.pathname + e.search
                            })
                          }
                          i = await l(a)
                        }
                        h(void 0 !== i.result, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
                      } catch (e) {
                        return {
                          type: b.error,
                          result: e
                        }
                      } finally {
                        s && t.signal.removeEventListener("abort", s)
                      }
                      return i
                    }(t, n, e, o, r, c): Promise.resolve({
                      type: b.data,
                      result: void 0
                    }))
                  })
                })),
                m = await e({
                  matches: p,
                  request: n,
                  params: o[0].params,
                  fetcherKey: i,
                  context: c
                });
              try {
                await Promise.all(d)
              } catch (e) {}
              return m
            }(v, e, 0, r, n, a, i, c, o)
          } catch (e) {
            return n.forEach((t => {
              u[t.route.id] = {
                type: b.error,
                error: e
              }
            })), u
          }
          for (let [e, t] of Object.entries(l))
            if (ze(t)) {
              let n = t.result;
              u[e] = {
                type: b.redirect,
                response: Pe(n, r, e, a, p, g.v7_relativeSplatPath)
              }
            } else u[e] = await Le(t);
          return u
        }
        async function ye(t, r, n, a, o) {
          let i = t.matches,
            s = ue("loader", 0, o, n, r, null),
            l = Promise.all(a.map((async t => {
              if (t.matches && t.match && t.controller) {
                let r = (await ue("loader", 0, Te(e.history, t.path, t.controller.signal), [t.match], t.matches, t.key))[t.match.route.id];
                return {
                  [t.key]: r
                }
              }
              return Promise.resolve({
                [t.key]: {
                  type: b.error,
                  error: Ie(404, {
                    pathname: t.path
                  })
                }
              })
            }))),
            u = await s,
            c = (await l).reduce(((e, t) => Object.assign(e, t)), {});
          return await Promise.all([qe(r, u, o.signal, i, t.loaderData), Xe(r, c, a)]), {
            loaderResults: u,
            fetcherResults: c
          }
        }

        function we() {
          W = !0, $.push(...st()), Q.forEach(((e, t) => {
            J.has(t) && V.add(t), Oe(t)
          }))
        }

        function Re(e, t, r) {
          void 0 === r && (r = {}), j.fetchers.set(e, t), ne({
            fetchers: new Map(j.fetchers)
          }, {
            flushSync: !0 === (r && r.flushSync)
          })
        }

        function xe(e, t, r, n) {
          void 0 === n && (n = {});
          let a = Ne(j.matches, t);
          Ae(e), ne({
            errors: {
              [a.route.id]: r
            },
            fetchers: new Map(j.fetchers)
          }, {
            flushSync: !0 === (n && n.flushSync)
          })
        }

        function De(e) {
          return Z.set(e, (Z.get(e) || 0) + 1), ee.has(e) && ee.delete(e), j.fetchers.get(e) || he
        }

        function Ae(e) {
          let t = j.fetchers.get(e);
          !J.has(e) || t && "loading" === t.state && X.has(e) || Oe(e), Q.delete(e), X.delete(e), G.delete(e), g.v7_fetcherPersist && ee.delete(e), V.delete(e), j.fetchers.delete(e)
        }

        function Oe(e) {
          let t = J.get(e);
          t && (t.abort(), J.delete(e))
        }

        function He(e) {
          for (let t of e) {
            let e = nt(De(t).data);
            j.fetchers.set(t, e)
          }
        }

        function Ve() {
          let e = [],
            t = !1;
          for (let r of G) {
            let n = j.fetchers.get(r);
            h(n, "Expected fetcher: " + r), "loading" === n.state && (G.delete(r), e.push(r), t = !0)
          }
          return He(e), t
        }

        function Je(e) {
          let t = [];
          for (let [r, n] of X)
            if (n < e) {
              let e = j.fetchers.get(r);
              h(e, "Expected fetcher: " + r), "loading" === e.state && (Oe(r), X.delete(r), t.push(r))
            } return He(t), t.length > 0
        }

        function Qe(e) {
          j.blockers.delete(e), re.delete(e)
        }

        function at(e, t) {
          let r = j.blockers.get(e) || fe;
          h("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
          let n = new Map(j.blockers);
          n.set(e, t), ne({
            blockers: n
          })
        }

        function ot(e) {
          let {
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          } = e;
          if (0 === re.size) return;
          re.size > 1 && f(!1, "A router only supports one blocker at a time");
          let a = Array.from(re.entries()),
            [o, i] = a[a.length - 1],
            s = j.blockers.get(o);
          return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: n
          }) ? o : void 0
        }

        function it(e) {
          let t = Ie(404, {
              pathname: e
            }),
            r = i || d,
            {
              matches: n,
              route: a
            } = Fe(r);
          return st(), {
            notFoundMatches: n,
            route: a,
            error: t
          }
        }

        function st(e) {
          let t = [];
          return te.forEach(((r, n) => {
            e && !e(n) || (r.cancel(), t.push(n), te.delete(n))
          })), t
        }

        function lt(e, t) {
          return L && L(e, t.map((e => x(e, j.loaderData)))) || e.key
        }

        function ut(e, t) {
          if (C) {
            let r = lt(e, t),
              n = C[r];
            if ("number" == typeof n) return n
          }
          return null
        }

        function ct(e, t, r) {
          if (y) {
            if (!e) return {
              active: !0,
              matches: R(t, r, p, !0) || []
            };
            if (Object.keys(e[0].params).length > 0) return {
              active: !0,
              matches: R(t, r, p, !0)
            }
          }
          return {
            active: !1,
            matches: null
          }
        }
        async function dt(e, t, r, n) {
          if (!y) return {
            type: "success",
            matches: e
          };
          let a = e;
          for (;;) {
            let e = null == i,
              s = i || d,
              l = c;
            try {
              await y({
                signal: r,
                path: t,
                matches: a,
                fetcherKey: n,
                patch: (e, t) => {
                  r.aborted || _e(e, t, s, l, o)
                }
              })
            } catch (e) {
              return {
                type: "error",
                error: e,
                partialMatches: a
              }
            } finally {
              e && !r.aborted && (d = [...d])
            }
            if (r.aborted) return {
              type: "aborted"
            };
            let u = E(s, t, p);
            if (u) return {
              type: "success",
              matches: u
            };
            let h = R(s, t, p, !0);
            if (!h || a.length === h.length && a.every(((e, t) => e.route.id === h[t].route.id))) return {
              type: "success",
              matches: null
            };
            a = h
          }
        }
        return u = {
          get basename() {
            return p
          },
          get future() {
            return g
          },
          get state() {
            return j
          },
          get routes() {
            return d
          },
          get window() {
            return t
          },
          initialize: function() {
            if (_ = e.history.listen((t => {
                let {
                  action: r,
                  location: n,
                  delta: a
                } = t;
                if (U) return U(), void(U = void 0);
                f(0 === re.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let o = ot({
                  currentLocation: j.location,
                  nextLocation: n,
                  historyAction: r
                });
                if (o && null != a) {
                  let t = new Promise((e => {
                    U = e
                  }));
                  return e.history.go(-1 * a), void at(o, {
                    state: "blocked",
                    location: n,
                    proceed() {
                      at(o, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: n
                      }), t.then((() => e.history.go(a)))
                    },
                    reset() {
                      let e = new Map(j.blockers);
                      e.set(o, fe), ne({
                        blockers: e
                      })
                    }
                  })
                }
                return ie(r, n)
              })), r) {
              ! function(e, t) {
                try {
                  let r = e.sessionStorage.getItem(ve);
                  if (r) {
                    let e = JSON.parse(r);
                    for (let [r, n] of Object.entries(e || {})) n && Array.isArray(n) && t.set(r, new Set(n || []))
                  }
                } catch (e) {}
              }(t, H);
              let e = () => function(e, t) {
                if (t.size > 0) {
                  let r = {};
                  for (let [e, n] of t) r[e] = [...n];
                  try {
                    e.sessionStorage.setItem(ve, JSON.stringify(r))
                  } catch (e) {
                    f(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                  }
                }
              }(t, H);
              t.addEventListener("pagehide", e), z = () => t.removeEventListener("pagehide", e)
            }
            return j.initialized || ie(n.Pop, j.location, {
              initialHydration: !0
            }), u
          },
          subscribe: function(e) {
            return D.add(e), () => D.delete(e)
          },
          enableScrollRestoration: function(e, t, r) {
            if (C = e, P = t, L = r || null, !k && j.navigation === de) {
              k = !0;
              let e = ut(j.location, j.matches);
              null != e && ne({
                restoreScrollPosition: e
              })
            }
            return () => {
              C = null, P = null, L = null
            }
          },
          navigate: async function t(r, a) {
            if ("number" == typeof r) return void e.history.go(r);
            let o = ge(j.location, j.matches, p, g.v7_prependBasename, r, g.v7_relativeSplatPath, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative),
              {
                path: i,
                submission: l,
                error: u
              } = be(g.v7_normalizeFormMethod, !1, o, a),
              c = j.location,
              d = m(j.location, i, a && a.state);
            d = s({}, d, e.history.encodeLocation(d));
            let h = a && null != a.replace ? a.replace : void 0,
              f = n.Push;
            !0 === h ? f = n.Replace : !1 === h || null != l && Ye(l.formMethod) && l.formAction === j.location.pathname + j.location.search && (f = n.Replace);
            let v = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0,
              y = !0 === (a && a.flushSync),
              b = ot({
                currentLocation: c,
                nextLocation: d,
                historyAction: f
              });
            if (!b) return await ie(f, d, {
              submission: l,
              pendingError: u,
              preventScrollReset: v,
              replace: a && a.replace,
              enableViewTransition: a && a.viewTransition,
              flushSync: y
            });
            at(b, {
              state: "blocked",
              location: d,
              proceed() {
                at(b, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: d
                }), t(r, a)
              },
              reset() {
                let e = new Map(j.blockers);
                e.set(b, fe), ne({
                  blockers: e
                })
              }
            })
          },
          fetch: function(t, r, n, o) {
            if (a) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            Oe(t);
            let s = !0 === (o && o.flushSync),
              l = i || d,
              u = ge(j.location, j.matches, p, g.v7_prependBasename, n, g.v7_relativeSplatPath, r, null == o ? void 0 : o.relative),
              c = E(l, u, p),
              f = ct(c, l, u);
            if (f.active && f.matches && (c = f.matches), !c) return void xe(t, r, Ie(404, {
              pathname: u
            }), {
              flushSync: s
            });
            let {
              path: m,
              submission: v,
              error: y
            } = be(g.v7_normalizeFormMethod, !0, u, o);
            if (y) return void xe(t, r, y, {
              flushSync: s
            });
            let b = Ze(c, m),
              w = !0 === (o && o.preventScrollReset);
            v && Ye(v.formMethod) ? async function(t, r, n, a, o, s, l, u, c) {
              function f(e) {
                if (!e.route.action && !e.route.lazy) {
                  let e = Ie(405, {
                    method: c.formMethod,
                    pathname: n,
                    routeId: r
                  });
                  return xe(t, r, e, {
                    flushSync: l
                  }), !0
                }
                return !1
              }
              if (we(), Q.delete(t), !s && f(a)) return;
              let m = j.fetchers.get(t);
              Re(t, function(e, t) {
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
              }(c, m), {
                flushSync: l
              });
              let v = new AbortController,
                y = Te(e.history, n, v.signal, c);
              if (s) {
                let e = await dt(o, new URL(y.url).pathname, y.signal, t);
                if ("aborted" === e.type) return;
                if ("error" === e.type) return void xe(t, r, e.error, {
                  flushSync: l
                });
                if (!e.matches) return void xe(t, r, Ie(404, {
                  pathname: n
                }), {
                  flushSync: l
                });
                if (f(a = Ze(o = e.matches, n))) return
              }
              J.set(t, v);
              let b = Y,
                w = (await ue("action", 0, y, [a], o, t))[a.route.id];
              if (y.signal.aborted) return void(J.get(t) === v && J.delete(t));
              if (g.v7_fetcherPersist && ee.has(t)) {
                if ($e(w) || We(w)) return void Re(t, nt(void 0))
              } else {
                if ($e(w)) return J.delete(t), q > b ? void Re(t, nt(void 0)) : (G.add(t), Re(t, rt(c)), le(y, w, !1, {
                  fetcherSubmission: c,
                  preventScrollReset: u
                }));
                if (We(w)) return void xe(t, r, w.error)
              }
              if (Ke(w)) throw Ie(400, {
                type: "defer-action"
              });
              let S = j.navigation.location || j.location,
                R = Te(e.history, S, v.signal),
                x = i || d,
                _ = "idle" !== j.navigation.state ? E(x, j.navigation.location, p) : j.matches;
              h(_, "Didn't find any matches after fetcher action");
              let D = ++Y;
              X.set(t, D);
              let C = rt(c, w.data);
              j.fetchers.set(t, C);
              let [L, P] = Se(e.history, j, _, c, S, !1, g.v7_skipActionErrorRevalidation, W, $, V, ee, Q, G, x, p, [a.route.id, w]);
              P.filter((e => e.key !== t)).forEach((e => {
                let t = e.key,
                  r = j.fetchers.get(t),
                  n = rt(void 0, r ? r.data : void 0);
                j.fetchers.set(t, n), Oe(t), e.controller && J.set(t, e.controller)
              })), ne({
                fetchers: new Map(j.fetchers)
              });
              let k = () => P.forEach((e => Oe(e.key)));
              v.signal.addEventListener("abort", k);
              let {
                loaderResults: T,
                fetcherResults: A
              } = await ye(j, _, L, P, R);
              if (v.signal.aborted) return;
              v.signal.removeEventListener("abort", k), X.delete(t), J.delete(t), P.forEach((e => J.delete(e.key)));
              let O = Be(T);
              if (O) return le(R, O.result, !1, {
                preventScrollReset: u
              });
              if (O = Be(A), O) return G.add(O.key), le(R, O.result, !1, {
                preventScrollReset: u
              });
              let {
                loaderData: U,
                errors: F
              } = Me(j, _, T, void 0, P, A, te);
              if (j.fetchers.has(t)) {
                let e = nt(w.data);
                j.fetchers.set(t, e)
              }
              Je(D), "loading" === j.navigation.state && D > q ? (h(N, "Expected pending action"), M && M.abort(), oe(j.navigation.location, {
                matches: _,
                loaderData: U,
                errors: F,
                fetchers: new Map(j.fetchers)
              })) : (ne({
                errors: F,
                loaderData: Ue(j.loaderData, U, _, F),
                fetchers: new Map(j.fetchers)
              }), W = !1)
            }(t, r, m, b, c, f.active, s, w, v): (Q.set(t, {
              routeId: r,
              path: m
            }), async function(t, r, n, a, o, i, s, l, u) {
              let c = j.fetchers.get(t);
              Re(t, rt(u, c ? c.data : void 0), {
                flushSync: s
              });
              let d = new AbortController,
                f = Te(e.history, n, d.signal);
              if (i) {
                let e = await dt(o, new URL(f.url).pathname, f.signal, t);
                if ("aborted" === e.type) return;
                if ("error" === e.type) return void xe(t, r, e.error, {
                  flushSync: s
                });
                if (!e.matches) return void xe(t, r, Ie(404, {
                  pathname: n
                }), {
                  flushSync: s
                });
                a = Ze(o = e.matches, n)
              }
              J.set(t, d);
              let p = Y,
                m = (await ue("loader", 0, f, [a], o, t))[a.route.id];
              if (Ke(m) && (m = await Ge(m, f.signal, !0) || m), J.get(t) === d && J.delete(t), !f.signal.aborted) {
                if (!ee.has(t)) return $e(m) ? q > p ? void Re(t, nt(void 0)) : (G.add(t), void await le(f, m, !1, {
                  preventScrollReset: l
                })) : void(We(m) ? xe(t, r, m.error) : (h(!Ke(m), "Unhandled fetcher deferred data"), Re(t, nt(m.data))));
                Re(t, nt(void 0))
              }
            }(t, r, m, b, c, f.active, s, w, v))
          },
          revalidate: function() {
            we(), ne({
              revalidation: "loading"
            }), "submitting" !== j.navigation.state && ("idle" !== j.navigation.state ? ie(N || j.historyAction, j.navigation.location, {
              overrideNavigation: j.navigation,
              enableViewTransition: !0 === B
            }) : ie(j.historyAction, j.location, {
              startUninterruptedRevalidation: !0
            }))
          },
          createHref: t => e.history.createHref(t),
          encodeLocation: t => e.history.encodeLocation(t),
          getFetcher: De,
          deleteFetcher: function(e) {
            let t = (Z.get(e) || 0) - 1;
            t <= 0 ? (Z.delete(e), ee.add(e), g.v7_fetcherPersist || Ae(e)) : Z.set(e, t), ne({
              fetchers: new Map(j.fetchers)
            })
          },
          dispose: function() {
            _ && _(), z && z(), D.clear(), M && M.abort(), j.fetchers.forEach(((e, t) => Ae(t))), j.blockers.forEach(((e, t) => Qe(t)))
          },
          getBlocker: function(e, t) {
            let r = j.blockers.get(e) || fe;
            return re.get(e) !== t && re.set(e, t), r
          },
          deleteBlocker: Qe,
          patchRoutes: function(e, t) {
            let r = null == i;
            _e(e, t, i || d, c, o), r && (d = [...d], ne({}))
          },
          _internalFetchControllers: J,
          _internalActiveDeferreds: te,
          _internalSetRoutes: function(e) {
            c = {}, i = S(e, o, void 0, c)
          }
        }, u
      }

      function ge(e, t, r, n, a, o, i, s) {
        let l, u;
        if (i) {
          l = [];
          for (let e of t)
            if (l.push(e), e.route.id === i) {
              u = e;
              break
            }
        } else l = t, u = t[t.length - 1];
        let c = W(a || ".", K(l, o), I(e.pathname, r) || e.pathname, "path" === s);
        if (null == a && (c.search = e.search, c.hash = e.hash), (null == a || "" === a || "." === a) && u) {
          let e = Qe(c.search);
          if (u.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
          else if (!u.route.index && e) {
            let e = new URLSearchParams(c.search),
              t = e.getAll("index");
            e.delete("index"), t.filter((e => e)).forEach((t => e.append("index", t)));
            let r = e.toString();
            c.search = r ? "?" + r : ""
          }
        }
        return n && "/" !== r && (c.pathname = "/" === c.pathname ? r : $([r, c.pathname])), v(c)
      }

      function be(e, t, r, n) {
        if (!n || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
          }(n)) return {
          path: r
        };
        if (n.formMethod && (a = n.formMethod, !le.has(a.toLowerCase()))) return {
          path: r,
          error: Ie(405, {
            method: n.formMethod
          })
        };
        var a;
        let o, i, s = () => ({
            path: r,
            error: Ie(400, {
              type: "invalid-body"
            })
          }),
          l = n.formMethod || "get",
          u = e ? l.toUpperCase() : l.toLowerCase(),
          c = He(r);
        if (void 0 !== n.body) {
          if ("text/plain" === n.formEncType) {
            if (!Ye(u)) return s();
            let e = "string" == typeof n.body ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce(((e, t) => {
              let [r, n] = t;
              return "" + e + r + "=" + n + "\n"
            }), "") : String(n.body);
            return {
              path: r,
              submission: {
                formMethod: u,
                formAction: c,
                formEncType: n.formEncType,
                formData: void 0,
                json: void 0,
                text: e
              }
            }
          }
          if ("application/json" === n.formEncType) {
            if (!Ye(u)) return s();
            try {
              let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
              return {
                path: r,
                submission: {
                  formMethod: u,
                  formAction: c,
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
        if (h("function" == typeof FormData, "FormData is not available in this environment"), n.formData) o = Ae(n.formData), i = n.formData;
        else if (n.body instanceof FormData) o = Ae(n.body), i = n.body;
        else if (n.body instanceof URLSearchParams) o = n.body, i = Oe(o);
        else if (null == n.body) o = new URLSearchParams, i = new FormData;
        else try {
          o = new URLSearchParams(n.body), i = Oe(o)
        } catch (e) {
          return s()
        }
        let d = {
          formMethod: u,
          formAction: c,
          formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0
        };
        if (Ye(d.formMethod)) return {
          path: r,
          submission: d
        };
        let f = y(r);
        return t && f.search && Qe(f.search) && o.append("index", ""), f.search = "?" + o, {
          path: v(f),
          submission: d
        }
      }

      function we(e, t, r) {
        void 0 === r && (r = !1);
        let n = e.findIndex((e => e.route.id === t));
        return n >= 0 ? e.slice(0, r ? n + 1 : n) : e
      }

      function Se(e, t, r, n, a, o, i, l, u, c, d, h, f, p, m, v) {
        let y = v ? We(v[1]) ? v[1].error : v[1].data : void 0,
          g = e.createURL(t.location),
          b = e.createURL(a),
          w = r;
        o && t.errors ? w = we(r, Object.keys(t.errors)[0], !0) : v && We(v[1]) && (w = we(r, v[0]));
        let S = v ? v[1].statusCode : void 0,
          R = i && S && S >= 400,
          x = w.filter(((e, r) => {
            let {
              route: a
            } = e;
            if (a.lazy) return !0;
            if (null == a.loader) return !1;
            if (o) return Ee(a, t.loaderData, t.errors);
            if (function(e, t, r) {
                let n = !t || r.route.id !== t.route.id,
                  a = void 0 === e[r.route.id];
                return n || a
              }(t.loaderData, t.matches[r], e) || u.some((t => t === e.route.id))) return !0;
            let i = t.matches[r],
              c = e;
            return xe(e, s({
              currentUrl: g,
              currentParams: i.params,
              nextUrl: b,
              nextParams: c.params
            }, n, {
              actionResult: y,
              actionStatus: S,
              defaultShouldRevalidate: !R && (l || g.pathname + g.search === b.pathname + b.search || g.search !== b.search || Re(i, c))
            }))
          })),
          _ = [];
        return h.forEach(((e, a) => {
          if (o || !r.some((t => t.route.id === e.routeId)) || d.has(a)) return;
          let i = E(p, e.path, m);
          if (!i) return void _.push({
            key: a,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
          });
          let u = t.fetchers.get(a),
            h = Ze(i, e.path),
            v = !1;
          f.has(a) ? v = !1 : c.has(a) ? (c.delete(a), v = !0) : v = u && "idle" !== u.state && void 0 === u.data ? l : xe(h, s({
            currentUrl: g,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: b,
            nextParams: r[r.length - 1].params
          }, n, {
            actionResult: y,
            actionStatus: S,
            defaultShouldRevalidate: !R && l
          })), v && _.push({
            key: a,
            routeId: e.routeId,
            path: e.path,
            matches: i,
            match: h,
            controller: new AbortController
          })
        })), [x, _]
      }

      function Ee(e, t, r) {
        if (e.lazy) return !0;
        if (!e.loader) return !1;
        let n = null != t && void 0 !== t[e.id],
          a = null != r && void 0 !== r[e.id];
        return !(!n && a) && ("function" == typeof e.loader && !0 === e.loader.hydrate || !n && !a)
      }

      function Re(e, t) {
        let r = e.route.path;
        return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
      }

      function xe(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r
        }
        return t.defaultShouldRevalidate
      }

      function _e(e, t, r, n, a) {
        var o;
        let i;
        if (e) {
          let t = n[e];
          h(t, "No route found to patch children into: routeId = " + e), t.children || (t.children = []), i = t.children
        } else i = r;
        let s = S(t.filter((e => !i.some((t => De(e, t))))), a, [e || "_", "patch", String((null == (o = i) ? void 0 : o.length) || "0")], n);
        i.push(...s)
      }

      function De(e, t) {
        return "id" in e && "id" in t && e.id === t.id || e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive && (!(e.children && 0 !== e.children.length || t.children && 0 !== t.children.length) || e.children.every(((e, r) => {
          var n;
          return null == (n = t.children) ? void 0 : n.some((t => De(e, t)))
        })))
      }
      async function Ce(e) {
        let {
          matches: t
        } = e, r = t.filter((e => e.shouldLoad));
        return (await Promise.all(r.map((e => e.resolve())))).reduce(((e, t, n) => Object.assign(e, {
          [r[n].route.id]: t
        })), {})
      }
      async function Le(e) {
        let {
          result: t,
          type: r
        } = e;
        if (Je(t)) {
          let e;
          try {
            let r = t.headers.get("Content-Type");
            e = r && /\bapplication\/json\b/.test(r) ? null == t.body ? null : await t.json() : await t.text()
          } catch (e) {
            return {
              type: b.error,
              error: e
            }
          }
          return r === b.error ? {
            type: b.error,
            error: new ne(t.status, t.statusText, e),
            statusCode: t.status,
            headers: t.headers
          } : {
            type: b.data,
            data: e,
            statusCode: t.status,
            headers: t.headers
          }
        }
        var n, a, o, i, s, l, u, c;
        return r === b.error ? Ve(t) ? t.data instanceof Error ? {
          type: b.error,
          error: t.data,
          statusCode: null == (o = t.init) ? void 0 : o.status,
          headers: null != (i = t.init) && i.headers ? new Headers(t.init.headers) : void 0
        } : {
          type: b.error,
          error: new ne((null == (n = t.init) ? void 0 : n.status) || 500, void 0, t.data),
          statusCode: ae(t) ? t.status : void 0,
          headers: null != (a = t.init) && a.headers ? new Headers(t.init.headers) : void 0
        } : {
          type: b.error,
          error: t,
          statusCode: ae(t) ? t.status : void 0
        } : function(e) {
          let t = e;
          return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
        }(t) ? {
          type: b.deferred,
          deferredData: t,
          statusCode: null == (s = t.init) ? void 0 : s.status,
          headers: (null == (l = t.init) ? void 0 : l.headers) && new Headers(t.init.headers)
        } : Ve(t) ? {
          type: b.data,
          data: t.data,
          statusCode: null == (u = t.init) ? void 0 : u.status,
          headers: null != (c = t.init) && c.headers ? new Headers(t.init.headers) : void 0
        } : {
          type: b.data,
          data: t
        }
      }

      function Pe(e, t, r, n, a, o) {
        let i = e.headers.get("Location");
        if (h(i, "Redirects returned/thrown from loaders/actions must have a Location header"), !pe.test(i)) {
          let s = n.slice(0, n.findIndex((e => e.route.id === r)) + 1);
          i = ge(new URL(t.url), s, a, !0, i, o), e.headers.set("Location", i)
        }
        return e
      }

      function ke(e, t, r) {
        if (pe.test(e)) {
          let n = e,
            a = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
            o = null != I(a.pathname, r);
          if (a.origin === t.origin && o) return a.pathname + a.search + a.hash
        }
        return e
      }

      function Te(e, t, r, n) {
        let a = e.createURL(He(t)).toString(),
          o = {
            signal: r
          };
        if (n && Ye(n.formMethod)) {
          let {
            formMethod: e,
            formEncType: t
          } = n;
          o.method = e.toUpperCase(), "application/json" === t ? (o.headers = new Headers({
            "Content-Type": t
          }), o.body = JSON.stringify(n.json)) : "text/plain" === t ? o.body = n.text : "application/x-www-form-urlencoded" === t && n.formData ? o.body = Ae(n.formData) : o.body = n.formData
        }
        return new Request(a, o)
      }

      function Ae(e) {
        let t = new URLSearchParams;
        for (let [r, n] of e.entries()) t.append(r, "string" == typeof n ? n : n.name);
        return t
      }

      function Oe(e) {
        let t = new FormData;
        for (let [r, n] of e.entries()) t.append(r, n);
        return t
      }

      function Me(e, t, r, n, a, o, i) {
        let {
          loaderData: l,
          errors: u
        } = function(e, t, r, n, a) {
          let o, i = {},
            s = null,
            l = !1,
            u = {},
            c = r && We(r[1]) ? r[1].error : void 0;
          return e.forEach((r => {
            if (!(r.route.id in t)) return;
            let d = r.route.id,
              f = t[d];
            if (h(!$e(f), "Cannot handle redirect results in processLoaderData"), We(f)) {
              let t = f.error;
              if (void 0 !== c && (t = c, c = void 0), s = s || {}, a) s[d] = t;
              else {
                let r = Ne(e, d);
                null == s[r.route.id] && (s[r.route.id] = t)
              }
              i[d] = void 0, l || (l = !0, o = ae(f.error) ? f.error.status : 500), f.headers && (u[d] = f.headers)
            } else Ke(f) ? (n.set(d, f.deferredData), i[d] = f.deferredData.data, null == f.statusCode || 200 === f.statusCode || l || (o = f.statusCode), f.headers && (u[d] = f.headers)) : (i[d] = f.data, f.statusCode && 200 !== f.statusCode && !l && (o = f.statusCode), f.headers && (u[d] = f.headers))
          })), void 0 !== c && r && (s = {
            [r[0]]: c
          }, i[r[0]] = void 0), {
            loaderData: i,
            errors: s,
            statusCode: o || 200,
            loaderHeaders: u
          }
        }(t, r, n, i, !1);
        return a.forEach((t => {
          let {
            key: r,
            match: n,
            controller: a
          } = t, i = o[r];
          if (h(i, "Did not find corresponding fetcher result"), !a || !a.signal.aborted)
            if (We(i)) {
              let t = Ne(e.matches, null == n ? void 0 : n.route.id);
              u && u[t.route.id] || (u = s({}, u, {
                [t.route.id]: i.error
              })), e.fetchers.delete(r)
            } else if ($e(i)) h(!1, "Unhandled fetcher revalidation redirect");
          else if (Ke(i)) h(!1, "Unhandled fetcher deferred data");
          else {
            let t = nt(i.data);
            e.fetchers.set(r, t)
          }
        })), {
          loaderData: l,
          errors: u
        }
      }

      function Ue(e, t, r, n) {
        let a = s({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && o.route.loader && (a[r] = e[r]), n && n.hasOwnProperty(r)) break
        }
        return a
      }

      function je(e) {
        return e ? We(e[1]) ? {
          actionData: {}
        } : {
          actionData: {
            [e[0]]: e[1].data
          }
        } : {}
      }

      function Ne(e, t) {
        return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
      }

      function Fe(e) {
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

      function Ie(e, t) {
        let {
          pathname: r,
          routeId: n,
          method: a,
          type: o,
          message: i
        } = void 0 === t ? {} : t, s = "Unknown Server Error", l = "Unknown @remix-run/router error";
        return 400 === e ? (s = "Bad Request", a && r && n ? l = "You made a " + a + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === o ? l = "defer() is not supported in actions" : "invalid-body" === o && (l = "Unable to encode submission body")) : 403 === e ? (s = "Forbidden", l = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (s = "Not Found", l = 'No route matches URL "' + r + '"') : 405 === e && (s = "Method Not Allowed", a && r && n ? l = "You made a " + a.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : a && (l = 'Invalid request method "' + a.toUpperCase() + '"')), new ne(e || 500, s, new Error(l), !0)
      }

      function Be(e) {
        let t = Object.entries(e);
        for (let e = t.length - 1; e >= 0; e--) {
          let [r, n] = t[e];
          if ($e(n)) return {
            key: r,
            result: n
          }
        }
      }

      function He(e) {
        return v(s({}, "string" == typeof e ? y(e) : e, {
          hash: ""
        }))
      }

      function ze(e) {
        return Je(e.result) && ue.has(e.result.status)
      }

      function Ke(e) {
        return e.type === b.deferred
      }

      function We(e) {
        return e.type === b.error
      }

      function $e(e) {
        return (e && e.type) === b.redirect
      }

      function Ve(e) {
        return "object" == typeof e && null != e && "type" in e && "data" in e && "init" in e && "DataWithResponseInit" === e.type
      }

      function Je(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "object" == typeof e.headers && void 0 !== e.body
      }

      function Ye(e) {
        return ie.has(e.toLowerCase())
      }
      async function qe(e, t, r, n, a) {
        let o = Object.entries(t);
        for (let i = 0; i < o.length; i++) {
          let [s, l] = o[i], u = e.find((e => (null == e ? void 0 : e.route.id) === s));
          if (!u) continue;
          let c = n.find((e => e.route.id === u.route.id)),
            d = null != c && !Re(c, u) && void 0 !== (a && a[u.route.id]);
          Ke(l) && d && await Ge(l, r, !1).then((e => {
            e && (t[s] = e)
          }))
        }
      }
      async function Xe(e, t, r) {
        for (let n = 0; n < r.length; n++) {
          let {
            key: a,
            routeId: o,
            controller: i
          } = r[n], s = t[a];
          e.find((e => (null == e ? void 0 : e.route.id) === o)) && Ke(s) && (h(i, "Expected an AbortController for revalidating fetcher deferred result"), await Ge(s, i.signal, !0).then((e => {
            e && (t[a] = e)
          })))
        }
      }
      async function Ge(e, t, r) {
        if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
          if (r) try {
            return {
              type: b.data,
              data: e.deferredData.unwrappedData
            }
          } catch (e) {
            return {
              type: b.error,
              error: e
            }
          }
          return {
            type: b.data,
            data: e.deferredData.data
          }
        }
      }

      function Qe(e) {
        return new URLSearchParams(e).getAll("index").some((e => "" === e))
      }

      function Ze(e, t) {
        let r = "string" == typeof t ? y(t).search : t.search;
        if (e[e.length - 1].route.index && Qe(r || "")) return e[e.length - 1];
        let n = z(e);
        return n[n.length - 1]
      }

      function et(e) {
        let {
          formMethod: t,
          formAction: r,
          formEncType: n,
          text: a,
          formData: o,
          json: i
        } = e;
        if (t && r && n) return null != a ? {
          formMethod: t,
          formAction: r,
          formEncType: n,
          formData: void 0,
          json: void 0,
          text: a
        } : null != o ? {
          formMethod: t,
          formAction: r,
          formEncType: n,
          formData: o,
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

      function tt(e, t) {
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

      function rt(e, t) {
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

      function nt(e) {
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

      function at() {
        return at = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, at.apply(this, arguments)
      }
      Symbol("deferred");
      const ot = a.createContext(null),
        it = a.createContext(null),
        st = a.createContext(null),
        lt = a.createContext(null),
        ut = a.createContext(null),
        ct = a.createContext({
          outlet: null,
          matches: [],
          isDataRoute: !1
        }),
        dt = a.createContext(null);

      function ht(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t;
        ft() || h(!1);
        let {
          basename: n,
          navigator: o
        } = a.useContext(lt), {
          hash: i,
          pathname: s,
          search: l
        } = Rt(e, {
          relative: r
        }), u = s;
        return "/" !== n && (u = "/" === s ? n : $([n, s])), o.createHref({
          pathname: u,
          search: l,
          hash: i
        })
      }

      function ft() {
        return null != a.useContext(ut)
      }

      function pt() {
        return ft() || h(!1), a.useContext(ut).location
      }

      function mt() {
        return a.useContext(ut).navigationType
      }

      function vt(e) {
        ft() || h(!1);
        let {
          pathname: t
        } = pt();
        return a.useMemo((() => N(e, F(t))), [t, e])
      }

      function yt(e) {
        a.useContext(lt).static || a.useLayoutEffect(e)
      }

      function gt() {
        let {
          isDataRoute: e
        } = a.useContext(ct);
        return e ? function() {
          let {
            router: e
          } = Ot(Tt.UseNavigateStable), t = Ut(At.UseNavigateStable), r = a.useRef(!1);
          return yt((() => {
            r.current = !0
          })), a.useCallback((function(n, a) {
            void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, at({
              fromRouteId: t
            }, a)))
          }), [e, t])
        }() : function() {
          ft() || h(!1);
          let e = a.useContext(ot),
            {
              basename: t,
              future: r,
              navigator: n
            } = a.useContext(lt),
            {
              matches: o
            } = a.useContext(ct),
            {
              pathname: i
            } = pt(),
            s = JSON.stringify(K(o, r.v7_relativeSplatPath)),
            l = a.useRef(!1);
          return yt((() => {
            l.current = !0
          })), a.useCallback((function(r, a) {
            if (void 0 === a && (a = {}), !l.current) return;
            if ("number" == typeof r) return void n.go(r);
            let o = W(r, JSON.parse(s), i, "path" === a.relative);
            null == e && "/" !== t && (o.pathname = "/" === o.pathname ? t : $([t, o.pathname])), (a.replace ? n.replace : n.push)(o, a.state, a)
          }), [t, n, s, i, e])
        }()
      }
      const bt = a.createContext(null);

      function wt() {
        return a.useContext(bt)
      }

      function St(e) {
        let t = a.useContext(ct).outlet;
        return t ? a.createElement(bt.Provider, {
          value: e
        }, t) : t
      }

      function Et() {
        let {
          matches: e
        } = a.useContext(ct), t = e[e.length - 1];
        return t ? t.params : {}
      }

      function Rt(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          future: n
        } = a.useContext(lt), {
          matches: o
        } = a.useContext(ct), {
          pathname: i
        } = pt(), s = JSON.stringify(K(o, n.v7_relativeSplatPath));
        return a.useMemo((() => W(e, JSON.parse(s), i, "path" === r)), [e, s, i, r])
      }

      function xt(e, t) {
        return _t(e, t)
      }

      function _t(e, t, r, o) {
        ft() || h(!1);
        let {
          navigator: i,
          static: s
        } = a.useContext(lt), {
          matches: l
        } = a.useContext(ct), u = l[l.length - 1], c = u ? u.params : {}, d = (u && u.pathname, u ? u.pathnameBase : "/");
        u && u.route;
        let f, p = pt();
        if (t) {
          var m;
          let e = "string" == typeof t ? y(t) : t;
          "/" === d || (null == (m = e.pathname) ? void 0 : m.startsWith(d)) || h(!1), f = e
        } else f = p;
        let v = f.pathname || "/",
          g = v;
        if ("/" !== d) {
          let e = d.replace(/^\//, "").split("/");
          g = "/" + v.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let b = !s && r && r.matches && r.matches.length > 0 ? r.matches : E(e, {
            pathname: g
          }),
          w = kt(b && b.map((e => Object.assign({}, e, {
            params: Object.assign({}, c, e.params),
            pathname: $([d, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? d : $([d, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
          }))), l, r, o);
        return t && w ? a.createElement(ut.Provider, {
          value: {
            location: at({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, f),
            navigationType: n.Pop
          }
        }, w) : w
      }

      function Dt() {
        let e = Kt(),
          t = ae(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
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
      const Ct = a.createElement(Dt, null);
      class Lt extends a.Component {
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
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
          }
        }
        componentDidCatch(e, t) {
          console.error("React Router caught the following error during render", e, t)
        }
        render() {
          return void 0 !== this.state.error ? a.createElement(ct.Provider, {
            value: this.props.routeContext
          }, a.createElement(dt.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children
        }
      }

      function Pt(e) {
        let {
          routeContext: t,
          match: r,
          children: n
        } = e, o = a.useContext(ot);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), a.createElement(ct.Provider, {
          value: t
        }, n)
      }

      function kt(e, t, r, n) {
        var o;
        if (void 0 === t && (t = []), void 0 === r && (r = null), void 0 === n && (n = null), null == e) {
          var i;
          if (!r) return null;
          if (r.errors) e = r.matches;
          else {
            if (!(null != (i = n) && i.v7_partialHydration && 0 === t.length && !r.initialized && r.matches.length > 0)) return null;
            e = r.matches
          }
        }
        let s = e,
          l = null == (o = r) ? void 0 : o.errors;
        if (null != l) {
          let e = s.findIndex((e => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])));
          e >= 0 || h(!1), s = s.slice(0, Math.min(s.length, e + 1))
        }
        let u = !1,
          c = -1;
        if (r && n && n.v7_partialHydration)
          for (let e = 0; e < s.length; e++) {
            let t = s[e];
            if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id) {
              let {
                loaderData: e,
                errors: n
              } = r, a = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
              if (t.route.lazy || a) {
                u = !0, s = c >= 0 ? s.slice(0, c + 1) : [s[0]];
                break
              }
            }
          }
        return s.reduceRight(((e, n, o) => {
          let i, d = !1,
            h = null,
            f = null;
          var p;
          r && (i = l && n.route.id ? l[n.route.id] : void 0, h = n.route.errorElement || Ct, u && (c < 0 && 0 === o ? (Yt[p = "route-fallback"] || (Yt[p] = !0), d = !0, f = null) : c === o && (d = !0, f = n.route.hydrateFallbackElement || null)));
          let m = t.concat(s.slice(0, o + 1)),
            v = () => {
              let t;
              return t = i ? h : d ? f : n.route.Component ? a.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, a.createElement(Pt, {
                match: n,
                routeContext: {
                  outlet: e,
                  matches: m,
                  isDataRoute: null != r
                },
                children: t
              })
            };
          return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === o) ? a.createElement(Lt, {
            location: r.location,
            revalidation: r.revalidation,
            component: h,
            error: i,
            children: v(),
            routeContext: {
              outlet: null,
              matches: m,
              isDataRoute: !0
            }
          }) : v()
        }), null)
      }
      var Tt = function(e) {
          return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(Tt || {}),
        At = function(e) {
          return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(At || {});

      function Ot(e) {
        let t = a.useContext(ot);
        return t || h(!1), t
      }

      function Mt(e) {
        let t = a.useContext(it);
        return t || h(!1), t
      }

      function Ut(e) {
        let t = function() {
            let e = a.useContext(ct);
            return e || h(!1), e
          }(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || h(!1), r.route.id
      }

      function jt() {
        return Ut(At.UseRouteId)
      }

      function Nt() {
        return Mt(At.UseNavigation).navigation
      }

      function Ft() {
        let e = Ot(Tt.UseRevalidator),
          t = Mt(At.UseRevalidator);
        return a.useMemo((() => ({
          revalidate: e.router.revalidate,
          state: t.revalidation
        })), [e.router.revalidate, t.revalidation])
      }

      function It() {
        let {
          matches: e,
          loaderData: t
        } = Mt(At.UseMatches);
        return a.useMemo((() => e.map((e => x(e, t)))), [e, t])
      }

      function Bt() {
        let e = Mt(At.UseLoaderData),
          t = Ut(At.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
      }

      function Ht(e) {
        return Mt(At.UseRouteLoaderData).loaderData[e]
      }

      function zt() {
        let e = Mt(At.UseActionData),
          t = Ut(At.UseLoaderData);
        return e.actionData ? e.actionData[t] : void 0
      }

      function Kt() {
        var e;
        let t = a.useContext(dt),
          r = Mt(At.UseRouteError),
          n = Ut(At.UseRouteError);
        return void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[n]
      }

      function Wt() {
        let e = a.useContext(st);
        return null == e ? void 0 : e._data
      }

      function $t() {
        let e = a.useContext(st);
        return null == e ? void 0 : e._error
      }
      let Vt = 0;

      function Jt(e) {
        let {
          router: t,
          basename: r
        } = Ot(Tt.UseBlocker), n = Mt(At.UseBlocker), [o, i] = a.useState(""), s = a.useCallback((t => {
          if ("function" != typeof e) return !!e;
          if ("/" === r) return e(t);
          let {
            currentLocation: n,
            nextLocation: a,
            historyAction: o
          } = t;
          return e({
            currentLocation: at({}, n, {
              pathname: I(n.pathname, r) || n.pathname
            }),
            nextLocation: at({}, a, {
              pathname: I(a.pathname, r) || a.pathname
            }),
            historyAction: o
          })
        }), [r, e]);
        return a.useEffect((() => {
          let e = String(++Vt);
          return i(e), () => t.deleteBlocker(e)
        }), [t]), a.useEffect((() => {
          "" !== o && t.getBlocker(o, s)
        }), [t, o, s]), o && n.blockers.has(o) ? n.blockers.get(o) : fe
      }
      const Yt = {},
        qt = (e, t, r) => {};

      function Xt(e, t) {
        void 0 === (null == e ? void 0 : e.v7_startTransition) && qt("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), void 0 !== (null == e ? void 0 : e.v7_relativeSplatPath) || t && t.v7_relativeSplatPath || qt("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"), t && (void 0 === t.v7_fetcherPersist && qt("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"), void 0 === t.v7_normalizeFormMethod && qt("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"), void 0 === t.v7_partialHydration && qt("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"), void 0 === t.v7_skipActionErrorRevalidation && qt("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))
      }
      const Gt = a.startTransition;

      function Qt(e) {
        let {
          basename: t,
          children: r,
          initialEntries: n,
          initialIndex: o,
          future: i
        } = e, s = a.useRef();
        null == s.current && (s.current = u({
          initialEntries: n,
          initialIndex: o,
          v5Compat: !0
        }));
        let l = s.current,
          [c, d] = a.useState({
            action: l.action,
            location: l.location
          }),
          {
            v7_startTransition: h
          } = i || {},
          f = a.useCallback((e => {
            h && Gt ? Gt((() => d(e))) : d(e)
          }), [d, h]);
        return a.useLayoutEffect((() => l.listen(f)), [l, f]), a.useEffect((() => Xt(i)), [i]), a.createElement(rr, {
          basename: t,
          children: r,
          location: c.location,
          navigationType: c.action,
          navigator: l,
          future: i
        })
      }

      function Zt(e) {
        let {
          to: t,
          replace: r,
          state: n,
          relative: o
        } = e;
        ft() || h(!1);
        let {
          future: i,
          static: s
        } = a.useContext(lt), {
          matches: l
        } = a.useContext(ct), {
          pathname: u
        } = pt(), c = gt(), d = W(t, K(l, i.v7_relativeSplatPath), u, "path" === o), f = JSON.stringify(d);
        return a.useEffect((() => c(JSON.parse(f), {
          replace: r,
          state: n,
          relative: o
        })), [c, f, o, r, n]), null
      }

      function er(e) {
        return St(e.context)
      }

      function tr(e) {
        h(!1)
      }

      function rr(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = n.Pop,
          navigator: s,
          static: l = !1,
          future: u
        } = e;
        ft() && h(!1);
        let c = t.replace(/^\/*/, "/"),
          d = a.useMemo((() => ({
            basename: c,
            navigator: s,
            static: l,
            future: at({
              v7_relativeSplatPath: !1
            }, u)
          })), [c, u, s, l]);
        "string" == typeof o && (o = y(o));
        let {
          pathname: f = "/",
          search: p = "",
          hash: m = "",
          state: v = null,
          key: g = "default"
        } = o, b = a.useMemo((() => {
          let e = I(f, c);
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
        }), [c, f, p, m, v, g, i]);
        return null == b ? null : a.createElement(lt.Provider, {
          value: d
        }, a.createElement(ut.Provider, {
          children: r,
          value: b
        }))
      }

      function nr(e) {
        let {
          children: t,
          location: r
        } = e;
        return xt(ur(t), r)
      }

      function ar(e) {
        let {
          children: t,
          errorElement: r,
          resolve: n
        } = e;
        return a.createElement(sr, {
          resolve: n,
          errorElement: r
        }, a.createElement(lr, null, t))
      }
      var or = function(e) {
        return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
      }(or || {});
      const ir = new Promise((() => {}));
      class sr extends a.Component {
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
          } = this.props, n = null, o = or.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              o = or.error;
              let e = this.state.error;
              n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                get: () => !0
              }), Object.defineProperty(n, "_error", {
                get: () => e
              })
            } else r._tracked ? (n = r, o = "_error" in n ? or.error : "_data" in n ? or.success : or.pending) : (o = or.pending, Object.defineProperty(r, "_tracked", {
              get: () => !0
            }), n = r.then((e => Object.defineProperty(r, "_data", {
              get: () => e
            })), (e => Object.defineProperty(r, "_error", {
              get: () => e
            }))));
          else o = or.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
            get: () => !0
          }), Object.defineProperty(n, "_data", {
            get: () => r
          });
          if (o === or.error && n._error instanceof X) throw ir;
          if (o === or.error && !t) throw n._error;
          if (o === or.error) return a.createElement(st.Provider, {
            value: n,
            children: t
          });
          if (o === or.success) return a.createElement(st.Provider, {
            value: n,
            children: e
          });
          throw n
        }
      }

      function lr(e) {
        let {
          children: t
        } = e, r = Wt(), n = "function" == typeof t ? t(r) : t;
        return a.createElement(a.Fragment, null, n)
      }

      function ur(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return a.Children.forEach(e, ((e, n) => {
          if (!a.isValidElement(e)) return;
          let o = [...t, n];
          if (e.type === a.Fragment) return void r.push.apply(r, ur(e.props.children, o));
          e.type !== tr && h(!1), e.props.index && e.props.children && h(!1);
          let i = {
            id: e.props.id || o.join("-"),
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
          e.props.children && (i.children = ur(e.props.children, o)), r.push(i)
        })), r
      }

      function cr(e) {
        return kt(e)
      }

      function dr(e) {
        let t = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
        };
        return e.Component && Object.assign(t, {
          element: a.createElement(e.Component),
          Component: void 0
        }), e.HydrateFallback && Object.assign(t, {
          hydrateFallbackElement: a.createElement(e.HydrateFallback),
          HydrateFallback: void 0
        }), e.ErrorBoundary && Object.assign(t, {
          errorElement: a.createElement(e.ErrorBoundary),
          ErrorBoundary: void 0
        }), t
      }

      function hr(e, t) {
        return ye({
          basename: null == t ? void 0 : t.basename,
          future: at({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: u({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          mapRouteProperties: dr,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation
        }).initialize()
      }

      function fr() {
        return fr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, fr.apply(this, arguments)
      }

      function pr(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }
      const mr = "get",
        vr = "application/x-www-form-urlencoded";

      function yr(e) {
        return null != e && "string" == typeof e.tagName
      }

      function gr(e) {
        return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
            [r, n]
          ])
        }), []))
      }
      let br = null;
      const wr = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

      function Sr(e) {
        return null == e || wr.has(e) ? e : null
      }
      const Er = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
        Rr = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
        xr = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
      try {
        window.__reactRouterVersion = "6"
      } catch (e) {}

      function _r(e, t) {
        return ye({
          basename: null == t ? void 0 : t.basename,
          future: fr({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: c({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || Cr(),
          routes: e,
          mapRouteProperties: dr,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function Dr(e, t) {
        return ye({
          basename: null == t ? void 0 : t.basename,
          future: fr({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0
          }),
          history: d({
            window: null == t ? void 0 : t.window
          }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || Cr(),
          routes: e,
          mapRouteProperties: dr,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window
        }).initialize()
      }

      function Cr() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = fr({}, t, {
          errors: Lr(t.errors)
        })), t
      }

      function Lr(e) {
        if (!e) return null;
        let t = Object.entries(e),
          r = {};
        for (let [e, n] of t)
          if (n && "RouteErrorResponse" === n.__type) r[e] = new ne(n.status, n.statusText, n.data, !0 === n.internal);
          else if (n && "Error" === n.__type) {
          if (n.__subType) {
            let t = window[n.__subType];
            if ("function" == typeof t) try {
              let a = new t(n.message);
              a.stack = "", r[e] = a
            } catch (e) {}
          }
          if (null == r[e]) {
            let t = new Error(n.message);
            t.stack = "", r[e] = t
          }
        } else r[e] = n;
        return r
      }
      const Pr = a.createContext({
          isTransitioning: !1
        }),
        kr = a.createContext(new Map),
        Tr = a.startTransition,
        Ar = i.flushSync,
        Or = a.useId;

      function Mr(e) {
        Ar ? Ar(e) : e()
      }
      class Ur {
        constructor() {
          this.status = "pending", this.promise = new Promise(((e, t) => {
            this.resolve = t => {
              "pending" === this.status && (this.status = "resolved", e(t))
            }, this.reject = e => {
              "pending" === this.status && (this.status = "rejected", t(e))
            }
          }))
        }
      }

      function jr(e) {
        let {
          fallbackElement: t,
          router: r,
          future: n
        } = e, [o, i] = a.useState(r.state), [s, l] = a.useState(), [u, c] = a.useState({
          isTransitioning: !1
        }), [d, h] = a.useState(), [f, p] = a.useState(), [m, v] = a.useState(), y = a.useRef(new Map), {
          v7_startTransition: g
        } = n || {}, b = a.useCallback((e => {
          g ? function(e) {
            Tr ? Tr(e) : e()
          }(e) : e()
        }), [g]), w = a.useCallback(((e, t) => {
          let {
            deletedFetchers: n,
            flushSync: a,
            viewTransitionOpts: o
          } = t;
          e.fetchers.forEach(((e, t) => {
            void 0 !== e.data && y.current.set(t, e.data)
          })), n.forEach((e => y.current.delete(e)));
          let s = null == r.window || null == r.window.document || "function" != typeof r.window.document.startViewTransition;
          if (o && !s) {
            if (a) {
              Mr((() => {
                f && (d && d.resolve(), f.skipTransition()), c({
                  isTransitioning: !0,
                  flushSync: !0,
                  currentLocation: o.currentLocation,
                  nextLocation: o.nextLocation
                })
              }));
              let t = r.window.document.startViewTransition((() => {
                Mr((() => i(e)))
              }));
              return t.finished.finally((() => {
                Mr((() => {
                  h(void 0), p(void 0), l(void 0), c({
                    isTransitioning: !1
                  })
                }))
              })), void Mr((() => p(t)))
            }
            f ? (d && d.resolve(), f.skipTransition(), v({
              state: e,
              currentLocation: o.currentLocation,
              nextLocation: o.nextLocation
            })) : (l(e), c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: o.currentLocation,
              nextLocation: o.nextLocation
            }))
          } else a ? Mr((() => i(e))) : b((() => i(e)))
        }), [r.window, f, d, y, b]);
        a.useLayoutEffect((() => r.subscribe(w)), [r, w]), a.useEffect((() => {
          u.isTransitioning && !u.flushSync && h(new Ur)
        }), [u]), a.useEffect((() => {
          if (d && s && r.window) {
            let e = s,
              t = d.promise,
              n = r.window.document.startViewTransition((async () => {
                b((() => i(e))), await t
              }));
            n.finished.finally((() => {
              h(void 0), p(void 0), l(void 0), c({
                isTransitioning: !1
              })
            })), p(n)
          }
        }), [b, s, d, r.window]), a.useEffect((() => {
          d && s && o.location.key === s.location.key && d.resolve()
        }), [d, f, o.location, s]), a.useEffect((() => {
          !u.isTransitioning && m && (l(m.state), c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: m.currentLocation,
            nextLocation: m.nextLocation
          }), v(void 0))
        }), [u.isTransitioning, m]), a.useEffect((() => {}), []);
        let S = a.useMemo((() => ({
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
          E = r.basename || "/",
          R = a.useMemo((() => ({
            router: r,
            navigator: S,
            static: !1,
            basename: E
          })), [r, S, E]),
          x = a.useMemo((() => ({
            v7_relativeSplatPath: r.future.v7_relativeSplatPath
          })), [r.future.v7_relativeSplatPath]);
        return a.useEffect((() => Xt(n, r.future)), [n, r.future]), a.createElement(a.Fragment, null, a.createElement(ot.Provider, {
          value: R
        }, a.createElement(it.Provider, {
          value: o
        }, a.createElement(kr.Provider, {
          value: y.current
        }, a.createElement(Pr.Provider, {
          value: u
        }, a.createElement(rr, {
          basename: E,
          location: o.location,
          navigationType: o.historyAction,
          navigator: S,
          future: x
        }, o.initialized || r.future.v7_partialHydration ? a.createElement(Nr, {
          routes: r.routes,
          future: r.future,
          state: o
        }) : t))))), null)
      }
      const Nr = a.memo(Fr);

      function Fr(e) {
        let {
          routes: t,
          future: r,
          state: n
        } = e;
        return _t(t, void 0, n, r)
      }

      function Ir(e) {
        let {
          basename: t,
          children: r,
          future: n,
          window: o
        } = e, i = a.useRef();
        null == i.current && (i.current = c({
          window: o,
          v5Compat: !0
        }));
        let s = i.current,
          [l, u] = a.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: d
          } = n || {},
          h = a.useCallback((e => {
            d && Tr ? Tr((() => u(e))) : u(e)
          }), [u, d]);
        return a.useLayoutEffect((() => s.listen(h)), [s, h]), a.useEffect((() => Xt(n)), [n]), a.createElement(rr, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: s,
          future: n
        })
      }

      function Br(e) {
        let {
          basename: t,
          children: r,
          future: n,
          window: o
        } = e, i = a.useRef();
        null == i.current && (i.current = d({
          window: o,
          v5Compat: !0
        }));
        let s = i.current,
          [l, u] = a.useState({
            action: s.action,
            location: s.location
          }),
          {
            v7_startTransition: c
          } = n || {},
          h = a.useCallback((e => {
            c && Tr ? Tr((() => u(e))) : u(e)
          }), [u, c]);
        return a.useLayoutEffect((() => s.listen(h)), [s, h]), a.useEffect((() => Xt(n)), [n]), a.createElement(rr, {
          basename: t,
          children: r,
          location: l.location,
          navigationType: l.action,
          navigator: s,
          future: n
        })
      }

      function Hr(e) {
        let {
          basename: t,
          children: r,
          future: n,
          history: o
        } = e, [i, s] = a.useState({
          action: o.action,
          location: o.location
        }), {
          v7_startTransition: l
        } = n || {}, u = a.useCallback((e => {
          l && Tr ? Tr((() => s(e))) : s(e)
        }), [s, l]);
        return a.useLayoutEffect((() => o.listen(u)), [o, u]), a.useEffect((() => Xt(n)), [n]), a.createElement(rr, {
          basename: t,
          children: r,
          location: i.location,
          navigationType: i.action,
          navigator: o,
          future: n
        })
      }
      const zr = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        Kr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Wr = a.forwardRef((function(e, t) {
          let r, {
              onClick: n,
              relative: o,
              reloadDocument: i,
              replace: s,
              state: l,
              target: u,
              to: c,
              preventScrollReset: d,
              viewTransition: h
            } = e,
            f = pr(e, Er),
            {
              basename: p
            } = a.useContext(lt),
            m = !1;
          if ("string" == typeof c && Kr.test(c) && (r = c, zr)) try {
            let e = new URL(window.location.href),
              t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
              r = I(t.pathname, p);
            t.origin === e.origin && null != r ? c = r + t.search + t.hash : m = !0
          } catch (e) {}
          let v = ht(c, {
              relative: o
            }),
            y = Qr(c, {
              replace: s,
              state: l,
              target: u,
              preventScrollReset: d,
              relative: o,
              viewTransition: h
            });
          return a.createElement("a", fr({}, f, {
            href: r || v,
            onClick: m || i ? n : function(e) {
              n && n(e), e.defaultPrevented || y(e)
            },
            ref: t,
            target: u
          }))
        })),
        $r = a.forwardRef((function(e, t) {
          let {
            "aria-current": r = "page",
            caseSensitive: n = !1,
            className: o = "",
            end: i = !1,
            style: s,
            to: l,
            viewTransition: u,
            children: c
          } = e, d = pr(e, Rr), h = Rt(l, {
            relative: d.relative
          }), f = pt(), p = a.useContext(it), {
            navigator: m,
            basename: v
          } = a.useContext(lt), y = null != p && hn(h) && !0 === u, g = m.encodeLocation ? m.encodeLocation(h).pathname : h.pathname, b = f.pathname, w = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
          n || (b = b.toLowerCase(), w = w ? w.toLowerCase() : null, g = g.toLowerCase()), w && v && (w = I(w, v) || w);
          const S = "/" !== g && g.endsWith("/") ? g.length - 1 : g.length;
          let E, R = b === g || !i && b.startsWith(g) && "/" === b.charAt(S),
            x = null != w && (w === g || !i && w.startsWith(g) && "/" === w.charAt(g.length)),
            _ = {
              isActive: R,
              isPending: x,
              isTransitioning: y
            },
            D = R ? r : void 0;
          E = "function" == typeof o ? o(_) : [o, R ? "active" : null, x ? "pending" : null, y ? "transitioning" : null].filter(Boolean).join(" ");
          let C = "function" == typeof s ? s(_) : s;
          return a.createElement(Wr, fr({}, d, {
            "aria-current": D,
            className: E,
            ref: t,
            style: C,
            to: l,
            viewTransition: u
          }), "function" == typeof c ? c(_) : c)
        })),
        Vr = a.forwardRef(((e, t) => {
          let {
            fetcherKey: r,
            navigate: n,
            reloadDocument: o,
            replace: i,
            state: s,
            method: l = mr,
            action: u,
            onSubmit: c,
            relative: d,
            preventScrollReset: h,
            viewTransition: f
          } = e, p = pr(e, xr), m = rn(), v = nn(u, {
            relative: d
          }), y = "get" === l.toLowerCase() ? "get" : "post";
          return a.createElement("form", fr({
            ref: t,
            method: y,
            action: v,
            onSubmit: o ? c : e => {
              if (c && c(e), e.defaultPrevented) return;
              e.preventDefault();
              let t = e.nativeEvent.submitter,
                a = (null == t ? void 0 : t.getAttribute("formmethod")) || l;
              m(t || e.currentTarget, {
                fetcherKey: r,
                method: a,
                navigate: n,
                replace: i,
                state: s,
                relative: d,
                preventScrollReset: h,
                viewTransition: f
              })
            }
          }, p))
        }));

      function Jr(e) {
        let {
          getKey: t,
          storageKey: r
        } = e;
        return un({
          getKey: t,
          storageKey: r
        }), null
      }
      var Yr, qr;

      function Xr(e) {
        let t = a.useContext(ot);
        return t || h(!1), t
      }

      function Gr(e) {
        let t = a.useContext(it);
        return t || h(!1), t
      }

      function Qr(e, t) {
        let {
          target: r,
          replace: n,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: l
        } = void 0 === t ? {} : t, u = gt(), c = pt(), d = Rt(e, {
          relative: s
        });
        return a.useCallback((t => {
          if (function(e, t) {
              return !(0 !== e.button || t && "_self" !== t || function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
              }(e))
            }(t, r)) {
            t.preventDefault();
            let r = void 0 !== n ? n : v(c) === v(d);
            u(e, {
              replace: r,
              state: o,
              preventScrollReset: i,
              relative: s,
              viewTransition: l
            })
          }
        }), [c, u, d, n, o, r, e, i, s, l])
      }

      function Zr(e) {
        let t = a.useRef(gr(e)),
          r = a.useRef(!1),
          n = pt(),
          o = a.useMemo((() => function(e, t) {
            let r = gr(e);
            return t && t.forEach(((e, n) => {
              r.has(n) || t.getAll(n).forEach((e => {
                r.append(n, e)
              }))
            })), r
          }(n.search, r.current ? null : t.current)), [n.search]),
          i = gt(),
          s = a.useCallback(((e, t) => {
            const n = gr("function" == typeof e ? e(o) : e);
            r.current = !0, i("?" + n, t)
          }), [i, o]);
        return [o, s]
      }(function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
      })(Yr || (Yr = {})),
      function(e) {
        e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
      }(qr || (qr = {}));
      let en = 0,
        tn = () => "__" + String(++en) + "__";

      function rn() {
        let {
          router: e
        } = Xr(Yr.UseSubmit), {
          basename: t
        } = a.useContext(lt), r = jt();
        return a.useCallback((function(n, a) {
          void 0 === a && (a = {}),
            function() {
              if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
            }();
          let {
            action: o,
            method: i,
            encType: s,
            formData: l,
            body: u
          } = function(e, t) {
            let r, n, a, o, i;
            if (yr(s = e) && "form" === s.tagName.toLowerCase()) {
              let i = e.getAttribute("action");
              n = i ? I(i, t) : null, r = e.getAttribute("method") || mr, a = Sr(e.getAttribute("enctype")) || vr, o = new FormData(e)
            } else if (function(e) {
                return yr(e) && "button" === e.tagName.toLowerCase()
              }(e) || function(e) {
                return yr(e) && "input" === e.tagName.toLowerCase()
              }(e) && ("submit" === e.type || "image" === e.type)) {
              let i = e.form;
              if (null == i) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
              let s = e.getAttribute("formaction") || i.getAttribute("action");
              if (n = s ? I(s, t) : null, r = e.getAttribute("formmethod") || i.getAttribute("method") || mr, a = Sr(e.getAttribute("formenctype")) || Sr(i.getAttribute("enctype")) || vr, o = new FormData(i, e), ! function() {
                  if (null === br) try {
                    new FormData(document.createElement("form"), 0), br = !1
                  } catch (e) {
                    br = !0
                  }
                  return br
                }()) {
                let {
                  name: t,
                  type: r,
                  value: n
                } = e;
                if ("image" === r) {
                  let e = t ? t + "." : "";
                  o.append(e + "x", "0"), o.append(e + "y", "0")
                } else t && o.append(t, n)
              }
            } else {
              if (yr(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
              r = mr, n = null, a = vr, i = e
            }
            var s;
            return o && "text/plain" === a && (i = o, o = void 0), {
              action: n,
              method: r.toLowerCase(),
              encType: a,
              formData: o,
              body: i
            }
          }(n, t);
          if (!1 === a.navigate) {
            let t = a.fetcherKey || tn();
            e.fetch(t, r, a.action || o, {
              preventScrollReset: a.preventScrollReset,
              formData: l,
              body: u,
              formMethod: a.method || i,
              formEncType: a.encType || s,
              flushSync: a.flushSync
            })
          } else e.navigate(a.action || o, {
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || i,
            formEncType: a.encType || s,
            replace: a.replace,
            state: a.state,
            fromRouteId: r,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition
          })
        }), [e, t, r])
      }

      function nn(e, t) {
        let {
          relative: r
        } = void 0 === t ? {} : t, {
          basename: n
        } = a.useContext(lt), o = a.useContext(ct);
        o || h(!1);
        let [i] = o.matches.slice(-1), s = fr({}, Rt(e || ".", {
          relative: r
        })), l = pt();
        if (null == e) {
          s.search = l.search;
          let e = new URLSearchParams(s.search),
            t = e.getAll("index");
          if (t.some((e => "" === e))) {
            e.delete("index"), t.filter((e => e)).forEach((t => e.append("index", t)));
            let r = e.toString();
            s.search = r ? "?" + r : ""
          }
        }
        return e && "." !== e || !i.route.index || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (s.pathname = "/" === s.pathname ? n : $([n, s.pathname])), v(s)
      }

      function an(e) {
        var t;
        let {
          key: r
        } = void 0 === e ? {} : e, {
          router: n
        } = Xr(Yr.UseFetcher), o = Gr(qr.UseFetcher), i = a.useContext(kr), s = a.useContext(ct), l = null == (t = s.matches[s.matches.length - 1]) ? void 0 : t.route.id;
        i || h(!1), s || h(!1), null == l && h(!1);
        let u = Or ? Or() : "",
          [c, d] = a.useState(r || u);
        r && r !== c ? d(r) : c || d(tn()), a.useEffect((() => (n.getFetcher(c), () => {
          n.deleteFetcher(c)
        })), [n, c]);
        let f = a.useCallback(((e, t) => {
            l || h(!1), n.fetch(c, l, e, t)
          }), [c, l, n]),
          p = rn(),
          m = a.useCallback(((e, t) => {
            p(e, fr({}, t, {
              navigate: !1,
              fetcherKey: c
            }))
          }), [c, p]),
          v = a.useMemo((() => a.forwardRef(((e, t) => a.createElement(Vr, fr({}, e, {
            navigate: !1,
            fetcherKey: c,
            ref: t
          }))))), [c]),
          y = o.fetchers.get(c) || he,
          g = i.get(c);
        return a.useMemo((() => fr({
          Form: v,
          submit: m,
          load: f
        }, y, {
          data: g
        })), [v, m, f, y, g])
      }

      function on() {
        let e = Gr(qr.UseFetchers);
        return Array.from(e.fetchers.entries()).map((e => {
          let [t, r] = e;
          return fr({}, r, {
            key: t
          })
        }))
      }
      const sn = "react-router-scroll-positions";
      let ln = {};

      function un(e) {
        let {
          getKey: t,
          storageKey: r
        } = void 0 === e ? {} : e, {
          router: n
        } = Xr(Yr.UseScrollRestoration), {
          restoreScrollPosition: o,
          preventScrollReset: i
        } = Gr(qr.UseScrollRestoration), {
          basename: s
        } = a.useContext(lt), l = pt(), u = It(), c = Nt();
        a.useEffect((() => (window.history.scrollRestoration = "manual", () => {
            window.history.scrollRestoration = "auto"
          })), []),
          function(e) {
            let {
              capture: t
            } = {};
            a.useEffect((() => {
              let r = null != t ? {
                capture: t
              } : void 0;
              return window.addEventListener("pagehide", e, r), () => {
                window.removeEventListener("pagehide", e, r)
              }
            }), [e, t])
          }(a.useCallback((() => {
            if ("idle" === c.state) {
              let e = (t ? t(l, u) : null) || l.key;
              ln[e] = window.scrollY
            }
            try {
              sessionStorage.setItem(r || sn, JSON.stringify(ln))
            } catch (e) {}
            window.history.scrollRestoration = "auto"
          }), [r, t, c.state, l, u])), "undefined" != typeof document && (a.useLayoutEffect((() => {
            try {
              let e = sessionStorage.getItem(r || sn);
              e && (ln = JSON.parse(e))
            } catch (e) {}
          }), [r]), a.useLayoutEffect((() => {
            let e = t && "/" !== s ? (e, r) => t(fr({}, e, {
                pathname: I(e.pathname, s) || e.pathname
              }), r) : t,
              r = null == n ? void 0 : n.enableScrollRestoration(ln, (() => window.scrollY), e);
            return () => r && r()
          }), [n, s, t]), a.useLayoutEffect((() => {
            if (!1 !== o)
              if ("number" != typeof o) {
                if (l.hash) {
                  let e = document.getElementById(decodeURIComponent(l.hash.slice(1)));
                  if (e) return void e.scrollIntoView()
                }!0 !== i && window.scrollTo(0, 0)
              } else window.scrollTo(0, o)
          }), [l, o, i]))
      }

      function cn(e, t) {
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

      function dn(e) {
        let {
          when: t,
          message: r
        } = e, n = Jt(t);
        a.useEffect((() => {
          "blocked" === n.state && (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset())
        }), [n, r]), a.useEffect((() => {
          "blocked" !== n.state || t || n.reset()
        }), [n, t])
      }

      function hn(e, t) {
        void 0 === t && (t = {});
        let r = a.useContext(Pr);
        null == r && h(!1);
        let {
          basename: n
        } = Xr(Yr.useViewTransitionState), o = Rt(e, {
          relative: t.relative
        });
        if (!r.isTransitioning) return !1;
        let i = I(r.currentLocation.pathname, n) || r.currentLocation.pathname,
          s = I(r.nextLocation.pathname, n) || r.nextLocation.pathname;
        return null != N(o.pathname, s) || null != N(o.pathname, i)
      }
    }
  }
]);