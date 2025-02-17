! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bf5a09a6-c809-4244-a2e1-8656117470c7", e._sentryDebugIdIdentifier = "sentry-dbid-bf5a09a6-c809-4244-a2e1-8656117470c7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [6479], {
    6479: (e, n, t) => {
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
        AutoFocusInside: () => Se,
        FocusLockUI: () => w,
        FreeFocusInside: () => Le,
        InFocusGuard: () => v,
        MoveFocusInside: () => De,
        default: () => je,
        useFocusInside: () => Pe
      });
      var o = t(2229),
        u = t.n(o),
        i = (t(7145), "data-focus-lock"),
        a = "data-focus-lock-disabled",
        c = "data-no-focus-lock",
        d = "data-autofocus-inside",
        f = t(7964),
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
      var p = t(1402),
        m = (0, p.C)({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        b = (0, p.C)(),
        y = (0, p.C)(),
        g = (0, p.f)({
          async: !0
        }),
        h = [],
        E = o.forwardRef((function(e, n) {
          var t, u = o.useState(),
            c = u[0],
            d = u[1],
            l = o.useRef(),
            v = o.useRef(!1),
            p = o.useRef(null),
            y = e.children,
            E = e.disabled,
            w = e.noFocusGuards,
            N = e.persistentFocus,
            O = e.crossFrame,
            x = e.autoFocus,
            I = (e.allowTextSelection, e.group),
            F = e.className,
            T = e.whiteList,
            k = e.hasPositiveIndices,
            _ = e.shards,
            M = void 0 === _ ? h : _,
            S = e.as,
            P = void 0 === S ? "div" : S,
            C = e.lockProps,
            D = void 0 === C ? {} : C,
            A = e.sideCar,
            L = e.returnFocus,
            j = e.focusOptions,
            R = e.onActivation,
            B = e.onDeactivation,
            U = o.useState({})[0],
            G = o.useCallback((function() {
              p.current = p.current || document && document.activeElement, l.current && R && R(l.current), v.current = !0
            }), [R]),
            W = o.useCallback((function() {
              v.current = !1, B && B(l.current)
            }), [B]);
          (0, o.useEffect)((function() {
            E || (p.current = null)
          }), []);
          var q = o.useCallback((function(e) {
              var n = p.current;
              if (n && n.focus) {
                var t = "function" == typeof L ? L(n) : L;
                if (t) {
                  var r = "object" == typeof t ? t : void 0;
                  p.current = null, e ? Promise.resolve().then((function() {
                    return n.focus(r)
                  })) : n.focus(r)
                }
              }
            }), [L]),
            H = o.useCallback((function(e) {
              v.current && m.useMedium(e)
            }), []),
            V = b.useMedium,
            Y = o.useCallback((function(e) {
              l.current !== e && (l.current = e, d(e))
            }), []),
            K = r(((t = {})[a] = E && "disabled", t[i] = I, t), D),
            z = !0 !== w,
            J = z && "tail" !== w,
            Q = (0, f.S)([n, Y]);
          return o.createElement(o.Fragment, null, z && [o.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: E ? -1 : 0,
            style: s
          }), k ? o.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: E ? -1 : 1,
            style: s
          }) : null], !E && o.createElement(A, {
            id: U,
            sideCar: g,
            observed: c,
            disabled: E,
            persistentFocus: N,
            crossFrame: O,
            autoFocus: x,
            whiteList: T,
            shards: M,
            onActivation: G,
            onDeactivation: W,
            returnFocus: q,
            focusOptions: j
          }), o.createElement(P, r({
            ref: Q
          }, K, {
            className: F,
            onBlur: V,
            onFocus: H
          }), y), J && o.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: E ? -1 : 0,
            style: s
          }))
        }));
      E.propTypes = {}, E.defaultProps = {
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
      const w = E;

      function N(e, n) {
        return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
          return e.__proto__ = n, e
        }, N(e, n)
      }

      function O(e) {
        return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, O(e)
      }
      var x = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        I = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        F = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        T = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        k = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        _ = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || k(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && n(T(e))
          }(n, _.bind(void 0, e));
          return e.set(n, r), r
        },
        M = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !k(e)) || !!D(e) && n(T(e))
          }(n, M.bind(void 0, e));
          return e.set(n, r), r
        },
        S = function(e) {
          return e.dataset
        },
        P = function(e) {
          return "INPUT" === e.tagName
        },
        C = function(e) {
          return P(e) && "radio" === e.type
        },
        D = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        A = function(e) {
          var n;
          return Boolean(e && (null === (n = S(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        L = function(e) {
          return !A(e)
        },
        j = function(e) {
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
        U = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        G = "".concat(U, ", [data-focus-guard]"),
        W = function(e, n) {
          return x((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? G : U) ? [t] : [], W(t))
          }), [])
        },
        q = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = W(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? q([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? x(t.parentNode.querySelectorAll(U)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        H = function(e, n) {
          return x(e).filter((function(e) {
            return _(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((P(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        V = function(e, n) {
          return void 0 === n && (n = new Map), x(e).filter((function(e) {
            return M(n, e)
          }))
        },
        Y = function(e, n, t) {
          return B(H(q(e, t), n), !0, t)
        },
        K = function(e, n) {
          return B(H(q(e), n), !1)
        },
        z = function(e, n) {
          return e.shadowRoot ? z(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || x(e.children).some((function(e) {
            var t;
            if (e instanceof HTMLIFrameElement) {
              var r = null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && z(r, n)
            }
            return z(e, n)
          }))
        },
        J = function(e) {
          if (void 0 === e && (e = document), e && e.activeElement) {
            var n = e.activeElement;
            return n.shadowRoot ? J(n.shadowRoot) : n instanceof HTMLIFrameElement && function(e) {
              try {
                return n.contentWindow.document
              } catch (e) {
                return
              }
            }() ? J(n.contentWindow.document) : n
          }
        },
        Q = function(e) {
          return e.parentNode ? Q(e.parentNode) : e
        },
        X = function(e) {
          return I(e).filter(Boolean).reduce((function(e, n) {
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
            }(x(Q(n).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(a, '="disabled"])')))) : [n]), e
          }), [])
        },
        Z = function(e, n) {
          return void 0 === n && (n = J(F(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && X(e).some((function(e) {
            return z(e, n) || function(e, n) {
              return Boolean(x(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        $ = function(e, n) {
          return C(e) && e.name ? function(e, n) {
            return n.filter(C).filter((function(n) {
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
          var r = I(e),
            o = I(n),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(e) {
            i = oe(i || e, e) || i, t.filter(Boolean).forEach((function(e) {
              var n = oe(u, e);
              n && (i = !i || z(n, i) ? n : oe(n, i))
            }))
          })), i
        },
        ie = function(e, n) {
          var t, r, o, u, i, a, c = J(I(e).length > 0 ? document : F(e).ownerDocument),
            f = X(e).filter(L),
            s = ue(c || e, e, f),
            l = new Map,
            v = K(f, l),
            p = Y(f, l).filter((function(e) {
              var n = e.node;
              return L(n)
            }));
          if (p[0] || (p = v)[0]) {
            var m, b, y, g = K([s], l).map((function(e) {
                return e.node
              })),
              h = (m = g, b = p, y = new Map, b.forEach((function(e) {
                return y.set(e.node, e)
              })), m.map((function(e) {
                return y.get(e)
              })).filter(j)),
              E = h.map((function(e) {
                return e.node
              })),
              w = function(e, n, t, r) {
                var o = e.length,
                  u = e[0],
                  i = e[o - 1],
                  a = A(t);
                if (!(t && e.indexOf(t) >= 0)) {
                  var c, d, f = void 0 !== t ? n.indexOf(t) : -1,
                    s = r ? n.indexOf(r) : f,
                    l = r ? e.indexOf(r) : -1,
                    v = f - s,
                    p = n.indexOf(u),
                    m = n.indexOf(i),
                    b = (c = n, d = new Set, c.forEach((function(e) {
                      return d.add($(e, c))
                    })), c.filter((function(e) {
                      return d.has(e)
                    }))),
                    y = (void 0 !== t ? b.indexOf(t) : -1) - (r ? b.indexOf(r) : f),
                    g = ne(e, 0),
                    h = ne(e, o - 1);
                  return -1 === f || -1 === l ? te : !v && l >= 0 ? l : f <= p && a && Math.abs(v) > 1 ? h : f >= m && a && Math.abs(v) > 1 ? g : v && Math.abs(y) > 1 ? l : f <= p ? h : f > m ? g : v ? Math.abs(v) > 1 ? l : (o + l + v) % o : void 0
                }
              }(E, g, c, n);
            if (w === te) {
              var N = (t = v, r = E, o = function(e, n) {
                return e.reduce((function(e, t) {
                  return e.concat(function(e, n) {
                    return H((t = e.querySelectorAll("[".concat(d, "]")), x(t).map((function(e) {
                      return q([e])
                    })).reduce((function(e, n) {
                      return e.concat(n)
                    }), [])), n);
                    var t
                  }(t, n))
                }), [])
              }(f, l), i = t.map((function(e) {
                return e.node
              })), (a = V(i.filter((u = o, function(e) {
                var n, t = null === (n = S(e)) || void 0 === n ? void 0 : n.autofocus;
                return e.autofocus || void 0 !== t && "false" !== t || u.indexOf(e) >= 0
              })))) && a.length ? ee(a) : ee(V(r)));
              return N ? {
                node: N
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === w ? w : h[w]
          }
        },
        ae = 0,
        ce = !1,
        de = function(e, n, t) {
          void 0 === t && (t = {});
          var r, o, u = ie(e, n);
          if (!ce && u) {
            if (ae > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ce = !0, void setTimeout((function() {
              ce = !1
            }), 1);
            ae++, r = u.node, o = t.focusOptions, "focus" in r && r.focus(o), "contentWindow" in r && r.contentWindow && r.contentWindow.focus(), ae--
          }
        };

      function fe(e) {
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
      var ge = function(e) {
          return e && "current" in e ? e.current : e
        },
        he = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        Ee = function() {
          var e, n, t, r, o, u, i, a = !1;
          if (le) {
            var d = le,
              f = d.observed,
              s = d.persistentFocus,
              l = d.autoFocus,
              v = d.shards,
              p = d.crossFrame,
              m = d.focusOptions,
              b = f || pe && pe.portaledElement,
              y = document && document.activeElement;
            if (b) {
              var g = [b].concat(v.map(ge).filter(Boolean));
              if (y && ! function(e) {
                  return (le.whiteList || be)(e)
                }(y) || (s || (p ? Boolean(me) : "meanwhile" === me) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var n = J(e);
                  return !!n && x(e.querySelectorAll("[".concat(c, "]"))).some((function(e) {
                    return z(e, n)
                  }))
                }()) || !ve && l) && (b && !(Z(g) || y && function(e, n) {
                  return n.some((function(n) {
                    return he(e, n, n)
                  }))
                }(y, g) || (i = y, pe && pe.portaledElement === i)) && (document && !ve && y && !l ? (y.blur && y.blur(), document.body.focus()) : (a = de(g, ve, {
                  focusOptions: m
                }), pe = {})), me = !1, ve = document && document.activeElement), document) {
                var h = document && document.activeElement,
                  E = (n = X(e = g).filter(L), t = ue(e, e, n), r = new Map, o = Y([t], r, !0), u = Y(n, r).filter((function(e) {
                    var n = e.node;
                    return L(n)
                  })).map((function(e) {
                    return e.node
                  })), o.map((function(e) {
                    var n = e.node;
                    return {
                      node: n,
                      index: e.index,
                      lockItem: u.indexOf(n) >= 0,
                      guard: A(n)
                    }
                  }))),
                  w = E.map((function(e) {
                    return e.node
                  })).indexOf(h);
                w > -1 && (E.filter((function(e) {
                  var n = e.guard,
                    t = e.node;
                  return n && t.dataset.focusAutoGuard
                })).forEach((function(e) {
                  return e.node.removeAttribute("tabIndex")
                })), ye(w, E.length, 1, E), ye(w, -1, -1, E))
              }
            }
          }
          return a
        },
        we = function(e) {
          Ee() && e && (e.stopPropagation(), e.preventDefault())
        },
        Ne = function() {
          return fe(Ee)
        },
        Oe = function() {
          me = "just", fe((function() {
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
      })), b.assignMedium(Ne), y.assignMedium((function(e) {
        return e({
          moveFocusInside: de,
          focusInside: Z
        })
      }));
      const xe = (Ie = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Fe = function(e) {
        var n = e.slice(-1)[0];
        n && !le && (document.addEventListener("focusin", we), document.addEventListener("focusout", Ne), window.addEventListener("blur", Oe));
        var t = le,
          r = t && n && n.id === t.id;
        le = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (ve = null, r && t.observed === n.observed || n.onActivation(), Ee(), fe(Ee)) : (document.removeEventListener("focusin", we), document.removeEventListener("focusout", Ne), window.removeEventListener("blur", Oe), ve = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = Ie(t.map((function(e) {
            return e.props
          }))), Fe(n)
        }
        var i, a, c, d = function(o) {
          var i, a;

          function c() {
            return o.apply(this, arguments) || this
          }
          a = o, (i = c).prototype = Object.create(a.prototype), i.prototype.constructor = i, N(i, a), c.peek = function() {
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
            if ("object" !== O(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== O(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" === O(n) ? n : String(n)
        }(a)) in i ? Object.defineProperty(i, a, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[a] = c, d
      })((function() {
        return null
      }));
      var Ie, Fe, Te = o.forwardRef((function(e, n) {
          return o.createElement(w, r({
            sideCar: xe,
            ref: n
          }, e))
        })),
        ke = w.propTypes || {};
      ke.sideCar,
        function(e, n) {
          if (null == e) return {};
          var t, r, o = {},
            u = Object.keys(e);
          for (r = 0; r < u.length; r++) t = u[r], n.indexOf(t) >= 0 || (o[t] = e[t])
        }(ke, ["sideCar"]), Te.propTypes = {};
      const _e = Te;
      var Me = function(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          u = e.children,
          i = e.className,
          a = void 0 === i ? void 0 : i;
        return o.createElement("div", r({}, se(d, !t), {
          className: a
        }), u)
      };
      Me.propTypes = {};
      const Se = Me;
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

      function Ce(e) {
        var n = e.disabled,
          t = e.className,
          u = e.children,
          i = o.useRef(null);
        return Pe(n ? void 0 : i), o.createElement("div", r({}, se(d, !n), {
          ref: i,
          className: t
        }), u)
      }
      Ce.propTypes = {}, Ce.defaultProps = {
        disabled: !1,
        className: void 0
      };
      const De = Ce;
      var Ae = function(e) {
        var n = e.children,
          t = e.className;
        return o.createElement("div", r({}, se(c, !0), {
          className: t
        }), n)
      };
      Ae.propTypes = {}, Ae.defaultProps = {
        className: void 0
      };
      const Le = Ae,
        je = _e
    }
  }
]);