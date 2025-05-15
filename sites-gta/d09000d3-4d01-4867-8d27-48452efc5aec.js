! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d09000d3-4d01-4867-8d27-48452efc5aec", e._sentryDebugIdIdentifier = "sentry-dbid-d09000d3-4d01-4867-8d27-48452efc5aec")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [4840], {
    4840: (e, n, t) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
          }
          return e
        }, r.apply(null, arguments)
      }
      t.r(n), t.d(n, {
        AutoFocusInside: () => Ve,
        FocusLockUI: () => x,
        FreeFocusInside: () => Qe,
        InFocusGuard: () => v,
        MoveFocusInside: () => ze,
        default: () => an,
        useFocusController: () => $e,
        useFocusInside: () => Ye,
        useFocusScope: () => en,
        useFocusState: () => cn
      });
      var o = t(2229),
        u = t.n(o),
        i = (t(7145), "data-focus-lock"),
        c = "data-focus-lock-disabled",
        a = "data-no-focus-lock",
        f = "data-autofocus-inside",
        d = t(3614),
        s = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        l = function(e) {
          var n = e.children,
            t = void 0 === n ? null : n;
          return u().createElement(o.Fragment, null, u().createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: s
          }), t, t && u().createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: s
          }))
        };
      l.propTypes = {};
      const v = l;
      var m = t(9683),
        p = (0, m.C)({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        b = (0, m.C)(),
        y = (0, m.C)(),
        g = (0, m.f)({
          async: !0,
          ssr: "undefined" != typeof document
        }),
        h = (0, o.createContext)(void 0),
        E = [],
        w = (0, o.forwardRef)((function(e, n) {
          var t, a = (0, o.useState)(),
            f = a[0],
            l = a[1],
            v = (0, o.useRef)(),
            m = (0, o.useRef)(!1),
            y = (0, o.useRef)(null),
            w = (0, o.useState)({})[1],
            x = e.children,
            M = e.disabled,
            O = void 0 !== M && M,
            N = e.noFocusGuards,
            F = void 0 !== N && N,
            I = e.persistentFocus,
            T = void 0 !== I && I,
            k = e.crossFrame,
            S = void 0 === k || k,
            _ = e.autoFocus,
            C = void 0 === _ || _,
            A = (e.allowTextSelection, e.group),
            D = e.className,
            L = e.whiteList,
            P = e.hasPositiveIndices,
            R = e.shards,
            G = void 0 === R ? E : R,
            j = e.as,
            B = void 0 === j ? "div" : j,
            U = e.lockProps,
            W = void 0 === U ? {} : U,
            q = e.sideCar,
            H = e.returnFocus,
            V = void 0 !== H && H,
            Y = e.focusOptions,
            K = e.onActivation,
            z = e.onDeactivation,
            J = (0, o.useState)({})[0],
            Q = (0, o.useCallback)((function(e) {
              var n = e.captureFocusRestore;
              if (!y.current) {
                var t, r = null == (t = document) ? void 0 : t.activeElement;
                y.current = r, r !== document.body && (y.current = n(r))
              }
              v.current && K && K(v.current), m.current = !0, w()
            }), [K]),
            X = (0, o.useCallback)((function() {
              m.current = !1, z && z(v.current), w()
            }), [z]),
            Z = (0, o.useCallback)((function(e) {
              var n = y.current;
              if (n) {
                var t = ("function" == typeof n ? n() : n) || document.body,
                  r = "function" == typeof V ? V(t) : V;
                if (r) {
                  var o = "object" == typeof r ? r : void 0;
                  y.current = null, e ? Promise.resolve().then((function() {
                    return t.focus(o)
                  })) : t.focus(o)
                }
              }
            }), [V]),
            $ = (0, o.useCallback)((function(e) {
              m.current && p.useMedium(e)
            }), []),
            ee = b.useMedium,
            ne = (0, o.useCallback)((function(e) {
              v.current !== e && (v.current = e, l(e))
            }), []),
            te = r(((t = {})[c] = O && "disabled", t[i] = A, t), W),
            re = !0 !== F,
            oe = re && "tail" !== F,
            ue = (0, d.S)([n, ne]),
            ie = (0, o.useMemo)((function() {
              return {
                observed: v,
                shards: G,
                enabled: !O,
                active: m.current
              }
            }), [O, m.current, G, f]);
          return u().createElement(o.Fragment, null, re && [u().createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: O ? -1 : 0,
            style: s
          }), P ? u().createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: O ? -1 : 1,
            style: s
          }) : null], !O && u().createElement(q, {
            id: J,
            sideCar: g,
            observed: f,
            disabled: O,
            persistentFocus: T,
            crossFrame: S,
            autoFocus: C,
            whiteList: L,
            shards: G,
            onActivation: Q,
            onDeactivation: X,
            returnFocus: Z,
            focusOptions: Y,
            noFocusGuards: F
          }), u().createElement(B, r({
            ref: ue
          }, te, {
            className: D,
            onBlur: ee,
            onFocus: $
          }), u().createElement(h.Provider, {
            value: ie
          }, x)), oe && u().createElement("div", {
            "data-focus-guard": !0,
            tabIndex: O ? -1 : 0,
            style: s
          }))
        }));
      w.propTypes = {};
      const x = w;

      function M(e, n) {
        return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
          return e.__proto__ = n, e
        }, M(e, n)
      }

      function O(e) {
        return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, O(e)
      }
      var N = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        F = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        I = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        T = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        k = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        S = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || k(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && ! function(e) {
              return e.hasAttribute("inert")
            }(e) && n(T(e))
          }(n, S.bind(void 0, e));
          return e.set(n, r), r
        },
        _ = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !k(e)) || !!L(e) && n(T(e))
          }(n, _.bind(void 0, e));
          return e.set(n, r), r
        },
        C = function(e) {
          return e.dataset
        },
        A = function(e) {
          return "INPUT" === e.tagName
        },
        D = function(e) {
          return A(e) && "radio" === e.type
        },
        L = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        P = function(e) {
          var n;
          return Boolean(e && (null === (n = C(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        R = function(e) {
          return !P(e)
        },
        G = function(e) {
          return Boolean(e)
        },
        j = function(e, n) {
          var t = Math.max(0, e.tabIndex),
            r = Math.max(0, n.tabIndex),
            o = t - r,
            u = e.index - n.index;
          if (o) {
            if (!t) return 1;
            if (!r) return -1
          }
          return o || u
        },
        B = function(e, n, t) {
          return N(e).map((function(e, n) {
            var r = function(e) {
              return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex
            }(e);
            return {
              node: e,
              index: n,
              tabIndex: t && -1 === r ? (e.dataset || {}).focusGuard ? 0 : -1 : r
            }
          })).filter((function(e) {
            return !n || e.tabIndex >= 0
          })).sort(j)
        },
        U = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        W = "".concat(U, ", [data-focus-guard]"),
        q = function(e, n) {
          return N((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? W : U) ? [t] : [], q(t))
          }), [])
        },
        H = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = q(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? H([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? N(t.parentNode.querySelectorAll(U)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        V = function(e, n) {
          return N(e).filter((function(e) {
            return S(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((A(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        Y = function(e, n) {
          return void 0 === n && (n = new Map), N(e).filter((function(e) {
            return _(n, e)
          }))
        },
        K = function(e, n, t) {
          return B(V(H(e, t), n), !0, t)
        },
        z = function(e, n) {
          return B(V(H(e), n), !1)
        },
        J = function(e, n) {
          return e.shadowRoot ? J(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || N(e.children).some((function(e) {
            var t;
            if (e instanceof HTMLIFrameElement) {
              var r = null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && J(r, n)
            }
            return J(e, n)
          }))
        },
        Q = function(e) {
          if (void 0 === e && (e = document), e && e.activeElement) {
            var n = e.activeElement;
            return n.shadowRoot ? Q(n.shadowRoot) : n instanceof HTMLIFrameElement && function() {
              try {
                return n.contentWindow.document
              } catch (e) {
                return
              }
            }() ? Q(n.contentWindow.document) : n
          }
        },
        X = function(e) {
          return e.parentNode ? X(e.parentNode) : e
        },
        Z = function(e) {
          return F(e).filter(Boolean).reduce((function(e, n) {
            var t = n.getAttribute(i);
            return e.push.apply(e, t ? function(e) {
              for (var n = new Set, t = e.length, r = 0; r < t; r += 1)
                for (var o = r + 1; o < t; o += 1) {
                  var u = e[r].compareDocumentPosition(e[o]);
                  (u & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && n.add(o), (u & Node.DOCUMENT_POSITION_CONTAINS) > 0 && n.add(r)
                }
              return e.filter((function(e, t) {
                return !n.has(t)
              }))
            }(N(X(n).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(c, '="disabled"])')))) : [n]), e
          }), [])
        },
        $ = function(e, n) {
          return void 0 === n && (n = Q(I(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && Z(e).some((function(e) {
            return J(e, n) || function(e, n) {
              return Boolean(N(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        ee = function(e, n) {
          e && ("focus" in e && e.focus(n), "contentWindow" in e && e.contentWindow && e.contentWindow.focus())
        },
        ne = function(e, n) {
          return D(e) && e.name ? function(e, n) {
            return n.filter(D).filter((function(n) {
              return n.name === e.name
            })).filter((function(e) {
              return e.checked
            }))[0] || e
          }(e, n) : e
        },
        te = function(e) {
          return e[0] && e.length > 1 ? ne(e[0], e) : e[0]
        },
        re = function(e, n) {
          return e.indexOf(ne(n, e))
        },
        oe = "NEW_FOCUS",
        ue = function(e, n, t) {
          var r, o = e.map((function(e) {
              return e.node
            })),
            u = Y(o.filter((r = t, function(e) {
              var n, t = null === (n = C(e)) || void 0 === n ? void 0 : n.autofocus;
              return e.autofocus || void 0 !== t && "false" !== t || r.indexOf(e) >= 0
            })));
          return u && u.length ? te(u) : te(Y(n))
        },
        ie = function(e, n) {
          return void 0 === n && (n = []), n.push(e), e.parentNode && ie(e.parentNode.host || e.parentNode, n), n
        },
        ce = function(e, n) {
          for (var t = ie(e), r = ie(n), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        ae = function(e, n, t) {
          var r = F(e),
            o = F(n),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(e) {
            i = ce(i || e, e) || i, t.filter(Boolean).forEach((function(e) {
              var n = ce(u, e);
              n && (i = !i || J(n, i) ? n : ce(n, i))
            }))
          })), i
        },
        fe = function(e, n) {
          return e.reduce((function(e, t) {
            return e.concat(function(e, n) {
              return V((t = e.querySelectorAll("[".concat(f, "]")), N(t).map((function(e) {
                return H([e])
              })).reduce((function(e, n) {
                return e.concat(n)
              }), [])), n);
              var t
            }(t, n))
          }), [])
        },
        de = function(e, n) {
          var t = Q(F(e).length > 0 ? document : I(e).ownerDocument),
            r = Z(e).filter(R),
            o = ae(t || e, e, r),
            u = new Map,
            i = z(r, u),
            c = i.filter((function(e) {
              var n = e.node;
              return R(n)
            }));
          if (c[0]) {
            var a, f, d, s = z([o], u).map((function(e) {
                return e.node
              })),
              l = (a = s, f = c, d = new Map, f.forEach((function(e) {
                return d.set(e.node, e)
              })), a.map((function(e) {
                return d.get(e)
              })).filter(G)),
              v = l.map((function(e) {
                return e.node
              })),
              m = l.filter((function(e) {
                return e.tabIndex >= 0
              })).map((function(e) {
                return e.node
              })),
              p = function(e, n, t, r, o) {
                var u = e.length,
                  i = e[0],
                  c = e[u - 1],
                  a = P(r);
                if (!(r && e.indexOf(r) >= 0)) {
                  var f = void 0 !== r ? t.indexOf(r) : -1,
                    d = o ? t.indexOf(o) : f,
                    s = o ? e.indexOf(o) : -1;
                  if (-1 === f) return -1 !== s ? s : oe;
                  if (-1 === s) return oe;
                  var l, v, m = f - d,
                    p = t.indexOf(i),
                    b = t.indexOf(c),
                    y = (l = t, v = new Set, l.forEach((function(e) {
                      return v.add(ne(e, l))
                    })), l.filter((function(e) {
                      return v.has(e)
                    }))),
                    g = void 0 !== r ? y.indexOf(r) : -1,
                    h = o ? y.indexOf(o) : g,
                    E = y.filter((function(e) {
                      return e.tabIndex >= 0
                    })),
                    w = void 0 !== r ? E.indexOf(r) : -1,
                    x = o ? E.indexOf(o) : w,
                    M = w >= 0 && x >= 0 ? x - w : h - g;
                  if (!m && s >= 0) return s;
                  if (0 === n.length) return s;
                  var O = re(e, n[0]),
                    N = re(e, n[n.length - 1]);
                  return f <= p && a && Math.abs(m) > 1 ? N : f >= b && a && Math.abs(m) > 1 ? O : m && Math.abs(M) > 1 ? s : f <= p ? N : f > b ? O : m ? Math.abs(m) > 1 ? s : (u + s + m) % u : void 0
                }
              }(v, m, s, t, n);
            if (p === oe) {
              var b = ue(i, m, fe(r, u)) || ue(i, v, fe(r, u));
              return b ? {
                node: b
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === p ? p : l[p]
          }
        },
        se = 0,
        le = !1,
        ve = function(e, n, t) {
          void 0 === t && (t = {});
          var r = de(e, n);
          if (!le && r) {
            if (se > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), le = !0, void setTimeout((function() {
              le = !1
            }), 1);
            se++, ee(r.node, t.focusOptions), se--
          }
        };

      function me(e) {
        if (!e) return null;
        if ("undefined" == typeof WeakRef) return function() {
          return e || null
        };
        var n = e ? new WeakRef(e) : null;
        return function() {
          return (null == n ? void 0 : n.deref()) || null
        }
      }
      var pe = function(e) {
          var n = function(e) {
            if (!e) return null;
            for (var n = [], t = e; t && t !== document.body;) n.push({
              current: me(t),
              parent: me(t.parentElement),
              left: me(t.previousElementSibling),
              right: me(t.nextElementSibling)
            }), t = t.parentElement;
            return {
              element: me(e),
              stack: n,
              ownerDocument: e.ownerDocument
            }
          }(e);
          return function() {
            return function(e) {
              var n, t, r, o, u;
              if (e)
                for (var i = e.stack, c = e.ownerDocument, a = new Map, f = 0, d = i; f < d.length; f++) {
                  var s = d[f],
                    l = null === (n = s.parent) || void 0 === n ? void 0 : n.call(s);
                  if (l && c.contains(l)) {
                    for (var v = null === (t = s.left) || void 0 === t ? void 0 : t.call(s), m = s.current(), p = l.contains(m) ? m : void 0, b = null === (r = s.right) || void 0 === r ? void 0 : r.call(s), y = K([l], a), g = null !== (u = null !== (o = null != p ? p : null == v ? void 0 : v.nextElementSibling) && void 0 !== o ? o : b) && void 0 !== u ? u : v; g;) {
                      for (var h = 0, E = y; h < E.length; h++) {
                        var w = E[h];
                        if (null == g ? void 0 : g.contains(w.node)) return w.node
                      }
                      g = g.nextElementSibling
                    }
                    if (y.length) return y[0].node
                  }
                }
            }(n)
          }
        },
        be = function(e, n, t) {
          void 0 === n && (n = {});
          var r = function(e) {
              return Object.assign({
                scope: document.body,
                cycle: !0,
                onlyTabbable: !0
              }, e)
            }(n),
            o = function(e, n, t) {
              if (!e || !n) return console.error("no element or scope given"), {};
              var r = F(n);
              if (r.every((function(n) {
                  return !J(n, e)
                }))) return console.error("Active element is not contained in the scope"), {};
              var o = t ? K(r, new Map) : z(r, new Map),
                u = o.findIndex((function(n) {
                  return n.node === e
                }));
              return -1 !== u ? {
                prev: o[u - 1],
                next: o[u + 1],
                first: o[0],
                last: o[o.length - 1]
              } : void 0
            }(e, r.scope, r.onlyTabbable);
          if (o) {
            var u = t(o, r.cycle);
            u && ee(u.node, r.focusOptions)
          }
        },
        ye = function(e, n, t) {
          var r, o, u, i, c = (o = e, u = null === (r = n.onlyTabbable) || void 0 === r || r, {
            first: (i = u ? K(F(o), new Map) : z(F(o), new Map))[0],
            last: i[i.length - 1]
          })[t];
          c && ee(c.node, n.focusOptions)
        };

      function ge(e) {
        setTimeout(e, 1)
      }
      var he = function(e, n) {
          var t = {};
          return t[e] = n, t
        },
        Ee = function(e) {
          return e && "current" in e ? e.current : e
        },
        we = function() {
          return document && document.activeElement === document.body
        },
        xe = null,
        Me = null,
        Oe = function() {
          return null
        },
        Ne = null,
        Fe = !1,
        Ie = !1,
        Te = function() {
          return !0
        };

      function ke(e, n, t, r) {
        var o = null,
          u = e;
        do {
          var i = r[u];
          if (i.guard) i.node.dataset.focusAutoGuard && (o = i);
          else {
            if (!i.lockItem) break;
            if (u !== e) return;
            o = null
          }
        } while ((u += t) !== n);
        o && (o.node.tabIndex = 0)
      }
      var Se = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        _e = function(e) {
          return z(e, new Map)
        },
        Ce = function() {
          var e, n, t, r, o, u, i, c = !1;
          if (xe) {
            var f = xe,
              d = f.observed,
              s = f.persistentFocus,
              l = f.autoFocus,
              v = f.shards,
              m = f.crossFrame,
              p = f.focusOptions,
              b = f.noFocusGuards,
              y = d || Ne && Ne.portaledElement;
            if (we() && Me && Me !== document.body && (!document.body.contains(Me) || !_e([(i = Me).parentNode]).some((function(e) {
                return e.node === i
              })))) {
              var g = Oe();
              g && g.focus()
            }
            var h = document && document.activeElement;
            if (y) {
              var E = [y].concat(v.map(Ee).filter(Boolean));
              if (h && ! function(e) {
                  return (xe.whiteList || Te)(e)
                }(h) || (s || function() {
                  if (!(m ? Boolean(Fe) : "meanwhile" === Fe) || !b || !Me || Ie) return !1;
                  var e = _e(E),
                    n = e.findIndex((function(e) {
                      return e.node === Me
                    }));
                  return 0 === n || n === e.length - 1
                }() || !(we() || function(e) {
                  void 0 === e && (e = document);
                  var n = Q(e);
                  return !!n && N(e.querySelectorAll("[".concat(a, "]"))).some((function(e) {
                    return J(e, n)
                  }))
                }()) || !Me && l) && (y && !($(E) || h && function(e, n) {
                  return n.some((function(n) {
                    return Se(e, n, n)
                  }))
                }(h, E) || (u = h, Ne && Ne.portaledElement === u)) && (document && !Me && h && !l ? (h.blur && h.blur(), document.body.focus()) : (c = ve(E, Me, {
                  focusOptions: p
                }), Ne = {})), (Me = document && document.activeElement) !== document.body && (Oe = pe(Me)), Fe = !1), document && h !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                var w = document && document.activeElement,
                  x = (n = Z(e = E).filter(R), t = ae(e, e, n), r = B(H([t], !0), !0, !0), o = H(n, !1), r.map((function(e) {
                    var n = e.node;
                    return {
                      node: n,
                      index: e.index,
                      lockItem: o.indexOf(n) >= 0,
                      guard: P(n)
                    }
                  }))),
                  M = x.map((function(e) {
                    return e.node
                  })).indexOf(w);
                M > -1 && (x.filter((function(e) {
                  var n = e.guard,
                    t = e.node;
                  return n && t.dataset.focusAutoGuard
                })).forEach((function(e) {
                  return e.node.removeAttribute("tabIndex")
                })), ke(M, x.length, 1, x), ke(M, -1, -1, x))
              }
            }
          }
          return c
        },
        Ae = function(e) {
          Ce() && e && (e.stopPropagation(), e.preventDefault())
        },
        De = function() {
          return ge(Ce)
        },
        Le = function() {
          Ie = !0
        },
        Pe = function() {
          Ie = !1, Fe = "just", ge((function() {
            Fe = "meanwhile"
          }))
        },
        Re = {
          moveFocusInside: ve,
          focusInside: $,
          focusNextElement: function(e, n) {
            void 0 === n && (n = {}), be(e, n, (function(e, n) {
              var t = e.next,
                r = e.first;
              return t || n && r
            }))
          },
          focusPrevElement: function(e, n) {
            void 0 === n && (n = {}), be(e, n, (function(e, n) {
              var t = e.prev,
                r = e.last;
              return t || n && r
            }))
          },
          focusFirstElement: function(e, n) {
            void 0 === n && (n = {}), ye(e, n, "first")
          },
          focusLastElement: function(e, n) {
            void 0 === n && (n = {}), ye(e, n, "last")
          },
          captureFocusRestore: pe
        };
      p.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (Ne = {
          observerNode: t,
          portaledElement: n
        })
      })), b.assignMedium(De), y.assignMedium((function(e) {
        return e(Re)
      }));
      const Ge = (je = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Be = function(e) {
        var n = e.slice(-1)[0];
        n && !xe && (document.addEventListener("focusin", Ae), document.addEventListener("focusout", De), window.addEventListener("focus", Le), window.addEventListener("blur", Pe));
        var t = xe,
          r = t && n && n.id === t.id;
        xe = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (Me = null, r && t.observed === n.observed || n.onActivation(Re), Ce(), ge(Ce)) : (document.removeEventListener("focusin", Ae), document.removeEventListener("focusout", De), window.removeEventListener("focus", Le), window.removeEventListener("blur", Pe), Me = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = je(t.map((function(e) {
            return e.props
          }))), Be(n)
        }
        var i, c, a, f = function(o) {
          var i, c;

          function a() {
            return o.apply(this, arguments) || this
          }
          c = o, (i = a).prototype = Object.create(c.prototype), i.prototype.constructor = i, M(i, c), a.peek = function() {
            return n
          };
          var f = a.prototype;
          return f.componentDidMount = function() {
            t.push(this), r()
          }, f.componentDidUpdate = function() {
            r()
          }, f.componentWillUnmount = function() {
            var e = t.indexOf(this);
            t.splice(e, 1), r()
          }, f.render = function() {
            return u().createElement(e, this.props)
          }, a
        }(o.PureComponent);
        return i = f, c = "displayName", a = "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")", (c = function(e) {
          var n = function(e) {
            if ("object" != O(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" != O(t)) return t;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == O(n) ? n : n + ""
        }(c)) in i ? Object.defineProperty(i, c, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[c] = a, f
      })((function() {
        return null
      }));
      var je, Be, Ue = (0, o.forwardRef)((function(e, n) {
          return u().createElement(x, r({
            sideCar: Ge,
            ref: n
          }, e))
        })),
        We = x.propTypes || {};
      We.sideCar,
        function(e, n) {
          if (null == e) return {};
          var t = {};
          for (var r in e)
            if ({}.hasOwnProperty.call(e, r)) {
              if (-1 !== n.indexOf(r)) continue;
              t[r] = e[r]
            }
        }(We, ["sideCar"]), Ue.propTypes = {};
      const qe = Ue;
      var He = function(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          o = e.children,
          i = e.className,
          c = void 0 === i ? void 0 : i;
        return u().createElement("div", r({}, he(f, !t), {
          className: c
        }), o)
      };
      He.propTypes = {};
      const Ve = He;
      var Ye = function(e) {
        (0, o.useEffect)((function() {
          var n = !0;
          return y.useMedium((function(t) {
              var r = e && e.current;
              n && r && (t.focusInside(r) || t.moveFocusInside(r, null))
            })),
            function() {
              n = !1
            }
        }), [e])
      };

      function Ke(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          i = e.className,
          c = e.children,
          a = (0, o.useRef)(null);
        return Ye(t ? void 0 : a), u().createElement("div", r({}, he(f, !t), {
          ref: a,
          className: i
        }), c)
      }
      Ke.propTypes = {};
      const ze = Ke;
      var Je = function(e) {
        var n = e.children,
          t = e.className;
        return u().createElement("div", r({}, he(a, !0), {
          className: t
        }), n)
      };
      Je.propTypes = {};
      const Qe = Je;
      var Xe = function(e) {
          return e.map(Ee).filter(Boolean)
        },
        Ze = function(e) {
          return new Promise((function(n) {
            return y.useMedium((function() {
              n(e.apply(void 0, arguments))
            }))
          }))
        },
        $e = function() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          if (!n.length) throw new Error("useFocusController requires at least one target element");
          var u = (0, o.useRef)(n);
          return u.current = n, (0, o.useMemo)((function() {
            return {
              autoFocus: function(e) {
                return void 0 === e && (e = {}), Ze((function(n) {
                  return n.moveFocusInside(Xe(u.current), null, e)
                }))
              },
              focusNext: function(e) {
                return Ze((function(n) {
                  n.moveFocusInside(Xe(u.current), null), n.focusNextElement(document.activeElement, r({
                    scope: Xe(u.current)
                  }, e))
                }))
              },
              focusPrev: function(e) {
                return Ze((function(n) {
                  n.moveFocusInside(Xe(u.current), null), n.focusPrevElement(document.activeElement, r({
                    scope: Xe(u.current)
                  }, e))
                }))
              },
              focusFirst: function(e) {
                return Ze((function(n) {
                  n.focusFirstElement(Xe(u.current), e)
                }))
              },
              focusLast: function(e) {
                return Ze((function(n) {
                  n.focusLastElement(Xe(u.current), e)
                }))
              }
            }
          }), [])
        },
        en = function() {
          var e = (0, o.useContext)(h);
          if (!e) throw new Error("FocusLock is required to operate with FocusScope");
          return $e.apply(void 0, [e.observed].concat(e.shards))
        },
        nn = {
          emit: function(e) {
            for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
            for (var o = 0, u = this.events[e] || [], i = u.length; o < i; o++) u[o].apply(u, t)
          },
          events: {},
          on: function(e, n) {
            var t, r = this;
            return ((t = this.events)[e] || (t[e] = [])).push(n),
              function() {
                var t;
                r.events[e] = null == (t = r.events[e]) ? void 0 : t.filter((function(e) {
                  return n !== e
                }))
              }
          }
        },
        tn = 0,
        rn = function(e) {
          return nn.emit("assign", e.target)
        },
        on = function(e) {
          return nn.emit("reset", e.target)
        },
        un = function(e, n) {
          return e === n ? "self" : n.contains(e) ? "within" : "within-boundary"
        },
        cn = function(e) {
          void 0 === e && (e = {});
          var n = (0, o.useState)(!1),
            t = n[0],
            r = n[1],
            u = (0, o.useState)(""),
            i = u[0],
            c = u[1],
            a = (0, o.useRef)(null),
            f = (0, o.useRef)({}),
            d = (0, o.useRef)(!1);
          (0, o.useEffect)((function() {
            if (a.current) {
              var n = a.current === document.activeElement || a.current.contains(document.activeElement);
              r(n), c(un(document.activeElement, a.current)), n && e.onFocus && e.onFocus()
            }
          }), []);
          var s = (0, o.useCallback)((function(e) {
            f.current = {
              focused: !0,
              state: un(e.target, e.currentTarget)
            }
          }), []);
          return (0, o.useEffect)((function() {
            return tn || (document.addEventListener("focusin", rn), document.addEventListener("focusout", on)), tn += 1,
              function() {
                (tn -= 1) || (document.removeEventListener("focusin", rn), document.removeEventListener("focusout", on))
              }
          }), []), (0, o.useEffect)((function() {
            var n = nn.on("reset", (function() {
                f.current = {}
              })),
              t = nn.on("assign", (function() {
                var n = f.current.focused || !1;
                r(n), c(f.current.state || ""), n !== d.current && (d.current = n, n ? e.onFocus && e.onFocus() : e.onBlur && e.onBlur())
              }));
            return function() {
              n(), t()
            }
          }), []), {
            active: t,
            state: i,
            onFocus: s,
            ref: a
          }
        };
      const an = qe
    }
  }
]);