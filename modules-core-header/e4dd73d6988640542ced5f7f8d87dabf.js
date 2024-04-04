! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6b7db0cd-c481-48a0-8c2e-792636fa1df3", e._sentryDebugIdIdentifier = "sentry-dbid-6b7db0cd-c481-48a0-8c2e-792636fa1df3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [92, 472], {
    21472: (e, n, t) => {
      t.r(n), t.d(n, {
        AutoFocusInside: () => Ae,
        FocusLockUI: () => x,
        FreeFocusInside: () => Be,
        InFocusGuard: () => v,
        MoveFocusInside: () => Le,
        default: () => Ge,
        useFocusInside: () => Ce
      });
      var r = t(31632),
        o = t(82795),
        u = t(51664),
        c = t.n(u),
        i = "data-focus-lock",
        a = "data-focus-lock-disabled",
        d = "data-no-focus-lock",
        f = "data-autofocus-inside";
      var s = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        l = function(e) {
          var n = e.children;
          return u.createElement(u.Fragment, null, u.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: s
          }), n, n && u.createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: s
          }))
        };
      l.propTypes = {}, l.defaultProps = {
        children: null
      };
      const v = l;
      var p = t(87672);

      function m(e) {
        return e
      }

      function b(e, n) {
        void 0 === n && (n = m);
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
              c = function() {
                return Promise.resolve().then(u)
              };
            c(), t = {
              push: function(e) {
                n.push(e), c()
              },
              filter: function(e) {
                return n = n.filter(e), t
              }
            }
          }
        }
      }

      function y(e, n) {
        return void 0 === n && (n = m), b(e, n)
      }
      var h = y({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        g = y(),
        w = y(),
        E = function(e) {
          void 0 === e && (e = {});
          var n = b(null);
          return n.options = (0, p.C3)({
            async: !0,
            ssr: !1
          }, e), n
        }({
          async: !0
        }),
        O = [],
        N = u.forwardRef((function(e, n) {
          var t, r = u.useState(),
            c = r[0],
            d = r[1],
            f = u.useRef(),
            l = u.useRef(!1),
            v = u.useRef(null),
            p = e.children,
            m = e.disabled,
            b = e.noFocusGuards,
            y = e.persistentFocus,
            w = e.crossFrame,
            N = e.autoFocus,
            x = (e.allowTextSelection, e.group),
            _ = e.className,
            I = e.whiteList,
            k = e.hasPositiveIndices,
            S = e.shards,
            T = void 0 === S ? O : S,
            F = e.as,
            M = void 0 === F ? "div" : F,
            P = e.lockProps,
            j = void 0 === P ? {} : P,
            A = e.sideCar,
            C = e.returnFocus,
            D = e.focusOptions,
            L = e.onActivation,
            R = e.onDeactivation,
            B = u.useState({})[0],
            G = u.useCallback((function() {
              v.current = v.current || document && document.activeElement, f.current && L && L(f.current), l.current = !0
            }), [L]),
            U = u.useCallback((function() {
              l.current = !1, R && R(f.current)
            }), [R]);
          (0, u.useEffect)((function() {
            m || (v.current = null)
          }), []);
          var W, q, H, V, K, Y = u.useCallback((function(e) {
              var n = v.current;
              if (n && n.focus) {
                var t = "function" == typeof C ? C(n) : C;
                if (t) {
                  var r = "object" == typeof t ? t : void 0;
                  v.current = null, e ? Promise.resolve().then((function() {
                    return n.focus(r)
                  })) : n.focus(r)
                }
              }
            }), [C]),
            X = u.useCallback((function(e) {
              l.current && h.useMedium(e)
            }), []),
            z = g.useMedium,
            J = u.useCallback((function(e) {
              f.current !== e && (f.current = e, d(e))
            }), []),
            Q = (0, o.c)(((t = {})[a] = m && "disabled", t[i] = x, t), j),
            Z = !0 !== b,
            $ = Z && "tail" !== b,
            ee = (W = [n, J], H = q || null, V = function(e) {
              return W.forEach((function(n) {
                return function(e, n) {
                  return "function" == typeof e ? e(n) : e && (e.current = n), e
                }(n, e)
              }))
            }, (K = (0, u.useState)((function() {
              return {
                value: H,
                callback: V,
                facade: {
                  get current() {
                    return K.value
                  },
                  set current(e) {
                    var n = K.value;
                    n !== e && (K.value = e, K.callback(e, n))
                  }
                }
              }
            }))[0]).callback = V, K.facade);
          return u.createElement(u.Fragment, null, Z && [u.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: m ? -1 : 0,
            style: s
          }), k ? u.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: m ? -1 : 1,
            style: s
          }) : null], !m && u.createElement(A, {
            id: B,
            sideCar: E,
            observed: c,
            disabled: m,
            persistentFocus: y,
            crossFrame: w,
            autoFocus: N,
            whiteList: I,
            shards: T,
            onActivation: G,
            onDeactivation: U,
            returnFocus: Y,
            focusOptions: D
          }), u.createElement(M, (0, o.c)({
            ref: ee
          }, Q, {
            className: _,
            onBlur: z,
            onFocus: X
          }), p), $ && u.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: m ? -1 : 0,
            style: s
          }))
        }));
      N.propTypes = {}, N.defaultProps = {
        children: void 0,
        disabled: !1,
        returnFocus: !1,
        focusOptions: void 0,
        noFocusGuards: !1,
        autoFocus: !0,
        persistentFocus: !1,
        crossFrame: !0,
        hasPositiveIndices: void 0,
        allowTextSelection: void 0,
        group: void 0,
        className: void 0,
        whiteList: void 0,
        shards: void 0,
        as: "div",
        lockProps: {},
        onActivation: void 0,
        onDeactivation: void 0
      };
      const x = N;
      var _ = t(74848),
        I = t(62504);
      var k = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        S = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        T = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        F = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        M = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        P = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || M(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && n(F(e))
          }(n, P.bind(void 0, e));
          return e.set(n, r), r
        },
        j = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !M(e)) || !!L(e) && n(F(e))
          }(n, j.bind(void 0, e));
          return e.set(n, r), r
        },
        A = function(e) {
          return e.dataset
        },
        C = function(e) {
          return "INPUT" === e.tagName
        },
        D = function(e) {
          return C(e) && "radio" === e.type
        },
        L = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        R = function(e) {
          var n;
          return Boolean(e && (null === (n = A(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        B = function(e) {
          return !R(e)
        },
        G = function(e) {
          return Boolean(e)
        },
        U = function(e, n) {
          var t = e.tabIndex - n.tabIndex,
            r = e.index - n.index;
          if (t) {
            if (!e.tabIndex) return 1;
            if (!n.tabIndex) return -1
          }
          return t || r
        },
        W = function(e, n, t) {
          return k(e).map((function(e, n) {
            return {
              node: e,
              index: n,
              tabIndex: t && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
            }
          })).filter((function(e) {
            return !n || e.tabIndex >= 0
          })).sort(U)
        },
        q = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        H = "".concat(q, ", [data-focus-guard]"),
        V = function(e, n) {
          return k((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? H : q) ? [t] : [], V(t))
          }), [])
        },
        K = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = V(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? K([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? k(t.parentNode.querySelectorAll(q)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        Y = function(e, n) {
          return k(e).filter((function(e) {
            return P(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((C(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        X = function(e, n) {
          return void 0 === n && (n = new Map), k(e).filter((function(e) {
            return j(n, e)
          }))
        },
        z = function(e, n, t) {
          return W(Y(K(e, t), n), !0, t)
        },
        J = function(e, n) {
          return W(Y(K(e), n), !1)
        },
        Q = function(e, n) {
          return e.shadowRoot ? Q(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || k(e.children).some((function(e) {
            var t;
            if (e instanceof HTMLIFrameElement) {
              var r = null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && Q(r, n)
            }
            return Q(e, n)
          }))
        },
        Z = function(e) {
          if (void 0 === e && (e = document), e && e.activeElement) {
            var n = e.activeElement;
            return n.shadowRoot ? Z(n.shadowRoot) : n instanceof HTMLIFrameElement && function(e) {
              try {
                return n.contentWindow.document
              } catch (e) {
                return
              }
            }() ? Z(n.contentWindow.document) : n
          }
        },
        $ = function(e) {
          return e.parentNode ? $(e.parentNode) : e
        },
        ee = function(e) {
          return S(e).filter(Boolean).reduce((function(e, n) {
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
            }(k($(n).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(a, '="disabled"])')))) : [n]), e
          }), [])
        },
        ne = function(e, n) {
          return void 0 === n && (n = Z(T(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && ee(e).some((function(e) {
            return Q(e, n) || function(e, n) {
              return Boolean(k(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        te = function(e, n) {
          return D(e) && e.name ? function(e, n) {
            return n.filter(D).filter((function(n) {
              return n.name === e.name
            })).filter((function(e) {
              return e.checked
            }))[0] || e
          }(e, n) : e
        },
        re = function(e) {
          return e[0] && e.length > 1 ? te(e[0], e) : e[0]
        },
        oe = function(e, n) {
          return e.length > 1 ? e.indexOf(te(e[n], e)) : n
        },
        ue = "NEW_FOCUS",
        ce = function(e, n) {
          return void 0 === n && (n = []), n.push(e), e.parentNode && ce(e.parentNode.host || e.parentNode, n), n
        },
        ie = function(e, n) {
          for (var t = ce(e), r = ce(n), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        ae = function(e, n, t) {
          var r = S(e),
            o = S(n),
            u = r[0],
            c = !1;
          return o.filter(Boolean).forEach((function(e) {
            c = ie(c || e, e) || c, t.filter(Boolean).forEach((function(e) {
              var n = ie(u, e);
              n && (c = !c || Q(n, c) ? n : ie(n, c))
            }))
          })), c
        },
        de = function(e, n) {
          var t, r, o, u, c, i, a = Z(S(e).length > 0 ? document : T(e).ownerDocument),
            d = ee(e).filter(B),
            s = ae(a || e, e, d),
            l = new Map,
            v = J(d, l),
            p = z(d, l).filter((function(e) {
              var n = e.node;
              return B(n)
            }));
          if (p[0] || (p = v)[0]) {
            var m, b, y, h = J([s], l).map((function(e) {
                return e.node
              })),
              g = (m = h, b = p, y = new Map, b.forEach((function(e) {
                return y.set(e.node, e)
              })), m.map((function(e) {
                return y.get(e)
              })).filter(G)),
              w = g.map((function(e) {
                return e.node
              })),
              E = function(e, n, t, r) {
                var o = e.length,
                  u = e[0],
                  c = e[o - 1],
                  i = R(t);
                if (!(t && e.indexOf(t) >= 0)) {
                  var a, d, f = void 0 !== t ? n.indexOf(t) : -1,
                    s = r ? n.indexOf(r) : f,
                    l = r ? e.indexOf(r) : -1,
                    v = f - s,
                    p = n.indexOf(u),
                    m = n.indexOf(c),
                    b = (a = n, d = new Set, a.forEach((function(e) {
                      return d.add(te(e, a))
                    })), a.filter((function(e) {
                      return d.has(e)
                    }))),
                    y = (void 0 !== t ? b.indexOf(t) : -1) - (r ? b.indexOf(r) : f),
                    h = oe(e, 0),
                    g = oe(e, o - 1);
                  return -1 === f || -1 === l ? ue : !v && l >= 0 ? l : f <= p && i && Math.abs(v) > 1 ? g : f >= m && i && Math.abs(v) > 1 ? h : v && Math.abs(y) > 1 ? l : f <= p ? g : f > m ? h : v ? Math.abs(v) > 1 ? l : (o + l + v) % o : void 0
                }
              }(w, h, a, n);
            if (E === ue) {
              var O = (t = v, r = w, o = function(e, n) {
                return e.reduce((function(e, t) {
                  return e.concat(function(e, n) {
                    return Y((t = e.querySelectorAll("[".concat(f, "]")), k(t).map((function(e) {
                      return K([e])
                    })).reduce((function(e, n) {
                      return e.concat(n)
                    }), [])), n);
                    var t
                  }(t, n))
                }), [])
              }(d, l), c = t.map((function(e) {
                return e.node
              })), (i = X(c.filter((u = o, function(e) {
                var n, t = null === (n = A(e)) || void 0 === n ? void 0 : n.autofocus;
                return e.autofocus || void 0 !== t && "false" !== t || u.indexOf(e) >= 0
              })))) && i.length ? re(i) : re(X(r)));
              return O ? {
                node: O
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === E ? E : g[E]
          }
        },
        fe = 0,
        se = !1,
        le = function(e, n, t) {
          void 0 === t && (t = {});
          var r, o, u = de(e, n);
          if (!se && u) {
            if (fe > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), se = !0, void setTimeout((function() {
              se = !1
            }), 1);
            fe++, r = u.node, o = t.focusOptions, "focus" in r && r.focus(o), "contentWindow" in r && r.contentWindow && r.contentWindow.focus(), fe--
          }
        };

      function ve(e) {
        setTimeout(e, 1)
      }
      var pe = function(e, n) {
          var t = {};
          return t[e] = n, t
        },
        me = null,
        be = null,
        ye = null,
        he = !1,
        ge = function() {
          return !0
        };

      function we(e, n, t, r) {
        var o = null,
          u = e;
        do {
          var c = r[u];
          if (c.guard) c.node.dataset.focusAutoGuard && (o = c);
          else {
            if (!c.lockItem) break;
            if (u !== e) return;
            o = null
          }
        } while ((u += t) !== n);
        o && (o.node.tabIndex = 0)
      }
      var Ee = function(e) {
          return e && "current" in e ? e.current : e
        },
        Oe = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        Ne = function() {
          var e, n, t, r, o, u, c, i = !1;
          if (me) {
            var a = me,
              f = a.observed,
              s = a.persistentFocus,
              l = a.autoFocus,
              v = a.shards,
              p = a.crossFrame,
              m = a.focusOptions,
              b = f || ye && ye.portaledElement,
              y = document && document.activeElement;
            if (b) {
              var h = [b].concat(v.map(Ee).filter(Boolean));
              if (y && ! function(e) {
                  return (me.whiteList || ge)(e)
                }(y) || (s || (p ? Boolean(he) : "meanwhile" === he) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var n = Z(e);
                  return !!n && k(e.querySelectorAll("[".concat(d, "]"))).some((function(e) {
                    return Q(e, n)
                  }))
                }()) || !be && l) && (b && !(ne(h) || y && function(e, n) {
                  return n.some((function(n) {
                    return Oe(e, n, n)
                  }))
                }(y, h) || (c = y, ye && ye.portaledElement === c)) && (document && !be && y && !l ? (y.blur && y.blur(), document.body.focus()) : (i = le(h, be, {
                  focusOptions: m
                }), ye = {})), he = !1, be = document && document.activeElement), document) {
                var g = document && document.activeElement,
                  w = (n = ee(e = h).filter(B), t = ae(e, e, n), r = new Map, o = z([t], r, !0), u = z(n, r).filter((function(e) {
                    var n = e.node;
                    return B(n)
                  })).map((function(e) {
                    return e.node
                  })), o.map((function(e) {
                    var n = e.node;
                    return {
                      node: n,
                      index: e.index,
                      lockItem: u.indexOf(n) >= 0,
                      guard: R(n)
                    }
                  }))),
                  E = w.map((function(e) {
                    return e.node
                  })).indexOf(g);
                E > -1 && (w.filter((function(e) {
                  var n = e.guard,
                    t = e.node;
                  return n && t.dataset.focusAutoGuard
                })).forEach((function(e) {
                  return e.node.removeAttribute("tabIndex")
                })), we(E, w.length, 1, w), we(E, -1, -1, w))
              }
            }
          }
          return i
        },
        xe = function(e) {
          Ne() && e && (e.stopPropagation(), e.preventDefault())
        },
        _e = function() {
          return ve(Ne)
        },
        Ie = function() {
          he = "just", ve((function() {
            he = "meanwhile"
          }))
        };
      h.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (ye = {
          observerNode: t,
          portaledElement: n
        })
      })), g.assignMedium(_e), w.assignMedium((function(e) {
        return e({
          moveFocusInside: le,
          focusInside: ne
        })
      }));
      const ke = (Se = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Te = function(e) {
        var n = e.slice(-1)[0];
        n && !me && (document.addEventListener("focusin", xe), document.addEventListener("focusout", _e), window.addEventListener("blur", Ie));
        var t = me,
          r = t && n && n.id === t.id;
        me = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (be = null, r && t.observed === n.observed || n.onActivation(), Ne(), ve(Ne)) : (document.removeEventListener("focusin", xe), document.removeEventListener("focusout", _e), window.removeEventListener("blur", Ie), be = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = Se(t.map((function(e) {
            return e.props
          }))), Te(n)
        }
        var o = function(o) {
          var u, i;

          function a() {
            return o.apply(this, arguments) || this
          }
          i = o, (u = a).prototype = Object.create(i.prototype), u.prototype.constructor = u, (0, _.c)(u, i), a.peek = function() {
            return n
          };
          var d = a.prototype;
          return d.componentDidMount = function() {
            t.push(this), r()
          }, d.componentDidUpdate = function() {
            r()
          }, d.componentWillUnmount = function() {
            var e = t.indexOf(this);
            t.splice(e, 1), r()
          }, d.render = function() {
            return c().createElement(e, this.props)
          }, a
        }(u.PureComponent);
        return (0, I.c)(o, "displayName", "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")"), o
      })((function() {
        return null
      }));
      var Se, Te, Fe = u.forwardRef((function(e, n) {
          return u.createElement(x, (0, o.c)({
            sideCar: ke,
            ref: n
          }, e))
        })),
        Me = x.propTypes || {};
      Me.sideCar, (0, r.c)(Me, ["sideCar"]), Fe.propTypes = {};
      const Pe = Fe;
      var je = function(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          r = e.children,
          c = e.className,
          i = void 0 === c ? void 0 : c;
        return u.createElement("div", (0, o.c)({}, pe(f, !t), {
          className: i
        }), r)
      };
      je.propTypes = {};
      const Ae = je;
      var Ce = function(e) {
        u.useEffect((function() {
          var n = !0;
          return w.useMedium((function(t) {
              var r = e && e.current;
              n && r && (t.focusInside(r) || t.moveFocusInside(r, null))
            })),
            function() {
              n = !1
            }
        }), [e])
      };

      function De(e) {
        var n = e.disabled,
          t = e.className,
          r = e.children,
          c = u.useRef(null);
        return Ce(n ? void 0 : c), u.createElement("div", (0, o.c)({}, pe(f, !n), {
          ref: c,
          className: t
        }), r)
      }
      De.propTypes = {}, De.defaultProps = {
        disabled: !1,
        className: void 0
      };
      const Le = De;
      var Re = function(e) {
        var n = e.children,
          t = e.className;
        return u.createElement("div", (0, o.c)({}, pe(d, !0), {
          className: t
        }), n)
      };
      Re.propTypes = {}, Re.defaultProps = {
        className: void 0
      };
      const Be = Re,
        Ge = Pe
    },
    62504: (e, n, t) => {
      t.d(n, {
        c: () => o
      });
      var r = t(53952);

      function o(e, n, t) {
        return (n = (0, r.c)(n)) in e ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = t, e
      }
    },
    82795: (e, n, t) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          }
          return e
        }, r.apply(this, arguments)
      }
      t.d(n, {
        c: () => r
      })
    },
    31632: (e, n, t) => {
      function r(e, n) {
        if (null == e) return {};
        var t, r, o = {},
          u = Object.keys(e);
        for (r = 0; r < u.length; r++) t = u[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
      }
      t.d(n, {
        c: () => r
      })
    },
    74848: (e, n, t) => {
      function r(e, n) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
          return e.__proto__ = n, e
        }, r(e, n)
      }
      t.d(n, {
        c: () => r
      })
    },
    53952: (e, n, t) => {
      t.d(n, {
        c: () => o
      });
      var r = t(28792);

      function o(e) {
        var n = function(e, n) {
          if ("object" !== (0, r.c)(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, "string");
            if ("object" !== (0, r.c)(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" === (0, r.c)(n) ? n : String(n)
      }
    },
    28792: (e, n, t) => {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
      }
      t.d(n, {
        c: () => r
      })
    },
    87672: (e, n, t) => {
      t.d(n, {
        C3: () => u,
        KE: () => a,
        Mt: () => d,
        ct: () => o,
        kH: () => i,
        sX: () => c
      });
      var r = function(e, n) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, n) {
          e.__proto__ = n
        } || function(e, n) {
          for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
        }, r(e, n)
      };

      function o(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        r(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
      }
      var u = function() {
        return u = Object.assign || function(e) {
          for (var n, t = 1, r = arguments.length; t < r; t++)
            for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          return e
        }, u.apply(this, arguments)
      };

      function c(e, n) {
        var t = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]])
        }
        return t
      }

      function i(e, n, t, r) {
        return new(t || (t = Promise))((function(o, u) {
          function c(e) {
            try {
              a(r.next(e))
            } catch (e) {
              u(e)
            }
          }

          function i(e) {
            try {
              a(r.throw(e))
            } catch (e) {
              u(e)
            }
          }

          function a(e) {
            var n;
            e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
              e(n)
            }))).then(c, i)
          }
          a((r = r.apply(e, n || [])).next())
        }))
      }

      function a(e, n) {
        var t, r, o, u, c = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return u = {
          next: i(0),
          throw: i(1),
          return: i(2)
        }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
          return this
        }), u;

        function i(i) {
          return function(a) {
            return function(i) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; u && (u = 0, i[0] && (c = 0)), c;) try {
                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return c.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    c.label++, r = i[1], i = [0];
                    continue;
                  case 7:
                    i = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      c.label = i[1];
                      break
                    }
                    if (6 === i[0] && c.label < o[1]) {
                      c.label = o[1], o = i;
                      break
                    }
                    if (o && c.label < o[2]) {
                      c.label = o[2], c.ops.push(i);
                      break
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                i = n.call(e, c)
              } catch (e) {
                i = [6, e], r = 0
              } finally {
                t = o = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, a])
          }
        }
      }

      function d(e, n, t) {
        if (t || 2 === arguments.length)
          for (var r, o = 0, u = n.length; o < u; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
        return e.concat(r || Array.prototype.slice.call(n))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);
//# sourceMappingURL=e4dd73d6988640542ced5f7f8d87dabf.js.map