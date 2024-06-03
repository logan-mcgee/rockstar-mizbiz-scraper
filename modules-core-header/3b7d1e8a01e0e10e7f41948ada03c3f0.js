! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "be0c9c12-2c5e-4756-97da-53e98ba24836", e._sentryDebugIdIdentifier = "sentry-dbid-be0c9c12-2c5e-4756-97da-53e98ba24836")
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
  [312, 932], {
    90312: (e, n, t) => {
      t.r(n), t.d(n, {
        AutoFocusInside: () => Pe,
        FocusLockUI: () => O,
        FreeFocusInside: () => Le,
        InFocusGuard: () => p,
        MoveFocusInside: () => Ce,
        default: () => Re,
        useFocusInside: () => je
      });
      var r = t(31632),
        o = t(82795),
        u = t(51664),
        i = t.n(u),
        c = "data-focus-lock",
        a = "data-focus-lock-disabled",
        f = "data-no-focus-lock",
        d = "data-autofocus-inside",
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
      const p = v;
      var m = t(35045),
        b = (0, m.W)({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        y = (0, m.W)(),
        h = (0, m.W)(),
        g = (0, m.Y)({
          async: !0
        }),
        w = [],
        E = u.forwardRef((function(e, n) {
          var t, r = u.useState(),
            i = r[0],
            f = r[1],
            d = u.useRef(),
            v = u.useRef(!1),
            p = u.useRef(null),
            m = e.children,
            h = e.disabled,
            E = e.noFocusGuards,
            O = e.persistentFocus,
            N = e.crossFrame,
            x = e.autoFocus,
            _ = (e.allowTextSelection, e.group),
            I = e.className,
            k = e.whiteList,
            S = e.hasPositiveIndices,
            T = e.shards,
            F = void 0 === T ? w : T,
            M = e.as,
            P = void 0 === M ? "div" : M,
            j = e.lockProps,
            A = void 0 === j ? {} : j,
            C = e.sideCar,
            D = e.returnFocus,
            L = e.focusOptions,
            R = e.onActivation,
            B = e.onDeactivation,
            W = u.useState({})[0],
            G = u.useCallback((function() {
              p.current = p.current || document && document.activeElement, d.current && R && R(d.current), v.current = !0
            }), [R]),
            U = u.useCallback((function() {
              v.current = !1, B && B(d.current)
            }), [B]);
          (0, u.useEffect)((function() {
            h || (p.current = null)
          }), []);
          var q = u.useCallback((function(e) {
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
            H = u.useCallback((function(e) {
              v.current && b.useMedium(e)
            }), []),
            Y = y.useMedium,
            V = u.useCallback((function(e) {
              d.current !== e && (d.current = e, f(e))
            }), []),
            K = (0, o.c)(((t = {})[a] = h && "disabled", t[c] = _, t), A),
            X = !0 !== E,
            z = X && "tail" !== E,
            J = (0, s.m)([n, V]);
          return u.createElement(u.Fragment, null, X && [u.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: h ? -1 : 0,
            style: l
          }), S ? u.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: h ? -1 : 1,
            style: l
          }) : null], !h && u.createElement(C, {
            id: W,
            sideCar: g,
            observed: i,
            disabled: h,
            persistentFocus: O,
            crossFrame: N,
            autoFocus: x,
            whiteList: k,
            shards: F,
            onActivation: G,
            onDeactivation: U,
            returnFocus: q,
            focusOptions: L
          }), u.createElement(P, (0, o.c)({
            ref: J
          }, K, {
            className: I,
            onBlur: Y,
            onFocus: H
          }), m), z && u.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: h ? -1 : 0,
            style: l
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
      const O = E;
      var N = t(74848),
        x = t(62504);
      var _ = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        I = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        k = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        S = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        T = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        F = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || T(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && n(S(e))
          }(n, F.bind(void 0, e));
          return e.set(n, r), r
        },
        M = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !T(e)) || !!C(e) && n(S(e))
          }(n, M.bind(void 0, e));
          return e.set(n, r), r
        },
        P = function(e) {
          return e.dataset
        },
        j = function(e) {
          return "INPUT" === e.tagName
        },
        A = function(e) {
          return j(e) && "radio" === e.type
        },
        C = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        D = function(e) {
          var n;
          return Boolean(e && (null === (n = P(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        L = function(e) {
          return !D(e)
        },
        R = function(e) {
          return Boolean(e)
        },
        B = function(e, n) {
          var t = e.tabIndex - n.tabIndex,
            r = e.index - n.index;
          if (t) {
            if (!e.tabIndex) return 1;
            if (!n.tabIndex) return -1
          }
          return t || r
        },
        W = function(e, n, t) {
          return _(e).map((function(e, n) {
            return {
              node: e,
              index: n,
              tabIndex: t && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
            }
          })).filter((function(e) {
            return !n || e.tabIndex >= 0
          })).sort(B)
        },
        G = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        U = "".concat(G, ", [data-focus-guard]"),
        q = function(e, n) {
          return _((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? U : G) ? [t] : [], q(t))
          }), [])
        },
        H = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = q(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? H([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? _(t.parentNode.querySelectorAll(G)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        Y = function(e, n) {
          return _(e).filter((function(e) {
            return F(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((j(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        V = function(e, n) {
          return void 0 === n && (n = new Map), _(e).filter((function(e) {
            return M(n, e)
          }))
        },
        K = function(e, n, t) {
          return W(Y(H(e, t), n), !0, t)
        },
        X = function(e, n) {
          return W(Y(H(e), n), !1)
        },
        z = function(e, n) {
          return e.shadowRoot ? z(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || _(e.children).some((function(e) {
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
        Z = function(e) {
          return I(e).filter(Boolean).reduce((function(e, n) {
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
            }(_(Q(n).querySelectorAll("[".concat(c, '="').concat(t, '"]:not([').concat(a, '="disabled"])')))) : [n]), e
          }), [])
        },
        $ = function(e, n) {
          return void 0 === n && (n = J(k(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && Z(e).some((function(e) {
            return z(e, n) || function(e, n) {
              return Boolean(_(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        ee = function(e, n) {
          return A(e) && e.name ? function(e, n) {
            return n.filter(A).filter((function(n) {
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
        ie = function(e, n, t) {
          var r = I(e),
            o = I(n),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(e) {
            i = ue(i || e, e) || i, t.filter(Boolean).forEach((function(e) {
              var n = ue(u, e);
              n && (i = !i || z(n, i) ? n : ue(n, i))
            }))
          })), i
        },
        ce = function(e, n) {
          var t, r, o, u, i, c, a = J(I(e).length > 0 ? document : k(e).ownerDocument),
            f = Z(e).filter(L),
            s = ie(a || e, e, f),
            l = new Map,
            v = X(f, l),
            p = K(f, l).filter((function(e) {
              var n = e.node;
              return L(n)
            }));
          if (p[0] || (p = v)[0]) {
            var m, b, y, h = X([s], l).map((function(e) {
                return e.node
              })),
              g = (m = h, b = p, y = new Map, b.forEach((function(e) {
                return y.set(e.node, e)
              })), m.map((function(e) {
                return y.get(e)
              })).filter(R)),
              w = g.map((function(e) {
                return e.node
              })),
              E = function(e, n, t, r) {
                var o = e.length,
                  u = e[0],
                  i = e[o - 1],
                  c = D(t);
                if (!(t && e.indexOf(t) >= 0)) {
                  var a, f, d = void 0 !== t ? n.indexOf(t) : -1,
                    s = r ? n.indexOf(r) : d,
                    l = r ? e.indexOf(r) : -1,
                    v = d - s,
                    p = n.indexOf(u),
                    m = n.indexOf(i),
                    b = (a = n, f = new Set, a.forEach((function(e) {
                      return f.add(ee(e, a))
                    })), a.filter((function(e) {
                      return f.has(e)
                    }))),
                    y = (void 0 !== t ? b.indexOf(t) : -1) - (r ? b.indexOf(r) : d),
                    h = te(e, 0),
                    g = te(e, o - 1);
                  return -1 === d || -1 === l ? re : !v && l >= 0 ? l : d <= p && c && Math.abs(v) > 1 ? g : d >= m && c && Math.abs(v) > 1 ? h : v && Math.abs(y) > 1 ? l : d <= p ? g : d > m ? h : v ? Math.abs(v) > 1 ? l : (o + l + v) % o : void 0
                }
              }(w, h, a, n);
            if (E === re) {
              var O = (t = v, r = w, o = function(e, n) {
                return e.reduce((function(e, t) {
                  return e.concat(function(e, n) {
                    return Y((t = e.querySelectorAll("[".concat(d, "]")), _(t).map((function(e) {
                      return H([e])
                    })).reduce((function(e, n) {
                      return e.concat(n)
                    }), [])), n);
                    var t
                  }(t, n))
                }), [])
              }(f, l), i = t.map((function(e) {
                return e.node
              })), (c = V(i.filter((u = o, function(e) {
                var n, t = null === (n = P(e)) || void 0 === n ? void 0 : n.autofocus;
                return e.autofocus || void 0 !== t && "false" !== t || u.indexOf(e) >= 0
              })))) && c.length ? ne(c) : ne(V(r)));
              return O ? {
                node: O
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === E ? E : g[E]
          }
        },
        ae = 0,
        fe = !1,
        de = function(e, n, t) {
          void 0 === t && (t = {});
          var r, o, u = ce(e, n);
          if (!fe && u) {
            if (ae > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), fe = !0, void setTimeout((function() {
              fe = !1
            }), 1);
            ae++, r = u.node, o = t.focusOptions, "focus" in r && r.focus(o), "contentWindow" in r && r.contentWindow && r.contentWindow.focus(), ae--
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
        pe = null,
        me = null,
        be = !1,
        ye = function() {
          return !0
        };

      function he(e, n, t, r) {
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
        we = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        Ee = function() {
          var e, n, t, r, o, u, i, c = !1;
          if (ve) {
            var a = ve,
              d = a.observed,
              s = a.persistentFocus,
              l = a.autoFocus,
              v = a.shards,
              p = a.crossFrame,
              m = a.focusOptions,
              b = d || me && me.portaledElement,
              y = document && document.activeElement;
            if (b) {
              var h = [b].concat(v.map(ge).filter(Boolean));
              if (y && ! function(e) {
                  return (ve.whiteList || ye)(e)
                }(y) || (s || (p ? Boolean(be) : "meanwhile" === be) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var n = J(e);
                  return !!n && _(e.querySelectorAll("[".concat(f, "]"))).some((function(e) {
                    return z(e, n)
                  }))
                }()) || !pe && l) && (b && !($(h) || y && function(e, n) {
                  return n.some((function(n) {
                    return we(e, n, n)
                  }))
                }(y, h) || (i = y, me && me.portaledElement === i)) && (document && !pe && y && !l ? (y.blur && y.blur(), document.body.focus()) : (c = de(h, pe, {
                  focusOptions: m
                }), me = {})), be = !1, pe = document && document.activeElement), document) {
                var g = document && document.activeElement,
                  w = (n = Z(e = h).filter(L), t = ie(e, e, n), r = new Map, o = K([t], r, !0), u = K(n, r).filter((function(e) {
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
                      guard: D(n)
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
                })), he(E, w.length, 1, w), he(E, -1, -1, w))
              }
            }
          }
          return c
        },
        Oe = function(e) {
          Ee() && e && (e.stopPropagation(), e.preventDefault())
        },
        Ne = function() {
          return se(Ee)
        },
        xe = function() {
          be = "just", se((function() {
            be = "meanwhile"
          }))
        };
      b.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (me = {
          observerNode: t,
          portaledElement: n
        })
      })), y.assignMedium(Ne), h.assignMedium((function(e) {
        return e({
          moveFocusInside: de,
          focusInside: $
        })
      }));
      const _e = (Ie = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, ke = function(e) {
        var n = e.slice(-1)[0];
        n && !ve && (document.addEventListener("focusin", Oe), document.addEventListener("focusout", Ne), window.addEventListener("blur", xe));
        var t = ve,
          r = t && n && n.id === t.id;
        ve = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (pe = null, r && t.observed === n.observed || n.onActivation(), Ee(), se(Ee)) : (document.removeEventListener("focusin", Oe), document.removeEventListener("focusout", Ne), window.removeEventListener("blur", xe), pe = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = Ie(t.map((function(e) {
            return e.props
          }))), ke(n)
        }
        var o = function(o) {
          var u, c;

          function a() {
            return o.apply(this, arguments) || this
          }
          c = o, (u = a).prototype = Object.create(c.prototype), u.prototype.constructor = u, (0, N.c)(u, c), a.peek = function() {
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
        return (0, x.c)(o, "displayName", "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")"), o
      })((function() {
        return null
      }));
      var Ie, ke, Se = u.forwardRef((function(e, n) {
          return u.createElement(O, (0, o.c)({
            sideCar: _e,
            ref: n
          }, e))
        })),
        Te = O.propTypes || {};
      Te.sideCar, (0, r.c)(Te, ["sideCar"]), Se.propTypes = {};
      const Fe = Se;
      var Me = function(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          r = e.children,
          i = e.className,
          c = void 0 === i ? void 0 : i;
        return u.createElement("div", (0, o.c)({}, le(d, !t), {
          className: c
        }), r)
      };
      Me.propTypes = {};
      const Pe = Me;
      var je = function(e) {
        u.useEffect((function() {
          var n = !0;
          return h.useMedium((function(t) {
              var r = e && e.current;
              n && r && (t.focusInside(r) || t.moveFocusInside(r, null))
            })),
            function() {
              n = !1
            }
        }), [e])
      };

      function Ae(e) {
        var n = e.disabled,
          t = e.className,
          r = e.children,
          i = u.useRef(null);
        return je(n ? void 0 : i), u.createElement("div", (0, o.c)({}, le(d, !n), {
          ref: i,
          className: t
        }), r)
      }
      Ae.propTypes = {}, Ae.defaultProps = {
        disabled: !1,
        className: void 0
      };
      const Ce = Ae;
      var De = function(e) {
        var n = e.children,
          t = e.className;
        return u.createElement("div", (0, o.c)({}, le(f, !0), {
          className: t
        }), n)
      };
      De.propTypes = {}, De.defaultProps = {
        className: void 0
      };
      const Le = De,
        Re = Fe
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
        W: () => i,
        Y: () => c
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

      function c(e) {
        void 0 === e && (e = {});
        var n = u(null);
        return n.options = (0, r.C3)({
          async: !0,
          ssr: !1
        }, e), n
      }
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
        Mt: () => f,
        ct: () => o,
        kH: () => c,
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

      function c(e, n, t, r) {
        return new(t || (t = Promise))((function(o, u) {
          function i(e) {
            try {
              a(r.next(e))
            } catch (e) {
              u(e)
            }
          }

          function c(e) {
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
            }))).then(i, c)
          }
          a((r = r.apply(e, n || [])).next())
        }))
      }

      function a(e, n) {
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
          next: c(0),
          throw: c(1),
          return: c(2)
        }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
          return this
        }), u;

        function c(c) {
          return function(a) {
            return function(c) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; u && (u = 0, c[0] && (i = 0)), i;) try {
                if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return i.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    i.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      i.label = c[1];
                      break
                    }
                    if (6 === c[0] && i.label < o[1]) {
                      i.label = o[1], o = c;
                      break
                    }
                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(c);
                      break
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                c = n.call(e, i)
              } catch (e) {
                c = [6, e], r = 0
              } finally {
                t = o = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, a])
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