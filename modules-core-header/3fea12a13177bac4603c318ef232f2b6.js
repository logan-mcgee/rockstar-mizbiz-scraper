! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9ed56ff5-587d-40e4-9820-e2f05b3b6eaf", e._sentryDebugIdIdentifier = "sentry-dbid-9ed56ff5-587d-40e4-9820-e2f05b3b6eaf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [136, 756], {
    94136: (e, n, t) => {
      t.r(n), t.d(n, {
        AutoFocusInside: () => Me,
        FocusLockUI: () => E,
        FreeFocusInside: () => De,
        InFocusGuard: () => v,
        MoveFocusInside: () => Ae,
        default: () => Le,
        useFocusInside: () => Pe
      });
      var r = t(25848),
        o = t(88200),
        u = t.n(o),
        i = "data-focus-lock",
        a = "data-focus-lock-disabled",
        c = "data-no-focus-lock",
        f = "data-autofocus-inside",
        d = t(84544),
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
          var n = e.children;
          return o.createElement(o.Fragment, null, o.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: s
          }), n, n && o.createElement("div", {
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
      var p = t(19824),
        m = (0, p.W)({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        b = (0, p.W)(),
        y = (0, p.W)(),
        h = (0, p.Y)({
          async: !0
        }),
        g = [],
        w = o.forwardRef((function(e, n) {
          var t, u = o.useState(),
            c = u[0],
            f = u[1],
            l = o.useRef(),
            v = o.useRef(!1),
            p = o.useRef(null),
            y = e.children,
            w = e.disabled,
            E = e.noFocusGuards,
            O = e.persistentFocus,
            N = e.crossFrame,
            x = e.autoFocus,
            _ = (e.allowTextSelection, e.group),
            I = e.className,
            k = e.whiteList,
            S = e.hasPositiveIndices,
            T = e.shards,
            F = void 0 === T ? g : T,
            M = e.as,
            P = void 0 === M ? "div" : M,
            j = e.lockProps,
            A = void 0 === j ? {} : j,
            C = e.sideCar,
            D = e.returnFocus,
            L = e.focusOptions,
            R = e.onActivation,
            B = e.onDeactivation,
            W = o.useState({})[0],
            G = o.useCallback((function() {
              p.current = p.current || document && document.activeElement, l.current && R && R(l.current), v.current = !0
            }), [R]),
            U = o.useCallback((function() {
              v.current = !1, B && B(l.current)
            }), [B]);
          (0, o.useEffect)((function() {
            w || (p.current = null)
          }), []);
          var q = o.useCallback((function(e) {
              var n = p.current;
              if (n && n.focus) {
                var t = "function" == typeof D ? D(n) : D;
                if (t) {
                  var r = "object" == typeof t ? t : void 0;
                  p.current = null, e ? Promise.resolve().then((function() {
                    return n.focus(r)
                  })) : n.focus(r)
                }
              }
            }), [D]),
            H = o.useCallback((function(e) {
              v.current && m.useMedium(e)
            }), []),
            Y = b.useMedium,
            V = o.useCallback((function(e) {
              l.current !== e && (l.current = e, f(e))
            }), []),
            K = (0, r.c)(((t = {})[a] = w && "disabled", t[i] = _, t), A),
            X = !0 !== E,
            z = X && "tail" !== E,
            J = (0, d.m)([n, V]);
          return o.createElement(o.Fragment, null, X && [o.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: w ? -1 : 0,
            style: s
          }), S ? o.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: w ? -1 : 1,
            style: s
          }) : null], !w && o.createElement(C, {
            id: W,
            sideCar: h,
            observed: c,
            disabled: w,
            persistentFocus: O,
            crossFrame: N,
            autoFocus: x,
            whiteList: k,
            shards: F,
            onActivation: G,
            onDeactivation: U,
            returnFocus: q,
            focusOptions: L
          }), o.createElement(P, (0, r.c)({
            ref: J
          }, K, {
            className: I,
            onBlur: Y,
            onFocus: H
          }), y), z && o.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: w ? -1 : 0,
            style: s
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
      const E = w;

      function O(e, n) {
        return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
          return e.__proto__ = n, e
        }, O(e, n)
      }

      function N(e) {
        return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, N(e)
      }
      var x = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        _ = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        I = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        k = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        S = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        T = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || S(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && n(k(e))
          }(n, T.bind(void 0, e));
          return e.set(n, r), r
        },
        F = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !S(e)) || !!A(e) && n(k(e))
          }(n, F.bind(void 0, e));
          return e.set(n, r), r
        },
        M = function(e) {
          return e.dataset
        },
        P = function(e) {
          return "INPUT" === e.tagName
        },
        j = function(e) {
          return P(e) && "radio" === e.type
        },
        A = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        C = function(e) {
          var n;
          return Boolean(e && (null === (n = M(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        D = function(e) {
          return !C(e)
        },
        L = function(e) {
          return Boolean(e)
        },
        R = function(e, n) {
          var t = e.tabIndex - n.tabIndex,
            r = e.index - n.index;
          if (t) {
            if (!e.tabIndex) return 1;
            if (!n.tabIndex) return -1
          }
          return t || r
        },
        B = function(e, n, t) {
          return x(e).map((function(e, n) {
            return {
              node: e,
              index: n,
              tabIndex: t && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
            }
          })).filter((function(e) {
            return !n || e.tabIndex >= 0
          })).sort(R)
        },
        W = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        G = "".concat(W, ", [data-focus-guard]"),
        U = function(e, n) {
          return x((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? G : W) ? [t] : [], U(t))
          }), [])
        },
        q = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = U(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? q([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? x(t.parentNode.querySelectorAll(W)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        H = function(e, n) {
          return x(e).filter((function(e) {
            return T(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((P(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        Y = function(e, n) {
          return void 0 === n && (n = new Map), x(e).filter((function(e) {
            return F(n, e)
          }))
        },
        V = function(e, n, t) {
          return B(H(q(e, t), n), !0, t)
        },
        K = function(e, n) {
          return B(H(q(e), n), !1)
        },
        X = function(e, n) {
          return e.shadowRoot ? X(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || x(e.children).some((function(e) {
            var t;
            if (e instanceof HTMLIFrameElement) {
              var r = null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && X(r, n)
            }
            return X(e, n)
          }))
        },
        z = function(e) {
          if (void 0 === e && (e = document), e && e.activeElement) {
            var n = e.activeElement;
            return n.shadowRoot ? z(n.shadowRoot) : n instanceof HTMLIFrameElement && function(e) {
              try {
                return n.contentWindow.document
              } catch (e) {
                return
              }
            }() ? z(n.contentWindow.document) : n
          }
        },
        J = function(e) {
          return e.parentNode ? J(e.parentNode) : e
        },
        Q = function(e) {
          return _(e).filter(Boolean).reduce((function(e, n) {
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
            }(x(J(n).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(a, '="disabled"])')))) : [n]), e
          }), [])
        },
        Z = function(e, n) {
          return void 0 === n && (n = z(I(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && Q(e).some((function(e) {
            return X(e, n) || function(e, n) {
              return Boolean(x(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        $ = function(e, n) {
          return j(e) && e.name ? function(e, n) {
            return n.filter(j).filter((function(n) {
              return n.name === e.name
            })).filter((function(e) {
              return e.checked
            }))[0] || e
          }(e, n) : e
        },
        ee = function(e) {
          return e[0] && e.length > 1 ? $(e[0], e) : e[0]
        },
        ne = function(e, n) {
          return e.length > 1 ? e.indexOf($(e[n], e)) : n
        },
        te = "NEW_FOCUS",
        re = function(e, n) {
          return void 0 === n && (n = []), n.push(e), e.parentNode && re(e.parentNode.host || e.parentNode, n), n
        },
        oe = function(e, n) {
          for (var t = re(e), r = re(n), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        ue = function(e, n, t) {
          var r = _(e),
            o = _(n),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(e) {
            i = oe(i || e, e) || i, t.filter(Boolean).forEach((function(e) {
              var n = oe(u, e);
              n && (i = !i || X(n, i) ? n : oe(n, i))
            }))
          })), i
        },
        ie = function(e, n) {
          var t, r, o, u, i, a, c = z(_(e).length > 0 ? document : I(e).ownerDocument),
            d = Q(e).filter(D),
            s = ue(c || e, e, d),
            l = new Map,
            v = K(d, l),
            p = V(d, l).filter((function(e) {
              var n = e.node;
              return D(n)
            }));
          if (p[0] || (p = v)[0]) {
            var m, b, y, h = K([s], l).map((function(e) {
                return e.node
              })),
              g = (m = h, b = p, y = new Map, b.forEach((function(e) {
                return y.set(e.node, e)
              })), m.map((function(e) {
                return y.get(e)
              })).filter(L)),
              w = g.map((function(e) {
                return e.node
              })),
              E = function(e, n, t, r) {
                var o = e.length,
                  u = e[0],
                  i = e[o - 1],
                  a = C(t);
                if (!(t && e.indexOf(t) >= 0)) {
                  var c, f, d = void 0 !== t ? n.indexOf(t) : -1,
                    s = r ? n.indexOf(r) : d,
                    l = r ? e.indexOf(r) : -1,
                    v = d - s,
                    p = n.indexOf(u),
                    m = n.indexOf(i),
                    b = (c = n, f = new Set, c.forEach((function(e) {
                      return f.add($(e, c))
                    })), c.filter((function(e) {
                      return f.has(e)
                    }))),
                    y = (void 0 !== t ? b.indexOf(t) : -1) - (r ? b.indexOf(r) : d),
                    h = ne(e, 0),
                    g = ne(e, o - 1);
                  return -1 === d || -1 === l ? te : !v && l >= 0 ? l : d <= p && a && Math.abs(v) > 1 ? g : d >= m && a && Math.abs(v) > 1 ? h : v && Math.abs(y) > 1 ? l : d <= p ? g : d > m ? h : v ? Math.abs(v) > 1 ? l : (o + l + v) % o : void 0
                }
              }(w, h, c, n);
            if (E === te) {
              var O = (t = v, r = w, o = function(e, n) {
                return e.reduce((function(e, t) {
                  return e.concat(function(e, n) {
                    return H((t = e.querySelectorAll("[".concat(f, "]")), x(t).map((function(e) {
                      return q([e])
                    })).reduce((function(e, n) {
                      return e.concat(n)
                    }), [])), n);
                    var t
                  }(t, n))
                }), [])
              }(d, l), i = t.map((function(e) {
                return e.node
              })), (a = Y(i.filter((u = o, function(e) {
                var n, t = null === (n = M(e)) || void 0 === n ? void 0 : n.autofocus;
                return e.autofocus || void 0 !== t && "false" !== t || u.indexOf(e) >= 0
              })))) && a.length ? ee(a) : ee(Y(r)));
              return O ? {
                node: O
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === E ? E : g[E]
          }
        },
        ae = 0,
        ce = !1,
        fe = function(e, n, t) {
          void 0 === t && (t = {});
          var r, o, u = ie(e, n);
          if (!ce && u) {
            if (ae > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ce = !0, void setTimeout((function() {
              ce = !1
            }), 1);
            ae++, r = u.node, o = t.focusOptions, "focus" in r && r.focus(o), "contentWindow" in r && r.contentWindow && r.contentWindow.focus(), ae--
          }
        };

      function de(e) {
        setTimeout(e, 1)
      }
      var se = function(e, n) {
          var t = {};
          return t[e] = n, t
        },
        le = null,
        ve = null,
        pe = null,
        me = !1,
        be = function() {
          return !0
        };

      function ye(e, n, t, r) {
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
      var he = function(e) {
          return e && "current" in e ? e.current : e
        },
        ge = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        we = function() {
          var e, n, t, r, o, u, i, a = !1;
          if (le) {
            var f = le,
              d = f.observed,
              s = f.persistentFocus,
              l = f.autoFocus,
              v = f.shards,
              p = f.crossFrame,
              m = f.focusOptions,
              b = d || pe && pe.portaledElement,
              y = document && document.activeElement;
            if (b) {
              var h = [b].concat(v.map(he).filter(Boolean));
              if (y && ! function(e) {
                  return (le.whiteList || be)(e)
                }(y) || (s || (p ? Boolean(me) : "meanwhile" === me) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var n = z(e);
                  return !!n && x(e.querySelectorAll("[".concat(c, "]"))).some((function(e) {
                    return X(e, n)
                  }))
                }()) || !ve && l) && (b && !(Z(h) || y && function(e, n) {
                  return n.some((function(n) {
                    return ge(e, n, n)
                  }))
                }(y, h) || (i = y, pe && pe.portaledElement === i)) && (document && !ve && y && !l ? (y.blur && y.blur(), document.body.focus()) : (a = fe(h, ve, {
                  focusOptions: m
                }), pe = {})), me = !1, ve = document && document.activeElement), document) {
                var g = document && document.activeElement,
                  w = (n = Q(e = h).filter(D), t = ue(e, e, n), r = new Map, o = V([t], r, !0), u = V(n, r).filter((function(e) {
                    var n = e.node;
                    return D(n)
                  })).map((function(e) {
                    return e.node
                  })), o.map((function(e) {
                    var n = e.node;
                    return {
                      node: n,
                      index: e.index,
                      lockItem: u.indexOf(n) >= 0,
                      guard: C(n)
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
                })), ye(E, w.length, 1, w), ye(E, -1, -1, w))
              }
            }
          }
          return a
        },
        Ee = function(e) {
          we() && e && (e.stopPropagation(), e.preventDefault())
        },
        Oe = function() {
          return de(we)
        },
        Ne = function() {
          me = "just", de((function() {
            me = "meanwhile"
          }))
        };
      m.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (pe = {
          observerNode: t,
          portaledElement: n
        })
      })), b.assignMedium(Oe), y.assignMedium((function(e) {
        return e({
          moveFocusInside: fe,
          focusInside: Z
        })
      }));
      const xe = (_e = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Ie = function(e) {
        var n = e.slice(-1)[0];
        n && !le && (document.addEventListener("focusin", Ee), document.addEventListener("focusout", Oe), window.addEventListener("blur", Ne));
        var t = le,
          r = t && n && n.id === t.id;
        le = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (ve = null, r && t.observed === n.observed || n.onActivation(), we(), de(we)) : (document.removeEventListener("focusin", Ee), document.removeEventListener("focusout", Oe), window.removeEventListener("blur", Ne), ve = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = _e(t.map((function(e) {
            return e.props
          }))), Ie(n)
        }
        var i, a, c, f = function(o) {
          var i, a;

          function c() {
            return o.apply(this, arguments) || this
          }
          a = o, (i = c).prototype = Object.create(a.prototype), i.prototype.constructor = i, O(i, a), c.peek = function() {
            return n
          };
          var f = c.prototype;
          return f.componentDidMount = function() {
            t.push(this), r()
          }, f.componentDidUpdate = function() {
            r()
          }, f.componentWillUnmount = function() {
            var e = t.indexOf(this);
            t.splice(e, 1), r()
          }, f.render = function() {
            return u().createElement(e, this.props)
          }, c
        }(o.PureComponent);
        return i = f, a = "displayName", c = "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")", (a = function(e) {
          var n = function(e, n) {
            if ("object" !== N(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== N(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" === N(n) ? n : String(n)
        }(a)) in i ? Object.defineProperty(i, a, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[a] = c, f
      })((function() {
        return null
      }));
      var _e, Ie, ke = o.forwardRef((function(e, n) {
          return o.createElement(E, (0, r.c)({
            sideCar: xe,
            ref: n
          }, e))
        })),
        Se = E.propTypes || {};
      Se.sideCar,
        function(e, n) {
          if (null == e) return {};
          var t, r, o = {},
            u = Object.keys(e);
          for (r = 0; r < u.length; r++) t = u[r], n.indexOf(t) >= 0 || (o[t] = e[t])
        }(Se, ["sideCar"]), ke.propTypes = {};
      const Te = ke;
      var Fe = function(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          u = e.children,
          i = e.className,
          a = void 0 === i ? void 0 : i;
        return o.createElement("div", (0, r.c)({}, se(f, !t), {
          className: a
        }), u)
      };
      Fe.propTypes = {};
      const Me = Fe;
      var Pe = function(e) {
        o.useEffect((function() {
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

      function je(e) {
        var n = e.disabled,
          t = e.className,
          u = e.children,
          i = o.useRef(null);
        return Pe(n ? void 0 : i), o.createElement("div", (0, r.c)({}, se(f, !n), {
          ref: i,
          className: t
        }), u)
      }
      je.propTypes = {}, je.defaultProps = {
        disabled: !1,
        className: void 0
      };
      const Ae = je;
      var Ce = function(e) {
        var n = e.children,
          t = e.className;
        return o.createElement("div", (0, r.c)({}, se(c, !0), {
          className: t
        }), n)
      };
      Ce.propTypes = {}, Ce.defaultProps = {
        className: void 0
      };
      const De = Ce,
        Le = Te
    },
    84544: (e, n, t) => {
      t.d(n, {
        m: () => o
      });
      var r = t(88200);

      function o(e, n) {
        return t = n || null, o = function(n) {
          return e.forEach((function(e) {
            return function(e, n) {
              return "function" == typeof e ? e(n) : e && (e.current = n), e
            }(e, n)
          }))
        }, (u = (0, r.useState)((function() {
          return {
            value: t,
            callback: o,
            facade: {
              get current() {
                return u.value
              },
              set current(e) {
                var n = u.value;
                n !== e && (u.value = e, u.callback(e, n))
              }
            }
          }
        }))[0]).callback = o, u.facade;
        var t, o, u
      }
    },
    19824: (e, n, t) => {
      t.d(n, {
        W: () => i,
        Y: () => a
      });
      var r = t(87672);

      function o(e) {
        return e
      }

      function u(e, n) {
        void 0 === n && (n = o);
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

      function i(e, n) {
        return void 0 === n && (n = o), u(e, n)
      }

      function a(e) {
        void 0 === e && (e = {});
        var n = u(null);
        return n.options = (0, r.C3)({
          async: !0,
          ssr: !1
        }, e), n
      }
    },
    25848: (e, n, t) => {
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
    87672: (e, n, t) => {
      t.d(n, {
        C3: () => u,
        KE: () => c,
        Mt: () => f,
        ct: () => o,
        kH: () => a,
        sX: () => i
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

      function a(e, n, t, r) {
        return new(t || (t = Promise))((function(o, u) {
          function i(e) {
            try {
              c(r.next(e))
            } catch (e) {
              u(e)
            }
          }

          function a(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              u(e)
            }
          }

          function c(e) {
            var n;
            e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
              e(n)
            }))).then(i, a)
          }
          c((r = r.apply(e, n || [])).next())
        }))
      }

      function c(e, n) {
        var t, r, o, u, i = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return u = {
          next: a(0),
          throw: a(1),
          return: a(2)
        }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
          return this
        }), u;

        function a(a) {
          return function(c) {
            return function(a) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; u && (u = 0, a[0] && (i = 0)), i;) try {
                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                  case 0:
                  case 1:
                    o = a;
                    break;
                  case 4:
                    return i.label++, {
                      value: a[1],
                      done: !1
                    };
                  case 5:
                    i.label++, r = a[1], a = [0];
                    continue;
                  case 7:
                    a = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                      i.label = a[1];
                      break
                    }
                    if (6 === a[0] && i.label < o[1]) {
                      i.label = o[1], o = a;
                      break
                    }
                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(a);
                      break
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                a = n.call(e, i)
              } catch (e) {
                a = [6, e], r = 0
              } finally {
                t = o = 0
              }
              if (5 & a[0]) throw a[1];
              return {
                value: a[0] ? a[1] : void 0,
                done: !0
              }
            }([a, c])
          }
        }
      }

      function f(e, n, t) {
        if (t || 2 === arguments.length)
          for (var r, o = 0, u = n.length; o < u; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
        return e.concat(r || Array.prototype.slice.call(n))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);
//# sourceMappingURL=3fea12a13177bac4603c318ef232f2b6.js.map