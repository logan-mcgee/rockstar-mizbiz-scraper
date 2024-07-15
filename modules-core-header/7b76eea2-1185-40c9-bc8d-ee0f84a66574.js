! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7b76eea2-1185-40c9-bc8d-ee0f84a66574", e._sentryDebugIdIdentifier = "sentry-dbid-7b76eea2-1185-40c9-bc8d-ee0f84a66574")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [932], {
    90312: (e, n, t) => {
      t.r(n), t.d(n, {
        AutoFocusInside: () => Ae,
        FocusLockUI: () => N,
        FreeFocusInside: () => Re,
        InFocusGuard: () => m,
        MoveFocusInside: () => Pe,
        default: () => Be,
        useFocusInside: () => Se
      });
      var r = t(31632),
        o = t(82795),
        u = t(51664),
        a = t.n(u),
        i = "data-focus-lock",
        c = "data-focus-lock-disabled",
        d = "data-no-focus-lock",
        f = "data-autofocus-inside",
        s = t(92634),
        l = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        v = function(e) {
          var n = e.children;
          return u.createElement(u.Fragment, null, u.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: l
          }), n, n && u.createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: l
          }))
        };
      v.propTypes = {}, v.defaultProps = {
        children: null
      };
      const m = v;
      var p = t(35045),
        h = (0, p.W)({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        b = (0, p.W)(),
        g = (0, p.W)(),
        y = (0, p.Y)({
          async: !0
        }),
        E = [],
        w = u.forwardRef((function(e, n) {
          var t, r = u.useState(),
            a = r[0],
            d = r[1],
            f = u.useRef(),
            v = u.useRef(!1),
            m = u.useRef(null),
            p = e.children,
            g = e.disabled,
            w = e.noFocusGuards,
            N = e.persistentFocus,
            I = e.crossFrame,
            x = e.autoFocus,
            O = (e.allowTextSelection, e.group),
            k = e.className,
            F = e.whiteList,
            M = e.hasPositiveIndices,
            T = e.shards,
            _ = void 0 === T ? E : T,
            D = e.as,
            A = void 0 === D ? "div" : D,
            S = e.lockProps,
            C = void 0 === S ? {} : S,
            P = e.sideCar,
            L = e.returnFocus,
            R = e.focusOptions,
            B = e.onActivation,
            W = e.onDeactivation,
            U = u.useState({})[0],
            G = u.useCallback((function() {
              m.current = m.current || document && document.activeElement, f.current && B && B(f.current), v.current = !0
            }), [B]),
            j = u.useCallback((function() {
              v.current = !1, W && W(f.current)
            }), [W]);
          (0, u.useEffect)((function() {
            g || (m.current = null)
          }), []);
          var q = u.useCallback((function(e) {
              var n = m.current;
              if (n && n.focus) {
                var t = "function" == typeof L ? L(n) : L;
                if (t) {
                  var r = "object" == typeof t ? t : void 0;
                  m.current = null, e ? Promise.resolve().then((function() {
                    return n.focus(r)
                  })) : n.focus(r)
                }
              }
            }), [L]),
            Y = u.useCallback((function(e) {
              v.current && h.useMedium(e)
            }), []),
            H = b.useMedium,
            V = u.useCallback((function(e) {
              f.current !== e && (f.current = e, d(e))
            }), []),
            K = (0, o.c)(((t = {})[c] = g && "disabled", t[i] = O, t), C),
            z = !0 !== w,
            J = z && "tail" !== w,
            Q = (0, s.m)([n, V]);
          return u.createElement(u.Fragment, null, z && [u.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: g ? -1 : 0,
            style: l
          }), M ? u.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: g ? -1 : 1,
            style: l
          }) : null], !g && u.createElement(P, {
            id: U,
            sideCar: y,
            observed: a,
            disabled: g,
            persistentFocus: N,
            crossFrame: I,
            autoFocus: x,
            whiteList: F,
            shards: _,
            onActivation: G,
            onDeactivation: j,
            returnFocus: q,
            focusOptions: R
          }), u.createElement(A, (0, o.c)({
            ref: Q
          }, K, {
            className: k,
            onBlur: H,
            onFocus: Y
          }), p), J && u.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: g ? -1 : 0,
            style: l
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
      var I = t(74848),
        x = t(62504);
      var O = function(e) {
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
        _ = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || T(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && n(M(e))
          }(n, _.bind(void 0, e));
          return e.set(n, r), r
        },
        D = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !T(e)) || !!P(e) && n(M(e))
          }(n, D.bind(void 0, e));
          return e.set(n, r), r
        },
        A = function(e) {
          return e.dataset
        },
        S = function(e) {
          return "INPUT" === e.tagName
        },
        C = function(e) {
          return S(e) && "radio" === e.type
        },
        P = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        L = function(e) {
          var n;
          return Boolean(e && (null === (n = A(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        R = function(e) {
          return !L(e)
        },
        B = function(e) {
          return Boolean(e)
        },
        W = function(e, n) {
          var t = e.tabIndex - n.tabIndex,
            r = e.index - n.index;
          if (t) {
            if (!e.tabIndex) return 1;
            if (!n.tabIndex) return -1
          }
          return t || r
        },
        U = function(e, n, t) {
          return O(e).map((function(e, n) {
            return {
              node: e,
              index: n,
              tabIndex: t && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
            }
          })).filter((function(e) {
            return !n || e.tabIndex >= 0
          })).sort(W)
        },
        G = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        j = "".concat(G, ", [data-focus-guard]"),
        q = function(e, n) {
          return O((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? j : G) ? [t] : [], q(t))
          }), [])
        },
        Y = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = q(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? Y([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? O(t.parentNode.querySelectorAll(G)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        H = function(e, n) {
          return O(e).filter((function(e) {
            return _(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((S(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        V = function(e, n) {
          return void 0 === n && (n = new Map), O(e).filter((function(e) {
            return D(n, e)
          }))
        },
        K = function(e, n, t) {
          return U(H(Y(e, t), n), !0, t)
        },
        z = function(e, n) {
          return U(H(Y(e), n), !1)
        },
        J = function(e, n) {
          return e.shadowRoot ? J(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || O(e.children).some((function(e) {
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
        X = function(e) {
          return e.parentNode ? X(e.parentNode) : e
        },
        Z = function(e) {
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
            }(O(X(n).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(c, '="disabled"])')))) : [n]), e
          }), [])
        },
        $ = function(e, n) {
          return void 0 === n && (n = Q(F(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && Z(e).some((function(e) {
            return J(e, n) || function(e, n) {
              return Boolean(O(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        ee = function(e, n) {
          return C(e) && e.name ? function(e, n) {
            return n.filter(C).filter((function(n) {
              return n.name === e.name
            })).filter((function(e) {
              return e.checked
            }))[0] || e
          }(e, n) : e
        },
        ne = function(e) {
          return e[0] && e.length > 1 ? ee(e[0], e) : e[0]
        },
        te = function(e, n) {
          return e.length > 1 ? e.indexOf(ee(e[n], e)) : n
        },
        re = "NEW_FOCUS",
        oe = function(e, n) {
          return void 0 === n && (n = []), n.push(e), e.parentNode && oe(e.parentNode.host || e.parentNode, n), n
        },
        ue = function(e, n) {
          for (var t = oe(e), r = oe(n), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        ae = function(e, n, t) {
          var r = k(e),
            o = k(n),
            u = r[0],
            a = !1;
          return o.filter(Boolean).forEach((function(e) {
            a = ue(a || e, e) || a, t.filter(Boolean).forEach((function(e) {
              var n = ue(u, e);
              n && (a = !a || J(n, a) ? n : ue(n, a))
            }))
          })), a
        },
        ie = function(e, n) {
          var t, r, o, u, a, i, c = Q(k(e).length > 0 ? document : F(e).ownerDocument),
            d = Z(e).filter(R),
            s = ae(c || e, e, d),
            l = new Map,
            v = z(d, l),
            m = K(d, l).filter((function(e) {
              var n = e.node;
              return R(n)
            }));
          if (m[0] || (m = v)[0]) {
            var p, h, b, g = z([s], l).map((function(e) {
                return e.node
              })),
              y = (p = g, h = m, b = new Map, h.forEach((function(e) {
                return b.set(e.node, e)
              })), p.map((function(e) {
                return b.get(e)
              })).filter(B)),
              E = y.map((function(e) {
                return e.node
              })),
              w = function(e, n, t, r) {
                var o = e.length,
                  u = e[0],
                  a = e[o - 1],
                  i = L(t);
                if (!(t && e.indexOf(t) >= 0)) {
                  var c, d, f = void 0 !== t ? n.indexOf(t) : -1,
                    s = r ? n.indexOf(r) : f,
                    l = r ? e.indexOf(r) : -1,
                    v = f - s,
                    m = n.indexOf(u),
                    p = n.indexOf(a),
                    h = (c = n, d = new Set, c.forEach((function(e) {
                      return d.add(ee(e, c))
                    })), c.filter((function(e) {
                      return d.has(e)
                    }))),
                    b = (void 0 !== t ? h.indexOf(t) : -1) - (r ? h.indexOf(r) : f),
                    g = te(e, 0),
                    y = te(e, o - 1);
                  return -1 === f || -1 === l ? re : !v && l >= 0 ? l : f <= m && i && Math.abs(v) > 1 ? y : f >= p && i && Math.abs(v) > 1 ? g : v && Math.abs(b) > 1 ? l : f <= m ? y : f > p ? g : v ? Math.abs(v) > 1 ? l : (o + l + v) % o : void 0
                }
              }(E, g, c, n);
            if (w === re) {
              var N = (t = v, r = E, o = function(e, n) {
                return e.reduce((function(e, t) {
                  return e.concat(function(e, n) {
                    return H((t = e.querySelectorAll("[".concat(f, "]")), O(t).map((function(e) {
                      return Y([e])
                    })).reduce((function(e, n) {
                      return e.concat(n)
                    }), [])), n);
                    var t
                  }(t, n))
                }), [])
              }(d, l), a = t.map((function(e) {
                return e.node
              })), (i = V(a.filter((u = o, function(e) {
                var n, t = null === (n = A(e)) || void 0 === n ? void 0 : n.autofocus;
                return e.autofocus || void 0 !== t && "false" !== t || u.indexOf(e) >= 0
              })))) && i.length ? ne(i) : ne(V(r)));
              return N ? {
                node: N
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === w ? w : y[w]
          }
        },
        ce = 0,
        de = !1,
        fe = function(e, n, t) {
          void 0 === t && (t = {});
          var r, o, u = ie(e, n);
          if (!de && u) {
            if (ce > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), de = !0, void setTimeout((function() {
              de = !1
            }), 1);
            ce++, r = u.node, o = t.focusOptions, "focus" in r && r.focus(o), "contentWindow" in r && r.contentWindow && r.contentWindow.focus(), ce--
          }
        };

      function se(e) {
        setTimeout(e, 1)
      }
      var le = function(e, n) {
          var t = {};
          return t[e] = n, t
        },
        ve = null,
        me = null,
        pe = null,
        he = !1,
        be = function() {
          return !0
        };

      function ge(e, n, t, r) {
        var o = null,
          u = e;
        do {
          var a = r[u];
          if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
          else {
            if (!a.lockItem) break;
            if (u !== e) return;
            o = null
          }
        } while ((u += t) !== n);
        o && (o.node.tabIndex = 0)
      }
      var ye = function(e) {
          return e && "current" in e ? e.current : e
        },
        Ee = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        we = function() {
          var e, n, t, r, o, u, a, i = !1;
          if (ve) {
            var c = ve,
              f = c.observed,
              s = c.persistentFocus,
              l = c.autoFocus,
              v = c.shards,
              m = c.crossFrame,
              p = c.focusOptions,
              h = f || pe && pe.portaledElement,
              b = document && document.activeElement;
            if (h) {
              var g = [h].concat(v.map(ye).filter(Boolean));
              if (b && ! function(e) {
                  return (ve.whiteList || be)(e)
                }(b) || (s || (m ? Boolean(he) : "meanwhile" === he) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var n = Q(e);
                  return !!n && O(e.querySelectorAll("[".concat(d, "]"))).some((function(e) {
                    return J(e, n)
                  }))
                }()) || !me && l) && (h && !($(g) || b && function(e, n) {
                  return n.some((function(n) {
                    return Ee(e, n, n)
                  }))
                }(b, g) || (a = b, pe && pe.portaledElement === a)) && (document && !me && b && !l ? (b.blur && b.blur(), document.body.focus()) : (i = fe(g, me, {
                  focusOptions: p
                }), pe = {})), he = !1, me = document && document.activeElement), document) {
                var y = document && document.activeElement,
                  E = (n = Z(e = g).filter(R), t = ae(e, e, n), r = new Map, o = K([t], r, !0), u = K(n, r).filter((function(e) {
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
                  w = E.map((function(e) {
                    return e.node
                  })).indexOf(y);
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
          return i
        },
        Ne = function(e) {
          we() && e && (e.stopPropagation(), e.preventDefault())
        },
        Ie = function() {
          return se(we)
        },
        xe = function() {
          he = "just", se((function() {
            he = "meanwhile"
          }))
        };
      h.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (pe = {
          observerNode: t,
          portaledElement: n
        })
      })), b.assignMedium(Ie), g.assignMedium((function(e) {
        return e({
          moveFocusInside: fe,
          focusInside: $
        })
      }));
      const Oe = (ke = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Fe = function(e) {
        var n = e.slice(-1)[0];
        n && !ve && (document.addEventListener("focusin", Ne), document.addEventListener("focusout", Ie), window.addEventListener("blur", xe));
        var t = ve,
          r = t && n && n.id === t.id;
        ve = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (me = null, r && t.observed === n.observed || n.onActivation(), we(), se(we)) : (document.removeEventListener("focusin", Ne), document.removeEventListener("focusout", Ie), window.removeEventListener("blur", xe), me = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = ke(t.map((function(e) {
            return e.props
          }))), Fe(n)
        }
        var o = function(o) {
          var u, i;

          function c() {
            return o.apply(this, arguments) || this
          }
          i = o, (u = c).prototype = Object.create(i.prototype), u.prototype.constructor = u, (0, I.c)(u, i), c.peek = function() {
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
            return a().createElement(e, this.props)
          }, c
        }(u.PureComponent);
        return (0, x.c)(o, "displayName", "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")"), o
      })((function() {
        return null
      }));
      var ke, Fe, Me = u.forwardRef((function(e, n) {
          return u.createElement(N, (0, o.c)({
            sideCar: Oe,
            ref: n
          }, e))
        })),
        Te = N.propTypes || {};
      Te.sideCar, (0, r.c)(Te, ["sideCar"]), Me.propTypes = {};
      const _e = Me;
      var De = function(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          r = e.children,
          a = e.className,
          i = void 0 === a ? void 0 : a;
        return u.createElement("div", (0, o.c)({}, le(f, !t), {
          className: i
        }), r)
      };
      De.propTypes = {};
      const Ae = De;
      var Se = function(e) {
        u.useEffect((function() {
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
          r = e.children,
          a = u.useRef(null);
        return Se(n ? void 0 : a), u.createElement("div", (0, o.c)({}, le(f, !n), {
          ref: a,
          className: t
        }), r)
      }
      Ce.propTypes = {}, Ce.defaultProps = {
        disabled: !1,
        className: void 0
      };
      const Pe = Ce;
      var Le = function(e) {
        var n = e.children,
          t = e.className;
        return u.createElement("div", (0, o.c)({}, le(d, !0), {
          className: t
        }), n)
      };
      Le.propTypes = {}, Le.defaultProps = {
        className: void 0
      };
      const Re = Le,
        Be = _e
    },
    92634: (e, n, t) => {
      t.d(n, {
        m: () => o
      });
      var r = t(51664);

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
    35045: (e, n, t) => {
      t.d(n, {
        W: () => a,
        Y: () => i
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
              a = function() {
                return Promise.resolve().then(u)
              };
            a(), t = {
              push: function(e) {
                n.push(e), a()
              },
              filter: function(e) {
                return n = n.filter(e), t
              }
            }
          }
        }
      }

      function a(e, n) {
        return void 0 === n && (n = o), u(e, n)
      }

      function i(e) {
        void 0 === e && (e = {});
        var n = u(null);
        return n.options = (0, r.C3)({
          async: !0,
          ssr: !1
        }, e), n
      }
    }
  }
]);