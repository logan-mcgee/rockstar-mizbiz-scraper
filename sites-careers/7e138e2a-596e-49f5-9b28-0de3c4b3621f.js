! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      e = (new n.Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "7e138e2a-596e-49f5-9b28-0de3c4b3621f", n._sentryDebugIdIdentifier = "sentry-dbid-7e138e2a-596e-49f5-9b28-0de3c4b3621f")
  } catch (n) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [6518], {
    802: (n, e, t) => {
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
    1916: (n, e, t) => {
      function r(n, e) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, e) {
          return n.__proto__ = e, n
        }, r(n, e)
      }
      t.d(e, {
        A: () => r
      })
    },
    2773: (n, e, t) => {
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
    6146: (n, e, t) => {
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
    },
    6518: (n, e, t) => {
      t.r(e), t.d(e, {
        AutoFocusInside: () => Zn,
        FocusLockUI: () => I,
        FreeFocusInside: () => re,
        InFocusGuard: () => b,
        MoveFocusInside: () => ee,
        default: () => me,
        useFocusController: () => ie,
        useFocusInside: () => $n,
        useFocusScope: () => ce,
        useFocusState: () => ve
      });
      var r = t(2773),
        o = t(6146),
        u = t(2229),
        i = t.n(u),
        c = (t(7145), "data-focus-lock"),
        a = "data-focus-lock-disabled",
        f = "data-no-focus-lock",
        d = "data-autofocus-inside";

      function s(n, e) {
        return "function" == typeof n ? n(e) : n && (n.current = e), n
      }
      var l = "undefined" != typeof window ? u.useLayoutEffect : u.useEffect,
        v = new WeakMap;
      var m = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        p = function(n) {
          var e = n.children,
            t = void 0 === e ? null : e;
          return i().createElement(u.Fragment, null, i().createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: m
          }), t, t && i().createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: m
          }))
        };
      p.propTypes = {};
      const b = p;
      var y = t(3514);

      function h(n) {
        return n
      }

      function g(n, e) {
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

      function E(n, e) {
        return void 0 === e && (e = h), g(n, e)
      }
      var w = E({}, (function(n) {
          return {
            target: n.target,
            currentTarget: n.currentTarget
          }
        })),
        M = E(),
        x = E(),
        O = function(n) {
          void 0 === n && (n = {});
          var e = g(null);
          return e.options = (0, y.__assign)({
            async: !0,
            ssr: !1
          }, n), e
        }({
          async: !0,
          ssr: "undefined" != typeof document
        }),
        N = (0, u.createContext)(void 0),
        F = [],
        A = (0, u.forwardRef)((function(n, e) {
          var t, r, f, d, p, b, y, h = (0, u.useState)(),
            g = h[0],
            E = h[1],
            x = (0, u.useRef)(),
            A = (0, u.useRef)(!1),
            I = (0, u.useRef)(null),
            T = (0, u.useState)({})[1],
            k = n.children,
            S = n.disabled,
            _ = void 0 !== S && S,
            C = n.noFocusGuards,
            D = void 0 !== C && C,
            L = n.persistentFocus,
            P = void 0 !== L && L,
            R = n.crossFrame,
            G = void 0 === R || R,
            j = n.autoFocus,
            B = void 0 === j || j,
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
            rn = (0, u.useState)({})[0],
            on = (0, u.useCallback)((function(n) {
              var e = n.captureFocusRestore;
              if (!I.current) {
                var t, r = null == (t = document) ? void 0 : t.activeElement;
                I.current = r, r !== document.body && (I.current = e(r))
              }
              x.current && en && en(x.current), A.current = !0, T()
            }), [en]),
            un = (0, u.useCallback)((function() {
              A.current = !1, tn && tn(x.current), T()
            }), [tn]),
            cn = (0, u.useCallback)((function(n) {
              var e = I.current;
              if (e) {
                var t = ("function" == typeof e ? e() : e) || document.body,
                  r = "function" == typeof $ ? $(t) : $;
                if (r) {
                  var o = "object" == typeof r ? r : void 0;
                  I.current = null, n ? Promise.resolve().then((function() {
                    return t.focus(o)
                  })) : t.focus(o)
                }
              }
            }), [$]),
            an = (0, u.useCallback)((function(n) {
              A.current && w.useMedium(n)
            }), []),
            fn = M.useMedium,
            dn = (0, u.useCallback)((function(n) {
              x.current !== n && (x.current = n, E(n))
            }), []),
            sn = (0, o.A)(((t = {})[a] = _ && "disabled", t[c] = U, t), Q),
            ln = !0 !== D,
            vn = ln && "tail" !== D,
            mn = (r = [e, dn], d = f || null, p = function(n) {
              return r.forEach((function(e) {
                return s(e, n)
              }))
            }, (b = (0, u.useState)((function() {
              return {
                value: d,
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
            }))[0]).callback = p, y = b.facade, l((function() {
              var n = v.get(y);
              if (n) {
                var e = new Set(n),
                  t = new Set(r),
                  o = y.current;
                e.forEach((function(n) {
                  t.has(n) || s(n, null)
                })), t.forEach((function(n) {
                  e.has(n) || s(n, o)
                }))
              }
              v.set(y, r)
            }), [r]), y),
            pn = (0, u.useMemo)((function() {
              return {
                observed: x,
                shards: Y,
                enabled: !_,
                active: A.current
              }
            }), [_, A.current, Y, g]);
          return i().createElement(u.Fragment, null, ln && [i().createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: _ ? -1 : 0,
            style: m
          }), H ? i().createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: _ ? -1 : 1,
            style: m
          }) : null], !_ && i().createElement(X, {
            id: rn,
            sideCar: O,
            observed: g,
            disabled: _,
            persistentFocus: P,
            crossFrame: G,
            autoFocus: B,
            whiteList: q,
            shards: Y,
            onActivation: on,
            onDeactivation: un,
            returnFocus: cn,
            focusOptions: nn,
            noFocusGuards: D
          }), i().createElement(z, (0, o.A)({
            ref: mn
          }, sn, {
            className: W,
            onBlur: fn,
            onFocus: an
          }), i().createElement(N.Provider, {
            value: pn
          }, k)), vn && i().createElement("div", {
            "data-focus-guard": !0,
            tabIndex: _ ? -1 : 0,
            style: m
          }))
        }));
      A.propTypes = {};
      const I = A;
      var T = t(1916),
        k = t(7845);
      var S = function(n) {
          for (var e = Array(n.length), t = 0; t < n.length; ++t) e[t] = n[t];
          return e
        },
        _ = function(n) {
          return Array.isArray(n) ? n : [n]
        },
        C = function(n) {
          return Array.isArray(n) ? n[0] : n
        },
        D = function(n) {
          return n.parentNode && n.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? n.parentNode.host : n.parentNode
        },
        L = function(n) {
          return n === document || n && n.nodeType === Node.DOCUMENT_NODE
        },
        P = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !n || L(n) || ! function(n) {
              if (n.nodeType !== Node.ELEMENT_NODE) return !1;
              var e = window.getComputedStyle(n, null);
              return !(!e || !e.getPropertyValue || "none" !== e.getPropertyValue("display") && "hidden" !== e.getPropertyValue("visibility"))
            }(n) && ! function(n) {
              return n.hasAttribute("inert")
            }(n) && e(D(n))
          }(e, P.bind(void 0, n));
          return n.set(e, r), r
        },
        R = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !(n && !L(n)) || !!U(n) && e(D(n))
          }(e, R.bind(void 0, n));
          return n.set(e, r), r
        },
        G = function(n) {
          return n.dataset
        },
        j = function(n) {
          return "INPUT" === n.tagName
        },
        B = function(n) {
          return j(n) && "radio" === n.type
        },
        U = function(n) {
          var e = n.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(e)
        },
        W = function(n) {
          var e;
          return Boolean(n && (null === (e = G(n)) || void 0 === e ? void 0 : e.focusGuard))
        },
        q = function(n) {
          return !W(n)
        },
        H = function(n) {
          return Boolean(n)
        },
        V = function(n, e) {
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
        Y = function(n, e, t) {
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
          })).sort(V)
        },
        K = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        z = "".concat(K, ", [data-focus-guard]"),
        J = function(n, e) {
          return S((n.shadowRoot || n).children).reduce((function(n, t) {
            return n.concat(t.matches(e ? z : K) ? [t] : [], J(t))
          }), [])
        },
        Q = function(n, e) {
          return n.reduce((function(n, t) {
            var r, o = J(t, e),
              u = (r = []).concat.apply(r, o.map((function(n) {
                return function(n, e) {
                  var t;
                  return n instanceof HTMLIFrameElement && (null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body) ? Q([n.contentDocument.body], e) : [n]
                }(n, e)
              })));
            return n.concat(u, t.parentNode ? S(t.parentNode.querySelectorAll(K)).filter((function(n) {
              return n === t
            })) : [])
          }), [])
        },
        X = function(n, e) {
          return S(n).filter((function(n) {
            return P(e, n)
          })).filter((function(n) {
            return function(n) {
              return !((j(n) || function(n) {
                return "BUTTON" === n.tagName
              }(n)) && ("hidden" === n.type || n.disabled))
            }(n)
          }))
        },
        Z = function(n, e) {
          return void 0 === e && (e = new Map), S(n).filter((function(n) {
            return R(e, n)
          }))
        },
        $ = function(n, e, t) {
          return Y(X(Q(n, t), e), !0, t)
        },
        nn = function(n, e) {
          return Y(X(Q(n), e), !1)
        },
        en = function(n, e) {
          return n.shadowRoot ? en(n.shadowRoot, e) : !(void 0 === Object.getPrototypeOf(n).contains || !Object.getPrototypeOf(n).contains.call(n, e)) || S(n.children).some((function(n) {
            var t;
            if (n instanceof HTMLIFrameElement) {
              var r = null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && en(r, e)
            }
            return en(n, e)
          }))
        },
        tn = function(n) {
          if (void 0 === n && (n = document), n && n.activeElement) {
            var e = n.activeElement;
            return e.shadowRoot ? tn(e.shadowRoot) : e instanceof HTMLIFrameElement && function() {
              try {
                return e.contentWindow.document
              } catch (n) {
                return
              }
            }() ? tn(e.contentWindow.document) : e
          }
        },
        rn = function(n) {
          return n.parentNode ? rn(n.parentNode) : n
        },
        on = function(n) {
          return _(n).filter(Boolean).reduce((function(n, e) {
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
            }(S(rn(e).querySelectorAll("[".concat(c, '="').concat(t, '"]:not([').concat(a, '="disabled"])')))) : [e]), n
          }), [])
        },
        un = function(n, e) {
          return void 0 === e && (e = tn(C(n).ownerDocument)), !(!e || e.dataset && e.dataset.focusGuard) && on(n).some((function(n) {
            return en(n, e) || function(n, e) {
              return Boolean(S(n.querySelectorAll("iframe")).some((function(n) {
                return function(n, e) {
                  return n === e
                }(n, e)
              })))
            }(n, e)
          }))
        },
        cn = function(n, e) {
          n && ("focus" in n && n.focus(e), "contentWindow" in n && n.contentWindow && n.contentWindow.focus())
        },
        an = function(n, e) {
          return B(n) && n.name ? function(n, e) {
            return e.filter(B).filter((function(e) {
              return e.name === n.name
            })).filter((function(n) {
              return n.checked
            }))[0] || n
          }(n, e) : n
        },
        fn = function(n) {
          return n[0] && n.length > 1 ? an(n[0], n) : n[0]
        },
        dn = function(n, e) {
          return n.indexOf(an(e, n))
        },
        sn = "NEW_FOCUS",
        ln = function(n, e, t) {
          var r, o = n.map((function(n) {
              return n.node
            })),
            u = Z(o.filter((r = t, function(n) {
              var e, t = null === (e = G(n)) || void 0 === e ? void 0 : e.autofocus;
              return n.autofocus || void 0 !== t && "false" !== t || r.indexOf(n) >= 0
            })));
          return u && u.length ? fn(u) : fn(Z(e))
        },
        vn = function(n, e) {
          return void 0 === e && (e = []), e.push(n), n.parentNode && vn(n.parentNode.host || n.parentNode, e), e
        },
        mn = function(n, e) {
          for (var t = vn(n), r = vn(e), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        pn = function(n, e, t) {
          var r = _(n),
            o = _(e),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(n) {
            i = mn(i || n, n) || i, t.filter(Boolean).forEach((function(n) {
              var e = mn(u, n);
              e && (i = !i || en(e, i) ? e : mn(e, i))
            }))
          })), i
        },
        bn = function(n, e) {
          return n.reduce((function(n, t) {
            return n.concat(function(n, e) {
              return X((t = n.querySelectorAll("[".concat(d, "]")), S(t).map((function(n) {
                return Q([n])
              })).reduce((function(n, e) {
                return n.concat(e)
              }), [])), e);
              var t
            }(t, e))
          }), [])
        },
        yn = function(n, e) {
          var t = tn(_(n).length > 0 ? document : C(n).ownerDocument),
            r = on(n).filter(q),
            o = pn(t || n, n, r),
            u = new Map,
            i = nn(r, u),
            c = i.filter((function(n) {
              var e = n.node;
              return q(e)
            }));
          if (c[0]) {
            var a, f, d, s = nn([o], u).map((function(n) {
                return n.node
              })),
              l = (a = s, f = c, d = new Map, f.forEach((function(n) {
                return d.set(n.node, n)
              })), a.map((function(n) {
                return d.get(n)
              })).filter(H)),
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
                  a = W(r);
                if (!(r && n.indexOf(r) >= 0)) {
                  var f = void 0 !== r ? t.indexOf(r) : -1,
                    d = o ? t.indexOf(o) : f,
                    s = o ? n.indexOf(o) : -1;
                  if (-1 === f) return -1 !== s ? s : sn;
                  if (-1 === s) return sn;
                  var l, v, m = f - d,
                    p = t.indexOf(i),
                    b = t.indexOf(c),
                    y = (l = t, v = new Set, l.forEach((function(n) {
                      return v.add(an(n, l))
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
                  var O = dn(n, e[0]),
                    N = dn(n, e[e.length - 1]);
                  return f <= p && a && Math.abs(m) > 1 ? N : f >= b && a && Math.abs(m) > 1 ? O : m && Math.abs(x) > 1 ? s : f <= p ? N : f > b ? O : m ? Math.abs(m) > 1 ? s : (u + s + m) % u : void 0
                }
              }(v, m, s, t, e);
            if (p === sn) {
              var b = ln(i, m, bn(r, u)) || ln(i, v, bn(r, u));
              return b ? {
                node: b
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === p ? p : l[p]
          }
        },
        hn = 0,
        gn = !1,
        En = function(n, e, t) {
          void 0 === t && (t = {});
          var r = yn(n, e);
          if (!gn && r) {
            if (hn > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), gn = !0, void setTimeout((function() {
              gn = !1
            }), 1);
            hn++, cn(r.node, t.focusOptions), hn--
          }
        };

      function wn(n) {
        if (!n) return null;
        if ("undefined" == typeof WeakRef) return function() {
          return n || null
        };
        var e = n ? new WeakRef(n) : null;
        return function() {
          return (null == e ? void 0 : e.deref()) || null
        }
      }
      var Mn = function(n) {
          var e = function(n) {
            if (!n) return null;
            for (var e = [], t = n; t && t !== document.body;) e.push({
              current: wn(t),
              parent: wn(t.parentElement),
              left: wn(t.previousElementSibling),
              right: wn(t.nextElementSibling)
            }), t = t.parentElement;
            return {
              element: wn(n),
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
                    for (var v = null === (t = s.left) || void 0 === t ? void 0 : t.call(s), m = s.current(), p = l.contains(m) ? m : void 0, b = null === (r = s.right) || void 0 === r ? void 0 : r.call(s), y = $([l], a), h = null !== (u = null !== (o = null != p ? p : null == v ? void 0 : v.nextElementSibling) && void 0 !== o ? o : b) && void 0 !== u ? u : v; h;) {
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
                  return !en(e, n)
                }))) return console.error("Active element is not contained in the scope"), {};
              var o = t ? $(r, new Map) : nn(r, new Map),
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
            u && cn(u.node, r.focusOptions)
          }
        },
        On = function(n, e, t) {
          var r, o, u, i, c = (o = n, u = null === (r = e.onlyTabbable) || void 0 === r || r, {
            first: (i = u ? $(_(o), new Map) : nn(_(o), new Map))[0],
            last: i[i.length - 1]
          })[t];
          c && cn(c.node, e.focusOptions)
        };

      function Nn(n) {
        setTimeout(n, 1)
      }
      var Fn = function(n, e) {
          var t = {};
          return t[n] = e, t
        },
        An = function(n) {
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
        Cn = !1,
        Dn = !1,
        Ln = function() {
          return !0
        };

      function Pn(n, e, t, r) {
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
      var Rn = function n(e, t, r) {
          return t && (t.host === e && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && n(e, t.parentNode, r))
        },
        Gn = function(n) {
          return nn(n, new Map)
        },
        jn = function() {
          var n, e, t, r, o, u, i, c = !1;
          if (Tn) {
            var a = Tn,
              d = a.observed,
              s = a.persistentFocus,
              l = a.autoFocus,
              v = a.shards,
              m = a.crossFrame,
              p = a.focusOptions,
              b = a.noFocusGuards,
              y = d || _n && _n.portaledElement;
            if (In() && kn && kn !== document.body && (!document.body.contains(kn) || !Gn([(i = kn).parentNode]).some((function(n) {
                return n.node === i
              })))) {
              var h = Sn();
              h && h.focus()
            }
            var g = document && document.activeElement;
            if (y) {
              var E = [y].concat(v.map(An).filter(Boolean));
              if (g && ! function(n) {
                  return (Tn.whiteList || Ln)(n)
                }(g) || (s || function() {
                  if (!(m ? Boolean(Cn) : "meanwhile" === Cn) || !b || !kn || Dn) return !1;
                  var n = Gn(E),
                    e = n.findIndex((function(n) {
                      return n.node === kn
                    }));
                  return 0 === e || e === n.length - 1
                }() || !(In() || function(n) {
                  void 0 === n && (n = document);
                  var e = tn(n);
                  return !!e && S(n.querySelectorAll("[".concat(f, "]"))).some((function(n) {
                    return en(n, e)
                  }))
                }()) || !kn && l) && (y && !(un(E) || g && function(n, e) {
                  return e.some((function(e) {
                    return Rn(n, e, e)
                  }))
                }(g, E) || (u = g, _n && _n.portaledElement === u)) && (document && !kn && g && !l ? (g.blur && g.blur(), document.body.focus()) : (c = En(E, kn, {
                  focusOptions: p
                }), _n = {})), (kn = document && document.activeElement) !== document.body && (Sn = Mn(kn)), Cn = !1), document && g !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                var w = document && document.activeElement,
                  M = (e = on(n = E).filter(q), t = pn(n, n, e), r = Y(Q([t], !0), !0, !0), o = Q(e, !1), r.map((function(n) {
                    var e = n.node;
                    return {
                      node: e,
                      index: n.index,
                      lockItem: o.indexOf(e) >= 0,
                      guard: W(e)
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
                })), Pn(x, M.length, 1, M), Pn(x, -1, -1, M))
              }
            }
          }
          return c
        },
        Bn = function(n) {
          jn() && n && (n.stopPropagation(), n.preventDefault())
        },
        Un = function() {
          return Nn(jn)
        },
        Wn = function() {
          Dn = !0
        },
        qn = function() {
          Dn = !1, Cn = "just", Nn((function() {
            Cn = "meanwhile"
          }))
        },
        Hn = {
          moveFocusInside: En,
          focusInside: un,
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
          captureFocusRestore: Mn
        };
      w.assignSyncMedium((function(n) {
        var e = n.target,
          t = n.currentTarget;
        t.contains(e) || (_n = {
          observerNode: t,
          portaledElement: e
        })
      })), M.assignMedium(Un), x.assignMedium((function(n) {
        return n(Hn)
      }));
      const Vn = (Yn = function(n) {
        return n.filter((function(n) {
          return !n.disabled
        }))
      }, Kn = function(n) {
        var e = n.slice(-1)[0];
        e && !Tn && (document.addEventListener("focusin", Bn), document.addEventListener("focusout", Un), window.addEventListener("focus", Wn), window.addEventListener("blur", qn));
        var t = Tn,
          r = t && e && e.id === t.id;
        Tn = e, t && !r && (t.onDeactivation(), n.filter((function(n) {
          return n.id === t.id
        })).length || t.returnFocus(!e)), e ? (kn = null, r && t.observed === e.observed || e.onActivation(Hn), jn(), Nn(jn)) : (document.removeEventListener("focusin", Bn), document.removeEventListener("focusout", Un), window.removeEventListener("focus", Wn), window.removeEventListener("blur", qn), kn = null)
      }, function(n) {
        var e, t = [];

        function r() {
          e = Yn(t.map((function(n) {
            return n.props
          }))), Kn(e)
        }
        var o = function(o) {
          var u, c;

          function a() {
            return o.apply(this, arguments) || this
          }
          c = o, (u = a).prototype = Object.create(c.prototype), u.prototype.constructor = u, (0, T.A)(u, c), a.peek = function() {
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
            return i().createElement(n, this.props)
          }, a
        }(u.PureComponent);
        return (0, k.A)(o, "displayName", "SideEffect(" + function(n) {
          return n.displayName || n.name || "Component"
        }(n) + ")"), o
      })((function() {
        return null
      }));
      var Yn, Kn, zn = (0, u.forwardRef)((function(n, e) {
          return i().createElement(I, (0, o.A)({
            sideCar: Vn,
            ref: e
          }, n))
        })),
        Jn = I.propTypes || {};
      Jn.sideCar, (0, r.A)(Jn, ["sideCar"]), zn.propTypes = {};
      const Qn = zn;
      var Xn = function(n) {
        var e = n.disabled,
          t = void 0 !== e && e,
          r = n.children,
          u = n.className,
          c = void 0 === u ? void 0 : u;
        return i().createElement("div", (0, o.A)({}, Fn(d, !t), {
          className: c
        }), r)
      };
      Xn.propTypes = {};
      const Zn = Xn;
      var $n = function(n) {
        (0, u.useEffect)((function() {
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

      function ne(n) {
        var e = n.disabled,
          t = void 0 !== e && e,
          r = n.className,
          c = n.children,
          a = (0, u.useRef)(null);
        return $n(t ? void 0 : a), i().createElement("div", (0, o.A)({}, Fn(d, !t), {
          ref: a,
          className: r
        }), c)
      }
      ne.propTypes = {};
      const ee = ne;
      var te = function(n) {
        var e = n.children,
          t = n.className;
        return i().createElement("div", (0, o.A)({}, Fn(f, !0), {
          className: t
        }), e)
      };
      te.propTypes = {};
      const re = te;
      var oe = function(n) {
          return n.map(An).filter(Boolean)
        },
        ue = function(n) {
          return new Promise((function(e) {
            return x.useMedium((function() {
              e(n.apply(void 0, arguments))
            }))
          }))
        },
        ie = function() {
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
          if (!e.length) throw new Error("useFocusController requires at least one target element");
          var r = (0, u.useRef)(e);
          return r.current = e, (0, u.useMemo)((function() {
            return {
              autoFocus: function(n) {
                return void 0 === n && (n = {}), ue((function(e) {
                  return e.moveFocusInside(oe(r.current), null, n)
                }))
              },
              focusNext: function(n) {
                return ue((function(e) {
                  e.moveFocusInside(oe(r.current), null), e.focusNextElement(document.activeElement, (0, o.A)({
                    scope: oe(r.current)
                  }, n))
                }))
              },
              focusPrev: function(n) {
                return ue((function(e) {
                  e.moveFocusInside(oe(r.current), null), e.focusPrevElement(document.activeElement, (0, o.A)({
                    scope: oe(r.current)
                  }, n))
                }))
              },
              focusFirst: function(n) {
                return ue((function(e) {
                  e.focusFirstElement(oe(r.current), n)
                }))
              },
              focusLast: function(n) {
                return ue((function(e) {
                  e.focusLastElement(oe(r.current), n)
                }))
              }
            }
          }), [])
        },
        ce = function() {
          var n = (0, u.useContext)(N);
          if (!n) throw new Error("FocusLock is required to operate with FocusScope");
          return ie.apply(void 0, [n.observed].concat(n.shards))
        },
        ae = {
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
        fe = 0,
        de = function(n) {
          return ae.emit("assign", n.target)
        },
        se = function(n) {
          return ae.emit("reset", n.target)
        },
        le = function(n, e) {
          return n === e ? "self" : e.contains(n) ? "within" : "within-boundary"
        },
        ve = function(n) {
          void 0 === n && (n = {});
          var e = (0, u.useState)(!1),
            t = e[0],
            r = e[1],
            o = (0, u.useState)(""),
            i = o[0],
            c = o[1],
            a = (0, u.useRef)(null),
            f = (0, u.useRef)({}),
            d = (0, u.useRef)(!1);
          (0, u.useEffect)((function() {
            if (a.current) {
              var e = a.current === document.activeElement || a.current.contains(document.activeElement);
              r(e), c(le(document.activeElement, a.current)), e && n.onFocus && n.onFocus()
            }
          }), []);
          var s = (0, u.useCallback)((function(n) {
            f.current = {
              focused: !0,
              state: le(n.target, n.currentTarget)
            }
          }), []);
          return (0, u.useEffect)((function() {
            return fe || (document.addEventListener("focusin", de), document.addEventListener("focusout", se)), fe += 1,
              function() {
                (fe -= 1) || (document.removeEventListener("focusin", de), document.removeEventListener("focusout", se))
              }
          }), []), (0, u.useEffect)((function() {
            var e = ae.on("reset", (function() {
                f.current = {}
              })),
              t = ae.on("assign", (function() {
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
      const me = Qn
    },
    7845: (n, e, t) => {
      t.d(e, {
        A: () => o
      });
      var r = t(8730);

      function o(n, e, t) {
        return (e = (0, r.A)(e)) in n ? Object.defineProperty(n, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : n[e] = t, n
      }
    },
    8730: (n, e, t) => {
      t.d(e, {
        A: () => o
      });
      var r = t(802);

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
    }
  }
]);