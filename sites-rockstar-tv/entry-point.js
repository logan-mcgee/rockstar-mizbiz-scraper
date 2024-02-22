/*! For license information please see remote-entry.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c3050202-a3b3-4779-9dd1-8678f72805aa", e._sentryDebugIdIdentifier = "sentry-dbid-c3050202-a3b3-4779-9dd1-8678f72805aa")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-videoplayer", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    o = {},
    a = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, s, l, u = {
            344: (e, t, r) => {
              "use strict";
              r.r(t), r.d(t, {
                AbortedDeferredError: () => K,
                Await: () => Bt,
                BrowserRouter: () => vr,
                Form: () => Rr,
                HashRouter: () => yr,
                Link: () => Er,
                MemoryRouter: () => At,
                NavLink: () => Sr,
                Navigate: () => Mt,
                NavigationType: () => n,
                Outlet: () => Ut,
                Route: () => Ot,
                Router: () => Nt,
                RouterProvider: () => pr,
                Routes: () => It,
                ScrollRestoration: () => kr,
                UNSAFE_DataRouterContext: () => We,
                UNSAFE_DataRouterStateContext: () => He,
                UNSAFE_LocationContext: () => Ve,
                UNSAFE_NavigationContext: () => Ke,
                UNSAFE_RouteContext: () => Je,
                UNSAFE_ViewTransitionContext: () => dr,
                UNSAFE_useRouteId: () => wt,
                UNSAFE_useScrollRestoration: () => $r,
                createBrowserRouter: () => sr,
                createHashRouter: () => lr,
                createMemoryRouter: () => Vt,
                createPath: () => p,
                createRoutesFromChildren: () => Ht,
                createRoutesFromElements: () => Ht,
                createSearchParams: () => Zt,
                defer: () => Y,
                generatePath: () => A,
                isRouteErrorResponse: () => Z,
                json: () => q,
                matchPath: () => M,
                matchRoutes: () => w,
                parsePath: () => m,
                redirect: () => X,
                redirectDocument: () => G,
                renderMatches: () => qt,
                resolvePath: () => N,
                unstable_HistoryRouter: () => gr,
                unstable_useBlocker: () => Tt,
                unstable_usePrompt: () => Wr,
                unstable_useViewTransitionState: () => Hr,
                useActionData: () => Ct,
                useAsyncError: () => Lt,
                useAsyncValue: () => Dt,
                useBeforeUnload: () => zr,
                useFetcher: () => Nr,
                useFetchers: () => Ir,
                useFormAction: () => Ur,
                useHref: () => Xe,
                useInRouterContext: () => Ge,
                useLinkClickHandler: () => Pr,
                useLoaderData: () => xt,
                useLocation: () => Qe,
                useMatch: () => et,
                useMatches: () => Rt,
                useNavigate: () => rt,
                useNavigation: () => Et,
                useNavigationType: () => Ze,
                useOutlet: () => at,
                useOutletContext: () => ot,
                useParams: () => it,
                useResolvedPath: () => st,
                useRevalidator: () => St,
                useRouteError: () => _t,
                useRouteLoaderData: () => kt,
                useRoutes: () => lt,
                useSearchParams: () => Tr,
                useSubmit: () => Ar
              });
              var n, o = r(200);

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

              function s(e) {
                void 0 === e && (e = {});
                let t, {
                  initialEntries: r = ["/"],
                  initialIndex: o,
                  v5Compat: a = !1
                } = e;
                t = r.map(((e, t) => f(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0)));
                let i = u(null == o ? t.length - 1 : o),
                  s = n.Pop,
                  l = null;

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
                    return s
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
                    s = n.Push;
                    let o = f(e, r);
                    i += 1, t.splice(i, t.length, o), a && l && l({
                      action: s,
                      location: o,
                      delta: 1
                    })
                  },
                  replace(e, r) {
                    s = n.Replace;
                    let o = f(e, r);
                    t[i] = o, a && l && l({
                      action: s,
                      location: o,
                      delta: 0
                    })
                  },
                  go(e) {
                    s = n.Pop;
                    let r = u(i + e),
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

              function l(e) {
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
                  window: s = document.defaultView,
                  v5Compat: l = !1
                } = o, u = s.history, d = n.Pop, m = null, v = y();

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
                  let t = "null" !== s.location.origin ? s.location.origin : s.location.href,
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
                    return e(s, u)
                  },
                  listen(e) {
                    if (m) throw new Error("A history only accepts one active listener");
                    return s.addEventListener(i, g), m = e, () => {
                      s.removeEventListener(i, g), m = null
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
                    d = n.Push;
                    let o = h(w.location, e, t);
                    r && r(o, e), v = y() + 1;
                    let a = f(o, v),
                      i = w.createHref(o);
                    try {
                      u.pushState(a, "", i)
                    } catch (e) {
                      if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
                      s.location.assign(i)
                    }
                    l && m && m({
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
                    u.replaceState(a, "", i), l && m && m({
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
                    return n[s] = r, e.children && (r.children = b(e.children, t, i, n)), r
                  }
                }))
              }

              function w(e, t, r) {
                void 0 === r && (r = "/");
                let n = O(("string" == typeof t ? m(t) : t).pathname || "/", r);
                if (null == n) return null;
                let o = S(e);
                ! function(e) {
                  e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                    return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
                  }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
                }(o);
                let a = null;
                for (let e = 0; null == a && e < o.length; ++e) a = j(o[e], U(n));
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

              function S(e, t, r, n) {
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
                  e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), S(e.children, t, l, s)), (null != e.path || e.index) && t.push({
                    path: s,
                    score: T(s, e.index),
                    routesMeta: l
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
                  s = [];
                return s.push(...i.map((e => "" === e ? a : [a, e].join("/")))), o && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
              }
              const x = /^:\w+$/,
                k = 3,
                C = 2,
                _ = 1,
                D = 10,
                L = -2,
                P = e => "*" === e;

              function T(e, t) {
                let r = e.split("/"),
                  n = r.length;
                return r.some(P) && (n += L), t && (n += C), r.filter((e => !P(e))).reduce(((e, t) => e + (x.test(t) ? k : "" === t ? _ : D)), n)
              }

              function j(e, t) {
                let {
                  routesMeta: r
                } = e, n = {}, o = "/", a = [];
                for (let e = 0; e < r.length; ++e) {
                  let i = r[e],
                    s = e === r.length - 1,
                    l = "/" === o ? t : t.slice(o.length) || "/",
                    u = M({
                      path: i.relativePath,
                      caseSensitive: i.caseSensitive,
                      end: s
                    }, l);
                  if (!u) return null;
                  Object.assign(n, u.params);
                  let c = i.route;
                  a.push({
                    params: n,
                    pathname: $([o, u.pathname]),
                    pathnameBase: z($([o, u.pathnameBase])),
                    route: c
                  }), "/" !== u.pathnameBase && (o = $([o, u.pathnameBase]))
                }
                return a
              }

              function A(e, t) {
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

              function U(e) {
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

              function N(e, t) {
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
                  search: W(n),
                  hash: H(o)
                }
              }

              function I(e, t, r, n) {
                return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
              }

              function B(e) {
                return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
              }

              function F(e, t, r, n) {
                let o;
                void 0 === n && (n = !1), "string" == typeof e ? o = m(e) : (o = a({}, e), c(!o.pathname || !o.pathname.includes("?"), I("?", "pathname", "search", o)), c(!o.pathname || !o.pathname.includes("#"), I("#", "pathname", "hash", o)), c(!o.search || !o.search.includes("#"), I("#", "search", "hash", o)));
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
                let u = N(o, i),
                  d = l && "/" !== l && l.endsWith("/"),
                  f = (s || "." === l) && r.endsWith("/");
                return u.pathname.endsWith("/") || !d && !f || (u.pathname += "/"), u
              }
              const $ = e => e.join("/").replace(/\/\/+/g, "/"),
                z = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                W = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
                H = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
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
              class K extends Error {}
              class V {
                constructor(e, t) {
                  let r;
                  this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], c(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise(((e, t) => r = t)), this.controller = new AbortController;
                  let n = () => r(new K("Deferred data aborted"));
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
                  if (this.controller.signal.aborted && r instanceof K) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
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
              const Y = function(e, t) {
                  return void 0 === t && (t = {}), new V(e, "number" == typeof t ? {
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
                se = {
                  state: "idle",
                  data: void 0,
                  formMethod: void 0,
                  formAction: void 0,
                  formEncType: void 0,
                  formData: void 0,
                  json: void 0,
                  text: void 0
                },
                le = {
                  state: "unblocked",
                  proceed: void 0,
                  reset: void 0,
                  location: void 0
                },
                ue = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                ce = e => ({
                  hasErrorBoundary: Boolean(e.hasErrorBoundary)
                }),
                de = "remix-router-transitions";

              function fe(e) {
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
                  u = b(e.routes, i, void 0, l),
                  f = e.basename || "/",
                  p = a({
                    v7_normalizeFormMethod: !1,
                    v7_prependBasename: !1
                  }, e.future),
                  m = null,
                  v = new Set,
                  g = null,
                  S = null,
                  R = null,
                  x = null != e.hydrationData,
                  k = w(u, e.history.location, f),
                  C = null;
                if (null == k) {
                  let t = _e(404, {
                      pathname: e.history.location.pathname
                    }),
                    {
                      matches: r,
                      route: n
                    } = Ce(u);
                  k = r, C = {
                    [n.id]: t
                  }
                }
                let _, D, L = !(k.some((e => e.route.lazy)) || k.some((e => e.route.loader)) && null == e.hydrationData),
                  P = {
                    historyAction: e.history.action,
                    location: e.history.location,
                    matches: k,
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
                  T = n.Pop,
                  j = !1,
                  A = !1,
                  M = new Map,
                  U = null,
                  N = !1,
                  I = !1,
                  B = [],
                  F = [],
                  $ = new Map,
                  z = 0,
                  W = -1,
                  H = new Map,
                  q = new Set,
                  K = new Map,
                  V = new Map,
                  J = new Map,
                  Y = !1;

                function X(e, t) {
                  P = a({}, P, e), v.forEach((e => e(P, {
                    unstable_viewTransitionOpts: t
                  })))
                }

                function G(t, r) {
                  var o, i;
                  let l, c = null != P.actionData && null != P.navigation.formMethod && Ae(P.navigation.formMethod) && "loading" === P.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
                  l = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : c ? P.actionData : null;
                  let d = r.loaderData ? xe(P.loaderData, r.loaderData, r.matches || [], r.errors) : P.loaderData,
                    f = P.blockers;
                  f.size > 0 && (f = new Map(f), f.forEach(((e, t) => f.set(t, le))));
                  let h, p = !0 === j || null != P.navigation.formMethod && Ae(P.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
                  if (s && (u = s, s = void 0), N || T === n.Pop || (T === n.Push ? e.history.push(t, t.state) : T === n.Replace && e.history.replace(t, t.state)), T === n.Pop) {
                    let e = M.get(P.location.pathname);
                    e && e.has(t.pathname) ? h = {
                      currentLocation: P.location,
                      nextLocation: t
                    } : M.has(t.pathname) && (h = {
                      currentLocation: t,
                      nextLocation: P.location
                    })
                  } else if (A) {
                    let e = M.get(P.location.pathname);
                    e ? e.add(t.pathname) : (e = new Set([t.pathname]), M.set(P.location.pathname, e)), h = {
                      currentLocation: P.location,
                      nextLocation: t
                    }
                  }
                  X(a({}, r, {
                    actionData: l,
                    loaderData: d,
                    historyAction: T,
                    location: t,
                    initialized: !0,
                    navigation: ie,
                    revalidation: "idle",
                    restoreScrollPosition: We(t, r.matches || P.matches),
                    preventScrollReset: p,
                    blockers: f
                  }), h), T = n.Pop, j = !1, A = !1, N = !1, I = !1, B = [], F = []
                }
                async function Q(t, r, o) {
                  D && D.abort(), D = null, T = t, N = !0 === (o && o.startUninterruptedRevalidation),
                    function(e, t) {
                      if (g && R) {
                        let r = ze(e, t);
                        g[r] = R()
                      }
                    }(P.location, P.matches), j = !0 === (o && o.preventScrollReset), A = !0 === (o && o.enableViewTransition);
                  let c = s || u,
                    d = o && o.overrideNavigation,
                    h = w(c, r, f);
                  if (!h) {
                    let e = _e(404, {
                        pathname: r.pathname
                      }),
                      {
                        matches: t,
                        route: n
                      } = Ce(c);
                    return Oe(), void G(r, {
                      matches: t,
                      loaderData: {},
                      errors: {
                        [n.id]: e
                      }
                    })
                  }
                  if (P.initialized && !I && (p = P.location, m = r, p.pathname === m.pathname && p.search === m.search && ("" === p.hash ? "" !== m.hash : p.hash === m.hash || "" !== m.hash)) && !(o && o.submission && Ae(o.submission.formMethod))) return void G(r, {
                    matches: h
                  });
                  var p, m;
                  D = new AbortController;
                  let v, b, E = we(e.history, r, D.signal, o && o.submission);
                  if (o && o.pendingError) b = {
                    [ke(h).route.id]: o.pendingError
                  };
                  else if (o && o.submission && Ae(o.submission.formMethod)) {
                    let e = await async function(e, t, r, o, a) {
                      void 0 === a && (a = {}), re();
                      let s, u = function(e, t) {
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
                        navigation: u
                      });
                      let c = Ne(o, t);
                      if (c.route.action || c.route.lazy) {
                        if (s = await be("action", e, c, o, l, i, f), e.signal.aborted) return {
                          shortCircuited: !0
                        }
                      } else s = {
                        type: y.error,
                        error: _e(405, {
                          method: e.method,
                          pathname: t.pathname,
                          routeId: c.route.id
                        })
                      };
                      if (je(s)) {
                        let e;
                        return e = a && null != a.replace ? a.replace : s.location === P.location.pathname + P.location.search, await ee(P, s, {
                          submission: r,
                          replace: e
                        }), {
                          shortCircuited: !0
                        }
                      }
                      if (Te(s)) {
                        let e = ke(o, c.route.id);
                        return !0 !== (a && a.replace) && (T = n.Push), {
                          pendingActionData: {},
                          pendingActionError: {
                            [e.route.id]: s.error
                          }
                        }
                      }
                      if (Pe(s)) throw _e(400, {
                        type: "defer-action"
                      });
                      return {
                        pendingActionData: {
                          [c.route.id]: s.data
                        }
                      }
                    }(E, r, o.submission, h, {
                      replace: o.replace
                    });
                    if (e.shortCircuited) return;
                    v = e.pendingActionData, b = e.pendingActionError, d = Be(r, o.submission), E = new Request(E.url, {
                      signal: E.signal
                    })
                  }
                  let {
                    shortCircuited: S,
                    loaderData: x,
                    errors: k
                  } = await async function(t, r, n, o, i, l, c, d, h) {
                    let p = o || Be(r, i),
                      m = i || l || Ie(p),
                      v = s || u,
                      [y, g] = me(e.history, P, n, m, r, I, B, F, K, q, v, f, d, h);
                    if (Oe((e => !(n && n.some((t => t.route.id === e))) || y && y.some((t => t.route.id === e)))), W = ++z, 0 === y.length && 0 === g.length) {
                      let e = ye();
                      return G(r, a({
                        matches: n,
                        loaderData: {},
                        errors: h || null
                      }, d ? {
                        actionData: d
                      } : {}, e ? {
                        fetchers: new Map(P.fetchers)
                      } : {})), {
                        shortCircuited: !0
                      }
                    }
                    if (!N) {
                      g.forEach((e => {
                        let t = P.fetchers.get(e.key),
                          r = Fe(void 0, t ? t.data : void 0);
                        P.fetchers.set(e.key, r)
                      }));
                      let e = d || P.actionData;
                      X(a({
                        navigation: p
                      }, e ? 0 === Object.keys(e).length ? {
                        actionData: null
                      } : {
                        actionData: e
                      } : {}, g.length > 0 ? {
                        fetchers: new Map(P.fetchers)
                      } : {}))
                    }
                    g.forEach((e => {
                      $.has(e.key) && fe(e.key), e.controller && $.set(e.key, e.controller)
                    }));
                    let b = () => g.forEach((e => fe(e.key)));
                    D && D.signal.addEventListener("abort", b);
                    let {
                      results: w,
                      loaderResults: E,
                      fetcherResults: S
                    } = await te(P.matches, n, y, g, t);
                    if (t.signal.aborted) return {
                      shortCircuited: !0
                    };
                    D && D.signal.removeEventListener("abort", b), g.forEach((e => $.delete(e.key)));
                    let R = De(w);
                    if (R) {
                      if (R.idx >= y.length) {
                        let e = g[R.idx - y.length].key;
                        q.add(e)
                      }
                      return await ee(P, R.result, {
                        replace: c
                      }), {
                        shortCircuited: !0
                      }
                    }
                    let {
                      loaderData: x,
                      errors: k
                    } = Re(P, n, y, E, h, g, S, V);
                    V.forEach(((e, t) => {
                      e.subscribe((r => {
                        (r || e.done) && V.delete(t)
                      }))
                    }));
                    let C = ye(),
                      _ = ge(W);
                    return a({
                      loaderData: x,
                      errors: k
                    }, C || _ || g.length > 0 ? {
                      fetchers: new Map(P.fetchers)
                    } : {})
                  }(E, r, h, d, o && o.submission, o && o.fetcherSubmission, o && o.replace, v, b);
                  S || (D = null, G(r, a({
                    matches: h
                  }, v ? {
                    actionData: v
                  } : {}, {
                    loaderData: x,
                    errors: k
                  })))
                }

                function Z(e) {
                  return P.fetchers.get(e) || se
                }
                async function ee(o, i, s) {
                  let {
                    submission: l,
                    fetcherSubmission: u,
                    replace: d
                  } = void 0 === s ? {} : s;
                  i.revalidate && (I = !0);
                  let p = h(o.location, i.location, {
                    _isRedirect: !0
                  });
                  if (c(p, "Expected a location on the redirect navigation"), r) {
                    let r = !1;
                    if (i.reloadDocument) r = !0;
                    else if (ue.test(i.location)) {
                      const n = e.history.createURL(i.location);
                      r = n.origin !== t.location.origin || null == O(n.pathname, f)
                    }
                    if (r) return void(d ? t.location.replace(i.location) : t.location.assign(i.location))
                  }
                  D = null;
                  let m = !0 === d ? n.Replace : n.Push,
                    {
                      formMethod: v,
                      formAction: y,
                      formEncType: g
                    } = o.navigation;
                  !l && !u && v && y && g && (l = Ie(o.navigation));
                  let b = l || u;
                  if (ae.has(i.status) && b && Ae(b.formMethod)) await Q(m, p, {
                    submission: a({}, b, {
                      formAction: i.location
                    }),
                    preventScrollReset: j
                  });
                  else {
                    let e = Be(p, l);
                    await Q(m, p, {
                      overrideNavigation: e,
                      fetcherSubmission: u,
                      preventScrollReset: j
                    })
                  }
                }
                async function te(t, r, n, o, a) {
                  let s = await Promise.all([...n.map((e => be("loader", a, e, r, l, i, f))), ...o.map((t => t.matches && t.match && t.controller ? be("loader", we(e.history, t.path, t.controller.signal), t.match, t.matches, l, i, f) : {
                      type: y.error,
                      error: _e(404, {
                        pathname: t.path
                      })
                    }))]),
                    u = s.slice(0, n.length),
                    c = s.slice(n.length);
                  return await Promise.all([Me(t, n, u, u.map((() => a.signal)), !1, P.loaderData), Me(t, o.map((e => e.match)), c, o.map((e => e.controller ? e.controller.signal : null)), !0)]), {
                    results: s,
                    loaderResults: u,
                    fetcherResults: c
                  }
                }

                function re() {
                  I = !0, B.push(...Oe()), K.forEach(((e, t) => {
                    $.has(t) && (F.push(t), fe(t))
                  }))
                }

                function ne(e, t, r) {
                  let n = ke(P.matches, t);
                  oe(e), X({
                    errors: {
                      [n.route.id]: r
                    },
                    fetchers: new Map(P.fetchers)
                  })
                }

                function oe(e) {
                  let t = P.fetchers.get(e);
                  !$.has(e) || t && "loading" === t.state && H.has(e) || fe(e), K.delete(e), H.delete(e), q.delete(e), P.fetchers.delete(e)
                }

                function fe(e) {
                  let t = $.get(e);
                  c(t, "Expected fetch controller: " + e), t.abort(), $.delete(e)
                }

                function ve(e) {
                  for (let t of e) {
                    let e = $e(Z(t).data);
                    P.fetchers.set(t, e)
                  }
                }

                function ye() {
                  let e = [],
                    t = !1;
                  for (let r of q) {
                    let n = P.fetchers.get(r);
                    c(n, "Expected fetcher: " + r), "loading" === n.state && (q.delete(r), e.push(r), t = !0)
                  }
                  return ve(e), t
                }

                function ge(e) {
                  let t = [];
                  for (let [r, n] of H)
                    if (n < e) {
                      let e = P.fetchers.get(r);
                      c(e, "Expected fetcher: " + r), "loading" === e.state && (fe(r), H.delete(r), t.push(r))
                    } return ve(t), t.length > 0
                }

                function Ee(e) {
                  P.blockers.delete(e), J.delete(e)
                }

                function Se(e, t) {
                  let r = P.blockers.get(e) || le;
                  c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
                  let n = new Map(P.blockers);
                  n.set(e, t), X({
                    blockers: n
                  })
                }

                function Le(e) {
                  let {
                    currentLocation: t,
                    nextLocation: r,
                    historyAction: n
                  } = e;
                  if (0 === J.size) return;
                  J.size > 1 && d(!1, "A router only supports one blocker at a time");
                  let o = Array.from(J.entries()),
                    [a, i] = o[o.length - 1],
                    s = P.blockers.get(a);
                  return s && "proceeding" === s.state ? void 0 : i({
                    currentLocation: t,
                    nextLocation: r,
                    historyAction: n
                  }) ? a : void 0
                }

                function Oe(e) {
                  let t = [];
                  return V.forEach(((r, n) => {
                    e && !e(n) || (r.cancel(), t.push(n), V.delete(n))
                  })), t
                }

                function ze(e, t) {
                  return S && S(e, t.map((e => E(e, P.loaderData)))) || e.key
                }

                function We(e, t) {
                  if (g) {
                    let r = ze(e, t),
                      n = g[r];
                    if ("number" == typeof n) return n
                  }
                  return null
                }
                return _ = {
                  get basename() {
                    return f
                  },
                  get state() {
                    return P
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
                        d(0 === J.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                        let a = Le({
                          currentLocation: P.location,
                          nextLocation: n,
                          historyAction: r
                        });
                        return a && null != o ? (Y = !0, e.history.go(-1 * o), void Se(a, {
                          state: "blocked",
                          location: n,
                          proceed() {
                            Se(a, {
                              state: "proceeding",
                              proceed: void 0,
                              reset: void 0,
                              location: n
                            }), e.history.go(o)
                          },
                          reset() {
                            let e = new Map(P.blockers);
                            e.set(a, le), X({
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
                      }(t, M);
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
                      }(t, M);
                      t.addEventListener("pagehide", e), U = () => t.removeEventListener("pagehide", e)
                    }
                    return P.initialized || Q(n.Pop, P.location), _
                  },
                  subscribe: function(e) {
                    return v.add(e), () => v.delete(e)
                  },
                  enableScrollRestoration: function(e, t, r) {
                    if (g = e, R = t, S = r || null, !x && P.navigation === ie) {
                      x = !0;
                      let e = We(P.location, P.matches);
                      null != e && X({
                        restoreScrollPosition: e
                      })
                    }
                    return () => {
                      g = null, R = null, S = null
                    }
                  },
                  navigate: async function t(r, o) {
                    if ("number" == typeof r) return void e.history.go(r);
                    let i = he(P.location, P.matches, f, p.v7_prependBasename, r, null == o ? void 0 : o.fromRouteId, null == o ? void 0 : o.relative),
                      {
                        path: s,
                        submission: l,
                        error: u
                      } = pe(p.v7_normalizeFormMethod, !1, i, o),
                      c = P.location,
                      d = h(P.location, s, o && o.state);
                    d = a({}, d, e.history.encodeLocation(d));
                    let m = o && null != o.replace ? o.replace : void 0,
                      v = n.Push;
                    !0 === m ? v = n.Replace : !1 === m || null != l && Ae(l.formMethod) && l.formAction === P.location.pathname + P.location.search && (v = n.Replace);
                    let y = o && "preventScrollReset" in o ? !0 === o.preventScrollReset : void 0,
                      g = Le({
                        currentLocation: c,
                        nextLocation: d,
                        historyAction: v
                      });
                    if (!g) return await Q(v, d, {
                      submission: l,
                      pendingError: u,
                      preventScrollReset: y,
                      replace: o && o.replace,
                      enableViewTransition: o && o.unstable_viewTransition
                    });
                    Se(g, {
                      state: "blocked",
                      location: d,
                      proceed() {
                        Se(g, {
                          state: "proceeding",
                          proceed: void 0,
                          reset: void 0,
                          location: d
                        }), t(r, o)
                      },
                      reset() {
                        let e = new Map(P.blockers);
                        e.set(g, le), X({
                          blockers: e
                        })
                      }
                    })
                  },
                  fetch: function(t, r, n, d) {
                    if (o) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
                    $.has(t) && fe(t);
                    let h = s || u,
                      m = he(P.location, P.matches, f, p.v7_prependBasename, n, r, null == d ? void 0 : d.relative),
                      v = w(h, m, f);
                    if (!v) return void ne(t, r, _e(404, {
                      pathname: m
                    }));
                    let {
                      path: y,
                      submission: g,
                      error: b
                    } = pe(p.v7_normalizeFormMethod, !0, m, d);
                    if (b) return void ne(t, r, b);
                    let E = Ne(v, y);
                    j = !0 === (d && d.preventScrollReset), g && Ae(g.formMethod) ? async function(t, r, n, o, d, h) {
                      if (re(), K.delete(t), !o.route.action && !o.route.lazy) {
                        let e = _e(405, {
                          method: h.formMethod,
                          pathname: n,
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
                      }(h, P.fetchers.get(t));
                      P.fetchers.set(t, p), X({
                        fetchers: new Map(P.fetchers)
                      });
                      let m = new AbortController,
                        v = we(e.history, n, m.signal, h);
                      $.set(t, m);
                      let y = z,
                        g = await be("action", v, o, d, l, i, f);
                      if (v.signal.aborted) return void($.get(t) === m && $.delete(t));
                      if (je(g)) {
                        if ($.delete(t), W > y) {
                          let e = $e(void 0);
                          return P.fetchers.set(t, e), void X({
                            fetchers: new Map(P.fetchers)
                          })
                        } {
                          q.add(t);
                          let e = Fe(h);
                          return P.fetchers.set(t, e), X({
                            fetchers: new Map(P.fetchers)
                          }), ee(P, g, {
                            fetcherSubmission: h
                          })
                        }
                      }
                      if (Te(g)) return void ne(t, r, g.error);
                      if (Pe(g)) throw _e(400, {
                        type: "defer-action"
                      });
                      let b = P.navigation.location || P.location,
                        E = we(e.history, b, m.signal),
                        S = s || u,
                        R = "idle" !== P.navigation.state ? w(S, P.navigation.location, f) : P.matches;
                      c(R, "Didn't find any matches after fetcher action");
                      let x = ++z;
                      H.set(t, x);
                      let k = Fe(h, g.data);
                      P.fetchers.set(t, k);
                      let [C, _] = me(e.history, P, R, h, b, I, B, F, K, q, S, f, {
                        [o.route.id]: g.data
                      }, void 0);
                      _.filter((e => e.key !== t)).forEach((e => {
                        let t = e.key,
                          r = P.fetchers.get(t),
                          n = Fe(void 0, r ? r.data : void 0);
                        P.fetchers.set(t, n), $.has(t) && fe(t), e.controller && $.set(t, e.controller)
                      })), X({
                        fetchers: new Map(P.fetchers)
                      });
                      let L = () => _.forEach((e => fe(e.key)));
                      m.signal.addEventListener("abort", L);
                      let {
                        results: j,
                        loaderResults: A,
                        fetcherResults: M
                      } = await te(P.matches, R, C, _, E);
                      if (m.signal.aborted) return;
                      m.signal.removeEventListener("abort", L), H.delete(t), $.delete(t), _.forEach((e => $.delete(e.key)));
                      let U = De(j);
                      if (U) {
                        if (U.idx >= C.length) {
                          let e = _[U.idx - C.length].key;
                          q.add(e)
                        }
                        return ee(P, U.result)
                      }
                      let {
                        loaderData: O,
                        errors: N
                      } = Re(P, P.matches, C, A, void 0, _, M, V);
                      if (P.fetchers.has(t)) {
                        let e = $e(g.data);
                        P.fetchers.set(t, e)
                      }
                      let J = ge(x);
                      "loading" === P.navigation.state && x > W ? (c(T, "Expected pending action"), D && D.abort(), G(P.navigation.location, {
                        matches: R,
                        loaderData: O,
                        errors: N,
                        fetchers: new Map(P.fetchers)
                      })) : (X(a({
                        errors: N,
                        loaderData: xe(P.loaderData, O, R, N)
                      }, J || _.length > 0 ? {
                        fetchers: new Map(P.fetchers)
                      } : {})), I = !1)
                    }(t, r, y, E, v, g): (K.set(t, {
                      routeId: r,
                      path: y
                    }), async function(t, r, n, o, a, s) {
                      let u = P.fetchers.get(t),
                        d = Fe(s, u ? u.data : void 0);
                      P.fetchers.set(t, d), X({
                        fetchers: new Map(P.fetchers)
                      });
                      let h = new AbortController,
                        p = we(e.history, n, h.signal);
                      $.set(t, h);
                      let m = z,
                        v = await be("loader", p, o, a, l, i, f);
                      if (Pe(v) && (v = await Ue(v, p.signal, !0) || v), $.get(t) === h && $.delete(t), p.signal.aborted) return;
                      if (je(v)) {
                        if (W > m) {
                          let e = $e(void 0);
                          return P.fetchers.set(t, e), void X({
                            fetchers: new Map(P.fetchers)
                          })
                        }
                        return q.add(t), void await ee(P, v)
                      }
                      if (Te(v)) {
                        let e = ke(P.matches, r);
                        return P.fetchers.delete(t), void X({
                          fetchers: new Map(P.fetchers),
                          errors: {
                            [e.route.id]: v.error
                          }
                        })
                      }
                      c(!Pe(v), "Unhandled fetcher deferred data");
                      let y = $e(v.data);
                      P.fetchers.set(t, y), X({
                        fetchers: new Map(P.fetchers)
                      })
                    }(t, r, y, E, v, g))
                  },
                  revalidate: function() {
                    re(), X({
                      revalidation: "loading"
                    }), "submitting" !== P.navigation.state && ("idle" !== P.navigation.state ? Q(T || P.historyAction, P.navigation.location, {
                      overrideNavigation: P.navigation
                    }) : Q(P.historyAction, P.location, {
                      startUninterruptedRevalidation: !0
                    }))
                  },
                  createHref: t => e.history.createHref(t),
                  encodeLocation: t => e.history.encodeLocation(t),
                  getFetcher: Z,
                  deleteFetcher: oe,
                  dispose: function() {
                    m && m(), U && U(), v.clear(), D && D.abort(), P.fetchers.forEach(((e, t) => oe(t))), P.blockers.forEach(((e, t) => Ee(t)))
                  },
                  getBlocker: function(e, t) {
                    let r = P.blockers.get(e) || le;
                    return J.get(e) !== t && J.set(e, t), r
                  },
                  deleteBlocker: Ee,
                  _internalFetchControllers: $,
                  _internalActiveDeferreds: V,
                  _internalSetRoutes: function(e) {
                    l = {}, s = b(e, i, void 0, l)
                  }
                }, _
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
                let u = F(o || ".", B(s).map((e => e.pathnameBase)), O(e.pathname, r) || e.pathname, "path" === i);
                return null == o && (u.search = e.search, u.hash = e.hash), null != o && "" !== o && "." !== o || !l || !l.route.index || Oe(u.search) || (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), n && "/" !== r && (u.pathname = "/" === u.pathname ? r : $([r, u.pathname])), p(u)
              }

              function pe(e, t, r, n) {
                if (!n || ! function(e) {
                    return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
                  }(n)) return {
                  path: r
                };
                if (n.formMethod && (o = n.formMethod, !ne.has(o.toLowerCase()))) return {
                  path: r,
                  error: _e(405, {
                    method: n.formMethod
                  })
                };
                var o;
                let a, i, s = () => ({
                    path: r,
                    error: _e(400, {
                      type: "invalid-body"
                    })
                  }),
                  l = n.formMethod || "get",
                  u = e ? l.toUpperCase() : l.toLowerCase(),
                  d = Le(r);
                if (void 0 !== n.body) {
                  if ("text/plain" === n.formEncType) {
                    if (!Ae(u)) return s();
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
                    if (!Ae(u)) return s();
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
                      return s()
                    }
                  }
                }
                if (c("function" == typeof FormData, "FormData is not available in this environment"), n.formData) a = Ee(n.formData), i = n.formData;
                else if (n.body instanceof FormData) a = Ee(n.body), i = n.body;
                else if (n.body instanceof URLSearchParams) a = n.body, i = Se(a);
                else if (null == n.body) a = new URLSearchParams, i = new FormData;
                else try {
                  a = new URLSearchParams(n.body), i = Se(a)
                } catch (e) {
                  return s()
                }
                let f = {
                  formMethod: u,
                  formAction: d,
                  formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
                  formData: i,
                  json: void 0,
                  text: void 0
                };
                if (Ae(f.formMethod)) return {
                  path: r,
                  submission: f
                };
                let h = m(r);
                return t && h.search && Oe(h.search) && a.append("index", ""), h.search = "?" + a, {
                  path: p(h),
                  submission: f
                }
              }

              function me(e, t, r, n, o, i, s, l, u, c, d, f, h, p) {
                let m = p ? Object.values(p)[0] : h ? Object.values(h)[0] : void 0,
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
                      }(t.loaderData, t.matches[r], e) || s.some((t => t === e.route.id))) return !0;
                    let o = t.matches[r],
                      l = e;
                    return ye(e, a({
                      currentUrl: v,
                      currentParams: o.params,
                      nextUrl: y,
                      nextParams: l.params
                    }, n, {
                      actionResult: m,
                      defaultShouldRevalidate: i || v.pathname + v.search === y.pathname + y.search || v.search !== y.search || ve(o, l)
                    }))
                  })),
                  E = [];
                return u.forEach(((e, o) => {
                  if (!r.some((t => t.route.id === e.routeId))) return;
                  let s = w(d, e.path, f);
                  if (!s) return void E.push({
                    key: o,
                    routeId: e.routeId,
                    path: e.path,
                    matches: null,
                    match: null,
                    controller: null
                  });
                  let u = t.fetchers.get(o),
                    h = Ne(s, e.path),
                    p = !1;
                  p = !c.has(o) && (!!l.includes(o) || (u && "idle" !== u.state && void 0 === u.data ? i : ye(h, a({
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
                    matches: s,
                    match: h,
                    controller: new AbortController
                  })
                })), [b, E]
              }

              function ve(e, t) {
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
              async function be(e, t, r, n, o, a, i, s) {
                let l, u, d;
                void 0 === s && (s = {});
                let f = e => {
                  let n, o = new Promise(((e, t) => n = t));
                  return d = () => n(), t.signal.addEventListener("abort", d), Promise.race([e({
                    request: t,
                    params: r.params,
                    context: s.requestContext
                  }), o])
                };
                try {
                  let n = r.route[e];
                  if (r.route.lazy)
                    if (n) {
                      let e, t = await Promise.all([f(n).catch((t => {
                        e = t
                      })), ge(r.route, a, o)]);
                      if (e) throw e;
                      u = t[0]
                    } else {
                      if (await ge(r.route, a, o), n = r.route[e], !n) {
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
                      u = await f(n)
                    }
                  else {
                    if (!n) {
                      let e = new URL(t.url);
                      throw _e(404, {
                        pathname: e.pathname + e.search
                      })
                    }
                    u = await f(n)
                  }
                  c(void 0 !== u, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
                } catch (e) {
                  l = y.error, u = e
                } finally {
                  d && t.signal.removeEventListener("abort", d)
                }
                if (null != (h = u) && "number" == typeof h.status && "string" == typeof h.statusText && "object" == typeof h.headers && void 0 !== h.body) {
                  let e, o = u.status;
                  if (oe.has(o)) {
                    let e = u.headers.get("Location");
                    if (c(e, "Redirects returned/thrown from loaders/actions must have a Location header"), ue.test(e)) {
                      if (!s.isStaticRequest) {
                        let r = new URL(t.url),
                          n = e.startsWith("//") ? new URL(r.protocol + e) : new URL(e),
                          o = null != O(n.pathname, i);
                        n.origin === r.origin && o && (e = n.pathname + n.search + n.hash)
                      }
                    } else e = he(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, e);
                    if (s.isStaticRequest) throw u.headers.set("Location", e), u;
                    return {
                      type: y.redirect,
                      status: o,
                      location: e,
                      revalidate: null !== u.headers.get("X-Remix-Revalidate"),
                      reloadDocument: null !== u.headers.get("X-Remix-Reload-Document")
                    }
                  }
                  if (s.isRouteRequest) throw {
                    type: l === y.error ? y.error : y.data,
                    response: u
                  };
                  let a = u.headers.get("Content-Type");
                  return e = a && /\bapplication\/json\b/.test(a) ? await u.json() : await u.text(), l === y.error ? {
                    type: l,
                    error: new Q(o, u.statusText, e),
                    headers: u.headers
                  } : {
                    type: y.data,
                    data: e,
                    statusCode: u.status,
                    headers: u.headers
                  }
                }
                var h, p, m;
                return l === y.error ? {
                  type: l,
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

              function we(e, t, r, n) {
                let o = e.createURL(Le(t)).toString(),
                  a = {
                    signal: r
                  };
                if (n && Ae(n.formMethod)) {
                  let {
                    formMethod: e,
                    formEncType: t
                  } = n;
                  a.method = e.toUpperCase(), "application/json" === t ? (a.headers = new Headers({
                    "Content-Type": t
                  }), a.body = JSON.stringify(n.json)) : "text/plain" === t ? a.body = n.text : "application/x-www-form-urlencoded" === t && n.formData ? a.body = Ee(n.formData) : a.body = n.formData
                }
                return new Request(o, a)
              }

              function Ee(e) {
                let t = new URLSearchParams;
                for (let [r, n] of e.entries()) t.append(r, "string" == typeof n ? n : n.name);
                return t
              }

              function Se(e) {
                let t = new FormData;
                for (let [r, n] of e.entries()) t.append(r, n);
                return t
              }

              function Re(e, t, r, n, o, i, s, l) {
                let {
                  loaderData: u,
                  errors: d
                } = function(e, t, r, n, o) {
                  let a, i = {},
                    s = null,
                    l = !1,
                    u = {};
                  return r.forEach(((r, d) => {
                    let f = t[d].route.id;
                    if (c(!je(r), "Cannot handle redirect results in processLoaderData"), Te(r)) {
                      let t = ke(e, f),
                        o = r.error;
                      n && (o = Object.values(n)[0], n = void 0), s = s || {}, null == s[t.route.id] && (s[t.route.id] = o), i[f] = void 0, l || (l = !0, a = Z(r.error) ? r.error.status : 500), r.headers && (u[f] = r.headers)
                    } else Pe(r) ? (o.set(f, r.deferredData), i[f] = r.deferredData.data) : i[f] = r.data, null == r.statusCode || 200 === r.statusCode || l || (a = r.statusCode), r.headers && (u[f] = r.headers)
                  })), n && (s = n, i[Object.keys(n)[0]] = void 0), {
                    loaderData: i,
                    errors: s,
                    statusCode: a || 200,
                    loaderHeaders: u
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
                    if (Te(l)) {
                      let t = ke(e.matches, null == n ? void 0 : n.route.id);
                      d && d[t.route.id] || (d = a({}, d, {
                        [t.route.id]: l.error
                      })), e.fetchers.delete(r)
                    } else if (je(l)) c(!1, "Unhandled fetcher revalidation redirect");
                  else if (Pe(l)) c(!1, "Unhandled fetcher deferred data");
                  else {
                    let t = $e(l.data);
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

              function ke(e, t) {
                return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
              }

              function Ce(e) {
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

              function _e(e, t) {
                let {
                  pathname: r,
                  routeId: n,
                  method: o,
                  type: a
                } = void 0 === t ? {} : t, i = "Unknown Server Error", s = "Unknown @remix-run/router error";
                return 400 === e ? (i = "Bad Request", o && r && n ? s = "You made a " + o + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === a ? s = "defer() is not supported in actions" : "invalid-body" === a && (s = "Unable to encode submission body")) : 403 === e ? (i = "Forbidden", s = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (i = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (i = "Method Not Allowed", o && r && n ? s = "You made a " + o.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')), new Q(e || 500, i, new Error(s), !0)
              }

              function De(e) {
                for (let t = e.length - 1; t >= 0; t--) {
                  let r = e[t];
                  if (je(r)) return {
                    result: r,
                    idx: t
                  }
                }
              }

              function Le(e) {
                return p(a({}, "string" == typeof e ? m(e) : e, {
                  hash: ""
                }))
              }

              function Pe(e) {
                return e.type === y.deferred
              }

              function Te(e) {
                return e.type === y.error
              }

              function je(e) {
                return (e && e.type) === y.redirect
              }

              function Ae(e) {
                return te.has(e.toLowerCase())
              }
              async function Me(e, t, r, n, o, a) {
                for (let i = 0; i < r.length; i++) {
                  let s = r[i],
                    l = t[i];
                  if (!l) continue;
                  let u = e.find((e => e.route.id === l.route.id)),
                    d = null != u && !ve(u, l) && void 0 !== (a && a[l.route.id]);
                  if (Pe(s) && (o || d)) {
                    let e = n[i];
                    c(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await Ue(s, e, o).then((e => {
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

              function Oe(e) {
                return new URLSearchParams(e).getAll("index").some((e => "" === e))
              }

              function Ne(e, t) {
                let r = "string" == typeof t ? m(t).search : t.search;
                if (e[e.length - 1].route.index && Oe(r || "")) return e[e.length - 1];
                let n = B(e);
                return n[n.length - 1]
              }

              function Ie(e) {
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

              function Be(e, t) {
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
                qe = o.createContext(null),
                Ke = o.createContext(null),
                Ve = o.createContext(null),
                Je = o.createContext({
                  outlet: null,
                  matches: [],
                  isDataRoute: !1
                }),
                Ye = o.createContext(null);

              function Xe(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t;
                Ge() || c(!1);
                let {
                  basename: n,
                  navigator: a
                } = o.useContext(Ke), {
                  hash: i,
                  pathname: s,
                  search: l
                } = st(e, {
                  relative: r
                }), u = s;
                return "/" !== n && (u = "/" === s ? n : $([n, s])), a.createHref({
                  pathname: u,
                  search: l,
                  hash: i
                })
              }

              function Ge() {
                return null != o.useContext(Ve)
              }

              function Qe() {
                return Ge() || c(!1), o.useContext(Ve).location
              }

              function Ze() {
                return o.useContext(Ve).navigationType
              }

              function et(e) {
                Ge() || c(!1);
                let {
                  pathname: t
                } = Qe();
                return o.useMemo((() => M(e, t)), [t, e])
              }

              function tt(e) {
                o.useContext(Ke).static || o.useLayoutEffect(e)
              }

              function rt() {
                let {
                  isDataRoute: e
                } = o.useContext(Je);
                return e ? function() {
                  let {
                    router: e
                  } = yt(mt.UseNavigateStable), t = bt(vt.UseNavigateStable), r = o.useRef(!1);
                  return tt((() => {
                    r.current = !0
                  })), o.useCallback((function(n, o) {
                    void 0 === o && (o = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, ze({
                      fromRouteId: t
                    }, o)))
                  }), [e, t])
                }() : function() {
                  Ge() || c(!1);
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
                    } = Qe(),
                    i = JSON.stringify(B(n).map((e => e.pathnameBase))),
                    s = o.useRef(!1);
                  return tt((() => {
                    s.current = !0
                  })), o.useCallback((function(n, o) {
                    if (void 0 === o && (o = {}), !s.current) return;
                    if ("number" == typeof n) return void r.go(n);
                    let l = F(n, JSON.parse(i), a, "path" === o.relative);
                    null == e && "/" !== t && (l.pathname = "/" === l.pathname ? t : $([t, l.pathname])), (o.replace ? r.replace : r.push)(l, o.state, o)
                  }), [t, r, i, a, e])
                }()
              }
              const nt = o.createContext(null);

              function ot() {
                return o.useContext(nt)
              }

              function at(e) {
                let t = o.useContext(Je).outlet;
                return t ? o.createElement(nt.Provider, {
                  value: e
                }, t) : t
              }

              function it() {
                let {
                  matches: e
                } = o.useContext(Je), t = e[e.length - 1];
                return t ? t.params : {}
              }

              function st(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t, {
                  matches: n
                } = o.useContext(Je), {
                  pathname: a
                } = Qe(), i = JSON.stringify(B(n).map((e => e.pathnameBase)));
                return o.useMemo((() => F(e, JSON.parse(i), a, "path" === r)), [e, i, a, r])
              }

              function lt(e, t) {
                return ut(e, t)
              }

              function ut(e, t, r) {
                Ge() || c(!1);
                let {
                  navigator: a
                } = o.useContext(Ke), {
                  matches: i
                } = o.useContext(Je), s = i[i.length - 1], l = s ? s.params : {}, u = (s && s.pathname, s ? s.pathnameBase : "/");
                s && s.route;
                let d, f = Qe();
                if (t) {
                  var h;
                  let e = "string" == typeof t ? m(t) : t;
                  "/" === u || (null == (h = e.pathname) ? void 0 : h.startsWith(u)) || c(!1), d = e
                } else d = f;
                let p = d.pathname || "/",
                  v = w(e, {
                    pathname: "/" === u ? p : p.slice(u.length) || "/"
                  }),
                  y = pt(v && v.map((e => Object.assign({}, e, {
                    params: Object.assign({}, l, e.params),
                    pathname: $([u, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
                    pathnameBase: "/" === e.pathnameBase ? u : $([u, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                  }))), i, r);
                return t && y ? o.createElement(Ve.Provider, {
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

              function ct() {
                let e = _t(),
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
              const dt = o.createElement(ct, null);
              class ft extends o.Component {
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

              function pt(e, t, r) {
                var n;
                if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
                  var a;
                  if (null == (a = r) || !a.errors) return null;
                  e = r.matches
                }
                let i = e,
                  s = null == (n = r) ? void 0 : n.errors;
                if (null != s) {
                  let e = i.findIndex((e => e.route.id && (null == s ? void 0 : s[e.route.id])));
                  e >= 0 || c(!1), i = i.slice(0, Math.min(i.length, e + 1))
                }
                return i.reduceRight(((e, n, a) => {
                  let l = n.route.id ? null == s ? void 0 : s[n.route.id] : null,
                    u = null;
                  r && (u = n.route.errorElement || dt);
                  let c = t.concat(i.slice(0, a + 1)),
                    d = () => {
                      let t;
                      return t = l ? u : n.route.Component ? o.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, o.createElement(ht, {
                        match: n,
                        routeContext: {
                          outlet: e,
                          matches: c,
                          isDataRoute: null != r
                        },
                        children: t
                      })
                    };
                  return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === a) ? o.createElement(ft, {
                    location: r.location,
                    revalidation: r.revalidation,
                    component: u,
                    error: l,
                    children: d(),
                    routeContext: {
                      outlet: null,
                      matches: c,
                      isDataRoute: !0
                    }
                  }) : d()
                }), null)
              }
              var mt = function(e) {
                  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
                }(mt || {}),
                vt = function(e) {
                  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
                }(vt || {});

              function yt(e) {
                let t = o.useContext(We);
                return t || c(!1), t
              }

              function gt(e) {
                let t = o.useContext(He);
                return t || c(!1), t
              }

              function bt(e) {
                let t = function(e) {
                    let t = o.useContext(Je);
                    return t || c(!1), t
                  }(),
                  r = t.matches[t.matches.length - 1];
                return r.route.id || c(!1), r.route.id
              }

              function wt() {
                return bt(vt.UseRouteId)
              }

              function Et() {
                return gt(vt.UseNavigation).navigation
              }

              function St() {
                let e = yt(mt.UseRevalidator),
                  t = gt(vt.UseRevalidator);
                return o.useMemo((() => ({
                  revalidate: e.router.revalidate,
                  state: t.revalidation
                })), [e.router.revalidate, t.revalidation])
              }

              function Rt() {
                let {
                  matches: e,
                  loaderData: t
                } = gt(vt.UseMatches);
                return o.useMemo((() => e.map((e => E(e, t)))), [e, t])
              }

              function xt() {
                let e = gt(vt.UseLoaderData),
                  t = bt(vt.UseLoaderData);
                if (!e.errors || null == e.errors[t]) return e.loaderData[t];
                console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")")
              }

              function kt(e) {
                return gt(vt.UseRouteLoaderData).loaderData[e]
              }

              function Ct() {
                let e = gt(vt.UseActionData);
                return o.useContext(Je) || c(!1), Object.values((null == e ? void 0 : e.actionData) || {})[0]
              }

              function _t() {
                var e;
                let t = o.useContext(Ye),
                  r = gt(vt.UseRouteError),
                  n = bt(vt.UseRouteError);
                return t || (null == (e = r.errors) ? void 0 : e[n])
              }

              function Dt() {
                let e = o.useContext(qe);
                return null == e ? void 0 : e._data
              }

              function Lt() {
                let e = o.useContext(qe);
                return null == e ? void 0 : e._error
              }
              let Pt = 0;

              function Tt(e) {
                let {
                  router: t,
                  basename: r
                } = yt(mt.UseBlocker), n = gt(vt.UseBlocker), [a, i] = o.useState(""), s = o.useCallback((t => {
                  if ("function" != typeof e) return !!e;
                  if ("/" === r) return e(t);
                  let {
                    currentLocation: n,
                    nextLocation: o,
                    historyAction: a
                  } = t;
                  return e({
                    currentLocation: ze({}, n, {
                      pathname: O(n.pathname, r) || n.pathname
                    }),
                    nextLocation: ze({}, o, {
                      pathname: O(o.pathname, r) || o.pathname
                    }),
                    historyAction: a
                  })
                }), [r, e]);
                return o.useEffect((() => {
                  let e = String(++Pt);
                  return i(e), () => t.deleteBlocker(e)
                }), [t]), o.useEffect((() => {
                  "" !== a && t.getBlocker(a, s)
                }), [t, a, s]), a && n.blockers.has(a) ? n.blockers.get(a) : le
              }
              const jt = o.startTransition;

              function At(e) {
                let {
                  basename: t,
                  children: r,
                  initialEntries: n,
                  initialIndex: a,
                  future: i
                } = e, l = o.useRef();
                null == l.current && (l.current = s({
                  initialEntries: n,
                  initialIndex: a,
                  v5Compat: !0
                }));
                let u = l.current,
                  [c, d] = o.useState({
                    action: u.action,
                    location: u.location
                  }),
                  {
                    v7_startTransition: f
                  } = i || {},
                  h = o.useCallback((e => {
                    f && jt ? jt((() => d(e))) : d(e)
                  }), [d, f]);
                return o.useLayoutEffect((() => u.listen(h)), [u, h]), o.createElement(Nt, {
                  basename: t,
                  children: r,
                  location: c.location,
                  navigationType: c.action,
                  navigator: u
                })
              }

              function Mt(e) {
                let {
                  to: t,
                  replace: r,
                  state: n,
                  relative: a
                } = e;
                Ge() || c(!1);
                let {
                  matches: i
                } = o.useContext(Je), {
                  pathname: s
                } = Qe(), l = rt(), u = F(t, B(i).map((e => e.pathnameBase)), s, "path" === a), d = JSON.stringify(u);
                return o.useEffect((() => l(JSON.parse(d), {
                  replace: r,
                  state: n,
                  relative: a
                })), [l, d, a, r, n]), null
              }

              function Ut(e) {
                return at(e.context)
              }

              function Ot(e) {
                c(!1)
              }

              function Nt(e) {
                let {
                  basename: t = "/",
                  children: r = null,
                  location: a,
                  navigationType: i = n.Pop,
                  navigator: s,
                  static: l = !1
                } = e;
                Ge() && c(!1);
                let u = t.replace(/^\/*/, "/"),
                  d = o.useMemo((() => ({
                    basename: u,
                    navigator: s,
                    static: l
                  })), [u, s, l]);
                "string" == typeof a && (a = m(a));
                let {
                  pathname: f = "/",
                  search: h = "",
                  hash: p = "",
                  state: v = null,
                  key: y = "default"
                } = a, g = o.useMemo((() => {
                  let e = O(f, u);
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
                return null == g ? null : o.createElement(Ke.Provider, {
                  value: d
                }, o.createElement(Ve.Provider, {
                  children: r,
                  value: g
                }))
              }

              function It(e) {
                let {
                  children: t,
                  location: r
                } = e;
                return lt(Ht(t), r)
              }

              function Bt(e) {
                let {
                  children: t,
                  errorElement: r,
                  resolve: n
                } = e;
                return o.createElement(zt, {
                  resolve: n,
                  errorElement: r
                }, o.createElement(Wt, null, t))
              }
              var Ft = function(e) {
                return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
              }(Ft || {});
              const $t = new Promise((() => {}));
              class zt extends o.Component {
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
                  } = this.props, n = null, a = Ft.pending;
                  if (r instanceof Promise)
                    if (this.state.error) {
                      a = Ft.error;
                      let e = this.state.error;
                      n = Promise.reject().catch((() => {})), Object.defineProperty(n, "_tracked", {
                        get: () => !0
                      }), Object.defineProperty(n, "_error", {
                        get: () => e
                      })
                    } else r._tracked ? (n = r, a = void 0 !== n._error ? Ft.error : void 0 !== n._data ? Ft.success : Ft.pending) : (a = Ft.pending, Object.defineProperty(r, "_tracked", {
                      get: () => !0
                    }), n = r.then((e => Object.defineProperty(r, "_data", {
                      get: () => e
                    })), (e => Object.defineProperty(r, "_error", {
                      get: () => e
                    }))));
                  else a = Ft.success, n = Promise.resolve(), Object.defineProperty(n, "_tracked", {
                    get: () => !0
                  }), Object.defineProperty(n, "_data", {
                    get: () => r
                  });
                  if (a === Ft.error && n._error instanceof K) throw $t;
                  if (a === Ft.error && !t) throw n._error;
                  if (a === Ft.error) return o.createElement(qe.Provider, {
                    value: n,
                    children: t
                  });
                  if (a === Ft.success) return o.createElement(qe.Provider, {
                    value: n,
                    children: e
                  });
                  throw n
                }
              }

              function Wt(e) {
                let {
                  children: t
                } = e, r = Dt(), n = "function" == typeof t ? t(r) : t;
                return o.createElement(o.Fragment, null, n)
              }

              function Ht(e, t) {
                void 0 === t && (t = []);
                let r = [];
                return o.Children.forEach(e, ((e, n) => {
                  if (!o.isValidElement(e)) return;
                  let a = [...t, n];
                  if (e.type === o.Fragment) return void r.push.apply(r, Ht(e.props.children, a));
                  e.type !== Ot && c(!1), e.props.index && e.props.children && c(!1);
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
                  e.props.children && (i.children = Ht(e.props.children, a)), r.push(i)
                })), r
              }

              function qt(e) {
                return pt(e)
              }

              function Kt(e) {
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

              function Vt(e, t) {
                return fe({
                  basename: null == t ? void 0 : t.basename,
                  future: ze({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: s({
                    initialEntries: null == t ? void 0 : t.initialEntries,
                    initialIndex: null == t ? void 0 : t.initialIndex
                  }),
                  hydrationData: null == t ? void 0 : t.hydrationData,
                  routes: e,
                  mapRouteProperties: Kt
                }).initialize()
              }

              function Jt() {
                return Jt = Object.assign ? Object.assign.bind() : function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                  }
                  return e
                }, Jt.apply(this, arguments)
              }

              function Yt(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
              }
              const Xt = "get",
                Gt = "application/x-www-form-urlencoded";

              function Qt(e) {
                return null != e && "string" == typeof e.tagName
              }

              function Zt(e) {
                return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, r) => {
                  let n = e[r];
                  return t.concat(Array.isArray(n) ? n.map((e => [r, e])) : [
                    [r, n]
                  ])
                }), []))
              }
              let er = null;
              const tr = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

              function rr(e) {
                return null == e || tr.has(e) ? e : null
              }

              function nr(e, t) {
                let r, n, o, a, i;
                if (Qt(s = e) && "form" === s.tagName.toLowerCase()) {
                  let i = e.getAttribute("action");
                  n = i ? O(i, t) : null, r = e.getAttribute("method") || Xt, o = rr(e.getAttribute("enctype")) || Gt, a = new FormData(e)
                } else if (function(e) {
                    return Qt(e) && "button" === e.tagName.toLowerCase()
                  }(e) || function(e) {
                    return Qt(e) && "input" === e.tagName.toLowerCase()
                  }(e) && ("submit" === e.type || "image" === e.type)) {
                  let i = e.form;
                  if (null == i) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                  let s = e.getAttribute("formaction") || i.getAttribute("action");
                  if (n = s ? O(s, t) : null, r = e.getAttribute("formmethod") || i.getAttribute("method") || Xt, o = rr(e.getAttribute("formenctype")) || rr(i.getAttribute("enctype")) || Gt, a = new FormData(i, e), ! function() {
                      if (null === er) try {
                        new FormData(document.createElement("form"), 0), er = !1
                      } catch (e) {
                        er = !0
                      }
                      return er
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
                  if (Qt(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                  r = Xt, n = null, o = Gt, i = e
                }
                var s;
                return a && "text/plain" === o && (i = a, a = void 0), {
                  action: n,
                  method: r.toLowerCase(),
                  encType: o,
                  formData: a,
                  body: i
                }
              }
              const or = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
                ar = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
                ir = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];

              function sr(e, t) {
                return fe({
                  basename: null == t ? void 0 : t.basename,
                  future: Jt({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: l({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || ur(),
                  routes: e,
                  mapRouteProperties: Kt,
                  window: null == t ? void 0 : t.window
                }).initialize()
              }

              function lr(e, t) {
                return fe({
                  basename: null == t ? void 0 : t.basename,
                  future: Jt({}, null == t ? void 0 : t.future, {
                    v7_prependBasename: !0
                  }),
                  history: u({
                    window: null == t ? void 0 : t.window
                  }),
                  hydrationData: (null == t ? void 0 : t.hydrationData) || ur(),
                  routes: e,
                  mapRouteProperties: Kt,
                  window: null == t ? void 0 : t.window
                }).initialize()
              }

              function ur() {
                var e;
                let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
                return t && t.errors && (t = Jt({}, t, {
                  errors: cr(t.errors)
                })), t
              }

              function cr(e) {
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
              const dr = o.createContext({
                  isTransitioning: !1
                }),
                fr = o.startTransition;
              class hr {
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

              function pr(e) {
                let {
                  fallbackElement: t,
                  router: r,
                  future: n
                } = e, [a, i] = o.useState(r.state), [s, l] = o.useState(), [u, c] = o.useState({
                  isTransitioning: !1
                }), [d, f] = o.useState(), [h, p] = o.useState(), [m, v] = o.useState(), {
                  v7_startTransition: y
                } = n || {}, g = o.useCallback((e => {
                  y ? function(e) {
                    fr ? fr(e) : e()
                  }(e) : e()
                }), [y]), b = o.useCallback(((e, t) => {
                  let {
                    unstable_viewTransitionOpts: n
                  } = t;
                  n && null != r.window && "function" == typeof r.window.document.startViewTransition ? h && d ? (d.resolve(), h.skipTransition(), v({
                    state: e,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : (l(e), c({
                    isTransitioning: !0,
                    currentLocation: n.currentLocation,
                    nextLocation: n.nextLocation
                  })) : g((() => i(e)))
                }), [g, h, d, r.window]);
                o.useLayoutEffect((() => r.subscribe(b)), [r, b]), o.useEffect((() => {
                  u.isTransitioning && f(new hr)
                }), [u.isTransitioning]), o.useEffect((() => {
                  if (d && s && r.window) {
                    let e = s,
                      t = d.promise,
                      n = r.window.document.startViewTransition((async () => {
                        g((() => i(e))), await t
                      }));
                    n.finished.finally((() => {
                      f(void 0), p(void 0), l(void 0), c({
                        isTransitioning: !1
                      })
                    })), p(n)
                  }
                }), [g, s, d, r.window]), o.useEffect((() => {
                  d && s && a.location.key === s.location.key && d.resolve()
                }), [d, h, a.location, s]), o.useEffect((() => {
                  !u.isTransitioning && m && (l(m.state), c({
                    isTransitioning: !0,
                    currentLocation: m.currentLocation,
                    nextLocation: m.nextLocation
                  }), v(void 0))
                }), [u.isTransitioning, m]);
                let w = o.useMemo((() => ({
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
                  S = o.useMemo((() => ({
                    router: r,
                    navigator: w,
                    static: !1,
                    basename: E
                  })), [r, w, E]);
                return o.createElement(o.Fragment, null, o.createElement(We.Provider, {
                  value: S
                }, o.createElement(He.Provider, {
                  value: a
                }, o.createElement(dr.Provider, {
                  value: u
                }, o.createElement(Nt, {
                  basename: E,
                  location: a.location,
                  navigationType: a.historyAction,
                  navigator: w
                }, a.initialized ? o.createElement(mr, {
                  routes: r.routes,
                  state: a
                }) : t)))), null)
              }

              function mr(e) {
                let {
                  routes: t,
                  state: r
                } = e;
                return ut(t, void 0, r)
              }

              function vr(e) {
                let {
                  basename: t,
                  children: r,
                  future: n,
                  window: a
                } = e, i = o.useRef();
                null == i.current && (i.current = l({
                  window: a,
                  v5Compat: !0
                }));
                let s = i.current,
                  [u, c] = o.useState({
                    action: s.action,
                    location: s.location
                  }),
                  {
                    v7_startTransition: d
                  } = n || {},
                  f = o.useCallback((e => {
                    d && fr ? fr((() => c(e))) : c(e)
                  }), [c, d]);
                return o.useLayoutEffect((() => s.listen(f)), [s, f]), o.createElement(Nt, {
                  basename: t,
                  children: r,
                  location: u.location,
                  navigationType: u.action,
                  navigator: s
                })
              }

              function yr(e) {
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
                let s = i.current,
                  [l, c] = o.useState({
                    action: s.action,
                    location: s.location
                  }),
                  {
                    v7_startTransition: d
                  } = n || {},
                  f = o.useCallback((e => {
                    d && fr ? fr((() => c(e))) : c(e)
                  }), [c, d]);
                return o.useLayoutEffect((() => s.listen(f)), [s, f]), o.createElement(Nt, {
                  basename: t,
                  children: r,
                  location: l.location,
                  navigationType: l.action,
                  navigator: s
                })
              }

              function gr(e) {
                let {
                  basename: t,
                  children: r,
                  future: n,
                  history: a
                } = e, [i, s] = o.useState({
                  action: a.action,
                  location: a.location
                }), {
                  v7_startTransition: l
                } = n || {}, u = o.useCallback((e => {
                  l && fr ? fr((() => s(e))) : s(e)
                }), [s, l]);
                return o.useLayoutEffect((() => a.listen(u)), [a, u]), o.createElement(Nt, {
                  basename: t,
                  children: r,
                  location: i.location,
                  navigationType: i.action,
                  navigator: a
                })
              }
              const br = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                wr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                Er = o.forwardRef((function(e, t) {
                  let r, {
                      onClick: n,
                      relative: a,
                      reloadDocument: i,
                      replace: s,
                      state: l,
                      target: u,
                      to: c,
                      preventScrollReset: d,
                      unstable_viewTransition: f
                    } = e,
                    h = Yt(e, or),
                    {
                      basename: p
                    } = o.useContext(Ke),
                    m = !1;
                  if ("string" == typeof c && wr.test(c) && (r = c, br)) try {
                    let e = new URL(window.location.href),
                      t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
                      r = O(t.pathname, p);
                    t.origin === e.origin && null != r ? c = r + t.search + t.hash : m = !0
                  } catch (e) {}
                  let v = Xe(c, {
                      relative: a
                    }),
                    y = Pr(c, {
                      replace: s,
                      state: l,
                      target: u,
                      preventScrollReset: d,
                      relative: a,
                      unstable_viewTransition: f
                    });
                  return o.createElement("a", Jt({}, h, {
                    href: r || v,
                    onClick: m || i ? n : function(e) {
                      n && n(e), e.defaultPrevented || y(e)
                    },
                    ref: t,
                    target: u
                  }))
                })),
                Sr = o.forwardRef((function(e, t) {
                  let {
                    "aria-current": r = "page",
                    caseSensitive: n = !1,
                    className: a = "",
                    end: i = !1,
                    style: s,
                    to: l,
                    unstable_viewTransition: u,
                    children: c
                  } = e, d = Yt(e, ar), f = st(l, {
                    relative: d.relative
                  }), h = Qe(), p = o.useContext(He), {
                    navigator: m
                  } = o.useContext(Ke), v = null != p && Hr(f) && !0 === u, y = m.encodeLocation ? m.encodeLocation(f).pathname : f.pathname, g = h.pathname, b = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
                  n || (g = g.toLowerCase(), b = b ? b.toLowerCase() : null, y = y.toLowerCase());
                  let w, E = g === y || !i && g.startsWith(y) && "/" === g.charAt(y.length),
                    S = null != b && (b === y || !i && b.startsWith(y) && "/" === b.charAt(y.length)),
                    R = {
                      isActive: E,
                      isPending: S,
                      isTransitioning: v
                    },
                    x = E ? r : void 0;
                  w = "function" == typeof a ? a(R) : [a, E ? "active" : null, S ? "pending" : null, v ? "transitioning" : null].filter(Boolean).join(" ");
                  let k = "function" == typeof s ? s(R) : s;
                  return o.createElement(Er, Jt({}, d, {
                    "aria-current": x,
                    className: w,
                    ref: t,
                    style: k,
                    to: l,
                    unstable_viewTransition: u
                  }), "function" == typeof c ? c(R) : c)
                })),
                Rr = o.forwardRef(((e, t) => {
                  let r = Ar();
                  return o.createElement(xr, Jt({}, e, {
                    submit: r,
                    ref: t
                  }))
                })),
                xr = o.forwardRef(((e, t) => {
                  let {
                    reloadDocument: r,
                    replace: n,
                    state: a,
                    method: i = Xt,
                    action: s,
                    onSubmit: l,
                    submit: u,
                    relative: c,
                    preventScrollReset: d,
                    unstable_viewTransition: f
                  } = e, h = Yt(e, ir), p = "get" === i.toLowerCase() ? "get" : "post", m = Ur(s, {
                    relative: c
                  });
                  return o.createElement("form", Jt({
                    ref: t,
                    method: p,
                    action: m,
                    onSubmit: r ? l : e => {
                      if (l && l(e), e.defaultPrevented) return;
                      e.preventDefault();
                      let t = e.nativeEvent.submitter,
                        r = (null == t ? void 0 : t.getAttribute("formmethod")) || i;
                      u(t || e.currentTarget, {
                        method: r,
                        replace: n,
                        state: a,
                        relative: c,
                        preventScrollReset: d,
                        unstable_viewTransition: f
                      })
                    }
                  }, h))
                }));

              function kr(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = e;
                return $r({
                  getKey: t,
                  storageKey: r
                }), null
              }
              var Cr, _r;

              function Dr(e) {
                let t = o.useContext(We);
                return t || c(!1), t
              }

              function Lr(e) {
                let t = o.useContext(He);
                return t || c(!1), t
              }

              function Pr(e, t) {
                let {
                  target: r,
                  replace: n,
                  state: a,
                  preventScrollReset: i,
                  relative: s,
                  unstable_viewTransition: l
                } = void 0 === t ? {} : t, u = rt(), c = Qe(), d = st(e, {
                  relative: s
                });
                return o.useCallback((t => {
                  if (function(e, t) {
                      return !(0 !== e.button || t && "_self" !== t || function(e) {
                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                      }(e))
                    }(t, r)) {
                    t.preventDefault();
                    let r = void 0 !== n ? n : p(c) === p(d);
                    u(e, {
                      replace: r,
                      state: a,
                      preventScrollReset: i,
                      relative: s,
                      unstable_viewTransition: l
                    })
                  }
                }), [c, u, d, n, a, r, e, i, s, l])
              }

              function Tr(e) {
                let t = o.useRef(Zt(e)),
                  r = o.useRef(!1),
                  n = Qe(),
                  a = o.useMemo((() => function(e, t) {
                    let r = Zt(e);
                    return t && t.forEach(((e, n) => {
                      r.has(n) || t.getAll(n).forEach((e => {
                        r.append(n, e)
                      }))
                    })), r
                  }(n.search, r.current ? null : t.current)), [n.search]),
                  i = rt(),
                  s = o.useCallback(((e, t) => {
                    const n = Zt("function" == typeof e ? e(a) : e);
                    r.current = !0, i("?" + n, t)
                  }), [i, a]);
                return [a, s]
              }

              function jr() {
                if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
              }

              function Ar() {
                let {
                  router: e
                } = Dr(Cr.UseSubmit), {
                  basename: t
                } = o.useContext(Ke), r = wt();
                return o.useCallback((function(n, o) {
                  void 0 === o && (o = {}), jr();
                  let {
                    action: a,
                    method: i,
                    encType: s,
                    formData: l,
                    body: u
                  } = nr(n, t);
                  e.navigate(o.action || a, {
                    preventScrollReset: o.preventScrollReset,
                    formData: l,
                    body: u,
                    formMethod: o.method || i,
                    formEncType: o.encType || s,
                    replace: o.replace,
                    state: o.state,
                    fromRouteId: r,
                    unstable_viewTransition: o.unstable_viewTransition
                  })
                }), [e, t, r])
              }

              function Mr(e, t) {
                let {
                  router: r
                } = Dr(Cr.UseSubmitFetcher), {
                  basename: n
                } = o.useContext(Ke);
                return o.useCallback((function(o, a) {
                  void 0 === a && (a = {}), jr();
                  let {
                    action: i,
                    method: s,
                    encType: l,
                    formData: u,
                    body: d
                  } = nr(o, n);
                  null == t && c(!1), r.fetch(e, t, a.action || i, {
                    preventScrollReset: a.preventScrollReset,
                    formData: u,
                    body: d,
                    formMethod: a.method || s,
                    formEncType: a.encType || l
                  })
                }), [r, n, e, t])
              }

              function Ur(e, t) {
                let {
                  relative: r
                } = void 0 === t ? {} : t, {
                  basename: n
                } = o.useContext(Ke), a = o.useContext(Je);
                a || c(!1);
                let [i] = a.matches.slice(-1), s = Jt({}, st(e || ".", {
                  relative: r
                })), l = Qe();
                if (null == e && (s.search = l.search, i.route.index)) {
                  let e = new URLSearchParams(s.search);
                  e.delete("index"), s.search = e.toString() ? "?" + e.toString() : ""
                }
                return e && "." !== e || !i.route.index || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), "/" !== n && (s.pathname = "/" === s.pathname ? n : $([n, s.pathname])), p(s)
              }(function(e) {
                e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
              })(Cr || (Cr = {})),
              function(e) {
                e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
              }(_r || (_r = {}));
              let Or = 0;

              function Nr() {
                var e;
                let {
                  router: t
                } = Dr(Cr.UseFetcher), r = o.useContext(Je);
                r || c(!1);
                let n = null == (e = r.matches[r.matches.length - 1]) ? void 0 : e.route.id;
                null == n && c(!1);
                let [a] = o.useState((() => String(++Or))), [i] = o.useState((() => (n || c(!1), function(e, t) {
                  return o.forwardRef(((r, n) => {
                    let a = Mr(e, t);
                    return o.createElement(xr, Jt({}, r, {
                      ref: n,
                      submit: a
                    }))
                  }))
                }(a, n)))), [s] = o.useState((() => e => {
                  t || c(!1), n || c(!1), t.fetch(a, n, e)
                })), l = Mr(a, n), u = t.getFetcher(a), d = o.useMemo((() => Jt({
                  Form: i,
                  submit: l,
                  load: s
                }, u)), [u, i, l, s]);
                return o.useEffect((() => () => {
                  t ? t.deleteFetcher(a) : console.warn("No router available to clean up from useFetcher()")
                }), [t, a]), d
              }

              function Ir() {
                return [...Lr(_r.UseFetchers).fetchers.values()]
              }
              const Br = "react-router-scroll-positions";
              let Fr = {};

              function $r(e) {
                let {
                  getKey: t,
                  storageKey: r
                } = void 0 === e ? {} : e, {
                  router: n
                } = Dr(Cr.UseScrollRestoration), {
                  restoreScrollPosition: a,
                  preventScrollReset: i
                } = Lr(_r.UseScrollRestoration), {
                  basename: s
                } = o.useContext(Ke), l = Qe(), u = Rt(), c = Et();
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
                      let e = (t ? t(l, u) : null) || l.key;
                      Fr[e] = window.scrollY
                    }
                    try {
                      sessionStorage.setItem(r || Br, JSON.stringify(Fr))
                    } catch (e) {}
                    window.history.scrollRestoration = "auto"
                  }), [r, t, c.state, l, u])), "undefined" != typeof document && (o.useLayoutEffect((() => {
                    try {
                      let e = sessionStorage.getItem(r || Br);
                      e && (Fr = JSON.parse(e))
                    } catch (e) {}
                  }), [r]), o.useLayoutEffect((() => {
                    let e = t && "/" !== s ? (e, r) => t(Jt({}, e, {
                        pathname: O(e.pathname, s) || e.pathname
                      }), r) : t,
                      r = null == n ? void 0 : n.enableScrollRestoration(Fr, (() => window.scrollY), e);
                    return () => r && r()
                  }), [n, s, t]), o.useLayoutEffect((() => {
                    if (!1 !== a)
                      if ("number" != typeof a) {
                        if (l.hash) {
                          let e = document.getElementById(decodeURIComponent(l.hash.slice(1)));
                          if (e) return void e.scrollIntoView()
                        }!0 !== i && window.scrollTo(0, 0)
                      } else window.scrollTo(0, a)
                  }), [l, a, i]))
              }

              function zr(e, t) {
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

              function Wr(e) {
                let {
                  when: t,
                  message: r
                } = e, n = Tt(t);
                o.useEffect((() => {
                  "blocked" === n.state && (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset())
                }), [n, r]), o.useEffect((() => {
                  "blocked" !== n.state || t || n.reset()
                }), [n, t])
              }

              function Hr(e, t) {
                void 0 === t && (t = {});
                let r = o.useContext(dr);
                null == r && c(!1);
                let {
                  basename: n
                } = Dr(Cr.useViewTransitionState), a = st(e, {
                  relative: t.relative
                });
                if (!r.isTransitioning) return !1;
                let i = O(r.currentLocation.pathname, n) || r.currentLocation.pathname,
                  s = O(r.nextLocation.pathname, n) || r.nextLocation.pathname;
                return null != M(a.pathname, s) || null != M(a.pathname, i)
              }
            },
            32: (e, t, r) => {
              (0, r(752).G)(1)
            },
            752: (e, t, r) => {
              const n = r(184).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            296: (e, t, r) => {
              r(32)
            },
            184: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, a = n.length; o !== t && a >= 0;) "/" === n[--a] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            224: (e, t) => {
              "use strict";
              var r = Symbol.for("react.element"),
                n = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"),
                i = Symbol.for("react.profiler"),
                s = Symbol.for("react.provider"),
                l = Symbol.for("react.context"),
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
                S = Object.prototype.hasOwnProperty,
                R = {
                  current: null
                },
                x = {
                  key: !0,
                  ref: !0,
                  __self: !0,
                  __source: !0
                };

              function k(e, t, n) {
                var o, a = {},
                  i = null,
                  s = null;
                if (null != t)
                  for (o in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = "" + t.key), t) S.call(t, o) && !x.hasOwnProperty(o) && (a[o] = t[o]);
                var l = arguments.length - 2;
                if (1 === l) a.children = n;
                else if (1 < l) {
                  for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                  a.children = u
                }
                if (e && e.defaultProps)
                  for (o in l = e.defaultProps) void 0 === a[o] && (a[o] = l[o]);
                return {
                  $$typeof: r,
                  type: e,
                  key: i,
                  ref: s,
                  props: a,
                  _owner: R.current
                }
              }

              function C(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
              }
              var _ = /\/+/g;

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

              function L(e, t, o, a, i) {
                var s = typeof e;
                "undefined" !== s && "boolean" !== s || (e = null);
                var l = !1;
                if (null === e) l = !0;
                else switch (s) {
                  case "string":
                  case "number":
                    l = !0;
                    break;
                  case "object":
                    switch (e.$$typeof) {
                      case r:
                      case n:
                        l = !0
                    }
                }
                if (l) return i = i(l = e), e = "" === a ? "." + D(l, 0) : a, E(i) ? (o = "", null != e && (o = e.replace(_, "$&/") + "/"), L(i, t, o, "", (function(e) {
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
                }(i, o + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(_, "$&/") + "/") + e)), t.push(i)), 1;
                if (l = 0, a = "" === a ? "." : a + ":", E(e))
                  for (var u = 0; u < e.length; u++) {
                    var c = a + D(s = e[u], u);
                    l += L(s, t, o, c, i)
                  } else if (c = function(e) {
                      return null === e || "object" != typeof e ? null : "function" == typeof(e = h && e[h] || e["@@iterator"]) ? e : null
                    }(e), "function" == typeof c)
                    for (e = c.call(e), u = 0; !(s = e.next()).done;) l += L(s = s.value, t, o, c = a + D(s, u++), i);
                  else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
              }

              function P(e, t, r) {
                if (null == e) return e;
                var n = [],
                  o = 0;
                return L(e, n, "", "", (function(e) {
                  return t.call(r, e, o++)
                })), n
              }

              function T(e) {
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
              var j = {
                  current: null
                },
                A = {
                  transition: null
                },
                M = {
                  ReactCurrentDispatcher: j,
                  ReactCurrentBatchConfig: A,
                  ReactCurrentOwner: R
                };
              t.Children = {
                map: P,
                forEach: function(e, t, r) {
                  P(e, (function() {
                    t.apply(this, arguments)
                  }), r)
                },
                count: function(e) {
                  var t = 0;
                  return P(e, (function() {
                    t++
                  })), t
                },
                toArray: function(e) {
                  return P(e, (function(e) {
                    return e
                  })) || []
                },
                only: function(e) {
                  if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                  return e
                }
              }, t.Component = y, t.Fragment = o, t.Profiler = i, t.PureComponent = b, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = m({}, e.props),
                  a = e.key,
                  i = e.ref,
                  s = e._owner;
                if (null != t) {
                  if (void 0 !== t.ref && (i = t.ref, s = R.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                  for (u in t) S.call(t, u) && !x.hasOwnProperty(u) && (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u) o.children = n;
                else if (1 < u) {
                  l = Array(u);
                  for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
                  o.children = l
                }
                return {
                  $$typeof: r,
                  type: e.type,
                  key: a,
                  ref: i,
                  props: o,
                  _owner: s
                }
              }, t.createContext = function(e) {
                return (e = {
                  $$typeof: l,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                  _defaultValue: null,
                  _globalName: null
                }).Provider = {
                  $$typeof: s,
                  _context: e
                }, e.Consumer = e
              }, t.createElement = k, t.createFactory = function(e) {
                var t = k.bind(null, e);
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
                  _init: T
                }
              }, t.memo = function(e, t) {
                return {
                  $$typeof: d,
                  type: e,
                  compare: void 0 === t ? null : t
                }
              }, t.startTransition = function(e) {
                var t = A.transition;
                A.transition = {};
                try {
                  e()
                } finally {
                  A.transition = t
                }
              }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
              }, t.useCallback = function(e, t) {
                return j.current.useCallback(e, t)
              }, t.useContext = function(e) {
                return j.current.useContext(e)
              }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return j.current.useDeferredValue(e)
              }, t.useEffect = function(e, t) {
                return j.current.useEffect(e, t)
              }, t.useId = function() {
                return j.current.useId()
              }, t.useImperativeHandle = function(e, t, r) {
                return j.current.useImperativeHandle(e, t, r)
              }, t.useInsertionEffect = function(e, t) {
                return j.current.useInsertionEffect(e, t)
              }, t.useLayoutEffect = function(e, t) {
                return j.current.useLayoutEffect(e, t)
              }, t.useMemo = function(e, t) {
                return j.current.useMemo(e, t)
              }, t.useReducer = function(e, t, r) {
                return j.current.useReducer(e, t, r)
              }, t.useRef = function(e) {
                return j.current.useRef(e)
              }, t.useState = function(e) {
                return j.current.useState(e)
              }, t.useSyncExternalStore = function(e, t, r) {
                return j.current.useSyncExternalStore(e, t, r)
              }, t.useTransition = function() {
                return j.current.useTransition()
              }, t.version = "18.2.0"
            },
            188: (e, t, r) => {
              "use strict";
              e.exports = r(224)
            },
            461: (e, t, r) => {
              "use strict";
              var n = {
                  "./index": () => r.e(534).then((() => () => r(534)))
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
            856: e => {
              "use strict";
              e.exports = r
            },
            864: e => {
              "use strict";
              e.exports = n
            },
            472: e => {
              "use strict";
              e.exports = o
            },
            964: e => {
              "use strict";
              e.exports = a
            }
          },
          c = {};

        function d(e) {
          var t = c[e];
          if (void 0 !== t) return t.exports;
          var r = c[e] = {
            exports: {}
          };
          return u[e](r, r.exports, d), r.exports
        }
        return d.m = u, d.c = c, d.y = t, d.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return d.d(t, {
            a: t
          }), t
        }, d.d = (e, t) => {
          for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((t, r) => (d.f[r](e, t), t)), [])), d.u = e => "js/5c9681c350d3eef238dc218ac8fac8ca.js", d.miniCssF = e => "css/ff86fabe995789bfa97d587455badf7b.css", d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, i = "@rockstargames/sites-rockstar-tv:", d.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var a, s;
            if (void 0 !== n)
              for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                var c = l[u];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == i + n) {
                  a = c;
                  break
                }
              }
            a || (s = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, d.nc && a.setAttribute("nonce", d.nc), a.setAttribute("data-webpack", i + n), a.src = t), e[t] = [r];
            var f = (r, n) => {
                a.onerror = a.onload = null, clearTimeout(h);
                var o = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), r) return r(n)
              },
              h = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = f.bind(null, a.onerror), a.onload = f.bind(null, a.onload), s && document.head.appendChild(a)
          }
        }, d.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s = {
          534: [668, 52, 308, 792, 644]
        }, l = {
          52: ["default", "./index", 864],
          308: ["default", "./operations/fragments/video-fields.graphql", 864],
          644: ["default", "./index", 472],
          668: ["default", "./index", 856],
          792: ["default", "./index", 964]
        }, d.f.remotes = (e, t) => {
          d.o(s, e) && s[e].forEach((e => {
            var r = d.R;
            r || (r = []);
            var n = l[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), d.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                a = (e, r, a, i, s, l) => {
                  try {
                    var u = e(r, a);
                    if (!u || !u.then) return s(u, i, l);
                    var c = u.then((e => s(e, i)), o);
                    if (!l) return c;
                    t.push(n.p = c)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, t, o) => a(t.get, n[1], r, 0, s, o),
                s = t => {
                  n.p = 1, d.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(d, n[2], 0, 0, ((e, t, r) => e ? a(d.I, n[0], 0, e, i, r) : o()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            t = {};
          d.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              d.o(d.S, r) || (d.S[r] = {});
              var a = d.S[r],
                i = "@rockstargames/sites-rockstar-tv",
                s = (e, t, r, n) => {
                  var o = a[e] = a[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (o[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                l = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = d(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(d.S[r], n);
                    if (o.then) return u.push(o.then(a, t));
                    var i = a(o);
                    if (i && i.then) return u.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                u = [];
              return "default" === r && (s("react-router-dom", "6.17.0", (() => () => d(344)), 1), s("react", "18.2.0", (() => () => d(188)), 1), l(856), l(864), l(472), l(964)), u.length ? e[r] = Promise.all(u).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var t = d.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
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
                for (var i = 0, s = 1, l = !0;; s++, i++) {
                  var u, c, d = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= n.length || "o" == (c = (typeof(u = n[i]))[0])) return !l || ("u" == d ? s > o && !a : "" == d != a);
                  if ("u" == c) {
                    if (!l || "u" != d) return !1
                  } else if (l)
                    if (d == c)
                      if (s <= o) {
                        if (u != r[s]) return !1
                      } else {
                        if (a ? u > r[s] : u < r[s]) return !1;
                        u != r[s] && (l = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (a || s <= o) return !1;
                    l = !1, s--
                  } else {
                    if (s <= o || c < d != a) return !1;
                    l = !1
                  } else "s" != d && "n" != d && (l = !1, s--)
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
                    s = (typeof i)[0];
                  if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
                  if ("o" != a && "u" != a && o != i) return o < i;
                  n++
                }
              })(r, n) ? r : n), 0)) && a[n]
            },
            n = (e => function(t, r, n, o) {
              var a = d.I(t);
              return a && a.then ? a.then(e.bind(e, t, d.S[t], r, n, o)) : e(t, d.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var i = t && d.o(t, n) && r(t, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              320: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => () => d(344))),
              200: () => n("default", "react", [1, 18, 2, 0], (() => () => d(188)))
            };
          [200].forEach((e => {
            d.m[e] = t => {
              o[e] = 0, delete d.c[e];
              var r = a[e]();
              if ("function" != typeof r) throw new Error("Shared module is not available for eager consumption: " + e);
              t.exports = r()
            }
          }));
          var i = {
              534: [320]
            },
            s = {};
          d.f.consumes = (e, t) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(o, e)) return t.push(o[e]);
              if (!s[e]) {
                var r = t => {
                  o[e] = 0, d.m[e] = r => {
                    delete d.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var n = t => {
                  delete o[e], d.m[e] = r => {
                    throw delete d.c[e], t
                  }
                };
                try {
                  var i = a[e]();
                  i.then ? t.push(o[e] = i.then(r).catch(n)) : r(i)
                } catch (e) {
                  n(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              112: 0
            };
            d.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                534: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = d.miniCssF(e),
                  o = d.p + n;
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
                        s = r && r.target && r.target.href || t,
                        l = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = s, a.parentNode && a.parentNode.removeChild(a), o(l)
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
            112: 0
          };
          d.f.j = (t, r) => {
            var n = d.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else {
                var o = new Promise(((r, o) => n = e[t] = [r, o]));
                r.push(n[2] = o);
                var a = d.p + d.u(t),
                  i = new Error;
                d.l(a, (r => {
                  if (d.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                    var o = r && ("load" === r.type ? "missing" : r.type),
                      a = r && r.target && r.target.src;
                    i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                  }
                }), "chunk-" + t, t)
              }
          };
          var t = (t, r) => {
              var n, o, a = r[0],
                i = r[1],
                s = r[2],
                l = 0;
              if (a.some((t => 0 !== e[t]))) {
                for (n in i) d.o(i, n) && (d.m[n] = i[n]);
                s && s(d)
              }
              for (t && t(r); l < a.length; l++) o = a[l], d.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), d(296), d(461)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map