! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "dae268d8-26f6-4855-b27a-49670ddb55eb", e._sentryDebugIdIdentifier = "sentry-dbid-dae268d8-26f6-4855-b27a-49670ddb55eb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [9945], {
    29945: (e, n, t) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          }
          return e
        }, r.apply(this, arguments)
      }
      t.r(n), t.d(n, {
        AutoFocusInside: () => De,
        FocusLockUI: () => O,
        FreeFocusInside: () => Re,
        InFocusGuard: () => l,
        MoveFocusInside: () => Le,
        default: () => Be,
        useFocusInside: () => Ae
      });
      var o = t(62229),
        u = t.n(o),
        i = (t(57145), "data-focus-lock"),
        a = "data-focus-lock-disabled",
        c = "data-no-focus-lock",
        d = "data-autofocus-inside";
      var f = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        s = function(e) {
          var n = e.children;
          return o.createElement(o.Fragment, null, o.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: f
          }), n, n && o.createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: f
          }))
        };
      s.propTypes = {}, s.defaultProps = {
        children: null
      };
      const l = s;
      var v = t(63461);

      function m(e) {
        return e
      }

      function p(e, n) {
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

      function b(e, n) {
        return void 0 === n && (n = m), p(e, n)
      }
      var y = b({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        h = b(),
        g = b(),
        E = function(e) {
          void 0 === e && (e = {});
          var n = p(null);
          return n.options = (0, v.__assign)({
            async: !0,
            ssr: !1
          }, e), n
        }({
          async: !0
        }),
        w = [],
        N = o.forwardRef((function(e, n) {
          var t, u = o.useState(),
            c = u[0],
            d = u[1],
            s = o.useRef(),
            l = o.useRef(!1),
            v = o.useRef(null),
            m = e.children,
            p = e.disabled,
            b = e.noFocusGuards,
            g = e.persistentFocus,
            N = e.crossFrame,
            O = e.autoFocus,
            x = (e.allowTextSelection, e.group),
            I = e.className,
            _ = e.whiteList,
            k = e.hasPositiveIndices,
            F = e.shards,
            M = void 0 === F ? w : F,
            T = e.as,
            S = void 0 === T ? "div" : T,
            P = e.lockProps,
            D = void 0 === P ? {} : P,
            A = e.sideCar,
            C = e.returnFocus,
            L = e.focusOptions,
            j = e.onActivation,
            R = e.onDeactivation,
            B = o.useState({})[0],
            U = o.useCallback((function() {
              v.current = v.current || document && document.activeElement, s.current && j && j(s.current), l.current = !0
            }), [j]),
            G = o.useCallback((function() {
              l.current = !1, R && R(s.current)
            }), [R]);
          (0, o.useEffect)((function() {
            p || (v.current = null)
          }), []);
          var W, q, H, V, Y, K = o.useCallback((function(e) {
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
            z = o.useCallback((function(e) {
              l.current && y.useMedium(e)
            }), []),
            J = h.useMedium,
            Q = o.useCallback((function(e) {
              s.current !== e && (s.current = e, d(e))
            }), []),
            X = r(((t = {})[a] = p && "disabled", t[i] = x, t), D),
            Z = !0 !== b,
            $ = Z && "tail" !== b,
            ee = (W = [n, Q], H = q || null, V = function(e) {
              return W.forEach((function(n) {
                return function(e, n) {
                  return "function" == typeof e ? e(n) : e && (e.current = n), e
                }(n, e)
              }))
            }, (Y = (0, o.useState)((function() {
              return {
                value: H,
                callback: V,
                facade: {
                  get current() {
                    return Y.value
                  },
                  set current(e) {
                    var n = Y.value;
                    n !== e && (Y.value = e, Y.callback(e, n))
                  }
                }
              }
            }))[0]).callback = V, Y.facade);
          return o.createElement(o.Fragment, null, Z && [o.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: p ? -1 : 0,
            style: f
          }), k ? o.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: p ? -1 : 1,
            style: f
          }) : null], !p && o.createElement(A, {
            id: B,
            sideCar: E,
            observed: c,
            disabled: p,
            persistentFocus: g,
            crossFrame: N,
            autoFocus: O,
            whiteList: _,
            shards: M,
            onActivation: U,
            onDeactivation: G,
            returnFocus: K,
            focusOptions: L
          }), o.createElement(S, r({
            ref: ee
          }, X, {
            className: I,
            onBlur: J,
            onFocus: z
          }), m), $ && o.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: p ? -1 : 0,
            style: f
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
      const O = N;

      function x(e, n) {
        return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
          return e.__proto__ = n, e
        }, x(e, n)
      }

      function I(e) {
        return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, I(e)
      }
      var _ = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        k = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        F = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        M = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        T = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        S = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || T(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && n(M(e))
          }(n, S.bind(void 0, e));
          return e.set(n, r), r
        },
        P = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !T(e)) || !!L(e) && n(M(e))
          }(n, P.bind(void 0, e));
          return e.set(n, r), r
        },
        D = function(e) {
          return e.dataset
        },
        A = function(e) {
          return "INPUT" === e.tagName
        },
        C = function(e) {
          return A(e) && "radio" === e.type
        },
        L = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        j = function(e) {
          var n;
          return Boolean(e && (null === (n = D(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        R = function(e) {
          return !j(e)
        },
        B = function(e) {
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
        G = function(e, n, t) {
          return _(e).map((function(e, n) {
            return {
              node: e,
              index: n,
              tabIndex: t && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
            }
          })).filter((function(e) {
            return !n || e.tabIndex >= 0
          })).sort(U)
        },
        W = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        q = "".concat(W, ", [data-focus-guard]"),
        H = function(e, n) {
          return _((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? q : W) ? [t] : [], H(t))
          }), [])
        },
        V = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = H(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? V([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? _(t.parentNode.querySelectorAll(W)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        Y = function(e, n) {
          return _(e).filter((function(e) {
            return S(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((A(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        K = function(e, n) {
          return void 0 === n && (n = new Map), _(e).filter((function(e) {
            return P(n, e)
          }))
        },
        z = function(e, n, t) {
          return G(Y(V(e, t), n), !0, t)
        },
        J = function(e, n) {
          return G(Y(V(e), n), !1)
        },
        Q = function(e, n) {
          return e.shadowRoot ? Q(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || _(e.children).some((function(e) {
            var t;
            if (e instanceof HTMLIFrameElement) {
              var r = null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && Q(r, n)
            }
            return Q(e, n)
          }))
        },
        X = function(e) {
          if (void 0 === e && (e = document), e && e.activeElement) {
            var n = e.activeElement;
            return n.shadowRoot ? X(n.shadowRoot) : n instanceof HTMLIFrameElement && function(e) {
              try {
                return n.contentWindow.document
              } catch (e) {
                return
              }
            }() ? X(n.contentWindow.document) : n
          }
        },
        Z = function(e) {
          return e.parentNode ? Z(e.parentNode) : e
        },
        $ = function(e) {
          return k(e).filter(Boolean).reduce((function(e, n) {
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
            }(_(Z(n).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(a, '="disabled"])')))) : [n]), e
          }), [])
        },
        ee = function(e, n) {
          return void 0 === n && (n = X(F(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && $(e).some((function(e) {
            return Q(e, n) || function(e, n) {
              return Boolean(_(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        ne = function(e, n) {
          return C(e) && e.name ? function(e, n) {
            return n.filter(C).filter((function(n) {
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
          return e.length > 1 ? e.indexOf(ne(e[n], e)) : n
        },
        oe = "NEW_FOCUS",
        ue = function(e, n) {
          return void 0 === n && (n = []), n.push(e), e.parentNode && ue(e.parentNode.host || e.parentNode, n), n
        },
        ie = function(e, n) {
          for (var t = ue(e), r = ue(n), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        ae = function(e, n, t) {
          var r = k(e),
            o = k(n),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(e) {
            i = ie(i || e, e) || i, t.filter(Boolean).forEach((function(e) {
              var n = ie(u, e);
              n && (i = !i || Q(n, i) ? n : ie(n, i))
            }))
          })), i
        },
        ce = function(e, n) {
          var t, r, o, u, i, a, c = X(k(e).length > 0 ? document : F(e).ownerDocument),
            f = $(e).filter(R),
            s = ae(c || e, e, f),
            l = new Map,
            v = J(f, l),
            m = z(f, l).filter((function(e) {
              var n = e.node;
              return R(n)
            }));
          if (m[0] || (m = v)[0]) {
            var p, b, y, h = J([s], l).map((function(e) {
                return e.node
              })),
              g = (p = h, b = m, y = new Map, b.forEach((function(e) {
                return y.set(e.node, e)
              })), p.map((function(e) {
                return y.get(e)
              })).filter(B)),
              E = g.map((function(e) {
                return e.node
              })),
              w = function(e, n, t, r) {
                var o = e.length,
                  u = e[0],
                  i = e[o - 1],
                  a = j(t);
                if (!(t && e.indexOf(t) >= 0)) {
                  var c, d, f = void 0 !== t ? n.indexOf(t) : -1,
                    s = r ? n.indexOf(r) : f,
                    l = r ? e.indexOf(r) : -1,
                    v = f - s,
                    m = n.indexOf(u),
                    p = n.indexOf(i),
                    b = (c = n, d = new Set, c.forEach((function(e) {
                      return d.add(ne(e, c))
                    })), c.filter((function(e) {
                      return d.has(e)
                    }))),
                    y = (void 0 !== t ? b.indexOf(t) : -1) - (r ? b.indexOf(r) : f),
                    h = re(e, 0),
                    g = re(e, o - 1);
                  return -1 === f || -1 === l ? oe : !v && l >= 0 ? l : f <= m && a && Math.abs(v) > 1 ? g : f >= p && a && Math.abs(v) > 1 ? h : v && Math.abs(y) > 1 ? l : f <= m ? g : f > p ? h : v ? Math.abs(v) > 1 ? l : (o + l + v) % o : void 0
                }
              }(E, h, c, n);
            if (w === oe) {
              var N = (t = v, r = E, o = function(e, n) {
                return e.reduce((function(e, t) {
                  return e.concat(function(e, n) {
                    return Y((t = e.querySelectorAll("[".concat(d, "]")), _(t).map((function(e) {
                      return V([e])
                    })).reduce((function(e, n) {
                      return e.concat(n)
                    }), [])), n);
                    var t
                  }(t, n))
                }), [])
              }(f, l), i = t.map((function(e) {
                return e.node
              })), (a = K(i.filter((u = o, function(e) {
                var n, t = null === (n = D(e)) || void 0 === n ? void 0 : n.autofocus;
                return e.autofocus || void 0 !== t && "false" !== t || u.indexOf(e) >= 0
              })))) && a.length ? te(a) : te(K(r)));
              return N ? {
                node: N
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === w ? w : g[w]
          }
        },
        de = 0,
        fe = !1,
        se = function(e, n, t) {
          void 0 === t && (t = {});
          var r, o, u = ce(e, n);
          if (!fe && u) {
            if (de > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), fe = !0, void setTimeout((function() {
              fe = !1
            }), 1);
            de++, r = u.node, o = t.focusOptions, "focus" in r && r.focus(o), "contentWindow" in r && r.contentWindow && r.contentWindow.focus(), de--
          }
        };

      function le(e) {
        setTimeout(e, 1)
      }
      var ve = function(e, n) {
          var t = {};
          return t[e] = n, t
        },
        me = null,
        pe = null,
        be = null,
        ye = !1,
        he = function() {
          return !0
        };

      function ge(e, n, t, r) {
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
      var Ee = function(e) {
          return e && "current" in e ? e.current : e
        },
        we = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        Ne = function() {
          var e, n, t, r, o, u, i, a = !1;
          if (me) {
            var d = me,
              f = d.observed,
              s = d.persistentFocus,
              l = d.autoFocus,
              v = d.shards,
              m = d.crossFrame,
              p = d.focusOptions,
              b = f || be && be.portaledElement,
              y = document && document.activeElement;
            if (b) {
              var h = [b].concat(v.map(Ee).filter(Boolean));
              if (y && ! function(e) {
                  return (me.whiteList || he)(e)
                }(y) || (s || (m ? Boolean(ye) : "meanwhile" === ye) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var n = X(e);
                  return !!n && _(e.querySelectorAll("[".concat(c, "]"))).some((function(e) {
                    return Q(e, n)
                  }))
                }()) || !pe && l) && (b && !(ee(h) || y && function(e, n) {
                  return n.some((function(n) {
                    return we(e, n, n)
                  }))
                }(y, h) || (i = y, be && be.portaledElement === i)) && (document && !pe && y && !l ? (y.blur && y.blur(), document.body.focus()) : (a = se(h, pe, {
                  focusOptions: p
                }), be = {})), ye = !1, pe = document && document.activeElement), document) {
                var g = document && document.activeElement,
                  E = (n = $(e = h).filter(R), t = ae(e, e, n), r = new Map, o = z([t], r, !0), u = z(n, r).filter((function(e) {
                    var n = e.node;
                    return R(n)
                  })).map((function(e) {
                    return e.node
                  })), o.map((function(e) {
                    var n = e.node;
                    return {
                      node: n,
                      index: e.index,
                      lockItem: u.indexOf(n) >= 0,
                      guard: j(n)
                    }
                  }))),
                  w = E.map((function(e) {
                    return e.node
                  })).indexOf(g);
                w > -1 && (E.filter((function(e) {
                  var n = e.guard,
                    t = e.node;
                  return n && t.dataset.focusAutoGuard
                })).forEach((function(e) {
                  return e.node.removeAttribute("tabIndex")
                })), ge(w, E.length, 1, E), ge(w, -1, -1, E))
              }
            }
          }
          return a
        },
        Oe = function(e) {
          Ne() && e && (e.stopPropagation(), e.preventDefault())
        },
        xe = function() {
          return le(Ne)
        },
        Ie = function() {
          ye = "just", le((function() {
            ye = "meanwhile"
          }))
        };
      y.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (be = {
          observerNode: t,
          portaledElement: n
        })
      })), h.assignMedium(xe), g.assignMedium((function(e) {
        return e({
          moveFocusInside: se,
          focusInside: ee
        })
      }));
      const _e = (ke = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Fe = function(e) {
        var n = e.slice(-1)[0];
        n && !me && (document.addEventListener("focusin", Oe), document.addEventListener("focusout", xe), window.addEventListener("blur", Ie));
        var t = me,
          r = t && n && n.id === t.id;
        me = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (pe = null, r && t.observed === n.observed || n.onActivation(), Ne(), le(Ne)) : (document.removeEventListener("focusin", Oe), document.removeEventListener("focusout", xe), window.removeEventListener("blur", Ie), pe = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = ke(t.map((function(e) {
            return e.props
          }))), Fe(n)
        }
        var i, a, c, d = function(o) {
          var i, a;

          function c() {
            return o.apply(this, arguments) || this
          }
          a = o, (i = c).prototype = Object.create(a.prototype), i.prototype.constructor = i, x(i, a), c.peek = function() {
            return n
          };
          var d = c.prototype;
          return d.componentDidMount = function() {
            t.push(this), r()
          }, d.componentDidUpdate = function() {
            r()
          }, d.componentWillUnmount = function() {
            var e = t.indexOf(this);
            t.splice(e, 1), r()
          }, d.render = function() {
            return u().createElement(e, this.props)
          }, c
        }(o.PureComponent);
        return i = d, a = "displayName", c = "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")", (a = function(e) {
          var n = function(e, n) {
            if ("object" !== I(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== I(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" === I(n) ? n : String(n)
        }(a)) in i ? Object.defineProperty(i, a, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[a] = c, d
      })((function() {
        return null
      }));
      var ke, Fe, Me = o.forwardRef((function(e, n) {
          return o.createElement(O, r({
            sideCar: _e,
            ref: n
          }, e))
        })),
        Te = O.propTypes || {};
      Te.sideCar,
        function(e, n) {
          if (null == e) return {};
          var t, r, o = {},
            u = Object.keys(e);
          for (r = 0; r < u.length; r++) t = u[r], n.indexOf(t) >= 0 || (o[t] = e[t])
        }(Te, ["sideCar"]), Me.propTypes = {};
      const Se = Me;
      var Pe = function(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          u = e.children,
          i = e.className,
          a = void 0 === i ? void 0 : i;
        return o.createElement("div", r({}, ve(d, !t), {
          className: a
        }), u)
      };
      Pe.propTypes = {};
      const De = Pe;
      var Ae = function(e) {
        o.useEffect((function() {
          var n = !0;
          return g.useMedium((function(t) {
              var r = e && e.current;
              n && r && (t.focusInside(r) || t.moveFocusInside(r, null))
            })),
            function() {
              n = !1
            }
        }), [e])
      };

      function Ce(e) {
        var n = e.disabled,
          t = e.className,
          u = e.children,
          i = o.useRef(null);
        return Ae(n ? void 0 : i), o.createElement("div", r({}, ve(d, !n), {
          ref: i,
          className: t
        }), u)
      }
      Ce.propTypes = {}, Ce.defaultProps = {
        disabled: !1,
        className: void 0
      };
      const Le = Ce;
      var je = function(e) {
        var n = e.children,
          t = e.className;
        return o.createElement("div", r({}, ve(c, !0), {
          className: t
        }), n)
      };
      je.propTypes = {}, je.defaultProps = {
        className: void 0
      };
      const Re = je,
        Be = Se
    }
  }
]);