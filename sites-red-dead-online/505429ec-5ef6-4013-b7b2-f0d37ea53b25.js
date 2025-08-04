try {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new n.Error).stack;
  e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "505429ec-5ef6-4013-b7b2-f0d37ea53b25", n._sentryDebugIdIdentifier = "sentry-dbid-505429ec-5ef6-4013-b7b2-f0d37ea53b25")
} catch (n) {} {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[(new n.Error).stack] = Object.assign({}, n._sentryModuleMetadata[(new n.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [3077], {
    63077: (n, e, t) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r])
          }
          return n
        }, r.apply(null, arguments)
      }
      t.r(e), t.d(e, {
        AutoFocusInside: () => Xn,
        FocusLockUI: () => I,
        FreeFocusInside: () => te,
        InFocusGuard: () => p,
        MoveFocusInside: () => ne,
        default: () => ve,
        useFocusController: () => ue,
        useFocusInside: () => Zn,
        useFocusScope: () => ie,
        useFocusState: () => le
      });
      var o = t(62229),
        u = t.n(o),
        i = (t(57145), "data-focus-lock"),
        c = "data-focus-lock-disabled",
        a = "data-no-focus-lock",
        f = "data-autofocus-inside";

      function d(n, e) {
        return "function" == typeof n ? n(e) : n && (n.current = e), n
      }
      var s = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;
      var v = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        m = function(n) {
          var e = n.children,
            t = void 0 === e ? null : e;
          return u().createElement(o.Fragment, null, u().createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: v
          }), t, t && u().createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: v
          }))
        };
      m.propTypes = {};
      const p = m;
      var b = t(91299);

      function h(n) {
        return n
      }

      function y(n, e) {
        void 0 === e && (e = h);
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

      function g(n, e) {
        return void 0 === e && (e = h), y(n, e)
      }
      var E = g({}, (function(n) {
          return {
            target: n.target,
            currentTarget: n.currentTarget
          }
        })),
        w = g(),
        x = g(),
        O = function(n) {
          void 0 === n && (n = {});
          var e = y(null);
          return e.options = (0, b.__assign)({
            async: !0,
            ssr: !1
          }, n), e
        }({
          async: !0,
          ssr: "undefined" != typeof document
        }),
        N = (0, o.createContext)(void 0),
        F = [],
        M = (0, o.forwardRef)((function(n, e) {
          var t, a, f, m, p, b, h, y = (0, o.useState)(),
            g = y[0],
            x = y[1],
            M = (0, o.useRef)(),
            I = (0, o.useRef)(!1),
            T = (0, o.useRef)(null),
            k = (0, o.useState)({})[1],
            S = n.children,
            _ = n.disabled,
            A = void 0 !== _ && _,
            C = n.noFocusGuards,
            D = void 0 !== C && C,
            L = n.persistentFocus,
            P = void 0 !== L && L,
            R = n.crossFrame,
            j = void 0 === R || R,
            B = n.autoFocus,
            G = void 0 === B || B,
            U = (n.allowTextSelection, n.group),
            W = n.className,
            q = n.whiteList,
            H = n.hasPositiveIndices,
            V = n.shards,
            Y = void 0 === V ? F : V,
            K = n.as,
            z = void 0 === K ? "div" : K,
            J = n.lockProps,
            Q = void 0 === J ? {} : J,
            X = n.sideCar,
            Z = n.returnFocus,
            $ = void 0 !== Z && Z,
            nn = n.focusOptions,
            en = n.onActivation,
            tn = n.onDeactivation,
            rn = (0, o.useState)({})[0],
            on = (0, o.useCallback)((function(n) {
              var e = n.captureFocusRestore;
              if (!T.current) {
                var t, r = null == (t = document) ? void 0 : t.activeElement;
                T.current = r, r !== document.body && (T.current = e(r))
              }
              M.current && en && en(M.current), I.current = !0, k()
            }), [en]),
            un = (0, o.useCallback)((function() {
              I.current = !1, tn && tn(M.current), k()
            }), [tn]),
            cn = (0, o.useCallback)((function(n) {
              var e = T.current;
              if (e) {
                var t = ("function" == typeof e ? e() : e) || document.body,
                  r = "function" == typeof $ ? $(t) : $;
                if (r) {
                  var o = "object" == typeof r ? r : void 0;
                  T.current = null, n ? Promise.resolve().then((function() {
                    return t.focus(o)
                  })) : t.focus(o)
                }
              }
            }), [$]),
            an = (0, o.useCallback)((function(n) {
              I.current && E.useMedium(n)
            }), []),
            fn = w.useMedium,
            dn = (0, o.useCallback)((function(n) {
              M.current !== n && (M.current = n, x(n))
            }), []),
            sn = r(((t = {})[c] = A && "disabled", t[i] = U, t), Q),
            ln = !0 !== D,
            vn = ln && "tail" !== D,
            mn = (a = [e, dn], m = f || null, p = function(n) {
              return a.forEach((function(e) {
                return d(e, n)
              }))
            }, (b = (0, o.useState)((function() {
              return {
                value: m,
                callback: p,
                facade: {
                  get current() {
                    return b.value
                  },
                  set current(n) {
                    var e = b.value;
                    e !== n && (b.value = n, b.callback(n, e))
                  }
                }
              }
            }))[0]).callback = p, h = b.facade, s((function() {
              var n = l.get(h);
              if (n) {
                var e = new Set(n),
                  t = new Set(a),
                  r = h.current;
                e.forEach((function(n) {
                  t.has(n) || d(n, null)
                })), t.forEach((function(n) {
                  e.has(n) || d(n, r)
                }))
              }
              l.set(h, a)
            }), [a]), h),
            pn = (0, o.useMemo)((function() {
              return {
                observed: M,
                shards: Y,
                enabled: !A,
                active: I.current
              }
            }), [A, I.current, Y, g]);
          return u().createElement(o.Fragment, null, ln && [u().createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: A ? -1 : 0,
            style: v
          }), H ? u().createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: A ? -1 : 1,
            style: v
          }) : null], !A && u().createElement(X, {
            id: rn,
            sideCar: O,
            observed: g,
            disabled: A,
            persistentFocus: P,
            crossFrame: j,
            autoFocus: G,
            whiteList: q,
            shards: Y,
            onActivation: on,
            onDeactivation: un,
            returnFocus: cn,
            focusOptions: nn,
            noFocusGuards: D
          }), u().createElement(z, r({
            ref: mn
          }, sn, {
            className: W,
            onBlur: fn,
            onFocus: an
          }), u().createElement(N.Provider, {
            value: pn
          }, S)), vn && u().createElement("div", {
            "data-focus-guard": !0,
            tabIndex: A ? -1 : 0,
            style: v
          }))
        }));
      M.propTypes = {};
      const I = M;

      function T(n, e) {
        return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, e) {
          return n.__proto__ = e, n
        }, T(n, e)
      }

      function k(n) {
        return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
          return typeof n
        } : function(n) {
          return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, k(n)
      }
      var S = function(n) {
          for (var e = Array(n.length), t = 0; t < n.length; ++t) e[t] = n[t];
          return e
        },
        _ = function(n) {
          return Array.isArray(n) ? n : [n]
        },
        A = function(n) {
          return Array.isArray(n) ? n[0] : n
        },
        C = function(n) {
          return n.parentNode && n.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? n.parentNode.host : n.parentNode
        },
        D = function(n) {
          return n === document || n && n.nodeType === Node.DOCUMENT_NODE
        },
        L = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !n || D(n) || ! function(n) {
              if (n.nodeType !== Node.ELEMENT_NODE) return !1;
              var e = window.getComputedStyle(n, null);
              return !(!e || !e.getPropertyValue || "none" !== e.getPropertyValue("display") && "hidden" !== e.getPropertyValue("visibility"))
            }(n) && ! function(n) {
              return n.hasAttribute("inert")
            }(n) && e(C(n))
          }(e, L.bind(void 0, n));
          return n.set(e, r), r
        },
        P = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !(n && !D(n)) || !!G(n) && e(C(n))
          }(e, P.bind(void 0, n));
          return n.set(e, r), r
        },
        R = function(n) {
          return n.dataset
        },
        j = function(n) {
          return "INPUT" === n.tagName
        },
        B = function(n) {
          return j(n) && "radio" === n.type
        },
        G = function(n) {
          var e = n.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(e)
        },
        U = function(n) {
          var e;
          return Boolean(n && (null === (e = R(n)) || void 0 === e ? void 0 : e.focusGuard))
        },
        W = function(n) {
          return !U(n)
        },
        q = function(n) {
          return Boolean(n)
        },
        H = function(n, e) {
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
        V = function(n, e, t) {
          return S(n).map((function(n, e) {
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
          })).sort(H)
        },
        Y = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        K = "".concat(Y, ", [data-focus-guard]"),
        z = function(n, e) {
          return S((n.shadowRoot || n).children).reduce((function(n, t) {
            return n.concat(t.matches(e ? K : Y) ? [t] : [], z(t))
          }), [])
        },
        J = function(n, e) {
          return n.reduce((function(n, t) {
            var r, o = z(t, e),
              u = (r = []).concat.apply(r, o.map((function(n) {
                return function(n, e) {
                  var t;
                  return n instanceof HTMLIFrameElement && (null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body) ? J([n.contentDocument.body], e) : [n]
                }(n, e)
              })));
            return n.concat(u, t.parentNode ? S(t.parentNode.querySelectorAll(Y)).filter((function(n) {
              return n === t
            })) : [])
          }), [])
        },
        Q = function(n, e) {
          return S(n).filter((function(n) {
            return L(e, n)
          })).filter((function(n) {
            return function(n) {
              return !((j(n) || function(n) {
                return "BUTTON" === n.tagName
              }(n)) && ("hidden" === n.type || n.disabled))
            }(n)
          }))
        },
        X = function(n, e) {
          return void 0 === e && (e = new Map), S(n).filter((function(n) {
            return P(e, n)
          }))
        },
        Z = function(n, e, t) {
          return V(Q(J(n, t), e), !0, t)
        },
        $ = function(n, e) {
          return V(Q(J(n), e), !1)
        },
        nn = function(n, e) {
          return n.shadowRoot ? nn(n.shadowRoot, e) : !(void 0 === Object.getPrototypeOf(n).contains || !Object.getPrototypeOf(n).contains.call(n, e)) || S(n.children).some((function(n) {
            var t;
            if (n instanceof HTMLIFrameElement) {
              var r = null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && nn(r, e)
            }
            return nn(n, e)
          }))
        },
        en = function(n) {
          if (void 0 === n && (n = document), n && n.activeElement) {
            var e = n.activeElement;
            return e.shadowRoot ? en(e.shadowRoot) : e instanceof HTMLIFrameElement && function() {
              try {
                return e.contentWindow.document
              } catch (n) {
                return
              }
            }() ? en(e.contentWindow.document) : e
          }
        },
        tn = function(n) {
          return n.parentNode ? tn(n.parentNode) : n
        },
        rn = function(n) {
          return _(n).filter(Boolean).reduce((function(n, e) {
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
            }(S(tn(e).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(c, '="disabled"])')))) : [e]), n
          }), [])
        },
        on = function(n, e) {
          return void 0 === e && (e = en(A(n).ownerDocument)), !(!e || e.dataset && e.dataset.focusGuard) && rn(n).some((function(n) {
            return nn(n, e) || function(n, e) {
              return Boolean(S(n.querySelectorAll("iframe")).some((function(n) {
                return function(n, e) {
                  return n === e
                }(n, e)
              })))
            }(n, e)
          }))
        },
        un = function(n, e) {
          n && ("focus" in n && n.focus(e), "contentWindow" in n && n.contentWindow && n.contentWindow.focus())
        },
        cn = function(n, e) {
          return B(n) && n.name ? function(n, e) {
            return e.filter(B).filter((function(e) {
              return e.name === n.name
            })).filter((function(n) {
              return n.checked
            }))[0] || n
          }(n, e) : n
        },
        an = function(n) {
          return n[0] && n.length > 1 ? cn(n[0], n) : n[0]
        },
        fn = function(n, e) {
          return n.indexOf(cn(e, n))
        },
        dn = "NEW_FOCUS",
        sn = function(n, e, t) {
          var r, o = n.map((function(n) {
              return n.node
            })),
            u = X(o.filter((r = t, function(n) {
              var e, t = null === (e = R(n)) || void 0 === e ? void 0 : e.autofocus;
              return n.autofocus || void 0 !== t && "false" !== t || r.indexOf(n) >= 0
            })));
          return u && u.length ? an(u) : an(X(e))
        },
        ln = function(n, e) {
          return void 0 === e && (e = []), e.push(n), n.parentNode && ln(n.parentNode.host || n.parentNode, e), e
        },
        vn = function(n, e) {
          for (var t = ln(n), r = ln(e), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        mn = function(n, e, t) {
          var r = _(n),
            o = _(e),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(n) {
            i = vn(i || n, n) || i, t.filter(Boolean).forEach((function(n) {
              var e = vn(u, n);
              e && (i = !i || nn(e, i) ? e : vn(e, i))
            }))
          })), i
        },
        pn = function(n, e) {
          return n.reduce((function(n, t) {
            return n.concat(function(n, e) {
              return Q((t = n.querySelectorAll("[".concat(f, "]")), S(t).map((function(n) {
                return J([n])
              })).reduce((function(n, e) {
                return n.concat(e)
              }), [])), e);
              var t
            }(t, e))
          }), [])
        },
        bn = function(n, e) {
          var t = en(_(n).length > 0 ? document : A(n).ownerDocument),
            r = rn(n).filter(W),
            o = mn(t || n, n, r),
            u = new Map,
            i = $(r, u),
            c = i.filter((function(n) {
              var e = n.node;
              return W(e)
            }));
          if (c[0]) {
            var a, f, d, s = $([o], u).map((function(n) {
                return n.node
              })),
              l = (a = s, f = c, d = new Map, f.forEach((function(n) {
                return d.set(n.node, n)
              })), a.map((function(n) {
                return d.get(n)
              })).filter(q)),
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
                  a = U(r);
                if (!(r && n.indexOf(r) >= 0)) {
                  var f = void 0 !== r ? t.indexOf(r) : -1,
                    d = o ? t.indexOf(o) : f,
                    s = o ? n.indexOf(o) : -1;
                  if (-1 === f) return -1 !== s ? s : dn;
                  if (-1 === s) return dn;
                  var l, v, m = f - d,
                    p = t.indexOf(i),
                    b = t.indexOf(c),
                    h = (l = t, v = new Set, l.forEach((function(n) {
                      return v.add(cn(n, l))
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
                  if (!m && s >= 0) return s;
                  if (0 === e.length) return s;
                  var N = fn(n, e[0]),
                    F = fn(n, e[e.length - 1]);
                  return f <= p && a && Math.abs(m) > 1 ? F : f >= b && a && Math.abs(m) > 1 ? N : m && Math.abs(O) > 1 ? s : f <= p ? F : f > b ? N : m ? Math.abs(m) > 1 ? s : (u + s + m) % u : void 0
                }
              }(v, m, s, t, e);
            if (p === dn) {
              var b = sn(i, m, pn(r, u)) || sn(i, v, pn(r, u));
              return b ? {
                node: b
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === p ? p : l[p]
          }
        },
        hn = 0,
        yn = !1,
        gn = function(n, e, t) {
          void 0 === t && (t = {});
          var r = bn(n, e);
          if (!yn && r) {
            if (hn > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), yn = !0, void setTimeout((function() {
              yn = !1
            }), 1);
            hn++, un(r.node, t.focusOptions), hn--
          }
        };

      function En(n) {
        if (!n) return null;
        if ("undefined" == typeof WeakRef) return function() {
          return n || null
        };
        var e = n ? new WeakRef(n) : null;
        return function() {
          return (null == e ? void 0 : e.deref()) || null
        }
      }
      var wn = function(n) {
          var e = function(n) {
            if (!n) return null;
            for (var e = [], t = n; t && t !== document.body;) e.push({
              current: En(t),
              parent: En(t.parentElement),
              left: En(t.previousElementSibling),
              right: En(t.nextElementSibling)
            }), t = t.parentElement;
            return {
              element: En(n),
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
                    for (var v = null === (t = s.left) || void 0 === t ? void 0 : t.call(s), m = s.current(), p = l.contains(m) ? m : void 0, b = null === (r = s.right) || void 0 === r ? void 0 : r.call(s), h = Z([l], a), y = null !== (u = null !== (o = null != p ? p : null == v ? void 0 : v.nextElementSibling) && void 0 !== o ? o : b) && void 0 !== u ? u : v; y;) {
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
        xn = function(n, e, t) {
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
              var r = _(e);
              if (r.every((function(e) {
                  return !nn(e, n)
                }))) return console.error("Active element is not contained in the scope"), {};
              var o = t ? Z(r, new Map) : $(r, new Map),
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
            u && un(u.node, r.focusOptions)
          }
        },
        On = function(n, e, t) {
          var r, o, u, i, c = (o = n, u = null === (r = e.onlyTabbable) || void 0 === r || r, {
            first: (i = u ? Z(_(o), new Map) : $(_(o), new Map))[0],
            last: i[i.length - 1]
          })[t];
          c && un(c.node, e.focusOptions)
        };

      function Nn(n) {
        setTimeout(n, 1)
      }
      var Fn = function(n, e) {
          var t = {};
          return t[n] = e, t
        },
        Mn = function(n) {
          return n && "current" in n ? n.current : n
        },
        In = function() {
          return document && document.activeElement === document.body
        },
        Tn = null,
        kn = null,
        Sn = function() {
          return null
        },
        _n = null,
        An = !1,
        Cn = !1,
        Dn = function() {
          return !0
        };

      function Ln(n, e, t, r) {
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
      var Pn = function n(e, t, r) {
          return t && (t.host === e && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && n(e, t.parentNode, r))
        },
        Rn = function(n) {
          return $(n, new Map)
        },
        jn = function() {
          var n, e, t, r, o, u, i, c = !1;
          if (Tn) {
            var f = Tn,
              d = f.observed,
              s = f.persistentFocus,
              l = f.autoFocus,
              v = f.shards,
              m = f.crossFrame,
              p = f.focusOptions,
              b = f.noFocusGuards,
              h = d || _n && _n.portaledElement;
            if (In() && kn && kn !== document.body && (!document.body.contains(kn) || !Rn([(i = kn).parentNode]).some((function(n) {
                return n.node === i
              })))) {
              var y = Sn();
              y && y.focus()
            }
            var g = document && document.activeElement;
            if (h) {
              var E = [h].concat(v.map(Mn).filter(Boolean));
              if (g && ! function(n) {
                  return (Tn.whiteList || Dn)(n)
                }(g) || (s || function() {
                  if (!(m ? Boolean(An) : "meanwhile" === An) || !b || !kn || Cn) return !1;
                  var n = Rn(E),
                    e = n.findIndex((function(n) {
                      return n.node === kn
                    }));
                  return 0 === e || e === n.length - 1
                }() || !(In() || function(n) {
                  void 0 === n && (n = document);
                  var e = en(n);
                  return !!e && S(n.querySelectorAll("[".concat(a, "]"))).some((function(n) {
                    return nn(n, e)
                  }))
                }()) || !kn && l) && (h && !(on(E) || g && function(n, e) {
                  return e.some((function(e) {
                    return Pn(n, e, e)
                  }))
                }(g, E) || (u = g, _n && _n.portaledElement === u)) && (document && !kn && g && !l ? (g.blur && g.blur(), document.body.focus()) : (c = gn(E, kn, {
                  focusOptions: p
                }), _n = {})), (kn = document && document.activeElement) !== document.body && (Sn = wn(kn)), An = !1), document && g !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                var w = document && document.activeElement,
                  x = (e = rn(n = E).filter(W), t = mn(n, n, e), r = V(J([t], !0), !0, !0), o = J(e, !1), r.map((function(n) {
                    var e = n.node;
                    return {
                      node: e,
                      index: n.index,
                      lockItem: o.indexOf(e) >= 0,
                      guard: U(e)
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
                })), Ln(O, x.length, 1, x), Ln(O, -1, -1, x))
              }
            }
          }
          return c
        },
        Bn = function(n) {
          jn() && n && (n.stopPropagation(), n.preventDefault())
        },
        Gn = function() {
          return Nn(jn)
        },
        Un = function() {
          Cn = !0
        },
        Wn = function() {
          Cn = !1, An = "just", Nn((function() {
            An = "meanwhile"
          }))
        },
        qn = {
          moveFocusInside: gn,
          focusInside: on,
          focusNextElement: function(n, e) {
            void 0 === e && (e = {}), xn(n, e, (function(n, e) {
              var t = n.next,
                r = n.first;
              return t || e && r
            }))
          },
          focusPrevElement: function(n, e) {
            void 0 === e && (e = {}), xn(n, e, (function(n, e) {
              var t = n.prev,
                r = n.last;
              return t || e && r
            }))
          },
          focusFirstElement: function(n, e) {
            void 0 === e && (e = {}), On(n, e, "first")
          },
          focusLastElement: function(n, e) {
            void 0 === e && (e = {}), On(n, e, "last")
          },
          captureFocusRestore: wn
        };
      E.assignSyncMedium((function(n) {
        var e = n.target,
          t = n.currentTarget;
        t.contains(e) || (_n = {
          observerNode: t,
          portaledElement: e
        })
      })), w.assignMedium(Gn), x.assignMedium((function(n) {
        return n(qn)
      }));
      const Hn = (Vn = function(n) {
        return n.filter((function(n) {
          return !n.disabled
        }))
      }, Yn = function(n) {
        var e = n.slice(-1)[0];
        e && !Tn && (document.addEventListener("focusin", Bn), document.addEventListener("focusout", Gn), window.addEventListener("focus", Un), window.addEventListener("blur", Wn));
        var t = Tn,
          r = t && e && e.id === t.id;
        Tn = e, t && !r && (t.onDeactivation(), n.filter((function(n) {
          return n.id === t.id
        })).length || t.returnFocus(!e)), e ? (kn = null, r && t.observed === e.observed || e.onActivation(qn), jn(), Nn(jn)) : (document.removeEventListener("focusin", Bn), document.removeEventListener("focusout", Gn), window.removeEventListener("focus", Un), window.removeEventListener("blur", Wn), kn = null)
      }, function(n) {
        var e, t = [];

        function r() {
          e = Vn(t.map((function(n) {
            return n.props
          }))), Yn(e)
        }
        var i, c, a, f = function(o) {
          var i, c;

          function a() {
            return o.apply(this, arguments) || this
          }
          c = o, (i = a).prototype = Object.create(c.prototype), i.prototype.constructor = i, T(i, c), a.peek = function() {
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
            if ("object" != k(n) || !n) return n;
            var e = n[Symbol.toPrimitive];
            if (void 0 !== e) {
              var t = e.call(n, "string");
              if ("object" != k(t)) return t;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(n)
          }(n);
          return "symbol" == k(e) ? e : e + ""
        }(c)) in i ? Object.defineProperty(i, c, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[c] = a, f
      })((function() {
        return null
      }));
      var Vn, Yn, Kn = (0, o.forwardRef)((function(n, e) {
          return u().createElement(I, r({
            sideCar: Hn,
            ref: e
          }, n))
        })),
        zn = I.propTypes || {};
      zn.sideCar,
        function(n, e) {
          if (null == n) return {};
          var t = {};
          for (var r in n)
            if ({}.hasOwnProperty.call(n, r)) {
              if (-1 !== e.indexOf(r)) continue;
              t[r] = n[r]
            }
        }(zn, ["sideCar"]), Kn.propTypes = {};
      const Jn = Kn;
      var Qn = function(n) {
        var e = n.disabled,
          t = void 0 !== e && e,
          o = n.children,
          i = n.className,
          c = void 0 === i ? void 0 : i;
        return u().createElement("div", r({}, Fn(f, !t), {
          className: c
        }), o)
      };
      Qn.propTypes = {};
      const Xn = Qn;
      var Zn = function(n) {
        (0, o.useEffect)((function() {
          var e = !0;
          return x.useMedium((function(t) {
              var r = n && n.current;
              e && r && (t.focusInside(r) || t.moveFocusInside(r, null))
            })),
            function() {
              e = !1
            }
        }), [n])
      };

      function $n(n) {
        var e = n.disabled,
          t = void 0 !== e && e,
          i = n.className,
          c = n.children,
          a = (0, o.useRef)(null);
        return Zn(t ? void 0 : a), u().createElement("div", r({}, Fn(f, !t), {
          ref: a,
          className: i
        }), c)
      }
      $n.propTypes = {};
      const ne = $n;
      var ee = function(n) {
        var e = n.children,
          t = n.className;
        return u().createElement("div", r({}, Fn(a, !0), {
          className: t
        }), e)
      };
      ee.propTypes = {};
      const te = ee;
      var re = function(n) {
          return n.map(Mn).filter(Boolean)
        },
        oe = function(n) {
          return new Promise((function(e) {
            return x.useMedium((function() {
              e(n.apply(void 0, arguments))
            }))
          }))
        },
        ue = function() {
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
          if (!e.length) throw new Error("useFocusController requires at least one target element");
          var u = (0, o.useRef)(e);
          return u.current = e, (0, o.useMemo)((function() {
            return {
              autoFocus: function(n) {
                return void 0 === n && (n = {}), oe((function(e) {
                  return e.moveFocusInside(re(u.current), null, n)
                }))
              },
              focusNext: function(n) {
                return oe((function(e) {
                  e.moveFocusInside(re(u.current), null), e.focusNextElement(document.activeElement, r({
                    scope: re(u.current)
                  }, n))
                }))
              },
              focusPrev: function(n) {
                return oe((function(e) {
                  e.moveFocusInside(re(u.current), null), e.focusPrevElement(document.activeElement, r({
                    scope: re(u.current)
                  }, n))
                }))
              },
              focusFirst: function(n) {
                return oe((function(e) {
                  e.focusFirstElement(re(u.current), n)
                }))
              },
              focusLast: function(n) {
                return oe((function(e) {
                  e.focusLastElement(re(u.current), n)
                }))
              }
            }
          }), [])
        },
        ie = function() {
          var n = (0, o.useContext)(N);
          if (!n) throw new Error("FocusLock is required to operate with FocusScope");
          return ue.apply(void 0, [n.observed].concat(n.shards))
        },
        ce = {
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
        ae = 0,
        fe = function(n) {
          return ce.emit("assign", n.target)
        },
        de = function(n) {
          return ce.emit("reset", n.target)
        },
        se = function(n, e) {
          return n === e ? "self" : e.contains(n) ? "within" : "within-boundary"
        },
        le = function(n) {
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
              r(e), c(se(document.activeElement, a.current)), e && n.onFocus && n.onFocus()
            }
          }), []);
          var s = (0, o.useCallback)((function(n) {
            f.current = {
              focused: !0,
              state: se(n.target, n.currentTarget)
            }
          }), []);
          return (0, o.useEffect)((function() {
            return ae || (document.addEventListener("focusin", fe), document.addEventListener("focusout", de)), ae += 1,
              function() {
                (ae -= 1) || (document.removeEventListener("focusin", fe), document.removeEventListener("focusout", de))
              }
          }), []), (0, o.useEffect)((function() {
            var e = ce.on("reset", (function() {
                f.current = {}
              })),
              t = ce.on("assign", (function() {
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
      const ve = Jn
    }
  }
]);