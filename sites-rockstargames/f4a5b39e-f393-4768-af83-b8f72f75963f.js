try {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new n.Error).stack;
  e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "f4a5b39e-f393-4768-af83-b8f72f75963f", n._sentryDebugIdIdentifier = "sentry-dbid-f4a5b39e-f393-4768-af83-b8f72f75963f")
} catch (n) {} {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[(new n.Error).stack] = Object.assign({}, n._sentryModuleMetadata[(new n.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6038], {
    16038: (n, e, t) => {
      t.r(e), t.d(e, {
        AutoFocusInside: () => Yn,
        FocusLockUI: () => x,
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
        s = t(23614),
        d = {
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
            style: d
          }), t, t && u().createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: d
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
        h = (0, m.C)(),
        y = (0, m.f)({
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
            h = (0, o.useRef)(null),
            w = (0, o.useState)({})[1],
            x = n.children,
            O = n.disabled,
            N = void 0 !== O && O,
            F = n.noFocusGuards,
            M = void 0 !== F && F,
            k = n.persistentFocus,
            I = void 0 !== k && k,
            S = n.crossFrame,
            T = void 0 === S || S,
            A = n.autoFocus,
            C = void 0 === A || A,
            _ = (n.allowTextSelection, n.group),
            D = n.className,
            L = n.whiteList,
            P = n.hasPositiveIndices,
            R = n.shards,
            j = void 0 === R ? E : R,
            B = n.as,
            G = void 0 === B ? "div" : B,
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
              if (!h.current) {
                var t, r = null == (t = document) ? void 0 : t.activeElement;
                h.current = r, r !== document.body && (h.current = e(r))
              }
              v.current && K && K(v.current), m.current = !0, w()
            }), [K]),
            X = (0, o.useCallback)((function() {
              m.current = !1, z && z(v.current), w()
            }), [z]),
            Z = (0, o.useCallback)((function(n) {
              var e = h.current;
              if (e) {
                var t = ("function" == typeof e ? e() : e) || document.body,
                  r = "function" == typeof V ? V(t) : V;
                if (r) {
                  var o = "object" == typeof r ? r : void 0;
                  h.current = null, n ? Promise.resolve().then((function() {
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
            tn = (0, r.A)(((t = {})[c] = N && "disabled", t[i] = _, t), W),
            rn = !0 !== M,
            on = rn && "tail" !== M,
            un = (0, s.S)([e, en]),
            cn = (0, o.useMemo)((function() {
              return {
                observed: v,
                shards: j,
                enabled: !N,
                active: m.current
              }
            }), [N, m.current, j, f]);
          return u().createElement(o.Fragment, null, rn && [u().createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: N ? -1 : 0,
            style: d
          }), P ? u().createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: N ? -1 : 1,
            style: d
          }) : null], !N && u().createElement(q, {
            id: J,
            sideCar: y,
            observed: f,
            disabled: N,
            persistentFocus: I,
            crossFrame: T,
            autoFocus: C,
            whiteList: L,
            shards: j,
            onActivation: Q,
            onDeactivation: X,
            returnFocus: Z,
            focusOptions: Y,
            noFocusGuards: M
          }), u().createElement(G, (0, r.A)({
            ref: un
          }, tn, {
            className: D,
            onBlur: nn,
            onFocus: $
          }), u().createElement(g.Provider, {
            value: cn
          }, x)), on && u().createElement("div", {
            "data-focus-guard": !0,
            tabIndex: N ? -1 : 0,
            style: d
          }))
        }));
      w.propTypes = {};
      const x = w;

      function O(n, e) {
        return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, e) {
          return n.__proto__ = e, n
        }, O(n, e)
      }

      function N(n) {
        return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
          return typeof n
        } : function(n) {
          return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, N(n)
      }
      var F = function(n) {
          for (var e = Array(n.length), t = 0; t < n.length; ++t) e[t] = n[t];
          return e
        },
        M = function(n) {
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
        A = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !(n && !S(n)) || !!L(n) && e(I(n))
          }(e, A.bind(void 0, n));
          return n.set(e, r), r
        },
        C = function(n) {
          return n.dataset
        },
        _ = function(n) {
          return "INPUT" === n.tagName
        },
        D = function(n) {
          return _(n) && "radio" === n.type
        },
        L = function(n) {
          var e = n.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(e)
        },
        P = function(n) {
          var e;
          return Boolean(n && (null === (e = C(n)) || void 0 === e ? void 0 : e.focusGuard))
        },
        R = function(n) {
          return !P(n)
        },
        j = function(n) {
          return Boolean(n)
        },
        B = function(n, e) {
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
        G = function(n, e, t) {
          return F(n).map((function(n, e) {
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
          })).sort(B)
        },
        U = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        W = "".concat(U, ", [data-focus-guard]"),
        q = function(n, e) {
          return F((n.shadowRoot || n).children).reduce((function(n, t) {
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
            return n.concat(u, t.parentNode ? F(t.parentNode.querySelectorAll(U)).filter((function(n) {
              return n === t
            })) : [])
          }), [])
        },
        V = function(n, e) {
          return F(n).filter((function(n) {
            return T(e, n)
          })).filter((function(n) {
            return function(n) {
              return !((_(n) || function(n) {
                return "BUTTON" === n.tagName
              }(n)) && ("hidden" === n.type || n.disabled))
            }(n)
          }))
        },
        Y = function(n, e) {
          return void 0 === e && (e = new Map), F(n).filter((function(n) {
            return A(e, n)
          }))
        },
        K = function(n, e, t) {
          return G(V(H(n, t), e), !0, t)
        },
        z = function(n, e) {
          return G(V(H(n), e), !1)
        },
        J = function(n, e) {
          return n.shadowRoot ? J(n.shadowRoot, e) : !(void 0 === Object.getPrototypeOf(n).contains || !Object.getPrototypeOf(n).contains.call(n, e)) || F(n.children).some((function(n) {
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
          return M(n).filter(Boolean).reduce((function(n, e) {
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
            }(F(X(e).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(c, '="disabled"])')))) : [e]), n
          }), [])
        },
        $ = function(n, e) {
          return void 0 === e && (e = Q(k(n).ownerDocument)), !(!e || e.dataset && e.dataset.focusGuard) && Z(n).some((function(n) {
            return J(n, e) || function(n, e) {
              return Boolean(F(n.querySelectorAll("iframe")).some((function(n) {
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
              var e, t = null === (e = C(n)) || void 0 === e ? void 0 : e.autofocus;
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
          var r = M(n),
            o = M(e),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(n) {
            i = an(i || n, n) || i, t.filter(Boolean).forEach((function(n) {
              var e = an(u, n);
              e && (i = !i || J(e, i) ? e : an(e, i))
            }))
          })), i
        },
        sn = function(n, e) {
          return n.reduce((function(n, t) {
            return n.concat(function(n, e) {
              return V((t = n.querySelectorAll("[".concat(f, "]")), F(t).map((function(n) {
                return H([n])
              })).reduce((function(n, e) {
                return n.concat(e)
              }), [])), e);
              var t
            }(t, e))
          }), [])
        },
        dn = function(n, e) {
          var t = Q(M(n).length > 0 ? document : k(n).ownerDocument),
            r = Z(n).filter(R),
            o = fn(t || n, n, r),
            u = new Map,
            i = z(r, u),
            c = i.filter((function(n) {
              var e = n.node;
              return R(e)
            }));
          if (c[0]) {
            var a, f, s, d = z([o], u).map((function(n) {
                return n.node
              })),
              l = (a = d, f = c, s = new Map, f.forEach((function(n) {
                return s.set(n.node, n)
              })), a.map((function(n) {
                return s.get(n)
              })).filter(j)),
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
                    s = o ? t.indexOf(o) : f,
                    d = o ? n.indexOf(o) : -1;
                  if (-1 === f) return -1 !== d ? d : on;
                  if (-1 === d) return on;
                  var l, v, m = f - s,
                    p = t.indexOf(i),
                    b = t.indexOf(c),
                    h = (l = t, v = new Set, l.forEach((function(n) {
                      return v.add(en(n, l))
                    })), l.filter((function(n) {
                      return v.has(n)
                    }))),
                    y = void 0 !== r ? h.indexOf(r) : -1,
                    g = o ? h.indexOf(o) : y,
                    E = h.filter((function(n) {
                      return n.tabIndex >= 0
                    })),
                    w = void 0 !== r ? E.indexOf(r) : -1,
                    x = o ? E.indexOf(o) : w,
                    O = w >= 0 && x >= 0 ? x - w : g - y;
                  if (!m && d >= 0) return d;
                  if (0 === e.length) return d;
                  var N = rn(n, e[0]),
                    F = rn(n, e[e.length - 1]);
                  return f <= p && a && Math.abs(m) > 1 ? F : f >= b && a && Math.abs(m) > 1 ? N : m && Math.abs(O) > 1 ? d : f <= p ? F : f > b ? N : m ? Math.abs(m) > 1 ? d : (u + d + m) % u : void 0
                }
              }(v, m, d, t, e);
            if (p === on) {
              var b = un(i, m, sn(r, u)) || un(i, v, sn(r, u));
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
          var r = dn(n, e);
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
                for (var i = n.stack, c = n.ownerDocument, a = new Map, f = 0, s = i; f < s.length; f++) {
                  var d = s[f],
                    l = null === (e = d.parent) || void 0 === e ? void 0 : e.call(d);
                  if (l && c.contains(l)) {
                    for (var v = null === (t = d.left) || void 0 === t ? void 0 : t.call(d), m = d.current(), p = l.contains(m) ? m : void 0, b = null === (r = d.right) || void 0 === r ? void 0 : r.call(d), h = K([l], a), y = null !== (u = null !== (o = null != p ? p : null == v ? void 0 : v.nextElementSibling) && void 0 !== o ? o : b) && void 0 !== u ? u : v; y;) {
                      for (var g = 0, E = h; g < E.length; g++) {
                        var w = E[g];
                        if (null == y ? void 0 : y.contains(w.node)) return w.node
                      }
                      y = y.nextElementSibling
                    }
                    if (h.length) return h[0].node
                  }
                }
            }(e)
          }
        },
        hn = function(n, e, t) {
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
              var r = M(e);
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
        yn = function(n, e, t) {
          var r, o, u, i, c = (o = n, u = null === (r = e.onlyTabbable) || void 0 === r || r, {
            first: (i = u ? K(M(o), new Map) : z(M(o), new Map))[0],
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
        xn = function() {
          return document && document.activeElement === document.body
        },
        On = null,
        Nn = null,
        Fn = function() {
          return null
        },
        Mn = null,
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
      var An = function n(e, t, r) {
          return t && (t.host === e && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && n(e, t.parentNode, r))
        },
        Cn = function(n) {
          return z(n, new Map)
        },
        _n = function() {
          var n, e, t, r, o, u, i, c = !1;
          if (On) {
            var f = On,
              s = f.observed,
              d = f.persistentFocus,
              l = f.autoFocus,
              v = f.shards,
              m = f.crossFrame,
              p = f.focusOptions,
              b = f.noFocusGuards,
              h = s || Mn && Mn.portaledElement;
            if (xn() && Nn && Nn !== document.body && (!document.body.contains(Nn) || !Cn([(i = Nn).parentNode]).some((function(n) {
                return n.node === i
              })))) {
              var y = Fn();
              y && y.focus()
            }
            var g = document && document.activeElement;
            if (h) {
              var E = [h].concat(v.map(wn).filter(Boolean));
              if (g && ! function(n) {
                  return (On.whiteList || Sn)(n)
                }(g) || (d || function() {
                  if (!(m ? Boolean(kn) : "meanwhile" === kn) || !b || !Nn || In) return !1;
                  var n = Cn(E),
                    e = n.findIndex((function(n) {
                      return n.node === Nn
                    }));
                  return 0 === e || e === n.length - 1
                }() || !(xn() || function(n) {
                  void 0 === n && (n = document);
                  var e = Q(n);
                  return !!e && F(n.querySelectorAll("[".concat(a, "]"))).some((function(n) {
                    return J(n, e)
                  }))
                }()) || !Nn && l) && (h && !($(E) || g && function(n, e) {
                  return e.some((function(e) {
                    return An(n, e, e)
                  }))
                }(g, E) || (u = g, Mn && Mn.portaledElement === u)) && (document && !Nn && g && !l ? (g.blur && g.blur(), document.body.focus()) : (c = mn(E, Nn, {
                  focusOptions: p
                }), Mn = {})), (Nn = document && document.activeElement) !== document.body && (Fn = bn(Nn)), kn = !1), document && g !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                var w = document && document.activeElement,
                  x = (e = Z(n = E).filter(R), t = fn(n, n, e), r = G(H([t], !0), !0, !0), o = H(e, !1), r.map((function(n) {
                    var e = n.node;
                    return {
                      node: e,
                      index: n.index,
                      lockItem: o.indexOf(e) >= 0,
                      guard: P(e)
                    }
                  }))),
                  O = x.map((function(n) {
                    return n.node
                  })).indexOf(w);
                O > -1 && (x.filter((function(n) {
                  var e = n.guard,
                    t = n.node;
                  return e && t.dataset.focusAutoGuard
                })).forEach((function(n) {
                  return n.node.removeAttribute("tabIndex")
                })), Tn(O, x.length, 1, x), Tn(O, -1, -1, x))
              }
            }
          }
          return c
        },
        Dn = function(n) {
          _n() && n && (n.stopPropagation(), n.preventDefault())
        },
        Ln = function() {
          return gn(_n)
        },
        Pn = function() {
          In = !0
        },
        Rn = function() {
          In = !1, kn = "just", gn((function() {
            kn = "meanwhile"
          }))
        },
        jn = {
          moveFocusInside: mn,
          focusInside: $,
          focusNextElement: function(n, e) {
            void 0 === e && (e = {}), hn(n, e, (function(n, e) {
              var t = n.next,
                r = n.first;
              return t || e && r
            }))
          },
          focusPrevElement: function(n, e) {
            void 0 === e && (e = {}), hn(n, e, (function(n, e) {
              var t = n.prev,
                r = n.last;
              return t || e && r
            }))
          },
          focusFirstElement: function(n, e) {
            void 0 === e && (e = {}), yn(n, e, "first")
          },
          focusLastElement: function(n, e) {
            void 0 === e && (e = {}), yn(n, e, "last")
          },
          captureFocusRestore: bn
        };
      p.assignSyncMedium((function(n) {
        var e = n.target,
          t = n.currentTarget;
        t.contains(e) || (Mn = {
          observerNode: t,
          portaledElement: e
        })
      })), b.assignMedium(Ln), h.assignMedium((function(n) {
        return n(jn)
      }));
      const Bn = (Gn = function(n) {
        return n.filter((function(n) {
          return !n.disabled
        }))
      }, Un = function(n) {
        var e = n.slice(-1)[0];
        e && !On && (document.addEventListener("focusin", Dn), document.addEventListener("focusout", Ln), window.addEventListener("focus", Pn), window.addEventListener("blur", Rn));
        var t = On,
          r = t && e && e.id === t.id;
        On = e, t && !r && (t.onDeactivation(), n.filter((function(n) {
          return n.id === t.id
        })).length || t.returnFocus(!e)), e ? (Nn = null, r && t.observed === e.observed || e.onActivation(jn), _n(), gn(_n)) : (document.removeEventListener("focusin", Dn), document.removeEventListener("focusout", Ln), window.removeEventListener("focus", Pn), window.removeEventListener("blur", Rn), Nn = null)
      }, function(n) {
        var e, t = [];

        function r() {
          e = Gn(t.map((function(n) {
            return n.props
          }))), Un(e)
        }
        var i, c, a, f = function(o) {
          var i, c;

          function a() {
            return o.apply(this, arguments) || this
          }
          c = o, (i = a).prototype = Object.create(c.prototype), i.prototype.constructor = i, O(i, c), a.peek = function() {
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
            if ("object" != N(n) || !n) return n;
            var e = n[Symbol.toPrimitive];
            if (void 0 !== e) {
              var t = e.call(n, "string");
              if ("object" != N(t)) return t;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(n)
          }(n);
          return "symbol" == N(e) ? e : e + ""
        }(c)) in i ? Object.defineProperty(i, c, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[c] = a, f
      })((function() {
        return null
      }));
      var Gn, Un, Wn = (0, o.forwardRef)((function(n, e) {
          return u().createElement(x, (0, r.A)({
            sideCar: Bn,
            ref: e
          }, n))
        })),
        qn = x.propTypes || {};
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
          return h.useMedium((function(t) {
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
            return h.useMedium((function() {
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
            s = (0, o.useRef)(!1);
          (0, o.useEffect)((function() {
            if (a.current) {
              var e = a.current === document.activeElement || a.current.contains(document.activeElement);
              r(e), c(ie(document.activeElement, a.current)), e && n.onFocus && n.onFocus()
            }
          }), []);
          var d = (0, o.useCallback)((function(n) {
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
                r(e), c(f.current.state || ""), e !== s.current && (s.current = e, e ? n.onFocus && n.onFocus() : n.onBlur && n.onBlur())
              }));
            return function() {
              e(), t()
            }
          }), []), {
            active: t,
            state: i,
            onFocus: d,
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