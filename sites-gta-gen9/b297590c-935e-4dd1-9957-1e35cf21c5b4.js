try {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new n.Error).stack;
  e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "b297590c-935e-4dd1-9957-1e35cf21c5b4", n._sentryDebugIdIdentifier = "sentry-dbid-b297590c-935e-4dd1-9957-1e35cf21c5b4")
} catch (n) {} {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[(new n.Error).stack] = Object.assign({}, n._sentryModuleMetadata[(new n.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [9736], {
    9736: (n, e, t) => {
      t.d(e, {
        Ay: () => Gn
      });
      var r = t(34431),
        o = t(90332),
        u = t(62229),
        i = t.n(u),
        c = "data-focus-lock",
        a = "data-focus-lock-disabled",
        d = t(89720),
        f = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        l = t(68295),
        s = (0, l.C)({}, (function(n) {
          return {
            target: n.target,
            currentTarget: n.currentTarget
          }
        })),
        v = (0, l.C)(),
        m = (0, l.C)(),
        p = (0, l.f)({
          async: !0,
          ssr: "undefined" != typeof document
        }),
        b = (0, u.createContext)(void 0),
        y = [],
        g = (0, u.forwardRef)((function(n, e) {
          var t, r = (0, u.useState)(),
            l = r[0],
            m = r[1],
            g = (0, u.useRef)(),
            h = (0, u.useRef)(!1),
            w = (0, u.useRef)(null),
            E = (0, u.useState)({})[1],
            O = n.children,
            x = n.disabled,
            N = void 0 !== x && x,
            A = n.noFocusGuards,
            M = void 0 !== A && A,
            T = n.persistentFocus,
            I = void 0 !== T && T,
            k = n.crossFrame,
            S = void 0 === k || k,
            _ = n.autoFocus,
            D = void 0 === _ || _,
            F = (n.allowTextSelection, n.group),
            C = n.className,
            P = n.whiteList,
            L = n.hasPositiveIndices,
            R = n.shards,
            j = void 0 === R ? y : R,
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
            J = (0, u.useState)({})[0],
            Q = (0, u.useCallback)((function(n) {
              var e = n.captureFocusRestore;
              if (!w.current) {
                var t, r = null == (t = document) ? void 0 : t.activeElement;
                w.current = r, r !== document.body && (w.current = e(r))
              }
              g.current && K && K(g.current), h.current = !0, E()
            }), [K]),
            X = (0, u.useCallback)((function() {
              h.current = !1, z && z(g.current), E()
            }), [z]),
            Z = (0, u.useCallback)((function(n) {
              var e = w.current;
              if (e) {
                var t = ("function" == typeof e ? e() : e) || document.body,
                  r = "function" == typeof V ? V(t) : V;
                if (r) {
                  var o = "object" == typeof r ? r : void 0;
                  w.current = null, n ? Promise.resolve().then((function() {
                    return t.focus(o)
                  })) : t.focus(o)
                }
              }
            }), [V]),
            $ = (0, u.useCallback)((function(n) {
              h.current && s.useMedium(n)
            }), []),
            nn = v.useMedium,
            en = (0, u.useCallback)((function(n) {
              g.current !== n && (g.current = n, m(n))
            }), []),
            tn = (0, o.A)(((t = {})[a] = N && "disabled", t[c] = F, t), W),
            rn = !0 !== M,
            on = rn && "tail" !== M,
            un = (0, d.S)([e, en]),
            cn = (0, u.useMemo)((function() {
              return {
                observed: g,
                shards: j,
                enabled: !N,
                active: h.current
              }
            }), [N, h.current, j, l]);
          return i().createElement(u.Fragment, null, rn && [i().createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: N ? -1 : 0,
            style: f
          }), L ? i().createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: N ? -1 : 1,
            style: f
          }) : null], !N && i().createElement(q, {
            id: J,
            sideCar: p,
            observed: l,
            disabled: N,
            persistentFocus: I,
            crossFrame: S,
            autoFocus: D,
            whiteList: P,
            shards: j,
            onActivation: Q,
            onDeactivation: X,
            returnFocus: Z,
            focusOptions: Y,
            noFocusGuards: M
          }), i().createElement(G, (0, o.A)({
            ref: un
          }, tn, {
            className: C,
            onBlur: nn,
            onFocus: $
          }), i().createElement(b.Provider, {
            value: cn
          }, O)), on && i().createElement("div", {
            "data-focus-guard": !0,
            tabIndex: N ? -1 : 0,
            style: f
          }))
        }));
      g.propTypes = {};
      const h = g;
      var w = t(72282),
        E = t(63079);
      var O = function(n) {
          for (var e = Array(n.length), t = 0; t < n.length; ++t) e[t] = n[t];
          return e
        },
        x = function(n) {
          return Array.isArray(n) ? n : [n]
        },
        N = function(n) {
          return Array.isArray(n) ? n[0] : n
        },
        A = function(n) {
          return n.parentNode && n.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? n.parentNode.host : n.parentNode
        },
        M = function(n) {
          return n === document || n && n.nodeType === Node.DOCUMENT_NODE
        },
        T = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !n || M(n) || ! function(n) {
              if (n.nodeType !== Node.ELEMENT_NODE) return !1;
              var e = window.getComputedStyle(n, null);
              return !(!e || !e.getPropertyValue || "none" !== e.getPropertyValue("display") && "hidden" !== e.getPropertyValue("visibility"))
            }(n) && ! function(n) {
              return n.hasAttribute("inert")
            }(n) && e(A(n))
          }(e, T.bind(void 0, n));
          return n.set(e, r), r
        },
        I = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !(n && !M(n)) || !!D(n) && e(A(n))
          }(e, I.bind(void 0, n));
          return n.set(e, r), r
        },
        k = function(n) {
          return n.dataset
        },
        S = function(n) {
          return "INPUT" === n.tagName
        },
        _ = function(n) {
          return S(n) && "radio" === n.type
        },
        D = function(n) {
          var e = n.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(e)
        },
        F = function(n) {
          var e;
          return Boolean(n && (null === (e = k(n)) || void 0 === e ? void 0 : e.focusGuard))
        },
        C = function(n) {
          return !F(n)
        },
        P = function(n) {
          return Boolean(n)
        },
        L = function(n, e) {
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
        R = function(n, e, t) {
          return O(n).map((function(n, e) {
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
          })).sort(L)
        },
        j = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        B = "".concat(j, ", [data-focus-guard]"),
        G = function(n, e) {
          return O((n.shadowRoot || n).children).reduce((function(n, t) {
            return n.concat(t.matches(e ? B : j) ? [t] : [], G(t))
          }), [])
        },
        U = function(n, e) {
          return n.reduce((function(n, t) {
            var r, o = G(t, e),
              u = (r = []).concat.apply(r, o.map((function(n) {
                return function(n, e) {
                  var t;
                  return n instanceof HTMLIFrameElement && (null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body) ? U([n.contentDocument.body], e) : [n]
                }(n, e)
              })));
            return n.concat(u, t.parentNode ? O(t.parentNode.querySelectorAll(j)).filter((function(n) {
              return n === t
            })) : [])
          }), [])
        },
        W = function(n, e) {
          return O(n).filter((function(n) {
            return T(e, n)
          })).filter((function(n) {
            return function(n) {
              return !((S(n) || function(n) {
                return "BUTTON" === n.tagName
              }(n)) && ("hidden" === n.type || n.disabled))
            }(n)
          }))
        },
        q = function(n, e) {
          return void 0 === e && (e = new Map), O(n).filter((function(n) {
            return I(e, n)
          }))
        },
        H = function(n, e, t) {
          return R(W(U(n, t), e), !0, t)
        },
        V = function(n, e) {
          return R(W(U(n), e), !1)
        },
        Y = function(n, e) {
          return n.shadowRoot ? Y(n.shadowRoot, e) : !(void 0 === Object.getPrototypeOf(n).contains || !Object.getPrototypeOf(n).contains.call(n, e)) || O(n.children).some((function(n) {
            var t;
            if (n instanceof HTMLIFrameElement) {
              var r = null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && Y(r, e)
            }
            return Y(n, e)
          }))
        },
        K = function(n) {
          if (void 0 === n && (n = document), n && n.activeElement) {
            var e = n.activeElement;
            return e.shadowRoot ? K(e.shadowRoot) : e instanceof HTMLIFrameElement && function() {
              try {
                return e.contentWindow.document
              } catch (n) {
                return
              }
            }() ? K(e.contentWindow.document) : e
          }
        },
        z = function(n) {
          return n.parentNode ? z(n.parentNode) : n
        },
        J = function(n) {
          return x(n).filter(Boolean).reduce((function(n, e) {
            var t = e.getAttribute(c);
            return n.push.apply(n, t ? function(n) {
              for (var e = new Set, t = n.length, r = 0; r < t; r += 1)
                for (var o = r + 1; o < t; o += 1) {
                  var u = n[r].compareDocumentPosition(n[o]);
                  (u & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && e.add(o), (u & Node.DOCUMENT_POSITION_CONTAINS) > 0 && e.add(r)
                }
              return n.filter((function(n, t) {
                return !e.has(t)
              }))
            }(O(z(e).querySelectorAll("[".concat(c, '="').concat(t, '"]:not([').concat(a, '="disabled"])')))) : [e]), n
          }), [])
        },
        Q = function(n, e) {
          return void 0 === e && (e = K(N(n).ownerDocument)), !(!e || e.dataset && e.dataset.focusGuard) && J(n).some((function(n) {
            return Y(n, e) || function(n, e) {
              return Boolean(O(n.querySelectorAll("iframe")).some((function(n) {
                return function(n, e) {
                  return n === e
                }(n, e)
              })))
            }(n, e)
          }))
        },
        X = function(n, e) {
          n && ("focus" in n && n.focus(e), "contentWindow" in n && n.contentWindow && n.contentWindow.focus())
        },
        Z = function(n, e) {
          return _(n) && n.name ? function(n, e) {
            return e.filter(_).filter((function(e) {
              return e.name === n.name
            })).filter((function(n) {
              return n.checked
            }))[0] || n
          }(n, e) : n
        },
        $ = function(n) {
          return n[0] && n.length > 1 ? Z(n[0], n) : n[0]
        },
        nn = function(n, e) {
          return n.indexOf(Z(e, n))
        },
        en = "NEW_FOCUS",
        tn = function(n, e, t) {
          var r, o = n.map((function(n) {
              return n.node
            })),
            u = q(o.filter((r = t, function(n) {
              var e, t = null === (e = k(n)) || void 0 === e ? void 0 : e.autofocus;
              return n.autofocus || void 0 !== t && "false" !== t || r.indexOf(n) >= 0
            })));
          return u && u.length ? $(u) : $(q(e))
        },
        rn = function(n, e) {
          return void 0 === e && (e = []), e.push(n), n.parentNode && rn(n.parentNode.host || n.parentNode, e), e
        },
        on = function(n, e) {
          for (var t = rn(n), r = rn(e), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        un = function(n, e, t) {
          var r = x(n),
            o = x(e),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(n) {
            i = on(i || n, n) || i, t.filter(Boolean).forEach((function(n) {
              var e = on(u, n);
              e && (i = !i || Y(e, i) ? e : on(e, i))
            }))
          })), i
        },
        cn = function(n, e) {
          return n.reduce((function(n, t) {
            return n.concat(function(n, e) {
              return W((t = n.querySelectorAll("[".concat("data-autofocus-inside", "]")), O(t).map((function(n) {
                return U([n])
              })).reduce((function(n, e) {
                return n.concat(e)
              }), [])), e);
              var t
            }(t, e))
          }), [])
        },
        an = function(n, e) {
          var t = K(x(n).length > 0 ? document : N(n).ownerDocument),
            r = J(n).filter(C),
            o = un(t || n, n, r),
            u = new Map,
            i = V(r, u),
            c = i.filter((function(n) {
              var e = n.node;
              return C(e)
            }));
          if (c[0]) {
            var a, d, f, l = V([o], u).map((function(n) {
                return n.node
              })),
              s = (a = l, d = c, f = new Map, d.forEach((function(n) {
                return f.set(n.node, n)
              })), a.map((function(n) {
                return f.get(n)
              })).filter(P)),
              v = s.map((function(n) {
                return n.node
              })),
              m = s.filter((function(n) {
                return n.tabIndex >= 0
              })).map((function(n) {
                return n.node
              })),
              p = function(n, e, t, r, o) {
                var u = n.length,
                  i = n[0],
                  c = n[u - 1],
                  a = F(r);
                if (!(r && n.indexOf(r) >= 0)) {
                  var d = void 0 !== r ? t.indexOf(r) : -1,
                    f = o ? t.indexOf(o) : d,
                    l = o ? n.indexOf(o) : -1;
                  if (-1 === d) return -1 !== l ? l : en;
                  if (-1 === l) return en;
                  var s, v, m = d - f,
                    p = t.indexOf(i),
                    b = t.indexOf(c),
                    y = (s = t, v = new Set, s.forEach((function(n) {
                      return v.add(Z(n, s))
                    })), s.filter((function(n) {
                      return v.has(n)
                    }))),
                    g = void 0 !== r ? y.indexOf(r) : -1,
                    h = o ? y.indexOf(o) : g,
                    w = y.filter((function(n) {
                      return n.tabIndex >= 0
                    })),
                    E = void 0 !== r ? w.indexOf(r) : -1,
                    O = o ? w.indexOf(o) : E,
                    x = E >= 0 && O >= 0 ? O - E : h - g;
                  if (!m && l >= 0) return l;
                  if (0 === e.length) return l;
                  var N = nn(n, e[0]),
                    A = nn(n, e[e.length - 1]);
                  return d <= p && a && Math.abs(m) > 1 ? A : d >= b && a && Math.abs(m) > 1 ? N : m && Math.abs(x) > 1 ? l : d <= p ? A : d > b ? N : m ? Math.abs(m) > 1 ? l : (u + l + m) % u : void 0
                }
              }(v, m, l, t, e);
            if (p === en) {
              var b = tn(i, m, cn(r, u)) || tn(i, v, cn(r, u));
              return b ? {
                node: b
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === p ? p : s[p]
          }
        },
        dn = 0,
        fn = !1,
        ln = function(n, e, t) {
          void 0 === t && (t = {});
          var r = an(n, e);
          if (!fn && r) {
            if (dn > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), fn = !0, void setTimeout((function() {
              fn = !1
            }), 1);
            dn++, X(r.node, t.focusOptions), dn--
          }
        };

      function sn(n) {
        if (!n) return null;
        if ("undefined" == typeof WeakRef) return function() {
          return n || null
        };
        var e = n ? new WeakRef(n) : null;
        return function() {
          return (null == e ? void 0 : e.deref()) || null
        }
      }
      var vn = function(n) {
          var e = function(n) {
            if (!n) return null;
            for (var e = [], t = n; t && t !== document.body;) e.push({
              current: sn(t),
              parent: sn(t.parentElement),
              left: sn(t.previousElementSibling),
              right: sn(t.nextElementSibling)
            }), t = t.parentElement;
            return {
              element: sn(n),
              stack: e,
              ownerDocument: n.ownerDocument
            }
          }(n);
          return function() {
            return function(n) {
              var e, t, r, o, u;
              if (n)
                for (var i = n.stack, c = n.ownerDocument, a = new Map, d = 0, f = i; d < f.length; d++) {
                  var l = f[d],
                    s = null === (e = l.parent) || void 0 === e ? void 0 : e.call(l);
                  if (s && c.contains(s)) {
                    for (var v = null === (t = l.left) || void 0 === t ? void 0 : t.call(l), m = l.current(), p = s.contains(m) ? m : void 0, b = null === (r = l.right) || void 0 === r ? void 0 : r.call(l), y = H([s], a), g = null !== (u = null !== (o = null != p ? p : null == v ? void 0 : v.nextElementSibling) && void 0 !== o ? o : b) && void 0 !== u ? u : v; g;) {
                      for (var h = 0, w = y; h < w.length; h++) {
                        var E = w[h];
                        if (null == g ? void 0 : g.contains(E.node)) return E.node
                      }
                      g = g.nextElementSibling
                    }
                    if (y.length) return y[0].node
                  }
                }
            }(e)
          }
        },
        mn = function(n, e, t) {
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
              var r = x(e);
              if (r.every((function(e) {
                  return !Y(e, n)
                }))) return console.error("Active element is not contained in the scope"), {};
              var o = t ? H(r, new Map) : V(r, new Map),
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
            u && X(u.node, r.focusOptions)
          }
        },
        pn = function(n, e, t) {
          var r, o, u, i, c = (o = n, u = null === (r = e.onlyTabbable) || void 0 === r || r, {
            first: (i = u ? H(x(o), new Map) : V(x(o), new Map))[0],
            last: i[i.length - 1]
          })[t];
          c && X(c.node, e.focusOptions)
        };

      function bn(n) {
        setTimeout(n, 1)
      }
      var yn = function(n) {
          return n && "current" in n ? n.current : n
        },
        gn = function() {
          return document && document.activeElement === document.body
        },
        hn = null,
        wn = null,
        En = function() {
          return null
        },
        On = null,
        xn = !1,
        Nn = !1,
        An = function() {
          return !0
        };

      function Mn(n, e, t, r) {
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
      var Tn = function n(e, t, r) {
          return t && (t.host === e && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && n(e, t.parentNode, r))
        },
        In = function(n) {
          return V(n, new Map)
        },
        kn = function() {
          var n, e, t, r, o, u, i, c = !1;
          if (hn) {
            var a = hn,
              d = a.observed,
              f = a.persistentFocus,
              l = a.autoFocus,
              s = a.shards,
              v = a.crossFrame,
              m = a.focusOptions,
              p = a.noFocusGuards,
              b = d || On && On.portaledElement;
            if (gn() && wn && wn !== document.body && (!document.body.contains(wn) || !In([(i = wn).parentNode]).some((function(n) {
                return n.node === i
              })))) {
              var y = En();
              y && y.focus()
            }
            var g = document && document.activeElement;
            if (b) {
              var h = [b].concat(s.map(yn).filter(Boolean));
              if (g && ! function(n) {
                  return (hn.whiteList || An)(n)
                }(g) || (f || function() {
                  if (!(v ? Boolean(xn) : "meanwhile" === xn) || !p || !wn || Nn) return !1;
                  var n = In(h),
                    e = n.findIndex((function(n) {
                      return n.node === wn
                    }));
                  return 0 === e || e === n.length - 1
                }() || !(gn() || function(n) {
                  void 0 === n && (n = document);
                  var e = K(n);
                  return !!e && O(n.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some((function(n) {
                    return Y(n, e)
                  }))
                }()) || !wn && l) && (b && !(Q(h) || g && function(n, e) {
                  return e.some((function(e) {
                    return Tn(n, e, e)
                  }))
                }(g, h) || (u = g, On && On.portaledElement === u)) && (document && !wn && g && !l ? (g.blur && g.blur(), document.body.focus()) : (c = ln(h, wn, {
                  focusOptions: m
                }), On = {})), (wn = document && document.activeElement) !== document.body && (En = vn(wn)), xn = !1), document && g !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                var w = document && document.activeElement,
                  E = (e = J(n = h).filter(C), t = un(n, n, e), r = R(U([t], !0), !0, !0), o = U(e, !1), r.map((function(n) {
                    var e = n.node;
                    return {
                      node: e,
                      index: n.index,
                      lockItem: o.indexOf(e) >= 0,
                      guard: F(e)
                    }
                  }))),
                  x = E.map((function(n) {
                    return n.node
                  })).indexOf(w);
                x > -1 && (E.filter((function(n) {
                  var e = n.guard,
                    t = n.node;
                  return e && t.dataset.focusAutoGuard
                })).forEach((function(n) {
                  return n.node.removeAttribute("tabIndex")
                })), Mn(x, E.length, 1, E), Mn(x, -1, -1, E))
              }
            }
          }
          return c
        },
        Sn = function(n) {
          kn() && n && (n.stopPropagation(), n.preventDefault())
        },
        _n = function() {
          return bn(kn)
        },
        Dn = function() {
          Nn = !0
        },
        Fn = function() {
          Nn = !1, xn = "just", bn((function() {
            xn = "meanwhile"
          }))
        },
        Cn = {
          moveFocusInside: ln,
          focusInside: Q,
          focusNextElement: function(n, e) {
            void 0 === e && (e = {}), mn(n, e, (function(n, e) {
              var t = n.next,
                r = n.first;
              return t || e && r
            }))
          },
          focusPrevElement: function(n, e) {
            void 0 === e && (e = {}), mn(n, e, (function(n, e) {
              var t = n.prev,
                r = n.last;
              return t || e && r
            }))
          },
          focusFirstElement: function(n, e) {
            void 0 === e && (e = {}), pn(n, e, "first")
          },
          focusLastElement: function(n, e) {
            void 0 === e && (e = {}), pn(n, e, "last")
          },
          captureFocusRestore: vn
        };
      s.assignSyncMedium((function(n) {
        var e = n.target,
          t = n.currentTarget;
        t.contains(e) || (On = {
          observerNode: t,
          portaledElement: e
        })
      })), v.assignMedium(_n), m.assignMedium((function(n) {
        return n(Cn)
      }));
      const Pn = (Ln = function(n) {
        return n.filter((function(n) {
          return !n.disabled
        }))
      }, Rn = function(n) {
        var e = n.slice(-1)[0];
        e && !hn && (document.addEventListener("focusin", Sn), document.addEventListener("focusout", _n), window.addEventListener("focus", Dn), window.addEventListener("blur", Fn));
        var t = hn,
          r = t && e && e.id === t.id;
        hn = e, t && !r && (t.onDeactivation(), n.filter((function(n) {
          return n.id === t.id
        })).length || t.returnFocus(!e)), e ? (wn = null, r && t.observed === e.observed || e.onActivation(Cn), kn(), bn(kn)) : (document.removeEventListener("focusin", Sn), document.removeEventListener("focusout", _n), window.removeEventListener("focus", Dn), window.removeEventListener("blur", Fn), wn = null)
      }, function(n) {
        var e, t = [];

        function r() {
          e = Ln(t.map((function(n) {
            return n.props
          }))), Rn(e)
        }
        var o = function(o) {
          var u, c;

          function a() {
            return o.apply(this, arguments) || this
          }
          c = o, (u = a).prototype = Object.create(c.prototype), u.prototype.constructor = u, (0, w.A)(u, c), a.peek = function() {
            return e
          };
          var d = a.prototype;
          return d.componentDidMount = function() {
            t.push(this), r()
          }, d.componentDidUpdate = function() {
            r()
          }, d.componentWillUnmount = function() {
            var n = t.indexOf(this);
            t.splice(n, 1), r()
          }, d.render = function() {
            return i().createElement(n, this.props)
          }, a
        }(u.PureComponent);
        return (0, E.A)(o, "displayName", "SideEffect(" + function(n) {
          return n.displayName || n.name || "Component"
        }(n) + ")"), o
      })((function() {
        return null
      }));
      var Ln, Rn, jn = (0, u.forwardRef)((function(n, e) {
          return i().createElement(h, (0, o.A)({
            sideCar: Pn,
            ref: e
          }, n))
        })),
        Bn = h.propTypes || {};
      Bn.sideCar, (0, r.A)(Bn, ["sideCar"]), jn.propTypes = {};
      const Gn = jn
    },
    34431: (n, e, t) => {
      function r(n, e) {
        if (null == n) return {};
        var t = {};
        for (var r in n)
          if ({}.hasOwnProperty.call(n, r)) {
            if (-1 !== e.indexOf(r)) continue;
            t[r] = n[r]
          } return t
      }
      t.d(e, {
        A: () => r
      })
    },
    63079: (n, e, t) => {
      t.d(e, {
        A: () => o
      });
      var r = t(81913);

      function o(n, e, t) {
        return (e = (0, r.A)(e)) in n ? Object.defineProperty(n, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : n[e] = t, n
      }
    },
    72282: (n, e, t) => {
      function r(n, e) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, e) {
          return n.__proto__ = e, n
        }, r(n, e)
      }
      t.d(e, {
        A: () => r
      })
    },
    81913: (n, e, t) => {
      t.d(e, {
        A: () => o
      });
      var r = t(83408);

      function o(n) {
        var e = function(n) {
          if ("object" != (0, r.A)(n) || !n) return n;
          var e = n[Symbol.toPrimitive];
          if (void 0 !== e) {
            var t = e.call(n, "string");
            if ("object" != (0, r.A)(t)) return t;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == (0, r.A)(e) ? e : e + ""
      }
    },
    83408: (n, e, t) => {
      function r(n) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
          return typeof n
        } : function(n) {
          return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, r(n)
      }
      t.d(e, {
        A: () => r
      })
    },
    90332: (n, e, t) => {
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