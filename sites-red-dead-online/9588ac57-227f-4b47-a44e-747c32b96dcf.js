! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9588ac57-227f-4b47-a44e-747c32b96dcf", e._sentryDebugIdIdentifier = "sentry-dbid-9588ac57-227f-4b47-a44e-747c32b96dcf")
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
  [173], {
    42173: (e, n, t) => {
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
        AutoFocusInside: () => je,
        FocusLockUI: () => N,
        FreeFocusInside: () => Re,
        InFocusGuard: () => l,
        MoveFocusInside: () => De,
        default: () => Be,
        useFocusInside: () => Ae
      });
      var o = t(71403),
        u = t.n(o),
        i = (t(39516), "data-focus-lock"),
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
      var v = t(80226);

      function p(e) {
        return e
      }

      function m(e, n) {
        void 0 === n && (n = p);
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

      function y(e, n) {
        return void 0 === n && (n = p), m(e, n)
      }
      var b = y({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        h = y(),
        g = y(),
        E = function(e) {
          void 0 === e && (e = {});
          var n = m(null);
          return n.options = (0, v.Cl)({
            async: !0,
            ssr: !1
          }, e), n
        }({
          async: !0
        }),
        O = [],
        w = o.forwardRef((function(e, n) {
          var t, u = o.useState(),
            c = u[0],
            d = u[1],
            s = o.useRef(),
            l = o.useRef(!1),
            v = o.useRef(null),
            p = e.children,
            m = e.disabled,
            y = e.noFocusGuards,
            g = e.persistentFocus,
            w = e.crossFrame,
            N = e.autoFocus,
            _ = (e.allowTextSelection, e.group),
            x = e.className,
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
            B = o.useState({})[0],
            U = o.useCallback((function() {
              v.current = v.current || document && document.activeElement, s.current && L && L(s.current), l.current = !0
            }), [L]),
            G = o.useCallback((function() {
              l.current = !1, R && R(s.current)
            }), [R]);
          (0, o.useEffect)((function() {
            m || (v.current = null)
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
            X = o.useCallback((function(e) {
              l.current && b.useMedium(e)
            }), []),
            z = h.useMedium,
            J = o.useCallback((function(e) {
              s.current !== e && (s.current = e, d(e))
            }), []),
            Q = r(((t = {})[a] = m && "disabled", t[i] = _, t), j),
            Z = !0 !== y,
            $ = Z && "tail" !== y,
            ee = (W = [n, J], H = q || null, V = function(e) {
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
            tabIndex: m ? -1 : 0,
            style: f
          }), k ? o.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: m ? -1 : 1,
            style: f
          }) : null], !m && o.createElement(A, {
            id: B,
            sideCar: E,
            observed: c,
            disabled: m,
            persistentFocus: g,
            crossFrame: w,
            autoFocus: N,
            whiteList: I,
            shards: T,
            onActivation: U,
            onDeactivation: G,
            returnFocus: K,
            focusOptions: D
          }), o.createElement(M, r({
            ref: ee
          }, Q, {
            className: x,
            onBlur: z,
            onFocus: X
          }), p), $ && o.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: m ? -1 : 0,
            style: f
          }))
        }));
      w.propTypes = {}, w.defaultProps = {
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
      const N = w;

      function _(e, n) {
        return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
          return e.__proto__ = n, e
        }, _(e, n)
      }

      function x(e) {
        return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, x(e)
      }
      var I = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        k = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        S = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        T = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        F = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        M = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || F(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && n(T(e))
          }(n, M.bind(void 0, e));
          return e.set(n, r), r
        },
        P = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !F(e)) || !!D(e) && n(T(e))
          }(n, P.bind(void 0, e));
          return e.set(n, r), r
        },
        j = function(e) {
          return e.dataset
        },
        A = function(e) {
          return "INPUT" === e.tagName
        },
        C = function(e) {
          return A(e) && "radio" === e.type
        },
        D = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        L = function(e) {
          var n;
          return Boolean(e && (null === (n = j(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        R = function(e) {
          return !L(e)
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
          return I(e).map((function(e, n) {
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
          return I((e.shadowRoot || e).children).reduce((function(e, t) {
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
            return e.concat(u, t.parentNode ? I(t.parentNode.querySelectorAll(W)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        Y = function(e, n) {
          return I(e).filter((function(e) {
            return M(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((A(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        K = function(e, n) {
          return void 0 === n && (n = new Map), I(e).filter((function(e) {
            return P(n, e)
          }))
        },
        X = function(e, n, t) {
          return G(Y(V(e, t), n), !0, t)
        },
        z = function(e, n) {
          return G(Y(V(e), n), !1)
        },
        J = function(e, n) {
          return e.shadowRoot ? J(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || I(e.children).some((function(e) {
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
            return n.shadowRoot ? Q(n.shadowRoot) : n instanceof HTMLIFrameElement && function(e) {
              try {
                return n.contentWindow.document
              } catch (e) {
                return
              }
            }() ? Q(n.contentWindow.document) : n
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
            }(I(Z(n).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(a, '="disabled"])')))) : [n]), e
          }), [])
        },
        ee = function(e, n) {
          return void 0 === n && (n = Q(S(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && $(e).some((function(e) {
            return J(e, n) || function(e, n) {
              return Boolean(I(e.querySelectorAll("iframe")).some((function(e) {
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
              n && (i = !i || J(n, i) ? n : ie(n, i))
            }))
          })), i
        },
        ce = function(e, n) {
          var t, r, o, u, i, a, c = Q(k(e).length > 0 ? document : S(e).ownerDocument),
            f = $(e).filter(R),
            s = ae(c || e, e, f),
            l = new Map,
            v = z(f, l),
            p = X(f, l).filter((function(e) {
              var n = e.node;
              return R(n)
            }));
          if (p[0] || (p = v)[0]) {
            var m, y, b, h = z([s], l).map((function(e) {
                return e.node
              })),
              g = (m = h, y = p, b = new Map, y.forEach((function(e) {
                return b.set(e.node, e)
              })), m.map((function(e) {
                return b.get(e)
              })).filter(B)),
              E = g.map((function(e) {
                return e.node
              })),
              O = function(e, n, t, r) {
                var o = e.length,
                  u = e[0],
                  i = e[o - 1],
                  a = L(t);
                if (!(t && e.indexOf(t) >= 0)) {
                  var c, d, f = void 0 !== t ? n.indexOf(t) : -1,
                    s = r ? n.indexOf(r) : f,
                    l = r ? e.indexOf(r) : -1,
                    v = f - s,
                    p = n.indexOf(u),
                    m = n.indexOf(i),
                    y = (c = n, d = new Set, c.forEach((function(e) {
                      return d.add(ne(e, c))
                    })), c.filter((function(e) {
                      return d.has(e)
                    }))),
                    b = (void 0 !== t ? y.indexOf(t) : -1) - (r ? y.indexOf(r) : f),
                    h = re(e, 0),
                    g = re(e, o - 1);
                  return -1 === f || -1 === l ? oe : !v && l >= 0 ? l : f <= p && a && Math.abs(v) > 1 ? g : f >= m && a && Math.abs(v) > 1 ? h : v && Math.abs(b) > 1 ? l : f <= p ? g : f > m ? h : v ? Math.abs(v) > 1 ? l : (o + l + v) % o : void 0
                }
              }(E, h, c, n);
            if (O === oe) {
              var w = (t = v, r = E, o = function(e, n) {
                return e.reduce((function(e, t) {
                  return e.concat(function(e, n) {
                    return Y((t = e.querySelectorAll("[".concat(d, "]")), I(t).map((function(e) {
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
                var n, t = null === (n = j(e)) || void 0 === n ? void 0 : n.autofocus;
                return e.autofocus || void 0 !== t && "false" !== t || u.indexOf(e) >= 0
              })))) && a.length ? te(a) : te(K(r)));
              return w ? {
                node: w
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === O ? O : g[O]
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
        pe = null,
        me = null,
        ye = null,
        be = !1,
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
        Oe = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        we = function() {
          var e, n, t, r, o, u, i, a = !1;
          if (pe) {
            var d = pe,
              f = d.observed,
              s = d.persistentFocus,
              l = d.autoFocus,
              v = d.shards,
              p = d.crossFrame,
              m = d.focusOptions,
              y = f || ye && ye.portaledElement,
              b = document && document.activeElement;
            if (y) {
              var h = [y].concat(v.map(Ee).filter(Boolean));
              if (b && ! function(e) {
                  return (pe.whiteList || he)(e)
                }(b) || (s || (p ? Boolean(be) : "meanwhile" === be) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var n = Q(e);
                  return !!n && I(e.querySelectorAll("[".concat(c, "]"))).some((function(e) {
                    return J(e, n)
                  }))
                }()) || !me && l) && (y && !(ee(h) || b && function(e, n) {
                  return n.some((function(n) {
                    return Oe(e, n, n)
                  }))
                }(b, h) || (i = b, ye && ye.portaledElement === i)) && (document && !me && b && !l ? (b.blur && b.blur(), document.body.focus()) : (a = se(h, me, {
                  focusOptions: m
                }), ye = {})), be = !1, me = document && document.activeElement), document) {
                var g = document && document.activeElement,
                  E = (n = $(e = h).filter(R), t = ae(e, e, n), r = new Map, o = X([t], r, !0), u = X(n, r).filter((function(e) {
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
                      guard: L(n)
                    }
                  }))),
                  O = E.map((function(e) {
                    return e.node
                  })).indexOf(g);
                O > -1 && (E.filter((function(e) {
                  var n = e.guard,
                    t = e.node;
                  return n && t.dataset.focusAutoGuard
                })).forEach((function(e) {
                  return e.node.removeAttribute("tabIndex")
                })), ge(O, E.length, 1, E), ge(O, -1, -1, E))
              }
            }
          }
          return a
        },
        Ne = function(e) {
          we() && e && (e.stopPropagation(), e.preventDefault())
        },
        _e = function() {
          return le(we)
        },
        xe = function() {
          be = "just", le((function() {
            be = "meanwhile"
          }))
        };
      b.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (ye = {
          observerNode: t,
          portaledElement: n
        })
      })), h.assignMedium(_e), g.assignMedium((function(e) {
        return e({
          moveFocusInside: se,
          focusInside: ee
        })
      }));
      const Ie = (ke = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Se = function(e) {
        var n = e.slice(-1)[0];
        n && !pe && (document.addEventListener("focusin", Ne), document.addEventListener("focusout", _e), window.addEventListener("blur", xe));
        var t = pe,
          r = t && n && n.id === t.id;
        pe = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (me = null, r && t.observed === n.observed || n.onActivation(), we(), le(we)) : (document.removeEventListener("focusin", Ne), document.removeEventListener("focusout", _e), window.removeEventListener("blur", xe), me = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = ke(t.map((function(e) {
            return e.props
          }))), Se(n)
        }
        var i, a, c, d = function(o) {
          var i, a;

          function c() {
            return o.apply(this, arguments) || this
          }
          a = o, (i = c).prototype = Object.create(a.prototype), i.prototype.constructor = i, _(i, a), c.peek = function() {
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
            if ("object" !== x(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== x(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" === x(n) ? n : String(n)
        }(a)) in i ? Object.defineProperty(i, a, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[a] = c, d
      })((function() {
        return null
      }));
      var ke, Se, Te = o.forwardRef((function(e, n) {
          return o.createElement(N, r({
            sideCar: Ie,
            ref: n
          }, e))
        })),
        Fe = N.propTypes || {};
      Fe.sideCar,
        function(e, n) {
          if (null == e) return {};
          var t, r, o = {},
            u = Object.keys(e);
          for (r = 0; r < u.length; r++) t = u[r], n.indexOf(t) >= 0 || (o[t] = e[t])
        }(Fe, ["sideCar"]), Te.propTypes = {};
      const Me = Te;
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
      const je = Pe;
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
      const De = Ce;
      var Le = function(e) {
        var n = e.children,
          t = e.className;
        return o.createElement("div", r({}, ve(c, !0), {
          className: t
        }), n)
      };
      Le.propTypes = {}, Le.defaultProps = {
        className: void 0
      };
      const Re = Le,
        Be = Me
    },
    80226: (e, n, t) => {
      t.d(n, {
        C6: () => o,
        Cl: () => u,
        Tt: () => i,
        fX: () => a
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

      function i(e, n) {
        var t = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]])
        }
        return t
      }

      function a(e, n, t) {
        if (t || 2 === arguments.length)
          for (var r, o = 0, u = n.length; o < u; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
        return e.concat(r || Array.prototype.slice.call(n))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);