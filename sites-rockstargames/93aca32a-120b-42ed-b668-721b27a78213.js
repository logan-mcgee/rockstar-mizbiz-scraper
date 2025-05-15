! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      e = (new n.Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "93aca32a-120b-42ed-b668-721b27a78213", n._sentryDebugIdIdentifier = "sentry-dbid-93aca32a-120b-42ed-b668-721b27a78213")
  } catch (n) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6038], {
    16038: (n, e, t) => {
      t.r(e), t.d(e, {
        AutoFocusInside: () => Yn,
        FocusLockUI: () => M,
        FreeFocusInside: () => Xn,
        InFocusGuard: () => v,
        MoveFocusInside: () => Jn,
        default: () => ae,
        useFocusController: () => ne,
        useFocusInside: () => Kn,
        useFocusScope: () => ee,
        useFocusState: () => ce
      });
      var r = t(66146),
        o = t(62229),
        u = t.n(o),
        i = (t(57145), "data-focus-lock"),
        c = "data-focus-lock-disabled",
        a = "data-no-focus-lock",
        f = "data-autofocus-inside",
        d = t(23614),
        s = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        l = function(n) {
          var e = n.children,
            t = void 0 === e ? null : e;
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
      var m = t(19683),
        p = (0, m.C)({}, (function(n) {
          return {
            target: n.target,
            currentTarget: n.currentTarget
          }
        })),
        b = (0, m.C)(),
        y = (0, m.C)(),
        h = (0, m.f)({
          async: !0,
          ssr: "undefined" != typeof document
        }),
        g = (0, o.createContext)(void 0),
        E = [],
        w = (0, o.forwardRef)((function(n, e) {
          var t, a = (0, o.useState)(),
            f = a[0],
            l = a[1],
            v = (0, o.useRef)(),
            m = (0, o.useRef)(!1),
            y = (0, o.useRef)(null),
            w = (0, o.useState)({})[1],
            M = n.children,
            x = n.disabled,
            O = void 0 !== x && x,
            N = n.noFocusGuards,
            F = void 0 !== N && N,
            k = n.persistentFocus,
            I = void 0 !== k && k,
            S = n.crossFrame,
            T = void 0 === S || S,
            _ = n.autoFocus,
            A = void 0 === _ || _,
            C = (n.allowTextSelection, n.group),
            D = n.className,
            L = n.whiteList,
            P = n.hasPositiveIndices,
            R = n.shards,
            G = void 0 === R ? E : R,
            j = n.as,
            B = void 0 === j ? "div" : j,
            U = n.lockProps,
            W = void 0 === U ? {} : U,
            q = n.sideCar,
            H = n.returnFocus,
            V = void 0 !== H && H,
            Y = n.focusOptions,
            K = n.onActivation,
            z = n.onDeactivation,
            J = (0, o.useState)({})[0],
            Q = (0, o.useCallback)((function(n) {
              var e = n.captureFocusRestore;
              if (!y.current) {
                var t, r = null == (t = document) ? void 0 : t.activeElement;
                y.current = r, r !== document.body && (y.current = e(r))
              }
              v.current && K && K(v.current), m.current = !0, w()
            }), [K]),
            X = (0, o.useCallback)((function() {
              m.current = !1, z && z(v.current), w()
            }), [z]),
            Z = (0, o.useCallback)((function(n) {
              var e = y.current;
              if (e) {
                var t = ("function" == typeof e ? e() : e) || document.body,
                  r = "function" == typeof V ? V(t) : V;
                if (r) {
                  var o = "object" == typeof r ? r : void 0;
                  y.current = null, n ? Promise.resolve().then((function() {
                    return t.focus(o)
                  })) : t.focus(o)
                }
              }
            }), [V]),
            $ = (0, o.useCallback)((function(n) {
              m.current && p.useMedium(n)
            }), []),
            nn = b.useMedium,
            en = (0, o.useCallback)((function(n) {
              v.current !== n && (v.current = n, l(n))
            }), []),
            tn = (0, r.A)(((t = {})[c] = O && "disabled", t[i] = C, t), W),
            rn = !0 !== F,
            on = rn && "tail" !== F,
            un = (0, d.S)([e, en]),
            cn = (0, o.useMemo)((function() {
              return {
                observed: v,
                shards: G,
                enabled: !O,
                active: m.current
              }
            }), [O, m.current, G, f]);
          return u().createElement(o.Fragment, null, rn && [u().createElement("div", {
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
            sideCar: h,
            observed: f,
            disabled: O,
            persistentFocus: I,
            crossFrame: T,
            autoFocus: A,
            whiteList: L,
            shards: G,
            onActivation: Q,
            onDeactivation: X,
            returnFocus: Z,
            focusOptions: Y,
            noFocusGuards: F
          }), u().createElement(B, (0, r.A)({
            ref: un
          }, tn, {
            className: D,
            onBlur: nn,
            onFocus: $
          }), u().createElement(g.Provider, {
            value: cn
          }, M)), on && u().createElement("div", {
            "data-focus-guard": !0,
            tabIndex: O ? -1 : 0,
            style: s
          }))
        }));
      w.propTypes = {};
      const M = w;

      function x(n, e) {
        return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, e) {
          return n.__proto__ = e, n
        }, x(n, e)
      }

      function O(n) {
        return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
          return typeof n
        } : function(n) {
          return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, O(n)
      }
      var N = function(n) {
          for (var e = Array(n.length), t = 0; t < n.length; ++t) e[t] = n[t];
          return e
        },
        F = function(n) {
          return Array.isArray(n) ? n : [n]
        },
        k = function(n) {
          return Array.isArray(n) ? n[0] : n
        },
        I = function(n) {
          return n.parentNode && n.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? n.parentNode.host : n.parentNode
        },
        S = function(n) {
          return n === document || n && n.nodeType === Node.DOCUMENT_NODE
        },
        T = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !n || S(n) || ! function(n) {
              if (n.nodeType !== Node.ELEMENT_NODE) return !1;
              var e = window.getComputedStyle(n, null);
              return !(!e || !e.getPropertyValue || "none" !== e.getPropertyValue("display") && "hidden" !== e.getPropertyValue("visibility"))
            }(n) && ! function(n) {
              return n.hasAttribute("inert")
            }(n) && e(I(n))
          }(e, T.bind(void 0, n));
          return n.set(e, r), r
        },
        _ = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !(n && !S(n)) || !!L(n) && e(I(n))
          }(e, _.bind(void 0, n));
          return n.set(e, r), r
        },
        A = function(n) {
          return n.dataset
        },
        C = function(n) {
          return "INPUT" === n.tagName
        },
        D = function(n) {
          return C(n) && "radio" === n.type
        },
        L = function(n) {
          var e = n.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(e)
        },
        P = function(n) {
          var e;
          return Boolean(n && (null === (e = A(n)) || void 0 === e ? void 0 : e.focusGuard))
        },
        R = function(n) {
          return !P(n)
        },
        G = function(n) {
          return Boolean(n)
        },
        j = function(n, e) {
          var t = Math.max(0, n.tabIndex),
            r = Math.max(0, e.tabIndex),
            o = t - r,
            u = n.index - e.index;
          if (o) {
            if (!t) return 1;
            if (!r) return -1
          }
          return o || u
        },
        B = function(n, e, t) {
          return N(n).map((function(n, e) {
            var r = function(n) {
              return n.tabIndex < 0 && !n.hasAttribute("tabindex") ? 0 : n.tabIndex
            }(n);
            return {
              node: n,
              index: e,
              tabIndex: t && -1 === r ? (n.dataset || {}).focusGuard ? 0 : -1 : r
            }
          })).filter((function(n) {
            return !e || n.tabIndex >= 0
          })).sort(j)
        },
        U = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        W = "".concat(U, ", [data-focus-guard]"),
        q = function(n, e) {
          return N((n.shadowRoot || n).children).reduce((function(n, t) {
            return n.concat(t.matches(e ? W : U) ? [t] : [], q(t))
          }), [])
        },
        H = function(n, e) {
          return n.reduce((function(n, t) {
            var r, o = q(t, e),
              u = (r = []).concat.apply(r, o.map((function(n) {
                return function(n, e) {
                  var t;
                  return n instanceof HTMLIFrameElement && (null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body) ? H([n.contentDocument.body], e) : [n]
                }(n, e)
              })));
            return n.concat(u, t.parentNode ? N(t.parentNode.querySelectorAll(U)).filter((function(n) {
              return n === t
            })) : [])
          }), [])
        },
        V = function(n, e) {
          return N(n).filter((function(n) {
            return T(e, n)
          })).filter((function(n) {
            return function(n) {
              return !((C(n) || function(n) {
                return "BUTTON" === n.tagName
              }(n)) && ("hidden" === n.type || n.disabled))
            }(n)
          }))
        },
        Y = function(n, e) {
          return void 0 === e && (e = new Map), N(n).filter((function(n) {
            return _(e, n)
          }))
        },
        K = function(n, e, t) {
          return B(V(H(n, t), e), !0, t)
        },
        z = function(n, e) {
          return B(V(H(n), e), !1)
        },
        J = function(n, e) {
          return n.shadowRoot ? J(n.shadowRoot, e) : !(void 0 === Object.getPrototypeOf(n).contains || !Object.getPrototypeOf(n).contains.call(n, e)) || N(n.children).some((function(n) {
            var t;
            if (n instanceof HTMLIFrameElement) {
              var r = null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && J(r, e)
            }
            return J(n, e)
          }))
        },
        Q = function(n) {
          if (void 0 === n && (n = document), n && n.activeElement) {
            var e = n.activeElement;
            return e.shadowRoot ? Q(e.shadowRoot) : e instanceof HTMLIFrameElement && function() {
              try {
                return e.contentWindow.document
              } catch (n) {
                return
              }
            }() ? Q(e.contentWindow.document) : e
          }
        },
        X = function(n) {
          return n.parentNode ? X(n.parentNode) : n
        },
        Z = function(n) {
          return F(n).filter(Boolean).reduce((function(n, e) {
            var t = e.getAttribute(i);
            return n.push.apply(n, t ? function(n) {
              for (var e = new Set, t = n.length, r = 0; r < t; r += 1)
                for (var o = r + 1; o < t; o += 1) {
                  var u = n[r].compareDocumentPosition(n[o]);
                  (u & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && e.add(o), (u & Node.DOCUMENT_POSITION_CONTAINS) > 0 && e.add(r)
                }
              return n.filter((function(n, t) {
                return !e.has(t)
              }))
            }(N(X(e).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(c, '="disabled"])')))) : [e]), n
          }), [])
        },
        $ = function(n, e) {
          return void 0 === e && (e = Q(k(n).ownerDocument)), !(!e || e.dataset && e.dataset.focusGuard) && Z(n).some((function(n) {
            return J(n, e) || function(n, e) {
              return Boolean(N(n.querySelectorAll("iframe")).some((function(n) {
                return function(n, e) {
                  return n === e
                }(n, e)
              })))
            }(n, e)
          }))
        },
        nn = function(n, e) {
          n && ("focus" in n && n.focus(e), "contentWindow" in n && n.contentWindow && n.contentWindow.focus())
        },
        en = function(n, e) {
          return D(n) && n.name ? function(n, e) {
            return e.filter(D).filter((function(e) {
              return e.name === n.name
            })).filter((function(n) {
              return n.checked
            }))[0] || n
          }(n, e) : n
        },
        tn = function(n) {
          return n[0] && n.length > 1 ? en(n[0], n) : n[0]
        },
        rn = function(n, e) {
          return n.indexOf(en(e, n))
        },
        on = "NEW_FOCUS",
        un = function(n, e, t) {
          var r, o = n.map((function(n) {
              return n.node
            })),
            u = Y(o.filter((r = t, function(n) {
              var e, t = null === (e = A(n)) || void 0 === e ? void 0 : e.autofocus;
              return n.autofocus || void 0 !== t && "false" !== t || r.indexOf(n) >= 0
            })));
          return u && u.length ? tn(u) : tn(Y(e))
        },
        cn = function(n, e) {
          return void 0 === e && (e = []), e.push(n), n.parentNode && cn(n.parentNode.host || n.parentNode, e), e
        },
        an = function(n, e) {
          for (var t = cn(n), r = cn(e), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        fn = function(n, e, t) {
          var r = F(n),
            o = F(e),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(n) {
            i = an(i || n, n) || i, t.filter(Boolean).forEach((function(n) {
              var e = an(u, n);
              e && (i = !i || J(e, i) ? e : an(e, i))
            }))
          })), i
        },
        dn = function(n, e) {
          return n.reduce((function(n, t) {
            return n.concat(function(n, e) {
              return V((t = n.querySelectorAll("[".concat(f, "]")), N(t).map((function(n) {
                return H([n])
              })).reduce((function(n, e) {
                return n.concat(e)
              }), [])), e);
              var t
            }(t, e))
          }), [])
        },
        sn = function(n, e) {
          var t = Q(F(n).length > 0 ? document : k(n).ownerDocument),
            r = Z(n).filter(R),
            o = fn(t || n, n, r),
            u = new Map,
            i = z(r, u),
            c = i.filter((function(n) {
              var e = n.node;
              return R(e)
            }));
          if (c[0]) {
            var a, f, d, s = z([o], u).map((function(n) {
                return n.node
              })),
              l = (a = s, f = c, d = new Map, f.forEach((function(n) {
                return d.set(n.node, n)
              })), a.map((function(n) {
                return d.get(n)
              })).filter(G)),
              v = l.map((function(n) {
                return n.node
              })),
              m = l.filter((function(n) {
                return n.tabIndex >= 0
              })).map((function(n) {
                return n.node
              })),
              p = function(n, e, t, r, o) {
                var u = n.length,
                  i = n[0],
                  c = n[u - 1],
                  a = P(r);
                if (!(r && n.indexOf(r) >= 0)) {
                  var f = void 0 !== r ? t.indexOf(r) : -1,
                    d = o ? t.indexOf(o) : f,
                    s = o ? n.indexOf(o) : -1;
                  if (-1 === f) return -1 !== s ? s : on;
                  if (-1 === s) return on;
                  var l, v, m = f - d,
                    p = t.indexOf(i),
                    b = t.indexOf(c),
                    y = (l = t, v = new Set, l.forEach((function(n) {
                      return v.add(en(n, l))
                    })), l.filter((function(n) {
                      return v.has(n)
                    }))),
                    h = void 0 !== r ? y.indexOf(r) : -1,
                    g = o ? y.indexOf(o) : h,
                    E = y.filter((function(n) {
                      return n.tabIndex >= 0
                    })),
                    w = void 0 !== r ? E.indexOf(r) : -1,
                    M = o ? E.indexOf(o) : w,
                    x = w >= 0 && M >= 0 ? M - w : g - h;
                  if (!m && s >= 0) return s;
                  if (0 === e.length) return s;
                  var O = rn(n, e[0]),
                    N = rn(n, e[e.length - 1]);
                  return f <= p && a && Math.abs(m) > 1 ? N : f >= b && a && Math.abs(m) > 1 ? O : m && Math.abs(x) > 1 ? s : f <= p ? N : f > b ? O : m ? Math.abs(m) > 1 ? s : (u + s + m) % u : void 0
                }
              }(v, m, s, t, e);
            if (p === on) {
              var b = un(i, m, dn(r, u)) || un(i, v, dn(r, u));
              return b ? {
                node: b
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === p ? p : l[p]
          }
        },
        ln = 0,
        vn = !1,
        mn = function(n, e, t) {
          void 0 === t && (t = {});
          var r = sn(n, e);
          if (!vn && r) {
            if (ln > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), vn = !0, void setTimeout((function() {
              vn = !1
            }), 1);
            ln++, nn(r.node, t.focusOptions), ln--
          }
        };

      function pn(n) {
        if (!n) return null;
        if ("undefined" == typeof WeakRef) return function() {
          return n || null
        };
        var e = n ? new WeakRef(n) : null;
        return function() {
          return (null == e ? void 0 : e.deref()) || null
        }
      }
      var bn = function(n) {
          var e = function(n) {
            if (!n) return null;
            for (var e = [], t = n; t && t !== document.body;) e.push({
              current: pn(t),
              parent: pn(t.parentElement),
              left: pn(t.previousElementSibling),
              right: pn(t.nextElementSibling)
            }), t = t.parentElement;
            return {
              element: pn(n),
              stack: e,
              ownerDocument: n.ownerDocument
            }
          }(n);
          return function() {
            return function(n) {
              var e, t, r, o, u;
              if (n)
                for (var i = n.stack, c = n.ownerDocument, a = new Map, f = 0, d = i; f < d.length; f++) {
                  var s = d[f],
                    l = null === (e = s.parent) || void 0 === e ? void 0 : e.call(s);
                  if (l && c.contains(l)) {
                    for (var v = null === (t = s.left) || void 0 === t ? void 0 : t.call(s), m = s.current(), p = l.contains(m) ? m : void 0, b = null === (r = s.right) || void 0 === r ? void 0 : r.call(s), y = K([l], a), h = null !== (u = null !== (o = null != p ? p : null == v ? void 0 : v.nextElementSibling) && void 0 !== o ? o : b) && void 0 !== u ? u : v; h;) {
                      for (var g = 0, E = y; g < E.length; g++) {
                        var w = E[g];
                        if (null == h ? void 0 : h.contains(w.node)) return w.node
                      }
                      h = h.nextElementSibling
                    }
                    if (y.length) return y[0].node
                  }
                }
            }(e)
          }
        },
        yn = function(n, e, t) {
          void 0 === e && (e = {});
          var r = function(n) {
              return Object.assign({
                scope: document.body,
                cycle: !0,
                onlyTabbable: !0
              }, n)
            }(e),
            o = function(n, e, t) {
              if (!n || !e) return console.error("no element or scope given"), {};
              var r = F(e);
              if (r.every((function(e) {
                  return !J(e, n)
                }))) return console.error("Active element is not contained in the scope"), {};
              var o = t ? K(r, new Map) : z(r, new Map),
                u = o.findIndex((function(e) {
                  return e.node === n
                }));
              return -1 !== u ? {
                prev: o[u - 1],
                next: o[u + 1],
                first: o[0],
                last: o[o.length - 1]
              } : void 0
            }(n, r.scope, r.onlyTabbable);
          if (o) {
            var u = t(o, r.cycle);
            u && nn(u.node, r.focusOptions)
          }
        },
        hn = function(n, e, t) {
          var r, o, u, i, c = (o = n, u = null === (r = e.onlyTabbable) || void 0 === r || r, {
            first: (i = u ? K(F(o), new Map) : z(F(o), new Map))[0],
            last: i[i.length - 1]
          })[t];
          c && nn(c.node, e.focusOptions)
        };

      function gn(n) {
        setTimeout(n, 1)
      }
      var En = function(n, e) {
          var t = {};
          return t[n] = e, t
        },
        wn = function(n) {
          return n && "current" in n ? n.current : n
        },
        Mn = function() {
          return document && document.activeElement === document.body
        },
        xn = null,
        On = null,
        Nn = function() {
          return null
        },
        Fn = null,
        kn = !1,
        In = !1,
        Sn = function() {
          return !0
        };

      function Tn(n, e, t, r) {
        var o = null,
          u = n;
        do {
          var i = r[u];
          if (i.guard) i.node.dataset.focusAutoGuard && (o = i);
          else {
            if (!i.lockItem) break;
            if (u !== n) return;
            o = null
          }
        } while ((u += t) !== e);
        o && (o.node.tabIndex = 0)
      }
      var _n = function n(e, t, r) {
          return t && (t.host === e && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && n(e, t.parentNode, r))
        },
        An = function(n) {
          return z(n, new Map)
        },
        Cn = function() {
          var n, e, t, r, o, u, i, c = !1;
          if (xn) {
            var f = xn,
              d = f.observed,
              s = f.persistentFocus,
              l = f.autoFocus,
              v = f.shards,
              m = f.crossFrame,
              p = f.focusOptions,
              b = f.noFocusGuards,
              y = d || Fn && Fn.portaledElement;
            if (Mn() && On && On !== document.body && (!document.body.contains(On) || !An([(i = On).parentNode]).some((function(n) {
                return n.node === i
              })))) {
              var h = Nn();
              h && h.focus()
            }
            var g = document && document.activeElement;
            if (y) {
              var E = [y].concat(v.map(wn).filter(Boolean));
              if (g && ! function(n) {
                  return (xn.whiteList || Sn)(n)
                }(g) || (s || function() {
                  if (!(m ? Boolean(kn) : "meanwhile" === kn) || !b || !On || In) return !1;
                  var n = An(E),
                    e = n.findIndex((function(n) {
                      return n.node === On
                    }));
                  return 0 === e || e === n.length - 1
                }() || !(Mn() || function(n) {
                  void 0 === n && (n = document);
                  var e = Q(n);
                  return !!e && N(n.querySelectorAll("[".concat(a, "]"))).some((function(n) {
                    return J(n, e)
                  }))
                }()) || !On && l) && (y && !($(E) || g && function(n, e) {
                  return e.some((function(e) {
                    return _n(n, e, e)
                  }))
                }(g, E) || (u = g, Fn && Fn.portaledElement === u)) && (document && !On && g && !l ? (g.blur && g.blur(), document.body.focus()) : (c = mn(E, On, {
                  focusOptions: p
                }), Fn = {})), (On = document && document.activeElement) !== document.body && (Nn = bn(On)), kn = !1), document && g !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                var w = document && document.activeElement,
                  M = (e = Z(n = E).filter(R), t = fn(n, n, e), r = B(H([t], !0), !0, !0), o = H(e, !1), r.map((function(n) {
                    var e = n.node;
                    return {
                      node: e,
                      index: n.index,
                      lockItem: o.indexOf(e) >= 0,
                      guard: P(e)
                    }
                  }))),
                  x = M.map((function(n) {
                    return n.node
                  })).indexOf(w);
                x > -1 && (M.filter((function(n) {
                  var e = n.guard,
                    t = n.node;
                  return e && t.dataset.focusAutoGuard
                })).forEach((function(n) {
                  return n.node.removeAttribute("tabIndex")
                })), Tn(x, M.length, 1, M), Tn(x, -1, -1, M))
              }
            }
          }
          return c
        },
        Dn = function(n) {
          Cn() && n && (n.stopPropagation(), n.preventDefault())
        },
        Ln = function() {
          return gn(Cn)
        },
        Pn = function() {
          In = !0
        },
        Rn = function() {
          In = !1, kn = "just", gn((function() {
            kn = "meanwhile"
          }))
        },
        Gn = {
          moveFocusInside: mn,
          focusInside: $,
          focusNextElement: function(n, e) {
            void 0 === e && (e = {}), yn(n, e, (function(n, e) {
              var t = n.next,
                r = n.first;
              return t || e && r
            }))
          },
          focusPrevElement: function(n, e) {
            void 0 === e && (e = {}), yn(n, e, (function(n, e) {
              var t = n.prev,
                r = n.last;
              return t || e && r
            }))
          },
          focusFirstElement: function(n, e) {
            void 0 === e && (e = {}), hn(n, e, "first")
          },
          focusLastElement: function(n, e) {
            void 0 === e && (e = {}), hn(n, e, "last")
          },
          captureFocusRestore: bn
        };
      p.assignSyncMedium((function(n) {
        var e = n.target,
          t = n.currentTarget;
        t.contains(e) || (Fn = {
          observerNode: t,
          portaledElement: e
        })
      })), b.assignMedium(Ln), y.assignMedium((function(n) {
        return n(Gn)
      }));
      const jn = (Bn = function(n) {
        return n.filter((function(n) {
          return !n.disabled
        }))
      }, Un = function(n) {
        var e = n.slice(-1)[0];
        e && !xn && (document.addEventListener("focusin", Dn), document.addEventListener("focusout", Ln), window.addEventListener("focus", Pn), window.addEventListener("blur", Rn));
        var t = xn,
          r = t && e && e.id === t.id;
        xn = e, t && !r && (t.onDeactivation(), n.filter((function(n) {
          return n.id === t.id
        })).length || t.returnFocus(!e)), e ? (On = null, r && t.observed === e.observed || e.onActivation(Gn), Cn(), gn(Cn)) : (document.removeEventListener("focusin", Dn), document.removeEventListener("focusout", Ln), window.removeEventListener("focus", Pn), window.removeEventListener("blur", Rn), On = null)
      }, function(n) {
        var e, t = [];

        function r() {
          e = Bn(t.map((function(n) {
            return n.props
          }))), Un(e)
        }
        var i, c, a, f = function(o) {
          var i, c;

          function a() {
            return o.apply(this, arguments) || this
          }
          c = o, (i = a).prototype = Object.create(c.prototype), i.prototype.constructor = i, x(i, c), a.peek = function() {
            return e
          };
          var f = a.prototype;
          return f.componentDidMount = function() {
            t.push(this), r()
          }, f.componentDidUpdate = function() {
            r()
          }, f.componentWillUnmount = function() {
            var n = t.indexOf(this);
            t.splice(n, 1), r()
          }, f.render = function() {
            return u().createElement(n, this.props)
          }, a
        }(o.PureComponent);
        return i = f, c = "displayName", a = "SideEffect(" + function(n) {
          return n.displayName || n.name || "Component"
        }(n) + ")", (c = function(n) {
          var e = function(n) {
            if ("object" != O(n) || !n) return n;
            var e = n[Symbol.toPrimitive];
            if (void 0 !== e) {
              var t = e.call(n, "string");
              if ("object" != O(t)) return t;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(n)
          }(n);
          return "symbol" == O(e) ? e : e + ""
        }(c)) in i ? Object.defineProperty(i, c, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[c] = a, f
      })((function() {
        return null
      }));
      var Bn, Un, Wn = (0, o.forwardRef)((function(n, e) {
          return u().createElement(M, (0, r.A)({
            sideCar: jn,
            ref: e
          }, n))
        })),
        qn = M.propTypes || {};
      qn.sideCar,
        function(n, e) {
          if (null == n) return {};
          var t = {};
          for (var r in n)
            if ({}.hasOwnProperty.call(n, r)) {
              if (-1 !== e.indexOf(r)) continue;
              t[r] = n[r]
            }
        }(qn, ["sideCar"]), Wn.propTypes = {};
      const Hn = Wn;
      var Vn = function(n) {
        var e = n.disabled,
          t = void 0 !== e && e,
          o = n.children,
          i = n.className,
          c = void 0 === i ? void 0 : i;
        return u().createElement("div", (0, r.A)({}, En(f, !t), {
          className: c
        }), o)
      };
      Vn.propTypes = {};
      const Yn = Vn;
      var Kn = function(n) {
        (0, o.useEffect)((function() {
          var e = !0;
          return y.useMedium((function(t) {
              var r = n && n.current;
              e && r && (t.focusInside(r) || t.moveFocusInside(r, null))
            })),
            function() {
              e = !1
            }
        }), [n])
      };

      function zn(n) {
        var e = n.disabled,
          t = void 0 !== e && e,
          i = n.className,
          c = n.children,
          a = (0, o.useRef)(null);
        return Kn(t ? void 0 : a), u().createElement("div", (0, r.A)({}, En(f, !t), {
          ref: a,
          className: i
        }), c)
      }
      zn.propTypes = {};
      const Jn = zn;
      var Qn = function(n) {
        var e = n.children,
          t = n.className;
        return u().createElement("div", (0, r.A)({}, En(a, !0), {
          className: t
        }), e)
      };
      Qn.propTypes = {};
      const Xn = Qn;
      var Zn = function(n) {
          return n.map(wn).filter(Boolean)
        },
        $n = function(n) {
          return new Promise((function(e) {
            return y.useMedium((function() {
              e(n.apply(void 0, arguments))
            }))
          }))
        },
        ne = function() {
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
          if (!e.length) throw new Error("useFocusController requires at least one target element");
          var u = (0, o.useRef)(e);
          return u.current = e, (0, o.useMemo)((function() {
            return {
              autoFocus: function(n) {
                return void 0 === n && (n = {}), $n((function(e) {
                  return e.moveFocusInside(Zn(u.current), null, n)
                }))
              },
              focusNext: function(n) {
                return $n((function(e) {
                  e.moveFocusInside(Zn(u.current), null), e.focusNextElement(document.activeElement, (0, r.A)({
                    scope: Zn(u.current)
                  }, n))
                }))
              },
              focusPrev: function(n) {
                return $n((function(e) {
                  e.moveFocusInside(Zn(u.current), null), e.focusPrevElement(document.activeElement, (0, r.A)({
                    scope: Zn(u.current)
                  }, n))
                }))
              },
              focusFirst: function(n) {
                return $n((function(e) {
                  e.focusFirstElement(Zn(u.current), n)
                }))
              },
              focusLast: function(n) {
                return $n((function(e) {
                  e.focusLastElement(Zn(u.current), n)
                }))
              }
            }
          }), [])
        },
        ee = function() {
          var n = (0, o.useContext)(g);
          if (!n) throw new Error("FocusLock is required to operate with FocusScope");
          return ne.apply(void 0, [n.observed].concat(n.shards))
        },
        te = {
          emit: function(n) {
            for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            for (var o = 0, u = this.events[n] || [], i = u.length; o < i; o++) u[o].apply(u, t)
          },
          events: {},
          on: function(n, e) {
            var t, r = this;
            return ((t = this.events)[n] || (t[n] = [])).push(e),
              function() {
                var t;
                r.events[n] = null == (t = r.events[n]) ? void 0 : t.filter((function(n) {
                  return e !== n
                }))
              }
          }
        },
        re = 0,
        oe = function(n) {
          return te.emit("assign", n.target)
        },
        ue = function(n) {
          return te.emit("reset", n.target)
        },
        ie = function(n, e) {
          return n === e ? "self" : e.contains(n) ? "within" : "within-boundary"
        },
        ce = function(n) {
          void 0 === n && (n = {});
          var e = (0, o.useState)(!1),
            t = e[0],
            r = e[1],
            u = (0, o.useState)(""),
            i = u[0],
            c = u[1],
            a = (0, o.useRef)(null),
            f = (0, o.useRef)({}),
            d = (0, o.useRef)(!1);
          (0, o.useEffect)((function() {
            if (a.current) {
              var e = a.current === document.activeElement || a.current.contains(document.activeElement);
              r(e), c(ie(document.activeElement, a.current)), e && n.onFocus && n.onFocus()
            }
          }), []);
          var s = (0, o.useCallback)((function(n) {
            f.current = {
              focused: !0,
              state: ie(n.target, n.currentTarget)
            }
          }), []);
          return (0, o.useEffect)((function() {
            return re || (document.addEventListener("focusin", oe), document.addEventListener("focusout", ue)), re += 1,
              function() {
                (re -= 1) || (document.removeEventListener("focusin", oe), document.removeEventListener("focusout", ue))
              }
          }), []), (0, o.useEffect)((function() {
            var e = te.on("reset", (function() {
                f.current = {}
              })),
              t = te.on("assign", (function() {
                var e = f.current.focused || !1;
                r(e), c(f.current.state || ""), e !== d.current && (d.current = e, e ? n.onFocus && n.onFocus() : n.onBlur && n.onBlur())
              }));
            return function() {
              e(), t()
            }
          }), []), {
            active: t,
            state: i,
            onFocus: s,
            ref: a
          }
        };
      const ae = Hn
    },
    19683: (n, e, t) => {
      t.d(e, {
        C: () => i,
        f: () => c
      });
      var r = t(23514);

      function o(n) {
        return n
      }

      function u(n, e) {
        void 0 === e && (e = o);
        var t = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return t.length ? t[t.length - 1] : n
          },
          useMedium: function(n) {
            var o = e(n, r);
            return t.push(o),
              function() {
                t = t.filter((function(n) {
                  return n !== o
                }))
              }
          },
          assignSyncMedium: function(n) {
            for (r = !0; t.length;) {
              var e = t;
              t = [], e.forEach(n)
            }
            t = {
              push: function(e) {
                return n(e)
              },
              filter: function() {
                return t
              }
            }
          },
          assignMedium: function(n) {
            r = !0;
            var e = [];
            if (t.length) {
              var o = t;
              t = [], o.forEach(n), e = t
            }
            var u = function() {
                var t = e;
                e = [], t.forEach(n)
              },
              i = function() {
                return Promise.resolve().then(u)
              };
            i(), t = {
              push: function(n) {
                e.push(n), i()
              },
              filter: function(n) {
                return e = e.filter(n), t
              }
            }
          }
        }
      }

      function i(n, e) {
        return void 0 === e && (e = o), u(n, e)
      }

      function c(n) {
        void 0 === n && (n = {});
        var e = u(null);
        return e.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, n), e
      }
    },
    23614: (n, e, t) => {
      t.d(e, {
        S: () => c
      });
      var r = t(62229);

      function o(n, e) {
        return "function" == typeof n ? n(e) : n && (n.current = e), n
      }
      var u = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        i = new WeakMap;

      function c(n, e) {
        var t, c, a, f = (t = e || null, c = function(e) {
          return n.forEach((function(n) {
            return o(n, e)
          }))
        }, (a = (0, r.useState)((function() {
          return {
            value: t,
            callback: c,
            facade: {
              get current() {
                return a.value
              },
              set current(n) {
                var e = a.value;
                e !== n && (a.value = n, a.callback(n, e))
              }
            }
          }
        }))[0]).callback = c, a.facade);
        return u((function() {
          var e = i.get(f);
          if (e) {
            var t = new Set(e),
              r = new Set(n),
              u = f.current;
            t.forEach((function(n) {
              r.has(n) || o(n, null)
            })), r.forEach((function(n) {
              t.has(n) || o(n, u)
            }))
          }
          i.set(f, n)
        }), [n]), f
      }
    },
    66146: (n, e, t) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r])
          }
          return n
        }, r.apply(null, arguments)
      }
      t.d(e, {
        A: () => r
      })
    }
  }
]);