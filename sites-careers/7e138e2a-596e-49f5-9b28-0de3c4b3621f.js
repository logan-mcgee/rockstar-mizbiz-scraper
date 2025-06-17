! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7e138e2a-596e-49f5-9b28-0de3c4b3621f", e._sentryDebugIdIdentifier = "sentry-dbid-7e138e2a-596e-49f5-9b28-0de3c4b3621f")
  } catch (e) {}
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
    802: (e, n, t) => {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
      }
      t.d(n, {
        A: () => r
      })
    },
    1916: (e, n, t) => {
      function r(e, n) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
          return e.__proto__ = n, e
        }, r(e, n)
      }
      t.d(n, {
        A: () => r
      })
    },
    2773: (e, n, t) => {
      function r(e, n) {
        if (null == e) return {};
        var t = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== n.indexOf(r)) continue;
            t[r] = e[r]
          } return t
      }
      t.d(n, {
        A: () => r
      })
    },
    6146: (e, n, t) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
          }
          return e
        }, r.apply(null, arguments)
      }
      t.d(n, {
        A: () => r
      })
    },
    6518: (e, n, t) => {
      t.r(n), t.d(n, {
        AutoFocusInside: () => Xe,
        FocusLockUI: () => I,
        FreeFocusInside: () => tn,
        InFocusGuard: () => b,
        MoveFocusInside: () => en,
        default: () => mn,
        useFocusController: () => un,
        useFocusInside: () => Ze,
        useFocusScope: () => cn,
        useFocusState: () => vn
      });
      var r = t(2773),
        o = t(6146),
        u = t(2229),
        i = t.n(u),
        c = (t(7145), "data-focus-lock"),
        a = "data-focus-lock-disabled",
        f = "data-no-focus-lock",
        d = "data-autofocus-inside";

      function s(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
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
        p = function(e) {
          var n = e.children,
            t = void 0 === n ? null : n;
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

      function h(e) {
        return e
      }

      function g(e, n) {
        void 0 === n && (n = h);
        var t = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return t.length ? t[t.length - 1] : e
          },
          useMedium: function(e) {
            var o = n(e, r);
            return t.push(o),
              function() {
                t = t.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; t.length;) {
              var n = t;
              t = [], n.forEach(e)
            }
            t = {
              push: function(n) {
                return e(n)
              },
              filter: function() {
                return t
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var n = [];
            if (t.length) {
              var o = t;
              t = [], o.forEach(e), n = t
            }
            var u = function() {
                var t = n;
                n = [], t.forEach(e)
              },
              i = function() {
                return Promise.resolve().then(u)
              };
            i(), t = {
              push: function(e) {
                n.push(e), i()
              },
              filter: function(e) {
                return n = n.filter(e), t
              }
            }
          }
        }
      }

      function E(e, n) {
        return void 0 === n && (n = h), g(e, n)
      }
      var w = E({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        M = E(),
        x = E(),
        O = function(e) {
          void 0 === e && (e = {});
          var n = g(null);
          return n.options = (0, y.__assign)({
            async: !0,
            ssr: !1
          }, e), n
        }({
          async: !0,
          ssr: "undefined" != typeof document
        }),
        N = (0, u.createContext)(void 0),
        F = [],
        A = (0, u.forwardRef)((function(e, n) {
          var t, r, f, d, p, b, y, h = (0, u.useState)(),
            g = h[0],
            E = h[1],
            x = (0, u.useRef)(),
            A = (0, u.useRef)(!1),
            I = (0, u.useRef)(null),
            T = (0, u.useState)({})[1],
            k = e.children,
            S = e.disabled,
            _ = void 0 !== S && S,
            C = e.noFocusGuards,
            D = void 0 !== C && C,
            L = e.persistentFocus,
            P = void 0 !== L && L,
            R = e.crossFrame,
            G = void 0 === R || R,
            j = e.autoFocus,
            B = void 0 === j || j,
            U = (e.allowTextSelection, e.group),
            W = e.className,
            q = e.whiteList,
            H = e.hasPositiveIndices,
            V = e.shards,
            Y = void 0 === V ? F : V,
            K = e.as,
            z = void 0 === K ? "div" : K,
            J = e.lockProps,
            Q = void 0 === J ? {} : J,
            X = e.sideCar,
            Z = e.returnFocus,
            $ = void 0 !== Z && Z,
            ee = e.focusOptions,
            ne = e.onActivation,
            te = e.onDeactivation,
            re = (0, u.useState)({})[0],
            oe = (0, u.useCallback)((function(e) {
              var n = e.captureFocusRestore;
              if (!I.current) {
                var t, r = null == (t = document) ? void 0 : t.activeElement;
                I.current = r, r !== document.body && (I.current = n(r))
              }
              x.current && ne && ne(x.current), A.current = !0, T()
            }), [ne]),
            ue = (0, u.useCallback)((function() {
              A.current = !1, te && te(x.current), T()
            }), [te]),
            ie = (0, u.useCallback)((function(e) {
              var n = I.current;
              if (n) {
                var t = ("function" == typeof n ? n() : n) || document.body,
                  r = "function" == typeof $ ? $(t) : $;
                if (r) {
                  var o = "object" == typeof r ? r : void 0;
                  I.current = null, e ? Promise.resolve().then((function() {
                    return t.focus(o)
                  })) : t.focus(o)
                }
              }
            }), [$]),
            ce = (0, u.useCallback)((function(e) {
              A.current && w.useMedium(e)
            }), []),
            ae = M.useMedium,
            fe = (0, u.useCallback)((function(e) {
              x.current !== e && (x.current = e, E(e))
            }), []),
            de = (0, o.A)(((t = {})[a] = _ && "disabled", t[c] = U, t), Q),
            se = !0 !== D,
            le = se && "tail" !== D,
            ve = (r = [n, fe], d = f || null, p = function(e) {
              return r.forEach((function(n) {
                return s(n, e)
              }))
            }, (b = (0, u.useState)((function() {
              return {
                value: d,
                callback: p,
                facade: {
                  get current() {
                    return b.value
                  },
                  set current(e) {
                    var n = b.value;
                    n !== e && (b.value = e, b.callback(e, n))
                  }
                }
              }
            }))[0]).callback = p, y = b.facade, l((function() {
              var e = v.get(y);
              if (e) {
                var n = new Set(e),
                  t = new Set(r),
                  o = y.current;
                n.forEach((function(e) {
                  t.has(e) || s(e, null)
                })), t.forEach((function(e) {
                  n.has(e) || s(e, o)
                }))
              }
              v.set(y, r)
            }), [r]), y),
            me = (0, u.useMemo)((function() {
              return {
                observed: x,
                shards: Y,
                enabled: !_,
                active: A.current
              }
            }), [_, A.current, Y, g]);
          return i().createElement(u.Fragment, null, se && [i().createElement("div", {
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
            id: re,
            sideCar: O,
            observed: g,
            disabled: _,
            persistentFocus: P,
            crossFrame: G,
            autoFocus: B,
            whiteList: q,
            shards: Y,
            onActivation: oe,
            onDeactivation: ue,
            returnFocus: ie,
            focusOptions: ee,
            noFocusGuards: D
          }), i().createElement(z, (0, o.A)({
            ref: ve
          }, de, {
            className: W,
            onBlur: ae,
            onFocus: ce
          }), i().createElement(N.Provider, {
            value: me
          }, k)), le && i().createElement("div", {
            "data-focus-guard": !0,
            tabIndex: _ ? -1 : 0,
            style: m
          }))
        }));
      A.propTypes = {};
      const I = A;
      var T = t(1916),
        k = t(7845);
      var S = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        _ = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        C = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        D = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        L = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        P = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || L(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && ! function(e) {
              return e.hasAttribute("inert")
            }(e) && n(D(e))
          }(n, P.bind(void 0, e));
          return e.set(n, r), r
        },
        R = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !L(e)) || !!U(e) && n(D(e))
          }(n, R.bind(void 0, e));
          return e.set(n, r), r
        },
        G = function(e) {
          return e.dataset
        },
        j = function(e) {
          return "INPUT" === e.tagName
        },
        B = function(e) {
          return j(e) && "radio" === e.type
        },
        U = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        W = function(e) {
          var n;
          return Boolean(e && (null === (n = G(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        q = function(e) {
          return !W(e)
        },
        H = function(e) {
          return Boolean(e)
        },
        V = function(e, n) {
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
        Y = function(e, n, t) {
          return S(e).map((function(e, n) {
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
          })).sort(V)
        },
        K = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        z = "".concat(K, ", [data-focus-guard]"),
        J = function(e, n) {
          return S((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? z : K) ? [t] : [], J(t))
          }), [])
        },
        Q = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = J(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? Q([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? S(t.parentNode.querySelectorAll(K)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        X = function(e, n) {
          return S(e).filter((function(e) {
            return P(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((j(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        Z = function(e, n) {
          return void 0 === n && (n = new Map), S(e).filter((function(e) {
            return R(n, e)
          }))
        },
        $ = function(e, n, t) {
          return Y(X(Q(e, t), n), !0, t)
        },
        ee = function(e, n) {
          return Y(X(Q(e), n), !1)
        },
        ne = function(e, n) {
          return e.shadowRoot ? ne(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || S(e.children).some((function(e) {
            var t;
            if (e instanceof HTMLIFrameElement) {
              var r = null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && ne(r, n)
            }
            return ne(e, n)
          }))
        },
        te = function(e) {
          if (void 0 === e && (e = document), e && e.activeElement) {
            var n = e.activeElement;
            return n.shadowRoot ? te(n.shadowRoot) : n instanceof HTMLIFrameElement && function() {
              try {
                return n.contentWindow.document
              } catch (e) {
                return
              }
            }() ? te(n.contentWindow.document) : n
          }
        },
        re = function(e) {
          return e.parentNode ? re(e.parentNode) : e
        },
        oe = function(e) {
          return _(e).filter(Boolean).reduce((function(e, n) {
            var t = n.getAttribute(c);
            return e.push.apply(e, t ? function(e) {
              for (var n = new Set, t = e.length, r = 0; r < t; r += 1)
                for (var o = r + 1; o < t; o += 1) {
                  var u = e[r].compareDocumentPosition(e[o]);
                  (u & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && n.add(o), (u & Node.DOCUMENT_POSITION_CONTAINS) > 0 && n.add(r)
                }
              return e.filter((function(e, t) {
                return !n.has(t)
              }))
            }(S(re(n).querySelectorAll("[".concat(c, '="').concat(t, '"]:not([').concat(a, '="disabled"])')))) : [n]), e
          }), [])
        },
        ue = function(e, n) {
          return void 0 === n && (n = te(C(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && oe(e).some((function(e) {
            return ne(e, n) || function(e, n) {
              return Boolean(S(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        ie = function(e, n) {
          e && ("focus" in e && e.focus(n), "contentWindow" in e && e.contentWindow && e.contentWindow.focus())
        },
        ce = function(e, n) {
          return B(e) && e.name ? function(e, n) {
            return n.filter(B).filter((function(n) {
              return n.name === e.name
            })).filter((function(e) {
              return e.checked
            }))[0] || e
          }(e, n) : e
        },
        ae = function(e) {
          return e[0] && e.length > 1 ? ce(e[0], e) : e[0]
        },
        fe = function(e, n) {
          return e.indexOf(ce(n, e))
        },
        de = "NEW_FOCUS",
        se = function(e, n, t) {
          var r, o = e.map((function(e) {
              return e.node
            })),
            u = Z(o.filter((r = t, function(e) {
              var n, t = null === (n = G(e)) || void 0 === n ? void 0 : n.autofocus;
              return e.autofocus || void 0 !== t && "false" !== t || r.indexOf(e) >= 0
            })));
          return u && u.length ? ae(u) : ae(Z(n))
        },
        le = function(e, n) {
          return void 0 === n && (n = []), n.push(e), e.parentNode && le(e.parentNode.host || e.parentNode, n), n
        },
        ve = function(e, n) {
          for (var t = le(e), r = le(n), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        me = function(e, n, t) {
          var r = _(e),
            o = _(n),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(e) {
            i = ve(i || e, e) || i, t.filter(Boolean).forEach((function(e) {
              var n = ve(u, e);
              n && (i = !i || ne(n, i) ? n : ve(n, i))
            }))
          })), i
        },
        pe = function(e, n) {
          return e.reduce((function(e, t) {
            return e.concat(function(e, n) {
              return X((t = e.querySelectorAll("[".concat(d, "]")), S(t).map((function(e) {
                return Q([e])
              })).reduce((function(e, n) {
                return e.concat(n)
              }), [])), n);
              var t
            }(t, n))
          }), [])
        },
        be = function(e, n) {
          var t = te(_(e).length > 0 ? document : C(e).ownerDocument),
            r = oe(e).filter(q),
            o = me(t || e, e, r),
            u = new Map,
            i = ee(r, u),
            c = i.filter((function(e) {
              var n = e.node;
              return q(n)
            }));
          if (c[0]) {
            var a, f, d, s = ee([o], u).map((function(e) {
                return e.node
              })),
              l = (a = s, f = c, d = new Map, f.forEach((function(e) {
                return d.set(e.node, e)
              })), a.map((function(e) {
                return d.get(e)
              })).filter(H)),
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
                  a = W(r);
                if (!(r && e.indexOf(r) >= 0)) {
                  var f = void 0 !== r ? t.indexOf(r) : -1,
                    d = o ? t.indexOf(o) : f,
                    s = o ? e.indexOf(o) : -1;
                  if (-1 === f) return -1 !== s ? s : de;
                  if (-1 === s) return de;
                  var l, v, m = f - d,
                    p = t.indexOf(i),
                    b = t.indexOf(c),
                    y = (l = t, v = new Set, l.forEach((function(e) {
                      return v.add(ce(e, l))
                    })), l.filter((function(e) {
                      return v.has(e)
                    }))),
                    h = void 0 !== r ? y.indexOf(r) : -1,
                    g = o ? y.indexOf(o) : h,
                    E = y.filter((function(e) {
                      return e.tabIndex >= 0
                    })),
                    w = void 0 !== r ? E.indexOf(r) : -1,
                    M = o ? E.indexOf(o) : w,
                    x = w >= 0 && M >= 0 ? M - w : g - h;
                  if (!m && s >= 0) return s;
                  if (0 === n.length) return s;
                  var O = fe(e, n[0]),
                    N = fe(e, n[n.length - 1]);
                  return f <= p && a && Math.abs(m) > 1 ? N : f >= b && a && Math.abs(m) > 1 ? O : m && Math.abs(x) > 1 ? s : f <= p ? N : f > b ? O : m ? Math.abs(m) > 1 ? s : (u + s + m) % u : void 0
                }
              }(v, m, s, t, n);
            if (p === de) {
              var b = se(i, m, pe(r, u)) || se(i, v, pe(r, u));
              return b ? {
                node: b
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === p ? p : l[p]
          }
        },
        ye = 0,
        he = !1,
        ge = function(e, n, t) {
          void 0 === t && (t = {});
          var r = be(e, n);
          if (!he && r) {
            if (ye > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), he = !0, void setTimeout((function() {
              he = !1
            }), 1);
            ye++, ie(r.node, t.focusOptions), ye--
          }
        };

      function Ee(e) {
        if (!e) return null;
        if ("undefined" == typeof WeakRef) return function() {
          return e || null
        };
        var n = e ? new WeakRef(e) : null;
        return function() {
          return (null == n ? void 0 : n.deref()) || null
        }
      }
      var we = function(e) {
          var n = function(e) {
            if (!e) return null;
            for (var n = [], t = e; t && t !== document.body;) n.push({
              current: Ee(t),
              parent: Ee(t.parentElement),
              left: Ee(t.previousElementSibling),
              right: Ee(t.nextElementSibling)
            }), t = t.parentElement;
            return {
              element: Ee(e),
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
            }(n)
          }
        },
        Me = function(e, n, t) {
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
              var r = _(n);
              if (r.every((function(n) {
                  return !ne(n, e)
                }))) return console.error("Active element is not contained in the scope"), {};
              var o = t ? $(r, new Map) : ee(r, new Map),
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
            u && ie(u.node, r.focusOptions)
          }
        },
        xe = function(e, n, t) {
          var r, o, u, i, c = (o = e, u = null === (r = n.onlyTabbable) || void 0 === r || r, {
            first: (i = u ? $(_(o), new Map) : ee(_(o), new Map))[0],
            last: i[i.length - 1]
          })[t];
          c && ie(c.node, n.focusOptions)
        };

      function Oe(e) {
        setTimeout(e, 1)
      }
      var Ne = function(e, n) {
          var t = {};
          return t[e] = n, t
        },
        Fe = function(e) {
          return e && "current" in e ? e.current : e
        },
        Ae = function() {
          return document && document.activeElement === document.body
        },
        Ie = null,
        Te = null,
        ke = function() {
          return null
        },
        Se = null,
        _e = !1,
        Ce = !1,
        De = function() {
          return !0
        };

      function Le(e, n, t, r) {
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
      var Pe = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        Re = function(e) {
          return ee(e, new Map)
        },
        Ge = function() {
          var e, n, t, r, o, u, i, c = !1;
          if (Ie) {
            var a = Ie,
              d = a.observed,
              s = a.persistentFocus,
              l = a.autoFocus,
              v = a.shards,
              m = a.crossFrame,
              p = a.focusOptions,
              b = a.noFocusGuards,
              y = d || Se && Se.portaledElement;
            if (Ae() && Te && Te !== document.body && (!document.body.contains(Te) || !Re([(i = Te).parentNode]).some((function(e) {
                return e.node === i
              })))) {
              var h = ke();
              h && h.focus()
            }
            var g = document && document.activeElement;
            if (y) {
              var E = [y].concat(v.map(Fe).filter(Boolean));
              if (g && ! function(e) {
                  return (Ie.whiteList || De)(e)
                }(g) || (s || function() {
                  if (!(m ? Boolean(_e) : "meanwhile" === _e) || !b || !Te || Ce) return !1;
                  var e = Re(E),
                    n = e.findIndex((function(e) {
                      return e.node === Te
                    }));
                  return 0 === n || n === e.length - 1
                }() || !(Ae() || function(e) {
                  void 0 === e && (e = document);
                  var n = te(e);
                  return !!n && S(e.querySelectorAll("[".concat(f, "]"))).some((function(e) {
                    return ne(e, n)
                  }))
                }()) || !Te && l) && (y && !(ue(E) || g && function(e, n) {
                  return n.some((function(n) {
                    return Pe(e, n, n)
                  }))
                }(g, E) || (u = g, Se && Se.portaledElement === u)) && (document && !Te && g && !l ? (g.blur && g.blur(), document.body.focus()) : (c = ge(E, Te, {
                  focusOptions: p
                }), Se = {})), (Te = document && document.activeElement) !== document.body && (ke = we(Te)), _e = !1), document && g !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                var w = document && document.activeElement,
                  M = (n = oe(e = E).filter(q), t = me(e, e, n), r = Y(Q([t], !0), !0, !0), o = Q(n, !1), r.map((function(e) {
                    var n = e.node;
                    return {
                      node: n,
                      index: e.index,
                      lockItem: o.indexOf(n) >= 0,
                      guard: W(n)
                    }
                  }))),
                  x = M.map((function(e) {
                    return e.node
                  })).indexOf(w);
                x > -1 && (M.filter((function(e) {
                  var n = e.guard,
                    t = e.node;
                  return n && t.dataset.focusAutoGuard
                })).forEach((function(e) {
                  return e.node.removeAttribute("tabIndex")
                })), Le(x, M.length, 1, M), Le(x, -1, -1, M))
              }
            }
          }
          return c
        },
        je = function(e) {
          Ge() && e && (e.stopPropagation(), e.preventDefault())
        },
        Be = function() {
          return Oe(Ge)
        },
        Ue = function() {
          Ce = !0
        },
        We = function() {
          Ce = !1, _e = "just", Oe((function() {
            _e = "meanwhile"
          }))
        },
        qe = {
          moveFocusInside: ge,
          focusInside: ue,
          focusNextElement: function(e, n) {
            void 0 === n && (n = {}), Me(e, n, (function(e, n) {
              var t = e.next,
                r = e.first;
              return t || n && r
            }))
          },
          focusPrevElement: function(e, n) {
            void 0 === n && (n = {}), Me(e, n, (function(e, n) {
              var t = e.prev,
                r = e.last;
              return t || n && r
            }))
          },
          focusFirstElement: function(e, n) {
            void 0 === n && (n = {}), xe(e, n, "first")
          },
          focusLastElement: function(e, n) {
            void 0 === n && (n = {}), xe(e, n, "last")
          },
          captureFocusRestore: we
        };
      w.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (Se = {
          observerNode: t,
          portaledElement: n
        })
      })), M.assignMedium(Be), x.assignMedium((function(e) {
        return e(qe)
      }));
      const He = (Ve = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Ye = function(e) {
        var n = e.slice(-1)[0];
        n && !Ie && (document.addEventListener("focusin", je), document.addEventListener("focusout", Be), window.addEventListener("focus", Ue), window.addEventListener("blur", We));
        var t = Ie,
          r = t && n && n.id === t.id;
        Ie = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (Te = null, r && t.observed === n.observed || n.onActivation(qe), Ge(), Oe(Ge)) : (document.removeEventListener("focusin", je), document.removeEventListener("focusout", Be), window.removeEventListener("focus", Ue), window.removeEventListener("blur", We), Te = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = Ve(t.map((function(e) {
            return e.props
          }))), Ye(n)
        }
        var o = function(o) {
          var u, c;

          function a() {
            return o.apply(this, arguments) || this
          }
          c = o, (u = a).prototype = Object.create(c.prototype), u.prototype.constructor = u, (0, T.A)(u, c), a.peek = function() {
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
            return i().createElement(e, this.props)
          }, a
        }(u.PureComponent);
        return (0, k.A)(o, "displayName", "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")"), o
      })((function() {
        return null
      }));
      var Ve, Ye, Ke = (0, u.forwardRef)((function(e, n) {
          return i().createElement(I, (0, o.A)({
            sideCar: He,
            ref: n
          }, e))
        })),
        ze = I.propTypes || {};
      ze.sideCar, (0, r.A)(ze, ["sideCar"]), Ke.propTypes = {};
      const Je = Ke;
      var Qe = function(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          r = e.children,
          u = e.className,
          c = void 0 === u ? void 0 : u;
        return i().createElement("div", (0, o.A)({}, Ne(d, !t), {
          className: c
        }), r)
      };
      Qe.propTypes = {};
      const Xe = Qe;
      var Ze = function(e) {
        (0, u.useEffect)((function() {
          var n = !0;
          return x.useMedium((function(t) {
              var r = e && e.current;
              n && r && (t.focusInside(r) || t.moveFocusInside(r, null))
            })),
            function() {
              n = !1
            }
        }), [e])
      };

      function $e(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          r = e.className,
          c = e.children,
          a = (0, u.useRef)(null);
        return Ze(t ? void 0 : a), i().createElement("div", (0, o.A)({}, Ne(d, !t), {
          ref: a,
          className: r
        }), c)
      }
      $e.propTypes = {};
      const en = $e;
      var nn = function(e) {
        var n = e.children,
          t = e.className;
        return i().createElement("div", (0, o.A)({}, Ne(f, !0), {
          className: t
        }), n)
      };
      nn.propTypes = {};
      const tn = nn;
      var rn = function(e) {
          return e.map(Fe).filter(Boolean)
        },
        on = function(e) {
          return new Promise((function(n) {
            return x.useMedium((function() {
              n(e.apply(void 0, arguments))
            }))
          }))
        },
        un = function() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          if (!n.length) throw new Error("useFocusController requires at least one target element");
          var r = (0, u.useRef)(n);
          return r.current = n, (0, u.useMemo)((function() {
            return {
              autoFocus: function(e) {
                return void 0 === e && (e = {}), on((function(n) {
                  return n.moveFocusInside(rn(r.current), null, e)
                }))
              },
              focusNext: function(e) {
                return on((function(n) {
                  n.moveFocusInside(rn(r.current), null), n.focusNextElement(document.activeElement, (0, o.A)({
                    scope: rn(r.current)
                  }, e))
                }))
              },
              focusPrev: function(e) {
                return on((function(n) {
                  n.moveFocusInside(rn(r.current), null), n.focusPrevElement(document.activeElement, (0, o.A)({
                    scope: rn(r.current)
                  }, e))
                }))
              },
              focusFirst: function(e) {
                return on((function(n) {
                  n.focusFirstElement(rn(r.current), e)
                }))
              },
              focusLast: function(e) {
                return on((function(n) {
                  n.focusLastElement(rn(r.current), e)
                }))
              }
            }
          }), [])
        },
        cn = function() {
          var e = (0, u.useContext)(N);
          if (!e) throw new Error("FocusLock is required to operate with FocusScope");
          return un.apply(void 0, [e.observed].concat(e.shards))
        },
        an = {
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
        fn = 0,
        dn = function(e) {
          return an.emit("assign", e.target)
        },
        sn = function(e) {
          return an.emit("reset", e.target)
        },
        ln = function(e, n) {
          return e === n ? "self" : n.contains(e) ? "within" : "within-boundary"
        },
        vn = function(e) {
          void 0 === e && (e = {});
          var n = (0, u.useState)(!1),
            t = n[0],
            r = n[1],
            o = (0, u.useState)(""),
            i = o[0],
            c = o[1],
            a = (0, u.useRef)(null),
            f = (0, u.useRef)({}),
            d = (0, u.useRef)(!1);
          (0, u.useEffect)((function() {
            if (a.current) {
              var n = a.current === document.activeElement || a.current.contains(document.activeElement);
              r(n), c(ln(document.activeElement, a.current)), n && e.onFocus && e.onFocus()
            }
          }), []);
          var s = (0, u.useCallback)((function(e) {
            f.current = {
              focused: !0,
              state: ln(e.target, e.currentTarget)
            }
          }), []);
          return (0, u.useEffect)((function() {
            return fn || (document.addEventListener("focusin", dn), document.addEventListener("focusout", sn)), fn += 1,
              function() {
                (fn -= 1) || (document.removeEventListener("focusin", dn), document.removeEventListener("focusout", sn))
              }
          }), []), (0, u.useEffect)((function() {
            var n = an.on("reset", (function() {
                f.current = {}
              })),
              t = an.on("assign", (function() {
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
      const mn = Je
    },
    7845: (e, n, t) => {
      t.d(n, {
        A: () => o
      });
      var r = t(8730);

      function o(e, n, t) {
        return (n = (0, r.A)(n)) in e ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = t, e
      }
    },
    8730: (e, n, t) => {
      t.d(n, {
        A: () => o
      });
      var r = t(802);

      function o(e) {
        var n = function(e) {
          if ("object" != (0, r.A)(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var t = n.call(e, "string");
            if ("object" != (0, r.A)(t)) return t;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == (0, r.A)(n) ? n : n + ""
      }
    }
  }
]);